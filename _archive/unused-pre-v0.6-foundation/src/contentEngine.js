import { PROMPT_TEMPLATES, EXAMPLE_TEMPLATES } from "../content/templates.js";
import { KNOWLEDGE_NODES } from "../content/knowledgeNodes.js";
import { APP_CONFIG } from "./config.js";

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function cap(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function clean(word) {
  return String(word || "").toLowerCase().replace(/[^a-z]/g, "");
}

export class ContentEngine {
  constructor(apiManager) {
    this.api = apiManager;
    this.recent = {
      targets: [],
      references: [],
      templates: [],
      sentences: []
    };
  }

  resetRecent() {
    this.recent.targets = [];
    this.recent.references = [];
    this.recent.templates = [];
    this.recent.sentences = [];
  }

  async buildQueue(subjectIds, count = APP_CONFIG.queueSize, onProgress = () => {}) {
    const prompts = [];
    let attempts = 0;
    while (prompts.length < count && attempts < count * 12) {
      attempts += 1;
      const prompt = await this.generatePrompt(subjectIds);
      if (!prompt) continue;
      if (prompts.some(p => p.sentence === prompt.sentence)) continue;
      prompts.push(prompt);
      onProgress(prompts.length, count);
    }

    while (prompts.length < count) {
      prompts.push(this.fallbackPrompt(subjectIds));
      onProgress(prompts.length, count);
    }

    return prompts;
  }

  async generatePrompt(subjectIds) {
    const nodes = this.nodesForSubjects(subjectIds);
    if (!nodes.length) return null;

    const node = pick(nodes);
    const template = pick(PROMPT_TEMPLATES);
    const roleWords = node.roles[template.endRole] || [];
    if (!roleWords.length) return null;

    const target = pick(roleWords);
    if (this.recent.targets.includes(clean(target))) return null;

    const sentence = this.fillTemplate(template.text, node, target);
    if (this.recent.sentences.includes(sentence)) return null;

    const rhymes = await this.api.getRhymes(target);
    if (rhymes.length < 4) return null;

    const prompt = {
      subject: node.subject,
      reference: node.reference,
      definition: node.definition,
      nodeId: node.id,
      templateId: template.id,
      target,
      sentence,
      rhymes: rhymes.slice(0, 16),
      example: this.exampleSentence(rhymes[0]),
      quality: 0
    };

    prompt.quality = this.score(prompt);
    if (prompt.quality < 65) return null;

    this.remember(prompt);
    return prompt;
  }

  fallbackPrompt(subjectIds) {
    const node = pick(this.nodesForSubjects(subjectIds));
    const template = PROMPT_TEMPLATES[0];
    const target = (node.roles[template.endRole] || node.roles.places || ["time"])[0];
    const sentence = this.fillTemplate(template.text, node, target);
    const prompt = {
      subject: node.subject,
      reference: node.reference,
      definition: node.definition,
      nodeId: node.id,
      templateId: template.id,
      target,
      sentence,
      rhymes: ["time", "rhyme", "line", "sign", "climb"],
      example: "I kept the rhythm moving with rhyme.",
      quality: 40
    };
    this.remember(prompt);
    return prompt;
  }

  fillTemplate(template, node, target) {
    const get = role => pick(node.roles[role] || ["someone"]);
    return cap(template.replace(/\{(target|place|person|object|action|mood)\}/g, (_, token) => {
      if (token === "target") return target;
      if (token === "place") return get("places");
      if (token === "person") return get("people");
      if (token === "object") return get("objects");
      if (token === "action") return get("actions");
      if (token === "mood") return get("moods");
      return "thing";
    }));
  }

  exampleSentence(rhyme) {
    return pick(EXAMPLE_TEMPLATES).replace("{rhyme}", rhyme);
  }

  nodesForSubjects(subjectIds) {
    if (!subjectIds.length || subjectIds.includes("random")) return KNOWLEDGE_NODES;
    return KNOWLEDGE_NODES.filter(node => subjectIds.includes(node.subject));
  }

  score(prompt) {
    let score = 0;
    if (prompt.rhymes.length >= 4) score += 25;
    if (prompt.rhymes.length >= 8) score += 10;
    if (prompt.definition) score += 15;
    if (prompt.sentence.length >= 20 && prompt.sentence.length <= 100) score += 15;
    if (!this.recent.targets.includes(clean(prompt.target))) score += 15;
    if (!this.recent.references.includes(prompt.nodeId)) score += 10;
    if (!this.recent.templates.includes(prompt.templateId)) score += 10;
    return score;
  }

  remember(prompt) {
    this.pushLimited(this.recent.targets, clean(prompt.target), APP_CONFIG.recentTargetLimit);
    this.pushLimited(this.recent.references, prompt.nodeId, APP_CONFIG.recentReferenceLimit);
    this.pushLimited(this.recent.templates, prompt.templateId, APP_CONFIG.recentTemplateLimit);
    this.pushLimited(this.recent.sentences, prompt.sentence, APP_CONFIG.recentSentenceLimit);
  }

  pushLimited(arr, item, limit) {
    arr.push(item);
    while (arr.length > limit) arr.shift();
  }
}
