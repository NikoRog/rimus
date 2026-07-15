export function createCardPool(cards) {
  let category = '';
  let deck = [];
  let lastCardId = '';

  function reset(nextCategory) {
    category = nextCategory;
    deck = shuffle(cards.filter(card => card.category === category));
    if (deck[0]?.id === lastCardId && deck.length > 1) deck.push(deck.shift());
  }

  function next(nextCategory = category) {
    if (nextCategory !== category || !deck.length) reset(nextCategory);
    const card = deck.shift();
    if (card) lastCardId = card.id;
    return card || null;
  }

  return { reset, next };
}

function shuffle(items) {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
