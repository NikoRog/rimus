import { createAnalytics } from './analytics/analytics.js';
import { createAudioSystem } from './audio/audio.js';
import { APP_VERSION, MODES } from './core/config.js';
import { loadFreestylePacks, finalMeaningfulWord } from './content/freestyleLoader.js';
import { createCardPool } from './freestyle/cardPool.js';
import { lookupRhymes } from './freestyle/rhymeService.js';
import { downloadJSON, esc } from './platform/utils.js';
import { $, collectGameElements } from './ui/dom.js';
import { createHowToPlayController } from './ui/howToPlay.js';
import { createLearningMode } from './learning/learningMode.js';

const els = collectGameElements();
const state = {
  packs: null,
  pool: null,
  currentCard: null,
  modeIndex: MODES.findIndex(mode => mode[0] === 'freeplay') || 0,
  category: '',
  learningDifficulty: 'easy',
  players: [{ name: 'Player 1', score: 0 }, { name: 'Player 2', score: 0 }],
  turn: 0,
  lives: 3,
  advancing: false
};

function show(name) {
  ['menu', 'freestyleSetup', 'rivalsSetup', 'freestyle', 'learningSetup', 'learning'].forEach(key => {
    els[key]?.classList.toggle('hidden', key !== name);
  });
}

function modal(id, on) {
  $(id)?.classList.toggle('hidden', !on);
}

function toast(message) {
  if (!els.toast) return;
  els.toast.textContent = message;
  els.toast.classList.add('show');
  setTimeout(() => els.toast.classList.remove('show'), 2200);
}

const Analytics = createAnalytics({
  els,
  downloadJSON,
  getContext: () => ({
    mode: MODES[state.modeIndex]?.[0] || 'freeplay',
    subject: state.category || ''
  })
});
window.Analytics = Analytics;

const AudioSys = createAudioSystem({ els, assetPath: './assets/yo-100634.mp3' });
const HowToPlay = createHowToPlayController({ track: () => {} });
const LearningMode = createLearningMode({ els, show, toast, onRoundComplete: () => addCoins(10) });

function coins() {
  return +(localStorage.rimusCoins || 0);
}

function setCoins(value) {
  localStorage.rimusCoins = String(Math.max(0, Math.floor(value)));
  renderCoins();
}

function addCoins(value) {
  setCoins(coins() + value);
}

function renderCoins() {
  const text = `${coins()} coins`;
  if (els.coinsMenu) els.coinsMenu.textContent = text;
  if (els.coinsGame) els.coinsGame.textContent = text;
  if (els.coinsSetup) els.coinsSetup.textContent = text;
  if (els.coinsLearning) els.coinsLearning.textContent = text;
}

async function ensurePacks() {
  if (state.packs) return state.packs;
  setStatus('loading packs...', false);
  state.packs = await loadFreestylePacks();
  state.pool = createCardPool(state.packs.cards);
  state.category = state.category || state.packs.categories[0]?.id || '';
  renderPackStatus();
  return state.packs;
}

function setStatus(text, online = true) {
  if (els.apiText) els.apiText.textContent = text;
  if (els.dot) els.dot.className = 'dot ' + (online ? 'online' : 'offline');
}

function renderPackStatus() {
  if (!state.packs) return;
  setStatus(`${state.packs.cards.length} cards ready`, true);
  if (els.apiList) {
    els.apiList.innerHTML = state.packs.files.map(file => `<div class="api"><span class="dot online"></span><div><b>${esc(file)}</b><div class="muted">TXT freestyle pack</div></div></div>`).join('');
  }
  if (els.packList) {
    els.packList.innerHTML = state.packs.categories.map(category => {
      const count = state.packs.cards.filter(card => card.category === category.id).length;
      return `<div class="pack"><div><b>${esc(category.name)}</b><div class="muted">${count} cards</div></div></div>`;
    }).join('');
  }
}

async function openFreestyleSetup() {
  show('freestyleSetup');
  els.freestyleError.textContent = '';
  try {
    const packs = await ensurePacks();
    els.subjectSelect.innerHTML = packs.categories.map(category => `<option value="${esc(category.id)}">${esc(category.name)}</option>`).join('');
    els.subjectSelect.value = state.category;
    renderMode();
  } catch (error) {
    console.error(error);
    setStatus('pack error', false);
    els.freestyleError.textContent = error.message;
  }
}

