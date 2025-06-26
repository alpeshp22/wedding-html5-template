/*!
 * main.js
 * Description: Custom JavaScript for Theme UI interactions
 * Author: Wedding HTML-5 Template
 * Version: 1.0
 * ------------------------------------------------------------
 */

(function ($) {
  "use strict";

  /** =========================
   * Preloader - hide on load
   * ========================= */
  $(window).on("load", function () {
    $(".preloader").fadeOut(600);
  });

  /** =======================================
   * Header - Add class on scroll position
   * ======================================= */
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".site-header").addClass("active");
    } else {
      $(".site-header").removeClass("active");
    }
  });

  /** ================================================
   * Offcanvas - Auto-close mobile menu on link click
   * ================================================ */
  $(document).on("click", "#mobileMenuSidebar .nav-link", function () {
    var offcanvasEl = document.getElementById("mobileMenuSidebar");
    if (offcanvasEl && typeof bootstrap !== "undefined") {
      var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    }
  });

  /** ==============================
   * AOS (Animate On Scroll) Init
   * ============================== */
  window.addEventListener("load", function () {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }
  });

  /** ============================
   * Hero Carousel - Owl Carousel
   * ============================ */
  $(document).ready(function () {
    if ($(".hero-slider").length && typeof $.fn.owlCarousel === "function") {
      $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplayTimeout: 5000,
        smartSpeed: 1800,
        dots: true,
        nav: false,
        margin: 0,
      });
    }

    /** ============================
     * Review Carousel - Owl Carousel
     * ============================ */
    if (
      $(".review-carousel").length &&
      typeof $.fn.owlCarousel === "function"
    ) {
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
  });
})(jQuery);
