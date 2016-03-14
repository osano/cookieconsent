(function (cc) {

  // Stop from running again, if accidently included more than once.
  if (cc.hasInitialised) {
    return;
  }

  cc.hasInitialised = true;

  /*
   Constants
   */

  // Name of cookie to be set when dismissed
  cc.DISMISSED_COOKIE = 'cookieconsent_dismissed';

  // The path to built in themes
  // Note: Directly linking to a version on the CDN like this is horrible, but it's less horrible
  //       than people downloading the code then discovering that their CSS bucket disappeared
  cc.THEME_BUCKET_PATH = '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.10/';

  cc.TRANSITION_END = 'webkitTransitionEnd transitionend msTransitionEnd oTransitionEnd';

  /*
   Helper methods
   */

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

  /*
   Plugin
   */

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

      onlyInEurope: false,
      blacklistCountry: [],
      whitelistCountry: [],

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
      this.applyPageFilter();

      this.initialiseContainer();
    };

    cc.initialiseContainer = function () {
      if (!this.options.enabled) {
        return;
      }

      this.setContainer();

      // Calls render when theme is loaded.
      if (this.options.theme) {
        this.loadTheme(this.render);
      } else {
        this.render();
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
    }

    cc.setOptionsOnTheFly = function (options) {
      window[OPTIONS_VARIABLE] = options;
      this.init();
    };

    cc.setOptions = function (options) {
      cc.util.merge(this.options, options);
    };

    cc.setContainer = function () {
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
    };

    cc.loadTheme = function (callback) {
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
    };

    cc.render = function () {
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
    };

    cc.dismiss = function (evt) {
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

    cc.setLocation = function (countryCode, continentCode) {
      // remember these values for subsequent calls (prevent requiring a second ajax request)
      this.countryCode = countryCode;
      this.continentCode = continentCode;

      // if only show in europe and the client is not in europe, disable
      if (this.options.onlyInEurope && continentCode != 'EU') {
        this.options.enabled = false;
      }

      // if our country is blacklisted, disable
      var blacklist = this.options.blacklistCountry;
      if (blacklist.length && blacklist.indexOf(countryCode) >= 0) {
        this.options.enabled = false;
      }

      // if our country is whitelisted, force enable
      var whitelist = this.options.whitelistCountry;
      if (whitelist.length && whitelist.indexOf(countryCode) >= 0) {
        this.options.enabled = true;
      }
    };

    cc.applyPageFilter = function () {
      var page = location.pathname;

      var invalidPages = this.options.blacklistPage;
      if (invalidPages && invalidPages.length) {
        // if this url matches an entry in `invalidPages`, disable
        if (this.matchStringArray(page, invalidPages)) {
          this.options.enabled = false;
        }
      }

      var validPages = this.options.whitelistPage;
      if (validPages && validPages.length) {
        // if this url matches an entry in `validPages`, enable
        if (this.matchStringArray(page, validPages)) {
          this.options.enabled = true;
        }
      }
    };

    // `search` is a string
    // returns true if any of the items in `array` match `search`
    // values in `array` can be a string or an instance of RegExp
    cc.matchStringArray = function (search, array) {
      for (var i = 0, l = array.length; i < l; ++i) {
        var str = array[i];
        // if regex matches or string is equal, return true
        if ((str instanceof RegExp && str.test(search)) ||
          (typeof str == 'string' && str.length && str === search)) {
          return true;
        }
      }
      return false;
    };

    cc.cookieLawApplies = function () {
      if (typeof this.continentCode != 'string' || !this.continentCode.length) {
        // if we don't know the answer, assume true
        return true;
      }

      // cookie law only applies in europe
      return this.continentCode == 'EU';
    };

    cc.hasConsented = function () {
      return cc.util.readCookie(cc.DISMISSED_COOKIE) === 'yes';
    };

  window.cookieconsent = cc;

}(window.cookieconsent || {}));