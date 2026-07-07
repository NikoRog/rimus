import { printResult, stabilityReport, validateContent, validatePacks, smokePrompts } from './lib/stability-checks.mjs';

const packs = await validatePacks();
const content = validateContent();
const prompts = smokePrompts(100);
const performance = stabilityReport();

printResult('Stability Summary', {
  ok: packs.ok && content.ok && prompts.ok && performance.ok,
  packs: { ok: packs.ok, errors: packs.errors.length, warnings: packs.warnings.length, totals: packs.totals },
  content: { ok: content.ok, errors: content.errors.length, warnings: content.warnings.length, subjects: content.subjects, nodes: content.nodes, local: content.local },
  prompts: { ok: prompts.ok, errors: prompts.errors.length, subjects: prompts.results.length },
  performance
});
