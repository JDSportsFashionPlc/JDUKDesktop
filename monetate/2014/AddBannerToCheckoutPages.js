/***
* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate
* Khaleel Mughal
* --- --- --- --- ---
* #Add X-Mas Delivery times on Cart Page 
* --- --- --- --- ---
***/

// JQUERY APPENDED VIA MONETATE

// CHECK CART SCENARIOS
// -- CheckoutDisplay.jsp, Checkout.jsp
if ( jQuery('body#checkout').length ) {
	
	if (
	jQuery('form#newCustomerResetPassword').length ||
	jQuery('form#detailsForm').length ||
	jQuery('form#checkoutBillingAddressForm').length ||
	jQuery('form#checkoutPaymentSubmitForm').length ||
	jQuery('form#confirmForm').length
	) {
		
		// ADD XMAS BANNER
		// -- Append to Header
		jQuery('#header').css('text-align', 'center');
		jQuery('#headerCheckout').css('text-align', 'center');
		jQuery('div#header').append('<img style="width:800px;height:75px;margin-top:15px" src="http://www.jdsports.co.uk/images/library/2014/18.12.2014/checkout.jpg" />');
		
	}

}
