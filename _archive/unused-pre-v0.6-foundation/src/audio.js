import { STORAGE_KEYS } from "./config.js";

export class AudioManager {
  constructor() {
    this.ctx = null;
    this.volume = Number(localStorage.getItem(STORAGE_KEYS.volume) || 0.8);
    this.yoBuffer = null;
  }

  async init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === "suspended") await this.ctx.resume();
    await this.loadYo();
  }

  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, Number(value)));
    localStorage.setItem(STORAGE_KEYS.volume, String(this.volume));
  }

  async loadYo() {
    if (this.yoBuffer) return;
    try {
      const res = await fetch("./assets/yo-100634.mp3");
      const arr = await res.arrayBuffer();
      this.yoBuffer = await this.ctx.decodeAudioData(arr);
    } catch {
      this.yoBuffer = null;
    }
  }

  playYo() {
    if (!this.ctx || !this.yoBuffer) return;
    const src = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    gain.gain.value = this.volume * 2.0;
    src.buffer = this.yoBuffer;
    src.connect(gain);
    gain.connect(this.ctx.destination);
    src.start();
  }

  beep(freq = 440, duration = 0.08, type = "square", volume = 1) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = this.volume * volume;
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  click() { this.beep(500, 0.04, "square", 0.8); }
  pop() { this.beep(760, 0.07, "triangle", 1.0); }
  loseLife() { this.beep(150, 0.18, "sawtooth", 1.1); }
  endGame() { this.beep(880, 0.2, "triangle", 1.2); }
}
