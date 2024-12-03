var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
let next = document.getElementById("next");
next.addEventListener("click", () => {
  swiper.slideNext();
});
let previous = document.getElementById("previous");
previous.addEventListener("click", () => {
  swiper.slidePrev();
});
