import { printResult, smokePrompts } from './lib/stability-checks.mjs';

printResult('Prompt Smoke Test', smokePrompts(100));
