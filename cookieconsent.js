(function (cc) {

  // Stop from running again, if accidently included more than once.
  if (cc.hasInitialised) {
    return;
  }

  cc.hasInitialised = true;

  /* Constants */

  // Name of cookie to be set when dismissed
  cc.DISMISSED_COOKIE = 'cookieconsent_dismissed';

  // The path to built in themes
  // Note: Directly linking to a version on the CDN like this is horrible, but it's less horrible
  //       than people downloading the code then discovering that their CSS bucket disappeared
  cc.THEME_BUCKET_PATH = '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/';

  cc.TRANSITION_END = 'webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd';

  /* Helper methods */

  cc.util = {

    isArray: function (obj) {
      var proto = Object.prototype.toString.call(obj);
      return proto == '[object Array]';
    },

    isObject: function (obj) {
      return Object.prototype.toString.call(obj) == '[object Object]';
    },

    trim: function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    },

    each: function (arr, callback, /* optional: */ context, force) {
      if (this.isObject(arr) && !force) {
        for (var key in arr) {
          if (arr.hasOwnProperty(key)) {
            callback.call(context, arr[key], key, arr);
          }
        }
      } else {
        for (var i = 0, ii = arr.length; i < ii; i++) {
          callback.call(context, arr[i], i, arr);
        }
      }
    },

    merge: function (obj1, obj2) {
      if (!obj1) return;
      this.each(obj2, function (val, key) {
        if (this.isObject(val) && this.isObject(obj1[key])) {
          this.merge(obj1[key], val);
        } else {
          obj1[key] = val;
        }
      }, this);
    },

    bind: function (func, context) {
      return function () {
        return func.apply(context, arguments);
      };
    },

    /*
     find a property based on a . separated path.
     i.e. queryObject({details: {name: 'Adam'}}, 'details.name') // -> 'Adam'
     returns null if not found
     */
    queryObject: function (object, query) {
      var queryPart;
      var i = 0;
      var head = object;
      query = query.split('.');
      while ((queryPart = query[i++]) && head.hasOwnProperty(queryPart) && (head = head[queryPart])) {
        if (i === query.length) return head;
      }
      return null;
    },

    setCookie: function (name, value, expiryDays, domain, path) {
      expiryDays = expiryDays || 365;

      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiryDays);

      var cookie = [
        name + '=' + value,
        'expires=' + exdate.toUTCString(),
        'path=' + path || '/'
      ];

      if (domain) {
        cookie.push(
          'domain=' + domain
        );
      }

      document.cookie = cookie.join(';');
    },

    readCookie: function (name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      return parts.length != 2 ?
        undefined : parts.pop().split(";").shift();
    },

    addEventListener: function (el, event, eventListener) {
      if (el.addEventListener) {
        el.addEventListener(event, eventListener);
      } else {
        el.attachEvent('on' + event, eventListener);
      }
    },
  };

  cc.dombuilder = (function () {
    /*
     The attribute we store events in.
     */
    var eventAttribute = 'data-cc-event';
    var conditionAttribute = 'data-cc-if';

    /*
     Shim to make addEventListener work correctly with IE.
     */
    var addEventListener = function (el, event, eventListener) {
      // Add multiple event listeners at once if array is passed.
      if (cc.util.isArray(event)) {
        return cc.util.each(event, function (ev) {
          addEventListener(el, ev, eventListener);
        });
      }

      cc.util.addEventListener(el, event, eventListener);
    };

    /*
     Replace {{variable.name}} with it's property on the scope
     Also supports {{variable.name || another.name || 'string'}}
     */
    var insertReplacements = function (htmlStr, scope) {
      return htmlStr.replace(/\{\{(.*?)\}\}/g, function (_match, sub) {
        var tokens = sub.split('||');
        var value, token;
        while (token = tokens.shift()) {
          token = cc.util.trim(token);

          // If string
          if (token[0] === '"') return token.slice(1, token.length - 1);

          // If query matches
          value = cc.util.queryObject(scope, token);

          if (value) return value;
        }

        return '';
      });
    };

    /*
     Turn a string of html into DOM
     */
    var buildDom = function (htmlStr) {
      var container = document.createElement('div');
      container.innerHTML = htmlStr;
      return container.children[0];
    };

    var applyToElementsWithAttribute = function (dom, attribute, func) {
      var els = dom.parentNode.querySelectorAll('[' + attribute + ']');
      cc.util.each(els, function (element) {
        var attributeVal = element.getAttribute(attribute);
        func(element, attributeVal);
      }, window, true);
    };

    /*
     Parse event attributes in dom and set listeners to their matching scope methods
     */
    var applyEvents = function (dom, scope) {
      applyToElementsWithAttribute(dom, eventAttribute, function (element, attributeVal) {
        var parts = attributeVal.split(':');
        var listener = cc.util.queryObject(scope, parts[1]);
        addEventListener(element, parts[0], cc.util.bind(listener, scope));
      });
    };

    var applyConditionals = function (dom, scope) {
      applyToElementsWithAttribute(dom, conditionAttribute, function (element, attributeVal) {
        var value = cc.util.queryObject(scope, attributeVal);
        if (!value) {
          element.parentNode.removeChild(element);
        }
      });
    };

    return {
      build: function (htmlStr, scope) {
        if (cc.util.isArray(htmlStr)) htmlStr = htmlStr.join('');

        htmlStr = insertReplacements(htmlStr, scope);
        var dom = buildDom(htmlStr);
        applyEvents(dom, scope);
        applyConditionals(dom, scope);

        return dom;
      }
    };
  })();

  /* Plugin */

  function setContainer () {
    if (this.options.container) {
      this.container = document.querySelector(this.options.container);
    } else {
      this.container = document.body;
    }

    // Add class to container classes so we can specify css for IE8 only.
    this.containerClasses = '';
    if (navigator.appVersion.indexOf('MSIE 8') > -1) {
      this.containerClasses += ' cc_ie8'
    }
  }

  function loadTheme (callback) {
    var theme = this.options.theme;

    // If theme is specified by name
    if (theme.indexOf('.css') === -1) {
      theme = cc.THEME_BUCKET_PATH + theme + '.css';
    }

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = theme;

    var loaded = false;
    link.onload = cc.util.bind(function () {
      if (!loaded && callback) {
        callback.call(this);
        loaded = true;
      }
    }, this);

    document.getElementsByTagName("head")[0].appendChild(link);
  }

  function render() {
    // remove current element (if we've already rendered)
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
      delete this.element;
    }

    this.element = cc.dombuilder.build(this.options.markup, this);
    if (!this.container.firstChild) {
      this.container.appendChild(this.element);
    } else {
      this.container.insertBefore(this.element, this.container.firstChild);
    }
  }

  function applyPageFilter () {
    var page = location.pathname;

    var invalidPages = this.options.blacklistPage;
    if (invalidPages && invalidPages.length) {
      // if this url matches an entry in `invalidPages`, disable
      if (matchStringArray.call(this, page, invalidPages)) {
        this.options.enabled = false;
      }
    }

    var validPages = this.options.whitelistPage;
    if (validPages && validPages.length) {
      // if this url matches an entry in `validPages`, enable
      if (matchStringArray.call(this, page, validPages)) {
        this.options.enabled = true;
      }
    }
  }

  // `search` is a string
  // returns true if any of the items in `array` match `search`
  // values in `array` can be a string or an instance of RegExp
  function matchStringArray (search, array) {
    for (var i = 0, l = array.length; i < l; ++i) {
      var str = array[i];
      // if regex matches or string is equal, return true
      if ((str instanceof RegExp && str.test(search)) ||
        (typeof str == 'string' && str.length && str === search)) {
        return true;
      }
    }
    return false;
  }

  cc.options = {
    message: 'This website uses cookies to ensure you get the best experience on our website. ',
    dismiss: 'Got it!',
    learnMore: 'More info',
    link: null,
    target: '_self',
    container: null, // selector
    theme: 'light-floating',
    domain: null, // default to current domain.
    path: '/',
    expiryDays: 365,
    markup: [
      '<div class="cc_banner-wrapper {{containerClasses}}">',
      '<div class="cc_banner cc_container cc_container--open">',
      '<a href="#null" data-cc-event="click:dismiss" target="_blank" class="cc_btn cc_btn_accept_all">{{options.dismiss}}</a>',

      '<p class="cc_message">{{options.message}} <a data-cc-if="options.link" target="{{ options.target }}" class="cc_more_info" href="{{options.link || "#null"}}">{{options.learnMore}}</a></p>',

      '<a class="cc_logo" target="_blank" href="http://silktide.com/cookieconsent">Cookie Consent plugin for the EU cookie law</a>',
      '</div>',
      '</div>'
    ],

    dismissOnScroll: false, // dismiss when the user scroll down

    enabled: true,

    dismissOnTimeout: false,

    blacklistPage: [],
    whitelistPage: [],

    onAllowCookies: function () {}, // cookies were accepted for the first time
    onDenyCookies: function () {}, // cookies were denied for the first time

    onComplete: function (hasConsented) {}, // called on complete with the users preference to using cookies (bool)
  };

  cc.init = function (options) {
    if (options) this.setOptions(options);

    if (window.navigator && !navigator.cookieEnabled) {
      this.options.onComplete(false); // cannot use cookies
      return;
    }

    if ((window.navigator && window.navigator.CookiesOK) || window.CookiesOK) {
      this.options.onComplete(true); // can use cookies
      return;
    }

    var currentDismissed = cc.util.readCookie(cc.DISMISSED_COOKIE);
    if (currentDismissed == 'yes') {
      this.options.onComplete(true); // can use cookies
      return;
    } else if (currentDismissed == 'no') {
      this.options.onComplete(false); // cannot use cookies
      return;
    } else if (typeof currentDismissed != 'undefined') {
      // the dismissed cookie is invalid. delete it
      this.unsetDismissedCookie();
    }

    // enable or disable this plugin depending on the page URI and white/black list configuration
    applyPageFilter.call(this);

    if (!this.options.enabled) {
      return;
    }

    setContainer.call(this);

    // Calls render when theme is loaded.
    if (this.options.theme) {
      loadTheme.call(this, render);
    } else {
      render.call(this);
    }

    if (typeof this.options.dismissOnScroll == 'number') {
      var onWindowScroll = cc.util.bind(function (evt) {
        if (window.pageYOffset > Math.floor(this.options.dismissOnScroll)) {
          this.dismiss();

          window.removeEventListener('scroll', onWindowScroll);
        }
      }, this);

      window.addEventListener('scroll', onWindowScroll);
    }

    var delay = this.options.dismissOnTimeout;
    if (typeof delay == 'number') {
      window.setTimeout(cc.util.bind(function () {
        this.dismiss();
      }, this), Math.floor(delay));
    }
  };

  cc.setOptions = function (options) {
    cc.util.merge(this.options, options);
  };

  cc.open = function () {
  };

  cc.close = function (evt) {
    var onTransitionEnd = cc.util.bind(function (e) {
      this.container.removeChild(this.element);
      this.element.removeEventListener(cc.TRANSITION_END, onTransitionEnd);
    }, this);

    if (evt) {
      evt.preventDefault && evt.preventDefault();
      evt.returnValue = false;
    }

    this.setDismissedCookie(true);

    // add event that removes the container on "transitionend"
    this.element.addEventListener(cc.TRANSITION_END, onTransitionEnd);

    this.element.className += ' cc_fade_out'; // add transition class

    // NOTE if for any reason `cc_fade_out` is not set or it doesn't declare a css `transform`,
    //      then the element WILL NOT be removed (as the `transitionend` event will not be run)
    // 
    // TODO detect scenarios where adding this class does not trigger a `transformstart` event
  };

  cc.setDismissedCookie = function (hasConsented) {
    var cookieValue = cc.util.readCookie(cc.DISMISSED_COOKIE);
    var chosenBefore = cookieValue == 'yes' || cookieValue == 'no';

    cc.util.setCookie(cc.DISMISSED_COOKIE, hasConsented ? 'yes' : 'no', this.options.expiryDays, this.options.domain, this.options.path);

    if (!chosenBefore) {
      hasConsented ? this.options.onAllowCookies() : this.options.onDenyCookies();
      this.options.onComplete(hasConsented);
    }
  };

  cc.unsetDismissedCookie = function () {
    cc.util.setCookie(cc.DISMISSED_COOKIE, '', -1, this.options.domain, this.options.path);
  };

  cc.cookieLawApplies = function () {
    if (typeof this.continentCode != 'string' || !this.continentCode.length) {
      // if we don't know the answer, assume true
      return true;
    }

    // cookie law only applies in europe
    return this.continentCode == 'EU';
  };

  cc.hasDismissed = function () {
    return cc.util.readCookie(cc.DISMISSED_COOKIE) === 'yes';
  };


  cc.law = (function(){

    var hasLaw = ['BE','DK','CZ','FR','BG','IT','SE','HU','RO','SK','SI','IE','PL','GB','FI','LU','ES','HR','CY','LV','LT','PT','NL'];
    var explicit = ['HR','CY'];
    var explicitPersonal = ['LV','LT','PT','DE'];
    var implicit = ['BE','DK','CZ','FR','BG','IT','SE','HU','RO','SK','SI','IE','PL','GB','FI','LU','ES','LI','EE','NO','MT','IS','DE'];
    var refusable = ['DK','CZ','FR','BG','IT','LU','EE','DE'];
    var consciousDismiss = ['ES'];
    var browserSettings = ['SE','HU','RO','SK','SI','IE','PL','GB','FI','LU','ES','NO','MT','IS'];

    return {
      get: function (countryCode) {
        return {
          hasLaw          : arrayIndexOf(hasLaw, countryCode) >= 0,
          explicit        : arrayIndexOf(explicit, countryCode) >= 0,
          explicitPersonal: arrayIndexOf(explicitPersonal, countryCode) >= 0,
          implicit        : arrayIndexOf(implicit, countryCode) >= 0,
          refusable       : arrayIndexOf(refusable, countryCode) >= 0,
          consciousDismiss: arrayIndexOf(consciousDismiss, countryCode) >= 0,
          browserSettings : arrayIndexOf(browserSettings, countryCode) >= 0,
        };
      },
    };

    function arrayIndexOf (array, searchElement /*, fromIndex */) {
      if (array === void 0 || array === null)
        throw new TypeError();

      var t = Object(array);
      var len = t.length >>> 0;
      if (len === 0)
        return -1;

      var n = 0;
      if (arguments.length > 0)
      {
        n = Number(arguments[1]);
        if (n !== n) // shortcut for verifying if it's NaN
          n = 0;
        else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }

      if (n >= len)
        return -1;

      var k = n >= 0
            ? n
            : Math.max(len - Math.abs(n), 0);

      for (; k < len; k++)
      {
        if (k in t && t[k] === searchElement)
          return k;
      }
      return -1;
    }
  }());

  cc.locate = (function(){
    return {
      currentServiceIndex: 0,

      // When using a service, it could either return a data structure (like a JSON object) or a script
      // If the service was defined with a `script` key, then we are expecting a script.
      // If the service was defined with a `url` key, then we are expecting a data structure

      // Because the response could be a script, there is a chance the service may require a second http request.
      // Therefore you 

      locationServices: [
        {
          url: 'http://ipinfo.io',
          headers:['Accept: application/json'],
          callback: function (done, response) {
            var json = JSON.parse(response);
            return json.error
                ? new Error('Error ['+(json.code || 'UNKNOWN')+']: '+json.error)
                : {code: json.country};
          },
        },
        {
          url: 'http://freegeoip.net/json/?callback=cookieconsent.locate.jsonp(1)',
          isScript: true,
          callback: function (done, response) {
            var json = JSON.parse(response);
            return json.error
                ? new Error('Error ['+(json.code || 'UNKNOWN')+']: '+json.error)
                : {code: json.country_code};
          },
        },
        {
          url: 'http://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
          isScript: true,
          callback: function (done) {
            // if everything went okay then `geoip2` WILL be defined
            if (!window.geoip2) {
              done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
              return;
            }

            geoip2.country(function (location) {
              done({code: location.country.iso_code});
            }, function (err) {
              done(new Error('Error ['+err.code+']: '+err.error));
            });
          },
        }
      ],

      init: function(onLocationFound, services){
        this.onComplete = onLocationFound;

        // if caller provides additional services, use them
        if(Object.prototype.toString.call(services) == '[object Array]'){
          this.locationServices = this.locationServices.concat(services);
        }

        runServices.call(this);
      },

      jsonp: function(idx){
        return cc.util.bind(function (response) {
          runServiceCallback.call(this, runNextOnError, this.locationServices[idx], JSON.stringify(response));
        }, this);
      }
    };

    function runServices () {
      var idx = this.currentServiceIndex;
      var service = this.locationServices[idx];

      if (!service) {
        return;
      }

      var self = this;

      // runs service[idx] and triggers the callback on complete
      runService(service, function(){
        runNextOnError.apply(self, arguments);
      });
    }
    
    // if `err` is set, the next service handler is called
    // if `err` is null, the `onComplete` handler is called with `data`
    function runNextOnError (err, data) {
      var idx = this.currentServiceIndex;
      var service = this.locationServices[idx];

      if (err) {
        console.log('The service['+idx+'] ('+service.url+') responded with the following error', err);

        // an error occurred, try the next service
        this.currentServiceIndex++;
        runServices.call(this);
      } else {
        this.onComplete(data);
      }
    }

    // requires a `service` object that defines at least a `url` and `callback`
    function runService (service, complete) {
      var self = this;

      if (!service || !service.url) {
        return;
      }

      // we call either `getScript` or `makeAsyncRequest` depending on the type of resource
      var requestFunction = service.isScript ? getScript : makeAsyncRequest;

      // both functions have similar signatures so we can pass the same arguments to both
      requestFunction(service.url, function (xhr) {
        // if `!xhr`, the `getScript` function was used, so there is no response text
        var responseText = xhr ? xhr.responseText : '';

        runServiceCallback.call(self, complete, service, responseText);

      }, service.data, service.headers);
    }

    // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
    // We need to run it's callback which determines if its successful or not
    // `complete` is called on success or failure
    function runServiceCallback (complete, service, responseText) {
      var self = this;

      // this is called with the `result` from `service.callback` regardless of how it provided that result (sync or async)
      var onResult = function(result) {
        // convert result to nodejs style async callback
        if(result instanceof Error){
          complete.call(this, result, null);
        }else{
          complete.call(this, null, result);
        }
      };

      // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
      // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready
      var result = service.callback(function(asyncResult){
        // if `result` is a valid value, then this function shouldn't really run
        // even if it is called by `service.callback`
        if(!result){
          onResult.call(self, asyncResult)
        }
      }, responseText);

      if(result){
        onResult.call(this, result);
      }
    }

    function getScript (url, callback) {
      var s = document.createElement('script');

      s.type = 'text/' + (url.type || 'javascript');
      s.src = url.src || url;
      s.async = false;

      s.onreadystatechange = s.onload = function () {
        var state = s.readyState;

        if (!callback.done && (!state || /loaded|complete/.test(state))) {
          callback.done = true;
          callback();
        }
      };

      document.body.appendChild(s);
    }

    function makeAsyncRequest (url, onComplete, postData, requestHeaders) {
      var trimRegEx = /^\s+|\s+$/g;
      var xhr = new(window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');

      xhr.open(postData ? 'POST' : 'GET', url, 1);

      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      if (Object.prototype.toString.call(requestHeaders) === '[object Array]') {
        for (var i = 0, l = requestHeaders.length; i < l; ++i) {
          var split = requestHeaders[i].split(':', 2)
          xhr.setRequestHeader(split[0].replace(trimRegEx, ''), split[1].replace(trimRegEx, ''));
        }
      }

      if(typeof onComplete == 'function'){
        xhr.onreadystatechange = function () {
          if (xhr.readyState > 3) {
            onComplete(xhr);
          }
        };
      }

      xhr.send(postData);
    }

  }());

  window.cookieconsent = cc;

  /*

  var country = cookielaw.get('GB');

  if(!country.hasLaw){
    // I don't need to show you this popup. exit
  }

  if(country.browserSettings) {
    // I have permission to get settings from browser
  }

  if(country.refusable){
    // MUST provide a way to revoke consent at any time
  }

  if(country.consciousDismiss){
    // cannot use autodismiss (on scroll or timeout) (user MUST click consent button)
  }


  ################## DO I REALLY NEED THESE ? ############################

  if(d.explicit){
    // requires explicit consent
  }

  if(d.explicitPersonal){
    // requires explicit consent but only if the cookies used contain personal info
  }

  if(d.implicit){
    // requires implicit consent
  }
  
  */


}(window.cookieconsent || {}));
