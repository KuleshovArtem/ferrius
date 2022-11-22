const slider = tns({
    container: '.production__slider',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    gutter: 30,
    edgePadding: 10,
    nav: false,
    controls: false,
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});