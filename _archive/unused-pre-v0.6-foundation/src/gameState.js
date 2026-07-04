export const MODES = [
  { id: "survival", label: "Survival" },
  { id: "freeplay", label: "Free Play" },
  { id: "rivals", label: "Rivals" }
];

export const BEATS = [
  { id: "slow", label: "Slow / Lo-fi" },
  { id: "medium", label: "Medium / Classic" },
  { id: "fast", label: "Fast / DnB" }
];

export class GameState {
  constructor() {
    this.reset();
  }

  reset() {
    this.mode = "survival";
    this.round = 0;
    this.prompt = null;
    this.queue = [];
    this.survivalLives = 3;
    this.players = [];
    this.turnIndex = 0;
    this.totalRoundsPerPlayer = 5;
    this.turnsPlayed = 0;
    this.currentTurnStartedAt = 0;
    this.wordUsed = false;
    this.sentenceUsed = false;
    this.matchOver = false;
  }

  setup(mode, queue) {
    this.reset();
    this.mode = mode;
    this.queue = queue.slice();
  }

  setupRivals(players, roundsPerPlayer, queue) {
    this.setup("rivals", queue);
    this.players = players.map(name => ({ name, score: 0 }));
    this.totalRoundsPerPlayer = roundsPerPlayer;
  }

  totalRivalTurns() {
    return this.players.length * this.totalRoundsPerPlayer;
  }
}
