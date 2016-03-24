
(function (cc) {

  // Stop from running again, if accidently included more than once.
  if (cc.hasInitialised) {
    return;
  }
  cc.hasInitialised = true;

  /* Constants */

  // Name of cookie to be set when dismissed
  cc.COOKIE_STATUS_NAME = 'cookieconsent_status';

  // Valid cookie values
  cc.COOKIE_STATUS = {
    DENIED: 'denied',
    ALLOWED: 'allowed',
    DISMISSED: 'dismissed'
  };

  // The path to built in themes
  // Note: Directly linking to a version on the CDN like this is horrible, but it's less horrible
  //       than people downloading the code then discovering that their CSS bucket disappeared
  cc.THEME_BUCKET_PATH = '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/';

  // A cross browser method of getting the transition event name
  // Note: If you simply provide a list of possible event names like 'transitionend webkitTransitionEnd msTransitionEnd' etc,
  //       then the event may not be triggered. This method ensures that it is correctly triggered
  cc.HAS_TRANSITION = (function supportsTransitions() {
    var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'],
      b = document.body || document.documentElement,
      p = 'transition',
      s = b.style;

    if (typeof s[p] == 'string') {
      return true;
    }

    p = p.charAt(0).toUpperCase() + p.substr(1);

    for (var i = 0, l = v.length; i < l; ++i) {
      if (typeof s[v[i] + p] == 'string') {
        return true;
      }
    }

    return false;
  }());

  /* Helper methods */

  var util = {

    isArray: function (obj) {
      return Object.prototype.toString.call(obj) == '[object Array]';
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
            if (false === callback.call(context, arr[key], key, arr)) {
              break;
            }
          }
        }
      } else {
        for (var i = 0, l = arr.length; i < l; ++i) {
          if (false === callback.call(context, arr[i], i, arr)) {
            break;
          }
        }
      }
    },

    map: function (iterable, callback, context, force) {
      var arr = [];
      this.each(iterable, function (c, i) {
        arr.push(callback.call(this, c, i, iterable));
      }, context, force);
      return arr;
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

    getElementByClass: function (element, className) {
      var foundElement = null,
        found;

      function recurse (element, className, found) {
        for (var i = 0, l = element.childNodes.length; i < l && !found; ++i) {
          var el = element.childNodes[i];

          if (this.hasClass(el, className)) {
            foundElement = el;
            found = true;
            break;
          }

          recurse.call(this, element.childNodes[i], className, found);
        }
      }

      recurse.call(this, element, className, false);

      return foundElement;
    },

    hasClass: function (element, className) {
      var safeClassName = this.escapeRegExp(className);
      var regex = new RegExp('(?:\\s|^)' + safeClassName + '(?:\\s|$)');
      return regex.test(element.className);
    },

    addClass: function (element, className) {
      if (!this.hasClass(element, className)) {
        element.className += ' ' + className;
      }
    },

    removeClass: function (element, className) {
      if (this.hasClass(element, className)) {
        var safeClassName = this.escapeRegExp(className);
        var regex = new RegExp('(\\s|^)' + safeClassName + '(\\s|$)');
        element.className = element.className.replace(regex, '');
      }
    },

    // http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
    escapeRegExp: function (str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    },

    clone: function (obj) {
      var c = obj instanceof Array ? [] : {};

      if (typeof obj != 'object' || obj == null) {
        return obj;
      }

      for (var i in obj) {
        var prop = obj[i];
        if (typeof prop == 'object') {
          if (prop instanceof Array) {
            c[i] = [];
            for (var j = 0; j < prop.length; j++) {
              if (typeof prop[j] != 'object') {
                c[i].push(prop[j]);
              } else {
                c[i].push(this.clone(prop[j]));
              }
            }
          } else {
            c[i] = this.clone(prop);
          }
        } else {
          c[i] = prop;
        }
      }
      return c;
    }

  };

  /* Plugin */

  cc.popup = (function () {

    // array of values from COOKIE_STATUS
    var allowedStatuses = util.map(cc.COOKIE_STATUS, util.escapeRegExp);

    // regex to identify HTML button by class name. matches classes 'cc_btn_'+('denied' OR 'allowed' OR 'dismissed')
    var allowedButtonClass = new RegExp('(?:\\s|^)cc_btn_(' + allowedStatuses.join('|') + ')(?:\\s|$)');

    var defaultOptions = {
      enabled: true,

      // configuration
      theme: 'light-floating',
      container: null, // selector
      dismissOnScroll: false, // (disabled on false) auto-dismisses message when scrolled past a point. Pass number that `scrollTop` must exceed. E.G. 500
      dismissOnTimeout: false, // (disabled on false) auto-dismisses message on a timeout. Pass timeout in milliseconds. E.G. 3000
      blacklistPage: [], // match pages using a string or regex. matching pages in this array are automatically disabled
      whitelistPage: [], // match pages using a string or regex. matching pages in this array are automatically enabled

      // interface
      message: 'This website uses cookies to ensure you get the best experience on our website.',
      allow: 'Allow',
      deny: 'Deny',
      dismiss: 'Got it!',
      explicit: false,

      // extra link after `message`
      learnMore: null, // '<a href="#null" target="_self">More Info</a>',

      // cookie details
      domain: null, // default to current domain.
      path: '/',
      expiryDays: 365,

      // Hooks
      onAllowCookies: function () {}, // cookies were accepted for the first time
      onDenyCookies: function () {}, // cookies were denied for the first time
      onComplete: function (status) {}, // called on complete with the users preference to using cookies (see COOKIE_STATUS)

      // interface html
      markup: '<div class="cc_banner-wrapper">\
        <div class="cc_banner cc_container">\
          <a class="cc_btn"></a>\
          <p class="cc_message"></p>\
          <a class="cc_logo" target="_blank" href="http://silktide.com/cookieconsent">Cookie Consent plugin for the EU cookie law</a>\
        </div>\
      </div>'
    };

    return {

      init: function (options) {
        this.setOptions(util.isObject(options) ? options : {});

        // calls `onComplete` if necessary
        checkCallbackHooks.call(this);

        // enable / disable plugin depending on config
        applyPageFilter.call(this);

        if (this.isOpen()) {
          this.close();
        }

        if (!this.options.enabled) {
          return;
        }

        if (!this.loadedThemes) {
          this.loadedThemes = [];
        }

        // check if theme is already loaded
        if (this.options.theme) {
          this.useTheme(this.options.theme, function () {
            // theme loaded

            // TODO we could potentially open the popup before the theme is loaded
            //      in these cases, we should delay the `open` until the theme is loaded
          });
        }

        if (this.options.container) {
          this.container = document.querySelector(this.options.container);
        } else {
          this.container = document.body;
        }

        this._onButtonClick = util.bind(function (e) {
          if (util.hasClass(e.target, 'cc_btn')) {
            var matches = e.target.className.match(allowedButtonClass);

            if (matches && matches[1]) {
              this.setStatus(matches[1]);
              this.close();
            }
          }
        }, this);

        // create hidden HTML element
        render.call(this);

        // uses `dismissOnScroll` and `dismissOnTimeout`
        applyAutoDismiss.call(this);
      },

      destroy: function () {
        if (this.element) {
          util.removeEventListener(this.element, 'click', this._onButtonClick);

          this._onButtonClick = null;

          if (this.loadedThemes.length) {
            this.unloadThemes();
          }

          // remove from DOM
          this.element.parentNode.removeChild(this.element);

          // remove reference
          this.element = null;
        }

        if (this.container) {
          // remove reference
          this.container = null;
        }
      },

      setOptions: function (options) {
        // set options back to default options
        this.options = util.clone(defaultOptions);

        // merge new options
        util.merge(this.options, options);
      },

      useTheme: function (theme, callback) {
        // check if the theme has already been loaded
        if (util.contains(this.loadedThemes, theme)) {
          // disable current theme
          findLoadedTheme(this.lastTheme).disabled = true;

          // find `theme` and enable it
          findLoadedTheme(theme).disabled = false;

          this.lastTheme = theme;

          callback.call(this);
        } else {
          loadTheme.call(this, theme, callback);
        }
      },

      unloadThemes: function () {
        // not the most efficient, but at least I don't have to implement an 'intersect' function
        util.each(this.loadedThemes, function (theme) {
          var linkTag = findLoadedTheme(theme);
          if (linkTag && linkTag.ownerNode) {
            var node = linkTag.ownerNode;
            node.parentNode.removeChild(node);
          }
        });

        this.loadedThemes = [];
        this.lastTheme = undefined;
      },

      isOpen: function () {
        return this.element && this.element.style.display === '' && !util.hasClass(this.element, 'cc_fade_out');
      },

      open: function (callback) {
        if (!this.isOpen() && this.element) {
          if (cc.HAS_TRANSITION && this.element.style.display == '') {
            util.removeClass(this.element, 'cc_fade_out');

            // Sometimes the popup is hidden with '.cc_fade_out' (which uses visibility: hidden).
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
      },

      close: function (callback) {
        if (this.isOpen()) {
          if (cc.HAS_TRANSITION) {
            util.addClass(this.element, 'cc_fade_out');
          } else {
            this.element.style.display = 'none';
          }
        }
      },

      setStatus: function (status) {
        var opts = this.options;
        var value = util.readCookie(cc.COOKIE_STATUS_NAME);
        var chosenBefore = util.contains(cc.COOKIE_STATUS, value);

        // if `status` is valid
        if (util.contains(cc.COOKIE_STATUS, status)) {
          util.setCookie(cc.COOKIE_STATUS_NAME, status, opts.expiryDays, opts.domain, opts.path);

          if (!chosenBefore) {
            status == cc.COOKIE_STATUS.DENIED ? this.options.onDenyCookies() : this.options.onAllowCookies();
            this.options.onComplete(status);
          }
        } else {
          this.clearStatus();
        }
      },

      getStatus: function () {
        return util.readCookie(cc.COOKIE_STATUS_NAME)
      },

      clearStatus: function () {
        util.setCookie(cc.COOKIE_STATUS_NAME, '', -1, this.options.domain, this.options.path);
      }
    };

    function findLoadedTheme (theme) {
      var sheets = document.styleSheets;
      var regex, linkTag, tag;

      // we find themes by checking if any of the CSS urls ends with `theme`.
      // if `theme` was specified as a relative URL, then it could be preceeded by directory selectors ('.' or '..')
      // seeing as we area checking if the url ends with `theme`, it's okay to remove these selectorss.
      if(theme.substr(0, 2) == '..') {
        theme = theme.substr(2);
      }
      if (theme[0] == '.') {
        theme = theme.substr(1);
      }

      regex = new RegExp(util.escapeRegExp(theme) + '$');

      for (var i = 0, l = sheets.length; i < l; ++i) {
        tag = sheets[i];

        // if `tag.href` ends with `theme`
        if (tag.href && tag.href.match(regex)) {
          linkTag = tag;
          break;
        }
      }

      return linkTag;
    }

    function loadTheme (theme, callback) {
      var link = document.createElement('link');
      var onCssLoad = util.bind(function () {
        if(this.lastTheme) {
          findLoadedTheme(this.lastTheme).disabled = true;
        }

        this.loadedThemes.push(theme);
        this.lastTheme = theme;

        util.removeEventListener(link, 'load', onCssLoad);
        link = null;

        callback.call(this);
      }, this);

      // If theme is specified by name
      if (theme.indexOf('.css') === -1) {
        theme = cc.THEME_BUCKET_PATH + theme + '.css';
      }

      util.addEventListener(link, 'load', onCssLoad);
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = theme;

      document.getElementsByTagName('head')[0].appendChild(link);
    }

    function render () {
      // if already rendered, ignore
      if (this.element) {
        return;
      }

      // create markup
      this.element = util.buildDom(this.options.markup);

      // Add class to container classes so we can specify css for IE8 only
      if (navigator.appVersion.indexOf('MSIE 8') > -1) {
        util.addClass(this.element, 'cc_ie8');
      }

      var cont = util.getElementByClass(this.element, 'cc_container');
      var para = util.getElementByClass(this.element, 'cc_message');
      var button = util.getElementByClass(this.element, 'cc_btn');

      para.innerHTML = this.options.message;

      // if additional link exists, append it to the message
      if (this.options.learnMore) {
        var learnMore = util.buildDom(this.options.learnMore);
        para.innerHTML += ' '; // add a space before we append the link
        learnMore.className += ' cc_more_info';
        para.appendChild(learnMore);

        learnMore = null;
      }

      // remove class 'explicit' and add it later if needed
      util.removeClass(cont, 'explicit');

      if (!this.options.explicit) {
        // just the dismiss button
        button.innerHTML = this.options.dismiss;
        button.className += ' cc_btn_' + cc.COOKIE_STATUS.DISMISSED;
      } else {
        var deny = button.cloneNode();
        // accept / deny buttons
        button.innerHTML = this.options.allow;
        button.className += ' cc_btn_' + cc.COOKIE_STATUS.ALLOWED;

        deny.innerHTML = this.options.deny;
        deny.className += ' cc_btn_' + cc.COOKIE_STATUS.DENIED;

        button.parentNode.insertBefore(deny, button.nextSibling);

        util.addClass(cont, 'explicit');

        deny = null;
      }

      util.addEventListener(this.element, 'click', this._onButtonClick);

      this.element.style.display = 'none';

      if (!this.container.firstChild) {
        this.container.appendChild(this.element);
      } else {
        this.container.insertBefore(this.element, this.container.firstChild);
      }

      // attempting to clear references (though the browser should do this anyway...)
      cont = null;
      para = null;
      button = null;
    }

    function applyAutoDismiss () {
      var delay = this.options.dismissOnTimeout;
      if (typeof delay == 'number') {
        window.setTimeout(util.bind(function () {
          this.dismiss();
        }, this), Math.floor(delay));
      }

      var scrollRange = this.options.dismissOnScroll;
      if (typeof scrollRange == 'number') {
        var onWindowScroll = util.bind(function (evt) {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            this.dismiss();

            util.removeEventListener(window, 'scroll', onWindowScroll);
          }
        }, this);

        util.addEventListener(window, 'scroll', onWindowScroll);
      }
    }

    function checkCallbackHooks () {
      if (window.navigator && !navigator.cookieEnabled) {
        this.options.onComplete(cc.COOKIE_STATUS.DENIED);
      }

      if ((window.navigator && window.navigator.CookiesOK) || window.CookiesOK) {
        this.options.onComplete(cc.COOKIE_STATUS.ALLOWED);
      }

      var status = util.readCookie(cc.COOKIE_STATUS_NAME);
      if (status == cc.COOKIE_STATUS.DISMISSED) {
        this.options.onComplete(cc.COOKIE_STATUS.DISMISSED); // can use cookies
      } else if (status == cc.COOKIE_STATUS.ALLOWED) {
        this.options.onComplete(cc.COOKIE_STATUS.ALLOWED); // can use cookies
      } else if (status == cc.COOKIE_STATUS.DENIED) {
        this.options.onComplete(cc.COOKIE_STATUS.DENIED); // cannot use cookies
      } else if (typeof status != 'undefined') {
        // the dismissed cookie is invalid. delete it
        this.clearStatus();
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

  }());

  cc.law = (function () {

    var hasLaw = ['BE', 'DK', 'CZ', 'FR', 'BG', 'IT', 'SE', 'HU', 'RO', 'SK', 'SI', 'IE', 'PL', 'GB', 'FI', 'LU', 'ES', 'HR', 'CY', 'LV', 'LT', 'PT', 'NL'];
    var explicit = ['HR', 'CY'];
    var explicitPersonal = ['LV', 'LT', 'PT', 'DE'];
    var implicit = ['BE', 'DK', 'CZ', 'FR', 'BG', 'IT', 'SE', 'HU', 'RO', 'SK', 'SI', 'IE', 'PL', 'GB', 'FI', 'LU', 'ES', 'LI', 'EE', 'NO', 'MT', 'IS', 'DE'];
    var refusable = ['DK', 'CZ', 'FR', 'BG', 'IT', 'LU', 'EE', 'DE', 'NL'];
    var consciousDismiss = ['ES'];
    var browserSettings = ['SE', 'HU', 'RO', 'SK', 'SI', 'IE', 'PL', 'GB', 'FI', 'LU', 'ES', 'NO', 'MT', 'IS'];

    return {

      get: function (countryCode) {
        return {
          hasLaw: arrayIndexOf(hasLaw, countryCode) >= 0,
          explicit: arrayIndexOf(explicit, countryCode) >= 0,
          explicitPersonal: arrayIndexOf(explicitPersonal, countryCode) >= 0,
          implicit: arrayIndexOf(implicit, countryCode) >= 0,
          refusable: arrayIndexOf(refusable, countryCode) >= 0,
          consciousDismiss: arrayIndexOf(consciousDismiss, countryCode) >= 0,
          browserSettings: arrayIndexOf(browserSettings, countryCode) >= 0
        };
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
      success(cc.applyCountryLaw(options, result.code));
    }, failure);
  };

  cc.applyCountryLaw = function (options, countryCode) {
    var country = cc.law.get(countryCode);

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

    if (!country.autodismiss) {
      // user must explicitly click the consent button
      options.dismissOnScroll = false;
      options.dismissOnTimeout = false;
    }

    return options;
  };

  cc.oldinit = function (options) {
    cc.popup.init(options);
    var status = cc.popup.getStatus();
    if (!util.contains(cc.COOKIE_STATUS, status) && cc.popup.options.enabled) {
      cc.popup.open();
    }
  };

  cc.util = util;

  window.cookieconsent = cc;

}(window.cookieconsent || {}));
