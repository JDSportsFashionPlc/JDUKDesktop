/*
*
*
*
*/


(function($, win, doc) {
	'use strict';

	/*
	 * Global api.
	 */
	var kotslideshow = window.kotslideshow = {
		init: function(options) {
			return _instance || new kotSlider(options);
		}
	}
	
	
	/**
	 * Constructor.
	 */
	function kotSlider(options)
	{
		// console.log("INIT");
		
		
		_instance = this;
		// BROWSER SIZE
		_browserSize[0] = jQuery(window).width();
      	_browserSize[1] = jQuery(window).height();
      	
      	_imagePath = options.imagepath;
      	
      	_pageWrapper	= jQuery( "#page" );
      	
		_kotWrapper		= jQuery( "#king-of-trainers-wrapper" );
      	
		_isMobile		= options.ismobile;
		_isTablet		= options.isTablet;
		
		_easeType		= options.easetype;
		
	}
	
	kotSlider.prototype.refreshSlide = function(options)
	{
		
		_section 		= jQuery( options.section );
		/*_heroSlide 		= jQuery( options.section ).find(".hero").css( {"-webkitTransform": "translate3D(0px, 0px, 0px)"} ).wrapAll( "<div class='slide-wrap' />");*/
		//_heroSlide 		= jQuery( options.section ).find(".hero").wrapAll( "<div class='slide-wrap' />");
		_slideShowWrap	= _section.find(".slide-wrap");
		_numSlides		= options.numslides;
		_slidesContent	= options.slidescontent;		
		
		// RESET SECTION LEFT
		
		
		// ADD SLIDES
		// console.log(_section[0].id);
		jQuery( "#"+_section[0].id+" .featureshots" ).each(function( index )
		{
			var contentURL = _slidesContent[index][2];
			jQuery(this).css("background", "url(/lib/hlight/king-of-trainers/images/section-backgrounds/" + _imagePath + "/"+ contentURL+") 50% no-repeat");
			jQuery(this).css("background-size", "cover");
		});
		
		
		_slideShowWrap.width( _browserSize[0] * (_numSlides+1) );
		//_kotWrapper.width( _browserSize[0] * (_numSlides+1) );
		
		
		//_kotWrapper.find(".slide").removeClass("current");
		//_section.find(".slide").addClass("current");
		
		
		//_slideShowWrap.width( _browserSize[0] * ( _numSlides + 3 ) );
		//_slideShowWrap.css( {left: "-"+_browserSize[0]+"px"} );
		
		
		
		
		
		
		
		// BUILD NAV
		buildNav();
	}
	
	function ourSlide(){
		if (_isTablet)
		{	
			jQuery("#page").hammer(
            {
            	 drag_min_distance: 30
            }).on("swipe dragstart", function (e)
            {
            	if (e.gesture.direction == "left")
            	{
            		if(!_isTransitioning){ _instance.next(); }           			
              	}
              	else if (e.gesture.direction == "right")
              	{
               		if(!_isTransitioning){ _instance.prev(); }         			
               	}
               	e.gesture.preventDefault();
            });
            
            
            // TAP FUNCTIONS
            /*
            _slideShowNav[1].hammer(
            {
            	 
            }).on("tap", function (e)
            {
            	if(!_isTransitioning)
            	{
					_instance.next();
				}
               	e.gesture.preventDefault();
            });
            */
            
		ourSlide();
               	
        }

	}
	
	
	
	function buildNav()
	{
		// console.log("is mobile? "+_isMobile );
		
		
		_startSlide = true;
		
		//var slideShowNavigation = currSectionDiv.find(".content-safe-area").before( $("<div>").attr("class", "slideshow-nav").append( $("<a>").attr("class", "arrows prev").attr("href", "#").text("").css({ "opacity":"0", "left":"0px" }) ).append( $("<a>").attr("class", "arrows next").attr("href", "#").text("").css({ "opacity":"0", "right":"0px" }) ) );
		
		_pageWrapper.after( jQuery("<a>").attr("class", "arrows prev").attr("href", "#").text("").css({ "opacity":"0", "left":"0px", "position":"fixed" }) );
		_pageWrapper.after( jQuery("<a>").attr("class", "arrows next").attr("href", "#").text("").css({ "opacity":"0", "right":"0px", "position":"fixed" }) );
		
		_slideShowNav[0] = jQuery("a.prev");
		_slideShowNav[1] = jQuery("a.next");
		
		_slideShowNav[0].css({ opacity:"1", left:"75px" });
		_slideShowNav[1].css({ opacity:"1", right:"75px" });
				
		
		
		// NAVIGATION ARROWS
		_slideShowNav[0].bind("click", function()
		{
			if(!_isTransitioning)
			{
				_instance.prev();
			}
			
			return false;
		});
		
		_slideShowNav[1].bind("click", function()
		{
			if(!_isTransitioning)
			{
				_instance.next();
			}
			return false;
		});
		
		// NAVIGATION LEFT/RIGHT KEYS
		jQuery(document).keydown(function (e)
		{
	       	switch (e.keyCode)
	       	{
		       	 case 39:
		       	 	if(!_isTransitioning){ _instance.next(); }
		       	 	return false;
		       	 	break;
		       	 case 37:
		       	 	if(!_isTransitioning){ _instance.prev(); }
		       	 	return false;
           			break;
           	}
		});
		
		// HIDE BACK ARROW
		_slideShowNav[0].hide();
		
		
		
		// NAVIGATION SWIPE
		if (_isMobile)
		{	
			jQuery("#king-of-trainers-wrapper").hammer(
            {
            	 drag_min_distance: 30
            }).on("swipe dragstart", function (e)
            {
            	if (e.gesture.direction == "left")
            	{
            		if(!_isTransitioning){ _instance.next(); }           			
              	}
              	else if (e.gesture.direction == "right")
              	{
               		if(!_isTransitioning){ _instance.prev(); }         			
               	}
               	e.gesture.preventDefault();
            });
            
            
            // TAP FUNCTIONS
            /*
            _slideShowNav[1].hammer(
            {
            	 
            }).on("tap", function (e)
            {
            	if(!_isTransitioning)
            	{
					_instance.next();
				}
               	e.gesture.preventDefault();
            });
            */
            
               	
        }
		// NAVIGATION SWIPE
		if (_isTablet)
		{	
			jQuery("#king-of-trainers-wrapper").hammer(
            {
            	 drag_min_distance: 10
            }).on("swipe dragstart", function (e)
            {
            	if (e.gesture.direction == "left")
            	{
            		if(!_isTransitioning){ _instance.next(); }           			
              	}
              	else if (e.gesture.direction == "right")
              	{
               		if(!_isTransitioning){ _instance.prev(); }         			
               	}
               	e.gesture.preventDefault();
            });
            
            
            // TAP FUNCTIONS
            /*
            _slideShowNav[1].hammer(
            {
            	 
            }).on("tap", function (e)
            {
            	if(!_isTransitioning)
            	{
					_instance.next();
				}
               	e.gesture.preventDefault();
            });
            */
            
               	
        }
		
		
	}
	
	kotSlider.prototype.prev = function()
	{
		// console.log("prev");
		if(_currentSlide != 1)
		{
			_isTransitioning = true;			
			_currentSlide--;
			
			// TOGGLE ARROW VISIBILITY
			if(_currentSlide == 1)
			{
		    	_slideShowNav[0].hide();
		    }
		    else
		    {
		    	_slideShowNav[0].show();
		    }
	    
		    if(_currentSlide == (_numSlides+1) )
		    {
		    	_slideShowNav[1].hide();
		    }
		    else
		    {
		    	_slideShowNav[1].show();
		    }
		    //
		    
		    var shiftAmmount = _browserSize[0] * ( _currentSlide-1 );
		    var shiftAmmountNegative = -Math.abs( shiftAmmount );
		    
		    // DO TRANSITION
		    _section.transition({ x: shiftAmmountNegative }, 800, _easeType, function (){ _isTransitioning = false; });
	    }
		
	} 
	
	kotSlider.prototype.next = function()
	{
		// console.log("next");
		if( _currentSlide != (_numSlides+1) )
	    {
	    	_isTransitioning = true;
	    	_currentSlide++;
	    	// console.log("_currentSlide = "+_currentSlide);
	    	
	    	var shiftAmmount = _browserSize[0] * (_currentSlide-1);
	    	var shiftAmmountNegative = -Math.abs( shiftAmmount );
	    	
	    	// TOGGLE ARROW VISIBILITY
	    	if(_currentSlide == 1)
	    	{
	    		_slideShowNav[0].hide();
	    	}
	    	else
	    	{
		    	_slideShowNav[0].show();
		    }
		    
		    if( _currentSlide == (_numSlides+1) )
		    {
		    	_slideShowNav[1].hide();
		    
		    }
		    else
		    {
		    	_slideShowNav[1].show();
		    }
		    
		    // DO TRANSITION	    
		    _section.transition({ x: shiftAmmountNegative }, 800, _easeType, function (){ _isTransitioning = false; });
			
			
	    }
	   
	} 
	
	kotSlider.prototype.destroy = function()
	{
		
		
		// remove all slides
		if( _section != null)
		{
			// console.log("DESTROY - " + _section.id);
			
			_section.find( ".slide" ).not(".hero").css({"background": "none"});
			//_section.find(".section-background").prepend( _heroSlide.clone() );
			//_slideShowWrap.remove();
		}
		
		
      	if(_section != null)
      	{
      		_section.transition({ x: 0 }, 0);
		}
      	
		_section 		= null;
		_heroSlide 		= null;
		_slideShowWrap	= null;
		_numSlides		= null;
		_slidesContent	= null;
		_slides			= [];
		_currentSlide 	= 1;
		_slideShowNav	= [];
		
		
	} 
	
	//Singleton
	var _instance;
	var _kotWrapper;
	var _section;
	var _slides = [];
	var _slidesContent;
	var _slideShowWrap;
	var _heroSlide;
	var _numSlides;
	var _browserSize = [];
	var _slideShowNav = [];
	var _isMobile;
	var _isTablet;
	var _currentSlide = 1;
	var _isTransitioning = false;
	var _imagePath;
	var _endSlide;
	var _startSlide;
	var _pageWrapper;
	var _easeType;
	
	
}(window, document));