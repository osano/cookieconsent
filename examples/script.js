
window['cookieconsent_example_util'] = {

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

  positionContent: function (content, popup, position) {
    var parts = position.split('-', 2);
    var total = window.innerHeight;
    var height = popup.clientHeight;

    if (parts[0] == 'top' || parts[1] == 'top') {
      height += popup.offsetTop;
      content.style.margin = height + 'px 0 0 0';
      content.style.height = (total - height) + 'px';
    } else if (parts[0] == 'bottom' || parts[1] == 'bottom') {
      var offsetBottom = total - (popup.offsetTop + height);
      height += offsetBottom;
      content.style.margin = '0 0 ' + height + 'px 0';
      content.style.height = (total - height) + 'px';
    } else {
      content.style.margin = '0';
      content.style.height = 'auto';
    }
  },

  initialisePopupSelector: function (options) {
    var examples = Object.keys(options.popups);
    var itemOpen = '<li><span>';
    var itemClose = '</span></li>';
    var state = {currentOpen: -1, instances: []};

    options.selector.innerHTML = itemOpen + Object.keys(options.popups).join(itemClose+itemOpen) + itemClose;

    options.selector.onclick = function (e) {
      var targ = e.target, item;

      // if the target is the container, exit
      if (targ.isSameNode(options.selector)) return;

      // from this point, only the child elements of opts.selector will get through.
      // out of these child elements, we want to find the closest direct decendant <li>
      while (targ.tagName != 'LI' && targ.parentNode) {
        targ = targ.parentNode;
      }

      if (!targ.parentNode.isSameNode(options.selector)) return;

      // from this point, 'targ' will be a direct decendant of opts.selector
      var idx = Array.prototype.indexOf.call(options.selector.children, targ);

      if (idx != state.currentOpen) {
        if (state.currentOpen >= 0)
          state.instances[state.currentOpen].close();

        if (idx >= 0)
          state.instances[idx].open();

        state.currentOpen = idx;
      }
    };

    for (var i = 0, l = examples.length; i < l; ++i) {
      var opts = options.popups[examples[i]];
      opts.onPopupOpen = function () {
        state.currentOpen = -1;
      };
      state.instances[i] = options.cookieconsent.factory(options.popups[examples[i]]);
    }

    return state;
  },
};
