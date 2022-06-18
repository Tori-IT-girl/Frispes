(() => {
    let gallerySwiper = new Swiper('.js-gallery-swiper', {
        loop: true,

        navigation: {
            nextEl: '.gallery .js-swiper-next',
            prevEl: '.gallery .js-swiper-prev',
        },

        spaceBetween: 30,

        breakpoints: {
            414: {
                slidesPerView: 2,
                spaceBetween: 10
            },

            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        },
    });
})();
