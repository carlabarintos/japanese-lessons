// ============================================================
//  NIHONGO FUN! — App Logic
// ============================================================

// ── Navigation ───────────────────────────────────────────────
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById(id);
  if (sec) { sec.classList.add('active'); sec.scrollIntoView({ behavior:'smooth', block:'start' }); }
  const btn = document.querySelector(`.nav-btn[data-section="${id}"]`);
  if (btn) btn.classList.add('active');
  // Close mobile menu
  document.getElementById('mobile-menu').classList.remove('open');
}

function showTab(tabId, groupClass) {
  document.querySelectorAll(`.${groupClass}`).forEach(t => t.classList.remove('active'));
  document.querySelectorAll(`[data-tab-group="${groupClass}"]`).forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelector(`[data-tab-group="${groupClass}"][data-tab="${tabId}"]`).classList.add('active');
}

// ── Build Kana Chart ─────────────────────────────────────────
function buildKanaChart(containerId, data, dakuten) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = '';

  // Group by row
  const rows = {};
  data.forEach(k => { (rows[k.row] = rows[k.row] || []).push(k); });

  const rowOrder = ['vowel','k','s','t','na','h','m','y','r','w','n_final'];
  const rowNames = { vowel:'Vowels', k:'K', s:'S', t:'T', na:'N', h:'H', m:'M', y:'Y', r:'R', w:'W', n_final:'N' };

  rowOrder.forEach(row => {
    if (!rows[row]) return;
    const label = document.createElement('div');
    label.className = 'row-label';
    label.textContent = rowNames[row];
    label.style.color = ROW_COLORS[row];
    grid.appendChild(label);

    const rowDiv = document.createElement('div');
    rowDiv.className = 'kana-row';

    rows[row].forEach(k => {
      const card = document.createElement('div');
      card.className = 'kana-card';
      card.style.borderColor = ROW_COLORS[row];
      card.style.setProperty('--row-color', ROW_COLORS[row]);
      card.innerHTML = `<span class="kana-char">${k.char}</span><span class="kana-rom">${k.romaji}</span>`;
      card.title = k.example || '';
      card.addEventListener('click', () => showKanaModal(k));
      rowDiv.appendChild(card);
    });
    grid.appendChild(rowDiv);
  });

  // Dakuten section
  if (dakuten && dakuten.length) {
    const dLabel = document.createElement('div');
    dLabel.className = 'row-label dakuten-label';
    dLabel.textContent = '+ Voiced (Dakuten)';
    grid.appendChild(dLabel);

    const dGrid = document.createElement('div');
    dGrid.className = 'dakuten-grid';
    dakuten.forEach(k => {
      const card = document.createElement('div');
      card.className = 'kana-card dakuten-card';
      card.innerHTML = `<span class="kana-char">${k.char}</span><span class="kana-rom">${k.romaji}</span>`;
      dGrid.appendChild(card);
    });
    grid.appendChild(dGrid);
  }
}

// ── Kana Modal ───────────────────────────────────────────────
function showKanaModal(k) {
  const modal = document.getElementById('kana-modal');
  document.getElementById('modal-char').textContent = k.char;
  document.getElementById('modal-romaji').textContent = k.romaji;
  document.getElementById('modal-example').textContent = k.example || '';
  modal.style.setProperty('--modal-color', ROW_COLORS[k.row] || '#6c5ce7');
  modal.classList.add('open');
}

// ── Flashcard System ─────────────────────────────────────────
const flashState = {};

function initFlashcards(prefix, data) {
  const shuffled = shuffle(data);
  flashState[prefix] = { data: shuffled, original: data, idx: 0, flipped: false };
  renderFlashcard(prefix);
}

