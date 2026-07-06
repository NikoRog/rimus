export const gamingReferenceEntities = [
  {
    id: 'gaming.person.miyamoto',
    canonicalName: 'Shigeru Miyamoto',
    displayName: 'Miyamoto',
    type: 'person',
    subtype: 'designer',
    node: 'gaming.designers',
    region: 'eastAsia',
    country: 'Japan',
    familiarity: 'foundation',
    difficulty: 2,
    importance: 10,
    sentencePotential: 10,
    playabilityScore: 9,
    aliases: ['Shigeru Miyamoto'],
    tags: ['nintendo', 'designer', 'mario', 'zelda'],
    facts: {
      foundation: 'Shigeru Miyamoto helped create Mario for Nintendo.',
      expansion: 'Miyamoto also shaped Zelda and Donkey Kong.',
      discovery: 'Miyamoto often designs around movement and play before story.'
    },
    relationships: [
      { type: 'created', targetLabel: 'Mario', phrase: 'created the plumber', targetWord: 'plumber' },
      { type: 'designed', targetLabel: 'Zelda', phrase: 'shaped the adventure', targetWord: 'adventure' }
    ]
  },
  {
    id: 'gaming.person.kojima',
    canonicalName: 'Hideo Kojima',
    displayName: 'Kojima',
    type: 'person',
    subtype: 'designer',
    node: 'gaming.designers',
    region: 'eastAsia',
    country: 'Japan',
    familiarity: 'expansion',
    difficulty: 3,
    importance: 8,
    sentencePotential: 9,
    playabilityScore: 8,
    tags: ['stealth', 'metal gear', 'director'],
    facts: {
      foundation: 'Hideo Kojima is known for cinematic game design.',
      expansion: 'Kojima directed Metal Gear Solid and Death Stranding.',
      discovery: 'Kojima often blends film language with interactive systems.'
    },
    relationships: [
      { type: 'directed', targetLabel: 'Snake', phrase: 'directed the soldier', targetWord: 'soldier' },
      { type: 'popularized', targetLabel: 'stealth', phrase: 'popularized stealth', targetWord: 'stealth' }
    ]
  },
  {
    id: 'gaming.studio.nintendo',
    canonicalName: 'Nintendo',
    displayName: 'Nintendo',
    type: 'studio',
    subtype: 'publisher',
    node: 'gaming.designers',
    region: 'eastAsia',
    country: 'Japan',
    familiarity: 'foundation',
    difficulty: 1,
    importance: 10,
    sentencePotential: 9,
    playabilityScore: 8,
    tags: ['console', 'mario', 'zelda'],
    facts: {
      foundation: 'Nintendo is one of the most famous game companies in the world.',
      expansion: 'Nintendo created consoles like the Game Boy, Wii, and Switch.',
      discovery: 'Nintendo began long before video games as a playing card company.'
    },
    relationships: [
      { type: 'published', targetLabel: 'Mario', phrase: 'published the plumber', targetWord: 'plumber' },
      { type: 'launched', targetLabel: 'Switch', phrase: 'launched the switch', targetWord: 'switch' }
    ]
  },
  {
    id: 'gaming.game.portal',
    canonicalName: 'Portal',
    displayName: 'Portal',
    type: 'game',
    subtype: 'puzzle',
    node: 'gaming.games',
    region: 'international',
    country: 'United States',
    familiarity: 'foundation',
    difficulty: 2,
    importance: 9,
    sentencePotential: 10,
    playabilityScore: 9,
    tags: ['valve', 'puzzle', 'portal gun'],
    facts: {
      foundation: 'Portal is a puzzle game built around linked doorways.',
      expansion: 'Portal uses physics puzzles and dark comedy inside test chambers.',
      discovery: 'Portal began from student work that Valve later developed into a full game.'
    },
    relationships: [
      { type: 'opened', targetLabel: 'test chamber', phrase: 'opened the chamber', targetWord: 'chamber' },
      { type: 'introduced', targetLabel: 'GLaDOS', phrase: 'introduced the voice', targetWord: 'voice' }
    ]
  },
  {
    id: 'gaming.game.half_life',
    canonicalName: 'Half-Life',
    displayName: 'Half-Life',
    type: 'game',
    subtype: 'shooter',
    node: 'gaming.games',
    region: 'international',
    country: 'United States',
    familiarity: 'expansion',
    difficulty: 3,
    importance: 9,
    sentencePotential: 8,
    playabilityScore: 8,
    tags: ['valve', 'shooter', 'black mesa'],
    facts: {
      foundation: 'Half-Life is a first-person shooter from Valve.',
      expansion: 'Half-Life was praised for telling story without frequent cutscenes.',
      discovery: 'Its opening tram ride became famous for worldbuilding before combat.'
    },
    relationships: [
      { type: 'introduced', targetLabel: 'crowbar', phrase: 'introduced the crowbar', targetWord: 'crowbar' },
      { type: 'started', targetLabel: 'Black Mesa incident', phrase: 'started the disaster', targetWord: 'disaster' }
    ]
  },
  {
    id: 'gaming.game.counter_strike',
    canonicalName: 'Counter-Strike',
    displayName: 'Counter-Strike',
    type: 'game',
    subtype: 'shooter',
    node: 'gaming.games',
    region: 'international',
    country: 'United States',
    familiarity: 'foundation',
    difficulty: 2,
    importance: 9,
    sentencePotential: 9,
    playabilityScore: 8,
    tags: ['esports', 'tactics', 'defusal'],
    facts: {
      foundation: 'Counter-Strike is a tactical shooter built around teams.',
      expansion: 'Counter-Strike made bomb defusal one of gaming most famous competitive modes.',
      discovery: 'Counter-Strike began as a Half-Life mod before becoming a major series.'
    },
    relationships: [
      { type: 'popularized', targetLabel: 'defusal', phrase: 'popularized defusal', targetWord: 'defusal' },
      { type: 'rewarded', targetLabel: 'team tactics', phrase: 'rewarded the tactic', targetWord: 'tactic' }
    ]
  },
  {
    id: 'gaming.character.mario',
    canonicalName: 'Mario',
    displayName: 'Mario',
    type: 'character',
    subtype: 'mascot',
    node: 'gaming.characters',
    region: 'eastAsia',
    country: 'Japan',
    familiarity: 'foundation',
    difficulty: 1,
    importance: 10,
    sentencePotential: 10,
    playabilityScore: 9,
    tags: ['nintendo', 'platformer', 'mascot'],
    facts: {
      foundation: 'Mario is Nintendo famous platform game mascot.',
      expansion: 'Mario is often described as a plumber.',
      discovery: 'Mario first appeared before his name became Mario.'
    },
    relationships: [
      { type: 'became', targetLabel: 'plumber', phrase: 'became the plumber', targetWord: 'plumber' },
      { type: 'mastered', targetLabel: 'platforming jump', phrase: 'mastered the jump', targetWord: 'jump' }
    ]
  },
  {
    id: 'gaming.character.glados',
    canonicalName: 'GLaDOS',
    displayName: 'GLaDOS',
    type: 'character',
    subtype: 'ai',
    node: 'gaming.characters',
    region: 'international',
    country: 'United States',
    familiarity: 'expansion',
    difficulty: 3,
    importance: 8,
    sentencePotential: 9,
    playabilityScore: 8,
    tags: ['portal', 'ai', 'voice'],
    facts: {
      foundation: 'GLaDOS is the artificial intelligence voice in Portal.',
      expansion: 'GLaDOS controls test chambers and speaks with dark humor.',
      discovery: 'GLaDOS became famous partly because of the Portal ending song.'
    },
    relationships: [
      { type: 'controlled', targetLabel: 'test chamber', phrase: 'controlled the chamber', targetWord: 'chamber' },
      { type: 'promised', targetLabel: 'cake', phrase: 'promised the cake', targetWord: 'cake' }
    ]
  },
  {
    id: 'gaming.mechanic.double_jump',
    canonicalName: 'Double Jump',
    displayName: 'Double Jump',
    type: 'mechanic',
    subtype: 'movement',
    node: 'gaming.characters',
    region: 'international',
    country: '',
    familiarity: 'foundation',
    difficulty: 1,
    importance: 8,
    sentencePotential: 8,
    playabilityScore: 8,
    tags: ['platforming', 'movement'],
    facts: {
      foundation: 'A double jump lets a character jump again while in the air.',
      expansion: 'Double jumps help platform games create vertical routes.',
      discovery: 'Some games use double jumps to teach timing without long tutorials.'
    },
    relationships: [
      { type: 'extended', targetLabel: 'movement', phrase: 'extended the movement', targetWord: 'movement' },
      { type: 'opened', targetLabel: 'route', phrase: 'opened the route', targetWord: 'route' }
    ]
  }
];
