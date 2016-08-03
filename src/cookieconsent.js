
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

  // contains the custom <style> tags
  cc.customStyles = {};

  // helper libraries
  var util = {
    trim: function (str) {
      return str.replace(/^\s+|\s+$/g, '');
    },

    // http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
    escapeRegExp: function (str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    },

    interpolateString: function (str, callback) {
      var marker = /{{([a-z][a-z0-9\-_]*)}}/ig;
      return str.replace(marker, function (matches) {
        return callback(arguments[1]) || '';
      })
    },

    hasClass: function (element, selector) {
      return element.nodeType === 1 &&
          (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + selector + " ") >= 0;
    },
  };
  var dom = {
    createStyle: function (attrs) {
      var style = document.createElement('style');

      for (var prop in attrs) {
        style.setAttribute(prop, attrs[prop]);
      }

      style.appendChild(document.createTextNode('')); // webkit hack

      document.head.appendChild(style);

      return style.sheet;
    },

    addCSSRule: function(sheet, selector, rules, index) {
      if ('insertRule' in sheet) {
        sheet.insertRule(selector + '{' + rules + '}', index);
      }
      else if('addRule' in sheet) {
        sheet.addRule(selector, rules, index);
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

  // array of valid regexp escaped statuses
  var __allowedStatuses = Object.keys(cc.status).map(util.escapeRegExp);

  cc.Popup = (function () {

    var defaultOptions = {
      enabled: true,
      container: null, // optional (expecting a HTML element)

      // some callback hooks which are called at certain points in the app
      onPopupOpen: function() {},
      onPopupClose: function() {},
      onStatusChange: function(status) {},

      // simple whitelist/blacklist for pages. specify page by:
      //   - using a string : '/index.html'                     (matches '/index.html' exactly) OR
      //   - using RegExp   : /\/page_[\d]+\.html/              (matched '/page_1.html' and '/page_2.html' etc)
      whitelistPage: [],
      blacklistPage: [],

      // defaults to the current domain
      cookie: { path: '/', domain: 'localhost', expiryDays: 365 },

      // each item defines the inner text for the element that it references
      content: {
        header: 'Cookies used on the website',
        message: 'Our website uses cookies to make your browsing experience better. By using our site you agree to our use of cookies.',
        dismiss: 'Close and don\'t show again',
        link: 'Learn more',
        allow: 'Allow',
        deny: 'Deny',
        close: '&#x274c;',
      },

      // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
      //  - {{classes}} is where additional classes get added
      //  - {{children}} is where the HTML children are placed
      window: '<div class="cc-window {{classes}}">{{children}}</div>',

      // this is the HTML for the elements above. {{children}} will be replaced with the equivalent 'content' above
      elements: {
        header: '<span class="cc-header">{{children}}</span>',
        message: '<span class="cc-message">{{children}}</span>',
        dismiss: '<a class="cc-btn cc-dismiss">{{children}}</a>',
        link: '<a href="/" class="cc-link">{{children}}</a>',
        allow: '<a class="cc-btn cc-allow">{{children}}</a>',
        deny: '<a class="cc-btn cc-deny">{{children}}</a>',
        close: '<span class="cc-close">{{children}}</span>',
      },

      // define types of compliance here
      compliance: {
        'dismiss': '<div class="cc-compliance">{{dismiss}}</div>',
        'info': '<div class="cc-compliance">{{dismiss}}{{link}}</div>',
        'opt-in': '<div class="cc-compliance cc-highlight">{{allow}}{{deny}}</div>',
        'opt-out': '<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',
      },

      // define layout themes here
      themes: {
        // the 'block' layout tend to be for square floating popups
        'basic-block': '{{message}}{{compliance}}',
        'centered-block': '{{message}}{{link}}{{compliance}}',

        // the 'inline' layouts tend to be for the banner popups (the {{compliance}} must be first because it floats right)
        'basic-inline': '{{compliance}}{{message}}',
      },

      showClose: false,
      showHeader: false,

      // define custom color palettes here
      palettes: {
        'white': {popup: {background: '#fafafa', text: '#000', link: '#888'}, button: {background: 'transparent', border: '#86b4ea', text: '#86b4ea'}},
        'blue' : {popup: {background: '#4a90e2', text: '#fff', link: '#fff'}, button: {background: 'transparent', border: '#ffffff', text: '#ffffff'}},
        'red'  : {popup: {background: '#d34040', text: '#fff', link: '#fff'}, button: {background: 'transparent', border: '#ffffff', text: '#ffffff'}, highlight: {background: '#ffffff', border: '#ffffff', text: '#d34040'}},
        'black': {popup: {background: '#000000', text: '#fff', link: '#fff'}, button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'}, highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'}},


        'black-orange': {
          popup: {background: '#252c33', text: '#fff', link: '#fff'},
          button: {background: '#fa6956', border: '#fa6956', text: '#fff'},
        },
        'green-green': {
          popup: {background: '#4ea8af', text: '#fff', link: '#fff'},
          button: {background: '#91e23e', border: '#91e23e', text: '#fff'},
        },
        'blue-grey': {
          popup: {background: '#205072', text: '#fff', link: '#fff'},
          button: {background: '#b7bbc0', border: '#b7bbc0', text: '#fff'},
        },
        'grey-black': {
          popup: {background: '#b7bbc0', text: '#fff', link: '#fff'},
          button: {background: '#252c33', border: '#252c33', text: '#fff'},
        },
        'red-white': {
          popup: {background: '#fa5656', text: '#fff', link: '#fff'},
          button: {background: '#ffffff', border: '#ffffff', text: '#fff'},
        },
        'purple-white': {
          popup: {background: '#956cb9', text: '#fff', link: '#fff'},
          button: {background: '#ffffff', border: '#ffffff', text: '#000'},
        },
      },

      // this refers to the popup windows position. we currently support:
      //  - top-left  top-right  bottom-left  bottom-right                 (for floating themes)
      //  - banner-top  banner-bottom                                      (for banner themes)
      position: 'bottom-right',

      // select your type of popup here
      type: 'dismiss',                 // refers to `compliance`
      theme: 'mono-floating',          // refers to `themes`
      palette: '',                     // refers to `palettes`

      // If this is defined, then it is used as the inner html instead of `themes`. This allows for ultimate customisation.
      // Be sure to use the classes `cc-btn` and `cc-allow`, `cc-deny` or `cc-dismiss`. They enable the app to register click
      // handlers. You can use other pre-existing classes too. See `src/styles` folder.
      overrideHTML: null,

      // By default the created HTML is automatically appended to the container (which defaults to <body>). Set this to false to
      // prevent this behaviour. You must attach the `element` yourself, which is a public property of the popup instance.
      // 
      //     var instance = cookieconsent.factory(options);
      //     document.body.appendChild(instance.element);
      //
      autoattach: true,
    };

    function CookiePopup () {
      this.initialise.apply(this, arguments);
    }

    CookiePopup.getThemes = function () { return Object.keys(defaultOptions.themes) };
    CookiePopup.getPalettes = function () { return Object.keys(defaultOptions.palettes) };
    CookiePopup.getCompliances = function () { return Object.keys(defaultOptions.compliance) };

    CookiePopup.prototype.initialise = function (options) {
      if (this.options) {
        // already rendered
        this.destroy();
      }

      // set options back to default options
      this.options = Object.assign({}, defaultOptions);

      // merge in user options
      if (Object.prototype.toString.call(options) == '[object Object]') {
        Object.assign(this.options, options);
      }

      // returns true if `onComplete` was called
      if (checkCallbackHooks.call(this)) {
        // user has already answered
        this.options.enabled = false;
      }

      // apply blacklist / whitelist
      if (arrayContainsMatches(this.options.blacklistPage, location.pathname)) {
        this.options.enabled = false;
      }
      if (arrayContainsMatches(this.options.whitelistPage, location.pathname)) {
        this.options.enabled = true;
      }

      // the full markup either contains the wrapper or it does not (for multiple instances)
      var cookiePopup = this.options.window
        .replace('{{classes}}', getPopupClasses.call(this).join(' '))
        .replace('{{children}}', getPopupInnerMarkup.call(this));

      appendMarkup.call(this, cookiePopup);

      // uses `dismissOnScroll` and `dismissOnTimeout`
      applyAutoDismiss.call(this);

      return this;
    };

    /**
     * Removes element from the DOM, and nullifies properties
     */
    CookiePopup.prototype.destroy = function () {
      var opts = this.options;
      var customStyle = opts.palette && cc.customStyles[opts.palette];

      if (this._onButtonClick && this.element) {
        this.element.removeEventListener('click', this._onButtonClick);
      }

      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }

      if (customStyle && !--customStyle.references) {
        var styleNode = customStyle.element.ownerNode;
        if (styleNode && styleNode.parentNode) {
          styleNode.parentNode.removeChild(styleNode);
        }
        cc.customStyles[opts.palette] = null;
      }

      // remove references
      this.dynamicStyle = null;
      this._onButtonClick = null;

      this.element = null;
      this.options = null;
    };

    /**
     * Returns true if thecookie popup window is visible
     */
    CookiePopup.prototype.isOpen = function () {
      return this.element && this.element.style.display === '' && !util.hasClass(this.element, 'cc-fadeout');
    };

    CookiePopup.prototype.open = function (callback) {
      var el = this.element;
      if (!this.isOpen() && el) {
        if (cc.hasTransition && el.style.display == '') {
          var regex = new RegExp('\\b' + util.escapeRegExp('cc-fadeout') + '\\b');
          el.className = el.className.replace(regex, '');

          // Sometimes the popup is hidden with '.cc-fadeout' (which uses visibility: hidden).
          // The "open" animation will only run if the element is hidden (using display: none) before showing it, otherwise the animation won't run.

          // So we can either set 'display: none' after we close the popup OR directly before we open it.
          // It would make more sense to do it after "close" however that means relying on "transitionend", which isn't exactly cross-browser 'reliable'
          el.style.display = 'none';

          // We must "show" the popup in a timeout. This is to give the browser chance to update and draw the DOM.
          // If we don't do this, the animation won't run. If the delay period is < 20ms, the animation won't run.
          setTimeout(function () {
            el.style.display = '';
          }, 20);
        } else {
          el.style.display = '';
        }
        this.options.onPopupOpen();
      }
      return this;
    };

    CookiePopup.prototype.close = function (callback) {
      if (this.isOpen()) {
        if (cc.hasTransition) {
          this.element.className += ' cc-fadeout';
        } else {
          this.element.style.display = 'none';
        }
        this.options.onClose();
      }
      return this;
    };

    CookiePopup.prototype.setStatus = function (status) {
      var opts = this.options;
      var value = cookie.readCookie(cc.cookieName);
      var chosenBefore = Object.keys(cc.status).indexOf(value) >= 0;
      var c = opts.cookie;

      // if `status` is valid
      if (Object.keys(cc.status).indexOf(status) >= 0) {
        cookie.setCookie(cc.cookieName, status, c.expiryDays, c.domain, c.path);

        this.options.onStatusChange(status, chosenBefore);
      } else {
        this.clearStatus();
      }
    };

    CookiePopup.prototype.getStatus = function () {
      return cookie.readCookie(cc.cookieName)
    };

    CookiePopup.prototype.clearStatus = function () {
      cookie.setCookie(cc.cookieName, '', -1, this.options.domain, this.options.path);
    };

    // this function calls the `onComplete` hook and returns true (if needed) and returns false otherwise
    function checkCallbackHooks () {
      var complete = this.options.onStatusChange;

      if (!window.navigator.cookieEnabled) {
        complete(cc.status.deny);
        return true;
      }

      if (window.CookiesOK || window.navigator.CookiesOK) {
        complete(cc.status.allow);
        return true;
      }

      var allowed = Object.keys(cc.status);
      var answer = cookie.readCookie(cc.cookieName);
      var match = allowed.indexOf(answer) >= 0;

      if (match) {
        complete(answer);
      }
      return match;

    }

    function getPopupClasses () {
      var opts = this.options;
      var pos = opts.position.split('-', 2); // top, bottom, left, right

      var classes = [
        // top, bottom, left, right, banner, etc
        'cc-' + pos[0], 'cc-' + pos[1],

        'cc-type-' + opts.type,   // add the compliance type
        'cc-theme-' + opts.theme, // add the theme layout
      ];

      // we only add extra styles if `pallete` has been set to a valid value
      var didAttach = attachCustomPalette.call(this);

      // if we override the pallete, add the class that enables this
      if (didAttach) {
        classes.push('cc-color-override-' + opts.palette);
      }

      return classes;
    }

    function getPopupInnerMarkup () {
      var interpolated = {};
      var opts = this.options;

      Object.keys(opts.elements).forEach(function (prop) {
        interpolated[prop] = util.interpolateString(opts.elements[prop], function (name) {
          // we only deal with "children"
          if (name == 'children') {
            var contentStr = opts.content[prop];
            return opts.content[prop] || '';
          }
        })
      });

      var complianceType = opts.compliance[opts.type];

      if (!complianceType) {
        complianceType = opts.compliance.info;
      }

      // build the compliance types from the already interpolated `elements`
      interpolated.compliance = util.interpolateString(complianceType, function (name) {
        return interpolated[name];
      });

      var theme = opts.themes[opts.theme];

      if (!theme) {
        theme = opts.themes['basic-block'];
      }

      return util.interpolateString(theme, function(match) {
        return interpolated[match];
      });
    }

    function appendMarkup (markup) {
      var opts = this.options;
      var div = document.createElement('div');
      var cont = (opts.container && opts.container.nodeType === 1) ? opts.container : document.body;

      div.innerHTML = markup;

      var el = div.children[0];

      // hide it before adding to DOM
      el.style.display = 'none';

      // save ref to the function handle so we can unbind it later
      this._onButtonClick = handleButtonClick.bind(this);

      el.addEventListener('click', this._onButtonClick);

      if (opts.autoattach) {
        if (!cont.firstChild) {
          cont.appendChild(el);
        } else {
          cont.insertBefore(el, cont.firstChild)
        }
      }

      this.element = el;
    }

    function handleButtonClick (event) {
      var targ = event.target;
      if (util.hasClass(targ, 'cc-btn')) {

        var matches = targ.className.match(new RegExp("\\bcc-(" + __allowedStatuses.join('|') + ")\\b"));
        var match = (matches && matches[1]) || false;

        if (match) {
          this.setStatus(match);
          this.close();
        }
      }
      if (util.hasClass(targ, 'cc-close')) {
        this.setStatus(cc.status.dismiss);
        this.close();
      }
    }

    // I might change this function to use inline styles. I originally chose a stylesheet because I could select many elements with a
    // single rule (something that happened a lot), the apps has changed slightly now though, so inline styles might be more applicable.
    function attachCustomPalette () {
      var colorStyles = {};
      var name = this.options.palette;
      var p = name && this.options.palettes && this.options.palettes[name];
      var addBtn = function(styles, selector, obj) {
        styles[selector] = ['color: '+obj.text, 'border-color: '+obj.border, 'background-color: '+obj.background];
      };

      if (p) {
        var prefix = '.cc-color-override-' + name;

        if (p.popup) {
          colorStyles[prefix + ' .cc-link'] = ['color: '+p.popup.link];
          colorStyles[prefix + '.cc-window'] = ['color: '+p.popup.text, 'background-color: '+p.popup.background];
        }

        if (p.button) {
          addBtn(colorStyles, prefix + ' .cc-btn', p.button);
        }

        if (p.highlight) {
          // only selects the second element if it exists
          addBtn(colorStyles, prefix + ' .cc-highlight .cc-btn:first-child', p.highlight);
        }

        // this will be interpretted as CSS. the key is the selector, and each array element is a rule
        if (!cc.customStyles[name]) {
          var newStyle = dom.createStyle();
          // custom style doesn't exist, so we create it
          cc.customStyles[name] = {
            references: 1,
            element: newStyle,
          };

          var ruleIndex = 0;
          // actually add the rules
          for (var prop in colorStyles) {
            var ruleBody = colorStyles[prop].join(';');
            dom.addCSSRule(newStyle, prop, ruleBody, ruleIndex++);
          }
        } else {
          // custom style already exists, so increment the reference count
          ++cc.customStyles[name].references;
        }
      }

      // returns true if a custom style is chosen
      return !!p;
    }

    function arrayContainsMatches (array, search) {
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

    function applyAutoDismiss () {
      var setStatus = this.setStatus.bind(this);

      var delay = this.options.dismissOnTimeout;
      if (typeof delay == 'number' && delay >= 0) {
        window.setTimeout(function () {
          setStatus(cc.status.dismiss);
        }, Math.floor(delay));
      }

      var scrollRange = this.options.dismissOnScroll;
      if (typeof scrollRange == 'number' && scrollRange >= 0) {
        var onWindowScroll = function (evt) {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            setStatus(cc.status.dismiss);

            window.removeEventListener('scroll', onWindowScroll);
          }
        };

        window.addEventListener('scroll', onWindowScroll);
      }
    }

    return CookiePopup
  }());

  cc.law = (function () {

    var hasLaw = ['BE', 'DK', 'CZ', 'FR', 'BG', 'IT', 'SE', 'HU', 'RO', 'SK', 'SI', 'IE', 'PL', 'GB', 'FI', 'LU', 'ES', 'HR', 'CY', 'LV', 'LT', 'PT', 'NL'];
    var explicit = ['HR', 'CY', 'LV', 'LT', 'PT', 'DE'];
    var revokable = ['DK', 'CZ', 'FR', 'BG', 'IT', 'LU', 'EE', 'DE', 'NL'];
    var explicitAction = ['ES'];

    return {

      get: function (countryCode) {
        return {
          hasLaw: hasLaw.indexOf(countryCode) >= 0,
          explicit: explicit.indexOf(countryCode) >= 0,
          revokable: revokable.indexOf(countryCode) >= 0,
          explicitAction: explicitAction.indexOf(countryCode) >= 0,
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
          options.type = 'opt-in';
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

      // runs service[idx] and triggers the callback on complete
      runService(service, runNextServiceOnError.bind(this));
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

      if (Array.isArray(requestHeaders)) {
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

  cc.factory = function (options) {
    return new cc.Popup(options);
  };

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

  cc.autoOpen = function (options) {
    var popup = cc.factory(options);

    var status = popup.getStatus();
    if (Object.keys(cc.status).indexOf(status) < 0 && popup.options.enabled) {
      popup.open();
    }

    return popup;
  };

  cc.hasInitialised = true;

  window.cookieconsent = cc;

} (window.cookieconsent || {}));
