import { createAnalytics } from './analytics/analytics.js';
import { createAudioSystem } from './audio/audio.js';
import { APP_VERSION, FIREBASE_CONFIG, GAME_CONFIG, MODES, BEATS } from './core/config.js';
import { createFreshGame } from './core/game.js';
import { createInitialState } from './state/gameState.js';
import { compileSentencePrompts, SE_SUBJECTS, sentenceEngineDebug } from './content/sentenceEngine.js';
import { downloadJSON, pick, clean, esc, opener, shuffle } from './platform/utils.js';
import { $, collectGameElements } from './ui/dom.js';
import { createHowToPlayController } from './ui/howToPlay.js';
import { createVisualEffects } from './visuals/effects.js';

const C = GAME_CONFIG;
const S = createInitialState();
const els = collectGameElements();
const ALL_SUBJECTS = SE_SUBJECTS;
const allPrompts = compileSentencePrompts(ALL_SUBJECTS.map(s => s.id));

function show(name) {
  ['menu', 'loading', 'players', 'game'].forEach(key => els[key].classList.toggle('hidden', key !== name));
}

function modal(id, on) {
  const el = $(id);
  if (el) el.classList.toggle('hidden', !on);
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add('show');
  setTimeout(() => els.toast.classList.remove('show'), 2200);
}

function coins() {
  return +(localStorage.reCoins ?? C.startCoins);
}

function setCoins(value) {
  localStorage.reCoins = Math.max(0, value);
  renderCoins();
}

function addCoins(value) {
  setCoins(coins() + value);
}

function activeSubs() {
  return S.subjects.includes('random') ? ALL_SUBJECTS.map(s => s.id) : S.subjects.filter(id => ALL_SUBJECTS.some(s => s.id === id));
}

function subjectName(id) {
  return ALL_SUBJECTS.find(s => s.id === id)?.name || id;
}

const Analytics = createAnalytics({
  els,
  downloadJSON,
  getContext: () => ({ mode: MODES[S.mode]?.[0], subject: activeSubs().join(',') })
});
window.Analytics = Analytics;

const HowToPlay = createHowToPlayController({ track: () => {} });
const AudioSys = createAudioSystem({ els, assetPath: './assets/yo-100634.mp3' });
const Visuals = createVisualEffects({ audio: AudioSys });

function finalWord(sentence) {
  const match = String(sentence || '').trim().match(/[A-Za-z]+(?=[^A-Za-z]*$)/);
  return match ? clean(match[0]) : '';
}

function targetCount(sentence, target) {
  const key = clean(target);
  return (String(sentence || '').match(/[A-Za-z]+/g) || []).filter(word => clean(word) === key).length;
}

function validPrompt(prompt) {
  return finalWord(prompt.sentence) === clean(prompt.target) && targetCount(prompt.sentence, prompt.target) === 1;
}

function promptScore(prompt, queue = []) {
  const g = S.game;
  let score = 100 + Math.random() * 20;
  const target = clean(prompt.target);
  const open = opener(prompt.sentence);
  if (g) {
    if (g.recentT.includes(target)) score -= 120;
    if (g.recentS.includes(prompt.sentence)) score -= 180;
    if (g.recentOpen.includes(open)) score -= 70;
    if (g.recentSub.slice(-3).includes(prompt.subject)) score -= 20;
    if (g.recentAnchor?.slice(-2).includes(prompt.anchorKey)) score -= 300;
    if (g.recentItem?.includes(prompt.itemKey)) score -= 180;
    if (g.recentVerb?.slice(-2).every(verb => verb === prompt.verb)) score -= 300;
  }
  for (const item of queue) {
    if (clean(item.target) === target) score -= 140;
    if (item.sentence === prompt.sentence) score -= 200;
    if (opener(item.sentence) === open) score -= 50;
    if (item.anchorKey === prompt.anchorKey) score -= 180;
    if (item.itemKey === prompt.itemKey) score -= 160;
  }
  return score;
}

