import { SUBJECT_PACKS } from '../src/content/subjects/index.js';
import { buildNodes, cleanTerm } from '../src/content/subjects/_packTools.js';
function pick(words, target) { return (words || []).find(w => cleanTerm(w) !== cleanTerm(target)) || words?.[0] || 'thing'; }
function fill(tpl, node, target) { return tpl.replaceAll('{ref}', node.r).replaceAll('{target}', target).replaceAll('{person}', pick(node.roles.people, target)).replaceAll('{object}', pick(node.roles.objects, target)).replaceAll('{place}', pick(node.roles.places, target)).replaceAll('{mood}', pick(node.roles.moods, target)).replaceAll('{action}', pick(node.roles.actions, target)).replaceAll('{adverb}', pick(node.roles.adverbs, target)); }
function finalWord(s) { const m = String(s).trim().match(/[A-Za-z]+(?=[^A-Za-z]*$)/); return m ? cleanTerm(m[0]) : ''; }
function countTarget(s, target) { const t = cleanTerm(target); return (String(s).match(/[A-Za-z]+/g) || []).filter(w => cleanTerm(w) === t).length; }
function valid(s, target) { return finalWord(s) === cleanTerm(target) && countTarget(s, target) === 1; }
const rolesWanted = ['objects','actions','moods','people','places'];
for (const pack of SUBJECT_PACKS) {
  const nodes = buildNodes(pack);
  const prompts = [];
  let rejected = 0;
  for (const node of nodes) for (const role of Object.keys(node.roles)) for (const tpl of (node.templates || []).filter(t => t.role === role)) for (const target of node.roles[role] || []) {
    const sentence = fill(tpl.text, node, target);
    if (valid(sentence, target)) prompts.push({ sentence, target, role, node: node.r }); else rejected++;
  }
  const samples = [];
  for (const role of rolesWanted) {
    const p = prompts.find(x => x.role === role && !samples.some(s => s.node === x.node));
    if (p) samples.push(p);
  }
  console.log(`${pack.name}: generated ${prompts.length}, rejected ${rejected}`);
  for (const p of samples.slice(0,5)) console.log(`- ${p.sentence} (${p.node} / ${p.target})`);
}
