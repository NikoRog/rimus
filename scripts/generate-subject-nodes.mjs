import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const root = process.cwd();
const subjectDir = path.join(root, 'src', 'content', 'subjects');
const files = ['biology', 'fashion', 'food', 'gaming', 'geography', 'gym', 'history', 'languages', 'medicine', 'movies', 'music', 'space', 'sports', 'travel'];

const configs = {
  biology: { topics: ['Cells', 'DNA / Genetics', 'Plants', 'Evolution', 'Ecosystems', 'Human Body'], scenes: ['cell lab', 'genetics bench', 'garden bed', 'fossil field', 'forest habitat', 'anatomy room'] },
  fashion: { topics: ['Runway', 'Streetwear', 'Tailoring', 'Accessories', 'Textiles', 'Trends'], scenes: ['runway show', 'street corner', 'tailor shop', 'accessory table', 'textile studio', 'trend board'] },
  food: { topics: ['Cooking', 'Baking', 'Restaurant', 'Ingredients', 'Taste', 'Street Food'], scenes: ['kitchen station', 'bakery counter', 'restaurant table', 'prep bowl', 'tasting menu', 'food stall'] },
  gaming: { topics: ['Combat', 'Puzzle', 'Multiplayer', 'RPG', 'Platforming', 'Survival'], scenes: ['boss arena', 'puzzle room', 'online lobby', 'village quest', 'platform level', 'safe camp'] },
  geography: { topics: ['Mountains', 'Rivers', 'Cities', 'Climate', 'Maps', 'Countries'], scenes: ['mountain pass', 'river valley', 'city square', 'weather station', 'map table', 'border crossing'] },
  gym: { topics: ['Strength', 'Cardio', 'Machines', 'Muscles', 'Recovery', 'Workout'], scenes: ['weight room', 'running track', 'machine area', 'muscle chart', 'recovery mat', 'training plan'] },
  history: { topics: ['Ancient Empires', 'Battles', 'Kings / Leaders', 'Inventions', 'Revolutions', 'Culture'], scenes: ['ancient city', 'battlefield', 'royal court', 'workshop', 'public square', 'museum hall'] },
  languages: { topics: ['Grammar', 'Vocabulary', 'Translation', 'Pronunciation', 'Conversation', 'Writing'], scenes: ['grammar lesson', 'word list', 'translation desk', 'speaking class', 'conversation table', 'writing page'] },
  medicine: { topics: ['Anatomy', 'Diagnosis', 'Treatment', 'Hospital', 'Symptoms', 'Recovery'], scenes: ['anatomy chart', 'exam room', 'treatment plan', 'hospital ward', 'symptom note', 'recovery bed'] },
  movies: { topics: ['Filming', 'Acting', 'Comedy', 'Horror', 'Animation', 'Cinema'], scenes: ['film set', 'rehearsal room', 'comedy scene', 'dark hallway', 'animation studio', 'cinema screen'] },
  music: { topics: ['Rhythm', 'Instruments', 'Concert', 'Studio', 'Singing', 'Composition'], scenes: ['drum groove', 'instrument room', 'concert stage', 'recording booth', 'vocal take', 'composition desk'] },
  space: { topics: ['Planets', 'Stars', 'Rockets', 'Astronauts', 'Telescopes', 'Galaxies'], scenes: ['planet orbit', 'star field', 'launch pad', 'space station', 'observatory dome', 'deep galaxy'] },
  sports: { topics: ['Football', 'Basketball', 'Tennis', 'Boxing', 'Racing', 'Training'], scenes: ['football pitch', 'basketball court', 'tennis court', 'boxing ring', 'race track', 'training field'] },
  travel: { topics: ['Airport', 'Hotels', 'Road Trips', 'Beaches', 'Cities', 'Maps'], scenes: ['airport gate', 'hotel lobby', 'open road', 'beach path', 'city street', 'route map'] }
};