function allowedByRecent(prompt, queue = []) {
  const g = S.game;
  const recentAnchors = [...(g?.recentAnchor || []), ...queue.map(item => item.anchorKey).filter(Boolean)];
  const recentItems = [...(g?.recentItem || []), ...queue.map(item => item.itemKey).filter(Boolean)];
  const recentVerbs = [...(g?.recentVerb || []), ...queue.map(item => item.verb).filter(Boolean)];
  if (recentAnchors.slice(-2).includes(prompt.anchorKey)) return false;
  if (recentItems.slice(-8).includes(prompt.itemKey)) return false;
  if (recentVerbs.slice(-2).length === 2 && recentVerbs.slice(-2).every(verb => verb === prompt.verb) && prompt.verb === recentVerbs.at(-1)) return false;
  return true;
}

async function genPrompt(queue = []) {
  const subjects = new Set(activeSubs());
  const valid = allPrompts.filter(prompt => subjects.has(prompt.subject) && validPrompt(prompt));
  const pool = shuffle(valid.filter(prompt => allowedByRecent(prompt, queue)));
  const relaxedPool = pool.length ? pool : shuffle(valid);
  let best = null;
  for (const candidate of relaxedPool) {
    const prompt = { ...candidate };
    prompt.rhymes = [...prompt.rhymes];
    prompt.example = `Keep the flow moving with ${prompt.rhymes[0]}.`;
    prompt.score = promptScore(prompt, queue);
    if (!best || prompt.score > best.score) best = prompt;
  }
  return best || emergencyPrompt();
}

function emergencyPrompt() {
  return {
    source: 'emergency_fallback',
    subject: 'movies',
    subjectId: 'movies',
    ref: 'Fallback',
    scene: 'fallback',
    target: 'time',
    finalWord: 'time',
    sentence: 'The group kept the rhyme on time.',
    funFact: 'Emergency fallback is only used if Sentence Engine prompts fail.',
    rhymes: ['rhyme', 'line', 'shine'],
    example: 'Keep the flow moving with rhyme.',
    tpl: 'fallback',
    role: 'fallback'
  };
}

async function buildQueue() {
  const start = Date.now();
  const q = [];
  let tries = 0;
  while (q.length < C.queue && tries < C.queue * 5 && Date.now() - start < C.maxLoad) {
    tries++;
    const prompt = await genPrompt(q);
    if (!q.some(item => item.sentence === prompt.sentence)) q.push(prompt);
    els.bar.style.width = Math.round(q.length / C.queue * 100) + '%';
    els.loadText.textContent = 'Prepared ' + q.length + '/' + C.queue + ' prompts';
  }
  while (q.length < C.queue) {
    const prompt = await genPrompt(q);
    q.push(prompt);
  }
  S.queue = q;
}

function fresh(mode) {
  return createFreshGame(mode, S.rounds);
}

async function startGame(mode) {
  AudioSys.init();
  reset();
  S.game = fresh(mode);
  if (mode === 'rivals') {
    S.game.players = S.players.map(p => ({ name: p.name.trim() || 'Player', score: 0 }));
    S.game.total = S.rounds * S.game.players.length;
  }
  show('loading');
  els.bar.style.width = '0%';
  await Promise.all([buildQueue(), new Promise(resolve => setTimeout(resolve, C.minLoad))]);
  next(false);
  show('game');
}

function reset() {
  if (S.game?.timer) clearInterval(S.game.timer);
  S.game = null;
  S.queue = [];
}

function remember(prompt) {
  const g = S.game;
  g.recentT.push(clean(prompt.target));
  g.recentS.push(prompt.sentence);
  g.recentSub.push(prompt.subject);
  g.recentOpen.push(opener(prompt.sentence));
  g.recentAnchor ??= [];
  g.recentItem ??= [];
  g.recentVerb ??= [];
  g.recentAnchor.push(prompt.anchorKey || '');
  g.recentItem.push(prompt.itemKey || clean(prompt.sentence));
  g.recentVerb.push(prompt.verb || prompt.role || '');
  ['recentT', 'recentS', 'recentSub', 'recentOpen', 'recentAnchor', 'recentItem', 'recentVerb'].forEach(key => {
    while (g[key].length > 24) g[key].shift();
  });
}

