/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #ARSENALFOOTBALL
 * --- --- --- --- ---

**/

// START
// -- Load Program

jQuery(document).ready(function ($) {
	
	// VARS
	// -- Global page variables
	$.fx.speeds._default = 250;
	jQuery('.fademe').fadeIn(1200);
	var fadein = '750';
	var fadeout = '750';
	var duration = '750'
	
	jQuery('.hookright').html('#HookYourLook');

	// KOT LATEST GALLERY
	// -- Load the gallery and page assets through JSON
	jQuery.getJSON("/lib/hlight/back-to-school/back-to-school.json", function (x) {	
		
		// VARS
		// -- For cleaner calls below
		var galHTML='';
		var agalHTML=''
		var i=0;		
		
		// BIG BOXES ACCESSORIES
		// -- There is some animation hovers applied to this JSON below, same comment name above
		jQuery.each(x.Page[0].ShopByAccessories, function(key, val){
			agalHTML+='<div class="hookaccessslide ultra gotham" id="hookAccessElement'+val.id+'" onClick=\'window.location="http://www.jdsports.co.uk/product/'+val.picplu+'"\'>';
			agalHTML+='<img src="http://i1.adis.ws/t/jpl/jd_product_list?plu=jd_'+val.picplu+'_a&wid=215&hei=215&resmode=sharp&qlt=80"/>';
			agalHTML+='<div class="hookmehover hide"><br /><br /><div class="greenbuttonsmall"><a manual_cm_re="CONTENT-_-BackToSchoolHook-_-'+val.picplu+'" href="http://www.jdsports.co.uk/product/'+val.picplu+'">SHOP</a></div></div>';
			agalHTML+='</div>';
		});
		agalHTML += '';
		jQuery('.hookaccess_gallery').append($(agalHTML));		
		
		// MAKE GALLERIES	
		// -- USES OWL GALLERY
		jQuery("#shopbyhook").owlCarousel({
			loop:true,
			items:7,
			autoplay: false,
			margin:20,
			responsive:{
				0:{items:3,nav:true,loop:true},
				1000:{items:3,nav:true,loop:true},
				1200:{items:3,nav:true,loop:true},
				1400:{items:4,nav:true,loop:true},
				1450:{items:4,nav:true,loop:true},
				1600:{items:5,nav:true,loop:true}
			}
		});
		
			jQuery("#shopbycatgallery").owlCarousel({
			loop:true,
			items:8,
			autoplay: false,
			margin:40,
			responsive:{
				0:{items:3,nav:true,loop:true},
				1000:{items:6,nav:true,loop:true},
				1200:{items:6,nav:true,loop:true},
				1400:{items:7,nav:true,loop:true},
				1450:{items:7,nav:true,loop:true},
				1600:{items:8,nav:true,loop:true}
			}
		});
		
		// SHOES
		// -- DONE		
		jQuery('.slidehook').hover(function() {
			var hookId = 'shoeAccessElement';
			jQuery(this).find('.slidehookhidden').fadeIn(fadein);
			var hookElement = $(this).attr('id').substring((hookId.length));
				jQuery('.slidehook:not(#'+hookId+'' + hookElement + ')').stop().animate({"opacity": .7}), 200;
			}, function() {
				jQuery(this).find('.slidehookhidden').fadeOut(fadeout);
				jQuery('.slidehook').stop().animate({"opacity": 1
			}), 200;
		});			
		
		// BIG BOXES ACCESSORIES
		// -- DONE		
		jQuery('.hookaccessslide').hover(function() {
			var hookId = 'hookAccessElement';
			jQuery(this).find('.hookmehover').fadeIn(fadein);
			var hookElement = $(this).attr('id').substring((hookId.length));
				jQuery('.hookaccessslide:not(#'+hookId+'' + hookElement + ')').stop().animate({"opacity": .3}), 200;
			}, function() {
				jQuery(this).find('.hookmehover').fadeOut(fadeout);
				jQuery('.hookaccessslide').stop().animate({"opacity": 1
			}), 200;
		});
		
	});
	
	// PLAY ANIMATIONS 
	// -- Fade in the Hook text
	/*
			setTimeout(function(){
				jQuery('.backtoschooltoptext').fadeOut(1750);
				jQuery('.hotspot').fadeOut("fast");
			}, 2350);
			setTimeout(function(){
				jQuery('.hookicon').fadeIn(1750);
			}, 3250);
	*/
	// PLAY ANIMATIONS
    // -- Fade in the Hook text
    setTimeout(function(){
        jQuery('.backtoschooltoptext').hide();
        jQuery('.hotspot').fadeOut("fast");
    }, 250);
    setTimeout(function(){
        jQuery('.hookicon').fadeIn(250);
    }, 250); 
	
	
	// TOP HOVER BUTTON TARGETS
	// -- For quick view and non-quick view (JD International usage)	
	jQuery('.hookicon').hover(function() {
		var hookId = 'hookElement';
		jQuery(this).find('.hotspot').fadeIn(fadein);
		var hookElement = $(this).attr('id').substring((hookId.length));
		jQuery('.hookicon:not(#'+hookId+'' + hookElement + ')').stop().animate({"opacity": .3}), 200;
		}, function() {
			jQuery(this).find('.hotspot').fadeOut(fadeout);
			jQuery('.hookicon').stop().animate({"opacity": 1
		}), 200;
	});
	
});





