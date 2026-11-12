const promptInput = document.getElementById('prompt-score-input');
const promptOutput = document.getElementById('prompt-score');
const promptMissing = document.getElementById('prompt-missing');
const promptFeedback = document.getElementById('prompt-feedback');
const promptRules = [
  ['A clear action', /\b(write|create|summarize|explain|draft|compare|generate|list|analyze)\b/i, 28],
  ['Context or audience', /\b(about|for|audience|context|team|readers)\b/i, 31],
  ['Output format and length', /\b(format|bullets?|table|paragraphs?|\d+\s*(words?|lines?))\b/i, 16],
  ['Role or expertise', /\b(act as|you are|as an?\s+(expert|editor|teacher|analyst))\b/i, 13],
  ['Constraints and tone', /\b(avoid|include|tone|must|do not|constraints?)\b/i, 12],
];
function scorePrompt() {
  const value = promptInput.value.trim();
  const missing = promptRules.filter(([, pattern]) => !pattern.test(value));
  const score = 100 - missing.reduce((sum, [, , weight]) => sum + weight, 0);
  promptOutput.value = (score >= 80 ? 'Strong' : score >= 50 ? 'Decent' : 'Needs detail') + ': ' + score + ' out of 100';
  promptFeedback.textContent = missing.length ? 'Still missing:' : 'All five rubric items are present.';
  promptMissing.replaceChildren(...missing.map(([label]) => {
    const row = document.createElement('li');
    row.textContent = label;
    return row;
  }));
}
promptInput.addEventListener('input', scorePrompt);
scorePrompt();
