var open = document.querySelector(".main-menu__toggle");
var popup = document.querySelector(".main-menu__burger-popup");
var close = popup.querySelector(".main-menu__close");

open.addEventListener ("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("main-menu__burger-popup--open")
})

close.addEventListener ("click", function(event) {
  event.preventDefault();
  popup.classList.remove("main-menu__burger-popup--open");
})
