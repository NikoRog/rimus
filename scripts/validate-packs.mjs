import { printResult, validatePacks } from './lib/stability-checks.mjs';

printResult('Pack01 Validation', await validatePacks());
