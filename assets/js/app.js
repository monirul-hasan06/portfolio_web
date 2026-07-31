'use strict';

const projects = [
  {
    id: 'blink-chat',
    title: 'Blink Chat',
    monogram: 'BL',
    year: '2026',
    category: ['featured', 'fullstack'],
    type: 'Private messaging PWA',
    status: 'Live',
    accent: '#8b5cf6',
    summary: 'A mobile-first, text-only private messaging app with disappearing messages, groups, replies, push notifications, and persistent login.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'PWA'],
    features: [
      'Username and PIN authentication without email or phone sign-in.',
      'Direct and group chat with reply, delete, block, presence, typing, and last-seen behavior.',
      'Web Push notifications, installable PWA support, light/dark themes, and 24-hour post-view expiry.'
    ],
    github: 'https://github.com/monirul-hasan06/blink-chat',
    live: 'https://blink-texting.vercel.app'
  },
  {
    id: 'metalix',
    title: 'Metalix Commerce',
    monogram: 'MX',
    year: '2026',
    category: ['featured', 'frontend'],
    type: 'Mobile-first storefront',
    status: 'Live',
    accent: '#f97316',
    summary: 'A modern T-shirt storefront with typed product data, cart state, validated order flows, and responsive shopping interactions.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'Zod'],
    features: [
      'Product browsing and a mobile-first storefront experience.',
      'Zustand state management with React Hook Form and Zod validation.',
      'Order validation and configuration for WhatsApp, bKash, and Nagad contact flows.'
    ],
    github: 'https://github.com/monirul-hasan06/metalix',
    live: 'https://metalix-shop.vercel.app'
  },
  {
    id: 'elevated-library',
    title: 'Elevated Library',
    monogram: 'EL',
    year: '2026',
    category: ['featured', 'fullstack'],
    type: 'Digital product platform',
    status: 'Live',
    accent: '#06b6d4',
    summary: 'A PDF-selling platform with manual payments, guest and account checkout, admin tools, private files, and bilingual UI support.',
    tech: ['Next.js', 'Supabase', 'Cloudflare R2', 'Resend', 'TypeScript'],
    features: [
      'Public catalog, categories, product pages, FAQ, notifications, and coming-soon flows.',
      'Guest and signed-in checkout with bKash/Nagad order submission.',
      'Admin management, Supabase RLS, private R2 downloads, email delivery, and light/dark mode.'
    ],
    github: 'https://github.com/monirul-hasan06/elevated-library',
    live: 'https://elevated-library.vercel.app'
  },
  {
    id: 'bubt-blood-bank',
    title: 'BUBT Blood Bank',
    monogram: 'BB',
    year: '2026',
    category: ['featured', 'fullstack'],
    type: 'Community blood platform',
    status: 'Live',
    accent: '#ef4444',
    summary: 'A responsive blood-bank application designed to connect donors, blood requests, and community information in one place.',
    tech: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Vite'],
    features: [
      'Donor and blood-request workflows for a university community.',
      'Supabase-backed data and authentication structure.',
      'Responsive React interface deployed on Vercel.'
    ],
    github: 'https://github.com/monirul-hasan06/bubt-blood-bank',
    live: 'https://bubt-blood-bank.vercel.app'
  },
  {
    id: 'public-wall',
    title: 'Public Wall',
    monogram: 'PW',
    year: '2026',
    category: ['featured', 'fullstack'],
    type: 'Community publishing app',
    status: 'Live',
    accent: '#eab308',
    summary: 'A public writing and community-posting application with a TypeScript frontend and Supabase-backed data layer.',
    tech: ['React', 'TypeScript', 'Supabase', 'Vite', 'Tailwind'],
    features: [
      'Public wall experience for posting and reading community content.',
      'Supabase schema and application data integration.',
      'A responsive, deployed TypeScript interface.'
    ],
    github: 'https://github.com/monirul-hasan06/public-wall',
    live: 'https://deyal-likhon.vercel.app'
  },
  {
    id: 'cloudgallery',
    title: 'CloudGallery',
    monogram: 'CG',
    year: '2026',
    category: ['featured', 'fullstack'],
    type: 'Gallery application',
    status: 'Live',
    accent: '#3b82f6',
    summary: 'A split frontend-and-backend gallery project for organizing and presenting visual content through a web interface.',
    tech: ['JavaScript', 'CSS', 'HTML', 'Frontend', 'Backend'],
    features: [
      'Separate frontend and backend project structure.',
      'Responsive gallery presentation and browser interactions.',
      'Deployed web application with a public source repository.'
    ],
    github: 'https://github.com/monirul-hasan06/cloudgallery',
    live: 'https://cloudgallery-one.vercel.app'
  },
  {
    id: 'msn-bangla-learn',
    title: 'MSN Bangla Learn',
    monogram: 'MS',
    year: '2026',
    category: ['fullstack'],
    type: 'Learning platform',
    status: 'Live',
    accent: '#10b981',
    summary: 'A Bangla-focused learning application built with TypeScript, Supabase, reusable components, and a modern Vite workflow.',
    tech: ['TypeScript', 'Supabase', 'React', 'Vite', 'PL/pgSQL'],
    features: [
      'Content-oriented learning interface with reusable React components.',
      'Supabase-backed application data and database logic.',
      'Production deployment with a TypeScript-first codebase.'
    ],
    github: 'https://github.com/monirul-hasan06/msn-bangla-learn',
    live: 'https://msn-orcin-theta.vercel.app'
  },
  {
    id: 'pdf-shop',
    title: 'PDF Shop',
    monogram: 'PS',
    year: '2026',
    category: ['fullstack'],
    type: 'PDF marketplace',
    status: 'Source',
    accent: '#ec4899',
    summary: 'A buyer, seller, and admin marketplace for PDF books with manual payment verification and controlled downloads.',
    tech: ['Next.js', 'TypeScript', 'Express', 'MongoDB', 'Node.js'],
    features: [
      'Buyer, seller, and admin authentication roles.',
      'Manual bKash, Nagad, and Rocket payment submission with admin verification.',
      'Seller upload dashboard and PDF access after approval.'
    ],
    github: 'https://github.com/monirul-hasan06/pdf-shop',
    live: ''
  },
  {
    id: 'salami-hunters',
    title: 'Salami Hunters',
    monogram: 'SH',
    year: '2026',
    category: ['fullstack', 'game'],
    type: 'Eid mini-game platform',
    status: 'Source',
    accent: '#f59e0b',
    summary: 'A transparent Eid Salami mini-game platform with server-checked reward limits and a Supabase data model.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'API routes'],
    features: [
      'Fair, visible reward caps without hidden payout manipulation.',
      'Server-side reward calculation and allowance checks.',
      'Supabase schema, seed data, and Vercel-ready deployment structure.'
    ],
    github: 'https://github.com/monirul-hasan06/salami-hunters',
    live: ''
  },
  {
    id: 'football-penalty-game',
    title: 'Football Penalty Game',
    monogram: 'FG',
    year: '2026',
    category: ['frontend', 'game'],
    type: 'Browser game',
    status: 'Source',
    accent: '#22c55e',
    summary: 'A lightweight football penalty game built for the browser with JavaScript, CSS animations, and a simple game loop.',
    tech: ['JavaScript', 'CSS', 'HTML', 'Game UI'],
    features: [
      'Browser-based penalty interaction and score feedback.',
      'CSS-driven visual presentation with JavaScript game behavior.',
      'Small, focused project structure for quick play.'
    ],
    github: 'https://github.com/monirul-hasan06/football-penalty-game',
    live: ''
  },
  {
    id: 'kodom',
    title: 'Kodom',
    monogram: 'KD',
    year: '2026',
    category: ['frontend'],
    type: 'JavaScript web project',
    status: 'Source',
    accent: '#14b8a6',
    summary: 'A JavaScript application from the current project collection, included as part of the portfolio’s broader frontend work.',
    tech: ['JavaScript', 'Frontend', 'Responsive UI'],
    features: [
      'JavaScript-focused application logic.',
      'Responsive browser interface.',
      'Public source for code review and iteration.'
    ],
    github: 'https://github.com/monirul-hasan06/kodom',
    live: ''
  },
  {
    id: 'cr-ke-bachao',
    title: 'CR Ke Bachao',
    monogram: 'CR',
    year: '2026',
    category: ['frontend', 'game'],
    type: 'Interactive web project',
    status: 'Source',
    accent: '#f43f5e',
    summary: 'A JavaScript-based interactive project built as a focused browser experience.',
    tech: ['JavaScript', 'CSS', 'HTML'],
    features: [
      'Interactive browser behavior written in JavaScript.',
      'Compact frontend structure and visual feedback.',
      'Public repository for continued improvement.'
    ],
    github: 'https://github.com/monirul-hasan06/cr-ke-bachao',
    live: ''
  },
  {
    id: 'g3-architect',
    title: 'G3 Architect',
    monogram: 'G3',
    year: '2026',
    category: ['frontend'],
    type: 'Responsive landing page',
    status: 'Source',
    accent: '#0ea5e9',
    summary: 'A frontend architecture landing page used to practice structured sections, responsive design, and visual hierarchy.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Responsive design'],
    features: [
      'Multi-section marketing layout.',
      'Responsive typography and grid practice.',
      'Clean static frontend implementation.'
    ],
    github: 'https://github.com/monirul-hasan06/G3-Architect',
    live: ''
  },
  {
    id: 'article-desk',
    title: 'Article Desk',
    monogram: 'AD',
    year: '2026',
    category: ['frontend'],
    type: 'Content interface',
    status: 'Source',
    accent: '#a855f7',
    summary: 'A content-oriented HTML project for presenting articles in a clear, structured browser layout.',
    tech: ['HTML', 'CSS', 'Content design'],
    features: [
      'Article-centered content hierarchy.',
      'Simple, readable page structure.',
      'Static implementation suitable for lightweight hosting.'
    ],
    github: 'https://github.com/monirul-hasan06/article-desk',
    live: ''
  },
  {
    id: 'task-manager',
    title: 'Task Manager',
    monogram: 'TM',
    year: '2026',
    category: ['frontend'],
    type: 'Productivity app',
    status: 'Source',
    accent: '#6366f1',
    summary: 'A compact task-management project for organizing daily work and practicing browser application state.',
    tech: ['JavaScript', 'Task UI', 'Browser storage'],
    features: [
      'Create and organize everyday tasks.',
      'Simple productivity-focused browser interface.',
      'JavaScript state and interaction practice.'
    ],
    github: 'https://github.com/monirul-hasan06/task-manager',
    live: ''
  },
  {
    id: 'portfolio-web',
    title: 'Portfolio Web',
    monogram: 'MW',
    year: '2026',
    category: ['frontend'],
    type: 'Personal portfolio',
    status: 'Live',
    accent: '#8b5cf6',
    summary: 'The earlier personal website rebuilt into this responsive, theme-aware portfolio with searchable project data and a downloadable CV.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Accessibility'],
    features: [
      'Light and dark themes with saved preference.',
      'Responsive navigation, project filters, search, and detail dialogs.',
      'Optimized images, metadata, CV download, and static Vercel deployment.'
    ],
    github: 'https://github.com/monirul-hasan06/portfolio_web',
    live: 'https://me-at-portfolio-web.vercel.app'
  }
];

