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
exports.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  font-family: Helvetica, Calibri, Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalises the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* CATEGORIES BOX */\n.cc-categories {\n  display: flex; }\n  @media screen and (max-width: 943px) {\n    .cc-categories {\n      flex-direction: column;\n      width: 100%;\n      margin-right: 8px; } }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 6px;\n    position: relative; }\n  @media screen and (max-width: 943px) {\n    .cc-categories .cc-category {\n      margin: 4px 0; }\n      .cc-categories .cc-category .cc-btn:not(.cc-info) {\n        width: calc( 100% - 16px);\n        min-width: 140px; } }\n  .cc-categories .cc-btn {\n    margin: 0; }\n  .cc-categories .cc-info {\n    padding: 4px;\n    font-variant: all-small-caps; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px; }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion-title {\n      cursor: pointer;\n      color: #56cbdb; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion {\n      display: none;\n      height: 0; }\n    .cc-categories .cc-tooltip .cc-cookie-accordion.open {\n      display: block;\n      height: auto; }\n\n@media screen and (max-width: 415px) {\n  .cc-save {\n    margin: 16px 0; } }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner,\n  .cc-window.cc-floating,\n  .cc-window.cc-right,\n  .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column; }\n  .cc-window.cc-banner .cc-compliance {\n    flex: 1 1 auto; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window.cc-banner {\n    align-items: unset; }\n  .cc-window.cc-banner .cc-message {\n    margin-right: 0; } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    background: white;\n    border-right: none;\n    border-left: 2px solid #56cbdb;\n    border-top: 2px solid #56cbdb;\n    border-bottom: 2px solid #56cbdb;\n    color: #2a94a1;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn:hover, .cc-theme-classic .cc-category .cc-btn:focus {\n      background: #ddedf0; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0;\n      border-left: none;\n      border-right: 2px solid #56cbdb;\n      border-top: 2px solid #56cbdb;\n      border-bottom: 2px solid #56cbdb; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n    .cc-theme-classic .cc-category .cc-btn.cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px;\n    background: white;\n    border: 2px solid #56cbdb; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      content: \"\";\n      border-right: 2px solid #56cbdb;\n      border-bottom: 2px solid #56cbdb;\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      background: white; }\n    .cc-theme-classic .cc-category .cc-tooltip .cc-cookie-accordion-title {\n      color: #56cbdb; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n", ""]);


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
          i,
          chr,
          len;
      if (str.length === 0) return hash;

      for (i = 0, len = str.length; i < len; ++i) {
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
      var newColour = (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
      return '#' + newColour;
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
      //     var instance = cookieconsent.factory(options);
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


      if (arrayContainsMatches(this.options.blacklistPage, location.pathname)) {
        this.options.enabled = false;
      }

      if (arrayContainsMatches(this.options.whitelistPage, location.pathname)) {
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
          var height = this.element.clientHeight;
          this.element.parentNode.style.maxHeight = height + 'px';
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
    }

    function getPositionClasses() {
      var positions = this.options.position.split('-'); // top, bottom, left, right

      var classes = []; // top, left, right, bottom

      positions.forEach(function (cur) {
        classes.push('cc-' + cur);
      });
      return classes;
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

      var didAttach = attachCustomPalette.call(this, this.options.palette); // if we override the palette, add the class that enables this

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

    function arrayContainsMatches(array, search) {
      for (var i = 0, l = array.length; i < l; ++i) {
        var str = array[i]; // if regex matches or string is equal, return true

        if (str instanceof RegExp && str.test(search) || typeof str == 'string' && str.length && str === search) {
          return true;
        }
      }

      return false;
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
        var onWindowScroll = function onWindowScroll(evt) {
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
          var wait = false;
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
        ipinfodb: function ipinfodb(options) {
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

        if (dynamicOpts.name) {
          dynamicOpts = Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts));
        }

        return dynamicOpts;
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
      var self = this; // basic check to ensure it resembles a `service`

      if (!service || !service.url || !service.callback) {
        return;
      } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


      var requestFunction = service.isScript ? getScript : makeAsyncRequest;
      var url = this.setupUrl(service); // both functions have similar signatures so we can pass the same arguments to both

      requestFunction(url, function (xhr) {
        // if `!xhr`, then `getScript` function was used, so there is no response text
        var responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
        // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
        // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

        if (service.__JSONP_DATA) {
          responseText = service.__JSONP_DATA;
          delete service.__JSONP_DATA;
        } // call the service callback with the response text (so it can parse the response)


        self.runServiceCallback.call(self, complete, service, responseText);
      }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
    }; // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
    // We need to run its callback which determines if its successful or not
    // `complete` is called on success or failure


    Location.prototype.runServiceCallback = function (complete, service, responseText) {
      var self = this; // this is the function that is called if the service uses the async callback in its handler method

      var serviceResultHandler = function serviceResultHandler(asyncResult) {
        // if `result` is a valid value, then this function shouldn't really run
        // even if it is called by `service.callback`
        if (!result) {
          self.onServiceResult.call(self, complete, asyncResult);
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
      }

      if (typeof val == 'function') {
        return val();
      }

      if (util.isPlainObject(val)) {
        return val;
      }

      return {};
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
      var timeoutIdx,
          s = document.createElement('script');
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
      var opts = this.options;
      return {
        hasLaw: opts.hasLaw.indexOf(countryCode) >= 0,
        revokable: opts.revokable.indexOf(countryCode) >= 0,
        explicitAction: opts.explicitAction.indexOf(countryCode) >= 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb29raWVjb25zZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzA1M2MiXSwibmFtZXMiOlsiY2MiLCJoYXNJbml0aWFsaXplZCIsInV0aWwiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNhbGxiYWNrIiwicmVwbGFjZSIsImFyZ3VtZW50cyIsImdldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwicGFydHMiLCJzcGxpdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvcCIsInNoaWZ0Iiwic2V0Q29va2llIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJleGRhdGUiLCJEYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwidGhyb3R0bGUiLCJsaW1pdCIsIndhaXQiLCJhcHBseSIsInNldFRpbWVvdXQiLCJoYXNoIiwiaSIsImNociIsImxlbiIsImNoYXJDb2RlQXQiLCJub3JtYWxpc2VIZXgiLCJoZXgiLCJzdWJzdHIiLCJnZXRDb250cmFzdCIsInIiLCJwYXJzZUludCIsImciLCJiIiwieWlxIiwiZ2V0THVtaW5hbmNlIiwibnVtIiwiYW10IiwiUiIsIkIiLCJHIiwibmV3Q29sb3VyIiwidG9TdHJpbmciLCJzbGljZSIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzUGxhaW5PYmplY3QiLCJvYmoiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsInRyYXZlcnNlRE9NUGF0aCIsImVsZW0iLCJjbGFzc05hbWUiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdGF0dXMiLCJkZW55IiwiYWxsb3ciLCJkaXNtaXNzIiwiY2F0ZWdvcnkiLCJ1bmNhdGVnb3JpemVkIiwiZXNzZW50aWFsIiwicGVyc29uYWxpemF0aW9uIiwiYW5hbHl0aWNzIiwibWFya2V0aW5nIiwiaXNWYWxpZFN0YXR1cyIsImtleXMiLCJpbmRleE9mIiwidHJhbnNpdGlvbkVuZCIsImVsIiwiY3JlYXRlRWxlbWVudCIsInRyYW5zIiwidCIsIk9UIiwibXNUIiwiTW96VCIsIldlYmtpdFQiLCJwcmVmaXgiLCJoYXNPd25Qcm9wZXJ0eSIsInN0eWxlIiwiaGFzVHJhbnNpdGlvbiIsImN1c3RvbVN0eWxlcyIsIlBvcHVwIiwiZGVmYXVsdE9wdGlvbnMiLCJlbmFibGVkIiwiY29udGFpbmVyIiwib25Qb3B1cE9wZW4iLCJvblBvcHVwQ2xvc2UiLCJvbkluaXRpYWxpemUiLCJzdGF0dXNlcyIsIm9uU3RhdHVzQ2hhbmdlIiwiY29va2llTmFtZSIsImNob3NlbkJlZm9yZSIsIm9uUmV2b2tlQ2hvaWNlIiwib25Ob0Nvb2tpZUxhdyIsImNvdW50cnlDb2RlIiwiY291bnRyeSIsImNvbnRlbnQiLCJoZWFkZXIiLCJtZXNzYWdlIiwibGluayIsImhyZWYiLCJjbG9zZSIsInRhcmdldCIsInBvbGljeSIsImVsZW1lbnRzIiwibWVzc2FnZWxpbmsiLCJjYXRlZ29yaWVzIiwic2F2ZSIsIndpbmRvdyIsIm1vZGFsIiwicmV2b2tlQnRuIiwiY29tcGxpYW5jZSIsImluZm8iLCJ0eXBlIiwibGF5b3V0cyIsImJhc2ljIiwibGF5b3V0IiwicG9zaXRpb24iLCJ0aGVtZSIsInBhbGV0dGUiLCJyZXZva2FibGUiLCJhbmltYXRlUmV2b2thYmxlIiwic2hvd0xpbmsiLCJkaXNtaXNzT25TY3JvbGwiLCJkaXNtaXNzT25UaW1lb3V0IiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJpZ25vcmVDbGlja3NGcm9tIiwiYXV0b09wZW4iLCJhdXRvQXR0YWNoIiwibW9iaWxlRm9yY2VGbG9hdCIsIndoaXRlbGlzdFBhZ2UiLCJibGFja2xpc3RQYWdlIiwib3ZlcnJpZGVIVE1MIiwiQ29va2llUG9wdXAiLCJpbml0aWFsaXplIiwicHJvdG90eXBlIiwib3B0aW9ucyIsImRlc3Ryb3kiLCJhc3NpZ24iLCJjaGVja0NhbGxiYWNrSG9va3MiLCJjYWxsIiwiYXJyYXlDb250YWluc01hdGNoZXMiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwib25CdXR0b25DbGljayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNtaXNzVGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uV2luZG93U2Nyb2xsIiwib25XaW5kb3dDbGljayIsIm9uTW91c2VNb3ZlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVDdXN0b21TdHlsZSIsIm9wZW4iLCJpc09wZW4iLCJmYWRlSW4iLCJ0b2dnbGVSZXZva2VCdXR0b24iLCJzaG93UmV2b2tlIiwiZmFkZU91dCIsImFmdGVyVHJhbnNpdGlvbiIsImFmdGVyRmFkZU91dCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsIm1heEhlaWdodCIsImZhZGVJblRpbWVvdXQiLCJvcGVuaW5nVGltZW91dCIsImFmdGVyRmFkZUluIiwiYmluZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93IiwicmV2b2tlQ2hvaWNlIiwicHJldmVudE9wZW4iLCJjbGVhclN0YXR1c2VzIiwiaGFzQW5zd2VyZWQiLCJnZXRTdGF0dXNlcyIsInNvbWUiLCJoYXNDb25zZW50ZWQiLCJtYXAiLCJzZXRTdGF0dXNlcyIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwiZm9yRWFjaCIsImNhdGVnb3J5U3RhdHVzIiwiaW5kZXgiLCJyZW1vdmUiLCJjb21wbGV0ZSIsImNvb2tpZUVuYWJsZWQiLCJDb29raWVzT0siLCJzdGF0dXNlc1ZhbHVlcyIsIm1hdGNoZXMiLCJoYXNNYXRjaGVzIiwiZmlsdGVyIiwibWF0Y2giLCJnZXRQb3NpdGlvbkNsYXNzZXMiLCJwb3NpdGlvbnMiLCJjbGFzc2VzIiwiY3VyIiwicHVzaCIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiZGlkQXR0YWNoIiwiYXR0YWNoQ3VzdG9tUGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJwcm9wIiwiY29tcGxpYW5jZVR5cGUiLCJtYXJrdXAiLCJkaXYiLCJjb250Iiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImNoZWNrZWQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNob3dJbmZvIiwiYWN0aXZlRWxlbWVudCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYnRuIiwiUmVnRXhwIiwiZXNjYXBlUmVnRXhwIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlIiwicmVmZXJlbmNlcyIsImNvbG9yU3R5bGVzIiwicG9wdXAiLCJidXR0b24iLCJoaWdobGlnaHQiLCJ0ZXh0IiwiYmFja2dyb3VuZCIsImJvcmRlciIsInBhZGRpbmciLCJob3ZlciIsImdldEhvdmVyQ29sb3VyIiwiaGVhZCIsInNoZWV0IiwicnVsZUluZGV4IiwiaW5zZXJ0UnVsZSIsImN1c3RvbVN0eWxlIiwic3R5bGVOb2RlIiwib3duZXJOb2RlIiwiYXJyYXkiLCJzZWFyY2giLCJsIiwiZGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxSYW5nZSIsImV2dCIsInBhZ2VZT2Zmc2V0IiwicGFzc2l2ZSIsIndpbmRvd0NsaWNrIiwiaWdub3JlZENsaWNrcyIsImNvbXBvc2VkUGF0aCIsImFyciIsImNvbnNvbGUiLCJ3YXJuIiwiaWdub3JlZENsaWNrIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJMb2NhdGlvbiIsInRpbWVvdXQiLCJzZXJ2aWNlcyIsInNlcnZpY2VEZWZpbml0aW9ucyIsImlwaW5mbyIsInVybCIsImhlYWRlcnMiLCJkb25lIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJlcnJvciIsInRvRXJyb3IiLCJjb2RlIiwiZXJyIiwiaXBpbmZvZGIiLCJpc1NjcmlwdCIsInN0YXR1c0NvZGUiLCJzdGF0dXNNZXNzYWdlIiwibWF4bWluZCIsImdlb2lwMiIsIkVycm9yIiwiaXNvX2NvZGUiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4IiwiaWR4Iiwic2VydmljZU9wdGlvbiIsImR5bmFtaWNPcHRzIiwibG9jYXRlIiwiY2FsbGJhY2tDb21wbGV0ZSIsImNhbGxiYWNrRXJyb3IiLCJydW5TZXJ2aWNlIiwicnVuTmV4dFNlcnZpY2VPbkVycm9yIiwic2V0dXBVcmwiLCJzZXJ2aWNlT3B0cyIsImdldEN1cnJlbnRTZXJ2aWNlT3B0cyIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiaW50ZXJwb2xhdGVVcmwiLCJzZWxmIiwicmVxdWVzdEZ1bmN0aW9uIiwiZ2V0U2NyaXB0IiwibWFrZUFzeW5jUmVxdWVzdCIsInhociIsInJlc3BvbnNlVGV4dCIsInJ1blNlcnZpY2VDYWxsYmFjayIsImRhdGEiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0IiwicmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsInZhbCIsImZuIiwidGltZW91dElkeCIsInMiLCJzcmMiLCJhc3luYyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIm9ubG9hZCIsInN0YXRlIiwicmVhZHlTdGF0ZSIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsInNlbmQiLCJMYXciLCJyZWdpb25hbExhdyIsImhhc0xhdyIsImV4cGxpY2l0QWN0aW9uIiwiZ2V0IiwiYXBwbHlMYXciLCJsYXciLCJhbnN3ZXJzIiwiYW5zd2VyIiwiZ2V0Q291bnRyeUNvZGUiLCJsb2NhdG9yIiwic2VydmljZVJlc3VsdCIsInV0aWxzIiwiY29va2llY29uc2VudCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQs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LEVBRUcvRSxLQUZIO0FBR0E7QUFDRDs7QUFDRG5HLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDRCxHQWZELENBcnhEYSxDQXN5RGI7OztBQUNBdk4sSUFBRSxDQUFDMFksS0FBSCxHQUFXeFksSUFBWCxDQXZ5RGEsQ0F5eURiOztBQUNBRixJQUFFLENBQUNDLGNBQUgsR0FBb0IsSUFBcEI7QUFFQTRILFFBQU0sQ0FBQzhRLGFBQVAsR0FBdUIzWSxFQUF2QjtBQUNELENBN3lEQSxDQTZ5REU2SCxNQUFNLENBQUM4USxhQUFQLElBQXdCLEVBN3lEMUIsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNIQSxjQUFjLG1CQUFPLENBQUMsa05BQXNHOztBQUU1SCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6ImNvb2tpZWNvbnNlbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29va2llY29uc2VudC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7IH1cXG5cXG4uY2Mtd2luZG93LmNjLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLyogb25seSBhbmltYXRlIGlmaGFzIGNsYXNzICdjYy1hbmltYXRlJyAqL1xcbi5jYy1hbmltYXRlLmNjLXJldm9rZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1ncm93ZXIge1xcbiAgLyogSW5pdGlhbGx5IHdlIGRvbid0IHdhbnQgYW55IGhlaWdodCwgYW5kIHdlIHdhbnQgdGhlIGNvbnRlbnRzIHRvIGJlIGhpZGRlbiAqL1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBTZXQgb3VyIHRyYW5zaXRpb25zIHVwLiAqL1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxczsgfVxcblxcbi8qIHRoZSBwb3B1cCB3aW5kb3cgKi9cXG4uY2Mtd2luZG93LFxcbi5jYy1yZXZva2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBleGNsdWRlIHBhZGRpbmcgd2hlbiBkZWFsaW5nIHdpdGggd2lkdGggKi9cXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIENhbGlicmksIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLyogYnkgc2V0dGluZyB0aGUgYmFzZSBmb250IGhlcmUsIHdlIGNhbiBzaXplIHRoZSByZXN0IG9mIHRoZSBwb3B1cCB1c2luZyBDU1MgYGVtYCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLyogdGhlIGZvbGxvd2luZyBhcmUgcmFuZG9tIHVuanVzdGlmaWVkIHN0eWxlcyAtIGp1c3QgYmVjYXVzZSAtIHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkICovXFxuICB6LWluZGV4OiA5OTk5OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbi8qIDIgYmFzaWMgdHlwZXMgb2Ygd2luZG93IC0gZmxvYXRpbmcgLyBiYW5uZXIgKi9cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG4gIC8qIDFlbSA9PSAxNnB4IHRoZXJlZm9yZSAyNGVtID09IDM4NHB4ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgcGFkZGluZzogMWVtIDEuOGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyogY2xpY2thYmxlIHRoaW5ncyAqL1xcbi5jYy1idG4sXFxuLmNjLWxpbmssXFxuLmNjLWNsb3NlLFxcbi5jYy1yZXZva2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNjLWxpbmsge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1saW5rOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2MtbGluazphY3RpdmUsXFxuLmNjLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5pdGlhbDsgfVxcblxcbi5jYy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmhvdmVyLFxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVlbTtcXG4gIHJpZ2h0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBvcGFjaXR5OiAwLjk7XFxuICAvKiBzZWVpbmcgYXMgdGhpcyBjb250YWlucyB0ZXh0IGFuZCBub3QgYW4gaW1hZ2UsIHRoZSBlbGVtZW50IHRhbGxlciB0aGFuIGl0IGlzIHdpZGUgKGJlY2F1c2UgaXQgaXMgdGV4dCkgKi9cXG4gIC8qICAtIHdlIHdhbnQgaXQgdG8gYmUgYSBzcXVhcmUsIGJlY2F1c2UgaXQncyBhY3RpbmcgYXMgYW4gaWNvbiAqL1xcbiAgLyogIC0gc2V0dGluZyB0aGUgbGluZSBoZWlnaHQgbm9ybWFsaXNlcyB0aGUgaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogMC43NTsgfVxcblxcbi5jYy1jbG9zZTpob3ZlcixcXG4uY2MtY2xvc2U6Zm9jdXMge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qIFRoaXMgZmlsZSBzaG91bGQgY29udGFpbiBzdHlsZXMgdGhhdCBtb2RpZmllcyB0aGUgcG9wdXAgbGF5b3V0LiAqL1xcbi8qIEJ5IGxheW91dCwgd2UgbWVhbiB0aGUgcGh5c2ljYWwgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIHRoZSBwb3B1cCB3aW5kb3csIGFuZCB0aGUgbWFyZ2luIC8gcGFkZGluZyBhcm91bmQgdGhvc2UgZWxlbWVudHMuICovXFxuLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtbGVmdCB7XFxuICBsZWZ0OiAzZW07XFxuICByaWdodDogdW5zZXQ7IH1cXG5cXG4uY2MtcmV2b2tlLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAzZW07XFxuICBsZWZ0OiB1bnNldDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZMT0FUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogdGhlc2UgY2xhc3NlcyBwb3NpdGlvbiB0aGUgZmxvYXRpbmcgZWxlbWVudCAqL1xcbi5jYy10b3Age1xcbiAgdG9wOiAxZW07IH1cXG5cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07IH1cXG5cXG4uY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDFlbTsgfVxcblxcbi5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAxZW07IH1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSB7XFxuICBmbGV4OiAxIDAgYXV0bzsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRvcCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2MtYmFubmVyLmNjLWJvdHRvbSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi8qIENPTVBMSUFOQ0UgQk9YICovXFxuLmNjLWNvbXBsaWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2UgPiAuY2MtYnRuIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG5cXG4vKiBDQVRFR09SSUVTIEJPWCAqL1xcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk0M3B4KSB7XFxuICAgIC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDZweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NDNweCkge1xcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7XFxuICAgICAgICBtaW4td2lkdGg6IDE0MHB4OyB9IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1pbmZvIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXZhcmlhbnQ6IGFsbC1zbWFsbC1jYXBzOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE5MHB4O1xcbiAgICBib3R0b206IDQ2cHg7XFxuICAgIHBhZGRpbmc6IDhweDsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGUge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBjb2xvcjogIzU2Y2JkYjsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCAuY2MtY29va2llLWFjY29yZGlvbiB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBoZWlnaHQ6IDA7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAgLmNjLWNvb2tpZS1hY2NvcmRpb24ub3BlbiB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcXG4gIC5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiAxNnB4IDA7IH0gfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfSB9XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuY2Mtd2luZG93LmNjLXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyLFxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyxcXG4gIC5jYy13aW5kb3cuY2MtcmlnaHQsXFxuICAuY2Mtd2luZG93LmNjLWxlZnQge1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtY29tcGxpYW5jZSB7XFxuICAgIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAuY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICAgIGFsaWduLWl0ZW1zOiB1bnNldDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICM1NmNiZGI7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzU2Y2JkYjtcXG4gICAgY29sb3I6ICMyYTk0YTE7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG46aG92ZXIsIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZGRlZGYwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB0b3A6IC0xcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7IH1cXG4gICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgIGxlZnQ6IDZweDtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSArIC5jYy1idG4tY2hlY2tib3g6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXFwxRjVGNVxcXCI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIC5jYy1idG4tY2hlY2tib3g6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogLTRweDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjUpOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM1NmNiZGI7XFxuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM1NmNiZGI7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NmNiZGI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG46bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NmNiZGI7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTZjYmRiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcCAuY2MtY29va2llLWFjY29yZGlvbi10aXRsZSB7XFxuICAgICAgY29sb3I6ICM1NmNiZGI7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdHlwZS1pbmZvLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4vKiBFZGdlbGVzcyAqL1xcbi5jYy10aGVtZS1lZGdlbGVzcy5jYy13aW5kb3cge1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW46IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWVtOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtbWVzc2FnZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuIShmdW5jdGlvbihjYykge1xuICAvLyBzdG9wIGZyb20gcnVubmluZyBhZ2FpbiwgaWYgYWNjaWRlbnRseSBpbmNsdWRlZCBtb3JlIHRoYW4gb25jZS5cbiAgaWYgKGNjLmhhc0luaXRpYWxpemVkKSByZXR1cm47XG5cbiAgY29uc3QgdXRpbCA9IHtcbiAgICBcbiAgICBpbnRlcnBvbGF0ZVN0cmluZzogZnVuY3Rpb24oc3RyLCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGFyZ3VtZW50c1sxXSkgfHwgJydcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRDb29raWU6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gJzsgJyArIGRvY3VtZW50LmNvb2tpZVxuICAgICAgY29uc3QgcGFydHMgPSB2YWx1ZS5zcGxpdCgnOyAnICsgbmFtZSArICc9JylcbiAgICAgIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDogcGFydHNcbiAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgLnNwbGl0KCc7JylcbiAgICAgICAgICAgIC5zaGlmdCgpXG4gICAgfSxcblxuICAgIHNldENvb2tpZTogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKSB7XG4gICAgICBjb25zdCBleGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICBleGRhdGUuc2V0SG91cnMoZXhkYXRlLmdldEhvdXJzKCkgKyAoKHR5cGVvZiBleHBpcnlEYXlzICE9PSBcIm51bWJlclwiICA/IDM2NSA6IGV4cGlyeURheXMgKSAqIDI0KSlcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAnO2V4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc7cGF0aD0nICsgKHBhdGggfHwgJy8nKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICggc2VjdXJlID8gJztzZWN1cmUnIDogJycgKVxuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcbiAgICB0aHJvdHRsZTogZnVuY3Rpb24oY2FsbGJhY2ssIGxpbWl0KSB7XG4gICAgICB2YXIgd2FpdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXdhaXQpIHtcbiAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHdhaXQgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgICAgfSwgbGltaXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXG4gICAgaGFzaDogZnVuY3Rpb24oc3RyKSB7XG4gICAgICB2YXIgaGFzaCA9IDAsXG4gICAgICAgIGksXG4gICAgICAgIGNocixcbiAgICAgICAgbGVuO1xuICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKGhhc2ggPDwgNSkgLSBoYXNoICsgY2hyO1xuICAgICAgICBoYXNoIHw9IDA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaGFzaDtcbiAgICB9LFxuXG4gICAgbm9ybWFsaXNlSGV4OiBmdW5jdGlvbihoZXgpIHtcbiAgICAgIGlmIChoZXhbMF0gPT0gJyMnKSB7XG4gICAgICAgIGhleCA9IGhleC5zdWJzdHIoMSk7XG4gICAgICB9XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PSAzKSB7XG4gICAgICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBoZXg7XG4gICAgfSxcblxuICAgIC8vIHVzZWQgdG8gZ2V0IHRleHQgY29sb3JzIGlmIG5vdCBzZXRcbiAgICBnZXRDb250cmFzdDogZnVuY3Rpb24oaGV4KSB7XG4gICAgICBoZXggPSB0aGlzLm5vcm1hbGlzZUhleChoZXgpO1xuICAgICAgdmFyIHIgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgICB2YXIgZyA9IHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KTtcbiAgICAgIHZhciBiID0gcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpO1xuICAgICAgdmFyIHlpcSA9IChyICogMjk5ICsgZyAqIDU4NyArIGIgKiAxMTQpIC8gMTAwMDtcbiAgICAgIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnO1xuICAgIH0sXG5cbiAgICAvLyB1c2VkIHRvIGNoYW5nZSBjb2xvciBvbiBoaWdobGlnaHRcbiAgICBnZXRMdW1pbmFuY2U6IGZ1bmN0aW9uKGhleCkge1xuICAgICAgdmFyIG51bSA9IHBhcnNlSW50KHRoaXMubm9ybWFsaXNlSGV4KGhleCksIDE2KSxcbiAgICAgICAgYW10ID0gMzgsXG4gICAgICAgIFIgPSAobnVtID4+IDE2KSArIGFtdCxcbiAgICAgICAgQiA9ICgobnVtID4+IDgpICYgMHgwMGZmKSArIGFtdCxcbiAgICAgICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXQ7XG4gICAgICB2YXIgbmV3Q29sb3VyID0gKFxuICAgICAgICAweDEwMDAwMDAgK1xuICAgICAgICAoUiA8IDI1NSA/IChSIDwgMSA/IDAgOiBSKSA6IDI1NSkgKiAweDEwMDAwICtcbiAgICAgICAgKEIgPCAyNTUgPyAoQiA8IDEgPyAwIDogQikgOiAyNTUpICogMHgxMDAgK1xuICAgICAgICAoRyA8IDI1NSA/IChHIDwgMSA/IDAgOiBHKSA6IDI1NSlcbiAgICAgIClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gJyMnICsgbmV3Q29sb3VyO1xuICAgIH0sXG5cbiAgICBpc01vYmlsZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgICApO1xuICAgIH0sXG5cbiAgICBpc1BsYWluT2JqZWN0OiBmdW5jdGlvbihvYmopIHtcbiAgICAgIC8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0XG4gICAgICApO1xuICAgIH0sXG5cbiAgICB0cmF2ZXJzZURPTVBhdGg6IGZ1bmN0aW9uKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgICAgaWYgKCFlbGVtIHx8ICFlbGVtLnBhcmVudE5vZGUpIHJldHVybiBudWxsO1xuICAgICAgaWYgKGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHJldHVybiBlbGVtO1xuXG4gICAgICByZXR1cm4gdGhpcy50cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpO1xuICAgIH1cbiAgfTtcblxuICAvLyB2YWxpZCBjb29raWUgdmFsdWVzXG4gIGNjLnN0YXR1cyA9IHtcbiAgICBkZW55ICAgOiAnZGVueScsXG4gICAgYWxsb3cgIDogJ2FsbG93JyxcbiAgICBkaXNtaXNzOiAnZGlzbWlzcydcbiAgfTtcbiAgY2MuY2F0ZWdvcnkgPSB7XG4gICAgdW5jYXRlZ29yaXplZCAgOiAnZGlzbWlzcycsXG4gICAgZXNzZW50aWFsICAgICAgOiAnYWxsb3cnLFxuICAgIHBlcnNvbmFsaXphdGlvbjogJ2Rpc21pc3MnLFxuICAgIGFuYWx5dGljcyAgICAgIDogJ2Rpc21pc3MnLFxuICAgIG1hcmtldGluZyAgICAgIDogJ2Rpc21pc3MnXG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0YXR1cyBpcyBpbiB0aGUgY29uc3RhbnRzIGxpc3RcbiAgICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICAgKiBAcmV0dXJuIHsgYm9vbGVhbiB9IC0gaWYgc3RhdHVzIGlzIHZhbGlkXG4gICAqL1xuICBjb25zdCBpc1ZhbGlkU3RhdHVzID0gZnVuY3Rpb24gKHN0YXR1cykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjYy5zdGF0dXMpLmluZGV4T2Yoc3RhdHVzKSA+PSAwXG4gIH1cblxuICAvLyBkZXRlY3RzIHRoZSBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgbmFtZVxuICBjYy50cmFuc2l0aW9uRW5kID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciB0cmFucyA9IHtcbiAgICAgIHQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIE9UOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICAgbXNUOiAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgIE1velQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIFdlYmtpdFQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBwcmVmaXggaW4gdHJhbnMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdHJhbnMuaGFzT3duUHJvcGVydHkocHJlZml4KSAmJlxuICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zW3ByZWZpeF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSkoKTtcblxuICBjYy5oYXNUcmFuc2l0aW9uID0gISFjYy50cmFuc2l0aW9uRW5kO1xuXG4gIC8vIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gdGhlIGN1c3RvbSA8c3R5bGU+IHRhZ3NcbiAgY2MuY3VzdG9tU3R5bGVzID0ge307XG5cbiAgY2MuUG9wdXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gaWYgZmFsc2UsIHRoaXMgcHJldmVudHMgdGhlIHBvcHVwIGZyb20gc2hvd2luZyAodXNlZnVsIGZvciBnaXZpbmcgdG8gY29udHJvbCB0byBhbm90aGVyIHBpZWNlIG9mIGNvZGUpXG4gICAgICBlbmFibGVkOiB0cnVlLFxuXG4gICAgICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXG4gICAgICBjb250YWluZXI6IG51bGwsXG5cbiAgICAgIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcbiAgICAgIGNvb2tpZToge1xuICAgICAgICAvLyBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoaXMgY29va2llIC0geW91IGNhbiBpZ25vcmUgdGhpc1xuICAgICAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cbiAgICAgICAgcGF0aDogJy8nLFxuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRvbWFpbiB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBvbiB0aGlzIGRvbWFpbi5cbiAgICAgICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xuICAgICAgICBkb21haW46ICcnLFxuXG4gICAgICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxuICAgICAgICBleHBpcnlEYXlzOiAzNjUsXG5cbiAgICAgICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cbiAgICAgICAgc2VjdXJlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLy8gdGhlc2UgY2FsbGJhY2sgaG9va3MgYXJlIGNhbGxlZCBhdCBjZXJ0YWluIHBvaW50cyBpbiB0aGUgcHJvZ3JhbSBleGVjdXRpb25cbiAgICAgIG9uUG9wdXBPcGVuOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Qb3B1cENsb3NlOiBmdW5jdGlvbigpIHt9LFxuICAgICAgb25Jbml0aWFsaXplOiBmdW5jdGlvbihzdGF0dXNlcykge30sXG4gICAgICBvblN0YXR1c0NoYW5nZTogZnVuY3Rpb24oY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUpIHt9LFxuICAgICAgb25SZXZva2VDaG9pY2U6IGZ1bmN0aW9uKCkge30sXG4gICAgICBvbk5vQ29va2llTGF3OiBmdW5jdGlvbihjb3VudHJ5Q29kZSwgY291bnRyeSkge30sXG5cbiAgICAgIC8vIGVhY2ggaXRlbSBkZWZpbmVzIHRoZSBpbm5lciB0ZXh0IGZvciB0aGUgZWxlbWVudCB0aGF0IGl0IHJlZmVyZW5jZXNcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgaGVhZGVyOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuICAgICAgICBkaXNtaXNzOiAnR290IGl0IScsXG4gICAgICAgIGFsbG93OiAnQWxsb3cgY29va2llcycsXG4gICAgICAgIGRlbnk6ICdEZWNsaW5lJyxcbiAgICAgICAgbGluazogJ0xlYXJuIG1vcmUnLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxuICAgICAgICBjbG9zZTogJyYjeDI3NGM7JyxcbiAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgcG9saWN5OiAnQ29va2llIFBvbGljeSdcbiAgICAgIH0sXG5cbiAgICAgIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxuICAgICAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cbiAgICAgIC8vXG4gICAgICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxuICAgICAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcDsnLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19PC9zcGFuPicsXG4gICAgICAgIG1lc3NhZ2VsaW5rOlxuICAgICAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgICAgICBkaXNtaXNzOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYT4nLFxuICAgICAgICBhbGxvdzpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImFsbG93IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiAgY2xhc3M9XCJjYy1idG4gY2MtYWxsb3dcIj57e2FsbG93fX08L2E+JyxcbiAgICAgICAgZGVueTpcbiAgICAgICAgICAnPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRlbnlcIj57e2Rlbnl9fTwvYT4nLFxuICAgICAgICBsaW5rOlxuICAgICAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxuICAgICAgICBjbG9zZTpcbiAgICAgICAgICAnPHNwYW4gYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWNsb3NlXCI+e3tjbG9zZX19PC9zcGFuPicsXG4gICAgICAgIGNhdGVnb3JpZXM6IGAgXG4gICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidW5jYXRlZ29yaXplZFwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5VbmNhdGVnb3JpemVkPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIxXCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHRoYXQgZG9uJ3QgZml0IGFueSBvdGhlciBjYXRlZ29yeS48L3A+XG4gICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5VbmNhdGVnb3JpemVkIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVzc2VudGlhbFwiIGNoZWNrZWQgZGlzYWJsZWQvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkVzc2VudGlhbDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiRXNzZW50aWFsIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIzXCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBlc3NlbnRpYWwgYXBwbGljYXRpb24gb3Igd2Vic2l0ZSBvcHBlcmF0aW9uIGNvb2tpZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiRXNzZW50aWFsIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5Fc3NlbnRpYWwgQ29va2llczwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiNFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGVyc29uYWxpemF0aW9uXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPlBlcnNvbmFsaXphdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiUGVyc29uYWxpemF0aW9uIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI1XCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHRoZSBhcHBsaWNhdGlvbiB0byBhIHNwZWNpZmljIHVzZXIuPC9wPlxuICAgICAgICAgICAgICAgIDwhLS08YSBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb24tdGl0bGVcIiBhcmlhLWxhYmVsPVwiUGVyc29uYWxpemF0aW9uIENvb2tpZXMgTGlzdFwiIHJvbGU9XCJidXR0b25cIj5QZXJzb25hbGl6YXRpb24gQ29va2llczwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uXCI+LS1BLS08L2JyPi0tQi0tPC91bD4tLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiNlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiYW5hbHl0aWNzXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkFuYWx5dGljczwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiQW5hbHl0aWNzIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI3XCI+XjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBhbmFseWl6ZSBkYXRhLjwvcD5cbiAgICAgICAgICAgICAgICA8IS0tPGEgY2xhc3M9XCJjYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBDb29raWVzIExpc3RcIiByb2xlPVwiYnV0dG9uXCI+QW5hbHl0aWNzIENvb2tpZXM8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvblwiPi0tQS0tPC9icj4tLUItLTwvdWw+LS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjhcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtldGluZ1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5NYXJrZXRpbmc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIk1hcmtldGluZyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiOVwiPl48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB5b3VyIGludGVybmV0IHNob3BwaW5nICYgYWR2ZXJ0aXNlbWVudCBleHBlcmllbmNlcy48L3A+XG4gICAgICAgICAgICAgICAgPCEtLTxhIGNsYXNzPVwiY2MtY29va2llLWFjY29yZGlvbi10aXRsZVwiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgQ29va2llcyBMaXN0XCIgcm9sZT1cImJ1dHRvblwiPk1hcmtldGluZyBDb29raWVzPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNjLWNvb2tpZS1hY2NvcmRpb25cIj4tLUEtLTwvYnI+LS1CLS08L3VsPi0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgYCxcbiAgICAgICAgc2F2ZTogYFxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2Mtc2F2ZVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgYFxuICAgICAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xuICAgICAgfSxcblxuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVycyB7e2NsYXNzZXN9fSBhbmQge3tjaGlsZHJlbn19IGJvdGggZ2V0IHJlcGxhY2VkIGR1cmluZyBpbml0aWFsaXNhdGlvbjpcbiAgICAgIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcbiAgICAgIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXG4gICAgICB3aW5kb3c6XG4gICAgICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcbiAgICAgIFxuICAgICAgbW9kYWw6ICcnLFxuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBodG1sIGZvciB0aGUgcmV2b2tlIGJ1dHRvbi4gVGhpcyBvbmx5IHNob3dzIHVwIGFmdGVyIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB0aGVpciBsZXZlbCBvZiBjb25zZW50XG4gICAgICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXG4gICAgICByZXZva2VCdG46ICc8ZGl2IGNsYXNzPVwiY2MtcmV2b2tlIHt7Y2xhc3Nlc319XCI+e3twb2xpY3l9fTwvZGl2PicsXG5cbiAgICAgIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxuICAgICAgY29tcGxpYW5jZToge1xuICAgICAgICBpbmZvOiAnPGRpdiBjbGFzcz1cImNjLWNvbXBsaWFuY2VcIj57e2Rpc21pc3N9fTwvZGl2PicsXG4gICAgICAgICdvcHQtaW4nOlxuICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICAgICAnb3B0LW91dCc6XG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nXG4gICAgICB9LFxuXG4gICAgICAvLyBzZWxlY3QgeW91ciB0eXBlIG9mIHBvcHVwIGhlcmVcbiAgICAgIHR5cGU6ICdpbmZvJywgLy8gcmVmZXJzIHRvIGBjb21wbGlhbmNlYCAoaW4gb3RoZXIgd29yZHMsIHRoZSBidXR0b25zIHRoYXQgYXJlIGRpc3BsYXllZClcblxuICAgICAgLy8gZGVmaW5lIGxheW91dCBsYXlvdXRzIGhlcmVcbiAgICAgIGxheW91dHM6IHtcbiAgICAgICAgLy8gdGhlICdibG9jaycgbGF5b3V0IHRlbmQgdG8gYmUgZm9yIHNxdWFyZSBmbG9hdGluZyBwb3B1cHNcbiAgICAgICAgYmFzaWMgICAgICAgICA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fScsXG4gICAgICAgICdiYXNpYy1jbG9zZScgOiAne3ttZXNzYWdlbGlua319e3tjb21wbGlhbmNlfX17e2Nsb3NlfX0nLFxuICAgICAgICAnYmFzaWMtaGVhZGVyJzogJ3t7aGVhZGVyfX17e21lc3NhZ2V9fXt7bGlua319e3tjb21wbGlhbmNlfX0nLFxuICAgICAgICBjYXRlZ29yaWVzICAgIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y2F0ZWdvcmllc319e3tzYXZlfX0nXG4gICAgICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xuICAgICAgICAvLydteS1jb29sLWxheW91dCc6ICc8ZGl2IGNsYXNzPVwibXktc3BlY2lhbC1sYXlvdXRcIj57e21lc3NhZ2V9fXt7Y29tcGxpYW5jZX19PC9kaXY+e3tjbG9zZX19JyxcbiAgICAgIH0sXG5cbiAgICAgIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXG4gICAgICBsYXlvdXQ6ICdiYXNpYycsXG5cbiAgICAgIC8vIHRoaXMgcmVmZXJzIHRvIHRoZSBwb3B1cCB3aW5kb3dzIHBvc2l0aW9uLiB3ZSBjdXJyZW50bHkgc3VwcG9ydDpcbiAgICAgIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXG4gICAgICAvLyAgLSBmbG9hdGluZyBwb3NpdGlvbnM6IHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHRcbiAgICAgIC8vXG4gICAgICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJywgLy8gZGVmYXVsdCBwb3NpdGlvbiBpcyAnYm90dG9tJ1xuXG4gICAgICAvLyBBdmFpbGFibGUgc3R5bGVzXG4gICAgICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXG4gICAgICAvLyAgICAtZWRnZWxlc3NcbiAgICAgIC8vICAgIC1jbGFzc2ljXG4gICAgICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cbiAgICAgIC8vIE5vdGU6IHN0eWxlIFwid2lyZVwiIGlzIHVzZWQgZm9yIHRoZSBjb25maWd1cmF0b3IsIGJ1dCBoYXMgbm8gQ1NTIHN0eWxlcyBvZiBpdHMgb3duLCBvbmx5IHBhbGV0dGUgaXMgdXNlZC5cbiAgICAgIHRoZW1lOiAnYmxvY2snLFxuXG4gICAgICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcbiAgICAgIC8vIE5vdGU6IGJ5IGRlZmF1bHQsIHdlIGFuaW1hdGUgdGhlIGhlaWdodCBvZiB0aGUgcG9wdXAgZnJvbSAwIHRvIGZ1bGwgc2l6ZVxuICAgICAgc3RhdGljOiBmYWxzZSxcblxuICAgICAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXG4gICAgICAvLyBpZGVhbGx5LCBhbnkgY3VzdG9tIGNvbG91cnMvdGhlbWVzIHNob3VsZCBiZSBjcmVhdGVkIGluIGEgc2VwYXJhdGUgc3R5bGUgc2hlZXQsIGFzIHRoaXMgaXMgbW9yZSBlZmZpY2llbnQuXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxuICAgICAgLy8gICAgIGJ1dHRvbjoge2JhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnI2Y4ZTcxYyd9LFxuICAgICAgLy8gICAgIGhpZ2hsaWdodDoge2JhY2tncm91bmQ6ICcjZjhlNzFjJywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjMDAwMDAwJ30sXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIGBoaWdobGlnaHRgIGlzIG9wdGlvbmFsIGFuZCBleHRlbmRzIGBidXR0b25gLiBpZiBpdCBleGlzdHMsIGl0IHdpbGwgYXBwbHkgdG8gdGhlIGZpcnN0IGJ1dHRvblxuICAgICAgLy8gb25seSBiYWNrZ3JvdW5kIG5lZWRzIHRvIGJlIGRlZmluZWQgZm9yIGV2ZXJ5IGVsZW1lbnQuIGlmIG5vdCBzZXQsIG90aGVyIGNvbG9ycyBjYW4gYmUgY2FsY3VsYXRlZCBmcm9tIGl0XG4gICAgICBwYWxldHRlOiBudWxsLFxuXG4gICAgICAvLyBTb21lIGNvdW50cmllcyBSRVFVSVJFIHRoYXQgYSB1c2VyIGNhbiBjaGFuZ2UgdGhlaXIgbWluZC4gWW91IGNhbiBjb25maWd1cmUgdGhpcyB5b3Vyc2VsZi5cbiAgICAgIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGF3YCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcbiAgICAgIHJldm9rYWJsZTogZmFsc2UsXG5cbiAgICAgIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxuICAgICAgYW5pbWF0ZVJldm9rYWJsZTogdHJ1ZSxcblxuICAgICAgLy8gdXNlZCB0byBkaXNhYmxlIGxpbmsgb24gZXhpc3RpbmcgbGF5b3V0c1xuICAgICAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXG4gICAgICBzaG93TGluazogdHJ1ZSxcblxuICAgICAgLy8gc2V0IHZhbHVlIGFzIHNjcm9sbCByYW5nZSB0byBlbmFibGVcbiAgICAgIGRpc21pc3NPblNjcm9sbDogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBhdXRvZGlzbWlzcyBhZnRlciBzZXQgdGltZVxuICAgICAgZGlzbWlzc09uVGltZW91dDogZmFsc2UsXG5cbiAgICAgIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcblxuICAgICAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxuICAgICAgLy8gc2hvdWxkIGJlIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIChub3QgQ1NTIHNlbGVjdG9ycylcbiAgICAgIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0biddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxuXG4gICAgICAvLyBUaGUgYXBwbGljYXRpb24gYXV0b21hdGljYWxseSBkZWNpZGUgd2hldGhlciB0aGUgcG9wdXAgc2hvdWxkIG9wZW4uXG4gICAgICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcbiAgICAgIGF1dG9PcGVuOiB0cnVlLFxuXG4gICAgICAvLyBCeSBkZWZhdWx0IHRoZSBjcmVhdGVkIEhUTUwgaXMgYXV0b21hdGljYWxseSBhcHBlbmRlZCB0byB0aGUgY29udGFpbmVyICh3aGljaCBkZWZhdWx0cyB0byA8Ym9keT4pLiBZb3UgY2FuIHByZXZlbnQgdGhpcyBiZWhhdmlvdXJcbiAgICAgIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcbiAgICAgIC8vXG4gICAgICAvLyAgICAgdmFyIGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpO1xuICAgICAgLy8gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5zdGFuY2UuZWxlbWVudCk7XG4gICAgICAvL1xuICAgICAgYXV0b0F0dGFjaDogdHJ1ZSxcblx0ICBcblx0ICAvLyBzZXQgdmFsdWUgaWYgZmxvYXRpbmcgbGF5b3V0IHNob3VsZCBiZSBmb3JjZWQgZm9yIG1vYmlsZSBkZXZpY2VzXG5cdCAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAgICAgLy8gc2ltcGxlIHdoaXRlbGlzdC9ibGFja2xpc3QgZm9yIHBhZ2VzLiBzcGVjaWZ5IHBhZ2UgYnk6XG4gICAgICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gICAgICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICAgICAgd2hpdGVsaXN0UGFnZTogW10sXG4gICAgICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAgICAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAgICAgLy8gQmUgc3VyZSB0byB1c2UgdGhlIGNsYXNzZXMgYGNjLWJ0bmAgYW5kIGBjYy1hbGxvd2AsIGBjYy1kZW55YCBvciBgY2MtZGlzbWlzc2AuIFRoZXkgZW5hYmxlIHRoZSBhcHAgdG8gcmVnaXN0ZXIgY2xpY2tcbiAgICAgIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICAgICAgb3ZlcnJpZGVIVE1MOiBudWxsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvb2tpZVBvcHVwKCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpOyAvLyBhbHJlYWR5IHJlbmRlcmVkXG4gICAgICB9XG5cbiAgICAgIC8vIHNldCBvcHRpb25zIGJhY2sgdG8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgZGVmYXVsdE9wdGlvbnMgKVxuXG4gICAgICAvLyBtZXJnZSBpbiB1c2VyIG9wdGlvbnNcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbigge30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyApXG4gICAgICB9XG5cbiAgICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxuICAgICAgaWYgKGNoZWNrQ2FsbGJhY2tIb29rcy5jYWxsKHRoaXMpKSB7XG4gICAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgICBpZiAoYXJyYXlDb250YWluc01hdGNoZXModGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UsIGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGFycmF5Q29udGFpbnNNYXRjaGVzKHRoaXMub3B0aW9ucy53aGl0ZWxpc3RQYWdlLCBsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aGUgZnVsbCBtYXJrdXAgZWl0aGVyIGNvbnRhaW5zIHRoZSB3cmFwcGVyIG9yIGl0IGRvZXMgbm90IChmb3IgbXVsdGlwbGUgaW5zdGFuY2VzKVxuICAgICAgdmFyIGNvb2tpZVBvcHVwID0gdGhpcy5vcHRpb25zLndpbmRvd1xuICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBnZXRQb3B1cENsYXNzZXMuY2FsbCh0aGlzKS5qb2luKCcgJykpXG4gICAgICAgIC5yZXBsYWNlKCd7e2NoaWxkcmVufX0nLCBnZXRQb3B1cElubmVyTWFya3VwLmNhbGwodGhpcykpO1xuXG4gICAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxuICAgICAgdmFyIGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MO1xuICAgICAgaWYgKHR5cGVvZiBjdXN0b21IVE1MID09ICdzdHJpbmcnICYmIGN1c3RvbUhUTUwubGVuZ3RoKSB7XG4gICAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTDtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgc3RhdGljLCB3ZSBuZWVkIHRvIGdyb3cgdGhlIGVsZW1lbnQgZnJvbSAwIGhlaWdodCBzbyBpdCBkb2Vzbid0IGp1bXAgdGhlIHBhZ2VcbiAgICAgIC8vIGNvbnRlbnQuIHdlIHdyYXAgYW4gZWxlbWVudCBhcm91bmQgaXQgd2hpY2ggd2lsbCBtYXNrIHRoZSBoaWRkZW4gY29udGVudFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgLy8gYGdyb3dlcmAgaXMgYSB3cmFwcGVyIGRpdiB3aXRoIGEgaGlkZGVuIG92ZXJmbG93IHdob3NlIGhlaWdodCBpcyBhbmltYXRlZFxuICAgICAgICB2YXIgd3JhcHBlciA9IGFwcGVuZE1hcmt1cC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4nICsgY29va2llUG9wdXAgKyAnPC9kaXY+J1xuICAgICAgICApO1xuXG4gICAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnOyAvLyBzZXQgaXQgdG8gdmlzaWJsZSAoYmVjYXVzZSBhcHBlbmRNYXJrdXAgaGlkZXMgaXQpXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZDsgLy8gZ2V0IHRoZSBgZWxlbWVudGAgcmVmZXJlbmNlIGZyb20gdGhlIHdyYXBwZXJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGFwcGVuZE1hcmt1cC5jYWxsKHRoaXMsIGNvb2tpZVBvcHVwKTtcbiAgICAgIH1cblxuICAgICAgYXBwbHlBdXRvRGlzbWlzcy5jYWxsKHRoaXMpO1xuXG4gICAgICBhcHBseVJldm9rZUJ1dHRvbi5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICAgIHRoaXMuYXV0b09wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLm9uQnV0dG9uQ2xpY2sgJiYgdGhpcy5lbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljayk7XG4gICAgICAgIHRoaXMub25CdXR0b25DbGljayA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRpc21pc3NUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRpc21pc3NUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93U2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9uV2luZG93Q2xpY2spIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKTtcbiAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub25Nb3VzZU1vdmUpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcblxuICAgICAgaWYgKHRoaXMucmV2b2tlQnRuICYmIHRoaXMucmV2b2tlQnRuLnBhcmVudE5vZGUpIHtcbiAgICAgICAgdGhpcy5yZXZva2VCdG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnJldm9rZUJ0bik7XG4gICAgICB9XG4gICAgICB0aGlzLnJldm9rZUJ0biA9IG51bGw7XG5cbiAgICAgIHJlbW92ZUN1c3RvbVN0eWxlKHRoaXMub3B0aW9ucy5wYWxldHRlKTtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICBpZiAoY2MuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICAgIHRoaXMuZmFkZUluKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wdGlvbnMub25Qb3B1cE9wZW4uY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKHNob3dSZXZva2UpIHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICAgIGlmIChjYy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgdGhpcy5mYWRlT3V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcHRpb25zLm9uUG9wdXBDbG9zZS5jYWxsKHRoaXMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmZhZGVJbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGVsID0gdGhpcy5lbGVtZW50O1xuXG4gICAgICBpZiAoIWNjLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm47XG5cbiAgICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXG4gICAgICAvLyAndHJhbnNpdGlvbmVuZCcgaXNuJ3QgYWxsIHRoYXQgcmVsaWFibGUsIHNvLCBpZiB3ZSB0cnkgYW5kIGZhZGVJbiBiZWZvcmUgJ3RyYW5zaXRpb25lbmQnIGhhc1xuICAgICAgLy8gaGFzIGEgY2hhbmNlIHRvIHJ1biwgdGhlbiB3ZSBydW4gaXQgb3Vyc2VsdmVzXG4gICAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcbiAgICAgICAgYWZ0ZXJGYWRlT3V0LmNhbGwodGhpcywgZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZhZGVJblRpbWVvdXQgPSAyMDsgLy8gKG1zKSBETyBOT1QgTUFLRSBUSElTIFZBTFVFIFNNQUxMRVIuIFNlZSBiZWxvd1xuXG4gICAgICAgIC8vIEFsdGhvdWdoIG1vc3QgYnJvd3NlcnMgY2FuIGhhbmRsZSB2YWx1ZXMgbGVzcyB0aGFuIDIwbXMsIGl0IHNob3VsZCByZW1haW4gYWJvdmUgdGhpcyB2YWx1ZS5cbiAgICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgICAgLy8gSWYgdGhlIGNsYXNzIGlzIHJlbXZvZWQgYmVmb3JlIGEgcmVkcmF3IGNvdWxkIGhhcHBlbiwgdGhlbiB0aGUgZmFkZUluIGVmZmVjdCBXSUxMIE5PVCB3b3JrLCBhbmRcbiAgICAgICAgLy8gdGhlIHBvcHVwIHdpbGwgYXBwZWFyIGZyb20gbm90aGluZy4gVGhlcmVmb3JlIHdlIE1VU1QgYWxsb3cgZW5vdWdoIHRpbWUgZm9yIHRoZSBicm93c2VyIHRvIGRvXG4gICAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgIGFmdGVyRmFkZUluLmJpbmQodGhpcywgZWwpLFxuICAgICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmZhZGVPdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbCA9IHRoaXMuZWxlbWVudDtcblxuICAgICAgaWYgKCFjYy5oYXNUcmFuc2l0aW9uIHx8ICFlbCkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuaW5nVGltZW91dCk7XG4gICAgICAgIGFmdGVyRmFkZUluLmJpbmQodGhpcywgZWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gYWZ0ZXJGYWRlT3V0LmJpbmQodGhpcywgZWwpO1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGNjLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKTtcblxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5lbGVtZW50ICYmXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICcnICYmXG4gICAgICAgIChjYy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS50b2dnbGVSZXZva2VCdXR0b24gPSBmdW5jdGlvbihzaG93KSB7XG4gICAgICBpZiAodGhpcy5yZXZva2VCdG4pIHRoaXMucmV2b2tlQnRuLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gJycgOiAnbm9uZSc7XG4gICAgfTtcblxuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5yZXZva2VDaG9pY2UgPSBmdW5jdGlvbihwcmV2ZW50T3Blbikge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKCk7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5vblJldm9rZUNob2ljZS5jYWxsKHRoaXMpO1xuXG4gICAgICBpZiAoIXByZXZlbnRPcGVuKSB7XG4gICAgICAgIHRoaXMuYXV0b09wZW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXG4gICAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5oYXNBbnN3ZXJlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG8gYWxsIG9mIHRoZSBjYXRlZ29yaWVzXG4gICAgICogQHJldHVybiB7IGFycmF5PGJvb2xlYW4+IH0gLSB0cnVlIGlmIGNvbnNlbnQgaGFzIGJlZW4gZ2l2ZW5cbiAgICAgKi9cbiAgICBDb29raWVQb3B1cC5wcm90b3R5cGUuaGFzQ29uc2VudGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLm1hcCggc3RhdHVzID0+IHN0YXR1cyA9PT0gY2Muc3RhdHVzLmFsbG93IHx8IHN0YXR1cyA9PT0gY2Muc3RhdHVzLmRpc21pc3MgKVxuICAgIH07XG5cbiAgICAvLyBvcGVucyB0aGUgcG9wdXAgaWYgbm8gYW5zd2VyIGhhcyBiZWVuIGdpdmVuXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLmF1dG9PcGVuID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgY29uc3QgaGFzQW5zd2VyZWQgPSB0aGlzLmhhc0Fuc3dlcmVkKClcbiAgICAgIGlmICghaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9IGVsc2UgaWYgKGhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBcbiAgICAgKiBTZXQncyBjb29raWUgc3RhdHVzZXNcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGFsbE9yVW5kZWYgICAgICAtIElmIHRoaXMgaXMgdGhlIG9ubHkgcGFyYW0sIHNldCBBTEwgaWYgbm90LCBzZXQgVW5jYXRlZ29yaXplZCBjb29raWVzIHN0YXR1c2VzIHNldCB0byB2YWx1ZS5cbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGVzc2VudGlhbCAgICAgICAtIEVzc2VudGlhbCBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IHBlcnNvbmFsaXphdGlvbiAtIFByZWZlcmVuY2VzIC8gRnVuY3Rpb25hbGl0eSBzZXQgdG8gdmFsdWVcbiAgICAgKiBAcGFyYW0geyBzdHJpbmc8Y2Muc3RhdHVzPiB9IGFuYWx5dGljcyAgICAgICAtIEFuYWx5dGlzIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgICAqIEBwYXJhbSB7IHN0cmluZzxjYy5zdGF0dXM+IH0gbWFya2V0aW5nICAgICAgIC0gTWFya2V0aW5nIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgICAqIEByZXR1cm4geyB1bmRlZmluZWQgfVxuICAgICovXG4gICAgQ29va2llUG9wdXAucHJvdG90eXBlLnNldFN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7bmFtZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmV9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuXG4gICAgICAvLyBpZiBgc3RhdHVzYCBpcyB2YWxpZFxuICAgICAgY29uc3QgdXBkYXRlQ2F0ZWdvcnlTdGF0dXMgPSAoIGNhdGVnb3J5TmFtZSwgc3RhdHVzICkgPT4ge1xuICAgICAgICBpZiAoaXNWYWxpZFN0YXR1cyhzdGF0dXMpKSB7XG4gICAgICAgICAgY29uc3QgY29va2llTmFtZSA9IG5hbWUrJ18nK2NhdGVnb3J5TmFtZVxuICAgICAgICAgIGNvbnN0IGNob3NlbkJlZm9yZSA9IE9iamVjdC5rZXlzKGNjLnN0YXR1cykuaW5kZXhPZih1dGlsLmdldENvb2tpZShjb29raWVOYW1lKSkgPj0gMFxuICAgICAgICAgIHV0aWwuc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXG4gICAgICAgICAgdGhpcy5vcHRpb25zLm9uU3RhdHVzQ2hhbmdlLmNhbGwodGhpcywgY29va2llTmFtZSwgc3RhdHVzLCBjaG9zZW5CZWZvcmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jbGVhclN0YXR1c2VzKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGNjLmNhdGVnb3J5WyBjYXRlZ29yeSBdICkgKVxuICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKXtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXJndW1lbnRzWyAwIF1cbiAgICAgICAgT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgc3RhdHVzICkgKVxuICAgICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgIGFyZ3VtZW50cy5mb3JFYWNoKCAoIGNhdGVnb3J5U3RhdHVzLCBpbmRleCApID0+IHtcbiAgICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYy5jYXRlZ29yeVxuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5nZXRTdGF0dXNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5TmFtZSA9PiB1dGlsLmdldENvb2tpZSh0aGlzLm9wdGlvbnMuY29va2llLm5hbWUrJ18nK2NhdGVnb3J5TmFtZSkgKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgICAqL1xuICAgIENvb2tpZVBvcHVwLnByb3RvdHlwZS5jbGVhclN0YXR1c2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZTtcbiAgICAgIE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5mb3JFYWNoKCBjYXRlZ29yeU5hbWUgPT4ge1xuICAgICAgICB1dGlsLnNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAgLy8gVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nO1xuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZUluKGVsKSB7XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbDtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuXG4gICAgLy8gVGhpcyBpcyBjYWxsZWQgb24gJ3RyYW5zaXRpb25lbmQnIChvbmx5IG9uIHRoZSB0cmFuc2l0aW9uIG9mIHRoZSBmYWRlT3V0KS4gVGhhdCdzIGJlY2F1c2UgYWZ0ZXIgd2UndmUgZmFkZWQgb3V0LCB3ZSBuZWVkIHRvXG4gICAgLy8gc2V0IHRoZSBkaXNwbGF5IHRvICdub25lJyAoc28gdGhlcmUgYXJlbid0IGFubm95aW5nIGludmlzaWJsZSBwb3B1cHMgYWxsIG92ZXIgdGhlIHBhZ2UpLiBJZiBmb3Igd2hlbmV2ZXIgcmVhc29uIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBpcyBub3QgY2FsbGVkIChsYWNrIG9mIHN1cHBvcnQpLCB0aGUgb3Blbi9jbG9zZSBtZWNoYW5pc20gd2lsbCBzdGlsbCB3b3JrLlxuICAgIGZ1bmN0aW9uIGFmdGVyRmFkZU91dChlbCkge1xuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihjYy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbik7XG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBjYWxscyB0aGUgYG9uQ29tcGxldGVgIGhvb2sgYW5kIHJldHVybnMgdHJ1ZSAoaWYgbmVlZGVkKSBhbmQgcmV0dXJucyBmYWxzZSBvdGhlcndpc2VcbiAgICBmdW5jdGlvbiBjaGVja0NhbGxiYWNrSG9va3MoKSB7XG4gICAgICB2YXIgY29tcGxldGUgPSB0aGlzLm9wdGlvbnMub25Jbml0aWFsaXplLmJpbmQodGhpcyk7XG5cbiAgICAgIGlmICghd2luZG93Lm5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XG4gICAgICAgIGNvbXBsZXRlKGNjLnN0YXR1cy5kZW55KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LKSB7XG4gICAgICAgIGNvbXBsZXRlKGNjLnN0YXR1cy5hbGxvdyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoY2MuY2F0ZWdvcnkpXG4gICAgICBjb25zdCBzdGF0dXNlc1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzZXMoKVxuICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IGlzVmFsaWRTdGF0dXMoIHN0YXR1cyApIH0gKSApXG4gICAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG1hdGNoID0+IG1hdGNoW09iamVjdC5rZXlzKG1hdGNoKVswXV0gKS5sZW5ndGggPiAwXG4gICAgICBzdGF0dXNlc1ZhbHVlcy5mb3JFYWNoKCAoIHN0YXR1cywgaW5kZXggKSA9PiBjYy5jYXRlZ29yeVsgY2F0ZWdvcmllc1sgaW5kZXggXSBdID0gc3RhdHVzID8gc3RhdHVzIDogY2MuY2F0ZWdvcnlbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSApXG4gICAgICBjb21wbGV0ZSggaGFzTWF0Y2hlcyA/IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IHN0YXR1cyB9ICkgKSAgOiB1bmRlZmluZWQgKVxuXG4gICAgICByZXR1cm4gaGFzTWF0Y2hlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzZXMoKSB7XG4gICAgICB2YXIgcG9zaXRpb25zID0gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKTsgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XG4gICAgICB2YXIgY2xhc3NlcyA9IFtdO1xuXG4gICAgICAvLyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b21cbiAgICAgIHBvc2l0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGN1cikge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLScgKyBjdXIpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBvcHVwQ2xhc3NlcygpIHtcbiAgICAgIHZhciBvcHRzID0gdGhpcy5vcHRpb25zO1xuICAgICAgdmFyIHBvc2l0aW9uU3R5bGUgPVxuICAgICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcbiAgICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgICAgOiAnZmxvYXRpbmcnO1xuXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpICYmIG9wdHMubW9iaWxlRm9yY2VGbG9hdCkge1xuICAgICAgICBwb3NpdGlvblN0eWxlID0gJ2Zsb2F0aW5nJztcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzZXMgPSBbXG4gICAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAgICdjYy10eXBlLScgKyBvcHRzLnR5cGUsIC8vIGFkZCB0aGUgY29tcGxpYW5jZSB0eXBlXG4gICAgICAgICdjYy10aGVtZS0nICsgb3B0cy50aGVtZSAvLyBhZGQgdGhlIHRoZW1lXG4gICAgICBdO1xuXG4gICAgICBpZiAob3B0cy5zdGF0aWMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKTtcbiAgICAgIH1cblxuICAgICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpKTtcblxuICAgICAgLy8gd2Ugb25seSBhZGQgZXh0cmEgc3R5bGVzIGlmIGBwYWxldHRlYCBoYXMgYmVlbiBzZXQgdG8gYSB2YWxpZCB2YWx1ZVxuICAgICAgdmFyIGRpZEF0dGFjaCA9IGF0dGFjaEN1c3RvbVBhbGV0dGUuY2FsbCh0aGlzLCB0aGlzLm9wdGlvbnMucGFsZXR0ZSk7XG5cbiAgICAgIC8vIGlmIHdlIG92ZXJyaWRlIHRoZSBwYWxldHRlLCBhZGQgdGhlIGNsYXNzIHRoYXQgZW5hYmxlcyB0aGlzXG4gICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xhc3NlcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgICAgdmFyIGludGVycG9sYXRlZCA9IHt9O1xuICAgICAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgIC8vIHJlbW92ZXMgbGluayBpZiBzaG93TGluayBpcyBmYWxzZVxuICAgICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICAgIG9wdHMuZWxlbWVudHMubGluayA9ICcnOyBcbiAgICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmtleXMob3B0cy5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IHV0aWwuaW50ZXJwb2xhdGVTdHJpbmcoXG4gICAgICAgICAgb3B0cy5lbGVtZW50c1twcm9wXSxcbiAgICAgICAgICBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gb3B0cy5jb250ZW50W25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIG5hbWUgJiYgdHlwZW9mIHN0ciA9PSAnc3RyaW5nJyAmJiBzdHIubGVuZ3RoID8gc3RyIDogJyc7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNoZWNrcyBpZiB0aGUgdHlwZSBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gaW5mbyBpZiBpdCdzIG5vdFxuICAgICAgdmFyIGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlW29wdHMudHlwZV07XG4gICAgICBpZiAoIWNvbXBsaWFuY2VUeXBlKSB7XG4gICAgICAgIGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlLmluZm87XG4gICAgICB9XG5cbiAgICAgIC8vIGJ1aWxkIHRoZSBjb21wbGlhbmNlIHR5cGVzIGZyb20gdGhlIGFscmVhZHkgaW50ZXJwb2xhdGVkIGBlbGVtZW50c2BcbiAgICAgIGludGVycG9sYXRlZC5jb21wbGlhbmNlID0gdXRpbC5pbnRlcnBvbGF0ZVN0cmluZyhjb21wbGlhbmNlVHlwZSwgZnVuY3Rpb24oXG4gICAgICAgIG5hbWVcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdGVkW25hbWVdO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNoZWNrcyBpZiB0aGUgbGF5b3V0IGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBiYXNpYyBpZiBpdCdzIG5vdFxuICAgICAgdmFyIGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF07XG4gICAgICBpZiAoIWxheW91dCkge1xuICAgICAgICBsYXlvdXQgPSBvcHRzLmxheW91dHMuYmFzaWM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1dGlsLmludGVycG9sYXRlU3RyaW5nKGxheW91dCwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRlZFttYXRjaF07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRNYXJrdXAobWFya3VwKSB7XG4gICAgICB2YXIgb3B0cyA9IHRoaXMub3B0aW9ucztcbiAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHZhciBjb250ID1cbiAgICAgICAgb3B0cy5jb250YWluZXIgJiYgb3B0cy5jb250YWluZXIubm9kZVR5cGUgPT09IDFcbiAgICAgICAgICA/IG9wdHMuY29udGFpbmVyXG4gICAgICAgICAgOiBkb2N1bWVudC5ib2R5O1xuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gbWFya3VwO1xuXG4gICAgICB2YXIgZWwgPSBkaXYuY2hpbGRyZW5bMF07XG5cbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIGNjLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNhdmUgcmVmIHRvIHRoZSBmdW5jdGlvbiBoYW5kbGUgc28gd2UgY2FuIHVuYmluZCBpdCBsYXRlclxuICAgICAgdGhpcy5vbkJ1dHRvbkNsaWNrID0gaGFuZGxlQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2spO1xuICAgICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgY2MuY2F0ZWdvcnlbIGNoZWNrYm94Lm5hbWUgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnYWxsb3cnIDogJ2RlbnknXG4gICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICAgIH0pXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgaWYgKCB0aGlzID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICApIHtcbiAgICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC8qKlxuICAgICAgICogRXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgYWNjb3JkaW9uIGluIHRoZSB0b29sdGlwXG4gICAgICAgKi9cbiAgICAgIC8qZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1jb29raWUtYWNjb3JkaW9uLXRpdGxlXCIpLmZvckVhY2goIGFjY29yZGlvbkxpbmsgPT4ge1xuICAgICAgICBhY2NvcmRpb25MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBhY2NvcmRpb25MaW5rLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCBcIm9wZW5cIiApXG4gICAgICAgIH0pXG4gICAgICAgIGFjY29yZGlvbkxpbmsuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkgKVxuICAgICAgfSlcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtdG9vbHRpcFwiKS5mb3JFYWNoKCB0b29sVGlwID0+IHtcbiAgICAgICAgdG9vbFRpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICAgICAgdG9vbFRpcC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICovXG5cbiAgICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcbiAgICAgICAgaWYgKCFjb250LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICBjb250LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxuICAgICAgY29uc3QgYnRuID0gdXRpbC50cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0O1xuICAgICAgXG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2Mtc2F2ZScgKSl7XG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcbiAgICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgT2JqZWN0LmtleXMoY2Muc3RhdHVzKS5tYXAodXRpbC5lc2NhcGVSZWdFeHApLmpvaW4oJ3wnKSArICcpXFxcXGInKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtYXRjaCA9IChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHx8IGZhbHNlO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKG1hdGNoKTtcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWNsb3NlJyApKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICB0aGlzLmNsb3NlKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1yZXZva2UnICkpIHtcbiAgICAgICAgdGhpcy5yZXZva2VDaG9pY2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJIG1pZ2h0IGNoYW5nZSB0aGlzIGZ1bmN0aW9uIHRvIHVzZSBpbmxpbmUgc3R5bGVzLiBJIG9yaWdpbmFsbHkgY2hvc2UgYSBzdHlsZXNoZWV0IGJlY2F1c2UgSSBjb3VsZCBzZWxlY3QgbWFueSBlbGVtZW50cyB3aXRoIGFcbiAgICAvLyBzaW5nbGUgcnVsZSAoc29tZXRoaW5nIHRoYXQgaGFwcGVuZWQgYSBsb3QpLCB0aGUgYXBwcyBoYXMgY2hhbmdlZCBzbGlnaHRseSBub3cgdGhvdWdoLCBzbyBpbmxpbmUgc3R5bGVzIG1pZ2h0IGJlIG1vcmUgYXBwbGljYWJsZS5cbiAgICBmdW5jdGlvbiBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICAgIHZhciBoYXNoID0gdXRpbC5oYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKTtcbiAgICAgIHZhciBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaDtcbiAgICAgIHZhciBpc1ZhbGlkID0gdXRpbC5pc1BsYWluT2JqZWN0KHBhbGV0dGUpO1xuXG4gICAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsO1xuXG4gICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICBhZGRDdXN0b21TdHlsZShoYXNoLCBwYWxldHRlLCAnLicgKyBzZWxlY3Rvcik7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDdXN0b21TdHlsZShoYXNoLCBwYWxldHRlLCBwcmVmaXgpIHtcbiAgICAgIC8vIG9ubHkgYWRkIHRoaXMgaWYgYSBzdHlsZSBsaWtlIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICAgIGlmIChjYy5jdXN0b21TdHlsZXNbaGFzaF0pIHtcbiAgICAgICAgLy8gY3VzdG9tIHN0eWxlIGFscmVhZHkgZXhpc3RzLCBzbyBpbmNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudFxuICAgICAgICArK2NjLmN1c3RvbVN0eWxlc1toYXNoXS5yZWZlcmVuY2VzO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjb2xvclN0eWxlcyA9IHt9O1xuICAgICAgdmFyIHBvcHVwID0gcGFsZXR0ZS5wb3B1cDtcbiAgICAgIHZhciBidXR0b24gPSBwYWxldHRlLmJ1dHRvbjtcbiAgICAgIHZhciBoaWdobGlnaHQgPSBwYWxldHRlLmhpZ2hsaWdodDtcblxuICAgICAgLy8gbmVlZHMgYmFja2dyb3VuZCBjb2xvdXIsIHRleHQgYW5kIGxpbmsgd2lsbCBiZSBzZXQgdG8gYmxhY2svd2hpdGUgaWYgbm90IHNwZWNpZmllZFxuICAgICAgaWYgKHBvcHVwKSB7XG4gICAgICAgIC8vIGFzc3VtZXMgcG9wdXAuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHRcbiAgICAgICAgICA/IHBvcHVwLnRleHRcbiAgICAgICAgICA6IHV0aWwuZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZCk7XG4gICAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHQ7XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2Mtd2luZG93J10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgICAgXTtcbiAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgICBdO1xuICAgICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICAgJyAuY2MtbGluaywnICtcbiAgICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rOmFjdGl2ZSwnICtcbiAgICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgICAnIC5jYy1saW5rOnZpc2l0ZWQnXG4gICAgICAgIF0gPSBbJ2NvbG9yOiAnICsgcG9wdXAubGlua107XG5cbiAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgIC8vIGFzc3VtZXMgYnV0dG9uLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b24udGV4dFxuICAgICAgICAgICAgPyBidXR0b24udGV4dFxuICAgICAgICAgICAgOiB1dGlsLmdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xuICAgICAgICAgICAgJ2NvbG9yOiAnICsgYnV0dG9uLnRleHQsXG4gICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmRcbiAgICAgICAgICBdO1xuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXS5wdXNoKCdwYWRkaW5nOiAnICsgYnV0dG9uLnBhZGRpbmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChidXR0b24uYmFja2dyb3VuZCAhPSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1tcbiAgICAgICAgICAgICAgcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ1xuICAgICAgICAgICAgXSA9IFtcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgK1xuICAgICAgICAgICAgICAgIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvdXIoYnV0dG9uLmJhY2tncm91bmQpKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAvL2Fzc3VtZXMgaGlnaGxpZ2h0LmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgICBoaWdobGlnaHQudGV4dCA9IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgOiB1dGlsLmdldENvbnRyYXN0KGhpZ2hsaWdodC5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIGhpZ2hsaWdodC5ib3JkZXIgPSBoaWdobGlnaHQuYm9yZGVyXG4gICAgICAgICAgICAgID8gaGlnaGxpZ2h0LmJvcmRlclxuICAgICAgICAgICAgICA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGhpZ2hsaWdodC5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmRcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNldHMgaGlnaGxpZ2h0IHRleHQgY29sb3IgdG8gcG9wdXAgdGV4dC4gYmFja2dyb3VuZCBhbmQgYm9yZGVyIGFyZSB0cmFuc3BhcmVudCBieSBkZWZhdWx0LlxuICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyB3aWxsIGJlIGludGVycHJldHRlZCBhcyBDU1MuIHRoZSBrZXkgaXMgdGhlIHNlbGVjdG9yLCBhbmQgZWFjaCBhcnJheSBlbGVtZW50IGlzIGEgcnVsZVxuICAgICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gICAgICAvLyBjdXN0b20gc3R5bGUgZG9lc24ndCBleGlzdCwgc28gd2UgY3JlYXRlIGl0XG4gICAgICBjYy5jdXN0b21TdHlsZXNbaGFzaF0gPSB7XG4gICAgICAgIHJlZmVyZW5jZXM6IDEsXG4gICAgICAgIGVsZW1lbnQ6IHN0eWxlLnNoZWV0XG4gICAgICB9O1xuXG4gICAgICB2YXIgcnVsZUluZGV4ID0gLTE7XG4gICAgICBmb3IgKHZhciBwcm9wIGluIGNvbG9yU3R5bGVzKSB7XG4gICAgICAgIGlmIChjb2xvclN0eWxlcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICAgICBwcm9wICsgJ3snICsgY29sb3JTdHlsZXNbcHJvcF0uam9pbignOycpICsgJ30nLFxuICAgICAgICAgICAgKytydWxlSW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SG92ZXJDb2xvdXIoaGV4KSB7XG4gICAgICBoZXggPSB1dGlsLm5vcm1hbGlzZUhleChoZXgpO1xuICAgICAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcbiAgICAgIGlmIChoZXggPT0gJzAwMDAwMCcpIHtcbiAgICAgICAgcmV0dXJuICcjMjIyJztcbiAgICAgIH1cbiAgICAgIHJldHVybiB1dGlsLmdldEx1bWluYW5jZShoZXgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUN1c3RvbVN0eWxlKHBhbGV0dGUpIHtcbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3QocGFsZXR0ZSkpIHtcbiAgICAgICAgdmFyIGhhc2ggPSB1dGlsLmhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpO1xuICAgICAgICB2YXIgY3VzdG9tU3R5bGUgPSBjYy5jdXN0b21TdHlsZXNbaGFzaF07XG4gICAgICAgIGlmIChjdXN0b21TdHlsZSAmJiAhLS1jdXN0b21TdHlsZS5yZWZlcmVuY2VzKSB7XG4gICAgICAgICAgdmFyIHN0eWxlTm9kZSA9IGN1c3RvbVN0eWxlLmVsZW1lbnQub3duZXJOb2RlO1xuICAgICAgICAgIGlmIChzdHlsZU5vZGUgJiYgc3R5bGVOb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHN0eWxlTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlTm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNjLmN1c3RvbVN0eWxlc1toYXNoXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcnJheUNvbnRhaW5zTWF0Y2hlcyhhcnJheSwgc2VhcmNoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgICB2YXIgc3RyID0gYXJyYXlbaV07XG4gICAgICAgIC8vIGlmIHJlZ2V4IG1hdGNoZXMgb3Igc3RyaW5nIGlzIGVxdWFsLCByZXR1cm4gdHJ1ZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgKHN0ciBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBzdHIudGVzdChzZWFyY2gpKSB8fFxuICAgICAgICAgICh0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggJiYgc3RyID09PSBzZWFyY2gpXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICAgIHZhciBzZXRTdGF0dXNlcyA9IHRoaXMuc2V0U3RhdHVzZXMuYmluZCh0aGlzKTtcbiAgICAgIHZhciBjbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcblxuICAgICAgdmFyIGRlbGF5ID0gdGhpcy5vcHRpb25zLmRpc21pc3NPblRpbWVvdXQ7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHNldFN0YXR1c2VzKGNjLnN0YXR1cy5kaXNtaXNzKTtcbiAgICAgICAgICBjbG9zZSh0cnVlKTtcbiAgICAgICAgfSwgTWF0aC5mbG9vcihkZWxheSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2Nyb2xsUmFuZ2UgPSB0aGlzLm9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsO1xuICAgICAgaWYgKHR5cGVvZiBzY3JvbGxSYW5nZSA9PSAnbnVtYmVyJyAmJiBzY3JvbGxSYW5nZSA+PSAwKSB7XG4gICAgICAgIHZhciBvbldpbmRvd1Njcm9sbCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xuICAgICAgICAgICAgc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpO1xuICAgICAgICAgICAgY2xvc2UodHJ1ZSk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgICAgIHRoaXMub25XaW5kb3dTY3JvbGwgPSBvbldpbmRvd1Njcm9sbDtcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB3aW5kb3dDbGljayA9IHRoaXMub3B0aW9ucy5kaXNtaXNzT25XaW5kb3dDbGljaztcbiAgICAgIGNvbnN0IGlnbm9yZWRDbGlja3MgPSB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbTtcbiAgICAgIGlmICh3aW5kb3dDbGljaykge1xuICAgICAgICBjb25zdCBvbldpbmRvd0NsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgY29uc3QgcGF0aCA9IGV2dC5jb21wb3NlZFBhdGggPyBldnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XG4gICAgICAgICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICAgIH0pKFtdLGV2dC50YXJnZXQgKVxuICAgICAgICAgIGlmICggIXBhdGggKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oIFwiJy5wYXRoJyAmICcuY29tcG9zZWRQYXRoJyBmYWlsZWQgdG8gZ2VuZXJhdGUgYW4gZXZlbnQgcGF0aC5cIiApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCAhcGF0aC5zb21lKGZ1bmN0aW9uICggZWxlbWVudCApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlnbm9yZWRDbGlja3Muc29tZSggZnVuY3Rpb24gKCBpZ25vcmVkQ2xpY2sgICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBpZ25vcmVkQ2xpY2sgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSApICkge1xuICAgICAgICAgICAgc2V0U3RhdHVzZXMoY2Muc3RhdHVzLmRpc21pc3MpXG4gICAgICAgICAgICBjbG9zZSh0cnVlKVxuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbldpbmRvd0NsaWNrKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZWQpIHtcbiAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBvbldpbmRvd0NsaWNrO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uV2luZG93Q2xpY2spO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlSZXZva2VCdXR0b24oKSB7XG4gICAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnR5cGUgIT0gJ2luZm8nKSB0aGlzLm9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZTtcbiAgICAgIC8vIGFuaW1hdGVSZXZva2FibGUgZmFsc2UgZm9yIG1vYmlsZSBkZXZpY2VzXG4gICAgICBpZiAodXRpbC5pc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IGdldFBvc2l0aW9uQ2xhc3Nlcy5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICAgIGNsYXNzZXMucHVzaCgnY2MtdGhlbWUtJyt0aGlzLm9wdGlvbnMudGhlbWUpXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmV2b2tlQnRuID0gdGhpcy5vcHRpb25zLnJldm9rZUJ0blxuICAgICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3BvbGljeX19JywgdGhpcy5vcHRpb25zLmNvbnRlbnQucG9saWN5KTtcblxuICAgICAgICB0aGlzLnJldm9rZUJ0biA9IGFwcGVuZE1hcmt1cC5jYWxsKHRoaXMsIHJldm9rZUJ0bik7XG5cbiAgICAgICAgdmFyIGJ0biA9IHRoaXMucmV2b2tlQnRuO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgICB2YXIgd2FpdCA9IGZhbHNlO1xuICAgICAgICAgIHZhciBvbk1vdXNlTW92ZSA9IHV0aWwudGhyb3R0bGUoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgbWluWSA9IDIwO1xuICAgICAgICAgICAgdmFyIG1heFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMDtcblxuICAgICAgICAgICAgaWYgKCAoIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy10b3AnICkgJiYgZXZ0LmNsaWVudFkgPCBtaW5ZICkgfHxcbiAgICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xuICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoICFhY3RpdmUgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmU7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBDb29raWVQb3B1cDtcbiAgfSkoKTtcblxuICBjYy5Mb2NhdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICAvLyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHdlIGhhdmUgYWxyZWFkeSBzZXQgdXAuXG4gICAgLy8gV2hlbiB1c2luZyBhIHNlcnZpY2UsIGl0IGNvdWxkIGVpdGhlciByZXR1cm4gYSBkYXRhIHN0cnVjdHVyZSBpbiBwbGFpbiB0ZXh0IChsaWtlIGEgSlNPTiBvYmplY3QpIG9yIGFuIGV4ZWN1dGFibGUgc2NyaXB0XG4gICAgLy8gV2hlbiB0aGUgcmVzcG9uc2UgbmVlZHMgdG8gYmUgZXhlY3V0ZWQgYnkgdGhlIGJyb3dzZXIsIHRoZW4gYGlzU2NyaXB0YCBtdXN0IGJlIHNldCB0byB0cnVlLCBvdGhlcndpc2UgaXQgd29uJ3Qgd29yay5cblxuICAgIC8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxuICAgIC8vIGNhc2VzLCB0aGUgc2VydmljZXMgYGNhbGxiYWNrYCBwcm9wZXJ0eSBpcyBjYWxsZWQgd2l0aCBhIGBkb25lYCBmdW5jdGlvbi4gV2hlbiBwZXJmb3JtaW5nIGFzeW5jIG9wZXJhdGlvbnMsIHRoaXMgbXVzdCBiZSBjYWxsZWRcbiAgICAvLyB3aXRoIHRoZSBkYXRhIChvciBFcnJvciksIGFuZCBgY29va2llY29uc2VudC5sb2NhdGVgIHdpbGwgdGFrZSBjYXJlIG9mIHRoZSByZXN0XG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAvLyBUaGUgZGVmYXVsdCB0aW1lb3V0IGlzIDUgc2Vjb25kcy4gVGhpcyBpcyBtYWlubHkgbmVlZGVkIHRvIGNhdGNoIEpTT05QIHJlcXVlc3RzIHRoYXQgZXJyb3IuXG4gICAgICAvLyBPdGhlcndpc2UgdGhlcmUgaXMgbm8gZWFzeSB3YXkgdG8gY2F0Y2ggSlNPTlAgZXJyb3JzLiBUaGF0IG1lYW5zIHRoYXQgaWYgYSBKU09OUCBmYWlscywgdGhlXG4gICAgICAvLyBhcHAgd2lsbCB0YWtlIGB0aW1lb3V0YCBtaWxsaXNlY29uZHMgdG8gcmVhY3QgdG8gYSBKU09OUCBuZXR3b3JrIGVycm9yLlxuICAgICAgdGltZW91dDogNTAwMCxcblxuICAgICAgLy8gdGhlIG9yZGVyIHRoYXQgc2VydmljZXMgd2lsbCBiZSBhdHRlbXB0ZWQgaW5cbiAgICAgIHNlcnZpY2VzOiBbXG4gICAgICAgICdpcGluZm8nXG5cbiAgICAgICAgLypcblxuICAgICAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxuICAgICAgICAvLyB0aGlzIG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzZXJ2aWNlXG5cbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdpcGluZm9kYicsXG4gICAgICAgICAgaW50ZXJwb2xhdGVVcmw6IHtcbiAgICAgICAgICAgIC8vIG9idmlvdXNseSwgdGhpcyBpcyBhIGZha2Uga2V5XG4gICAgICAgICAgICBhcGlfa2V5OiAndk9nSTM3NDhkbkl5dElyc0pjeFM3cXNEZjZrYkprRTlsTjR5RURyWEFxWGNLVU52ampaUG94M2VrWHFtTU1sZCdcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcblxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHtuYW1lOiAnaXBpbmZvZGInfTtcbiAgICAgICAgfSxcblxuICAgICAgICAqL1xuICAgICAgXSxcblxuICAgICAgc2VydmljZURlZmluaXRpb25zOiB7XG4gICAgICAgIGlwaW5mbzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICAgICAgdXJsOiAnLy9pcGluZm8uaW8nLFxuICAgICAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgICAgID8gdG9FcnJvcihqc29uKVxuICAgICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlcXVpcmVzIGFuIG9wdGlvbiB0byBkZWZpbmUgYGtleWAuIE9wdGlvbnMgYXJlIHByb2l2ZWQgdXNpbmcgb2JqZWN0cyBvciBmdW5jdGlvbnNcbiAgICAgICAgaXBpbmZvZGI6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgICAgICB1cmw6XG4gICAgICAgICAgICAgICcvL2FwaS5pcGluZm9kYi5jb20vdjMvaXAtY291bnRyeS8/a2V5PXthcGlfa2V5fSZmb3JtYXQ9anNvbiZjYWxsYmFjaz17Y2FsbGJhY2t9JyxcbiAgICAgICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBqc29uLnN0YXR1c0NvZGUgPT0gJ0VSUk9SJ1xuICAgICAgICAgICAgICAgICAgPyB0b0Vycm9yKHtlcnJvcjoganNvbi5zdGF0dXNNZXNzYWdlfSlcbiAgICAgICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeUNvZGVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBtYXhtaW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUgd2hpY2ggZGVmaW5lcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuIE9uY2UgbG9hZGVkLCB3ZSBtdXN0XG4gICAgICAgICAgICAvLyBtYWtlIGFuIGFkZGl0aW9uYWwgQUpBWCBjYWxsLiBUaGVyZWZvcmUgd2UgcHJvdmlkZSBhIGBkb25lYCBjYWxsYmFjayB0aGF0IGNhbiBiZSBjYWxsZWQgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgIHVybDogJy8vanMubWF4bWluZC5jb20vanMvYXBpcy9nZW9pcDIvdjIuMS9nZW9pcDIuanMnLFxuICAgICAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlLCBzbyBpdCBtdXN0IGJlIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUpIHtcbiAgICAgICAgICAgICAgLy8gaWYgZXZlcnl0aGluZyB3ZW50IG9rYXkgdGhlbiBgZ2VvaXAyYCBXSUxMIGJlIGRlZmluZWRcbiAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuZ2VvaXAyKSB7XG4gICAgICAgICAgICAgICAgZG9uZShcbiAgICAgICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0LiBUaGUgZG93bmxvYWRlZCBzY3JpcHQgc2hvdWxkIGhhdmUgZXhwb3J0ZWQgYGdlb2lwMmAgdG8gdGhlIGdsb2JhbCBzY29wZSdcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGdlb2lwMi5jb3VudHJ5KFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkb25lKHtcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBsb2NhdGlvbi5jb3VudHJ5Lmlzb19jb2RlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAvLyBXZSBjYW4ndCByZXR1cm4gYW55dGhpbmcsIGJlY2F1c2Ugd2UgbmVlZCB0byB3YWl0IGZvciB0aGUgc2Vjb25kIEFKQVggY2FsbCB0byByZXR1cm4uXG4gICAgICAgICAgICAgIC8vIFRoZW4gd2UgY2FuICdjb21wbGV0ZScgdGhlIHNlcnZpY2UgYnkgcGFzc2luZyBkYXRhIG9yIGFuIGVycm9yIHRvIHRoZSBgZG9uZWAgY2FsbGJhY2suXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBMb2NhdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBTZXQgdXAgb3B0aW9uc1xuICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbigge30sIGRlZmF1bHRPcHRpb25zIClcblxuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTE7IC8vIHRoZSBpbmRleCAoaW4gb3B0aW9ucykgb2YgdGhlIHNlcnZpY2Ugd2UncmUgY3VycmVudGx5IHVzaW5nXG4gICAgfVxuXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLmdldE5leHRTZXJ2aWNlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VydmljZTtcblxuICAgICAgZG8ge1xuICAgICAgICBzZXJ2aWNlID0gdGhpcy5nZXRTZXJ2aWNlQnlJZHgoKyt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXgpO1xuICAgICAgfSB3aGlsZSAoXG4gICAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcbiAgICAgICAgIXNlcnZpY2VcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgIH07XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuZ2V0U2VydmljZUJ5SWR4ID0gZnVuY3Rpb24oaWR4KSB7XG4gICAgICAvLyBUaGlzIGNhbiBlaXRoZXIgYmUgdGhlIG5hbWUgb2YgYSBkZWZhdWx0IGxvY2F0aW9uU2VydmljZSwgb3IgYSBmdW5jdGlvbi5cbiAgICAgIHZhciBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF07XG5cbiAgICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBkeW5hbWljT3B0cyA9IHNlcnZpY2VPcHRpb24oKTtcbiAgICAgICAgaWYgKGR5bmFtaWNPcHRzLm5hbWUpIHtcbiAgICAgICAgICBkeW5hbWljT3B0cyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7fSxcbiAgICAgICAgICAgIGR5bmFtaWNPcHRzLFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkeW5hbWljT3B0cztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgICBpZiAodHlwZW9mIHNlcnZpY2VPcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBhc3N1bWUge25hbWU6ICdpcGluZm8nLCAuLi5vdGhlck9wdGlvbnN9XG4gICAgICAvLyBBbGxvd3MgdXNlciB0byBwYXNzIGluIEFQSSBrZXlzIGV0Yy5cbiAgICAgIGlmICh1dGlsLmlzUGxhaW5PYmplY3Qoc2VydmljZU9wdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbi5uYW1lXShcbiAgICAgICAgICBzZXJ2aWNlT3B0aW9uXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG5cbiAgICAvLyBUaGlzIHJ1bnMgdGhlIHNlcnZpY2UgbG9jYXRlZCBhdCBpbmRleCBgY3VycmVudFNlcnZpY2VJbmRleGAuXG4gICAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUubG9jYXRlID0gZnVuY3Rpb24oY29tcGxldGUsIGVycm9yKSB7XG4gICAgICB2YXIgc2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKTtcblxuICAgICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICAgIGVycm9yKG5ldyBFcnJvcignTm8gc2VydmljZXMgdG8gcnVuJykpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlO1xuICAgICAgdGhpcy5jYWxsYmFja0Vycm9yID0gZXJyb3I7XG5cbiAgICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUuc2V0dXBVcmwgPSBmdW5jdGlvbihzZXJ2aWNlKSB7XG4gICAgICB2YXIgc2VydmljZU9wdHMgPSB0aGlzLmdldEN1cnJlbnRTZXJ2aWNlT3B0cygpO1xuICAgICAgcmV0dXJuIHNlcnZpY2UudXJsLnJlcGxhY2UoL1xceyguKj8pXFx9L2csIGZ1bmN0aW9uKF8sIHBhcmFtKSB7XG4gICAgICAgIGlmIChwYXJhbSA9PT0gJ2NhbGxiYWNrJykge1xuICAgICAgICAgIHZhciB0ZW1wTmFtZSA9ICdjYWxsYmFjaycgKyBEYXRlLm5vdygpO1xuICAgICAgICAgIHdpbmRvd1t0ZW1wTmFtZV0gPSBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiB0ZW1wTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW0gaW4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmwpIHtcbiAgICAgICAgICByZXR1cm4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmxbcGFyYW1dO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXG4gICAgTG9jYXRpb24ucHJvdG90eXBlLnJ1blNlcnZpY2UgPSBmdW5jdGlvbihzZXJ2aWNlLCBjb21wbGV0ZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxuICAgICAgdmFyIHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0O1xuXG4gICAgICB2YXIgdXJsID0gdGhpcy5zZXR1cFVybChzZXJ2aWNlKTtcblxuICAgICAgLy8gYm90aCBmdW5jdGlvbnMgaGF2ZSBzaW1pbGFyIHNpZ25hdHVyZXMgc28gd2UgY2FuIHBhc3MgdGhlIHNhbWUgYXJndW1lbnRzIHRvIGJvdGhcbiAgICAgIHJlcXVlc3RGdW5jdGlvbihcbiAgICAgICAgdXJsLFxuICAgICAgICBmdW5jdGlvbih4aHIpIHtcbiAgICAgICAgICAvLyBpZiBgIXhocmAsIHRoZW4gYGdldFNjcmlwdGAgZnVuY3Rpb24gd2FzIHVzZWQsIHNvIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHRleHRcbiAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyID8geGhyLnJlc3BvbnNlVGV4dCA6ICcnO1xuXG4gICAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGEgc2NyaXB0LCB0aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gcnVuLlxuICAgICAgICAgIC8vIGlmIHRoZSBzY3JpcHQgaXMgSlNPTlAsIHRoZW4gYSB0aW1lIGRlZmluZWQgZnVuY3Rpb24gYGNhbGxiYWNrX3tEYXRlLm5vd31gIGhhcyBhbHJlYWR5XG4gICAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XG4gICAgICAgICAgaWYgKHNlcnZpY2UuX19KU09OUF9EQVRBKSB7XG4gICAgICAgICAgICByZXNwb25zZVRleHQgPSBzZXJ2aWNlLl9fSlNPTlBfREFUQTtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXJ2aWNlLl9fSlNPTlBfREFUQTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXG4gICAgICAgICAgc2VsZi5ydW5TZXJ2aWNlQ2FsbGJhY2suY2FsbChzZWxmLCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcy5vcHRpb25zLnRpbWVvdXQsXG4gICAgICAgIHNlcnZpY2UuZGF0YSxcbiAgICAgICAgc2VydmljZS5oZWFkZXJzXG4gICAgICApO1xuXG4gICAgICAvLyBgc2VydmljZS5kYXRhYCBhbmQgYHNlcnZpY2UuaGVhZGVyc2AgYXJlIG9wdGlvbmFsICh0aGV5IG9ubHkgY291bnQgaWYgYCFzZXJ2aWNlLmlzU2NyaXB0YCBhbnl3YXkpXG4gICAgfTtcblxuICAgIC8vIFRoZSBzZXJ2aWNlIHJlcXVlc3QgaGFzIHJ1biAoYW5kIHBvc3NpYmx5IGhhcyBhIGByZXNwb25zZVRleHRgKSBbbm8gYHJlc3BvbnNlVGV4dGAgaWYgYGlzU2NyaXB0YF1cbiAgICAvLyBXZSBuZWVkIHRvIHJ1biBpdHMgY2FsbGJhY2sgd2hpY2ggZGV0ZXJtaW5lcyBpZiBpdHMgc3VjY2Vzc2Z1bCBvciBub3RcbiAgICAvLyBgY29tcGxldGVgIGlzIGNhbGxlZCBvbiBzdWNjZXNzIG9yIGZhaWx1cmVcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUucnVuU2VydmljZUNhbGxiYWNrID0gZnVuY3Rpb24oXG4gICAgICBjb21wbGV0ZSxcbiAgICAgIHNlcnZpY2UsXG4gICAgICByZXNwb25zZVRleHRcbiAgICApIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGlmIHRoZSBzZXJ2aWNlIHVzZXMgdGhlIGFzeW5jIGNhbGxiYWNrIGluIGl0cyBoYW5kbGVyIG1ldGhvZFxuICAgICAgdmFyIHNlcnZpY2VSZXN1bHRIYW5kbGVyID0gZnVuY3Rpb24oYXN5bmNSZXN1bHQpIHtcbiAgICAgICAgLy8gaWYgYHJlc3VsdGAgaXMgYSB2YWxpZCB2YWx1ZSwgdGhlbiB0aGlzIGZ1bmN0aW9uIHNob3VsZG4ndCByZWFsbHkgcnVuXG4gICAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHNlbGYub25TZXJ2aWNlUmVzdWx0LmNhbGwoc2VsZiwgY29tcGxldGUsIGFzeW5jUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gdGhlIGZ1bmN0aW9uIGBzZXJ2aWNlLmNhbGxiYWNrYCB3aWxsIGVpdGhlciBleHRyYWN0IGEgY291bnRyeSBjb2RlIGZyb20gYHJlc3BvbnNlVGV4dGAgYW5kIHJldHVybiBpdCAoaW4gYHJlc3VsdGApXG4gICAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XG4gICAgICB2YXIgcmVzdWx0ID0gc2VydmljZS5jYWxsYmFjayhzZXJ2aWNlUmVzdWx0SGFuZGxlciwgcmVzcG9uc2VUZXh0KTtcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLm9uU2VydmljZVJlc3VsdC5jYWxsKHRoaXMsIGNvbXBsZXRlLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBUaGlzIGlzIGNhbGxlZCB3aXRoIHRoZSBgcmVzdWx0YCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYCByZWdhcmRsZXNzIG9mIGhvdyBpdCBwcm92aWRlZCB0aGF0IHJlc3VsdCAoc3luYyBvciBhc3luYykuXG4gICAgLy8gYHJlc3VsdGAgd2lsbCBiZSB3aGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYC4gQSBzZXJ2aWNlIGNhbGxiYWNrIHNob3VsZCBwcm92aWRlIGFuIG9iamVjdCB3aXRoIGRhdGFcbiAgICBMb2NhdGlvbi5wcm90b3R5cGUub25TZXJ2aWNlUmVzdWx0ID0gZnVuY3Rpb24oY29tcGxldGUsIHJlc3VsdCkge1xuICAgICAgLy8gY29udmVydCByZXN1bHQgdG8gbm9kZWpzIHN0eWxlIGFzeW5jIGNhbGxiYWNrXG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpKSB7XG4gICAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgcmVzdWx0LCBudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgbnVsbCwgcmVzdWx0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaWYgYGVycmAgaXMgc2V0LCB0aGUgbmV4dCBzZXJ2aWNlIGhhbmRsZXIgaXMgY2FsbGVkXG4gICAgLy8gaWYgYGVycmAgaXMgbnVsbCwgdGhlIGBvbkNvbXBsZXRlYCBoYW5kbGVyIGlzIGNhbGxlZCB3aXRoIGBkYXRhYFxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5ydW5OZXh0U2VydmljZU9uRXJyb3IgPSBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgdGhpcy5sb2dFcnJvcihlcnIpO1xuXG4gICAgICAgIHZhciBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKTtcblxuICAgICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5jYWxsYmFja0Vycm9yLFxuICAgICAgICAgICAgbmV3IEVycm9yKCdBbGwgc2VydmljZXMgZmFpbGVkJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKHRoaXMsIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSwgZGF0YSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5nZXRDdXJyZW50U2VydmljZU9wdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiB2YWwoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgLy8gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBjYWxsYmFjayBhZnRlciByZXNldHRpbmcgdGhlIGBjdXJyZW50U2VydmljZUluZGV4YFxuICAgIExvY2F0aW9uLnByb3RvdHlwZS5jb21wbGV0ZVNlcnZpY2UgPSBmdW5jdGlvbihmbiwgZGF0YSkge1xuICAgICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTE7XG5cbiAgICAgIGZuICYmIGZuKGRhdGEpO1xuICAgIH07XG5cbiAgICBMb2NhdGlvbi5wcm90b3R5cGUubG9nRXJyb3IgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXg7XG4gICAgICB2YXIgc2VydmljZSA9IHRoaXMuZ2V0U2VydmljZUJ5SWR4KGlkeCk7XG5cbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1RoZSBzZXJ2aWNlWycgK1xuICAgICAgICAgIGlkeCArXG4gICAgICAgICAgJ10gKCcgK1xuICAgICAgICAgIHNlcnZpY2UudXJsICtcbiAgICAgICAgICAnKSByZXNwb25kZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yJyxcbiAgICAgICAgZXJyXG4gICAgICApO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JpcHQodXJsLCBjYWxsYmFjaywgdGltZW91dCkge1xuICAgICAgdmFyIHRpbWVvdXRJZHgsXG4gICAgICAgIHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuICAgICAgcy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpO1xuICAgICAgcy5zcmMgPSB1cmwuc3JjIHx8IHVybDtcbiAgICAgIHMuYXN5bmMgPSBmYWxzZTtcblxuICAgICAgcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyB0aGlzIGNvZGUgaGFuZGxlcyB0d28gc2NlbmFyaW9zLCB3aGV0aGVyIGNhbGxlZCBieSBvbmxvYWQgb3Igb25yZWFkeXN0YXRlY2hhbmdlXG4gICAgICAgIHZhciBzdGF0ZSA9IHMucmVhZHlTdGF0ZTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkeCk7XG5cbiAgICAgICAgaWYgKCFjYWxsYmFjay5kb25lICYmICghc3RhdGUgfHwgL2xvYWRlZHxjb21wbGV0ZS8udGVzdChzdGF0ZSkpKSB7XG4gICAgICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWU7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcblxuICAgICAgLy8gWW91IGNhbid0IGNhdGNoIEpTT05QIEVycm9ycywgYmVjYXVzZSBpdCdzIGhhbmRsZWQgYnkgdGhlIHNjcmlwdCB0YWdcbiAgICAgIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICAgICAgdGltZW91dElkeCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNhbGxiYWNrLmRvbmUgPSB0cnVlO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbDtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VBc3luY1JlcXVlc3QoXG4gICAgICB1cmwsXG4gICAgICBvbkNvbXBsZXRlLFxuICAgICAgdGltZW91dCxcbiAgICAgIHBvc3REYXRhLFxuICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICApIHtcbiAgICAgIHZhciB4aHIgPSBuZXcgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuQWN0aXZlWE9iamVjdCkoXG4gICAgICAgICdNU1hNTDIuWE1MSFRUUC4zLjAnXG4gICAgICApO1xuXG4gICAgICB4aHIub3Blbihwb3N0RGF0YSA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpO1xuXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SGVhZGVycykpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSByZXF1ZXN0SGVhZGVycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICB2YXIgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpO1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMykge1xuICAgICAgICAgICAgb25Db21wbGV0ZSh4aHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQocG9zdERhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvRXJyb3Iob2JqKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdFcnJvciBbJyArIChvYmouY29kZSB8fCAnVU5LTk9XTicpICsgJ106ICcgKyBvYmouZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBMb2NhdGlvbjtcbiAgfSkoKTtcblxuICBjYy5MYXcgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gICAgICAvLyBJZiB0cnVlLCBvcHRpb25zIGNhbiBkaWZmZXIgYnkgY291bnRyeSwgZGVwZW5kaW5nIG9uIHRoZWlyIGNvb2tpZSBsYXcuXG4gICAgICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgICAgIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBlbmZvcmNlIHNvbWUgdmVyc2lvbiBvZiBhIGNvb2tpZSBsYXdcbiAgICAgIGhhc0xhdzogW1xuICAgICAgICAnQVQnLFxuICAgICAgICAnQkUnLFxuICAgICAgICAnQkcnLFxuICAgICAgICAnSFInLFxuICAgICAgICAnQ1onLFxuICAgICAgICAnQ1knLFxuICAgICAgICAnREsnLFxuICAgICAgICAnRUUnLFxuICAgICAgICAnRkknLFxuICAgICAgICAnRlInLFxuICAgICAgICAnREUnLFxuICAgICAgICAnRUwnLFxuICAgICAgICAnSFUnLFxuICAgICAgICAnSUUnLFxuICAgICAgICAnSVQnLFxuICAgICAgICAnTFYnLFxuICAgICAgICAnTFQnLFxuICAgICAgICAnTFUnLFxuICAgICAgICAnTVQnLFxuICAgICAgICAnTkwnLFxuICAgICAgICAnTk8nLFxuICAgICAgICAnUEwnLFxuICAgICAgICAnUFQnLFxuICAgICAgICAnU0snLFxuICAgICAgICAnRVMnLFxuICAgICAgICAnU0UnLFxuICAgICAgICAnR0InLFxuICAgICAgICAnVUsnLFxuICAgICAgICAnR1InLFxuICAgICAgICAnRVUnLFxuICAgICAgICAnUk8nXG4gICAgICBdLFxuXG4gICAgICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gICAgICByZXZva2FibGU6IFtcbiAgICAgICAgJ0hSJyxcbiAgICAgICAgJ0NZJyxcbiAgICAgICAgJ0RLJyxcbiAgICAgICAgJ0VFJyxcbiAgICAgICAgJ0ZSJyxcbiAgICAgICAgJ0RFJyxcbiAgICAgICAgJ0xWJyxcbiAgICAgICAgJ0xUJyxcbiAgICAgICAgJ05MJyxcbiAgICAgICAgJ05PJyxcbiAgICAgICAgJ1BUJyxcbiAgICAgICAgJ0VTJ1xuICAgICAgXSxcblxuICAgICAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gICAgICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxuICAgICAgZXhwbGljaXRBY3Rpb246IFsnSFInLCAnSVQnLCAnRVMnLCAnTk8nXVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBMYXcob3B0aW9ucykge1xuICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgTGF3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gc2V0IG9wdGlvbnMgYmFjayB0byBkZWZhdWx0IG9wdGlvbnNcbiAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oIHt9LCBkZWZhdWx0T3B0aW9ucyApXG5cbiAgICAgIC8vIG1lcmdlIGluIHVzZXIgb3B0aW9uc1xuICAgICAgaWYgKHV0aWwuaXNQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKCB7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zIClcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihjb3VudHJ5Q29kZSkge1xuICAgICAgdmFyIG9wdHMgPSB0aGlzLm9wdGlvbnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYXNMYXc6IG9wdHMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICAgIHJldm9rYWJsZTogb3B0cy5yZXZva2FibGUuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgICAgZXhwbGljaXRBY3Rpb246IG9wdHMuZXhwbGljaXRBY3Rpb24uaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgTGF3LnByb3RvdHlwZS5hcHBseUxhdyA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNvdW50cnlDb2RlKSB7XG4gICAgICB2YXIgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKTtcblxuICAgICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xuICAgICAgICBvcHRpb25zLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uTm9Db29raWVMYXcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvcHRpb25zLm9uTm9Db29raWVMYXcoY291bnRyeUNvZGUsIGNvdW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcbiAgICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XG4gICAgICAgICAgLy8gV2UgbXVzdCBwcm92aWRlIGFuIG9wdGlvbiB0byByZXZva2UgY29uc2VudCBhdCBhIGxhdGVyIHRpbWVcbiAgICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xuICAgICAgICAgIC8vIFRoZSB1c2VyIG11c3QgZXhwbGljaXRseSBjbGljayB0aGUgY29uc2VudCBidXR0b25cbiAgICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlO1xuICAgICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExhdztcbiAgfSkoKTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuICAvLyBZb3UgY2FuIHN0cmluZyB0b2dldGhlciB0aGVzZSB0aHJlZSBtb2R1bGVzIHlvdXJzZWxmIGhvd2V2ZXIgeW91IHdhbnQsIGJ5IHdyaXRpbmcgYSBuZXcgZnVuY3Rpb24uXG4gIGNjLmluaXRpYWxpemUgPSBmdW5jdGlvbihvcHRpb25zLCBjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICB2YXIgbGF3ID0gbmV3IGNjLkxhdyhvcHRpb25zLmxhdyk7XG5cbiAgICBpZiAoIWNvbXBsZXRlKSBjb21wbGV0ZSA9IGZ1bmN0aW9uKCkge307XG4gICAgaWYgKCFlcnJvcikgZXJyb3IgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgY29uc3QgYW5zd2VycyA9IE9iamVjdC5rZXlzKGNjLmNhdGVnb3J5KS5tYXAoIGNhdGVnb3J5ID0+IHtcbiAgICAgIGNvbnN0IGFuc3dlciA9IHV0aWwuZ2V0Q29va2llKCdjb29raWVjb25zZW50X3N0YXR1c18nK2NhdGVnb3J5KVxuICAgICAgcmV0dXJuIGlzVmFsaWRTdGF0dXMoYW5zd2VyKSA/IHsgW2NhdGVnb3J5XTogYW5zd2VyIH0gOiB1bmRlZmluZWRcbiAgICB9KS5maWx0ZXIob2JqID0+IG9iaiA/IG9ialtPYmplY3Qua2V5cyhvYmopWzBdXSA6IGZhbHNlKTtcblxuICAgIC8vIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGFuc3dlcmVkXG4gICAgaWYgKGFuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgY29tcGxldGUoYW5zd2Vycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2MuZ2V0Q291bnRyeUNvZGUoXG4gICAgICBvcHRpb25zLFxuICAgICAgZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIC8vIGRvbid0IG5lZWQgdGhlIGxhdyBvciBsb2NhdGlvbiBvcHRpb25zIGFueW1vcmVcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubGF3O1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5sb2NhdGlvbjtcblxuICAgICAgICBpZiAocmVzdWx0LmNvZGUpIHtcbiAgICAgICAgICBvcHRpb25zID0gbGF3LmFwcGx5TGF3KG9wdGlvbnMsIHJlc3VsdC5jb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBsZXRlKG5ldyBjYy5Qb3B1cChvcHRpb25zKSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIC8vIGRvbid0IG5lZWQgdGhlIGxhdyBvciBsb2NhdGlvbiBvcHRpb25zIGFueW1vcmVcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMubGF3O1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5sb2NhdGlvbjtcblxuICAgICAgICBlcnJvcihlcnIsIG5ldyBjYy5Qb3B1cChvcHRpb25zKSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICAvLyBUaGlzIGZ1bmN0aW9uIHRyaWVzIHRvIGZpbmQgeW91ciBjdXJyZW50IGxvY2F0aW9uLiBJdCBlaXRoZXIgZ3JhYnMgaXQgZnJvbSBhIGhhcmRjb2RlZCBvcHRpb24gaW5cbiAgLy8gYG9wdGlvbnMubGF3LmNvdW50cnlDb2RlYCwgb3IgYXR0ZW1wdHMgdG8gbWFrZSBhIGxvY2F0aW9uIHNlcnZpY2UgcmVxdWVzdC4gVGhpcyBmdW5jdGlvbiBhY2NlcHRzXG4gIC8vIG9wdGlvbnMgKHdoaWNoIGNhbiBjb25maWd1cmUgdGhlIGBsYXdgIGFuZCBgbG9jYXRpb25gIG1vZHVsZXMpIGFuZCBmaXJlcyBhIGNhbGxiYWNrIHdpdGggd2hpY2hcbiAgLy8gcGFzc2VzIGFuIG9iamVjdCBge2NvZGU6IGNvdW50cnlDb2RlfWAgYXMgdGhlIGZpcnN0IGFyZ3VtZW50ICh3aGljaCBjYW4gaGF2ZSB1bmRlZmluZWQgcHJvcGVydGllcylcbiAgY2MuZ2V0Q291bnRyeUNvZGUgPSBmdW5jdGlvbihvcHRpb25zLCBjb21wbGV0ZSwgZXJyb3IpIHtcbiAgICBpZiAob3B0aW9ucy5sYXcgJiYgb3B0aW9ucy5sYXcuY291bnRyeUNvZGUpIHtcbiAgICAgIGNvbXBsZXRlKHtcbiAgICAgICAgY29kZTogb3B0aW9ucy5sYXcuY291bnRyeUNvZGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5sb2NhdGlvbikge1xuICAgICAgdmFyIGxvY2F0b3IgPSBuZXcgY2MuTG9jYXRpb24ob3B0aW9ucy5sb2NhdGlvbik7XG4gICAgICBsb2NhdG9yLmxvY2F0ZShmdW5jdGlvbihzZXJ2aWNlUmVzdWx0KSB7XG4gICAgICAgIGNvbXBsZXRlKHNlcnZpY2VSZXN1bHQgfHwge30pO1xuICAgICAgfSwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb21wbGV0ZSh7fSk7XG4gIH07XG5cbiAgLy8gZXhwb3J0IHV0aWxzIChubyBwb2ludCBpbiBoaWRpbmcgdGhlbSwgc28gd2UgbWF5IGFzIHdlbGwgZXhwb3NlIHRoZW0pXG4gIGNjLnV0aWxzID0gdXRpbDtcblxuICAvLyBwcmV2ZW50IHRoaXMgY29kZSBmcm9tIGJlaW5nIHJ1biB0d2ljZVxuICBjYy5oYXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgd2luZG93LmNvb2tpZWNvbnNlbnQgPSBjYztcbn0pKHdpbmRvdy5jb29raWVjb25zZW50IHx8IHt9KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL21haW4uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=