function renderFlashcard(prefix) {
  const s = flashState[prefix];
  const item = s.data[s.idx];
  if (!item) return;
  s.flipped = false;

  const card = document.getElementById(`${prefix}-card`);
  if (card) card.classList.remove('flipped');

  // Front
  const front = document.getElementById(`${prefix}-fc-front`);
  if (front) {
    const displayChar = item.char || item.jp || '';
    front.innerHTML = `<div class="fc-char">${displayChar}</div><div class="fc-hint">tap to flip ✨</div>`;
  }
  // Back
  const back = document.getElementById(`${prefix}-fc-back`);
  if (back) {
    let backHtml = `<div class="fc-reading">${item.romaji || item.kana || item.reading || ''}</div>`;
    if (item.en)      backHtml += `<div class="fc-meaning">${item.en}</div>`;
    if (item.meaning) backHtml += `<div class="fc-meaning">${item.meaning}</div>`;
    if (item.example) backHtml += `<div class="fc-example">${item.example}</div>`;
    if (item.emoji)   backHtml += `<div class="fc-emoji">${item.emoji}</div>`;
    back.innerHTML = backHtml;
  }
  // Counter
  const ctr = document.getElementById(`${prefix}-fc-counter`);
  if (ctr) ctr.textContent = `${s.idx + 1} / ${s.data.length}`;
}

function flipCard(prefix) {
  const s = flashState[prefix];
  s.flipped = !s.flipped;
  const card = document.getElementById(`${prefix}-card`);
  if (card) card.classList.toggle('flipped', s.flipped);
}

function nextCard(prefix) {
  const s = flashState[prefix];
  if (s.idx >= s.data.length - 1) {
    // Deck exhausted — reshuffle and restart
    s.data = shuffle(s.original);
    s.idx = 0;
    const ctr = document.getElementById(`${prefix}-fc-counter`);
    if (ctr) {
      ctr.textContent = '🎉 Deck complete! Reshuffling…';
      setTimeout(() => renderFlashcard(prefix), 1000);
    } else {
      renderFlashcard(prefix);
    }
  } else {
    s.idx++;
    renderFlashcard(prefix);
  }
}

function prevCard(prefix) {
  const s = flashState[prefix];
  s.idx = Math.max(0, s.idx - 1);
  renderFlashcard(prefix);
}

function shuffleCards(prefix) {
  const s = flashState[prefix];
  s.data = shuffle(s.original);
  s.idx = 0;
  renderFlashcard(prefix);
}

// ── Quiz System ───────────────────────────────────────────────
const quizState = {};

function initQuiz(prefix, data, questionFn, answerKey) {
  quizState[prefix] = { data, questionFn, answerKey, score:0, total:0, current:null };
  renderQuiz(prefix);
}

function renderQuiz(prefix) {
  const s = quizState[prefix];
  const container = document.getElementById(`${prefix}-quiz-inner`);
  if (!container) return;

  // Pick random item
  const item = s.data[Math.floor(Math.random() * s.data.length)];
  s.current = item;

  // Pick 3 wrong answers
  const others = s.data.filter(d => d[s.answerKey] !== item[s.answerKey]);
  const wrong = shuffle(others).slice(0, 3);
  const choices = shuffle([item, ...wrong]);

  const question = s.questionFn(item);
  const scoreHtml = `<div class="quiz-score">Score: ${s.score} / ${s.total}</div>`;

  container.innerHTML = `
    ${scoreHtml}
    <div class="quiz-question">${question}</div>
    <div class="quiz-choices">
      ${choices.map(c => `<button class="quiz-choice" onclick="checkAnswer('${prefix}', this, '${esc(c[s.answerKey])}', '${esc(item[s.answerKey])}')">${c[s.answerKey]}</button>`).join('')}
    </div>
    <button class="btn btn-outline quiz-skip" onclick="renderQuiz('${prefix}')">Skip →</button>
  `;
}

function checkAnswer(prefix, btn, chosen, correct) {
  const s = quizState[prefix];
  s.total++;
  const container = document.getElementById(`${prefix}-quiz-inner`);
  const choices = container.querySelectorAll('.quiz-choice');
  choices.forEach(b => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add('correct');
  });

  if (chosen === correct) {
    s.score++;
    btn.classList.add('correct');
    showFeedback(container, '🎉 Correct!', 'correct');
  } else {
    btn.classList.add('wrong');
    showFeedback(container, `❌ The answer was: ${correct}`, 'wrong');
  }

  // Update score display
  const scoreEl = container.querySelector('.quiz-score');
  if (scoreEl) scoreEl.textContent = `Score: ${s.score} / ${s.total}`;

  // Auto-next after 1.5s
  setTimeout(() => renderQuiz(prefix), 1600);
}

function showFeedback(container, msg, type) {
  const fb = document.createElement('div');
  fb.className = `quiz-feedback ${type}`;
  fb.textContent = msg;
  container.appendChild(fb);
}

