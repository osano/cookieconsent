
window['cookieconsent_example_util'] = {

  // Fill a select element with options (html can be configured using `cb`)
  fillSelect: function (select, options, selected, cb) {
    var html = '';
    if (typeof cb != 'function') {
      cb = this.getSimpleOption;
    }
    for (var prop in options) {
      html += cb(options[prop], prop, prop == selected);
    }
    select.innerHTML = html;
  },

  getSimpleOption: function (label, value, selected) {
    return '<option ' + (selected ? 'selected="selected"' : '') + ' value="' + value + '">' + label + '</option>';
  },

  tabularObject: function (obj, formatVal, formatKey) {
    var html = '<ul>';
    var defaultFn = function() { return arguments[0] };

    if (typeof formatKey != 'function') formatKey = defaultFn;
    if (typeof formatVal != 'function') formatVal = defaultFn;

    for (var prop in obj) {
      html += '<li><em>' + formatKey(prop, obj[prop]) + '</em> ' + formatVal(obj[prop], prop) + '</li>';
    }
    return html + '</ul>';
  },

  initialisePopupSelector: function (options) {
    var examples = Object.keys(options.popups);
    var itemOpen = '<li><span>';
    var itemClose = '</span></li>';
    var instances = [];

    options.selector.innerHTML = itemOpen + Object.keys(options.popups).join(itemClose+itemOpen) + itemClose;

    options.selector.onclick = function (e) {
      var targ = e.target, item;

      // if the target is the container, exit
      if (targ.isEqualNode(options.selector)) return;

      // from this point, only the child elements of opts.selector will get through.
      // out of these child elements, we want to find the closest direct decendant <li>
      while (targ.tagName != 'LI' && targ.parentNode) {
        targ = targ.parentNode;
      }

      if (!targ.parentNode.isEqualNode(options.selector)) return;

      // from this point, 'targ' will be a direct decendant of opts.selector
      var idx = Array.prototype.indexOf.call(options.selector.children, targ);

      if (idx >= 0 && instances[idx]) {
        instances[idx].clearStatus();

        // We could remember the popup that's currently open, but it gets complicated when we consider
        // the revoke button. Therefore, simply close them all regardless
        instances.forEach(function (popup) {
          if (popup.isOpen()) {
            popup.close()
          }
          popup.toggleRevokeButton(false);
        });

        instances[idx].open();
      }
    };

    for (var i = 0, l = examples.length; i < l; ++i) {
      options.popups[examples[i]].onPopupOpen = function(options) {
        return function(){
          var codediv = document.getElementById('options');
          if(codediv) {
            codediv.innerHTML = JSON.stringify(options, null, 2);
          }
        };
      } (options.popups[examples[i]]);

      var myOpts = options.popups[examples[i]];

      myOpts.autoOpen = false;

      options.cookieconsent.initialise(myOpts, function(idx, popup){
        instances[idx] = popup;
      }.bind(null, i), function(idx, err, popup) {
        instances[idx] = popup;
        console.error(err);
      }.bind(null, i));
    }

    return instances;
  },

};

  function timeStamp() {
    var now = new Date();
    var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
    for ( var i = 1; i < 3; i++ ) {
      if ( time[i] < 10 ) {
        time[i] = "0" + time[i];
      }
    }
    return '['+time.join(":")+'] ';
  }


