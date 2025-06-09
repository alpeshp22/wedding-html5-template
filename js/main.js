/*--PRELOADER------------------------------------------------*/
$(window).on("load", function () {
  $(".preloader").fadeOut(600); // 600ms fade out
});

/*--HEADER TOGGLE CLASS--------------------------------------*/
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".site-header").addClass("active");
  } else {
    $(".site-header").removeClass("active");
  }
});

/*--REVIEW SLIDER--------------------------------------------*/
$(".review-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 1500,
  dots: true,
  nav: false,
  margin: 30,
});
