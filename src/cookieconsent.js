
(function (cc) {
  // stop from running again, if accidently included more than once.
  if (cc.hasInitialised) return;

  var util = {
    // http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
    escapeRegExp: function (str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    },

    hasClass: function (element, selector) {
      var s = ' ';
      return element.nodeType === 1 &&
          (s + element.className + s).replace(/[\n\t]/g, s).indexOf(s + selector + s) >= 0;
    },

    addClass: function (element, className) {
      element.className += ' ' + className;
    },

    removeClass: function (element, className) {
      var regex = new RegExp('\\b' + util.escapeRegExp(className) + '\\b');
      element.className = element.className.replace(regex, '');
    },

    interpolateString: function (str, callback) {
      var marker = /{{([a-z][a-z0-9\-_]*)}}/ig;
      return str.replace(marker, function (matches) {
        return callback(arguments[1]) || '';
      })
    },

    getCookie: function (name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      return parts.length != 2 ?
        undefined : parts.pop().split(';').shift();
    },

    setCookie: function (name, value, expiryDays, domain, path) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + (expiryDays || 365));

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

    // only used for extending the initial options
    deepExtend: function(dest, src) {
      for (var prop in src) {
        var v = src[prop];
        if (typeof v === 'object' && v !== null) {
          dest[prop] = dest[prop] || {};
          this.deepExtend(dest[prop], v);
        } else {
          dest[prop] = v;
        }
      }
      return dest;
    },

    // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)
    throttle: function (callback, limit) {
      var wait = false;
      return function () {
        if (!wait) {
          callback.apply(this, arguments);
          wait = true;
          setTimeout(function () {
            wait = false;
          }, limit);
        }
      }
    },

    // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through javascript)
    hash: function (str) {
      var hash = 0, i, chr, len;
      if (str.length === 0) return hash;
      for (i = 0, len = str.length; i < len; i++) {
        chr   = str.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0;
      }
      return hash;
    },

    validateHex: function(hex) {
      hex = hex.substr(1);
      if (hex.length < 6) {
        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
      }
      return hex;
    },

    // used to get text colors if not set
    getContrast: function (hex){
      hex = util.validateHex(hex);
      var r = parseInt(hex.substr(0,2),16);
      var g = parseInt(hex.substr(2,2),16);
      var b = parseInt(hex.substr(4,2),16);
      var yiq = ((r*299)+(g*587)+(b*114))/1000;
      return (yiq >= 128) ? '#000' : '#fff';
    },

    // used to change color on highlight
    getLuminance: function(hex) {
      hex = util.validateHex(hex);
      if (hex=='000000') return '#222'; //for black buttons
      lum = 0.2;
      var rgb = "#", c, i;
      for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
      }
      return rgb;
    },

    // getting the directory of javascript file
    getDirectory: function() {
      sc = document.getElementsByTagName("script");
      for(i = 0; i < sc.length; i++) {
        s = sc.item(i);
        if(s.src && s.src.match(/cookieconsent.min.js$/))
        { return s.src.slice(0,-'cookieconsent.min.js'.length); }
      }
      return '';
    },

    isMobile: function() {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) return true;
      return false;
    }

  };

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

  cc.transitionEnd = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

  // array of valid regexp escaped statuses
  var __allowedStatuses = Object.keys(cc.status).map(util.escapeRegExp);

  // contains references to the custom <style> tags
  cc.customStyles = {};

  cc.Popup = (function () {

    var defaultOptions = {

      // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
      cookie: {
        // This is the name of this cookie - you can ignore this
        name: 'cookieconsent_status',

        // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
        path: '/',

        // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
        //  - Guide to cookie domains - http://erik.io/blog/2014/03/04/definitive-guide-to-cookie-domains/
        domain: '',

        // The cookies expire date, specified in days (specify -1 for no expiry)
        expiryDays: 365,
      },

      // if false, this prevents the popup from showing (useful for giving to control to another piece of code)
      enabled: true,

      // optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
      container: null,

      // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
      // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
      // 
      //     var instance = cookieconsent.factory(options);
      //     document.body.appendChild(instance.element);
      //
      autoattach: true,

      // Change if stylesheet is not in the same folder as javasscript
      stylesheet: util.getDirectory()+'cookieconsent.min.css',

      // these callback hooks are called at certain points in the program execution
      onPopupOpen: function() {},
      onPopupClose: function() {},
      onStatusChange: function(status) {},
      onRevokeChoice: function(oldStatus) {},

      // each item defines the inner text for the element that it references
      content: {
        header: 'Cookies used on the website!',
        message: 'This website uses cookies to ensure you get the best experience on our website.',
        dismiss: 'Got it!',
        allow: 'Allow cookies',
        deny: 'Decline',
        link: 'Learn more',
        href: 'http://cookiesandyou.com',
        close: '&#x274c;',
      },

      // used to disable link on existing layouts
      // replaces element messagelink with message and removes content of link
      showlink: true,

      // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
      // You can remove "{{header}}" and write the content directly inside the HTML if you want.
      //
      //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
      //    and to set the focus to the first interactive control (http://w3c.github.io/aria-in-html/)
      elements: {
        header: '<span class="cc-header">{{header}}</span>&nbsp;',
        message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
        messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a></span>',
        dismiss: '<a aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
        allow: '<a aria-label="allow cookies" tabindex="0" class="cc-btn cc-allow">{{allow}}</a>',
        deny: '<a aria-label="deny cookies" tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
        link: '<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank">{{link}}</a>',
        close: '<span aria-label="dismiss cookie message" tabindex="0" class="cc-close">{{close}}</span>',

        //compliance: compliance is also an element, but it is generated by the application, depending on `type` below
      },

      // this refers to the popup windows position. we currently support:
      //  banner positions: top, bottom
      //  floating positions: top-left, top-right, bottom-left, bottom-right
      //  adds a class `cc-floating` or `cc-banner` which helps when styling
      position: 'bottom',

      // select your type of popup here
      type: 'info', // refers to `compliance` (in other words, the buttons that are displayed)

      // define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
      compliance: {
        'info': '<div class="cc-compliance">{{dismiss}}</div>',
        'opt-in': '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}</div>',
        'opt-out': '<div class="cc-compliance cc-highlight">{{deny}}{{dismiss}}</div>',
      },

      //default layout
      layout: 'basic',

      // define layout layouts here
      layouts: {
        // the 'block' layout tend to be for square floating popups
        'basic': '{{messagelink}}{{compliance}}',
        'basic-close': '{{messagelink}}{{compliance}}{{close}}',
        'basic-header': '{{header}}{{message}}{{link}}{{compliance}}',

        // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
        //'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',
      },

      // enable pushdown for body when banner top is use
      pushdown: true,

      // Enables fade-in/out and pushdown animations
      transitions: true,

      // Available styles
      //    -block (default, no extra classes)
      //    -edgeless
      //    -classic
      // use your own style name and use .cc-style-STYLENAME class in CSS to edit .
      // Note: style "wire" is used for the configurator, but has no CSS styles of it's own, only palette is used.
      windowstyle: 'block',

      // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
      //  - {{classes}} is where additional classes get added
      //  - {{children}} is where the HTML children are placed
      window: '<div role="dialog" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">{{children}}</div>',

      // This is the html for the revoke button. This only shows up after the user has selected their level of consent
      // It can be enabled of disabled using the `revokable` option
      revokeBtn: '<div class="cc-revoke {{classes}}">Cookie Policy</div>',

      // Some countries REQUIRE that a user can change their mind. You can configure this yourself.
      // Most of the time this should be false, but the `cookieconsent.law` can change this to `true` if it detects that it should
      revokable: false,

      // if true, the revokable button will tranlate in and out
      animateRevokable: true,

      // Make this false if you want to disable all regional overrides for settings.
      // If true, options can differ by country, depending on their cookie law.
      // does not affect hiding the concent window for countries that do no have cooki law.
      regionalLaw: true,


      // set value as scroll range to enable
      dismissOnScroll: false,

      // set value as time in milliseconds to autodismiss after set time
      dismissOnTimeout: false,


      // if you want custom colours, pass them in here. this object should look like this
      //   {
      //     popup: {background: '#000000', text: '#fff', link: '#fff'},
      //     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
      //     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
      //   }
      // `highlight` is optional and extends `button`. if it exists, it will apply to the first button
      // only background needs to be defined for every element. if not set, other colors can be calculated from it
      palette: null,

      // simple whitelist/blacklist for pages. specify page by:
      //   - using a string : '/index.html'           (matches '/index.html' exactly) OR
      //   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
      whitelistPage: [],
      blacklistPage: [],

      // If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
      // Be sure to use the classes `cc-btn` and `cc-allow`, `cc-deny` or `cc-dismiss`. They enable the app to register click
      // handlers. You can use other pre-existing classes too. See `src/styles` folder.
      overrideHTML: null,
    };

    function CookiePopup () {
      this.initialise.apply(this, arguments);
    }

    CookiePopup.prototype.initialise = function (options) {
      if (this.options) {
        this.destroy(); // already rendered
      }

      this.waitingForStylesheet = false; // set to true if we have made a request for a stylesheet, and it has not returned
      this.openAfterStylesheet = false; // set to true if we tried to `open` to popup whilst `waitingForStylesheet`
      this.requestedTheme = null; // this is the <link> tag containing the coookie popup style, we save it so we can delete it later

      // set options back to default options
      util.deepExtend(this.options = {}, defaultOptions);

      // merge in user options
      if (typeof options === 'object' && options !== null) {
        util.deepExtend(this.options, options);
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


       // load stylesheet
      if (this.options.stylesheet) {
        this.waitingForStylesheet = true;
        this.requestedTheme = loadStyles.call(this, this.options.stylesheet, function (success) {
          this.waitingForStylesheet = false;
          if (this.openAfterStylesheet) {
            this.openAfterStylesheet = false;
            this.open();
          }
        });
      }

      // the full markup either contains the wrapper or it does not (for multiple instances)
      var cookiePopup = this.options.window
        .replace('{{classes}}', getPopupClasses.call(this).join(' '))
        .replace('{{children}}', getPopupInnerMarkup.call(this));

      // if user passes html, use it instead
      var customHTML = this.options.overrideHTML;
      if (typeof customHTML == 'string' && customHTML.length) {
        cookiePopup = customHTML;
      }

      this.element = appendMarkup.call(this, cookiePopup);

      // uses `dismissOnScroll` and `dismissOnTimeout`
      applyAutoDismiss.call(this);

      applyRevokeButton.call(this);


      return this;
    };

    CookiePopup.prototype.destroy = function () {
      if (this.onButtonClick && this.element) {
        this.element.removeEventListener('click', this.onButtonClick);
        this.onButtonClick = null;
      }

      if (this.dismissTimeout) {
        clearTimeout(this.dismissTimeout);
        this.dismissTimeout = null;
      }

      if (this.onWindowScroll) {
        window.removeEventListener('scroll', this.onWindowScroll);
        this.onWindowScroll = null;
      }

      if (this.onMouseMove) {
        window.removeEventListener('mousemove', this.onMouseMove);
        this.onMouseMove = null;
      }

      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
      this.element = null;

      if (this.revokeBtn && this.revokeBtn.parentNode) {
        this.revokeBtn.parentNode.removeChild(this.revokeBtn);
      }
      this.revokeBtn = null;

      if (this.requestedTheme) {
        var styleNode = this.requestedTheme.ownerNode;
        if (styleNode && styleNode.parentNode) {
          styleNode.parentNode.removeChild(styleNode);
        }
      }
      this.requestedTheme = null;

      removeCustomStyle(this.options.palette);
      this.options = null;
    };

    CookiePopup.prototype.open = function (callback) {
      if (!this.options.enabled)
        return this;

      // if we try and open the popup, and it's style hasn't loaded, set a flag to open it later
      if (this.waitingForStylesheet) {
        // setting this to true means that this function will be automatically called when the stylesheet returns
        this.openAfterStylesheet = true;
        return;
      }

      if (!this.isOpen()) {
        if (hasTransition.call(this)) {
          this.fadeIn();
        } else {
          this.element.style.display = '';
        }

        if (this.options.revokable) {
          this.toggleRevokeButton();
        }
        this.options.onPopupOpen();
      }

      // add push down for body when top banner type
      if(this.options.position == 'top') pushDown.call(this, this.element.offsetHeight);
      else pushDown.call(this, 0);
      
      return this;
    };

    CookiePopup.prototype.close = function (showRevoke) {
      if (!this.options.enabled)
        return this;

      if (this.isOpen()) {
        if (hasTransition.call(this)) {
          this.fadeOut();
        } else {
          this.element.style.display = 'none';
        }

        if (showRevoke && this.options.revokable) {
          this.toggleRevokeButton(true);
        }
        this.options.onPopupClose();
      }
      pushDown.call(this, 0);
      return this;
    };

    CookiePopup.prototype.fadeIn = function () {
      var el = this.element;

      if (!hasTransition.call(this))
        return;

      // this should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
      // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
      // has a chance to run, then we run it ourselves
      if (this.afterTransition) {
        afterFadeOut.call(this, el)
      }

      if (util.hasClass(el, 'cc-invisible')) {
        el.style.display = '';

        this.openingTimeout = setTimeout(afterFadeIn.bind(this, el), 5);
      }
    };

    CookiePopup.prototype.fadeOut = function () {
      var el = this.element;

      if (!hasTransition.call(this))
        return;

      if (this.openingTimeout) {
        clearTimeout(this.openingTimeout);
        afterFadeIn.bind(this, el);
      }

      if (!util.hasClass(el, 'cc-invisible')) {
        this.afterTransition = afterFadeOut.bind(this, el);
        el.addEventListener('transitionend', this.afterTransition);

        util.addClass(el, 'cc-invisible');
      }
    };

    CookiePopup.prototype.isOpen = function () {
      return this.element && this.element.style.display == '' && (hasTransition.call(this) ? !util.hasClass(this.element, 'cc-invisible') : true);
    };

    CookiePopup.prototype.toggleRevokeButton = function (show) {
      if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
    }; 

    CookiePopup.prototype.setStatus = function (status) {
      var c = this.options.cookie;
      var value = util.getCookie(c.name);
      var chosenBefore = Object.keys(cc.status).indexOf(value) >= 0;

      // if `status` is valid
      if (Object.keys(cc.status).indexOf(status) >= 0) {
        util.setCookie(c.name, status, c.expiryDays, c.domain, c.path);

        this.options.onStatusChange(status, chosenBefore);
      } else {
        this.clearStatus();
      }
    };

    CookiePopup.prototype.getStatus = function () {
      return util.getCookie(this.options.cookie.name);
    };

    CookiePopup.prototype.clearStatus = function () {
      var c = this.options.cookie;
      util.setCookie(c.name, '', -1, c.domain, c.path);
    };

    // This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
    // There is a good reason why it's called in a timeout. Read 'fadeIn';
    function afterFadeIn (el) {
      this.openingTimeout =  null;
      util.removeClass(el, 'cc-invisible');
    }

    // This is called on 'transitionend' (only on the transition of the fadeOut). That's because after we've faded out, we need to
    // set the display to 'none' (so there aren't annoying invisible popups all over the page). If for whenever reason this function
    // is not called (lack of support), the open/close mechanism will still work.
    function afterFadeOut (el) {
      el.style.display = 'none'; // after close and before open, the display should be none
      el.removeEventListener('transitionend', this.afterTransition);
      this.afterTransition = null;
    }

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
      var answer = this.getStatus();
      var match = allowed.indexOf(answer) >= 0;

      if (match) {
        complete(answer);
      }
      return match;
    }

    function getPositionClasses () {
      var positions = this.options.position.split('-'); // top, bottom, left, right
      var classes = [];

      // top, left, right, bottom
      positions.forEach(function (cur) {
        classes.push('cc-' + cur);
      });

      return classes;
    }

    function getPopupClasses () {
      var opts = this.options;
      var positionStyle = (opts.position == 'top' || opts.position == 'bottom') ? 'banner' : 'floating';
      var classes = [
        'cc-' + positionStyle,      // floating or banner
        'cc-type-' + opts.type,   // add the compliance type
        'cc-windowstyle-' + opts.windowstyle, // add the windwowstyle class
      ];

      classes.push.apply(classes, getPositionClasses.call(this));

      // we only add extra styles if `palette` has been set to a valid value
      var didAttach = attachCustomPalette.call(this, this.options.palette);

      // if we override the palette, add the class that enables this
      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      return classes;
    }

    function getPopupInnerMarkup () {
      var interpolated = {};
      var opts = this.options;

      //removes link if showlink is false
      if(opts.showlink == 'false') { 
        opts.elements.link = '';
        opts.elements.messagelink = opts.elements.message;
      }

      Object.keys(opts.elements).forEach(function (prop) {
        interpolated[prop] = util.interpolateString(opts.elements[prop], function (name) {
          var str = opts.content[name];
          return (name && typeof str == 'string' && str.length) ? str : '';
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

      var layout = opts.layouts[opts.layout];

      if (!layout) {
        layout = opts.layouts.basic;
      }

      return util.interpolateString(layout, function(match) {
        return interpolated[match];
      });
    }

    function appendMarkup (markup) {
      var opts = this.options;
      var div = document.createElement('div');
      var cont = (opts.container && opts.container.nodeType === 1) ? opts.container : document.body;

      div.innerHTML = markup;

      var el = div.children[0];

      el.style.display = 'none';

      if (util.hasClass(el, 'cc-window') && hasTransition.call(this)) {
        util.addClass(el, 'cc-invisible');
      }

      // save ref to the function handle so we can unbind it later
      this.onButtonClick = handleButtonClick.bind(this);

      el.addEventListener('click', this.onButtonClick);

      if (opts.autoattach) {
        if (!cont.firstChild) {
          cont.appendChild(el);
        } else {
          cont.insertBefore(el, cont.firstChild)
        }
      }

      return el;
    }

    function handleButtonClick (event) {
      var targ = event.target;
      if (util.hasClass(targ, 'cc-btn')) {

        var matches = targ.className.match(new RegExp("\\bcc-(" + __allowedStatuses.join('|') + ")\\b"));
        var match = (matches && matches[1]) || false;

        if (match) {
          this.setStatus(match);
          this.close(true);
        }
      }
      if (util.hasClass(targ, 'cc-close')) {
        this.setStatus(cc.status.dismiss);
        this.close(true);
      }
      if (util.hasClass(targ, 'cc-revoke')) {
        this.options.onRevokeChoice(this.getStatus());
        this.clearStatus();
        this.open();
      }
    }

    // I might change this function to use inline styles. I originally chose a stylesheet because I could select many elements with a
    // single rule (something that happened a lot), the apps has changed slightly now though, so inline styles might be more applicable.
    function attachCustomPalette (palette) {
      var hash = util.hash(JSON.stringify(palette));
      var selector = 'cc-color-override-' + hash;
      var isValid = typeof palette == 'object' && palette !== null;

      this.customStyleSelector = isValid ? selector : null;

      if (isValid) {
        addCustomStyle(hash, palette, '.'+selector);
      }
      return isValid;
    }

    function addCustomStyle (hash, palette, prefix) {

      // only add this if a style like it doesn't exist
      if (cc.customStyles[hash]) {
        // custom style already exists, so increment the reference count
        ++cc.customStyles[hash].references;
        return;
      }

      var colorStyles = {};
      var popup = palette.popup;
      var button = palette.button;
      var highlight = palette.highlight;

      // needs background colour, text and link will be set to black/white if not specified
      if (popup) { 
        // assumes popup.background is set
        popup.text = popup.text ? popup.text : util.getContrast(popup.background);
        popup.link = popup.link ? popup.link : popup.text;
        colorStyles[prefix + '.cc-window'] = [
          'color: '+popup.text, 
          'background-color: '+popup.background
        ];
        colorStyles[prefix + '.cc-revoke'] = [
          'color: '+popup.text, 
          'background-color: '+popup.background
        ];
        colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'   ] = [
          'color: '+popup.link
          ];

        if (button) {
          // assumes button.background is set
          button.text = button.text ? button.text : util.getContrast(button.background);
          button.border = button.border ? button.border : 'transparent';
          colorStyles[prefix + ' .cc-btn'] = [
            'color: '+button.text, 
            'border-color: '+button.border, 
            'background-color: '+button.background
          ];
          colorStyles[prefix + ' .cc-btn:hover'] = [
            'background-color: ' + util.getLuminance(button.background)
          ];

          if (highlight) {
            //assumes highlight.background is set
            highlight.text = highlight.text ? highlight.text : util.getContrast(highlight.background);
            highlight.border = highlight.border ? highlight.border : 'transparent';
            colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = [
              'color: '+highlight.text, 
              'border-color: '+highlight.border, 
              'background-color: '+highlight.background
            ];
          } else { 
            // sets highlight text color to popup text. background and border are transparent by default.
            colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = [
              'color: '+popup.text
            ];
          }
        }

      }

      // this will be interpretted as CSS. the key is the selector, and each array element is a rule
      var style = document.createElement('style');
      document.head.appendChild(style);

      // custom style doesn't exist, so we create it
      cc.customStyles[hash] = {references: 1, element: style.sheet};

      var ruleIndex = -1;
      for (var prop in colorStyles) {
        style.sheet.insertRule(prop + '{' + colorStyles[prop].join(';') + '}', ++ruleIndex);
      }
    }

    function removeCustomStyle (palette) {
      if (typeof palette == 'object' && palette !== null) {
        var hash = util.hash(JSON.stringify(palette));
        var customStyle = cc.customStyles[hash];
        if (customStyle && !--customStyle.references) {
          var styleNode = customStyle.element.ownerNode;
          if (styleNode && styleNode.parentNode) {
            styleNode.parentNode.removeChild(styleNode);
          }
          cc.customStyles[hash] = null;
        }
      }
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
        this.dismissTimeout = window.setTimeout(function () {
          setStatus(cc.status.dismiss);
        }, Math.floor(delay));
      }

      var scrollRange = this.options.dismissOnScroll;
      if (typeof scrollRange == 'number' && scrollRange >= 0) {
        var onWindowScroll = function (evt) {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            setStatus(cc.status.dismiss);

            window.removeEventListener('scroll', onWindowScroll);
            this.onWindowScroll = null;
          }
        };

        this.onWindowScroll = onWindowScroll;
        window.addEventListener('scroll', onWindowScroll);
      }
    }

    function applyRevokeButton () {
      // revokable is true if advanced compliance is selected
      if(this.options.type != 'info') this.options.revokable = true;
      // animateRevokable false for mobile devices
      if(util.isMobile()) this.options.animateRevokable = false;

      if (this.options.revokable) {
        var classes = getPositionClasses.call(this);
        if (this.options.animateRevokable) {
          classes.push('cc-animate');
        }
        if (this.customStyleSelector) {
          classes.push(this.customStyleSelector)
        }
        var revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' '));
        this.revokeBtn = appendMarkup.call(this, revokeBtn);

        var btn = this.revokeBtn;
        if (this.options.animateRevokable) {
          var wait = false;
          var onMouseMove = util.throttle(function (evt) {
            var active = false;
            var minY = 20;
            var maxY = (window.innerHeight - 20);

            if (util.hasClass(btn, 'cc-top') && evt.clientY < minY) active = true;
            if (util.hasClass(btn, 'cc-bottom') && evt.clientY > maxY) active = true;

            if (active) {
              if (!util.hasClass(btn, 'cc-active')) {
                util.addClass(btn, 'cc-active');
              }
            } else {
              if (util.hasClass(btn, 'cc-active')) {
                util.removeClass(btn, 'cc-active');
              }
            }
          }, 200);

          this.onMouseMove = onMouseMove;
          window.addEventListener('mousemove', onMouseMove);
        }
      }
    }

    function loadStyles(stylesheet, complete){
      var self = this;
      var link = document.createElement("link");
      var createCallback = function (success) {
        return function () {
          complete.apply(self, [success].concat(arguments));
        };
      };
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = stylesheet;
      link.onload = createCallback(true);
      link.onerror = createCallback(false);

      document.head.appendChild(link);

      return link;
    }

    function pushDown(height) {
      if(!this.options.pushdown) return;
      var body = document.getElementsByTagName("body")[0]; 
      var navbar = document.getElementsByClassName("navbar-fixed-top")[0]; //for bootstrap fixed navbar
      if(height!=0) {
        if(document.getElementById("wpadminbar")) height = height - 32;  // WP admin bar
        if(hasTransition.call(this)) {
          body.style.transition = 'all .4s linear .5s';
          if(navbar) navbar.style.transition = 'all .4s linear .5s';
        }
      } else {
        body.style.transition = 'none';
        if(navbar) navbar.style.transition = 'none';
      }
      body.style.marginTop = height+'px';
      if(navbar) navbar.style.marginTop = height+'px';
    }

    function hasTransition() {
      if (this.options) return this.options.transitions && cc.hasTransition;
      return cc.hasTransition;
    }

    return CookiePopup
  }());

  cc.law = (function () {

    var hasLaw = ['BE', 'DK', 'CZ', 'FR', 'BG', 'IT', 'SE', 'HU', 'RO', 'SK', 'SI', 'IE', 'PL', 'GB', 'FI', 'LU', 'ES', 'HR', 'CY', 'LV', 'LT', 'PT', 'NL'];
    var revokable = ['HR', 'CY', 'LV', 'LT', 'PT', 'DE', 'DK', 'CZ', 'FR', 'BG', 'IT', 'LU', 'EE', 'DE', 'NL'];
    var explicitAction = ['ES'];

    return {

      get: function (countryCode) {
        return {
          hasLaw: hasLaw.indexOf(countryCode) >= 0,
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

        if(options.regionalLaw == 'true') {
          if (country.revokable) {
            // we must provide an option to revoke consent at a later time
            options.revokable = true;
          }

          if (country.explicitAction) {
            // user must explicitly click the consent button
            options.dismissOnScroll = false;
            options.dismissOnTimeout = false;
          }

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
          xhr.setRequestHeader(split[0].replace(/^\s+|\s+$/g, ''), split[1].replace(/^\s+|\s+$/g, ''));
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
    popup = new cc.Popup(options);
    return popup;
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

  // only open if the user hasnt answered
  cc.autoOpen = function (options) {
    var popup = cc.factory(options);

    var status = popup.getStatus();
    if (Object.keys(cc.status).indexOf(status) < 0 && popup.options.enabled) {
      popup.open();
    }
    return popup;
  };

  // export utils (no point in hiding them, so we may as well expose them)
  cc.utils = util;

  // prevent this code from being run twice
  cc.hasInitialised = true;

  window.cookieconsent = cc;

} (window.cookieconsent || {}));
