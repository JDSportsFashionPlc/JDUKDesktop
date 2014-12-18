/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #KOT ARHIVE
 * --- --- --- --- ---

**/

// START
// -- Load Program

jQuery(document).ready(function ($) {

	// KOT LATEST GALLERY
	// -- Load the gallery and page assets through JSON
	jQuery.getJSON(""+path+"assets/js/pages/archive.json", function (x) {	
		
		// VARS
		// -- For cleaner calls below
		var PageHTMLID = '#kotArchivedGallery';
		var galHTML = '';
		var i=0;
		// LOOP EACH MENU LINK
		// -- Build the Menu 
		jQuery.each(x.Page[0].kotGallery, function(key, val){
			galHTML+='<div class="box kotBox"><div class="boxInner kotBoxInner">';
			galHTML+='<a href="'+val.link+'" manual_cm_re="'+val.tag+'" class="kotBoxLink"><img src="'+val.pic+'" />';
			galHTML+='</a>';
			galHTML+='</div></div>';
		});
		
		galHTML += '';
		jQuery(''+PageHTMLID+'').append($(galHTML));
	});		
	
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

});