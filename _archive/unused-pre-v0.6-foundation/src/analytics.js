import { FIREBASE_CONFIG, STORAGE_KEYS } from "./config.js";
import { readJSON, writeJSON } from "./storage.js";

export class AnalyticsManager {
  constructor() {
    this.enabled = readJSON(STORAGE_KEYS.analyticsConsent, null);
    this.queue = readJSON(STORAGE_KEYS.analyticsQueue, []);
    this.firebaseReady = false;
    this.analytics = null;
  }

  async init() {
    if (!this.enabled) return;
    try {
      const appModule = await import("https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js");
      const analyticsModule = await import("https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js");
      const app = appModule.initializeApp(FIREBASE_CONFIG);
      this.analytics = analyticsModule.getAnalytics(app);
      this.logEvent = analyticsModule.logEvent;
      this.firebaseReady = true;
      this.flush();
    } catch {
      this.firebaseReady = false;
    }
  }

  setConsent(value) {
    this.enabled = Boolean(value);
    writeJSON(STORAGE_KEYS.analyticsConsent, this.enabled);
    if (this.enabled) this.init();
  }

  track(name, params = {}) {
    const event = {
      name,
      params: {
        ...params,
        timestamp: Date.now(),
        version: "0.6.0"
      }
    };

    this.queue.push(event);
    this.queue = this.queue.slice(-500);
    writeJSON(STORAGE_KEYS.analyticsQueue, this.queue);

    if (this.enabled && this.firebaseReady && this.analytics && this.logEvent) {
      this.logEvent(this.analytics, name, params);
    }
  }

  flush() {
    if (!this.enabled || !this.firebaseReady) return;
    for (const event of this.queue) {
      this.logEvent(this.analytics, event.name, event.params);
    }
  }

  exportJSON() {
    return JSON.stringify(this.queue, null, 2);
  }
}
