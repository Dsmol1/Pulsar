$(document).ready(function() {
  $(function () {
  $(document).scroll(function () {
    var $nav = $("nav.navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
  // Disable transition for carousel on load
  $("body").removeClass("preload");

  // Toggle search
  $('.openSearch').click(function() {
    openSearch();
    $('#search-modal').find('input:first').focus();
  })

  // Close modal
  $('.btn-close-overlay').click(function() {
    closeSearch();
  })

  // Focus input field
  $("#search-modal").on('shown.bs.modal', function() {
    $(this).find('.search-input').focus();
  });

  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }

  // banner slider
  $('.header__slider').slick({
    dots: true,
    arrows: false,
    customPaging : function(slider, i) {
        i++;
        return '<a class="dot"><span class="line"></span><span class="slide-number">00'+i+'</span></a>';
    },
  });

  // highlight slider

  $('.highlight__slider').slick({
    centerPadding: '0',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });
});
