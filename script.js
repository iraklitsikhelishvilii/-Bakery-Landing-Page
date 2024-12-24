

var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    clickable: true,
  },
  loop: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  pagination: {
    clickable: true,
  },
  loop: true,
});
var swiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true,
  on: {
    slideChange: function () {
      UpdateSlideColors();
    },
  },
});

let swiper_slide_bold = document.getElementsByClassName("swiper_slide_bold");

function UpdateSlideColors() {
  for (let i = 0; i < swiper_slide_bold.length; i++) {
    let zIndex = window.getComputedStyle(swiper_slide_bold[i]).zIndex;

    if (zIndex === "3") {
      swiper_slide_bold[i].style.backgroundColor = "#9EAD8D";
      swiper_slide_bold[i].style.height = "416px";
    } else {
      swiper_slide_bold[i].style.backgroundColor = "white";
      swiper_slide_bold[i].style.height = "384px";
    }
  }
}

let next = document.getElementById("next");
next.addEventListener("click", () => {
  swiper.slideNext();
});
let previous = document.getElementById("previous");
previous.addEventListener("click", () => {
  swiper.slidePrev();
});
let next2 = document.getElementById("next2");
next2.addEventListener("click", () => {
  swiper2.slideNext();
});
let previous2 = document.getElementById("previous2");
previous2.addEventListener("click", () => {
  swiper2.slidePrev();
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

let section = document.getElementById("section");
let header = document.getElementById("header");
sessionStorage.getItem("animation played");

header_arrow_box.addEventListener("click", () => {
  window.scrollBy({
    top: 1000,
    behavior: "smooth",
  });
  sessionStorage.setItem("animation played", "true");
  if (sessionStorage.getItem("animation played") === "true") {
    body.style.overflowY = "auto";
    header.style.height = "auto";
    header_arrow_box.style.paddingTop = "50px";
    header_contant.style.paddingTop = "185px";
  }
});

let header_btn = document.getElementById("header_btn");
header_btn.addEventListener("click", () => {
  window.location.href = "tel:+995558900800";
});

let menu_button = document.getElementById("menu_button");
let burger_menu = document.getElementById("burger_menu");
let p1 = document.createElement("a");
p1.textContent = "About";
p1.classList.add("header_p", "burger_menu_p");
p1.href = "https://en.wikipedia.org/wiki/Bakery";
p1.target = "_blank";
let p2 = document.createElement("a");
p2.textContent = "Products";
p2.classList.add("header_p", "burger_menu_p");
p2.href = "./menu.page/menu.html";
let p3 = document.createElement("a");
p3.textContent = "Recipes";
p3.classList.add("header_p", "burger_menu_p");
p3.href = "https://sallysbakingaddiction.com/";
p3.target = "_blank";
let contact_btn = document.createElement("button");
contact_btn.classList.add("contact_btn");
contact_btn.textContent = "Contact";
let menu_button_div_line_1 = document.getElementById("menu_button_div_line_1");
let menu_button_div_line_2 = document.getElementById("menu_button_div_line_2");
let menu_button_div = document.getElementById("menu_button_div");
menu_button.addEventListener("click", () => {
  burger_menu.classList.toggle("burger_menu_extended");

  if (burger_menu.classList.contains("burger_menu_extended")) {
    burger_menu.style.height = "240px";
    menu_button_div_line_1.style.transform = "rotate(-45deg)";
    menu_button_div_line_2.style.transform = "rotate(45deg)";
    menu_button_div.style.gap = "0px";
    setTimeout(() => {
      burger_menu.appendChild(p1);
      burger_menu.appendChild(p2);
      burger_menu.appendChild(p3);
      burger_menu.appendChild(contact_btn);
    }, 1000);
  } else {
    menu_button_div_line_1.style.transform = "rotate(0deg)";
    menu_button_div_line_2.style.transform = "rotate(0deg)";
    menu_button_div.style.gap = "6px";
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

let about_us_box_p_heading = document.getElementById("about_us_box_p_heading");
let about_us_box_p_about = document.getElementById("about_us_box_p_about");
let about_us_box_p_bottom1 = document.getElementById("about_us_box_p_bottom1");
let about_us_box_p_bottom2 = document.getElementById("about_us_box_p_bottom2");
let about_us_box_p_bottom3 = document.getElementById("about_us_box_p_bottom3");
let about_us_box_p_heading2 = document.getElementById(
  "about_us_box_p_heading2"
);
let about_us_box_p_about2 = document.getElementById("about_us_box_p_about2");
let about_us_box_p_bottom1_2 = document.getElementById(
  "about_us_box_p_bottom1_2"
);
let about_us_box_p_bottom2_2 = document.getElementById(
  "about_us_box_p_bottom2_2"
);
let about_us_box_p_bottom3_2 = document.getElementById(
  "about_us_box_p_bottom3_2"
);
let about_us_box_p_heading3 = document.getElementById(
  "about_us_box_p_heading3"
);
let about_us_box_p_about3 = document.getElementById("about_us_box_p_about3");
let about_us_box_p_bottom1_3 = document.getElementById(
  "about_us_box_p_bottom1_3"
);
let about_us_box_p_bottom2_3 = document.getElementById(
  "about_us_box_p_bottom2_3"
);
let about_us_box_p_bottom3_3 = document.getElementById(
  "about_us_box_p_bottom3_3"
);
let about_us_box_p_heading4 = document.getElementById(
  "about_us_box_p_heading4"
);
let about_us_box_p_about4 = document.getElementById("about_us_box_p_about4");
let about_us_box_p_bottom1_4 = document.getElementById(
  "about_us_box_p_bottom1_4"
);
let about_us_box_p_bottom2_4 = document.getElementById(
  "about_us_box_p_bottom2_4"
);
let about_us_box_p_bottom3_4 = document.getElementById(
  "about_us_box_p_bottom3_4"
);
async function GetProducts() {
  try {
    let Data = await fetch("https://fakestoreapi.com/products");
    let Products = await Data.json();
    for (let index = 0; index < 4; index++) {
      const product = Products[index];
      if (index === 0) {
        about_us_box_p_heading.textContent = product.title;
        about_us_box_p_about.textContent = product.description;
        about_us_box_p_bottom1.textContent = product.rating.rate;
        about_us_box_p_bottom2.textContent = product.price;
        about_us_box_p_bottom3.textContent = product.category;
      } else if (index === 1) {
        about_us_box_p_heading2.textContent = product.title;
        about_us_box_p_about2.textContent = product.description;
        about_us_box_p_bottom1_2.textContent = product.rating.rate;
        about_us_box_p_bottom2_2.textContent = product.price;
        about_us_box_p_bottom3_2.textContent = product.category;
      } else if (index === 2) {
        about_us_box_p_heading3.textContent = product.title;
        about_us_box_p_about3.textContent = product.description;
        about_us_box_p_bottom1_3.textContent = product.rating.rate;
        about_us_box_p_bottom2_3.textContent = product.price;
        about_us_box_p_bottom3_3.textContent = product.category;
      } else if (index === 3) {
        about_us_box_p_heading4.textContent = product.title;
        about_us_box_p_about4.textContent = product.description;
        about_us_box_p_bottom1_4.textContent = product.rating.rate;
        about_us_box_p_bottom2_4.textContent = product.price;
        about_us_box_p_bottom3_4.textContent = product.category;
      }
    }
  } catch (error) {
    console.log("error");
  }
}
GetProducts();
let donate_img_box = document.getElementById("donate_img_box");
let donate_img = document.getElementById("donate_img");
donate_img_box.addEventListener("mouseenter", () => {
  donate_img.style.opacity = "1";
});
donate_img_box.addEventListener("mouseleave", () => {
  donate_img.style.opacity = "0";
});

let donate_img_box2 = document.getElementById("donate_img_box2");
let donate_img2 = document.getElementById("donate_img2");
donate_img_box2.addEventListener("mouseenter", () => {
  donate_img2.style.opacity = "1";
});
donate_img_box2.addEventListener("mouseleave", () => {
  donate_img2.style.opacity = "0";
});

let donate_img_box3 = document.getElementById("donate_img_box3");
let donate_img3 = document.getElementById("donate_img3");
donate_img_box3.addEventListener("mouseenter", () => {
  donate_img3.style.opacity = "1";
});
donate_img_box3.addEventListener("mouseleave", () => {
  donate_img3.style.opacity = "0";
});
let donate_img_box4 = document.getElementById("donate_img_box4");
let donate_img4 = document.getElementById("donate_img4");
donate_img_box4.addEventListener("mouseenter", () => {
  donate_img4.style.opacity = "1";
});
donate_img_box4.addEventListener("mouseleave", () => {
  donate_img4.style.opacity = "0";
});

let showMore = document.getElementById("show-more");
let hiddenDivFirst = document.querySelector(".hidden-div-first");
let hiddenDivSecond = document.querySelector(".hidden-div-sec");
let clickCount = 0;
let copys = document.querySelectorAll(".copy");
showMore.addEventListener("click", () => {
  clickCount++;
  if (clickCount === 1) {
    hiddenDivFirst.style.display = "flex";
  } else if (clickCount === 2) {
    hiddenDivSecond.style.display = "flex";
    showMore.textContent = "Show Less";
  } else if (clickCount === 3) {
    hiddenDivSecond.style.display = "none";
    showMore.textContent = "Show Less";
  } else {
    hiddenDivFirst.style.display = "none";
    showMore.textContent = "Show More";
    clickCount = 0;
  }
});
let showMoreSecond = document.getElementById("show-more-second");
let hiddenDivThird = document.querySelector(".third-container-hidden-div");
let clickCountSecond = 0;
showMoreSecond.addEventListener("click", () => {
  clickCountSecond++;
  if (clickCountSecond % 2 === 1) {
    hiddenDivThird.style.display = "flex";
    showMoreSecond.textContent = "Show Less";
  } else {
    hiddenDivThird.style.display = "none";
    showMoreSecond.textContent = "Show More";
    clickCountSecond = 0;
  }
});
copys.forEach((copy) => {
  copy.addEventListener("mouseenter", () => {
    let bitmapImg = copy.querySelector(".bitmap-img");
    if (bitmapImg) {
      bitmapImg.style.display = "flex";
    }
    copy.style.width = "302px";
    copy.style.height = "416px";
    copy.style.backgroundColor = "rgba(158, 173, 141, 1)";
  });
  copy.addEventListener("mouseleave", () => {
    bitmapImg = copy.querySelector(".bitmap-img");
    if (bitmapImg) {
      bitmapImg.style.display = "none";
    }
    copy.style.width = "284px";
    copy.style.height = "384px";
    copy.style.backgroundColor = "white";
  });
});
