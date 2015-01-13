/***
* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate
* Khaleel Mughal
* --- --- --- --- ---
* #Are We On The Product Page?
* --- --- --- --- ---
***/

// JQUERY APPENDED VIA MONETATE

// CHECK PRODUCT PAGE ADD FORM
// -- This is stable as this is always on the Commerce ProductDisplay.jsp
if ( jQuery('#productAttributesWrapper form').length ) {

  // What is the Plu we want to chec?
  // -- Simply enter the PLUID here, Commerce DB2 is manufacturerPartNumberId
    if ( jQuery('input[name="manufacturerPartNumber"]').val()=="106992" ) { 

      console.log('We are on the selected Product Page');

    }

}
