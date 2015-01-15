	// DETECT THE LIVECHAT API
	// -- Loads from SalesForce
	if (!window._laq) {
		 window._laq = [];
	}
	
	// ONLINE OR OFFLINE
	// -- VARS for online and offline DIV IDs
	window._laq.push(function() {
    liveagent.showWhenOnline('57320000000L0nR', document.getElementById('liveagent_button_online_57320000000L0nR'));
    liveagent.showWhenOffline('57320000000L0nR', document.getElementById('liveagent_button_offline_57320000000L0nR'));
	});
	
	// Append the URL
	jQuery('#liveagent_button_online_57320000000L0nR a').attr('href', '/lib/cs/live-chat.html?endpoint=https%3A%2F%2F7rvy.la2w2.salesforceliveagent.com%2Fcontent%2Fs%2Fchat%3Flanguage%3Den_US%23deployment_id%3D57220000000KzzV%26org_id%3D00D20000000oqHe%26button_id%3D57320000000L0nR');