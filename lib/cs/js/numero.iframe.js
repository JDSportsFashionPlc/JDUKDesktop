/**
 * NUMERO_IFrame
 * Handles resizing of iframes crossdomain
 * 
 * @author numero
 */
 
var NUMERO_IFrame = NUMERO_IFrame || {}
	
NUMERO_IFrame = {
	setFrameHeight: function(height){
		var niFrame = document.getElementById('ni-frame');
		if(niFrame != null) {
			niFrame.height = height;
		} else {
			//console.log('NUMERO_IFrame:ERROR: Cannot find an iframe with id ni-frame');
		}
	},
	
	getQueryString: function (paramname) {
		qs = window.location.search.substring(1);
		pairs = qs.split("&");
		for (i=0; i<pairs.length; i++) {
			pair = pairs[i].split("=");
			if (pair[0] == paramname) {
				return pair[1];
			}
		}
	}
};