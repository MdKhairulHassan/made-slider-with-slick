// $(function () {
//   $('.allslider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
//  });
// })
$(function () {
  $('.allslider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  prevArrow: '<i class="fa-solid fa-circle-arrow-left prev"></i>',
  nextArrow: '<i class="fa-solid fa-circle-arrow-right next"></i>',
  dots: true,
 });
})