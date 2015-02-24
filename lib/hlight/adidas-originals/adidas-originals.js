/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #adidas-originals
 * --- --- --- --- ---

***/

// JDJSSCRIPTS KMANIMATIONS2004
// UIUX Improvement touch
jQuery(document).ready(function($) {

	// MIDDLE SPOT ANIMATIONS
	// -- Fade the user mouse selected box and fade others out
	$('.adidas-map div a').hover(function() {
		$('.adidas-map div a').not($(this)).stop().animate({
		opacity: .5
	}, 195);
	}, function() {
		$('.adidas-map div a').stop().animate({
		opacity: 1
	});
	}, 195);
	
});