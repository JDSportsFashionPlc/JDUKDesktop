
	jQuery.noConflict();

/*
    *
    *	REMOVE RUBBISH VIEWPORT TAGS + ADD RESPONSIVE TAG
    *
    */
    jQuery("meta[name=viewport]").remove();
    
    jQuery(document).ready(function($)
    
    
    
    {
		jQuery("meta[name=viewport]").remove();
		jQuery('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
		//jQuery('#home').find('arrows').css({'display': 'none'});
		// jQuery('a.arrows').click(function(){
		// 	isHome = true;
  //       	$("a.prev").remove();
  //       	$("a.next").remove();
  //       	// $("a.arrows").remove();
		// });
			var homeLand = $('#page').height()
			var myHomeHeight = 26622;

			if( homeLand < myHomeHeight){

			$('#page').css({'padding-top': '0px'});

				// alert ("this is home");


			}

			else if( homeLand > myHomeHeight) {
			// // AUTO SCROLL TOP
			// $(jQuery.browser.webkit ? "body": "html").scrollTop( 0 );
				$('#page').css({'padding-top': '100px'});
			}
		
	});
	
	jQuery(function()	
	{


		/*
    *
    *	REMOVE STOP MOBI LINK (to redirect links to mob)
    *
    */
    
    function Delete_Cookie( name, path, domain )
    {
    	if ( Get_Cookie( name ) ) document.cookie=name+"="+((path) ? ";path="+path:"")+((domain)?";domain="+domain:"") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
	
	function Get_Cookie(name)
	{
		if (document.cookie.indexOf(name) > 0) { return true; }
	}
	
	Delete_Cookie( "stop_mobi", "/", "jdsports.co.uk" );
	
	/*
    *
    *	REMOVE RUBBISH VIEWPORT TAGS + ADD RESPONSIVE TAG
    *
    */
    jQuery("meta[name=viewport]").remove();
    
 //    jQuery(document).ready(function($)
 //    {
	// 	jQuery('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
	// 	// jQuery('body').css({'min-height': '100% !important'});
	// 	// jQuery('#page').css({'position': 'absolute',
	// 	// 					'top': '0'});
	// 	//jQuery('ul#secondaryNavigation').find('ul#cookieLink').css({'display': 'none'});
	// 	// var myHeight = jQuery(window).height();
	// 	// jQuery('#home').css({'min-height': 'myHeight'});
    
	// });
	
    


		/* STAGING ONLY - REMOVE FROM PRODUCTION */
		
		// jQuery('body,html').contents().filter(function()
		// {
  //   		return this.nodeType === 3;
  //   	}).remove();
    	/****************************************/
    	
  //   	jQuery('.contentContainer').contents().filter(function()
		// {
  //   		return this.nodeType === 3;
  //   	}).remove();
    	/****************************************/
    	
    	
		
		jQuery(".contentContainer").KingOfTrainers();
 
 
/*	// VARS
	var strInterval;
	var strCDNURL = 'http://jdsports.scene7.com/';
	var teaserIcon = jQuery('.teaserButton');
	var strURL = 'denim';
	var strRandom = 1 + Math.floor(Math.random() * 6);
	jQuery.fx.speeds._default = 900;
	jQuery.easing.def = "easeInOutSine"; 
	var initWindowHeight = $( window ).height();
	var windowHeightLessHeader = (initWindowHeight - 113);
	jQuery("meta[name=viewport]").remove();
	var browserSize = [];
	var imagePath;
	var sliderDelaySeconds = 3000;*/
 

 
 
 
 
 
 
 
 
 
 
    	
    });
    
    
    
    
    
    
    
    
    
     