const roleVocab = {
  biology: {
    places: ['lab', 'cell', 'leaf', 'forest', 'ocean', 'habitat', 'reef', 'soil', 'garden', 'body', 'canopy', 'wetland'],
    people: ['biologist', 'scientist', 'student', 'teacher', 'researcher', 'farmer', 'diver', 'doctor', 'zoologist', 'ecologist', 'geneticist', 'botanist'],
    objects: ['cell', 'DNA', 'gene', 'root', 'flower', 'species', 'microbe', 'trait', 'coral', 'organ', 'nucleus', 'membrane'],
    actions: ['divide', 'grow', 'copy', 'mutate', 'adapt', 'bloom', 'swim', 'digest', 'sense', 'survive', 'evolve', 'decode'],
    moods: ['tiny', 'alive', 'wild', 'green', 'complex', 'ancient', 'fragile', 'bright', 'hidden', 'natural', 'diverse', 'balanced'],
    adverbs: ['slowly', 'naturally', 'carefully', 'quietly', 'quickly', 'deeply', 'silently', 'constantly', 'closely', 'brightly']
  },
  fashion: {
    places: ['runway', 'studio', 'backstage', 'boutique', 'street', 'store', 'mirror', 'atelier', 'closet', 'showroom', 'catwalk', 'fitting'],
    people: ['model', 'designer', 'stylist', 'tailor', 'critic', 'photographer', 'collector', 'skater', 'athlete', 'buyer', 'editor', 'influencer'],
    objects: ['jacket', 'dress', 'sneaker', 'fabric', 'lace', 'sole', 'heel', 'camera', 'pattern', 'scarf', 'button', 'silhouette'],
    actions: ['pose', 'walk', 'tailor', 'style', 'collect', 'stitch', 'drape', 'sketch', 'match', 'layer', 'fit', 'hem'],
    moods: ['glamorous', 'fresh', 'bold', 'sleek', 'casual', 'elegant', 'dramatic', 'confident', 'minimal', 'vintage', 'sharp', 'clean'],
    adverbs: ['smoothly', 'boldly', 'carefully', 'neatly', 'quietly', 'brightly', 'loosely', 'sharply', 'lightly', 'gracefully']
  },
  food: {
    places: ['kitchen', 'oven', 'table', 'bowl', 'counter', 'restaurant', 'pantry', 'market', 'stall', 'bakery', 'grill', 'plate'],
    people: ['chef', 'cook', 'server', 'guest', 'baker', 'friend', 'family', 'farmer', 'vendor', 'critic', 'barista', 'butcher'],
    objects: ['pizza', 'cheese', 'slice', 'soup', 'spoon', 'broth', 'bread', 'sauce', 'dough', 'herb', 'noodle', 'pepper'],
    actions: ['bake', 'share', 'eat', 'stir', 'boil', 'sip', 'chop', 'taste', 'serve', 'season', 'grill', 'knead'],
    moods: ['warm', 'spicy', 'sweet', 'fresh', 'crispy', 'savory', 'tender', 'comforting', 'bright', 'rich', 'smoky', 'creamy'],
    adverbs: ['slowly', 'warmly', 'carefully', 'quickly', 'gently', 'evenly', 'lightly', 'crisply', 'freshly', 'boldly']
  },
  gaming: {
    places: ['arena', 'cave', 'village', 'mine', 'screen', 'grid', 'arcade', 'lobby', 'dungeon', 'level', 'checkpoint', 'server'],
    people: ['player', 'builder', 'creeper', 'rival', 'champion', 'boss', 'teammate', 'mage', 'healer', 'speedrunner', 'raider', 'npc'],
    objects: ['block', 'pickaxe', 'diamond', 'line', 'shape', 'sword', 'shield', 'quest', 'loot', 'portal', 'controller', 'treasure'],
    actions: ['craft', 'mine', 'build', 'rotate', 'drop', 'clear', 'dodge', 'attack', 'unlock', 'respawn', 'level', 'survive'],
    moods: ['focused', 'dangerous', 'epic', 'tense', 'chaotic', 'competitive', 'hidden', 'legendary', 'fast', 'strategic', 'wild', 'clutch'],
    adverbs: ['quickly', 'boldly', 'silently', 'carefully', 'wildly', 'smoothly', 'slowly', 'cleverly', 'sharply', 'perfectly']
  },
  geography: {
    places: ['mountain', 'valley', 'river', 'bank', 'city', 'country', 'border', 'island', 'desert', 'coast', 'village', 'cliff'],
    people: ['climber', 'guide', 'hiker', 'traveler', 'fisher', 'farmer', 'cartographer', 'pilot', 'surveyor', 'resident', 'explorer', 'geographer'],
    objects: ['map', 'rope', 'snow', 'water', 'bridge', 'boat', 'compass', 'border', 'climate', 'atlas', 'globe', 'landmark'],
    actions: ['climb', 'cross', 'descend', 'flow', 'carry', 'erupt', 'map', 'measure', 'settle', 'trace', 'navigate', 'survey'],
    moods: ['steep', 'calm', 'dry', 'remote', 'wide', 'coastal', 'urban', 'rural', 'cold', 'tropical', 'windy', 'vast'],
    adverbs: ['slowly', 'steadily', 'northward', 'southward', 'carefully', 'quietly', 'widely', 'deeply', 'inland', 'uphill']
  },
  gym: {
    places: ['gym', 'rack', 'floor', 'mat', 'studio', 'ring', 'track', 'platform', 'bench', 'pool', 'machine', 'locker'],
    people: ['coach', 'lifter', 'trainer', 'athlete', 'beginner', 'boxer', 'runner', 'spotter', 'swimmer', 'cyclist', 'rookie', 'partner'],
    objects: ['barbell', 'weight', 'knee', 'timer', 'elbow', 'core', 'glove', 'rope', 'bell', 'dumbbell', 'treadmill', 'band'],
    actions: ['squat', 'brace', 'push', 'hold', 'shake', 'breathe', 'jab', 'spar', 'stretch', 'curl', 'row', 'recover'],
    moods: ['focused', 'strong', 'tired', 'steady', 'sore', 'explosive', 'disciplined', 'calm', 'sharp', 'driven', 'balanced', 'ready'],
    adverbs: ['slowly', 'steadily', 'deeply', 'quickly', 'carefully', 'smoothly', 'lightly', 'powerfully', 'strictly', 'evenly']
  },
  history: {
    places: ['empire', 'road', 'sea', 'village', 'ship', 'castle', 'court', 'border', 'museum', 'forum', 'battlefield'],
    people: ['emperor', 'soldier', 'senator', 'raider', 'king', 'sailor', 'queen', 'inventor', 'rebel', 'scribe', 'general', 'merchant'],
    objects: ['sword', 'law', 'coin', 'axe', 'shield', 'longship', 'treaty', 'crown', 'scroll', 'banner', 'tablet', 'artifact'],
    actions: ['march', 'rule', 'build', 'sail', 'raid', 'trade', 'defend', 'invent', 'revolt', 'record', 'sign', 'conquer'],
    moods: ['ancient', 'royal', 'brave', 'tense', 'historic', 'powerful', 'forgotten', 'public', 'fierce', 'lasting', 'cultural', 'strategic'],
    adverbs: ['boldly', 'slowly', 'publicly', 'secretly', 'carefully', 'bravely', 'widely', 'quietly', 'fiercely', 'steadily']
  },
  languages: {
    places: ['class', 'page', 'school', 'street', 'screen', 'library', 'market', 'border', 'notebook', 'conversation', 'sentence'],
    people: ['student', 'teacher', 'speaker', 'translator', 'poet', 'traveler', 'listener', 'writer', 'reader', 'interpreter', 'learner', 'editor'],
    objects: ['word', 'accent', 'phrase', 'meaning', 'sentence', 'letter', 'grammar', 'vowel', 'pronunciation', 'dictionary', 'paragraph', 'verb'],
    actions: ['speak', 'learn', 'translate', 'explain', 'compare', 'listen', 'repeat', 'write', 'read', 'pronounce', 'spell', 'define'],
    moods: ['clear', 'fluent', 'formal', 'casual', 'confusing', 'polite', 'poetic', 'direct', 'local', 'precise', 'expressive', 'natural'],
    adverbs: ['clearly', 'slowly', 'fluently', 'carefully', 'politely', 'loudly', 'quietly', 'accurately', 'briefly', 'naturally']
  },
  medicine: {
    places: ['clinic', 'hospital', 'chest', 'body', 'skull', 'ward', 'pharmacy', 'lab', 'room', 'artery', 'bed', 'theater'],
    people: ['doctor', 'patient', 'nurse', 'surgeon', 'scientist', 'therapist', 'paramedic', 'pharmacist', 'specialist', 'intern', 'medic', 'caregiver'],
    objects: ['heart', 'blood', 'pulse', 'brain', 'memory', 'signal', 'bandage', 'chart', 'symptom', 'vaccine', 'stethoscope', 'medicine'],
    actions: ['pump', 'beat', 'heal', 'think', 'learn', 'remember', 'diagnose', 'treat', 'check', 'recover', 'scan', 'breathe'],
    moods: ['careful', 'calm', 'urgent', 'stable', 'healthy', 'sore', 'clinical', 'hopeful', 'tired', 'focused', 'gentle', 'serious'],
    adverbs: ['carefully', 'slowly', 'gently', 'quickly', 'steadily', 'quietly', 'clinically', 'safely', 'deeply', 'clearly']
  },
  movies: {
    places: ['cinema', 'theater', 'screen', 'stage', 'set', 'studio', 'archive', 'premiere', 'festival', 'booth', 'location'],
    people: ['actor', 'director', 'writer', 'villain', 'hero', 'critic', 'producer', 'animator', 'stuntman', 'composer', 'editor', 'operator'],
    objects: ['camera', 'script', 'trailer', 'costume', 'poster', 'frame', 'microphone', 'spotlight', 'ticket', 'soundtrack', 'clapper', 'monster'],
    actions: ['film', 'edit', 'act', 'direct', 'rehearse', 'project', 'animate', 'record', 'perform', 'premiere', 'frame', 'cut'],
    moods: ['dramatic', 'funny', 'tense', 'scary', 'epic', 'silent', 'emotional', 'mysterious', 'awkward', 'heroic', 'cinematic', 'dark'],
    adverbs: ['slowly', 'boldly', 'quietly', 'quickly', 'clearly', 'wildly', 'smoothly', 'loudly', 'carefully', 'suddenly']
  },
  music: {
    places: ['stage', 'studio', 'concert', 'club', 'booth', 'room', 'venue', 'hall', 'festival', 'choir', 'garage'],
    people: ['guitarist', 'singer', 'band', 'drummer', 'crowd', 'producer', 'rapper', 'dj', 'composer', 'pianist', 'bassist', 'violinist'],
    objects: ['guitar', 'string', 'chord', 'drum', 'beat', 'stick', 'mic', 'track', 'speaker', 'melody', 'bass', 'keyboard'],
    actions: ['play', 'strum', 'tune', 'hit', 'tap', 'groove', 'record', 'mix', 'flow', 'drop', 'sing', 'compose'],
    moods: ['rhythmic', 'loud', 'soft', 'melodic', 'soulful', 'electric', 'smooth', 'heavy', 'bright', 'emotional', 'live', 'catchy'],
    adverbs: ['loudly', 'softly', 'smoothly', 'quickly', 'slowly', 'brightly', 'deeply', 'clearly', 'wildly', 'evenly']
  },
  space: {
    places: ['moon', 'sky', 'orbit', 'planet', 'base', 'station', 'crater', 'galaxy', 'observatory', 'hangar', 'launchpad'],
    people: ['astronaut', 'scientist', 'pilot', 'robot', 'engineer', 'crew', 'commander', 'researcher', 'navigator', 'technician', 'observer', 'commander'],
    objects: ['rocket', 'star', 'dust', 'rover', 'probe', 'helmet', 'telescope', 'capsule', 'module', 'comet', 'satellite', 'planet'],
    actions: ['orbit', 'land', 'shine', 'explore', 'launch', 'float', 'signal', 'dock', 'observe', 'drift', 'ignite', 'measure'],
    moods: ['distant', 'silent', 'cosmic', 'bright', 'lonely', 'dangerous', 'weightless', 'vast', 'unknown', 'stellar', 'cold', 'hopeful'],
    adverbs: ['slowly', 'silently', 'carefully', 'boldly', 'brightly', 'steadily', 'deeply', 'weightlessly', 'safely', 'remotely']
  },
  sports: {
    places: ['field', 'stadium', 'goal', 'court', 'arena', 'bench', 'ring', 'track', 'pool', 'pitch', 'lane', 'gym'],
    people: ['striker', 'keeper', 'coach', 'guard', 'center', 'rookie', 'referee', 'boxer', 'runner', 'captain', 'racer', 'teammate'],
    objects: ['ball', 'net', 'whistle', 'hoop', 'rim', 'glove', 'helmet', 'trophy', 'jersey', 'racket', 'boot', 'timer'],
    actions: ['kick', 'score', 'defend', 'shoot', 'dribble', 'dunk', 'punch', 'race', 'serve', 'pass', 'block', 'train'],
    moods: ['fast', 'clutch', 'strong', 'focused', 'competitive', 'tense', 'explosive', 'fair', 'strategic', 'tired', 'victorious', 'sharp'],
    adverbs: ['quickly', 'fairly', 'boldly', 'smoothly', 'sharply', 'steadily', 'powerfully', 'carefully', 'wildly', 'cleanly']
  },
  travel: {
    places: ['airport', 'gate', 'terminal', 'hotel', 'lobby', 'room', 'beach', 'city', 'road', 'station', 'harbor', 'route'],
    people: ['pilot', 'traveler', 'guard', 'guest', 'tourist', 'receptionist', 'guide', 'driver', 'backpacker', 'local', 'agent', 'passenger'],
    objects: ['passport', 'ticket', 'luggage', 'key', 'bed', 'towel', 'map', 'camera', 'suitcase', 'train', 'plane', 'itinerary'],
    actions: ['fly', 'wait', 'board', 'rest', 'check', 'sleep', 'pack', 'arrive', 'explore', 'book', 'navigate', 'depart'],
    moods: ['excited', 'tired', 'lost', 'relaxed', 'sunny', 'busy', 'remote', 'safe', 'curious', 'peaceful', 'crowded', 'scenic'],
    adverbs: ['quickly', 'slowly', 'carefully', 'peacefully', 'brightly', 'safely', 'quietly', 'eagerly', 'locally', 'smoothly']
  }
};

