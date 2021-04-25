window['cookieconsent_example_util'] = {
  // Fill a select element with options (html can be configured using `cb`)
  fillSelect: function(select, options, selected, cb) {
    if (typeof cb != 'function') {
      cb = this.getSimpleOption;
    }
    select.innerHTML = Object.keys( options ).reduce( function ( str, key ) {
      return str + cb(options[key], key, key == selected);
    }, '');
  },

  getSimpleOption: function(label, value, selected) {
    return '<option '+(selected ? 'selected="selected"' : '')+' value="'+value+'">'+label+'</option>'
  },

  tabularObject: function(obj, formatVal, formatKey) {
    if (typeof formatKey !== 'function') formatKey = function (){ return arguments[0] };
    if (typeof formatVal !== 'function') formatVal = function (){ return arguments[0] };

    return Object.keys( obj ).reduce( function (str, key) {
      return str += '<li><em>'+formatKey(key, obj[key])+'</em> '+formatVal(obj[key], key)+'</li>'
    }, '<ul>' ) + '</ul>';
  },

  initialisePopupSelector: function(options) {
    const itemOpen = '<li><span>';
    const itemClose = '</span></li>';
    const instances = [];

    options.selector.innerHTML =
      itemOpen +
      Object.keys(options.popups).join(itemClose + itemOpen) +
      itemClose;

    options.selector.onclick = function ( event ) {
      let targ = event.target;

      // if the target is the container, exit
      if (targ.isEqualNode(options.selector)) return;

      // from this point, only the child elements of opts.selector will get through.
      // out of these child elements, we want to find the closest direct descendant <li>
      while (targ.tagName != 'LI' && targ.parentNode) {
        targ = targ.parentNode;
      }

      if (!targ.parentNode.isEqualNode(options.selector)) return;

      // from this point, 'targ' will be a direct descendant of opts.selector
      const index = Array.from(options.selector.children).indexOf(targ);

      if (index >= 0 && instances[index]) {
        instances[index].clearStatuses();

        // We could remember the popup that's currently open, but it gets complicated when we consider
        // the revoke button. Therefore, simply close them all regardless
        instances.forEach(function(instance) {
          if (instance.isOpen()) {
            instance.close();
          }
          instance.toggleRevokeButton(false);
        });

        instances[index].open();
      }
    };

    Object.keys( options.popups ).forEach( function ( example, index ) {
      const myOpts = options.popups[example];
      myOpts.autoOpen = false;

      instances[ index ] = new options.cookieconsent( myOpts )
      instances[ index ].on( "popupOpened", function () {
        const codediv = document.getElementById('options');
        if (codediv) {
          codediv.innerHTML = JSON.stringify(options, null, 2);
        }
      })
      instances[ index ].on( "error", console.error );
    })
    window.addEventListener( "unload", () => {
      instances.forEach( instance => {
        instance.clearStatuses();
        instance.destroy();
      })
    })    

    return instances;
  }
};

function timeStamp() {
  const now = new Date();
  const time = [now.getHours(), now.getMinutes(), now.getSeconds()];
  for (let i = 1; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = '0' + time[i];
    }
  }
  return '[' + time.join(':') + '] ';
}