var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true,
});

let next = document.getElementById("next");
next.addEventListener("click", () => {
  swiper.slideNext();
});
let previous = document.getElementById("previous");
previous.addEventListener("click", () => {
  swiper.slidePrev();
});

let description_box1 = document.getElementById("description_box1");
let description_box2 = document.getElementById("description_box2");
let description_box3 = document.getElementById("description_box3");
let description_box_img = document.getElementById("description_box_img");
description_box1.addEventListener("mouseenter", () => {
  description_box1.classList.add("description_box_dark");
  description_box_img1.style.display = "flex";
});
description_box2.addEventListener("mouseenter", () => {
  description_box2.classList.add("description_box_dark");
  description_box_img2.style.display = "flex";
});
description_box3.addEventListener("mouseenter", () => {
  description_box3.classList.add("description_box_dark");
  description_box_img3.style.display = "flex";
});
description_box1.addEventListener("mouseleave", () => {
  description_box1.classList.remove("description_box_dark");
  description_box_img1.style.display = "none";
});
description_box2.addEventListener("mouseleave", () => {
  description_box2.classList.remove("description_box_dark");
  description_box_img2.style.display = "none";
});
description_box3.addEventListener("mouseleave", () => {
  description_box3.classList.remove("description_box_dark");
  description_box_img3.style.display = "none";
});

let play_btn = document.getElementById("play_btn");
let body = document.getElementById("body");
play_btn.addEventListener("click", () => {
  body.style.overflow = "hidden";
  let video_body = document.createElement("div");
  video_body.classList.add("video_body");
  document.body.appendChild(video_body);
  let video_box = document.createElement("div");
  video_box.classList.add("video_box");
  video_body.appendChild(video_box);
  let video = document.createElement("video");
  video.src = "./images/DESSERT MAKING B-ROLL VIDEO (1).mp4";
  video.classList.add("video");
  video.play();
  video_box.appendChild(video);
  let close_btn = document.createElement("button");
  close_btn.classList.add("close_btn");
  close_btn.textContent = "x";
  video_box.appendChild(close_btn);
  close_btn.addEventListener("click", () => {
    video_body.style.display = "none";
    video.pause();
    body.style.overflow = "auto";
  });
  video.addEventListener("ended", () => {
    video_body.style.display = "none";
    body.style.overflow = "auto";
  });
});

let header_arrow_box = document.getElementById("header_arrow_box");
let header_contant = document.getElementById("header_contant");
let header = document.getElementById("header");
header_arrow_box.addEventListener("click", () => {
  window.scrollBy({
    top: 1000,
    behavior: "smooth",
  });
  header.style.height = "auto";
  body.style.overflowY = "auto";
  header_arrow_box.style.paddingTop = "50px";
  header_contant.style.paddingTop = "185px";
});

let header_btn = document.getElementById("header_btn");
header_btn.addEventListener("click", () => {
  window.location.href = "tel:+995558900800";
});

let menu_button = document.getElementById("menu_button");
let burger_menu = document.getElementById("burger_menu");
let p1 = document.createElement("p");
p1.textContent = "About";
p1.classList.add("header_p", "burger_menu_p");
let p2 = document.createElement("p");
p2.textContent = "Products";
p2.classList.add("header_p", "burger_menu_p");
let p3 = document.createElement("p");
p3.textContent = "Recipes";
p3.classList.add("header_p", "burger_menu_p");
let contact_btn = document.createElement("button");
contact_btn.classList.add("contact_btn");
contact_btn.textContent = "Contact";
menu_button.addEventListener("click", () => {
  burger_menu.classList.toggle("burger_menu_extended");

  if (burger_menu.classList.contains("burger_menu_extended")) {
    burger_menu.style.height = "240px";
    burger_menu.appendChild(p1);
    burger_menu.appendChild(p2);
    burger_menu.appendChild(p3);
    burger_menu.appendChild(contact_btn);
  } else {
    burger_menu.style.height = "0px";
    burger_menu.removeChild(p1);
    burger_menu.removeChild(p2);
    burger_menu.removeChild(p3);
    burger_menu.removeChild(contact_btn);
  }
});
contact_btn.addEventListener("click", () => {
  window.location.href = "tel:+995558900800";
});
