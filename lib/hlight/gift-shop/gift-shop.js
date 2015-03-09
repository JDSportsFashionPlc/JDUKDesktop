/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #christmas
 * --- --- --- --- ---

**/

// START
// -- Load Program

jQuery(document).ready(function ($) {
	
	// VARS
	$.fx.speeds._default = 750;
	jQuery('.fademe').fadeIn(2750);
	
	
	/*
	jQuery('#link_men').click(function(){
		jQuery('.tablinks').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('.tabcontentbox').slideUp("slow");
		jQuery('#box_men').slideDown("slow");		
		jQuery('#link_men img').attr("src", "/lib/hlight/gift-shop/images/menu_02.png");
		jQuery('#link_women img').attr("src", "/lib/hlight/gift-shop/images/menu_off_03.png");
		jQuery('#link_kids img').attr("src", "/lib/hlight/gift-shop/images/menu_off_04.png");
		jQuery('.trainer').remove();
		spinner('028670', '0', 'Nike Roshe Run', '&pound;70.00');
		slider_men();
		return false;	
	});
	
	
	jQuery('#link_women').click(function(){
		jQuery('.tablinks').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('.tabcontentbox').slideUp("slow");
		jQuery('#box_women').slideDown("slow");	
		jQuery('#link_women img').attr("src", "/lib/hlight/gift-shop/images/menu_03.png");
		jQuery('#link_men img').attr("src", "/lib/hlight/gift-shop/images/menu_off_02.png");
		jQuery('#link_kids img').attr("src", "/lib/hlight/gift-shop/images/menu_off_04.png");
		jQuery('.trainer').remove();
		spinner('095514', '0', 'Nike Air Max 90', '&pound;95.00');	
		slider_women();		
		return false;		
	});
	
	
	jQuery('#link_kids').click(function(){
		jQuery('.tablinks').removeClass('current');
		jQuery(this).addClass('current');
		jQuery('.tabcontentbox').slideUp("slow");
		jQuery('#box_kids').slideDown("slow");			
		jQuery('#link_kids img').attr("src", "/lib/hlight/gift-shop/images/menu_04.png");
		jQuery('#link_women img').attr("src", "/lib/hlight/gift-shop/images/menu_off_03.png");
		jQuery('#link_men img').attr("src", "/lib/hlight/gift-shop/images/menu_off_02.png");
		jQuery('.trainer').remove();
		spinner('023208', '0', 'Nike Air Max 90', '&pound;60.00');	
		slider_kids();				
		return false;		
	});
	*/
	
	//slider_men();
	
	// PRELOAD PAGES
	// -- Load all pages
	/*
	jQuery.get("/lib/hlight/gift-shop/men.html", function(data, status){
		jQuery('#box_men').html(data);
	});
	jQuery.get("/lib/hlight/gift-shop/women.html", function(data, status){
		jQuery('#box_women').html(data);
	});
	jQuery.get("/lib/hlight/gift-shop/kids.html", function(data, status){
		jQuery('#box_kids').html(data);
	});*/
	
	
});

// VARS
// -- Attempt global comments later
	var imageFascia = 'jd';

// SPINNER
// -- Spit the arrays and make things happen via anchor tag
	function spinner(plu, id, name, price, crop, crop2, margintop){
		
		window.margin = margintop;
		
		// VARS
		// -- PLU is the ProductID and the Hidden form is used globally	
		var num;	
		var plu = ""+plu; // Convert Str to Int
		if (plu.length < 6) {
				plu = "0"+plu;
		}
		var linkbtn = jQuery("a.productLink");
		
		jQuery('.productKOTText').fadeOut(750).delay(750);
		jQuery('.productKOTText').html(''+name+'<br />'+price+'');		
		jQuery('.productKOTText').fadeIn(1573);		
		jQuery(linkbtn).fadeOut(750).delay(750);
		jQuery(linkbtn).attr("href", "http://www.jdsports.co.uk/product/"+plu+"").attr('manual_cm_re','GiftShop-_-ProductSlider-_-'+plu+'');
		jQuery(linkbtn).fadeIn(1573);		
		setUpImageNavigation(plu, crop2, margintop);

	}


	