const templateMap = {
  biology: { places: ['The organism adapted inside the {target}.', 'The researcher compared samples from the {target}.'], people: ['The microscope result surprised the {target}.', 'The lab note was checked by the {target}.'], objects: ['The microscope revealed the {target}.', 'The strand copied the {target}.'], actions: ['The cell started to {target}.', 'The organism needed to {target}.'], moods: ['The living sample looked {target}.', 'The habitat became {target}.'], adverbs: ['The scientist observed the sample {target}.', 'The organism changed {target}.'] },
  fashion: { places: ['The model walked across the {target}.', 'The designer photographed the look at the {target}.'], people: ['The jacket was adjusted by the {target}.', 'The runway lights followed the {target}.'], objects: ['The designer adjusted the {target}.', 'The cut changed the {target}.'], actions: ['The stylist chose to {target}.', 'The model had to {target}.'], moods: ['The whole outfit looked {target}.', 'The fabric choice felt {target}.'], adverbs: ['The model crossed the runway {target}.', 'The stylist pinned the fabric {target}.'] },
  food: { places: ['The chef served dinner at the {target}.', 'The aroma filled the {target}.'], people: ['The tasting menu was judged by the {target}.', 'The hot plate was handed to the {target}.'], objects: ['The chef prepared the {target}.', 'The seasoning covered the {target}.'], actions: ['The cook had to {target}.', 'The kitchen team started to {target}.'], moods: ['The dish tasted {target}.', 'The table suddenly smelled {target}.'], adverbs: ['The chef sliced the herbs {target}.', 'The server carried the plate {target}.'] },
  gaming: { places: ['The quest started in the {target}.', 'The player respawned near the {target}.'], people: ['The final loot went to the {target}.', 'The squad waited for the {target}.'], objects: ['The level ended with the {target}.', 'The player dodged toward the {target}.'], actions: ['The player had to {target}.', 'The party chose to {target}.'], moods: ['The boss fight felt {target}.', 'The final level looked {target}.'], adverbs: ['The player dodged {target}.', 'The squad pushed the objective {target}.'] },
  geography: { places: ['The route crossed the {target}.', 'The map marked the {target}.'], people: ['The border report was checked by the {target}.', 'The route was explained to the {target}.'], objects: ['The survey showed the {target}.', 'The survey marked the {target}.'], actions: ['The explorer had to {target}.', 'The river started to {target}.'], moods: ['The mountain air felt {target}.', 'The climate turned {target}.'], adverbs: ['The guide crossed the valley {target}.', 'The map shifted the route {target}.'] },
  gym: { places: ['The trainer corrected form near the {target}.', 'The workout ended at the {target}.'], people: ['The timer was checked by the {target}.', 'The squat was corrected by the {target}.'], objects: ['The lifter used the {target}.', 'The biceps contracted during the {target}.'], actions: ['The athlete had to {target}.', 'The trainer told the group to {target}.'], moods: ['The final set felt {target}.', 'The recovery session stayed {target}.'], adverbs: ['The runner moved {target}.', 'The lifter lowered the weight {target}.'] },
  history: { places: ['The record pointed to the {target}.', 'The army defended the {target}.'], people: ['The treaty was signed by the {target}.', 'The chronicle named the {target}.'], objects: ['The museum displayed the {target}.', 'The inventor tested the {target}.'], actions: ['The empire had to {target}.', 'The rebel crowd started to {target}.'], moods: ['The old record sounded {target}.', 'The battle report felt {target}.'], adverbs: ['The historian read the tablet {target}.', 'The army advanced {target}.'] },
  languages: { places: ['The phrase was practiced in the {target}.', 'The teacher wrote examples on the {target}.'], people: ['The sentence was repeated by the {target}.', 'The meaning was explained to the {target}.'], objects: ['The teacher explained the {target}.', 'The final line ended with the {target}.'], actions: ['The speaker had to {target}.', 'The student tried to {target}.'], moods: ['The phrase sounded {target}.', 'The accent became {target}.'], adverbs: ['The speaker repeated the phrase {target}.', 'The translator checked the sentence {target}.'] },
  medicine: { places: ['The patient waited in the {target}.', 'The nurse moved supplies through the {target}.'], people: ['The chart was reviewed by the {target}.', 'The bandage was prepared for the {target}.'], objects: ['The doctor checked the {target}.', 'The nurse prepared the {target}.'], actions: ['The doctor needed to {target}.', 'The patient tried to {target}.'], moods: ['The recovery plan felt {target}.', 'The exam room stayed {target}.'], adverbs: ['The nurse cleaned the wound {target}.', 'The patient breathed {target}.'] },
  movies: { places: ['The director framed the scene inside the {target}.', 'The audience gathered at the {target}.'], people: ['The camera followed the {target}.', 'The final line was delivered by the {target}.'], objects: ['The director framed the {target}.', 'The preview revealed the {target}.'], actions: ['The actor had to {target}.', 'The editor chose to {target}.'], moods: ['The final scene felt {target}.', 'The trailer suddenly became {target}.'], adverbs: ['The actor delivered the line {target}.', 'The editor cut the scene {target}.'] },
  music: { places: ['The band rehearsed in the {target}.', 'The melody echoed through the {target}.'], people: ['The melody was followed by the {target}.', 'The audience listened to the {target}.'], objects: ['The producer adjusted the {target}.', 'The drummer kept the {target}.'], actions: ['The singer had to {target}.', 'The band started to {target}.'], moods: ['The chorus sounded {target}.', 'The final note felt {target}.'], adverbs: ['The drummer played {target}.', 'The singer entered the verse {target}.'] },
  space: { places: ['The mission reached the {target}.', 'The telescope pointed toward the {target}.'], people: ['The capsule was entered by the {target}.', 'The mission report named the {target}.'], objects: ['The observatory captured the {target}.', 'The mission reached the {target}.'], actions: ['The astronaut had to {target}.', 'The rocket started to {target}.'], moods: ['The planet looked {target}.', 'The mission became {target}.'], adverbs: ['The probe drifted {target}.', 'The astronaut moved {target}.'] },
  sports: { places: ['The athlete competed at the {target}.', 'The referee watched play from the {target}.'], people: ['The tactic was changed by the {target}.', 'The ball was passed to the {target}.'], objects: ['The referee watched the {target}.', 'The player chased the {target}.'], actions: ['The athlete had to {target}.', 'The coach told the team to {target}.'], moods: ['The final match felt {target}.', 'The crowd became {target}.'], adverbs: ['The runner finished {target}.', 'The boxer stepped {target}.'] },
  travel: { places: ['The traveler reached the {target}.', 'The guide pointed toward the {target}.'], people: ['The route was explained to the {target}.', 'The passport was checked by the {target}.'], objects: ['The traveler packed the {target}.', 'The guide unfolded the {target}.'], actions: ['The traveler had to {target}.', 'The group planned to {target}.'], moods: ['The beach morning felt {target}.', 'The city walk became {target}.'], adverbs: ['The traveler crossed the terminal {target}.', 'The guide pointed to the route {target}.'] }
};

