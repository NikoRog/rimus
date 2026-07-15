import { loadLearningPack } from '../content/learningLoader.js';
import { lookupRhymes } from '../freestyle/rhymeService.js';
import { esc, shuffle } from '../platform/utils.js';

const PACK_URL = './content/learning/learning-pack-v01.txt';

export function createLearningMode({ els, show, toast, onRoundComplete = () => {} }) {
  const state = {
    pack: null,
    difficulty: 'easy',
    unit: 1,
    exercise: 0,
    current: null,
    recentGroups: [],
    recentTargets: [],
    recentSentences: [],
    recentOrders: []
  };

  async function open() {
    show('learning');
    els.learningStage.innerHTML = '<p class="muted">Loading learning pack...</p>';
    try {
      state.pack ||= await loadLearningPack(PACK_URL);
      renderStart();
    } catch (error) {
      els.learningStage.innerHTML = `<div class="learn-error"><b>Learning pack error</b><p>${esc(error.message)}</p></div>`;
      console.error(error);
    }
  }

  async function startDifficulty(difficulty = 'easy') {
    show('learning');
    els.learningStage.innerHTML = '<p class="muted">Loading learning pack...</p>';
    try {
      state.pack ||= await loadLearningPack(PACK_URL);
      state.difficulty = difficulty;
      start();
    } catch (error) {
      els.learningStage.innerHTML = `<div class="learn-error"><b>Learning pack error</b><p>${esc(error.message)}</p></div>`;
      console.error(error);
    }
  }

  function renderStart() {
    els.learningTitle.textContent = 'Learning Mode';
    els.learningStage.innerHTML = `
      <div class="learn-card card">
        <h3>Choose difficulty</h3>
        <div class="learn-diff">
          <button class="secondary ${state.difficulty === 'easy' ? 'active' : ''}" data-learn-diff="easy">Easy</button>
          <button class="secondary ${state.difficulty === 'hard' ? 'active' : ''}" data-learn-diff="hard">Hard</button>
        </div>
        <button class="primary" data-learn-start>Start Learning</button>
      </div>`;
  }

  function start() {
    state.unit = 1;
    state.exercise = 0;
    state.recentGroups = [];
    state.recentTargets = [];
    state.recentSentences = [];
    state.recentOrders = [];
    nextExercise();
  }

  function nextExercise() {
    state.exercise++;
    if (state.exercise > 3) {
      state.exercise = 1;
      state.unit = state.unit === 1 ? 2 : 1;
    }
    state.current = state.unit === 1 ? makePickRhymes() : makeWriteRhyme();
    renderExercise();
  }

  function groups() {
    return state.pack.byDifficulty[state.difficulty] || [];
  }

  function pickGroup() {
    const list = groups();
    const fresh = list.filter(group => group.id !== state.recentGroups.at(-1));
    const group = pick(fresh.length ? fresh : list);
    state.recentGroups.push(group.id);
    state.recentGroups = state.recentGroups.slice(-4);
    return group;
  }

  function pickWord(group) {
    const fresh = group.words.filter(word => !state.recentTargets.includes(norm(word)));
    const word = pick(fresh.length ? fresh : group.words);
    state.recentTargets.push(norm(word));
    state.recentTargets = state.recentTargets.slice(-8);
    return word;
  }

  function pickSentence(group) {
    const fresh = group.sentences.filter(sentence => !state.recentSentences.includes(sentence));
    const sentence = pick(fresh.length ? fresh : group.sentences);
    state.recentSentences.push(sentence);
    state.recentSentences = state.recentSentences.slice(-8);
    return sentence;
  }

  function makePickRhymes() {
    const group = pickGroup();
    const target = pickWord(group);
    const correct = shuffle(group.words.filter(word => norm(word) !== norm(target))).slice(0, 3);
    const otherWords = shuffle(groups().filter(item => item.id !== group.id).flatMap(item => item.words));
    const options = uniqueWords([...correct, ...otherWords]).slice(0, 8);
    let ordered = shuffle(options);
    let orderKey = ordered.join('|');
    for (let i = 0; i < 4 && state.recentOrders.includes(orderKey); i++) {
      ordered = shuffle(options);
      orderKey = ordered.join('|');
    }
    state.recentOrders.push(orderKey);
    state.recentOrders = state.recentOrders.slice(-6);
    return { type: 'pick', group, target, correct: new Set(correct.map(norm)), options: ordered, selected: new Set(), checked: false };
  }

  function makeWriteRhyme() {
    const group = pickGroup();
    const target = pickWord(group);
    const sentence = pickSentence(group);
    return { type: 'write', group, target, sentence, answer: '', checked: false, correct: false, tries: 0, hints: [], loadingHint: false };
  }

  function renderExercise() {
    const c = state.current;
    els.learningTitle.textContent = `Unit ${state.unit}: ${state.unit === 1 ? 'Pick the Rhymes' : 'Write the Rhyme'} (${state.exercise}/3)`;
    if (c.type === 'pick') renderPick(c);
    else renderWrite(c);
  }

  function renderPick(c) {
    const status = c.checked ? pickStatus(c) : '';
    els.learningStage.innerHTML = `
      <div class="learn-card card">
        <div class="learn-topline"><span>${esc(c.group.id)}</span><span>${esc(state.difficulty)}</span></div>
        <div class="learn-target"><span>Target: <b>${esc(c.target)}</b></span>${speakButton(c.target)}</div>
        <div class="learn-options">
          ${c.options.map(word => optionButton(word, c)).join('')}
        </div>
        ${status}
        <div class="learn-actions">
          <button class="secondary" data-learn-skip>Skip</button>
          <button class="primary" data-learn-confirm>${c.checked ? 'Next' : 'Confirm'}</button>
        </div>
      </div>`;
  }

  function optionButton(word, c) {
    const key = norm(word);
    const selected = c.selected.has(key);
    const isCorrect = c.correct.has(key);
    const resultClass = c.checked ? (isCorrect ? ' correct' : selected ? ' wrong' : '') : '';
    return `<div class="learn-option${selected ? ' selected' : ''}${resultClass}" data-learn-option="${esc(word)}"><span>${esc(word)}</span>${speakButton(word)}</div>`;
  }

  function pickStatus(c) {
    const missed = [...c.correct].filter(key => !c.selected.has(key)).length;
    const wrong = [...c.selected].filter(key => !c.correct.has(key)).length;
    return `<p class="learn-result ${missed || wrong ? 'bad' : 'good'}">${missed || wrong ? `Missed ${missed}, wrong ${wrong}.` : 'Correct.'}</p>`;
  }

  function renderWrite(c) {
    const result = c.tries ? `<p class="learn-result ${c.correct ? 'good' : 'bad'}">${c.correct ? 'Correct.' : 'Try a word from this sound group.'}</p>` : '';
    const hints = c.loadingHint ? '<p class="learn-hint">Looking up rhyme hints...</p>' : c.hints.length ? `<p class="learn-hint">Hint: ${c.hints.map(esc).join(', ')}</p>` : '';
    const skip = c.tries >= 2 ? '<button class="secondary" data-learn-skip>Skip</button>' : '';
    els.learningStage.innerHTML = `
      <div class="learn-card card">
        <div class="learn-topline"><span>${esc(c.group.id)}</span><span>${esc(state.difficulty)}</span></div>
        <div class="learn-target"><span>Rhyme with: <b>${esc(c.target)}</b></span>${speakButton(c.target)}</div>
        <p class="learn-sentence">${esc(c.sentence)}</p>
        <input id="learningAnswer" class="learn-input" value="${esc(c.answer)}" placeholder="type a rhyme">
        ${result}
        ${hints}
        <div class="learn-actions">
          ${skip}
          <button class="primary" data-learn-confirm>${c.checked ? 'Next' : 'Confirm'}</button>
        </div>
      </div>`;
    document.getElementById('learningAnswer')?.focus();
  }

  async function confirm() {
    const c = state.current;
    if (c.checked) return nextExercise();
    if (c.type === 'write') {
      c.answer = document.getElementById('learningAnswer')?.value || '';
      c.correct = c.group.words.map(norm).includes(norm(c.answer));
      c.tries++;
      if (!c.correct) {
        await loadWriteHints(c);
        renderExercise();
        return;
      }
    }
    c.checked = true;
    onRoundComplete();
    renderExercise();
  }

  async function loadWriteHints(c) {
    c.loadingHint = true;
    renderExercise();
    const api = await lookupRhymes(c.target);
    const groupWords = new Set(c.group.words.map(norm));
    c.hints = uniqueWords([
      ...api.rhymes.filter(word => groupWords.has(norm(word))),
      ...c.group.words.filter(word => norm(word) !== norm(c.target))
    ]).slice(0, 5);
    c.loadingHint = false;
  }

  function skip() {
    const c = state.current;
    if (!c) return;
    nextExercise();
  }

  function toggleOption(word) {
    const c = state.current;
    if (!c || c.type !== 'pick' || c.checked) return;
    const key = norm(word);
    if (c.selected.has(key)) c.selected.delete(key);
    else c.selected.add(key);
    renderPick(c);
  }

  function speak(text) {
    if (!window.speechSynthesis) return toast('Speech is not available in this browser');
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.82;
    const voice = speechSynthesis.getVoices().find(item => item.lang?.toLowerCase().startsWith('en'));
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
  }

  function wire() {
    els.learningStage.addEventListener('click', event => {
      const diff = event.target.closest('[data-learn-diff]')?.dataset.learnDiff;
      const startButton = event.target.closest('[data-learn-start]');
      const confirmButton = event.target.closest('[data-learn-confirm]');
      const speakText = event.target.closest('[data-speak]')?.dataset.speak;
      const optionEl = event.target.closest('[data-learn-option]');
      const skipButton = event.target.closest('[data-learn-skip]');
      const option = optionEl?.dataset.learnOption;
      if (diff) {
        state.difficulty = diff;
        renderStart();
      } else if (startButton) {
        start();
      } else if (confirmButton) {
        confirm();
      } else if (skipButton) {
        skip();
      } else if (option) {
        if (event.target.closest('[data-speak]')) speak(speakText);
        else toggleOption(option);
      } else if (speakText) {
        speak(speakText);
      }
    });
    els.learningStage.addEventListener('keydown', event => {
      if (event.key === 'Enter' && state.current?.type === 'write') confirm();
    });
  }

  return { open, startDifficulty, wire };
}

function speakButton(word) {
  return `<button class="speak" type="button" data-speak="${esc(word)}" aria-label="Speak ${esc(word)}">Speaker</button>`;
}

function norm(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, ' ');
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function uniqueWords(words) {
  const seen = new Set();
  return words.filter(word => {
    const key = norm(word);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