// ── Kanji Section ────────────────────────────────────────────
let furiganaVisible = true;

function buildKanjiSection() {
  const container = document.getElementById('kanji-grid');
  if (!container) return;

  // Inject toggle button above the grid (once)
  const browsePanel = document.getElementById('kanji-browse');
  if (browsePanel && !browsePanel.querySelector('.furigana-toggle-bar')) {
    const bar = document.createElement('div');
    bar.className = 'furigana-toggle-bar';
    bar.innerHTML = `
      <span>Show hiragana reading on examples:</span>
      <button class="furigana-toggle-btn active" id="furigana-toggle" onclick="toggleFurigana()">
        あ ON
      </button>`;
    browsePanel.insertBefore(bar, container);
  }

  container.innerHTML = '';
  const categories = [...new Set(KANJI.map(k => k.category))];
  const catNames = { numbers:'🔢 Numbers', nature:'🌿 Nature & Days', people:'🧑 People & Body', size:'📏 Size & Direction', common:'📖 Common Verbs & Words' };

  categories.forEach(cat => {
    const sec = document.createElement('div');
    sec.className = 'kanji-category';
    sec.innerHTML = `<h3 class="cat-title">${catNames[cat] || cat}</h3><div class="kanji-row"></div>`;
    const row = sec.querySelector('.kanji-row');

    KANJI.filter(k => k.category === cat).forEach(k => {
      const card = document.createElement('div');
      card.className = 'kanji-card';
      card.innerHTML = `
        <div class="k-char">${k.char}</div>
        <div class="k-reading">${k.reading}</div>
        <div class="k-meaning">${k.meaning}</div>
        <div class="k-furigana-ex ${furiganaVisible ? '' : 'hidden'}">${k.furigana || ''}</div>`;
      card.addEventListener('click', () => showKanjiModal(k));
      row.appendChild(card);
    });
    container.appendChild(sec);
  });
}

function toggleFurigana() {
  furiganaVisible = !furiganaVisible;
  document.querySelectorAll('.k-furigana-ex').forEach(el => el.classList.toggle('hidden', !furiganaVisible));
  const btn = document.getElementById('furigana-toggle');
  if (btn) {
    btn.textContent = furiganaVisible ? 'あ ON' : 'あ OFF';
    btn.classList.toggle('active', furiganaVisible);
  }
}

function showKanjiModal(k) {
  const modal = document.getElementById('kanji-modal');
  document.getElementById('km-char').textContent = k.char;
  document.getElementById('km-reading').textContent = k.reading;
  document.getElementById('km-meaning').textContent = k.meaning;
  // Show both furigana and plain example in modal
  const exEl = document.getElementById('km-example');
  if (exEl) {
    exEl.innerHTML = k.furigana
      ? `<span class="km-furigana">${k.furigana}</span><br><span class="km-plain">${k.example}</span>`
      : (k.example || '');
  }
  modal.classList.add('open');
}

// ── Vocabulary Section ────────────────────────────────────────
function buildVocabSection() {
  const filter = document.getElementById('vocab-filter');
  const container = document.getElementById('vocab-grid');
  if (!container) return;

  const cats = [...new Set(VOCAB.map(v => v.category))];
  if (filter) {
    filter.innerHTML = `<button class="filter-btn active" data-cat="all">All</button>` +
      cats.map(c => `<button class="filter-btn" data-cat="${c}">${catLabel(c)}</button>`).join('');
    filter.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderVocab(btn.dataset.cat);
      });
    });
  }
  renderVocab('all');
}

function renderVocab(cat) {
  const container = document.getElementById('vocab-grid');
  if (!container) return;
  const list = cat === 'all' ? VOCAB : VOCAB.filter(v => v.category === cat);
  container.innerHTML = list.map(v => `
    <div class="vocab-card">
      <div class="v-emoji">${v.emoji || ''}</div>
      <div class="v-jp">${v.jp}</div>
      <div class="v-kana">${v.kana}</div>
      <div class="v-en">${v.en}</div>
    </div>`).join('');
}

