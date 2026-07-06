import { getReferencePacks } from './registry.js';
import { resolveReferenceHelp } from './help.js';

const FACT_LAYERS = ['foundation', 'expansion', 'discovery'];

function cleanWord(value) {
  return String(value || '').toLowerCase().replace(/[^a-z]/g, '');
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function weightedPick(items, weightOf) {
  const total = items.reduce((sum, item) => sum + Math.max(0, weightOf(item) || 0), 0);
  if (total <= 0) return pick(items);
  let roll = Math.random() * total;
  for (const item of items) {
    roll -= Math.max(0, weightOf(item) || 0);
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
}

function finalWord(sentence) {
  const match = String(sentence || '').trim().match(/[A-Za-z]+(?=[^A-Za-z]*$)/);
  return match ? match[0] : '';
}

function targetCount(sentence, target) {
  const targetKey = cleanWord(target);
  return (String(sentence || '').match(/[A-Za-z]+/g) || []).filter(word => cleanWord(word) === targetKey).length;
}

export function validateReferenceSentence(sentence, target) {
  return cleanWord(finalWord(sentence)) === cleanWord(target) && targetCount(sentence, target) === 1;
}

function entityWeight(entity, pack) {
  const familiarityWeight = pack.familiarityWeights?.[entity.familiarity] || 1;
  const regionWeight = pack.regionWeights?.[entity.region] || 1;
  return familiarityWeight + regionWeight + (entity.importance || 0) + (entity.sentencePotential || 0) + (entity.playabilityScore || 0);
}

function chooseFact(entity, pack) {
  const available = FACT_LAYERS.filter(layer => entity.facts?.[layer]);
  if (!available.length) return { layer: '', text: '' };
  const layer = weightedPick(available, item => pack.familiarityWeights?.[item] || 1);
  return { layer, text: entity.facts[layer] };
}

function targetNote(entity, target) {
  return `${target} is the final word selected from the sentence context for ${entity.displayName || entity.canonicalName}.`;
}

function relationshipPrompt(pack, node, entity) {
  const relationships = (entity.relationships || []).filter(r => r.phrase);
  if (!relationships.length) return null;
  const relationship = weightedPick(relationships, item => (item.playabilityScore || 5) + (entity.sentencePotential || 0));
  const sentence = `${entity.displayName || entity.canonicalName} ${relationship.phrase}.`;
  const target = relationship.targetWord || finalWord(sentence);
  if (!validateReferenceSentence(sentence, target)) return null;
  const fact = chooseFact(entity, pack);
  const debug = {
    generator: 'reference_relationship',
    subject: pack.id,
    node: node.id,
    nodeLabel: node.label,
    entity: entity.id,
    canonicalName: entity.canonicalName,
    displayName: entity.displayName,
    entityType: entity.type,
    familiarity: entity.familiarity,
    region: entity.region,
    relationship: relationship.type,
    relationshipPhrase: relationship.phrase,
    factLayer: fact.layer,
    fact: fact.text,
    targetWord: relationship.targetWord || '',
    finalWord: target,
    targetNote: targetNote(entity, target),
    sentence,
    validation: true,
    fallbackUsed: false
  };
  return {
    subject: pack.id,
    ref: node.label,
    scene: node.label,
    target,
    finalWord: target,
    sentence,
    def: '',
    tpl: `reference:${relationship.type}`,
    role: 'reference',
    referenceDebug: debug
  };
}

function factPrompt(pack, node, entity) {
  const factPrompt = (entity.factPrompts || []).find(item => item.sentence);
  if (!factPrompt) return null;
  const sentence = factPrompt.sentence.replaceAll('{entity}', entity.displayName || entity.canonicalName);
  const target = factPrompt.targetWord || finalWord(sentence);
  if (!validateReferenceSentence(sentence, target)) return null;
  const fact = chooseFact(entity, pack);
  const debug = {
    generator: 'reference_fact',
    subject: pack.id,
    node: node.id,
    nodeLabel: node.label,
    entity: entity.id,
    canonicalName: entity.canonicalName,
    displayName: entity.displayName,
    entityType: entity.type,
    familiarity: entity.familiarity,
    region: entity.region,
    relationship: '',
    relationshipPhrase: '',
    factLayer: fact.layer,
    fact: fact.text,
    targetWord: factPrompt.targetWord || '',
    finalWord: target,
    targetNote: targetNote(entity, target),
    sentence,
    validation: true,
    fallbackUsed: false
  };
  return {
    subject: pack.id,
    ref: node.label,
    scene: node.label,
    target,
    finalWord: target,
    sentence,
    def: '',
    tpl: 'reference:fact',
    role: 'reference',
    referenceDebug: debug
  };
}

export function buildReferencePrompt(subjectIds = [], queue = []) {
  const packs = getReferencePacks(subjectIds);
  const candidates = [];
  for (const pack of packs) {
    for (const node of pack.nodes || []) {
      for (const entity of node.entities || []) {
        candidates.push({ pack, node, entity });
      }
    }
  }
  if (!candidates.length) return null;
  const recentTargets = new Set(queue.map(prompt => cleanWord(prompt.target)));
  const recentSentences = new Set(queue.map(prompt => prompt.sentence));
  const ordered = [...candidates].sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(ordered.length, 24); i++) {
    const item = weightedPick(ordered, c => entityWeight(c.entity, c.pack));
    const prompt = relationshipPrompt(item.pack, item.node, item.entity) || factPrompt(item.pack, item.node, item.entity);
    if (!prompt) continue;
    if (recentTargets.has(cleanWord(prompt.target)) || recentSentences.has(prompt.sentence)) continue;
    prompt.def = resolveReferenceHelp(prompt);
    return prompt;
  }
  return null;
}