function next(award = true) {
  const g = S.game;
  if (!g || g.over) return;
  if (award && g.prompt) {
    addCoins(C.coins);
    if (g.mode === 'rivals') scoreTurn();
  }
  if (g.mode === 'rivals' && g.round >= g.total) return endRivals();
  AudioSys.pop();
  g.round++;
  g.wordI = 0;
  g.wordHelp = false;
  g.sentHelp = false;
  g.sentShown = false;
  g.penalty = 0;
  g.prompt = S.queue.shift() || emergencyPrompt();
  remember(g.prompt);
  if (g.mode === 'rivals') startTimer();
  renderGame();
  if (S.queue.length < C.queue) genPrompt(S.queue).then(prompt => S.queue.push(prompt));
}

function scoreNow() {
  const g = S.game;
  return Math.max(10, 20 - Math.floor((Date.now() - g.start) / 10000) - g.penalty);
}

function scoreTurn() {
  const g = S.game;
  g.players[g.turn].score += scoreNow();
  g.turn = (g.turn + 1) % g.players.length;
}

function startTimer() {
  const g = S.game;
  if (g.timer) clearInterval(g.timer);
  g.start = Date.now();
  g.timer = setInterval(() => {
    if (!S.game || S.game.mode !== 'rivals') return;
    els.timer.textContent = scoreNow() + ' pts';
    const live = $('livePts');
    if (live) live.textContent = scoreNow();
  }, 400);
}

function renderSentence(sentence, target) {
  let index = 0;
  const targetKey = clean(target);
  els.sentence.innerHTML = sentence.split(/(\s+)/).map(part => {
    if (/^\s+$/.test(part)) return part;
    const cls = clean(part) === targetKey ? 'wp target' : 'wp';
    return `<span class="${cls}" style="animation-delay:${Math.min(index++ * 55, 650)}ms">${esc(part)}</span>`;
  }).join('');
}

function renderGame() {
  const g = S.game;
  const p = g.prompt;
  els.round.textContent = 'ROUND ' + String(g.round).padStart(2, '0');
  els.timer.classList.toggle('hidden', g.mode !== 'rivals');
  els.sentBtn.classList.toggle('hidden', g.mode === 'rivals');
  els.words.innerHTML = '';
  els.wordSub.textContent = 'tap for a rhyme';
  els.sentContent.textContent = '';
  els.sentContent.classList.remove('show');
  els.sentSub.textContent = 'tap to peek';
  if (els.funFact) {
    els.funFact.textContent = p.funFact ? 'Fun fact: ' + p.funFact : '';
    els.funFact.classList.toggle('hidden', !p.funFact);
  }
  renderSentence(p.sentence, p.target);
  renderHud();
  renderCoins();
}

const HP = 'M12 21s-7.5-4.35-9.5-8.5C1.1 9.7 2.4 6.6 5.4 6c2-.4 3.7.7 4.6 2.4.9-1.7 2.6-2.8 4.6-2.4 3 .6 4.3 3.7 2.9 6.5C19.5 16.65 12 21 12 21z';
function hearts(lives) {
  let html = '';
  for (let i = 0; i < 3; i++) {
    const pct = Math.max(0, Math.min(1, lives - i)) * 100;
    html += `<span class="heart"><svg viewBox="0 0 24 24" class="hb"><path d="${HP}"/></svg><svg viewBox="0 0 24 24" class="hf" style="clip-path:inset(0 ${100 - pct}% 0 0)"><path d="${HP}"/></svg></span>`;
  }
  return html;
}

function renderHud() {
  const g = S.game;
  if (g.mode === 'freeplay') {
    els.hud.innerHTML = '';
    return;
  }
  if (g.mode === 'survival') {
    els.hud.innerHTML = '<div class="banner surv">SURVIVAL  ' + hearts(g.lives) + '</div>';
    return;
  }
  const current = g.players[g.turn];
  els.hud.innerHTML = `<div class="banner">${esc(current.name)}'s turn  score now: <span id="livePts">${scoreNow()}</span></div><div id="strip" class="strip">${g.players.map((p, i) => `<div class="chip ${i === g.turn ? 'active' : ''}"><b>${esc(p.name)}</b><br><span class="muted">${p.score} pts</span></div>`).join('')}</div>`;
}

