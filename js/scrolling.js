var scrlTrigger = $('.scrl-trigger').offset().top + $('.scrl-trigger').height(),
    filling = $('.filling'),
    scrlWrapper = $('.scrl-wrapper'),
    counter = true,
    playing = false;

$(window).scroll(function() {
  if((($(window).scrollTop() + $(window).height()) > scrlTrigger) && counter && !playing) {
    playing = true;
    filling.toggleClass('fill-anim');
    scrlWrapper.toggleClass('hidden');
    setTimeout(function () {
      scrlWrapper.toggleClass('hidden');
      filling.toggleClass('fill-anim');
      playing = false; 
    }, 2500);
    counter = false;
  } else if(($(window).scrollTop() + $(window).height()) < scrlTrigger) {
    counter = true;
  }
})

