(() => {
  const el = id => document.getElementById('formula-' + id);
  const form=el('form'), query=el('query'), fields=el('fields');
  const quote=value=>'"'+value.replaceAll('"','""')+'"';
  const cell=/^\$?[A-Z]{1,3}\$?[1-9]\d*(?::\$?[A-Z]{1,3}\$?[1-9]\d*)?$/i;
  const numeric=/^-?(?:\d+(?:\.\d*)?|\.\d+)$/;
  const library=window.coursivFormulaLibrary;
  const recipes=library.flatMap(([category,entries])=>entries.map(([name,excel,spec,match,sheets])=>({
   category,name,excel,sheets,match:new RegExp(match,'i'),
   fields:spec.split('|').map(field=>{const [,type,label,value]=field.match(/^(.):([^:]+):(.*)$/);return {type,label,value};})
  })));
  const activeSheet=()=>new FormData(form).get('sheet');
  const toggleLibrary=visible=>{el('recipes').hidden=!visible;el('browse').textContent=visible?'Hide library':'Browse all recipes';el('browse').setAttribute('aria-expanded',String(visible));};
  const makeButton=(text,action)=>{const button=document.createElement('button');button.type='button';button.textContent=text;button.onclick=action;return button;};
  function showCategory(category) {
   for(const button of el('categories').children)button.setAttribute('aria-pressed',String(button.dataset.category===category));
   el('recipe-list').replaceChildren(...recipes.filter(r=>r.category===category).map(r=>{
    const item=document.createElement('li');item.append(makeButton(r.name,()=>{choose(r);clearMatches();}));return item;
   }));
  }
  el('categories').replaceChildren(...library.map(([category])=>{const b=makeButton(category,()=>showCategory(category));b.dataset.category=category;return b;}));
  showCategory(library[0][0]);
  let recipe;
  const related=el('related'), matches=el('match-message');
  const normalize=value=>value.toLowerCase().replace(/[’']/g,"'").replace(/\s+/g,' ').trim();
  const matchRules=[
   [/\b(?:sum|total|add)\b.*\b(?:two conditions|both conditions|where.+\band\b)/,'SUMIFS'],
   [/\b(?:count|how many)\b.*\b(?:two conditions|both conditions|where.+\band\b)/,'COUNTIFS'],
   [/\b(?:sum|total|add)\b.*\b(?:if|where|when|condition)\b/,'SUMIF'],
   [/\b(?:count|how many)\b.*\b(?:say|equal|if|where|when|condition|match)\b/,'COUNTIF'],
   [/\b(?:find|fetch|retrieve|return|look up|lookup)\b.*\b(?:for|from|matching|by)\b.*\b(?:id|code|key|value|another column)\b/,'XLOOKUP'],
   [/\b(?:add|due)\b.*\b(?:working|business) days\b/,'WORKDAY'],
   [/\b(?:working|business) days\b.*\bbetween\b/,'NETWORKDAYS']
  ];
  const formulaName=r=>r.excel.match(/^[A-Z.]+(?=\()/)?.[0];
  function alternatives(primary,value,ranked){
   const category=recipes.filter(r=>r.category===primary.category&&r!==primary);
   const words=new Set(normalize(value).match(/[a-z]{3,}/g)||[]);
   const sorted=category.map(r=>[r,r.name.toLowerCase().split(/\W+/).filter(w=>words.has(w)).length]).sort((a,b)=>b[1]-a[1]).map(([r])=>r);
   return [...new Set([...ranked,...sorted])].filter(r=>r!==primary).slice(0,5);
  }
  function showMatches(primary,list){
   matches.textContent='Best match: '+primary.name;
   related.hidden=!list.length;
   related.replaceChildren();
   if(!list.length)return;
   const heading=document.createElement('p');heading.textContent='Other matches';
   const items=document.createElement('ul');
   for(const r of list){const li=document.createElement('li');li.append(makeButton(r.name,()=>{choose(r);showMatches(r,[primary,...list.filter(x=>x!==r)].slice(0,5));}));items.append(li);}
   related.append(heading,items);
  }
  function clearMatches(){matches.textContent='';related.hidden=true;related.replaceChildren();}

  const mode = () => new FormData(form).get('mode');
  function reset() {
    const explain = mode()==='explain';
    el('label').textContent = explain ? 'Paste a formula' : 'What should the formula do?';
    query.placeholder = explain ? '=IF(A2>0,"Yes","No")' : 'e.g. count how many rows say Paid';
    el('submit').textContent = explain ? 'Explain it' : 'Find my formula';
    el('submit').disabled = !query.value.trim();
    el('examples').hidden = el('browse').hidden = explain;
    toggleLibrary(false);el('result').hidden=true;recipe=undefined;clearMatches();
    el('status').textContent = explain ? 'Your explanation appears here' : 'Your formula appears here';
  }
  function update() {
   if(!recipe)return;
   const values=[...fields.querySelectorAll('input')].map(e=>e.value===''?e.placeholder:e.value);
   const valid=recipe.fields.every(({type},i)=>type==='t'||(type==='r'?cell:numeric).test(values[i].trim()));
   const template=activeSheet()==='sheets'&&recipe.sheets?recipe.sheets:recipe.excel;
   el('output').textContent=valid?'='+template.replace(/\{(\d+)\}/g,(_,i)=>recipe.fields[i].type==='t'?quote(values[i]):values[i].trim()):'Enter a valid cell reference or number in the highlighted fields.';
   [...fields.querySelectorAll('input')].forEach((input,i)=>{const {type}=recipe.fields[i];input.setAttribute('aria-invalid',String(type!=='t'&&!(type==='r'?cell:numeric).test((input.value||input.placeholder).trim())));});
   el('copy').disabled=!valid;el('copy-status').textContent='';
  }
  function choose(next) {
   recipe=next;
   fields.replaceChildren(...recipe.fields.map(({label,value})=>{
    const l=document.createElement('label'), i=document.createElement('input');
    i.type='text';i.placeholder=value;i.addEventListener('input',update);l.append(label+' ',i);return l;
   }));
   el('status').textContent=recipe.name;
   el('explanation').textContent=recipe.name+'. Replace the sample inputs with the cells or values from your spreadsheet.';
   el('result').hidden=false;update();
  }
  const descriptions={
   IF:'Returns one value when a condition is true, and another when it is false.',
   IFERROR:'Returns a fallback when the first argument produces an error.',
   SUM:'Adds numeric values and ranges.', SUMIF:'Adds values that meet a condition.',
   SUMIFS:'Adds values that meet all supplied conditions.', COUNTIF:'Counts cells that meet a condition.',
   INDEX:'Returns a value at a position in a range.', MATCH:'Finds the position of a matching value.',
   XLOOKUP:'Finds a match and returns the corresponding value.', VLOOKUP:'Searches the first column of a table.',
   FILTER:'Returns rows or columns that meet a condition.', AND:'Checks whether every condition is true.',
   OR:'Checks whether any condition is true.', AVERAGE:'Calculates the arithmetic mean.',
   TEXT:'Formats a value as text.', ROUND:'Rounds a number to the specified precision.'
  };
  function analyze(formula) {
   const tokens=/"(?:[^"]|"")*"|\[[^\]]*\]|[A-Z_][\w.]*\s*(?=\()|(?:(?:[A-Z_][\w.]*|'(?:[^']|'')*')!)?\$?[A-Z]{1,3}\$?[1-9]\d*(?::\$?[A-Z]{1,3}\$?[1-9]\d*)?(?![\w.!])|'(?:[^']|'')*'|[A-Z_][\w.]*|\s+|./gsi;
   const calls=[], refs=new Set(), stack=[];
   let output='', pending='', last='';
   const breakLine=depth=>{output=output.trimEnd()+'\n'+'  '.repeat(depth);};
   const depth=()=>stack.filter(f=>f.name).length;
   for(const {0:token,index} of formula.matchAll(tokens)){
    const c=token.trim();
    if(!c){if(last!=='('&&last!==','&&last!==';')output+=token.includes('\n')?' ':token;continue;}
    if((c==='"'||c==="'")&&token.length===1)throw Error('Close quoted text or the sheet name before explaining.');
    if(c==='('||c==='{'){
     const name=c==='('?pending:'';
     if(stack.length>=128)throw Error('The formula is nested too deeply to format.');
     const frame={close:c==='('?')':'}',name,depth:depth()};
     stack.push(frame);if(name)calls.push(frame);
     output+=c;
     if(name&&formula.slice(index+1).trimStart()[0]!==')')breakLine(depth());
    }else if(c===')'||c==='}'){
     const frame=stack.pop();
     if(!frame||frame.close!==c)throw Error('Check that every opening bracket has a matching closing bracket.');
     if(frame.name&&last!=='(')breakLine(depth());
     output+=c;
    }else if((c===','||c===';')&&stack.at(-1)?.name){
     output=output.trimEnd()+c;breakLine(depth());
    }else{
     if(/^[A-Z_][\w.]*$/i.test(c)&&/^\s*\(/.test(formula.slice(index+c.length)))pending=c.toUpperCase().replace(/^_XLFN\./,'');
     else if(/^(?:(?:[A-Z_][\w.]*|'(?:[^']|'')*')!)?\$?[A-Z]{1,3}\$?[1-9]\d*(?::\$?[A-Z]{1,3}\$?[1-9]\d*)?$/i.test(c)&&!/^[\w.]/.test(formula[index-1]||'')){
      refs.add(c);
     }
     output+=c;last=c;continue;
    }
    pending='';last=c;
   }
   if(stack.length)throw Error('Check that every opening bracket has a matching closing bracket.');
   return {calls,refs,output};
  }
  function submit() {
    const value=query.value.trim();
    if(!value)return;
    if(mode()==='explain'){
      if(!value.startsWith('=')){el('status').textContent='Start the formula with an equals sign.';el('result').hidden=true;return;}
      if(value.length>12000||value==='='){el('status').textContent='Enter a formula of up to 12,000 characters.';el('result').hidden=true;return;}
      try {
       const {calls,refs,output}=analyze(value);
       fields.replaceChildren();el('status').textContent='Formula breakdown';
       el('output').textContent=output;
       const list=document.createElement('ol');
       for(const {name,depth} of calls){
        const li=document.createElement('li'), fn=document.createElement('strong');
        fn.textContent=name;fn.translate=false;
        li.append(fn,' · Level '+(depth+1)+' · '+(descriptions[name]||'Spreadsheet function.'));list.append(li);
       }
       if(calls.length)fields.append(list);
       const references=document.createElement('span');references.translate=false;
       references.textContent=[...refs].join(', ')||'none detected';
       el('explanation').replaceChildren('Ranges used: ',references);
       el('copy-status').textContent='';el('copy').disabled=false;el('result').hidden=false;
      } catch(error) {el('status').textContent=error.message;el('result').hidden=true;}
      return;
    }
    const queryText=normalize(value);
    const explicit=recipes.find(r=>formulaName(r)?.toLowerCase()===queryText);
    const rule=matchRules.find(([pattern])=>pattern.test(queryText));
    const preferred=rule&&recipes.find(r=>formulaName(r)===rule[1]);
    const ranked=recipes.map(r=>[r,r.match.exec(queryText)?.[0].length||0]).filter(([,score])=>score).sort((a,b)=>b[1]-a[1]).map(([r])=>r);
    const primary=explicit||preferred||ranked[0];
    if(primary){choose(primary);showMatches(primary,alternatives(primary,queryText,ranked));}
    else {clearMatches();matches.textContent='No recipe matched “'+value+'”. Try naming an operation (sum, count, look up, extract or split), or browse the library.';el('status').textContent='Your formula appears here';el('result').hidden=true;recipe=undefined;}
  }
  form.addEventListener('submit',e=>{e.preventDefault();submit();});
  form.addEventListener('change',e=>{if(e.target.name==='mode')reset();else if(e.target.name==='sheet')update();});
  query.addEventListener('input',()=>{el('submit').disabled=!query.value.trim();});
  el('examples').addEventListener('click',e=>{const v=e.target.closest("button[data-example]")?.dataset.example;if(v){query.value=v;el('submit').disabled=false;submit();}});
  el('browse').addEventListener('click',()=>toggleLibrary(el('recipes').hidden));
  el('copy').addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(el('output').textContent);el('copy-status').textContent='Copied.';}
    catch{el('output').focus();el('copy-status').textContent='Select the formula and use your browser’s copy command.';}
  });
  reset();
})();
