$(function() {

  $('#more-tags').click(function() {
    $('#tags').removeClass('hidden');
    $('body > footer').css({ 'margin-bottom': $('#tags').outerHeight() - 10 });
  });

  $('#tags .close').click(function() {
    $('#tags').addClass('hidden');
    $('footer').css({ 'margin-bottom': '0px' });
  });

});
