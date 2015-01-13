/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #adidas-superstar
 * --- --- --- --- ---

**/

jQuery(window).on('resize load', function() {
  var jQuerysuperstar = jQuery('#superstar');
  if (jQuerysuperstar.width() >= 975) {
    jQuerysuperstar.height(1633);
  } else if (jQuerysuperstar.width() > 811) {
    jQuerysuperstar.height(1795);
  } else if (jQuerysuperstar.width() > 767) {
    jQuerysuperstar.height(2096);
  } else if (jQuerysuperstar.width() > 664) {
    jQuerysuperstar.height(2471);
  } else if (jQuerysuperstar.width() > 648) {
    jQuerysuperstar.height(2554);
  } else if (jQuerysuperstar.width() > 485) {
    jQuerysuperstar.height(2766);
  } else if (jQuerysuperstar.width() > 441) {
    jQuerysuperstar.height(3259);
  } else if (jQuerysuperstar.width() > 368) {
    jQuerysuperstar.height(1851);
  } else if (jQuerysuperstar.width() > 275) {
    jQuerysuperstar.height(1976);
  } else {
    jQuerysuperstar.height(2300);
  }
});