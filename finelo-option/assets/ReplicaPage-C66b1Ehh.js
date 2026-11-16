import{n as e,r as t}from"./rolldown-runtime-XKyaHtl9.js";import{c as n,f as r,g as i,r as a,t as o,u as s}from"./ui-runtime-BFBBXOgR.js";/* empty css               */import{t as c}from"./image-metadata-jBzq76jy.js";import{V as l}from"./index-CG8V2X8H.js";var u=e({initialize:()=>d});function d(e,t,n,r,i,a){(()=>{let n=[...e.querySelectorAll(`.fb-article-grid :is(aside, .fb-launch-mobile-toc) nav a[href^="#"]`)],r=[...new Set(n.map(e=>e.hash))].map(t=>({links:n.filter(e=>e.hash===t),heading:e.getElementById(t.slice(1))})).filter(e=>e.heading);if(!r.length)return;let a=e=>{for(let t of r)for(let n of t.links)t===e?n.setAttribute(`aria-current`,`location`):n.removeAttribute(`aria-current`)},o=()=>{let e=r[0];for(let t of r){if(t.heading.getBoundingClientRect().top>120)break;e=t}a(e)},s=0,c=()=>{s||=i(()=>{s=0,o()})};for(let e of r)for(let t of e.links)t.addEventListener(`click`,()=>a(e));t.addEventListener(`scroll`,c,{passive:!0}),t.addEventListener(`resize`,c),t.addEventListener(`pageshow`,c),t.addEventListener(`hashchange`,c),o()})()}var f=e({initialize:()=>p});function p(e,t,n,r,i,a){e.querySelectorAll(`.fb-article-faq button[aria-controls]`).forEach(t=>{let n=e.getElementById(t.getAttribute(`aria-controls`));n&&t.addEventListener(`click`,()=>{n.hidden=!n.hidden,t.setAttribute(`aria-expanded`,String(!n.hidden))})})}var m=e({initialize:()=>h});function h(e,t,n,r,i,a){(()=>{let t=e.querySelector(`.fb-theme`),r=n=>{e.documentElement.dataset.theme=n?`light`:`dark`,e.querySelectorAll(`img[data-light-src]`).forEach(e=>{e.dataset.darkSrc??=e.getAttribute(`src`),e.setAttribute(`src`,n?e.dataset.lightSrc:e.dataset.darkSrc)}),t.textContent=n?`☾`:`☀`,t.setAttribute(`aria-label`,n?`Switch to dark theme`:`Switch to light theme`)};r(n.getItem(`finelo-blog-theme`)===`light`),t.addEventListener(`click`,()=>{let t=e.documentElement.dataset.theme!==`light`;r(t),n.setItem(`finelo-blog-theme`,t?`light`:`dark`)})})(),(()=>{let t=e.querySelector(`.fb-cookie-open`);if(!t)return;let r=`finelo-blog-cookie-preferences`,i=e.createElement(`dialog`);i.className=`fb-cookie-dialog`,i.setAttribute(`aria-labelledby`,`fb-cookie-title`);let a=[[`Functional`,`These cookies help us analyze use of the site and improve the browsing experience.`],[`Advertising`,`These cookies can be used to show more relevant advertising.`]];i.innerHTML=`
    <form method="dialog">
      <button class="fb-cookie-close" value="close" aria-label="Close" autofocus>×</button>
      <h2 id="fb-cookie-title">Cookies and related technologies on this site</h2>
      <img src="/web2app-demo/finelo-option/finelo/assets/finelo-logo.svg" alt="Finelo Logo">
      <p>Choose whether this site can use the cookies and related technologies described below. Read our Privacy Policy to learn more.</p>
      <section><h3>Required cookies</h3><p>These cookies enable essential site functions.</p><strong>Active</strong></section>
      ${a.map(([e,t])=>`
        <fieldset><legend>${e} cookies</legend><p>${t}</p>
        <label><input type="radio" name="${e}" value="no"> No</label>
        <label><input type="radio" name="${e}" value="yes"> Yes</label></fieldset>`).join(``)}
      <div class="fb-cookie-actions"><button value="submit">Submit preferences</button><button value="all">Accept all</button><button value="none">Reject all</button></div>
      <a href="https://legal.finelo.com/privacy">Read our Privacy Policy</a>
    </form>`,e.body.append(i);let o=i.querySelector(`form`);t.addEventListener(`click`,()=>{let e={};try{e=JSON.parse(n.getItem(r))??{}}catch{}for(let[t]of a)o.elements.namedItem(t).value=e[t]??`yes`;i.showModal()}),o.addEventListener(`submit`,e=>{let t=e.submitter?.value;if(![`submit`,`all`,`none`].includes(t))return;let i=Object.fromEntries(a.map(([e])=>[e,t===`all`?`yes`:t===`none`?`no`:o.elements.namedItem(e).value]));try{n.setItem(r,JSON.stringify(i))}catch{}})})(),(()=>{let t=e.querySelector(`.fb-mobile-toggle`),n=e.querySelector(`.fb-mobile-drawer`);if(!t||!n)return;t.addEventListener(`click`,()=>n.showModal()),n.addEventListener(`click`,e=>{e.target===n&&e.clientX<n.getBoundingClientRect().left&&n.close()});let i=r(`(min-width:1280px)`);i.addEventListener(`change`,()=>{i.matches&&n.open&&n.close()})})()}var g=e({initialize:()=>_});function _(e,t,n,r,i,a){let o=e.querySelector(`nav`),s=o.querySelector(`.nav-menu-button`),c=e.getElementById(`finelo-navigation`),l=r(`(max-width:720px)`),u=c.querySelector(`.mobile-menu-close`),d=[...c.querySelectorAll(`details`)],f=o.querySelector(`.nav-language`),p=o.querySelector(`.theme-button`);function m(e){c.hidden=!e,s.setAttribute(`aria-expanded`,String(e)),s.setAttribute(`aria-label`,e?`Close navigation menu`:`Open navigation menu`),s.textContent=e?`×`:`☰`;let t=e&&l.matches;d.forEach(e=>{t&&e.removeAttribute(`name`),e.open=t,e.querySelector(`summary`).inert=t,t||e.setAttribute(`name`,`finelo-navigation`)}),t&&(c.scrollTop=0,u.focus({preventScroll:!0}))}s.addEventListener(`click`,()=>m(c.hidden)),u.addEventListener(`click`,()=>{m(!1),s.focus()}),l.addEventListener(`change`,()=>{c.hidden||m(!1)});let h=`finelo-preview-theme`;function g(t){e.body.classList.toggle(`light`,t),p.setAttribute(`aria-label`,t?`Switch to dark theme`:`Switch to light theme`),p.textContent=t?`☾`:`☼`}try{g(n.getItem(h)===`light`)}catch{}p.addEventListener(`click`,()=>{let t=!e.body.classList.contains(`light`);g(t);try{n.setItem(h,t?`light`:`dark`)}catch{}}),e.addEventListener(`click`,e=>{o.contains(e.target)||m(!1),f.contains(e.target)||(f.open=!1)}),o.addEventListener(`keydown`,e=>{e.key===`Escape`&&(f.open?(f.open=!1,f.querySelector(`summary`).focus()):c.hidden||(m(!1),s.focus()))});let _=e.querySelector(`.bot-phone`);_?.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-choice]`);t&&(_.querySelector(`[role=status]`).textContent=t.dataset.choice+` · Demo`)});let v=e.getElementById(`finelo-video-rail`);e.querySelector(`.video-controls`)?.addEventListener(`click`,e=>{let t=e.target.closest(`button[data-direction]`);if(!t)return;let n=v.firstElementChild.getBoundingClientRect().width,i=parseFloat(a(v).columnGap),o=r(`(prefers-reduced-motion: reduce)`).matches?`instant`:`smooth`;v.scrollBy({left:(n+i)*Number(t.dataset.direction),behavior:o})})}var v=e({initialize:()=>y});function y(e,t,n,r,i,a){let o={play:{label:`Google Play`,url:`https://play.google.com/store/apps/details?id=io.zimran.finelo&hl=en`,cards:[[`Makes learning to trade fun`,`“Finelo has made learning to trade fun. It’s easy to follow and it helps to understand why the markets do what they do. I recommend this to anyone wanting to learn how to trade!”`,`Chad F. · January 2025`],[`Perfect for beginners`,``,`December 2024`]]},apple:{label:`App Store`,url:`https://apps.apple.com/si/app/finelo-master-trading/id6670422243`,cards:[[`Exceptional approach to teaching investing`,``,``],[`An invaluable resource for everyone`,``,``]]}},s=`play`,c=0,l=e.querySelector(`.review-controls`),u=e.querySelectorAll(`[data-platform]`);function d(){let{label:t,url:n,cards:r}=o[s],[i,a,d]=r[c]??[`Read Finelo reviews on the App Store`,``,``];e.querySelector(`#review-platform`).textContent=t,e.querySelector(`#review-title`).textContent=i;for(let[t,n]of[[`#review-quote`,a],[`#review-date`,d]]){let r=e.querySelector(t);r.hidden=!n,r.textContent=n}let f=e.querySelector(`#review-source`);f.href=n,f.textContent=`View on `+t+` ↗`,l.hidden=r.length<2,u.forEach(e=>e.setAttribute(`aria-pressed`,String(e.dataset.platform===s))),l.querySelectorAll(`[data-slide]`).forEach(e=>e.setAttribute(`aria-pressed`,String(+e.dataset.slide===c)))}u.forEach(e=>e.addEventListener(`click`,()=>{s=e.dataset.platform,c=0,d()})),l.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=o[s].cards.length;n&&(c=t.dataset.slide==null?(c+ +t.dataset.move+n)%n:+t.dataset.slide,d())})}var b=t(i(),1),x=[{file:`finelo-about.html`,route:`/discover/about`,title:`About Finelo | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-ai-bot.html`,route:`/discover/ai-bot`,title:`Finelo AI Trading Bot`,scripts:[`finelo-home.js`]},{file:`finelo-ai-investing-challenge.html`,route:`/discover/ai-investing-challenge`,title:`28-Day AI Investing Challenge | Finelo`,scripts:[`finelo-home.js`]},{file:`finelo-ai-trader-challenge.html`,route:`/discover/ai-trader-challenge`,title:`28-Day AI Trader Challenge | Finelo`,scripts:[`finelo-home.js`]},{file:`finelo-ai.html`,route:`/discover/ai`,title:`Finelo AI | Learn to Trade and Invest with AI`,scripts:[`finelo-home.js`]},{file:`finelo-app.html`,route:`/discover/app`,title:`Finelo App | Learn Trading and Investing`,scripts:[`finelo-home.js`]},{file:`finelo-bank-charge.html`,route:`/discover/bank-charge`,title:`Finelo Bank Charge | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-blog-ai-trading-bots-for-beginners.html`,route:`/discover/blog-ai-trading-bots-for-beginners`,title:`How Do AI Trading Bots Work? A Beginner’s Guide | Finelo`,scripts:[`finelo-blog.js`,`finelo-blog-article.js`,`finelo-blog-beginner-faq.js`]},{file:`finelo-blog-ai-trading.html`,route:`/discover/blog-ai-trading`,title:`AI Trading | Finelo Blog`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-chart-analysis.html`,route:`/discover/blog-chart-analysis`,title:`Chart Analysis | Finelo Blog`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-financial-literacy.html`,route:`/discover/blog-financial-literacy`,title:`Financial Literacy | Finelo Blog`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-finelo-ai-trading-bots-launch.html`,route:`/discover/blog-finelo-ai-trading-bots-launch`,title:`New in Finelo: AI Trading Bots That Find Setups for You | Finelo`,scripts:[`finelo-blog.js`,`finelo-blog-article.js`]},{file:`finelo-blog-investing.html`,route:`/discover/blog-investing`,title:`Investing | Finelo Blog`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-machine-learning-trading-bot.html`,route:`/discover/blog-machine-learning-trading-bot`,title:`Machine Learning Trading Bot: How Models Are Built, Tested, and Monitored | Finelo`,scripts:[`finelo-blog.js`,`finelo-blog-article.js`]},{file:`finelo-blog-page-10.html`,route:`/discover/blog-page-10`,title:`Finelo Blog – Page 10`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-2.html`,route:`/discover/blog-page-2`,title:`Finelo Blog – Page 2`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-3.html`,route:`/discover/blog-page-3`,title:`Finelo Blog – Page 3`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-4.html`,route:`/discover/blog-page-4`,title:`Finelo Blog – Page 4`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-5.html`,route:`/discover/blog-page-5`,title:`Finelo Blog – Page 5`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-6.html`,route:`/discover/blog-page-6`,title:`Finelo Blog – Page 6`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-7.html`,route:`/discover/blog-page-7`,title:`Finelo Blog – Page 7`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-8.html`,route:`/discover/blog-page-8`,title:`Finelo Blog – Page 8`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-page-9.html`,route:`/discover/blog-page-9`,title:`Finelo Blog – Page 9`,scripts:[`finelo-blog.js`]},{file:`finelo-blog-trading-bot-strategies.html`,route:`/discover/blog-trading-bot-strategies`,title:`Trading Bot Strategies: 7 Common Approaches and Their Tradeoffs | Finelo`,scripts:[`finelo-blog.js`,`finelo-blog-article.js`]},{file:`finelo-blog-trading.html`,route:`/discover/blog-trading`,title:`Trading | Finelo Blog`,scripts:[`finelo-blog.js`]},{file:`finelo-blog.html`,route:`/discover/blog`,title:`Finelo Blog`,scripts:[`finelo-blog.js`]},{file:`finelo-cancel.html`,route:`/discover/cancel`,title:`Cancel Finelo Subscription | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-challenges.html`,route:`/discover/challenges`,title:`Finelo | 28-Day Challenges`,scripts:[`finelo-home.js`]},{file:`finelo-community.html`,route:`/discover/community`,title:`Finelo Community`,scripts:[`finelo-home.js`]},{file:`finelo-compound.html`,route:`/calculators/compound`,title:`Compound Interest Calculator | Finelo`,scripts:[`finelo-home.js`,`finelo-compound.js`]},{file:`finelo-download.html`,route:`/discover/download`,title:`Download the Official Finelo App | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-home.html`,route:`/discover`,title:`Finelo – Learn AI Trading | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-investing-challenge.html`,route:`/discover/investing-challenge`,title:`28-Day Investing Challenge | Finelo`,scripts:[`finelo-home.js`]},{file:`finelo-login.html`,route:`/discover/login`,title:`Finelo Login and Account Help | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-media.html`,route:`/discover/media`,title:`Media Coverage | Finelo`,scripts:[`finelo-home.js`]},{file:`finelo-pricing.html`,route:`/discover/pricing`,title:`Finelo Cost, Subscription, and Billing | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-refund.html`,route:`/discover/refund`,title:`Finelo Refund Policy and Refund Request Help | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-retirement.html`,route:`/calculators/retirement`,title:`Retirement Calculator | Finelo`,scripts:[`finelo-home.js`,`finelo-planning.js`]},{file:`finelo-reviews.html`,route:`/discover/reviews`,title:`Finelo Reviews 2026: Is Finelo Legit?`,scripts:[`finelo-home.js`,`finelo-reviews.js`]},{file:`finelo-savings.html`,route:`/calculators/savings`,title:`Savings Goal Calculator | Finelo`,scripts:[`finelo-home.js`,`finelo-planning.js`]},{file:`finelo-social-security.html`,route:`/calculators/social-security`,title:`Social Security Calculator | Finelo`,scripts:[`finelo-home.js`,`finelo-social-security.js`]},{file:`finelo-support.html`,route:`/discover/support`,title:`Finelo Support and Customer Service | Local Preview`,scripts:[`finelo-home.js`]},{file:`finelo-tools.html`,route:`/discover/tools`,title:`Free Financial Planning Tools & Calculators | Finelo`,scripts:[`finelo-home.js`]},{file:`finelo-trading-challenge.html`,route:`/discover/trading-challenge`,title:`28-Day Trading Challenge | Finelo`,scripts:[`finelo-home.js`]}],S=`:root{--motion-fast:.14s;--motion-page:.22s;--motion-ease:cubic-bezier(.2,.8,.2,1)}:where(button,.button,.cta,.tool-card,.fn-option,.nav-item,.fb-cta){touch-action:manipulation;transition:transform var(--motion-fast,.14s) ease,background-color var(--motion-fast,.14s) ease,box-shadow var(--motion-fast,.14s) ease,border-color var(--motion-fast,.14s) ease}:where(button,.button,.cta,.fb-cta):not(:disabled):active{transform:scale(.97)}:where(.tool-card,.fn-option):active{transform:scale(.985)}:where(button,a,input,select,textarea):focus-visible{outline-offset:3px;outline:3px solid #9b94ff}:where(input,select,textarea){transition:border-color .15s,box-shadow .15s}:where(input,select,textarea):focus{box-shadow:0 0 0 3px #6258ed18}:where(button:disabled,[aria-disabled=true]){cursor:not-allowed}.nav-item.active svg{filter:drop-shadow(0 2px 4px #6258ed25)}.route-panel{animation:finelo-page-in var(--motion-page,.22s) var(--motion-ease,ease-out)}.fn-step{animation:.16s ease-out finelo-page-in}.fn-asset{opacity:0;transition:opacity .18s}.fn-asset[data-ready=true]{opacity:1}.fn-image-fallback{color:#6258ed;text-align:center;background:#efeeff;border-radius:16px;place-items:center;min-height:80px;padding:16px;display:grid}@keyframes finelo-page-in{0%{opacity:0;transform:translateY(7px)}to{opacity:1;transform:none}}@media (hover:hover) and (pointer:fine){:where(.button,.cta,.fb-cta):not(:disabled):hover{box-shadow:0 6px 18px #6258ed20}.tool-card:hover{transform:translateY(-2px)}}@media (prefers-reduced-motion:reduce){*,:before,:after{scroll-behavior:auto!important;transition:none!important;animation:none!important}:where(button,.button,.cta,.fb-cta,.tool-card,.fn-option):active{transform:none!important}}`,C={title:`Finelo – Learn AI Trading | Local Preview`,bodyClass:``,html:`
  <div class="ticker" role="region" aria-label="Example market quotes">
    <div class="ticker-track">
      <div class="ticker-copy">
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/AAPL.png" alt="" width="24" height="24"><b>AAPL</b><span>$277.18</span><em class="down">-0.64 (-0.23%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/NFLX.png" alt="" width="24" height="24"><b>NFLX</b><span>$96.71</span><em class="down">-0.08 (-0.08%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/NVDA.png" alt="" width="24" height="24"><b>NVDA</b><span>$184.97</span><em class="down">-0.59 (-0.32%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/META.png" alt="" width="24" height="24"><b>META</b><span>$656.96</span><em class="down">-9.82 (-1.49%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/TSLA.png" alt="" width="24" height="24"><b>TSLA</b><span>$445.17</span><em class="up">+5.67 (+1.27%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/AMZN.png" alt="" width="24" height="24"><b>AMZN</b><span>$227.92</span><em class="up">+1.04 (+0.46%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/MSFT.png" alt="" width="24" height="24"><b>MSFT</b><span>$492.02</span><em class="up">+1.06 (+0.22%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/PFE.png" alt="" width="24" height="24"><b>PFE</b><span>$25.33</span><em class="down">-0.43 (-1.70%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/JNJ.png" alt="" width="24" height="24"><b>JNJ</b><span>$199.96</span><em class="down">-1.64 (-0.82%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/GOOGL.png" alt="" width="24" height="24"><b>GOOGL</b><span>$317.08</span><em class="up">+3.36 (+1.06%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/V.png" alt="" width="24" height="24"><b>V</b><span>$315.08</span><em class="flat">0.00 (0.00%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/PG.png" alt="" width="24" height="24"><b>PG</b><span>$139.63</span><em class="up">+1.30 (+0.93%)</em></div>
      </div>
      <div class="ticker-copy" aria-hidden="true">
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/AAPL.png" alt="" width="24" height="24"><b>AAPL</b><span>$277.18</span><em class="down">-0.64 (-0.23%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/NFLX.png" alt="" width="24" height="24"><b>NFLX</b><span>$96.71</span><em class="down">-0.08 (-0.08%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/NVDA.png" alt="" width="24" height="24"><b>NVDA</b><span>$184.97</span><em class="down">-0.59 (-0.32%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/META.png" alt="" width="24" height="24"><b>META</b><span>$656.96</span><em class="down">-9.82 (-1.49%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/TSLA.png" alt="" width="24" height="24"><b>TSLA</b><span>$445.17</span><em class="up">+5.67 (+1.27%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/AMZN.png" alt="" width="24" height="24"><b>AMZN</b><span>$227.92</span><em class="up">+1.04 (+0.46%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/MSFT.png" alt="" width="24" height="24"><b>MSFT</b><span>$492.02</span><em class="up">+1.06 (+0.22%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/PFE.png" alt="" width="24" height="24"><b>PFE</b><span>$25.33</span><em class="down">-0.43 (-1.70%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/JNJ.png" alt="" width="24" height="24"><b>JNJ</b><span>$199.96</span><em class="down">-1.64 (-0.82%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/GOOGL.png" alt="" width="24" height="24"><b>GOOGL</b><span>$317.08</span><em class="up">+3.36 (+1.06%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/V.png" alt="" width="24" height="24"><b>V</b><span>$315.08</span><em class="flat">0.00 (0.00%)</em></div>
        <div class="quote"><img src="__FIN_BASE__assets/finelo-ticker/PG.png" alt="" width="24" height="24"><b>PG</b><span>$139.63</span><em class="up">+1.30 (+0.93%)</em></div>
      </div>
    </div>
  </div>
  <nav class="frame" aria-label="Home navigation">
    <a href="/discover"><img src="__FIN_BASE__assets/finelo-logo.svg" width="101" height="21" alt="Finelo"></a>
    <div class="nav-actions">
      <button class="nav-icon theme-button" type="button" aria-label="Switch to light theme">☼</button>
      <details class="nav-language"><summary aria-label="Language: English">EN</summary>
        <ul class="language-options" aria-label="Select language">
          <li><a href="/discover" lang="en" aria-current="page"><span aria-hidden="true">🇬🇧</span> English</a></li>
          <li><a href="https://finelo.com/es" lang="es"><span aria-hidden="true">🇪🇸</span> Español</a></li>
          <li><a href="https://finelo.com/fr" lang="fr"><span aria-hidden="true">🇫🇷</span> Français</a></li>
          <li><a href="https://finelo.com/pt" lang="pt"><span aria-hidden="true">🇵🇹</span> Português</a></li>
          <li><a href="https://finelo.com/de" lang="de"><span aria-hidden="true">🇩🇪</span> Deutsch</a></li>
          <li><a href="https://finelo.com/zh" lang="zh"><span aria-hidden="true">🇨🇳</span> 中文</a></li>
          <li><a href="https://finelo.com/ko" lang="ko"><span aria-hidden="true">🇰🇷</span> 한국어</a></li>
          <li><a href="https://finelo.com/ja" lang="ja"><span aria-hidden="true">🇯🇵</span> 日本語</a></li>
          <li><a href="https://finelo.com/ar" lang="ar"><span aria-hidden="true">ع</span> <bdi>العربية</bdi></a></li>
        </ul>
      </details>
      <a class="cta" href="/challenge">Get started</a>
      <button class="nav-icon nav-menu-button" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="finelo-navigation">☰</button>
    </div>
    <div id="finelo-navigation" class="nav-panel" hidden>
      <div class="finelo-mobile-menu-top">
        <a href="/discover"><img src="__FIN_BASE__assets/finelo-logo.svg" width="96" height="20" alt="Finelo"></a>
        <button type="button" class="nav-icon mobile-menu-close" aria-label="Close navigation menu">×</button>
      </div>
<details name="finelo-navigation"><summary>Product</summary><ul><li><a href="/discover/app">Explore Finelo</a></li><li><a href="/discover/download">Download App</a></li><li><a href="/discover/ai">Learn with AI</a></li><li><a href="/discover/ai-bot">AI Trading Bots</a></li><li><a href="/discover/pricing">Pricing</a></li></ul></details>
<details name="finelo-navigation"><summary>Challenges</summary><ul><li class="finelo-mobile-group-label">Classic Track</li><li><a href="/discover/trading-challenge">28-Day Trading Challenge</a></li><li><a href="/discover/investing-challenge">28-Day Investing Challenge</a></li><li class="finelo-mobile-group-label">AI Track</li><li><a href="/discover/ai-trader-challenge">28-Day AI Trader Challenge</a></li><li><a href="/discover/ai-investing-challenge">28-Day AI Investing Challenge</a></li><li><a href="/discover/challenges">Compare All Challenges →</a></li></ul></details>
<details name="finelo-navigation"><summary>Trust</summary><ul><li><a href="/discover/blog">Blog</a></li><li><a href="/discover/reviews">Reviews</a></li><li><a href="/discover/about">About Us</a></li><li><a href="/discover/community">Community</a></li><li><a href="/discover/media">Media Coverage</a></li><li><a href="/discover/support">Support Center</a></li></ul></details>
      <div class="nav-panel-actions"><a href="https://app.finelo.com/auth/signin">Log in</a><a class="cta" href="/challenge">Get started</a></div>
    </div>
  </nav>
  <main class="frame">
    <section class="hero">
      <div class="copy">
        <h1>Learn AI trading.<br>Grow your skills.<br><span>Build your confidence.</span></h1>
        <p>Build real trading skills with Finelo, a learning platform that has won industry awards for education.</p>
        <a class="cta" href="/challenge">Take the 1-minute quiz</a>
      </div>
      <img class="hero-art" src="__FIN_BASE__assets/finelo-home-hero.png" alt="AI trading practice preview with a bot and approve or decline controls">
    </section>
  </main>
  <section class="learner-story" aria-labelledby="learner-story-title">
    <div class="learner-portrait">
      <img src="__FIN_BASE__assets/finelo-home-learner.webp" alt="A smiling learner using his phone" width="370" height="460">
    </div>
    <div class="learner-copy">
      <h2 id="learner-story-title">Trusted by 1,500,000+ Learners Worldwide</h2>
      <p>Join our global community of empowered, confident learners.</p>
      <a class="cta" href="/challenge">Start learning <span aria-hidden="true">→</span></a>
    </div>
  </section>
  <section class="frame finelo-proof" aria-label="Learning outcomes and recognition">
    <article class="proof-intro">
      <div><h3>New to trading? Start with understanding it.</h3><p>Finelo breaks it down into short lessons you can follow at your own pace.</p></div>
      <img src="__FIN_BASE__assets/finelo-proof-app.svg" alt="Trading app preview" loading="lazy">
    </article>
    <article class="proof-award">
      <div><h3>America's Best Online Platform 2025</h3><p>Awarded #1 by Newsweek &amp; Statista for excellence in Education and Learning</p></div>
      <img src="__FIN_BASE__assets/finelo-proof-award.png" alt="Newsweek Badge" loading="lazy">
    </article>
    <article class="proof-lessons">
      <img src="__FIN_BASE__assets/finelo-proof-bull.svg" alt="Bull and Bear characters" loading="lazy">
      <h3>8,800,000+</h3><p>Lessons Completed!</p>
    </article>
    <article class="proof-rating">
      <div class="proof-rating-line"><img src="__FIN_BASE__assets/finelo-proof-star.svg" alt="" loading="lazy"><h3>4.5</h3></div>
      <img class="proof-stars" src="__FIN_BASE__assets/finelo-proof-stars.svg" alt="Stars" loading="lazy">
      <p>*Average rating based on public ratings from Google Play, App Store, and Trustpilot. Data retrieved August 21, 2026; ratings and counts may change.</p>
      <img class="proof-review" src="__FIN_BASE__assets/finelo-proof-review.svg" alt="Customer review highlight" loading="lazy">
    </article>
  </section>
  <section class="frame challenges" aria-labelledby="challenges-title">
    <div class="challenges-intro">
      <h2 id="challenges-title">Start Your Challenge<br>Build Real Market Skills</h2>
      <p>Our challenges combine 100+ mini, interactive lessons, quizzes and risk-free simulations to help you learn how markets work — at any age or experience level.</p>
    </div>
    <div class="challenge-grid">
      <article>
        <img src="__FIN_BASE__assets/finelo-home-trading.webp" alt="Trading Challenge" loading="lazy">
        <h3>Trading Challenge</h3>
        <p>Learn to trade with guided, hands-on practice using real market data and virtual funds — no real money at risk.</p>
        <a class="cta" href="/challenge">Start Trading</a>
      </article>
      <article>
        <img src="__FIN_BASE__assets/finelo-home-investing.webp" alt="Investing Challenge" loading="lazy">
        <h3>Investing Challenge</h3>
        <p>A step-by-step course for understanding how the stock market works and building long-term strategies.</p>
        <a class="cta" href="/challenge">Start Investing</a>
      </article>
    </div>
  </section>
  <section class="frame works" aria-labelledby="works-title">
    <div class="works-copy">
      <h2 id="works-title">How Finelo Works</h2>
      <p>Check out how we help you master market fundamentals.</p>
      <details name="how-finelo-works" class="work-learning" open>
        <summary><span>01.</span> Structured Learning</summary>
        <div class="work-text">
          <p>Explore 300+ bite-sized lessons available in 10 languages.</p>
          <ul><li>Learn smarter, not harder</li><li>Each lesson takes about 3 minutes</li><li>A few lessons a day (about 15 minutes total) build clear, practical skills</li></ul>
        </div>
      </details>
      <details name="how-finelo-works" class="work-practice">
        <summary><span>02.</span> Daily Practice</summary>
        <div class="work-text">
          <p>Put what you learn into practice.</p>
          <ul><li>Practice on our risk-free market simulator before trading for real.</li><li>Take daily trading challenges and earn points and badges along the way.</li><li>Build a learning habit with quizzes and daily challenges.</li></ul>
        </div>
      </details>
      <details name="how-finelo-works" class="work-support">
        <summary><span>03.</span> Long-term AI Support</summary>
        <div class="work-text">
          <p>Build lasting trading confidence, one lesson at a time.</p>
          <ul><li>Use built-in AI tools to analyze charts, patterns, and possible trading scenarios.</li><li>Get familiar with the market before putting real money at risk.</li></ul>
        </div>
      </details>
    </div>
    <div class="works-art" aria-hidden="true">
      <img class="work-learning-art" src="__FIN_BASE__assets/finelo-works-learning.svg" alt="" loading="lazy">
      <img class="work-practice-art" src="__FIN_BASE__assets/finelo-works-practice.svg" alt="" loading="lazy">
      <img class="work-support-art" src="__FIN_BASE__assets/finelo-works-support.svg" alt="" loading="lazy">
    </div>
  </section>
  <section class="frame bot-showcase" aria-labelledby="bot-showcase-title">
    <div>
      <p class="bot-kicker">New in Finelo</p>
      <h2 id="bot-showcase-title">AI trading bots that spot trading opportunities for you</h2>
      <ol>
        <li><span>01</span><div><h3>Bot scans</h3><p>Watches the markets around the clock for matching opportunities.</p></div></li>
        <li><span>02</span><div><h3>You review</h3><p>See each opportunity explained in plain language before you act.</p></div></li>
        <li><span>03</span><div><h3>You approve</h3><p>Approve or decline in one tap — you stay in control.</p></div></li>
      </ol>
      <a class="cta" href="/challenge">Try AI bots</a>
    </div>
    <div class="bot-phone" aria-label="AI bot preview">
      <p class="phone-time">9:41</p>
      <strong>AI Capital Guard</strong>
      <p class="phone-muted">Watching AAPL · NFLX · MSFT</p>
      <div class="phone-context">
        <strong>WHY THIS TRADE</strong>
        <p>AAPL dropped 5% this week — bot detects a reversal pattern with 78% bounce rate from this support zone.</p>
        <small>Past performance does not guarantee future results. AI-generated signals involve substantial risk and are not financial advice.</small>
      </div>
      <div class="phone-signal">
        <strong>🤖 AAPL Matches Bot's Strategy</strong>
        <p class="phone-muted">Expires at 12:32</p>
        <dl><div><dt>Bot</dt><dd>AI Balanced Alpha</dd></div><div><dt>Entry</dt><dd>$182.40</dd></div><div><dt>Stop</dt><dd>$178.65</dd></div><div><dt>Target</dt><dd>$189.32</dd></div></dl>
        <p class="phone-muted" role="status">Tap to try</p>
        <div class="phone-actions"><button type="button" data-choice="Declined">Decline</button><button type="button" data-choice="Approved">Approve ✓</button></div>
      </div>
      <div class="phone-tabs" aria-hidden="true">Home <b>AI Bots</b> Tools Learn Profile</div>
    </div>
  </section>
  <section class="frame video-reviews" aria-labelledby="video-reviews-title">
    <h2 id="video-reviews-title">Millions Learn With Finelo - Here's Why</h2>
    <p>Real people around the world use Finelo to understand the markets through simple lessons, safe practice, and guided support.</p>
    <a href="https://www.youtube.com/@FineloApp" target="_blank" rel="noopener noreferrer">Learn more with Finelo &gt;</a>
    <div class="video-rail" id="finelo-video-rail" tabindex="0" role="region" aria-label="Finelo videos">
      <a class="video-card" href="https://www.youtube.com/watch?v=hDj6cY1MQiM" target="_blank" rel="noopener noreferrer" aria-label="Finelo Challenge Overview (opens in a new tab)">
        <img src="__FIN_BASE__assets/finelo-review-overview.jpg" alt="" loading="lazy">
        <span>Finelo Challenge Overview</span><span class="play-icon" aria-hidden="true">►</span>
      </a>
      <a class="video-card" href="https://www.youtube.com/watch?v=FDglen14Dxw" target="_blank" rel="noopener noreferrer" aria-label="Finelo Review (opens in a new tab)">
        <img src="__FIN_BASE__assets/finelo-review-review.jpg" alt="" loading="lazy">
        <span>Finelo Review</span><span class="play-icon" aria-hidden="true">►</span>
      </a>
      <a class="video-card" href="https://www.youtube.com/watch?v=7VVSsSA5f-0" target="_blank" rel="noopener noreferrer" aria-label="Finelo Success Story (opens in a new tab)">
        <img src="__FIN_BASE__assets/finelo-review-story.jpg" alt="" loading="lazy">
        <span>Finelo Success Story</span><span class="play-icon" aria-hidden="true">►</span>
      </a>
      <a class="video-card" href="https://www.youtube.com/watch?v=UiDLs_F8n6Q" target="_blank" rel="noopener noreferrer" aria-label="Trading Challenge Intro (opens in a new tab)">
        <img src="__FIN_BASE__assets/finelo-review-intro.jpg" alt="" loading="lazy">
        <span>Trading Challenge Intro</span><span class="play-icon" aria-hidden="true">►</span>
      </a>
    </div>
    <div class="video-controls">
      <button type="button" data-direction="-1" aria-label="Previous videos" aria-controls="finelo-video-rail">←</button>
      <button type="button" data-direction="1" aria-label="Next videos" aria-controls="finelo-video-rail">→</button>
    </div>
    <p class="video-disclaimer">* These users were given access to the materials for free and were compensated for their feedback.</p>
  </section>
  <section class="frame faq" aria-labelledby="faq-title">
    <div class="faq-panel">
      <div>
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <p>Here are answers to some common questions. If you have any other questions, please contact us!</p>
      </div>
      <div class="faq-list">
        <details name="finelo-home-faq"><summary>What is Finelo?</summary><p>Finelo is an award-winning learning app for trading, investing, and finance. It offers accessible, bite-sized lessons designed for beginners.</p></details>
        <details name="finelo-home-faq"><summary>How do I sign up for Finelo?</summary><p>Just click &#x27;Take the 1-minute quiz,&#x27; answer a few quick questions, and set up your account.</p></details>
        <details name="finelo-home-faq"><summary>Is Finelo beginner-friendly?</summary><p>Absolutely! Finelo was designed for learners of all levels. Our lessons are structured to give you a comprehensive understanding of trading and investing basics.</p></details>
        <details name="finelo-home-faq"><summary>How can I cancel my subscription?</summary><p>Log in to your account, go to the &quot;Subscription&quot; section, and follow the cancellation steps. If you need help, our support team is always here to assist!</p></details>
      </div>
    </div>
  </section>
  <section class="frame final-challenge" aria-labelledby="final-challenge-title">
    <div class="final-copy">
      <p class="final-kicker">1-Minute Quiz</p>
      <h2 id="final-challenge-title">Start Your 28-Day Trading Challenge</h2>
      <p>Learn the basics, practice safely, and build your trading skills step-by-step.</p>
      <a class="cta" href="/challenge">Start Now</a>
    </div>
    <picture class="final-bg">
      <source media="(max-width: 767px)" srcset="__FIN_BASE__assets/finelo-closing-mobile-bg.svg">
      <img src="__FIN_BASE__assets/finelo-closing-desktop-bg.svg" alt="" loading="lazy">
    </picture>
    <picture class="final-art">
      <source media="(max-width: 767px)" srcset="__FIN_BASE__assets/finelo-closing-mobile-art.svg">
      <img src="__FIN_BASE__assets/finelo-closing-desktop-art.svg" alt="" loading="lazy">
    </picture>
  </section>
  <footer class="frame home-footer">
    <div class="footer-columns" role="navigation" aria-label="Footer navigation">
      <div><h3>Product</h3><ul><li><a href="/discover">Home</a></li><li><a href="/challenge">Start Finelo</a></li><li><a href="/discover/app">App</a></li><li><a href="/discover/download">Download App</a></li><li><a href="/discover/ai">AI</a></li><li><a href="/discover/ai-bot">AI bots</a></li><li><a href="/discover/pricing">Pricing</a></li><li><a href="/discover/login">Log in</a></li></ul></div>
      <div><h3>Learn &amp; Trust</h3><ul><li><a href="/discover/challenges">28-Day Challenges</a></li><li><a href="/discover/tools">Financial Tools</a></li><li><a href="https://finelo.com/glossary">Glossary</a></li><li><a href="/discover/reviews">Reviews</a></li><li><a href="/discover/about">About Us</a></li><li><a href="/discover/media">Media Coverage</a></li><li><a href="/discover/blog">Blog</a></li><li><a href="/discover/community">Community</a></li></ul></div>
      <div><h3>Trading education</h3><ul><li><a href="https://finelo.com/learn/ai-trading-guides">AI Trading Guides</a></li><li><a href="https://finelo.com/learn/what-is-ai-trading">What is AI trading?</a></li><li><a href="https://finelo.com/learn/how-to-start-trading">How to start trading</a></li><li><a href="https://finelo.com/learn/what-is-automated-trading">Automated trading</a></li><li><a href="https://finelo.com/learn/what-are-ai-trading-signals">AI trading signals</a></li><li><a href="https://finelo.com/learn/can-you-start-investing-with-20-dollars">Investing with $20</a></li><li><a href="/discover/blog-ai-trading-bots-for-beginners">How Do AI Trading Bots Work?</a></li></ul></div>
      <div><h3>Support &amp; Legal</h3><ul><li><a href="/discover/support">Support</a></li><li><a href="https://support.finelo.com/en/support/home?utm_source=website">Support Center</a></li><li><a href="/discover/bank-charge">Why Was I Charged?</a></li><li><a href="/discover/cancel">Cancel Subscription</a></li><li><a href="/discover/refund">Refund Policy</a></li><li><a href="https://legal.finelo.com/privacy">Privacy Policy</a></li><li><a href="https://legal.finelo.com/terms">Terms and Conditions</a></li><li><a href="https://legal.finelo.com/disclaimer">Disclaimer</a></li><li><a href="https://legal.finelo.com/subscription">Subscription Terms</a></li></ul></div>
    </div>
    <div class="footer-extras">
      <div><h3>Social media</h3><ul>
<li><a href="https://www.instagram.com/finelo.app/">Instagram</a></li><li><a href="https://www.linkedin.com/company/fineloapp">LinkedIn</a></li><li><a href="https://www.reddit.com/r/fineloapp/">Reddit</a></li><li><a href="https://www.youtube.com/@FineloApp">YouTube</a></li>
      </ul></div>
      <div><h3>Community</h3><p>A place where people interested in trading and AI trading can learn, keep up with the news, and ask questions with others. All levels welcome.</p>
      <a href="https://www.facebook.com/groups/learnaitrading">Join the Facebook group →</a></div>
    </div>
    <div class="footer-disclaimer"><h3>Disclaimer</h3><p>Finelo is an educational platform only, we do not provide financial or investment advice. Investing involves financial risks, including the loss of your investment. Historical market returns are not indicative of future results. Profit results are not typical and may vary. Users are solely responsible for their financial choices.</p></div>
  </footer>
`,css:`*{box-sizing:border-box}
.fn-body{margin:0;background:#09081b;color:white;font:16px/1.5 Inter,system-ui,sans-serif}
.frame{width:min(100% - 80px,1280px);margin-inline:auto}
.ticker{height:37px;margin-bottom:8px;display:flex;align-items:center;overflow:hidden;white-space:nowrap;background:#09081b;border-bottom:1px solid #ffffff20;font-size:14px;color:#dddbed}
.ticker-track{display:flex;width:max-content;animation:finelo-quotes 70s linear infinite}
.ticker-copy{display:flex;gap:32px;padding-right:32px;flex:none}
.quote{display:flex;align-items:center;gap:12px;flex:none}
.quote img{display:block}
.quote b{color:#fff}
.quote em{font-style:normal}
.quote .down{color:#f88c9e}
.quote .up{color:#6edcb5}
@keyframes finelo-quotes{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){
 .ticker{overflow-x:auto}
 .ticker-track{animation:none}
 .ticker-copy[aria-hidden=true]{display:none}
}
nav{min-height:88px;display:flex;align-items:center;justify-content:space-between;gap:20px}
nav img{display:block}
.cta{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px 20px;border-radius:8px;color:white;background:#777ef7;font-weight:700;text-decoration:none}
.cta:hover{background:#656de3}
.hero{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;gap:24px;padding:33px 24px 44px 0;background:radial-gradient(ellipse at 77% 55%,#1c1851,transparent 58%)}
.hero h1{margin:0;font-size:clamp(32px,3.754vw,56px);font-weight:900;line-height:1.1;letter-spacing:-.025em}
.hero h1 span{color:#9796ff}
.hero p{max-width:440px;margin:24px 0 40px}
.hero .cta{width:min(100%,288px)}
.hero-art{width:100%;aspect-ratio:1199/1312;object-fit:contain;display:block}
@media(max-width:720px){
 .frame{width:calc(100% - 32px)}
 nav{min-height:64px}
 .hero{grid-template-columns:1fr;text-align:center;padding:28px 0;gap:24px}
 .hero p{margin:18px auto 24px}
 .hero-art{width:min(100%,460px);margin-inline:auto}
}

.learner-story{width:min(100% - 32px,1328px);margin:60px auto 64px;min-height:400px;display:grid;grid-template-columns:42% 58%;align-items:center;overflow:hidden;border-radius:32px;background:linear-gradient(115deg,#7875ee,#625bd6 72%)}
.learner-portrait{height:400px;position:relative;background:radial-gradient(ellipse at 40% 75%,#948df7 0%,transparent 65%)}
.learner-portrait img{position:absolute;top:20px;left:7px;width:min(90%,370px);height:auto}
.learner-copy{padding:32px 16px}
.learner-copy h2{font-size:clamp(28px,2.8vw,44px);line-height:1.35;font-weight:800;max-width:520px;margin:0}
.learner-copy p{font-size:18px;line-height:27px;max-width:480px;margin:20px 0 28px}
.learner-copy .cta{width:min(100%,240px);min-height:52px;gap:12px;border-radius:12px;background:white;color:#5145bd;font-size:17px}
.learner-copy .cta:hover{background:#f3f0ff}
@media(max-width:720px){
 .learner-story{grid-template-columns:1fr;margin-top:32px;text-align:center}
 .learner-copy{grid-row:1;padding:28px 20px 0}
 .learner-portrait{height:265px}
 .learner-portrait img{left:50%;transform:translateX(-50%);width:min(72%,270px)}
}

.challenges{margin-block:72px}
.challenges-intro{display:grid;grid-template-columns:1fr 1.07fr;gap:16px;align-items:center;margin-bottom:32px}
.challenges-intro h2{font-size:clamp(29px,4.38vw,48px);line-height:1.3;margin:0;font-weight:800;letter-spacing:-.025em}
.challenges-intro p{font-size:18px;line-height:28px;margin:0}
.challenge-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.challenge-grid article{display:flex;flex-direction:column;padding:16px;border:1px solid #ffffff24;border-radius:20px;background:#151329}
.challenge-grid img{display:block;width:100%;aspect-ratio:2.2;object-fit:cover;border-radius:12px}
.challenge-grid h3{font-size:24px;line-height:32px;margin:16px 0 8px}
.challenge-grid p{font-size:14px;line-height:20px;margin:0 0 16px}
.challenge-grid .cta{min-height:44px;margin-top:auto}
@media(max-width:720px){
 .challenges{margin-block:48px}
 .challenges-intro,.challenge-grid{grid-template-columns:1fr}
}

.works{display:grid;grid-template-columns:1fr 1fr;gap:40px;padding:0 40px;margin-block:72px;align-items:center}
.works h2{font-size:clamp(32px,4vw,44px);line-height:1.15;margin:0}
.works-copy>p{margin:12px 0 24px;color:#dedbed}
.works details{border:1px solid #ffffff30;border-radius:22px;margin:0 0 12px}
.works summary{list-style:none;cursor:pointer;display:flex;gap:12px;align-items:center;padding:16px 20px;min-height:79px;font-size:clamp(19px,2.3vw,25px);font-weight:700}
.works summary::-webkit-details-marker{display:none}
.works summary span{color:#9796ff}
.works summary::after{content:"+";margin-left:auto;color:#9796ff}
.works details[open] summary::after{content:"−"}
.work-text{padding:0 20px 16px;color:#dedbed}
.work-text p{margin:0}
.work-text ul{padding-left:22px;margin:10px 0 0}
.works-art{display:grid;place-items:center;min-height:340px}
.works-art img{display:none;max-width:100%;max-height:520px}
.works:has(.work-learning[open]) .work-learning-art,
.works:has(.work-practice[open]) .work-practice-art,
.works:has(.work-support[open]) .work-support-art{display:block}
@media(max-width:720px){
 .works{grid-template-columns:1fr;gap:12px;padding:0;margin-block:48px}
 .works-art{min-height:0}
 .works-art img{max-height:310px}
}
nav{position:relative;z-index:2}
.nav-actions,.nav-panel-actions{display:flex;align-items:center;gap:12px}
.nav-icon,.nav-language summary{display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:10px;background:#ffffff12;color:inherit;font:inherit;cursor:pointer}
.nav-language{position:relative}
.nav-language summary{list-style:none}
.nav-language summary::-webkit-details-marker{display:none}
.language-options{position:absolute;top:48px;right:0;z-index:2;width:216px;max-height:min(420px,70vh);overflow:auto;margin:0;padding:8px;list-style:none;background:#111022;border:1px solid #ffffff26;border-radius:16px;box-shadow:0 16px 40px #0007}
.nav-language a{display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:8px;color:#fff;text-decoration:none}
.nav-language a:is(:hover,:focus-visible,[aria-current=page]){background:#ffffff16}
.nav-language a span{width:24px;text-align:center}
.nav-panel{position:absolute;right:0;top:calc(100% - 8px);width:min(100%,390px);padding:16px;background:#17142b;border:1px solid #ffffff26;border-radius:20px;box-shadow:0 16px 40px #0007;color:white}
.nav-panel details{padding:10px 8px;border-bottom:1px solid #ffffff1a}
.nav-panel summary{cursor:pointer;font-weight:700}
.nav-panel ul{list-style:none;padding:0;margin:10px 0 0;display:grid;gap:4px}
.nav-panel a:not(.cta){color:inherit;text-decoration:none}
.nav-panel a:not(.cta):hover{text-decoration:underline}
.nav-panel li a{display:block;padding:4px 0}
.nav-panel-actions{justify-content:space-between;padding:12px 8px 0}
.light{background:#fafafc;color:#12101f}
.light .ticker{background:#fafafc;border-color:#12101f20;color:#565367}
.light .quote b{color:#12101f}
.light .quote .down{color:#a82e47}
.light .quote .up{color:#166c50}
.light .hero{background:radial-gradient(ellipse at 77% 55%,#e8e5ff,transparent 58%)}
.light .hero h1 span,.light .works summary span{color:#6255d9}
.light .nav-icon,.light .nav-language summary{background:#5145bd16}
.light .learner-story,.light .challenge-grid article{color:white}
.light .works-copy>p,.light .work-text{color:#3b3655}
.light .works details{border-color:#5145bd35}
@media(max-width:440px){.nav-actions{gap:6px}.nav-icon,.nav-language summary{width:32px}.nav-actions .cta{padding-inline:8px;font-size:14px}}
.faq{margin-bottom:224px}
.faq-panel{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px;padding:48px 24px;border-radius:32px;background:#1c1a24}
.faq-panel,.faq details{box-shadow:inset 0 1px #ffffff21,0 4px #493e853d,0 14px 28px #0003}
.faq h2{margin:0 0 16px;font-size:52px;line-height:1.1}
.faq-panel>div>p{font-size:18px;font-weight:500;line-height:28px;max-width:468px;margin:0}
.faq-list{display:grid;align-content:start;gap:12px}
.faq details{border:1px solid #1d1d30;border-radius:12px;background:#12101f}
.faq summary{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:20px 24px;font-size:20px;line-height:28px;font-weight:600;cursor:pointer}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";color:#777ef7}
.faq details[open] summary::after{content:"−"}
.faq details p{padding:0 24px 24px;margin:0;color:#ffffffb3}
.light .faq-panel{background:#f4f1fc}
.light .faq details{background:#fff;border-color:#5145bd35}
.light .faq details p{color:#3b3655}
@media(max-width:1023px){.faq{margin-bottom:64px}.faq-panel{grid-template-columns:1fr}}
@media(max-width:720px){.faq h2{font-size:36px}}
.final-challenge{position:relative;display:flex;justify-content:flex-end;align-items:center;isolation:isolate;overflow:hidden;min-height:384px;padding:40px;margin-bottom:64px;border-radius:24px;background:linear-gradient(to bottom,#7c3aed,#3730a340 52%,#0f172a00),radial-gradient(at 15% 0,#ffffff38,transparent 65%),linear-gradient(145deg,#777ef7,#5653fe);color:white}
.final-copy{position:relative;z-index:1;width:min(100%,528px)}
.final-challenge h2{font-size:48px;line-height:1.2;margin:4px 0 12px}
.final-challenge p{margin:0 0 24px;font-size:18px;line-height:28px;font-weight:500;color:#ffffffe6}
.final-challenge .final-kicker{margin:0;font-size:14px;line-height:20px;font-weight:700;color:white}
.final-challenge .cta{width:288px;height:48px;padding:0;border-radius:8px;border-bottom:3px solid #d4d4d4;background:#fff;color:#6366f1;font-weight:700}
.final-challenge picture{position:absolute;display:block;pointer-events:none}
.final-challenge img{display:block;width:100%;height:auto}
.final-bg{width:min(100%,415px);right:0;top:0}
.final-art{width:500px;bottom:0;left:40px}
@media(max-width:767px){
 .final-challenge{width:calc(100% - 32px);min-height:620px;align-items:flex-start;justify-content:flex-start;padding:40px 16px 24px;margin-bottom:96px;border-radius:16px;background:radial-gradient(at 15% 0,#ffffff38,transparent 65%),linear-gradient(145deg,#777ef7,#5653fe)}
 .final-copy{width:100%;max-width:none}
 .final-challenge .final-kicker{text-transform:uppercase;letter-spacing:.12em}
 .final-challenge h2{font-size:32px;font-weight:800;line-height:1.1;margin:16px 0}
 .final-challenge p{line-height:1.45;font-weight:400}
 .final-challenge .cta{width:100%;border-bottom-color:#ffffffb3;background:linear-gradient(165deg,#fff 20%,#ececff);box-shadow:0 12px 32px #0003}
 .final-bg{width:100%;left:0}
 .final-art{width:min(100%,540px);left:50%;transform:translateX(-50%)}
}
.home-footer{border-top:1px solid #ffffff30;padding:36px 0;color:#dedbed;font-size:14px}
.footer-columns{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px}
.home-footer h3{color:white;font-size:16px;margin:0 0 12px}
.home-footer ul{list-style:none;padding:0;margin:0;display:grid;gap:7px}
.home-footer a{color:inherit;text-decoration:none}
.home-footer a:hover{text-decoration:underline}
.footer-extras{display:grid;grid-template-columns:1fr 2fr;gap:24px;margin-top:32px}
.footer-disclaimer{margin-top:28px;border-top:1px solid #ffffff26;padding-top:24px}
.home-footer p{margin:0 0 10px}
.light .home-footer,.light .footer-disclaimer{border-color:#5145bd35;color:#3b3655}
.light .home-footer h3{color:#17142b}
@media(max-width:720px){
 .footer-columns{grid-template-columns:repeat(2,minmax(0,1fr))}
 .footer-extras{grid-template-columns:1fr}
}
.bot-showcase{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;margin-block:72px;padding:40px;border-radius:28px;background:radial-gradient(ellipse at 75% 50%,#211a52,transparent 65%)}
.bot-showcase h2{font-size:clamp(30px,4vw,46px);line-height:1.15;margin:0}
.bot-kicker{color:#9796ff;font-size:14px;font-weight:700;margin:0 0 12px}
.bot-showcase ol{list-style:none;padding:0;margin:24px 0;display:grid;gap:18px}
.bot-showcase li{display:flex;gap:12px}
.bot-showcase li>span{color:#9796ff;font-weight:750}
.bot-showcase h3,.bot-showcase li p{margin:0}
.bot-phone{width:min(100%,310px);margin:auto;padding:18px;border-radius:30px;border:4px solid #3f375e;background:#111026;color:white;font-size:13px;box-shadow:0 16px 50px #0005}
.bot-phone p{margin:3px 0 8px}
.phone-time,.phone-muted{color:#cbc5e5}
.phone-context,.phone-signal{margin:12px 0;padding:12px;background:#24203e;border-radius:12px}
.phone-context small{color:#cbc5e5}
.phone-signal dl{margin:10px 0;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.phone-signal dt{color:#cbc5e5;font-size:12px}
.phone-signal dd{margin:0;font-weight:700}
.phone-actions,.phone-tabs{display:flex;justify-content:space-between;gap:6px}
.phone-actions button{flex:1;padding:8px 4px;border:1px solid #aaa1ee;border-radius:8px;background:transparent;color:white;cursor:pointer}
.phone-actions button+button{background:#5653fe}
.phone-tabs{font-size:11px;color:#cbc5e5}
.light .bot-showcase{background:#eeebff}
.light .bot-kicker,.light .bot-showcase li>span{color:#5145bd}
@media(max-width:720px){.bot-showcase{grid-template-columns:1fr;padding:24px;margin-block:48px}}
.video-reviews{margin-block:72px}
.video-reviews h2{font-size:clamp(30px,4.1vw,46px);line-height:1.15;margin:0 0 12px}
.video-reviews>p{margin:0 0 12px;color:#dedbed}
.video-reviews>a{color:#a9a6ff;font-weight:700}
.video-rail{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:12px;margin-top:24px;scrollbar-color:#625bd6 #17142b}
.video-card{position:relative;flex:0 0 min(100%,340px);height:260px;overflow:hidden;border-radius:16px;scroll-snap-align:start;display:flex;align-items:end;padding:16px;color:white;text-decoration:none;background:#17142b}
.video-card img,.video-card::after{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.video-card::after{content:"";background:linear-gradient(transparent 55%,#09081bee)}
.video-card span{position:relative;z-index:1;font-weight:700}
.video-card .play-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#09081bbb;border-radius:50%;padding:12px 14px}
.video-controls{display:flex;justify-content:flex-end;gap:10px;margin:12px 0}
.video-controls button{width:42px;height:42px;border:1px solid #9796ff;border-radius:50%;background:none;color:inherit;font-size:20px;cursor:pointer}
.video-reviews .video-disclaimer{font-size:13px}
.light .video-reviews>p{color:#3b3655}
.light .video-reviews>a{color:#5145bd}
.finelo-proof{display:grid;grid-template-columns:2.04fr 1fr 1fr;grid-template-rows:minmax(320px,auto) minmax(374px,auto);gap:24px;margin-block:80px}
.finelo-proof article{min-width:0;overflow:hidden;border-radius:21px;padding:20px;color:white;background:#1c1a24}
.finelo-proof h3{font-size:clamp(24px,3vw,34px);line-height:1.15;margin:0 0 12px}
.finelo-proof p{margin:0}
.finelo-proof img{display:block;max-width:100%;height:auto}
.finelo-proof .proof-intro{grid-row:span 2;display:flex;flex-direction:column;justify-content:space-between;gap:24px;background:#7076e6;padding:32px 32px 0}
.proof-intro img{width:100%;margin:auto auto 0}
.finelo-proof .proof-award{grid-column:span 2;display:grid;grid-template-columns:minmax(0,1fr) 42%;gap:20px;align-items:center;padding:30px}
.proof-award img{max-height:261px;margin:auto;object-fit:contain}
.finelo-proof .proof-lessons{display:flex;flex-direction:column;justify-content:space-between;gap:14px}
.proof-lessons img{width:100%;max-height:140px}
.proof-lessons h3{margin:auto 0 0}
.finelo-proof .proof-rating{display:flex;flex-direction:column;gap:8px;background:#6f76e5}
.proof-rating-line{display:flex;align-items:center;gap:10px}
.proof-rating-line h3{margin:0}
.proof-rating-line img{width:52px}
.proof-stars{max-height:25px}
.proof-rating p{font-size:11px;line-height:1.3}
.proof-review{width:100%;margin:auto auto -20px}
@media(max-width:760px){
 .finelo-proof{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:auto;margin-block:48px;gap:12px}
 .finelo-proof .proof-intro{grid-column:span 2;grid-row:auto;padding:24px 20px 0}
 .proof-intro img{max-height:360px}
 .finelo-proof .proof-award{padding:20px;gap:12px}
 .finelo-proof .proof-lessons,.finelo-proof .proof-rating{padding:12px}
 .finelo-proof h3{font-size:clamp(18px,5vw,28px)}
}
@media(max-width:720px){
 nav.frame{width:calc(100% - 8px);min-height:88px;padding-inline:12px}
 .hero{text-align:left;padding:24px 0 40px;gap:48px}
 .hero h1{font-size:clamp(28px,7.8vw,41px);line-height:1.15}
 .hero p{margin:24px 0;font-size:16px;line-height:24px}
 .hero .cta{width:100%;min-height:48px}
 .hero-art{width:calc(100% + 32px);max-width:none;margin-inline:-16px}
}
.finelo-mobile-menu-top,.finelo-mobile-group-label{display:none}
@media(max-width:720px){
 nav.frame{padding-inline:16px}
 .nav-actions .nav-language{display:none}
 .nav-actions .nav-icon{width:40px}
 .nav-actions .cta{min-width:101px}
 .nav-panel{position:fixed;inset:0;width:100%;padding:88px 24px 24px;border:0;border-radius:0;background:#09081b;overflow-y:auto;overscroll-behavior:contain}
 .finelo-mobile-menu-top{display:flex;position:fixed;inset:0 0 auto;z-index:1;align-items:center;justify-content:space-between;height:88px;padding:0 24px;background:#09081b}
 .nav-panel details{padding:24px 0 0;border:0}
 .nav-panel summary{display:block;list-style:none;pointer-events:none;line-height:24px}
 .nav-panel summary::-webkit-details-marker{display:none}
 .nav-panel ul{margin-top:8px;gap:4px}
 .nav-panel li a{min-height:44px;padding:10px 0}
 .nav-panel .finelo-mobile-group-label{display:block;color:#b9b8fe;font-size:13px;padding:4px 0}
 .fn-body:has(.nav-menu-button[aria-expanded=true]){overflow:hidden}
}
`,scripts:[`finelo-home.js`]},w={title:`Finelo AI | Learn to Trade and Invest with AI`,bodyClass:`reviews`,html:`
  <nav class="frame" aria-label="Home navigation">
    <a href="/discover"><img src="__FIN_BASE__assets/finelo-logo.svg" width="101" height="21" alt="Finelo"></a>
    <div class="nav-actions">
      <button class="nav-icon theme-button" type="button" aria-label="Switch to light theme">☼</button>
      <details class="nav-language"><summary aria-label="Language: English">EN</summary>
        <ul class="language-options" aria-label="Select language">
          <li><a href="/discover" lang="en" aria-current="page"><span aria-hidden="true">🇬🇧</span> English</a></li>
          <li><a href="https://finelo.com/es" lang="es"><span aria-hidden="true">🇪🇸</span> Español</a></li>
          <li><a href="https://finelo.com/fr" lang="fr"><span aria-hidden="true">🇫🇷</span> Français</a></li>
          <li><a href="https://finelo.com/pt" lang="pt"><span aria-hidden="true">🇵🇹</span> Português</a></li>
          <li><a href="https://finelo.com/de" lang="de"><span aria-hidden="true">🇩🇪</span> Deutsch</a></li>
          <li><a href="https://finelo.com/zh" lang="zh"><span aria-hidden="true">🇨🇳</span> 中文</a></li>
          <li><a href="https://finelo.com/ko" lang="ko"><span aria-hidden="true">🇰🇷</span> 한국어</a></li>
          <li><a href="https://finelo.com/ja" lang="ja"><span aria-hidden="true">🇯🇵</span> 日本語</a></li>
          <li><a href="https://finelo.com/ar" lang="ar"><span aria-hidden="true">ع</span> <bdi>العربية</bdi></a></li>
        </ul>
      </details>
      <a class="cta" href="/challenge">Get started</a>
      <button class="nav-icon nav-menu-button" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="finelo-navigation">☰</button>
    </div>
    <div id="finelo-navigation" class="nav-panel" hidden>
      <div class="finelo-mobile-menu-top">
        <a href="/discover"><img src="__FIN_BASE__assets/finelo-logo.svg" width="96" height="20" alt="Finelo"></a>
        <button type="button" class="nav-icon mobile-menu-close" aria-label="Close navigation menu">×</button>
      </div>
<details name="finelo-navigation"><summary>Product</summary><ul><li><a href="/discover/app">Explore Finelo</a></li><li><a href="/discover/download">Download App</a></li><li><a href="/discover/ai">Learn with AI</a></li><li><a href="/discover/ai-bot">AI Trading Bots</a></li><li><a href="/discover/pricing">Pricing</a></li></ul></details>
<details name="finelo-navigation"><summary>Challenges</summary><ul><li class="finelo-mobile-group-label">Classic Track</li><li><a href="/discover/trading-challenge">28-Day Trading Challenge</a></li><li><a href="/discover/investing-challenge">28-Day Investing Challenge</a></li><li class="finelo-mobile-group-label">AI Track</li><li><a href="/discover/ai-trader-challenge">28-Day AI Trader Challenge</a></li><li><a href="/discover/ai-investing-challenge">28-Day AI Investing Challenge</a></li><li><a href="/discover/challenges">Compare All Challenges →</a></li></ul></details>
<details name="finelo-navigation"><summary>Trust</summary><ul><li><a href="/discover/blog">Blog</a></li><li><a href="/discover/reviews">Reviews</a></li><li><a href="/discover/about">About Us</a></li><li><a href="/discover/community">Community</a></li><li><a href="/discover/media">Media Coverage</a></li><li><a href="/discover/support">Support Center</a></li></ul></details>
      <div class="nav-panel-actions"><a href="https://app.finelo.com/auth/signin">Log in</a><a class="cta" href="/challenge">Get started</a></div>
    </div>
  </nav><main class="frame challenge-main trader-page">
<header class="challenge-hero"><div><nav aria-label="Breadcrumb"><a href="/discover">Home</a> / Finelo AI</nav><h1>Finelo AI: Learn to Trade and Invest with AI</h1><p>Build market understanding with daily lessons, AI tools, and practice using virtual funds.</p><a class="cta" href="/challenge">Start the AI Trader Challenge</a></div><img src="__FIN_BASE__assets/finelo-ai-overview-hero.png" alt="Finelo skill progress"></header>
<nav class="challenge-toc" aria-label="On this page"><a href="#learning-paths">Two AI Challenges ↗</a><a href="#analysis-tools">Market Analysis Tools ↗</a><a href="#strategy-presets">AI Strategy Bot Presets ↗</a><a href="#questions">Frequently Asked Questions ↗</a></nav>
<section><h2>What Is Finelo AI?</h2><p>Finelo AI is the AI-assisted learning track inside Finelo, designed for beginners who want structured practice with AI tools and example trading strategies.</p></section>
<section id="learning-paths"><h2>Two AI Challenges</h2><div class="challenge-grid"><article><h3>28-Day AI Trader Challenge</h3><p>Learn active trading and short- to medium-term analysis with AI as a practice partner.</p><a href="/discover/ai-trader-challenge">Explore the 28-Day AI Trader Challenge →</a></article><article><h3>28-Day AI Investing Challenge</h3><p>Research ideas and build a long-term investment framework with AI support.</p><a href="/discover/ai-investing-challenge">Explore the 28-Day AI Investing Challenge →</a></article></div><p><a href="/discover/challenges">Finelo 28-Day Challenges →</a></p></section>
<section id="analysis-tools"><h2>Finelo AI Tools for Market Analysis</h2><div class="challenge-grid trader-grid"><article><h3>AI Chart Analyzer</h3><p>Review price trends, volatility, key levels, and market news.</p></article><article><h3>Smart Pattern Finder</h3><p>Identify recurring chart structures and review how similar situations played out in the past.</p></article><article><h3>AI Mentor</h3><p>Ask about a concept or market move and get a plain-language explanation.</p></article></div><p>The tools support independent analysis. The final decision stays with you.</p></section>
<section id="strategy-presets"><h2>AI Strategy Bot Presets</h2><div class="challenge-grid trader-grid"><article><h3>Cautious</h3><p>Waits for more evidence and prioritizes risk limits.</p></article><article><h3>Momentum</h3><p>Follows trends with clear rules for entries and exits.</p></article><article><h3>Contrarian</h3><p>Studies situations where a prevailing trend may be overextended.</p></article></div><p><a href="/discover/ai-bot">Explore AI Trading Bots →</a></p></section>
<section><h2>Can I Connect a Brokerage Account?</h2><p>Demo mode uses virtual funds without connecting a brokerage account. Brokerage availability depends on your region.</p></section>
<section><h2>What Every Strategy Preset Should Make Clear</h2><div class="challenge-grid trader-grid"><article><h3>What kind of investments it looks at</h3><p>Stocks, ETFs, industries, or other defined assets.</p></article><article><h3>How long it plans to keep an investment</h3><p>Intraday, days to weeks, or long term.</p></article><article><h3>Rules for when to buy and sell</h3><p>Conditions that flag an idea for review.</p></article><article><h3>Limits on risk</h3><p>Position limits, exit rules, and other safeguards.</p></article><article><h3>When not to act</h3><p>Conditions where the preset should stay quiet.</p></article><article><h3>Results from tests or demo practice</h3><p>See how it behaved with historical data or in simulation.</p></article></div></section>
<section><h2>Finelo AI vs Generic AI Trading Bots</h2><div class="challenge-table" role="region" aria-label="Finelo AI comparison" tabindex="0"><table><thead><tr><th scope="col">Generic AI trading bots</th><th scope="col">Finelo AI</th></tr></thead><tbody><tr><td>Hard to understand how it makes decisions</td><td>Transparent learning experience</td></tr><tr><td>Focuses on signals or automation</td><td>Focuses on understanding decisions</td></tr><tr><td>Personalized account-level signals</td><td>Shows standard preset strategies</td></tr><tr><td>Can encourage dependency</td><td>Builds independent thinking</td></tr><tr><td>Performance-first</td><td>Education-first</td></tr></tbody></table></div></section>
<section id="questions" class="challenge-faq"><h2>Frequently Asked Questions</h2><details><summary>What is Finelo AI?</summary><p>Finelo’s AI-assisted learning track for market analysis and simulator practice.</p></details><details><summary>What is the AI Trader Challenge?</summary><p>A 28-day path focused on chart reading and active trading analysis.</p></details><details><summary>What is the AI Investing Challenge?</summary><p>A 28-day path for long-term research, diversification, and portfolio thinking.</p></details><details><summary>What AI tools are included in Finelo AI?</summary><p>AI Chart Analyzer, Smart Pattern Finder, and AI Mentor.</p></details><details><summary>What do Finelo's AI strategy bots do?</summary><p>They demonstrate how standard presets apply different rules and risk limits.</p></details><details><summary>Does Finelo AI give personalized trade suggestions?</summary><p>The tools provide educational analysis and practice. The final decision stays with you.</p></details></section>
<section class="challenge-intro challenge-bottom"><h2>Learn with AI. Decide for yourself.</h2><p>Build your understanding with daily lessons, AI analysis tools, and practice using virtual funds.</p><a class="cta" href="/challenge">Start the AI Trader Challenge</a></section>
</main>
  <footer class="frame home-footer">
    <div class="footer-columns" role="navigation" aria-label="Footer navigation">
      <div><h3>Product</h3><ul><li><a href="/discover">Home</a></li><li><a href="/challenge">Start Finelo</a></li><li><a href="/discover/app">App</a></li><li><a href="/discover/download">Download App</a></li><li><a href="/discover/ai">AI</a></li><li><a href="/discover/ai-bot">AI bots</a></li><li><a href="/discover/pricing">Pricing</a></li><li><a href="/discover/login">Log in</a></li></ul></div>
      <div><h3>Learn &amp; Trust</h3><ul><li><a href="/discover/challenges">28-Day Challenges</a></li><li><a href="/discover/tools">Financial Tools</a></li><li><a href="https://finelo.com/glossary">Glossary</a></li><li><a href="/discover/reviews">Reviews</a></li><li><a href="/discover/about">About Us</a></li><li><a href="/discover/media">Media Coverage</a></li><li><a href="/discover/blog">Blog</a></li><li><a href="/discover/community">Community</a></li></ul></div>
      <div><h3>Trading education</h3><ul><li><a href="https://finelo.com/learn/ai-trading-guides">AI Trading Guides</a></li><li><a href="https://finelo.com/learn/what-is-ai-trading">What is AI trading?</a></li><li><a href="https://finelo.com/learn/how-to-start-trading">How to start trading</a></li><li><a href="https://finelo.com/learn/what-is-automated-trading">Automated trading</a></li><li><a href="https://finelo.com/learn/what-are-ai-trading-signals">AI trading signals</a></li><li><a href="https://finelo.com/learn/can-you-start-investing-with-20-dollars">Investing with $20</a></li><li><a href="/discover/blog-ai-trading-bots-for-beginners">How Do AI Trading Bots Work?</a></li></ul></div>
      <div><h3>Support &amp; Legal</h3><ul><li><a href="/discover/support">Support</a></li><li><a href="https://support.finelo.com/en/support/home?utm_source=website">Support Center</a></li><li><a href="/discover/bank-charge">Why Was I Charged?</a></li><li><a href="/discover/cancel">Cancel Subscription</a></li><li><a href="/discover/refund">Refund Policy</a></li><li><a href="https://legal.finelo.com/privacy">Privacy Policy</a></li><li><a href="https://legal.finelo.com/terms">Terms and Conditions</a></li><li><a href="https://legal.finelo.com/disclaimer">Disclaimer</a></li><li><a href="https://legal.finelo.com/subscription">Subscription Terms</a></li></ul></div>
    </div>
    <div class="footer-extras">
      <div><h3>Social media</h3><ul>
<li><a href="https://www.instagram.com/finelo.app/">Instagram</a></li><li><a href="https://www.linkedin.com/company/fineloapp">LinkedIn</a></li><li><a href="https://www.reddit.com/r/fineloapp/">Reddit</a></li><li><a href="https://www.youtube.com/@FineloApp">YouTube</a></li>
      </ul></div>
      <div><h3>Community</h3><p>A place where people interested in trading and AI trading can learn, keep up with the news, and ask questions with others. All levels welcome.</p>
      <a href="https://www.facebook.com/groups/learnaitrading">Join the Facebook group →</a></div>
    </div>
    <div class="footer-disclaimer"><h3>Disclaimer</h3><p>Finelo is an educational platform only, we do not provide financial or investment advice. Investing involves financial risks, including the loss of your investment. Historical market returns are not indicative of future results. Profit results are not typical and may vary. Users are solely responsible for their financial choices.</p></div>
  </footer>`,css:`*{box-sizing:border-box}
.fn-body{margin:0;background:#09081b;color:white;font:16px/1.5 Inter,system-ui,sans-serif}
.frame{width:min(100% - 80px,1280px);margin-inline:auto}
.ticker{height:37px;margin-bottom:8px;display:flex;align-items:center;overflow:hidden;white-space:nowrap;background:#09081b;border-bottom:1px solid #ffffff20;font-size:14px;color:#dddbed}
.ticker-track{display:flex;width:max-content;animation:finelo-quotes 70s linear infinite}
.ticker-copy{display:flex;gap:32px;padding-right:32px;flex:none}
.quote{display:flex;align-items:center;gap:12px;flex:none}
.quote img{display:block}
.quote b{color:#fff}
.quote em{font-style:normal}
.quote .down{color:#f88c9e}
.quote .up{color:#6edcb5}
@keyframes finelo-quotes{to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){
 .ticker{overflow-x:auto}
 .ticker-track{animation:none}
 .ticker-copy[aria-hidden=true]{display:none}
}
nav{min-height:88px;display:flex;align-items:center;justify-content:space-between;gap:20px}
nav img{display:block}
.cta{display:inline-flex;align-items:center;justify-content:center;min-height:40px;padding:8px 20px;border-radius:8px;color:white;background:#777ef7;font-weight:700;text-decoration:none}
.cta:hover{background:#656de3}
.hero{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:center;gap:24px;padding:33px 24px 44px 0;background:radial-gradient(ellipse at 77% 55%,#1c1851,transparent 58%)}
.hero h1{margin:0;font-size:clamp(32px,3.754vw,56px);font-weight:900;line-height:1.1;letter-spacing:-.025em}
.hero h1 span{color:#9796ff}
.hero p{max-width:440px;margin:24px 0 40px}
.hero .cta{width:min(100%,288px)}
.hero-art{width:100%;aspect-ratio:1199/1312;object-fit:contain;display:block}
@media(max-width:720px){
 .frame{width:calc(100% - 32px)}
 nav{min-height:64px}
 .hero{grid-template-columns:1fr;text-align:center;padding:28px 0;gap:24px}
 .hero p{margin:18px auto 24px}
 .hero-art{width:min(100%,460px);margin-inline:auto}
}

.learner-story{width:min(100% - 32px,1328px);margin:60px auto 64px;min-height:400px;display:grid;grid-template-columns:42% 58%;align-items:center;overflow:hidden;border-radius:32px;background:linear-gradient(115deg,#7875ee,#625bd6 72%)}
.learner-portrait{height:400px;position:relative;background:radial-gradient(ellipse at 40% 75%,#948df7 0%,transparent 65%)}
.learner-portrait img{position:absolute;top:20px;left:7px;width:min(90%,370px);height:auto}
.learner-copy{padding:32px 16px}
.learner-copy h2{font-size:clamp(28px,2.8vw,44px);line-height:1.35;font-weight:800;max-width:520px;margin:0}
.learner-copy p{font-size:18px;line-height:27px;max-width:480px;margin:20px 0 28px}
.learner-copy .cta{width:min(100%,240px);min-height:52px;gap:12px;border-radius:12px;background:white;color:#5145bd;font-size:17px}
.learner-copy .cta:hover{background:#f3f0ff}
@media(max-width:720px){
 .learner-story{grid-template-columns:1fr;margin-top:32px;text-align:center}
 .learner-copy{grid-row:1;padding:28px 20px 0}
 .learner-portrait{height:265px}
 .learner-portrait img{left:50%;transform:translateX(-50%);width:min(72%,270px)}
}

.challenges{margin-block:72px}
.challenges-intro{display:grid;grid-template-columns:1fr 1.07fr;gap:16px;align-items:center;margin-bottom:32px}
.challenges-intro h2{font-size:clamp(29px,4.38vw,48px);line-height:1.3;margin:0;font-weight:800;letter-spacing:-.025em}
.challenges-intro p{font-size:18px;line-height:28px;margin:0}
.challenge-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.challenge-grid article{display:flex;flex-direction:column;padding:16px;border:1px solid #ffffff24;border-radius:20px;background:#151329}
.challenge-grid img{display:block;width:100%;aspect-ratio:2.2;object-fit:cover;border-radius:12px}
.challenge-grid h3{font-size:24px;line-height:32px;margin:16px 0 8px}
.challenge-grid p{font-size:14px;line-height:20px;margin:0 0 16px}
.challenge-grid .cta{min-height:44px;margin-top:auto}
@media(max-width:720px){
 .challenges{margin-block:48px}
 .challenges-intro,.challenge-grid{grid-template-columns:1fr}
}

.works{display:grid;grid-template-columns:1fr 1fr;gap:40px;padding:0 40px;margin-block:72px;align-items:center}
.works h2{font-size:clamp(32px,4vw,44px);line-height:1.15;margin:0}
.works-copy>p{margin:12px 0 24px;color:#dedbed}
.works details{border:1px solid #ffffff30;border-radius:22px;margin:0 0 12px}
.works summary{list-style:none;cursor:pointer;display:flex;gap:12px;align-items:center;padding:16px 20px;min-height:79px;font-size:clamp(19px,2.3vw,25px);font-weight:700}
.works summary::-webkit-details-marker{display:none}
.works summary span{color:#9796ff}
.works summary::after{content:"+";margin-left:auto;color:#9796ff}
.works details[open] summary::after{content:"−"}
.work-text{padding:0 20px 16px;color:#dedbed}
.work-text p{margin:0}
.work-text ul{padding-left:22px;margin:10px 0 0}
.works-art{display:grid;place-items:center;min-height:340px}
.works-art img{display:none;max-width:100%;max-height:520px}
.works:has(.work-learning[open]) .work-learning-art,
.works:has(.work-practice[open]) .work-practice-art,
.works:has(.work-support[open]) .work-support-art{display:block}
@media(max-width:720px){
 .works{grid-template-columns:1fr;gap:12px;padding:0;margin-block:48px}
 .works-art{min-height:0}
 .works-art img{max-height:310px}
}
nav{position:relative;z-index:2}
.nav-actions,.nav-panel-actions{display:flex;align-items:center;gap:12px}
.nav-icon,.nav-language summary{display:grid;place-items:center;width:40px;height:40px;padding:0;border:0;border-radius:10px;background:#ffffff12;color:inherit;font:inherit;cursor:pointer}
.nav-language{position:relative}
.nav-language summary{list-style:none}
.nav-language summary::-webkit-details-marker{display:none}
.language-options{position:absolute;top:48px;right:0;z-index:2;width:216px;max-height:min(420px,70vh);overflow:auto;margin:0;padding:8px;list-style:none;background:#111022;border:1px solid #ffffff26;border-radius:16px;box-shadow:0 16px 40px #0007}
.nav-language a{display:flex;align-items:center;gap:10px;padding:7px 10px;border-radius:8px;color:#fff;text-decoration:none}
.nav-language a:is(:hover,:focus-visible,[aria-current=page]){background:#ffffff16}
.nav-language a span{width:24px;text-align:center}
.nav-panel{position:absolute;right:0;top:calc(100% - 8px);width:min(100%,390px);padding:16px;background:#17142b;border:1px solid #ffffff26;border-radius:20px;box-shadow:0 16px 40px #0007;color:white}
.nav-panel details{padding:10px 8px;border-bottom:1px solid #ffffff1a}
.nav-panel summary{cursor:pointer;font-weight:700}
.nav-panel ul{list-style:none;padding:0;margin:10px 0 0;display:grid;gap:4px}
.nav-panel a:not(.cta){color:inherit;text-decoration:none}
.nav-panel a:not(.cta):hover{text-decoration:underline}
.nav-panel li a{display:block;padding:4px 0}
.nav-panel-actions{justify-content:space-between;padding:12px 8px 0}
.light{background:#fafafc;color:#12101f}
.light .ticker{background:#fafafc;border-color:#12101f20;color:#565367}
.light .quote b{color:#12101f}
.light .quote .down{color:#a82e47}
.light .quote .up{color:#166c50}
.light .hero{background:radial-gradient(ellipse at 77% 55%,#e8e5ff,transparent 58%)}
.light .hero h1 span,.light .works summary span{color:#6255d9}
.light .nav-icon,.light .nav-language summary{background:#5145bd16}
.light .learner-story,.light .challenge-grid article{color:white}
.light .works-copy>p,.light .work-text{color:#3b3655}
.light .works details{border-color:#5145bd35}
@media(max-width:440px){.nav-actions{gap:6px}.nav-icon,.nav-language summary{width:32px}.nav-actions .cta{padding-inline:8px;font-size:14px}}
.faq{margin-bottom:224px}
.faq-panel{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:40px;padding:48px 24px;border-radius:32px;background:#1c1a24}
.faq-panel,.faq details{box-shadow:inset 0 1px #ffffff21,0 4px #493e853d,0 14px 28px #0003}
.faq h2{margin:0 0 16px;font-size:52px;line-height:1.1}
.faq-panel>div>p{font-size:18px;font-weight:500;line-height:28px;max-width:468px;margin:0}
.faq-list{display:grid;align-content:start;gap:12px}
.faq details{border:1px solid #1d1d30;border-radius:12px;background:#12101f}
.faq summary{list-style:none;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:20px 24px;font-size:20px;line-height:28px;font-weight:600;cursor:pointer}
.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:"+";color:#777ef7}
.faq details[open] summary::after{content:"−"}
.faq details p{padding:0 24px 24px;margin:0;color:#ffffffb3}
.light .faq-panel{background:#f4f1fc}
.light .faq details{background:#fff;border-color:#5145bd35}
.light .faq details p{color:#3b3655}
@media(max-width:1023px){.faq{margin-bottom:64px}.faq-panel{grid-template-columns:1fr}}
@media(max-width:720px){.faq h2{font-size:36px}}
.final-challenge{position:relative;display:flex;justify-content:flex-end;align-items:center;isolation:isolate;overflow:hidden;min-height:384px;padding:40px;margin-bottom:64px;border-radius:24px;background:linear-gradient(to bottom,#7c3aed,#3730a340 52%,#0f172a00),radial-gradient(at 15% 0,#ffffff38,transparent 65%),linear-gradient(145deg,#777ef7,#5653fe);color:white}
.final-copy{position:relative;z-index:1;width:min(100%,528px)}
.final-challenge h2{font-size:48px;line-height:1.2;margin:4px 0 12px}
.final-challenge p{margin:0 0 24px;font-size:18px;line-height:28px;font-weight:500;color:#ffffffe6}
.final-challenge .final-kicker{margin:0;font-size:14px;line-height:20px;font-weight:700;color:white}
.final-challenge .cta{width:288px;height:48px;padding:0;border-radius:8px;border-bottom:3px solid #d4d4d4;background:#fff;color:#6366f1;font-weight:700}
.final-challenge picture{position:absolute;display:block;pointer-events:none}
.final-challenge img{display:block;width:100%;height:auto}
.final-bg{width:min(100%,415px);right:0;top:0}
.final-art{width:500px;bottom:0;left:40px}
@media(max-width:767px){
 .final-challenge{width:calc(100% - 32px);min-height:620px;align-items:flex-start;justify-content:flex-start;padding:40px 16px 24px;margin-bottom:96px;border-radius:16px;background:radial-gradient(at 15% 0,#ffffff38,transparent 65%),linear-gradient(145deg,#777ef7,#5653fe)}
 .final-copy{width:100%;max-width:none}
 .final-challenge .final-kicker{text-transform:uppercase;letter-spacing:.12em}
 .final-challenge h2{font-size:32px;font-weight:800;line-height:1.1;margin:16px 0}
 .final-challenge p{line-height:1.45;font-weight:400}
 .final-challenge .cta{width:100%;border-bottom-color:#ffffffb3;background:linear-gradient(165deg,#fff 20%,#ececff);box-shadow:0 12px 32px #0003}
 .final-bg{width:100%;left:0}
 .final-art{width:min(100%,540px);left:50%;transform:translateX(-50%)}
}
.home-footer{border-top:1px solid #ffffff30;padding:36px 0;color:#dedbed;font-size:14px}
.footer-columns{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px}
.home-footer h3{color:white;font-size:16px;margin:0 0 12px}
.home-footer ul{list-style:none;padding:0;margin:0;display:grid;gap:7px}
.home-footer a{color:inherit;text-decoration:none}
.home-footer a:hover{text-decoration:underline}
.footer-extras{display:grid;grid-template-columns:1fr 2fr;gap:24px;margin-top:32px}
.footer-disclaimer{margin-top:28px;border-top:1px solid #ffffff26;padding-top:24px}
.home-footer p{margin:0 0 10px}
.light .home-footer,.light .footer-disclaimer{border-color:#5145bd35;color:#3b3655}
.light .home-footer h3{color:#17142b}
@media(max-width:720px){
 .footer-columns{grid-template-columns:repeat(2,minmax(0,1fr))}
 .footer-extras{grid-template-columns:1fr}
}
.bot-showcase{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:40px;margin-block:72px;padding:40px;border-radius:28px;background:radial-gradient(ellipse at 75% 50%,#211a52,transparent 65%)}
.bot-showcase h2{font-size:clamp(30px,4vw,46px);line-height:1.15;margin:0}
.bot-kicker{color:#9796ff;font-size:14px;font-weight:700;margin:0 0 12px}
.bot-showcase ol{list-style:none;padding:0;margin:24px 0;display:grid;gap:18px}
.bot-showcase li{display:flex;gap:12px}
.bot-showcase li>span{color:#9796ff;font-weight:750}
.bot-showcase h3,.bot-showcase li p{margin:0}
.bot-phone{width:min(100%,310px);margin:auto;padding:18px;border-radius:30px;border:4px solid #3f375e;background:#111026;color:white;font-size:13px;box-shadow:0 16px 50px #0005}
.bot-phone p{margin:3px 0 8px}
.phone-time,.phone-muted{color:#cbc5e5}
.phone-context,.phone-signal{margin:12px 0;padding:12px;background:#24203e;border-radius:12px}
.phone-context small{color:#cbc5e5}
.phone-signal dl{margin:10px 0;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.phone-signal dt{color:#cbc5e5;font-size:12px}
.phone-signal dd{margin:0;font-weight:700}
.phone-actions,.phone-tabs{display:flex;justify-content:space-between;gap:6px}
.phone-actions button{flex:1;padding:8px 4px;border:1px solid #aaa1ee;border-radius:8px;background:transparent;color:white;cursor:pointer}
.phone-actions button+button{background:#5653fe}
.phone-tabs{font-size:11px;color:#cbc5e5}
.light .bot-showcase{background:#eeebff}
.light .bot-kicker,.light .bot-showcase li>span{color:#5145bd}
@media(max-width:720px){.bot-showcase{grid-template-columns:1fr;padding:24px;margin-block:48px}}
.video-reviews{margin-block:72px}
.video-reviews h2{font-size:clamp(30px,4.1vw,46px);line-height:1.15;margin:0 0 12px}
.video-reviews>p{margin:0 0 12px;color:#dedbed}
.video-reviews>a{color:#a9a6ff;font-weight:700}
.video-rail{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:12px;margin-top:24px;scrollbar-color:#625bd6 #17142b}
.video-card{position:relative;flex:0 0 min(100%,340px);height:260px;overflow:hidden;border-radius:16px;scroll-snap-align:start;display:flex;align-items:end;padding:16px;color:white;text-decoration:none;background:#17142b}
.video-card img,.video-card::after{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.video-card::after{content:"";background:linear-gradient(transparent 55%,#09081bee)}
.video-card span{position:relative;z-index:1;font-weight:700}
.video-card .play-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#09081bbb;border-radius:50%;padding:12px 14px}
.video-controls{display:flex;justify-content:flex-end;gap:10px;margin:12px 0}
.video-controls button{width:42px;height:42px;border:1px solid #9796ff;border-radius:50%;background:none;color:inherit;font-size:20px;cursor:pointer}
.video-reviews .video-disclaimer{font-size:13px}
.light .video-reviews>p{color:#3b3655}
.light .video-reviews>a{color:#5145bd}
.finelo-proof{display:grid;grid-template-columns:2.04fr 1fr 1fr;grid-template-rows:minmax(320px,auto) minmax(374px,auto);gap:24px;margin-block:80px}
.finelo-proof article{min-width:0;overflow:hidden;border-radius:21px;padding:20px;color:white;background:#1c1a24}
.finelo-proof h3{font-size:clamp(24px,3vw,34px);line-height:1.15;margin:0 0 12px}
.finelo-proof p{margin:0}
.finelo-proof img{display:block;max-width:100%;height:auto}
.finelo-proof .proof-intro{grid-row:span 2;display:flex;flex-direction:column;justify-content:space-between;gap:24px;background:#7076e6;padding:32px 32px 0}
.proof-intro img{width:100%;margin:auto auto 0}
.finelo-proof .proof-award{grid-column:span 2;display:grid;grid-template-columns:minmax(0,1fr) 42%;gap:20px;align-items:center;padding:30px}
.proof-award img{max-height:261px;margin:auto;object-fit:contain}
.finelo-proof .proof-lessons{display:flex;flex-direction:column;justify-content:space-between;gap:14px}
.proof-lessons img{width:100%;max-height:140px}
.proof-lessons h3{margin:auto 0 0}
.finelo-proof .proof-rating{display:flex;flex-direction:column;gap:8px;background:#6f76e5}
.proof-rating-line{display:flex;align-items:center;gap:10px}
.proof-rating-line h3{margin:0}
.proof-rating-line img{width:52px}
.proof-stars{max-height:25px}
.proof-rating p{font-size:11px;line-height:1.3}
.proof-review{width:100%;margin:auto auto -20px}
@media(max-width:760px){
 .finelo-proof{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:auto;margin-block:48px;gap:12px}
 .finelo-proof .proof-intro{grid-column:span 2;grid-row:auto;padding:24px 20px 0}
 .proof-intro img{max-height:360px}
 .finelo-proof .proof-award{padding:20px;gap:12px}
 .finelo-proof .proof-lessons,.finelo-proof .proof-rating{padding:12px}
 .finelo-proof h3{font-size:clamp(18px,5vw,28px)}
}
@media(max-width:720px){
 nav.frame{width:calc(100% - 8px);min-height:88px;padding-inline:12px}
 .hero{text-align:left;padding:24px 0 40px;gap:48px}
 .hero h1{font-size:clamp(28px,7.8vw,41px);line-height:1.15}
 .hero p{margin:24px 0;font-size:16px;line-height:24px}
 .hero .cta{width:100%;min-height:48px}
 .hero-art{width:calc(100% + 32px);max-width:none;margin-inline:-16px}
}
.finelo-mobile-menu-top,.finelo-mobile-group-label{display:none}
@media(max-width:720px){
 nav.frame{padding-inline:16px}
 .nav-actions .nav-language{display:none}
 .nav-actions .nav-icon{width:40px}
 .nav-actions .cta{min-width:101px}
 .nav-panel{position:fixed;inset:0;width:100%;padding:88px 24px 24px;border:0;border-radius:0;background:#09081b;overflow-y:auto;overscroll-behavior:contain}
 .finelo-mobile-menu-top{display:flex;position:fixed;inset:0 0 auto;z-index:1;align-items:center;justify-content:space-between;height:88px;padding:0 24px;background:#09081b}
 .nav-panel details{padding:24px 0 0;border:0}
 .nav-panel summary{display:block;list-style:none;pointer-events:none;line-height:24px}
 .nav-panel summary::-webkit-details-marker{display:none}
 .nav-panel ul{margin-top:8px;gap:4px}
 .nav-panel li a{min-height:44px;padding:10px 0}
 .nav-panel .finelo-mobile-group-label{display:block;color:#b9b8fe;font-size:13px;padding:4px 0}
 .fn-body:has(.nav-menu-button[aria-expanded=true]){overflow:hidden}
}

.reviews { background:#09081b; color:#fff; --review-surface:#191733; --review-line:#343150; --review-muted:#c7c2de; --review-accent:#bdb0ff; }
.reviews.light { background:#fbfaff; color:#1b1830; --review-surface:#f1edff; --review-line:#ded6f5; --review-muted:#51476f; --review-accent:#5027c8; }
.review-hero { display:grid; grid-template-columns:1.3fr 1fr; gap:36px; align-items:center; padding-block:48px; }
.review-hero h1 { font-size:clamp(35px,5vw,58px); line-height:1.08; margin:22px 0; }
.review-hero img { width:100%; max-width:460px; justify-self:center; }
.review-rating { font-size:18px; }
.review-rating strong { font-size:28px; }
.review-rating span { color:#ffd25a; }
.review-note,.review-crumb { color:var(--review-muted); line-height:1.6; }
.review-main section { margin-block:52px; scroll-margin-top:24px; }
.review-main h2 { font-size:clamp(27px,4vw,40px); margin:0 0 14px; }
.review-main p,.review-main blockquote { line-height:1.65; }
.review-main a:not(.pill) { color:var(--review-accent); }
.review-jumps,.review-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
.review-jumps a,.review-grid article,.review-platforms button,.review-panel,.review-main details { padding:20px; border:1px solid var(--review-line); border-radius:16px; background:var(--review-surface); }
.review-grid { margin-top:18px; }
.review-grid h3 { margin:0 0 9px; }
.review-platforms button { display:grid; gap:8px; text-align:left; color:inherit; cursor:pointer; font:inherit; }
.review-platforms button img { width:36px; height:36px; object-fit:contain; }
.review-platforms button[aria-pressed=true] { border-color:var(--review-accent); }
.review-panel { margin-top:18px; padding:clamp(20px,4vw,38px); }
.review-panel blockquote { margin:12px 0; }
.review-controls { display:flex; gap:10px; margin-top:18px; }
.review-controls[hidden] { display:none; }
.review-controls button { color:inherit; background:none; border:1px solid var(--review-line); border-radius:999px; min-width:40px; min-height:40px; cursor:pointer; }
.review-controls button[aria-pressed=true] { color:var(--review-accent); border-color:var(--review-accent); }
.review-main details { margin-top:10px; }
.review-main summary { font-weight:650; cursor:pointer; }
.review-bottom { text-align:center; }
@media(max-width:660px) { .review-hero,.review-jumps,.review-grid { grid-template-columns:1fr; } .review-hero { padding-block:30px; } .review-hero img { max-width:340px; } }

.bot-faq summary{display:flex;align-items:center;justify-content:space-between;gap:16px;list-style:none}
.bot-faq summary::-webkit-details-marker{display:none}
.bot-faq summary::after{content:"+";color:var(--review-accent);font-size:20px;line-height:1}
.bot-faq details[open]>summary::after{content:"−"}
.bot-faq details p{margin-bottom:0}

.bot-benefits{display:grid;gap:12px;list-style:none;padding:0;margin:24px 0}
.bot-benefits li{display:flex;gap:10px;line-height:1.6}
.bot-benefits li::before{content:"✓";color:var(--review-accent)}
.bot-actions{display:flex;flex-wrap:wrap;gap:16px;margin-top:32px}
.bot-actions .pill{min-height:48px;display:inline-flex;align-items:center;justify-content:center}
.bot-actions .bot-secondary{border:1px solid var(--review-line);background:transparent;color:inherit}
.bot-page .review-hero img{width:min(100%,400px)}
@media(max-width:660px){
  .bot-page{width:calc(100% - 32px)}
  .bot-page .review-hero{gap:8px}
  .bot-page h1{font-size:clamp(32px,9.64vw,42px);line-height:1.15}
  .bot-actions{display:grid}
  .bot-page .review-hero img{width:min(100%,320px)}
}

.bot-page .bot-jumps{width:100%;padding:0;min-height:0;margin:0;position:static}

.challenge-main{max-width:1116px;padding-block:48px 36px;--challenge-surface:#ffffff13;--challenge-border:#ffffff24;--challenge-muted:#c7c5d0}
.light .challenge-main{--challenge-surface:#23204c0a;--challenge-border:#23204c26;--challenge-muted:#514e63}
.challenge-main h1{font-size:clamp(34px,4vw,54px);line-height:1.1;letter-spacing:-.03em;margin:16px 0 20px}
.challenge-main h2{font-size:clamp(26px,3vw,38px);line-height:1.2;margin:0 0 16px}
.challenge-main h3{margin:0 0 10px}
.challenge-main p,.challenge-main small{color:var(--challenge-muted)}
.challenge-hero{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:44px;align-items:center;margin-bottom:28px}
.challenge-hero nav{min-height:0;display:block;font-size:13px}
.challenge-hero img{display:block;width:min(100%,430px);height:auto;border:1px solid var(--challenge-border);border-radius:30px}
.challenge-hero .cta,.challenge-bottom .cta{display:inline-block;margin-top:8px}
.challenge-intro,.challenge-grid article,.challenge-faq details,.challenge-table{background:var(--challenge-surface);border:1px solid var(--challenge-border);border-radius:16px;padding:24px}
.challenge-intro p:first-child{margin-top:0}
.challenge-main>section:not(.challenge-intro){margin-block:46px;scroll-margin-top:20px}
.challenge-toc{min-height:0;display:flex;justify-content:flex-start;flex-wrap:wrap;gap:12px;margin:24px 0}
.challenge-toc a{border:1px solid var(--challenge-border);border-radius:10px;padding:10px 14px}
.challenge-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.challenge-grid small{display:block;margin-bottom:8px}
.challenge-grid.features{grid-template-columns:repeat(4,minmax(0,1fr))}
.challenge-table{overflow:auto;padding:0}
.challenge-table table{width:100%;min-width:490px;border-collapse:collapse;text-align:left}
.challenge-table td,.challenge-table th{padding:15px;border-bottom:1px solid var(--challenge-border)}
.challenge-faq details{margin-block:8px;padding:16px}
.challenge-faq summary{cursor:pointer;font-weight:650}
.challenge-bottom{text-align:center}
@media(max-width:780px){.challenge-main{padding-top:24px}.challenge-hero{grid-template-columns:1fr;gap:24px}.challenge-grid.features{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:480px){.challenge-grid,.challenge-grid.features{grid-template-columns:1fr}}
.challenge-actions{display:flex;align-items:center;flex-wrap:wrap;gap:12px 20px}
.trader-page .challenge-grid.trader-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
.trader-page .challenge-bottom{margin-top:32px}
.trader-includes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 24px;padding-left:22px}
@media(max-width:760px){.trader-page .challenge-grid.trader-grid,.trader-includes{grid-template-columns:1fr}}
.finance-tool{display:block;text-decoration:none}.finance-tool span{color:#a9a0ff}
.finance-calc{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);gap:18px}
.finance-field{margin-block:0 22px}.finance-field>div{display:flex;align-items:center;gap:10px;margin:6px 0}
.finance-field input[type=number]{width:100%;padding:8px;border:1px solid var(--challenge-border);border-radius:8px;background:var(--challenge-surface);color:inherit}
.finance-field input[type=range]{width:100%;accent-color:#8c7aff}
.finance-results{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin:0}
.finance-results dt{color:var(--challenge-muted)}.finance-results dd{margin:4px 0 0;font-size:clamp(16px,3vw,25px);font-weight:750;overflow-wrap:anywhere}
.finance-interest{color:#a495ff}.finance-principal{color:#5a50a0}
.finance-chart{height:180px;display:flex;gap:clamp(3px,1vw,12px);padding:6px 0}
.finance-bar{min-width:0;flex:1;display:flex;flex-direction:column;justify-content:end;text-align:center}
.finance-bar span{height:var(--total);background:linear-gradient(to top,#5a50a0 var(--principal),#a495ff var(--principal));border-radius:4px 4px 0 0}
.finance-bar small{white-space:nowrap;font-size:clamp(8px,1vw,12px)}
@media(max-width:760px){.finance-calc{grid-template-columns:minmax(0,1fr)}}
#plan-progress{display:block;width:100%;accent-color:#8c7aff}
.finance-page label[for=plan-progress]{display:block;margin:20px 0 5px}
.finance-page label[for=plan-progress] output{font-weight:700}

.social-month-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:4px;margin-block:12px}
.social-month-grid button{aspect-ratio:1;border:1px solid #ffffff30;border-radius:4px;min-width:0;padding:0;background:var(--month-color)}
.social-month-grid button[aria-pressed=true]{outline:2px solid currentColor;outline-offset:1px}
.social-heatmap [data-band="0"]{--month-color:#665c81}.social-heatmap [data-band="1"]{--month-color:#6577ab}
.social-heatmap [data-band="2"]{--month-color:#508d9c}.social-heatmap [data-band="3"]{--month-color:#399b69}
.social-heatmap [data-band="4"]{--month-color:#58d77c}
.social-heatmap-legend{display:flex;flex-wrap:wrap;gap:8px 12px;font-size:13px}
.social-heatmap-legend span::before{content:"";display:inline-block;width:10px;height:10px;border-radius:2px;margin-inline-end:5px;background:var(--month-color)}
.app-course{display:block;margin-top:12px;padding:12px;border:1px solid var(--challenge-border);border-radius:12px;text-decoration:none}
.app-course:hover{background:var(--challenge-surface)}
.app-course h4,.app-course p{margin:0}
.app-course p{margin-top:5px}

.trader-tool-art{display:block;width:min(100%,203px);height:119px;object-fit:contain;margin:0 auto 16px}
.trader-related-art{display:block;width:74px;height:74px;object-fit:contain;margin-bottom:14px}
.trader-start{display:grid;grid-template-columns:minmax(0,386px) minmax(0,1fr);align-items:center;gap:28px}
.trader-start-art{display:block;width:100%;height:auto;aspect-ratio:386/320;object-fit:contain}
.trader-brokerage{display:flex;align-items:flex-start;gap:22px}
.trader-brokerage .trader-related-art{width:89px;height:93px;flex:none}
@media(max-width:760px){
 .trader-start{grid-template-columns:1fr}
 .trader-start-art{max-width:300px;margin-inline:auto}
 .trader-brokerage{flex-direction:column;gap:8px}
}

.trader-page .trader-included{max-width:1088px;margin-inline:auto;border-top:1px solid var(--challenge-border);padding-block:clamp(48px,8vw,112px)}
.trader-included h2{margin:0 0 24px;font-size:clamp(27px,3vw,36px);line-height:1.07}
.trader-included > p{margin:0 0 40px}
.trader-page .trader-includes{padding:0;list-style:none;gap:18px;margin:0}
.trader-includes li{display:flex;align-items:center;padding:20px 28px;min-height:82px;border:1px solid var(--challenge-border);border-radius:22px;background:var(--challenge-surface);font-size:14px;line-height:1.65}
@media(max-width:760px){.trader-includes li{min-height:104px}}

.trader-page .challenge-hero{grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:28px;margin-bottom:36px}
.trader-page .challenge-hero h1{font-size:38px;line-height:1.16;margin:16px 0 24px}
.trader-page .challenge-hero p{font-size:17px;line-height:1.65;margin:0 0 32px}
.trader-page .challenge-hero img{width:min(100%,418px);justify-self:center}
.trader-page .challenge-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
.trader-page .challenge-actions a{display:grid;place-items:center;min-height:54px;margin:0;padding:8px 12px;text-align:center;border-radius:14px}
.trader-page .challenge-actions a:not(.cta){border:1px solid var(--challenge-border);background:var(--challenge-surface)}
.trader-page .trader-hero-notes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;padding:0;background:none;border:0}
.trader-hero-notes p{margin:0;padding:24px;border:1px solid var(--challenge-border);border-radius:22px;background:var(--challenge-surface)}
@media(max-width:780px){
 .trader-page .challenge-hero,.trader-page .challenge-actions,.trader-page .trader-hero-notes{grid-template-columns:1fr}
 .trader-page .challenge-hero h1{font-size:28px}
 .trader-page .challenge-hero p{font-size:16px}
 .trader-page .challenge-hero img{max-height:318px;object-fit:contain}
}

.trader-page .challenge-toc{max-width:1088px;margin:0 auto;padding-block:24px;gap:10px}
.trader-page .challenge-toc a{display:inline-flex;align-items:center;gap:20px;max-width:100%;padding:12px 18px;border-radius:999px;font-size:14px;line-height:21px;background:var(--challenge-surface)}
.trader-page .challenge-toc a:hover{border-color:currentColor}
.trader-page .challenge-toc a span{flex:none}
.trader-page > section[id^="challenge-topic-"]{scroll-margin-top:104px}
@media(max-width:780px){.trader-page .challenge-toc a{gap:12px}}

.trader-page > .trader-teaching{max-width:1088px;margin:0 auto;padding-block:clamp(48px,8vw,112px);border-top:1px solid var(--challenge-border)}
.trader-topic-heading{display:flex;gap:16px;align-items:flex-start;margin-bottom:24px}
.trader-topic-heading > span{display:grid;place-items:center;flex:none;min-width:38px;min-height:38px;border-radius:12px;background:var(--challenge-surface);font-weight:750}
.trader-topic-heading p{margin:0 0 8px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;font-weight:700}
.trader-topic-heading h2{margin:0;font-size:32px}
.trader-teaching-lead{max-width:850px;font-size:19px;line-height:1.65;margin:0 0 24px}
.trader-teaching-copy,.trader-teaching-points{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
.trader-teaching-copy p,.trader-teaching-points li{margin:0;border:1px solid var(--challenge-border);background:var(--challenge-surface);line-height:1.65}
.trader-teaching-copy p{border-radius:24px;padding:26px}
.trader-teaching-points{padding:0;list-style:none;gap:18px;margin:24px 0 0}
.trader-teaching-points li{position:relative;border-radius:20px;padding:22px 24px 22px 42px}
.trader-teaching-points li::before{position:absolute;top:32px;left:22px;width:7px;height:7px;border-radius:50%;background:#a398ff;content:""}
.trader-teaching-points li:last-child{grid-column:1/-1}
@media(max-width:780px){
 .trader-topic-heading h2{font-size:24px}
 .trader-teaching-copy,.trader-teaching-points{grid-template-columns:1fr}
}

.trader-page > .trader-tools{max-width:1088px;margin:0 auto;padding-block:clamp(48px,8vw,112px);border-top:1px solid var(--challenge-border)}
.trader-page .trader-tools .trader-grid{gap:24px}
.trader-tools .trader-grid article{padding:24px;border-radius:28px}
.trader-tool-media{display:grid;place-items:center;height:150px;border-radius:32px;background:var(--challenge-surface)}
.trader-tools .trader-tool-art{width:min(100%,220px);height:120px;margin:0}
.trader-tools article p{margin:24px 0 0;font-size:16px;line-height:1.65}
.trader-tools article p strong{color:inherit}

.trader-page > .trader-start{display:block;max-width:1088px;margin:0 auto;padding-block:clamp(48px,8vw,112px)}
.trader-start-card{display:grid;grid-template-columns:minmax(0,38%) minmax(0,1fr);align-items:center;min-height:312px;border:1px solid var(--challenge-border);border-radius:28px;background:var(--challenge-surface);overflow:hidden}
.trader-start-card > div{padding:40px 40px 40px 24px}
.trader-start-card h2{font-size:32px;line-height:1.18}
.trader-start-card .trader-start-art{width:100%;height:310px;aspect-ratio:auto;object-fit:contain}
.trader-start-card .cta{display:grid;place-items:center;width:min(390px,100%);min-height:52px;text-align:center;padding:12px 22px;border-radius:12px}
@media(max-width:760px){
 .trader-start-card{grid-template-columns:1fr}
 .trader-start-card > div{padding:20px 26px 30px}
 .trader-start-card h2{font-size:25px;font-weight:800;letter-spacing:-.53px;margin:0 0 16px}
 .trader-start-card p{font-size:16px;line-height:1.65;margin:0 0 24px}
 .trader-start-card .trader-start-art{max-width:320px;height:220px}
}

.trader-page > .trader-related{max-width:1088px;margin:0 auto;padding-block:clamp(48px,8vw,112px);border-top:1px solid var(--challenge-border)}
.trader-related h2{font-size:32px;margin:0 0 24px}
.trader-page .trader-related .trader-grid{gap:24px}
.trader-related .trader-grid article{padding:24px;border-radius:24px}
.trader-related-media{display:grid;place-items:center;height:96px;border-radius:22px;background:var(--challenge-surface);margin-bottom:24px}
.trader-related-media .trader-related-art{margin:0;width:74px;height:74px}
.trader-related article h3{font-size:20px;line-height:1.3;margin:0 0 12px}
.trader-related article p{font-size:14px;line-height:1.65;margin:0 0 20px}
.trader-related article a{font-size:14px;font-weight:650}
@media(max-width:760px){.trader-related h2{font-size:24px}}

.trader-page > .challenge-faq{display:grid;grid-template-columns:minmax(0,.905fr) minmax(0,1fr);gap:48px;margin:64px 0;padding:44px 32px;border:1px solid var(--challenge-border);border-radius:32px;background:var(--challenge-surface)}
.trader-page .challenge-faq h2{font-size:32px;margin:0}
.trader-faq-items{display:grid;gap:14px;min-width:0}
.trader-faq-items details{margin:0;padding:0}
.trader-faq-items summary{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 24px;min-height:96px;font-size:18px;list-style:none}
.trader-faq-items summary::-webkit-details-marker{display:none}
.trader-faq-mark{flex:none;font-size:24px;line-height:1;transition:transform .18s ease}
.trader-faq-items details[open] .trader-faq-mark{transform:rotate(45deg)}
.trader-faq-items details p{margin:0;padding:0 24px 22px}
@media(max-width:760px){
 .trader-page > .challenge-faq{grid-template-columns:minmax(0,1fr);gap:28px;margin:48px 6px;padding:24px 16px;border-radius:26px}
 .trader-page .challenge-faq h2{font-size:24px}
 .trader-faq-items summary{gap:12px;padding:18px;min-height:82px;font-size:16px}
 .trader-faq-items details p{padding:0 18px 18px}
}

:is(.trader-page > .trader-closing,.challenge-main > .challenge-overview-closing){display:grid;grid-template-columns:minmax(0,44%) minmax(0,1fr);align-items:center;max-width:1088px;min-height:362px;margin:0 auto;overflow:hidden;border:1px solid var(--challenge-border);border-radius:32px;background:linear-gradient(135deg,#3c2d69,#231a3a);color:#fff}
.trader-closing-art{position:relative;aspect-ratio:480/362}
.trader-closing-art img{position:absolute;object-fit:contain}
.trader-closing-art img:nth-child(1){width:40%;height:44%;top:3%;left:54%;z-index:1}
.trader-closing-art img:nth-child(2){width:72%;height:88%;top:9%;left:8%}
.trader-closing-art img:nth-child(3){width:14%;height:19%;top:64%;left:71%;z-index:1}
.trader-closing-copy{padding:28px 44px 28px 4px}
.trader-closing-copy h2{font-size:32px;margin:0 0 16px}
.trader-closing-copy p{color:#e1d9ef;margin:0 0 24px}
.trader-closing-copy .cta{display:grid;place-items:center;min-height:56px;width:min(100%,390px);text-align:center;border-radius:12px}
@media(max-width:760px){
 :is(.trader-page > .trader-closing,.challenge-main > .challenge-overview-closing){grid-template-columns:1fr;border-radius:24px;min-height:0}
 .trader-closing-art{height:240px;aspect-ratio:auto}
 .trader-closing-copy{padding:28px}
 .trader-closing-copy h2{font-size:24px;line-height:1.2;font-weight:700;letter-spacing:-.55px;margin:0 0 20px}
 .trader-closing-copy p{font-size:16px;line-height:1.6;margin:0 0 28px}
}

/* On narrow screens each comparison row keeps its track beside its title. */
@media(max-width:600px){
 .challenge-table{position:relative;overflow:hidden;border-radius:24px}
 .challenge-table table{display:block;min-width:0}
 .challenge-table thead{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
 .challenge-table tbody{display:block}
 .challenge-table tbody tr{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;padding:22px}
 .challenge-table tbody tr + tr{border-top:1px solid var(--challenge-border)}
 .challenge-table tbody :is(th,td){display:block;padding:0;border:0;font-size:15px}
 .challenge-table tbody td:last-child{grid-column:1/-1}
}

.challenge-main > .challenge-overview-closing{max-width:none}
@media(max-width:760px){
 .challenge-main > .challenge-overview-closing{margin-inline:6px}
}

@media(min-width:761px){
 .challenge-main > .challenge-overview-closing .trader-closing-art{height:360px;aspect-ratio:auto}
 .challenge-overview-closing .trader-closing-copy{padding:48px 48px 48px 24px}
 .challenge-overview-closing .trader-closing-copy h2{margin-bottom:20px}
 .challenge-overview-closing .trader-closing-copy p{max-width:540px;font-size:17px;line-height:1.6;margin-bottom:28px}
}

.overview-toc{gap:10px}
.overview-toc a{display:inline-flex;align-items:center;gap:12px;padding:12px 18px;max-width:100%;border-radius:999px;font-size:14px;line-height:21px;background:var(--challenge-surface)}
.overview-toc a span{flex:none}
.challenge-main > :is(#choose-your-path,#quick-comparison,#included){scroll-margin-top:100px}
.challenge-main > #questions{scroll-margin-top:104px}

#included .features{grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
#included .features article{border-radius:24px;padding:24px}
.overview-feature-art{height:72px;display:flex;align-items:center;margin-bottom:20px}
.overview-feature-art img{width:72px;height:72px;object-fit:contain}
#included .features h3{font-size:21px;line-height:1.35}
#included .features p{font-size:15px;line-height:1.7}
@media(max-width:780px){#included .features{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:600px){#included .features{grid-template-columns:1fr}}

.challenge-main > .overview-prose{margin-block:0;padding-block:clamp(48px,8vw,112px);border-bottom:1px solid var(--challenge-border)}
.overview-prose p{max-width:780px;margin:0 0 18px;font-size:18px;line-height:1.75}
.overview-prose small{font-size:16px}

.overview-path-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px;margin:32px auto 0}
.overview-path-grid .overview-path{grid-template-columns:1fr;gap:20px;padding:20px;border-radius:28px;background:var(--challenge-surface)}
.overview-path article{display:flex;flex-direction:column;align-items:stretch;border-radius:24px;padding:28px}
.overview-path article h3{font-size:21px;line-height:1.35}
.overview-path article a{font-size:14px;margin-top:auto}
@media(max-width:600px){
 .overview-path-grid{grid-template-columns:1fr;gap:28px}
}

.overview-hero{grid-template-columns:minmax(0,1.2fr) minmax(0,1fr)}
@font-face{font-family:Replica Inter;src:url("__FIN_BASE__assets/coursiv-inter-latin.woff2") format("woff2");font-weight:100 900;font-display:swap}
.overview-hero h1{font-family:Replica Inter,Inter,system-ui,sans-serif;font-size:42px;font-weight:900;letter-spacing:normal;line-height:1.14;margin:16px 0 24px}
.overview-hero p{font-size:17px;line-height:1.7;margin:0 0 24px}
.overview-hero img{border-radius:32px;justify-self:center}
.overview-hero .cta{display:inline-grid;place-items:center;width:232px;max-width:100%;min-height:48px;padding:0 40px;margin-top:0;border-radius:8px;border-bottom:3px solid #5653fe;background:#777ef7;font-size:16px;font-weight:600;line-height:20px}
@media(max-width:780px){
 .overview-hero{grid-template-columns:minmax(0,1fr);margin-inline:2px}
 .overview-hero h1{font-size:30px}
 .overview-hero .cta{width:100%;padding-inline:16px}
}

.overview-intro{max-width:1116px;padding:28px 32px;margin:0 auto 24px;border-radius:26px}
.overview-intro p{font-size:16px;line-height:1.7;margin:0 0 16px}
.overview-intro p:nth-child(2){margin-bottom:8px}
.overview-intro p:last-child{font-size:13px;margin:0}
@media(max-width:780px){
 .overview-intro{padding:24px;margin:0 2px}
}

.overview-story{display:grid;grid-template-columns:minmax(0,1.353fr) minmax(0,1fr);gap:48px;align-items:center}
.overview-story p + p{font-size:16px}
.overview-story figure{margin:0;border:1px solid var(--challenge-border);border-radius:32px;overflow:hidden}
.overview-story img{display:block;width:100%;aspect-ratio:1.1;object-fit:cover}
@media(max-width:780px){.overview-story{grid-template-columns:1fr;gap:28px}}

.challenge-main > #questions{display:grid;gap:32px;padding:44px 32px;border:1px solid var(--challenge-border);border-radius:32px;background:var(--challenge-surface)}
#questions > h2{font-size:32px;margin:0}
#questions .challenge-faq{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px 24px}
#questions details{margin:0;padding:0;min-height:98px}
#questions summary{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:22px 24px;font-size:18px;list-style:none}
#questions summary::-webkit-details-marker{display:none}
#questions summary::after{content:"+";font-size:22px;flex:none}
#questions details[open] summary::after{content:"−"}
#questions details p{margin:0;padding:0 24px 22px}
@media(max-width:780px){
 .challenge-main > #questions{padding:24px 16px;border-radius:26px}
 #questions > h2{font-size:24px}
 #questions .challenge-faq{grid-template-columns:1fr}
 #questions details{min-height:0}
 #questions summary{padding:18px;gap:12px;font-size:16px}
 #questions details p{padding:0 18px 18px}
}

.frame.challenge-overview{max-width:1124px}
@media(max-width:780px){
 .frame.challenge-overview{width:calc(100% - 44px)}
 .challenge-overview > .challenge-overview-closing{margin-inline:0}
}

.classic-trading-cta .classic-start-art{position:relative;min-height:240px}
.classic-start-art img{position:absolute;object-fit:contain}
.classic-start-art img:first-child{inset:8% auto auto 12%;width:74%;height:85%}
.classic-start-art img:last-child{inset:12% 12% auto auto;width:19%;height:28%}
@media(min-width:761px){.classic-trading-cta .classic-start-art{min-height:310px}}

.challenge-main > .classic-trading-topic{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);gap:48px;align-items:center;scroll-margin-top:100px}
.classic-trading-topic figure,.classic-trading-topic ul{margin:0;padding:24px;border:1px solid var(--challenge-border);border-radius:24px;background:var(--challenge-surface)}
.classic-trading-topic figure{display:flex;align-items:center;justify-content:center;gap:12px;min-height:220px}
.classic-trading-topic figure img{width:min(100%,260px);min-width:0;max-height:250px;object-fit:contain}
.classic-trading-topic figure img + img{width:26%}
.classic-trading-topic li{margin:0 0 10px;list-style-position:inside}
@media(max-width:780px){.challenge-main > .classic-trading-topic{grid-template-columns:minmax(0,1fr);gap:24px}}

.classic-trading-included ol{counter-reset:classic-trading-feature}
.classic-trading-included li{counter-increment:classic-trading-feature;gap:20px;padding:28px}
.classic-trading-included li::before{content:counter(classic-trading-feature,decimal-leading-zero);color:var(--challenge-accent,#9796ff);font-size:16px;font-weight:700;flex:none}
.trader-page > .classic-trading-education{max-width:1088px;margin-inline:auto;padding-block:clamp(48px,7vw,80px);border-top:1px solid var(--challenge-border)}
.classic-trading-education .trader-brokerage{display:grid;grid-template-columns:120px minmax(0,1fr);align-items:center;gap:32px;padding:48px;border:1px solid var(--challenge-border);border-radius:24px;background:var(--challenge-surface)}
.classic-trading-education .trader-related-art{margin:0;width:120px;height:120px}
.classic-trading-education h2{margin:0 0 12px}
.classic-trading-education p{margin:0}
@media(max-width:760px){
 .classic-trading-education .trader-brokerage{grid-template-columns:1fr;gap:16px;padding:24px}
 .classic-trading-education .trader-related-art{width:89px;height:93px}
}

.classic-investing-art figure{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.classic-investing-art figure img,.classic-investing-art figure img + img{width:100%;height:150px}
`,scripts:[`finelo-home.js`]},T=o(),E=c,D=new Map([[`home`,C],[`ai`,w]]),O=Object.assign({"./content/about.json":()=>l(()=>import(`./about-DEVsK3ax.js`),[]),"./content/ai-bot.json":()=>l(()=>import(`./ai-bot-DWifgpv2.js`),[]),"./content/ai-investing-challenge.json":()=>l(()=>import(`./ai-investing-challenge-B_f1Antc.js`),[]),"./content/ai-trader-challenge.json":()=>l(()=>import(`./ai-trader-challenge-BGJqoxES.js`),[]),"./content/app.json":()=>l(()=>import(`./app-RSg-gO18.js`),[]),"./content/bank-charge.json":()=>l(()=>import(`./bank-charge-o4oT6uVp.js`),[]),"./content/blog-ai-trading-bots-for-beginners.json":()=>l(()=>import(`./blog-ai-trading-bots-for-beginners-DZEVIA3A.js`),[]),"./content/blog-ai-trading.json":()=>l(()=>import(`./blog-ai-trading-B0oQ3fZs.js`),[]),"./content/blog-chart-analysis.json":()=>l(()=>import(`./blog-chart-analysis-BVvVLnUZ.js`),[]),"./content/blog-financial-literacy.json":()=>l(()=>import(`./blog-financial-literacy-LRGE887u.js`),[]),"./content/blog-finelo-ai-trading-bots-launch.json":()=>l(()=>import(`./blog-finelo-ai-trading-bots-launch-DFc6HvPs.js`),[]),"./content/blog-investing.json":()=>l(()=>import(`./blog-investing-BJLwkNlf.js`),[]),"./content/blog-machine-learning-trading-bot.json":()=>l(()=>import(`./blog-machine-learning-trading-bot-C7OovFxv.js`),[]),"./content/blog-page-10.json":()=>l(()=>import(`./blog-page-10-4CBqcm-g.js`),[]),"./content/blog-page-2.json":()=>l(()=>import(`./blog-page-2-DEq2ihz6.js`),[]),"./content/blog-page-3.json":()=>l(()=>import(`./blog-page-3-8vb1GGGn.js`),[]),"./content/blog-page-4.json":()=>l(()=>import(`./blog-page-4-CSX7rXWh.js`),[]),"./content/blog-page-5.json":()=>l(()=>import(`./blog-page-5-BZ5pCu6v.js`),[]),"./content/blog-page-6.json":()=>l(()=>import(`./blog-page-6-DMj3XQmU.js`),[]),"./content/blog-page-7.json":()=>l(()=>import(`./blog-page-7-Bwo-4XAE.js`),[]),"./content/blog-page-8.json":()=>l(()=>import(`./blog-page-8-BiRf7y0N.js`),[]),"./content/blog-page-9.json":()=>l(()=>import(`./blog-page-9-CsNCjeg1.js`),[]),"./content/blog-trading-bot-strategies.json":()=>l(()=>import(`./blog-trading-bot-strategies-U4aRczqb.js`),[]),"./content/blog-trading.json":()=>l(()=>import(`./blog-trading-Bi7ElktE.js`),[]),"./content/blog.json":()=>l(()=>import(`./blog-CchWaZb3.js`),[]),"./content/cancel.json":()=>l(()=>import(`./cancel-BJoj9pok.js`),[]),"./content/challenges.json":()=>l(()=>import(`./challenges-BsZsV4hN.js`),[]),"./content/community.json":()=>l(()=>import(`./community-SSi-uNsQ.js`),[]),"./content/compound.json":()=>l(()=>import(`./compound-BvuCViaN.js`),[]),"./content/download.json":()=>l(()=>import(`./download-CVqlztna.js`),[]),"./content/investing-challenge.json":()=>l(()=>import(`./investing-challenge-CcNRgHYI.js`),[]),"./content/login.json":()=>l(()=>import(`./login-iUqWB_t3.js`),[]),"./content/media.json":()=>l(()=>import(`./media-DW05Lzbt.js`),[]),"./content/pricing.json":()=>l(()=>import(`./pricing-Cqx69QbV.js`),[]),"./content/refund.json":()=>l(()=>import(`./refund-DQCj_8fu.js`),[]),"./content/retirement.json":()=>l(()=>import(`./retirement-DX3riTHF.js`),[]),"./content/reviews.json":()=>l(()=>import(`./reviews-CeRcM-xr.js`),[]),"./content/savings.json":()=>l(()=>import(`./savings-Bwj8PnRc.js`),[]),"./content/social-security.json":()=>l(()=>import(`./social-security-t8-Y6YfO.js`),[]),"./content/support.json":()=>l(()=>import(`./support-H6-xg-83.js`),[]),"./content/tools.json":()=>l(()=>import(`./tools-C8oh_0E2.js`),[]),"./content/trading-challenge.json":()=>l(()=>import(`./trading-challenge-D9XBtBGv.js`),[])}),k=Object.assign({"./legacy/finelo-blog-article.js":u,"./legacy/finelo-blog-beginner-faq.js":f,"./legacy/finelo-blog.js":m,"./legacy/finelo-home.js":g,"./legacy/finelo-reviews.js":v});function A(e){let[t,n]=(0,b.useState)(),r=D.get(e);return(0,b.useEffect)(()=>{if(r)return;let t=!0,i=O[`./content/`+e+`.json`];if(!i)return;let a=window.setTimeout(()=>{t&&n({slug:e,error:`页面加载时间较长，请检查连接后重新加载。`})},12e3);return i().then(r=>{t&&n({slug:e,content:r.default})}).catch(()=>{t&&n({slug:e,error:`页面暂时无法加载，请重试。`})}).finally(()=>window.clearTimeout(a)),()=>{t=!1,window.clearTimeout(a)}},[e,r]),r?{slug:e,content:r}:O[`./content/`+e+`.json`]?t?.slug===e?t:void 0:{slug:e,error:`没有找到此页面。`}}function j(){let{page:e=`home`}=r(),t=A(e),i=s(),o=n(`/`),c=(0,b.useRef)(null),[l,u]=(0,b.useState)(``),[d,f]=(0,b.useState)();return(0,b.useEffect)(()=>{let e=t?.content;if(!e||!c.current)return;let n=c.current.shadowRoot??c.current.attachShadow({mode:`open`}),r=document.createElement(`div`);r.className=`fn-document`;let a=document.createElement(`div`);a.className=`fn-body `+e.bodyClass,a.style.visibility=`hidden`,a.inert=!0;let s=`/web2app-demo/finelo-option/finelo/`,l=document.createElement(`style`),d=CSS.supports(`container-type`,`inline-size`)?e.css.replace(/@media\s*(\((?:min|max)-width:[^)]+\))/g,`@container fn-page $1`):e.css;l.textContent=S+`img{height:auto}
`+d.replaceAll(`__FIN_BASE__`,s)+`:host{display:block;isolation:isolate}
.fn-document{font-family:system-ui,sans-serif;overflow-x:clip;container-type:inline-size;container-name:fn-page}
.fn-body{margin:0!important;padding:0!important;min-height:0!important}
*{box-sizing:border-box}
[aria-label="Home navigation"],.fb-header{max-width:100%}
.nav-panel{position:absolute!important;inset:0 0 auto!important;height:min(680px,calc(100dvh - 230px))!important;max-height:85dvh!important;overflow-y:auto;padding:0 20px 20px!important}
.finelo-mobile-menu-top{position:sticky!important;top:0;height:64px!important;padding:0!important}
a:focus-visible,button:focus-visible{outline:3px solid #b7a5ff;outline-offset:2px}`,a.innerHTML=e.html.replaceAll(`__FIN_BASE__`,s),a.querySelectorAll(`img`).forEach(e=>{let t=e.getAttribute(`src`)??``,n=E[t.startsWith(s)?t.slice(35):``];n&&!e.hasAttribute(`width`)&&!e.hasAttribute(`height`)?(e.width=n.width,e.height=n.height):n&&e.hasAttribute(`width`)&&!e.hasAttribute(`height`)&&(e.height=Math.round(e.width*n.height/n.width)),e.decoding=`async`;let r=e.matches(`.hero-art,.hero-art img,.challenge-hero img`);e.hasAttribute(`loading`)||(e.loading=r?`eager`:`lazy`),r&&(e.fetchPriority=`high`)}),a.querySelectorAll(`a[href^="/"]`).forEach(e=>{let t=e.getAttribute(`href`);t.startsWith(`//`)||(e.dataset.appRoute=t,e.setAttribute(`href`,o+t.slice(1)))}),r.append(l,a),n.replaceChildren(r);let p=document.title;document.title=e.title;let m=!1,h=[],g=new Proxy(document,{get(e,t){if(t===`body`)return a;if(t===`documentElement`)return r;if(t===`getElementById`)return e=>n.getElementById(e);if(t===`querySelector`)return a.querySelector.bind(a);if(t===`querySelectorAll`)return a.querySelectorAll.bind(a);if(t===`addEventListener`)return(e,t,r)=>{n.addEventListener(e,t,r),h.push(()=>n.removeEventListener(e,t,r))};let i=Reflect.get(e,t,e);return typeof i==`function`?i.bind(e):i}}),_=new Proxy(window,{get(e,t){if(t===`addEventListener`)return(e,t,n)=>{window.addEventListener(e,t,n),h.push(()=>window.removeEventListener(e,t,n))};let n=Reflect.get(e,t,e);return typeof n==`function`?n.bind(e):n}}),v=e=>{let t=/^\((max|min)-width:\s*(\d+)px\)$/.exec(e),n=matchMedia(e);if(!t)return n;let r=()=>t[1]===`max`?(c.current?.clientWidth??390)<=Number(t[2]):(c.current?.clientWidth??390)>=Number(t[2]),i=new Set,a=r(),o=new ResizeObserver(()=>{let t=r();if(t===a)return;a=t;let n=new MediaQueryListEvent(`change`,{matches:t,media:e});i.forEach(e=>e(n))});return c.current&&o.observe(c.current),h.push(()=>o.disconnect()),new Proxy(n,{get(e,t){if(t===`matches`)return r();if(t===`addEventListener`)return(e,t)=>i.add(t);if(t===`removeEventListener`)return(e,t)=>i.delete(t);let n=Reflect.get(e,t,e);return typeof n==`function`?n.bind(e):n}})},y=e=>{let t=requestAnimationFrame(t=>{m||e(t)});return h.push(()=>cancelAnimationFrame(t)),t},b=e=>{let t=e;if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;let r=t.target.closest(`a[href]`);if(!r)return;if(r.dataset.appRoute){t.preventDefault(),i(r.dataset.appRoute),window.scrollTo(0,0);return}let a=r.getAttribute(`href`)??``;a.startsWith(`#`)?(t.preventDefault(),n.getElementById(a.slice(1))?.scrollIntoView({behavior:`smooth`,block:`start`})):a.startsWith(`/`)&&!a.startsWith(`//`)?(t.preventDefault(),i(a),window.scrollTo(0,0)):/^https?:/.test(a)&&(r.target=`_blank`,r.rel=`noopener noreferrer`)};a.addEventListener(`click`,b);let x=``;for(let t of e.scripts){let e=k[`./legacy/`+t];if(e)try{e.initialize(g,_,localStorage,v,y,window.getComputedStyle.bind(window))}catch{x=`部分交互未能加载，请重新打开此页面。`}}return a.style.visibility=``,a.inert=!1,queueMicrotask(()=>{m||(u(x),f(e))}),()=>{m=!0,a.removeEventListener(`click`,b),a.querySelectorAll(`img`).forEach(e=>{e.removeAttribute(`srcset`),e.src=`data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%221%22 height=%221%22/%3E`}),h.forEach(e=>e()),n.replaceChildren(),document.title=p}},[t?.content,i,o]),(0,T.jsxs)(`div`,{className:`fn-public-page`,children:[(0,T.jsxs)(`div`,{className:`fn-actions`,children:[(0,T.jsx)(a,{to:`/learn`,children:`‹ 学习首页`}),(0,T.jsx)(a,{to:`/challenge`,children:`开始挑战`}),(0,T.jsx)(a,{to:`/discover/catalog`,children:`页面目录`})]}),t?.error&&(0,T.jsxs)(`div`,{role:`alert`,children:[(0,T.jsx)(`p`,{children:t.error}),(0,T.jsx)(`button`,{className:`button button-secondary`,onClick:()=>window.location.reload(),children:`重新加载页面`}),` `,(0,T.jsx)(a,{to:`/discover`,children:`返回 Finelo 首页`})]}),!t&&(0,T.jsx)(`p`,{role:`status`,children:`正在载入 Finelo…`}),l&&(0,T.jsx)(`p`,{role:`alert`,children:l}),t?.content&&d!==t.content&&(0,T.jsx)(`p`,{className:`fn-content-skeleton`,role:`status`,children:`正在打开页面…`}),(0,T.jsx)(`div`,{ref:c,"aria-busy":!!(t?.content&&d!==t.content)})]})}function M(){return(0,T.jsxs)(`div`,{className:`page-stack`,children:[(0,T.jsx)(`h1`,{children:`发现 Finelo`}),(0,T.jsx)(a,{to:`/learn`,children:`‹ 学习首页`}),(0,T.jsx)(a,{className:`button button-primary`,to:`/challenge`,children:`开始挑战问卷`}),x.map(e=>(0,T.jsx)(a,{className:`card`,to:e.route,children:e.title},e.file))]})}export{M as DiscoverCatalog,j as ReplicaPage};