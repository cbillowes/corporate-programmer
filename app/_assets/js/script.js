$(function() {

  if ($(document).height() <= $(window).height()) {
    $('body > footer').css({ 'position': 'fixed', 'left': '0px', 'bottom': '0px', 'right': '0px' });

    $(window).scroll(function() {
      $('body > footer').css({ 'position': 'relative' });
    });
  }

  $('#more-tags').click(function() {
    $('#tags').removeClass('hidden');
    $('body > footer').css({ 'margin-bottom': $('#tags').outerHeight() - 10 });
  });

  $('#tags .close').click(function() {
    $('#tags').addClass('hidden');
    $('footer').css({ 'margin-bottom': '0px' });
  });

});
