/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #NIKECROSSTOWN LATEST
 * --- --- --- --- ---

***/
// START
// -- Load Program
$.noConflict();
jQuery(document).ready(function ($) {

	// VARS
	// -- For the system
			var strInterval;
			var strCDNURL = 'http://jdsports.scene7.com/';
			var strURL = 'nike-crosstown-running';
			var strRandom = 1 + Math.floor(Math.random() * 6);
			var path = '/lib/hlight/nike-crosstown-running/';
			var hash = window.location.hash;
			var slideitemtoDo = hash.replace( /^\D+/g, '');
		
	// ANIMATIONS
	// -- Also to change tags on IE COMPAT JD site
			jQuery("meta[name=viewport]").remove();
			jQuery.easing.def = "easeInOutSine";
			jQuery.fx.speeds._default = 900;
	
	// KGallery 1.0.0 
	// -- Custom gallery, get the Id of clicks and show slide and
	// -- update URL and get URL and update page etc
			
			jQuery('.nikeItem').hide();
			
			if(window.location.hash){
				jQuery('.nikeSlideItemNav'+slideitemtoDo).fadeIn("slow");
			} else {
				jQuery('.nikeSlideItemNav1').fadeIn("slow");
			}
			
			jQuery('.slideLinkItem').click(function(){
				var slideItem=this.id;
				jQuery('.nikeItem').hide();
				jQuery('.nikeSlideItemNav'+slideItem).fadeIn("slow");
				document.location.hash = "sliderNike-"+this.id;				
			});
			
	// END
	// -- EOF EOM - Terminate program
});