function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 100,
            disableOnInteraction: false
        },
        // navigation: {
        //     nextEl: '.main .swiper-button-next',
        //     prevEl: '.main .swiper-button-prev',
        // },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },

        }
    })
}

function gallerySlider1() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 9,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                slidesPerView: 5,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 0
            },
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}



$(document).ready(function() {
    gallerySlider1()
    sliderMain()
    $("select").niceSelect()
    $(".advantages__inner").mCustomScrollbar({
        axis: "x",
    });
    $(".about-tabs__inner").mCustomScrollbar({
        axis: "x",
    });

    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (       )         -' });

    $(".header__open-menu").click(function() {
        $(this).addClass("header__open-menu--active")
        $(".header__menu").show()
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".header__menu-inner"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".header__menu").hide(); // скрываем его
            $(".header__open-menu").removeClass("header__open-menu--active")
        }
    });

    $(".nav__item-menu").hover(onIn, onOut);

    $(".nav__item--open").click(function() {
        if (window.innerWidth < 992) {
            // $(".nav__item-hidden").hide()
            $(this).toggleClass("nav__item--active");
            $(this).siblings(".nav__item-dropdown").slideToggle()
        }
    })

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".nav").slideToggle()
    })

    $(document).mouseup(function(e) { // событие клика по веб-документу
        if (window.innerWidth < 992) {
            var div = $(".nav"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.hide(); // скрываем его
                $(".header__burger").removeClass("header__burger--active")
            }
        }

    });


    $(window).resize(function() { // задаем функцию при срабатывании события "resize" на объекте window
        if (window.innerWidth < 1300) {
            $("header .container").removeClass("container-big")
        } else {
            $("header .container").addClass("container-big")
        }
    });
    if (window.innerWidth < 1300) {
        $("header .container").removeClass("container-big")
    } else {
        $("header .container").addClass("container-big")
    }



    $(".modal4").on('shown.bs.modal', function() {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $(".modal4 input"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                &&
                div.has(e.target).length === 0) { // и не по его дочерним элементам
                console.log("good")
            }
        });
    })
    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $(".modal4 input[type='text']"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам

        }
        if (div.val() !== "") {
            div.siblings("label").addClass("label--active")
        } else {
            div.siblings("label").removeClass("label--active")
        }



        var div2 = $(".modal4 input[type='tel'"); // тут указываем ID элемента
        if (!div2.is(e.target) // если клик был не по нашему блоку
            &&
            div2.has(e.target).length === 0) { // и не по его дочерним элементам
        }

        if (div2.val().trim().length === 17) {
            div2.siblings("label").addClass("label--active")
        } else {
            div2.siblings("label").removeClass("label--active")
        }
    });
})

function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                el.children(".nav__item-dropdown").show()
            }

        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-dropdown").hide()
    }
}