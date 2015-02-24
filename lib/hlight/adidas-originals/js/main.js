function videoRatio() {
	var width = jQuery('iframe').width();
	var height = width / 1.777777778;
	jQuery('iframe').height(height);
}

function lookbookClass() {
	var width = jQuery(window).width();
	var lookbook = jQuery('.lookbook');
	if(width < 976){
		lookbook.addClass('mobile');
		lookbook.removeClass('desktop');
	} else {
		lookbook.addClass('desktop');
		lookbook.removeClass('mobile');
	}
}

jQuery(window).bind('resize load', function(){
	videoRatio();
	lookbookClass();
});

jQuery(document).ready(function(){
	videoRatio();
	lookbookClass();
	var feed = new Instafeed({
		get: 'tagged',
		tagName: 'jdxadidas',
		clientId: '6ed1a5eb8c7043e1b059caecbb4b4ab2',
		template: '<li><a href="http://instagram.com/jdsportsofficial" target="_blank"><img src="{{image}}" alt="" /></a></li>',
		limit: 4,
		resolution: 'low_resolution'
	});
	feed.run();
	jQuery('.lookbook.desktop img').bind('click', function(){
		var img = jQuery(this);
		var description = jQuery(this).next();
		var parent = jQuery(this).parent();
		if(jQuery('.lookbook.desktop').hasClass('active')){
			jQuery('.lookbook.desktop img').not(img).removeClass('active');
			jQuery('.lookbook.desktop').removeClass('active');
			jQuery(description).removeClass('active');
			jQuery(parent).removeClass('active');
			img.removeClass('active');
		} else {
			var text = img.data('text');
			jQuery('.lookbook.desktop img').not(img).removeClass('active');
			jQuery('.lookbook.desktop').addClass('active');
			jQuery(description).addClass('active');
			jQuery(parent).addClass('active');
			img.addClass('active');
		}
	});
	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true
	});
});