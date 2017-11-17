$(document).ready(function(){
  //Starts carousel on document ready
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    focusOnSelect: false,
    pauseOnHover: false,
    slidesToScroll: 1
  });

  //Hides scroll bar upon scrolling down
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
