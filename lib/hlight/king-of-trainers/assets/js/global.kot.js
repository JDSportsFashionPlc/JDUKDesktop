/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #KOT
 * --- --- --- --- ---

**/

// START
// -- Load Program

	// VARS
	// -- For the system
	// -- use the #EDIT to modify anything else on this page
	var strInterval;
	var strCDNURL = '';
	var teaserIcon = jQuery('.teaserButton');
	var strURL = 'king-of-trainers';
	var strRandom = 1 + Math.floor(Math.random() * 6);	
	var initWindowHeight = jQuery( window ).height();
	var windowHeightLessHeader = (initWindowHeight - 113);
	var browserSize = [];
	var imagePath;
	var sliderDelaySeconds = 3000;
	var duration = 1750;
	var quickduration = 250;
	var path = '/lib/hlight/'+strURL+'/';
	var coremetrics = 'KOT';
	var kotNavigationId = '.theKotNavigationPanel';
	var navigationFormField = '.currentNavigation';
	var categoryForNav = jQuery(navigationFormField).val();
	var globalKOTHeight = jQuery(window).height();
	var globalKOTWidth = jQuery(window).width();


$.noConflict();
jQuery(document).ready(function ($) {
	
	// ADDS TRANSITION
	// -- Gives speed and sleek appearance of application
			jQuery('.fademe').fadeIn(2000);	
	
	// ANIMATIONS
	// -- Also to change tags on IE COMPACT JD site
			jQuery("meta[name=viewport]").remove();
			jQuery.easing.def = "easeInOutSine";
			jQuery.fx.speeds._default = 900;
	
	// PAGE BUILD
	// -- function at bottom of page, basically gets browserWidth, browserHeight and adds to a div
			setupPage();
	
	// BUILD LOADERS
			window.onload = function (){
				browserSize[0] = jQuery(window).width();
				browserSize[1] = jQuery(window).height();
				jQuery("#KOTNav").height( globalKOTHeight );
				if( browserSize[0] > 1201 ){ imagePath = "large"} else { imagePath = "medium" }
			}	
	
	// iPAD AND RESPONSIVE RESIZERS
	// -- Page load and also rotation fixes
	
			jQuery(".galleryWrapper, .slideItem").height( windowHeightLessHeader );
			jQuery(".galleryWrapper, .slideItem").width( jQuery(window).width() );
			
			jQuery( window ).resize(function(){	
				browserSize[0] = jQuery(window).width();
				browserSize[1] = jQuery(window).height();
				jQuery("#KOTNav").height( globalKOTHeight );
				jQuery(".galleryWrapper .slideItem").height( browserSize[1] );
				jQuery(".galleryWrapper .slideItem").height( (browserSize[1] - 113) );
				setupPage();
			});
			
			function setupPage()
			{
				jQuery(".galleryWrapper, .slideItem").height( windowHeightLessHeader );
				jQuery(".galleryWrapper, .slideItem").width( jQuery(window).width() );
			}
			
	// NAV
	// -- This as well as nav.json and also page specific hidden fields call this navigation
	// -- Example in latest.html, this file has a hidden field which triggers the hidden active below
	function ApplyKoTNavigation(str){
	
		jQuery.getJSON(""+path+"assets/js/nav.json", function (x) {	
				
			// VARS
			// -- For cleaner calls below
			var navPageHTMLID = '#KOTNav nav ul';
			var navHTML = '';
			var i=0;
			// LOOP EACH MENU LINK
			// -- Build the Menu 
			jQuery.each(x.Page[0].kotNavigation, function(key, val){
			navHTML += '<li class="'+val.class+'">';
				// If the hiddenfield is the current nav then make it active
				if(categoryForNav==val.activeclass){
					navHTML += '<a href="'+val.link+'" class="kot-active-nav" manual_cm_re="'+val.tag+'" title="'+val.text+'"><img src="'+val.pic+'" /></a>';
				} else {
					navHTML += '<a href="'+val.link+'" manual_cm_re="'+val.tag+'" title="'+val.text+'"><img src="'+val.pic+'" /></a>';
				}
			navHTML += '</li>';
			});
			navHTML += '';
			jQuery(''+navPageHTMLID+'').append($(navHTML));		
		});
	}
	
	ApplyKoTNavigation();	
				
	// MENU STAYS FIXED ON SCROLL
	// -- Stay fixed for web, tablet and cross platform
	jQuery(window).scroll(function () {
	
		// VARS
		var max_scroll	=	185;
		var navbar		=	$("#KOTNav");
		var scrollTop	=	document.documentElement.scrollTop || document.body.scrollTop;
		
		// TURN NAVIGATION INTO FIXED
		if (scrollTop > max_scroll && !navbar.is("KOTNav")) {
			navbar.addClass("KOTFixedNav");
			//jQuery('.kotarrowscroller,.kotscrollMsg').slideUp();
		// REMOVE NAV
		}	else if (scrollTop < max_scroll && navbar.is("KOTNav") ) {
			navbar.removeClass("KOTFixedNav");
			//jQuery('.kotarrowscroller,.kotscrollMsg').slideDown();
		} else {
			navbar.removeClass("KOTFixedNav");	
			//jQuery('.kotarrowscroller,.kotscrollMsg').slideDown();
		}
	
	});

	// END
	// -- EOF EOM - Terminate program
});