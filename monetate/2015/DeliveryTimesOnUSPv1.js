/***
* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate
* Khaleel Mughal
* --- --- --- --- ---
* #Delivery Timing Campaigns v1
* --- --- --- --- ---
***/

// VARS
var HTML, topTxt, bottomTxt, CMTTagging;

// BUILDER
function insertHomePage(topTxt, bottomTxt, CMTTagging){HTML = '<a class="delivery-mainlink" href="/page/delivery" manual_cm_re="USP-_-Delivery-Link-_-'+CMTTagging+'" style="display:inline">'+topTxt+'</a>&nbsp;<br /><span class="delivery-sublink" style="display:inline"><a href="/page/delivery" manual_cm_re="USP-_-Delivery-Link-_-'+CMTTagging+'">'+bottomTxt+'</a></span>';jQuery('#DeliverySpot2').html(' ');jQuery('#DeliverySpot2').html(HTML);}

if ( jQuery('#productAttributesWrapper form').length ) {
} else if ( jQuery('form#basketForm').length ) {
} else {
	
	// DESKTOP

	topTxt = 'Next Day Delivery';
	bottomTxt = 'Order by 9pm';
	CMTTagging = 'A'

	insertHomePage(topTxt, bottomTxt, CMTTagging);
	
}
