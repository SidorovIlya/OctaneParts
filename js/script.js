var menuBtn = document.querySelector(".page-header-menu-btn");
var mobileMenu = document.querySelector(".page-header-menu");

mobileMenu.classList.add("page-header-menu--hide");
menuBtn.classList.remove("page-header__menu-btn--nojs");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBtn.classList.toggle("page-header-menu-btn--close");
  mobileMenu.classList.toggle("page-header-menu--hide");
});