const root = document.documentElement;
const header = document.getElementById('site-header');
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const grid = document.getElementById('projects-grid');
const resultCount = document.getElementById('project-result-count');
const showAllButton = document.getElementById('show-all-projects');
const searchInput = document.getElementById('project-search');
const filterButtons = [...document.querySelectorAll('.filter-button')];
const projectDialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
const dialogClose = document.querySelector('.dialog-close');
const backToTop = document.querySelector('.back-to-top');

let activeFilter = 'all';
let expanded = false;

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f7f7fb' : '#0b1020');
  themeButton.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
}

setTheme(root.dataset.theme || 'dark');

themeButton.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

function setMenu(open) {
  menuButton.classList.toggle('active', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileMenu.hidden = !open;
  document.body.classList.toggle('menu-open', open);
}

menuButton.addEventListener('click', () => setMenu(mobileMenu.hidden));
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
window.addEventListener('resize', () => {
  if (window.innerWidth > 880) setMenu(false);
});

function projectCard(project) {
  const liveLink = project.live
    ? `<a href="${project.live}" target="_blank" rel="noreferrer" aria-label="Open ${project.title} live site">Live <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M10 14 19 5M19 14v5H5V5h5"/></svg></a>`
    : `<a href="${project.github}" target="_blank" rel="noreferrer" aria-label="Open ${project.title} source">Source <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M10 14 19 5M19 14v5H5V5h5"/></svg></a>`;

  return `
    <article class="project-card" style="--card-accent:${project.accent}">
      <div class="project-art">
        <span class="project-status">${project.status}</span>
        <span class="project-monogram" aria-hidden="true">${project.monogram}</span>
      </div>
      <div class="project-content">
        <div class="project-meta"><span>${project.type}</span><span>${project.year}</span></div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="project-tech">${project.tech.slice(0, 4).map((item) => `<span>${item}</span>`).join('')}</div>
        <div class="project-actions">
          <button class="project-detail-button" type="button" data-project="${project.id}">Details <span aria-hidden="true">→</span></button>
          ${liveLink}
        </div>
      </div>
    </article>`;
}

function getMatchedProjects() {
  const query = searchInput.value.trim().toLowerCase();
  return projects.filter((project) => {
    const filterMatch = activeFilter === 'all' || project.category.includes(activeFilter);
    const haystack = [project.title, project.type, project.summary, ...project.tech].join(' ').toLowerCase();
    return filterMatch && (!query || haystack.includes(query));
  });
}

function renderProjects() {
  const matched = getMatchedProjects();
  const queryActive = Boolean(searchInput.value.trim()) || activeFilter !== 'all';
  const visible = expanded || queryActive ? matched : matched.slice(0, 6);
  grid.innerHTML = visible.length ? visible.map(projectCard).join('') : '<div class="empty-projects">No project matches that search. Try another term or filter.</div>';
  resultCount.textContent = `${matched.length} project${matched.length === 1 ? '' : 's'} found`;
  showAllButton.hidden = queryActive || matched.length <= 6;
  showAllButton.textContent = expanded ? 'Show fewer projects' : `Show all ${matched.length} projects`;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    expanded = false;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderProjects();
  });
});

