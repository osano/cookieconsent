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

  window.cookieconsent = cc;

  // http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm
  // http://www.fieldfisher.com/pdf/cookie-consent-tracking-table.pdf
  // https://cookiepedia.co.uk/cookie-laws-across-europe
  // https://www.binarymoon.co.uk/2012/05/eu-country-codes/
  // https://www.cookiereports.com/articles/eu-eprivacy-directive/
  // https://termsfeed.com/blog/austria-to-slovakia-eu-cookies-directive/
  // https://www.cookiereports.com/articles/The-General-Data-Protection-Regulation-GDPR/
  // https://www.dlapiper.com/~/media/Files/Insights/Publications/2014/09/EU_Cookies_Update_September_2014.pdf

  // All assume informed consent with cookie audits
  // All assume that personal identifying cookies are used
  // No informed consent is required for non-personal-identifying cookies
  // All assume that all collected data is destroyed after the expiration of a specified period of time

  // Cookie policies must be site-specific and not generic
  // Current browser settings are not sufficient to obtain consent (Data Protection Office)
  // Any targetted ads, or other personally identifiable data NEEDS EXPLICIT PERMISSION

  // Italy wants "per cookie control"
  // Germany requires that a record of consent is kept, along with methods to view current consent and revoke consent

  // Most require a mechanism to revoke consent
  // Most require explicit consent for personal data

  // A cookie law exists
  //   BE  Belgium       : Implied
  //   DK  Denmark       : Implied / Refusable
  //   CZ  Czech Republic: Implied / Refusable
  //   FR  France        : Implied / Refusable
  //   BG  Bulgaria      : Implied / Refusable
  //   SE  Sweden        : Implied - Browser/App settings
  //   HU  Hungary       : Implied - Browser/App settings
  //   RO  Romania       : Implied - Browser/App settings
  //   SK  Slovakia      : Implied - Browser/App settings
  //   SI  Slovenia      : Implied - Browser/App settings
  //   LU  Luxembourg    : Implied - Browser/App settings - Refusable
  //   FI  Finland       : Browser/App settings
  //   ED  Spain         : Browser/App settings - Conscious action
  //   HR  Croatia       : Explicit
  //   CY  Cyprus        : Explicit
  //   LV  Latvia        : Explicit (for personal data)
  //   LT  Lithuania     : Explicit (for personal data)
  //   PT  Portugal      : Explicit (for personal data)
  //   IE  Ireland       : Browser/App settings
  //   IT  Italy         : Implied / Refusable
  //   NL  Netherlands   : Ambiguous
  //   PL  Poland        : Implied - Browser/App settings
  //   GB  United Kingdom: Implied - Browser/App settings

  // A cookie law does not exist
  //   LI  Liechtenstein : Implied
  //   GR  Greece        : Ambiguous
  //   EE  Estonia       : Implied / Refusable
  //   NO  Norway        : Implied - Browser/App settings
  //   MT  Malta         : Implied - Browser/App settings
  //   IS  Iceland       : Implied - Browser/App settings
  //   DE  Germany       : Implied / Explicit (for personal data) / Refusable

  // GDPR
  //  - Organisations must obtain “explicit” consent for the collection and processing of all Personal data, whether sensitive or non-sensitive data.
  //  - Inactivity, such as not clicking “Accept” on a notice on a web site but continuing to use the web site, is not accepted as consent under the new rules.
  //  - Consent must also be informed, meaning the person who is consenting must be reasonably expected to understand what it is they are consenting to
  //  - The age of the person giving consent is also relevant and any child aged 13 years or under cannot consent to the processing of personal data
  //  - The “Right to be Forgotten” has also been formalized, as have individuals’ rights to deny or withdraw consent. Withdrawal or refusal of consent should not be detrimental to the individual
  //  - The key words here are “informed” and “unambiguous”
  // 
  // (DOES NOT REQUIRE CONSENT) Activities likely to fall within the exception
  //   Authentication Cookie - remember me"
  //   Multimedia content player cookies
  //   User-input cookies
  //   Cookies that are used solely for the purpose of transmitting a communication, and
  //   Cookies that are absolutely necessary for a website to provide the service that the user is requesting.
  //   A cookie used to remember the goods a user wishes to buy when they proceed to the checkout or add goods to their shopping basket.
  //   Certain cookies providing security that is essential to comply with the security requirements of the seventh data protection principle for an activity the user has requested – for example in connection with online banking services.
  //   Some cookies help ensure that the content of your page loads quickly and effectively by distributing the workload across numerous computers
  //   Used for the sole purpose of carrying out the transmission of a communication
  //   Strictly necessary in order for the provider of an information society service explicitly required by the user to provide that service.
  //   User‑input cookies (session-id) such as first‑party cookies to keep track of the user's input when filling online forms, shopping carts, etc., for the duration of a session or persistent cookies limited to a few hours in some cases
  //   Authentication cookies, to identify the user once he has logged in, for the duration of a session
  //   User‑centric security cookies, used to detect authentication abuses, for a limited persistent duration
  //   Multimedia content player cookies, used to store technical data to play back video or audio content, for the duration of a session
  //   Load‑balancing cookies, for the duration of session
  //   User‑interface cookies, such as language or font preferences, for the duration of a session (or slightly longer)
  //   Third‑party social plug‑in cookies, logged‑in members of a social network
  //
  // (REQUIRES CONSENT) Activities unlikely to fall within the exception
  //   First and third party advertising cookies
  //   Cookies used for analytics purposes to count the number of unique visits to a website for example
  //   Cookies used to recognise a user when they return to a website so that the greeting they receive can be tailored

  // Consent Options
  // There are 3 generally accepted options when considering how to gain the consent of the end user of your website.
  //   Explicit consent – This is where consent is actively given by the end user BEFORE a cookie is placed onto the end users terminal or web enabled device. This is the highest level of compliance that can be achieved. In some member states this is the required level of consent to be legally compliant.
  //   Implied consent  – A level of implied consent is acceptable in certain member states (including the UK). This is where the user’s acceptance of cookies is implied and cookies can be set before active consent is given. This is normally done via some form of notification window informing the user that cookies are used but without any active consent.
  //   Browser settings – The majority of member states do not accept this as a method of gaining consent. This is minimal consent at best and it is recommended that this not be used.

  window.cookielaw = (function(){

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

}(window.cookieconsent || {}));
