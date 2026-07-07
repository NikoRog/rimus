import { RAW_PACK01 } from './rawImports.js';

const REQUIRED_ENTITY = ['id', 'canonicalName', 'displayName', 'type', 'subject', 'knowledgeNode'];
const REQUIRED_FINAL_WORD = ['id', 'subject', 'word', 'normalized'];
const REQUIRED_TEMPLATE = ['id', 'pattern'];

function clean(value) {
  return String(value || '').toLowerCase().replace(/[^a-z]/g, '');
}

function isSingleWord(value) {
  return /^[A-Za-z][A-Za-z0-9-]*$/.test(String(value || ''));
}

function uniqueBy(items, key) {
  const seen = new Set();
  const duplicates = [];
  for (const item of items) {
    const value = item?.[key];
    if (!value) continue;
    if (seen.has(value)) duplicates.push(value);
    seen.add(value);
  }
  return { seen, duplicates };
}

function missingFields(items, required, label) {
  return items.flatMap(item => required.filter(field => item?.[field] === undefined || item?.[field] === null || item?.[field] === '').map(field => `${label}:${item?.id || 'missing-id'}:${field}`));
}

function byId(items) {
  return new Map(items.map(item => [item.id, item]));
}

function validateSubjectPack(subjectId, data) {
  const errors = [];
  const entities = data.entities || [];
  const relationships = data.relationships || [];
  const facts = data.facts || [];
  const templates = data.templates || [];
  const finalWords = data.finalWords || [];
  const entityIds = uniqueBy(entities, 'id');
  const finalWordIds = uniqueBy(finalWords, 'id');
  const templateIds = uniqueBy(templates, 'id');
  errors.push(...entityIds.duplicates.map(id => `${subjectId}:duplicate entity ${id}`));
  errors.push(...finalWordIds.duplicates.map(id => `${subjectId}:duplicate final word ${id}`));
  errors.push(...templateIds.duplicates.map(id => `${subjectId}:duplicate template ${id}`));
  errors.push(...missingFields(entities, REQUIRED_ENTITY, `${subjectId}:entity`));
  errors.push(...missingFields(finalWords, REQUIRED_FINAL_WORD, `${subjectId}:finalWord`));
  errors.push(...missingFields(templates, REQUIRED_TEMPLATE, `${subjectId}:template`));
  const entityMap = byId(entities);
  const templateMap = byId(templates);
  const finalWordMap = byId(finalWords);
  for (const relationship of relationships) {
    if (!relationship.id) errors.push(`${subjectId}:relationship missing id`);
    if (relationship.fromEntityId && !entityMap.has(relationship.fromEntityId)) errors.push(`${subjectId}:${relationship.id}:missing fromEntityId ${relationship.fromEntityId}`);
    if (relationship.toEntityId && !entityMap.has(relationship.toEntityId)) errors.push(`${subjectId}:${relationship.id}:missing toEntityId ${relationship.toEntityId}`);
    for (const id of relationship.templateIds || []) if (!templateMap.has(id)) errors.push(`${subjectId}:${relationship.id}:missing template ${id}`);
    for (const id of relationship.finalWordIds || []) if (!finalWordMap.has(id)) errors.push(`${subjectId}:${relationship.id}:missing final word ${id}`);
  }
  for (const fact of facts) {
    if (!fact.id) errors.push(`${subjectId}:fact missing id`);
    if (fact.entityId && !entityMap.has(fact.entityId)) errors.push(`${subjectId}:${fact.id}:missing entity ${fact.entityId}`);
    for (const id of fact.templateIds || []) if (!templateMap.has(id)) errors.push(`${subjectId}:${fact.id}:missing template ${id}`);
    for (const id of fact.finalWordIds || []) if (!finalWordMap.has(id)) errors.push(`${subjectId}:${fact.id}:missing final word ${id}`);
  }
  return { valid: errors.length === 0, errors };
}

function createNode(subjectId, nodeId, packMeta) {
  return {
    id: `${subjectId}.pack01.${nodeId}`,
    topic: nodeId.replaceAll('_', ' '),
    scene: `${subjectId} Pack01`,
    source: 'pack01',
    packId: packMeta.packId,
    family: packMeta.family,
    people: [],
    places: [],
    objects: [],
    actions: [],
    moods: [],
    adverbs: [],
    facts: [],
    definitions: {},
    templates: [],
    finalWordMeta: {}
  };
}

function definitionFor(finalWord, data) {
  const entity = data.entities.find(item => item.id === finalWord.sourceEntityId);
  const fact = data.facts.find(item => item.entityId === finalWord.sourceEntityId);
  if (fact?.text) return `${finalWord.word}: ${fact.text}`;
  if (entity) return `${finalWord.word}: ${entity.canonicalName} is a ${entity.type} in ${entity.subject}.`;
  return `${finalWord.word}: Pack01 final word for ${finalWord.subject}.`;
}

