import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { RAW_PACK01 } from '../../src/content/pack01/rawImports.js';
import { getPack01DebugSummary } from '../../src/content/pack01/adapter.js';
import { LOCAL, NODES, SUBJECTS, TEMPLATES } from '../../src/content/gameContent.js';
import { buildReferencePrompt, validateReferenceSentence } from '../../src/content/reference/generator.js';
import { cleanTerm } from '../../src/content/subjects/_packTools.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const MOJIBAKE = /[ÃÂâ�]/;

export const PACK_PATHS = {
  'entertainment.pack01': 'data/packs/entertainment/pack01',
  'world_knowledge.pack01': 'data/packs/world_knowledge/pack01',
  'lifestyle.pack01': 'data/packs/lifestyle/pack01'
};

export function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
}

export async function importModule(relativePath) {
  return import(pathToFileURL(path.join(ROOT, relativePath)).href);
}

function normalize(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function countDuplicates(values) {
  const seen = new Set();
  const duplicates = new Map();
  for (const value of values.filter(Boolean)) {
    if (seen.has(value)) duplicates.set(value, (duplicates.get(value) || 1) + 1);
    seen.add(value);
  }
  return [...duplicates.entries()].map(([value, count]) => ({ value, count }));
}

function collectPackArrays() {
  const subjects = [];
  for (const pack of RAW_PACK01) {
    for (const [subjectId, data] of Object.entries(pack.subjects)) {
      subjects.push({ packId: pack.packId, family: pack.family, subjectId, data });
    }
  }
  return subjects;
}

function assertCount(errors, label, expected, actual) {
  if (expected !== actual) errors.push(`${label}: expected ${expected}, got ${actual}`);
}

export async function validatePacks() {
  const errors = [];
  const warnings = [];
  const subjects = collectPackArrays();
  const globalEntityIds = [];
  const globalRelationshipIds = [];
  const globalFactIds = [];
  const globalTemplateIds = [];
  const globalFinalWordIds = [];
  const globalFinalWordStrings = [];
  const globalDisplayNames = [];
  const entityIds = new Set();
  const templateIds = new Set();
  const finalWordIds = new Set();

  for (const pack of RAW_PACK01) {
    const base = PACK_PATHS[pack.packId];
    const ledger = readJson(`${base}/ledger.json`);
    const report = readJson(`${base}/validation_report.json`);
    const subjectEntries = Object.entries(pack.subjects);
    const totals = subjectEntries.reduce((sum, [, data]) => ({
      entities: sum.entities + data.entities.length,
      relationships: sum.relationships + data.relationships.length,
      facts: sum.facts + data.facts.length,
      templates: sum.templates + data.templates.length,
      finalWords: sum.finalWords + data.finalWords.length
    }), { entities: 0, relationships: 0, facts: 0, templates: 0, finalWords: 0 });
    assertCount(errors, `${pack.packId} manifest entityCount`, pack.manifest.entityCount, totals.entities);
    assertCount(errors, `${pack.packId} manifest relationshipCount`, pack.manifest.relationshipCount, totals.relationships);
    assertCount(errors, `${pack.packId} manifest factCount`, pack.manifest.factCount, totals.facts);
    assertCount(errors, `${pack.packId} manifest templateCount`, pack.manifest.templateCount, totals.templates);
    assertCount(errors, `${pack.packId} manifest finalWordCount`, pack.manifest.finalWordCount, totals.finalWords);
    assertCount(errors, `${pack.packId} report entityCount`, report.entityCount, totals.entities);
    assertCount(errors, `${pack.packId} report relationshipCount`, report.relationshipCount, totals.relationships);
    assertCount(errors, `${pack.packId} report factCount`, report.factCount, totals.facts);
    assertCount(errors, `${pack.packId} report templateCount`, report.templateCount, totals.templates);
    assertCount(errors, `${pack.packId} report finalWordCount`, report.finalWordCount, totals.finalWords);
    for (const [subjectId, data] of subjectEntries) {
      const ledgerSubject = ledger.subjects?.[subjectId];
      if (!ledgerSubject) errors.push(`${pack.packId}:${subjectId}: missing ledger subject`);
      else {
        assertCount(errors, `${pack.packId}:${subjectId} ledger entityCount`, ledgerSubject.entityCount, data.entities.length);
        assertCount(errors, `${pack.packId}:${subjectId} ledger relationshipCount`, ledgerSubject.relationshipCount, data.relationships.length);
        assertCount(errors, `${pack.packId}:${subjectId} ledger factCount`, ledgerSubject.factCount, data.facts.length);
        assertCount(errors, `${pack.packId}:${subjectId} ledger templateCount`, ledgerSubject.templateCount, data.templates.length);
        assertCount(errors, `${pack.packId}:${subjectId} ledger finalWordCount`, ledgerSubject.finalWordCount, data.finalWords.length);
      }
    }
  }

  for (const { data } of subjects) {
    data.entities.forEach(item => { globalEntityIds.push(item.id); globalDisplayNames.push(normalize(item.displayName)); entityIds.add(item.id); });
    data.relationships.forEach(item => globalRelationshipIds.push(item.id));
    data.facts.forEach(item => globalFactIds.push(item.id));
    data.templates.forEach(item => { globalTemplateIds.push(item.id); templateIds.add(item.id); });
    data.finalWords.forEach(item => { globalFinalWordIds.push(item.id); globalFinalWordStrings.push(normalize(item.word)); finalWordIds.add(item.id); });
  }
  for (const pack of RAW_PACK01) {
    pack.crossSubjectTemplates.forEach(item => templateIds.add(item.id));
    for (const item of [...pack.crossSubjectRelationships, ...pack.crossSubjectFacts]) {
      if (item.fromEntityId && !entityIds.has(item.fromEntityId)) errors.push(`${pack.packId}:${item.id}: missing fromEntityId ${item.fromEntityId}`);
      if (item.toEntityId && !entityIds.has(item.toEntityId)) errors.push(`${pack.packId}:${item.id}: missing toEntityId ${item.toEntityId}`);
      if (item.entityId && !entityIds.has(item.entityId)) errors.push(`${pack.packId}:${item.id}: missing entityId ${item.entityId}`);
      for (const id of item.templateIds || []) if (!templateIds.has(id)) errors.push(`${pack.packId}:${item.id}: missing template ${id}`);
      for (const id of item.finalWordIds || []) if (!finalWordIds.has(id)) errors.push(`${pack.packId}:${item.id}: missing final word ${id}`);
    }
  }
  for (const { packId, subjectId, data } of subjects) {
    const localEntityIds = new Set(data.entities.map(item => item.id));
    const localTemplateIds = new Set(data.templates.map(item => item.id));
    const localFinalWordIds = new Set(data.finalWords.map(item => item.id));
    for (const finalWord of data.finalWords) {
      if (!String(finalWord.word || '').trim()) errors.push(`${packId}:${subjectId}:${finalWord.id}: empty final word`);
      if (normalize(finalWord.word) !== normalize(finalWord.normalized)) errors.push(`${packId}:${subjectId}:${finalWord.id}: normalized mismatch`);
      if (finalWord.sourceEntityId && !localEntityIds.has(finalWord.sourceEntityId)) errors.push(`${packId}:${subjectId}:${finalWord.id}: missing source entity`);
    }
    for (const item of [...data.relationships, ...data.facts]) {
      if (item.fromEntityId && !localEntityIds.has(item.fromEntityId)) errors.push(`${packId}:${subjectId}:${item.id}: missing fromEntityId`);
      if (item.toEntityId && !localEntityIds.has(item.toEntityId)) errors.push(`${packId}:${subjectId}:${item.id}: missing toEntityId`);
      if (item.entityId && !localEntityIds.has(item.entityId)) errors.push(`${packId}:${subjectId}:${item.id}: missing entityId`);
      for (const id of item.templateIds || []) if (!localTemplateIds.has(id)) errors.push(`${packId}:${subjectId}:${item.id}: missing template ${id}`);
      for (const id of item.finalWordIds || []) if (!localFinalWordIds.has(id)) errors.push(`${packId}:${subjectId}:${item.id}: missing final word ${id}`);
    }
  }
  const duplicates = {
    entityIds: countDuplicates(globalEntityIds),
    relationshipIds: countDuplicates(globalRelationshipIds),
    factIds: countDuplicates(globalFactIds),
    templateIds: countDuplicates(globalTemplateIds),
    finalWordIds: countDuplicates(globalFinalWordIds),
    finalWordStrings: countDuplicates(globalFinalWordStrings),
    displayNames: countDuplicates(globalDisplayNames)
  };
  for (const [label, items] of Object.entries(duplicates)) {
    if (label.endsWith('Ids') && items.length) errors.push(`duplicate ${label}: ${items.slice(0, 5).map(item => item.value).join(', ')}`);
    if (!label.endsWith('Ids') && items.length) warnings.push(`duplicate ${label}: ${items.slice(0, 8).map(item => item.value).join(', ')}`);
  }
  const allPackText = JSON.stringify(RAW_PACK01);
  if (MOJIBAKE.test(allPackText)) warnings.push('mojibake-like characters detected in Pack01 text');
  const adapter = getPack01DebugSummary();
  if (!adapter.validation.valid) errors.push(`adapter validation failed: ${adapter.validation.errors.join('; ')}`);
  return { ok: errors.length === 0, errors, warnings, duplicates, totals: { subjects: subjects.length, entities: globalEntityIds.length, relationships: globalRelationshipIds.length, facts: globalFactIds.length, templates: globalTemplateIds.length, finalWords: globalFinalWordIds.length }, adapter };
}

export function validateContent() {
  const errors = [];
  const warnings = [];
  if (SUBJECTS.length !== 14) errors.push(`SUBJECTS count expected 14, got ${SUBJECTS.length}`);
  if (!NODES.length) errors.push('NODES is empty');
  if (!Object.keys(LOCAL).length) errors.push('LOCAL is empty');
  if (!getPack01DebugSummary().validation.valid) errors.push('Pack01 validation is not valid');
  if (Object.keys(LOCAL).length > 2000) warnings.push(`LOCAL size high: ${Object.keys(LOCAL).length}`);
  if (NODES.length > 500) warnings.push(`NODES size high: ${NODES.length}`);
  if (getPack01DebugSummary().totalEntities > 1000) warnings.push(`Pack01 eager entities high: ${getPack01DebugSummary().totalEntities}`);
  if (getPack01DebugSummary().totalFinalWords > 1000) warnings.push(`Pack01 eager final words high: ${getPack01DebugSummary().totalFinalWords}`);
  const bySubject = Object.fromEntries(SUBJECTS.map(subject => [subject.id, NODES.filter(node => node.s === subject.id).length]));
  const counts = Object.values(bySubject);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  if (max > min * 3) warnings.push(`subject node imbalance: min ${min}, max ${max}`);
  return { ok: errors.length === 0, errors, warnings, subjects: SUBJECTS.length, nodes: NODES.length, local: Object.keys(LOCAL).length, bySubject, pack01: getPack01DebugSummary() };
}

function pick(words, target) {
  return (words || []).find(word => cleanTerm(word) !== cleanTerm(target)) || words?.[0] || 'thing';
}

function fill(template, node, target) {
  return String(template)
    .replaceAll('{ref}', node.r)
    .replaceAll('{target}', target)
    .replaceAll('{person}', pick(node.roles.people, target))
    .replaceAll('{object}', pick(node.roles.objects, target))
    .replaceAll('{place}', pick(node.roles.places, target))
    .replaceAll('{mood}', pick(node.roles.moods, target))
    .replaceAll('{action}', pick(node.roles.actions, target))
    .replaceAll('{adverb}', pick(node.roles.adverbs, target));
}

function finalWord(sentence) {
  const match = String(sentence || '').trim().match(/[A-Za-z]+(?=[^A-Za-z]*$)/);
  return match ? cleanTerm(match[0]) : '';
}

function targetCount(sentence, target) {
  const key = cleanTerm(target);
  return (String(sentence || '').match(/[A-Za-z]+/g) || []).filter(word => cleanTerm(word) === key).length;
}

function validPrompt(sentence, target) {
  return finalWord(sentence) === cleanTerm(target) && targetCount(sentence, target) === 1;
}

function roleTemplates(node, role) {
  const nodeTemplates = (node.templates || []).filter(template => template.role === role);
  return nodeTemplates.length ? nodeTemplates : TEMPLATES.filter(template => template[0] === role).map((template, index) => ({ id: `generic_${role}_${index}`, role, text: template[1] }));
}

function subjectCandidates(subjectId) {
  const candidates = [];
  for (const node of NODES.filter(item => item.s === subjectId)) {
    for (const role of Object.keys(node.roles || {})) {
      for (const template of roleTemplates(node, role)) {
        for (const target of node.roles[role] || []) {
          const sentence = fill(template.text, node, target);
          const source = node.source === 'pack01' ? 'pack01' : 'subject';
          const meta = node.finalWordMeta?.[cleanTerm(target)] || {};
          candidates.push({ source, subject: subjectId, sentence, target, finalWord: target, nodeId: node.id || '', templateId: template.id || '', finalWordId: meta.finalWordId || '', sourceEntityId: meta.sourceEntityId || '', valid: validPrompt(sentence, target) });
        }
      }
    }
  }
  return candidates;
}

export function smokePrompts(perSubject = 100) {
  const results = [];
  const errors = [];
  for (const subject of SUBJECTS) {
    const distribution = { reference: 0, pack01: 0, subject: 0, generic: 0 };
    const rejected = [];
    const generated = [];
    const reference = buildReferencePrompt([subject.id], []);
    if (reference && validateReferenceSentence(reference.sentence, reference.finalWord || reference.target)) {
      generated.push({ ...reference, source: 'reference' });
      distribution.reference++;
    }
    const candidates = subjectCandidates(subject.id);
    const packCandidates = candidates.filter(item => item.source === 'pack01');
    const subjectPackCandidates = candidates.filter(item => item.source === 'subject');
    for (const item of candidates.filter(item => !item.valid).slice(0, 10)) rejected.push(item);
    let index = 0;
    while (generated.length < perSubject && (packCandidates.length || subjectPackCandidates.length)) {
      const sourcePool = generated.length % 3 === 0 && packCandidates.length ? packCandidates : subjectPackCandidates.length ? subjectPackCandidates : packCandidates;
      const item = sourcePool[index % sourcePool.length];
      index++;
      if (!item.valid) continue;
      generated.push(item);
      distribution[item.source]++;
      if (index > candidates.length * 2 + perSubject) break;
    }
    if (!generated.length) {
      const fallback = { source: 'generic', subject: subject.id, sentence: 'The next rhyme came from the time.', target: 'time', finalWord: 'time' };
      generated.push(fallback);
      distribution.generic++;
    }
    for (const prompt of generated) {
      if (!prompt.sentence || !(prompt.finalWord || prompt.target) || !prompt.source) errors.push(`${subject.id}: missing prompt fields`);
      if (!validPrompt(prompt.sentence, prompt.finalWord || prompt.target)) errors.push(`${subject.id}: invalid final word: ${prompt.sentence} / ${prompt.finalWord || prompt.target}`);
    }
    results.push({ subject: subject.id, generated: generated.length, distribution, rejected: rejected.length, errors: errors.filter(error => error.startsWith(`${subject.id}:`)).length, samples: generated.slice(0, 3).map(item => `${item.sentence} [${item.source}]`) });
  }
  return { ok: errors.length === 0, errors, results };
}

export function stabilityReport() {
  const pack01 = getPack01DebugSummary();
  const content = validateContent();
  const packModuleCount = RAW_PACK01.length * 19;
  const candidateEstimate = NODES.reduce((total, node) => total + Object.keys(node.roles || {}).reduce((sum, role) => sum + (node.roles[role]?.length || 0) * roleTemplates(node, role).length, 0), 0);
  return {
    ok: content.ok && pack01.validation.valid,
    packModuleCount,
    packIds: pack01.loadedPackIds,
    totalPack01Entities: pack01.totalEntities,
    totalPack01FinalWords: pack01.totalFinalWords,
    nodes: NODES.length,
    local: Object.keys(LOCAL).length,
    candidateEstimate,
    eagerLoadingAcceptable: pack01.totalEntities <= 1000 && pack01.totalFinalWords <= 1000 && NODES.length <= 500 && Object.keys(LOCAL).length <= 2000,
    warnings: content.warnings
  };
}

export function printResult(title, result) {
  console.log(`\n${title}`);
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exitCode = 1;
}
