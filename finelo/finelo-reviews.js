const reviewPlatforms = {
  play: { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=io.zimran.finelo&hl=en', cards: [
    ['Makes learning to trade fun', '“Finelo has made learning to trade fun. It’s easy to follow and it helps to understand why the markets do what they do. I recommend this to anyone wanting to learn how to trade!”', 'Chad F. · January 2025'],
    ['Perfect for beginners', '', 'December 2024'],
  ] },
  apple: { label: 'App Store', url: 'https://apps.apple.com/si/app/finelo-master-trading/id6670422243', cards: [
    ['Exceptional approach to teaching investing', '', ''],
    ['An invaluable resource for everyone', '', ''],
  ] },
};
let platform = 'play', slide = 0;
const reviewControls = document.querySelector('.review-controls');
const platformButtons = document.querySelectorAll('[data-platform]');
function showReview() {
  const {label, url, cards} = reviewPlatforms[platform];
  const [title, quote, date] = cards[slide] ?? ['Read Finelo reviews on the App Store', '', ''];
  document.querySelector('#review-platform').textContent = label;
  document.querySelector('#review-title').textContent = title;
  for (const [selector, value] of [['#review-quote', quote], ['#review-date', date]]) {
    const item = document.querySelector(selector);
    item.hidden = !value;
    item.textContent = value;
  }
  const source = document.querySelector('#review-source');
  source.href = url;
  source.textContent = 'View on ' + label + ' ↗';
  reviewControls.hidden = cards.length < 2;
  platformButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.platform === platform)));
  reviewControls.querySelectorAll('[data-slide]').forEach(item => item.setAttribute('aria-pressed', String(+item.dataset.slide === slide)));
}
platformButtons.forEach(item => item.addEventListener('click', () => { platform = item.dataset.platform; slide = 0; showReview(); }));
reviewControls.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;
  const total = reviewPlatforms[platform].cards.length;
  if (!total) return;
  slide = button.dataset.slide != null ? +button.dataset.slide : (slide + +button.dataset.move + total) % total;
  showReview();
});
