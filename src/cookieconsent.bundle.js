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
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalises the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-layout-categories {\n  display: inline-flex;\n  flex-direction: row; }\n  .cc-window.cc-layout-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-layout-categories .cc-btn.cc-save {\n      margin: 16px 0; }\n\n.cc-categories {\n  display: flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 6px;\n    position: relative; }\n  .cc-categories .cc-info {\n    padding: 4px;\n    font-variant: all-small-caps; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px; }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion-title {\n      cursor: pointer; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion {\n      display: none;\n      height: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion.open {\n      display: block;\n      height: auto; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-layout-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 885px) {\n  .cc-window.cc-layout-categories {\n    display: flex; } }\n\n@media screen and (max-width: 415px) {\n  .cc-save {\n    margin: 16px 0; } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    background: white;\n    border-right: none;\n    border-left: 2px solid #56cbdb;\n    border-top: 2px solid #56cbdb;\n    border-bottom: 2px solid #56cbdb;\n    color: #2a94a1;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn:hover, .cc-theme-classic .cc-category .cc-btn:focus {\n      background: #ddedf0; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0;\n      border-left: none;\n      border-right: 2px solid #56cbdb;\n      border-top: 2px solid #56cbdb;\n      border-bottom: 2px solid #56cbdb; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n    .cc-theme-classic .cc-category .cc-btn.cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px;\n    background: white;\n    border: 2px solid #56cbdb; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      content: \"\";\n      border-right: 2px solid #56cbdb;\n      border-bottom: 2px solid #56cbdb;\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      background: white; }\n    .cc-theme-classic .cc-category .cc-tooltip .cc-cookie-accordion-title {\n      color: #56cbdb; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n", ""]);


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
        'opt-out': '<div class="cc-compliance cc-highlight">{{dismiss}}{{deny}}</div>'
      },
      // select your type of popup here
      type: 'info',
      // refers to `compliance` (in other words, the buttons that are displayed)
      // define layout layouts here
      layouts: {
        // the 'block' layout tend to be for square floating popups
        basic: '{{messagelink}}{{compliance}}',
        'basic-close': '{{messagelink}}{{compliance}}{{close}}',
        'basic-header': '{{header}}{{message}}{{link}}{{compliance}}',
        categories: '{{messagelink}}<div class="form">{{categories}}{{save}}</div>' // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
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


      this.options = Object.assign({}, defaultOptions); // merge in user options

      if (util.isPlainObject(options)) {
        this.options = Object.assign({}, this.options, options);
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
      var _this = this;

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
        var status = arguments[0];
        Object.keys(cc.category).forEach(function (category) {
          return updateCategoryStatus(category, status);
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
      'cc-theme-' + opts.theme, // add the theme
      'cc-layout-' + opts.layout // add the layout 
      ];

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
        this.close(true);
        return true;
      }

      if (btn.classList.contains('cc-btn')) {
        var matches = btn.className.match(new RegExp('\\bcc-(' + Object.keys(cc.status).map(util.escapeRegExp).join('|') + ')\\b'));
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
      this.options = Object.assign({}, defaultOptions);

      if (util.isPlainObject(options)) {
        this.options = Object.assign({}, this.options, options);
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
      this.options = Object.assign({}, defaultOptions); // merge in user options

      if (util.isPlainObject(options)) {
        this.options = Object.assign({}, this.options, options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzA1M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImdldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvcCIsInNoaWZ0Iiwic2V0Q29va2llIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJleGRhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwidGhyb3R0bGUiLCJsaW1pdCIsIndhaXQiLCJhcHBseSIsInNldFRpbWVvdXQiLCJoYXNoIiwiaSIsImNociIsImxlbiIsImNoYXJDb2RlQXQiLCJub3JtYWxpc2VIZXgiLCJoZXgiLCJzdWJzdHIiLCJnZXRDb250cmFzdCIsInIiLCJwYXJzZUludCIsImciLCJiIiwieWlxIiwiZ2V0THVtaW5hbmNlIiwibnVtIiwiYW10IiwiUiIsIkIiLCJHIiwidG9TdHJpbmciLCJzbGljZSIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsInRyYXZlcnNlRE9NUGF0aCIsImVsZW0iLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdGF0dXMiLCJkZW55IiwiYWxsb3ciLCJkaXNtaXNzIiwiY2F0ZWdvcnkiLCJ1bmNhdGVnb3JpemVkIiwiZXNzZW50aWFsIiwicGVyc29uYWxpemF0aW9uIiwiYW5hbHl0aWNzIiwibWFya2V0aW5nIiwiaXNWYWxpZFN0YXR1cyIsImtleXMiLCJpbmRleE9mIiwidHJhbnNpdGlvbkVuZCIsImVsIiwiY3JlYXRlRWxlbWVudCIsInRyYW5zIiwidCIsIk9UIiwibXNUIiwiTW96VCIsIldlYmtpdFQiLCJwcmVmaXgiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlIiwiaGFzVHJhbnNpdGlvbiIsImN1c3RvbVN0eWxlcyIsIlBvcHVwIiwiZGVmYXVsdE9wdGlvbnMiLCJlbmFibGVkIiwiY29udGFpbmVyIiwib25Qb3B1cE9wZW4iLCJvblBvcHVwQ2xvc2UiLCJvbkluaXRpYWxpemUiLCJzdGF0dXNlcyIsIm9uU3RhdHVzQ2hhbmdlIiwiY29va2llTmFtZSIsImNob3NlbkJlZm9yZSIsIm9uUmV2b2tlQ2hvaWNlIiwib25Ob0Nvb2tpZUxhdyIsImNvdW50cnlDb2RlIiwiY291bnRyeSIsImNvbnRlbnQiLCJoZWFkZXIiLCJtZXNzYWdlIiwibGluayIsImhyZWYiLCJjbG9zZSIsInRhcmdldCIsInBvbGljeSIsImVsZW1lbnRzIiwibWVzc2FnZWxpbmsiLCJjYXRlZ29yaWVzIiwic2F2ZSIsIndpbmRvdyIsIm1vZGFsIiwicmV2b2tlQnRuIiwiY29tcGxpYW5jZSIsImluZm8iLCJ0eXBlIiwibGF5b3V0cyIsImJhc2ljIiwibGF5b3V0IiwicG9zaXRpb24iLCJ0aGVtZSIsInBhbGV0dGUiLCJyZXZva2FibGUiLCJhbmltYXRlUmV2b2thYmxlIiwic2hvd0xpbmsiLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJpZ25vcmVDbGlja3NGcm9tIiwiYXV0b09wZW4iLCJhdXRvQXR0YWNoIiwibW9iaWxlRm9yY2VGbG9hdCIsIndoaXRlbGlzdFBhZ2UiLCJibGFja2xpc3RQYWdlIiwib3ZlcnJpZGVIVE1MIiwiQ29va2llUG9wdXAiLCJpbml0aWFsaXplIiwicHJvdG90eXBlIiwib3B0aW9ucyIsImRlc3Ryb3kiLCJhc3NpZ24iLCJjaGVja0NhbGxiYWNrSG9va3MiLCJjYWxsIiwiaW5jbHVkZXMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwib25CdXR0b25DbGljayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNtaXNzVGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uV2luZG93U2Nyb2xsIiwib25XaW5kb3dDbGljayIsIm9uTW91c2VNb3ZlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVDdXN0b21TdHlsZSIsIm9wZW4iLCJpc09wZW4iLCJmYWRlSW4iLCJ0b2dnbGVSZXZva2VCdXR0b24iLCJzaG93UmV2b2tlIiwiZmFkZU91dCIsImFmdGVyVHJhbnNpdGlvbiIsImFmdGVyRmFkZU91dCIsIm1heEhlaWdodCIsImNsaWVudEhlaWdodCIsImZhZGVJblRpbWVvdXQiLCJvcGVuaW5nVGltZW91dCIsImFmdGVyRmFkZUluIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93IiwicmV2b2tlQ2hvaWNlIiwicHJldmVudE9wZW4iLCJjbGVhclN0YXR1c2VzIiwiaGFzQW5zd2VyZWQiLCJnZXRTdGF0dXNlcyIsInNvbWUiLCJoYXNDb25zZW50ZWQiLCJtYXAiLCJzZXRTdGF0dXNlcyIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwiZm9yRWFjaCIsImNhdGVnb3J5U3RhdHVzIiwiaW5kZXgiLCJyZW1vdmUiLCJjb21wbGV0ZSIsImNvb2tpZUVuYWJsZWQiLCJDb29raWVzT0siLCJzdGF0dXNlc1ZhbHVlcyIsIm1hdGNoZXMiLCJoYXNNYXRjaGVzIiwiZmlsdGVyIiwibWF0Y2giLCJnZXRQb3NpdGlvbkNsYXNzZXMiLCJwb3MiLCJvcHRzIiwicG9zaXRpb25TdHlsZSIsImNsYXNzZXMiLCJwdXNoIiwiYXR0YWNoQ3VzdG9tUGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJwcm9wIiwiY29tcGxpYW5jZVR5cGUiLCJtYXJrdXAiLCJkaXYiLCJjb250Iiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImNoZWNrZWQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYnRuIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlIiwicmVmZXJlbmNlcyIsImNvbG9yU3R5bGVzIiwicG9wdXAiLCJidXR0b24iLCJoaWdobGlnaHQiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInBhZGRpbmciLCJob3ZlciIsImdldEhvdmVyQ29sb3VyIiwiaGVhZCIsInNoZWV0IiwicnVsZUluZGV4IiwiaW5zZXJ0UnVsZSIsImN1c3RvbVN0eWxlIiwic3R5bGVOb2RlIiwib3duZXJOb2RlIiwiZGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxSYW5nZSIsInBhZ2VZT2Zmc2V0IiwicGFzc2l2ZSIsIndpbmRvd0NsaWNrIiwiaWdub3JlZENsaWNrcyIsImV2dCIsImNvbXBvc2VkUGF0aCIsImFyciIsImNvbnNvbGUiLCJ3YXJuIiwiaWdub3JlZENsaWNrIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJMb2NhdGlvbiIsInRpbWVvdXQiLCJzZXJ2aWNlcyIsInNlcnZpY2VEZWZpbml0aW9ucyIsImlwaW5mbyIsInVybCIsImhlYWRlcnMiLCJkb25lIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJlcnJvciIsInRvRXJyb3IiLCJjb2RlIiwiZXJyIiwiaXBpbmZvZGIiLCJpc1NjcmlwdCIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsIkVycm9yIiwiaXNvX2NvZGUiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4IiwiaWR4Iiwic2VydmljZU9wdGlvbiIsImR5bmFtaWNPcHRzIiwibG9jYXRlIiwiY2FsbGJhY2tDb21wbGV0ZSIsImNhbGxiYWNrRXJyb3IiLCJydW5TZXJ2aWNlIiwicnVuTmV4dFNlcnZpY2VPbkVycm9yIiwic2V0dXBVcmwiLCJzZXJ2aWNlT3B0cyIsImdldEN1cnJlbnRTZXJ2aWNlT3B0cyIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiaW50ZXJwb2xhdGVVcmwiLCJyZXF1ZXN0RnVuY3Rpb24iLCJnZXRTY3JpcHQiLCJtYWtlQXN5bmNSZXF1ZXN0IiwieGhyIiwicmVzcG9uc2VUZXh0IiwicnVuU2VydmljZUNhbGxiYWNrIiwiZGF0YSIsInNlcnZpY2VSZXN1bHRIYW5kbGVyIiwiYXN5bmNSZXN1bHQiLCJyZXN1bHQiLCJvblNlcnZpY2VSZXN1bHQiLCJsb2dFcnJvciIsIm5leHRTZXJ2aWNlIiwiY29tcGxldGVTZXJ2aWNlIiwidmFsIiwiZm4iLCJ0aW1lb3V0SWR4IiwicyIsInNyYyIsImFzeW5jIiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwic3RhdGUiLCJyZWFkeVN0YXRlIiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwibCIsInNlbmQiLCJMYXciLCJyZWdpb25hbExhdyIsImhhc0xhdyIsImV4cGxpY2l0QWN0aW9uIiwiZ2V0IiwiYXBwbHlMYXciLCJsYXciLCJhbnN3ZXJzIiwiYW5zd2VyIiwiZ2V0Q291bnRyeUNvZGUiLCJsb2NhdG9yIiwic2VydmljZVJlc3VsdCIsInV0aWxzIiwiY29va2llY29uc2VudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sb0NBQW9DLDhIQUE4SCxHQUFHLEVBQUUsc0JBQXNCOztBQUVuVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7O0FDaEJBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGNBQWMsUUFBUyxlQUFlLGVBQWUsd0NBQXdDLHFDQUFxQyxvQ0FBb0MsbUNBQW1DLGdDQUFnQyxFQUFFLDZCQUE2QixlQUFlLEVBQUUsd0VBQXdFLDBDQUEwQyx1Q0FBdUMsc0NBQXNDLHFDQUFxQyxrQ0FBa0MsRUFBRSxrQ0FBa0MsZ0NBQWdDLEVBQUUscUNBQXFDLCtCQUErQixFQUFFLDRDQUE0Qyw2QkFBNkIsRUFBRSwrQ0FBK0MsNkJBQTZCLEVBQUUsc0JBQXNCLDZCQUE2QixFQUFFLGdCQUFnQixxR0FBcUcscUJBQXFCLHVFQUF1RSxtQ0FBbUMsa0NBQWtDLGlDQUFpQyw4QkFBOEIsRUFBRSxxREFBcUQsb0JBQW9CLHFCQUFxQiwyQkFBMkIsd0dBQXdHLG9CQUFvQixnSEFBZ0gsa0JBQWtCLHNCQUFzQixtSEFBbUgsRUFBRSwwQkFBMEIscUJBQXFCLEVBQUUsK0VBQStFLGlCQUFpQixvQkFBb0Isd0VBQXdFLEVBQUUsMEJBQTBCLHVCQUF1QixnQkFBZ0Isd0JBQXdCLEVBQUUsZ0JBQWdCLG1CQUFtQixFQUFFLHNCQUFzQiwrQkFBK0IsRUFBRSxnQkFBZ0Isb0JBQW9CLHNCQUFzQixFQUFFLHlFQUF5RSxvQkFBb0IsRUFBRSxjQUFjLGlCQUFpQiwwQkFBMEIsbUJBQW1CLCtCQUErQixFQUFFLG9CQUFvQixlQUFlLEVBQUUsd0NBQXdDLG1CQUFtQixFQUFFLGFBQWEsbUJBQW1CLHlCQUF5QixxQkFBcUIsc0JBQXNCLHNCQUFzQix3QkFBd0IsdUJBQXVCLHdCQUF3QixFQUFFLHVDQUF1QyxrQ0FBa0MsOEJBQThCLEVBQUUsdUZBQXVGLGtDQUFrQywrQkFBK0IsRUFBRSxlQUFlLG1CQUFtQix1QkFBdUIsZUFBZSxpQkFBaUIscUJBQXFCLGlCQUFpQixzUUFBc1EsRUFBRSx1Q0FBdUMsZUFBZSxFQUFFLG1PQUFtTyxXQUFXLGNBQWMscUNBQXFDLHNDQUFzQyxFQUFFLDBCQUEwQixjQUFjLGNBQWMsa0NBQWtDLG1DQUFtQyxFQUFFLHdCQUF3QixjQUFjLGlCQUFpQixFQUFFLHlCQUF5QixlQUFlLGdCQUFnQixFQUFFLDhKQUE4SixhQUFhLEVBQUUsY0FBYyxjQUFjLEVBQUUsZUFBZSxlQUFlLEVBQUUsZ0JBQWdCLGdCQUFnQixFQUFFLGtHQUFrRyx1QkFBdUIsRUFBRSw4QkFBOEIsbUJBQW1CLHVCQUF1QixFQUFFLDJDQUEyQyxtQkFBbUIsRUFBRSxzSEFBc0gsd0JBQXdCLEVBQUUsdUJBQXVCLFlBQVksYUFBYSxXQUFXLEVBQUUsMEJBQTBCLFlBQVksYUFBYSxjQUFjLEVBQUUsNEJBQTRCLG1CQUFtQixtQkFBbUIsb0JBQW9CLHNCQUFzQixFQUFFLDBDQUEwQyxrQkFBa0Isd0JBQXdCLG1DQUFtQyxFQUFFLDJDQUEyQyxZQUFZLEVBQUUsdUJBQXVCLHVCQUF1QixFQUFFLDhEQUE4RCx5QkFBeUIsd0JBQXdCLEVBQUUsNkNBQTZDLGdCQUFnQixFQUFFLHVEQUF1RCx1QkFBdUIsRUFBRSxvQkFBb0Isa0JBQWtCLEVBQUUsaUNBQWlDLG9CQUFvQixzQkFBc0Isb0JBQW9CLHlCQUF5QixFQUFFLDZCQUE2QixtQkFBbUIsbUNBQW1DLEVBQUUsZ0NBQWdDLG9CQUFvQix5QkFBeUIsaUJBQWlCLG1CQUFtQixtQkFBbUIsbUJBQW1CLEVBQUUsb0NBQW9DLGtCQUFrQixFQUFFLDZEQUE2RCx3QkFBd0IsRUFBRSx1REFBdUQsc0JBQXNCLGtCQUFrQixFQUFFLDREQUE0RCx1QkFBdUIscUJBQXFCLEVBQUUsa0JBQWtCLCtCQUErQixvQkFBb0IsRUFBRSxFQUFFLDBDQUEwQyxhQUFhLDBCQUEwQixFQUFFLEVBQUUsaUxBQWlMLHVCQUF1QixhQUFhLEVBQUUsMEJBQTBCLGdCQUFnQixFQUFFLDJGQUEyRixjQUFjLGVBQWUsRUFBRSwwQkFBMEIsNkJBQTZCLHlCQUF5QixFQUFFLDJDQUEyQyx1QkFBdUIsRUFBRSx3Q0FBd0Msd0JBQXdCLDJCQUEyQixFQUFFLDRCQUE0QixzQkFBc0IsRUFBRSxxQ0FBcUMsNkJBQTZCLEVBQUUsNEJBQTRCLHlCQUF5QixFQUFFLCtCQUErQiw2QkFBNkIsa0JBQWtCLHdCQUF3QixFQUFFLDZCQUE2QixvQkFBb0IsRUFBRSxxREFBcUQsa0NBQWtDLHlCQUF5QixFQUFFLEVBQUUsMENBQTBDLHFDQUFxQyxvQkFBb0IsRUFBRSxFQUFFLDBDQUEwQyxjQUFjLHFCQUFxQixFQUFFLEVBQUUsa0RBQWtELG1CQUFtQix1QkFBdUIsRUFBRSwrREFBK0QsdUJBQXVCLG9CQUFvQixlQUFlLEVBQUUsdUJBQXVCLHNCQUFzQixtQ0FBbUMsRUFBRSwrQkFBK0IseUJBQXlCLHlCQUF5QixvQkFBb0IsRUFBRSw0Q0FBNEMseUJBQXlCLEVBQUUsNENBQTRDLGlDQUFpQyx5QkFBeUIseUJBQXlCLDBCQUEwQix3QkFBd0IseUJBQXlCLHFDQUFxQyxvQ0FBb0MsdUNBQXVDLHFCQUFxQiw2QkFBNkIsRUFBRSxrR0FBa0csNEJBQTRCLEVBQUUsbUVBQW1FLDJCQUEyQixnQkFBZ0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsbUJBQW1CLHdCQUF3QixtQkFBbUIsRUFBRSx3RkFBd0YseUJBQXlCLDBCQUEwQiw2QkFBNkIsbUJBQW1CLG9CQUFvQixxQkFBcUIsd0JBQXdCLEVBQUUsaUdBQWlHLGlDQUFpQyxFQUFFLG9HQUFvRyw0QkFBNEIsMkJBQTJCLGtCQUFrQixnQkFBZ0IsMEJBQTBCLHdEQUF3RCxFQUFFLHNEQUFzRCx1QkFBdUIsbUNBQW1DLDBCQUEwQix3Q0FBd0Msc0NBQXNDLHlDQUF5QyxFQUFFLHlEQUF5RCxxQkFBcUIsRUFBRSwwRUFBMEUsdUJBQXVCLEVBQUUsZ0RBQWdELHlCQUF5Qix3QkFBd0IsZ0NBQWdDLEVBQUUsd0RBQXdELHNCQUFzQix3Q0FBd0MseUNBQXlDLG9CQUFvQixxQkFBcUIsaUNBQWlDLDJCQUEyQixxQkFBcUIsbUJBQW1CLDBCQUEwQixFQUFFLDZFQUE2RSx1QkFBdUIsRUFBRSx3REFBd0QsMEJBQTBCLEVBQUUsa0RBQWtELGVBQWUsRUFBRSxnREFBZ0QsZ0JBQWdCLHlCQUF5QixFQUFFLDBDQUEwQyxjQUFjLHlCQUF5QixpQkFBaUIsRUFBRSw4Q0FBOEMscUJBQXFCLEVBQUUsc0RBQXNELG1CQUFtQixFQUFFOzs7Ozs7Ozs7Ozs7O0FDRm5vVjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCOztBQUU5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjO0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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LENBQWdCaEosT0FBTyxDQUFDTSxRQUF4QixDQUFoQjtBQUNBbU8sYUFBTyxDQUFDM0QsTUFBUixDQUFlLFVBQVM0RCxhQUFULEVBQXdCO0FBQ3JDN0ssZ0JBQVEsQ0FBQzZLLGFBQWEsSUFBSSxFQUFsQixDQUFSO0FBQ0QsT0FGRCxFQUVHL0UsS0FGSDtBQUdBO0FBQ0Q7O0FBQ0Q5RixZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsR0FmRCxDQWh2RGEsQ0Fpd0RiOzs7QUFDQXJOLElBQUUsQ0FBQ21ZLEtBQUgsR0FBV2pZLElBQVgsQ0Fsd0RhLENBb3dEYjs7QUFDQUYsSUFBRSxDQUFDQyxjQUFILEdBQW9CLElBQXBCO0FBRUEySCxRQUFNLENBQUN3USxhQUFQLEdBQXVCcFksRUFBdkI7QUFDRCxDQXh3REEsQ0F3d0RFNEgsTUFBTSxDQUFDd1EsYUFBUCxJQUF3QixFQXh3RDFCLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDSEEsY0FBYyxtQkFBTyxDQUFDLGtOQUFzRzs7QUFFNUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJjb29raWVjb25zZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Nvb2tpZWNvbnNlbnQuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYy13aW5kb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1pbnZpc2libGUge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi8qIG9ubHkgYW5pbWF0ZSBpZmhhcyBjbGFzcyAnY2MtYW5pbWF0ZScgKi9cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2Uge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtZ3Jvd2VyIHtcXG4gIC8qIEluaXRpYWxseSB3ZSBkb24ndCB3YW50IGFueSBoZWlnaHQsIGFuZCB3ZSB3YW50IHRoZSBjb250ZW50cyB0byBiZSBoaWRkZW4gKi9cXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogU2V0IG91ciB0cmFuc2l0aW9ucyB1cC4gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7IH1cXG5cXG4vKiB0aGUgcG9wdXAgd2luZG93ICovXFxuLmNjLXdpbmRvdyxcXG4uY2MtcmV2b2tlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogZXhjbHVkZSBwYWRkaW5nIHdoZW4gZGVhbGluZyB3aXRoIHdpZHRoICovXFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBDYWxpYnJpLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC8qIGJ5IHNldHRpbmcgdGhlIGJhc2UgZm9udCBoZXJlLCB3ZSBjYW4gc2l6ZSB0aGUgcmVzdCBvZiB0aGUgcG9wdXAgdXNpbmcgQ1NTIGBlbWAgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC8qIHRoZSBmb2xsb3dpbmcgYXJlIHJhbmRvbSB1bmp1c3RpZmllZCBzdHlsZXMgLSBqdXN0IGJlY2F1c2UgLSBzaG91bGQgcHJvYmFibHkgYmUgcmVtb3ZlZCAqL1xcbiAgei1pbmRleDogOTk5OTsgfVxcblxcbi5jYy13aW5kb3cuY2Mtc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7IH1cXG5cXG4vKiAyIGJhc2ljIHR5cGVzIG9mIHdpbmRvdyAtIGZsb2F0aW5nIC8gYmFubmVyICovXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXgtd2lkdGg6IDI0ZW07XFxuICAvKiAxZW0gPT0gMTZweCB0aGVyZWZvcmUgMjRlbSA9PSAzODRweCAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5jYy1yZXZva2Uge1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIGNsaWNrYWJsZSB0aGluZ3MgKi9cXG4uY2MtYnRuLFxcbi5jYy1saW5rLFxcbi5jYy1jbG9zZSxcXG4uY2MtcmV2b2tlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYy1saW5rIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtbGluazpob3ZlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmNjLWxpbms6YWN0aXZlLFxcbi5jYy1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IGluaXRpYWw7IH1cXG5cXG4uY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGlzZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGTE9BVElORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHRoZXNlIGNsYXNzZXMgcG9zaXRpb24gdGhlIGZsb2F0aW5nIGVsZW1lbnQgKi9cXG4uY2MtdG9wIHtcXG4gIHRvcDogMWVtOyB9XFxuXFxuLmNjLWxlZnQge1xcbiAgbGVmdDogMWVtOyB9XFxuXFxuLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAxZW07IH1cXG5cXG4uY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMWVtOyB9XFxuXFxuLyogbGlua3MgdGhhdCBhcmUgZGlyZWN0IGRlY2VuZGFudHMgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBibG9jayAqL1xcbi5jYy1mbG9hdGluZyA+IC5jYy1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2Uge1xcbiAgZmxleDogMSAwIGF1dG87IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBCQU5ORVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10b3Age1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmNjLWJhbm5lci5jYy1ib3R0b20ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuLmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07IH1cXG5cXG4vKiBDT01QTElBTkNFIEJPWCAqL1xcbi5jYy1jb21wbGlhbmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlID4gLmNjLWJ0biB7XFxuICBmbGV4OiAxOyB9XFxuXFxuLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuXFxuLyogQ2F0ZWdvcmllcyBMYXlvdXQgKi9cXG4uY2Mtd2luZG93LmNjLWxheW91dC1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgLmNjLXdpbmRvdy5jYy1sYXlvdXQtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtbGF5b3V0LWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW46IDE2cHggMDsgfVxcblxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbyB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwczsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gICAgYm90dG9tOiA0NnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgaGVpZ2h0OiAwOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uLm9wZW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGhlaWdodDogYXV0bzsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfSB9XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuY2Mtd2luZG93LmNjLXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyLCAuY2Mtd2luZG93LmNjLWZsb2F0aW5nLCAuY2Mtd2luZG93LmNjLXJpZ2h0LCAuY2Mtd2luZG93LmNjLWxlZnQge1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICAgIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY2Mtd2luZG93LmNjLWxheW91dC1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODVweCkge1xcbiAgLmNjLXdpbmRvdy5jYy1sYXlvdXQtY2F0ZWdvcmllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XFxuICAuY2Mtc2F2ZSB7XFxuICAgIG1hcmdpbjogMTZweCAwOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzU2Y2JkYjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NmNiZGI7XFxuICAgIGNvbG9yOiAjMmE5NGExO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmhvdmVyLCAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZDogI2RkZWRmMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAtMXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICBsZWZ0OiA2cHg7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMUY1RjVcXFwiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2MtYnRuLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcXDI3MTNcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IC00cHg7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTZjYmRiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bi5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTZjYmRiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzU2Y2JkYjtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU2Y2JkYjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGUge1xcbiAgICAgIGNvbG9yOiAjNTZjYmRiOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLyogRWRnZWxlc3MgKi9cXG4uY2MtdGhlbWUtZWRnZWxlc3MuY2Mtd2luZG93IHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjhlbSAxLjhlbTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbiEoZnVuY3Rpb24oY2MpIHtcbiAgLy8gc3RvcCBmcm9tIHJ1bm5pbmcgYWdhaW4sIGlmIGFjY2lkZW50bHkgaW5jbHVkZWQgbW9yZSB0aGFuIG9uY2UuXG4gIGlmIChjYy5oYXNJbml0aWFsaXplZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHV0aWwgPSB7XG4gICAgXG4gICAgaW50ZXJwb2xhdGVTdHJpbmc6IGZ1bmN0aW9uKHN0ciwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soYXJndW1lbnRzWzFdKSB8fCAnJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgZ2V0Q29va2llOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9ICc7ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJzsgJyArIG5hbWUgKyAnPScpXG4gICAgICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMlxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHBhcnRzXG4gICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgIC5zcGxpdCgnOycpXG4gICAgICAgICAgICAuc2hpZnQoKVxuICAgIH0sXG5cbiAgICBzZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSkge1xuICAgICAgY29uc3QgZXhkYXRlID0gbmV3IERhdGUoKVxuICAgICAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJztleHBpcmVzPScgKyBleGRhdGUudG9VVENTdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCBkb21haW4gPyAnO2RvbWFpbj0nICsgZG9tYWluIDogJycgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIHNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnIClcbiAgICB9LFxuXG4gICAgLy8gb25seSB1c2VkIGZvciB0aHJvdHRsaW5nIHRoZSAnbW91c2Vtb3ZlJyBldmVudCAodXNlZCBmb3IgYW5pbWF0aW5nIHRoZSByZXZva2UgYnV0dG9uIHdoZW4gYGFuaW1hdGVSZXZva2FibGVgIGlzIHRydWUpXG4gICAgdGhyb3R0bGU6IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICAgICAgbGV0IHdhaXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF3YWl0KSB7XG4gICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB3YWl0ID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2FpdCA9IGZhbHNlO1xuICAgICAgICAgIH0sIGxpbWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLy8gb25seSB1c2VkIGZvciBoYXNoaW5nIGpzb24gb2JqZWN0cyAodXNlZCBmb3IgaGFzaCBtYXBwaW5nIHBhbGV0dGUgb2JqZWN0cywgdXNlZCB3aGVuIGN1c3RvbSBjb2xvdXJzIGFyZSBwYXNzZWQgdGhyb3VnaCBKYXZhU2NyaXB0KVxuICAgIGhhc2g6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgbGV0IGhhc2ggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgY2hyLFxuICAgICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICAgICAgZm9yIChpOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBjaHI7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNoO1xuICAgIH0sXG5cbiAgICBub3JtYWxpc2VIZXg6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgaWYgKGhleFswXSA9PSAnIycpIHtcbiAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZXgubGVuZ3RoID09IDMpIHtcbiAgICAgICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleDtcbiAgICB9LFxuXG4gICAgLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxuICAgIGdldENvbnRyYXN0OiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGhleCA9IHRoaXMubm9ybWFsaXNlSGV4KGhleCk7XG4gICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpO1xuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNik7XG4gICAgICBjb25zdCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDA7XG4gICAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMDAwJyA6ICcjZmZmJztcbiAgICB9LFxuXG4gICAgLy8gdXNlZCB0byBjaGFuZ2UgY29sb3Igb24gaGlnaGxpZ2h0XG4gICAgZ2V0THVtaW5hbmNlOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHRoaXMubm9ybWFsaXNlSGV4KGhleCksIDE2KSxcbiAgICAgICAgYW10ID0gMzgsXG4gICAgICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcbiAgICAgICAgQiA9ICgobnVtID4+IDgpICYgMHgwMGZmKSArIGFtdCxcbiAgICAgICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXQ7XG4gICAgICAgIHJldHVybiAnIycgKyAoXG4gICAgICAgIDB4MTAwMDAwMCArXG4gICAgICAgIChSIDwgMjU1ID8gKFIgPCAxID8gMCA6IFIpIDogMjU1KSAqIDB4MTAwMDAgK1xuICAgICAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXG4gICAgICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxuICAgICAgKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC5zbGljZSgxKTtcbiAgICB9LFxuXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgaXNQbGFpbk9iamVjdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAvLyBUaGUgY29kZSBcInR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbFwiIGFsbG93cyBBcnJheSBvYmplY3RzXG4gICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciA9PSBPYmplY3RcbiAgICB9LFxuXG4gICAgdHJhdmVyc2VET01QYXRoOiBmdW5jdGlvbihlbGVtLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSByZXR1cm4gZWxlbTtcblxuICAgICAgcmV0dXJuIHRoaXMudHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdmFsaWQgY29va2llIHZhbHVlc1xuICBjYy5zdGF0dXMgPSB7XG4gICAgZGVueSAgIDogJ2RlbnknLFxuICAgIGFsbG93ICA6ICdhbGxvdycsXG4gICAgZGlzbWlzczogJ2Rpc21pc3MnXG4gIH07XG4gIGNjLmNhdGVnb3J5ID0ge1xuICAgIHVuY2F0ZWdvcml6ZWQgIDogJ2Rpc21pc3MnLFxuICAgIGVzc2VudGlhbCAgICAgIDogJ2FsbG93JyxcbiAgICBwZXJzb25hbGl6YXRpb246ICdkaXNtaXNzJyxcbiAgICBhbmFseXRpY3MgICAgICA6ICdkaXNtaXNzJyxcbiAgICBtYXJrZXRpbmcgICAgICA6ICdkaXNtaXNzJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBzdGF0dXMgaXMgaW4gdGhlIGNvbnN0YW50cyBsaXN0XG4gICAqIEBwYXJhbSB7IHN0cmluZyB9IHN0YXR1cyAtIFN0YXR1cyBTdHJpbmcgdG9cbiAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxuICAgKi9cbiAgY29uc3QgaXNWYWxpZFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY2Muc3RhdHVzKS5pbmRleE9mKHN0YXR1cykgPj0gMFxuICB9XG5cbiAgLy8gZGV0ZWN0cyB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IG5hbWVcbiAgY2MudHJhbnNpdGlvbkVuZCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYW5zID0ge1xuICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgT1Q6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICBtc1Q6ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgV2Via2l0VDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfTtcblxuICAgIGZvciAobGV0IHByZWZpeCBpbiB0cmFucykge1xuICAgICAgaWYgKFxuICAgICAgICB0cmFucy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpICYmXG4gICAgICAgIHR5cGVvZiBlbC5zdHlsZVtwcmVmaXggKyAncmFuc2l0aW9uJ10gIT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KSgpO1xuXG4gIGNjLmhhc1RyYW5zaXRpb24gPSAhIWNjLnRyYW5zaXRpb25FbmQ7XG5cbiAgLy8gY29udGFpbnMgcmVmZXJlbmNlcyB0byB0aGUgY3VzdG9tIDxzdHlsZT4gdGFnc1xuICBjYy5jdXN0b21TdHlsZXMgPSB7fTtcblxuICBjYy5Qb3B1cCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxuICAgICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgLy8gb3B0aW9uYWwgKGV4cGVjdGluZyBhIEhUTUwgZWxlbWVudCkgaWYgcGFzc2VkLCB0aGUgcG9wdXAgaXMgYXBwZW5kZWQgdG8gdGhpcyBlbGVtZW50LiBkZWZhdWx0IGlzIGBkb2N1bWVudC5ib2R5YFxuICAgICAgY29udGFpbmVyOiBudWxsLFxuXG4gICAgICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXG4gICAgICBjb29raWU6IHtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcbiAgICAgICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXG4gICAgICAgIHBhdGg6ICcvJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkb21haW4gdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgb24gdGhpcyBkb21haW4uXG4gICAgICAgIC8vICAtIEd1aWRlIHRvIGNvb2tpZSBkb21haW5zIC0gaHR0cHM6Ly93d3cubXhzYXNoYS5ldS9ibG9nLzIwMTQvMDMvMDQvZGVmaW5pdGl2ZS1ndWlkZS10by1jb29raWUtZG9tYWlucy9cbiAgICAgICAgZG9tYWluOiAnJyxcblxuICAgICAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcbiAgICAgICAgZXhwaXJ5RGF5czogMzY1LFxuXG4gICAgICAgIC8vIElmIHRydWUgdGhlIGNvb2tpZSB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgc2VjdXJlIGZsYWcuIFNlY3VyZSBjb29raWVzIHdpbGwgb25seSBiZSB0cmFuc21pdHRlZCB2aWEgSFRUUFMuXG4gICAgICAgIHNlY3VyZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZXNlIGNhbGxiYWNrIGhvb2tzIGFyZSBjYWxsZWQgYXQgY2VydGFpbiBwb2ludHMgaW4gdGhlIHByb2dyYW0gZXhlY3V0aW9uXG4gICAgICBvblBvcHVwT3BlbjogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uUG9wdXBDbG9zZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uSW5pdGlhbGl6ZTogZnVuY3Rpb24oc3RhdHVzZXMpIHt9LFxuICAgICAgb25TdGF0dXNDaGFuZ2U6IGZ1bmN0aW9uKGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKSB7fSxcbiAgICAgIG9uUmV2b2tlQ2hvaWNlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Ob0Nvb2tpZUxhdzogZnVuY3Rpb24oY291bnRyeUNvZGUsIGNvdW50cnkpIHt9LFxuXG4gICAgICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIGhlYWRlcjogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcbiAgICAgICAgZGlzbWlzczogJ0dvdCBpdCEnLFxuICAgICAgICBhbGxvdzogJ0FsbG93IGNvb2tpZXMnLFxuICAgICAgICBkZW55OiAnRGVjbGluZScsXG4gICAgICAgIGxpbms6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcbiAgICAgICAgY2xvc2U6ICcmI3gyNzRjOycsXG4gICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgIHBvbGljeTogJ0Nvb2tpZSBQb2xpY3knXG4gICAgICB9LFxuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBIVE1MIGZvciB0aGUgZWxlbWVudHMgYWJvdmUuIFRoZSBzdHJpbmcge3toZWFkZXJ9fSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGVxdWl2YWxlbnQgdGV4dCBiZWxvdy5cbiAgICAgIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXG4gICAgICAvL1xuICAgICAgLy8gIC0gQVJJQSBydWxlcyBzdWdnZXN0IHRvIGVuc3VyZSBjb250cm9scyBhcmUgdGFiYmFibGUgKHNvIHRoZSBicm93c2VyIGNhbiBmaW5kIHRoZSBmaXJzdCBjb250cm9sKSxcbiAgICAgIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImNjLWhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+Jm5ic3A7JyxcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvc3Bhbj4nLFxuICAgICAgICBtZXNzYWdlbGluazpcbiAgICAgICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fSA8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT48L3NwYW4+JyxcbiAgICAgICAgZGlzbWlzczpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kaXNtaXNzXCI+e3tkaXNtaXNzfX08L2E+JyxcbiAgICAgICAgYWxsb3c6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJhbGxvdyBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgIGNsYXNzPVwiY2MtYnRuIGNjLWFsbG93XCI+e3thbGxvd319PC9hPicsXG4gICAgICAgIGRlbnk6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJkZW55IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kZW55XCI+e3tkZW55fX08L2E+JyxcbiAgICAgICAgbGluazpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcbiAgICAgICAgY2xvc2U6XG4gICAgICAgICAgJzxzcGFuIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1jbG9zZVwiPnt7Y2xvc2V9fTwvc3Bhbj4nLFxuICAgICAgICBjYXRlZ29yaWVzOiBgIFxuICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNhdGVnb3JpZXNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInVuY2F0ZWdvcml6ZWRcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+VW5jYXRlZ29yaXplZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiVW5jYXRlZ29yaXplZCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiMVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCBhbnkgb3RoZXIgY2F0ZWdvcnkuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiVW5jYXRlZ29yaXplZCBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+VW5jYXRlZ29yaXplZCBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCIyXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlc3NlbnRpYWxcIiBjaGVja2VkIGRpc2FibGVkLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5Fc3NlbnRpYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiM1wiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgZXNzZW50aWFsIGFwcGxpY2F0aW9uIG9yIHdlYnNpdGUgb3BwZXJhdGlvbiBjb29raWVzLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+RXNzZW50aWFsIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjRcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBlcnNvbmFsaXphdGlvblwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5QZXJzb25hbGl6YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiNVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB0aGUgYXBwbGljYXRpb24gdG8gYSBzcGVjaWZpYyB1c2VyLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+UGVyc29uYWxpemF0aW9uIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjZcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuYWx5dGljc1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5BbmFseXRpY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiN1wiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgYW5hbHlpemUgZGF0YS48L3A+XG4gICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJBbmFseXRpY3MgQ29va2llcyBMaXN0XCIgcm9sZT1cImJ1dHRvblwiPkFuYWx5dGljcyBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI4XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYXJrZXRpbmdcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+TWFya2V0aW5nPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjlcIj5ePC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIHBlcm9uYWxpemUgeW91ciBpbnRlcm5ldCBzaG9wcGluZyAmIGFkdmVydGlzZW1lbnQgZXhwZXJpZW5jZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiTWFya2V0aW5nIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5NYXJrZXRpbmcgQ29va2llczwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIGAsXG4gICAgICAgIHNhdmU6IGBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIGBcbiAgICAgICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XG4gICAgICAvLyAgLSB7e2NsYXNzZXN9fSBpcyB3aGVyZSBhZGRpdGlvbmFsIGNsYXNzZXMgZ2V0IGFkZGVkXG4gICAgICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxuICAgICAgd2luZG93OlxuICAgICAgICAnPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1sYWJlbD1cImNvb2tpZWNvbnNlbnRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy13aW5kb3cge3tjbGFzc2VzfX1cIj48IS0tZ29vZ2xlb2ZmOiBhbGwtLT57e2NoaWxkcmVufX08IS0tZ29vZ2xlb246IGFsbC0tPjwvZGl2PicsXG4gICAgICBcbiAgICAgIG1vZGFsOiAnJyxcblxuICAgICAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxuICAgICAgLy8gSXQgY2FuIGJlIGVuYWJsZWQgb2YgZGlzYWJsZWQgdXNpbmcgdGhlIGByZXZva2FibGVgIG9wdGlvblxuICAgICAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxuXG4gICAgICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgICAgIGNvbXBsaWFuY2U6IHtcbiAgICAgICAgaW5mbzogJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlXCI+e3tkaXNtaXNzfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LWluJzpcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2FsbG93fX17e2N1c3RvbWl6ZX19PC9kaXY+JyxcbiAgICAgICAgJ29wdC1vdXQnOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+J1xuICAgICAgfSxcblxuICAgICAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXG4gICAgICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgICAgIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXG4gICAgICBsYXlvdXRzOiB7XG4gICAgICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgICAgIGJhc2ljICAgICAgICAgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX0nLFxuICAgICAgICAnYmFzaWMtY2xvc2UnIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcbiAgICAgICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19JyxcbiAgICAgICAgY2F0ZWdvcmllcyAgICA6ICd7e21lc3NhZ2VsaW5rfX08ZGl2IGNsYXNzPVwiZm9ybVwiPnt7Y2F0ZWdvcmllc319e3tzYXZlfX08L2Rpdj4nXG4gICAgICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xuICAgICAgICAvLydteS1jb29sLWxheW91dCc6ICc8ZGl2IGNsYXNzPVwibXktc3BlY2lhbC1sYXlvdXRcIj57e21lc3NhZ2V9fXt7Y29tcGxpYW5jZX19PC9kaXY+e3tjbG9zZX19JyxcbiAgICAgIH0sXG5cbiAgICAgIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXG4gICAgICBsYXlvdXQ6ICdiYXNpYycsXG5cbiAgICAgIC8vIHRoaXMgcmVmZXJzIHRvIHRoZSBwb3B1cCB3aW5kb3dzIHBvc2l0aW9uLiB3ZSBjdXJyZW50bHkgc3VwcG9ydDpcbiAgICAgIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXG4gICAgICAvLyAgLSBmbG9hdGluZyBwb3NpdGlvbnM6IHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHRcbiAgICAgIC8vXG4gICAgICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJywgLy8gZGVmYXVsdCBwb3NpdGlvbiBpcyAnYm90dG9tJ1xuXG4gICAgICAvLyBBdmFpbGFibGUgc3R5bGVzXG4gICAgICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXG4gICAgICAvLyAgICAtZWRnZWxlc3NcbiAgICAgIC8vICAgIC1jbGFzc2ljXG4gICAgICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cbiAgICAgIC8vIE5vdGU6IHN0eWxlIFwid2lyZVwiIGlzIHVzZWQgZm9yIHRoZSBjb25maWd1cmF0b3IsIGJ1dCBoYXMgbm8gQ1NTIHN0eWxlcyBvZiBpdHMgb3duLCBvbmx5IHBhbGV0dGUgaXMgdXNlZC5cbiAgICAgIHRoZW1lOiAnYmxvY2snLFxuXG4gICAgICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcbiAgICAgIC8vIE5vdGU6IGJ5IGRlZmF1bHQsIHdlIGFuaW1hdGUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgZnJvbSAwIHRvIGZ1bGwgc2l6ZVxuICAgICAgc3RhdGljOiBmYWxzZSxcblxuICAgICAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXG4gICAgICAvLyBpZGVhbGx5LCBhbnkgY3VzdG9tIGNvbG91cnMvdGhlbWVzIHNob3VsZCBiZSBjcmVhdGVkIGluIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQsIGFzIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQuXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxuICAgICAgLy8gICAgIGJ1dHRvbjoge2JhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnI2Y4ZTcxYyd9LFxuICAgICAgLy8gICAgIGhpZ2hsaWdodDoge2JhY2tncm91bmQ6ICcjZjhlNzFjJywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjMDAwMDAwJ30sXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIGBoaWdobGlnaHRgIGlzIG9wdGlvbmFsIGFuZCBleHRlbmRzIGBidXR0b25gLiBpZiBpdCBleGlzdHMsIGl0IHdpbGwgYXBwbHkgdG8gdGhlIGZpcnN0IGJ1dHRvblxuICAgICAgLy8gb25seSBiYWNrZ3JvdW5kIG5lZWRzIHRvIGJlIGRlZmluZWQgZm9yIGV2ZXJ5IGVsZW1lbnQuIGlmIG5vdCBzZXQsIG90aGVyIGNvbG9ycyBjYW4gYmUgY2FsY3VsYXRlZCBmcm9tIGl0XG4gICAgICBwYWxldHRlOiBudWxsLFxuXG4gICAgICAvLyBTb21lIGNvdW50cmllcyBSRVFVSVJFIHRoYXQgYSB1c2VyIGNhbiBjaGFuZ2UgdGhlaXIgbWluZC4gWW91IGNhbiBjb25maWd1cmUgdGhpcyB5b3Vyc2VsZi5cbiAgICAgIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGF3YCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcbiAgICAgIHJldm9rYWJsZTogZmFsc2UsXG5cbiAgICAgIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxuICAgICAgYW5pbWF0ZVJldm9rYWJsZTogdHJ1ZSxcblxuICAgICAgLy8gdXNlZCB0byBkaXNhYmxlIGxpbmsgb24gZXhpc3RpbmcgbGF5b3V0c1xuICAgICAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXG4gICAgICBzaG93TGluazogdHJ1ZSxcblxuICAgICAgLy8gc2V0IHZhbHVlIGFzIHNjcm9sbCByYW5nZSB0byBlbmFibGVcbiAgICAgIGRpc21pc3NPblNjcm9sbDogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBhdXRvZGlzbWlzcyBhZnRlciBzZXQgdGltZVxuICAgICAgZGlzbWlzc09uVGltZW91dDogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcblxuICAgICAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxuICAgICAgLy8gc2hvdWxkIGJlIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIChub3QgQ1NTIHNlbGVjdG9ycylcbiAgICAgIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0biddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxuXG4gICAgICAvLyBUaGUgYXBwbGljYXRpb24gYXV0b21hdGljYWxseSBkZWNpZGUgd2hldGhlciB0aGUgcG9wdXAgc2hvdWxkIG9wZW4uXG4gICAgICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcbiAgICAgIGF1dG9PcGVuOiB0cnVlLFxuXG4gICAgICAvLyBCeSBkZWZhdWx0IHRoZSBjcmVhdGVkIEhUTUwgaXMgYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyICh3aGljaCBkZWZhdWx0cyB0byA8Ym9keT4pLiBZb3UgY2FuIHByZXZlbnQgdGhpcyBiZWhhdmlvdXJcbiAgICAgIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcbiAgICAgIC8vXG4gICAgICAvLyAgICAgY29uc3QgaW5zdGFuY2UgPSBjb29raWVjb25zZW50LmZhY3Rvcnkob3B0aW9ucyk7XG4gICAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZS5lbGVtZW50KTtcbiAgICAgIC8vXG4gICAgICBhdXRvQXR0YWNoOiB0cnVlLFxuXHQgIFxuXHQgIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcblx0ICBtb2JpbGVGb3JjZUZsb2F0OiB0cnVlLFxuXG4gICAgICAvLyBzaW1wbGUgd2hpdGVsaXN0L2JsYWNrbGlzdCBmb3IgcGFnZXMuIHNwZWNpZnkgcGFnZSBieTpcbiAgICAgIC8vICAgLSB1c2luZyBhIHN0cmluZyA6ICcvaW5kZXguaHRtbCcgICAgICAgICAgIChtYXRjaGVzICcvaW5kZXguaHRtbCcgZXhhY3RseSkgT1JcbiAgICAgIC8vICAgLSB1c2luZyBSZWdFeHAgICA6IC9cXC9wYWdlX1tcXGRdK1xcLmh0bWwvICAgIChtYXRjaGVkICcvcGFnZV8xLmh0bWwnIGFuZCAnL3BhZ2VfMi5odG1sJyBldGMpXG4gICAgICB3aGl0ZWxpc3RQYWdlOiBbXSxcbiAgICAgIGJsYWNrbGlzdFBhZ2U6IFtdLFxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGRlZmluZWQsIHRoZW4gaXQgaXMgdXNlZCBhcyB0aGUgaW5uZXIgaHRtbCBpbnN0ZWFkIG9mIGxheW91dC4gVGhpcyBhbGxvd3MgZm9yIHVsdGltYXRlIGN1c3RvbWlzYXRpb24uXG4gICAgICAvLyBCZSBzdXJlIHRvIHVzZSB0aGUgY2xhc3NlcyBgY2MtYnRuYCBhbmQgYGNjLWFsbG93YCwgYGNjLWRlbnlgIG9yIGBjYy1kaXNtaXNzYC4gVGhleSBlbmFibGUgdGhlIGFwcCB0byByZWdpc3RlciBjbGlja1xuICAgICAgLy8gaGFuZGxlcnMuIFlvdSBjYW4gdXNlIG90aGVyIHByZS1leGlzdGluZyBjbGFzc2VzIHRvby4gU2VlIGBzcmMvc3R5bGVzYCBmb2xkZXIuXG4gICAgICBvdmVycmlkZUhUTUw6IG51bGxcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gQ29va2llUG9wdXAoKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7IC8vIGFscmVhZHkgcmVuZGVyZWRcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IG9wdGlvbnMgYmFjayB0byBkZWZhdWx0IG9wdGlvbnNcbiAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIC8vIG1lcmdlIGluIHVzZXIgb3B0aW9uc1xuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cblxuICAgICAgLy8gcmV0dXJucyB0cnVlIGlmIGBvbkNvbXBsZXRlYCB3YXMgY2FsbGVkXG4gICAgICBpZiAoY2hlY2tDYWxsYmFja0hvb2tzLmNhbGwodGhpcykpIHtcbiAgICAgICAgLy8gdXNlciBoYXMgYWxyZWFkeSBhbnN3ZXJlZFxuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBhcHBseSBibGFja2xpc3QgLyB3aGl0ZWxpc3RcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmxhY2tsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMud2hpdGVsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgZnVsbCBtYXJrdXAgZWl0aGVyIGNvbnRhaW5zIHRoZSB3cmFwcGVyIG9yIGl0IGRvZXMgbm90IChmb3IgbXVsdGlwbGUgaW5zdGFuY2VzKVxuICAgICAgbGV0IGNvb2tpZVBvcHVwID0gdGhpcy5vcHRpb25zLndpbmRvd1xuICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBnZXRQb3B1cENsYXNzZXMuY2FsbCh0aGlzKS5qb2luKCcgJykpXG4gICAgICAgIC5yZXBsYWNlKCd7e2NoaWxkcmVufX0nLCBnZXRQb3B1cElubmVyTWFya3VwLmNhbGwodGhpcykpO1xuXG4gICAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxuICAgICAgY29uc3QgY3VzdG9tSFRNTCA9IHRoaXMub3B0aW9ucy5vdmVycmlkZUhUTUw7XG4gICAgICBpZiAodHlwZW9mIGN1c3RvbUhUTUwgPT0gJ3N0cmluZycgJiYgY3VzdG9tSFRNTC5sZW5ndGggKSB7XG4gICAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgc3RhdGljLCB3ZSBuZWVkIHRvIGdyb3cgdGhlIGVsZW1lbnQgZnJvbSAwIGhlaWdodCBzbyBpdCBkb2Vzbid0IGp1bXAgdGhlIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIHdlIHdyYXAgYW4gZWxlbWVudCBhcm91bmQgaXQgd2hpY2ggd2lsbCBtYXNrIHRoZSBoaWRkZW4gY29udGVudFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgLy8gYGdyb3dlcmAgaXMgYSB3cmFwcGVyIGRpdiB3aXRoIGEgaGlkZGVuIG92ZXJmbG93IHdob3NlIGhlaWdodCBpcyBhbmltYXRlZFxuICAgICAgICBjb25zdCB3cmFwcGVyID0gYXBwZW5kTWFya3VwLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNjLWdyb3dlclwiPicgKyBjb29raWVQb3B1cCArICc8L2Rpdj4nXG4gICAgICAgICk7XG5cbiAgICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJyc7IC8vIHNldCBpdCB0byB2aXNpYmxlIChiZWNhdXNlIGFwcGVuZE1hcmt1cCBoaWRlcyBpdClcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlci5maXJzdENoaWxkOyAvLyBnZXQgdGhlIGBlbGVtZW50YCByZWZlcmVuY2UgZnJvbSB0aGUgd3JhcHBlclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gYXBwZW5kTWFya3VwLmNhbGwodGhpcywgY29va2llUG9wdXApO1xuICAgICAgfVxuXG4gICAgICBhcHBseUF1dG9EaXNtaXNzLmNhbGwodGhpcyk7XG5cbiAgICAgIGFwcGx5UmV2b2tlQnV0dG9uLmNhbGwodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b09wZW4pIHtcbiAgICAgICAgdGhpcy5hdXRvT3BlbigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMub25CdXR0b25DbGljayAmJiB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcbiAgICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGlzbWlzc1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGlzbWlzc1RpbWVvdXQpO1xuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25XaW5kb3dTY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwpO1xuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25XaW5kb3dDbGljaykge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spO1xuICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vbk1vdXNlTW92ZSkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZSk7XG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbGVtZW50ICYmIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuXG4gICAgICBpZiAodGhpcy5yZXZva2VCdG4gJiYgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLnJldm9rZUJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMucmV2b2tlQnRuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmV2b2tlQnRuID0gbnVsbDtcblxuICAgICAgcmVtb3ZlQ3VzdG9tU3R5bGUodGhpcy5vcHRpb25zLnBhbGV0dGUpO1xuICAgICAgdGhpcy5vcHRpb25zID0gbnVsbDtcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlSW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblBvcHVwT3Blbi5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oc2hvd1Jldm9rZSkge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgaWYgKGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgICB0aGlzLmZhZGVPdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaG93UmV2b2tlICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3B1cENsb3NlLmNhbGwodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZmFkZUluID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgaWYgKCFjYy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuO1xuXG4gICAgICAvLyBUaGlzIHNob3VsZCBhbHdheXMgYmUgY2FsbGVkIEFGVEVSIGZhZGVPdXQgKHdoaWNoIGlzIGdvdmVybmVkIGJ5IHRoZSAndHJhbnNpdGlvbmVuZCcgZXZlbnQpLlxuICAgICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAgIC8vIGhhcyBhIGNoYW5jZSB0byBydW4sIHRoZW4gd2UgcnVuIGl0IG91cnNlbHZlc1xuICAgICAgaWYgKHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKSB7XG4gICAgICAgIGFmdGVyRmFkZU91dC5jYWxsKHRoaXMsIGVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmYWRlSW5UaW1lb3V0ID0gMjA7IC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcblxuICAgICAgICAvLyBBbHRob3VnaCBtb3N0IGJyb3dzZXJzIGNhbiBoYW5kbGUgdmFsdWVzIGxlc3MgdGhhbiAyMG1zLCBpdCBzaG91bGQgcmVtYWluIGFib3ZlIHRoaXMgdmFsdWUuXG4gICAgICAgIC8vIFRoaXMgaXMgYmVjYXVzZSB3ZSBhcmUgd2FpdGluZyBmb3IgYSBcImJyb3dzZXIgcmVkcmF3XCIgYmVmb3JlIHdlIHJlbW92ZSB0aGUgJ2NjLWludmlzaWJsZScgY2xhc3MuXG4gICAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXG4gICAgICAgIC8vIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBmcm9tIG5vdGhpbmcuIFRoZXJlZm9yZSB3ZSBNVVNUIGFsbG93IGVub3VnaCB0aW1lIGZvciB0aGUgYnJvd3NlciB0byBkb1xuICAgICAgICAvLyBpdHMgdGhpbmcuIFRoZSBhY3R1YWxseSBkaWZmZXJlbmNlIGJldHdlZW4gdXNpbmcgMCBhbmQgMjAgaW4gYSBzZXQgdGltZW91dCBpcyBuZWdsZWdpYmxlIGFueXdheVxuICAgICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgICBhZnRlckZhZGVJbi5iaW5kKHRoaXMsIGVsKSxcbiAgICAgICAgICBmYWRlSW5UaW1lb3V0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5mYWRlT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgaWYgKCFjYy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuaW5nVGltZW91dCk7XG4gICAgICAgIGFmdGVyRmFkZUluLmJpbmQodGhpcywgZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gYWZ0ZXJGYWRlT3V0LmJpbmQodGhpcywgZWwpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGNjLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKTtcblxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICcnICYmXG4gICAgICAgIChjYy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS50b2dnbGVSZXZva2VCdXR0b24gPSBmdW5jdGlvbihzaG93KSB7XG4gICAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSc7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5yZXZva2VDaG9pY2UgPSBmdW5jdGlvbihwcmV2ZW50T3Blbikge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKCk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5vblJldm9rZUNob2ljZS5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAoIXByZXZlbnRPcGVuKSB7XG4gICAgICAgIHRoaXMuYXV0b09wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXG4gICAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5oYXNBbnN3ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG8gYWxsIG9mIHRoZSBjYXRlZ29yaWVzXG4gICAgICogQHJldHVybiB7IGFycmF5PGJvb2xlYW4+IH0gLSB0cnVlIGlmIGNvbnNlbnQgaGFzIGJlZW4gZ2l2ZW5cbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaGFzQ29uc2VudGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLm1hcCggc3RhdHVzID0+IHN0YXR1cyA9PT0gY2Muc3RhdHVzLmFsbG93IHx8IHN0YXR1cyA9PT0gY2Muc3RhdHVzLmRpc21pc3MgKVxuICAgIH07XG5cbiAgICAvLyBvcGVucyB0aGUgcG9wdXAgaWYgbm8gYW5zd2VyIGhhcyBiZWVuIGdpdmVuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmF1dG9PcGVuID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgY29uc3QgaGFzQW5zd2VyZWQgPSB0aGlzLmhhc0Fuc3dlcmVkKClcbiAgICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBcbiAgICAgKiBTZXQncyBjb29raWUgc3RhdHVzZXNcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGFsbE9yVW5kZWYgICAgICAtIElmIHRoaXMgaXMgdGhlIG9ubHkgcGFyYW0sIHNldCBBTEwgaWYgbm90LCBzZXQgVW5jYXRlZ29yaXplZCBjb29raWVzIHN0YXR1c2VzIHNldCB0byB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGVzc2VudGlhbCAgICAgICAtIEVzc2VudGlhbCBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IHBlcnNvbmFsaXphdGlvbiAtIFByZWZlcmVuY2VzIC8gRnVuY3Rpb25hbGl0eSBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGFuYWx5dGljcyAgICAgICAtIEFuYWx5dGlzIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IHN0cmluZzxjYy5zdGF0dXM+IH0gbWFya2V0aW5nICAgICAgIC0gTWFya2V0aW5nIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgICAqIEByZXR1cm4geyB1bmRlZmluZWQgfVxuICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLnNldFN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7bmFtZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmV9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuXG4gICAgICAvLyBpZiBgc3RhdHVzYCBpcyB2YWxpZFxuICAgICAgY29uc3QgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMgPSAoIGNhdGVnb3J5TmFtZSwgc3RhdHVzICkgPT4ge1xuICAgICAgICBpZiAoaXNWYWxpZFN0YXR1cyhzdGF0dXMpKSB7XG4gICAgICAgICAgY29uc3QgY29va2llTmFtZSA9IG5hbWUrJ18nK2NhdGVnb3J5TmFtZVxuICAgICAgICAgIGNvbnN0IGNob3NlbkJlZm9yZSA9IE9iamVjdC5rZXlzKGNjLnN0YXR1cykuaW5kZXhPZih1dGlsLmdldENvb2tpZShjb29raWVOYW1lKSkgPj0gMFxuICAgICAgICAgIHV0aWwuc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uU3RhdHVzQ2hhbmdlLmNhbGwodGhpcywgY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGNjLmNhdGVnb3J5WyBjYXRlZ29yeSBdICkgKVxuICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXJndW1lbnRzWyAwIF1cbiAgICAgICAgT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgc3RhdHVzICkgKVxuICAgICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgIGFyZ3VtZW50cy5mb3JFYWNoKCAoIGNhdGVnb3J5U3RhdHVzLCBpbmRleCApID0+IHtcbiAgICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYy5jYXRlZ29yeVxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5nZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5TmFtZSA9PiB1dGlsLmdldENvb2tpZSh0aGlzLm9wdGlvbnMuY29va2llLm5hbWUrJ18nK2NhdGVnb3J5TmFtZSkgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbGVhclN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZTtcbiAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgICB1dGlsLnNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAgLy8gVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nO1xuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZUluKGVsKSB7XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbDtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgb24gJ3RyYW5zaXRpb25lbmQnIChvbmx5IG9uIHRoZSB0cmFuc2l0aW9uIG9mIHRoZSBmYWRlT3V0KS4gVGhhdCdzIGJlY2F1c2UgYWZ0ZXIgd2UndmUgZmFkZWQgb3V0LCB3ZSBuZWVkIHRvXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5IHRvICdub25lJyAoc28gdGhlcmUgYXJlbid0IGFubm95aW5nIGludmlzaWJsZSBwb3B1cHMgYWxsIG92ZXIgdGhlIHBhZ2UpLiBJZiBmb3Igd2hlbmV2ZXIgcmVhc29uIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBpcyBub3QgY2FsbGVkIChsYWNrIG9mIHN1cHBvcnQpLCB0aGUgb3Blbi9jbG9zZSBtZWNoYW5pc20gd2lsbCBzdGlsbCB3b3JrLlxuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZU91dChlbCkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGhvb2sgYW5kIHJldHVybnMgdHJ1ZSAoaWYgbmVlZGVkKSBhbmQgcmV0dXJucyBmYWxzZSBvdGhlcndpc2VcbiAgICBmdW5jdGlvbiBjaGVja0NhbGxiYWNrSG9va3MoKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZSA9IHRoaXMub3B0aW9ucy5vbkluaXRpYWxpemUuYmluZCh0aGlzKTtcblxuICAgICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQpIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmRlbnkpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbmRvdy5Db29raWVzT0sgfHwgd2luZG93Lm5hdmlnYXRvci5Db29raWVzT0spIHtcbiAgICAgICAgY29tcGxldGUoY2Muc3RhdHVzLmFsbG93KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSlcbiAgICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXG4gICAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcbiAgICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcbiAgICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+IGNjLmNhdGVnb3J5WyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gPSBzdGF0dXMgPyBzdGF0dXMgOiBjYy5jYXRlZ29yeVsgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcbiAgICAgIGNvbXBsZXRlKCBoYXNNYXRjaGVzID8gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogc3RhdHVzIH0gKSApICA6IHVuZGVmaW5lZCApXG5cbiAgICAgIHJldHVybiBoYXNNYXRjaGVzO1xuICAgIH1cblxuICAgIC8vIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodFxuICAgIGZ1bmN0aW9uIGdldFBvc2l0aW9uQ2xhc3NlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoICctJyApLm1hcCggcG9zID0+ICdjYy0nK3BvcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cENsYXNzZXMoKSB7XG4gICAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuICAgICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcbiAgICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgICAgOiAnZmxvYXRpbmcnO1xuXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpICYmIG9wdHMubW9iaWxlRm9yY2VGbG9hdCkge1xuICAgICAgICBwb3NpdGlvblN0eWxlID0gJ2Zsb2F0aW5nJztcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcbiAgICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcbiAgICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgICAgICdjYy1sYXlvdXQtJyArIG9wdHMubGF5b3V0IC8vIGFkZCB0aGUgbGF5b3V0IFxuICAgICAgXTtcblxuICAgICAgaWYgKG9wdHMuc3RhdGljKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnY2Mtc3RhdGljJyk7XG4gICAgICB9XG5cbiAgICAgIGNsYXNzZXMucHVzaC5hcHBseShjbGFzc2VzLCBnZXRQb3NpdGlvbkNsYXNzZXMuY2FsbCh0aGlzKSk7XG5cbiAgICAgIC8vIHdlIG9ubHkgYWRkIGV4dHJhIHN0eWxlcyBpZiBgcGFsZXR0ZWAgaGFzIGJlZW4gc2V0IHRvIGEgdmFsaWQgdmFsdWVcbiAgICAgIGF0dGFjaEN1c3RvbVBhbGV0dGUuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMucGFsZXR0ZSk7XG5cbiAgICAgIC8vIGlmIHdlIG92ZXJyaWRlIHRoZSBwYWxldHRlLCBhZGQgdGhlIGNsYXNzIHRoYXQgZW5hYmxlcyB0aGlzXG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkID0ge307XG4gICAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zO1xuXG4gICAgICAvLyByZW1vdmVzIGxpbmsgaWYgc2hvd0xpbmsgaXMgZmFsc2VcbiAgICAgIGlmICghb3B0cy5zaG93TGluaykge1xuICAgICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJzsgXG4gICAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2U7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5rZXlzKG9wdHMuZWxlbWVudHMpLmZvckVhY2goIHByb3AgPT4ge1xuICAgICAgICBpbnRlcnBvbGF0ZWRbcHJvcF0gPSB1dGlsLmludGVycG9sYXRlU3RyaW5nKFxuICAgICAgICAgIG9wdHMuZWxlbWVudHNbcHJvcF0sXG4gICAgICAgICAgbmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHIgPSBvcHRzLmNvbnRlbnRbbmFtZV07XG4gICAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJztcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgLy8gY2hlY2tzIGlmIHRoZSB0eXBlIGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBpbmZvIGlmIGl0J3Mgbm90XG4gICAgICBsZXQgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2Vbb3B0cy50eXBlXTtcbiAgICAgIGlmICghY29tcGxpYW5jZVR5cGUpIHtcbiAgICAgICAgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2UuaW5mbztcbiAgICAgIH1cblxuICAgICAgLy8gYnVpbGQgdGhlIGNvbXBsaWFuY2UgdHlwZXMgZnJvbSB0aGUgYWxyZWFkeSBpbnRlcnBvbGF0ZWQgYGVsZW1lbnRzYFxuICAgICAgaW50ZXJwb2xhdGVkLmNvbXBsaWFuY2UgPSB1dGlsLmludGVycG9sYXRlU3RyaW5nKGNvbXBsaWFuY2VUeXBlLCBmdW5jdGlvbihcbiAgICAgICAgbmFtZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZWRbbmFtZV07XG4gICAgICB9KTtcblxuICAgICAgLy8gY2hlY2tzIGlmIHRoZSBsYXlvdXQgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGJhc2ljIGlmIGl0J3Mgbm90XG4gICAgICBsZXQgbGF5b3V0ID0gb3B0cy5sYXlvdXRzW29wdHMubGF5b3V0XTtcbiAgICAgIGlmICghbGF5b3V0KSB7XG4gICAgICAgIGxheW91dCA9IG9wdHMubGF5b3V0cy5iYXNpYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcobGF5b3V0LCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGVkW21hdGNoXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZE1hcmt1cChtYXJrdXApIHtcbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnN0IGNvbnQgPVxuICAgICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxuICAgICAgICAgID8gb3B0cy5jb250YWluZXJcbiAgICAgICAgICA6IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgIGRpdi5pbm5lckhUTUwgPSBtYXJrdXA7XG5cbiAgICAgIGNvbnN0IGVsID0gZGl2LmNoaWxkcmVuWzBdO1xuXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy13aW5kb3cnKSAmJiBjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpO1xuICAgICAgfVxuXG4gICAgICAvLyBzYXZlIHJlZiB0byB0aGUgZnVuY3Rpb24gaGFuZGxlIHNvIHdlIGNhbiB1bmJpbmQgaXQgbGF0ZXJcbiAgICAgIHRoaXMub25CdXR0b25DbGljayA9IGhhbmRsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrKTtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgIGNjLmNhdGVnb3J5WyBjaGVja2JveC5uYW1lIF0gPSBjaGVja2JveC5jaGVja2VkID8gJ2FsbG93JyA6ICdkZW55J1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoKVxuICAgICAgICB9KVxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpIClcbiAgICAgIH0pXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNjLWluZm9cIikuZm9yRWFjaCggc2hvd0luZm8gPT4ge1xuICAgICAgICBzaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XG4gICAgICAgICAgICB0aGlzLmJsdXIoKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAvKipcbiAgICAgICAqIEV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIGFjY29yZGlvbiBpbiB0aGUgdG9vbHRpcFxuICAgICAgICovXG4gICAgICAvKmVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiKS5mb3JFYWNoKCBhY2NvcmRpb25MaW5rID0+IHtcbiAgICAgICAgYWNjb3JkaW9uTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgYWNjb3JkaW9uTGluay5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSggXCJvcGVuXCIgKVxuICAgICAgICB9KVxuICAgICAgICBhY2NvcmRpb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpIClcbiAgICAgIH0pXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNjLXRvb2x0aXBcIikuZm9yRWFjaCggdG9vbFRpcCA9PiB7XG4gICAgICAgIHRvb2xUaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIH0pXG4gICAgICAgIHRvb2xUaXAuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAqL1xuXG4gICAgICBpZiAob3B0cy5hdXRvQXR0YWNoKSB7XG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udC5pbnNlcnRCZWZvcmUoZWwsIGNvbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcbiAgICAgIGNvbnN0IGJ0biA9IHV0aWwudHJhdmVyc2VET01QYXRoKGV2ZW50LnRhcmdldCwgJ2NjLWJ0bicpIHx8IGV2ZW50LnRhcmdldDtcbiAgICAgIFxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXNhdmUnICkpe1xuICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGJ0bi5jbGFzc05hbWUubWF0Y2goXG4gICAgICAgICAgbmV3IFJlZ0V4cCgnXFxcXGJjYy0oJyArIE9iamVjdC5rZXlzKGNjLnN0YXR1cykubWFwKHV0aWwuZXNjYXBlUmVnRXhwKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWF0Y2ggPSAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB8fCBmYWxzZTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhtYXRjaCk7XG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtcmV2b2tlJyApKSB7XG4gICAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSSBtaWdodCBjaGFuZ2UgdGhpcyBmdW5jdGlvbiB0byB1c2UgaW5saW5lIHN0eWxlcy4gSSBvcmlnaW5hbGx5IGNob3NlIGEgc3R5bGVzaGVldCBiZWNhdXNlIEkgY291bGQgc2VsZWN0IG1hbnkgZWxlbWVudHMgd2l0aCBhXG4gICAgLy8gc2luZ2xlIHJ1bGUgKHNvbWV0aGluZyB0aGF0IGhhcHBlbmVkIGEgbG90KSwgdGhlIGFwcHMgaGFzIGNoYW5nZWQgc2xpZ2h0bHkgbm93IHRob3VnaCwgc28gaW5saW5lIHN0eWxlcyBtaWdodCBiZSBtb3JlIGFwcGxpY2FibGUuXG4gICAgZnVuY3Rpb24gYXR0YWNoQ3VzdG9tUGFsZXR0ZShwYWxldHRlKSB7XG4gICAgICBjb25zdCBoYXNoID0gdXRpbC5oYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKTtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoO1xuICAgICAgY29uc3QgaXNWYWxpZCA9IHV0aWwuaXNQbGFpbk9iamVjdChwYWxldHRlKTtcblxuICAgICAgdGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yID0gaXNWYWxpZCA/IHNlbGVjdG9yIDogbnVsbDtcblxuICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgJy4nICsgc2VsZWN0b3IpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQ3VzdG9tU3R5bGUoaGFzaCwgcGFsZXR0ZSwgcHJlZml4KSB7XG4gICAgICAvLyBvbmx5IGFkZCB0aGlzIGlmIGEgc3R5bGUgbGlrZSBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoY2MuY3VzdG9tU3R5bGVzW2hhc2hdKSB7XG4gICAgICAgIC8vIGN1c3RvbSBzdHlsZSBhbHJlYWR5IGV4aXN0cywgc28gaW5jcmVtZW50IHRoZSByZWZlcmVuY2UgY291bnRcbiAgICAgICAgKytjYy5jdXN0b21TdHlsZXNbaGFzaF0ucmVmZXJlbmNlcztcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb2xvclN0eWxlcyA9IHt9O1xuICAgICAgY29uc3QgcG9wdXAgPSBwYWxldHRlLnBvcHVwO1xuICAgICAgY29uc3QgYnV0dG9uID0gcGFsZXR0ZS5idXR0b247XG4gICAgICBjb25zdCBoaWdobGlnaHQgPSBwYWxldHRlLmhpZ2hsaWdodDtcblxuICAgICAgLy8gbmVlZHMgYmFja2dyb3VuZCBjb2xvdXIsIHRleHQgYW5kIGxpbmsgd2lsbCBiZSBzZXQgdG8gYmxhY2svd2hpdGUgaWYgbm90IHNwZWNpZmllZFxuICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIC8vIGFzc3VtZXMgcG9wdXAuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHRcbiAgICAgICAgICA/IHBvcHVwLnRleHRcbiAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZCk7XG4gICAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHQ7XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2Mtd2luZG93J10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXTtcbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdO1xuICAgICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICAgJyAuY2MtbGluaywnICtcbiAgICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rOmFjdGl2ZSwnICtcbiAgICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rOnZpc2l0ZWQnXG4gICAgICAgIF0gPSBbJ2NvbG9yOiAnICsgcG9wdXAubGlua107XG5cbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgIC8vIGFzc3VtZXMgYnV0dG9uLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b24udGV4dFxuICAgICAgICAgICAgPyBidXR0b24udGV4dFxuICAgICAgICAgICAgOiB1dGlsLmdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xuICAgICAgICAgICAgJ2NvbG9yOiAnICsgYnV0dG9uLnRleHQsXG4gICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmRcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXS5wdXNoKCdwYWRkaW5nOiAnICsgYnV0dG9uLnBhZGRpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChidXR0b24uYmFja2dyb3VuZCAhPSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICAgICAgcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ1xuICAgICAgICAgICAgXSA9IFtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgK1xuICAgICAgICAgICAgICAgIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvdXIoYnV0dG9uLmJhY2tncm91bmQpKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAvL2Fzc3VtZXMgaGlnaGxpZ2h0LmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgICBoaWdobGlnaHQudGV4dCA9IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgOiB1dGlsLmdldENvbnRyYXN0KGhpZ2hsaWdodC5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIGhpZ2hsaWdodC5ib3JkZXIgPSBoaWdobGlnaHQuYm9yZGVyXG4gICAgICAgICAgICAgID8gaGlnaGxpZ2h0LmJvcmRlclxuICAgICAgICAgICAgICA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmRcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldHMgaGlnaGxpZ2h0IHRleHQgY29sb3IgdG8gcG9wdXAgdGV4dC4gYmFja2dyb3VuZCBhbmQgYm9yZGVyIGFyZSB0cmFuc3BhcmVudCBieSBkZWZhdWx0LlxuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyB3aWxsIGJlIGludGVycHJldHRlZCBhcyBDU1MuIHRoZSBrZXkgaXMgdGhlIHNlbGVjdG9yLCBhbmQgZWFjaCBhcnJheSBlbGVtZW50IGlzIGEgcnVsZVxuICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgICAgIC8vIGN1c3RvbSBzdHlsZSBkb2Vzbid0IGV4aXN0LCBzbyB3ZSBjcmVhdGUgaXRcbiAgICAgIGNjLmN1c3RvbVN0eWxlc1toYXNoXSA9IHtcbiAgICAgICAgcmVmZXJlbmNlczogMSxcbiAgICAgICAgZWxlbWVudDogc3R5bGUuc2hlZXRcbiAgICAgIH07XG5cbiAgICAgIGxldCBydWxlSW5kZXggPSAtMTtcbiAgICAgIGZvciAobGV0IHByb3AgaW4gY29sb3JTdHlsZXMpIHtcbiAgICAgICAgaWYgKGNvbG9yU3R5bGVzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZShcbiAgICAgICAgICAgIHByb3AgKyAneycgKyBjb2xvclN0eWxlc1twcm9wXS5qb2luKCc7JykgKyAnfScsXG4gICAgICAgICAgICArK3J1bGVJbmRleFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIb3ZlckNvbG91cihoZXgpIHtcbiAgICAgIGhleCA9IHV0aWwubm9ybWFsaXNlSGV4KGhleCk7XG4gICAgICAvLyBmb3IgYmxhY2sgYnV0dG9uc1xuICAgICAgaWYgKGhleCA9PSAnMDAwMDAwJykge1xuICAgICAgICByZXR1cm4gJyMyMjInO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHV0aWwuZ2V0THVtaW5hbmNlKGhleCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ3VzdG9tU3R5bGUocGFsZXR0ZSkge1xuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChwYWxldHRlKSkge1xuICAgICAgICBjb25zdCBoYXNoID0gdXRpbC5oYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKTtcbiAgICAgICAgY29uc3QgY3VzdG9tU3R5bGUgPSBjYy5jdXN0b21TdHlsZXNbaGFzaF07XG4gICAgICAgIGlmIChjdXN0b21TdHlsZSAmJiAhLS1jdXN0b21TdHlsZS5yZWZlcmVuY2VzKSB7XG4gICAgICAgICAgY29uc3Qgc3R5bGVOb2RlID0gY3VzdG9tU3R5bGUuZWxlbWVudC5vd25lck5vZGU7XG4gICAgICAgICAgaWYgKHN0eWxlTm9kZSAmJiBzdHlsZU5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgc3R5bGVOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVOb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2MuY3VzdG9tU3R5bGVzW2hhc2hdID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5QXV0b0Rpc21pc3MoKSB7XG4gICAgICBjb25zdCBzZXRTdGF0dXNlcyA9IHRoaXMuc2V0U3RhdHVzZXMuYmluZCh0aGlzKTtcbiAgICAgIGNvbnN0IGNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgICBjb25zdCBkZWxheSA9IHRoaXMub3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0O1xuICAgICAgaWYgKHR5cGVvZiBkZWxheSA9PSAnbnVtYmVyJyAmJiBkZWxheSA+PSAwKSB7XG4gICAgICAgIHRoaXMuZGlzbWlzc1RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBzZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcyk7XG4gICAgICAgICAgY2xvc2UodHJ1ZSk7XG4gICAgICAgIH0sIE1hdGguZmxvb3IoZGVsYXkpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2Nyb2xsUmFuZ2UgPSB0aGlzLm9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsO1xuICAgICAgaWYgKHR5cGVvZiBzY3JvbGxSYW5nZSA9PSAnbnVtYmVyJyAmJiBzY3JvbGxSYW5nZSA+PSAwKSB7XG4gICAgICAgIGNvbnN0IG9uV2luZG93U2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IE1hdGguZmxvb3Ioc2Nyb2xsUmFuZ2UpKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcyk7XG4gICAgICAgICAgICBjbG9zZSh0cnVlKTtcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG9uV2luZG93U2Nyb2xsO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdpbmRvd0NsaWNrID0gdGhpcy5vcHRpb25zLmRpc21pc3NPbldpbmRvd0NsaWNrO1xuICAgICAgY29uc3QgaWdub3JlZENsaWNrcyA9IHRoaXMub3B0aW9ucy5pZ25vcmVDbGlja3NGcm9tO1xuICAgICAgaWYgKHdpbmRvd0NsaWNrKSB7XG4gICAgICAgIGNvbnN0IG9uV2luZG93Q2xpY2sgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBjb25zdCBwYXRoID0gZXZ0LmNvbXBvc2VkUGF0aCA/IGV2dC5jb21wb3NlZFBhdGgoKSA6IChmdW5jdGlvbiAoIGFyciwgZWxlbWVudCApIHtcbiAgICAgICAgICAgIHdoaWxlICggZWxlbWVudCApIHtcbiAgICAgICAgICAgICAgYXJyLnB1c2goIGVsZW1lbnQgKVxuICAgICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJyXG4gICAgICAgICAgfSkoW10sZXZ0LnRhcmdldCApXG4gICAgICAgICAgaWYgKCAhcGF0aCApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoICFwYXRoLnNvbWUoZnVuY3Rpb24gKCBlbGVtZW50ICkge1xuICAgICAgICAgICAgICByZXR1cm4gaWdub3JlZENsaWNrcy5zb21lKCBmdW5jdGlvbiAoIGlnbm9yZWRDbGljayAgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ICkgKSB7XG4gICAgICAgICAgICBzZXRTdGF0dXNlcyhjYy5zdGF0dXMuZGlzbWlzcylcbiAgICAgICAgICAgIGNsb3NlKHRydWUpXG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG9uV2luZG93Q2xpY2s7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseVJldm9rZUJ1dHRvbigpIHtcbiAgICAgIC8vIHJldm9rYWJsZSBpcyB0cnVlIGlmIGFkdmFuY2VkIGNvbXBsaWFuY2UgaXMgc2VsZWN0ZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudHlwZSAhPSAnaW5mbycpIHRoaXMub3B0aW9ucy5yZXZva2FibGUgPSB0cnVlO1xuICAgICAgLy8gYW5pbWF0ZVJldm9rYWJsZSBmYWxzZSBmb3IgbW9iaWxlIGRldmljZXNcbiAgICAgIGlmICh1dGlsLmlzTW9iaWxlKCkpIHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBnZXRQb3NpdGlvbkNsYXNzZXMuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1hbmltYXRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLXRoZW1lLScrdGhpcy5vcHRpb25zLnRoZW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV2b2tlQnRuID0gdGhpcy5vcHRpb25zLnJldm9rZUJ0blxuICAgICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3BvbGljeX19JywgdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5KTtcblxuICAgICAgICB0aGlzLnJldm9rZUJ0biA9IGFwcGVuZE1hcmt1cC5jYWxsKHRoaXMsIHJldm9rZUJ0bik7XG5cbiAgICAgICAgY29uc3QgYnRuID0gdGhpcy5yZXZva2VCdG47XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gdXRpbC50aHJvdHRsZShmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IG1pblkgPSAyMDtcbiAgICAgICAgICAgIGNvbnN0IG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDtcblxuICAgICAgICAgICAgaWYgKCAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy10b3AnICkgJiYgZXZ0LmNsaWVudFkgPCBtaW5ZICkgfHxcbiAgICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xuICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoICFhY3RpdmUgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBDb29raWVQb3B1cDtcbiAgfSkoKTtcblxuICBjYy5Mb2NhdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICAvLyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHdlIGhhdmUgYWxyZWFkeSBzZXQgdXAuXG4gICAgLy8gV2hlbiB1c2luZyBhIHNlcnZpY2UsIGl0IGNvdWxkIGVpdGhlciByZXR1cm4gYSBkYXRhIHN0cnVjdHVyZSBpbiBwbGFpbiB0ZXh0IChsaWtlIGEgSlNPTiBvYmplY3QpIG9yIGFuIGV4ZWN1dGFibGUgc2NyaXB0XG4gICAgLy8gV2hlbiB0aGUgcmVzcG9uc2UgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIGJyb3dzZXIsIHRoZW4gYGlzU2NyaXB0YCBtdXN0IGJlIHNldCB0byB0cnVlLCBvdGhlcndpc2UgaXQgd29uJ3Qgd29yay5cblxuICAgIC8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxuICAgIC8vIGNhc2VzLCB0aGUgc2VydmljZXMgYGNhbGxiYWNrYCBwcm9wZXJ0eSBpcyBjYWxsZWQgd2l0aCBhIGBkb25lYCBmdW5jdGlvbi4gV2hlbiBwZXJmb3JtaW5nIGFzeW5jIG9wZXJhdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWRcbiAgICAvLyB3aXRoIHRoZSBkYXRhIChvciBFcnJvciksIGFuZCBgY29va2llY29uc2VudC5sb2NhdGVgIHdpbGwgdGFrZSBjYXJlIG9mIHRoZSByZXN0XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAvLyBUaGUgZGVmYXVsdCB0aW1lb3V0IGlzIDUgc2Vjb25kcy4gVGhpcyBpcyBtYWlubHkgbmVlZGVkIHRvIGNhdGNoIEpTT05QIHJlcXVlc3RzIHRoYXQgZXJyb3IuXG4gICAgICAvLyBPdGhlcndpc2UgdGhlcmUgaXMgbm8gZWFzeSB3YXkgdG8gY2F0Y2ggSlNPTlAgZXJyb3JzLiBUaGF0IG1lYW5zIHRoYXQgaWYgYSBKU09OUCBmYWlscywgdGhlXG4gICAgICAvLyBhcHAgd2lsbCB0YWtlIGB0aW1lb3V0YCBtaWxsaXNlY29uZHMgdG8gcmVhY3QgdG8gYSBKU09OUCBuZXR3b3JrIGVycm9yLlxuICAgICAgdGltZW91dDogNTAwMCxcblxuICAgICAgLy8gdGhlIG9yZGVyIHRoYXQgc2VydmljZXMgd2lsbCBiZSBhdHRlbXB0ZWQgaW5cbiAgICAgIHNlcnZpY2VzOiBbXG4gICAgICAgICdpcGluZm8nXG5cbiAgICAgICAgLypcblxuICAgICAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxuICAgICAgICAvLyB0aGlzIG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzZXJ2aWNlXG5cbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpcGluZm9kYicsXG4gICAgICAgICAgaW50ZXJwb2xhdGVVcmw6IHtcbiAgICAgICAgICAgIC8vIG9idmlvdXNseSwgdGhpcyBpcyBhIGZha2Uga2V5XG4gICAgICAgICAgICBhcGlfa2V5OiAndk9nSTM3NDhkbkl5dElyc0pjeFM3cXNEZjZrYkprRTlsTjR5RURyWEFxWGNLVU52ampaUG94M2VrWHFtTU1sZCdcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcblxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHtuYW1lOiAnaXBpbmZvZGInfTtcbiAgICAgICAgfSxcblxuICAgICAgICAqL1xuICAgICAgXSxcblxuICAgICAgc2VydmljZURlZmluaXRpb25zOiB7XG4gICAgICAgIGlwaW5mbzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICAgICAgdXJsOiAnLy9pcGluZm8uaW8nLFxuICAgICAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ganNvbi5lcnJvclxuICAgICAgICAgICAgICAgICAgPyB0b0Vycm9yKGpzb24pXG4gICAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVxdWlyZXMgYW4gb3B0aW9uIHRvIGRlZmluZSBga2V5YC4gT3B0aW9ucyBhcmUgcHJvaXZlZCB1c2luZyBvYmplY3RzIG9yIGZ1bmN0aW9uc1xuICAgICAgICBpcGluZm9kYjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICAgICAgdXJsOlxuICAgICAgICAgICAgICAnLy9hcGkuaXBpbmZvZGIuY29tL3YzL2lwLWNvdW50cnkvP2tleT17YXBpX2tleX0mZm9ybWF0PWpzb24mY2FsbGJhY2s9e2NhbGxiYWNrfScsXG4gICAgICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBpcyBKU09OUCwgdGhlcmVmb3JlIHdlIG11c3Qgc2V0IGl0IHRvIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uLnN0YXR1c0NvZGUgPT0gJ0VSUk9SJ1xuICAgICAgICAgICAgICAgICAgPyB0b0Vycm9yKHtlcnJvcjoganNvbi5zdGF0dXNNZXNzYWdlfSlcbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBtYXhtaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUgd2hpY2ggZGVmaW5lcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuIE9uY2UgbG9hZGVkLCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBtYWtlIGFuIGFkZGl0aW9uYWwgQUpBWCBjYWxsLiBUaGVyZWZvcmUgd2UgcHJvdmlkZSBhIGBkb25lYCBjYWxsYmFjayB0aGF0IGNhbiBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgIHVybDogJy8vanMubWF4bWluZC5jb20vanMvYXBpcy9nZW9pcDIvdjIuMS9nZW9pcDIuanMnLFxuICAgICAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlLCBzbyBpdCBtdXN0IGJlIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgICAgICAgICAgLy8gaWYgZXZlcnl0aGluZyB3ZW50IG9rYXkgdGhlbiBgZ2VvaXAyYCBXSUxMIGJlIGRlZmluZWRcbiAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2VvaXAyKSB7XG4gICAgICAgICAgICAgICAgZG9uZShcbiAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0LiBUaGUgZG93bmxvYWRlZCBzY3JpcHQgc2hvdWxkIGhhdmUgZXhwb3J0ZWQgYGdlb2lwMmAgdG8gdGhlIGdsb2JhbCBzY29wZSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGdlb2lwMi5jb3VudHJ5KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkb25lKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBsb2NhdGlvbi5jb3VudHJ5Lmlzb19jb2RlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBXZSBjYW4ndCByZXR1cm4gYW55dGhpbmcsIGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgc2Vjb25kIEFKQVggY2FsbCB0byByZXR1cm4uXG4gICAgICAgICAgICAgIC8vIFRoZW4gd2UgY2FuICdjb21wbGV0ZScgdGhlIHNlcnZpY2UgYnkgcGFzc2luZyBkYXRhIG9yIGFuIGVycm9yIHRvIHRoZSBgZG9uZWAgY2FsbGJhY2suXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBMb2NhdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBTZXQgdXAgb3B0aW9uc1xuICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbigge30sIGRlZmF1bHRPcHRpb25zIClcblxuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTE7IC8vIHRoZSBpbmRleCAoaW4gb3B0aW9ucykgb2YgdGhlIHNlcnZpY2Ugd2UncmUgY3VycmVudGx5IHVzaW5nXG4gICAgfVxuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmdldE5leHRTZXJ2aWNlID0gZnVuY3Rpb24oKSB7XG4gICAgICBsZXQgc2VydmljZTtcblxuICAgICAgZG8ge1xuICAgICAgICBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoKyt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpO1xuICAgICAgfSB3aGlsZSAoXG4gICAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcbiAgICAgICAgIXNlcnZpY2VcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgIH07XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0U2VydmljZUJ5SWR4ID0gZnVuY3Rpb24oaWR4KSB7XG4gICAgICAvLyBUaGlzIGNhbiBlaXRoZXIgYmUgdGhlIG5hbWUgb2YgYSBkZWZhdWx0IGxvY2F0aW9uU2VydmljZSwgb3IgYSBmdW5jdGlvbi5cbiAgICAgIGNvbnN0IHNlcnZpY2VPcHRpb24gPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbaWR4XTtcblxuICAgICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZHluYW1pY09wdHMgPSBzZXJ2aWNlT3B0aW9uKCk7XG4gICAgICAgIHJldHVybiBkeW5hbWljT3B0cy5uYW1lID8gXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgZHluYW1pY09wdHMsXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zWyBkeW5hbWljT3B0cy5uYW1lIF0oIGR5bmFtaWNPcHRzIClcbiAgICAgICAgICApIDogZHluYW1pY09wdHM7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uXSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgYXNzdW1lIHtuYW1lOiAnaXBpbmZvJywgLi4ub3RoZXJPcHRpb25zfVxuICAgICAgLy8gQWxsb3dzIHVzZXIgdG8gcGFzcyBpbiBBUEkga2V5cyBldGMuXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHNlcnZpY2VPcHRpb24pKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb24ubmFtZV0oXG4gICAgICAgICAgc2VydmljZU9wdGlvblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBydW5zIHRoZSBzZXJ2aWNlIGxvY2F0ZWQgYXQgaW5kZXggYGN1cnJlbnRTZXJ2aWNlSW5kZXhgLlxuICAgIC8vIElmIHRoZSBzZXJ2aWNlIGZhaWxzLCBgcnVuTmV4dFNlcnZpY2VPbkVycm9yYCB3aWxsIGNvbnRpbnVlIHRyeWluZyBlYWNoIHNlcnZpY2UgdW50aWwgYWxsIGZhaWwsIG9yIG9uZSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5XG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmxvY2F0ZSA9IGZ1bmN0aW9uKGNvbXBsZXRlLCBlcnJvcikge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKTtcblxuICAgICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgdGhpcy5jYWxsYmFja0Vycm9yID0gZXJyb3I7XG5cbiAgICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0dXBVcmwgPSBmdW5jdGlvbihzZXJ2aWNlKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlT3B0cyA9IHRoaXMuZ2V0Q3VycmVudFNlcnZpY2VPcHRzKCk7XG4gICAgICByZXR1cm4gc2VydmljZS51cmwucmVwbGFjZSgvXFx7KC4qPylcXH0vZywgZnVuY3Rpb24oXywgcGFyYW0pIHtcbiAgICAgICAgaWYgKHBhcmFtID09PSAnY2FsbGJhY2snKSB7XG4gICAgICAgICAgY29uc3QgdGVtcE5hbWUgPSAnY2FsbGJhY2snICsgRGF0ZS5ub3coKTtcbiAgICAgICAgICB3aW5kb3dbdGVtcE5hbWVdID0gZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLl9fSlNPTlBfREFUQSA9IEpTT04uc3RyaW5naWZ5KHJlcyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gdGVtcE5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtIGluIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsKSB7XG4gICAgICAgICAgcmV0dXJuIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsW3BhcmFtXTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIHJlcXVpcmVzIGEgYHNlcnZpY2VgIG9iamVjdCB0aGF0IGRlZmluZXMgYXQgbGVhc3QgYSBgdXJsYCBhbmQgYGNhbGxiYWNrYFxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5TZXJ2aWNlID0gZnVuY3Rpb24oc2VydmljZSwgY29tcGxldGUpIHtcbiAgICAgIC8vIGJhc2ljIGNoZWNrIHRvIGVuc3VyZSBpdCByZXNlbWJsZXMgYSBgc2VydmljZWBcbiAgICAgIGlmICghc2VydmljZSB8fCAhc2VydmljZS51cmwgfHwgIXNlcnZpY2UuY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyB3ZSBjYWxsIGVpdGhlciBgZ2V0U2NyaXB0YCBvciBgbWFrZUFzeW5jUmVxdWVzdGAgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHJlc291cmNlXG4gICAgICBjb25zdCByZXF1ZXN0RnVuY3Rpb24gPSBzZXJ2aWNlLmlzU2NyaXB0ID8gZ2V0U2NyaXB0IDogbWFrZUFzeW5jUmVxdWVzdDtcblxuICAgICAgLy8gYm90aCBmdW5jdGlvbnMgaGF2ZSBzaW1pbGFyIHNpZ25hdHVyZXMgc28gd2UgY2FuIHBhc3MgdGhlIHNhbWUgYXJndW1lbnRzIHRvIGJvdGhcbiAgICAgIHJlcXVlc3RGdW5jdGlvbihcbiAgICAgICAgdGhpcy5zZXR1cFVybChzZXJ2aWNlKSxcbiAgICAgICAgeGhyID0+IHtcbiAgICAgICAgICAvLyBpZiBgIXhocmAsIHRoZW4gYGdldFNjcmlwdGAgZnVuY3Rpb24gd2FzIHVzZWQsIHNvIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHRleHRcbiAgICAgICAgICBsZXQgcmVzcG9uc2VUZXh0ID0geGhyID8geGhyLnJlc3BvbnNlVGV4dCA6ICcnO1xuXG4gICAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGEgc2NyaXB0LCB0aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gcnVuLlxuICAgICAgICAgIC8vIGlmIHRoZSBzY3JpcHQgaXMgSlNPTlAsIHRoZW4gYSB0aW1lIGRlZmluZWQgZnVuY3Rpb24gYGNhbGxiYWNrX3tEYXRlLm5vd31gIGhhcyBhbHJlYWR5XG4gICAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XG4gICAgICAgICAgaWYgKHNlcnZpY2UuX19KU09OUF9EQVRBKSB7XG4gICAgICAgICAgICByZXNwb25zZVRleHQgPSBzZXJ2aWNlLl9fSlNPTlBfREFUQTtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLl9fSlNPTlBfREFUQTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXG4gICAgICAgICAgdGhpcy5ydW5TZXJ2aWNlQ2FsbGJhY2suY2FsbCh0aGlzLCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRpbWVvdXQsXG4gICAgICAgIHNlcnZpY2UuZGF0YSxcbiAgICAgICAgc2VydmljZS5oZWFkZXJzXG4gICAgICApO1xuXG4gICAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXG4gICAgfTtcblxuICAgIC8vIFRoZSBzZXJ2aWNlIHJlcXVlc3QgaGFzIHJ1biAoYW5kIHBvc3NpYmx5IGhhcyBhIGByZXNwb25zZVRleHRgKSBbbm8gYHJlc3BvbnNlVGV4dGAgaWYgYGlzU2NyaXB0YF1cbiAgICAvLyBXZSBuZWVkIHRvIHJ1biBpdHMgY2FsbGJhY2sgd2hpY2ggZGV0ZXJtaW5lcyBpZiBpdHMgc3VjY2Vzc2Z1bCBvciBub3RcbiAgICAvLyBgY29tcGxldGVgIGlzIGNhbGxlZCBvbiBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuU2VydmljZUNhbGxiYWNrID0gZnVuY3Rpb24oXG4gICAgICBjb21wbGV0ZSxcbiAgICAgIHNlcnZpY2UsXG4gICAgICByZXNwb25zZVRleHRcbiAgICApIHtcbiAgICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBzZXJ2aWNlIHVzZXMgdGhlIGFzeW5jIGNhbGxiYWNrIGluIGl0cyBoYW5kbGVyIG1ldGhvZFxuICAgICAgY29uc3Qgc2VydmljZVJlc3VsdEhhbmRsZXIgPSBhc3luY1Jlc3VsdCA9PiB7XG4gICAgICAgIC8vIGlmIGByZXN1bHRgIGlzIGEgdmFsaWQgdmFsdWUsIHRoZW4gdGhpcyBmdW5jdGlvbiBzaG91bGRuJ3QgcmVhbGx5IHJ1blxuICAgICAgICAvLyBldmVuIGlmIGl0IGlzIGNhbGxlZCBieSBgc2VydmljZS5jYWxsYmFja2BcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLm9uU2VydmljZVJlc3VsdC5jYWxsKHRoaXMsIGNvbXBsZXRlLCBhc3luY1Jlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIHRoZSBmdW5jdGlvbiBgc2VydmljZS5jYWxsYmFja2Agd2lsbCBlaXRoZXIgZXh0cmFjdCBhIGNvdW50cnkgY29kZSBmcm9tIGByZXNwb25zZVRleHRgIGFuZCByZXR1cm4gaXQgKGluIGByZXN1bHRgKVxuICAgICAgLy8gb3IgKGlmIGl0IGhhcyB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMpIGl0IHdpbGwgY2FsbCBhIGBkb25lYCBjYWxsYmFjayB3aXRoIHRoZSBjb3VudHJ5IGNvZGUgd2hlbiBpdCBpcyByZWFkeVxuICAgICAgY29uc3QgcmVzdWx0ID0gc2VydmljZS5jYWxsYmFjayhzZXJ2aWNlUmVzdWx0SGFuZGxlciwgcmVzcG9uc2VUZXh0KTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLm9uU2VydmljZVJlc3VsdC5jYWxsKHRoaXMsIGNvbXBsZXRlLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBUaGlzIGlzIGNhbGxlZCB3aXRoIHRoZSBgcmVzdWx0YCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYCByZWdhcmRsZXNzIG9mIGhvdyBpdCBwcm92aWRlZCB0aGF0IHJlc3VsdCAoc3luYyBvciBhc3luYykuXG4gICAgLy8gYHJlc3VsdGAgd2lsbCBiZSB3aGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYC4gQSBzZXJ2aWNlIGNhbGxiYWNrIHNob3VsZCBwcm92aWRlIGFuIG9iamVjdCB3aXRoIGRhdGFcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUub25TZXJ2aWNlUmVzdWx0ID0gZnVuY3Rpb24oY29tcGxldGUsIHJlc3VsdCkge1xuICAgICAgLy8gY29udmVydCByZXN1bHQgdG8gbm9kZWpzIHN0eWxlIGFzeW5jIGNhbGxiYWNrXG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpKSB7XG4gICAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgcmVzdWx0LCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgbnVsbCwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaWYgYGVycmAgaXMgc2V0LCB0aGUgbmV4dCBzZXJ2aWNlIGhhbmRsZXIgaXMgY2FsbGVkXG4gICAgLy8gaWYgYGVycmAgaXMgbnVsbCwgdGhlIGBvbkNvbXBsZXRlYCBoYW5kbGVyIGlzIGNhbGxlZCB3aXRoIGBkYXRhYFxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5OZXh0U2VydmljZU9uRXJyb3IgPSBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5sb2dFcnJvcihlcnIpO1xuXG4gICAgICAgIGNvbnN0IG5leHRTZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpO1xuXG4gICAgICAgIGlmIChuZXh0U2VydmljZSkge1xuICAgICAgICAgIHRoaXMucnVuU2VydmljZShuZXh0U2VydmljZSwgdGhpcy5ydW5OZXh0U2VydmljZU9uRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrRXJyb3IsXG4gICAgICAgICAgICBuZXcgRXJyb3IoJ0FsbCBzZXJ2aWNlcyBmYWlsZWQnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwodGhpcywgdGhpcy5jYWxsYmFja0NvbXBsZXRlLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmdldEN1cnJlbnRTZXJ2aWNlT3B0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW3RoaXMuY3VycmVudFNlcnZpY2VJbmRleF1cblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gdmFsKClcbiAgICAgIH1lbHNlIGlmICh1dGlsLmlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgICByZXR1cm4gdmFsXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBjYWxsYmFjayBhZnRlciByZXNldHRpbmcgdGhlIGBjdXJyZW50U2VydmljZUluZGV4YFxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5jb21wbGV0ZVNlcnZpY2UgPSBmdW5jdGlvbihmbiwgZGF0YSkge1xuICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTE7XG5cbiAgICAgIGZuICYmIGZuKGRhdGEpO1xuICAgIH07XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUubG9nRXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGNvbnN0IGlkeCA9IHRoaXMuY3VycmVudFNlcnZpY2VJbmRleDtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeChpZHgpO1xuXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdUaGUgc2VydmljZVsnICtcbiAgICAgICAgICBpZHggK1xuICAgICAgICAgICddICgnICtcbiAgICAgICAgICBzZXJ2aWNlLnVybCArXG4gICAgICAgICAgJykgcmVzcG9uZGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcicsXG4gICAgICAgIGVyclxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0U2NyaXB0KHVybCwgY2FsbGJhY2ssIHRpbWVvdXQpIHtcbiAgICAgIGxldCB0aW1lb3V0SWR4O1xuICAgICAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gICAgICBzLnR5cGUgPSAndGV4dC8nICsgKHVybC50eXBlIHx8ICdqYXZhc2NyaXB0Jyk7XG4gICAgICBzLnNyYyA9IHVybC5zcmMgfHwgdXJsO1xuICAgICAgcy5hc3luYyA9IGZhbHNlO1xuXG4gICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHRoaXMgY29kZSBoYW5kbGVzIHR3byBzY2VuYXJpb3MsIHdoZXRoZXIgY2FsbGVkIGJ5IG9ubG9hZCBvciBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzLnJlYWR5U3RhdGU7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZHgpO1xuXG4gICAgICAgIGlmICghY2FsbGJhY2suZG9uZSAmJiAoIXN0YXRlIHx8IC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc3RhdGUpKSkge1xuICAgICAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7XG5cbiAgICAgIC8vIFlvdSBjYW4ndCBjYXRjaCBKU09OUCBFcnJvcnMsIGJlY2F1c2UgaXQncyBoYW5kbGVkIGJ5IHRoZSBzY3JpcHQgdGFnXG4gICAgICAvLyBvbmUgd2F5IGlzIHRvIHVzZSBhIHRpbWVvdXRcbiAgICAgIHRpbWVvdXRJZHggPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjay5kb25lID0gdHJ1ZTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IG51bGw7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlQXN5bmNSZXF1ZXN0KFxuICAgICAgdXJsLFxuICAgICAgb25Db21wbGV0ZSxcbiAgICAgIHRpbWVvdXQsXG4gICAgICBwb3N0RGF0YSxcbiAgICAgIHJlcXVlc3RIZWFkZXJzXG4gICAgKSB7XG4gICAgICBjb25zdCB4aHIgPSBuZXcgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuQWN0aXZlWE9iamVjdCkoXG4gICAgICAgICdNU1hNTDIuWE1MSFRUUC4zLjAnXG4gICAgICApO1xuXG4gICAgICB4aHIub3Blbihwb3N0RGF0YSA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpO1xuXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SGVhZGVycykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSByZXF1ZXN0SGVhZGVycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICBjb25zdCBzcGxpdCA9IHJlcXVlc3RIZWFkZXJzW2ldLnNwbGl0KCc6JywgMik7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgICAgICBzcGxpdFswXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyksXG4gICAgICAgICAgICBzcGxpdFsxXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygb25Db21wbGV0ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPiAzKSB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlKHhocik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB4aHIuc2VuZChwb3N0RGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9FcnJvcihvYmopIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ0Vycm9yIFsnICsgKG9iai5jb2RlIHx8ICdVTktOT1dOJykgKyAnXTogJyArIG9iai5lcnJvcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIExvY2F0aW9uO1xuICB9KSgpO1xuXG4gIGNjLkxhdyA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIE1ha2UgdGhpcyBmYWxzZSBpZiB5b3Ugd2FudCB0byBkaXNhYmxlIGFsbCByZWdpb25hbCBvdmVycmlkZXMgZm9yIHNldHRpbmdzLlxuICAgICAgLy8gSWYgdHJ1ZSwgb3B0aW9ucyBjYW4gZGlmZmVyIGJ5IGNvdW50cnksIGRlcGVuZGluZyBvbiB0aGVpciBjb29raWUgbGF3LlxuICAgICAgLy8gSXQgZG9lcyBub3QgYWZmZWN0IGhpZGluZyB0aGUgcG9wdXAgZm9yIGNvdW50cmllcyB0aGF0IGRvIG5vdCBoYXZlIGNvb2tpZSBsYXcuXG4gICAgICByZWdpb25hbExhdzogdHJ1ZSxcblxuICAgICAgLy8gY291bnRyaWVzIHRoYXQgZW5mb3JjZSBzb21lIHZlcnNpb24gb2YgYSBjb29raWUgbGF3XG4gICAgICBoYXNMYXc6IFtcbiAgICAgICAgJ0FUJyxcbiAgICAgICAgJ0JFJyxcbiAgICAgICAgJ0JHJyxcbiAgICAgICAgJ0hSJyxcbiAgICAgICAgJ0NaJyxcbiAgICAgICAgJ0NZJyxcbiAgICAgICAgJ0RLJyxcbiAgICAgICAgJ0VFJyxcbiAgICAgICAgJ0ZJJyxcbiAgICAgICAgJ0ZSJyxcbiAgICAgICAgJ0RFJyxcbiAgICAgICAgJ0VMJyxcbiAgICAgICAgJ0hVJyxcbiAgICAgICAgJ0lFJyxcbiAgICAgICAgJ0lUJyxcbiAgICAgICAgJ0xWJyxcbiAgICAgICAgJ0xUJyxcbiAgICAgICAgJ0xVJyxcbiAgICAgICAgJ01UJyxcbiAgICAgICAgJ05MJyxcbiAgICAgICAgJ05PJyxcbiAgICAgICAgJ1BMJyxcbiAgICAgICAgJ1BUJyxcbiAgICAgICAgJ1NLJyxcbiAgICAgICAgJ0VTJyxcbiAgICAgICAgJ1NFJyxcbiAgICAgICAgJ0dCJyxcbiAgICAgICAgJ1VLJyxcbiAgICAgICAgJ0dSJyxcbiAgICAgICAgJ0VVJyxcbiAgICAgICAgJ1JPJ1xuICAgICAgXSxcblxuICAgICAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYWxsIGNvb2tpZSBjb25zZW50IGNob2ljZXMgbXVzdCBiZSByZXZva2FibGUgKGEgdXNlciBtdXN0IGJlIGFibGUgdG9vIGNoYW5nZSB0aGVpciBtaW5kKVxuICAgICAgcmV2b2thYmxlOiBbXG4gICAgICAgICdIUicsXG4gICAgICAgICdDWScsXG4gICAgICAgICdESycsXG4gICAgICAgICdFRScsXG4gICAgICAgICdGUicsXG4gICAgICAgICdERScsXG4gICAgICAgICdMVicsXG4gICAgICAgICdMVCcsXG4gICAgICAgICdOTCcsXG4gICAgICAgICdOTycsXG4gICAgICAgICdQVCcsXG4gICAgICAgICdFUydcbiAgICAgIF0sXG5cbiAgICAgIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGEgcGVyc29uIGNhbiBvbmx5IFwiY29uc2VudFwiIGlmIHRoZSBleHBsaWNpdGx5IGNsaWNrIG9uIFwiSSBhZ3JlZVwiLlxuICAgICAgLy8gaW4gdGhlc2UgY291bnRyaWVzLCBjb25zZW50IGNhbm5vdCBiZSBpbXBsaWVkIHZpYSBhIHRpbWVvdXQgb3IgYnkgc2Nyb2xsaW5nIGRvd24gdGhlIHBhZ2VcbiAgICAgIGV4cGxpY2l0QWN0aW9uOiBbJ0hSJywgJ0lUJywgJ0VTJywgJ05PJ11cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gTGF3KG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIExhdy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIHNldCBvcHRpb25zIGJhY2sgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICAvLyBtZXJnZSBpbiB1c2VyIG9wdGlvbnNcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG4gICAgfTtcblxuICAgIExhdy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oY291bnRyeUNvZGUpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhhc0xhdzogdGhpcy5vcHRpb25zLmhhc0xhdy5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgICByZXZva2FibGU6IHRoaXMub3B0aW9ucy5yZXZva2FibGUuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgICAgZXhwbGljaXRBY3Rpb246IHRoaXMub3B0aW9ucy5leHBsaWNpdEFjdGlvbi5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBMYXcucHJvdG90eXBlLmFwcGx5TGF3ID0gZnVuY3Rpb24ob3B0aW9ucywgY291bnRyeUNvZGUpIHtcbiAgICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmdldChjb3VudHJ5Q29kZSk7XG5cbiAgICAgIGlmICghY291bnRyeS5oYXNMYXcpIHtcbiAgICAgICAgLy8gVGhlIGNvdW50cnkgaGFzIG5vIGNvb2tpZSBsYXdcbiAgICAgICAgb3B0aW9ucy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5vbk5vQ29va2llTGF3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb3B0aW9ucy5vbk5vQ29va2llTGF3KGNvdW50cnlDb2RlLCBjb3VudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJlZ2lvbmFsTGF3KSB7XG4gICAgICAgIGlmIChjb3VudHJ5LnJldm9rYWJsZSkge1xuICAgICAgICAgIC8vIFdlIG11c3QgcHJvdmlkZSBhbiBvcHRpb24gdG8gcmV2b2tlIGNvbnNlbnQgYXQgYSBsYXRlciB0aW1lXG4gICAgICAgICAgb3B0aW9ucy5yZXZva2FibGUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvdW50cnkuZXhwbGljaXRBY3Rpb24pIHtcbiAgICAgICAgICAvLyBUaGUgdXNlciBtdXN0IGV4cGxpY2l0bHkgY2xpY2sgdGhlIGNvbnNlbnQgYnV0dG9uXG4gICAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25TY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgICBvcHRpb25zLmRpc21pc3NPblRpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfTtcblxuICAgIHJldHVybiBMYXc7XG4gIH0pKCk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgYXBwIGJ5IGNvbWJpbmluZyB0aGUgdXNlIG9mIHRoZSBQb3B1cCwgTG9jYXRvciBhbmQgTGF3IG1vZHVsZXNcbiAgLy8gWW91IGNhbiBzdHJpbmcgdG9nZXRoZXIgdGhlc2UgdGhyZWUgbW9kdWxlcyB5b3Vyc2VsZiBob3dldmVyIHlvdSB3YW50LCBieSB3cml0aW5nIGEgbmV3IGZ1bmN0aW9uLlxuICBjYy5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucywgY29tcGxldGUsIGVycm9yKSB7XG4gICAgY29uc3QgbGF3ID0gbmV3IGNjLkxhdyhvcHRpb25zLmxhdyk7XG5cbiAgICBpZiAoIWNvbXBsZXRlKSBjb21wbGV0ZSA9IGZ1bmN0aW9uKCkge307XG4gICAgaWYgKCFlcnJvcikgZXJyb3IgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgY29uc3QgYW5zd2VycyA9IE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5ID0+IHtcbiAgICAgIGNvbnN0IGFuc3dlciA9IHV0aWwuZ2V0Q29va2llKCdjb29raWVjb25zZW50X3N0YXR1c18nK2NhdGVnb3J5KVxuICAgICAgcmV0dXJuIGlzVmFsaWRTdGF0dXMoYW5zd2VyKSA/IHsgW2NhdGVnb3J5XTogYW5zd2VyIH0gOiB1bmRlZmluZWRcbiAgICB9KS5maWx0ZXIob2JqID0+IG9iaiA/IG9ialtPYmplY3Qua2V5cyhvYmopWzBdXSA6IGZhbHNlKTtcblxuICAgIC8vIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGFuc3dlcmVkXG4gICAgaWYgKGFuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29tcGxldGUoYW5zd2Vycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2MuZ2V0Q291bnRyeUNvZGUoXG4gICAgICBvcHRpb25zLFxuICAgICAgZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIC8vIGRvbid0IG5lZWQgdGhlIGxhdyBvciBsb2NhdGlvbiBvcHRpb25zIGFueW1vcmVcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubGF3O1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5sb2NhdGlvbjtcblxuICAgICAgICBpZiAocmVzdWx0LmNvZGUpIHtcbiAgICAgICAgICBvcHRpb25zID0gbGF3LmFwcGx5TGF3KG9wdGlvbnMsIHJlc3VsdC5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBsZXRlKG5ldyBjYy5Qb3B1cChvcHRpb25zKSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIC8vIGRvbid0IG5lZWQgdGhlIGxhdyBvciBsb2NhdGlvbiBvcHRpb25zIGFueW1vcmVcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubGF3O1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5sb2NhdGlvbjtcblxuICAgICAgICBlcnJvcihlcnIsIG5ldyBjYy5Qb3B1cChvcHRpb25zKSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHRyaWVzIHRvIGZpbmQgeW91ciBjdXJyZW50IGxvY2F0aW9uLiBJdCBlaXRoZXIgZ3JhYnMgaXQgZnJvbSBhIGhhcmRjb2RlZCBvcHRpb24gaW5cbiAgLy8gYG9wdGlvbnMubGF3LmNvdW50cnlDb2RlYCwgb3IgYXR0ZW1wdHMgdG8gbWFrZSBhIGxvY2F0aW9uIHNlcnZpY2UgcmVxdWVzdC4gVGhpcyBmdW5jdGlvbiBhY2NlcHRzXG4gIC8vIG9wdGlvbnMgKHdoaWNoIGNhbiBjb25maWd1cmUgdGhlIGBsYXdgIGFuZCBgbG9jYXRpb25gIG1vZHVsZXMpIGFuZCBmaXJlcyBhIGNhbGxiYWNrIHdpdGggd2hpY2hcbiAgLy8gcGFzc2VzIGFuIG9iamVjdCBge2NvZGU6IGNvdW50cnlDb2RlfWAgYXMgdGhlIGZpcnN0IGFyZ3VtZW50ICh3aGljaCBjYW4gaGF2ZSB1bmRlZmluZWQgcHJvcGVydGllcylcbiAgY2MuZ2V0Q291bnRyeUNvZGUgPSBmdW5jdGlvbihvcHRpb25zLCBjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBpZiAob3B0aW9ucy5sYXcgJiYgb3B0aW9ucy5sYXcuY291bnRyeUNvZGUpIHtcbiAgICAgIGNvbXBsZXRlKHtcbiAgICAgICAgY29kZTogb3B0aW9ucy5sYXcuY291bnRyeUNvZGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5sb2NhdGlvbikge1xuICAgICAgY29uc3QgbG9jYXRvciA9IG5ldyBjYy5Mb2NhdGlvbihvcHRpb25zLmxvY2F0aW9uKTtcbiAgICAgIGxvY2F0b3IubG9jYXRlKGZ1bmN0aW9uKHNlcnZpY2VSZXN1bHQpIHtcbiAgICAgICAgY29tcGxldGUoc2VydmljZVJlc3VsdCB8fCB7fSk7XG4gICAgICB9LCBlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbXBsZXRlKHt9KTtcbiAgfTtcblxuICAvLyBleHBvcnQgdXRpbHMgKG5vIHBvaW50IGluIGhpZGluZyB0aGVtLCBzbyB3ZSBtYXkgYXMgd2VsbCBleHBvc2UgdGhlbSlcbiAgY2MudXRpbHMgPSB1dGlsO1xuXG4gIC8vIHByZXZlbnQgdGhpcyBjb2RlIGZyb20gYmVpbmcgcnVuIHR3aWNlXG4gIGNjLmhhc0luaXRpYWxpemVkID0gdHJ1ZTtcblxuICB3aW5kb3cuY29va2llY29uc2VudCA9IGNjO1xufSkod2luZG93LmNvb2tpZWNvbnNlbnQgfHwge30pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==