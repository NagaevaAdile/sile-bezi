var site = {
  _general: function () {

    $(".menus a").hover(function () {
      var itemId = $(this).attr('data-open');
      $('.hoverItem').hide();
      $('#' + itemId).show('slow')
    });
  },
  get general() {
    return this._general;
  },
  set general(value) {
    this._general = value;
  },

  homepage: function () {


  },
}



$(document).ready(function () {
  site.general();
});