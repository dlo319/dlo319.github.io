$(function() {
  $('.runner-image').hover(function() {
   $('.runner').toggleClass('runner-active');
  })
});

$('a[href^="#header"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 500);
    }
});
 