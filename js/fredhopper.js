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

/***
// FREDHOPPER JS SLIDER
***/

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




//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// *********
// *********					 START PUMA EVO 2015
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// *********
// *********					 END  PUMA EVO 2015
// *********
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////