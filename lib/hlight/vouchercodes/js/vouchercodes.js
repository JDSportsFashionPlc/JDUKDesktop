/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Timi Abel
 * --- --- --- --- ---
 * #SALE PAGE
 * --- --- --- --- ---

**/

// START
// -- Load Program

jQuery(document).ready(function ($) {

	// if ($('#content > .no-products-found h1:contains("Sorry, we have not been able to find...")').length > 0) {
 //    	$("#somediv").addClass("thisClass");

 //    	var cheffs = $(".no-products-found h2").text();
 //    	$("#breadCrumbTrail").hide();
 //    	$("#bodydisplay").hide();
	// 	$( "#valxx" ).text( cheffs );
 //    	$("#not-found-holder").show();
	

	// } else {

	// }
	
	// $('.boxer').click(function(){
	//     $(this).animate({height:'+=100px'}, 600, 'easeInQuad');
	// });


var navq = jQuery('.myButton'); 

	jQuery('.yove').remove();
      navq.after('<div class="accordion yove"><h3 class=""><span class="theTerm">Terms &amp; Conditions</span> <span class=""></span></h3> <div class="pane"> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, est, maiores, obcaecati, sed harum ratione autem excepturi minima magnam ut quas enim reiciendis maxime ex accusamus ducimus dignissimos sint doloribus.</p></div></div>');
       // jQuery('.offerz').addClass('Allz');
      
     



    $("#theToggle a").click(function(event) {
        event.preventDefault();
        $(this).addClass("acti");
        $(this).siblings().removeClass("acti");
        var tab = $(this).attr("href");
        $(".tab-contents").not(tab).fadeOut(600, 'easeOutCubic');
        $(tab).fadeIn(600, 'easeOutCubic'); 

            $('#loadMore').css({
            	position: 'relative',
            	clear: 'both',
            	height: '34px',
            	float: 'left',
            	bottom: '-17px',
            	marginBottom: '60px'
            }).html('LOAD ALL').show();
	    	$('#myList .offerz').removeClass('theLast'); 
 
            $('#faders').hide();
    });




	jQuery(function () {
	    // jQuery(".accordion h3").find('.theTerm').append('<span class="plus">x</span>');
	    jQuery(".accordion h3").click(function () {
	        jQuery(this).next(".pane").slideToggle("slow").siblings(".pane:visible").slideUp("slow");
	        jQuery(this).toggleClass("current");
	        // jQuery(this).find('.plus').show();
	        jQuery(this).find('.theTerm').html('Close x').addClass('myButton');

	        // jQuery(this).siblings(".theTerm").find('.plus').addClass('plus-bar');
	        jQuery(this).siblings("h3").removeClass("current");
	        if(!jQuery(this).hasClass('current')) {
	          // jQuery(this).find('.plus').hide();
	        jQuery(this).find('.theTerm').html('Terms &amp; Conditions').removeClass('myButton');
	        };
	        return false;
	    });
    });




 var size_li = $("#myList .offerz").size(); 
    x=3;
    $('#myList .offerz:lt('+x+')').show();
    $('#myList .offerz:visible:last').addClass('theLast');

    $('#loadMore').click(function(event) { 

        event.preventDefault(); 
        $('#faders').show();

        x= (x+5 <= size_li) ? x+5 : size_li;
        $('#myList .offerz:lt('+x+')').show(); 
	    $('#myList .offerz').removeClass('theLast'); 
	    $('#myList .offerz:visible:last').addClass('theLast');

            $('#loadMore').css({
            	position: 'absolute',
            	clear: 'both',
            	height: 'auto',
            	float: 'none',
            	bottom: '258px',
            	marginBottom: '0'
            }).html('LOAD MORE');

        if(x == size_li){
            $('#loadMore, #faders').hide();
    		$('#myList .offerz').removeClass('theLast'); 
        }
        return false;
    }); 

  // $("#theToggle a").offset($("#theToggle a").slice(0,1).offset());
  
  // $("#theToggle a").click(function(){
  //      $("#tab_bg").animate({'left':($(this).offset().left+35)+"px"});
  //    });


  var arrow = $("#tab_bg");
$("#theToggle a").click(function() {
    var left = $(this).offset().left - arrow.parent().offset().left + $(this).outerWidth()/2 - arrow.width()/2
    arrow.stop().animate({left: left}, 400);
}); 









 

//date format yyyy/mm/dd
$(function() {
    $(".boxer").each(function(index) { 
        var sRange = $(this).find(".countdown").html();
        //var arrTemp = sRange.split(" to ");
        //var dtFrom = new Date(arrTemp[0]);
        var dtTo = new Date(sRange); 
        var d = new Date();
        var dtYes = d.setDate(d.getDate() - 0); 
        if (dtTo > dtYes) {
             //$(this).show();
             $(this).parent().addClass('latest'); 
        } else if (dtTo.getTime() < d.getTime()) {
             // $(this).hide(); 
             $(this).addClass('finished'); 
             $(this).parent().addClass('expired').removeClass('latest'); 
             $(this).find('.thick').html('Expired'); 
             $(this).find('.myButton').html('EXPIRED'); 
        } 
    });
     
        
     
    
    $(".countdown").each(function() { 
        var sRange = $(this).html(); 
        var d = new Date();
        var dtM = new Date(sRange); 
        //var dtMx = dtM.getDate() + 1;//
        // var dtMx = new Date((new Date(sRange)).valueOf() + 1000*3600*24);
        var dtMx = new Date((new Date(sRange)).valueOf() + 0);
        var vv = moment(dtM).format("DD.MM.YYYY"); 
        var gg = moment(d).format("DD.MM.YYYY");
        
        if (vv == gg) {  
	            if(dtM.getTime() > d.getTime() || dtM.getTime() == d.getTime()){ 
		            $(this).attr('data-countdown', sRange);   
	                $(this).each(function() {
	                   var $this = $(this), finalDate = $(this).data('countdown');
	                   $this.countdown(finalDate, function(event) {
	                     $this.after().html(event.strftime('<p class="Enders">Ending: </p>' 
	                        + '<p class="hours">%H</p><p class="timeRefHours">hr</p>'
	                        + '<p class="minutes">%M</p><p class="timeRefMinutes">min</p>'
	                        + '<p class="seconds">%S</p><p class="timeRefSeconds">sec</p>'));
	                   }).show();
	                });
	                
                $(this).siblings('p').find('.thick').html(vv); 
                $(this).parent().parent().addClass('ending'); 
	            } else { 
	            	$(this).siblings('p').find('.thick').html('Expired'); 
	            }
	                // $(this).html('Expires Midnight'); 
            	// $(this).parent().parent().addClass('expired'); 
            } else if (vv > gg){
                $(this).siblings('p').find('.thick').html(vv); 
                $(this).parent().parent().addClass('latest'); 
            }
    });
    
    
});


//date functions ends


    
		 	
	
});