searchInput.addEventListener('input', renderProjects);
showAllButton.addEventListener('click', () => {
  expanded = !expanded;
  renderProjects();
  if (!expanded) document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  const liveButton = project.live ? `<a class="button button-primary" href="${project.live}" target="_blank" rel="noreferrer">Open live site</a>` : '';
  dialogContent.innerHTML = `
    <div class="dialog-hero" style="--dialog-accent:${project.accent}"><span class="dialog-monogram" aria-hidden="true">${project.monogram}</span></div>
    <div class="dialog-body" style="--dialog-accent:${project.accent}">
      <p class="eyebrow">${project.type} · ${project.year}</p>
      <h2 id="dialog-title">${project.title}</h2>
      <p>${project.summary}</p>
      <ul class="dialog-features">${project.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>
      <div class="tag-list">${project.tech.map((item) => `<span>${item}</span>`).join('')}</div>
      <div class="dialog-actions">
        ${liveButton}
        <a class="button button-ghost" href="${project.github}" target="_blank" rel="noreferrer">View source</a>
      </div>
    </div>`;
  projectDialog.showModal();
  document.body.style.overflow = 'hidden';
}

grid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-project]');
  if (button) openProject(button.dataset.project);
});

function closeDialog() {
  projectDialog.close();
  document.body.style.overflow = '';
}

dialogClose.addEventListener('click', closeDialog);
projectDialog.addEventListener('click', (event) => {
  if (event.target === projectDialog) closeDialog();
});
projectDialog.addEventListener('close', () => {
  document.body.style.overflow = '';
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55%', threshold: 0 });
sections.forEach((section) => sectionObserver.observe(section));

function updateScrollUI() {
  header.classList.toggle('scrolled', window.scrollY > 18);
  backToTop.classList.toggle('visible', window.scrollY > 700);
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const original = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Email copied';
    } catch {
      button.textContent = button.dataset.copy;
    }
    window.setTimeout(() => { button.textContent = original; }, 2200);
  });
});

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', () => {
  const submit = contactForm.querySelector('.submit-button');
  submit.textContent = 'Sending…';
  submit.disabled = true;
});

document.getElementById('current-year').textContent = new Date().getFullYear();
renderProjects();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
