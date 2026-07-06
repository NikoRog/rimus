export function resolveReferenceHelp(prompt) {
  const d = prompt?.referenceDebug;
  if (!d) return prompt?.def || '';
  const target = d.finalWord || prompt.finalWord || prompt.target;
  const entityLine = d.canonicalName && d.displayName && d.canonicalName !== d.displayName
    ? `${d.displayName} refers to ${d.canonicalName}.`
    : `${d.displayName || d.canonicalName || 'This'} is the selected reference.`;
  const relationship = d.relationshipPhrase ? `Connection: ${d.displayName} ${d.relationshipPhrase}.` : '';
  const fact = d.fact ? `Reference: ${d.fact}` : '';
  return `${target}: ${d.targetNote || 'This is the final word selected from the sentence.'} ${entityLine} ${relationship} ${fact}`.trim();
}
