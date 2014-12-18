/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #KOT PRODUCT
 * --- --- --- --- ---

**/

// START
// -- Load Program

	// VARS
	// PLU MANAGEMENT
	// -- Get the plu from the URL and store in pageplu string
	var strPLUReader = document.URL;
	var strPLUStrip1 = strPLUReader.replace('http://cs-ext.jdsports.co.uk/page/king-of-trainers_','');
	var strPLUStrip2 = strPLUStrip1.replace('http://www.jdsports.co.uk/page/king-of-trainers_','');
	var strPLUStrip3 = strPLUStrip2.replace('/','');
	var strPLUStrip4 = strPLUStrip3.replace(/^.+-plu-/,'');
	var strPLUStrip5 = strPLUStrip4.replace('/','');
	var pageplu = strPLUStrip5;
	var PageHTMLID = '#kotProductLanding';
	var galHTML = '';
	var factHTML = '';
	var socialHTML = '';

	// START APPLICATION
	// -- Start product application and extend KOT	
	jQuery(document).ready(function ($) {
		
		// KOT BUILD PAGE HEADER
		// -- Load the gallery and page assets through JSON
		jQuery.getJSON(""+path+"assets/js/pages/products/list/nike-air-max-90.json", function (x) {	
		
			// PAGE TYPE
			// -- Normal, PreOrder, Archive
			// -- #Normal, #PreOrder, #Archive
			var pageType = x.Page[0].kotPageType;
			var kotColour = x.Page[0].themeColour;
			
			// LOOP EACH MENU LINK
			// -- Build the Menu, Gallery etc according to the above
			// -- Certain items fit in class below to switch DIVs off
			if(pageType=="Normal"){
				
					var i=0;
					jQuery.each(x.Page[0].kotGalleryNormal, function(key, val){
						galHTML+='<div class="kotContent">';
						galHTML+='<div class="tip"></div>';
						galHTML+='<img class="kotContentFullWidthimg" src="'+val.pic+'"/>';
						galHTML+='<div class="nameandprice gotham ultra"><img src="'+val.brand+'"/><br />'+val.nameandprice+'<br /><a href="'+val.shopnowLink+'" manual_cm_re="'+val.shopnowTag+'">'+val.linktext+'</a></div>';
						
					
						galHTML+='</div>';
					});
					galHTML += '';
					jQuery(''+PageHTMLID+'').append($(galHTML));
			
			}
			
			if(pageType=="PreOrder"){ // #PreOrder
				
					var i=0;
					jQuery.each(x.Page[0].kotGalleryPreOrder, function(key, val){
						galHTML+='<div class="kotContent '+pageType+'">';
						galHTML+='<div class="preorderline"></div>';
						galHTML+='<div class="launchbox gotham ultra kotTopPushResponsive">LAUNCHES<span>'+val.launchText+'</span></div>';
						galHTML+='<img class="kotContentFullWidthimg" src="'+val.pic+'" />';
						galHTML+='<div class="preOrder_nameandprice ultra gotham kotTopPushResponsive">'+val.nameandprice+'</div>';
						galHTML+='<div class="shopnow"><a href="'+val.shopnowLink+'" manual_cm_re="'+val.shopnowTag+'"><img src="'+path+'assets/images/nav/cta-pre.png"/></a></div>';
						galHTML+='</div>';
					});
					galHTML += '';
					jQuery(''+PageHTMLID+'').append($(galHTML));
					
					// PRE ORDER PAGE #PreOrder
					// -- Hide Normal and Archive
					jQuery('.kotProductDescription').hide();
					jQuery('.kotMiddleRelated').hide();
					jQuery('.kotFacts').hide();
					jQuery('.kotSocialStats').hide();
					jQuery('.kotProductSideShots').css('margin','-3px 0');
					jQuery('.kotProductSideShots').css('background','#fff');
					jQuery('.kotProductSideShots').append('<div class="tipfact"><div class="arrow-down-border"><div class="arrow-down"></div></div></div>');
					jQuery('.tipfact').css('background-color',x.Page[0].themeColour);
					jQuery('.arrow-down').css('border-top', '20px solid '+x.Page[0].themeColour);
			}
			
			if(pageType=="Archive"){ // #Archive
				
					var i=0;
					jQuery.each(x.Page[0].kotGalleryArchive, function(key, val){
						galHTML+='<div class="kotContent '+pageType+'">';
						galHTML+='<div class="archbox">'+val.archbox+'</div>';
						galHTML+='<img class="kotContentFullWidthimg" src="'+val.pic+'" />';
						galHTML+='<div class="archtitle">ARCHIVE</div>';
						galHTML+='</div>';
					});
					galHTML += '';
					jQuery(''+PageHTMLID+'').append($(galHTML));
					
					// ARCHIVE PAGE #Archive
					// -- Hide PreOrder and Normal
					jQuery('.kotProductDescription').hide();
					jQuery('.kotContent div.tip').hide();
					jQuery('.kotMiddleRelated').hide();
					jQuery('.kotFacts').hide();
					jQuery('.kotSocialStats').hide();
					jQuery('.kotProductSideShots').css('margin','-3px 0');
					jQuery('.kotProductSideShots').css('background','none');
					jQuery('.kotProductSideShots').append('<div class="tipfact"><div class="arrow-down-border"><div class="arrow-down"></div></div></div>');
					jQuery('.tipfact').css('background-color',x.Page[0].themeColour);
					jQuery('.arrow-down').css('border-top', '20px solid '+x.Page[0].themeColour);
					jQuery('.kotProductSideShotsdiv').hide();
			}
			
			// NOW WE RUN VARIOUS HEADER SPECIFIC CALLS FROM JSON
			
				// PRODUCT DESCRIPTION
				// -- Complete HTML spit for future flexibility
				
				jQuery('.ProductTitle').append(x.Page[0].ProductTitle);
				jQuery('.kotProductDescription').append(x.Page[0].ProductDescription);
				jQuery('.kotProductDescription').append(x.Page[0].ProductDescriptionText);
				jQuery('.kotProductDescription').addClass('gotham');
				jQuery('.kotProductDescription').addClass('ultra');
				
				// SIDE SHOT GALLERY
				// -- Append the side promotion brand shots
				if(pageType=="Archive"){ // #Archive
				} else {
					jQuery('.kotProductSideShots').append('<div class="sideShotLeft kotProductSideShotsdiv">'+x.Page[0].sideShotLeft+''+x.Page[0].sideShotRight+'</div>');
				}
				
				// FACTS
				// -- Type the facts into boxes on a semi triple style loop
				var int=0;
				factHTML+='<div class="kotFactBoxInner">';
				jQuery.each(x.Page[0].kotFactGallery, function(key, val){
					factHTML+='<div class="kotFactBox">';
					factHTML+='<table>';
					factHTML+='<tr>';
					factHTML+='<td class="kfbLeft themecol gotham ultra">'+val.kotFactLeftText+'</td>';
					factHTML+='<td class="kfbRight themecol gotham ultra"><span id="'+val.kotFactIdText+'">'+val.kotFactRightText+'</span></td>';
					factHTML+='</tr>';
					factHTML+='</table>';
					factHTML+='</div>';
				});
				factHTML += '</div>';
				jQuery('.kotFacts').append($(factHTML));
				
				// KOT SOCIAL
				// -- Social circle stats and social box features
					socialHTML+='<div class="kotsocial">';
					socialHTML+='<h3 class="gotham ultra">SOCIAL</h3>';
					socialHTML+='<table align="center">';
					socialHTML+='<tr>';
					socialHTML+='<td><div class="kotSocialCircle facebookKOT" data-dimension="95" data-text="F" data-info="JD Kot Likes" data-width="25" data-fontsize="17" data-percent="35" data-fgcolor="#61a9dc" data-bgcolor="#eee" data-total="150" data-border="inline" data-icon="users" data-icon-size="28" data-icon-color="#ccc"></div></td>';
					socialHTML+='<td><div class="kotSocialCircle twitterKOT" data-dimension="95" data-text="T" data-info="JD Kot Likes" data-width="25" data-fontsize="17" data-percent="35" data-fgcolor="#61a9dc" data-bgcolor="#eee" data-total="150" data-border="inline" data-icon="users" data-icon-size="28" data-icon-color="#ccc"></div></td>';
					socialHTML+='<td><div class="kotSocialCircle instagramKOT" data-dimension="95" data-text="I" data-info="JD Kot Likes" data-width="25" data-fontsize="17" data-percent="35" data-fgcolor="#61a9dc" data-bgcolor="#eee" data-total="150" data-border="inline" data-icon="users" data-icon-size="28" data-icon-color="#ccc"></div></td>';
					socialHTML+='</tr>';
					socialHTML+='</table>';
					socialHTML+='</div>';
					jQuery('.kotSocialStats').append($(socialHTML));	
				// -- Add social stats to the table above			
					jQuery('.kotSocialCircle').attr('data-bgcolor',x.Page[0].themeColour);
					jQuery('.kotSocialCircle').attr('data-fgcolor','#fff');
					jQuery('.kotSocialCircle').circliful();				
				
				// APPEND NAVIGATION
				// -- Is the product page a latest, archive or coming soon trainer?	
				// -- The function outside this call ApplyKoTNavigation below will append the active nav classes
				var currentNav = x.Page[0].NavigationChoice;
				jQuery('.currentNavigation').val(currentNav);
				
				// STYLING
				// -- Append colour and information to page
				jQuery('.themecol').css('color',x.Page[0].themeColour);
				jQuery('.themebg').css('background-color',x.Page[0].themeColour);
				jQuery('.kfbLeft').css('border-right', '1px solid '+x.Page[0].themeColour);
				
		});
		
		// KOT SOCIAL COUNTS
		// -- Facebook, Twitter and Instagram
		/*
		jQuery.getJSON("https://graph.facebook.com/fql?q=select%20%20like_count%20from%20link_stat%20where%20url=%22"+strPLUReader+"%22", function (str) {
			
			jQuery('.facebookKOT span.circle-text').html("<img src='"+path+"assets/images/product/share_f.png'/> 2,232");
			jQuery('.twitterKOT span.circle-text').html("<img src='"+path+"assets/images/product/share_t.png'/> 1,292");
			jQuery('.instagramKOT span.circle-text').html("<img src='"+path+"assets/images/product/share_i.png'/> 482");
			
		});
		*/
		
			
		
		// KOT LATEST GALLERY
		// -- This appends the latest gallery in the bottom feed of the product page showing all the latest trainers
		jQuery.getJSON(""+path+"assets/js/pages/latest.json", function (x) {	
		
			// VARS
			// -- For cleaner calls below
			var PageHTMLID = '.kotLatestFeed';
			var galHTML = '';
			var i=0;
			// LOOP EACH BOTTOM TRAINER
			// -- Build the bottom gallery
			galHTML+='<h3 class="hide gotham ultra">LATEST</h3>';
			galHTML+='<div class="ruhfullslider">';
			galHTML+='<div id="kotLatestGalleryFeed">';
				jQuery.each(x.Page[0].kotGallery, function(key, val){
					i++;
					//if(i>4) return false;							
						galHTML+='<div class="kotSingleSlide left">';
galHTML+='<a href="'+val.link+'" manual_cm_re="'+val.tag+'" title="'+val.brandtext+'">';
galHTML+='<span class="gotham caps ultra">'+val.brandtext+'</span>';
galHTML+='</a>';
galHTML+='<img src="'+val.pic+'" />';
galHTML+='</div>';
				});
			galHTML += '</div>';
			galHTML += '</div>';
			jQuery(''+PageHTMLID+'').append($(galHTML));
			
			jQuery("#kotLatestGalleryFeed").owlCarousel({addClassActive:true,
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
			
			// KOT LATEST BXSLIDER ATTACHER
			// Configure lastest feed at bottom as configured above too in JSON
			/*
			var latestSliders =  jQuery('#kotLatestGalleryFeed').bxSlider({
				slideWidth:300,
				minSlides:3,
				maxSlides:7,
				moveSlides:1,
				slideMargin:0,
				touchEnabled:true
			});
			latestSliders.reloadSlider();
			*/
		
		});
		
	// END APPLICATION
	});