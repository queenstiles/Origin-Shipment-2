$(document).ready(function () {
    /* =========================================================
        Sticky Header
     =========================================================*/
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 200) {
            $('.header').addClass('sticky');
            $('.resp-none').addClass('scroll-none');
        } else {
            $('.header').removeClass('sticky');
            $('.resp-none').removeClass('scroll-none');
        }
    });

    /* =========================================================
        AOS
     =========================================================*/
      AOS.init({
          duration: 1200,
      });

    /* =========================================================
        Counter Up
     =========================================================*/
    $('.counter').counterUp({
        delay: 100,
        time: 1000,
    });
    /* =========================================================
        Counter Up End
     =========================================================*/

    /* =========================================================
        Scroll To Top
     =========================================================*/
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    $(window).scroll(function () {
        var scrollToTopBtn = $('.scrollToTop');
        if ($(window).scrollTop() > 200) {
            scrollToTopBtn.show();
        } else {
            scrollToTopBtn.hide();
        }
    });
    /* =========================================================
        Scroll To Top End
     =========================================================*/

    /* =========================================================
        Testimonial Slider
     =========================================================*/
    $('#service-area-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#service-area-prev-1'),
        nextArrow: $('#service-area-next-1'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Testimonial Slider End
     =========================================================*/

    /* =========================================================
        Testimonial Slider
     =========================================================*/
    $('#testimonial-slider-1').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('#testimonial-prev-1'),
        nextArrow: $('#testimonial-next-1'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('#testimonial-slider-2').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#testimonial-prev-2'),
        nextArrow: $('#testimonial-next-2'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Testimonial Slider End
     =========================================================*/

    /* =========================================================
        Testimonial Slider
     =========================================================*/
    $('#team-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#testimonial-prev-1'),
        nextArrow: $('#testimonial-next-1'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    /* =========================================================
        Testimonial Slider End
     =========================================================*/
});