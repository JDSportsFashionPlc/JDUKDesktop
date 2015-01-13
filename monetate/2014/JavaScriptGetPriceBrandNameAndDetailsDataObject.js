/***

* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate
* Khaleel Mughal from Alistair Robson
* --- --- --- --- ---
* JSON And the Object Model
* Powerful return of pricing and structure from DOM
* and getting information for Console and global usage
* you can demonstrate this on product pages
* --- --- --- --- ---

***/


// JD IBM WebSphere Commerce 
// -- Applies only to Commerce 7 platform via Ensighten
// -- Monetate and FredHopper and Commerce
  
  // Item Brand
  var brand = Bootstrapper.dataManager.getData().brand;
  // Item Category
  var category = Bootstrapper.dataManager.getData().category;
  // Meta Desc
  var description = Bootstrapper.dataManager.getData().description;
  // Meta Title
  var pageName = Bootstrapper.dataManager.getData().pageName;
  // product, category
  var pageType = Bootstrapper.dataManager.getData().pageType;
  // desktop, mobile, tablet
  var platform = Bootstrapper.dataManager.getData().platform;
  // 6 digit int
  var plu = Bootstrapper.dataManager.getData().plu;
  // Return Boolean, true/false
  var sale = Bootstrapper.dataManager.getData().sale;
  // int
  var unitPrice = Bootstrapper.dataManager.getData().unitPrice;

// JD Aurora LostFerret
// -- Applies only to Aurora 2 platform
// -- via Ensighten and FredHopper and Aurora
  
  // Item Brand
  var brand = dataObject.brand;
  // Item Category
  var category = dataObject.category;
  // Meta Desc
  var description = dataObject.description;
  // Meta Title
  var pageName = dataObject.pageName;
  // product, category
  var pageType = dataObject.pageType;
  // desktop, mobile, tablet
  var platform = dataObject.platform;
  // 6 digit int
  var plu = dataObject.plu;
  // Return Boolean, true/false
  var sale = dataObject.sale;
  // int
  var unitPrice = dataObject.unitPrice;


