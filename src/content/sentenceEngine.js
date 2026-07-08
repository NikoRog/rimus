import { entertainmentCompact01 } from './entertainmentCompact01.js';

export const SE_VERBS = ['made', 'created', 'built', 'crafted', 'developed', 'launched', 'released'];
const PAST_VERBS = {
  made: 'made',
  created: 'created',
  built: 'built',
  crafted: 'crafted',
  developed: 'developed',
  launched: 'launched',
  released: 'released'
};

export const SE_SUBJECTS = Object.keys(entertainmentCompact01.subjects).map(id => ({
  id,
  name: id[0].toUpperCase() + id.slice(1)
}));

function clean(value) {
  return String(value || '').toLowerCase().replace(/[^a-z]/g, '');
}

function finalWord(value) {
  const match = String(value || '').trim().match(/[A-Za-z]+(?=[^A-Za-z]*$)/);
  return match ? match[0] : '';
}

function countTarget(sentence, target) {
  const targetKey = clean(target);
  return (String(sentence || '').match(/[A-Za-z]+/g) || []).filter(word => clean(word) === targetKey).length;
}

function validate(sentence, target) {
  return clean(finalWord(sentence)) === clean(target) && countTarget(sentence, target) === 1;
}

function validRhymes(rhymes) {
  return Array.isArray(rhymes) && rhymes.filter(Boolean).length >= 3;
}

function subjectName(subjectId) {
  return SE_SUBJECTS.find(item => item.id === subjectId)?.name || subjectId;
}

function subjectAnchors(subjectId) {
  const subject = entertainmentCompact01.subjects[subjectId] || {};
  return Object.entries(subject)
    .filter(([, anchor]) => (anchor?.name || anchor?.n) && (Array.isArray(anchor.made) || Array.isArray(anchor.m)))
    .map(([anchorKey, anchor]) => ({
      anchorKey,
      name: anchor.name || anchor.n,
      target: anchor.target,
      rhymes: anchor.rhymes,
      fallback: normalizeFallback(anchor.fallback || anchor.fb),
      made: (anchor.made || anchor.m || []).map(normalizeItem)
    }));
}

function validItem(item) {
  return item?.name && item?.target && validRhymes(item.rhymes) && item.fact;
}

function validFallback(fallback) {
  return fallback?.name && fallback?.target && validRhymes(fallback.rhymes);
}

function normalizeItem(item) {
  if (Array.isArray(item)) return { name: item[0], target: item[1], rhymes: item[2], fact: item[3] };
  return item;
}

function normalizeFallback(fallback) {
  if (Array.isArray(fallback)) return { name: fallback[0], target: fallback[1], rhymes: fallback[2] };
  return fallback;
}

function makePrompt({ subjectId, anchor, verb, item, backward = false, fallback = false }) {
  if (!validItem(item)) return null;
  let sentence = `${anchor.name} ${verb} ${item.name}.`;
  let target = item.target;
  let rhymes = item.rhymes;
  let template = 'forward';
  if (backward) {
    if (!anchor.target || !validRhymes(anchor.rhymes)) return null;
    sentence = `${item.name} was ${PAST_VERBS[verb]} by ${anchor.name}.`;
    target = anchor.target;
    rhymes = anchor.rhymes;
    template = 'backward';
  }
  if (fallback) {
    if (!validFallback(anchor.fallback)) return null;
    sentence = `${item.name} came from ${anchor.fallback.name}.`;
    target = anchor.fallback.target;
    rhymes = anchor.fallback.rhymes;
    template = 'fallback';
  }
  if (!validate(sentence, target)) return null;
  return {
    source: 'sentence_engine',
    subject: subjectId,
    subjectId,
    ref: subjectName(subjectId),
    scene: verb,
    target,
    finalWord: target,
    sentence,
    funFact: item.fact,
    rhymes,
    example: '',
    tpl: template,
    role: verb,
    anchorKey: anchor.anchorKey,
    itemKey: clean(item.name),
    verb
  };
}

export function compileSentencePrompts(subjectIds = SE_SUBJECTS.map(s => s.id)) {
  const prompts = [];
  for (const subjectId of subjectIds) {
    for (const anchor of subjectAnchors(subjectId)) {
      for (const item of anchor.made) {
        for (const verb of SE_VERBS) {
          const forward = makePrompt({ subjectId, anchor, verb, item });
          if (forward) prompts.push(forward);
          const backward = makePrompt({ subjectId, anchor, verb, item, backward: true });
          if (backward) prompts.push(backward);
          else {
            const fallback = makePrompt({ subjectId, anchor, verb, item, fallback: true });
            if (fallback) prompts.push(fallback);
          }
        }
      }
    }
  }
  return prompts;
}

export function sentenceEngineDebug() {
  const subjects = SE_SUBJECTS.map(s => s.id);
  const prompts = compileSentencePrompts(subjects);
  return {
    packId: entertainmentCompact01.id,
    subjects,
    prompts: prompts.length,
    anchors: subjects.reduce((count, subjectId) => count + subjectAnchors(subjectId).length, 0)
  };
}
