
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
};
