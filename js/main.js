$(function () {


  $('.slider').slick();


  new WOW().init();


  $('.new__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    arrows: false,
    centerMode: true
  });

});