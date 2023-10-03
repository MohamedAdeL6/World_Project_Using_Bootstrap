// --------------------------------------------   Section Header When Scrolling
var haederSection = document.querySelector("#header_area");

window.onscroll = () => {
  if (window.scrollY > 600) {
    haederSection.style.cssText = `background-color: #000; top: 0;`;

  } else {
    haederSection.style.cssText = `background-color: transparent; top: 0;`;

  }
};

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

inputSearchxmark.onclick = _ => (inputSearch.value = "");

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



