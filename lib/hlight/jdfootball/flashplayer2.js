// JavaScript Document

function LoadVideo(Video){
	document.getElementById ('FlashPlayer').innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
	+ 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="640" height="360" id="FLVPlayer">'
	+ '<param name="movie" value="/lib/skins/FLVPlayer_Progressive.swf" />'
	+ '<param name="salign" value="lt" />'
	+ '<param name="quality" value="high" />'
	+ '<param name="scale" value="noscale" />'
	+ '<param name="FlashVars" value="&MM_ComponentVersion=1&skinName=/lib/skins/Corona_Skin_2&streamName=/lib/hlight/jdfootball/'+Video+'&autoPlay=true&autoRewind=false" />'
	
	+ '<embed src="/lib/skins/FLVPlayer_Progressive.swf" flashvars="&MM_ComponentVersion=1&skinName=/lib/skins/Corona_Skin_2&streamName=/lib/hlight/jdfootball/'+Video
	+ '&autoPlay=true&autoRewind=false" quality="high" scale="noscale" width="640" height="360" name="FLVPlayer" salign="LT"'
	+ ' type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" />'                        
    + '</object>';
}