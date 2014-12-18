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
			var strURL = 'nike-crosstown-running'; //#EDIT
			var strRandom = 1 + Math.floor(Math.random() * 6);	
			var initWindowHeight = $( window ).height();
			var windowHeightLessHeader = (initWindowHeight - 113);
			var browserSize = [];
			var imagePath;
			var sliderDelaySeconds = 3000;
			var duration = 1750;
			var quickduration = 250;
			var path = '/lib/hlight/nike-crosstown-running/'; //#EDIT
			
			// JSON - OPEN THE JSON FILE ASSOCIATED TO THIS TO MODIFY YOUR PAGE
			// -- Example, nike-crosstown.json for the main crosstownrunning page
			jQuery.getJSON(""+path+"home.json", function (x) {
				 
				var PageTemplate = x.Page[0].PageName;
				var boxLeftTitle = x.Page[0].boxLeftTitle;
				var boxLeftBottomTitle = x.Page[0].boxLeftBottomTitle;
				var boxLeftPicture = x.Page[0].boxLeftPicture;
				var boxRightTitle = x.Page[0].boxRightTitle;
				var boxRightBottomTitle = x.Page[0].boxRightBottomTitle;
				var boxRightPicture = x.Page[0].boxRightPicture;
				
				 // MAKE THE GALLERY
				 // -- This function adds images into the slider		 
					var topSliderHTML = '';
					var i=0;
					jQuery.each(x.Page[0].TopBannerSlider, function(key, val){
						topSliderHTML += '<div class="ls-slide" id="nikeTop'+val.id+'" onClick="window.location.href=\''+val.link+'\'" style="cursor:pointer">';
						topSliderHTML += '<a href="'+val.link+'" class="ls-s2"><img src="'+val.pic+'" class="ls-bg" /></a>';
						topSliderHTML += '</div>';
					});
					topSliderHTML += '';
					jQuery('#layerslider').append((topSliderHTML));
				// MAKE THE CAROSEL
				// -- This function makes the carosel
					var CaroselSliderHTML = '';
					var i2=0;
					jQuery.each(x.Page[0].CaroselSlider, function(key, val){
						CaroselSliderHTML += '<div class="CaroselSlideItem" id="nikeCarosel'+val.id+'">';
						CaroselSliderHTML += '<a href="'+val.link+'" manual_cm_re="Content-_-Carosel-_-Slider'+val.id+'"><img src="'+val.pic+'" /></a>';
						CaroselSliderHTML += '</div>';
					});
					CaroselSliderHTML += '';
					jQuery('#carosel').append($(CaroselSliderHTML));
					caroselSlider.reloadSlider();	
				// BUILD THE KOT BOXES STYLE
				// -- This function makes the MEN
					var MenKOTBox = '';
					jQuery.each(x.Page[0].boxLeftLinks, function(key, val){
						MenKOTBox += '<li>';
						MenKOTBox += '<a manual_cm_re="Content-_-Links-_-MenBox'+val.name+'" class="caps" href="'+val.link+'">'+val.name+'</a>';
						MenKOTBox += '</li>';
					});
					MenKOTBox += '';
					jQuery('.MenSpit ul').append($(MenKOTBox));	
					jQuery('.boxLeftTitle').html(boxLeftTitle);
					jQuery('.boxLeftBottomTitle').html(boxLeftBottomTitle);
					jQuery('.MenZone').css('background-image', 'url("'+boxLeftPicture+'")');
					
					
				// BUILD THE KOT BOXES STYLE
				// -- This function makes the WOMEN
					var WomenKOTBox = '';
					jQuery.each(x.Page[0].boxRightLinks, function(key, val){
						WomenKOTBox += '<li>';
						WomenKOTBox += '<a manual_cm_re="Content-_-Links-_-WomenBox'+val.name+'" class="caps" href="'+val.link+'">'+val.name+'</a>';
						WomenKOTBox += '</li>';
					});
					WomenKOTBox += '';
					jQuery('.WomenSpit ul').append($(WomenKOTBox));	
					jQuery('.boxRightTitle').html(boxRightTitle);
					jQuery('.boxRightBottomTitle').html(boxRightBottomTitle);
					jQuery('.WomenZone').css('background-image', 'url("'+boxRightPicture+'")');
							 
			});
			
	// INSTAGRAM
	// -- Get CROSSTOWNRUNNING tag with JDSportsOfficial
	var feed = new Instafeed({
		get: 'tagged',
		tagName: 'crosstownrunning',
		clientId: '6ed1a5eb8c7043e1b059caecbb4b4ab2',
		template: '<li><img src="{{image}}" alt="" /></li>',
		limit:6,
		resolution: 'thumbnail'
	});
	feed.run();
	
		
	// ANIMATIONS
	// -- Also to change tags on IE COMPAT JD site
			jQuery("meta[name=viewport]").remove();
			jQuery.easing.def = "easeInOutSine";
			jQuery.fx.speeds._default = 900;
	
	// BUILD THE GALLERIES
	// --	@param uses LayerSlider 
	// -- @param uses bxSlider
	
			// MAIN TOP 100% GALLERY
					var nikeSlider = jQuery("#layerslider").layerSlider({
						responsive:true,
						responsiveUnder:300,
						layersContainer:976,
						skin:'fullwidth',
						navPrevNext:true,
						hoverPrevNext:false,
						skinsPath:''+path+'assets/js/layerslider/skins/',
						thumbnailNavigation:false
					});
			
			// SMALLER GALLERY
					var caroselSlider = 	$('#carosel').bxSlider({
						slideWidth:285,
						minSlides:2,
						maxSlides:3,
						moveSlides:1,
						slideMargin:10,
						touchEnabled:true
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
	
	// KOTSLIDER BUTTONS
	// -- Expand menu and close men/women
	
	// CLOSE MEN /WOMEN KOT AREA
			var attemptm = "jQuery('.menspit').html('');jQuery('.menExpand').animate({bottom:'0',height:'29px'}, "+quickduration+" );";
			var attemptw = "jQuery('.wmenspit').html('');jQuery('.wmenExpand').animate({bottom:'0',height:'29px'}, "+quickduration+" );";
	
	// OPEN THE BOXES MEN AND WOMEN WITH CLOSE BUTTONS FROM ABOVE VARS
			jQuery('.menExpanda').click(function(){
				jQuery(".menExpand").animate({ 
				  bottom:"0",
				  height:"100px"
				}, quickduration );
				//#EDIT add men area box - JSON TODO
				jQuery('.menspit').html('<span class="closemelink menClose" onClick="'+attemptm+'"><img src="/images/closegray.png"></span><br />Lorem Ipsum Product');
			});
			
			jQuery('.wmenExpanda').click(function(){
				jQuery(".wmenExpand").animate({ 
				  bottom:"0",
				  height:"100px"
				}, quickduration );
				//#EDIT add women area box - JSON TODO
				jQuery('.wmenspit').html('<span class="closemelink wmenClose" onClick="'+attemptw+'"><img src="/images/closegray.png"></span><br />Lorem Ipsum Product');
			});
	
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
	

	// END
	// -- EOF EOM - Terminate program
});