/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src!./src/styles/main.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none;\n    text-transform: capitalize; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: statuses, statusDeny, statusAllow, statusDismiss, categories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statuses", function() { return statuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDeny", function() { return statusDeny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusAllow", function() { return statusAllow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusDismiss", function() { return statusDismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });


const statuses = ["DENY", "ALLOW", "DISMISS"];
const statusDeny = "DENY";
const statusAllow = "ALLOW";
const statusDismiss = "DISMISS";
const categories = ["UNCATEGORIZED", "ESSENTIAL", "PERSONALIZATION", "ANALYTICS", "MARKETING"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CookieConsent */ "./src/models/CookieConsent.js");





if (typeof exports !== 'undefined') {
  module.exports = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  window.CookieConsent = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/models/Base.js":
/*!****************************!*\
  !*** ./src/models/Base.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);




const emitter = new events__WEBPACK_IMPORTED_MODULE_1___default.a();
class Base {
  constructor(defaultOptions = {}, options = {}) {
    this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(defaultOptions, options);
    this.on = emitter.on.bind(emitter);
    this.emit = emitter.emit.bind(emitter);
  }

}

/***/ }),

/***/ "./src/models/CookieConsent.js":
/*!*************************************!*\
  !*** ./src/models/CookieConsent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieConsent; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _Legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legal */ "./src/models/Legal.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/models/Location.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./src/models/Popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");







 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

class CookieConsent extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(options);
    const answers = _constants__WEBPACK_IMPORTED_MODULE_4__["categories"].map(category => {
      const cookieName = this.options.cookie && this.options.cookie.name ? this.options.cookie.name : 'cookieconsent_status_';
      const answer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getCookie"])(cookieName + category);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isValidStatus"])(answer) ? {
        [category]: answer
      } : undefined;
    }).filter(obj => obj ? obj[Object.keys(obj)[0]] : false); // if they have already answered

    if (answers.length > 0) {
      setTimeout(() => this.emit("initialized", answers));
    } else if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({
        code: this.options.legal.countryCode
      });
    } else if (this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.location).locate(this.initializationComplete.bind(this), this.initializationError.bind(this));
    } else {
      this.initializationComplete({});
    }
  }

  initializationComplete(result) {
    if (result.code) {
      this.options = new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).applyLaw(this.options, result.code);
    }

    this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
    setTimeout(() => this.emit("initialized", this.popup), 0);
  }

  initializationError(error) {
    setTimeout(() => this.emit("error", error, new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options)), 0);
  }

  getCountryLaws(countryCode) {
    return new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).get(countryCode);
  }

  isOpen() {
    return this.popup.isOpen();
  }

  close() {
    return this.popup.close(), this;
  }

  revokeChoice() {
    return this.popup.revokeChoice(), this;
  }

  open() {
    return this.popup.open(), this;
  }

  toggleRevokeButton(bool) {
    return this.popup.toggleRevokeButton(bool), this;
  }

  setStatuses(status) {
    return this.popup.setStatuses(status), this;
  }

  clearStatuses() {
    return this.popup.clearStatuses(), this;
  }

  destroy() {
    return this.popup.destroy(), this;
  }

}
_constants__WEBPACK_IMPORTED_MODULE_4__["statuses"].reduce((obj, status) => (Object.defineProperty(CookieConsent, status, {
  get: function () {
    return status;
  },
  set: function () {},
  enumerable: false,
  writeable: false,
  configurable: false
}), obj), CookieConsent);

/***/ }),

/***/ "./src/models/Legal.js":
/*!*****************************!*\
  !*** ./src/models/Legal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Legal; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");




class Legal extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(_options_legal__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  get(countryCode) {
    return {
      hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
      revokable: this.options.revokable.indexOf(countryCode) >= 0,
      explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
    };
  }

  applyLaw(options, countryCode) {
    const country = this.get(countryCode);

    if (!country.hasLaw) {
      // The country has no cookie law
      options.enabled = false;
      this.emit("noCookieLaw", countryCode, country);
    }

    if (this.options.regionalLaw) {
      if (country.revokable) {
        // We must provide an option to revoke consent at a later time
        options.revokable = true;
      }

      if (country.explicitAction) {
        // The user must explicitly click the consent button
        options.dismissOnScroll = false;
        options.dismissOnTimeout = false;
      }
    }

    return options;
  }

}

/***/ }),

/***/ "./src/models/Location.js":
/*!********************************!*\
  !*** ./src/models/Location.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Location; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

class Location extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_location__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
  }

  getNextService() {
    let service;

    do {
      service = this.getServiceByIdx(++this.currentServiceIndex);
    } while (this.currentServiceIndex < this.options.services.length && !service);

    return service;
  }

  getServiceByIdx(idx) {
    // This can either be the name of a default locationService, or a function.
    const serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

    if (typeof serviceOption === 'function') {
      const dynamicOpts = serviceOption();
      return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
    } // If it's a string, use one of the location services.


    if (typeof serviceOption === 'string') {
      return this.options.serviceDefinitions[serviceOption]();
    } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
    // Allows user to pass in API keys etc.


    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(serviceOption)) {
      return this.options.serviceDefinitions[serviceOption.name](serviceOption);
    }

    return null;
  } // This runs the service located at index `currentServiceIndex`.
  // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully


  locate(complete, error) {
    const service = this.getNextService();

    if (!service) {
      error(new Error('No services to run'));
      return;
    }

    this.callbackComplete = complete;
    this.callbackError = error;
    this.runService(service, this.runNextServiceOnError.bind(this));
  } // Potentially adds a callback to a url for jsonp.


  setupUrl(service) {
    const serviceOpts = this.getCurrentServiceOpts();
    return service.url.replace(/\{(.*?)\}/g, function (_, param) {
      if (param === 'callback') {
        const tempName = 'callback' + Date.now();

        window[tempName] = function (res) {
          service.__JSONP_DATA = JSON.stringify(res);
        };

        return tempName;
      }

      if (param in serviceOpts.interpolateUrl) {
        return serviceOpts.interpolateUrl[param];
      }
    });
  } // requires a `service` object that defines at least a `url` and `callback`


  runService(service, complete) {
    // basic check to ensure it resembles a `service`
    if (!service || !service.url || !service.callback) {
      return;
    } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


    const requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_2__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_2__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

    requestFunction(this.setupUrl(service), xhr => {
      // if `!xhr`, then `getScript` function was used, so there is no response text
      let responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
      // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
      // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

      if (service.__JSONP_DATA) {
        responseText = service.__JSONP_DATA;
        delete service.__JSONP_DATA;
      } // call the service callback with the response text (so it can parse the response)


      this.runServiceCallback.call(this, complete, service, responseText);
    }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
  } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
  // We need to run its callback which determines if its successful or not
  // `complete` is called on success or failure


  runServiceCallback(complete, service, responseText) {
    // this is the function that is called if the service uses the async callback in its handler method
    const serviceResultHandler = asyncResult => {
      // if `result` is a valid value, then this function shouldn't really run
      // even if it is called by `service.callback`
      if (!result) {
        this.onServiceResult(complete, asyncResult);
      }
    }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
    // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


    const result = service.callback(serviceResultHandler, responseText);

    if (result) {
      this.onServiceResult(complete, result);
    }
  } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
  // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data


  onServiceResult(complete, result) {
    // convert result to nodejs style async callback
    if (result instanceof Error || result && result.error) {
      complete.call(this, result, null);
    } else {
      complete.call(this, null, result);
    }
  } // if `err` is set, the next service handler is called
  // if `err` is null, the `onComplete` handler is called with `data`


  runNextServiceOnError(err, data) {
    if (err) {
      this.logError(err);
      const nextService = this.getNextService();

      if (nextService) {
        this.runService(nextService, this.runNextServiceOnError.bind(this));
      } else {
        this.completeService.call(this, this.callbackError, new Error('All services failed'));
      }
    } else {
      this.completeService.call(this, this.callbackComplete, data);
    }
  }

  getCurrentServiceOpts() {
    const val = this.options.services[this.currentServiceIndex];

    if (typeof val == 'string') {
      return {
        name: val
      };
    } else if (typeof val == 'function') {
      return val();
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
      return val;
    } else {
      return {};
    }
  } // calls the `onComplete` callback after resetting the `currentServiceIndex`


  completeService(fn, data) {
    this.currentServiceIndex = -1;
    fn && fn(data);
  }

  logError(err) {
    console.warn(`The service[${this.currentServiceIndex}] (${this.getServiceByIdx(this.currentServiceIndex).url}) responded with the following error`, err);
  }

}

/***/ }),

/***/ "./src/models/Popup.js":
/*!*****************************!*\
  !*** ./src/models/Popup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/popup */ "./src/options/popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






class Popup extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_popup__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.userCategories = {
      UNCATEGORIZED: 'DISMISS',
      ESSENTIAL: 'ALLOW',
      PERSONALIZATION: 'DISMISS',
      ANALYTICS: 'DISMISS',
      MARKETING: 'DISMISS'
    };
    this.customStyles = {};
    this.hasTransition = !!function () {
      const el = document.createElement('div');
      const trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (let prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); // returns true if `onComplete` was called

    if (this.canUseCookies()) {
      // user has already answered
      this.options.enabled = false;
    } // apply blacklist / whitelist


    if (this.options.blacklistPage.includes(location.pathname)) {
      this.options.enabled = false;
    }

    if (this.options.whitelistPage.includes(location.pathname)) {
      this.options.enabled = true;
    } // the full markup either contains the wrapper or it does not (for multiple instances)


    let cookiePopup = this.options.window.replace('{{classes}}', this.getPopupClasses().join(' ')).replace('{{children}}', this.getPopupInnerMarkup()); // if user passes html, use it instead

    const customHTML = this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      const wrapper = this.appendMarkup(`<div class="cc-grower">${cookiePopup}</div>`);
      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      this.element.style.display = 'none';
      this.element.classList.add('cc-invisible');
    } else {
      this.element = this.appendMarkup(cookiePopup);
    }

    this.applyAutoDismiss();
    this.applyRevokeButton();

    if (this.options.autoOpen) {
      this.autoOpen();
    }
  }

  open() {
    if (!this.element) return;

    if (!this.isOpen()) {
      if (this.hasTransition) {
        this.fadeIn();
      } else {
        this.element.style.display = '';
      }

      if (this.options.revokable) {
        this.toggleRevokeButton();
      }

      this.emit("popupOpened");
    }

    return this;
  }

  close(showRevoke) {
    if (!this.element) return;

    if (this.isOpen()) {
      if (this.hasTransition) {
        this.fadeOut();
      } else {
        this.element.style.display = 'none';
      }

      if (showRevoke && this.options.revokable) {
        this.toggleRevokeButton(true);
      }

      this.emit("popupClosed");
    }

    return this;
  }

  fadeIn() {
    const el = this.element;
    if (!this.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
    // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
    // has a chance to run, then we run it ourselves

    if (this.afterTransition) {
      this.afterFadeOut(el);
    }

    if (el.classList.contains('cc-invisible')) {
      el.style.display = '';

      if (this.options.static) {
        this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px';
      }

      const fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
      // Although most browsers can handle values less than 20ms, it should remain above this value.
      // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
      // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
      // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
      // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

      this.openingTimeout = setTimeout(() => this.afterFadeIn(el), fadeInTimeout);
    }
  }
  /**
   * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
   * There is a good reason why it's called in a timeout. Read 'fadeIn'
   */


  afterFadeIn(element) {
    this.openingTimeout = null;
    element.classList.remove('cc-invisible');
  }

  fadeOut() {
    if (!this.hasTransition || !this.element) return;

    if (this.openingTimeout) {
      clearTimeout(this.openingTimeout);
      this.afterFadeIn(this.element);
    }

    if (!this.element.classList.contains('cc-invisible')) {
      if (this.options.static) {
        this.element.parentNode.style.maxHeight = '';
      }

      this.afterTransition = () => this.afterFadeOut(this.element);

      this.element.addEventListener(this.transitionEnd, this.afterTransition);
      this.element.classList.add('cc-invisible');
    }
  }

  afterFadeOut(el) {
    el.style.display = 'none'; // after close and before open, the display should be none

    el.removeEventListener(this.transitionEnd, this.afterTransition);
    this.afterTransition = null;
  }

  isOpen() {
    return this.element && this.element.style.display === '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
  }

  toggleRevokeButton(show) {
    if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
  }

  revokeChoice(preventOpen) {
    this.options.enabled = true;
    this.clearStatuses();
    this.emit("revokeChoice");

    if (!preventOpen) {
      this.autoOpen();
    }
  }
  /**
   * Has the user responded to the banner
   * @return { boolean } - true if any cookies have been set
   */


  hasAnswered() {
    return this.getStatuses().some(status => !!status);
  }
  /**
   * Indicates if the user has given consent to all of the categories
   * @return { array<boolean> } - true if consent has been given
   */


  hasConsented() {
    return this.getStatuses().map(status => status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"] || status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
  } // opens the popup if no answer has been given


  autoOpen() {
    const hasAnswered = this.hasAnswered();

    if (!hasAnswered && this.options.enabled) {
      this.open();
    } else if (hasAnswered && this.options.revokable) {
      this.toggleRevokeButton(true);
    }
  }
  /** 
   * Set's cookie statuses
   * @param { string<status> } allOrUndef      - If this is the only param, set ALL if not, set Uncategorized cookies statuses set to value.
   * @param { string<status> } essential       - Essential Cookies status set to value
   * @param { string<status> } personalization - Preferences / Functionality set to value
   * @param { string<status> } analytics       - Analytis Cookies status set to value
   * @param { string<status> } marketing       - Marketing Cookies status set to value
   * @return { undefined }
  */


  setStatuses() {
    const {
      name,
      expiryDays,
      domain,
      path,
      secure
    } = this.options.cookie;

    const updateCategoryStatus = (categoryName, status) => {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)) {
        const cookieName = name + '_' + categoryName;
        const chosenBefore = _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].indexOf(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(cookieName)) >= 0;
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);
        this.emit("statusChanged", cookieName, status, chosenBefore);
      } else {
        this.clearStatuses();
      }
    };

    if (arguments.length === 0) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, this.userCategories[category]));
    } else if (arguments.length === 1) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, arguments[0]));
    } else if (arguments.length > 1) {
      arguments.forEach((categoryStatus, index) => {
        updateCategoryStatus(this.userCategories[index], categoryStatus);
      });
    }
  }
  /**
   * Get all cookie categoies statuses
   * @return { array<string> } - cookie categories status in order of categories
   */


  getStatuses() {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].map(categoryName => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(this.options.cookie.name + '_' + categoryName));
  }
  /**
   * Clear all cookie categoies statuses
   */


  clearStatuses() {
    const {
      name,
      domain,
      path
    } = this.options.cookie;
    _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(categoryName => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(name + '_' + categoryName, '', -1, domain, path);
    });
  }

  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
      return true;
    }

    const statusesValues = this.getStatuses();
    const matches = statusesValues.map((status, index) => ({
      [_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)
    }));
    const hasMatches = matches.filter(match => match[Object.keys(match)[0]]).length > 0;
    statusesValues.forEach((status, index) => this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]] === status ? status : this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]);
    return hasMatches;
  } // top, bottom, left, right


  getPositionClasses() {
    return this.options.position.split('-').map(pos => 'cc-' + pos);
  }

  getPopupClasses() {
    const opts = this.options;
    let positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])() && opts.mobileForceFloat) {
      positionStyle = 'floating';
    }

    const classes = ['cc-' + positionStyle, // floating or banner
    'cc-type-' + opts.type, // add the compliance type
    'cc-theme-' + opts.theme];

    if (opts.static) {
      classes.push('cc-static');
    }

    classes.push.apply(classes, this.getPositionClasses()); // we only add extra styles if `palette` has been set to a valid value

    this.attachCustomPalette(this.options.palette); // if we override the palette, add the class that enables this

    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector);
    }

    return classes;
  }

  getPopupInnerMarkup() {
    const interpolated = {};
    const opts = this.options; // removes link if showLink is false

    if (!opts.showLink) {
      opts.elements.link = '';
      opts.elements.messagelink = opts.elements.message;
    }

    Object.keys(opts.elements).forEach(prop => {
      interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(opts.elements[prop], name => {
        const str = opts.content[name];
        return name && typeof str == 'string' && str.length ? str : '';
      });
    }); // checks if the type is valid and defaults to info if it's not

    let complianceType = opts.compliance[opts.type];

    if (!complianceType) {
      complianceType = opts.compliance.info;
    } // build the compliance types from the already interpolated `elements`


    interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(complianceType, name => interpolated[name]); // checks if the layout is valid and defaults to basic if it's not

    let layout = opts.layouts[opts.layout];

    if (!layout) {
      layout = opts.layouts.basic;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(layout, match => interpolated[match]);
  }

  appendMarkup(markup) {
    const opts = this.options;
    const div = document.createElement('div');
    const cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
    div.innerHTML = markup;
    const el = div.children[0];
    el.style.display = 'none';

    if (el.classList.contains('cc-window') && this.hasTransition) {
      el.classList.add('cc-invisible');
    }

    el.addEventListener('click', event => this.handleButtonClick(event));
    el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.userCategories[checkbox.name] = checkbox.checked ? 'ALLOW' : 'DENY';
      });
      checkbox.addEventListener('click', event => event.stopPropagation());
    });
    el.querySelectorAll(".cc-info").forEach(showInfo => {
      showInfo.addEventListener('mousedown', function (event) {
        if (this === document.activeElement) {
          this.blur();
          event.preventDefault();
        }
      });
    });

    if (opts.autoAttach) {
      try {
        if (!cont.firstChild) {
          cont.appendChild(el);
        } else {
          cont.insertBefore(el, cont.firstChild);
        }
      } catch (error) {
        throw new Error("No container to attach too. Make sure the DOM has loaded. Is your script loaded just before the `</body>` tag?");
      }
    }

    return el;
  }

  handleButtonClick(event) {
    // returns the parent element with the specified class, or the original element - null if not found
    const btn = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

    if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
      this.setStatuses();
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-btn')) {
      const matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].map(str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')).join('|') + ')\\b'));
      const match = matches && matches[1] || false;

      if (match) {
        this.setStatuses(match);
        this.close(true);
      }

      return;
    }

    if (btn.classList.contains('cc-close')) {
      this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-revoke')) {
      this.revokeChoice();
      return;
    }
  }

  attachCustomPalette(palette) {
    const hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hash"])(JSON.stringify(palette));
    const selector = 'cc-color-override-' + hashStr;
    const isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(palette);
    this.customStyleSelector = isValid ? selector : null;

    if (isValid) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
    }

    return isValid;
  }

  getEventPath(event) {
    const path = event.composedPath ? event.composedPath() : function (arr, element) {
      while (element) {
        arr.push(element);
        element = element.parentNode;
      }

      return arr;
    }([], event.target);

    if (!path) {
      console.warn("'.path' & '.composedPath' failed to generate an event path.");
      return;
    }

    return path;
  }

  applyAutoDismiss() {
    const {
      enabled,
      dismissOnTimeout: delay,
      dismissOnScroll: scrollRange,
      dismissOnLinkClick,
      dismissOnWindowClick,
      dismissOnKeyPress
    } = this.options;

    if (enabled) {
      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = setTimeout(() => {
          this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
          this.close(true);
        }, Math.floor(delay));
      } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
        this.onWindowScroll = () => {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('scroll', this.onWindowScroll, {
              passive: true
            });
            this.onWindowScroll = null;
          }
        };

        window.addEventListener('scroll', this.onWindowScroll, {
          passive: true
        });
      } else if (dismissOnWindowClick) {
        this.onWindowClick = evt => {
          if (!getEventPath(evt).some(element => this.options.ignoreClicksFrom.some(ignoredClick => element.classList && element.classList.contains(ignoredClick)))) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onWindowClick);
            window.removeEventListener('touchend', this.onWindowClick);
            this.onWindowClick = null;
          }
        };

        window.addEventListener('click', this.onWindowClick);
        window.addEventListener('touchend', this.onWindowClick);
      } else if (dismissOnLinkClick) {
        this.onLinkClick = evt => {
          if (getEventPath(evt).some(elem => typeof elem.tagName !== 'undefined' && elem.tagName === 'A')) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onLinkClick);
            this.onLinkClick = null;
          }
        };

        window.addEventListener('click', this.onLinkClick);
      } else if (dismissOnKeyPress) {
        this.onKeyPress = event => {
          const {
            keyCode
          } = event;

          if (keyCode === 13) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"]);
            this.close(true);
          } else if (keyCode === 27) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
          }
        };

        window.addEventListener('onkeypress', this.onKeyPress);
      }
    }
  }

  applyRevokeButton() {
    // revokable is true if advanced compliance is selected
    if (this.options.type != 'info') this.options.revokable = true; // animateRevokable false for mobile devices

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()) this.options.animateRevokable = false;

    if (this.options.revokable) {
      const classes = this.getPositionClasses();

      if (this.options.animateRevokable) {
        classes.push('cc-animate');
      }

      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      if (this.options.theme) {
        classes.push('cc-theme-' + this.options.theme);
      }

      console.log(this.options.content.policy);
      const revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
      this.revokeBtn = this.appendMarkup(revokeBtn);
      const btn = this.revokeBtn;

      if (this.options.animateRevokable) {
        const onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (evt) {
          let active = false;
          const minY = 20;
          const maxY = window.innerHeight - 20;

          if (btn.classList.contains('cc-top') && evt.clientY < minY || btn.classList.contains('cc-bottom') && evt.clientY > maxY) {
            active = true;
          }

          if (active && !btn.classList.contains('cc-active')) {
            btn.classList.add('cc-active');
          } else if (!active && btn.classList.contains('cc-active')) {
            btn.classList.remove('cc-active');
          }
        }, 200);
        this.onMouseMove = onMouseMove;
        window.addEventListener('mousemove', onMouseMove);
      }
    }
  }

  destroy() {
    console.warn("Destroying...");

    if (this.element) {
      this.element.remove();
    }

    if (this.revokeBtn) {
      this.revokeBtn.remove();
    }

    if (this.onWindowScroll) {
      window.removeEventListener('scroll', this.onWindowScroll);
    }

    if (this.onWindowClick) {
      window.removeEventListener('click', this.onWindowClick);
      window.removeEventListener('touchend', this.onWindowClick);
    }

    if (this.onLinkClick) {
      window.removeEventListener('click', this.onLinkClick);
    }

    if (this.onKeyPress) {
      window.addEventListener('onkeypress', this.onKeyPress);
    }
  }

}

