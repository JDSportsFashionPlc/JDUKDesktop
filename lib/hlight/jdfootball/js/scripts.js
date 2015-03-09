var scrollable = {
	init:function() {
		var navigationItem = jQuery('.navi a');
	
		scrollable.scroll();
		jQuery('.navi a').each(function(i){
			i++;
			jQuery(this).addClass('item-'+i);
		});	
		jQuery('.navi a:last-child').css({marginRight: "0"});	
	},
	scroll:function() {
		var scrollable = jQuery('.scrollable');
		var body = jQuery('body');
		
		scrollable.scrollable({
			circular: false,
			keyboard: false,
			onBeforeSeek: function() {	
				background.fade();
				if(jQuery('.navi a:last-child').hasClass('active')) {
					background.change();
				}
			},
			onSeek: function() { 
				background.change();
			}
			}).navigator().autoscroll({
				autoplay: true, 
				interval: 6000
		});		
		
		var api = scrollable.data('scrollable');
		
		body.keydown(function(e) {
			if(e.keyCode == 37) {
				if(api.getIndex() == 0) {
					api.end();
				} else {
					api.prev();
				}
			}
			else if(e.keyCode == 39) {
				if(api.getIndex() == (api.getItems().size()-1)) {
					api.begin();
				} else {
					api.next();
				}
			}
		});		
	}
}

var background = {
	fade:function() {
		var backgroundImage = jQuery('.background img');	
		backgroundImage.fadeOut();
	},
	change:function() {
		var backgroundImage = jQuery('.background img');	
		var currentItem = jQuery('.navi a.active');
		var numRand = (new Date()).getTime();
		
		
		if (currentItem.hasClass('item-1')) {
			var backgroundURL = "/lib/hlight/jdfootball/images/structure/background-slider-18.jpg?q="+numRand;
			
			} else if (currentItem.hasClass('item-2')) {
			var backgroundURL = "/lib/hlight/jdfootball/images/structure/background-slider-20.jpg?q="+numRand;
			
			} else if (currentItem.hasClass('item-3')) {
			var backgroundURL = "/lib/hlight/jdfootball/images/structure/background-slider-19.jpg?q="+numRand;
			
			} else if (currentItem.hasClass('item-4')) {
			var backgroundURL = "/lib/hlight/jdfootball/images/structure/background-slider-11.jpg?q="+numRand;
			
			} else if (currentItem.hasClass('item-5')) {
			var backgroundURL = "/lib/hlight/jdfootball/images/structure/background-slider-12.jpg?q="+numRand;
			
			} else if (currentItem.hasClass('item-6')) {
			var backgroundURL = "/lib/hlight/jdfootball/images/structure/background-slider-7.jpg?q="+numRand;
		
		}		
	
		backgroundImage.attr('src', backgroundURL).load(function(){
			backgroundImage.fadeIn();	
		});
	}
}

var module = {
	hover:function() {
		var module = jQuery(".module");
		
		module.append(jQuery('<span class="slice"></span>'));
		module.hover(
			function () {
				jQuery(this).find('.slice').addClass('active');
			}, 
			function () {
				jQuery(this).find('.slice').removeClass('active');
			}
		);		
	}
}

jQuery(function(){
	jQuery('.tabs li.primary a.top-level').live('click', function(e){
		jQuery('.tabs li.primary').removeClass('current');
		jQuery(this).parent('li').addClass('current');
		e.preventDefault();
	});
});






jQuery('ul#crests li a').hover(
		
		function() {
			
			jQuery(this).children('img').stop(true, true).fadeTo('fast', 1.0);	
		
		}, 
	
		function() {
		
			jQuery(this).children('img').stop(true, true).fadeTo('fast', 0.5);	
		
	});