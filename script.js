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