/***/ }),

/***/ "./src/options/legal.js":
/*!******************************!*\
  !*** ./src/options/legal.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/* harmony default export */ __webpack_exports__["default"] = ({
  // Make this false if you want to disable all regional overrides for settings.
  // If true, options can differ by country, depending on their cookie law.
  // It does not affect hiding the popup for countries that do not have cookie law.
  regionalLaw: true,
  // countries that enforce some version of a cookie law
  hasLaw: ['AT', 'BE', 'BG', 'HR', 'CZ', 'CY', 'DK', 'EE', 'FI', 'FR', 'DE', 'EL', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'SK', 'ES', 'SE', 'GB', 'UK', 'GR', 'EU', 'RO'],
  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: ['HR', 'CY', 'DK', 'EE', 'FR', 'DE', 'LV', 'LT', 'NL', 'NO', 'PT', 'ES'],
  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: ['HR', 'IT', 'ES', 'NO']
});

/***/ }),

/***/ "./src/options/location.js":
/*!*********************************!*\
  !*** ./src/options/location.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const toError = obj => new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);

/* harmony default export */ __webpack_exports__["default"] = ({
  // The default timeout is 5 seconds. This is mainly needed to catch JSONP requests that error.
  // Otherwise there is no easy way to catch JSONP errors. That means that if a JSONP fails, the
  // app will take `timeout` milliseconds to react to a JSONP network error.
  timeout: 5000,
  // the order that services will be attempted in
  services: ['ipinfo'
  /*
   // 'ipinfodb' requires some options, so we define it using an object
  // this object will be passed to the function that defines the service
   {
    name: 'ipinfodb',
    interpolateUrl: {
      // obviously, this is a fake key
      api_key: 'vOgI3748dnIytIrsJcxS7qsDf6kbJkE9lN4yEDrXAqXcKUNvjjZPox3ekXqmMMld'
    },
  },
   // as well as defining an object, you can define a function that returns an object
   function () {
    return {name: 'ipinfodb'}
  },
   */
  ],
  serviceDefinitions: {
    ipinfo: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//ipinfo.io',
        headers: ['Accept: application/json'],
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.error ? toError(json) : {
              code: json.country
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    // This service requires an option to define `key`. Options are proived using objects or functions
    ipinfodb: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
        isScript: true,
        // this is JSONP, therefore we must set it to run as a script
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return json.statusCode == 'ERROR' ? toError({
              error: json.statusMessage
            }) : {
              code: json.countryCode
            };
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
        }
      };
    },
    maxmind: function () {
      return {
        // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
        // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
        url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
        isScript: true,
        // this service responds with a JavaScript file, so it must be run as a script
        callback: function (done) {
          // if everything went okay then `geoip2` WILL be defined
          if (!window.geoip2) {
            done(new Error('Unexpected response format. The downloaded script should have exported `geoip2` to the global scope'));
            return;
          }

          geoip2.country(function (location) {
            try {
              done({
                code: location.country.iso_code
              });
            } catch (err) {
              done(toError(err));
            }
          }, function (err) {
            done(toError(err));
          }); // We can't return anything, because we need to wait for the second AJAX call to return.
          // Then we can 'complete' the service by passing data or an error to the `done` callback.
        }
      };
    }
  }
});

/***/ }),

/***/ "./src/options/popup.js":
/*!******************************!*\
  !*** ./src/options/popup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ "./src/constants/index.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  // if false, this prevents the popup from showing (useful for giving to control to another piece of code)
  enabled: true,
  // optional (expecting a HTML element) if passed, the popup is appended to this element. default is `document.body`
  container: null,
  // defaults cookie options - it is RECOMMENDED to set these values to correspond with your server
  cookie: {
    // This is the name of this cookie - you can ignore this
    name: 'cookieconsent_status',
    // This is the url path that the cookie 'name' belongs to. The cookie can only be read at this location
    path: '/',
    // This is the domain that the cookie 'name' belongs to. The cookie can only be read on this domain.
    //  - Guide to cookie domains - https://www.mxsasha.eu/blog/2014/03/04/definitive-guide-to-cookie-domains/
    domain: 'localhost',
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: 365,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: false
  },
  // each item defines the inner text for the element that it references
  content: {
    header: 'Cookies used on the website!',
    message: 'This website uses cookies to ensure you get the best experience on our website.',
    dismiss: 'Got it!',
    allow: 'Allow cookies',
    deny: 'Decline',
    link: 'Learn more',
    href: 'https://www.cookiesandyou.com',
    close: '&#x274c',
    target: '_blank',
    policy: 'Cookie Policy'
  },
  // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
  // You can remove "{{header}}" and write the content directly inside the HTML if you want.
  //
  //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
  //    and to set the focus to the first interactive control (https://w3c.github.io/using-aria/)
  elements: {
    header: '<span class="cc-header">{{header}}</span>&nbsp',
    message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
    messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
    dismiss: `<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDismiss"]}">{{dismiss}}</a>`,
    allow: `<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusAllow"]}">{{allow}}</a>`,
    deny: `<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDeny"]}">{{deny}}</a>`,
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: '<ul class="cc-categories">' + _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["categories"].map((category, index) => `<li class="cc-category">
          <button class="cc-btn" tabindex="0"><input type="checkbox" name="${category}"/><span class="cc-btn-checkbox"></span>${category}</button>
          <button class="cc-btn cc-info" aria-label="${category} Definition Button" tabindex="${index + 1}">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies that don't fit the '${category.toLowerCase()}' category.</p>
          </div>
        </li>`).join("") + '</ul>',
    save: `<button class="cc-btn cc-save">Save</button>` //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

  },
  // The placeholders {{classes}} and {{children}} both get replaced during initialisation:
  //  - {{classes}} is where additional classes get added
  //  - {{children}} is where the HTML children are placed
  window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>',
  modal: '',
  // This is the html for the revoke button. This only shows up after the user has selected their level of consent
  // It can be enabled of disabled using the `revokable` option
  revokeBtn: '<div class="cc-revoke {{classes}}">{{policy}}</div>',
  // define types of 'compliance' here. '{{value}}' strings in here are linked to `elements`
  compliance: {
    info: '<div class="cc-compliance">{{dismiss}}</div>',
    'opt-in': '<div class="cc-compliance cc-highlight">{{dismiss}}{{allow}}{{customize}}</div>',
    'opt-out': '<div class="cc-compliance cc-highlight">{{dismiss}}{{deny}}</div>',
    categories: '<div class="form">{{categories}}{{save}}</div>'
  },
  // select your type of popup here
  type: 'info',
  // refers to `compliance` (in other words, the buttons that are displayed)
  // define layout layouts here
  layouts: {
    // the 'block' layout tend to be for square floating popups
    basic: '{{messagelink}}{{compliance}}',
    'basic-close': '{{messagelink}}{{compliance}}{{close}}',
    'basic-header': '{{header}}{{message}}{{link}}{{compliance}}' // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
    //'my-cool-layout': '<div class="my-special-layout">{{message}}{{compliance}}</div>{{close}}',

  },
  // default layout (see above)
  layout: 'basic',
  // this refers to the popup windows position. we currently support:
  //  - banner positions: top, bottom
  //  - floating positions: top-left, top-right, bottom-left, bottom-right
  //
  // adds a class `cc-floating` or `cc-banner` which helps when styling
  position: 'bottom',
  // default position is 'bottom'
  // Available styles
  //    -block (default, no extra classes)
  //    -edgeless
  //    -classic
  // use your own style name and use `.cc-theme-STYLENAME` class in CSS to edit.
  // Note: style "wire" is used for the configurator, but has no CSS styles of its own, only palette is used.
  theme: 'block',
  // The popup is `fixed` by default, but if you want it to be static (inline with the page content), set this to false
  // Note: by default, we animate the height of the popup from 0 to full size
  static: false,
  // if you want custom colours, pass them in here. this object should look like this.
  // ideally, any custom colours/themes should be created in a separate style sheet, as this is more efficient.
  //   {
  //     popup: {background: '#000000', text: '#fff', link: '#fff'},
  //     button: {background: 'transparent', border: '#f8e71c', text: '#f8e71c'},
  //     highlight: {background: '#f8e71c', border: '#f8e71c', text: '#000000'},
  //   }
  // `highlight` is optional and extends `button`. if it exists, it will apply to the first button
  // only background needs to be defined for every element. if not set, other colors can be calculated from it
  palette: null,
  // Some countries REQUIRE that a user can change their mind. You can configure this yourself.
  // Most of the time this should be false, but the `cookieconsent.legal` can change this to `true` if it detects that it should
  revokable: false,
  // if true, the revokable button will tranlate in and out
  animateRevokable: true,
  // used to disable link on existing layouts
  // replaces element messagelink with message and removes content of link
  showLink: true,
  // set value as scroll range to enable
  dismissOnScroll: false,
  // set value as time in milliseconds to autodismiss after set time
  dismissOnTimeout: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnWindowClick: false,
  // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
  dismissOnLinkClick: false,
  // set value as keys are pressed, ( allowKeyCode = 13, denyKeyCode = 27 )
  dismissOnKeyPress: false,
  // If `dismissOnWindowClick` is true, we can click on 'revoke' and we'll still dismiss the banner, so we need exceptions.
  // should be an array of class names (not CSS selectors)
  ignoreClicksFrom: ['cc-revoke', 'cc-btn', 'cc-link'],
  // already includes the revoke button and the banner itself
  // The application automatically decide whether the popup should open.
  // Set this to false to prevent this from happening and to allow you to control the behaviour yourself
  autoOpen: true,
  // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
  // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
  //
  //     const instance = cookieconsent.factory(options)
  //     document.body.appendChild(instance.element)
  //
  autoAttach: true,
  // set value if floating layout should be forced for mobile devices
  mobileForceFloat: true,
  // simple whitelist/blacklist for pages. specify page by:
  //   - using a string : '/index.html'           (matches '/index.html' exactly) OR
  //   - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
  whitelistPage: [],
  blacklistPage: [],
  // If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
  // Be sure to use the classes `cc-btn` and `cc-ALLOW`, `cc-DENY` or `cc-DISMISS`. They enable the app to register click
  // handlers. You can use other pre-existing classes too. See `src/styles` folder.
  overrideHTML: null
});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/src!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/utils/async.js":
/*!****************************!*\
  !*** ./src/utils/async.js ***!
  \****************************/
/*! exports provided: getScript, makeAsyncRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });


const getScript = (url, callback, timeout) => {
  let timeoutIdx;
  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/' + (url.type || 'javascript');
  scriptTag.src = url.src || url;
  scriptTag.async = false;

  scriptTag.onreadystatechange = s.onload = function () {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = scriptTag.readyState;
    clearTimeout(timeoutIdx);

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true;
      callback();
      scriptTag.onreadystatechange = scriptTag.onload = null;
    }
  };

  document.body.appendChild(scriptTag); // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout

  timeoutIdx = setTimeout(function () {
    callback.done = true;
    callback();
    scriptTag.onreadystatechange = scriptTag.onload = null;
  }, timeout);
};
const makeAsyncRequest = (url, onComplete, timeout, postData, requestHeaders) => {
  const xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
  xhr.open(postData ? 'POST' : 'GET', url, 1);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (let i = 0, l = requestHeaders.length; i < l; ++i) {
      const split = requestHeaders[i].split(':', 2);
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
};

/***/ }),

/***/ "./src/utils/cookie.js":
/*!*****************************!*\
  !*** ./src/utils/cookie.js ***!
  \*****************************/