// MAIN VIEW CONTAINER
// -- Main container div elements
	
	var mainContainer = jQuery('#mainView');
	var spinContainer = jQuery('<div id="spinContainer"></div>');
	var spinInner = jQuery('<div id="spinInner"></div>');
		
	spinContainer.prepend(spinInner);
	mainContainer.prepend(spinContainer);
		
	// JSON AND AJAX CUSTOM JQUERY
	// -- getScript() and prepend used with jQuery UI and also slider functions
	//jQuery.getScript('/js/jquery-ui-1.8.12.custom.min.js', function () { 
		
		jQuery('#stylelist').prepend('<div id="slider" title="Drag to rotate"></div>');
		jQuery('#slider').slider({
			min: 0, max: 28
		});
				
		jQuery('#slider').bind('slide', function (event, ui) {			
			var mainContainer = jQuery('#spinInner');
			var posY = (margin-400) * ui.value;
			//var posY = -475 * ui.value;
			mainContainer.css('top', posY);
		});
		
	//});	
	

	// MAIN IMAGE NAVIGATION
	// -- Set the spinner and loading of content for configurations - RJR code clean up	
	function setUpImageNavigation(id, crop2) {	
		// VARS
		// -- Better use of function broken into var storage
		
		//var cdn = 'http://jdsports.scene7.com/is/image/JDSports/';
		//http://i1.adis.ws/i/jpl/bl_113070_spin_01?w=450&h=475
		var cdn = 'http://i1.adis.ws/i/jpl/jd_';
		var setupurl = 'w=600&h=400&crop='+crop2; // image width and height
		var sku = id;
		
		
		// MAKE THE SLIDER TAB GO TO THE BEGINNING AGAIN
		jQuery("#slider").slider("option", "values", [0, 28]);
				
		if (jQuery('div#spinInner').length) {
			jQuery('div#spinInner').empty().remove();
		}		
		
		// MONSTER LOOP
		// -- Create all spinner images and spit them - todo future loop replacement of RJR
		jQuery('#stylelist').prepend('<div id="spinInner" style="cursor:pointer" onClick="location.href=\'/product/'+sku+'\'"><img class="mainImage" id="0" src="'+cdn+'' + sku + '_spin_01?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="1" src="'+cdn+'' + sku + '_spin_02?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="2" src="'+cdn+'' + sku + '_spin_03?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="3" src="'+cdn+'' + sku + '_spin_04?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="4" src="'+cdn+'' + sku + '_spin_05?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="5" src="'+cdn+'' + sku + '_spin_06?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="6" src="'+cdn+'' + sku + '_spin_07?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="7" src="'+cdn+'' + sku + '_spin_08?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="8" src="'+cdn+'' + sku + '_spin_09?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="9" src="'+cdn+'' + sku + '_spin_10?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="10" src="'+cdn+'' + sku + '_spin_11?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="11" src="'+cdn+'' + sku + '_spin_12?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="12" src="'+cdn+'' + sku + '_spin_13?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="13" src="'+cdn+'' + sku + '_spin_14?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="14" src="'+cdn+'' + sku + '_spin_15?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="15" src="'+cdn+'' + sku + '_spin_16?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="16" src="'+cdn+'' + sku + '_spin_17?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="17" src="'+cdn+'' + sku + '_spin_18?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="18" src="'+cdn+'' + sku + '_spin_19?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="19" src="'+cdn+'' + sku + '_spin_20?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="20" src="'+cdn+'' + sku + '_spin_21?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="21" src="'+cdn+'' + sku + '_spin_22?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="22" src="'+cdn+'' + sku + '_spin_23?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="23" src="'+cdn+'' + sku + '_spin_24?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="24" src="'+cdn+'' + sku + '_spin_25?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="25" src="'+cdn+'' + sku + '_spin_26?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="26" src="'+cdn+'' + sku + '_spin_27?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="27" src="'+cdn+'' + sku + '_spin_28?'+setupurl+'" name="mainProduct" /><img class="mainImage" id="28" src="'+cdn+'' + sku + '_spin_01?'+setupurl+'" name="mainProduct" /></div>');	

	}


// LOOP THE SLIDER AND TRAINER ITEMS
// -- Enter all trainer plus... then loop em up!!

	// ADD ALL TRAINER PLUS HERE
	
	//function slider_men(){
		
		
		spinner('154756', '0', 'Nike Roshe Run', '&pound;70.00','0,0,0,0', '0,0,0,0', '0');
		
		
		jQuery.getJSON("/lib/hlight/gift-shop/men.json", function(x) {
			
		// VARS
			  // -- For cleaner calls below
			  var galHTML = '';
			  var agalHTML = ''
			  var i = 0;
		
			jQuery.each(x.Page[0].ShopByTrainers, function(key, val) {
				
				//added '+ val.crop +' by Luis Paz on 15.12.2014 for image alignment purposes via URL
				agalHTML += '<div class="trainer">';
				agalHTML += '<a href="#" onClick="javascript:spinner(\''+val.plu+'\', 0, \''+val.name+'\', \''+val.price+'\', \''+val.crop+'\', \''+val.crop2+'\', \''+val.margintop+'\');return false;">';
				agalHTML += '<img src="http://i1.adis.ws/i/jpl/jd_'+val.plu+'_spin_01?w=175&h=115&qlt=80&unsharp=0,1,1,7&img404=jd_imagemissing&crop='+ val.crop +'">';
				agalHTML += '</a>';
				agalHTML += '</div>';
				
				});
				agalHTML += '';
				
			jQuery('.appendr').append(jQuery(agalHTML));		
			//jQuery('.appendrh').append(jQuery(agalHTML));
			
			//
			// OWL GALLERY
			// 
	
			jQuery("#sliderapp_gallery").owlCarousel({
					loop:true,
					items:4,
					autoplay: false,
					margin:25,
					responsiveClass:true,
					responsive:{
						0:{items:3,nav:true,loop:true},
						1000:{items:3,nav:true,loop:true},
						1200:{items:4,nav:true,loop:true},
						1400:{items:4,nav:true,loop:true},
						1450:{items:4,nav:true,loop:true},
						1600:{items:4,nav:true,loop:true}
					}
			});
				
		});

	//}
	
	