(() => {
    let spacesSwiper = new Swiper('.js-spaces-swiper', {
        spaceBetween: 30,

        navigation: {
            nextEl: '.spaces .js-swiper-next',
            prevEl: '.spaces .js-swiper-prev',
            disabledClass: 'swiper-btn--disabled'
        },

        pagination: {
            el: '.spaces .js-swiper-fraction',
            type: 'custom',
            renderCustom: function (spacesSwiper, current, total) {
                let width = (100 / total) * current;
                let currentNumber = current > 9 ? current : '0' + current;
                let totalNumber = total > 9 ? total : '0' + total;

                return `
                    <div class="progress-container">
                        <div class="swiper-progressbar" style="width:${width}%"></div>
                    </div>
                    <div class="swiper-page">${currentNumber}/<span class="swiper-page--total">${totalNumber}</span></div>
                `
            }
        },

        breakpoints: {
            414: {
                slidesPerView: 1
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
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
