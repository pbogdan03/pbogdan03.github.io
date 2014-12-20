
  var counter = false;

  $("#red-flame").click(function() {
    if(counter) {
      $("#smoke1").toggleClass('hidden');
      $("#flame1").toggleClass('hidden');
    } else {
    counter = true;
    };
  });

