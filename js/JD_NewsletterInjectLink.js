/***

 * --- --- --- --- ---
 * JD Sports Fashion plc
 * IBM WebSphere Commerce Platform
 * KM - 17.3.2014
 * --- --- --- --- ---
 * #NEWSLETTER ICON POPUP
 * --- --- --- --- ---

***/	
		
// VARS
// -- Box Icon and CSS and then the actual floating box
	var str_IconPopupLink_css = 'position:absolute;top:15px;right:49px;z-index:990;background:url(/images/questionCircle.png) no-repeat scroll 0 0 rgba(0, 0, 0, 0);cursor:pointer;display:block;height:16px;margin:3px 0 0 11px;padding:0 0 4px 1px;width:16px';
	var str_IconPopupLink_css_of_hidden_box = 'box-shadow:5px 5px 10px rgba(0, 0, 0, 0.5);color:#000;margin-left:10px;margin-top:-15px;padding:13px 17px;text-align: center;width:275px;z-index:1000;display:none;position:absolute;top:-34px;right:215px;border:4px solid #BAB9B9;background:#EBEBEC'
	var str_IconPopupLink_box = '<div class="infoNewsLetterBox" style="'+str_IconPopupLink_css+'"></div>';	
	var closeBox = '<img class="closeBoxNewsLetterInfoBox" style="cursor:pointer;position:absolute;top:3px;right:3px" src="/images/closegray.png">';
	var str_IconPopupNewsletterReval_box = '<div style="width:100%;display:block;position:relative"><div class="NewsLetterInfoBoxReveal" style="'+str_IconPopupLink_css_of_hidden_box+'">'+closeBox+' By entering your email address you will be opted in to receive communication for the <a href="http://www.jdsports.co.uk/page/our-brands/?cm_re=Global-_-Footer-_-mailerBrandLinkinpopup">JD Sports Fashion group</a>. For full details on how we use your information, view our <a href="#privacypolicy" onclick="openWin(\'/lib/cs/faqs.html?iframeURL=Privacy and Security\')">privacy policy</a></div></div>';

// BUILD BOX
// -- Insert it globally on the page
	jQuery('.et-newsletter-input').before(str_IconPopupLink_box);
	jQuery('#socialBar').after(str_IconPopupNewsletterReval_box);	

// HOVER
// -- Show box on hover and hide toggle
	jQuery('.infoNewsLetterBox').click(function(){
		jQuery('.NewsLetterInfoBoxReveal').fadeIn();
	});
	jQuery('.closeBoxNewsLetterInfoBox').click(function(){
		jQuery('.NewsLetterInfoBoxReveal').fadeOut();
	});