(() => {
 const el=id=>document.getElementById('job-'+id);
 const roles=[
  ['Accountant','bookkeeper finance',[
   ['Preparing standard financial statements and schedules',2,'Generated from ledger data.'],
   ['Drafting tax workings and standard returns',2,'AI drafts, the accountant reviews and signs.'],
   ['Researching tax and reporting rules for a case',1,'AI finds and summarises, the accountant applies judgement.'],
   ['Reviewing client data for errors and risks',1,'AI surfaces patterns, the accountant decides.'],
   ['Advising clients, signing off and taking professional responsibility',0,'Licensed judgement and liability.']
  ],['Claude and ChatGPT for finance analysis','Excel automation with AI','Client advisory']],
  ['Software developer','programmer engineer coder',[
   ['Writing boilerplate, tests and routine functions',2,'Coding agents can produce these from a description.'],
   ['Documenting code and explaining unfamiliar code',2,'AI can draft explanations and documentation.'],
   ['Debugging and fixing production issues',1,'AI proposes fixes; the developer verifies them in context.'],
   ['Designing architecture and reviewing trade-offs',1,'AI drafts options; the engineer decides.'],
   ['Owning systems, on-call decisions and cross-team alignment',0,'The work requires accountability and negotiation.']
  ],['Agentic coding tools such as Claude Code','System design and code review','Product thinking']],
  ['Teacher','educator school instructor',[
   ['Creating lesson plans, worksheets and quizzes',2,'AI can generate drafts from a topic and grade level.'],
   ['Grading short answers and giving written feedback',2,'AI drafts feedback for a teacher to review.'],
   ['Adapting materials for different learners',1,'AI suggests adaptations; the teacher knows the students.'],
   ['Teaching and managing a classroom',0,'Requires presence and relationships.'],
   ['Mentoring, pastoral care and conversations with parents',0,'Requires trust and care.']
  ],['AI for lesson design and feedback','Differentiated instruction','Coaching']],
  ['Content writer','copywriter editor',[
   ['Drafting blog posts, product descriptions and website copy',2,'First drafts are a common use for AI.'],
   ['Adapting a piece into posts, emails and summaries',2,'AI can reformat existing material.'],
   ['Keyword research and SEO outlines',2,'AI and research tools can draft much of the outline.'],
   ['Interviewing experts and reporting original facts',1,'AI can prepare questions; a person gathers new information.'],
   ['Owning a distinctive voice and editorial responsibility',0,'Requires taste, trust and accountability.']
  ],['AI-assisted writing workflows','Editing and voice','Original research and interviewing']],
  ['Electrician','electrical technician',[
   ['Writing quotes, invoices and job notes',2,'AI can draft paperwork from a brief.'],
   ['Diagnosing faults from symptoms and manuals',1,'AI helps reason through possibilities; a technician tests them.'],
   ['Installing, repairing and inspecting on site',0,'Physical work requires licensed professionals.'],
   ['Working safely around live systems',0,'Requires on-site judgement and accountability.'],
   ['Working with customers in homes or on site',0,'Requires presence and trust.']
  ],['AI for quotes and scheduling','Running a trade business','Advanced certification']],
  ['Nurse','nursing healthcare',[
   ['Charting and documentation',2,'A digital scribe can draft notes.'],
   ['Triaging and prioritising patients',1,'AI supports the process; the nurse decides.'],
   ['Providing care and procedures',0,'Requires hands-on clinical work.'],
   ['Comforting patients and families',0,'Requires presence and empathy.'],
   ['Picking up what a chart does not say',0,'Requires clinical judgement.']
  ],['Clinical AI tools and documentation','Care coordination','Leadership'],'Healthcare'],
  ['Marketing manager','marketing campaign',[
   ['Writing campaign copy and email sequences',2,'AI can draft campaign copy.'],
   ['Compiling campaign reports and competitor summaries',2,'AI can summarise source data.'],
   ['Segmenting audiences and setting up campaigns',1,'AI suggests; the marketer configures and tests.'],
   ['Budget allocation and channel strategy',1,'AI models options; the manager commits the budget.'],
   ['Aligning stakeholders and owning results',0,'Requires leadership and accountability.']
  ],['AI for marketing strategy and creative','Experiment design','Marketing analytics'],'Marketing and content'],
  ['Data analyst','sql business intelligence',[
   ['Writing SQL and spreadsheet formulas',2,'AI writes queries from a plain-language brief.'],
   ['Building standard dashboards and weekly reports',2,'AI can draft templated reports.'],
   ['Exploring data to explain a change',1,'AI proposes hypotheses; the analyst validates them.'],
   ['Presenting findings and recommendations',1,'AI drafts; the analyst explains the implications.'],
   ['Knowing which questions matter to the business',0,'Requires context and stakeholder judgement.']
  ],['AI for data analysis and SQL','Data storytelling','Experimentation'],'Tech and product'],
  ['Project manager','project delivery programme coordinator',[
   ['Status reports, meeting notes and risk logs',2,'AI can draft documents from updates.'],
   ['Building schedules and task breakdowns',2,'AI planning assistants can create a first pass.'],
   ['Tracking risks and dependencies',1,'AI flags issues; the project manager acts.'],
   ['Negotiating scope and resources with stakeholders',0,'Requires influence and negotiation.'],
   ['Keeping a team motivated and unblocked',0,'Requires leadership.']
  ],['Managing projects with AI','Stakeholder communication','Risk management'],'Trades and operations'],
  ['Graphic designer','visual design illustration',[
   ['Social graphics, banners and resizing',2,'Generative tools and templates can produce drafts.'],
   ['Stock-style illustrations',2,'Image models can produce illustrative assets.'],
   ['Logo and identity concepts',1,'AI explores options; the designer refines and owns them.'],
   ['Layout for print and packaging',1,'AI drafts; the designer finishes the layout.'],
   ['Brand strategy and client direction',0,'Requires taste and trust.']
  ],['Midjourney, Stable Diffusion and Canva AI','Brand strategy','Art direction'],'Creative']

 ];
 const form=el('form'), results=el('results'), tasks=el('tasks'), search=el('search');
 const labels=['Needs a person','AI assists, you decide','AI can produce this'];
 const reasons=['This involves presence, trust, or direct human accountability.','AI can suggest a starting point; a person reviews the context and decides.','AI can draft or structure this from a brief.'];
 const weights=[.1,.5,1];
 const make=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n;};
 const skills=['Running AI assistants for routine tasks so you review instead of produce','Prompting for analysis and checking AI output before relying on it','Building the human skills: relationships, judgement and presence'];
 const example='Write weekly status reports\nBook meetings and manage the calendar\nAnalyse campaign results\nRun discovery calls with prospects\nCoach two junior team members';
 function show(rows, recommended=skills) {
  const score=Math.round(100*rows.reduce((s,[,rating])=>s+weights[rating],0)/rows.length);
  const level=score>=60?'High':score>=35?'Moderate':'Low';
  const high=rows.filter(([,rating])=>rating===2).length;
  el('status').textContent=high+' of '+rows.length+' tasks are ones AI can already produce.';
  const human=rows.filter(([,rating])=>rating===0).length;
  el('mix').textContent=human+' of '+rows.length+' tasks need a person. The remaining tasks can be drafted or assisted by AI.';
  const meter=el('score'); meter.textContent=score+'/100 · '+level+' exposure';meter.setAttribute('aria-label',level+' exposure: '+score+' out of 100');meter.style.setProperty('--job-score',score+'%');
  el('list').replaceChildren(...rows.map(([task,rating,reason])=>{
   const li=make('li','');li.dataset.rating=rating;
   li.append(make('strong',task),make('small',labels[rating]),make('p',reason||reasons[rating]));
   return li;
  }));
  el('skills').replaceChildren(...recommended.map(skill=>make('li',skill)));
  el('next').textContent='Start with '+recommended[0]+' and '+recommended[1]+'.';
  results.hidden=false;
 }
 function reset() {
  el('error').textContent='';results.hidden=true;
  el('status').textContent='Your task-by-task breakdown appears here';
  el('next').textContent='Check a role or task list to see skills to learn first.';
 }
 function suggest() {
  const query=search.value.trim().toLowerCase();
  const matches=query?roles.filter(([role,aliases])=>(role+' '+aliases).toLowerCase().includes(query)):roles.slice(0,5);
  el('choices').replaceChildren(...matches.map(([role,,rows,learning,category])=>{
   const button=make('button',role);if(query&&category)button.append(make('small',' · '+category));button.type='button';button.onclick=()=>{search.value=role;show(rows,learning);};return button;
  }));
  if(!matches.length)el('choices').textContent='No matching occupation. Try listing your own tasks.';
 }
 function rate(task) {
  if(/\b(coach\w*|negotiat\w*|sign(?:ing)? off|install\w*|interview\w*|repair\w*|in person|on site|hands-on|bedside|own(?:ing)?|teach(?:ing)?)\b/i.test(task))return [task,0,'Needs a person present, hands on, or accountable for the call.'];
  if(/\b(analy[sz]\w*|plan\w*|review\w*|debug\w*|diagnos\w*|research\w*|troubleshoot\w*|budget\w*)\b/i.test(task))return [task,1,'AI drafts or suggests; you decide and own the result.'];
  if(/\b(writ\w*|draft\w*|summari[sz]\w*|schedul\w*|book\w*|translat\w*|format\w*|transcrib\w*)\b/i.test(task))return [task,2,'Current AI assistants produce this from a short brief; you review.'];
  return [task,1,'No clear signal either way; treated as AI-assisted, human-owned.'];
 }
 function check() {
  reset();
  const lines=tasks.value.split(/\r?\n/).map(t=>t.trim()).filter(Boolean);
  if(!lines.length)return;
  if(lines.length>20){el('error').textContent='Enter up to 20 task lines.';return;}
  if(/\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b|(?:\+?\d[\s().-]*){8,}/i.test(tasks.value)){el('error').textContent='Remove email addresses or phone numbers and try again.';return;}
  show(lines.map(rate));
 }
 form.addEventListener('change',e=>{if(e.target.name==='mode'){el('custom').hidden=e.target.value!=='tasks';el('occupation').hidden=e.target.value==='tasks';reset();}});
 form.addEventListener('submit',e=>{e.preventDefault();if(!el('custom').hidden)check();else el('choices').querySelector('button')?.click();});
 search.addEventListener('input',()=>{reset();suggest();});
 tasks.addEventListener('input',()=>{reset();el('submit').disabled=!tasks.value.trim();});
 el('example').onclick=()=>{tasks.value=example;el('submit').disabled=false;reset();};
 el('library').textContent=roles.length+' sample occupations, each with five typical weekly tasks.';
 suggest();
})();
