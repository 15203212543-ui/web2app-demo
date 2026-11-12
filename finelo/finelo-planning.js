(() => {
 const page=document.querySelector('[data-plan]');
 const el=id=>document.getElementById('plan-'+id);
 const inputs=[...page.querySelectorAll('[data-value]')];
 const money=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
 const value=input=>Math.max(0,Math.min(input.max===''?1e12:Number(input.max),Number(input.value)||0));
 const numbers=(stats)=>{for(const [k,v] of Object.entries(stats))el(k).textContent=money.format(Math.max(0,v));};
 function factors(rate,months) {
  const growth=Math.expm1(months*Math.log1p(rate));
  return [1+growth,rate===0?months:growth/rate];
 }
 function render(){
  const initial=value(el('initial')), rate=value(el('rate'))/1200;
  if(page.dataset.plan==='savings'){
   const goal=value(el('goal')), months=Math.round(value(el('years'))*12);
   const [growth,annuity]=factors(rate,months);
   const payment=annuity?Math.max(0,(goal-initial*growth)/annuity):0;
   const principal=initial+payment*months, balance=initial*growth+payment*annuity;
   numbers({payment,balance,principal,interest:balance-principal});
   const percent=goal===0?100:Math.min(100,Math.round(initial/goal*100));
   el('progress').value=percent;el('percent').textContent=percent+'%';
   el('summary').textContent=months===0&&goal>initial?'Choose a time period to calculate a monthly contribution.':payment>0?'Save '+money.format(payment)+' per month for '+(months/12).toLocaleString('en-US',{maximumFractionDigits:2})+' years to reach your '+money.format(goal)+' goal.':'No additional monthly contribution is needed under these assumptions.';
   el('payment').textContent=months===0&&goal>initial?'—':money.format(payment);
   return;
  }
  const age=Math.round(value(el('age'))), target=Math.round(value(el('target'))), years=Math.max(0,target-age), monthly=value(el('monthly'));
  const at=year=>{const [growth,annuity]=factors(rate,year*12);return {principal:initial+monthly*year*12,balance:initial*growth+monthly*annuity};};
  const {balance,principal}=at(years);
  numbers({balance,principal,interest:balance-principal});el('duration').textContent=String(years);
  el('label-balance').textContent='Projected balance at '+Math.max(age,target);
  const points=Array.from({length:years+1},(_,i)=>i).filter(i=>i===years||i%Math.max(1,Math.ceil(years/12))===0);
  el('chart').replaceChildren(...points.map(year=>{
   const point=at(year),item=document.createElement('div'),bar=document.createElement('span'),label=document.createElement('small');
   item.className='finance-bar';item.setAttribute('role','listitem');item.title='Age '+(age+year)+': '+money.format(point.balance);item.setAttribute('aria-label',item.title);
   bar.style.setProperty('--total',100*point.balance/(balance||1)+'%');bar.style.setProperty('--principal',100*point.principal/(point.balance||1)+'%');
   label.textContent=year===0||year===years?'Age '+(age+year):'\u00a0';item.append(bar,label);return item;
  }));
 }
 for(const input of inputs){
  const slider=page.querySelector('[data-pair="'+input.id.slice(5)+'"]');
  if(slider)slider.oninput=()=>{input.value=slider.value;render();};
  input.oninput=()=>{if(slider)slider.value=value(input);render();};
  input.onchange=()=>{input.value=value(input);render();};
 }
 render();
})();
