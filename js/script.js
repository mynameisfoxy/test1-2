$(document).ready(function(){
  $('.our-works-block__mosaic').Mosaic({
    maxRowHeight: 200,
    maxRowHeightPolicy: "crop",
    maxRows: 2
  });
  $(".quotes-carousel").owlCarousel({
    items:1,
    margin:40,
    nav: true,
    startPosition: 2,
    loop: true,
    dots: true
   });
  $(".owl-carousel").owlCarousel({
   items:1,
   margin:40,
   loop: true,
   dots: true
  });
  if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){
    $(".logo").addClass("ie");
  }
});