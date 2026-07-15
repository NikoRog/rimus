export async function lookupRhymes(word) {
  const cleanWord = String(word || '').trim().toLowerCase();
  if (!cleanWord) return { word, rhymes: [], configured: true, message: 'No word selected.' };
  try {
    const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${encodeURIComponent(cleanWord)}&max=12`);
    if (!response.ok) throw new Error(`Datamuse returned ${response.status}`);
    const data = await response.json();
    const rhymes = data.map(item => item.word).filter(Boolean).slice(0, 8);
    return {
      word,
      rhymes,
      configured: true,
      message: rhymes.length ? '' : 'No rhymes found.'
    };
  } catch (error) {
    return {
      word,
      rhymes: [],
      configured: true,
      message: `Rhyme lookup failed: ${error.message}`
    };
  }
}
