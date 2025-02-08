  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const mobileMenu = document.getElementById('mobile-menu');
  const navUl = document.querySelector('nav ul');

  mobileMenu.addEventListener('click', function() {
    navUl.classList.toggle('show');
  });