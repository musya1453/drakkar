(function ($) {

  if (typeof Drupal != 'undefined') {
    Drupal.behaviors.wcportalMobileTheme = {
      attach: function (context, settings) {
        init();
      },

      completedCallback: function () {
        // Do nothing. But it's here in case other modules/themes want to override it.
      }
    }
  }

  $(function () {
    if (typeof Drupal == 'undefined') {
      init();
    }
  });

  function init() {

  }

})(jQuery);

