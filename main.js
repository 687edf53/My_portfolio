// Elements
const burgerMenu = document.querySelector(".burger-menu"),
  navbarLinks = document.querySelector(".navbar ul"),
  navbar = document.querySelector(".navbar"),
  sections = document.querySelectorAll("section"),
  aboutMe = document.querySelector("#home .content h1");

// Navbar
function bugerMenuFunc() {
  burgerMenu.classList.toggle("close");
  navbarLinks.classList.toggle("visible");
}

function bugerMenuFuncClose() {
  burgerMenu.classList.remove("close");
  navbarLinks.classList.remove("visible");
}

navbarLinks.childNodes.forEach((link) =>
  link.addEventListener("click", bugerMenuFuncClose)
);
burgerMenu.addEventListener("click", bugerMenuFunc);
sections.forEach((section) => {
  section.addEventListener("click", bugerMenuFuncClose);
});

// Home section
