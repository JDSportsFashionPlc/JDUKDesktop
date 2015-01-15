

// #MODULE: core
// #PACKAGE: NUMERO.chat

if (!window['jQuery']) {
	throw ("Could not detect jQuery. Mint could not be initialised.");
}

var NUMERO_Chat = NUMERO_Chat || {};
NUMERO_Chat.jQuery = jQuery;
jQuery.noConflict(true);
// #MODULE: utils
// #PACKAGE: NUMERO.chat
// #DEPENDS: core

var NUMERO_Chat = NUMERO_Chat || {};

(function ($) {	
	NUMERO_Chat.utils = {
			
		uniqueId : (function () {
			var unique = 0;
			
			return function () {
				unique = unique + 1;
				return unique;
			};
		}()),
		
		//Type checking usefullness
		isNaN : function (mixed) {
			return isNaN(mixed) ? (mixed !== mixed) : false;
		},
		isSet : function (mixed) {
			return (!NUMERO_Chat.utils.isNull(mixed) && !NUMERO_Chat.utils.isUndef(mixed));
		},
		isUndef : function (mixed) {
			var undef;
			return (mixed === undef);
		},
		isNull : function (mixed) {
			return (mixed === null);
		},			
		isString : function (mixed) {
			if (!NUMERO_Chat.utils.isSet(mixed)) {
				return false;
			}
			return mixed.toLowerCase ? true : false;
		},
		isNumber : function (mixed) {
			if (!NUMERO_Chat.utils.isSet(mixed)) {
				return false;
			}
			if (NUMERO_Chat.utils.isNaN(mixed)) {
				return false;
			}
			return mixed.toExponential ? true : false;			
		},
		isFinite : function (mixed) {
			if (!NUMERO_Chat.utils.isNumber(mixed)) {
				return false;
			}
			return !(mixed === Infinity || mixed === -Infinity);
		},
		isFloat : function (mixed) {
			if (!NUMERO_Chat.utils.isNumber(mixed)) {
				return false;
			}
			if (!NUMERO_Chat.utils.isFinite(mixed)) {
				return false;
			}
			return (mixed % 1) ? true : false;
		},
		isInt : function (mixed) {
			if (!NUMERO_Chat.utils.isNumber(mixed)) {
				return false;
			}
			if (!NUMERO_Chat.utils.isFinite(mixed)) {
				return false;
			}
			return (mixed % 1) ? false : true;
		},
		isBool : function (mixed) {
			if (!NUMERO_Chat.utils.isSet(mixed)) {
				return false;
			}
			return (mixed === true || mixed === false);
		},
		isFunction : function (mixed) {
			if (!NUMERO_Chat.utils.isSet(mixed)) {
				return false;
			}
			return (mixed.call || mixed.apply) ? true : false;
		},
		isArray : function (mixed) {
			if (!NUMERO_Chat.utils.isSet(mixed)) {
				return false;
			}
			return (mixed.pop) ? true : false;
		},
		isObject : function (mixed) {
			if (
					!NUMERO_Chat.utils.isSet(mixed) ||
					NUMERO_Chat.utils.isArray(mixed) ||
					NUMERO_Chat.utils.isString(mixed) ||
					NUMERO_Chat.utils.isNumber(mixed) ||
					NUMERO_Chat.utils.isBool(mixed) ||
					NUMERO_Chat.utils.isNaN(mixed) ||
					NUMERO_Chat.utils.isFunction(mixed)
				) 
			{
				return false;
			}
			
			return mixed.isPrototypeOf ? true : false;
		}
	};
	
}(NUMERO_Chat.jQuery));
// #MODULE: event
// #PACKAGE: NUMERO.chat
// #DEPENDS: core, utils

var NUMERO_Chat = NUMERO_Chat || {};

(function ($) {

	NUMERO_Chat.Event = function (name, args) {		
		
		var that, stopped;
		
		that = this;		
		stopped = false; 
		
		this.getType = function () {
			return name;
		};

		this.getArgs = function () {
			return args;
		};
		
		this.stop = function () {
			stopped = true;
		};
		
		this.isStopped = function () {
			return stopped;
		};
	};
	
}(NUMERO_Chat.jQuery));
// #MODULE: jsonp
// #PACKAGE: NUMERO.chat
// #DEPENDS: core, utils

var NUMERO_Chat = NUMERO_Chat || {};

(function($) {
	
	NUMERO_Chat.CrossDomainConnector = function() {		
		
		var that, endpoints;
		
		that = this;
		
		endpoints = {};
	
		this.receive = {};
		
		this.getInstance = function () {
			return this;
		};
		
		this.registerEndpoint = function (endpoint, url) {
			endpoints[endpoint] = url;
		};
		
		this.getEndpointUrl = function (endpoint) {
			return endpoints[endpoint] || false;
		};	
		
		this.get = function (endpoint, data, callback) {			
			
			var ident;
			
			if (NUMERO_Chat.utils.isFunction(data)) {
				callback = data;
				data = {};
			}
			
			data = data || {};
			
			if (!endpoints[endpoint]) {
				throw ("Cannot call unregistered endpoint " + endpoint);
			}
			
			ident = endpoint + NUMERO_Chat.utils.uniqueId();
			
			this.receive[ident] = function (data) {
				callback(data);
				delete that.receive[ident];
			};
						
			$.ajax({
				url : endpoints[endpoint],
				data : data,
				dataType : 'jsonp',
				jsonpCallback : "NUMERO_Chat.CrossDomainConnector.receive." + ident
			});			
		};
	};
	
	NUMERO_Chat.CrossDomainConnector = new NUMERO_Chat.CrossDomainConnector();
	
}(NUMERO_Chat.jQuery));
// #MODULE: window
// #PACKAGE: NUMERO.chat
// #DEPENDS: core, utils

