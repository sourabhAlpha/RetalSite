var $ = jQuery.noConflict();

$(document).ready(function(){
    // counter js
    var counted = 0;
    $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
                },

                {

                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                    //alert('finished');
                }

                });
            });
            counted = 1;
        }
    });
    // counter js

    // banner slider
    var swiper = new Swiper(".banner-sec", {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    // banner slider

    // partner slider
    var swiper2 = new Swiper(".partners-logos", {
        slidesPerView: 1,
        spaceBetween: 10,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
    });
    // partner slider

    // populer equipments slider
    var swiper = new Swiper(".pop-equip-slider", {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: "row"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // populer equipments slider
})