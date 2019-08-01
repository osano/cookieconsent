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
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalises the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* CATEGORIES BOX */\n.cc-categories {\n  display: flex; }\n  @media screen and (max-width: 943px) {\n    .cc-categories {\n      flex-direction: column;\n      width: 100%;\n      margin-right: 8px; } }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 6px;\n    position: relative; }\n  @media screen and (max-width: 943px) {\n    .cc-categories .cc-category {\n      margin: 4px 0; }\n      .cc-categories .cc-category .cc-btn:not(.cc-info) {\n        width: calc( 100% - 16px);\n        min-width: 140px; } }\n  .cc-categories .cc-btn {\n    margin: 0; }\n  .cc-categories .cc-info {\n    padding: 4px;\n    font-variant: all-small-caps; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px; }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion-title {\n      cursor: pointer; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion {\n      display: none;\n      height: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion.open {\n      display: block;\n      height: auto; }\n\n@media screen and (max-width: 415px) {\n  .cc-save {\n    margin: 16px 0; } }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner,\n  .cc-window.cc-floating,\n  .cc-window.cc-right,\n  .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column; }\n  .cc-window.cc-banner .cc-compliance {\n    flex: 1 1 auto; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window.cc-banner {\n    align-items: unset; }\n  .cc-window.cc-banner .cc-message {\n    margin-right: 0; } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    background: white;\n    border-right: none;\n    border-left: 2px solid #56cbdb;\n    border-top: 2px solid #56cbdb;\n    border-bottom: 2px solid #56cbdb;\n    color: #2a94a1;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn:hover, .cc-theme-classic .cc-category .cc-btn:focus {\n      background: #ddedf0; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0;\n      border-left: none;\n      border-right: 2px solid #56cbdb;\n      border-top: 2px solid #56cbdb;\n      border-bottom: 2px solid #56cbdb; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n    .cc-theme-classic .cc-category .cc-btn.cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px;\n    background: white;\n    border: 2px solid #56cbdb; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      content: \"\";\n      border-right: 2px solid #56cbdb;\n      border-bottom: 2px solid #56cbdb;\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      background: white; }\n    .cc-theme-classic .cc-category .cc-tooltip .cc-cookie-accordion-title {\n      color: #56cbdb; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n", ""]);


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
        categories: '{{messagelink}}{{categories}}{{save}}' // add a custom layout here, then add some new css with the class '.cc-layout-my-cool-layout'
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
      'cc-theme-' + opts.theme // add the theme
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzA1M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImdldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvcCIsInNoaWZ0Iiwic2V0Q29va2llIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJleGRhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwidGhyb3R0bGUiLCJsaW1pdCIsIndhaXQiLCJhcHBseSIsInNldFRpbWVvdXQiLCJoYXNoIiwiaSIsImNociIsImxlbiIsImNoYXJDb2RlQXQiLCJub3JtYWxpc2VIZXgiLCJoZXgiLCJzdWJzdHIiLCJnZXRDb250cmFzdCIsInIiLCJwYXJzZUludCIsImciLCJiIiwieWlxIiwiZ2V0THVtaW5hbmNlIiwibnVtIiwiYW10IiwiUiIsIkIiLCJHIiwidG9TdHJpbmciLCJzbGljZSIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsInRyYXZlcnNlRE9NUGF0aCIsImVsZW0iLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdGF0dXMiLCJkZW55IiwiYWxsb3ciLCJkaXNtaXNzIiwiY2F0ZWdvcnkiLCJ1bmNhdGVnb3JpemVkIiwiZXNzZW50aWFsIiwicGVyc29uYWxpemF0aW9uIiwiYW5hbHl0aWNzIiwibWFya2V0aW5nIiwiaXNWYWxpZFN0YXR1cyIsImtleXMiLCJpbmRleE9mIiwidHJhbnNpdGlvbkVuZCIsImVsIiwiY3JlYXRlRWxlbWVudCIsInRyYW5zIiwidCIsIk9UIiwibXNUIiwiTW96VCIsIldlYmtpdFQiLCJwcmVmaXgiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlIiwiaGFzVHJhbnNpdGlvbiIsImN1c3RvbVN0eWxlcyIsIlBvcHVwIiwiZGVmYXVsdE9wdGlvbnMiLCJlbmFibGVkIiwiY29udGFpbmVyIiwib25Qb3B1cE9wZW4iLCJvblBvcHVwQ2xvc2UiLCJvbkluaXRpYWxpemUiLCJzdGF0dXNlcyIsIm9uU3RhdHVzQ2hhbmdlIiwiY29va2llTmFtZSIsImNob3NlbkJlZm9yZSIsIm9uUmV2b2tlQ2hvaWNlIiwib25Ob0Nvb2tpZUxhdyIsImNvdW50cnlDb2RlIiwiY291bnRyeSIsImNvbnRlbnQiLCJoZWFkZXIiLCJtZXNzYWdlIiwibGluayIsImhyZWYiLCJjbG9zZSIsInRhcmdldCIsInBvbGljeSIsImVsZW1lbnRzIiwibWVzc2FnZWxpbmsiLCJjYXRlZ29yaWVzIiwic2F2ZSIsIndpbmRvdyIsIm1vZGFsIiwicmV2b2tlQnRuIiwiY29tcGxpYW5jZSIsImluZm8iLCJ0eXBlIiwibGF5b3V0cyIsImJhc2ljIiwibGF5b3V0IiwicG9zaXRpb24iLCJ0aGVtZSIsInBhbGV0dGUiLCJyZXZva2FibGUiLCJhbmltYXRlUmV2b2thYmxlIiwic2hvd0xpbmsiLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJpZ25vcmVDbGlja3NGcm9tIiwiYXV0b09wZW4iLCJhdXRvQXR0YWNoIiwibW9iaWxlRm9yY2VGbG9hdCIsIndoaXRlbGlzdFBhZ2UiLCJibGFja2xpc3RQYWdlIiwib3ZlcnJpZGVIVE1MIiwiQ29va2llUG9wdXAiLCJpbml0aWFsaXplIiwicHJvdG90eXBlIiwib3B0aW9ucyIsImRlc3Ryb3kiLCJhc3NpZ24iLCJjaGVja0NhbGxiYWNrSG9va3MiLCJjYWxsIiwiaW5jbHVkZXMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwib25CdXR0b25DbGljayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNtaXNzVGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uV2luZG93U2Nyb2xsIiwib25XaW5kb3dDbGljayIsIm9uTW91c2VNb3ZlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVDdXN0b21TdHlsZSIsIm9wZW4iLCJpc09wZW4iLCJmYWRlSW4iLCJ0b2dnbGVSZXZva2VCdXR0b24iLCJzaG93UmV2b2tlIiwiZmFkZU91dCIsImFmdGVyVHJhbnNpdGlvbiIsImFmdGVyRmFkZU91dCIsIm1heEhlaWdodCIsImNsaWVudEhlaWdodCIsImZhZGVJblRpbWVvdXQiLCJvcGVuaW5nVGltZW91dCIsImFmdGVyRmFkZUluIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93IiwicmV2b2tlQ2hvaWNlIiwicHJldmVudE9wZW4iLCJjbGVhclN0YXR1c2VzIiwiaGFzQW5zd2VyZWQiLCJnZXRTdGF0dXNlcyIsInNvbWUiLCJoYXNDb25zZW50ZWQiLCJtYXAiLCJzZXRTdGF0dXNlcyIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwiZm9yRWFjaCIsImNhdGVnb3J5U3RhdHVzIiwiaW5kZXgiLCJyZW1vdmUiLCJjb21wbGV0ZSIsImNvb2tpZUVuYWJsZWQiLCJDb29raWVzT0siLCJzdGF0dXNlc1ZhbHVlcyIsIm1hdGNoZXMiLCJoYXNNYXRjaGVzIiwiZmlsdGVyIiwibWF0Y2giLCJnZXRQb3NpdGlvbkNsYXNzZXMiLCJwb3MiLCJvcHRzIiwicG9zaXRpb25TdHlsZSIsImNsYXNzZXMiLCJwdXNoIiwiYXR0YWNoQ3VzdG9tUGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJwcm9wIiwiY29tcGxpYW5jZVR5cGUiLCJtYXJrdXAiLCJkaXYiLCJjb250Iiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImNoZWNrZWQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYnRuIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlIiwicmVmZXJlbmNlcyIsImNvbG9yU3R5bGVzIiwicG9wdXAiLCJidXR0b24iLCJoaWdobGlnaHQiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInBhZGRpbmciLCJob3ZlciIsImdldEhvdmVyQ29sb3VyIiwiaGVhZCIsInNoZWV0IiwicnVsZUluZGV4IiwiaW5zZXJ0UnVsZSIsImN1c3RvbVN0eWxlIiwic3R5bGVOb2RlIiwib3duZXJOb2RlIiwiZGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxSYW5nZSIsInBhZ2VZT2Zmc2V0IiwicGFzc2l2ZSIsIndpbmRvd0NsaWNrIiwiaWdub3JlZENsaWNrcyIsImV2dCIsImNvbXBvc2VkUGF0aCIsImFyciIsImNvbnNvbGUiLCJ3YXJuIiwiaWdub3JlZENsaWNrIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJMb2NhdGlvbiIsInRpbWVvdXQiLCJzZXJ2aWNlcyIsInNlcnZpY2VEZWZpbml0aW9ucyIsImlwaW5mbyIsInVybCIsImhlYWRlcnMiLCJkb25lIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJlcnJvciIsInRvRXJyb3IiLCJjb2RlIiwiZXJyIiwiaXBpbmZvZGIiLCJpc1NjcmlwdCIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsIkVycm9yIiwiaXNvX2NvZGUiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4IiwiaWR4Iiwic2VydmljZU9wdGlvbiIsImR5bmFtaWNPcHRzIiwibG9jYXRlIiwiY2FsbGJhY2tDb21wbGV0ZSIsImNhbGxiYWNrRXJyb3IiLCJydW5TZXJ2aWNlIiwicnVuTmV4dFNlcnZpY2VPbkVycm9yIiwic2V0dXBVcmwiLCJzZXJ2aWNlT3B0cyIsImdldEN1cnJlbnRTZXJ2aWNlT3B0cyIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiaW50ZXJwb2xhdGVVcmwiLCJyZXF1ZXN0RnVuY3Rpb24iLCJnZXRTY3JpcHQiLCJtYWtlQXN5bmNSZXF1ZXN0IiwieGhyIiwicmVzcG9uc2VUZXh0IiwicnVuU2VydmljZUNhbGxiYWNrIiwiZGF0YSIsInNlcnZpY2VSZXN1bHRIYW5kbGVyIiwiYXN5bmNSZXN1bHQiLCJyZXN1bHQiLCJvblNlcnZpY2VSZXN1bHQiLCJsb2dFcnJvciIsIm5leHRTZXJ2aWNlIiwiY29tcGxldGVTZXJ2aWNlIiwidmFsIiwiZm4iLCJ0aW1lb3V0SWR4IiwicyIsInNyYyIsImFzeW5jIiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwic3RhdGUiLCJyZWFkeVN0YXRlIiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiQXJyYXkiLCJpc0FycmF5IiwibCIsInNlbmQiLCJMYXciLCJyZWdpb25hbExhdyIsImhhc0xhdyIsImV4cGxpY2l0QWN0aW9uIiwiZ2V0IiwiYXBwbHlMYXciLCJsYXciLCJhbnN3ZXJzIiwiYW5zd2VyIiwiZ2V0Q291bnRyeUNvZGUiLCJsb2NhdG9yIiwic2VydmljZVJlc3VsdCIsInV0aWxzIiwiY29va2llY29uc2VudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlD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QTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7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QWEsSUFBSSxFQUFsQixDQUFSO0FBQ0QsT0FGRCxFQUVHL0UsS0FGSDtBQUdBO0FBQ0Q7O0FBQ0Q5RixZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0QsR0FmRCxDQWp2RGEsQ0Frd0RiOzs7QUFDQXJOLElBQUUsQ0FBQ21ZLEtBQUgsR0FBV2pZLElBQVgsQ0Fud0RhLENBcXdEYjs7QUFDQUYsSUFBRSxDQUFDQyxjQUFILEdBQW9CLElBQXBCO0FBRUEySCxRQUFNLENBQUN3USxhQUFQLEdBQXVCcFksRUFBdkI7QUFDRCxDQXp3REEsQ0F5d0RFNEgsTUFBTSxDQUFDd1EsYUFBUCxJQUF3QixFQXp3RDFCLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDSEEsY0FBYyxtQkFBTyxDQUFDLGtOQUFzRzs7QUFFNUgsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHNHQUFtRDs7QUFFeEU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJjb29raWVjb25zZW50LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Nvb2tpZWNvbnNlbnQuanNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYy13aW5kb3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1pbnZpc2libGUge1xcbiAgb3BhY2l0eTogMDsgfVxcblxcbi8qIG9ubHkgYW5pbWF0ZSBpZmhhcyBjbGFzcyAnY2MtYW5pbWF0ZScgKi9cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2Uge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtZ3Jvd2VyIHtcXG4gIC8qIEluaXRpYWxseSB3ZSBkb24ndCB3YW50IGFueSBoZWlnaHQsIGFuZCB3ZSB3YW50IHRoZSBjb250ZW50cyB0byBiZSBoaWRkZW4gKi9cXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLyogU2V0IG91ciB0cmFuc2l0aW9ucyB1cC4gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7IH1cXG5cXG4vKiB0aGUgcG9wdXAgd2luZG93ICovXFxuLmNjLXdpbmRvdyxcXG4uY2MtcmV2b2tlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLyogZXhjbHVkZSBwYWRkaW5nIHdoZW4gZGVhbGluZyB3aXRoIHdpZHRoICovXFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBDYWxpYnJpLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC8qIGJ5IHNldHRpbmcgdGhlIGJhc2UgZm9udCBoZXJlLCB3ZSBjYW4gc2l6ZSB0aGUgcmVzdCBvZiB0aGUgcG9wdXAgdXNpbmcgQ1NTIGBlbWAgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIC8qIHRoZSBmb2xsb3dpbmcgYXJlIHJhbmRvbSB1bmp1c3RpZmllZCBzdHlsZXMgLSBqdXN0IGJlY2F1c2UgLSBzaG91bGQgcHJvYmFibHkgYmUgcmVtb3ZlZCAqL1xcbiAgei1pbmRleDogOTk5OTsgfVxcblxcbi5jYy13aW5kb3cuY2Mtc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7IH1cXG5cXG4vKiAyIGJhc2ljIHR5cGVzIG9mIHdpbmRvdyAtIGZsb2F0aW5nIC8gYmFubmVyICovXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBtYXgtd2lkdGg6IDI0ZW07XFxuICAvKiAxZW0gPT0gMTZweCB0aGVyZWZvcmUgMjRlbSA9PSAzODRweCAqL1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbi5jYy1yZXZva2Uge1xcbiAgcGFkZGluZzogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIGNsaWNrYWJsZSB0aGluZ3MgKi9cXG4uY2MtYnRuLFxcbi5jYy1saW5rLFxcbi5jYy1jbG9zZSxcXG4uY2MtcmV2b2tlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYy1saW5rIHtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAuMmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtbGluazpob3ZlciB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmNjLWxpbms6YWN0aXZlLFxcbi5jYy1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IGluaXRpYWw7IH1cXG5cXG4uY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpob3ZlcixcXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1jbG9zZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41ZW07XFxuICByaWdodDogMC41ZW07XFxuICBmb250LXNpemU6IDEuNmVtO1xcbiAgb3BhY2l0eTogMC45O1xcbiAgLyogc2VlaW5nIGFzIHRoaXMgY29udGFpbnMgdGV4dCBhbmQgbm90IGFuIGltYWdlLCB0aGUgZWxlbWVudCB0YWxsZXIgdGhhbiBpdCBpcyB3aWRlIChiZWNhdXNlIGl0IGlzIHRleHQpICovXFxuICAvKiAgLSB3ZSB3YW50IGl0IHRvIGJlIGEgc3F1YXJlLCBiZWNhdXNlIGl0J3MgYWN0aW5nIGFzIGFuIGljb24gKi9cXG4gIC8qICAtIHNldHRpbmcgdGhlIGxpbmUgaGVpZ2h0IG5vcm1hbGlzZXMgdGhlIGhlaWdodCAqL1xcbiAgbGluZS1oZWlnaHQ6IDAuNzU7IH1cXG5cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4vKiBUaGlzIGZpbGUgc2hvdWxkIGNvbnRhaW4gc3R5bGVzIHRoYXQgbW9kaWZpZXMgdGhlIHBvcHVwIGxheW91dC4gKi9cXG4vKiBCeSBsYXlvdXQsIHdlIG1lYW4gdGhlIHBoeXNpY2FsIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50cyBvbiB0aGUgcG9wdXAgd2luZG93LCBhbmQgdGhlIG1hcmdpbiAvIHBhZGRpbmcgYXJvdW5kIHRob3NlIGVsZW1lbnRzLiAqL1xcbi5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWxlZnQge1xcbiAgbGVmdDogM2VtO1xcbiAgcmlnaHQ6IHVuc2V0OyB9XFxuXFxuLmNjLXJldm9rZS5jYy1yaWdodCB7XFxuICByaWdodDogM2VtO1xcbiAgbGVmdDogdW5zZXQ7IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGTE9BVElORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIHRoZXNlIGNsYXNzZXMgcG9zaXRpb24gdGhlIGZsb2F0aW5nIGVsZW1lbnQgKi9cXG4uY2MtdG9wIHtcXG4gIHRvcDogMWVtOyB9XFxuXFxuLmNjLWxlZnQge1xcbiAgbGVmdDogMWVtOyB9XFxuXFxuLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAxZW07IH1cXG5cXG4uY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMWVtOyB9XFxuXFxuLyogbGlua3MgdGhhdCBhcmUgZGlyZWN0IGRlY2VuZGFudHMgc2hvdWxkIGJlIGRpc3BsYXllZCBhcyBibG9jayAqL1xcbi5jYy1mbG9hdGluZyA+IC5jYy1saW5rIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2Uge1xcbiAgZmxleDogMSAwIGF1dG87IH1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBCQU5ORVIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10b3Age1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwOyB9XFxuXFxuLmNjLWJhbm5lci5jYy1ib3R0b20ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwOyB9XFxuXFxuLmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07IH1cXG5cXG4vKiBDT01QTElBTkNFIEJPWCAqL1xcbi5jYy1jb21wbGlhbmNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlID4gLmNjLWJ0biB7XFxuICBmbGV4OiAxOyB9XFxuXFxuLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtOyB9XFxuXFxuLyogQ0FURUdPUklFUyBCT1ggKi9cXG4uY2MtY2F0ZWdvcmllcyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDNweCkge1xcbiAgICAuY2MtY2F0ZWdvcmllcyB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfSB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCA2cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTQzcHgpIHtcXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IHtcXG4gICAgICBtYXJnaW46IDRweCAwOyB9XFxuICAgICAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5IC5jYy1idG46bm90KC5jYy1pbmZvKSB7XFxuICAgICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgICAgbWluLXdpZHRoOiAxNDBweDsgfSB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbyB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwczsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gICAgYm90dG9tOiA0NnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgcCB7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24ge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgaGVpZ2h0OiAwOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIC5jYy1jb29raWUtYWNjb3JkaW9uLm9wZW4ge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGhlaWdodDogYXV0bzsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNXB4KSB7XFxuICAuY2Mtc2F2ZSB7XFxuICAgIG1hcmdpbjogMTZweCAwOyB9IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lcixcXG4gIC5jYy13aW5kb3cuY2MtZmxvYXRpbmcsXFxuICAuY2Mtd2luZG93LmNjLXJpZ2h0LFxcbiAgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdyAuY2MtbWVzc2FnZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9IH1cXG5cXG4vKiBDbGFzc2ljICovXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNvbXBsaWFuY2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxleDogbm9uZTsgfVxcblxcbi5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0bjpsYXN0LWNoaWxkIHtcXG4gICAgICBtaW4td2lkdGg6IDE0MHB4OyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzU2Y2JkYjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NmNiZGI7XFxuICAgIGNvbG9yOiAjMmE5NGExO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmhvdmVyLCAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZDogI2RkZWRmMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAtMXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICBsZWZ0OiA2cHg7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMUY1RjVcXFwiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2MtYnRuLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcXDI3MTNcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IC00cHg7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTZjYmRiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bi5jYy1pbmZvOmZvY3VzICsgLmNjLXRvb2x0aXAge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNTZjYmRiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzU2Y2JkYjtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU2Y2JkYjtcXG4gICAgICB3aWR0aDogMTBweDtcXG4gICAgICBoZWlnaHQ6IDEwcHg7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBib3R0b206IC03cHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGUge1xcbiAgICAgIGNvbG9yOiAjNTZjYmRiOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLyogRWRnZWxlc3MgKi9cXG4uY2MtdGhlbWUtZWRnZWxlc3MuY2Mtd2luZG93IHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjhlbSAxLjhlbTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbiEoZnVuY3Rpb24oY2MpIHtcbiAgLy8gc3RvcCBmcm9tIHJ1bm5pbmcgYWdhaW4sIGlmIGFjY2lkZW50bHkgaW5jbHVkZWQgbW9yZSB0aGFuIG9uY2UuXG4gIGlmIChjYy5oYXNJbml0aWFsaXplZCkgcmV0dXJuO1xuXG4gIGNvbnN0IHV0aWwgPSB7XG4gICAgXG4gICAgaW50ZXJwb2xhdGVTdHJpbmc6IGZ1bmN0aW9uKHN0ciwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soYXJndW1lbnRzWzFdKSB8fCAnJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgZ2V0Q29va2llOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9ICc7ICcgKyBkb2N1bWVudC5jb29raWVcbiAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJzsgJyArIG5hbWUgKyAnPScpXG4gICAgICByZXR1cm4gcGFydHMubGVuZ3RoIDwgMlxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHBhcnRzXG4gICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgIC5zcGxpdCgnOycpXG4gICAgICAgICAgICAuc2hpZnQoKVxuICAgIH0sXG5cbiAgICBzZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSkge1xuICAgICAgY29uc3QgZXhkYXRlID0gbmV3IERhdGUoKVxuICAgICAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJztleHBpcmVzPScgKyBleGRhdGUudG9VVENTdHJpbmcoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKCBkb21haW4gPyAnO2RvbWFpbj0nICsgZG9tYWluIDogJycgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIHNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnIClcbiAgICB9LFxuXG4gICAgLy8gb25seSB1c2VkIGZvciB0aHJvdHRsaW5nIHRoZSAnbW91c2Vtb3ZlJyBldmVudCAodXNlZCBmb3IgYW5pbWF0aW5nIHRoZSByZXZva2UgYnV0dG9uIHdoZW4gYGFuaW1hdGVSZXZva2FibGVgIGlzIHRydWUpXG4gICAgdGhyb3R0bGU6IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCkge1xuICAgICAgbGV0IHdhaXQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF3YWl0KSB7XG4gICAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB3YWl0ID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2FpdCA9IGZhbHNlO1xuICAgICAgICAgIH0sIGxpbWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLy8gb25seSB1c2VkIGZvciBoYXNoaW5nIGpzb24gb2JqZWN0cyAodXNlZCBmb3IgaGFzaCBtYXBwaW5nIHBhbGV0dGUgb2JqZWN0cywgdXNlZCB3aGVuIGN1c3RvbSBjb2xvdXJzIGFyZSBwYXNzZWQgdGhyb3VnaCBKYXZhU2NyaXB0KVxuICAgIGhhc2g6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgbGV0IGhhc2ggPSAwLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgY2hyLFxuICAgICAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICAgICAgZm9yIChpOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGhhc2ggPSAoaGFzaCA8PCA1KSAtIGhhc2ggKyBjaHI7XG4gICAgICAgIGhhc2ggfD0gMDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXNoO1xuICAgIH0sXG5cbiAgICBub3JtYWxpc2VIZXg6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgaWYgKGhleFswXSA9PSAnIycpIHtcbiAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZXgubGVuZ3RoID09IDMpIHtcbiAgICAgICAgaGV4ID0gaGV4WzBdICsgaGV4WzBdICsgaGV4WzFdICsgaGV4WzFdICsgaGV4WzJdICsgaGV4WzJdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhleDtcbiAgICB9LFxuXG4gICAgLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxuICAgIGdldENvbnRyYXN0OiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGhleCA9IHRoaXMubm9ybWFsaXNlSGV4KGhleCk7XG4gICAgICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpO1xuICAgICAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICAgIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNik7XG4gICAgICBjb25zdCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDA7XG4gICAgICByZXR1cm4geWlxID49IDEyOCA/ICcjMDAwJyA6ICcjZmZmJztcbiAgICB9LFxuXG4gICAgLy8gdXNlZCB0byBjaGFuZ2UgY29sb3Igb24gaGlnaGxpZ2h0XG4gICAgZ2V0THVtaW5hbmNlOiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHRoaXMubm9ybWFsaXNlSGV4KGhleCksIDE2KSxcbiAgICAgICAgYW10ID0gMzgsXG4gICAgICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcbiAgICAgICAgQiA9ICgobnVtID4+IDgpICYgMHgwMGZmKSArIGFtdCxcbiAgICAgICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXQ7XG4gICAgICAgIHJldHVybiAnIycgKyAoXG4gICAgICAgIDB4MTAwMDAwMCArXG4gICAgICAgIChSIDwgMjU1ID8gKFIgPCAxID8gMCA6IFIpIDogMjU1KSAqIDB4MTAwMDAgK1xuICAgICAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXG4gICAgICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxuICAgICAgKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC5zbGljZSgxKTtcbiAgICB9LFxuXG4gICAgaXNNb2JpbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgaXNQbGFpbk9iamVjdDogZnVuY3Rpb24ob2JqKSB7XG4gICAgICAvLyBUaGUgY29kZSBcInR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbFwiIGFsbG93cyBBcnJheSBvYmplY3RzXG4gICAgICByZXR1cm4gKFxuICAgICAgICB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgdHJhdmVyc2VET01QYXRoOiBmdW5jdGlvbihlbGVtLCBjbGFzc05hbWUpIHtcbiAgICAgIGlmICghZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmIChlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSByZXR1cm4gZWxlbTtcblxuICAgICAgcmV0dXJuIHRoaXMudHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdmFsaWQgY29va2llIHZhbHVlc1xuICBjYy5zdGF0dXMgPSB7XG4gICAgZGVueSAgIDogJ2RlbnknLFxuICAgIGFsbG93ICA6ICdhbGxvdycsXG4gICAgZGlzbWlzczogJ2Rpc21pc3MnXG4gIH07XG4gIGNjLmNhdGVnb3J5ID0ge1xuICAgIHVuY2F0ZWdvcml6ZWQgIDogJ2Rpc21pc3MnLFxuICAgIGVzc2VudGlhbCAgICAgIDogJ2FsbG93JyxcbiAgICBwZXJzb25hbGl6YXRpb246ICdkaXNtaXNzJyxcbiAgICBhbmFseXRpY3MgICAgICA6ICdkaXNtaXNzJyxcbiAgICBtYXJrZXRpbmcgICAgICA6ICdkaXNtaXNzJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBzdGF0dXMgaXMgaW4gdGhlIGNvbnN0YW50cyBsaXN0XG4gICAqIEBwYXJhbSB7IHN0cmluZyB9IHN0YXR1cyAtIFN0YXR1cyBTdHJpbmcgdG9cbiAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxuICAgKi9cbiAgY29uc3QgaXNWYWxpZFN0YXR1cyA9IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoY2Muc3RhdHVzKS5pbmRleE9mKHN0YXR1cykgPj0gMFxuICB9XG5cbiAgLy8gZGV0ZWN0cyB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IG5hbWVcbiAgY2MudHJhbnNpdGlvbkVuZCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRyYW5zID0ge1xuICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgT1Q6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICBtc1Q6ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgV2Via2l0VDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgfTtcblxuICAgIGZvciAobGV0IHByZWZpeCBpbiB0cmFucykge1xuICAgICAgaWYgKFxuICAgICAgICB0cmFucy5oYXNPd25Qcm9wZXJ0eShwcmVmaXgpICYmXG4gICAgICAgIHR5cGVvZiBlbC5zdHlsZVtwcmVmaXggKyAncmFuc2l0aW9uJ10gIT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KSgpO1xuXG4gIGNjLmhhc1RyYW5zaXRpb24gPSAhIWNjLnRyYW5zaXRpb25FbmQ7XG5cbiAgLy8gY29udGFpbnMgcmVmZXJlbmNlcyB0byB0aGUgY3VzdG9tIDxzdHlsZT4gdGFnc1xuICBjYy5jdXN0b21TdHlsZXMgPSB7fTtcblxuICBjYy5Qb3B1cCA9IChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxuICAgICAgZW5hYmxlZDogdHJ1ZSxcblxuICAgICAgLy8gb3B0aW9uYWwgKGV4cGVjdGluZyBhIEhUTUwgZWxlbWVudCkgaWYgcGFzc2VkLCB0aGUgcG9wdXAgaXMgYXBwZW5kZWQgdG8gdGhpcyBlbGVtZW50LiBkZWZhdWx0IGlzIGBkb2N1bWVudC5ib2R5YFxuICAgICAgY29udGFpbmVyOiBudWxsLFxuXG4gICAgICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXG4gICAgICBjb29raWU6IHtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcbiAgICAgICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXG4gICAgICAgIHBhdGg6ICcvJyxcblxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkb21haW4gdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgb24gdGhpcyBkb21haW4uXG4gICAgICAgIC8vICAtIEd1aWRlIHRvIGNvb2tpZSBkb21haW5zIC0gaHR0cHM6Ly93d3cubXhzYXNoYS5ldS9ibG9nLzIwMTQvMDMvMDQvZGVmaW5pdGl2ZS1ndWlkZS10by1jb29raWUtZG9tYWlucy9cbiAgICAgICAgZG9tYWluOiAnJyxcblxuICAgICAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcbiAgICAgICAgZXhwaXJ5RGF5czogMzY1LFxuXG4gICAgICAgIC8vIElmIHRydWUgdGhlIGNvb2tpZSB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgc2VjdXJlIGZsYWcuIFNlY3VyZSBjb29raWVzIHdpbGwgb25seSBiZSB0cmFuc21pdHRlZCB2aWEgSFRUUFMuXG4gICAgICAgIHNlY3VyZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZXNlIGNhbGxiYWNrIGhvb2tzIGFyZSBjYWxsZWQgYXQgY2VydGFpbiBwb2ludHMgaW4gdGhlIHByb2dyYW0gZXhlY3V0aW9uXG4gICAgICBvblBvcHVwT3BlbjogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uUG9wdXBDbG9zZTogZnVuY3Rpb24oKSB7fSxcbiAgICAgIG9uSW5pdGlhbGl6ZTogZnVuY3Rpb24oc3RhdHVzZXMpIHt9LFxuICAgICAgb25TdGF0dXNDaGFuZ2U6IGZ1bmN0aW9uKGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKSB7fSxcbiAgICAgIG9uUmV2b2tlQ2hvaWNlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Ob0Nvb2tpZUxhdzogZnVuY3Rpb24oY291bnRyeUNvZGUsIGNvdW50cnkpIHt9LFxuXG4gICAgICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIGhlYWRlcjogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcbiAgICAgICAgZGlzbWlzczogJ0dvdCBpdCEnLFxuICAgICAgICBhbGxvdzogJ0FsbG93IGNvb2tpZXMnLFxuICAgICAgICBkZW55OiAnRGVjbGluZScsXG4gICAgICAgIGxpbms6ICdMZWFybiBtb3JlJyxcbiAgICAgICAgaHJlZjogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcbiAgICAgICAgY2xvc2U6ICcmI3gyNzRjOycsXG4gICAgICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgICAgIHBvbGljeTogJ0Nvb2tpZSBQb2xpY3knXG4gICAgICB9LFxuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBIVE1MIGZvciB0aGUgZWxlbWVudHMgYWJvdmUuIFRoZSBzdHJpbmcge3toZWFkZXJ9fSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGVxdWl2YWxlbnQgdGV4dCBiZWxvdy5cbiAgICAgIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXG4gICAgICAvL1xuICAgICAgLy8gIC0gQVJJQSBydWxlcyBzdWdnZXN0IHRvIGVuc3VyZSBjb250cm9scyBhcmUgdGFiYmFibGUgKHNvIHRoZSBicm93c2VyIGNhbiBmaW5kIHRoZSBmaXJzdCBjb250cm9sKSxcbiAgICAgIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImNjLWhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+Jm5ic3A7JyxcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvc3Bhbj4nLFxuICAgICAgICBtZXNzYWdlbGluazpcbiAgICAgICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fSA8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT48L3NwYW4+JyxcbiAgICAgICAgZGlzbWlzczpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kaXNtaXNzXCI+e3tkaXNtaXNzfX08L2E+JyxcbiAgICAgICAgYWxsb3c6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJhbGxvdyBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgIGNsYXNzPVwiY2MtYnRuIGNjLWFsbG93XCI+e3thbGxvd319PC9hPicsXG4gICAgICAgIGRlbnk6XG4gICAgICAgICAgJzxhIGFyaWEtbGFiZWw9XCJkZW55IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kZW55XCI+e3tkZW55fX08L2E+JyxcbiAgICAgICAgbGluazpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcbiAgICAgICAgY2xvc2U6XG4gICAgICAgICAgJzxzcGFuIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1jbG9zZVwiPnt7Y2xvc2V9fTwvc3Bhbj4nLFxuICAgICAgICBjYXRlZ29yaWVzOiBgIFxuICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNhdGVnb3JpZXNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInVuY2F0ZWdvcml6ZWRcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+VW5jYXRlZ29yaXplZDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiVW5jYXRlZ29yaXplZCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiMVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCBhbnkgb3RoZXIgY2F0ZWdvcnkuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiVW5jYXRlZ29yaXplZCBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+VW5jYXRlZ29yaXplZCBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCIyXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJlc3NlbnRpYWxcIiBjaGVja2VkIGRpc2FibGVkLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5Fc3NlbnRpYWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiM1wiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgZXNzZW50aWFsIGFwcGxpY2F0aW9uIG9yIHdlYnNpdGUgb3BwZXJhdGlvbiBjb29raWVzLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+RXNzZW50aWFsIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjRcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBlcnNvbmFsaXphdGlvblwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5QZXJzb25hbGl6YXRpb248L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiNVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB0aGUgYXBwbGljYXRpb24gdG8gYSBzcGVjaWZpYyB1c2VyLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIlBlcnNvbmFsaXphdGlvbiBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+UGVyc29uYWxpemF0aW9uIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjZcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuYWx5dGljc1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5BbmFseXRpY3M8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiN1wiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgYW5hbHlpemUgZGF0YS48L3A+XG4gICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJBbmFseXRpY3MgQ29va2llcyBMaXN0XCIgcm9sZT1cImJ1dHRvblwiPkFuYWx5dGljcyBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI4XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJtYXJrZXRpbmdcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+TWFya2V0aW5nPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjlcIj5ePC9idXR0b24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIHBlcm9uYWxpemUgeW91ciBpbnRlcm5ldCBzaG9wcGluZyAmIGFkdmVydGlzZW1lbnQgZXhwZXJpZW5jZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiTWFya2V0aW5nIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5NYXJrZXRpbmcgQ29va2llczwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIGAsXG4gICAgICAgIHNhdmU6IGBcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLXNhdmVcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIGBcbiAgICAgICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XG4gICAgICAvLyAgLSB7e2NsYXNzZXN9fSBpcyB3aGVyZSBhZGRpdGlvbmFsIGNsYXNzZXMgZ2V0IGFkZGVkXG4gICAgICAvLyAgLSB7e2NoaWxkcmVufX0gaXMgd2hlcmUgdGhlIEhUTUwgY2hpbGRyZW4gYXJlIHBsYWNlZFxuICAgICAgd2luZG93OlxuICAgICAgICAnPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1sYWJlbD1cImNvb2tpZWNvbnNlbnRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy13aW5kb3cge3tjbGFzc2VzfX1cIj48IS0tZ29vZ2xlb2ZmOiBhbGwtLT57e2NoaWxkcmVufX08IS0tZ29vZ2xlb246IGFsbC0tPjwvZGl2PicsXG4gICAgICBcbiAgICAgIG1vZGFsOiAnJyxcblxuICAgICAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxuICAgICAgLy8gSXQgY2FuIGJlIGVuYWJsZWQgb2YgZGlzYWJsZWQgdXNpbmcgdGhlIGByZXZva2FibGVgIG9wdGlvblxuICAgICAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxuXG4gICAgICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgICAgIGNvbXBsaWFuY2U6IHtcbiAgICAgICAgaW5mbzogJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlXCI+e3tkaXNtaXNzfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LWluJzpcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2UgY2MtaGlnaGxpZ2h0XCI+e3tkaXNtaXNzfX17e2FsbG93fX17e2N1c3RvbWl6ZX19PC9kaXY+JyxcbiAgICAgICAgJ29wdC1vdXQnOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+J1xuICAgICAgfSxcblxuICAgICAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXG4gICAgICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgICAgIC8vIGRlZmluZSBsYXlvdXQgbGF5b3V0cyBoZXJlXG4gICAgICBsYXlvdXRzOiB7XG4gICAgICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgICAgIGJhc2ljICAgICAgICAgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX0nLFxuICAgICAgICAnYmFzaWMtY2xvc2UnIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcbiAgICAgICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19JyxcbiAgICAgICAgY2F0ZWdvcmllcyAgICA6ICd7e21lc3NhZ2VsaW5rfX17e2NhdGVnb3JpZXN9fXt7c2F2ZX19J1xuICAgICAgICAvLyBhZGQgYSBjdXN0b20gbGF5b3V0IGhlcmUsIHRoZW4gYWRkIHNvbWUgbmV3IGNzcyB3aXRoIHRoZSBjbGFzcyAnLmNjLWxheW91dC1teS1jb29sLWxheW91dCdcbiAgICAgICAgLy8nbXktY29vbC1sYXlvdXQnOiAnPGRpdiBjbGFzcz1cIm15LXNwZWNpYWwtbGF5b3V0XCI+e3ttZXNzYWdlfX17e2NvbXBsaWFuY2V9fTwvZGl2Pnt7Y2xvc2V9fScsXG4gICAgICB9LFxuXG4gICAgICAvLyBkZWZhdWx0IGxheW91dCAoc2VlIGFib3ZlKVxuICAgICAgbGF5b3V0OiAnYmFzaWMnLFxuXG4gICAgICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gICAgICAvLyAgLSBiYW5uZXIgcG9zaXRpb25zOiB0b3AsIGJvdHRvbVxuICAgICAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XG4gICAgICAvL1xuICAgICAgLy8gYWRkcyBhIGNsYXNzIGBjYy1mbG9hdGluZ2Agb3IgYGNjLWJhbm5lcmAgd2hpY2ggaGVscHMgd2hlbiBzdHlsaW5nXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcblxuICAgICAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAgICAgLy8gICAgLWJsb2NrIChkZWZhdWx0LCBubyBleHRyYSBjbGFzc2VzKVxuICAgICAgLy8gICAgLWVkZ2VsZXNzXG4gICAgICAvLyAgICAtY2xhc3NpY1xuICAgICAgLy8gdXNlIHlvdXIgb3duIHN0eWxlIG5hbWUgYW5kIHVzZSBgLmNjLXRoZW1lLVNUWUxFTkFNRWAgY2xhc3MgaW4gQ1NTIHRvIGVkaXQuXG4gICAgICAvLyBOb3RlOiBzdHlsZSBcIndpcmVcIiBpcyB1c2VkIGZvciB0aGUgY29uZmlndXJhdG9yLCBidXQgaGFzIG5vIENTUyBzdHlsZXMgb2YgaXRzIG93biwgb25seSBwYWxldHRlIGlzIHVzZWQuXG4gICAgICB0aGVtZTogJ2Jsb2NrJyxcblxuICAgICAgLy8gVGhlIHBvcHVwIGlzIGBmaXhlZGAgYnkgZGVmYXVsdCwgYnV0IGlmIHlvdSB3YW50IGl0IHRvIGJlIHN0YXRpYyAoaW5saW5lIHdpdGggdGhlIHBhZ2UgY29udGVudCksIHNldCB0aGlzIHRvIGZhbHNlXG4gICAgICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcbiAgICAgIHN0YXRpYzogZmFsc2UsXG5cbiAgICAgIC8vIGlmIHlvdSB3YW50IGN1c3RvbSBjb2xvdXJzLCBwYXNzIHRoZW0gaW4gaGVyZS4gdGhpcyBvYmplY3Qgc2hvdWxkIGxvb2sgbGlrZSB0aGlzLlxuICAgICAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgcG9wdXA6IHtiYWNrZ3JvdW5kOiAnIzAwMDAwMCcsIHRleHQ6ICcjZmZmJywgbGluazogJyNmZmYnfSxcbiAgICAgIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcbiAgICAgIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAgICAgLy8gICB9XG4gICAgICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cbiAgICAgIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxuICAgICAgcGFsZXR0ZTogbnVsbCxcblxuICAgICAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXG4gICAgICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50Lmxhd2AgY2FuIGNoYW5nZSB0aGlzIHRvIGB0cnVlYCBpZiBpdCBkZXRlY3RzIHRoYXQgaXQgc2hvdWxkXG4gICAgICByZXZva2FibGU6IGZhbHNlLFxuXG4gICAgICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcbiAgICAgIGFuaW1hdGVSZXZva2FibGU6IHRydWUsXG5cbiAgICAgIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcbiAgICAgIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xuICAgICAgc2hvd0xpbms6IHRydWUsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXG4gICAgICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gYXV0b2Rpc21pc3MgYWZ0ZXIgc2V0IHRpbWVcbiAgICAgIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxuXG4gICAgICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gICAgICBkaXNtaXNzT25XaW5kb3dDbGljazogZmFsc2UsXG5cbiAgICAgIC8vIElmIGBkaXNtaXNzT25XaW5kb3dDbGlja2AgaXMgdHJ1ZSwgd2UgY2FuIGNsaWNrIG9uICdyZXZva2UnIGFuZCB3ZSdsbCBzdGlsbCBkaXNtaXNzIHRoZSBiYW5uZXIsIHNvIHdlIG5lZWQgZXhjZXB0aW9ucy5cbiAgICAgIC8vIHNob3VsZCBiZSBhbiBhcnJheSBvZiBjbGFzcyBuYW1lcyAobm90IENTUyBzZWxlY3RvcnMpXG4gICAgICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nXSwgLy8gYWxyZWFkeSBpbmNsdWRlcyB0aGUgcmV2b2tlIGJ1dHRvbiBhbmQgdGhlIGJhbm5lciBpdHNlbGZcblxuICAgICAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxuICAgICAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXG4gICAgICBhdXRvT3BlbjogdHJ1ZSxcblxuICAgICAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXG4gICAgICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XG4gICAgICAvL1xuICAgICAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpO1xuICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudCk7XG4gICAgICAvL1xuICAgICAgYXV0b0F0dGFjaDogdHJ1ZSxcblx0ICBcblx0ICAvLyBzZXQgdmFsdWUgaWYgZmxvYXRpbmcgbGF5b3V0IHNob3VsZCBiZSBmb3JjZWQgZm9yIG1vYmlsZSBkZXZpY2VzXG5cdCAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAgICAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XG4gICAgICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gICAgICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICAgICAgd2hpdGVsaXN0UGFnZTogW10sXG4gICAgICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAgICAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAgICAgLy8gQmUgc3VyZSB0byB1c2UgdGhlIGNsYXNzZXMgYGNjLWJ0bmAgYW5kIGBjYy1hbGxvd2AsIGBjYy1kZW55YCBvciBgY2MtZGlzbWlzc2AuIFRoZXkgZW5hYmxlIHRoZSBhcHAgdG8gcmVnaXN0ZXIgY2xpY2tcbiAgICAgIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICAgICAgb3ZlcnJpZGVIVE1MOiBudWxsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvb2tpZVBvcHVwKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpOyAvLyBhbHJlYWR5IHJlbmRlcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBvcHRpb25zIGJhY2sgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICAvLyBtZXJnZSBpbiB1c2VyIG9wdGlvbnNcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxuICAgICAgaWYgKGNoZWNrQ2FsbGJhY2tIb29rcy5jYWxsKHRoaXMpKSB7XG4gICAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gdGhlIGZ1bGwgbWFya3VwIGVpdGhlciBjb250YWlucyB0aGUgd3JhcHBlciBvciBpdCBkb2VzIG5vdCAoZm9yIG11bHRpcGxlIGluc3RhbmNlcylcbiAgICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcbiAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgZ2V0UG9wdXBDbGFzc2VzLmNhbGwodGhpcykuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgZ2V0UG9wdXBJbm5lck1hcmt1cC5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcbiAgICAgIGNvbnN0IGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MO1xuICAgICAgaWYgKHR5cGVvZiBjdXN0b21IVE1MID09ICdzdHJpbmcnICYmIGN1c3RvbUhUTUwubGVuZ3RoICkge1xuICAgICAgICBjb29raWVQb3B1cCA9IGN1c3RvbUhUTUw7XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXG4gICAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGFwcGVuZE1hcmt1cC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4nICsgY29va2llUG9wdXAgKyAnPC9kaXY+J1xuICAgICAgICApO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnOyAvLyBzZXQgaXQgdG8gdmlzaWJsZSAoYmVjYXVzZSBhcHBlbmRNYXJrdXAgaGlkZXMgaXQpXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZDsgLy8gZ2V0IHRoZSBgZWxlbWVudGAgcmVmZXJlbmNlIGZyb20gdGhlIHdyYXBwZXJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGFwcGVuZE1hcmt1cC5jYWxsKHRoaXMsIGNvb2tpZVBvcHVwKTtcbiAgICAgIH1cblxuICAgICAgYXBwbHlBdXRvRGlzbWlzcy5jYWxsKHRoaXMpO1xuXG4gICAgICBhcHBseVJldm9rZUJ1dHRvbi5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICAgIHRoaXMuYXV0b09wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm9uQnV0dG9uQ2xpY2sgJiYgdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRpc21pc3NUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc21pc3NUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93U2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93Q2xpY2spIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25Nb3VzZU1vdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuICYmIHRoaXMucmV2b2tlQnRuLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnJldm9rZUJ0bik7XG4gICAgICB9XG4gICAgICB0aGlzLnJldm9rZUJ0biA9IG51bGw7XG5cbiAgICAgIHJlbW92ZUN1c3RvbVN0eWxlKHRoaXMub3B0aW9ucy5wYWxldHRlKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBpZiAoY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHRoaXMuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3B1cE9wZW4uY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKHNob3dSZXZva2UpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUG9wdXBDbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmZhZGVJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBBRlRFUiBmYWRlT3V0ICh3aGljaCBpcyBnb3Zlcm5lZCBieSB0aGUgJ3RyYW5zaXRpb25lbmQnIGV2ZW50KS5cbiAgICAgIC8vICd0cmFuc2l0aW9uZW5kJyBpc24ndCBhbGwgdGhhdCByZWxpYWJsZSwgc28sIGlmIHdlIHRyeSBhbmQgZmFkZUluIGJlZm9yZSAndHJhbnNpdGlvbmVuZCcgaGFzXG4gICAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICAgIGlmICh0aGlzLmFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgICBhZnRlckZhZGVPdXQuY2FsbCh0aGlzLCBlbCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwOyAvLyAobXMpIERPIE5PVCBNQUtFIFRISVMgVkFMVUUgU01BTExFUi4gU2VlIGJlbG93XG5cbiAgICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHdhaXRpbmcgZm9yIGEgXCJicm93c2VyIHJlZHJhd1wiIGJlZm9yZSB3ZSByZW1vdmUgdGhlICdjYy1pbnZpc2libGUnIGNsYXNzLlxuICAgICAgICAvLyBJZiB0aGUgY2xhc3MgaXMgcmVtdm9lZCBiZWZvcmUgYSByZWRyYXcgY291bGQgaGFwcGVuLCB0aGVuIHRoZSBmYWRlSW4gZWZmZWN0IFdJTEwgTk9UIHdvcmssIGFuZFxuICAgICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgICAgLy8gaXRzIHRoaW5nLiBUaGUgYWN0dWFsbHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHVzaW5nIDAgYW5kIDIwIGluIGEgc2V0IHRpbWVvdXQgaXMgbmVnbGVnaWJsZSBhbnl3YXlcbiAgICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgYWZ0ZXJGYWRlSW4uYmluZCh0aGlzLCBlbCksXG4gICAgICAgICAgZmFkZUluVGltZW91dFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZmFkZU91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICAgIGlmICghY2MuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpO1xuICAgICAgICBhZnRlckZhZGVJbi5iaW5kKHRoaXMsIGVsKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IGFmdGVyRmFkZU91dC5iaW5kKHRoaXMsIGVsKTtcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG5cbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnJyAmJlxuICAgICAgICAoY2MuaGFzVHJhbnNpdGlvbiA/ICF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSA6IHRydWUpXG4gICAgICApO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUudG9nZ2xlUmV2b2tlQnV0dG9uID0gZnVuY3Rpb24oc2hvdykge1xuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnO1xuICAgIH07XG5cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUucmV2b2tlQ2hvaWNlID0gZnVuY3Rpb24ocHJldmVudE9wZW4pIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpO1xuXG4gICAgICB0aGlzLm9wdGlvbnMub25SZXZva2VDaG9pY2UuY2FsbCh0aGlzKTtcblxuICAgICAgaWYgKCFwcmV2ZW50T3Blbikge1xuICAgICAgICB0aGlzLmF1dG9PcGVuKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhcyB0aGUgdXNlciByZXNwb25kZWQgdG8gdGhlIGJhbm5lclxuICAgICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaGFzQW5zd2VyZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHRoZSB1c2VyIGhhcyBnaXZlbiBjb25zZW50IHRvIGFsbCBvZiB0aGUgY2F0ZWdvcmllc1xuICAgICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXG4gICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmhhc0NvbnNlbnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IGNjLnN0YXR1cy5hbGxvdyB8fCBzdGF0dXMgPT09IGNjLnN0YXR1cy5kaXNtaXNzIClcbiAgICB9O1xuXG4gICAgLy8gb3BlbnMgdGhlIHBvcHVwIGlmIG5vIGFuc3dlciBoYXMgYmVlbiBnaXZlblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5hdXRvT3BlbiA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXG4gICAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgfSBlbHNlIGlmIChoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogXG4gICAgICogU2V0J3MgY29va2llIHN0YXR1c2VzXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBwZXJzb25hbGl6YXRpb24gLSBQcmVmZXJlbmNlcyAvIEZ1bmN0aW9uYWxpdHkgc2V0IHRvIHZhbHVlXG4gICAgICogQHBhcmFtIHsgc3RyaW5nPGNjLnN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcmV0dXJuIHsgdW5kZWZpbmVkIH1cbiAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5zZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qge25hbWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlfSA9IHRoaXMub3B0aW9ucy5jb29raWVcblxuICAgICAgLy8gaWYgYHN0YXR1c2AgaXMgdmFsaWRcbiAgICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWRTdGF0dXMoc3RhdHVzKSkge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2YodXRpbC5nZXRDb29raWUoY29va2llTmFtZSkpID49IDBcbiAgICAgICAgICB1dGlsLnNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgICAgIHRoaXMub3B0aW9ucy5vblN0YXR1c0NoYW5nZS5jYWxsKHRoaXMsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xuICAgICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCBjYy5jYXRlZ29yeVsgY2F0ZWdvcnkgXSApIClcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IGFyZ3VtZW50c1sgMCBdXG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIHN0YXR1cyApIClcbiAgICAgIH0gZWxzZSBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuICAgICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XG4gICAgICAgICAgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KVsgaW5kZXggXSwgY2F0ZWdvcnlTdGF0dXMgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgICAqIEByZXR1cm4geyBhcnJheTxzdHJpbmc+IH0gLSBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXMgaW4gb3JkZXIgb2YgY2MuY2F0ZWdvcnlcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuZ2V0U3RhdHVzZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkubWFwKCBjYXRlZ29yeU5hbWUgPT4gdXRpbC5nZXRDb29raWUodGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lKydfJytjYXRlZ29yeU5hbWUpIClcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuY2xlYXJTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWU7XG4gICAgICBPYmplY3Qua2V5cyhjYy5jYXRlZ29yeSkuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgICAgdXRpbC5zZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnlOYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcbiAgICAgIH0pXG4gICAgfTtcblxuICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGFmdGVyICdmYWRlSW4nLiBUaGlzIGlzIHRoZSBjb2RlIHRoYXQgYWN0dWFsbHkgY2F1c2VzIHRoZSBmYWRlSW4gdG8gd29ya1xuICAgIC8vIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJztcbiAgICBmdW5jdGlvbiBhZnRlckZhZGVJbihlbCkge1xuICAgICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGw7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYy1pbnZpc2libGUnKVxuICAgIH1cblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIG9uICd0cmFuc2l0aW9uZW5kJyAob25seSBvbiB0aGUgdHJhbnNpdGlvbiBvZiB0aGUgZmFkZU91dCkuIFRoYXQncyBiZWNhdXNlIGFmdGVyIHdlJ3ZlIGZhZGVkIG91dCwgd2UgbmVlZCB0b1xuICAgIC8vIHNldCB0aGUgZGlzcGxheSB0byAnbm9uZScgKHNvIHRoZXJlIGFyZW4ndCBhbm5veWluZyBpbnZpc2libGUgcG9wdXBzIGFsbCBvdmVyIHRoZSBwYWdlKS4gSWYgZm9yIHdoZW5ldmVyIHJlYXNvbiB0aGlzIGZ1bmN0aW9uXG4gICAgLy8gaXMgbm90IGNhbGxlZCAobGFjayBvZiBzdXBwb3J0KSwgdGhlIG9wZW4vY2xvc2UgbWVjaGFuaXNtIHdpbGwgc3RpbGwgd29yay5cbiAgICBmdW5jdGlvbiBhZnRlckZhZGVPdXQoZWwpIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIGFmdGVyIGNsb3NlIGFuZCBiZWZvcmUgb3BlbiwgdGhlIGRpc3BsYXkgc2hvdWxkIGJlIG5vbmVcbiAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoY2MudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pO1xuICAgICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSBudWxsO1xuICAgIH1cblxuICAgIC8vIHRoaXMgZnVuY3Rpb24gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBob29rIGFuZCByZXR1cm5zIHRydWUgKGlmIG5lZWRlZCkgYW5kIHJldHVybnMgZmFsc2Ugb3RoZXJ3aXNlXG4gICAgZnVuY3Rpb24gY2hlY2tDYWxsYmFja0hvb2tzKCkge1xuICAgICAgY29uc3QgY29tcGxldGUgPSB0aGlzLm9wdGlvbnMub25Jbml0aWFsaXplLmJpbmQodGhpcyk7XG5cbiAgICAgIGlmICghd2luZG93Lm5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XG4gICAgICAgIGNvbXBsZXRlKGNjLnN0YXR1cy5kZW55KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LKSB7XG4gICAgICAgIGNvbXBsZXRlKGNjLnN0YXR1cy5hbGxvdyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpXG4gICAgICBjb25zdCBzdGF0dXNlc1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzZXMoKVxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IGlzVmFsaWRTdGF0dXMoIHN0YXR1cyApIH0gKSApXG4gICAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG1hdGNoID0+IG1hdGNoW09iamVjdC5rZXlzKG1hdGNoKVswXV0gKS5sZW5ndGggPiAwXG4gICAgICBzdGF0dXNlc1ZhbHVlcy5mb3JFYWNoKCAoIHN0YXR1cywgaW5kZXggKSA9PiBjYy5jYXRlZ29yeVsgY2F0ZWdvcmllc1sgaW5kZXggXSBdID0gc3RhdHVzID8gc3RhdHVzIDogY2MuY2F0ZWdvcnlbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSApXG4gICAgICBjb21wbGV0ZSggaGFzTWF0Y2hlcyA/IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IHN0YXR1cyB9ICkgKSAgOiB1bmRlZmluZWQgKVxuXG4gICAgICByZXR1cm4gaGFzTWF0Y2hlcztcbiAgICB9XG5cbiAgICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UG9wdXBDbGFzc2VzKCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGxldCBwb3NpdGlvblN0eWxlID1cbiAgICAgICAgb3B0cy5wb3NpdGlvbiA9PSAndG9wJyB8fCBvcHRzLnBvc2l0aW9uID09ICdib3R0b20nXG4gICAgICAgICAgPyAnYmFubmVyJ1xuICAgICAgICAgIDogJ2Zsb2F0aW5nJztcblxuICAgICAgaWYgKHV0aWwuaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcbiAgICAgICAgcG9zaXRpb25TdHlsZSA9ICdmbG9hdGluZyc7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAgICdjYy10eXBlLScgKyBvcHRzLnR5cGUsIC8vIGFkZCB0aGUgY29tcGxpYW5jZSB0eXBlXG4gICAgICAgICdjYy10aGVtZS0nICsgb3B0cy50aGVtZSAvLyBhZGQgdGhlIHRoZW1lXG4gICAgICBdO1xuXG4gICAgICBpZiAob3B0cy5zdGF0aWMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKTtcbiAgICAgIH1cblxuICAgICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gd2Ugb25seSBhZGQgZXh0cmEgc3R5bGVzIGlmIGBwYWxldHRlYCBoYXMgYmVlbiBzZXQgdG8gYSB2YWxpZCB2YWx1ZVxuICAgICAgYXR0YWNoQ3VzdG9tUGFsZXR0ZS5jYWxsKHRoaXMsIHRoaXMub3B0aW9ucy5wYWxldHRlKTtcblxuICAgICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBvcHVwSW5uZXJNYXJrdXAoKSB7XG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB7fTtcbiAgICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIHJlbW92ZXMgbGluayBpZiBzaG93TGluayBpcyBmYWxzZVxuICAgICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICAgIG9wdHMuZWxlbWVudHMubGluayA9ICcnOyBcbiAgICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaCggcHJvcCA9PiB7XG4gICAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoXG4gICAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lICYmIHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgJiYgc3RyLmxlbmd0aCA/IHN0ciA6ICcnO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIHR5cGUgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGluZm8gaWYgaXQncyBub3RcbiAgICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdO1xuICAgICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvO1xuICAgICAgfVxuXG4gICAgICAvLyBidWlsZCB0aGUgY29tcGxpYW5jZSB0eXBlcyBmcm9tIHRoZSBhbHJlYWR5IGludGVycG9sYXRlZCBgZWxlbWVudHNgXG4gICAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoY29tcGxpYW5jZVR5cGUsIGZ1bmN0aW9uKFxuICAgICAgICBuYW1lXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFtuYW1lXTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcbiAgICAgIGxldCBsYXlvdXQgPSBvcHRzLmxheW91dHNbb3B0cy5sYXlvdXRdO1xuICAgICAgaWYgKCFsYXlvdXQpIHtcbiAgICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdXRpbC5pbnRlcnBvbGF0ZVN0cmluZyhsYXlvdXQsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZWRbbWF0Y2hdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kTWFya3VwKG1hcmt1cCkge1xuICAgICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgY29udCA9XG4gICAgICAgIG9wdHMuY29udGFpbmVyICYmIG9wdHMuY29udGFpbmVyLm5vZGVUeXBlID09PSAxXG4gICAgICAgICAgPyBvcHRzLmNvbnRhaW5lclxuICAgICAgICAgIDogZG9jdW1lbnQuYm9keTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cDtcblxuICAgICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF07XG5cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmUgcmVmIHRvIHRoZSBmdW5jdGlvbiBoYW5kbGUgc28gd2UgY2FuIHVuYmluZCBpdCBsYXRlclxuICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2MuY2F0ZWdvcnlbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnYWxsb3cnIDogJ2RlbnknXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgaWYgKCB0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICApIHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgYWNjb3JkaW9uIGluIHRoZSB0b29sdGlwXG4gICAgICAgKi9cbiAgICAgIC8qZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIpLmZvckVhY2goIGFjY29yZGlvbkxpbmsgPT4ge1xuICAgICAgICBhY2NvcmRpb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBhY2NvcmRpb25MaW5rLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCBcIm9wZW5cIiApXG4gICAgICAgIH0pXG4gICAgICAgIGFjY29yZGlvbkxpbmsuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtdG9vbHRpcFwiKS5mb3JFYWNoKCB0b29sVGlwID0+IHtcbiAgICAgICAgdG9vbFRpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgdG9vbFRpcC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICovXG5cbiAgICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcbiAgICAgICAgaWYgKCFjb250LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxuICAgICAgY29uc3QgYnRuID0gdXRpbC50cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0O1xuICAgICAgXG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2Mtc2F2ZScgKSl7XG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcbiAgICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgT2JqZWN0LmtleXMoY2Muc3RhdHVzKS5tYXAodXRpbC5lc2NhcGVSZWdFeHApLmpvaW4oJ3wnKSArICcpXFxcXGInKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtYXRjaCA9IChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHx8IGZhbHNlO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKG1hdGNoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWNsb3NlJyApKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1yZXZva2UnICkpIHtcbiAgICAgICAgdGhpcy5yZXZva2VDaG9pY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJIG1pZ2h0IGNoYW5nZSB0aGlzIGZ1bmN0aW9uIHRvIHVzZSBpbmxpbmUgc3R5bGVzLiBJIG9yaWdpbmFsbHkgY2hvc2UgYSBzdHlsZXNoZWV0IGJlY2F1c2UgSSBjb3VsZCBzZWxlY3QgbWFueSBlbGVtZW50cyB3aXRoIGFcbiAgICAvLyBzaW5nbGUgcnVsZSAoc29tZXRoaW5nIHRoYXQgaGFwcGVuZWQgYSBsb3QpLCB0aGUgYXBwcyBoYXMgY2hhbmdlZCBzbGlnaHRseSBub3cgdGhvdWdoLCBzbyBpbmxpbmUgc3R5bGVzIG1pZ2h0IGJlIG1vcmUgYXBwbGljYWJsZS5cbiAgICBmdW5jdGlvbiBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpO1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSAnY2MtY29sb3Itb3ZlcnJpZGUtJyArIGhhc2g7XG4gICAgICBjb25zdCBpc1ZhbGlkID0gdXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpO1xuXG4gICAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsO1xuXG4gICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBhZGRDdXN0b21TdHlsZShoYXNoLCBwYWxldHRlLCAnLicgKyBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDdXN0b21TdHlsZShoYXNoLCBwYWxldHRlLCBwcmVmaXgpIHtcbiAgICAgIC8vIG9ubHkgYWRkIHRoaXMgaWYgYSBzdHlsZSBsaWtlIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmIChjYy5jdXN0b21TdHlsZXNbaGFzaF0pIHtcbiAgICAgICAgLy8gY3VzdG9tIHN0eWxlIGFscmVhZHkgZXhpc3RzLCBzbyBpbmNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudFxuICAgICAgICArK2NjLmN1c3RvbVN0eWxlc1toYXNoXS5yZWZlcmVuY2VzO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbG9yU3R5bGVzID0ge307XG4gICAgICBjb25zdCBwb3B1cCA9IHBhbGV0dGUucG9wdXA7XG4gICAgICBjb25zdCBidXR0b24gPSBwYWxldHRlLmJ1dHRvbjtcbiAgICAgIGNvbnN0IGhpZ2hsaWdodCA9IHBhbGV0dGUuaGlnaGxpZ2h0O1xuXG4gICAgICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gICAgICBpZiAocG9wdXApIHtcbiAgICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dFxuICAgICAgICAgID8gcG9wdXAudGV4dFxuICAgICAgICAgIDogdXRpbC5nZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKTtcbiAgICAgICAgcG9wdXAubGluayA9IHBvcHVwLmxpbmsgPyBwb3B1cC5saW5rIDogcG9wdXAudGV4dDtcbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy13aW5kb3cnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdO1xuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXJldm9rZSddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICAgIF07XG4gICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6YWN0aXZlLCcgK1xuICAgICAgICAgICAgcHJlZml4ICtcbiAgICAgICAgICAgICcgLmNjLWxpbms6dmlzaXRlZCdcbiAgICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXTtcblxuICAgICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgICAgLy8gYXNzdW1lcyBidXR0b24uYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICBidXR0b24udGV4dCA9IGJ1dHRvbi50ZXh0XG4gICAgICAgICAgICA/IGJ1dHRvbi50ZXh0XG4gICAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QoYnV0dG9uLmJhY2tncm91bmQpO1xuICAgICAgICAgIGJ1dHRvbi5ib3JkZXIgPSBidXR0b24uYm9yZGVyID8gYnV0dG9uLmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10gPSBbXG4gICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBidXR0b24uYm9yZGVyLFxuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBidXR0b24uYmFja2dyb3VuZFxuICAgICAgICAgIF07XG5cbiAgICAgICAgICBpZiAoYnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgICAgICBwcmVmaXggKyAnIC5jYy1idG46aG92ZXIsICcgKyBwcmVmaXggKyAnIC5jYy1idG46Zm9jdXMnXG4gICAgICAgICAgICBdID0gW1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArXG4gICAgICAgICAgICAgICAgKGJ1dHRvbi5ob3ZlciB8fCBnZXRIb3ZlckNvbG91cihidXR0b24uYmFja2dyb3VuZCkpXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0LmJvcmRlciA9IGhpZ2hsaWdodC5ib3JkZXJcbiAgICAgICAgICAgICAgPyBoaWdobGlnaHQuYm9yZGVyXG4gICAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50JztcbiAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIGhpZ2hsaWdodC50ZXh0LFxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJvcmRlcixcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc2V0cyBoaWdobGlnaHQgdGV4dCBjb2xvciB0byBwb3B1cCB0ZXh0LiBiYWNrZ3JvdW5kIGFuZCBib3JkZXIgYXJlIHRyYW5zcGFyZW50IGJ5IGRlZmF1bHQuXG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0XG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB0aGlzIHdpbGwgYmUgaW50ZXJwcmV0dGVkIGFzIENTUy4gdGhlIGtleSBpcyB0aGUgc2VsZWN0b3IsIGFuZCBlYWNoIGFycmF5IGVsZW1lbnQgaXMgYSBydWxlXG4gICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICAgICAgLy8gY3VzdG9tIHN0eWxlIGRvZXNuJ3QgZXhpc3QsIHNvIHdlIGNyZWF0ZSBpdFxuICAgICAgY2MuY3VzdG9tU3R5bGVzW2hhc2hdID0ge1xuICAgICAgICByZWZlcmVuY2VzOiAxLFxuICAgICAgICBlbGVtZW50OiBzdHlsZS5zaGVldFxuICAgICAgfTtcblxuICAgICAgbGV0IHJ1bGVJbmRleCA9IC0xO1xuICAgICAgZm9yIChsZXQgcHJvcCBpbiBjb2xvclN0eWxlcykge1xuICAgICAgICBpZiAoY29sb3JTdHlsZXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKFxuICAgICAgICAgICAgcHJvcCArICd7JyArIGNvbG9yU3R5bGVzW3Byb3BdLmpvaW4oJzsnKSArICd9JyxcbiAgICAgICAgICAgICsrcnVsZUluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhvdmVyQ29sb3VyKGhleCkge1xuICAgICAgaGV4ID0gdXRpbC5ub3JtYWxpc2VIZXgoaGV4KTtcbiAgICAgIC8vIGZvciBibGFjayBidXR0b25zXG4gICAgICBpZiAoaGV4ID09ICcwMDAwMDAnKSB7XG4gICAgICAgIHJldHVybiAnIzIyMic7XG4gICAgICB9XG4gICAgICByZXR1cm4gdXRpbC5nZXRMdW1pbmFuY2UoaGV4KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDdXN0b21TdHlsZShwYWxldHRlKSB7XG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpO1xuICAgICAgICBjb25zdCBjdXN0b21TdHlsZSA9IGNjLmN1c3RvbVN0eWxlc1toYXNoXTtcbiAgICAgICAgaWYgKGN1c3RvbVN0eWxlICYmICEtLWN1c3RvbVN0eWxlLnJlZmVyZW5jZXMpIHtcbiAgICAgICAgICBjb25zdCBzdHlsZU5vZGUgPSBjdXN0b21TdHlsZS5lbGVtZW50Lm93bmVyTm9kZTtcbiAgICAgICAgICBpZiAoc3R5bGVOb2RlICYmIHN0eWxlTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBzdHlsZU5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZU5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYy5jdXN0b21TdHlsZXNbaGFzaF0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICAgIGNvbnN0IHNldFN0YXR1c2VzID0gdGhpcy5zZXRTdGF0dXNlcy5iaW5kKHRoaXMpO1xuICAgICAgY29uc3QgY2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICAgIGNvbnN0IGRlbGF5ID0gdGhpcy5vcHRpb25zLmRpc21pc3NPblRpbWVvdXQ7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgICBjbG9zZSh0cnVlKTtcbiAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxSYW5nZSA9IHRoaXMub3B0aW9ucy5kaXNtaXNzT25TY3JvbGw7XG4gICAgICBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcbiAgICAgICAgY29uc3Qgb25XaW5kb3dTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gTWF0aC5mbG9vcihzY3JvbGxSYW5nZSkpIHtcbiAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgICAgIGNsb3NlKHRydWUpO1xuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gb25XaW5kb3dTY3JvbGw7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uV2luZG93U2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2luZG93Q2xpY2sgPSB0aGlzLm9wdGlvbnMuZGlzbWlzc09uV2luZG93Q2xpY2s7XG4gICAgICBjb25zdCBpZ25vcmVkQ2xpY2tzID0gdGhpcy5vcHRpb25zLmlnbm9yZUNsaWNrc0Zyb207XG4gICAgICBpZiAod2luZG93Q2xpY2spIHtcbiAgICAgICAgY29uc3Qgb25XaW5kb3dDbGljayA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIGNvbnN0IHBhdGggPSBldnQuY29tcG9zZWRQYXRoID8gZXZ0LmNvbXBvc2VkUGF0aCgpIDogKGZ1bmN0aW9uICggYXJyLCBlbGVtZW50ICkge1xuICAgICAgICAgICAgd2hpbGUgKCBlbGVtZW50ICkge1xuICAgICAgICAgICAgICBhcnIucHVzaCggZWxlbWVudCApXG4gICAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJcbiAgICAgICAgICB9KShbXSxldnQudGFyZ2V0IClcbiAgICAgICAgICBpZiAoICFwYXRoICkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCBcIicucGF0aCcgJiAnLmNvbXBvc2VkUGF0aCcgZmFpbGVkIHRvIGdlbmVyYXRlIGFuIGV2ZW50IHBhdGguXCIgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICggIXBhdGguc29tZShmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZ25vcmVkQ2xpY2tzLnNvbWUoIGZ1bmN0aW9uICggaWdub3JlZENsaWNrICApe1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdCAmJiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggaWdub3JlZENsaWNrIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gKSApIHtcbiAgICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKVxuICAgICAgICAgICAgY2xvc2UodHJ1ZSlcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25XaW5kb3dDbGljayk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gb25XaW5kb3dDbGljaztcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGx5UmV2b2tlQnV0dG9uKCkge1xuICAgICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJykgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWU7XG4gICAgICAvLyBhbmltYXRlUmV2b2thYmxlIGZhbHNlIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgICAgaWYgKHV0aWwuaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnY2MtdGhlbWUtJyt0aGlzLm9wdGlvbnMudGhlbWUpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgY2xhc3Nlcy5qb2luKCcgJykpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cG9saWN5fX0nLCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kpO1xuXG4gICAgICAgIHRoaXMucmV2b2tlQnRuID0gYXBwZW5kTWFya3VwLmNhbGwodGhpcywgcmV2b2tlQnRuKTtcblxuICAgICAgICBjb25zdCBidG4gPSB0aGlzLnJldm9rZUJ0bjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB1dGlsLnRocm90dGxlKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgbWluWSA9IDIwO1xuICAgICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwO1xuXG4gICAgICAgICAgICBpZiAoICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXRvcCcgKSAmJiBldnQuY2xpZW50WSA8IG1pblkgKSB8fFxuICAgICAgICAgICAgICAgICAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1ib3R0b20nICkgJiYgZXZ0LmNsaWVudFkgPiBtYXhZICkgKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFjdGl2ZSAmJiAhYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZTtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIENvb2tpZVBvcHVwO1xuICB9KSgpO1xuXG4gIGNjLkxvY2F0aW9uID0gKGZ1bmN0aW9uKCkge1xuICAgIC8vIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgbG9jYXRpb24gc2VydmljZXMgd2UgaGF2ZSBhbHJlYWR5IHNldCB1cC5cbiAgICAvLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcbiAgICAvLyBXaGVuIHRoZSByZXNwb25zZSBuZWVkcyB0byBiZSBleGVjdXRlZCBieSB0aGUgYnJvd3NlciwgdGhlbiBgaXNTY3JpcHRgIG11c3QgYmUgc2V0IHRvIHRydWUsIG90aGVyd2lzZSBpdCB3b24ndCB3b3JrLlxuXG4gICAgLy8gV2hlbiB0aGUgc2VydmljZSB1c2VzIGEgc2NyaXB0LCB0aGUgY2hhbmNlcyBhcmUgdGhhdCB5b3UnbGwgaGF2ZSB0byB1c2UgdGhlIHNjcmlwdCB0byBtYWtlIGFkZGl0aW9uYWwgcmVxdWVzdHMuIEluIHRoZXNlXG4gICAgLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxuICAgIC8vIHdpdGggdGhlIGRhdGEgKG9yIEVycm9yKSwgYW5kIGBjb29raWVjb25zZW50LmxvY2F0ZWAgd2lsbCB0YWtlIGNhcmUgb2YgdGhlIHJlc3RcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIFRoZSBkZWZhdWx0IHRpbWVvdXQgaXMgNSBzZWNvbmRzLiBUaGlzIGlzIG1haW5seSBuZWVkZWQgdG8gY2F0Y2ggSlNPTlAgcmVxdWVzdHMgdGhhdCBlcnJvci5cbiAgICAgIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcbiAgICAgIC8vIGFwcCB3aWxsIHRha2UgYHRpbWVvdXRgIG1pbGxpc2Vjb25kcyB0byByZWFjdCB0byBhIEpTT05QIG5ldHdvcmsgZXJyb3IuXG4gICAgICB0aW1lb3V0OiA1MDAwLFxuXG4gICAgICAvLyB0aGUgb3JkZXIgdGhhdCBzZXJ2aWNlcyB3aWxsIGJlIGF0dGVtcHRlZCBpblxuICAgICAgc2VydmljZXM6IFtcbiAgICAgICAgJ2lwaW5mbydcblxuICAgICAgICAvKlxuXG4gICAgICAgIC8vICdpcGluZm9kYicgcmVxdWlyZXMgc29tZSBvcHRpb25zLCBzbyB3ZSBkZWZpbmUgaXQgdXNpbmcgYW4gb2JqZWN0XG4gICAgICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcblxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2lwaW5mb2RiJyxcbiAgICAgICAgICBpbnRlcnBvbGF0ZVVybDoge1xuICAgICAgICAgICAgLy8gb2J2aW91c2x5LCB0aGlzIGlzIGEgZmFrZSBrZXlcbiAgICAgICAgICAgIGFwaV9rZXk6ICd2T2dJMzc0OGRuSXl0SXJzSmN4Uzdxc0RmNmtiSmtFOWxONHlFRHJYQXFYY0tVTnZqalpQb3gzZWtYcW1NTWxkJ1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gYXMgd2VsbCBhcyBkZWZpbmluZyBhbiBvYmplY3QsIHlvdSBjYW4gZGVmaW5lIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIG9iamVjdFxuXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4ge25hbWU6ICdpcGluZm9kYid9O1xuICAgICAgICB9LFxuXG4gICAgICAgICovXG4gICAgICBdLFxuXG4gICAgICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcbiAgICAgICAgaXBpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6ICcvL2lwaW5mby5pbycsXG4gICAgICAgICAgICBoZWFkZXJzOiBbJ0FjY2VwdDogYXBwbGljYXRpb24vanNvbiddLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXG4gICAgICAgICAgICAgICAgICA/IHRvRXJyb3IoanNvbilcbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgICAgIGlwaW5mb2RiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uc3RhdHVzQ29kZSA9PSAnRVJST1InXG4gICAgICAgICAgICAgICAgICA/IHRvRXJyb3Ioe2Vycm9yOiBqc29uLnN0YXR1c01lc3NhZ2V9KVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5Q29kZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIG1heG1pbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIG1ha2UgYW4gYWRkaXRpb25hbCBBSkFYIGNhbGwuIFRoZXJlZm9yZSB3ZSBwcm92aWRlIGEgYGRvbmVgIGNhbGxiYWNrIHRoYXQgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICAgICAgdXJsOiAnLy9qcy5tYXhtaW5kLmNvbS9qcy9hcGlzL2dlb2lwMi92Mi4xL2dlb2lwMi5qcycsXG4gICAgICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgICAgICAvLyBpZiBldmVyeXRoaW5nIHdlbnQgb2theSB0aGVuIGBnZW9pcDJgIFdJTEwgYmUgZGVmaW5lZFxuICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcbiAgICAgICAgICAgICAgICBkb25lKFxuICAgICAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24obG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUoe1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGxvY2F0aW9uLmNvdW50cnkuaXNvX2NvZGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgICBkb25lKHRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cbiAgICAgICAgICAgICAgLy8gVGhlbiB3ZSBjYW4gJ2NvbXBsZXRlJyB0aGUgc2VydmljZSBieSBwYXNzaW5nIGRhdGEgb3IgYW4gZXJyb3IgdG8gdGhlIGBkb25lYCBjYWxsYmFjay5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIExvY2F0aW9uKG9wdGlvbnMpIHtcbiAgICAgIC8vIFNldCB1cCBvcHRpb25zXG4gICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICBpZiAodXRpbC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oIHt9LCB0aGlzLm9wdGlvbnMsIG9wdGlvbnMgKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMTsgLy8gdGhlIGluZGV4IChpbiBvcHRpb25zKSBvZiB0aGUgc2VydmljZSB3ZSdyZSBjdXJyZW50bHkgdXNpbmdcbiAgICB9XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0TmV4dFNlcnZpY2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBzZXJ2aWNlO1xuXG4gICAgICBkbyB7XG4gICAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleCk7XG4gICAgICB9IHdoaWxlIChcbiAgICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4IDwgdGhpcy5vcHRpb25zLnNlcnZpY2VzLmxlbmd0aCAmJlxuICAgICAgICAhc2VydmljZVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRTZXJ2aWNlQnlJZHggPSBmdW5jdGlvbihpZHgpIHtcbiAgICAgIC8vIFRoaXMgY2FuIGVpdGhlciBiZSB0aGUgbmFtZSBvZiBhIGRlZmF1bHQgbG9jYXRpb25TZXJ2aWNlLCBvciBhIGZ1bmN0aW9uLlxuICAgICAgY29uc3Qgc2VydmljZU9wdGlvbiA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1tpZHhdO1xuXG4gICAgICAvLyBJZiBpdCdzIGEgc3RyaW5nLCB1c2Ugb25lIG9mIHRoZSBsb2NhdGlvbiBzZXJ2aWNlcy5cbiAgICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKTtcbiAgICAgICAgcmV0dXJuIGR5bmFtaWNPcHRzLm5hbWUgPyBcbiAgICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAge30sXG4gICAgICAgICAgICBkeW5hbWljT3B0cyxcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbIGR5bmFtaWNPcHRzLm5hbWUgXSggZHluYW1pY09wdHMgKVxuICAgICAgICAgICkgOiBkeW5hbWljT3B0cztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBhc3N1bWUge25hbWU6ICdpcGluZm8nLCAuLi5vdGhlck9wdGlvbnN9XG4gICAgICAvLyBBbGxvd3MgdXNlciB0byBwYXNzIGluIEFQSSBrZXlzIGV0Yy5cbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qoc2VydmljZU9wdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbi5uYW1lXShcbiAgICAgICAgICBzZXJ2aWNlT3B0aW9uXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXG4gICAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUubG9jYXRlID0gZnVuY3Rpb24oY29tcGxldGUsIGVycm9yKSB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpO1xuXG4gICAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgICAgZXJyb3IobmV3IEVycm9yKCdObyBzZXJ2aWNlcyB0byBydW4nKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jYWxsYmFja0NvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvcjtcblxuICAgICAgdGhpcy5ydW5TZXJ2aWNlKHNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpO1xuICAgIH07XG5cbiAgICAvLyBQb3RlbnRpYWxseSBhZGRzIGEgY2FsbGJhY2sgdG8gYSB1cmwgZm9yIGpzb25wLlxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5zZXR1cFVybCA9IGZ1bmN0aW9uKHNlcnZpY2UpIHtcbiAgICAgIGNvbnN0IHNlcnZpY2VPcHRzID0gdGhpcy5nZXRDdXJyZW50U2VydmljZU9wdHMoKTtcbiAgICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xuICAgICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpO1xuICAgICAgICAgIHdpbmRvd1t0ZW1wTmFtZV0gPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW0gaW4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmwpIHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmxbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1blNlcnZpY2UgPSBmdW5jdGlvbihzZXJ2aWNlLCBjb21wbGV0ZSkge1xuICAgICAgLy8gYmFzaWMgY2hlY2sgdG8gZW5zdXJlIGl0IHJlc2VtYmxlcyBhIGBzZXJ2aWNlYFxuICAgICAgaWYgKCFzZXJ2aWNlIHx8ICFzZXJ2aWNlLnVybCB8fCAhc2VydmljZS5jYWxsYmFjaykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGNhbGwgZWl0aGVyIGBnZXRTY3JpcHRgIG9yIGBtYWtlQXN5bmNSZXF1ZXN0YCBkZXBlbmRpbmcgb24gdGhlIHR5cGUgb2YgcmVzb3VyY2VcbiAgICAgIGNvbnN0IHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0O1xuXG4gICAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxuICAgICAgcmVxdWVzdEZ1bmN0aW9uKFxuICAgICAgICB0aGlzLnNldHVwVXJsKHNlcnZpY2UpLFxuICAgICAgICB4aHIgPT4ge1xuICAgICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxuICAgICAgICAgIGxldCByZXNwb25zZVRleHQgPSB4aHIgPyB4aHIucmVzcG9uc2VUZXh0IDogJyc7XG5cbiAgICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMgYSBzY3JpcHQsIHRoZW4gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBydW4uXG4gICAgICAgICAgLy8gaWYgdGhlIHNjcmlwdCBpcyBKU09OUCwgdGhlbiBhIHRpbWUgZGVmaW5lZCBmdW5jdGlvbiBgY2FsbGJhY2tfe0RhdGUubm93fWAgaGFzIGFscmVhZHlcbiAgICAgICAgICAvLyBiZWVuIGNhbGxlZCAoYXMgdGhlIEpTT05QIGNhbGxiYWNrKS4gVGhpcyBjYWxsYmFjayBzZXRzIHRoZSBfX0pTT05QX0RBVEEgcHJvcGVydHlcbiAgICAgICAgICBpZiAoc2VydmljZS5fX0pTT05QX0RBVEEpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHNlcnZpY2UuX19KU09OUF9EQVRBO1xuICAgICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGNhbGwgdGhlIHNlcnZpY2UgY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2UgdGV4dCAoc28gaXQgY2FuIHBhcnNlIHRoZSByZXNwb25zZSlcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2VDYWxsYmFjay5jYWxsKHRoaXMsIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQpO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcbiAgICAgICAgc2VydmljZS5kYXRhLFxuICAgICAgICBzZXJ2aWNlLmhlYWRlcnNcbiAgICAgICk7XG5cbiAgICAgIC8vIGBzZXJ2aWNlLmRhdGFgIGFuZCBgc2VydmljZS5oZWFkZXJzYCBhcmUgb3B0aW9uYWwgKHRoZXkgb25seSBjb3VudCBpZiBgIXNlcnZpY2UuaXNTY3JpcHRgIGFueXdheSlcbiAgICB9O1xuXG4gICAgLy8gVGhlIHNlcnZpY2UgcmVxdWVzdCBoYXMgcnVuIChhbmQgcG9zc2libHkgaGFzIGEgYHJlc3BvbnNlVGV4dGApIFtubyBgcmVzcG9uc2VUZXh0YCBpZiBgaXNTY3JpcHRgXVxuICAgIC8vIFdlIG5lZWQgdG8gcnVuIGl0cyBjYWxsYmFjayB3aGljaCBkZXRlcm1pbmVzIGlmIGl0cyBzdWNjZXNzZnVsIG9yIG5vdFxuICAgIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5TZXJ2aWNlQ2FsbGJhY2sgPSBmdW5jdGlvbihcbiAgICAgIGNvbXBsZXRlLFxuICAgICAgc2VydmljZSxcbiAgICAgIHJlc3BvbnNlVGV4dFxuICAgICkge1xuICAgICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXG4gICAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcbiAgICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXG4gICAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIGFzeW5jUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gdGhlIGZ1bmN0aW9uIGBzZXJ2aWNlLmNhbGxiYWNrYCB3aWxsIGVpdGhlciBleHRyYWN0IGEgY291bnRyeSBjb2RlIGZyb20gYHJlc3BvbnNlVGV4dGAgYW5kIHJldHVybiBpdCAoaW4gYHJlc3VsdGApXG4gICAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XG4gICAgICBjb25zdCByZXN1bHQgPSBzZXJ2aWNlLmNhbGxiYWNrKHNlcnZpY2VSZXN1bHRIYW5kbGVyLCByZXNwb25zZVRleHQpO1xuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMub25TZXJ2aWNlUmVzdWx0LmNhbGwodGhpcywgY29tcGxldGUsIHJlc3VsdCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cbiAgICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5vblNlcnZpY2VSZXN1bHQgPSBmdW5jdGlvbihjb21wbGV0ZSwgcmVzdWx0KSB7XG4gICAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcbiAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcbiAgICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCByZXN1bHQsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBpZiBgZXJyYCBpcyBzZXQsIHRoZSBuZXh0IHNlcnZpY2UgaGFuZGxlciBpcyBjYWxsZWRcbiAgICAvLyBpZiBgZXJyYCBpcyBudWxsLCB0aGUgYG9uQ29tcGxldGVgIGhhbmRsZXIgaXMgY2FsbGVkIHdpdGggYGRhdGFgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1bk5leHRTZXJ2aWNlT25FcnJvciA9IGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICB0aGlzLmxvZ0Vycm9yKGVycik7XG5cbiAgICAgICAgY29uc3QgbmV4dFNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKCk7XG5cbiAgICAgICAgaWYgKG5leHRTZXJ2aWNlKSB7XG4gICAgICAgICAgdGhpcy5ydW5TZXJ2aWNlKG5leHRTZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcbiAgICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbCh0aGlzLCB0aGlzLmNhbGxiYWNrQ29tcGxldGUsIGRhdGEpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0Q3VycmVudFNlcnZpY2VPcHRzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XVxuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4ge25hbWU6IHZhbH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB2YWwoKVxuICAgICAgfWVsc2UgaWYgKHV0aWwuaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICAgIHJldHVybiB2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGNhbGxiYWNrIGFmdGVyIHJlc2V0dGluZyB0aGUgYGN1cnJlbnRTZXJ2aWNlSW5kZXhgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmNvbXBsZXRlU2VydmljZSA9IGZ1bmN0aW9uKGZuLCBkYXRhKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMTtcblxuICAgICAgZm4gJiYgZm4oZGF0YSk7XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5sb2dFcnJvciA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgY29uc3QgaWR4ID0gdGhpcy5jdXJyZW50U2VydmljZUluZGV4O1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KGlkeCk7XG5cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1RoZSBzZXJ2aWNlWycgK1xuICAgICAgICAgIGlkeCArXG4gICAgICAgICAgJ10gKCcgK1xuICAgICAgICAgIHNlcnZpY2UudXJsICtcbiAgICAgICAgICAnKSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JpcHQodXJsLCBjYWxsYmFjaywgdGltZW91dCkge1xuICAgICAgbGV0IHRpbWVvdXRJZHg7XG4gICAgICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgIHMudHlwZSA9ICd0ZXh0LycgKyAodXJsLnR5cGUgfHwgJ2phdmFzY3JpcHQnKTtcbiAgICAgIHMuc3JjID0gdXJsLnNyYyB8fCB1cmw7XG4gICAgICBzLmFzeW5jID0gZmFsc2U7XG5cbiAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgICAgICBjb25zdCBzdGF0ZSA9IHMucmVhZHlTdGF0ZTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkeCk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjay5kb25lICYmICghc3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzdGF0ZSkpKSB7XG4gICAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWU7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcblxuICAgICAgLy8gWW91IGNhbid0IGNhdGNoIEpTT05QIEVycm9ycywgYmVjYXVzZSBpdCdzIGhhbmRsZWQgYnkgdGhlIHNjcmlwdCB0YWdcbiAgICAgIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICAgICAgdGltZW91dElkeCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBc3luY1JlcXVlc3QoXG4gICAgICB1cmwsXG4gICAgICBvbkNvbXBsZXRlLFxuICAgICAgdGltZW91dCxcbiAgICAgIHBvc3REYXRhLFxuICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICApIHtcbiAgICAgIGNvbnN0IHhociA9IG5ldyAod2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5BY3RpdmVYT2JqZWN0KShcbiAgICAgICAgJ01TWE1MMi5YTUxIVFRQLjMuMCdcbiAgICAgICk7XG5cbiAgICAgIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSk7XG5cbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RIZWFkZXJzKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgIGNvbnN0IHNwbGl0ID0gcmVxdWVzdEhlYWRlcnNbaV0uc3BsaXQoJzonLCAyKTtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgICAgIHNwbGl0WzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgICAgIHNwbGl0WzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUoeGhyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHhoci5zZW5kKHBvc3REYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b0Vycm9yKG9iaikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignRXJyb3IgWycgKyAob2JqLmNvZGUgfHwgJ1VOS05PV04nKSArICddOiAnICsgb2JqLmVycm9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTG9jYXRpb247XG4gIH0pKCk7XG5cbiAgY2MuTGF3ID0gKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gICAgICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXG4gICAgICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgICAgIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBlbmZvcmNlIHNvbWUgdmVyc2lvbiBvZiBhIGNvb2tpZSBsYXdcbiAgICAgIGhhc0xhdzogW1xuICAgICAgICAnQVQnLFxuICAgICAgICAnQkUnLFxuICAgICAgICAnQkcnLFxuICAgICAgICAnSFInLFxuICAgICAgICAnQ1onLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRkknLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnRUwnLFxuICAgICAgICAnSFUnLFxuICAgICAgICAnSUUnLFxuICAgICAgICAnSVQnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTFUnLFxuICAgICAgICAnTVQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUEwnLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnU0snLFxuICAgICAgICAnRVMnLFxuICAgICAgICAnU0UnLFxuICAgICAgICAnR0InLFxuICAgICAgICAnVUsnLFxuICAgICAgICAnR1InLFxuICAgICAgICAnRVUnLFxuICAgICAgICAnUk8nXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gICAgICByZXZva2FibGU6IFtcbiAgICAgICAgJ0hSJyxcbiAgICAgICAgJ0NZJyxcbiAgICAgICAgJ0RLJyxcbiAgICAgICAgJ0VFJyxcbiAgICAgICAgJ0ZSJyxcbiAgICAgICAgJ0RFJyxcbiAgICAgICAgJ0xWJyxcbiAgICAgICAgJ0xUJyxcbiAgICAgICAgJ05MJyxcbiAgICAgICAgJ05PJyxcbiAgICAgICAgJ1BUJyxcbiAgICAgICAgJ0VTJ1xuICAgICAgXSxcblxuICAgICAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gICAgICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxuICAgICAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBMYXcob3B0aW9ucykge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgTGF3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gc2V0IG9wdGlvbnMgYmFjayB0byBkZWZhdWx0IG9wdGlvbnNcbiAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIC8vIG1lcmdlIGluIHVzZXIgb3B0aW9uc1xuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihjb3VudHJ5Q29kZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIHJldm9rYWJsZTogdGhpcy5vcHRpb25zLnJldm9rYWJsZS5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcbiAgICAgIH07XG4gICAgfTtcblxuICAgIExhdy5wcm90b3R5cGUuYXBwbHlMYXcgPSBmdW5jdGlvbihvcHRpb25zLCBjb3VudHJ5Q29kZSkge1xuICAgICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKTtcblxuICAgICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xuICAgICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uTm9Db29raWVMYXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uTm9Db29raWVMYXcoY291bnRyeUNvZGUsIGNvdW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcbiAgICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XG4gICAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcbiAgICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xuICAgICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cbiAgICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExhdztcbiAgfSkoKTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuICAvLyBZb3UgY2FuIHN0cmluZyB0b2dldGhlciB0aGVzZSB0aHJlZSBtb2R1bGVzIHlvdXJzZWxmIGhvd2V2ZXIgeW91IHdhbnQsIGJ5IHdyaXRpbmcgYSBuZXcgZnVuY3Rpb24uXG4gIGNjLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zLCBjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBjb25zdCBsYXcgPSBuZXcgY2MuTGF3KG9wdGlvbnMubGF3KTtcblxuICAgIGlmICghY29tcGxldGUpIGNvbXBsZXRlID0gZnVuY3Rpb24oKSB7fTtcbiAgICBpZiAoIWVycm9yKSBlcnJvciA9IGZ1bmN0aW9uKCkge307XG5cbiAgICBjb25zdCBhbnN3ZXJzID0gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLm1hcCggY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgYW5zd2VyID0gdXRpbC5nZXRDb29raWUoJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzXycrY2F0ZWdvcnkpXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnldOiBhbnN3ZXIgfSA6IHVuZGVmaW5lZFxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpO1xuXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWRcbiAgICBpZiAoYW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb21wbGV0ZShhbnN3ZXJzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYy5nZXRDb3VudHJ5Q29kZShcbiAgICAgIG9wdGlvbnMsXG4gICAgICBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0aGUgbGF3IG9yIGxvY2F0aW9uIG9wdGlvbnMgYW55bW9yZVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5sYXc7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxvY2F0aW9uO1xuXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSkge1xuICAgICAgICAgIG9wdGlvbnMgPSBsYXcuYXBwbHlMYXcob3B0aW9ucywgcmVzdWx0LmNvZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcGxldGUobmV3IGNjLlBvcHVwKG9wdGlvbnMpKTtcbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0aGUgbGF3IG9yIGxvY2F0aW9uIG9wdGlvbnMgYW55bW9yZVxuICAgICAgICBkZWxldGUgb3B0aW9ucy5sYXc7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmxvY2F0aW9uO1xuXG4gICAgICAgIGVycm9yKGVyciwgbmV3IGNjLlBvcHVwKG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIC8vIFRoaXMgZnVuY3Rpb24gdHJpZXMgdG8gZmluZCB5b3VyIGN1cnJlbnQgbG9jYXRpb24uIEl0IGVpdGhlciBncmFicyBpdCBmcm9tIGEgaGFyZGNvZGVkIG9wdGlvbiBpblxuICAvLyBgb3B0aW9ucy5sYXcuY291bnRyeUNvZGVgLCBvciBhdHRlbXB0cyB0byBtYWtlIGEgbG9jYXRpb24gc2VydmljZSByZXF1ZXN0LiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHNcbiAgLy8gb3B0aW9ucyAod2hpY2ggY2FuIGNvbmZpZ3VyZSB0aGUgYGxhd2AgYW5kIGBsb2NhdGlvbmAgbW9kdWxlcykgYW5kIGZpcmVzIGEgY2FsbGJhY2sgd2l0aCB3aGljaFxuICAvLyBwYXNzZXMgYW4gb2JqZWN0IGB7Y29kZTogY291bnRyeUNvZGV9YCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgKHdoaWNoIGNhbiBoYXZlIHVuZGVmaW5lZCBwcm9wZXJ0aWVzKVxuICBjYy5nZXRDb3VudHJ5Q29kZSA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGlmIChvcHRpb25zLmxhdyAmJiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZSkge1xuICAgICAgY29tcGxldGUoe1xuICAgICAgICBjb2RlOiBvcHRpb25zLmxhdy5jb3VudHJ5Q29kZVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBsb2NhdG9yID0gbmV3IGNjLkxvY2F0aW9uKG9wdGlvbnMubG9jYXRpb24pO1xuICAgICAgbG9jYXRvci5sb2NhdGUoZnVuY3Rpb24oc2VydmljZVJlc3VsdCkge1xuICAgICAgICBjb21wbGV0ZShzZXJ2aWNlUmVzdWx0IHx8IHt9KTtcbiAgICAgIH0sIGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29tcGxldGUoe30pO1xuICB9O1xuXG4gIC8vIGV4cG9ydCB1dGlscyAobm8gcG9pbnQgaW4gaGlkaW5nIHRoZW0sIHNvIHdlIG1heSBhcyB3ZWxsIGV4cG9zZSB0aGVtKVxuICBjYy51dGlscyA9IHV0aWw7XG5cbiAgLy8gcHJldmVudCB0aGlzIGNvZGUgZnJvbSBiZWluZyBydW4gdHdpY2VcbiAgY2MuaGFzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gIHdpbmRvdy5jb29raWVjb25zZW50ID0gY2M7XG59KSh3aW5kb3cuY29va2llY29uc2VudCB8fCB7fSk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9