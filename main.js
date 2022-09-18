const burger = document.querySelector(".hamburger");
const burgerFirst = document.querySelector(".hamburger-line1");
const burgerSecond = document.querySelector(".hamburger-line2");
const burgerThird = document.querySelector(".hamburger-line3");
const nav = document.querySelector(".main-header_nav");

burger.addEventListener("click", () => {
  burgerFirst.classList.toggle("line-1");
  burgerSecond.classList.toggle("line-2");
  burgerThird.classList.toggle("line-3");
  nav.classList.toggle("block");
  nav.classList.toggle("visible");
});
