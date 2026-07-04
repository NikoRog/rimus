import { ApiManager } from "./apiManager.js";
import { ContentEngine } from "./contentEngine.js";
import { GameState, MODES, BEATS } from "./gameState.js";
import { UI } from "./ui.js";
import { AudioManager } from "./audio.js";
import { AnalyticsManager } from "./analytics.js";
import { OfflinePacks } from "./offlinePacks.js";
import { APP_CONFIG, STORAGE_KEYS } from "./config.js";
import { readJSON, writeJSON } from "./storage.js";

const SUBJECTS = [
  ["random", "Random"], ["movies", "Movies"], ["gym", "Gym"], ["sports", "Sports"],
  ["fashion", "Fashion"], ["medicine", "Medicine"], ["biology", "Biology"],
  ["history", "History"], ["geography", "Geography"], ["music", "Music"],
  ["food", "Food"], ["gaming", "Gaming"], ["travel", "Travel"],
  ["space", "Space"], ["languages", "Languages"]
].map(([id, name]) => ({ id, name, owned: true }));

const PACK_SIZES = { small: 30, medium: 100, large: 300 };

const root = document.getElementById("app");
const ui = new UI(root);
const api = new ApiManager();
const engine = new ContentEngine(api);
const game = new GameState();
const audio = new AudioManager();
const analytics = new AnalyticsManager();
const offline = new OfflinePacks();

let modeIndex = 0;
let beatIndex = 1;
let selectedSubjects = ["random"];
let currentWordIndex = 0;
let sentenceVisible = false;
let definitionVisible = false;
let rivalsTimer = null;
let rivalsTurnScore = 20;
let lastQueueArgs = null;
let coins = Number(localStorage.getItem(STORAGE_KEYS.coins) || 0);

ui.renderShell();
bindEvents();
showConsentIfNeeded();
analytics.init();
analytics.track("app_start");
api.testConnections().then(updateApiDot);

function bindEvents() {
  document.addEventListener("click", async event => {
    await audio.init();
    if (event.target.closest("button")) audio.click();

    const id = event.target.id;
    if (id === "mode-btn") cycleMode(event.target);
    if (id === "beat-btn") cycleBeat(event.target);
    if (id === "subject-btn") openSubjectModal();
    if (id === "settings-btn") openSettingsModal();
    if (id === "api-status") openApiStatus();
    if (id === "api-status-game") openApiStatus();
    if (id === "start-btn" || id === "rematch-btn") startGame();
    if (id === "menu-btn" || id === "end-menu-btn") quitToMenu();
    if (id === "prompt-card") completeRound();
    if (id === "word-btn") showWord();
    if (id === "sentence-btn") showSentence();
    if (id === "definition-btn") showDefinition();
    if (id === "sfx-btn") audio.playYo();
    if (id === "modal-close") ui.closeModal();
    if (id === "subject-apply") applySubjects();
    if (id === "consent-accept") setConsent(true);
    if (id === "consent-decline") setConsent(false);
    if (id === "analytics-export") exportAnalytics();
    if (id?.startsWith("pack-create-")) createPack(id.replace("pack-create-", ""));
    if (id?.startsWith("pack-delete-")) deletePack(id.replace("pack-delete-", ""));
  });

  document.addEventListener("input", event => {
    if (event.target.id === "volume-slider") audio.setVolume(event.target.value);
    if (event.target.id === "analytics-toggle") analytics.setConsent(event.target.checked);
  });
}

function cycleMode(button) {
  modeIndex = (modeIndex + 1) % MODES.length;
  button.textContent = MODES[modeIndex].label;
  document.getElementById("rivals-setup").classList.toggle("hidden", MODES[modeIndex].id !== "rivals");
  analytics.track("mode_selected", { mode: MODES[modeIndex].id });
}

function cycleBeat(button) {
  beatIndex = (beatIndex + 1) % BEATS.length;
  button.textContent = BEATS[beatIndex].label;
  analytics.track("beat_selected", { beat: BEATS[beatIndex].id });
}

