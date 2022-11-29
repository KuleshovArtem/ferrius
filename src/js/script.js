// menu hamburger

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


(function($) {
    $(function() {

        // modal
        $('[data-modal=callback]').on('click', function () {
            $('.overlay, #consultation-modal').fadeIn();
        });

        $('.modal__close').on('click', function () {
            $('.overlay, #consultation-modal, #thanks').fadeOut();
        });

        function validateForms (form) {
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                      },   
                    phone: 'required',
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Ввидите минимум {0} символа!")
                    } ,
                    phone: "Пожалуйста, введите свой номер телефона",
                  }
            });
        }
        validateForms('#promo-form');
        validateForms('#consultation-modal form');

        $('input[name=phone]').mask("+7 (999) 999-99-99");

    });
})(jQuery);