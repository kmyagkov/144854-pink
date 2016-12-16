var open = document.querySelector(".main-menu__toggle");
var popup = document.querySelector(".main-menu__list");
var logo = document.querySelector(".logo--page-header");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("main-menu__list--open");
  logo.classList.toggle("logo--no-transparent");
  open.classList.toggle("main-menu__toggle--close");
});

// close.addEventListener("click", function(event) {
//  event.preventDefault();
//  popup.classList.remove("main-menu__burger-popup--open");
//});
