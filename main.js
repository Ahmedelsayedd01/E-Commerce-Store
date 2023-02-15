/* Copy Menu FOr Mobile */
function copyMenu() {
  // copy inside .dpt-cart to .departments
  let dptCategory = document.querySelector(".dpt-cart");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //Copy inside nav to nav
  let mainNav = document.querySelector(".header-nav nav");
  let navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //Copy >header-top .wrapper to .theTop-nav
  let topNav = document.querySelector(".header-top .wrapper");
  let topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

//show sub on mobile
const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));
function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand")
    this.closest(".has-child").classList.toggle("expand");
}

// Slider
const swiper = new Swiper(".swiper", {
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

// Show Search
const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");

searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});

// Show dpt menu
const dptButton = document.querySelector(".dpt-cart .dpt-trigger"),
  dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
  console.log("Ahmed");
  dptClass.classList.toggle("showdpt");
});

// Product Image Slider
let ProductThumb = new Swiper(".small-image", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});
let productBig = new Swiper(".big-image", {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-perv",
  },
  thumbs: {
    swiper: ProductThumb,
  },
});

// stock products bar width percentage
let stocks = document.querySelectorAll(".products .stock");

for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector(".qty-available").innerHTML,
    sold = stocks[x].querySelector(".qty-sold").innerHTML,
    percent = (sold * 100) / stock;
  stocks[x].querySelector(".available").style.width = percent + "%";
}

// Show cart on click
const divoShow = ".mini-cart";
const divPopup = document.querySelector(".mini-cart");
const divTrigger = document.querySelector(".cart-trigger");

divTrigger.addEventListener("click", () => {
  setTimeout(() => {
    if (!divPopup.classList.contains("show")) {
      divPopup.classList.add("show");
    }
  }, 250);
});

// Close by click outside
document.addEventListener("click", (e) => {
  const isClosest = e.target.closest(divtoShow);
  if (!isClosest && divPopup.classList.contains("show")) {
    divPopup.classList.remove("show");
  }
});

// Back to top
const backtotop = document.querySelector(".backtotop");

window.addEventListener("scroll", checkHeight);
function checkHeight() {
  if (window.scrollY > 200) {
    backtotop.style.display = "flex";
  } else {
    backtotop.style.display = "none";
  }
}
console.log(window.scrollY);

backtotop.addEventListener("click", () => {
  window.screenTop(0, 0);
});
