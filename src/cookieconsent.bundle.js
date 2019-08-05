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
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalises the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block;\n      background: rgba(221, 221, 221, 0.6); }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion-title {\n      cursor: pointer; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion {\n      display: none;\n      height: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion.open {\n      display: block;\n      height: auto; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n    .cc-theme-classic .cc-category .cc-tooltip .cc-cookie-accordion-title {\n      color: black; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", ""]);


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
        categories: " ul class=\"cc-categories\"<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"0\"><input type=\"checkbox\" name=\"uncategorized\"/><span class=\"cc-btn-checkbox\"></span>Uncategorized</button<button class=\"cc-btn cc-info\" aria-label=\"Uncategorized Definition Button\" tabindex=\"1\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies that don't fit any other category.</p<!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Uncategorized Cookies List\" role=\"button\">Uncategorized Cookies</a<ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>--</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"2\"><input type=\"checkbox\" name=\"essential\" checked disabled/><span class=\"cc-btn-checkbox\"></span>Essential</button<button class=\"cc-btn cc-info\" aria-label=\"Essential Definition Button\" tabindex=\"3\">^</button<div class=\"cc-tooltip\"<p>This is the category for essential application or website opperation cookies.</p<!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Essential Cookies List\" role=\"button\">Essential Cookies</a<ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>--</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"4\"><input type=\"checkbox\" name=\"personalization\"/><span class=\"cc-btn-checkbox\"></span>Personalization</button<button class=\"cc-btn cc-info\" aria-label=\"Personalization Definition Button\" tabindex=\"5\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies used to help peronalize the application to a specific user.</p<!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Personalization Cookies List\" role=\"button\">Personalization Cookies</a<ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>--</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"6\"><input type=\"checkbox\" name=\"analytics\"/><span class=\"cc-btn-checkbox\"></span>Analytics</button<button class=\"cc-btn cc-info\" aria-label=\"Analytics Definition Button\" tabindex=\"7\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies used to help analyize data.</p<!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Analytics Cookies List\" role=\"button\">Analytics Cookies</a<ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>--</div</li<li class=\"cc-category\"<button class=\"cc-btn\" tabindex=\"8\"><input type=\"checkbox\" name=\"marketing\"/><span class=\"cc-btn-checkbox\"></span>Marketing</button<button class=\"cc-btn cc-info\" aria-label=\"Marketing Definition Button\" tabindex=\"9\">^</button<div class=\"cc-tooltip\"<p>This is the category for cookies used to help peronalize your internet shopping & advertisement experiences.</p<!--<a class=\"cc-cookie-accordion-title\" aria-label=\"Marketing Cookies List\" role=\"button\">Marketing Cookies</a<ul class=\"cc-cookie-accordion\">--A--</br>--B--</ul>--</div</li</ul",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2E0M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImRlZXBFeHRlbmQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJpc1BsYWluT2JqZWN0IiwiZ2V0Q29va2llIiwibmFtZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9wIiwic2hpZnQiLCJzZXRDb29raWUiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsImV4ZGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJ0aHJvdHRsZSIsImxpbWl0Iiwid2FpdCIsImFwcGx5Iiwic2V0VGltZW91dCIsImhhc2giLCJpIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGlzZUhleCIsImhleCIsInN1YnN0ciIsImdldENvbnRyYXN0IiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJnZXRMdW1pbmFuY2UiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJ0cmF2ZXJzZURPTVBhdGgiLCJlbGVtIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3RhdHVzIiwiZGVueSIsImFsbG93IiwiZGlzbWlzcyIsImNhdGVnb3J5IiwidW5jYXRlZ29yaXplZCIsImVzc2VudGlhbCIsInBlcnNvbmFsaXphdGlvbiIsImFuYWx5dGljcyIsIm1hcmtldGluZyIsImlzVmFsaWRTdGF0dXMiLCJrZXlzIiwiaW5kZXhPZiIsInRyYW5zaXRpb25FbmQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4Iiwic3R5bGUiLCJoYXNUcmFuc2l0aW9uIiwiY3VzdG9tU3R5bGVzIiwiUG9wdXAiLCJkZWZhdWx0T3B0aW9ucyIsImVuYWJsZWQiLCJjb250YWluZXIiLCJvblBvcHVwT3BlbiIsIm9uUG9wdXBDbG9zZSIsIm9uSW5pdGlhbGl6ZSIsInN0YXR1c2VzIiwib25TdGF0dXNDaGFuZ2UiLCJjb29raWVOYW1lIiwiY2hvc2VuQmVmb3JlIiwib25SZXZva2VDaG9pY2UiLCJvbk5vQ29va2llTGF3IiwiY291bnRyeUNvZGUiLCJjb3VudHJ5IiwiY29udGVudCIsImhlYWRlciIsIm1lc3NhZ2UiLCJsaW5rIiwiaHJlZiIsImNsb3NlIiwicG9saWN5IiwiZWxlbWVudHMiLCJtZXNzYWdlbGluayIsImNhdGVnb3JpZXMiLCJzYXZlIiwid2luZG93IiwibW9kYWwiLCJyZXZva2VCdG4iLCJjb21wbGlhbmNlIiwiaW5mbyIsInR5cGUiLCJsYXlvdXRzIiwiYmFzaWMiLCJsYXlvdXQiLCJwb3NpdGlvbiIsInRoZW1lIiwicGFsZXR0ZSIsInJldm9rYWJsZSIsImFuaW1hdGVSZXZva2FibGUiLCJzaG93TGluayIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImlnbm9yZUNsaWNrc0Zyb20iLCJhdXRvT3BlbiIsImF1dG9BdHRhY2giLCJtb2JpbGVGb3JjZUZsb2F0Iiwid2hpdGVsaXN0UGFnZSIsImJsYWNrbGlzdFBhZ2UiLCJvdmVycmlkZUhUTUwiLCJDb29raWVQb3B1cCIsImluaXRpYWxpemUiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwiZGVzdHJveSIsImNoZWNrQ2FsbGJhY2tIb29rcyIsImNhbGwiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc21pc3NUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25XaW5kb3dTY3JvbGwiLCJvbldpbmRvd0NsaWNrIiwib25Nb3VzZU1vdmUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUN1c3RvbVN0eWxlIiwib3BlbiIsImlzT3BlbiIsImZhZGVJbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsInNob3dSZXZva2UiLCJmYWRlT3V0IiwiYWZ0ZXJUcmFuc2l0aW9uIiwiYWZ0ZXJGYWRlT3V0IiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmFkZUluVGltZW91dCIsIm9wZW5pbmdUaW1lb3V0IiwiYWZ0ZXJGYWRlSW4iLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VDaG9pY2UiLCJwcmV2ZW50T3BlbiIsImNsZWFyU3RhdHVzZXMiLCJoYXNBbnN3ZXJlZCIsImdldFN0YXR1c2VzIiwic29tZSIsImhhc0NvbnNlbnRlZCIsIm1hcCIsInNldFN0YXR1c2VzIiwidXBkYXRlQ2F0ZWdvcnlTdGF0dXMiLCJjYXRlZ29yeU5hbWUiLCJmb3JFYWNoIiwiY2F0ZWdvcnlTdGF0dXMiLCJpbmRleCIsInJlbW92ZSIsImNvbXBsZXRlIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJmaWx0ZXIiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiY2xhc3NlcyIsInB1c2giLCJhdHRhY2hDdXN0b21QYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImludGVycG9sYXRlZCIsImNvbXBsaWFuY2VUeXBlIiwibWFya3VwIiwiZGl2IiwiY29udCIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tib3giLCJjaGVja2VkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsIlJlZ0V4cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZSIsInJlZmVyZW5jZXMiLCJjb2xvclN0eWxlcyIsInBvcHVwIiwiYnV0dG9uIiwiaGlnaGxpZ2h0IiwidGV4dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG91ciIsImhlYWQiLCJzaGVldCIsInJ1bGVJbmRleCIsImluc2VydFJ1bGUiLCJjdXN0b21TdHlsZSIsInN0eWxlTm9kZSIsIm93bmVyTm9kZSIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsUmFuZ2UiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJ3aW5kb3dDbGljayIsImlnbm9yZWRDbGlja3MiLCJldnQiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJjb25zb2xlIiwid2FybiIsImlnbm9yZWRDbGljayIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwiTG9jYXRpb24iLCJ0aW1lb3V0Iiwic2VydmljZXMiLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpcGluZm8iLCJ1cmwiLCJoZWFkZXJzIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiZXJyb3IiLCJ0b0Vycm9yIiwiY29kZSIsImVyciIsImlwaW5mb2RiIiwiaXNTY3JpcHQiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJFcnJvciIsImlzb19jb2RlIiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsImlkeCIsInNlcnZpY2VPcHRpb24iLCJkeW5hbWljT3B0cyIsImFzc2lnbiIsImxvY2F0ZSIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJfIiwicGFyYW0iLCJ0ZW1wTmFtZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsImludGVycG9sYXRlVXJsIiwicmVxdWVzdEZ1bmN0aW9uIiwiZ2V0U2NyaXB0IiwibWFrZUFzeW5jUmVxdWVzdCIsInhociIsInJlc3BvbnNlVGV4dCIsInJ1blNlcnZpY2VDYWxsYmFjayIsImRhdGEiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0IiwicmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsInZhbCIsImZuIiwidGltZW91dElkeCIsInMiLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImwiLCJzZW5kIiwiTGF3IiwicmVnaW9uYWxMYXciLCJoYXNMYXciLCJleHBsaWNpdEFjdGlvbiIsImdldCIsImFwcGx5TGF3IiwibGF3IiwiYW5zd2VycyIsImFuc3dlciIsImdldENvdW50cnlDb2RlIiwibG9jYXRvciIsInNlcnZpY2VSZXN1bHQiLCJ1dGlscyIsImNvb2tpZWNvbnNlbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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O0FBQ0QsR0FmRCxDQS9zRGEsQ0FndURiOzs7QUFDQXZOLElBQUUsQ0FBQ29ZLEtBQUgsR0FBV2xZLElBQVgsQ0FqdURhLENBbXVEYjs7QUFDQUYsSUFBRSxDQUFDQyxjQUFILEdBQW9CLElBQXBCO0FBRUE4SCxRQUFNLENBQUNzUSxhQUFQLEdBQXVCclksRUFBdkI7QUFDRCxDQXZ1REEsQ0F1dURFK0gsTUFBTSxDQUFDc1EsYUFBUCxJQUF3QixFQXZ1RDFCLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDSEEsY0FBYyxtQkFBTyxDQUFDLG1TQUFxSjs7QUFFM0ssNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJjb29raWVjb25zZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Nvb2tpZWNvbnNlbnQuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYy13aW5kb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1pbnZpc2libGUge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi8qIG9ubHkgYW5pbWF0ZSBpZmhhcyBjbGFzcyAnY2MtYW5pbWF0ZScgKi9cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2Uge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtZ3Jvd2VyIHtcXG4gIC8qIEluaXRpYWxseSB3ZSBkb24ndCB3YW50IGFueSBoZWlnaHQsIGFuZCB3ZSB3YW50IHRoZSBjb250ZW50cyB0byBiZSBoaWRkZW4gKi9cXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogU2V0IG91ciB0cmFuc2l0aW9ucyB1cC4gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7IH1cXG5cXG4vKiB0aGUgcG9wdXAgd2luZG93ICovXFxuLmNjLXdpbmRvdyxcXG4uY2MtcmV2b2tlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogZXhjbHVkZSBwYWRkaW5nIHdoZW4gZGVhbGluZyB3aXRoIHdpZHRoICovXFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBDYWxpYnJpLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC8qIGJ5IHNldHRpbmcgdGhlIGJhc2UgZm9udCBoZXJlLCB3ZSBjYW4gc2l6ZSB0aGUgcmVzdCBvZiB0aGUgcG9wdXAgdXNpbmcgQ1NTIGBlbWAgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC8qIHRoZSBmb2xsb3dpbmcgYXJlIHJhbmRvbSB1bmp1c3RpZmllZCBzdHlsZXMgLSBqdXN0IGJlY2F1c2UgLSBzaG91bGQgcHJvYmFibHkgYmUgcmVtb3ZlZCAqL1xcbiAgei1pbmRleDogOTk5OTsgfVxcblxcbi5jYy13aW5kb3cuY2Mtc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7IH1cXG5cXG4vKiAyIGJhc2ljIHR5cGVzIG9mIHdpbmRvdyAtIGZsb2F0aW5nIC8gYmFubmVyICovXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXgtd2lkdGg6IDI0ZW07XFxuICAvKiAxZW0gPT0gMTZweCB0aGVyZWZvcmUgMjRlbSA9PSAzODRweCAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5jYy1yZXZva2Uge1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIGNsaWNrYWJsZSB0aGluZ3MgKi9cXG4uY2MtYnRuLFxcbi5jYy1saW5rLFxcbi5jYy1jbG9zZSxcXG4uY2MtcmV2b2tlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYy1saW5rIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtbGluazpob3ZlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmNjLWxpbms6YWN0aXZlLFxcbi5jYy1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IGluaXRpYWw7IH1cXG5cXG4uY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGlzZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGTE9BVElORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHRoZXNlIGNsYXNzZXMgcG9zaXRpb24gdGhlIGZsb2F0aW5nIGVsZW1lbnQgKi9cXG4uY2MtdG9wIHtcXG4gIHRvcDogMWVtOyB9XFxuXFxuLmNjLWxlZnQge1xcbiAgbGVmdDogMWVtOyB9XFxuXFxuLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAxZW07IH1cXG5cXG4uY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMWVtOyB9XFxuXFxuLyogbGlua3MgdGhhdCBhcmUgZGlyZWN0IGRlY2VuZGFudHMgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBibG9jayAqL1xcbi5jYy1mbG9hdGluZyA+IC5jYy1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2Uge1xcbiAgZmxleDogMSAwIGF1dG87IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBCQU5ORVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10b3Age1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmNjLWJhbm5lci5jYy1ib3R0b20ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuLmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07IH1cXG5cXG4vKiBDT01QTElBTkNFIEJPWCAqL1xcbi5jYy1jb21wbGlhbmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlID4gLmNjLWJ0biB7XFxuICBmbGV4OiAxOyB9XFxuXFxuLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuXFxuLyogQ2F0ZWdvcmllcyBMYXlvdXQgKi9cXG4uY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjYpOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDIycHgpO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMnB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwczsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbzpmb2N1cyArIC5jYy10b29sdGlwIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gICAgYm90dG9tOiA0NnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC43KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogMnB4IDFweCAxcHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHAge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCAuY2MtY29va2llLWFjY29yZGlvbi10aXRsZSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIGhlaWdodDogMDsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCAuY2MtY29va2llLWFjY29yZGlvbi5vcGVuIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBoZWlnaHQ6IGF1dG87IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciwgLmNjLXdpbmRvdy5jYy1mbG9hdGluZywgLmNjLXdpbmRvdy5jYy1yaWdodCwgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1jb21wbGlhbmNlIHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICBtYXJnaW46IDhweCAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4OyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGUge1xcbiAgICAgIGNvbG9yOiBibGFjazsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIlxuXG4hKGZ1bmN0aW9uKGNjKSB7XG4gIC8vIHN0b3AgZnJvbSBydW5uaW5nIGFnYWluLCBpZiBhY2NpZGVudGx5IGluY2x1ZGVkIG1vcmUgdGhhbiBvbmNlLlxuICBpZiAoY2MuaGFzSW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICBjb25zdCB1dGlsID0ge1xuICAgIFxuICAgIGludGVycG9sYXRlU3RyaW5nOiBmdW5jdGlvbihzdHIsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoIC97eyhbYS16XVthLXowLTlcXC1fXSopfX0vZ2ksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGFyZ3VtZW50c1sxXSkgfHwgJydcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGRlZXBFeHRlbmQ6IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG4gICAgICBmb3IgKHZhciBwcm9wIGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvcCBpbiB0YXJnZXQgJiZcbiAgICAgICAgICAgIHRoaXMuaXNQbGFpbk9iamVjdCh0YXJnZXRbcHJvcF0pICYmXG4gICAgICAgICAgICB0aGlzLmlzUGxhaW5PYmplY3Qoc291cmNlW3Byb3BdKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5kZWVwRXh0ZW5kKHRhcmdldFtwcm9wXSwgc291cmNlW3Byb3BdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gc291cmNlW3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9LFxuICAgIFxuICAgIGdldENvb2tpZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSAnOyAnICsgZG9jdW1lbnQuY29va2llXG4gICAgICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCc7ICcgKyBuYW1lICsgJz0nKVxuICAgICAgcmV0dXJuIHBhcnRzLmxlbmd0aCA8IDJcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBwYXJ0c1xuICAgICAgICAgICAgLnBvcCgpXG4gICAgICAgICAgICAuc3BsaXQoJzsnKVxuICAgICAgICAgICAgLnNoaWZ0KClcbiAgICB9LFxuXG4gICAgc2V0Q29va2llOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpIHtcbiAgICAgIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgIGV4ZGF0ZS5zZXRIb3VycyhleGRhdGUuZ2V0SG91cnMoKSArICgodHlwZW9mIGV4cGlyeURheXMgIT09IFwibnVtYmVyXCIgID8gMzY1IDogZXhwaXJ5RGF5cyApICogMjQpKVxuICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc7ZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJztwYXRoPScgKyAocGF0aCB8fCAnLycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICggZG9tYWluID8gJztkb21haW49JyArIGRvbWFpbiA6ICcnICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCBzZWN1cmUgPyAnO3NlY3VyZScgOiAnJyApXG4gICAgfSxcblxuICAgIC8vIG9ubHkgdXNlZCBmb3IgdGhyb3R0bGluZyB0aGUgJ21vdXNlbW92ZScgZXZlbnQgKHVzZWQgZm9yIGFuaW1hdGluZyB0aGUgcmV2b2tlIGJ1dHRvbiB3aGVuIGBhbmltYXRlUmV2b2thYmxlYCBpcyB0cnVlKVxuICAgIHRocm90dGxlOiBmdW5jdGlvbihjYWxsYmFjaywgbGltaXQpIHtcbiAgICAgIGxldCB3YWl0ID0gZmFsc2U7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghd2FpdCkge1xuICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgd2FpdCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdhaXQgPSBmYWxzZTtcbiAgICAgICAgICB9LCBsaW1pdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSxcblxuICAgIC8vIG9ubHkgdXNlZCBmb3IgaGFzaGluZyBqc29uIG9iamVjdHMgKHVzZWQgZm9yIGhhc2ggbWFwcGluZyBwYWxldHRlIG9iamVjdHMsIHVzZWQgd2hlbiBjdXN0b20gY29sb3VycyBhcmUgcGFzc2VkIHRocm91Z2ggSmF2YVNjcmlwdClcbiAgICBoYXNoOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgIGxldCBoYXNoID0gMCxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGNocixcbiAgICAgICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaDtcbiAgICAgIGZvciAoaTsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgY2hyO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzaDtcbiAgICB9LFxuXG4gICAgbm9ybWFsaXNlSGV4OiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGlmIChoZXhbMF0gPT0gJyMnKSB7XG4gICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICB9XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PSAzKSB7XG4gICAgICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZXg7XG4gICAgfSxcblxuICAgIC8vIHVzZWQgdG8gZ2V0IHRleHQgY29sb3JzIGlmIG5vdCBzZXRcbiAgICBnZXRDb250cmFzdDogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBoZXggPSB0aGlzLm5vcm1hbGlzZUhleChoZXgpO1xuICAgICAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMCwgMiksIDE2KTtcbiAgICAgIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNik7XG4gICAgICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpO1xuICAgICAgY29uc3QgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwO1xuICAgICAgcmV0dXJuIHlpcSA+PSAxMjggPyAnIzAwMCcgOiAnI2ZmZic7XG4gICAgfSxcblxuICAgIC8vIHVzZWQgdG8gY2hhbmdlIGNvbG9yIG9uIGhpZ2hsaWdodFxuICAgIGdldEx1bWluYW5jZTogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBjb25zdCBudW0gPSBwYXJzZUludCh0aGlzLm5vcm1hbGlzZUhleChoZXgpLCAxNiksXG4gICAgICAgIGFtdCA9IDM4LFxuICAgICAgICBSID0gKG51bSA+PiAxNikgKyBhbXQsXG4gICAgICAgIEIgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQsXG4gICAgICAgIEcgPSAobnVtICYgMHgwMDAwZmYpICsgYW10O1xuICAgICAgICByZXR1cm4gJyMnICsgKFxuICAgICAgICAweDEwMDAwMDAgK1xuICAgICAgICAoUiA8IDI1NSA/IChSIDwgMSA/IDAgOiBSKSA6IDI1NSkgKiAweDEwMDAwICtcbiAgICAgICAgKEIgPCAyNTUgPyAoQiA8IDEgPyAwIDogQikgOiAyNTUpICogMHgxMDAgK1xuICAgICAgICAoRyA8IDI1NSA/IChHIDwgMSA/IDAgOiBHKSA6IDI1NSlcbiAgICAgIClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc2xpY2UoMSk7XG4gICAgfSxcblxuICAgIGlzTW9iaWxlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICAgICk7XG4gICAgfSxcblxuICAgIGlzUGxhaW5PYmplY3Q6IGZ1bmN0aW9uKG9iaikge1xuICAgICAgLy8gVGhlIGNvZGUgXCJ0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGxcIiBhbGxvd3MgQXJyYXkgb2JqZWN0c1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0XG4gICAgfSxcblxuICAgIHRyYXZlcnNlRE9NUGF0aDogZnVuY3Rpb24oZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIWVsZW0gfHwgIWVsZW0ucGFyZW50Tm9kZSkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAoZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkgcmV0dXJuIGVsZW07XG5cbiAgICAgIHJldHVybiB0aGlzLnRyYXZlcnNlRE9NUGF0aChlbGVtLnBhcmVudE5vZGUsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHZhbGlkIGNvb2tpZSB2YWx1ZXNcbiAgY2Muc3RhdHVzID0ge1xuICAgIGRlbnkgICA6ICdkZW55JyxcbiAgICBhbGxvdyAgOiAnYWxsb3cnLFxuICAgIGRpc21pc3M6ICdkaXNtaXNzJ1xuICB9O1xuICBjYy5jYXRlZ29yeSA9IHtcbiAgICB1bmNhdGVnb3JpemVkICA6ICdkaXNtaXNzJyxcbiAgICBlc3NlbnRpYWwgICAgICA6ICdhbGxvdycsXG4gICAgcGVyc29uYWxpemF0aW9uOiAnZGlzbWlzcycsXG4gICAgYW5hbHl0aWNzICAgICAgOiAnZGlzbWlzcycsXG4gICAgbWFya2V0aW5nICAgICAgOiAnZGlzbWlzcydcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgc3RhdHVzIGlzIGluIHRoZSBjb25zdGFudHMgbGlzdFxuICAgKiBAcGFyYW0geyBzdHJpbmcgfSBzdGF0dXMgLSBTdGF0dXMgU3RyaW5nIHRvXG4gICAqIEByZXR1cm4geyBib29sZWFuIH0gLSBpZiBzdGF0dXMgaXMgdmFsaWRcbiAgICovXG4gIGNvbnN0IGlzVmFsaWRTdGF0dXMgPSBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLnN0YXR1cykuaW5kZXhPZihzdGF0dXMpID49IDBcbiAgfVxuXG4gIC8vIGRldGVjdHMgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCBuYW1lXG4gIGNjLnRyYW5zaXRpb25FbmQgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0cmFucyA9IHtcbiAgICAgIHQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIE9UOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICAgbXNUOiAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgIE1velQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIFdlYmtpdFQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBwcmVmaXggaW4gdHJhbnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHJhbnMuaGFzT3duUHJvcGVydHkocHJlZml4KSAmJlxuICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zW3ByZWZpeF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSkoKTtcblxuICBjYy5oYXNUcmFuc2l0aW9uID0gISFjYy50cmFuc2l0aW9uRW5kO1xuXG4gIC8vIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gdGhlIGN1c3RvbSA8c3R5bGU+IHRhZ3NcbiAgY2MuY3VzdG9tU3R5bGVzID0ge307XG5cbiAgY2MuUG9wdXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAvLyBpZiBmYWxzZSwgdGhpcyBwcmV2ZW50cyB0aGUgcG9wdXAgZnJvbSBzaG93aW5nICh1c2VmdWwgZm9yIGdpdmluZyB0byBjb250cm9sIHRvIGFub3RoZXIgcGllY2Ugb2YgY29kZSlcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG5cbiAgICAgIC8vIG9wdGlvbmFsIChleHBlY3RpbmcgYSBIVE1MIGVsZW1lbnQpIGlmIHBhc3NlZCwgdGhlIHBvcHVwIGlzIGFwcGVuZGVkIHRvIHRoaXMgZWxlbWVudC4gZGVmYXVsdCBpcyBgZG9jdW1lbnQuYm9keWBcbiAgICAgIGNvbnRhaW5lcjogbnVsbCxcblxuICAgICAgLy8gZGVmYXVsdHMgY29va2llIG9wdGlvbnMgLSBpdCBpcyBSRUNPTU1FTkRFRCB0byBzZXQgdGhlc2UgdmFsdWVzIHRvIGNvcnJlc3BvbmQgd2l0aCB5b3VyIHNlcnZlclxuICAgICAgY29va2llOiB7XG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhpcyBjb29raWUgLSB5b3UgY2FuIGlnbm9yZSB0aGlzXG4gICAgICAgIG5hbWU6ICdjb29raWVjb25zZW50X3N0YXR1cycsXG5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgdXJsIHBhdGggdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgYXQgdGhpcyBsb2NhdGlvblxuICAgICAgICBwYXRoOiAnLycsXG5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZG9tYWluIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIG9uIHRoaXMgZG9tYWluLlxuICAgICAgICAvLyAgLSBHdWlkZSB0byBjb29raWUgZG9tYWlucyAtIGh0dHBzOi8vd3d3Lm14c2FzaGEuZXUvYmxvZy8yMDE0LzAzLzA0L2RlZmluaXRpdmUtZ3VpZGUtdG8tY29va2llLWRvbWFpbnMvXG4gICAgICAgIGRvbWFpbjogJycsXG5cbiAgICAgICAgLy8gVGhlIGNvb2tpZXMgZXhwaXJlIGRhdGUsIHNwZWNpZmllZCBpbiBkYXlzIChzcGVjaWZ5IC0xIGZvciBubyBleHBpcnkpXG4gICAgICAgIGV4cGlyeURheXM6IDM2NSxcblxuICAgICAgICAvLyBJZiB0cnVlIHRoZSBjb29raWUgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHNlY3VyZSBmbGFnLiBTZWN1cmUgY29va2llcyB3aWxsIG9ubHkgYmUgdHJhbnNtaXR0ZWQgdmlhIEhUVFBTLlxuICAgICAgICBzZWN1cmU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvLyB0aGVzZSBjYWxsYmFjayBob29rcyBhcmUgY2FsbGVkIGF0IGNlcnRhaW4gcG9pbnRzIGluIHRoZSBwcm9ncmFtIGV4ZWN1dGlvblxuICAgICAgb25Qb3B1cE9wZW46IGZ1bmN0aW9uKCkge30sXG4gICAgICBvblBvcHVwQ2xvc2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICBvbkluaXRpYWxpemU6IGZ1bmN0aW9uKHN0YXR1c2VzKSB7fSxcbiAgICAgIG9uU3RhdHVzQ2hhbmdlOiBmdW5jdGlvbihjb29raWVOYW1lLCBzdGF0dXMsIGNob3NlbkJlZm9yZSkge30sXG4gICAgICBvblJldm9rZUNob2ljZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uTm9Db29raWVMYXc6IGZ1bmN0aW9uKGNvdW50cnlDb2RlLCBjb3VudHJ5KSB7fSxcblxuICAgICAgLy8gZWFjaCBpdGVtIGRlZmluZXMgdGhlIGlubmVyIHRleHQgZm9yIHRoZSBlbGVtZW50IHRoYXQgaXQgcmVmZXJlbmNlc1xuICAgICAgY29udGVudDoge1xuICAgICAgICBoZWFkZXI6ICdDb29raWVzIHVzZWQgb24gdGhlIHdlYnNpdGUhJyxcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBlbnN1cmUgeW91IGdldCB0aGUgYmVzdCBleHBlcmllbmNlIG9uIG91ciB3ZWJzaXRlLicsXG4gICAgICAgIGRpc21pc3M6ICdHb3QgaXQhJyxcbiAgICAgICAgYWxsb3c6ICdBbGxvdyBjb29raWVzJyxcbiAgICAgICAgZGVueTogJ0RlY2xpbmUnLFxuICAgICAgICBsaW5rOiAnTGVhcm4gbW9yZScsXG4gICAgICAgIGhyZWY6ICdodHRwczovL3d3dy5jb29raWVzYW5keW91LmNvbScsXG4gICAgICAgIGNsb3NlOiAnJiN4Mjc0YzsnLFxuICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICBwb2xpY3k6ICdDb29raWUgUG9saWN5J1xuICAgICAgfSxcblxuICAgICAgLy8gVGhpcyBpcyB0aGUgSFRNTCBmb3IgdGhlIGVsZW1lbnRzIGFib3ZlLiBUaGUgc3RyaW5nIHt7aGVhZGVyfX0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBlcXVpdmFsZW50IHRleHQgYmVsb3cuXG4gICAgICAvLyBZb3UgY2FuIHJlbW92ZSBcInt7aGVhZGVyfX1cIiBhbmQgd3JpdGUgdGhlIGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSBIVE1MIGlmIHlvdSB3YW50LlxuICAgICAgLy9cbiAgICAgIC8vICAtIEFSSUEgcnVsZXMgc3VnZ2VzdCB0byBlbnN1cmUgY29udHJvbHMgYXJlIHRhYmJhYmxlIChzbyB0aGUgYnJvd3NlciBjYW4gZmluZCB0aGUgZmlyc3QgY29udHJvbCksXG4gICAgICAvLyAgICBhbmQgdG8gc2V0IHRoZSBmb2N1cyB0byB0aGUgZmlyc3QgaW50ZXJhY3RpdmUgY29udHJvbCAoaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3VzaW5nLWFyaWEvKVxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJjYy1oZWFkZXJcIj57e2hlYWRlcn19PC9zcGFuPiZuYnNwOycsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcbiAgICAgICAgbWVzc2FnZWxpbms6XG4gICAgICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX0gPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+PC9zcGFuPicsXG4gICAgICAgIGRpc21pc3M6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtZGlzbWlzc1wiPnt7ZGlzbWlzc319PC9hPicsXG4gICAgICAgIGFsbG93OlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy1hbGxvd1wiPnt7YWxsb3d9fTwvYT4nLFxuICAgICAgICBkZW55OlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGVueSBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtZGVueVwiPnt7ZGVueX19PC9hPicsXG4gICAgICAgIGxpbms6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPicsXG4gICAgICAgIGNsb3NlOlxuICAgICAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcbiAgICAgICAgY2F0ZWdvcmllczogYCB1bCBjbGFzcz1cImNjLWNhdGVnb3JpZXNcIjxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCIwXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ1bmNhdGVnb3JpemVkXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPlVuY2F0ZWdvcml6ZWQ8L2J1dHRvbjxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIxXCI+XjwvYnV0dG9uPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIjxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHRoYXQgZG9uJ3QgZml0IGFueSBvdGhlciBjYXRlZ29yeS48L3A8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIlVuY2F0ZWdvcml6ZWQgQ29va2llcyBMaXN0XCIgcm9sZT1cImJ1dHRvblwiPlVuY2F0ZWdvcml6ZWQgQ29va2llczwvYTx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPC9kaXY8L2xpPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIjxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVzc2VudGlhbFwiIGNoZWNrZWQgZGlzYWJsZWQvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkVzc2VudGlhbDwvYnV0dG9uPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiM1wiPl48L2J1dHRvbjxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgZXNzZW50aWFsIGFwcGxpY2F0aW9uIG9yIHdlYnNpdGUgb3BwZXJhdGlvbiBjb29raWVzLjwvcDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiRXNzZW50aWFsIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5Fc3NlbnRpYWwgQ29va2llczwvYTx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPC9kaXY8L2xpPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIjxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjRcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBlcnNvbmFsaXphdGlvblwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5QZXJzb25hbGl6YXRpb248L2J1dHRvbjxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJQZXJzb25hbGl6YXRpb24gRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjVcIj5ePC9idXR0b248ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIHBlcm9uYWxpemUgdGhlIGFwcGxpY2F0aW9uIHRvIGEgc3BlY2lmaWMgdXNlci48L3A8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+UGVyc29uYWxpemF0aW9uIENvb2tpZXM8L2E8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLTwvZGl2PC9saTxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI2XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhbmFseXRpY3NcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+QW5hbHl0aWNzPC9idXR0b248YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiQW5hbHl0aWNzIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI3XCI+XjwvYnV0dG9uPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIjxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBhbmFseWl6ZSBkYXRhLjwvcDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiQW5hbHl0aWNzIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5BbmFseXRpY3MgQ29va2llczwvYTx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPC9kaXY8L2xpPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIjxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjhcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtldGluZ1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5NYXJrZXRpbmc8L2J1dHRvbjxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjlcIj5ePC9idXR0b248ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIHBlcm9uYWxpemUgeW91ciBpbnRlcm5ldCBzaG9wcGluZyAmIGFkdmVydGlzZW1lbnQgZXhwZXJpZW5jZXMuPC9wPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgQ29va2llcyBMaXN0XCIgcm9sZT1cImJ1dHRvblwiPk1hcmtldGluZyBDb29raWVzPC9hPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS08L2RpdjwvbGk8L3VsYCxcbiAgICAgICAgc2F2ZTogYDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2Mtc2F2ZVwiPlNhdmU8L2J1dHRvbj5gXG4gICAgICAgIC8vY29tcGxpYW5jZTogY29tcGxpYW5jZSBpcyBhbHNvIGFuIGVsZW1lbnQsIGJ1dCBpdCBpcyBnZW5lcmF0ZWQgYnkgdGhlIGFwcGxpY2F0aW9uLCBkZXBlbmRpbmcgb24gYHR5cGVgIGJlbG93XG4gICAgICB9LFxuXG4gICAgICAvLyBUaGUgcGxhY2Vob2xkZXJzIHt7Y2xhc3Nlc319IGFuZCB7e2NoaWxkcmVufX0gYm90aCBnZXQgcmVwbGFjZWQgZHVyaW5nIGluaXRpYWxpc2F0aW9uOlxuICAgICAgLy8gIC0ge3tjbGFzc2VzfX0gaXMgd2hlcmUgYWRkaXRpb25hbCBjbGFzc2VzIGdldCBhZGRlZFxuICAgICAgLy8gIC0ge3tjaGlsZHJlbn19IGlzIHdoZXJlIHRoZSBIVE1MIGNoaWxkcmVuIGFyZSBwbGFjZWRcbiAgICAgIHdpbmRvdzpcbiAgICAgICAgJzxkaXYgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtbGFiZWw9XCJjb29raWVjb25zZW50XCIgYXJpYS1kZXNjcmliZWRieT1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2Mtd2luZG93IHt7Y2xhc3Nlc319XCI+PCEtLWdvb2dsZW9mZjogYWxsLS0+e3tjaGlsZHJlbn19PCEtLWdvb2dsZW9uOiBhbGwtLT48L2Rpdj4nLFxuICAgICAgXG4gICAgICBtb2RhbDogJycsXG5cbiAgICAgIC8vIFRoaXMgaXMgdGhlIGh0bWwgZm9yIHRoZSByZXZva2UgYnV0dG9uLiBUaGlzIG9ubHkgc2hvd3MgdXAgYWZ0ZXIgdGhlIHVzZXIgaGFzIHNlbGVjdGVkIHRoZWlyIGxldmVsIG9mIGNvbnNlbnRcbiAgICAgIC8vIEl0IGNhbiBiZSBlbmFibGVkIG9mIGRpc2FibGVkIHVzaW5nIHRoZSBgcmV2b2thYmxlYCBvcHRpb25cbiAgICAgIHJldm9rZUJ0bjogJzxkaXYgY2xhc3M9XCJjYy1yZXZva2Uge3tjbGFzc2VzfX1cIj57e3BvbGljeX19PC9kaXY+JyxcblxuICAgICAgLy8gZGVmaW5lIHR5cGVzIG9mICdjb21wbGlhbmNlJyBoZXJlLiAne3t2YWx1ZX19JyBzdHJpbmdzIGluIGhlcmUgYXJlIGxpbmtlZCB0byBgZWxlbWVudHNgXG4gICAgICBjb21wbGlhbmNlOiB7XG4gICAgICAgIGluZm86ICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319PC9kaXY+JyxcbiAgICAgICAgJ29wdC1pbic6XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3thbGxvd319e3tjdXN0b21pemV9fTwvZGl2PicsXG4gICAgICAgICdvcHQtb3V0JzpcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2Rlbnl9fTwvZGl2PicsXG4gICAgICAgIGNhdGVnb3JpZXM6ICc8ZGl2IGNsYXNzPVwiZm9ybVwiPnt7Y2F0ZWdvcmllc319e3tzYXZlfX08L2Rpdj4nXG4gICAgICB9LFxuXG4gICAgICAvLyBzZWxlY3QgeW91ciB0eXBlIG9mIHBvcHVwIGhlcmVcbiAgICAgIHR5cGU6ICdpbmZvJywgLy8gcmVmZXJzIHRvIGBjb21wbGlhbmNlYCAoaW4gb3RoZXIgd29yZHMsIHRoZSBidXR0b25zIHRoYXQgYXJlIGRpc3BsYXllZClcblxuICAgICAgLy8gZGVmaW5lIGxheW91dCBsYXlvdXRzIGhlcmVcbiAgICAgIGxheW91dHM6IHtcbiAgICAgICAgLy8gdGhlICdibG9jaycgbGF5b3V0IHRlbmQgdG8gYmUgZm9yIHNxdWFyZSBmbG9hdGluZyBwb3B1cHNcbiAgICAgICAgYmFzaWMgICAgICAgICA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fScsXG4gICAgICAgICdiYXNpYy1jbG9zZScgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX17e2Nsb3NlfX0nLFxuICAgICAgICAnYmFzaWMtaGVhZGVyJzogJ3t7aGVhZGVyfX17e21lc3NhZ2V9fXt7bGlua319e3tjb21wbGlhbmNlfX0nXG4gICAgICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xuICAgICAgICAvLydteS1jb29sLWxheW91dCc6ICc8ZGl2IGNsYXNzPVwibXktc3BlY2lhbC1sYXlvdXRcIj57e21lc3NhZ2V9fXt7Y29tcGxpYW5jZX19PC9kaXY+e3tjbG9zZX19JyxcbiAgICAgIH0sXG5cbiAgICAgIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXG4gICAgICBsYXlvdXQ6ICdiYXNpYycsXG5cbiAgICAgIC8vIHRoaXMgcmVmZXJzIHRvIHRoZSBwb3B1cCB3aW5kb3dzIHBvc2l0aW9uLiB3ZSBjdXJyZW50bHkgc3VwcG9ydDpcbiAgICAgIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXG4gICAgICAvLyAgLSBmbG9hdGluZyBwb3NpdGlvbnM6IHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHRcbiAgICAgIC8vXG4gICAgICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJywgLy8gZGVmYXVsdCBwb3NpdGlvbiBpcyAnYm90dG9tJ1xuXG4gICAgICAvLyBBdmFpbGFibGUgc3R5bGVzXG4gICAgICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXG4gICAgICAvLyAgICAtZWRnZWxlc3NcbiAgICAgIC8vICAgIC1jbGFzc2ljXG4gICAgICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cbiAgICAgIC8vIE5vdGU6IHN0eWxlIFwid2lyZVwiIGlzIHVzZWQgZm9yIHRoZSBjb25maWd1cmF0b3IsIGJ1dCBoYXMgbm8gQ1NTIHN0eWxlcyBvZiBpdHMgb3duLCBvbmx5IHBhbGV0dGUgaXMgdXNlZC5cbiAgICAgIHRoZW1lOiAnYmxvY2snLFxuXG4gICAgICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcbiAgICAgIC8vIE5vdGU6IGJ5IGRlZmF1bHQsIHdlIGFuaW1hdGUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgZnJvbSAwIHRvIGZ1bGwgc2l6ZVxuICAgICAgc3RhdGljOiBmYWxzZSxcblxuICAgICAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXG4gICAgICAvLyBpZGVhbGx5LCBhbnkgY3VzdG9tIGNvbG91cnMvdGhlbWVzIHNob3VsZCBiZSBjcmVhdGVkIGluIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQsIGFzIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQuXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxuICAgICAgLy8gICAgIGJ1dHRvbjoge2JhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnI2Y4ZTcxYyd9LFxuICAgICAgLy8gICAgIGhpZ2hsaWdodDoge2JhY2tncm91bmQ6ICcjZjhlNzFjJywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjMDAwMDAwJ30sXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIGBoaWdobGlnaHRgIGlzIG9wdGlvbmFsIGFuZCBleHRlbmRzIGBidXR0b25gLiBpZiBpdCBleGlzdHMsIGl0IHdpbGwgYXBwbHkgdG8gdGhlIGZpcnN0IGJ1dHRvblxuICAgICAgLy8gb25seSBiYWNrZ3JvdW5kIG5lZWRzIHRvIGJlIGRlZmluZWQgZm9yIGV2ZXJ5IGVsZW1lbnQuIGlmIG5vdCBzZXQsIG90aGVyIGNvbG9ycyBjYW4gYmUgY2FsY3VsYXRlZCBmcm9tIGl0XG4gICAgICBwYWxldHRlOiBudWxsLFxuXG4gICAgICAvLyBTb21lIGNvdW50cmllcyBSRVFVSVJFIHRoYXQgYSB1c2VyIGNhbiBjaGFuZ2UgdGhlaXIgbWluZC4gWW91IGNhbiBjb25maWd1cmUgdGhpcyB5b3Vyc2VsZi5cbiAgICAgIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGF3YCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcbiAgICAgIHJldm9rYWJsZTogZmFsc2UsXG5cbiAgICAgIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxuICAgICAgYW5pbWF0ZVJldm9rYWJsZTogdHJ1ZSxcblxuICAgICAgLy8gdXNlZCB0byBkaXNhYmxlIGxpbmsgb24gZXhpc3RpbmcgbGF5b3V0c1xuICAgICAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXG4gICAgICBzaG93TGluazogdHJ1ZSxcblxuICAgICAgLy8gc2V0IHZhbHVlIGFzIHNjcm9sbCByYW5nZSB0byBlbmFibGVcbiAgICAgIGRpc21pc3NPblNjcm9sbDogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBhdXRvZGlzbWlzcyBhZnRlciBzZXQgdGltZVxuICAgICAgZGlzbWlzc09uVGltZW91dDogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcblxuICAgICAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxuICAgICAgLy8gc2hvdWxkIGJlIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIChub3QgQ1NTIHNlbGVjdG9ycylcbiAgICAgIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0biddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxuXG4gICAgICAvLyBUaGUgYXBwbGljYXRpb24gYXV0b21hdGljYWxseSBkZWNpZGUgd2hldGhlciB0aGUgcG9wdXAgc2hvdWxkIG9wZW4uXG4gICAgICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcbiAgICAgIGF1dG9PcGVuOiB0cnVlLFxuXG4gICAgICAvLyBCeSBkZWZhdWx0IHRoZSBjcmVhdGVkIEhUTUwgaXMgYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyICh3aGljaCBkZWZhdWx0cyB0byA8Ym9keT4pLiBZb3UgY2FuIHByZXZlbnQgdGhpcyBiZWhhdmlvdXJcbiAgICAgIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcbiAgICAgIC8vXG4gICAgICAvLyAgICAgY29uc3QgaW5zdGFuY2UgPSBjb29raWVjb25zZW50LmZhY3Rvcnkob3B0aW9ucyk7XG4gICAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZS5lbGVtZW50KTtcbiAgICAgIC8vXG4gICAgICBhdXRvQXR0YWNoOiB0cnVlLFxuXHQgIFxuXHQgIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcblx0ICBtb2JpbGVGb3JjZUZsb2F0OiB0cnVlLFxuXG4gICAgICAvLyBzaW1wbGUgd2hpdGVsaXN0L2JsYWNrbGlzdCBmb3IgcGFnZXMuIHNwZWNpZnkgcGFnZSBieTpcbiAgICAgIC8vICAgLSB1c2luZyBhIHN0cmluZyA6ICcvaW5kZXguaHRtbCcgICAgICAgICAgIChtYXRjaGVzICcvaW5kZXguaHRtbCcgZXhhY3RseSkgT1JcbiAgICAgIC8vICAgLSB1c2luZyBSZWdFeHAgICA6IC9cXC9wYWdlX1tcXGRdK1xcLmh0bWwvICAgIChtYXRjaGVkICcvcGFnZV8xLmh0bWwnIGFuZCAnL3BhZ2VfMi5odG1sJyBldGMpXG4gICAgICB3aGl0ZWxpc3RQYWdlOiBbXSxcbiAgICAgIGJsYWNrbGlzdFBhZ2U6IFtdLFxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGRlZmluZWQsIHRoZW4gaXQgaXMgdXNlZCBhcyB0aGUgaW5uZXIgaHRtbCBpbnN0ZWFkIG9mIGxheW91dC4gVGhpcyBhbGxvd3MgZm9yIHVsdGltYXRlIGN1c3RvbWlzYXRpb24uXG4gICAgICAvLyBCZSBzdXJlIHRvIHVzZSB0aGUgY2xhc3NlcyBgY2MtYnRuYCBhbmQgYGNjLWFsbG93YCwgYGNjLWRlbnlgIG9yIGBjYy1kaXNtaXNzYC4gVGhleSBlbmFibGUgdGhlIGFwcCB0byByZWdpc3RlciBjbGlja1xuICAgICAgLy8gaGFuZGxlcnMuIFlvdSBjYW4gdXNlIG90aGVyIHByZS1leGlzdGluZyBjbGFzc2VzIHRvby4gU2VlIGBzcmMvc3R5bGVzYCBmb2xkZXIuXG4gICAgICBvdmVycmlkZUhUTUw6IG51bGxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQ29va2llUG9wdXAoKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7IC8vIGFscmVhZHkgcmVuZGVyZWRcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IG9wdGlvbnMgYmFjayB0byBkZWZhdWx0IG9wdGlvbnNcbiAgICAgIHV0aWwuZGVlcEV4dGVuZCgodGhpcy5vcHRpb25zID0ge30pLCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIC8vIG1lcmdlIGluIHVzZXIgb3B0aW9uc1xuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB1dGlsLmRlZXBFeHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJucyB0cnVlIGlmIGBvbkNvbXBsZXRlYCB3YXMgY2FsbGVkXG4gICAgICBpZiAoY2hlY2tDYWxsYmFja0hvb2tzLmNhbGwodGhpcykpIHtcbiAgICAgICAgLy8gdXNlciBoYXMgYWxyZWFkeSBhbnN3ZXJlZFxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBseSBibGFja2xpc3QgLyB3aGl0ZWxpc3RcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmxhY2tsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMud2hpdGVsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgZnVsbCBtYXJrdXAgZWl0aGVyIGNvbnRhaW5zIHRoZSB3cmFwcGVyIG9yIGl0IGRvZXMgbm90IChmb3IgbXVsdGlwbGUgaW5zdGFuY2VzKVxuICAgICAgbGV0IGNvb2tpZVBvcHVwID0gdGhpcy5vcHRpb25zLndpbmRvd1xuICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBnZXRQb3B1cENsYXNzZXMuY2FsbCh0aGlzKS5qb2luKCcgJykpXG4gICAgICAgIC5yZXBsYWNlKCd7e2NoaWxkcmVufX0nLCBnZXRQb3B1cElubmVyTWFya3VwLmNhbGwodGhpcykpO1xuXG4gICAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxuICAgICAgY29uc3QgY3VzdG9tSFRNTCA9IHRoaXMub3B0aW9ucy5vdmVycmlkZUhUTUw7XG4gICAgICBpZiAodHlwZW9mIGN1c3RvbUhUTUwgPT0gJ3N0cmluZycgJiYgY3VzdG9tSFRNTC5sZW5ndGggKSB7XG4gICAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgc3RhdGljLCB3ZSBuZWVkIHRvIGdyb3cgdGhlIGVsZW1lbnQgZnJvbSAwIGhlaWdodCBzbyBpdCBkb2Vzbid0IGp1bXAgdGhlIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIHdlIHdyYXAgYW4gZWxlbWVudCBhcm91bmQgaXQgd2hpY2ggd2lsbCBtYXNrIHRoZSBoaWRkZW4gY29udGVudFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgLy8gYGdyb3dlcmAgaXMgYSB3cmFwcGVyIGRpdiB3aXRoIGEgaGlkZGVuIG92ZXJmbG93IHdob3NlIGhlaWdodCBpcyBhbmltYXRlZFxuICAgICAgICBjb25zdCB3cmFwcGVyID0gYXBwZW5kTWFya3VwLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNjLWdyb3dlclwiPicgKyBjb29raWVQb3B1cCArICc8L2Rpdj4nXG4gICAgICAgICk7XG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJyc7IC8vIHNldCBpdCB0byB2aXNpYmxlIChiZWNhdXNlIGFwcGVuZE1hcmt1cCBoaWRlcyBpdClcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlci5maXJzdENoaWxkOyAvLyBnZXQgdGhlIGBlbGVtZW50YCByZWZlcmVuY2UgZnJvbSB0aGUgd3JhcHBlclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gYXBwZW5kTWFya3VwLmNhbGwodGhpcywgY29va2llUG9wdXApO1xuICAgICAgfVxuXG4gICAgICBhcHBseUF1dG9EaXNtaXNzLmNhbGwodGhpcyk7XG5cbiAgICAgIGFwcGx5UmV2b2tlQnV0dG9uLmNhbGwodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b09wZW4pIHtcbiAgICAgICAgdGhpcy5hdXRvT3BlbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMub25CdXR0b25DbGljayAmJiB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGlzbWlzc1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlzbWlzc1RpbWVvdXQpO1xuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25XaW5kb3dTY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwpO1xuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25XaW5kb3dDbGljaykge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spO1xuICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbk1vdXNlTW92ZSkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5yZXZva2VCdG4gJiYgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnJldm9rZUJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucmV2b2tlQnRuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmV2b2tlQnRuID0gbnVsbDtcblxuICAgICAgcmVtb3ZlQ3VzdG9tU3R5bGUodGhpcy5vcHRpb25zLnBhbGV0dGUpO1xuICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlSW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblBvcHVwT3Blbi5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oc2hvd1Jldm9rZSkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgaWYgKGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG93UmV2b2tlICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3B1cENsb3NlLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZmFkZUluID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgaWYgKCFjYy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuO1xuXG4gICAgICAvLyBUaGlzIHNob3VsZCBhbHdheXMgYmUgY2FsbGVkIEFGVEVSIGZhZGVPdXQgKHdoaWNoIGlzIGdvdmVybmVkIGJ5IHRoZSAndHJhbnNpdGlvbmVuZCcgZXZlbnQpLlxuICAgICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAgIC8vIGhhcyBhIGNoYW5jZSB0byBydW4sIHRoZW4gd2UgcnVuIGl0IG91cnNlbHZlc1xuICAgICAgaWYgKHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICAgIGFmdGVyRmFkZU91dC5jYWxsKHRoaXMsIGVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYWRlSW5UaW1lb3V0ID0gMjA7IC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcblxuICAgICAgICAvLyBBbHRob3VnaCBtb3N0IGJyb3dzZXJzIGNhbiBoYW5kbGUgdmFsdWVzIGxlc3MgdGhhbiAyMG1zLCBpdCBzaG91bGQgcmVtYWluIGFib3ZlIHRoaXMgdmFsdWUuXG4gICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBhcmUgd2FpdGluZyBmb3IgYSBcImJyb3dzZXIgcmVkcmF3XCIgYmVmb3JlIHdlIHJlbW92ZSB0aGUgJ2NjLWludmlzaWJsZScgY2xhc3MuXG4gICAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXG4gICAgICAgIC8vIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBmcm9tIG5vdGhpbmcuIFRoZXJlZm9yZSB3ZSBNVVNUIGFsbG93IGVub3VnaCB0aW1lIGZvciB0aGUgYnJvd3NlciB0byBkb1xuICAgICAgICAvLyBpdHMgdGhpbmcuIFRoZSBhY3R1YWxseSBkaWZmZXJlbmNlIGJldHdlZW4gdXNpbmcgMCBhbmQgMjAgaW4gYSBzZXQgdGltZW91dCBpcyBuZWdsZWdpYmxlIGFueXdheVxuICAgICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICBhZnRlckZhZGVJbi5iaW5kKHRoaXMsIGVsKSxcbiAgICAgICAgICBmYWRlSW5UaW1lb3V0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5mYWRlT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgaWYgKCFjYy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuaW5nVGltZW91dCk7XG4gICAgICAgIGFmdGVyRmFkZUluLmJpbmQodGhpcywgZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gYWZ0ZXJGYWRlT3V0LmJpbmQodGhpcywgZWwpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGNjLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKTtcblxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICcnICYmXG4gICAgICAgIChjYy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS50b2dnbGVSZXZva2VCdXR0b24gPSBmdW5jdGlvbihzaG93KSB7XG4gICAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSc7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5yZXZva2VDaG9pY2UgPSBmdW5jdGlvbihwcmV2ZW50T3Blbikge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKCk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5vblJldm9rZUNob2ljZS5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAoIXByZXZlbnRPcGVuKSB7XG4gICAgICAgIHRoaXMuYXV0b09wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXG4gICAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5oYXNBbnN3ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG8gYWxsIG9mIHRoZSBjYXRlZ29yaWVzXG4gICAgICogQHJldHVybiB7IGFycmF5PGJvb2xlYW4+IH0gLSB0cnVlIGlmIGNvbnNlbnQgaGFzIGJlZW4gZ2l2ZW5cbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaGFzQ29uc2VudGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLm1hcCggc3RhdHVzID0+IHN0YXR1cyA9PT0gY2Muc3RhdHVzLmFsbG93IHx8IHN0YXR1cyA9PT0gY2Muc3RhdHVzLmRpc21pc3MgKVxuICAgIH07XG5cbiAgICAvLyBvcGVucyB0aGUgcG9wdXAgaWYgbm8gYW5zd2VyIGhhcyBiZWVuIGdpdmVuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmF1dG9PcGVuID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgY29uc3QgaGFzQW5zd2VyZWQgPSB0aGlzLmhhc0Fuc3dlcmVkKClcbiAgICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBcbiAgICAgKiBTZXQncyBjb29raWUgc3RhdHVzZXNcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGFsbE9yVW5kZWYgICAgICAtIElmIHRoaXMgaXMgdGhlIG9ubHkgcGFyYW0sIHNldCBBTEwgaWYgbm90LCBzZXQgVW5jYXRlZ29yaXplZCBjb29raWVzIHN0YXR1c2VzIHNldCB0byB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGVzc2VudGlhbCAgICAgICAtIEVzc2VudGlhbCBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IHBlcnNvbmFsaXphdGlvbiAtIFByZWZlcmVuY2VzIC8gRnVuY3Rpb25hbGl0eSBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGFuYWx5dGljcyAgICAgICAtIEFuYWx5dGlzIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IHN0cmluZzxjYy5zdGF0dXM+IH0gbWFya2V0aW5nICAgICAgIC0gTWFya2V0aW5nIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgICAqIEByZXR1cm4geyB1bmRlZmluZWQgfVxuICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLnNldFN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7bmFtZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmV9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuXG4gICAgICAvLyBpZiBgc3RhdHVzYCBpcyB2YWxpZFxuICAgICAgY29uc3QgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMgPSAoIGNhdGVnb3J5TmFtZSwgc3RhdHVzICkgPT4ge1xuICAgICAgICBpZiAoaXNWYWxpZFN0YXR1cyhzdGF0dXMpKSB7XG4gICAgICAgICAgY29uc3QgY29va2llTmFtZSA9IG5hbWUrJ18nK2NhdGVnb3J5TmFtZVxuICAgICAgICAgIGNvbnN0IGNob3NlbkJlZm9yZSA9IE9iamVjdC5rZXlzKGNjLnN0YXR1cykuaW5kZXhPZih1dGlsLmdldENvb2tpZShjb29raWVOYW1lKSkgPj0gMFxuICAgICAgICAgIHV0aWwuc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uU3RhdHVzQ2hhbmdlLmNhbGwodGhpcywgY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGNjLmNhdGVnb3J5WyBjYXRlZ29yeSBdICkgKVxuICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgICAgT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgYXJndW1lbnRzWyAwIF0gKSApXG4gICAgICB9IGVsc2UgaWYgKCBhcmd1bWVudHMubGVuZ3RoID4gMSApIHtcbiAgICAgICAgYXJndW1lbnRzLmZvckVhY2goICggY2F0ZWdvcnlTdGF0dXMsIGluZGV4ICkgPT4ge1xuICAgICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSlbIGluZGV4IF0sIGNhdGVnb3J5U3RhdHVzIClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICAgKiBAcmV0dXJuIHsgYXJyYXk8c3RyaW5nPiB9IC0gY29va2llIGNhdGVnb3JpZXMgc3RhdHVzIGluIG9yZGVyIG9mIGNjLmNhdGVnb3J5XG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmdldFN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLm1hcCggY2F0ZWdvcnlOYW1lID0+IHV0aWwuZ2V0Q29va2llKHRoaXMub3B0aW9ucy5jb29raWUubmFtZSsnXycrY2F0ZWdvcnlOYW1lKSApXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmNsZWFyU3RhdHVzZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgZG9tYWluLCBwYXRoIH0gPSB0aGlzLm9wdGlvbnMuY29va2llO1xuICAgICAgT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLmZvckVhY2goIGNhdGVnb3J5TmFtZSA9PiB7XG4gICAgICAgIHV0aWwuc2V0Q29va2llKG5hbWUrJ18nK2NhdGVnb3J5TmFtZSwgJycsIC0xLCBkb21haW4sIHBhdGgpXG4gICAgICB9KVxuICAgIH07XG5cbiAgICAvLyBUaGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBhZnRlciAnZmFkZUluJy4gVGhpcyBpcyB0aGUgY29kZSB0aGF0IGFjdHVhbGx5IGNhdXNlcyB0aGUgZmFkZUluIHRvIHdvcmtcbiAgICAvLyBUaGVyZSBpcyBhIGdvb2QgcmVhc29uIHdoeSBpdCdzIGNhbGxlZCBpbiBhIHRpbWVvdXQuIFJlYWQgJ2ZhZGVJbic7XG4gICAgZnVuY3Rpb24gYWZ0ZXJGYWRlSW4oZWwpIHtcbiAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBudWxsO1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnY2MtaW52aXNpYmxlJylcbiAgICB9XG5cbiAgICAvLyBUaGlzIGlzIGNhbGxlZCBvbiAndHJhbnNpdGlvbmVuZCcgKG9ubHkgb24gdGhlIHRyYW5zaXRpb24gb2YgdGhlIGZhZGVPdXQpLiBUaGF0J3MgYmVjYXVzZSBhZnRlciB3ZSd2ZSBmYWRlZCBvdXQsIHdlIG5lZWQgdG9cbiAgICAvLyBzZXQgdGhlIGRpc3BsYXkgdG8gJ25vbmUnIChzbyB0aGVyZSBhcmVuJ3QgYW5ub3lpbmcgaW52aXNpYmxlIHBvcHVwcyBhbGwgb3ZlciB0aGUgcGFnZSkuIElmIGZvciB3aGVuZXZlciByZWFzb24gdGhpcyBmdW5jdGlvblxuICAgIC8vIGlzIG5vdCBjYWxsZWQgKGxhY2sgb2Ygc3VwcG9ydCksIHRoZSBvcGVuL2Nsb3NlIG1lY2hhbmlzbSB3aWxsIHN0aWxsIHdvcmsuXG4gICAgZnVuY3Rpb24gYWZ0ZXJGYWRlT3V0KGVsKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBhZnRlciBjbG9zZSBhbmQgYmVmb3JlIG9wZW4sIHRoZSBkaXNwbGF5IHNob3VsZCBiZSBub25lXG4gICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGNjLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKTtcbiAgICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGZ1bmN0aW9uIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgaG9vayBhbmQgcmV0dXJucyB0cnVlIChpZiBuZWVkZWQpIGFuZCByZXR1cm5zIGZhbHNlIG90aGVyd2lzZVxuICAgIGZ1bmN0aW9uIGNoZWNrQ2FsbGJhY2tIb29rcygpIHtcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gdGhpcy5vcHRpb25zLm9uSW5pdGlhbGl6ZS5iaW5kKHRoaXMpO1xuXG4gICAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3IuY29va2llRW5hYmxlZCkge1xuICAgICAgICBjb21wbGV0ZShjYy5zdGF0dXMuZGVueSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAod2luZG93LkNvb2tpZXNPSyB8fCB3aW5kb3cubmF2aWdhdG9yLkNvb2tpZXNPSykge1xuICAgICAgICBjb21wbGV0ZShjYy5zdGF0dXMuYWxsb3cpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KVxuICAgICAgY29uc3Qgc3RhdHVzZXNWYWx1ZXMgPSB0aGlzLmdldFN0YXR1c2VzKClcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBzdGF0dXNlc1ZhbHVlcy5tYXAoICggc3RhdHVzLCBpbmRleCApID0+ICggeyBbY2F0ZWdvcmllc1tpbmRleF1dOiBpc1ZhbGlkU3RhdHVzKCBzdGF0dXMgKSB9ICkgKVxuICAgICAgY29uc3QgaGFzTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtYXRjaCA9PiBtYXRjaFtPYmplY3Qua2V5cyhtYXRjaClbMF1dICkubGVuZ3RoID4gMFxuICAgICAgc3RhdHVzZXNWYWx1ZXMuZm9yRWFjaCggKCBzdGF0dXMsIGluZGV4ICkgPT4gY2MuY2F0ZWdvcnlbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSA9IHN0YXR1cyA/IHN0YXR1cyA6IGNjLmNhdGVnb3J5WyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gKVxuICAgICAgY29tcGxldGUoIGhhc01hdGNoZXMgPyBzdGF0dXNlc1ZhbHVlcy5tYXAoICggc3RhdHVzLCBpbmRleCApID0+ICggeyBbY2F0ZWdvcmllc1tpbmRleF1dOiBzdGF0dXMgfSApICkgIDogdW5kZWZpbmVkIClcblxuICAgICAgcmV0dXJuIGhhc01hdGNoZXM7XG4gICAgfVxuXG4gICAgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XG4gICAgZnVuY3Rpb24gZ2V0UG9zaXRpb25DbGFzc2VzKCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wb3NpdGlvbi5zcGxpdCggJy0nICkubWFwKCBwb3MgPT4gJ2NjLScrcG9zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBvcHVwQ2xhc3NlcygpIHtcbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBsZXQgcG9zaXRpb25TdHlsZSA9XG4gICAgICAgIG9wdHMucG9zaXRpb24gPT0gJ3RvcCcgfHwgb3B0cy5wb3NpdGlvbiA9PSAnYm90dG9tJ1xuICAgICAgICAgID8gJ2Jhbm5lcidcbiAgICAgICAgICA6ICdmbG9hdGluZyc7XG5cbiAgICAgIGlmICh1dGlsLmlzTW9iaWxlKCkgJiYgb3B0cy5tb2JpbGVGb3JjZUZsb2F0KSB7XG4gICAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICAnY2MtJyArIHBvc2l0aW9uU3R5bGUsIC8vIGZsb2F0aW5nIG9yIGJhbm5lclxuICAgICAgICAnY2MtdHlwZS0nICsgb3B0cy50eXBlLCAvLyBhZGQgdGhlIGNvbXBsaWFuY2UgdHlwZVxuICAgICAgICAnY2MtdGhlbWUtJyArIG9wdHMudGhlbWUsIC8vIGFkZCB0aGUgdGhlbWVcbiAgICAgIF07XG5cbiAgICAgIGlmIChvcHRzLnN0YXRpYykge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLXN0YXRpYycpO1xuICAgICAgfVxuXG4gICAgICBjbGFzc2VzLnB1c2guYXBwbHkoY2xhc3NlcywgZ2V0UG9zaXRpb25DbGFzc2VzLmNhbGwodGhpcykpO1xuXG4gICAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXG4gICAgICBhdHRhY2hDdXN0b21QYWxldHRlLmNhbGwodGhpcywgdGhpcy5vcHRpb25zLnBhbGV0dGUpO1xuXG4gICAgICAvLyBpZiB3ZSBvdmVycmlkZSB0aGUgcGFsZXR0ZSwgYWRkIHRoZSBjbGFzcyB0aGF0IGVuYWJsZXMgdGhpc1xuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UG9wdXBJbm5lck1hcmt1cCgpIHtcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9O1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcblxuICAgICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXG4gICAgICBpZiAoIW9wdHMuc2hvd0xpbmspIHtcbiAgICAgICAgb3B0cy5lbGVtZW50cy5saW5rID0gJyc7IFxuICAgICAgICBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VsaW5rID0gb3B0cy5lbGVtZW50cy5tZXNzYWdlO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcbiAgICAgICAgaW50ZXJwb2xhdGVkW3Byb3BdID0gdXRpbC5pbnRlcnBvbGF0ZVN0cmluZyhcbiAgICAgICAgICBvcHRzLmVsZW1lbnRzW3Byb3BdLFxuICAgICAgICAgIG5hbWUgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RyID0gb3B0cy5jb250ZW50W25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNoZWNrcyBpZiB0aGUgdHlwZSBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gaW5mbyBpZiBpdCdzIG5vdFxuICAgICAgbGV0IGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlW29wdHMudHlwZV07XG4gICAgICBpZiAoIWNvbXBsaWFuY2VUeXBlKSB7XG4gICAgICAgIGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlLmluZm87XG4gICAgICB9XG5cbiAgICAgIC8vIGJ1aWxkIHRoZSBjb21wbGlhbmNlIHR5cGVzIGZyb20gdGhlIGFscmVhZHkgaW50ZXJwb2xhdGVkIGBlbGVtZW50c2BcbiAgICAgIGludGVycG9sYXRlZC5jb21wbGlhbmNlID0gdXRpbC5pbnRlcnBvbGF0ZVN0cmluZyhjb21wbGlhbmNlVHlwZSwgZnVuY3Rpb24oXG4gICAgICAgIG5hbWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGVkW25hbWVdO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNoZWNrcyBpZiB0aGUgbGF5b3V0IGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBiYXNpYyBpZiBpdCdzIG5vdFxuICAgICAgbGV0IGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF07XG4gICAgICBpZiAoIWxheW91dCkge1xuICAgICAgICBsYXlvdXQgPSBvcHRzLmxheW91dHMuYmFzaWM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1dGlsLmludGVycG9sYXRlU3RyaW5nKGxheW91dCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFttYXRjaF07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRNYXJrdXAobWFya3VwKSB7XG4gICAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb25zdCBjb250ID1cbiAgICAgICAgb3B0cy5jb250YWluZXIgJiYgb3B0cy5jb250YWluZXIubm9kZVR5cGUgPT09IDFcbiAgICAgICAgICA/IG9wdHMuY29udGFpbmVyXG4gICAgICAgICAgOiBkb2N1bWVudC5ib2R5O1xuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gbWFya3VwO1xuXG4gICAgICBjb25zdCBlbCA9IGRpdi5jaGlsZHJlblswXTtcblxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2Mtd2luZG93JykgJiYgY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gc2F2ZSByZWYgdG8gdGhlIGZ1bmN0aW9uIGhhbmRsZSBzbyB3ZSBjYW4gdW5iaW5kIGl0IGxhdGVyXG4gICAgICB0aGlzLm9uQnV0dG9uQ2xpY2sgPSBoYW5kbGVCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKCAnLmNjLWJ0biBbdHlwZT1cImNoZWNrYm94XCJdJyApLmZvckVhY2goIGNoZWNrYm94ID0+IHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICBjYy5jYXRlZ29yeVsgY2hlY2tib3gubmFtZSBdID0gY2hlY2tib3guY2hlY2tlZCA/ICdhbGxvdycgOiAnZGVueSdcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKClcbiAgICAgICAgfSlcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZXZlbnQgPT4gKGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpKSApXG4gICAgICB9KVxuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1pbmZvXCIpLmZvckVhY2goIHNob3dJbmZvID0+IHtcbiAgICAgICAgc2hvd0luZm8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICBpZiAoIHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgICkge1xuICAgICAgICAgICAgdGhpcy5ibHVyKClcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLyoqXG4gICAgICAgKiBFdmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBhY2NvcmRpb24gaW4gdGhlIHRvb2x0aXBcbiAgICAgICAqL1xuICAgICAgLyplbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIikuZm9yRWFjaCggYWNjb3JkaW9uTGluayA9PiB7XG4gICAgICAgIGFjY29yZGlvbkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGFjY29yZGlvbkxpbmsubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoIFwib3BlblwiIClcbiAgICAgICAgfSlcbiAgICAgICAgYWNjb3JkaW9uTGluay5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSApXG4gICAgICB9KVxuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy10b29sdGlwXCIpLmZvckVhY2goIHRvb2xUaXAgPT4ge1xuICAgICAgICB0b29sVGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KVxuICAgICAgICB0b29sVGlwLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgKi9cblxuICAgICAgaWYgKG9wdHMuYXV0b0F0dGFjaCkge1xuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnQuaW5zZXJ0QmVmb3JlKGVsLCBjb250LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xuICAgICAgLy8gcmV0dXJucyB0aGUgcGFyZW50IGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIGNsYXNzLCBvciB0aGUgb3JpZ2luYWwgZWxlbWVudCAtIG51bGwgaWYgbm90IGZvdW5kXG4gICAgICBjb25zdCBidG4gPSB1dGlsLnRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXQ7XG4gICAgICBcbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1zYXZlJyApKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxuICAgICAgICAgIG5ldyBSZWdFeHAoJ1xcXFxiY2MtKCcgKyBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLm1hcChzdHIgPT4gc3RyLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhtYXRjaCk7XG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XG4gICAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSSBtaWdodCBjaGFuZ2UgdGhpcyBmdW5jdGlvbiB0byB1c2UgaW5saW5lIHN0eWxlcy4gSSBvcmlnaW5hbGx5IGNob3NlIGEgc3R5bGVzaGVldCBiZWNhdXNlIEkgY291bGQgc2VsZWN0IG1hbnkgZWxlbWVudHMgd2l0aCBhXG4gICAgLy8gc2luZ2xlIHJ1bGUgKHNvbWV0aGluZyB0aGF0IGhhcHBlbmVkIGEgbG90KSwgdGhlIGFwcHMgaGFzIGNoYW5nZWQgc2xpZ2h0bHkgbm93IHRob3VnaCwgc28gaW5saW5lIHN0eWxlcyBtaWdodCBiZSBtb3JlIGFwcGxpY2FibGUuXG4gICAgZnVuY3Rpb24gYXR0YWNoQ3VzdG9tUGFsZXR0ZShwYWxldHRlKSB7XG4gICAgICBjb25zdCBoYXNoID0gdXRpbC5oYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKTtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoO1xuICAgICAgY29uc3QgaXNWYWxpZCA9IHV0aWwuaXNQbGFpbk9iamVjdChwYWxldHRlKTtcblxuICAgICAgdGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yID0gaXNWYWxpZCA/IHNlbGVjdG9yIDogbnVsbDtcblxuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgJy4nICsgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgcHJlZml4KSB7XG4gICAgICAvLyBvbmx5IGFkZCB0aGlzIGlmIGEgc3R5bGUgbGlrZSBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoY2MuY3VzdG9tU3R5bGVzW2hhc2hdKSB7XG4gICAgICAgIC8vIGN1c3RvbSBzdHlsZSBhbHJlYWR5IGV4aXN0cywgc28gaW5jcmVtZW50IHRoZSByZWZlcmVuY2UgY291bnRcbiAgICAgICAgKytjYy5jdXN0b21TdHlsZXNbaGFzaF0ucmVmZXJlbmNlcztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xvclN0eWxlcyA9IHt9O1xuICAgICAgY29uc3QgcG9wdXAgPSBwYWxldHRlLnBvcHVwO1xuICAgICAgY29uc3QgYnV0dG9uID0gcGFsZXR0ZS5idXR0b247XG4gICAgICBjb25zdCBoaWdobGlnaHQgPSBwYWxldHRlLmhpZ2hsaWdodDtcblxuICAgICAgLy8gbmVlZHMgYmFja2dyb3VuZCBjb2xvdXIsIHRleHQgYW5kIGxpbmsgd2lsbCBiZSBzZXQgdG8gYmxhY2svd2hpdGUgaWYgbm90IHNwZWNpZmllZFxuICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIC8vIGFzc3VtZXMgcG9wdXAuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHRcbiAgICAgICAgICA/IHBvcHVwLnRleHRcbiAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZCk7XG4gICAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHQ7XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXVxuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2MtcmV2b2tlJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXTtcbiAgICAgICAgY29sb3JTdHlsZXNbXG4gICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbmssJyArXG4gICAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICAgJyAuY2MtbGluazphY3RpdmUsJyArXG4gICAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICAgJyAuY2MtbGluazp2aXNpdGVkJ1xuICAgICAgICBdID0gWydjb2xvcjogJyArIHBvcHVwLmxpbmtdO1xuXG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHRcbiAgICAgICAgICAgID8gYnV0dG9uLnRleHRcbiAgICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChidXR0b24uYmFja2dyb3VuZCk7XG4gICAgICAgICAgYnV0dG9uLmJvcmRlciA9IGJ1dHRvbi5ib3JkZXIgPyBidXR0b24uYm9yZGVyIDogJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXSA9IFtcbiAgICAgICAgICAgICdjb2xvcjogJyArIGJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGJ1dHRvbi5iYWNrZ3JvdW5kXG4gICAgICAgICAgXTtcblxuICAgICAgICAgIGlmIChidXR0b24ucGFkZGluZykge1xuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10ucHVzaCgncGFkZGluZzogJyArIGJ1dHRvbi5wYWRkaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnV0dG9uLmJhY2tncm91bmQgIT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAgICAgY29sb3JTdHlsZXNbXG4gICAgICAgICAgICAgIHByZWZpeCArICcgLmNjLWJ0bjpob3ZlciwgJyArIHByZWZpeCArICcgLmNjLWJ0bjpmb2N1cydcbiAgICAgICAgICAgIF0gPSBbXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICtcbiAgICAgICAgICAgICAgICAoYnV0dG9uLmhvdmVyIHx8IGdldEhvdmVyQ29sb3VyKGJ1dHRvbi5iYWNrZ3JvdW5kKSlcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgLy9hc3N1bWVzIGhpZ2hsaWdodC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgICAgaGlnaGxpZ2h0LnRleHQgPSBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICA/IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChoaWdobGlnaHQuYmFja2dyb3VuZCk7XG4gICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlclxuICAgICAgICAgICAgICA/IGhpZ2hsaWdodC5ib3JkZXJcbiAgICAgICAgICAgICAgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgaGlnaGxpZ2h0LnRleHQsXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBoaWdobGlnaHQuYm9yZGVyLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGhpZ2hsaWdodC5iYWNrZ3JvdW5kXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzZXRzIGhpZ2hsaWdodCB0ZXh0IGNvbG9yIHRvIHBvcHVwIHRleHQuIGJhY2tncm91bmQgYW5kIGJvcmRlciBhcmUgdHJhbnNwYXJlbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHRcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgd2lsbCBiZSBpbnRlcnByZXR0ZWQgYXMgQ1NTLiB0aGUga2V5IGlzIHRoZSBzZWxlY3RvciwgYW5kIGVhY2ggYXJyYXkgZWxlbWVudCBpcyBhIHJ1bGVcbiAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgICAvLyBjdXN0b20gc3R5bGUgZG9lc24ndCBleGlzdCwgc28gd2UgY3JlYXRlIGl0XG4gICAgICBjYy5jdXN0b21TdHlsZXNbaGFzaF0gPSB7XG4gICAgICAgIHJlZmVyZW5jZXM6IDEsXG4gICAgICAgIGVsZW1lbnQ6IHN0eWxlLnNoZWV0XG4gICAgICB9O1xuXG4gICAgICBsZXQgcnVsZUluZGV4ID0gLTE7XG4gICAgICBmb3IgKGxldCBwcm9wIGluIGNvbG9yU3R5bGVzKSB7XG4gICAgICAgIGlmIChjb2xvclN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICAgICBwcm9wICsgJ3snICsgY29sb3JTdHlsZXNbcHJvcF0uam9pbignOycpICsgJ30nLFxuICAgICAgICAgICAgKytydWxlSW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SG92ZXJDb2xvdXIoaGV4KSB7XG4gICAgICBoZXggPSB1dGlsLm5vcm1hbGlzZUhleChoZXgpO1xuICAgICAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcbiAgICAgIGlmIChoZXggPT0gJzAwMDAwMCcpIHtcbiAgICAgICAgcmV0dXJuICcjMjIyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiB1dGlsLmdldEx1bWluYW5jZShoZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUN1c3RvbVN0eWxlKHBhbGV0dGUpIHtcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3QocGFsZXR0ZSkpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IHV0aWwuaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSk7XG4gICAgICAgIGNvbnN0IGN1c3RvbVN0eWxlID0gY2MuY3VzdG9tU3R5bGVzW2hhc2hdO1xuICAgICAgICBpZiAoY3VzdG9tU3R5bGUgJiYgIS0tY3VzdG9tU3R5bGUucmVmZXJlbmNlcykge1xuICAgICAgICAgIGNvbnN0IHN0eWxlTm9kZSA9IGN1c3RvbVN0eWxlLmVsZW1lbnQub3duZXJOb2RlO1xuICAgICAgICAgIGlmIChzdHlsZU5vZGUgJiYgc3R5bGVOb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN0eWxlTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNjLmN1c3RvbVN0eWxlc1toYXNoXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUF1dG9EaXNtaXNzKCkge1xuICAgICAgY29uc3Qgc2V0U3RhdHVzZXMgPSB0aGlzLnNldFN0YXR1c2VzLmJpbmQodGhpcyk7XG4gICAgICBjb25zdCBjbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgICAgY29uc3QgZGVsYXkgPSB0aGlzLm9wdGlvbnMuZGlzbWlzc09uVGltZW91dDtcbiAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT0gJ251bWJlcicgJiYgZGVsYXkgPj0gMCkge1xuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICAgIGNsb3NlKHRydWUpO1xuICAgICAgICB9LCBNYXRoLmZsb29yKGRlbGF5KSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFJhbmdlID0gdGhpcy5vcHRpb25zLmRpc21pc3NPblNjcm9sbDtcbiAgICAgIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xuICAgICAgICBjb25zdCBvbldpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICAgICAgY2xvc2UodHJ1ZSk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBvbldpbmRvd1Njcm9sbDtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB3aW5kb3dDbGljayA9IHRoaXMub3B0aW9ucy5kaXNtaXNzT25XaW5kb3dDbGljaztcbiAgICAgIGNvbnN0IGlnbm9yZWRDbGlja3MgPSB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbTtcbiAgICAgIFxuICAgICAgaWYgKHdpbmRvd0NsaWNrKSB7XG4gICAgICAgIGNvbnN0IG9uV2luZG93Q2xpY2sgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBjb25zdCBwYXRoID0gZXZ0LmNvbXBvc2VkUGF0aCA/IGV2dC5jb21wb3NlZFBhdGgoKSA6IChmdW5jdGlvbiAoIGFyciwgZWxlbWVudCApIHtcbiAgICAgICAgICAgIHdoaWxlICggZWxlbWVudCApIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goIGVsZW1lbnQgKVxuICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgICAgfSkoW10sZXZ0LnRhcmdldCApXG4gICAgICAgICAgaWYgKCAhcGF0aCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoICFwYXRoLnNvbWUoIGVsZW1lbnQgPT4gaWdub3JlZENsaWNrcy5zb21lKCBpZ25vcmVkQ2xpY2sgPT4gZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApICkgKSApIHtcbiAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKVxuICAgICAgICAgICAgY2xvc2UodHJ1ZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gb25XaW5kb3dDbGljaztcblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlSZXZva2VCdXR0b24oKSB7XG4gICAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgIT0gJ2luZm8nKSB0aGlzLm9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZTtcbiAgICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICBjb25zdCBjbGFzc2VzID0gZ2V0UG9zaXRpb25DbGFzc2VzLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnY2MtYW5pbWF0ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy10aGVtZS0nK3RoaXMub3B0aW9ucy50aGVtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJldm9rZUJ0biA9IHRoaXMub3B0aW9ucy5yZXZva2VCdG5cbiAgICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBjbGFzc2VzLmpvaW4oJyAnKSlcbiAgICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSk7XG5cbiAgICAgICAgdGhpcy5yZXZva2VCdG4gPSBhcHBlbmRNYXJrdXAuY2FsbCh0aGlzLCByZXZva2VCdG4pO1xuXG4gICAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjb25zdCBvbk1vdXNlTW92ZSA9IHV0aWwudGhyb3R0bGUoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBtaW5ZID0gMjA7XG4gICAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjA7XG5cbiAgICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XG4gICAgICAgICAgICAgICAgICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJvdHRvbScgKSAmJiBldnQuY2xpZW50WSA+IG1heFkgKSApIHtcbiAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlICYmICFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAhYWN0aXZlICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgICAgdGhpcy5vbk1vdXNlTW92ZSA9IG9uTW91c2VNb3ZlO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gQ29va2llUG9wdXA7XG4gIH0pKCk7XG5cbiAgY2MuTG9jYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgLy8gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcyB3ZSBoYXZlIGFscmVhZHkgc2V0IHVwLlxuICAgIC8vIFdoZW4gdXNpbmcgYSBzZXJ2aWNlLCBpdCBjb3VsZCBlaXRoZXIgcmV0dXJuIGEgZGF0YSBzdHJ1Y3R1cmUgaW4gcGxhaW4gdGV4dCAobGlrZSBhIEpTT04gb2JqZWN0KSBvciBhbiBleGVjdXRhYmxlIHNjcmlwdFxuICAgIC8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbiAgICAvLyBXaGVuIHRoZSBzZXJ2aWNlIHVzZXMgYSBzY3JpcHQsIHRoZSBjaGFuY2VzIGFyZSB0aGF0IHlvdSdsbCBoYXZlIHRvIHVzZSB0aGUgc2NyaXB0IHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cy4gSW4gdGhlc2VcbiAgICAvLyBjYXNlcywgdGhlIHNlcnZpY2VzIGBjYWxsYmFja2AgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBgZG9uZWAgZnVuY3Rpb24uIFdoZW4gcGVyZm9ybWluZyBhc3luYyBvcGVyYXRpb25zLCB0aGlzIG11c3QgYmUgY2FsbGVkXG4gICAgLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gVGhlIGRlZmF1bHQgdGltZW91dCBpcyA1IHNlY29uZHMuIFRoaXMgaXMgbWFpbmx5IG5lZWRlZCB0byBjYXRjaCBKU09OUCByZXF1ZXN0cyB0aGF0IGVycm9yLlxuICAgICAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxuICAgICAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cbiAgICAgIHRpbWVvdXQ6IDUwMDAsXG5cbiAgICAgIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXG4gICAgICBzZXJ2aWNlczogW1xuICAgICAgICAnaXBpbmZvJ1xuXG4gICAgICAgIC8qXG5cbiAgICAgICAgLy8gJ2lwaW5mb2RiJyByZXF1aXJlcyBzb21lIG9wdGlvbnMsIHNvIHdlIGRlZmluZSBpdCB1c2luZyBhbiBvYmplY3RcbiAgICAgICAgLy8gdGhpcyBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uIHRoYXQgZGVmaW5lcyB0aGUgc2VydmljZVxuXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnaXBpbmZvZGInLFxuICAgICAgICAgIGludGVycG9sYXRlVXJsOiB7XG4gICAgICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XG5cbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ307XG4gICAgICAgIH0sXG5cbiAgICAgICAgKi9cbiAgICAgIF0sXG5cbiAgICAgIHNlcnZpY2VEZWZpbml0aW9uczoge1xuICAgICAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IFsnQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcihqc29uKVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlcXVpcmVzIGFuIG9wdGlvbiB0byBkZWZpbmUgYGtleWAuIE9wdGlvbnMgYXJlIHByb2l2ZWQgdXNpbmcgb2JqZWN0cyBvciBmdW5jdGlvbnNcbiAgICAgICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgICAgIHVybDpcbiAgICAgICAgICAgICAgJy8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxuICAgICAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgaXMgSlNPTlAsIHRoZXJlZm9yZSB3ZSBtdXN0IHNldCBpdCB0byBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcih7ZXJyb3I6IGpzb24uc3RhdHVzTWVzc2FnZX0pXG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlIHdoaWNoIGRlZmluZXMgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5LiBPbmNlIGxvYWRlZCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSwgc28gaXQgbXVzdCBiZSBydW4gYXMgYSBzY3JpcHRcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgIGlmICghd2luZG93Lmdlb2lwMikge1xuICAgICAgICAgICAgICAgIGRvbmUoXG4gICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdVbmV4cGVjdGVkIHJlc3BvbnNlIGZvcm1hdC4gVGhlIGRvd25sb2FkZWQgc2NyaXB0IHNob3VsZCBoYXZlIGV4cG9ydGVkIGBnZW9pcDJgIHRvIHRoZSBnbG9iYWwgc2NvcGUnXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBnZW9pcDIuY291bnRyeShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZTogbG9jYXRpb24uY291bnRyeS5pc29fY29kZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxuICAgICAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTG9jYXRpb24ob3B0aW9ucykge1xuICAgICAgLy8gU2V0IHVwIG9wdGlvbnNcbiAgICAgIHV0aWwuZGVlcEV4dGVuZCgodGhpcy5vcHRpb25zID0ge30pLCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xOyAvLyB0aGUgaW5kZXggKGluIG9wdGlvbnMpIG9mIHRoZSBzZXJ2aWNlIHdlJ3JlIGN1cnJlbnRseSB1c2luZ1xuICAgIH1cblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXROZXh0U2VydmljZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHNlcnZpY2U7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KCsrdGhpcy5jdXJyZW50U2VydmljZUluZGV4KTtcbiAgICAgIH0gd2hpbGUgKFxuICAgICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPCB0aGlzLm9wdGlvbnMuc2VydmljZXMubGVuZ3RoICYmXG4gICAgICAgICFzZXJ2aWNlXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gc2VydmljZTtcbiAgICB9O1xuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmdldFNlcnZpY2VCeUlkeCA9IGZ1bmN0aW9uKGlkeCkge1xuICAgICAgLy8gVGhpcyBjYW4gZWl0aGVyIGJlIHRoZSBuYW1lIG9mIGEgZGVmYXVsdCBsb2NhdGlvblNlcnZpY2UsIG9yIGEgZnVuY3Rpb24uXG4gICAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF07XG5cbiAgICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGR5bmFtaWNPcHRzID0gc2VydmljZU9wdGlvbigpO1xuICAgICAgICByZXR1cm4gZHluYW1pY09wdHMubmFtZSA/IFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGR5bmFtaWNPcHRzLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXG4gICAgICAgICAgKSA6IGR5bmFtaWNPcHRzO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbl0oKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhbiBvYmplY3QsIGFzc3VtZSB7bmFtZTogJ2lwaW5mbycsIC4uLm90aGVyT3B0aW9uc31cbiAgICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChzZXJ2aWNlT3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxuICAgICAgICAgIHNlcnZpY2VPcHRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cbiAgICAvLyBJZiB0aGUgc2VydmljZSBmYWlscywgYHJ1bk5leHRTZXJ2aWNlT25FcnJvcmAgd2lsbCBjb250aW51ZSB0cnlpbmcgZWFjaCBzZXJ2aWNlIHVudGlsIGFsbCBmYWlsLCBvciBvbmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2NhdGUgPSBmdW5jdGlvbihjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKCk7XG5cbiAgICAgIGlmICghc2VydmljZSkge1xuICAgICAgICBlcnJvcihuZXcgRXJyb3IoJ05vIHNlcnZpY2VzIHRvIHJ1bicpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbGxiYWNrQ29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgIHRoaXMuY2FsbGJhY2tFcnJvciA9IGVycm9yO1xuXG4gICAgICB0aGlzLnJ1blNlcnZpY2Uoc2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgfTtcblxuICAgIC8vIFBvdGVudGlhbGx5IGFkZHMgYSBjYWxsYmFjayB0byBhIHVybCBmb3IganNvbnAuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnNldHVwVXJsID0gZnVuY3Rpb24oc2VydmljZSkge1xuICAgICAgY29uc3Qgc2VydmljZU9wdHMgPSB0aGlzLmdldEN1cnJlbnRTZXJ2aWNlT3B0cygpO1xuICAgICAgcmV0dXJuIHNlcnZpY2UudXJsLnJlcGxhY2UoL1xceyguKj8pXFx9L2csIGZ1bmN0aW9uKF8sIHBhcmFtKSB7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gJ2NhbGxiYWNrJykge1xuICAgICAgICAgIGNvbnN0IHRlbXBOYW1lID0gJ2NhbGxiYWNrJyArIERhdGUubm93KCk7XG4gICAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIHRlbXBOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbSBpbiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybCkge1xuICAgICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyByZXF1aXJlcyBhIGBzZXJ2aWNlYCBvYmplY3QgdGhhdCBkZWZpbmVzIGF0IGxlYXN0IGEgYHVybGAgYW5kIGBjYWxsYmFja2BcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuU2VydmljZSA9IGZ1bmN0aW9uKHNlcnZpY2UsIGNvbXBsZXRlKSB7XG4gICAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxuICAgICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3Q7XG5cbiAgICAgIC8vIGJvdGggZnVuY3Rpb25zIGhhdmUgc2ltaWxhciBzaWduYXR1cmVzIHNvIHdlIGNhbiBwYXNzIHRoZSBzYW1lIGFyZ3VtZW50cyB0byBib3RoXG4gICAgICByZXF1ZXN0RnVuY3Rpb24oXG4gICAgICAgIHRoaXMuc2V0dXBVcmwoc2VydmljZSksXG4gICAgICAgIHhociA9PiB7XG4gICAgICAgICAgLy8gaWYgYCF4aHJgLCB0aGVuIGBnZXRTY3JpcHRgIGZ1bmN0aW9uIHdhcyB1c2VkLCBzbyB0aGVyZSBpcyBubyByZXNwb25zZSB0ZXh0XG4gICAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IHhociA/IHhoci5yZXNwb25zZVRleHQgOiAnJztcblxuICAgICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cbiAgICAgICAgICAvLyBpZiB0aGUgc2NyaXB0IGlzIEpTT05QLCB0aGVuIGEgdGltZSBkZWZpbmVkIGZ1bmN0aW9uIGBjYWxsYmFja197RGF0ZS5ub3d9YCBoYXMgYWxyZWFkeVxuICAgICAgICAgIC8vIGJlZW4gY2FsbGVkIChhcyB0aGUgSlNPTlAgY2FsbGJhY2spLiBUaGlzIGNhbGxiYWNrIHNldHMgdGhlIF9fSlNPTlBfREFUQSBwcm9wZXJ0eVxuICAgICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0gc2VydmljZS5fX0pTT05QX0RBVEE7XG4gICAgICAgICAgICBkZWxldGUgc2VydmljZS5fX0pTT05QX0RBVEE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY2FsbCB0aGUgc2VydmljZSBjYWxsYmFjayB3aXRoIHRoZSByZXNwb25zZSB0ZXh0IChzbyBpdCBjYW4gcGFyc2UgdGhlIHJlc3BvbnNlKVxuICAgICAgICAgIHRoaXMucnVuU2VydmljZUNhbGxiYWNrLmNhbGwodGhpcywgY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMub3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBzZXJ2aWNlLmRhdGEsXG4gICAgICAgIHNlcnZpY2UuaGVhZGVyc1xuICAgICAgKTtcblxuICAgICAgLy8gYHNlcnZpY2UuZGF0YWAgYW5kIGBzZXJ2aWNlLmhlYWRlcnNgIGFyZSBvcHRpb25hbCAodGhleSBvbmx5IGNvdW50IGlmIGAhc2VydmljZS5pc1NjcmlwdGAgYW55d2F5KVxuICAgIH07XG5cbiAgICAvLyBUaGUgc2VydmljZSByZXF1ZXN0IGhhcyBydW4gKGFuZCBwb3NzaWJseSBoYXMgYSBgcmVzcG9uc2VUZXh0YCkgW25vIGByZXNwb25zZVRleHRgIGlmIGBpc1NjcmlwdGBdXG4gICAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XG4gICAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1blNlcnZpY2VDYWxsYmFjayA9IGZ1bmN0aW9uKFxuICAgICAgY29tcGxldGUsXG4gICAgICBzZXJ2aWNlLFxuICAgICAgcmVzcG9uc2VUZXh0XG4gICAgKSB7XG4gICAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgc2VydmljZSB1c2VzIHRoZSBhc3luYyBjYWxsYmFjayBpbiBpdHMgaGFuZGxlciBtZXRob2RcbiAgICAgIGNvbnN0IHNlcnZpY2VSZXN1bHRIYW5kbGVyID0gYXN5bmNSZXN1bHQgPT4ge1xuICAgICAgICAvLyBpZiBgcmVzdWx0YCBpcyBhIHZhbGlkIHZhbHVlLCB0aGVuIHRoaXMgZnVuY3Rpb24gc2hvdWxkbid0IHJlYWxseSBydW5cbiAgICAgICAgLy8gZXZlbiBpZiBpdCBpcyBjYWxsZWQgYnkgYHNlcnZpY2UuY2FsbGJhY2tgXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQuY2FsbCh0aGlzLCBjb21wbGV0ZSwgYXN5bmNSZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcbiAgICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNlcnZpY2UuY2FsbGJhY2soc2VydmljZVJlc3VsdEhhbmRsZXIsIHJlc3BvbnNlVGV4dCk7XG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQuY2FsbCh0aGlzLCBjb21wbGV0ZSwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgd2l0aCB0aGUgYHJlc3VsdGAgZnJvbSBgc2VydmljZS5jYWxsYmFja2AgcmVnYXJkbGVzcyBvZiBob3cgaXQgcHJvdmlkZWQgdGhhdCByZXN1bHQgKHN5bmMgb3IgYXN5bmMpLlxuICAgIC8vIGByZXN1bHRgIHdpbGwgYmUgd2hhdGV2ZXIgaXMgcmV0dXJuZWQgZnJvbSBgc2VydmljZS5jYWxsYmFja2AuIEEgc2VydmljZSBjYWxsYmFjayBzaG91bGQgcHJvdmlkZSBhbiBvYmplY3Qgd2l0aCBkYXRhXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLm9uU2VydmljZVJlc3VsdCA9IGZ1bmN0aW9uKGNvbXBsZXRlLCByZXN1bHQpIHtcbiAgICAgIC8vIGNvbnZlcnQgcmVzdWx0IHRvIG5vZGVqcyBzdHlsZSBhc3luYyBjYWxsYmFja1xuICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yIHx8IChyZXN1bHQgJiYgcmVzdWx0LmVycm9yKSkge1xuICAgICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIHJlc3VsdCwgbnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGlmIGBlcnJgIGlzIHNldCwgdGhlIG5leHQgc2VydmljZSBoYW5kbGVyIGlzIGNhbGxlZFxuICAgIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuTmV4dFNlcnZpY2VPbkVycm9yID0gZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRoaXMubG9nRXJyb3IoZXJyKTtcblxuICAgICAgICBjb25zdCBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKTtcblxuICAgICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja0Vycm9yLFxuICAgICAgICAgICAgbmV3IEVycm9yKCdBbGwgc2VydmljZXMgZmFpbGVkJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRDdXJyZW50U2VydmljZU9wdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXG5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7bmFtZTogdmFsfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHZhbCgpXG4gICAgICB9ZWxzZSBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgYWZ0ZXIgcmVzZXR0aW5nIHRoZSBgY3VycmVudFNlcnZpY2VJbmRleGBcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuY29tcGxldGVTZXJ2aWNlID0gZnVuY3Rpb24oZm4sIGRhdGEpIHtcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xO1xuXG4gICAgICBmbiAmJiBmbihkYXRhKTtcbiAgICB9O1xuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmxvZ0Vycm9yID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zdCBpZHggPSB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXg7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoaWR4KTtcblxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnVGhlIHNlcnZpY2VbJyArXG4gICAgICAgICAgaWR4ICtcbiAgICAgICAgICAnXSAoJyArXG4gICAgICAgICAgc2VydmljZS51cmwgK1xuICAgICAgICAgICcpIHJlc3BvbmRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3InLFxuICAgICAgICBlcnJcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFNjcmlwdCh1cmwsIGNhbGxiYWNrLCB0aW1lb3V0KSB7XG4gICAgICBsZXQgdGltZW91dElkeDtcbiAgICAgIGNvbnN0IHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgcy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpO1xuICAgICAgcy5zcmMgPSB1cmwuc3JjIHx8IHVybDtcbiAgICAgIHMuYXN5bmMgPSBmYWxzZTtcblxuICAgICAgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgIGNvbnN0IHN0YXRlID0gcy5yZWFkeVN0YXRlO1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWR4KTtcblxuICAgICAgICBpZiAoIWNhbGxiYWNrLmRvbmUgJiYgKCFzdGF0ZSB8fCAvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KHN0YXRlKSkpIHtcbiAgICAgICAgICBjYWxsYmFjay5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuXG4gICAgICAvLyBZb3UgY2FuJ3QgY2F0Y2ggSlNPTlAgRXJyb3JzLCBiZWNhdXNlIGl0J3MgaGFuZGxlZCBieSB0aGUgc2NyaXB0IHRhZ1xuICAgICAgLy8gb25lIHdheSBpcyB0byB1c2UgYSB0aW1lb3V0XG4gICAgICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWU7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUFzeW5jUmVxdWVzdChcbiAgICAgIHVybCxcbiAgICAgIG9uQ29tcGxldGUsXG4gICAgICB0aW1lb3V0LFxuICAgICAgcG9zdERhdGEsXG4gICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICkge1xuICAgICAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxuICAgICAgICAnTVNYTUwyLlhNTEhUVFAuMy4wJ1xuICAgICAgKTtcblxuICAgICAgeGhyLm9wZW4ocG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKTtcblxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMykge1xuICAgICAgICAgICAgb25Db21wbGV0ZSh4aHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQocG9zdERhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvRXJyb3Iob2JqKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdFcnJvciBbJyArIChvYmouY29kZSB8fCAnVU5LTk9XTicpICsgJ106ICcgKyBvYmouZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBMb2NhdGlvbjtcbiAgfSkoKTtcblxuICBjYy5MYXcgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cbiAgICAgIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cbiAgICAgIC8vIEl0IGRvZXMgbm90IGFmZmVjdCBoaWRpbmcgdGhlIHBvcHVwIGZvciBjb3VudHJpZXMgdGhhdCBkbyBub3QgaGF2ZSBjb29raWUgbGF3LlxuICAgICAgcmVnaW9uYWxMYXc6IHRydWUsXG5cbiAgICAgIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xuICAgICAgaGFzTGF3OiBbXG4gICAgICAgICdBVCcsXG4gICAgICAgICdCRScsXG4gICAgICAgICdCRycsXG4gICAgICAgICdIUicsXG4gICAgICAgICdDWicsXG4gICAgICAgICdDWScsXG4gICAgICAgICdESycsXG4gICAgICAgICdFRScsXG4gICAgICAgICdGSScsXG4gICAgICAgICdGUicsXG4gICAgICAgICdERScsXG4gICAgICAgICdFTCcsXG4gICAgICAgICdIVScsXG4gICAgICAgICdJRScsXG4gICAgICAgICdJVCcsXG4gICAgICAgICdMVicsXG4gICAgICAgICdMVCcsXG4gICAgICAgICdMVScsXG4gICAgICAgICdNVCcsXG4gICAgICAgICdOTCcsXG4gICAgICAgICdOTycsXG4gICAgICAgICdQTCcsXG4gICAgICAgICdQVCcsXG4gICAgICAgICdTSycsXG4gICAgICAgICdFUycsXG4gICAgICAgICdTRScsXG4gICAgICAgICdHQicsXG4gICAgICAgICdVSycsXG4gICAgICAgICdHUicsXG4gICAgICAgICdFVScsXG4gICAgICAgICdSTydcbiAgICAgIF0sXG5cbiAgICAgIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGFsbCBjb29raWUgY29uc2VudCBjaG9pY2VzIG11c3QgYmUgcmV2b2thYmxlIChhIHVzZXIgbXVzdCBiZSBhYmxlIHRvbyBjaGFuZ2UgdGhlaXIgbWluZClcbiAgICAgIHJldm9rYWJsZTogW1xuICAgICAgICAnSFInLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnRVMnXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhIHBlcnNvbiBjYW4gb25seSBcImNvbnNlbnRcIiBpZiB0aGUgZXhwbGljaXRseSBjbGljayBvbiBcIkkgYWdyZWVcIi5cbiAgICAgIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXG4gICAgICBleHBsaWNpdEFjdGlvbjogWydIUicsICdJVCcsICdFUycsICdOTyddXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExhdyhvcHRpb25zKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBMYXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBzZXQgb3B0aW9ucyBiYWNrIHRvIGRlZmF1bHQgb3B0aW9uc1xuICAgICAgdXRpbC5kZWVwRXh0ZW5kKCh0aGlzLm9wdGlvbnMgPSB7fSksIGRlZmF1bHRPcHRpb25zIClcblxuICAgICAgLy8gbWVyZ2UgaW4gdXNlciBvcHRpb25zXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuICAgIH07XG5cbiAgICBMYXcucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGNvdW50cnlDb2RlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNMYXc6IHRoaXMub3B0aW9ucy5oYXNMYXcuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgICAgcmV2b2thYmxlOiB0aGlzLm9wdGlvbnMucmV2b2thYmxlLmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIGV4cGxpY2l0QWN0aW9uOiB0aGlzLm9wdGlvbnMuZXhwbGljaXRBY3Rpb24uaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5hcHBseUxhdyA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvdW50cnlDb2RlKSB7XG4gICAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpO1xuXG4gICAgICBpZiAoIWNvdW50cnkuaGFzTGF3KSB7XG4gICAgICAgIC8vIFRoZSBjb3VudHJ5IGhhcyBubyBjb29raWUgbGF3XG4gICAgICAgIG9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Ob0Nvb2tpZUxhdyhjb3VudHJ5Q29kZSwgY291bnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZWdpb25hbExhdykge1xuICAgICAgICBpZiAoY291bnRyeS5yZXZva2FibGUpIHtcbiAgICAgICAgICAvLyBXZSBtdXN0IHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJldm9rZSBjb25zZW50IGF0IGEgbGF0ZXIgdGltZVxuICAgICAgICAgIG9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb3VudHJ5LmV4cGxpY2l0QWN0aW9uKSB7XG4gICAgICAgICAgLy8gVGhlIHVzZXIgbXVzdCBleHBsaWNpdGx5IGNsaWNrIHRoZSBjb25zZW50IGJ1dHRvblxuICAgICAgICAgIG9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGF3O1xuICB9KSgpO1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXG4gIC8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cbiAgY2MuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGNvbnN0IGxhdyA9IG5ldyBjYy5MYXcob3B0aW9ucy5sYXcpO1xuXG4gICAgaWYgKCFjb21wbGV0ZSkgY29tcGxldGUgPSBmdW5jdGlvbigpIHt9O1xuICAgIGlmICghZXJyb3IpIGVycm9yID0gZnVuY3Rpb24oKSB7fTtcblxuICAgIGNvbnN0IGFuc3dlcnMgPSBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkubWFwKCBjYXRlZ29yeSA9PiB7XG4gICAgICBjb25zdCBhbnN3ZXIgPSB1dGlsLmdldENvb2tpZSgnY29va2llY29uc2VudF9zdGF0dXNfJytjYXRlZ29yeSlcbiAgICAgIHJldHVybiBpc1ZhbGlkU3RhdHVzKGFuc3dlcikgPyB7IFtjYXRlZ29yeV06IGFuc3dlciB9IDogdW5kZWZpbmVkXG4gICAgfSkuZmlsdGVyKG9iaiA9PiBvYmogPyBvYmpbT2JqZWN0LmtleXMob2JqKVswXV0gOiBmYWxzZSk7XG5cbiAgICAvLyBpZiB0aGV5IGhhdmUgYWxyZWFkeSBhbnN3ZXJlZFxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbXBsZXRlKGFuc3dlcnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNjLmdldENvdW50cnlDb2RlKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRoZSBsYXcgb3IgbG9jYXRpb24gb3B0aW9ucyBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxhdztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubG9jYXRpb247XG5cbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlKSB7XG4gICAgICAgICAgb3B0aW9ucyA9IGxhdy5hcHBseUxhdyhvcHRpb25zLCByZXN1bHQuY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wbGV0ZShuZXcgY2MuUG9wdXAob3B0aW9ucykpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAvLyBkb24ndCBuZWVkIHRoZSBsYXcgb3IgbG9jYXRpb24gb3B0aW9ucyBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxhdztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubG9jYXRpb247XG5cbiAgICAgICAgZXJyb3IoZXJyLCBuZXcgY2MuUG9wdXAob3B0aW9ucykpO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB0cmllcyB0byBmaW5kIHlvdXIgY3VycmVudCBsb2NhdGlvbi4gSXQgZWl0aGVyIGdyYWJzIGl0IGZyb20gYSBoYXJkY29kZWQgb3B0aW9uIGluXG4gIC8vIGBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZWAsIG9yIGF0dGVtcHRzIHRvIG1ha2UgYSBsb2NhdGlvbiBzZXJ2aWNlIHJlcXVlc3QuIFRoaXMgZnVuY3Rpb24gYWNjZXB0c1xuICAvLyBvcHRpb25zICh3aGljaCBjYW4gY29uZmlndXJlIHRoZSBgbGF3YCBhbmQgYGxvY2F0aW9uYCBtb2R1bGVzKSBhbmQgZmlyZXMgYSBjYWxsYmFjayB3aXRoIHdoaWNoXG4gIC8vIHBhc3NlcyBhbiBvYmplY3QgYHtjb2RlOiBjb3VudHJ5Q29kZX1gIGFzIHRoZSBmaXJzdCBhcmd1bWVudCAod2hpY2ggY2FuIGhhdmUgdW5kZWZpbmVkIHByb3BlcnRpZXMpXG4gIGNjLmdldENvdW50cnlDb2RlID0gZnVuY3Rpb24ob3B0aW9ucywgY29tcGxldGUsIGVycm9yKSB7XG4gICAgaWYgKG9wdGlvbnMubGF3ICYmIG9wdGlvbnMubGF3LmNvdW50cnlDb2RlKSB7XG4gICAgICBjb21wbGV0ZSh7XG4gICAgICAgIGNvZGU6IG9wdGlvbnMubGF3LmNvdW50cnlDb2RlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMubG9jYXRpb24pIHtcbiAgICAgIGNvbnN0IGxvY2F0b3IgPSBuZXcgY2MuTG9jYXRpb24ob3B0aW9ucy5sb2NhdGlvbik7XG4gICAgICBsb2NhdG9yLmxvY2F0ZShmdW5jdGlvbihzZXJ2aWNlUmVzdWx0KSB7XG4gICAgICAgIGNvbXBsZXRlKHNlcnZpY2VSZXN1bHQgfHwge30pO1xuICAgICAgfSwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb21wbGV0ZSh7fSk7XG4gIH07XG5cbiAgLy8gZXhwb3J0IHV0aWxzIChubyBwb2ludCBpbiBoaWRpbmcgdGhlbSwgc28gd2UgbWF5IGFzIHdlbGwgZXhwb3NlIHRoZW0pXG4gIGNjLnV0aWxzID0gdXRpbDtcblxuICAvLyBwcmV2ZW50IHRoaXMgY29kZSBmcm9tIGJlaW5nIHJ1biB0d2ljZVxuICBjYy5oYXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgd2luZG93LmNvb2tpZWNvbnNlbnQgPSBjYztcbn0pKHdpbmRvdy5jb29raWVjb25zZW50IHx8IHt9KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=