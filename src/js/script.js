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
        // 900: {
        //     item: 1
        // }
      }
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

//menu hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__wrapper'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        });
    });
});