const headerNav = document.querySelector('nav');
const menuButton = headerNav.querySelector('.nav-menu-button');
const menu = document.getElementById('finelo-navigation');
const compactFinelo = matchMedia('(max-width:720px)');
const mobileClose = menu.querySelector('.mobile-menu-close');
const menuGroups = [...menu.querySelectorAll('details')];
const language = headerNav.querySelector('.nav-language');
const themeButton = headerNav.querySelector('.theme-button');
function setMenu(open) {
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  menuButton.textContent = open ? '×' : '☰';
  const mobile = open && compactFinelo.matches;
  menuGroups.forEach(detail => {
    if (mobile) detail.removeAttribute('name');
    detail.open = mobile;
    detail.querySelector('summary').inert = mobile;
    if (!mobile) detail.setAttribute('name', 'finelo-navigation');
  });
  if (mobile) {
    menu.scrollTop = 0;
    mobileClose.focus({preventScroll:true});
  }
}
menuButton.addEventListener('click', () => setMenu(menu.hidden));
mobileClose.addEventListener('click', () => { setMenu(false); menuButton.focus(); });
compactFinelo.addEventListener('change', () => { if (!menu.hidden) setMenu(false); });
const themeKey = 'finelo-preview-theme';
function applyTheme(light) {
  document.body.classList.toggle('light', light);
  themeButton.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  themeButton.textContent = light ? '☾' : '☼';
}
try { applyTheme(localStorage.getItem(themeKey) === 'light'); } catch {}
themeButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light');
  applyTheme(light);
  try { localStorage.setItem(themeKey, light ? 'light' : 'dark'); } catch {}
});
document.addEventListener('click', event => {
  if (!headerNav.contains(event.target)) setMenu(false);
  if (!language.contains(event.target)) language.open = false;
});
headerNav.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (language.open) {
    language.open = false;
    language.querySelector('summary').focus();
  } else if (!menu.hidden) {
    setMenu(false);
    menuButton.focus();
  }
});

const botPreview = document.querySelector('.bot-phone');
botPreview?.addEventListener('click', event => {
  const action = event.target.closest('button[data-choice]');
  if (action) botPreview.querySelector('[role=status]').textContent = action.dataset.choice + ' · Demo';
});

const videoRail = document.getElementById('finelo-video-rail');
document.querySelector('.video-controls')?.addEventListener('click', event => {
  const button = event.target.closest('button[data-direction]');
  if (!button) return;
  const width = videoRail.firstElementChild.getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(videoRail).columnGap);
  const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  videoRail.scrollBy({left: (width + gap) * Number(button.dataset.direction), behavior});
});