async function startGame() {
  clearInterval(rivalsTimer);
  analytics.track("game_start", { mode: currentMode(), beat: currentBeat(), subjects: selectedSubjects.join(",") });
  analytics.track("loading_start");
  ui.show("screen-loading");
  const progress = document.getElementById("progress-bar");
  const text = document.getElementById("loading-text");
  const startedAt = performance.now();

  const queue = await engine.buildQueue(selectedSubjects, APP_CONFIG.queueSize, (done, total) => {
    progress.style.width = `${Math.round((done / total) * 100)}%`;
    text.textContent = `Prepared ${done}/${total} prompts`;
  });
  await wait(Math.max(0, APP_CONFIG.minLoadingMs - (performance.now() - startedAt)));

  lastQueueArgs = { subjects: selectedSubjects.slice() };
  if (currentMode() === "rivals") {
    const names = document.getElementById("rivals-players").value.split(",").map(s => s.trim()).filter(Boolean).slice(0, 8);
    game.setupRivals(names.length ? names : ["Player 1", "Player 2"], Number(document.getElementById("rivals-rounds").value), queue);
  } else {
    game.setup(currentMode(), queue);
  }
  analytics.track("loading_complete", { count: queue.length });
  ui.show("screen-game");
  nextPrompt(false);
}

function nextPrompt(award = true) {
  clearInterval(rivalsTimer);
  if (award) awardRound();
  if (game.mode === "rivals" && game.turnsPlayed >= game.totalRivalTurns()) return endGame("Final Ranking");

  game.round += 1;
  game.prompt = game.queue.shift();
  game.wordUsed = false;
  game.sentenceUsed = false;
  currentWordIndex = 0;
  sentenceVisible = false;
  definitionVisible = false;
  if (!game.prompt) return endGame("Game Over");
  renderPrompt();
  analytics.track("round_start", { mode: game.mode, round: game.round });
  if (game.mode === "rivals") startRivalsTimer();
  refillQueue();
}

function completeRound() {
  audio.pop();
  nextPrompt(true);
}

function awardRound() {
  analytics.track("round_complete", { mode: game.mode, round: game.round });
  if (game.mode !== "rivals") {
    coins += APP_CONFIG.coinsPerSentence;
    localStorage.setItem(STORAGE_KEYS.coins, String(coins));
    return;
  }
  const player = game.players[game.turnIndex];
  player.score += Math.max(10, rivalsTurnScore);
  analytics.track("rivals_turn_score", { player: player.name, score: Math.max(10, rivalsTurnScore) });
  game.turnsPlayed += 1;
  game.turnIndex = (game.turnIndex + 1) % game.players.length;
}

function renderPrompt() {
  const p = game.prompt;
  const rivalRound = game.mode === "rivals" ? Math.floor(game.turnsPlayed / game.players.length) + 1 : game.round;
  document.getElementById("round-label").textContent = game.mode === "rivals"
    ? `Turn ${rivalRound}/${game.totalRoundsPerPlayer}`
    : `Round ${String(game.round).padStart(2, "0")}`;
  document.getElementById("prompt-sentence").innerHTML = p.sentence.replace(new RegExp(`\\b${escapeRegExp(p.target)}\\b`, "i"), `<span class="target-word">${p.target}</span>`);
  document.getElementById("word-list").innerHTML = "";
  document.getElementById("sentence-content").textContent = "";
  document.getElementById("definition-content").textContent = "";
  document.getElementById("sentence-btn").classList.toggle("hidden", game.mode === "rivals");
  renderHud();
}

function renderHud() {
  const hud = document.getElementById("hud");
  if (game.mode === "survival") {
    hud.innerHTML = `<div class="hud-row"><span>Lives</span><span>${hearts(game.survivalLives)}</span></div><div class="hud-row"><span>Coins</span><span>${coins}</span></div>`;
  } else if (game.mode === "freeplay") {
    hud.innerHTML = `<div class="hud-row"><span>Free Play</span><span>Coins ${coins}</span></div>`;
  } else {
    const player = game.players[game.turnIndex];
    hud.innerHTML = `<div class="hud-row"><span>${player.name}</span><span id="rivals-score">${rivalsTurnScore} pts</span></div>`;
  }
}

