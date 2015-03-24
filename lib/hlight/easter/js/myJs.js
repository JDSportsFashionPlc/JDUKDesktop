jQuery(document).ready(function(e) {
  function s() {
    if (a = jQuery("ul#the-car > li").length, n = "", n > 0) {
      r = jQuery("ul#the-car").find("li.uid-" + n).index()
    } else r = 0;
    if (a > 1 && (t = jQuery("ul#the-car"), roundabout_information = jQuery("#prodThumb ul"), o = jQuery(window).width() < 623 ? !1 : !0, t.roundabout({
        btnNext: ".roundabout-next",
        btnPrev: ".roundabout-prev",
        enableDrag: o,
        minOpacity: 0,
        minScale: .7,
        triggerBlurEvents: !0,
        responsive: !0,
        triggerFocusEvents: !0,
        startingChild: r
      }), t.roundabout("setTilt", -1), t.add(roundabout_information).touchwipe({
        wipeLeft: function() {
          jQuery(".roundabout-next").click()
        },
        wipeRight: function() {
          jQuery(".roundabout-prev").click()
        },
        preventDefaultEvents: !1
      }), jQuery(document).keydown(function(e) {
        return 37 == e.which ? (jQuery(".roundabout-prev").click(), !1) : 39 == e.which ? (jQuery(".roundabout-next").click(), !1) : void 0
      }), jQuery("ul#the-car li").focus(function() {
        r = t.roundabout("getChildInFocus"), i(r)
      }), i(r)), c) {
      var e = 25,
        s = 0;
      jQuery("li.views-row .views-field-field-full-length-picture img", d).each(function() {
        s += e;
        var i = jQuery(this);
        setTimeout(function() {
          var e = i.attr("data-src");
          if (e) {
            var s = i.attr("src");
            i.attr("data-original-src", s).attr("src", e).removeAttr("data-src").addClass("carousel-upscaled")
          }
        }, s, i)
      })
    }
    jQuery("ul#the-car").append('<div id="faderr"></div>').css("opacity", "1")
  }

  function i(e) {
    jQuery("#prodThumb ul li").hide(), jQuery("#prodThumb ul").find("li.views-row-" + (e + 1)).show()
  }
  jQuery(".myThumb").each(function() {
    jQuery(this).append('<span class="shopNow">Shop Now</span><span class="closer"></span>')
  }), jQuery("ul#the-car").prepend('<span id="touchBlocker"></span>');
  var t, a, r, n, o, u = jQuery(".sliderr").html(),
    d = jQuery(".sliderr"),
    l = u,
    c = !0;
  d.html(l), s(), jQuery(".myThumb").each(function() {
    e(this).addClass("disabled"), e(this).click(function() {
      return e(this).hasClass("disabled") ? (e(this).addClass("actions").removeClass("disabled bigger"), !1) : void 0
    }), e(this).on("touchstart", function() {
      return e(this).hasClass("disabled") ? (e(this).addClass("actions").removeClass("disabled bigger"), !1) : void 0
    }), e(this).hasClass("disabled") && e(this).hover(function() {
      e(this).not(".actions").addClass("bigger")
    }, function() {
      e(this).removeClass("bigger")
    }), e(this).find("closer").bind("click", function() {
      e(this).parent().removeClass("disabled"), e(this).parent().removeClass("actions").addClass("disabled"), console.log("closer clicked")
    })
  }), jQuery("body, #easter, .roundabout-next, .roundabout-prev, ul#the-car li img").on("click", function() {
    e(".myThumb").hasClass("actions") && (e(".myThumb").removeClass("disabled"), e(".myThumb").removeClass("actions").addClass("disabled"))
  }), jQuery(".myThumb").on("click touchstart", function() {
    e(this).siblings().hasClass("actions") && (e(this).siblings().removeClass("disabled"), e(this).siblings().removeClass("actions").addClass("disabled"))
  })
});



jQuery(document).ready(function() {	

		

		function hideTheCSS(){
			if ( jQuery('.roundabout-moveable-item').css("opacity") == "0.63" )   {
				console.log('animation');
			}
		}

    jQuery('.roundabout-prev,.roundabout-next,.sliderr').click(function() {   
	 	hideTheCSS(); 
	 });
	 
	hideTheCSS();
	 
});








