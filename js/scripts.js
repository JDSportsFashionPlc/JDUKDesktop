/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * Khaleel Mughal
 *	(not original author, just improving and cleaning up #TODO)
 * --- --- --- --- ---
 * #JDJSSCRIPTS 
 * --- --- --- --- ---
 
 Last Modified: 5th September
  - Some UI and UX changes for the USP banner. 
  - More cleaning of the code.

***/

// VIEWPORT FOR SMALL DEVICES
jQuery(document).ready(function($) {
    $('meta[name=viewport]').attr('content', 'width=1006');
});

// READ COOKIE
function ReadCookie() {}

// POPUP CLASS
function openWin(urlRequest, title) {
    title = title || "";
    myWindow = window.open(urlRequest, title, "width=730,height=740,resizable=yes,scrollbars=yes");
}

/* 
Document index:
0. Additional Library calls
1. Align primaryNav in header
2. Minibasket functionality
3. Product page size select
4. Add class to primary navigation on new department pages
5. Add FREE DELIVERY on product pages
6 and 7. Experiments and further JS and ping updates
*/

jQuery.noConflict();
jQuery(function($) {

    // BETTER LOADING BLOCK
    // This set of code is been adjusted so that the website loads much quicker 
    jQuery('ul#secondaryNavigation').remove();


    // 0
    // -- Calls additional librarys

    // SDL FredHopper URL CSS
    // This stylesheet is the new dedicated FredHopper CSS 
    // 12th November 2014 - all FredHopper messy CSS will chucked inside this
    // 17th November 2014 - Also add the TypeKit Cloud Typography for GOTHAM for global usage
    // -- appendTo() reduces speed
    jQuery('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/css/fredhopper.css?v=' + Math.random()));
    jQuery('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '//cloud.typography.com/6282092/657264/css/fonts.css?v=' + Math.random()));
    // FREDHOPPER HS IS WAY BELOW AT THE BOTTOM

    //jQuery(document).ready(function() {
    var fredHopperJscript = document.createElement("script");
    fredHopperJscript.type = "text/javascript";
    fredHopperJscript.src = "/js/fredhopper.js?v=" + Math.random();
    jQuery("head").append(fredHopperJscript);
    //});

    // FREDHOPPER JS FUNCTION
    // -- Add the ActiveClass to latest current FredHopper URLs if possible.
    var fredHopperURL = window.location.href;
    jQuery("a[href='" + fredHopperURL + "']").each(function() {
        jQuery(this).addClass('fredHopperActive');
    });

    // 1
    // -- Alignment and nav building

    // PRODUCT CSS
    if (document.getElementById('scene7wrapper')) {
        $('.aboutUsList').css('height', '148px');
        $('#BVRRDisplayContentNoReviewsID').css('display', 'none');
        $('#BVRRDisplayContentLinkWriteID').css('display', 'none');
        $('#BVRRRatingSummaryLinkWriteID').css('display', 'none');
        $('#BVRRRatingSummaryLinkWriteFirstID').css('display', 'none');
    }
    // CHECKOUT PAGE
    if ($('div.basketContinueShopping').length) {
        $('div.basketContainer').css('height', '600px');
    }
    // LOGIN JQUERY
    if ($('div.myAccountLogin').length) {
        $('#emailId').css('float', 'left');
        $('#loginButton img').empty().remove();
        $('#loginButton').html('Login');
        $('.inPageSeparator').empty().remove();
        $('.createButton').html('Create Account');
        $('h1.first img').empty().remove();
        $('h1.first').html('Login');
        $('.newAccount h1 img').empty().remove();
        $('.newAccount h1').html('New Account');
        $('.viewbuttons a').empty().remove();
        $('div.note:last').html('*Indicates a required field');
        $('.myAccountLogin').css('padding-top', '20px');
        $('.myAccountLogin .newAccount label').css('width', '150px');
        $('.breadcrumbs').css('margin-top', '20px');
        $('.myAccountLogin').css('display', 'block');
    }

    // REBUILD ACCOUNT PAGES
    if ($('div.myAccount').length) {
        $('div.myAccount').css('padding-top', '20px');
        $('.breadcrumbs').css('margin-top', '20px');
        $('.enterButton:last').css('top', '-20px');
        $('h1.first img').empty().remove();
        $('h1.first').html('My Account');
    }
    if ($('form#Register').length) {
        $('#Register').wrapAll('<div class="registerform" />');
        $('.breadcrumbs').css('margin-top', '20px');
        $('div.myAccount').css('padding-top', '20px');
        $('.saveInfoButton').html('Save Info');
        $('.cancelButton').html('Cancel');
        $('h2').empty().remove();
        $('h1.first').html('My Info');
    }
    // My Account - Addresses page
    if ($('div.preset').length) {
        $('.breadcrumbs').css('margin-top', '20px');
        $('div.myAccount').css('padding-top', '20px');
        $('h2').empty().remove();
        $('h1.first').html('My Addresses');
        $('.returnToAccountButton').html('Return To My Account');
    }
    // My Account - Address Change page
    if ($('form#AddressForm').length) {
        $('.breadcrumbs').css('margin-top', '20px');
        $('div.yourDetailsContainer').css('padding-top', '20px');
    }
    // My Account - Orders page
    if ($('table.myOrders').length) {
        $('.breadcrumbs').css('margin-top', '20px');
        $('div.myAccount').css('padding-top', '20px');
        $('h2').empty().remove();
        $('h1.first').html('My Orders');
        $('div.buttonWrapper a span').html('Return To My Account');
    }
    // My Account - My Payment Details page
    if ($('.myAccountPaymentDetails').length) {
        $('.breadcrumbs').css('margin-top', '20px');
        $('div.myAccount').css('padding-top', '20px');
        $('h1.first').html('My Payment Details');
        $('h2').empty().remove();
    }
    // My Account Payment Details
    if ($('div.securityInfo').length) {
        $('div.yourDetailsContainer').css('margin-top', '20px');
        $('div.myAccount').css('padding-top', '20px');
    }
    // My Payment Details
    if ($('div.yourDetailsContainer').length) {
        $('h1.first').html('My Addresses');
        $('.billingAddress h2').empty().remove();
        $('#addressUpdateButtonDiv a span').html('Update');
        $('#addressClearButtonDiv a span').html('Clear Address');
    }
    // My Account - change Password page
    if ($('#logonPasswordOld').length) {
        $('#page').css('width', '100%');
        $('.leftColumn').css('width', '270px');
        $('.leftColumn').css('height', '355px');
        $('.myAccount').css('padding-top', '40px');
        $('#header').css('margin', '0 auto');
        $('.breadcrumbs').css('margin-top', '20px').css('padding', '0');
        $('#footerMain').css('float', 'none').css('margin', '0 auto').css('background', '#222');
        $('.contentContainer').css('float', 'none').css('margin', '0 auto').css('height', '570px').css('position', 'relative').css('background', 'none');
        $('.changePassButtonCancel').addClass('passwordCancel');
        $('.changePassButtonSave').addClass('passwordSave');
        $('body').css('background', 'none');
    }
    // Under NO CIRCUMSTANCES REMOVE THIS FUNCTION! Checkout footer fix.
    if ($('div#basket').length) {
        $('html').addClass('footerBackground');
    }
    if ($('iframe[name=google_conversion_frame]').length) {
        $('iframe[name=google_conversion_frame]').css('display', 'none');
    }

    // Main nav reflow/twitter - RJR 12/09/13
    // JD LOGO
    $('body').append('<div id="nav-full-width"><a href="/home" title="JD Sports"><img class="nav-logo" src="/images/JD-logo-block.jpg" width="30" height="30" alt="JD Sports" /></a><img class="nav-scroll" src="/images/up-arrow.png" width="30" height="30" alt="JD Sports" /><p class="nav-scroll-text"><a class="scroller" href="#" style="color:#fff;text-decoration:none">Scroll to Top</a></p></div>')

    // -- -- --
    // 2. Normal 3 USPs
    // -- -- --
    // APPEND NAVIGATION BIG BLUE BAR
    // THE BIG BLUE DELIVERY BAR WITH LINKS AND COREMETRIC TAGGING - BLUE OR COLOUR ASSIGNED WITH CSS
    // @PARAM store.css, store_checkout.css, store_product.css
    // CONFIG CSS TOO AS NEEDED
    // -- -- --
    var newDeliveryBanner = '<style type="text/css">.delivery-mainlink,.loopClearanceText{display:none}#delivery-banner-new > div { postition: relative; float: left; text-align: center; width: 30%; display: block }#delivery-banner-new { background:url("/images/delivery-banner-dividers.png") no-repeat scroll 0 0 rgba(0, 0, 0, 0); margin: 0 auto; overflow: hidden; width: 976px; z-index: 1; }.delivery-mainlink,.loopClearanceText { letter-spacing: 0.75px; font-weight: bold; text-align:center;font-size:14px;color:#fff;text-transform:uppercase;text-decoration:none;line-height:39px }.delivery-mainlink:hover,.loopClearanceText:hover { text-decoration:underline }.delivery-sublink a,.delivery-sublink-extra a { margin:0 9px;font-weight:normal;text-align:center;font-size:12px;color:#fff; text-transform:uppercase; text-decoration:none; letter-spacing:0.39px }.delivery-sublink a:hover,.delivery-sublink-extra a:hover,.loopClearanceText a:hover { text-decoration:underline}.delivery-sublink,.delivery-sublink-extra{position:relative; top:-9px; display:none;}</style><div id="qd-b-w" style="height:51px;background:#004d7c; position:relative;display:none;width:100%;"><div id="delivery-banner-new" ><div class="deliverySpotTab" id="DeliverySpot1"><a class="delivery-mainlink" href="/featured/New%20In?fredhopperUrl=fh_location=%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1" manual_cm_re="USP-_-Delivery-Link-_-new-in"></a><br /><span class="delivery-sublink"><a manual_cm_re="USP-_-Delivery-Link-_-NewInMen" href="/featured/Mens%20New%20In?fredhopperUrl=fh_location=%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1%2fcategories%3C{catalog01_ct12201}"></a></span><span class="delivery-sublink"><a manual_cm_re="USP-_-Delivery-Link-_-NewInWomen" href="/featured/Womens New In?fredhopperUrl=fh_location=%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1%2fcategories<{catalog01_ct12202}"></a></span><span class="delivery-sublink"><a manual_cm_re="USP-_-Delivery-Link-_-NewInKids" href="http://www.jdsports.co.uk/featured/Kids%20New%20In?fredhopperUrl=fh_location=%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1%2fcategories%3C{catalog01_ct12203}"></a></span></div><div class="deliverySpotTab" id="DeliverySpot2" style="width:40%;height:51px;background:#1083c6 !important"><a class="delivery-mainlink" href="/page/delivery" manual_cm_re="USP-_-Delivery-Link-_-FreeStoreDel">Next day delivery</a><br /><span class="delivery-sublink"><a href="/page/delivery" manual_cm_re="USP-_-Delivery-Link-_-FreeNextDay">Order by 6pm</a></span></div><div class="deliverySpotTab" id="DeliverySpot3"><a class="delivery-mainlink" href="http://www.jdsports.co.uk/featured/footwear/" manual_cm_re="USP-_-Delivery-Link-_-ClearanceFootwear"></a><br /><span class="delivery-sublink-extra"><a href="http://www.jdsports.co.uk/men/mens-footwear/" manual_cm_re="USP-_-Delivery-Link-_-FootwearMen"></a></span><span class="delivery-sublink-extra"><a href="http://www.jdsports.co.uk/women/womens-footwear/" manual_cm_re="USP-_-Delivery-Link-_-FootwearWomen"></a></span><span class="delivery-sublink-extra"><a href="http://www.jdsports.co.uk/kids/junior-footwear-(sizes-3-5.5)/" manual_cm_re="USP-_-Delivery-Link-_-FootwearKids"></a></span></div></div></div>';

    $('#header').parent().append(newDeliveryBanner);

    // FADE DELIVERY USP IN SMOOTHLY
    // ---- Code gets installed at the end of the body (after all other HTML)
    var quotes = $(".loopClearanceText");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1350)
            .animate({
                top: 0
            }, 1350)
            .fadeOut(1350, showNextQuote);
    }
    showNextQuote();
    setInterval(function() {
        $(".delivery-mainlink").fadeIn("fast");
    }, 750);
    setInterval(function() {
        $(".delivery-sublink").fadeIn("fast");
    }, 1150);
    setInterval(function() {
        $(".delivery-sublink-extra").fadeIn("fast");
    }, 1450);

    setInterval(function() {
        $("#qd-b-w").slideDown("fast");
    }, 750);

    $('#logo').attr('href', '/home');

    // NO MORE BANNER EDITS NOW WORKING ON REST OF THE NAV
    // FIXING OF HEADER APPENDS AND CSS OF RIGHT HAND SIDE NAV (TOP RIGHT SMALL LINKS)
    // Amend Header contents on Spine/Live, display both navigations when complete (RJR 10/04/13).
    // NAVIGATION AND HEADER APPEND
    if (document.getElementById('header')) {

        $('#miniBagContainer').prepend('<div style="padding:5px 8px"><img src="/images/shopping-basket.png"/></div>');
        $('ul#newLinks').remove();
        $(".lastItem").remove('');
        $("ul#tertiaryNavigation").prepend('<li><a manual_cm_re="Global-_-Header-_-WheresMyOrder" href="/page/tracking" style="text-transform:none">Where is my order?</a></li>');
        $("ul#tertiaryNavigation").append('<li class=""><a onclick="openWin(\'/lib/cs/home.html\')" href="#" manual_cm_re="Global-_-Header-_-Customer-Service">Customer Service</a></li><li class="lastItem"><a onclick="openWin(\'/lib/cs/faqs.html?iframeURL=Privacy and Security\')" href="#" manual_cm_re="Global-_-Header-_-Cookies">Cookies</a></li>');
        $('#primaryNavigation > li').eq(0).remove();
        $('#primaryNavigation').append('<li style="float:right;margin-right:0"><span><a manual_cm_re="Global-_-Header-_-Tabs-TurnStyle" href="http://www.turnstyle.co.uk/" target="_blank">TU&#1071;NSTYLE+</a></span></li>');
        $('#primaryNavigation > li:first-child').addClass('first');
        $('#primaryNavigation > li:nth-child(3)').after($('#footballLinks').html()).css('display', 'none');
        $('#primaryNavigation > li:nth-child(4)').after($('#sportsLinks').html()).css('display', 'block');
        $('#primaryNavigation > li:nth-child(6)').remove();
        $('#primaryNavigation > li:first-child').before($('#giftShop').html()).css('display', 'block');
        $('#primaryNavigation > li:nth-child(4)').css('display', 'block');
        $('#primaryNavigation').append('<li><span><a manual_cm_re="Global-_-Header-_-Tabs-GiftCards" href="/page/gift-cards/">Gift Cards</a></span></li>');
        $('ul#saleMenuItemsContainer').remove();
        $('ul#primaryNavigation > li > ul > li > ul').css('position', 'relative');
        $('#header #logo').attr('href', '/home');
        $('#header #logo').attr('manual_cm_re', 'Global-_-Header-_-Logo');
        $('#menLink').attr('manual_cm_re', 'Global-_-Header-_-Tabs-Men');
        $('#womenLink').attr('manual_cm_re', 'Global-_-Header-_-Tabs-Women');
        $('#kidsLink').attr('manual_cm_re', 'Global-_-Header-_-Tabs-Kids');
        $('#primaryNavigation').addClass('displayWhenDone');
        $('#tertiaryNavigation').addClass('displayWhenDone');
        $('#primaryNavigation > li:nth-child(3)').css('display', 'block');
        $('#primaryNavigation > li:nth-child(8)').after($('#clearanceLinks').html()).css('display', 'block');
		$('#primaryNavigation').prepend('<li id="mixxxx" style="display: block;" class="first"><span><a manual_cm_re="Global-_-Header-_-Tabs-NewIn" href="http://www.jdsports.co.uk/featured/New%20In?fredhopperUrl=fh_location=%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1" accesskey="0">New In</a></span><ul id="menMenuItemsContainer2" style="width:211px;box-shadow:0 0 12px 5px rgba(0, 0, 0, 0.5)"><li><ul style="position:relative" id="menMenuItems"><li><dl><dt> New In </dt><dd><ul><li><a href="http://www.jdsports.co.uk/featured/Mens%20New%20In?fredhopperUrl=fh_location%3d%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1%2fcategories%3C%7bcatalog01_ct12201%7d&fh_reftheme=40ff48e2-9104-4f3d-a41e-7898ea3751a1&fh_refview=lister&fh_view_size=80" manual_cm_re="top-nav-_-new-in-_-Men">Men</a></li> <li><a href="http://www.jdsports.co.uk/featured/Womens%20New%20In?fredhopperUrl=fh_location%3d%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1%2fcategories%3C%7bcatalog01_ct12202%7d&fh_reftheme=40ff48e2-9104-4f3d-a41e-7898ea3751a1&fh_refview=lister&fh_view_size=80" manual_cm_re="top-nav-_-new-in-_-Women">Women</a></li><li><a href="http://www.jdsports.co.uk/featured/Kids%20New%20In?fredhopperUrl=fh_location%3d%2f%2fcatalog01%2fen_GB%2fnew_arrival%3d1%2fcategories%3C%7bcatalog01_ct12203%7d&fh_reftheme=40ff48e2-9104-4f3d-a41e-7898ea3751a1&fh_refview=lister&fh_view_size=80" manual_cm_re="top-nav-_-new-in-_-Kids">Kids</a></li> </ul></dd></dl></li> <li style="clear:both;display:none" class="BannerToToggleGloballyGeneric"><a href="/men/brand/brookhaven/" manual_cm_re="Global-_-Header-_-dd-BigBanner-brookhaven" style="padding-left:25px"><img src="/images/library/2014/08.12.2014/mens.jpg"></a></li></ul></li></ul></li>');

    }

    $('a#help').click(function() {
        window.open("http://www.jdsports.co.uk/lib/cs/home.html", "JD", "width=770, height=750, scrollbars=yes");
    });

    $('#nav-full-width > p > a').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

    // 2. Minibasket functionality
    var basketText = $('a.miniBagItems').text();

    var itemCount = parseInt(basketText.substring(0, 1));

    jQuery('span#viewBasket').text('Checkout');
    jQuery('span#viewBasket').wrapAll('<a href="/webapp/wcs/stores/servlet/OrderCalculate?URL=http%3a%2f%2fwww.jdsports.co.uk%2fwebapp%2fwcs%2fstores%2fservlet%2fOrderItemDisplay&amp;langId=-1&amp;storeId=10151&amp;catalogId=10551&amp;updatePrices=1&amp;calculationUsageId=-1&amp;calculationUsageId=-2&amp;calculationUsageId=-7&amp;orderId=."></a>');
    jQuery('span#viewBasket').parent().css('text-decoration', 'none');

    // 2A. Touch Device Detection
    var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));
    // ROLLOVERS (Content Spots)
    if (isTouch) {

        jQuery('.overlay').remove();
        jQuery('#banners .banner-arrow').css('display', 'block');

        // Matthew Zajac - iPad
        // -- fixed centering buttons, new inline styles, commented out fixed height
        // Khaleel - applying for xmas fix

        jQuery('#xmasMenuItemsContainer').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="xmas-close-nav">Close</a></div>');

        //Append Close buttons to Mega Navs
        //matt jQuery('#menMenuItemsContainer').css('height','780px');
        jQuery('#menMenuItemsContainer').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="close-nav">Close</a></div>'); //matt

        //matt  jQuery('#womenMenuItemsContainer').css('height','615px');
        jQuery('#womenMenuItemsContainer').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="close-nav">Close</a></div>'); //matt

        //matt  jQuery('#kidsMenuItemsContainer').css('height','410px'); //980px
        jQuery('#kidsMenuItemsContainer').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="close-nav">Close</a></div>'); //matt 

        //matt jQuery('#sportsMenuItemsContainer').css('height','300px');
        jQuery('#sportsMenuItemsContainer').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="close-nav">Close</a></div>'); //matt

        jQuery('#clearanceMenuItemsContainer').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="close-nav">Close</a></div>'); //matt

        // jQuery('#footballMenuItemsContainer').css('height','360px');
        //matt  jQuery('#footballMenuItemsContainer').css('height','460px');
        jQuery('#footballMenuItemsContainer').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="close-nav">Close</a></div>'); //matt
		
		//matt  jQuery('#kidsMenuItemsContainer').css('height','410px'); //980px
        jQuery('#mixxxx').append('<div style="width:100%; text-align:center"><a style="margin-bottom:50px; width:130px; height:50px; display:inline-block; background:#419c41; border:1px solid #000; text-align:center; text-transform:uppercase; text-decoration:none; line-height:50px; color:#FFF;" href="#" id="close-nav">Close</a></div>'); //matt

        jQuery('span#viewBasket').parent().append('<a id="close-checkout" href="#">Close</a>');


        //Close Mega Navs on click
        jQuery('a#close-nav').click(function() {
            jQuery(this).parent().parent().css('display', 'none');
        });
        jQuery('a#xmas-close-nav').click(function() {
            jQuery("#xmasMenuItemsContainer").css('display', 'none');
        });

        var miniBagHeight = jQuery('#miniBasket').height();
        jQuery('#miniBasketContainer').css('height', miniBagHeight);
        jQuery('#miniBasket').css({
            'top': -miniBagHeight,
            'height': miniBagHeight
        });

        //Close Checkout
        jQuery('a#close-checkout').click(function() {
            jQuery('#miniBasket').stop(true, false).animate({
                top: -miniBagHeight
            }, 500);
        });

        if (itemCount > 0) {

            jQuery('div#miniBagContainer').css('opacity', '1');
            jQuery('span#viewBasket').css('width', '195px').css('border-bottom-right-radius', '0');

            var miniBagHeight = jQuery('#miniBasket').height();
            jQuery('#miniBasketContainer').css('height', miniBagHeight);
            jQuery('#miniBasket').css({
                'top': -miniBagHeight,
                'height': miniBagHeight
            })

            jQuery('#miniBagContainer').hover(function() {
                    jQuery('#miniBagContainer').css('overflow', 'visible');
                    jQuery('#miniBasket').stop(true, false).animate({
                        top: 0
                    }, 500);
                },
                function() {
                    jQuery('#miniBasket').stop(true, false).animate({
                        top: -miniBagHeight
                    }, 500, function() {
                        jQuery('#miniBagContainer').css('overflow', 'hidden');
                    });

                });

        } else {

            jQuery('div#miniBagContainer').css('opacity', '0.25');
            jQuery('a.miniBagCheckout').css('display', 'none');
            jQuery('a.miniBagItems').contents().unwrap();
            jQuery('#miniBagContainer > span').css('width', '230px').css('line-height', '35px');

        }

    } else {
        // bind to normal click, mousemove, etc
        jQuery('#middle-spots-wrap').find('a').hover(function() {
                jQuery(this).find('.overlay').stop(true, true).fadeIn(180);
            },
            function() {
                jQuery(this).find('.overlay').stop(true, true).fadeOut(180);
            });

        if (itemCount > 0) {

            jQuery('div#miniBagContainer').css('opacity', '1');
            jQuery('span#viewBasket').css('width', '266px');

            // set height variable
            var miniBagHeight = jQuery('#miniBasket').height();
            jQuery('#miniBasketContainer').css('height', miniBagHeight);
            jQuery('#miniBasket').css({
                'top': -miniBagHeight,
                'height': miniBagHeight
            });

            // show and hide bag on hover
            jQuery('#miniBagContainer').hover(function() {
                    jQuery('#miniBagContainer').css('overflow', 'visible');
                    jQuery('#miniBasket').stop(true, false).animate({
                        top: 0
                    }, 500);
                },
                function() {
                    jQuery('#miniBasket').stop(true, false).animate({
                        top: -miniBagHeight
                    }, 500, function() {
                        jQuery('#miniBagContainer').css('overflow', 'hidden');
                    });
                });

        } else {

            jQuery('div#miniBagContainer').css('opacity', '0.25');
            jQuery('a.miniBagCheckout').css('display', 'none');
            jQuery('a.miniBagItems').contents().unwrap();
            jQuery('#miniBagContainer > span').css('width', '230px').css('line-height', '35px');

        }

    }

    // show bag when item is added
    if (jQuery('#showBag').length > 0) {
        jQuery('#addToBag').addClass('added'); /* Adds class to add to bag button when product is added to basket */
        jQuery('#checkoutNow').addClass('added'); /* Adds class to add to bag button when product is added to basket */
        jQuery('#miniBagContainer').css('overflow', 'visible');
        jQuery('#miniBasket').animate({
            top: 0
        }, 500).delay(4000).animate({
            top: -miniBagHeight
        }, 500, function() {
            jQuery('#miniBagContainer').css('overflow', 'hidden');
        });
    }

    // 3. Product page size select
    if ((jQuery('#productPage').length > 0) || (jQuery('#productPage').length > 0)) {
        jQuery('#selectSizeFieldset li').click(function() {
            jQuery('#selectSizeFieldset li').removeClass('selected');
            jQuery(this).addClass('selected');
            jQuery('div#errorMessages').html('');
        });

    }

    // 4. Add class to primary navigation on new department pages
    if (jQuery('#brandsLanding').length > 0) {
        jQuery('#primaryNavigation a#brandsLink').addClass('current');
    }
    if (jQuery('#footballLanding').length > 0) {
        jQuery('#primaryNavigation a#footballLink').addClass('current');
    }
    if (jQuery('#olympicsLanding').length > 0) {
        jQuery('#primaryNavigation a#olympicsLink').addClass('current');
    }
    if (jQuery('#footwearLanding').length > 0) {
        jQuery('#primaryNavigation a#footwearLink').addClass('current');
    }
    if (jQuery('#clothingLanding').length > 0) {
        jQuery('#primaryNavigation a#clothingLink').addClass('current');
    }
    if (jQuery('#accessoriesLanding').length > 0) {
        jQuery('#primaryNavigation a#accessoriesLink').addClass('current');
    }
    if (jQuery('#btsLanding').length > 0) {
        jQuery('#primaryNavigation a#btsLink').addClass('current');
    }
    if (jQuery('#sportsLanding').length > 0) {
        jQuery('#primaryNavigation a#sportsLink').addClass('current');
    }

    if (document.getElementById('productPage')) {

        // KHALEEL MUGHAL 30TH MAY 2014
        // Fixed size popups to NUMERO for PP pages	
        // Swap the size guide link
        // #NUMERO TAG
        /*
			jQuery('#infoSizingLink').click('<a onclick="openWin(\'/lib/cs/size-guides.html\')" href="#">View our size guides</a>');	
			jQuery('#infoSizingLink2').click('<a onclick="openWin(\'/lib/cs/size-guides.html\')" href="#">View our size guides</a>');	
			*/

        jQuery('#infoSizingLink,.infoSizingLink2').attr('href', '#');

        jQuery("#infoSizingLink").click(function() {
            openWin('/lib/cs/size-guides.html');
            return false;
        });
        jQuery("#infoSizingLink2").click(function() {
            openWin('/lib/cs/size-guides.html');
            return false;
        });

        // 5. Add FREE DELIVERY on product pages				 	
        // 6. Listen for CM events on size chart links

        // CM events on size chart links
        jQuery("#infoSizingLink").click(function() {
            cmCreateElementTag("Size Guide", "Product Page");
        });
        jQuery("#infoSizingLink2").click(function() {
            cmCreateElementTag("Size Guide 2", "Product Page");
        });
        // CM events on size chart links
        jQuery("#infoTab").click(function() {
            cmCreateElementTag("Info Tab Info", "Product Page");
        });
        jQuery("#deliveryTab").click(function() {
            cmCreateElementTag("Info Tab Delivery", "Product Page");
        });
        jQuery("#returnsTab").click(function() {
            cmCreateElementTag("Info Tab Returns", "Product Page");
        });
        jQuery("#reviewsTab").click(function() {
            cmCreateElementTag("Info Tab Reviews", "Product Page");
        });

        // CM events on Product View
        var currentThumb = 1;

        // CM events on Thumbs
        jQuery("#productThumb1").click(function() {
            cmCreateElementTag("Product View Thumb 1", "Product Page");

            currentThumb = 1;
        });
        jQuery("#productThumb2").click(function() {
            cmCreateElementTag("Product View Thumb 2", "Product Page");

            currentThumb = 2;
        });
        jQuery("#productThumb3").click(function() {
            cmCreateElementTag("Product View Thumb 3", "Product Page");

            currentThumb = 3;
        });
        jQuery("#productThumb4").click(function() {
            cmCreateElementTag("Product View Thumb 4", "Product Page");

            currentThumb = 4;
        });
        jQuery("#productThumb5").click(function() {
            cmCreateElementTag("Product View Thumb 5", "Product Page");

            currentThumb = 5;
        });

        // CM events on Spinset and main images
        jQuery("#spinContainer").click(function() {
            cmCreateElementTag("Product View Zoom Spinset", "Product Page");
        });
        jQuery(".mainImage").click(function() {
            cmCreateElementTag("Product View Zoom Image " + currentThumb, "Product Page");
        });
        jQuery("#clicktozoom").click(function() {
            cmCreateElementTag("Product View Zoom Button " + currentThumb, "Product Page");
        });
        jQuery("#watchvideo").click(function() {
            cmCreateElementTag("Product View Video Button " + currentThumb, "Product Page");
        });

        // CM events on IO Carousels
        // IO slot 1
        var IOslot1page = 1;

        jQuery(jQuery('#mostWantedPanel > div > div > .jcarousel-next')).click(function() {
            if (jQuery('#mostWantedPanel > div > div > .jcarousel-next').attr("disabled") == "false") {
                IOslot1page++;
                cmCreateElementTag("IO Slot 1 Page " + IOslot1page + " Requested", "Product Page");

            }
        });
        jQuery(jQuery('#mostWantedPanel > div > div > .jcarousel-prev')).click(function() {
            if (jQuery('#mostWantedPanel > div > div > .jcarousel-prev').attr("disabled") == "false") {
                IOslot1page--;
                cmCreateElementTag("IO Slot 1 Page " + IOslot1page + " Requested", "Product Page");

            }
        });
        // IO slot 2
        var IOslot2page = 1;

        jQuery(jQuery('#othersBoughtPanel > div > div > .jcarousel-next')).click(function() {
            if (jQuery('#othersBoughtPanel > div > div > .jcarousel-next').attr("disabled") == "false") {
                IOslot2page++;
                cmCreateElementTag("IO Slot 2 Page " + IOslot2page + " Requested", "Product Page");

            }
        });
        jQuery(jQuery('#othersBoughtPanel > div > div > .jcarousel-prev')).click(function() {
            if (jQuery('#othersBoughtPanel > div > div > .jcarousel-prev').attr("disabled") == "false") {
                IOslot2page--;
                cmCreateElementTag("IO Slot 2 Page " + IOslot2page + " Requested", "Product Page");

            }
        });
        jQuery("#BVRRRatingSummaryNoReviewsWriteImageLinkID > a").click(function() {
            cmCreateElementTag("BV1 No Reviews - Write Review (Stars)", "Product Page");

        });
        jQuery("#BVRRRatingSummaryLinkWriteFirstID > a").click(function() {
            cmCreateElementTag("BV1 No Reviews - Write Review (Text)", "Product Page");

        });
        // Has reviews
        jQuery("#BVRRRatingSummaryLinkReadID > a").click(function() {
            cmCreateElementTag("BV1 Has Reviews - Read Reviews", "Product Page");

        });
        jQuery("#BVRRRatingSummaryLinkWriteID > a").click(function() {
            cmCreateElementTag("BV1 Has Reviews - Write Review", "Product Page");

        });

        // No reviews
        jQuery("#BVRRDisplayContentNoReviewsImageID > a").click(function() {
            cmCreateElementTag("BV2 No Reviews - Write Review (Stars)", "Product Page");

        });
        jQuery("#BVRRDisplayContentNoReviewsID > a").click(function() {
            cmCreateElementTag("BV2 No Reviews - Write Review (Text)", "Product Page");

        });
        // Has reviews
        jQuery("#BVRRDisplayContentLinkWriteID > a").click(function() {
            cmCreateElementTag("BV2 Has Reviews - Write Review", "Product Page");

        });
    }
});

