$(function () {

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 900) {
      $('.menu').addClass('scroll')
    }
    else {
      $('.menu').removeClass('scroll')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 900) {
      $('.header__fixed').addClass('sticky')
    }
    else {
      $('.header__fixed').removeClass('sticky')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1000) {
      $('.header__fixed').addClass('menu__animation')
    }
    else {
      $('.header__fixed').removeClass('menu__animation')
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1190) {
      $('.header__fixed').addClass('opacity')
    }
    else {
      $('.header__fixed').removeClass('opacity')
    }
  });



  const headerHeight = $('.header__fixed').outerHeight();



  $(".menu__link").on("click", function (event) {
    event.preventDefault();

    const scrollAnchor = $(this).attr('href');

    let scrollPoint = $(scrollAnchor).offset().top - headerHeight;

    if (scrollAnchor === '#work') {
      scrollPoint = scrollPoint - 100;
    }

    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);

    return false;
  });

  $(".header__arrow").on("click", function (event) {
    event.preventDefault();

    const scrollAnchor = $(this).attr('href');

    let scrollPoint = $(scrollAnchor).offset().top - headerHeight;

    if (scrollAnchor === '#work') {
      scrollPoint = scrollPoint - 100;
    }

    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);

    return false;
  });




  var mixer = mixitup('.work__box');

});

$(function () {
  $('.registration__mask').mask('+38(000)000-00-00');
});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const mobileMenu = document.querySelector('.menu__list'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    }
    else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });
});
