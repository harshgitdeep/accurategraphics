// SHOW MENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
      });
    }
  };
  
  showMenu('nav-toggle', 'nav-menu');
  
  // REMOVE MENU MOBILE
  const navLink = document.querySelectorAll('.nav__link');
  
  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction));
  
  // SCROLL SECTIONS ACTIVE LINK
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');
  
      const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link && link.classList.add('active-link');
      } else {
        link && link.classList.remove('active-link');
      }
    });
  }
  
  window.addEventListener('scroll', scrollActive);
  
  // CHANGE BACKGROUND HEADER
  function scrollHeader() {
    const nav = document.getElementById('header');
    if (window.scrollY >= 200) {
      nav.classList.add('scroll-header');
    } else {
      nav.classList.remove('scroll-header');
    }
  }
  
  window.addEventListener('scroll', scrollHeader);
  
  // SHOW SCROLL TOP
  function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (window.scrollY >= 560) {
      scrollTop.classList.add('show-scroll');
    } else {
      scrollTop.classList.remove('show-scroll');
    }
  }
  
  window.addEventListener('scroll', scrollTop);
  
  // DARK LIGHT THEME
  const themeButton = document.getElementById('theme-button');
  const darkTheme = 'dark-theme';
  const iconTheme = 'bx-sun';
  
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');
  
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
  
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
  }
  
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
  
  // SCROLL REVEAL ANIMATION
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
  });
  
  sr.reveal(`.home__data, .home__img,
              .about__data, .about__img,
              .services__content, .app__data,
              .contact__data, .footer__content`, {
    interval: 10
  });
  
  // GOOGLE RATING BADGE
  document.addEventListener("DOMContentLoaded", function () {
    showBadge();
  });
  
  function showBadge() {
    document.getElementById('google-rating-badge').style.display = 'block';
  }
  
  document.getElementById('close-badge').addEventListener('click', function () {
    document.getElementById('google-rating-badge').style.display = 'none';
  });
  