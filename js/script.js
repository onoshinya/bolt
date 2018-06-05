
$(window).resize(function() {
  var w = $(window).width();
  var x = 766;
  if(w > x) {
    $('.list__menu').removeClass('active');
  }
});

$(function() {
  $(".list__icon").on('click',function() {
    $('.list__menu').toggleClass('active');
  });
});
