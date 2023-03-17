// <!-- The following 9 lines of code was adapted from https://www.youtube.com/watch?v=OFKBep95lb4&list=LL&index=2 -->

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
