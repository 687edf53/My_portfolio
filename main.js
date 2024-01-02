// Elements
const burgerMenu = document.querySelector('.burger-menu'),
      navbarLinks = document.querySelector('.navbar ul');

// Navbar
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('close');
  navbarLinks.classList.toggle('visible')
})