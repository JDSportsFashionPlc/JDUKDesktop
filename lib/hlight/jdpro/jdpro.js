/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #FOOTBALL
 * --- --- --- --- ---

***/
// START
// -- Load Program
$.noConflict();
jQuery(document).ready(function ($) {
	
	// ADDS TRANSITION
	// -- Gives speed and sleek appearance of application
			jQuery('.fademe').fadeIn(2000);	

	// VARS
	// -- For the system
	// -- use the #EDIT to modify anything else on this page
			var strInterval;
			var strCDNURL = 'http://jdsports.scene7.com/';
			var teaserIcon = jQuery('.teaserButton');
			var strURL = 'football'; //#EDIT
			var strRandom = 1 + Math.floor(Math.random() * 6);	
			var initWindowHeight = $( window ).height();
			var windowHeightLessHeader = (initWindowHeight - 113);
			var browserSize = [];
			var imagePath;
			var sliderDelaySeconds = 3000;
			var duration = 1750;
			var quickduration = 250;
			var path = '/lib/hlight/football/'; //#EDIT
			
			// JSON - OPEN THE JSON FILE ASSOCIATED TO THIS TO MODIFY YOUR PAGE
			// -- Example, nike-crosstown.json for the main crosstownrunning page
			jQuery.getJSON(""+path+"football.json", function (x) {
				 
			var PageTemplate = x.Page[0].PageName;
			
			 // MAKE THE GALLERY
			 // -- This function adds images into the slider		 
				var topSliderHTML = '';
				var i=0;
				jQuery.each(x.Page[0].TopBannerSlider, function(key, val){
					topSliderHTML += '<div class="ls-slide" id="nikeTop'+val.id+'" onClick="window.location.href=\''+val.link+'\'" style="cursor:pointer">';
					topSliderHTML += '<span style="left:5%;delayOut:0" class="ls-s10 shop-button" href="'+val.link+'"  >'+val.keywordcore+'</span>';
					topSliderHTML += '<a class="ls-s2" href="'+val.link+'" ><img src="'+val.pic+'" class="ls-bg" /></a>';
					topSliderHTML += '</div>';
				});
				topSliderHTML += '';
				jQuery('#layerslider').append((topSliderHTML));
					
			});
			
	
	// ANIMATIONS
	// -- Also to change tags on IE COMPAT JD site
		jQuery("meta[name=viewport]").remove();
		jQuery.easing.def = "easeInOutSine";
		jQuery.fx.speeds._default = 900;
	
	// BUILD THE GALLERIES
	// -- @param uses LayerSlider 
	// -- @param uses bxSlider
	
		// MAIN TOP 100% GALLERY
		var nikeSlider = jQuery("#layerslider").layerSlider({
			responsive:false,
			responsiveUnder:1500,
			layersContainer:1500,
			skin:'fullwidth',
			navPrevNext:true,
			hoverPrevNext:false,
			skinsPath:''+path+'assets/js/layerslider/skins/',
			thumbnailNavigation:false
		});	

	// PAGE BUILD
	// -- function at bottom of page, basically gets browserWidth, browserHeight and adds to a div
		setupPage();
	
	// BUILD LOADERS
		window.onload = function (){
		browserSize[0] = $(window).width();
		browserSize[1] = $(window).height();
		if( browserSize[0] > 1201 ){ imagePath = "large"} else { imagePath = "medium" }}	
	
	// iPAD AND RESPONSIVE RESIZERS
	// -- Page load and also rotation fixes	
		jQuery(".galleryWrapper, .slideItem").height( windowHeightLessHeader );
		jQuery(".galleryWrapper, .slideItem").width( jQuery(window).width() );
		
		
		jQuery( window ).resize(function(){	
			browserSize[0] = jQuery(window).width();
			browserSize[1] = jQuery(window).height();		
			jQuery(".galleryWrapper .slideItem").height( browserSize[1] );
			jQuery(".galleryWrapper .slideItem").height( (browserSize[1] - 113) );
			setupPage();
		});
			
		function setupPage()
		{
			jQuery(".galleryWrapper, .slideItem").height( windowHeightLessHeader );
			jQuery(".galleryWrapper, .slideItem").width( jQuery(window).width() );
		}
	
	// MIDDLE SPOT ANIMATIONS
	// -- Fade the user mouse selected box and fade others out - makes feed look pretty
		$('.feed a').hover(function() {
			$('.feed a').not($(this)).stop().animate({
			opacity: .5
		}, 500);
		}, function() {
			$('.feed a').stop().animate({
			opacity: 1
		});
		}, 250);
			
	// BACK TOP TOP
	// -- Sleeker class
		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
		
	// VIDEO 
	// -- Toggle videos
		jQuery('#video1').click(function(){
			jQuery('.video,.videoHiddenGlobal').slideUp();
			jQuery('.video1').slideDown();
		});
		jQuery('.videoclose1').click(function(){
			jQuery('.video').slideUp();
			jQuery('.videoHiddenGlobal').slideDown();
		});
		jQuery('#video2').click(function(){
			jQuery('.video,.videoHiddenGlobal').slideUp();
			jQuery('.video2').slideDown();
		});
		jQuery('.videoclose2').click(function(){
			jQuery('.video').slideUp();
			jQuery('.videoHiddenGlobal').slideDown();
		});
		
	// COUNTDOWN
	// -- World Cup Count	
	var austDay = new Date();
	austDay = new Date(2014, 6 - 1, 12);
	jQuery('#nikeCountDown').countdown({until: austDay, padZeroes: true, format: 'DHMS', layout: '<span class=hr>{dnn}<span class=dots>:</span> <br><span class=lb>{dl} </span></span><span class=dy>{hnn}<span class=dots>:</span> <br><span class=lb>{hl}</span></span><span class=mn>{mnn}<span class=dots>:</span> <br><span class=lb>{ml} </span></span><span class=sn>{snn} <br><span class=lb>{sl} </span></span>'});
 

$(window).load(function(){
// $('html').attr('class', 'no-js');


var news4col = $('#slider8').bxSlider({
								auto: true,
							    // slideWidth: 376,
							    minSlides: 1,
							    maxSlides: 1,
							    moveSlides: 1,
							    pager: false,
							    controls: false,
							    randomStart: false,
							    // preloadImages: 'all',
						    	// startSlide: 3,
							    slideMargin: 0,
							    useCSS: false,
							    onSliderLoad: function(){
									$("#slider8").css("visibility", "visible");
								}
							});



				function checkMq2() {
				    if ($(window).width() <= 699) { 
				        news4col.reloadSlider({
							auto: true,
				        	// slideWidth: 170,
						    minSlides: 1,
						    maxSlides: 1,
						    moveSlides: 1,
						    pager: false,
						    controls: false,
						    randomStart: false,
						    // preloadImages: 'all',
						    // startSlide: 3,
						    slideMargin: 0,
						    useCSS: false,
							onSliderLoad: function(){
								$("#slider8").css("visibility", "visible");
							}  
				        });
				    }
				    if ($(window).width() >= 600) { 
				        news4col.reloadSlider({
							auto: true,
				        	// slideWidth: 376,
						    minSlides: 1,
						    maxSlides: 1,
						    moveSlides: 1,
						    pager: false,
						    controls: false,
						    randomStart: false,
						    // preloadImages: 'all',
						    // startSlide: 3,
						    slideMargin: 0,
						    useCSS: false,
							onSliderLoad: function(){
								$("#slider8").css("visibility", "visible");
							}
				        });
				    }
				}

			$(function () {
			    // the call to checkMq here will execute after the document has loaded
			    checkMq2();

			        $("#slider8").show("fade");
			    $(window).resize(function () {
			        // the call to checkMq here will execute every time the window is resized
			        checkMq2();
			        $("#slider8").show("fade");
			    });
			});

		}); //END WINDOW.LOAD FUNCTION



	// END
	// -- EOF EOM - Terminate program
});