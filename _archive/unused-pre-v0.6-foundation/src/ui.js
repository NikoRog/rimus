export class UI {
  constructor(root) {
    this.root = root;
  }

  renderShell() {
    this.root.innerHTML = `
      <div class="bg"><span>mic</span><span>music</span><span>write</span><span>flow</span></div>

      <section id="screen-menu" class="screen">
        <header class="brand">
          <span class="tag">PARTY GAME</span>
          <h1>Rimus</h1>
          <p>say it - don't write it</p>
          <button id="api-status" class="status"><span id="api-dot" class="status-dot"></span><span>APIs</span></button>
        </header>

        <div class="menu">
          <div class="row card">
            <span class="label">Mode</span>
            <button id="mode-btn" class="value-btn">Survival</button>
          </div>
          <div class="row card">
            <span class="label">Subject</span>
            <button id="subject-btn" class="value-btn subject-value">Random</button>
          </div>
          <div class="row card">
            <span class="label">Beat</span>
            <button id="beat-btn" class="value-btn">Medium / Classic</button>
          </div>
          <div id="rivals-setup" class="setup-card hidden">
            <div class="setup-title">Rivals</div>
            <p class="muted">One round means every player gets one turn.</p>
            <label>Players <input id="rivals-players" value="Player 1, Player 2" /></label>
            <label>Turns each
              <select id="rivals-rounds">
                <option>5</option><option>10</option><option>15</option><option>20</option>
              </select>
            </label>
          </div>
        </div>

        <div class="actions">
          <button id="start-btn" class="primary-btn">Start Game</button>
          <button id="settings-btn" class="secondary-btn">Settings / Content Packs</button>
          <p class="foot">PASS THE PHONE - EVERYONE JUDGES THE RHYME</p>
        </div>
      </section>

      <section id="screen-loading" class="screen hidden">
        <div class="loading-wrap">
          <div class="vinyl"></div>
          <h2>Building Flow</h2>
          <p id="loading-text" class="muted">Preparing smart prompts...</p>
          <div class="progress"><div id="progress-bar"></div></div>
        </div>
      </section>

      <section id="screen-game" class="screen game hidden">
        <div class="topbar">
          <button id="menu-btn" class="icon-btn">Back</button>
          <div class="top-pills">
            <button id="api-status-game" class="status mini-status"><span id="api-dot-game" class="status-dot"></span></button>
            <span id="round-label" class="pill">Round 01</span>
          </div>
        </div>

        <div id="hud" class="hud"></div>

        <div class="play">
          <button id="prompt-card" class="prompt-card card">
            <p id="prompt-sentence" class="prompt-sentence">Loading...</p>
          </button>
          <p class="cue">tap the card when the rhyme is accepted</p>
        </div>

        <div class="bubbles">
          <button id="word-btn" class="bubble card"><b>Word</b><span class="sub">tap for a rhyme</span><div id="word-list"></div></button>
          <button id="sentence-btn" class="bubble card"><b>Sentence</b><span class="sub">tap to peek</span><div id="sentence-content" class="content"></div></button>
        </div>

        <div class="utility-row">
          <button id="definition-btn" class="bubble card"><b>What's this?</b><span class="sub">tap for context</span><div id="definition-content" class="content"></div></button>
          <button id="sfx-btn" class="sfx-btn">♪</button>
        </div>
      </section>

      <section id="screen-end" class="screen hidden">
        <div class="result-card modal-card">
          <h2 id="end-title">Game Over</h2>
          <div id="end-summary" class="list"></div>
          <button id="rematch-btn" class="primary-btn">Rematch</button>
          <button id="end-menu-btn" class="secondary-btn">Main Menu</button>
        </div>
      </section>

      <div id="modal-root"></div>
    `;
  }

  show(id) {
    for (const screen of this.root.querySelectorAll(".screen")) screen.classList.add("hidden");
    this.root.querySelector(`#${id}`).classList.remove("hidden");
  }

  openModal(html) {
    this.root.querySelector("#modal-root").innerHTML = `<div class="modal"><div class="modal-card">${html}</div></div>`;
  }

  closeModal() {
    this.root.querySelector("#modal-root").innerHTML = "";
  }
}
