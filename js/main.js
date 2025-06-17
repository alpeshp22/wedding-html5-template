/*!
 * main.js
 * Description: Custom JavaScript for Theme UI interactions
 * Author: Alpesh Parmar / Wedding HTML-5 Template
 * Version: 1.0
 * --------------------------------------
 */

/*==============================
  PRELOADER
==============================*/
$(window).on("load", function () {
  $(".preloader").fadeOut(600); // Fade out the preloader after 600ms
});

/*==============================
  HEADER SCROLL CLASS TOGGLE
==============================*/
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    $(".site-header").addClass("active");
  } else {
    $(".site-header").removeClass("active");
  }
});

/*==============================
  Close offcanvas when any nav-link is clicked
==============================*/
$("#mobileMenuSidebar .nav-link").on("click", function () {
  var offcanvasElement = bootstrap.Offcanvas.getInstance(
    document.getElementById("mobileMenuSidebar")
  );
  if (offcanvasElement) {
    offcanvasElement.hide();
  }
});
/*==============================
  ACTIVATE AOS ANIMATION
==============================*/
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true, // animation happens only once on scroll
  });
});

/*==============================
  OWL REVIEW SLIDER
==============================*/
$(document).ready(function () {
  if ($(".review-carousel").length > 0) {
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
  }

  // Chrome extension error
  if (chrome.runtime && chrome.runtime.sendMessage) {
    chrome.runtime.sendMessage({ data: "test" }, function (response) {
      if (chrome.runtime.lastError) {
        console.warn(chrome.runtime.lastError.message);
      }
    });
  }
});
