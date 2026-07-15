export async function loadLearningPack(url = './content/learning/learning-pack-v01.txt') {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Learning pack failed to load: ${response.status} ${url}`);
  return parseLearningPack(await response.text());
}

export function parseLearningPack(text) {
  const groups = [];
  const blocks = String(text || '').split(/\[SOUND_GROUP\]/g).slice(1);
  for (const block of blocks) {
    const id = field(block, 'id');
    const difficulty = field(block, 'difficulty');
    const words = field(block, 'words').split(',').map(item => item.trim()).filter(Boolean);
    const sentences = sentencesField(block);
    if (!id || !difficulty || words.length < 8 || sentences.length < 3) {
      throw new Error(`Invalid learning group: ${id || 'missing id'}`);
    }
    groups.push({ id, difficulty, words, sentences });
  }
  if (!groups.length) throw new Error('Learning pack contains no sound groups');
  return {
    groups,
    byDifficulty: {
      easy: groups.filter(group => group.difficulty === 'easy'),
      hard: groups.filter(group => group.difficulty === 'hard')
    }
  };
}

function field(block, name) {
  const match = block.match(new RegExp(`^${name}=([^\\n\\r]*)`, 'm'));
  return match ? match[1].trim() : '';
}

function sentencesField(block) {
  const lines = block.split(/\r?\n/);
  const start = lines.findIndex(line => line.trim() === 'sentences=');
  if (start < 0) return [];
  return lines.slice(start + 1)
    .map(line => line.trim())
    .filter(line => line && !line.startsWith('#'));
}
