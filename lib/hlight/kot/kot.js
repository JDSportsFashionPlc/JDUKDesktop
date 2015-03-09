/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #KOT KING OF TRAINERS KINGOFTRAINERS
 * --- --- --- --- ---

***/
// START
// -- Load Program
$.noConflict();
jQuery(document).ready(function ($) {
	
	// VARS
	// Page height and variable configs
	var pageHeight = jQuery( window ).height();
	
	jQuery('body').addClass('no-touch');
	jQuery('.fademe').fadeIn(750);
	jQuery('.ruh').css('height', ''+pageHeight+'px');
		
		// FIRST FUNCTION
		// -- On page load, show an animated gif then spit out the boxes above
				function preloader(){
				
					jQuery('.kotload').fadeIn().delay(950);
					jQuery('.kotload, #loadremove').remove();
					jQuery('#KingofTrainers').removeClass('white');
					jQuery('#kot').fadeIn("slow");
									
				}		
		
		// MIDDLE SPOT ANIMATIONS
		// -- Fade the user mouse selected box and fade others out - makes feed look pretty
				jQuery('.kotBoxInner img').hover(function() {
					jQuery('.kotBoxInner img').not($(this)).stop().animate({
						opacity: .3
					}, 500);
				}, function() {
					jQuery('.kotBoxInner img').stop().animate({
						opacity: 1
					});
				}, 250);
		
		// PAGE LOAD
		// -- On load start the app		
				setTimeout(preloader, 750);
								 
	// END
	// -- EOF EOM - Terminate program
});