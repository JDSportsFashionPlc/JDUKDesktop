/***
* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate
* Khaleel Mughal
* --- --- --- --- ---
* #JavaScript Loop
* --- --- --- --- ---
***/

// Clean JS Loop for usage in JSON and simple CMS
// -- Does not work pre-ECMAScript 6

var pluIdArray = [

  { productName: 'Nike Air Max 90', pluId: '083285'  },
  { productName: 'Adidas Pants', pluId: '143079' },

];  

for ( str of pluIdArray ) {    
  console.log( str.productName );
  console.log( str.pluId );

}