function showWord() {
  const g = S.game;
  const p = g.prompt;
  if (g.mode === 'survival' && !g.wordHelp) {
    if (!g.sentHelp) {
      g.lives = Math.max(0, g.lives - 0.5);
      Visuals.flash();
      if (g.lives <= 0) return endSurvival();
    }
    g.wordHelp = true;
  }
  if (g.mode === 'rivals' && !g.wordHelp) {
    g.penalty += 5;
    g.wordHelp = true;
    Visuals.flash();
  }
  if (g.wordI >= p.rhymes.length) {
    els.wordSub.textContent = "that's every word we have";
    return;
  }
  const span = document.createElement('span');
  span.className = 'word';
  span.textContent = p.rhymes[g.wordI++];
  els.words.prepend(span);
  els.wordSub.textContent = g.wordI + ' of ' + p.rhymes.length + '  tap for more';
  renderHud();
}

function toggleSent() {
  const g = S.game;
  if (g.mode === 'rivals') return;
  g.sentShown = !g.sentShown;
  if (g.sentShown) {
    if (g.mode === 'survival' && !g.sentHelp) {
      g.lives = Math.max(0, g.lives - (g.wordHelp ? 0.5 : 1));
      g.sentHelp = true;
      Visuals.flash();
      if (g.lives <= 0) return endSurvival();
    }
    els.sentContent.textContent = g.prompt.example;
    els.sentContent.classList.add('show');
    els.sentSub.textContent = 'tap to hide';
  } else {
    els.sentContent.classList.remove('show');
    els.sentSub.textContent = 'tap to peek';
  }
  renderHud();
}

function endSurvival() {
  S.game.over = true;
  results('Survival Over', [['Rounds survived', S.game.round], ['Coins earned', '+' + S.game.round * C.coins]]);
}

function endRivals() {
  const g = S.game;
  g.over = true;
  clearInterval(g.timer);
  const rows = [...g.players].sort((a, b) => b.score - a.score).map((p, i) => ['#' + (i + 1) + ' ' + p.name, p.score + ' pts']);
  results('Rivals Ranking', rows);
}

function results(title, rows) {
  AudioSys.end();
  $('resTitle').textContent = title;
  els.resBody.innerHTML = rows.map(row => `<div class="rank"><span>${esc(row[0])}</span><span>${esc(row[1])}</span></div>`).join('');
  modal('resultModal', true);
}

function renderMenu() {
  els.modeVal.textContent = MODES[S.mode][1];
  els.beatVal.textContent = BEATS[S.beat][1];
  els.subOpen.textContent = S.subjects.includes('random') ? 'Random entertainment' : S.subjects.map(subjectName).join(', ');
}

function renderSubjects() {
  const selected = new Set(S.subjects);
  els.subList.innerHTML = '<label class="check"><input type="checkbox" value="random" ' + (selected.has('random') ? 'checked' : '') + '><b>Random entertainment</b><span class="muted">movies, gaming, music</span></label>' + ALL_SUBJECTS.map(s => `<label class="check"><input type="checkbox" value="${s.id}" ${selected.has(s.id) ? 'checked' : ''}><b>${s.name}</b><span class="muted">Compact pack</span></label>`).join('');
}

function applySubjectsAuto() {
  const chosen = [...els.subList.querySelectorAll('input:checked')].map(input => input.value);
  S.subjects = chosen.length ? (chosen.includes('random') ? ['random'] : chosen) : ['random'];
  Analytics.track('subject_selected', { subject: activeSubs().join(','), mode: MODES[S.mode][0] });
  renderMenu();
}

function renderPlayers() {
  els.playersList.innerHTML = S.players.map((p, i) => `<div class="player-row card"><input data-p="${i}" value="${esc(p.name)}" maxlength="18">${S.players.length > 2 ? `<button data-rm="${i}"></button>` : ''}</div>`).join('');
  els.rounds.innerHTML = [5, 10, 15, 20].map(n => `<button class="round ${S.rounds === n ? 'active' : ''}" data-round="${n}">${n}</button>`).join('');
}