// FIRECOREMETRICS TAGGING
try {
    cmCreateElementTag("With cat L2 links", "MeganavTest");
} catch (e) {
    // NULL
}

// JDJSSCRIPTS
// UIUX Improvement touch
jQuery(document).ready(function($) {});

// 6 & 7
// =====
// MAJOR UPDATES EXPERIMENTS AND OTHER UPDATES
// SUCH AS ADDITIONAL LIBRARY AND TEMP JS REQUESTS ACROSS THE SITE

/******/
// TWITTER TRACKING CAMPAIGN RAISED ON BASECAMP FROM AMY
// 5TH SEPTEMBER 2014 - KHALEEL ADDED BELOW
// https://basecamp.com/1872932/projects/6311741/todos/121778881
/******/

// GET URL PATH AND DISPLAY A TWITTER FEED TRACKER FOR HOMEPAGE, OR NIKE CROSSTOWN OR CONFIRMATION PAGE
var urlPageForTwitterTrack = location.pathname;

/*
HOME PAGE - JD Visits
*/
if (urlPageForTwitterTrack == '/home' || urlPageForTwitterTrack == '/home/') {
    document.write('<div style="display:none"><img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=l4sln&p_id=Twitter"/><img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=l4sln&p_id=Twitter"/></div>');
}

