/***
* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate
* Khaleel Mughal
* --- --- --- --- ---
* #Delivery Timing Campaigns v1
* --- --- --- --- ---
***/

// TIMI LOADER
jQuery(document).ready(function($) {   
var everythingLoaded = setInterval(function() {
if (/loaded|complete/.test(document.readyState)) {

	// START TIMI LOADER NO MORE CUSTOM CODE	
	
		clearInterval(everythingLoaded); 
		
		var HTML, topTxt, bottomTxt, CMTTagging;
		if ( jQuery('#productAttributesWrapper form').length ) {
		// PP
		} else if ( jQuery('form#basketForm').length ) {
		// CART
		} else {
		// DESKTOP
		
		topTxt = 'Next Day Delivery';
		bottomTxt = 'Order by 9pm';
		CMTTagging = 'A'
		
		HTML = '<a class="delivery-mainlink" href="/page/delivery" manual_cm_re="USP-_-SpecialDeliveryCampaign-_-'+CMTTagging+'" style="display:inline">'+topTxt+'</a>&nbsp;<br /><span class="delivery-sublink" style="display:inline"><a href="/page/delivery" manual_cm_re="USP-_-SpecialDeliveryCampaign-_-'+CMTTagging+'">'+bottomTxt+'</a></span>';jQuery('#DeliverySpot2').html(' ');jQuery('#DeliverySpot2').html(HTML);
		
		}
	
	// END TIMI LOADER NO MORE CUSTOM CODE

}
}, 10);

});
