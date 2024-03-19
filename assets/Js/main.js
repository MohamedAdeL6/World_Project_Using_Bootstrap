// --------------------------------------------   Section Header When Scrolling
// var haederSection = document.querySelector("#header_area");

// window.onscroll = () => {
//   if (window.scrollY > 600) {
//     haederSection.style.cssText = `background-color: #000; top: 0;`;

//   } else {
//     haederSection.style.cssText = `background-color: transparent; top: 0;`;

//   }
// };

// var haederSection = document.querySelector(".navbar.navbar-expand-lg");

// console.log(haederSection);

// window.onscroll = () => {
//   if (window.scrollY > 600) {
//     haederSection.style.cssText = `background-color: #000; top: 0;`;
//   } else {
//     haederSection.style.cssText = `background-color: transparent; top: 0;`;
//   }
// };

//------------------------------------------------  Show Wlecom Messege
const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "To My";
  }, 0);
  setTimeout(() => {
    text.textContent = "WebSite";
  }, 4000);
};

textLoad();
setInterval(textLoad, 8000);

//----------------------------------------------  Show Input Search
let inputSearch = document.querySelector(
  "#header_area form input[type='text'] "
);
let inputSearchxmark = document.querySelector(
  "#header_area form div:nth-child(2)"
);

inputSearchxmark.onclick = (_) => (inputSearch.value = "");

// --------------------------------------------  Section Banner_Slider  one owl-carousel
var owl = $(".Banner_Slider .owl-carousel");
owl.owlCarousel({
  items: 3,
  margin: 10,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1380: {
      items: 3,
    },
  },
});

// --------------------------------------------   Section Header When Scrolling
var btnScrool = document.querySelector(".btn_scroll_top");

window.onscroll = () => {
  if (window.scrollY > 400) {
    btnScrool.classList.remove("btn_hidden");
  } else {
    btnScrool.classList.add("btn_hidden");
  }
};
// -------------------------------------------   Scrolling To Top
btnScrool.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// ---------------------------------------------  Section landing_Page  one owl-carousel
var owl = $(".slider_one .owl-carousel");
owl.owlCarousel({
  items: 1,
  margin: 10,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2000,
  // autoplayHoverPause: true,
});
// --------------------------------------------  Section landing_Page  two owl-carousel
var owl = $(".slider_two .owl-carousel");
owl.owlCarousel({
  items: 1,
  margin: 10,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  // autoplayHoverPause: true,
});
// ----------------------------------------------  Section landing_Page Four owl-carousel
var owl = $(".slider_four .owl-carousel");
owl.owlCarousel({
  items: 1,
  margin: 10,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2100,
  // autoplayHoverPause: true,
});
// ---------------------------------------------  Section Three owl-carousel
var owl = $(".slider_three .owl-carousel");
owl.owlCarousel({
  items: 1,
  margin: 10,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2200,
  // autoplayHoverPause: true,
});
