const headerTemplate = `
  <nav>
    <a class="top_nav" href="#" data-page="index">Home</a>
    <a class="top_nav" href="#" data-page="projects">Projects</a>
    <a class="top_nav" href="#" data-page="tools">Tools</a>
    <a class="top_nav" href="#" data-page="about">About</a>
  </nav>
`;

document.querySelector('.js-menu').innerHTML = headerTemplate;

const pages = {
  index: {
    bgClass: 'green',
    content: '<h1>Home</h1><p>Welcome to the home page</p>'
  },
  projects: {
    bgClass: 'lightblue',
    content: '<h1>Projects</h1><p>Here are some projects...</p>'
  },
  tools: {
    bgClass: 'red',
    content: '<h1>Tools</h1><p>Useful tools section</p>'
  },
  about: {
    bgClass: 'orange',
    content: '<h1>About</h1><p>About this site/person</p>'
  }
};

function loadPage(pageKey) {
  const page = pages[pageKey];

  if (!page) {
    console.warn(`Page not found: ${pageKey}`);
    return;
  }

  // Update main content
  document.querySelector('.js-content').innerHTML = page.content;

  // Update background class
  document.body.classList.remove('green', 'lightblue', 'red', 'orange');
  document.body.classList.add(page.bgClass);

  // Highlight active link (optional but recommended)
  document.querySelectorAll('.top_nav').forEach(el => {
    el.classList.toggle('active', el.dataset.page === pageKey);
  });

  // Optional: update URL without reload (better UX)
  // history.pushState({ page: pageKey }, '', `#${pageKey}`);
}

// Single delegated click handler — clean & efficient
document.addEventListener('click', e => {
  const link = e.target.closest('.top_nav');
  if (!link) return;

  e.preventDefault();

  const pageKey = link.dataset.page;
  if (pageKey) {
    loadPage(pageKey);
  }
});

// Optional: support browser back/forward buttons
// window.addEventListener('popstate', e => {
//   const page = e.state?.page || 'index';
//   loadPage(page);
// });

// Load initial page
loadPage('index');