/***
* --- --- --- --- ---
* JD Sports Fashion plc
* IBM WebSphere Commerce
* Khaleel Mughal
* --- --- --- --- ---
* #HOMEJSFILE
* --- --- --- --- ---
***/

// JD POPUP FUNCTION
jQuery.noConflict();
function PopUp(N) {
    newWindow = window.open(N, 'pop', 'toolbar=no,menubar=no,resizable=no,scrollbars=yes,status=no,location=no,width=700,height=500');
  }
jQuery(function() {
  // NEWSLETTER SIGNUP FORM (attach JD_to ETSubscriberKey)
  jQuery("#subscribeForm").submit(function() {
    var emailValue = jQuery(" input[name='Email Address']").val();
    jQuery('#subscribeForm input[name="ETSubscriberKey"]').val("JD_" + emailValue);
    jQuery('#subscribeForm').submit();
    return false;
  });
});
jQuery(function($) {
  var xpathname = window.location.pathname;
  if (xpathname == '/home' || xpathname == '/home/') {
    $('body').addClass('home');
  }
});
jQuery(document).ready(function($) {
  // JSON
  // -- Load the gallery and page assets through JSON
  jQuery.getJSON("/html/home.json?v=" + Math.random(), function(x) {
    // VARS
    // -- For cleaner calls below
    var galHTML = '';
    var agalHTML = ''
    var i = 0;
    // BIG BOXES ACCESSORIES
    // -- There is some animation hovers applied to this JSON below, same comment name above
    jQuery.each(x.Page[0].TopXmasGifts, function(key, val) {
      agalHTML += '<div class="hookaccessslide ultra gotham" id="hookAccessElement' + val.id + '">';
      agalHTML += '<a href="/product/' + val.picplu + '" style="text-decoration:none" onclick="cmCreateManualLinkClickTag(' + "'" + 'cm_re=USPBottom-_-CYL-Scroll-Accessories-_-' + val.picplu + "'" + ');"><img src="http://i1.adis.ws/t/jpl/jd_product_list?plu=jd_' + val.picplu + '_a&wid=137&hei=153&resmode=sharp&qlt=80"/>'
      if (val.wasprice == "") {
        if (val.product1 == "") {
          agalHTML += '<div class="proddetails gotham"><br>' + val.brand + '<br>' + val.product + '<br>&#163;' + val.currentprice + '</div>';
        } else {
          agalHTML += '<div class="proddetails gotham"><br>' + val.brand + '<br>' + val.product + '<br>' + val.product1 + ' &#163;' + val.currentprice + '</div>';
        }
      } else {
        if (val.product1 == "") {
          agalHTML += '<div class="proddetails gotham"><br>' + val.brand + '<br>' + val.product + '<br>&#163;' + val.wasprice + ' - &#163;' + val.currentprice + '</div>';
        } else {
          agalHTML += '<div class="proddetails gotham"><br>' + val.brand + '<br>' + val.product + '<br>' + val.product1 + '&#163;' + val.wasprice + ' - &#163;' + val.currentprice + '</div>';
        }
      }
      agalHTML += '</a></div>';
    });
    agalHTML += '';
    jQuery('.hookaccess_gallery').append($(agalHTML));
    // MAKE GALLERIES   
    // -- USES OWL GALLERY
    jQuery(".hookaccess_gallery").owlCarousel({
      loop: true,
      items: 6,
      autoplay: false,
      margin: 14,
      navigation: true
    });
  });
});











jQuery("#sliderHome1").owlCarousel({
  autoplay: false,
  navigation: false,
  slideSpeed: 100,
  singleItem: true,
  items: 1,
  loop: false,
  navRewind: false,
  nav: false,
  dots: false,
});
jQuery("#sliderHome2").owlCarousel({
  navigation: true,
  slideSpeed: 100,
  singleItem: true,
  items: 1,
  loop: false,
  navRewind: false,
  nav: true,
  dots: false
});
/*
jQuery(function($) {var counter = 0;var hicap = jQuery("#sliderHome2 .item").length - 1;
$("span.spot-title strong.footwear").addClass("newColor2");
$('#sliderHome2 .owl-prev').addClass('owl-prev-white');
$('#sliderHome2 .owl-next').addClass('owl-next-white');
$("#middle-spots-wrap #sliderHome2 .owl-prev").click(function(){
counter--;console.log(counter);cap();check();});
$("#middle-spots-wrap #sliderHome2 .owl-next").click(function() {   
counter++;console.log(counter);highcap();check();});
function check () {if(counter == hicap || counter == 1) {
$('#sliderHome2 .owl-prev-white').addClass('owl-prev');
$('#sliderHome2 .owl-next-white').addClass('owl-next');
$('#sliderHome2 .owl-prev').removeClass('owl-prev-white');
$('#sliderHome2 .owl-next').removeClass('owl-next-white');
$("span.spot-title strong.footwear").removeClass("newColor2");
$("span.spot-title strong.footwear").addClass("newColor");
} else if (counter == 0) {$('#sliderHome2 .owl-prev').addClass('owl-prev-white');
$('#sliderHome2 .owl-next').addClass('owl-next-white');
$('#sliderHome2 .owl-prev').removeClass('owl-prev');
$('#sliderHome2 .owl-next').removeClass('owl-next');
$("span.spot-title strong.footwear").removeClass("newColor");
$("span.spot-title strong.footwear").addClass("newColor2");
} else  {$('#sliderHome2 .owl-prev').addClass('owl-prev');
$('#sliderHome2 .owl-next').addClass('owl-next');
$('#sliderHome2 .owl-prev').removeClass('owl-prev-white');
$('#sliderHome2 .owl-next').removeClass('owl-next-white');
$("span.spot-title strong.footwear").removeClass("newColor");
$("span.spot-title strong.footwear").removeClass("newColor2");
}}function cap () {if(counter < 0) {counter = 0;}}function highcap () {if(counter > hicap) {counter = hicap;}}});
*/