$.noConflict();
(function($)
{
	$.fn.KingOfTrainers = function(options)
	{
		// SETTINGS
		var settings = $.extend(
		{
			'navigationURL': '/lib/hlight/king-of-trainers/king-of-trainers.json?id=' + Math.floor((Math.random()*100000)+1),
			'featureID': 000,
			'featureScenes': []
      	}, options);
      	
      	// VARIABLES
      	var isTablet = isTablet(),
      		isMobile = isMobile(),
      		isScrolling = false,
      		numberOfFeatures = 0,
      		stopScroll = 0,
      		scrollTop,
      		wheelStop = 0,
      		lastScrollTop = false,
      		currentSection = 0,
      		nextSection = 0,
      		previousSection = 0,
      		scrollLoc,
      		isHome = true,
      		isFooter = false,
      		currentScrollDirection,
      		navigationArr = [],
      		sectionDivs = [],
      		initWindowHeight = $( window ).height(),
      		windowHeightLessHeader = (initWindowHeight - 113),
      		/*scrollTop = false,
      		scrollBottom = false,*/
      		kotSlideShow,      		
      		navPagination = 0,
      		navPaginationCount = 0,
      		navShift = 0,
      		maxShift = 0,
      		browserSize = [],
      		imagePath = "",
      		firstLoad = true,
      		sectionLimit,
      		slideShow,
      		invertedShift = 0,
      		lastInvertedShift = 0,
      		currSlideNum = 0,
      		skipAnimation = false,
      		isTransitioning = false,
      		easeType = "ease";
      	
      	
      	// REMOVE VIEWPORT      	
      	jQuery("meta[name=viewport]").remove();
      	// REMOVE STOP_MOBI
      	function Delete_Cookie( name, path, domain )
      	{
    		if ( Get_Cookie( name ) ) document.cookie=name+"="+((path) ? ";path="+path:"")+((domain)?";domain="+domain:"") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    	}
    	function Get_Cookie(name)
    	{
			if (document.cookie.indexOf(name) > 0) { return true; }
		}
		Delete_Cookie( "stop_mobi", "/", "jdsports.co.uk" );
		
		// MOBILE NAV
		if( isMobile )
		{
			jQuery('#header').append(jQuery('<ul/>').attr('id','mobile-navigation')
				.append('<li><a href="http://jdsports.co.uk/mens">Mens</a></li>')
					.append('<li><a href="http://jdsports.co.uk/womens">Womens</a></li>')
						.append('<li class="last-child"><a href="http://jdsports.co.uk/kids">Kids</a></li>')
			);
		}
	
		
      	
		//jQuery('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
		
      	
      	// CONVERT TRANSITION TO STANDARD ANIMATE
      	if (!$.support.transition)
      	{
	      	easeType = "";
	      	$.fn.transition = $.fn.animate;
      	}
      	
      	// USE HISTORY API
      	var History = window.History;
      	if ( History.enabled )
      	{
      		historyEnabled = true;
      	}
      	
      	// SETUP PAGE
      	setupPage();
      	
      	// HANDLE HISTORY STATE CHANGE      	
      	History.Adapter.bind(window,'statechange',function()
      	{
      		//alert("aaaa");
      		// Note: We are using statechange instead of popstate
      		var State = History.getState();
      		//$('#content').load(State.url);
      		//Instead of the line above, you could run the code below if the url returns the whole page instead of just the content (assuming it has a `#content`):
	      	$.get(State.url, function(response)
	      	{
            	//$('#content').html(response.find('#content').html());
            	// console.log( State );
            });
        });
      	
      	//      	    	
      	window.onload = function ()
		{
			jQuery('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
			browserSize[0] = $(window).width();
      		browserSize[1] = $(window).height();
      		if( browserSize[0] > 1201 )
      		{
	      		imagePath = "large"
      		}
      		else
      		{
	      		imagePath = "medium"
      		}
      		
      		
			kotSlideShow = kotslideshow.init(
			{
		  		isTablet:			isTablet,
		  		imagepath:			imagePath,
		  		easetype:			easeType
		  	});
		  	
		  	//preloadImages();
		  	loadNavigationData();		
						
		}
		// HANDLE RESIZE
		$( window ).resize(function()
		{
      		browserSize[0] = $(window).width();
      		browserSize[1] = $(window).height();
      		
      		
      		$(".section").height( browserSize[1] );
	      	$("#home").height( (browserSize[1] - 113) );
      		
      	});
      	
      			
		
		function setupPage()
		{
			// SET HOME HEIGHT
			$("#home").height( windowHeightLessHeader );
			$("#home").width( $(window).width() );
			// AUTO SCROLL TOP
			$(jQuery.browser.webkit ? "body": "html").scrollTop( 0 );
			
			
			$("<div>").attr("class", "ipad-warning").insertAfter( "#page" );
			
			if( !isMobile || !isTablet )
			{
				//// console.log("build nav"); $(".king-of-trainers-navigation").insertAfter( "#page" );
				// CREATE DESKTOP NAV!
				
			}
			
			//.append( $("<ul>").attr("class", "prev-5") ).append( $("<li>").append( $("<a>").attr("href", "#").attr("class", "current").text("VIEW PREVIOUS 5").append( $("<span>").attr("class", "icon up-arrow") ) ) )
			
			
			
			$(".section-nav").insertAfter( "#page" );
			$(".section-info-panel").insertAfter( "#page" );
			$(".jd-sports-global-nav").insertAfter( "#page" );
			
			
			
			// MOVE ALL BUT BACKGROUNDS TO AFTER #PAGE
			$("<div>").attr("class", "preloader").insertAfter( "#page" );
			
			$("<div>").attr("class", "section-info-overlay").insertAfter( "#page" );
			$("<div>").attr("class", "section-gradient").insertAfter( "#page" );
			
			var textScrollSwipe = "SCROLL";
			if (isTablet || isMobile)
      		{
      			textScrollSwipe = "SWIPE"
      		}
			
			// ADD NEXT FEATURE BUTTON
			$("<a>").attr("href", "#").attr("class", "scroll-for-more next-feature").html(textScrollSwipe+" FOR MORE<span class='scroll-icon'></span>").insertAfter( "#page" );
			
			// ADD PREVIOUS FEATURE BUTTON
			$("<a>").attr("href", "#").attr("class", "scroll-for-more previous-feature").insertAfter( "#page" );
			
			
			// HIDE SECTION NAV
			$(".section-nav").hide();
			$(".section-gradient").hide();
			
			$(".section-info-overlay").hide();
			
			$(".scroll-for-more").hide();
			
			//$(".section-info-panel").css( { "display":"block" } );
			$(".section-info-panel").hide();
			// HIDE INFO
		    $(".section-info-panel > div").hide();
		    $(".section-info-panel").css({opacity: "0"});
			
			//
			$(".jd-sports-global-nav").hide();
      	
      		// DISABLE SCROLL
      		if (isTablet)
      		{	
      			window.addEventListener("touchmove", function (e)
	        	{
           			e.preventDefault()
           		});
           
           		window.addEventListener("touchend", function (e)
           		{
           			e.preventDefault()
           		});
           		
           	
           	}
      	
		}
		
		
      	
      	      	
      	
      	
      	
      	
      	function loadNavigationData()
      	{
	      	//// console.log("loading navigation");
	      	//Process the data
	      	$.ajax(
	      	{
        		type: "GET",
        		url: settings.navigationURL,
        		dataType: 'json',
        		success: function (data, xhr, options)
        		{
					// // // // console.log("SUCCESS");
					// // // // console.log(data);
					var i = 0;
				
					//Process JSON	  
					$.each(data.features, function()
					{
            			var id = this.id;
            			var name = this.name;
            			var headingLine1 = this.heading_line_1;
            			var headingLine2 = this.heading_line_2;
            			var category = this.category;
            			var brand = this.brand;
            			var url = this.url;
            			var shopnow01 = this.shopurl01;
            			var shopnow02 = this.shopurl02;
            			
            			// LOOP THROUGH SLIDE CONTENT (CHILDNODES)
            			var t = 0;
            			var slideArr = [];
            			//this.slide.each(function()
            			
            			for (t = 0; t < this.slides.length; t++)
            			{
            				slideid = this.slides[t].id;
            				slidetype = this.slides[t].type;
            				slidesrc = this.slides[t].src;
            				
            				slideArr[t] = [slideid, slidetype, slidesrc];
            			}
            			
            			// BUILD MULTI-DIMENSIONAL NAVIGATION ARRAY
            			navigationArr[i] = [id, name, category, brand, url, shopnow01, shopnow02, slideArr, headingLine1, headingLine2]; 
            			
            			var catURL = category.replace(/\s+/g, '-').toLowerCase();
            			//sectionBackgroundImages[i] = "/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ catURL +"/"+ url +"-hero.jpg";
	                	i++;
                	});
                	
                	loadSections();
                	                						
				}, error: function (data)
        		{
        			// console.log(data);
        		}			
					
			});
      	}
      	
      	
      	function loadSections()
      	{
	      	// SET NUMBER OF FEATURES
	      	numberOfFeatures = navigationArr.length;
	      	
	      	
	      	for ( i = 0; i < numberOfFeatures; i++ )
	      	{
		      	//var sectionCatUrl = navigationArr[i][2].replace(/\s+/g, '-').toLowerCase();
		      	
		      	// BUILD SECTION
		      	$("#king-of-trainers-wrapper").append( $("<div>").attr("class", "section").attr("id",navigationArr[i][4]).css( {"height": initWindowHeight+"px"} ) ) ;
		      	
		      	var thisSection = $( "#"+navigationArr[i][4] );
		      	
		      	sectionDivs[i] = thisSection[0];
		      	
		      	// ADD ID TO SECTION
		      	$(".section-info-panel").children().eq(i).addClass( navigationArr[i][4] );
		      	
		      	// ADD WRAPPER AND HERO SLIDE
		      	thisSection.prepend( $("<div>").attr("class", "slide-wrap").append( $("<div>").attr("class", "slide hero") ) );
		      	//thisSection.prepend( $("<div>").attr("class", "slide-wrap").append( $("<div>").attr("class", "slide hero").css( { "background-image": "url('/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ sectionCatUrl +"/"+ navigationArr[i][4] +"-hero.jpg')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } )) );
		      	
		      	if(i < 10)
			    {
		      		thisSection.append( $("<div>").attr("class", "section-title").append( $("<div>").attr("class", "section-title-wrap").append( $("<div>").attr("class", "section-heading").append( $("<div>").attr("class", "section-cat").text( ""+navigationArr[i][2]+"" ) ).append( $("<div>").text( ""+navigationArr[i][8]+"" ) ).append( $("<div>").text( ""+navigationArr[i][9]+"" ) ) )  ) );
			    }
			    else
			    {
				    thisSection.append( $("<div>").attr("class", "section-title").append( $("<div>").attr("class", "section-title-wrap").append( $("<div>").attr("class", "section-heading").append( $("<div>").text( ""+navigationArr[i][8]+"" ) ).append( $("<div>").text( ""+navigationArr[i][9]+"" ) ) )  ) );
			    }
			    
			    
			     	
			    $(".section-title").width( browserSize[0] );
			    
			    // JUSTIFT TEXT WITH BIGTEXT PLUGIN
			    //thisSection.find('.section-heading').bigtext({ /*maxfontsize: 60*/ });
		      	
		      	// BUILD HOLDERS FOR GALLERY
			    for (t = 0; t < navigationArr[i][7].length; t++)
            	{
            		thisSection.find('.slide-wrap').append("<div class='slide featureshots "+t+"' />");
            	}
            	
            	// SET WIDTH OF SLIDES
            	$(".slide").width( browserSize[0] );
            	
            	// SET SLIDE WRAP OVERALL WIDTH
            	thisSection.find('.slide-wrap').width( browserSize[0] * (navigationArr[i][7].length+1) );
            	
	      	}
	      	
	      	sectionDivs.unshift( $( ".hero" ) );
	      	
	      	
		    buildSectionInfo();		      	
	      	
      	}
      	
	    
	    function buildSectionInfo(  )
	    {
		    $(".section-info-overlay").hide();
		    // HIDE INFO BOX
		    $(".section-info-panel").css({ opacity:"0" });
		    // HIDE INFO
		    $(".section-info-content").hide();
		            	
        	// REMOVE CLICK ON INFO and SHARE
        	$("ul.section-nav li.section-info").find("a").click(function(){ return false; });
        	$("ul.section-nav li.section-share").find("a").click(function(){ return false; });
        	
        	if(!isTablet)
        	{
	        	$("a#kot").click(function()
	        	{
        			resetHome();
        			return false;
	        	});
        	}
        	else
        	{
	        	$("a#kot").hammer().off("tap").on("tap", function (e)
        		{
        			resetHome();
        			return false;
        		    		
        		});
        	}
        	
        	
        	
        	// REMOVE LOADING ELEMENTS        	
        	removeLoaders();        	
	    }   
	    
	    function removeLoaders()
	    {
		    if(firstLoad)
	      	{
		      	// REMOVE LOADING ELEMENTS
		      	$(".force-footer").remove();
		      	$(".preloader").remove();	      			      	
		      	$(".section").show();
		      	
    			if(!isMobile && !isTablet)
		      	{
			      	buildSideNav();
		      	}
    			
    			// SET INITIAL LOCATION
    			setInitialLoc();
    			
    			// 
    			navigationFunctionality(); 			
	      	}
	    }
	    
	    function resetHome()
	    {
		    currentSection = 0;
		    navPaginationCount = 0;
        	isHome = true;
        	$("a.prev").remove();
        	$("a.next").remove();
        	$(".section-info-panel").css({ opacity:"0" });
        	$(".section-info-panel").hide();
        	$(".section-gradient").hide();
        	$(".section-nav").hide();
        	$(".jd-sports-global-nav").hide();
        	jumpToSection(0);
	    }
	    
      	
      	function setInitialLoc()
      	{
	      	var state = History.getState();
      		var result = /[^/]*$/.exec(state.cleanUrl)[0];
      		
      		// console.log( state );
      		// console.log( result );
	      		      	
	      	if( result != "" && result != "home" )
	      	{
	      		var locationHash = result;
	      		
	      		if(historyEnabled)
	    		{
		    		//History.pushState(null, null, locationHash);
		    	}
		    	else
		    	{
			    	//location.hash = '#'+sectionDivs[ currentSection ].id;
			    }
	      		
	      		
	      		
	      		// Hide side nav
		      	$('.king-of-trainers-navigation').css( {left:"-220px"} );
		      	//if(!isTablet){ $(".king-of-trainers-navigation").stop().transition({ x: -220 }, 0 ); }
		      	   		
	      		// FIND LOCATION HASH IN ARRAY, TO GRAB SECTION NUMBER....
	      		for (var i = 0; i < navigationArr.length; i++)
	      		{
	      			var inArr = $.inArray( locationHash, navigationArr[i] );
	      			
	      			if ( inArr == 4 )
	      			{
		      			currentSection = i;
		      			currentSection++;
	      			}
	      			
	      		}
	      		
	      		nextSection = (currentSection + 1);
	      		previousSection = (currentSection - 1);
	      		
	      		
	      		isHome = false;
	      		
	      		scrollLoc = $("#"+locationHash).offset().top;
	      		
	      		currentSectionID = sectionDivs[ currentSection ].id;
	      		
	      		preloadImages(["/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ currentSectionID +"-hero.jpg", "/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ currentSectionID +"-hero.jpg"]).done(function(images)
		    	{
            		// console.log("background image loaded");
            		//
            		$("#"+currentSectionID).find(".hero").css( { "background-image": "url('/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ currentSectionID +"-hero.jpg')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } );	
            		
            		// REMOVE LOADING ELEMENTS
            		$(".force-footer").remove();
            		$(".preloader").remove();
            		// SHOW SECTIONS
            		
            		$(".section").show();
            		
            		jumpToSection( scrollLoc );
			    });
	      		
	      		
	      	}
	      	else
	      	{
		      	
	      		
		      	// UPDATE STATE TO /home
		      	updateURL("JD Sports - King of Trainers", "home");
		      	
		      	// LOAD FIRST IMAGE
		      	currentSectionID = sectionDivs[ 1 ].id;
		      	preloadImages(["/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ currentSectionID +"-hero.jpg", "/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ currentSectionID +"-hero.jpg"]).done(function(images)
		    	{
            		// console.log("background image loaded");
            		//
            		$("#"+currentSectionID).find(".hero").css( { "background-image": "url('/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ currentSectionID +"-hero.jpg')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } );
            		
            		// REMOVE LOADING ELEMENTS
            		$(".force-footer").remove();
            		$(".preloader").remove();
            		// SHOW SECTIONS
            		
            		$(".scroll-for-more").not(".previous-feature").show();
            		
            		$(".section").show();
			    });
		      	
	      	}
      	}
      	
      	
      	function buildSideNav()
      	{
	      	$("<div>").attr("class", "king-of-trainers-navigation")
				.append( $("<div>").attr("class", "king-of-trainers-navigation-wrap")
					.append( $("<ul>").attr("class", "kot-home").append( $("<li>").append( $("<a>").attr("href", "#").attr("class", "current").text("KING OF TRAINERS").append( $("<span>").attr("class", "icon crown") ) ) ) )
					.append( $("<ul>").attr("class", "prev-5").append( $("<li>").append( $("<a>").attr("href", "#").attr("class", "current").text("VIEW PREVIOUS 5").append( $("<span>").attr("class", "icon up-arrow") ) ) ) )
					.append( $("<div>").attr("class", "nav").append( $("<ul>") ) )
					.append( $("<ul>").attr("class", "next-5").append( $("<li>").append( $("<a>").attr("href", "#").text("VIEW THE NEXT 5").append( $("<span>").attr("class", "icon down-arrow") ) ) ) ) 
				).insertAfter( "#page" );
	      	
	      	
	        // HIDE SIDE NAV WHEN IN MEGA NAV
	        jQuery("ul#primaryNavigation > li").has( "ul" ).hover(function()
	        {
	        	jQuery(".king-of-trainers-navigation").toggle();
	        });
        	
	      	
	      	
	      	var featureCount = 0;
	      	
	      	
	      	for (var i = 0; i < numberOfFeatures; i++)
			{
				featureCount++;
				var categoryClass = navigationArr[i][2].replace(/\s+/g, '-').toLowerCase();
				var linkURL = navigationArr[i][4];
				var sectionID = navigationArr[i][4];
				
				
				
				
				/*
				if ( i && (i % 5 === 0))
				{
					jQuery('.king-of-trainers-navigation ul').append(
						jQuery('<li>').attr('class', 'next-5').append( 
							jQuery('<a>').attr('href','#').attr('manual_cm_re', 'KingOfTrainers-_-ContentFeed-_-NextFive' ).text( "VIEW THE NEXT 5" ).append( 
								jQuery('<span>').attr('class','icon').text( "+5" )
							)  
						)
					)
				}*/
				
				var zeroFig = 0;
				
				if( i > 8 )
				{
					var zeroFig = "";
				}
				
				if ( i && (i % 5 === 0))
				{
					navPagination++;
				}
				
				jQuery('.king-of-trainers-navigation .nav ul').append(
					jQuery('<li>').attr("class", ""+sectionID+"_btn").append( 
						/*jQuery('<a>').attr('href','#'+sectionID).attr('manual_cm_re', 'KingOfTrainers-_-ContentFeed-_-'+ linkURL +'' ).attr('data-menu-top',initialScrollPosition).text(navigationArr[i][1]).append(*/
						jQuery('<a>').attr('href','/'+sectionID)/*.attr('id',sectionID)*/.attr('manual_cm_re', 'KingOfTrainers-_-ContentFeed-_-'+ linkURL +'' ).text(navigationArr[i][1]).append( 
							jQuery('<span>').attr('class','icon').text( zeroFig+""+ (i+1) +"" )
						)  
					)
				)
				
				/*$('.king-of-trainers-navigation ul.nav li:gt(5)').hide();
				*/
							
	      	}
	      	
	      	
	      	// CALC MAX SHIFT FOR PAGINATION (CONVERTED TO MINUS VALUE, TO SHIFT UPWARDS)
	      	maxShift = -Math.abs( 175*navPagination );
	      	// // // // console.log("maxShift = "+maxShift);
	      	
	      	
	      	$('.king-of-trainers-navigation ul.kot-home').find('a').click(function()
        	{
        		if(!isTransitioning)
        		{
	        		jQuery('.king-of-trainers-navigation').find('a').removeClass('current');
	        		jQuery(this).addClass('current');
	        		resetHome();
        		}
        		
	      		return false;
	      	});
	      	
	      	
	      	
	      	// FUNCTIONALITY
	      	$('.king-of-trainers-navigation').hover(function()
	      	{
        		if(!isHome) $(this).css( {left:'0px'} );
        	},
        	function()
        	{
        		if(!isHome) $(this).css( {left:'-220px'} );
        	});
        	
        	
        	
        	
        	$('.king-of-trainers-navigation .nav').find('a').click(function()
        	{
	        	if(!isTransitioning)
        		{
	        		if ( !$( this ).hasClass( 'current' ) )
	        		{
	        			
	        			isTransitioning = true;
	        		
	        			jQuery('.king-of-trainers-navigation').find('a').removeClass('current');
	        			jQuery(this).addClass('current');
	        	
	        			if(currentSection > 1)
	        			{
	        				removeSlideShow(sectionDivs[ (currentSection-1) ].id);
	        			}
	        				        			
	        			var thisIndex = $(this).parent().index();	        	
	        			var thisID = $(this).attr("href").replace("#", "");	        			
	        			isHome = false;
	        				        			        		
		        		currentSection = thisIndex;
		        		currentSection++;	        		
		        		previousSection = currentSection - 1;	        		
		        		var currID = sectionDivs[ (thisIndex) ].id;	        		
	        		
		        		// HIDE INFO
		        		$(".section-info-panel > div").hide();
		        		$(".section-info-panel").css({opacity: "0"});
	        		
		        		scrollLoc = browserSize[1] * currentSection;
		        		jumpToSection( scrollLoc );
	        		
	        		
	        		}
	        	}
	        		        	
	        	return false;	        
	        });
	        
	        
	        $('.king-of-trainers-navigation ul.next-5').find('a').click(function()
        	{
	      		moveNavDown();
	      		
	      		return false;	      		
	      	});
	      	
	      	$('.king-of-trainers-navigation ul.prev-5').find('a').click(function()
        	{
	      		moveNavUp();
	      		
	      		return false;	      		
	      	});
	      	
	      	
	      	// SET ORIG LOCATION
	      	$('.king-of-trainers-navigation').css( {left:'0px'} );
	      	
	      	
	      	
        	
	      	
      	}
      	
      	
      	function moveNavDown()
      	{
	      	// console.log("MOVE NAV DOWN!!!");
	      	if(navShift > maxShift)
	      	{
	      		navShift -= 175;	      		
	      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});
	      		$(".king-of-trainers-navigation ul.kot-home").hide();
	      		$(".king-of-trainers-navigation ul.prev-5").show();
	      		navPaginationCount++;		
	      	}
	      	
	      	// console.log("navPaginationCount = "+navPaginationCount);
	      	
	      	if(navPaginationCount == navPagination)
	      	{
		    	$(".king-of-trainers-navigation ul.next-5").hide();
	      	}
      	}
      	
      	function moveNavUp()
      	{
	      	$(".king-of-trainers-navigation ul.next-5").show();
	      	
	      	if(navShift == -175)
	      	{
		    	$(".king-of-trainers-navigation ul.kot-home").show();
	      		$(".king-of-trainers-navigation ul.prev-5").hide(); 
	      	}
	      		
	      	if(navShift < 0)
	      	{
		    	navShift += 175;
		    	$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});
		    }
	      	navPaginationCount--;
      	}
      	
      	
      	function navigationFunctionality()
      	{
	      	$(document).on("mousewheel", function (e, t)
	      	{
        		isScrolling = true;
        		if (Math.abs(t) >= 40) t /= 40;
        		handleScroll(e, t);
        		e.preventDefault();
        		e.stopPropagation();
        	});
        	
        	
        	$(document).keydown(function (e)
        	{
	        	switch (e.keyCode)
	        	{
		        	 case 39:
		        	 	if(!isTransitioning)
		        		{
		        		
		        		}
		        	 	//moveRight();
		        	 	return false;
		        	 	break;
		        	 case 37:
		        	 	//moveLeft();
		        	 	if(!isTransitioning)
		        		{
		        		
		        		}
		        	 	return false;
            			break;
		        	case 38:
		        		e.preventDefault();
		        		if(!isTransitioning)
		        		{
			        		moveUp();
		        		}
		        		
		        		return false;
		        		break;
		        	case 40:
		        		e.preventDefault();
		        		if(!isTransitioning)
		        		{
			        		moveDown();
		        		}
		        		
		        		return false;
		        		break;
		        }
		    });	
		    
		    $("a.next-feature").click(function()
		    {
			    moveDown();
			    return false;
		    });
		    
		    $("a.previous-feature").click(function()
		    {
			    moveUp();
			    return false;
		    });
		    
		    
		    
		    if (isTablet)
			{	
        		$("#page").hammer(
            	{
            		 drag_min_distance: 30
            	}).on("swipe dragstart", function (e)
            	{
            		//alert(browserSize[0]);
            		if(!isTransitioning)
		        	{
		        		if(browserSize[1] < 769)
		        		{
			        		if (e.gesture.direction == "down")
			        		{
				        		moveUp();               			
				        	}
				        	else if (e.gesture.direction == "up")
				        	{
					        	moveDown();             			
					        }
				     //    	else if (e.gesture.direction == "left" ||  _currentSlide != (_numSlides+1) )
				     //    	{ 
									// _slidexLeft(); 		
					    //     }
				     //    	else if (e.gesture.direction == "right" )
				     //    	{ 
									// _slidexRight(); 			
					        // }
				        	// else if (e.gesture.direction == "left")
				        	// {
					        // 	moveLeft();             			
					        // }
					    }
					}
               		e.gesture.preventDefault();
               	});


       //         	$("#page").hammer().on("swiperight", function() 
       //         	{
       //  			moveRight();
    			// });
        		
        		
               	
            }
            
		    
		}
      	
      	
      	
      	
      	
      	/*
      	*
      	*	HELPER FUNTIONS
      	*
      	*/
      	
      	function handleScroll(e, t)
        {
        	if (isScrolling)
	        {
	        	stopScroll += 1;
		     	if (stopScroll == 1)
		     	{
                	isScrolling = false;
                	clearTimeout(wheelStop);
                	scrollTop = $(window).scrollTop();
                	
                	if (t < 0 ) moveDown();
                	
                	else if (t > 0 ) moveUp();
                	
                	wheelStop = setTimeout(function ()
                	{
                    	stopScroll = 0
                    }, 1000);
                    lastScrollTop = scrollTop;
                }
           }
        }
        
        
        function moveUp()
        {
        	if(!isHome)
	    	{
        		isTransitioning = true;
        		nextSection = currentSection - 1;
        		currentScrollDirection = "up";
        		
        		jQuery("a.prev").remove();
        		jQuery("a.next").remove();
        		
        		// HIDE PREV/NEXT SECTIONS
        		$("a.scroll-for-more").hide();
        		
        		// HIDE INFO
        		$(".section-info-panel > div").hide();
        		$(".section-info-panel").css({opacity: "0"});
        		
        		// BIG TEXT THE NEXT TEXT?
		    	$("#"+sectionDivs[ nextSection ].id).find('.section-heading').bigtext({});
        		
        		
        		//$(".section-nav > li").not(".kot-home").css({opacity: "0"});
        		
        		
        		
        		if(currentSection != 1)
        		{
        			/*
	        			*
	        			*	SET LOCATION TO SCROLL TO...
	        			*
					*/
				
					//scrollLoc = $("#"+sectionDivs[ nextSection ].id).offset().top;
					if(!isFooter)
					{
						scrollLoc = browserSize[1] * nextSection;
					}
					else
					{
						scrollLoc = scrollLoc-360;
					}
				
					// console.log("scrollLoc - "+scrollLoc);
				
					animateToSection(scrollLoc);
				}
				else
				{
	        		if(!isHome)
	        		{
		        		//
		        		$(".jd-sports-global-nav").hide();
		        		$(".section-nav").hide();
		        		$(".section-gradient").hide();
		        	
		        		//$(".full-width-header").hide();
		        	
		        		// SCROLL TO TOP SECTION!
		        		isHome = true;
		        		scrollLoc = 0;
		        		if(isHome)
		        		{
			        		if( !isTablet || !isMobile ){ $('.king-of-trainers-navigation').css( {left:'0px'} ); }			        	
			        	}
			        	animateToSection(scrollLoc);
			        }
			    }
        	}
        	
	    };
	    
	    function moveDown()
	    {
	    	if(!isFooter)
	    	{
		    	isTransitioning = true;
		    	nextSection = currentSection + 1;
		    	currentScrollDirection = "down";
		    	// console.log("NEXT SECTION = "+nextSection+"is footer? "+isFooter);
		    	
		    	// REMOVE HEADER
		    	if(isHome)
		    	{
		    		if( !isTablet || !isMobile ){ $('.king-of-trainers-navigation').css( {left:'-220px'} ); }
		    	}
		    	
		    	// HIDE PREV/NEXT SECTIONS
        		$("a.scroll-for-more").hide();
		    	
		    	// REMOVE ARROWS
		    	jQuery("a.prev").remove();
		    	jQuery("a.next").remove();
		    	
		    	// HIDE INFO
		    	$(".section-info-panel > div").hide();
		    	$(".section-info-panel").css({opacity: "0"});
		    	
		    	// BIG TEXT THE NEXT TEXT?
		    	if(nextSection <= numberOfFeatures) $("#"+sectionDivs[ nextSection ].id).find('.section-heading').bigtext({});
		    	
		    	
		    	//$(".section-nav > li").not(".kot-home").css({opacity: "0"});
		    	
		    	if( currentSection < numberOfFeatures )
		    	{
		    		isFooter = false;				
		    		/*
			    		*
			    		*	SET LOCATION TO SCROLL TO...
			    		*
			    	*/
				
			    	// // console.log("viewport height = "+browserSize[1]);
				
			    	scrollLoc = browserSize[1] * nextSection;
				
			    	// // console.log("nextSection = "+nextSection+", scrollLoc = "+scrollLoc);
				}
				else
				{
		    		// // console.log("end of the line - scroll to footer?");
		    	
		    		/*
			    		*
			    		*	SET LOCATION TO SCROLL TO (CURRENT SCROLL PLUS 360)
			    		*
					*/	
				
					isFooter = true;
					
					
					
					scrollLoc = scrollLoc+360;
		    	
			    }
	    	
			    // SCROLL
			    animateToSection(scrollLoc);
	    	}
	    	
	    	
	    };
	    
	    
	    function jumpToSection(scrolllocation)
	    {
		    //setScrollTop(top[, force = false])
		    //animateToSection(scrolllocation);
		    // // console.log("JUMP! to section"+scrolllocation);
		    
		    skipAnimation = true;
		    
		    invertedShift = -Math.abs( scrolllocation );
			$("#page").transition({ y: invertedShift }, 0 );
		    
		    // // console.log("previousSection = "+previousSection)
		    
		    if(previousSection>0)
		    {
			    previousSectionID = sectionDivs[ previousSection ].id;
			    removeSlideShow(previousSectionID);
		    }
		    
		    
		    if(scrolllocation == 0)
		    {
		    	$(".jd-sports-global-nav").hide();
		    	
		    	var textScrollSwipe = "SCROLL";
		    	if (isTablet)
		    	{
      				textScrollSwipe = "SWIPE"
      			}
      			$("a.next-feature").html(textScrollSwipe+" FOR MORE<span class='scroll-icon'></span>");
      			$("a.next-feature").show();
      			$("a.previous-feature").hide();
      			if(!isTablet || !isMobile){ $(".king-of-trainers-navigation").css({ left: "0px" } ); }
      			
      			
      			
      			updateSideNav();
		    	
		    	//window.location.hash = "";
		    	if(historyEnabled)
	    		{
		    		History.pushState(null, "JD Sports - King of Trainers", "/page/king-of-trainers/home");
		    	}
		    	else
		    	{
			    	//location.hash = '#'+sectionDivs[ currentSection ].id;
			    }
		    }
		    else
		    {
			    //window.location.hash = sectionDivs[ currentSection ].id;
			    // UPDATE URL HASH
			    if(historyEnabled)
	    		{
		    		History.pushState(null, navigationArr[ ( currentSection-1 ) ][1]+" - JD Sports - King of Trainers", "/page/king-of-trainers/"+sectionDivs[ currentSection ].id);
		    	}
		    	else
		    	{
			    	//location.hash = '#'+sectionDivs[ currentSection ].id;
			    }
			    
			    // SHOW GLOBAL NAV
			    $(".jd-sports-global-nav").show();	
		    
			    // SHOW GRADIENT
			    $(".section-gradient").show();	
		    
			    // SHOW SECTION NAV
				$(".section-nav").show();
				//$(".section-nav li").not(".kot-home").hide();
			
				// HIDE ARROWS
				jQuery("a.prev").remove();
				jQuery("a.next").remove();
		    
				//sectionShiftDone(scrolllocation);
				
				// BIG TEXT THE NEXT TEXT?
		    	$("#"+sectionDivs[ currentSection ].id).find('.section-heading').bigtext({});
				
				updateSideNav();
		    
				initSection();
				
				
				// SET ORIG SHIFT
	      	
				if (firstLoad)
				{
					
		      		if(currentSection > 0 && currentSection < 5)
		      		{
			      		navShift -= 0;
			      		navPaginationCount = 0;
			      	}
			      	else if(currentSection > 5 && currentSection < 11)
			      	{	
			      		if(navShift!=-175) navShift -= 175;
			      		navPaginationCount = 1;			      				
			      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});			      		
			      		$('.king-of-trainers-navigation ul.prev-5').show();
			      		$(".king-of-trainers-navigation ul.kot-home").hide();
			      		$('.king-of-trainers-navigation ul.next-5').show();  
			      	
			      	}
			      	else if(currentSection > 10 && currentSection < 16)
			      	{
			      		if(navShift!=-350) navShift -= 350;
			      		navPaginationCount = 2;
			      		$(".king-of-trainers-navigation ul.next-5").hide();
			      		$('.king-of-trainers-navigation ul.prev-5').show();
			      		$(".king-of-trainers-navigation ul.kot-home").hide();      		
			      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});	
			      	}
			      	else if(currentSection > 15 && currentSection < 21)
			      	{
			      		if(navShift!=-525) navShift -= 525;
			      		navPaginationCount = 3;
			      		$(".king-of-trainers-navigation ul.next-5").hide();
			      		$('.king-of-trainers-navigation ul.prev-5').show();
			      		$(".king-of-trainers-navigation ul.kot-home").hide();      		
			      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});	
			      	}
			      	else if(currentSection > 20 && currentSection < 26)
			      	{
			      		if(navShift!=-700) navShift -= 700;
			      		navPaginationCount = 4;
			      		$(".king-of-trainers-navigation ul.next-5").hide();
			      		$('.king-of-trainers-navigation ul.prev-5').show();
			      		$(".king-of-trainers-navigation ul.kot-home").hide();      		
			      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});	
			      	}
			      	else if(currentSection > 25 && currentSection < 31)
			      	{
			      		if(navShift!=-875) navShift -= 875;
			      		navPaginationCount = 4;
			      		$(".king-of-trainers-navigation ul.next-5").hide();
			      		$('.king-of-trainers-navigation ul.prev-5').show();
			      		$(".king-of-trainers-navigation ul.kot-home").hide();      		
			      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});	
			      	}
			      	else if(currentSection > 30 && currentSection < 36)
			      	{
			      		if(navShift!=-1050) navShift -= 1050;
			      		navPaginationCount = 4;
			      		$(".king-of-trainers-navigation ul.next-5").hide();
			      		$('.king-of-trainers-navigation ul.prev-5').show();
			      		$(".king-of-trainers-navigation ul.kot-home").hide();      		
			      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});	
			      	}
			      	else if(currentSection > 35 && currentSection < 41)
			      	{
			      		if(navShift!=-1225) navShift -= 1225;
			      		navPaginationCount = 4;
			      		$(".king-of-trainers-navigation ul.next-5").hide();
			      		$('.king-of-trainers-navigation ul.prev-5').show();
			      		$(".king-of-trainers-navigation ul.kot-home").hide();      		
			      		$(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});	
			      	}
			      	firstLoad = false;
			    }
				
				
				//updateSideNav();
		    }
		    
		    
		    
		    
		    
		    
	    }
	    
	    function animateToSection(scrolllocation)
	    {
		   	// // console.log("scrolllocation = "+scrolllocation);
		   	// // console.log("currentSection = "+currentSection);
		   	// ADD PREV NEXT BUTTONS
		    //$("a.scroll-for-more").hide();
		    
		    if(isHome)
		    {
			    //$('.king-of-trainers-navigation').animate({left:'-220px'},{queue:false,duration:150});      	
				
		    }
		    
		    
		   	if(scrolllocation == 0){ isHome = true; }
		   	
		   	$("#page").transition(
	            {
		        	y: -Math.abs( scrolllocation )
		        }, 650, easeType, function ()
		        {
		        	sectionShiftDone(scrolllocation);		        	
		        });
		        
		   	
		    
	    }
	    
	    
	    function sectionShiftDone(scrolllocation)
	    {
		    //$("li.gift-card-home").toggle();
		    previousSection = currentSection;
			
			
			
			// IF GONE DOWN			
			if(currentScrollDirection == "down")
			{
							    		
				if( !isFooter )
				{
				  	currentSection++;
				  	
				  	if ( (currentSection-1) && ( (currentSection-1) % 5 === 0))
				  	{
					  	// console.log("move nav down");
					  	moveNavDown();
					}
				  	
				  	closeSection();
				  	
				}
				else
				{
					isTransitioning = false;
					$(".king-of-trainers-navigation").hide();
					$(".section-nav").hide();
					// console.log("you've hit the bottom");
					
				}
				//
				$(".jd-sports-global-nav").show();			
			}
			
			// IF GONE UP
			if(currentScrollDirection == "up")
			{
				
				if( !isFooter )
				{
			    	currentSection--;
			    	
			    	if ( (currentSection) && ( (currentSection) % 5 === 0))
				  	{
					  	// console.log("move nav up");
					  	moveNavUp();
					}
			    	
			    	closeSection();
			    }
			    else
			    {
				    // COMING OUT OF FOOTER
				    isFooter = false;
			    }
			}
			
			
			
			if(scrolllocation!=0)
			{
				// NOT HOME
				isHome = false;
				
				// SHOW SECTION NAV
				if( !isFooter )
				{
			    	$(".section-nav").show();
			    	$(".section-gradient").show();			    	
			    	$(".king-of-trainers-navigation").show();
			    }
			    		
			    if( !isFooter )
			    {
					initSection();
					//$(".full-width-header").hide();
					if(!isTablet)
				    {
				    	updateSideNav();
				    	
				    }
				    
				    // UPDATE URL HASH
	    			
	    			if(historyEnabled)
	    			{
		    			History.replaceState(null, null, sectionDivs[ currentSection ].id);
		    		}
		    		else
		    		{
			    		//location.hash = '#'+sectionDivs[ currentSection ].id;
			    	}
	    			
				    
				    //window.location.hash = sectionDivs[ currentSection ].id;				    		
			    }
			}
			else
			{
			  	// IF UP TO HOME
			  	$(".section-nav").hide();
			  	isHome = true;
			  	nextSection = 0;
			   	
			   	
			   	var textScrollSwipe = "SCROLL";
			   	if (isTablet)
			   	{
      				textScrollSwipe = "SWIPE"
      			}
			
      			$("a.next-feature").html(textScrollSwipe+" FOR MORE<span class='scroll-icon'></span>");
      			$("a.next-feature").show();
      			$("a.previous-feature").hide();
			   	
			   	if(!isTablet)
			   	{
			   		updateSideNav();
			   		
			   	}
			   	closeSection();
			   	
			   	window.location.hash = "";
			   	if(historyEnabled)
	    		{
		    		History.pushState(null, null, "/page/king-of-trainers/home");
		    	}
		    	else
		    	{
			    	//location.hash = '#'+sectionDivs[ currentSection ].id;
			    }
			}			
			
			
	    }
	    
	    /*
	    *
	    *	UPDATE SIDENAV
	    *
	    */
	    
	    
	    function updateSideNav()
	    {
		    // // // // console.log("UPDATING SIDENAV");
		    $('.king-of-trainers-navigation').find('a').removeClass('current');
		    if(!isHome)
		    {
			    $("li."+ sectionDivs[ currentSection ].id +"_btn").find("a").addClass('current');
			    var currButton = $('.king-of-trainers-navigation').find('a.current');
		    }
		    else
		    {
			    navShift = 0;
			    $(".king-of-trainers-navigation .nav ul").css({top:""+ navShift +"px"});
			    
			    $('.king-of-trainers-navigation ul.prev-5').hide();
			    $(".king-of-trainers-navigation ul.kot-home").show();
			    $('.king-of-trainers-navigation ul.next-5').show(); 
			     
			    $("ul.kot-home").find("a").addClass('current');
		    }
	        
	        //navShift = 175;
	        
	        
	        /*
	        .
	        
	        
	        if ( (currentSection-1) && ( (currentSection-1) % 5 === 0))
	    	{
				if(navShift > maxShift)
				{
	      			if(!firstLoad) navPaginationCount++;
	      			
	      			if(currentScrollDirection == "down")
			    	{
	      				
	      				navShift -= 175;
	      				// // // // console.log("navShift = "+navShift);	
	      				$('.king-of-trainers-navigation ul.prev-5').show();
	      				$(".king-of-trainers-navigation ul.kot-home").hide();      		
	      				$(".king-of-trainers-navigation .nav ul").stop().css({top:""+ navShift +"px"});	      				
	      			}
	      			
	      			if(navPaginationCount == navPagination)
	      			{
	      				$(".king-of-trainers-navigation ul.next-5").hide();
		      		}		
	      		}
			}
			
			
			if ( currentSection && (currentSection % 5 === 0))
	    	{
	    		if(currentScrollDirection == "up")
			    {
	      			navShift += 175;
	      			// // // // console.log("navShift = "+navShift);	
	      			
	      			 		
	      			$(".king-of-trainers-navigation .nav ul").stop().css({top:""+ navShift +"px"});
	      			
	      			if(!firstLoad) navPaginationCount--;
	      			if(navPaginationCount==0)
	      			{
		      			$('.king-of-trainers-navigation ul.prev-5').hide();
		      			$(".king-of-trainers-navigation ul.kot-home").show(); 
	      			}
	      			else
	      			{
		      			$(".king-of-trainers-navigation ul.next-5").show();
	      			}
	      		}
	      		
	      	}
	      	
	      	
	      	firstLoad = false;
	      	*/
			
	    }
	    
	    
	    
	    /*
	    *
	    *	REMOVE SECTION NOT IN VIEW (PREVIOUS SECTION)
	    *
	    */
	    
	    function closeSection()
	    {
		    /*
	    	*
	    	*	REMOVE PREVIOUS STUFF - SLIDE SHOW, TITLE
	    	*
	    	*/
	    	previousSectionID = sectionDivs[ previousSection ].id;
			removeSlideShow(previousSectionID);
			
			// HIDE TITLE
			$("#"+previousSectionID).find(".section-heading").stop().css({opacity: "1"});
			// HIDE INFO
			$("#"+previousSectionID).find(".section-info-panel").css({opacity: "0"});	
			
	    }
	    
	    
	    function initSection()
	    {
	    	currentSectionID = sectionDivs[ currentSection ].id;
	    	
	    	if(skipAnimation)
	    	{
		    	// console.log("load background image on jump");
		    	skipAnimation = false;
		    	
		    	preloadImages(["/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ currentSectionID +"-hero.jpg"]).done(function(images)
		    	{
            		// ADD BACKGROUND IMAGE
            		$("#"+currentSectionID).find(".hero").css( { "background-image": "url('"+images[0].src+"')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } );
            		preloadPrevNextImages();            	
			    });
		    	
	    	}
	    	else
	    	{
		    	preloadPrevNextImages();
	    	}
	    	
	    	
	    }
	    
	    
	    function preloadPrevNextImages()
	    {
		    var prevNextImagesArr;
	    	
	    	if(currentSection == 1)
	    	{
		    	// console.log("preload next image only");
		    	prevNextImagesArr = ["/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ navigationArr[(currentSection)][4] +"-hero.jpg"];
	    	}
	    	
	    	if(currentSection > 1)
	    	{
		    	if(currentSection == numberOfFeatures)
		    	{
		    		// console.log("preload previous image - " );
			    	prevNextImagesArr = ["/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ navigationArr[currentSection-2][4] +"-hero.jpg"];
			    }
		    	else
		    	{
			    	// console.log("preload previous + next images");
			    	prevNextImagesArr = ["/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ navigationArr[(currentSection)][4] +"-hero.jpg", "/lib/hlight/king-of-trainers/images/section-backgrounds/"+ imagePath +"/"+ navigationArr[currentSection-2][4] +"-hero.jpg"];
			    }
		    }
	    	
	    	
	    	preloadImages(prevNextImagesArr).done(function(images)
            {
            	
            	
            	// UPDATED NEXT / PREVIOUS BG IMAGES
            	//// console.log( images[0].src );
            	
            	if(currentSection == 1)
            	{
		    		$("#"+currentSectionID).next().find(".hero").css( { "background-image": "url('"+images[0].src+"')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } );
		    		
		    	}
	    	
		    	if(currentSection > 1)
		    	{
		    		if(currentSection == numberOfFeatures)
		    		{
		    			// console.log("preload previous image - " );
		    			$("#"+currentSectionID).prev().find(".hero").css( { "background-image": "url('"+images[0].src+"')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } );
		    			
		    		}
		    		else
		    		{
			    		$("#"+currentSectionID).next().find(".hero").css( { "background-image": "url('"+images[0].src+"')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } );
			    		$("#"+currentSectionID).prev().find(".hero").css( { "background-image": "url('"+images[1].src+"')", "background-repeat": "no-repeat", "background-size": "cover", "background-position": "50% 50%" } );
			    		
			    	}
			    }
			    startSection();
            });
	    }
	    
	    
	    function startSection()
	    {     
	    	$(".section-info-panel").show();
	    	$(".section-info-panel").find("."+currentSectionID).show();	    	
	    	
	    	//$(".section-nav > li").not(".kot-home").transition({ opacity: 1 }, 500 );
	    	$(".section-info-panel").transition({ opacity: 1 }, 500 );
	    	
	    	
	    	$("#"+currentSectionID).find(".section-heading").css( {opacity:1} );	    	
	    	
	    	$("#"+currentSectionID).find(".section-heading").delay(1200).transition({opacity: 0}, 500, function()
		    {
		    	// REMOVE TRANSITIONING
			    if(navigationArr[ (currentSection-1) ][7].length > 0)	    			
			    {
				   	createSlideShow();
			    }
			    if(isTablet) isTransitioning = false;
			    		    	
		    });
		    
		    if(!isTablet) isTransitioning = false;
	    	
	    	// FUNCTIONALITY
		    if(!isTablet)
		    {
				// SHARE
				$("a#share").unbind('mouseenter').bind('mouseenter', function()
				{
        			$(this).parent().hide();        			
        			$(".share-panels").show(); 				    		
        		});
        		
        		$(".share-panels").unbind('mouseleave').bind('mouseleave', function()
				{
        			$(".share-panels").hide();
        			$("li.section-share").show();     					    		
        		});	
        		
        		
        		// INFO
        		$("ul.section-nav a#info").unbind('mouseover').bind('mouseover', function()
        		{
        			//$("#"+currentSectionID).find(".section-info-panel").css({opacity: "1"});
        			//$("#"+currentSectionID).find(".section-info-content").animate({opacity:'1'},{queue:false,duration:150});
        			
        			$(".section-info-content").show();
        			$(".section-info-overlay").show();
        		    		
        		});
        	
        		$("ul.section-nav a#info").unbind('mouseout').bind('mouseout', function()
        		{
        			//$("#"+currentSectionID).find(".section-info-panel").css({opacity: "0.65"});
        			//$("#"+currentSectionID).find(".section-info-content").css({opacity: "0"});
        			$(".section-info-content").hide();
        			$(".section-info-overlay").hide();
        		});
        		
        			
				
        	}
        	else
        	{
	        	$(".section-info-panel").css({ opacity:"1" });
	        	$(".section-info-content").css({ opacity:"1" });
	        	$(".section-info-content").hide();
	        	
	        	
	        	$("a#share").parent().show();        			
        		$(".share-panels").hide();
	        	
	        	
	        	$("ul.section-nav a#info").hammer().off("tap").on("tap", function (e)
        		{
        			$(".section-info-content").toggle();    		
        			$(".section-info-overlay").toggle();
        		    		
        		});
	        	
	        	
	        	$("a#share").hammer().off("tap").on("tap", function (e)
				{
        			$(this).parent().hide();        			
        			$(".share-panels").delay(5000).show();			    		
        		});
        		
		        
        	}
	    	
	    	
			
	    	
	    	// FACEBOOK TWITTER URLs
		    var encodedTitle = navigationArr[ (currentSection-1) ][1].replace(/\s+/g, '%20');
		    $("a#facebook").attr( "href", "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=http://www.jdsports.co.uk/page/king-of-trainers/"+ currentSectionID +"&p[images][0]=http://cs-ext.jdsports.co.uk/lib/hlight/king-of-trainers/images/facebook-share.png&p[title]="+ encodedTitle +"%20%7C%20JD%20King%20of%20Trainers&p[summary]=" );
		    $("a#twitter").attr( "href", "http://twitter.com/home?status=" + encodedTitle + "%20%7C%20JD%20King%20of%20Trainers%20http://jdsports.co.uk/page/king-of-trainers/"+currentSectionID );
		    
		    
		    // SHOP NOW URLS
		    $("a#shop").attr( "href", navigationArr[ (currentSection-1) ][5] );
		    
	    	
	    	// ADD PREV NEXT BUTTONS
	    	//// // console.log("isFooter = "+isFooter);
	    	// console.log("currentSection = " + currentSection + ", numberOfFeatures = "+numberOfFeatures);
	    	if( currentSection <= numberOfFeatures )
	    	{
		    	// console.log("currentSection - "+currentSection);
		    	if(currentSection == 1)
		    	{
			    	$("a.scroll-for-more.previous-feature").html("KING OF TRAINERS<span class='scroll-icon'></span>");
		    	}
		    	else
		    	{
		    		$("a.scroll-for-more.previous-feature").html("GO BACK: "+ navigationArr[ (currentSection-2) ][1] +"<span class='scroll-icon'></span>");
		    	}		    	
		    	$("a.scroll-for-more.previous-feature").show();
		    	
		    	
		    	if( currentSection != numberOfFeatures )
		    	{
		    	  	$("a.scroll-for-more.next-feature").html("UP NEXT: "+ navigationArr[ (currentSection) ][1] +"<span class='scroll-icon'></span>");
		    	  	$("a.scroll-for-more.next-feature").show();
		    	}
		    	else
		    	{
			    	$("a.scroll-for-more.next-feature").hide();
		    	}
	    	}
	    	else
	    	{
		    	// console.log("hide! - "+currentSection);
		    	$("a.scroll-for-more").hide();
	    	}
	    	
	    	
	    	
	    	
	    	
	    	
		}
	    
      	
      	function removeSlideShow(previd)
      	{
	      	kotSlideShow.destroy();	      	
      	}
      	
      	// INITIALIS SWIPEJS
	    function createSlideShow()
	    {
		   
		   	kotSlideShow.refreshSlide(
		    {
		    	section: 			sectionDivs[ currentSection ],
		    	slidescontent:		navigationArr[ (currentSection-1) ][7],
		    	numslides:			navigationArr[ (currentSection-1) ][7].length
		    });
		    
	    }
	    
	    
	    function updateURL(title, url)
	    {
	    	if(historyEnabled)
	    	{
	    		History.replaceState(null, title, url);
	    	}
	    	else
	    	{
	    		//location.hash = '#'+sectionDivs[ currentSection ].id;
	    	}
	    }
	    
	    
	    function preloadImages(arr)
		{
			var newimages=[], loadedimages=0
			var postaction=function(){}
			var arr=(typeof arr!="object")? [arr] : arr
			function imageloadpost()
			{
				loadedimages++
				if (loadedimages==arr.length)
				{
					postaction(newimages) //call postaction and pass in newimages array as parameter
				}
			}
			for (var i=0; i<arr.length; i++)
			{
				newimages[i]=new Image()
				newimages[i].src=arr[i]
				newimages[i].onload=function()
				{
					imageloadpost()
				}
				newimages[i].onerror=function()
				{
					// console.log("cannot load" + newimages[i] );
					//imageloadpost()
				}
			}
			return{ //return blank object with done() method
				done:function(f)
				{
					postaction=f || postaction //remember user defined callback functions to be called when images load
				}
			}
		}
	    	      	
      	
      	function isMobile()
      	{
	      	if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
    		{
	    		return true;	    		
	    	}
	    	else
	    	{
		   		return false;
		   	}
      	}
      	
      	
      	function isTablet()
      	{
    		if( /iPad/i.test(navigator.userAgent) )
    		{
	    		return true;	    		
	    	}
	    	else
	    	{
		   		return false;
		   	}
		}
		
		
		
		/*
		*
		*	END HELPER FUNCTIONS
		*
		*/
      	
    }
    
    
    
})(jQuery);
     