var open = document.querySelector(".main-menu__toggle");
var popup = document.querySelector(".main-menu__list");
var menu = document.querySelector(".main-menu");
var burger = document.querySelector(".main-menu__burger-wrapper");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("main-menu__list--open");
  open.classList.toggle("main-menu__toggle--close");
  menu.classList.toggle("main-menu--no-transparent");
});

menu.classList.remove("main-menu--no-js");
popup.classList.remove("main-menu__list--no-js");
burger.classList.remove("main-menu__burger-wrapper--no-js");

svg4everybody();
