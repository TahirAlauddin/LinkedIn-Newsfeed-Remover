// Updated selector to target the main feed container more accurately
const feedSelector = 'main.scaffold-layout__main[aria-label="Main Feed"]';
const feedSelector2 = 'aside.scaffold-layout__aside[aria-label="Add to your feed"]';

const hideFeed = () => {
  const feed = document.querySelector(feedSelector);
  const feed2 = document.querySelector(feedSelector2);

  if (feed) {
    feed.style.display = 'none';
    feed2.style.display = 'none';
  }
};

// Run hideFeed when the document is loaded or dynamically updated
document.addEventListener('DOMContentLoaded', hideFeed);
new MutationObserver(hideFeed).observe(document.body, { childList: true, subtree: true });