const roleLabels = { places: 'place or setting', people: 'person or role', objects: 'term or object', actions: 'action', moods: 'description or mood', adverbs: 'way something happens' };
const roleArticle = { actions: 'an', adverbs: 'a', places: 'a', people: 'a', objects: 'a', moods: 'a' };
const clean = (s) => String(s || '').toLowerCase().replace(/[^a-z]/g, '');
const uniq = (arr) => [...new Set((arr || []).filter(Boolean))];

function chunk(arr, index) {
  const a = uniq(arr);
  const size = Math.min(a.length, Math.max(5, Math.ceil(a.length / 2)));
  return Array.from({ length: size }, (_, offset) => a[(index * 2 + offset) % a.length]);
}

function definitionFor(pack, role, word, topic) {
  const old = pack.definitions?.[clean(word)];
  if (old && !/used in .* context/i.test(old)) return old;
  return `${word} is ${roleArticle[role] || 'a'} ${roleLabels[role]} connected to ${pack.name}, especially ${topic}.`;
}

function nodeTemplates(subject, topic, nodeIndex) {
  return Object.entries(templateMap[subject]).flatMap(([role, list]) => list.map((text, i) => ({
    id: `${subject}_${role}_${nodeIndex}_${i}`,
    role,
    text,
    tags: [role, topic.toLowerCase().replace(/[^a-z0-9]+/g, '_')]
  })));
}

