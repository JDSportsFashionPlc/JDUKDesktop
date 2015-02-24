/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * Monetate
 * Khaleel Mughal
 * --- --- --- --- ---
 * #JavaScript Get PLU list and Loop that list
 * --- --- --- --- ---

***/

// VARS
// -- Global variables
var plus=["136220","136223","136233","135181","136218","136219","136225","136235","136238","136282","136217","128251","128253","128254","128255","073249","052593","053121","014108","014394","079356","014021","013746","063496","152670","153226","153141","153192","153209"];

  // -- In this example code we basically add a BLACKFRIDAY tag
  // -- on the CategoryDisplay.jsp page if the product is in the list above.
   
  var blackoffer = false;
  var html = '<img src="/images/library/2014/blackfriday/270102.png" style="position:absolute;right:1px;top:1px"/>';
   
  // VARS
  // -- Get the plu field
  var imgs = document.getElementsByClassName("product-image");
   
  for ( var i = 0; i < imgs.length; i++ ) {
           
    for ( var j = 0; j < plus.length; j++ ) {
               
      var imgSrc = imgs[i].getElementsByClassName("product-medium")[0].src;
      
		// Append the Image on the DIV as needed      
      if( imgSrc.indexOf(plus[j] ) > -1 ) {                   
        
		  jQuery(imgs[i]).append(html);                   
        break;  
		               
      }
  }
  
} 