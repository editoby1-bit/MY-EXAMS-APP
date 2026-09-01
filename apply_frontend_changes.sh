#!/bin/bash
set -e
# Run from the ROOT of your MY-EXAMS-APP repo in Codespaces.
# Overwrites index.html and js/app.js with the School/Parent Dashboards build.
cat > index.html << 'INDEXHTML_EOF_MARK'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
  <meta name="theme-color" content="#0a1628"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="mobile-web-app-capable" content="yes"/>
  <meta name="description" content="Holiday Hub — Revision, quizzes, challenges and project help for the school break."/>
  <title>Holiday Hub</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/styles.css?v=1"/>
  <link rel="manifest" href="manifest.json"/>
  <link rel="icon" type="image/png" href="icon-192.png"/>
  <link rel="apple-touch-icon" href="icon-192.png"/>
  <script src="https://js.paystack.co/v1/inline.js"></script>
</head>
<body>
<div id="app">

  <!-- ════════════════ HOME SCREEN ════════════════ -->
  <section id="homeScreen" class="screen active">

    <div class="home-hero">
      <div class="hero-bg-pattern"></div>
      <div class="hero-content">
        <div class="app-brand">
          <span class="brand-star">★</span>
          <div class="brand-text">
            <h1 class="brand-name">Holiday<span class="brand-em">Hub</span></h1>
            <p class="brand-tagline">Revise · Quiz · Challenge · Get Unstuck</p>
          </div>
          <span id="countdownBadge" class="countdown-badge">🎒 <b id="daysLeft">—</b>&nbsp;days left</span>
          <span class="ai-credit-badge home-credit-badge">✨ 3 left</span>
        </div>

        <h2 class="hero-title">Keep your brain warm this break.</h2>
        <p class="hero-sub">Free revision. Real challenges. Zero pressure.</p>
        <p class="ai-boost-expiry hidden"></p>

        <div class="hero-stats-row">
          <div class="hstat"><span id="hStatSessions">0</span><label>Sessions</label></div>
          <div class="hstat-div"></div>
          <div class="hstat"><span id="hStatAvg">—</span><label>Average</label></div>
          <div class="hstat-div"></div>
          <div class="hstat"><span id="hStatStreak">0</span><label>Day Streak</label></div>
        </div>
      </div>
    </div>

    <div class="category-tabs" id="categoryTabs">
      <button class="cat-tab active" data-cat="senior">Senior<span class="cat-sub">WAEC/NECO/JAMB</span></button>
      <button class="cat-tab" data-cat="junior">Junior<span class="cat-sub">JSS1–JSS3</span></button>
    </div>

    <div id="dashboardNudge" class="dashboard-nudge-wrap"></div>

    <!-- Hidden by default. Flip SHOW_LAUNCH_BANNER to true in js/app.js when
         ready to announce My Exams App / My JAMB App. Edit the text below
         (or via JS) closer to launch. -->
    <div class="launch-banner hidden" id="launchBanner">
      <button class="launch-banner-close" id="launchBannerClose">✕</button>
      <div class="lb-icon">🚀</div>
      <div class="lb-text">
        <h3 id="launchBannerTitle">Coming Soon</h3>
        <p id="launchBannerSub">The full WAEC/NECO and JAMB experience — My Exams App and My JAMB App, launching soon.</p>
      </div>
    </div>

    <div class="study-plan-banner" id="studyPlanBanner">
      <div class="spb-icon">🗓</div>
      <div class="spb-text">
        <h3>Your Holiday Study Plan</h3>
        <p id="spbSub">Build a simple day-by-day plan for the rest of the break.</p>
      </div>
      <span class="spb-arrow">→</span>
    </div>

    <div class="feature-grid">
      <button class="feature-card" data-action="revision">
        <div class="feature-icon fi-revision">📖</div>
        <h3>Revision</h3>
        <p>Browse past questions with full explanations, no timer.</p>
      </button>

      <button class="feature-card" data-action="library">
        <div class="feature-icon fi-library">📚</div>
        <h3>Study Library</h3>
        <p>Flashcards, formula sheets, and concept notes — no quiz.</p>
      </button>

      <button class="feature-card" data-action="quiz">
        <div class="feature-icon fi-quiz">✍️</div>
        <h3>Quiz Me</h3>
        <p>Timed practice. See your score at the end.</p>
      </button>

      <button class="feature-card" data-action="challenge">
        <div class="feature-icon fi-challenge">🏆</div>
        <h3>Challenge a Friend</h3>
        <p>Same questions, same time. Who scores higher?</p>
      </button>

      <button class="feature-card" data-action="project">
        <div class="feature-icon fi-project">🧭</div>
        <h3>Project Helper</h3>
        <p>Get guided step by step — we won't just give you the answer.</p>
      </button>

      <button class="feature-card" data-action="games">
        <div class="feature-icon fi-games">🎮</div>
        <h3>Games</h3>
        <p>Speed Round, True or False, Memory Match — pick your game.</p>
      </button>

      <button class="feature-card" data-action="class">
        <div class="feature-icon fi-class">🏫</div>
        <h3>School & Class</h3>
        <p>Join your class, or share your progress with a parent.</p>
      </button>
    </div>

    <div style="padding:0 1.25rem 2rem; text-align:center;">
      <p style="font-size:.72rem; color:var(--text-dim);">Holiday Hub is a free companion from Editoby Ventures — the team behind My Exams App and My JAMB App.</p>
    </div>

  </section>

  <!-- ════════════════ SUBJECT PICKER (revision & quiz entry) ════════════════ -->
  <section id="subjectScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="home">←</button>
      <h2 class="topbar-title" id="subjectScreenTitle">Pick a subject</h2>
    </div>
    <div class="container" style="padding-top:1.25rem; padding-bottom:2rem;">
      <div id="subjectList" class="subject-list"></div>
    </div>
  </section>

  <!-- ════════════════ REVISION SCREEN (Study Mode) ════════════════ -->
  <section id="revisionScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="subject">←</button>
      <h2 class="topbar-title" id="revisionTitle">Study Mode</h2>
      <span id="revisionProgress" class="topbar-progress"></span>
    </div>
    <div class="study-progress-track"><div class="study-progress-fill" id="studyProgressFill"></div></div>
    <div class="container" id="revisionBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ QUIZ SCREEN (Exam Mode) ════════════════ -->
  <section id="quizScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="confirm-exit-quiz">←</button>
      <h2 class="topbar-title" id="quizTitle">Quiz</h2>
      <span id="quizTimer" class="topbar-progress">--:--</span>
    </div>
    <div class="exam-progress-track"><div class="exam-progress-fill" id="examProgressFill"></div></div>
    <div class="container" id="quizBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ GAMES HUB ════════════════ -->
  <section id="gamesHubScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="home">←</button>
      <h2 class="topbar-title">🎮 Games</h2>
    </div>
    <div class="container" style="padding-top:1.25rem; padding-bottom:2rem;">
      <button class="game-choice-card" data-game="sort">
        <div class="gc-icon" style="background:rgba(22,163,74,.12);">🗂</div>
        <div class="gc-text"><h3>Category Sort</h3><p>Terms from mixed subjects — tap the right subject bucket, fast.</p></div>
        <span class="gc-arrow">→</span>
      </button>
      <button class="game-choice-card" data-game="memory">
        <div class="gc-icon" style="background:rgba(124,58,237,.12);">🧠</div>
        <div class="gc-text"><h3>Memory Match</h3><p>Flip cards to pair terms with definitions. No timer pressure.</p></div>
        <span class="gc-arrow">→</span>
      </button>
      <button class="game-choice-card" data-game="game">
        <div class="gc-icon" style="background:rgba(232,93,74,.12);">⚡</div>
        <div class="gc-text"><h3>Speed Round</h3><p>60 seconds, rapid-fire multiple choice. Build a streak.</p></div>
        <span class="gc-arrow">→</span>
      </button>
      <button class="game-choice-card" data-game="tf">
        <div class="gc-icon" style="background:rgba(37,99,235,.12);">✓✗</div>
        <div class="gc-text"><h3>True or False Blitz</h3><p>Rapid true/false calls. Fastest, simplest, most intense.</p></div>
        <span class="gc-arrow">→</span>
      </button>
      <button class="game-choice-card" data-game="sequence">
        <div class="gc-icon" style="background:rgba(234,88,12,.12);">🔢</div>
        <div class="gc-text"><h3>Sequence</h3><p>What comes next? Spot the pattern before the clock runs out.</p></div>
        <span class="gc-arrow">→</span>
      </button>
      <button class="game-choice-card" data-game="scramble">
        <div class="gc-icon" style="background:rgba(219,39,119,.12);">🔤</div>
        <div class="gc-text"><h3>Word Scramble</h3><p>Unscramble the letters to spell key academic terms.</p></div>
        <span class="gc-arrow">→</span>
      </button>
      <button class="game-choice-card" data-game="formula">
        <div class="gc-icon" style="background:rgba(8,145,178,.12);">🔢</div>
        <div class="gc-text"><h3>Formula Rush</h3><p>Match the name to the formula before time runs out.</p></div>
        <span class="gc-arrow">→</span>
      </button>
      <button class="game-choice-card" data-game="equation">
        <div class="gc-icon" style="background:rgba(79,70,229,.12);">🧩</div>
        <div class="gc-text"><h3>Equation Builder</h3><p>Solve for x — watch out for the common-mistake decoys.</p></div>
        <span class="gc-arrow">→</span>
      </button>
    </div>
  </section>

  <!-- ════════════════ SPEED ROUND / TRUE-FALSE BLITZ (EDU GAME) ════════════════ -->
  <section id="gameScreen" class="screen">
    <div class="game-topbar">
      <button class="back-btn back-btn-light" data-back="confirm-exit-quiz">←</button>
      <div class="game-stat"><span id="gameScore">0</span><label>Score</label></div>
      <div class="game-timer" id="gameTimer">60</div>
      <div class="game-stat"><span id="gameStreak">0</span><label>Streak</label></div>
    </div>
    <div class="game-subject-badge" id="gameSubjectBadge"></div>
    <div class="container" id="gameBody" style="padding-top:1.5rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ GAME RESULTS ════════════════ -->
  <section id="gameResultsScreen" class="screen">
    <div class="container" id="gameResultsBody" style="padding-top:2rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ MEMORY MATCH ════════════════ -->
  <section id="memoryScreen" class="screen">
    <div class="game-topbar">
      <button class="back-btn back-btn-light" data-back="confirm-exit-quiz">←</button>
      <div class="game-stat"><span id="memMoves">0</span><label>Moves</label></div>
      <div class="game-timer mem-timer-calm" id="memTimer">0:00</div>
      <div class="game-stat"><span id="memPairs">0/0</span><label>Pairs</label></div>
    </div>
    <div class="game-subject-badge" id="memSubjectBadge"></div>
    <div class="container" id="memoryBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ MEMORY MATCH RESULTS ════════════════ -->
  <section id="memoryResultsScreen" class="screen">
    <div class="container" id="memoryResultsBody" style="padding-top:2rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ QUIZ RESULTS ════════════════ -->
  <section id="resultsScreen" class="screen">
    <div class="container" id="resultsBody" style="padding-top:2rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ PROJECT HELPER ════════════════ -->
  <section id="projectScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="home">←</button>
      <h2 class="topbar-title">Project Helper</h2>
    </div>
    <div class="container" id="projectBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ STUDY PLAN ════════════════ -->
  <section id="planScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="home">←</button>
      <h2 class="topbar-title" id="planScreenTitle">🗓 Study Plan</h2>
    </div>
    <div class="container" id="planBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ SCHOOL / CLASS ════════════════ -->
  <section id="classScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="home">←</button>
      <h2 class="topbar-title">School & Class</h2>
    </div>
    <div class="container" id="classBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ TEACHER DASHBOARD (class-wide) ════════════════ -->
  <section id="teacherDashScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="home">←</button>
      <h2 class="topbar-title">Class Dashboard</h2>
    </div>
    <div class="container" id="teacherDashBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ PARENT DASHBOARD (single child) ════════════════ -->
  <section id="parentDashScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="home">←</button>
      <h2 class="topbar-title">Your Child's Progress</h2>
    </div>
    <div class="container" id="parentDashBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ STUDY LIBRARY ════════════════ -->
  <section id="libraryScreen" class="screen">
    <div class="topbar">
      <button class="back-btn" data-back="subject">←</button>
      <h2 class="topbar-title" id="libraryTitle">Study Library</h2>
    </div>
    <div class="library-tabs" id="libraryTabs"></div>
    <div class="container" id="libraryBody" style="padding-top:1.25rem; padding-bottom:2rem;"></div>
  </section>

  <!-- ════════════════ COMMUNITY QUIZ / CHALLENGE MODAL ════════════════ -->
  <div id="quizChallengeModal" class="overlay hidden">
    <div class="sheet" style="position:relative;">
      <button class="sheet-close" id="qcClose">✕</button>
      <div id="qcCreate">
        <h3 class="sheet-title">Challenge a Friend</h3>
        <p class="sheet-sub">Same questions. You vs your friends. Who scores higher?</p>
        <div style="display:flex; flex-direction:column; gap:.6rem; margin-top:1rem;">
          <button class="btn btn-primary btn-block" id="qcCreateBtn">Create a Challenge →</button>
        </div>
        <div style="margin-top:1rem; display:flex; gap:.5rem;">
          <input id="qcJoinCode" class="text-input" placeholder="Enter challenge code" maxlength="10"/>
          <button class="btn btn-ghost" id="qcJoinConfirm">Join</button>
        </div>
        <div id="qcPendingWrap" style="margin-top:1.25rem;">
          <h4 class="sheet-subtitle">Your Challenges (<span id="qcPendingCount">0</span>/3)</h4>
          <div id="qcPendingList"></div>
        </div>
      </div>

      <div id="qcSetup" class="hidden">
        <h3 class="sheet-title">Set Up Your Challenge</h3>
        <div class="form-group">
          <label>Subject</label>
          <select id="qcSubject"></select>
        </div>
        <div class="form-group">
          <label>Number of questions</label>
          <select id="qcCount">
            <option value="10">10 questions</option>
            <option value="20" selected>20 questions</option>
            <option value="30">30 questions</option>
          </select>
        </div>
        <div class="form-group">
          <label>Time limit</label>
          <select id="qcTime">
            <option value="0">No time limit</option>
            <option value="10" selected>10 minutes</option>
            <option value="20">20 minutes</option>
            <option value="30">30 minutes</option>
          </select>
        </div>
        <div class="form-group">
          <label>When should it start?</label>
          <select id="qcSyncMode">
            <option value="anytime" selected>Anytime — each person starts when ready</option>
            <option value="ready">When everyone is ready</option>
            <option value="scheduled">At a scheduled time</option>
          </select>
        </div>
        <div class="form-group hidden" id="qcScheduleWrap">
          <label>Start date & time</label>
          <input type="datetime-local" id="qcScheduleAt"/>
        </div>
        <div class="ai-boost-row" id="qcAiBoostRow">
          <label class="ai-boost-label">
            <input type="checkbox" id="qcAiBoost"/>
            <span>✨ Add AI-generated questions <em id="qcAiBoostHint"></em></span>
          </label>
        </div>
        <button class="btn btn-primary btn-block" id="qcGenerateBtn" style="margin-top:.5rem;">Generate Challenge Code →</button>
      </div>

      <div id="qcCreated" class="hidden">
        <h3 class="sheet-title">Challenge Created!</h3>
        <p class="sheet-sub">Share this code with friends. It expires in 24 hours.</p>
        <div class="code-display" id="qcCodeDisplay"></div>
        <button class="btn btn-primary btn-block" id="qcShareLinkBtn" style="margin-top:.75rem;">📤 Share Challenge Link</button>
        <button class="btn btn-ghost btn-block" id="qcStartOwnBtn" style="margin-top:.5rem;">Start My Attempt Now</button>
      </div>

      <div id="qcWaiting" class="hidden">
        <h3 class="sheet-title">⚔️ Duel Lobby</h3>
        <p class="sheet-sub" id="qcWaitingStatus">Waiting for everyone to be ready…</p>
        <div id="qcWaitingList"></div>
        <button class="btn btn-primary btn-block hidden" id="qcMarkReadyBtn" style="margin-top:1rem;">I'm Ready</button>
        <button class="btn btn-ghost btn-block hidden" id="qcForceStartBtn" style="margin-top:.5rem;">Start Now (everyone joins mid-quiz)</button>
        <button class="btn btn-ghost btn-block hidden" id="qcEndChallengeBtn" style="margin-top:.5rem;">🗑 End This Challenge</button>
      </div>

      <div id="qcResults" class="hidden">
        <h3 class="sheet-title">🏆 Duel Results</h3>
        <div id="qcLeaderboard"></div>
        <button class="btn btn-primary btn-block" id="qcNewChallengeBtn" style="margin-top:.75rem;">New Challenge →</button>
        <button class="btn btn-ghost btn-block" id="qcDoneBtn" style="margin-top:.5rem;">Done</button>
      </div>
    </div>
  </div>

  <!-- ════════════════ GAME EXPLAINER (before starting a game) ════════════════ -->
  <div id="gameExplainerModal" class="overlay hidden">
    <div class="sheet">
      <button class="sheet-close" id="geClose">✕</button>
      <div class="ge-icon" id="geIcon">🎮</div>
      <h3 class="sheet-title" id="geTitle">Game</h3>
      <p class="ge-subject" id="geSubjectLine"></p>
      <ul class="ge-rules" id="geRules"></ul>
      <button class="btn btn-primary btn-block" id="geStartBtn">Start →</button>
      <button class="btn btn-ghost btn-block" id="geMultiplayerBtn" style="margin-top:.5rem; display:none;">🔀 Play Multiplayer instead</button>
    </div>
  </div>

  <!-- ════════════════ SPEED ROUND — DIFFICULTY PICKER ════════════════ -->
  <div id="speedLevelModal" class="overlay hidden">
    <div class="sheet">
      <button class="sheet-close" id="slClose">✕</button>
      <div class="ge-icon">⚡</div>
      <h3 class="sheet-title">Pick your pace</h3>
      <p class="ge-subject" id="slSubjectLine"></p>
      <div class="speed-level-options" id="slOptions"></div>
    </div>
  </div>

  <!-- ════════════════ ALREADY COMPLETED THIS ════════════════ -->
  <div id="completedModal" class="overlay hidden">
    <div class="sheet">
      <button class="sheet-close" id="completedClose">✕</button>
      <div class="ge-icon" id="completedIcon">🔁</div>
      <h3 class="sheet-title" id="completedTitle">You've already been through this</h3>
      <p class="sheet-sub" id="completedSub" style="text-align:center;"></p>
      <button class="btn btn-primary btn-block" id="completedGetMoreBtn">Get fresh content with AI →</button>
      <button class="btn btn-ghost btn-block" id="completedContinueBtn" style="margin-top:.5rem;">Continue anyway</button>
    </div>
  </div>

  <!-- ════════════════ AI CREDITS PAYWALL ════════════════ -->
  <div id="aiPaywallModal" class="overlay hidden">
    <div class="sheet">
      <button class="sheet-close" id="paywallClose">✕</button>
      <div class="paywall-icon">✨</div>
      <h3 class="sheet-title" style="text-align:center;">You're out of AI credits</h3>
      <p class="sheet-sub" style="text-align:center;">Unlock a 2-Day AI Boost — 10 credits for Project Helper, Explain Differently, fresh game questions, AI-boosted challenges, and extra flashcards in Study Library.</p>
      <div class="paywall-price">₦500 <span>for 10 credits, 48 hours to use them</span></div>
      <button class="btn btn-primary btn-block" id="paywallPayBtn">Pay ₦500 →</button>
      <button class="btn btn-ghost btn-block" id="paywallLaterBtn" style="margin-top:.5rem;">Maybe later</button>
      <p class="paywall-note">Revision, Quiz, and Study Library stay free, no limit. Games have a free daily allowance — see the Games Pass if you've used yours up.</p>
    </div>
  </div>

  <!-- ════════════════ GAMES PAYWALL ════════════════ -->
  <div id="gamesPaywallModal" class="overlay hidden">
    <div class="sheet">
      <button class="sheet-close" id="gpClose">✕</button>
      <div class="paywall-icon">🎮</div>
      <h3 class="sheet-title" style="text-align:center;">You're out of free game rounds</h3>
      <p class="sheet-sub" style="text-align:center;">Revision, Quiz, and Study Library stay free forever — this is just for the games.</p>
      <div class="paywall-price">₦400 <span>for 7 days of unlimited games</span></div>
      <button class="btn btn-primary btn-block" id="gpPassBtn">Get 7-Day Games Pass →</button>
      <button class="btn btn-ghost btn-block" id="gpTopupBtn" style="margin-top:.5rem;">Or just add 15 more rounds — ₦150</button>
      <button class="btn btn-ghost btn-block" id="gpClose2" style="margin-top:.5rem;">Maybe later</button>
    </div>
  </div>

  <!-- ════════════════ MULTIPLAYER WORD SCRAMBLE ════════════════ -->
  <div id="wsChallengeModal" class="overlay hidden">
    <div class="sheet">
      <button class="sheet-close" id="wsClose">✕</button>
      <div id="wsChallengeBody"></div>
    </div>
  </div>

  <!-- ════════════════ NAME PROMPT (first run) ════════════════ -->
  <div id="namePromptModal" class="overlay hidden">
    <div class="sheet">
      <h3 class="sheet-title">What's your name?</h3>
      <p class="sheet-sub">So your friends know it's you on the leaderboard.</p>
      <input id="nameInput" class="text-input" placeholder="e.g. Emeka" style="margin-top:1rem;"/>
      <button class="btn btn-primary btn-block" id="nameConfirmBtn" style="margin-top:.75rem;">Continue →</button>
    </div>
  </div>

  <div id="toastHost"></div>

</div>

<script src="data/senior/senior-bank.js"></script>
<script src="data/senior/senior-resources.js"></script>
<script src="data/junior/junior-bank.js"></script>
<script src="data/junior/junior-resources.js"></script>
<script src="data/manifest.js"></script>
<script src="js/app.js"></script>
<script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {
        // Offline support just won't be available this session — the app
        // still works fully online, so fail silently rather than alarm anyone.
      });
    });
  }
</script>
</body>
</html>
INDEXHTML_EOF_MARK
echo "index.html written."
mkdir -p js

