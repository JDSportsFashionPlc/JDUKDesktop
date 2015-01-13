/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * Monetate
 * Khaleel Mughal
 * --- --- --- --- ---
 * #Are We On TheCart Page?
 * --- --- --- --- ---

***/

// VARS
// -- Global variables
var plu="136842";

// VALIDATION
// -- Are we on checkout?
if ( jQuery('form#basketForm').length ){
	
  // Further -- is this the item we want to highlight?
  var plu = plugex.replace(/\D+/g, '');
  if ( plu == pluList ) {
    hideQtyOptions();
  }

}