function normalizeSubject(subjectId, data, packMeta) {
  const nodeMap = new Map();
  for (const entity of data.entities || []) {
    const nodeId = entity.knowledgeNode || 'pack01';
    if (!nodeMap.has(nodeId)) nodeMap.set(nodeId, createNode(subjectId, nodeId, packMeta));
    const node = nodeMap.get(nodeId);
    if (isSingleWord(entity.displayName)) {
      if (['person', 'artist', 'designer', 'actor', 'athlete'].includes(entity.type)) node.people.push(entity.displayName);
      else node.objects.push(entity.displayName);
    }
  }
  for (const finalWord of data.finalWords || []) {
    const entity = data.entities.find(item => item.id === finalWord.sourceEntityId);
    const nodeId = entity?.knowledgeNode || 'pack01';
    if (!nodeMap.has(nodeId)) nodeMap.set(nodeId, createNode(subjectId, nodeId, packMeta));
    const node = nodeMap.get(nodeId);
    node.objects.push(finalWord.word);
    node.definitions[clean(finalWord.word)] = definitionFor(finalWord, data);
    node.finalWordMeta[clean(finalWord.word)] = {
      finalWordId: finalWord.id,
      sourceEntityId: finalWord.sourceEntityId || '',
      packId: packMeta.packId,
      family: packMeta.family
    };
  }
  for (const node of nodeMap.values()) {
    node.objects = [...new Set(node.objects)].filter(Boolean);
    node.people = [...new Set(node.people)].filter(Boolean);
    node.facts = (data.facts || []).slice(0, 8).map(fact => fact.text);
    node.templates = [
      { id: `${node.id}.object.1`, role: 'objects', text: `Pack01 connects this subject to the {target}.`, tags: ['pack01'] },
      { id: `${node.id}.object.2`, role: 'objects', text: `The ${node.topic} clue points to the {target}.`, tags: ['pack01'] },
      { id: `${node.id}.person.1`, role: 'people', text: `Pack01 highlights the {target}.`, tags: ['pack01'] }
    ];
    if (!node.objects.length) node.objects = ['game'];
    if (!node.people.length) node.people = ['player'];
    node.places = ['scene', 'world', 'field'];
    node.actions = ['connect', 'shape', 'inspire'];
    node.moods = ['famous', 'useful', 'known'];
    node.adverbs = ['clearly', 'strongly', 'often'];
  }
  return {
    id: subjectId,
    packId: packMeta.packId,
    family: packMeta.family,
    entities: data.entities || [],
    relationships: data.relationships || [],
    facts: data.facts || [],
    templates: data.templates || [],
    finalWords: data.finalWords || [],
    crossSubjectRelationships: packMeta.crossSubjectRelationships || [],
    crossSubjectFacts: packMeta.crossSubjectFacts || [],
    crossSubjectTemplates: packMeta.crossSubjectTemplates || [],
    nodes: [...nodeMap.values()]
  };
}

function buildPack01() {
  const subjects = {};
  const validation = { valid: true, errors: [], warnings: [], subjects: {}, loadedPackIds: RAW_PACK01.map(pack => pack.packId) };
  for (const pack of RAW_PACK01) {
    for (const [subjectId, data] of Object.entries(pack.subjects)) {
      const subjectValidation = validateSubjectPack(subjectId, data);
      validation.subjects[subjectId] = subjectValidation;
      validation.errors.push(...subjectValidation.errors);
      if (!subjectValidation.valid) {
        validation.warnings.push(`${pack.packId}:${subjectId} skipped because validation failed`);
        console.warn('[Pack01]', `${pack.packId}:${subjectId} skipped`, subjectValidation.errors);
        continue;
      }
      subjects[subjectId] = normalizeSubject(subjectId, data, pack);
    }
  }
  validation.valid = validation.errors.length === 0;
  return { subjects, validation };
}

export const PACK01 = buildPack01();

export function attachPack01Content(subjectPacks) {
  return subjectPacks.map(pack => PACK01.subjects[pack.id] ? { ...pack, pack01: PACK01.subjects[pack.id], nodes: [...(pack.nodes || []), ...PACK01.subjects[pack.id].nodes] } : pack);
}

export function getPack01DebugSummary() {
  const subjects = Object.keys(PACK01.subjects);
  return {
    loadedPackIds: PACK01.validation.loadedPackIds,
    subjects,
    subjectCounts: Object.fromEntries(subjects.map(id => [id, {
      entities: PACK01.subjects[id].entities.length,
      relationships: PACK01.subjects[id].relationships.length,
      facts: PACK01.subjects[id].facts.length,
      templates: PACK01.subjects[id].templates.length,
      finalWords: PACK01.subjects[id].finalWords.length
    }])),
    totalEntities: subjects.reduce((sum, id) => sum + PACK01.subjects[id].entities.length, 0),
    totalFinalWords: subjects.reduce((sum, id) => sum + PACK01.subjects[id].finalWords.length, 0),
    validation: {
      valid: PACK01.validation.valid,
      errorCount: PACK01.validation.errors.length,
      warningCount: PACK01.validation.warnings.length,
      errors: PACK01.validation.errors.slice(0, 10),
      warnings: PACK01.validation.warnings.slice(0, 10)
    }
  };
}
