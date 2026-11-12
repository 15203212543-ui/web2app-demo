(() => {
 const el = id => document.getElementById('hook-' + id);
 const form = el('form'), results = el('results'), status = el('status');
 const patterns = [
 ['Curiosity gap','Show the payoff while leaving the method for the post.',(t,o)=>[`What most advice gets wrong about ${t}`,`The overlooked side of ${t}`,`${t}: what I would check first`,`A different way to think about ${o}`]],
 ['Contrarian','Challenge a common assumption you can address in the post.',(t,o,a,m)=>[`Rethinking ${t}`,`The case for doing less with ${t}`,`Why ${m} deserves a second look`,`${o}: the slower approach`]],
 ['Numbers','Use a real number to set expectations.',(t,o,a,m,n)=>[`${n} ways to approach ${t}`,`${n} questions before trying ${t}`,`${n} steps toward ${o}`,`${n} ideas about ${t} to compare`]],
 ['Mistake','Name a problem the reader recognizes.',(t,o,a,m)=>[`${t}: avoid ${m}`,`What to do after ${m}`,`The first thing to check when ${t} gets hard`,`If ${o} feels out of reach, start here`]],
 ['Story','Open with a turning point you can describe.',(t,o,a,m,n,f)=>[`A lesson from trying ${t}`,`What changed my approach to ${t}`,`How I started working toward ${o}`,`What I learned about ${t} in ${f}`]],
 ['Question','Invite the reader to check their own experience.',(t,o,a)=>[`How do you approach ${t}?`,`What would make ${o} easier?`,`What should ${a} know about ${t}?`,`Is it time to rethink ${t}?`]],
 ['Proof','Set up evidence the post can actually provide.',(t,o)=>[`${t}: what the evidence shows`,`What would prove ${t} works?`,`A closer look at the case for ${o}`,`${t}: the results to look for`]],
 ['How-to','Offer a practical next step.',(t,o,a,m,n,f)=>[`Start here with ${t}`,`How to work toward ${o}`,`${t} for ${a}: a first step`,`Practice ${t} in ${f}`]]
 ];
 const limits = [150,280,125,70,50];
 const offsets = [0,7,6,3,4,2];
 let batch = 0;
 function generate() {
  const data = new FormData(form);
  const field = (key,fallback) => data.get(key).trim() || fallback;
  const format=Number(data.get('format')), kind=Number(data.get('kind')), tone=Number(data.get('tone'));
  const vals=[field('topic','your idea'),field('outcome','a better result'),field('audience','beginners'),field('mistake','a common mistake'),field('number','3'),field('timeframe','one week')];
  const make=(tag,text)=>{const n=document.createElement(tag);n.textContent=text;return n};
  const order=patterns.map((_,i)=>(i+offsets[kind])%patterns.length);
  results.replaceChildren(...order.map((p,i)=>{
   const [title,reason,build]=patterns[p];
   const lines=build(...vals), section=make('section','');
   section.append(make('h2',title));
   for(let j=0;j<(i<4?3:2);j++){
    const base=lines[(j+batch+tone)%lines.length];
    const line=tone===1&&!base.endsWith('?')?base+'?':tone===2&&format<3?'Try this: '+base:base;
    const card=make('article',''), content=make('p',line), copy=make('button','Copy');
    content.translate=false; copy.type='button';
    copy.onclick=async()=>{try{await navigator.clipboard.writeText(line);copy.textContent='Copied';}catch{status.textContent='Select the hook and use your browser’s copy command.';}};
    const chars=[...line].length;
    card.append(content,copy,make('small',chars+' chars'+(chars>limits[format]?' · Over '+limits[format]+' character guide':'')),make('p',reason));
    section.append(card);
   }
   return section;
  }));
  status.textContent='20 hooks · '+limits[format]+' character guide';
  el('different').hidden=false;
 }
 form.addEventListener('submit',event=>{event.preventDefault();batch=0;generate();});
 el('example').addEventListener('click',()=>{el('topic').value='ChatGPT for email';el('outcome').value='an empty inbox before 10am';batch=0;generate();});
 el('different').addEventListener('click',()=>{batch++;generate();});
})();
