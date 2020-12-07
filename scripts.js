$(".product__carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  adaptiveHeight: true,
  autoplay: true,
  appendArrows: $(".product__carousel"),
  appendDots: $(".product__carousel"),
  dotsClass: "carousel__dots",
  prevArrow:
    '<button id="prev" type="button" class="carousel__btn carousel__btn_prev product__btn_prev" aria-hidden="true"><</button>',
  nextArrow:
    '<button id="next" type="button" class="carousel__btn carousel__btn_next product__btn_next">></button>',
  autoplaySpeed: 5000,
});

$(".brends__carousel").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  slide: ".brends__item",
  autoplay: true,
  appendArrows: $(".brends"),
  appendDots: $(".brends"),
  dotsClass: "carousel__dots",
  prevArrow:
    '<button id="prev" type="button" class="carousel__btn carousel__btn_prev" aria-hidden="true"><</button>',
  nextArrow:
    '<button id="next" type="button" class="carousel__btn carousel__btn_next">></button>',
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
