/* ═══════════════════════════════════════════════════════════
   MY EXAMS APP — Application Logic v1.0
   WAEC · NECO · GCE · NABTEB
   Objective + Theory | Practice + Exam mode
═══════════════════════════════════════════════════════════ */

(() => {

  /* ── STORAGE KEYS ── */
  const SK = {
    users:    'mea-users-v1',
    current:  'mea-current-v1',
    access:   'mea-access-v1',
    freeUsed: 'mea-free-v1',
  };

  /* ── CONSTANTS ── */
  const FREE_DAILY_LIMIT = 10;

  /* ── STATE ── */
  const S = {
    currentUser:    loadSafe(SK.current) || '',
    users:          loadSafe(SK.users, {}),
    hasAccess:      checkAccess(),
    freeUsedToday:  getFreeUsed(),

    // Session
    selectedExam:    'WAEC',
    selectedSubject: '',
    selectedMode:    'practice',
    selectedType:    'objective',
    selectedCount:   20,
    selectedDuration: null,

    // Active quiz
    questions:   [],
    answers:     [],
    currentIdx:  0,
    reviewMode:  false,
    showAnswer:  false,
    timerSecs:   0,
    timerId:     null,
  };

  /* ── ELEMENT REFS ── */
  const el = {
    // Home
    homeScreen:    q('#homeScreen'),
    quizScreen:    q('#quizScreen'),
    resultScreen:  q('#resultScreen'),
    studentInput:  q('#studentNameInput'),
    loginBtn:      q('#loginBtn'),
    studentPill:   q('#studentPill'),
    examPills:     qAll('.exam-pill'),
    subjectGrid:   q('#subjectGrid'),
    modeToggle:    q('#modeToggle'),
    typeToggle:    q('#typeToggle'),
    qCountSelect:  q('#qCountSelect'),
    durationSelect:q('#durationSelect'),
    startBtn:      q('#startBtn'),
    startBtnText:  q('#startBtnText'),
    historyList:   q('#historyList'),
    clearHistory:  q('#clearHistoryBtn'),
    hStatSessions: q('#hStatSessions'),
    hStatAvg:      q('#hStatAvg'),
    hStatBest:     q('#hStatBest'),
    hStatQs:       q('#hStatQs'),
    // Paywall
    paywallOverlay:q('#paywallOverlay'),
    payBtn:        q('#payBtn'),
    accessCodeInput:q('#accessCodeInput'),
    redeemBtn:     q('#redeemBtn'),
    closePaywall:  q('#closePaywall'),
    // Sidebar
    exitBtn:       q('#exitBtn'),
    sbStudent:     q('#sbStudent'),
    sbSubject:     q('#sbSubject'),
    sbMode:        q('#sbMode'),
    sbExam:        q('#sbExam'),
    timerCard:     q('#timerCard'),
    timerDisplay:  q('#timerDisplay'),
    progressBar:   q('#progressBar'),
    progressFraction:q('#progressFraction'),
    progressSub:   q('#progressSub'),
    pillsLabel:    q('#pillsLabel'),
    qPills:        q('#qPills'),
    submitQuizBtn: q('#submitQuizBtn'),
    // Quiz main
    qtypeBanner:   q('#qtypeBanner'),
    qNumBadge:     q('#qNumBadge'),
    qSubjectTag:   q('#qSubjectTag'),
    qYearTag:      q('#qYearTag'),
    qPosIndicator: q('#qPosIndicator'),
    objectivePanel:q('#objectivePanel'),
    theoryPanel:   q('#theoryPanel'),
    objectiveQ:    q('#objectiveQuestion'),
    optionsList:   q('#optionsList'),
    explanationArea:q('#explanationArea'),
    theoryQ:       q('#theoryQuestion'),
    markingScheme: q('#markingScheme'),
    toggleAnswerBtn:q('#toggleAnswerBtn'),
    modelAnswer:   q('#modelAnswer'),
    examTipBox:    q('#examTipBox'),
    prevBtn:       q('#prevBtn'),
    nextBtn:       q('#nextBtn'),
    // Results
    resultBadge:   q('#resultBadge'),
    resultScore:   q('#resultScore'),
    resultGrade:   q('#resultGrade'),
    resultSummary: q('#resultSummary'),
    resultStatsGrid:q('#resultStatsGrid'),
    reviewBtn:     q('#reviewBtn'),
    homeBtn:       q('#homeBtn'),
    shareBtn:      q('#shareBtn'),
  };

  /* ══════════════════════════════════════════
     INIT
  ══════════════════════════════════════════ */
  function init() {
    buildSubjectGrid();
    bindEvents();
    restoreUser();
    updateHeroStats();
    updateStartBtn();
    totalQCount();
  }

  function totalQCount() {
    let t = 0;
    Object.values(EXAM_BANK).forEach(s => {
      t += (s.objective?.length || 0) + (s.theory?.length || 0);
    });
    el.hStatQs.textContent = String(t);
  }

  /* ── BUILD SUBJECT GRID ── */
  function buildSubjectGrid() {
    el.subjectGrid.innerHTML = '';
    Object.entries(SUBJECTS).forEach(([key, meta]) => {
      const bank = EXAM_BANK[key];
      if (!bank) return;
      const objCount = bank.objective?.length || 0;
      const thCount  = bank.theory?.length || 0;
      const btn = document.createElement('button');
      btn.className = 'subject-btn';
      btn.dataset.subject = key;
      btn.innerHTML = `
        <span class="sub-icon">${meta.icon}</span>
        <span>${meta.name}</span>
        <span class="sub-count">${objCount}Q</span>
      `;
      btn.addEventListener('click', () => selectSubject(key, btn));
      el.subjectGrid.appendChild(btn);
    });
  }

  /* ── BIND EVENTS ── */
  function bindEvents() {
    el.loginBtn.addEventListener('click', loginStudent);
    el.studentInput.addEventListener('keydown', e => { if (e.key === 'Enter') loginStudent(); });

    el.examPills.forEach(p => p.addEventListener('click', () => {
      el.examPills.forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      S.selectedExam = p.dataset.exam;
    }));

    el.modeToggle.querySelectorAll('.mode-btn').forEach(b => b.addEventListener('click', () => {
      el.modeToggle.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      S.selectedMode = b.dataset.mode;
      el.durationSelect.disabled = S.selectedMode !== 'exam';
      updateStartBtn();
    }));

    el.typeToggle.querySelectorAll('.mode-btn').forEach(b => b.addEventListener('click', () => {
      el.typeToggle.querySelectorAll('.mode-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      S.selectedType = b.dataset.type;
      updateSubjectGrid();
      updateStartBtn();
    }));

    el.qCountSelect.addEventListener('change', () => {
      S.selectedCount = el.qCountSelect.value === 'all' ? 'all' : parseInt(el.qCountSelect.value);
    });

    el.durationSelect.addEventListener('change', () => {
      S.selectedDuration = el.durationSelect.value;
    });

    el.startBtn.addEventListener('click', startSession);
    el.clearHistory.addEventListener('click', clearHistory);

    // Paywall
    el.payBtn.addEventListener('click', handlePayment);
    el.redeemBtn.addEventListener('click', redeemCode);
    el.closePaywall.addEventListener('click', () => el.paywallOverlay.classList.add('hidden'));

    // Quiz
    el.exitBtn.addEventListener('click', confirmExit);
    el.submitQuizBtn.addEventListener('click', finishSession);
    el.prevBtn.addEventListener('click', () => navigate(-1));
    el.nextBtn.addEventListener('click', () => navigate(1));
    el.toggleAnswerBtn.addEventListener('click', toggleModelAnswer);

    // Results
    el.reviewBtn.addEventListener('click', enterReview);
    el.homeBtn.addEventListener('click', () => showScreen('home'));
    el.shareBtn.addEventListener('click', shareApp);
  }

  /* ══════════════════════════════════════════
     STUDENT / LOGIN
  ══════════════════════════════════════════ */
  function loginStudent() {
    const name = el.studentInput.value.trim().replace(/\s+/,' ');
    if (!name) { el.studentInput.focus(); return; }
    if (!S.users[name]) S.users[name] = { history:[] };
    S.currentUser = name;
    saveSafe(SK.users, S.users);
    saveSafe(SK.current, name);
    renderCurrentUser();
    updateHeroStats();
    renderHistory();
  }

  function restoreUser() {
    if (S.currentUser) {
      el.studentInput.value = S.currentUser;
      renderCurrentUser();
      renderHistory();
    }
    updateHeroStats();
  }

  function renderCurrentUser() {
    if (S.currentUser) {
      el.studentPill.textContent = '✓ Logged in as: ' + S.currentUser;
      el.studentPill.className = 'student-status active';
    } else {
      el.studentPill.textContent = 'No student logged in';
      el.studentPill.className = 'student-status';
    }
  }

  /* ══════════════════════════════════════════
     SUBJECT SELECTION
  ══════════════════════════════════════════ */
  function selectSubject(key, btn) {
    qAll('.subject-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    S.selectedSubject = key;
    updateStartBtn();
  }

  function updateSubjectGrid() {
    qAll('.subject-btn').forEach(btn => {
      const key = btn.dataset.subject;
      const bank = EXAM_BANK[key];
      if (!bank) { btn.disabled = true; return; }
      const hasObj = (bank.objective?.length || 0) > 0;
      const hasTh  = (bank.theory?.length || 0) > 0;
      const type   = S.selectedType;
      const available = (type==='objective' && hasObj) || (type==='theory' && hasTh) || (type==='both' && (hasObj||hasTh));
      btn.disabled = !available;
      const count = type==='objective' ? bank.objective?.length : type==='theory' ? bank.theory?.length : (bank.objective?.length||0)+(bank.theory?.length||0);
      const countEl = btn.querySelector('.sub-count');
      if (countEl) countEl.textContent = (count||0)+'Q';
    });
    // Deselect if current subject no longer valid
    if (S.selectedSubject) {
      const activeBtns = qAll('.subject-btn.active');
      if (activeBtns.length === 0 || activeBtns[0]?.disabled) {
        S.selectedSubject = '';
        updateStartBtn();
      }
    }
  }

  function updateStartBtn() {
    const hasSubject = Boolean(S.selectedSubject);
    el.startBtn.disabled = !hasSubject;
    if (!hasSubject) {
      el.startBtnText.textContent = 'Select a subject to begin';
    } else {
      const subName = SUBJECTS[S.selectedSubject]?.name || S.selectedSubject;
      const action  = S.selectedMode === 'exam' ? 'Start Exam' : 'Start Practice';
      el.startBtnText.textContent = `${action} — ${subName}`;
    }
  }

  /* ══════════════════════════════════════════
     SESSION START
  ══════════════════════════════════════════ */
  function startSession() {
    if (!S.currentUser) { loginStudent(); if (!S.currentUser) return; }
    if (!S.selectedSubject) return;

    // Free tier check
    if (!S.hasAccess) {
      if (S.freeUsedToday >= FREE_DAILY_LIMIT) {
        el.paywallOverlay.classList.remove('hidden');
        return;
      }
    }

    const bank = EXAM_BANK[S.selectedSubject];
    let pool = [];

    if (S.selectedType === 'objective') {
      pool = shuffle([...(bank.objective||[])]).map(q => ({...q, _type:'objective'}));
    } else if (S.selectedType === 'theory') {
      pool = shuffle([...(bank.theory||[])]).map(q => ({...q, _type:'theory'}));
    } else {
      const obj = shuffle([...(bank.objective||[])]).map(q => ({...q, _type:'objective'}));
      const th  = shuffle([...(bank.theory||[])]).map(q => ({...q, _type:'theory'}));
      pool = shuffle([...obj, ...th]);
    }

    if (!pool.length) { alert('No questions available for this selection.'); return; }

    const count = S.selectedCount === 'all' ? pool.length : Math.min(S.selectedCount, pool.length);
    S.questions   = pool.slice(0, count);
    S.answers     = new Array(count).fill(null);
    S.currentIdx  = 0;
    S.reviewMode  = false;
    S.showAnswer  = false;

    // Timer
    if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }
    if (S.selectedMode === 'exam') {
      const dur = S.durationSelect?.value === 'auto' ? count : (parseInt(el.durationSelect.value)||count);
      S.timerSecs = dur * 60;
      startTimer();
    } else {
      S.timerSecs = 0;
    }

    // Sidebar meta
    el.sbStudent.textContent = S.currentUser;
    el.sbSubject.textContent = SUBJECTS[S.selectedSubject]?.name || S.selectedSubject;
    el.sbMode.textContent    = S.selectedMode === 'exam' ? 'Exam Mode' : 'Practice';
    el.sbExam.textContent    = S.selectedExam;
    el.timerCard.style.display = S.selectedMode === 'exam' ? 'block' : 'none';

    buildPills();
    renderQuestion();
    showScreen('quiz');
  }

  /* ── TIMER ── */
  function startTimer() {
    updateTimerDisplay();
    S.timerId = setInterval(() => {
      S.timerSecs--;
      updateTimerDisplay();
      if (S.timerSecs <= 0) {
        clearInterval(S.timerId);
        S.timerId = null;
        finishSession(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const t = Math.max(S.timerSecs, 0);
    const m = Math.floor(t/60);
    const s = t % 60;
    el.timerDisplay.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    el.timerDisplay.classList.toggle('urgent', S.timerSecs < 300 && S.timerSecs > 0 && S.selectedMode === 'exam');
  }

  /* ── PILLS ── */
  function buildPills() {
    el.qPills.innerHTML = '';
    S.questions.forEach((q,i) => {
      const btn = document.createElement('button');
      btn.className = 'qpill' + (q._type === 'theory' ? ' theory-pill' : '');
      btn.textContent = i+1;
      btn.title = `Q${i+1} — ${q._type}`;
      btn.addEventListener('click', () => { S.currentIdx = i; renderQuestion(); });
      el.qPills.appendChild(btn);
    });
    syncPills();
  }

  function syncPills() {
    const pills = el.qPills.querySelectorAll('.qpill');
    pills.forEach((p,i) => {
      p.classList.toggle('current', i === S.currentIdx);
      p.classList.toggle('answered', S.answers[i] !== null);
    });
    const answered = S.answers.filter(a => a !== null).length;
    const total    = S.questions.length;
    el.progressBar.style.width = total ? `${(answered/total)*100}%` : '0%';
    el.progressFraction.textContent = `${S.currentIdx+1}/${total}`;
    el.progressSub.textContent = `${answered} answered`;
  }

  /* ══════════════════════════════════════════
     RENDER QUESTION
  ══════════════════════════════════════════ */
  function renderQuestion() {
    const q   = S.questions[S.currentIdx];
    const ans = S.answers[S.currentIdx];
    const isObj = q._type === 'objective';

    // Header
    el.qNumBadge.textContent    = `Q${S.currentIdx+1}`;
    el.qSubjectTag.textContent  = SUBJECTS[S.selectedSubject]?.name || '';
    el.qYearTag.textContent     = `${q.exam||S.selectedExam} ${q.year||''}`.trim();
    el.qPosIndicator.textContent = `${S.currentIdx+1} of ${S.questions.length}`;

    // Type banner
    el.qtypeBanner.textContent = isObj ? 'Objective Question' : 'Theory / Essay Question';
    el.qtypeBanner.className   = `qtype-banner ${isObj ? 'objective' : 'theory'}`;

    // Toggle panels
    el.objectivePanel.classList.toggle('hidden', !isObj);
    el.theoryPanel.classList.toggle('hidden',  isObj);

    if (isObj) renderObjective(q, ans);
    else        renderTheory(q);

    // Nav
    el.prevBtn.disabled = S.currentIdx === 0;
    el.nextBtn.textContent = S.currentIdx === S.questions.length - 1 ? 'Finish ✓' : 'Next →';

    // Free usage track
    if (!S.hasAccess && !S.reviewMode) {
      S.freeUsedToday++;
      saveSafe(SK.freeUsed, { date: todayStr(), count: S.freeUsedToday });
    }

    syncPills();
  }

  function renderObjective(q, ans) {
    el.objectiveQ.innerHTML = escHtml(q.question).replace(/\n/g,'<br>');
    el.optionsList.innerHTML = '';
    el.explanationArea.className = 'explanation-area';

    const showResult = S.reviewMode || (S.selectedMode === 'practice' && ans !== null);

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65+idx)}.</span> ${escHtml(opt)}`;

      if (showResult) {
        if (idx === q.answer)              btn.classList.add('correct');
        if (idx === ans && ans !== q.answer) btn.classList.add('wrong');
      } else if (idx === ans) {
        btn.classList.add('selected');
      }

      btn.disabled = S.reviewMode || (S.selectedMode === 'practice' && ans !== null);
      btn.addEventListener('click', () => {
        if (S.reviewMode || (S.selectedMode === 'practice' && S.answers[S.currentIdx] !== null)) return;
        S.answers[S.currentIdx] = idx;
        renderQuestion();
      });
      el.optionsList.appendChild(btn);
    });

    if (showResult && q.explanation) {
      el.explanationArea.textContent = '💡 ' + q.explanation;
      el.explanationArea.classList.add('visible');
    }
  }

  function renderTheory(q) {
    el.theoryQ.innerHTML = escHtml(q.question).replace(/\n/g,'<br>');

    // Marking scheme
    el.markingScheme.innerHTML = `
      <div class="ms-title">📋 Marking Scheme</div>
      <div class="ms-total">Total: ${q.totalMarks} mark${q.totalMarks !== 1 ? 's' : ''}</div>
      <div class="ms-points">
        ${(q.markingScheme||[]).map(pt => `
          <div class="ms-point">
            <span class="ms-mark">${pt.marks}mk</span>
            <span>${escHtml(pt.point)}</span>
          </div>
        `).join('')}
      </div>
    `;

    // Model answer (hidden by default unless review mode)
    el.modelAnswer.textContent = q.modelAnswer || '';
    el.modelAnswer.className   = 'model-answer' + (S.reviewMode ? ' visible' : '');
    el.toggleAnswerBtn.textContent = S.reviewMode ? '🙈 Hide Model Answer' : '📄 Show Model Answer';
    S.showAnswer = S.reviewMode;

    // Exam tip
    if (q.examTip) {
      el.examTipBox.innerHTML = `<div class="exam-tip-label">⚡ Examiner's Tip</div>${escHtml(q.examTip)}`;
      el.examTipBox.style.display = 'block';
    } else {
      el.examTipBox.style.display = 'none';
    }

    // Mark theory as "answered" (seen) immediately
    if (S.answers[S.currentIdx] === null) {
      S.answers[S.currentIdx] = 'seen';
    }
  }

  function toggleModelAnswer() {
    S.showAnswer = !S.showAnswer;
    el.modelAnswer.classList.toggle('visible', S.showAnswer);
    el.toggleAnswerBtn.textContent = S.showAnswer ? '🙈 Hide Model Answer' : '📄 Show Model Answer';
  }

  /* ── NAVIGATE ── */
  function navigate(step) {
    if (step > 0 && S.currentIdx === S.questions.length - 1) {
      finishSession(false);
      return;
    }
    S.currentIdx = Math.max(0, Math.min(S.questions.length-1, S.currentIdx + step));
    S.showAnswer = false;
    renderQuestion();
  }

  /* ══════════════════════════════════════════
     FINISH / RESULTS
  ══════════════════════════════════════════ */
  function finishSession(fromTimeout = false) {
    if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }

    const objQs  = S.questions.filter(q => q._type === 'objective');
    const correct = objQs.reduce((sum, q, i) => {
      const globalIdx = S.questions.indexOf(q);
      return sum + (S.answers[globalIdx] === q.answer ? 1 : 0);
    }, 0);
    const wrong   = objQs.reduce((sum, q, i) => {
      const globalIdx = S.questions.indexOf(q);
      const a = S.answers[globalIdx];
      return sum + (a !== null && a !== 'seen' && a !== q.answer ? 1 : 0);
    }, 0);
    const skipped = S.questions.filter((q,i) => q._type==='objective' && S.answers[i]===null).length;
    const theoryCount = S.questions.filter(q => q._type==='theory').length;

    const total   = objQs.length;
    const pct     = total ? Math.round((correct/total)*100) : null;

    // Save to history
    const record = {
      student:  S.currentUser,
      subject:  SUBJECTS[S.selectedSubject]?.name || S.selectedSubject,
      exam:     S.selectedExam,
      mode:     S.selectedMode,
      type:     S.selectedType,
      total,
      correct,
      wrong,
      skipped,
      theoryCount,
      pct,
      date:     new Date().toLocaleString(),
      timeout:  fromTimeout,
    };

    if (!S.users[S.currentUser]) S.users[S.currentUser] = { history:[] };
    S.users[S.currentUser].history.unshift(record);
    S.users[S.currentUser].history = S.users[S.currentUser].history.slice(0, 60);
    saveSafe(SK.users, S.users);

    renderResults(record);
    updateHeroStats();
    renderHistory();
    showScreen('result');
  }

  function renderResults(r) {
    const scoreStr = r.pct !== null ? r.pct + '%' : 'N/A';
    const grade    = r.pct === null ? 'Theory' : r.pct >= 75 ? 'Distinction' : r.pct >= 60 ? 'Credit' : r.pct >= 50 ? 'Pass' : 'Below Pass';
    const emoji    = r.pct === null ? '📖' : r.pct >= 75 ? '🏆' : r.pct >= 50 ? '✅' : '💪';
    const color    = r.pct === null ? 'var(--ink)' : r.pct >= 50 ? 'var(--green)' : 'var(--red)';

    el.resultBadge.textContent  = emoji;
    el.resultScore.textContent  = scoreStr;
    el.resultScore.style.color  = color;
    el.resultGrade.textContent  = grade;
    el.resultGrade.style.color  = color;

    el.resultSummary.textContent = r.timeout
      ? `Time elapsed — ${r.student} completed ${r.correct + r.wrong + r.skipped} of ${r.total} questions in ${r.subject} (${r.exam}).`
      : `${r.student} scored ${r.correct} out of ${r.total} objective question${r.total!==1?'s':''} in ${r.subject} (${r.exam}).`;

    el.resultStatsGrid.innerHTML = [
      r.pct !== null ? `<div class="rstat"><strong>${r.correct}</strong><span>Correct</span></div>` : '',
      r.pct !== null ? `<div class="rstat"><strong>${r.wrong}</strong><span>Wrong</span></div>` : '',
      r.pct !== null ? `<div class="rstat"><strong>${r.skipped}</strong><span>Skipped</span></div>` : '',
      r.theoryCount  ? `<div class="rstat"><strong>${r.theoryCount}</strong><span>Theory Q${r.theoryCount!==1?'s':''}</span></div>` : '',
      `<div class="rstat"><strong>${r.mode==='exam'?'Exam':'Pract.'}</strong><span>Mode</span></div>`,
    ].join('');
  }

  function enterReview() {
    S.reviewMode = true;
    S.currentIdx = 0;
    S.showAnswer  = true;
    buildPills();
    renderQuestion();
    showScreen('quiz');
  }

  function confirmExit() {
    const leave = confirm('Exit this session? Your progress will be saved to history.');
    if (leave) {
      if (S.questions.length > 0 && !S.reviewMode) finishSession(false);
      else {
        if (S.timerId) { clearInterval(S.timerId); S.timerId = null; }
        showScreen('home');
      }
    }
  }

  /* ══════════════════════════════════════════
     HISTORY
  ══════════════════════════════════════════ */
  function renderHistory() {
    const history = currentHistory();
    if (!S.currentUser) {
      el.historyList.innerHTML = '<div class="empty-history">Login to view your history.</div>';
      return;
    }
    if (!history.length) {
      el.historyList.innerHTML = '<div class="empty-history">No sessions yet. Start your first practice!</div>';
      return;
    }
    el.historyList.innerHTML = history.slice(0,20).map(r => `
      <div class="history-item">
        <div>
          <div class="hi-subject">${escHtml(r.subject)}</div>
          <div class="hi-meta">${escHtml(r.exam)} · ${escHtml(r.mode)} · ${r.type}</div>
        </div>
        <div>
          <div class="hi-score ${r.pct===null?'':r.pct>=50?'pass':'fail'}">${r.pct!==null ? r.pct+'%' : '—'}</div>
          <div class="hi-date">${escHtml(r.date)}</div>
        </div>
      </div>
    `).join('');
  }

  function clearHistory() {
    if (!S.currentUser) return;
    if (!confirm('Clear all history for ' + S.currentUser + '?')) return;
    if (!S.users[S.currentUser]) return;
    S.users[S.currentUser].history = [];
    saveSafe(SK.users, S.users);
    renderHistory();
    updateHeroStats();
  }

  function currentHistory() {
    return S.users[S.currentUser]?.history || [];
  }

  function updateHeroStats() {
    const hist = currentHistory();
    const objHist = hist.filter(r => r.pct !== null);
    el.hStatSessions.textContent = hist.length || 0;
    el.hStatAvg.textContent = objHist.length
      ? Math.round(objHist.reduce((s,r) => s+r.pct, 0) / objHist.length) + '%'
      : '—';
    el.hStatBest.textContent = objHist.length
      ? Math.max(...objHist.map(r => r.pct)) + '%'
      : '—';
  }

  /* ══════════════════════════════════════════
     PAYWALL / ACCESS
  ══════════════════════════════════════════ */
  function checkAccess() {
    const data = loadSafe(SK.access);
    if (!data) return false;
    // Simple: if access key exists and is not expired
    if (data.expires && new Date(data.expires) > new Date()) return true;
    return false;
  }

  function getFreeUsed() {
    const data = loadSafe(SK.freeUsed);
    if (!data) return 0;
    if (data.date !== todayStr()) return 0; // Reset daily
    return data.count || 0;
  }

  function handlePayment() {
    // Generate unique reference
    const ref = 'MEA-' + Date.now() + '-' + Math.random().toString(36).slice(2,8).toUpperCase();
    alert(
      'Paystack integration:\n\n' +
      'In production, this button will open the Paystack payment modal.\n\n' +
      'Amount: ₦1,000\n' +
      'Reference: ' + ref + '\n\n' +
      'After payment, you will receive an access code via SMS/email.\n' +
      'Enter the code in the "Already paid?" field below.'
    );
    // TODO: integrate actual Paystack popup
    // window.PaystackPop.setup({ key: 'pk_live_...', email, amount: 100000, ref, callback: grantAccess });
  }

  function redeemCode() {
    const code = el.accessCodeInput.value.trim().toUpperCase();
    // Demo codes for testing — replace with server-side verification in production
    const validCodes = {
      'MEA-DEMO-2025': 90,
      'WAEC-PROMO-001': 30,
      'NECO-PROMO-001': 30,
      'TEST-ACCESS': 7,
    };
    if (validCodes[code]) {
      const days = validCodes[code];
      const expires = new Date();
      expires.setDate(expires.getDate() + days);
      saveSafe(SK.access, { code, expires: expires.toISOString() });
      S.hasAccess = true;
      el.paywallOverlay.classList.add('hidden');
      alert('✅ Access granted for ' + days + ' days! Enjoy unlimited practice.');
    } else {
      alert('Invalid or expired access code. Please check and try again.');
    }
  }

  /* ══════════════════════════════════════════
     SHARE
  ══════════════════════════════════════════ */
  function shareApp() {
    const text = '🎓 I\'m using My Exams App to prepare for WAEC/NECO!\n\nPast questions + full model answers for all major subjects.\n\nGet it now — only ₦1,000 for 3 months: [your-link-here]';
    if (navigator.share) {
      navigator.share({ title:'My Exams App', text, url: window.location.href });
    } else {
      navigator.clipboard?.writeText(text).then(() => alert('Share message copied! Paste it in WhatsApp or SMS.'));
    }
  }

  /* ══════════════════════════════════════════
     SCREEN MANAGEMENT
  ══════════════════════════════════════════ */
  function showScreen(name) {
    el.homeScreen.classList.toggle('active', name === 'home');
    el.quizScreen.classList.toggle('active', name === 'quiz');
    el.resultScreen.classList.toggle('active', name === 'result');
    if (name === 'home') {
      renderHistory();
      updateHeroStats();
    }
  }

  /* ══════════════════════════════════════════
     UTILITIES
  ══════════════════════════════════════════ */
  function q(sel) { return document.querySelector(sel); }
  function qAll(sel) { return document.querySelectorAll(sel); }

  function escHtml(s) {
    return String(s||'')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  function shuffle(arr) {
    for (let i = arr.length-1; i > 0; i--) {
      const j = Math.floor(Math.random()*(i+1));
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
  }

  function saveSafe(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
  }

  function loadSafe(key, def = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : def;
    } catch(e) { return def; }
  }

  function todayStr() {
    return new Date().toISOString().slice(0,10);
  }

  /* ── START ── */
  init();

})();
