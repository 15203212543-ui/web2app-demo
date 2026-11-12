(() => {
 const el = id => document.getElementById('token-' + id);
 const models = [
 ['Claude Fable 5.1',10,50],['Claude Opus 5.5',4,20],['Claude Opus 5',5,25],['Claude Sonnet 5',2,10],['Claude Sonnet 4.6',3,15],['Claude Haiku 4.5',1,5],
 ['GPT-6 Astra',10,50,1],['GPT-6 Sol',2,10,.2],['GPT-6 Luna',.1,.5,.01],['GPT-5.6 Sol',4,20,.4],['GPT-5.6 Terra',2,12,.2],['GPT-5.6 Luna',.2,1.2,.02],
 ['GPT-5.4',2.5,15,.25],['GPT-5.4 mini',.75,4.5,.075],['GPT-5',1.25,10,.125],['GPT-5 mini',.25,2,.025],['GPT-5 nano',.05,.4,.005],
 ['GPT-4.1',2,8,.5],['GPT-4.1 mini',.4,1.6,.1],['GPT-4o',2.5,10,1.25],['GPT-4o mini',.15,.6,.075],['GPT-3.5 Turbo',.5,1.5,null,'legacy'],
 ['Gemini 3.8 Flash',.75,3.75],['Gemini 3.5 Flash',1.5,9],['Gemini 3.5 Flash-Lite',.3,2.5],['Gemini 3.1 Pro Preview',2,12],['Gemini 2.5 Pro',1.25,10],['Gemini 2.5 Flash',.3,2.5]
 ];
 const model = el('model'), input = el('text'), status = el('status');
 const keys=['modern','legacy','claude','gemini'];
 const counts={modern:0,legacy:0,claude:0,gemini:0};
 model.replaceChildren(...models.map(([name,price,out],i)=>new Option(name+' ($'+price+' in / $'+out+' out per 1M)',i)));
 model.value='3';
 const money=(value,places)=>'$'+value.toFixed(places);
 const number=id=>Math.max(0,Number(el(id).value)||0);
 function calculate() {
  const [name,price,out,cache=price/10,encoding]=models[Number(model.value)];
  const key=encoding??(name.startsWith('Claude')?'claude':name.startsWith('Gemini')?'gemini':'modern');
  const manual=el('input');
  manual.placeholder=String(counts[key]);
  const tokens=manual.value===''?counts[key]:number('input');
  const share=cache===null?0:Math.min(100,number('cache'))/100;
  el('cache').disabled=cache===null;
  el('cache-rate').textContent=cache===null?'No cached input rate for this model.':'Cache read $'+cache+' per 1M (reference)';
  const inputCost=tokens*(price*(1-share)+(cache??price)*share)/1e6;
  const outputCost=number('output')*out/1e6, total=inputCost+outputCost;
  el('request').textContent=money(total,5);
  el('month').textContent=money(total*number('volume'),2);
  el('breakdown').textContent='Input '+money(inputCost,5)+' + output '+money(outputCost,5)+' per request with '+name+'.';
 }
 let tokenizers, revision=0;
 function load(encoding) {
  return new Promise((resolve,reject)=>{
   const script=document.createElement('script');
   script.src='./assets/tokenizer/'+encoding+'.js';
   script.onload=()=>{const tokenizer=window['GPTTokenizer_'+encoding]; if(tokenizer?.countTokens)resolve(tokenizer);else reject(new Error('Tokenizer unavailable'));};
   script.onerror=reject;
   document.head.append(script);
  });
 }
 let timer, fileRevision=0;
 async function count() {
  const version=++revision, value=input.value;
  try {
   if(!value) {
    keys.forEach(key=>{counts[key]=0;el(key).textContent='0';});
    status.textContent='';calculate();return;
   }
   status.textContent='Counting tokens…';
   tokenizers??=Promise.all([load('o200k_base'),load('cl100k_base')]);
   const [modern,legacy]=await tokenizers;
   if(version!==revision)return;
   counts.modern=modern.countTokens(value,{disallowedSpecial:new Set()});
   counts.legacy=legacy.countTokens(value,{disallowedSpecial:new Set()});
   counts.claude=Math.round(counts.modern*1.15);
   counts.gemini=Math.round(counts.modern*1.05);
   keys.forEach(key=>{el(key).textContent=counts[key].toLocaleString();});
   status.textContent='';calculate();
  } catch {
   if(version!==revision)return;
   tokenizers=undefined;
   keys.forEach(key=>{counts[key]=0;el(key).textContent='—';});
   status.textContent='Tokenizer unavailable. Enter input tokens manually to estimate cost.';calculate();
  }
 }
 for(const key of ['modern','legacy'])el(key+'-quality').textContent='tokens, exact';
 input.addEventListener('input',()=>{fileRevision++;revision++;clearTimeout(timer);timer=setTimeout(count,120);});
 for(const id of ['input','output','cache','volume'])el(id).addEventListener('input',calculate);
 model.addEventListener('change',calculate);
 el('example').onclick=()=>{fileRevision++;input.value='Summarize the following meeting notes in three bullets. Identify each decision and list the next step with an owner.';count();};
 el('attach').onclick=()=>el('file').click();
 async function read(file) {
  if(!file)return;
  const ticket=++fileRevision;
  clearTimeout(timer);revision++;
  status.textContent='Reading document…';
  try {
   const {extractText}=await import('./assets/document-reader/extract.mjs');
   const text=await extractText(file);
   if(ticket!==fileRevision)return;
   input.value=text;count();
  } catch(error) {
   if(ticket!==fileRevision)return;
   await count();
   if(ticket===fileRevision)status.textContent=error?.message||'The document could not be read.';
  }
 }
 el('file').onchange=e=>{read(e.target.files[0]);e.target.value='';};
 input.ondragover=e=>e.preventDefault();
 input.ondrop=e=>{e.preventDefault();read(e.dataTransfer.files[0]);};
 calculate();
})();
