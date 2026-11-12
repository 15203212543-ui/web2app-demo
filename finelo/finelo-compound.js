(() => {
 const el=id=>document.getElementById('compound-'+id);
 const controls=[...document.querySelectorAll('input[data-field]')];
 const money=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
 const bound=(value,slider)=>Math.min(Number(slider.max),Math.max(0,Number(value)||0));
 const values=()=>Object.fromEntries(controls.map(slider=>[slider.dataset.field,bound(el(slider.dataset.field).value,slider)]));
 function render(){
  const {initial,monthly,rate,years}=values(), duration=Math.round(years);
  let balance=initial;
  const points=[{year:0,balance,principal:initial}];
  for(let year=1;year<=duration;year++){
   for(let month=0;month<12;month++)balance=balance*(1+rate/1200)+monthly;
   points.push({year,balance,principal:initial+monthly*year*12});
  }
  const {principal}=points.at(-1);
  for(const [key,value] of Object.entries({balance,interest:balance-principal,principal}))el(key).textContent=money.format(Math.max(0,value));
  el('duration').textContent=duration+(duration===1?' year':' years');
  const shown=duration?points.filter(({year})=>year&&(year===duration||((year-1)%Math.ceil(duration/10)===0))):points;
  el('chart').replaceChildren(...shown.map(point=>{
   const item=document.createElement('div'), column=document.createElement('span'), label=document.createElement('small');
   const scale=balance||1;
   item.className='finance-bar';item.setAttribute('role','listitem');
   item.setAttribute('aria-label','Year '+point.year+': '+money.format(point.balance));
   item.title=money.format(point.balance);column.style.setProperty('--total',100*point.balance/scale+'%');
   column.style.setProperty('--principal',100*point.principal/(point.balance||1)+'%');
   label.textContent='Yr '+point.year;item.append(column,label);return item;
  }));
 }
 for(const slider of controls){
  const input=el(slider.dataset.field);
  slider.oninput=()=>{input.value=slider.value;render();};
  input.oninput=()=>{slider.value=bound(input.value,slider);render();};
  input.onchange=()=>{input.value=slider.dataset.field==='years'?Math.round(bound(input.value,slider)):bound(input.value,slider);render();};
 }
 render();
})();
