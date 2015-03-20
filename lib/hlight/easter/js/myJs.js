jQuery(document).ready(function($) {
    jQuery('.myThumb').each(function() {
        jQuery(this).append('<span class="shopNow">Shop Now</span><span class="closer"></span>');
    });
     jQuery("ul#the-car").prepend('<span id="touchBlocker"></span>'); 

    var myViews = jQuery('.sliderr').html();
    var roundabout_wrapper = jQuery('.sliderr'),
        roundabout_view_content = myViews,
        roundabout_slides,
        roundabout_num_items,
        roundabout_current,
        upscale = true,
        uid,
        drag;

    roundabout_wrapper.html(roundabout_view_content);
    init_staff_carousel(); 
    
    jQuery('.myThumb').each(function() { 
        $(this).addClass('disabled');
        $(this).click(function() {
            if ($(this).hasClass('disabled')) {
                $(this).addClass('actions').removeClass('disabled bigger');
                return false;
            }  
        });
        $(this).on('touchstart', function() {
            if ($(this).hasClass('disabled')) {
                $(this).addClass('actions').removeClass('disabled bigger');
                return false;
            }  
        });
        if ($(this).hasClass('disabled')) { 
            $(this).hover(function() { 
                $(this).not('.actions').addClass('bigger');
            }, function() { 
                $(this).removeClass('bigger');
            });
        }
        $(this).find('closer').bind('click', function() {
     
            $(this).parent().removeClass('disabled');
            $(this).parent().removeClass('actions').addClass('disabled'); 
            console.log('closer clicked'); 
        });
 
    });

    jQuery('body, #easter, .roundabout-next, .roundabout-prev, ul#the-car li img').on('click',  function() {

        if ($('.myThumb').hasClass('actions')) {
            $('.myThumb').removeClass('disabled');
            $('.myThumb').removeClass('actions').addClass('disabled');
        }; 

    });


    

    jQuery('.myThumb').on('click touchstart',  function() {

        if ($(this).siblings().hasClass('actions')) {
            $(this).siblings().removeClass('disabled');
            $(this).siblings().removeClass('actions').addClass('disabled');
        }   

    });

    // jQuery('.myThumb .closer').bind('click', function() {
 
    //     $(this).parent().removeClass('disabled');
    //     $(this).parent().removeClass('actions').addClass('disabled');
    //      $('.myThumb').removeClass('actions').addClass('disabled');
    //     console.log('closer clicked'); 
    // });
 

    function hide_others() {
        // jQuery('ul#the-car > li').each(function() {
        //       /* iterate through array or object */

        //  var tikk = jQuery(this).css("z-index");
        //  if (tikk < '117') {
        //      jQuery(this).attr('style', 'opacity: 0!important');
        //  }  
        // });
    }

    function init_staff_carousel() {

        roundabout_num_items = jQuery('ul#the-car > li').length;
        uid = '';

        if (uid > 0) {
            var row_class = 'li.uid-' + uid;
            roundabout_current = jQuery('ul#the-car').find('li.uid-' + uid).index();
        } else {
            roundabout_current = 0;
        }

        if (roundabout_num_items > 1) {

            roundabout_slides = jQuery('ul#the-car');
            roundabout_information = jQuery('#prodThumb ul');

            if (jQuery(window).width() < 623) {
                drag = false;
            } else {
                drag = true;
            }

            roundabout_slides.roundabout({
                btnNext: '.roundabout-next',
                btnPrev: '.roundabout-prev',
                enableDrag: drag,
                minOpacity: 0.7,
                //maxScale: 1,
                minScale: 0.7, 
                triggerBlurEvents: true,
                responsive: true,
                triggerFocusEvents: true,
                startingChild: roundabout_current
            });
            roundabout_slides.roundabout("setTilt", -1.0);

            roundabout_slides.add(roundabout_information).touchwipe({
                wipeLeft: function() {
                    jQuery('.roundabout-next').click();
                },
                wipeRight: function() {
                    jQuery('.roundabout-prev').click();
                },
                preventDefaultEvents: false
            });
            jQuery(document).keydown(function(e) {
                if (e.which == 37) {
                    jQuery('.roundabout-prev').click();
                    return false;
                }

                if (e.which == 39) {
                    jQuery('.roundabout-next').click();
                    return false;
                }
            });

            jQuery('ul#the-car li').focus(function() {
                roundabout_current = roundabout_slides.roundabout("getChildInFocus");
                setProfile(roundabout_current);
            });

            setProfile(roundabout_current);

        } else {
            //roundabout_slides.find('.upsell').css('border-right','1px dashed #5db5be');
        }

        if (!!upscale) {
            var timeoutOffset = 25;
            var timeout = 0;
            jQuery('li.views-row .views-field-field-full-length-picture img', roundabout_wrapper).each(function() {
                timeout += timeoutOffset;
                var img = jQuery(this);
                setTimeout(function() {
                    var dataSrc = img.attr('data-src');
                    if (!!dataSrc) {
                        var src = img.attr('src');
                        img.attr('data-original-src', src)
                            .attr('src', dataSrc)
                            .removeAttr('data-src')
                            .addClass('carousel-upscaled');
                    }
                }, timeout, img);
            });
        }
        jQuery('ul#the-car').append('<div id="faderr"></div>').css('opacity', '1');
    }

    function setProfile(currentItem) {

        jQuery('#prodThumb ul li').hide();
        jQuery('#prodThumb ul').find('li.views-row-' + (currentItem + 1)).show();
    }

});