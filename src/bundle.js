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
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


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
      new _Location__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.location).locate(this.initializationComplete, this.initializationError);
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
    console.warn(`The service[${this.currentServiceIndex}] (${this.getServiceByIdx(idx).url}) responded with the following error`, err);
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
    } = this.options.cookie; // if `status` is valid

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
        this.userCategories[checkbox.name.toUpperCase()] = checkbox.checked ? 'ALLOW' : 'DENY';
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
    }

    if (btn.classList.contains('cc-btn')) {
      const matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].map(str => str.toLowerCase().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')).join('|') + ')\\b'));
      const match = matches && matches[1] || false;

      if (match) {
        this.setStatuses(match);
        this.close(true);
      }
    }

    if (btn.classList.contains('cc-close')) {
      this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
      this.close(true);
    }

    if (btn.classList.contains('cc-revoke')) {
      this.revokeChoice();
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
    domain: '',
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
    dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
    allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
    deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: ` 
      <ul class="cc-categories">
        <li class="cc-category">
          <button class="cc-btn" tabindex="0"><input type="checkbox" name="uncategorized"/><span class="cc-btn-checkbox"></span>Uncategorized</button>
          <button class="cc-btn cc-info" aria-label="Uncategorized Definition Button" tabindex="1">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies that don't fit any other category.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="2"><input type="checkbox" name="essential" checked disabled/><span class="cc-btn-checkbox"></span>Essential</button>
          <button class="cc-btn cc-info" aria-label="Essential Definition Button" tabindex="3">^</button>
          <div class="cc-tooltip">
            <p>This is the category for essential application or website opperation cookies.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="4"><input type="checkbox" name="personalization"/><span class="cc-btn-checkbox"></span>Personalization</button>
          <button class="cc-btn cc-info" aria-label="Personalization Definition Button" tabindex="5">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies used to help peronalize the application to a specific user.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="6"><input type="checkbox" name="analytics"/><span class="cc-btn-checkbox"></span>Analytics</button>
          <button class="cc-btn cc-info" aria-label="Analytics Definition Button" tabindex="7">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies used to help analyize data.</p>
          </div>
        </li>
        <li class="cc-category">
          <button class="cc-btn" tabindex="8"><input type="checkbox" name="marketing"/><span class="cc-btn-checkbox"></span>Marketing</button>
          <button class="cc-btn cc-info" aria-label="Marketing Definition Button" tabindex="9">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies used to help peronalize your internet shopping & advertisement experiences.</p>
          </div>
        </li>
      </ul>
    `,
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
  // Be sure to use the classes `cc-btn` and `cc-allow`, `cc-deny` or `cc-dismiss`. They enable the app to register click
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
const setCookie = (name, value, expiryDays, domain, path, secure) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9CYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQ29va2llQ29uc2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xlZ2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9sZWdhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9hNDNjIiwid2VicGFjazovLy8uL3NyYy91dGlscy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29va2llLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdmFsaWRhdGlvbi5qcyJdLCJuYW1lcyI6WyJzdGF0dXNlcyIsInN0YXR1c0RlbnkiLCJzdGF0dXNBbGxvdyIsInN0YXR1c0Rpc21pc3MiLCJjYXRlZ29yaWVzIiwiZXhwb3J0cyIsIm1vZHVsZSIsIkNvb2tpZUNvbnNlbnQiLCJ3aW5kb3ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiQmFzZSIsImNvbnN0cnVjdG9yIiwiZGVmYXVsdE9wdGlvbnMiLCJvcHRpb25zIiwibWVyZ2VPcHRpb25zIiwib24iLCJiaW5kIiwiZW1pdCIsImFuc3dlcnMiLCJtYXAiLCJjYXRlZ29yeSIsImNvb2tpZU5hbWUiLCJjb29raWUiLCJuYW1lIiwiYW5zd2VyIiwiZ2V0Q29va2llIiwiaXNWYWxpZFN0YXR1cyIsInVuZGVmaW5lZCIsImZpbHRlciIsIm9iaiIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJzZXRUaW1lb3V0IiwibGVnYWwiLCJjb3VudHJ5Q29kZSIsImluaXRpYWxpemF0aW9uQ29tcGxldGUiLCJjb2RlIiwibG9jYXRpb24iLCJMb2NhdGlvbiIsImxvY2F0ZSIsImluaXRpYWxpemF0aW9uRXJyb3IiLCJyZXN1bHQiLCJMZWdhbCIsImFwcGx5TGF3IiwicG9wdXAiLCJQb3B1cCIsImVycm9yIiwiZ2V0Q291bnRyeUxhd3MiLCJnZXQiLCJpc09wZW4iLCJjbG9zZSIsInJldm9rZUNob2ljZSIsIm9wZW4iLCJ0b2dnbGVSZXZva2VCdXR0b24iLCJib29sIiwic2V0U3RhdHVzZXMiLCJzdGF0dXMiLCJjbGVhclN0YXR1c2VzIiwiZGVzdHJveSIsInJlZHVjZSIsImRlZmluZVByb3BlcnR5Iiwic2V0IiwiZW51bWVyYWJsZSIsIndyaXRlYWJsZSIsImNvbmZpZ3VyYWJsZSIsImhhc0xhdyIsImluZGV4T2YiLCJyZXZva2FibGUiLCJleHBsaWNpdEFjdGlvbiIsImNvdW50cnkiLCJlbmFibGVkIiwicmVnaW9uYWxMYXciLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsInNlcnZpY2VzIiwiaWR4Iiwic2VydmljZU9wdGlvbiIsImR5bmFtaWNPcHRzIiwiYXNzaWduIiwic2VydmljZURlZmluaXRpb25zIiwiaXNQbGFpbk9iamVjdCIsImNvbXBsZXRlIiwiRXJyb3IiLCJjYWxsYmFja0NvbXBsZXRlIiwiY2FsbGJhY2tFcnJvciIsInJ1blNlcnZpY2UiLCJydW5OZXh0U2VydmljZU9uRXJyb3IiLCJzZXR1cFVybCIsInNlcnZpY2VPcHRzIiwiZ2V0Q3VycmVudFNlcnZpY2VPcHRzIiwidXJsIiwicmVwbGFjZSIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwiRGF0ZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlcnBvbGF0ZVVybCIsImNhbGxiYWNrIiwicmVxdWVzdEZ1bmN0aW9uIiwiaXNTY3JpcHQiLCJnZXRTY3JpcHQiLCJtYWtlQXN5bmNSZXF1ZXN0IiwieGhyIiwicmVzcG9uc2VUZXh0IiwicnVuU2VydmljZUNhbGxiYWNrIiwiY2FsbCIsInRpbWVvdXQiLCJkYXRhIiwiaGVhZGVycyIsInNlcnZpY2VSZXN1bHRIYW5kbGVyIiwiYXN5bmNSZXN1bHQiLCJvblNlcnZpY2VSZXN1bHQiLCJlcnIiLCJsb2dFcnJvciIsIm5leHRTZXJ2aWNlIiwiY29tcGxldGVTZXJ2aWNlIiwidmFsIiwiZm4iLCJjb25zb2xlIiwid2FybiIsInVzZXJDYXRlZ29yaWVzIiwiVU5DQVRFR09SSVpFRCIsIkVTU0VOVElBTCIsIlBFUlNPTkFMSVpBVElPTiIsIkFOQUxZVElDUyIsIk1BUktFVElORyIsImN1c3RvbVN0eWxlcyIsImhhc1RyYW5zaXRpb24iLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zIiwidCIsIk9UIiwibXNUIiwiTW96VCIsIldlYmtpdFQiLCJwcmVmaXgiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlIiwiY2FuVXNlQ29va2llcyIsImJsYWNrbGlzdFBhZ2UiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwid2hpdGVsaXN0UGFnZSIsImNvb2tpZVBvcHVwIiwiZ2V0UG9wdXBDbGFzc2VzIiwiam9pbiIsImdldFBvcHVwSW5uZXJNYXJrdXAiLCJjdXN0b21IVE1MIiwib3ZlcnJpZGVIVE1MIiwic3RhdGljIiwid3JhcHBlciIsImFwcGVuZE1hcmt1cCIsImRpc3BsYXkiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGx5QXV0b0Rpc21pc3MiLCJhcHBseVJldm9rZUJ1dHRvbiIsImF1dG9PcGVuIiwiZmFkZUluIiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VCdG4iLCJwcmV2ZW50T3BlbiIsImhhc0Fuc3dlcmVkIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQ29uc2VudGVkIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJ1cGRhdGVDYXRlZ29yeVN0YXR1cyIsImNhdGVnb3J5TmFtZSIsImNob3NlbkJlZm9yZSIsInNldENvb2tpZSIsImFyZ3VtZW50cyIsImZvckVhY2giLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvc2l0aW9uIiwic3BsaXQiLCJwb3MiLCJvcHRzIiwicG9zaXRpb25TdHlsZSIsImlzTW9iaWxlIiwibW9iaWxlRm9yY2VGbG9hdCIsImNsYXNzZXMiLCJ0eXBlIiwidGhlbWUiLCJwdXNoIiwiYXBwbHkiLCJhdHRhY2hDdXN0b21QYWxldHRlIiwicGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJzaG93TGluayIsImVsZW1lbnRzIiwibGluayIsIm1lc3NhZ2VsaW5rIiwibWVzc2FnZSIsInByb3AiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNvbnRlbnQiLCJjb21wbGlhbmNlVHlwZSIsImNvbXBsaWFuY2UiLCJpbmZvIiwibGF5b3V0IiwibGF5b3V0cyIsImJhc2ljIiwibWFya3VwIiwiZGl2IiwiY29udCIsImNvbnRhaW5lciIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZXZlbnQiLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsInRvVXBwZXJDYXNlIiwiY2hlY2tlZCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9BdHRhY2giLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsInRyYXZlcnNlRE9NUGF0aCIsInRhcmdldCIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsInRvTG93ZXJDYXNlIiwiaGFzaFN0ciIsImhhc2giLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZXNoZWV0IiwiZ2V0RXZlbnRQYXRoIiwiY29tcG9zZWRQYXRoIiwiYXJyIiwiZGVsYXkiLCJzY3JvbGxSYW5nZSIsImRpc21pc3NPbkxpbmtDbGljayIsImRpc21pc3NPbldpbmRvd0NsaWNrIiwiZGlzbWlzc09uS2V5UHJlc3MiLCJkaXNtaXNzVGltZW91dCIsIk1hdGgiLCJmbG9vciIsIm9uV2luZG93U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXNzaXZlIiwib25XaW5kb3dDbGljayIsImV2dCIsImlnbm9yZUNsaWNrc0Zyb20iLCJpZ25vcmVkQ2xpY2siLCJvbkxpbmtDbGljayIsImVsZW0iLCJ0YWdOYW1lIiwib25LZXlQcmVzcyIsImtleUNvZGUiLCJhbmltYXRlUmV2b2thYmxlIiwibG9nIiwicG9saWN5Iiwib25Nb3VzZU1vdmUiLCJ0aHJvdHRsZSIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwidG9FcnJvciIsImlwaW5mbyIsImRvbmUiLCJyZXNwb25zZSIsImpzb24iLCJwYXJzZSIsImlwaW5mb2RiIiwic3RhdHVzQ29kZSIsInN0YXR1c01lc3NhZ2UiLCJtYXhtaW5kIiwiZ2VvaXAyIiwiaXNvX2NvZGUiLCJoZWFkZXIiLCJkaXNtaXNzIiwiYWxsb3ciLCJkZW55IiwiaHJlZiIsInNhdmUiLCJtb2RhbCIsInRpbWVvdXRJZHgiLCJzY3JpcHRUYWciLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInMiLCJvbmxvYWQiLCJzdGF0ZSIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImwiLCJzZW5kIiwidmFsdWUiLCJwYXJ0cyIsInBvcCIsInNoaWZ0IiwiZXhkYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwiaWQiLCJjb2xvclN0eWxlcyIsImJ1dHRvbiIsImhpZ2hsaWdodCIsInNhdmVCdXR0b24iLCJ0ZXh0IiwiZ2V0Q29udHJhc3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvciIsImhlYWQiLCJlbnRyaWVzIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicmVwbGFjZWQiLCJsaW1pdCIsIndhaXQiLCJoYXNoTnVtIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGl6ZUhleCIsImdldEx1bWluYW5jZSIsImRvbSIsInZhbGlkYXRpb24iLCJhc3luY0ZucyIsImxvb3BQcm9wZXJ0aWVzIiwib3ZlcndyaXRlcyIsImtleSIsImRlZmF1bHRzIiwiaGV4Iiwic3Vic3RyIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwidXNlckFnZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLGVBQWUsZUFBZSx3Q0FBd0MscUNBQXFDLG9DQUFvQyxtQ0FBbUMsZ0NBQWdD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QXVFckksU0FBUyxDQUFDdU0sU0FBakYsQ0FESyxDLENBR1A7O0FBQ08sTUFBTWxVLGFBQWEsR0FBR3hELEdBQUcsSUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQkEsR0FBRyxLQUFLLElBQW5DLElBQTJDQSxHQUFHLENBQUNsQixXQUFKLElBQW1CbUIsTUFBM0YsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7IH1cXG5cXG4uY2Mtd2luZG93LmNjLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLyogb25seSBhbmltYXRlIGlmaGFzIGNsYXNzICdjYy1hbmltYXRlJyAqL1xcbi5jYy1hbmltYXRlLmNjLXJldm9rZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1ncm93ZXIge1xcbiAgLyogSW5pdGlhbGx5IHdlIGRvbid0IHdhbnQgYW55IGhlaWdodCwgYW5kIHdlIHdhbnQgdGhlIGNvbnRlbnRzIHRvIGJlIGhpZGRlbiAqL1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBTZXQgb3VyIHRyYW5zaXRpb25zIHVwLiAqL1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxczsgfVxcblxcbi8qIHRoZSBwb3B1cCB3aW5kb3cgKi9cXG4uY2Mtd2luZG93LFxcbi5jYy1yZXZva2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBleGNsdWRlIHBhZGRpbmcgd2hlbiBkZWFsaW5nIHdpdGggd2lkdGggKi9cXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIENhbGlicmksIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLyogYnkgc2V0dGluZyB0aGUgYmFzZSBmb250IGhlcmUsIHdlIGNhbiBzaXplIHRoZSByZXN0IG9mIHRoZSBwb3B1cCB1c2luZyBDU1MgYGVtYCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLyogdGhlIGZvbGxvd2luZyBhcmUgcmFuZG9tIHVuanVzdGlmaWVkIHN0eWxlcyAtIGp1c3QgYmVjYXVzZSAtIHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkICovXFxuICB6LWluZGV4OiA5OTk4OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICB6LWluZGV4OiA5OTk5OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbi8qIDIgYmFzaWMgdHlwZXMgb2Ygd2luZG93IC0gZmxvYXRpbmcgLyBiYW5uZXIgKi9cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG4gIC8qIDFlbSA9PSAxNnB4IHRoZXJlZm9yZSAyNGVtID09IDM4NHB4ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgcGFkZGluZzogMWVtIDEuOGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyogY2xpY2thYmxlIHRoaW5ncyAqL1xcbi5jYy1idG4sXFxuLmNjLWxpbmssXFxuLmNjLWNsb3NlLFxcbi5jYy1yZXZva2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNjLWxpbmsge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1saW5rOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2MtbGluazphY3RpdmUsXFxuLmNjLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5pdGlhbDsgfVxcblxcbi5jYy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmhvdmVyLFxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVlbTtcXG4gIHJpZ2h0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBvcGFjaXR5OiAwLjk7XFxuICAvKiBzZWVpbmcgYXMgdGhpcyBjb250YWlucyB0ZXh0IGFuZCBub3QgYW4gaW1hZ2UsIHRoZSBlbGVtZW50IHRhbGxlciB0aGFuIGl0IGlzIHdpZGUgKGJlY2F1c2UgaXQgaXMgdGV4dCkgKi9cXG4gIC8qICAtIHdlIHdhbnQgaXQgdG8gYmUgYSBzcXVhcmUsIGJlY2F1c2UgaXQncyBhY3RpbmcgYXMgYW4gaWNvbiAqL1xcbiAgLyogIC0gc2V0dGluZyB0aGUgbGluZSBoZWlnaHQgbm9ybWFsaXplcyB0aGUgaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogMC43NTsgfVxcblxcbi5jYy1jbG9zZTpob3ZlcixcXG4uY2MtY2xvc2U6Zm9jdXMge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qIFRoaXMgZmlsZSBzaG91bGQgY29udGFpbiBzdHlsZXMgdGhhdCBtb2RpZmllcyB0aGUgcG9wdXAgbGF5b3V0LiAqL1xcbi8qIEJ5IGxheW91dCwgd2UgbWVhbiB0aGUgcGh5c2ljYWwgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIHRoZSBwb3B1cCB3aW5kb3csIGFuZCB0aGUgbWFyZ2luIC8gcGFkZGluZyBhcm91bmQgdGhvc2UgZWxlbWVudHMuICovXFxuLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtbGVmdCB7XFxuICBsZWZ0OiAzZW07XFxuICByaWdodDogdW5zZXQ7IH1cXG5cXG4uY2MtcmV2b2tlLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAzZW07XFxuICBsZWZ0OiB1bnNldDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZMT0FUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogdGhlc2UgY2xhc3NlcyBwb3NpdGlvbiB0aGUgZmxvYXRpbmcgZWxlbWVudCAqL1xcbi5jYy10b3Age1xcbiAgdG9wOiAxZW07IH1cXG5cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07IH1cXG5cXG4uY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDFlbTsgfVxcblxcbi5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAxZW07IH1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSB7XFxuICBmbGV4OiAxIDAgYXV0bzsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRvcCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2MtYmFubmVyLmNjLWJvdHRvbSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi8qIENPTVBMSUFOQ0UgQk9YICovXFxuLmNjLWNvbXBsaWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2UgPiAuY2MtYnRuIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG5cXG4vKiBDYXRlZ29yaWVzIExheW91dCAqL1xcbi5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyMnB4KTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm8ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciwgLmNjLXdpbmRvdy5jYy1mbG9hdGluZywgLmNjLXdpbmRvdy5jYy1yaWdodCwgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1jb21wbGlhbmNlIHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICBtYXJnaW46IDhweCAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4OyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9ICRnZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBSZWZsZWN0QXBwbHkodGhpcy5saXN0ZW5lciwgdGhpcy50YXJnZXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3Qgc3RhdHVzZXMgPSBbIFwiREVOWVwiLCBcIkFMTE9XXCIsIFwiRElTTUlTU1wiIF1cbmV4cG9ydCBjb25zdCBzdGF0dXNEZW55ID0gXCJERU5ZXCJcbmV4cG9ydCBjb25zdCBzdGF0dXNBbGxvdyA9IFwiQUxMT1dcIlxuZXhwb3J0IGNvbnN0IHN0YXR1c0Rpc21pc3MgPSBcIkRJU01JU1NcIlxuXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllcyA9IFsgXCJVTkNBVEVHT1JJWkVEXCIsIFwiRVNTRU5USUFMXCIsIFwiUEVSU09OQUxJWkFUSU9OXCIsIFwiQU5BTFlUSUNTXCIsIFwiTUFSS0VUSU5HXCIgXSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbmltcG9ydCBDb29raWVDb25zZW50IGZyb20gXCIuL21vZGVscy9Db29raWVDb25zZW50XCJcblxuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IENvb2tpZUNvbnNlbnRcbn0gZWxzZSB7XG4gIHdpbmRvdy5Db29raWVDb25zZW50ID0gQ29va2llQ29uc2VudFxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IG1lcmdlT3B0aW9ucyB9IGZyb20gXCIuLi91dGlsc1wiXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxuXG5jb25zdCBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuICBjb25zdHJ1Y3RvciggZGVmYXVsdE9wdGlvbnMgPSB7fSwgb3B0aW9ucyA9IHt9ICl7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXG4gICAgdGhpcy5vbiA9IGVtaXR0ZXIub24uYmluZCggZW1pdHRlciApXG4gICAgdGhpcy5lbWl0ID0gZW1pdHRlci5lbWl0LmJpbmQoIGVtaXR0ZXIgKVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgTGVnYWwgZnJvbSBcIi4vTGVnYWxcIlxuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL0xvY2F0aW9uXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXG5cbmltcG9ydCB7IHN0YXR1c2VzLCBjYXRlZ29yaWVzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzVmFsaWRTdGF0dXMgfSBmcm9tIFwiLi4vdXRpbHNcIlxuXG4vLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuLy8gWW91IGNhbiBzdHJpbmcgdG9nZXRoZXIgdGhlc2UgdGhyZWUgbW9kdWxlcyB5b3Vyc2VsZiBob3dldmVyIHlvdSB3YW50LCBieSB3cml0aW5nIGEgbmV3IGZ1bmN0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWVDb25zZW50IGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKXtcbiAgICBzdXBlciggb3B0aW9ucyApXG5cbiAgICBjb25zdCBhbnN3ZXJzID0gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5ID0+IHtcbiAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llICYmIHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA/IHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA6ICdjb29raWVjb25zZW50X3N0YXR1c18nXG4gICAgICBjb25zdCBhbnN3ZXIgPSBnZXRDb29raWUoIGNvb2tpZU5hbWUgKyBjYXRlZ29yeSApXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnldOiBhbnN3ZXIgfSA6IHVuZGVmaW5lZFxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpXG5cbiAgICAvLyBpZiB0aGV5IGhhdmUgYWxyZWFkeSBhbnN3ZXJlZFxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJpbml0aWFsaXplZFwiLCBhbnN3ZXJzICkgKVxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sZWdhbCAmJiB0aGlzLm9wdGlvbnMubGVnYWwuY291bnRyeUNvZGUgKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoIHsgY29kZTogdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlIH0gKVxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApIHtcbiAgICAgIG5ldyBMb2NhdGlvbiggdGhpcy5vcHRpb25zLmxvY2F0aW9uICkubG9jYXRlKCB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUsIHRoaXMuaW5pdGlhbGl6YXRpb25FcnJvciApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSh7fSlcbiAgICB9XG4gIH1cbiAgaW5pdGlhbGl6YXRpb25Db21wbGV0ZSggcmVzdWx0ICl7XG4gICAgaWYgKHJlc3VsdC5jb2RlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5hcHBseUxhdyggdGhpcy5vcHRpb25zLCByZXN1bHQuY29kZSApXG4gICAgfVxuICAgIHRoaXMucG9wdXAgPSBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApXG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KFwiaW5pdGlhbGl6ZWRcIiwgdGhpcy5wb3B1cCApLCAwIClcbiAgfVxuICBpbml0aWFsaXphdGlvbkVycm9yKCBlcnJvciApIHtcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoIFwiZXJyb3JcIiwgZXJyb3IsIG5ldyBQb3B1cCggdGhpcy5vcHRpb25zICkgKSwgMCApXG4gIH1cbiAgZ2V0Q291bnRyeUxhd3MoIGNvdW50cnlDb2RlICl7XG4gICAgcmV0dXJuIG5ldyBMZWdhbCh0aGlzLm9wdGlvbnMubGVnYWwpLmdldCggY291bnRyeUNvZGUgKVxuICB9XG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3B1cC5pc09wZW4oKVxuICB9XG4gIGNsb3NlKCl7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5jbG9zZSgpLCB0aGlzIClcbiAgfVxuICByZXZva2VDaG9pY2UoKSB7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5yZXZva2VDaG9pY2UoKSwgdGhpcyApXG4gIH1cbiAgb3Blbigpe1xuICAgIHJldHVybiAoIHRoaXMucG9wdXAub3BlbigpLCB0aGlzIClcbiAgfVxuICB0b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSB7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC50b2dnbGVSZXZva2VCdXR0b24oIGJvb2wgKSwgdGhpcyApXG4gIH1cbiAgc2V0U3RhdHVzZXMoIHN0YXR1cyApIHtcbiAgICByZXR1cm4gKHRoaXMucG9wdXAuc2V0U3RhdHVzZXMoIHN0YXR1cyApLCB0aGlzIClcbiAgfVxuICBjbGVhclN0YXR1c2VzKCl7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5jbGVhclN0YXR1c2VzKCksIHRoaXMgKVxuICB9XG4gIGRlc3Ryb3koKXtcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmRlc3Ryb3koKSwgdGhpcyApXG4gIH1cbn1cblxuc3RhdHVzZXMucmVkdWNlKCAoIG9iaiwgc3RhdHVzICkgPT5cbiggT2JqZWN0LmRlZmluZVByb3BlcnR5KCBDb29raWVDb25zZW50LCBzdGF0dXMsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0dXMgfSxcbiAgc2V0OiBmdW5jdGlvbiAoKSB7fSxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIHdyaXRlYWJsZTogZmFsc2UsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2Vcbn0pLCBvYmogKSwgQ29va2llQ29uc2VudCApIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbGVnYWxcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWdhbCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyA9IHt9ICkge1xuICAgIHN1cGVyKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXG4gIH1cbiAgZ2V0KCBjb3VudHJ5Q29kZSApe1xuICAgIHJldHVybiB7XG4gICAgICBoYXNMYXc6IHRoaXMub3B0aW9ucy5oYXNMYXcuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgZXhwbGljaXRBY3Rpb246IHRoaXMub3B0aW9ucy5leHBsaWNpdEFjdGlvbi5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwXG4gICAgfVxuICB9XG4gIGFwcGx5TGF3KCBvcHRpb25zLCBjb3VudHJ5Q29kZSApe1xuICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmdldChjb3VudHJ5Q29kZSlcblxuICAgIGlmICghY291bnRyeS5oYXNMYXcpIHtcbiAgICAgIC8vIFRoZSBjb3VudHJ5IGhhcyBubyBjb29raWUgbGF3XG4gICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgdGhpcy5lbWl0KCBcIm5vQ29va2llTGF3XCIsIGNvdW50cnlDb2RlLCBjb3VudHJ5IClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlZ2lvbmFsTGF3KSB7XG4gICAgICBpZiAoY291bnRyeS5yZXZva2FibGUpIHtcbiAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcbiAgICAgICAgb3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb3VudHJ5LmV4cGxpY2l0QWN0aW9uKSB7XG4gICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25TY3JvbGwgPSBmYWxzZVxuICAgICAgICBvcHRpb25zLmRpc21pc3NPblRpbWVvdXQgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvbG9jYXRpb25cIlxuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgZ2V0U2NyaXB0LCBtYWtlQXN5bmNSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWxzXCJcblxuLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxuLy8gV2hlbiB1c2luZyBhIHNlcnZpY2UsIGl0IGNvdWxkIGVpdGhlciByZXR1cm4gYSBkYXRhIHN0cnVjdHVyZSBpbiBwbGFpbiB0ZXh0IChsaWtlIGEgSlNPTiBvYmplY3QpIG9yIGFuIGV4ZWN1dGFibGUgc2NyaXB0XG4vLyBXaGVuIHRoZSByZXNwb25zZSBuZWVkcyB0byBiZSBleGVjdXRlZCBieSB0aGUgYnJvd3NlciwgdGhlbiBgaXNTY3JpcHRgIG11c3QgYmUgc2V0IHRvIHRydWUsIG90aGVyd2lzZSBpdCB3b24ndCB3b3JrLlxuXG4vLyBXaGVuIHRoZSBzZXJ2aWNlIHVzZXMgYSBzY3JpcHQsIHRoZSBjaGFuY2VzIGFyZSB0aGF0IHlvdSdsbCBoYXZlIHRvIHVzZSB0aGUgc2NyaXB0IHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cy4gSW4gdGhlc2Vcbi8vIGNhc2VzLCB0aGUgc2VydmljZXMgYGNhbGxiYWNrYCBwcm9wZXJ0eSBpcyBjYWxsZWQgd2l0aCBhIGBkb25lYCBmdW5jdGlvbi4gV2hlbiBwZXJmb3JtaW5nIGFzeW5jIG9wZXJhdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWRcbi8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMSAvLyB0aGUgaW5kZXggKGluIG9wdGlvbnMpIG9mIHRoZSBzZXJ2aWNlIHdlJ3JlIGN1cnJlbnRseSB1c2luZ1xuICB9XG5cbiAgZ2V0TmV4dFNlcnZpY2UoKSB7XG4gICAgbGV0IHNlcnZpY2VcbiAgICBkbyB7XG4gICAgICBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoKyt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpXG4gICAgfSB3aGlsZSAoXG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPCB0aGlzLm9wdGlvbnMuc2VydmljZXMubGVuZ3RoICYmXG4gICAgICAhc2VydmljZVxuICAgIClcblxuICAgIHJldHVybiBzZXJ2aWNlXG4gIH1cblxuICBnZXRTZXJ2aWNlQnlJZHgoaWR4KSB7XG4gICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXG4gICAgY29uc3Qgc2VydmljZU9wdGlvbiA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1tpZHhdXG5cbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGR5bmFtaWNPcHRzID0gc2VydmljZU9wdGlvbigpXG4gICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGR5bmFtaWNPcHRzLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbIGR5bmFtaWNPcHRzLm5hbWUgXSggZHluYW1pY09wdHMgKVxuICAgICAgICApIDogZHluYW1pY09wdHNcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uXSgpXG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIGFzc3VtZSB7bmFtZTogJ2lwaW5mbycsIC4uLm90aGVyT3B0aW9uc31cbiAgICAvLyBBbGxvd3MgdXNlciB0byBwYXNzIGluIEFQSSBrZXlzIGV0Yy5cbiAgICBpZiAoaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbi5uYW1lXShcbiAgICAgICAgc2VydmljZU9wdGlvblxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXG4gIC8vIElmIHRoZSBzZXJ2aWNlIGZhaWxzLCBgcnVuTmV4dFNlcnZpY2VPbkVycm9yYCB3aWxsIGNvbnRpbnVlIHRyeWluZyBlYWNoIHNlcnZpY2UgdW50aWwgYWxsIGZhaWwsIG9yIG9uZSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5XG4gIGxvY2F0ZShjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXG5cbiAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNhbGxiYWNrQ29tcGxldGUgPSBjb21wbGV0ZVxuICAgIHRoaXMuY2FsbGJhY2tFcnJvciA9IGVycm9yXG5cbiAgICB0aGlzLnJ1blNlcnZpY2Uoc2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcbiAgfVxuXG4gIC8vIFBvdGVudGlhbGx5IGFkZHMgYSBjYWxsYmFjayB0byBhIHVybCBmb3IganNvbnAuXG4gIHNldHVwVXJsKHNlcnZpY2UpIHtcbiAgICBjb25zdCBzZXJ2aWNlT3B0cyA9IHRoaXMuZ2V0Q3VycmVudFNlcnZpY2VPcHRzKClcbiAgICByZXR1cm4gc2VydmljZS51cmwucmVwbGFjZSgvXFx7KC4qPylcXH0vZywgZnVuY3Rpb24oXywgcGFyYW0pIHtcbiAgICAgIGlmIChwYXJhbSA9PT0gJ2NhbGxiYWNrJykge1xuICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpXG4gICAgICAgIHdpbmRvd1t0ZW1wTmFtZV0gPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBzZXJ2aWNlLl9fSlNPTlBfREFUQSA9IEpTT04uc3RyaW5naWZ5KHJlcylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcE5hbWVcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xuICAgICAgICByZXR1cm4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmxbcGFyYW1dXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIHJlcXVpcmVzIGEgYHNlcnZpY2VgIG9iamVjdCB0aGF0IGRlZmluZXMgYXQgbGVhc3QgYSBgdXJsYCBhbmQgYGNhbGxiYWNrYFxuICBydW5TZXJ2aWNlKHNlcnZpY2UsIGNvbXBsZXRlKSB7XG4gICAgLy8gYmFzaWMgY2hlY2sgdG8gZW5zdXJlIGl0IHJlc2VtYmxlcyBhIGBzZXJ2aWNlYFxuICAgIGlmICghc2VydmljZSB8fCAhc2VydmljZS51cmwgfHwgIXNlcnZpY2UuY2FsbGJhY2spIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHdlIGNhbGwgZWl0aGVyIGBnZXRTY3JpcHRgIG9yIGBtYWtlQXN5bmNSZXF1ZXN0YCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgcmVzb3VyY2VcbiAgICBjb25zdCByZXF1ZXN0RnVuY3Rpb24gPSBzZXJ2aWNlLmlzU2NyaXB0ID8gZ2V0U2NyaXB0IDogbWFrZUFzeW5jUmVxdWVzdFxuXG4gICAgLy8gYm90aCBmdW5jdGlvbnMgaGF2ZSBzaW1pbGFyIHNpZ25hdHVyZXMgc28gd2UgY2FuIHBhc3MgdGhlIHNhbWUgYXJndW1lbnRzIHRvIGJvdGhcbiAgICByZXF1ZXN0RnVuY3Rpb24oXG4gICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxuICAgICAgeGhyID0+IHtcbiAgICAgICAgLy8gaWYgYCF4aHJgLCB0aGVuIGBnZXRTY3JpcHRgIGZ1bmN0aW9uIHdhcyB1c2VkLCBzbyB0aGVyZSBpcyBubyByZXNwb25zZSB0ZXh0XG4gICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJydcblxuICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMgYSBzY3JpcHQsIHRoZW4gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBydW4uXG4gICAgICAgIC8vIGlmIHRoZSBzY3JpcHQgaXMgSlNPTlAsIHRoZW4gYSB0aW1lIGRlZmluZWQgZnVuY3Rpb24gYGNhbGxiYWNrX3tEYXRlLm5vd31gIGhhcyBhbHJlYWR5XG4gICAgICAgIC8vIGJlZW4gY2FsbGVkIChhcyB0aGUgSlNPTlAgY2FsbGJhY2spLiBUaGlzIGNhbGxiYWNrIHNldHMgdGhlIF9fSlNPTlBfREFUQSBwcm9wZXJ0eVxuICAgICAgICBpZiAoc2VydmljZS5fX0pTT05QX0RBVEEpIHtcbiAgICAgICAgICByZXNwb25zZVRleHQgPSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxuICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgc2VydmljZSBjYWxsYmFjayB3aXRoIHRoZSByZXNwb25zZSB0ZXh0IChzbyBpdCBjYW4gcGFyc2UgdGhlIHJlc3BvbnNlKVxuICAgICAgICB0aGlzLnJ1blNlcnZpY2VDYWxsYmFjay5jYWxsKHRoaXMsIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQpXG4gICAgICB9LFxuICAgICAgdGhpcy5vcHRpb25zLnRpbWVvdXQsXG4gICAgICBzZXJ2aWNlLmRhdGEsXG4gICAgICBzZXJ2aWNlLmhlYWRlcnNcbiAgICApXG5cbiAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXG4gIH1cblxuICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXG4gIC8vIFdlIG5lZWQgdG8gcnVuIGl0cyBjYWxsYmFjayB3aGljaCBkZXRlcm1pbmVzIGlmIGl0cyBzdWNjZXNzZnVsIG9yIG5vdFxuICAvLyBgY29tcGxldGVgIGlzIGNhbGxlZCBvbiBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgcnVuU2VydmljZUNhbGxiYWNrKCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0ICkge1xuICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBzZXJ2aWNlIHVzZXMgdGhlIGFzeW5jIGNhbGxiYWNrIGluIGl0cyBoYW5kbGVyIG1ldGhvZFxuICAgIGNvbnN0IHNlcnZpY2VSZXN1bHRIYW5kbGVyID0gYXN5bmNSZXN1bHQgPT4ge1xuICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXG4gICAgICAvLyBldmVuIGlmIGl0IGlzIGNhbGxlZCBieSBgc2VydmljZS5jYWxsYmFja2BcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIGZ1bmN0aW9uIGBzZXJ2aWNlLmNhbGxiYWNrYCB3aWxsIGVpdGhlciBleHRyYWN0IGEgY291bnRyeSBjb2RlIGZyb20gYHJlc3BvbnNlVGV4dGAgYW5kIHJldHVybiBpdCAoaW4gYHJlc3VsdGApXG4gICAgLy8gb3IgKGlmIGl0IGhhcyB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMpIGl0IHdpbGwgY2FsbCBhIGBkb25lYCBjYWxsYmFjayB3aXRoIHRoZSBjb3VudHJ5IGNvZGUgd2hlbiBpdCBpcyByZWFkeVxuICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dClcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0KCBjb21wbGV0ZSwgcmVzdWx0IClcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCB3aXRoIHRoZSBgcmVzdWx0YCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYCByZWdhcmRsZXNzIG9mIGhvdyBpdCBwcm92aWRlZCB0aGF0IHJlc3VsdCAoc3luYyBvciBhc3luYykuXG4gIC8vIGByZXN1bHRgIHdpbGwgYmUgd2hhdGV2ZXIgaXMgcmV0dXJuZWQgZnJvbSBgc2VydmljZS5jYWxsYmFja2AuIEEgc2VydmljZSBjYWxsYmFjayBzaG91bGQgcHJvdmlkZSBhbiBvYmplY3Qgd2l0aCBkYXRhXG4gIG9uU2VydmljZVJlc3VsdChjb21wbGV0ZSwgcmVzdWx0KSB7XG4gICAgLy8gY29udmVydCByZXN1bHQgdG8gbm9kZWpzIHN0eWxlIGFzeW5jIGNhbGxiYWNrXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yIHx8IChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSkge1xuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgbnVsbCwgcmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxuICAvLyBpZiBgZXJyYCBpcyBudWxsLCB0aGUgYG9uQ29tcGxldGVgIGhhbmRsZXIgaXMgY2FsbGVkIHdpdGggYGRhdGFgXG4gIHJ1bk5leHRTZXJ2aWNlT25FcnJvcihlcnIsIGRhdGEpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICB0aGlzLmxvZ0Vycm9yKGVycilcblxuICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcblxuICAgICAgaWYgKG5leHRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucnVuU2VydmljZShuZXh0U2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrRXJyb3IsXG4gICAgICAgICAgbmV3IEVycm9yKCdBbGwgc2VydmljZXMgZmFpbGVkJylcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSlcbiAgICB9XG4gIH1cblxuICBnZXRDdXJyZW50U2VydmljZU9wdHMoKSB7XG4gICAgY29uc3QgdmFsID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW3RoaXMuY3VycmVudFNlcnZpY2VJbmRleF1cblxuICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge25hbWU6IHZhbH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHZhbCgpXG4gICAgfWVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmV0dXJuIHZhbFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG4gIH1cblxuICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXG4gIGNvbXBsZXRlU2VydmljZShmbiwgZGF0YSkge1xuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xXG5cbiAgICBmbiAmJiBmbihkYXRhKVxuICB9XG5cbiAgbG9nRXJyb3IoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFRoZSBzZXJ2aWNlWyR7dGhpcy5jdXJyZW50U2VydmljZUluZGV4fV0gKCR7dGhpcy5nZXRTZXJ2aWNlQnlJZHgoaWR4KS51cmx9KSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yYCxcbiAgICAgICBlcnJcbiAgICApXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9wb3B1cFwiXG5pbXBvcnQge1xuICBjYXRlZ29yaWVzLFxuICBzdGF0dXNlcyxcbiAgc3RhdHVzRGlzbWlzcyxcbiAgc3RhdHVzQWxsb3dcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQge1xuICBhZGRDdXN0b21TdHlsZXNoZWV0LFxuICBnZXRDb29raWUsXG4gIGhhc2gsXG4gIGludGVycG9sYXRlU3RyaW5nLFxuICBpc01vYmlsZSxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNWYWxpZFN0YXR1cyxcbiAgc2V0Q29va2llLFxuICB0aHJvdHRsZSxcbiAgdHJhdmVyc2VET01QYXRoLFxufSBmcm9tIFwiLi4vdXRpbHNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMudXNlckNhdGVnb3JpZXMgPSB7XG4gICAgICBVTkNBVEVHT1JJWkVEICA6ICdESVNNSVNTJyxcbiAgICAgIEVTU0VOVElBTCAgICAgIDogJ0FMTE9XJyxcbiAgICAgIFBFUlNPTkFMSVpBVElPTjogJ0RJU01JU1MnLFxuICAgICAgQU5BTFlUSUNTICAgICAgOiAnRElTTUlTUycsXG4gICAgICBNQVJLRVRJTkcgICAgICA6ICdESVNNSVNTJ1xuICAgIH1cbiAgICB0aGlzLmN1c3RvbVN0eWxlcyA9IHt9XG4gICAgdGhpcy5oYXNUcmFuc2l0aW9uID0gISEoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCB0cmFucyA9IHtcbiAgICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgbXNUOiAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICAgIH1cbiAgXG4gICAgICBmb3IgKGxldCBwcmVmaXggaW4gdHJhbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJydcbiAgICB9KSgpXG5cbiAgICAvLyByZXR1cm5zIHRydWUgaWYgYG9uQ29tcGxldGVgIHdhcyBjYWxsZWRcbiAgICBpZiAodGhpcy5jYW5Vc2VDb29raWVzKCkpIHtcbiAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcbiAgICB9XG4gICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyB0aGUgZnVsbCBtYXJrdXAgZWl0aGVyIGNvbnRhaW5zIHRoZSB3cmFwcGVyIG9yIGl0IGRvZXMgbm90IChmb3IgbXVsdGlwbGUgaW5zdGFuY2VzKVxuICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcbiAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIHRoaXMuZ2V0UG9wdXBDbGFzc2VzKCkuam9pbignICcpKVxuICAgICAgLnJlcGxhY2UoJ3t7Y2hpbGRyZW59fScsIHRoaXMuZ2V0UG9wdXBJbm5lck1hcmt1cCgpKVxuXG4gICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcbiAgICBjb25zdCBjdXN0b21IVE1MID0gdGhpcy5vcHRpb25zLm92ZXJyaWRlSFRNTFxuICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcbiAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTFxuICAgIH1cblxuICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXG4gICAgLy8gY29udGVudC4gd2Ugd3JhcCBhbiBlbGVtZW50IGFyb3VuZCBpdCB3aGljaCB3aWxsIG1hc2sgdGhlIGhpZGRlbiBjb250ZW50XG4gICAgXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmFwcGVuZE1hcmt1cChgPGRpdiBjbGFzcz1cImNjLWdyb3dlclwiPiR7Y29va2llUG9wdXB9PC9kaXY+YClcblxuICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJycgLy8gc2V0IGl0IHRvIHZpc2libGUgKGJlY2F1c2UgYXBwZW5kTWFya3VwIGhpZGVzIGl0KVxuICAgICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlci5maXJzdENoaWxkIC8vIGdldCB0aGUgYGVsZW1lbnRgIHJlZmVyZW5jZSBmcm9tIHRoZSB3cmFwcGVyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuYXBwZW5kTWFya3VwKGNvb2tpZVBvcHVwKVxuICAgIH1cblxuICAgIHRoaXMuYXBwbHlBdXRvRGlzbWlzcygpXG4gICAgdGhpcy5hcHBseVJldm9rZUJ1dHRvbigpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cblxuICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLmZhZGVJbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cE9wZW5lZFwiIClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xvc2UoIHNob3dSZXZva2UgKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxuICAgIFxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuZmFkZU91dCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBDbG9zZWRcIiApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZhZGVJbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxuXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm5cblxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlT3V0KGVsKVxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwIC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcblxuICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXG4gICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5hZnRlckZhZGVJbihlbCksXG4gICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAqIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJ1xuICAgKi9cbiAgYWZ0ZXJGYWRlSW4oIGVsZW1lbnQgKSB7XG4gICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGxcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gIH1cbiAgXG4gIGZhZGVPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIXRoaXMuZWxlbWVudCkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpXG4gICAgICB0aGlzLmFmdGVyRmFkZUluKHRoaXMuZWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJ1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9ICgpID0+IHRoaXMuYWZ0ZXJGYWRlT3V0KHRoaXMuZWxlbWVudClcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXG5cbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH1cbiAgfVxuICBcbiAgYWZ0ZXJGYWRlT3V0KGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBhZnRlciBjbG9zZSBhbmQgYmVmb3JlIG9wZW4sIHRoZSBkaXNwbGF5IHNob3VsZCBiZSBub25lXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnJyAmJlxuICAgICAgKHRoaXMuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXG4gICAgKVxuICB9XG5cbiAgdG9nZ2xlUmV2b2tlQnV0dG9uKHNob3cpIHtcbiAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSdcbiAgfVxuXG4gIHJldm9rZUNob2ljZShwcmV2ZW50T3Blbikge1xuICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZVxuICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG5cbiAgICB0aGlzLmVtaXQoIFwicmV2b2tlQ2hvaWNlXCIgKVxuXG4gICAgaWYgKCFwcmV2ZW50T3Blbikge1xuICAgICAgdGhpcy5hdXRvT3BlbigpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gdHJ1ZSBpZiBhbnkgY29va2llcyBoYXZlIGJlZW4gc2V0XG4gICAqL1xuICBoYXNBbnN3ZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLnNvbWUoIHN0YXR1cyA9PiAhIXN0YXR1cyApXG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xuICAgKiBAcmV0dXJuIHsgYXJyYXk8Ym9vbGVhbj4gfSAtIHRydWUgaWYgY29uc2VudCBoYXMgYmVlbiBnaXZlblxuICAgKi9cbiAgaGFzQ29uc2VudGVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkubWFwKCBzdGF0dXMgPT4gc3RhdHVzID09PSBzdGF0dXNBbGxvdyB8fCBzdGF0dXMgPT09IHN0YXR1c0Rpc21pc3MgKVxuICB9XG5cbiAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICBhdXRvT3BlbigpIHtcbiAgICBjb25zdCBoYXNBbnN3ZXJlZCA9IHRoaXMuaGFzQW5zd2VyZWQoKVxuICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMub3BlbigpXG4gICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxuICAgIH1cbiAgfVxuXG4gIC8qKiBcbiAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYWxsT3JVbmRlZiAgICAgIC0gSWYgdGhpcyBpcyB0aGUgb25seSBwYXJhbSwgc2V0IEFMTCBpZiBub3QsIHNldCBVbmNhdGVnb3JpemVkIGNvb2tpZXMgc3RhdHVzZXMgc2V0IHRvIHZhbHVlLlxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGVzc2VudGlhbCAgICAgICAtIEVzc2VudGlhbCBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gYW5hbHl0aWNzICAgICAgIC0gQW5hbHl0aXMgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gbWFya2V0aW5nICAgICAgIC0gTWFya2V0aW5nIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cbiAgKi9cbiAgc2V0U3RhdHVzZXMoKSB7XG4gICAgY29uc3Qge25hbWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlfSA9IHRoaXMub3B0aW9ucy5jb29raWVcblxuICAgIC8vIGlmIGBzdGF0dXNgIGlzIHZhbGlkXG4gICAgY29uc3QgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMgPSAoIGNhdGVnb3J5TmFtZSwgc3RhdHVzICkgPT4ge1xuICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xuICAgICAgICBjb25zdCBjb29raWVOYW1lID0gbmFtZSsnXycrY2F0ZWdvcnlOYW1lXG4gICAgICAgIGNvbnN0IGNob3NlbkJlZm9yZSA9IHN0YXR1c2VzLmluZGV4T2YoIGdldENvb2tpZShjb29raWVOYW1lKSApID49IDBcbiAgICAgICAgc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXG4gICAgICAgIHRoaXMuZW1pdCggXCJzdGF0dXNDaGFuZ2VkXCIsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yeSBdICkgKVxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgYXJndW1lbnRzWyAwIF0gKSApXG4gICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYXRlZ29yaWVzXG4gICAqL1xuICBnZXRTdGF0dXNlcygpIHtcbiAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5TmFtZSA9PiBnZXRDb29raWUodGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lKydfJytjYXRlZ29yeU5hbWUpIClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgKi9cbiAgY2xlYXJTdGF0dXNlcygpIHtcbiAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgIHNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgIH0pXG4gIH1cbiAgXG4gIGNhblVzZUNvb2tpZXMoKSB7XG4gICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgfHwgd2luZG93LkNvb2tpZXNPSyB8fCB3aW5kb3cubmF2aWdhdG9yLkNvb2tpZXNPSyApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdHVzZXNWYWx1ZXMgPSB0aGlzLmdldFN0YXR1c2VzKClcbiAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcbiAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG1hdGNoID0+IG1hdGNoW09iamVjdC5rZXlzKG1hdGNoKVswXV0gKS5sZW5ndGggPiAwXG4gICAgc3RhdHVzZXNWYWx1ZXMuZm9yRWFjaCggKCBzdGF0dXMsIGluZGV4ICkgPT5cbiAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSA9PT0gc3RhdHVzXG4gICAgICAgID8gc3RhdHVzIDogdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcblxuICAgIHJldHVybiBoYXNNYXRjaGVzXG4gIH1cblxuICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcbiAgZ2V0UG9zaXRpb25DbGFzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoICctJyApLm1hcCggcG9zID0+ICdjYy0nK3BvcylcbiAgfVxuXG4gIGdldFBvcHVwQ2xhc3NlcygpIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXG4gICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgb3B0cy5wb3NpdGlvbiA9PSAndG9wJyB8fCBvcHRzLnBvc2l0aW9uID09ICdib3R0b20nXG4gICAgICAgID8gJ2Jhbm5lcidcbiAgICAgICAgOiAnZmxvYXRpbmcnXG5cbiAgICBpZiAoaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcbiAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAnY2MtdHlwZS0nICsgb3B0cy50eXBlLCAvLyBhZGQgdGhlIGNvbXBsaWFuY2UgdHlwZVxuICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgXVxuXG4gICAgaWYgKG9wdHMuc3RhdGljKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2NjLXN0YXRpYycpXG4gICAgfVxuXG4gICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKCkpXG5cbiAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXG4gICAgdGhpcy5hdHRhY2hDdXN0b21QYWxldHRlKHRoaXMub3B0aW9ucy5wYWxldHRlKVxuXG4gICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gIH1cblxuICBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuXG4gICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXG4gICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJyBcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcbiAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IGludGVycG9sYXRlU3RyaW5nKFxuICAgICAgICBvcHRzLmVsZW1lbnRzW3Byb3BdLFxuICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBzdHIgPSBvcHRzLmNvbnRlbnRbbmFtZV1cbiAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJ1xuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcblxuICAgIC8vIGNoZWNrcyBpZiB0aGUgdHlwZSBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gaW5mbyBpZiBpdCdzIG5vdFxuICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdXG4gICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2UuaW5mb1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSBjb21wbGlhbmNlIHR5cGVzIGZyb20gdGhlIGFscmVhZHkgaW50ZXJwb2xhdGVkIGBlbGVtZW50c2BcbiAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IGludGVycG9sYXRlU3RyaW5nKCBjb21wbGlhbmNlVHlwZSwgbmFtZSA9PiBpbnRlcnBvbGF0ZWRbbmFtZV0gKVxuXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBsYXlvdXQgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGJhc2ljIGlmIGl0J3Mgbm90XG4gICAgbGV0IGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF1cbiAgICBpZiAoIWxheW91dCkge1xuICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnRlcnBvbGF0ZVN0cmluZyhsYXlvdXQsIG1hdGNoID0+aW50ZXJwb2xhdGVkW21hdGNoXSApXG4gIH1cblxuICBhcHBlbmRNYXJrdXAobWFya3VwKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY29udCA9XG4gICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxuICAgICAgICA/IG9wdHMuY29udGFpbmVyXG4gICAgICAgIDogZG9jdW1lbnQuYm9keVxuXG4gICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFxuXG4gICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF1cblxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIHRoaXMuaGFzVHJhbnNpdGlvbikge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcbiAgICB9XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2soIGV2ZW50ICkgKVxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2hlY2tib3gubmFtZS50b1VwcGVyQ2FzZSgpIF0gPSBjaGVja2JveC5jaGVja2VkID8gJ0FMTE9XJyA6ICdERU5ZJ1xuICAgICAgfSlcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgIH0pXG4gICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1pbmZvXCIpLmZvckVhY2goIHNob3dJbmZvID0+IHtcbiAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XG4gICAgICAgICAgdGhpcy5ibHVyKClcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm8gY29udGFpbmVyIHRvIGF0dGFjaCB0b28uIE1ha2Ugc3VyZSB0aGUgRE9NIGhhcyBsb2FkZWQuIElzIHlvdXIgc2NyaXB0IGxvYWRlZCBqdXN0IGJlZm9yZSB0aGUgYDwvYm9keT5gIHRhZz9cIiApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xuICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxuICAgIGNvbnN0IGJ0biA9IHRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXRcbiAgICBcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2Mtc2F2ZScgKSl7XG4gICAgICB0aGlzLnNldFN0YXR1c2VzKClcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxuICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgc3RhdHVzZXMubWFwKCBzdHIgPT4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKSApLmpvaW4oJ3wnKSArICcpXFxcXGInKVxuICAgICAgKVxuICAgICAgY29uc3QgbWF0Y2ggPSAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB8fCBmYWxzZVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMobWF0Y2gpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xuICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgIH1cbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXJldm9rZScgKSkge1xuICAgICAgdGhpcy5yZXZva2VDaG9pY2UoKVxuICAgIH1cbiAgfVxuXG4gIGF0dGFjaEN1c3RvbVBhbGV0dGUocGFsZXR0ZSkge1xuICAgIGNvbnN0IGhhc2hTdHIgPSBoYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKVxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoU3RyXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzUGxhaW5PYmplY3QocGFsZXR0ZSlcblxuICAgIHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvciA9IGlzVmFsaWQgPyBzZWxlY3RvciA6IG51bGxcblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBhZGRDdXN0b21TdHlsZXNoZWV0KGhhc2hTdHIsIHBhbGV0dGUsICcuJyArIHNlbGVjdG9yKVxuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZFxuICB9XG5cblxuICBnZXRFdmVudFBhdGgoIGV2ZW50ICkge1xuICAgIGNvbnN0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGggPyBldmVudC5jb21wb3NlZFBhdGgoKSA6IChmdW5jdGlvbiAoIGFyciwgZWxlbWVudCApIHtcbiAgICAgIHdoaWxlICggZWxlbWVudCApIHtcbiAgICAgICAgYXJyLnB1c2goIGVsZW1lbnQgKVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyXG4gICAgfSkoW10sZXZlbnQudGFyZ2V0IClcbiAgICBpZiAoICFwYXRoICkge1xuICAgICAgY29uc29sZS53YXJuKCBcIicucGF0aCcgJiAnLmNvbXBvc2VkUGF0aCcgZmFpbGVkIHRvIGdlbmVyYXRlIGFuIGV2ZW50IHBhdGguXCIgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBwYXRoXG4gIH1cblxuICBhcHBseUF1dG9EaXNtaXNzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVuYWJsZWQsXG4gICAgICBkaXNtaXNzT25UaW1lb3V0ICA6IGRlbGF5LFxuICAgICAgZGlzbWlzc09uU2Nyb2xsICAgOnNjcm9sbFJhbmdlLFxuICAgICAgZGlzbWlzc09uTGlua0NsaWNrLFxuICAgICAgZGlzbWlzc09uV2luZG93Q2xpY2ssXG4gICAgICBkaXNtaXNzT25LZXlQcmVzc1xuICAgIH0gPSB0aGlzLm9wdGlvbnNcblxuICAgIGlmICggZW5hYmxlZCApIHtcbiAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT0gJ251bWJlcicgJiYgZGVsYXkgPj0gMCkge1xuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gc2V0VGltZW91dCggKCk9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzY3JvbGxSYW5nZSA9PSAnbnVtYmVyJyAmJiBzY3JvbGxSYW5nZSA+PSAwKSB7XG4gICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IE1hdGguZmxvb3Ioc2Nyb2xsUmFuZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICAgIH0gZWxzZSBpZiAoZGlzbWlzc09uV2luZG93Q2xpY2spIHtcbiAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoICFnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW1lbnQgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pZ25vcmVDbGlja3NGcm9tLnNvbWUoIGlnbm9yZWRDbGljayA9PlxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggaWdub3JlZENsaWNrIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXG4gICAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljaylcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25XaW5kb3dDbGljaylcbiAgICAgIH0gZWxzZSBpZiAoZGlzbWlzc09uTGlua0NsaWNrKSB7XG4gICAgICAgIHRoaXMub25MaW5rQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGlmICggZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtID0+IHR5cGVvZiBlbGVtLnRhZ05hbWUgIT09ICd1bmRlZmluZWQnICYmIGVsZW0udGFnTmFtZSA9PT0gJ0EnICkgKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNEaXNtaXNzIClcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcbiAgICAgICAgICAgIHRoaXMub25MaW5rQ2xpY2sgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXG4gICAgICB9IGVsc2UgaWYgKCBkaXNtaXNzT25LZXlQcmVzcyApIHtcbiAgICAgICAgICB0aGlzLm9uS2V5UHJlc3MgPSBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50XG4gICAgICAgICAgICBpZiAoIGtleUNvZGUgPT09IDEzICkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNBbGxvdyApXG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgfSBlbHNlIGlmICgga2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXG4gICAgICAgICAgICAgIHRoaXMuY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ29ua2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5UmV2b2tlQnV0dG9uKCkge1xuICAgIC8vIHJldm9rYWJsZSBpcyB0cnVlIGlmIGFkdmFuY2VkIGNvbXBsaWFuY2UgaXMgc2VsZWN0ZWRcbiAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgIT0gJ2luZm8nKSB0aGlzLm9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZVxuICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgaWYgKGlzTW9iaWxlKCkpIHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlID0gZmFsc2VcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gdGhpcy5nZXRQb3NpdGlvbkNsYXNzZXMoKVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2MtYW5pbWF0ZScpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2MtdGhlbWUtJyt0aGlzLm9wdGlvbnMudGhlbWUpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyggdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5IClcbiAgICAgIGNvbnN0IHJldm9rZUJ0biA9IHRoaXMub3B0aW9ucy5yZXZva2VCdG5cbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgY2xhc3Nlcy5qb2luKCcgJykpXG4gICAgICAgIC5yZXBsYWNlKCd7e3BvbGljeX19JywgdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5KVxuXG4gICAgICB0aGlzLnJldm9rZUJ0biA9IHRoaXMuYXBwZW5kTWFya3VwKHJldm9rZUJ0bilcblxuICAgICAgY29uc3QgYnRuID0gdGhpcy5yZXZva2VCdG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IHRocm90dGxlKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZVxuICAgICAgICAgIGNvbnN0IG1pblkgPSAyMFxuICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMFxuXG4gICAgICAgICAgaWYgKCAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy10b3AnICkgJiYgZXZ0LmNsaWVudFkgPCBtaW5ZICkgfHxcbiAgICAgICAgICAgICAgICAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1ib3R0b20nICkgJiYgZXZ0LmNsaWVudFkgPiBtYXhZICkgKSB7XG4gICAgICAgICAgICBhY3RpdmUgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFjdGl2ZSAmJiAhYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICB9IGVsc2UgaWYgKCAhYWN0aXZlICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgfVxuICAgICAgICB9LCAyMDApXG5cbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZGVzdHJveSgpe1xuICAgIGNvbnNvbGUud2FybiggXCJEZXN0cm95aW5nLi4uXCIpXG4gICAgaWYgKCB0aGlzLmVsZW1lbnQgKXtcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAoIHRoaXMucmV2b2tlQnRuICl7XG4gICAgICB0aGlzLnJldm9rZUJ0bi5yZW1vdmUoKVxuICAgIH1cbiAgICBpZiAoIHRoaXMub25XaW5kb3dTY3JvbGwgKXtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsIClcbiAgICB9XG4gICAgaWYgKCB0aGlzLm9uV2luZG93Q2xpY2sgKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2sgKVxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgIH1cbiAgICBpZiAoIHRoaXMub25MaW5rQ2xpY2sgKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgIH1cbiAgICBpZiAoIHRoaXMub25LZXlQcmVzcyApIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb25rZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyApXG4gICAgfVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cbiAgLy8gSWYgdHJ1ZSwgb3B0aW9ucyBjYW4gZGlmZmVyIGJ5IGNvdW50cnksIGRlcGVuZGluZyBvbiB0aGVpciBjb29raWUgbGF3LlxuICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgcmVnaW9uYWxMYXc6IHRydWUsXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgZW5mb3JjZSBzb21lIHZlcnNpb24gb2YgYSBjb29raWUgbGF3XG4gIGhhc0xhdzogW1xuICAgICdBVCcsXG4gICAgJ0JFJyxcbiAgICAnQkcnLFxuICAgICdIUicsXG4gICAgJ0NaJyxcbiAgICAnQ1knLFxuICAgICdESycsXG4gICAgJ0VFJyxcbiAgICAnRkknLFxuICAgICdGUicsXG4gICAgJ0RFJyxcbiAgICAnRUwnLFxuICAgICdIVScsXG4gICAgJ0lFJyxcbiAgICAnSVQnLFxuICAgICdMVicsXG4gICAgJ0xUJyxcbiAgICAnTFUnLFxuICAgICdNVCcsXG4gICAgJ05MJyxcbiAgICAnTk8nLFxuICAgICdQTCcsXG4gICAgJ1BUJyxcbiAgICAnU0snLFxuICAgICdFUycsXG4gICAgJ1NFJyxcbiAgICAnR0InLFxuICAgICdVSycsXG4gICAgJ0dSJyxcbiAgICAnRVUnLFxuICAgICdSTydcbiAgXSxcblxuICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gIHJldm9rYWJsZTogW1xuICAgICdIUicsXG4gICAgJ0NZJyxcbiAgICAnREsnLFxuICAgICdFRScsXG4gICAgJ0ZSJyxcbiAgICAnREUnLFxuICAgICdMVicsXG4gICAgJ0xUJyxcbiAgICAnTkwnLFxuICAgICdOTycsXG4gICAgJ1BUJyxcbiAgICAnRVMnXG4gIF0sXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXG4gIGV4cGxpY2l0QWN0aW9uOiBbJ0hSJywgJ0lUJywgJ0VTJywgJ05PJ11cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5jb25zdCB0b0Vycm9yID0gb2JqID0+IG5ldyBFcnJvcignRXJyb3IgWycgKyAob2JqLmNvZGUgfHwgJ1VOS05PV04nKSArICddOiAnICsgb2JqLmVycm9yKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIFRoZSBkZWZhdWx0IHRpbWVvdXQgaXMgNSBzZWNvbmRzLiBUaGlzIGlzIG1haW5seSBuZWVkZWQgdG8gY2F0Y2ggSlNPTlAgcmVxdWVzdHMgdGhhdCBlcnJvci5cbiAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxuICAvLyBhcHAgd2lsbCB0YWtlIGB0aW1lb3V0YCBtaWxsaXNlY29uZHMgdG8gcmVhY3QgdG8gYSBKU09OUCBuZXR3b3JrIGVycm9yLlxuICB0aW1lb3V0OiA1MDAwLFxuXG4gIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXG4gIHNlcnZpY2VzOiBbXG4gICAgJ2lwaW5mbydcblxuICAgIC8qXG5cbiAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxuICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcblxuICAgIHtcbiAgICAgIG5hbWU6ICdpcGluZm9kYicsXG4gICAgICBpbnRlcnBvbGF0ZVVybDoge1xuICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICBhcGlfa2V5OiAndk9nSTM3NDhkbkl5dElyc0pjeFM3cXNEZjZrYkprRTlsTjR5RURyWEFxWGNLVU52ampaUG94M2VrWHFtTU1sZCdcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcblxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ31cbiAgICB9LFxuXG4gICAgKi9cbiAgXSxcblxuICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcbiAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcbiAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKGpzb24pXG4gICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDpcbiAgICAgICAgICAnLy9hcGkuaXBpbmZvZGIuY29tL3YzL2lwLWNvdW50cnkvP2tleT17YXBpX2tleX0mZm9ybWF0PWpzb24mY2FsbGJhY2s9e2NhbGxiYWNrfScsXG4gICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiBqc29uLnN0YXR1c0NvZGUgPT0gJ0VSUk9SJ1xuICAgICAgICAgICAgICA/IHRvRXJyb3Ioe2Vycm9yOiBqc29uLnN0YXR1c01lc3NhZ2V9KVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeUNvZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcbiAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIHVybDogJy8vanMubWF4bWluZC5jb20vanMvYXBpcy9nZW9pcDIvdjIuMS9nZW9pcDIuanMnLFxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgLy8gaWYgZXZlcnl0aGluZyB3ZW50IG9rYXkgdGhlbiBgZ2VvaXAyYCBXSUxMIGJlIGRlZmluZWRcbiAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcbiAgICAgICAgICAgIGRvbmUoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnZW9pcDIuY291bnRyeShcbiAgICAgICAgICAgIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBsb2NhdGlvbi5jb3VudHJ5Lmlzb19jb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxuICAgICAgICAgIC8vIFRoZW4gd2UgY2FuICdjb21wbGV0ZScgdGhlIHNlcnZpY2UgYnkgcGFzc2luZyBkYXRhIG9yIGFuIGVycm9yIHRvIHRoZSBgZG9uZWAgY2FsbGJhY2suXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxuICBlbmFibGVkOiB0cnVlLFxuXG4gIC8vIG9wdGlvbmFsIChleHBlY3RpbmcgYSBIVE1MIGVsZW1lbnQpIGlmIHBhc3NlZCwgdGhlIHBvcHVwIGlzIGFwcGVuZGVkIHRvIHRoaXMgZWxlbWVudC4gZGVmYXVsdCBpcyBgZG9jdW1lbnQuYm9keWBcbiAgY29udGFpbmVyOiBudWxsLFxuXG4gIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcbiAgY29va2llOiB7XG4gICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcbiAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cbiAgICBwYXRoOiAnLycsXG4gICAgLy8gVGhpcyBpcyB0aGUgZG9tYWluIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIG9uIHRoaXMgZG9tYWluLlxuICAgIC8vICAtIEd1aWRlIHRvIGNvb2tpZSBkb21haW5zIC0gaHR0cHM6Ly93d3cubXhzYXNoYS5ldS9ibG9nLzIwMTQvMDMvMDQvZGVmaW5pdGl2ZS1ndWlkZS10by1jb29raWUtZG9tYWlucy9cbiAgICBkb21haW46ICcnLFxuICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxuICAgIGV4cGlyeURheXM6IDM2NSxcbiAgICAvLyBJZiB0cnVlIHRoZSBjb29raWUgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHNlY3VyZSBmbGFnLiBTZWN1cmUgY29va2llcyB3aWxsIG9ubHkgYmUgdHJhbnNtaXR0ZWQgdmlhIEhUVFBTLlxuICAgIHNlY3VyZTogZmFsc2VcbiAgfSxcblxuICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXG4gIGNvbnRlbnQ6IHtcbiAgICBoZWFkZXIgOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXG4gICAgbWVzc2FnZTogJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuICAgIGRpc21pc3M6ICdHb3QgaXQhJyxcbiAgICBhbGxvdyAgOiAnQWxsb3cgY29va2llcycsXG4gICAgZGVueSAgIDogJ0RlY2xpbmUnLFxuICAgIGxpbmsgICA6ICdMZWFybiBtb3JlJyxcbiAgICBocmVmICAgOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxuICAgIGNsb3NlICA6ICcmI3gyNzRjJyxcbiAgICB0YXJnZXQgOiAnX2JsYW5rJyxcbiAgICBwb2xpY3kgOiAnQ29va2llIFBvbGljeSdcbiAgfSxcblxuICAvLyBUaGlzIGlzIHRoZSBIVE1MIGZvciB0aGUgZWxlbWVudHMgYWJvdmUuIFRoZSBzdHJpbmcge3toZWFkZXJ9fSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGVxdWl2YWxlbnQgdGV4dCBiZWxvdy5cbiAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cbiAgLy9cbiAgLy8gIC0gQVJJQSBydWxlcyBzdWdnZXN0IHRvIGVuc3VyZSBjb250cm9scyBhcmUgdGFiYmFibGUgKHNvIHRoZSBicm93c2VyIGNhbiBmaW5kIHRoZSBmaXJzdCBjb250cm9sKSxcbiAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcbiAgZWxlbWVudHM6IHtcbiAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImNjLWhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+Jm5ic3AnLFxuICAgIG1lc3NhZ2U6XG4gICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvc3Bhbj4nLFxuICAgIG1lc3NhZ2VsaW5rOlxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX0gPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+PC9zcGFuPicsXG4gICAgZGlzbWlzczpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYT4nLFxuICAgIGFsbG93OlxuICAgICAgJzxhIGFyaWEtbGFiZWw9XCJhbGxvdyBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgIGNsYXNzPVwiY2MtYnRuIGNjLWFsbG93XCI+e3thbGxvd319PC9hPicsXG4gICAgZGVueTpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGVueSBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtZGVueVwiPnt7ZGVueX19PC9hPicsXG4gICAgbGluazpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxuICAgIGNsb3NlOlxuICAgICAgJzxzcGFuIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1jbG9zZVwiPnt7Y2xvc2V9fTwvc3Bhbj4nLFxuICAgIGNhdGVnb3JpZXM6IGAgXG4gICAgICA8dWwgY2xhc3M9XCJjYy1jYXRlZ29yaWVzXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidW5jYXRlZ29yaXplZFwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5VbmNhdGVnb3JpemVkPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIlVuY2F0ZWdvcml6ZWQgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjFcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHRoYXQgZG9uJ3QgZml0IGFueSBvdGhlciBjYXRlZ29yeS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZXNzZW50aWFsXCIgY2hlY2tlZCBkaXNhYmxlZC8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+RXNzZW50aWFsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiM1wiPl48L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGVzc2VudGlhbCBhcHBsaWNhdGlvbiBvciB3ZWJzaXRlIG9wcGVyYXRpb24gY29va2llcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiNFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGVyc29uYWxpemF0aW9uXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPlBlcnNvbmFsaXphdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJQZXJzb25hbGl6YXRpb24gRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjVcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHRoZSBhcHBsaWNhdGlvbiB0byBhIHNwZWNpZmljIHVzZXIuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjZcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuYWx5dGljc1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5BbmFseXRpY3M8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiQW5hbHl0aWNzIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI3XCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgYW5hbHlpemUgZGF0YS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiOFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFya2V0aW5nXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPk1hcmtldGluZzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjlcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHlvdXIgaW50ZXJuZXQgc2hvcHBpbmcgJiBhZHZlcnRpc2VtZW50IGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgYCxcbiAgICBzYXZlOiBgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1zYXZlXCI+U2F2ZTwvYnV0dG9uPmBcbiAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xuICB9LFxuXG4gIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XG4gIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcbiAgLy8gIC0ge3tjaGlsZHJlbn19IGlzIHdoZXJlIHRoZSBIVE1MIGNoaWxkcmVuIGFyZSBwbGFjZWRcbiAgd2luZG93OlxuICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcbiAgXG4gIG1vZGFsOiAnJyxcblxuICAvLyBUaGlzIGlzIHRoZSBodG1sIGZvciB0aGUgcmV2b2tlIGJ1dHRvbi4gVGhpcyBvbmx5IHNob3dzIHVwIGFmdGVyIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB0aGVpciBsZXZlbCBvZiBjb25zZW50XG4gIC8vIEl0IGNhbiBiZSBlbmFibGVkIG9mIGRpc2FibGVkIHVzaW5nIHRoZSBgcmV2b2thYmxlYCBvcHRpb25cbiAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxuXG4gIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxuICBjb21wbGlhbmNlOiB7XG4gICAgaW5mbzogJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlXCI+e3tkaXNtaXNzfX08L2Rpdj4nLFxuICAgICdvcHQtaW4nOlxuICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3thbGxvd319e3tjdXN0b21pemV9fTwvZGl2PicsXG4gICAgJ29wdC1vdXQnOlxuICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxuICAgIGNhdGVnb3JpZXM6ICc8ZGl2IGNsYXNzPVwiZm9ybVwiPnt7Y2F0ZWdvcmllc319e3tzYXZlfX08L2Rpdj4nXG4gIH0sXG5cbiAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXG4gIHR5cGU6ICdpbmZvJywgLy8gcmVmZXJzIHRvIGBjb21wbGlhbmNlYCAoaW4gb3RoZXIgd29yZHMsIHRoZSBidXR0b25zIHRoYXQgYXJlIGRpc3BsYXllZClcblxuICAvLyBkZWZpbmUgbGF5b3V0IGxheW91dHMgaGVyZVxuICBsYXlvdXRzOiB7XG4gICAgLy8gdGhlICdibG9jaycgbGF5b3V0IHRlbmQgdG8gYmUgZm9yIHNxdWFyZSBmbG9hdGluZyBwb3B1cHNcbiAgICBiYXNpYyAgICAgICAgIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19JyxcbiAgICAnYmFzaWMtY2xvc2UnIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcbiAgICAnYmFzaWMtaGVhZGVyJzogJ3t7aGVhZGVyfX17e21lc3NhZ2V9fXt7bGlua319e3tjb21wbGlhbmNlfX0nXG4gICAgLy8gYWRkIGEgY3VzdG9tIGxheW91dCBoZXJlLCB0aGVuIGFkZCBzb21lIG5ldyBjc3Mgd2l0aCB0aGUgY2xhc3MgJy5jYy1sYXlvdXQtbXktY29vbC1sYXlvdXQnXG4gICAgLy8nbXktY29vbC1sYXlvdXQnOiAnPGRpdiBjbGFzcz1cIm15LXNwZWNpYWwtbGF5b3V0XCI+e3ttZXNzYWdlfX17e2NvbXBsaWFuY2V9fTwvZGl2Pnt7Y2xvc2V9fScsXG4gIH0sXG5cbiAgLy8gZGVmYXVsdCBsYXlvdXQgKHNlZSBhYm92ZSlcbiAgbGF5b3V0OiAnYmFzaWMnLFxuXG4gIC8vIHRoaXMgcmVmZXJzIHRvIHRoZSBwb3B1cCB3aW5kb3dzIHBvc2l0aW9uLiB3ZSBjdXJyZW50bHkgc3VwcG9ydDpcbiAgLy8gIC0gYmFubmVyIHBvc2l0aW9uczogdG9wLCBib3R0b21cbiAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XG4gIC8vXG4gIC8vIGFkZHMgYSBjbGFzcyBgY2MtZmxvYXRpbmdgIG9yIGBjYy1iYW5uZXJgIHdoaWNoIGhlbHBzIHdoZW4gc3R5bGluZ1xuICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcblxuICAvLyBBdmFpbGFibGUgc3R5bGVzXG4gIC8vICAgIC1ibG9jayAoZGVmYXVsdCwgbm8gZXh0cmEgY2xhc3NlcylcbiAgLy8gICAgLWVkZ2VsZXNzXG4gIC8vICAgIC1jbGFzc2ljXG4gIC8vIHVzZSB5b3VyIG93biBzdHlsZSBuYW1lIGFuZCB1c2UgYC5jYy10aGVtZS1TVFlMRU5BTUVgIGNsYXNzIGluIENTUyB0byBlZGl0LlxuICAvLyBOb3RlOiBzdHlsZSBcIndpcmVcIiBpcyB1c2VkIGZvciB0aGUgY29uZmlndXJhdG9yLCBidXQgaGFzIG5vIENTUyBzdHlsZXMgb2YgaXRzIG93biwgb25seSBwYWxldHRlIGlzIHVzZWQuXG4gIHRoZW1lOiAnYmxvY2snLFxuXG4gIC8vIFRoZSBwb3B1cCBpcyBgZml4ZWRgIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzdGF0aWMgKGlubGluZSB3aXRoIHRoZSBwYWdlIGNvbnRlbnQpLCBzZXQgdGhpcyB0byBmYWxzZVxuICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcbiAgc3RhdGljOiBmYWxzZSxcblxuICAvLyBpZiB5b3Ugd2FudCBjdXN0b20gY29sb3VycywgcGFzcyB0aGVtIGluIGhlcmUuIHRoaXMgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhpcy5cbiAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxuICAvLyAgIHtcbiAgLy8gICAgIHBvcHVwOiB7YmFja2dyb3VuZDogJyMwMDAwMDAnLCB0ZXh0OiAnI2ZmZicsIGxpbms6ICcjZmZmJ30sXG4gIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcbiAgLy8gICAgIGhpZ2hsaWdodDoge2JhY2tncm91bmQ6ICcjZjhlNzFjJywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjMDAwMDAwJ30sXG4gIC8vICAgfVxuICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cbiAgLy8gb25seSBiYWNrZ3JvdW5kIG5lZWRzIHRvIGJlIGRlZmluZWQgZm9yIGV2ZXJ5IGVsZW1lbnQuIGlmIG5vdCBzZXQsIG90aGVyIGNvbG9ycyBjYW4gYmUgY2FsY3VsYXRlZCBmcm9tIGl0XG4gIHBhbGV0dGU6IG51bGwsXG5cbiAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGVnYWxgIGNhbiBjaGFuZ2UgdGhpcyB0byBgdHJ1ZWAgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IHNob3VsZFxuICByZXZva2FibGU6IGZhbHNlLFxuXG4gIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxuICBhbmltYXRlUmV2b2thYmxlOiB0cnVlLFxuXG4gIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcbiAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXG4gIHNob3dMaW5rOiB0cnVlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXG4gIGRpc21pc3NPblNjcm9sbDogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGF1dG9kaXNtaXNzIGFmdGVyIHNldCB0aW1lXG4gIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgZGlzbWlzc09uV2luZG93Q2xpY2s6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgZGlzbWlzc09uTGlua0NsaWNrOiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMga2V5cyBhcmUgcHJlc3NlZCwgKCBhbGxvd0tleUNvZGUgPSAxMywgZGVueUtleUNvZGUgPSAyNyApXG4gIGRpc21pc3NPbktleVByZXNzOiBmYWxzZSxcblxuICAvLyBJZiBgZGlzbWlzc09uV2luZG93Q2xpY2tgIGlzIHRydWUsIHdlIGNhbiBjbGljayBvbiAncmV2b2tlJyBhbmQgd2UnbGwgc3RpbGwgZGlzbWlzcyB0aGUgYmFubmVyLCBzbyB3ZSBuZWVkIGV4Y2VwdGlvbnMuXG4gIC8vIHNob3VsZCBiZSBhbiBhcnJheSBvZiBjbGFzcyBuYW1lcyAobm90IENTUyBzZWxlY3RvcnMpXG4gIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0bicsICdjYy1saW5rJ10sIC8vIGFscmVhZHkgaW5jbHVkZXMgdGhlIHJldm9rZSBidXR0b24gYW5kIHRoZSBiYW5uZXIgaXRzZWxmXG5cbiAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxuICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcbiAgYXV0b09wZW46IHRydWUsXG5cbiAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXG4gIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcbiAgLy9cbiAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpXG4gIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluc3RhbmNlLmVsZW1lbnQpXG4gIC8vXG4gIGF1dG9BdHRhY2g6IHRydWUsXG5cbiAgLy8gc2V0IHZhbHVlIGlmIGZsb2F0aW5nIGxheW91dCBzaG91bGQgYmUgZm9yY2VkIGZvciBtb2JpbGUgZGV2aWNlc1xuICBtb2JpbGVGb3JjZUZsb2F0OiB0cnVlLFxuXG4gIC8vIHNpbXBsZSB3aGl0ZWxpc3QvYmxhY2tsaXN0IGZvciBwYWdlcy4gc3BlY2lmeSBwYWdlIGJ5OlxuICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gIC8vICAgLSB1c2luZyBSZWdFeHAgICA6IC9cXC9wYWdlX1tcXGRdK1xcLmh0bWwvICAgIChtYXRjaGVkICcvcGFnZV8xLmh0bWwnIGFuZCAnL3BhZ2VfMi5odG1sJyBldGMpXG4gIHdoaXRlbGlzdFBhZ2U6IFtdLFxuICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAvLyBJZiB0aGlzIGlzIGRlZmluZWQsIHRoZW4gaXQgaXMgdXNlZCBhcyB0aGUgaW5uZXIgaHRtbCBpbnN0ZWFkIG9mIGxheW91dC4gVGhpcyBhbGxvd3MgZm9yIHVsdGltYXRlIGN1c3RvbWlzYXRpb24uXG4gIC8vIEJlIHN1cmUgdG8gdXNlIHRoZSBjbGFzc2VzIGBjYy1idG5gIGFuZCBgY2MtYWxsb3dgLCBgY2MtZGVueWAgb3IgYGNjLWRpc21pc3NgLiBUaGV5IGVuYWJsZSB0aGUgYXBwIHRvIHJlZ2lzdGVyIGNsaWNrXG4gIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICBvdmVycmlkZUhUTUw6IG51bGxcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gKCB1cmwsIGNhbGxiYWNrLCB0aW1lb3V0ICkgPT4ge1xuICBsZXQgdGltZW91dElkeFxuICBjb25zdCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gIHNjcmlwdFRhZy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpXG4gIHNjcmlwdFRhZy5zcmMgPSB1cmwuc3JjIHx8IHVybFxuICBzY3JpcHRUYWcuYXN5bmMgPSBmYWxzZVxuXG4gIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHRoaXMgY29kZSBoYW5kbGVzIHR3byBzY2VuYXJpb3MsIHdoZXRoZXIgY2FsbGVkIGJ5IG9ubG9hZCBvciBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICBjb25zdCBzdGF0ZSA9IHNjcmlwdFRhZy5yZWFkeVN0YXRlXG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkeClcblxuICAgIGlmICghY2FsbGJhY2suZG9uZSAmJiAoIXN0YXRlIHx8IC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc3RhdGUpKSkge1xuICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWVcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHRUYWcub25sb2FkID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKVxuXG4gIC8vIFlvdSBjYW4ndCBjYXRjaCBKU09OUCBFcnJvcnMsIGJlY2F1c2UgaXQncyBoYW5kbGVkIGJ5IHRoZSBzY3JpcHQgdGFnXG4gIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjYWxsYmFjay5kb25lID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcbiAgfSwgdGltZW91dClcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VBc3luY1JlcXVlc3QgPSAoIHVybCwgb25Db21wbGV0ZSwgdGltZW91dCwgcG9zdERhdGEsIHJlcXVlc3RIZWFkZXJzICkgPT4ge1xuICBjb25zdCB4aHIgPSBuZXcgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuQWN0aXZlWE9iamVjdCkoXG4gICAgJ01TWE1MMi5YTUxIVFRQLjMuMCdcbiAgKVxuXG4gIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSlcblxuICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RIZWFkZXJzKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICBjb25zdCBzcGxpdCA9IHJlcXVlc3RIZWFkZXJzW2ldLnNwbGl0KCc6JywgMilcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICBzcGxpdFswXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyksXG4gICAgICAgIHNwbGl0WzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygb25Db21wbGV0ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMykge1xuICAgICAgICBvbkNvbXBsZXRlKHhocilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB4aHIuc2VuZChwb3N0RGF0YSlcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gJyAnICsgZG9jdW1lbnQuY29va2llXG4gIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnICsgbmFtZSArICc9JylcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA8IDJcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogcGFydHNcbiAgICAgICAgLnBvcCgpXG4gICAgICAgIC5zcGxpdCgnOycpXG4gICAgICAgIC5zaGlmdCgpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoIG5hbWUsIHZhbHVlLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSApID0+IHtcbiAgY29uc3QgZXhkYXRlID0gbmV3IERhdGUoKVxuICBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICtcbiAgICAgICAgICAgICAgICAgICAgJztleHBpcmVzPScgKyBleGRhdGUudG9VVENTdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgICc7cGF0aD0nICsgKHBhdGggfHwgJy8nKSArXG4gICAgICAgICAgICAgICAgICAgICggZG9tYWluID8gJztkb21haW49JyArIGRvbWFpbiA6ICcnICkgK1xuICAgICAgICAgICAgICAgICAgICAoIHNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnIClcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgeyBnZXRDb250cmFzdCwgZ2V0SG92ZXJDb2xvciB9IGZyb20gJy4vc3R5bGUnXG5cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSAoIGVsZW0sIGNsYXNzTmFtZSApID0+XG4gICFlbGVtIHx8ICFlbGVtLnBhcmVudE5vZGVcbiAgPyBudWxsIDogZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICA/IGVsZW0gOiB0cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpXG5cbmV4cG9ydCBjb25zdCBhZGRDdXN0b21TdHlsZXNoZWV0ID0gKGlkLCBwYWxldHRlLCBwcmVmaXgpID0+IHtcbiAgY29uc3QgY29sb3JTdHlsZXMgPSB7fVxuICBjb25zdCB7IHBvcHVwLCBidXR0b24sIGhpZ2hsaWdodCwgc2F2ZUJ1dHRvbiB9ID0gcGFsZXR0ZVxuXG4gIC8vIG5lZWRzIGJhY2tncm91bmQgY29sb3VyLCB0ZXh0IGFuZCBsaW5rIHdpbGwgYmUgc2V0IHRvIGJsYWNrL3doaXRlIGlmIG5vdCBzcGVjaWZpZWRcbiAgaWYgKHBvcHVwKSB7XG4gICAgICAvLyBhc3N1bWVzIHBvcHVwLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dCA/IHBvcHVwLnRleHQgOiBnZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKVxuICAgICAgcG9wdXAubGluayA9IHBvcHVwLmxpbmsgPyBwb3B1cC5saW5rIDogcG9wdXAudGV4dFxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtdG9vbHRpcCwgJyArIHByZWZpeCArICcgLmNjLXRvb2x0aXA6YWZ0ZXInXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcbiAgICAgIF1cbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2Mtd2luZG93J10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXG4gICAgICBdXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXJldm9rZSddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxuICAgICAgXVxuICAgICAgY29sb3JTdHlsZXNbXG4gICAgICAgICAgcHJlZml4ICsgJyAuY2MtbGluaywnICsgcHJlZml4ICsgJyAuY2MtbGluazphY3RpdmUsJyArIHByZWZpeCArICcgLmNjLWxpbms6dmlzaXRlZCdcbiAgICAgIF0gPSBbJ2NvbG9yOiAnICsgcG9wdXAubGlua11cblxuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgIC8vIGFzc3VtZXMgYnV0dG9uLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b24udGV4dCA/IGJ1dHRvbi50ZXh0IDogZ2V0Q29udHJhc3QoYnV0dG9uLmJhY2tncm91bmQpO1xuICAgICAgICAgIGJ1dHRvbi5ib3JkZXIgPSBidXR0b24uYm9yZGVyID8gYnV0dG9uLmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIGJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBidXR0b24uYmFja2dyb3VuZCxcbiAgICAgICAgICBdXG5cbiAgICAgICAgICBpZiAoYnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10ucHVzaCgncGFkZGluZzogJyArIGJ1dHRvbi5wYWRkaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnV0dG9uLmJhY2tncm91bmQgIT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG46aG92ZXIsICcgKyBwcmVmaXggKyAnIC5jYy1idG46Zm9jdXMnXSA9IFtcbiAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgKGJ1dHRvbi5ob3ZlciB8fCBnZXRIb3ZlckNvbG9yKGJ1dHRvbi5iYWNrZ3JvdW5kKSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0LnRleHQgPSBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICAgICAgOiBnZXRDb250cmFzdChoaWdobGlnaHQuYmFja2dyb3VuZCk7XG4gICAgICAgICAgICAgIGhpZ2hsaWdodC5ib3JkZXIgPSBoaWdobGlnaHQuYm9yZGVyID8gaGlnaGxpZ2h0LmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcbiAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBoaWdobGlnaHQuYm9yZGVyLFxuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHNldHMgaGlnaGxpZ2h0IHRleHQgY29sb3IgdG8gcG9wdXAgdGV4dC4gYmFja2dyb3VuZCBhbmQgYm9yZGVyIGFyZSB0cmFuc3BhcmVudCBieSBkZWZhdWx0LlxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNhdmVCdXR0b24pIHtcbiAgICAgICAgICBjb2xvclN0eWxlc1tgJHtwcmVmaXh9IC5jYy1idG4uY2Mtc2F2ZWBdID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBzYXZlQnV0dG9uLnRleHQsXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJhY2tncm91bmQsXG4gICAgICAgICAgXVxuICAgICAgfVxuICB9XG5cbiAgLy8gdGhpcyB3aWxsIGJlIGludGVycHJldHRlZCBhcyBDU1MuIHRoZSBrZXkgaXMgdGhlIHNlbGVjdG9yLCBhbmQgZWFjaCBhcnJheSBlbGVtZW50IGlzIGEgcnVsZVxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGUuaWQgPSBpZFxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZSApXG4gIE9iamVjdC5lbnRyaWVzKCBjb2xvclN0eWxlcyApLmZvckVhY2goICggWyBwcm9wLCB2YWx1ZSBdLCBpbmRleCApID0+XG4gICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZSggYCR7cHJvcH17JHt2YWx1ZS5qb2luKCc7Jyl9fWAsIGluZGV4IClcbiAgKVxuICByZXR1cm4gc3R5bGVcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSBcIi4vY29va2llXCJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBjb29raWUuZ2V0Q29va2llXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gY29va2llLnNldENvb2tpZVxuXG5cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZVN0cmluZyA9ICggc3RyLCBjYWxsYmFjayApID0+XG4gIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpICwgKCBtYXRjaGVzLCByZXBsYWNlZCApID0+IGNhbGxiYWNrKCByZXBsYWNlZCApIHx8ICcnKVxuXG4vLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChjYWxsYmFjaywgbGltaXQpID0+IHtcbiAgbGV0IHdhaXQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF3YWl0KSB7XG4gICAgICBjYWxsYmFjayguLi5hcmd1bWVudHMpXG4gICAgICB3YWl0ID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgd2FpdCA9IGZhbHNlXG4gICAgICB9LCBsaW1pdClcbiAgICB9XG4gIH1cbn1cblxuLy8gb25seSB1c2VkIGZvciBoYXNoaW5nIGpzb24gb2JqZWN0cyAodXNlZCBmb3IgaGFzaCBtYXBwaW5nIHBhbGV0dGUgb2JqZWN0cywgdXNlZCB3aGVuIGN1c3RvbSBjb2xvdXJzIGFyZSBwYXNzZWQgdGhyb3VnaCBKYXZhU2NyaXB0KVxuZXhwb3J0IGNvbnN0IGhhc2ggPSBzdHIgPT4ge1xuICBsZXQgaGFzaE51bSA9IDAsXG4gICAgaSA9IDAsXG4gICAgY2hyLFxuICAgIGxlbiA9IHN0ci5sZW5ndGhcbiAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoTnVtXG4gIGZvciAoIGk7IGkgPCBsZW47ICsraSApIHtcbiAgICBjaHIgPSBzdHIuY2hhckNvZGVBdCggaSApXG4gICAgaGFzaE51bSA9ICggaGFzaE51bSA8PCA1ICkgLSBoYXNoTnVtICsgY2hyXG4gICAgaGFzaE51bSB8PSAwXG4gIH1cbiAgcmV0dXJuIGhhc2hOdW1cbn1cbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gXCIuL3N0eWxlXCJcbmV4cG9ydCBjb25zdCBub3JtYWxpemVIZXggPSBzdHlsZS5ub3JtYWxpemVIZXhcbmV4cG9ydCBjb25zdCBnZXRDb250cmFzdCA9IHN0eWxlLmdldENvbnRyYXN0XG5leHBvcnQgY29uc3QgZ2V0THVtaW5hbmNlID0gc3R5bGUuZ2V0THVtaW5hbmNlXG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9c3R5bGUuZ2V0SG92ZXJDb2xvclxuXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCJcbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSBkb20udHJhdmVyc2VET01QYXRoXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IGRvbS5hZGRDdXN0b21TdHlsZXNoZWV0XG5cbmltcG9ydCAqIGFzIHZhbGlkYXRpb24gZnJvbSBcIi4vdmFsaWRhdGlvblwiXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHZhbGlkYXRpb24uaXNWYWxpZFN0YXR1c1xuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSB2YWxpZGF0aW9uLmlzUGxhaW5PYmplY3RcbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9IHZhbGlkYXRpb24uaXNNb2JpbGVcblxuaW1wb3J0ICogYXMgYXN5bmNGbnMgZnJvbSBcIi4vYXN5bmNcIlxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9IGFzeW5jRm5zLmdldFNjcmlwdFxuZXhwb3J0IGNvbnN0IG1ha2VBc3luY1JlcXVlc3QgPSBhc3luY0Zucy5tYWtlQXN5bmNSZXF1ZXN0XG5cbmNvbnN0IGxvb3BQcm9wZXJ0aWVzID0gb3ZlcndyaXRlcyA9PiAob2JqLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgaWYgKCB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpICkge1xuICAgIGlmICggb3ZlcndyaXRlc1sga2V5IF0gaW5zdGFuY2VvZiBPYmplY3QgJiYgIShvdmVyd3JpdGVzWyBrZXkgXSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgICAgb2JqWyBrZXkgXSA9IE9iamVjdC5lbnRyaWVzKHZhbHVlKS5yZWR1Y2UobG9vcFByb3BlcnRpZXMob3ZlcndyaXRlc1trZXldKSwge30pXG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialsga2V5IF0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoIG92ZXJ3cml0ZXMuaGFzT3duUHJvcGVydHkoIGtleSApICkge1xuICAgICAgb2JqWyBrZXkgXSA9IG92ZXJ3cml0ZXNbIGtleSBdXG4gICAgfWVsc2Uge1xuICAgICAgb2JqWyBrZXkgXSA9IHZhbHVlIFxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBjb25zdCBtZXJnZU9wdGlvbnMgPSAoIGRlZmF1bHRzLCBvdmVyd3JpdGVzICkgPT5cbiAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzKSwge30pXG4iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGV4ID0gaGV4ID0+XG4gIGhleFswXSA9PSAnIydcbiAgICA/IGhleC5zdWJzdHIoMSkgOiBoZXgubGVuZ3RoID09IDNcbiAgICA/IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXSA6IGhleFxuXG4vLyB1c2VkIHRvIGdldCB0ZXh0IGNvbG9ycyBpZiBub3Qgc2V0XG5leHBvcnQgY29uc3QgZ2V0Q29udHJhc3QgPSBoZXggPT4ge1xuICBoZXggPSBub3JtYWxpemVIZXgoaGV4KVxuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpXG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNilcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KVxuICBjb25zdCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDBcbiAgcmV0dXJuIHlpcSA+PSAxMjggPyAnIzAwMCcgOiAnI2ZmZidcbn1cblxuLy8gdXNlZCB0byBjaGFuZ2UgY29sb3Igb24gaGlnaGxpZ2h0XG5leHBvcnQgY29uc3QgZ2V0THVtaW5hbmNlID0gaGV4ID0+IHtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQobm9ybWFsaXplSGV4KGhleCksIDE2KSxcbiAgICBhbXQgPSAzOCxcbiAgICBSID0gKG51bSA+PiAxNikgKyBhbXQsXG4gICAgQiA9ICgobnVtID4+IDgpICYgMHgwMGZmKSArIGFtdCxcbiAgICBHID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdFxuICAgIHJldHVybiAnIycgKyAoXG4gICAgMHgxMDAwMDAwICtcbiAgICAoUiA8IDI1NSA/IChSIDwgMSA/IDAgOiBSKSA6IDI1NSkgKiAweDEwMDAwICtcbiAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXG4gICAgKEcgPCAyNTUgPyAoRyA8IDEgPyAwIDogRykgOiAyNTUpXG4gIClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnNsaWNlKDEpXG59XG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9IGhleCA9PiB7XG4gIGhleCA9IG5vcm1hbGl6ZUhleCggaGV4IClcbiAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcbiAgcmV0dXJuIGhleCA9PT0gJzAwMDAwMCcgPyAnIzIyMicgOiBnZXRMdW1pbmFuY2UoIGhleCApXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgc3RhdHVzZXMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGF0dXMgaXMgaW4gdGhlIGNvbnN0YW50cyBsaXN0XG4gKiBAcGFyYW0geyBzdHJpbmcgfSBzdGF0dXMgLSBTdGF0dXMgU3RyaW5nIHRvXG4gKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gaWYgc3RhdHVzIGlzIHZhbGlkXG4gKi9cbmV4cG9ydCBjb25zdCBpc1ZhbGlkU3RhdHVzID0gc3RhdHVzID0+IHN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA+PSAwXG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9ICgpID0+XG4gIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApXG5cbi8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0XG4iXSwic291cmNlUm9vdCI6IiJ9