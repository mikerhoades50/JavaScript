const headerTemplate = `
    <nav>
        <a class="top_nav" href="javascript:loadpage('index')">Home</a>
        <a class="top_nav" href="javascript:loadpage('projects')">Projects</a>
        <a class="top_nav" href="javascript:loadpage('tools')">Tools</a>
        <a class="top_nav" href="javascript:loadpage('about')">About</a>
    </nav>
`;

// Better to use template literal for HTML
document.querySelector('.js-menu').innerHTML = headerTemplate;

const pages = {
    'index': {
        color: 'green',
        template: '<h1>Home</h1><p>Welcome to the home page</p>'
    },
    'projects': {
        color: 'lightblue',
        template: '<h1>Projects</h1><p>Here are some projects...</p>'
    },
    'tools': {
        color: 'yellow',
        template: '<h1>Tools</h1><p>Useful tools section</p>'
    },
    'about': {
        color: 'red',
        template: '<h1>About</h1><p>About this site/person</p>'
    }
};

// Function name should match what you use in the links
const loadpage = (pageKey) => {
    const page = pages[pageKey];
    
    if (!page) {
        console.warn(`Page "${pageKey}" not found`);
        return;
    }

    // Destructuring works, but only if the property names match
    const { color, template } = page;

    document.querySelector('.js-content').innerHTML = template;
    document.body.style.backgroundColor = color;
};

// Optional: make links look nicer (prevent default jump behavior)
document.addEventListener('click', (e) => {
    if (e.target.matches('.top_nav')) {
        e.preventDefault();           // stop # jump
        const href = e.target.getAttribute('href');
        const page = href.match(/loadpage\('(.*)'\)/)?.[1];
        if (page) loadpage(page);
    }
});

// Initial load
loadpage('index');