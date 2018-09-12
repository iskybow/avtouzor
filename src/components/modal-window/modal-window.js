if ($('.js_phone-mask').length > 0) {
  $('.js_phone-mask').inputmask({alias: "phoneru"});
}

$('.js_modalWindow').fancybox({
  // Options will go here
  afterClose: function () {
    $('.modal-block').removeClass('modal-noactive');
    $('.modal-thanks').removeClass('modal-active');
  }
});

$(document).on('click', '.js_modalThanks', function () {
  $('.modal-block').addClass('modal-noactive');
  $('.modal-thanks').addClass('modal-active');
});