function renderMode() {
  if (els.modeVal) els.modeVal.textContent = MODES[state.modeIndex]?.[1] || 'Free Play';
}

function changeMode(dir) {
  state.modeIndex = (state.modeIndex + dir + MODES.length) % MODES.length;
  renderMode();
}

function startFreestyle() {
  if (!state.packs || !state.pool) return;
  state.category = els.subjectSelect.value;
  state.lives = 3;
  state.turn = 0;
  state.players.forEach(player => { player.score = 0; });
  state.pool.reset(state.category);
  Analytics.track('subject_selected', { subject: state.category, mode: MODES[state.modeIndex]?.[0] || 'freeplay' });
  show('freestyle');
  renderNextCard();
}

function openRivalsSetup() {
  renderPlayers();
  show('rivalsSetup');
}

function renderNextCard() {
  state.currentCard = state.pool.next(state.category);
  state.advancing = false;
  if (!state.currentCard) {
    els.personName.textContent = 'No cards';
    els.funFact.classList.add('hidden');
    els.sentence.textContent = 'This subject has no valid cards.';
    return;
  }
  const card = state.currentCard;
  const categoryName = state.packs.categories.find(item => item.id === card.category)?.name || card.category;
  els.freestyleMeta.textContent = `${MODES[state.modeIndex]?.[1] || 'Free Play'} - ${categoryName}`;
  els.personName.textContent = card.personName;
  els.funFact.textContent = card.works.length ? `Works: ${card.works.join(', ')}` : '';
  els.funFact.classList.toggle('hidden', !card.works.length);
  els.sentence.textContent = card.sentence;
  els.rhymePanel.classList.add('hidden');
  els.rhymePanel.textContent = '';
  renderGameHud();
}

async function showRhymes() {
  const word = finalMeaningfulWord(state.currentCard?.sentence);
  if (!word) return toast('No final word found');
  if (currentMode() === 'survival') {
    state.lives = Math.max(0, state.lives - 1);
    renderGameHud();
    if (state.lives <= 0) {
      toast('Survival over');
      setTimeout(() => show('menu'), 700);
      return;
    }
  }
  els.rhymePanel.classList.remove('hidden');
  els.rhymePanel.textContent = `Looking for rhymes for ${word}...`;
  const result = await lookupRhymes(word);
  if (result.rhymes.length) {
    els.rhymePanel.innerHTML = `<b>${esc(word)}</b>: ${result.rhymes.map(esc).join(', ')}`;
  } else {
    els.rhymePanel.innerHTML = `<b>${esc(word)}</b>: ${esc(result.message || 'No rhymes found.')}`;
  }
}

function gotIt() {
  if (state.advancing) return;
  state.advancing = true;
  addCoins(2);
  if (currentMode() === 'rivals') {
    state.players[state.turn].score += 1;
    state.turn = (state.turn + 1) % state.players.length;
  }
  AudioSys.yo();
  setTimeout(renderNextCard, 120);
}

function currentMode() {
  return MODES[state.modeIndex]?.[0] || 'freeplay';
}

function renderGameHud() {
  if (!els.freestyleHud) return;
  if (currentMode() === 'survival') {
    els.freestyleHud.innerHTML = `<div class="banner surv">SURVIVAL - LIVES ${state.lives}/3</div>`;
    return;
  }
  if (currentMode() === 'rivals') {
    const current = state.players[state.turn] || state.players[0];
    els.freestyleHud.innerHTML = `<div class="banner">${esc(current.name)}'s turn</div><div class="strip compact-strip">${state.players.map((player, index) => `<div class="chip ${index === state.turn ? 'active' : ''}"><b>${esc(player.name)}</b><br><span class="muted">${player.score} pts</span></div>`).join('')}</div>`;
    return;
  }
  els.freestyleHud.innerHTML = '';
}