function showWord() {
  const p = game.prompt;
  if (!p || currentWordIndex >= p.rhymes.length) return;
  const word = p.rhymes[currentWordIndex++];
  const chip = document.createElement("span");
  chip.className = "word-chip";
  chip.textContent = word;
  document.getElementById("word-list").prepend(chip);
  if (game.mode === "survival" && !game.sentenceUsed && !game.wordUsed) loseLife(0.5);
  if (game.mode === "rivals" && !game.wordUsed) rivalsTurnScore = Math.max(10, rivalsTurnScore - 5);
  game.wordUsed = true;
  renderHud();
  analytics.track("word_used", { target: p.target });
}

function showSentence() {
  const p = game.prompt;
  if (!p) return;
  sentenceVisible = !sentenceVisible;
  document.getElementById("sentence-content").textContent = sentenceVisible ? p.example : "";
  if (sentenceVisible && game.mode === "survival" && !game.sentenceUsed) loseLife(game.wordUsed ? 0.5 : 1);
  game.sentenceUsed = true;
  analytics.track("sentence_used", { target: p.target });
}

function showDefinition() {
  const p = game.prompt;
  if (!p) return;
  definitionVisible = !definitionVisible;
  document.getElementById("definition-content").textContent = definitionVisible ? `${p.reference}: ${p.definition}` : "";
  analytics.track("definition_opened", { reference: p.reference });
}

function loseLife(amount) {
  game.survivalLives = Math.max(0, game.survivalLives - amount);
  audio.loseLife();
  analytics.track("survival_life_lost", { amount, remaining: game.survivalLives });
  renderHud();
  if (game.survivalLives <= 0) endGame("Game Over");
}

function startRivalsTimer() {
  rivalsTurnScore = 20;
  game.currentTurnStartedAt = Date.now();
  renderHud();
  rivalsTimer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - game.currentTurnStartedAt) / 10000);
    rivalsTurnScore = Math.max(10, 20 - elapsed - (game.wordUsed ? 5 : 0));
    renderHud();
  }, 500);
}

function endGame(title) {
  clearInterval(rivalsTimer);
  audio.endGame();
  analytics.track("game_end", { mode: game.mode, rounds: game.round });
  document.getElementById("end-title").textContent = title;
  document.getElementById("end-summary").innerHTML = game.mode === "rivals" ? rankingHtml() : `<p>Rounds survived: <strong>${Math.max(0, game.round - 1)}</strong></p><p>Coins earned: <strong>${coins}</strong></p>`;
  ui.show("screen-end");
}

function rankingHtml() {
  return `<div class="ranking">${game.players.slice().sort((a, b) => b.score - a.score).map((p, i) => `<div class="rank-row"><strong>${i + 1}. ${p.name}</strong><span>${p.score}</span></div>`).join("")}</div>`;
}

function quitToMenu() {
  clearInterval(rivalsTimer);
  game.reset();
  ui.show("screen-menu");
  analytics.track("quit_to_menu");
}

function openSubjectModal() {
  ui.openModal(`
    <h2>Subjects</h2>
    <div class="subject-grid">
      ${SUBJECTS.map(s => `<label class="subject-option"><input type="checkbox" class="subject-check" value="${s.id}" ${selectedSubjects.includes(s.id) ? "checked" : ""}><span>${s.name}</span><small>${s.owned ? "Owned" : "Locked"}</small></label>`).join("")}
    </div>
    <div class="modal-actions"><button id="modal-close" class="secondary-btn">Close</button><button id="subject-apply" class="primary-btn">Apply</button></div>
  `);
}

function applySubjects() {
  const picked = [...document.querySelectorAll(".subject-check:checked")].map(input => input.value);
  selectedSubjects = picked.includes("random") || !picked.length ? ["random"] : picked.filter(id => id !== "random");
  document.getElementById("subject-btn").textContent = selectedSubjects.includes("random") ? "Random" : selectedSubjects.map(nameForSubject).join(", ");
  analytics.track("subjects_selected", { subjects: selectedSubjects.join(",") });
  ui.closeModal();
}

