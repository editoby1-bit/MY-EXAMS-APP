/* ═══════════════════════════════════════════════════════════
   MY EXAMS APP — v2.1  (bug-fixed)
   WAEC · NECO · GCE · NABTEB
═══════════════════════════════════════════════════════════ */
(() => {

  const SK = {
    users:   'mea-users-v1',
    current: 'mea-current-v1',
    access:  'mea-access-v1',
    free:    'mea-free-lifetime-v1',   // lifetime trial counter
    streak:  'mea-streak-v1',
    tier:    'mea-tier-v1',            // 'student' | 'plus'
  };
  const FREE_TRIAL_LIMIT    = 10;   // lifetime questions, not daily
  const FREE_SNAP_LIMIT     = 3;    // lifetime snaps on free tier
  const EARLY_ADOPTER_PRICE = 200000; // ₦2,000 in kobo
  const STANDARD_PRICE      = 250000; // ₦2,500 in kobo
  const EARLY_ADOPTER_CAP   = 100;    // first 100 students

  const S = {
    currentUser: loadSafe(SK.current) || '',
    users:       loadSafe(SK.users, {}),
    hasAccess:   checkAccess(),
    tier:        loadSafe(SK.tier) || 'free',
    freeUsed:    getFreeUsed(),       // lifetime questions used on free tier
    freeSnaps:   getFreeSnaps(),      // lifetime snaps used on free tier
    streak:      loadSafe(SK.streak, { count:0, lastDate:'' }),
    exam:        'WAEC',
    year:        'random',            // 'random' or e.g. 2023
    subject:     '',
    mode:        'practice',
    type:        'objective',
    count:       20,
    questions:   [],
    answers:     [],
    flagged:     [],
    idx:         0,
    reviewMode:  false,
    showAnswer:  false,
    timerSecs:   0,
    timerId:     null,
    inSession:   false,
  };

  /* ── Element cache ── */
  const E = {};
  [
    'homeScreen','quizScreen','resultScreen',
    'studentNameInput','loginBtn','studentPill','streakDisplay',
    'subjectGrid','modeToggle','typeToggle','qCountSelect','durationSelect',
    'startBtn','startBtnText',
    'historyList','clearHistoryBtn',
    'hStatSessions','hStatAvg','hStatBest','hStatQs',
    'paywallOverlay','paywallBadge','payBtn','payBtnPlus','accessCodeInput','redeemBtn','closePaywall',
    'earlyAdopterBanner','earlyAdopterCounter',
    'yearPillsContainer',
    'sidebarToggle','sidebarBackdrop','quizSidebar','exitBtn',
    'sbStudent','sbSubject','sbMode','sbExam',
    'timerCard','timerDisplay',
    'progressBar','progressFraction','progressSub',
    'qPills','submitQuizBtn',
    'qtypeBanner','qNumBadge','qSubjectTag','qYearTag','qPosIndicator','flagBtn',
    'objectivePanel','objectiveQuestion','optionsList','explanationArea','keyHint',
    'theoryPanel','theoryQuestion','markingScheme','toggleAnswerBtn','modelAnswer','examTipBox',
    'prevBtn','nextBtn',
    'resultEmoji','resultScore','resultGrade','resultSummary','resultStatsGrid','resultBreakdown',
    'reviewBtn','homeBtn','shareBtn',
  ].forEach(id => {
    const el = document.getElementById(id);
    if (!el) console.warn('Missing element:', id);
    E[id] = el;
  });

  /* ════════ INIT ════════ */
  function init() {
    buildSubjectGrid();
    bindEvents();
    restoreUser();
    refreshStats();
    renderHistory();
    renderStreak();
    countQuestions();
  }

  function countQuestions() {
    let t = 0;
    Object.values(EXAM_BANK).forEach(s => {
      t += (s.objective?.length||0) + (s.theory?.length||0);
    });
    if (E.hStatQs) E.hStatQs.textContent = t;
  }

  /* ════════ SUBJECT GRID ════════ */
  function buildSubjectGrid() {
    E.subjectGrid.innerHTML = '';
    Object.entries(SUBJECTS).forEach(([key, meta]) => {
      if (!EXAM_BANK[key]) return;
      const btn = document.createElement('button');
      btn.className = 'subject-btn';
      btn.dataset.subject = key;
      btn.innerHTML =
        `<span class="sub-icon">${meta.icon}</span>` +
        `<span class="sub-name">${meta.name}</span>` +
        `<span class="sub-count" data-subject-count="${key}">0Q</span>`;
      btn.addEventListener('click', () => pickSubject(key, btn));
      E.subjectGrid.appendChild(btn);
    });
    updateSubjectCounts(); // populate counts for current exam
  }

  function getExamCount(key) {
    const bank = EXAM_BANK[key];
    if (!bank) return 0;
    const examFilter = q => !q.exam || q.exam === S.exam;
    const obj = (bank.objective||[]).filter(examFilter).length;
    const th  = (bank.theory||[]).filter(examFilter).length;
    if (S.type === 'objective') return obj;
    if (S.type === 'theory')    return th;
    return obj + th;
  }

  /* ════════ EVENTS ════════ */
  function bindEvents() {
    E.loginBtn.addEventListener('click', loginStudent);
    E.studentNameInput.addEventListener('keydown', e => { if (e.key==='Enter') loginStudent(); });

    document.querySelectorAll('#examPillsContainer .exam-pill').forEach(p =>
      p.addEventListener('click', () => {
        document.querySelectorAll('#examPillsContainer .exam-pill').forEach(x => x.classList.remove('active'));
        p.classList.add('active');
        S.exam = p.dataset.exam;
        updateSubjectCounts();
      })
    );

    // Year pills
    document.querySelectorAll('#yearPillsContainer .year-pill').forEach(p =>
      p.addEventListener('click', () => {
        document.querySelectorAll('#yearPillsContainer .year-pill').forEach(x => x.classList.remove('active'));
        p.classList.add('active');
        S.year = p.dataset.year === 'random' ? 'random' : Number(p.dataset.year);
        updateSubjectCounts();
      })
    );

    E.modeToggle.querySelectorAll('.mode-btn').forEach(b =>
      b.addEventListener('click', () => {
        E.modeToggle.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        S.mode = b.dataset.mode;
        E.durationSelect.disabled = (S.mode !== 'exam');
        refreshStartBtn();
      })
    );

    E.typeToggle.querySelectorAll('.mode-btn').forEach(b =>
      b.addEventListener('click', () => {
        E.typeToggle.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        S.type = b.dataset.type;
        updateSubjectCounts();
        refreshStartBtn();
      })
    );

    E.qCountSelect.addEventListener('change', () => {
      S.count = E.qCountSelect.value === 'all' ? 'all' : Number(E.qCountSelect.value);
    });

    E.startBtn.addEventListener('click', startSession);
    E.clearHistoryBtn.addEventListener('click', clearHistory);

    E.payBtn.addEventListener('click', () => handlePayment('student'));
    if (E.payBtnPlus) E.payBtnPlus.addEventListener('click', () => handlePayment('plus'));
    E.redeemBtn.addEventListener('click', redeemCode);
    E.closePaywall.addEventListener('click', () => E.paywallOverlay.classList.add('hidden'));

    E.exitBtn.addEventListener('click', confirmExit);
    E.submitQuizBtn.addEventListener('click', confirmSubmit);
    E.prevBtn.addEventListener('click', () => navigate(-1));
    E.nextBtn.addEventListener('click', () => navigate(1));
    E.toggleAnswerBtn.addEventListener('click', toggleAnswer);
    E.flagBtn.addEventListener('click', toggleFlag);

    E.sidebarToggle.addEventListener('click', openSidebar);
    E.sidebarBackdrop.addEventListener('click', closeSidebar);

    E.reviewBtn.addEventListener('click', enterReview);
    E.homeBtn.addEventListener('click', goHome);
    E.shareBtn.addEventListener('click', shareApp);

    document.addEventListener('keydown', onKey);

    window.addEventListener('beforeunload', e => {
      if (S.inSession && S.mode === 'exam' && !S.reviewMode) {
        e.preventDefault(); e.returnValue = '';
      }
    });
  }

  /* ════════ KEYBOARD ════════ */
  function onKey(e) {
    if (!E.quizScreen.classList.contains('active')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const q = S.questions[S.idx];
    switch(e.key) {
      case 'ArrowRight': case 'ArrowDown': e.preventDefault(); navigate(1); break;
      case 'ArrowLeft':  case 'ArrowUp':   e.preventDefault(); navigate(-1); break;
      case '1': case '2': case '3': case '4':
        if (!S.reviewMode && q?._type==='objective' && S.answers[S.idx]===null) {
          const i = Number(e.key)-1;
          if (i < (q.options?.length||0)) { S.answers[S.idx]=i; renderQ(); }
        }
        break;
      case 'f': case 'F': toggleFlag(); break;
      case 'Escape':
        if (E.quizSidebar.classList.contains('sidebar-open')) closeSidebar();
        else confirmExit();
        break;
    }
  }

  /* ════════ LOGIN / USER ════════ */
  function loginStudent() {
    const name = E.studentNameInput.value.trim().replace(/\s+/g,' ');
    if (!name) {
      E.studentNameInput.focus();
      E.studentNameInput.style.borderColor = 'var(--red)';
      setTimeout(() => { E.studentNameInput.style.borderColor = ''; }, 1500);
      return;
    }
    if (!S.users[name]) S.users[name] = { history:[] };
    S.currentUser = name;
    saveSafe(SK.users, S.users);
    saveSafe(SK.current, name);
    tickStreak();
    renderUser();
    refreshStats();
    renderHistory();
    refreshStartBtn();
  }

  function restoreUser() {
    if (S.currentUser) {
      E.studentNameInput.value = S.currentUser;
      renderUser();
      renderHistory();
    }
    refreshStats();
  }

  function renderUser() {
    if (S.currentUser) {
      E.studentPill.textContent = '✓  ' + S.currentUser;
      E.studentPill.className = 'student-status active';
      updateFreeTrialIndicator();
    } else {
      E.studentPill.textContent = 'No student logged in';
      E.studentPill.className = 'student-status';
    }
  }

  /* ════════ STREAK ════════ */
  function tickStreak() {
    const today = todayStr();
    const prev  = new Date(Date.now()-86400000).toISOString().slice(0,10);
    if (S.streak.lastDate === today) return;
    S.streak.count = S.streak.lastDate === prev ? S.streak.count+1 : 1;
    S.streak.lastDate = today;
    saveSafe(SK.streak, S.streak);
    renderStreak();
  }

  function renderStreak() {
    if (!E.streakDisplay) return;
    const c = S.streak.count||0;
    if (c > 0) {
      E.streakDisplay.textContent = `🔥 ${c} day${c>1?'s':''}`;
      E.streakDisplay.style.display = 'inline-flex';
    } else {
      E.streakDisplay.style.display = 'none';
    }
  }

  /* ════════ SUBJECT SELECTION ════════ */
  function pickSubject(key, btn) {
    document.querySelectorAll('.subject-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    S.subject = key;
    refreshStartBtn();
  }

  function updateSubjectCounts() {
    document.querySelectorAll('.subject-btn').forEach(btn => {
      const key  = btn.dataset.subject;
      const bank = EXAM_BANK[key];
      if (!bank) { btn.disabled=true; return; }
      const hasObj = (bank.objective?.length||0) > 0;
      const hasTh  = (bank.theory?.length||0) > 0;
      const ok = S.type==='objective' ? hasObj
               : S.type==='theory'    ? hasTh
               : hasObj||hasTh;
      btn.disabled = !ok;
      btn.style.opacity = ok ? '' : '0.35';
      const n = getExamCount(key);
      const c = btn.querySelector('.sub-count');
      if (c) c.textContent = (n||'0')+'Q';
    });
    if (S.subject) {
      const active = document.querySelector('.subject-btn.active');
      if (!active || active.disabled) { S.subject=''; refreshStartBtn(); }
    }
  }

  function refreshStartBtn() {
    const hasSubject = Boolean(S.subject);
    const hasUser    = Boolean(S.currentUser);

    if (!hasUser) {
      E.startBtn.disabled = false; // keep enabled — clicking will prompt to login
      E.startBtnText.textContent = 'Login above to start';
    } else if (!hasSubject) {
      E.startBtn.disabled = true;
      E.startBtnText.textContent = 'Select a subject to begin';
    } else {
      E.startBtn.disabled = false;
      E.startBtnText.textContent =
        `${S.mode==='exam' ? 'Start Exam' : 'Start Practice'} — ${SUBJECTS[S.subject]?.name||S.subject}`;
    }
  }

  /* ════════ START SESSION ════════ */
  function startSession() {
    // Must be logged in — give clear feedback if not
    if (!S.currentUser) {
      E.studentNameInput.focus();
      E.studentNameInput.style.borderColor = 'var(--red)';
      setTimeout(() => { E.studentNameInput.style.borderColor = ''; }, 2000);
      E.studentPill.textContent = '⚠ Please enter your name above first';
      E.studentPill.style.color = 'var(--red)';
      setTimeout(() => {
        E.studentPill.style.color = '';
        renderUser();
      }, 2500);
      return;
    }

    // Must have subject
    if (!S.subject) {
      alert('Please select a subject first.');
      return;
    }

    // Paywall — lifetime trial check
    if (!S.hasAccess && S.freeUsed >= FREE_TRIAL_LIMIT) {
      showPaywall('trial');
      return;
    }

    const bank = EXAM_BANK[S.subject];
    if (!bank) { alert('Subject data not found. Please try another.'); return; }

    // Filter by exam AND year (random = all years)
    const examFilter = q => (!q.exam || q.exam === S.exam) &&
                            (S.year === 'random' || !q.year || q.year === S.year);

    let pool = [];
    if (S.type === 'objective') {
      let qs = (bank.objective||[]).filter(examFilter);
      if (!qs.length) qs = (bank.objective||[]).filter(q => !q.exam || q.exam === S.exam); // drop year fallback
      if (!qs.length) qs = [...(bank.objective||[])]; // final fallback: all
      pool = shuffle(qs).map(q => ({...q, _type:'objective'}));
    } else if (S.type === 'theory') {
      let qs = (bank.theory||[]).filter(examFilter);
      if (!qs.length) qs = (bank.theory||[]).filter(q => !q.exam || q.exam === S.exam);
      if (!qs.length) qs = [...(bank.theory||[])];
      pool = shuffle(qs).map(q => ({...q, _type:'theory'}));
    } else {
      let objQs = (bank.objective||[]).filter(examFilter);
      if (!objQs.length) objQs = (bank.objective||[]).filter(q => !q.exam || q.exam === S.exam);
      if (!objQs.length) objQs = [...(bank.objective||[])];
      let thQs  = (bank.theory||[]).filter(examFilter);
      if (!thQs.length)  thQs  = (bank.theory||[]).filter(q => !q.exam || q.exam === S.exam);
      if (!thQs.length)  thQs  = [...(bank.theory||[])];
      pool = [
        ...shuffle(objQs).map(q => ({...q, _type:'objective'})),
        ...shuffle(thQs).map(q =>  ({...q, _type:'theory'})),
      ];
    }

    if (!pool.length) {
      alert('No questions available for this selection. Try a different subject or type.');
      return;
    }

    const n = S.count === 'all' ? pool.length : Math.min(Number(S.count), pool.length);
    S.questions  = pool.slice(0, n);
    S.answers    = new Array(n).fill(null);
    S.flagged    = new Array(n).fill(false);
    S.idx        = 0;
    S.reviewMode = false;
    S.showAnswer = false;
    S.inSession  = true;

    // Timer — read from E.durationSelect (was the v1 bug)
    if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }
    if (S.mode === 'exam') {
      const raw  = E.durationSelect.value;
      const mins = raw === 'auto' ? n : (parseInt(raw) || n);
      S.timerSecs = mins * 60;
      E.timerCard.style.display = 'block';
      runTimer();
    } else {
      S.timerSecs = 0;
      E.timerCard.style.display = 'none';
    }

    // Count free usage — lifetime, per session start
    if (!S.hasAccess) {
      S.freeUsed++;
      saveSafe(SK.free, { n: S.freeUsed });
      updateFreeTrialIndicator();
    }

    E.sbStudent.textContent = S.currentUser;
    E.sbSubject.textContent = SUBJECTS[S.subject]?.name || S.subject;
    E.sbMode.textContent    = S.mode === 'exam' ? 'Exam Mode' : 'Practice';
    E.sbExam.textContent    = S.exam;

    buildPills();
    renderQ();
    showScreen('quiz');
  }

  /* ════════ TIMER ════════ */
  function runTimer() {
    tickClock();
    S.timerId = setInterval(() => {
      S.timerSecs--;
      tickClock();
      if (S.timerSecs <= 0) {
        clearInterval(S.timerId); S.timerId = null;
        finishSession(true);
      }
    }, 1000);
  }

  function tickClock() {
    const t = Math.max(S.timerSecs, 0);
    E.timerDisplay.textContent = `${pad(Math.floor(t/60))}:${pad(t%60)}`;
    E.timerDisplay.classList.toggle('urgent', S.mode==='exam' && S.timerSecs>0 && S.timerSecs<300);
  }

  function pad(n) { return String(n).padStart(2,'0'); }

  /* ════════ FLAG ════════ */
  function toggleFlag() {
    if (S.reviewMode) return;
    S.flagged[S.idx] = !S.flagged[S.idx];
    syncFlagBtn();
    syncPills();
  }

  function syncFlagBtn() {
    const on = S.flagged[S.idx];
    E.flagBtn.textContent = on ? '🚩 Flagged' : '🏳 Flag';
    E.flagBtn.classList.toggle('flag-on', on);
  }

  /* ════════ PILLS ════════ */
  function buildPills() {
    E.qPills.innerHTML = '';
    S.questions.forEach((q, i) => {
      const b = document.createElement('button');
      b.className = 'qpill' + (q._type==='theory' ? ' theory-pill' : '');
      b.textContent = i+1;
      b.title = `Q${i+1} · ${q._type==='theory'?'Theory':'Obj'}${q.year?' · '+q.year:''}`;
      b.addEventListener('click', () => { S.idx=i; closeSidebar(); renderQ(); });
      E.qPills.appendChild(b);
    });
    syncPills();
  }

  function syncPills() {
    E.qPills.querySelectorAll('.qpill').forEach((p, i) => {
      p.classList.toggle('p-current',  i===S.idx);
      p.classList.toggle('p-answered', S.answers[i]!==null);
      p.classList.toggle('p-flagged',  S.flagged[i]);
    });
    const done  = S.answers.filter(a => a!==null).length;
    const total = S.questions.length;
    E.progressBar.style.width  = total ? `${(done/total)*100}%` : '0%';
    E.progressFraction.textContent = `${S.idx+1} / ${total}`;
    E.progressSub.textContent      = `${done} of ${total} answered`;
  }

  /* ════════ RENDER QUESTION ════════ */
  function renderQ() {
    const q   = S.questions[S.idx];
    const ans = S.answers[S.idx];
    const obj = q._type === 'objective';

    E.qNumBadge.textContent     = `Q${S.idx+1}`;
    E.qSubjectTag.textContent   = SUBJECTS[S.subject]?.name || S.subject;
    E.qYearTag.textContent      = [q.exam||S.exam, q.year].filter(Boolean).join(' · ');
    E.qPosIndicator.textContent = `${S.idx+1} of ${S.questions.length}`;

    E.qtypeBanner.textContent = obj ? 'Objective Question' : 'Theory / Essay Question';
    E.qtypeBanner.className   = `qtype-banner ${obj?'obj':'theory'}`;

    E.objectivePanel.classList.toggle('hidden', !obj);
    E.theoryPanel.classList.toggle('hidden', obj);

    E.flagBtn.style.display = S.reviewMode ? 'none' : '';
    syncFlagBtn();

    if (obj) renderObjective(q, ans);
    else     renderTheory(q);

    E.prevBtn.disabled    = S.idx === 0;
    E.nextBtn.textContent = S.idx === S.questions.length-1
      ? (S.reviewMode ? '← Back to Results' : 'Finish ✓')
      : 'Next →';

    if (E.keyHint) {
      E.keyHint.style.display = obj && !S.reviewMode && ans===null ? 'block' : 'none';
    }

    syncPills();
  }

  /* ════════ OBJECTIVE ════════ */
  function renderObjective(q, ans) {
    E.objectiveQuestion.innerHTML = safe(q.question).replace(/\n/g,'<br>');
    E.optionsList.innerHTML = '';
    E.explanationArea.innerHTML = '';
    E.explanationArea.className = 'explanation-area';

    const locked  = S.reviewMode || (S.mode==='practice' && ans!==null);
    const showRes = S.reviewMode || (S.mode==='practice' && ans!==null);

    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML =
        `<span class="opt-letter">${String.fromCharCode(65+i)}.</span>` +
        `<span class="opt-text">${safe(opt)}</span>`;

      if (showRes) {
        if (i===q.answer)                 btn.classList.add('opt-correct');
        if (i===ans && ans!==q.answer)    btn.classList.add('opt-wrong');
        if (i===ans && ans===q.answer)    btn.classList.add('opt-your-right');
      } else if (i===ans) {
        btn.classList.add('opt-selected');
      }

      btn.disabled = locked;
      if (!locked) {
        btn.addEventListener('click', () => { S.answers[S.idx]=i; renderQ(); });
      }
      E.optionsList.appendChild(btn);
    });

    if (showRes && q.explanation) {
      const right = ans===q.answer;
      E.explanationArea.innerHTML =
        `<div class="exp-head ${right?'exp-right':'exp-wrong'}">` +
          (right ? '✅ Correct!' : `❌ Incorrect — Answer: <strong>${String.fromCharCode(65+q.answer)}</strong>`) +
        `</div>` +
        `<div class="exp-body">💡 ${safe(q.explanation)}</div>`;
      E.explanationArea.classList.add('visible');
    }
  }

  /* ════════ THEORY ════════ */
  function renderTheory(q) {
    E.theoryQuestion.innerHTML = safe(q.question).replace(/\n/g,'<br>');

    const total = q.totalMarks ||
      (q.markingScheme||[]).reduce((s,p) => s+(p.marks||0), 0);

    E.markingScheme.innerHTML =
      `<div class="ms-head">` +
        `<span class="ms-title">📋 Marking Scheme</span>` +
        `<span class="ms-badge">${total} mark${total!==1?'s':''}</span>` +
      `</div>` +
      `<div class="ms-list">` +
      (q.markingScheme||[]).map((pt,i) =>
        `<div class="ms-pt">` +
          `<span class="ms-n">${i+1}</span>` +
          `<span class="ms-txt">${safe(pt.point)}</span>` +
          `<span class="ms-mk">${pt.marks}mk</span>` +
        `</div>`
      ).join('') +
      `</div>`;

    E.modelAnswer.innerHTML = q.modelAnswer
      ? q.modelAnswer.split('\n').map(l =>
          l.trim()==='' ? '<br>' : `<p>${safe(l)}</p>`
        ).join('')
      : '<p><em>No model answer available.</em></p>';

    const showAns = S.reviewMode;
    E.modelAnswer.classList.toggle('visible', showAns);
    E.toggleAnswerBtn.textContent = showAns ? '🙈 Hide Model Answer' : '📄 Show Model Answer';
    S.showAnswer = showAns;

    if (q.examTip) {
      E.examTipBox.innerHTML =
        `<div class="tip-head">⚡ Examiner's Tip</div>` +
        `<div class="tip-body">${safe(q.examTip)}</div>`;
      E.examTipBox.style.display = 'block';
    } else {
      E.examTipBox.style.display = 'none';
    }

    if (S.answers[S.idx]===null) S.answers[S.idx]='seen';
  }

  function toggleAnswer() {
    S.showAnswer = !S.showAnswer;
    E.modelAnswer.classList.toggle('visible', S.showAnswer);
    E.toggleAnswerBtn.textContent = S.showAnswer ? '🙈 Hide Model Answer' : '📄 Show Model Answer';
  }

  /* ════════ NAVIGATE ════════ */
  function navigate(dir) {
    if (dir>0 && S.idx===S.questions.length-1) {
      if (S.reviewMode) showScreen('result');
      else confirmSubmit();
      return;
    }
    S.idx = Math.max(0, Math.min(S.questions.length-1, S.idx+dir));
    S.showAnswer = S.reviewMode;
    closeSidebar();
    renderQ();
  }

  /* ════════ SUBMIT ════════ */
  function confirmSubmit() {
    if (S.reviewMode) { showScreen('result'); return; }
    const unanswered = S.answers.filter((a,i) =>
      S.questions[i]._type==='objective' && a===null
    ).length;
    if (unanswered > 0) {
      if (!confirm(`${unanswered} question${unanswered>1?'s':''} unanswered. Submit anyway?`)) return;
    }
    finishSession(false);
  }

  /* ════════ FINISH ════════ */
  function finishSession(timeout=false) {
    if (S.timerId) { clearInterval(S.timerId); S.timerId=null; }
    S.inSession = false;

    const objQs   = S.questions.filter(q => q._type==='objective');
    const correct = objQs.filter(q => S.answers[S.questions.indexOf(q)]===q.answer).length;
    const wrong   = objQs.filter(q => {
      const a = S.answers[S.questions.indexOf(q)];
      return a!==null && a!=='seen' && a!==q.answer;
    }).length;
    const skipped = objQs.filter(q => S.answers[S.questions.indexOf(q)]===null).length;
    const thCount = S.questions.filter(q => q._type==='theory').length;
    const total   = objQs.length;
    const pct     = total>0 ? Math.round((correct/total)*100) : null;
    const flags   = S.flagged.filter(Boolean).length;

    const rec = {
      student:S.currentUser, subject:SUBJECTS[S.subject]?.name||S.subject,
      exam:S.exam, mode:S.mode, type:S.type,
      total, correct, wrong, skipped, thCount, pct, flags,
      date: new Date().toLocaleString(), timeout,
    };

    if (!S.users[S.currentUser]) S.users[S.currentUser]={history:[]};
    S.users[S.currentUser].history.unshift(rec);
    S.users[S.currentUser].history = S.users[S.currentUser].history.slice(0,60);
    saveSafe(SK.users, S.users);

    paintResults(rec);
    refreshStats();
    renderHistory();
    showScreen('result');
  }

  /* ════════ RESULTS ════════ */
  function paintResults(r) {
    const hasObj = r.pct!==null;
    const pct    = r.pct||0;
    const grade  = !hasObj?'Theory Study':pct>=75?'Distinction':pct>=60?'Credit':pct>=50?'Pass':'Below Pass';
    const emoji  = !hasObj?'📖':pct>=75?'🏆':pct>=60?'🎯':pct>=50?'✅':'💪';
    const color  = !hasObj?'var(--ink)':pct>=50?'var(--green)':'var(--red)';
    const msg    = !hasObj?'Study the model answers and marking schemes carefully.'
                 : pct>=75?"Outstanding! You're well prepared."
                 : pct>=60?"Good work — keep pushing, you're almost there."
                 : pct>=50?'You passed! More sessions will build confidence.'
                 :'Keep going — review the explanations and try again.';

    E.resultEmoji.textContent = emoji;
    E.resultScore.textContent = hasObj ? `${pct}%` : 'Theory';
    E.resultScore.style.color = color;
    E.resultGrade.textContent = grade;
    E.resultGrade.style.color = color;
    E.resultSummary.innerHTML =
      `<strong>${safe(r.student)}</strong> · ${safe(r.subject)} · ${safe(r.exam)}` +
      (r.timeout?' <span class="tag-timeout">Time elapsed</span>':'') +
      `<br><span class="res-msg">${msg}</span>`;

    const stats = [
      hasObj && {label:'Correct', val:r.correct, cls:'green'},
      hasObj && {label:'Wrong',   val:r.wrong,   cls:'red'},
      hasObj && {label:'Skipped', val:r.skipped, cls:''},
      r.thCount && {label:'Theory', val:r.thCount, cls:''},
      r.flags   && {label:'Flagged',val:r.flags,   cls:'amber'},
    ].filter(Boolean);

    E.resultStatsGrid.innerHTML = stats.map(s =>
      `<div class="rstat ${s.cls}"><strong>${s.val}</strong><span>${safe(s.label)}</span></div>`
    ).join('');

    if (hasObj) {
      E.resultBreakdown.style.display='block';
      E.resultBreakdown.innerHTML =
        `<div class="bk-bar"><div class="bk-fill" style="width:${pct}%;background:${color}"></div></div>` +
        `<div class="bk-lbl">${r.correct} correct · ${r.wrong} wrong · ${r.skipped} skipped</div>` +
        (r.flags?`<div class="bk-flag">🚩 ${r.flags} flagged for review</div>`:'');
    } else {
      E.resultBreakdown.style.display='none';
    }
  }

  /* ════════ REVIEW ════════ */
  function enterReview() {
    S.reviewMode=true; S.idx=0; S.showAnswer=true;
    buildPills(); renderQ(); showScreen('quiz');
  }

  /* ════════ EXIT ════════ */
  function confirmExit() {
    if (S.mode==='exam' && S.inSession && !S.reviewMode) {
      if (!confirm('Exit exam? Your answers will be submitted.')) return;
      finishSession(false);
    } else {
      if (S.inSession && !S.reviewMode) {
        if (!confirm('Exit this session?')) return;
      }
      if (S.timerId) { clearInterval(S.timerId); S.timerId=null; }
      S.inSession=false;
      showScreen('home');
    }
  }

  function goHome() {
    if (S.timerId) { clearInterval(S.timerId); S.timerId=null; }
    S.inSession=false;
    showScreen('home');
  }

  /* ════════ HISTORY ════════ */
  function renderHistory() {
    const hist = getHistory();
    if (!S.currentUser) {
      E.historyList.innerHTML='<div class="empty-history">Login to see your history.</div>'; return;
    }
    if (!hist.length) {
      E.historyList.innerHTML='<div class="empty-history">No sessions yet — start your first practice!</div>'; return;
    }
    E.historyList.innerHTML = hist.slice(0,25).map(r => `
      <div class="hi-item">
        <div class="hi-main">
          <div class="hi-sub">${safe(r.subject)}</div>
          <div class="hi-meta">${safe(r.exam)} · ${safe(r.mode)} · ${safe(r.type||'objective')}</div>
          <div class="hi-date">${safe(r.date)}</div>
        </div>
        <div class="hi-right">
          <div class="hi-score ${r.pct==null?'':r.pct>=50?'pass':'fail'}">
            ${r.pct!=null?r.pct+'%':'—'}
          </div>
          ${r.pct!=null?`<div class="hi-fraction">${r.correct}/${r.total}</div>`:''}
        </div>
      </div>`
    ).join('');
  }

  function clearHistory() {
    if (!S.currentUser||!confirm('Clear all history for '+S.currentUser+'?')) return;
    if (S.users[S.currentUser]) S.users[S.currentUser].history=[];
    saveSafe(SK.users, S.users);
    renderHistory(); refreshStats();
  }

  function getHistory() { return S.users[S.currentUser]?.history||[]; }

  function refreshStats() {
    const hist = getHistory();
    const objH = hist.filter(r => r.pct!=null);
    E.hStatSessions.textContent = hist.length;
    E.hStatAvg.textContent  = objH.length ? Math.round(objH.reduce((s,r)=>s+r.pct,0)/objH.length)+'%' : '—';
    E.hStatBest.textContent = objH.length ? Math.max(...objH.map(r=>r.pct))+'%' : '—';
  }

  /* ════════ PAYWALL ════════ */
  function checkAccess() {
    const d = loadSafe(SK.access);
    return !!(d?.expires && new Date(d.expires) > new Date());
  }

  function getFreeUsed() {
    const d = loadSafe(SK.free);
    return d?.n || 0;
  }

  function getFreeSnaps() {
    const d = loadSafe(SK.free);
    return d?.snaps || 0;
  }

  function updateFreeTrialIndicator() {
    // Show a subtle indicator on home screen of remaining trial questions
    const remaining = Math.max(0, FREE_TRIAL_LIMIT - S.freeUsed);
    const pill = E.studentPill;
    if (pill && !S.hasAccess && S.currentUser) {
      const orig = pill.textContent;
      if (remaining <= 3 && remaining > 0) {
        pill.innerHTML = `${S.currentUser} &nbsp;·&nbsp; <span style="color:var(--amber);font-weight:600">${remaining} free question${remaining===1?'':'s'} left</span>`;
      } else if (remaining === 0) {
        pill.innerHTML = `${S.currentUser} &nbsp;·&nbsp; <span style="color:var(--red,#e55)">Free trial complete</span>`;
      }
    }
  }

  function showPaywall(reason) {
    if (E.paywallBadge) {
      E.paywallBadge.textContent = reason === 'trial' ? 'FREE TRIAL COMPLETE' : 'PREMIUM FEATURE';
    }
    // Show early adopter counter
    updateEarlyAdopterBanner();
    E.paywallOverlay.classList.remove('hidden');
  }

  function updateEarlyAdopterBanner() {
    // In production this would fetch from backend. For now simulate with localStorage count.
    const sold = loadSafe('mea-ea-sold') || 0;
    const remaining = Math.max(0, EARLY_ADOPTER_CAP - sold);
    if (E.earlyAdopterCounter) {
      if (remaining > 0) {
        E.earlyAdopterCounter.textContent = `${remaining} of 100 spots remaining`;
        if (E.earlyAdopterBanner) E.earlyAdopterBanner.style.display = '';
        if (E.payBtn) {
          E.payBtn.textContent = `Get Early Access — ₦2,000/quarter →`;
        }
      } else {
        // Early adopter cap reached — show standard price
        if (E.earlyAdopterBanner) E.earlyAdopterBanner.style.display = 'none';
        if (E.payBtn) E.payBtn.textContent = `Get Student Pass — ₦2,500/quarter →`;
      }
    }
  }

  function grantAccess(days, tier) {
    const exp = new Date();
    exp.setDate(exp.getDate() + days);
    saveSafe(SK.access, { expires: exp.toISOString() });
    saveSafe(SK.tier, tier || 'student');
    S.hasAccess = true;
    S.tier = tier || 'student';
    E.paywallOverlay.classList.add('hidden');
    alert(`✅ Access granted for ${days} days! Welcome to My Exams App.`);
  }

  function handlePayment(tier) {
    tier = tier || 'student';
    const sold = loadSafe('mea-ea-sold') || 0;
    const isEarlyAdopter = sold < EARLY_ADOPTER_CAP;
    const amount = tier === 'plus' ? 350000 : (isEarlyAdopter ? EARLY_ADOPTER_PRICE : STANDARD_PRICE);
    const label  = tier === 'plus' ? 'Student Pass Plus' : 'Student Pass';

    const email = prompt(`Enter your email address to continue:`);
    if (!email?.includes('@')) { if (email !== null) alert('Please enter a valid email address.'); return; }

    // Paystack — test key active; swap for pk_live_ key when Paystack approves account
    const PAYSTACK_KEY = 'pk_test_1ac5e055de30ca320129b0e5b6f57d0df7ab2281';

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount,
      currency: 'NGN',
      ref: 'MEA-' + tier.toUpperCase() + '-' + Date.now(),
      metadata: {
        custom_fields: [
          { display_name: 'Plan', variable_name: 'plan', value: label },
          { display_name: 'App',  variable_name: 'app',  value: 'My Exams App' },
        ]
      },
      onClose() {
        // User closed without paying — do nothing
      },
      callback(response) {
        // Payment successful
        if (tier !== 'plus' && isEarlyAdopter) {
          saveSafe('mea-ea-sold', sold + 1);
        }
        grantAccess(90, tier);
      }
    });
    handler.openIframe();
  }

  function redeemCode() {
    const code = (E.accessCodeInput.value||'').trim().toUpperCase();
    if (!code) { E.accessCodeInput.focus(); return; }
    const codes = {
      'MEA-DEMO-2025': { days:90, tier:'student' },
      'WAEC-PROMO':    { days:30, tier:'student' },
      'NECO-PROMO':    { days:30, tier:'student' },
      'MEA-PLUS-DEMO': { days:90, tier:'plus' },
      'TEST7':         { days:7,  tier:'student' },
    };
    if (codes[code]) {
      grantAccess(codes[code].days, codes[code].tier);
    } else {
      E.accessCodeInput.style.borderColor = 'var(--red, #e55)';
      setTimeout(() => { E.accessCodeInput.style.borderColor = ''; }, 1500);
      alert('Invalid or expired code.');
    }
  }

  /* ════════ SHARE ════════ */
  function shareApp() {
    const url  = window.location.href;
    const text = '🎓 Preparing for WAEC/NECO? Try My Exams App!\nPast questions + model answers for 15 subjects + snap-and-mark theory.\n₦2,500 for 3 months — early access at ₦2,000.\n\n'+url;
    if (navigator.share) navigator.share({title:'My Exams App',text,url}).catch(()=>{});
    else if (navigator.clipboard) navigator.clipboard.writeText(text)
      .then(()=>alert('📋 Copied! Paste in WhatsApp or SMS.'));
    else prompt('Copy and share:',text);
  }

  /* ════════ SIDEBAR ════════ */
  function openSidebar()  { E.quizSidebar.classList.add('sidebar-open'); E.sidebarBackdrop.classList.remove('hidden'); }
  function closeSidebar() { E.quizSidebar.classList.remove('sidebar-open'); E.sidebarBackdrop.classList.add('hidden'); }

  /* ════════ SCREENS ════════ */
  function showScreen(name) {
    ['home','quiz','result'].forEach(n => {
      document.getElementById(n+'Screen').classList.toggle('active', n===name);
    });
    window.scrollTo(0,0);
    if (name==='home') { renderHistory(); refreshStats(); renderStreak(); }
  }

  /* ════════ UTILS ════════ */
  function safe(s) {
    return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }
  function shuffle(a) {
    const r=[...a];
    for(let i=r.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[r[i],r[j]]=[r[j],r[i]];}
    return r;
  }
  function saveSafe(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
  function loadSafe(k,d=null){try{const v=localStorage.getItem(k);return v!==null?JSON.parse(v):d;}catch(e){return d;}}
  function todayStr(){return new Date().toISOString().slice(0,10);}

  init();
})();