function makeNode(pack, cfg, index) {
  const topic = cfg.topics[index];
  const source = roleVocab[pack.id];
  const roles = {
    places: chunk(source.places, index),
    people: chunk(source.people, index),
    objects: chunk(source.objects, index),
    actions: chunk(source.actions, index),
    moods: chunk(source.moods, index),
    adverbs: chunk(source.adverbs, index)
  };
  const definitions = {};
  for (const [role, words] of Object.entries(roles)) {
    for (const word of words) definitions[clean(word)] = definitionFor(pack, role, word, topic);
  }
  return {
    id: `${pack.id}_${clean(topic)}`,
    topic,
    scene: cfg.scenes[index],
    people: roles.people,
    places: roles.places,
    objects: roles.objects,
    actions: roles.actions,
    moods: roles.moods,
    adverbs: roles.adverbs,
    facts: [
      `${topic} belongs to ${pack.name}: ${pack.theme}.`,
      `${cfg.scenes[index]} gives ${pack.name} prompts a specific context instead of a generic sentence.`
    ],
    definitions,
    templates: nodeTemplates(pack.id, topic, index)
  };
}

for (const id of files) {
  const mod = await import(`${pathToFileURL(path.join(subjectDir, `${id}.js`)).href}?t=${Date.now()}`);
  const pack = mod.default;
  const cfg = configs[id];
  const nodes = cfg.topics.map((_, index) => makeNode(pack, cfg, index));
  const body = JSON.stringify({ id: pack.id, name: pack.name, theme: pack.theme, nodes }, null, 2)
    .replace(/"([a-zA-Z_$][\w$]*)":/g, '$1:');
  fs.writeFileSync(path.join(subjectDir, `${id}.js`), `import { defineSubjectPack } from './_packTools.js';\n\nexport default defineSubjectPack(${body});\n`);
}