var NUMERO_Chat = NUMERO_Chat || {};

(function ($) {
	NUMERO_Chat.Window = function (options) {
		
		var that, opt, session, iframe, loading;
		
		that = this;
		
		options = options || {};		
		
		opt = $.extend({}, NUMERO_Chat.Window.defaults, options);
		
		session = false;
		loading = false;
		
		this.open = function () {
			
			var url, name;
			
			if (session) {
				return session.focus();
			}
			
			if (loading) {
				return false;
			}
			
			loading = true;
			
			name = opt.name + NUMERO_Chat.utils.uniqueId();
			
			url = opt.url + '?' + $.param(opt.data);
			
			session = window.open(url, name, 'height=' + opt.height + ',width=' + opt.width + ',location=no,menubar=no,resizable=no,scrollbars=no,status=no,toolbar=no');
			
			if (!session) {
				throw ("Failed to instanciate popup window.");
			}
			
			session.onunload = function () {
				opt.onclose.apply(that);
				session = false;
			};
			
			loading = false;
			
			opt.onopen.apply(that);
		};
		
		this.close = function () {
			if (!session) {
				return;
			}
			session.close();
			opt.onopen.apply(that);
		};
	};
	
	NUMERO_Chat.Window.defaults = {
		'url' : false,
		'name' : 'popupwindow',
		'data' : {},
		'height' : 650,
		'width' : 452,
		'onclose' : function () {},
		'onopen' : function () {}
	};
	
}(NUMERO_Chat.jQuery));
// #MODULE: event_manager
// #PACKAGE: NUMERO.chat
// #DEPENDS: core, event, utils

var NUMERO_Chat = NUMERO_Chat || {};

(function ($) {
	
	NUMERO_Chat.eventManager = function () {
		
		var that, utils, events, observers, trigger, bind;
		
		that = this;		
		utils = NUMERO_Chat.utils;		 
		
		this.getInstance = function () {
			return this;
		};
		
		events = {};
		observers = {};		
		
		trigger = function (ident, event, args) {
			
			var handlers, e;
			
			if (!events[ident] || !events[ident][event]) {
				throw ("Error calling event handler. Event " + event + " or identifier " + ident + " not defined.");
			}
			
			handlers = observers[ident][event];  
			
			if (!handlers) {
				return;
			}
			
			e = new NUMERO_Chat.event(event, args);
		
			$.each(handlers, function (i, callee) {
				callee.callback.apply(callee.context, e);
				if (e.isStopped()) {
					return false;
				}
			});			
			
			args.unshift(e);
		};
		
		bind = function (ident, event, callback, context) {
			if (!events[ident] || !events[ident][event]) {
				throw ("Error setting event handler. Event " + event + " or identifier " + ident + " not defined.");
			}
			
			observers[ident][event] = observers[ident][event] || [];
			
			observers[ident][event].push({
				callback : callback,
				context : context
			});
		};
		
		this.makeObservable = function (ident, obj, events) {
			
			$.each(function (i, event) {
				events[ident][event] = true; 
			});
			
			$.extend(obj, {
				on : function (event, callback, context) {
					context = context || obj;				
					bind(ident, event, callback, context);
				},
				trigger : function (event, args) {
					trigger(ident, event, args);					
				}
			});			
		};
	};
	
	NUMERO_Chat.eventManager = new NUMERO_Chat.eventManager();
	
}(NUMERO_Chat.jQuery));
// #MODULE: service
// #PACKAGE: NUMERO.chat
// #DEPENDS: core, jsonp, utils

var NUMERO_Chat = NUMERO_Chat || {};

(function ($) {
	
	NUMERO_Chat.Service = function (service,options) {
		
		if (!service) { 
			throw ("No service provided for NUMERO_Chat.service");
		}
		
		var that, methods, opt, jsonp, call;
		
		that = this;
		options = options || {};
		
		opt = $.extend({}, NUMERO_Chat.Service.defaults, options);
		
		jsonp = NUMERO_Chat.CrossDomainConnector.getInstance();
		
		this.call = function (method, data, add_data, callback, error) {
			
			if (error == null) {
				error = function() {};
			}
			
			if (NUMERO_Chat.utils.isFunction(data)) {
				callback = data;
				//data = {};
				data = add_data;
			}
			
			var ep = 'numero_service_' + service + '_' + method;
			jsonp.registerEndpoint(ep, opt.websuite_url + '/services/' + service + '/' + method);
			
			var failed = false;
			
			var timer = setTimeout(function() {
				failed = true;
				error("Call to service '" + service + "' and method '" + method + "' failed.");
				return;
			},opt.request_timeout);
			
			jsonp.get(ep,data,function(data) {
				if (failed) return;
				clearTimeout(timer);
				if (!data.response) {
					error("Unrecognised response format.");
					return;
				}
				callback.apply(that,[data.response]);				
			});
		};
				
		this.setOptions = function (set_options) {
			options = set_options || {};
		};
	
	};
	
	NUMERO_Chat.Service.defaults = {
		'websuite_url' 		: 'http://saserver1:8080/websuite',
		'request_timeout'	: 10000
	};
	
	NUMERO_Chat.Service.setDefault = function(setting,value) {
		if (!NUMERO_Chat.Service.defaults[setting]) {
			throw ("Failed trying to set unknown property '" + setting + "'.");
		}
		NUMERO_Chat.Service.defaults[setting] = value;
	};

}(NUMERO_Chat.jQuery));