function catLabel(cat) {
  const labels = { greetings:'👋 Greetings', numbers:'🔢 Numbers', colors:'🎨 Colors',
    food:'🍱 Food', animals:'🐾 Animals', family:'👨‍👩‍👧 Family', time:'🕐 Time & Days', places:'📍 Places' };
  return labels[cat] || cat;
}

// ── Communication Tips ────────────────────────────────────────
function buildCommTips(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = `
    <div class="tips-header">💡 Communication Tips</div>
    <div class="tips-grid">
      ${COMM_TIPS.map((t, i) => `
        <div class="tip-card" style="--tc:${t.color}" onclick="toggleTip(${i})">
          <div class="tip-card-top">
            <span class="tip-card-icon">${t.icon}</span>
            <span class="tip-card-title">${t.title}</span>
            <span class="tip-card-arrow" id="tip-arr-${i}">▼</span>
          </div>
          <div class="tip-card-body" id="tip-body-${i}">${t.body}</div>
        </div>`).join('')}
    </div>`;
}

function toggleTip(i) {
  const body = document.getElementById(`tip-body-${i}`);
  const arr  = document.getElementById(`tip-arr-${i}`);
  const open = body.classList.toggle('open');
  if (arr) arr.textContent = open ? '▲' : '▼';
}

// ── Phrases Section ───────────────────────────────────────────
function buildPhrasesSection() {
  const filter = document.getElementById('phrase-filter');
  const cats = [...new Set(PHRASES.map(p => p.category))];
  const catLabels = { intro:'🤝 Introductions', daily:'🏠 Daily Life', questions:'❓ Questions', shopping:'🛍️ Shopping', feelings:'💭 Feelings', classroom:'🏫 Classroom', restaurant:'🍜 Restaurant' };

  if (filter) {
    filter.innerHTML = `<button class="filter-btn active" data-cat="all">All</button>` +
      cats.map(c => `<button class="filter-btn" data-cat="${c}">${catLabels[c] || c}</button>`).join('');
    filter.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPhrases(btn.dataset.cat);
      });
    });
  }
  renderPhrases('all');
}

function renderPhrases(cat) {
  const container = document.getElementById('phrases-list');
  if (!container) return;
  const list = cat === 'all' ? PHRASES : PHRASES.filter(p => p.category === cat);
  container.innerHTML = list.map(p => `
    <div class="phrase-card">
      <div class="ph-jp">${p.jp || p.char || ''}</div>
      <div class="ph-romaji">${p.romaji}</div>
      <div class="ph-en">${p.en}</div>
      ${p.note ? `<div class="ph-note">💡 ${p.note}</div>` : ''}
    </div>`).join('');
}

// ── Grammar Section ───────────────────────────────────────────
function buildGrammarSection() {
  const container = document.getElementById('grammar-list');
  if (!container) return;
  container.innerHTML = GRAMMAR.map((g, i) => `
    <div class="grammar-card" style="--gc:${g.color}">
      <div class="gc-header" onclick="toggleGrammar(${i})">
        <span class="gc-icon">${g.icon}</span>
        <span class="gc-title">${g.title}</span>
        <span class="gc-toggle" id="gc-tog-${i}">▼</span>
      </div>
      <div class="gc-body" id="gc-body-${i}">
        <p>${g.explanation}</p>
        ${g.particles ? `<div class="particle-table">
          ${g.particles.map(p => `<div class="pt-row">
            <span class="pt-p">${p.p}</span>
            <span class="pt-role">${p.role}</span>
            <span class="pt-ex">${p.example}</span>
          </div>`).join('')}
        </div>` : ''}
        ${g.examples ? `<div class="example-list">
          ${g.examples.map(e => `<div class="ex-item">
            <span class="ex-jp">${e.jp}</span>
            <span class="ex-rom">${e.romaji}</span>
            <span class="ex-en">${e.en}</span>
          </div>`).join('')}
        </div>` : ''}
      </div>
    </div>`).join('');
}

function toggleGrammar(i) {
  const body = document.getElementById(`gc-body-${i}`);
  const tog = document.getElementById(`gc-tog-${i}`);
  const open = body.classList.toggle('open');
  if (tog) tog.textContent = open ? '▲' : '▼';
}

