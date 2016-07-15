
(function (cc) {
  // stop from running again, if accidently included more than once.
  if (cc.hasInitialised) return;

  // name of cookie to be set when dismissed
  cc.cookieName = 'cookieconsent_status';

  // valid cookie values
  cc.status = {deny: 'deny', allow: 'allow', dismiss: 'dismiss'};

  // is true if the browser supports css transitions
  cc.hasTransition = (function () {
    var style = document.documentElement.style;
    var trans = ['t','OT','msT','MozT','KhtmlT','WebkitT'];
    for (var i = 0, l = trans.length; i < l; ++i) {
      if (trans[i]+'ransition' in style) return true;
    }
    return false;
  }());

  var util = {
    isArray: function (obj) {
      return Object.prototype.toString.call(obj) == '[object Array]';
    },

    isObject: function (obj) {
      return Object.prototype.toString.call(obj) == '[object Object]';
    },

    bind: function (func, context /* , args */ ) {
      var args = Array.prototype.slice.call(arguments, 2);
      return function () {
        return func.apply(context, args.concat.apply(args, arguments));
      };
    },

    contains: function (iterable, value) {
      var found = false;
      this.each(iterable, function (cur, idx, arr) {
        if (cur == value) {
          found = true;
          return false; // break;
        }
      });
      return found;
    },

    each: function (arr, callback, /* optional */ context) {
      if (this.isObject(arr)) {
        for (var key in arr) {
          if (arr.hasOwnProperty(key)) {
            if (false === callback.call(context, arr[key], key, arr)) {
              break;
            }
          }
        }
      } else if (this.isArray(arr)) {
        for (var i = 0, l = arr.length; i < l; ++i) {
          if (false === callback.call(context, arr[i], i, arr)) {
            break;
          }
        }
      }
    },

    map: function (iterable, callback, /* optional */ context) {
      var ret = util.isObject(iterable) ? {} : [];
      this.each(iterable, function (c, i) {
        ret[i] = callback.call(this, c, i, iterable);
      }, context);
      return ret;
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

    clone: function (obj) {
      var c = util.isArray(obj) ? [] : {};

      util.each(obj, function(prop, i) {
        if (util.isObject(prop) || util.isArray(prop)) {
          c[i] = this.clone(prop);
        } else {
          c[i] = prop;
        }
      }, this);

      return c;
    },

    trim: function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    },

    // http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
    escapeRegExp: function (str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    },
  };

  var dom = {
    addEventListener: function (el, event, eventListener) {
      if (el.addEventListener) {
        el.addEventListener(event, eventListener);
      } else if (el.attachEvent) {
        el.attachEvent('on' + event, eventListener);
      }
    },

    removeEventListener: function (el, event, eventListener) {
      if (el.removeEventListener) {
        el.removeEventListener(event, eventListener);
      } else if (el.detachEvent) {
        el.detachEvent('on' + event, eventListener);
      }
    },

    buildDom: function (htmlStr) {
      var container = document.createElement('div');
      container.innerHTML = htmlStr;
      var elem = container.children[0];
      container = null;
      return elem;
    },

    hasClass: function (element, className) {
      var safeClassName = util.escapeRegExp(className);
      var regex = new RegExp('(?:\\s|^)' + safeClassName + '(?:\\s|$)');
      return regex.test(element.className);
    },

    matchClass: function (element, regExp) {
      var regex = new RegExp('(?:\\s|^)' + regExp + '(?:\\s|$)');
      var matches = element.className.match(regex);
      return (matches && matches[1]) || false;
    },

    addClass: function (element, className) {
      if (!this.hasClass(element, className)) {
        element.className += ' ' + className;
      }
    },

    removeClass: function (element, className) {
      if (this.hasClass(element, className)) {
        var safeClassName = util.escapeRegExp(className);
        var regex = new RegExp('(\\s|^)' + safeClassName + '(\\s|$)');
        element.className = element.className.replace(regex, '');
      }
    },
  };

  var cookie = {
    setCookie: function (name, value, expiryDays, domain, path) {
      expiryDays = expiryDays || 365;

      var exdate = new Date();
      exdate.setDate(exdate.getDate() + expiryDays);

      var cookie = [
        name + '=' + value,
        'expires=' + exdate.toUTCString(),
        'path=' + (path || '/')
      ];

      if (domain) {
        cookie.push('domain=' + domain);
      }

      document.cookie = cookie.join(';');
    },

    readCookie: function (name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      return parts.length != 2 ?
        undefined : parts.pop().split(';').shift();
    },
  };

  cc.CookieWindow = (function () {

    var defaultOptions = {
      enabled: true,

      container: document.body, // the element will be preppened to this

      // when false, the wrapper won't get used. this is useful if you want to append the cookie
      // popup to an existing wrapper (for instance, if you have multiple instances of popups)
      // (the wrapper is a full height/width div which is absolutley positioned at top-left 0)
      useWrapper: true,

      // {classes} is where additional classes get added
      // {children} is where the inner html is set
      wrapper: '<div class="cc-wrapper">{children}</div>',
      window: '<div class="cc-window {classes}">{children}</div>',

      // defaults to the current domain
      cookie: { path: '/', domain: 'localhost', expiryDays: 365 },

      onAllowCookies: function() {},
      onDenyCookies: function() {},
      onComplete: function(status) {},

      // this is where you set the content of each element
      content: {
        header: 'Cookies used on the website',
        message: 'Our website uses cookies. They help us to understand how customers use our website so we can give you the best experience possible and also keep our online services relevant.',
        dismiss: 'Close and don\'t show again',
        link: 'Read more about our cookies',
        allow: 'Allow',
        deny: 'Deny',
        close: '&#x274c;',

        // extensions
        customButton: 'Continue',
        cookieImage: 'http://plainicon.com/dboard/userprod/2921_4eb4c/prod_thumb/plainicon.com-64226-256px-fa8.png',
      },

      // this is the HTML for the elements above.
      // {children} will be replaced with the equivalent 'content' above
      elements: {
        header: '<span class="cc-header">{children}</span>',
        message: '<span class="cc-message">{children}</span>',
        dismiss: '<a class="cc-btn cc-dismiss">{children}</a>',
        link: '<a href="/" class="cc-link">{children}</a>',
        allow: '<a class="cc-btn cc-allow">{children}</a>',
        deny: '<a class="cc-btn cc-deny">{children}</a>',
        close: '<span class="cc-close">{children}</span>',

        // extensions
        customButton: '<span class="cc-btn cc-middle customButton"><img height="20" src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/tick-128.png"><span>{children}</span></span>',
        cookieImage: '<img class="cc-cookie-image" src="{children}" width="32px"/>'
      },

      // define types of compliance here
      compliance: {
        'rinfo': '<div class="cc-inline">{dismiss}{link}</div>',
        'info': '<div class="cc-inline">{link}{dismiss}</div>',
        'opt-in': '<div class="cc-inline">{allow}{deny}</div>',
        'opt-out': '<div class="cc-inline">{deny}{allow}</div>',
      },

      // define layout themes here
      themes: {
        'mono-floating': '{message}{compliance}',
        'header-floating': '{header}{message}{compliance}',
        'image-floating': '{header}{message}{compliance}{cookieImage}',
        'close-floating': '{message}{compliance}{close}',
        'all-floating': '{header}{message}{compliance}{close}',
      },

      // define custom color palettes here
      palettes: {
        'custom': {background:'pink', text: 'blue', buttonBackground: 'red', buttonText: 'green', buttonBorder: 'purple'},
      },

      // this refers to the popup windows position. we currently support:
      //  - top-left  top-right  bottom-left  bottom-right                 (for floating themes)
      //  - banner-top  banner-bottom                                      (for banner themes)
      position: 'bottom-right',

      // select your type of popup here
      type: 'info',                       // refers to `compliance`
      theme: 'mono-floating',             // refers to `themes`
      palette: '',                        // refers to `palettes`
    };

    function CookieWindow () {
      this.initialise.apply(this, arguments);
    }

    CookieWindow.prototype.initialise = function (options) {
      // set options back to default options
      this.options = util.clone(defaultOptions);

      if (util.isObject(options)) {
        util.merge(this.options, options);
      }

      // this sets `this.options.enabled`
      applyPageFilter.call(this);

      // if this should be disabled, stop initialisation
      if (!this.options.enabled) {
        return;
      }

      // if it's open, 
      if (this.isOpen()) {
        this.close();
      }

      // returns true if `onComplete` was called
      if (checkCallbackHooks.call(this)) {
        return;
      }

      bindButtonHandler.call(this);

      // create hidden HTML element
      render.call(this);

      // uses `dismissOnScroll` and `dismissOnTimeout`
      applyAutoDismiss.call(this);
    };

    CookieWindow.prototype.destroy = function () {
      if (this.element) {
        dom.removeEventListener(this.element, 'click', this._onButtonClick);

        this._onButtonClick = null;

        // remove from DOM
        this.element.parentNode.removeChild(this.element);

        // remove reference
        this.element = null;
        this.options = null;
      }
    };

    CookieWindow.prototype.isOpen = function () {
      return this.element && this.element.style.display === '' && !dom.hasClass(this.element, 'cc_fade_out');
    };

    CookieWindow.prototype.open = function (callback) {
      if (!this.isOpen() && this.element) {
        if (cc.hasTransition && this.element.style.display == '') {
          dom.removeClass(this.element, 'cc-fadeout');

          // Sometimes the popup is hidden with '.cc-fadeout' (which uses visibility: hidden).
          // The "open" animation will only run if the element is hidden (using display: none) before showing it, otherwise the animation won't run.

          // So we can either set 'display: none' after we close the popup OR directly before we open it.
          // It would make more sense to do it after "close" however that means relying on "transitionend", which isn't exactly cross-browser 'reliable'
          this.element.style.display = 'none';

          // We must "show" the popup in a timeout. This is to give the browser chance to update and draw the DOM.
          // If we don't do this, the animation won't run. If the delay period is < 20ms, the animation won't run.
          setTimeout(util.bind(function(){
            this.element.style.display = '';
          }, this), 20);
        } else {
          this.element.style.display = '';
        }
      }
    };

    CookieWindow.prototype.close = function (callback) {
      if (this.isOpen()) {
        if (cc.hasTransition) {
          dom.addClass(this.element, 'cc-fadeout');
        } else {
          this.element.style.display = 'none';
        }
      }
    };

    CookieWindow.prototype.setStatus = function (status) {
      var opts = this.options;
      var value = cookie.readCookie(cc.cookieName);
      var chosenBefore = util.contains(cc.status, value);
      var c = opts.cookie;

      // if `status` is valid
      if (util.contains(cc.status, status)) {
        cookie.setCookie(cc.cookieName, status, c.expiryDays, c.domain, c.path);

        if (!chosenBefore) {
          status == cc.status.deny ? this.options.onDenyCookies() : this.options.onAllowCookies();
          this.options.onComplete(status);
        }
      } else {
        this.clearStatus();
      }
    };

    CookieWindow.prototype.getStatus = function () {
      return cookie.readCookie(cc.cookieName)
    };

    CookieWindow.prototype.clearStatus = function () {
      cookie.setCookie(cc.cookieName, '', -1, this.options.domain, this.options.path);
    };

    function bindButtonHandler() {
      this._onButtonClick = util.bind(function (e) {
        var targ = e.target;
        if (dom.hasClass(targ, 'cc-btn')) {
          var allowedStatuses = Object.keys(cc.status).map(util.escapeRegExp);
          var match = dom.matchClass(targ, 'cc-(' + allowedStatuses.join('|') + ')')

          if (match) {
            this.setStatus(match);
            this.close();
          }
        }
      }, this);
    }

    function applyAutoDismiss () {
      var delay = this.options.dismissOnTimeout;
      if (typeof delay == 'number') {
        window.setTimeout(util.bind(function () {
          this.setStatus(cc.status.dismiss);
        }, this), Math.floor(delay));
      }

      var scrollRange = this.options.dismissOnScroll;
      if (typeof scrollRange == 'number') {
        var onWindowScroll = util.bind(function (evt) {
          if (window.pageYOffset > Math.floor(scrollRange)) {
          this.setStatus(cc.status.dismiss);

            dom.removeEventListener(window, 'scroll', onWindowScroll);
          }
        }, this);

        dom.addEventListener(window, 'scroll', onWindowScroll);
      }
    }

    function checkCallbackHooks () {
      var st = cc.status;
      var complete = this.options.onComplete;

      if (window.navigator) {
        if (!navigator.cookieEnabled) {
          complete(st.deny);
          return true;
        }
        if (navigator.CookiesOK) {
          complete(st.allow);
          return true;
        }
      }

      if (window.CookiesOK) {
        complete(st.allow);
        return true;
      }

      switch (cookie.readCookie(cc.cookieName)) {
        case st.deny: complete(st.deny); break;
        case st.allow: complete(st.allow); break;
        case st.dismiss: complete(st.dismiss); break;
        default: 
          this.clearStatus();
          return false;
      }
      return true;
    }

    function createStyle() {
      // Create the <style> tag
      var style = document.createElement('style');

      // Add a media (and/or media query) here if you'd like!
      // style.setAttribute("media", "screen")
      // style.setAttribute("media", "only screen and (max-width : 1024px)")

      // WebKit hack :(
      style.appendChild(document.createTextNode(''));

      // Add the <style> element to the page
      document.head.appendChild(style);

      return style.sheet;
    }

    function addCSSRule(sheet, selector, rules, index) {
      if ('insertRule' in sheet) {
        sheet.insertRule(selector + "{" + rules + "}", index);
      } else if('addRule' in sheet) {
        sheet.addRule(selector, rules, index);
      }
    }

    function interpolateString (str, callback) {
      var marker = /{([a-z][a-z0-9\-_]*)}/ig;
      return str.replace(marker, function (matches) {
        return callback(arguments[1]) || '';
      })
    }

    function getWindowClasses () {
      var opts = this.options;
      var pos = opts.position.split('-', 2); // top, bottom, left, right
      return [pos[0], pos[1], 'type-' + opts.type, 'theme-' + opts.theme];
    }

    function getInnerMarkup () {
      var interpolated = {};
      var opts = this.options;

      util.map(opts.elements, function (elementStr, prop) {
        interpolated[prop] = interpolateString(elementStr, function (name) {
          // we only deal with "children"
          if (name == 'children') {
            var contentStr = opts.content[prop];
            return opts.content[prop] || '';
          }
        })
      });

      var complianceType = opts.compliance[opts.type];

      // build the compliance types from the already interpolated `elements`
      interpolated.compliance = interpolateString(complianceType, function (name) {
        return interpolated[name];
      });

      var theme = opts.themes[opts.theme];

      return interpolateString(theme, function(match) {
        return interpolated[match];
      });
    }

    // this function automatically prefixes the CSS classes
    function getOuterMarkup (innerMarkup, classes) {
      var opts = this.options;

      // add prefix and join into a space separated string
      var classString = classes.map(function(cur) {return 'cc-' + cur}).join(' ');

      var cookieWindow = opts.window
        .replace('{classes}', classString)
        .replace('{children}', innerMarkup);

      return !opts.useWrapper
          ? cookieWindow
          : opts.wrapper.replace('{children}', cookieWindow);
    }

    function render () {
      var opts = this.options;

      // if already rendered, ignore
      if (this.element) {
        return false;
      }

      // `classes` depends on the configuration options
      var classes = getWindowClasses.call(this);

      // we only add extra styles if `pallete` has been set to a valid value
      var didAttach = attachCustomPalette.call(this);

      // if we override the pallete, add the class that enables this
      if (didAttach) {
        classes.push('color-override');
      }

      // add class to container classes so we can specify css for IE8 only
      if (navigator.appVersion.indexOf('MSIE 8') > -1) {
        classes.push('ie8');
      }

      // calculate inner markup from configuration
      var markup = getInnerMarkup.call(this);

      // the full markup either contains the wrapper or it does not (for multiple instances)
      var fullHtml = getOuterMarkup.call(this, markup, classes);

      // create markup
      this.element = dom.buildDom(fullHtml);

      dom.addEventListener(this.element, 'click', this._onButtonClick);

      // hide it before adding to DOM
      this.element.style.display = 'none';

      var cont = this.options.container;
      if (!cont.firstChild) {
        cont.appendChild(this.element);
      } else {
        cont.insertBefore(this.element, cont.firstChild)
      }
      return true;
    }

    function attachCustomPalette () {
      var opts = this.options;
      var palette = opts.palette && opts.palettes && opts.palettes[opts.palette];

      if (palette) {
        this.dynamicStyle = createStyle();

        addCSSRule(this.dynamicStyle, '.cc-color-override.cc-window', '\
          background-color: '+palette.background+';\
          color: '+palette.text+';');

        addCSSRule(this.dynamicStyle, '.cc-color-override .cc-btn', '\
          border-color: '+palette.buttonBorder+';\
          background-color: '+palette.buttonBackground+';\
          color: '+palette.buttonText+';');
      }
      return !!palette;
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
    //  - returns true if any of the items in `array` match `search`
    //  - values in `array` can be a string or an instance of RegExp
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

    return CookieWindow
  }());

  cc.law = (function () {

    var hasLaw = ['BE', 'DK', 'CZ', 'FR', 'BG', 'IT', 'SE', 'HU', 'RO', 'SK', 'SI', 'IE', 'PL', 'GB', 'FI', 'LU', 'ES', 'HR', 'CY', 'LV', 'LT', 'PT', 'NL'];
    var explicit = ['HR', 'CY', 'LV', 'LT', 'PT', 'DE'];
    var revokable = ['DK', 'CZ', 'FR', 'BG', 'IT', 'LU', 'EE', 'DE', 'NL'];
    var explicitAction = ['ES'];

    return {

      get: function (countryCode) {
        return {
          hasLaw: arrayIndexOf(hasLaw, countryCode) >= 0,
          explicit: arrayIndexOf(explicit, countryCode) >= 0,
          revokable: arrayIndexOf(revokable, countryCode) >= 0,
          explicitAction: arrayIndexOf(explicitAction, countryCode) >= 0,
        };
      },

      applyLaw: function (options, countryCode) {
        var country = this.get(countryCode);

        if (!country.hasLaw) {
          // The country has no cookie law
          options.enabled = false;
        }

        if (country.explicit) {
          // we must provide a way to deny consent
          options.explicit = true;
        }

        if (country.revokable) {
          // we must provide an option to revoke consent at a later time
          options.revokable = true;
        }

        if (country.explicitAction) {
          // user must explicitly click the consent button
          options.dismissOnScroll = false;
          options.dismissOnTimeout = false;
        }

        return options;
      }

    };

    function arrayIndexOf (array, searchElement /*, fromIndex */ ) {
      if (array === void 0 || array === null)
        throw new TypeError();

      var t = Object(array);
      var len = t.length >>> 0;
      if (len === 0)
        return -1;

      var n = 0;
      if (arguments.length > 0) {
        n = Number(arguments[1]);
        if (n !== n) // shortcut for verifying if it's NaN
          n = 0;
        else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
          n = (n > 0 || -1) * Math.floor(Math.abs(n));
      }

      if (n >= len)
        return -1;

      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

      for (; k < len; k++) {
        if (k in t && t[k] === searchElement)
          return k;
      }
      return -1;
    }
  }());

  cc.locate = (function () {

    return {

      // This is the index of the service that is currently being used
      currentServiceIndex: 0,

      // When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
      // When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.

      // When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
      // cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
      // with the data (or Error), and `cookieconsent.locate` will take care of the rest

      locationServices: [
        {
          // This service responds with JSON, so we simply need to parse it and return the country code
          url: 'http://ipinfo.io',
          headers: ['Accept: application/json'],
          callback: function (done, response) {
            var json = JSON.parse(response);
            return json.error ? toError(json) : {
              code: json.country
            };
          }
        },
        {
          // This service responds with JSON, but they do not have CORS set, so we must use JSONP and provide a callback
          // The callback MUST BE `cookieconsent.locate.jsonp(SERVICE_INDEX)` (so cookieconsent.locate.jsonp(1) for this index)
          url: 'http://freegeoip.net/json/?callback=cookieconsent.locate.jsonp(1)',
          isScript: true, // this is JSONP, therefore we must set it to run as a script
          callback: function (done, response) {
            var json = JSON.parse(response);
            return json.error ? toError(json) : {
              code: json.country_code
            };
          }
        },
        {
          // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
          // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
          url: 'http://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
          isScript: true, // this service responds with a javascript file, so it must be run as a script
          callback: function (done) {
            // if everything went okay then `geoip2` WILL be defined
            if (!window.geoip2) {
              done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
              return;
            }

            geoip2.country(function (location) {
              done({
                code: location.country.iso_code
              });
            }, function (err) {
              done(toError(err));
            });

            // We can't return anything, because we need to wait for the second AJAX call to return.
            // Then we can 'complete' the service by passing data or an error to the `done` callback.
          }
        }
      ],

      // Pass an `onComplete` function which is called asynchronously when a service has returned some data, or when all services have failed.
      // You can pass additional services that you want to use as `services` (see format of `locationServices`)
      init: function (onComplete, services) {
        this.onComplete = onComplete;

        // if caller provides additional services, use them
        if (Object.prototype.toString.call(services) == '[object Array]') {
          this.locationServices = this.locationServices.concat(services);
        }

        runServices.call(this);
      },

      // This is called from the global scope in a script request that is executed as JSONP
      jsonp: function (idx) {
        var service = this.locationServices[idx];
        return function (response) {
          // it may seem like a waste to stringify it (when we are just going to parse it again) but the service
          // callbacks are expecting the `responseText` from the service to be a string. At least this way is consistent

          // set the JSONP data key as a value that is unlikely to ever be used.
          // this property is detected and replaced as the `responseText` of a request in the `onload` callback of a script tag
          service.__JSONP_DATA = JSON.stringify(response);
        };
      }

    };

    // This runs the service located at index `currentServiceIndex`.
    // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully
    function runServices () {
      var idx = this.currentServiceIndex;
      var service = this.locationServices[idx];

      if (!service) {
        return;
      }

      var self = this;

      // runs service[idx] and triggers the callback on complete
      runService(service, util.bind(runNextServiceOnError, self));
    }

    // requires a `service` object that defines at least a `url` and `callback`
    function runService (service, complete) {
      var self = this;

      // basic check to ensure it resembles a `service`
      if (!service || !service.url || !service.callback) {
        return;
      }

      // we call either `getScript` or `makeAsyncRequest` depending on the type of resource
      var requestFunction = service.isScript ? getScript : makeAsyncRequest;

      // both functions have similar signatures so we can pass the same arguments to both
      requestFunction(service.url, function (xhr) {
        // if `!xhr`, then `getScript` function was used, so there is no response text
        var responseText = xhr ? xhr.responseText : '';

        // if the resource is a script, then this function is called after the script has been run.
        // if the script is JSONP, then `cc.locate.jsonp` has already been called (as the JSONP callback).
        if (service.__JSONP_DATA) {
          responseText = service.__JSONP_DATA;
          delete service.__JSONP_DATA;
        }

        // call the service callback with the response text (so it can parse the response)
        runServiceCallback.call(self, complete, service, responseText);

      }, service.data, service.headers);

      // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
    }

    // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
    // We need to run it's callback which determines if its successful or not
    // `complete` is called on success or failure
    function runServiceCallback (complete, service, responseText) {
      var self = this;

      // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
      // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready
      var result = service.callback(function (asyncResult) {
        // if `result` is a valid value, then this function shouldn't really run
        // even if it is called by `service.callback`
        if (!result) {
          onServiceResult.call(self, complete, asyncResult)
        }
      }, responseText);

      if (result) {
        onServiceResult.call(this, complete, result);
      }
    }

    // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
    // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data
    function onServiceResult (complete, result) {
      // convert result to nodejs style async callback
      if (result instanceof Error || (result && result.error)) {
        complete.call(this, result, null);
      } else {
        complete.call(this, null, result);
      }
    }

    // if `err` is set, the next service handler is called
    // if `err` is null, the `onComplete` handler is called with `data`
    function runNextServiceOnError (err, data) {
      var idx = this.currentServiceIndex;
      var service = this.locationServices[idx];

      if (err) {
        console.log('The service[' + idx + '] (' + service.url + ') responded with the following error', err);

        // if another service exists
        if (this.locationServices[idx + 1]) {
          // an error occurred, try the next service
          this.currentServiceIndex++;
          runServices.call(this);
        } else {
          completeService.call(this, null, new Error('All services failed'));
        }
      } else {
        completeService.call(this, data, null);
      }
    }

    // calls the `onComplete` callback after resetting the `currentServiceIndex`
    function completeService (data, error) {
      this.currentServiceIndex = 0;

      this.onComplete(data, error);
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
          s = null;
        }
      };

      document.body.appendChild(s);

      s = null;
    }

    function makeAsyncRequest (url, onComplete, postData, requestHeaders) {
      var xhr = new(window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');

      xhr.open(postData ? 'POST' : 'GET', url, 1);

      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      if (Object.prototype.toString.call(requestHeaders) === '[object Array]') {
        for (var i = 0, l = requestHeaders.length; i < l; ++i) {
          var split = requestHeaders[i].split(':', 2)
          xhr.setRequestHeader(util.trim(split[0]), util.trim(split[1]));
        }
      }

      if (typeof onComplete == 'function') {
        xhr.onreadystatechange = function () {
          if (xhr.readyState > 3) {
            onComplete(xhr);
          }
        };
      }

      xhr.send(postData);
    }

    function toError (obj) {
      return new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);
    }
  }());

  cc.initialise = function (options) {
    this.getCountryOptions(options, function (result) {
      cc.popup.init(result);
      cc.popup.open();
    }, function (error) {
      cc.popup.init(options);
      cc.popup.open();
    });
  };

  cc.getCountryOptions = function (options, success, failure) {
    cc.locate.init(function (result) {
      success(cc.law.applyLaw(options, result.code));
    }, failure);
  };

  cc.factory = function (options) {
    var popup = new cc.CookieWindow(options);

    var status = popup.getStatus();
    if (!util.contains(cc.status, status) && popup.options.enabled) {
      popup.open();
    }

    return popup;
  };

  cc.hasInitialised = true;

  window.cookieconsent = cc;

} (window.cookieconsent || {}));
