(() => {
 // SSA 2022 period life table (2025 Trustees Report), annual death probabilities, ages 62–119.
 const mortality=[
 [.01445,.008991],[.015571,.009681],[.016737,.010343],[.017897,.011018],[.019017,.011743],[.020213,.012532],[.021569,.013512],[.023088,.014684],[.024828,.016025],[.026705,.017468],[.028761,.019195],[.031116,.021195],[.033861,.023452],[.037088,.02598],[.041126,.029153],[.045241,.032394],[.049793,.035888],[.054768,.039676],[.06066,.044156],[.067027,.049087],[.073999,.054635],[.081737,.061066],[.090458,.068431],[.100525,.076841],[.111793,.086205],[.124494,.096851],[.138398,.109019],[.153207,.121867],[.169704,.135805],[.187963,.151108],[.208395,.16802],[.230808,.18634],[.253914,.206432],[.277402,.228086],[.300882,.250406],[.324326,.273699],[.347332,.296984],[.36943,.319502],[.391927,.342716],[.414726,.366532],[.437722,.390844],[.4608,.415531],[.48384,.440463],[.508032,.466891],[.533434,.494904],[.560105,.524599],[.588111,.556075],[.617516,.589439],[.648392,.624805],[.680812,.662294],[.714852,.702031],[.750595,.744153],[.788125,.788125],[.827531,.827531],[.868907,.868907],[.912353,.912353],[.95797,.95797],[1,1]
 ];
 const el=id=>document.getElementById('social-'+id);
 const form=el('form'), rows=el('rows');
 const usd=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
 const monthFmt=new Intl.DateTimeFormat('en-US',{month:'long',year:'numeric',timeZone:'UTC'});
 const row=values=>{
  const tr=document.createElement('tr');
  for(const text of values){const td=document.createElement('td');td.textContent=text;tr.append(td);}
  return tr;
 };
 let scenario;
 const age=m=>Math.floor(m/12)+(m%12?' years, '+m%12+' months':' years');
 function fullAge(y){return y<=1954?792:y<1960?792+2*(y-1954):804;}
 function benefit(m,fra,pia){
  const early=Math.max(0,fra-m);
  return pia*(early?1-Math.min(36,early)/180-Math.max(0,early-36)/240:1+(m-fra)/150);
 }
 form.onsubmit=e=>{
  e.preventDefault();
  const [year,month,day]=el('dob').value.split('-').map(Number);
  const fra=fullAge(year-(month===1&&day===1?1:0));
  const pia=el('pia').valueAsNumber;
  const fixed=el('life').value==='fixed', end=fixed?el('end').valueAsNumber*12:1440;
  const sex=Number(el('sex').value);
  const discount=Math.log1p(el('discount').valueAsNumber/100)/12;
  const suffix=new Float64Array(end+1), weights=new Float64Array(end);
  let survival=1;
  for(let m=744;m<end;m++){
   if(!fixed){
    const q=mortality[Math.floor(m/12)-62][sex];
    // Linear interpolation of survivorship within each year.
    const month=m%12;
    weights[m]=survival*(1-q*(month+1)/12)*Math.exp(-discount*(m-743));
    if(month===11)survival*=1-q;
   }else weights[m]=Math.exp(-discount*(m-743));
  }
  for(let m=end-1;m>=744;m--)suffix[m]=suffix[m+1]+weights[m];
  const calc=m=>{
   const monthly=benefit(m,fra,pia);
   return {m,monthly,pv:monthly*suffix[m]};
  };
  const first=day>2?745:744;
  let best=calc(first);
  for(let m=first+1;m<=840;m++){const x=calc(m);if(x.pv>best.pv)best=x;}
  const date=m=>new Date(Date.UTC(year,month-1+m,1));
  const dateInput=m=>date(m).toISOString().slice(0,7);
  const fillRows=extra=>rows.replaceChildren(...[...new Set([first,fra,840,best.m,...extra])].sort((a,b)=>a-b).map(m=>{
   const x=calc(m);
   return row([age(m),usd.format(x.monthly),usd.format(x.pv)]);
  }));
  scenario={calc,best,year,month,fillRows,first};
  const filing=date(best.m), filingYear=filing.getUTCFullYear(), filingMonth=filing.getUTCMonth();
  el('best').textContent=age(best.m)+' ('+monthFmt.format(filing)+') has the highest estimated present value under these assumptions.';
  fillRows([]);
  const lastYear=date(end-1).getUTCFullYear(), fullRows=Math.min(filingYear+5,lastYear);
  const annual=[];
  for(let y=filingYear;y<=fullRows;y++){
   const from=y===filingYear?filingMonth:0;
   const to=y===lastYear?date(end-1).getUTCMonth()+1:12;
   const label=y===fullRows&&y<lastYear?y+' onward':String(y);
   annual.push(row([label,usd.format(best.monthly*Math.max(0,to-from))]));
  }
  el('annual').replaceChildren(...annual);
  el('month').min=dateInput(first);el('month').max=dateInput(840);el('month').value=dateInput(best.m);
  const chart=el('heatmap');
  chart.replaceChildren(...Array.from({length:841-first},(_,i)=>{
   const at=first+i, x=calc(at), fraction=best.pv?x.pv/best.pv:1;
   const monthButton=document.createElement('button');
   monthButton.type='button';
   monthButton.dataset.band=at===best.m?4:fraction>=.99?3:fraction>=.95?2:fraction>=.9?1:0;
   monthButton.dataset.month=String(at);
   const label=monthFmt.format(date(at))+' · '+usd.format(x.pv)+' estimated present value';
   monthButton.title=label;monthButton.setAttribute('aria-label',label);
   monthButton.setAttribute('aria-pressed',String(at===best.m));
   monthButton.tabIndex=at===best.m?0:-1;
   monthButton.onclick=()=>{el('month').value=dateInput(at);compare(at);};
   return monthButton;
  }));
  el('comparison').textContent='';
  el('prompt').hidden=true;el('detail').hidden=false;el('heading').focus();
 };
 el('compare').onsubmit=e=>{
  e.preventDefault();
  if(!scenario)return;
  const [y,m]=el('month').value.split('-').map(Number);
  const at=(y-scenario.year)*12+m-scenario.month;
  if(!Number.isInteger(at)||at<scenario.first||at>840)return;
  compare(at);
 };
 function compare(at) {
  const x=scenario.calc(at), difference=Math.max(0,scenario.best.pv-x.pv);
  scenario.fillRows([at]);
  for(const button of el('heatmap').children){
   const selected=Number(button.dataset.month)===at;
   button.setAttribute('aria-pressed',String(selected));
   button.tabIndex=selected?0:-1;
  }
  el('comparison').textContent=age(at)+': '+usd.format(x.monthly)+' per month, '+usd.format(x.pv)+' estimated present value'+(difference>=.5?' ('+usd.format(difference)+' below the highest estimate).':'.');
 }
 el('heatmap').onkeydown=e=>{
  const button=e.target.closest('button[data-month]');
  if(!button)return;
  const delta={ArrowLeft:-1,ArrowRight:1,ArrowUp:-12,ArrowDown:12}[e.key];
  const at=e.key==='Home'?scenario.first:e.key==='End'?840:delta?Math.min(840,Math.max(scenario.first,Number(button.dataset.month)+delta)):null;
  if(at===null)return;
  e.preventDefault();el('heatmap').querySelector('[data-month="'+at+'"]').focus();
 };
 const sync=()=>{const fixed=el('life').value==='fixed';el('end-field').hidden=!fixed;el('end').disabled=!fixed;el('sex').disabled=fixed;};
 el('life').onchange=sync;sync();
 form.onreset=()=>{queueMicrotask(sync);scenario=undefined;el('annual').replaceChildren();el('heatmap').replaceChildren();el('prompt').hidden=false;el('detail').hidden=true;rows.replaceChildren();};
 el('edit').onclick=()=>el('dob').focus();
})();
