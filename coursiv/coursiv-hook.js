(() => {
 const el = id => document.getElementById('hook-' + id);
 const form = el('form'), results = el('results'), status = el('status');
 const patterns = {
  C:['Curiosity gap',[
   ['What most advice gets wrong about {topic}','Implies the reader is working from stale information.'],
   ['{topic}: the feature hiding in plain sight','Promises value the reader already owns.'],
   ['{topic}: start, middle, and the part people skip','Promises the whole arc plus the neglected piece.'],
   ['One change to {topic}. Result: {outcome}.','Shows the payoff while leaving the method for the post.']]],
  H:['How-to',[
   ['Start here with {topic}: one task, one result.','Removes the blank-page problem.'],
   ['For {audience}: one thing to try with {topic} this week','One action, one reader, one week.'],
   ['Save this for the next conversation about {topic}.','Asks for the save, the strongest signal on most feeds.'],
   ['For {audience}: a routine for {topic}. Timeframe: {timeframe}.','Time-boxed and audience-specific.'],
   ['A short guide to {topic}. Goal: {outcome}.','Names the outcome up front.']]],
  K:['Contrarian',[
   ['Stop starting with {topic}. Start here instead.','Interrupts a habit and promises a replacement.'],
   ['The problem is not {topic}. It is everything that comes before.','Flags a belief to be overturned.'],
   ['Before paying for anything else: {topic}, used properly.','Saves the reader money, which earns the click.'],
   ['Hot take on {topic}: most tutorials teach the slow way.','Positions the post against the crowd of tutorials.'],
   ['{topic} is overrated. What comes after it is underrated.','Challenges an assumption.'],
   ['Not another list about {topic}. A workflow, start to finish.','Promises a usable process.']]],
  N:['Numbers and lists',[
   ['{topic}: the {number}-part lesson I learned the slow way','Regret framing turns a list into a lesson.'],
   ['{topic}: the {number}-minute setup worth doing once','Small time cost, lasting payoff.'],
   ['{topic}: the {number}-sentence explanation','Promises brevity with a number attached.'],
   ['The {number}-prompt starter kit for {topic}','A kit sounds complete and ready to use.'],
   ['{topic}: the {number}-step version','Sets a clear expectation.']]],
  P:['Proof',[
   ['Real examples of {topic}, with one goal: {outcome}','Promises evidence, not opinion.'],
   ['Side by side: my work before and after {topic}','Contrast is evidence the reader can judge.'],
   ['{topic} on real tasks. Timeframe: {timeframe}. Result: {outcome}.','Makes the test conditions clear.'],
   ['Subject: {topic}. Timing: {timeframe}. The data is in.','Promises a report on what happened.']]],
  M:['Mistake',[
   ['The first thing to fix with {topic}: {mistake}','Names the default holding people back.'],
   ['The most common mistake with {topic}: {mistake}','Names a pain the reader already feels.'],
   ['Warning sign: {mistake}. Common cause: {topic}.','Pairs a familiar symptom with a cause.']]],
  Q:['Question',[
   ['Tried {topic} and gave up? Read this first.','Speaks to readers who have already tried it.'],
   ['Quick check: {mistake}? It could be {topic}.','Invites the reader to check their own experience.'],
   ['Is {topic} worth it? The goal: {outcome}.','Gives the question a concrete test.']]],
  S:['Story',[
   ['Before: {mistake}. After: {outcome}. The difference: {topic}.','Opens with a turning point.'],
   ['What changed after {timeframe} of trying {topic}','Makes room for a personal example.']]]
 };
 const limits = [210,280,125,70,50];
 const labels = ['LinkedIn posts','X / Threads','Instagram captions','YouTube titles','email subject lines'];
 const defaults = {topic:'your idea',outcome:'a better result',audience:'beginners',mistake:'a common mistake',number:'3',timeframe:'one week'};
 const example = {topic:'ChatGPT for email',outcome:'an empty inbox before 10am',audience:'account managers',mistake:'rewriting the same reply five times',number:'6',timeframe:'two weeks'};
 const linkedin = {C:[0,1,2],H:[0,1,2,3],K:[0,1,2,3],N:[0,1,2,3],P:[0,1],M:[0,1],Q:[0]};
 const email = {H:[0,3,4,1],P:[1,2,3],C:[3],Q:[1,2],K:[2,4,5],N:[2,3,0,4],M:[2,0],S:[0]};
 const lead = ['C','H','P','M','S','N'];
 let batch = 0;
 const make = (tag,text='') => {const node=document.createElement(tag);node.textContent=text;return node;};
 function generate() {
  const data = new FormData(form);
  const format=Number(data.get('format')), kind=Number(data.get('kind')), tone=Number(data.get('tone'));
  const vals=Object.fromEntries(Object.entries(defaults).map(([key,fallback])=>[key,data.get(key).trim()||fallback]));
  const selection=format>=3?email:linkedin;
  const order=Object.keys(selection);
  if(kind && order.includes(lead[kind])) order.unshift(...order.splice(order.indexOf(lead[kind]),1));
  else if(kind) { order.unshift(lead[kind]); order.pop(); }
  const plan=order.map((key,i)=>[key,selection[key]||selection[Object.keys(selection).at(-1)].slice(0,1),i]);
  if(plan.reduce((sum,[,ids])=>sum+ids.length,0)<20) plan[1][1]=[...new Set([...plan[1][1],...patterns[plan[1][0]][1].keys()])].slice(0,plan[1][1].length+1);
  const note=make('p',"These hooks are templates. Before posting, make sure every claim is true and you can back it up. Don't imply tests, results, numbers or personal experience you don't have.");
  note.className='hook-note';
  let remaining=20;
  results.replaceChildren(note,...plan.map(([key,ids,i])=>{
   const [title,pool]=patterns[key];
   const section=make('section'), list=make('ul');
   section.append(make('h2',title),list);
   const rotation=batch+tone+(format===1?1:format===2?2:0)+(kind&&i===0?1:0);
   for(const id of ids.slice(0,remaining)){
    remaining--;
    const [template,reason]=pool[(id+rotation)%pool.length];
    const line=template.replace(/\{(\w+)\}/g,(_,k)=>vals[k]);
    const card=make('li'), row=make('div'), meta=make('div'), content=make('p',line), copy=make('button','Copy');
    row.className='hook-card-top';meta.className='hook-card-meta';content.translate=false;copy.type='button';
    copy.setAttribute('aria-live','polite');
    copy.onclick=async()=>{try{await navigator.clipboard.writeText(line);copy.textContent='Copied';setTimeout(()=>{copy.textContent='Copy';},1500);}catch{status.textContent='Select the hook and use your browser’s copy command.';}};
    const over=line.length>limits[format], badge=make('span',line.length+' chars'+(over?' · over '+limits[format]+' guide':''));
    badge.className=over?'hook-length over':'hook-length';
    row.append(content,copy);meta.append(badge,make('span',reason));card.append(row,meta);list.append(card);
   }
   return section;
  }).filter(section=>section.querySelector('li')));
  status.textContent='';el('empty').hidden=true;el('different').hidden=false;
 }
 form.addEventListener('submit',event=>{event.preventDefault();batch=0;generate();});
 el('example').addEventListener('click',()=>{for(const [key,value] of Object.entries(example))el(key).value=value;batch=0;generate();});
 el('different').addEventListener('click',()=>{batch++;generate();});
 form.addEventListener('change',()=>{el('empty-guide').textContent='20 opening lines picked for your topic, grouped by pattern, with a note on why each works and a length check for '+labels[Number(new FormData(form).get('format'))]+'.';});
})();
