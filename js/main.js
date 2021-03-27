$(function () {
  $(".slider").slick();

  new WOW().init();

  $(".new__slider").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    dots: true,
    arrows: false,
    centerMode: true,
  });

  let bur = document.querySelector(".burger");
  bur.onclick = () => {
    bur.classList.toggle("active");
    document.querySelector(".header__menu").classList.toggle("active");
  };
});
