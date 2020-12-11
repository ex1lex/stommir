$(window).on("load", function () {
  $(".carousel__container_products").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    adaptiveHeight: true,
    autoplay: true,
    appendArrows: $(".carousel__container_products"),
    appendDots: $(".carousel_products"),
    dotsClass: "carousel__dots",
    prevArrow:
      '<button id="prev" type="button" class="carousel__btn carousel__btn_prev product__btn_prev" aria-hidden="true"><</button>',
    nextArrow:
      '<button id="next" type="button" class="carousel__btn carousel__btn_next product__btn_next">></button>',
    autoplaySpeed: 5000,
  });

  $(".carousel__container_offers").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    appendArrows: $(".carousel__container_offers"),
    appendDots: $(".carousel_offers"),
    dotsClass: "carousel__dots",
    prevArrow:
      '<button id="prev" type="button" class="carousel__btn carousel__btn_prev offer__btn_prev" aria-hidden="true"><</button>',
    nextArrow:
      '<button id="next" type="button" class="carousel__btn carousel__btn_next offer__btn_next">></button>',
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  $(".carousel__container_brends").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    appendArrows: $(".carousel__container_brends"),
    appendDots: $(".carousel_brends"),
    dotsClass: "carousel__dots",
    prevArrow:
      '<button id="prev" type="button" class="carousel__btn carousel__btn_prev brends__btn_prev" aria-hidden="true"><</button>',
    nextArrow:
      '<button id="next" type="button" class="carousel__btn carousel__btn_next brends__btn_next">></button>',
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
});

const menuList = Array.from(document.querySelectorAll(".footer-menu"));
const btn = document.querySelector(".search__result-select-btn");
const optionList = document.querySelector(".seacrh__list-select");
const result = document.querySelector(".search__result-select");
const searchSelect = document.querySelector(".search__select");
const listItems = Array.from(document.querySelectorAll(".search__list-item"));
const searchResultSelect = document.querySelector(".seacrh__input-select");
const inputSearch = document.querySelector(".search__input");
const mobileMenuBtn = document.querySelector(".links__item_burger");
const mobileSearchBtn = document.querySelector(".links__item_search");
const search = document.querySelector(".header__line-bottom");
const mobileMenu = document.querySelector(".header__line-center");
const mobileMenuCloseBtn = document.querySelector(".menu__btn-close");
const mobileMenuItem = Array.from(mobileMenu.querySelectorAll(".menu__item"));

function toggleOptionList() {
  btn.classList.toggle("search__result-select-btn_rotate");
  optionList.classList.toggle("seacrh__list-select_show");
}

searchSelect.addEventListener("click", function (e) {
  toggleOptionList();
});

listItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    result.textContent = e.target.dataset.val;
    toggleOptionList();
  });
});

inputSearch.addEventListener("input", () => {
  if (inputSearch.value.length >= 2) {
    searchResultSelect.classList.add("seacrh__input-select_show");
  } else {
    searchResultSelect.classList.remove("seacrh__input-select_show");
  }
});

mobileSearchBtn.addEventListener("click", () => {
  search.classList.toggle("header__line-bottom_show");
});

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__line-center_show");
});

mobileMenuCloseBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("header__line-center_show");
});

mobileMenuItem.forEach((menu) => {
  const menuBtn = menu.querySelector(".menu__btn");
  const menuUl = menu.querySelector(".menu__sublist");
  if (menuBtn) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      menuBtn.classList.toggle("menu__btn_rotate");
      menuUl.classList.toggle("menu__sublist_show");
    });
  }
});

menuList.forEach((menu) => {
  const menuBtn = menu.querySelector(".footer-menu__btn");
  const menuUl = menu.querySelector(".footer-menu__list");
  menuBtn.addEventListener("click", (e) => {
    menuBtn.classList.toggle("footer-menu__btn_rotate");
    console.log(menuUl);
    menuUl.classList.toggle("footer-menu__list_show");
  });
});