/*
PURCHASE PIXEL - Confirmation Page
*/
if (urlPageForTwitterTrack == '/webapp/wcs/stores/servlet/OrderOKView') {
    document.write('<div style="display:none"><img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=l4slo&p_id=Twitter"/><img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=l4slo&p_id=Twitter"/></div>');
}

/*
CTR PIXEL - Header of the CTR Page
*/
if (urlPageForTwitterTrack == '/page/nike-crosstown-running/' || urlPageForTwitterTrack == '/page/nike-crosstown-running') {
    document.write('<div style="display:none"><img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=l4sln&p_id=Twitter"/><img height="1" width="1" style="display:none;" alt="" src="//t.co/i/adsct?txn_id=l4sln&p_id=Twitter"/></div>');
}

// END TWITTER TRACKING CAMPAIGN RAISED ON BASECAMP FROM AMY

//
// CONTINUE FURTHER EXPERIMENTS AND FUNCTIONS BELOW
//

// ADD CONTENT BANNERS
// -- Hidden monetate banners on nav
// -- Khaleel Mughal
// == 8th December 2014
// == https://basecamp.com/1872932/projects/6311741/todos/141471688
// == https://basecamp.com/1872932/projects/6311741/todos/141471621

jQuery('ul#footballMenuItems').append('<li style="clear:both;display:none" class="BannerToToggleGloballyManUnited"><a href="http://www.jdsports.co.uk/featured/manchester+united"   manual_cm_re="Global-_-Header-_-dd-BigBanner-ManU" style="padding-left:25px"><img src="/images/library/2014/08.12.2014/man-utd.jpg"/></a></li>');
jQuery('ul#menMenuItems').append('<li style="clear:both;display:none" class="BannerToToggleGloballyGeneric"><a href="/men/brand/brookhaven/" manual_cm_re="Global-_-Header-_-dd-BigBanner-brookhaven" style="padding-left:25px"><img src="/images/library/2014/08.12.2014/mens.jpg"/></a></li>');
jQuery('ul#womenMenuItems').append('<li style="clear:both;display:none" class="BannerToToggleGloballyGeneric"><a href="/women/brand/brookhaven/" manual_cm_re="Global-_-Header-_-dd-BigBanner-brookhaven"  style="padding-left:25px"><img src="/images/library/2014/15.12.2014/women_top_nav_hover.jpg"/></a></li>');
jQuery('ul#kidsMenuItems').append('<li style="clear:both;display:none" class="BannerToToggleGloballyGeneric"><a href="/kids/brand/nike/" manual_cm_re="Global-_-Header-_-dd-BigBanner-kids-nike" style="padding-left:25px"><img src="/images/library/2014/08.12.2014/kids.jpg"/></a></li>');


// Get the year for the copyright text and print to the page

var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();