/*! exports provided: getCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });


const getCookie = name => {
  const value = ' ' + document.cookie;
  const parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
const setCookie = function (name, value, expiryDays, domain, path, secure) {
  const exdate = new Date();
  exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
  document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
};

/***/ }),

/***/ "./src/utils/dom.js":
/*!**************************!*\
  !*** ./src/utils/dom.js ***!
  \**************************/
/*! exports provided: traverseDOMPath, addCustomStylesheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");



const traverseDOMPath = (elem, className) => !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
const addCustomStylesheet = (id, palette, prefix) => {
  const colorStyles = {};
  const {
    popup,
    button,
    highlight,
    saveButton
  } = palette; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_0__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles[`${prefix} .cc-btn.cc-save`] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  const style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(([prop, value], index) => style.sheet.insertRule(`${prop}{${value.join(';')}}`, index));
  return style;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, interpolateString, throttle, hash, normalizeHex, getContrast, getLuminance, getHoverColor, traverseDOMPath, addCustomStylesheet, isValidStatus, isPlainObject, isMobile, getScript, makeAsyncRequest, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomStylesheet", function() { return addCustomStylesheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScript", function() { return getScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncRequest", function() { return makeAsyncRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");



const getCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"];
const setCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"];
const interpolateString = (str, callback) => str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (matches, replaced) => callback(replaced) || ''); // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

const throttle = (callback, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback(...arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

const hash = str => {
  let hashNum = 0,
      i = 0,
      chr,
      len = str.length;
  if (str.length === 0) return hashNum;

  for (i; i < len; ++i) {
    chr = str.charCodeAt(i);
    hashNum = (hashNum << 5) - hashNum + chr;
    hashNum |= 0;
  }

  return hashNum;
};

const normalizeHex = _style__WEBPACK_IMPORTED_MODULE_1__["normalizeHex"];
const getContrast = _style__WEBPACK_IMPORTED_MODULE_1__["getContrast"];
const getLuminance = _style__WEBPACK_IMPORTED_MODULE_1__["getLuminance"];
const getHoverColor = _style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"];

const traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"];
const addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"];

const isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"];
const isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"];
const isMobile = _validation__WEBPACK_IMPORTED_MODULE_3__["isMobile"];

const getScript = _async__WEBPACK_IMPORTED_MODULE_4__["getScript"];
const makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_4__["makeAsyncRequest"];

const loopProperties = overwrites => (obj, [key, value]) => {
  if (value instanceof Object && !(value instanceof Array)) {
    if (overwrites[key] instanceof Object && !(overwrites[key] instanceof Array)) {
      obj[key] = Object.entries(value).reduce(loopProperties(overwrites[key]), {});
    } else {
      obj[key] = value;
    }
  } else {
    if (overwrites.hasOwnProperty(key)) {
      obj[key] = overwrites[key];
    } else {
      obj[key] = value;
    }
  }

  return obj;
};

const mergeOptions = (defaults, overwrites) => Object.entries(defaults).reduce(loopProperties(overwrites), {});

/***/ }),

/***/ "./src/utils/style.js":
/*!****************************!*\
  !*** ./src/utils/style.js ***!
  \****************************/
/*! exports provided: normalizeHex, getContrast, getLuminance, getHoverColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });


const normalizeHex = hex => hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex; // used to get text colors if not set

const getContrast = hex => {
  hex = normalizeHex(hex);
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

const getLuminance = hex => {
  const num = parseInt(normalizeHex(hex), 16),
        amt = 38,
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00ff) + amt,
        G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
const getHoverColor = hex => {
  hex = normalizeHex(hex); // for black buttons

  return hex === '000000' ? '#222' : getLuminance(hex);
};

/***/ }),

/***/ "./src/utils/validation.js":
/*!*********************************!*\
  !*** ./src/utils/validation.js ***!
  \*********************************/
