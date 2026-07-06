import { buildLocalRhymes, buildNodes } from './subjects/_packTools.js';
import { SUBJECT_PACKS } from './subjects/index.js';

export const SUBJECTS = SUBJECT_PACKS.map(({ id, name }) => ({ id, name, emoji: '' }));

export const NODES = SUBJECT_PACKS.flatMap(buildNodes);

export const TEMPLATES = [
  ['places', '{person} found the {object} near the {target}.'],
  ['places', '{person} had to {action} {adverb} across the {target}.'],
  ['places', '{ref} started when {person} entered the {target}.'],
  ['places', '{person} dropped the {object} beside the {target}.'],
  ['places', 'The whole {ref} scene moved toward the {target}.'],
  ['places', '{person} tried to {action} before reaching the {target}.'],
  ['places', '{ref} made everyone look at the {target}.'],
  ['places', '{person} kept the {object} hidden at the {target}.'],
  ['people', 'The {object} was handed to the {target}.'],
  ['people', '{ref} changed when {person} followed the {target}.'],
  ['people', '{person} waited for the {target}.'],
  ['people', 'The {place} went quiet around the {target}.'],
  ['people', '{person} could not ignore the {target}.'],
  ['people', '{ref} gave the next turn to the {target}.'],
  ['people', '{adverb}, the {object} pointed back to the {target}.'],
  ['people', 'The final clue belonged to the {target}.'],
  ['objects', '{person} tried to {action} with the {target}.'],
  ['objects', '{ref} became clear after finding the {target}.'],
  ['objects', '{person} passed around the {target}.'],
  ['objects', 'The {place} was built around the {target}.'],
  ['objects', '{person} talked {adverb} about the {target}.'],
  ['objects', 'The next rhyme came from the {target}.'],
  ['objects', '{person} left a mark on the {target}.'],
  ['objects', '{person} stared at the {target}.'],
  ['actions', '{person} had no choice but to {target}.'],
  ['actions', '{person} in {ref} wanted to {target}.'],
  ['actions', 'The {object} made {person} try to {target}.'],
  ['actions', 'At the {place}, the plan was to {target}.'],
  ['actions', '{person} moved {adverb} and started to {target}.'],
  ['actions', 'The crowd shouted for {person} to {target}.'],
  ['actions', 'The round changed when {person} chose to {target}.'],
  ['actions', '{ref} made it hard to {target}.'],
  ['moods', 'The {place} suddenly felt {target}.'],
  ['moods', '{person} made the whole room feel {target}.'],
  ['moods', 'The {object} turned the moment {target}.'],
  ['moods', '{ref} became strangely {target}.'],
  ['moods', '{person} grew more {target}.'],
  ['moods', 'The next rhyme sounded {target}.'],
  ['moods', '{person} went quiet and {target}.'],
  ['moods', 'That {ref} moment landed {target}.'],
  ['adverbs', '{person} used the {object} {target}.'],
  ['adverbs', '{person} watched the room move {target}.'],
  ['adverbs', 'The {place} changed when {person} acted {target}.'],
  ['adverbs', '{ref} made the whole group react {target}.'],
  ['adverbs', 'The next line had to land {target}.'],
  ['adverbs', '{person} tried to {action} {target}.']
];

export const LOCAL = buildLocalRhymes(SUBJECT_PACKS);

export { SUBJECT_PACKS };
