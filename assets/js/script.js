const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('is-open');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (event) => {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      siteNav.classList.remove('is-open');
    }
  });
}

const revealSections = document.querySelectorAll('.hero, .slide-section, .facts-section, .sources-section, .contact-section');

if ('IntersectionObserver' in window && revealSections.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.18,
    rootMargin: '0px 0px -10% 0px'
  });

  revealSections.forEach((section, index) => {
    if (index === 0) {
      section.classList.add('is-visible');
    }
    revealObserver.observe(section);
  });
} else {
  revealSections.forEach((section) => section.classList.add('is-visible'));
}
