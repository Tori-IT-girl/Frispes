(() => {
    let heroSwiper = new Swiper('.js-hero-swiper', {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 4000
        },

        a11y: false,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: '.hero .js-swiper-pagination',
            clickable: true,
            spaceBetween: 4
        },

        keyboard: {
            enabled: true,
            onlyInViewport: true
        },

        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slideVisibleClass: 'slide-visible',

        on: {
            init: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains('slide-visible')) {
                        slide.tabIndex = '-1';
                    } else {
                        slide.tabIndex = '';
                    }
                });
            },
            slideChange: function () {
                this.slides.forEach((slide) => {
                    if (!slide.classList.contains('slide-visible')) {
                        slide.tabIndex = "-1";
                    } else {
                        slide.tabIndex = '';
                    }
                });
            }
        }
    })
})();
