(() => {
    let swiperFacilities = new Swiper('.js-facilities-swiper', {

        pagination: {
            el: '.facilities .js-facilities-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                let slidesTexts = ['Spacious parking area', 'Comfortable spaces', 'Cozy cafe', 'Child playground', 'Outdoor spaces']
                return '<span class="' + className + '">' + slidesTexts[index] + '</span>';
            },
        },

        a11y: false,
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
