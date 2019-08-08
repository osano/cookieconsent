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

/***/ "./src/cookieconsent.js":
/*!******************************!*\
  !*** ./src/cookieconsent.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_interopRequireDefault__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
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
      var value = ' ' + document.cookie;
      var parts = value.split(' ' + name + '=');
      return parts.length < 2 ? undefined : parts.pop().split('').shift();
    },
    setCookie: function setCookie(name, value, expiryDays, domain, path, secure) {
      var exdate = new Date();
      exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
      document.cookie = name + '=' + value + 'expires=' + exdate.toUTCString() + 'path=' + (path || '/') + (domain ? 'domain=' + domain : '') + (secure ? 'secure' : '');
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
    } // valid cookie values

  };
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
    /**
     * Checks if a status is in the constants list
     * @param { string } status - Status String to
     * @return { boolean } - if status is valid
     */

  };

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
    // There is a good reason why it's called in a timeout. Read 'fadeIn'


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
          style.sheet.insertRule(prop + '{' + colorStyles[prop].join('') + '}', ++ruleIndex);
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
          dismissOnWindowClick = _this$options.dismissOnWindowClick,
          dismissOnKeyPress = _this$options.dismissOnKeyPress;

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
        } else if (dismissOnKeyPress) {
          this.onKeyPress = function (event) {
            var keyCode = event.keyCode;

            if (keyCode === 13) {
              setStatuses(cc.status.allow);
              close(true);
            } else if (keyCode === 27) {
              setStatuses(cc.status.dismiss);
              close(true);
            }
          };

          window.addEventListener('onkeypress', this.onKeyPress);
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
        return {name: 'ipinfodb'}
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

  if (typeof exports !== 'undefined') {
    module.exports = cc;
  } else {
    window.cookieconsent = cc;
  }
}(window.cookieconsent || {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29va2llY29uc2VudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2Nzcz9hNDNjIl0sIm5hbWVzIjpbImNjIiwiaGFzSW5pdGlhbGl6ZWQiLCJ1dGlsIiwiaW50ZXJwb2xhdGVTdHJpbmciLCJzdHIiLCJjYWxsYmFjayIsInJlcGxhY2UiLCJhcmd1bWVudHMiLCJkZWVwRXh0ZW5kIiwidGFyZ2V0Iiwic291cmNlIiwicHJvcCIsImhhc093blByb3BlcnR5IiwiaXNQbGFpbk9iamVjdCIsImdldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvcCIsInNoaWZ0Iiwic2V0Q29va2llIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJleGRhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwidGhyb3R0bGUiLCJsaW1pdCIsIndhaXQiLCJhcHBseSIsInNldFRpbWVvdXQiLCJoYXNoIiwiaSIsImNociIsImxlbiIsImNoYXJDb2RlQXQiLCJub3JtYWxpc2VIZXgiLCJoZXgiLCJzdWJzdHIiLCJnZXRDb250cmFzdCIsInIiLCJwYXJzZUludCIsImciLCJiIiwieWlxIiwiZ2V0THVtaW5hbmNlIiwibnVtIiwiYW10IiwiUiIsIkIiLCJHIiwidG9TdHJpbmciLCJzbGljZSIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm9iaiIsImNvbnN0cnVjdG9yIiwiT2JqZWN0IiwidHJhdmVyc2VET01QYXRoIiwiZWxlbSIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0YXR1cyIsImRlbnkiLCJhbGxvdyIsImRpc21pc3MiLCJjYXRlZ29yeSIsInVuY2F0ZWdvcml6ZWQiLCJlc3NlbnRpYWwiLCJwZXJzb25hbGl6YXRpb24iLCJhbmFseXRpY3MiLCJtYXJrZXRpbmciLCJpc1ZhbGlkU3RhdHVzIiwia2V5cyIsImluZGV4T2YiLCJ0cmFuc2l0aW9uRW5kIiwiZWwiLCJjcmVhdGVFbGVtZW50IiwidHJhbnMiLCJ0IiwiT1QiLCJtc1QiLCJNb3pUIiwiV2Via2l0VCIsInByZWZpeCIsInN0eWxlIiwiaGFzVHJhbnNpdGlvbiIsImN1c3RvbVN0eWxlcyIsIlBvcHVwIiwiZGVmYXVsdE9wdGlvbnMiLCJlbmFibGVkIiwiY29udGFpbmVyIiwib25Qb3B1cE9wZW4iLCJvblBvcHVwQ2xvc2UiLCJvbkluaXRpYWxpemUiLCJzdGF0dXNlcyIsIm9uU3RhdHVzQ2hhbmdlIiwiY29va2llTmFtZSIsImNob3NlbkJlZm9yZSIsIm9uUmV2b2tlQ2hvaWNlIiwib25Ob0Nvb2tpZUxhdyIsImNvdW50cnlDb2RlIiwiY291bnRyeSIsImNvbnRlbnQiLCJoZWFkZXIiLCJtZXNzYWdlIiwibGluayIsImhyZWYiLCJjbG9zZSIsInBvbGljeSIsImVsZW1lbnRzIiwibWVzc2FnZWxpbmsiLCJjYXRlZ29yaWVzIiwic2F2ZSIsIndpbmRvdyIsIm1vZGFsIiwicmV2b2tlQnRuIiwiY29tcGxpYW5jZSIsImluZm8iLCJ0eXBlIiwibGF5b3V0cyIsImJhc2ljIiwibGF5b3V0IiwicG9zaXRpb24iLCJ0aGVtZSIsInBhbGV0dGUiLCJyZXZva2FibGUiLCJhbmltYXRlUmV2b2thYmxlIiwic2hvd0xpbmsiLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJkaXNtaXNzT25MaW5rQ2xpY2siLCJkaXNtaXNzT25LZXlQcmVzcyIsImlnbm9yZUNsaWNrc0Zyb20iLCJhdXRvT3BlbiIsImF1dG9BdHRhY2giLCJtb2JpbGVGb3JjZUZsb2F0Iiwid2hpdGVsaXN0UGFnZSIsImJsYWNrbGlzdFBhZ2UiLCJvdmVycmlkZUhUTUwiLCJDb29raWVQb3B1cCIsImluaXRpYWxpemUiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwiZGVzdHJveSIsImNoZWNrQ2FsbGJhY2tIb29rcyIsImNhbGwiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc21pc3NUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25XaW5kb3dTY3JvbGwiLCJvbldpbmRvd0NsaWNrIiwib25MaW5rQ2xpY2siLCJvbk1vdXNlTW92ZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlQ3VzdG9tU3R5bGUiLCJvcGVuIiwiaXNPcGVuIiwiZmFkZUluIiwidG9nZ2xlUmV2b2tlQnV0dG9uIiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvdyIsInJldm9rZUNob2ljZSIsInByZXZlbnRPcGVuIiwiY2xlYXJTdGF0dXNlcyIsImhhc0Fuc3dlcmVkIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQ29uc2VudGVkIiwibWFwIiwic2V0U3RhdHVzZXMiLCJ1cGRhdGVDYXRlZ29yeVN0YXR1cyIsImNhdGVnb3J5TmFtZSIsImZvckVhY2giLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwicmVtb3ZlIiwiY29tcGxldGUiLCJjb29raWVFbmFibGVkIiwiQ29va2llc09LIiwic3RhdHVzZXNWYWx1ZXMiLCJtYXRjaGVzIiwiaGFzTWF0Y2hlcyIsImZpbHRlciIsIm1hdGNoIiwiZ2V0UG9zaXRpb25DbGFzc2VzIiwicG9zIiwib3B0cyIsInBvc2l0aW9uU3R5bGUiLCJjbGFzc2VzIiwicHVzaCIsImF0dGFjaEN1c3RvbVBhbGV0dGUiLCJjdXN0b21TdHlsZVNlbGVjdG9yIiwiaW50ZXJwb2xhdGVkIiwiY29tcGxpYW5jZVR5cGUiLCJtYXJrdXAiLCJkaXYiLCJjb250Iiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImNoZWNrZWQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiZXJyb3IiLCJFcnJvciIsImJ0biIsIlJlZ0V4cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZSIsInJlZmVyZW5jZXMiLCJjb2xvclN0eWxlcyIsInBvcHVwIiwiYnV0dG9uIiwiaGlnaGxpZ2h0Iiwic2F2ZUJ1dHRvbiIsInRleHQiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvdXIiLCJoZWFkIiwic2hlZXQiLCJydWxlSW5kZXgiLCJpbnNlcnRSdWxlIiwiY3VzdG9tU3R5bGUiLCJzdHlsZU5vZGUiLCJvd25lck5vZGUiLCJnZXRFdmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJjb25zb2xlIiwid2FybiIsImRlbGF5Iiwic2Nyb2xsUmFuZ2UiLCJNYXRoIiwiZmxvb3IiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJldnQiLCJpZ25vcmVkQ2xpY2siLCJ0YWdOYW1lIiwib25LZXlQcmVzcyIsImtleUNvZGUiLCJhY3RpdmUiLCJtaW5ZIiwibWF4WSIsImlubmVySGVpZ2h0IiwiY2xpZW50WSIsIkxvY2F0aW9uIiwidGltZW91dCIsInNlcnZpY2VzIiwic2VydmljZURlZmluaXRpb25zIiwiaXBpbmZvIiwidXJsIiwiaGVhZGVycyIsImRvbmUiLCJyZXNwb25zZSIsImpzb24iLCJwYXJzZSIsInRvRXJyb3IiLCJjb2RlIiwiZXJyIiwiaXBpbmZvZGIiLCJpc1NjcmlwdCIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsImlzb19jb2RlIiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsImlkeCIsInNlcnZpY2VPcHRpb24iLCJkeW5hbWljT3B0cyIsImFzc2lnbiIsImxvY2F0ZSIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJfIiwicGFyYW0iLCJ0ZW1wTmFtZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsImludGVycG9sYXRlVXJsIiwicmVxdWVzdEZ1bmN0aW9uIiwiZ2V0U2NyaXB0IiwibWFrZUFzeW5jUmVxdWVzdCIsInhociIsInJlc3BvbnNlVGV4dCIsInJ1blNlcnZpY2VDYWxsYmFjayIsImRhdGEiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0IiwicmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsInZhbCIsImZuIiwidGltZW91dElkeCIsInMiLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImwiLCJzZW5kIiwiTGF3IiwicmVnaW9uYWxMYXciLCJoYXNMYXciLCJleHBsaWNpdEFjdGlvbiIsImdldCIsImFwcGx5TGF3IiwibGF3IiwiYW5zd2VycyIsImFuc3dlciIsImdldENvdW50cnlDb2RlIiwibG9jYXRvciIsInNlcnZpY2VSZXN1bHQiLCJ1dGlscyIsImV4cG9ydHMiLCJtb2R1bGUiLCJjb29raWVjb25zZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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TTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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T0FBTzBZLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbENDLFVBQU0sQ0FBQ0QsT0FBUCxHQUFpQjNZLEVBQWpCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wrSCxVQUFNLENBQUM4USxhQUFQLEdBQXVCN1ksRUFBdkI7QUFDRDtBQUVGLENBM3lEQSxDQTJ5REUrSCxNQUFNLENBQUM4USxhQUFQLElBQXdCLEVBM3lEMUIsQ0FBRCxDOzs7Ozs7Ozs7Ozs7O0FDSEEsY0FBYyxtQkFBTyxDQUFDLG1TQUFxSjs7QUFFM0ssNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJjb29raWVjb25zZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Nvb2tpZWNvbnNlbnQuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYy13aW5kb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1pbnZpc2libGUge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi8qIG9ubHkgYW5pbWF0ZSBpZmhhcyBjbGFzcyAnY2MtYW5pbWF0ZScgKi9cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2Uge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtZ3Jvd2VyIHtcXG4gIC8qIEluaXRpYWxseSB3ZSBkb24ndCB3YW50IGFueSBoZWlnaHQsIGFuZCB3ZSB3YW50IHRoZSBjb250ZW50cyB0byBiZSBoaWRkZW4gKi9cXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogU2V0IG91ciB0cmFuc2l0aW9ucyB1cC4gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7IH1cXG5cXG4vKiB0aGUgcG9wdXAgd2luZG93ICovXFxuLmNjLXdpbmRvdyxcXG4uY2MtcmV2b2tlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogZXhjbHVkZSBwYWRkaW5nIHdoZW4gZGVhbGluZyB3aXRoIHdpZHRoICovXFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBDYWxpYnJpLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC8qIGJ5IHNldHRpbmcgdGhlIGJhc2UgZm9udCBoZXJlLCB3ZSBjYW4gc2l6ZSB0aGUgcmVzdCBvZiB0aGUgcG9wdXAgdXNpbmcgQ1NTIGBlbWAgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC8qIHRoZSBmb2xsb3dpbmcgYXJlIHJhbmRvbSB1bmp1c3RpZmllZCBzdHlsZXMgLSBqdXN0IGJlY2F1c2UgLSBzaG91bGQgcHJvYmFibHkgYmUgcmVtb3ZlZCAqL1xcbiAgei1pbmRleDogOTk5OTsgfVxcblxcbi5jYy13aW5kb3cuY2Mtc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7IH1cXG5cXG4vKiAyIGJhc2ljIHR5cGVzIG9mIHdpbmRvdyAtIGZsb2F0aW5nIC8gYmFubmVyICovXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXgtd2lkdGg6IDI0ZW07XFxuICAvKiAxZW0gPT0gMTZweCB0aGVyZWZvcmUgMjRlbSA9PSAzODRweCAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5jYy1yZXZva2Uge1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIGNsaWNrYWJsZSB0aGluZ3MgKi9cXG4uY2MtYnRuLFxcbi5jYy1saW5rLFxcbi5jYy1jbG9zZSxcXG4uY2MtcmV2b2tlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYy1saW5rIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtbGluazpob3ZlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmNjLWxpbms6YWN0aXZlLFxcbi5jYy1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IGluaXRpYWw7IH1cXG5cXG4uY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGlzZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGTE9BVElORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHRoZXNlIGNsYXNzZXMgcG9zaXRpb24gdGhlIGZsb2F0aW5nIGVsZW1lbnQgKi9cXG4uY2MtdG9wIHtcXG4gIHRvcDogMWVtOyB9XFxuXFxuLmNjLWxlZnQge1xcbiAgbGVmdDogMWVtOyB9XFxuXFxuLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAxZW07IH1cXG5cXG4uY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMWVtOyB9XFxuXFxuLyogbGlua3MgdGhhdCBhcmUgZGlyZWN0IGRlY2VuZGFudHMgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBibG9jayAqL1xcbi5jYy1mbG9hdGluZyA+IC5jYy1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2Uge1xcbiAgZmxleDogMSAwIGF1dG87IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBCQU5ORVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10b3Age1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmNjLWJhbm5lci5jYy1ib3R0b20ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuLmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07IH1cXG5cXG4vKiBDT01QTElBTkNFIEJPWCAqL1xcbi5jYy1jb21wbGlhbmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlID4gLmNjLWJ0biB7XFxuICBmbGV4OiAxOyB9XFxuXFxuLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuXFxuLyogQ2F0ZWdvcmllcyBMYXlvdXQgKi9cXG4uY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uY2MtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDAgMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMjJweCk7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAycHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjcpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5jYy13aW5kb3csXFxuICAuY2MtcmV2b2tlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5jYy1idG4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9IH1cXG5cXG4vKiBkaW1lbnNpb25zIGZvciAnaVBob25lNiBQbHVzJyBhbmQgbG93ZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5jYy13aW5kb3cuY2MtdG9wIHtcXG4gICAgdG9wOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIsIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcsIC5jYy13aW5kb3cuY2MtcmlnaHQsIC5jYy13aW5kb3cuY2MtbGVmdCB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtY29tcGxpYW5jZSB7XFxuICAgICAgZmxleDogMSAxIGF1dG87IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiA4cHggMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgfVxcbiAgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDA7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogdGhpbiBzb2xpZCBsaWdodGdyZXk7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogMC40ZW0gNHB4OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbiEoZnVuY3Rpb24oY2MpIHtcbiAgLy8gc3RvcCBmcm9tIHJ1bm5pbmcgYWdhaW4sIGlmIGFjY2lkZW50bHkgaW5jbHVkZWQgbW9yZSB0aGFuIG9uY2UuXG4gIGlmIChjYy5oYXNJbml0aWFsaXplZCkgcmV0dXJuXG5cbiAgY29uc3QgdXRpbCA9IHtcbiAgICBcbiAgICBpbnRlcnBvbGF0ZVN0cmluZzogZnVuY3Rpb24oc3RyLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhhcmd1bWVudHNbMV0pIHx8ICcnXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZWVwRXh0ZW5kOiBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgZm9yIChsZXQgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3AgaW4gdGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLmlzUGxhaW5PYmplY3QodGFyZ2V0W3Byb3BdKSAmJlxuICAgICAgICAgICAgdGhpcy5pc1BsYWluT2JqZWN0KHNvdXJjZVtwcm9wXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGFyZ2V0XG4gICAgfSxcbiAgICBcbiAgICBnZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gJyAnICsgZG9jdW1lbnQuY29va2llXG4gICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyArIG5hbWUgKyAnPScpXG4gICAgICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMlxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHBhcnRzXG4gICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgIC5zcGxpdCgnJylcbiAgICAgICAgICAgIC5zaGlmdCgpXG4gICAgfSxcblxuICAgIHNldENvb2tpZTogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCBkb21haW4gPyAnZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJ3NlY3VyZScgOiAnJyApXG4gICAgfSxcblxuICAgIC8vIG9ubHkgdXNlZCBmb3IgdGhyb3R0bGluZyB0aGUgJ21vdXNlbW92ZScgZXZlbnQgKHVzZWQgZm9yIGFuaW1hdGluZyB0aGUgcmV2b2tlIGJ1dHRvbiB3aGVuIGBhbmltYXRlUmV2b2thYmxlYCBpcyB0cnVlKVxuICAgIHRocm90dGxlOiBmdW5jdGlvbihjYWxsYmFjaywgbGltaXQpIHtcbiAgICAgIGxldCB3YWl0ID0gZmFsc2VcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF3YWl0KSB7XG4gICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAgIHdhaXQgPSB0cnVlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdhaXQgPSBmYWxzZVxuICAgICAgICAgIH0sIGxpbWl0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIG9ubHkgdXNlZCBmb3IgaGFzaGluZyBqc29uIG9iamVjdHMgKHVzZWQgZm9yIGhhc2ggbWFwcGluZyBwYWxldHRlIG9iamVjdHMsIHVzZWQgd2hlbiBjdXN0b20gY29sb3VycyBhcmUgcGFzc2VkIHRocm91Z2ggSmF2YVNjcmlwdClcbiAgICBoYXNoOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGxldCBoYXNoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGNocixcbiAgICAgICAgbGVuID0gc3RyLmxlbmd0aFxuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoXG4gICAgICBmb3IgKGk7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBjaHIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgY2hyXG4gICAgICAgIGhhc2ggfD0gMFxuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc2hcbiAgICB9LFxuXG4gICAgbm9ybWFsaXNlSGV4OiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGlmIChoZXhbMF0gPT0gJyMnKSB7XG4gICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSlcbiAgICAgIH1cbiAgICAgIGlmIChoZXgubGVuZ3RoID09IDMpIHtcbiAgICAgICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdXG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4XG4gICAgfSxcblxuICAgIC8vIHVzZWQgdG8gZ2V0IHRleHQgY29sb3JzIGlmIG5vdCBzZXRcbiAgICBnZXRDb250cmFzdDogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBoZXggPSB0aGlzLm5vcm1hbGlzZUhleChoZXgpXG4gICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpXG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpXG4gICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpXG4gICAgICBjb25zdCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDBcbiAgICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnXG4gICAgfSxcblxuICAgIC8vIHVzZWQgdG8gY2hhbmdlIGNvbG9yIG9uIGhpZ2hsaWdodFxuICAgIGdldEx1bWluYW5jZTogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBjb25zdCBudW0gPSBwYXJzZUludCh0aGlzLm5vcm1hbGlzZUhleChoZXgpLCAxNiksXG4gICAgICAgIGFtdCA9IDM4LFxuICAgICAgICBSID0gKG51bSA+PiAxNikgKyBhbXQsXG4gICAgICAgIEIgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQsXG4gICAgICAgIEcgPSAobnVtICYgMHgwMDAwZmYpICsgYW10XG4gICAgICAgIHJldHVybiAnIycgKyAoXG4gICAgICAgIDB4MTAwMDAwMCArXG4gICAgICAgIChSIDwgMjU1ID8gKFIgPCAxID8gMCA6IFIpIDogMjU1KSAqIDB4MTAwMDAgK1xuICAgICAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXG4gICAgICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxuICAgICAgKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC5zbGljZSgxKVxuICAgIH0sXG5cbiAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICApXG4gICAgfSxcblxuICAgIGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgLy8gVGhlIGNvZGUgXCJ0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGxcIiBhbGxvd3MgQXJyYXkgb2JqZWN0c1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0XG4gICAgfSxcblxuICAgIHRyYXZlcnNlRE9NUGF0aDogZnVuY3Rpb24oZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW0gfHwgIWVsZW0ucGFyZW50Tm9kZSkgcmV0dXJuIG51bGxcbiAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSByZXR1cm4gZWxlbVxuXG4gICAgICByZXR1cm4gdGhpcy50cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpXG4gICAgfVxuICB9XG5cbiAgLy8gdmFsaWQgY29va2llIHZhbHVlc1xuICBjYy5zdGF0dXMgPSB7XG4gICAgZGVueSAgIDogJ2RlbnknLFxuICAgIGFsbG93ICA6ICdhbGxvdycsXG4gICAgZGlzbWlzczogJ2Rpc21pc3MnXG4gIH1cbiAgY2MuY2F0ZWdvcnkgPSB7XG4gICAgdW5jYXRlZ29yaXplZCAgOiAnZGlzbWlzcycsXG4gICAgZXNzZW50aWFsICAgICAgOiAnYWxsb3cnLFxuICAgIHBlcnNvbmFsaXphdGlvbjogJ2Rpc21pc3MnLFxuICAgIGFuYWx5dGljcyAgICAgIDogJ2Rpc21pc3MnLFxuICAgIG1hcmtldGluZyAgICAgIDogJ2Rpc21pc3MnXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgc3RhdHVzIGlzIGluIHRoZSBjb25zdGFudHMgbGlzdFxuICAgKiBAcGFyYW0geyBzdHJpbmcgfSBzdGF0dXMgLSBTdGF0dXMgU3RyaW5nIHRvXG4gICAqIEByZXR1cm4geyBib29sZWFuIH0gLSBpZiBzdGF0dXMgaXMgdmFsaWRcbiAgICovXG4gIGNvbnN0IGlzVmFsaWRTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLnN0YXR1cykuaW5kZXhPZihzdGF0dXMpID49IDBcbiAgfVxuXG4gIC8vIGRldGVjdHMgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCBuYW1lXG4gIGNjLnRyYW5zaXRpb25FbmQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRyYW5zID0ge1xuICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgT1Q6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICBtc1Q6ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgV2Via2l0VDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfVxuXG4gICAgZm9yIChsZXQgcHJlZml4IGluIHRyYW5zKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgdHlwZW9mIGVsLnN0eWxlW3ByZWZpeCArICdyYW5zaXRpb24nXSAhPSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cmFuc1twcmVmaXhdXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJ1xuICB9KSgpXG5cbiAgY2MuaGFzVHJhbnNpdGlvbiA9ICEhY2MudHJhbnNpdGlvbkVuZFxuXG4gIC8vIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gdGhlIGN1c3RvbSA8c3R5bGU+IHRhZ3NcbiAgY2MuY3VzdG9tU3R5bGVzID0ge31cblxuICBjYy5Qb3B1cCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxuICAgICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgLy8gb3B0aW9uYWwgKGV4cGVjdGluZyBhIEhUTUwgZWxlbWVudCkgaWYgcGFzc2VkLCB0aGUgcG9wdXAgaXMgYXBwZW5kZWQgdG8gdGhpcyBlbGVtZW50LiBkZWZhdWx0IGlzIGBkb2N1bWVudC5ib2R5YFxuICAgICAgY29udGFpbmVyOiBudWxsLFxuXG4gICAgICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXG4gICAgICBjb29raWU6IHtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcbiAgICAgICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXG4gICAgICAgIHBhdGg6ICcvJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkb21haW4gdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgb24gdGhpcyBkb21haW4uXG4gICAgICAgIC8vICAtIEd1aWRlIHRvIGNvb2tpZSBkb21haW5zIC0gaHR0cHM6Ly93d3cubXhzYXNoYS5ldS9ibG9nLzIwMTQvMDMvMDQvZGVmaW5pdGl2ZS1ndWlkZS10by1jb29raWUtZG9tYWlucy9cbiAgICAgICAgZG9tYWluOiAnJyxcblxuICAgICAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcbiAgICAgICAgZXhwaXJ5RGF5czogMzY1LFxuXG4gICAgICAgIC8vIElmIHRydWUgdGhlIGNvb2tpZSB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgc2VjdXJlIGZsYWcuIFNlY3VyZSBjb29raWVzIHdpbGwgb25seSBiZSB0cmFuc21pdHRlZCB2aWEgSFRUUFMuXG4gICAgICAgIHNlY3VyZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZXNlIGNhbGxiYWNrIGhvb2tzIGFyZSBjYWxsZWQgYXQgY2VydGFpbiBwb2ludHMgaW4gdGhlIHByb2dyYW0gZXhlY3V0aW9uXG4gICAgICBvblBvcHVwT3BlbjogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uUG9wdXBDbG9zZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uSW5pdGlhbGl6ZTogZnVuY3Rpb24oc3RhdHVzZXMpIHt9LFxuICAgICAgb25TdGF0dXNDaGFuZ2U6IGZ1bmN0aW9uKGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKSB7fSxcbiAgICAgIG9uUmV2b2tlQ2hvaWNlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Ob0Nvb2tpZUxhdzogZnVuY3Rpb24oY291bnRyeUNvZGUsIGNvdW50cnkpIHt9LFxuXG4gICAgICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIGhlYWRlcjogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcbiAgICAgICAgZGlzbWlzczogJ0dvdCBpdCEnLFxuICAgICAgICBhbGxvdzogJ0FsbG93IGNvb2tpZXMnLFxuICAgICAgICBkZW55OiAnRGVjbGluZScsXG4gICAgICAgIGxpbms6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcbiAgICAgICAgY2xvc2U6ICcmI3gyNzRjJyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgcG9saWN5OiAnQ29va2llIFBvbGljeSdcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxuICAgICAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cbiAgICAgIC8vXG4gICAgICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxuICAgICAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcCcsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcbiAgICAgICAgbWVzc2FnZWxpbms6XG4gICAgICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX0gPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+PC9zcGFuPicsXG4gICAgICAgIGRpc21pc3M6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtZGlzbWlzc1wiPnt7ZGlzbWlzc319PC9hPicsXG4gICAgICAgIGFsbG93OlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy1hbGxvd1wiPnt7YWxsb3d9fTwvYT4nLFxuICAgICAgICBkZW55OlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGVueSBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtZGVueVwiPnt7ZGVueX19PC9hPicsXG4gICAgICAgIGxpbms6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPicsXG4gICAgICAgIGNsb3NlOlxuICAgICAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcbiAgICAgICAgY2F0ZWdvcmllczogYCBcbiAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jYXRlZ29yaWVzXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCIwXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1bmNhdGVnb3JpemVkXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPlVuY2F0ZWdvcml6ZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIlVuY2F0ZWdvcml6ZWQgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjFcIj5ePC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdGhhdCBkb24ndCBmaXQgYW55IG90aGVyIGNhdGVnb3J5LjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZXNzZW50aWFsXCIgY2hlY2tlZCBkaXNhYmxlZC8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+RXNzZW50aWFsPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJFc3NlbnRpYWwgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjNcIj5ePC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGVzc2VudGlhbCBhcHBsaWNhdGlvbiBvciB3ZWJzaXRlIG9wcGVyYXRpb24gY29va2llcy48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjRcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBlcnNvbmFsaXphdGlvblwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5QZXJzb25hbGl6YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiNVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB0aGUgYXBwbGljYXRpb24gdG8gYSBzcGVjaWZpYyB1c2VyLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiNlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYW5hbHl0aWNzXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkFuYWx5dGljczwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiQW5hbHl0aWNzIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI3XCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBhbmFseWl6ZSBkYXRhLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiOFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFya2V0aW5nXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPk1hcmtldGluZzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiTWFya2V0aW5nIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI5XCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHlvdXIgaW50ZXJuZXQgc2hvcHBpbmcgJiBhZHZlcnRpc2VtZW50IGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIGAsXG4gICAgICAgIHNhdmU6IGA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj5TYXZlPC9idXR0b24+YFxuICAgICAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xuICAgICAgfSxcblxuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVycyB7e2NsYXNzZXN9fSBhbmQge3tjaGlsZHJlbn19IGJvdGggZ2V0IHJlcGxhY2VkIGR1cmluZyBpbml0aWFsaXNhdGlvbjpcbiAgICAgIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcbiAgICAgIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXG4gICAgICB3aW5kb3c6XG4gICAgICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcbiAgICAgIFxuICAgICAgbW9kYWw6ICcnLFxuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBodG1sIGZvciB0aGUgcmV2b2tlIGJ1dHRvbi4gVGhpcyBvbmx5IHNob3dzIHVwIGFmdGVyIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB0aGVpciBsZXZlbCBvZiBjb25zZW50XG4gICAgICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXG4gICAgICByZXZva2VCdG46ICc8ZGl2IGNsYXNzPVwiY2MtcmV2b2tlIHt7Y2xhc3Nlc319XCI+e3twb2xpY3l9fTwvZGl2PicsXG5cbiAgICAgIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxuICAgICAgY29tcGxpYW5jZToge1xuICAgICAgICBpbmZvOiAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fTwvZGl2PicsXG4gICAgICAgICdvcHQtaW4nOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LW91dCc6XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxuICAgICAgICBjYXRlZ29yaWVzOiAnPGRpdiBjbGFzcz1cImZvcm1cIj57e2NhdGVnb3JpZXN9fXt7c2F2ZX19PC9kaXY+J1xuICAgICAgfSxcblxuICAgICAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXG4gICAgICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgICAgIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXG4gICAgICBsYXlvdXRzOiB7XG4gICAgICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgICAgIGJhc2ljICAgICAgICAgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX0nLFxuICAgICAgICAnYmFzaWMtY2xvc2UnIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcbiAgICAgICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xuICAgICAgICAvLyBhZGQgYSBjdXN0b20gbGF5b3V0IGhlcmUsIHRoZW4gYWRkIHNvbWUgbmV3IGNzcyB3aXRoIHRoZSBjbGFzcyAnLmNjLWxheW91dC1teS1jb29sLWxheW91dCdcbiAgICAgICAgLy8nbXktY29vbC1sYXlvdXQnOiAnPGRpdiBjbGFzcz1cIm15LXNwZWNpYWwtbGF5b3V0XCI+e3ttZXNzYWdlfX17e2NvbXBsaWFuY2V9fTwvZGl2Pnt7Y2xvc2V9fScsXG4gICAgICB9LFxuXG4gICAgICAvLyBkZWZhdWx0IGxheW91dCAoc2VlIGFib3ZlKVxuICAgICAgbGF5b3V0OiAnYmFzaWMnLFxuXG4gICAgICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gICAgICAvLyAgLSBiYW5uZXIgcG9zaXRpb25zOiB0b3AsIGJvdHRvbVxuICAgICAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYWRkcyBhIGNsYXNzIGBjYy1mbG9hdGluZ2Agb3IgYGNjLWJhbm5lcmAgd2hpY2ggaGVscHMgd2hlbiBzdHlsaW5nXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcblxuICAgICAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAgICAgLy8gICAgLWJsb2NrIChkZWZhdWx0LCBubyBleHRyYSBjbGFzc2VzKVxuICAgICAgLy8gICAgLWVkZ2VsZXNzXG4gICAgICAvLyAgICAtY2xhc3NpY1xuICAgICAgLy8gdXNlIHlvdXIgb3duIHN0eWxlIG5hbWUgYW5kIHVzZSBgLmNjLXRoZW1lLVNUWUxFTkFNRWAgY2xhc3MgaW4gQ1NTIHRvIGVkaXQuXG4gICAgICAvLyBOb3RlOiBzdHlsZSBcIndpcmVcIiBpcyB1c2VkIGZvciB0aGUgY29uZmlndXJhdG9yLCBidXQgaGFzIG5vIENTUyBzdHlsZXMgb2YgaXRzIG93biwgb25seSBwYWxldHRlIGlzIHVzZWQuXG4gICAgICB0aGVtZTogJ2Jsb2NrJyxcblxuICAgICAgLy8gVGhlIHBvcHVwIGlzIGBmaXhlZGAgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHN0YXRpYyAoaW5saW5lIHdpdGggdGhlIHBhZ2UgY29udGVudCksIHNldCB0aGlzIHRvIGZhbHNlXG4gICAgICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcbiAgICAgIHN0YXRpYzogZmFsc2UsXG5cbiAgICAgIC8vIGlmIHlvdSB3YW50IGN1c3RvbSBjb2xvdXJzLCBwYXNzIHRoZW0gaW4gaGVyZS4gdGhpcyBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGlzLlxuICAgICAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgcG9wdXA6IHtiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIHRleHQ6ICcjZmZmJywgbGluazogJyNmZmYnfSxcbiAgICAgIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcbiAgICAgIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAgICAgLy8gICB9XG4gICAgICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cbiAgICAgIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxuICAgICAgcGFsZXR0ZTogbnVsbCxcblxuICAgICAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXG4gICAgICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50Lmxhd2AgY2FuIGNoYW5nZSB0aGlzIHRvIGB0cnVlYCBpZiBpdCBkZXRlY3RzIHRoYXQgaXQgc2hvdWxkXG4gICAgICByZXZva2FibGU6IGZhbHNlLFxuXG4gICAgICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcbiAgICAgIGFuaW1hdGVSZXZva2FibGU6IHRydWUsXG5cbiAgICAgIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcbiAgICAgIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xuICAgICAgc2hvd0xpbms6IHRydWUsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXG4gICAgICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gYXV0b2Rpc21pc3MgYWZ0ZXIgc2V0IHRpbWVcbiAgICAgIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gICAgICBkaXNtaXNzT25XaW5kb3dDbGljazogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgICAgIGRpc21pc3NPbkxpbmtDbGljazogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBrZXlzIGFyZSBwcmVzc2VkLCAoIGFsbG93S2V5Q29kZSA9IDEzLCBkZW55S2V5Q29kZSA9IDI3IClcbiAgICAgIGRpc21pc3NPbktleVByZXNzOiBmYWxzZSxcblxuICAgICAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxuICAgICAgLy8gc2hvdWxkIGJlIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIChub3QgQ1NTIHNlbGVjdG9ycylcbiAgICAgIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0bicsICdjYy1saW5rJ10sIC8vIGFscmVhZHkgaW5jbHVkZXMgdGhlIHJldm9rZSBidXR0b24gYW5kIHRoZSBiYW5uZXIgaXRzZWxmXG5cbiAgICAgIC8vIFRoZSBhcHBsaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRlY2lkZSB3aGV0aGVyIHRoZSBwb3B1cCBzaG91bGQgb3Blbi5cbiAgICAgIC8vIFNldCB0aGlzIHRvIGZhbHNlIHRvIHByZXZlbnQgdGhpcyBmcm9tIGhhcHBlbmluZyBhbmQgdG8gYWxsb3cgeW91IHRvIGNvbnRyb2wgdGhlIGJlaGF2aW91ciB5b3Vyc2VsZlxuICAgICAgYXV0b09wZW46IHRydWUsXG5cbiAgICAgIC8vIEJ5IGRlZmF1bHQgdGhlIGNyZWF0ZWQgSFRNTCBpcyBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgKHdoaWNoIGRlZmF1bHRzIHRvIDxib2R5PikuIFlvdSBjYW4gcHJldmVudCB0aGlzIGJlaGF2aW91clxuICAgICAgLy8gYnkgc2V0dGluZyB0aGlzIHRvIGZhbHNlLCBidXQgaWYgeW91IGRvLCB5b3UgbXVzdCBhdHRhY2ggdGhlIGBlbGVtZW50YCB5b3Vyc2VsZiwgd2hpY2ggaXMgYSBwdWJsaWMgcHJvcGVydHkgb2YgdGhlIHBvcHVwIGluc3RhbmNlOlxuICAgICAgLy9cbiAgICAgIC8vICAgICBjb25zdCBpbnN0YW5jZSA9IGNvb2tpZWNvbnNlbnQuZmFjdG9yeShvcHRpb25zKVxuICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudClcbiAgICAgIC8vXG4gICAgICBhdXRvQXR0YWNoOiB0cnVlLFxuXHQgIFxuICAgICAgLy8gc2V0IHZhbHVlIGlmIGZsb2F0aW5nIGxheW91dCBzaG91bGQgYmUgZm9yY2VkIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgICAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAgICAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XG4gICAgICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gICAgICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICAgICAgd2hpdGVsaXN0UGFnZTogW10sXG4gICAgICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAgICAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAgICAgLy8gQmUgc3VyZSB0byB1c2UgdGhlIGNsYXNzZXMgYGNjLWJ0bmAgYW5kIGBjYy1hbGxvd2AsIGBjYy1kZW55YCBvciBgY2MtZGlzbWlzc2AuIFRoZXkgZW5hYmxlIHRoZSBhcHAgdG8gcmVnaXN0ZXIgY2xpY2tcbiAgICAgIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICAgICAgb3ZlcnJpZGVIVE1MOiBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gQ29va2llUG9wdXAoKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIH1cblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKSAvLyBhbHJlYWR5IHJlbmRlcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBvcHRpb25zIGJhY2sgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB1dGlsLmRlZXBFeHRlbmQoKHRoaXMub3B0aW9ucyA9IHt9KSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICAvLyBtZXJnZSBpbiB1c2VyIG9wdGlvbnNcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxuICAgICAgaWYgKGNoZWNrQ2FsbGJhY2tIb29rcy5jYWxsKHRoaXMpKSB7XG4gICAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICAvLyBhcHBseSBibGFja2xpc3QgLyB3aGl0ZWxpc3RcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmxhY2tsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy53aGl0ZWxpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICAgIH1cblxuICAgICAgLy8gdGhlIGZ1bGwgbWFya3VwIGVpdGhlciBjb250YWlucyB0aGUgd3JhcHBlciBvciBpdCBkb2VzIG5vdCAoZm9yIG11bHRpcGxlIGluc3RhbmNlcylcbiAgICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgZ2V0UG9wdXBDbGFzc2VzLmNhbGwodGhpcykuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgZ2V0UG9wdXBJbm5lck1hcmt1cC5jYWxsKHRoaXMpKVxuXG4gICAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxuICAgICAgY29uc3QgY3VzdG9tSFRNTCA9IHRoaXMub3B0aW9ucy5vdmVycmlkZUhUTUxcbiAgICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcbiAgICAgICAgY29va2llUG9wdXAgPSBjdXN0b21IVE1MXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXG4gICAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGFwcGVuZE1hcmt1cC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4nICsgY29va2llUG9wdXAgKyAnPC9kaXY+J1xuICAgICAgICApXG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJycgLy8gc2V0IGl0IHRvIHZpc2libGUgKGJlY2F1c2UgYXBwZW5kTWFya3VwIGhpZGVzIGl0KVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQgLy8gZ2V0IHRoZSBgZWxlbWVudGAgcmVmZXJlbmNlIGZyb20gdGhlIHdyYXBwZXJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBhcHBlbmRNYXJrdXAuY2FsbCh0aGlzLCBjb29raWVQb3B1cClcbiAgICAgIH1cblxuICAgICAgYXBwbHlBdXRvRGlzbWlzcy5jYWxsKHRoaXMpXG5cbiAgICAgIGFwcGx5UmV2b2tlQnV0dG9uLmNhbGwodGhpcylcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvT3Blbikge1xuICAgICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMub25CdXR0b25DbGljayAmJiB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKVxuICAgICAgICB0aGlzLm9uQnV0dG9uQ2xpY2sgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRpc21pc3NUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc21pc3NUaW1lb3V0KVxuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbldpbmRvd1Njcm9sbCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbClcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25XaW5kb3dDbGljaykge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25MaW5rQ2xpY2spIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcbiAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25Nb3VzZU1vdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVsZW1lbnQgJiYgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbFxuXG4gICAgICBpZiAodGhpcy5yZXZva2VCdG4gJiYgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnJldm9rZUJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucmV2b2tlQnRuKVxuICAgICAgfVxuICAgICAgdGhpcy5yZXZva2VCdG4gPSBudWxsXG5cbiAgICAgIHJlbW92ZUN1c3RvbVN0eWxlKHRoaXMub3B0aW9ucy5wYWxldHRlKVxuICAgICAgdGhpcy5vcHRpb25zID0gbnVsbFxuICAgIH1cblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cblxuICAgICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlSW4oKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJydcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblBvcHVwT3Blbi5jYWxsKHRoaXMpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oc2hvd1Jldm9rZSkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxuXG4gICAgICBpZiAodGhpcy5pc09wZW4oKSkge1xuICAgICAgICBpZiAoY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHRoaXMuZmFkZU91dCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG93UmV2b2tlICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblBvcHVwQ2xvc2UuY2FsbCh0aGlzKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5mYWRlSW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVyblxuXG4gICAgICAvLyBUaGlzIHNob3VsZCBhbHdheXMgYmUgY2FsbGVkIEFGVEVSIGZhZGVPdXQgKHdoaWNoIGlzIGdvdmVybmVkIGJ5IHRoZSAndHJhbnNpdGlvbmVuZCcgZXZlbnQpLlxuICAgICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAgIC8vIGhhcyBhIGNoYW5jZSB0byBydW4sIHRoZW4gd2UgcnVuIGl0IG91cnNlbHZlc1xuICAgICAgaWYgKHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICAgIGFmdGVyRmFkZU91dC5jYWxsKHRoaXMsIGVsKVxuICAgICAgfVxuXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYWRlSW5UaW1lb3V0ID0gMjAgLy8gKG1zKSBETyBOT1QgTUFLRSBUSElTIFZBTFVFIFNNQUxMRVIuIFNlZSBiZWxvd1xuXG4gICAgICAgIC8vIEFsdGhvdWdoIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSB2YWx1ZXMgbGVzcyB0aGFuIDIwbXMsIGl0IHNob3VsZCByZW1haW4gYWJvdmUgdGhpcyB2YWx1ZS5cbiAgICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgICAgLy8gSWYgdGhlIGNsYXNzIGlzIHJlbXZvZWQgYmVmb3JlIGEgcmVkcmF3IGNvdWxkIGhhcHBlbiwgdGhlbiB0aGUgZmFkZUluIGVmZmVjdCBXSUxMIE5PVCB3b3JrLCBhbmRcbiAgICAgICAgLy8gdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGZyb20gbm90aGluZy4gVGhlcmVmb3JlIHdlIE1VU1QgYWxsb3cgZW5vdWdoIHRpbWUgZm9yIHRoZSBicm93c2VyIHRvIGRvXG4gICAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgIGFmdGVyRmFkZUluLmJpbmQodGhpcywgZWwpLFxuICAgICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5mYWRlT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxuXG4gICAgICBpZiAoIWNjLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm5cblxuICAgICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpXG4gICAgICAgIGFmdGVyRmFkZUluLmJpbmQodGhpcywgZWwpXG4gICAgICB9XG5cbiAgICAgIGlmICghZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9ICcnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IGFmdGVyRmFkZU91dC5iaW5kKHRoaXMsIGVsKVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGNjLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICcnICYmXG4gICAgICAgIChjYy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcbiAgICAgIClcbiAgICB9XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUudG9nZ2xlUmV2b2tlQnV0dG9uID0gZnVuY3Rpb24oc2hvdykge1xuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnXG4gICAgfVxuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLnJldm9rZUNob2ljZSA9IGZ1bmN0aW9uKHByZXZlbnRPcGVuKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG5cbiAgICAgIHRoaXMub3B0aW9ucy5vblJldm9rZUNob2ljZS5jYWxsKHRoaXMpXG5cbiAgICAgIGlmICghcHJldmVudE9wZW4pIHtcbiAgICAgICAgdGhpcy5hdXRvT3BlbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXG4gICAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5oYXNBbnN3ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0byBhbGwgb2YgdGhlIGNhdGVnb3JpZXNcbiAgICAgKiBAcmV0dXJuIHsgYXJyYXk8Ym9vbGVhbj4gfSAtIHRydWUgaWYgY29uc2VudCBoYXMgYmVlbiBnaXZlblxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5oYXNDb25zZW50ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkubWFwKCBzdGF0dXMgPT4gc3RhdHVzID09PSBjYy5zdGF0dXMuYWxsb3cgfHwgc3RhdHVzID09PSBjYy5zdGF0dXMuZGlzbWlzcyApXG4gICAgfVxuXG4gICAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5hdXRvT3BlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXG4gICAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMub3BlbigpXG4gICAgICB9IGVsc2UgaWYgKGhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cbiAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5zZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qge25hbWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlfSA9IHRoaXMub3B0aW9ucy5jb29raWVcblxuICAgICAgLy8gaWYgYHN0YXR1c2AgaXMgdmFsaWRcbiAgICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2YodXRpbC5nZXRDb29raWUoY29va2llTmFtZSkpID49IDBcbiAgICAgICAgICB1dGlsLnNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5vblN0YXR1c0NoYW5nZS5jYWxsKHRoaXMsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCBjYy5jYXRlZ29yeVsgY2F0ZWdvcnkgXSApIClcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGFyZ3VtZW50c1sgMCBdICkgKVxuICAgICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgIGFyZ3VtZW50cy5mb3JFYWNoKCAoIGNhdGVnb3J5U3RhdHVzLCBpbmRleCApID0+IHtcbiAgICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYy5jYXRlZ29yeVxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5nZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5TmFtZSA9PiB1dGlsLmdldENvb2tpZSh0aGlzLm9wdGlvbnMuY29va2llLm5hbWUrJ18nK2NhdGVnb3J5TmFtZSkgKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmNsZWFyU3RhdHVzZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgZG9tYWluLCBwYXRoIH0gPSB0aGlzLm9wdGlvbnMuY29va2llXG4gICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgICAgdXRpbC5zZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnlOYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAgLy8gVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nXG4gICAgZnVuY3Rpb24gYWZ0ZXJGYWRlSW4oZWwpIHtcbiAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBudWxsXG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYy1pbnZpc2libGUnKVxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIG9uICd0cmFuc2l0aW9uZW5kJyAob25seSBvbiB0aGUgdHJhbnNpdGlvbiBvZiB0aGUgZmFkZU91dCkuIFRoYXQncyBiZWNhdXNlIGFmdGVyIHdlJ3ZlIGZhZGVkIG91dCwgd2UgbmVlZCB0b1xuICAgIC8vIHNldCB0aGUgZGlzcGxheSB0byAnbm9uZScgKHNvIHRoZXJlIGFyZW4ndCBhbm5veWluZyBpbnZpc2libGUgcG9wdXBzIGFsbCBvdmVyIHRoZSBwYWdlKS4gSWYgZm9yIHdoZW5ldmVyIHJlYXNvbiB0aGlzIGZ1bmN0aW9uXG4gICAgLy8gaXMgbm90IGNhbGxlZCAobGFjayBvZiBzdXBwb3J0KSwgdGhlIG9wZW4vY2xvc2UgbWVjaGFuaXNtIHdpbGwgc3RpbGwgd29yay5cbiAgICBmdW5jdGlvbiBhZnRlckZhZGVPdXQoZWwpIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcbiAgICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxuICAgIH1cblxuICAgIC8vIHRoaXMgZnVuY3Rpb24gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBob29rIGFuZCByZXR1cm5zIHRydWUgKGlmIG5lZWRlZCkgYW5kIHJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgZnVuY3Rpb24gY2hlY2tDYWxsYmFja0hvb2tzKCkge1xuICAgICAgY29uc3QgY29tcGxldGUgPSB0aGlzLm9wdGlvbnMub25Jbml0aWFsaXplLmJpbmQodGhpcylcblxuICAgICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmRlbnkpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LKSB7XG4gICAgICAgIGNvbXBsZXRlKGNjLnN0YXR1cy5hbGxvdylcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KVxuICAgICAgY29uc3Qgc3RhdHVzZXNWYWx1ZXMgPSB0aGlzLmdldFN0YXR1c2VzKClcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBzdGF0dXNlc1ZhbHVlcy5tYXAoICggc3RhdHVzLCBpbmRleCApID0+ICggeyBbY2F0ZWdvcmllc1tpbmRleF1dOiBpc1ZhbGlkU3RhdHVzKCBzdGF0dXMgKSB9ICkgKVxuICAgICAgY29uc3QgaGFzTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtYXRjaCA9PiBtYXRjaFtPYmplY3Qua2V5cyhtYXRjaClbMF1dICkubGVuZ3RoID4gMFxuICAgICAgc3RhdHVzZXNWYWx1ZXMuZm9yRWFjaCggKCBzdGF0dXMsIGluZGV4ICkgPT4gY2MuY2F0ZWdvcnlbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSA9IHN0YXR1cyA/IHN0YXR1cyA6IGNjLmNhdGVnb3J5WyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gKVxuICAgICAgY29tcGxldGUoIGhhc01hdGNoZXMgPyBzdGF0dXNlc1ZhbHVlcy5tYXAoICggc3RhdHVzLCBpbmRleCApID0+ICggeyBbY2F0ZWdvcmllc1tpbmRleF1dOiBzdGF0dXMgfSApICkgIDogdW5kZWZpbmVkIClcblxuICAgICAgcmV0dXJuIGhhc01hdGNoZXNcbiAgICB9XG5cbiAgICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UG9wdXBDbGFzc2VzKCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcbiAgICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgICAgOiAnZmxvYXRpbmcnXG5cbiAgICAgIGlmICh1dGlsLmlzTW9iaWxlKCkgJiYgb3B0cy5tb2JpbGVGb3JjZUZsb2F0KSB7XG4gICAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAgICdjYy10eXBlLScgKyBvcHRzLnR5cGUsIC8vIGFkZCB0aGUgY29tcGxpYW5jZSB0eXBlXG4gICAgICAgICdjYy10aGVtZS0nICsgb3B0cy50aGVtZSwgLy8gYWRkIHRoZSB0aGVtZVxuICAgICAgXVxuXG4gICAgICBpZiAob3B0cy5zdGF0aWMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKVxuICAgICAgfVxuXG4gICAgICBjbGFzc2VzLnB1c2guYXBwbHkoY2xhc3NlcywgZ2V0UG9zaXRpb25DbGFzc2VzLmNhbGwodGhpcykpXG5cbiAgICAgIC8vIHdlIG9ubHkgYWRkIGV4dHJhIHN0eWxlcyBpZiBgcGFsZXR0ZWAgaGFzIGJlZW4gc2V0IHRvIGEgdmFsaWQgdmFsdWVcbiAgICAgIGF0dGFjaEN1c3RvbVBhbGV0dGUuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMucGFsZXR0ZSlcblxuICAgICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzZXNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkID0ge31cbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcblxuICAgICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXG4gICAgICBpZiAoIW9wdHMuc2hvd0xpbmspIHtcbiAgICAgICAgb3B0cy5lbGVtZW50cy5saW5rID0gJycgXG4gICAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaCggcHJvcCA9PiB7XG4gICAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoXG4gICAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXVxuICAgICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIC8vIGNoZWNrcyBpZiB0aGUgdHlwZSBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gaW5mbyBpZiBpdCdzIG5vdFxuICAgICAgbGV0IGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlW29wdHMudHlwZV1cbiAgICAgIGlmICghY29tcGxpYW5jZVR5cGUpIHtcbiAgICAgICAgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2UuaW5mb1xuICAgICAgfVxuXG4gICAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXG4gICAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoY29tcGxpYW5jZVR5cGUsIGZ1bmN0aW9uKFxuICAgICAgICBuYW1lXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFtuYW1lXVxuICAgICAgfSlcblxuICAgICAgLy8gY2hlY2tzIGlmIHRoZSBsYXlvdXQgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGJhc2ljIGlmIGl0J3Mgbm90XG4gICAgICBsZXQgbGF5b3V0ID0gb3B0cy5sYXlvdXRzW29wdHMubGF5b3V0XVxuICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1dGlsLmludGVycG9sYXRlU3RyaW5nKGxheW91dCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFttYXRjaF1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kTWFya3VwKG1hcmt1cCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGNvbnN0IGNvbnQgPVxuICAgICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxuICAgICAgICAgID8gb3B0cy5jb250YWluZXJcbiAgICAgICAgICA6IGRvY3VtZW50LmJvZHlcblxuICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFxuXG4gICAgICBjb25zdCBlbCA9IGRpdi5jaGlsZHJlblswXVxuXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcbiAgICAgIH1cblxuICAgICAgLy8gc2F2ZSByZWYgdG8gdGhlIGZ1bmN0aW9uIGhhbmRsZSBzbyB3ZSBjYW4gdW5iaW5kIGl0IGxhdGVyXG4gICAgICB0aGlzLm9uQnV0dG9uQ2xpY2sgPSBoYW5kbGVCdXR0b25DbGljay5iaW5kKHRoaXMpXG5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKVxuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2MuY2F0ZWdvcnlbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnYWxsb3cnIDogJ2RlbnknXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgaWYgKCB0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICApIHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgaWYgKG9wdHMuYXV0b0F0dGFjaCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGVsKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm8gY29udGFpbmVyIHRvIGF0dGFjaCB0b28uIE1ha2Ugc3VyZSB0aGUgRE9NIGhhcyBsb2FkZWQuIElzIHlvdXIgc2NyaXB0IGxvYWRlZCBqdXN0IGJlZm9yZSB0aGUgYDwvYm9keT5gIHRhZz9cIiApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxuICAgICAgY29uc3QgYnRuID0gdXRpbC50cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0XG4gICAgICBcbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1zYXZlJyApKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxuICAgICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxiY2MtKCcgKyBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLm1hcChzdHIgPT4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgICAgKVxuICAgICAgICBjb25zdCBtYXRjaCA9IChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHx8IGZhbHNlXG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMobWF0Y2gpXG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWNsb3NlJyApKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XG4gICAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJIG1pZ2h0IGNoYW5nZSB0aGlzIGZ1bmN0aW9uIHRvIHVzZSBpbmxpbmUgc3R5bGVzLiBJIG9yaWdpbmFsbHkgY2hvc2UgYSBzdHlsZXNoZWV0IGJlY2F1c2UgSSBjb3VsZCBzZWxlY3QgbWFueSBlbGVtZW50cyB3aXRoIGFcbiAgICAvLyBzaW5nbGUgcnVsZSAoc29tZXRoaW5nIHRoYXQgaGFwcGVuZWQgYSBsb3QpLCB0aGUgYXBwcyBoYXMgY2hhbmdlZCBzbGlnaHRseSBub3cgdGhvdWdoLCBzbyBpbmxpbmUgc3R5bGVzIG1pZ2h0IGJlIG1vcmUgYXBwbGljYWJsZS5cbiAgICBmdW5jdGlvbiBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpXG4gICAgICBjb25zdCBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaFxuICAgICAgY29uc3QgaXNWYWxpZCA9IHV0aWwuaXNQbGFpbk9iamVjdChwYWxldHRlKVxuXG4gICAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsXG5cbiAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIGFkZEN1c3RvbVN0eWxlKGhhc2gsIHBhbGV0dGUsICcuJyArIHNlbGVjdG9yKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDdXN0b21TdHlsZShoYXNoLCBwYWxldHRlLCBwcmVmaXgpIHtcbiAgICAgIC8vIG9ubHkgYWRkIHRoaXMgaWYgYSBzdHlsZSBsaWtlIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmIChjYy5jdXN0b21TdHlsZXNbaGFzaF0pIHtcbiAgICAgICAgLy8gY3VzdG9tIHN0eWxlIGFscmVhZHkgZXhpc3RzLCBzbyBpbmNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudFxuICAgICAgICArK2NjLmN1c3RvbVN0eWxlc1toYXNoXS5yZWZlcmVuY2VzXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xvclN0eWxlcyA9IHt9XG4gICAgICBjb25zdCB7IHBvcHVwLCBidXR0b24sIGhpZ2hsaWdodCwgc2F2ZUJ1dHRvbiB9ID0gcGFsZXR0ZVxuXG4gICAgICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICBpZiAocG9wdXApIHtcbiAgICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dFxuICAgICAgICAgID8gcG9wdXAudGV4dFxuICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKVxuICAgICAgICBwb3B1cC5saW5rID0gcG9wdXAubGluayA/IHBvcHVwLmxpbmsgOiBwb3B1cC50ZXh0XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXVxuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF1cbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdXG4gICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6YWN0aXZlLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6dmlzaXRlZCdcbiAgICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXVxuXG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHRcbiAgICAgICAgICAgID8gYnV0dG9uLnRleHRcbiAgICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChidXR0b24uYmFja2dyb3VuZClcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10gPSBbXG4gICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBidXR0b24uYm9yZGVyLFxuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBidXR0b24uYmFja2dyb3VuZFxuICAgICAgICAgIF1cblxuICAgICAgICAgIGlmIChidXR0b24ucGFkZGluZykge1xuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10ucHVzaCgncGFkZGluZzogJyArIGJ1dHRvbi5wYWRkaW5nKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChidXR0b24uYmFja2dyb3VuZCAhPSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICAgICAgcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ1xuICAgICAgICAgICAgXSA9IFtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgK1xuICAgICAgICAgICAgICAgIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvdXIoYnV0dG9uLmJhY2tncm91bmQpKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpXG4gICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlclxuICAgICAgICAgICAgICA/IGhpZ2hsaWdodC5ib3JkZXJcbiAgICAgICAgICAgICAgOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2V0cyBoaWdobGlnaHQgdGV4dCBjb2xvciB0byBwb3B1cCB0ZXh0LiBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgYXJlIHRyYW5zcGFyZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBzYXZlQnV0dG9uICkge1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0bi5jYy1zYXZlJ10gPSBbXG4gICAgICAgICAgICAnY29sb3I6ICcgKyBzYXZlQnV0dG9uLnRleHQsXG4gICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHNhdmVCdXR0b24uYmFja2dyb3VuZFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXG4gICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG5cbiAgICAgIC8vIGN1c3RvbSBzdHlsZSBkb2Vzbid0IGV4aXN0LCBzbyB3ZSBjcmVhdGUgaXRcbiAgICAgIGNjLmN1c3RvbVN0eWxlc1toYXNoXSA9IHtcbiAgICAgICAgcmVmZXJlbmNlczogMSxcbiAgICAgICAgZWxlbWVudDogc3R5bGUuc2hlZXRcbiAgICAgIH1cblxuICAgICAgbGV0IHJ1bGVJbmRleCA9IC0xXG4gICAgICBmb3IgKGxldCBwcm9wIGluIGNvbG9yU3R5bGVzKSB7XG4gICAgICAgIGlmIChjb2xvclN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICAgICBwcm9wICsgJ3snICsgY29sb3JTdHlsZXNbcHJvcF0uam9pbignJykgKyAnfScsXG4gICAgICAgICAgICArK3J1bGVJbmRleFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdmVyQ29sb3VyKGhleCkge1xuICAgICAgaGV4ID0gdXRpbC5ub3JtYWxpc2VIZXgoaGV4KVxuICAgICAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcbiAgICAgIGlmIChoZXggPT0gJzAwMDAwMCcpIHtcbiAgICAgICAgcmV0dXJuICcjMjIyJ1xuICAgICAgfVxuICAgICAgcmV0dXJuIHV0aWwuZ2V0THVtaW5hbmNlKGhleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDdXN0b21TdHlsZShwYWxldHRlKSB7XG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpXG4gICAgICAgIGNvbnN0IGN1c3RvbVN0eWxlID0gY2MuY3VzdG9tU3R5bGVzW2hhc2hdXG4gICAgICAgIGlmIChjdXN0b21TdHlsZSAmJiAhLS1jdXN0b21TdHlsZS5yZWZlcmVuY2VzKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGVOb2RlID0gY3VzdG9tU3R5bGUuZWxlbWVudC5vd25lck5vZGVcbiAgICAgICAgICBpZiAoc3R5bGVOb2RlICYmIHN0eWxlTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBzdHlsZU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZU5vZGUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGNjLmN1c3RvbVN0eWxlc1toYXNoXSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEV2ZW50UGF0aCggZXZlbnQgKSB7XG4gICAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICAgIHdoaWxlICggZWxlbWVudCApIHtcbiAgICAgICAgICBhcnIucHVzaCggZWxlbWVudCApXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJcbiAgICAgIH0pKFtdLGV2ZW50LnRhcmdldCApXG4gICAgICBpZiAoICFwYXRoICkge1xuICAgICAgICBjb25zb2xlLndhcm4oIFwiJy5wYXRoJyAmICcuY29tcG9zZWRQYXRoJyBmYWlsZWQgdG8gZ2VuZXJhdGUgYW4gZXZlbnQgcGF0aC5cIiApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIHBhdGhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUF1dG9EaXNtaXNzKCkge1xuICAgICAgY29uc3Qgc2V0U3RhdHVzZXMgPSB0aGlzLnNldFN0YXR1c2VzLmJpbmQodGhpcylcbiAgICAgIGNvbnN0IGNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXG4gICAgICBjb25zdCB7XG4gICAgICAgIGVuYWJsZWQsXG4gICAgICAgIGRpc21pc3NPblRpbWVvdXQgIDogZGVsYXksXG4gICAgICAgIGRpc21pc3NPblNjcm9sbCAgIDpzY3JvbGxSYW5nZSxcbiAgICAgICAgZGlzbWlzc09uTGlua0NsaWNrLFxuICAgICAgICBkaXNtaXNzT25XaW5kb3dDbGljayxcbiAgICAgICAgZGlzbWlzc09uS2V5UHJlc3MsXG5cbiAgICAgIH0gPSB0aGlzLm9wdGlvbnNcblxuICAgICAgaWYgKCBlbmFibGVkICkge1xuICAgICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcylcbiAgICAgICAgICAgIGNsb3NlKHRydWUpXG4gICAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcbiAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IE1hdGguZmxvb3Ioc2Nyb2xsUmFuZ2UpKSB7XG4gICAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKVxuICAgICAgICAgICAgICBjbG9zZSh0cnVlKVxuXG4gICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbldpbmRvd0NsaWNrKSB7XG4gICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgIGlmICggIWdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbWVudCA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbS5zb21lKCBpZ25vcmVkQ2xpY2sgPT5cbiAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggaWdub3JlZENsaWNrIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKVxuICAgICAgICAgICAgICBjbG9zZSh0cnVlKVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xuICAgICAgICAgIHRoaXMub25MaW5rQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgaWYgKCBnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW0gPT4gdHlwZW9mIGVsZW0udGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbS50YWdOYW1lID09PSAnQScgKSApIHtcbiAgICAgICAgICAgICAgc2V0U3RhdHVzZXMoIGNjLnN0YXR1cy5kaXNtaXNzIClcbiAgICAgICAgICAgICAgY2xvc2UoIHRydWUgKVxuICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgICB9IGVsc2UgaWYgKCBkaXNtaXNzT25LZXlQcmVzcyApIHtcbiAgICAgICAgICAgIHRoaXMub25LZXlQcmVzcyA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudFxuICAgICAgICAgICAgICBpZiAoIGtleUNvZGUgPT09IDEzICkge1xuICAgICAgICAgICAgICAgIHNldFN0YXR1c2VzKCBjYy5zdGF0dXMuYWxsb3cgKVxuICAgICAgICAgICAgICAgIGNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgga2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICBzZXRTdGF0dXNlcyggY2Muc3RhdHVzLmRpc21pc3MgKVxuICAgICAgICAgICAgICAgIGNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5UmV2b2tlQnV0dG9uKCkge1xuICAgICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJykgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWVcbiAgICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlXG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBnZXRQb3NpdGlvbkNsYXNzZXMuY2FsbCh0aGlzKVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLXRoZW1lLScrdGhpcy5vcHRpb25zLnRoZW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV2b2tlQnRuID0gdGhpcy5vcHRpb25zLnJldm9rZUJ0blxuICAgICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3BvbGljeX19JywgdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5KVxuXG4gICAgICAgIHRoaXMucmV2b2tlQnRuID0gYXBwZW5kTWFya3VwLmNhbGwodGhpcywgcmV2b2tlQnRuKVxuXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gdXRpbC50aHJvdHRsZShmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgY29uc3QgbWluWSA9IDIwXG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjBcblxuICAgICAgICAgICAgaWYgKCAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy10b3AnICkgJiYgZXZ0LmNsaWVudFkgPCBtaW5ZICkgfHxcbiAgICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xuICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoICFhY3RpdmUgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDIwMClcblxuICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZVxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBDb29raWVQb3B1cFxuICB9KSgpXG5cbiAgY2MuTG9jYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxuICAgIC8vIFdoZW4gdXNpbmcgYSBzZXJ2aWNlLCBpdCBjb3VsZCBlaXRoZXIgcmV0dXJuIGEgZGF0YSBzdHJ1Y3R1cmUgaW4gcGxhaW4gdGV4dCAobGlrZSBhIEpTT04gb2JqZWN0KSBvciBhbiBleGVjdXRhYmxlIHNjcmlwdFxuICAgIC8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbiAgICAvLyBXaGVuIHRoZSBzZXJ2aWNlIHVzZXMgYSBzY3JpcHQsIHRoZSBjaGFuY2VzIGFyZSB0aGF0IHlvdSdsbCBoYXZlIHRvIHVzZSB0aGUgc2NyaXB0IHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cy4gSW4gdGhlc2VcbiAgICAvLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXG4gICAgLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdGltZW91dCBpcyA1IHNlY29uZHMuIFRoaXMgaXMgbWFpbmx5IG5lZWRlZCB0byBjYXRjaCBKU09OUCByZXF1ZXN0cyB0aGF0IGVycm9yLlxuICAgICAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxuICAgICAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG5cbiAgICAgIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXG4gICAgICBzZXJ2aWNlczogW1xuICAgICAgICAnaXBpbmZvJ1xuXG4gICAgICAgIC8qXG5cbiAgICAgICAgLy8gJ2lwaW5mb2RiJyByZXF1aXJlcyBzb21lIG9wdGlvbnMsIHNvIHdlIGRlZmluZSBpdCB1c2luZyBhbiBvYmplY3RcbiAgICAgICAgLy8gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc2VydmljZVxuXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaXBpbmZvZGInLFxuICAgICAgICAgIGludGVycG9sYXRlVXJsOiB7XG4gICAgICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XG5cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ31cbiAgICAgICAgfSxcblxuICAgICAgICAqL1xuICAgICAgXSxcblxuICAgICAgc2VydmljZURlZmluaXRpb25zOiB7XG4gICAgICAgIGlwaW5mbzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICAgICAgdXJsOiAnLy9pcGluZm8uaW8nLFxuICAgICAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXG4gICAgICAgICAgICAgICAgICA/IHRvRXJyb3IoanNvbilcbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgICAgIGlwaW5mb2RiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcih7ZXJyb3I6IGpzb24uc3RhdHVzTWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlIHdoaWNoIGRlZmluZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LiBPbmNlIGxvYWRlZCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSwgc28gaXQgbXVzdCBiZSBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgIGlmICghd2luZG93Lmdlb2lwMikge1xuICAgICAgICAgICAgICAgIGRvbmUoXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdC4gVGhlIGRvd25sb2FkZWQgc2NyaXB0IHNob3VsZCBoYXZlIGV4cG9ydGVkIGBnZW9pcDJgIHRvIHRoZSBnbG9iYWwgc2NvcGUnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGxvY2F0aW9uLmNvdW50cnkuaXNvX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxuICAgICAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIExvY2F0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFNldCB1cCBvcHRpb25zXG4gICAgICB1dGlsLmRlZXBFeHRlbmQoKHRoaXMub3B0aW9ucyA9IHt9KSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMSAvLyB0aGUgaW5kZXggKGluIG9wdGlvbnMpIG9mIHRoZSBzZXJ2aWNlIHdlJ3JlIGN1cnJlbnRseSB1c2luZ1xuICAgIH1cblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXROZXh0U2VydmljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNlcnZpY2VcblxuICAgICAgZG8ge1xuICAgICAgICBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoKyt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpXG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4IDwgdGhpcy5vcHRpb25zLnNlcnZpY2VzLmxlbmd0aCAmJlxuICAgICAgICAhc2VydmljZVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gc2VydmljZVxuICAgIH1cblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRTZXJ2aWNlQnlJZHggPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgIC8vIFRoaXMgY2FuIGVpdGhlciBiZSB0aGUgbmFtZSBvZiBhIGRlZmF1bHQgbG9jYXRpb25TZXJ2aWNlLCBvciBhIGZ1bmN0aW9uLlxuICAgICAgY29uc3Qgc2VydmljZU9wdGlvbiA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1tpZHhdXG5cbiAgICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNPcHRzID0gc2VydmljZU9wdGlvbigpXG4gICAgICAgIHJldHVybiBkeW5hbWljT3B0cy5uYW1lID8gXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgZHluYW1pY09wdHMsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zWyBkeW5hbWljT3B0cy5uYW1lIF0oIGR5bmFtaWNPcHRzIClcbiAgICAgICAgICApIDogZHluYW1pY09wdHNcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKClcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIGFzc3VtZSB7bmFtZTogJ2lwaW5mbycsIC4uLm90aGVyT3B0aW9uc31cbiAgICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxuICAgICAgICAgIHNlcnZpY2VPcHRpb25cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cbiAgICAvLyBJZiB0aGUgc2VydmljZSBmYWlscywgYHJ1bk5leHRTZXJ2aWNlT25FcnJvcmAgd2lsbCBjb250aW51ZSB0cnlpbmcgZWFjaCBzZXJ2aWNlIHVudGlsIGFsbCBmYWlsLCBvciBvbmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2NhdGUgPSBmdW5jdGlvbihjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcblxuICAgICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbGxiYWNrQ29tcGxldGUgPSBjb21wbGV0ZVxuICAgICAgdGhpcy5jYWxsYmFja0Vycm9yID0gZXJyb3JcblxuICAgICAgdGhpcy5ydW5TZXJ2aWNlKHNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0dXBVcmwgPSBmdW5jdGlvbihzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlT3B0cyA9IHRoaXMuZ2V0Q3VycmVudFNlcnZpY2VPcHRzKClcbiAgICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xuICAgICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpXG4gICAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0ZW1wTmFtZVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyByZXF1aXJlcyBhIGBzZXJ2aWNlYCBvYmplY3QgdGhhdCBkZWZpbmVzIGF0IGxlYXN0IGEgYHVybGAgYW5kIGBjYWxsYmFja2BcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuU2VydmljZSA9IGZ1bmN0aW9uKHNlcnZpY2UsIGNvbXBsZXRlKSB7XG4gICAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBjYWxsIGVpdGhlciBgZ2V0U2NyaXB0YCBvciBgbWFrZUFzeW5jUmVxdWVzdGAgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHJlc291cmNlXG4gICAgICBjb25zdCByZXF1ZXN0RnVuY3Rpb24gPSBzZXJ2aWNlLmlzU2NyaXB0ID8gZ2V0U2NyaXB0IDogbWFrZUFzeW5jUmVxdWVzdFxuXG4gICAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxuICAgICAgcmVxdWVzdEZ1bmN0aW9uKFxuICAgICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxuICAgICAgICB4aHIgPT4ge1xuICAgICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxuICAgICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJydcblxuICAgICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cbiAgICAgICAgICAvLyBpZiB0aGUgc2NyaXB0IGlzIEpTT05QLCB0aGVuIGEgdGltZSBkZWZpbmVkIGZ1bmN0aW9uIGBjYWxsYmFja197RGF0ZS5ub3d9YCBoYXMgYWxyZWFkeVxuICAgICAgICAgIC8vIGJlZW4gY2FsbGVkIChhcyB0aGUgSlNPTlAgY2FsbGJhY2spLiBUaGlzIGNhbGxiYWNrIHNldHMgdGhlIF9fSlNPTlBfREFUQSBwcm9wZXJ0eVxuICAgICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0gc2VydmljZS5fX0pTT05QX0RBVEFcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLl9fSlNPTlBfREFUQVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNhbGwgdGhlIHNlcnZpY2UgY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2UgdGV4dCAoc28gaXQgY2FuIHBhcnNlIHRoZSByZXNwb25zZSlcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2VDYWxsYmFjay5jYWxsKHRoaXMsIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQpXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMub3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBzZXJ2aWNlLmRhdGEsXG4gICAgICAgIHNlcnZpY2UuaGVhZGVyc1xuICAgICAgKVxuXG4gICAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXG4gICAgfVxuXG4gICAgLy8gVGhlIHNlcnZpY2UgcmVxdWVzdCBoYXMgcnVuIChhbmQgcG9zc2libHkgaGFzIGEgYHJlc3BvbnNlVGV4dGApIFtubyBgcmVzcG9uc2VUZXh0YCBpZiBgaXNTY3JpcHRgXVxuICAgIC8vIFdlIG5lZWQgdG8gcnVuIGl0cyBjYWxsYmFjayB3aGljaCBkZXRlcm1pbmVzIGlmIGl0cyBzdWNjZXNzZnVsIG9yIG5vdFxuICAgIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5TZXJ2aWNlQ2FsbGJhY2sgPSBmdW5jdGlvbihcbiAgICAgIGNvbXBsZXRlLFxuICAgICAgc2VydmljZSxcbiAgICAgIHJlc3BvbnNlVGV4dFxuICAgICkge1xuICAgICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXG4gICAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcbiAgICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXG4gICAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIGFzeW5jUmVzdWx0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBmdW5jdGlvbiBgc2VydmljZS5jYWxsYmFja2Agd2lsbCBlaXRoZXIgZXh0cmFjdCBhIGNvdW50cnkgY29kZSBmcm9tIGByZXNwb25zZVRleHRgIGFuZCByZXR1cm4gaXQgKGluIGByZXN1bHRgKVxuICAgICAgLy8gb3IgKGlmIGl0IGhhcyB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMpIGl0IHdpbGwgY2FsbCBhIGBkb25lYCBjYWxsYmFjayB3aXRoIHRoZSBjb3VudHJ5IGNvZGUgd2hlbiBpdCBpcyByZWFkeVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VydmljZS5jYWxsYmFjayhzZXJ2aWNlUmVzdWx0SGFuZGxlciwgcmVzcG9uc2VUZXh0KVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIHJlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGNhbGxlZCB3aXRoIHRoZSBgcmVzdWx0YCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYCByZWdhcmRsZXNzIG9mIGhvdyBpdCBwcm92aWRlZCB0aGF0IHJlc3VsdCAoc3luYyBvciBhc3luYykuXG4gICAgLy8gYHJlc3VsdGAgd2lsbCBiZSB3aGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYC4gQSBzZXJ2aWNlIGNhbGxiYWNrIHNob3VsZCBwcm92aWRlIGFuIG9iamVjdCB3aXRoIGRhdGFcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUub25TZXJ2aWNlUmVzdWx0ID0gZnVuY3Rpb24oY29tcGxldGUsIHJlc3VsdCkge1xuICAgICAgLy8gY29udmVydCByZXN1bHQgdG8gbm9kZWpzIHN0eWxlIGFzeW5jIGNhbGxiYWNrXG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpKSB7XG4gICAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgcmVzdWx0LCBudWxsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgYGVycmAgaXMgc2V0LCB0aGUgbmV4dCBzZXJ2aWNlIGhhbmRsZXIgaXMgY2FsbGVkXG4gICAgLy8gaWYgYGVycmAgaXMgbnVsbCwgdGhlIGBvbkNvbXBsZXRlYCBoYW5kbGVyIGlzIGNhbGxlZCB3aXRoIGBkYXRhYFxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5OZXh0U2VydmljZU9uRXJyb3IgPSBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5sb2dFcnJvcihlcnIpXG5cbiAgICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcblxuICAgICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrRXJyb3IsXG4gICAgICAgICAgICBuZXcgRXJyb3IoJ0FsbCBzZXJ2aWNlcyBmYWlsZWQnKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbCh0aGlzLCB0aGlzLmNhbGxiYWNrQ29tcGxldGUsIGRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmdldEN1cnJlbnRTZXJ2aWNlT3B0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW3RoaXMuY3VycmVudFNlcnZpY2VJbmRleF1cblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdmFsKClcbiAgICAgIH1lbHNlIGlmICh1dGlsLmlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgICByZXR1cm4gdmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmNvbXBsZXRlU2VydmljZSA9IGZ1bmN0aW9uKGZuLCBkYXRhKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMVxuXG4gICAgICBmbiAmJiBmbihkYXRhKVxuICAgIH1cblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2dFcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jdXJyZW50U2VydmljZUluZGV4XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoaWR4KVxuXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdUaGUgc2VydmljZVsnICtcbiAgICAgICAgICBpZHggK1xuICAgICAgICAgICddICgnICtcbiAgICAgICAgICBzZXJ2aWNlLnVybCArXG4gICAgICAgICAgJykgcmVzcG9uZGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcicsXG4gICAgICAgIGVyclxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNjcmlwdCh1cmwsIGNhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgICBsZXQgdGltZW91dElkeFxuICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAgIHMudHlwZSA9ICd0ZXh0LycgKyAodXJsLnR5cGUgfHwgJ2phdmFzY3JpcHQnKVxuICAgICAgcy5zcmMgPSB1cmwuc3JjIHx8IHVybFxuICAgICAgcy5hc3luYyA9IGZhbHNlXG5cbiAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHMucmVhZHlTdGF0ZVxuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWR4KVxuXG4gICAgICAgIGlmICghY2FsbGJhY2suZG9uZSAmJiAoIXN0YXRlIHx8IC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc3RhdGUpKSkge1xuICAgICAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlXG4gICAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKVxuXG4gICAgICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xuICAgICAgLy8gb25lIHdheSBpcyB0byB1c2UgYSB0aW1lb3V0XG4gICAgICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWVcbiAgICAgICAgY2FsbGJhY2soKVxuICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbFxuICAgICAgfSwgdGltZW91dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlQXN5bmNSZXF1ZXN0KFxuICAgICAgdXJsLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIHRpbWVvdXQsXG4gICAgICBwb3N0RGF0YSxcbiAgICAgIHJlcXVlc3RIZWFkZXJzXG4gICAgKSB7XG4gICAgICBjb25zdCB4aHIgPSBuZXcgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuQWN0aXZlWE9iamVjdCkoXG4gICAgICAgICdNU1hNTDIuWE1MSFRUUC4zLjAnXG4gICAgICApXG5cbiAgICAgIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSlcblxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpXG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgICAgICBzcGxpdFswXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyksXG4gICAgICAgICAgICBzcGxpdFsxXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoeGhyKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZChwb3N0RGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0Vycm9yKG9iaikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXJyb3IgWycgKyAob2JqLmNvZGUgfHwgJ1VOS05PV04nKSArICddOiAnICsgb2JqLmVycm9yKVxuICAgIH1cblxuICAgIHJldHVybiBMb2NhdGlvblxuICB9KSgpXG5cbiAgY2MuTGF3ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gICAgICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXG4gICAgICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgICAgIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBlbmZvcmNlIHNvbWUgdmVyc2lvbiBvZiBhIGNvb2tpZSBsYXdcbiAgICAgIGhhc0xhdzogW1xuICAgICAgICAnQVQnLFxuICAgICAgICAnQkUnLFxuICAgICAgICAnQkcnLFxuICAgICAgICAnSFInLFxuICAgICAgICAnQ1onLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRkknLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnRUwnLFxuICAgICAgICAnSFUnLFxuICAgICAgICAnSUUnLFxuICAgICAgICAnSVQnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTFUnLFxuICAgICAgICAnTVQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUEwnLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnU0snLFxuICAgICAgICAnRVMnLFxuICAgICAgICAnU0UnLFxuICAgICAgICAnR0InLFxuICAgICAgICAnVUsnLFxuICAgICAgICAnR1InLFxuICAgICAgICAnRVUnLFxuICAgICAgICAnUk8nXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gICAgICByZXZva2FibGU6IFtcbiAgICAgICAgJ0hSJyxcbiAgICAgICAgJ0NZJyxcbiAgICAgICAgJ0RLJyxcbiAgICAgICAgJ0VFJyxcbiAgICAgICAgJ0ZSJyxcbiAgICAgICAgJ0RFJyxcbiAgICAgICAgJ0xWJyxcbiAgICAgICAgJ0xUJyxcbiAgICAgICAgJ05MJyxcbiAgICAgICAgJ05PJyxcbiAgICAgICAgJ1BUJyxcbiAgICAgICAgJ0VTJ1xuICAgICAgXSxcblxuICAgICAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gICAgICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxuICAgICAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIExhdyhvcHRpb25zKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIH1cblxuICAgIExhdy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIHNldCBvcHRpb25zIGJhY2sgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB1dGlsLmRlZXBFeHRlbmQoKHRoaXMub3B0aW9ucyA9IHt9KSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICAvLyBtZXJnZSBpbiB1c2VyIG9wdGlvbnNcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG4gICAgfVxuXG4gICAgTGF3LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihjb3VudHJ5Q29kZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMYXcucHJvdG90eXBlLmFwcGx5TGF3ID0gZnVuY3Rpb24ob3B0aW9ucywgY291bnRyeUNvZGUpIHtcbiAgICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmdldChjb3VudHJ5Q29kZSlcblxuICAgICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xuICAgICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyhjb3VudHJ5Q29kZSwgY291bnRyeSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlZ2lvbmFsTGF3KSB7XG4gICAgICAgIGlmIChjb3VudHJ5LnJldm9rYWJsZSkge1xuICAgICAgICAgIC8vIFdlIG11c3QgcHJvdmlkZSBhbiBvcHRpb24gdG8gcmV2b2tlIGNvbnNlbnQgYXQgYSBsYXRlciB0aW1lXG4gICAgICAgICAgb3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xuICAgICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cbiAgICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlXG4gICAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0ID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9XG5cbiAgICByZXR1cm4gTGF3XG4gIH0pKClcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuICAvLyBZb3UgY2FuIHN0cmluZyB0b2dldGhlciB0aGVzZSB0aHJlZSBtb2R1bGVzIHlvdXJzZWxmIGhvd2V2ZXIgeW91IHdhbnQsIGJ5IHdyaXRpbmcgYSBuZXcgZnVuY3Rpb24uXG4gIGNjLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zLCBjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBjb25zdCBsYXcgPSBuZXcgY2MuTGF3KG9wdGlvbnMubGF3KVxuXG4gICAgaWYgKCFjb21wbGV0ZSkgY29tcGxldGUgPSBmdW5jdGlvbigpIHt9XG4gICAgaWYgKCFlcnJvcikgZXJyb3IgPSBmdW5jdGlvbigpIHt9XG5cbiAgICBjb25zdCBhbnN3ZXJzID0gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLm1hcCggY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgYW5zd2VyID0gdXRpbC5nZXRDb29raWUoJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzXycrY2F0ZWdvcnkpXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnldOiBhbnN3ZXIgfSA6IHVuZGVmaW5lZFxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpXG5cbiAgICAvLyBpZiB0aGV5IGhhdmUgYWxyZWFkeSBhbnN3ZXJlZFxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbXBsZXRlKGFuc3dlcnMpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYy5nZXRDb3VudHJ5Q29kZShcbiAgICAgIG9wdGlvbnMsXG4gICAgICBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0aGUgbGF3IG9yIGxvY2F0aW9uIG9wdGlvbnMgYW55bW9yZVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5sYXdcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubG9jYXRpb25cblxuICAgICAgICBpZiAocmVzdWx0LmNvZGUpIHtcbiAgICAgICAgICBvcHRpb25zID0gbGF3LmFwcGx5TGF3KG9wdGlvbnMsIHJlc3VsdC5jb2RlKVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcGxldGUobmV3IGNjLlBvcHVwKG9wdGlvbnMpKVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRoZSBsYXcgb3IgbG9jYXRpb24gb3B0aW9ucyBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxhd1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5sb2NhdGlvblxuXG4gICAgICAgIGVycm9yKGVyciwgbmV3IGNjLlBvcHVwKG9wdGlvbnMpKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gZmluZCB5b3VyIGN1cnJlbnQgbG9jYXRpb24uIEl0IGVpdGhlciBncmFicyBpdCBmcm9tIGEgaGFyZGNvZGVkIG9wdGlvbiBpblxuICAvLyBgb3B0aW9ucy5sYXcuY291bnRyeUNvZGVgLCBvciBhdHRlbXB0cyB0byBtYWtlIGEgbG9jYXRpb24gc2VydmljZSByZXF1ZXN0LiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHNcbiAgLy8gb3B0aW9ucyAod2hpY2ggY2FuIGNvbmZpZ3VyZSB0aGUgYGxhd2AgYW5kIGBsb2NhdGlvbmAgbW9kdWxlcykgYW5kIGZpcmVzIGEgY2FsbGJhY2sgd2l0aCB3aGljaFxuICAvLyBwYXNzZXMgYW4gb2JqZWN0IGB7Y29kZTogY291bnRyeUNvZGV9YCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgKHdoaWNoIGNhbiBoYXZlIHVuZGVmaW5lZCBwcm9wZXJ0aWVzKVxuICBjYy5nZXRDb3VudHJ5Q29kZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGlmIChvcHRpb25zLmxhdyAmJiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZSkge1xuICAgICAgY29tcGxldGUoe1xuICAgICAgICBjb2RlOiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAob3B0aW9ucy5sb2NhdGlvbikge1xuICAgICAgY29uc3QgbG9jYXRvciA9IG5ldyBjYy5Mb2NhdGlvbihvcHRpb25zLmxvY2F0aW9uKVxuICAgICAgbG9jYXRvci5sb2NhdGUoZnVuY3Rpb24oc2VydmljZVJlc3VsdCkge1xuICAgICAgICBjb21wbGV0ZShzZXJ2aWNlUmVzdWx0IHx8IHt9KVxuICAgICAgfSwgZXJyb3IpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29tcGxldGUoe30pXG4gIH1cblxuICAvLyBleHBvcnQgdXRpbHMgKG5vIHBvaW50IGluIGhpZGluZyB0aGVtLCBzbyB3ZSBtYXkgYXMgd2VsbCBleHBvc2UgdGhlbSlcbiAgY2MudXRpbHMgPSB1dGlsXG5cbiAgLy8gcHJldmVudCB0aGlzIGNvZGUgZnJvbSBiZWluZyBydW4gdHdpY2VcbiAgY2MuaGFzSW5pdGlhbGl6ZWQgPSB0cnVlXG5cbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gY2NcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuY29va2llY29uc2VudCA9IGNjXG4gIH1cblxufSkod2luZG93LmNvb2tpZWNvbnNlbnQgfHwge30pIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==