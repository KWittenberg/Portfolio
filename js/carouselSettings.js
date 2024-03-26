$('.owl-carousel').owlCarousel({
    autoplay: false,
    margin: 5,
    nav: false,
    loop: false,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        576: {
            items: 2,
            margin: 5
        },
        992: {
            items: 5,
            margin: 5
        },
        1450: {
            items: 7,
            margin: 5
        }
    }
});