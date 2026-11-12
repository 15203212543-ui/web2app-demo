(() => {
  const get = (id) => document.getElementById('opt-' + id);
  const input = get('input'), scoreButton = get('score'), rewrite = get('rewrite');
  const rules = [
    ['Clear task', 20, /\b(write|create|summarize|draft|compare|generate|list|explain|analyze)\b/i, 'State the action you want performed.'],
    ['Context', 15, /\b(about|background|context|based on|using|because)\b/i, 'Add background or source material.'],
    ['Audience', 10, /\b(for|audience|team|readers|customers|manager)\b/i, 'Name the intended audience.'],
    ['Output format and length', 15, /\b(table|bullets?|paragraphs?|format|\d+\s*(words?|lines?))\b/i, 'Specify the format and length.'],
    ['Role or expertise', 8, /\b(act as|you are|as an? (editor|expert|teacher|analyst))\b/i, 'Add a relevant role if helpful.', true],
    ['Constraints and tone', 10, /\b(avoid|tone|must|do not|constraints?|plain english|no jargon)\b/i, 'Name one constraint or tone.'],
    ['Example or reference', 8, /\b(example|sample|reference|such as)\b/i, 'Add a sample if helpful.', true],
    ['Definition of done', 8, /\b(success|done when|ensure|verify|criteria|acceptance)\b/i, 'Say how to tell that the output is ready.'],
    ['Specific wording', 6, /\b(linkedin|excel|email|report|presentation|\d+)\b/i, 'Replace a vague reference with a specific one.'],
  ];
  function state() {
    const hasText = !!input.value.trim();
    scoreButton.disabled = !hasText;
    get('clear').hidden = !input.value;
  }
  function score() {
    const value = input.value.trim();
    if (!value) return;
    const checks = rules.map(([label, weight, pattern, tip, optional]) => ({label, weight, tip, state:pattern.test(value) ? 'Pass' : optional ? 'Partial' : 'Missing'}));
    const total = checks.reduce((sum, c) => sum + c.weight * (c.state === 'Pass' ? 1 : c.state === 'Partial' ? .5 : 0), 0);
    get('total').value = (total >= 80 ? 'Strong' : total >= 50 ? 'Decent' : 'Needs detail') + ': ' + total + ' out of 100';
    get('verdict').textContent = total >= 80 ? 'The prompt gives the model clear instructions.' : total >= 50 ? 'Usable, but expect one round of follow-ups.' : 'Add more detail before sending.';
    const missing = checks.filter(c => c.state === 'Missing').sort((a, b) => b.weight - a.weight);
    get('learn-copy').textContent = missing.length ? 'Practice next: ' + missing.slice(0, 3).map(c => c.label).join(', ') + '.' : 'All required checks passed. Try refining the optional details.';
    get('learn-score').textContent = 'Your result: ' + total + ' out of 100';
    get('learn-score').hidden = false;
    get('count').textContent = value.split(/\s+/).length + ' words. ' + checks.filter(c => c.state === 'Pass').length + ' of 9 checks passed.';
    get('checks').replaceChildren(...checks.map(c => {
      const row = document.createElement('li');
      const label = document.createElement('strong');
      label.textContent = c.label;
      const badge = document.createElement('span');
      badge.className = 'opt-badge';
      badge.dataset.status = c.state.toLowerCase();
      badge.textContent = c.state;
      row.append(label, badge);
      if (c.state !== 'Pass') {
        const tip = document.createElement('p');
        tip.textContent = 'Fix: ' + c.tip;
        row.append(tip);
      }
      return row;
    }));
    rewrite.value = [value, ...checks.filter(c => c.state !== 'Pass').map(c => c.label + ': [' + c.tip + ']')].join('\n\n');
    get('copy-status').textContent = '';
    get('empty').hidden = true;
    get('result').hidden = false;
  }
  input.addEventListener('input', state);
  scoreButton.addEventListener('click', score);
  get('example').addEventListener('click', () => {
    input.value = 'Write a LinkedIn post about how our team uses AI. Make it engaging and not too long, and mention that we saved time.';
    state();
    score();
  });
  get('clear').addEventListener('click', () => {
    input.value = '';
    rewrite.value = '';
    get('learn-copy').textContent = 'Score a prompt above to see which skills to practice next.';
    get('learn-score').hidden = true;
    get('result').hidden = true;
    get('empty').hidden = false;
    state();
    input.focus();
  });
  get('copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(rewrite.value);
      get('copy-status').textContent = 'Copied.';
    } catch {
      rewrite.focus(); rewrite.select();
      get('copy-status').textContent = 'Text selected. Use your browser’s copy command.';
    }
  });
  state();
})();
