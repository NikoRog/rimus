export const CUSTOM_WORDS_KEY = 'rimus_custom_words_v062';

export const CUSTOM_WORD_TYPES = [
  ['places', 'Place / setting'],
  ['people', 'Sentence subject / person'],
  ['objects', 'Object / thing'],
  ['actions', 'Verb / action'],
  ['moods', 'Mood / adjective'],
  ['adverbs', 'Adverb / how']
];

const VALID_TYPES = new Set(CUSTOM_WORD_TYPES.map(([id]) => id));

export function normalizeCustomWord(word) {
  return String(word || '').trim().toLowerCase().replace(/[^a-z -]/g, '').replace(/\s+/g, ' ');
}

export function loadCustomWords(storage = localStorage) {
  try {
    return JSON.parse(storage.getItem(CUSTOM_WORDS_KEY) || '[]')
      .filter((item) => item && VALID_TYPES.has(item.role) && item.word)
      .slice(0, 80);
  } catch (error) {
    return [];
  }
}

export function saveCustomWords(words, storage = localStorage) {
  storage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(words.slice(0, 80)));
}

export function addCustomWord(word, role, storage = localStorage) {
  const cleanWord = normalizeCustomWord(word);
  if (!cleanWord) return { ok: false, error: 'Add one word first.' };
  if (cleanWord.includes(' ')) return { ok: false, error: 'Use one word for now.' };
  if (!VALID_TYPES.has(role)) return { ok: false, error: 'Choose a word type.' };

  const words = loadCustomWords(storage).filter((item) => item.word !== cleanWord);
  const item = { id: `${role}:${cleanWord}`, word: cleanWord, role, createdAt: Date.now() };
  words.unshift(item);
  saveCustomWords(words, storage);
  return { ok: true, item };
}

export function deleteCustomWord(id, storage = localStorage) {
  const words = loadCustomWords(storage).filter((item) => item.id !== id);
  saveCustomWords(words, storage);
  return words;
}

export function customRoleLabel(role) {
  return CUSTOM_WORD_TYPES.find(([id]) => id === role)?.[1] || 'Word';
}

export function getCustomWordNode(storage = localStorage) {
  const words = loadCustomWords(storage);
  if (!words.length) return null;

  const roles = { places: [], people: [], objects: [], actions: [], moods: [], adverbs: [] };
  for (const item of words) roles[item.role].push(item.word);

  return {
    s: 'custom',
    r: 'Custom Words',
    custom: true,
    d: 'Custom words are added by players and can appear in any subject.',
    roles
  };
}
