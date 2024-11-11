(function() {

  var card = $('#card'),
      openB = $('#open'),
      closeB = $('#close'),
      timer = null;
  console.log('wat', card);
  openB.click(function () {
    $('#audio')[0].play()
    $('.balloon-border').animate({
        top: -500
    }, 8000);
    card.attr('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.attr('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.click(function () {
    card.attr('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.attr('class', '');
      timer = null;
    }, 1000);
  });

}());
