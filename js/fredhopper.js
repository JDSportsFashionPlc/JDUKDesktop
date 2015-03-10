/***
* --- --- --- --- ---
* JD Sports Fashion plc
* IBM WebSphere Commerce
* Khaleel Mughal
* --- --- --- --- ---
* #FredHopper Created : 1st December 2014
	- This is the new SDL FredHopper JS library
	---
	More cleaning of the code; and easy to minify, store.css is
	no longer to be used for adding FredHopper inside it. Regards.
* --- --- --- --- ---
***/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FREDHOPPER JS SLIDER
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function FredHopperSlider(){
	var $active = jQuery('#plpBanner .active');
	var $next = ($active.next().length > 0) ? $active.next() : $('#plpBanner img:first');
	$next.css('z-index',2);//move the next image up the pile
	$active.fadeOut(1500,function(){//fade out the top image
		$active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
		$next.css('z-index',3).addClass('active');//make the next image the top one
		if (jQuery('#plpBanner .active').next().length > 0) setTimeout('FredHopperSlider()', 750);
	});
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// *********
// *********					 START NIKE AIR MAX 2015
// *********
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

var	nikeCSSWrapper = '';
	nikeCSSWrapper  += '<!--NIKE SKINS-->';
	nikeCSSWrapper  += '<style>';
		nikeCSSWrapper  += '.page{overflow:visible}';
		nikeCSSWrapper  += 'div#product-list{position:relative;height:1800px !important}';
		nikeCSSWrapper  += '.tTakeImgResponsive img{width:100%}';
		nikeCSSWrapper  += '.takeOverSpot {position:absolute;top:0;width:800px}';
		nikeCSSWrapper  += '.lw {left:-800px}';
		nikeCSSWrapper  += '.rw {right:-800px}';
		nikeCSSWrapper  += '@media screen and (max-width: 1700px) { .takeOverSpot{width:600px}.lw{left:-600px}.rw{right:-600px} }';
		nikeCSSWrapper  += '@media screen and (max-width: 1400px) { .takeOverSpot{width:400px}.lw{left:-400px}.rw{right:-400px} }';
	nikeCSSWrapper  += '</style>';
	nikeCSSWrapper  += '';
	
//////////////////////////
//////////////////////////
// WOMENS 
//////////////////////////
//////////////////////////
if (jQuery('.fhNikeAirMax2015women').length > 0) {
	jQuery('body').append(nikeCSSWrapper);
	jQuery('.plpBanner img').remove();
	
	var 	nikeBanners = '';
			nikeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			nikeBanners += '	<img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/womens_banner/womens_skin_left.png">';
			nikeBanners += '</div>';
			nikeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			nikeBanners += '	<img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/womens_banner/womens_skin_right.png">';
			nikeBanners += '</div>';
			nikeBanners += '';
	
	jQuery('div#product-list').append(nikeBanners);	
	
	jQuery('#plpBanner').prepend('<img class="active" src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/womens_banner/womens_frame4.png"/><img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/womens_banner/womens_frame3.png"/><img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/womens_banner/womens_frame2.png"/><img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/womens_banner/womens_frame1.png"/>')
	
	setTimeout('FredHopperSlider()', 750);

}
//////////////////////////
//////////////////////////
// MENS AND MAIN
//////////////////////////
//////////////////////////

if (jQuery('.fhNikeAirMax2015men').length > 0) {
	jQuery('body').append(nikeCSSWrapper);
	jQuery('.plpBanner img').remove();
	
	var 	nikeBanners = '';
			nikeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			nikeBanners += '	<img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_skin_left.png">';
			nikeBanners += '</div>';
			nikeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			nikeBanners += '	<img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_skin_right.png">';
			nikeBanners += '</div>';
			nikeBanners += '';
	
	jQuery('div#product-list').append(nikeBanners);
	
	jQuery('#plpBanner').prepend('<img class="active" src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_frame4.png"/><img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_frame3.png"/><img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_frame2.png"/><img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_frame1.png"/>')
	
	setTimeout('FredHopperSlider()', 750);
	
}





if (jQuery('#productAttributesWrapper form').length ){
		
		if( 
			jQuery('input[name="manufacturerPartNumber"]').val()=="106992" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="107016" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="109268" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="110344"		
		){ 
		
			jQuery('body').append(nikeCSSWrapper);
			jQuery('.contentContainer').css("position", "relative");
			
			var 	nikeBanners = '';
					nikeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw" style="z-index:-1">';
					nikeBanners += '	<img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_skin_left.png">';
					nikeBanners += '</div>';
					nikeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw" style="z-index:-1">';
					nikeBanners += '	<img src="http://www.jdsports.co.uk//images/library/2014/28.11.2014/airmax/mens_banner/mens_skin_right.png">';
					nikeBanners += '</div>';
					nikeBanners += '';
			
			jQuery('div.contentContainer').append(nikeBanners);
	
	}

}




// FADE IN ELEMENTS

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// *********
// *********					END NIKE AIR MAX 2015
// *********
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////






var	pumaCSSWrapper = '';
	pumaCSSWrapper  += '<!--NIKE SKINS-->';
	pumaCSSWrapper  += '<style>';
		pumaCSSWrapper  += '.page{overflow:visible}';
		pumaCSSWrapper  += 'div#product-list{position:relative;height:1800px !important}';
		pumaCSSWrapper  += '.tTakeImgResponsive img{width:100%}';
		pumaCSSWrapper  += '.takeOverSpot {position:absolute;top:0;width:800px}';
		pumaCSSWrapper  += '.lw {left:-800px}';
		pumaCSSWrapper  += '.rw {right:-800px}';
		pumaCSSWrapper  += '@media screen and (max-width: 1700px) { .takeOverSpot{width:600px}.lw{left:-600px}.rw{right:-600px} }';
		pumaCSSWrapper  += '@media screen and (max-width: 1400px) { .takeOverSpot{width:400px}.lw{left:-400px}.rw{right:-400px} }';
	pumaCSSWrapper  += '</style>';
	pumaCSSWrapper  += '';
	
//////////////////////////
//////////////////////////
// WOMENS 
//////////////////////////
//////////////////////////
if (jQuery('.imageBannerPlainFH_pumaEvo2015').length > 0) {
	jQuery('body').append(pumaCSSWrapper);
	
	var 	pumaBanners = '';
			pumaBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			pumaBanners += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.02.2015/puma-left.jpg">';
			pumaBanners += '</div>';
			pumaBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			pumaBanners += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.02.2015/puma-right.jpg">';
			pumaBanners += '</div>';
			pumaBanners += '';
	
	jQuery('div#product-list').append(pumaBanners);	
	
	

}




// CREATIVE RECREATION
// MAIN



var	creativeMainCSSWrapper = '';
	creativeMainCSSWrapper  += '<!--CREATIVE SKINS-->';
	creativeMainCSSWrapper  += '<style>';
		creativeMainCSSWrapper  += '.page{overflow:visible;background:#131210 !important}';
		creativeMainCSSWrapper  += '#page{background:#131210 !important}';
		creativeMainCSSWrapper  += 'div#product-list,.contentContainer{background:#fff}';
		creativeMainCSSWrapper  += 'div#product-list{position:relative;height:1800px !important}';
		
		
		
		
		creativeMainCSSWrapper  += '.tTakeImgResponsive img{width:100%}';
		creativeMainCSSWrapper  += '.takeOverSpot {position:absolute;top:0;width:800px}';
		creativeMainCSSWrapper  += '.lw {left:-800px}';
		creativeMainCSSWrapper  += '.rw {right:-800px}';
		creativeMainCSSWrapper  += '@media screen and (max-width: 1700px) { .takeOverSpot{width:500px}.lw{left:-500px}.rw{right:-500px} }';
		creativeMainCSSWrapper  += '@media screen and (max-width: 1400px) { .takeOverSpot{width:300px}.lw{left:-300px}.rw{right:-300px} }';
	creativeMainCSSWrapper  += '</style>';
	creativeMainCSSWrapper  += '';
	
//////////////////////////
//////////////////////////
// WOMENS 
//////////////////////////
//////////////////////////
if (jQuery('.creativebannersync').length > 0) {
	jQuery('body').append(creativeMainCSSWrapper);
	
	var 	creativeBanners = '';
			creativeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			creativeBanners += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-cloth.jpg">';
			creativeBanners += '</div>';
			creativeBanners += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			creativeBanners += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-shoe.jpg">';
			creativeBanners += '</div>';
			creativeBanners += '';
	
	jQuery('div#product-list').append(creativeBanners);	
	
	

}


// CREATIVE RECREATION
// CLOTHES

var	creativeMainCSSWrapperClothes = '';
	creativeMainCSSWrapperClothes  += '<!--CREATIVE SKINS-->';
	creativeMainCSSWrapperClothes  += '<style>';
		creativeMainCSSWrapperClothes  += '.page{overflow:visible}';
		creativeMainCSSWrapperClothes  += '.page{overflow:visible;background:#131210 !important}';
		creativeMainCSSWrapperClothes  += 'div#product-list,.contentContainer{background:#fff}';
		creativeMainCSSWrapperClothes  += '.tTakeImgResponsive img{width:100%}';
		creativeMainCSSWrapperClothes  += '.takeOverSpot {position:absolute;top:0;width:800px}';
		creativeMainCSSWrapperClothes  += '.lw {left:-800px}';
		creativeMainCSSWrapperClothes  += '.rw {right:-800px}';
		creativeMainCSSWrapperClothes  += '@media screen and (max-width: 1700px) { .takeOverSpot{width:500px}.lw{left:-500px}.rw{right:-500px} }';
		creativeMainCSSWrapperClothes  += '@media screen and (max-width: 1400px) { .takeOverSpot{width:300px}.lw{left:-300px}.rw{right:-300px} }';
	creativeMainCSSWrapperClothes  += '</style>';
	creativeMainCSSWrapperClothes  += '';
	
//////////////////////////
//////////////////////////
// WOMENS 
//////////////////////////
//////////////////////////
if (jQuery('.creativebannersync_fh_clothes').length > 0) {
	jQuery('body').append(creativeMainCSSWrapperClothes);
	
	var 	creativeBannersscloth = '';
			creativeBannersscloth += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			creativeBannersscloth += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-cloth.jpg">';
			creativeBannersscloth += '</div>';
			creativeBannersscloth += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			creativeBannersscloth += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-cloth.jpg">';
			creativeBannersscloth += '</div>';
			creativeBannersscloth += '';
	
	jQuery('div#product-list').append(creativeBannersscloth);	
	
	

}



// CREATIVE RECREATION
// SHOES

var	creativeMainCSSWrapperShoes = '';
	creativeMainCSSWrapperShoes  += '<!--CREATIVE SKINS-->';
	creativeMainCSSWrapperShoes  += '<style>';
		creativeMainCSSWrapperShoes  += '.page{overflow:visible;background:#131210 !important}';
		creativeMainCSSWrapperShoes  += 'div#product-list,.contentContainer{background:#fff}';
		creativeMainCSSWrapperShoes  += 'div#product-list{position:relative;height:1800px !important}';
		creativeMainCSSWrapperShoes  += '.tTakeImgResponsive img{width:100%}';
		creativeMainCSSWrapperShoes  += '.takeOverSpot {position:absolute;top:0;width:800px}';
		creativeMainCSSWrapperShoes  += '.lw {left:-800px}';
		creativeMainCSSWrapperShoes  += '.rw {right:-800px}';
		creativeMainCSSWrapperShoes  += '@media screen and (max-width: 1700px) { .takeOverSpot{width:500px}.lw{left:-500px}.rw{right:-500px} }';
		creativeMainCSSWrapperShoes  += '@media screen and (max-width: 1400px) { .takeOverSpot{width:300px}.lw{left:-300px}.rw{right:-300px} }';
	creativeMainCSSWrapperShoes  += '</style>';
	creativeMainCSSWrapperShoes  += '';
	
//////////////////////////
//////////////////////////
// WOMENS 
//////////////////////////
//////////////////////////
if (jQuery('.creativebannersync_fh_shoes').length > 0) {
	jQuery('body').append(creativeMainCSSWrapperShoes);
	
	var 	creativeBannersshoes = '';
			creativeBannersshoes += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			creativeBannersshoes += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-shoe.jpg">';
			creativeBannersshoes += '</div>';
			creativeBannersshoes += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			creativeBannersshoes += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-shoe.jpg">';
			creativeBannersshoes += '</div>';
			creativeBannersshoes += '';
	
	jQuery('div#product-list').append(creativeBannersshoes);	
	
	

}


// CLOTH PP PAGES

if (jQuery('#productAttributesWrapper form').length ){
		
		if( 
			jQuery('input[name="manufacturerPartNumber"]').val()=="162402" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="162544" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="162583" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="135051" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="162570" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="162404" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="162569" ||
			jQuery('input[name="manufacturerPartNumber"]').val()=="162577"		
		){ 
		
			jQuery('body').append(creativeMainCSSWrapperClothes);
			jQuery('.contentContainer').css("position", "relative");
			
			var 	ppcreativeBannersscloth = '';
					ppcreativeBannersscloth += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw" style="z-index:-1">';
					ppcreativeBannersscloth += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-cloth.jpg">';
					ppcreativeBannersscloth += '</div>';
					ppcreativeBannersscloth += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw" style="z-index:-1">';
					ppcreativeBannersscloth += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-cloth.jpg">';
					ppcreativeBannersscloth += '</div>';
					ppcreativeBannersscloth += '';
			
			jQuery('div.contentContainer').append(ppcreativeBannersscloth);
	
	}

}


// SHOE PP PAGES

if (jQuery('#productAttributesWrapper form').length ){
		
		
		if( 
				
jQuery('input[name="manufacturerPartNumber"]').val()=="024318" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160035" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="032390" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160044" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="024308" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160039" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160149" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160047" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160144" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160043" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160041" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="160046" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="032416" ||
jQuery('input[name="manufacturerPartNumber"]').val()=="166022"
		){ 
		
			jQuery('body').append(creativeMainCSSWrapperClothes);
			jQuery('.contentContainer').css("position", "relative");
			
			var 	ppcreativeBannersscshoe = '';
					ppcreativeBannersscshoe += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot lw" style="z-index:-1">';
					ppcreativeBannersscshoe += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-shoe.jpg">';
					ppcreativeBannersscshoe += '</div>';
					ppcreativeBannersscshoe += '<div class="nikeFaderFirst takeOverSpot tTakeImgResponsive takeOverSpot rw" style="z-index:-1">';
					ppcreativeBannersscshoe += '	<img src="http://www.jdsports.co.uk/images/library/2015/02.03.2015/big-shoe.jpg">';
					ppcreativeBannersscshoe += '</div>';
					ppcreativeBannersscloth += '';
			
			jQuery('div.contentContainer').append(ppcreativeBannersscshoe);
	
	}

}


// PUMA IGNITE

var	pumaBannerIgnitecss = '';
	pumaBannerIgnitecss  += ' ';
	pumaBannerIgnitecss  += '<style>';
		pumaBannerIgnitecss  += '#page{background:#000 !important}';
		pumaBannerIgnitecss  += '.page{overflow:visible;position:relative}';
		pumaBannerIgnitecss  += '.page{overflow:visible;background:#000 !important}';
		pumaBannerIgnitecss  += 'div#product-list,.contentContainer{background:#fff}';
		pumaBannerIgnitecss  += '.tTakeImgResponsive img{width:100%}';
		pumaBannerIgnitecss  += '.takeOverSpot {position:absolute;top:0;width:550px}';
		pumaBannerIgnitecss  += '.lw {left:-550px}';
		pumaBannerIgnitecss  += '.rw {right:-550px}';
		pumaBannerIgnitecss  += '@media screen and (max-width: 1500px) { .takeOverSpot{width:500px}.lw{left:-500px}.rw{right:-500px} }';
		pumaBannerIgnitecss  += '@media screen and (max-width: 1400px) { .takeOverSpot{width:300px}.lw{left:-300px}.rw{right:-300px} }';
	pumaBannerIgnitecss  += '</style>';
	pumaBannerIgnitecss  += '';
	
//////////////////////////
//////////////////////////
// WOMENS 
//////////////////////////
//////////////////////////
if (jQuery('.pumaignitebanner2015').length > 0) {
	jQuery('body').append(pumaBannerIgnitecss);
	
	var 	pumaBannerIgniteHTML = '';
			pumaBannerIgniteHTML += '<div class="pumaSkin takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			pumaBannerIgniteHTML += '	<img src="http://www.jdsports.co.uk/images/library/2015/05.03.2015/skin.jpg">';
			pumaBannerIgniteHTML += '</div>';
			pumaBannerIgniteHTML += '<div class="pumaSkin takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			pumaBannerIgniteHTML += '	<img src="http://www.jdsports.co.uk/images/library/2015/05.03.2015/skin.jpg">';
			pumaBannerIgniteHTML += '</div>';
			pumaBannerIgniteHTML += '';
	
	jQuery('div#product-list').append(pumaBannerIgniteHTML);	
	
	
}



// 
// NIKE AIR MAX GOLD
//

var	NikeAirMaxGoldCSS = '';
	NikeAirMaxGoldCSS  += ' ';
	NikeAirMaxGoldCSS  += '<style>';
		NikeAirMaxGoldCSS  += '#page{background:#d7a489 !important}';
		NikeAirMaxGoldCSS  += '.page{overflow:visible;position:relative}';
		NikeAirMaxGoldCSS  += '.page{overflow:visible;background:#000 !important}';
		NikeAirMaxGoldCSS  += 'div#product-list,.contentContainer{background:#fff}';
		NikeAirMaxGoldCSS  += '.tTakeImgResponsive img{width:100%}';
		NikeAirMaxGoldCSS  += '.takeOverSpot {position:absolute;top:0;width:800px}';
		NikeAirMaxGoldCSS  += '.lw {left:-800px}';
		NikeAirMaxGoldCSS  += '.rw {right:-800px}';
		NikeAirMaxGoldCSS  += '@media screen and (max-width: 1500px) { .takeOverSpot{width:471px}.lw{left:-471px}.rw{right:-471px} }';
		NikeAirMaxGoldCSS  += '@media screen and (max-width: 1400px) { .takeOverSpot{width:300px}.lw{left:-300px}.rw{right:-300px} }';
	NikeAirMaxGoldCSS  += '</style>';
	NikeAirMaxGoldCSS  += '';
	

if ( jQuery('.nikeAirMax90Gold').length > 0) {
 	jQuery('body').append(NikeAirMaxGoldCSS);
	
	var 	NikeAirMaxGoldCSSBannersHTML = '';
			NikeAirMaxGoldCSSBannersHTML += '<div  class="nikeSkin takeOverSpot tTakeImgResponsive takeOverSpot lw">';
			NikeAirMaxGoldCSSBannersHTML += '	<img src="http://www.jdsports.co.uk/images/library/2015/10.03.2015/RL2623-Nike-AMD-Digital_Homepage_Skins_800x1800.jpg">';
			NikeAirMaxGoldCSSBannersHTML += '</div>';
			NikeAirMaxGoldCSSBannersHTML += '<div  class="nikeSkin takeOverSpot tTakeImgResponsive takeOverSpot rw">';
			NikeAirMaxGoldCSSBannersHTML += '	<img src="http://www.jdsports.co.uk/images/library/2015/10.03.2015/RL2623-Nike-AMD-Digital_Homepage_Skins_800x1800.jpg">';
			NikeAirMaxGoldCSSBannersHTML += '</div>';
			NikeAirMaxGoldCSSBannersHTML += '';
	
	 jQuery('div#product-list').append(NikeAirMaxGoldCSSBannersHTML);	
	
	
}





