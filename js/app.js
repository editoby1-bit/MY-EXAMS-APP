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
    'paywallOverlay','paywallBadge','payBtn','payBtnPlus','payBtnYear','payBtnPlusYear','payBtnJamb','payBtnSchool',
    'accessCodeInput','redeemBtn','closePaywall',
    'earlyAdopterBanner','earlyAdopterCounter',
    'yearPillsContainer',
    'tabIndividual','tabJamb','tabSchool',
    'paywallIndividual','paywallJamb','paywallSchool',
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
    'reviewBtn','homeBtn','shareBtn','shareSessionBtn',
    'upgradeBar','upgradeBarBtn','upgradeBarText',
    'resultUpgradTeaser','rutBtn','rutTitle',
    'teaserToast','teaserToastText','teaserToastUpgrade','teaserToastClose',
    'aiExplainBtn','aiExplainTheoryBtn','meaAiPanel','meaAiClose','meaAiCredits','meaAiLoading','meaAiResponse','meaAiContent',
    'snapBtn','snapFileInput','snapCreditsBadge','snapActionRow','snapTip',
    'snapResultModal','snapResultClose','snapResultScore','snapResultGrade','snapResultPct',
    'snapHwWarning','snapFeedback','snapBreakdown','snapExaminerNote','snapResultDone',
    'snapProcessing',
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
    initCommunityQuiz();
    initContestNotify();
    checkForSharedSession();
    refreshUpgradeBar();
    // Seed history so first back press is always interceptable
    history.replaceState({ screen: 'home' }, '', window.location.pathname);
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

    E.payBtn.addEventListener('click', () => handlePayment('student', 'quarterly'));
    if (E.payBtnYear)     E.payBtnYear.addEventListener('click',     () => handlePayment('student', 'yearly'));
    if (E.payBtnPlus)     E.payBtnPlus.addEventListener('click',     () => handlePayment('plus', 'quarterly'));
    if (E.payBtnPlusYear) E.payBtnPlusYear.addEventListener('click', () => handlePayment('plus', 'yearly'));
    if (E.payBtnJamb)     E.payBtnJamb.addEventListener('click',     () => handlePayment('jamb', 'quarterly'));
    if (E.payBtnSchool)   E.payBtnSchool.addEventListener('click',   () => handleSchoolEnquiry());
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
    if (E.shareSessionBtn) E.shareSessionBtn.addEventListener('click', shareSession);

    // Upgrade bar
    if (E.upgradeBarBtn) E.upgradeBarBtn.addEventListener('click', () => showPaywall('upgrade'));

    // Results screen upgrade teaser
    if (E.rutBtn) E.rutBtn.addEventListener('click', () => showPaywall('upgrade'));

    // Teaser toast
    if (E.teaserToastUpgrade) E.teaserToastUpgrade.addEventListener('click', () => {
      hideTeaserToast();
      showPaywall('upgrade');
    });
    if (E.teaserToastClose) E.teaserToastClose.addEventListener('click', hideTeaserToast);

    // AI explain
    if (E.aiExplainBtn)       E.aiExplainBtn.addEventListener('click', () => triggerMeaAI('objective'));
    if (E.aiExplainTheoryBtn) E.aiExplainTheoryBtn.addEventListener('click', () => triggerMeaAI('theory'));
    if (E.meaAiClose)         E.meaAiClose.addEventListener('click', () => E.meaAiPanel?.classList.add('hidden'));

    // Snap and mark
    if (E.snapBtn)        E.snapBtn.addEventListener('click', triggerSnap);
    if (E.snapFileInput)  E.snapFileInput.addEventListener('change', handleSnapFile);
    if (E.snapResultClose) E.snapResultClose.addEventListener('click', () => E.snapResultModal.classList.add('hidden'));
    if (E.snapResultDone)  E.snapResultDone.addEventListener('click', () => E.snapResultModal.classList.add('hidden'));

    document.addEventListener('keydown', onKey);

    window.addEventListener('beforeunload', e => {
      if (S.inSession && S.mode === 'exam' && !S.reviewMode) {
        e.preventDefault(); e.returnValue = '';
      }
    });

    // Back button — clean single implementation
    let _backLastPress = 0;
    window.addEventListener('popstate', () => {
      const quizActive   = document.getElementById('quizScreen')?.classList.contains('active');
      const resultActive = document.getElementById('resultScreen')?.classList.contains('active');

      if (!quizActive && !resultActive) return;

      // Defer pushState — Chrome throttles synchronous pushState inside popstate
      setTimeout(() => {
        history.pushState(
          { screen: quizActive ? 'quiz' : 'result' },
          '',
          window.location.pathname
        );
      }, 0);

      if (resultActive) {
        goHome();
        return;
      }

      // Double-back to exit — works on Chrome mobile/PC and Firefox
      const now = Date.now();
      if (now - _backLastPress < 3000) {
        _backLastPress = 0;
        hideBackWarningToast();
        confirmExit();
      } else {
        _backLastPress = now;
        showBackWarningToast();
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
    refreshUpgradeBar();
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
      b.addEventListener('click', () => {
        S.idx = i;
        closeSidebar();
        renderQ();
        // Trigger teaser if free user has reached question 5
        if (!S.hasAccess && i >= 4 && !S.reviewMode) {
          setTimeout(showTeaserToast, 1500);
        }
      });
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

    // Show AI explain buttons for Plus subscribers only
    const isPlus = S.hasAccess && (loadSafe(SK.tier) === 'plus');
    if (E.aiExplainBtn)       E.aiExplainBtn.classList.toggle('hidden', !isPlus || !obj);
    if (E.aiExplainTheoryBtn) E.aiExplainTheoryBtn.classList.toggle('hidden', !isPlus || obj);
    if (E.meaAiPanel) E.meaAiPanel.classList.add('hidden');

    // Show snap button for all paid subscribers on theory questions
    if (E.snapActionRow) E.snapActionRow.classList.toggle('hidden', !S.hasAccess || obj);
    if (E.snapTip)       E.snapTip.classList.toggle('hidden', obj);
    if (S.hasAccess && !obj) {
      updateSnapCreditsBadge();
      // Force visible — override any lingering hidden state
      if (E.snapActionRow) E.snapActionRow.style.display = 'flex';
      if (E.snapBtn) E.snapBtn.style.display = 'flex';
    } else if (obj) {
      if (E.snapActionRow) E.snapActionRow.style.display = 'none';
    }

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
    // Show teaser toast at question 5 for free users
    if (!S.hasAccess && S.idx === 4 && !S.reviewMode) {
      setTimeout(showTeaserToast, 1500);
    }
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

    // Store for session sharing
    _lastResult    = rec;
    _lastQuestions = [...S.questions];
    _lastAnswers   = [...S.answers];

    // Save challenge score if this was a challenge session
    if (S._challengeCode && total > 0) {
      window._saveChallengeScore(correct, total);
    }
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
  /* ════════ EXIT CONFIRMATION ════════ */
  function confirmExit() {
    if (!S.inSession || S.reviewMode) {
      // Not in active session — just go home
      if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }
      S.inSession = false;
      showScreen('home');
      return;
    }
    showExitModal(
      S.mode === 'exam',
      () => {
        // Confirmed exit
        if (S.mode === 'exam') {
          finishSession(false);
        } else {
          if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }
          S.inSession = false;
          showScreen('home');
        }
      }
    );
  }

  function showExitModal(isExam, onConfirm) {
    const modal = document.getElementById('exitConfirmModal');
    const icon  = document.getElementById('exitModalIcon');
    const title = document.getElementById('exitModalTitle');
    const sub   = document.getElementById('exitModalSub');
    const stay  = document.getElementById('exitModalStay');
    const leave = document.getElementById('exitModalLeave');
    if (!modal) { onConfirm(); return; }

    icon.textContent  = isExam ? '⚠️' : '🚪';
    title.textContent = isExam ? 'Exit Exam?' : 'Exit Session?';
    sub.textContent   = isExam
      ? 'Your answers will be submitted and scored.'
      : 'Your progress in this session will be lost.';
    leave.textContent = isExam ? 'Submit & Exit' : 'Exit';

    modal.classList.remove('hidden');

    // Clean up old listeners
    const newStay  = stay.cloneNode(true);
    const newLeave = leave.cloneNode(true);
    stay.parentNode.replaceChild(newStay, stay);
    leave.parentNode.replaceChild(newLeave, leave);

    document.getElementById('exitModalStay').addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    document.getElementById('exitModalLeave').addEventListener('click', () => {
      modal.classList.add('hidden');
      onConfirm();
    });
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

  function handlePayment(tier, period) {
    tier   = tier   || 'student';
    period = period || 'quarterly';

    const sold          = loadSafe('mea-ea-sold') || 0;
    const isEarlyAdopter = sold < EARLY_ADOPTER_CAP;

    // Amount map in kobo
    const amounts = {
      'student-quarterly': isEarlyAdopter ? EARLY_ADOPTER_PRICE : STANDARD_PRICE,
      'student-yearly':    750000,
      'plus-quarterly':    350000,
      'plus-yearly':       1050000,
      'jamb-quarterly':    150000,
    };

    const labels = {
      'student-quarterly': isEarlyAdopter ? 'Student Pass — Early Access (₦2,000/quarter)' : 'Student Pass (₦2,500/quarter)',
      'student-yearly':    'Student Pass — Full Year (₦7,500)',
      'plus-quarterly':    'Student Pass Plus (₦3,500/quarter)',
      'plus-yearly':       'Student Pass Plus — Full Year (₦10,500)',
      'jamb-quarterly':    'JAMB Only (₦1,500/quarter)',
    };

    // Days of access granted
    const days = {
      'student-quarterly': 90,
      'student-yearly':    365,
      'plus-quarterly':    90,
      'plus-yearly':       365,
      'jamb-quarterly':    90,
    };

    const key    = tier + '-' + period;
    const amount = amounts[key];
    const label  = labels[key];
    const daysToGrant = days[key];

    if (!amount) return;

    const email = prompt(`Enter your email address to continue:`);
    if (!email?.includes('@')) { if (email !== null) alert('Please enter a valid email address.'); return; }

    const PAYSTACK_KEY = 'pk_test_1ac5e055de30ca320129b0e5b6f57d0df7ab2281';
    // 🔑 When Paystack approves your account, replace the line above with:
    // const PAYSTACK_KEY = 'pk_live_YOUR_LIVE_KEY_HERE';

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount,
      currency: 'NGN',
      ref: 'MEA-' + tier.toUpperCase() + '-' + Date.now(),
      metadata: {
        custom_fields: [
          { display_name: 'Plan',   variable_name: 'plan',   value: label },
          { display_name: 'App',    variable_name: 'app',    value: 'My Exams App' },
          { display_name: 'Period', variable_name: 'period', value: period },
        ]
      },
      onClose() {},
      callback(response) {
        if ((tier === 'student' || tier === 'jamb') && isEarlyAdopter && period === 'quarterly') {
          saveSafe('mea-ea-sold', sold + 1);
        }
        grantAccess(daysToGrant, tier);
      }
    });
    handler.openIframe();
  }

  function handleSchoolEnquiry() {
    const email = 'schools@myexamsapp.com';
    const subject = encodeURIComponent('School Bundle Enquiry — My Exams App');
    const body    = encodeURIComponent(
      'Hello,\n\nI am interested in a school bundle for My Exams App.\n\n' +
      'School name:\nNumber of students:\nPreferred tier (Standard / Branded / Premium):\nContact number:\n\nThank you.'
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`);
  }

  /* ════════════════════════════════
     COMMUNITY QUIZ
  ════════════════════════════════ */
  const SUBJECT_KEYS = Object.keys(EXAM_BANK);
  const QC_STORE = 'mea-challenges-v1';

  function initCommunityQuiz() {
    const btn = document.getElementById('quizChallengeBtn');
    const modal = document.getElementById('quizChallengeModal');
    if (!btn || !modal) return;

    // Show trigger button only for paid users
    if (S.hasAccess) btn.classList.remove('hidden');

    btn.addEventListener('click', openQuizChallenge);
    document.getElementById('qcClose').addEventListener('click', closeQuizChallenge);
    modal.addEventListener('click', e => { if (e.target === modal) closeQuizChallenge(); });

    document.getElementById('qcCreateBtn').addEventListener('click', () => showQcPanel('qcCreate'));
    document.getElementById('qcBackBtn').addEventListener('click',   () => showQcPanel('qcHome'));
    document.getElementById('qcJoinBtn').addEventListener('click',   () => {
      document.getElementById('qcJoinRow').classList.toggle('hidden');
    });
    document.getElementById('qcJoinConfirm').addEventListener('click', joinChallenge);
    document.getElementById('qcGenerateBtn').addEventListener('click', generateChallenge);
    document.getElementById('qcShareLinkBtn').addEventListener('click', shareChallengeLink);
    document.getElementById('qcStartOwnBtn').addEventListener('click', startOwnAttempt);
    document.getElementById('qcNewChallengeBtn').addEventListener('click', () => showQcPanel('qcCreate'));
    document.getElementById('qcDoneBtn').addEventListener('click', closeQuizChallenge);

    // Populate subject dropdown
    const sel = document.getElementById('qcSubject');
    SUBJECT_KEYS.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      sel.appendChild(opt);
    });

    // Check if arriving via challenge link
    const params = new URLSearchParams(window.location.search);
    const challengeCode = params.get('challenge');
    if (challengeCode) {
      history.replaceState(null, '', window.location.pathname);
      openQuizChallenge();
      document.getElementById('qcJoinCode').value = challengeCode;
      joinChallenge();
    }
  }

  function openQuizChallenge() {
    if (!S.hasAccess) { showPaywall('upgrade'); return; }
    if (!S.currentUser) { alert('Please log in first to use Community Quiz.'); return; }
    showQcPanel('qcHome');
    document.getElementById('quizChallengeModal').classList.remove('hidden');
  }

  function closeQuizChallenge() {
    document.getElementById('quizChallengeModal').classList.add('hidden');
  }

  function showQcPanel(id) {
    ['qcHome','qcCreate','qcShare','qcLeaderboard'].forEach(p => {
      const el = document.getElementById(p);
      if (el) el.classList.toggle('hidden', p !== id);
    });
  }

  function generateChallengeCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'MEA-';
    for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  function generateChallenge() {
    const subject = document.getElementById('qcSubject').value;
    const count   = parseInt(document.getElementById('qcCount').value);
    const time    = parseInt(document.getElementById('qcTime').value);

    const bank    = EXAM_BANK[subject];
    if (!bank) return;
    const pool    = shuffle([...(bank.objective||[])]).slice(0, count);
    if (!pool.length) { alert('Not enough questions for this subject.'); return; }

    const code    = generateChallengeCode();
    const expires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    // Store challenge locally
    const challenges = loadSafe(QC_STORE, {});
    challenges[code] = {
      code, subject, count, time,
      questions: pool.map(q => q.id || pool.indexOf(q)),
      questionData: pool,
      expires,
      creator: S.currentUser,
      scores: {},
    };
    saveSafe(QC_STORE, challenges);

    document.getElementById('qcCodeDisplay').textContent = code;
    showQcPanel('qcShare');

    // Store current challenge code for later
    window._currentChallengeCode = code;
  }

  function shareChallengeLink() {
    const code = window._currentChallengeCode;
    if (!code) return;
    const url  = window.location.origin + window.location.pathname + '?challenge=' + code;
    const text = `🏆 I challenge you! Take this ${document.getElementById('qcSubject')?.value || ''} quiz on My Exams App.\n\nCode: ${code}\nLink: ${url}`;
    if (navigator.share) {
      navigator.share({ title: 'My Exams App Challenge', text, url }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(text).then(() => alert('Challenge link copied!')).catch(() => alert('Link: ' + url));
    }
  }

  function joinChallenge() {
    const code = (document.getElementById('qcJoinCode').value || '').trim().toUpperCase();
    if (!code) return;

    const challenges = loadSafe(QC_STORE, {});
    const challenge  = challenges[code];

    if (!challenge) {
      alert('Challenge not found. Check the code and try again.');
      return;
    }
    if (Date.now() > challenge.expires) {
      alert('This challenge has expired (challenges last 24 hours).');
      return;
    }

    window._currentChallengeCode = code;
    startChallengeAttempt(challenge);
  }

  function startOwnAttempt() {
    const code = window._currentChallengeCode;
    if (!code) return;
    const challenges = loadSafe(QC_STORE, {});
    const challenge  = challenges[code];
    if (!challenge) return;
    startChallengeAttempt(challenge);
  }

  function startChallengeAttempt(challenge) {
    closeQuizChallenge();

    // Set up session using challenge questions
    const bank = EXAM_BANK[challenge.subject];
    if (!bank) return;

    S.subject    = challenge.subject;
    S.exam       = 'WAEC';
    S.mode       = 'exam';
    S.type       = 'objective';
    S.count      = challenge.questionData.length;
    S.questions  = challenge.questionData.map(q => ({...q, _type:'objective'}));
    S.answers    = new Array(S.questions.length).fill(null);
    S.flagged    = new Array(S.questions.length).fill(false);
    S.idx        = 0;
    S.reviewMode = false;
    S.showAnswer = false;
    S.inSession  = true;

    // Store challenge context so results can save score
    S._challengeCode = challenge.code;

    if (challenge.time > 0) {
      S.timerSecs = challenge.time * 60;
      startTimer();
    } else {
      S.timerSecs = 0;
      if (E.timerCard) E.timerCard.classList.add('hidden');
    }

    buildPills();
    renderQ();
    showScreen('quiz');
  }

  // Hook into existing finishSession to save challenge score
  const _origFinishSession = window._finishSession;

  function saveChallengeScore(score, total) {
    const code = S._challengeCode;
    if (!code) return;
    const challenges = loadSafe(QC_STORE, {});
    if (!challenges[code]) return;
    challenges[code].scores[S.currentUser] = {
      score, total,
      pct: Math.round((score / total) * 100),
      time: new Date().toLocaleTimeString(),
    };
    saveSafe(QC_STORE, challenges);
    S._challengeCode = null;

    // Offer to view leaderboard
    setTimeout(() => {
      if (confirm('Challenge complete! View the leaderboard?')) {
        showChallengeLeaderboard(code);
      }
    }, 500);
  }

  function showChallengeLeaderboard(code) {
    const challenges = loadSafe(QC_STORE, {});
    const challenge  = challenges[code];
    if (!challenge) return;

    const list = document.getElementById('qcLeaderboardList');
    if (!list) return;

    const scores = Object.entries(challenge.scores)
      .sort((a, b) => b[1].pct - a[1].pct);

    if (!scores.length) {
      list.innerHTML = '<p class="qc-empty">No scores yet — be the first!</p>';
    } else {
      list.innerHTML = scores.map(([name, data], i) => `
        <div class="qc-score-row ${name === S.currentUser ? 'qc-score-me' : ''}">
          <span class="qc-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '#' + (i+1)}</span>
          <span class="qc-score-name">${name}${name === S.currentUser ? ' (you)' : ''}</span>
          <span class="qc-score-val">${data.score}/${data.total} · ${data.pct}%</span>
        </div>
      `).join('');
    }

    document.getElementById('quizChallengeModal').classList.remove('hidden');
    showQcPanel('qcLeaderboard');
  }

  function initContestNotify() {
    const btn  = document.getElementById('contestNotifyBtn');
    const note = document.getElementById('contestNoteText');
    if (!btn) return;
    const already = loadSafe('mea-contest-notify');
    if (already) {
      btn.textContent  = '✓ You\'re on the list';
      btn.disabled     = true;
      btn.style.opacity = '0.7';
      if (note) note.textContent = 'We\'ll notify you when registration opens.';
      return;
    }
    btn.addEventListener('click', () => {
      if (!S.currentUser) {
        alert('Please log in first so we know who to notify.');
        return;
      }
      saveSafe('mea-contest-notify', { name: S.currentUser, date: new Date().toISOString() });
      btn.textContent   = '✓ You\'re on the list!';
      btn.disabled      = true;
      btn.style.opacity = '0.7';
      if (note) note.textContent = 'We\'ll notify you when registration opens. Tell your friends!';
    });
  }
  window._showChallengeLeaderboard = showChallengeLeaderboard;

  // Expose for result screen
  window.switchPaywallTab = function(tab) {
    ['individual','jamb','school'].forEach(t => {
      const panel = document.getElementById('paywall' + t.charAt(0).toUpperCase() + t.slice(1));
      const btn   = document.getElementById('tab'    + t.charAt(0).toUpperCase() + t.slice(1));
      if (panel) panel.classList.toggle('hidden', t !== tab);
      if (btn)   btn.classList.toggle('active',   t === tab);
    });
  };

  function redeemCode() {
    const code = (E.accessCodeInput.value||'').trim().toUpperCase();
    if (!code) { E.accessCodeInput.focus(); return; }
    const codes = {
      'MEA-DEMO-2025':  { days: 90,  tier: 'student' },
      'MEA-PLUS-DEMO':  { days: 90,  tier: 'plus'    },
      'WAEC-PROMO':     { days: 30,  tier: 'student' },
      'NECO-PROMO':     { days: 30,  tier: 'student' },
      'JAMB-PROMO':     { days: 90,  tier: 'jamb'    },
      'TEST7':          { days: 7,   tier: 'student' },
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
  /* ════════════════════════════════
     SESSION SHARING
  ════════════════════════════════ */

  // Store last result for sharing
  let _lastResult = null;
  let _lastQuestions = [];
  let _lastAnswers = [];

  function shareSession() {
    if (!_lastResult) return;
    const payload = {
      r: _lastResult,
      q: _lastQuestions.slice(0,20).map((q,i) => ({
        q: q.question,
        o: q.options || [],
        a: q.answer,
        ua: _lastAnswers[i],
        t: q._type,
        e: q.explanation || '',
      })),
    };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const url = window.location.origin + window.location.pathname + '?session=' + encoded;
    const text = `📊 ${_lastResult.student} scored ${_lastResult.pct !== null ? _lastResult.pct + '%' : 'Theory'} in ${_lastResult.subject} (${_lastResult.exam})\n\nSee my full session on My Exams App:\n${url}\n\nThink you can beat it? 💪`;

    if (navigator.share) {
      navigator.share({ title: 'My Exams App Result', text, url }).catch(() => {});
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => alert('📋 Result link copied! Paste in WhatsApp or anywhere.'));
    } else {
      prompt('Copy this link:', url);
    }
  }

  function checkForSharedSession() {
    const params = new URLSearchParams(window.location.search);
    const sessionData = params.get('session');
    if (!sessionData) return;
    history.replaceState(null, '', window.location.pathname);
    try {
      const payload = JSON.parse(decodeURIComponent(escape(atob(sessionData))));
      showSharedSession(payload);
    } catch(e) {
      console.warn('Could not parse shared session:', e);
    }
  }

  function showSharedSession(payload) {
    const r = payload.r;
    const qs = payload.q || [];
    const modal = document.getElementById('sharedSessionModal');
    if (!modal) return;

    const hasObj = r.pct !== null;
    const pct    = r.pct || 0;
    const grade  = !hasObj ? 'Theory' : pct>=75 ? 'Distinction' : pct>=60 ? 'Credit' : pct>=50 ? 'Pass' : 'Below Pass';
    const emoji  = !hasObj ? '📖' : pct>=75 ? '🏆' : pct>=60 ? '🎯' : pct>=50 ? '✅' : '💪';
    const color  = !hasObj ? '#666' : pct>=50 ? '#27ae60' : '#e74c3c';

    document.getElementById('ssEmoji').textContent = emoji;
    document.getElementById('ssScore').textContent = hasObj ? pct + '%' : 'Theory';
    document.getElementById('ssScore').style.color = color;
    document.getElementById('ssGrade').textContent = grade;
    document.getElementById('ssGrade').style.color = color;
    document.getElementById('ssMeta').innerHTML =
      `<strong>${safe(r.student)}</strong> · ${safe(r.subject)} · ${safe(r.exam)} · ${safe(r.mode)}` +
      `<br><span style="font-size:.8rem;color:#888">${safe(r.date)}</span>`;

    if (hasObj) {
      document.getElementById('ssStats').innerHTML =
        `<span class="ss-stat green">✓ ${r.correct} correct</span>` +
        `<span class="ss-stat red">✗ ${r.wrong} wrong</span>` +
        `<span class="ss-stat">⊘ ${r.skipped} skipped</span>`;
      document.getElementById('ssBarFill').style.width = pct + '%';
      document.getElementById('ssBarFill').style.background = color;
    }

    // Show first 5 questions as preview
    const preview = qs.slice(0, 5);
    document.getElementById('ssQuestions').innerHTML = preview.length ? `
      <div class="ss-qs-title">Session Preview (${preview.length} of ${qs.length} questions)</div>
      ${preview.map((q,i) => {
        const correct  = q.ua === q.a;
        const answered = q.ua !== null && q.ua !== undefined;
        const icon = !answered ? '⊘' : correct ? '✓' : '✗';
        const cls  = !answered ? 'ss-q-skip' : correct ? 'ss-q-correct' : 'ss-q-wrong';
        return `<div class="ss-q-row ${cls}">
          <span class="ss-q-icon">${icon}</span>
          <span class="ss-q-text">${safe(q.q.substring(0,80))}${q.q.length>80?'…':''}</span>
        </div>`;
      }).join('')}
    ` : '';

    // Store subject for try button
    document.getElementById('ssTryBtn').dataset.subject = r.subject;
    document.getElementById('ssTryBtn').addEventListener('click', () => {
      modal.classList.add('hidden');
      // Pre-select the subject on home screen
      S.subject = r.subject;
      showScreen('home');
      setTimeout(() => {
        const btn = document.querySelector(`.subject-btn[data-key="${r.subject}"]`);
        if (btn) btn.click();
      }, 300);
    });

    document.getElementById('ssClose').addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });
    modal.classList.remove('hidden');
  }

  /* ════════════════════════════════
     AI EXPLANATIONS (Plus tier)
  ════════════════════════════════ */
  const SK_MEA_AI     = 'mea-ai-credits-v1';
  const MEA_AI_QUOTA  = 100; // per quarter

  function getMeaAICredits() {
    const qtr = getMeaQuarter();
    const d   = loadSafe(SK_MEA_AI);
    if (!d || d.quarter !== qtr) {
      saveSafe(SK_MEA_AI, { n: MEA_AI_QUOTA, quarter: qtr });
      return MEA_AI_QUOTA;
    }
    return d.n;
  }

  function useMeaAICredit() {
    const c = getMeaAICredits();
    if (c <= 0) return false;
    saveSafe(SK_MEA_AI, { n: c - 1, quarter: getMeaQuarter() });
    return true;
  }

  function getMeaQuarter() {
    const d = new Date();
    return `${d.getFullYear()}-Q${Math.ceil((d.getMonth()+1)/3)}`;
  }

  function updateMeaAICredits() {
    if (!E.meaAiCredits) return;
    const c = getMeaAICredits();
    E.meaAiCredits.textContent = `${c} credit${c===1?'':'s'} left`;
    E.meaAiCredits.style.color = c < 10 ? '#e74c3c' : '#27ae60';
  }

  async function triggerMeaAI(qType) {
    const isPlus = S.hasAccess && (loadSafe(SK.tier) === 'plus');
    if (!isPlus) {
      showPaywall('upgrade');
      return;
    }
    const credits = getMeaAICredits();
    if (credits <= 0) {
      alert(`You've used all ${MEA_AI_QUOTA} AI explanation credits for this quarter.\n\nTop up: ₦500 = 50 more explanations.`);
      return;
    }

    const q   = S.questions[S.idx];
    const ans = S.answers[S.idx];
    if (!q) return;

    // Show panel
    if (E.meaAiPanel) E.meaAiPanel.classList.remove('hidden');
    if (E.meaAiLoading) E.meaAiLoading.classList.remove('hidden');
    if (E.meaAiResponse) E.meaAiResponse.classList.add('hidden');
    updateMeaAICredits();

    let prompt = '';
    if (qType === 'objective') {
      const correctOpt  = q.options?.[q.answer] || q.answer;
      const studentOpt  = ans !== null && ans !== undefined ? (q.options?.[ans] || ans) : 'Did not answer';
      const wasCorrect  = ans === q.answer;
      prompt = `You are a WAEC/NECO exam tutor helping a Nigerian student prepare for their exams.

Question: ${q.question}
Options: ${(q.options||[]).map((o,i)=>String.fromCharCode(65+i)+'. '+o).join(' | ')}
Correct answer: ${correctOpt}
Student answered: ${studentOpt} (${wasCorrect ? 'CORRECT ✓' : 'WRONG ✗'})
Subject: ${SUBJECTS[S.subject]?.name || S.subject}
Exam: ${q.exam || S.exam}

Give a clear explanation in 3-4 sentences:
1. Why the correct answer is right — the key concept or principle
2. ${!wasCorrect ? "Why the student's choice was wrong and what trap they fell into" : "What makes this concept commonly tested in WAEC/NECO"}
3. A memory tip or rule to remember for the exam

Use plain English. Be encouraging. Keep it concise — this student is under exam pressure.`;
    } else {
      prompt = `You are a WAEC/NECO exam tutor helping a Nigerian student prepare.

Theory question: ${q.question}
Subject: ${SUBJECTS[S.subject]?.name || S.subject}
Exam: ${q.exam || S.exam}

The marking scheme awards points for: ${(q.markingScheme||[]).map(p=>p.point).join('; ')}

Explain in 4-5 sentences:
1. What the examiner is really asking for
2. The key points that must appear in a top-scoring answer
3. Common mistakes students make on this question
4. One examiner tip for maximising marks

Be specific to the Nigerian curriculum. Keep it practical and encouraging.`;
    }

    try {
      if (!useMeaAICredit()) {
        if (E.meaAiLoading) E.meaAiLoading.classList.add('hidden');
        alert('No AI credits remaining.');
        if (E.meaAiPanel) E.meaAiPanel.classList.add('hidden');
        return;
      }
      const res  = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 400,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      const data = await res.json();
      const text = data.content?.map(c => c.text||'').join('') || 'Could not get explanation. Please try again.';

      if (E.meaAiLoading) E.meaAiLoading.classList.add('hidden');
      if (E.meaAiResponse) {
        E.meaAiResponse.innerHTML = `
          <div class="mea-ai-q">${safe(q.question.substring(0,90))}${q.question.length>90?'…':''}</div>
          <div class="mea-ai-text">${safe(text).replace(/\n/g,'<br/>')}</div>`;
        E.meaAiResponse.classList.remove('hidden');
      }
      updateMeaAICredits();
    } catch(err) {
      if (E.meaAiLoading) E.meaAiLoading.classList.add('hidden');
      if (E.meaAiResponse) {
        E.meaAiResponse.innerHTML = '<p style="color:#e74c3c;font-size:.85rem">Could not reach AI. Check your connection and try again.</p>';
        E.meaAiResponse.classList.remove('hidden');
      }
    }
  }

  /* ════════════════════════════════
     SNAP AND MARK
  ════════════════════════════════ */
  // ⚙️ Set your Vercel API URL here after deployment
  const SNAP_API_URL   = 'https://editoby-api.vercel.app/api/mark';
  const SK_SNAPS       = 'mea-snaps-v1';
  const SNAP_QUARTERLY = 50; // snaps per quarter for Student Pass

  function getSnapCredits() {
    const qtr = getMeaQuarter();
    const d   = loadSafe(SK_SNAPS);
    if (!d || d.quarter !== qtr) {
      saveSafe(SK_SNAPS, { n: SNAP_QUARTERLY, quarter: qtr });
      return SNAP_QUARTERLY;
    }
    return d.n;
  }

  function useSnapCredit() {
    const c = getSnapCredits();
    if (c <= 0) return false;
    saveSafe(SK_SNAPS, { n: c - 1, quarter: getMeaQuarter() });
    return true;
  }

  function updateSnapCreditsBadge() {
    if (!E.snapCreditsBadge) return;
    const c = getSnapCredits();
    E.snapCreditsBadge.textContent = `${c} snap${c===1?'':'s'} left this quarter`;
    E.snapCreditsBadge.style.color = c < 5 ? '#e74c3c' : 'var(--text-dim)';
  }

  function triggerSnap() {
    if (!S.hasAccess) { showPaywall('upgrade'); return; }
    const credits = getSnapCredits();
    if (credits <= 0) {
      alert('You have used all your snap credits for this quarter.\n\nTop up: ₦300 = 10 more snaps.');
      return;
    }
    // Open file picker — on mobile this triggers camera
    if (E.snapFileInput) E.snapFileInput.click();
  }

  function handleSnapFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    // Reset input so same file can be reselected
    e.target.value = '';

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    // Compress then send
    compressImage(file, 800, 0.75)
      .then(compressed => sendToMark(compressed))
      .catch(err => {
        console.error('Compression error:', err);
        alert('Could not process image. Please try again.');
      });
  }

  function compressImage(file, maxWidth, quality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = ev => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let w = img.width;
          let h = img.height;

          // Scale down if wider than maxWidth
          if (w > maxWidth) {
            h = Math.round(h * (maxWidth / w));
            w = maxWidth;
          }

          canvas.width  = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');

          // White background (prevents transparency issues)
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);

          // Export as JPEG
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          const base64  = dataUrl.split(',')[1];

          // Log compression ratio for debugging
          const origKB = Math.round(file.size / 1024);
          const compKB = Math.round(base64.length * 0.75 / 1024);
          console.log(`Snap compressed: ${origKB}KB → ${compKB}KB`);

          resolve({ base64, mediaType: 'image/jpeg', sizeKB: compKB });
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function sendToMark({ base64, mediaType }) {
    const q = S.questions[S.idx];
    if (!q || q._type !== 'theory') return;

    // Show processing overlay
    if (E.snapProcessing) E.snapProcessing.classList.remove('hidden');

    if (!useSnapCredit()) {
      if (E.snapProcessing) E.snapProcessing.classList.add('hidden');
      alert('No snap credits remaining.');
      return;
    }
    updateSnapCreditsBadge();

    const scheme = (q.markingScheme || []).map(s => ({
      point: s.point,
      marks: s.marks || 1,
    }));
    const totalMarks = scheme.reduce((sum, s) => sum + s.marks, 0);

    try {
      const res = await fetch(SNAP_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image:      base64,
          mediaType,
          question:   q.question,
          scheme,
          totalMarks,
          subject:    SUBJECTS[S.subject]?.name || S.subject,
          examBody:   q.exam || S.exam,
        }),
      });

      if (E.snapProcessing) E.snapProcessing.classList.add('hidden');

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        if (err.code === 'IMAGE_TOO_LARGE') {
          alert('Image is too large even after compression. Please try again with better lighting to avoid needing maximum quality.');
        } else {
          alert(err.error || 'Could not reach marking server. Check your connection.');
        }
        return;
      }

      const result = await res.json();
      showSnapResult(result);

    } catch (err) {
      if (E.snapProcessing) E.snapProcessing.classList.add('hidden');
      console.error('Snap API error:', err);
      alert('Could not reach the marking server. Check your internet connection and try again.');
    }
  }

  function showSnapResult(result) {
    const { awarded, total, percent, grade, feedback, examinerNote, breakdown, handwritingWarning } = result;

    const color = percent >= 60 ? '#27ae60' : percent >= 40 ? '#e67e22' : '#e74c3c';

    if (E.snapResultScore) {
      E.snapResultScore.textContent = `${awarded}/${total}`;
      E.snapResultScore.style.color = color;
    }
    if (E.snapResultGrade) {
      E.snapResultGrade.textContent = grade;
      E.snapResultGrade.style.color = color;
    }
    if (E.snapResultPct) {
      E.snapResultPct.textContent = `${percent}%`;
      E.snapResultPct.style.color = color;
    }

    // Handwriting warning
    if (E.snapHwWarning) {
      E.snapHwWarning.classList.toggle('hidden', !handwritingWarning);
    }

    // Feedback
    if (E.snapFeedback) E.snapFeedback.textContent = feedback;

    // Breakdown
    if (E.snapBreakdown && breakdown?.length) {
      E.snapBreakdown.innerHTML = breakdown.map(b => {
        const full = b.awarded >= b.maxMarks;
        const none = b.awarded === 0;
        const cls  = full ? 'sbr-full' : none ? 'sbr-none' : 'sbr-part';
        const icon = full ? '✓' : none ? '✗' : '½';
        return `<div class="snap-breakdown-row ${cls}">
          <span class="sbr-icon">${icon}</span>
          <div class="sbr-body">
            <div class="sbr-point">${safe(b.point)}</div>
            <div class="sbr-comment">${safe(b.comment || '')}</div>
          </div>
          <span class="sbr-marks">${b.awarded}/${b.maxMarks}</span>
        </div>`;
      }).join('');
    }

    // Examiner note
    if (E.snapExaminerNote && examinerNote) {
      E.snapExaminerNote.innerHTML = `📌 <strong>Remember:</strong> ${safe(examinerNote)}`;
    }

    if (E.snapResultModal) E.snapResultModal.classList.remove('hidden');
  }

  /* ════════ BACK BUTTON WARNING TOAST ════════ */
  let _backToastTimer = null;

  function showBackWarningToast() {
    let toast = document.getElementById('backWarningToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'backWarningToast';
      toast.style.cssText = `
        position:fixed; bottom:5rem; left:50%; transform:translateX(-50%);
        background:#0a1628; color:white; border:1.5px solid #d4af37;
        border-radius:10px; padding:.75rem 1.25rem;
        font-family:var(--sans,sans-serif); font-size:.82rem; font-weight:500;
        text-align:center; z-index:9999; max-width:320px; width:calc(100% - 2rem);
        box-shadow:0 4px 20px rgba(0,0,0,.4); line-height:1.5;
        animation:toastSlideUp .25s ease;
      `;
      document.body.appendChild(toast);
    }
    const isExam = S.mode === 'exam';
    toast.innerHTML = isExam
      ? '⚠️ <strong>Press back again to exit exam.</strong><br>Use <strong>← Prev / Next →</strong> to navigate questions.'
      : '← <strong>Press back again to exit session.</strong><br>Use <strong>← Prev / Next →</strong> to navigate questions.';
    toast.style.display = 'block';

    if (_backToastTimer) clearTimeout(_backToastTimer);
    _backToastTimer = setTimeout(hideBackWarningToast, 3000);
  }

  function hideBackWarningToast() {
    const toast = document.getElementById('backWarningToast');
    if (toast) toast.style.display = 'none';
    if (_backToastTimer) { clearTimeout(_backToastTimer); _backToastTimer = null; }
  }

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
    if (name==='home') { renderHistory(); refreshStats(); renderStreak(); refreshUpgradeBar(); }
    if (name==='result') { renderResultTeaser(); }
    if (name==='quiz' && !S.hasAccess) { scheduleTeaserToast(); }
    const qcBtn = document.getElementById('quizChallengeBtn');
    if (qcBtn) qcBtn.classList.toggle('hidden', name === 'quiz');

    // History management — push when entering quiz or result
    // so browser back button has a state to pop
    if (name === 'quiz' || name === 'result') {
      history.pushState({ screen: name }, '', window.location.pathname);
    } else {
      // Returning home — replace current state, keep one entry in stack
      history.replaceState({ screen: 'home' }, '', window.location.pathname);
      // Then push a fresh home entry so next session's back still works
      history.pushState({ screen: 'home' }, '', window.location.pathname);
    }
  }

  /* ════════ UPGRADE BAR ════════ */
  function refreshUpgradeBar() {
    const qcBtn = document.getElementById('quizChallengeBtn');
    if (!E.upgradeBar) return;
    if (S.hasAccess) {
      E.upgradeBar.style.display = 'none';
      if (qcBtn && S.currentUser) qcBtn.classList.remove('hidden');
      return;
    }
    // Show challenge button to free users too — they get paywall on click
    // It acts as another conversion touchpoint
    if (qcBtn && S.currentUser) qcBtn.classList.remove('hidden');
    E.upgradeBar.style.display = '';
    const remaining = Math.max(0, FREE_TRIAL_LIMIT - S.freeUsed);
    const msgs = [
      `⚡ ${remaining} free question${remaining===1?'':'s'} left — unlock unlimited access from ₦2,000`,
      `🧠 Ask AI why you got it wrong — Student Pass Plus explains every answer`,
      `📸 Snap your theory answers and get marked instantly — Student Pass`,
      `🏆 WAEC & NECO prep — AI explanations, snap marking, community quiz from ₦2,000`,
      `🔓 Unlimited sessions · All 15 subjects · Year-by-year papers — Student Pass`,
      `💡 "Why is this correct?" — AI explanations for your weak areas. Plus tier ₦3,500.`,
    ];
    const idx = Math.floor(Date.now() / 30000) % msgs.length;
    if (E.upgradeBarText) E.upgradeBarText.textContent = msgs[idx];
  }

  /* ════════ RESULT TEASER ════════ */
  const RESULT_TEASERS = [
    {
      icon: '🧠',
      title: 'Got questions wrong? Ask AI why.',
      sub:   'Student Pass Plus explains every wrong answer in plain English — personalised to your weak areas. ₦3,500/quarter.'
    },
    {
      icon: '📸',
      title: 'Snap your theory answers. Get marked in seconds.',
      sub:   'Student Pass includes 50 snap-and-mark credits. No other exam prep app in Nigeria does this.'
    },
    {
      icon: '💡',
      title: '"Why is this the correct answer?"',
      sub:   'AI explanations on Student Pass Plus break down every question — the concept, the trap, the memory tip. Built for WAEC & NECO.'
    },
    {
      icon: '📚',
      title: 'You just scratched the surface.',
      sub:   'Subscribers access all 15 subjects, all years — WAEC, NECO, GCE and NABTEB. Unlimited sessions.'
    },
    {
      icon: '🎯',
      title: 'Serious students subscribe.',
      sub:   'Early access at ₦2,000/quarter — only 100 spots. AI explanations, snap marking, community quiz. All in.'
    },
    {
      icon: '📅',
      title: 'Drill past questions year by year.',
      sub:   'Filter by 2019, 2020, 2021, 2022 or 2023 — or mix all years. Subscribers unlock every year.'
    },
    {
      icon: '🏆',
      title: 'Challenge your friends. See who scores higher.',
      sub:   'Community quiz lets paid subscribers create a challenge, share the code on WhatsApp, and compare scores.'
    },
  ];

  function renderResultTeaser() {
    if (!E.resultUpgradTeaser) return;
    if (S.hasAccess) { E.resultUpgradTeaser.style.display = 'none'; return; }
    E.resultUpgradTeaser.style.display = '';
    const t = RESULT_TEASERS[Math.floor(Math.random() * RESULT_TEASERS.length)];
    const iconEl = E.resultUpgradTeaser.querySelector('.rut-icon');
    if (iconEl) iconEl.textContent = t.icon;
    if (E.rutTitle) E.rutTitle.textContent = t.title;
    const subEl = E.resultUpgradTeaser.querySelector('.rut-sub');
    if (subEl) subEl.textContent = t.sub;
  }

  /* ════════ TEASER TOAST (mid-session) ════════ */
  const SESSION_TEASERS = [
    '🧠 Ask AI why you got that wrong — Student Pass Plus explains every answer. ₦3,500/quarter.',
    '💡 "Why is this the correct answer?" — AI explanations built for WAEC & NECO. Upgrade to Plus.',
    '📸 Snap your theory answer and get it marked against the official scheme — Student Pass.',
    '⚡ Unlimited sessions across all 15 subjects from ₦2,000 — early access, 100 spots only.',
    '🏆 Challenge a friend on this subject — subscribe and create a quiz challenge now.',
    '🔐 Lock in early access at ₦2,000/quarter before the price goes up. Limited spots left.',
    '📅 Filter by exam year — drill 2023 WAEC only, or mix all years. Subscribers unlock everything.',
  ];

  let _teaserTimer = null;

  function scheduleTeaserToast() {
    if (S.hasAccess) return;
    if (_teaserTimer) clearTimeout(_teaserTimer);
    // Show at question 5 or after 90 seconds — whichever comes first
    _teaserTimer = setTimeout(() => {
      if (!S.hasAccess && S.inSession) showTeaserToast();
    }, 90000);
  }

  function showTeaserToast() {
    if (!E.teaserToast) return;
    const msg = SESSION_TEASERS[Math.floor(Math.random() * SESSION_TEASERS.length)];
    if (E.teaserToastText) E.teaserToastText.textContent = msg;
    E.teaserToast.classList.remove('hidden');
    // Auto-hide after 8 seconds
    setTimeout(hideTeaserToast, 8000);
  }

  function hideTeaserToast() {
    if (E.teaserToast) E.teaserToast.classList.add('hidden');
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
