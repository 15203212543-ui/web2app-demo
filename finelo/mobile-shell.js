(() => {
  const site = document.querySelector('meta[name="replica-mobile"]')?.content;
  if (!['finelo', 'coursiv'].includes(site)) return;
  const capacitor = window.Capacitor;
  const native = capacitor?.isNativePlatform();
  const root = document.documentElement;
  const page = location.pathname.split('/').pop();
  const quiz = new URLSearchParams(location.search).get('quiz') === site;
  const homePath = './' + site + '-home.html';
  const home = page === site + '-home.html';
  const ai = site === 'finelo' && /^finelo-ai(?:[.-])/.test(page);
  const tools = page === site + '-tools.html';
  const name = site === 'finelo' ? 'Finelo' : 'Coursiv';
  root.classList.add('mobile-layout');
  root.dataset.mobileSite = site;
  if (quiz) root.classList.add('mobile-quiz');
  if (home) root.classList.add('mobile-site-home');
  if (native) root.classList.add('replica-native');

  const toolbar = document.createElement('div');
  toolbar.className = 'app-topbar';
  if (!home) {
    const back = document.createElement('button');
    back.className = 'app-back';
    back.type = 'button';
    back.setAttribute('aria-label', 'Back');
    back.textContent = '‹';
    back.addEventListener('click', () => {
      if (document.referrer && new URL(document.referrer).origin === location.origin &&
          !new URL(document.referrer).pathname.endsWith('/app-demo.html')) history.back();
      else location.replace(homePath);
    });
    toolbar.append(back);
  }
  const title = document.createElement('span');
  title.textContent = name + (quiz ? ' · Quiz' : tools ? ' · Tools' : '');
  toolbar.append(title);
  if (!home) document.body.append(toolbar);

  if (!quiz) {
    const tabs = document.createElement('div');
    tabs.className = 'app-tabbar';
    tabs.setAttribute('role', 'navigation');
    tabs.setAttribute('aria-label', 'App navigation');
    const paths = [
      ['Home', homePath, home, 'M3 10l9-7 9 7v10H3z M9 20v-6h6v6'],
      ['Quiz', './?quiz=' + site, false, 'M6 3h12v18H6z M9 8h6 M9 12h6 M9 16h4'],
      [site === 'coursiv' ? 'AI Tools' : 'Calculators', './' + site + '-tools.html', tools, 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z'],
    ];
    if (site === 'finelo') paths.splice(2, 0, [
      'AI Tools', './finelo-ai.html', ai, 'M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5z',
    ]);
    for (const [label, href, active, icon] of paths) {
      const link = document.createElement('a');
      link.href = href;
      if (active) link.setAttribute('aria-current', 'page');
      link.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="' + icon + '"/></svg><span>' + label + '</span>';
      tabs.append(link);
    }
    document.body.append(tabs);
  }

  document.addEventListener('click', event => {
    const anchor = event.target.closest?.('a[href]');
    if (event.defaultPrevented || !anchor) return;
    const url = new URL(anchor.href, location.href);
    if (url.origin === location.origin || !['https:', 'http:'].includes(url.protocol)) return;
    const browser = native && capacitor.Plugins.Browser;
    if (browser) {
      event.preventDefault();
      void browser.open({url: url.href});
    } else if (window !== window.top) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
    }
  });
  if (native) void capacitor.Plugins.App?.addListener('backButton', ({canGoBack}) => {
    if (canGoBack) window.history.back();
    else if (!home) location.replace(homePath);
    else void capacitor.Plugins.App.exitApp();
  });
})();
