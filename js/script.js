function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  }
  else {
    document.querySelector('body').classList.add('no-webp');
  }
});

$(function () {
  $('.about__slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

//$(document).ready(function () {
//  //Для липкого меню
//  $(window).scroll(function () {
//    if ($(this).scrollTop() >= 90) {
//      $("header").addClass("fix");
//    } else {
//      $("header").removeClass("fix");
//    }
//  });
//  //конец липкого меню
//});

$(function () {
  $('input, select').styler();
});


//Выпадающее меню на CSS + адаптив под тачскрины