function renderCoins() {
  const text = coins() + ' coins';
  els.coinsG.textContent = coins() + ' ';
  els.coinP.textContent = text;
  els.coinS.textContent = text;
}

function renderSettings() {
  if (els.volumeSlider) AudioSys.set(AudioSys.volume);
  if (els.analyticsToggle) els.analyticsToggle.checked = Analytics.enabled;
  els.packList.innerHTML = ALL_SUBJECTS.map(s => `<div class="pack"><div><b>${s.name}</b><div class="muted">Compact Entertainment 01</div></div></div>`).join('');
}

function renderApi() {
  els.dot.className = 'dot online';
  els.dotGame.className = 'dot online';
  els.apiText.textContent = 'sentence engine ready';
  els.apiList.innerHTML = '<div class="api"><span class="dot online"></span><div><b>Sentence Engine</b><div class="muted">compact entertainment loaded locally</div></div></div>';
}

function allRender() {
  renderMenu();
  renderSubjects();
  renderPlayers();
  renderCoins();
  renderSettings();
  renderApi();
}

function wireEvents() {
  document.querySelectorAll('[data-step]').forEach(el => el.querySelectorAll('.arr').forEach(button => {
    button.onclick = () => {
      if (el.dataset.step === 'mode') S.mode = (S.mode + +button.dataset.dir + MODES.length) % MODES.length;
      renderMenu();
    };
  }));
  const beginSelectedMode = () => MODES[S.mode][0] === 'rivals' ? (show('players'), renderPlayers()) : startGame(MODES[S.mode][0]);
  $('start').onclick = () => HowToPlay.requestBeforeStart(beginSelectedMode);
  $('help').onclick = () => HowToPlay.open({ source: 'menu' });
  $('settings').onclick = () => { renderSettings(); modal('settingsModal', true); };
  $('subject-open').onclick = () => { renderSubjects(); modal('subjectModal', true); };
  $('subjectApply').style.display = 'none';
  els.subList.onchange = event => {
    if (event.target.value === 'random' && event.target.checked) [...els.subList.querySelectorAll('input')].forEach(input => { if (input.value !== 'random') input.checked = false; });
    if (event.target.value !== 'random' && event.target.checked) els.subList.querySelector('[value=random]').checked = false;
    setTimeout(applySubjectsAuto, 0);
  };
  document.onclick = event => { if (event.target.dataset.close) modal(event.target.dataset.close, false); };
  $('apiBtn').onclick = () => modal('apiModal', true);
  $('apiBtnGame').onclick = () => modal('apiModal', true);
  $('retest').onclick = renderApi;
  $('pBack').onclick = () => show('menu');
  $('addPlayer').onclick = () => { if (S.players.length < 8) S.players.push({ name: 'Player ' + (S.players.length + 1) }); renderPlayers(); };
  els.playersList.oninput = event => { if (event.target.dataset.p !== undefined) S.players[+event.target.dataset.p].name = event.target.value; };
  els.playersList.onclick = event => { if (event.target.dataset.rm !== undefined && S.players.length > 2) { S.players.splice(+event.target.dataset.rm, 1); renderPlayers(); } };
  els.rounds.onclick = event => { if (event.target.dataset.round) { S.rounds = +event.target.dataset.round; renderPlayers(); } };
  $('startRivals').onclick = () => startGame('rivals');
  $('toMenu').onclick = () => { reset(); show('menu'); allRender(); };
  $('card').onclick = () => next(true);
  $('wordBtn').onclick = showWord;
  $('sentBtn').onclick = toggleSent;
  $('sfx').onclick = () => AudioSys.yo();
  $('testSfx').onclick = () => AudioSys.yo();
  if (els.volumeSlider) els.volumeSlider.oninput = event => AudioSys.set(event.target.value / 100);
  if (els.analyticsToggle) els.analyticsToggle.onchange = event => Analytics.consent(event.target.checked);
  $('exportAnalytics').onclick = () => Analytics.export();
  $('analyticsAccept').onclick = () => { Analytics.consent(true); modal('analyticsConsentModal', false); };
  $('analyticsDecline').onclick = () => { Analytics.consent(false); modal('analyticsConsentModal', false); };
  $('rematch').onclick = () => { modal('resultModal', false); startGame(S.game ? S.game.last : 'survival'); };
  $('resMenu').onclick = () => { modal('resultModal', false); reset(); show('menu'); };
  document.querySelectorAll('[data-off]').forEach(button => button.onclick = () => toast('Offline packs are disabled in this SE build'));
}

