/*
 * ---------------------------------------------------
 * 1. Slide Carousel
 * 2. Scroll to Top
 * 3. Sticky Menu
 * 4. Accordion has icon
 * 5. Hover tag a show ul page Product
 * 6. POPUP order a product - check on info Payment
 * 7. Scroll News Item Tablet & Mobile
 */

  (function($){
    "use strict";
  /* ==================================================== */

  $(".select2").select2({
    placeholder: "Please choose",
  });
  // $(document).ready(function() {
  //     $('.select2').each(function(index, el) {
  //    var config = $(this).data();
  //     });
  // });

  /*
   * 2. Scroll to Top
  */
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });


})(jQuery); // End of use strict