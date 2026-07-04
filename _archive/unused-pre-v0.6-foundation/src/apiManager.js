import { APP_CONFIG, STORAGE_KEYS } from "./config.js";
import { readJSON, writeJSON } from "./storage.js";

const FALLBACK_RHYMES = {
  default: ["time", "rhyme", "line", "fine", "shine", "sign", "mine", "climb"],
  beach: ["teach", "reach", "speech", "each", "preach", "peach"],
  water: ["daughter", "quarter", "border", "order"],
  boat: ["note", "float", "coat", "quote", "throat"],
  night: ["light", "fight", "right", "sight", "bright"],
  code: ["road", "mode", "load", "showed", "flowed"],
  ring: ["sing", "bring", "king", "swing", "thing"],
  ball: ["call", "fall", "wall", "tall", "all"],
  heart: ["start", "part", "art", "smart", "chart"],
  moon: ["soon", "tune", "June", "spoon", "balloon"],
  word: ["heard", "bird", "third", "stirred"],
  gate: ["late", "state", "great", "wait", "fate"]
};

async function fetchWithTimeout(url, timeoutMs = APP_CONFIG.apiTimeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

export class ApiManager {
  constructor() {
    this.status = {
      datamuse: "unknown",
      conceptnet: "unknown",
      wikipedia: "unknown",
      wikidata: "unknown",
      cache: "loaded"
    };
    this.rhymeCache = readJSON(STORAGE_KEYS.rhymeCache, {});
    this.conceptCache = readJSON(STORAGE_KEYS.conceptCache, {});
  }

  async getRhymes(word) {
    const key = this.clean(word);
    if (!key) return [];
    if (this.rhymeCache[key]?.length) return this.rhymeCache[key];
    if (this.status.datamuse === "failed") return this.fallbackRhymes(key);

    try {
      const url = `https://api.datamuse.com/words?rel_rhy=${encodeURIComponent(key)}&max=50`;
      const data = await fetchWithTimeout(url);
      const rhymes = [...new Set(
        data
          .map(item => this.clean(item.word))
          .filter(w => w && w !== key && !w.includes(" ") && w.length <= 16)
      )];

      this.status.datamuse = "connected";
      this.rhymeCache[key] = rhymes;
      writeJSON(STORAGE_KEYS.rhymeCache, this.rhymeCache);
      return rhymes;
    } catch {
      this.status.datamuse = "failed";
      return this.fallbackRhymes(key);
    }
  }

  async expandConcept(word) {
    const key = this.clean(word);
    if (!key) return [];
    if (this.conceptCache[key]?.length) return this.conceptCache[key];

    const output = [];

    try {
      const dm = await fetchWithTimeout(`https://api.datamuse.com/words?ml=${encodeURIComponent(key)}&max=20`);
      output.push(...dm.map(item => this.clean(item.word)));
      this.status.datamuse = "connected";
    } catch {
      this.status.datamuse = "failed";
    }

    try {
      const cn = await fetchWithTimeout(`https://api.conceptnet.io/related/c/en/${encodeURIComponent(key)}?filter=/c/en&limit=12`);
      output.push(...(cn.related || []).map(item => this.clean(String(item["@id"] || "").split("/").pop())));
      this.status.conceptnet = "connected";
    } catch {
      this.status.conceptnet = "failed";
    }

    const result = [...new Set(output)].filter(Boolean).slice(0, 24);
    this.conceptCache[key] = result;
    writeJSON(STORAGE_KEYS.conceptCache, this.conceptCache);
    return result;
  }

  async testConnections() {
    await Promise.allSettled([
      this.getRhymes("time"),
      this.expandConcept("water"),
      fetchWithTimeout("https://en.wikipedia.org/api/rest_v1/page/summary/Rhyme")
        .then(() => { this.status.wikipedia = "connected"; })
        .catch(() => { this.status.wikipedia = "failed"; }),
      fetchWithTimeout("https://www.wikidata.org/wiki/Special:EntityData/Q183.json")
        .then(() => { this.status.wikidata = "connected"; })
        .catch(() => { this.status.wikidata = "failed"; })
    ]);
    return this.status;
  }

  clean(word) {
    return String(word || "").toLowerCase().replace(/[^a-z]/g, "");
  }

  fallbackRhymes(key) {
    return FALLBACK_RHYMES[key] || FALLBACK_RHYMES.default;
  }
}
