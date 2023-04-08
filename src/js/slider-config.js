const swiper = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.reviews-slider .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider .swiper-button-next',
        prevEl: '.reviews-slider .swiper-button-prev',
    },
});