cat > js/app.js << 'APPJS_EOF_MARK'
/* ═══════════════════════════════════════════════════════════════
   HOLIDAY HUB — App Logic v1.0
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const API_BASE = 'https://editoby-api.vercel.app';

  /* ────────────────────────────────
     STATE
  ──────────────────────────────── */
  const S = {
    category: 'senior',        // 'senior' | 'junior'
    currentUser: null,
    subject: null,
    mode: null,                // 'revision' | 'quiz' | 'challenge'
    questions: [],
    idx: 0,
    answers: [],
    score: 0,
    timerSecs: 0,
    timerInterval: null,
    startedAt: null,
    _challengeCode: null,
    stats: { sessions: 0, totalPct: 0, streak: 0, lastActiveDate: null }
  };

  /* ────────────────────────────────
     STORAGE HELPERS
  ──────────────────────────────── */
  function loadSafe(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function saveSafe(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  const STATS_KEY = 'hh-stats-v1';
  const USER_KEY = 'hh-user-v1';
  const SEEN_KEY = 'hh-seen-v1';
  const MASTERY_KEY = 'hh-mastery-v1';
  const PLAN_KEY = 'hh-study-plan-v1';
  const AI_CREDITS_KEY = 'hh-ai-credits-v1';
  const FREE_TRIAL_CREDITS = 3;
  const PAYSTACK_KEY = 'pk_live_5d12ee2a90900116dc222107e059a06214c085ff';
  const AI_CREDIT_PACK_SIZE = 10;
  const AI_CREDIT_PACK_PRICE_KOBO = 50000; // ₦500
  const GAMES_PASS_PRICE_KOBO = 40000;     // ₦400 / 7-day unlimited games
  const GAMES_TOPUP_PRICE_KOBO = 15000;    // ₦150 / +15 rounds, one-off
  const GAMES_TOPUP_ROUNDS = 15;
  const FREE_GAME_ROUNDS = 8;
  const GAMES_PASS_DURATION_MS = 7 * 24 * 60 * 60 * 1000;
  const GAMES_CREDITS_KEY = 'hh-games-credits-v1';
  const CLASS_KEY = 'hh-class-v1';         // { classCode, name, pin } — this device's class membership
  const CLASS_ADMIN_KEY = 'hh-class-admin-v1'; // { classCode, adminSecret, schoolName } — teacher device only

  /** Games used to be entirely free and unlimited — this is the gate that
   * makes that untrue on purpose: 8 free rounds total across all 8 games,
   * then either a 7-day unlimited pass or a smaller one-off round top-up.
   * Deliberately separate from AI_CREDITS_KEY — "can I play at all" and
   * "can I get fresh AI content while playing" are two different
   * questions with two different answers, same as the design discussion
   * settled on. */
  function getGamesCredits() {
    return loadSafe(GAMES_CREDITS_KEY, { freeRoundsRemaining: FREE_GAME_ROUNDS, extraRoundsRemaining: 0, passExpiresAt: 0 });
  }

  function hasGamesAccess() {
    const g = getGamesCredits();
    if (g.passExpiresAt && Date.now() < g.passExpiresAt) return true;
    if (g.freeRoundsRemaining > 0) return true;
    if (g.extraRoundsRemaining > 0) return true;
    return false;
  }

  /** Called once per round START (not completion) — starting and
   * abandoning still costs a round, same as a real arcade credit, so
   * there's no incentive to game the gate by bailing early. An active
   * pass means unlimited play, so nothing gets decremented at all while
   * one is active. */
  function consumeGameRound() {
    const g = getGamesCredits();
    if (g.passExpiresAt && Date.now() < g.passExpiresAt) return;
    if (g.freeRoundsRemaining > 0) { g.freeRoundsRemaining--; saveSafe(GAMES_CREDITS_KEY, g); return; }
    if (g.extraRoundsRemaining > 0) { g.extraRoundsRemaining--; saveSafe(GAMES_CREDITS_KEY, g); }
  }

  function activateGamesPass() {
    const g = getGamesCredits();
    g.passExpiresAt = Date.now() + GAMES_PASS_DURATION_MS;
    saveSafe(GAMES_CREDITS_KEY, g);
  }

  function addExtraGameRounds(n) {
    const g = getGamesCredits();
    g.extraRoundsRemaining = (g.extraRoundsRemaining || 0) + n;
    saveSafe(GAMES_CREDITS_KEY, g);
  }

  /** Read-only access check for the 7 games with a single-phase start
   * (no intermediate picker step like Speed Round has). Deliberately
   * does NOT consume a round here — each caller does that itself, after
   * its own "is there actually content for this subject" check passes,
   * so a subject with no data can never cost someone a free round for
   * nothing. */
  function gateGameStart() {
    if (!hasGamesAccess()) { showGamesPaywall(); return false; }
    return true;
  }

  function showGamesPaywall() {
    document.getElementById('gamesPaywallModal').classList.remove('hidden');
  }
  function hideGamesPaywall() {
    document.getElementById('gamesPaywallModal').classList.add('hidden');
  }

  function initGamesPaywall() {
    const closeBtn = document.getElementById('gpClose');
    if (closeBtn) closeBtn.addEventListener('click', hideGamesPaywall);
    const laterBtn = document.getElementById('gpClose2');
    if (laterBtn) laterBtn.addEventListener('click', hideGamesPaywall);
    const passBtn = document.getElementById('gpPassBtn');
    if (passBtn) passBtn.addEventListener('click', purchaseGamesPass);
    const topupBtn = document.getElementById('gpTopupBtn');
    if (topupBtn) topupBtn.addEventListener('click', purchaseGamesTopUp);
  }

  async function purchaseGamesPass() {
    const email = await getEmailViaModal();
    if (!email) return;
    if (typeof window.PaystackPop === 'undefined') {
      showToast('Payment could not load — check your connection and try again.');
      return;
    }
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount: GAMES_PASS_PRICE_KOBO,
      currency: 'NGN',
      ref: 'HH-GP-' + Date.now(),
      metadata: { custom_fields: [
        { display_name: 'Product', variable_name: 'product', value: 'Holiday Hub — 7-Day Games Pass' },
      ]},
      onClose() {},
      callback(response) {
        (async () => {
          showToast('Confirming payment…');
          try {
            const res = await fetch(API_BASE + '/api/verify-payment', {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ reference: response.reference }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.verified || data.tier !== 'hh-games-pass') {
              showToast('Could not confirm payment yet. If you were charged, contact support with reference: ' + response.reference, 5000);
              return;
            }
            activateGamesPass();
            hideGamesPaywall();
            showToast('✅ 7-Day Games Pass unlocked — unlimited games all week!', 4000);
          } catch (err) {
            showToast('Could not confirm payment — contact support with reference: ' + response.reference, 5000);
          }
        })();
      },
    });
    handler.openIframe();
  }

  async function purchaseGamesTopUp() {
    const email = await getEmailViaModal();
    if (!email) return;
    if (typeof window.PaystackPop === 'undefined') {
      showToast('Payment could not load — check your connection and try again.');
      return;
    }
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount: GAMES_TOPUP_PRICE_KOBO,
      currency: 'NGN',
      ref: 'HH-GT-' + Date.now(),
      metadata: { custom_fields: [
        { display_name: 'Product', variable_name: 'product', value: `Holiday Hub — +${GAMES_TOPUP_ROUNDS} Game Rounds` },
      ]},
      onClose() {},
      callback(response) {
        (async () => {
          showToast('Confirming payment…');
          try {
            const res = await fetch(API_BASE + '/api/verify-payment', {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ reference: response.reference }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.verified || data.tier !== 'hh-games-topup') {
              showToast('Could not confirm payment yet. If you were charged, contact support with reference: ' + response.reference, 5000);
              return;
            }
            addExtraGameRounds(GAMES_TOPUP_ROUNDS);
            hideGamesPaywall();
            showToast(`✅ +${GAMES_TOPUP_ROUNDS} game rounds added — no expiry, play whenever!`, 4000);
          } catch (err) {
            showToast('Could not confirm payment — contact support with reference: ' + response.reference, 5000);
          }
        })();
      },
    });
    handler.openIframe();
  }


  function getBank(cat) {
    return cat === 'junior' ? JUNIOR_BANK : SENIOR_BANK;
  }

  /* ────────────────────────────────
     MASTERY / WEAK-AREA TRACKING
     Tracks per-subject accuracy from scored sessions (Quiz and Speed
     Round — not Revision, since that's open browsing, not a test).
     Powers the home screen "Focus area" nudge and the Study Plan.
  ──────────────────────────────── */
  function masteryKey(category, subject) { return `${category}:${subject}`; }

  function recordMastery(category, subject, correctCount, totalCount) {
    if (!totalCount) return;
    const all = loadSafe(MASTERY_KEY, {});
    const key = masteryKey(category, subject);
    const existing = all[key] || { correct: 0, total: 0 };
    all[key] = { correct: existing.correct + correctCount, total: existing.total + totalCount };
    saveSafe(MASTERY_KEY, all);
  }

  /**
   * Returns the weakest subject (lowest accuracy) the student has
   * attempted at least MIN_ATTEMPTS questions in, within `category`.
   * Returns null if there isn't enough data yet to make a fair call.
   */
  function getWeakestSubject(category) {
    const MIN_ATTEMPTS = 8;
    const all = loadSafe(MASTERY_KEY, {});
    const manifest = CONTENT_MANIFEST[category];
    let weakest = null;
    manifest.subjects.forEach(subj => {
      const data = all[masteryKey(category, subj)];
      if (!data || data.total < MIN_ATTEMPTS) return;
      const pct = data.correct / data.total;
      if (!weakest || pct < weakest.pct) weakest = { subject: subj, pct, total: data.total };
    });
    return weakest;
  }

  function getLastActivity() {
    return loadSafe('hh-last-activity-v1', null);
  }
  function setLastActivity(category, subject, mode) {
    saveSafe('hh-last-activity-v1', { category, subject, mode, at: Date.now() });
  }

  /* ────────────────────────────────
     SEEN-QUESTION TRACKING
     Avoids repeating the same questions for a user in Revision, Quiz,
     and Challenge creation. Tracked per category+subject so Senior and
     Junior pools don't interfere with each other. Once every question
     in a subject has been seen, the pool quietly resets (recycles)
     rather than blocking the student from practicing further.
  ──────────────────────────────── */
  function seenKey(category, subject) { return `${category}:${subject}`; }

  function getSeenSet(category, subject) {
    const all = loadSafe(SEEN_KEY, {});
    return new Set(all[seenKey(category, subject)] || []);
  }

  function markSeen(category, subject, questionIds) {
    if (!questionIds.length) return;
    const all = loadSafe(SEEN_KEY, {});
    const key = seenKey(category, subject);
    const set = new Set(all[key] || []);
    questionIds.forEach(id => set.add(id));
    all[key] = Array.from(set);
    saveSafe(SEEN_KEY, all);
  }

  function resetSeen(category, subject) {
    const all = loadSafe(SEEN_KEY, {});
    delete all[seenKey(category, subject)];
    saveSafe(SEEN_KEY, all);
  }

  /** Coverage ratio (0–1) of how much of a subject's static question bank
   * has already been seen. Used to decide when it's honest to tell a
   * student "you've worked through most of this" rather than showing that
   * message on a guess or a fixed schedule. */
  function seenCoverage(category, subject) {
    const bank = getBank(category)[subject];
    const total = bank && bank.objective ? bank.objective.length : 0;
    if (!total) return 0;
    const seen = getSeenSet(category, subject).size;
    return Math.min(1, seen / total);
  }

  const COMPLETED_KEY = 'hh-completed-v1';
  /** Tracks whether a person has been all the way through a piece of
   * content before — one full pass, not a coverage percentage. Far more
   * reliably triggerable than a 90%-of-the-whole-bank threshold, which
   * needed dozens of questions answered in one sitting to ever fire. This
   * fires the SECOND time someone opens the same subject's same content
   * type, having already reached the end of it once already. */
  function completedKey(category, subject, type) { return `${category}:${subject}:${type}`; }
  function markCompleted(category, subject, type) {
    const all = loadSafe(COMPLETED_KEY, {});
    all[completedKey(category, subject, type)] = Date.now();
    saveSafe(COMPLETED_KEY, all);
  }
  function wasCompletedBefore(category, subject, type) {
    const all = loadSafe(COMPLETED_KEY, {});
    return !!all[completedKey(category, subject, type)];
  }

  /** A genuinely blocking modal, not a scroll-past inline banner — used
   * for deliberately strong signals only (real repeat completion, or
   * pushing past the end of content on a first pass). Reused across
   * Library/Quiz/Revision with fresh values each time via .onclick/
   * textContent (always overwrites, no leaked/stacked listeners across
   * repeated shows). Title/icon/continue-label are optional — default to
   * the "you've done this before" framing, since that's the original and
   * most common case; pass overrides for a different honest framing
   * (e.g. "that's everything for now" on first-pass exhaustion). */
  function showCompletedModal(message, onGetMore, opts) {
    const o = opts || {};
    document.getElementById('completedTitle').textContent = o.title || "You've already been through this";
    document.getElementById('completedIcon').textContent = o.icon || '🔁';
    document.getElementById('completedSub').textContent = message;
    document.getElementById('completedContinueBtn').textContent = o.continueLabel || 'Continue anyway';
    const modal = document.getElementById('completedModal');
    modal.classList.remove('hidden');
    document.getElementById('completedGetMoreBtn').onclick = () => {
      modal.classList.add('hidden');
      hasAICredit() ? onGetMore() : showAIPaywall();
    };
    document.getElementById('completedContinueBtn').onclick = () => modal.classList.add('hidden');
    document.getElementById('completedClose').onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };
  }

  const COVERAGE_NUDGE_KEY = 'hh-coverage-nudge-v1';
  /** Shows the "you've seen most of this" upsell at most once per subject
   * per day — a student revising the same subject repeatedly shouldn't get
   * nagged on every single visit once they cross the threshold. */
  function maybeShowCoverageNudge(category, subject, contextLabel) {
    const coverage = seenCoverage(category, subject);
    if (coverage < 0.7) return;
    const key = seenKey(category, subject);
    const shown = loadSafe(COVERAGE_NUDGE_KEY, {});
    const today = new Date().toDateString();
    if (shown[key] === today) return;
    shown[key] = today;
    saveSafe(COVERAGE_NUDGE_KEY, shown);
    const pct = Math.round(coverage * 100);
    showActionToast(
      `You've worked through ${pct}% of ${SUBJECT_LABELS[subject] || subject} ${contextLabel}.`,
      'Get more with AI →',
      () => { hasAICredit() ? generateExtraContentForSubject(category, subject) : showAIPaywall(); },
      5500
    );
  }

  async function generateExtraContentForSubject(category, subject) {
    showToast('Generating fresh questions with AI…', 4000);
    try {
      const bank = getBank(category)[subject];
      const avoid = (bank.objective || []).map(q => q.question).slice(0, 60);
      const res = await fetch(API_BASE + '/api/generate-questions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category, subject: SUBJECT_LABELS[subject] || subject,
          count: 15, avoidQuestions: avoid,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok || !data.questions.length) {
        showToast('Could not generate more questions right now — please try again shortly.');
        return;
      }
      consumeAICredit();
      // Persisted now, matching the fix already applied to flashcards/
      // formulas/notes — this used to be ephemeral (comment above used
      // to admit it: "not written back... gone on reload"), which meant
      // Speed Round's mid-game top-up, Revision, Quiz, and Challenge's AI
      // Boost all quietly lost any AI-generated questions on refresh, and
      // couldn't benefit from each other's generations either, since each
      // was working off a bank that reset on every reload. One fix here
      // means any game or mode reading from getBank(category)[subject]
      // automatically sees everything ever generated for that subject,
      // from any entry point, permanently.
      bank.objective = (bank.objective || []).concat(data.questions);
      saveAIGeneratedItems(category, subject, 'objective', data.questions);
      // If the student is mid-Revision on this exact subject, extend their
      // current session too, rather than making them back out and restart.
      if (S.mode === 'revision' && S.subject === subject && S.category === category) {
        S.questions = S.questions.concat(data.questions);
      }
      const left = getAICredits().credits;
      showToast(`✨ ${data.questions.length} new questions added — 1 credit used (${left} left)`, 3800);
    } catch (err) {
      showToast('Could not generate more questions right now — please try again shortly.');
    }
  }

  const LIBRARY_NUDGE_KEY = 'hh-library-nudge-v1';
  /** Library has no "seen" tracking (unlike the question bank), so this
   * uses total content depth instead of a coverage ratio — a different,
   * honest signal for a different situation. Now generates real flashcards
   * via AI (see generateExtraFlashcardsForSubject below) instead of just
   * opening Project Helper's chat — that was a mismatch between what the
   * button promised ("more materials") and what it actually did (opened a
   * conversation you'd have to steer yourself). */
  function maybeShowThinLibraryNudge(category, subject, totalItems) {
    // Threshold raised from 10 to 20 now that Math/English carry 40-70+
    // items each after the core-subjects deep pass — everything else
    // still sits at 10-19, so this correctly keeps firing for every
    // subject except the two flagship ones, which is the honest signal:
    // "there's more coming here, AI can bridge the gap today."
    if (totalItems >= 20) return;
    const key = seenKey(category, subject);
    const shown = loadSafe(LIBRARY_NUDGE_KEY, {});
    const today = new Date().toDateString();
    if (shown[key] === today) return;
    shown[key] = today;
    saveSafe(LIBRARY_NUDGE_KEY, shown);
    showActionToast(
      `We're still adding offline material for ${SUBJECT_LABELS[subject] || subject}.`,
      'Activate AI mode for more →',
      () => { hasAICredit() ? generateExtraFlashcardsForSubject(category, subject) : showAIPaywall(); },
      5500
    );
  }

  async function generateExtraFlashcardsForSubject(category, subject) {
    showToast('Generating fresh flashcards with AI…', 4000);
    try {
      const resBank = getResourceBank(category);
      const r = resBank[subject] || (resBank[subject] = { flashcards: [], formulas: [], notes: [] });
      const avoid = (r.flashcards || []).map(c => c.term).slice(0, 60);
      const res = await fetch(API_BASE + '/api/generate-questions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category, subject: SUBJECT_LABELS[subject] || subject,
          count: 10, avoidQuestions: avoid, contentType: 'flashcards',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok || !data.flashcards || !data.flashcards.length) {
        showToast('Could not generate more flashcards right now — please try again shortly.');
        return;
      }
      consumeAICredit();
      // Merges into memory for this session AND persists to localStorage
      // so it survives a reload — this is now genuinely part of this
      // device's permanent offline library, not a session-only bonus.
      r.flashcards = (r.flashcards || []).concat(data.flashcards);
      saveAIGeneratedItems(category, subject, 'flashcards', data.flashcards);
      // If mid-Library on this exact subject's flashcard tab, refresh in place.
      if (LIB.subject === subject && LIB.tab === 'flashcards') {
        LIB.cards = LIB.cards.concat(data.flashcards);
        renderFlashcards(document.getElementById('libraryTabBody'), LIB.cards);
      }
      const left = getAICredits().credits;
      showToast(`✨ ${data.flashcards.length} new flashcards added — 1 credit used (${left} left)`, 3800);
    } catch (err) {
      showToast('Could not generate more flashcards right now — please try again shortly.');
    }
  }

  /** Mirrors generateExtraFlashcardsForSubject exactly, but for the Notes
   * tab — this used to not exist at all (Notes had no AI generation path;
   * "already completed" fell back to opening Project Helper's chat
   * instead of actually generating notes). Persisted via
   * saveAIGeneratedItems, same as flashcards and formulas. */
  async function generateExtraNotesForSubject(category, subject) {
    showToast('Generating fresh notes with AI…', 4000);
    try {
      const resBank = getResourceBank(category);
      const r = resBank[subject] || (resBank[subject] = { flashcards: [], formulas: [], notes: [] });
      const avoid = (r.notes || []).map(n => n.topic).slice(0, 60);
      const res = await fetch(API_BASE + '/api/generate-questions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category, subject: SUBJECT_LABELS[subject] || subject,
          count: 6, avoidQuestions: avoid, contentType: 'notes',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok || !data.notes || !data.notes.length) {
        showToast('Could not generate more notes right now — please try again shortly.');
        return;
      }
      consumeAICredit();
      r.notes = (r.notes || []).concat(data.notes);
      saveAIGeneratedItems(category, subject, 'notes', data.notes);
      // If mid-Library on this exact subject's notes tab, refresh in place.
      if (LIB.subject === subject && LIB.tab === 'notes') {
        renderNotes(document.getElementById('libraryTabBody'), r.notes);
      }
      const left = getAICredits().credits;
      showToast(`✨ ${data.notes.length} new notes added — 1 credit used (${left} left)`, 3800);
    } catch (err) {
      showToast('Could not generate more notes right now — please try again shortly.');
    }
  }

  /** Same pattern again, for Formulas — the one gap left after Flashcards
   * and Notes got real AI generation. A subject with no genuine formulas
   * (English, CRS, etc.) can validly get back an empty array from the
   * backend; that's not an error, so it gets its own honest message
   * instead of the generic failure toast. */
  async function generateExtraFormulasForSubject(category, subject) {
    showToast('Generating fresh formulas with AI…', 4000);
    try {
      const resBank = getResourceBank(category);
      const r = resBank[subject] || (resBank[subject] = { flashcards: [], formulas: [], notes: [] });
      const avoid = (r.formulas || []).map(f => f.title).slice(0, 60);
      const res = await fetch(API_BASE + '/api/generate-questions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category, subject: SUBJECT_LABELS[subject] || subject,
          count: 6, avoidQuestions: avoid, contentType: 'formulas',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok || !Array.isArray(data.formulas)) {
        showToast('Could not generate more formulas right now — please try again shortly.');
        return;
      }
      if (!data.formulas.length) {
        showToast(`${SUBJECT_LABELS[subject] || subject} doesn't really use formulas — try Flashcards or Notes instead.`, 4200);
        return;
      }
      consumeAICredit();
      r.formulas = (r.formulas || []).concat(data.formulas);
      saveAIGeneratedItems(category, subject, 'formulas', data.formulas);
      if (LIB.subject === subject && LIB.tab === 'formulas') {
        renderFormulas(document.getElementById('libraryTabBody'), r.formulas);
      }
      const left = getAICredits().credits;
      showToast(`✨ ${data.formulas.length} new formulas added — 1 credit used (${left} left)`, 3800);
    } catch (err) {
      showToast('Could not generate more formulas right now — please try again shortly.');
    }
  }


  /**
   * Picks `count` questions from `pool` (array of question objects with
   * an `id`), preferring ones the user hasn't seen yet for this
   * category+subject. If the unseen pool can't cover the full count,
   * it recycles seen ones to fill the rest (and if the WHOLE pool has
   * been seen, it resets tracking so the cycle starts fresh — better
   * than refusing to serve questions at all).
   * Returns { questions, recycled } where `recycled` is true if any
   * previously-seen questions had to be reused.
   */
  function pickQuestions(category, subject, pool, count) {
    const seen = getSeenSet(category, subject);
    const unseen = shuffleArray(pool.filter(q => !seen.has(q.id)));
    const alreadySeen = shuffleArray(pool.filter(q => seen.has(q.id)));

    let selected = unseen.slice(0, count);
    let recycled = false;

    if (selected.length < count) {
      recycled = selected.length > 0 || alreadySeen.length > 0;
      const stillNeeded = count - selected.length;
      selected = selected.concat(alreadySeen.slice(0, stillNeeded));
    }

    // Whole subject exhausted (every question already seen at least
    // once) — reset tracking now so the NEXT session starts fresh
    // rather than immediately recycling again.
    if (unseen.length === 0 && pool.length > 0) {
      resetSeen(category, subject);
    }

    return { questions: selected, recycled };
  }

  /* ────────────────────────────────
     TOAST
  ──────────────────────────────── */
  function showToast(msg, ms) {
    const host = document.getElementById('toastHost');
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    host.appendChild(t);
    setTimeout(() => t.remove(), ms || 2600);
  }
  window.showInfoToast = showToast;

  /** A toast with a tappable call-to-action — for gentle upsell nudges that
   * should never block play. Tapping the action button runs onAction();
   * tapping anywhere else just dismisses it, same as it would time out on
   * its own. Used sparingly and only where a person can act on it. */
  function showActionToast(msg, actionLabel, onAction, ms) {
    const host = document.getElementById('toastHost');
    const t = document.createElement('div');
    t.className = 'toast toast-action';
    t.innerHTML = `<span class="ta-msg">${safe(msg)}</span><button class="ta-btn">${safe(actionLabel)}</button>`;
    t.querySelector('.ta-btn').addEventListener('click', () => { t.remove(); onAction(); });
    host.appendChild(t);
    const timer = setTimeout(() => t.remove(), ms || 5000);
    t.addEventListener('click', (e) => { if (e.target === t) { clearTimeout(timer); t.remove(); } });
  }

  /** A persistent inline banner — unlike showActionToast, this does NOT
   * auto-disappear. Meant for real end-of-content moments (last flashcard,
   * end of a Revision queue, post-game results) where the person has
   * actually stopped to look at the screen, so it's fair to ask for a
   * couple seconds of attention rather than something they have to catch
   * before it vanishes. Always dismissible with a real close button.
   * Returns the created element in case the caller wants to remove it
   * itself later (e.g. before re-rendering the same container). */
  function renderExpandBanner(container, message, actionLabel, onAction) {
    const el = document.createElement('div');
    el.className = 'expand-banner';
    el.innerHTML = `
      <button class="expand-banner-close" aria-label="Dismiss">✕</button>
      <div class="expand-banner-icon">✨</div>
      <div class="expand-banner-text">${safe(message)}</div>
      <button class="expand-banner-btn">${safe(actionLabel)}</button>
    `;
    el.querySelector('.expand-banner-close').addEventListener('click', () => el.remove());
    el.querySelector('.expand-banner-btn').addEventListener('click', () => { el.remove(); onAction(); });
    container.appendChild(el);
    return el;
  }

  /* ────────────────────────────────
     SCREEN ROUTING
  ──────────────────────────────── */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
    window.scrollTo(0, 0);
  }

  function goBack(target) {
    if (target === 'confirm-exit-quiz') {
      if (S.mode === 'quiz' || S.mode === 'challenge') {
        if (!confirm('Leave this quiz? Your progress will be lost.')) return;
        stopTimer();
      }
      if (S.mode === 'game' || S.mode === 'tf' || S.mode === 'sort' || S.mode === 'scramble' || S.mode === 'formula' || S.mode === 'sequence' || S.mode === 'equation') {
        if (!confirm('Leave the game? Your score will be lost.')) return;
        stopGameTimer();
      }
      if (S.mode === 'memory') {
        if (!confirm('Leave Memory Match? Your progress will be lost.')) return;
        stopMemoryTimer();
      }
      // Sort/Sequence/Equation Builder skip the subject picker entirely
      // (mixed-subject or content-free games) — sending them "back" to
      // subjectScreen would land on a screen they never actually visited.
      // Games Hub is their real previous screen.
      const skippedPicker = S.mode === 'sort' || S.mode === 'sequence' || S.mode === 'equation';
      showScreen(skippedPicker ? 'gamesHubScreen' : 'subjectScreen');
      return;
    }
    const map = { home: 'homeScreen', subject: 'subjectScreen' };
    showScreen(map[target] || 'homeScreen');
    if ((map[target] || 'homeScreen') === 'homeScreen') {
      renderDashboardNudge();
      updateStudyPlanBanner();
    }
  }

  /* ────────────────────────────────
     NAME / USER
  ──────────────────────────────── */
  function ensureUser(cb) {
    const saved = loadSafe(USER_KEY, null);
    if (saved) { S.currentUser = saved; cb(); return; }
    const modal = document.getElementById('namePromptModal');
    modal.classList.remove('hidden');
    document.getElementById('nameConfirmBtn').onclick = () => {
      const name = document.getElementById('nameInput').value.trim();
      if (!name) { showToast('Please enter a name.'); return; }
      S.currentUser = name;
      saveSafe(USER_KEY, name);
      modal.classList.add('hidden');
      cb();
    };
  }

  /* ────────────────────────────────
     GAME EXPLAINER
     Shown once before entering any of the 4 games, so a first-time
     player knows the rules before the clock starts. Skipped on
     "Play Again" and "Continue where you left off" — only shown on
     first entry via the picker/hub.
  ──────────────────────────────── */
  const GAME_EXPLAINERS = {
    game: {
      icon: '⚡', title: 'Speed Round',
      rules: [
        '60 seconds on the clock — answer as many as you can.',
        'Tap the correct option out of 4 choices.',
        'Build a streak for bonus points: 3+ in a row = 2×, 5+ = 3×.',
      ],
    },
    tf: {
      icon: '✓✗', title: 'True or False Blitz',
      rules: [
        '60 seconds — read the statement, tap True or False.',
        'Statements are pulled from real past questions.',
        'Same streak bonus scoring as Speed Round.',
      ],
    },
    memory: {
      icon: '🧠', title: 'Memory Match',
      rules: [
        'Flip two tiles at a time to find matching term + definition pairs.',
        'No pressure — the clock just tracks your time, it doesn\'t count down.',
        'Fewer moves means a better memory score.',
      ],
    },
    sort: {
      icon: '🗂', title: 'Category Sort',
      rules: [
        'A term appears — tap the subject bucket it belongs to.',
        'Terms are mixed from up to 4 subjects at once.',
        '60 seconds, same streak bonus scoring as the other games.',
      ],
    },
    sequence: {
      icon: '🔢', title: 'Sequence',
      rules: [
        '60 seconds — a pattern of numbers appears with one missing.',
        'Tap the option that continues the pattern correctly.',
        'Patterns range from simple counting to multiplying, squares, and Fibonacci-style — same streak bonus scoring.',
      ],
    },
    scramble: {
      icon: '🔤', title: 'Word Scramble',
      rules: [
        '60 seconds — unscramble the letters to spell an academic term.',
        'Tap letters in order to build your answer — tap again to remove one.',
        'A short meaning is shown after each word, right or wrong.',
      ],
    },
    formula: {
      icon: '🔢', title: 'Formula Rush',
      rules: [
        '60 seconds — a formula name appears, e.g. "Area of a Circle".',
        'Tap the matching formula out of 4 choices.',
        'Pulled straight from your Study Library formula sheets — same streak bonus scoring.',
      ],
    },
    equation: {
      icon: '🧩', title: 'Equation Builder',
      rules: [
        '60 seconds — a simple equation appears, like "3x + 4 = 19".',
        'Work out x and tap the correct value from 4 options.',
        'Watch out — some wrong options are common mistakes, not random numbers.',
      ],
    },
  };

  let _pendingGame = null;

  function initGameExplainer() {
    const modal = document.getElementById('gameExplainerModal');
    document.getElementById('geClose').addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });
    document.getElementById('geStartBtn').addEventListener('click', () => {
      document.getElementById('gameExplainerModal').classList.add('hidden');
      if (!_pendingGame) return;
      const { mode, subject } = _pendingGame;
      if (mode === 'game') startSpeedRound(subject);
      else if (mode === 'tf') startTrueFalseBlitz(subject);
      else if (mode === 'memory') startMemoryMatch(subject);
      else if (mode === 'sort') startCategorySort();
      else if (mode === 'sequence') startSequenceGame();
      else if (mode === 'scramble') startWordScramble(subject);
      else if (mode === 'formula') startFormulaRush(subject);
      else if (mode === 'equation') startEquationBuilder();
    });
    document.getElementById('geMultiplayerBtn').addEventListener('click', () => {
      document.getElementById('gameExplainerModal').classList.add('hidden');
      if (!_pendingGame) return;
      openWordScrambleChallengeSetup(_pendingGame.subject);
    });
  }

  function showGameExplainer(mode, subject) {
    const info = GAME_EXPLAINERS[mode];
    if (!info) return;
    _pendingGame = { mode, subject };
    document.getElementById('geIcon').textContent = info.icon;
    document.getElementById('geTitle').textContent = info.title;
    const subjectLine = document.getElementById('geSubjectLine');
    if (subject) {
      const meta = subjectMeta(subject);
      subjectLine.textContent = `${meta.icon} ${SUBJECT_LABELS[subject] || subject}`;
      subjectLine.classList.remove('hidden');
    } else {
      subjectLine.textContent = 'Mixed subjects';
      subjectLine.classList.remove('hidden');
    }
    document.getElementById('geRules').innerHTML = info.rules.map(r => `<li>${r}</li>`).join('');
    // Multiplayer is only wired up for Word Scramble right now (the
    // prototype game for the turn-based system) — hidden for every
    // other mode until the same pattern extends to them.
    document.getElementById('geMultiplayerBtn').style.display = (mode === 'scramble') ? '' : 'none';
    document.getElementById('gameExplainerModal').classList.remove('hidden');
  }

  /* ────────────────────────────────
     STATS
  ──────────────────────────────── */
  function loadStats() {
    S.stats = loadSafe(STATS_KEY, { sessions: 0, totalPct: 0, streak: 0, lastActiveDate: null });
    renderHomeStats();
  }
  function recordSession(pct) {
    S.stats.sessions++;
    S.stats.totalPct += pct;
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (S.stats.lastActiveDate === yesterday) S.stats.streak++;
    else if (S.stats.lastActiveDate !== today) S.stats.streak = 1;
    S.stats.lastActiveDate = today;
    saveSafe(STATS_KEY, S.stats);
    renderHomeStats();
  }
  /** For non-scored activities (e.g. Memory Match) — keeps the day-streak
   * alive without skewing the "Average" stat, which is score-based. */
  function recordActivity() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (S.stats.lastActiveDate === yesterday) S.stats.streak++;
    else if (S.stats.lastActiveDate !== today) S.stats.streak = 1;
    S.stats.lastActiveDate = today;
    saveSafe(STATS_KEY, S.stats);
    renderHomeStats();
  }
  function renderHomeStats() {
    document.getElementById('hStatSessions').textContent = S.stats.sessions;
    document.getElementById('hStatAvg').textContent = S.stats.sessions
      ? Math.round(S.stats.totalPct / S.stats.sessions) + '%' : '—';
    document.getElementById('hStatStreak').textContent = S.stats.streak;
  }

  /* ────────────────────────────────
     SCHOOL / PARENT DASHBOARDS
     A student joins a class with a class code + a 4-6 digit PIN they pick
     (stops another student claiming their name). Every completed practice
     session AND challenge is reported to /api/dashboard (best-effort —
     never blocks the student's own results screen if the request fails
     or the student hasn't joined a class). A parent link is a read-only
     code the student's own device generates for exactly one child.
  ──────────────────────────────── */
  function getClassMembership() { return loadSafe(CLASS_KEY, null); }
  function saveClassMembership(m) { saveSafe(CLASS_KEY, m); }
  function clearClassMembership() { try { localStorage.removeItem(CLASS_KEY); } catch (e) {} }

  async function dashApi(action, body) {
    const res = await fetch(API_BASE + '/api/dashboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...body }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
  }

  /** Best-effort — called from finishQuiz(). Silently does nothing if the
   * student hasn't joined a class, and silently swallows network errors
   * so a flaky connection never blocks the student seeing their result. */
  async function recordClassSession({ subject, category, mode, score, total, missed }) {
    const m = getClassMembership();
    if (!m) return;
    try {
      await dashApi('record_session', {
        classCode: m.classCode, name: m.name, pin: m.pin,
        subject, category, mode, score, total, missed, timestamp: Date.now(),
      });
    } catch (e) { /* offline or class removed — not worth surfacing */ }
  }

  function openClassScreen() {
    showScreen('classScreen');
    renderClassScreen();
  }

  function renderClassScreen() {
    const body = document.getElementById('classBody');
    const m = getClassMembership();

    if (m) {
      body.innerHTML = `
        <div class="card" style="margin-bottom:1rem;">
          <h3 style="margin:0 0 .35rem;">You're in a class</h3>
          <p style="color:var(--text-mid); font-size:.9rem;">Class code <b>${safe(m.classCode)}</b> · joined as <b>${safe(m.name)}</b></p>
          <p style="color:var(--text-mid); font-size:.85rem;">Your practice sessions and challenges are now shared with your teacher's class dashboard.</p>
        </div>
        <div class="card" style="margin-bottom:1rem;">
          <h3 style="margin:0 0 .5rem;">Share progress with a parent</h3>
          <p style="color:var(--text-mid); font-size:.85rem; margin-bottom:.75rem;">Generates a link only they can use to see your results — nobody else's.</p>
          <button class="btn btn-primary btn-block" id="genParentLinkBtn">Generate Parent Link</button>
          <div id="parentLinkOut" style="margin-top:.75rem;"></div>
        </div>
        <button class="btn btn-ghost btn-block" id="leaveClassBtn">Leave Class</button>
      `;
      document.getElementById('genParentLinkBtn').addEventListener('click', async () => {
        const btn = document.getElementById('genParentLinkBtn');
        btn.disabled = true; btn.textContent = 'Generating…';
        try {
          const { parentCode } = await dashApi('link_parent', { classCode: m.classCode, name: m.name, pin: m.pin });
          const url = `${location.origin}${location.pathname}?dash=parent&code=${encodeURIComponent(parentCode)}`;
          document.getElementById('parentLinkOut').innerHTML = `
            <div class="form-group">
              <label>Parent code</label>
              <input class="text-input" readonly value="${safe(parentCode)}">
            </div>
            <p style="font-size:.78rem; color:var(--text-mid);">Or send this link directly: <br><span style="word-break:break-all;">${safe(url)}</span></p>`;
        } catch (e) {
          showToast(e.message || 'Could not generate link');
        }
        btn.disabled = false; btn.textContent = 'Generate Parent Link';
      });
      document.getElementById('leaveClassBtn').addEventListener('click', () => {
        if (!confirm('Leave this class? You can rejoin any time with the class code.')) return;
        clearClassMembership();
        renderClassScreen();
      });
      return;
    }

    body.innerHTML = `
      <div class="card" style="margin-bottom:1rem;">
        <h3 style="margin:0 0 .5rem;">Join your class</h3>
        <p style="color:var(--text-mid); font-size:.85rem; margin-bottom:1rem;">Ask your teacher for the class code. Pick a 4-6 digit PIN — this keeps your results only yours.</p>
        <div class="form-group"><label>Class code</label><input class="text-input" id="joinClassCode" placeholder="C-XXXXXX" autocapitalize="characters"></div>
        <div class="form-group"><label>Your name</label><input class="text-input" id="joinClassName" placeholder="${S.currentUser ? safe(S.currentUser) : 'Your name'}" value="${S.currentUser ? safe(S.currentUser) : ''}"></div>
        <div class="form-group"><label>Pick a PIN (4-6 digits)</label><input class="text-input" id="joinClassPin" type="tel" placeholder="1234" maxlength="6"></div>
        <button class="btn btn-primary btn-block" id="joinClassBtn">Join Class</button>
      </div>
      <div class="card">
        <h3 style="margin:0 0 .5rem;">Are you a teacher?</h3>
        <p style="color:var(--text-mid); font-size:.85rem; margin-bottom:1rem;">Create a class and get a code to share with your students.</p>
        <button class="btn btn-ghost btn-block" id="showCreateClassBtn">Create a Class</button>
        <div id="createClassForm" class="hidden" style="margin-top:1rem;">
          <div class="form-group"><label>School / class name</label><input class="text-input" id="newSchoolName" placeholder="e.g. Grace High SS2A"></div>
          <div class="form-group"><label>Set an admin PIN (4-6 digits) — lets you recover access on another device</label><input class="text-input" id="newAdminPin" type="tel" placeholder="1234" maxlength="6"></div>
          <button class="btn btn-primary btn-block" id="createClassBtn">Create Class</button>
        </div>
      </div>
    `;

    document.getElementById('joinClassBtn').addEventListener('click', async () => {
      const classCode = document.getElementById('joinClassCode').value.trim().toUpperCase();
      const name = document.getElementById('joinClassName').value.trim();
      const pin = document.getElementById('joinClassPin').value.trim();
      if (!classCode || !name || !/^\d{4,6}$/.test(pin)) { showToast('Fill in class code, name, and a 4-6 digit PIN.'); return; }
      const btn = document.getElementById('joinClassBtn');
      btn.disabled = true; btn.textContent = 'Joining…';
      try {
        await dashApi('join_class', { classCode, name, pin });
        saveClassMembership({ classCode, name, pin });
        showToast('Joined class!');
        renderClassScreen();
      } catch (e) {
        showToast(e.message || 'Could not join class');
        btn.disabled = false; btn.textContent = 'Join Class';
      }
    });

    document.getElementById('showCreateClassBtn').addEventListener('click', () => {
      document.getElementById('createClassForm').classList.toggle('hidden');
    });

    document.getElementById('createClassBtn').addEventListener('click', async () => {
      const schoolName = document.getElementById('newSchoolName').value.trim();
      const adminPin = document.getElementById('newAdminPin').value.trim();
      if (!schoolName || !/^\d{4,6}$/.test(adminPin)) { showToast('Enter a class name and a 4-6 digit PIN.'); return; }
      const btn = document.getElementById('createClassBtn');
      btn.disabled = true; btn.textContent = 'Creating…';
      try {
        const { classCode, adminSecret } = await dashApi('create_class', { schoolName, adminPin });
        saveSafe(CLASS_ADMIN_KEY, { classCode, adminSecret, schoolName });
        const url = `${location.origin}${location.pathname}?dash=teacher`;
        document.getElementById('createClassForm').innerHTML = `
          <div class="card" style="background:var(--cream-w);">
            <p style="font-weight:600; margin-bottom:.5rem;">Class created! Share this code with your students:</p>
            <p style="font-size:1.4rem; font-weight:700; letter-spacing:.05em;">${safe(classCode)}</p>
            <p style="font-size:.8rem; color:var(--text-mid); margin-top:.75rem;">Your teacher dashboard is saved on this device. Open it any time from: <br><span style="word-break:break-all;">${safe(url)}</span></p>
            <button class="btn btn-primary btn-block" style="margin-top:1rem;" id="openTeacherDashBtn">Open Teacher Dashboard</button>
          </div>`;
        document.getElementById('openTeacherDashBtn').addEventListener('click', () => openTeacherDashboard(classCode, adminSecret));
      } catch (e) {
        showToast(e.message || 'Could not create class');
        btn.disabled = false; btn.textContent = 'Create Class';
      }
    });
  }

  /* ── Teacher dashboard (class-wide view) ─────────────────────── */
  function openTeacherDashboard(classCode, adminSecret) {
    showScreen('teacherDashScreen');
    renderTeacherDashLoading();
    dashApi('get_class_dashboard', { classCode, adminSecret }).then(data => {
      renderTeacherDash(data);
    }).catch(e => {
      document.getElementById('teacherDashBody').innerHTML = `<p style="color:var(--red);">${safe(e.message || 'Could not load dashboard')}</p>`;
    });
  }
  function renderTeacherDashLoading() {
    document.getElementById('teacherDashBody').innerHTML = `<p style="color:var(--text-mid);">Loading class…</p>`;
  }
  function renderTeacherDash(data) {
    const body = document.getElementById('teacherDashBody');
    if (!data.students.length) {
      body.innerHTML = `<p style="color:var(--text-mid);">No students have joined <b>${safe(data.classCode)}</b> yet. Share the class code to get started.</p>`;
      return;
    }
    const sorted = [...data.students].sort((a, b) => (b.avgPct || 0) - (a.avgPct || 0));
    body.innerHTML = `
      <p style="color:var(--text-mid); font-size:.85rem; margin-bottom:1rem;">${safe(data.schoolName || 'Class')} · ${data.students.length} student${data.students.length === 1 ? '' : 's'}</p>
      ${sorted.map(s => `
        <div class="card" style="margin-bottom:.85rem;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="margin:0;">${safe(s.name)}</h3>
            <span style="font-weight:700; font-size:1.1rem;">${s.avgPct == null ? '—' : s.avgPct + '%'}</span>
          </div>
          <p style="font-size:.8rem; color:var(--text-mid); margin:.35rem 0;">${s.sessionCount} session${s.sessionCount === 1 ? '' : 's'} · ${s.practiceCount || 0} practice · ${s.challengeCount || 0} challenge${(s.challengeCount || 0) === 1 ? '' : 's'}</p>
          ${renderSubjectBreakdown(s.bySubject)}
        </div>`).join('')}
    `;
  }
  function renderSubjectBreakdown(bySubject) {
    const entries = Object.entries(bySubject || {});
    if (!entries.length) return '';
    return `<div style="border-top:1px solid var(--border); margin-top:.5rem; padding-top:.5rem;">
      ${entries.sort((a, b) => a[1].avgPct - b[1].avgPct).map(([subj, d]) => `
        <div style="display:flex; justify-content:space-between; font-size:.82rem; padding:.2rem 0;">
          <span>${safe(SUBJECT_LABELS[subj] || subj)} ${d.weakQuestions.length ? '⚠️' : ''}</span>
          <span style="color:var(--text-mid);">${d.avgPct}% avg · ${d.sessions}x</span>
        </div>`).join('')}
    </div>`;
  }

  /* ── Parent dashboard (single-child, read-only) ──────────────── */
  function openParentDashboard(prefillCode) {
    showScreen('parentDashScreen');
    const body = document.getElementById('parentDashBody');
    body.innerHTML = `
      <div class="card">
        <h3 style="margin:0 0 .5rem;">Enter your parent code</h3>
        <div class="form-group"><input class="text-input" id="parentCodeInput" placeholder="P-XXXXXXXX" value="${prefillCode ? safe(prefillCode) : ''}"></div>
        <button class="btn btn-primary btn-block" id="parentCodeGoBtn">View Progress</button>
        <p id="parentCodeErr" style="color:var(--red); font-size:.82rem; margin-top:.5rem;"></p>
      </div>`;
    const go = async () => {
      const code = document.getElementById('parentCodeInput').value.trim().toUpperCase();
      if (!code) return;
      const btn = document.getElementById('parentCodeGoBtn');
      btn.disabled = true; btn.textContent = 'Loading…';
      try {
        const data = await dashApi('get_parent_dashboard', { parentCode: code });
        renderParentDash(data);
      } catch (e) {
        document.getElementById('parentCodeErr').textContent = e.message || 'Could not load — check the code.';
        btn.disabled = false; btn.textContent = 'View Progress';
      }
    };
    document.getElementById('parentCodeGoBtn').addEventListener('click', go);
    if (prefillCode) go();
  }
  function renderParentDash(data) {
    const body = document.getElementById('parentDashBody');
    body.innerHTML = `
      <div class="card" style="margin-bottom:1rem;">
        <h3 style="margin:0;">${safe(data.name)}</h3>
        <p style="font-size:.85rem; color:var(--text-mid);">${safe(data.schoolName || '')}</p>
        <div style="display:flex; gap:1.5rem; margin-top:.75rem;">
          <div><span style="font-weight:700; font-size:1.3rem;">${data.avgPct == null ? '—' : data.avgPct + '%'}</span><br><span style="font-size:.75rem; color:var(--text-mid);">Average</span></div>
          <div><span style="font-weight:700; font-size:1.3rem;">${data.sessions.length}</span><br><span style="font-size:.75rem; color:var(--text-mid);">Sessions</span></div>
        </div>
      </div>
      <div class="card" style="margin-bottom:1rem;">
        <h3 style="margin:0 0 .5rem;">By subject</h3>
        ${renderSubjectBreakdown(data.bySubject) || '<p style="color:var(--text-mid); font-size:.85rem;">No sessions yet.</p>'}
      </div>
      <div class="card">
        <h3 style="margin:0 0 .5rem;">Recent sessions</h3>
        ${data.sessions.slice(0, 15).map(s => `
          <div style="display:flex; justify-content:space-between; font-size:.82rem; padding:.3rem 0; border-bottom:1px solid var(--border);">
            <span>${safe(SUBJECT_LABELS[s.subject] || s.subject)} ${s.mode === 'challenge' ? '🏆' : ''}</span>
            <span style="color:var(--text-mid);">${s.score}/${s.total} · ${new Date(s.at).toLocaleDateString()}</span>
          </div>`).join('') || '<p style="color:var(--text-mid); font-size:.85rem;">No sessions yet.</p>'}
      </div>`;
  }

  /* ────────────────────────────────
     HOLIDAY COUNTDOWN
     (Nigerian schools typically resume early-to-mid September;
      adjust HOLIDAY_END if your actual resumption date differs.)
  ──────────────────────────────── */
  function renderCountdown() {
    const HOLIDAY_END = new Date('2026-09-14T00:00:00');
    const now = new Date();
    const days = Math.max(0, Math.ceil((HOLIDAY_END - now) / 86400000));
    document.getElementById('daysLeft').textContent = days;
  }

  /* ────────────────────────────────
     CATEGORY TABS
  ──────────────────────────────── */
  function initCategoryTabs() {
    document.querySelectorAll('.cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        S.category = tab.dataset.cat;
        renderDashboardNudge();
        updateStudyPlanBanner();
      });
    });
  }

  /* ────────────────────────────────
     FEATURE GRID ACTIONS
  ──────────────────────────────── */
  function initFeatureGrid() {
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('click', () => {
        const action = card.dataset.action;
        if (action === 'class') { openClassScreen(); return; }
        ensureUser(() => handleFeature(action));
      });
    });
    document.querySelectorAll('.game-choice-card').forEach(card => {
      card.addEventListener('click', () => {
        const game = card.dataset.game;
        if (game === 'sort' || game === 'sequence' || game === 'equation') showGameExplainer(game, null);
        else openSubjectPicker(game);
      });
    });
  }

  function handleFeature(action) {
    if (action === 'revision') openSubjectPicker('revision');
    else if (action === 'quiz') openSubjectPicker('quiz');
    else if (action === 'challenge') openQuizChallenge();
    else if (action === 'project') openProjectHelper();
    else if (action === 'games') { showScreen('gamesHubScreen'); }
    else if (action === 'library') openSubjectPicker('library');
  }

  /* ────────────────────────────────
     HOME DASHBOARD NUDGE
     Shows up to two small cards above the feature grid: "Continue
     where you left off" and/or "Focus area" (weakest tracked subject).
     Both are silent — they only appear once there's real data, so a
     brand-new user just sees the plain feature grid.
  ──────────────────────────────── */
  function renderDashboardNudge() {
    updateAICreditBadges();
    maybeShowBoostExpiryReminder();
    const wrap = document.getElementById('dashboardNudge');
    if (!wrap) return;
    const cards = [];

    const last = getLastActivity();
    if (last && last.category === S.category && CONTENT_MANIFEST[S.category].subjects.includes(last.subject)) {
      const meta = subjectMeta(last.subject);
      const label = SUBJECT_LABELS[last.subject] || last.subject;
      const modeLabel = { revision: 'Study Mode', quiz: 'Quiz', game: 'Speed Round', library: 'Study Library', tf: 'True or False Blitz', memory: 'Memory Match' }[last.mode] || 'practice';
      cards.push(`
        <button class="nudge-card nudge-continue" data-nudge="continue">
          <span class="nudge-icon">${meta.icon}</span>
          <span class="nudge-text"><h4>Continue where you left off</h4><p>${label} · ${modeLabel}</p></span>
          <span class="nudge-arrow">→</span>
        </button>`);
    }

    const weak = getWeakestSubject(S.category);
    if (weak && (!last || weak.subject !== last.subject)) {
      const meta = subjectMeta(weak.subject);
      const label = SUBJECT_LABELS[weak.subject] || weak.subject;
      const pct = Math.round(weak.pct * 100);
      cards.push(`
        <button class="nudge-card" data-nudge="focus" data-subject="${weak.subject}">
          <span class="nudge-icon">${meta.icon}</span>
          <span class="nudge-text"><h4>Focus area: ${label}</h4><p>Averaging ${pct}% — a bit more practice here would help</p></span>
          <span class="nudge-arrow">→</span>
        </button>`);
    }

    // General, always-available awareness card — not tied to any specific
    // "you've run out" moment like the other nudges elsewhere, just a
    // standing reminder that the option exists. Dismissible, but not gone
    // forever — reappears after a few days rather than nagging daily.
    if (shouldShowGeneralAICard()) {
      cards.push(`
        <div class="nudge-card nudge-ai-promo" data-nudge="ai-promo">
          <button class="nudge-ai-promo-close" aria-label="Dismiss">✕</button>
          <span class="nudge-icon">✨</span>
          <span class="nudge-text"><h4>Want more practice material?</h4><p>Unlock extra AI-generated questions & flashcards for ₦500</p></span>
          <span class="nudge-arrow">→</span>
        </div>`);
    }

    wrap.innerHTML = cards.join('');
    const continueBtn = wrap.querySelector('[data-nudge="continue"]');
    if (continueBtn) continueBtn.addEventListener('click', () => {
      ensureUser(() => {
        if (last.mode === 'revision') startRevision(last.subject);
        else if (last.mode === 'game') startSpeedRound(last.subject, getLastSpeedLevel());
        else if (last.mode === 'tf') startTrueFalseBlitz(last.subject);
        else if (last.mode === 'memory') startMemoryMatch(last.subject);
        else if (last.mode === 'library') openLibrary(last.subject);
        else startQuizSetup(last.subject);
      });
    });
    const focusBtn = wrap.querySelector('[data-nudge="focus"]');
    if (focusBtn) focusBtn.addEventListener('click', () => {
      ensureUser(() => startQuizSetup(focusBtn.dataset.subject));
    });
    const aiPromoCard = wrap.querySelector('[data-nudge="ai-promo"]');
    if (aiPromoCard) {
      aiPromoCard.querySelector('.nudge-ai-promo-close').addEventListener('click', (e) => {
        e.stopPropagation();
        dismissGeneralAICard();
        aiPromoCard.remove();
      });
      aiPromoCard.addEventListener('click', () => showAIPaywall());
    }
  }

  const AI_PROMO_DISMISSED_KEY = 'hh-ai-promo-dismissed-v1';
  const AI_PROMO_COOLDOWN_DAYS = 4;
  function shouldShowGeneralAICard() {
    const dismissedAt = loadSafe(AI_PROMO_DISMISSED_KEY, null);
    if (!dismissedAt) return true;
    const daysSince = (Date.now() - dismissedAt) / 86400000;
    return daysSince >= AI_PROMO_COOLDOWN_DAYS;
  }
  function dismissGeneralAICard() {
    saveSafe(AI_PROMO_DISMISSED_KEY, Date.now());
  }

  /* ────────────────────────────────
     STUDY PLAN
     A lightweight, locally-generated day-by-day checklist for the
     rest of the holiday — the thing that makes this feel like a study
     companion rather than a stack of quiz modes. Not AI-generated
     (deterministic round-robin scheduling); simple on purpose so it's
     instant and never fails.
  ──────────────────────────────── */
  function daysLeftInHoliday() {
    const HOLIDAY_END = new Date('2026-09-14T00:00:00');
    return Math.max(1, Math.ceil((HOLIDAY_END - new Date()) / 86400000));
  }

  function getPlan(category) {
    const all = loadSafe(PLAN_KEY, {});
    return all[category] || null;
  }
  function savePlan(category, plan) {
    const all = loadSafe(PLAN_KEY, {});
    all[category] = plan;
    saveSafe(PLAN_KEY, all);
  }
  function clearPlan(category) {
    const all = loadSafe(PLAN_KEY, {});
    delete all[category];
    saveSafe(PLAN_KEY, all);
  }

  function updateStudyPlanBanner() {
    const sub = document.getElementById('spbSub');
    if (!sub) return;
    const plan = getPlan(S.category);
    if (plan) {
      const total = plan.days.reduce((n, d) => n + d.tasks.length, 0);
      const done = plan.days.reduce((n, d) => n + d.tasks.filter(t => t.done).length, 0);
      sub.textContent = `${done}/${total} tasks done — tap to continue your plan`;
    } else {
      sub.textContent = 'Build a simple day-by-day plan for the rest of the break.';
    }
  }

  function openStudyPlan() {
    ensureUser(() => {
      const plan = getPlan(S.category);
      if (plan) renderPlanView(plan); else renderPlanSetup();
      showScreen('planScreen');
    });
  }

  function renderPlanSetup() {
    document.getElementById('planScreenTitle').textContent = '🗓 Build Your Study Plan';
    const manifest = CONTENT_MANIFEST[S.category];
    const suggestedWeeks = Math.max(1, Math.round(daysLeftInHoliday() / 7));
    const body = document.getElementById('planBody');
    body.innerHTML = `
      <p style="font-size:.85rem; color:var(--text-mid); margin-bottom:1rem;">
        Pick the subjects you want to focus on. We'll spread them across the days you have left
        so you're not cramming everything at once.
      </p>
      <div class="plan-setup-subjects" id="planSubjectChips">
        ${manifest.subjects.map(key => {
          const meta = subjectMeta(key);
          return `<button class="plan-subject-chip" data-subject="${key}">${meta.icon} ${SUBJECT_LABELS[key] || key}</button>`;
        }).join('')}
      </div>
      <div class="form-group">
        <label>How many weeks should this plan cover?</label>
        <select id="planWeeks">
          ${[1,2,3,4,5,6,7,8].map(w => `<option value="${w}" ${w === suggestedWeeks ? 'selected' : ''}>${w} week${w > 1 ? 's' : ''}</option>`).join('')}
        </select>
      </div>
      <button class="btn btn-primary btn-block" id="planCreateBtn" style="margin-top:.5rem;">Create My Plan →</button>
    `;

    const selected = new Set();
    body.querySelectorAll('.plan-subject-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const s = chip.dataset.subject;
        if (selected.has(s)) { selected.delete(s); chip.classList.remove('active'); }
        else { selected.add(s); chip.classList.add('active'); }
      });
    });

    document.getElementById('planCreateBtn').addEventListener('click', () => {
      if (selected.size === 0) { showToast('Pick at least one subject to build a plan.'); return; }
      const weeks = parseInt(document.getElementById('planWeeks').value, 10);
      const plan = generatePlan(Array.from(selected), weeks);
      savePlan(S.category, plan);
      updateStudyPlanBanner();
      renderPlanView(plan);
    });
  }

  function generatePlan(subjects, weeks) {
    const totalDays = weeks * 7;
    const days = [];
    const today = new Date();
    let taskCounter = 0;
    for (let d = 0; d < totalDays; d++) {
      const date = new Date(today.getTime() + d * 86400000);
      const subject = subjects[d % subjects.length];
      const mode = d % 3 === 2 ? 'game' : 'quiz'; // every 3rd day, mix in a Speed Round for variety
      days.push({
        dateLabel: date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }),
        isToday: d === 0,
        tasks: [{
          id: `t${taskCounter++}`,
          subject, mode,
          count: mode === 'game' ? null : 10,
          done: false,
        }],
      });
    }
    return { category: S.category, subjects, weeks, createdAt: Date.now(), days };
  }

  function renderPlanView(plan) {
    document.getElementById('planScreenTitle').textContent = '🗓 Study Plan';
    const total = plan.days.reduce((n, d) => n + d.tasks.length, 0);
    const doneCount = plan.days.reduce((n, d) => n + d.tasks.filter(t => t.done).length, 0);
    const pct = total ? Math.round((doneCount / total) * 100) : 0;

    const body = document.getElementById('planBody');
    body.innerHTML = `
      <div class="plan-progress-card">
        <div class="plan-progress-pct">${pct}%</div>
        <div style="font-size:.78rem; color:var(--text-dim); margin-top:.2rem;">${doneCount} of ${total} tasks complete</div>
        <div class="plan-progress-track"><div class="plan-progress-fill" style="width:${pct}%;"></div></div>
      </div>
      <div id="planDaysList"></div>
      <button class="btn btn-ghost btn-block" id="planResetBtn" style="margin-top:.5rem;">Start a New Plan</button>
    `;

    const list = document.getElementById('planDaysList');
    list.innerHTML = plan.days.map(day => {
      const meta = day.tasks[0] ? subjectMeta(day.tasks[0].subject) : null;
      return `
      <div class="plan-day-group">
        <div class="plan-day-label ${day.isToday ? 'is-today' : ''}">${day.isToday ? 'Today · ' : ''}${day.dateLabel}</div>
        ${day.tasks.map(t => {
          const tm = subjectMeta(t.subject);
          const modeLabel = t.mode === 'game' ? 'Speed Round' : `Quiz · ${t.count} questions`;
          return `
          <div class="plan-task ${t.done ? 'done' : ''}" data-task="${t.id}">
            <button class="plan-check" data-toggle="${t.id}">${t.done ? '✓' : ''}</button>
            <div class="plan-task-body">
              <div class="plan-task-title">${tm.icon} ${SUBJECT_LABELS[t.subject] || t.subject}</div>
              <div class="plan-task-sub">${modeLabel}</div>
            </div>
            <button class="plan-task-go" data-start="${t.id}">Start →</button>
          </div>`;
        }).join('')}
      </div>`;
    }).join('');

    list.querySelectorAll('[data-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.toggle;
        plan.days.forEach(d => d.tasks.forEach(t => { if (t.id === id) t.done = !t.done; }));
        savePlan(S.category, plan);
        updateStudyPlanBanner();
        renderPlanView(plan);
      });
    });
    list.querySelectorAll('[data-start]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.start;
        let task = null;
        plan.days.forEach(d => d.tasks.forEach(t => { if (t.id === id) task = t; }));
        if (!task) return;
        if (task.mode === 'game') startSpeedRound(task.subject, getLastSpeedLevel());
        else startQuizSetup(task.subject);
      });
    });

    document.getElementById('planResetBtn').addEventListener('click', () => {
      if (!confirm('Start a new plan? Your current plan and its progress will be replaced.')) return;
      clearPlan(S.category);
      updateStudyPlanBanner();
      renderPlanSetup();
    });
  }

  /* ────────────────────────────────
     SUBJECT PICKER
  ──────────────────────────────── */
  function getResourceBank(cat) {
    return cat === 'junior' ? JUNIOR_RESOURCES : SENIOR_RESOURCES;
  }

  /** AI-generated flashcards/formulas/notes used to only live in memory —
   * mutating SENIOR_RESOURCES/JUNIOR_RESOURCES directly works fine for
   * the current tab, but a page reload re-parses the static data files
   * fresh, so everything a subscriber generated would silently vanish.
   * For content someone paid credits for, that's a real problem, not
   * just an inconvenience — it also meant regenerating after every
   * reload burned MORE credits for content they'd already unlocked.
   *
   * Fix: AI-generated items are additionally saved to this localStorage
   * key, namespaced by category/subject/type, and re-applied on top of
   * the static banks once at startup — so they become a genuine
   * permanent part of that device's offline library, not a
   * session-only bonus. */
  const AI_RESOURCES_KEY = 'hh-ai-resources-v1';

  function aiResourceOverlayKey(category, subject, type) {
    return `${category}:${subject}:${type}`;
  }

  function saveAIGeneratedItems(category, subject, type, items) {
    if (!items || !items.length) return;
    const store = loadSafe(AI_RESOURCES_KEY, {});
    const key = aiResourceOverlayKey(category, subject, type);
    store[key] = (store[key] || []).concat(items);
    saveSafe(AI_RESOURCES_KEY, store);
  }

  /** Called once at startup — merges any previously-generated AI content
   * back into the in-memory resource banks before anything else reads
   * from them, so from the app's perspective it's indistinguishable from
   * content that shipped in the static files. Two different top-level
   * objects need this: getResourceBank (flashcards/formulas/notes) and
   * getBank (the MCQ question pool, keyed 'objective') — same overlay
   * store, routed to the right target by type. */
  function applyAIResourceOverlay() {
    const store = loadSafe(AI_RESOURCES_KEY, {});
    Object.keys(store).forEach(key => {
      const [category, subject, type] = key.split(':');
      const target = type === 'objective'
        ? (getBank(category)[subject] || (getBank(category)[subject] = { objective: [] }))
        : (getResourceBank(category)[subject] || (getResourceBank(category)[subject] = { flashcards: [], formulas: [], notes: [] }));
      const existingIds = new Set((target[type] || []).map(item => item.id).filter(Boolean));
      const toAdd = (store[key] || []).filter(item => !item.id || !existingIds.has(item.id));
      target[type] = (target[type] || []).concat(toAdd);
    });
  }

  const MIXED_POOL_MODES = ['scramble', 'formula']; // these two have a genuine standalone mixed-subject mode, not a disguised fallback

  function openSubjectPicker(mode) {
    S.mode = mode;
    const manifest = CONTENT_MANIFEST[S.category];
    const bank = getBank(S.category);
    const resBank = getResourceBank(S.category);
    const titles = {
      quiz: 'Quiz — pick a subject', revision: 'Revision — pick a subject',
      game: '⚡ Speed Round — pick a subject', library: '📚 Study Library — pick a subject',
      tf: '✓✗ True or False — pick a subject', memory: '🧠 Memory Match — pick a subject',
      scramble: '🔤 Word Scramble — pick a subject',
      formula: '🔢 Formula Rush — pick a subject',
    };
    document.getElementById('subjectScreenTitle').textContent = titles[mode] || 'Pick a subject';

    // AI Live toggle — only for the two MCQ-shaped games where a single
    // batch-generated round genuinely makes sense (Speed Round, True/
    // False). Deliberately a toggle above the list rather than a second
    // button per subject row (would double the list's visual weight for
    // 16+ subjects) — default is off, so nothing changes for anyone who
    // doesn't touch it.
    S.aiLiveMode = false;
    const liveToggleHtml = (mode === 'game' || mode === 'tf') ? `
      <button class="ai-live-toggle" id="aiLiveToggle">
        <span id="aiLiveToggleIcon">📚</span>
        <span id="aiLiveToggleLabel">Playing from the offline bank — tap for an AI Live round instead</span>
      </button>` : '';

    // Explicit "Mixed Subjects" entry — its own honest, always-available
    // option, not something a specific named subject silently turns into.
    const mixedRowHtml = MIXED_POOL_MODES.includes(mode) ? `
      <button class="subject-row subject-row-mixed" data-subject="__mixed__">
        <div class="subject-row-icon" style="background:var(--coral-pale); color:var(--coral);">🔀</div>
        <div class="subject-row-text">
          <div class="subject-row-name">Mixed Subjects</div>
          <div class="subject-row-count">All subjects together</div>
        </div>
        <span class="subject-row-arrow">→</span>
      </button>` : '';

    const list = document.getElementById('subjectList');
    list.innerHTML = liveToggleHtml + mixedRowHtml + manifest.subjects.map(key => {
      const label = SUBJECT_LABELS[key] || key;
      const meta = subjectMeta(key);
      let countText, disabled = false;
      if (mode === 'library') {
        const r = resBank[key] || { flashcards: [], formulas: [], notes: [] };
        const total = (r.flashcards || []).length + (r.formulas || []).length + (r.notes || []).length;
        countText = total ? `${total} resources` : 'Coming soon';
        disabled = !total;
      } else if (mode === 'memory') {
        const r = resBank[key] || { flashcards: [] };
        const pairCount = (r.flashcards || []).length;
        countText = pairCount >= 4 ? `${pairCount} card pairs` : 'Coming soon';
        disabled = pairCount < 4;
      } else if (mode === 'scramble') {
        const words = scrambleWordsFor(S.category, key);
        countText = words.length >= 6 ? `${words.length} words` : 'Not enough yet';
        disabled = words.length < 6;
      } else if (mode === 'formula') {
        const formulas = formulasFor(S.category, key);
        countText = formulas.length >= 6 ? `${formulas.length} formulas` : 'Not enough yet';
        disabled = formulas.length < 6;
      } else {
        const subj = bank[key];
        const count = subj && subj.objective ? subj.objective.length : 0;
        countText = `${count} questions`;
      }
      return `<button class="subject-row ${disabled ? 'subject-row-disabled' : ''}" data-subject="${key}" ${disabled ? 'disabled' : ''}>
        <div class="subject-row-icon" style="background:${meta.color}1a; color:${meta.color};">${meta.icon}</div>
        <div class="subject-row-text">
          <div class="subject-row-name">${label}</div>
          <div class="subject-row-count">${countText}</div>
        </div>
        <span class="subject-row-arrow">→</span>
      </button>`;
    }).join('');

    list.querySelectorAll('.subject-row:not(.subject-row-disabled)').forEach(row => {
      row.addEventListener('click', () => {
        S.subject = row.dataset.subject === '__mixed__' ? null : row.dataset.subject;
        // AI Live skips the normal rules-explainer step entirely — the
        // toggle itself already explained what's about to happen, and
        // this is a deliberate, explicit opt-in rather than the default
        // path, so an extra confirmation screen would just be friction.
        if (S.aiLiveMode && mode === 'game') startSpeedRoundLive(S.subject);
        else if (S.aiLiveMode && mode === 'tf') startTrueFalseLive(S.subject);
        else if (mode === 'quiz') startQuizSetup(S.subject);
        else if (mode === 'game') showGameExplainer('game', S.subject);
        else if (mode === 'tf') showGameExplainer('tf', S.subject);
        else if (mode === 'memory') showGameExplainer('memory', S.subject);
        else if (mode === 'scramble') showGameExplainer('scramble', S.subject);
        else if (mode === 'formula') showGameExplainer('formula', S.subject);
        else if (mode === 'library') openLibrary(S.subject);
        else startRevision(S.subject);
      });
    });

    const liveToggle = document.getElementById('aiLiveToggle');
    if (liveToggle) {
      liveToggle.addEventListener('click', () => {
        S.aiLiveMode = !S.aiLiveMode;
        liveToggle.classList.toggle('active', S.aiLiveMode);
        document.getElementById('aiLiveToggleIcon').textContent = S.aiLiveMode ? '✨' : '📚';
        document.getElementById('aiLiveToggleLabel').textContent = S.aiLiveMode
          ? 'AI Live round — fresh questions generated just for you (uses 1 AI credit + 1 game round)'
          : 'Playing from the offline bank — tap for an AI Live round instead';
      });
    }

    showScreen('subjectScreen');
  }

  /* ────────────────────────────────
     REVISION MODE
  ──────────────────────────────── */
  function startRevision(subjectKey) {
    const bank = getBank(S.category);
    const subj = bank[subjectKey];
    if (!subj || !subj.objective || !subj.objective.length) {
      showToast('No questions available for this subject yet.');
      return;
    }
    S.mode = 'revision';
    S.questions = subj.objective.slice();
    S.idx = 0;
    setLastActivity(S.category, subjectKey, 'revision');
    document.getElementById('revisionTitle').textContent = SUBJECT_LABELS[subjectKey] || subjectKey;
    renderRevisionQuestion();
    showScreen('revisionScreen');
    if (wasCompletedBefore(S.category, subjectKey, 'revision')) {
      showCompletedModal(
        `You've already been through ${SUBJECT_LABELS[subjectKey] || subjectKey}'s revision questions before.`,
        () => { if (!hasAICredit()) { showAIPaywall(); return; } generateExtraContentForSubject(S.category, subjectKey); }
      );
    } else {
      maybeShowCoverageNudge(S.category, subjectKey, 'of the offline questions');
    }
  }

  function renderRevisionQuestion() {
    const q = S.questions[S.idx];
    const body = document.getElementById('revisionBody');
    const meta = subjectMeta(S.subject);
    document.getElementById('revisionProgress').textContent = `${S.idx + 1} / ${S.questions.length}`;
    document.getElementById('studyProgressFill').style.width = `${((S.idx + 1) / S.questions.length) * 100}%`;
    document.getElementById('studyProgressFill').style.background = meta.color;

    const letters = ['A', 'B', 'C', 'D', 'E'];
    body.innerHTML = `
      <div class="study-card">
        <span class="study-subject-tag" style="background:${meta.color}1a; color:${meta.color};">${meta.icon} ${SUBJECT_LABELS[S.subject] || S.subject}</span>
        <div class="study-q-text">${safe(q.question)}</div>
        <div id="revOptions">
          ${q.options.map((opt, i) => `
            <button class="study-option" data-i="${i}">
              <span class="study-option-letter">${letters[i]}</span>
              <span>${safe(opt)}</span>
            </button>`).join('')}
        </div>
        <div id="revExplanation" class="study-explanation hidden">
          <div class="study-explanation-label">Why</div>
          <div id="revExplanationText"></div>
          <button class="explain-differently-btn" id="explainDifferentlyBtn">✨ Still confused? Explain this differently</button>
          <div id="explainDifferentlyResult"></div>
        </div>
        <div class="self-rate-row hidden" id="selfRateRow">
          <button class="self-rate-btn self-rate-no" data-rate="no">😕 Still learning this</button>
          <button class="self-rate-btn self-rate-yes" data-rate="yes">😊 I knew it</button>
        </div>
        <div class="q-nav-row">
          <button class="btn btn-ghost" id="revPrev" ${S.idx === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn btn-primary" id="revNext">Next →</button>
        </div>
      </div>`;

    body.querySelectorAll('.study-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.i, 10);
        body.querySelectorAll('.study-option').forEach((b, bi) => {
          b.disabled = true;
          b.classList.remove('s-correct', 's-incorrect');
          if (bi === q.answer) b.classList.add('s-correct');
          else if (bi === i) b.classList.add('s-incorrect');
        });
        const exp = document.getElementById('revExplanation');
        document.getElementById('revExplanationText').textContent = q.explanation || 'No explanation available for this question.';
        exp.classList.remove('hidden');
        document.getElementById('selfRateRow').classList.remove('hidden');
        document.getElementById('explainDifferentlyBtn').onclick = () => explainDifferently(q);
      });
    });

    document.querySelectorAll('.self-rate-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.self-rate-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });

    document.getElementById('revPrev').addEventListener('click', () => { S.idx--; renderRevisionQuestion(); });
    document.getElementById('revNext').addEventListener('click', () => {
      if (S.idx === S.questions.length - 1) {
        // Same escalation pattern as Flashcards (see renderFlashcards): the
        // dismissible banner already offered this once below; pushing past
        // the last question anyway is a stronger signal and earns the
        // blocking ask instead of silently doing nothing (this button used
        // to just be disabled here).
        showCompletedModal(
          `You've reached the end of ${SUBJECT_LABELS[S.subject] || S.subject}'s revision questions.`,
          () => { if (!hasAICredit()) { showAIPaywall(); return; } generateExtraContentForSubject(S.category, S.subject); },
          { title: 'That\'s all for now!', icon: '🎉', continueLabel: 'Stay here' }
        );
        return;
      }
      S.idx++; renderRevisionQuestion();
    });

    if (S.idx === S.questions.length - 1) {
      markCompleted(S.category, S.subject, 'revision');
      renderExpandBanner(
        body,
        `That's the last of ${S.questions.length} ${SUBJECT_LABELS[S.subject] || S.subject} questions for now.`,
        hasAICredit() ? 'Generate more with AI →' : 'Unlock more with AI →',
        () => { hasAICredit() ? generateExtraContentForSubject(S.category, S.subject) : showAIPaywall(); }
      );
    }
  }

  /* ────────────────────────────────
     QUIZ MODE
  ──────────────────────────────── */
  function startQuizSetup(subjectKey) {
    const bank = getBank(S.category);
    const subj = bank[subjectKey];
    if (!subj || !subj.objective || !subj.objective.length) {
      showToast('No questions available for this subject yet.');
      return;
    }
    const available = subj.objective.length;
    const countOptions = [10, 20, 30].filter(n => n <= available);
    if (!countOptions.length) countOptions.push(available);

    const body = document.getElementById('subjectList');
    body.innerHTML = `
      <div class="card" style="padding:1.25rem;">
        <h3 style="font-family:var(--serif); font-size:1.1rem; margin-bottom:1rem;">${SUBJECT_LABELS[subjectKey] || subjectKey}</h3>
        <div class="form-group">
          <label>Number of questions</label>
          <select id="quizSetupCount">
            ${countOptions.map(n => `<option value="${n}">${n} questions</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Time limit</label>
          <select id="quizSetupTime">
            <option value="0">No time limit</option>
            <option value="10">10 minutes</option>
            <option value="20" selected>20 minutes</option>
            <option value="30">30 minutes</option>
          </select>
        </div>
        <button class="btn btn-primary btn-block" id="quizSetupStart">Start Quiz →</button>
      </div>`;

    document.getElementById('quizSetupStart').addEventListener('click', () => {
      const count = parseInt(document.getElementById('quizSetupCount').value, 10);
      const mins = parseInt(document.getElementById('quizSetupTime').value, 10);
      launchQuiz(subjectKey, count, mins);
    });

    // Reliably triggerable, unlike the old coverage-percentage version:
    // fires the moment they've quizzed this exact subject to completion
    // once before, not after grinding through 90% of a huge bank.
    if (wasCompletedBefore(S.category, subjectKey, 'quiz')) {
      showCompletedModal(
        `You've already been through ${SUBJECT_LABELS[subjectKey] || subjectKey}'s question set before.`,
        () => { if (!hasAICredit()) { showAIPaywall(); return; } generateExtraContentForSubject(S.category, subjectKey); }
      );
    }
  }

  function launchQuiz(subjectKey, count, mins) {
    const bank = getBank(S.category);
    const pool = bank[subjectKey].objective.slice();
    const { questions, recycled } = pickQuestions(S.category, subjectKey, pool, count);
    S.mode = 'quiz';
    S.subject = subjectKey;
    S.questions = questions;
    S.idx = 0;
    S.answers = new Array(S.questions.length).fill(null);
    S._challengeCode = null;
    setLastActivity(S.category, subjectKey, 'quiz');
    document.getElementById('quizTitle').textContent = SUBJECT_LABELS[subjectKey] || subjectKey;

    if (recycled) {
      showToast("You've seen most of these before — mixing in some repeats to fill out the set.", 3400);
    }

    if (mins > 0) startTimer(mins * 60); else stopTimer(true);
    renderQuizQuestion();
    showScreen('quizScreen');
  }

  function startTimer(secs) {
    S.timerSecs = secs;
    updateTimerDisplay();
    stopTimer();
    S.timerInterval = setInterval(() => {
      S.timerSecs--;
      updateTimerDisplay();
      if (S.timerSecs <= 0) { stopTimer(); finishQuiz(); }
    }, 1000);
  }
  function stopTimer(hide) {
    if (S.timerInterval) clearInterval(S.timerInterval);
    S.timerInterval = null;
    if (hide) document.getElementById('quizTimer').textContent = '';
  }
  function updateTimerDisplay() {
    const m = Math.floor(S.timerSecs / 60);
    const sec = S.timerSecs % 60;
    document.getElementById('quizTimer').textContent = `${m}:${String(sec).padStart(2, '0')}`;
  }

  function renderQuizQuestion() {
    const q = S.questions[S.idx];
    const body = document.getElementById('quizBody');
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const selected = S.answers[S.idx];

    const fill = document.getElementById('examProgressFill');
    if (fill) fill.style.width = `${((S.idx + 1) / S.questions.length) * 100}%`;

    body.innerHTML = `
      <div class="exam-card">
        <div class="exam-q-number">${S.idx + 1}</div>
        <div class="exam-q-text">${safe(q.question)}</div>
        <div class="exam-options" id="quizOptions">
          ${q.options.map((opt, i) => `
            <button class="exam-opt ${selected === i ? 'selected' : ''}" data-i="${i}">
              <span class="exam-opt-bubble">${letters[i]}</span>
              <span>${safe(opt)}</span>
            </button>`).join('')}
        </div>
        <div class="exam-nav-row">
          <button class="btn btn-ghost" id="quizPrev" ${S.idx === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn btn-primary" id="quizNext">${S.idx === S.questions.length - 1 ? 'Finish' : 'Next →'}</button>
        </div>
      </div>`;

    body.querySelectorAll('.exam-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        S.answers[S.idx] = parseInt(btn.dataset.i, 10);
        body.querySelectorAll('.exam-opt').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
    });
    document.getElementById('quizPrev').addEventListener('click', () => { S.idx--; renderQuizQuestion(); });
    document.getElementById('quizNext').addEventListener('click', () => {
      if (S.idx === S.questions.length - 1) finishQuiz();
      else { S.idx++; renderQuizQuestion(); }
    });
  }

  function finishQuiz() {
    stopTimer(true);
    let correct = 0;
    S.questions.forEach((q, i) => { if (S.answers[i] === q.answer) correct++; });
    const total = S.questions.length;
    const pct = total ? Math.round((correct / total) * 100) : 0;

    recordSession(pct);
    if (S.subject) {
      markSeen(S.category, S.subject, S.questions.map(q => q.id));
      recordMastery(S.category, S.subject, correct, total);
      if (S.mode === 'quiz') markCompleted(S.category, S.subject, 'quiz');
    }
    // Captured before saveChallengeScore runs, since it clears
    // S._challengeCode synchronously as its very first line.
    const wasChallenge = !!S._challengeCode;
    if (S._challengeCode) saveChallengeScore(correct, total, S.answers);

    // Best-effort report to the class dashboard (no-op if not in a class).
    // Covers both solo practice/quiz AND regular quiz-mode challenges —
    // scramble/game challenges aren't tracked here (separate flow).
    if (S.subject) {
      const missed = S.questions
        .map((q, i) => (S.answers[i] !== q.answer ? q.id : null))
        .filter(Boolean);
      recordClassSession({
        subject: S.subject, category: S.category,
        mode: wasChallenge ? 'challenge' : 'practice',
        score: correct, total, missed,
      });
    }

    renderResults(correct, total, pct);
    showScreen('resultsScreen');
  }

  function renderResults(correct, total, pct) {
    const body = document.getElementById('resultsBody');
    const verdict = pct >= 80 ? "Excellent work! 🎉" : pct >= 60 ? "Good effort — keep going!" : "Keep practicing, you'll get there.";
    body.innerHTML = `
      <div class="result-hero">
        <div class="result-score">${pct}%</div>
        <div class="result-score-sub">${correct} out of ${total} correct</div>
        <p style="margin-top:1rem; font-size:.95rem; color:var(--text-mid);">${verdict}</p>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary btn-block" id="resReview">Review Answers</button>
        <button class="btn btn-ghost btn-block" id="resHome">Back to Home</button>
      </div>`;
    document.getElementById('resHome').addEventListener('click', () => { showScreen('homeScreen'); renderDashboardNudge(); updateStudyPlanBanner(); });
    document.getElementById('resReview').addEventListener('click', () => reviewQuizAnswers());
  }

  function reviewQuizAnswers() {
    S.mode = 'revision-review';
    S.idx = 0;
    const revBody = document.getElementById('revisionBody');
    document.getElementById('revisionTitle').textContent = 'Review';
    renderReviewQuestion();
    showScreen('revisionScreen');
  }

  function renderReviewQuestion() {
    const q = S.questions[S.idx];
    const userAns = S.answers[S.idx];
    const body = document.getElementById('revisionBody');
    const meta = subjectMeta(S.subject);
    document.getElementById('revisionProgress').textContent = `${S.idx + 1} / ${S.questions.length}`;
    const progFill = document.getElementById('studyProgressFill');
    if (progFill) { progFill.style.width = `${((S.idx + 1) / S.questions.length) * 100}%`; progFill.style.background = meta.color; }
    const letters = ['A', 'B', 'C', 'D', 'E'];

    body.innerHTML = `
      <div class="study-card">
        <span class="study-subject-tag" style="background:${meta.color}1a; color:${meta.color};">${meta.icon} ${SUBJECT_LABELS[S.subject] || S.subject}</span>
        <div class="study-q-text">${safe(q.question)}</div>
        <div>
          ${q.options.map((opt, i) => {
            let cls = '';
            if (i === q.answer) cls = 's-correct';
            else if (i === userAns) cls = 's-incorrect';
            return `<div class="study-option ${cls}">
              <span class="study-option-letter">${letters[i]}</span>
              <span>${safe(opt)}</span>
            </div>`;
          }).join('')}
        </div>
        <div class="study-explanation">
          <div class="study-explanation-label">Why</div>
          <div>${safe(q.explanation || 'No explanation available.')}</div>
        </div>
        <div class="q-nav-row">
          <button class="btn btn-ghost" id="revwPrev" ${S.idx === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn btn-primary" id="revwNext" ${S.idx === S.questions.length - 1 ? 'disabled' : ''}>Next →</button>
        </div>
      </div>`;
    document.getElementById('revwPrev').addEventListener('click', () => { S.idx--; renderReviewQuestion(); });
    document.getElementById('revwNext').addEventListener('click', () => { S.idx++; renderReviewQuestion(); });
  }

  /* ────────────────────────────────
     STUDY LIBRARY
     Non-past-question resources: Flashcards (flip to reveal), Formula
     Sheets, and Concept Notes. Fully offline — static content, no API
     calls. Only tabs with actual content for the subject are shown.
  ──────────────────────────────── */
  let LIB = { subject: null, tab: null, cards: [], idx: 0, flipped: false };

  function openLibrary(subjectKey) {
    const resBank = getResourceBank(S.category);
    const res = resBank[subjectKey] || { flashcards: [], formulas: [], notes: [] };
    const tabs = [];
    if ((res.flashcards || []).length) tabs.push('flashcards');
    if ((res.formulas || []).length) tabs.push('formulas');
    if ((res.notes || []).length) tabs.push('notes');

    if (!tabs.length) {
      showToast("Study Library content for this subject isn't ready yet — check back soon.");
      return;
    }

    LIB = { subject: subjectKey, tab: null, cards: [], idx: 0, flipped: false };
    setLastActivity(S.category, subjectKey, 'library');
    document.getElementById('libraryTitle').textContent = SUBJECT_LABELS[subjectKey] || subjectKey;
    document.getElementById('libraryTabs').innerHTML = ''; // tabs only appear once a segment is chosen

    showScreen('libraryScreen');
    renderLibraryChooser(subjectKey);
  }

  const LIBRARY_CHOOSER_META = {
    flashcards: { icon: '🗂', label: 'Flashcards', noun: 'cards' },
    formulas:   { icon: '∑',  label: 'Formulas',   noun: 'formulas' },
    notes:      { icon: '📝', label: 'Notes',       noun: 'notes' },
  };

  /** The landing view for a subject's Study Library — three large,
   * equally-weighted tiles a person must deliberately tap one of. Used to
   * default straight into Flashcards with two small pill tabs alongside,
   * which made it easy to assume that was the only content on offer
   * (Formulas and Notes existed the whole time, just easy to miss). This
   * is the fix: nobody can land here without seeing all three named and
   * counted up front. */
  function renderLibraryChooser(subjectKey) {
    const resBank = getResourceBank(S.category);
    const res = resBank[subjectKey] || {};
    const body = document.getElementById('libraryBody');
    const counts = {
      flashcards: (res.flashcards || []).length,
      formulas: (res.formulas || []).length,
      notes: (res.notes || []).length,
    };

    body.innerHTML = `
      <div class="library-chooser">
        ${Object.keys(LIBRARY_CHOOSER_META).filter(t => counts[t] > 0).map(t => `
          <button class="library-chooser-tile" data-choose-tab="${t}">
            <div class="library-chooser-icon">${LIBRARY_CHOOSER_META[t].icon}</div>
            <div class="library-chooser-label">${LIBRARY_CHOOSER_META[t].label}</div>
            <div class="library-chooser-count">${counts[t]} ${LIBRARY_CHOOSER_META[t].noun}</div>
          </button>
        `).join('')}
      </div>
    `;
    body.querySelectorAll('[data-choose-tab]').forEach(btn => {
      btn.addEventListener('click', () => enterLibraryTab(subjectKey, btn.dataset.chooseTab));
    });

    const totalItems = counts.flashcards + counts.formulas + counts.notes;
    maybeShowThinLibraryNudge(S.category, subjectKey, totalItems);
  }

  /** Called once a chooser tile is tapped — this is where the pill tab
   * bar actually appears, so someone already inside can still switch
   * quickly between segments without dropping back to the chooser every
   * time; the chooser's job is just to make sure they land on it once,
   * deliberately, on the way in. */
  function enterLibraryTab(subjectKey, tab) {
    const resBank = getResourceBank(S.category);
    const res = resBank[subjectKey] || { flashcards: [], formulas: [], notes: [] };
    const tabs = [];
    if ((res.flashcards || []).length) tabs.push('flashcards');
    if ((res.formulas || []).length) tabs.push('formulas');
    if ((res.notes || []).length) tabs.push('notes');

    LIB.tab = tab; LIB.idx = 0; LIB.flipped = false; LIB.cards = [];

    const tabLabels = { flashcards: '🗂 Flashcards', formulas: '∑ Formulas', notes: '📝 Notes' };
    document.getElementById('libraryTabs').innerHTML = tabs.map(t =>
      `<button class="lib-tab ${t === LIB.tab ? 'active' : ''}" data-tab="${t}">${tabLabels[t]}</button>`).join('');
    document.querySelectorAll('.lib-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        LIB.tab = btn.dataset.tab;
        LIB.idx = 0; LIB.flipped = false; LIB.cards = [];
        document.querySelectorAll('.lib-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === LIB.tab));
        checkAndRenderLibraryTab(subjectKey);
      });
    });

    checkAndRenderLibraryTab(subjectKey);
  }

  function backToLibraryChooser(subjectKey) {
    LIB.tab = null; LIB.idx = 0; LIB.flipped = false; LIB.cards = [];
    document.getElementById('libraryTabs').innerHTML = '';
    renderLibraryChooser(subjectKey);
  }

  /** Shared by openLibrary and the tab-switch handler — checking
   * completion must happen BEFORE render, since formulas/notes mark
   * themselves completed synchronously during render (they show as a
   * full list, no "last card" moment to wait for like flashcards has).
   * Checking after render would always see that just-set flag and
   * incorrectly fire on the very first visit. */
  function checkAndRenderLibraryTab(subjectKey) {
    const alreadyCompleted = wasCompletedBefore(S.category, subjectKey, 'library-' + LIB.tab);
    renderLibraryContent();
    if (alreadyCompleted) {
      const tabNoun = { flashcards: 'flashcards', formulas: 'formula sheet', notes: 'notes' }[LIB.tab] || 'material';
      const generators = { flashcards: generateExtraFlashcardsForSubject, formulas: generateExtraFormulasForSubject, notes: generateExtraNotesForSubject };
      showCompletedModal(
        `You've already been through these ${SUBJECT_LABELS[subjectKey] || subjectKey} ${tabNoun} before.`,
        () => {
          // This path previously skipped the credit check that the other
          // two AI entry points (the persistent bar, the end-of-list
          // banner) both correctly enforce — meaning a student with zero
          // credits could still trigger a real, billed generation for
          // free through this specific modal. Matched to the same
          // hasAICredit() gate used everywhere else.
          if (!hasAICredit()) { showAIPaywall(); return; }
          generators[LIB.tab](S.category, subjectKey);
        }
      );
    }
  }

  const LIBRARY_TAB_META = {
    flashcards: { noun: 'flashcards', fn: generateExtraFlashcardsForSubject },
    formulas:   { noun: 'formulas',   fn: generateExtraFormulasForSubject },
    notes:      { noun: 'notes',      fn: generateExtraNotesForSubject },
  };

  function renderLibraryContent() {
    const resBank = getResourceBank(S.category);
    const res = resBank[LIB.subject] || {};
    const body = document.getElementById('libraryBody');
    const meta = LIBRARY_TAB_META[LIB.tab];

    // A persistent, always-visible AI action — deliberately not hidden
    // behind reaching the end of a list or a repeat visit. It sits above
    // the content itself so the option is in reach the moment the tab
    // opens, on every visit, not just as a late-stage nudge.
    body.innerHTML = `
      <button class="library-back-to-chooser" id="libraryBackToChooser">← Study Library</button>
      <div class="library-ai-bar">
        <button class="library-ai-bar-btn" id="libraryAIBarBtn">✨ Generate more ${meta.noun} with AI</button>
      </div>
      <div id="libraryTabBody"></div>
    `;
    document.getElementById('libraryBackToChooser').addEventListener('click', () => backToLibraryChooser(LIB.subject));
    document.getElementById('libraryAIBarBtn').addEventListener('click', () => {
      if (!hasAICredit()) { showAIPaywall(); return; }
      meta.fn(S.category, LIB.subject);
    });

    const tabBody = document.getElementById('libraryTabBody');

    // One delegated listener, attached exactly once when this fresh
    // tabBody element is created — not inside renderFormulas/renderNotes
    // themselves, since those get called again on this SAME element every
    // time AI generation refreshes in place, which would otherwise stack
    // up duplicate listeners (and duplicate "Explain" API calls) with
    // every successful generation. The listener always reads the CURRENT
    // item list off tabBody._explainItems, kept fresh by whichever render
    // function last ran, rather than closing over a stale array.
    tabBody.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-explain-idx]');
      if (!btn || !tabBody._explainItems) return;
      const idx = Number(btn.dataset.explainIdx);
      const item = tabBody._explainItems[idx];
      if (!item) return;
      const resultEl = tabBody.querySelector(`[data-explain-result="${idx}"]`);
      const subjectLabel = SUBJECT_LABELS[LIB.subject] || LIB.subject;
      const prompt = LIB.tab === 'formulas'
        ? `I'm studying ${subjectLabel}. Here's a formula I'm reviewing:\n"${item.title}": ${item.formula}\n${item.note ? 'Note: ' + item.note : ''}\nCan you explain when and why this formula is used, and give a simple way to remember it? Keep it short.`
        : `I'm studying ${subjectLabel}. Here's a study note I'm reviewing:\n"${item.topic}": ${item.summary}\nCan you expand on this with more detail or a worked example? Keep it short.`;
      explainLibraryItem(prompt, btn, resultEl);
    });

    if (LIB.tab === 'flashcards') {
      renderFlashcards(tabBody, res.flashcards || []);
    } else if (LIB.tab === 'formulas') {
      renderFormulas(tabBody, res.formulas || []);
    } else if (LIB.tab === 'notes') {
      renderNotes(tabBody, res.notes || []);
    }
  }

  function renderFlashcards(body, cards) {
    if (!LIB.cards.length) LIB.cards = shuffleArray(cards);
    if (!LIB.cards.length) { body.innerHTML = '<div class="lib-empty">No flashcards for this subject yet.</div>'; return; }
    const card = LIB.cards[LIB.idx];

    body.innerHTML = `
      <div class="flashcard-progress">Card ${LIB.idx + 1} of ${LIB.cards.length}</div>
      <div class="flashcard-hint">Tap the card to flip it</div>
      <div class="flashcard-stage">
        <div class="flashcard ${LIB.flipped ? 'flipped' : ''}" id="flashcardEl">
          <div class="flashcard-inner">
            <div class="flashcard-face flashcard-front">
              <div class="flashcard-label">Term</div>
              <div class="flashcard-term">${card.term}</div>
            </div>
            <div class="flashcard-face flashcard-back">
              <div class="flashcard-label">Definition</div>
              <div class="flashcard-def">${card.definition}</div>
            </div>
          </div>
        </div>
      </div>
      <button class="explain-differently-btn" id="flExplainBtn">✨ Explain this differently</button>
      <div id="flExplainResult"></div>
      <div class="flashcard-nav-row">
        <button class="btn btn-ghost" id="flPrev" ${LIB.idx === 0 ? 'disabled' : ''}>← Previous</button>
        <button class="btn btn-primary" id="flNext">Next →</button>
      </div>
      <button class="flashcard-shuffle-btn" id="flShuffle">🔀 Shuffle cards</button>
    `;

    document.getElementById('flashcardEl').addEventListener('click', () => {
      LIB.flipped = !LIB.flipped;
      document.getElementById('flashcardEl').classList.toggle('flipped', LIB.flipped);
    });
    document.getElementById('flPrev').addEventListener('click', () => { LIB.idx--; LIB.flipped = false; renderFlashcards(body, cards); });
    document.getElementById('flNext').addEventListener('click', () => {
      if (LIB.idx === LIB.cards.length - 1) {
        // Pushed past the end on purpose — the dismissible banner already
        // offered this once (below); trying to continue anyway is a much
        // stronger signal, so it earns the harder, blocking ask instead of
        // being silently ignored (this button used to just be disabled here).
        showCompletedModal(
          `You've reached the end of these ${SUBJECT_LABELS[LIB.subject] || LIB.subject} flashcards.`,
          () => { if (!hasAICredit()) { showAIPaywall(); return; } generateExtraFlashcardsForSubject(S.category, LIB.subject); },
          { title: 'That\'s all for now!', icon: '🎉', continueLabel: 'Stay here' }
        );
        return;
      }
      LIB.idx++; LIB.flipped = false; renderFlashcards(body, cards);
    });
    document.getElementById('flShuffle').addEventListener('click', () => {
      LIB.cards = shuffleArray(LIB.cards); LIB.idx = 0; LIB.flipped = false;
      showToast('Shuffled!', 1200);
      renderFlashcards(body, cards);
    });
    document.getElementById('flExplainBtn').addEventListener('click', () => {
      const subjectLabel = SUBJECT_LABELS[LIB.subject] || LIB.subject;
      const prompt = `I'm studying ${subjectLabel}. Here's a flashcard I'm reviewing:\nTerm: "${card.term}"\nDefinition: "${card.definition}"\nCan you explain this a different way — maybe with a simpler analogy or a worked example? Keep it short.`;
      explainLibraryItem(prompt, document.getElementById('flExplainBtn'), document.getElementById('flExplainResult'));
    });

    if (LIB.idx === LIB.cards.length - 2 && LIB.cards.length >= 2) {
      renderExpandBanner(
        body,
        `Only 1 more ${SUBJECT_LABELS[LIB.subject] || LIB.subject} flashcard after this one.`,
        hasAICredit() ? 'Add more with AI →' : 'Unlock more with AI →',
        () => { hasAICredit() ? generateExtraFlashcardsForSubject(S.category, LIB.subject) : showAIPaywall(); }
      );
    }

    if (LIB.idx === LIB.cards.length - 1) {
      markCompleted(S.category, LIB.subject, 'library-flashcards');
      renderExpandBanner(
        body,
        `That's all ${LIB.cards.length} ${SUBJECT_LABELS[LIB.subject] || LIB.subject} flashcards for now.`,
        hasAICredit() ? 'Generate more with AI →' : 'Unlock more with AI →',
        () => { hasAICredit() ? generateExtraFlashcardsForSubject(S.category, LIB.subject) : showAIPaywall(); }
      );
    }
  }

  function renderFormulas(body, formulas) {
    if (!formulas.length) {
      body.innerHTML = '<div class="lib-empty">No formula sheet for this subject yet.</div>';
      renderExpandBanner(
        body,
        `No formulas here yet.`,
        hasAICredit() ? 'Try generating some with AI →' : 'Unlock AI to try →',
        () => { hasAICredit() ? generateExtraFormulasForSubject(S.category, LIB.subject) : showAIPaywall(); }
      );
      return;
    }
    const shuffled = shuffleArray(formulas);
    // Shuffled per render so a student who habitually reads top-to-bottom
    // and stops partway sees different formulas first each visit, even
    // though the full list still renders every time either way.
    body.innerHTML = shuffled.map((f, i) => `
      <div class="formula-card">
        <div class="formula-title">${f.title}</div>
        <div class="formula-expr">${f.formula}</div>
        <div class="formula-note">${f.note || ''}</div>
        <button class="explain-differently-btn" data-explain-idx="${i}">✨ Explain this</button>
        <div data-explain-result="${i}"></div>
      </div>`).join('');
    // Read by the single delegated click listener attached once in
    // renderLibraryContent — kept fresh here on every render (including
    // in-place AI refreshes) without ever re-registering a listener.
    body._explainItems = shuffled;

    // Shown as a full list, not stepped through card-by-card like
    // flashcards — so "viewed this tab" is the honest equivalent of
    // "reached the end" for this particular layout.
    markCompleted(S.category, LIB.subject, 'library-formulas');
    renderExpandBanner(
      body,
      `That's ${formulas.length} ${SUBJECT_LABELS[LIB.subject] || LIB.subject} formulas for now.`,
      hasAICredit() ? 'Add more formulas with AI →' : 'Unlock more with AI →',
      () => { hasAICredit() ? generateExtraFormulasForSubject(S.category, LIB.subject) : showAIPaywall(); }
    );
  }

  function renderNotes(body, notes) {
    if (!notes.length) {
      body.innerHTML = '<div class="lib-empty">No concept notes for this subject yet.</div>';
      renderExpandBanner(
        body,
        `No notes here yet.`,
        hasAICredit() ? 'Try generating some with AI →' : 'Unlock AI to try →',
        () => { hasAICredit() ? generateExtraNotesForSubject(S.category, LIB.subject) : showAIPaywall(); }
      );
      return;
    }
    const shuffled = shuffleArray(notes);
    // Same reasoning as renderFormulas — shuffled per render for freshness.
    body.innerHTML = shuffled.map((n, i) => `
      <div class="note-card">
        <div class="note-topic">${n.topic}</div>
        <div class="note-summary">${n.summary}</div>
        <button class="explain-differently-btn" data-explain-idx="${i}">✨ Explain this further</button>
        <div data-explain-result="${i}"></div>
      </div>`).join('');
    // Read by the single delegated click listener attached once in
    // renderLibraryContent — see the matching comment in renderFormulas.
    body._explainItems = shuffled;

    markCompleted(S.category, LIB.subject, 'library-notes');

    // Notes previously had no AI entry point at all — this is the
    // equivalent of flashcards' end-of-list banner, now that
    // generateExtraNotesForSubject actually exists.
    renderExpandBanner(
      body,
      `That's ${notes.length} ${SUBJECT_LABELS[LIB.subject] || LIB.subject} notes for now.`,
      hasAICredit() ? 'Add more notes with AI →' : 'Unlock more with AI →',
      () => { hasAICredit() ? generateExtraNotesForSubject(S.category, LIB.subject) : showAIPaywall(); }
    );
  }

  /* ────────────────────────────────
     SPEED ROUND (EDU GAME)
     60-second rapid-fire quiz: tap an answer, get instant feedback,
     auto-advance. Streak bonus scoring. Pulls from the anti-repeat
     pool first, tops up with AI-generated questions when the static
     pool is thin so a fast player doesn't run out mid-round.
  ──────────────────────────────── */
  const GAME_DURATION_SECS = 60;
  const GAME_MIN_QUEUE = 8;      // fetch more AI questions when queue drops below this
  const GAME_LOCK_MS = 550;      // pause after tap to show correct/incorrect before advancing

  const SPEED_LEVELS = {
    quick:    { id: 'quick',    label: 'Quick Fire', secs: 30,  icon: '⚡', detail: '30 seconds — a fast burst.' },
    standard: { id: 'standard', label: 'Standard',   secs: 60,  icon: '🔥', detail: '60 seconds — the classic pace.' },
    marathon: { id: 'marathon', label: 'Marathon',   secs: 120, icon: '🏃', detail: '120 seconds — go the distance.' },
  };
  const SPEED_LEVEL_KEY = 'hh-speed-level-v1';
  function getLastSpeedLevel() { return loadSafe(SPEED_LEVEL_KEY, 'standard'); }

  /** Shown on a fresh entry into Speed Round from the games hub, so a
   * player picks their pace deliberately every time rather than always
   * getting the same fixed 60-second round. "Continue where you left
   * off", study-plan tasks, and "Play Again" all pass a remembered level
   * straight through instead, so quick replays don't add friction. */
  function showSpeedLevelPicker(subjectKey) {
    const meta = subjectMeta(subjectKey);
    document.getElementById('slSubjectLine').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey}`;
    const opts = document.getElementById('slOptions');
    opts.innerHTML = Object.values(SPEED_LEVELS).map(lv => `
      <button class="speed-level-btn" data-level="${lv.id}">
        <span class="speed-level-icon">${lv.icon}</span>
        <span>
          <div class="speed-level-label">${lv.label}</div>
          <div class="speed-level-detail">${lv.detail}</div>
        </span>
      </button>
    `).join('');
    opts.querySelectorAll('[data-level]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById('speedLevelModal').classList.add('hidden');
        startSpeedRound(subjectKey, btn.dataset.level);
      });
    });
    document.getElementById('speedLevelModal').classList.remove('hidden');
  }

  function initSpeedLevelPicker() {
    const closeBtn = document.getElementById('slClose');
    if (closeBtn) closeBtn.addEventListener('click', () => document.getElementById('speedLevelModal').classList.add('hidden'));
  }

  let G = { kind: 'speed', subject: null, queue: [], idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };

  function stopGameTimer() {
    if (S.gameTimerInterval) clearInterval(S.gameTimerInterval);
    S.gameTimerInterval = null;
  }

  function startSpeedRound(subjectKey, level) {
    // Checked (read-only) before even showing the pace picker — no point
    // letting someone choose a difficulty for a game they can't play.
    // Actual consumption happens only once the game truly begins (below),
    // not here, so showing/abandoning the picker never costs a round.
    if (!hasGamesAccess()) { showGamesPaywall(); return; }
    if (!level) {
      showSpeedLevelPicker(subjectKey);
      return;
    }
    saveSafe(SPEED_LEVEL_KEY, level);
    const levelMeta = SPEED_LEVELS[level] || SPEED_LEVELS.standard;

    const bank = getBank(S.category);
    const subj = bank[subjectKey];
    if (!subj || !subj.objective || !subj.objective.length) {
      showToast('No questions available for this subject yet.');
      return;
    }
    consumeGameRound();

    const pool = subj.objective.slice();
    const { questions } = pickQuestions(S.category, subjectKey, pool, Math.min(pool.length, 25));

    G = { kind: 'speed', subject: subjectKey, level, queue: questions, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };
    S.mode = 'game';
    S.gameTimerSecs = levelMeta.secs;
    setLastActivity(S.category, subjectKey, 'game');

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    const catLabel = CONTENT_MANIFEST[S.category].label;
    const meta = subjectMeta(subjectKey);
    document.getElementById('gameSubjectBadge').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey} · ${catLabel} · ${levelMeta.label}`;

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);

    maybeTopUpQueue();
  }

  async function startSpeedRoundLive(subjectKey) {
    if (!hasGamesAccess()) { showGamesPaywall(); return; }
    showToast('Generating your AI Live round…', 5000);
    const questions = await fetchLiveMCQBatch(S.category, subjectKey, 15);
    if (!questions) return; // fetchLiveMCQBatch already showed the right toast/paywall
    consumeGameRound();

    const levelMeta = SPEED_LEVELS[getLastSpeedLevel()] || SPEED_LEVELS.standard;
    G = { kind: 'speed', subject: subjectKey, level: getLastSpeedLevel(), isLive: true, queue: shuffleArray(questions), idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };
    S.mode = 'game';
    S.gameTimerSecs = levelMeta.secs;
    setLastActivity(S.category, subjectKey, 'game');

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    const catLabel = CONTENT_MANIFEST[S.category].label;
    const meta = subjectMeta(subjectKey);
    document.getElementById('gameSubjectBadge').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey} · ${catLabel} · ✨ AI Live`;

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }

  async function startTrueFalseLive(subjectKey) {
    if (!hasGamesAccess()) { showGamesPaywall(); return; }
    showToast('Generating your AI Live round…', 5000);
    const questions = await fetchLiveMCQBatch(S.category, subjectKey, 15);
    if (!questions) return;
    consumeGameRound();

    const queue = mcqToTFItems(questions);
    G = { kind: 'tf', subject: subjectKey, isLive: true, queue, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };
    S.mode = 'tf';
    S.gameTimerSecs = GAME_DURATION_SECS;
    setLastActivity(S.category, subjectKey, 'tf');

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    const catLabel = CONTENT_MANIFEST[S.category].label;
    const meta = subjectMeta(subjectKey);
    document.getElementById('gameSubjectBadge').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey} · ${catLabel} · ✨ AI Live`;

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }


  /* ────────────────────────────────
     MULTIPLAYER WORD SCRAMBLE (turn-based prototype)
     Each participant gets a fixed per-word timer and plays in a fixed
     order on the SAME shared word list; the server enforces whose turn
     it is and grades every answer itself (never trusts a client-
     reported score, same principle as the existing quiz Challenge).
     State lives entirely in WS below, kept separate from G/S so it can
     never collide with a normal single-player game in progress.
  ──────────────────────────────── */
  const WS_WORD_SECONDS = 15;
  const WS_WORDS_PER_MATCH = 8;
  const WS_POLL_MS = 2500;
  let WS = null;

  function openWordScrambleChallengeSetup(subjectKey) {
    ensureUser(() => {
      WS = { code: null, hostSecret: null, isHost: false, myName: S.currentUser, subjectKey, pollTimer: null, turnTimer: null, secsLeft: 0, wordIdx: 0, answers: [], words: [] };
      renderWSSetup();
      document.getElementById('wsChallengeModal').classList.remove('hidden');
    });
  }

  function closeWSModal() {
    if (WS && WS.pollTimer) clearInterval(WS.pollTimer);
    if (WS && WS.turnTimer) clearInterval(WS.turnTimer);
    document.getElementById('wsChallengeModal').classList.add('hidden');
  }

  function initWSChallenge() {
    const modal = document.getElementById('wsChallengeModal');
    document.getElementById('wsClose').addEventListener('click', closeWSModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeWSModal(); });
  }

  function renderWSSetup() {
    const meta = WS.subjectKey ? subjectMeta(WS.subjectKey) : null;
    const subjectLabel = WS.subjectKey ? `${meta.icon} ${SUBJECT_LABELS[WS.subjectKey] || WS.subjectKey}` : 'Mixed subjects';
    document.getElementById('wsChallengeBody').innerHTML = `
      <h3 class="sheet-title" style="text-align:center;">🔀 Multiplayer Word Scramble</h3>
      <p class="sheet-sub" style="text-align:center;">${subjectLabel} — same words for everyone, ${WS_WORD_SECONDS}s per turn.</p>
      <button class="btn btn-primary btn-block" id="wsCreateBtn">Create a match →</button>
      <div style="margin:1rem 0; text-align:center; font-size:.78rem; color:var(--text-dim);">or join one</div>
      <input class="ws-input" id="wsJoinCodeInput" placeholder="Enter match code" style="text-transform:uppercase;">
      <button class="btn btn-ghost btn-block" id="wsJoinBtn">Join match</button>
    `;
    document.getElementById('wsCreateBtn').addEventListener('click', createWSChallenge);
    document.getElementById('wsJoinBtn').addEventListener('click', () => {
      const code = document.getElementById('wsJoinCodeInput').value.trim().toUpperCase();
      if (!code) { showToast('Enter a match code first.'); return; }
      joinWSChallenge(code);
    });
  }

  async function createWSChallenge() {
    const pool = WS.subjectKey ? scrambleWordsFor(S.category, WS.subjectKey) : scrambleWordsMixed(S.category);
    if (pool.length < 4) {
      showToast('Not enough Study Library words yet for a multiplayer match on this subject.');
      return;
    }
    const words = shuffleArray(pool).slice(0, WS_WORDS_PER_MATCH).map(c => c.term.toUpperCase());
    const code = generateChallengeCode();
    document.getElementById('wsChallengeBody').innerHTML = `<div class="lib-empty">Creating match…</div>`;
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        // syncMode 'ready' isn't used for its original "everyone marks
        // ready then starts simultaneously" purpose here — it's reused
        // purely so the backend actually populates `participants` on
        // join, which 'anytime' mode skips. Turn order + force_start
        // handle the real start-timing for scramble matches.
        body: JSON.stringify({ action: 'create', code, mode: 'scramble', words, creator: WS.myName, subject: WS.subjectKey, syncMode: 'ready' }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) { showToast('Could not create the match — please try again.'); renderWSSetup(); return; }
      WS.code = code;
      WS.hostSecret = data.hostSecret;
      WS.isHost = true;
      WS.words = words;
      showToast('Match created — share the code!', 2500);
      renderWSWaitingRoom({ participants: { [WS.myName]: true }, turnOrder: [WS.myName] });
      WS.pollTimer = setInterval(pollWSWaitingRoom, WS_POLL_MS);
    } catch (err) {
      showToast('Could not create the match — check your connection.');
      renderWSSetup();
    }
  }

  async function joinWSChallenge(code) {
    document.getElementById('wsChallengeBody').innerHTML = `<div class="lib-empty">Joining…</div>`;
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'join', code, name: WS.myName }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok || !data.challenge) {
        showToast(res.status === 410 ? 'That match has already started or ended.' : 'Match not found — check the code.');
        renderWSSetup();
        return;
      }
      if (data.challenge.contentMode !== 'scramble') {
        showToast('That code is for a regular quiz challenge, not Word Scramble.');
        renderWSSetup();
        return;
      }
      WS.code = code;
      WS.isHost = false;
      WS.words = data.challenge.words || [];
      if (data.challenge.startedAt) {
        // Rare edge case — joined right as the host started. Just fall
        // straight into normal turn-polling instead of a waiting room
        // that would never actually be needed.
        startWSPolling();
      } else {
        renderWSWaitingRoom(data.challenge);
        WS.pollTimer = setInterval(pollWSWaitingRoom, WS_POLL_MS);
      }
    } catch (err) {
      showToast('Could not join — check your connection.');
      renderWSSetup();
    }
  }

  function renderWSWaitingRoom(challenge) {
    const names = Object.keys(challenge.participants || {});
    document.getElementById('wsChallengeBody').innerHTML = `
      <h3 class="sheet-title" style="text-align:center;">🔀 Waiting Room</h3>
      <div class="ws-code-display">${WS.code}</div>
      <p class="sheet-sub" style="text-align:center;">Share this code — players who join before the match starts get a turn.</p>
      <p class="sheet-sub" style="text-align:center; font-weight:700;">Joined (${names.length}): ${names.join(', ')}</p>
      ${WS.isHost
        ? `<button class="btn btn-primary btn-block" id="wsStartMatchBtn">Start Match →</button>`
        : `<div class="ws-turn-badge">⏳ Waiting for the host to start the match…</div>`}
    `;
    if (WS.isHost) {
      document.getElementById('wsStartMatchBtn').addEventListener('click', () => {
        if (names.length < 2) {
          if (!confirm('Only you have joined so far — start anyway?')) return;
        }
        startWSMatch();
      });
    }
  }

  async function pollWSWaitingRoom() {
    if (!WS || !WS.code) return;
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'status', code: WS.code }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) return;
      if (data.startedAt) {
        clearInterval(WS.pollTimer); WS.pollTimer = null;
        startWSPolling();
        return;
      }
      renderWSWaitingRoom({ participants: data.participants || {} });
    } catch (err) { /* transient — next poll tries again */ }
  }

  async function startWSMatch() {
    document.getElementById('wsChallengeBody').innerHTML = `<div class="lib-empty">Starting match…</div>`;
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'force_start', code: WS.code, hostSecret: WS.hostSecret }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) { showToast('Could not start the match — please try again.'); return; }
      clearInterval(WS.pollTimer); WS.pollTimer = null;
      startWSPolling();
    } catch (err) {
      showToast('Could not start the match — check your connection.');
    }
  }

  function startWSPolling() {
    renderWSWaiting(null);
    pollWSStatus();
    WS.pollTimer = setInterval(pollWSStatus, WS_POLL_MS);
  }

  async function pollWSStatus() {
    if (!WS || !WS.code) return;
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'status', code: WS.code }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) return; // transient network hiccup — next poll tries again
      if (data.ended) {
        clearInterval(WS.pollTimer); WS.pollTimer = null;
        renderWSResults(data.scores || {});
        return;
      }
      if (data.currentTurn === WS.myName) {
        clearInterval(WS.pollTimer); WS.pollTimer = null;
        startMyWSTurn();
        return;
      }
      renderWSWaiting(data);
    } catch (err) { /* transient — next poll tries again */ }
  }

  function renderWSWaiting(status) {
    const waitingFor = status && status.currentTurn ? status.currentTurn : 'the first player';
    const names = status && status.turnOrder ? status.turnOrder.join(', ') : WS.myName;
    document.getElementById('wsChallengeBody').innerHTML = `
      <h3 class="sheet-title" style="text-align:center;">🔀 Match Code</h3>
      <div class="ws-code-display">${WS.code}</div>
      <div class="ws-turn-badge">⏳ Waiting for ${waitingFor}'s turn…</div>
      <p class="sheet-sub" style="text-align:center;">Players so far: ${names}</p>
      <p class="sheet-sub" style="text-align:center; font-size:.72rem;">This updates automatically — no need to refresh.</p>
    `;
  }

  function startMyWSTurn() {
    WS.wordIdx = 0;
    WS.answers = [];
    playNextWSWord();
  }

  function playNextWSWord() {
    if (WS.wordIdx >= WS.words.length) { finishMyWSTurn(); return; }
    const word = WS.words[WS.wordIdx];
    const scrambled = scrambleLetters(word).join('');
    WS.secsLeft = WS_WORD_SECONDS;

    document.getElementById('wsChallengeBody').innerHTML = `
      <div class="ws-turn-badge">✨ Your turn! Word ${WS.wordIdx + 1} of ${WS.words.length}</div>
      <div class="ws-timer" id="wsTimerDisplay">${WS.secsLeft}s</div>
      <div class="ws-word-display">${scrambled}</div>
      <input class="ws-input" id="wsWordInput" placeholder="Type the unscrambled word" autocomplete="off" autocapitalize="characters">
      <button class="btn btn-primary btn-block" id="wsSubmitWordBtn">Submit →</button>
    `;
    const input = document.getElementById('wsWordInput');
    input.focus();
    const submit = () => {
      clearInterval(WS.turnTimer);
      WS.answers.push(input.value.trim());
      WS.wordIdx++;
      playNextWSWord();
    };
    document.getElementById('wsSubmitWordBtn').addEventListener('click', submit);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });

    clearInterval(WS.turnTimer);
    WS.turnTimer = setInterval(() => {
      WS.secsLeft--;
      const timerEl = document.getElementById('wsTimerDisplay');
      if (timerEl) timerEl.textContent = WS.secsLeft + 's';
      if (WS.secsLeft <= 0) { clearInterval(WS.turnTimer); WS.answers.push(input.value.trim()); WS.wordIdx++; playNextWSWord(); }
    }, 1000);
  }

  async function finishMyWSTurn() {
    document.getElementById('wsChallengeBody').innerHTML = `<div class="lib-empty">Submitting your turn…</div>`;
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'submit_turn', code: WS.code, student: WS.myName, answers: WS.answers }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        showToast('Could not submit your turn — please try again.', 3500);
        renderWSWaiting(null);
        return;
      }
      showToast(`You got ${data.score}/${data.total}!`, 2800);
      if (data.ended) { renderWSResults(data.scores || {}); return; }
      startWSPolling();
    } catch (err) {
      showToast('Could not submit your turn — check your connection.', 3500);
    }
  }

  function renderWSResults(scores) {
    const rows = Object.entries(scores).sort((a, b) => b[1].score - a[1].score);
    document.getElementById('wsChallengeBody').innerHTML = `
      <h3 class="sheet-title" style="text-align:center;">🏆 Match Results</h3>
      ${rows.map(([name, s], i) => `
        <div class="ws-leaderboard-row ${name === WS.myName ? 'me' : ''}">
          <span>${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1) + '.'} ${name}</span>
          <span>${s.score}/${s.total}</span>
        </div>
      `).join('')}
      <button class="btn btn-primary btn-block" id="wsDoneBtn" style="margin-top:1rem;">Done</button>
    `;
    document.getElementById('wsDoneBtn').addEventListener('click', closeWSModal);
  }


  function updateGameTimerDisplay() {
    const el = document.getElementById('gameTimer');
    el.textContent = S.gameTimerSecs;
    el.classList.toggle('urgent', S.gameTimerSecs <= 10);
  }

  function renderGameQuestion() {
    if (G.idx >= G.queue.length) {
      // Ran out despite top-up attempts — end gracefully rather than error.
      stopGameTimer();
      finishSpeedRound();
      return;
    }
    if (G.kind === 'tf') renderTFItem();
    else if (G.kind === 'sort') renderSortItem();
    else if (G.kind === 'scramble') renderScrambleItem();
    else renderSpeedItem(); // covers 'speed' AND 'sequence' — sequence items are MCQ-shaped, same render/select path
  }

  function renderSpeedItem() {
    const q = G.queue[G.idx];
    const body = document.getElementById('gameBody');
    const letters = ['A', 'B', 'C', 'D'];
    body.innerHTML = `
      <div class="game-q-meta">Question ${G.idx + 1}${q.aiGenerated ? ' · ✨' : ''}</div>
      <div class="game-q-text">${safe(q.question)}</div>
      <div class="game-options" id="gameOptions">
        ${q.options.map((opt, i) => `
          <button class="game-opt" data-i="${i}">${letters[i]}. ${safe(opt)}</button>
        `).join('')}
      </div>`;

    body.querySelectorAll('.game-opt').forEach(btn => {
      btn.addEventListener('click', () => selectGameAnswer(parseInt(btn.dataset.i, 10)));
    });

    maybeTopUpQueue();
  }

  /* ────────────────────────────────
     TRUE OR FALSE BLITZ
     Same rapid-fire rhythm as Speed Round, completely different
     interaction: two giant tap targets instead of a 4-option grid.
     Statements are derived on the fly from the existing MCQ bank —
     no new data, no AI needed. Each source question yields a "true"
     statement (using the real answer) and a "false" one (using a
     wrong option), roughly doubling the effective pool.
  ──────────────────────────────── */
  /** Extracted from buildTFQueue so the AI Live path can reuse the exact
   * same MCQ-to-true/false transform instead of a second, potentially
   * drifting copy of this logic. */
  function mcqToTFItems(questions) {
    const items = [];
    questions.forEach(q => {
      if (!q.options || q.options.length < 2) return;
      items.push({
        id: q.id + '-t', sourceId: q.id,
        statement: `${q.question} — Is the answer "${q.options[q.answer]}"?`,
        isTrue: true, explanation: q.explanation || '',
      });
      const wrongIdxs = q.options.map((_, i) => i).filter(i => i !== q.answer);
      if (wrongIdxs.length) {
        const wrongIdx = wrongIdxs[Math.floor(Math.random() * wrongIdxs.length)];
        items.push({
          id: q.id + '-f', sourceId: q.id,
          statement: `${q.question} — Is the answer "${q.options[wrongIdx]}"?`,
          isTrue: false, explanation: q.explanation || '',
        });
      }
    });
    return shuffleArray(items);
  }

  function buildTFQueue(subjectKey) {
    const bank = getBank(S.category);
    const pool = (bank[subjectKey].objective || []).slice();
    return mcqToTFItems(pool);
  }

  /** Shared by both AI Live modes. Unlike the normal top-up flow, this
   * generates the WHOLE round in one batch call up front rather than
   * one call per move — a live game needing an API round-trip on every
   * single question would be slow (real latency mid-timer) and far more
   * expensive (many small calls instead of one). Costs exactly 1 AI
   * credit, same as every other generation in the app, regardless of
   * how many questions come back in the batch. Requires BOTH a games
   * round AND an AI credit, since it's genuinely both things at once —
   * playing a game, and consuming fresh AI generation. */
  async function fetchLiveMCQBatch(category, subjectKey, count) {
    if (!hasAICredit()) { showAIPaywall(); return null; }
    const bank = getBank(category);
    const subj = bank[subjectKey] || (bank[subjectKey] = { objective: [] });
    const avoid = (subj.objective || []).slice(-40).map(q => q.question);
    try {
      const res = await fetch(API_BASE + '/api/generate-questions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category, subject: SUBJECT_LABELS[subjectKey] || subjectKey,
          count, avoidQuestions: avoid,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok || !data.questions || !data.questions.length) {
        showToast('Could not start an AI Live round right now — please try again shortly.');
        return null;
      }
      consumeAICredit();
      // Persisted the same way as everything else generated tonight —
      // an AI Live round's questions become permanent additions to the
      // subject's regular bank too, not just a one-off for this round.
      subj.objective = (subj.objective || []).concat(data.questions);
      saveAIGeneratedItems(category, subjectKey, 'objective', data.questions);
      return data.questions;
    } catch (err) {
      showToast('Could not start an AI Live round right now — please try again shortly.');
      return null;
    }
  }

  function startTrueFalseBlitz(subjectKey) {
    if (!gateGameStart()) return;
    const bank = getBank(S.category);
    const subj = bank[subjectKey];
    if (!subj || !subj.objective || !subj.objective.length) {
      showToast('No questions available for this subject yet.');
      return;
    }
    consumeGameRound();

    const queue = buildTFQueue(subjectKey);
    G = { kind: 'tf', subject: subjectKey, queue, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };
    S.mode = 'tf';
    S.gameTimerSecs = GAME_DURATION_SECS;
    setLastActivity(S.category, subjectKey, 'tf');

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    const catLabel = CONTENT_MANIFEST[S.category].label;
    const meta = subjectMeta(subjectKey);
    document.getElementById('gameSubjectBadge').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey} · ${catLabel}`;

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }

  function renderTFItem() {
    const item = G.queue[G.idx];
    const body = document.getElementById('gameBody');
    body.innerHTML = `
      <div class="game-q-meta">Statement ${G.idx + 1}</div>
      <div class="tf-statement">${safe(item.statement)}</div>
      <div class="tf-buttons">
        <button class="tf-btn tf-false" data-guess="false">✗<span>False</span></button>
        <button class="tf-btn tf-true" data-guess="true">✓<span>True</span></button>
      </div>`;
    body.querySelector('[data-guess="true"]').addEventListener('click', () => selectTFAnswer(true));
    body.querySelector('[data-guess="false"]').addEventListener('click', () => selectTFAnswer(false));
  }

  function selectTFAnswer(guessTrue) {
    if (G.locked) return;
    G.locked = true;
    const item = G.queue[G.idx];
    const isCorrect = guessTrue === item.isTrue;
    G.attempted++;
    G.usedIds.push(item.sourceId);

    const trueBtn = document.querySelector('.tf-btn.tf-true');
    const falseBtn = document.querySelector('.tf-btn.tf-false');
    const correctBtn = item.isTrue ? trueBtn : falseBtn;
    const guessedBtn = guessTrue ? trueBtn : falseBtn;
    correctBtn.classList.add('tf-correct');
    if (!isCorrect) guessedBtn.classList.add('tf-incorrect');
    if (isCorrect) burstParticlesFromElement(correctBtn);

    if (isCorrect) {
      G.correct++;
      G.streak++;
      G.bestStreak = Math.max(G.bestStreak, G.streak);
      const bonus = G.streak >= 5 ? 3 : G.streak >= 3 ? 2 : 1;
      G.score += 10 * bonus;
      if (G.streak > 0 && G.streak % 3 === 0) flashStreak(G.streak);
    } else {
      G.streak = 0;
    }

    pulseStat('gameScore', G.score);
    pulseStat('gameStreak', G.streak);

    setTimeout(() => {
      G.locked = false;
      G.idx++;
      if (S.gameTimerSecs > 0) renderGameQuestion();
    }, GAME_LOCK_MS);
  }

  /* ────────────────────────────────
     CATEGORY SORT
     A fourth, genuinely different mechanic: classification, not
     question-answering. Terms from several subjects get mixed
     together; the player taps which subject each one belongs to.
     Spans multiple subjects by design, so it skips the subject
     picker entirely and pulls from Study Library flashcards across
     the current category.
  ──────────────────────────────── */
  /* ────────────────────────────────
     FORMULA RUSH
     Reuses Study Library formula-sheet entries directly (title + formula
     string) — zero new content authoring, same principle as Word Scramble.
     MCQ-shaped, so it reuses renderSpeedItem/selectGameAnswer untouched.
  ──────────────────────────────── */
  function formulasFor(category, subjectKey) {
    const resBank = getResourceBank(category);
    const r = resBank[subjectKey] || { formulas: [] };
    return (r.formulas || []).filter(f => f.title && f.formula);
  }

  function formulasMixed(category) {
    const resBank = getResourceBank(category);
    let all = [];
    Object.keys(resBank).forEach(k => {
      const r = resBank[k];
      (r.formulas || []).forEach(f => { if (f.title && f.formula) all.push(f); });
    });
    return all;
  }

  function buildFormulaQueue(allFormulas, poolFormulas) {
    // allFormulas = the ones actually being asked about, poolFormulas = wider
    // set to draw wrong-answer formula strings from (avoids only ever having
    // 2-3 formulas to pick wrong answers from on a thin subject).
    return shuffleArray(allFormulas).map((f, i) => {
      const distractorPool = poolFormulas.filter(p => p.formula !== f.formula);
      const distractors = shuffleArray(distractorPool).slice(0, 3).map(p => p.formula);
      while (distractors.length < 3) distractors.push(f.formula + ' '.repeat(distractors.length + 1)); // pad on a very thin pool — shouldn't normally happen given the length checks before calling this
      const options = shuffleArray([f.formula, ...distractors]);
      return {
        id: 'formula-' + i + '-' + f.title,
        question: f.title,
        options,
        answer: options.indexOf(f.formula),
      };
    });
  }

  function startFormulaRush(subjectKey) {
    if (!gateGameStart()) return;
    const isMixed = subjectKey === null;
    let formulas = isMixed ? formulasMixed(S.category) : formulasFor(S.category, subjectKey);
    // Defensive only — the subject picker already disables any subject
    // below this threshold, so a named subject landing here thin would
    // mean a data change since the picker was rendered, not normal flow.
    if (!isMixed && formulas.length < 6) formulas = formulasMixed(S.category);
    if (formulas.length < 4) {
      showToast('Not enough formula sheet content yet for Formula Rush.');
      return;
    }
    consumeGameRound();
    const pool = formulasMixed(S.category); // always draw distractors from the widest pool available
    const queue = buildFormulaQueue(formulas.slice(0, 20), pool);

    G = { kind: 'formula', subject: subjectKey, queue, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };
    S.mode = 'formula';
    S.gameTimerSecs = GAME_DURATION_SECS;
    setLastActivity(S.category, subjectKey, 'formula');

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    const catLabel = CONTENT_MANIFEST[S.category].label;
    if (isMixed) {
      document.getElementById('gameSubjectBadge').textContent = `🔀 Mixed Subjects · ${catLabel}`;
    } else {
      const meta = subjectMeta(subjectKey);
      document.getElementById('gameSubjectBadge').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey} · ${catLabel}`;
    }

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }

  /* ────────────────────────────────
     EQUATION BUILDER (v1 — scoped down from the original drag-and-drop
     spec to a solve-for-x MCQ format. The step-by-step draggable-operations
     version needs real touch-device testing to get right on mobile, which
     isn't possible in this build environment — safer to ship a reliable v1
     now and revisit the richer interaction later with on-device testing.
     Procedurally generated, same zero-content-dependency principle as
     Sequence — reuses the same MCQ render/select path.
  ──────────────────────────────── */
  function generateEquationItem(usedQuestions) {
    let a, b, x, c, questionText;
    let attempts = 0;
    do {
      attempts++;
      a = 2 + Math.floor(Math.random() * 8);      // coefficient 2–9
      x = 2 + Math.floor(Math.random() * 11);      // the answer, 2–12
      const subtract = Math.random() < 0.5;
      // Cap b so a*x − b never goes negative or to zero — keeps every
      // puzzle a clean positive-number equation either way.
      b = subtract ? (1 + Math.floor(Math.random() * Math.min(20, a * x - 1))) : (1 + Math.floor(Math.random() * 20));
      c = subtract ? a * x - b : a * x + b;
      questionText = `${a}x ${subtract ? '−' : '+'} ${b} = ${c}`;
    } while (usedQuestions.has(questionText) && attempts < 10);
    usedQuestions.add(questionText);

    const distractors = new Set();
    // Deliberately include the classic mistake (forgetting to isolate x
    // correctly) alongside plain nearby wrong answers, so wrong options
    // are plausible rather than obviously-off.
    const commonMistakes = [c, Math.round(c / a), x + 1, x - 1, x + 2, x - 2].filter(n => n !== x && n > 0);
    commonMistakes.forEach(n => { if (distractors.size < 3) distractors.add(n); });
    let fallback = x + 3;
    while (distractors.size < 3) { if (fallback !== x && !distractors.has(fallback)) distractors.add(fallback); fallback++; }

    const options = shuffleArray([x, ...Array.from(distractors)]);
    return {
      id: 'eq-' + questionText,
      question: questionText,
      options: options.map(String),
      answer: options.indexOf(x),
    };
  }

  function startEquationBuilder() {
    if (!gateGameStart()) return;
    consumeGameRound(); // procedurally generated, nothing that can fail — safe to consume immediately after the gate
    const usedQuestions = new Set();
    const queue = [];
    for (let i = 0; i < 25; i++) queue.push(generateEquationItem(usedQuestions));

    G = { kind: 'equation', subject: null, queue, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };
    S.mode = 'equation';
    S.gameTimerSecs = GAME_DURATION_SECS;

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    document.getElementById('gameSubjectBadge').textContent = `🧩 Solve for x · ${CONTENT_MANIFEST[S.category].label}`;

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }

  /* ────────────────────────────────
     SEQUENCE
     Procedurally generated number patterns — deliberately has NO content
     dependency (no bank, no AI call needed), so it works exactly the same
     regardless of how thin any subject's question bank is. Items are built
     in the same {question, options, answer} shape as bank questions, so it
     reuses renderSpeedItem/selectGameAnswer untouched — no new render path.
  ──────────────────────────────── */
  function generateSequenceItem(usedQuestions) {
    const types = ['arithmetic', 'geometric', 'squares', 'fibonacci'];
    let seq, answer, questionText;
    let attempts = 0;
    do {
      attempts++;
      const type = types[Math.floor(Math.random() * types.length)];
      if (type === 'arithmetic') {
        const start = 1 + Math.floor(Math.random() * 20);
        const step = 2 + Math.floor(Math.random() * 8);
        seq = [0, 1, 2, 3, 4].map(i => start + i * step);
      } else if (type === 'geometric') {
        const start = 1 + Math.floor(Math.random() * 5);
        const ratio = Math.random() < 0.5 ? 2 : 3;
        seq = [0, 1, 2, 3, 4].map(i => start * Math.pow(ratio, i));
      } else if (type === 'squares') {
        const startN = 1 + Math.floor(Math.random() * 6);
        seq = [0, 1, 2, 3, 4].map(i => Math.pow(startN + i, 2));
      } else {
        let a = 1 + Math.floor(Math.random() * 5), b = 1 + Math.floor(Math.random() * 5);
        seq = [a, b];
        for (let i = 2; i < 5; i++) seq.push(seq[i - 1] + seq[i - 2]);
      }
      answer = seq[4];
      questionText = seq.slice(0, 4).join(', ') + ', ?';
    } while (usedQuestions.has(questionText) && attempts < 10);
    usedQuestions.add(questionText);

    const distractors = new Set();
    let guardCount = 0;
    while (distractors.size < 3 && guardCount < 30) {
      guardCount++;
      const magnitude = Math.max(2, Math.round(Math.abs(answer) * 0.2)) || 3;
      const delta = (Math.floor(Math.random() * magnitude * 2) - magnitude) || (Math.random() < 0.5 ? 1 : -1);
      const wrong = answer + delta;
      if (wrong !== answer && wrong > 0 && !distractors.has(wrong)) distractors.add(wrong);
    }
    // Guard against a thin distractor set on tiny/edge sequences.
    let fallback = answer + 1;
    while (distractors.size < 3) { if (fallback !== answer && !distractors.has(fallback)) distractors.add(fallback); fallback++; }

    const options = shuffleArray([answer, ...Array.from(distractors)]);
    return {
      id: 'seq-' + questionText,
      question: questionText,
      options: options.map(String),
      answer: options.indexOf(answer),
    };
  }

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function startSequenceGame() {
    if (!gateGameStart()) return;
    consumeGameRound(); // procedurally generated, nothing that can fail — safe to consume immediately after the gate
    const usedQuestions = new Set();
    const queue = [];
    for (let i = 0; i < 25; i++) queue.push(generateSequenceItem(usedQuestions));

    G = { kind: 'sequence', subject: null, queue, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false };
    S.mode = 'sequence';
    S.gameTimerSecs = GAME_DURATION_SECS;

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    document.getElementById('gameSubjectBadge').textContent = `🔢 Number Patterns · ${CONTENT_MANIFEST[S.category].label}`;

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }

  /* ────────────────────────────────
     WORD SCRAMBLE
     Reuses Study Library flashcard terms — zero new content authoring
     needed. Different mechanic from every other game: tap scrambled
     letters in order to spell the word, rather than picking from options.
  ──────────────────────────────── */
  function scrambleWordsFor(category, subjectKey) {
    const resBank = getResourceBank(category);
    const r = resBank[subjectKey] || { flashcards: [] };
    return (r.flashcards || []).filter(c => /^[A-Za-z]+$/.test(c.term) && c.term.length >= 4 && c.term.length <= 12);
  }

  function scrambleWordsMixed(category) {
    const resBank = getResourceBank(category);
    let all = [];
    Object.keys(resBank).forEach(k => {
      const r = resBank[k];
      (r.flashcards || []).forEach(c => {
        if (/^[A-Za-z]+$/.test(c.term) && c.term.length >= 4 && c.term.length <= 12) all.push(c);
      });
    });
    return all;
  }

  function scrambleLetters(word) {
    const upper = word.toUpperCase();
    let arr = upper.split('');
    let tries = 0;
    do {
      arr = shuffleArray(arr);
      tries++;
    } while (arr.join('') === upper && upper.length > 1 && tries < 10);
    return arr;
  }

  let _scrambleBuilt = [];
  let _scrambleLetters = [];

  function startWordScramble(subjectKey) {
    if (!gateGameStart()) return;
    const isMixed = subjectKey === null;
    let words = isMixed ? scrambleWordsMixed(S.category) : scrambleWordsFor(S.category, subjectKey);
    // Defensive only — the picker already disables any subject below this
    // threshold, same reasoning as Formula Rush above.
    if (!isMixed && words.length < 6) words = scrambleWordsMixed(S.category);
    if (words.length < 4) {
      showToast('Not enough Study Library words yet for Word Scramble.');
      return;
    }
    consumeGameRound();
    words = shuffleArray(words).slice(0, 15);
    const queue = words.map((c, i) => ({ id: 'scr-' + i + '-' + c.term, word: c.term.toUpperCase(), definition: c.definition || '' }));

    G = { kind: 'scramble', subject: subjectKey, queue, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false, attemptLog: [] };
    S.mode = 'scramble';
    S.gameTimerSecs = GAME_DURATION_SECS;
    setLastActivity(S.category, subjectKey, 'scramble');

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    const catLabel = CONTENT_MANIFEST[S.category].label;
    if (isMixed) {
      document.getElementById('gameSubjectBadge').textContent = `🔀 Mixed Subjects · ${catLabel}`;
    } else {
      const meta = subjectMeta(subjectKey);
      document.getElementById('gameSubjectBadge').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey} · ${catLabel}`;
    }

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }

  function renderScrambleItem() {
    const item = G.queue[G.idx];
    _scrambleLetters = scrambleLetters(item.word);
    _scrambleBuilt = [];
    const body = document.getElementById('gameBody');
    body.innerHTML = `
      <div class="scramble-layout">
        <div class="scramble-main">
          <div class="game-q-meta">Word ${G.idx + 1}${G.queue.length ? ' / ' + G.queue.length : ''}</div>
          <div class="scramble-built" id="scrambleBuilt"></div>
          <p class="scramble-hint">Tap a placed letter to remove just that one</p>
          <div class="scramble-letters" id="scrambleLetters">
            ${_scrambleLetters.map((l, i) => `<button class="scramble-letter" data-i="${i}">${safe(l)}</button>`).join('')}
          </div>
          <button class="btn btn-ghost btn-block" id="scrambleClearBtn" style="margin-top:.75rem;">Clear all</button>
        </div>
        <div class="scramble-attempted" id="scrambleAttempted"></div>
      </div>
    `;
    renderScrambleBuilt();
    renderScrambleAttempted();
    document.getElementById('scrambleClearBtn').addEventListener('click', () => {
      if (G.locked) return;
      _scrambleBuilt = [];
      renderScrambleBuilt();
      body.querySelectorAll('.scramble-letter').forEach(b => b.classList.remove('used'));
    });
    body.querySelectorAll('.scramble-letter').forEach(btn => {
      btn.addEventListener('click', () => tapScrambleLetter(parseInt(btn.dataset.i, 10)));
    });
  }

  // Pinned side list of every word attempted so far this round — most
  // recent first, so a player can glance back at what they've already
  // gotten right or wrong without it interrupting the current word.
  function renderScrambleAttempted() {
    const el = document.getElementById('scrambleAttempted');
    if (!el) return;
    if (!G.attemptLog || !G.attemptLog.length) {
      el.innerHTML = '<div class="scramble-attempted-empty">Solved words appear here</div>';
      return;
    }
    el.innerHTML = G.attemptLog.slice().reverse().map(a =>
      `<div class="scramble-chip ${a.correct ? 'sc-correct' : 'sc-wrong'}" title="${safe(a.word)}">
        <span class="sc-mark">${a.correct ? '✓' : '✕'}</span><span class="sc-word">${safe(a.word)}</span>
      </div>`
    ).join('');
  }

  function renderScrambleBuilt() {
    const built = document.getElementById('scrambleBuilt');
    const item = G.queue[G.idx];
    const filled = _scrambleBuilt.map(i => _scrambleLetters[i]);
    const slots = item.word.length;
    built.innerHTML = Array.from({ length: slots }, (_, i) =>
      `<span class="scramble-slot ${filled[i] ? 'filled' : ''}" data-pos="${i}">${filled[i] ? safe(filled[i]) : ''}</span>`
    ).join('');
    built.querySelectorAll('.scramble-slot.filled').forEach(slot => {
      slot.addEventListener('click', () => removeScrambleLetterAt(parseInt(slot.dataset.pos, 10)));
    });
  }

  /** Removes exactly the one letter at this position in the built word —
   * not a full reset. Everything after it shifts left to fill the gap
   * (same as backspacing in the middle of a text field), and the tapped
   * letter tile becomes available again. Lets a player fix one wrong
   * letter without losing everything else they'd already placed. */
  function removeScrambleLetterAt(pos) {
    if (G.locked) return;
    if (pos < 0 || pos >= _scrambleBuilt.length) return;
    const tileIndex = _scrambleBuilt[pos];
    _scrambleBuilt.splice(pos, 1);
    const tileBtn = document.querySelector(`.scramble-letter[data-i="${tileIndex}"]`);
    if (tileBtn) tileBtn.classList.remove('used');
    renderScrambleBuilt();
  }

  function tapScrambleLetter(i) {
    if (G.locked) return;
    const btn = document.querySelector(`.scramble-letter[data-i="${i}"]`);
    if (!btn || btn.classList.contains('used')) return;
    _scrambleBuilt.push(i);
    btn.classList.add('used');
    renderScrambleBuilt();

    const item = G.queue[G.idx];
    if (_scrambleBuilt.length === item.word.length) checkScrambleAnswer();
  }

  function checkScrambleAnswer() {
    G.locked = true;
    const item = G.queue[G.idx];
    const guess = _scrambleBuilt.map(i => _scrambleLetters[i]).join('');
    const isCorrect = guess === item.word;
    G.attempted++;
    G.usedIds.push(item.id);
    G.attemptLog.push({ word: item.word, correct: isCorrect });
    renderScrambleAttempted();

    const built = document.getElementById('scrambleBuilt');
    built.classList.add(isCorrect ? 'scramble-correct' : 'scramble-incorrect');
    if (isCorrect) burstParticlesFromElement(built);
    else built.classList.add('wrong-shake-once');

    const body = document.getElementById('gameBody');
    const defEl = document.createElement('div');
    defEl.className = 'scramble-def';
    defEl.textContent = isCorrect
      ? (item.definition ? `✓ ${item.word} — ${item.definition}` : `✓ ${item.word}`)
      : (item.definition ? `The word was ${item.word} — ${item.definition}` : `The word was ${item.word}`);
    body.appendChild(defEl);

    if (isCorrect) {
      G.correct++;
      G.streak++;
      G.bestStreak = Math.max(G.bestStreak, G.streak);
      const bonus = G.streak >= 5 ? 3 : G.streak >= 3 ? 2 : 1;
      G.score += 10 * bonus;
      if (G.streak > 0 && G.streak % 3 === 0) flashStreak(G.streak);
    } else {
      G.streak = 0;
    }
    pulseStat('gameScore', G.score);
    pulseStat('gameStreak', G.streak);

    setTimeout(() => {
      G.locked = false;
      G.idx++;
      if (S.gameTimerSecs > 0) renderGameQuestion();
    }, 1700); // longer than GAME_LOCK_MS — gives time to actually read the definition
  }

  function buildCategorySortRound() {
    const resBank = getResourceBank(S.category);
    const manifest = CONTENT_MANIFEST[S.category];
    const eligible = shuffleArray(manifest.subjects.filter(s => ((resBank[s] || {}).flashcards || []).length >= 3));
    const bucketSubjects = eligible.slice(0, Math.min(4, eligible.length));

    // Some subjects legitimately share terms (e.g. "Democracy" is a real
    // flashcard in both Government and Civic Education) — if this
    // round happens to pick both, a term drawn from one bucket would
    // score as "wrong" if tapped in the other, even though the answer
    // is genuinely correct there too. Rather than deleting legitimate
    // content from either subject, exclude terms that appear in more
    // than one of THIS round's chosen buckets — dynamic, so it keeps
    // working correctly as content keeps growing, not just a one-off
    // patch for today's known overlaps.
    const termSubjectCount = {};
    bucketSubjects.forEach(subj => {
      const seen = new Set();
      (resBank[subj].flashcards || []).forEach(c => {
        const key = c.term.trim().toLowerCase();
        if (seen.has(key)) return; // don't double-count dupes within the same subject
        seen.add(key);
        termSubjectCount[key] = (termSubjectCount[key] || 0) + 1;
      });
    });

    const items = [];
    bucketSubjects.forEach(subj => {
      const cards = shuffleArray((resBank[subj].flashcards || []).slice())
        .filter(c => termSubjectCount[c.term.trim().toLowerCase()] === 1);
      cards.slice(0, 8).forEach(c => items.push({ id: subj + '::' + c.term, term: c.term, subject: subj }));
    });
    return { bucketSubjects, items: shuffleArray(items) };
  }

  function startCategorySort() {
    if (!gateGameStart()) return;
    const { bucketSubjects, items } = buildCategorySortRound();
    if (bucketSubjects.length < 2 || items.length < 6) {
      showToast('Not enough Study Library content yet across subjects for Category Sort.');
      return;
    }
    consumeGameRound();

    G = { kind: 'sort', subject: null, queue: items, idx: 0, score: 0, streak: 0, bestStreak: 0, correct: 0, attempted: 0, usedIds: [], locked: false, fetchingMore: false, bucketSubjects };
    S.mode = 'sort';
    S.gameTimerSecs = GAME_DURATION_SECS;

    document.getElementById('gameScore').textContent = '0';
    document.getElementById('gameStreak').textContent = '0';
    updateGameTimerDisplay();
    document.getElementById('gameSubjectBadge').textContent = `🗂 Mixed Subjects · ${CONTENT_MANIFEST[S.category].label}`;

    renderGameQuestion();
    showScreen('gameScreen');

    stopGameTimer();
    S.gameTimerInterval = setInterval(() => {
      S.gameTimerSecs--;
      updateGameTimerDisplay();
      if (S.gameTimerSecs <= 0) { stopGameTimer(); finishSpeedRound(); }
    }, 1000);
  }

  function renderSortItem() {
    const item = G.queue[G.idx];
    const body = document.getElementById('gameBody');
    body.innerHTML = `
      <div class="game-q-meta">Which subject does this belong to?</div>
      <div class="sort-term">${safe(item.term)}</div>
      <div class="sort-buckets" id="sortBuckets">
        ${G.bucketSubjects.map(s => {
          const meta = subjectMeta(s);
          return `<button class="sort-bucket" data-subject="${s}" style="border-color:${meta.color}55;">
            <span class="sort-bucket-icon">${meta.icon}</span>
            <span class="sort-bucket-label">${SUBJECT_LABELS[s] || s}</span>
          </button>`;
        }).join('')}
      </div>`;
    body.querySelectorAll('.sort-bucket').forEach(btn => {
      btn.addEventListener('click', () => selectSortAnswer(btn.dataset.subject));
    });
  }

  function selectSortAnswer(guessSubject) {
    if (G.locked) return;
    G.locked = true;
    const item = G.queue[G.idx];
    const isCorrect = guessSubject === item.subject;
    G.attempted++;
    G.usedIds.push(item.id);

    document.querySelectorAll('.sort-bucket').forEach(btn => {
      if (btn.dataset.subject === item.subject) { btn.classList.add('sort-correct'); if (isCorrect) burstParticlesFromElement(btn); }
      else if (btn.dataset.subject === guessSubject) btn.classList.add('sort-incorrect');
    });

    if (isCorrect) {
      G.correct++;
      G.streak++;
      G.bestStreak = Math.max(G.bestStreak, G.streak);
      const bonus = G.streak >= 5 ? 3 : G.streak >= 3 ? 2 : 1;
      G.score += 10 * bonus;
      if (G.streak > 0 && G.streak % 3 === 0) flashStreak(G.streak);
    } else {
      G.streak = 0;
    }
    pulseStat('gameScore', G.score);
    pulseStat('gameStreak', G.streak);

    setTimeout(() => {
      G.locked = false;
      G.idx++;
      if (S.gameTimerSecs > 0) renderGameQuestion();
    }, GAME_LOCK_MS);
  }

  function selectGameAnswer(i) {
    if (G.locked) return;
    G.locked = true;
    const q = G.queue[G.idx];
    const isCorrect = i === q.answer;
    G.attempted++;
    G.usedIds.push(q.id);

    const opts = document.querySelectorAll('#gameOptions .game-opt');
    opts.forEach((btn, bi) => {
      if (bi === q.answer) btn.classList.add('g-correct');
      else if (bi === i) btn.classList.add('g-incorrect');
      else btn.classList.add('g-dim');
    });
    if (isCorrect) burstParticlesFromElement(opts[i]);

    if (isCorrect) {
      G.correct++;
      G.streak++;
      G.bestStreak = Math.max(G.bestStreak, G.streak);
      const bonus = G.streak >= 5 ? 3 : G.streak >= 3 ? 2 : 1;
      G.score += 10 * bonus;
      if (G.streak > 0 && G.streak % 3 === 0) flashStreak(G.streak);
    } else {
      G.streak = 0;
    }

    pulseStat('gameScore', G.score);
    pulseStat('gameStreak', G.streak);

    setTimeout(() => {
      G.locked = false;
      G.idx++;
      if (S.gameTimerSecs > 0) renderGameQuestion();
    }, GAME_LOCK_MS);
  }

  function flashStreak(streak) {
    const bonus = streak >= 5 ? '3× points' : streak >= 3 ? '2× points' : '';
    const el = document.createElement('div');
    el.className = 'streak-flash';
    el.innerHTML = `
      <div class="sf-glow"></div>
      <div class="sf-text">🔥 ${streak} streak!</div>
      ${bonus ? `<div class="sf-bonus">${bonus}</div>` : ''}
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }

  /* ────────────────────────────────
     SHARED GAME-FEEL HELPERS
     Small, dependency-free effects used across every game: a particle
     burst fired from wherever the player tapped, a pop animation on the
     score/streak digits when they change, and an animated count-up for
     the results screen. Pure CSS keyframes + DOM, no canvas/library.
  ──────────────────────────────── */
  const FX_COLORS = ['#e85d4a', '#f5b942', '#16a34a', '#2563eb', '#7c3aed'];

  function burstParticles(x, y) {
    // Respect reduced-motion preferences — skip the effect entirely rather
    // than force motion on someone who's asked their device to avoid it.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const count = 10;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'fx-particle';
      const angle = (Math.PI * 2 * i) / count + (Math.random() * 0.4 - 0.2);
      const distance = 40 + Math.random() * 35;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;
      el.style.setProperty('--fx-end', `translate(${dx}px, ${dy}px)`);
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.background = FX_COLORS[i % FX_COLORS.length];
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 650);
    }
  }

  function burstParticlesFromElement(el) {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    burstParticles(rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  function pulseStat(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = value;
    el.classList.remove('stat-pop');
    void el.offsetWidth; // force reflow so the animation can retrigger on rapid consecutive updates
    el.classList.add('stat-pop');
  }

  function confettiBurst() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const count = 26;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div');
      el.className = 'fx-confetti';
      const startX = Math.random() * window.innerWidth;
      const fallX = (Math.random() - 0.5) * 120;
      const fallY = window.innerHeight * 0.5 + Math.random() * 200;
      const rotation = 180 + Math.random() * 540;
      el.style.setProperty('--fx-fall', `translate(${fallX}px, ${fallY}px) rotate(${rotation}deg)`);
      el.style.left = startX + 'px';
      el.style.top = '-20px';
      el.style.background = FX_COLORS[i % FX_COLORS.length];
      el.style.animationDelay = (Math.random() * 0.3) + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2200);
    }
  }

  function animateCounter(el, target, duration) {
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target;
      return;
    }
    const start = performance.now();
    el.classList.add('counting');
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic — fast start, gentle settle
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else { el.textContent = target; el.classList.remove('counting'); }
    }
    requestAnimationFrame(tick);
  }

  async function maybeTopUpQueue() {
    // Only 'speed' is actually reachable here (called from startSpeedRound
    // and the shared renderSpeedItem) AND has a matching item shape
    // ({question,options,answer}) for what this fetches. 'tf' was assumed
    // to have live top-up too in earlier notes — checked, and it doesn't:
    // renderTFItem() never calls this function, and even if it did, its
    // items are {statement,isTrue,sourceId}-shaped, incompatible with
    // this endpoint's MCQ output. 'formula' happens to produce
    // MCQ-shaped items (so it silently passed the old subject-only
    // guard) but its options are formula strings, not curriculum trivia
    // — topping it up here would inject real quiz questions into what's
    // supposed to be an exclusively formula-matching game. Explicit
    // allowlist instead of inferring from G.subject being set.
    if (G.kind !== 'speed') return;
    if (!G.subject) return; // shouldn't happen for 'speed', but stay defensive
    const remaining = G.queue.length - G.idx;
    if (remaining >= GAME_MIN_QUEUE || G.fetchingMore) return;
    if (!hasAICredit()) {
      // Still no blocking paywall mid-game — the game plays out fine on
      // whatever static questions remain either way. But now the player
      // actually knows why the variety dried up and how to fix it, once
      // per round rather than nagging on every low-queue check.
      if (!G._toldNoCredits) {
        G._toldNoCredits = true;
        showActionToast('Running low on fresh questions.', 'Unlock more →', () => showAIPaywall());
      }
      return;
    }
    G.fetchingMore = true;
    try {
      const bank = getBank(S.category)[G.subject];
      const avoid = (bank.objective || []).map(q => q.question).slice(0, 40);
      const res = await fetch(API_BASE + '/api/generate-questions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: S.category,
          subject: SUBJECT_LABELS[G.subject] || G.subject,
          count: 10,
          avoidQuestions: avoid,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok && data.questions.length) {
        consumeAICredit();
        G.queue = G.queue.concat(data.questions);
        // Previously only extended this round's in-memory queue — the
        // underlying bank never saw these questions, so even a second
        // Speed Round on the same subject in the same session wouldn't
        // benefit, let alone surviving reload. Now both fixed: persisted
        // via the same overlay as every other AI-generated content type,
        // and the subject's actual bank is extended too.
        bank.objective = (bank.objective || []).concat(data.questions);
        saveAIGeneratedItems(S.category, G.subject, 'objective', data.questions);
        const left = getAICredits().credits;
        showToast(`✨ +${data.questions.length} fresh AI questions added — 1 credit used (${left} left)`, 3200);
      }
    } catch (err) {
      // Silent fail — game just ends a little early if this doesn't work, no need to interrupt play.
    } finally {
      G.fetchingMore = false;
    }
  }

  function finishSpeedRound() {
    stopGameTimer();
    const pct = G.attempted ? Math.round((G.correct / G.attempted) * 100) : 0;
    if (G.subject && G.usedIds.length) markSeen(S.category, G.subject, G.usedIds);
    if (G.subject && G.attempted) recordMastery(S.category, G.subject, G.correct, G.attempted);
    recordSession(pct);
    renderGameResults(pct);
    showScreen('gameResultsScreen');
  }

  function renderGameResults(pct) {
    const body = document.getElementById('gameResultsBody');
    const gameTitle = G.kind === 'tf' ? '✓✗ True or False Blitz' : G.kind === 'sort' ? '🗂 Category Sort'
      : G.kind === 'sequence' ? '🔢 Sequence' : G.kind === 'scramble' ? '🔤 Word Scramble'
      : G.kind === 'formula' ? '🔢 Formula Rush' : G.kind === 'equation' ? '🧩 Equation Builder' : '⚡ Speed Round';
    const verdict = G.bestStreak >= 8 ? "🔥 On fire! Incredible streak." : G.bestStreak >= 4 ? "Nice streak — keep it up!" : "Good round — try to build a streak next time.";
    body.innerHTML = `
      <div class="game-result-hero">
        <div class="game-q-meta">${gameTitle} · ⏱ Time's up!</div>
        <div class="game-result-score" id="gameResultScore">0</div>
        <div class="game-result-sub">points</div>
        <p style="margin-top:1rem; font-size:.95rem; color:var(--text-mid);">${verdict}</p>
      </div>
      <div class="game-result-stats">
        <div class="grs-box"><span>${G.attempted}</span><label>Answered</label></div>
        <div class="grs-box"><span>${pct}%</span><label>Accuracy</label></div>
        <div class="grs-box"><span>${G.bestStreak}</span><label>Best Streak</label></div>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary btn-block" id="gameReplayBtn">Play Again →</button>
        <button class="btn btn-ghost btn-block" id="gameHomeBtn">Back to Home</button>
      </div>`;
    animateCounter(document.getElementById('gameResultScore'), G.score, 900);
    // A strong round earns a confetti moment — good streak or solid accuracy,
    // not just "any round finished", so it stays a real reward.
    if (G.bestStreak >= 5 || (G.attempted >= 5 && pct >= 80)) confettiBurst();
    // Only shown if the player actually ran into the credit wall this round
    // (flagged by maybeTopUpQueue) — not a generic upsell on every result.
    // Inserted before the action buttons, not after — otherwise someone
    // could tap "Play Again" before ever seeing it.
    if (G._toldNoCredits) {
      const banner = renderExpandBanner(
        body,
        `Running low on AI-generated questions in ${gameTitle}.`,
        'Unlock more →',
        () => showAIPaywall()
      );
      body.insertBefore(banner, document.querySelector('.result-actions'));
    }
    document.getElementById('gameReplayBtn').addEventListener('click', () => {
      // Play Again used to always restart offline, even if the round
      // just finished was AI Live — silently switching modes without
      // saying so. Now it respects whichever mode was actually played.
      if (G.isLive && G.kind === 'tf') startTrueFalseLive(G.subject);
      else if (G.isLive) startSpeedRoundLive(G.subject);
      else if (G.kind === 'tf') startTrueFalseBlitz(G.subject);
      else if (G.kind === 'sort') startCategorySort();
      else if (G.kind === 'sequence') startSequenceGame();
      else if (G.kind === 'scramble') startWordScramble(G.subject);
      else if (G.kind === 'formula') startFormulaRush(G.subject);
      else if (G.kind === 'equation') startEquationBuilder();
      else startSpeedRound(G.subject, G.level || getLastSpeedLevel());
    });
    document.getElementById('gameHomeBtn').addEventListener('click', () => { showScreen('homeScreen'); renderDashboardNudge(); updateStudyPlanBanner(); });
  }

  /* ────────────────────────────────
     MEMORY MATCH
     A genuinely different mechanic — no reading a question and picking
     an answer at all. Flip tiles to pair a flashcard term with its
     definition. Untimed pressure (clock counts up, not down) — this
     one is meant to feel calm, not urgent, unlike the two games above.
     Reuses Study Library's flashcard data directly.
  ──────────────────────────────── */
  let MEM = { subject: null, tiles: [], flippedIdx: [], matchedCount: 0, totalPairs: 0, moves: 0, startTime: 0, locked: false };

  function stopMemoryTimer() {
    if (S.memTimerInterval) clearInterval(S.memTimerInterval);
    S.memTimerInterval = null;
  }

  function startMemoryMatch(subjectKey) {
    if (!gateGameStart()) return;
    const resBank = getResourceBank(S.category);
    const cards = ((resBank[subjectKey] || {}).flashcards || []).slice();
    if (cards.length < 4) {
      showToast('Not enough flashcards for Memory Match on this subject yet.');
      return;
    }
    consumeGameRound();

    const shuffledCards = shuffleArray(cards);
    const pairCount = Math.min(6, shuffledCards.length);
    const chosen = shuffledCards.slice(0, pairCount);
    const tiles = [];
    chosen.forEach((c, i) => {
      tiles.push({ pairId: i, text: c.term, matched: false });
      tiles.push({ pairId: i, text: c.definition, matched: false });
    });
    const shuffledTiles = shuffleArray(tiles);

    MEM = { subject: subjectKey, tiles: shuffledTiles, flippedIdx: [], matchedCount: 0, totalPairs: pairCount, moves: 0, startTime: Date.now(), locked: false };
    setLastActivity(S.category, subjectKey, 'memory');

    document.getElementById('memMoves').textContent = '0';
    document.getElementById('memPairs').textContent = `0/${pairCount}`;
    document.getElementById('memTimer').textContent = '0:00';
    const meta = subjectMeta(subjectKey);
    document.getElementById('memSubjectBadge').textContent = `${meta.icon} ${SUBJECT_LABELS[subjectKey] || subjectKey} · ${CONTENT_MANIFEST[S.category].label}`;

    renderMemoryGrid();
    showScreen('memoryScreen');

    stopMemoryTimer();
    S.memTimerInterval = setInterval(updateMemoryTimerDisplay, 1000);
  }

  function updateMemoryTimerDisplay() {
    const secs = Math.floor((Date.now() - MEM.startTime) / 1000);
    const m = Math.floor(secs / 60), s = secs % 60;
    document.getElementById('memTimer').textContent = `${m}:${String(s).padStart(2, '0')}`;
  }

  function renderMemoryGrid() {
    const body = document.getElementById('memoryBody');
    body.innerHTML = `<div class="memory-grid">${MEM.tiles.map((t, i) => {
      const isFlipped = MEM.flippedIdx.includes(i) || t.matched;
      return `
      <button class="memory-tile ${t.matched ? 'matched' : ''} ${isFlipped ? 'flipped' : ''}" data-i="${i}" ${t.matched ? 'disabled' : ''}>
        <div class="memory-tile-inner">
          <div class="memory-tile-face memory-tile-back">?</div>
          <div class="memory-tile-face memory-tile-front">${safe(t.text)}</div>
        </div>
      </button>`;
    }).join('')}</div>`;

    body.querySelectorAll('.memory-tile').forEach(btn => {
      btn.addEventListener('click', () => flipMemoryTile(parseInt(btn.dataset.i, 10)));
    });
  }

  function flipMemoryTile(i) {
    if (MEM.locked) return;
    if (MEM.flippedIdx.includes(i)) return;
    if (MEM.tiles[i].matched) return;
    if (MEM.flippedIdx.length >= 2) return;

    MEM.flippedIdx.push(i);
    renderMemoryGrid();

    if (MEM.flippedIdx.length === 2) {
      MEM.moves++;
      document.getElementById('memMoves').textContent = MEM.moves;
      MEM.locked = true;
      const [a, b] = MEM.flippedIdx;
      const isMatch = a !== b && MEM.tiles[a].pairId === MEM.tiles[b].pairId;

      setTimeout(() => {
        if (isMatch) {
          MEM.tiles[a].matched = true;
          MEM.tiles[b].matched = true;
          MEM.matchedCount++;
          document.getElementById('memPairs').textContent = `${MEM.matchedCount}/${MEM.totalPairs}`;
        }
        MEM.flippedIdx = [];
        MEM.locked = false;
        renderMemoryGrid();
        if (MEM.matchedCount === MEM.totalPairs) finishMemoryMatch();
      }, isMatch ? 550 : 950);
    }
  }

  function finishMemoryMatch() {
    stopMemoryTimer();
    const secs = Math.floor((Date.now() - MEM.startTime) / 1000);
    recordActivity();

    const body = document.getElementById('memoryResultsBody');
    const m = Math.floor(secs / 60), s = secs % 60;
    const timeStr = `${m}:${String(s).padStart(2, '0')}`;
    const verdict = MEM.moves <= MEM.totalPairs + 2 ? "🧠 Excellent memory — barely any wasted flips!" : MEM.moves <= MEM.totalPairs * 2 ? "Nice work — solid pairing." : "All matched! Try to beat your move count next time.";

    body.innerHTML = `
      <div class="game-result-hero">
        <div class="game-q-meta">🧠 Memory Match · All Pairs Found!</div>
        <div class="game-result-score">${timeStr}</div>
        <div class="game-result-sub">time</div>
        <p style="margin-top:1rem; font-size:.95rem; color:var(--text-mid);">${verdict}</p>
      </div>
      <div class="game-result-stats">
        <div class="grs-box"><span>${MEM.moves}</span><label>Moves</label></div>
        <div class="grs-box"><span>${MEM.totalPairs}</span><label>Pairs</label></div>
      </div>
      <div class="result-actions">
        <button class="btn btn-primary btn-block" id="memReplayBtn">Play Again →</button>
        <button class="btn btn-ghost btn-block" id="memHomeBtn">Back to Home</button>
      </div>`;
    document.getElementById('memReplayBtn').addEventListener('click', () => startMemoryMatch(MEM.subject));
    document.getElementById('memHomeBtn').addEventListener('click', () => { showScreen('homeScreen'); renderDashboardNudge(); updateStudyPlanBanner(); });

    showScreen('memoryResultsScreen');
  }

  /* ────────────────────────────────
     CHALLENGE A FRIEND
     (adapted from My Exams App / My JAMB App's community quiz —
      same shared backend, same challenge shape)
  ──────────────────────────────── */
  const QC_STORE = 'hh-challenges-v1';
  const MAX_PENDING_CHALLENGES = 3;
  const WAITING_ROOM_TIMEOUT_MS = 2 * 60 * 1000;
  let _pendingChallenge = null;
  let _waitingRoomTimer = null;
  let _waitingRoomCountdownTicker = null;
  let _isWaitingRoomCreator = false;

  function safe(str) {
    return String(str == null ? '' : str).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  const AVATAR_COLORS = ['#e85d4a', '#2563eb', '#16a34a', '#c9a05c', '#7c3aed', '#0891b2', '#dc2626', '#0d9488'];
  function avatarFor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
    const color = AVATAR_COLORS[hash % AVATAR_COLORS.length];
    const initials = name.trim().split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join('');
    return { color, initials: initials || '?' };
  }

  function initChallengeModule() {
    const modal = document.getElementById('quizChallengeModal');
    if (!modal) return;

    document.getElementById('qcClose').addEventListener('click', closeQuizChallenge);
    modal.addEventListener('click', e => { if (e.target === modal) closeQuizChallenge(); });

    document.getElementById('qcCreateBtn').addEventListener('click', () => { showQcPanel('qcSetup'); updateAiBoostHint(); });
    document.getElementById('qcJoinConfirm').addEventListener('click', joinChallenge);
    document.getElementById('qcGenerateBtn').addEventListener('click', generateChallenge);
    document.getElementById('qcShareLinkBtn').addEventListener('click', shareChallengeLink);
    document.getElementById('qcStartOwnBtn').addEventListener('click', startOwnAttempt);
    document.getElementById('qcNewChallengeBtn').addEventListener('click', () => { showQcPanel('qcSetup'); updateAiBoostHint(); });
    document.getElementById('qcDoneBtn').addEventListener('click', closeQuizChallenge);
    document.getElementById('qcMarkReadyBtn').addEventListener('click', markReady);
    document.getElementById('qcForceStartBtn').addEventListener('click', forceStartChallenge);
    document.getElementById('qcEndChallengeBtn').addEventListener('click', endChallengeFromWaitingRoom);
    document.getElementById('qcSyncMode').addEventListener('change', (e) => {
      document.getElementById('qcScheduleWrap').classList.toggle('hidden', e.target.value !== 'scheduled');
    });
    document.getElementById('qcSubject').addEventListener('change', updateAiBoostHint);
    document.getElementById('qcCount').addEventListener('change', updateAiBoostHint);
  }

  /**
   * Looks at the static pool size for the selected subject vs. how many
   * of those the creator has already seen, and nudges the AI-boost
   * toggle accordingly — auto-checking (but not locking) it when the
   * pool can't cover the requested question count without repeats.
   */
  function updateAiBoostHint() {
    const subject = document.getElementById('qcSubject').value;
    const count = parseInt(document.getElementById('qcCount').value, 10) || 20;
    const bank = getBank(S.category)[subject];
    const hint = document.getElementById('qcAiBoostHint');
    const checkbox = document.getElementById('qcAiBoost');
    if (!bank) { hint.textContent = ''; return; }

    const pool = bank.objective || [];
    const seen = getSeenSet(S.category, subject);
    const unseenCount = pool.filter(q => !seen.has(q.id)).length;

    if (unseenCount < count) {
      hint.textContent = `— recommended, only ${unseenCount} fresh question${unseenCount === 1 ? '' : 's'} left in this subject`;
      checkbox.checked = true;
    } else {
      hint.textContent = '— optional, adds variety beyond the question bank';
      checkbox.checked = false;
    }
  }

  function populateChallengeSubjects() {
    const sel = document.getElementById('qcSubject');
    const manifest = CONTENT_MANIFEST[S.category];
    sel.innerHTML = manifest.subjects.map(key =>
      `<option value="${key}">${SUBJECT_LABELS[key] || key}</option>`).join('');
  }

  function openQuizChallenge() {
    if (!S.currentUser) { showToast('Please enter a name first.'); return; }
    populateChallengeSubjects();
    showQcPanel('qcCreate');
    document.getElementById('quizChallengeModal').classList.remove('hidden');
    renderPendingChallenges();
  }
  window.openQuizChallenge = openQuizChallenge;

  function closeQuizChallenge() {
    clearInterval(_waitingRoomTimer);
    clearInterval(_waitingRoomCountdownTicker);
    document.getElementById('quizChallengeModal').classList.add('hidden');
  }

  function showQcPanel(id) {
    ['qcCreate', 'qcSetup', 'qcCreated', 'qcWaiting', 'qcResults'].forEach(p => {
      const el = document.getElementById(p);
      if (el) el.classList.toggle('hidden', p !== id);
    });
  }

  function generateChallengeCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'HH-';
    for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
  }

  function getMyPendingChallenges() {
    const all = loadSafe(QC_STORE, {});
    return Object.values(all)
      .filter(c => c.creator === S.currentUser && !c.ended)
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  }

  function renderPendingChallenges() {
    const wrap = document.getElementById('qcPendingWrap');
    const list = document.getElementById('qcPendingList');
    const countEl = document.getElementById('qcPendingCount');
    const mine = getMyPendingChallenges();
    countEl.textContent = mine.length;
    wrap.classList.toggle('hidden', mine.length === 0);

    list.innerHTML = mine.map(c => {
      const statusLabel = c.syncMode === 'scheduled' ? '📅 Scheduled'
        : c.syncMode === 'ready' && !c.startedAt ? '⏱ Waiting room'
        : '▶ In progress';
      return `<div class="pending-challenge-row">
        <div>
          <div style="font-weight:700;">${safe(c.code)}</div>
          <div style="color:var(--text-dim); font-size:.75rem;">${safe(SUBJECT_LABELS[c.subject] || c.subject)} · ${statusLabel}</div>
        </div>
        <div style="display:flex; gap:.5rem;">
          <button data-code="${safe(c.code)}" data-action="continue">Continue</button>
          <button data-code="${safe(c.code)}" data-action="delete" style="color:var(--red);">Delete</button>
        </div>
      </div>`;
    }).join('');

    list.querySelectorAll('[data-action="continue"]').forEach(btn => {
      btn.addEventListener('click', () => continueChallenge(btn.dataset.code));
    });
    list.querySelectorAll('[data-action="delete"]').forEach(btn => {
      btn.addEventListener('click', () => deleteChallenge(btn.dataset.code));
    });
  }

  function continueChallenge(code) {
    const challenges = loadSafe(QC_STORE, {});
    const challenge = challenges[code];
    if (!challenge) return;
    window._currentChallengeCode = code;
    if (challenge.syncMode && challenge.syncMode !== 'anytime' && !challenge.startedAt) {
      _pendingChallenge = challenge;
      openWaitingRoom(code, true);
    } else {
      document.getElementById('qcCodeDisplay').textContent = code;
      showQcPanel('qcCreated');
    }
  }

  async function deleteChallenge(code) {
    if (!confirm(`Delete challenge ${code}? Anyone with the code will no longer be able to join.`)) return;
    const challenges = loadSafe(QC_STORE, {});
    const hostSecret = challenges[code] && challenges[code].hostSecret;
    try {
      await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'end_challenge', code, hostSecret }),
      });
    } catch (err) {}
    if (challenges[code]) { challenges[code].ended = true; saveSafe(QC_STORE, challenges); }
    renderPendingChallenges();
  }

  async function generateChallenge() {
    if (getMyPendingChallenges().length >= MAX_PENDING_CHALLENGES) {
      showToast(`You can have up to ${MAX_PENDING_CHALLENGES} active challenges at a time — delete one first.`);
      return;
    }

    const subject = document.getElementById('qcSubject').value;
    const count = parseInt(document.getElementById('qcCount').value, 10);
    const time = parseInt(document.getElementById('qcTime').value, 10);
    const syncMode = document.getElementById('qcSyncMode').value;
    let scheduledStartAt = null;
    if (syncMode === 'scheduled') {
      const raw = document.getElementById('qcScheduleAt').value;
      if (!raw) { showToast('Pick a date and time for the challenge to start.'); return; }
      scheduledStartAt = new Date(raw).getTime();
      if (!Number.isFinite(scheduledStartAt) || scheduledStartAt <= Date.now()) {
        showToast('Pick a start time in the future.'); return;
      }
    }

    const bank = getBank(S.category)[subject];
    if (!bank) return;
    const pool = bank.objective.slice();

    const useAiBoost = document.getElementById('qcAiBoost').checked;
    if (useAiBoost && !hasAICredit()) {
      showAIPaywall();
      return;
    }
    const { questions: staticQuestions } = pickQuestions(S.category, subject, pool, count);
    let questions = staticQuestions;

    const genBtn = document.getElementById('qcGenerateBtn');

    if (useAiBoost) {
      genBtn.disabled = true; genBtn.textContent = 'Generating fresh questions…';
      try {
        // Fill however many slots the static pool couldn't cover fresh,
        // or top up with a handful of extra fresh ones if the pool was full.
        const shortfall = Math.max(count - staticQuestions.length, Math.min(count, 5));
        const aiRes = await fetch(API_BASE + '/api/generate-questions', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            category: S.category,
            subject: SUBJECT_LABELS[subject] || subject,
            count: shortfall,
            avoidQuestions: pool.map(q => q.question).slice(0, 60),
          }),
        });
        const aiData = await aiRes.json().catch(() => ({}));
        if (aiRes.ok && aiData.ok && aiData.questions.length) {
          consumeAICredit();
          // Replace recycled/seen static questions first with AI ones, keep unseen static.
          const combined = shuffleArray(staticQuestions.concat(aiData.questions));
          questions = combined.slice(0, count);
          const left = getAICredits().credits;
          showToast(`✨ AI Boost added ${aiData.questions.length} fresh questions — 1 credit used (${left} left)`, 3200);
        } else {
          showToast('Could not generate AI questions right now — using the question bank instead.');
        }
      } catch (err) {
        showToast('Could not generate AI questions right now — using the question bank instead.');
      }
    }

    if (!questions.length) { showToast('Not enough questions for this subject.'); return; }

    const code = generateChallengeCode();
    genBtn.disabled = true; genBtn.textContent = 'Creating…';

    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create', code, subject, count, time,
          questions, creator: S.currentUser, syncMode, scheduledStartAt,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Could not create challenge');

      const challenges = loadSafe(QC_STORE, {});
      const challengeObj = {
        code, subject, count, time,
        questionData: questions,
        expires: Date.now() + 24 * 60 * 60 * 1000,
        creator: S.currentUser,
        hostSecret: data.hostSecret,
        syncMode, scheduledStartAt,
        startedAt: syncMode === 'anytime' ? Date.now() : null,
        createdAt: Date.now(), ended: false,
        scores: {},
      };
      challenges[code] = challengeObj;
      saveSafe(QC_STORE, challenges);

      document.getElementById('qcCodeDisplay').textContent = code;
      window._currentChallengeCode = code;

      if (syncMode !== 'anytime') {
        _pendingChallenge = challengeObj;
        openWaitingRoom(code, true);
      } else {
        showQcPanel('qcCreated');
      }
    } catch (err) {
      showToast('Could not create challenge — check your connection and try again.');
    } finally {
      genBtn.disabled = false; genBtn.textContent = 'Generate Challenge Code →';
    }
  }

  function shareChallengeLink() {
    const code = window._currentChallengeCode;
    if (!code) return;
    const url = window.location.origin + window.location.pathname + '?challenge=' + code;
    const subj = document.getElementById('qcSubject')?.value || '';
    const text = `🏆 I challenge you! Take this ${SUBJECT_LABELS[subj] || subj} quiz on Holiday Hub.\n\nCode: ${code}\nLink: ${url}`;
    if (navigator.share) {
      navigator.share({ title: 'Holiday Hub Challenge', text, url }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(text).then(() => showToast('Challenge link copied!')).catch(() => showToast('Link: ' + url));
    }
  }

  async function joinChallenge() {
    const code = (document.getElementById('qcJoinCode').value || '').trim().toUpperCase();
    if (!code) return;
    const joinBtn = document.getElementById('qcJoinConfirm');
    joinBtn.disabled = true; joinBtn.textContent = 'Joining…';

    try {
      const local = loadSafe(QC_STORE, {})[code];
      if (local) {
        if (local.ended) { showToast('This challenge has ended.'); return; }
        if (Date.now() > local.expires) { showToast('This challenge has expired (challenges last 24 hours).'); return; }
        window._currentChallengeCode = code;
        if (local.syncMode && local.syncMode !== 'anytime' && !local.startedAt) {
          _pendingChallenge = local;
          openWaitingRoom(code, local.creator === S.currentUser);
        } else {
          startChallengeAttempt(local);
        }
        return;
      }

      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'join', code, student: S.currentUser }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        if (res.status === 409 && data.alreadyCompleted) {
          showToast("You've already completed this challenge — check the leaderboard for your result.");
          const lbRes = await fetch(API_BASE + '/api/challenge', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'leaderboard', code }),
          });
          const lbData = await lbRes.json().catch(() => ({}));
          if (lbRes.ok && lbData.ok) showChallengeLeaderboard(code, lbData.scores);
          return;
        }
        showToast(res.status === 410 ? 'This challenge has ended.'
          : data.error === 'Challenge not found or expired'
          ? 'Challenge not found. Check the code and try again.'
          : 'Could not join challenge — check your connection and try again.');
        return;
      }
      const challenge = { ...data.challenge, questionData: data.challenge.questions };
      window._currentChallengeCode = code;
      if (challenge.syncMode && challenge.syncMode !== 'anytime' && !challenge.startedAt) {
        _pendingChallenge = challenge;
        openWaitingRoom(code, challenge.creator === S.currentUser);
      } else {
        startChallengeAttempt(challenge);
      }
    } finally {
      joinBtn.disabled = false; joinBtn.textContent = 'Join';
    }
  }

  function startOwnAttempt() {
    const code = window._currentChallengeCode;
    if (!code) return;
    const challenge = loadSafe(QC_STORE, {})[code];
    if (!challenge) return;
    startChallengeAttempt(challenge);
  }

  function openWaitingRoom(code, isCreator) {
    _isWaitingRoomCreator = isCreator;
    document.getElementById('qcForceStartBtn').classList.toggle('hidden', !isCreator);
    document.getElementById('qcEndChallengeBtn').classList.toggle('hidden', !isCreator);
    const readyBtn = document.getElementById('qcMarkReadyBtn');
    readyBtn.classList.remove('hidden');
    readyBtn.disabled = false; readyBtn.textContent = "I'm Ready";
    showQcPanel('qcWaiting');
    document.getElementById('quizChallengeModal').classList.remove('hidden');
    pollWaitingRoom(code);
  }

  function renderWaitingList(participants) {
    const list = document.getElementById('qcWaitingList');
    const entries = Object.entries(participants || {});
    list.innerHTML = entries.map(([name, p]) => {
      const av = avatarFor(name);
      return `
      <div class="duel-participant ${p.ready ? 'ready' : ''}">
        <div class="duel-avatar" style="background:${av.color};">${av.initials}</div>
        <span class="duel-participant-name">${safe(name)}${name === S.currentUser ? ' (you)' : ''}</span>
        <span class="duel-status-chip">${p.ready ? '✓ Ready' : 'Waiting…'}</span>
      </div>`;
    }).join('') || '<p class="sheet-sub">Waiting for people to join…</p>';
  }

  function updateCountdownDisplay(msRemaining) {
    // Reserved for future inline countdown display in the waiting room.
  }

  async function pollWaitingRoom(code) {
    clearInterval(_waitingRoomTimer);
    clearInterval(_waitingRoomCountdownTicker);

    const tick = async () => {
      try {
        const res = await fetch(API_BASE + '/api/challenge', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'status', code }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) return;

        if (data.ended) {
          clearInterval(_waitingRoomTimer);
          document.getElementById('qcWaitingStatus').textContent = 'This challenge has ended.';
          document.getElementById('qcMarkReadyBtn').classList.add('hidden');
          document.getElementById('qcForceStartBtn').classList.add('hidden');
          return;
        }

        renderWaitingList(data.participants);
        if (data.scheduledStartAt) {
          document.getElementById('qcWaitingStatus').textContent = 'Challenge starts automatically at the scheduled time.';
        }

        if (data.startedAt) {
          clearInterval(_waitingRoomTimer);
          document.getElementById('quizChallengeModal').classList.add('hidden');
          startChallengeAttempt(_pendingChallenge, data.startedAt);
          return;
        }

        if (data.firstReadyAt && (Date.now() - data.firstReadyAt) > WAITING_ROOM_TIMEOUT_MS) {
          await fetch(API_BASE + '/api/challenge', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'force_start', code }),
          });
        }
      } catch (err) {}
    };

    tick();
    _waitingRoomTimer = setInterval(tick, 3000);
  }

  async function markReady() {
    const code = window._currentChallengeCode;
    if (!code) return;
    const btn = document.getElementById('qcMarkReadyBtn');
    btn.disabled = true; btn.textContent = 'Waiting for others…';
    try {
      await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'mark_ready', code, student: S.currentUser }),
      });
    } catch (err) {
      showToast('Could not mark ready — check your connection.');
      btn.disabled = false; btn.textContent = "I'm Ready";
    }
  }

  async function forceStartChallenge() {
    const code = window._currentChallengeCode;
    if (!code) return;
    const challenges = loadSafe(QC_STORE, {});
    const hostSecret = challenges[code] && challenges[code].hostSecret;
    try {
      await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'force_start', code, hostSecret }),
      });
    } catch (err) {
      showToast('Could not start — check your connection.');
    }
  }

  async function endChallengeFromWaitingRoom() {
    const code = window._currentChallengeCode;
    if (!code) return;
    if (!confirm('End this challenge for everyone? Nobody will be able to join or continue it.')) return;
    await deleteChallenge(code);
    clearInterval(_waitingRoomTimer);
    document.getElementById('quizChallengeModal').classList.add('hidden');
  }

  function startChallengeAttempt(challenge, startedAtOverride) {
    if (challenge.scores && challenge.scores[S.currentUser]) {
      showToast("You've already completed this challenge — check the leaderboard for your result.");
      showChallengeLeaderboard(challenge.code, challenge.scores);
      return;
    }

    closeQuizChallenge();

    S.subject = challenge.subject;
    S.mode = 'challenge';
    S.questions = challenge.questionData;
    S.answers = new Array(S.questions.length).fill(null);
    S.idx = 0;
    S._challengeCode = challenge.code;

    document.getElementById('quizTitle').textContent = (SUBJECT_LABELS[challenge.subject] || challenge.subject) + ' · Challenge';

    const startedAt = startedAtOverride || challenge.startedAt || Date.now();
    if (challenge.time > 0) {
      const elapsedSec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
      const remaining = Math.max(0, challenge.time * 60 - elapsedSec);
      startTimer(remaining);
    } else {
      stopTimer(true);
    }

    renderQuizQuestion();
    showScreen('quizScreen');
  }

  async function saveChallengeScore(score, total, answers) {
    const code = S._challengeCode;
    if (!code) return;
    const pct = Math.round((score / total) * 100);

    const challenges = loadSafe(QC_STORE, {});
    if (challenges[code]) {
      // Optimistic local record for immediate UI — the real, trusted score
      // comes back from the server below and overwrites this if different.
      challenges[code].scores[S.currentUser] = { score, total, pct, time: new Date().toLocaleTimeString() };
      saveSafe(QC_STORE, challenges);
    }
    S._challengeCode = null;

    let backendScores = null;
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'submit', code, student: S.currentUser, answers }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) backendScores = data.scores;
    } catch (err) {}

    showChallengeLeaderboard(code, backendScores);
  }

  function showChallengeLeaderboard(code, scoresOverride) {
    const challenges = loadSafe(QC_STORE, {});
    const localChallenge = challenges[code];
    const scores = scoresOverride || (localChallenge && localChallenge.scores);
    if (!scores) return;

    const list = document.getElementById('qcLeaderboard');
    const entries = Object.entries(scores).sort((a, b) => b[1].pct - a[1].pct);

    list.innerHTML = entries.length ? entries.map(([name, data], i) => {
      const av = avatarFor(name);
      const rankBadge = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '#' + (i + 1);
      return `
      <div class="duel-leaderboard-row ${name === S.currentUser ? 'is-me' : ''}">
        <span class="duel-rank">${rankBadge}</span>
        <div class="duel-avatar duel-avatar-sm" style="background:${av.color};">${av.initials}</div>
        <span class="duel-lb-name">${safe(name)}${name === S.currentUser ? ' (you)' : ''}</span>
        <span class="duel-lb-score">${data.score}/${data.total}<em>${data.pct}%</em></span>
      </div>`;
    }).join('') : '<p class="sheet-sub">No scores yet — be the first!</p>';

    document.getElementById('quizChallengeModal').classList.remove('hidden');
    showQcPanel('qcResults');
  }

  function checkIncomingChallengeLink() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('challenge');
    if (!code) return;
    history.replaceState(null, '', window.location.pathname);
    ensureUser(() => {
      openQuizChallenge();
      document.getElementById('qcJoinCode').value = code;
      joinChallenge();
    });
  }

  /* ────────────────────────────────
     AI CREDITS & PAYWALL
     Free trial of 3 AI responses, then ₦500 unlocks 10 more. Gates:
     Project Helper replies, "Explain Differently", and Challenge's
     AI Boost. Does NOT gate anything else — Revision, Quiz, all 4
     games, and Study Library stay fully free and uncapped. Reuses
     the same live Paystack key and /api/verify-payment endpoint as
     My Exams App / My JAMB App (same merchant account).
  ──────────────────────────────── */
  const AI_BOOST_WINDOW_MS = 48 * 60 * 60 * 1000; // 2 days

  const BOOST_REMINDER_KEY = 'hh-boost-reminder-v1';
  /** Nobody should pay ₦500 and have it quietly expire unused. Once per
   * day, if there's an active boost with credits still left and under 6
   * hours remaining, say so — same spirit as the rest of this project's
   * "tell people what's actually happening" fixes. */
  function maybeShowBoostExpiryReminder() {
    const data = getAICredits();
    if (!data.boostExpiresAt || data.credits <= 0) return;
    const hoursLeft = (data.boostExpiresAt - Date.now()) / 3600000;
    if (hoursLeft <= 0 || hoursLeft > 6) return;
    const today = new Date().toDateString();
    const lastShown = loadSafe(BOOST_REMINDER_KEY, null);
    if (lastShown === today) return;
    saveSafe(BOOST_REMINDER_KEY, today);
    showActionToast(
      `${data.credits} AI credits expire in ${Math.ceil(hoursLeft)}h — don't lose them!`,
      'Use now →',
      () => openProjectHelper(),
      6000
    );
  }

  function getAICredits() {
    const data = loadSafe(AI_CREDITS_KEY, null);
    if (data === null) {
      const fresh = { credits: FREE_TRIAL_CREDITS, totalPurchased: 0, boostExpiresAt: null };
      saveSafe(AI_CREDITS_KEY, fresh);
      return fresh;
    }
    // Lazy-expire: purchased credits are a time-boxed "2-Day AI Boost", not
    // a permanent balance — free trial credits (boostExpiresAt stays null
    // until a real purchase happens) never expire this way. Checked here
    // rather than with a timer, same pattern as everything else in this
    // localStorage-only app — no server, so expiry is checked on access.
    if (data.boostExpiresAt && Date.now() > data.boostExpiresAt && data.credits > 0) {
      data.credits = 0;
      data.boostExpiresAt = null;
      saveSafe(AI_CREDITS_KEY, data);
    }
    return data;
  }

  function hasAICredit() {
    return getAICredits().credits > 0;
  }

  /** Call only after a successful AI response — never charge for a failed call. */
  function consumeAICredit() {
    const data = getAICredits();
    if (data.credits <= 0) return false;
    data.credits -= 1;
    saveSafe(AI_CREDITS_KEY, data);
    updateAICreditBadges();
    return true;
  }

  function addAICredits(n) {
    const data = getAICredits();
    data.credits += n;
    data.totalPurchased += n;
    data.boostExpiresAt = Date.now() + AI_BOOST_WINDOW_MS; // (re)starts the 2-day window from this purchase
    saveSafe(AI_CREDITS_KEY, data);
    updateAICreditBadges();
  }

  function updateAICreditBadges() {
    const data = getAICredits();
    const n = data.credits;
    document.querySelectorAll('.ai-credit-badge').forEach(el => {
      el.textContent = `✨ ${n} left`;
    });
    document.querySelectorAll('.ai-boost-expiry').forEach(el => {
      if (data.boostExpiresAt && data.credits > 0) {
        const hoursLeft = Math.max(0, Math.ceil((data.boostExpiresAt - Date.now()) / 3600000));
        el.textContent = hoursLeft > 0 ? `Boost expires in ${hoursLeft}h` : '';
        el.classList.toggle('hidden', hoursLeft <= 0);
      } else {
        el.textContent = '';
        el.classList.add('hidden');
      }
    });
  }

  function showAIPaywall() {
    document.getElementById('aiPaywallModal').classList.remove('hidden');
  }
  function hideAIPaywall() {
    document.getElementById('aiPaywallModal').classList.add('hidden');
  }

  function initAIPaywall() {
    document.getElementById('paywallClose').addEventListener('click', hideAIPaywall);
    document.getElementById('paywallLaterBtn').addEventListener('click', hideAIPaywall);
    document.getElementById('paywallPayBtn').addEventListener('click', purchaseAICredits);
  }

  /**
   * Simple email-collection sheet, needed before a Paystack charge.
   * Mirrors the pattern already used in My Exams App / My JAMB App.
   */
  function getEmailViaModal() {
    return new Promise((resolve) => {
      let overlay = document.getElementById('emailModalOverlay');
      if (overlay) overlay.remove();

      overlay = document.createElement('div');
      overlay.id = 'emailModalOverlay';
      overlay.className = 'overlay';
      overlay.innerHTML = `
        <div class="sheet">
          <h3 class="sheet-title">Enter your email</h3>
          <p class="sheet-sub">We'll send your payment receipt here.</p>
          <input id="emailModalInput" type="email" inputmode="email" autocomplete="email" class="text-input" placeholder="you@example.com" style="margin-top:1rem;"/>
          <p id="emailModalError" class="hidden" style="color:var(--red); font-size:.78rem; margin-top:.4rem;">Please enter a valid email address.</p>
          <div style="display:flex; gap:.6rem; margin-top:1.1rem;">
            <button id="emailModalCancel" class="btn btn-ghost" style="flex:1;">Cancel</button>
            <button id="emailModalContinue" class="btn btn-primary" style="flex:1;">Continue</button>
          </div>
        </div>`;
      document.body.appendChild(overlay);

      const cleanup = (val) => { overlay.remove(); resolve(val); };
      document.getElementById('emailModalCancel').addEventListener('click', () => cleanup(null));
      overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(null); });

      const submit = () => {
        const input = document.getElementById('emailModalInput');
        const errEl = document.getElementById('emailModalError');
        const val = (input.value || '').trim();
        if (!val.includes('@') || !val.includes('.')) { errEl.classList.remove('hidden'); return; }
        cleanup(val);
      };
      document.getElementById('emailModalContinue').addEventListener('click', submit);
      document.getElementById('emailModalInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
    });
  }

  async function purchaseAICredits() {
    const email = await getEmailViaModal();
    if (!email) return;

    if (typeof window.PaystackPop === 'undefined') {
      showToast('Payment could not load — check your connection and try again.');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount: AI_CREDIT_PACK_PRICE_KOBO,
      currency: 'NGN',
      ref: 'HH-AI-' + Date.now(),
      metadata: { custom_fields: [
        { display_name: 'Product', variable_name: 'product', value: 'Holiday Hub — 2-Day AI Boost (10 credits)' },
      ]},
      onClose() {},
      callback(response) {
        (async () => {
          showToast('Confirming payment…');
          try {
            const res = await fetch(API_BASE + '/api/verify-payment', {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ reference: response.reference }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.verified) {
              showToast('Could not confirm payment yet. If you were charged, contact support with reference: ' + response.reference, 5000);
              return;
            }
            addAICredits(AI_CREDIT_PACK_SIZE);
            hideAIPaywall();
            showToast(`✅ 2-Day AI Boost unlocked — ${AI_CREDIT_PACK_SIZE} credits, use them in the next 48 hours!`, 4000);
          } catch (err) {
            showToast('Could not confirm payment — contact support with reference: ' + response.reference, 5000);
          }
        })();
      },
    });
    handler.openIframe();
  }

  /* ────────────────────────────────
     STUDY MODE — "EXPLAIN DIFFERENTLY"
     When the canned explanation doesn't land, this reuses the same
     AI tutor endpoint that powers the Project Helper to give the
     student a different angle on the same concept — a simpler
     analogy or a different approach — without leaving Study Mode.
  ──────────────────────────────── */
  async function explainDifferently(q) {
    const resultEl = document.getElementById('explainDifferentlyResult');
    const btn = document.getElementById('explainDifferentlyBtn');
    if (!resultEl || !btn) return;

    if (!hasAICredit()) { showAIPaywall(); return; }

    btn.disabled = true;
    btn.textContent = 'Thinking of another way to explain it…';
    resultEl.innerHTML = '';

    const subjectLabel = SUBJECT_LABELS[S.subject] || S.subject;
    const prompt = `I'm studying ${subjectLabel}. Here's a question I'm reviewing:\n"${q.question}"\nOptions: ${q.options.join(', ')}\nThe correct answer is "${q.options[q.answer]}".\nThe explanation given was: "${q.explanation || 'none provided'}"\nI didn't fully understand that explanation — can you explain the underlying concept a different way, maybe with a simpler analogy or a different approach? Keep it short.`;

    try {
      const res = await fetch(API_BASE + '/api/project-helper', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: subjectLabel, messages: [{ role: 'user', content: prompt }] }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.reply) {
        consumeAICredit();
        resultEl.innerHTML = `<div class="explain-ai-bubble">${safe(data.reply)}</div>`;
        btn.classList.add('hidden');
      } else {
        showToast("Couldn't reach the AI tutor right now — check your connection and try again.");
        btn.disabled = false; btn.textContent = '✨ Still confused? Explain this differently';
      }
    } catch (err) {
      showToast("Couldn't reach the AI tutor right now — check your connection and try again.");
      btn.disabled = false; btn.textContent = '✨ Still confused? Explain this differently';
    }
  }

  /** Cache for AI explanations — the same flashcard/formula/note asked
   * about twice (e.g. revisited via Previous/Next, or re-opened on a
   * later visit) would otherwise burn another API call and another
   * credit for what's very likely an identical answer. Keyed by a hash
   * of the exact prompt sent, since the prompt already fully encodes the
   * subject and the specific item being asked about. */
  const EXPLAIN_CACHE_KEY = 'hh-explain-cache-v1';

  function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash.toString(36);
  }

  /** Same "Explain Differently" idea, generalised to work on any single
   * Study Library item — a flashcard, a formula, or a note. Used by all
   * three renderX() functions in the Study Library, each passing in its
   * own subject-appropriate prompt and the specific DOM nodes to update.
   * Kept as one shared function rather than three copies so the credit
   * check, error handling, and button states can never drift apart. */
  async function explainLibraryItem(prompt, btn, resultEl) {
    if (!btn || !resultEl) return;

    const cacheKey = simpleHash(prompt);
    const cache = loadSafe(EXPLAIN_CACHE_KEY, {});
    if (cache[cacheKey]) {
      resultEl.innerHTML = `<div class="explain-ai-bubble">${safe(cache[cacheKey])}</div>`;
      btn.classList.add('hidden');
      return;
    }

    if (!hasAICredit()) { showAIPaywall(); return; }

    const originalLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Thinking…';
    resultEl.innerHTML = '';

    try {
      const res = await fetch(API_BASE + '/api/project-helper', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: SUBJECT_LABELS[LIB.subject] || LIB.subject, messages: [{ role: 'user', content: prompt }] }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.reply) {
        consumeAICredit();
        resultEl.innerHTML = `<div class="explain-ai-bubble">${safe(data.reply)}</div>`;
        btn.classList.add('hidden');
        const freshCache = loadSafe(EXPLAIN_CACHE_KEY, {});
        freshCache[cacheKey] = data.reply;
        saveSafe(EXPLAIN_CACHE_KEY, freshCache);
      } else {
        showToast("Couldn't reach the AI tutor right now — check your connection and try again.");
        btn.disabled = false; btn.textContent = originalLabel;
      }
    } catch (err) {
      showToast("Couldn't reach the AI tutor right now — check your connection and try again.");
      btn.disabled = false; btn.textContent = originalLabel;
    }
  }

  /* ────────────────────────────────
     HOLIDAY PROJECT HELPER
  ──────────────────────────────── */
  let phMessages = [];
  let phSubject = 'Any subject';

  function initProjectHelper() {
    // Wiring happens lazily in openProjectHelper() since the DOM for
    // this screen is built dynamically.
  }

  function openProjectHelper() {
    phMessages = [];
    renderProjectHelper();
    showScreen('projectScreen');
  }

  function renderProjectHelper() {
    const body = document.getElementById('projectBody');
    const subjects = ['Any subject', 'Mathematics', 'English', 'Science', 'Social Studies', 'ICT'];

    body.innerHTML = `
      <div style="display:flex; align-items:center; justify-content:flex-end; margin-bottom:.4rem;">
        <span class="ai-credit-badge">✨ ${getAICredits().credits} left</span>
      </div>
      <div class="ph-subject-chip-row" id="phChips">
        ${subjects.map(s => `<button class="ph-chip ${s === phSubject ? 'active' : ''}" data-s="${s}">${s}</button>`).join('')}
      </div>
      ${phMessages.length === 0 ? `
        <div class="ph-intro">
          <div class="ph-intro-icon">🧭</div>
          <h3>Tell me about your project</h3>
          <p>I won't do it for you — I'll ask questions, explain ideas, and guide you<br>to the answer so you understand it and can explain it yourself.</p>
        </div>` : `<div class="ph-chat" id="phChat">${phMessages.map(renderPhMsg).join('')}</div>`}
      <div class="ph-input-row">
        <textarea id="phInput" rows="1" placeholder="Describe your holiday project or ask a question…"></textarea>
        <button class="ph-send-btn" id="phSendBtn">➤</button>
      </div>`;

    document.querySelectorAll('#phChips .ph-chip').forEach(chip => {
      chip.addEventListener('click', () => { phSubject = chip.dataset.s; renderProjectHelper(); });
    });
    document.getElementById('phSendBtn').addEventListener('click', sendProjectMessage);
    document.getElementById('phInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendProjectMessage(); }
    });
  }

  function renderPhMsg(m) {
    return `<div class="ph-msg ${m.role === 'user' ? 'ph-msg-user' : 'ph-msg-ai'} ${m.loading ? 'loading' : ''}">${safe(m.text)}</div>`;
  }

  async function sendProjectMessage() {
    const input = document.getElementById('phInput');
    const text = input.value.trim();
    if (!text) return;

    if (!hasAICredit()) { showAIPaywall(); return; }

    input.value = '';

    phMessages.push({ role: 'user', text });
    phMessages.push({ role: 'ai', text: 'Thinking…', loading: true });
    renderProjectHelper();
    scrollProjectChatToBottom();

    try {
      const res = await fetch(API_BASE + '/api/project-helper', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: phSubject,
          messages: phMessages.filter(m => !m.loading).map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      phMessages.pop(); // remove loading bubble
      if (res.ok && data.reply) {
        consumeAICredit();
        phMessages.push({ role: 'ai', text: data.reply });
      } else {
        phMessages.push({ role: 'ai', text: "I couldn't reach the server just now — check your connection and try again." });
      }
    } catch (err) {
      phMessages.pop();
      phMessages.push({ role: 'ai', text: "I couldn't reach the server just now — check your connection and try again." });
    }
    renderProjectHelper();
    scrollProjectChatToBottom();
  }

  function scrollProjectChatToBottom() {
    const chat = document.getElementById('phChat');
    if (chat) chat.scrollTop = chat.scrollHeight;
  }

  /* ────────────────────────────────
     LAUNCH BANNER (hidden until enabled)
     Flip SHOW_LAUNCH_BANNER to true when ready to announce My Exams
     App / My JAMB App. Edit launchBannerTitle/Sub text in index.html
     (or via JS below) closer to the actual launch date.
  ──────────────────────────────── */
  const SHOW_LAUNCH_BANNER = false;
  function initLaunchBanner() {
    const banner = document.getElementById('launchBanner');
    if (!banner) return;
    const dismissed = loadSafe('hh-launch-banner-dismissed', false);
    if (SHOW_LAUNCH_BANNER && !dismissed) banner.classList.remove('hidden');
    document.getElementById('launchBannerClose')?.addEventListener('click', () => {
      banner.classList.add('hidden');
      saveSafe('hh-launch-banner-dismissed', true);
    });
  }

  /* ────────────────────────────────
     INIT
  ──────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    applyAIResourceOverlay();
    initCategoryTabs();
    initFeatureGrid();
    initBackButtons();
    loadStats();
    renderCountdown();
    initChallengeModule();
    initGameExplainer();
    initSpeedLevelPicker();
    initWSChallenge();
    initProjectHelper();
    initAIPaywall();
    initGamesPaywall();
    initLaunchBanner();
    checkIncomingChallengeLink();
    renderDashboardNudge();
    updateStudyPlanBanner();
    updateAICreditBadges();
    const planBanner = document.getElementById('studyPlanBanner');
    if (planBanner) planBanner.addEventListener('click', openStudyPlan);

    // Direct-link entry points for teacher/parent dashboards — e.g.
    // ?dash=teacher (uses this device's saved admin credentials, from
    // Create Class) or ?dash=parent&code=P-XXXXXXXX (works on ANY device,
    // the parent code itself is the credential).
    const params = new URLSearchParams(location.search);
    const dash = params.get('dash');
    if (dash === 'teacher') {
      const admin = loadSafe(CLASS_ADMIN_KEY, null);
      if (admin) openTeacherDashboard(admin.classCode, admin.adminSecret);
      else openClassScreen();
    } else if (dash === 'parent') {
      openParentDashboard(params.get('code'));
    }
  });

  function initBackButtons() {
    document.querySelectorAll('[data-back]').forEach(btn => {
      btn.addEventListener('click', () => goBack(btn.dataset.back));
    });
  }

  // expose for other modules in this file
  window._HH = { S, showScreen, showToast, loadSafe, saveSafe, getBank, API_BASE, recordSession, ensureUser };

})();
APPJS_EOF_MARK
echo "js/app.js written."
echo "Now: git add -A && git commit -m \"Add School/Parent Dashboards frontend\" && git push"
