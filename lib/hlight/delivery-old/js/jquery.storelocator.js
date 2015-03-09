/*
* storeLocator v1.4.4 - jQuery Google Maps Store Locator Plugin
* (c) Copyright 2013, Bjorn Holine (http://www.bjornblog.com)
* Released under the MIT license
* Distance calculation function by Chris Pietschmann: http://pietschsoft.com/post/2008/02/01/Calculate-Distance-Between-Geocodes-in-C-and-JavaScript.aspx
*/
$.noConflict();
(function($){
$.fn.storeLocator = function(options) {
	
	/*
	*
	*	CUSTOM MAP STYLES (JSON)
	*
	*/
	
	var JDDeliveryCustomMapStyles = [
	{
    	"stylers": [
    	{
    		"visibility": "off"
    	}]
    },
    {
    	"featureType": "water",
    	"stylers": [
	    {
	    	"visibility": "off"
	    },
	    {
	    	"color": "#ffffff"
	    }]
	},
	{
    	"featureType": "landscape.natural.terrain",
    	"stylers": [
    	{
    		"visibility": "off"
    	},
    	{
    		"color": "#000000"
    	}]
    },
    {
    	"featureType": "landscape.natural",
    	"stylers": [
    	{
    		"visibility": "off"
    	},
    	{
    		"color": "#8aaea2"
    	}]
    }]

    var settings = $.extend(
    {
      'mapDiv': 'map',
      'listDiv': 'loc-list',
      'formContainerDiv': 'form-container',
      'formID': 'user-location',
      'inputID': 'address',
      'zoomLevel': 12,
      'pinColor': 'fe7569',
      'pinTextColor': '000000',
      'lengthUnit': 'm',
      'storeLimit': 26,
      'distanceAlert': 600,
      'dataType': 'xml',
      'dataLocation': '/lib/hlight/delivery/locations.xml',
      'listColor1': 'ffffff',
      'listColor2': 'eeeeee',
      'originMarker': false,
      'originpinColor': 'blue',
      'bounceMarker': true,
      'slideMap': true,
      'modalWindow': false,
      'overlayDiv': 'overlay',
      'modalWindowDiv': 'modal-window',
      'modalContentDiv': 'modal-content',
      'modalCloseIconDiv': 'close-icon',
      'defaultLoc': false,
      'defaultLat': '51.510451886',
      'defaultLng': '-0.126342773',
      'autoGeocode': false,
      'maxDistance': false,
      'maxDistanceID': 'maxdistance',
      'fullMapStart': false,
      'noForm': false,
      'loading': false,
      'loadingDiv': 'loading-map',
      'infowindowTemplatePath': 'templates/infowindow-description.html',
      'listTemplatePath': '/lib/hlight/store-locator-test/templates/location-list-description.html',
      'KMLinfowindowTemplatePath': '/lib/hlight/store-locator-test/templates/kml-infowindow-description.html',
      'KMLlistTemplatePath': '/lib/hlight/store-locator-test/templates/kml-location-list-description.html',
      'callbackBeforeSend': null,
      'callbackComplete': null,
      'callbackSuccess': null,
      'callbackModalOpen': null,
      'callbackModalClose': null,
      'jsonpCallback': null,
      //Language options
      'geocodeErrorAlert': 'Geocode was not successful for the following reason: ',
      'blankInputAlert': 'The input box was blank.',
      'addressErrorAlert' : 'Unable to find address',
      'autoGeocodeErrorAlert': 'Automatic location detection failed. Please fill in your address or zip code.',
      'distanceErrorAlert': 'Unfortunately, our closest location is more than ',
      'mileLang': 'mile',
      'milesLang': 'miles',
      'kilometerLang': 'kilometer',
      'kilometersLang': 'kilometers'
    }, options);

    return this.each(function()
    {

	    var $this = $(this);
	    var listTemplate, infowindowTemplate;
  
  
	    locator();
	    
	      
	    // SHOW THE DEFAULT MAP OF THE UK
	    var myOptions =
	    {
		    zoom: settings.zoomLevel,
		    center: new google.maps.LatLng(55.366625, -11.666602),
		    mapTypeId: google.maps.MapTypeId.ROADMAP,
		    disableDefaultUI: true,
		    disableDoubleClickZoom: true,
		    draggable: false,
		    scrollwheel: false,
		    panControl: false
		};
	
		// Create Styled Map
		var styledMap = new google.maps.StyledMapType(JDDeliveryCustomMapStyles,{name: "Styled Map"}); 	
		var map = new google.maps.Map(document.getElementById(settings.mapDiv),myOptions);	
		// Apply style to map...
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
  
  
		
		
		
		//The main script
		function locator()
		{

  var userinput, olat, olng, marker, letter, storenum;
  var locationset = [];
  var markers = [];
  var prefix = 'storeLocator';

  //Resets for multiple re-submissions
  function reset(){
    locationset = [];
    markers = [];
    $(document).off('click.'+prefix, '#' + settings.listDiv + ' li');
  }
  
  //Add modal window divs if set
  if(settings.modalWindow === true)
  {
    $this.wrap('<div id="' + settings.overlayDiv + '"><div id="' + settings.modalWindowDiv + '"><div id="' + settings.modalContentDiv + '">');
    $('#' + settings.modalWindowDiv).prepend('<div id="' + settings.modalCloseIconDiv + '"><\/div>');
    $('#' + settings.overlayDiv).hide();
  }

  if(settings.slideMap === true)
  {
    //Let's hide the map container to begin
    $this.hide();
  }

  //Calculate geocode distance functions - you could use Google's distance service instead
  var GeoCodeCalc = {};
  if(settings.lengthUnit === "km"){
    //Kilometers
    GeoCodeCalc.EarthRadius = 6367.0;
  }
  else{
      //Default is miles
      GeoCodeCalc.EarthRadius = 3956.0;
  }
  GeoCodeCalc.ToRadian = function(v) { return v * (Math.PI / 180);};
  GeoCodeCalc.DiffRadian = function(v1, v2) {
  return GeoCodeCalc.ToRadian(v2) - GeoCodeCalc.ToRadian(v1);
  };
  GeoCodeCalc.CalcDistance = function(lat1, lng1, lat2, lng2, radius) {
  return radius * 2 * Math.asin( Math.min(1, Math.sqrt( ( Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lat1, lat2)) / 2.0), 2.0) + Math.cos(GeoCodeCalc.ToRadian(lat1)) * Math.cos(GeoCodeCalc.ToRadian(lat2)) * Math.pow(Math.sin((GeoCodeCalc.DiffRadian(lng1, lng2)) / 2.0), 2.0) ) ) ) );
  };

  //Geocode function for the origin location
  function GoogleGeocode() 
  {
    console.log("GoogleGeocode");
    geocoder = new google.maps.Geocoder();
    this.geocode = function(address, callbackFunction) {
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var result = {};            
            result.latitude = results[0].geometry.location.lat();
            result.longitude = results[0].geometry.location.lng();
            callbackFunction(result);
          } else {
            alert(settings.geocodeErrorAlert + status);
            callbackFunction(null);
          }
        });
    };
  }

  //Reverse geocode to get address for automatic options needed for directions link
  function ReverseGoogleGeocode() 
  {    
	geocoder = new google.maps.Geocoder();
    this.geocode = function(latlng, callbackFunction) {		
        geocoder.geocode( {'latLng': latlng}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0]) {
                var result = {};
                //result.address = results[0].formatted_address;				
                callbackFunction(result);
            }
          } else {
            alert(settings.geocodeErrorAlert + status);
            callbackFunction(null);
          }
        });
    };
  }

  //Used to round miles to display
  function roundNumber(num, dec) 
  {
    return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
  }

  //If a default location is set
  if(settings.defaultLoc === true)
  {
      console.log("begin mapping 1");
	  //The address needs to be determined for the directions link
      var r = new ReverseGoogleGeocode();
      var latlng = new google.maps.LatLng(settings.defaultLat, settings.defaultLng);
	  console.log("begin mapping latlng "+latlng);
      r.geocode(latlng, function(data){
        
		if(data !== null) {			
          var originAddress = data.address;
		  //console.log("data.address "+originAddress);
		  //console.log("showDefaultMap");
		  //showDefaultMap(settings.defaultLat, settings.defaultLng, originAddress);
          /*mapping(settings.defaultLat, settings.defaultLng, originAddress);*/
        } else {
          //Unable to geocode
          //alert(settings.addressErrorAlert);
        }
      });
  }

  //If show full map option is true
  if(settings.fullMapStart === true)
  {
      //Just do the mapping without an origin
      mapping();
  }
  
  
  //Handle form submission
  function get_form_values(e)
  {
      //Stop the form submission
        e.preventDefault();

        if(settings.maxDistance === true){
          var maxDistance = $('#' + settings.maxDistanceID).val();
          //Start the mapping
          begin_mapping(maxDistance);
        }
        else{
          //Start the mapping
          begin_mapping();
        }
  }
  

  //Set up the normal mapping
  function begin_mapping(distance)
  {
	  //Get the user input and use it
	  var userinput = $('#' + settings.inputID).val();
	  
	  var g = new GoogleGeocode();
      var address = userinput;
	  g.geocode(address, function(data)
	  {
		  if(data !== null)
		  {
			  olat = data.latitude;
			  olng = data.longitude;
			  //showMarkerAtLoc(olat, olng, userinput, distance);
			  loadXMLData(olat, olng, userinput, distance);
		  }
		  else
		  {
			  //Unable to geocode
			  alert(settings.addressErrorAlert);
		  }
	  });
  }
  
  
  /*
  *
  *	AUTO GEO POSITION USONG geoPosition.js PLUGIN
  *
  */
  
  	if (geoPosition.init())
  	{
  		geoPosition.getCurrentPosition(geoSuccess, geoError);
  		//console.log("aaaa");
  	}
  
  	// IF GEO POSITION HAS SUCCESSFULLY GRABBED THE LAT + LONG POSITION
  	function geoSuccess(p)
  	{
		console.log("Found you at latitude " + p.coords.latitude + ", longitude " + p.coords.longitude);
		var latitude = parseFloat( p.coords.latitude );
		var longitude = parseFloat( p.coords.longitude );
		
		loadXMLData(latitude, longitude);
			
	}
	
	function geoError()
	{
		console.log("Could not find you!");
	}

  //Process form input
  /*$(function() {*/
	  
    

    //ASP.net or regular submission?
    $(document).on('submit.'+prefix, '#' + settings.formID, function(e){
        //console.log("FORM SUBMITTTED!");		
		get_form_values(e);
    });
  /*});*/
	
	
	function showDefaultMap(orig_lat, orig_lng)
	{
		console.log("show default map at.... "+orig_lat+", "+orig_lng);
		console.log("loading XMsdfsdfdL");
		var dataTypeRead;
        dataTypeRead = settings.dataType;
		
		//Process the data
        $.ajax(
		{
        	type: "GET",
        	url: settings.dataLocation + (settings.dataType === 'jsonp' ? (settings.dataLocation.match(/\?/) ? '&' : '?') + 'callback=?' : ''),
        	dataType: dataTypeRead,
        	jsonpCallback: (settings.dataType === 'jsonp' ? settings.jsonpCallback : null),
        	beforeSend: function ()
        	{
          		// Callback
          		if(settings.callbackBeforeSend)
				{
            		settings.callbackBeforeSend.call(this);
          		}
			},
			complete: function (event, request, options)
       		{
            // Callback
            	if(settings.callbackComplete)
				{
              		settings.callbackComplete.call(this, event, request, options);
            	}
        	},
			success: function (data, xhr, options)
        	{
				//After the store locations file has been read successfully
            	var i = 0;
            	var firstRun;
				$('#' + settings.mapDiv).addClass('mapOpen');
				
				console.log("loaded XML");
				
            	//Process XML			  
            	$(data).find('marker').each(function()
				{
            		var name = $(this).attr('name');
                	var lat = $(this).attr('lat');
                	var lng = $(this).attr('lng');
                	var address = $(this).attr('address');
                	//var address2 = $(this).attr('address2');
                	var city = $(this).attr('city');
                	//var state = $(this).attr('state');
                	var postal = $(this).attr('postal');
                	var phone = $(this).attr('phone');
                	/*var web = $(this).attr('web');
                		web = web.replace("http://","");*/
                	/*var hours1 = $(this).attr('hours1');
                	var hours2 = $(this).attr('hours2');
                	var hours3 = $(this).attr('hours3');
                	var category = $(this).attr('category');*/
                	//console.log(name);
                	var distance = GeoCodeCalc.CalcDistance(orig_lat,orig_lng,lat,lng, GeoCodeCalc.EarthRadius);
                	locationset[i] = [distance, name, lat, lng, address, /*address2,*/ city, /*state,*/ postal, phone/*, web,*/ /*hours1, hours2, hours3, category*/];
                	i++;
              	});
              	
              	/*locationset.sort(function(a, b)
              	{
	              	var x = a[0];
	              	var y = b[0];
	              	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	            });*/
				console.log(locationset);				
				
            }
		});
		
	}
	
	
	function loadXMLData(orig_lat, orig_lng, userinput, distance)
	{
		console.log("loadXMLData!!!");
		console.log("show default map at.... "+orig_lat+", "+orig_lng);
		console.log("loading XML");
		var dataTypeRead;
        dataTypeRead = settings.dataType;
		
		//Process the data
        $.ajax(
		{
        	type: "GET",
        	url: settings.dataLocation + (settings.dataType === 'jsonp' ? (settings.dataLocation.match(/\?/) ? '&' : '?') + 'callback=?' : ''),
        	dataType: dataTypeRead,
        	jsonpCallback: (settings.dataType === 'jsonp' ? settings.jsonpCallback : null),
        	beforeSend: function ()
        	{
          		// Callback
          		if(settings.callbackBeforeSend)
				{
            		settings.callbackBeforeSend.call(this);
          		}
			},
			complete: function (event, request, options)
       		{
            // Callback
            	if(settings.callbackComplete)
				{
              		settings.callbackComplete.call(this, event, request, options);
            	}
        	},
			success: function (data, xhr, options)
        	{
				//After the store locations file has been read successfully
            	var i = 0;
            	var firstRun;
				$('#' + settings.mapDiv).addClass('mapOpen');
				
				console.log("loaded XML");
				
            	//Process XML			  
            	$(data).find('marker').each(function()
				{
            		
            		var id = $(this).attr('id');
            		var facia = $(this).attr('facia');
            		var name = $(this).attr('name');
            		var address = $(this).attr('address');
            		var city = $(this).attr('city');
                	var lat = $(this).attr('lat');
                	var lng = $(this).attr('lng');
                	
                	//var address2 = $(this).attr('address2');
                	
                	//var state = $(this).attr('state');
                	var postal = $(this).attr('postal');
                	var phone = $(this).attr('telephone');
                	/*var web = $(this).attr('web');
                		web = web.replace("http://","");*/
                	/*var hours1 = $(this).attr('hours1');
                	var hours2 = $(this).attr('hours2');
                	var hours3 = $(this).attr('hours3');
                	var category = $(this).attr('category');*/
                	
                	var web = "http://www.jdsports.co.uk/store/"+name.replace(/\s+/g, '-')+"/"+id+"/";
                	
                	var distance = GeoCodeCalc.CalcDistance(orig_lat,orig_lng,lat,lng, GeoCodeCalc.EarthRadius);
                	//console.log("distance = "+distance);
                	locationset[i] = [distance, id, facia, name, address, city, postal, phone, lat, lng, web ];
                	i++;
              	});
              	
              	//console.log(locationset);
              	
              	locationset.sort(function(a, b)
              	{
	              	var x = a[0];
	              	var y = b[0];
	              	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	            });
	            
				console.log(locationset);
				showMarkerAtLoc(orig_lat, orig_lng, userinput, distance);				
				
            }
		});
		
	}
	
	
	
	
	function showMarkerAtLoc(orig_lat, orig_lng, origin, maxDistance)
	{
		console.log("show Marker at Location");
		
		clearOverlays();
		
		var point = new google.maps.LatLng(orig_lat, orig_lng); 
			//marker = createMarker(point);
			line = createLine(point);
			circle = createCircle(point);
			endcircle = createEndCircle(point);
			rectangle = createSquare(point);
		
		//Custom marker function - alphabetical
        /*function createMarker(point)
		{
			var pinImage = new google.maps.MarkerImage("/lib/hlight/store-locator-test/images/pin.png", new google.maps.Size(30, 30), new google.maps.Point(0,0), new google.maps.Point(15, 15));
            
			var marker = new google.maps.Marker(
			{
				position: point,
				map: map,
				icon: pinImage,
				draggable: false,
				zIndex: 1
			});
			markers[0] = marker;
			return marker;
		}*/
		
		function createLine(point)
		{
			var line = new google.maps.Polyline(
			{
				path: [new google.maps.LatLng(point.jb, point.kb), new google.maps.LatLng(55.340730, -12.721289)],
				strokeColor: "#333333",
				strokeOpacity: 0.4,
				strokeWeight: 6,
				zIndex: 500,
				map: map
			});
			markers[0] = line;
			return line;
		}
		
		function createCircle(point)
		{
			var circle = new google.maps.Circle(
			{
				center: new google.maps.LatLng(point.jb, point.kb),
				radius: 4500,
				strokeColor: "#FFFFFF",
				strokeOpacity: 0.6,
				strokeWeight: 32,
				zIndex: 2,
				map: map
			});
			markers[1] = circle;
			return circle;
		}
		
		function createEndCircle(point)
		{
			var endcircle = new google.maps.Circle(
			{
				center: new google.maps.LatLng(55.340730, -12.721289),
				radius: 4500,
				strokeColor: "#FFFFFF",
				strokeOpacity: 0.6,
				strokeWeight: 32,
				zIndex: 2,
				map: map
			});
			markers[2] = endcircle;
			return endcircle;
		}
		
		function createSquare(point)
		{
			var rectangle = new google.maps.Rectangle(
			{
				map: map,
				fillColor: "#b2c1cd",
				fillOpacity: 1,
				strokeColor: "#b2c1cd",
				strokeOpacity: 0,
				strokeWeight: 0,
				bounds: new google.maps.LatLngBounds( new google.maps.LatLng(50.040730, -13.821289), new google.maps.LatLng(56.040730, -11.421289))
			});
			markers[3] = rectangle;
			return rectangle;


		}
		
		showLocalStores();
	}
	
	function showLocalStores()
	{
		console.log("Show Local Stores");
		
		jQuery("#store-detail-panel ul").empty();
		jQuery("#store-detail-panel").show();
		
		jQuery.each(locationset, function(i, val)
		{
			console.log(locationset[i]);
			var distanceFromStore = parseFloat( locationset[i][0].toFixed(2) );
			console.log( parseFloat(distanceFromStore.toFixed(2)) );
			
			jQuery("#store-detail-panel ul").append("<li><span class='distance-info'>"+distanceFromStore+" miles from this location</span><span class='store-info'><br/>"+locationset[i][3]+" - <a class='show-store-info' href='"+locationset[i][10]+"' target='_blank'>Store Info</a></span></li>");
			
			
			return (i != 3); // stop after 4th store
       });
		
		
		jQuery(".show-store-info").click(function()
		{
			//alert("asdfsdf");
			jQuery(".modal-overlay").show();
			var storeLoad = jQuery(this).attr("href");
			console.log("storeLoad = "+storeLoad);
			jQuery(".store-details").load( ""+storeLoad+" .storeFinderContainer", function()
			{
				
			});
			
			jQuery(".modal-close").click(function()
			{
				jQuery(".modal-overlay").hide();
				return false;
			})
			
			return false;
		});
		
		// SORT ARRAY BY DISTANCE?
		/*locationset.sort(function(a, b)
		{
			var x = a[0];
			var y = b[0];
			return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});*/
		
		//console.log(locationset);
	}
	
	
	
	
	function clearOverlays()
	{
  		for (var i = 0; i < markers.length; i++ )
		{
    		markers[i].setMap(null);
  		}
  		markers = [];
	}
	
	
  //Now all the mapping stuff
  function mapping(orig_lat, orig_lng, origin, maxDistance){
  /*$(function(){*/
		console.log("begin mapping....NOW");
        var dataTypeRead;

        dataTypeRead = settings.dataType;

        //Process the data
        $.ajax({
        type: "GET",
        url: settings.dataLocation + (settings.dataType === 'jsonp' ? (settings.dataLocation.match(/\?/) ? '&' : '?') + 'callback=?' : ''),
        dataType: dataTypeRead,
        jsonpCallback: (settings.dataType === 'jsonp' ? settings.jsonpCallback : null),
        beforeSend: function ()
        {
          
		  // Callback
          if(settings.callbackBeforeSend){
            settings.callbackBeforeSend.call(this);
          }

          //Loading
          if(settings.loading === true){
            $('#' + settings.formContainerDiv).append('<div id="' + settings.loadingDiv +'"><\/div>');
          }

        },
        complete: function (event, request, options)
        {
            // Callback
            if(settings.callbackComplete){
              settings.callbackComplete.call(this, event, request, options);
            }
			
            
			
			
            
			
			
        },
        success: function (data, xhr, options)
        {
            // Callback
            if(settings.callbackSuccess){
              settings.callbackSuccess.call(this, data, xhr, options);
            }

            //After the store locations file has been read successfully
            var i = 0;
            var firstRun;

            //Set a variable for fullMapStart so we can detect the first run
            if(settings.fullMapStart === true && $('#' + settings.mapDiv).hasClass('mapOpen') === false){
                firstRun = true;
            }
            else{
              reset();
            }

            $('#' + settings.mapDiv).addClass('mapOpen');

            //Depending on your data structure and what you want to include in the maps, you may need to change the following variables or comment them out
            if(settings.dataType === 'json' || settings.dataType === 'jsonp')
            {
              //Process JSON
              $.each(data, function() {
                var name = this.locname;
                var lat = this.lat;
                var lng = this.lng;
                var address = this.address;
                var address2 = this.address2;
                var city = this.city;
                var state = this.state;
                var postal = this.postal;
                var phone = this.phone;
                var web = this.web;
                web = web.replace("http://","");
                var hours1 = this.hours1;
                var hours2 = this.hours2;
                var hours3 = this.hours3;
                var category = this.category;

                var distance = GeoCodeCalc.CalcDistance(orig_lat,orig_lng,lat,lng, GeoCodeCalc.EarthRadius);
                
                //Create the array
                if(settings.maxDistance === true && firstRun !== true){
                  if(distance < maxDistance){
                    locationset[i] = [distance, name, lat, lng, address, address2, city, state, postal, phone, web, hours1, hours2, hours3, category];
                  }
                  else{
                    return;
                  }
                }
                else{
                  locationset[i] = [distance, name, lat, lng, address, address2, city, state, postal, phone, web, hours1, hours2, hours3, category];
                }

                i++;
              });
            }
            else if(settings.dataType === 'kml')
            {
              //Process KML
              $(data).find('Placemark').each(function(){
                var name = $(this).find('name').text();
                var lat = $(this).find('coordinates').text().split(",")[1];
                var lng = $(this).find('coordinates').text().split(",")[0];
                var description = $(this).find('description').text();

                var distance = GeoCodeCalc.CalcDistance(orig_lat,orig_lng,lat,lng, GeoCodeCalc.EarthRadius);

                //Create the array
                if(settings.maxDistance === true && firstRun !== true){
                  if(distance < maxDistance){
                    locationset[i] = [distance, name, lat, lng, description];
                  }
                  else{
                    return;
                  }
                }
                else{
                  locationset[i] = [distance, name, lat, lng, description];
                }

                i++;
              });
            }
            else
            {
              //Process XML
			  
              $(data).find('marker').each(function(){
                var name = $(this).attr('name');
                var lat = $(this).attr('lat');
                var lng = $(this).attr('lng');
                var address = $(this).attr('address');
                var address2 = $(this).attr('address2');
                var city = $(this).attr('city');
                var state = $(this).attr('state');
                var postal = $(this).attr('postal');
                var phone = $(this).attr('phone');
                var web = $(this).attr('web');
                web = web.replace("http://","");
                var hours1 = $(this).attr('hours1');
                var hours2 = $(this).attr('hours2');
                var hours3 = $(this).attr('hours3');
                var category = $(this).attr('category');

                var distance = GeoCodeCalc.CalcDistance(orig_lat,orig_lng,lat,lng, GeoCodeCalc.EarthRadius);
                
                //Create the array
                if(settings.maxDistance === true && firstRun !== true){ 
                  if(distance < maxDistance){
                    locationset[i] = [distance, name, lat, lng, address, address2, city, state, postal, phone, web, hours1, hours2, hours3, category];
                  }
                  else{
                    return;
                  }
                }
                else{
                  locationset[i] = [distance, name, lat, lng, address, address2, city, state, postal, phone, web, hours1, hours2, hours3, category];
                }

                i++;
              });
            }

          //Sort the multi-dimensional array numerically by distance
          locationset.sort(function(a, b) {
            var x = a[0];
            var y = b[0];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
          });

          //Get the length unit
          var distUnit = (settings.lengthUnit === "km") ? settings.kilometersLang : settings.milesLang ;

          //Check the closest marker
          if(settings.maxDistance === true && firstRun !== true){
            if(locationset[0] === undefined  || locationset[0][0] > maxDistance){
              alert(settings.distanceErrorAlert + maxDistance + " " + distUnit);
              return;
            }
          }
          else{
            if(locationset[0][0] > settings.distanceAlert){
              alert(settings.distanceErrorAlert + settings.distanceAlert + " " + distUnit);
            }
          }
		  
		  console.log("CREATE THE MAP...");
          
          //Create the map with jQuery
          /*$(function(){ */
				console.log("CREATE THE MAP...NOW!");
              var storeDistance, storeName, storeAddress1, storeAddress2, storeCity, storeState, storeZip, storePhone, storeWeb, storeHours1, storeHours2, storeHours3, storeDescription, storeCat;

              //Instead of repeating the same thing twice below
              function create_location_variables(loopcount)
              {
                storeDistance = locationset[loopcount][0];
                storeDistance = roundNumber(storeDistance,2);
                storeName = locationset[loopcount][1];
                storeAddress1 = locationset[loopcount][4];
                storeAddress2 = locationset[loopcount][5];
                storeCity = locationset[loopcount][6];
                storeState = locationset[loopcount][7];
                storeZip = locationset[loopcount][8];
                storePhone = locationset[loopcount][9];
                storeWeb = locationset[loopcount][10];
                storeHours1 = locationset[loopcount][11];
                storeHours2 = locationset[loopcount][12];
                storeHours3 = locationset[loopcount][13];
                storeCat = locationset[loopcount][14];
              }

              //There are less variables for KML files
              function create_kml_location_variables(loopcount)
              {
                storeDistance = locationset[loopcount][0];
                storeDistance = roundNumber(storeDistance,2);
                storeName = locationset[loopcount][1];
                storeDescription = locationset[loopcount][4];
              }

              //Define the location data for the templates
              function define_location_data(currentMarker)
              {
                console.log("DEFINE LOC DATA...NOW!");
				if(settings.dataType === 'kml'){
                  create_kml_location_variables(currentMarker.get("id"));
                }
                else{
                  create_location_variables(currentMarker.get("id"));
                }

                var distLength;
                if(storeDistance <= 1){ 
                  if(settings.lengthUnit === "km"){
                    distLength = settings.kilometerLang;
                  }
                  else{
                    distLength = settings.mileLang; 
                  }
                }
                else{ 
                  if(settings.lengthUnit === "km"){
                    distLength = settings.kilometersLang;
                  }
                  else{
                    distLength = settings.milesLang; 
                  }
                }

                //Set up alpha character
                var markerId = currentMarker.get("id");
                //Use dot markers instead of alpha if there are more than 26 locations
                if(settings.storeLimit > 26){
                  var indicator = markerId + 1;
                }
                else{
                  var indicator = String.fromCharCode("A".charCodeAt(0) + markerId);
                }
                
                //Define location data
                if(settings.dataType === 'kml'){
                  var locations = {
                    location: [
                      {
                        "distance": storeDistance, 
                        "markerid": markerId,
                        "marker": indicator, 
                        "name": storeName, 
                        "description": storeDescription,
                        "length": distLength,
                        "origin": origin
                      } 
                    ]
                  };
                }
                else{
                  var locations = {
                    location: [
                      {
                        "distance": storeDistance, 
                        "markerid": markerId,
                        "marker": indicator, 
                        "name": storeName, 
                        "address": storeAddress1, 
                        "address2": storeAddress2, 
                        "city": storeCity, 
                        "state": storeState, 
                        "postal": storeZip, 
                        "phone": storePhone, 
                        "web": storeWeb, 
                        "hours1": storeHours1, 
                        "hours2": storeHours2, 
                        "hours3": storeHours3, 
                        "length": distLength,
                        "origin": origin,
                        "category": storeCat
                      } 
                    ]
                  };
                }

                return locations;
              }

              //Slide in the map container
              if(settings.slideMap === true)
              {
                $this.slideDown();
              }
              //Set up the modal window
              if(settings.modalWindow === true)
              {
                // Callback
                if (settings.callbackModalOpen){
                  settings.callbackModalOpen.call(this);
                }

                function modalClose(){
                  // Callback
                  if (settings.callbackModalOpen){
                    settings.callbackModalOpen.call(this);
                  }

                  $('#' + settings.overlayDiv).hide();
                }

                //Pop up the modal window
                $('#' + settings.overlayDiv).fadeIn();
                //Close modal when close icon is clicked and when background overlay is clicked
                $(document).on('click.'+prefix, '#' + settings.modalCloseIconDiv + ', #' + settings.overlayDiv, function(){
                    modalClose();
                });
                //Prevent clicks within the modal window from closing the entire thing
                $(document).on('click.'+prefix, '#' + settings.modalWindowDiv, function(e){
                    e.stopPropagation();
                });
                //Close modal when escape key is pressed
                $(document).on('keyup.'+prefix, function(e){
                  if (e.keyCode === 27) { 
                    modalClose();
                  }
                });
              }

              //Google maps settings
              if((settings.fullMapStart === true && firstRun === true) || settings.zoomLevel === 0){
                var myOptions = {
                  mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var bounds = new google.maps.LatLngBounds ();
              }
              else{
                var myOptions = {
                  zoom: settings.zoomLevel,
                  center: new google.maps.LatLng(55.366625, -10.766602),
				  /*center: new google.maps.LatLng(orig_lat, orig_lng),		*/		  
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
				  disableDefaultUI: true,
				  disableDoubleClickZoom: true,
    			  draggable: false,
    			  scrollwheel: false,
    			  panControl: false
				  
				  
                };
              }
			  
			  // Create Styled Map
			  var styledMap = new google.maps.StyledMapType(JDDeliveryCustomMapStyles,{name: "Styled Map"}); 
			               
              var map = new google.maps.Map(document.getElementById(settings.mapDiv),myOptions);
			  
			  // Apply style to map...
			  map.mapTypes.set('map_style', styledMap);
  			  map.setMapTypeId('map_style');
              //Create one infowindow to fill later
              var infowindow = new google.maps.InfoWindow();

              //Avoid error if number of locations is less than the default of 26
              if((locationset.length-1) < settings.storeLimit-1){
                storenum = locationset.length-1;
              }
              else{
                storenum = settings.storeLimit-1;
              }

              
              //Add markers and infowindows loop
			  /*function plotMarkers()
			  {*/
				  
			  
              console.log("PUT PINS ON MAP "+orig_lat+" "+orig_lng);
			  console.log("FIRST RUN? "+firstRun);
			  /*for(var y = 0; y <= storenum; y++) 
              { 
                var letter = String.fromCharCode("A".charCodeAt(0) + y);
                var point = new google.maps.LatLng(locationset[y][2], locationset[y][3]);             
                marker = createMarker(point, locationset[y][1], locationset[y][4], letter, locationset[y][14]);
                marker.set("id", y);
                markers[y] = marker;
                if((settings.fullMapStart === true && firstRun === true) || settings.zoomLevel === 0){
                  bounds.extend(point);
                }
                //Pass variables to the pop-up infowindows
                //create_infowindow(marker);
				createLine(point, locationset[y][1], locationset[y][4], letter, locationset[y][14]); 
              }*/
			  /*}*/
			  
			  
			  
			  // PUT POSTCODE MARKER ON MAP
			  var point = new google.maps.LatLng(orig_lat, orig_lng);             
              	  marker = createMarker(point);
                //marker.set("id", y);
                //markers[y] = marker;
			  
			  
			  

              //Center and zoom if no origin or zoom was provided
              if((settings.fullMapStart === true && firstRun === true) || settings.zoomLevel === 0){
                map.fitBounds(bounds);
              }
               
               //Create the links that focus on the related marker
               $("#" + settings.listDiv + ' ul').empty();
               $(markers).each(function(x, marker){
                var letter = String.fromCharCode("A".charCodeAt(0) + x);
                //This needs to happen outside the loop or there will be a closure problem with creating the infowindows attached to the list click
                var currentMarker = markers[x];
                listClick(currentMarker);
              });

              function listClick(marker)
              {
                //Define the location data
                var locations = define_location_data(marker);

                //Set up the list template with the location data
                var listHtml = listTemplate(locations);
                $('#' + settings.listDiv + ' ul').append(listHtml);
              }

              //Handle clicks from the list
              $(document).on('click.'+prefix, '#' + settings.listDiv + ' li', function(){
                var markerId = $(this).data('markerid');

                var selectedMarker = markers[markerId];

                //Focus on the list
                $('#' + settings.listDiv + ' li').removeClass('list-focus');
                $('#' + settings.listDiv + ' li[data-markerid=' + markerId +']').addClass('list-focus');

                map.panTo(selectedMarker.getPosition());
                var listLoc = "left";
                if(settings.bounceMarker === true)
                {
                  selectedMarker.setAnimation(google.maps.Animation.BOUNCE);
                  setTimeout(function() { selectedMarker.setAnimation(null); create_infowindow(selectedMarker, listLoc); }, 700);
                }
                else
                {
                  create_infowindow(selectedMarker, listLoc);
                }
              });

              //Add the list li background colors
              $("#" + settings.listDiv + " ul li:even").css('background', "#" + settings.listColor1);
              $("#" + settings.listDiv + " ul li:odd").css('background', "#" + settings.listColor2);
               
              //Custom marker function - alphabetical
              function createMarker(point)
			  {
                var pinImage = new google.maps.MarkerImage("/lib/hlight/store-locator-test/images/pin.png",
                  new google.maps.Size(30, 30),
                  new google.maps.Point(0,0),
                  new google.maps.Point(15, 15));
                
                
                  var marker = new google.maps.Marker({
                    position: point, 
                    map: map,
                    icon: pinImage,
                    draggable: false,
					zIndex: 1
                  });
                

                return marker;
              }
			  
			  
			  function createLine(point, name, address, letter, type)
			  {
              	//Set up pin icon with the Google Charts API for all of our markers
				
				//position: point
				//console.log(point.jb);
				var line = new google.maps.Polyline({
    				path: [new google.maps.LatLng(point.jb, point.kb), new google.maps.LatLng(57.040730, -11.821289)],
    				strokeColor: "#333333",
    				strokeOpacity: 0.4,
    				strokeWeight: 6,
					zIndex: 500,
    				map: map
				});
			  
			  }

              //Infowindows
              function create_infowindow(marker, location){
                
                //Define the location data
                var locations = define_location_data(marker);

                //Set up the infowindow template with the location data
                var formattedAddress = infowindowTemplate(locations);

                //Opens the infowindow when list item is clicked
                if(location === "left")
                {
                    infowindow.setContent(formattedAddress);
                    infowindow.open(marker.get(settings.mapDiv), marker);
                }
                //Opens the infowindow when the marker is clicked
                else
                {
                  google.maps.event.addListener(marker, 'click', function() {
                      infowindow.setContent(formattedAddress);
                      infowindow.open(marker.get(settings.mapDiv), marker);
                      //Focus on the list
                      $('#' + settings.listDiv + ' li').removeClass('list-focus');
                      markerId = marker.get("id");
                      $('#' + settings.listDiv + ' li[data-markerid=' + markerId +']').addClass('list-focus');

                      //Scroll list to selected marker
                      var container = $('#' + settings.listDiv),scrollTo = $('#' + settings.listDiv + ' li[data-markerid=' + markerId +']');
                      $('#' + settings.listDiv).animate({
                          scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
                      });
                  });
                }

              }

          /*});*/
        }   
      });
    /*});*/
  }

  }

  });
};
})(jQuery);