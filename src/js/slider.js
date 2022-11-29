const slider = tns({
    container: '.production__slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayButtonOutput: false,
    gutter: 30,
    edgePadding: 10,
    nav: false,
    controls: false,
    responsive: {
        767: {
          items: 2
        },
      }
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});