/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #NIKECROSSTOWN MAIN
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
			jQuery.getJSON(""+path+"main-template.json", function (x) {
				 
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
						topSliderHTML += '<div class="ls-slide" id="nikeTop'+val.id+'">';
						topSliderHTML += '<img src="'+val.pic+'" class="ls-bg" />';
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
						CaroselSliderHTML += '<img src="'+val.pic+'" />';
						CaroselSliderHTML += '</div>';
					});
					CaroselSliderHTML += '';
					jQuery('#carosel').append($(CaroselSliderHTML));
					caroselSlider.reloadSlider();	
				// BUILD THE KOT BOXES STYLE
				// BUILD THE THREE BOXES
					jQuery('.MainBoxTitle').html(x.Page[0].MainBoxTitle);
					jQuery('.FirstBox').css('background-image', 'url("'+x.Page[0].FirstBox+'")');
					jQuery('.FirstBoxTitle').html(x.Page[0].FirstBoxTitle);
					var FUL = '';jQuery.each(x.Page[0].FirstUL, function(key, val){FUL += '<li>';FUL += '<a class="caps" href="'+val.link+'">'+val.name+'</a>';FUL += '</li>';});FUL += '';jQuery('.FirstUL ul').append($(FUL));	
					jQuery('.SecondBox').css('background-image', 'url("'+x.Page[0].SecondBox+'")');
					jQuery('.SecondBoxTitle').html(x.Page[0].SecondBoxTitle);
					var SUL = '';jQuery.each(x.Page[0].SecondUL, function(key, val){SUL += '<li>';SUL += '<a class="caps" href="'+val.link+'">'+val.name+'</a>';SUL += '</li>';});SUL += '';jQuery('.SecondUL ul').append($(SUL));
					jQuery('.ThirdBox').css('background-image', 'url("'+x.Page[0].ThirdBox+'")');
					jQuery('.ThirdBoxTitle').html(x.Page[0].ThirdBoxTitle);
					var TUL = '';jQuery.each(x.Page[0].ThirdUL, function(key, val){TUL += '<li>';TUL += '<a class="caps" href="'+val.link+'">'+val.name+'</a>';TUL += '</li>';});TUL += '';jQuery('.ThirdUL ul').append($(TUL));
							 
			});
			
	// INSTAGRAM
	// -- Get CROSSTOWNRUNNING tag with JDSportsOfficial
	var feed = new Instafeed({
		get: 'tagged',
		tagName: 'jdxadidas',
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
						responsive:false,
						responsiveUnder:1280,
						layersContainer:1280,
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
			var attempt1 = "jQuery('.firstspit').html('');jQuery('.firstExpand').animate({bottom:'0',height:'29px'}, "+quickduration+" );";
			var attempt2 = "jQuery('.secondspit').html('');jQuery('.secondExpand').animate({bottom:'0',height:'29px'}, "+quickduration+" );";
			var attempt3 = "jQuery('.thirdspit').html('');jQuery('.thirdExpand').animate({bottom:'0',height:'29px'}, "+quickduration+" );";
	
	// OPEN THE BOXES MEN AND WOMEN WITH CLOSE BUTTONS FROM ABOVE VARS
			jQuery('.firstExpanda').click(function(){
				jQuery(".firstExpand").animate({ 
				  bottom:"0",
				  height:"100px"
				}, quickduration );
				//#EDIT add men area box - JSON TODO
				jQuery('.firstspit').html('<span class="closemelink firstClose" onClick="'+attempt1+'">CLOSE X</span><br />Lorem Ipsum Product Men Foot wear');
			});
			jQuery('.secondExpanda').click(function(){
				jQuery(".secondExpand").animate({ 
				  bottom:"0",
				  height:"100px"
				}, quickduration );
				//#EDIT add men area box - JSON TODO
				jQuery('.secondspit').html('<span class="closemelink secondClose" onClick="'+attempt2+'">CLOSE X</span><br />Lorem Ipsum Product Men Foot wear');
			});
			jQuery('.thirdExpanda').click(function(){
				jQuery(".thirdExpand").animate({ 
				  bottom:"0",
				  height:"100px"
				}, quickduration );
				//#EDIT add men area box - JSON TODO
				jQuery('.thirdspit').html('<span class="closemelink thirdClose" onClick="'+attempt3+'">CLOSE X</span><br />Lorem Ipsum Product Men Foot wear');
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