function openSettingsModal() {
  const packs = offline.listPacks();
  ui.openModal(`
    <h2>Settings</h2>
    <div class="toggle-row"><span>Coins</span><strong>${coins}</strong></div>
    <label class="toggle-row"><span>Volume</span><input id="volume-slider" type="range" min="0" max="1" step="0.05" value="${audio.volume}"></label>
    <label class="toggle-row"><span>Analytics</span><input id="analytics-toggle" type="checkbox" ${analytics.enabled ? "checked" : ""}></label>
    <button id="analytics-export" class="secondary-btn">Export Analytics JSON</button>
    <h3>Content Packs</h3>
    <p>Future subject pack price: ${APP_CONFIG.subjectPriceCoins} coins. Future ad reward: +900 coins.</p>
    <div class="pack-grid">
      ${Object.entries(PACK_SIZES).map(([id, count]) => {
        const pack = packs.find(p => p.id === id);
        return `<div class="pack-row"><strong>${title(id)}</strong><span>${pack ? `${pack.promptCount} prompts, ${pack.size}` : `About ${count} prompts`}</span><button id="${pack ? `pack-delete-${id}` : `pack-create-${id}`}" class="icon-btn">${pack ? "Delete" : "Create"}</button></div>`;
      }).join("")}
    </div>
    <p>Local cache loaded. Storage used: ${offline.storageUsed()}.</p>
    <div class="modal-actions"><button id="modal-close" class="secondary-btn">Close</button><button id="sfx-btn" class="primary-btn">SFX</button></div>
  `);
}

async function createPack(id) {
  const count = PACK_SIZES[id];
  if (!count) return;
  const prompts = await engine.buildQueue(selectedSubjects, count);
  offline.savePack(id, prompts, title(id));
  analytics.track("offline_pack_created", { id, count: prompts.length });
  openSettingsModal();
}

function deletePack(id) {
  offline.deletePack(id);
  analytics.track("offline_pack_deleted", { id });
  openSettingsModal();
}

function openApiStatus() {
  analytics.track("api_status_opened");
  const rows = Object.entries(api.status).map(([name, status]) => `<div class="rank-row"><strong>${title(name)}</strong><span>${status}</span></div>`).join("");
  ui.openModal(`<h2>API Status</h2><div class="ranking">${rows}<div class="rank-row"><strong>Last test</strong><span>${new Date().toLocaleTimeString()}</span></div></div><div class="modal-actions"><button id="modal-close" class="secondary-btn">Close</button><button id="api-status" class="primary-btn">Retest</button></div>`);
}

function showConsentIfNeeded() {
  if (analytics.enabled !== null) return;
  ui.openModal(`<h2>Data Collection</h2><p>Anonymous gameplay analytics help tune rounds, content, and API fallbacks. No personal data is collected.</p><div class="modal-actions"><button id="consent-decline" class="secondary-btn">Decline</button><button id="consent-accept" class="primary-btn">Accept</button></div>`);
}

function setConsent(value) {
  analytics.setConsent(value);
  analytics.track(value ? "consent_accept" : "consent_decline");
  ui.closeModal();
}

function exportAnalytics() {
  const blob = new Blob([analytics.exportJSON()], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "rimus-analytics.json";
  a.click();
  URL.revokeObjectURL(url);
}

function updateApiDot() {
  const dot = document.getElementById("api-dot");
  const gameDot = document.getElementById("api-dot-game");
  const connected = api.status.datamuse === "connected";
  for (const item of [dot, gameDot].filter(Boolean)) {
    item.classList.toggle("online", connected);
    item.classList.toggle("offline", !connected);
  }
}

async function refillQueue() {
  if (game.queue.length > 8 || !lastQueueArgs) return;
  const more = await engine.buildQueue(lastQueueArgs.subjects, 10);
  game.queue.push(...more);
}

function hearts(value) {
  const halves = Math.ceil(value * 2);
  return Array.from({ length: 6 }, (_, i) => `<span class="heart">${i < halves ? "♥" : "♡"}</span>`).join("");
}

function currentMode() { return MODES[modeIndex].id; }
function currentBeat() { return BEATS[beatIndex].id; }
function title(text) { return text.charAt(0).toUpperCase() + text.slice(1); }
function nameForSubject(id) { return SUBJECTS.find(s => s.id === id)?.name || id; }
function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
function escapeRegExp(text) { return String(text).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
