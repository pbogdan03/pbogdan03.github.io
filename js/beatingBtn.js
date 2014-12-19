// (function() {
  var heartBtn = $(".fa-heart");
  var closedBtn = $(".fa-times");
  var beatingBtn = $("#beating-btn");
  beatingBtn.click(function(){
    heartBtn.toggleClass('hidden');
    heartBtn.toggleClass('beating-heart');
    beatingBtn.toggleClass('beating-heart-color');
    closedBtn.toggleClass('hidden');
  });
// })();