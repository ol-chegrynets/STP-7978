document.addEventListener('DOMContentLoaded', () => {
  const menuOpen = document.querySelector('.menu-open');
  const menuClose = document.querySelector('.menu-close');
  const menuDropdown = document.querySelector('.header-dropdown');
  const menuLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  
  menuOpen.addEventListener('click', () => {
    menuDropdown.classList.add('open');
  });

  menuClose.addEventListener('click', () => {
    menuDropdown.classList.remove('open');
  });

  document.addEventListener('click', event => {
    if (
      !menuDropdown.contains(event.target) &&
      !menuOpen.contains(event.target)
    ) {
      menuDropdown.classList.remove('open');
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuDropdown.classList.remove('open');
    });
  });

  const options = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        menuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
});
