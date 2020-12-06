$(".brends__carousel").slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  dots: true,
  slide: ".brends__item",
  autoplay: true,
  appendArrows: $(".brends"),
  appendDots: $(".brends"),
  dotsClass: "brends__dots",
  prevArrow:
    '<button id="prev" type="button" class="brends__btn brends__btn_prev" aria-hidden="true"><</button>',
  nextArrow:
    '<button id="next" type="button" class="brends__btn brends__btn_next">></button>',
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