// ── Lessons Section ───────────────────────────────────────────
function buildLessonsSection() {
  const container = document.getElementById('lessons-list');
  if (!container) return;

  container.innerHTML = LESSONS.map((lesson, i) => `
    <div class="lesson-card" style="--lc:${lesson.color}" id="lesson-card-${i}">
      <div class="lesson-header" onclick="toggleLesson(${i})">
        <div class="lesson-icon">${lesson.icon}</div>
        <div class="lesson-title-wrap">
          <span class="lesson-date">${lesson.date}</span>
          <span class="lesson-title">${lesson.title}</span>
        </div>
        <span class="lesson-toggle" id="lesson-tog-${i}">▼</span>
      </div>
      <div class="lesson-body" id="lesson-body-${i}">

        ${lesson.vocab && lesson.vocab.length ? `
        <div class="lesson-section-title">📖 Vocabulary</div>
        <div class="lesson-vocab-grid">
          ${lesson.vocab.map(v => `
            <div class="lesson-vocab-card">
              <div class="lv-emoji">${v.emoji || ''}</div>
              <div class="lv-jp">${v.jp}</div>
              <div class="lv-romaji">${v.romaji}</div>
              <div class="lv-en">${v.en}</div>
            </div>`).join('')}
        </div>` : ''}

        ${lesson.patterns && lesson.patterns.length ? `
        <div class="lesson-section-title">💬 Sentence Patterns</div>
        <div class="lesson-patterns">
          ${lesson.patterns.map(p => `
            <div class="lesson-pattern-row">
              <span class="lp-pattern">${p.pattern}</span>
              <span class="lp-romaji">${p.romaji}</span>
              <span class="lp-en">${p.en}</span>
            </div>`).join('')}
        </div>` : ''}

        ${lesson.examples && lesson.examples.length ? `
        <div class="lesson-section-title">🗣️ Example Sentences</div>
        <div class="example-list">
          ${lesson.examples.map(e => `
            <div class="ex-item">
              <span class="ex-jp">${e.jp}</span>
              <span class="ex-rom">${e.romaji}</span>
              <span class="ex-en">${e.en}</span>
            </div>`).join('')}
        </div>` : ''}

        ${lesson.notes && lesson.notes.length ? `
        <div class="lesson-section-title">💡 Notes</div>
        ${lesson.notes.map(n => `
          <div class="lesson-note">
            <strong>${n.title}</strong>
            <p>${n.content}</p>
          </div>`).join('')}` : ''}

      </div>
    </div>`).join('');
}

function toggleLesson(i) {
  const body = document.getElementById(`lesson-body-${i}`);
  const tog  = document.getElementById(`lesson-tog-${i}`);
  const open = body.classList.toggle('open');
  if (tog) tog.textContent = open ? '▲' : '▼';
}

// ── Utilities ─────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function esc(s) {
  return String(s).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });

  // Close modal
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
  });
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.modal-overlay').classList.remove('open'));
  });

  // ── Build Hiragana ──
  buildKanaChart('hiragana-chart-grid', HIRAGANA, HIRAGANA_DAKUTEN);
  initFlashcards('hira', HIRAGANA);
  initQuiz('hira', HIRAGANA,
    item => `<div class="quiz-big-char">${item.char}</div><p>What is the romaji?</p>`,
    'romaji');

  // ── Build Katakana ──
  buildKanaChart('katakana-chart-grid', KATAKANA, []);
  initFlashcards('kata', KATAKANA);
  initQuiz('kata', KATAKANA,
    item => `<div class="quiz-big-char">${item.char}</div><p>What is the romaji?</p>`,
    'romaji');

  // ── Kanji ──
  buildKanjiSection();
  initFlashcards('kanji', KANJI);
  initQuiz('kanji', KANJI,
    item => `<div class="quiz-big-char">${item.char}</div><p>What does this mean?</p>`,
    'meaning');

  // ── Vocab ──
  buildVocabSection();
  initFlashcards('vocab', VOCAB);

  // ── Phrases ──
  buildPhrasesSection();

  // ── Grammar ──
  buildGrammarSection();
  buildCommTips('comm-tips-container');

  // ── Lessons ──
  buildLessonsSection();

  // Tab buttons (generic handler)
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const tabId = btn.dataset.tab;
      document.querySelectorAll(`.tab-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
      document.querySelectorAll(`.tab-panel[data-group="${group}"]`).forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(tabId);
      if (panel) panel.classList.add('active');
    });
  });
});
