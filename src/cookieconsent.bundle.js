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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzA1M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImRlZXBFeHRlbmQiLCJ0YXJnZXQiLCJzb3VyY2UiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJpc1BsYWluT2JqZWN0IiwiZ2V0Q29va2llIiwibmFtZSIsInZhbHVlIiwiZG9jdW1lbnQiLCJjb29raWUiLCJwYXJ0cyIsInNwbGl0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9wIiwic2hpZnQiLCJzZXRDb29raWUiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsImV4ZGF0ZSIsIkRhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwidG9VVENTdHJpbmciLCJ0aHJvdHRsZSIsImxpbWl0Iiwid2FpdCIsImFwcGx5Iiwic2V0VGltZW91dCIsImhhc2giLCJpIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGlzZUhleCIsImhleCIsInN1YnN0ciIsImdldENvbnRyYXN0IiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJnZXRMdW1pbmFuY2UiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwiaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50Iiwib2JqIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJ0cmF2ZXJzZURPTVBhdGgiLCJlbGVtIiwiY2xhc3NOYW1lIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic3RhdHVzIiwiZGVueSIsImFsbG93IiwiZGlzbWlzcyIsImNhdGVnb3J5IiwidW5jYXRlZ29yaXplZCIsImVzc2VudGlhbCIsInBlcnNvbmFsaXphdGlvbiIsImFuYWx5dGljcyIsIm1hcmtldGluZyIsImlzVmFsaWRTdGF0dXMiLCJrZXlzIiwiaW5kZXhPZiIsInRyYW5zaXRpb25FbmQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4Iiwic3R5bGUiLCJoYXNUcmFuc2l0aW9uIiwiY3VzdG9tU3R5bGVzIiwiUG9wdXAiLCJkZWZhdWx0T3B0aW9ucyIsImVuYWJsZWQiLCJjb250YWluZXIiLCJvblBvcHVwT3BlbiIsIm9uUG9wdXBDbG9zZSIsIm9uSW5pdGlhbGl6ZSIsInN0YXR1c2VzIiwib25TdGF0dXNDaGFuZ2UiLCJjb29raWVOYW1lIiwiY2hvc2VuQmVmb3JlIiwib25SZXZva2VDaG9pY2UiLCJvbk5vQ29va2llTGF3IiwiY291bnRyeUNvZGUiLCJjb3VudHJ5IiwiY29udGVudCIsImhlYWRlciIsIm1lc3NhZ2UiLCJsaW5rIiwiaHJlZiIsImNsb3NlIiwicG9saWN5IiwiZWxlbWVudHMiLCJtZXNzYWdlbGluayIsImNhdGVnb3JpZXMiLCJzYXZlIiwid2luZG93IiwibW9kYWwiLCJyZXZva2VCdG4iLCJjb21wbGlhbmNlIiwiaW5mbyIsInR5cGUiLCJsYXlvdXRzIiwiYmFzaWMiLCJsYXlvdXQiLCJwb3NpdGlvbiIsInRoZW1lIiwicGFsZXR0ZSIsInJldm9rYWJsZSIsImFuaW1hdGVSZXZva2FibGUiLCJzaG93TGluayIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJkaXNtaXNzT25XaW5kb3dDbGljayIsImlnbm9yZUNsaWNrc0Zyb20iLCJhdXRvT3BlbiIsImF1dG9BdHRhY2giLCJtb2JpbGVGb3JjZUZsb2F0Iiwid2hpdGVsaXN0UGFnZSIsImJsYWNrbGlzdFBhZ2UiLCJvdmVycmlkZUhUTUwiLCJDb29raWVQb3B1cCIsImluaXRpYWxpemUiLCJwcm90b3R5cGUiLCJvcHRpb25zIiwiZGVzdHJveSIsImNoZWNrQ2FsbGJhY2tIb29rcyIsImNhbGwiLCJpbmNsdWRlcyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc21pc3NUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwib25XaW5kb3dTY3JvbGwiLCJvbldpbmRvd0NsaWNrIiwib25Nb3VzZU1vdmUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZUN1c3RvbVN0eWxlIiwib3BlbiIsImlzT3BlbiIsImZhZGVJbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsInNob3dSZXZva2UiLCJmYWRlT3V0IiwiYWZ0ZXJUcmFuc2l0aW9uIiwiYWZ0ZXJGYWRlT3V0IiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmFkZUluVGltZW91dCIsIm9wZW5pbmdUaW1lb3V0IiwiYWZ0ZXJGYWRlSW4iLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VDaG9pY2UiLCJwcmV2ZW50T3BlbiIsImNsZWFyU3RhdHVzZXMiLCJoYXNBbnN3ZXJlZCIsImdldFN0YXR1c2VzIiwic29tZSIsImhhc0NvbnNlbnRlZCIsIm1hcCIsInNldFN0YXR1c2VzIiwidXBkYXRlQ2F0ZWdvcnlTdGF0dXMiLCJjYXRlZ29yeU5hbWUiLCJmb3JFYWNoIiwiY2F0ZWdvcnlTdGF0dXMiLCJpbmRleCIsInJlbW92ZSIsImNvbXBsZXRlIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJmaWx0ZXIiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiY2xhc3NlcyIsInB1c2giLCJhdHRhY2hDdXN0b21QYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImludGVycG9sYXRlZCIsImNvbXBsaWFuY2VUeXBlIiwibWFya3VwIiwiZGl2IiwiY29udCIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hlY2tib3giLCJjaGVja2VkIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsImJ0biIsIlJlZ0V4cCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZSIsInJlZmVyZW5jZXMiLCJjb2xvclN0eWxlcyIsInBvcHVwIiwiYnV0dG9uIiwiaGlnaGxpZ2h0IiwidGV4dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJwYWRkaW5nIiwiaG92ZXIiLCJnZXRIb3ZlckNvbG91ciIsImhlYWQiLCJzaGVldCIsInJ1bGVJbmRleCIsImluc2VydFJ1bGUiLCJjdXN0b21TdHlsZSIsInN0eWxlTm9kZSIsIm93bmVyTm9kZSIsImRlbGF5IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsUmFuZ2UiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJ3aW5kb3dDbGljayIsImlnbm9yZWRDbGlja3MiLCJldnQiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJjb25zb2xlIiwid2FybiIsImlnbm9yZWRDbGljayIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwiTG9jYXRpb24iLCJ0aW1lb3V0Iiwic2VydmljZXMiLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpcGluZm8iLCJ1cmwiLCJoZWFkZXJzIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiZXJyb3IiLCJ0b0Vycm9yIiwiY29kZSIsImVyciIsImlwaW5mb2RiIiwiaXNTY3JpcHQiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJFcnJvciIsImlzb19jb2RlIiwiY3VycmVudFNlcnZpY2VJbmRleCIsImdldE5leHRTZXJ2aWNlIiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsImlkeCIsInNlcnZpY2VPcHRpb24iLCJkeW5hbWljT3B0cyIsImFzc2lnbiIsImxvY2F0ZSIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJfIiwicGFyYW0iLCJ0ZW1wTmFtZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsImludGVycG9sYXRlVXJsIiwicmVxdWVzdEZ1bmN0aW9uIiwiZ2V0U2NyaXB0IiwibWFrZUFzeW5jUmVxdWVzdCIsInhociIsInJlc3BvbnNlVGV4dCIsInJ1blNlcnZpY2VDYWxsYmFjayIsImRhdGEiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0IiwicmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsInZhbCIsImZuIiwidGltZW91dElkeCIsInMiLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImwiLCJzZW5kIiwiTGF3IiwicmVnaW9uYWxMYXciLCJoYXNMYXciLCJleHBsaWNpdEFjdGlvbiIsImdldCIsImFwcGx5TGF3IiwibGF3IiwiYW5zd2VycyIsImFuc3dlciIsImdldENvdW50cnlDb2RlIiwibG9jYXRvciIsInNlcnZpY2VSZXN1bHQiLCJ1dGlscyIsImNvb2tpZWNvbnNlbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlE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Q0FBUjtBQUNELEdBZkQsQ0Fqd0RhLENBa3hEYjs7O0FBQ0F2TixJQUFFLENBQUNvWSxLQUFILEdBQVdsWSxJQUFYLENBbnhEYSxDQXF4RGI7O0FBQ0FGLElBQUUsQ0FBQ0MsY0FBSCxHQUFvQixJQUFwQjtBQUVBOEgsUUFBTSxDQUFDc1EsYUFBUCxHQUF1QnJZLEVBQXZCO0FBQ0QsQ0F6eERBLENBeXhERStILE1BQU0sQ0FBQ3NRLGFBQVAsSUFBd0IsRUF6eEQxQixDQUFELEM7Ozs7Ozs7Ozs7OztBQ0hBLGNBQWMsbUJBQU8sQ0FBQyxrTkFBc0c7O0FBRTVILDRDQUE0QyxRQUFTOztBQUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzR0FBbUQ7O0FBRXhFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoiY29va2llY29uc2VudC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb29raWVjb25zZW50LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6aG92ZXIsXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpc2VzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1OyB9XFxuXFxuLmNjLWNsb3NlOmhvdmVyLFxcbi5jYy1jbG9zZTpmb2N1cyB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDNlbTtcXG4gIHJpZ2h0OiB1bnNldDsgfVxcblxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC42KTsgfVxcblxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyMnB4KTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm8ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGUge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCAuY2MtY29va2llLWFjY29yZGlvbiB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBoZWlnaHQ6IDA7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24ub3BlbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5jYy13aW5kb3csXFxuICAuY2MtcmV2b2tlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG4gIC5jYy1idG4ge1xcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9IH1cXG5cXG4vKiBkaW1lbnNpb25zIGZvciAnaVBob25lNiBQbHVzJyBhbmQgbG93ZXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpLCBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gIC5jYy13aW5kb3cuY2MtdG9wIHtcXG4gICAgdG9wOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIsIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcsIC5jYy13aW5kb3cuY2MtcmlnaHQsIC5jYy13aW5kb3cuY2MtbGVmdCB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtY29tcGxpYW5jZSB7XFxuICAgICAgZmxleDogMSAxIGF1dG87IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgICBtYXgtd2lkdGg6IG5vbmU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiA4cHggMDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDsgfVxcbiAgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDA7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogdGhpbiBzb2xpZCBsaWdodGdyZXk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlIHtcXG4gICAgICBjb2xvcjogYmxhY2s7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogMC40ZW0gNHB4OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuIShmdW5jdGlvbihjYykge1xuICAvLyBzdG9wIGZyb20gcnVubmluZyBhZ2FpbiwgaWYgYWNjaWRlbnRseSBpbmNsdWRlZCBtb3JlIHRoYW4gb25jZS5cbiAgaWYgKGNjLmhhc0luaXRpYWxpemVkKSByZXR1cm47XG5cbiAgY29uc3QgdXRpbCA9IHtcbiAgICBcbiAgICBpbnRlcnBvbGF0ZVN0cmluZzogZnVuY3Rpb24oc3RyLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhhcmd1bWVudHNbMV0pIHx8ICcnXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBkZWVwRXh0ZW5kOiBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3AgaW4gdGFyZ2V0ICYmXG4gICAgICAgICAgICB0aGlzLmlzUGxhaW5PYmplY3QodGFyZ2V0W3Byb3BdKSAmJlxuICAgICAgICAgICAgdGhpcy5pc1BsYWluT2JqZWN0KHNvdXJjZVtwcm9wXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcbiAgICBcbiAgICBnZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gJzsgJyArIGRvY3VtZW50LmNvb2tpZVxuICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCgnOyAnICsgbmFtZSArICc9JylcbiAgICAgIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogcGFydHNcbiAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgLnNwbGl0KCc7JylcbiAgICAgICAgICAgIC5zaGlmdCgpXG4gICAgfSxcblxuICAgIHNldENvb2tpZTogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnO2V4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc7cGF0aD0nICsgKHBhdGggfHwgJy8nKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJztzZWN1cmUnIDogJycgKVxuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcbiAgICB0aHJvdHRsZTogZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gICAgICBsZXQgd2FpdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXdhaXQpIHtcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHdhaXQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgICAgfSwgbGltaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXG4gICAgaGFzaDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICBsZXQgaGFzaCA9IDAsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICBjaHIsXG4gICAgICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2g7XG4gICAgICBmb3IgKGk7IGkgPCBsZW47ICsraSkge1xuICAgICAgICBjaHIgPSBzdHIuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaGFzaCA9IChoYXNoIDw8IDUpIC0gaGFzaCArIGNocjtcbiAgICAgICAgaGFzaCB8PSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhhc2g7XG4gICAgfSxcblxuICAgIG5vcm1hbGlzZUhleDogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBpZiAoaGV4WzBdID09ICcjJykge1xuICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgfVxuICAgICAgaWYgKGhleC5sZW5ndGggPT0gMykge1xuICAgICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gICAgICB9XG4gICAgICByZXR1cm4gaGV4O1xuICAgIH0sXG5cbiAgICAvLyB1c2VkIHRvIGdldCB0ZXh0IGNvbG9ycyBpZiBub3Qgc2V0XG4gICAgZ2V0Q29udHJhc3Q6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgaGV4ID0gdGhpcy5ub3JtYWxpc2VIZXgoaGV4KTtcbiAgICAgIGNvbnN0IHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpO1xuICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KTtcbiAgICAgIGNvbnN0IHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcbiAgICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnO1xuICAgIH0sXG5cbiAgICAvLyB1c2VkIHRvIGNoYW5nZSBjb2xvciBvbiBoaWdobGlnaHRcbiAgICBnZXRMdW1pbmFuY2U6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodGhpcy5ub3JtYWxpc2VIZXgoaGV4KSwgMTYpLFxuICAgICAgICBhbXQgPSAzOCxcbiAgICAgICAgUiA9IChudW0gPj4gMTYpICsgYW10LFxuICAgICAgICBCID0gKChudW0gPj4gOCkgJiAweDAwZmYpICsgYW10LFxuICAgICAgICBHID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdDtcbiAgICAgICAgcmV0dXJuICcjJyArIChcbiAgICAgICAgMHgxMDAwMDAwICtcbiAgICAgICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXG4gICAgICAgIChCIDwgMjU1ID8gKEIgPCAxID8gMCA6IEIpIDogMjU1KSAqIDB4MTAwICtcbiAgICAgICAgKEcgPCAyNTUgPyAoRyA8IDEgPyAwIDogRykgOiAyNTUpXG4gICAgICApXG4gICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgLnNsaWNlKDEpO1xuICAgIH0sXG5cbiAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICApO1xuICAgIH0sXG5cbiAgICBpc1BsYWluT2JqZWN0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgIC8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxuICAgIH0sXG5cbiAgICB0cmF2ZXJzZURPTVBhdGg6IGZ1bmN0aW9uKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtIHx8ICFlbGVtLnBhcmVudE5vZGUpIHJldHVybiBudWxsO1xuICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHJldHVybiBlbGVtO1xuXG4gICAgICByZXR1cm4gdGhpcy50cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvLyB2YWxpZCBjb29raWUgdmFsdWVzXG4gIGNjLnN0YXR1cyA9IHtcbiAgICBkZW55ICAgOiAnZGVueScsXG4gICAgYWxsb3cgIDogJ2FsbG93JyxcbiAgICBkaXNtaXNzOiAnZGlzbWlzcydcbiAgfTtcbiAgY2MuY2F0ZWdvcnkgPSB7XG4gICAgdW5jYXRlZ29yaXplZCAgOiAnZGlzbWlzcycsXG4gICAgZXNzZW50aWFsICAgICAgOiAnYWxsb3cnLFxuICAgIHBlcnNvbmFsaXphdGlvbjogJ2Rpc21pc3MnLFxuICAgIGFuYWx5dGljcyAgICAgIDogJ2Rpc21pc3MnLFxuICAgIG1hcmtldGluZyAgICAgIDogJ2Rpc21pc3MnXG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcbiAgICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gaWYgc3RhdHVzIGlzIHZhbGlkXG4gICAqL1xuICBjb25zdCBpc1ZhbGlkU3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2Yoc3RhdHVzKSA+PSAwXG4gIH1cblxuICAvLyBkZXRlY3RzIHRoZSBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgbmFtZVxuICBjYy50cmFuc2l0aW9uRW5kID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHJhbnMgPSB7XG4gICAgICB0OiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgIG1zVDogJ01TVHJhbnNpdGlvbkVuZCcsXG4gICAgICBNb3pUOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgcHJlZml4IGluIHRyYW5zKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgdHlwZW9mIGVsLnN0eWxlW3ByZWZpeCArICdyYW5zaXRpb24nXSAhPSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cmFuc1twcmVmaXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0pKCk7XG5cbiAgY2MuaGFzVHJhbnNpdGlvbiA9ICEhY2MudHJhbnNpdGlvbkVuZDtcblxuICAvLyBjb250YWlucyByZWZlcmVuY2VzIHRvIHRoZSBjdXN0b20gPHN0eWxlPiB0YWdzXG4gIGNjLmN1c3RvbVN0eWxlcyA9IHt9O1xuXG4gIGNjLlBvcHVwID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gaWYgZmFsc2UsIHRoaXMgcHJldmVudHMgdGhlIHBvcHVwIGZyb20gc2hvd2luZyAodXNlZnVsIGZvciBnaXZpbmcgdG8gY29udHJvbCB0byBhbm90aGVyIHBpZWNlIG9mIGNvZGUpXG4gICAgICBlbmFibGVkOiB0cnVlLFxuXG4gICAgICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXG4gICAgICBjb250YWluZXI6IG51bGwsXG5cbiAgICAgIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcbiAgICAgIGNvb2tpZToge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoaXMgY29va2llIC0geW91IGNhbiBpZ25vcmUgdGhpc1xuICAgICAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cbiAgICAgICAgcGF0aDogJy8nLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRvbWFpbiB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBvbiB0aGlzIGRvbWFpbi5cbiAgICAgICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xuICAgICAgICBkb21haW46ICcnLFxuXG4gICAgICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxuICAgICAgICBleHBpcnlEYXlzOiAzNjUsXG5cbiAgICAgICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cbiAgICAgICAgc2VjdXJlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLy8gdGhlc2UgY2FsbGJhY2sgaG9va3MgYXJlIGNhbGxlZCBhdCBjZXJ0YWluIHBvaW50cyBpbiB0aGUgcHJvZ3JhbSBleGVjdXRpb25cbiAgICAgIG9uUG9wdXBPcGVuOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Qb3B1cENsb3NlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Jbml0aWFsaXplOiBmdW5jdGlvbihzdGF0dXNlcykge30sXG4gICAgICBvblN0YXR1c0NoYW5nZTogZnVuY3Rpb24oY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUpIHt9LFxuICAgICAgb25SZXZva2VDaG9pY2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICBvbk5vQ29va2llTGF3OiBmdW5jdGlvbihjb3VudHJ5Q29kZSwgY291bnRyeSkge30sXG5cbiAgICAgIC8vIGVhY2ggaXRlbSBkZWZpbmVzIHRoZSBpbm5lciB0ZXh0IGZvciB0aGUgZWxlbWVudCB0aGF0IGl0IHJlZmVyZW5jZXNcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgaGVhZGVyOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuICAgICAgICBkaXNtaXNzOiAnR290IGl0IScsXG4gICAgICAgIGFsbG93OiAnQWxsb3cgY29va2llcycsXG4gICAgICAgIGRlbnk6ICdEZWNsaW5lJyxcbiAgICAgICAgbGluazogJ0xlYXJuIG1vcmUnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxuICAgICAgICBjbG9zZTogJyYjeDI3NGM7JyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgcG9saWN5OiAnQ29va2llIFBvbGljeSdcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxuICAgICAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cbiAgICAgIC8vXG4gICAgICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxuICAgICAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcDsnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19PC9zcGFuPicsXG4gICAgICAgIG1lc3NhZ2VsaW5rOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgICAgICBkaXNtaXNzOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYT4nLFxuICAgICAgICBhbGxvdzpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImFsbG93IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiAgY2xhc3M9XCJjYy1idG4gY2MtYWxsb3dcIj57e2FsbG93fX08L2E+JyxcbiAgICAgICAgZGVueTpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRlbnlcIj57e2Rlbnl9fTwvYT4nLFxuICAgICAgICBsaW5rOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxuICAgICAgICBjbG9zZTpcbiAgICAgICAgICAnPHNwYW4gYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWNsb3NlXCI+e3tjbG9zZX19PC9zcGFuPicsXG4gICAgICAgIGNhdGVnb3JpZXM6IGAgXG4gICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidW5jYXRlZ29yaXplZFwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5VbmNhdGVnb3JpemVkPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIxXCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHRoYXQgZG9uJ3QgZml0IGFueSBvdGhlciBjYXRlZ29yeS48L3A+XG4gICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5VbmNhdGVnb3JpemVkIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVzc2VudGlhbFwiIGNoZWNrZWQgZGlzYWJsZWQvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkVzc2VudGlhbDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiRXNzZW50aWFsIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIzXCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBlc3NlbnRpYWwgYXBwbGljYXRpb24gb3Igd2Vic2l0ZSBvcHBlcmF0aW9uIGNvb2tpZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiRXNzZW50aWFsIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5Fc3NlbnRpYWwgQ29va2llczwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiNFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGVyc29uYWxpemF0aW9uXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPlBlcnNvbmFsaXphdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiUGVyc29uYWxpemF0aW9uIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI1XCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHRoZSBhcHBsaWNhdGlvbiB0byBhIHNwZWNpZmljIHVzZXIuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiUGVyc29uYWxpemF0aW9uIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5QZXJzb25hbGl6YXRpb24gQ29va2llczwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiNlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYW5hbHl0aWNzXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkFuYWx5dGljczwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiQW5hbHl0aWNzIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI3XCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBhbmFseWl6ZSBkYXRhLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+QW5hbHl0aWNzIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjhcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtldGluZ1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5NYXJrZXRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIk1hcmtldGluZyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiOVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB5b3VyIGludGVybmV0IHNob3BwaW5nICYgYWR2ZXJ0aXNlbWVudCBleHBlcmllbmNlcy48L3A+XG4gICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgQ29va2llcyBMaXN0XCIgcm9sZT1cImJ1dHRvblwiPk1hcmtldGluZyBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgYCxcbiAgICAgICAgc2F2ZTogYFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2Mtc2F2ZVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgICAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xuICAgICAgfSxcblxuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVycyB7e2NsYXNzZXN9fSBhbmQge3tjaGlsZHJlbn19IGJvdGggZ2V0IHJlcGxhY2VkIGR1cmluZyBpbml0aWFsaXNhdGlvbjpcbiAgICAgIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcbiAgICAgIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXG4gICAgICB3aW5kb3c6XG4gICAgICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcbiAgICAgIFxuICAgICAgbW9kYWw6ICcnLFxuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBodG1sIGZvciB0aGUgcmV2b2tlIGJ1dHRvbi4gVGhpcyBvbmx5IHNob3dzIHVwIGFmdGVyIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB0aGVpciBsZXZlbCBvZiBjb25zZW50XG4gICAgICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXG4gICAgICByZXZva2VCdG46ICc8ZGl2IGNsYXNzPVwiY2MtcmV2b2tlIHt7Y2xhc3Nlc319XCI+e3twb2xpY3l9fTwvZGl2PicsXG5cbiAgICAgIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxuICAgICAgY29tcGxpYW5jZToge1xuICAgICAgICBpbmZvOiAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fTwvZGl2PicsXG4gICAgICAgICdvcHQtaW4nOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LW91dCc6XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxuICAgICAgICBjYXRlZ29yaWVzOiAnPGRpdiBjbGFzcz1cImZvcm1cIj57e2NhdGVnb3JpZXN9fXt7c2F2ZX19PC9kaXY+J1xuICAgICAgfSxcblxuICAgICAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXG4gICAgICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgICAgIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXG4gICAgICBsYXlvdXRzOiB7XG4gICAgICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgICAgIGJhc2ljICAgICAgICAgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX0nLFxuICAgICAgICAnYmFzaWMtY2xvc2UnIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcbiAgICAgICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xuICAgICAgICAvLyBhZGQgYSBjdXN0b20gbGF5b3V0IGhlcmUsIHRoZW4gYWRkIHNvbWUgbmV3IGNzcyB3aXRoIHRoZSBjbGFzcyAnLmNjLWxheW91dC1teS1jb29sLWxheW91dCdcbiAgICAgICAgLy8nbXktY29vbC1sYXlvdXQnOiAnPGRpdiBjbGFzcz1cIm15LXNwZWNpYWwtbGF5b3V0XCI+e3ttZXNzYWdlfX17e2NvbXBsaWFuY2V9fTwvZGl2Pnt7Y2xvc2V9fScsXG4gICAgICB9LFxuXG4gICAgICAvLyBkZWZhdWx0IGxheW91dCAoc2VlIGFib3ZlKVxuICAgICAgbGF5b3V0OiAnYmFzaWMnLFxuXG4gICAgICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gICAgICAvLyAgLSBiYW5uZXIgcG9zaXRpb25zOiB0b3AsIGJvdHRvbVxuICAgICAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYWRkcyBhIGNsYXNzIGBjYy1mbG9hdGluZ2Agb3IgYGNjLWJhbm5lcmAgd2hpY2ggaGVscHMgd2hlbiBzdHlsaW5nXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcblxuICAgICAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAgICAgLy8gICAgLWJsb2NrIChkZWZhdWx0LCBubyBleHRyYSBjbGFzc2VzKVxuICAgICAgLy8gICAgLWVkZ2VsZXNzXG4gICAgICAvLyAgICAtY2xhc3NpY1xuICAgICAgLy8gdXNlIHlvdXIgb3duIHN0eWxlIG5hbWUgYW5kIHVzZSBgLmNjLXRoZW1lLVNUWUxFTkFNRWAgY2xhc3MgaW4gQ1NTIHRvIGVkaXQuXG4gICAgICAvLyBOb3RlOiBzdHlsZSBcIndpcmVcIiBpcyB1c2VkIGZvciB0aGUgY29uZmlndXJhdG9yLCBidXQgaGFzIG5vIENTUyBzdHlsZXMgb2YgaXRzIG93biwgb25seSBwYWxldHRlIGlzIHVzZWQuXG4gICAgICB0aGVtZTogJ2Jsb2NrJyxcblxuICAgICAgLy8gVGhlIHBvcHVwIGlzIGBmaXhlZGAgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHN0YXRpYyAoaW5saW5lIHdpdGggdGhlIHBhZ2UgY29udGVudCksIHNldCB0aGlzIHRvIGZhbHNlXG4gICAgICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcbiAgICAgIHN0YXRpYzogZmFsc2UsXG5cbiAgICAgIC8vIGlmIHlvdSB3YW50IGN1c3RvbSBjb2xvdXJzLCBwYXNzIHRoZW0gaW4gaGVyZS4gdGhpcyBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGlzLlxuICAgICAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgcG9wdXA6IHtiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIHRleHQ6ICcjZmZmJywgbGluazogJyNmZmYnfSxcbiAgICAgIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcbiAgICAgIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAgICAgLy8gICB9XG4gICAgICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cbiAgICAgIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxuICAgICAgcGFsZXR0ZTogbnVsbCxcblxuICAgICAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXG4gICAgICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50Lmxhd2AgY2FuIGNoYW5nZSB0aGlzIHRvIGB0cnVlYCBpZiBpdCBkZXRlY3RzIHRoYXQgaXQgc2hvdWxkXG4gICAgICByZXZva2FibGU6IGZhbHNlLFxuXG4gICAgICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcbiAgICAgIGFuaW1hdGVSZXZva2FibGU6IHRydWUsXG5cbiAgICAgIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcbiAgICAgIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xuICAgICAgc2hvd0xpbms6IHRydWUsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXG4gICAgICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gYXV0b2Rpc21pc3MgYWZ0ZXIgc2V0IHRpbWVcbiAgICAgIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gICAgICBkaXNtaXNzT25XaW5kb3dDbGljazogZmFsc2UsXG5cbiAgICAgIC8vIElmIGBkaXNtaXNzT25XaW5kb3dDbGlja2AgaXMgdHJ1ZSwgd2UgY2FuIGNsaWNrIG9uICdyZXZva2UnIGFuZCB3ZSdsbCBzdGlsbCBkaXNtaXNzIHRoZSBiYW5uZXIsIHNvIHdlIG5lZWQgZXhjZXB0aW9ucy5cbiAgICAgIC8vIHNob3VsZCBiZSBhbiBhcnJheSBvZiBjbGFzcyBuYW1lcyAobm90IENTUyBzZWxlY3RvcnMpXG4gICAgICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nXSwgLy8gYWxyZWFkeSBpbmNsdWRlcyB0aGUgcmV2b2tlIGJ1dHRvbiBhbmQgdGhlIGJhbm5lciBpdHNlbGZcblxuICAgICAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxuICAgICAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXG4gICAgICBhdXRvT3BlbjogdHJ1ZSxcblxuICAgICAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXG4gICAgICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XG4gICAgICAvL1xuICAgICAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpO1xuICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudCk7XG4gICAgICAvL1xuICAgICAgYXV0b0F0dGFjaDogdHJ1ZSxcblx0ICBcblx0ICAvLyBzZXQgdmFsdWUgaWYgZmxvYXRpbmcgbGF5b3V0IHNob3VsZCBiZSBmb3JjZWQgZm9yIG1vYmlsZSBkZXZpY2VzXG5cdCAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAgICAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XG4gICAgICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gICAgICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICAgICAgd2hpdGVsaXN0UGFnZTogW10sXG4gICAgICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAgICAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAgICAgLy8gQmUgc3VyZSB0byB1c2UgdGhlIGNsYXNzZXMgYGNjLWJ0bmAgYW5kIGBjYy1hbGxvd2AsIGBjYy1kZW55YCBvciBgY2MtZGlzbWlzc2AuIFRoZXkgZW5hYmxlIHRoZSBhcHAgdG8gcmVnaXN0ZXIgY2xpY2tcbiAgICAgIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICAgICAgb3ZlcnJpZGVIVE1MOiBudWxsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvb2tpZVBvcHVwKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpOyAvLyBhbHJlYWR5IHJlbmRlcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBvcHRpb25zIGJhY2sgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB1dGlsLmRlZXBFeHRlbmQoKHRoaXMub3B0aW9ucyA9IHt9KSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICAvLyBtZXJnZSBpbiB1c2VyIG9wdGlvbnNcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdXRpbC5kZWVwRXh0ZW5kKHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxuICAgICAgaWYgKGNoZWNrQ2FsbGJhY2tIb29rcy5jYWxsKHRoaXMpKSB7XG4gICAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhlIGZ1bGwgbWFya3VwIGVpdGhlciBjb250YWlucyB0aGUgd3JhcHBlciBvciBpdCBkb2VzIG5vdCAoZm9yIG11bHRpcGxlIGluc3RhbmNlcylcbiAgICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgZ2V0UG9wdXBDbGFzc2VzLmNhbGwodGhpcykuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgZ2V0UG9wdXBJbm5lck1hcmt1cC5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcbiAgICAgIGNvbnN0IGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MO1xuICAgICAgaWYgKHR5cGVvZiBjdXN0b21IVE1MID09ICdzdHJpbmcnICYmIGN1c3RvbUhUTUwubGVuZ3RoICkge1xuICAgICAgICBjb29raWVQb3B1cCA9IGN1c3RvbUhUTUw7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXG4gICAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGFwcGVuZE1hcmt1cC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4nICsgY29va2llUG9wdXAgKyAnPC9kaXY+J1xuICAgICAgICApO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnOyAvLyBzZXQgaXQgdG8gdmlzaWJsZSAoYmVjYXVzZSBhcHBlbmRNYXJrdXAgaGlkZXMgaXQpXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZDsgLy8gZ2V0IHRoZSBgZWxlbWVudGAgcmVmZXJlbmNlIGZyb20gdGhlIHdyYXBwZXJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGFwcGVuZE1hcmt1cC5jYWxsKHRoaXMsIGNvb2tpZVBvcHVwKTtcbiAgICAgIH1cblxuICAgICAgYXBwbHlBdXRvRGlzbWlzcy5jYWxsKHRoaXMpO1xuXG4gICAgICBhcHBseVJldm9rZUJ1dHRvbi5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICAgIHRoaXMuYXV0b09wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm9uQnV0dG9uQ2xpY2sgJiYgdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRpc21pc3NUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc21pc3NUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93U2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93Q2xpY2spIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25Nb3VzZU1vdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuICYmIHRoaXMucmV2b2tlQnRuLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnJldm9rZUJ0bik7XG4gICAgICB9XG4gICAgICB0aGlzLnJldm9rZUJ0biA9IG51bGw7XG5cbiAgICAgIHJlbW92ZUN1c3RvbVN0eWxlKHRoaXMub3B0aW9ucy5wYWxldHRlKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBpZiAoY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHRoaXMuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3B1cE9wZW4uY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKHNob3dSZXZva2UpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUG9wdXBDbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmZhZGVJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBBRlRFUiBmYWRlT3V0ICh3aGljaCBpcyBnb3Zlcm5lZCBieSB0aGUgJ3RyYW5zaXRpb25lbmQnIGV2ZW50KS5cbiAgICAgIC8vICd0cmFuc2l0aW9uZW5kJyBpc24ndCBhbGwgdGhhdCByZWxpYWJsZSwgc28sIGlmIHdlIHRyeSBhbmQgZmFkZUluIGJlZm9yZSAndHJhbnNpdGlvbmVuZCcgaGFzXG4gICAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICAgIGlmICh0aGlzLmFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgICBhZnRlckZhZGVPdXQuY2FsbCh0aGlzLCBlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwOyAvLyAobXMpIERPIE5PVCBNQUtFIFRISVMgVkFMVUUgU01BTExFUi4gU2VlIGJlbG93XG5cbiAgICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHdhaXRpbmcgZm9yIGEgXCJicm93c2VyIHJlZHJhd1wiIGJlZm9yZSB3ZSByZW1vdmUgdGhlICdjYy1pbnZpc2libGUnIGNsYXNzLlxuICAgICAgICAvLyBJZiB0aGUgY2xhc3MgaXMgcmVtdm9lZCBiZWZvcmUgYSByZWRyYXcgY291bGQgaGFwcGVuLCB0aGVuIHRoZSBmYWRlSW4gZWZmZWN0IFdJTEwgTk9UIHdvcmssIGFuZFxuICAgICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgICAgLy8gaXRzIHRoaW5nLiBUaGUgYWN0dWFsbHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHVzaW5nIDAgYW5kIDIwIGluIGEgc2V0IHRpbWVvdXQgaXMgbmVnbGVnaWJsZSBhbnl3YXlcbiAgICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgYWZ0ZXJGYWRlSW4uYmluZCh0aGlzLCBlbCksXG4gICAgICAgICAgZmFkZUluVGltZW91dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZmFkZU91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpO1xuICAgICAgICBhZnRlckZhZGVJbi5iaW5kKHRoaXMsIGVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IGFmdGVyRmFkZU91dC5iaW5kKHRoaXMsIGVsKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG5cbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnJyAmJlxuICAgICAgICAoY2MuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXG4gICAgICApO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUudG9nZ2xlUmV2b2tlQnV0dG9uID0gZnVuY3Rpb24oc2hvdykge1xuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUucmV2b2tlQ2hvaWNlID0gZnVuY3Rpb24ocHJldmVudE9wZW4pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpO1xuXG4gICAgICB0aGlzLm9wdGlvbnMub25SZXZva2VDaG9pY2UuY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKCFwcmV2ZW50T3Blbikge1xuICAgICAgICB0aGlzLmF1dG9PcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxuICAgICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaGFzQW5zd2VyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xuICAgICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmhhc0NvbnNlbnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IGNjLnN0YXR1cy5hbGxvdyB8fCBzdGF0dXMgPT09IGNjLnN0YXR1cy5kaXNtaXNzIClcbiAgICB9O1xuXG4gICAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5hdXRvT3BlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXG4gICAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogXG4gICAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cbiAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5zZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qge25hbWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlfSA9IHRoaXMub3B0aW9ucy5jb29raWVcblxuICAgICAgLy8gaWYgYHN0YXR1c2AgaXMgdmFsaWRcbiAgICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2YodXRpbC5nZXRDb29raWUoY29va2llTmFtZSkpID49IDBcbiAgICAgICAgICB1dGlsLnNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5vblN0YXR1c0NoYW5nZS5jYWxsKHRoaXMsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCBjYy5jYXRlZ29yeVsgY2F0ZWdvcnkgXSApIClcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGFyZ3VtZW50c1sgMCBdICkgKVxuICAgICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgIGFyZ3VtZW50cy5mb3JFYWNoKCAoIGNhdGVnb3J5U3RhdHVzLCBpbmRleCApID0+IHtcbiAgICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYy5jYXRlZ29yeVxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5nZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5TmFtZSA9PiB1dGlsLmdldENvb2tpZSh0aGlzLm9wdGlvbnMuY29va2llLm5hbWUrJ18nK2NhdGVnb3J5TmFtZSkgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbGVhclN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZTtcbiAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgICB1dGlsLnNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAgLy8gVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nO1xuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZUluKGVsKSB7XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbDtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgb24gJ3RyYW5zaXRpb25lbmQnIChvbmx5IG9uIHRoZSB0cmFuc2l0aW9uIG9mIHRoZSBmYWRlT3V0KS4gVGhhdCdzIGJlY2F1c2UgYWZ0ZXIgd2UndmUgZmFkZWQgb3V0LCB3ZSBuZWVkIHRvXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5IHRvICdub25lJyAoc28gdGhlcmUgYXJlbid0IGFubm95aW5nIGludmlzaWJsZSBwb3B1cHMgYWxsIG92ZXIgdGhlIHBhZ2UpLiBJZiBmb3Igd2hlbmV2ZXIgcmVhc29uIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBpcyBub3QgY2FsbGVkIChsYWNrIG9mIHN1cHBvcnQpLCB0aGUgb3Blbi9jbG9zZSBtZWNoYW5pc20gd2lsbCBzdGlsbCB3b3JrLlxuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZU91dChlbCkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGhvb2sgYW5kIHJldHVybnMgdHJ1ZSAoaWYgbmVlZGVkKSBhbmQgcmV0dXJucyBmYWxzZSBvdGhlcndpc2VcbiAgICBmdW5jdGlvbiBjaGVja0NhbGxiYWNrSG9va3MoKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZSA9IHRoaXMub3B0aW9ucy5vbkluaXRpYWxpemUuYmluZCh0aGlzKTtcblxuICAgICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmRlbnkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5Db29raWVzT0sgfHwgd2luZG93Lm5hdmlnYXRvci5Db29raWVzT0spIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmFsbG93KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSlcbiAgICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXG4gICAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcbiAgICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcbiAgICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+IGNjLmNhdGVnb3J5WyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gPSBzdGF0dXMgPyBzdGF0dXMgOiBjYy5jYXRlZ29yeVsgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcbiAgICAgIGNvbXBsZXRlKCBoYXNNYXRjaGVzID8gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogc3RhdHVzIH0gKSApICA6IHVuZGVmaW5lZCApXG5cbiAgICAgIHJldHVybiBoYXNNYXRjaGVzO1xuICAgIH1cblxuICAgIC8vIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodFxuICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoICctJyApLm1hcCggcG9zID0+ICdjYy0nK3BvcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cENsYXNzZXMoKSB7XG4gICAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcbiAgICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgICAgOiAnZmxvYXRpbmcnO1xuXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpICYmIG9wdHMubW9iaWxlRm9yY2VGbG9hdCkge1xuICAgICAgICBwb3NpdGlvblN0eWxlID0gJ2Zsb2F0aW5nJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcbiAgICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcbiAgICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgICBdO1xuXG4gICAgICBpZiAob3B0cy5zdGF0aWMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKTtcbiAgICAgIH1cblxuICAgICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gd2Ugb25seSBhZGQgZXh0cmEgc3R5bGVzIGlmIGBwYWxldHRlYCBoYXMgYmVlbiBzZXQgdG8gYSB2YWxpZCB2YWx1ZVxuICAgICAgYXR0YWNoQ3VzdG9tUGFsZXR0ZS5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucy5wYWxldHRlKTtcblxuICAgICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBvcHVwSW5uZXJNYXJrdXAoKSB7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB7fTtcbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIHJlbW92ZXMgbGluayBpZiBzaG93TGluayBpcyBmYWxzZVxuICAgICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICAgIG9wdHMuZWxlbWVudHMubGluayA9ICcnOyBcbiAgICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaCggcHJvcCA9PiB7XG4gICAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoXG4gICAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lICYmIHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgJiYgc3RyLmxlbmd0aCA/IHN0ciA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcbiAgICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdO1xuICAgICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvO1xuICAgICAgfVxuXG4gICAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXG4gICAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoY29tcGxpYW5jZVR5cGUsIGZ1bmN0aW9uKFxuICAgICAgICBuYW1lXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFtuYW1lXTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcbiAgICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdO1xuICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXRpbC5pbnRlcnBvbGF0ZVN0cmluZyhsYXlvdXQsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZWRbbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kTWFya3VwKG1hcmt1cCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgY29udCA9XG4gICAgICAgIG9wdHMuY29udGFpbmVyICYmIG9wdHMuY29udGFpbmVyLm5vZGVUeXBlID09PSAxXG4gICAgICAgICAgPyBvcHRzLmNvbnRhaW5lclxuICAgICAgICAgIDogZG9jdW1lbnQuYm9keTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cDtcblxuICAgICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF07XG5cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmUgcmVmIHRvIHRoZSBmdW5jdGlvbiBoYW5kbGUgc28gd2UgY2FuIHVuYmluZCBpdCBsYXRlclxuICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2MuY2F0ZWdvcnlbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnYWxsb3cnIDogJ2RlbnknXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgaWYgKCB0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICApIHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgYWNjb3JkaW9uIGluIHRoZSB0b29sdGlwXG4gICAgICAgKi9cbiAgICAgIC8qZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIpLmZvckVhY2goIGFjY29yZGlvbkxpbmsgPT4ge1xuICAgICAgICBhY2NvcmRpb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBhY2NvcmRpb25MaW5rLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCBcIm9wZW5cIiApXG4gICAgICAgIH0pXG4gICAgICAgIGFjY29yZGlvbkxpbmsuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtdG9vbHRpcFwiKS5mb3JFYWNoKCB0b29sVGlwID0+IHtcbiAgICAgICAgdG9vbFRpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgdG9vbFRpcC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICovXG5cbiAgICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcbiAgICAgICAgaWYgKCFjb250LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxuICAgICAgY29uc3QgYnRuID0gdXRpbC50cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0O1xuICAgICAgXG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2Mtc2F2ZScgKSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoKVxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcbiAgICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgT2JqZWN0LmtleXMoY2Muc3RhdHVzKS5tYXAoc3RyID0+IHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpICkuam9pbignfCcpICsgJylcXFxcYicpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkgfHwgZmFsc2U7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMobWF0Y2gpO1xuICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtY2xvc2UnICkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcyk7XG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXJldm9rZScgKSkge1xuICAgICAgICB0aGlzLnJldm9rZUNob2ljZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEkgbWlnaHQgY2hhbmdlIHRoaXMgZnVuY3Rpb24gdG8gdXNlIGlubGluZSBzdHlsZXMuIEkgb3JpZ2luYWxseSBjaG9zZSBhIHN0eWxlc2hlZXQgYmVjYXVzZSBJIGNvdWxkIHNlbGVjdCBtYW55IGVsZW1lbnRzIHdpdGggYVxuICAgIC8vIHNpbmdsZSBydWxlIChzb21ldGhpbmcgdGhhdCBoYXBwZW5lZCBhIGxvdCksIHRoZSBhcHBzIGhhcyBjaGFuZ2VkIHNsaWdodGx5IG5vdyB0aG91Z2gsIHNvIGlubGluZSBzdHlsZXMgbWlnaHQgYmUgbW9yZSBhcHBsaWNhYmxlLlxuICAgIGZ1bmN0aW9uIGF0dGFjaEN1c3RvbVBhbGV0dGUocGFsZXR0ZSkge1xuICAgICAgY29uc3QgaGFzaCA9IHV0aWwuaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSk7XG4gICAgICBjb25zdCBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaDtcbiAgICAgIGNvbnN0IGlzVmFsaWQgPSB1dGlsLmlzUGxhaW5PYmplY3QocGFsZXR0ZSk7XG5cbiAgICAgIHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvciA9IGlzVmFsaWQgPyBzZWxlY3RvciA6IG51bGw7XG5cbiAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgIGFkZEN1c3RvbVN0eWxlKGhhc2gsIHBhbGV0dGUsICcuJyArIHNlbGVjdG9yKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEN1c3RvbVN0eWxlKGhhc2gsIHBhbGV0dGUsIHByZWZpeCkge1xuICAgICAgLy8gb25seSBhZGQgdGhpcyBpZiBhIHN0eWxlIGxpa2UgaXQgZG9lc24ndCBleGlzdFxuICAgICAgaWYgKGNjLmN1c3RvbVN0eWxlc1toYXNoXSkge1xuICAgICAgICAvLyBjdXN0b20gc3R5bGUgYWxyZWFkeSBleGlzdHMsIHNvIGluY3JlbWVudCB0aGUgcmVmZXJlbmNlIGNvdW50XG4gICAgICAgICsrY2MuY3VzdG9tU3R5bGVzW2hhc2hdLnJlZmVyZW5jZXM7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29sb3JTdHlsZXMgPSB7fTtcbiAgICAgIGNvbnN0IHBvcHVwID0gcGFsZXR0ZS5wb3B1cDtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IHBhbGV0dGUuYnV0dG9uO1xuICAgICAgY29uc3QgaGlnaGxpZ2h0ID0gcGFsZXR0ZS5oaWdobGlnaHQ7XG5cbiAgICAgIC8vIG5lZWRzIGJhY2tncm91bmQgY29sb3VyLCB0ZXh0IGFuZCBsaW5rIHdpbGwgYmUgc2V0IHRvIGJsYWNrL3doaXRlIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAgIGlmIChwb3B1cCkge1xuICAgICAgICAvLyBhc3N1bWVzIHBvcHVwLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgIHBvcHVwLnRleHQgPSBwb3B1cC50ZXh0XG4gICAgICAgICAgPyBwb3B1cC50ZXh0XG4gICAgICAgICAgOiB1dGlsLmdldENvbnRyYXN0KHBvcHVwLmJhY2tncm91bmQpO1xuICAgICAgICBwb3B1cC5saW5rID0gcG9wdXAubGluayA/IHBvcHVwLmxpbmsgOiBwb3B1cC50ZXh0O1xuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy10b29sdGlwLCAnICsgcHJlZml4ICsgJyAuY2MtdG9vbHRpcDphZnRlciddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF1cbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy13aW5kb3cnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdO1xuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXJldm9rZSddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6YWN0aXZlLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6dmlzaXRlZCdcbiAgICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXTtcblxuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgLy8gYXNzdW1lcyBidXR0b24uYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvbi50ZXh0XG4gICAgICAgICAgICA/IGJ1dHRvbi50ZXh0XG4gICAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QoYnV0dG9uLmJhY2tncm91bmQpO1xuICAgICAgICAgIGJ1dHRvbi5ib3JkZXIgPSBidXR0b24uYm9yZGVyID8gYnV0dG9uLmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10gPSBbXG4gICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBidXR0b24uYm9yZGVyLFxuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBidXR0b24uYmFja2dyb3VuZFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBpZiAoYnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgICAgICBwcmVmaXggKyAnIC5jYy1idG46aG92ZXIsICcgKyBwcmVmaXggKyAnIC5jYy1idG46Zm9jdXMnXG4gICAgICAgICAgICBdID0gW1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArXG4gICAgICAgICAgICAgICAgKGJ1dHRvbi5ob3ZlciB8fCBnZXRIb3ZlckNvbG91cihidXR0b24uYmFja2dyb3VuZCkpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0LmJvcmRlciA9IGhpZ2hsaWdodC5ib3JkZXJcbiAgICAgICAgICAgICAgPyBoaWdobGlnaHQuYm9yZGVyXG4gICAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIGhpZ2hsaWdodC50ZXh0LFxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJvcmRlcixcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2V0cyBoaWdobGlnaHQgdGV4dCBjb2xvciB0byBwb3B1cCB0ZXh0LiBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgYXJlIHRyYW5zcGFyZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0XG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXG4gICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgICAgLy8gY3VzdG9tIHN0eWxlIGRvZXNuJ3QgZXhpc3QsIHNvIHdlIGNyZWF0ZSBpdFxuICAgICAgY2MuY3VzdG9tU3R5bGVzW2hhc2hdID0ge1xuICAgICAgICByZWZlcmVuY2VzOiAxLFxuICAgICAgICBlbGVtZW50OiBzdHlsZS5zaGVldFxuICAgICAgfTtcblxuICAgICAgbGV0IHJ1bGVJbmRleCA9IC0xO1xuICAgICAgZm9yIChsZXQgcHJvcCBpbiBjb2xvclN0eWxlcykge1xuICAgICAgICBpZiAoY29sb3JTdHlsZXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKFxuICAgICAgICAgICAgcHJvcCArICd7JyArIGNvbG9yU3R5bGVzW3Byb3BdLmpvaW4oJzsnKSArICd9JyxcbiAgICAgICAgICAgICsrcnVsZUluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdmVyQ29sb3VyKGhleCkge1xuICAgICAgaGV4ID0gdXRpbC5ub3JtYWxpc2VIZXgoaGV4KTtcbiAgICAgIC8vIGZvciBibGFjayBidXR0b25zXG4gICAgICBpZiAoaGV4ID09ICcwMDAwMDAnKSB7XG4gICAgICAgIHJldHVybiAnIzIyMic7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXRpbC5nZXRMdW1pbmFuY2UoaGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDdXN0b21TdHlsZShwYWxldHRlKSB7XG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpO1xuICAgICAgICBjb25zdCBjdXN0b21TdHlsZSA9IGNjLmN1c3RvbVN0eWxlc1toYXNoXTtcbiAgICAgICAgaWYgKGN1c3RvbVN0eWxlICYmICEtLWN1c3RvbVN0eWxlLnJlZmVyZW5jZXMpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZU5vZGUgPSBjdXN0b21TdHlsZS5lbGVtZW50Lm93bmVyTm9kZTtcbiAgICAgICAgICBpZiAoc3R5bGVOb2RlICYmIHN0eWxlTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBzdHlsZU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZU5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYy5jdXN0b21TdHlsZXNbaGFzaF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICAgIGNvbnN0IHNldFN0YXR1c2VzID0gdGhpcy5zZXRTdGF0dXNlcy5iaW5kKHRoaXMpO1xuICAgICAgY29uc3QgY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5vcHRpb25zLmRpc21pc3NPblRpbWVvdXQ7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgICBjbG9zZSh0cnVlKTtcbiAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxSYW5nZSA9IHRoaXMub3B0aW9ucy5kaXNtaXNzT25TY3JvbGw7XG4gICAgICBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcbiAgICAgICAgY29uc3Qgb25XaW5kb3dTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gTWF0aC5mbG9vcihzY3JvbGxSYW5nZSkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgICAgIGNsb3NlKHRydWUpO1xuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gb25XaW5kb3dTY3JvbGw7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2luZG93Q2xpY2sgPSB0aGlzLm9wdGlvbnMuZGlzbWlzc09uV2luZG93Q2xpY2s7XG4gICAgICBjb25zdCBpZ25vcmVkQ2xpY2tzID0gdGhpcy5vcHRpb25zLmlnbm9yZUNsaWNrc0Zyb207XG4gICAgICBcbiAgICAgIGlmICh3aW5kb3dDbGljaykge1xuICAgICAgICBjb25zdCBvbldpbmRvd0NsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgY29uc3QgcGF0aCA9IGV2dC5jb21wb3NlZFBhdGggPyBldnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICAgIH0pKFtdLGV2dC50YXJnZXQgKVxuICAgICAgICAgIGlmICggIXBhdGggKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oIFwiJy5wYXRoJyAmICcuY29tcG9zZWRQYXRoJyBmYWlsZWQgdG8gZ2VuZXJhdGUgYW4gZXZlbnQgcGF0aC5cIiApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCAhcGF0aC5zb21lKCBlbGVtZW50ID0+IGlnbm9yZWRDbGlja3Muc29tZSggaWdub3JlZENsaWNrID0+IGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBpZ25vcmVkQ2xpY2sgKSApICkgKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcylcbiAgICAgICAgICAgIGNsb3NlKHRydWUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG9uV2luZG93Q2xpY2s7XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5UmV2b2tlQnV0dG9uKCkge1xuICAgICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJykgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWU7XG4gICAgICAvLyBhbmltYXRlUmV2b2thYmxlIGZhbHNlIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgICAgaWYgKHV0aWwuaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnY2MtdGhlbWUtJyt0aGlzLm9wdGlvbnMudGhlbWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgY2xhc3Nlcy5qb2luKCcgJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cG9saWN5fX0nLCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kpO1xuXG4gICAgICAgIHRoaXMucmV2b2tlQnRuID0gYXBwZW5kTWFya3VwLmNhbGwodGhpcywgcmV2b2tlQnRuKTtcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnJldm9rZUJ0bjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB1dGlsLnRocm90dGxlKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgbWluWSA9IDIwO1xuICAgICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwO1xuXG4gICAgICAgICAgICBpZiAoICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXRvcCcgKSAmJiBldnQuY2xpZW50WSA8IG1pblkgKSB8fFxuICAgICAgICAgICAgICAgICAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1ib3R0b20nICkgJiYgZXZ0LmNsaWVudFkgPiBtYXhZICkgKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGl2ZSAmJiAhYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvb2tpZVBvcHVwO1xuICB9KSgpO1xuXG4gIGNjLkxvY2F0aW9uID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbG9jYXRpb24gc2VydmljZXMgd2UgaGF2ZSBhbHJlYWR5IHNldCB1cC5cbiAgICAvLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcbiAgICAvLyBXaGVuIHRoZSByZXNwb25zZSBuZWVkcyB0byBiZSBleGVjdXRlZCBieSB0aGUgYnJvd3NlciwgdGhlbiBgaXNTY3JpcHRgIG11c3QgYmUgc2V0IHRvIHRydWUsIG90aGVyd2lzZSBpdCB3b24ndCB3b3JrLlxuXG4gICAgLy8gV2hlbiB0aGUgc2VydmljZSB1c2VzIGEgc2NyaXB0LCB0aGUgY2hhbmNlcyBhcmUgdGhhdCB5b3UnbGwgaGF2ZSB0byB1c2UgdGhlIHNjcmlwdCB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMuIEluIHRoZXNlXG4gICAgLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxuICAgIC8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIFRoZSBkZWZhdWx0IHRpbWVvdXQgaXMgNSBzZWNvbmRzLiBUaGlzIGlzIG1haW5seSBuZWVkZWQgdG8gY2F0Y2ggSlNPTlAgcmVxdWVzdHMgdGhhdCBlcnJvci5cbiAgICAgIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcbiAgICAgIC8vIGFwcCB3aWxsIHRha2UgYHRpbWVvdXRgIG1pbGxpc2Vjb25kcyB0byByZWFjdCB0byBhIEpTT05QIG5ldHdvcmsgZXJyb3IuXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuXG4gICAgICAvLyB0aGUgb3JkZXIgdGhhdCBzZXJ2aWNlcyB3aWxsIGJlIGF0dGVtcHRlZCBpblxuICAgICAgc2VydmljZXM6IFtcbiAgICAgICAgJ2lwaW5mbydcblxuICAgICAgICAvKlxuXG4gICAgICAgIC8vICdpcGluZm9kYicgcmVxdWlyZXMgc29tZSBvcHRpb25zLCBzbyB3ZSBkZWZpbmUgaXQgdXNpbmcgYW4gb2JqZWN0XG4gICAgICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcblxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2lwaW5mb2RiJyxcbiAgICAgICAgICBpbnRlcnBvbGF0ZVVybDoge1xuICAgICAgICAgICAgLy8gb2J2aW91c2x5LCB0aGlzIGlzIGEgZmFrZSBrZXlcbiAgICAgICAgICAgIGFwaV9rZXk6ICd2T2dJMzc0OGRuSXl0SXJzSmN4Uzdxc0RmNmtiSmtFOWxONHlFRHJYQXFYY0tVTnZqalpQb3gzZWtYcW1NTWxkJ1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gYXMgd2VsbCBhcyBkZWZpbmluZyBhbiBvYmplY3QsIHlvdSBjYW4gZGVmaW5lIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdFxuXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge25hbWU6ICdpcGluZm9kYid9O1xuICAgICAgICB9LFxuXG4gICAgICAgICovXG4gICAgICBdLFxuXG4gICAgICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcbiAgICAgICAgaXBpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6ICcvL2lwaW5mby5pbycsXG4gICAgICAgICAgICBoZWFkZXJzOiBbJ0FjY2VwdDogYXBwbGljYXRpb24vanNvbiddLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXG4gICAgICAgICAgICAgICAgICA/IHRvRXJyb3IoanNvbilcbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgICAgIGlwaW5mb2RiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RhdHVzQ29kZSA9PSAnRVJST1InXG4gICAgICAgICAgICAgICAgICA/IHRvRXJyb3Ioe2Vycm9yOiBqc29uLnN0YXR1c01lc3NhZ2V9KVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5Q29kZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1heG1pbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIG1ha2UgYW4gYWRkaXRpb25hbCBBSkFYIGNhbGwuIFRoZXJlZm9yZSB3ZSBwcm92aWRlIGEgYGRvbmVgIGNhbGxiYWNrIHRoYXQgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICAgICAgdXJsOiAnLy9qcy5tYXhtaW5kLmNvbS9qcy9hcGlzL2dlb2lwMi92Mi4xL2dlb2lwMi5qcycsXG4gICAgICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgICAgICAvLyBpZiBldmVyeXRoaW5nIHdlbnQgb2theSB0aGVuIGBnZW9pcDJgIFdJTEwgYmUgZGVmaW5lZFxuICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcbiAgICAgICAgICAgICAgICBkb25lKFxuICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGxvY2F0aW9uLmNvdW50cnkuaXNvX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cbiAgICAgICAgICAgICAgLy8gVGhlbiB3ZSBjYW4gJ2NvbXBsZXRlJyB0aGUgc2VydmljZSBieSBwYXNzaW5nIGRhdGEgb3IgYW4gZXJyb3IgdG8gdGhlIGBkb25lYCBjYWxsYmFjay5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExvY2F0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFNldCB1cCBvcHRpb25zXG4gICAgICB1dGlsLmRlZXBFeHRlbmQoKHRoaXMub3B0aW9ucyA9IHt9KSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHV0aWwuZGVlcEV4dGVuZCh0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMTsgLy8gdGhlIGluZGV4IChpbiBvcHRpb25zKSBvZiB0aGUgc2VydmljZSB3ZSdyZSBjdXJyZW50bHkgdXNpbmdcbiAgICB9XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0TmV4dFNlcnZpY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzZXJ2aWNlO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleCk7XG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4IDwgdGhpcy5vcHRpb25zLnNlcnZpY2VzLmxlbmd0aCAmJlxuICAgICAgICAhc2VydmljZVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRTZXJ2aWNlQnlJZHggPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgIC8vIFRoaXMgY2FuIGVpdGhlciBiZSB0aGUgbmFtZSBvZiBhIGRlZmF1bHQgbG9jYXRpb25TZXJ2aWNlLCBvciBhIGZ1bmN0aW9uLlxuICAgICAgY29uc3Qgc2VydmljZU9wdGlvbiA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1tpZHhdO1xuXG4gICAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKTtcbiAgICAgICAgcmV0dXJuIGR5bmFtaWNPcHRzLm5hbWUgPyBcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkeW5hbWljT3B0cyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbIGR5bmFtaWNPcHRzLm5hbWUgXSggZHluYW1pY09wdHMgKVxuICAgICAgICAgICkgOiBkeW5hbWljT3B0cztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBhc3N1bWUge25hbWU6ICdpcGluZm8nLCAuLi5vdGhlck9wdGlvbnN9XG4gICAgICAvLyBBbGxvd3MgdXNlciB0byBwYXNzIGluIEFQSSBrZXlzIGV0Yy5cbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qoc2VydmljZU9wdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbi5uYW1lXShcbiAgICAgICAgICBzZXJ2aWNlT3B0aW9uXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXG4gICAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUubG9jYXRlID0gZnVuY3Rpb24oY29tcGxldGUsIGVycm9yKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpO1xuXG4gICAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgICAgZXJyb3IobmV3IEVycm9yKCdObyBzZXJ2aWNlcyB0byBydW4nKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWxsYmFja0NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvcjtcblxuICAgICAgdGhpcy5ydW5TZXJ2aWNlKHNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpO1xuICAgIH07XG5cbiAgICAvLyBQb3RlbnRpYWxseSBhZGRzIGEgY2FsbGJhY2sgdG8gYSB1cmwgZm9yIGpzb25wLlxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5zZXR1cFVybCA9IGZ1bmN0aW9uKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2VPcHRzID0gdGhpcy5nZXRDdXJyZW50U2VydmljZU9wdHMoKTtcbiAgICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xuICAgICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpO1xuICAgICAgICAgIHdpbmRvd1t0ZW1wTmFtZV0gPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW0gaW4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmwpIHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmxbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1blNlcnZpY2UgPSBmdW5jdGlvbihzZXJ2aWNlLCBjb21wbGV0ZSkge1xuICAgICAgLy8gYmFzaWMgY2hlY2sgdG8gZW5zdXJlIGl0IHJlc2VtYmxlcyBhIGBzZXJ2aWNlYFxuICAgICAgaWYgKCFzZXJ2aWNlIHx8ICFzZXJ2aWNlLnVybCB8fCAhc2VydmljZS5jYWxsYmFjaykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGNhbGwgZWl0aGVyIGBnZXRTY3JpcHRgIG9yIGBtYWtlQXN5bmNSZXF1ZXN0YCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgcmVzb3VyY2VcbiAgICAgIGNvbnN0IHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0O1xuXG4gICAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxuICAgICAgcmVxdWVzdEZ1bmN0aW9uKFxuICAgICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxuICAgICAgICB4aHIgPT4ge1xuICAgICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxuICAgICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJyc7XG5cbiAgICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMgYSBzY3JpcHQsIHRoZW4gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBydW4uXG4gICAgICAgICAgLy8gaWYgdGhlIHNjcmlwdCBpcyBKU09OUCwgdGhlbiBhIHRpbWUgZGVmaW5lZCBmdW5jdGlvbiBgY2FsbGJhY2tfe0RhdGUubm93fWAgaGFzIGFscmVhZHlcbiAgICAgICAgICAvLyBiZWVuIGNhbGxlZCAoYXMgdGhlIEpTT05QIGNhbGxiYWNrKS4gVGhpcyBjYWxsYmFjayBzZXRzIHRoZSBfX0pTT05QX0RBVEEgcHJvcGVydHlcbiAgICAgICAgICBpZiAoc2VydmljZS5fX0pTT05QX0RBVEEpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHNlcnZpY2UuX19KU09OUF9EQVRBO1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNhbGwgdGhlIHNlcnZpY2UgY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2UgdGV4dCAoc28gaXQgY2FuIHBhcnNlIHRoZSByZXNwb25zZSlcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2VDYWxsYmFjay5jYWxsKHRoaXMsIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQpO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcbiAgICAgICAgc2VydmljZS5kYXRhLFxuICAgICAgICBzZXJ2aWNlLmhlYWRlcnNcbiAgICAgICk7XG5cbiAgICAgIC8vIGBzZXJ2aWNlLmRhdGFgIGFuZCBgc2VydmljZS5oZWFkZXJzYCBhcmUgb3B0aW9uYWwgKHRoZXkgb25seSBjb3VudCBpZiBgIXNlcnZpY2UuaXNTY3JpcHRgIGFueXdheSlcbiAgICB9O1xuXG4gICAgLy8gVGhlIHNlcnZpY2UgcmVxdWVzdCBoYXMgcnVuIChhbmQgcG9zc2libHkgaGFzIGEgYHJlc3BvbnNlVGV4dGApIFtubyBgcmVzcG9uc2VUZXh0YCBpZiBgaXNTY3JpcHRgXVxuICAgIC8vIFdlIG5lZWQgdG8gcnVuIGl0cyBjYWxsYmFjayB3aGljaCBkZXRlcm1pbmVzIGlmIGl0cyBzdWNjZXNzZnVsIG9yIG5vdFxuICAgIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5TZXJ2aWNlQ2FsbGJhY2sgPSBmdW5jdGlvbihcbiAgICAgIGNvbXBsZXRlLFxuICAgICAgc2VydmljZSxcbiAgICAgIHJlc3BvbnNlVGV4dFxuICAgICkge1xuICAgICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXG4gICAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcbiAgICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXG4gICAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIGFzeW5jUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gdGhlIGZ1bmN0aW9uIGBzZXJ2aWNlLmNhbGxiYWNrYCB3aWxsIGVpdGhlciBleHRyYWN0IGEgY291bnRyeSBjb2RlIGZyb20gYHJlc3BvbnNlVGV4dGAgYW5kIHJldHVybiBpdCAoaW4gYHJlc3VsdGApXG4gICAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XG4gICAgICBjb25zdCByZXN1bHQgPSBzZXJ2aWNlLmNhbGxiYWNrKHNlcnZpY2VSZXN1bHRIYW5kbGVyLCByZXNwb25zZVRleHQpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cbiAgICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5vblNlcnZpY2VSZXN1bHQgPSBmdW5jdGlvbihjb21wbGV0ZSwgcmVzdWx0KSB7XG4gICAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcbiAgICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBpZiBgZXJyYCBpcyBzZXQsIHRoZSBuZXh0IHNlcnZpY2UgaGFuZGxlciBpcyBjYWxsZWRcbiAgICAvLyBpZiBgZXJyYCBpcyBudWxsLCB0aGUgYG9uQ29tcGxldGVgIGhhbmRsZXIgaXMgY2FsbGVkIHdpdGggYGRhdGFgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1bk5leHRTZXJ2aWNlT25FcnJvciA9IGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLmxvZ0Vycm9yKGVycik7XG5cbiAgICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKCk7XG5cbiAgICAgICAgaWYgKG5leHRTZXJ2aWNlKSB7XG4gICAgICAgICAgdGhpcy5ydW5TZXJ2aWNlKG5leHRTZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcbiAgICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbCh0aGlzLCB0aGlzLmNhbGxiYWNrQ29tcGxldGUsIGRhdGEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0Q3VycmVudFNlcnZpY2VPcHRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XVxuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ge25hbWU6IHZhbH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB2YWwoKVxuICAgICAgfWVsc2UgaWYgKHV0aWwuaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICAgIHJldHVybiB2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmNvbXBsZXRlU2VydmljZSA9IGZ1bmN0aW9uKGZuLCBkYXRhKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMTtcblxuICAgICAgZm4gJiYgZm4oZGF0YSk7XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2dFcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jdXJyZW50U2VydmljZUluZGV4O1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KGlkeCk7XG5cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1RoZSBzZXJ2aWNlWycgK1xuICAgICAgICAgIGlkeCArXG4gICAgICAgICAgJ10gKCcgK1xuICAgICAgICAgIHNlcnZpY2UudXJsICtcbiAgICAgICAgICAnKSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JpcHQodXJsLCBjYWxsYmFjaywgdGltZW91dCkge1xuICAgICAgbGV0IHRpbWVvdXRJZHg7XG4gICAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgIHMudHlwZSA9ICd0ZXh0LycgKyAodXJsLnR5cGUgfHwgJ2phdmFzY3JpcHQnKTtcbiAgICAgIHMuc3JjID0gdXJsLnNyYyB8fCB1cmw7XG4gICAgICBzLmFzeW5jID0gZmFsc2U7XG5cbiAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHMucmVhZHlTdGF0ZTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkeCk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjay5kb25lICYmICghc3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzdGF0ZSkpKSB7XG4gICAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWU7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcblxuICAgICAgLy8gWW91IGNhbid0IGNhdGNoIEpTT05QIEVycm9ycywgYmVjYXVzZSBpdCdzIGhhbmRsZWQgYnkgdGhlIHNjcmlwdCB0YWdcbiAgICAgIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICAgICAgdGltZW91dElkeCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBc3luY1JlcXVlc3QoXG4gICAgICB1cmwsXG4gICAgICBvbkNvbXBsZXRlLFxuICAgICAgdGltZW91dCxcbiAgICAgIHBvc3REYXRhLFxuICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICApIHtcbiAgICAgIGNvbnN0IHhociA9IG5ldyAod2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5BY3RpdmVYT2JqZWN0KShcbiAgICAgICAgJ01TWE1MMi5YTUxIVFRQLjMuMCdcbiAgICAgICk7XG5cbiAgICAgIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSk7XG5cbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RIZWFkZXJzKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0ID0gcmVxdWVzdEhlYWRlcnNbaV0uc3BsaXQoJzonLCAyKTtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgICAgIHNwbGl0WzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgICAgIHNwbGl0WzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoeGhyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5zZW5kKHBvc3REYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0Vycm9yKG9iaikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXJyb3IgWycgKyAob2JqLmNvZGUgfHwgJ1VOS05PV04nKSArICddOiAnICsgb2JqLmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTG9jYXRpb247XG4gIH0pKCk7XG5cbiAgY2MuTGF3ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gICAgICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXG4gICAgICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgICAgIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBlbmZvcmNlIHNvbWUgdmVyc2lvbiBvZiBhIGNvb2tpZSBsYXdcbiAgICAgIGhhc0xhdzogW1xuICAgICAgICAnQVQnLFxuICAgICAgICAnQkUnLFxuICAgICAgICAnQkcnLFxuICAgICAgICAnSFInLFxuICAgICAgICAnQ1onLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRkknLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnRUwnLFxuICAgICAgICAnSFUnLFxuICAgICAgICAnSUUnLFxuICAgICAgICAnSVQnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTFUnLFxuICAgICAgICAnTVQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUEwnLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnU0snLFxuICAgICAgICAnRVMnLFxuICAgICAgICAnU0UnLFxuICAgICAgICAnR0InLFxuICAgICAgICAnVUsnLFxuICAgICAgICAnR1InLFxuICAgICAgICAnRVUnLFxuICAgICAgICAnUk8nXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gICAgICByZXZva2FibGU6IFtcbiAgICAgICAgJ0hSJyxcbiAgICAgICAgJ0NZJyxcbiAgICAgICAgJ0RLJyxcbiAgICAgICAgJ0VFJyxcbiAgICAgICAgJ0ZSJyxcbiAgICAgICAgJ0RFJyxcbiAgICAgICAgJ0xWJyxcbiAgICAgICAgJ0xUJyxcbiAgICAgICAgJ05MJyxcbiAgICAgICAgJ05PJyxcbiAgICAgICAgJ1BUJyxcbiAgICAgICAgJ0VTJ1xuICAgICAgXSxcblxuICAgICAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gICAgICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxuICAgICAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBMYXcob3B0aW9ucykge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgTGF3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gc2V0IG9wdGlvbnMgYmFjayB0byBkZWZhdWx0IG9wdGlvbnNcbiAgICAgIHV0aWwuZGVlcEV4dGVuZCgodGhpcy5vcHRpb25zID0ge30pLCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIC8vIG1lcmdlIGluIHVzZXIgb3B0aW9uc1xuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB1dGlsLmRlZXBFeHRlbmQodGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihjb3VudHJ5Q29kZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcbiAgICAgIH07XG4gICAgfTtcblxuICAgIExhdy5wcm90b3R5cGUuYXBwbHlMYXcgPSBmdW5jdGlvbihvcHRpb25zLCBjb3VudHJ5Q29kZSkge1xuICAgICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKTtcblxuICAgICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xuICAgICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uTm9Db29raWVMYXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uTm9Db29raWVMYXcoY291bnRyeUNvZGUsIGNvdW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcbiAgICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XG4gICAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcbiAgICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xuICAgICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cbiAgICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExhdztcbiAgfSkoKTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuICAvLyBZb3UgY2FuIHN0cmluZyB0b2dldGhlciB0aGVzZSB0aHJlZSBtb2R1bGVzIHlvdXJzZWxmIGhvd2V2ZXIgeW91IHdhbnQsIGJ5IHdyaXRpbmcgYSBuZXcgZnVuY3Rpb24uXG4gIGNjLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zLCBjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBjb25zdCBsYXcgPSBuZXcgY2MuTGF3KG9wdGlvbnMubGF3KTtcblxuICAgIGlmICghY29tcGxldGUpIGNvbXBsZXRlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBpZiAoIWVycm9yKSBlcnJvciA9IGZ1bmN0aW9uKCkge307XG5cbiAgICBjb25zdCBhbnN3ZXJzID0gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLm1hcCggY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgYW5zd2VyID0gdXRpbC5nZXRDb29raWUoJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzXycrY2F0ZWdvcnkpXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnldOiBhbnN3ZXIgfSA6IHVuZGVmaW5lZFxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpO1xuXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWRcbiAgICBpZiAoYW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb21wbGV0ZShhbnN3ZXJzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYy5nZXRDb3VudHJ5Q29kZShcbiAgICAgIG9wdGlvbnMsXG4gICAgICBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0aGUgbGF3IG9yIGxvY2F0aW9uIG9wdGlvbnMgYW55bW9yZVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5sYXc7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxvY2F0aW9uO1xuXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSkge1xuICAgICAgICAgIG9wdGlvbnMgPSBsYXcuYXBwbHlMYXcob3B0aW9ucywgcmVzdWx0LmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcGxldGUobmV3IGNjLlBvcHVwKG9wdGlvbnMpKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0aGUgbGF3IG9yIGxvY2F0aW9uIG9wdGlvbnMgYW55bW9yZVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5sYXc7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxvY2F0aW9uO1xuXG4gICAgICAgIGVycm9yKGVyciwgbmV3IGNjLlBvcHVwKG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gZmluZCB5b3VyIGN1cnJlbnQgbG9jYXRpb24uIEl0IGVpdGhlciBncmFicyBpdCBmcm9tIGEgaGFyZGNvZGVkIG9wdGlvbiBpblxuICAvLyBgb3B0aW9ucy5sYXcuY291bnRyeUNvZGVgLCBvciBhdHRlbXB0cyB0byBtYWtlIGEgbG9jYXRpb24gc2VydmljZSByZXF1ZXN0LiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHNcbiAgLy8gb3B0aW9ucyAod2hpY2ggY2FuIGNvbmZpZ3VyZSB0aGUgYGxhd2AgYW5kIGBsb2NhdGlvbmAgbW9kdWxlcykgYW5kIGZpcmVzIGEgY2FsbGJhY2sgd2l0aCB3aGljaFxuICAvLyBwYXNzZXMgYW4gb2JqZWN0IGB7Y29kZTogY291bnRyeUNvZGV9YCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgKHdoaWNoIGNhbiBoYXZlIHVuZGVmaW5lZCBwcm9wZXJ0aWVzKVxuICBjYy5nZXRDb3VudHJ5Q29kZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGlmIChvcHRpb25zLmxhdyAmJiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZSkge1xuICAgICAgY29tcGxldGUoe1xuICAgICAgICBjb2RlOiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBsb2NhdG9yID0gbmV3IGNjLkxvY2F0aW9uKG9wdGlvbnMubG9jYXRpb24pO1xuICAgICAgbG9jYXRvci5sb2NhdGUoZnVuY3Rpb24oc2VydmljZVJlc3VsdCkge1xuICAgICAgICBjb21wbGV0ZShzZXJ2aWNlUmVzdWx0IHx8IHt9KTtcbiAgICAgIH0sIGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29tcGxldGUoe30pO1xuICB9O1xuXG4gIC8vIGV4cG9ydCB1dGlscyAobm8gcG9pbnQgaW4gaGlkaW5nIHRoZW0sIHNvIHdlIG1heSBhcyB3ZWxsIGV4cG9zZSB0aGVtKVxuICBjYy51dGlscyA9IHV0aWw7XG5cbiAgLy8gcHJldmVudCB0aGlzIGNvZGUgZnJvbSBiZWluZyBydW4gdHdpY2VcbiAgY2MuaGFzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gIHdpbmRvdy5jb29raWVjb25zZW50ID0gY2M7XG59KSh3aW5kb3cuY29va2llY29uc2VudCB8fCB7fSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9