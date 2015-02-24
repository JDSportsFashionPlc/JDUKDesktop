/***

* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate
* Khaleel Mughal
* --- --- --- --- ---
* #Are we on Product page? And if so display a small brand icon (roundel) on each product
* --- --- --- --- ---

***/

// VARS
// -- Plu list from JD Merch or JD Marketing
  var plus=["136220","136223","136233","135181","136218","136219","136225"];
  var blackoffer = false;
  var html = '<img src="/images/library/2014/blackfriday/270102.png" style="position:absolute;right:1px;top:1px"/>';

// LOOP AND APPLY THE IMAGE IN TOP RIGHT OF BOX
// -- via absolute CSS as defined in var HTML
  var imgs = document.getElementsByClassName("product-image");

    for ( var i = 0; i < imgs.length; i++ ) {

      for( var j = 0; j < plus.length; j++ ) {

      var imgSrc = imgs[i].getElementsByClassName("product-medium")[0].src;

      if( imgSrc.indexOf ( plus[j] ) > -1 ) {                   
        
		  jQuery(imgs[i]).append(html);                   
        break;
		                 
      }
    }
  } 
