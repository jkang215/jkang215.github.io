//Starts the slick carousel upon document ready
$(document).ready(function(){
  var scrollY = 0;
  $(window).scroll(function() {
    var top = $(this).scrollTop();
    if(top - scrollY > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: "-"+navHeight}, 150);
      scrollY = top;
    }
    else if (scrollY - top > 50) {
      $('.navbar').animate({top: "0px"}, 150);
      scrollY = top;
    }
  });
});
