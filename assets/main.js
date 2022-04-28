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

  console.log("init");
  AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
  });
});
