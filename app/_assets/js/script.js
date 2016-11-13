$(function() {

  $(window).scroll(function() {
    positionMenu();
    positionNavbarForPosts();
  });

  $(window).resize(function() {
    positionMenu();
    positionNavbarForPosts();
    resizeImages();
    setFooterPosition();
    setMoreTogglerOnAllPosts();
  });

  resizeImages();
  setFooterPosition();
  setNavigationBarForPosts();
  setMoreTogglerOnAllPosts();
  setTaggedPostCount();
  setFootnoteAnchors();

  function hasNavigationBarForPosts() {
    return $('#navbar-post').size() > 0;
  }

  function setNavigationBarForPosts() {
    var hasNavbarForPosts = hasNavigationBarForPosts();
    if (hasNavbarForPosts) {
      var list = '<ul class="nav"><li><a href="#top">Top</a></li>';
      if ($('.post h2').size() > 0) {
        $('.post h2').each(function() {
          var text = $(this).text();
          var link = text.toLowerCase().replace(/ /g, '-');
          link = link.toLowerCase().replace(/[^0-9a-zA-Z-]+/g, '');
          list += '<li><a href="#' + link + '">' + text + '</a></li>';
        });
        $('#navbar-post .nav').html(list);
        $('#navbar-post .toggle').click(function() {
          $('#navbar-post').toggleClass('closed');
        });
      } else {
        $('#navbar-post').hide();
      }
    }
  }

  function setFooterPosition() {
    if ($(document).height() <= $(window).height()) {
      $('body > footer').css({ 'position': 'fixed', 'left': '0px', 'bottom': '0px', 'right': '0px' });

      $(window).scroll(function() {
        $('body > footer').css({ 'position': 'relative' });
      });
    }
  }

  function resizeImages() {
    var selector = 'img:not(".thumbnail > img")';
    $(selector).each(function() {
      var width = $(this).width();
      if (!$(this).data('width')) $(this).data('width', width);
    });

    $(selector).filter(function(){
      var width = $(this).width();
      var windowWidth = $(window).width();
      return (width > windowWidth);
    }).css({ 'width': '100%'});

    $(selector).filter(function(){
      var width = $(this).width();
      var originalWidth = $(this).data('width');
      return (width > originalWidth);
    }).css({ 'width': 'auto'});
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
    var hasNavbarForPosts = hasNavigationBarForPosts();
    var $navbarPost = $('#navbar-post');
    if (hasNavbarForPosts) {
      if ($(window).scrollTop() > $('.hero').outerHeight()) {
        var offset = $(window).scrollTop() + $(window).height() - $navbarPost.outerHeight() + 1;
        if (offset > $('footer.site').offset().top) {
          $navbarPost.css({ 'bottom': -$navbarPost.outerHeight() });
        } else {
          if ($navbarPost.css('bottom') !== 0) $navbarPost.css({ 'bottom': '0px' });
        }
      }
    }
  }

  function setMoreTogglerOnAllPosts() {
    $('.tag-toggler-show').click(function () {
      $('.tag-toggler-show').addClass('hidden');
      $('.tag-toggler-hide').removeClass('hidden');
      $('.post-tags').removeClass('hidden');
      $('.post-descriptions').removeClass('hidden');
      $('.post > a').css({ 'font-weight': 'bold' });
    });

    $('.tag-toggler-hide').click(function () {
      $('.tag-toggler-show').removeClass('hidden');
      $('.tag-toggler-hide').addClass('hidden');
      $('.post-tags').addClass('hidden');
      $('.post-descriptions').addClass('hidden');
      $('.post > a').css({ 'font-weight': 'normal' });
    });

    if ($('.tag-toggler-show').size() > 0) {
      $('body > footer').css({ 'margin-bottom': $('#tags').outerHeight() - 10 });
    }
  }

  function setTaggedPostCount() {
    var $postCount = $('#post-count');
    if ($postCount.size() === 0) return;
    var size = $('.tagged-posts .post').size();
    var post = size === 1 ? 'post' : 'posts';
    $postCount.text(size + ' ' + post);
  }

  function setFootnoteAnchors() {
    var height = ($('body > header.top').outerHeight() / 2) + 10;
    $("sup[id^='footnote']").each(function() {
      $(this).css({
        "padding-top" : height + "px",
        "margin-top" : -height + "px"
      });
    });

    $("a[id^='footnote']").each(function() {
      $(this).css({
        "display" : "inline-block",
        "position" : "relative",
        "top": -height + "px"
      });
    });
  }
});
