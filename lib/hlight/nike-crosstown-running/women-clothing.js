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
			var strCDNURL='http://jdsports.scene7.com/';
			var teaserIcon=jQuery('.teaserButton');
			var strURL='nike-crosstown-running'; //#EDIT
			var strRandom=1 + Math.floor(Math.random() * 6);	
			var initWindowHeight=$( window ).height();
			var windowHeightLessHeader=(initWindowHeight - 113);
			var browserSize=[];
			var imagePath;
			var sliderDelaySeconds=3000;
			var duration=1750;
			var quickduration=250;
			var path='/lib/hlight/nike-crosstown-running/'; //#EDIT
			
			// JSON - OPEN THE JSON FILE ASSOCIATED TO THIS TO MODIFY YOUR PAGE
			// -- Example, nike-crosstown.json for the main crosstownrunning page
			jQuery.getJSON(""+path+"women-clothing.json", function (x) {
				 
				 // MAKE THE GALLERY
				 // -- This function adds images into the slider		 
					var topSliderHTML='';
					var i=0;
					jQuery.each(x.Page[0].TopBannerSlider, function(key, val){
						topSliderHTML += '<div class="ls-slide" id="nikeTop'+val.id+'">';
						topSliderHTML += '<img src="'+val.pic+'" class="ls-bg" />';
						topSliderHTML += '</div>';
					});
					topSliderHTML += '';
					jQuery('#layerslider').append((topSliderHTML));
				
				
							 
			});
			
			
			// WOMEN GLOBAL RECOMMEND LIST
	jQuery.getJSON(""+path+"women.json", function (x) {	
				// MAKE THE CAROSEL
				// -- This function makes the carosel
					var CaroselSliderHTML = '';
					var i2=0;
					jQuery.each(x.Page[0].CaroselSlider, function(key, val){
						CaroselSliderHTML += '<li>';
						CaroselSliderHTML += '<img src="'+val.pic+'" /><br /><center><a class="bottomItemLinkFeed" href="'+val.link+'">'+val.linkname+'</a></center>';
						CaroselSliderHTML += '</li>';
					});
					CaroselSliderHTML += '';
					jQuery('#caroselWomen').append($(CaroselSliderHTML));
					caroselSlider.reloadSlider();	
	});
		
	// ANIMATIONS
	// -- Also to change tags on IE COMPAT JD site
			jQuery("meta[name=viewport]").remove();
			jQuery.easing.def="easeInOutSine";
			jQuery.fx.speeds._default=900;
	
	// BUILD THE GALLERIES
	// --	@param uses LayerSlider 
	// -- @param uses bxSlider
	
			// MAIN TOP 100% GALLERY
					var nikeSlider=jQuery("#layerslider").layerSlider({
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
					var numberofProducts=5; // 4 PLU per block
					var caroselSlider=$('#caroselWomen').bxSlider({
						slideWidth:175,
						minSlides:numberofProducts,
						maxSlides:numberofProducts,
						moveSlides:numberofProducts,
						slideMargin:9,
						touchEnabled:true
					});	

	// PAGE BUILD
	// -- function at bottom of page, basically gets browserWidth, browserHeight and adds to a div
			setupPage();
	
	// BUILD LOADERS
			window.onload=function (){
				browserSize[0]=$(window).width();
				browserSize[1]=$(window).height();
				if( browserSize[0] > 1201 ){ imagePath="large"} else { imagePath="medium" }}	
	
	// iPAD AND RESPONSIVE RESIZERS
	// -- Page load and also rotation fixes
	
			jQuery(".galleryWrapper, .slideItem").height( windowHeightLessHeader );
			jQuery(".galleryWrapper, .slideItem").width( jQuery(window).width() );
			
			jQuery( window ).resize(function(){	
				browserSize[0]=jQuery(window).width();
				browserSize[1]=jQuery(window).height();		
				jQuery(".galleryWrapper .slideItem").height( browserSize[1] );
				jQuery(".galleryWrapper .slideItem").height( (browserSize[1] - 113) );
				setupPage();
			});
			
			function setupPage()
			{
				jQuery(".galleryWrapper, .slideItem").height( windowHeightLessHeader );
				jQuery(".galleryWrapper, .slideItem").width( jQuery(window).width() );
			}
	
	
	
			
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