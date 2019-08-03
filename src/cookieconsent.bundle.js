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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cookieconsent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalises the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block;\n      background: rgba(221, 221, 221, 0.6); }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey; }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px; }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion-title {\n      cursor: pointer; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion {\n      display: none;\n      height: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion.open {\n      display: block;\n      height: auto; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      background: white;\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n    .cc-theme-classic .cc-category .cc-tooltip .cc-cookie-accordion-title {\n      color: black; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


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

/***/ "./src/cookieconsent.js":
/*!******************************!*\
  !*** ./src/cookieconsent.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__);


var _defineProperty2 = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

var _defineProperty3 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_defineProperty2);

var _typeof2 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var _typeof3 = _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0___default()(_typeof2);



__webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");

!function (cc) {
  // stop from running again, if accidently included more than once.
  if (cc.hasInitialized) return;
  var util = {
    interpolateString: function interpolateString(str, callback) {
      return str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function () {
        return callback(arguments[1]) || '';
      });
    },
    deepExtend: function deepExtend(target, source) {
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          if (prop in target && this.isPlainObject(target[prop]) && this.isPlainObject(source[prop])) {
            this.deepExtend(target[prop], source[prop]);
          } else {
            target[prop] = source[prop];
          }
        }
      }

      return target;
    },
    getCookie: function getCookie(name) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + name + '=');
      return parts.length < 2 ? undefined : parts.pop().split(';').shift();
    },
    setCookie: function setCookie(name, value, expiryDays, domain, path, secure) {
      var exdate = new Date();
      exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
      document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
    },
    // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)
    throttle: function throttle(callback, limit) {
      var wait = false;
      return function () {
        if (!wait) {
          callback.apply(this, arguments);
          wait = true;
          setTimeout(function () {
            wait = false;
          }, limit);
        }
      };
    },
    // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)
    hash: function hash(str) {
      var hash = 0,
          i = 0,
          chr,
          len = str.length;
      if (str.length === 0) return hash;

      for (i; i < len; ++i) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }

      return hash;
    },
    normaliseHex: function normaliseHex(hex) {
      if (hex[0] == '#') {
        hex = hex.substr(1);
      }

      if (hex.length == 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      return hex;
    },
    // used to get text colors if not set
    getContrast: function getContrast(hex) {
      hex = this.normaliseHex(hex);
      var r = parseInt(hex.substr(0, 2), 16);
      var g = parseInt(hex.substr(2, 2), 16);
      var b = parseInt(hex.substr(4, 2), 16);
      var yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? '#000' : '#fff';
    },
    // used to change color on highlight
    getLuminance: function getLuminance(hex) {
      var num = parseInt(this.normaliseHex(hex), 16),
          amt = 38,
          R = (num >> 16) + amt,
          B = (num >> 8 & 0x00ff) + amt,
          G = (num & 0x0000ff) + amt;
      return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
    },
    isMobile: function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    isPlainObject: function isPlainObject(obj) {
      // The code "typeof obj === 'object' && obj !== null" allows Array objects
      return (0, _typeof3["default"])(obj) === 'object' && obj !== null && obj.constructor == Object;
    },
    traverseDOMPath: function traverseDOMPath(elem, className) {
      if (!elem || !elem.parentNode) return null;
      if (elem.classList.contains(className)) return elem;
      return this.traverseDOMPath(elem.parentNode, className);
    }
  }; // valid cookie values

  cc.status = {
    deny: 'deny',
    allow: 'allow',
    dismiss: 'dismiss'
  };
  cc.category = {
    uncategorized: 'dismiss',
    essential: 'allow',
    personalization: 'dismiss',
    analytics: 'dismiss',
    marketing: 'dismiss'
  };
  /**
   * Checks if a status is in the constants list
   * @param { string } status - Status String to
   * @return { boolean } - if status is valid
   */

  var isValidStatus = function isValidStatus(status) {
    return Object.keys(cc.status).indexOf(status) >= 0;
  }; // detects the `transitionend` event name


  cc.transitionEnd = function () {
    var el = document.createElement('div');
    var trans = {
      t: 'transitionend',
      OT: 'oTransitionEnd',
      msT: 'MSTransitionEnd',
      MozT: 'transitionend',
      WebkitT: 'webkitTransitionEnd'
    };

    for (var prefix in trans) {
      if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] != 'undefined') {
        return trans[prefix];
      }
    }

    return '';
  }();

  cc.hasTransition = !!cc.transitionEnd; // contains references to the custom <style> tags

  cc.customStyles = {};

  cc.Popup = function () {
    var defaultOptions = {
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
      // these callback hooks are called at certain points in the program execution
      onPopupOpen: function onPopupOpen() {},
      onPopupClose: function onPopupClose() {},
      onInitialize: function onInitialize(statuses) {},
      onStatusChange: function onStatusChange(cookieName, status, chosenBefore) {},
      onRevokeChoice: function onRevokeChoice() {},
      onNoCookieLaw: function onNoCookieLaw(countryCode, country) {},
      // each item defines the inner text for the element that it references
      content: {
        header: 'Cookies used on the website!',
        message: 'This website uses cookies to ensure you get the best experience on our website.',
        dismiss: 'Got it!',
        allow: 'Allow cookies',
        deny: 'Decline',
        link: 'Learn more',
        href: 'https://www.cookiesandyou.com',
        close: '&#x274c;',
        target: '_blank',
        policy: 'Cookie Policy'
      },
      // This is the HTML for the elements above. The string {{header}} will be replaced with the equivalent text below.
      // You can remove "{{header}}" and write the content directly inside the HTML if you want.
      //
      //  - ARIA rules suggest to ensure controls are tabbable (so the browser can find the first control),
      //    and to set the focus to the first interactive control (https://w3c.github.io/using-aria/)
      elements: {
        header: '<span class="cc-header">{{header}}</span>&nbsp;',
        message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
        messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',
        dismiss: '<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',
        allow: '<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',
        deny: '<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',
        link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
        close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
        categories: " \n          <ul class=\"cc-categories\">\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"0\"><input type=\"checkbox\" name=\"uncategorized\"/><span class=\"cc-btn-checkbox\"></span>Uncategorized</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Uncategorized Definition Button\" tabindex=\"1\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies that don't fit any other category.</p>\n                <!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Uncategorized Cookies List\" role=\"button\">Uncategorized Cookies</a>\n                <ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>-->\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"2\"><input type=\"checkbox\" name=\"essential\" checked disabled/><span class=\"cc-btn-checkbox\"></span>Essential</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Essential Definition Button\" tabindex=\"3\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for essential application or website opperation cookies.</p>\n                <!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Essential Cookies List\" role=\"button\">Essential Cookies</a>\n                <ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>-->\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"4\"><input type=\"checkbox\" name=\"personalization\"/><span class=\"cc-btn-checkbox\"></span>Personalization</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Personalization Definition Button\" tabindex=\"5\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies used to help peronalize the application to a specific user.</p>\n                <!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Personalization Cookies List\" role=\"button\">Personalization Cookies</a>\n                <ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>-->\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"6\"><input type=\"checkbox\" name=\"analytics\"/><span class=\"cc-btn-checkbox\"></span>Analytics</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Analytics Definition Button\" tabindex=\"7\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies used to help analyize data.</p>\n                <!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Analytics Cookies List\" role=\"button\">Analytics Cookies</a>\n                <ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>-->\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"8\"><input type=\"checkbox\" name=\"marketing\"/><span class=\"cc-btn-checkbox\"></span>Marketing</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Marketing Definition Button\" tabindex=\"9\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies used to help peronalize your internet shopping & advertisement experiences.</p>\n                <!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Marketing Cookies List\" role=\"button\">Marketing Cookies</a>\n                <ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>-->\n              </div>\n            </li>\n          </ul>\n        ",
        save: "\n          <button class=\"cc-btn cc-save\">Save</button>\n        " //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

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
      "static": false,
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
      // Most of the time this should be false, but the `cookieconsent.law` can change this to `true` if it detects that it should
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
      // If `dismissOnWindowClick` is true, we can click on 'revoke' and we'll still dismiss the banner, so we need exceptions.
      // should be an array of class names (not CSS selectors)
      ignoreClicksFrom: ['cc-revoke', 'cc-btn'],
      // already includes the revoke button and the banner itself
      // The application automatically decide whether the popup should open.
      // Set this to false to prevent this from happening and to allow you to control the behaviour yourself
      autoOpen: true,
      // By default the created HTML is automatically appended to the container (which defaults to <body>). You can prevent this behaviour
      // by setting this to false, but if you do, you must attach the `element` yourself, which is a public property of the popup instance:
      //
      //     const instance = cookieconsent.factory(options);
      //     document.body.appendChild(instance.element);
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
    };

    function CookiePopup() {
      this.initialize.apply(this, arguments);
    }

    CookiePopup.prototype.initialize = function (options) {
      if (this.options) {
        this.destroy(); // already rendered
      } // set options back to default options


      util.deepExtend(this.options = {}, defaultOptions); // merge in user options

      if (util.isPlainObject(options)) {
        util.deepExtend(this.options, options);
      } // returns true if `onComplete` was called


      if (checkCallbackHooks.call(this)) {
        // user has already answered
        this.options.enabled = false;
      } // apply blacklist / whitelist


      if (this.options.blacklistPage.includes(location.pathname)) {
        this.options.enabled = false;
      }

      if (this.options.whitelistPage.includes(location.pathname)) {
        this.options.enabled = true;
      } // the full markup either contains the wrapper or it does not (for multiple instances)


      var cookiePopup = this.options.window.replace('{{classes}}', getPopupClasses.call(this).join(' ')).replace('{{children}}', getPopupInnerMarkup.call(this)); // if user passes html, use it instead

      var customHTML = this.options.overrideHTML;

      if (typeof customHTML == 'string' && customHTML.length) {
        cookiePopup = customHTML;
      } // if static, we need to grow the element from 0 height so it doesn't jump the page
      // content. we wrap an element around it which will mask the hidden content


      if (this.options["static"]) {
        // `grower` is a wrapper div with a hidden overflow whose height is animated
        var wrapper = appendMarkup.call(this, '<div class="cc-grower">' + cookiePopup + '</div>');
        wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

        this.element = wrapper.firstChild; // get the `element` reference from the wrapper

        this.element.style.display = 'none';
        this.element.classList.add('cc-invisible');
      } else {
        this.element = appendMarkup.call(this, cookiePopup);
      }

      applyAutoDismiss.call(this);
      applyRevokeButton.call(this);

      if (this.options.autoOpen) {
        this.autoOpen();
      }
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

      if (this.onWindowClick) {
        window.removeEventListener('click', this.onWindowClick);
        this.onWindowClick = null;
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
      removeCustomStyle(this.options.palette);
      this.options = null;
    };

    CookiePopup.prototype.open = function (callback) {
      if (!this.element) return;

      if (!this.isOpen()) {
        if (cc.hasTransition) {
          this.fadeIn();
        } else {
          this.element.style.display = '';
        }

        if (this.options.revokable) {
          this.toggleRevokeButton();
        }

        this.options.onPopupOpen.call(this);
      }

      return this;
    };

    CookiePopup.prototype.close = function (showRevoke) {
      if (!this.element) return;

      if (this.isOpen()) {
        if (cc.hasTransition) {
          this.fadeOut();
        } else {
          this.element.style.display = 'none';
        }

        if (showRevoke && this.options.revokable) {
          this.toggleRevokeButton(true);
        }

        this.options.onPopupClose.call(this);
      }

      return this;
    };

    CookiePopup.prototype.fadeIn = function () {
      var el = this.element;
      if (!cc.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
      // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
      // has a chance to run, then we run it ourselves

      if (this.afterTransition) {
        afterFadeOut.call(this, el);
      }

      if (el.classList.contains('cc-invisible')) {
        el.style.display = '';

        if (this.options["static"]) {
          this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px';
        }

        var fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
        // Although most browsers can handle values less than 20ms, it should remain above this value.
        // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
        // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
        // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
        // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

        this.openingTimeout = setTimeout(afterFadeIn.bind(this, el), fadeInTimeout);
      }
    };

    CookiePopup.prototype.fadeOut = function () {
      var el = this.element;
      if (!cc.hasTransition || !el) return;

      if (this.openingTimeout) {
        clearTimeout(this.openingTimeout);
        afterFadeIn.bind(this, el);
      }

      if (!el.classList.contains('cc-invisible')) {
        if (this.options["static"]) {
          this.element.parentNode.style.maxHeight = '';
        }

        this.afterTransition = afterFadeOut.bind(this, el);
        el.addEventListener(cc.transitionEnd, this.afterTransition);
        el.classList.add('cc-invisible');
      }
    };

    CookiePopup.prototype.isOpen = function () {
      return this.element && this.element.style.display == '' && (cc.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
    };

    CookiePopup.prototype.toggleRevokeButton = function (show) {
      if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
    };

    CookiePopup.prototype.revokeChoice = function (preventOpen) {
      this.options.enabled = true;
      this.clearStatuses();
      this.options.onRevokeChoice.call(this);

      if (!preventOpen) {
        this.autoOpen();
      }
    };
    /**
     * Has the user responded to the banner
     * @return { boolean } - true if any cookies have been set
     */


    CookiePopup.prototype.hasAnswered = function () {
      return this.getStatuses().some(function (status) {
        return !!status;
      });
    };
    /**
     * Indicates if the user has given consent to all of the categories
     * @return { array<boolean> } - true if consent has been given
     */


    CookiePopup.prototype.hasConsented = function () {
      return this.getStatuses().map(function (status) {
        return status === cc.status.allow || status === cc.status.dismiss;
      });
    }; // opens the popup if no answer has been given


    CookiePopup.prototype.autoOpen = function (options) {
      var hasAnswered = this.hasAnswered();

      if (!hasAnswered && this.options.enabled) {
        this.open();
      } else if (hasAnswered && this.options.revokable) {
        this.toggleRevokeButton(true);
      }
    };
    /** 
     * Set's cookie statuses
     * @param { string<cc.status> } allOrUndef      - If this is the only param, set ALL if not, set Uncategorized cookies statuses set to value.
     * @param { string<cc.status> } essential       - Essential Cookies status set to value
     * @param { string<cc.status> } personalization - Preferences / Functionality set to value
     * @param { string<cc.status> } analytics       - Analytis Cookies status set to value
     * @param { string<cc.status> } marketing       - Marketing Cookies status set to value
     * @return { undefined }
    */


    CookiePopup.prototype.setStatuses = function () {
      var _this = this,
          _arguments = arguments;

      var _this$options$cookie = this.options.cookie,
          name = _this$options$cookie.name,
          expiryDays = _this$options$cookie.expiryDays,
          domain = _this$options$cookie.domain,
          path = _this$options$cookie.path,
          secure = _this$options$cookie.secure; // if `status` is valid

      var updateCategoryStatus = function updateCategoryStatus(categoryName, status) {
        if (isValidStatus(status)) {
          var cookieName = name + '_' + categoryName;
          var chosenBefore = Object.keys(cc.status).indexOf(util.getCookie(cookieName)) >= 0;
          util.setCookie(cookieName, status, expiryDays, domain, path, secure);

          _this.options.onStatusChange.call(_this, cookieName, status, chosenBefore);
        } else {
          _this.clearStatuses();
        }
      };

      if (arguments.length === 0) {
        Object.keys(cc.category).forEach(function (category) {
          return updateCategoryStatus(category, cc.category[category]);
        });
      } else if (arguments.length === 1) {
        Object.keys(cc.category).forEach(function (category) {
          return updateCategoryStatus(category, _arguments[0]);
        });
      } else if (arguments.length > 1) {
        arguments.forEach(function (categoryStatus, index) {
          updateCategoryStatus(Object.keys(cc.category)[index], categoryStatus);
        });
      }
    };
    /**
     * Get all cookie categoies statuses
     * @return { array<string> } - cookie categories status in order of cc.category
     */


    CookiePopup.prototype.getStatuses = function () {
      var _this2 = this;

      return Object.keys(cc.category).map(function (categoryName) {
        return util.getCookie(_this2.options.cookie.name + '_' + categoryName);
      });
    };
    /**
     * Clear all cookie categoies statuses
     */


    CookiePopup.prototype.clearStatuses = function () {
      var _this$options$cookie2 = this.options.cookie,
          name = _this$options$cookie2.name,
          domain = _this$options$cookie2.domain,
          path = _this$options$cookie2.path;
      Object.keys(cc.category).forEach(function (categoryName) {
        util.setCookie(name + '_' + categoryName, '', -1, domain, path);
      });
    }; // This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
    // There is a good reason why it's called in a timeout. Read 'fadeIn';


    function afterFadeIn(el) {
      this.openingTimeout = null;
      el.classList.remove('cc-invisible');
    } // This is called on 'transitionend' (only on the transition of the fadeOut). That's because after we've faded out, we need to
    // set the display to 'none' (so there aren't annoying invisible popups all over the page). If for whenever reason this function
    // is not called (lack of support), the open/close mechanism will still work.


    function afterFadeOut(el) {
      el.style.display = 'none'; // after close and before open, the display should be none

      el.removeEventListener(cc.transitionEnd, this.afterTransition);
      this.afterTransition = null;
    } // this function calls the `onComplete` hook and returns true (if needed) and returns false otherwise


    function checkCallbackHooks() {
      var complete = this.options.onInitialize.bind(this);

      if (!window.navigator.cookieEnabled) {
        complete(cc.status.deny);
        return true;
      }

      if (window.CookiesOK || window.navigator.CookiesOK) {
        complete(cc.status.allow);
        return true;
      }

      var categories = Object.keys(cc.category);
      var statusesValues = this.getStatuses();
      var matches = statusesValues.map(function (status, index) {
        return (0, _defineProperty3["default"])({}, categories[index], isValidStatus(status));
      });
      var hasMatches = matches.filter(function (match) {
        return match[Object.keys(match)[0]];
      }).length > 0;
      statusesValues.forEach(function (status, index) {
        return cc.category[categories[index]] = status ? status : cc.category[categories[index]];
      });
      complete(hasMatches ? statusesValues.map(function (status, index) {
        return (0, _defineProperty3["default"])({}, categories[index], status);
      }) : undefined);
      return hasMatches;
    } // top, bottom, left, right


    function getPositionClasses() {
      return this.options.position.split('-').map(function (pos) {
        return 'cc-' + pos;
      });
    }

    function getPopupClasses() {
      var opts = this.options;
      var positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

      if (util.isMobile() && opts.mobileForceFloat) {
        positionStyle = 'floating';
      }

      var classes = ['cc-' + positionStyle, // floating or banner
      'cc-type-' + opts.type, // add the compliance type
      'cc-theme-' + opts.theme];

      if (opts["static"]) {
        classes.push('cc-static');
      }

      classes.push.apply(classes, getPositionClasses.call(this)); // we only add extra styles if `palette` has been set to a valid value

      attachCustomPalette.call(this, this.options.palette); // if we override the palette, add the class that enables this

      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      return classes;
    }

    function getPopupInnerMarkup() {
      var interpolated = {};
      var opts = this.options; // removes link if showLink is false

      if (!opts.showLink) {
        opts.elements.link = '';
        opts.elements.messagelink = opts.elements.message;
      }

      Object.keys(opts.elements).forEach(function (prop) {
        interpolated[prop] = util.interpolateString(opts.elements[prop], function (name) {
          var str = opts.content[name];
          return name && typeof str == 'string' && str.length ? str : '';
        });
      }); // checks if the type is valid and defaults to info if it's not

      var complianceType = opts.compliance[opts.type];

      if (!complianceType) {
        complianceType = opts.compliance.info;
      } // build the compliance types from the already interpolated `elements`


      interpolated.compliance = util.interpolateString(complianceType, function (name) {
        return interpolated[name];
      }); // checks if the layout is valid and defaults to basic if it's not

      var layout = opts.layouts[opts.layout];

      if (!layout) {
        layout = opts.layouts.basic;
      }

      return util.interpolateString(layout, function (match) {
        return interpolated[match];
      });
    }

    function appendMarkup(markup) {
      var _this3 = this;

      var opts = this.options;
      var div = document.createElement('div');
      var cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
      div.innerHTML = markup;
      var el = div.children[0];
      el.style.display = 'none';

      if (el.classList.contains('cc-window') && cc.hasTransition) {
        el.classList.add('cc-invisible');
      } // save ref to the function handle so we can unbind it later


      this.onButtonClick = handleButtonClick.bind(this);
      el.addEventListener('click', this.onButtonClick);
      el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
          cc.category[checkbox.name] = checkbox.checked ? 'allow' : 'deny';

          _this3.setStatuses();
        });
        checkbox.addEventListener('click', function (event) {
          return event.stopPropagation();
        });
      });
      el.querySelectorAll(".cc-info").forEach(function (showInfo) {
        showInfo.addEventListener('mousedown', function (event) {
          if (this === document.activeElement) {
            this.blur();
            event.preventDefault();
          }
        });
      });
      /**
       * Event listeners for the accordion in the tooltip
       */

      /*el.querySelectorAll(".cc-cookie-accordion-title").forEach( accordionLink => {
        accordionLink.addEventListener('click', event => {
          event.preventDefault()
          accordionLink.nextElementSibling.classList.toggle( "open" )
        })
        accordionLink.addEventListener( 'mousedown', event => event.preventDefault() )
      })
      el.querySelectorAll(".cc-tooltip").forEach( toolTip => {
        toolTip.addEventListener('click', event => {
          event.preventDefault()
          event.stopPropagation()
        })
        toolTip.addEventListener( 'mousedown', event => {
          event.preventDefault()
          event.stopPropagation()
        })
      })
      */

      if (opts.autoAttach) {
        if (!cont.firstChild) {
          cont.appendChild(el);
        } else {
          cont.insertBefore(el, cont.firstChild);
        }
      }

      return el;
    }

    function handleButtonClick(event) {
      // returns the parent element with the specified class, or the original element - null if not found
      var btn = util.traverseDOMPath(event.target, 'cc-btn') || event.target;

      if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
        this.setStatuses();
        this.close(true);
      }

      if (btn.classList.contains('cc-btn')) {
        var matches = btn.className.match(new RegExp('\\bcc-(' + Object.keys(cc.status).map(function (str) {
          return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        }).join('|') + ')\\b'));
        var match = matches && matches[1] || false;

        if (match) {
          this.setStatuses(match);
          this.close(true);
        }
      }

      if (btn.classList.contains('cc-close')) {
        this.setStatuses(cc.status.dismiss);
        this.close(true);
      }

      if (btn.classList.contains('cc-revoke')) {
        this.revokeChoice();
      }
    } // I might change this function to use inline styles. I originally chose a stylesheet because I could select many elements with a
    // single rule (something that happened a lot), the apps has changed slightly now though, so inline styles might be more applicable.


    function attachCustomPalette(palette) {
      var hash = util.hash(JSON.stringify(palette));
      var selector = 'cc-color-override-' + hash;
      var isValid = util.isPlainObject(palette);
      this.customStyleSelector = isValid ? selector : null;

      if (isValid) {
        addCustomStyle(hash, palette, '.' + selector);
      }

      return isValid;
    }

    function addCustomStyle(hash, palette, prefix) {
      // only add this if a style like it doesn't exist
      if (cc.customStyles[hash]) {
        // custom style already exists, so increment the reference count
        ++cc.customStyles[hash].references;
        return;
      }

      var colorStyles = {};
      var popup = palette.popup;
      var button = palette.button;
      var highlight = palette.highlight; // needs background colour, text and link will be set to black/white if not specified

      if (popup) {
        // assumes popup.background is set
        popup.text = popup.text ? popup.text : util.getContrast(popup.background);
        popup.link = popup.link ? popup.link : popup.text;
        colorStyles[prefix + ' .cc-tooltip'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
        colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
        colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
        colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

        if (button) {
          // assumes button.background is set
          button.text = button.text ? button.text : util.getContrast(button.background);
          button.border = button.border ? button.border : 'transparent';
          colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

          if (button.padding) {
            colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
          }

          if (button.background != 'transparent') {
            colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || getHoverColour(button.background))];
          }

          if (highlight) {
            //assumes highlight.background is set
            highlight.text = highlight.text ? highlight.text : util.getContrast(highlight.background);
            highlight.border = highlight.border ? highlight.border : 'transparent';
            colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
          } else {
            // sets highlight text color to popup text. background and border are transparent by default.
            colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
          }
        }
      } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


      var style = document.createElement('style');
      document.head.appendChild(style); // custom style doesn't exist, so we create it

      cc.customStyles[hash] = {
        references: 1,
        element: style.sheet
      };
      var ruleIndex = -1;

      for (var prop in colorStyles) {
        if (colorStyles.hasOwnProperty(prop)) {
          style.sheet.insertRule(prop + '{' + colorStyles[prop].join(';') + '}', ++ruleIndex);
        }
      }
    }

    function getHoverColour(hex) {
      hex = util.normaliseHex(hex); // for black buttons

      if (hex == '000000') {
        return '#222';
      }

      return util.getLuminance(hex);
    }

    function removeCustomStyle(palette) {
      if (util.isPlainObject(palette)) {
        var hash = util.hash(JSON.stringify(palette));
        var customStyle = cc.customStyles[hash];

        if (customStyle && ! --customStyle.references) {
          var styleNode = customStyle.element.ownerNode;

          if (styleNode && styleNode.parentNode) {
            styleNode.parentNode.removeChild(styleNode);
          }

          cc.customStyles[hash] = null;
        }
      }
    }

    function applyAutoDismiss() {
      var setStatuses = this.setStatuses.bind(this);
      var close = this.close.bind(this);
      var delay = this.options.dismissOnTimeout;

      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = window.setTimeout(function () {
          setStatuses(cc.status.dismiss);
          close(true);
        }, Math.floor(delay));
      }

      var scrollRange = this.options.dismissOnScroll;

      if (typeof scrollRange == 'number' && scrollRange >= 0) {
        var onWindowScroll = function onWindowScroll() {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            setStatuses(cc.status.dismiss);
            close(true);
            window.removeEventListener('scroll', onWindowScroll, {
              passive: true
            });
            this.onWindowScroll = null;
          }
        };

        if (this.options.enabled) {
          this.onWindowScroll = onWindowScroll;
          window.addEventListener('scroll', onWindowScroll, {
            passive: true
          });
        }
      }

      var windowClick = this.options.dismissOnWindowClick;
      var ignoredClicks = this.options.ignoreClicksFrom;

      if (windowClick) {
        var onWindowClick = function (evt) {
          var path = evt.composedPath ? evt.composedPath() : function (arr, element) {
            while (element) {
              arr.push(element);
              element = element.parentNode;
            }

            return arr;
          }([], evt.target);

          if (!path) {
            console.warn("'.path' & '.composedPath' failed to generate an event path.");
            return;
          }

          if (!path.some(function (element) {
            return ignoredClicks.some(function (ignoredClick) {
              return element.classList && element.classList.contains(ignoredClick);
            });
          })) {
            setStatuses(cc.status.dismiss);
            close(true);
            window.removeEventListener('click', onWindowClick);
            window.removeEventListener('touchend', onWindowClick);
            this.onWindowClick = null;
          }
        }.bind(this);

        if (this.options.enabled) {
          this.onWindowClick = onWindowClick;
          window.addEventListener('click', onWindowClick);
          window.addEventListener('touchend', onWindowClick);
        }
      }
    }

    function applyRevokeButton() {
      // revokable is true if advanced compliance is selected
      if (this.options.type != 'info') this.options.revokable = true; // animateRevokable false for mobile devices

      if (util.isMobile()) this.options.animateRevokable = false;

      if (this.options.revokable) {
        var classes = getPositionClasses.call(this);

        if (this.options.animateRevokable) {
          classes.push('cc-animate');
        }

        if (this.customStyleSelector) {
          classes.push(this.customStyleSelector);
        }

        if (this.options.theme) {
          classes.push('cc-theme-' + this.options.theme);
        }

        var revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
        this.revokeBtn = appendMarkup.call(this, revokeBtn);
        var btn = this.revokeBtn;

        if (this.options.animateRevokable) {
          var onMouseMove = util.throttle(function (evt) {
            var active = false;
            var minY = 20;
            var maxY = window.innerHeight - 20;

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

    return CookiePopup;
  }();

  cc.Location = function () {
    // An object containing all the location services we have already set up.
    // When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
    // When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
    // When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
    // cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
    // with the data (or Error), and `cookieconsent.locate` will take care of the rest
    var defaultOptions = {
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
        return {name: 'ipinfodb'};
      },
       */
      ],
      serviceDefinitions: {
        ipinfo: function ipinfo() {
          return {
            // This service responds with JSON, so we simply need to parse it and return the country code
            url: '//ipinfo.io',
            headers: ['Accept: application/json'],
            callback: function callback(done, response) {
              try {
                var json = JSON.parse(response);
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
        ipinfodb: function ipinfodb() {
          return {
            // This service responds with JSON, so we simply need to parse it and return the country code
            url: '//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
            isScript: true,
            // this is JSONP, therefore we must set it to run as a script
            callback: function callback(done, response) {
              try {
                var json = JSON.parse(response);
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
        maxmind: function maxmind() {
          return {
            // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
            // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
            url: '//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
            isScript: true,
            // this service responds with a JavaScript file, so it must be run as a script
            callback: function callback(done) {
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
    };

    function Location(options) {
      // Set up options
      util.deepExtend(this.options = {}, defaultOptions);

      if (util.isPlainObject(options)) {
        util.deepExtend(this.options, options);
      }

      this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
    }

    Location.prototype.getNextService = function () {
      var service;

      do {
        service = this.getServiceByIdx(++this.currentServiceIndex);
      } while (this.currentServiceIndex < this.options.services.length && !service);

      return service;
    };

    Location.prototype.getServiceByIdx = function (idx) {
      // This can either be the name of a default locationService, or a function.
      var serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

      if (typeof serviceOption === 'function') {
        var dynamicOpts = serviceOption();
        return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
      } // If it's a string, use one of the location services.


      if (typeof serviceOption === 'string') {
        return this.options.serviceDefinitions[serviceOption]();
      } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
      // Allows user to pass in API keys etc.


      if (util.isPlainObject(serviceOption)) {
        return this.options.serviceDefinitions[serviceOption.name](serviceOption);
      }

      return null;
    }; // This runs the service located at index `currentServiceIndex`.
    // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully


    Location.prototype.locate = function (complete, error) {
      var service = this.getNextService();

      if (!service) {
        error(new Error('No services to run'));
        return;
      }

      this.callbackComplete = complete;
      this.callbackError = error;
      this.runService(service, this.runNextServiceOnError.bind(this));
    }; // Potentially adds a callback to a url for jsonp.


    Location.prototype.setupUrl = function (service) {
      var serviceOpts = this.getCurrentServiceOpts();
      return service.url.replace(/\{(.*?)\}/g, function (_, param) {
        if (param === 'callback') {
          var tempName = 'callback' + Date.now();

          window[tempName] = function (res) {
            service.__JSONP_DATA = JSON.stringify(res);
          };

          return tempName;
        }

        if (param in serviceOpts.interpolateUrl) {
          return serviceOpts.interpolateUrl[param];
        }
      });
    }; // requires a `service` object that defines at least a `url` and `callback`


    Location.prototype.runService = function (service, complete) {
      var _this4 = this;

      // basic check to ensure it resembles a `service`
      if (!service || !service.url || !service.callback) {
        return;
      } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


      var requestFunction = service.isScript ? getScript : makeAsyncRequest; // both functions have similar signatures so we can pass the same arguments to both

      requestFunction(this.setupUrl(service), function (xhr) {
        // if `!xhr`, then `getScript` function was used, so there is no response text
        var responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
        // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
        // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

        if (service.__JSONP_DATA) {
          responseText = service.__JSONP_DATA;
          delete service.__JSONP_DATA;
        } // call the service callback with the response text (so it can parse the response)


        _this4.runServiceCallback.call(_this4, complete, service, responseText);
      }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
    }; // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
    // We need to run its callback which determines if its successful or not
    // `complete` is called on success or failure


    Location.prototype.runServiceCallback = function (complete, service, responseText) {
      var _this5 = this;

      // this is the function that is called if the service uses the async callback in its handler method
      var serviceResultHandler = function serviceResultHandler(asyncResult) {
        // if `result` is a valid value, then this function shouldn't really run
        // even if it is called by `service.callback`
        if (!result) {
          _this5.onServiceResult.call(_this5, complete, asyncResult);
        }
      }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
      // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


      var result = service.callback(serviceResultHandler, responseText);

      if (result) {
        this.onServiceResult.call(this, complete, result);
      }
    }; // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
    // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data


    Location.prototype.onServiceResult = function (complete, result) {
      // convert result to nodejs style async callback
      if (result instanceof Error || result && result.error) {
        complete.call(this, result, null);
      } else {
        complete.call(this, null, result);
      }
    }; // if `err` is set, the next service handler is called
    // if `err` is null, the `onComplete` handler is called with `data`


    Location.prototype.runNextServiceOnError = function (err, data) {
      if (err) {
        this.logError(err);
        var nextService = this.getNextService();

        if (nextService) {
          this.runService(nextService, this.runNextServiceOnError.bind(this));
        } else {
          this.completeService.call(this, this.callbackError, new Error('All services failed'));
        }
      } else {
        this.completeService.call(this, this.callbackComplete, data);
      }
    };

    Location.prototype.getCurrentServiceOpts = function () {
      var val = this.options.services[this.currentServiceIndex];

      if (typeof val == 'string') {
        return {
          name: val
        };
      } else if (typeof val == 'function') {
        return val();
      } else if (util.isPlainObject(val)) {
        return val;
      } else {
        return {};
      }
    }; // calls the `onComplete` callback after resetting the `currentServiceIndex`


    Location.prototype.completeService = function (fn, data) {
      this.currentServiceIndex = -1;
      fn && fn(data);
    };

    Location.prototype.logError = function (err) {
      var idx = this.currentServiceIndex;
      var service = this.getServiceByIdx(idx);
      console.warn('The service[' + idx + '] (' + service.url + ') responded with the following error', err);
    };

    function getScript(url, callback, timeout) {
      var timeoutIdx;
      var s = document.createElement('script');
      s.type = 'text/' + (url.type || 'javascript');
      s.src = url.src || url;
      s.async = false;

      s.onreadystatechange = s.onload = function () {
        // this code handles two scenarios, whether called by onload or onreadystatechange
        var state = s.readyState;
        clearTimeout(timeoutIdx);

        if (!callback.done && (!state || /loaded|complete/.test(state))) {
          callback.done = true;
          callback();
          s.onreadystatechange = s.onload = null;
        }
      };

      document.body.appendChild(s); // You can't catch JSONP Errors, because it's handled by the script tag
      // one way is to use a timeout

      timeoutIdx = setTimeout(function () {
        callback.done = true;
        callback();
        s.onreadystatechange = s.onload = null;
      }, timeout);
    }

    function makeAsyncRequest(url, onComplete, timeout, postData, requestHeaders) {
      var xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
      xhr.open(postData ? 'POST' : 'GET', url, 1);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      if (Array.isArray(requestHeaders)) {
        for (var i = 0, l = requestHeaders.length; i < l; ++i) {
          var split = requestHeaders[i].split(':', 2);
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

    function toError(obj) {
      return new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);
    }

    return Location;
  }();

  cc.Law = function () {
    var defaultOptions = {
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
    };

    function Law(options) {
      this.initialize.apply(this, arguments);
    }

    Law.prototype.initialize = function (options) {
      // set options back to default options
      util.deepExtend(this.options = {}, defaultOptions); // merge in user options

      if (util.isPlainObject(options)) {
        util.deepExtend(this.options, options);
      }
    };

    Law.prototype.get = function (countryCode) {
      return {
        hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
        revokable: this.options.revokable.indexOf(countryCode) >= 0,
        explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
      };
    };

    Law.prototype.applyLaw = function (options, countryCode) {
      var country = this.get(countryCode);

      if (!country.hasLaw) {
        // The country has no cookie law
        options.enabled = false;

        if (typeof options.onNoCookieLaw === 'function') {
          options.onNoCookieLaw(countryCode, country);
        }
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
    };

    return Law;
  }(); // This function initializes the app by combining the use of the Popup, Locator and Law modules
  // You can string together these three modules yourself however you want, by writing a new function.


  cc.initialize = function (options, complete, error) {
    var law = new cc.Law(options.law);
    if (!complete) complete = function complete() {};
    if (!error) error = function error() {};
    var answers = Object.keys(cc.category).map(function (category) {
      var answer = util.getCookie('cookieconsent_status_' + category);
      return isValidStatus(answer) ? (0, _defineProperty3["default"])({}, category, answer) : undefined;
    }).filter(function (obj) {
      return obj ? obj[Object.keys(obj)[0]] : false;
    }); // if they have already answered

    if (answers.length > 0) {
      complete(answers);
      return;
    }

    cc.getCountryCode(options, function (result) {
      // don't need the law or location options anymore
      delete options.law;
      delete options.location;

      if (result.code) {
        options = law.applyLaw(options, result.code);
      }

      complete(new cc.Popup(options));
    }, function (err) {
      // don't need the law or location options anymore
      delete options.law;
      delete options.location;
      error(err, new cc.Popup(options));
    });
  }; // This function tries to find your current location. It either grabs it from a hardcoded option in
  // `options.law.countryCode`, or attempts to make a location service request. This function accepts
  // options (which can configure the `law` and `location` modules) and fires a callback with which
  // passes an object `{code: countryCode}` as the first argument (which can have undefined properties)


  cc.getCountryCode = function (options, complete, error) {
    if (options.law && options.law.countryCode) {
      complete({
        code: options.law.countryCode
      });
      return;
    }

    if (options.location) {
      var locator = new cc.Location(options.location);
      locator.locate(function (serviceResult) {
        complete(serviceResult || {});
      }, error);
      return;
    }

    complete({});
  }; // export utils (no point in hiding them, so we may as well expose them)


  cc.utils = util; // prevent this code from being run twice

  cc.hasInitialized = true;
  window.cookieconsent = cc;
}(window.cookieconsent || {});

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/styles/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzA1M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImRlZXBFeHRlbmQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJpc1BsYWluT2JqZWN0IiwiZ2V0Q29va2llIiwibmFtZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9wIiwic2hpZnQiLCJzZXRDb29raWUiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsImV4ZGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJ0aHJvdHRsZSIsImxpbWl0Iiwid2FpdCIsImFwcGx5Iiwic2V0VGltZW91dCIsImhhc2giLCJpIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGlzZUhleCIsImhleCIsInN1YnN0ciIsImdldENvbnRyYXN0IiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJnZXRMdW1pbmFuY2UiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJ0cmF2ZXJzZURPTVBhdGgiLCJlbGVtIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3RhdHVzIiwiZGVueSIsImFsbG93IiwiZGlzbWlzcyIsImNhdGVnb3J5IiwidW5jYXRlZ29yaXplZCIsImVzc2VudGlhbCIsInBlcnNvbmFsaXphdGlvbiIsImFuYWx5dGljcyIsIm1hcmtldGluZyIsImlzVmFsaWRTdGF0dXMiLCJrZXlzIiwiaW5kZXhPZiIsInRyYW5zaXRpb25FbmQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4Iiwic3R5bGUiLCJoYXNUcmFuc2l0aW9uIiwiY3VzdG9tU3R5bGVzIiwiUG9wdXAiLCJkZWZhdWx0T3B0aW9ucyIsImVuYWJsZWQiLCJjb250YWluZXIiLCJvblBvcHVwT3BlbiIsIm9uUG9wdXBDbG9zZSIsIm9uSW5pdGlhbGl6ZSIsInN0YXR1c2VzIiwib25TdGF0dXNDaGFuZ2UiLCJjb29raWVOYW1lIiwiY2hvc2VuQmVmb3JlIiwib25SZXZva2VDaG9pY2UiLCJvbk5vQ29va2llTGF3IiwiY291bnRyeUNvZGUiLCJjb3VudHJ5IiwiY29udGVudCIsImhlYWRlciIsIm1lc3NhZ2UiLCJsaW5rIiwiaHJlZiIsImNsb3NlIiwicG9saWN5IiwiZWxlbWVudHMiLCJtZXNzYWdlbGluayIsImNhdGVnb3JpZXMiLCJzYXZlIiwid2luZG93IiwibW9kYWwiLCJyZXZva2VCdG4iLCJjb21wbGlhbmNlIiwiaW5mbyIsInR5cGUiLCJsYXlvdXRzIiwiYmFzaWMiLCJsYXlvdXQiLCJwb3NpdGlvbiIsInRoZW1lIiwicGFsZXR0ZSIsInJldm9rYWJsZSIsImFuaW1hdGVSZXZva2FibGUiLCJzaG93TGluayIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImlnbm9yZUNsaWNrc0Zyb20iLCJhdXRvT3BlbiIsImF1dG9BdHRhY2giLCJtb2JpbGVGb3JjZUZsb2F0Iiwid2hpdGVsaXN0UGFnZSIsImJsYWNrbGlzdFBhZ2UiLCJvdmVycmlkZUhUTUwiLCJDb29raWVQb3B1cCIsImluaXRpYWxpemUiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwiZGVzdHJveSIsImNoZWNrQ2FsbGJhY2tIb29rcyIsImNhbGwiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc21pc3NUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25XaW5kb3dTY3JvbGwiLCJvbldpbmRvd0NsaWNrIiwib25Nb3VzZU1vdmUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUN1c3RvbVN0eWxlIiwib3BlbiIsImlzT3BlbiIsImZhZGVJbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsInNob3dSZXZva2UiLCJmYWRlT3V0IiwiYWZ0ZXJUcmFuc2l0aW9uIiwiYWZ0ZXJGYWRlT3V0IiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmFkZUluVGltZW91dCIsIm9wZW5pbmdUaW1lb3V0IiwiYWZ0ZXJGYWRlSW4iLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VDaG9pY2UiLCJwcmV2ZW50T3BlbiIsImNsZWFyU3RhdHVzZXMiLCJoYXNBbnN3ZXJlZCIsImdldFN0YXR1c2VzIiwic29tZSIsImhhc0NvbnNlbnRlZCIsIm1hcCIsInNldFN0YXR1c2VzIiwidXBkYXRlQ2F0ZWdvcnlTdGF0dXMiLCJjYXRlZ29yeU5hbWUiLCJmb3JFYWNoIiwiY2F0ZWdvcnlTdGF0dXMiLCJpbmRleCIsInJlbW92ZSIsImNvbXBsZXRlIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJmaWx0ZXIiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiY2xhc3NlcyIsInB1c2giLCJhdHRhY2hDdXN0b21QYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImludGVycG9sYXRlZCIsImNvbXBsaWFuY2VUeXBlIiwibWFya3VwIiwiZGl2IiwiY29udCIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tib3giLCJjaGVja2VkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsIlJlZ0V4cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZSIsInJlZmVyZW5jZXMiLCJjb2xvclN0eWxlcyIsInBvcHVwIiwiYnV0dG9uIiwiaGlnaGxpZ2h0IiwidGV4dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG91ciIsImhlYWQiLCJzaGVldCIsInJ1bGVJbmRleCIsImluc2VydFJ1bGUiLCJjdXN0b21TdHlsZSIsInN0eWxlTm9kZSIsIm93bmVyTm9kZSIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsUmFuZ2UiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJ3aW5kb3dDbGljayIsImlnbm9yZWRDbGlja3MiLCJldnQiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJjb25zb2xlIiwid2FybiIsImlnbm9yZWRDbGljayIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwiTG9jYXRpb24iLCJ0aW1lb3V0Iiwic2VydmljZXMiLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpcGluZm8iLCJ1cmwiLCJoZWFkZXJzIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiZXJyb3IiLCJ0b0Vycm9yIiwiY29kZSIsImVyciIsImlwaW5mb2RiIiwiaXNTY3JpcHQiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJFcnJvciIsImlzb19jb2RlIiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsImlkeCIsInNlcnZpY2VPcHRpb24iLCJkeW5hbWljT3B0cyIsImFzc2lnbiIsImxvY2F0ZSIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJfIiwicGFyYW0iLCJ0ZW1wTmFtZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsImludGVycG9sYXRlVXJsIiwicmVxdWVzdEZ1bmN0aW9uIiwiZ2V0U2NyaXB0IiwibWFrZUFzeW5jUmVxdWVzdCIsInhociIsInJlc3BvbnNlVGV4dCIsInJ1blNlcnZpY2VDYWxsYmFjayIsImRhdGEiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0IiwicmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsInZhbCIsImZuIiwidGltZW91dElkeCIsInMiLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImwiLCJzZW5kIiwiTGF3IiwicmVnaW9uYWxMYXciLCJoYXNMYXciLCJleHBsaWNpdEFjdGlvbiIsImdldCIsImFwcGx5TGF3IiwibGF3IiwiYW5zd2VycyIsImFuc3dlciIsImdldENvdW50cnlDb2RlIiwibG9jYXRvciIsInNlcnZpY2VSZXN1bHQiLCJ1dGlscyIsImNvb2tpZWNvbnNlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlE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OztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7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dk4sSUFBRSxDQUFDb1ksS0FBSCxHQUFXbFksSUFBWCxDQW54RGEsQ0FxeERiOztBQUNBRixJQUFFLENBQUNDLGNBQUgsR0FBb0IsSUFBcEI7QUFFQThILFFBQU0sQ0FBQ3NRLGFBQVAsR0FBdUJyWSxFQUF2QjtBQUNELENBenhEQSxDQXl4REUrSCxNQUFNLENBQUNzUSxhQUFQLElBQXdCLEVBenhEMUIsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNIQSxjQUFjLG1CQUFPLENBQUMsa05BQXNHOztBQUU1SCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImNvb2tpZWNvbnNlbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29va2llY29uc2VudC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7IH1cXG5cXG4uY2Mtd2luZG93LmNjLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLyogb25seSBhbmltYXRlIGlmaGFzIGNsYXNzICdjYy1hbmltYXRlJyAqL1xcbi5jYy1hbmltYXRlLmNjLXJldm9rZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1ncm93ZXIge1xcbiAgLyogSW5pdGlhbGx5IHdlIGRvbid0IHdhbnQgYW55IGhlaWdodCwgYW5kIHdlIHdhbnQgdGhlIGNvbnRlbnRzIHRvIGJlIGhpZGRlbiAqL1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBTZXQgb3VyIHRyYW5zaXRpb25zIHVwLiAqL1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxczsgfVxcblxcbi8qIHRoZSBwb3B1cCB3aW5kb3cgKi9cXG4uY2Mtd2luZG93LFxcbi5jYy1yZXZva2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBleGNsdWRlIHBhZGRpbmcgd2hlbiBkZWFsaW5nIHdpdGggd2lkdGggKi9cXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIENhbGlicmksIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLyogYnkgc2V0dGluZyB0aGUgYmFzZSBmb250IGhlcmUsIHdlIGNhbiBzaXplIHRoZSByZXN0IG9mIHRoZSBwb3B1cCB1c2luZyBDU1MgYGVtYCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLyogdGhlIGZvbGxvd2luZyBhcmUgcmFuZG9tIHVuanVzdGlmaWVkIHN0eWxlcyAtIGp1c3QgYmVjYXVzZSAtIHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkICovXFxuICB6LWluZGV4OiA5OTk5OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbi8qIDIgYmFzaWMgdHlwZXMgb2Ygd2luZG93IC0gZmxvYXRpbmcgLyBiYW5uZXIgKi9cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG4gIC8qIDFlbSA9PSAxNnB4IHRoZXJlZm9yZSAyNGVtID09IDM4NHB4ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgcGFkZGluZzogMWVtIDEuOGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyogY2xpY2thYmxlIHRoaW5ncyAqL1xcbi5jYy1idG4sXFxuLmNjLWxpbmssXFxuLmNjLWNsb3NlLFxcbi5jYy1yZXZva2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNjLWxpbmsge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1saW5rOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2MtbGluazphY3RpdmUsXFxuLmNjLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5pdGlhbDsgfVxcblxcbi5jYy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmhvdmVyLFxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVlbTtcXG4gIHJpZ2h0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBvcGFjaXR5OiAwLjk7XFxuICAvKiBzZWVpbmcgYXMgdGhpcyBjb250YWlucyB0ZXh0IGFuZCBub3QgYW4gaW1hZ2UsIHRoZSBlbGVtZW50IHRhbGxlciB0aGFuIGl0IGlzIHdpZGUgKGJlY2F1c2UgaXQgaXMgdGV4dCkgKi9cXG4gIC8qICAtIHdlIHdhbnQgaXQgdG8gYmUgYSBzcXVhcmUsIGJlY2F1c2UgaXQncyBhY3RpbmcgYXMgYW4gaWNvbiAqL1xcbiAgLyogIC0gc2V0dGluZyB0aGUgbGluZSBoZWlnaHQgbm9ybWFsaXNlcyB0aGUgaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogMC43NTsgfVxcblxcbi5jYy1jbG9zZTpob3ZlcixcXG4uY2MtY2xvc2U6Zm9jdXMge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qIFRoaXMgZmlsZSBzaG91bGQgY29udGFpbiBzdHlsZXMgdGhhdCBtb2RpZmllcyB0aGUgcG9wdXAgbGF5b3V0LiAqL1xcbi8qIEJ5IGxheW91dCwgd2UgbWVhbiB0aGUgcGh5c2ljYWwgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIHRoZSBwb3B1cCB3aW5kb3csIGFuZCB0aGUgbWFyZ2luIC8gcGFkZGluZyBhcm91bmQgdGhvc2UgZWxlbWVudHMuICovXFxuLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtbGVmdCB7XFxuICBsZWZ0OiAzZW07XFxuICByaWdodDogdW5zZXQ7IH1cXG5cXG4uY2MtcmV2b2tlLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAzZW07XFxuICBsZWZ0OiB1bnNldDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZMT0FUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogdGhlc2UgY2xhc3NlcyBwb3NpdGlvbiB0aGUgZmxvYXRpbmcgZWxlbWVudCAqL1xcbi5jYy10b3Age1xcbiAgdG9wOiAxZW07IH1cXG5cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07IH1cXG5cXG4uY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDFlbTsgfVxcblxcbi5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAxZW07IH1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSB7XFxuICBmbGV4OiAxIDAgYXV0bzsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRvcCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2MtYmFubmVyLmNjLWJvdHRvbSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi8qIENPTVBMSUFOQ0UgQk9YICovXFxuLmNjLWNvbXBsaWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2UgPiAuY2MtYnRuIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG5cXG4vKiBDYXRlZ29yaWVzIExheW91dCAqL1xcbi5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNik7IH1cXG5cXG4uY2MtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMjJweCk7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAycHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEwcHg7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgaGVpZ2h0OiAwOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uLm9wZW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGhlaWdodDogYXV0bzsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfSB9XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuY2Mtd2luZG93LmNjLXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyLCAuY2Mtd2luZG93LmNjLWZsb2F0aW5nLCAuY2Mtd2luZG93LmNjLXJpZ2h0LCAuY2Mtd2luZG93LmNjLWxlZnQge1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICAgIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy13aW5kb3cgLmNjLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSAuY2MtYnRuOm5vdCguY2MtaW5mbykge1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7XFxuICAgICAgbWluLXdpZHRoOiAxNDBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODU0cHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgIG1hcmdpbjogOHB4IDA7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gIC5mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7IH1cXG4gIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTsgfSB9XFxuXFxuLyogQ2xhc3NpYyAqL1xcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIHBhZGRpbmc6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1jb21wbGlhbmNlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsZXg6IG5vbmU7IH1cXG5cXG4uY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG46bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAxNDBweDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAtMXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICBsZWZ0OiA2cHg7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMUY1RjVcXFwiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2MtYnRuLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcXDI3MTNcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IC00cHg7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG46bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAwOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItcmlnaHQ6IHRoaW4gc29saWQgbGlnaHRncmV5OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCAuY2MtY29va2llLWFjY29yZGlvbi10aXRsZSB7XFxuICAgICAgY29sb3I6IGJsYWNrOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLyogRWRnZWxlc3MgKi9cXG4uY2MtdGhlbWUtZWRnZWxlc3MuY2Mtd2luZG93IHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjhlbSAxLjhlbTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4uY2MtaW5mbyB7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDRweDsgfVxcblxcbi5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbiEoZnVuY3Rpb24oY2MpIHtcbiAgLy8gc3RvcCBmcm9tIHJ1bm5pbmcgYWdhaW4sIGlmIGFjY2lkZW50bHkgaW5jbHVkZWQgbW9yZSB0aGFuIG9uY2UuXG4gIGlmIChjYy5oYXNJbml0aWFsaXplZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHV0aWwgPSB7XG4gICAgXG4gICAgaW50ZXJwb2xhdGVTdHJpbmc6IGZ1bmN0aW9uKHN0ciwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soYXJndW1lbnRzWzFdKSB8fCAnJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgZGVlcEV4dGVuZDogZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wIGluIHRhcmdldCAmJlxuICAgICAgICAgICAgdGhpcy5pc1BsYWluT2JqZWN0KHRhcmdldFtwcm9wXSkgJiZcbiAgICAgICAgICAgIHRoaXMuaXNQbGFpbk9iamVjdChzb3VyY2VbcHJvcF0pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG4gICAgXG4gICAgZ2V0Q29va2llOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9ICc7ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJzsgJyArIG5hbWUgKyAnPScpXG4gICAgICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMlxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHBhcnRzXG4gICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgIC5zcGxpdCgnOycpXG4gICAgICAgICAgICAuc2hpZnQoKVxuICAgIH0sXG5cbiAgICBzZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSkge1xuICAgICAgY29uc3QgZXhkYXRlID0gbmV3IERhdGUoKVxuICAgICAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJztleHBpcmVzPScgKyBleGRhdGUudG9VVENTdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCBkb21haW4gPyAnO2RvbWFpbj0nICsgZG9tYWluIDogJycgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIHNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnIClcbiAgICB9LFxuXG4gICAgLy8gb25seSB1c2VkIGZvciB0aHJvdHRsaW5nIHRoZSAnbW91c2Vtb3ZlJyBldmVudCAodXNlZCBmb3IgYW5pbWF0aW5nIHRoZSByZXZva2UgYnV0dG9uIHdoZW4gYGFuaW1hdGVSZXZva2FibGVgIGlzIHRydWUpXG4gICAgdGhyb3R0bGU6IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICAgICAgbGV0IHdhaXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF3YWl0KSB7XG4gICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB3YWl0ID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2FpdCA9IGZhbHNlO1xuICAgICAgICAgIH0sIGxpbWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLy8gb25seSB1c2VkIGZvciBoYXNoaW5nIGpzb24gb2JqZWN0cyAodXNlZCBmb3IgaGFzaCBtYXBwaW5nIHBhbGV0dGUgb2JqZWN0cywgdXNlZCB3aGVuIGN1c3RvbSBjb2xvdXJzIGFyZSBwYXNzZWQgdGhyb3VnaCBKYXZhU2NyaXB0KVxuICAgIGhhc2g6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgbGV0IGhhc2ggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgY2hyLFxuICAgICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICAgICAgZm9yIChpOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBjaHI7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNoO1xuICAgIH0sXG5cbiAgICBub3JtYWxpc2VIZXg6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgaWYgKGhleFswXSA9PSAnIycpIHtcbiAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZXgubGVuZ3RoID09IDMpIHtcbiAgICAgICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleDtcbiAgICB9LFxuXG4gICAgLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxuICAgIGdldENvbnRyYXN0OiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGhleCA9IHRoaXMubm9ybWFsaXNlSGV4KGhleCk7XG4gICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpO1xuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNik7XG4gICAgICBjb25zdCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDA7XG4gICAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMDAwJyA6ICcjZmZmJztcbiAgICB9LFxuXG4gICAgLy8gdXNlZCB0byBjaGFuZ2UgY29sb3Igb24gaGlnaGxpZ2h0XG4gICAgZ2V0THVtaW5hbmNlOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHRoaXMubm9ybWFsaXNlSGV4KGhleCksIDE2KSxcbiAgICAgICAgYW10ID0gMzgsXG4gICAgICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcbiAgICAgICAgQiA9ICgobnVtID4+IDgpICYgMHgwMGZmKSArIGFtdCxcbiAgICAgICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXQ7XG4gICAgICAgIHJldHVybiAnIycgKyAoXG4gICAgICAgIDB4MTAwMDAwMCArXG4gICAgICAgIChSIDwgMjU1ID8gKFIgPCAxID8gMCA6IFIpIDogMjU1KSAqIDB4MTAwMDAgK1xuICAgICAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXG4gICAgICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxuICAgICAgKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC5zbGljZSgxKTtcbiAgICB9LFxuXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgaXNQbGFpbk9iamVjdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAvLyBUaGUgY29kZSBcInR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbFwiIGFsbG93cyBBcnJheSBvYmplY3RzXG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3RcbiAgICB9LFxuXG4gICAgdHJhdmVyc2VET01QYXRoOiBmdW5jdGlvbihlbGVtLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSByZXR1cm4gZWxlbTtcblxuICAgICAgcmV0dXJuIHRoaXMudHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdmFsaWQgY29va2llIHZhbHVlc1xuICBjYy5zdGF0dXMgPSB7XG4gICAgZGVueSAgIDogJ2RlbnknLFxuICAgIGFsbG93ICA6ICdhbGxvdycsXG4gICAgZGlzbWlzczogJ2Rpc21pc3MnXG4gIH07XG4gIGNjLmNhdGVnb3J5ID0ge1xuICAgIHVuY2F0ZWdvcml6ZWQgIDogJ2Rpc21pc3MnLFxuICAgIGVzc2VudGlhbCAgICAgIDogJ2FsbG93JyxcbiAgICBwZXJzb25hbGl6YXRpb246ICdkaXNtaXNzJyxcbiAgICBhbmFseXRpY3MgICAgICA6ICdkaXNtaXNzJyxcbiAgICBtYXJrZXRpbmcgICAgICA6ICdkaXNtaXNzJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBzdGF0dXMgaXMgaW4gdGhlIGNvbnN0YW50cyBsaXN0XG4gICAqIEBwYXJhbSB7IHN0cmluZyB9IHN0YXR1cyAtIFN0YXR1cyBTdHJpbmcgdG9cbiAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxuICAgKi9cbiAgY29uc3QgaXNWYWxpZFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY2Muc3RhdHVzKS5pbmRleE9mKHN0YXR1cykgPj0gMFxuICB9XG5cbiAgLy8gZGV0ZWN0cyB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IG5hbWVcbiAgY2MudHJhbnNpdGlvbkVuZCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYW5zID0ge1xuICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgT1Q6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICBtc1Q6ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgV2Via2l0VDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfTtcblxuICAgIGZvciAobGV0IHByZWZpeCBpbiB0cmFucykge1xuICAgICAgaWYgKFxuICAgICAgICB0cmFucy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpICYmXG4gICAgICAgIHR5cGVvZiBlbC5zdHlsZVtwcmVmaXggKyAncmFuc2l0aW9uJ10gIT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KSgpO1xuXG4gIGNjLmhhc1RyYW5zaXRpb24gPSAhIWNjLnRyYW5zaXRpb25FbmQ7XG5cbiAgLy8gY29udGFpbnMgcmVmZXJlbmNlcyB0byB0aGUgY3VzdG9tIDxzdHlsZT4gdGFnc1xuICBjYy5jdXN0b21TdHlsZXMgPSB7fTtcblxuICBjYy5Qb3B1cCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxuICAgICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgLy8gb3B0aW9uYWwgKGV4cGVjdGluZyBhIEhUTUwgZWxlbWVudCkgaWYgcGFzc2VkLCB0aGUgcG9wdXAgaXMgYXBwZW5kZWQgdG8gdGhpcyBlbGVtZW50LiBkZWZhdWx0IGlzIGBkb2N1bWVudC5ib2R5YFxuICAgICAgY29udGFpbmVyOiBudWxsLFxuXG4gICAgICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXG4gICAgICBjb29raWU6IHtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcbiAgICAgICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXG4gICAgICAgIHBhdGg6ICcvJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkb21haW4gdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgb24gdGhpcyBkb21haW4uXG4gICAgICAgIC8vICAtIEd1aWRlIHRvIGNvb2tpZSBkb21haW5zIC0gaHR0cHM6Ly93d3cubXhzYXNoYS5ldS9ibG9nLzIwMTQvMDMvMDQvZGVmaW5pdGl2ZS1ndWlkZS10by1jb29raWUtZG9tYWlucy9cbiAgICAgICAgZG9tYWluOiAnJyxcblxuICAgICAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcbiAgICAgICAgZXhwaXJ5RGF5czogMzY1LFxuXG4gICAgICAgIC8vIElmIHRydWUgdGhlIGNvb2tpZSB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgc2VjdXJlIGZsYWcuIFNlY3VyZSBjb29raWVzIHdpbGwgb25seSBiZSB0cmFuc21pdHRlZCB2aWEgSFRUUFMuXG4gICAgICAgIHNlY3VyZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZXNlIGNhbGxiYWNrIGhvb2tzIGFyZSBjYWxsZWQgYXQgY2VydGFpbiBwb2ludHMgaW4gdGhlIHByb2dyYW0gZXhlY3V0aW9uXG4gICAgICBvblBvcHVwT3BlbjogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uUG9wdXBDbG9zZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uSW5pdGlhbGl6ZTogZnVuY3Rpb24oc3RhdHVzZXMpIHt9LFxuICAgICAgb25TdGF0dXNDaGFuZ2U6IGZ1bmN0aW9uKGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKSB7fSxcbiAgICAgIG9uUmV2b2tlQ2hvaWNlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Ob0Nvb2tpZUxhdzogZnVuY3Rpb24oY291bnRyeUNvZGUsIGNvdW50cnkpIHt9LFxuXG4gICAgICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIGhlYWRlcjogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcbiAgICAgICAgZGlzbWlzczogJ0dvdCBpdCEnLFxuICAgICAgICBhbGxvdzogJ0FsbG93IGNvb2tpZXMnLFxuICAgICAgICBkZW55OiAnRGVjbGluZScsXG4gICAgICAgIGxpbms6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcbiAgICAgICAgY2xvc2U6ICcmI3gyNzRjOycsXG4gICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgIHBvbGljeTogJ0Nvb2tpZSBQb2xpY3knXG4gICAgICB9LFxuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBIVE1MIGZvciB0aGUgZWxlbWVudHMgYWJvdmUuIFRoZSBzdHJpbmcge3toZWFkZXJ9fSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGVxdWl2YWxlbnQgdGV4dCBiZWxvdy5cbiAgICAgIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXG4gICAgICAvL1xuICAgICAgLy8gIC0gQVJJQSBydWxlcyBzdWdnZXN0IHRvIGVuc3VyZSBjb250cm9scyBhcmUgdGFiYmFibGUgKHNvIHRoZSBicm93c2VyIGNhbiBmaW5kIHRoZSBmaXJzdCBjb250cm9sKSxcbiAgICAgIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImNjLWhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+Jm5ic3A7JyxcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvc3Bhbj4nLFxuICAgICAgICBtZXNzYWdlbGluazpcbiAgICAgICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fSA8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT48L3NwYW4+JyxcbiAgICAgICAgZGlzbWlzczpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kaXNtaXNzXCI+e3tkaXNtaXNzfX08L2E+JyxcbiAgICAgICAgYWxsb3c6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJhbGxvdyBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgIGNsYXNzPVwiY2MtYnRuIGNjLWFsbG93XCI+e3thbGxvd319PC9hPicsXG4gICAgICAgIGRlbnk6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJkZW55IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kZW55XCI+e3tkZW55fX08L2E+JyxcbiAgICAgICAgbGluazpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcbiAgICAgICAgY2xvc2U6XG4gICAgICAgICAgJzxzcGFuIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1jbG9zZVwiPnt7Y2xvc2V9fTwvc3Bhbj4nLFxuICAgICAgICBjYXRlZ29yaWVzOiBgIFxuICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNhdGVnb3JpZXNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInVuY2F0ZWdvcml6ZWRcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+VW5jYXRlZ29yaXplZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiVW5jYXRlZ29yaXplZCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiMVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCBhbnkgb3RoZXIgY2F0ZWdvcnkuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiVW5jYXRlZ29yaXplZCBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+VW5jYXRlZ29yaXplZCBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCIyXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlc3NlbnRpYWxcIiBjaGVja2VkIGRpc2FibGVkLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5Fc3NlbnRpYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiM1wiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgZXNzZW50aWFsIGFwcGxpY2F0aW9uIG9yIHdlYnNpdGUgb3BwZXJhdGlvbiBjb29raWVzLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+RXNzZW50aWFsIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjRcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBlcnNvbmFsaXphdGlvblwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5QZXJzb25hbGl6YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiNVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB0aGUgYXBwbGljYXRpb24gdG8gYSBzcGVjaWZpYyB1c2VyLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+UGVyc29uYWxpemF0aW9uIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjZcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuYWx5dGljc1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5BbmFseXRpY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiN1wiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgYW5hbHlpemUgZGF0YS48L3A+XG4gICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJBbmFseXRpY3MgQ29va2llcyBMaXN0XCIgcm9sZT1cImJ1dHRvblwiPkFuYWx5dGljcyBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI4XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYXJrZXRpbmdcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+TWFya2V0aW5nPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjlcIj5ePC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIHBlcm9uYWxpemUgeW91ciBpbnRlcm5ldCBzaG9wcGluZyAmIGFkdmVydGlzZW1lbnQgZXhwZXJpZW5jZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiTWFya2V0aW5nIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5NYXJrZXRpbmcgQ29va2llczwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIGAsXG4gICAgICAgIHNhdmU6IGBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIGBcbiAgICAgICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XG4gICAgICAvLyAgLSB7e2NsYXNzZXN9fSBpcyB3aGVyZSBhZGRpdGlvbmFsIGNsYXNzZXMgZ2V0IGFkZGVkXG4gICAgICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxuICAgICAgd2luZG93OlxuICAgICAgICAnPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1sYWJlbD1cImNvb2tpZWNvbnNlbnRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy13aW5kb3cge3tjbGFzc2VzfX1cIj48IS0tZ29vZ2xlb2ZmOiBhbGwtLT57e2NoaWxkcmVufX08IS0tZ29vZ2xlb246IGFsbC0tPjwvZGl2PicsXG4gICAgICBcbiAgICAgIG1vZGFsOiAnJyxcblxuICAgICAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxuICAgICAgLy8gSXQgY2FuIGJlIGVuYWJsZWQgb2YgZGlzYWJsZWQgdXNpbmcgdGhlIGByZXZva2FibGVgIG9wdGlvblxuICAgICAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxuXG4gICAgICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgICAgIGNvbXBsaWFuY2U6IHtcbiAgICAgICAgaW5mbzogJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlXCI+e3tkaXNtaXNzfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LWluJzpcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2FsbG93fX17e2N1c3RvbWl6ZX19PC9kaXY+JyxcbiAgICAgICAgJ29wdC1vdXQnOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+JyxcbiAgICAgICAgY2F0ZWdvcmllczogJzxkaXYgY2xhc3M9XCJmb3JtXCI+e3tjYXRlZ29yaWVzfX17e3NhdmV9fTwvZGl2PidcbiAgICAgIH0sXG5cbiAgICAgIC8vIHNlbGVjdCB5b3VyIHR5cGUgb2YgcG9wdXAgaGVyZVxuICAgICAgdHlwZTogJ2luZm8nLCAvLyByZWZlcnMgdG8gYGNvbXBsaWFuY2VgIChpbiBvdGhlciB3b3JkcywgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgZGlzcGxheWVkKVxuXG4gICAgICAvLyBkZWZpbmUgbGF5b3V0IGxheW91dHMgaGVyZVxuICAgICAgbGF5b3V0czoge1xuICAgICAgICAvLyB0aGUgJ2Jsb2NrJyBsYXlvdXQgdGVuZCB0byBiZSBmb3Igc3F1YXJlIGZsb2F0aW5nIHBvcHVwc1xuICAgICAgICBiYXNpYyAgICAgICAgIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19JyxcbiAgICAgICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXG4gICAgICAgICdiYXNpYy1oZWFkZXInOiAne3toZWFkZXJ9fXt7bWVzc2FnZX19e3tsaW5rfX17e2NvbXBsaWFuY2V9fSdcbiAgICAgICAgLy8gYWRkIGEgY3VzdG9tIGxheW91dCBoZXJlLCB0aGVuIGFkZCBzb21lIG5ldyBjc3Mgd2l0aCB0aGUgY2xhc3MgJy5jYy1sYXlvdXQtbXktY29vbC1sYXlvdXQnXG4gICAgICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxuICAgICAgfSxcblxuICAgICAgLy8gZGVmYXVsdCBsYXlvdXQgKHNlZSBhYm92ZSlcbiAgICAgIGxheW91dDogJ2Jhc2ljJyxcblxuICAgICAgLy8gdGhpcyByZWZlcnMgdG8gdGhlIHBvcHVwIHdpbmRvd3MgcG9zaXRpb24uIHdlIGN1cnJlbnRseSBzdXBwb3J0OlxuICAgICAgLy8gIC0gYmFubmVyIHBvc2l0aW9uczogdG9wLCBib3R0b21cbiAgICAgIC8vICAtIGZsb2F0aW5nIHBvc2l0aW9uczogdG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQsIGJvdHRvbS1yaWdodFxuICAgICAgLy9cbiAgICAgIC8vIGFkZHMgYSBjbGFzcyBgY2MtZmxvYXRpbmdgIG9yIGBjYy1iYW5uZXJgIHdoaWNoIGhlbHBzIHdoZW4gc3R5bGluZ1xuICAgICAgcG9zaXRpb246ICdib3R0b20nLCAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzICdib3R0b20nXG5cbiAgICAgIC8vIEF2YWlsYWJsZSBzdHlsZXNcbiAgICAgIC8vICAgIC1ibG9jayAoZGVmYXVsdCwgbm8gZXh0cmEgY2xhc3NlcylcbiAgICAgIC8vICAgIC1lZGdlbGVzc1xuICAgICAgLy8gICAgLWNsYXNzaWNcbiAgICAgIC8vIHVzZSB5b3VyIG93biBzdHlsZSBuYW1lIGFuZCB1c2UgYC5jYy10aGVtZS1TVFlMRU5BTUVgIGNsYXNzIGluIENTUyB0byBlZGl0LlxuICAgICAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxuICAgICAgdGhlbWU6ICdibG9jaycsXG5cbiAgICAgIC8vIFRoZSBwb3B1cCBpcyBgZml4ZWRgIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzdGF0aWMgKGlubGluZSB3aXRoIHRoZSBwYWdlIGNvbnRlbnQpLCBzZXQgdGhpcyB0byBmYWxzZVxuICAgICAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXG4gICAgICBzdGF0aWM6IGZhbHNlLFxuXG4gICAgICAvLyBpZiB5b3Ugd2FudCBjdXN0b20gY29sb3VycywgcGFzcyB0aGVtIGluIGhlcmUuIHRoaXMgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhpcy5cbiAgICAgIC8vIGlkZWFsbHksIGFueSBjdXN0b20gY29sb3Vycy90aGVtZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCwgYXMgdGhpcyBpcyBtb3JlIGVmZmljaWVudC5cbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHBvcHVwOiB7YmFja2dyb3VuZDogJyMwMDAwMDAnLCB0ZXh0OiAnI2ZmZicsIGxpbms6ICcjZmZmJ30sXG4gICAgICAvLyAgICAgYnV0dG9uOiB7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjZjhlNzFjJ30sXG4gICAgICAvLyAgICAgaGlnaGxpZ2h0OiB7YmFja2dyb3VuZDogJyNmOGU3MWMnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyMwMDAwMDAnfSxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gYGhpZ2hsaWdodGAgaXMgb3B0aW9uYWwgYW5kIGV4dGVuZHMgYGJ1dHRvbmAuIGlmIGl0IGV4aXN0cywgaXQgd2lsbCBhcHBseSB0byB0aGUgZmlyc3QgYnV0dG9uXG4gICAgICAvLyBvbmx5IGJhY2tncm91bmQgbmVlZHMgdG8gYmUgZGVmaW5lZCBmb3IgZXZlcnkgZWxlbWVudC4gaWYgbm90IHNldCwgb3RoZXIgY29sb3JzIGNhbiBiZSBjYWxjdWxhdGVkIGZyb20gaXRcbiAgICAgIHBhbGV0dGU6IG51bGwsXG5cbiAgICAgIC8vIFNvbWUgY291bnRyaWVzIFJFUVVJUkUgdGhhdCBhIHVzZXIgY2FuIGNoYW5nZSB0aGVpciBtaW5kLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHlvdXJzZWxmLlxuICAgICAgLy8gTW9zdCBvZiB0aGUgdGltZSB0aGlzIHNob3VsZCBiZSBmYWxzZSwgYnV0IHRoZSBgY29va2llY29uc2VudC5sYXdgIGNhbiBjaGFuZ2UgdGhpcyB0byBgdHJ1ZWAgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IHNob3VsZFxuICAgICAgcmV2b2thYmxlOiBmYWxzZSxcblxuICAgICAgLy8gaWYgdHJ1ZSwgdGhlIHJldm9rYWJsZSBidXR0b24gd2lsbCB0cmFubGF0ZSBpbiBhbmQgb3V0XG4gICAgICBhbmltYXRlUmV2b2thYmxlOiB0cnVlLFxuXG4gICAgICAvLyB1c2VkIHRvIGRpc2FibGUgbGluayBvbiBleGlzdGluZyBsYXlvdXRzXG4gICAgICAvLyByZXBsYWNlcyBlbGVtZW50IG1lc3NhZ2VsaW5rIHdpdGggbWVzc2FnZSBhbmQgcmVtb3ZlcyBjb250ZW50IG9mIGxpbmtcbiAgICAgIHNob3dMaW5rOiB0cnVlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgc2Nyb2xsIHJhbmdlIHRvIGVuYWJsZVxuICAgICAgZGlzbWlzc09uU2Nyb2xsOiBmYWxzZSxcblxuICAgICAgLy8gc2V0IHZhbHVlIGFzIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGF1dG9kaXNtaXNzIGFmdGVyIHNldCB0aW1lXG4gICAgICBkaXNtaXNzT25UaW1lb3V0OiBmYWxzZSxcblxuICAgICAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxuICAgICAgZGlzbWlzc09uV2luZG93Q2xpY2s6IGZhbHNlLFxuXG4gICAgICAvLyBJZiBgZGlzbWlzc09uV2luZG93Q2xpY2tgIGlzIHRydWUsIHdlIGNhbiBjbGljayBvbiAncmV2b2tlJyBhbmQgd2UnbGwgc3RpbGwgZGlzbWlzcyB0aGUgYmFubmVyLCBzbyB3ZSBuZWVkIGV4Y2VwdGlvbnMuXG4gICAgICAvLyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgKG5vdCBDU1Mgc2VsZWN0b3JzKVxuICAgICAgaWdub3JlQ2xpY2tzRnJvbTogWydjYy1yZXZva2UnLCAnY2MtYnRuJ10sIC8vIGFscmVhZHkgaW5jbHVkZXMgdGhlIHJldm9rZSBidXR0b24gYW5kIHRoZSBiYW5uZXIgaXRzZWxmXG5cbiAgICAgIC8vIFRoZSBhcHBsaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRlY2lkZSB3aGV0aGVyIHRoZSBwb3B1cCBzaG91bGQgb3Blbi5cbiAgICAgIC8vIFNldCB0aGlzIHRvIGZhbHNlIHRvIHByZXZlbnQgdGhpcyBmcm9tIGhhcHBlbmluZyBhbmQgdG8gYWxsb3cgeW91IHRvIGNvbnRyb2wgdGhlIGJlaGF2aW91ciB5b3Vyc2VsZlxuICAgICAgYXV0b09wZW46IHRydWUsXG5cbiAgICAgIC8vIEJ5IGRlZmF1bHQgdGhlIGNyZWF0ZWQgSFRNTCBpcyBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgKHdoaWNoIGRlZmF1bHRzIHRvIDxib2R5PikuIFlvdSBjYW4gcHJldmVudCB0aGlzIGJlaGF2aW91clxuICAgICAgLy8gYnkgc2V0dGluZyB0aGlzIHRvIGZhbHNlLCBidXQgaWYgeW91IGRvLCB5b3UgbXVzdCBhdHRhY2ggdGhlIGBlbGVtZW50YCB5b3Vyc2VsZiwgd2hpY2ggaXMgYSBwdWJsaWMgcHJvcGVydHkgb2YgdGhlIHBvcHVwIGluc3RhbmNlOlxuICAgICAgLy9cbiAgICAgIC8vICAgICBjb25zdCBpbnN0YW5jZSA9IGNvb2tpZWNvbnNlbnQuZmFjdG9yeShvcHRpb25zKTtcbiAgICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluc3RhbmNlLmVsZW1lbnQpO1xuICAgICAgLy9cbiAgICAgIGF1dG9BdHRhY2g6IHRydWUsXG5cdCAgXG5cdCAgLy8gc2V0IHZhbHVlIGlmIGZsb2F0aW5nIGxheW91dCBzaG91bGQgYmUgZm9yY2VkIGZvciBtb2JpbGUgZGV2aWNlc1xuXHQgIG1vYmlsZUZvcmNlRmxvYXQ6IHRydWUsXG5cbiAgICAgIC8vIHNpbXBsZSB3aGl0ZWxpc3QvYmxhY2tsaXN0IGZvciBwYWdlcy4gc3BlY2lmeSBwYWdlIGJ5OlxuICAgICAgLy8gICAtIHVzaW5nIGEgc3RyaW5nIDogJy9pbmRleC5odG1sJyAgICAgICAgICAgKG1hdGNoZXMgJy9pbmRleC5odG1sJyBleGFjdGx5KSBPUlxuICAgICAgLy8gICAtIHVzaW5nIFJlZ0V4cCAgIDogL1xcL3BhZ2VfW1xcZF0rXFwuaHRtbC8gICAgKG1hdGNoZWQgJy9wYWdlXzEuaHRtbCcgYW5kICcvcGFnZV8yLmh0bWwnIGV0YylcbiAgICAgIHdoaXRlbGlzdFBhZ2U6IFtdLFxuICAgICAgYmxhY2tsaXN0UGFnZTogW10sXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgZGVmaW5lZCwgdGhlbiBpdCBpcyB1c2VkIGFzIHRoZSBpbm5lciBodG1sIGluc3RlYWQgb2YgbGF5b3V0LiBUaGlzIGFsbG93cyBmb3IgdWx0aW1hdGUgY3VzdG9taXNhdGlvbi5cbiAgICAgIC8vIEJlIHN1cmUgdG8gdXNlIHRoZSBjbGFzc2VzIGBjYy1idG5gIGFuZCBgY2MtYWxsb3dgLCBgY2MtZGVueWAgb3IgYGNjLWRpc21pc3NgLiBUaGV5IGVuYWJsZSB0aGUgYXBwIHRvIHJlZ2lzdGVyIGNsaWNrXG4gICAgICAvLyBoYW5kbGVycy4gWW91IGNhbiB1c2Ugb3RoZXIgcHJlLWV4aXN0aW5nIGNsYXNzZXMgdG9vLiBTZWUgYHNyYy9zdHlsZXNgIGZvbGRlci5cbiAgICAgIG92ZXJyaWRlSFRNTDogbnVsbFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb29raWVQb3B1cCgpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTsgLy8gYWxyZWFkeSByZW5kZXJlZFxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgb3B0aW9ucyBiYWNrIHRvIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgdXRpbC5kZWVwRXh0ZW5kKCh0aGlzLm9wdGlvbnMgPSB7fSksIGRlZmF1bHRPcHRpb25zIClcblxuICAgICAgLy8gbWVyZ2UgaW4gdXNlciBvcHRpb25zXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm5zIHRydWUgaWYgYG9uQ29tcGxldGVgIHdhcyBjYWxsZWRcbiAgICAgIGlmIChjaGVja0NhbGxiYWNrSG9va3MuY2FsbCh0aGlzKSkge1xuICAgICAgICAvLyB1c2VyIGhhcyBhbHJlYWR5IGFuc3dlcmVkXG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIGFwcGx5IGJsYWNrbGlzdCAvIHdoaXRlbGlzdFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy53aGl0ZWxpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBmdWxsIG1hcmt1cCBlaXRoZXIgY29udGFpbnMgdGhlIHdyYXBwZXIgb3IgaXQgZG9lcyBub3QgKGZvciBtdWx0aXBsZSBpbnN0YW5jZXMpXG4gICAgICBsZXQgY29va2llUG9wdXAgPSB0aGlzLm9wdGlvbnMud2luZG93XG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGdldFBvcHVwQ2xhc3Nlcy5jYWxsKHRoaXMpLmpvaW4oJyAnKSlcbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2hpbGRyZW59fScsIGdldFBvcHVwSW5uZXJNYXJrdXAuY2FsbCh0aGlzKSk7XG5cbiAgICAgIC8vIGlmIHVzZXIgcGFzc2VzIGh0bWwsIHVzZSBpdCBpbnN0ZWFkXG4gICAgICBjb25zdCBjdXN0b21IVE1MID0gdGhpcy5vcHRpb25zLm92ZXJyaWRlSFRNTDtcbiAgICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcbiAgICAgICAgY29va2llUG9wdXAgPSBjdXN0b21IVE1MO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBzdGF0aWMsIHdlIG5lZWQgdG8gZ3JvdyB0aGUgZWxlbWVudCBmcm9tIDAgaGVpZ2h0IHNvIGl0IGRvZXNuJ3QganVtcCB0aGUgcGFnZVxuICAgICAgLy8gY29udGVudC4gd2Ugd3JhcCBhbiBlbGVtZW50IGFyb3VuZCBpdCB3aGljaCB3aWxsIG1hc2sgdGhlIGhpZGRlbiBjb250ZW50XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAvLyBgZ3Jvd2VyYCBpcyBhIHdyYXBwZXIgZGl2IHdpdGggYSBoaWRkZW4gb3ZlcmZsb3cgd2hvc2UgaGVpZ2h0IGlzIGFuaW1hdGVkXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBhcHBlbmRNYXJrdXAuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtZ3Jvd2VyXCI+JyArIGNvb2tpZVBvcHVwICsgJzwvZGl2PidcbiAgICAgICAgKTtcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnJzsgLy8gc2V0IGl0IHRvIHZpc2libGUgKGJlY2F1c2UgYXBwZW5kTWFya3VwIGhpZGVzIGl0KVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQ7IC8vIGdldCB0aGUgYGVsZW1lbnRgIHJlZmVyZW5jZSBmcm9tIHRoZSB3cmFwcGVyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBhcHBlbmRNYXJrdXAuY2FsbCh0aGlzLCBjb29raWVQb3B1cCk7XG4gICAgICB9XG5cbiAgICAgIGFwcGx5QXV0b0Rpc21pc3MuY2FsbCh0aGlzKTtcblxuICAgICAgYXBwbHlSZXZva2VCdXR0b24uY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvT3Blbikge1xuICAgICAgICB0aGlzLmF1dG9PcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5vbkJ1dHRvbkNsaWNrICYmIHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2sgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kaXNtaXNzVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNtaXNzVGltZW91dCk7XG4gICAgICAgIHRoaXMuZGlzbWlzc1RpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbldpbmRvd1Njcm9sbCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCk7XG4gICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbldpbmRvd0NsaWNrKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljayk7XG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uTW91c2VNb3ZlKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLnJldm9rZUJ0biAmJiB0aGlzLnJldm9rZUJ0bi5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMucmV2b2tlQnRuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5yZXZva2VCdG4pO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXZva2VCdG4gPSBudWxsO1xuXG4gICAgICByZW1vdmVDdXN0b21TdHlsZSh0aGlzLm9wdGlvbnMucGFsZXR0ZSk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBudWxsO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgaWYgKGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgICB0aGlzLmZhZGVJbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUG9wdXBPcGVuLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbihzaG93UmV2b2tlKSB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgICBpZiAoY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHRoaXMuZmFkZU91dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3dSZXZva2UgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblBvcHVwQ2xvc2UuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5mYWRlSW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50O1xuXG4gICAgICBpZiAoIWNjLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm47XG5cbiAgICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXG4gICAgICAvLyAndHJhbnNpdGlvbmVuZCcgaXNuJ3QgYWxsIHRoYXQgcmVsaWFibGUsIHNvLCBpZiB3ZSB0cnkgYW5kIGZhZGVJbiBiZWZvcmUgJ3RyYW5zaXRpb25lbmQnIGhhc1xuICAgICAgLy8gaGFzIGEgY2hhbmNlIHRvIHJ1biwgdGhlbiB3ZSBydW4gaXQgb3Vyc2VsdmVzXG4gICAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcbiAgICAgICAgYWZ0ZXJGYWRlT3V0LmNhbGwodGhpcywgZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZhZGVJblRpbWVvdXQgPSAyMDsgLy8gKG1zKSBETyBOT1QgTUFLRSBUSElTIFZBTFVFIFNNQUxMRVIuIFNlZSBiZWxvd1xuXG4gICAgICAgIC8vIEFsdGhvdWdoIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSB2YWx1ZXMgbGVzcyB0aGFuIDIwbXMsIGl0IHNob3VsZCByZW1haW4gYWJvdmUgdGhpcyB2YWx1ZS5cbiAgICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgICAgLy8gSWYgdGhlIGNsYXNzIGlzIHJlbXZvZWQgYmVmb3JlIGEgcmVkcmF3IGNvdWxkIGhhcHBlbiwgdGhlbiB0aGUgZmFkZUluIGVmZmVjdCBXSUxMIE5PVCB3b3JrLCBhbmRcbiAgICAgICAgLy8gdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGZyb20gbm90aGluZy4gVGhlcmVmb3JlIHdlIE1VU1QgYWxsb3cgZW5vdWdoIHRpbWUgZm9yIHRoZSBicm93c2VyIHRvIGRvXG4gICAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgIGFmdGVyRmFkZUluLmJpbmQodGhpcywgZWwpLFxuICAgICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmZhZGVPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50O1xuXG4gICAgICBpZiAoIWNjLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLm9wZW5pbmdUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5pbmdUaW1lb3V0KTtcbiAgICAgICAgYWZ0ZXJGYWRlSW4uYmluZCh0aGlzLCBlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSBhZnRlckZhZGVPdXQuYmluZCh0aGlzLCBlbCk7XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoY2MudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pO1xuXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJycgJiZcbiAgICAgICAgKGNjLmhhc1RyYW5zaXRpb24gPyAhdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykgOiB0cnVlKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLnRvZ2dsZVJldm9rZUJ1dHRvbiA9IGZ1bmN0aW9uKHNob3cpIHtcbiAgICAgIGlmICh0aGlzLnJldm9rZUJ0bikgdGhpcy5yZXZva2VCdG4uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLnJldm9rZUNob2ljZSA9IGZ1bmN0aW9uKHByZXZlbnRPcGVuKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKTtcblxuICAgICAgdGhpcy5vcHRpb25zLm9uUmV2b2tlQ2hvaWNlLmNhbGwodGhpcyk7XG5cbiAgICAgIGlmICghcHJldmVudE9wZW4pIHtcbiAgICAgICAgdGhpcy5hdXRvT3BlbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYXMgdGhlIHVzZXIgcmVzcG9uZGVkIHRvIHRoZSBiYW5uZXJcbiAgICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gdHJ1ZSBpZiBhbnkgY29va2llcyBoYXZlIGJlZW4gc2V0XG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmhhc0Fuc3dlcmVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLnNvbWUoIHN0YXR1cyA9PiAhIXN0YXR1cyApXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0byBhbGwgb2YgdGhlIGNhdGVnb3JpZXNcbiAgICAgKiBAcmV0dXJuIHsgYXJyYXk8Ym9vbGVhbj4gfSAtIHRydWUgaWYgY29uc2VudCBoYXMgYmVlbiBnaXZlblxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5oYXNDb25zZW50ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkubWFwKCBzdGF0dXMgPT4gc3RhdHVzID09PSBjYy5zdGF0dXMuYWxsb3cgfHwgc3RhdHVzID09PSBjYy5zdGF0dXMuZGlzbWlzcyApXG4gICAgfTtcblxuICAgIC8vIG9wZW5zIHRoZSBwb3B1cCBpZiBubyBhbnN3ZXIgaGFzIGJlZW4gZ2l2ZW5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuYXV0b09wZW4gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBjb25zdCBoYXNBbnN3ZXJlZCA9IHRoaXMuaGFzQW5zd2VyZWQoKVxuICAgICAgaWYgKCFoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqIFxuICAgICAqIFNldCdzIGNvb2tpZSBzdGF0dXNlc1xuICAgICAqIEBwYXJhbSB7IHN0cmluZzxjYy5zdGF0dXM+IH0gYWxsT3JVbmRlZiAgICAgIC0gSWYgdGhpcyBpcyB0aGUgb25seSBwYXJhbSwgc2V0IEFMTCBpZiBub3QsIHNldCBVbmNhdGVnb3JpemVkIGNvb2tpZXMgc3RhdHVzZXMgc2V0IHRvIHZhbHVlLlxuICAgICAqIEBwYXJhbSB7IHN0cmluZzxjYy5zdGF0dXM+IH0gZXNzZW50aWFsICAgICAgIC0gRXNzZW50aWFsIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IHN0cmluZzxjYy5zdGF0dXM+IH0gcGVyc29uYWxpemF0aW9uIC0gUHJlZmVyZW5jZXMgLyBGdW5jdGlvbmFsaXR5IHNldCB0byB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IHN0cmluZzxjYy5zdGF0dXM+IH0gYW5hbHl0aWNzICAgICAgIC0gQW5hbHl0aXMgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBtYXJrZXRpbmcgICAgICAgLSBNYXJrZXRpbmcgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAgICogQHJldHVybiB7IHVuZGVmaW5lZCB9XG4gICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuc2V0U3RhdHVzZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHtuYW1lLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZX0gPSB0aGlzLm9wdGlvbnMuY29va2llXG5cbiAgICAgIC8vIGlmIGBzdGF0dXNgIGlzIHZhbGlkXG4gICAgICBjb25zdCB1cGRhdGVDYXRlZ29yeVN0YXR1cyA9ICggY2F0ZWdvcnlOYW1lLCBzdGF0dXMgKSA9PiB7XG4gICAgICAgIGlmIChpc1ZhbGlkU3RhdHVzKHN0YXR1cykpIHtcbiAgICAgICAgICBjb25zdCBjb29raWVOYW1lID0gbmFtZSsnXycrY2F0ZWdvcnlOYW1lXG4gICAgICAgICAgY29uc3QgY2hvc2VuQmVmb3JlID0gT2JqZWN0LmtleXMoY2Muc3RhdHVzKS5pbmRleE9mKHV0aWwuZ2V0Q29va2llKGNvb2tpZU5hbWUpKSA+PSAwXG4gICAgICAgICAgdXRpbC5zZXRDb29raWUoY29va2llTmFtZSwgc3RhdHVzLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSlcbiAgICAgICAgICB0aGlzLm9wdGlvbnMub25TdGF0dXNDaGFuZ2UuY2FsbCh0aGlzLCBjb29raWVOYW1lLCBzdGF0dXMsIGNob3NlbkJlZm9yZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgY2MuY2F0ZWdvcnlbIGNhdGVnb3J5IF0gKSApXG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCBhcmd1bWVudHNbIDAgXSApIClcbiAgICAgIH0gZWxzZSBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuICAgICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XG4gICAgICAgICAgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KVsgaW5kZXggXSwgY2F0ZWdvcnlTdGF0dXMgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgICAqIEByZXR1cm4geyBhcnJheTxzdHJpbmc+IH0gLSBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXMgaW4gb3JkZXIgb2YgY2MuY2F0ZWdvcnlcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZ2V0U3RhdHVzZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkubWFwKCBjYXRlZ29yeU5hbWUgPT4gdXRpbC5nZXRDb29raWUodGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lKydfJytjYXRlZ29yeU5hbWUpIClcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuY2xlYXJTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWU7XG4gICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgICAgdXRpbC5zZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnlOYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGFmdGVyICdmYWRlSW4nLiBUaGlzIGlzIHRoZSBjb2RlIHRoYXQgYWN0dWFsbHkgY2F1c2VzIHRoZSBmYWRlSW4gdG8gd29ya1xuICAgIC8vIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJztcbiAgICBmdW5jdGlvbiBhZnRlckZhZGVJbihlbCkge1xuICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGw7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYy1pbnZpc2libGUnKVxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIG9uICd0cmFuc2l0aW9uZW5kJyAob25seSBvbiB0aGUgdHJhbnNpdGlvbiBvZiB0aGUgZmFkZU91dCkuIFRoYXQncyBiZWNhdXNlIGFmdGVyIHdlJ3ZlIGZhZGVkIG91dCwgd2UgbmVlZCB0b1xuICAgIC8vIHNldCB0aGUgZGlzcGxheSB0byAnbm9uZScgKHNvIHRoZXJlIGFyZW4ndCBhbm5veWluZyBpbnZpc2libGUgcG9wdXBzIGFsbCBvdmVyIHRoZSBwYWdlKS4gSWYgZm9yIHdoZW5ldmVyIHJlYXNvbiB0aGlzIGZ1bmN0aW9uXG4gICAgLy8gaXMgbm90IGNhbGxlZCAobGFjayBvZiBzdXBwb3J0KSwgdGhlIG9wZW4vY2xvc2UgbWVjaGFuaXNtIHdpbGwgc3RpbGwgd29yay5cbiAgICBmdW5jdGlvbiBhZnRlckZhZGVPdXQoZWwpIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIGFmdGVyIGNsb3NlIGFuZCBiZWZvcmUgb3BlbiwgdGhlIGRpc3BsYXkgc2hvdWxkIGJlIG5vbmVcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY2MudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHRoaXMgZnVuY3Rpb24gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBob29rIGFuZCByZXR1cm5zIHRydWUgKGlmIG5lZWRlZCkgYW5kIHJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgZnVuY3Rpb24gY2hlY2tDYWxsYmFja0hvb2tzKCkge1xuICAgICAgY29uc3QgY29tcGxldGUgPSB0aGlzLm9wdGlvbnMub25Jbml0aWFsaXplLmJpbmQodGhpcyk7XG5cbiAgICAgIGlmICghd2luZG93Lm5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XG4gICAgICAgIGNvbXBsZXRlKGNjLnN0YXR1cy5kZW55KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LKSB7XG4gICAgICAgIGNvbXBsZXRlKGNjLnN0YXR1cy5hbGxvdyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpXG4gICAgICBjb25zdCBzdGF0dXNlc1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzZXMoKVxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IGlzVmFsaWRTdGF0dXMoIHN0YXR1cyApIH0gKSApXG4gICAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG1hdGNoID0+IG1hdGNoW09iamVjdC5rZXlzKG1hdGNoKVswXV0gKS5sZW5ndGggPiAwXG4gICAgICBzdGF0dXNlc1ZhbHVlcy5mb3JFYWNoKCAoIHN0YXR1cywgaW5kZXggKSA9PiBjYy5jYXRlZ29yeVsgY2F0ZWdvcmllc1sgaW5kZXggXSBdID0gc3RhdHVzID8gc3RhdHVzIDogY2MuY2F0ZWdvcnlbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSApXG4gICAgICBjb21wbGV0ZSggaGFzTWF0Y2hlcyA/IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IHN0YXR1cyB9ICkgKSAgOiB1bmRlZmluZWQgKVxuXG4gICAgICByZXR1cm4gaGFzTWF0Y2hlcztcbiAgICB9XG5cbiAgICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UG9wdXBDbGFzc2VzKCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxldCBwb3NpdGlvblN0eWxlID1cbiAgICAgICAgb3B0cy5wb3NpdGlvbiA9PSAndG9wJyB8fCBvcHRzLnBvc2l0aW9uID09ICdib3R0b20nXG4gICAgICAgICAgPyAnYmFubmVyJ1xuICAgICAgICAgIDogJ2Zsb2F0aW5nJztcblxuICAgICAgaWYgKHV0aWwuaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcbiAgICAgICAgcG9zaXRpb25TdHlsZSA9ICdmbG9hdGluZyc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAgICdjYy10eXBlLScgKyBvcHRzLnR5cGUsIC8vIGFkZCB0aGUgY29tcGxpYW5jZSB0eXBlXG4gICAgICAgICdjYy10aGVtZS0nICsgb3B0cy50aGVtZSwgLy8gYWRkIHRoZSB0aGVtZVxuICAgICAgXTtcblxuICAgICAgaWYgKG9wdHMuc3RhdGljKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2Mtc3RhdGljJyk7XG4gICAgICB9XG5cbiAgICAgIGNsYXNzZXMucHVzaC5hcHBseShjbGFzc2VzLCBnZXRQb3NpdGlvbkNsYXNzZXMuY2FsbCh0aGlzKSk7XG5cbiAgICAgIC8vIHdlIG9ubHkgYWRkIGV4dHJhIHN0eWxlcyBpZiBgcGFsZXR0ZWAgaGFzIGJlZW4gc2V0IHRvIGEgdmFsaWQgdmFsdWVcbiAgICAgIGF0dGFjaEN1c3RvbVBhbGV0dGUuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMucGFsZXR0ZSk7XG5cbiAgICAgIC8vIGlmIHdlIG92ZXJyaWRlIHRoZSBwYWxldHRlLCBhZGQgdGhlIGNsYXNzIHRoYXQgZW5hYmxlcyB0aGlzXG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkID0ge307XG4gICAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyByZW1vdmVzIGxpbmsgaWYgc2hvd0xpbmsgaXMgZmFsc2VcbiAgICAgIGlmICghb3B0cy5zaG93TGluaykge1xuICAgICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJzsgXG4gICAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdHMuZWxlbWVudHMpLmZvckVhY2goIHByb3AgPT4ge1xuICAgICAgICBpbnRlcnBvbGF0ZWRbcHJvcF0gPSB1dGlsLmludGVycG9sYXRlU3RyaW5nKFxuICAgICAgICAgIG9wdHMuZWxlbWVudHNbcHJvcF0sXG4gICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSBvcHRzLmNvbnRlbnRbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgLy8gY2hlY2tzIGlmIHRoZSB0eXBlIGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBpbmZvIGlmIGl0J3Mgbm90XG4gICAgICBsZXQgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2Vbb3B0cy50eXBlXTtcbiAgICAgIGlmICghY29tcGxpYW5jZVR5cGUpIHtcbiAgICAgICAgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2UuaW5mbztcbiAgICAgIH1cblxuICAgICAgLy8gYnVpbGQgdGhlIGNvbXBsaWFuY2UgdHlwZXMgZnJvbSB0aGUgYWxyZWFkeSBpbnRlcnBvbGF0ZWQgYGVsZW1lbnRzYFxuICAgICAgaW50ZXJwb2xhdGVkLmNvbXBsaWFuY2UgPSB1dGlsLmludGVycG9sYXRlU3RyaW5nKGNvbXBsaWFuY2VUeXBlLCBmdW5jdGlvbihcbiAgICAgICAgbmFtZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZWRbbmFtZV07XG4gICAgICB9KTtcblxuICAgICAgLy8gY2hlY2tzIGlmIHRoZSBsYXlvdXQgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGJhc2ljIGlmIGl0J3Mgbm90XG4gICAgICBsZXQgbGF5b3V0ID0gb3B0cy5sYXlvdXRzW29wdHMubGF5b3V0XTtcbiAgICAgIGlmICghbGF5b3V0KSB7XG4gICAgICAgIGxheW91dCA9IG9wdHMubGF5b3V0cy5iYXNpYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcobGF5b3V0LCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGVkW21hdGNoXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZE1hcmt1cChtYXJrdXApIHtcbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGNvbnQgPVxuICAgICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxuICAgICAgICAgID8gb3B0cy5jb250YWluZXJcbiAgICAgICAgICA6IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgIGRpdi5pbm5lckhUTUwgPSBtYXJrdXA7XG5cbiAgICAgIGNvbnN0IGVsID0gZGl2LmNoaWxkcmVuWzBdO1xuXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy13aW5kb3cnKSAmJiBjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpO1xuICAgICAgfVxuXG4gICAgICAvLyBzYXZlIHJlZiB0byB0aGUgZnVuY3Rpb24gaGFuZGxlIHNvIHdlIGNhbiB1bmJpbmQgaXQgbGF0ZXJcbiAgICAgIHRoaXMub25CdXR0b25DbGljayA9IGhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGNjLmNhdGVnb3J5WyBjaGVja2JveC5uYW1lIF0gPSBjaGVja2JveC5jaGVja2VkID8gJ2FsbG93JyA6ICdkZW55J1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoKVxuICAgICAgICB9KVxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpIClcbiAgICAgIH0pXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNjLWluZm9cIikuZm9yRWFjaCggc2hvd0luZm8gPT4ge1xuICAgICAgICBzaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIoKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvKipcbiAgICAgICAqIEV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGFjY29yZGlvbiBpbiB0aGUgdG9vbHRpcFxuICAgICAgICovXG4gICAgICAvKmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiKS5mb3JFYWNoKCBhY2NvcmRpb25MaW5rID0+IHtcbiAgICAgICAgYWNjb3JkaW9uTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgYWNjb3JkaW9uTGluay5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSggXCJvcGVuXCIgKVxuICAgICAgICB9KVxuICAgICAgICBhY2NvcmRpb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIClcbiAgICAgIH0pXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNjLXRvb2x0aXBcIikuZm9yRWFjaCggdG9vbFRpcCA9PiB7XG4gICAgICAgIHRvb2xUaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0pXG4gICAgICAgIHRvb2xUaXAuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAqL1xuXG4gICAgICBpZiAob3B0cy5hdXRvQXR0YWNoKSB7XG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udC5pbnNlcnRCZWZvcmUoZWwsIGNvbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcbiAgICAgIGNvbnN0IGJ0biA9IHV0aWwudHJhdmVyc2VET01QYXRoKGV2ZW50LnRhcmdldCwgJ2NjLWJ0bicpIHx8IGV2ZW50LnRhcmdldDtcbiAgICAgIFxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXNhdmUnICkpe1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKClcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGJ0bi5jbGFzc05hbWUubWF0Y2goXG4gICAgICAgICAgbmV3IFJlZ0V4cCgnXFxcXGJjYy0oJyArIE9iamVjdC5rZXlzKGNjLnN0YXR1cykubWFwKHN0ciA9PiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKSApLmpvaW4oJ3wnKSArICcpXFxcXGInKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtYXRjaCA9IChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHx8IGZhbHNlO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKG1hdGNoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWNsb3NlJyApKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1yZXZva2UnICkpIHtcbiAgICAgICAgdGhpcy5yZXZva2VDaG9pY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJIG1pZ2h0IGNoYW5nZSB0aGlzIGZ1bmN0aW9uIHRvIHVzZSBpbmxpbmUgc3R5bGVzLiBJIG9yaWdpbmFsbHkgY2hvc2UgYSBzdHlsZXNoZWV0IGJlY2F1c2UgSSBjb3VsZCBzZWxlY3QgbWFueSBlbGVtZW50cyB3aXRoIGFcbiAgICAvLyBzaW5nbGUgcnVsZSAoc29tZXRoaW5nIHRoYXQgaGFwcGVuZWQgYSBsb3QpLCB0aGUgYXBwcyBoYXMgY2hhbmdlZCBzbGlnaHRseSBub3cgdGhvdWdoLCBzbyBpbmxpbmUgc3R5bGVzIG1pZ2h0IGJlIG1vcmUgYXBwbGljYWJsZS5cbiAgICBmdW5jdGlvbiBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpO1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnY2MtY29sb3Itb3ZlcnJpZGUtJyArIGhhc2g7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gdXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpO1xuXG4gICAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsO1xuXG4gICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBhZGRDdXN0b21TdHlsZShoYXNoLCBwYWxldHRlLCAnLicgKyBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDdXN0b21TdHlsZShoYXNoLCBwYWxldHRlLCBwcmVmaXgpIHtcbiAgICAgIC8vIG9ubHkgYWRkIHRoaXMgaWYgYSBzdHlsZSBsaWtlIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmIChjYy5jdXN0b21TdHlsZXNbaGFzaF0pIHtcbiAgICAgICAgLy8gY3VzdG9tIHN0eWxlIGFscmVhZHkgZXhpc3RzLCBzbyBpbmNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudFxuICAgICAgICArK2NjLmN1c3RvbVN0eWxlc1toYXNoXS5yZWZlcmVuY2VzO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbG9yU3R5bGVzID0ge307XG4gICAgICBjb25zdCBwb3B1cCA9IHBhbGV0dGUucG9wdXA7XG4gICAgICBjb25zdCBidXR0b24gPSBwYWxldHRlLmJ1dHRvbjtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IHBhbGV0dGUuaGlnaGxpZ2h0O1xuXG4gICAgICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICBpZiAocG9wdXApIHtcbiAgICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dFxuICAgICAgICAgID8gcG9wdXAudGV4dFxuICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKTtcbiAgICAgICAgcG9wdXAubGluayA9IHBvcHVwLmxpbmsgPyBwb3B1cC5saW5rIDogcG9wdXAudGV4dDtcbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtdG9vbHRpcCddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF1cbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy13aW5kb3cnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdO1xuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXJldm9rZSddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6YWN0aXZlLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6dmlzaXRlZCdcbiAgICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXTtcblxuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgLy8gYXNzdW1lcyBidXR0b24uYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvbi50ZXh0XG4gICAgICAgICAgICA/IGJ1dHRvbi50ZXh0XG4gICAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QoYnV0dG9uLmJhY2tncm91bmQpO1xuICAgICAgICAgIGJ1dHRvbi5ib3JkZXIgPSBidXR0b24uYm9yZGVyID8gYnV0dG9uLmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10gPSBbXG4gICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBidXR0b24uYm9yZGVyLFxuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBidXR0b24uYmFja2dyb3VuZFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBpZiAoYnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgICAgICBwcmVmaXggKyAnIC5jYy1idG46aG92ZXIsICcgKyBwcmVmaXggKyAnIC5jYy1idG46Zm9jdXMnXG4gICAgICAgICAgICBdID0gW1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArXG4gICAgICAgICAgICAgICAgKGJ1dHRvbi5ob3ZlciB8fCBnZXRIb3ZlckNvbG91cihidXR0b24uYmFja2dyb3VuZCkpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0LmJvcmRlciA9IGhpZ2hsaWdodC5ib3JkZXJcbiAgICAgICAgICAgICAgPyBoaWdobGlnaHQuYm9yZGVyXG4gICAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIGhpZ2hsaWdodC50ZXh0LFxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJvcmRlcixcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2V0cyBoaWdobGlnaHQgdGV4dCBjb2xvciB0byBwb3B1cCB0ZXh0LiBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgYXJlIHRyYW5zcGFyZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0XG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXG4gICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgICAgLy8gY3VzdG9tIHN0eWxlIGRvZXNuJ3QgZXhpc3QsIHNvIHdlIGNyZWF0ZSBpdFxuICAgICAgY2MuY3VzdG9tU3R5bGVzW2hhc2hdID0ge1xuICAgICAgICByZWZlcmVuY2VzOiAxLFxuICAgICAgICBlbGVtZW50OiBzdHlsZS5zaGVldFxuICAgICAgfTtcblxuICAgICAgbGV0IHJ1bGVJbmRleCA9IC0xO1xuICAgICAgZm9yIChsZXQgcHJvcCBpbiBjb2xvclN0eWxlcykge1xuICAgICAgICBpZiAoY29sb3JTdHlsZXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKFxuICAgICAgICAgICAgcHJvcCArICd7JyArIGNvbG9yU3R5bGVzW3Byb3BdLmpvaW4oJzsnKSArICd9JyxcbiAgICAgICAgICAgICsrcnVsZUluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdmVyQ29sb3VyKGhleCkge1xuICAgICAgaGV4ID0gdXRpbC5ub3JtYWxpc2VIZXgoaGV4KTtcbiAgICAgIC8vIGZvciBibGFjayBidXR0b25zXG4gICAgICBpZiAoaGV4ID09ICcwMDAwMDAnKSB7XG4gICAgICAgIHJldHVybiAnIzIyMic7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXRpbC5nZXRMdW1pbmFuY2UoaGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDdXN0b21TdHlsZShwYWxldHRlKSB7XG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpO1xuICAgICAgICBjb25zdCBjdXN0b21TdHlsZSA9IGNjLmN1c3RvbVN0eWxlc1toYXNoXTtcbiAgICAgICAgaWYgKGN1c3RvbVN0eWxlICYmICEtLWN1c3RvbVN0eWxlLnJlZmVyZW5jZXMpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZU5vZGUgPSBjdXN0b21TdHlsZS5lbGVtZW50Lm93bmVyTm9kZTtcbiAgICAgICAgICBpZiAoc3R5bGVOb2RlICYmIHN0eWxlTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBzdHlsZU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZU5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYy5jdXN0b21TdHlsZXNbaGFzaF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICAgIGNvbnN0IHNldFN0YXR1c2VzID0gdGhpcy5zZXRTdGF0dXNlcy5iaW5kKHRoaXMpO1xuICAgICAgY29uc3QgY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5vcHRpb25zLmRpc21pc3NPblRpbWVvdXQ7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgICBjbG9zZSh0cnVlKTtcbiAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxSYW5nZSA9IHRoaXMub3B0aW9ucy5kaXNtaXNzT25TY3JvbGw7XG4gICAgICBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcbiAgICAgICAgY29uc3Qgb25XaW5kb3dTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gTWF0aC5mbG9vcihzY3JvbGxSYW5nZSkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgICAgIGNsb3NlKHRydWUpO1xuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gb25XaW5kb3dTY3JvbGw7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2luZG93Q2xpY2sgPSB0aGlzLm9wdGlvbnMuZGlzbWlzc09uV2luZG93Q2xpY2s7XG4gICAgICBjb25zdCBpZ25vcmVkQ2xpY2tzID0gdGhpcy5vcHRpb25zLmlnbm9yZUNsaWNrc0Zyb207XG4gICAgICBcbiAgICAgIGlmICh3aW5kb3dDbGljaykge1xuICAgICAgICBjb25zdCBvbldpbmRvd0NsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgY29uc3QgcGF0aCA9IGV2dC5jb21wb3NlZFBhdGggPyBldnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICAgIH0pKFtdLGV2dC50YXJnZXQgKVxuICAgICAgICAgIGlmICggIXBhdGggKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oIFwiJy5wYXRoJyAmICcuY29tcG9zZWRQYXRoJyBmYWlsZWQgdG8gZ2VuZXJhdGUgYW4gZXZlbnQgcGF0aC5cIiApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCAhcGF0aC5zb21lKCBlbGVtZW50ID0+IGlnbm9yZWRDbGlja3Muc29tZSggaWdub3JlZENsaWNrID0+IGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBpZ25vcmVkQ2xpY2sgKSApICkgKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcylcbiAgICAgICAgICAgIGNsb3NlKHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG9uV2luZG93Q2xpY2s7XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5UmV2b2tlQnV0dG9uKCkge1xuICAgICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJykgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWU7XG4gICAgICAvLyBhbmltYXRlUmV2b2thYmxlIGZhbHNlIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgICAgaWYgKHV0aWwuaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnY2MtdGhlbWUtJyt0aGlzLm9wdGlvbnMudGhlbWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgY2xhc3Nlcy5qb2luKCcgJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cG9saWN5fX0nLCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kpO1xuXG4gICAgICAgIHRoaXMucmV2b2tlQnRuID0gYXBwZW5kTWFya3VwLmNhbGwodGhpcywgcmV2b2tlQnRuKTtcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnJldm9rZUJ0bjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB1dGlsLnRocm90dGxlKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgbWluWSA9IDIwO1xuICAgICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwO1xuXG4gICAgICAgICAgICBpZiAoICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXRvcCcgKSAmJiBldnQuY2xpZW50WSA8IG1pblkgKSB8fFxuICAgICAgICAgICAgICAgICAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1ib3R0b20nICkgJiYgZXZ0LmNsaWVudFkgPiBtYXhZICkgKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGl2ZSAmJiAhYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvb2tpZVBvcHVwO1xuICB9KSgpO1xuXG4gIGNjLkxvY2F0aW9uID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbG9jYXRpb24gc2VydmljZXMgd2UgaGF2ZSBhbHJlYWR5IHNldCB1cC5cbiAgICAvLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcbiAgICAvLyBXaGVuIHRoZSByZXNwb25zZSBuZWVkcyB0byBiZSBleGVjdXRlZCBieSB0aGUgYnJvd3NlciwgdGhlbiBgaXNTY3JpcHRgIG11c3QgYmUgc2V0IHRvIHRydWUsIG90aGVyd2lzZSBpdCB3b24ndCB3b3JrLlxuXG4gICAgLy8gV2hlbiB0aGUgc2VydmljZSB1c2VzIGEgc2NyaXB0LCB0aGUgY2hhbmNlcyBhcmUgdGhhdCB5b3UnbGwgaGF2ZSB0byB1c2UgdGhlIHNjcmlwdCB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMuIEluIHRoZXNlXG4gICAgLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxuICAgIC8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIFRoZSBkZWZhdWx0IHRpbWVvdXQgaXMgNSBzZWNvbmRzLiBUaGlzIGlzIG1haW5seSBuZWVkZWQgdG8gY2F0Y2ggSlNPTlAgcmVxdWVzdHMgdGhhdCBlcnJvci5cbiAgICAgIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcbiAgICAgIC8vIGFwcCB3aWxsIHRha2UgYHRpbWVvdXRgIG1pbGxpc2Vjb25kcyB0byByZWFjdCB0byBhIEpTT05QIG5ldHdvcmsgZXJyb3IuXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuXG4gICAgICAvLyB0aGUgb3JkZXIgdGhhdCBzZXJ2aWNlcyB3aWxsIGJlIGF0dGVtcHRlZCBpblxuICAgICAgc2VydmljZXM6IFtcbiAgICAgICAgJ2lwaW5mbydcblxuICAgICAgICAvKlxuXG4gICAgICAgIC8vICdpcGluZm9kYicgcmVxdWlyZXMgc29tZSBvcHRpb25zLCBzbyB3ZSBkZWZpbmUgaXQgdXNpbmcgYW4gb2JqZWN0XG4gICAgICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcblxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2lwaW5mb2RiJyxcbiAgICAgICAgICBpbnRlcnBvbGF0ZVVybDoge1xuICAgICAgICAgICAgLy8gb2J2aW91c2x5LCB0aGlzIGlzIGEgZmFrZSBrZXlcbiAgICAgICAgICAgIGFwaV9rZXk6ICd2T2dJMzc0OGRuSXl0SXJzSmN4Uzdxc0RmNmtiSmtFOWxONHlFRHJYQXFYY0tVTnZqalpQb3gzZWtYcW1NTWxkJ1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gYXMgd2VsbCBhcyBkZWZpbmluZyBhbiBvYmplY3QsIHlvdSBjYW4gZGVmaW5lIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdFxuXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge25hbWU6ICdpcGluZm9kYid9O1xuICAgICAgICB9LFxuXG4gICAgICAgICovXG4gICAgICBdLFxuXG4gICAgICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcbiAgICAgICAgaXBpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6ICcvL2lwaW5mby5pbycsXG4gICAgICAgICAgICBoZWFkZXJzOiBbJ0FjY2VwdDogYXBwbGljYXRpb24vanNvbiddLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXG4gICAgICAgICAgICAgICAgICA/IHRvRXJyb3IoanNvbilcbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgICAgIGlwaW5mb2RiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RhdHVzQ29kZSA9PSAnRVJST1InXG4gICAgICAgICAgICAgICAgICA/IHRvRXJyb3Ioe2Vycm9yOiBqc29uLnN0YXR1c01lc3NhZ2V9KVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5Q29kZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1heG1pbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIG1ha2UgYW4gYWRkaXRpb25hbCBBSkFYIGNhbGwuIFRoZXJlZm9yZSB3ZSBwcm92aWRlIGEgYGRvbmVgIGNhbGxiYWNrIHRoYXQgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICAgICAgdXJsOiAnLy9qcy5tYXhtaW5kLmNvbS9qcy9hcGlzL2dlb2lwMi92Mi4xL2dlb2lwMi5qcycsXG4gICAgICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgICAgICAvLyBpZiBldmVyeXRoaW5nIHdlbnQgb2theSB0aGVuIGBnZW9pcDJgIFdJTEwgYmUgZGVmaW5lZFxuICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcbiAgICAgICAgICAgICAgICBkb25lKFxuICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGxvY2F0aW9uLmNvdW50cnkuaXNvX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cbiAgICAgICAgICAgICAgLy8gVGhlbiB3ZSBjYW4gJ2NvbXBsZXRlJyB0aGUgc2VydmljZSBieSBwYXNzaW5nIGRhdGEgb3IgYW4gZXJyb3IgdG8gdGhlIGBkb25lYCBjYWxsYmFjay5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExvY2F0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFNldCB1cCBvcHRpb25zXG4gICAgICB1dGlsLmRlZXBFeHRlbmQoKHRoaXMub3B0aW9ucyA9IHt9KSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMTsgLy8gdGhlIGluZGV4IChpbiBvcHRpb25zKSBvZiB0aGUgc2VydmljZSB3ZSdyZSBjdXJyZW50bHkgdXNpbmdcbiAgICB9XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0TmV4dFNlcnZpY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzZXJ2aWNlO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleCk7XG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4IDwgdGhpcy5vcHRpb25zLnNlcnZpY2VzLmxlbmd0aCAmJlxuICAgICAgICAhc2VydmljZVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRTZXJ2aWNlQnlJZHggPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgIC8vIFRoaXMgY2FuIGVpdGhlciBiZSB0aGUgbmFtZSBvZiBhIGRlZmF1bHQgbG9jYXRpb25TZXJ2aWNlLCBvciBhIGZ1bmN0aW9uLlxuICAgICAgY29uc3Qgc2VydmljZU9wdGlvbiA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1tpZHhdO1xuXG4gICAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKTtcbiAgICAgICAgcmV0dXJuIGR5bmFtaWNPcHRzLm5hbWUgPyBcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkeW5hbWljT3B0cyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbIGR5bmFtaWNPcHRzLm5hbWUgXSggZHluYW1pY09wdHMgKVxuICAgICAgICAgICkgOiBkeW5hbWljT3B0cztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBhc3N1bWUge25hbWU6ICdpcGluZm8nLCAuLi5vdGhlck9wdGlvbnN9XG4gICAgICAvLyBBbGxvd3MgdXNlciB0byBwYXNzIGluIEFQSSBrZXlzIGV0Yy5cbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qoc2VydmljZU9wdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbi5uYW1lXShcbiAgICAgICAgICBzZXJ2aWNlT3B0aW9uXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXG4gICAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUubG9jYXRlID0gZnVuY3Rpb24oY29tcGxldGUsIGVycm9yKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpO1xuXG4gICAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgICAgZXJyb3IobmV3IEVycm9yKCdObyBzZXJ2aWNlcyB0byBydW4nKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWxsYmFja0NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvcjtcblxuICAgICAgdGhpcy5ydW5TZXJ2aWNlKHNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpO1xuICAgIH07XG5cbiAgICAvLyBQb3RlbnRpYWxseSBhZGRzIGEgY2FsbGJhY2sgdG8gYSB1cmwgZm9yIGpzb25wLlxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5zZXR1cFVybCA9IGZ1bmN0aW9uKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2VPcHRzID0gdGhpcy5nZXRDdXJyZW50U2VydmljZU9wdHMoKTtcbiAgICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xuICAgICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpO1xuICAgICAgICAgIHdpbmRvd1t0ZW1wTmFtZV0gPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW0gaW4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmwpIHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmxbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1blNlcnZpY2UgPSBmdW5jdGlvbihzZXJ2aWNlLCBjb21wbGV0ZSkge1xuICAgICAgLy8gYmFzaWMgY2hlY2sgdG8gZW5zdXJlIGl0IHJlc2VtYmxlcyBhIGBzZXJ2aWNlYFxuICAgICAgaWYgKCFzZXJ2aWNlIHx8ICFzZXJ2aWNlLnVybCB8fCAhc2VydmljZS5jYWxsYmFjaykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGNhbGwgZWl0aGVyIGBnZXRTY3JpcHRgIG9yIGBtYWtlQXN5bmNSZXF1ZXN0YCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgcmVzb3VyY2VcbiAgICAgIGNvbnN0IHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0O1xuXG4gICAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxuICAgICAgcmVxdWVzdEZ1bmN0aW9uKFxuICAgICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxuICAgICAgICB4aHIgPT4ge1xuICAgICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxuICAgICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJyc7XG5cbiAgICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMgYSBzY3JpcHQsIHRoZW4gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBydW4uXG4gICAgICAgICAgLy8gaWYgdGhlIHNjcmlwdCBpcyBKU09OUCwgdGhlbiBhIHRpbWUgZGVmaW5lZCBmdW5jdGlvbiBgY2FsbGJhY2tfe0RhdGUubm93fWAgaGFzIGFscmVhZHlcbiAgICAgICAgICAvLyBiZWVuIGNhbGxlZCAoYXMgdGhlIEpTT05QIGNhbGxiYWNrKS4gVGhpcyBjYWxsYmFjayBzZXRzIHRoZSBfX0pTT05QX0RBVEEgcHJvcGVydHlcbiAgICAgICAgICBpZiAoc2VydmljZS5fX0pTT05QX0RBVEEpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHNlcnZpY2UuX19KU09OUF9EQVRBO1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNhbGwgdGhlIHNlcnZpY2UgY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2UgdGV4dCAoc28gaXQgY2FuIHBhcnNlIHRoZSByZXNwb25zZSlcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2VDYWxsYmFjay5jYWxsKHRoaXMsIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQpO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcbiAgICAgICAgc2VydmljZS5kYXRhLFxuICAgICAgICBzZXJ2aWNlLmhlYWRlcnNcbiAgICAgICk7XG5cbiAgICAgIC8vIGBzZXJ2aWNlLmRhdGFgIGFuZCBgc2VydmljZS5oZWFkZXJzYCBhcmUgb3B0aW9uYWwgKHRoZXkgb25seSBjb3VudCBpZiBgIXNlcnZpY2UuaXNTY3JpcHRgIGFueXdheSlcbiAgICB9O1xuXG4gICAgLy8gVGhlIHNlcnZpY2UgcmVxdWVzdCBoYXMgcnVuIChhbmQgcG9zc2libHkgaGFzIGEgYHJlc3BvbnNlVGV4dGApIFtubyBgcmVzcG9uc2VUZXh0YCBpZiBgaXNTY3JpcHRgXVxuICAgIC8vIFdlIG5lZWQgdG8gcnVuIGl0cyBjYWxsYmFjayB3aGljaCBkZXRlcm1pbmVzIGlmIGl0cyBzdWNjZXNzZnVsIG9yIG5vdFxuICAgIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5TZXJ2aWNlQ2FsbGJhY2sgPSBmdW5jdGlvbihcbiAgICAgIGNvbXBsZXRlLFxuICAgICAgc2VydmljZSxcbiAgICAgIHJlc3BvbnNlVGV4dFxuICAgICkge1xuICAgICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXG4gICAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcbiAgICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXG4gICAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIGFzeW5jUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gdGhlIGZ1bmN0aW9uIGBzZXJ2aWNlLmNhbGxiYWNrYCB3aWxsIGVpdGhlciBleHRyYWN0IGEgY291bnRyeSBjb2RlIGZyb20gYHJlc3BvbnNlVGV4dGAgYW5kIHJldHVybiBpdCAoaW4gYHJlc3VsdGApXG4gICAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XG4gICAgICBjb25zdCByZXN1bHQgPSBzZXJ2aWNlLmNhbGxiYWNrKHNlcnZpY2VSZXN1bHRIYW5kbGVyLCByZXNwb25zZVRleHQpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cbiAgICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5vblNlcnZpY2VSZXN1bHQgPSBmdW5jdGlvbihjb21wbGV0ZSwgcmVzdWx0KSB7XG4gICAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcbiAgICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBpZiBgZXJyYCBpcyBzZXQsIHRoZSBuZXh0IHNlcnZpY2UgaGFuZGxlciBpcyBjYWxsZWRcbiAgICAvLyBpZiBgZXJyYCBpcyBudWxsLCB0aGUgYG9uQ29tcGxldGVgIGhhbmRsZXIgaXMgY2FsbGVkIHdpdGggYGRhdGFgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1bk5leHRTZXJ2aWNlT25FcnJvciA9IGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLmxvZ0Vycm9yKGVycik7XG5cbiAgICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKCk7XG5cbiAgICAgICAgaWYgKG5leHRTZXJ2aWNlKSB7XG4gICAgICAgICAgdGhpcy5ydW5TZXJ2aWNlKG5leHRTZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcbiAgICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbCh0aGlzLCB0aGlzLmNhbGxiYWNrQ29tcGxldGUsIGRhdGEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0Q3VycmVudFNlcnZpY2VPcHRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XVxuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ge25hbWU6IHZhbH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB2YWwoKVxuICAgICAgfWVsc2UgaWYgKHV0aWwuaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICAgIHJldHVybiB2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmNvbXBsZXRlU2VydmljZSA9IGZ1bmN0aW9uKGZuLCBkYXRhKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMTtcblxuICAgICAgZm4gJiYgZm4oZGF0YSk7XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2dFcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jdXJyZW50U2VydmljZUluZGV4O1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KGlkeCk7XG5cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1RoZSBzZXJ2aWNlWycgK1xuICAgICAgICAgIGlkeCArXG4gICAgICAgICAgJ10gKCcgK1xuICAgICAgICAgIHNlcnZpY2UudXJsICtcbiAgICAgICAgICAnKSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JpcHQodXJsLCBjYWxsYmFjaywgdGltZW91dCkge1xuICAgICAgbGV0IHRpbWVvdXRJZHg7XG4gICAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgIHMudHlwZSA9ICd0ZXh0LycgKyAodXJsLnR5cGUgfHwgJ2phdmFzY3JpcHQnKTtcbiAgICAgIHMuc3JjID0gdXJsLnNyYyB8fCB1cmw7XG4gICAgICBzLmFzeW5jID0gZmFsc2U7XG5cbiAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHMucmVhZHlTdGF0ZTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkeCk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjay5kb25lICYmICghc3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzdGF0ZSkpKSB7XG4gICAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWU7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcblxuICAgICAgLy8gWW91IGNhbid0IGNhdGNoIEpTT05QIEVycm9ycywgYmVjYXVzZSBpdCdzIGhhbmRsZWQgYnkgdGhlIHNjcmlwdCB0YWdcbiAgICAgIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICAgICAgdGltZW91dElkeCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBc3luY1JlcXVlc3QoXG4gICAgICB1cmwsXG4gICAgICBvbkNvbXBsZXRlLFxuICAgICAgdGltZW91dCxcbiAgICAgIHBvc3REYXRhLFxuICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICApIHtcbiAgICAgIGNvbnN0IHhociA9IG5ldyAod2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5BY3RpdmVYT2JqZWN0KShcbiAgICAgICAgJ01TWE1MMi5YTUxIVFRQLjMuMCdcbiAgICAgICk7XG5cbiAgICAgIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSk7XG5cbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RIZWFkZXJzKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0ID0gcmVxdWVzdEhlYWRlcnNbaV0uc3BsaXQoJzonLCAyKTtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgICAgIHNwbGl0WzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgICAgIHNwbGl0WzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoeGhyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5zZW5kKHBvc3REYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0Vycm9yKG9iaikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXJyb3IgWycgKyAob2JqLmNvZGUgfHwgJ1VOS05PV04nKSArICddOiAnICsgb2JqLmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTG9jYXRpb247XG4gIH0pKCk7XG5cbiAgY2MuTGF3ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gICAgICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXG4gICAgICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgICAgIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBlbmZvcmNlIHNvbWUgdmVyc2lvbiBvZiBhIGNvb2tpZSBsYXdcbiAgICAgIGhhc0xhdzogW1xuICAgICAgICAnQVQnLFxuICAgICAgICAnQkUnLFxuICAgICAgICAnQkcnLFxuICAgICAgICAnSFInLFxuICAgICAgICAnQ1onLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRkknLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnRUwnLFxuICAgICAgICAnSFUnLFxuICAgICAgICAnSUUnLFxuICAgICAgICAnSVQnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTFUnLFxuICAgICAgICAnTVQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUEwnLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnU0snLFxuICAgICAgICAnRVMnLFxuICAgICAgICAnU0UnLFxuICAgICAgICAnR0InLFxuICAgICAgICAnVUsnLFxuICAgICAgICAnR1InLFxuICAgICAgICAnRVUnLFxuICAgICAgICAnUk8nXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gICAgICByZXZva2FibGU6IFtcbiAgICAgICAgJ0hSJyxcbiAgICAgICAgJ0NZJyxcbiAgICAgICAgJ0RLJyxcbiAgICAgICAgJ0VFJyxcbiAgICAgICAgJ0ZSJyxcbiAgICAgICAgJ0RFJyxcbiAgICAgICAgJ0xWJyxcbiAgICAgICAgJ0xUJyxcbiAgICAgICAgJ05MJyxcbiAgICAgICAgJ05PJyxcbiAgICAgICAgJ1BUJyxcbiAgICAgICAgJ0VTJ1xuICAgICAgXSxcblxuICAgICAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gICAgICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxuICAgICAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBMYXcob3B0aW9ucykge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgTGF3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gc2V0IG9wdGlvbnMgYmFjayB0byBkZWZhdWx0IG9wdGlvbnNcbiAgICAgIHV0aWwuZGVlcEV4dGVuZCgodGhpcy5vcHRpb25zID0ge30pLCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIC8vIG1lcmdlIGluIHVzZXIgb3B0aW9uc1xuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB1dGlsLmRlZXBFeHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihjb3VudHJ5Q29kZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcbiAgICAgIH07XG4gICAgfTtcblxuICAgIExhdy5wcm90b3R5cGUuYXBwbHlMYXcgPSBmdW5jdGlvbihvcHRpb25zLCBjb3VudHJ5Q29kZSkge1xuICAgICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKTtcblxuICAgICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xuICAgICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uTm9Db29raWVMYXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uTm9Db29raWVMYXcoY291bnRyeUNvZGUsIGNvdW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcbiAgICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XG4gICAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcbiAgICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xuICAgICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cbiAgICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExhdztcbiAgfSkoKTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuICAvLyBZb3UgY2FuIHN0cmluZyB0b2dldGhlciB0aGVzZSB0aHJlZSBtb2R1bGVzIHlvdXJzZWxmIGhvd2V2ZXIgeW91IHdhbnQsIGJ5IHdyaXRpbmcgYSBuZXcgZnVuY3Rpb24uXG4gIGNjLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zLCBjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBjb25zdCBsYXcgPSBuZXcgY2MuTGF3KG9wdGlvbnMubGF3KTtcblxuICAgIGlmICghY29tcGxldGUpIGNvbXBsZXRlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBpZiAoIWVycm9yKSBlcnJvciA9IGZ1bmN0aW9uKCkge307XG5cbiAgICBjb25zdCBhbnN3ZXJzID0gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLm1hcCggY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgYW5zd2VyID0gdXRpbC5nZXRDb29raWUoJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzXycrY2F0ZWdvcnkpXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnldOiBhbnN3ZXIgfSA6IHVuZGVmaW5lZFxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpO1xuXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWRcbiAgICBpZiAoYW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb21wbGV0ZShhbnN3ZXJzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYy5nZXRDb3VudHJ5Q29kZShcbiAgICAgIG9wdGlvbnMsXG4gICAgICBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0aGUgbGF3IG9yIGxvY2F0aW9uIG9wdGlvbnMgYW55bW9yZVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5sYXc7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxvY2F0aW9uO1xuXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSkge1xuICAgICAgICAgIG9wdGlvbnMgPSBsYXcuYXBwbHlMYXcob3B0aW9ucywgcmVzdWx0LmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcGxldGUobmV3IGNjLlBvcHVwKG9wdGlvbnMpKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0aGUgbGF3IG9yIGxvY2F0aW9uIG9wdGlvbnMgYW55bW9yZVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5sYXc7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxvY2F0aW9uO1xuXG4gICAgICAgIGVycm9yKGVyciwgbmV3IGNjLlBvcHVwKG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gZmluZCB5b3VyIGN1cnJlbnQgbG9jYXRpb24uIEl0IGVpdGhlciBncmFicyBpdCBmcm9tIGEgaGFyZGNvZGVkIG9wdGlvbiBpblxuICAvLyBgb3B0aW9ucy5sYXcuY291bnRyeUNvZGVgLCBvciBhdHRlbXB0cyB0byBtYWtlIGEgbG9jYXRpb24gc2VydmljZSByZXF1ZXN0LiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHNcbiAgLy8gb3B0aW9ucyAod2hpY2ggY2FuIGNvbmZpZ3VyZSB0aGUgYGxhd2AgYW5kIGBsb2NhdGlvbmAgbW9kdWxlcykgYW5kIGZpcmVzIGEgY2FsbGJhY2sgd2l0aCB3aGljaFxuICAvLyBwYXNzZXMgYW4gb2JqZWN0IGB7Y29kZTogY291bnRyeUNvZGV9YCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgKHdoaWNoIGNhbiBoYXZlIHVuZGVmaW5lZCBwcm9wZXJ0aWVzKVxuICBjYy5nZXRDb3VudHJ5Q29kZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGlmIChvcHRpb25zLmxhdyAmJiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZSkge1xuICAgICAgY29tcGxldGUoe1xuICAgICAgICBjb2RlOiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBsb2NhdG9yID0gbmV3IGNjLkxvY2F0aW9uKG9wdGlvbnMubG9jYXRpb24pO1xuICAgICAgbG9jYXRvci5sb2NhdGUoZnVuY3Rpb24oc2VydmljZVJlc3VsdCkge1xuICAgICAgICBjb21wbGV0ZShzZXJ2aWNlUmVzdWx0IHx8IHt9KTtcbiAgICAgIH0sIGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29tcGxldGUoe30pO1xuICB9O1xuXG4gIC8vIGV4cG9ydCB1dGlscyAobm8gcG9pbnQgaW4gaGlkaW5nIHRoZW0sIHNvIHdlIG1heSBhcyB3ZWxsIGV4cG9zZSB0aGVtKVxuICBjYy51dGlscyA9IHV0aWw7XG5cbiAgLy8gcHJldmVudCB0aGlzIGNvZGUgZnJvbSBiZWluZyBydW4gdHdpY2VcbiAgY2MuaGFzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gIHdpbmRvdy5jb29raWVjb25zZW50ID0gY2M7XG59KSh3aW5kb3cuY29va2llY29uc2VudCB8fCB7fSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9