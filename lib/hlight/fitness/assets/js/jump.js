/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #NIKECROSSTOWN
 * --- --- --- --- ---

***/
// START
// -- Load Program

jQuery(document).ready(function ($) {
	
	// MAP PICTURE
	// -- Get the Map choice via the hidden field category=option
	var category = jQuery('#mapValue').val();
	var mappic = '/lib/hlight/nike-crosstown-running/assets/imgs/map.jpg';
	
	// CHANGE MAP PIC TO SHOW WOMEN OR MEN ETC
	// -- If not select, default map, else load and highlight, men, women or styles
		if ( category == "" || category == undefined || category == "default" ){
			mappic = '/lib/hlight/nike-crosstown-running/assets/imgs/map.jpg'
		}
		if( category == "men" ){
			mappic = '/lib/hlight/nike-crosstown-running/assets/imgs/mapm.jpg'
		}
		if( category == "latest" ){
			mappic = '/lib/hlight/nike-crosstown-running/assets/imgs/mapl.jpg'
		}
		if( category == "women" ){
			mappic = '/lib/hlight/nike-crosstown-running/assets/imgs/mapw.jpg'
		}
	
	if(category == "latest") { // THIS ALREADY SITS FIXED USING latest.css SO NEED TO CHANGE
	} else {
	
	// PAGE SCROLL MAKE NAVIGATION ON AND OFF
	// -- Attempt to position FIXED the box including for iPad etc
	
			// TURN OFF SCROLLER DUE TO ISSUES			
			jQuery(window).scroll(function () {
			
				// VARS
				var max_scroll	=	400;
				var navbar		=	$(".navbar");
				var sortbar		=	$(".sortbar");
				var scrollTop	=	document.documentElement.scrollTop || document.body.scrollTop;
				
				// TURN NAVIGATION INTO FIXED
				if (scrollTop	>	max_scroll && !navbar.is(".filterbuttonFixed")) {
						//navbar.addClass("filterbuttonFixed");
						//navbar.addClass("filterbuttonyes");
						//sortbar.addClass("filtersortFixed");
						jQuery('.back-to-top').fadeIn(500);
				
				// REMOVE NAV
				}	else if (scrollTop < max_scroll && navbar.is(".filterbuttonFixed") ) {
						//navbar.removeClass("filterbuttonFixed");
						///navbar.removeClass("filterbuttonyes");
						//sortbar.fadeOut();
						//sortbar.removeClass("filtersortFixed");
						jQuery('.back-to-top').fadeOut(500);
				}
					
			});
			
	}
	
	// MAKE THE NIKE MENU
	// -- This function adds images into the slider		 
		var nikeMenuHTML = '<img src="'+mappic+'" usemap="#MapNikeMenu" id="MapTop" border="0"/>';
		nikeMenuHTML += '<map name="MapNikeMenu" id="MapNikeMenu">';
		nikeMenuHTML += '<area manual_cm_re="Content-_-MapGlobal-_-Woman" shape="rect" coords="5,86,113,102" id="womanlinkJump" href="/page/nike-crosstown-running_women/" />';
		nikeMenuHTML += '<area manual_cm_re="Content-_-MapGlobal-_-Men" shape="rect" coords="5,68,113,84" id="menlinkJump" href="/page/nike-crosstown-running_men/" />';
		nikeMenuHTML += '<area manual_cm_re="Content-_-MapGlobal-_-Latest" shape="rect" coords="5,49,113,65" id="latestlinkJump" href="/page/nike-crosstown-running_latest/" />';
		nikeMenuHTML += '<area manual_cm_re="Content-_-MapGlobal-_-Home" shape="rect" coords="152,4,304,142" href="/page/nike-crosstown-running/">';
		nikeMenuHTML += '</map>';
		jQuery('#nikeMapMenu').html((nikeMenuHTML));
		
});