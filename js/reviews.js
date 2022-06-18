(() => {
    const reviewsSwiper = new Swiper('.js-reviews-swiper', {
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: 'row'
        },

        navigation: {
            nextEl: '.reviews .js-swiper-next',
            prevEl: '.reviews .js-swiper-prev',
        },

        pagination: {
            el: '.reviews .js-reviews-fraction',
            type: 'custom',
            renderCustom: function (reviewsSwiper, current, total) {
                let width = (100 / total) * current;
                return `
                    <div class="progress-container">
                        <div class="swiper-progressbar" style="width:${width}%"></div>
                    </div>
                `
            }
        },

        breakpoints: {
            441: {
                slidesPerView: 2,
                spaceBetween: 15
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
    });
})();
