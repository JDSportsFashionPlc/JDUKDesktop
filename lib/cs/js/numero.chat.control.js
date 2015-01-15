var NUMERO_Chat = NUMERO_Chat || {};

(function($) {
	
	NUMERO_Chat.Window.defaults.width = 493;
	NUMERO_Chat.Window.defaults.height = 445;
	
	var win_chat = new NUMERO_Chat.Window({
		url : NUMERO_Chat.Service.defaults.websuite_url + '/chat/window',
		data: NUMERO_Chat.chat_opts.data
	});	
	
	var win_callback = new NUMERO_Chat.Window({
		url : NUMERO_Chat.Service.defaults.websuite_url + '/callback',
		data: NUMERO_Chat.chat_opts.data
	});	
	
	var chat = new NUMERO_Chat.Service('chat');
	
	chat.call('status',function(res, ep) {
		try
		{
		  res.status
		}	
		catch(err)
		{
		  txt="There was an error on this page.\n\n";
		  txt+="Error description: " + err.description + "\n\n";
		  txt+="Click OK to continue.\n\n";
		  alert(txt);
		}
		
		//$('#debug').append('<pre>' + JSON.stringify(res) + '</pre>');
		
		if (res.status) {
			// Chat Status is true so work some magic
			
			$('#chat .ready').show();
			$('#chat .notready').hide();
			
			/**
			 * Chat in an iframe example
			 */
			$('#test-chat-default').hide();
			var iframe = document.createElement('iframe');
			iframe.src = NUMERO_Chat.Service.defaults.websuite_url + '/chat/windowi?brand=JD&env=jd'
			iframe.frameBorder = '0';
			iframe.width ='100%';
			iframe.height ='600';
			iframe.scrolling = 'no';
			iframe.allowtransparency='true';
			iframe.id='ni-frame';
			document.getElementById('test-chat-iframe-container').appendChild(iframe );
		}	
		else {
			// Chat Status is false so work some different magic
			$('#chat .ready').hide();
			$('#chat .notready').show();
			
			/**
			 * Chat in an iframe example
			 */
			 $('#test-chat-default').hide();
			$('#test-chat-unavailable').show();
		}
		
		$(".checkingAvailability").hide();
		
	},
	NUMERO_Chat.serv_opts
	);
	
	$('#chat_now').click(function() {
		win_chat.open();
	});
	
	$('#callback').click(function() {
		win_callback.open();
	});
	
}(NUMERO_Chat.jQuery));

/*(function($) {
	$('#debugger').click(function() {
		$('#debug').toggle();
		$('#expand').toggle();
		$('#hide').toggle();
	})
}(NUMERO_Chat.jQuery));
*/