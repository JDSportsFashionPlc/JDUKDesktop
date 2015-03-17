/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 * --- --- --- --- ---
 * #FACEOFJD
 * --- --- --- --- ---

***/

// START ARCHITECTURE

// -- Start BOF BOA
var videoprocess = document.getElementsByClassName('videoddo');
	
$.noConflict();
jQuery(document).ready(function($){
	
	jQuery('.fademe').fadeIn(2000);
	
	jQuery('.action').click(function (){
		closevideos();
		jQuery('html,body').animate({scrollTop: 485}, 2000);
		jQuery('.boys_top, .girls_top').slideUp();
		jQuery('.contentspotsZoneboy,.contentspotsZonegirl').slideDown();
		jQuery('.video_top').slideDown();		
	});
	
	jQuery('#videobigclose').click(function () {
		var myVideo=document.getElementById("videobigasset"); 
		jQuery('.video_top').slideUp();
		jQuery('.contentspotsZoneboy,.contentspotsZonegirl').slideUp();
		myVideo.pause();
		return false;
	});
	
	jQuery('.videoddo').click(function(){
		videoprocess.play();
	});
	
});

// GOOGLE CHROME
// -- Fixes controls=controls and poster not displaying issues

playVideo = function(el) {
    if (!el) { return; }
    if (el.getAttribute('controls') !== 'true') {
        el.setAttribute('controls', 'true');                    
    }
    el.paused ? el.play() : el.pause();
    el.removeAttribute('controls');
}

function closeVideoStopper(id){
	var videoToShop = document.getElementById('dvideostopperme'+id);
	videoToShop.pause();	
}

function clickBox(gender, id){
	var gender = gender;
	var id = id;
		closevideos();
		jQuery('.contentspotsZoneboy,.contentspotsZonegirl').slideDown();
		jQuery('.boys_top, .girls_top, .video_top').slideUp();	
		jQuery('.'+gender+''+id+'').slideDown();
		jQuery('html,body').animate({scrollTop: 485}, 2000);
		return false;
} 

function closeclickBox(gender, id){
	var gender = gender;
	var id = id;
		jQuery('.contentspotsZoneboy,.contentspotsZonegirl').slideUp();
		jQuery('html,body').animate({scrollTop: 485}, 2000);
		jQuery('.boys_top .girls_top, .video_top').slideUp();
		jQuery('.'+gender+''+id+'').slideUp();
		jQuery('a.winner img,.boys_title,.girls_title').css('opacity', '1');
		closevideos();
		return false;
}

// CONTENT SPOT HOVERS
// -- Do builds for content
	jQuery('.contentspotsZoneOn').find('a').hover(function () {
		jQuery(this).find('span.sn').css('opacity', 1);
		jQuery(this).find('img').css('opacity', 0.3);
	},
	function () {
		jQuery(this).find('span.sn').css('opacity', 0);
		jQuery(this).find('img').css('opacity', 1);
	});
	
function closevideos(){
	jQuery('.vboy1,.vgirl1,.vboy2,.vgirl2,.vboy3,.vgirl3,.vboy4,.vgirl4,.vboy5,.vgirl5,.vboy6,.vgirl6,.vboy7,.vgirl7,.vboy8,.vgirl8,.vboy9,.vgirl9,.vboy10,.vgirl10,.vboy11,.vgirl11,.vboy12,.vgirl2,vboy13,.vgirl13,vboy14,.vgirl14,vboy15,.vgirl5').slideUp();
	
}
	
// ENDS ARCHITECTURE
// -- Stop EOF EOA