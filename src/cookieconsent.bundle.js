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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src/index.js!./src/styles/main.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/src!./src/styles/main.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalises the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block;\n      background: rgba(221, 221, 221, 0.6); }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


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
        categories: " ul class=\"cc-categories\"<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"0\"><input type=\"checkbox\" name=\"uncategorized\"/><span class=\"cc-btn-checkbox\"></span>Uncategorized</button<button class=\"cc-btn cc-info\" aria-label=\"Uncategorized Definition Button\" tabindex=\"1\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies that don't fit any other category.</p</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"2\"><input type=\"checkbox\" name=\"essential\" checked disabled/><span class=\"cc-btn-checkbox\"></span>Essential</button<button class=\"cc-btn cc-info\" aria-label=\"Essential Definition Button\" tabindex=\"3\">^</button<div class=\"cc-tooltip\"<p>This is the category for essential application or website opperation cookies.</p</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"4\"><input type=\"checkbox\" name=\"personalization\"/><span class=\"cc-btn-checkbox\"></span>Personalization</button<button class=\"cc-btn cc-info\" aria-label=\"Personalization Definition Button\" tabindex=\"5\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies used to help peronalize the application to a specific user.</p</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"6\"><input type=\"checkbox\" name=\"analytics\"/><span class=\"cc-btn-checkbox\"></span>Analytics</button<button class=\"cc-btn cc-info\" aria-label=\"Analytics Definition Button\" tabindex=\"7\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies used to help analyize data.</p</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"8\"><input type=\"checkbox\" name=\"marketing\"/><span class=\"cc-btn-checkbox\"></span>Marketing</button<button class=\"cc-btn cc-info\" aria-label=\"Marketing Definition Button\" tabindex=\"9\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies used to help peronalize your internet shopping & advertisement experiences.</p</div</li</ul",
        save: "<button class=\"cc-btn cc-save\">Save</button>" //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

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
        colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2E0M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImRlZXBFeHRlbmQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJpc1BsYWluT2JqZWN0IiwiZ2V0Q29va2llIiwibmFtZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9wIiwic2hpZnQiLCJzZXRDb29raWUiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsImV4ZGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJ0aHJvdHRsZSIsImxpbWl0Iiwid2FpdCIsImFwcGx5Iiwic2V0VGltZW91dCIsImhhc2giLCJpIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGlzZUhleCIsImhleCIsInN1YnN0ciIsImdldENvbnRyYXN0IiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJnZXRMdW1pbmFuY2UiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJ0cmF2ZXJzZURPTVBhdGgiLCJlbGVtIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3RhdHVzIiwiZGVueSIsImFsbG93IiwiZGlzbWlzcyIsImNhdGVnb3J5IiwidW5jYXRlZ29yaXplZCIsImVzc2VudGlhbCIsInBlcnNvbmFsaXphdGlvbiIsImFuYWx5dGljcyIsIm1hcmtldGluZyIsImlzVmFsaWRTdGF0dXMiLCJrZXlzIiwiaW5kZXhPZiIsInRyYW5zaXRpb25FbmQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4Iiwic3R5bGUiLCJoYXNUcmFuc2l0aW9uIiwiY3VzdG9tU3R5bGVzIiwiUG9wdXAiLCJkZWZhdWx0T3B0aW9ucyIsImVuYWJsZWQiLCJjb250YWluZXIiLCJvblBvcHVwT3BlbiIsIm9uUG9wdXBDbG9zZSIsIm9uSW5pdGlhbGl6ZSIsInN0YXR1c2VzIiwib25TdGF0dXNDaGFuZ2UiLCJjb29raWVOYW1lIiwiY2hvc2VuQmVmb3JlIiwib25SZXZva2VDaG9pY2UiLCJvbk5vQ29va2llTGF3IiwiY291bnRyeUNvZGUiLCJjb3VudHJ5IiwiY29udGVudCIsImhlYWRlciIsIm1lc3NhZ2UiLCJsaW5rIiwiaHJlZiIsImNsb3NlIiwicG9saWN5IiwiZWxlbWVudHMiLCJtZXNzYWdlbGluayIsImNhdGVnb3JpZXMiLCJzYXZlIiwid2luZG93IiwibW9kYWwiLCJyZXZva2VCdG4iLCJjb21wbGlhbmNlIiwiaW5mbyIsInR5cGUiLCJsYXlvdXRzIiwiYmFzaWMiLCJsYXlvdXQiLCJwb3NpdGlvbiIsInRoZW1lIiwicGFsZXR0ZSIsInJldm9rYWJsZSIsImFuaW1hdGVSZXZva2FibGUiLCJzaG93TGluayIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImlnbm9yZUNsaWNrc0Zyb20iLCJhdXRvT3BlbiIsImF1dG9BdHRhY2giLCJtb2JpbGVGb3JjZUZsb2F0Iiwid2hpdGVsaXN0UGFnZSIsImJsYWNrbGlzdFBhZ2UiLCJvdmVycmlkZUhUTUwiLCJDb29raWVQb3B1cCIsImluaXRpYWxpemUiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwiZGVzdHJveSIsImNoZWNrQ2FsbGJhY2tIb29rcyIsImNhbGwiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc21pc3NUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25XaW5kb3dTY3JvbGwiLCJvbldpbmRvd0NsaWNrIiwib25Nb3VzZU1vdmUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUN1c3RvbVN0eWxlIiwib3BlbiIsImlzT3BlbiIsImZhZGVJbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsInNob3dSZXZva2UiLCJmYWRlT3V0IiwiYWZ0ZXJUcmFuc2l0aW9uIiwiYWZ0ZXJGYWRlT3V0IiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmFkZUluVGltZW91dCIsIm9wZW5pbmdUaW1lb3V0IiwiYWZ0ZXJGYWRlSW4iLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VDaG9pY2UiLCJwcmV2ZW50T3BlbiIsImNsZWFyU3RhdHVzZXMiLCJoYXNBbnN3ZXJlZCIsImdldFN0YXR1c2VzIiwic29tZSIsImhhc0NvbnNlbnRlZCIsIm1hcCIsInNldFN0YXR1c2VzIiwidXBkYXRlQ2F0ZWdvcnlTdGF0dXMiLCJjYXRlZ29yeU5hbWUiLCJmb3JFYWNoIiwiY2F0ZWdvcnlTdGF0dXMiLCJpbmRleCIsInJlbW92ZSIsImNvbXBsZXRlIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJmaWx0ZXIiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiY2xhc3NlcyIsInB1c2giLCJhdHRhY2hDdXN0b21QYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImludGVycG9sYXRlZCIsImNvbXBsaWFuY2VUeXBlIiwibWFya3VwIiwiZGl2IiwiY29udCIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tib3giLCJjaGVja2VkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsIlJlZ0V4cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZSIsInJlZmVyZW5jZXMiLCJjb2xvclN0eWxlcyIsInBvcHVwIiwiYnV0dG9uIiwiaGlnaGxpZ2h0IiwidGV4dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG91ciIsImhlYWQiLCJzaGVldCIsInJ1bGVJbmRleCIsImluc2VydFJ1bGUiLCJjdXN0b21TdHlsZSIsInN0eWxlTm9kZSIsIm93bmVyTm9kZSIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsUmFuZ2UiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJ3aW5kb3dDbGljayIsImlnbm9yZWRDbGlja3MiLCJldnQiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJjb25zb2xlIiwid2FybiIsImlnbm9yZWRDbGljayIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwiTG9jYXRpb24iLCJ0aW1lb3V0Iiwic2VydmljZXMiLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpcGluZm8iLCJ1cmwiLCJoZWFkZXJzIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiZXJyb3IiLCJ0b0Vycm9yIiwiY29kZSIsImVyciIsImlwaW5mb2RiIiwiaXNTY3JpcHQiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJFcnJvciIsImlzb19jb2RlIiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsImlkeCIsInNlcnZpY2VPcHRpb24iLCJkeW5hbWljT3B0cyIsImFzc2lnbiIsImxvY2F0ZSIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJfIiwicGFyYW0iLCJ0ZW1wTmFtZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsImludGVycG9sYXRlVXJsIiwicmVxdWVzdEZ1bmN0aW9uIiwiZ2V0U2NyaXB0IiwibWFrZUFzeW5jUmVxdWVzdCIsInhociIsInJlc3BvbnNlVGV4dCIsInJ1blNlcnZpY2VDYWxsYmFjayIsImRhdGEiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0IiwicmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsInZhbCIsImZuIiwidGltZW91dElkeCIsInMiLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImwiLCJzZW5kIiwiTGF3IiwicmVnaW9uYWxMYXciLCJoYXNMYXciLCJleHBsaWNpdEFjdGlvbiIsImdldCIsImFwcGx5TGF3IiwibGF3IiwiYW5zd2VycyIsImFuc3dlciIsImdldENvdW50cnlDb2RlIiwibG9jYXRvciIsInNlcnZpY2VSZXN1bHQiLCJ1dGlscyIsImNvb2tpZWNvbnNlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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RUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFD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QU0sQ0FBQ3NRLGFBQVAsR0FBdUJyWSxFQUF2QjtBQUNELENBbHREQSxDQWt0REUrSCxNQUFNLENBQUNzUSxhQUFQLElBQXdCLEVBbHREMUIsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNIQSxjQUFjLG1CQUFPLENBQUMsbVNBQXFKOztBQUUzSyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImNvb2tpZWNvbnNlbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29va2llY29uc2VudC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7IH1cXG5cXG4uY2Mtd2luZG93LmNjLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLyogb25seSBhbmltYXRlIGlmaGFzIGNsYXNzICdjYy1hbmltYXRlJyAqL1xcbi5jYy1hbmltYXRlLmNjLXJldm9rZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1ncm93ZXIge1xcbiAgLyogSW5pdGlhbGx5IHdlIGRvbid0IHdhbnQgYW55IGhlaWdodCwgYW5kIHdlIHdhbnQgdGhlIGNvbnRlbnRzIHRvIGJlIGhpZGRlbiAqL1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBTZXQgb3VyIHRyYW5zaXRpb25zIHVwLiAqL1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxczsgfVxcblxcbi8qIHRoZSBwb3B1cCB3aW5kb3cgKi9cXG4uY2Mtd2luZG93LFxcbi5jYy1yZXZva2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBleGNsdWRlIHBhZGRpbmcgd2hlbiBkZWFsaW5nIHdpdGggd2lkdGggKi9cXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIENhbGlicmksIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLyogYnkgc2V0dGluZyB0aGUgYmFzZSBmb250IGhlcmUsIHdlIGNhbiBzaXplIHRoZSByZXN0IG9mIHRoZSBwb3B1cCB1c2luZyBDU1MgYGVtYCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLyogdGhlIGZvbGxvd2luZyBhcmUgcmFuZG9tIHVuanVzdGlmaWVkIHN0eWxlcyAtIGp1c3QgYmVjYXVzZSAtIHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkICovXFxuICB6LWluZGV4OiA5OTk5OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbi8qIDIgYmFzaWMgdHlwZXMgb2Ygd2luZG93IC0gZmxvYXRpbmcgLyBiYW5uZXIgKi9cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG4gIC8qIDFlbSA9PSAxNnB4IHRoZXJlZm9yZSAyNGVtID09IDM4NHB4ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgcGFkZGluZzogMWVtIDEuOGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyogY2xpY2thYmxlIHRoaW5ncyAqL1xcbi5jYy1idG4sXFxuLmNjLWxpbmssXFxuLmNjLWNsb3NlLFxcbi5jYy1yZXZva2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNjLWxpbmsge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1saW5rOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2MtbGluazphY3RpdmUsXFxuLmNjLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5pdGlhbDsgfVxcblxcbi5jYy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmhvdmVyLFxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVlbTtcXG4gIHJpZ2h0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBvcGFjaXR5OiAwLjk7XFxuICAvKiBzZWVpbmcgYXMgdGhpcyBjb250YWlucyB0ZXh0IGFuZCBub3QgYW4gaW1hZ2UsIHRoZSBlbGVtZW50IHRhbGxlciB0aGFuIGl0IGlzIHdpZGUgKGJlY2F1c2UgaXQgaXMgdGV4dCkgKi9cXG4gIC8qICAtIHdlIHdhbnQgaXQgdG8gYmUgYSBzcXVhcmUsIGJlY2F1c2UgaXQncyBhY3RpbmcgYXMgYW4gaWNvbiAqL1xcbiAgLyogIC0gc2V0dGluZyB0aGUgbGluZSBoZWlnaHQgbm9ybWFsaXNlcyB0aGUgaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogMC43NTsgfVxcblxcbi5jYy1jbG9zZTpob3ZlcixcXG4uY2MtY2xvc2U6Zm9jdXMge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qIFRoaXMgZmlsZSBzaG91bGQgY29udGFpbiBzdHlsZXMgdGhhdCBtb2RpZmllcyB0aGUgcG9wdXAgbGF5b3V0LiAqL1xcbi8qIEJ5IGxheW91dCwgd2UgbWVhbiB0aGUgcGh5c2ljYWwgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIHRoZSBwb3B1cCB3aW5kb3csIGFuZCB0aGUgbWFyZ2luIC8gcGFkZGluZyBhcm91bmQgdGhvc2UgZWxlbWVudHMuICovXFxuLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtbGVmdCB7XFxuICBsZWZ0OiAzZW07XFxuICByaWdodDogdW5zZXQ7IH1cXG5cXG4uY2MtcmV2b2tlLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAzZW07XFxuICBsZWZ0OiB1bnNldDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZMT0FUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogdGhlc2UgY2xhc3NlcyBwb3NpdGlvbiB0aGUgZmxvYXRpbmcgZWxlbWVudCAqL1xcbi5jYy10b3Age1xcbiAgdG9wOiAxZW07IH1cXG5cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07IH1cXG5cXG4uY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDFlbTsgfVxcblxcbi5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAxZW07IH1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSB7XFxuICBmbGV4OiAxIDAgYXV0bzsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRvcCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2MtYmFubmVyLmNjLWJvdHRvbSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi8qIENPTVBMSUFOQ0UgQk9YICovXFxuLmNjLWNvbXBsaWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2UgPiAuY2MtYnRuIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG5cXG4vKiBDYXRlZ29yaWVzIExheW91dCAqL1xcbi5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuNik7IH1cXG5cXG4uY2MtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMjJweCk7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAycHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjcpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5jYy13aW5kb3csXFxuICAuY2MtcmV2b2tlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5jYy1idG4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9IH1cXG5cXG4vKiBkaW1lbnNpb25zIGZvciAnaVBob25lNiBQbHVzJyBhbmQgbG93ZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5jYy13aW5kb3cuY2MtdG9wIHtcXG4gICAgdG9wOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIsIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcsIC5jYy13aW5kb3cuY2MtcmlnaHQsIC5jYy13aW5kb3cuY2MtbGVmdCB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtY29tcGxpYW5jZSB7XFxuICAgICAgZmxleDogMSAxIGF1dG87IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiA4cHggMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgfVxcbiAgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDA7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogdGhpbiBzb2xpZCBsaWdodGdyZXk7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogMC40ZW0gNHB4OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuIShmdW5jdGlvbihjYykge1xuICAvLyBzdG9wIGZyb20gcnVubmluZyBhZ2FpbiwgaWYgYWNjaWRlbnRseSBpbmNsdWRlZCBtb3JlIHRoYW4gb25jZS5cbiAgaWYgKGNjLmhhc0luaXRpYWxpemVkKSByZXR1cm47XG5cbiAgY29uc3QgdXRpbCA9IHtcbiAgICBcbiAgICBpbnRlcnBvbGF0ZVN0cmluZzogZnVuY3Rpb24oc3RyLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhhcmd1bWVudHNbMV0pIHx8ICcnXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZWVwRXh0ZW5kOiBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3AgaW4gdGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLmlzUGxhaW5PYmplY3QodGFyZ2V0W3Byb3BdKSAmJlxuICAgICAgICAgICAgdGhpcy5pc1BsYWluT2JqZWN0KHNvdXJjZVtwcm9wXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcbiAgICBcbiAgICBnZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gJzsgJyArIGRvY3VtZW50LmNvb2tpZVxuICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCgnOyAnICsgbmFtZSArICc9JylcbiAgICAgIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogcGFydHNcbiAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgLnNwbGl0KCc7JylcbiAgICAgICAgICAgIC5zaGlmdCgpXG4gICAgfSxcblxuICAgIHNldENvb2tpZTogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnO2V4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc7cGF0aD0nICsgKHBhdGggfHwgJy8nKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJztzZWN1cmUnIDogJycgKVxuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcbiAgICB0aHJvdHRsZTogZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gICAgICBsZXQgd2FpdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXdhaXQpIHtcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHdhaXQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgICAgfSwgbGltaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXG4gICAgaGFzaDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBsZXQgaGFzaCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBjaHIsXG4gICAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2g7XG4gICAgICBmb3IgKGk7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBjaHIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfSxcblxuICAgIG5vcm1hbGlzZUhleDogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBpZiAoaGV4WzBdID09ICcjJykge1xuICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgfVxuICAgICAgaWYgKGhleC5sZW5ndGggPT0gMykge1xuICAgICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4O1xuICAgIH0sXG5cbiAgICAvLyB1c2VkIHRvIGdldCB0ZXh0IGNvbG9ycyBpZiBub3Qgc2V0XG4gICAgZ2V0Q29udHJhc3Q6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgaGV4ID0gdGhpcy5ub3JtYWxpc2VIZXgoaGV4KTtcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpO1xuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICAgIGNvbnN0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcbiAgICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnO1xuICAgIH0sXG5cbiAgICAvLyB1c2VkIHRvIGNoYW5nZSBjb2xvciBvbiBoaWdobGlnaHRcbiAgICBnZXRMdW1pbmFuY2U6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodGhpcy5ub3JtYWxpc2VIZXgoaGV4KSwgMTYpLFxuICAgICAgICBhbXQgPSAzOCxcbiAgICAgICAgUiA9IChudW0gPj4gMTYpICsgYW10LFxuICAgICAgICBCID0gKChudW0gPj4gOCkgJiAweDAwZmYpICsgYW10LFxuICAgICAgICBHID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdDtcbiAgICAgICAgcmV0dXJuICcjJyArIChcbiAgICAgICAgMHgxMDAwMDAwICtcbiAgICAgICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXG4gICAgICAgIChCIDwgMjU1ID8gKEIgPCAxID8gMCA6IEIpIDogMjU1KSAqIDB4MTAwICtcbiAgICAgICAgKEcgPCAyNTUgPyAoRyA8IDEgPyAwIDogRykgOiAyNTUpXG4gICAgICApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnNsaWNlKDEpO1xuICAgIH0sXG5cbiAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICApO1xuICAgIH0sXG5cbiAgICBpc1BsYWluT2JqZWN0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgIC8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxuICAgIH0sXG5cbiAgICB0cmF2ZXJzZURPTVBhdGg6IGZ1bmN0aW9uKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtIHx8ICFlbGVtLnBhcmVudE5vZGUpIHJldHVybiBudWxsO1xuICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHJldHVybiBlbGVtO1xuXG4gICAgICByZXR1cm4gdGhpcy50cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvLyB2YWxpZCBjb29raWUgdmFsdWVzXG4gIGNjLnN0YXR1cyA9IHtcbiAgICBkZW55ICAgOiAnZGVueScsXG4gICAgYWxsb3cgIDogJ2FsbG93JyxcbiAgICBkaXNtaXNzOiAnZGlzbWlzcydcbiAgfTtcbiAgY2MuY2F0ZWdvcnkgPSB7XG4gICAgdW5jYXRlZ29yaXplZCAgOiAnZGlzbWlzcycsXG4gICAgZXNzZW50aWFsICAgICAgOiAnYWxsb3cnLFxuICAgIHBlcnNvbmFsaXphdGlvbjogJ2Rpc21pc3MnLFxuICAgIGFuYWx5dGljcyAgICAgIDogJ2Rpc21pc3MnLFxuICAgIG1hcmtldGluZyAgICAgIDogJ2Rpc21pc3MnXG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcbiAgICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gaWYgc3RhdHVzIGlzIHZhbGlkXG4gICAqL1xuICBjb25zdCBpc1ZhbGlkU3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2Yoc3RhdHVzKSA+PSAwXG4gIH1cblxuICAvLyBkZXRlY3RzIHRoZSBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgbmFtZVxuICBjYy50cmFuc2l0aW9uRW5kID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHJhbnMgPSB7XG4gICAgICB0OiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgIG1zVDogJ01TVHJhbnNpdGlvbkVuZCcsXG4gICAgICBNb3pUOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgcHJlZml4IGluIHRyYW5zKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgdHlwZW9mIGVsLnN0eWxlW3ByZWZpeCArICdyYW5zaXRpb24nXSAhPSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cmFuc1twcmVmaXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0pKCk7XG5cbiAgY2MuaGFzVHJhbnNpdGlvbiA9ICEhY2MudHJhbnNpdGlvbkVuZDtcblxuICAvLyBjb250YWlucyByZWZlcmVuY2VzIHRvIHRoZSBjdXN0b20gPHN0eWxlPiB0YWdzXG4gIGNjLmN1c3RvbVN0eWxlcyA9IHt9O1xuXG4gIGNjLlBvcHVwID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gaWYgZmFsc2UsIHRoaXMgcHJldmVudHMgdGhlIHBvcHVwIGZyb20gc2hvd2luZyAodXNlZnVsIGZvciBnaXZpbmcgdG8gY29udHJvbCB0byBhbm90aGVyIHBpZWNlIG9mIGNvZGUpXG4gICAgICBlbmFibGVkOiB0cnVlLFxuXG4gICAgICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXG4gICAgICBjb250YWluZXI6IG51bGwsXG5cbiAgICAgIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcbiAgICAgIGNvb2tpZToge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoaXMgY29va2llIC0geW91IGNhbiBpZ25vcmUgdGhpc1xuICAgICAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cbiAgICAgICAgcGF0aDogJy8nLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRvbWFpbiB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBvbiB0aGlzIGRvbWFpbi5cbiAgICAgICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xuICAgICAgICBkb21haW46ICcnLFxuXG4gICAgICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxuICAgICAgICBleHBpcnlEYXlzOiAzNjUsXG5cbiAgICAgICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cbiAgICAgICAgc2VjdXJlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLy8gdGhlc2UgY2FsbGJhY2sgaG9va3MgYXJlIGNhbGxlZCBhdCBjZXJ0YWluIHBvaW50cyBpbiB0aGUgcHJvZ3JhbSBleGVjdXRpb25cbiAgICAgIG9uUG9wdXBPcGVuOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Qb3B1cENsb3NlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Jbml0aWFsaXplOiBmdW5jdGlvbihzdGF0dXNlcykge30sXG4gICAgICBvblN0YXR1c0NoYW5nZTogZnVuY3Rpb24oY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUpIHt9LFxuICAgICAgb25SZXZva2VDaG9pY2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICBvbk5vQ29va2llTGF3OiBmdW5jdGlvbihjb3VudHJ5Q29kZSwgY291bnRyeSkge30sXG5cbiAgICAgIC8vIGVhY2ggaXRlbSBkZWZpbmVzIHRoZSBpbm5lciB0ZXh0IGZvciB0aGUgZWxlbWVudCB0aGF0IGl0IHJlZmVyZW5jZXNcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgaGVhZGVyOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuICAgICAgICBkaXNtaXNzOiAnR290IGl0IScsXG4gICAgICAgIGFsbG93OiAnQWxsb3cgY29va2llcycsXG4gICAgICAgIGRlbnk6ICdEZWNsaW5lJyxcbiAgICAgICAgbGluazogJ0xlYXJuIG1vcmUnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxuICAgICAgICBjbG9zZTogJyYjeDI3NGM7JyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgcG9saWN5OiAnQ29va2llIFBvbGljeSdcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxuICAgICAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cbiAgICAgIC8vXG4gICAgICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxuICAgICAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcDsnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19PC9zcGFuPicsXG4gICAgICAgIG1lc3NhZ2VsaW5rOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgICAgICBkaXNtaXNzOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYT4nLFxuICAgICAgICBhbGxvdzpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImFsbG93IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiAgY2xhc3M9XCJjYy1idG4gY2MtYWxsb3dcIj57e2FsbG93fX08L2E+JyxcbiAgICAgICAgZGVueTpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRlbnlcIj57e2Rlbnl9fTwvYT4nLFxuICAgICAgICBsaW5rOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxuICAgICAgICBjbG9zZTpcbiAgICAgICAgICAnPHNwYW4gYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWNsb3NlXCI+e3tjbG9zZX19PC9zcGFuPicsXG4gICAgICAgIGNhdGVnb3JpZXM6IGAgdWwgY2xhc3M9XCJjYy1jYXRlZ29yaWVzXCI8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidW5jYXRlZ29yaXplZFwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5VbmNhdGVnb3JpemVkPC9idXR0b248YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiVW5jYXRlZ29yaXplZCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiMVwiPl48L2J1dHRvbjxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCBhbnkgb3RoZXIgY2F0ZWdvcnkuPC9wPC9kaXY8L2xpPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIjxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVzc2VudGlhbFwiIGNoZWNrZWQgZGlzYWJsZWQvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkVzc2VudGlhbDwvYnV0dG9uPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiM1wiPl48L2J1dHRvbjxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgZXNzZW50aWFsIGFwcGxpY2F0aW9uIG9yIHdlYnNpdGUgb3BwZXJhdGlvbiBjb29raWVzLjwvcDwvZGl2PC9saTxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI0XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwZXJzb25hbGl6YXRpb25cIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+UGVyc29uYWxpemF0aW9uPC9idXR0b248YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiUGVyc29uYWxpemF0aW9uIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI1XCI+XjwvYnV0dG9uPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIjxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHRoZSBhcHBsaWNhdGlvbiB0byBhIHNwZWNpZmljIHVzZXIuPC9wPC9kaXY8L2xpPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIjxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjZcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuYWx5dGljc1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5BbmFseXRpY3M8L2J1dHRvbjxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJBbmFseXRpY3MgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjdcIj5ePC9idXR0b248ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIGFuYWx5aXplIGRhdGEuPC9wPC9kaXY8L2xpPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIjxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjhcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtldGluZ1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5NYXJrZXRpbmc8L2J1dHRvbjxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjlcIj5ePC9idXR0b248ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIHBlcm9uYWxpemUgeW91ciBpbnRlcm5ldCBzaG9wcGluZyAmIGFkdmVydGlzZW1lbnQgZXhwZXJpZW5jZXMuPC9wPC9kaXY8L2xpPC91bGAsXG4gICAgICAgIHNhdmU6IGA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj5TYXZlPC9idXR0b24+YFxuICAgICAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xuICAgICAgfSxcblxuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVycyB7e2NsYXNzZXN9fSBhbmQge3tjaGlsZHJlbn19IGJvdGggZ2V0IHJlcGxhY2VkIGR1cmluZyBpbml0aWFsaXNhdGlvbjpcbiAgICAgIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcbiAgICAgIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXG4gICAgICB3aW5kb3c6XG4gICAgICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcbiAgICAgIFxuICAgICAgbW9kYWw6ICcnLFxuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBodG1sIGZvciB0aGUgcmV2b2tlIGJ1dHRvbi4gVGhpcyBvbmx5IHNob3dzIHVwIGFmdGVyIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB0aGVpciBsZXZlbCBvZiBjb25zZW50XG4gICAgICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXG4gICAgICByZXZva2VCdG46ICc8ZGl2IGNsYXNzPVwiY2MtcmV2b2tlIHt7Y2xhc3Nlc319XCI+e3twb2xpY3l9fTwvZGl2PicsXG5cbiAgICAgIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxuICAgICAgY29tcGxpYW5jZToge1xuICAgICAgICBpbmZvOiAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fTwvZGl2PicsXG4gICAgICAgICdvcHQtaW4nOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LW91dCc6XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxuICAgICAgICBjYXRlZ29yaWVzOiAnPGRpdiBjbGFzcz1cImZvcm1cIj57e2NhdGVnb3JpZXN9fXt7c2F2ZX19PC9kaXY+J1xuICAgICAgfSxcblxuICAgICAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXG4gICAgICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgICAgIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXG4gICAgICBsYXlvdXRzOiB7XG4gICAgICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgICAgIGJhc2ljICAgICAgICAgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX0nLFxuICAgICAgICAnYmFzaWMtY2xvc2UnIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcbiAgICAgICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xuICAgICAgICAvLyBhZGQgYSBjdXN0b20gbGF5b3V0IGhlcmUsIHRoZW4gYWRkIHNvbWUgbmV3IGNzcyB3aXRoIHRoZSBjbGFzcyAnLmNjLWxheW91dC1teS1jb29sLWxheW91dCdcbiAgICAgICAgLy8nbXktY29vbC1sYXlvdXQnOiAnPGRpdiBjbGFzcz1cIm15LXNwZWNpYWwtbGF5b3V0XCI+e3ttZXNzYWdlfX17e2NvbXBsaWFuY2V9fTwvZGl2Pnt7Y2xvc2V9fScsXG4gICAgICB9LFxuXG4gICAgICAvLyBkZWZhdWx0IGxheW91dCAoc2VlIGFib3ZlKVxuICAgICAgbGF5b3V0OiAnYmFzaWMnLFxuXG4gICAgICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gICAgICAvLyAgLSBiYW5uZXIgcG9zaXRpb25zOiB0b3AsIGJvdHRvbVxuICAgICAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYWRkcyBhIGNsYXNzIGBjYy1mbG9hdGluZ2Agb3IgYGNjLWJhbm5lcmAgd2hpY2ggaGVscHMgd2hlbiBzdHlsaW5nXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcblxuICAgICAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAgICAgLy8gICAgLWJsb2NrIChkZWZhdWx0LCBubyBleHRyYSBjbGFzc2VzKVxuICAgICAgLy8gICAgLWVkZ2VsZXNzXG4gICAgICAvLyAgICAtY2xhc3NpY1xuICAgICAgLy8gdXNlIHlvdXIgb3duIHN0eWxlIG5hbWUgYW5kIHVzZSBgLmNjLXRoZW1lLVNUWUxFTkFNRWAgY2xhc3MgaW4gQ1NTIHRvIGVkaXQuXG4gICAgICAvLyBOb3RlOiBzdHlsZSBcIndpcmVcIiBpcyB1c2VkIGZvciB0aGUgY29uZmlndXJhdG9yLCBidXQgaGFzIG5vIENTUyBzdHlsZXMgb2YgaXRzIG93biwgb25seSBwYWxldHRlIGlzIHVzZWQuXG4gICAgICB0aGVtZTogJ2Jsb2NrJyxcblxuICAgICAgLy8gVGhlIHBvcHVwIGlzIGBmaXhlZGAgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHN0YXRpYyAoaW5saW5lIHdpdGggdGhlIHBhZ2UgY29udGVudCksIHNldCB0aGlzIHRvIGZhbHNlXG4gICAgICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcbiAgICAgIHN0YXRpYzogZmFsc2UsXG5cbiAgICAgIC8vIGlmIHlvdSB3YW50IGN1c3RvbSBjb2xvdXJzLCBwYXNzIHRoZW0gaW4gaGVyZS4gdGhpcyBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGlzLlxuICAgICAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgcG9wdXA6IHtiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIHRleHQ6ICcjZmZmJywgbGluazogJyNmZmYnfSxcbiAgICAgIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcbiAgICAgIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAgICAgLy8gICB9XG4gICAgICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cbiAgICAgIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxuICAgICAgcGFsZXR0ZTogbnVsbCxcblxuICAgICAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXG4gICAgICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50Lmxhd2AgY2FuIGNoYW5nZSB0aGlzIHRvIGB0cnVlYCBpZiBpdCBkZXRlY3RzIHRoYXQgaXQgc2hvdWxkXG4gICAgICByZXZva2FibGU6IGZhbHNlLFxuXG4gICAgICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcbiAgICAgIGFuaW1hdGVSZXZva2FibGU6IHRydWUsXG5cbiAgICAgIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcbiAgICAgIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xuICAgICAgc2hvd0xpbms6IHRydWUsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXG4gICAgICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gYXV0b2Rpc21pc3MgYWZ0ZXIgc2V0IHRpbWVcbiAgICAgIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gICAgICBkaXNtaXNzT25XaW5kb3dDbGljazogZmFsc2UsXG5cbiAgICAgIC8vIElmIGBkaXNtaXNzT25XaW5kb3dDbGlja2AgaXMgdHJ1ZSwgd2UgY2FuIGNsaWNrIG9uICdyZXZva2UnIGFuZCB3ZSdsbCBzdGlsbCBkaXNtaXNzIHRoZSBiYW5uZXIsIHNvIHdlIG5lZWQgZXhjZXB0aW9ucy5cbiAgICAgIC8vIHNob3VsZCBiZSBhbiBhcnJheSBvZiBjbGFzcyBuYW1lcyAobm90IENTUyBzZWxlY3RvcnMpXG4gICAgICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nXSwgLy8gYWxyZWFkeSBpbmNsdWRlcyB0aGUgcmV2b2tlIGJ1dHRvbiBhbmQgdGhlIGJhbm5lciBpdHNlbGZcblxuICAgICAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxuICAgICAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXG4gICAgICBhdXRvT3BlbjogdHJ1ZSxcblxuICAgICAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXG4gICAgICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XG4gICAgICAvL1xuICAgICAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpO1xuICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudCk7XG4gICAgICAvL1xuICAgICAgYXV0b0F0dGFjaDogdHJ1ZSxcblx0ICBcblx0ICAvLyBzZXQgdmFsdWUgaWYgZmxvYXRpbmcgbGF5b3V0IHNob3VsZCBiZSBmb3JjZWQgZm9yIG1vYmlsZSBkZXZpY2VzXG5cdCAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAgICAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XG4gICAgICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gICAgICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICAgICAgd2hpdGVsaXN0UGFnZTogW10sXG4gICAgICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAgICAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAgICAgLy8gQmUgc3VyZSB0byB1c2UgdGhlIGNsYXNzZXMgYGNjLWJ0bmAgYW5kIGBjYy1hbGxvd2AsIGBjYy1kZW55YCBvciBgY2MtZGlzbWlzc2AuIFRoZXkgZW5hYmxlIHRoZSBhcHAgdG8gcmVnaXN0ZXIgY2xpY2tcbiAgICAgIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICAgICAgb3ZlcnJpZGVIVE1MOiBudWxsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvb2tpZVBvcHVwKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpOyAvLyBhbHJlYWR5IHJlbmRlcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBvcHRpb25zIGJhY2sgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB1dGlsLmRlZXBFeHRlbmQoKHRoaXMub3B0aW9ucyA9IHt9KSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICAvLyBtZXJnZSBpbiB1c2VyIG9wdGlvbnNcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxuICAgICAgaWYgKGNoZWNrQ2FsbGJhY2tIb29rcy5jYWxsKHRoaXMpKSB7XG4gICAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhlIGZ1bGwgbWFya3VwIGVpdGhlciBjb250YWlucyB0aGUgd3JhcHBlciBvciBpdCBkb2VzIG5vdCAoZm9yIG11bHRpcGxlIGluc3RhbmNlcylcbiAgICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgZ2V0UG9wdXBDbGFzc2VzLmNhbGwodGhpcykuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgZ2V0UG9wdXBJbm5lck1hcmt1cC5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcbiAgICAgIGNvbnN0IGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MO1xuICAgICAgaWYgKHR5cGVvZiBjdXN0b21IVE1MID09ICdzdHJpbmcnICYmIGN1c3RvbUhUTUwubGVuZ3RoICkge1xuICAgICAgICBjb29raWVQb3B1cCA9IGN1c3RvbUhUTUw7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXG4gICAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGFwcGVuZE1hcmt1cC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4nICsgY29va2llUG9wdXAgKyAnPC9kaXY+J1xuICAgICAgICApO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnOyAvLyBzZXQgaXQgdG8gdmlzaWJsZSAoYmVjYXVzZSBhcHBlbmRNYXJrdXAgaGlkZXMgaXQpXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZDsgLy8gZ2V0IHRoZSBgZWxlbWVudGAgcmVmZXJlbmNlIGZyb20gdGhlIHdyYXBwZXJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGFwcGVuZE1hcmt1cC5jYWxsKHRoaXMsIGNvb2tpZVBvcHVwKTtcbiAgICAgIH1cblxuICAgICAgYXBwbHlBdXRvRGlzbWlzcy5jYWxsKHRoaXMpO1xuXG4gICAgICBhcHBseVJldm9rZUJ1dHRvbi5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICAgIHRoaXMuYXV0b09wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm9uQnV0dG9uQ2xpY2sgJiYgdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRpc21pc3NUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc21pc3NUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93U2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93Q2xpY2spIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25Nb3VzZU1vdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuICYmIHRoaXMucmV2b2tlQnRuLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnJldm9rZUJ0bik7XG4gICAgICB9XG4gICAgICB0aGlzLnJldm9rZUJ0biA9IG51bGw7XG5cbiAgICAgIHJlbW92ZUN1c3RvbVN0eWxlKHRoaXMub3B0aW9ucy5wYWxldHRlKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBpZiAoY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHRoaXMuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3B1cE9wZW4uY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKHNob3dSZXZva2UpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUG9wdXBDbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmZhZGVJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBBRlRFUiBmYWRlT3V0ICh3aGljaCBpcyBnb3Zlcm5lZCBieSB0aGUgJ3RyYW5zaXRpb25lbmQnIGV2ZW50KS5cbiAgICAgIC8vICd0cmFuc2l0aW9uZW5kJyBpc24ndCBhbGwgdGhhdCByZWxpYWJsZSwgc28sIGlmIHdlIHRyeSBhbmQgZmFkZUluIGJlZm9yZSAndHJhbnNpdGlvbmVuZCcgaGFzXG4gICAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICAgIGlmICh0aGlzLmFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgICBhZnRlckZhZGVPdXQuY2FsbCh0aGlzLCBlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwOyAvLyAobXMpIERPIE5PVCBNQUtFIFRISVMgVkFMVUUgU01BTExFUi4gU2VlIGJlbG93XG5cbiAgICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHdhaXRpbmcgZm9yIGEgXCJicm93c2VyIHJlZHJhd1wiIGJlZm9yZSB3ZSByZW1vdmUgdGhlICdjYy1pbnZpc2libGUnIGNsYXNzLlxuICAgICAgICAvLyBJZiB0aGUgY2xhc3MgaXMgcmVtdm9lZCBiZWZvcmUgYSByZWRyYXcgY291bGQgaGFwcGVuLCB0aGVuIHRoZSBmYWRlSW4gZWZmZWN0IFdJTEwgTk9UIHdvcmssIGFuZFxuICAgICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgICAgLy8gaXRzIHRoaW5nLiBUaGUgYWN0dWFsbHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHVzaW5nIDAgYW5kIDIwIGluIGEgc2V0IHRpbWVvdXQgaXMgbmVnbGVnaWJsZSBhbnl3YXlcbiAgICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgYWZ0ZXJGYWRlSW4uYmluZCh0aGlzLCBlbCksXG4gICAgICAgICAgZmFkZUluVGltZW91dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZmFkZU91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpO1xuICAgICAgICBhZnRlckZhZGVJbi5iaW5kKHRoaXMsIGVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IGFmdGVyRmFkZU91dC5iaW5kKHRoaXMsIGVsKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG5cbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnJyAmJlxuICAgICAgICAoY2MuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXG4gICAgICApO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUudG9nZ2xlUmV2b2tlQnV0dG9uID0gZnVuY3Rpb24oc2hvdykge1xuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUucmV2b2tlQ2hvaWNlID0gZnVuY3Rpb24ocHJldmVudE9wZW4pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpO1xuXG4gICAgICB0aGlzLm9wdGlvbnMub25SZXZva2VDaG9pY2UuY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKCFwcmV2ZW50T3Blbikge1xuICAgICAgICB0aGlzLmF1dG9PcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxuICAgICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaGFzQW5zd2VyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xuICAgICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmhhc0NvbnNlbnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IGNjLnN0YXR1cy5hbGxvdyB8fCBzdGF0dXMgPT09IGNjLnN0YXR1cy5kaXNtaXNzIClcbiAgICB9O1xuXG4gICAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5hdXRvT3BlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXG4gICAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogXG4gICAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cbiAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5zZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qge25hbWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlfSA9IHRoaXMub3B0aW9ucy5jb29raWVcblxuICAgICAgLy8gaWYgYHN0YXR1c2AgaXMgdmFsaWRcbiAgICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2YodXRpbC5nZXRDb29raWUoY29va2llTmFtZSkpID49IDBcbiAgICAgICAgICB1dGlsLnNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5vblN0YXR1c0NoYW5nZS5jYWxsKHRoaXMsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCBjYy5jYXRlZ29yeVsgY2F0ZWdvcnkgXSApIClcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGFyZ3VtZW50c1sgMCBdICkgKVxuICAgICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgIGFyZ3VtZW50cy5mb3JFYWNoKCAoIGNhdGVnb3J5U3RhdHVzLCBpbmRleCApID0+IHtcbiAgICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYy5jYXRlZ29yeVxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5nZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5TmFtZSA9PiB1dGlsLmdldENvb2tpZSh0aGlzLm9wdGlvbnMuY29va2llLm5hbWUrJ18nK2NhdGVnb3J5TmFtZSkgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbGVhclN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZTtcbiAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgICB1dGlsLnNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAgLy8gVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nO1xuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZUluKGVsKSB7XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbDtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgb24gJ3RyYW5zaXRpb25lbmQnIChvbmx5IG9uIHRoZSB0cmFuc2l0aW9uIG9mIHRoZSBmYWRlT3V0KS4gVGhhdCdzIGJlY2F1c2UgYWZ0ZXIgd2UndmUgZmFkZWQgb3V0LCB3ZSBuZWVkIHRvXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5IHRvICdub25lJyAoc28gdGhlcmUgYXJlbid0IGFubm95aW5nIGludmlzaWJsZSBwb3B1cHMgYWxsIG92ZXIgdGhlIHBhZ2UpLiBJZiBmb3Igd2hlbmV2ZXIgcmVhc29uIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBpcyBub3QgY2FsbGVkIChsYWNrIG9mIHN1cHBvcnQpLCB0aGUgb3Blbi9jbG9zZSBtZWNoYW5pc20gd2lsbCBzdGlsbCB3b3JrLlxuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZU91dChlbCkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGhvb2sgYW5kIHJldHVybnMgdHJ1ZSAoaWYgbmVlZGVkKSBhbmQgcmV0dXJucyBmYWxzZSBvdGhlcndpc2VcbiAgICBmdW5jdGlvbiBjaGVja0NhbGxiYWNrSG9va3MoKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZSA9IHRoaXMub3B0aW9ucy5vbkluaXRpYWxpemUuYmluZCh0aGlzKTtcblxuICAgICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmRlbnkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5Db29raWVzT0sgfHwgd2luZG93Lm5hdmlnYXRvci5Db29raWVzT0spIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmFsbG93KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSlcbiAgICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXG4gICAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcbiAgICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcbiAgICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+IGNjLmNhdGVnb3J5WyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gPSBzdGF0dXMgPyBzdGF0dXMgOiBjYy5jYXRlZ29yeVsgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcbiAgICAgIGNvbXBsZXRlKCBoYXNNYXRjaGVzID8gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogc3RhdHVzIH0gKSApICA6IHVuZGVmaW5lZCApXG5cbiAgICAgIHJldHVybiBoYXNNYXRjaGVzO1xuICAgIH1cblxuICAgIC8vIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodFxuICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoICctJyApLm1hcCggcG9zID0+ICdjYy0nK3BvcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cENsYXNzZXMoKSB7XG4gICAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcbiAgICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgICAgOiAnZmxvYXRpbmcnO1xuXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpICYmIG9wdHMubW9iaWxlRm9yY2VGbG9hdCkge1xuICAgICAgICBwb3NpdGlvblN0eWxlID0gJ2Zsb2F0aW5nJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcbiAgICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcbiAgICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgICBdO1xuXG4gICAgICBpZiAob3B0cy5zdGF0aWMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKTtcbiAgICAgIH1cblxuICAgICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gd2Ugb25seSBhZGQgZXh0cmEgc3R5bGVzIGlmIGBwYWxldHRlYCBoYXMgYmVlbiBzZXQgdG8gYSB2YWxpZCB2YWx1ZVxuICAgICAgYXR0YWNoQ3VzdG9tUGFsZXR0ZS5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucy5wYWxldHRlKTtcblxuICAgICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBvcHVwSW5uZXJNYXJrdXAoKSB7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB7fTtcbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIHJlbW92ZXMgbGluayBpZiBzaG93TGluayBpcyBmYWxzZVxuICAgICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICAgIG9wdHMuZWxlbWVudHMubGluayA9ICcnOyBcbiAgICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaCggcHJvcCA9PiB7XG4gICAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoXG4gICAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lICYmIHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgJiYgc3RyLmxlbmd0aCA/IHN0ciA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcbiAgICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdO1xuICAgICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvO1xuICAgICAgfVxuXG4gICAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXG4gICAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoY29tcGxpYW5jZVR5cGUsIGZ1bmN0aW9uKFxuICAgICAgICBuYW1lXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFtuYW1lXTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcbiAgICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdO1xuICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXRpbC5pbnRlcnBvbGF0ZVN0cmluZyhsYXlvdXQsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZWRbbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kTWFya3VwKG1hcmt1cCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgY29udCA9XG4gICAgICAgIG9wdHMuY29udGFpbmVyICYmIG9wdHMuY29udGFpbmVyLm5vZGVUeXBlID09PSAxXG4gICAgICAgICAgPyBvcHRzLmNvbnRhaW5lclxuICAgICAgICAgIDogZG9jdW1lbnQuYm9keTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cDtcblxuICAgICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF07XG5cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmUgcmVmIHRvIHRoZSBmdW5jdGlvbiBoYW5kbGUgc28gd2UgY2FuIHVuYmluZCBpdCBsYXRlclxuICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2MuY2F0ZWdvcnlbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnYWxsb3cnIDogJ2RlbnknXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgaWYgKCB0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICApIHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdHMuYXV0b0F0dGFjaCkge1xuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnQuaW5zZXJ0QmVmb3JlKGVsLCBjb250LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xuICAgICAgLy8gcmV0dXJucyB0aGUgcGFyZW50IGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGNsYXNzLCBvciB0aGUgb3JpZ2luYWwgZWxlbWVudCAtIG51bGwgaWYgbm90IGZvdW5kXG4gICAgICBjb25zdCBidG4gPSB1dGlsLnRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXQ7XG4gICAgICBcbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1zYXZlJyApKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxuICAgICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxiY2MtKCcgKyBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLm1hcChzdHIgPT4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhtYXRjaCk7XG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XG4gICAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSSBtaWdodCBjaGFuZ2UgdGhpcyBmdW5jdGlvbiB0byB1c2UgaW5saW5lIHN0eWxlcy4gSSBvcmlnaW5hbGx5IGNob3NlIGEgc3R5bGVzaGVldCBiZWNhdXNlIEkgY291bGQgc2VsZWN0IG1hbnkgZWxlbWVudHMgd2l0aCBhXG4gICAgLy8gc2luZ2xlIHJ1bGUgKHNvbWV0aGluZyB0aGF0IGhhcHBlbmVkIGEgbG90KSwgdGhlIGFwcHMgaGFzIGNoYW5nZWQgc2xpZ2h0bHkgbm93IHRob3VnaCwgc28gaW5saW5lIHN0eWxlcyBtaWdodCBiZSBtb3JlIGFwcGxpY2FibGUuXG4gICAgZnVuY3Rpb24gYXR0YWNoQ3VzdG9tUGFsZXR0ZShwYWxldHRlKSB7XG4gICAgICBjb25zdCBoYXNoID0gdXRpbC5oYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKTtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoO1xuICAgICAgY29uc3QgaXNWYWxpZCA9IHV0aWwuaXNQbGFpbk9iamVjdChwYWxldHRlKTtcblxuICAgICAgdGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yID0gaXNWYWxpZCA/IHNlbGVjdG9yIDogbnVsbDtcblxuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgJy4nICsgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgcHJlZml4KSB7XG4gICAgICAvLyBvbmx5IGFkZCB0aGlzIGlmIGEgc3R5bGUgbGlrZSBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoY2MuY3VzdG9tU3R5bGVzW2hhc2hdKSB7XG4gICAgICAgIC8vIGN1c3RvbSBzdHlsZSBhbHJlYWR5IGV4aXN0cywgc28gaW5jcmVtZW50IHRoZSByZWZlcmVuY2UgY291bnRcbiAgICAgICAgKytjYy5jdXN0b21TdHlsZXNbaGFzaF0ucmVmZXJlbmNlcztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xvclN0eWxlcyA9IHt9O1xuICAgICAgY29uc3QgcG9wdXAgPSBwYWxldHRlLnBvcHVwO1xuICAgICAgY29uc3QgYnV0dG9uID0gcGFsZXR0ZS5idXR0b247XG4gICAgICBjb25zdCBoaWdobGlnaHQgPSBwYWxldHRlLmhpZ2hsaWdodDtcblxuICAgICAgLy8gbmVlZHMgYmFja2dyb3VuZCBjb2xvdXIsIHRleHQgYW5kIGxpbmsgd2lsbCBiZSBzZXQgdG8gYmxhY2svd2hpdGUgaWYgbm90IHNwZWNpZmllZFxuICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIC8vIGFzc3VtZXMgcG9wdXAuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHRcbiAgICAgICAgICA/IHBvcHVwLnRleHRcbiAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZCk7XG4gICAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHQ7XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXVxuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2MtcmV2b2tlJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXTtcbiAgICAgICAgY29sb3JTdHlsZXNbXG4gICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbmssJyArXG4gICAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICAgJyAuY2MtbGluazphY3RpdmUsJyArXG4gICAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICAgJyAuY2MtbGluazp2aXNpdGVkJ1xuICAgICAgICBdID0gWydjb2xvcjogJyArIHBvcHVwLmxpbmtdO1xuXG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHRcbiAgICAgICAgICAgID8gYnV0dG9uLnRleHRcbiAgICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChidXR0b24uYmFja2dyb3VuZCk7XG4gICAgICAgICAgYnV0dG9uLmJvcmRlciA9IGJ1dHRvbi5ib3JkZXIgPyBidXR0b24uYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXSA9IFtcbiAgICAgICAgICAgICdjb2xvcjogJyArIGJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGJ1dHRvbi5iYWNrZ3JvdW5kXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGlmIChidXR0b24ucGFkZGluZykge1xuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10ucHVzaCgncGFkZGluZzogJyArIGJ1dHRvbi5wYWRkaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnV0dG9uLmJhY2tncm91bmQgIT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAgICAgY29sb3JTdHlsZXNbXG4gICAgICAgICAgICAgIHByZWZpeCArICcgLmNjLWJ0bjpob3ZlciwgJyArIHByZWZpeCArICcgLmNjLWJ0bjpmb2N1cydcbiAgICAgICAgICAgIF0gPSBbXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICtcbiAgICAgICAgICAgICAgICAoYnV0dG9uLmhvdmVyIHx8IGdldEhvdmVyQ29sb3VyKGJ1dHRvbi5iYWNrZ3JvdW5kKSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgLy9hc3N1bWVzIGhpZ2hsaWdodC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgICAgaGlnaGxpZ2h0LnRleHQgPSBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICA/IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChoaWdobGlnaHQuYmFja2dyb3VuZCk7XG4gICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlclxuICAgICAgICAgICAgICA/IGhpZ2hsaWdodC5ib3JkZXJcbiAgICAgICAgICAgICAgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgaGlnaGxpZ2h0LnRleHQsXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBoaWdobGlnaHQuYm9yZGVyLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGhpZ2hsaWdodC5iYWNrZ3JvdW5kXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZXRzIGhpZ2hsaWdodCB0ZXh0IGNvbG9yIHRvIHBvcHVwIHRleHQuIGJhY2tncm91bmQgYW5kIGJvcmRlciBhcmUgdHJhbnNwYXJlbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHRcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgd2lsbCBiZSBpbnRlcnByZXR0ZWQgYXMgQ1NTLiB0aGUga2V5IGlzIHRoZSBzZWxlY3RvciwgYW5kIGVhY2ggYXJyYXkgZWxlbWVudCBpcyBhIHJ1bGVcbiAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgICAvLyBjdXN0b20gc3R5bGUgZG9lc24ndCBleGlzdCwgc28gd2UgY3JlYXRlIGl0XG4gICAgICBjYy5jdXN0b21TdHlsZXNbaGFzaF0gPSB7XG4gICAgICAgIHJlZmVyZW5jZXM6IDEsXG4gICAgICAgIGVsZW1lbnQ6IHN0eWxlLnNoZWV0XG4gICAgICB9O1xuXG4gICAgICBsZXQgcnVsZUluZGV4ID0gLTE7XG4gICAgICBmb3IgKGxldCBwcm9wIGluIGNvbG9yU3R5bGVzKSB7XG4gICAgICAgIGlmIChjb2xvclN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICAgICBwcm9wICsgJ3snICsgY29sb3JTdHlsZXNbcHJvcF0uam9pbignOycpICsgJ30nLFxuICAgICAgICAgICAgKytydWxlSW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SG92ZXJDb2xvdXIoaGV4KSB7XG4gICAgICBoZXggPSB1dGlsLm5vcm1hbGlzZUhleChoZXgpO1xuICAgICAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcbiAgICAgIGlmIChoZXggPT0gJzAwMDAwMCcpIHtcbiAgICAgICAgcmV0dXJuICcjMjIyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiB1dGlsLmdldEx1bWluYW5jZShoZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUN1c3RvbVN0eWxlKHBhbGV0dGUpIHtcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3QocGFsZXR0ZSkpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IHV0aWwuaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSk7XG4gICAgICAgIGNvbnN0IGN1c3RvbVN0eWxlID0gY2MuY3VzdG9tU3R5bGVzW2hhc2hdO1xuICAgICAgICBpZiAoY3VzdG9tU3R5bGUgJiYgIS0tY3VzdG9tU3R5bGUucmVmZXJlbmNlcykge1xuICAgICAgICAgIGNvbnN0IHN0eWxlTm9kZSA9IGN1c3RvbVN0eWxlLmVsZW1lbnQub3duZXJOb2RlO1xuICAgICAgICAgIGlmIChzdHlsZU5vZGUgJiYgc3R5bGVOb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN0eWxlTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNjLmN1c3RvbVN0eWxlc1toYXNoXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUF1dG9EaXNtaXNzKCkge1xuICAgICAgY29uc3Qgc2V0U3RhdHVzZXMgPSB0aGlzLnNldFN0YXR1c2VzLmJpbmQodGhpcyk7XG4gICAgICBjb25zdCBjbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuZGlzbWlzc09uVGltZW91dDtcbiAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT0gJ251bWJlcicgJiYgZGVsYXkgPj0gMCkge1xuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICAgIGNsb3NlKHRydWUpO1xuICAgICAgICB9LCBNYXRoLmZsb29yKGRlbGF5KSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFJhbmdlID0gdGhpcy5vcHRpb25zLmRpc21pc3NPblNjcm9sbDtcbiAgICAgIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xuICAgICAgICBjb25zdCBvbldpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICAgICAgY2xvc2UodHJ1ZSk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBvbldpbmRvd1Njcm9sbDtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB3aW5kb3dDbGljayA9IHRoaXMub3B0aW9ucy5kaXNtaXNzT25XaW5kb3dDbGljaztcbiAgICAgIGNvbnN0IGlnbm9yZWRDbGlja3MgPSB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbTtcbiAgICAgIFxuICAgICAgaWYgKHdpbmRvd0NsaWNrKSB7XG4gICAgICAgIGNvbnN0IG9uV2luZG93Q2xpY2sgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBjb25zdCBwYXRoID0gZXZ0LmNvbXBvc2VkUGF0aCA/IGV2dC5jb21wb3NlZFBhdGgoKSA6IChmdW5jdGlvbiAoIGFyciwgZWxlbWVudCApIHtcbiAgICAgICAgICAgIHdoaWxlICggZWxlbWVudCApIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goIGVsZW1lbnQgKVxuICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgICAgfSkoW10sZXZ0LnRhcmdldCApXG4gICAgICAgICAgaWYgKCAhcGF0aCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoICFwYXRoLnNvbWUoIGVsZW1lbnQgPT4gaWdub3JlZENsaWNrcy5zb21lKCBpZ25vcmVkQ2xpY2sgPT4gZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApICkgKSApIHtcbiAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKVxuICAgICAgICAgICAgY2xvc2UodHJ1ZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gb25XaW5kb3dDbGljaztcblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlSZXZva2VCdXR0b24oKSB7XG4gICAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgIT0gJ2luZm8nKSB0aGlzLm9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZTtcbiAgICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gZ2V0UG9zaXRpb25DbGFzc2VzLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnY2MtYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy10aGVtZS0nK3RoaXMub3B0aW9ucy50aGVtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldm9rZUJ0biA9IHRoaXMub3B0aW9ucy5yZXZva2VCdG5cbiAgICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBjbGFzc2VzLmpvaW4oJyAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSk7XG5cbiAgICAgICAgdGhpcy5yZXZva2VCdG4gPSBhcHBlbmRNYXJrdXAuY2FsbCh0aGlzLCByZXZva2VCdG4pO1xuXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IHV0aWwudGhyb3R0bGUoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMjA7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA7XG5cbiAgICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XG4gICAgICAgICAgICAgICAgICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJvdHRvbScgKSAmJiBldnQuY2xpZW50WSA+IG1heFkgKSApIHtcbiAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlICYmICFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAhYWN0aXZlICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gQ29va2llUG9wdXA7XG4gIH0pKCk7XG5cbiAgY2MuTG9jYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxuICAgIC8vIFdoZW4gdXNpbmcgYSBzZXJ2aWNlLCBpdCBjb3VsZCBlaXRoZXIgcmV0dXJuIGEgZGF0YSBzdHJ1Y3R1cmUgaW4gcGxhaW4gdGV4dCAobGlrZSBhIEpTT04gb2JqZWN0KSBvciBhbiBleGVjdXRhYmxlIHNjcmlwdFxuICAgIC8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbiAgICAvLyBXaGVuIHRoZSBzZXJ2aWNlIHVzZXMgYSBzY3JpcHQsIHRoZSBjaGFuY2VzIGFyZSB0aGF0IHlvdSdsbCBoYXZlIHRvIHVzZSB0aGUgc2NyaXB0IHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cy4gSW4gdGhlc2VcbiAgICAvLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXG4gICAgLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdGltZW91dCBpcyA1IHNlY29uZHMuIFRoaXMgaXMgbWFpbmx5IG5lZWRlZCB0byBjYXRjaCBKU09OUCByZXF1ZXN0cyB0aGF0IGVycm9yLlxuICAgICAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxuICAgICAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG5cbiAgICAgIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXG4gICAgICBzZXJ2aWNlczogW1xuICAgICAgICAnaXBpbmZvJ1xuXG4gICAgICAgIC8qXG5cbiAgICAgICAgLy8gJ2lwaW5mb2RiJyByZXF1aXJlcyBzb21lIG9wdGlvbnMsIHNvIHdlIGRlZmluZSBpdCB1c2luZyBhbiBvYmplY3RcbiAgICAgICAgLy8gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc2VydmljZVxuXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaXBpbmZvZGInLFxuICAgICAgICAgIGludGVycG9sYXRlVXJsOiB7XG4gICAgICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XG5cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ307XG4gICAgICAgIH0sXG5cbiAgICAgICAgKi9cbiAgICAgIF0sXG5cbiAgICAgIHNlcnZpY2VEZWZpbml0aW9uczoge1xuICAgICAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IFsnQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcihqc29uKVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlcXVpcmVzIGFuIG9wdGlvbiB0byBkZWZpbmUgYGtleWAuIE9wdGlvbnMgYXJlIHByb2l2ZWQgdXNpbmcgb2JqZWN0cyBvciBmdW5jdGlvbnNcbiAgICAgICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgJy8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxuICAgICAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgaXMgSlNPTlAsIHRoZXJlZm9yZSB3ZSBtdXN0IHNldCBpdCB0byBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcih7ZXJyb3I6IGpzb24uc3RhdHVzTWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlIHdoaWNoIGRlZmluZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LiBPbmNlIGxvYWRlZCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSwgc28gaXQgbXVzdCBiZSBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgIGlmICghd2luZG93Lmdlb2lwMikge1xuICAgICAgICAgICAgICAgIGRvbmUoXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdC4gVGhlIGRvd25sb2FkZWQgc2NyaXB0IHNob3VsZCBoYXZlIGV4cG9ydGVkIGBnZW9pcDJgIHRvIHRoZSBnbG9iYWwgc2NvcGUnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBnZW9pcDIuY291bnRyeShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZTogbG9jYXRpb24uY291bnRyeS5pc29fY29kZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxuICAgICAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTG9jYXRpb24ob3B0aW9ucykge1xuICAgICAgLy8gU2V0IHVwIG9wdGlvbnNcbiAgICAgIHV0aWwuZGVlcEV4dGVuZCgodGhpcy5vcHRpb25zID0ge30pLCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xOyAvLyB0aGUgaW5kZXggKGluIG9wdGlvbnMpIG9mIHRoZSBzZXJ2aWNlIHdlJ3JlIGN1cnJlbnRseSB1c2luZ1xuICAgIH1cblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXROZXh0U2VydmljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNlcnZpY2U7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KCsrdGhpcy5jdXJyZW50U2VydmljZUluZGV4KTtcbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPCB0aGlzLm9wdGlvbnMuc2VydmljZXMubGVuZ3RoICYmXG4gICAgICAgICFzZXJ2aWNlXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gc2VydmljZTtcbiAgICB9O1xuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmdldFNlcnZpY2VCeUlkeCA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXG4gICAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF07XG5cbiAgICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNPcHRzID0gc2VydmljZU9wdGlvbigpO1xuICAgICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGR5bmFtaWNPcHRzLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXG4gICAgICAgICAgKSA6IGR5bmFtaWNPcHRzO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbl0oKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIGFzc3VtZSB7bmFtZTogJ2lwaW5mbycsIC4uLm90aGVyT3B0aW9uc31cbiAgICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxuICAgICAgICAgIHNlcnZpY2VPcHRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cbiAgICAvLyBJZiB0aGUgc2VydmljZSBmYWlscywgYHJ1bk5leHRTZXJ2aWNlT25FcnJvcmAgd2lsbCBjb250aW51ZSB0cnlpbmcgZWFjaCBzZXJ2aWNlIHVudGlsIGFsbCBmYWlsLCBvciBvbmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2NhdGUgPSBmdW5jdGlvbihjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKCk7XG5cbiAgICAgIGlmICghc2VydmljZSkge1xuICAgICAgICBlcnJvcihuZXcgRXJyb3IoJ05vIHNlcnZpY2VzIHRvIHJ1bicpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbGxiYWNrQ29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgIHRoaXMuY2FsbGJhY2tFcnJvciA9IGVycm9yO1xuXG4gICAgICB0aGlzLnJ1blNlcnZpY2Uoc2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIC8vIFBvdGVudGlhbGx5IGFkZHMgYSBjYWxsYmFjayB0byBhIHVybCBmb3IganNvbnAuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnNldHVwVXJsID0gZnVuY3Rpb24oc2VydmljZSkge1xuICAgICAgY29uc3Qgc2VydmljZU9wdHMgPSB0aGlzLmdldEN1cnJlbnRTZXJ2aWNlT3B0cygpO1xuICAgICAgcmV0dXJuIHNlcnZpY2UudXJsLnJlcGxhY2UoL1xceyguKj8pXFx9L2csIGZ1bmN0aW9uKF8sIHBhcmFtKSB7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gJ2NhbGxiYWNrJykge1xuICAgICAgICAgIGNvbnN0IHRlbXBOYW1lID0gJ2NhbGxiYWNrJyArIERhdGUubm93KCk7XG4gICAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyByZXF1aXJlcyBhIGBzZXJ2aWNlYCBvYmplY3QgdGhhdCBkZWZpbmVzIGF0IGxlYXN0IGEgYHVybGAgYW5kIGBjYWxsYmFja2BcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuU2VydmljZSA9IGZ1bmN0aW9uKHNlcnZpY2UsIGNvbXBsZXRlKSB7XG4gICAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxuICAgICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3Q7XG5cbiAgICAgIC8vIGJvdGggZnVuY3Rpb25zIGhhdmUgc2ltaWxhciBzaWduYXR1cmVzIHNvIHdlIGNhbiBwYXNzIHRoZSBzYW1lIGFyZ3VtZW50cyB0byBib3RoXG4gICAgICByZXF1ZXN0RnVuY3Rpb24oXG4gICAgICAgIHRoaXMuc2V0dXBVcmwoc2VydmljZSksXG4gICAgICAgIHhociA9PiB7XG4gICAgICAgICAgLy8gaWYgYCF4aHJgLCB0aGVuIGBnZXRTY3JpcHRgIGZ1bmN0aW9uIHdhcyB1c2VkLCBzbyB0aGVyZSBpcyBubyByZXNwb25zZSB0ZXh0XG4gICAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IHhociA/IHhoci5yZXNwb25zZVRleHQgOiAnJztcblxuICAgICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cbiAgICAgICAgICAvLyBpZiB0aGUgc2NyaXB0IGlzIEpTT05QLCB0aGVuIGEgdGltZSBkZWZpbmVkIGZ1bmN0aW9uIGBjYWxsYmFja197RGF0ZS5ub3d9YCBoYXMgYWxyZWFkeVxuICAgICAgICAgIC8vIGJlZW4gY2FsbGVkIChhcyB0aGUgSlNPTlAgY2FsbGJhY2spLiBUaGlzIGNhbGxiYWNrIHNldHMgdGhlIF9fSlNPTlBfREFUQSBwcm9wZXJ0eVxuICAgICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0gc2VydmljZS5fX0pTT05QX0RBVEE7XG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5fX0pTT05QX0RBVEE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2FsbCB0aGUgc2VydmljZSBjYWxsYmFjayB3aXRoIHRoZSByZXNwb25zZSB0ZXh0IChzbyBpdCBjYW4gcGFyc2UgdGhlIHJlc3BvbnNlKVxuICAgICAgICAgIHRoaXMucnVuU2VydmljZUNhbGxiYWNrLmNhbGwodGhpcywgY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMub3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBzZXJ2aWNlLmRhdGEsXG4gICAgICAgIHNlcnZpY2UuaGVhZGVyc1xuICAgICAgKTtcblxuICAgICAgLy8gYHNlcnZpY2UuZGF0YWAgYW5kIGBzZXJ2aWNlLmhlYWRlcnNgIGFyZSBvcHRpb25hbCAodGhleSBvbmx5IGNvdW50IGlmIGAhc2VydmljZS5pc1NjcmlwdGAgYW55d2F5KVxuICAgIH07XG5cbiAgICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXG4gICAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XG4gICAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1blNlcnZpY2VDYWxsYmFjayA9IGZ1bmN0aW9uKFxuICAgICAgY29tcGxldGUsXG4gICAgICBzZXJ2aWNlLFxuICAgICAgcmVzcG9uc2VUZXh0XG4gICAgKSB7XG4gICAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgc2VydmljZSB1c2VzIHRoZSBhc3luYyBjYWxsYmFjayBpbiBpdHMgaGFuZGxlciBtZXRob2RcbiAgICAgIGNvbnN0IHNlcnZpY2VSZXN1bHRIYW5kbGVyID0gYXN5bmNSZXN1bHQgPT4ge1xuICAgICAgICAvLyBpZiBgcmVzdWx0YCBpcyBhIHZhbGlkIHZhbHVlLCB0aGVuIHRoaXMgZnVuY3Rpb24gc2hvdWxkbid0IHJlYWxseSBydW5cbiAgICAgICAgLy8gZXZlbiBpZiBpdCBpcyBjYWxsZWQgYnkgYHNlcnZpY2UuY2FsbGJhY2tgXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQuY2FsbCh0aGlzLCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcbiAgICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dCk7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQuY2FsbCh0aGlzLCBjb21wbGV0ZSwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgd2l0aCB0aGUgYHJlc3VsdGAgZnJvbSBgc2VydmljZS5jYWxsYmFja2AgcmVnYXJkbGVzcyBvZiBob3cgaXQgcHJvdmlkZWQgdGhhdCByZXN1bHQgKHN5bmMgb3IgYXN5bmMpLlxuICAgIC8vIGByZXN1bHRgIHdpbGwgYmUgd2hhdGV2ZXIgaXMgcmV0dXJuZWQgZnJvbSBgc2VydmljZS5jYWxsYmFja2AuIEEgc2VydmljZSBjYWxsYmFjayBzaG91bGQgcHJvdmlkZSBhbiBvYmplY3Qgd2l0aCBkYXRhXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLm9uU2VydmljZVJlc3VsdCA9IGZ1bmN0aW9uKGNvbXBsZXRlLCByZXN1bHQpIHtcbiAgICAgIC8vIGNvbnZlcnQgcmVzdWx0IHRvIG5vZGVqcyBzdHlsZSBhc3luYyBjYWxsYmFja1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yIHx8IChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSkge1xuICAgICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIHJlc3VsdCwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxuICAgIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuTmV4dFNlcnZpY2VPbkVycm9yID0gZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMubG9nRXJyb3IoZXJyKTtcblxuICAgICAgICBjb25zdCBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKTtcblxuICAgICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja0Vycm9yLFxuICAgICAgICAgICAgbmV3IEVycm9yKCdBbGwgc2VydmljZXMgZmFpbGVkJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRDdXJyZW50U2VydmljZU9wdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXG5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7bmFtZTogdmFsfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbCgpXG4gICAgICB9ZWxzZSBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgYWZ0ZXIgcmVzZXR0aW5nIHRoZSBgY3VycmVudFNlcnZpY2VJbmRleGBcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuY29tcGxldGVTZXJ2aWNlID0gZnVuY3Rpb24oZm4sIGRhdGEpIHtcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xO1xuXG4gICAgICBmbiAmJiBmbihkYXRhKTtcbiAgICB9O1xuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmxvZ0Vycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXg7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoaWR4KTtcblxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnVGhlIHNlcnZpY2VbJyArXG4gICAgICAgICAgaWR4ICtcbiAgICAgICAgICAnXSAoJyArXG4gICAgICAgICAgc2VydmljZS51cmwgK1xuICAgICAgICAgICcpIHJlc3BvbmRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3InLFxuICAgICAgICBlcnJcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFNjcmlwdCh1cmwsIGNhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgICBsZXQgdGltZW91dElkeDtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgcy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpO1xuICAgICAgcy5zcmMgPSB1cmwuc3JjIHx8IHVybDtcbiAgICAgIHMuYXN5bmMgPSBmYWxzZTtcblxuICAgICAgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gcy5yZWFkeVN0YXRlO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWR4KTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrLmRvbmUgJiYgKCFzdGF0ZSB8fCAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHN0YXRlKSkpIHtcbiAgICAgICAgICBjYWxsYmFjay5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuXG4gICAgICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xuICAgICAgLy8gb25lIHdheSBpcyB0byB1c2UgYSB0aW1lb3V0XG4gICAgICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWU7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUFzeW5jUmVxdWVzdChcbiAgICAgIHVybCxcbiAgICAgIG9uQ29tcGxldGUsXG4gICAgICB0aW1lb3V0LFxuICAgICAgcG9zdERhdGEsXG4gICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICkge1xuICAgICAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxuICAgICAgICAnTVNYTUwyLlhNTEhUVFAuMy4wJ1xuICAgICAgKTtcblxuICAgICAgeGhyLm9wZW4ocG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKTtcblxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMykge1xuICAgICAgICAgICAgb25Db21wbGV0ZSh4aHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQocG9zdERhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvRXJyb3Iob2JqKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdFcnJvciBbJyArIChvYmouY29kZSB8fCAnVU5LTk9XTicpICsgJ106ICcgKyBvYmouZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBMb2NhdGlvbjtcbiAgfSkoKTtcblxuICBjYy5MYXcgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cbiAgICAgIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cbiAgICAgIC8vIEl0IGRvZXMgbm90IGFmZmVjdCBoaWRpbmcgdGhlIHBvcHVwIGZvciBjb3VudHJpZXMgdGhhdCBkbyBub3QgaGF2ZSBjb29raWUgbGF3LlxuICAgICAgcmVnaW9uYWxMYXc6IHRydWUsXG5cbiAgICAgIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xuICAgICAgaGFzTGF3OiBbXG4gICAgICAgICdBVCcsXG4gICAgICAgICdCRScsXG4gICAgICAgICdCRycsXG4gICAgICAgICdIUicsXG4gICAgICAgICdDWicsXG4gICAgICAgICdDWScsXG4gICAgICAgICdESycsXG4gICAgICAgICdFRScsXG4gICAgICAgICdGSScsXG4gICAgICAgICdGUicsXG4gICAgICAgICdERScsXG4gICAgICAgICdFTCcsXG4gICAgICAgICdIVScsXG4gICAgICAgICdJRScsXG4gICAgICAgICdJVCcsXG4gICAgICAgICdMVicsXG4gICAgICAgICdMVCcsXG4gICAgICAgICdMVScsXG4gICAgICAgICdNVCcsXG4gICAgICAgICdOTCcsXG4gICAgICAgICdOTycsXG4gICAgICAgICdQTCcsXG4gICAgICAgICdQVCcsXG4gICAgICAgICdTSycsXG4gICAgICAgICdFUycsXG4gICAgICAgICdTRScsXG4gICAgICAgICdHQicsXG4gICAgICAgICdVSycsXG4gICAgICAgICdHUicsXG4gICAgICAgICdFVScsXG4gICAgICAgICdSTydcbiAgICAgIF0sXG5cbiAgICAgIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGFsbCBjb29raWUgY29uc2VudCBjaG9pY2VzIG11c3QgYmUgcmV2b2thYmxlIChhIHVzZXIgbXVzdCBiZSBhYmxlIHRvbyBjaGFuZ2UgdGhlaXIgbWluZClcbiAgICAgIHJldm9rYWJsZTogW1xuICAgICAgICAnSFInLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnRVMnXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhIHBlcnNvbiBjYW4gb25seSBcImNvbnNlbnRcIiBpZiB0aGUgZXhwbGljaXRseSBjbGljayBvbiBcIkkgYWdyZWVcIi5cbiAgICAgIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXG4gICAgICBleHBsaWNpdEFjdGlvbjogWydIUicsICdJVCcsICdFUycsICdOTyddXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExhdyhvcHRpb25zKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBMYXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBzZXQgb3B0aW9ucyBiYWNrIHRvIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgdXRpbC5kZWVwRXh0ZW5kKCh0aGlzLm9wdGlvbnMgPSB7fSksIGRlZmF1bHRPcHRpb25zIClcblxuICAgICAgLy8gbWVyZ2UgaW4gdXNlciBvcHRpb25zXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuICAgIH07XG5cbiAgICBMYXcucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGNvdW50cnlDb2RlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNMYXc6IHRoaXMub3B0aW9ucy5oYXNMYXcuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgICAgcmV2b2thYmxlOiB0aGlzLm9wdGlvbnMucmV2b2thYmxlLmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIGV4cGxpY2l0QWN0aW9uOiB0aGlzLm9wdGlvbnMuZXhwbGljaXRBY3Rpb24uaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5hcHBseUxhdyA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvdW50cnlDb2RlKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpO1xuXG4gICAgICBpZiAoIWNvdW50cnkuaGFzTGF3KSB7XG4gICAgICAgIC8vIFRoZSBjb3VudHJ5IGhhcyBubyBjb29raWUgbGF3XG4gICAgICAgIG9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyhjb3VudHJ5Q29kZSwgY291bnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZWdpb25hbExhdykge1xuICAgICAgICBpZiAoY291bnRyeS5yZXZva2FibGUpIHtcbiAgICAgICAgICAvLyBXZSBtdXN0IHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJldm9rZSBjb25zZW50IGF0IGEgbGF0ZXIgdGltZVxuICAgICAgICAgIG9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudHJ5LmV4cGxpY2l0QWN0aW9uKSB7XG4gICAgICAgICAgLy8gVGhlIHVzZXIgbXVzdCBleHBsaWNpdGx5IGNsaWNrIHRoZSBjb25zZW50IGJ1dHRvblxuICAgICAgICAgIG9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF3O1xuICB9KSgpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXG4gIC8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cbiAgY2MuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGNvbnN0IGxhdyA9IG5ldyBjYy5MYXcob3B0aW9ucy5sYXcpO1xuXG4gICAgaWYgKCFjb21wbGV0ZSkgY29tcGxldGUgPSBmdW5jdGlvbigpIHt9O1xuICAgIGlmICghZXJyb3IpIGVycm9yID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIGNvbnN0IGFuc3dlcnMgPSBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkubWFwKCBjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSB1dGlsLmdldENvb2tpZSgnY29va2llY29uc2VudF9zdGF0dXNfJytjYXRlZ29yeSlcbiAgICAgIHJldHVybiBpc1ZhbGlkU3RhdHVzKGFuc3dlcikgPyB7IFtjYXRlZ29yeV06IGFuc3dlciB9IDogdW5kZWZpbmVkXG4gICAgfSkuZmlsdGVyKG9iaiA9PiBvYmogPyBvYmpbT2JqZWN0LmtleXMob2JqKVswXV0gOiBmYWxzZSk7XG5cbiAgICAvLyBpZiB0aGV5IGhhdmUgYWxyZWFkeSBhbnN3ZXJlZFxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbXBsZXRlKGFuc3dlcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNjLmdldENvdW50cnlDb2RlKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRoZSBsYXcgb3IgbG9jYXRpb24gb3B0aW9ucyBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxhdztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubG9jYXRpb247XG5cbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IGxhdy5hcHBseUxhdyhvcHRpb25zLCByZXN1bHQuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZShuZXcgY2MuUG9wdXAob3B0aW9ucykpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRoZSBsYXcgb3IgbG9jYXRpb24gb3B0aW9ucyBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxhdztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubG9jYXRpb247XG5cbiAgICAgICAgZXJyb3IoZXJyLCBuZXcgY2MuUG9wdXAob3B0aW9ucykpO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB0cmllcyB0byBmaW5kIHlvdXIgY3VycmVudCBsb2NhdGlvbi4gSXQgZWl0aGVyIGdyYWJzIGl0IGZyb20gYSBoYXJkY29kZWQgb3B0aW9uIGluXG4gIC8vIGBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZWAsIG9yIGF0dGVtcHRzIHRvIG1ha2UgYSBsb2NhdGlvbiBzZXJ2aWNlIHJlcXVlc3QuIFRoaXMgZnVuY3Rpb24gYWNjZXB0c1xuICAvLyBvcHRpb25zICh3aGljaCBjYW4gY29uZmlndXJlIHRoZSBgbGF3YCBhbmQgYGxvY2F0aW9uYCBtb2R1bGVzKSBhbmQgZmlyZXMgYSBjYWxsYmFjayB3aXRoIHdoaWNoXG4gIC8vIHBhc3NlcyBhbiBvYmplY3QgYHtjb2RlOiBjb3VudHJ5Q29kZX1gIGFzIHRoZSBmaXJzdCBhcmd1bWVudCAod2hpY2ggY2FuIGhhdmUgdW5kZWZpbmVkIHByb3BlcnRpZXMpXG4gIGNjLmdldENvdW50cnlDb2RlID0gZnVuY3Rpb24ob3B0aW9ucywgY29tcGxldGUsIGVycm9yKSB7XG4gICAgaWYgKG9wdGlvbnMubGF3ICYmIG9wdGlvbnMubGF3LmNvdW50cnlDb2RlKSB7XG4gICAgICBjb21wbGV0ZSh7XG4gICAgICAgIGNvZGU6IG9wdGlvbnMubGF3LmNvdW50cnlDb2RlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IGxvY2F0b3IgPSBuZXcgY2MuTG9jYXRpb24ob3B0aW9ucy5sb2NhdGlvbik7XG4gICAgICBsb2NhdG9yLmxvY2F0ZShmdW5jdGlvbihzZXJ2aWNlUmVzdWx0KSB7XG4gICAgICAgIGNvbXBsZXRlKHNlcnZpY2VSZXN1bHQgfHwge30pO1xuICAgICAgfSwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb21wbGV0ZSh7fSk7XG4gIH07XG5cbiAgLy8gZXhwb3J0IHV0aWxzIChubyBwb2ludCBpbiBoaWRpbmcgdGhlbSwgc28gd2UgbWF5IGFzIHdlbGwgZXhwb3NlIHRoZW0pXG4gIGNjLnV0aWxzID0gdXRpbDtcblxuICAvLyBwcmV2ZW50IHRoaXMgY29kZSBmcm9tIGJlaW5nIHJ1biB0d2ljZVxuICBjYy5oYXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgd2luZG93LmNvb2tpZWNvbnNlbnQgPSBjYztcbn0pKHdpbmRvdy5jb29raWVjb25zZW50IHx8IHt9KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=