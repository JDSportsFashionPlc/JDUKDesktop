/***
* --- --- --- --- ---
* JD Sports Fashion plc
* Monetate, Inc.
* Khaleel Mughal
* --- --- --- --- ---
* #JDINSTAGRAMFEEDPERUSERPERHASHTAG
* --- --- --- --- ---
***/

//
// GET INSTAGRAM FEED 
// Get feed from Instagram based on Hashtag and filter by user
// Also spit it inside bxSlider (this is optional)
// 

	// VARS

	var apiURL 	= 'https://api.instagram.com/v1/tags/';
	var username 	= 'jdsportsofficial';
	var hashtag 	= 'crlifestyle';
	var clientId 	= '5a79ddf3fa4147ffbea3fc0e38b22014';
	var auth_token	= ''; // not needed for most
	var instaList	= 'li'; // li, div, p etc
	var divId = '#instafeed';
	var limit = 25;
	var instaHTML;
	
	// JQUERY

	jQuery.ajax({
		type: "GET",
		dataType: "jsonp",
		cache: false,
		url: apiURL + hashtag + "/media/recent?client_id=" + clientId,
		success: function (x) {
			
			for (var i = 0; i < x.data.length && i < limit; i++) {
			
				// GET THE PICTURE
				// -- options are thumbnail and large - see object for more
				
					var instaPicture = x.data[i].images.thumbnail.url;
					if (x.data[i].user.username == username) {
						instaHTML += "<"+instaList+" class='CaroselSlideItem'><img src='" + instaPicture + "'/></"+instaList+">";
					}
				
				// INSERT THE GALLERY
				
					jQuery(divId).html(instaHTML);
					
			}
		  
		  	// AFTER -- Can do pretty things to dom..
			// BXSLIDER API
			// -- This small chunk fires to bxSlider		  
			var caroselSlider = jQuery('#instafeed').bxSlider({
				slideWidth:250,
				minSlides:2,
				maxSlides:5,
				moveSlides:5,
				slideMargin:15,
				touchEnabled:true
			});
		}
		
	});