function renderPlayers() {
  renderCoins();
  els.playersList.innerHTML = state.players.map((player, index) => `<div class="player-row card"><input data-player="${index}" value="${esc(player.name)}" maxlength="18">${state.players.length > 2 ? `<button data-remove-player="${index}" type="button">X</button>` : ''}</div>`).join('');
}

function openLearningSetup() {
  show('learningSetup');
  renderLearningDifficulty();
}

function setLearningDifficulty(difficulty) {
  state.learningDifficulty = difficulty;
  renderLearningDifficulty();
}

function renderLearningDifficulty() {
  ['easy', 'hard'].forEach(difficulty => {
    $(`learn${difficulty[0].toUpperCase()}${difficulty.slice(1)}`)?.classList.toggle('active', state.learningDifficulty === difficulty);
  });
}

function renderSettings() {
  AudioSys.set(AudioSys.volume);
  if (els.analyticsToggle) els.analyticsToggle.checked = Analytics.enabled;
  renderPackStatus();
}

function wire() {
  $('freestyleStart').onclick = openFreestyleSetup;
  $('freestyleSetupBack').onclick = () => show('menu');
  $('rivalsBack').onclick = openFreestyleSetup;
  $('freestyleBack').onclick = () => show('menu');
  $('modePrev').onclick = () => changeMode(-1);
  $('modeNext').onclick = () => changeMode(1);
  $('startFreestyleGame').onclick = () => HowToPlay.requestBeforeStart(() => currentMode() === 'rivals' ? openRivalsSetup() : startFreestyle());
  $('addPlayer').onclick = () => { if (state.players.length < 8) state.players.push({ name: `Player ${state.players.length + 1}`, score: 0 }); renderPlayers(); };
  els.playersList.oninput = event => {
    const index = event.target.dataset.player;
    if (index !== undefined) state.players[+index].name = event.target.value || `Player ${+index + 1}`;
  };
  els.playersList.onclick = event => {
    const index = event.target.dataset.removePlayer;
    if (index !== undefined && state.players.length > 2) {
      state.players.splice(+index, 1);
      renderPlayers();
    }
  };
  $('startRivalsGame').onclick = startFreestyle;
  $('helpBtn').onclick = showRhymes;
  $('gotItBtn').onclick = gotIt;
  $('learningStart').onclick = openLearningSetup;
  $('learningSetupBack').onclick = () => show('menu');
  $('learnEasy').onclick = () => setLearningDifficulty('easy');
  $('learnHard').onclick = () => setLearningDifficulty('hard');
  $('startLearningGame').onclick = () => LearningMode.startDifficulty(state.learningDifficulty);
  $('learningBack').onclick = () => show('menu');
  $('help').onclick = () => HowToPlay.open({ source: 'menu' });
  $('settings').onclick = () => { renderSettings(); modal('settingsModal', true); };
  $('apiBtn').onclick = () => modal('apiModal', true);
  $('testSfx').onclick = () => AudioSys.yo();
  if (els.volumeSlider) els.volumeSlider.oninput = event => AudioSys.set(event.target.value / 100);
  if (els.analyticsToggle) els.analyticsToggle.onchange = event => Analytics.consent(event.target.checked);
  $('exportAnalytics').onclick = () => Analytics.export();
  $('analyticsAccept').onclick = () => { Analytics.consent(true); modal('analyticsConsentModal', false); };
  $('analyticsDecline').onclick = () => { Analytics.consent(false); modal('analyticsConsentModal', false); };
  document.onclick = event => {
    const close = event.target.dataset.close;
    if (close) modal(close, false);
  };
}

AudioSys.set(AudioSys.volume);
localStorage.rimusCoins ??= localStorage.reCoins || '0';
renderCoins();
renderMode();
wire();
LearningMode.wire();
show('menu');
ensurePacks().catch(error => {
  console.error(error);
  setStatus('pack error', false);
});
if (localStorage.reAnalyticsConsent === undefined) modal('analyticsConsentModal', true);
if (Analytics.enabled) Analytics.init();

window.RimusDebug = {
  version: APP_VERSION,
  get state() {
    return {
      category: state.category,
      mode: MODES[state.modeIndex]?.[0],
      currentCard: state.currentCard,
      packFiles: state.packs?.files || [],
      cards: state.packs?.cards.length || 0
    };
  }
};
