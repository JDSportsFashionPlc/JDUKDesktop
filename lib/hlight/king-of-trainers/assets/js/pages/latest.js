/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #KOT LATEST
 * --- --- --- --- ---

**/

// START
// -- Load Program

jQuery(document).ready(function ($) {

	// KOT LATEST GALLERY
	// -- Load the gallery and page assets through JSON
	jQuery.getJSON(""+path+"assets/js/pages/latest.json", function (x) {	
		
		// VARS
		// -- For cleaner calls below
		var PageHTMLID = '#kotLatestGallery';
		var galHTML = '';
		var i=0;
		var next=0;
		// LOOP EACH MENU LINK
		// -- Build the Menu 
		jQuery.each(x.Page[0].kotGallery, function(key, val){
			i++;
			next=i+1;
			galHTML+='<section name="'+i+'" id="'+i+'">';
			galHTML+='<div class="kotContent">';
			// FIRST SLIDE
			//	If the first item is show, show a scroll UI/UX arrow
			if(i==1){
				galHTML+='<div class="kotscrollMsg ultra caps"><a href="#2">SCROLL<br /><img src="/lib/hlight/king-of-trainers/assets/images/nav/arrow.png"></a></div>';
			}			
			galHTML+='<a href="'+val.link+'" manual_cm_re="'+val.tag+'" title="'+val.brandtext+'"><img class="kotContentFullWidth" src="'+val.pic+'"/></a>';
			galHTML+='<div class="brandbadge ultra caps"><img src="'+val.brand+'"/><br />'+val.brandtext+'<br /><a href="'+val.link+'">VIEW &raquo;</a></div>';
			galHTML+='</div>';
			galHTML+='</section>';			
		});
		galHTML += '';
		jQuery(''+PageHTMLID+'').append($(galHTML));
	});
	
	// TRAINER SMOOTH NAVIGATION
	// -- Allow the user to scroll smoothly with button navigation
	jQuery(function() {
		jQuery('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
				var target = jQuery(this.hash);
				target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					jQuery('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
});