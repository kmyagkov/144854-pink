var open = document.querySelector(".main-menu__toggle");
var popup = document.querySelector(".main-menu__list");
var menu = document.querySelector(".main-menu");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("main-menu__list--open");
  open.classList.toggle("main-menu__toggle--close");
  menu.classList.toggle("main-menu--no-transparent");
});

svg4everybody();
