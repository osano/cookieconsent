
window['cookieconsent_example_util'] = {

  // creates an object of elements.
  createInputs: function (inputs) {
    var elems = {};
    inputs.forEach(function (c, i, a) {
      elems[c] = document.getElementById(c);
    });
    return elems;
  },

  // creates and returns a funtion that is called every `onchange` event.
  // calling the returned function triggers the passed function `draw`.
  createUpdater: function (elems, draw) {
    var getInputs = this.getInputs.bind(this);
    var updater = function () {
      draw(getInputs(elems));
    };
    for (var prop in elems) {
      elems[prop].onchange = function () { updater() };
    }
    return updater;
  },

  // maps an object of elements into an object of the elements values
  getInputs: function (elems) {
    return this.mapObject(elems, function (c) {
      if (c.tagName != 'SELECT') {
        return c.value;
      }
      return c.selectedIndex >= 0 ? c[c.selectedIndex].value : undefined;
    })
  },

  // repeatedly uses `fillSelect` for corresponding keys in `inputs` and `opts`.
  // `optionsFormat` must be a function that accepts an array of values and returns an object of those values.
  //                 (the object keys are used as option values, and the object values are used as the option labels)
  createSelects: function (inputs, opts, optionsFormat) {
    for (var prop in inputs) {
      this.fillSelect(inputs[prop], optionsFormat(opts[prop]), opts[prop][0]);
    }
  },

  // fill a select element with options (html can be configured using `cb`)
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

  // takes an array of values and uses them as keys and provides a callback to generate a new value from the key
  formatSelectOptionsFromArray: function (cb, opts) {
    var obj = {};
    opts.forEach(function (c) {
      obj[c] = cb.apply(null, arguments);
    });
    return obj;
  },

  pretty: function (str) {
    return str[0].toUpperCase() + str.slice(1).replace(/\-/g, ' ');
  },

  yn: function (bool) {
    return bool ? 'yes' : 'no';
  },

  getSimpleOption: function (label, value, selected) {
    return '<option ' + (selected ? 'selected="selected"' : '') + ' value="' + value + '">' + label + '</option>';
  },

  mapObject: function (obj, cb) {
    var newObj = {};
    Object.keys(obj).map(function(key) {
      newObj[key] = cb(obj[key], key, obj);
    });
    return newObj;
  },

  tabularObject: function (obj, formatVal, formatKey) {
    var html = '<table>';
    var defaultFn = function() { return arguments[0] };

    if (typeof formatKey != 'function') formatKey = defaultFn;
    if (typeof formatVal != 'function') formatVal = defaultFn;

    for (var prop in obj) {
      html += '<tr><td>' + formatKey(prop, obj[prop]) + '</td><td>' + formatVal(obj[prop], prop) + '</td></tr>';
    }
    return html + '</table>';
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

      if (idx >= 0) {
        instances[idx].clearStatus();

        // We could remember the popup thats currently open, but it gets complicated when we consider
        // the revoke button. Therefore, simply close them all regardless (makes life easier)
        instances.forEach(function (popup) {
          if (popup.isOpen()) {
            popup.close()
          }
          popup.toggleRevokeButton();
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
            codediv.style.display = 'block';
          }
        };
      } (options.popups[examples[i]]);
      instances[i] = options.cookieconsent.factory(options.popups[examples[i]]);
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


