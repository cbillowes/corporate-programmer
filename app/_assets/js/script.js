$(function() {
  var hasNavbarForPosts = $('#navbar-post').size() > 0;

  if ($(document).height() <= $(window).height()) {
    $('body > footer').css({ 'position': 'fixed', 'left': '0px', 'bottom': '0px', 'right': '0px' });

    $(window).scroll(function() {
      $('body > footer').css({ 'position': 'relative' });
    });
  }

  $(window).scroll(function() {
    positionMenu();
    positionNavbarForPosts();
  });

  $(window).resize(function() {
    positionMenu();
    positionNavbarForPosts();
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

  resizeImages();

  if (hasNavbarForPosts) {
    var list = '<ul class="nav"><li><a href="#top">Top</a></li>';
    $('.post h2').each(function() {
      var text = $(this).text();
      var link = encodeURIComponent(text.toLowerCase().replace(/ /g, '-'));
      list += '<li><a href="#' + link + '">' + text + '</a></li>';
    });
    $('#navbar-post').html(list + '</ul>');
  }

  function resizeImages() {
    $('img').filter(function(){
      return ($(this).width() > $(window).width())
    }).css({ 'width': '100%'});
  }

  function positionMenu() {
    if ($(document).height() - $(window).height() > 250) {
      var $topHeader = $('body > header.top');

      if ($(window).scrollTop() > $topHeader.outerHeight() / 2) {
        if (!$topHeader.hasClass('fixed-for-scroll')) $topHeader.addClass('fixed-for-scroll');
      } else {
        if ($topHeader.hasClass('fixed-for-scroll')) $topHeader.removeClass('fixed-for-scroll');
      }
    }
  }

  function positionNavbarForPosts() {
    var $navbarPost = $('#navbar-post');
    if (hasNavbarForPosts) {
      if ($(window).scrollTop() > $('.hero').outerHeight()) {
        var offset = $(window).scrollTop() + $(window).height() - $navbarPost.outerHeight() + 1;
        if (offset > $('footer.site').offset().top) {
          $navbarPost.css({ 'bottom': -$navbarPost.outerHeight() });
        } else {
          $navbarPost.css({ 'bottom': '0px' });
        }
      }
    }
  }

});