/*! exports provided: isValidStatus, isMobile, isPlainObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

const isValidStatus = status => _constants__WEBPACK_IMPORTED_MODULE_0__["statuses"].indexOf(status) >= 0;
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // The code "typeof obj === 'object' && obj !== null" allows Array objects

const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9CYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llQ29uc2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xlZ2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9sZWdhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9hNDNjIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJzdGF0dXNlcyIsInN0YXR1c0RlbnkiLCJzdGF0dXNBbGxvdyIsInN0YXR1c0Rpc21pc3MiLCJjYXRlZ29yaWVzIiwiZXhwb3J0cyIsIm1vZHVsZSIsIkNvb2tpZUNvbnNlbnQiLCJ3aW5kb3ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiQmFzZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdE9wdGlvbnMiLCJvcHRpb25zIiwibWVyZ2VPcHRpb25zIiwib24iLCJiaW5kIiwiZW1pdCIsImFuc3dlcnMiLCJtYXAiLCJjYXRlZ29yeSIsImNvb2tpZU5hbWUiLCJjb29raWUiLCJuYW1lIiwiYW5zd2VyIiwiZ2V0Q29va2llIiwiaXNWYWxpZFN0YXR1cyIsInVuZGVmaW5lZCIsImZpbHRlciIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwibGVnYWwiLCJjb3VudHJ5Q29kZSIsImluaXRpYWxpemF0aW9uQ29tcGxldGUiLCJjb2RlIiwibG9jYXRpb24iLCJMb2NhdGlvbiIsImxvY2F0ZSIsImluaXRpYWxpemF0aW9uRXJyb3IiLCJyZXN1bHQiLCJMZWdhbCIsImFwcGx5TGF3IiwicG9wdXAiLCJQb3B1cCIsImVycm9yIiwiZ2V0Q291bnRyeUxhd3MiLCJnZXQiLCJpc09wZW4iLCJjbG9zZSIsInJldm9rZUNob2ljZSIsIm9wZW4iLCJ0b2dnbGVSZXZva2VCdXR0b24iLCJib29sIiwic2V0U3RhdHVzZXMiLCJzdGF0dXMiLCJjbGVhclN0YXR1c2VzIiwiZGVzdHJveSIsInJlZHVjZSIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZW51bWVyYWJsZSIsIndyaXRlYWJsZSIsImNvbmZpZ3VyYWJsZSIsImhhc0xhdyIsImluZGV4T2YiLCJyZXZva2FibGUiLCJleHBsaWNpdEFjdGlvbiIsImNvdW50cnkiLCJlbmFibGVkIiwicmVnaW9uYWxMYXciLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsInNlcnZpY2VzIiwiaWR4Iiwic2VydmljZU9wdGlvbiIsImR5bmFtaWNPcHRzIiwiYXNzaWduIiwic2VydmljZURlZmluaXRpb25zIiwiaXNQbGFpbk9iamVjdCIsImNvbXBsZXRlIiwiRXJyb3IiLCJjYWxsYmFja0NvbXBsZXRlIiwiY2FsbGJhY2tFcnJvciIsInJ1blNlcnZpY2UiLCJydW5OZXh0U2VydmljZU9uRXJyb3IiLCJzZXR1cFVybCIsInNlcnZpY2VPcHRzIiwiZ2V0Q3VycmVudFNlcnZpY2VPcHRzIiwidXJsIiwicmVwbGFjZSIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwiRGF0ZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlcnBvbGF0ZVVybCIsImNhbGxiYWNrIiwicmVxdWVzdEZ1bmN0aW9uIiwiaXNTY3JpcHQiLCJnZXRTY3JpcHQiLCJtYWtlQXN5bmNSZXF1ZXN0IiwieGhyIiwicmVzcG9uc2VUZXh0IiwicnVuU2VydmljZUNhbGxiYWNrIiwiY2FsbCIsInRpbWVvdXQiLCJkYXRhIiwiaGVhZGVycyIsInNlcnZpY2VSZXN1bHRIYW5kbGVyIiwiYXN5bmNSZXN1bHQiLCJvblNlcnZpY2VSZXN1bHQiLCJlcnIiLCJsb2dFcnJvciIsIm5leHRTZXJ2aWNlIiwiY29tcGxldGVTZXJ2aWNlIiwidmFsIiwiZm4iLCJjb25zb2xlIiwid2FybiIsInVzZXJDYXRlZ29yaWVzIiwiVU5DQVRFR09SSVpFRCIsIkVTU0VOVElBTCIsIlBFUlNPTkFMSVpBVElPTiIsIkFOQUxZVElDUyIsIk1BUktFVElORyIsImN1c3RvbVN0eWxlcyIsImhhc1RyYW5zaXRpb24iLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zIiwidCIsIk9UIiwibXNUIiwiTW96VCIsIldlYmtpdFQiLCJwcmVmaXgiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlIiwiY2FuVXNlQ29va2llcyIsImJsYWNrbGlzdFBhZ2UiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwid2hpdGVsaXN0UGFnZSIsImNvb2tpZVBvcHVwIiwiZ2V0UG9wdXBDbGFzc2VzIiwiam9pbiIsImdldFBvcHVwSW5uZXJNYXJrdXAiLCJjdXN0b21IVE1MIiwib3ZlcnJpZGVIVE1MIiwic3RhdGljIiwid3JhcHBlciIsImFwcGVuZE1hcmt1cCIsImRpc3BsYXkiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGx5QXV0b0Rpc21pc3MiLCJhcHBseVJldm9rZUJ1dHRvbiIsImF1dG9PcGVuIiwiZmFkZUluIiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VCdG4iLCJwcmV2ZW50T3BlbiIsImhhc0Fuc3dlcmVkIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQ29uc2VudGVkIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJ1cGRhdGVDYXRlZ29yeVN0YXR1cyIsImNhdGVnb3J5TmFtZSIsImNob3NlbkJlZm9yZSIsInNldENvb2tpZSIsImFyZ3VtZW50cyIsImZvckVhY2giLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvc2l0aW9uIiwic3BsaXQiLCJwb3MiLCJvcHRzIiwicG9zaXRpb25TdHlsZSIsImlzTW9iaWxlIiwibW9iaWxlRm9yY2VGbG9hdCIsImNsYXNzZXMiLCJ0eXBlIiwidGhlbWUiLCJwdXNoIiwiYXBwbHkiLCJhdHRhY2hDdXN0b21QYWxldHRlIiwicGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJzaG93TGluayIsImVsZW1lbnRzIiwibGluayIsIm1lc3NhZ2VsaW5rIiwibWVzc2FnZSIsInByb3AiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNvbnRlbnQiLCJjb21wbGlhbmNlVHlwZSIsImNvbXBsaWFuY2UiLCJpbmZvIiwibGF5b3V0IiwibGF5b3V0cyIsImJhc2ljIiwibWFya3VwIiwiZGl2IiwiY29udCIsImNvbnRhaW5lciIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZXZlbnQiLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImNoZWNrZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhdXRvQXR0YWNoIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJidG4iLCJ0cmF2ZXJzZURPTVBhdGgiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJoYXNoU3RyIiwiaGFzaCIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlc2hlZXQiLCJnZXRFdmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJkZWxheSIsInNjcm9sbFJhbmdlIiwiZGlzbWlzc09uTGlua0NsaWNrIiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJkaXNtaXNzT25LZXlQcmVzcyIsImRpc21pc3NUaW1lb3V0IiwiTWF0aCIsImZsb29yIiwib25XaW5kb3dTY3JvbGwiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJvbldpbmRvd0NsaWNrIiwiZXZ0IiwiaWdub3JlQ2xpY2tzRnJvbSIsImlnbm9yZWRDbGljayIsIm9uTGlua0NsaWNrIiwiZWxlbSIsInRhZ05hbWUiLCJvbktleVByZXNzIiwia2V5Q29kZSIsImFuaW1hdGVSZXZva2FibGUiLCJsb2ciLCJwb2xpY3kiLCJvbk1vdXNlTW92ZSIsInRocm90dGxlIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJ0b0Vycm9yIiwiaXBpbmZvIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiaXBpbmZvZGIiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJpc29fY29kZSIsImhlYWRlciIsImRpc21pc3MiLCJhbGxvdyIsImRlbnkiLCJocmVmIiwidG9Mb3dlckNhc2UiLCJzYXZlIiwibW9kYWwiLCJ0aW1lb3V0SWR4Iiwic2NyaXB0VGFnIiwic3JjIiwiYXN5bmMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzIiwib25sb2FkIiwic3RhdGUiLCJyZWFkeVN0YXRlIiwidGVzdCIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsIiwic2VuZCIsInZhbHVlIiwicGFydHMiLCJwb3AiLCJzaGlmdCIsImV4ZGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJ0b1VUQ1N0cmluZyIsImlkIiwiY29sb3JTdHlsZXMiLCJidXR0b24iLCJoaWdobGlnaHQiLCJzYXZlQnV0dG9uIiwidGV4dCIsImdldENvbnRyYXN0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInBhZGRpbmciLCJob3ZlciIsImdldEhvdmVyQ29sb3IiLCJoZWFkIiwiZW50cmllcyIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInJlcGxhY2VkIiwibGltaXQiLCJ3YWl0IiwiaGFzaE51bSIsImNociIsImxlbiIsImNoYXJDb2RlQXQiLCJub3JtYWxpemVIZXgiLCJnZXRMdW1pbmFuY2UiLCJkb20iLCJ2YWxpZGF0aW9uIiwiYXN5bmNGbnMiLCJsb29wUHJvcGVydGllcyIsIm92ZXJ3cml0ZXMiLCJrZXkiLCJkZWZhdWx0cyIsImhleCIsInN1YnN0ciIsInIiLCJwYXJzZUludCIsImciLCJiIiwieWlxIiwibnVtIiwiYW10IiwiUiIsIkIiLCJHIiwidG9TdHJpbmciLCJzbGljZSIsInVzZXJBZ2VudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxlQUFlLGVBQWUsd0NBQXdDLHFDQUFxQyxvQ0FBb0MsbUNBQW1DLGdDQUFnQyxFQUFFLDZCQUE2Qixl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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEseUJBQXlCO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDL2JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHVEQUFROztBQUU5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0EsbUJBQW1CLDJCQUEyQjs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTs7QUFFQSxRQUFRLHVCQUF1QjtBQUMvQjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtB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QUFDQSxTQUFPQSxHQUFHLEtBQUssUUFBUixHQUFtQixNQUFuQixHQUE0QlIsWUFBWSxDQUFFUSxHQUFGLENBQS9DO0FBQ0QsQ0FKTSxDOzs7Ozs7Ozs7Ozs7QUNqQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBRUE7Ozs7OztBQUtPLE1BQU05VyxhQUFhLEdBQUcrQixNQUFNLElBQUkxRCxtREFBUSxDQUFDb0UsT0FBVCxDQUFpQlYsTUFBakIsS0FBNEIsQ0FBNUQ7QUFFQSxNQUFNb0ssUUFBUSxHQUFHLE1BQ3RCLGlFQUFpRXVILElBQWpFLENBQXVFcEksU0FBUyxDQUFDc00sU0FBakYsQ0FESyxDLENBR1A7O0FBQ08sTUFBTWpVLGFBQWEsR0FBR3hELEdBQUcsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQkEsR0FBRyxLQUFLLElBQW5DLElBQTJDQSxHQUFHLENBQUNsQixXQUFKLElBQW1CbUIsTUFBM0YsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7IH1cXG5cXG4uY2Mtd2luZG93LmNjLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLyogb25seSBhbmltYXRlIGlmaGFzIGNsYXNzICdjYy1hbmltYXRlJyAqL1xcbi5jYy1hbmltYXRlLmNjLXJldm9rZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1ncm93ZXIge1xcbiAgLyogSW5pdGlhbGx5IHdlIGRvbid0IHdhbnQgYW55IGhlaWdodCwgYW5kIHdlIHdhbnQgdGhlIGNvbnRlbnRzIHRvIGJlIGhpZGRlbiAqL1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBTZXQgb3VyIHRyYW5zaXRpb25zIHVwLiAqL1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxczsgfVxcblxcbi8qIHRoZSBwb3B1cCB3aW5kb3cgKi9cXG4uY2Mtd2luZG93LFxcbi5jYy1yZXZva2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBleGNsdWRlIHBhZGRpbmcgd2hlbiBkZWFsaW5nIHdpdGggd2lkdGggKi9cXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIENhbGlicmksIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLyogYnkgc2V0dGluZyB0aGUgYmFzZSBmb250IGhlcmUsIHdlIGNhbiBzaXplIHRoZSByZXN0IG9mIHRoZSBwb3B1cCB1c2luZyBDU1MgYGVtYCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLyogdGhlIGZvbGxvd2luZyBhcmUgcmFuZG9tIHVuanVzdGlmaWVkIHN0eWxlcyAtIGp1c3QgYmVjYXVzZSAtIHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkICovXFxuICB6LWluZGV4OiA5OTk4OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICB6LWluZGV4OiA5OTk5OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbi8qIDIgYmFzaWMgdHlwZXMgb2Ygd2luZG93IC0gZmxvYXRpbmcgLyBiYW5uZXIgKi9cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG4gIC8qIDFlbSA9PSAxNnB4IHRoZXJlZm9yZSAyNGVtID09IDM4NHB4ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgcGFkZGluZzogMWVtIDEuOGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyogY2xpY2thYmxlIHRoaW5ncyAqL1xcbi5jYy1idG4sXFxuLmNjLWxpbmssXFxuLmNjLWNsb3NlLFxcbi5jYy1yZXZva2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNjLWxpbmsge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1saW5rOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2MtbGluazphY3RpdmUsXFxuLmNjLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5pdGlhbDsgfVxcblxcbi5jYy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmhvdmVyLFxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVlbTtcXG4gIHJpZ2h0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBvcGFjaXR5OiAwLjk7XFxuICAvKiBzZWVpbmcgYXMgdGhpcyBjb250YWlucyB0ZXh0IGFuZCBub3QgYW4gaW1hZ2UsIHRoZSBlbGVtZW50IHRhbGxlciB0aGFuIGl0IGlzIHdpZGUgKGJlY2F1c2UgaXQgaXMgdGV4dCkgKi9cXG4gIC8qICAtIHdlIHdhbnQgaXQgdG8gYmUgYSBzcXVhcmUsIGJlY2F1c2UgaXQncyBhY3RpbmcgYXMgYW4gaWNvbiAqL1xcbiAgLyogIC0gc2V0dGluZyB0aGUgbGluZSBoZWlnaHQgbm9ybWFsaXplcyB0aGUgaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogMC43NTsgfVxcblxcbi5jYy1jbG9zZTpob3ZlcixcXG4uY2MtY2xvc2U6Zm9jdXMge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qIFRoaXMgZmlsZSBzaG91bGQgY29udGFpbiBzdHlsZXMgdGhhdCBtb2RpZmllcyB0aGUgcG9wdXAgbGF5b3V0LiAqL1xcbi8qIEJ5IGxheW91dCwgd2UgbWVhbiB0aGUgcGh5c2ljYWwgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIHRoZSBwb3B1cCB3aW5kb3csIGFuZCB0aGUgbWFyZ2luIC8gcGFkZGluZyBhcm91bmQgdGhvc2UgZWxlbWVudHMuICovXFxuLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtbGVmdCB7XFxuICBsZWZ0OiAzZW07XFxuICByaWdodDogdW5zZXQ7IH1cXG5cXG4uY2MtcmV2b2tlLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAzZW07XFxuICBsZWZ0OiB1bnNldDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZMT0FUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogdGhlc2UgY2xhc3NlcyBwb3NpdGlvbiB0aGUgZmxvYXRpbmcgZWxlbWVudCAqL1xcbi5jYy10b3Age1xcbiAgdG9wOiAxZW07IH1cXG5cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07IH1cXG5cXG4uY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDFlbTsgfVxcblxcbi5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAxZW07IH1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSB7XFxuICBmbGV4OiAxIDAgYXV0bzsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRvcCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2MtYmFubmVyLmNjLWJvdHRvbSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi8qIENPTVBMSUFOQ0UgQk9YICovXFxuLmNjLWNvbXBsaWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2UgPiAuY2MtYnRuIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG5cXG4vKiBDYXRlZ29yaWVzIExheW91dCAqL1xcbi5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMjJweCk7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAycHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjcpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5jYy13aW5kb3csXFxuICAuY2MtcmV2b2tlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5jYy1idG4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9IH1cXG5cXG4vKiBkaW1lbnNpb25zIGZvciAnaVBob25lNiBQbHVzJyBhbmQgbG93ZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5jYy13aW5kb3cuY2MtdG9wIHtcXG4gICAgdG9wOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIsIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcsIC5jYy13aW5kb3cuY2MtcmlnaHQsIC5jYy13aW5kb3cuY2MtbGVmdCB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtY29tcGxpYW5jZSB7XFxuICAgICAgZmxleDogMSAxIGF1dG87IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiA4cHggMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgfVxcbiAgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDA7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogdGhpbiBzb2xpZCBsaWdodGdyZXk7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogMC40ZW0gNHB4OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IHN0YXR1c2VzID0gWyBcIkRFTllcIiwgXCJBTExPV1wiLCBcIkRJU01JU1NcIiBdXG5leHBvcnQgY29uc3Qgc3RhdHVzRGVueSA9IFwiREVOWVwiXG5leHBvcnQgY29uc3Qgc3RhdHVzQWxsb3cgPSBcIkFMTE9XXCJcbmV4cG9ydCBjb25zdCBzdGF0dXNEaXNtaXNzID0gXCJESVNNSVNTXCJcblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBbIFwiVU5DQVRFR09SSVpFRFwiLCBcIkVTU0VOVElBTFwiLCBcIlBFUlNPTkFMSVpBVElPTlwiLCBcIkFOQUxZVElDU1wiLCBcIk1BUktFVElOR1wiIF0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIlxuXG5pbXBvcnQgQ29va2llQ29uc2VudCBmcm9tIFwiLi9tb2RlbHMvQ29va2llQ29uc2VudFwiXG5cbmlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBDb29raWVDb25zZW50XG59IGVsc2Uge1xuICB3aW5kb3cuQ29va2llQ29uc2VudCA9IENvb2tpZUNvbnNlbnRcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgeyBtZXJnZU9wdGlvbnMgfSBmcm9tIFwiLi4vdXRpbHNcIlxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcblxuY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIGRlZmF1bHRPcHRpb25zID0ge30sIG9wdGlvbnMgPSB7fSApe1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMub24gPSBlbWl0dGVyLm9uLmJpbmQoIGVtaXR0ZXIgKVxuICAgIHRoaXMuZW1pdCA9IGVtaXR0ZXIuZW1pdC5iaW5kKCBlbWl0dGVyIClcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IExlZ2FsIGZyb20gXCIuL0xlZ2FsXCJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi9Mb2NhdGlvblwiXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIlxuXG5pbXBvcnQgeyBzdGF0dXNlcywgY2F0ZWdvcmllcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuaW1wb3J0IHsgZ2V0Q29va2llLCBpc1ZhbGlkU3RhdHVzIH0gZnJvbSBcIi4uL3V0aWxzXCJcblxuLy8gVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgYXBwIGJ5IGNvbWJpbmluZyB0aGUgdXNlIG9mIHRoZSBQb3B1cCwgTG9jYXRvciBhbmQgTGF3IG1vZHVsZXNcbi8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQ29uc2VudCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICl7XG4gICAgc3VwZXIoIG9wdGlvbnMgKVxuXG4gICAgY29uc3QgYW5zd2VycyA9IGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBjb29raWVOYW1lID0gdGhpcy5vcHRpb25zLmNvb2tpZSAmJiB0aGlzLm9wdGlvbnMuY29va2llLm5hbWUgPyB0aGlzLm9wdGlvbnMuY29va2llLm5hbWUgOiAnY29va2llY29uc2VudF9zdGF0dXNfJ1xuICAgICAgY29uc3QgYW5zd2VyID0gZ2V0Q29va2llKCBjb29raWVOYW1lICsgY2F0ZWdvcnkgKVxuICAgICAgcmV0dXJuIGlzVmFsaWRTdGF0dXMoYW5zd2VyKSA/IHsgW2NhdGVnb3J5XTogYW5zd2VyIH0gOiB1bmRlZmluZWRcbiAgICB9KS5maWx0ZXIob2JqID0+IG9iaiA/IG9ialtPYmplY3Qua2V5cyhvYmopWzBdXSA6IGZhbHNlKVxuXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWRcbiAgICBpZiAoYW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoIFwiaW5pdGlhbGl6ZWRcIiwgYW5zd2VycyApIClcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubGVnYWwgJiYgdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlICkge1xuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKCB7IGNvZGU6IHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSB9IClcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKSB7XG4gICAgICBuZXcgTG9jYXRpb24oIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApLmxvY2F0ZSggdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlLmJpbmQoIHRoaXMgKSwgdGhpcy5pbml0aWFsaXphdGlvbkVycm9yLmJpbmQoIHRoaXMgKSApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSh7fSlcbiAgICB9XG4gIH1cbiAgaW5pdGlhbGl6YXRpb25Db21wbGV0ZSggcmVzdWx0ICl7XG4gICAgaWYgKHJlc3VsdC5jb2RlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5hcHBseUxhdyggdGhpcy5vcHRpb25zLCByZXN1bHQuY29kZSApXG4gICAgfVxuICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApXG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KFwiaW5pdGlhbGl6ZWRcIiwgdGhpcy5wb3B1cCApLCAwIClcbiAgfVxuICBpbml0aWFsaXphdGlvbkVycm9yKCBlcnJvciApIHtcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoIFwiZXJyb3JcIiwgZXJyb3IsIG5ldyBQb3B1cCggdGhpcy5vcHRpb25zICkgKSwgMCApXG4gIH1cbiAgZ2V0Q291bnRyeUxhd3MoIGNvdW50cnlDb2RlICl7XG4gICAgcmV0dXJuIG5ldyBMZWdhbCh0aGlzLm9wdGlvbnMubGVnYWwpLmdldCggY291bnRyeUNvZGUgKVxuICB9XG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3B1cC5pc09wZW4oKVxuICB9XG4gIGNsb3NlKCl7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5jbG9zZSgpLCB0aGlzIClcbiAgfVxuICByZXZva2VDaG9pY2UoKSB7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5yZXZva2VDaG9pY2UoKSwgdGhpcyApXG4gIH1cbiAgb3Blbigpe1xuICAgIHJldHVybiAoIHRoaXMucG9wdXAub3BlbigpLCB0aGlzIClcbiAgfVxuICB0b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSB7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC50b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSwgdGhpcyApXG4gIH1cbiAgc2V0U3RhdHVzZXMoIHN0YXR1cyApIHtcbiAgICByZXR1cm4gKHRoaXMucG9wdXAuc2V0U3RhdHVzZXMoIHN0YXR1cyApLCB0aGlzIClcbiAgfVxuICBjbGVhclN0YXR1c2VzKCl7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5jbGVhclN0YXR1c2VzKCksIHRoaXMgKVxuICB9XG4gIGRlc3Ryb3koKXtcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmRlc3Ryb3koKSwgdGhpcyApXG4gIH1cbn1cblxuc3RhdHVzZXMucmVkdWNlKCAoIG9iaiwgc3RhdHVzICkgPT5cbiggT2JqZWN0LmRlZmluZVByb3BlcnR5KCBDb29raWVDb25zZW50LCBzdGF0dXMsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0dXMgfSxcbiAgc2V0OiBmdW5jdGlvbiAoKSB7fSxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIHdyaXRlYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2Vcbn0pLCBvYmogKSwgQ29va2llQ29uc2VudCApIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbGVnYWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdhbCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICkge1xuICAgIHN1cGVyKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXG4gIH1cbiAgZ2V0KCBjb3VudHJ5Q29kZSApe1xuICAgIHJldHVybiB7XG4gICAgICBoYXNMYXc6IHRoaXMub3B0aW9ucy5oYXNMYXcuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgZXhwbGljaXRBY3Rpb246IHRoaXMub3B0aW9ucy5leHBsaWNpdEFjdGlvbi5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwXG4gICAgfVxuICB9XG4gIGFwcGx5TGF3KCBvcHRpb25zLCBjb3VudHJ5Q29kZSApe1xuICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmdldChjb3VudHJ5Q29kZSlcblxuICAgIGlmICghY291bnRyeS5oYXNMYXcpIHtcbiAgICAgIC8vIFRoZSBjb3VudHJ5IGhhcyBubyBjb29raWUgbGF3XG4gICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCBcIm5vQ29va2llTGF3XCIsIGNvdW50cnlDb2RlLCBjb3VudHJ5IClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZ2lvbmFsTGF3KSB7XG4gICAgICBpZiAoY291bnRyeS5yZXZva2FibGUpIHtcbiAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcbiAgICAgICAgb3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudHJ5LmV4cGxpY2l0QWN0aW9uKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25TY3JvbGwgPSBmYWxzZVxuICAgICAgICBvcHRpb25zLmRpc21pc3NPblRpbWVvdXQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbG9jYXRpb25cIlxuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgZ2V0U2NyaXB0LCBtYWtlQXN5bmNSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxzXCJcblxuLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxuLy8gV2hlbiB1c2luZyBhIHNlcnZpY2UsIGl0IGNvdWxkIGVpdGhlciByZXR1cm4gYSBkYXRhIHN0cnVjdHVyZSBpbiBwbGFpbiB0ZXh0IChsaWtlIGEgSlNPTiBvYmplY3QpIG9yIGFuIGV4ZWN1dGFibGUgc2NyaXB0XG4vLyBXaGVuIHRoZSByZXNwb25zZSBuZWVkcyB0byBiZSBleGVjdXRlZCBieSB0aGUgYnJvd3NlciwgdGhlbiBgaXNTY3JpcHRgIG11c3QgYmUgc2V0IHRvIHRydWUsIG90aGVyd2lzZSBpdCB3b24ndCB3b3JrLlxuXG4vLyBXaGVuIHRoZSBzZXJ2aWNlIHVzZXMgYSBzY3JpcHQsIHRoZSBjaGFuY2VzIGFyZSB0aGF0IHlvdSdsbCBoYXZlIHRvIHVzZSB0aGUgc2NyaXB0IHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cy4gSW4gdGhlc2Vcbi8vIGNhc2VzLCB0aGUgc2VydmljZXMgYGNhbGxiYWNrYCBwcm9wZXJ0eSBpcyBjYWxsZWQgd2l0aCBhIGBkb25lYCBmdW5jdGlvbi4gV2hlbiBwZXJmb3JtaW5nIGFzeW5jIG9wZXJhdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWRcbi8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMSAvLyB0aGUgaW5kZXggKGluIG9wdGlvbnMpIG9mIHRoZSBzZXJ2aWNlIHdlJ3JlIGN1cnJlbnRseSB1c2luZ1xuICB9XG5cbiAgZ2V0TmV4dFNlcnZpY2UoKSB7XG4gICAgbGV0IHNlcnZpY2VcbiAgICBkbyB7XG4gICAgICBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoKyt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpXG4gICAgfSB3aGlsZSAoXG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPCB0aGlzLm9wdGlvbnMuc2VydmljZXMubGVuZ3RoICYmXG4gICAgICAhc2VydmljZVxuICAgIClcblxuICAgIHJldHVybiBzZXJ2aWNlXG4gIH1cblxuICBnZXRTZXJ2aWNlQnlJZHgoaWR4KSB7XG4gICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXG4gICAgY29uc3Qgc2VydmljZU9wdGlvbiA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1tpZHhdXG5cbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGR5bmFtaWNPcHRzID0gc2VydmljZU9wdGlvbigpXG4gICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGR5bmFtaWNPcHRzLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbIGR5bmFtaWNPcHRzLm5hbWUgXSggZHluYW1pY09wdHMgKVxuICAgICAgICApIDogZHluYW1pY09wdHNcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uXSgpXG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIGFzc3VtZSB7bmFtZTogJ2lwaW5mbycsIC4uLm90aGVyT3B0aW9uc31cbiAgICAvLyBBbGxvd3MgdXNlciB0byBwYXNzIGluIEFQSSBrZXlzIGV0Yy5cbiAgICBpZiAoaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbi5uYW1lXShcbiAgICAgICAgc2VydmljZU9wdGlvblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXG4gIC8vIElmIHRoZSBzZXJ2aWNlIGZhaWxzLCBgcnVuTmV4dFNlcnZpY2VPbkVycm9yYCB3aWxsIGNvbnRpbnVlIHRyeWluZyBlYWNoIHNlcnZpY2UgdW50aWwgYWxsIGZhaWwsIG9yIG9uZSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5XG4gIGxvY2F0ZShjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXG5cbiAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNhbGxiYWNrQ29tcGxldGUgPSBjb21wbGV0ZVxuICAgIHRoaXMuY2FsbGJhY2tFcnJvciA9IGVycm9yXG5cbiAgICB0aGlzLnJ1blNlcnZpY2Uoc2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8vIFBvdGVudGlhbGx5IGFkZHMgYSBjYWxsYmFjayB0byBhIHVybCBmb3IganNvbnAuXG4gIHNldHVwVXJsKHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlT3B0cyA9IHRoaXMuZ2V0Q3VycmVudFNlcnZpY2VPcHRzKClcbiAgICByZXR1cm4gc2VydmljZS51cmwucmVwbGFjZSgvXFx7KC4qPylcXH0vZywgZnVuY3Rpb24oXywgcGFyYW0pIHtcbiAgICAgIGlmIChwYXJhbSA9PT0gJ2NhbGxiYWNrJykge1xuICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpXG4gICAgICAgIHdpbmRvd1t0ZW1wTmFtZV0gPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZXJ2aWNlLl9fSlNPTlBfREFUQSA9IEpTT04uc3RyaW5naWZ5KHJlcylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcE5hbWVcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmxbcGFyYW1dXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIHJlcXVpcmVzIGEgYHNlcnZpY2VgIG9iamVjdCB0aGF0IGRlZmluZXMgYXQgbGVhc3QgYSBgdXJsYCBhbmQgYGNhbGxiYWNrYFxuICBydW5TZXJ2aWNlKHNlcnZpY2UsIGNvbXBsZXRlKSB7XG4gICAgLy8gYmFzaWMgY2hlY2sgdG8gZW5zdXJlIGl0IHJlc2VtYmxlcyBhIGBzZXJ2aWNlYFxuICAgIGlmICghc2VydmljZSB8fCAhc2VydmljZS51cmwgfHwgIXNlcnZpY2UuY2FsbGJhY2spIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdlIGNhbGwgZWl0aGVyIGBnZXRTY3JpcHRgIG9yIGBtYWtlQXN5bmNSZXF1ZXN0YCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgcmVzb3VyY2VcbiAgICBjb25zdCByZXF1ZXN0RnVuY3Rpb24gPSBzZXJ2aWNlLmlzU2NyaXB0ID8gZ2V0U2NyaXB0IDogbWFrZUFzeW5jUmVxdWVzdFxuXG4gICAgLy8gYm90aCBmdW5jdGlvbnMgaGF2ZSBzaW1pbGFyIHNpZ25hdHVyZXMgc28gd2UgY2FuIHBhc3MgdGhlIHNhbWUgYXJndW1lbnRzIHRvIGJvdGhcbiAgICByZXF1ZXN0RnVuY3Rpb24oXG4gICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxuICAgICAgeGhyID0+IHtcbiAgICAgICAgLy8gaWYgYCF4aHJgLCB0aGVuIGBnZXRTY3JpcHRgIGZ1bmN0aW9uIHdhcyB1c2VkLCBzbyB0aGVyZSBpcyBubyByZXNwb25zZSB0ZXh0XG4gICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJydcblxuICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMgYSBzY3JpcHQsIHRoZW4gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBydW4uXG4gICAgICAgIC8vIGlmIHRoZSBzY3JpcHQgaXMgSlNPTlAsIHRoZW4gYSB0aW1lIGRlZmluZWQgZnVuY3Rpb24gYGNhbGxiYWNrX3tEYXRlLm5vd31gIGhhcyBhbHJlYWR5XG4gICAgICAgIC8vIGJlZW4gY2FsbGVkIChhcyB0aGUgSlNPTlAgY2FsbGJhY2spLiBUaGlzIGNhbGxiYWNrIHNldHMgdGhlIF9fSlNPTlBfREFUQSBwcm9wZXJ0eVxuICAgICAgICBpZiAoc2VydmljZS5fX0pTT05QX0RBVEEpIHtcbiAgICAgICAgICByZXNwb25zZVRleHQgPSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxuICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgc2VydmljZSBjYWxsYmFjayB3aXRoIHRoZSByZXNwb25zZSB0ZXh0IChzbyBpdCBjYW4gcGFyc2UgdGhlIHJlc3BvbnNlKVxuICAgICAgICB0aGlzLnJ1blNlcnZpY2VDYWxsYmFjay5jYWxsKHRoaXMsIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQpXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zLnRpbWVvdXQsXG4gICAgICBzZXJ2aWNlLmRhdGEsXG4gICAgICBzZXJ2aWNlLmhlYWRlcnNcbiAgICApXG5cbiAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXG4gIH1cblxuICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXG4gIC8vIFdlIG5lZWQgdG8gcnVuIGl0cyBjYWxsYmFjayB3aGljaCBkZXRlcm1pbmVzIGlmIGl0cyBzdWNjZXNzZnVsIG9yIG5vdFxuICAvLyBgY29tcGxldGVgIGlzIGNhbGxlZCBvbiBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgcnVuU2VydmljZUNhbGxiYWNrKCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0ICkge1xuICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBzZXJ2aWNlIHVzZXMgdGhlIGFzeW5jIGNhbGxiYWNrIGluIGl0cyBoYW5kbGVyIG1ldGhvZFxuICAgIGNvbnN0IHNlcnZpY2VSZXN1bHRIYW5kbGVyID0gYXN5bmNSZXN1bHQgPT4ge1xuICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXG4gICAgICAvLyBldmVuIGlmIGl0IGlzIGNhbGxlZCBieSBgc2VydmljZS5jYWxsYmFja2BcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIGZ1bmN0aW9uIGBzZXJ2aWNlLmNhbGxiYWNrYCB3aWxsIGVpdGhlciBleHRyYWN0IGEgY291bnRyeSBjb2RlIGZyb20gYHJlc3BvbnNlVGV4dGAgYW5kIHJldHVybiBpdCAoaW4gYHJlc3VsdGApXG4gICAgLy8gb3IgKGlmIGl0IGhhcyB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMpIGl0IHdpbGwgY2FsbCBhIGBkb25lYCBjYWxsYmFjayB3aXRoIHRoZSBjb3VudHJ5IGNvZGUgd2hlbiBpdCBpcyByZWFkeVxuICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dClcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgcmVzdWx0IClcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCB3aXRoIHRoZSBgcmVzdWx0YCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYCByZWdhcmRsZXNzIG9mIGhvdyBpdCBwcm92aWRlZCB0aGF0IHJlc3VsdCAoc3luYyBvciBhc3luYykuXG4gIC8vIGByZXN1bHRgIHdpbGwgYmUgd2hhdGV2ZXIgaXMgcmV0dXJuZWQgZnJvbSBgc2VydmljZS5jYWxsYmFja2AuIEEgc2VydmljZSBjYWxsYmFjayBzaG91bGQgcHJvdmlkZSBhbiBvYmplY3Qgd2l0aCBkYXRhXG4gIG9uU2VydmljZVJlc3VsdChjb21wbGV0ZSwgcmVzdWx0KSB7XG4gICAgLy8gY29udmVydCByZXN1bHQgdG8gbm9kZWpzIHN0eWxlIGFzeW5jIGNhbGxiYWNrXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yIHx8IChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSkge1xuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgbnVsbCwgcmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxuICAvLyBpZiBgZXJyYCBpcyBudWxsLCB0aGUgYG9uQ29tcGxldGVgIGhhbmRsZXIgaXMgY2FsbGVkIHdpdGggYGRhdGFgXG4gIHJ1bk5leHRTZXJ2aWNlT25FcnJvcihlcnIsIGRhdGEpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aGlzLmxvZ0Vycm9yKGVycilcblxuICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcblxuICAgICAgaWYgKG5leHRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucnVuU2VydmljZShuZXh0U2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrRXJyb3IsXG4gICAgICAgICAgbmV3IEVycm9yKCdBbGwgc2VydmljZXMgZmFpbGVkJylcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSlcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50U2VydmljZU9wdHMoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW3RoaXMuY3VycmVudFNlcnZpY2VJbmRleF1cblxuICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge25hbWU6IHZhbH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHZhbCgpXG4gICAgfWVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gIH1cblxuICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXG4gIGNvbXBsZXRlU2VydmljZShmbiwgZGF0YSkge1xuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xXG5cbiAgICBmbiAmJiBmbihkYXRhKVxuICB9XG5cbiAgbG9nRXJyb3IoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFRoZSBzZXJ2aWNlWyR7dGhpcy5jdXJyZW50U2VydmljZUluZGV4fV0gKCR7dGhpcy5nZXRTZXJ2aWNlQnlJZHgodGhpcy5jdXJyZW50U2VydmljZUluZGV4KS51cmx9KSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yYCxcbiAgICAgICBlcnJcbiAgICApXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9wb3B1cFwiXG5pbXBvcnQge1xuICBjYXRlZ29yaWVzLFxuICBzdGF0dXNlcyxcbiAgc3RhdHVzRGlzbWlzcyxcbiAgc3RhdHVzQWxsb3dcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQge1xuICBhZGRDdXN0b21TdHlsZXNoZWV0LFxuICBnZXRDb29raWUsXG4gIGhhc2gsXG4gIGludGVycG9sYXRlU3RyaW5nLFxuICBpc01vYmlsZSxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNWYWxpZFN0YXR1cyxcbiAgc2V0Q29va2llLFxuICB0aHJvdHRsZSxcbiAgdHJhdmVyc2VET01QYXRoLFxufSBmcm9tIFwiLi4vdXRpbHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMudXNlckNhdGVnb3JpZXMgPSB7XG4gICAgICBVTkNBVEVHT1JJWkVEICA6ICdESVNNSVNTJyxcbiAgICAgIEVTU0VOVElBTCAgICAgIDogJ0FMTE9XJyxcbiAgICAgIFBFUlNPTkFMSVpBVElPTjogJ0RJU01JU1MnLFxuICAgICAgQU5BTFlUSUNTICAgICAgOiAnRElTTUlTUycsXG4gICAgICBNQVJLRVRJTkcgICAgICA6ICdESVNNSVNTJ1xuICAgIH1cbiAgICB0aGlzLmN1c3RvbVN0eWxlcyA9IHt9XG4gICAgdGhpcy5oYXNUcmFuc2l0aW9uID0gISEoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCB0cmFucyA9IHtcbiAgICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgbXNUOiAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICAgIH1cbiAgXG4gICAgICBmb3IgKGxldCBwcmVmaXggaW4gdHJhbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJydcbiAgICB9KSgpXG5cbiAgICAvLyByZXR1cm5zIHRydWUgaWYgYG9uQ29tcGxldGVgIHdhcyBjYWxsZWRcbiAgICBpZiAodGhpcy5jYW5Vc2VDb29raWVzKCkpIHtcbiAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcbiAgICB9XG4gICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyB0aGUgZnVsbCBtYXJrdXAgZWl0aGVyIGNvbnRhaW5zIHRoZSB3cmFwcGVyIG9yIGl0IGRvZXMgbm90IChmb3IgbXVsdGlwbGUgaW5zdGFuY2VzKVxuICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcbiAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIHRoaXMuZ2V0UG9wdXBDbGFzc2VzKCkuam9pbignICcpKVxuICAgICAgLnJlcGxhY2UoJ3t7Y2hpbGRyZW59fScsIHRoaXMuZ2V0UG9wdXBJbm5lck1hcmt1cCgpKVxuXG4gICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcbiAgICBjb25zdCBjdXN0b21IVE1MID0gdGhpcy5vcHRpb25zLm92ZXJyaWRlSFRNTFxuICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcbiAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTFxuICAgIH1cblxuICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXG4gICAgLy8gY29udGVudC4gd2Ugd3JhcCBhbiBlbGVtZW50IGFyb3VuZCBpdCB3aGljaCB3aWxsIG1hc2sgdGhlIGhpZGRlbiBjb250ZW50XG4gICAgXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmFwcGVuZE1hcmt1cChgPGRpdiBjbGFzcz1cImNjLWdyb3dlclwiPiR7Y29va2llUG9wdXB9PC9kaXY+YClcblxuICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJycgLy8gc2V0IGl0IHRvIHZpc2libGUgKGJlY2F1c2UgYXBwZW5kTWFya3VwIGhpZGVzIGl0KVxuICAgICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlci5maXJzdENoaWxkIC8vIGdldCB0aGUgYGVsZW1lbnRgIHJlZmVyZW5jZSBmcm9tIHRoZSB3cmFwcGVyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuYXBwZW5kTWFya3VwKGNvb2tpZVBvcHVwKVxuICAgIH1cblxuICAgIHRoaXMuYXBwbHlBdXRvRGlzbWlzcygpXG4gICAgdGhpcy5hcHBseVJldm9rZUJ1dHRvbigpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cblxuICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLmZhZGVJbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cE9wZW5lZFwiIClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xvc2UoIHNob3dSZXZva2UgKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxuICAgIFxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuZmFkZU91dCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBDbG9zZWRcIiApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZhZGVJbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxuXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm5cblxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlT3V0KGVsKVxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwIC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcblxuICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXG4gICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5hZnRlckZhZGVJbihlbCksXG4gICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAqIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJ1xuICAgKi9cbiAgYWZ0ZXJGYWRlSW4oIGVsZW1lbnQgKSB7XG4gICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGxcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gIH1cbiAgXG4gIGZhZGVPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIXRoaXMuZWxlbWVudCkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpXG4gICAgICB0aGlzLmFmdGVyRmFkZUluKHRoaXMuZWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJ1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9ICgpID0+IHRoaXMuYWZ0ZXJGYWRlT3V0KHRoaXMuZWxlbWVudClcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXG5cbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH1cbiAgfVxuICBcbiAgYWZ0ZXJGYWRlT3V0KGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBhZnRlciBjbG9zZSBhbmQgYmVmb3JlIG9wZW4sIHRoZSBkaXNwbGF5IHNob3VsZCBiZSBub25lXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnJyAmJlxuICAgICAgKHRoaXMuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXG4gICAgKVxuICB9XG5cbiAgdG9nZ2xlUmV2b2tlQnV0dG9uKHNob3cpIHtcbiAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSdcbiAgfVxuXG4gIHJldm9rZUNob2ljZShwcmV2ZW50T3Blbikge1xuICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG5cbiAgICB0aGlzLmVtaXQoIFwicmV2b2tlQ2hvaWNlXCIgKVxuXG4gICAgaWYgKCFwcmV2ZW50T3Blbikge1xuICAgICAgdGhpcy5hdXRvT3BlbigpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gdHJ1ZSBpZiBhbnkgY29va2llcyBoYXZlIGJlZW4gc2V0XG4gICAqL1xuICBoYXNBbnN3ZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLnNvbWUoIHN0YXR1cyA9PiAhIXN0YXR1cyApXG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xuICAgKiBAcmV0dXJuIHsgYXJyYXk8Ym9vbGVhbj4gfSAtIHRydWUgaWYgY29uc2VudCBoYXMgYmVlbiBnaXZlblxuICAgKi9cbiAgaGFzQ29uc2VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkubWFwKCBzdGF0dXMgPT4gc3RhdHVzID09PSBzdGF0dXNBbGxvdyB8fCBzdGF0dXMgPT09IHN0YXR1c0Rpc21pc3MgKVxuICB9XG5cbiAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICBhdXRvT3BlbigpIHtcbiAgICBjb25zdCBoYXNBbnN3ZXJlZCA9IHRoaXMuaGFzQW5zd2VyZWQoKVxuICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMub3BlbigpXG4gICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxuICAgIH1cbiAgfVxuXG4gIC8qKiBcbiAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYWxsT3JVbmRlZiAgICAgIC0gSWYgdGhpcyBpcyB0aGUgb25seSBwYXJhbSwgc2V0IEFMTCBpZiBub3QsIHNldCBVbmNhdGVnb3JpemVkIGNvb2tpZXMgc3RhdHVzZXMgc2V0IHRvIHZhbHVlLlxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGVzc2VudGlhbCAgICAgICAtIEVzc2VudGlhbCBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYW5hbHl0aWNzICAgICAgIC0gQW5hbHl0aXMgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gbWFya2V0aW5nICAgICAgIC0gTWFya2V0aW5nIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cbiAgKi9cbiAgc2V0U3RhdHVzZXMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuXG4gICAgY29uc3QgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMgPSAoIGNhdGVnb3J5TmFtZSwgc3RhdHVzICkgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xuICAgICAgICBjb25zdCBjb29raWVOYW1lID0gbmFtZSsnXycrY2F0ZWdvcnlOYW1lXG4gICAgICAgIGNvbnN0IGNob3NlbkJlZm9yZSA9IHN0YXR1c2VzLmluZGV4T2YoIGdldENvb2tpZShjb29raWVOYW1lKSApID49IDBcbiAgICAgICAgc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXG4gICAgICAgIHRoaXMuZW1pdCggXCJzdGF0dXNDaGFuZ2VkXCIsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yeSBdICkgKVxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgYXJndW1lbnRzWyAwIF0gKSApXG4gICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYXRlZ29yaWVzXG4gICAqL1xuICBnZXRTdGF0dXNlcygpIHtcbiAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5TmFtZSA9PiBnZXRDb29raWUodGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lKydfJytjYXRlZ29yeU5hbWUpIClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgKi9cbiAgY2xlYXJTdGF0dXNlcygpIHtcbiAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgIHNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgIH0pXG4gIH1cbiAgXG4gIGNhblVzZUNvb2tpZXMoKSB7XG4gICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgfHwgd2luZG93LkNvb2tpZXNPSyB8fCB3aW5kb3cubmF2aWdhdG9yLkNvb2tpZXNPSyApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdHVzZXNWYWx1ZXMgPSB0aGlzLmdldFN0YXR1c2VzKClcbiAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcbiAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG1hdGNoID0+IG1hdGNoW09iamVjdC5rZXlzKG1hdGNoKVswXV0gKS5sZW5ndGggPiAwXG4gICAgc3RhdHVzZXNWYWx1ZXMuZm9yRWFjaCggKCBzdGF0dXMsIGluZGV4ICkgPT5cbiAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSA9PT0gc3RhdHVzXG4gICAgICAgID8gc3RhdHVzIDogdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcblxuICAgIHJldHVybiBoYXNNYXRjaGVzXG4gIH1cblxuICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcbiAgZ2V0UG9zaXRpb25DbGFzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoICctJyApLm1hcCggcG9zID0+ICdjYy0nK3BvcylcbiAgfVxuXG4gIGdldFBvcHVwQ2xhc3NlcygpIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXG4gICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgb3B0cy5wb3NpdGlvbiA9PSAndG9wJyB8fCBvcHRzLnBvc2l0aW9uID09ICdib3R0b20nXG4gICAgICAgID8gJ2Jhbm5lcidcbiAgICAgICAgOiAnZmxvYXRpbmcnXG5cbiAgICBpZiAoaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcbiAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAnY2MtdHlwZS0nICsgb3B0cy50eXBlLCAvLyBhZGQgdGhlIGNvbXBsaWFuY2UgdHlwZVxuICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgXVxuXG4gICAgaWYgKG9wdHMuc3RhdGljKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2NjLXN0YXRpYycpXG4gICAgfVxuXG4gICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKCkpXG5cbiAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXG4gICAgdGhpcy5hdHRhY2hDdXN0b21QYWxldHRlKHRoaXMub3B0aW9ucy5wYWxldHRlKVxuXG4gICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gIH1cblxuICBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuXG4gICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXG4gICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJyBcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcbiAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IGludGVycG9sYXRlU3RyaW5nKFxuICAgICAgICBvcHRzLmVsZW1lbnRzW3Byb3BdLFxuICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBzdHIgPSBvcHRzLmNvbnRlbnRbbmFtZV1cbiAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJ1xuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcblxuICAgIC8vIGNoZWNrcyBpZiB0aGUgdHlwZSBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gaW5mbyBpZiBpdCdzIG5vdFxuICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdXG4gICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2UuaW5mb1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSBjb21wbGlhbmNlIHR5cGVzIGZyb20gdGhlIGFscmVhZHkgaW50ZXJwb2xhdGVkIGBlbGVtZW50c2BcbiAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IGludGVycG9sYXRlU3RyaW5nKCBjb21wbGlhbmNlVHlwZSwgbmFtZSA9PiBpbnRlcnBvbGF0ZWRbbmFtZV0gKVxuXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBsYXlvdXQgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGJhc2ljIGlmIGl0J3Mgbm90XG4gICAgbGV0IGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF1cbiAgICBpZiAoIWxheW91dCkge1xuICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnRlcnBvbGF0ZVN0cmluZyhsYXlvdXQsIG1hdGNoID0+aW50ZXJwb2xhdGVkW21hdGNoXSApXG4gIH1cblxuICBhcHBlbmRNYXJrdXAobWFya3VwKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY29udCA9XG4gICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxuICAgICAgICA/IG9wdHMuY29udGFpbmVyXG4gICAgICAgIDogZG9jdW1lbnQuYm9keVxuXG4gICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFxuXG4gICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF1cblxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIHRoaXMuaGFzVHJhbnNpdGlvbikge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcbiAgICB9XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2soIGV2ZW50ICkgKVxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2hlY2tib3gubmFtZSBdID0gY2hlY2tib3guY2hlY2tlZCA/ICdBTExPVycgOiAnREVOWSdcbiAgICAgIH0pXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpIClcbiAgICB9KVxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICBzaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICBpZiAoIHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgICkge1xuICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAob3B0cy5hdXRvQXR0YWNoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZWwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udC5pbnNlcnRCZWZvcmUoZWwsIGNvbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk5vIGNvbnRhaW5lciB0byBhdHRhY2ggdG9vLiBNYWtlIHN1cmUgdGhlIERPTSBoYXMgbG9hZGVkLiBJcyB5b3VyIHNjcmlwdCBsb2FkZWQganVzdCBiZWZvcmUgdGhlIGA8L2JvZHk+YCB0YWc/XCIgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcbiAgICBjb25zdCBidG4gPSB0cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0XG4gICAgXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXNhdmUnICkpe1xuICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxuICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgc3RhdHVzZXMubWFwKCBzdHIgPT4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgIClcbiAgICAgIGNvbnN0IG1hdGNoID0gKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkgfHwgZmFsc2VcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKG1hdGNoKVxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xuICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XG4gICAgICB0aGlzLnJldm9rZUNob2ljZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cblxuICBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICBjb25zdCBoYXNoU3RyID0gaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSlcbiAgICBjb25zdCBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaFN0clxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1BsYWluT2JqZWN0KHBhbGV0dGUpXG5cbiAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsXG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgYWRkQ3VzdG9tU3R5bGVzaGVldChoYXNoU3RyLCBwYWxldHRlLCAnLicgKyBzZWxlY3RvcilcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgfVxuXG5cbiAgZ2V0RXZlbnRQYXRoKCBldmVudCApIHtcbiAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XG4gICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0pKFtdLGV2ZW50LnRhcmdldCApXG4gICAgaWYgKCAhcGF0aCApIHtcbiAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gcGF0aFxuICB9XG5cbiAgYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmFibGVkLFxuICAgICAgZGlzbWlzc09uVGltZW91dCAgOiBkZWxheSxcbiAgICAgIGRpc21pc3NPblNjcm9sbCAgIDpzY3JvbGxSYW5nZSxcbiAgICAgIGRpc21pc3NPbkxpbmtDbGljayxcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrLFxuICAgICAgZGlzbWlzc09uS2V5UHJlc3NcbiAgICB9ID0gdGhpcy5vcHRpb25zXG5cbiAgICBpZiAoIGVuYWJsZWQgKSB7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHNldFRpbWVvdXQoICgpPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICAgIH0sIE1hdGguZmxvb3IoZGVsYXkpKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbldpbmRvd0NsaWNrKSB7XG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKCAhZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtZW50ID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbS5zb21lKCBpZ25vcmVkQ2xpY2sgPT5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xuICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoIGdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbSA9PiB0eXBlb2YgZWxlbS50YWdOYW1lICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtLnRhZ05hbWUgPT09ICdBJyApICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgfSBlbHNlIGlmICggZGlzbWlzc09uS2V5UHJlc3MgKSB7XG4gICAgICAgICAgdGhpcy5vbktleVByZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudFxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAxMyApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzQWxsb3cgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVJldm9rZUJ1dHRvbigpIHtcbiAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJykgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWVcbiAgICAvLyBhbmltYXRlUmV2b2thYmxlIGZhbHNlIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgIGlmIChpc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLXRoZW1lLScrdGhpcy5vcHRpb25zLnRoZW1lKVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSApXG4gICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSlcblxuICAgICAgdGhpcy5yZXZva2VCdG4gPSB0aGlzLmFwcGVuZE1hcmt1cChyZXZva2VCdG4pXG5cbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB0aHJvdHRsZShmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICBjb25zdCBtaW5ZID0gMjBcbiAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjBcblxuICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XG4gICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKVxuXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGRlc3Ryb3koKXtcbiAgICBjb25zb2xlLndhcm4oIFwiRGVzdHJveWluZy4uLlwiKVxuICAgIGlmICggdGhpcy5lbGVtZW50ICl7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKCB0aGlzLnJldm9rZUJ0biApe1xuICAgICAgdGhpcy5yZXZva2VCdG4ucmVtb3ZlKClcbiAgICB9XG4gICAgaWYgKCB0aGlzLm9uV2luZG93U2Nyb2xsICl7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCApXG4gICAgfVxuICAgIGlmICggdGhpcy5vbldpbmRvd0NsaWNrICkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrIClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcbiAgICB9XG4gICAgaWYgKCB0aGlzLm9uTGlua0NsaWNrICkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcbiAgICB9XG4gICAgaWYgKCB0aGlzLm9uS2V5UHJlc3MgKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29ua2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MgKVxuICAgIH1cbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cbiAgLy8gSWYgdHJ1ZSwgb3B0aW9ucyBjYW4gZGlmZmVyIGJ5IGNvdW50cnksIGRlcGVuZGluZyBvbiB0aGVpciBjb29raWUgbGF3LlxuICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgcmVnaW9uYWxMYXc6IHRydWUsXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgZW5mb3JjZSBzb21lIHZlcnNpb24gb2YgYSBjb29raWUgbGF3XG4gIGhhc0xhdzogW1xuICAgICdBVCcsXG4gICAgJ0JFJyxcbiAgICAnQkcnLFxuICAgICdIUicsXG4gICAgJ0NaJyxcbiAgICAnQ1knLFxuICAgICdESycsXG4gICAgJ0VFJyxcbiAgICAnRkknLFxuICAgICdGUicsXG4gICAgJ0RFJyxcbiAgICAnRUwnLFxuICAgICdIVScsXG4gICAgJ0lFJyxcbiAgICAnSVQnLFxuICAgICdMVicsXG4gICAgJ0xUJyxcbiAgICAnTFUnLFxuICAgICdNVCcsXG4gICAgJ05MJyxcbiAgICAnTk8nLFxuICAgICdQTCcsXG4gICAgJ1BUJyxcbiAgICAnU0snLFxuICAgICdFUycsXG4gICAgJ1NFJyxcbiAgICAnR0InLFxuICAgICdVSycsXG4gICAgJ0dSJyxcbiAgICAnRVUnLFxuICAgICdSTydcbiAgXSxcblxuICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gIHJldm9rYWJsZTogW1xuICAgICdIUicsXG4gICAgJ0NZJyxcbiAgICAnREsnLFxuICAgICdFRScsXG4gICAgJ0ZSJyxcbiAgICAnREUnLFxuICAgICdMVicsXG4gICAgJ0xUJyxcbiAgICAnTkwnLFxuICAgICdOTycsXG4gICAgJ1BUJyxcbiAgICAnRVMnXG4gIF0sXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXG4gIGV4cGxpY2l0QWN0aW9uOiBbJ0hSJywgJ0lUJywgJ0VTJywgJ05PJ11cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5jb25zdCB0b0Vycm9yID0gb2JqID0+IG5ldyBFcnJvcignRXJyb3IgWycgKyAob2JqLmNvZGUgfHwgJ1VOS05PV04nKSArICddOiAnICsgb2JqLmVycm9yKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIFRoZSBkZWZhdWx0IHRpbWVvdXQgaXMgNSBzZWNvbmRzLiBUaGlzIGlzIG1haW5seSBuZWVkZWQgdG8gY2F0Y2ggSlNPTlAgcmVxdWVzdHMgdGhhdCBlcnJvci5cbiAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxuICAvLyBhcHAgd2lsbCB0YWtlIGB0aW1lb3V0YCBtaWxsaXNlY29uZHMgdG8gcmVhY3QgdG8gYSBKU09OUCBuZXR3b3JrIGVycm9yLlxuICB0aW1lb3V0OiA1MDAwLFxuXG4gIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXG4gIHNlcnZpY2VzOiBbXG4gICAgJ2lwaW5mbydcblxuICAgIC8qXG5cbiAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxuICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcblxuICAgIHtcbiAgICAgIG5hbWU6ICdpcGluZm9kYicsXG4gICAgICBpbnRlcnBvbGF0ZVVybDoge1xuICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICBhcGlfa2V5OiAndk9nSTM3NDhkbkl5dElyc0pjeFM3cXNEZjZrYkprRTlsTjR5RURyWEFxWGNLVU52ampaUG94M2VrWHFtTU1sZCdcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcblxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ31cbiAgICB9LFxuXG4gICAgKi9cbiAgXSxcblxuICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcbiAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcbiAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKGpzb24pXG4gICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDpcbiAgICAgICAgICAnLy9hcGkuaXBpbmZvZGIuY29tL3YzL2lwLWNvdW50cnkvP2tleT17YXBpX2tleX0mZm9ybWF0PWpzb24mY2FsbGJhY2s9e2NhbGxiYWNrfScsXG4gICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiBqc29uLnN0YXR1c0NvZGUgPT0gJ0VSUk9SJ1xuICAgICAgICAgICAgICA/IHRvRXJyb3Ioe2Vycm9yOiBqc29uLnN0YXR1c01lc3NhZ2V9KVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeUNvZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcbiAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIHVybDogJy8vanMubWF4bWluZC5jb20vanMvYXBpcy9nZW9pcDIvdjIuMS9nZW9pcDIuanMnLFxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgLy8gaWYgZXZlcnl0aGluZyB3ZW50IG9rYXkgdGhlbiBgZ2VvaXAyYCBXSUxMIGJlIGRlZmluZWRcbiAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcbiAgICAgICAgICAgIGRvbmUoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnZW9pcDIuY291bnRyeShcbiAgICAgICAgICAgIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBsb2NhdGlvbi5jb3VudHJ5Lmlzb19jb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxuICAgICAgICAgIC8vIFRoZW4gd2UgY2FuICdjb21wbGV0ZScgdGhlIHNlcnZpY2UgYnkgcGFzc2luZyBkYXRhIG9yIGFuIGVycm9yIHRvIHRoZSBgZG9uZWAgY2FsbGJhY2suXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgeyBzdGF0dXNEZW55LCBzdGF0dXNBbGxvdywgc3RhdHVzRGlzbWlzcywgY2F0ZWdvcmllcyB9ICBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBpZiBmYWxzZSwgdGhpcyBwcmV2ZW50cyB0aGUgcG9wdXAgZnJvbSBzaG93aW5nICh1c2VmdWwgZm9yIGdpdmluZyB0byBjb250cm9sIHRvIGFub3RoZXIgcGllY2Ugb2YgY29kZSlcbiAgZW5hYmxlZDogdHJ1ZSxcblxuICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXG4gIGNvbnRhaW5lcjogbnVsbCxcblxuICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXG4gIGNvb2tpZToge1xuICAgIC8vIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhpcyBjb29raWUgLSB5b3UgY2FuIGlnbm9yZSB0aGlzXG4gICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcbiAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXG4gICAgcGF0aDogJy8nLFxuICAgIC8vIFRoaXMgaXMgdGhlIGRvbWFpbiB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBvbiB0aGlzIGRvbWFpbi5cbiAgICAvLyAgLSBHdWlkZSB0byBjb29raWUgZG9tYWlucyAtIGh0dHBzOi8vd3d3Lm14c2FzaGEuZXUvYmxvZy8yMDE0LzAzLzA0L2RlZmluaXRpdmUtZ3VpZGUtdG8tY29va2llLWRvbWFpbnMvXG4gICAgZG9tYWluOiAnbG9jYWxob3N0JyxcbiAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcbiAgICBleHBpcnlEYXlzOiAzNjUsXG4gICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cbiAgICBzZWN1cmU6IGZhbHNlXG4gIH0sXG5cbiAgLy8gZWFjaCBpdGVtIGRlZmluZXMgdGhlIGlubmVyIHRleHQgZm9yIHRoZSBlbGVtZW50IHRoYXQgaXQgcmVmZXJlbmNlc1xuICBjb250ZW50OiB7XG4gICAgaGVhZGVyIDogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxuICAgIG1lc3NhZ2U6ICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcbiAgICBkaXNtaXNzOiAnR290IGl0IScsXG4gICAgYWxsb3cgIDogJ0FsbG93IGNvb2tpZXMnLFxuICAgIGRlbnkgICA6ICdEZWNsaW5lJyxcbiAgICBsaW5rICAgOiAnTGVhcm4gbW9yZScsXG4gICAgaHJlZiAgIDogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcbiAgICBjbG9zZSAgOiAnJiN4Mjc0YycsXG4gICAgdGFyZ2V0IDogJ19ibGFuaycsXG4gICAgcG9saWN5IDogJ0Nvb2tpZSBQb2xpY3knXG4gIH0sXG5cbiAgLy8gVGhpcyBpcyB0aGUgSFRNTCBmb3IgdGhlIGVsZW1lbnRzIGFib3ZlLiBUaGUgc3RyaW5nIHt7aGVhZGVyfX0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBlcXVpdmFsZW50IHRleHQgYmVsb3cuXG4gIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXG4gIC8vXG4gIC8vICAtIEFSSUEgcnVsZXMgc3VnZ2VzdCB0byBlbnN1cmUgY29udHJvbHMgYXJlIHRhYmJhYmxlIChzbyB0aGUgYnJvd3NlciBjYW4gZmluZCB0aGUgZmlyc3QgY29udHJvbCksXG4gIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXG4gIGVsZW1lbnRzOiB7XG4gICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJjYy1oZWFkZXJcIj57e2hlYWRlcn19PC9zcGFuPiZuYnNwJyxcbiAgICBtZXNzYWdlOlxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcbiAgICBtZXNzYWdlbGluazpcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgIGRpc21pc3M6XG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0Rpc21pc3N9XCI+e3tkaXNtaXNzfX08L2E+YCxcbiAgICBhbGxvdzpcbiAgICAgIGA8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0FsbG93fVwiPnt7YWxsb3d9fTwvYT5gLFxuICAgIGRlbnk6XG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLSR7c3RhdHVzRGVueX1cIj57e2Rlbnl9fTwvYT5gLFxuICAgIGxpbms6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcbiAgICBjbG9zZTpcbiAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcbiAgICBjYXRlZ29yaWVzOiAnPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPicgK1xuICAgICAgY2F0ZWdvcmllcy5tYXAoICggY2F0ZWdvcnksIGluZGV4ICkgPT5cbiAgICAgICAgYDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiJHtjYXRlZ29yeX1cIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+JHtjYXRlZ29yeX08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiJHtjYXRlZ29yeX0gRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIiR7aW5kZXgrMX1cIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHRoYXQgZG9uJ3QgZml0IHRoZSAnJHtjYXRlZ29yeS50b0xvd2VyQ2FzZSgpfScgY2F0ZWdvcnkuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPmBcbiAgICAgICkuam9pbihcIlwiKVxuICAgICAgKyAnPC91bD4nLFxuICAgIHNhdmU6IGA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj5TYXZlPC9idXR0b24+YFxuICAgIC8vY29tcGxpYW5jZTogY29tcGxpYW5jZSBpcyBhbHNvIGFuIGVsZW1lbnQsIGJ1dCBpdCBpcyBnZW5lcmF0ZWQgYnkgdGhlIGFwcGxpY2F0aW9uLCBkZXBlbmRpbmcgb24gYHR5cGVgIGJlbG93XG4gIH0sXG5cbiAgLy8gVGhlIHBsYWNlaG9sZGVycyB7e2NsYXNzZXN9fSBhbmQge3tjaGlsZHJlbn19IGJvdGggZ2V0IHJlcGxhY2VkIGR1cmluZyBpbml0aWFsaXNhdGlvbjpcbiAgLy8gIC0ge3tjbGFzc2VzfX0gaXMgd2hlcmUgYWRkaXRpb25hbCBjbGFzc2VzIGdldCBhZGRlZFxuICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxuICB3aW5kb3c6XG4gICAgJzxkaXYgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtbGFiZWw9XCJjb29raWVjb25zZW50XCIgYXJpYS1kZXNjcmliZWRieT1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2Mtd2luZG93IHt7Y2xhc3Nlc319XCI+PCEtLWdvb2dsZW9mZjogYWxsLS0+e3tjaGlsZHJlbn19PCEtLWdvb2dsZW9uOiBhbGwtLT48L2Rpdj4nLFxuICBcbiAgbW9kYWw6ICcnLFxuXG4gIC8vIFRoaXMgaXMgdGhlIGh0bWwgZm9yIHRoZSByZXZva2UgYnV0dG9uLiBUaGlzIG9ubHkgc2hvd3MgdXAgYWZ0ZXIgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIHRoZWlyIGxldmVsIG9mIGNvbnNlbnRcbiAgLy8gSXQgY2FuIGJlIGVuYWJsZWQgb2YgZGlzYWJsZWQgdXNpbmcgdGhlIGByZXZva2FibGVgIG9wdGlvblxuICByZXZva2VCdG46ICc8ZGl2IGNsYXNzPVwiY2MtcmV2b2tlIHt7Y2xhc3Nlc319XCI+e3twb2xpY3l9fTwvZGl2PicsXG5cbiAgLy8gZGVmaW5lIHR5cGVzIG9mICdjb21wbGlhbmNlJyBoZXJlLiAne3t2YWx1ZX19JyBzdHJpbmdzIGluIGhlcmUgYXJlIGxpbmtlZCB0byBgZWxlbWVudHNgXG4gIGNvbXBsaWFuY2U6IHtcbiAgICBpbmZvOiAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fTwvZGl2PicsXG4gICAgJ29wdC1pbic6XG4gICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2FsbG93fX17e2N1c3RvbWl6ZX19PC9kaXY+JyxcbiAgICAnb3B0LW91dCc6XG4gICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2Rlbnl9fTwvZGl2PicsXG4gICAgY2F0ZWdvcmllczogJzxkaXYgY2xhc3M9XCJmb3JtXCI+e3tjYXRlZ29yaWVzfX17e3NhdmV9fTwvZGl2PidcbiAgfSxcblxuICAvLyBzZWxlY3QgeW91ciB0eXBlIG9mIHBvcHVwIGhlcmVcbiAgdHlwZTogJ2luZm8nLCAvLyByZWZlcnMgdG8gYGNvbXBsaWFuY2VgIChpbiBvdGhlciB3b3JkcywgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgZGlzcGxheWVkKVxuXG4gIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXG4gIGxheW91dHM6IHtcbiAgICAvLyB0aGUgJ2Jsb2NrJyBsYXlvdXQgdGVuZCB0byBiZSBmb3Igc3F1YXJlIGZsb2F0aW5nIHBvcHVwc1xuICAgIGJhc2ljICAgICAgICAgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX0nLFxuICAgICdiYXNpYy1jbG9zZScgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX17e2Nsb3NlfX0nLFxuICAgICdiYXNpYy1oZWFkZXInOiAne3toZWFkZXJ9fXt7bWVzc2FnZX19e3tsaW5rfX17e2NvbXBsaWFuY2V9fSdcbiAgICAvLyBhZGQgYSBjdXN0b20gbGF5b3V0IGhlcmUsIHRoZW4gYWRkIHNvbWUgbmV3IGNzcyB3aXRoIHRoZSBjbGFzcyAnLmNjLWxheW91dC1teS1jb29sLWxheW91dCdcbiAgICAvLydteS1jb29sLWxheW91dCc6ICc8ZGl2IGNsYXNzPVwibXktc3BlY2lhbC1sYXlvdXRcIj57e21lc3NhZ2V9fXt7Y29tcGxpYW5jZX19PC9kaXY+e3tjbG9zZX19JyxcbiAgfSxcblxuICAvLyBkZWZhdWx0IGxheW91dCAoc2VlIGFib3ZlKVxuICBsYXlvdXQ6ICdiYXNpYycsXG5cbiAgLy8gdGhpcyByZWZlcnMgdG8gdGhlIHBvcHVwIHdpbmRvd3MgcG9zaXRpb24uIHdlIGN1cnJlbnRseSBzdXBwb3J0OlxuICAvLyAgLSBiYW5uZXIgcG9zaXRpb25zOiB0b3AsIGJvdHRvbVxuICAvLyAgLSBmbG9hdGluZyBwb3NpdGlvbnM6IHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHRcbiAgLy9cbiAgLy8gYWRkcyBhIGNsYXNzIGBjYy1mbG9hdGluZ2Agb3IgYGNjLWJhbm5lcmAgd2hpY2ggaGVscHMgd2hlbiBzdHlsaW5nXG4gIHBvc2l0aW9uOiAnYm90dG9tJywgLy8gZGVmYXVsdCBwb3NpdGlvbiBpcyAnYm90dG9tJ1xuXG4gIC8vIEF2YWlsYWJsZSBzdHlsZXNcbiAgLy8gICAgLWJsb2NrIChkZWZhdWx0LCBubyBleHRyYSBjbGFzc2VzKVxuICAvLyAgICAtZWRnZWxlc3NcbiAgLy8gICAgLWNsYXNzaWNcbiAgLy8gdXNlIHlvdXIgb3duIHN0eWxlIG5hbWUgYW5kIHVzZSBgLmNjLXRoZW1lLVNUWUxFTkFNRWAgY2xhc3MgaW4gQ1NTIHRvIGVkaXQuXG4gIC8vIE5vdGU6IHN0eWxlIFwid2lyZVwiIGlzIHVzZWQgZm9yIHRoZSBjb25maWd1cmF0b3IsIGJ1dCBoYXMgbm8gQ1NTIHN0eWxlcyBvZiBpdHMgb3duLCBvbmx5IHBhbGV0dGUgaXMgdXNlZC5cbiAgdGhlbWU6ICdibG9jaycsXG5cbiAgLy8gVGhlIHBvcHVwIGlzIGBmaXhlZGAgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHN0YXRpYyAoaW5saW5lIHdpdGggdGhlIHBhZ2UgY29udGVudCksIHNldCB0aGlzIHRvIGZhbHNlXG4gIC8vIE5vdGU6IGJ5IGRlZmF1bHQsIHdlIGFuaW1hdGUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgZnJvbSAwIHRvIGZ1bGwgc2l6ZVxuICBzdGF0aWM6IGZhbHNlLFxuXG4gIC8vIGlmIHlvdSB3YW50IGN1c3RvbSBjb2xvdXJzLCBwYXNzIHRoZW0gaW4gaGVyZS4gdGhpcyBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGlzLlxuICAvLyBpZGVhbGx5LCBhbnkgY3VzdG9tIGNvbG91cnMvdGhlbWVzIHNob3VsZCBiZSBjcmVhdGVkIGluIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQsIGFzIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQuXG4gIC8vICAge1xuICAvLyAgICAgcG9wdXA6IHtiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIHRleHQ6ICcjZmZmJywgbGluazogJyNmZmYnfSxcbiAgLy8gICAgIGJ1dHRvbjoge2JhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnI2Y4ZTcxYyd9LFxuICAvLyAgICAgaGlnaGxpZ2h0OiB7YmFja2dyb3VuZDogJyNmOGU3MWMnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyMwMDAwMDAnfSxcbiAgLy8gICB9XG4gIC8vIGBoaWdobGlnaHRgIGlzIG9wdGlvbmFsIGFuZCBleHRlbmRzIGBidXR0b25gLiBpZiBpdCBleGlzdHMsIGl0IHdpbGwgYXBwbHkgdG8gdGhlIGZpcnN0IGJ1dHRvblxuICAvLyBvbmx5IGJhY2tncm91bmQgbmVlZHMgdG8gYmUgZGVmaW5lZCBmb3IgZXZlcnkgZWxlbWVudC4gaWYgbm90IHNldCwgb3RoZXIgY29sb3JzIGNhbiBiZSBjYWxjdWxhdGVkIGZyb20gaXRcbiAgcGFsZXR0ZTogbnVsbCxcblxuICAvLyBTb21lIGNvdW50cmllcyBSRVFVSVJFIHRoYXQgYSB1c2VyIGNhbiBjaGFuZ2UgdGhlaXIgbWluZC4gWW91IGNhbiBjb25maWd1cmUgdGhpcyB5b3Vyc2VsZi5cbiAgLy8gTW9zdCBvZiB0aGUgdGltZSB0aGlzIHNob3VsZCBiZSBmYWxzZSwgYnV0IHRoZSBgY29va2llY29uc2VudC5sZWdhbGAgY2FuIGNoYW5nZSB0aGlzIHRvIGB0cnVlYCBpZiBpdCBkZXRlY3RzIHRoYXQgaXQgc2hvdWxkXG4gIHJldm9rYWJsZTogZmFsc2UsXG5cbiAgLy8gaWYgdHJ1ZSwgdGhlIHJldm9rYWJsZSBidXR0b24gd2lsbCB0cmFubGF0ZSBpbiBhbmQgb3V0XG4gIGFuaW1hdGVSZXZva2FibGU6IHRydWUsXG5cbiAgLy8gdXNlZCB0byBkaXNhYmxlIGxpbmsgb24gZXhpc3RpbmcgbGF5b3V0c1xuICAvLyByZXBsYWNlcyBlbGVtZW50IG1lc3NhZ2VsaW5rIHdpdGggbWVzc2FnZSBhbmQgcmVtb3ZlcyBjb250ZW50IG9mIGxpbmtcbiAgc2hvd0xpbms6IHRydWUsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIHNjcm9sbCByYW5nZSB0byBlbmFibGVcbiAgZGlzbWlzc09uU2Nyb2xsOiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gYXV0b2Rpc21pc3MgYWZ0ZXIgc2V0IHRpbWVcbiAgZGlzbWlzc09uVGltZW91dDogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxuICBkaXNtaXNzT25XaW5kb3dDbGljazogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxuICBkaXNtaXNzT25MaW5rQ2xpY2s6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBrZXlzIGFyZSBwcmVzc2VkLCAoIGFsbG93S2V5Q29kZSA9IDEzLCBkZW55S2V5Q29kZSA9IDI3IClcbiAgZGlzbWlzc09uS2V5UHJlc3M6IGZhbHNlLFxuXG4gIC8vIElmIGBkaXNtaXNzT25XaW5kb3dDbGlja2AgaXMgdHJ1ZSwgd2UgY2FuIGNsaWNrIG9uICdyZXZva2UnIGFuZCB3ZSdsbCBzdGlsbCBkaXNtaXNzIHRoZSBiYW5uZXIsIHNvIHdlIG5lZWQgZXhjZXB0aW9ucy5cbiAgLy8gc2hvdWxkIGJlIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIChub3QgQ1NTIHNlbGVjdG9ycylcbiAgaWdub3JlQ2xpY2tzRnJvbTogWydjYy1yZXZva2UnLCAnY2MtYnRuJywgJ2NjLWxpbmsnXSwgLy8gYWxyZWFkeSBpbmNsdWRlcyB0aGUgcmV2b2tlIGJ1dHRvbiBhbmQgdGhlIGJhbm5lciBpdHNlbGZcblxuICAvLyBUaGUgYXBwbGljYXRpb24gYXV0b21hdGljYWxseSBkZWNpZGUgd2hldGhlciB0aGUgcG9wdXAgc2hvdWxkIG9wZW4uXG4gIC8vIFNldCB0aGlzIHRvIGZhbHNlIHRvIHByZXZlbnQgdGhpcyBmcm9tIGhhcHBlbmluZyBhbmQgdG8gYWxsb3cgeW91IHRvIGNvbnRyb2wgdGhlIGJlaGF2aW91ciB5b3Vyc2VsZlxuICBhdXRvT3BlbjogdHJ1ZSxcblxuICAvLyBCeSBkZWZhdWx0IHRoZSBjcmVhdGVkIEhUTUwgaXMgYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyICh3aGljaCBkZWZhdWx0cyB0byA8Ym9keT4pLiBZb3UgY2FuIHByZXZlbnQgdGhpcyBiZWhhdmlvdXJcbiAgLy8gYnkgc2V0dGluZyB0aGlzIHRvIGZhbHNlLCBidXQgaWYgeW91IGRvLCB5b3UgbXVzdCBhdHRhY2ggdGhlIGBlbGVtZW50YCB5b3Vyc2VsZiwgd2hpY2ggaXMgYSBwdWJsaWMgcHJvcGVydHkgb2YgdGhlIHBvcHVwIGluc3RhbmNlOlxuICAvL1xuICAvLyAgICAgY29uc3QgaW5zdGFuY2UgPSBjb29raWVjb25zZW50LmZhY3Rvcnkob3B0aW9ucylcbiAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudClcbiAgLy9cbiAgYXV0b0F0dGFjaDogdHJ1ZSxcblxuICAvLyBzZXQgdmFsdWUgaWYgZmxvYXRpbmcgbGF5b3V0IHNob3VsZCBiZSBmb3JjZWQgZm9yIG1vYmlsZSBkZXZpY2VzXG4gIG1vYmlsZUZvcmNlRmxvYXQ6IHRydWUsXG5cbiAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XG4gIC8vICAgLSB1c2luZyBhIHN0cmluZyA6ICcvaW5kZXguaHRtbCcgICAgICAgICAgIChtYXRjaGVzICcvaW5kZXguaHRtbCcgZXhhY3RseSkgT1JcbiAgLy8gICAtIHVzaW5nIFJlZ0V4cCAgIDogL1xcL3BhZ2VfW1xcZF0rXFwuaHRtbC8gICAgKG1hdGNoZWQgJy9wYWdlXzEuaHRtbCcgYW5kICcvcGFnZV8yLmh0bWwnIGV0YylcbiAgd2hpdGVsaXN0UGFnZTogW10sXG4gIGJsYWNrbGlzdFBhZ2U6IFtdLFxuXG4gIC8vIElmIHRoaXMgaXMgZGVmaW5lZCwgdGhlbiBpdCBpcyB1c2VkIGFzIHRoZSBpbm5lciBodG1sIGluc3RlYWQgb2YgbGF5b3V0LiBUaGlzIGFsbG93cyBmb3IgdWx0aW1hdGUgY3VzdG9taXNhdGlvbi5cbiAgLy8gQmUgc3VyZSB0byB1c2UgdGhlIGNsYXNzZXMgYGNjLWJ0bmAgYW5kIGBjYy1BTExPV2AsIGBjYy1ERU5ZYCBvciBgY2MtRElTTUlTU2AuIFRoZXkgZW5hYmxlIHRoZSBhcHAgdG8gcmVnaXN0ZXIgY2xpY2tcbiAgLy8gaGFuZGxlcnMuIFlvdSBjYW4gdXNlIG90aGVyIHByZS1leGlzdGluZyBjbGFzc2VzIHRvby4gU2VlIGBzcmMvc3R5bGVzYCBmb2xkZXIuXG4gIG92ZXJyaWRlSFRNTDogbnVsbFxufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBjb25zdCBnZXRTY3JpcHQgPSAoIHVybCwgY2FsbGJhY2ssIHRpbWVvdXQgKSA9PiB7XG4gIGxldCB0aW1lb3V0SWR4XG4gIGNvbnN0IHNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgc2NyaXB0VGFnLnR5cGUgPSAndGV4dC8nICsgKHVybC50eXBlIHx8ICdqYXZhc2NyaXB0JylcbiAgc2NyaXB0VGFnLnNyYyA9IHVybC5zcmMgfHwgdXJsXG4gIHNjcmlwdFRhZy5hc3luYyA9IGZhbHNlXG5cbiAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgIGNvbnN0IHN0YXRlID0gc2NyaXB0VGFnLnJlYWR5U3RhdGVcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWR4KVxuXG4gICAgaWYgKCFjYWxsYmFjay5kb25lICYmICghc3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzdGF0ZSkpKSB7XG4gICAgICBjYWxsYmFjay5kb25lID0gdHJ1ZVxuICAgICAgY2FsbGJhY2soKVxuICAgICAgc2NyaXB0VGFnLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHNjcmlwdFRhZy5vbmxvYWQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpXG5cbiAgLy8gWW91IGNhbid0IGNhdGNoIEpTT05QIEVycm9ycywgYmVjYXVzZSBpdCdzIGhhbmRsZWQgYnkgdGhlIHNjcmlwdCB0YWdcbiAgLy8gb25lIHdheSBpcyB0byB1c2UgYSB0aW1lb3V0XG4gIHRpbWVvdXRJZHggPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXG4gICAgY2FsbGJhY2soKVxuICAgIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHRUYWcub25sb2FkID0gbnVsbFxuICB9LCB0aW1lb3V0KVxufVxuXG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9ICggdXJsLCBvbkNvbXBsZXRlLCB0aW1lb3V0LCBwb3N0RGF0YSwgcmVxdWVzdEhlYWRlcnMgKSA9PiB7XG4gIGNvbnN0IHhociA9IG5ldyAod2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5BY3RpdmVYT2JqZWN0KShcbiAgICAnTVNYTUwyLlhNTEhUVFAuMy4wJ1xuICApXG5cbiAgeGhyLm9wZW4ocG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKVxuXG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSByZXF1ZXN0SGVhZGVycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgIGNvbnN0IHNwbGl0ID0gcmVxdWVzdEhlYWRlcnNbaV0uc3BsaXQoJzonLCAyKVxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgIHNwbGl0WzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPiAzKSB7XG4gICAgICAgIG9uQ29tcGxldGUoeGhyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHhoci5zZW5kKHBvc3REYXRhKVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBuYW1lID0+IHtcbiAgY29uc3QgdmFsdWUgPSAnICcgKyBkb2N1bWVudC5jb29raWVcbiAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCgnICcgKyBuYW1lICsgJz0nKVxuICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMlxuICAgID8gdW5kZWZpbmVkXG4gICAgOiBwYXJ0c1xuICAgICAgICAucG9wKClcbiAgICAgICAgLnNwbGl0KCc7JylcbiAgICAgICAgLnNoaWZ0KClcbn1cblxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IGZ1bmN0aW9uICggbmFtZSwgdmFsdWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlICkge1xuICBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXG4gIGV4ZGF0ZS5zZXRIb3VycyhleGRhdGUuZ2V0SG91cnMoKSArICgodHlwZW9mIGV4cGlyeURheXMgIT09IFwibnVtYmVyXCIgID8gMzY1IDogZXhwaXJ5RGF5cyApICogMjQpKVxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAnO2V4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgJztwYXRoPScgKyAocGF0aCB8fCAnLycpICtcbiAgICAgICAgICAgICAgICAgICAgKCBkb21haW4gPyAnO2RvbWFpbj0nICsgZG9tYWluIDogJycgKSArXG4gICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJztzZWN1cmUnIDogJycgKVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IGdldENvbnRyYXN0LCBnZXRIb3ZlckNvbG9yIH0gZnJvbSAnLi9zdHlsZSdcblxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlRE9NUGF0aCA9ICggZWxlbSwgY2xhc3NOYW1lICkgPT5cbiAgIWVsZW0gfHwgIWVsZW0ucGFyZW50Tm9kZVxuICA/IG51bGwgOiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gID8gZWxlbSA6IHRyYXZlcnNlRE9NUGF0aChlbGVtLnBhcmVudE5vZGUsIGNsYXNzTmFtZSlcblxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbVN0eWxlc2hlZXQgPSAoaWQsIHBhbGV0dGUsIHByZWZpeCkgPT4ge1xuICBjb25zdCBjb2xvclN0eWxlcyA9IHt9XG4gIGNvbnN0IHsgcG9wdXAsIGJ1dHRvbiwgaGlnaGxpZ2h0LCBzYXZlQnV0dG9uIH0gPSBwYWxldHRlXG5cbiAgLy8gbmVlZHMgYmFja2dyb3VuZCBjb2xvdXIsIHRleHQgYW5kIGxpbmsgd2lsbCBiZSBzZXQgdG8gYmxhY2svd2hpdGUgaWYgbm90IHNwZWNpZmllZFxuICBpZiAocG9wdXApIHtcbiAgICAgIC8vIGFzc3VtZXMgcG9wdXAuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgIHBvcHVwLnRleHQgPSBwb3B1cC50ZXh0ID8gcG9wdXAudGV4dCA6IGdldENvbnRyYXN0KHBvcHVwLmJhY2tncm91bmQpXG4gICAgICBwb3B1cC5saW5rID0gcG9wdXAubGluayA/IHBvcHVwLmxpbmsgOiBwb3B1cC50ZXh0XG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy10b29sdGlwLCAnICsgcHJlZml4ICsgJyAuY2MtdG9vbHRpcDphZnRlciddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxuICAgICAgXVxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy13aW5kb3cnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcbiAgICAgIF1cbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2MtcmV2b2tlJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXG4gICAgICBdXG4gICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICBwcmVmaXggKyAnIC5jYy1saW5rLCcgKyBwcmVmaXggKyAnIC5jYy1saW5rOmFjdGl2ZSwnICsgcHJlZml4ICsgJyAuY2MtbGluazp2aXNpdGVkJ1xuICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXVxuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgLy8gYXNzdW1lcyBidXR0b24uYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvbi50ZXh0ID8gYnV0dG9uLnRleHQgOiBnZXRDb250cmFzdChidXR0b24uYmFja2dyb3VuZCk7XG4gICAgICAgICAgYnV0dG9uLmJvcmRlciA9IGJ1dHRvbi5ib3JkZXIgPyBidXR0b24uYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgYnV0dG9uLnRleHQsXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBidXR0b24uYm9yZGVyLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGJ1dHRvbi5iYWNrZ3JvdW5kLFxuICAgICAgICAgIF1cblxuICAgICAgICAgIGlmIChidXR0b24ucGFkZGluZykge1xuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXS5wdXNoKCdwYWRkaW5nOiAnICsgYnV0dG9uLnBhZGRpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChidXR0b24uYmFja2dyb3VuZCAhPSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0bjpob3ZlciwgJyArIHByZWZpeCArICcgLmNjLWJ0bjpmb2N1cyddID0gW1xuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyAoYnV0dG9uLmhvdmVyIHx8IGdldEhvdmVyQ29sb3IoYnV0dG9uLmJhY2tncm91bmQpKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgICAgICAgICAgLy9hc3N1bWVzIGhpZ2hsaWdodC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgICAgICBoaWdobGlnaHQudGV4dCA9IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICAgICAgICA/IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICAgICAgICA6IGdldENvbnRyYXN0KGhpZ2hsaWdodC5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0LmJvcmRlciA9IGhpZ2hsaWdodC5ib3JkZXIgPyBoaWdobGlnaHQuYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIGhpZ2hsaWdodC50ZXh0LFxuICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGhpZ2hsaWdodC5iYWNrZ3JvdW5kLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gc2V0cyBoaWdobGlnaHQgdGV4dCBjb2xvciB0byBwb3B1cCB0ZXh0LiBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgYXJlIHRyYW5zcGFyZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc2F2ZUJ1dHRvbikge1xuICAgICAgICAgIGNvbG9yU3R5bGVzW2Ake3ByZWZpeH0gLmNjLWJ0bi5jYy1zYXZlYF0gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIHNhdmVCdXR0b24udGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIHNhdmVCdXR0b24uYm9yZGVyLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHNhdmVCdXR0b24uYmFja2dyb3VuZCxcbiAgICAgICAgICBdXG4gICAgICB9XG4gIH1cblxuICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZS5pZCA9IGlkXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHN0eWxlIClcbiAgT2JqZWN0LmVudHJpZXMoIGNvbG9yU3R5bGVzICkuZm9yRWFjaCggKCBbIHByb3AsIHZhbHVlIF0sIGluZGV4ICkgPT5cbiAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKCBgJHtwcm9wfXske3ZhbHVlLmpvaW4oJzsnKX19YCwgaW5kZXggKVxuICApXG4gIHJldHVybiBzdHlsZVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCAqIGFzIGNvb2tpZSBmcm9tIFwiLi9jb29raWVcIlxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IGNvb2tpZS5nZXRDb29raWVcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBjb29raWUuc2V0Q29va2llXG5cblxuZXhwb3J0IGNvbnN0IGludGVycG9sYXRlU3RyaW5nID0gKCBzdHIsIGNhbGxiYWNrICkgPT5cbiAgc3RyLnJlcGxhY2UoIC97eyhbYS16XVthLXowLTlcXC1fXSopfX0vZ2kgLCAoIG1hdGNoZXMsIHJlcGxhY2VkICkgPT4gY2FsbGJhY2soIHJlcGxhY2VkICkgfHwgJycpXG5cbi8vIG9ubHkgdXNlZCBmb3IgdGhyb3R0bGluZyB0aGUgJ21vdXNlbW92ZScgZXZlbnQgKHVzZWQgZm9yIGFuaW1hdGluZyB0aGUgcmV2b2tlIGJ1dHRvbiB3aGVuIGBhbmltYXRlUmV2b2thYmxlYCBpcyB0cnVlKVxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGNhbGxiYWNrLCBsaW1pdCkgPT4ge1xuICBsZXQgd2FpdCA9IGZhbHNlXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXdhaXQpIHtcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3VtZW50cylcbiAgICAgIHdhaXQgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB3YWl0ID0gZmFsc2VcbiAgICAgIH0sIGxpbWl0KVxuICAgIH1cbiAgfVxufVxuXG4vLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXG5leHBvcnQgY29uc3QgaGFzaCA9IHN0ciA9PiB7XG4gIGxldCBoYXNoTnVtID0gMCxcbiAgICBpID0gMCxcbiAgICBjaHIsXG4gICAgbGVuID0gc3RyLmxlbmd0aFxuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hOdW1cbiAgZm9yICggaTsgaSA8IGxlbjsgKytpICkge1xuICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KCBpIClcbiAgICBoYXNoTnVtID0gKCBoYXNoTnVtIDw8IDUgKSAtIGhhc2hOdW0gKyBjaHJcbiAgICBoYXNoTnVtIHw9IDBcbiAgfVxuICByZXR1cm4gaGFzaE51bVxufVxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSBcIi4vc3R5bGVcIlxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhleCA9IHN0eWxlLm5vcm1hbGl6ZUhleFxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gc3R5bGUuZ2V0Q29udHJhc3RcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBzdHlsZS5nZXRMdW1pbmFuY2VcbmV4cG9ydCBjb25zdCBnZXRIb3ZlckNvbG9yID1zdHlsZS5nZXRIb3ZlckNvbG9yXG5cbmltcG9ydCAqIGFzIGRvbSBmcm9tIFwiLi9kb21cIlxuZXhwb3J0IGNvbnN0IHRyYXZlcnNlRE9NUGF0aCA9IGRvbS50cmF2ZXJzZURPTVBhdGhcbmV4cG9ydCBjb25zdCBhZGRDdXN0b21TdHlsZXNoZWV0ID0gZG9tLmFkZEN1c3RvbVN0eWxlc2hlZXRcblxuaW1wb3J0ICogYXMgdmFsaWRhdGlvbiBmcm9tIFwiLi92YWxpZGF0aW9uXCJcbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RhdHVzID0gdmFsaWRhdGlvbi5pc1ZhbGlkU3RhdHVzXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IHZhbGlkYXRpb24uaXNQbGFpbk9iamVjdFxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gdmFsaWRhdGlvbi5pc01vYmlsZVxuXG5pbXBvcnQgKiBhcyBhc3luY0ZucyBmcm9tIFwiLi9hc3luY1wiXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gYXN5bmNGbnMuZ2V0U2NyaXB0XG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9IGFzeW5jRm5zLm1ha2VBc3luY1JlcXVlc3RcblxuY29uc3QgbG9vcFByb3BlcnRpZXMgPSBvdmVyd3JpdGVzID0+IChvYmosIFtrZXksIHZhbHVlXSkgPT4ge1xuICBpZiAoIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICEodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkgKSB7XG4gICAgaWYgKCBvdmVyd3JpdGVzWyBrZXkgXSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgQXJyYXkpKSB7XG4gICAgICBvYmpbIGtleSBdID0gT2JqZWN0LmVudHJpZXModmFsdWUpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzW2tleV0pLCB7fSlcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqWyBrZXkgXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICggb3ZlcndyaXRlcy5oYXNPd25Qcm9wZXJ0eSgga2V5ICkgKSB7XG4gICAgICBvYmpbIGtleSBdID0gb3ZlcndyaXRlc1sga2V5IF1cbiAgICB9ZWxzZSB7XG4gICAgICBvYmpbIGtleSBdID0gdmFsdWUgXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGNvbnN0IG1lcmdlT3B0aW9ucyA9ICggZGVmYXVsdHMsIG92ZXJ3cml0ZXMgKSA9PlxuICBPYmplY3QuZW50cmllcyhkZWZhdWx0cykucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXMpLCB7fSlcbiIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBjb25zdCBub3JtYWxpemVIZXggPSBoZXggPT5cbiAgaGV4WzBdID09ICcjJ1xuICAgID8gaGV4LnN1YnN0cigxKSA6IGhleC5sZW5ndGggPT0gM1xuICAgID8gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdIDogaGV4XG5cbi8vIHVzZWQgdG8gZ2V0IHRleHQgY29sb3JzIGlmIG5vdCBzZXRcbmV4cG9ydCBjb25zdCBnZXRDb250cmFzdCA9IGhleCA9PiB7XG4gIGhleCA9IG5vcm1hbGl6ZUhleChoZXgpXG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNilcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KVxuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpXG4gIGNvbnN0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMFxuICByZXR1cm4geWlxID49IDEyOCA/ICcjMDAwJyA6ICcjZmZmJ1xufVxuXG4vLyB1c2VkIHRvIGNoYW5nZSBjb2xvciBvbiBoaWdobGlnaHRcbmV4cG9ydCBjb25zdCBnZXRMdW1pbmFuY2UgPSBoZXggPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUludChub3JtYWxpemVIZXgoaGV4KSwgMTYpLFxuICAgIGFtdCA9IDM4LFxuICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcbiAgICBCID0gKChudW0gPj4gOCkgJiAweDAwZmYpICsgYW10LFxuICAgIEcgPSAobnVtICYgMHgwMDAwZmYpICsgYW10XG4gICAgcmV0dXJuICcjJyArIChcbiAgICAweDEwMDAwMDAgK1xuICAgIChSIDwgMjU1ID8gKFIgPCAxID8gMCA6IFIpIDogMjU1KSAqIDB4MTAwMDAgK1xuICAgIChCIDwgMjU1ID8gKEIgPCAxID8gMCA6IEIpIDogMjU1KSAqIDB4MTAwICtcbiAgICAoRyA8IDI1NSA/IChHIDwgMSA/IDAgOiBHKSA6IDI1NSlcbiAgKVxuICAgIC50b1N0cmluZygxNilcbiAgICAuc2xpY2UoMSlcbn1cbmV4cG9ydCBjb25zdCBnZXRIb3ZlckNvbG9yID0gaGV4ID0+IHtcbiAgaGV4ID0gbm9ybWFsaXplSGV4KCBoZXggKVxuICAvLyBmb3IgYmxhY2sgYnV0dG9uc1xuICByZXR1cm4gaGV4ID09PSAnMDAwMDAwJyA/ICcjMjIyJyA6IGdldEx1bWluYW5jZSggaGV4IClcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgeyBzdGF0dXNlcyB9IGZyb20gXCIuLi9jb25zdGFudHNcIlxuXG4vKipcbiAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcbiAqIEBwYXJhbSB7IHN0cmluZyB9IHN0YXR1cyAtIFN0YXR1cyBTdHJpbmcgdG9cbiAqIEByZXR1cm4geyBib29sZWFuIH0gLSBpZiBzdGF0dXMgaXMgdmFsaWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdGF0dXMgPSBzdGF0dXMgPT4gc3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID49IDBcblxuZXhwb3J0IGNvbnN0IGlzTW9iaWxlID0gKCkgPT5cbiAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50IClcblxuLy8gVGhlIGNvZGUgXCJ0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGxcIiBhbGxvd3MgQXJyYXkgb2JqZWN0c1xuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSBvYmogPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=