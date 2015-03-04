jQuery.noConflict();
jQuery(document).ready(function () {
	
	
	
	
	
	
	
	jQuery("#SillhouetteGuide").fadeOut(0);
	jQuery("#ninefifty").fadeOut(0);
	jQuery("#nineForty").fadeOut(0);
	jQuery("#fiftyninefiftyEars").fadeOut(0);
	jQuery("#fiftyninefifty").fadeOut(0);
	jQuery("#thirtyninethirty").fadeOut(0);
	jQuery("#History").fadeOut(0);
	jQuery("#TristanEaton").fadeOut(0);
	jQuery("#OsamuKoyama").fadeOut(0);
	jQuery("#MasonGranger").fadeOut(0);
	jQuery("#StevieWilliams").fadeOut(0);
	jQuery("#SamAdams").fadeOut(0);
	jQuery("#Nerd").fadeOut(0);
	
	
	
	
	
	
	
	
	jQuery('#Menu').hover(
		function() {
			jQuery("#Menu").stop(false, false).animate({width:'156px'}, 500);
			},
		function() {
			jQuery("#Menu").stop(false, false).animate({width:'0px'}, 500);
		}
	);
	jQuery('#Menu').delay(1000).animate({width:'0px'}, 700);
	
	
	jQuery('#MenuTab01').hover(
		function() {
			jQuery("#MenuTab01 img").fadeIn(300);
			
			},
		function() {
			jQuery("#MenuTab01 img").fadeOut(300);
		}
	);
	
	
	jQuery('#MenuTab01').click(
		function() {
			jQuery("#Flagbearers").delay(500).fadeIn(300);
			jQuery("#TristanEaton").fadeOut(300);
			jQuery("#OsamuKoyama").fadeOut(300);
			jQuery("#MasonGranger").fadeOut(300);
			jQuery("#StevieWilliams").fadeOut(300);
			jQuery("#SamAdams").fadeOut(300);
			jQuery("#Nerd").fadeOut(300);
			jQuery("#SillhouetteGuide").fadeOut(300);
			jQuery("#ninefifty").fadeOut(300);
			jQuery("#nineForty").fadeOut(300);
			jQuery("#fiftyninefiftyEars").fadeOut(300);
			jQuery("#fiftyninefifty").fadeOut(300);
			jQuery("#thirtyninethirty").fadeOut(300);
			jQuery("#History").fadeOut(300);
			
			}
	);
	
	jQuery('#MenuTab02').click(
		function() {
			jQuery("#SillhouetteGuide").delay(500).fadeIn(300);
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#TristanEaton").fadeOut(300);
			jQuery("#OsamuKoyama").fadeOut(300);
			jQuery("#MasonGranger").fadeOut(300);
			jQuery("#StevieWilliams").fadeOut(300);
			jQuery("#SamAdams").fadeOut(300);
			jQuery("#Nerd").fadeOut(300);
			jQuery("#ninefifty").fadeOut(300);
			jQuery("#nineForty").fadeOut(300);
			jQuery("#fiftyninefiftyEars").fadeOut(300);
			jQuery("#fiftyninefifty").fadeOut(300);
			jQuery("#thirtyninethirty").fadeOut(300);
			jQuery("#History").fadeOut(300);
			
			}
	);
	
	jQuery('#MenuTab03').click(
		function() {
			jQuery("#History").delay(500).fadeIn(300);
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#TristanEaton").fadeOut(300);
			jQuery("#OsamuKoyama").fadeOut(300);
			jQuery("#MasonGranger").fadeOut(300);
			jQuery("#StevieWilliams").fadeOut(300);
			jQuery("#SamAdams").fadeOut(300);
			jQuery("#Nerd").fadeOut(300);
			jQuery("#ninefifty").fadeOut(300);
			jQuery("#nineForty").fadeOut(300);
			jQuery("#fiftyninefiftyEars").fadeOut(300);
			jQuery("#fiftyninefifty").fadeOut(300);
			jQuery("#thirtyninethirty").fadeOut(300);
			jQuery("#SillhouetteGuide").fadeOut(300);
			
			}
	);
	
	jQuery('#MenuTab02').hover(
		function() {
			jQuery("#MenuTab02 img").fadeIn(300);
			
			},
		function() {
			jQuery("#MenuTab02 img").fadeOut(300);
		}
	);
	
	jQuery('#MenuTab03').hover(
		function() {
			jQuery("#MenuTab03 img").fadeIn(300);
			
			},
		function() {
			jQuery("#MenuTab03 img").fadeOut(300);
		}
	);
	
	
	

	jQuery('#Thumb01').hover(
		function() {
			jQuery("#ThumbTristanOver").fadeIn(200);
			},
		function() {
			jQuery("#ThumbTristanOver").fadeOut(100);
			}
	);
	jQuery("#TristanEaton").fadeOut(0);
	
	
	
	
	jQuery('#Thumb01').click(
		function() {
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#TristanEaton").delay(500).fadeIn(300);
			jQuery("#ThumbTristanOver").fadeOut(100);
			}
	);
	
	
	
	
	
	
	jQuery('#Thumb02').hover(
		function() {
			jQuery("#ThumbOsamuOver").fadeIn(200);
			},
		function() {
			jQuery("#ThumbOsamuOver").fadeOut(100);
			}
	);
	jQuery("#OsamuKoyama").fadeOut(0);
	
	jQuery('#Thumb02').click(
		function() {
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#OsamuKoyama").delay(500).fadeIn(300);
			jQuery("#ThumbOsamuOver").fadeOut(100);
			}
	);
	
	
	
	jQuery('#Thumb03').hover(
		function() {
			jQuery("#ThumbMasonOver").fadeIn(200);
			},
		function() {
			jQuery("#ThumbMasonOver").fadeOut(100);
			}
	);
	jQuery("#MasonGranger").fadeOut(0);
	
	jQuery('#Thumb03').click(
		function() {
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#MasonGranger").delay(500).fadeIn(300);
			jQuery("#ThumbMasonOver").fadeOut(100);
			}
	);
	
	
	
	jQuery('#Thumb04').hover(
		function() {
			jQuery("#ThumbStevieOver").fadeIn(200);
			},
		function() {
			jQuery("#ThumbStevieOver").fadeOut(100);
			}
	);
	jQuery("#StevieWilliams").fadeOut(0);
	
	jQuery('#Thumb04').click(
		function() {
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#StevieWilliams").delay(500).fadeIn(300);
			jQuery("#ThumbStevieOver").fadeOut(100);
			}
	);
	
	
	
	jQuery('#Thumb05').hover(
		function() {
			jQuery("#ThumbSamOver").fadeIn(200);
			},
		function() {
			jQuery("#ThumbSamOver").fadeOut(100);
			}
	);
	jQuery("#SamAdams").fadeOut(0);
	
	jQuery('#Thumb05').click(
		function() {
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#SamAdams").delay(500).fadeIn(300);
			jQuery("#ThumbSamOver").fadeOut(100);
			}
	);
	
	
	
	jQuery('#Thumb06').hover(
		function() {
			jQuery("#ThumbNerdOver").fadeIn(200);
			},
		function() {
			jQuery("#ThumbNerdOver").fadeOut(100);
			}
	);
	jQuery("#Nerd").fadeOut(0);
	
	jQuery('#Thumb06').click(
		function() {
			jQuery("#Flagbearers").fadeOut(300);
			jQuery("#Nerd").delay(500).fadeIn(300);
			jQuery("#ThumbNerdOver").fadeOut(100);
			}
	);
	
	
	

	
	
	jQuery('.Back').click(
		function() {
			jQuery("#Flagbearers").delay(500).fadeIn(300);
			jQuery("#TristanEaton").fadeOut(300);
			jQuery("#OsamuKoyama").fadeOut(300);
			jQuery("#MasonGranger").fadeOut(300);
			jQuery("#StevieWilliams").fadeOut(300);
			jQuery("#SamAdams").fadeOut(300);
			jQuery("#Nerd").fadeOut(300);
		}
	);
	
	
	jQuery('#Cap01').hover(
		function() {
			jQuery("#Cap01").stop(false, false).animate({opacity: 1.0}, 200);
			jQuery("#Badge01").stop(false, false).animate({top: "-133px"}, 400).animate({top: "-110px"}, 200);
		},
		function() {
		jQuery("#Cap01").stop(false, false).animate({opacity: 0.7}, 200);
		jQuery("#Badge01").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	jQuery('#Cap01').click(
		function() {
			jQuery("#SillhouetteGuide").fadeOut(300);
			jQuery("#ninefifty").delay(500).fadeIn(300);
			jQuery("#Cap01").stop(false, false).animate({opacity: 0.7}, 200);
			jQuery("#Badge01").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	
	
	
	jQuery('#Cap02').hover(
		function() {
			jQuery("#Cap02").stop(false, false).animate({opacity: 1.0}, 200);
			jQuery("#Badge02").stop(false, false).animate({top: "-133px"}, 400).animate({top: "-110px"}, 200);
		},
		function() {
		jQuery("#Cap02").stop(false, false).animate({opacity: 0.7}, 200);
		jQuery("#Badge02").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	jQuery('#Cap02').click(
		function() {
			jQuery("#SillhouetteGuide").fadeOut(300);
			jQuery("#nineForty").delay(500).fadeIn(300);
			jQuery("#Cap02").stop(false, false).animate({opacity: 0.7}, 200);
			jQuery("#Badge02").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	
	jQuery('#Cap03').hover(
		function() {
			jQuery("#Cap03").stop(false, false).animate({opacity: 1.0}, 200);
			jQuery("#Badge03").stop(false, false).animate({top: "-133px"}, 400).animate({top: "-110px"}, 200);
		},
		function() {
		jQuery("#Cap03").stop(false, false).animate({opacity: 0.7}, 200);
		jQuery("#Badge03").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	jQuery('#Cap03').click(
		function() {
			jQuery("#SillhouetteGuide").fadeOut(300);
			jQuery("#fiftyninefiftyEars").delay(500).fadeIn(300);
			jQuery("#Cap03").stop(false, false).animate({opacity: 0.7}, 200);
			jQuery("#Badge03").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	jQuery('#Cap04').hover(
		function() {
			jQuery("#Cap04").stop(false, false).animate({opacity: 1.0}, 200);
			jQuery("#Badge04").stop(false, false).animate({top: "-133px"}, 400).animate({top: "-110px"}, 200);
		},
		function() {
		jQuery("#Cap04").stop(false, false).animate({opacity: 0.7}, 200);
		jQuery("#Badge04").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	jQuery('#Cap04').click(
		function() {
			jQuery("#SillhouetteGuide").fadeOut(300);
			jQuery("#fiftyninefifty").delay(500).fadeIn(300);
			jQuery("#Cap04").stop(false, false).animate({opacity: 0.7}, 200);
			jQuery("#Badge04").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	
	jQuery('#Cap05').hover(
		function() {
			jQuery("#Cap05").stop(false, false).animate({opacity: 1.0}, 200);
			jQuery("#Badge05").stop(false, false).animate({top: "-133px"}, 400).animate({top: "-110px"}, 200);
		},
		function() {
		jQuery("#Cap05").stop(false, false).animate({opacity: 0.7}, 200);
		jQuery("#Badge05").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	jQuery('#Cap05').click(
		function() {
			jQuery("#SillhouetteGuide").fadeOut(300);
			jQuery("#thirtyninethirty").delay(500).fadeIn(300);
			jQuery("#Cap05").stop(false, false).animate({opacity: 0.7}, 200);
			jQuery("#Badge05").stop(false, false).animate({top: "0px"}, 200);
		}
	);
	
	
	jQuery('.CapBack').click(
		function() {
			jQuery("#SillhouetteGuide").delay(500).fadeIn(300);
			jQuery("#ninefifty").fadeOut(300);
			jQuery("#nineForty").fadeOut(300);
			jQuery("#fiftyninefiftyEars").fadeOut(300);
			jQuery("#fiftyninefifty").fadeOut(300);
			jQuery("#thirtyninethirty").fadeOut(300);
		}
	);
	
	
	
	
	
	
	
	
	
	
	
	
	

});