const DeveloperManager = {
  enabled: localStorage.re_developer_mode === 'true',
  timer: null,
  taps: [],
  set(on) {
    this.enabled = !!on;
    localStorage.re_developer_mode = String(this.enabled);
    $('devFab')?.classList.toggle('hidden', !this.enabled);
    const button = $('developerModeToggle');
    if (button) button.textContent = 'Developer Mode: ' + (this.enabled ? 'On' : 'Off');
    if (!this.enabled) this.close();
  },
  toggle() { this.set(!this.enabled); },
  row(k, v) { return `<div class="debug-row"><span>${esc(k)}</span><span>${esc(String(v))}</span></div>`; },
  open() {
    if (!this.enabled) return;
    modal('developerModal', true);
    this.update();
    clearInterval(this.timer);
    this.timer = setInterval(() => this.update(), 1000);
  },
  close() {
    modal('developerModal', false);
    clearInterval(this.timer);
  },
  update() {
    const prompt = S.game?.prompt;
    const debug = sentenceEngineDebug();
    const rows = {
      version: APP_VERSION,
      url: location.href,
      origin: location.origin,
      protocol: location.protocol,
      file: location.protocol === 'file:',
      githubPages: location.hostname.endsWith('github.io'),
      firebaseInitialized: Analytics.firebaseInitialized,
      analyticsInitialized: Analytics.analyticsInitialized,
      consent: localStorage.reAnalyticsConsent || 'unset',
      lastEvent: Analytics.lastEvent || '',
      lastError: Analytics.lastError || '',
      source: prompt?.source || '',
      subject: prompt?.subject || activeSubs().join(','),
      target: prompt?.target || '',
      sentenceEnginePack: debug.packId,
      sentenceEnginePrompts: debug.prompts,
      sentenceEngineAnchors: debug.anchors
    };
    $('developerPanel').innerHTML = Object.entries(rows).map(([k, v]) => this.row(k, v)).join('');
  },
  async test() {
    const result = await Analytics.testConnection();
    $('debugOutput').textContent = JSON.stringify(result, null, 2);
    this.update();
  }
};

function wireDeveloperMode() {
  DeveloperManager.set(DeveloperManager.enabled);
  $('devFab').onclick = () => DeveloperManager.open();
  $('developerModeToggle').onclick = () => DeveloperManager.toggle();
  $('debugRefresh').onclick = () => DeveloperManager.update();
  $('debugTestEvent').onclick = () => DeveloperManager.test();
  $('debugExportAnalytics').onclick = () => Analytics.export();
  $('debugClearAnalytics').onclick = () => { Analytics.clear(); DeveloperManager.update(); };
  $('debugClearOffline').onclick = () => localStorage.removeItem('reOfflinePacks');
  document.querySelector('.brand h1')?.addEventListener('click', () => {
    const now = Date.now();
    DeveloperManager.taps = DeveloperManager.taps.filter(t => now - t < 3000);
    DeveloperManager.taps.push(now);
    if (DeveloperManager.taps.length >= 5) {
      DeveloperManager.taps = [];
      DeveloperManager.toggle();
    }
  });
}

localStorage.reCoins ??= String(C.startCoins);
S.subjects = ['random'];
allRender();
show('menu');
AudioSys.set(AudioSys.volume);
wireEvents();
wireDeveloperMode();
if (localStorage.reAnalyticsConsent === undefined) modal('analyticsConsentModal', true);
if (Analytics.enabled) Analytics.init();
