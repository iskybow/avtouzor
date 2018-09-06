"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shared = function Shared() {
  _classCallCheck(this, Shared);
};

$(".scroll").on("click", function (e) {
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
  }, 777);
  e.preventDefault();
});

if (window.innerWidth > 769) {
  var reSize = function reSize($target) {
    var containerW = $('.container').width();
    var windowW = $(window).width();
    var sideMargin = (windowW - containerW) / 2;
    $target.css('width', containerW - $('.footer > .contacts').width() + sideMargin + 'px');
  };

  $(document).ready(function () {
    reSize($('.map-block'));
  });

  $(window).resize(function () {
    reSize($('.map-block'));
  });
}

if ($('.js_phone-mask').length > 0) {
  $('.js_phone-mask').inputmask({ alias: "phoneru" });
}

// $(document).on('click', '.js_modalWindow', function () {
//   $('body').css({'overflow': 'hidden'});
//   $('.modal-window').addClass('modal-window-active');
// });
// $(document).on('click', '.overlay', function () {
//   $('body').css({'overflow': 'visible'});
//   $('.modal-window').removeClass('modal-window-active');
// });

$('.js_modalWindow').fancybox({
  // Options will go here
});

$(document).on('click', '.js_showImg', function () {
  $('.work-two').addClass('show-block');
});

// $(document).on('click', '.js_moreActive', function () {
//   var parentItem =  $(this).parents('.service-item');
//   $('.more-info').removeClass('more-info-active');
//   parentItem.find('.more-info').toggleClass('more-info-active');
//   if (parentItem.hasClass('js_activeItem')) {
//     $('.more-info').removeClass('more-info-active');
//     parentItem.removeClass('js_activeItem');
//   } else {
//     parentItem.addClass('js_activeItem');
//   }
// });
//
// $(document).click(function (event) {
//   if ($(event.target).parents('.js_activeItem').length) return;
//   $('.more-info').removeClass('more-info-active');
//   $('.service-item').removeClass('js_activeItem');
//   event.stopPropagation();
// });

$(document).on('click', '.js_moreActive', function () {
  var parentItem = $(this).parents('.service-item');
  $('.more-info').removeClass('more-info-active');
  if (parentItem.hasClass('js_activeItem')) {
    parentItem.find('.more-info').removeClass('more-info-active');
    $('.service-item').removeClass('js_activeItem');
  } else {
    parentItem.find('.more-info').addClass('more-info-active');
    parentItem.addClass('js_activeItem');
  }
});

$(document).on('click', '.close-more', function () {
  var parentItem = $(this).parents('.service-item');
  parentItem.find('.more-info').removeClass('more-info-active');
  $('.service-item').removeClass('js_activeItem');
});

$(document).click(function (event) {
  if ($(event.target).parents('.js_activeItem').length) return;
  $('.more-info').removeClass('more-info-active');
  $('.service-item').removeClass('js_activeItem');
  event.stopPropagation();
});
//# sourceMappingURL=script.js.map
