const nav = document.querySelector('header nav');
const toggle = nav.querySelector('.nav-toggle');
const menus = [...nav.querySelectorAll('details')];
const mobileGroups = [...nav.querySelectorAll('.header-links details')];
const compact = matchMedia('(max-width:900px)');
const mobileOpen = () => toggle.getAttribute('aria-expanded') === 'true';
function setMobileMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  toggle.textContent = open ? '×' : '☰';
  document.querySelectorAll('main, footer').forEach(section => { section.inert = open; });
  for (const group of mobileGroups) {
    if (open) {
      group.removeAttribute('name');
      group.open = true;
    } else {
      group.open = false;
      group.setAttribute('name', 'coursiv-header');
    }
  }
  if (!open) nav.querySelector('.header-actions details').open = false;
}
toggle.addEventListener('click', () => setMobileMenu(!mobileOpen()));
compact.addEventListener('change', event => {
  if (!event.matches && mobileOpen()) setMobileMenu(false);
});
document.addEventListener('click', event => {
  menus.forEach(menu => {
    if (mobileOpen() && mobileGroups.includes(menu)) return;
    if (!menu.contains(event.target)) menu.open = false;
  });
  if (mobileOpen() && !nav.contains(event.target)) setMobileMenu(false);
});
nav.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const menu = menus.find(item => item.open && (!mobileOpen() || !mobileGroups.includes(item)));
  if (menu) {
    menu.open = false;
    menu.querySelector('summary').focus();
  } else if (mobileOpen()) {
    setMobileMenu(false);
    toggle.focus();
  }
});

const reviewSwitches = [...document.querySelectorAll('.home-review-switch button')];
reviewSwitches.forEach(button => button.addEventListener('click', () => {
  for (const option of reviewSwitches) {
    const active = option === button;
    option.setAttribute('aria-pressed', String(active));
    const track = document.getElementById(option.getAttribute('aria-controls'));
    track.hidden = !active;
    for (const frame of track.querySelectorAll('iframe')) {
      if (active) {
        if (!frame.hasAttribute('src')) frame.src = frame.dataset.src;
      } else {
        frame.removeAttribute('src');
      }
    }
  }
}));
