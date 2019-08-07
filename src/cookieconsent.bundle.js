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
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalises the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


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
        categories: " \n          <ul class=\"cc-categories\">\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"0\"><input type=\"checkbox\" name=\"uncategorized\"/><span class=\"cc-btn-checkbox\"></span>Uncategorized</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Uncategorized Definition Button\" tabindex=\"1\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies that don't fit any other category.</p>\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"2\"><input type=\"checkbox\" name=\"essential\" checked disabled/><span class=\"cc-btn-checkbox\"></span>Essential</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Essential Definition Button\" tabindex=\"3\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for essential application or website opperation cookies.</p>\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"4\"><input type=\"checkbox\" name=\"personalization\"/><span class=\"cc-btn-checkbox\"></span>Personalization</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Personalization Definition Button\" tabindex=\"5\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies used to help peronalize the application to a specific user.</p>\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"6\"><input type=\"checkbox\" name=\"analytics\"/><span class=\"cc-btn-checkbox\"></span>Analytics</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Analytics Definition Button\" tabindex=\"7\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies used to help analyize data.</p>\n              </div>\n            </li>\n            <li class=\"cc-category\">\n              <button class=\"cc-btn\" tabindex=\"8\"><input type=\"checkbox\" name=\"marketing\"/><span class=\"cc-btn-checkbox\"></span>Marketing</button>\n              <button class=\"cc-btn cc-info\" aria-label=\"Marketing Definition Button\" tabindex=\"9\">^</button>\n              <div class=\"cc-tooltip\">\n                <p>This is the category for cookies used to help peronalize your internet shopping & advertisement experiences.</p>\n              </div>\n            </li>\n          </ul>\n        ",
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
      // set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
      dismissOnLinkClick: false,
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

      if (this.onLinkClick) {
        window.removeEventListener('click', this.onLinkClick);
        this.onLinkClick = null;
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
      var popup = palette.popup,
          button = palette.button,
          highlight = palette.highlight,
          saveButton = palette.saveButton; // needs background colour, text and link will be set to black/white if not specified

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

        if (saveButton) {
          colorStyles[prefix + ' .cc-btn.cc-save'] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
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

    function getEventPath(event) {
      var path = event.composedPath ? event.composedPath() : function (arr, element) {
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

    function applyAutoDismiss() {
      var _this4 = this;

      var setStatuses = this.setStatuses.bind(this);
      var close = this.close.bind(this);
      var _this$options = this.options,
          enabled = _this$options.enabled,
          delay = _this$options.dismissOnTimeout,
          scrollRange = _this$options.dismissOnScroll,
          dismissOnLinkClick = _this$options.dismissOnLinkClick,
          dismissOnWindowClick = _this$options.dismissOnWindowClick;

      if (enabled) {
        if (typeof delay == 'number' && delay >= 0) {
          this.dismissTimeout = window.setTimeout(function () {
            setStatuses(cc.status.dismiss);
            close(true);
          }, Math.floor(delay));
        } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
          this.onWindowScroll = function () {
            if (window.pageYOffset > Math.floor(scrollRange)) {
              setStatuses(cc.status.dismiss);
              close(true);
              window.removeEventListener('scroll', _this4.onWindowScroll, {
                passive: true
              });
              _this4.onWindowScroll = null;
            }
          };

          window.addEventListener('scroll', this.onWindowScroll, {
            passive: true
          });
        } else if (dismissOnWindowClick) {
          this.onWindowClick = function (evt) {
            if (!getEventPath(evt).some(function (element) {
              return _this4.options.ignoreClicksFrom.some(function (ignoredClick) {
                return element.classList && element.classList.contains(ignoredClick);
              });
            })) {
              setStatuses(cc.status.dismiss);
              close(true);
              window.removeEventListener('click', _this4.onWindowClick);
              window.removeEventListener('touchend', _this4.onWindowClick);
              _this4.onWindowClick = null;
            }
          };

          window.addEventListener('click', this.onWindowClick);
          window.addEventListener('touchend', this.onWindowClick);
        } else if (dismissOnLinkClick) {
          this.onLinkClick = function (evt) {
            if (getEventPath(evt).some(function (elem) {
              return typeof elem.tagName !== 'undefined' && elem.tagName === 'A';
            })) {
              setStatuses(cc.status.dismiss);
              close(true);
              window.removeEventListener('click', _this4.onLinkClick);
              _this4.onLinkClick = null;
            }
          };

          window.addEventListener('click', this.onLinkClick);
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
      var _this5 = this;

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


        _this5.runServiceCallback.call(_this5, complete, service, responseText);
      }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
    }; // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
    // We need to run its callback which determines if its successful or not
    // `complete` is called on success or failure


    Location.prototype.runServiceCallback = function (complete, service, responseText) {
      var _this6 = this;

      // this is the function that is called if the service uses the async callback in its handler method
      var serviceResultHandler = function serviceResultHandler(asyncResult) {
        // if `result` is a valid value, then this function shouldn't really run
        // even if it is called by `service.callback`
        if (!result) {
          _this6.onServiceResult.call(_this6, complete, asyncResult);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2E0M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImRlZXBFeHRlbmQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJpc1BsYWluT2JqZWN0IiwiZ2V0Q29va2llIiwibmFtZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9wIiwic2hpZnQiLCJzZXRDb29raWUiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsImV4ZGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJ0aHJvdHRsZSIsImxpbWl0Iiwid2FpdCIsImFwcGx5Iiwic2V0VGltZW91dCIsImhhc2giLCJpIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGlzZUhleCIsImhleCIsInN1YnN0ciIsImdldENvbnRyYXN0IiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJnZXRMdW1pbmFuY2UiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJ0cmF2ZXJzZURPTVBhdGgiLCJlbGVtIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3RhdHVzIiwiZGVueSIsImFsbG93IiwiZGlzbWlzcyIsImNhdGVnb3J5IiwidW5jYXRlZ29yaXplZCIsImVzc2VudGlhbCIsInBlcnNvbmFsaXphdGlvbiIsImFuYWx5dGljcyIsIm1hcmtldGluZyIsImlzVmFsaWRTdGF0dXMiLCJrZXlzIiwiaW5kZXhPZiIsInRyYW5zaXRpb25FbmQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4Iiwic3R5bGUiLCJoYXNUcmFuc2l0aW9uIiwiY3VzdG9tU3R5bGVzIiwiUG9wdXAiLCJkZWZhdWx0T3B0aW9ucyIsImVuYWJsZWQiLCJjb250YWluZXIiLCJvblBvcHVwT3BlbiIsIm9uUG9wdXBDbG9zZSIsIm9uSW5pdGlhbGl6ZSIsInN0YXR1c2VzIiwib25TdGF0dXNDaGFuZ2UiLCJjb29raWVOYW1lIiwiY2hvc2VuQmVmb3JlIiwib25SZXZva2VDaG9pY2UiLCJvbk5vQ29va2llTGF3IiwiY291bnRyeUNvZGUiLCJjb3VudHJ5IiwiY29udGVudCIsImhlYWRlciIsIm1lc3NhZ2UiLCJsaW5rIiwiaHJlZiIsImNsb3NlIiwicG9saWN5IiwiZWxlbWVudHMiLCJtZXNzYWdlbGluayIsImNhdGVnb3JpZXMiLCJzYXZlIiwid2luZG93IiwibW9kYWwiLCJyZXZva2VCdG4iLCJjb21wbGlhbmNlIiwiaW5mbyIsInR5cGUiLCJsYXlvdXRzIiwiYmFzaWMiLCJsYXlvdXQiLCJwb3NpdGlvbiIsInRoZW1lIiwicGFsZXR0ZSIsInJldm9rYWJsZSIsImFuaW1hdGVSZXZva2FibGUiLCJzaG93TGluayIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImRpc21pc3NPbkxpbmtDbGljayIsImlnbm9yZUNsaWNrc0Zyb20iLCJhdXRvT3BlbiIsImF1dG9BdHRhY2giLCJtb2JpbGVGb3JjZUZsb2F0Iiwid2hpdGVsaXN0UGFnZSIsImJsYWNrbGlzdFBhZ2UiLCJvdmVycmlkZUhUTUwiLCJDb29raWVQb3B1cCIsImluaXRpYWxpemUiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwiZGVzdHJveSIsImNoZWNrQ2FsbGJhY2tIb29rcyIsImNhbGwiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc21pc3NUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25XaW5kb3dTY3JvbGwiLCJvbldpbmRvd0NsaWNrIiwib25MaW5rQ2xpY2siLCJvbk1vdXNlTW92ZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQ3VzdG9tU3R5bGUiLCJvcGVuIiwiaXNPcGVuIiwiZmFkZUluIiwidG9nZ2xlUmV2b2tlQnV0dG9uIiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvdyIsInJldm9rZUNob2ljZSIsInByZXZlbnRPcGVuIiwiY2xlYXJTdGF0dXNlcyIsImhhc0Fuc3dlcmVkIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQ29uc2VudGVkIiwibWFwIiwic2V0U3RhdHVzZXMiLCJ1cGRhdGVDYXRlZ29yeVN0YXR1cyIsImNhdGVnb3J5TmFtZSIsImZvckVhY2giLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwicmVtb3ZlIiwiY29tcGxldGUiLCJjb29raWVFbmFibGVkIiwiQ29va2llc09LIiwic3RhdHVzZXNWYWx1ZXMiLCJtYXRjaGVzIiwiaGFzTWF0Y2hlcyIsImZpbHRlciIsIm1hdGNoIiwiZ2V0UG9zaXRpb25DbGFzc2VzIiwicG9zIiwib3B0cyIsInBvc2l0aW9uU3R5bGUiLCJjbGFzc2VzIiwicHVzaCIsImF0dGFjaEN1c3RvbVBhbGV0dGUiLCJjdXN0b21TdHlsZVNlbGVjdG9yIiwiaW50ZXJwb2xhdGVkIiwiY29tcGxpYW5jZVR5cGUiLCJtYXJrdXAiLCJkaXYiLCJjb250Iiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImNoZWNrZWQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYnRuIiwiUmVnRXhwIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlIiwicmVmZXJlbmNlcyIsImNvbG9yU3R5bGVzIiwicG9wdXAiLCJidXR0b24iLCJoaWdobGlnaHQiLCJzYXZlQnV0dG9uIiwidGV4dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG91ciIsImhlYWQiLCJzaGVldCIsInJ1bGVJbmRleCIsImluc2VydFJ1bGUiLCJjdXN0b21TdHlsZSIsInN0eWxlTm9kZSIsIm93bmVyTm9kZSIsImdldEV2ZW50UGF0aCIsImNvbXBvc2VkUGF0aCIsImFyciIsImNvbnNvbGUiLCJ3YXJuIiwiZGVsYXkiLCJzY3JvbGxSYW5nZSIsIk1hdGgiLCJmbG9vciIsInBhZ2VZT2Zmc2V0IiwicGFzc2l2ZSIsImV2dCIsImlnbm9yZWRDbGljayIsInRhZ05hbWUiLCJhY3RpdmUiLCJtaW5ZIiwibWF4WSIsImlubmVySGVpZ2h0IiwiY2xpZW50WSIsIkxvY2F0aW9uIiwidGltZW91dCIsInNlcnZpY2VzIiwic2VydmljZURlZmluaXRpb25zIiwiaXBpbmZvIiwidXJsIiwiaGVhZGVycyIsImRvbmUiLCJyZXNwb25zZSIsImpzb24iLCJwYXJzZSIsImVycm9yIiwidG9FcnJvciIsImNvZGUiLCJlcnIiLCJpcGluZm9kYiIsImlzU2NyaXB0Iiwic3RhdHVzQ29kZSIsInN0YXR1c01lc3NhZ2UiLCJtYXhtaW5kIiwiZ2VvaXAyIiwiRXJyb3IiLCJpc29fY29kZSIsImN1cnJlbnRTZXJ2aWNlSW5kZXgiLCJnZXROZXh0U2VydmljZSIsInNlcnZpY2UiLCJnZXRTZXJ2aWNlQnlJZHgiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJhc3NpZ24iLCJsb2NhdGUiLCJjYWxsYmFja0NvbXBsZXRlIiwiY2FsbGJhY2tFcnJvciIsInJ1blNlcnZpY2UiLCJydW5OZXh0U2VydmljZU9uRXJyb3IiLCJzZXR1cFVybCIsInNlcnZpY2VPcHRzIiwiZ2V0Q3VycmVudFNlcnZpY2VPcHRzIiwiXyIsInBhcmFtIiwidGVtcE5hbWUiLCJub3ciLCJyZXMiLCJfX0pTT05QX0RBVEEiLCJpbnRlcnBvbGF0ZVVybCIsInJlcXVlc3RGdW5jdGlvbiIsImdldFNjcmlwdCIsIm1ha2VBc3luY1JlcXVlc3QiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJkYXRhIiwic2VydmljZVJlc3VsdEhhbmRsZXIiLCJhc3luY1Jlc3VsdCIsInJlc3VsdCIsIm9uU2VydmljZVJlc3VsdCIsImxvZ0Vycm9yIiwibmV4dFNlcnZpY2UiLCJjb21wbGV0ZVNlcnZpY2UiLCJ2YWwiLCJmbiIsInRpbWVvdXRJZHgiLCJzIiwic3JjIiwiYXN5bmMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJzdGF0ZSIsInJlYWR5U3RhdGUiLCJvbkNvbXBsZXRlIiwicG9zdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsInNldFJlcXVlc3RIZWFkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJsIiwic2VuZCIsIkxhdyIsInJlZ2lvbmFsTGF3IiwiaGFzTGF3IiwiZXhwbGljaXRBY3Rpb24iLCJnZXQiLCJhcHBseUxhdyIsImxhdyIsImFuc3dlcnMiLCJhbnN3ZXIiLCJnZXRDb3VudHJ5Q29kZSIsImxvY2F0b3IiLCJzZXJ2aWNlUmVzdWx0IiwidXRpbHMiLCJjb29raWVjb25zZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7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QyxjQUFILEdBQW9CLElBQXBCO0FBRUE4SCxRQUFNLENBQUN5USxhQUFQLEdBQXVCeFksRUFBdkI7QUFDRCxDQWx4REEsQ0FreERFK0gsTUFBTSxDQUFDeVEsYUFBUCxJQUF3QixFQWx4RDFCLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDSEEsY0FBYyxtQkFBTyxDQUFDLG1TQUFxSjs7QUFFM0ssNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJjb29raWVjb25zZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Nvb2tpZWNvbnNlbnQuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYy13aW5kb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1pbnZpc2libGUge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi8qIG9ubHkgYW5pbWF0ZSBpZmhhcyBjbGFzcyAnY2MtYW5pbWF0ZScgKi9cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2Uge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtZ3Jvd2VyIHtcXG4gIC8qIEluaXRpYWxseSB3ZSBkb24ndCB3YW50IGFueSBoZWlnaHQsIGFuZCB3ZSB3YW50IHRoZSBjb250ZW50cyB0byBiZSBoaWRkZW4gKi9cXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogU2V0IG91ciB0cmFuc2l0aW9ucyB1cC4gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7IH1cXG5cXG4vKiB0aGUgcG9wdXAgd2luZG93ICovXFxuLmNjLXdpbmRvdyxcXG4uY2MtcmV2b2tlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogZXhjbHVkZSBwYWRkaW5nIHdoZW4gZGVhbGluZyB3aXRoIHdpZHRoICovXFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBDYWxpYnJpLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC8qIGJ5IHNldHRpbmcgdGhlIGJhc2UgZm9udCBoZXJlLCB3ZSBjYW4gc2l6ZSB0aGUgcmVzdCBvZiB0aGUgcG9wdXAgdXNpbmcgQ1NTIGBlbWAgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC8qIHRoZSBmb2xsb3dpbmcgYXJlIHJhbmRvbSB1bmp1c3RpZmllZCBzdHlsZXMgLSBqdXN0IGJlY2F1c2UgLSBzaG91bGQgcHJvYmFibHkgYmUgcmVtb3ZlZCAqL1xcbiAgei1pbmRleDogOTk5OTsgfVxcblxcbi5jYy13aW5kb3cuY2Mtc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7IH1cXG5cXG4vKiAyIGJhc2ljIHR5cGVzIG9mIHdpbmRvdyAtIGZsb2F0aW5nIC8gYmFubmVyICovXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXgtd2lkdGg6IDI0ZW07XFxuICAvKiAxZW0gPT0gMTZweCB0aGVyZWZvcmUgMjRlbSA9PSAzODRweCAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5jYy1yZXZva2Uge1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIGNsaWNrYWJsZSB0aGluZ3MgKi9cXG4uY2MtYnRuLFxcbi5jYy1saW5rLFxcbi5jYy1jbG9zZSxcXG4uY2MtcmV2b2tlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYy1saW5rIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtbGluazpob3ZlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmNjLWxpbms6YWN0aXZlLFxcbi5jYy1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IGluaXRpYWw7IH1cXG5cXG4uY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGlzZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGTE9BVElORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHRoZXNlIGNsYXNzZXMgcG9zaXRpb24gdGhlIGZsb2F0aW5nIGVsZW1lbnQgKi9cXG4uY2MtdG9wIHtcXG4gIHRvcDogMWVtOyB9XFxuXFxuLmNjLWxlZnQge1xcbiAgbGVmdDogMWVtOyB9XFxuXFxuLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAxZW07IH1cXG5cXG4uY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMWVtOyB9XFxuXFxuLyogbGlua3MgdGhhdCBhcmUgZGlyZWN0IGRlY2VuZGFudHMgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBibG9jayAqL1xcbi5jYy1mbG9hdGluZyA+IC5jYy1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2Uge1xcbiAgZmxleDogMSAwIGF1dG87IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBCQU5ORVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10b3Age1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmNjLWJhbm5lci5jYy1ib3R0b20ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuLmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07IH1cXG5cXG4vKiBDT01QTElBTkNFIEJPWCAqL1xcbi5jYy1jb21wbGlhbmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlID4gLmNjLWJ0biB7XFxuICBmbGV4OiAxOyB9XFxuXFxuLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuXFxuLyogQ2F0ZWdvcmllcyBMYXlvdXQgKi9cXG4uY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uY2MtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMjJweCk7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAycHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjcpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5jYy13aW5kb3csXFxuICAuY2MtcmV2b2tlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5jYy1idG4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9IH1cXG5cXG4vKiBkaW1lbnNpb25zIGZvciAnaVBob25lNiBQbHVzJyBhbmQgbG93ZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5jYy13aW5kb3cuY2MtdG9wIHtcXG4gICAgdG9wOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIsIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcsIC5jYy13aW5kb3cuY2MtcmlnaHQsIC5jYy13aW5kb3cuY2MtbGVmdCB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtY29tcGxpYW5jZSB7XFxuICAgICAgZmxleDogMSAxIGF1dG87IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiA4cHggMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgfVxcbiAgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDA7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogdGhpbiBzb2xpZCBsaWdodGdyZXk7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogMC40ZW0gNHB4OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuIShmdW5jdGlvbihjYykge1xuICAvLyBzdG9wIGZyb20gcnVubmluZyBhZ2FpbiwgaWYgYWNjaWRlbnRseSBpbmNsdWRlZCBtb3JlIHRoYW4gb25jZS5cbiAgaWYgKGNjLmhhc0luaXRpYWxpemVkKSByZXR1cm47XG5cbiAgY29uc3QgdXRpbCA9IHtcbiAgICBcbiAgICBpbnRlcnBvbGF0ZVN0cmluZzogZnVuY3Rpb24oc3RyLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhhcmd1bWVudHNbMV0pIHx8ICcnXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZWVwRXh0ZW5kOiBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgZm9yIChsZXQgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3AgaW4gdGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLmlzUGxhaW5PYmplY3QodGFyZ2V0W3Byb3BdKSAmJlxuICAgICAgICAgICAgdGhpcy5pc1BsYWluT2JqZWN0KHNvdXJjZVtwcm9wXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcbiAgICBcbiAgICBnZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gJzsgJyArIGRvY3VtZW50LmNvb2tpZVxuICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCgnOyAnICsgbmFtZSArICc9JylcbiAgICAgIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogcGFydHNcbiAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgLnNwbGl0KCc7JylcbiAgICAgICAgICAgIC5zaGlmdCgpXG4gICAgfSxcblxuICAgIHNldENvb2tpZTogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnO2V4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc7cGF0aD0nICsgKHBhdGggfHwgJy8nKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJztzZWN1cmUnIDogJycgKVxuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcbiAgICB0aHJvdHRsZTogZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gICAgICBsZXQgd2FpdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXdhaXQpIHtcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHdhaXQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgICAgfSwgbGltaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXG4gICAgaGFzaDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBsZXQgaGFzaCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBjaHIsXG4gICAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2g7XG4gICAgICBmb3IgKGk7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBjaHIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfSxcblxuICAgIG5vcm1hbGlzZUhleDogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBpZiAoaGV4WzBdID09ICcjJykge1xuICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgfVxuICAgICAgaWYgKGhleC5sZW5ndGggPT0gMykge1xuICAgICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4O1xuICAgIH0sXG5cbiAgICAvLyB1c2VkIHRvIGdldCB0ZXh0IGNvbG9ycyBpZiBub3Qgc2V0XG4gICAgZ2V0Q29udHJhc3Q6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgaGV4ID0gdGhpcy5ub3JtYWxpc2VIZXgoaGV4KTtcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpO1xuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICAgIGNvbnN0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcbiAgICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnO1xuICAgIH0sXG5cbiAgICAvLyB1c2VkIHRvIGNoYW5nZSBjb2xvciBvbiBoaWdobGlnaHRcbiAgICBnZXRMdW1pbmFuY2U6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodGhpcy5ub3JtYWxpc2VIZXgoaGV4KSwgMTYpLFxuICAgICAgICBhbXQgPSAzOCxcbiAgICAgICAgUiA9IChudW0gPj4gMTYpICsgYW10LFxuICAgICAgICBCID0gKChudW0gPj4gOCkgJiAweDAwZmYpICsgYW10LFxuICAgICAgICBHID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdDtcbiAgICAgICAgcmV0dXJuICcjJyArIChcbiAgICAgICAgMHgxMDAwMDAwICtcbiAgICAgICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXG4gICAgICAgIChCIDwgMjU1ID8gKEIgPCAxID8gMCA6IEIpIDogMjU1KSAqIDB4MTAwICtcbiAgICAgICAgKEcgPCAyNTUgPyAoRyA8IDEgPyAwIDogRykgOiAyNTUpXG4gICAgICApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnNsaWNlKDEpO1xuICAgIH0sXG5cbiAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICApO1xuICAgIH0sXG5cbiAgICBpc1BsYWluT2JqZWN0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgIC8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxuICAgIH0sXG5cbiAgICB0cmF2ZXJzZURPTVBhdGg6IGZ1bmN0aW9uKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtIHx8ICFlbGVtLnBhcmVudE5vZGUpIHJldHVybiBudWxsO1xuICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHJldHVybiBlbGVtO1xuXG4gICAgICByZXR1cm4gdGhpcy50cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvLyB2YWxpZCBjb29raWUgdmFsdWVzXG4gIGNjLnN0YXR1cyA9IHtcbiAgICBkZW55ICAgOiAnZGVueScsXG4gICAgYWxsb3cgIDogJ2FsbG93JyxcbiAgICBkaXNtaXNzOiAnZGlzbWlzcydcbiAgfTtcbiAgY2MuY2F0ZWdvcnkgPSB7XG4gICAgdW5jYXRlZ29yaXplZCAgOiAnZGlzbWlzcycsXG4gICAgZXNzZW50aWFsICAgICAgOiAnYWxsb3cnLFxuICAgIHBlcnNvbmFsaXphdGlvbjogJ2Rpc21pc3MnLFxuICAgIGFuYWx5dGljcyAgICAgIDogJ2Rpc21pc3MnLFxuICAgIG1hcmtldGluZyAgICAgIDogJ2Rpc21pc3MnXG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcbiAgICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gaWYgc3RhdHVzIGlzIHZhbGlkXG4gICAqL1xuICBjb25zdCBpc1ZhbGlkU3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2Yoc3RhdHVzKSA+PSAwXG4gIH1cblxuICAvLyBkZXRlY3RzIHRoZSBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgbmFtZVxuICBjYy50cmFuc2l0aW9uRW5kID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHJhbnMgPSB7XG4gICAgICB0OiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgIG1zVDogJ01TVHJhbnNpdGlvbkVuZCcsXG4gICAgICBNb3pUOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgcHJlZml4IGluIHRyYW5zKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgdHlwZW9mIGVsLnN0eWxlW3ByZWZpeCArICdyYW5zaXRpb24nXSAhPSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cmFuc1twcmVmaXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0pKCk7XG5cbiAgY2MuaGFzVHJhbnNpdGlvbiA9ICEhY2MudHJhbnNpdGlvbkVuZDtcblxuICAvLyBjb250YWlucyByZWZlcmVuY2VzIHRvIHRoZSBjdXN0b20gPHN0eWxlPiB0YWdzXG4gIGNjLmN1c3RvbVN0eWxlcyA9IHt9O1xuXG4gIGNjLlBvcHVwID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gaWYgZmFsc2UsIHRoaXMgcHJldmVudHMgdGhlIHBvcHVwIGZyb20gc2hvd2luZyAodXNlZnVsIGZvciBnaXZpbmcgdG8gY29udHJvbCB0byBhbm90aGVyIHBpZWNlIG9mIGNvZGUpXG4gICAgICBlbmFibGVkOiB0cnVlLFxuXG4gICAgICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXG4gICAgICBjb250YWluZXI6IG51bGwsXG5cbiAgICAgIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcbiAgICAgIGNvb2tpZToge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoaXMgY29va2llIC0geW91IGNhbiBpZ25vcmUgdGhpc1xuICAgICAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cbiAgICAgICAgcGF0aDogJy8nLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRvbWFpbiB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBvbiB0aGlzIGRvbWFpbi5cbiAgICAgICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xuICAgICAgICBkb21haW46ICcnLFxuXG4gICAgICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxuICAgICAgICBleHBpcnlEYXlzOiAzNjUsXG5cbiAgICAgICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cbiAgICAgICAgc2VjdXJlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLy8gdGhlc2UgY2FsbGJhY2sgaG9va3MgYXJlIGNhbGxlZCBhdCBjZXJ0YWluIHBvaW50cyBpbiB0aGUgcHJvZ3JhbSBleGVjdXRpb25cbiAgICAgIG9uUG9wdXBPcGVuOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Qb3B1cENsb3NlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Jbml0aWFsaXplOiBmdW5jdGlvbihzdGF0dXNlcykge30sXG4gICAgICBvblN0YXR1c0NoYW5nZTogZnVuY3Rpb24oY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUpIHt9LFxuICAgICAgb25SZXZva2VDaG9pY2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICBvbk5vQ29va2llTGF3OiBmdW5jdGlvbihjb3VudHJ5Q29kZSwgY291bnRyeSkge30sXG5cbiAgICAgIC8vIGVhY2ggaXRlbSBkZWZpbmVzIHRoZSBpbm5lciB0ZXh0IGZvciB0aGUgZWxlbWVudCB0aGF0IGl0IHJlZmVyZW5jZXNcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgaGVhZGVyOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuICAgICAgICBkaXNtaXNzOiAnR290IGl0IScsXG4gICAgICAgIGFsbG93OiAnQWxsb3cgY29va2llcycsXG4gICAgICAgIGRlbnk6ICdEZWNsaW5lJyxcbiAgICAgICAgbGluazogJ0xlYXJuIG1vcmUnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxuICAgICAgICBjbG9zZTogJyYjeDI3NGM7JyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgcG9saWN5OiAnQ29va2llIFBvbGljeSdcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxuICAgICAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cbiAgICAgIC8vXG4gICAgICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxuICAgICAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcDsnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19PC9zcGFuPicsXG4gICAgICAgIG1lc3NhZ2VsaW5rOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgICAgICBkaXNtaXNzOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYT4nLFxuICAgICAgICBhbGxvdzpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImFsbG93IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiAgY2xhc3M9XCJjYy1idG4gY2MtYWxsb3dcIj57e2FsbG93fX08L2E+JyxcbiAgICAgICAgZGVueTpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRlbnlcIj57e2Rlbnl9fTwvYT4nLFxuICAgICAgICBsaW5rOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxuICAgICAgICBjbG9zZTpcbiAgICAgICAgICAnPHNwYW4gYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWNsb3NlXCI+e3tjbG9zZX19PC9zcGFuPicsXG4gICAgICAgIGNhdGVnb3JpZXM6IGAgXG4gICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidW5jYXRlZ29yaXplZFwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5VbmNhdGVnb3JpemVkPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIxXCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHRoYXQgZG9uJ3QgZml0IGFueSBvdGhlciBjYXRlZ29yeS48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVzc2VudGlhbFwiIGNoZWNrZWQgZGlzYWJsZWQvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkVzc2VudGlhbDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiRXNzZW50aWFsIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIzXCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBlc3NlbnRpYWwgYXBwbGljYXRpb24gb3Igd2Vic2l0ZSBvcHBlcmF0aW9uIGNvb2tpZXMuPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI0XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwZXJzb25hbGl6YXRpb25cIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+UGVyc29uYWxpemF0aW9uPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJQZXJzb25hbGl6YXRpb24gRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjVcIj5ePC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIHBlcm9uYWxpemUgdGhlIGFwcGxpY2F0aW9uIHRvIGEgc3BlY2lmaWMgdXNlci48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjZcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuYWx5dGljc1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5BbmFseXRpY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiN1wiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgYW5hbHlpemUgZGF0YS48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjhcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtldGluZ1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5NYXJrZXRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIk1hcmtldGluZyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiOVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB5b3VyIGludGVybmV0IHNob3BwaW5nICYgYWR2ZXJ0aXNlbWVudCBleHBlcmllbmNlcy48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICBgLFxuICAgICAgICBzYXZlOiBgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1zYXZlXCI+U2F2ZTwvYnV0dG9uPmBcbiAgICAgICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XG4gICAgICAvLyAgLSB7e2NsYXNzZXN9fSBpcyB3aGVyZSBhZGRpdGlvbmFsIGNsYXNzZXMgZ2V0IGFkZGVkXG4gICAgICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxuICAgICAgd2luZG93OlxuICAgICAgICAnPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1sYWJlbD1cImNvb2tpZWNvbnNlbnRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy13aW5kb3cge3tjbGFzc2VzfX1cIj48IS0tZ29vZ2xlb2ZmOiBhbGwtLT57e2NoaWxkcmVufX08IS0tZ29vZ2xlb246IGFsbC0tPjwvZGl2PicsXG4gICAgICBcbiAgICAgIG1vZGFsOiAnJyxcblxuICAgICAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxuICAgICAgLy8gSXQgY2FuIGJlIGVuYWJsZWQgb2YgZGlzYWJsZWQgdXNpbmcgdGhlIGByZXZva2FibGVgIG9wdGlvblxuICAgICAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxuXG4gICAgICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgICAgIGNvbXBsaWFuY2U6IHtcbiAgICAgICAgaW5mbzogJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlXCI+e3tkaXNtaXNzfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LWluJzpcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2FsbG93fX17e2N1c3RvbWl6ZX19PC9kaXY+JyxcbiAgICAgICAgJ29wdC1vdXQnOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+JyxcbiAgICAgICAgY2F0ZWdvcmllczogJzxkaXYgY2xhc3M9XCJmb3JtXCI+e3tjYXRlZ29yaWVzfX17e3NhdmV9fTwvZGl2PidcbiAgICAgIH0sXG5cbiAgICAgIC8vIHNlbGVjdCB5b3VyIHR5cGUgb2YgcG9wdXAgaGVyZVxuICAgICAgdHlwZTogJ2luZm8nLCAvLyByZWZlcnMgdG8gYGNvbXBsaWFuY2VgIChpbiBvdGhlciB3b3JkcywgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgZGlzcGxheWVkKVxuXG4gICAgICAvLyBkZWZpbmUgbGF5b3V0IGxheW91dHMgaGVyZVxuICAgICAgbGF5b3V0czoge1xuICAgICAgICAvLyB0aGUgJ2Jsb2NrJyBsYXlvdXQgdGVuZCB0byBiZSBmb3Igc3F1YXJlIGZsb2F0aW5nIHBvcHVwc1xuICAgICAgICBiYXNpYyAgICAgICAgIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19JyxcbiAgICAgICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXG4gICAgICAgICdiYXNpYy1oZWFkZXInOiAne3toZWFkZXJ9fXt7bWVzc2FnZX19e3tsaW5rfX17e2NvbXBsaWFuY2V9fSdcbiAgICAgICAgLy8gYWRkIGEgY3VzdG9tIGxheW91dCBoZXJlLCB0aGVuIGFkZCBzb21lIG5ldyBjc3Mgd2l0aCB0aGUgY2xhc3MgJy5jYy1sYXlvdXQtbXktY29vbC1sYXlvdXQnXG4gICAgICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxuICAgICAgfSxcblxuICAgICAgLy8gZGVmYXVsdCBsYXlvdXQgKHNlZSBhYm92ZSlcbiAgICAgIGxheW91dDogJ2Jhc2ljJyxcblxuICAgICAgLy8gdGhpcyByZWZlcnMgdG8gdGhlIHBvcHVwIHdpbmRvd3MgcG9zaXRpb24uIHdlIGN1cnJlbnRseSBzdXBwb3J0OlxuICAgICAgLy8gIC0gYmFubmVyIHBvc2l0aW9uczogdG9wLCBib3R0b21cbiAgICAgIC8vICAtIGZsb2F0aW5nIHBvc2l0aW9uczogdG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQsIGJvdHRvbS1yaWdodFxuICAgICAgLy9cbiAgICAgIC8vIGFkZHMgYSBjbGFzcyBgY2MtZmxvYXRpbmdgIG9yIGBjYy1iYW5uZXJgIHdoaWNoIGhlbHBzIHdoZW4gc3R5bGluZ1xuICAgICAgcG9zaXRpb246ICdib3R0b20nLCAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzICdib3R0b20nXG5cbiAgICAgIC8vIEF2YWlsYWJsZSBzdHlsZXNcbiAgICAgIC8vICAgIC1ibG9jayAoZGVmYXVsdCwgbm8gZXh0cmEgY2xhc3NlcylcbiAgICAgIC8vICAgIC1lZGdlbGVzc1xuICAgICAgLy8gICAgLWNsYXNzaWNcbiAgICAgIC8vIHVzZSB5b3VyIG93biBzdHlsZSBuYW1lIGFuZCB1c2UgYC5jYy10aGVtZS1TVFlMRU5BTUVgIGNsYXNzIGluIENTUyB0byBlZGl0LlxuICAgICAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxuICAgICAgdGhlbWU6ICdibG9jaycsXG5cbiAgICAgIC8vIFRoZSBwb3B1cCBpcyBgZml4ZWRgIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzdGF0aWMgKGlubGluZSB3aXRoIHRoZSBwYWdlIGNvbnRlbnQpLCBzZXQgdGhpcyB0byBmYWxzZVxuICAgICAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXG4gICAgICBzdGF0aWM6IGZhbHNlLFxuXG4gICAgICAvLyBpZiB5b3Ugd2FudCBjdXN0b20gY29sb3VycywgcGFzcyB0aGVtIGluIGhlcmUuIHRoaXMgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhpcy5cbiAgICAgIC8vIGlkZWFsbHksIGFueSBjdXN0b20gY29sb3Vycy90aGVtZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCwgYXMgdGhpcyBpcyBtb3JlIGVmZmljaWVudC5cbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHBvcHVwOiB7YmFja2dyb3VuZDogJyMwMDAwMDAnLCB0ZXh0OiAnI2ZmZicsIGxpbms6ICcjZmZmJ30sXG4gICAgICAvLyAgICAgYnV0dG9uOiB7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjZjhlNzFjJ30sXG4gICAgICAvLyAgICAgaGlnaGxpZ2h0OiB7YmFja2dyb3VuZDogJyNmOGU3MWMnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyMwMDAwMDAnfSxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gYGhpZ2hsaWdodGAgaXMgb3B0aW9uYWwgYW5kIGV4dGVuZHMgYGJ1dHRvbmAuIGlmIGl0IGV4aXN0cywgaXQgd2lsbCBhcHBseSB0byB0aGUgZmlyc3QgYnV0dG9uXG4gICAgICAvLyBvbmx5IGJhY2tncm91bmQgbmVlZHMgdG8gYmUgZGVmaW5lZCBmb3IgZXZlcnkgZWxlbWVudC4gaWYgbm90IHNldCwgb3RoZXIgY29sb3JzIGNhbiBiZSBjYWxjdWxhdGVkIGZyb20gaXRcbiAgICAgIHBhbGV0dGU6IG51bGwsXG5cbiAgICAgIC8vIFNvbWUgY291bnRyaWVzIFJFUVVJUkUgdGhhdCBhIHVzZXIgY2FuIGNoYW5nZSB0aGVpciBtaW5kLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHlvdXJzZWxmLlxuICAgICAgLy8gTW9zdCBvZiB0aGUgdGltZSB0aGlzIHNob3VsZCBiZSBmYWxzZSwgYnV0IHRoZSBgY29va2llY29uc2VudC5sYXdgIGNhbiBjaGFuZ2UgdGhpcyB0byBgdHJ1ZWAgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IHNob3VsZFxuICAgICAgcmV2b2thYmxlOiBmYWxzZSxcblxuICAgICAgLy8gaWYgdHJ1ZSwgdGhlIHJldm9rYWJsZSBidXR0b24gd2lsbCB0cmFubGF0ZSBpbiBhbmQgb3V0XG4gICAgICBhbmltYXRlUmV2b2thYmxlOiB0cnVlLFxuXG4gICAgICAvLyB1c2VkIHRvIGRpc2FibGUgbGluayBvbiBleGlzdGluZyBsYXlvdXRzXG4gICAgICAvLyByZXBsYWNlcyBlbGVtZW50IG1lc3NhZ2VsaW5rIHdpdGggbWVzc2FnZSBhbmQgcmVtb3ZlcyBjb250ZW50IG9mIGxpbmtcbiAgICAgIHNob3dMaW5rOiB0cnVlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgc2Nyb2xsIHJhbmdlIHRvIGVuYWJsZVxuICAgICAgZGlzbWlzc09uU2Nyb2xsOiBmYWxzZSxcblxuICAgICAgLy8gc2V0IHZhbHVlIGFzIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGF1dG9kaXNtaXNzIGFmdGVyIHNldCB0aW1lXG4gICAgICBkaXNtaXNzT25UaW1lb3V0OiBmYWxzZSxcblxuICAgICAgLy8gc2V0IHZhbHVlIGFzIGNsaWNrIGFueXRoaW5nIG9uIHRoZSBwYWdlLCBleGNsdWRpbmcgdGhlIGBpZ25vcmVDbGlja3NGcm9tYCBiZWxvdyAoaWYgd2UgY2xpY2sgb24gdGhlIHJldm9rZSBidXR0b24gZXRjKVxuICAgICAgZGlzbWlzc09uV2luZG93Q2xpY2s6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gICAgICBkaXNtaXNzT25MaW5rQ2xpY2s6IGZhbHNlLFxuXG4gICAgICAvLyBJZiBgZGlzbWlzc09uV2luZG93Q2xpY2tgIGlzIHRydWUsIHdlIGNhbiBjbGljayBvbiAncmV2b2tlJyBhbmQgd2UnbGwgc3RpbGwgZGlzbWlzcyB0aGUgYmFubmVyLCBzbyB3ZSBuZWVkIGV4Y2VwdGlvbnMuXG4gICAgICAvLyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgKG5vdCBDU1Mgc2VsZWN0b3JzKVxuICAgICAgaWdub3JlQ2xpY2tzRnJvbTogWydjYy1yZXZva2UnLCAnY2MtYnRuJywgJ2NjLWxpbmsnXSwgLy8gYWxyZWFkeSBpbmNsdWRlcyB0aGUgcmV2b2tlIGJ1dHRvbiBhbmQgdGhlIGJhbm5lciBpdHNlbGZcblxuICAgICAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxuICAgICAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXG4gICAgICBhdXRvT3BlbjogdHJ1ZSxcblxuICAgICAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXG4gICAgICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XG4gICAgICAvL1xuICAgICAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpO1xuICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudCk7XG4gICAgICAvL1xuICAgICAgYXV0b0F0dGFjaDogdHJ1ZSxcblx0ICBcbiAgICAgIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcbiAgICAgIG1vYmlsZUZvcmNlRmxvYXQ6IHRydWUsXG5cbiAgICAgIC8vIHNpbXBsZSB3aGl0ZWxpc3QvYmxhY2tsaXN0IGZvciBwYWdlcy4gc3BlY2lmeSBwYWdlIGJ5OlxuICAgICAgLy8gICAtIHVzaW5nIGEgc3RyaW5nIDogJy9pbmRleC5odG1sJyAgICAgICAgICAgKG1hdGNoZXMgJy9pbmRleC5odG1sJyBleGFjdGx5KSBPUlxuICAgICAgLy8gICAtIHVzaW5nIFJlZ0V4cCAgIDogL1xcL3BhZ2VfW1xcZF0rXFwuaHRtbC8gICAgKG1hdGNoZWQgJy9wYWdlXzEuaHRtbCcgYW5kICcvcGFnZV8yLmh0bWwnIGV0YylcbiAgICAgIHdoaXRlbGlzdFBhZ2U6IFtdLFxuICAgICAgYmxhY2tsaXN0UGFnZTogW10sXG5cbiAgICAgIC8vIElmIHRoaXMgaXMgZGVmaW5lZCwgdGhlbiBpdCBpcyB1c2VkIGFzIHRoZSBpbm5lciBodG1sIGluc3RlYWQgb2YgbGF5b3V0LiBUaGlzIGFsbG93cyBmb3IgdWx0aW1hdGUgY3VzdG9taXNhdGlvbi5cbiAgICAgIC8vIEJlIHN1cmUgdG8gdXNlIHRoZSBjbGFzc2VzIGBjYy1idG5gIGFuZCBgY2MtYWxsb3dgLCBgY2MtZGVueWAgb3IgYGNjLWRpc21pc3NgLiBUaGV5IGVuYWJsZSB0aGUgYXBwIHRvIHJlZ2lzdGVyIGNsaWNrXG4gICAgICAvLyBoYW5kbGVycy4gWW91IGNhbiB1c2Ugb3RoZXIgcHJlLWV4aXN0aW5nIGNsYXNzZXMgdG9vLiBTZWUgYHNyYy9zdHlsZXNgIGZvbGRlci5cbiAgICAgIG92ZXJyaWRlSFRNTDogbnVsbFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBDb29raWVQb3B1cCgpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTsgLy8gYWxyZWFkeSByZW5kZXJlZFxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgb3B0aW9ucyBiYWNrIHRvIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgdXRpbC5kZWVwRXh0ZW5kKCh0aGlzLm9wdGlvbnMgPSB7fSksIGRlZmF1bHRPcHRpb25zIClcblxuICAgICAgLy8gbWVyZ2UgaW4gdXNlciBvcHRpb25zXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuXG4gICAgICAvLyByZXR1cm5zIHRydWUgaWYgYG9uQ29tcGxldGVgIHdhcyBjYWxsZWRcbiAgICAgIGlmIChjaGVja0NhbGxiYWNrSG9va3MuY2FsbCh0aGlzKSkge1xuICAgICAgICAvLyB1c2VyIGhhcyBhbHJlYWR5IGFuc3dlcmVkXG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIGFwcGx5IGJsYWNrbGlzdCAvIHdoaXRlbGlzdFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy53aGl0ZWxpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBmdWxsIG1hcmt1cCBlaXRoZXIgY29udGFpbnMgdGhlIHdyYXBwZXIgb3IgaXQgZG9lcyBub3QgKGZvciBtdWx0aXBsZSBpbnN0YW5jZXMpXG4gICAgICBsZXQgY29va2llUG9wdXAgPSB0aGlzLm9wdGlvbnMud2luZG93XG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGdldFBvcHVwQ2xhc3Nlcy5jYWxsKHRoaXMpLmpvaW4oJyAnKSlcbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2hpbGRyZW59fScsIGdldFBvcHVwSW5uZXJNYXJrdXAuY2FsbCh0aGlzKSk7XG5cbiAgICAgIC8vIGlmIHVzZXIgcGFzc2VzIGh0bWwsIHVzZSBpdCBpbnN0ZWFkXG4gICAgICBjb25zdCBjdXN0b21IVE1MID0gdGhpcy5vcHRpb25zLm92ZXJyaWRlSFRNTDtcbiAgICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcbiAgICAgICAgY29va2llUG9wdXAgPSBjdXN0b21IVE1MO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBzdGF0aWMsIHdlIG5lZWQgdG8gZ3JvdyB0aGUgZWxlbWVudCBmcm9tIDAgaGVpZ2h0IHNvIGl0IGRvZXNuJ3QganVtcCB0aGUgcGFnZVxuICAgICAgLy8gY29udGVudC4gd2Ugd3JhcCBhbiBlbGVtZW50IGFyb3VuZCBpdCB3aGljaCB3aWxsIG1hc2sgdGhlIGhpZGRlbiBjb250ZW50XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAvLyBgZ3Jvd2VyYCBpcyBhIHdyYXBwZXIgZGl2IHdpdGggYSBoaWRkZW4gb3ZlcmZsb3cgd2hvc2UgaGVpZ2h0IGlzIGFuaW1hdGVkXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBhcHBlbmRNYXJrdXAuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtZ3Jvd2VyXCI+JyArIGNvb2tpZVBvcHVwICsgJzwvZGl2PidcbiAgICAgICAgKTtcblxuICAgICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnJzsgLy8gc2V0IGl0IHRvIHZpc2libGUgKGJlY2F1c2UgYXBwZW5kTWFya3VwIGhpZGVzIGl0KVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQ7IC8vIGdldCB0aGUgYGVsZW1lbnRgIHJlZmVyZW5jZSBmcm9tIHRoZSB3cmFwcGVyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBhcHBlbmRNYXJrdXAuY2FsbCh0aGlzLCBjb29raWVQb3B1cCk7XG4gICAgICB9XG5cbiAgICAgIGFwcGx5QXV0b0Rpc21pc3MuY2FsbCh0aGlzKTtcblxuICAgICAgYXBwbHlSZXZva2VCdXR0b24uY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvT3Blbikge1xuICAgICAgICB0aGlzLmF1dG9PcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5vbkJ1dHRvbkNsaWNrICYmIHRoaXMuZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2sgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5kaXNtaXNzVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kaXNtaXNzVGltZW91dCk7XG4gICAgICAgIHRoaXMuZGlzbWlzc1RpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbldpbmRvd1Njcm9sbCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCk7XG4gICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbldpbmRvd0NsaWNrKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljayk7XG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uTGlua0NsaWNrKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spO1xuICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25Nb3VzZU1vdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuICYmIHRoaXMucmV2b2tlQnRuLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnJldm9rZUJ0bik7XG4gICAgICB9XG4gICAgICB0aGlzLnJldm9rZUJ0biA9IG51bGw7XG5cbiAgICAgIHJlbW92ZUN1c3RvbVN0eWxlKHRoaXMub3B0aW9ucy5wYWxldHRlKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBpZiAoY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHRoaXMuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3B1cE9wZW4uY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKHNob3dSZXZva2UpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUG9wdXBDbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmZhZGVJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBBRlRFUiBmYWRlT3V0ICh3aGljaCBpcyBnb3Zlcm5lZCBieSB0aGUgJ3RyYW5zaXRpb25lbmQnIGV2ZW50KS5cbiAgICAgIC8vICd0cmFuc2l0aW9uZW5kJyBpc24ndCBhbGwgdGhhdCByZWxpYWJsZSwgc28sIGlmIHdlIHRyeSBhbmQgZmFkZUluIGJlZm9yZSAndHJhbnNpdGlvbmVuZCcgaGFzXG4gICAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICAgIGlmICh0aGlzLmFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgICBhZnRlckZhZGVPdXQuY2FsbCh0aGlzLCBlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwOyAvLyAobXMpIERPIE5PVCBNQUtFIFRISVMgVkFMVUUgU01BTExFUi4gU2VlIGJlbG93XG5cbiAgICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHdhaXRpbmcgZm9yIGEgXCJicm93c2VyIHJlZHJhd1wiIGJlZm9yZSB3ZSByZW1vdmUgdGhlICdjYy1pbnZpc2libGUnIGNsYXNzLlxuICAgICAgICAvLyBJZiB0aGUgY2xhc3MgaXMgcmVtdm9lZCBiZWZvcmUgYSByZWRyYXcgY291bGQgaGFwcGVuLCB0aGVuIHRoZSBmYWRlSW4gZWZmZWN0IFdJTEwgTk9UIHdvcmssIGFuZFxuICAgICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgICAgLy8gaXRzIHRoaW5nLiBUaGUgYWN0dWFsbHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHVzaW5nIDAgYW5kIDIwIGluIGEgc2V0IHRpbWVvdXQgaXMgbmVnbGVnaWJsZSBhbnl3YXlcbiAgICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgYWZ0ZXJGYWRlSW4uYmluZCh0aGlzLCBlbCksXG4gICAgICAgICAgZmFkZUluVGltZW91dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZmFkZU91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpO1xuICAgICAgICBhZnRlckZhZGVJbi5iaW5kKHRoaXMsIGVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IGFmdGVyRmFkZU91dC5iaW5kKHRoaXMsIGVsKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG5cbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnJyAmJlxuICAgICAgICAoY2MuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXG4gICAgICApO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUudG9nZ2xlUmV2b2tlQnV0dG9uID0gZnVuY3Rpb24oc2hvdykge1xuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUucmV2b2tlQ2hvaWNlID0gZnVuY3Rpb24ocHJldmVudE9wZW4pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpO1xuXG4gICAgICB0aGlzLm9wdGlvbnMub25SZXZva2VDaG9pY2UuY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKCFwcmV2ZW50T3Blbikge1xuICAgICAgICB0aGlzLmF1dG9PcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxuICAgICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaGFzQW5zd2VyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xuICAgICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmhhc0NvbnNlbnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IGNjLnN0YXR1cy5hbGxvdyB8fCBzdGF0dXMgPT09IGNjLnN0YXR1cy5kaXNtaXNzIClcbiAgICB9O1xuXG4gICAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5hdXRvT3BlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXG4gICAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogXG4gICAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cbiAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5zZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qge25hbWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlfSA9IHRoaXMub3B0aW9ucy5jb29raWVcblxuICAgICAgLy8gaWYgYHN0YXR1c2AgaXMgdmFsaWRcbiAgICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2YodXRpbC5nZXRDb29raWUoY29va2llTmFtZSkpID49IDBcbiAgICAgICAgICB1dGlsLnNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5vblN0YXR1c0NoYW5nZS5jYWxsKHRoaXMsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCBjYy5jYXRlZ29yeVsgY2F0ZWdvcnkgXSApIClcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGFyZ3VtZW50c1sgMCBdICkgKVxuICAgICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgIGFyZ3VtZW50cy5mb3JFYWNoKCAoIGNhdGVnb3J5U3RhdHVzLCBpbmRleCApID0+IHtcbiAgICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYy5jYXRlZ29yeVxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5nZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5TmFtZSA9PiB1dGlsLmdldENvb2tpZSh0aGlzLm9wdGlvbnMuY29va2llLm5hbWUrJ18nK2NhdGVnb3J5TmFtZSkgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbGVhclN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZTtcbiAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgICB1dGlsLnNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAgLy8gVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nO1xuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZUluKGVsKSB7XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbDtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgb24gJ3RyYW5zaXRpb25lbmQnIChvbmx5IG9uIHRoZSB0cmFuc2l0aW9uIG9mIHRoZSBmYWRlT3V0KS4gVGhhdCdzIGJlY2F1c2UgYWZ0ZXIgd2UndmUgZmFkZWQgb3V0LCB3ZSBuZWVkIHRvXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5IHRvICdub25lJyAoc28gdGhlcmUgYXJlbid0IGFubm95aW5nIGludmlzaWJsZSBwb3B1cHMgYWxsIG92ZXIgdGhlIHBhZ2UpLiBJZiBmb3Igd2hlbmV2ZXIgcmVhc29uIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBpcyBub3QgY2FsbGVkIChsYWNrIG9mIHN1cHBvcnQpLCB0aGUgb3Blbi9jbG9zZSBtZWNoYW5pc20gd2lsbCBzdGlsbCB3b3JrLlxuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZU91dChlbCkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGhvb2sgYW5kIHJldHVybnMgdHJ1ZSAoaWYgbmVlZGVkKSBhbmQgcmV0dXJucyBmYWxzZSBvdGhlcndpc2VcbiAgICBmdW5jdGlvbiBjaGVja0NhbGxiYWNrSG9va3MoKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZSA9IHRoaXMub3B0aW9ucy5vbkluaXRpYWxpemUuYmluZCh0aGlzKTtcblxuICAgICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmRlbnkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5Db29raWVzT0sgfHwgd2luZG93Lm5hdmlnYXRvci5Db29raWVzT0spIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmFsbG93KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSlcbiAgICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXG4gICAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcbiAgICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcbiAgICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+IGNjLmNhdGVnb3J5WyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gPSBzdGF0dXMgPyBzdGF0dXMgOiBjYy5jYXRlZ29yeVsgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcbiAgICAgIGNvbXBsZXRlKCBoYXNNYXRjaGVzID8gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogc3RhdHVzIH0gKSApICA6IHVuZGVmaW5lZCApXG5cbiAgICAgIHJldHVybiBoYXNNYXRjaGVzO1xuICAgIH1cblxuICAgIC8vIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodFxuICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoICctJyApLm1hcCggcG9zID0+ICdjYy0nK3BvcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cENsYXNzZXMoKSB7XG4gICAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcbiAgICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgICAgOiAnZmxvYXRpbmcnO1xuXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpICYmIG9wdHMubW9iaWxlRm9yY2VGbG9hdCkge1xuICAgICAgICBwb3NpdGlvblN0eWxlID0gJ2Zsb2F0aW5nJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcbiAgICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcbiAgICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgICBdO1xuXG4gICAgICBpZiAob3B0cy5zdGF0aWMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKTtcbiAgICAgIH1cblxuICAgICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gd2Ugb25seSBhZGQgZXh0cmEgc3R5bGVzIGlmIGBwYWxldHRlYCBoYXMgYmVlbiBzZXQgdG8gYSB2YWxpZCB2YWx1ZVxuICAgICAgYXR0YWNoQ3VzdG9tUGFsZXR0ZS5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucy5wYWxldHRlKTtcblxuICAgICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBvcHVwSW5uZXJNYXJrdXAoKSB7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB7fTtcbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIHJlbW92ZXMgbGluayBpZiBzaG93TGluayBpcyBmYWxzZVxuICAgICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICAgIG9wdHMuZWxlbWVudHMubGluayA9ICcnOyBcbiAgICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaCggcHJvcCA9PiB7XG4gICAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoXG4gICAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lICYmIHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgJiYgc3RyLmxlbmd0aCA/IHN0ciA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcbiAgICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdO1xuICAgICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvO1xuICAgICAgfVxuXG4gICAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXG4gICAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoY29tcGxpYW5jZVR5cGUsIGZ1bmN0aW9uKFxuICAgICAgICBuYW1lXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFtuYW1lXTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcbiAgICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdO1xuICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXRpbC5pbnRlcnBvbGF0ZVN0cmluZyhsYXlvdXQsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZWRbbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kTWFya3VwKG1hcmt1cCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgY29udCA9XG4gICAgICAgIG9wdHMuY29udGFpbmVyICYmIG9wdHMuY29udGFpbmVyLm5vZGVUeXBlID09PSAxXG4gICAgICAgICAgPyBvcHRzLmNvbnRhaW5lclxuICAgICAgICAgIDogZG9jdW1lbnQuYm9keTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cDtcblxuICAgICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF07XG5cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmUgcmVmIHRvIHRoZSBmdW5jdGlvbiBoYW5kbGUgc28gd2UgY2FuIHVuYmluZCBpdCBsYXRlclxuICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2MuY2F0ZWdvcnlbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnYWxsb3cnIDogJ2RlbnknXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgaWYgKCB0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICApIHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdHMuYXV0b0F0dGFjaCkge1xuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnQuaW5zZXJ0QmVmb3JlKGVsLCBjb250LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xuICAgICAgLy8gcmV0dXJucyB0aGUgcGFyZW50IGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGNsYXNzLCBvciB0aGUgb3JpZ2luYWwgZWxlbWVudCAtIG51bGwgaWYgbm90IGZvdW5kXG4gICAgICBjb25zdCBidG4gPSB1dGlsLnRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXQ7XG4gICAgICBcbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1zYXZlJyApKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxuICAgICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxiY2MtKCcgKyBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLm1hcChzdHIgPT4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhtYXRjaCk7XG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XG4gICAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSSBtaWdodCBjaGFuZ2UgdGhpcyBmdW5jdGlvbiB0byB1c2UgaW5saW5lIHN0eWxlcy4gSSBvcmlnaW5hbGx5IGNob3NlIGEgc3R5bGVzaGVldCBiZWNhdXNlIEkgY291bGQgc2VsZWN0IG1hbnkgZWxlbWVudHMgd2l0aCBhXG4gICAgLy8gc2luZ2xlIHJ1bGUgKHNvbWV0aGluZyB0aGF0IGhhcHBlbmVkIGEgbG90KSwgdGhlIGFwcHMgaGFzIGNoYW5nZWQgc2xpZ2h0bHkgbm93IHRob3VnaCwgc28gaW5saW5lIHN0eWxlcyBtaWdodCBiZSBtb3JlIGFwcGxpY2FibGUuXG4gICAgZnVuY3Rpb24gYXR0YWNoQ3VzdG9tUGFsZXR0ZShwYWxldHRlKSB7XG4gICAgICBjb25zdCBoYXNoID0gdXRpbC5oYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKTtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoO1xuICAgICAgY29uc3QgaXNWYWxpZCA9IHV0aWwuaXNQbGFpbk9iamVjdChwYWxldHRlKTtcblxuICAgICAgdGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yID0gaXNWYWxpZCA/IHNlbGVjdG9yIDogbnVsbDtcblxuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgJy4nICsgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgcHJlZml4KSB7XG4gICAgICAvLyBvbmx5IGFkZCB0aGlzIGlmIGEgc3R5bGUgbGlrZSBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoY2MuY3VzdG9tU3R5bGVzW2hhc2hdKSB7XG4gICAgICAgIC8vIGN1c3RvbSBzdHlsZSBhbHJlYWR5IGV4aXN0cywgc28gaW5jcmVtZW50IHRoZSByZWZlcmVuY2UgY291bnRcbiAgICAgICAgKytjYy5jdXN0b21TdHlsZXNbaGFzaF0ucmVmZXJlbmNlcztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xvclN0eWxlcyA9IHt9XG4gICAgICBjb25zdCB7IHBvcHVwLCBidXR0b24sIGhpZ2hsaWdodCwgc2F2ZUJ1dHRvbiB9ID0gcGFsZXR0ZVxuXG4gICAgICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICBpZiAocG9wdXApIHtcbiAgICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dFxuICAgICAgICAgID8gcG9wdXAudGV4dFxuICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKTtcbiAgICAgICAgcG9wdXAubGluayA9IHBvcHVwLmxpbmsgPyBwb3B1cC5saW5rIDogcG9wdXAudGV4dDtcbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtdG9vbHRpcCwgJyArIHByZWZpeCArICcgLmNjLXRvb2x0aXA6YWZ0ZXInXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdXG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2Mtd2luZG93J10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXTtcbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdO1xuICAgICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICAgJyAuY2MtbGluaywnICtcbiAgICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rOmFjdGl2ZSwnICtcbiAgICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rOnZpc2l0ZWQnXG4gICAgICAgIF0gPSBbJ2NvbG9yOiAnICsgcG9wdXAubGlua107XG5cbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgIC8vIGFzc3VtZXMgYnV0dG9uLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b24udGV4dFxuICAgICAgICAgICAgPyBidXR0b24udGV4dFxuICAgICAgICAgICAgOiB1dGlsLmdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xuICAgICAgICAgICAgJ2NvbG9yOiAnICsgYnV0dG9uLnRleHQsXG4gICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmRcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXS5wdXNoKCdwYWRkaW5nOiAnICsgYnV0dG9uLnBhZGRpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChidXR0b24uYmFja2dyb3VuZCAhPSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICAgICAgcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ1xuICAgICAgICAgICAgXSA9IFtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgK1xuICAgICAgICAgICAgICAgIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvdXIoYnV0dG9uLmJhY2tncm91bmQpKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAvL2Fzc3VtZXMgaGlnaGxpZ2h0LmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgICBoaWdobGlnaHQudGV4dCA9IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgOiB1dGlsLmdldENvbnRyYXN0KGhpZ2hsaWdodC5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIGhpZ2hsaWdodC5ib3JkZXIgPSBoaWdobGlnaHQuYm9yZGVyXG4gICAgICAgICAgICAgID8gaGlnaGxpZ2h0LmJvcmRlclxuICAgICAgICAgICAgICA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmRcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldHMgaGlnaGxpZ2h0IHRleHQgY29sb3IgdG8gcG9wdXAgdGV4dC4gYmFja2dyb3VuZCBhbmQgYm9yZGVyIGFyZSB0cmFuc3BhcmVudCBieSBkZWZhdWx0LlxuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHNhdmVCdXR0b24gKSB7XG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuLmNjLXNhdmUnXSA9IFtcbiAgICAgICAgICAgICdjb2xvcjogJyArIHNhdmVCdXR0b24udGV4dCxcbiAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5iYWNrZ3JvdW5kXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXG4gICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgICAgLy8gY3VzdG9tIHN0eWxlIGRvZXNuJ3QgZXhpc3QsIHNvIHdlIGNyZWF0ZSBpdFxuICAgICAgY2MuY3VzdG9tU3R5bGVzW2hhc2hdID0ge1xuICAgICAgICByZWZlcmVuY2VzOiAxLFxuICAgICAgICBlbGVtZW50OiBzdHlsZS5zaGVldFxuICAgICAgfTtcblxuICAgICAgbGV0IHJ1bGVJbmRleCA9IC0xO1xuICAgICAgZm9yIChsZXQgcHJvcCBpbiBjb2xvclN0eWxlcykge1xuICAgICAgICBpZiAoY29sb3JTdHlsZXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKFxuICAgICAgICAgICAgcHJvcCArICd7JyArIGNvbG9yU3R5bGVzW3Byb3BdLmpvaW4oJzsnKSArICd9JyxcbiAgICAgICAgICAgICsrcnVsZUluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdmVyQ29sb3VyKGhleCkge1xuICAgICAgaGV4ID0gdXRpbC5ub3JtYWxpc2VIZXgoaGV4KTtcbiAgICAgIC8vIGZvciBibGFjayBidXR0b25zXG4gICAgICBpZiAoaGV4ID09ICcwMDAwMDAnKSB7XG4gICAgICAgIHJldHVybiAnIzIyMic7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXRpbC5nZXRMdW1pbmFuY2UoaGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDdXN0b21TdHlsZShwYWxldHRlKSB7XG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpO1xuICAgICAgICBjb25zdCBjdXN0b21TdHlsZSA9IGNjLmN1c3RvbVN0eWxlc1toYXNoXTtcbiAgICAgICAgaWYgKGN1c3RvbVN0eWxlICYmICEtLWN1c3RvbVN0eWxlLnJlZmVyZW5jZXMpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZU5vZGUgPSBjdXN0b21TdHlsZS5lbGVtZW50Lm93bmVyTm9kZTtcbiAgICAgICAgICBpZiAoc3R5bGVOb2RlICYmIHN0eWxlTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBzdHlsZU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZU5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYy5jdXN0b21TdHlsZXNbaGFzaF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXZlbnRQYXRoKCBldmVudCApIHtcbiAgICAgIGNvbnN0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGggPyBldmVudC5jb21wb3NlZFBhdGgoKSA6IChmdW5jdGlvbiAoIGFyciwgZWxlbWVudCApIHtcbiAgICAgICAgd2hpbGUgKCBlbGVtZW50ICkge1xuICAgICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyclxuICAgICAgfSkoW10sZXZlbnQudGFyZ2V0IClcbiAgICAgIGlmICggIXBhdGggKSB7XG4gICAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXR1cm4gcGF0aFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5QXV0b0Rpc21pc3MoKSB7XG4gICAgICBjb25zdCBzZXRTdGF0dXNlcyA9IHRoaXMuc2V0U3RhdHVzZXMuYmluZCh0aGlzKTtcbiAgICAgIGNvbnN0IGNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbmFibGVkLFxuICAgICAgICBkaXNtaXNzT25UaW1lb3V0ICA6IGRlbGF5LFxuICAgICAgICBkaXNtaXNzT25TY3JvbGwgICA6c2Nyb2xsUmFuZ2UsXG4gICAgICAgIGRpc21pc3NPbkxpbmtDbGljayxcbiAgICAgICAgZGlzbWlzc09uV2luZG93Q2xpY2ssXG5cbiAgICAgIH0gPSB0aGlzLm9wdGlvbnNcblxuICAgICAgaWYgKCBlbmFibGVkICkge1xuICAgICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcylcbiAgICAgICAgICAgIGNsb3NlKHRydWUpXG4gICAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcbiAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IE1hdGguZmxvb3Ioc2Nyb2xsUmFuZ2UpKSB7XG4gICAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKVxuICAgICAgICAgICAgICBjbG9zZSh0cnVlKVxuXG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbldpbmRvd0NsaWNrKSB7XG4gICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGlmICggIWdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbWVudCA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbS5zb21lKCBpZ25vcmVkQ2xpY2sgPT5cbiAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggaWdub3JlZENsaWNrIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKVxuICAgICAgICAgICAgICBjbG9zZSh0cnVlKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xuICAgICAgICAgIHRoaXMub25MaW5rQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgaWYgKCBnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW0gPT4gdHlwZW9mIGVsZW0udGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbS50YWdOYW1lID09PSAnQScgKSApIHtcbiAgICAgICAgICAgICAgc2V0U3RhdHVzZXMoIGNjLnN0YXR1cy5kaXNtaXNzIClcbiAgICAgICAgICAgICAgY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlSZXZva2VCdXR0b24oKSB7XG4gICAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgIT0gJ2luZm8nKSB0aGlzLm9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZTtcbiAgICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gZ2V0UG9zaXRpb25DbGFzc2VzLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnY2MtYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy10aGVtZS0nK3RoaXMub3B0aW9ucy50aGVtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldm9rZUJ0biA9IHRoaXMub3B0aW9ucy5yZXZva2VCdG5cbiAgICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBjbGFzc2VzLmpvaW4oJyAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSk7XG5cbiAgICAgICAgdGhpcy5yZXZva2VCdG4gPSBhcHBlbmRNYXJrdXAuY2FsbCh0aGlzLCByZXZva2VCdG4pO1xuXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IHV0aWwudGhyb3R0bGUoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMjA7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA7XG5cbiAgICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XG4gICAgICAgICAgICAgICAgICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJvdHRvbScgKSAmJiBldnQuY2xpZW50WSA+IG1heFkgKSApIHtcbiAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlICYmICFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAhYWN0aXZlICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gQ29va2llUG9wdXA7XG4gIH0pKCk7XG5cbiAgY2MuTG9jYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxuICAgIC8vIFdoZW4gdXNpbmcgYSBzZXJ2aWNlLCBpdCBjb3VsZCBlaXRoZXIgcmV0dXJuIGEgZGF0YSBzdHJ1Y3R1cmUgaW4gcGxhaW4gdGV4dCAobGlrZSBhIEpTT04gb2JqZWN0KSBvciBhbiBleGVjdXRhYmxlIHNjcmlwdFxuICAgIC8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbiAgICAvLyBXaGVuIHRoZSBzZXJ2aWNlIHVzZXMgYSBzY3JpcHQsIHRoZSBjaGFuY2VzIGFyZSB0aGF0IHlvdSdsbCBoYXZlIHRvIHVzZSB0aGUgc2NyaXB0IHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cy4gSW4gdGhlc2VcbiAgICAvLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXG4gICAgLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdGltZW91dCBpcyA1IHNlY29uZHMuIFRoaXMgaXMgbWFpbmx5IG5lZWRlZCB0byBjYXRjaCBKU09OUCByZXF1ZXN0cyB0aGF0IGVycm9yLlxuICAgICAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxuICAgICAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG5cbiAgICAgIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXG4gICAgICBzZXJ2aWNlczogW1xuICAgICAgICAnaXBpbmZvJ1xuXG4gICAgICAgIC8qXG5cbiAgICAgICAgLy8gJ2lwaW5mb2RiJyByZXF1aXJlcyBzb21lIG9wdGlvbnMsIHNvIHdlIGRlZmluZSBpdCB1c2luZyBhbiBvYmplY3RcbiAgICAgICAgLy8gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc2VydmljZVxuXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaXBpbmZvZGInLFxuICAgICAgICAgIGludGVycG9sYXRlVXJsOiB7XG4gICAgICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XG5cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ307XG4gICAgICAgIH0sXG5cbiAgICAgICAgKi9cbiAgICAgIF0sXG5cbiAgICAgIHNlcnZpY2VEZWZpbml0aW9uczoge1xuICAgICAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IFsnQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcihqc29uKVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlcXVpcmVzIGFuIG9wdGlvbiB0byBkZWZpbmUgYGtleWAuIE9wdGlvbnMgYXJlIHByb2l2ZWQgdXNpbmcgb2JqZWN0cyBvciBmdW5jdGlvbnNcbiAgICAgICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgJy8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxuICAgICAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgaXMgSlNPTlAsIHRoZXJlZm9yZSB3ZSBtdXN0IHNldCBpdCB0byBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcih7ZXJyb3I6IGpzb24uc3RhdHVzTWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlIHdoaWNoIGRlZmluZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LiBPbmNlIGxvYWRlZCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSwgc28gaXQgbXVzdCBiZSBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgIGlmICghd2luZG93Lmdlb2lwMikge1xuICAgICAgICAgICAgICAgIGRvbmUoXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdC4gVGhlIGRvd25sb2FkZWQgc2NyaXB0IHNob3VsZCBoYXZlIGV4cG9ydGVkIGBnZW9pcDJgIHRvIHRoZSBnbG9iYWwgc2NvcGUnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBnZW9pcDIuY291bnRyeShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZTogbG9jYXRpb24uY291bnRyeS5pc29fY29kZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxuICAgICAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTG9jYXRpb24ob3B0aW9ucykge1xuICAgICAgLy8gU2V0IHVwIG9wdGlvbnNcbiAgICAgIHV0aWwuZGVlcEV4dGVuZCgodGhpcy5vcHRpb25zID0ge30pLCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xOyAvLyB0aGUgaW5kZXggKGluIG9wdGlvbnMpIG9mIHRoZSBzZXJ2aWNlIHdlJ3JlIGN1cnJlbnRseSB1c2luZ1xuICAgIH1cblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXROZXh0U2VydmljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNlcnZpY2U7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KCsrdGhpcy5jdXJyZW50U2VydmljZUluZGV4KTtcbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPCB0aGlzLm9wdGlvbnMuc2VydmljZXMubGVuZ3RoICYmXG4gICAgICAgICFzZXJ2aWNlXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gc2VydmljZTtcbiAgICB9O1xuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmdldFNlcnZpY2VCeUlkeCA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXG4gICAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF07XG5cbiAgICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNPcHRzID0gc2VydmljZU9wdGlvbigpO1xuICAgICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGR5bmFtaWNPcHRzLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXG4gICAgICAgICAgKSA6IGR5bmFtaWNPcHRzO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbl0oKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIGFzc3VtZSB7bmFtZTogJ2lwaW5mbycsIC4uLm90aGVyT3B0aW9uc31cbiAgICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxuICAgICAgICAgIHNlcnZpY2VPcHRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cbiAgICAvLyBJZiB0aGUgc2VydmljZSBmYWlscywgYHJ1bk5leHRTZXJ2aWNlT25FcnJvcmAgd2lsbCBjb250aW51ZSB0cnlpbmcgZWFjaCBzZXJ2aWNlIHVudGlsIGFsbCBmYWlsLCBvciBvbmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2NhdGUgPSBmdW5jdGlvbihjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKCk7XG5cbiAgICAgIGlmICghc2VydmljZSkge1xuICAgICAgICBlcnJvcihuZXcgRXJyb3IoJ05vIHNlcnZpY2VzIHRvIHJ1bicpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbGxiYWNrQ29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgIHRoaXMuY2FsbGJhY2tFcnJvciA9IGVycm9yO1xuXG4gICAgICB0aGlzLnJ1blNlcnZpY2Uoc2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIC8vIFBvdGVudGlhbGx5IGFkZHMgYSBjYWxsYmFjayB0byBhIHVybCBmb3IganNvbnAuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnNldHVwVXJsID0gZnVuY3Rpb24oc2VydmljZSkge1xuICAgICAgY29uc3Qgc2VydmljZU9wdHMgPSB0aGlzLmdldEN1cnJlbnRTZXJ2aWNlT3B0cygpO1xuICAgICAgcmV0dXJuIHNlcnZpY2UudXJsLnJlcGxhY2UoL1xceyguKj8pXFx9L2csIGZ1bmN0aW9uKF8sIHBhcmFtKSB7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gJ2NhbGxiYWNrJykge1xuICAgICAgICAgIGNvbnN0IHRlbXBOYW1lID0gJ2NhbGxiYWNrJyArIERhdGUubm93KCk7XG4gICAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyByZXF1aXJlcyBhIGBzZXJ2aWNlYCBvYmplY3QgdGhhdCBkZWZpbmVzIGF0IGxlYXN0IGEgYHVybGAgYW5kIGBjYWxsYmFja2BcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuU2VydmljZSA9IGZ1bmN0aW9uKHNlcnZpY2UsIGNvbXBsZXRlKSB7XG4gICAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxuICAgICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3Q7XG5cbiAgICAgIC8vIGJvdGggZnVuY3Rpb25zIGhhdmUgc2ltaWxhciBzaWduYXR1cmVzIHNvIHdlIGNhbiBwYXNzIHRoZSBzYW1lIGFyZ3VtZW50cyB0byBib3RoXG4gICAgICByZXF1ZXN0RnVuY3Rpb24oXG4gICAgICAgIHRoaXMuc2V0dXBVcmwoc2VydmljZSksXG4gICAgICAgIHhociA9PiB7XG4gICAgICAgICAgLy8gaWYgYCF4aHJgLCB0aGVuIGBnZXRTY3JpcHRgIGZ1bmN0aW9uIHdhcyB1c2VkLCBzbyB0aGVyZSBpcyBubyByZXNwb25zZSB0ZXh0XG4gICAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IHhociA/IHhoci5yZXNwb25zZVRleHQgOiAnJztcblxuICAgICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cbiAgICAgICAgICAvLyBpZiB0aGUgc2NyaXB0IGlzIEpTT05QLCB0aGVuIGEgdGltZSBkZWZpbmVkIGZ1bmN0aW9uIGBjYWxsYmFja197RGF0ZS5ub3d9YCBoYXMgYWxyZWFkeVxuICAgICAgICAgIC8vIGJlZW4gY2FsbGVkIChhcyB0aGUgSlNPTlAgY2FsbGJhY2spLiBUaGlzIGNhbGxiYWNrIHNldHMgdGhlIF9fSlNPTlBfREFUQSBwcm9wZXJ0eVxuICAgICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0gc2VydmljZS5fX0pTT05QX0RBVEE7XG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5fX0pTT05QX0RBVEE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2FsbCB0aGUgc2VydmljZSBjYWxsYmFjayB3aXRoIHRoZSByZXNwb25zZSB0ZXh0IChzbyBpdCBjYW4gcGFyc2UgdGhlIHJlc3BvbnNlKVxuICAgICAgICAgIHRoaXMucnVuU2VydmljZUNhbGxiYWNrLmNhbGwodGhpcywgY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMub3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBzZXJ2aWNlLmRhdGEsXG4gICAgICAgIHNlcnZpY2UuaGVhZGVyc1xuICAgICAgKTtcblxuICAgICAgLy8gYHNlcnZpY2UuZGF0YWAgYW5kIGBzZXJ2aWNlLmhlYWRlcnNgIGFyZSBvcHRpb25hbCAodGhleSBvbmx5IGNvdW50IGlmIGAhc2VydmljZS5pc1NjcmlwdGAgYW55d2F5KVxuICAgIH07XG5cbiAgICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXG4gICAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XG4gICAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1blNlcnZpY2VDYWxsYmFjayA9IGZ1bmN0aW9uKFxuICAgICAgY29tcGxldGUsXG4gICAgICBzZXJ2aWNlLFxuICAgICAgcmVzcG9uc2VUZXh0XG4gICAgKSB7XG4gICAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgc2VydmljZSB1c2VzIHRoZSBhc3luYyBjYWxsYmFjayBpbiBpdHMgaGFuZGxlciBtZXRob2RcbiAgICAgIGNvbnN0IHNlcnZpY2VSZXN1bHRIYW5kbGVyID0gYXN5bmNSZXN1bHQgPT4ge1xuICAgICAgICAvLyBpZiBgcmVzdWx0YCBpcyBhIHZhbGlkIHZhbHVlLCB0aGVuIHRoaXMgZnVuY3Rpb24gc2hvdWxkbid0IHJlYWxseSBydW5cbiAgICAgICAgLy8gZXZlbiBpZiBpdCBpcyBjYWxsZWQgYnkgYHNlcnZpY2UuY2FsbGJhY2tgXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQuY2FsbCh0aGlzLCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcbiAgICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dCk7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQuY2FsbCh0aGlzLCBjb21wbGV0ZSwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgd2l0aCB0aGUgYHJlc3VsdGAgZnJvbSBgc2VydmljZS5jYWxsYmFja2AgcmVnYXJkbGVzcyBvZiBob3cgaXQgcHJvdmlkZWQgdGhhdCByZXN1bHQgKHN5bmMgb3IgYXN5bmMpLlxuICAgIC8vIGByZXN1bHRgIHdpbGwgYmUgd2hhdGV2ZXIgaXMgcmV0dXJuZWQgZnJvbSBgc2VydmljZS5jYWxsYmFja2AuIEEgc2VydmljZSBjYWxsYmFjayBzaG91bGQgcHJvdmlkZSBhbiBvYmplY3Qgd2l0aCBkYXRhXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLm9uU2VydmljZVJlc3VsdCA9IGZ1bmN0aW9uKGNvbXBsZXRlLCByZXN1bHQpIHtcbiAgICAgIC8vIGNvbnZlcnQgcmVzdWx0IHRvIG5vZGVqcyBzdHlsZSBhc3luYyBjYWxsYmFja1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yIHx8IChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSkge1xuICAgICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIHJlc3VsdCwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxuICAgIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuTmV4dFNlcnZpY2VPbkVycm9yID0gZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMubG9nRXJyb3IoZXJyKTtcblxuICAgICAgICBjb25zdCBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKTtcblxuICAgICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja0Vycm9yLFxuICAgICAgICAgICAgbmV3IEVycm9yKCdBbGwgc2VydmljZXMgZmFpbGVkJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRDdXJyZW50U2VydmljZU9wdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXG5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7bmFtZTogdmFsfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbCgpXG4gICAgICB9ZWxzZSBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgYWZ0ZXIgcmVzZXR0aW5nIHRoZSBgY3VycmVudFNlcnZpY2VJbmRleGBcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuY29tcGxldGVTZXJ2aWNlID0gZnVuY3Rpb24oZm4sIGRhdGEpIHtcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xO1xuXG4gICAgICBmbiAmJiBmbihkYXRhKTtcbiAgICB9O1xuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmxvZ0Vycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXg7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoaWR4KTtcblxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnVGhlIHNlcnZpY2VbJyArXG4gICAgICAgICAgaWR4ICtcbiAgICAgICAgICAnXSAoJyArXG4gICAgICAgICAgc2VydmljZS51cmwgK1xuICAgICAgICAgICcpIHJlc3BvbmRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3InLFxuICAgICAgICBlcnJcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFNjcmlwdCh1cmwsIGNhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgICBsZXQgdGltZW91dElkeDtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgcy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpO1xuICAgICAgcy5zcmMgPSB1cmwuc3JjIHx8IHVybDtcbiAgICAgIHMuYXN5bmMgPSBmYWxzZTtcblxuICAgICAgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gcy5yZWFkeVN0YXRlO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWR4KTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrLmRvbmUgJiYgKCFzdGF0ZSB8fCAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHN0YXRlKSkpIHtcbiAgICAgICAgICBjYWxsYmFjay5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuXG4gICAgICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xuICAgICAgLy8gb25lIHdheSBpcyB0byB1c2UgYSB0aW1lb3V0XG4gICAgICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWU7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUFzeW5jUmVxdWVzdChcbiAgICAgIHVybCxcbiAgICAgIG9uQ29tcGxldGUsXG4gICAgICB0aW1lb3V0LFxuICAgICAgcG9zdERhdGEsXG4gICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICkge1xuICAgICAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxuICAgICAgICAnTVNYTUwyLlhNTEhUVFAuMy4wJ1xuICAgICAgKTtcblxuICAgICAgeGhyLm9wZW4ocG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKTtcblxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMykge1xuICAgICAgICAgICAgb25Db21wbGV0ZSh4aHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQocG9zdERhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvRXJyb3Iob2JqKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdFcnJvciBbJyArIChvYmouY29kZSB8fCAnVU5LTk9XTicpICsgJ106ICcgKyBvYmouZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBMb2NhdGlvbjtcbiAgfSkoKTtcblxuICBjYy5MYXcgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cbiAgICAgIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cbiAgICAgIC8vIEl0IGRvZXMgbm90IGFmZmVjdCBoaWRpbmcgdGhlIHBvcHVwIGZvciBjb3VudHJpZXMgdGhhdCBkbyBub3QgaGF2ZSBjb29raWUgbGF3LlxuICAgICAgcmVnaW9uYWxMYXc6IHRydWUsXG5cbiAgICAgIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xuICAgICAgaGFzTGF3OiBbXG4gICAgICAgICdBVCcsXG4gICAgICAgICdCRScsXG4gICAgICAgICdCRycsXG4gICAgICAgICdIUicsXG4gICAgICAgICdDWicsXG4gICAgICAgICdDWScsXG4gICAgICAgICdESycsXG4gICAgICAgICdFRScsXG4gICAgICAgICdGSScsXG4gICAgICAgICdGUicsXG4gICAgICAgICdERScsXG4gICAgICAgICdFTCcsXG4gICAgICAgICdIVScsXG4gICAgICAgICdJRScsXG4gICAgICAgICdJVCcsXG4gICAgICAgICdMVicsXG4gICAgICAgICdMVCcsXG4gICAgICAgICdMVScsXG4gICAgICAgICdNVCcsXG4gICAgICAgICdOTCcsXG4gICAgICAgICdOTycsXG4gICAgICAgICdQTCcsXG4gICAgICAgICdQVCcsXG4gICAgICAgICdTSycsXG4gICAgICAgICdFUycsXG4gICAgICAgICdTRScsXG4gICAgICAgICdHQicsXG4gICAgICAgICdVSycsXG4gICAgICAgICdHUicsXG4gICAgICAgICdFVScsXG4gICAgICAgICdSTydcbiAgICAgIF0sXG5cbiAgICAgIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGFsbCBjb29raWUgY29uc2VudCBjaG9pY2VzIG11c3QgYmUgcmV2b2thYmxlIChhIHVzZXIgbXVzdCBiZSBhYmxlIHRvbyBjaGFuZ2UgdGhlaXIgbWluZClcbiAgICAgIHJldm9rYWJsZTogW1xuICAgICAgICAnSFInLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnRVMnXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhIHBlcnNvbiBjYW4gb25seSBcImNvbnNlbnRcIiBpZiB0aGUgZXhwbGljaXRseSBjbGljayBvbiBcIkkgYWdyZWVcIi5cbiAgICAgIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXG4gICAgICBleHBsaWNpdEFjdGlvbjogWydIUicsICdJVCcsICdFUycsICdOTyddXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExhdyhvcHRpb25zKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBMYXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBzZXQgb3B0aW9ucyBiYWNrIHRvIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgdXRpbC5kZWVwRXh0ZW5kKCh0aGlzLm9wdGlvbnMgPSB7fSksIGRlZmF1bHRPcHRpb25zIClcblxuICAgICAgLy8gbWVyZ2UgaW4gdXNlciBvcHRpb25zXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuICAgIH07XG5cbiAgICBMYXcucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGNvdW50cnlDb2RlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNMYXc6IHRoaXMub3B0aW9ucy5oYXNMYXcuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgICAgcmV2b2thYmxlOiB0aGlzLm9wdGlvbnMucmV2b2thYmxlLmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIGV4cGxpY2l0QWN0aW9uOiB0aGlzLm9wdGlvbnMuZXhwbGljaXRBY3Rpb24uaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5hcHBseUxhdyA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvdW50cnlDb2RlKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpO1xuXG4gICAgICBpZiAoIWNvdW50cnkuaGFzTGF3KSB7XG4gICAgICAgIC8vIFRoZSBjb3VudHJ5IGhhcyBubyBjb29raWUgbGF3XG4gICAgICAgIG9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyhjb3VudHJ5Q29kZSwgY291bnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZWdpb25hbExhdykge1xuICAgICAgICBpZiAoY291bnRyeS5yZXZva2FibGUpIHtcbiAgICAgICAgICAvLyBXZSBtdXN0IHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJldm9rZSBjb25zZW50IGF0IGEgbGF0ZXIgdGltZVxuICAgICAgICAgIG9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudHJ5LmV4cGxpY2l0QWN0aW9uKSB7XG4gICAgICAgICAgLy8gVGhlIHVzZXIgbXVzdCBleHBsaWNpdGx5IGNsaWNrIHRoZSBjb25zZW50IGJ1dHRvblxuICAgICAgICAgIG9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF3O1xuICB9KSgpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXG4gIC8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cbiAgY2MuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGNvbnN0IGxhdyA9IG5ldyBjYy5MYXcob3B0aW9ucy5sYXcpO1xuXG4gICAgaWYgKCFjb21wbGV0ZSkgY29tcGxldGUgPSBmdW5jdGlvbigpIHt9O1xuICAgIGlmICghZXJyb3IpIGVycm9yID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIGNvbnN0IGFuc3dlcnMgPSBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkubWFwKCBjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSB1dGlsLmdldENvb2tpZSgnY29va2llY29uc2VudF9zdGF0dXNfJytjYXRlZ29yeSlcbiAgICAgIHJldHVybiBpc1ZhbGlkU3RhdHVzKGFuc3dlcikgPyB7IFtjYXRlZ29yeV06IGFuc3dlciB9IDogdW5kZWZpbmVkXG4gICAgfSkuZmlsdGVyKG9iaiA9PiBvYmogPyBvYmpbT2JqZWN0LmtleXMob2JqKVswXV0gOiBmYWxzZSk7XG5cbiAgICAvLyBpZiB0aGV5IGhhdmUgYWxyZWFkeSBhbnN3ZXJlZFxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbXBsZXRlKGFuc3dlcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNjLmdldENvdW50cnlDb2RlKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRoZSBsYXcgb3IgbG9jYXRpb24gb3B0aW9ucyBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxhdztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubG9jYXRpb247XG5cbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IGxhdy5hcHBseUxhdyhvcHRpb25zLCByZXN1bHQuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZShuZXcgY2MuUG9wdXAob3B0aW9ucykpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRoZSBsYXcgb3IgbG9jYXRpb24gb3B0aW9ucyBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxhdztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubG9jYXRpb247XG5cbiAgICAgICAgZXJyb3IoZXJyLCBuZXcgY2MuUG9wdXAob3B0aW9ucykpO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB0cmllcyB0byBmaW5kIHlvdXIgY3VycmVudCBsb2NhdGlvbi4gSXQgZWl0aGVyIGdyYWJzIGl0IGZyb20gYSBoYXJkY29kZWQgb3B0aW9uIGluXG4gIC8vIGBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZWAsIG9yIGF0dGVtcHRzIHRvIG1ha2UgYSBsb2NhdGlvbiBzZXJ2aWNlIHJlcXVlc3QuIFRoaXMgZnVuY3Rpb24gYWNjZXB0c1xuICAvLyBvcHRpb25zICh3aGljaCBjYW4gY29uZmlndXJlIHRoZSBgbGF3YCBhbmQgYGxvY2F0aW9uYCBtb2R1bGVzKSBhbmQgZmlyZXMgYSBjYWxsYmFjayB3aXRoIHdoaWNoXG4gIC8vIHBhc3NlcyBhbiBvYmplY3QgYHtjb2RlOiBjb3VudHJ5Q29kZX1gIGFzIHRoZSBmaXJzdCBhcmd1bWVudCAod2hpY2ggY2FuIGhhdmUgdW5kZWZpbmVkIHByb3BlcnRpZXMpXG4gIGNjLmdldENvdW50cnlDb2RlID0gZnVuY3Rpb24ob3B0aW9ucywgY29tcGxldGUsIGVycm9yKSB7XG4gICAgaWYgKG9wdGlvbnMubGF3ICYmIG9wdGlvbnMubGF3LmNvdW50cnlDb2RlKSB7XG4gICAgICBjb21wbGV0ZSh7XG4gICAgICAgIGNvZGU6IG9wdGlvbnMubGF3LmNvdW50cnlDb2RlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IGxvY2F0b3IgPSBuZXcgY2MuTG9jYXRpb24ob3B0aW9ucy5sb2NhdGlvbik7XG4gICAgICBsb2NhdG9yLmxvY2F0ZShmdW5jdGlvbihzZXJ2aWNlUmVzdWx0KSB7XG4gICAgICAgIGNvbXBsZXRlKHNlcnZpY2VSZXN1bHQgfHwge30pO1xuICAgICAgfSwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb21wbGV0ZSh7fSk7XG4gIH07XG5cbiAgLy8gZXhwb3J0IHV0aWxzIChubyBwb2ludCBpbiBoaWRpbmcgdGhlbSwgc28gd2UgbWF5IGFzIHdlbGwgZXhwb3NlIHRoZW0pXG4gIGNjLnV0aWxzID0gdXRpbDtcblxuICAvLyBwcmV2ZW50IHRoaXMgY29kZSBmcm9tIGJlaW5nIHJ1biB0d2ljZVxuICBjYy5oYXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgd2luZG93LmNvb2tpZWNvbnNlbnQgPSBjYztcbn0pKHdpbmRvdy5jb29raWVjb25zZW50IHx8IHt9KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=