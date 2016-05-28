$(function() {

  if ($(document).height() <= $(window).height()) {
    $('body > footer').css({ 'position': 'fixed', 'left': '0px', 'bottom': '0px', 'right': '0px' });

    $(window).scroll(function() {
      $('body > footer').css({ 'position': 'relative' });
    });
  }

  $(window).scroll(function() {
    if ($(window).scrollTop() > $('body > header.top').outerHeight() / 2) {
      $('body > header.top').addClass('fixed-for-scroll');
    } else {
      $('body > header.top').removeClass('fixed-for-scroll');
    }
  });

  $('#more-tags').click(function() {
    $('#tags').removeClass('hidden');
    $('body > footer').css({ 'margin-bottom': $('#tags').outerHeight() - 10 });
  });

  $('#tags .close').click(function() {
    $('#tags').addClass('hidden');
    $('footer').css({ 'margin-bottom': '0px' });
  });

  $(window).load(function() {
    $(window).scrollTop($(window).scrollTop() - $('h2').outerHeight() - 25);
  });

});
