$(".carousel__container_products").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  adaptiveHeight: true,
  // autoplay: true,
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
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
