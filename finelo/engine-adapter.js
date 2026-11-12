// The engine evaluates answers, branches and results; this file only renders its session.
(() => {
  const mobileSite = document.querySelector('meta[name=replica-mobile]')?.content;
  const mobileEngine = document.querySelector('meta[name=replica-engine-origin]')?.content;
  const apiBase = (mobileSite ? mobileEngine || '' : '') + '/api';
  const confirmations = new Set(['intro', 'interstitial', 'chart_interstitial', 'loading']);
  const node = (tag, text, cls) => {
    const element = document.createElement(tag);
    if (text != null) element.textContent = text;
    if (cls) element.className = cls;
    return element;
  };
  const button = (label, action, cls = 'primary') => {
    const control = node('button', label, cls);
    control.type = 'button';
    control.addEventListener('click', action);
    return control;
  };
  const own = (obj, key) => obj && Object.hasOwn(obj, key) ? obj[key] : undefined;
  const safeUrl = (value) => {
    if (typeof value !== 'string' || /[\\\s\u0000-\u001f]/.test(value)) return null;
    try {
      const url = new URL(value, mobileSite && mobileEngine ? mobileEngine : location.origin);
      if ((value.startsWith('/') && !value.startsWith('//') && url.origin === (mobileSite && mobileEngine ? mobileEngine : location.origin))
        || (value.startsWith('https://') && url.protocol === 'https:' && !url.username && !url.password)) return url.href;
    } catch {}
    return null;
  };
  const image = (src, alt, cls) => {
    const img = node('img', null, cls);
    img.src = src;
    img.alt = alt;
    return img;
  };
  async function request(path, body) {
    const res = await fetch(apiBase + path, {
      cache: 'no-store',
      ...(body === undefined ? {} : {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
      })
    });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data) throw Object.assign(new Error(data?.error || '问卷服务暂不可用，请重试。'), {status: res.status});
    return data;
  }
  async function mount(app, siteId, fallback) {
    if (mobileSite ? siteId !== mobileSite || !mobileEngine : false) return fallback();
    if (!['finelo','coursiv'].includes(siteId) || !(/^\/sites\//.test(location.pathname) || document.querySelector('meta[name=questionnaire-site]') || mobileSite)) return fallback();
    const brand = siteId === 'finelo' ? 'Finelo' : 'Coursiv';
    const sessionKey = 'replica-engine-session:' + siteId;
    const storage = () => mobileSite ? localStorage : sessionStorage;
    const stored = () => { try {return storage().getItem(sessionKey)} catch {return null} };
    const remember = (value) => {
      try {if (value) storage().setItem(sessionKey, value); else storage().removeItem(sessionKey)} catch {}
    };
    document.body.className = siteId;
    document.title = brand + ' · 问卷';
    let session, cursor, value, busy, timer, locked = false, currentLanguage;
    const event = (type, page) => {
      if (session) void request('/sessions/' + session.id + '/events', {type, page}).catch(() => {});
    };
    const loading = (message, retry) => {
      const main = node('main', null, 'stage');
      main.append(node('h1', brand), node('p', message, 'note'));
      if (retry) main.append(button('重试', retry));
      app.replaceChildren(main);
    };
    const begin = async () => {
      if (locked) return;
      locked = true;
      loading('正在加载问卷…');
      try {
        let id = stored();
        if (id && /^[a-f0-9]{48}$/.test(id)) {
          try {session = await request('/sessions/' + id)}
          catch (e) {if (e.status !== 404) throw e; remember(null)}
        }
        if (!session) {
          let created;
          try {created = await request('/sites/' + siteId + '/sessions', {})}
          catch (e) {if (e.status === 404) {fallback(); return} throw e}
          session = await request('/sessions/' + created.id);
          remember(created.id);
        }
        currentLanguage = session.config.defaultLocale;
        open(session.path.length - 1);
      } catch (e) {loading(e.message, begin)}
      finally {locked = false}
    };
    const page = () => session.config.pages.find((p) => p.id === session.path[cursor]);
    const local = (en, zh) => currentLanguage?.toLowerCase().startsWith('en') ? en : zh;
    const t = (key) => {
      const {config, answers} = session;
      const translated = own(config.locales[currentLanguage], key) ?? own(config.locales[config.defaultLocale], key) ?? key ?? '';
      return translated.replace(/\{\{([\w-]+)(?:\.([\w-]+))?\}\}/g, (_all, field, sub) => {
        const val = own(answers, field);
        const part = sub ? own(val, sub) : val;
        return typeof part === 'string' || typeof part === 'number' ? String(part) : '';
      });
    };
    function open(index) {
      clearInterval(timer);
      cursor = index;
      const p = page();
      const previous = own(session.answers, p.id);
      value = previous === '__skip__' ? undefined : previous;
      value ??= p.type === 'multiple_choice' ? [] : p.type === 'form_input' ? {} :
        p.type === 'slider' ? (p.defaultValue ?? p.min ?? 0) : undefined;
      draw(true);
      scrollTo(0, 0);
      event('exposure', p.id);
      if (p.type === 'result') {event('complete', p.id); event('result_view', p.id)}
    }
    async function advance(nextValue = value) {
      if (busy) return;
      const p = page();
      if (nextValue === undefined && confirmations.has(p.type)) nextValue = true;
      if (nextValue === undefined && p.type === 'text_input' && !p.required) nextValue = '';
      const alert = app.querySelector('.engine-error');
      if (nextValue === undefined) {
        alert.textContent = local('Please answer this question first.', '请先完成本题。');
        return;
      }
      busy = true;
      alert.textContent = '';
      const controls = Array.from(app.querySelectorAll('button,input,select')).filter((item) => !item.disabled);
      controls.forEach((item) => {item.disabled = true});
      try {
        if (cursor === 0) event('start', p.id);
        const data = await request('/sessions/' + session.id + '/answers', {page:p.id, value:nextValue, revision:session.revision});
        session = {...session, ...data};
        open(Math.min(cursor + 1, session.path.length - 1));
      } catch (e) {
        controls.forEach((item) => {item.disabled = false});
        alert.textContent = e.message;
      } finally {busy = false}
    }
    function media(items, target) {
      for (const item of items ?? []) {
        const src = safeUrl(item.src);
        if (!src) continue;
        const wrapper = node('figure', null, 'engine-media');
        const player = item.type === 'image' ? image(src, t(item.alt)) : node(item.type);
        if (item.type !== 'image') {
          player.controls = true;
          player.preload = 'metadata';
          player.src = src;
          const poster = safeUrl(item.poster);
          if (poster && item.type === 'video') player.poster = poster;
        }
        player.addEventListener('error', () => {
          const retry = button(local('Retry media', '重试媒体'), () => {
            retry.remove();
            player.src = src;
          }, 'quiet');
          wrapper.append(retry);
        }, {once:true});
        wrapper.append(player);
        if (item.caption) wrapper.append(node('figcaption', t(item.caption), 'note'));
        if (item.transcript) {
          const transcript = node('details');
          transcript.append(node('summary', local('Transcript', '文字稿')), node('p', t(item.transcript)));
          wrapper.append(transcript);
        }
        target.append(wrapper);
      }
    }
    function choices(p, target) {
      const options = node('div', null, 'options');
      const multi = p.type === 'multiple_choice';
      const selected = (id) => multi ? value.includes(id) : value === id;
      for (const option of p.options) {
        const control = button('', () => {
          if (busy) return;
          if (multi) {
            if (selected(option.id)) value = value.filter((id) => id !== option.id);
            else if (value.length < (p.maxSelect ?? Infinity)) value = [...value, option.id];
          } else value = option.id;
          for (const item of options.children) {
            const active = selected(item.dataset.option);
            item.classList.toggle('selected', active);
            item.setAttribute('aria-pressed', String(active));
          }
          if (!multi && p.autoAdvance) void advance(value);
        }, 'option');
        control.dataset.option = option.id;
        control.setAttribute('aria-pressed', String(selected(option.id)));
        control.classList.toggle('selected', selected(option.id));
        const src = safeUrl(option.image);
        if (src) {
          control.classList.add('has-option-image');
          control.append(image(src, '', 'option-image'));
        } else control.append(node('span', '', 'emoji'));
        control.append(node('span', t(option.label)), node('span', multi ? '' : '›', 'chevron'));
        options.append(control);
      }
      target.append(options);
    }
    function input(p, target) {
      const scalar = (type, label, selected, change, limits) => {
        const wrap = node('label', null, 'engine-field');
        wrap.append(node('span', label));
        const field = node('input', null, 'name-input');
        field.type = type;
        if (selected != null) field.value = selected;
        if (limits.min != null) field.min = limits.min;
        if (limits.max != null) field.max = limits.max;
        if (limits.step != null) field.step = limits.step;
        if (type === 'date') field.max = new Date().toISOString().slice(0,10);
        if (type === 'text') field.maxLength = 2000;
        field.addEventListener('input', () => change(
          ['number','range'].includes(type) && field.value !== '' ? field.valueAsNumber : field.value));
        wrap.append(field);
        target.append(wrap);
        return field;
      };
      if (p.type === 'form_input') {
        for (const f of p.fields ?? []) scalar(f.type, t(f.label) + (f.required ? ' *' : ''), own(value, f.key),
          (v) => {value = {...value, [f.key]:v}}, f);
      } else if (['date_input','text_input','number_input','slider'].includes(p.type)) {
        const kind = {date_input:'date',text_input:'text',number_input:'number',slider:'range'}[p.type];
        const output = node('output');
        const label = t(p.unit ?? '');
        const show = () => {output.value = [value, label].filter((x) => x !== '').join(' ')};
        const field = scalar(kind, label || t(p.title), value, (v) => {value=v; show()}, p);
        if (kind === 'range') {
          show();
          target.append(output);
          for (const n of p.presets ?? []) target.append(button(String(n), () => {value=n; field.value=n; show()}, 'quiet'));
        }
      }
    }
    function draw(focus = false) {
      clearInterval(timer);
      const p = page(), done = p.type === 'result', selected = session.result?.selected;
      const canGoBack = cursor > 0 && (!done || session.config.allowResultBack);
      app.dataset.step = 'engine-' + p.type;
      const header = node('header', null, 'top');
      const mark = node('span', null, 'brand');
      mark.append(image('./assets/' + (siteId === 'finelo' ? 'finelo-logo.svg' : 'coursiv-logo-purple.svg'), brand, 'brand-image'));
      const back = button('‹', () => {event('back', p.id);open(cursor - 1)}, 'icon back');
      back.setAttribute('aria-label', local('Back', '返回上一页'));
      header.append(canGoBack ? back : node('span'), mark);
      const lang = node('select', null, 'engine-locale');
      lang.setAttribute('aria-label', local('Language', '语言'));
      for (const locale of Object.keys(session.config.locales)) {
        const opt = node('option', locale); opt.value=locale; lang.append(opt);
      }
      lang.value = currentLanguage;
      lang.addEventListener('change', () => {currentLanguage=lang.value; draw()});
      header.append(lang.options.length > 1 ? lang : node('span'));
      const target = node('main', null, 'stage engine-stage' + (p.options ? ' question ' + (p.options.some((o) => o.image) ? 'illustrated' : 'text-options') : ''));
      const title = node('h1', t(done ? selected?.title ?? p.title : p.title));
      title.tabIndex = -1;
      target.append(title);
      const description = t(done ? selected?.body ?? p.body : p.body);
      if (description) target.append(node('p', description, 'note engine-copy'));
      media(p.media, target);
      if (p.options) choices(p, target);
      else if (!done) input(p, target);
      if (p.chart) {
        const figure = node('figure', null, 'engine-chart');
        figure.append(node('figcaption', t(p.chart.caption)));
        const max = Math.max(...p.chart.points.map((x) => Math.abs(x.value)), 1);
        for (const point of p.chart.points) {
          const bar = node('div', t(point.label) + ' · ' + point.value);
          bar.style.setProperty('--bar', Math.abs(point.value) / max * 100 + '%');
          figure.append(bar);
        }
        target.append(figure);
      }
      if (done) {
        if (selected?.recommendation) target.append(node('p', t(selected.recommendation), 'summary engine-copy'));
        const href = safeUrl(selected?.cta?.url);
        if (href) {
          const cta = node('a', t(selected.cta.label), 'primary engine-cta');
          cta.href=href; cta.addEventListener('click', () => event('cta_click',p.id)); target.append(cta);
        }
        if (session.config.compliance?.disclaimer) target.append(node('p',t(session.config.compliance.disclaimer),'note'));
        target.append(button(local('Start again', '重新开始'), () => {remember(null);session=null;void begin()}, 'quiet'));
      } else {
        const next = button(local('Continue', '继续'), () => void advance());
        const alert = node('p', '', 'engine-error');
        alert.setAttribute('role', 'alert');
        target.append(alert, next);
        if (p.allowSkip) target.append(button(local('Skip', '跳过'), () => void advance('__skip__'), 'quiet'));
        if (p.loading) {
          const indicator = node('progress'); indicator.max = 100;
          const status = node('p', '', 'note');
          status.setAttribute('role', 'status');
          target.insertBefore(status, alert); target.insertBefore(indicator, status);
          const start = Date.now(), skip = target.querySelector('.quiet');
          next.disabled = true; if (skip) skip.disabled = true;
          const tick = () => {
            const elapsed = Math.min(1, (Date.now() - start) / p.loading.durationMs);
            indicator.value = 100 * elapsed;
            status.textContent = t(p.loading.messages[Math.min(p.loading.messages.length-1,Math.floor(elapsed*p.loading.messages.length))]);
            if (elapsed === 1) {clearInterval(timer);next.disabled=false;if(skip)skip.disabled=false}
          };
          tick(); timer = setInterval(tick, 100);
        }
      }
      const privacy = safeUrl(session.config.compliance?.privacyUrl);
      if (privacy) {
        const link = node('a', local('Privacy policy', '隐私政策'), 'quiet');link.href=privacy;target.append(link);
      }
      const progress = node('progress');
      progress.setAttribute('aria-label', local('Answered steps', '已答题进度'));
      progress.max = session.config.pages.length;
      progress.value = done ? progress.max : cursor;
      app.replaceChildren(header, progress, target);
      if (focus) title.focus({preventScroll:true});
    }
    window.addEventListener('pagehide', () => {
      if (session) void fetch(apiBase + '/sessions/' + session.id + '/events', {
        method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({type:'exit'}),keepalive:true
      }).catch(() => {});
    });
    await begin();
  }
  window.mountReplicaQuestionnaire = mount;
})();
