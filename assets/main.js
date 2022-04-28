jQuery(document).ready(function () {
  jQuery('.partner-logo-slider').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    speed: 4500,
    autoplaySpeed: 0,
    autoplay: true,
    arrows: false,
    cssEase: 'linear',
    centerMode: false,
    centerPadding: '5px',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          speed: 4500,
          autoplaySpeed: 0,
          autoplay: true,
          arrows: false,
          cssEase: 'linear',
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 3
        }
      }
    ]
  });
});