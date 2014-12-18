/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #KOT COMING SOON
 * --- --- --- --- ---

**/

// START
// -- Load Program

jQuery(document).ready(function ($) {

	// KOT LATEST GALLERY
	// -- Load the gallery and page assets through JSON
	jQuery.getJSON(""+path+"assets/js/pages/coming-soon.json", function (x) {	
		
		// VARS
		// -- For cleaner calls below
		var PageHTMLID = '#kotSoonGallery';
		var galHTML = '';
		var i=0;
		
		// LOOP EACH MENU LINK
		// -- Build the Menu 
		jQuery.each(x.Page[0].kotGallery, function(key, val){
			galHTML+='<div class="box kotBox">';
				galHTML+='<div class="boxInner kotBoxInner">';
					galHTML+='<a href="'+val.link+'">';
						galHTML+='<span class="kotBoxText ultra caps">'+val.text+'</span>';
						galHTML+='<img src="'+val.pic+'"/>';
					galHTML+='</a>';
				galHTML+='</div>';
			galHTML+='</div>';
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