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

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

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


var statuses = ["DENY", "ALLOW", "DISMISS"];
var statusDeny = "DENY";
var statusAllow = "ALLOW";
var statusDismiss = "DISMISS";
var categories = ["UNCATEGORIZED", "ESSENTIAL", "PERSONALIZATION", "ANALYTICS", "MARKETING"];

/***/ }),

/***/ "./src/cookieconsent.js":
/*!******************************!*\
  !*** ./src/cookieconsent.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models_Base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./models/Base */ "./src/models/Base.js");
/* harmony import */ var _models_Legal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/Legal */ "./src/models/Legal.js");
/* harmony import */ var _models_Location__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/Location */ "./src/models/Location.js");
/* harmony import */ var _models_Popup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./models/Popup */ "./src/models/Popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");














 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

var CookieConsent =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CookieConsent, _Base);

  function CookieConsent(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CookieConsent);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(CookieConsent).call(this, options));
    var answers = _constants__WEBPACK_IMPORTED_MODULE_11__["categories"].map(function (category) {
      var answer = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('cookieconsent_status_' + category);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isValidStatus"])(answer) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, category, answer) : undefined;
    }).filter(function (obj) {
      return obj ? obj[Object.keys(obj)[0]] : false;
    }); // if they have already answered

    if (answers.length > 0) {
      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, setTimeout(function () {
        return _this.emit("initialized", answers);
      }));
    } else if (_this.options.legal && _this.options.legal.countryCode) {
      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _this.initializationComplete({
        code: _this.options.legal.countryCode
      }));
    } else if (_this.options.location) {
      return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, new _models_Location__WEBPACK_IMPORTED_MODULE_9__["default"](_this.options.location).locate(_this.initializationComplete, _this.initializationError));
    }

    _this.initializationComplete({});

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CookieConsent, [{
    key: "initializationComplete",
    value: function initializationComplete(result) {
      var _this2 = this;

      if (result.code) {
        this.options = new _models_Legal__WEBPACK_IMPORTED_MODULE_8__["default"](this.options.legal).applyLaw(this.options, result.code);
      }

      setTimeout(function () {
        return _this2.emit("initialized", new _models_Popup__WEBPACK_IMPORTED_MODULE_10__["default"](_this2.options));
      }, 0);
    }
  }, {
    key: "initializationError",
    value: function initializationError(error) {
      var _this3 = this;

      setTimeout(function () {
        return _this3.emit("error", error, new _models_Popup__WEBPACK_IMPORTED_MODULE_10__["default"](_this3.options));
      }, 0);
    }
  }]);

  return CookieConsent;
}(_models_Base__WEBPACK_IMPORTED_MODULE_7__["default"]);

if (typeof exports !== 'undefined') {
  module.exports = CookieConsent;
} else {
  window.CookieConsent = CookieConsent;
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);






var emitter = new events__WEBPACK_IMPORTED_MODULE_3___default.a();

var loopProperties = function loopProperties(overwrites) {
  return function (obj, _ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (overwrites instanceof Object && overwrites[key]) {
      obj[key] = value instanceof Object && !value instanceof Array ? Object.entries(value).reduce(loopProperties(overwrites[key]), {}) : overwrites[key] instanceof Object && !overwrites[key] instanceof Array ? value : overwrites[key];
    } else {
      obj[key] = value;
    }

    return obj;
  };
};

var Base =
/*#__PURE__*/
function () {
  function Base(deafultOptions) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Base);

    this.options = this.mergeOptions(deafultOptions, options);
    this.on = emitter.on.bind(emitter);
    this.emit = emitter.emit.bind(emitter);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Base, [{
    key: "mergeOptions",
    value: function mergeOptions(defaults, overwrites) {
      return Object.entries(defaults).reduce(loopProperties(overwrites), {});
    }
  }]);

  return Base;
}();



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");










var Legal =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Legal, _Base);

  function Legal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Legal);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Legal).call(this, _options_legal__WEBPACK_IMPORTED_MODULE_6__["default"], options));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Legal, [{
    key: "get",
    value: function get(countryCode) {
      return {
        hasLaw: this.options.hasLaw.indexOf(countryCode) >= 0,
        revokable: this.options.revokable.indexOf(countryCode) >= 0,
        explicitAction: this.options.explicitAction.indexOf(countryCode) >= 0
      };
    }
  }, {
    key: "applyLaw",
    value: function applyLaw(options, countryCode) {
      var country = this.get(countryCode);

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
  }]);

  return Legal;
}(_Base__WEBPACK_IMPORTED_MODULE_5__["default"]);



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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");









 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

var Location =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Location, _Base);

  function Location(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Location);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Location).call(this, _options_location__WEBPACK_IMPORTED_MODULE_6__["default"], options));
    _this.currentServiceIndex = -1; // the index (in options) of the service we're currently using

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Location, [{
    key: "getNextService",
    value: function getNextService() {
      var service;

      do {
        service = this.getServiceByIdx(++this.currentServiceIndex);
      } while (this.currentServiceIndex < this.options.services.length && !service);

      return service;
    }
  }, {
    key: "getServiceByIdx",
    value: function getServiceByIdx(idx) {
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


      if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(serviceOption)) {
        return this.options.serviceDefinitions[serviceOption.name](serviceOption);
      }

      return null;
    } // This runs the service located at index `currentServiceIndex`.
    // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully

  }, {
    key: "locate",
    value: function locate(complete, error) {
      var service = this.getNextService();

      if (!service) {
        error(new Error('No services to run'));
        return;
      }

      this.callbackComplete = complete;
      this.callbackError = error;
      this.runService(service, this.runNextServiceOnError.bind(this));
    } // Potentially adds a callback to a url for jsonp.

  }, {
    key: "setupUrl",
    value: function setupUrl(service) {
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
    } // requires a `service` object that defines at least a `url` and `callback`

  }, {
    key: "runService",
    value: function runService(service, complete) {
      var _this2 = this;

      // basic check to ensure it resembles a `service`
      if (!service || !service.url || !service.callback) {
        return;
      } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


      var requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_7__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_7__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

      requestFunction(this.setupUrl(service), function (xhr) {
        // if `!xhr`, then `getScript` function was used, so there is no response text
        var responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
        // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
        // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

        if (service.__JSONP_DATA) {
          responseText = service.__JSONP_DATA;
          delete service.__JSONP_DATA;
        } // call the service callback with the response text (so it can parse the response)


        _this2.runServiceCallback.call(_this2, complete, service, responseText);
      }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
    } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
    // We need to run its callback which determines if its successful or not
    // `complete` is called on success or failure

  }, {
    key: "runServiceCallback",
    value: function runServiceCallback(complete, service, responseText) {
      var _this3 = this;

      // this is the function that is called if the service uses the async callback in its handler method
      var serviceResultHandler = function serviceResultHandler(asyncResult) {
        // if `result` is a valid value, then this function shouldn't really run
        // even if it is called by `service.callback`
        if (!result) {
          _this3.onServiceResult(complete, asyncResult);
        }
      }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
      // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


      var result = service.callback(serviceResultHandler, responseText);

      if (result) {
        this.onServiceResult(complete, result);
      }
    } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
    // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data

  }, {
    key: "onServiceResult",
    value: function onServiceResult(complete, result) {
      // convert result to nodejs style async callback
      if (result instanceof Error || result && result.error) {
        complete.call(this, result, null);
      } else {
        complete.call(this, null, result);
      }
    } // if `err` is set, the next service handler is called
    // if `err` is null, the `onComplete` handler is called with `data`

  }, {
    key: "runNextServiceOnError",
    value: function runNextServiceOnError(err, data) {
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
    }
  }, {
    key: "getCurrentServiceOpts",
    value: function getCurrentServiceOpts() {
      var val = this.options.services[this.currentServiceIndex];

      if (typeof val == 'string') {
        return {
          name: val
        };
      } else if (typeof val == 'function') {
        return val();
      } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isPlainObject"])(val)) {
        return val;
      } else {
        return {};
      }
    } // calls the `onComplete` callback after resetting the `currentServiceIndex`

  }, {
    key: "completeService",
    value: function completeService(fn, data) {
      this.currentServiceIndex = -1;
      fn && fn(data);
    }
  }, {
    key: "logError",
    value: function logError(err) {
      console.warn("The service[".concat(this.currentServiceIndex, "] (").concat(this.getServiceByIdx(idx).url, ") responded with the following error"), err);
    }
  }]);

  return Location;
}(_Base__WEBPACK_IMPORTED_MODULE_5__["default"]);



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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../options/popup */ "./src/options/popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");













var Popup =
/*#__PURE__*/
function (_Base) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Popup, _Base);

  function Popup(options) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Popup);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Popup).call(this, _options_popup__WEBPACK_IMPORTED_MODULE_7__["default"], options));
    _this.userCategories = {
      UNCATEGORIZED: 'DISMISS',
      ESSENTIAL: 'ALLOW',
      PERSONALIZATION: 'DISMISS',
      ANALYTICS: 'DISMISS',
      MARKETING: 'DISMISS'
    };
    _this.customStyles = {};
    _this.hasTransition = !!function () {
      var el = document.createElement('div');
      var trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (var prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); // returns true if `onComplete` was called

    if (_this.canUseCookies()) {
      // user has already answered
      _this.options.enabled = false;
    } // apply blacklist / whitelist


    if (_this.options.blacklistPage.includes(location.pathname)) {
      _this.options.enabled = false;
    }

    if (_this.options.whitelistPage.includes(location.pathname)) {
      _this.options.enabled = true;
    } // the full markup either contains the wrapper or it does not (for multiple instances)


    var cookiePopup = _this.options.window.replace('{{classes}}', _this.getPopupClasses().join(' ')).replace('{{children}}', _this.getPopupInnerMarkup()); // if user passes html, use it instead


    var customHTML = _this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (_this.options["static"]) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      var wrapper = _this.appendMarkup("<div class=\"cc-grower\">".concat(cookiePopup, "</div>"));

      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      _this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      _this.element.style.display = 'none';

      _this.element.classList.add('cc-invisible');
    } else {
      _this.element = _this.appendMarkup(cookiePopup);
    }

    _this.applyAutoDismiss();

    _this.applyRevokeButton();

    if (_this.options.autoOpen) {
      _this.autoOpen();
    }

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Popup, [{
    key: "open",
    value: function open() {
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
  }, {
    key: "close",
    value: function close(showRevoke) {
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
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      var _this2 = this;

      var el = this.element;
      if (!this.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
      // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
      // has a chance to run, then we run it ourselves

      if (this.afterTransition) {
        this.afterFadeOut(el);
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

        this.openingTimeout = setTimeout(function () {
          return _this2.afterFadeIn(el);
        }, fadeInTimeout);
      }
    }
    /**
     * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
     * There is a good reason why it's called in a timeout. Read 'fadeIn'
     */

  }, {
    key: "afterFadeIn",
    value: function afterFadeIn(element) {
      this.openingTimeout = null;
      element.classList.remove('cc-invisible');
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      var _this3 = this;

      if (!this.hasTransition || !this.element) return;

      if (this.openingTimeout) {
        clearTimeout(this.openingTimeout);
        this.afterFadeIn(this.element);
      }

      if (!this.element.classList.contains('cc-invisible')) {
        if (this.options["static"]) {
          this.element.parentNode.style.maxHeight = '';
        }

        this.afterTransition = function () {
          return _this3.afterFadeOut(_this3.element);
        };

        this.element.addEventListener(this.transitionEnd, this.afterTransition);
        this.element.classList.add('cc-invisible');
      }
    }
  }, {
    key: "afterFadeOut",
    value: function afterFadeOut(el) {
      el.style.display = 'none'; // after close and before open, the display should be none

      el.removeEventListener(this.transitionEnd, this.afterTransition);
      this.afterTransition = null;
    }
  }, {
    key: "isOpen",
    value: function isOpen() {
      return this.element && this.element.style.display == '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
    }
  }, {
    key: "toggleRevokeButton",
    value: function toggleRevokeButton(show) {
      if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
    }
  }, {
    key: "revokeChoice",
    value: function revokeChoice(preventOpen) {
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

  }, {
    key: "hasAnswered",
    value: function hasAnswered() {
      return this.getStatuses().some(function (status) {
        return !!status;
      });
    }
    /**
     * Indicates if the user has given consent to all of the categories
     * @return { array<boolean> } - true if consent has been given
     */

  }, {
    key: "hasConsented",
    value: function hasConsented() {
      return this.getStatuses().map(function (status) {
        return status === _constants__WEBPACK_IMPORTED_MODULE_8__["statusAllow"] || status === _constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"];
      });
    } // opens the popup if no answer has been given

  }, {
    key: "autoOpen",
    value: function autoOpen(options) {
      var hasAnswered = this.hasAnswered();

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

  }, {
    key: "setStatuses",
    value: function setStatuses() {
      var _this4 = this,
          _arguments = arguments;

      var _this$options$cookie = this.options.cookie,
          name = _this$options$cookie.name,
          expiryDays = _this$options$cookie.expiryDays,
          domain = _this$options$cookie.domain,
          path = _this$options$cookie.path,
          secure = _this$options$cookie.secure; // if `status` is valid

      var updateCategoryStatus = function updateCategoryStatus(categoryName, status) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isValidStatus"])(status)) {
          var cookieName = name + '_' + categoryName;
          var chosenBefore = _constants__WEBPACK_IMPORTED_MODULE_8__["statuses"].indexOf(Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getCookie"])(cookieName)) >= 0;
          console.log(cookieName, status, expiryDays, domain, path, secure);
          Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);

          _this4.emit("statusChanged", cookieName, status, chosenBefore);
        } else {
          _this4.clearStatuses();
        }
      };

      if (arguments.length === 0) {
        _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].forEach(function (category) {
          return updateCategoryStatus(category, _this4.userCategories[category]);
        });
      } else if (arguments.length === 1) {
        _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].forEach(function (category) {
          return updateCategoryStatus(category, _arguments[0]);
        });
      } else if (arguments.length > 1) {
        arguments.forEach(function (categoryStatus, index) {
          updateCategoryStatus(_this4.userCategories[index], categoryStatus);
        });
      }
    }
    /**
     * Get all cookie categoies statuses
     * @return { array<string> } - cookie categories status in order of categories
     */

  }, {
    key: "getStatuses",
    value: function getStatuses() {
      var _this5 = this;

      return _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].map(function (categoryName) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["getCookie"])(_this5.options.cookie.name + '_' + categoryName);
      });
    }
    /**
     * Clear all cookie categoies statuses
     */

  }, {
    key: "clearStatuses",
    value: function clearStatuses() {
      var _this$options$cookie2 = this.options.cookie,
          name = _this$options$cookie2.name,
          domain = _this$options$cookie2.domain,
          path = _this$options$cookie2.path;
      _constants__WEBPACK_IMPORTED_MODULE_8__["categories"].forEach(function (categoryName) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["setCookie"])(name + '_' + categoryName, '', -1, domain, path);
      });
    } // This is called on 'transitionend' (only on the transition of the fadeOut). That's because after we've faded out, we need to
    // set the display to 'none' (so there aren't annoying invisible popups all over the page). If for whenever reason this function
    // is not called (lack of support), the open/close mechanism will still work.

  }, {
    key: "afterFadeOut",
    value: function afterFadeOut(el) {
      el.style.display = 'none'; // after close and before open, the display should be none

      el.removeEventListener(this.transitionEnd, this.afterTransition);
      this.afterTransition = null;
    }
  }, {
    key: "canUseCookies",
    value: function canUseCookies() {
      var _this6 = this;

      if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
        return true;
      }

      var statusesValues = this.getStatuses();
      var matches = statusesValues.map(function (status, index) {
        return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _constants__WEBPACK_IMPORTED_MODULE_8__["categories"][index], Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isValidStatus"])(status));
      });
      var hasMatches = matches.filter(function (match) {
        return match[Object.keys(match)[0]];
      }).length > 0;
      statusesValues.forEach(function (status, index) {
        return _this6.userCategories[_constants__WEBPACK_IMPORTED_MODULE_8__["categories"][index]] === status ? status : _this6.userCategories[_constants__WEBPACK_IMPORTED_MODULE_8__["categories"][index]];
      });
      return hasMatches;
    } // top, bottom, left, right

  }, {
    key: "getPositionClasses",
    value: function getPositionClasses() {
      return this.options.position.split('-').map(function (pos) {
        return 'cc-' + pos;
      });
    }
  }, {
    key: "getPopupClasses",
    value: function getPopupClasses() {
      var opts = this.options;
      var positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isMobile"])() && opts.mobileForceFloat) {
        positionStyle = 'floating';
      }

      var classes = ['cc-' + positionStyle, // floating or banner
      'cc-type-' + opts.type, // add the compliance type
      'cc-theme-' + opts.theme];

      if (opts["static"]) {
        classes.push('cc-static');
      }

      classes.push.apply(classes, this.getPositionClasses()); // we only add extra styles if `palette` has been set to a valid value

      this.attachCustomPalette(this.options.palette); // if we override the palette, add the class that enables this

      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      return classes;
    }
  }, {
    key: "getPopupInnerMarkup",
    value: function getPopupInnerMarkup() {
      var interpolated = {};
      var opts = this.options; // removes link if showLink is false

      if (!opts.showLink) {
        opts.elements.link = '';
        opts.elements.messagelink = opts.elements.message;
      }

      Object.keys(opts.elements).forEach(function (prop) {
        interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(opts.elements[prop], function (name) {
          var str = opts.content[name];
          return name && typeof str == 'string' && str.length ? str : '';
        });
      }); // checks if the type is valid and defaults to info if it's not

      var complianceType = opts.compliance[opts.type];

      if (!complianceType) {
        complianceType = opts.compliance.info;
      } // build the compliance types from the already interpolated `elements`


      interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(complianceType, function (name) {
        return interpolated[name];
      }); // checks if the layout is valid and defaults to basic if it's not

      var layout = opts.layouts[opts.layout];

      if (!layout) {
        layout = opts.layouts.basic;
      }

      return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(layout, function (match) {
        return interpolated[match];
      });
    }
  }, {
    key: "appendMarkup",
    value: function appendMarkup(markup) {
      var _this7 = this;

      var opts = this.options;
      var div = document.createElement('div');
      var cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
      div.innerHTML = markup;
      var el = div.children[0];
      el.style.display = 'none';

      if (el.classList.contains('cc-window') && this.hasTransition) {
        el.classList.add('cc-invisible');
      }

      el.addEventListener('click', function (event) {
        return _this7.handleButtonClick(event);
      });
      el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
          _this7.userCategories[checkbox.name.toUpperCase()] = checkbox.checked ? 'ALLOW' : 'DENY';

          _this7.setStatuses();
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
  }, {
    key: "handleButtonClick",
    value: function handleButtonClick(event) {
      // returns the parent element with the specified class, or the original element - null if not found
      var btn = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

      if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
        this.setStatuses();
        this.close(true);
      }

      if (btn.classList.contains('cc-btn')) {
        var matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_8__["statuses"].map(function (str) {
          return str.toLowerCase().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        }).join('|') + ')\\b'));
        var match = matches && matches[1] || false;

        if (match) {
          this.setStatuses(match);
          this.close(true);
        }
      }

      if (btn.classList.contains('cc-close')) {
        this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);
        this.close(true);
      }

      if (btn.classList.contains('cc-revoke')) {
        this.revokeChoice();
      }
    }
  }, {
    key: "attachCustomPalette",
    value: function attachCustomPalette(palette) {
      var hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["hash"])(JSON.stringify(palette));
      var selector = 'cc-color-override-' + hashStr;
      var isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"])(palette);
      this.customStyleSelector = isValid ? selector : null;

      if (isValid) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_9__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
      }

      return isValid;
    }
  }, {
    key: "getEventPath",
    value: function getEventPath(event) {
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
  }, {
    key: "applyAutoDismiss",
    value: function applyAutoDismiss() {
      var _this8 = this;

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
            _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

            _this8.close(true);
          }, Math.floor(delay));
        } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
          this.onWindowScroll = function () {
            if (window.pageYOffset > Math.floor(scrollRange)) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

              _this8.close(true);

              window.removeEventListener('scroll', _this8.onWindowScroll, {
                passive: true
              });
              _this8.onWindowScroll = null;
            }
          };

          window.addEventListener('scroll', this.onWindowScroll, {
            passive: true
          });
        } else if (dismissOnWindowClick) {
          this.onWindowClick = function (evt) {
            if (!getEventPath(evt).some(function (element) {
              return _this8.options.ignoreClicksFrom.some(function (ignoredClick) {
                return element.classList && element.classList.contains(ignoredClick);
              });
            })) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

              _this8.close(true);

              window.removeEventListener('click', _this8.onWindowClick);
              window.removeEventListener('touchend', _this8.onWindowClick);
              _this8.onWindowClick = null;
            }
          };

          window.addEventListener('click', this.onWindowClick);
          window.addEventListener('touchend', this.onWindowClick);
        } else if (dismissOnLinkClick) {
          this.onLinkClick = function (evt) {
            if (getEventPath(evt).some(function (elem) {
              return typeof elem.tagName !== 'undefined' && elem.tagName === 'A';
            })) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

              _this8.close(true);

              window.removeEventListener('click', _this8.onLinkClick);
              _this8.onLinkClick = null;
            }
          };

          window.addEventListener('click', this.onLinkClick);
        } else if (dismissOnKeyPress) {
          this.onKeyPress = function (event) {
            var keyCode = event.keyCode;

            if (keyCode === 13) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusAllow"]);

              _this8.close(true);
            } else if (keyCode === 27) {
              _this8.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_8__["statusDismiss"]);

              _this8.close(true);
            }
          };

          window.addEventListener('onkeypress', this.onKeyPress);
        }
      }
    }
  }, {
    key: "applyRevokeButton",
    value: function applyRevokeButton() {
      // revokable is true if advanced compliance is selected
      if (this.options.type != 'info') this.options.revokable = true; // animateRevokable false for mobile devices

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isMobile"])()) this.options.animateRevokable = false;

      if (this.options.revokable) {
        var classes = this.getPositionClasses();

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
        this.revokeBtn = this.appendMarkup(revokeBtn);
        var btn = this.revokeBtn;

        if (this.options.animateRevokable) {
          var onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["throttle"])(function (evt) {
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
  }]);

  return Popup;
}(_Base__WEBPACK_IMPORTED_MODULE_6__["default"]);



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
    categories: " \n      <ul class=\"cc-categories\">\n        <li class=\"cc-category\">\n          <button class=\"cc-btn\" tabindex=\"0\"><input type=\"checkbox\" name=\"uncategorized\"/><span class=\"cc-btn-checkbox\"></span>Uncategorized</button>\n          <button class=\"cc-btn cc-info\" aria-label=\"Uncategorized Definition Button\" tabindex=\"1\">^</button>\n          <div class=\"cc-tooltip\">\n            <p>This is the category for cookies that don't fit any other category.</p>\n          </div>\n        </li>\n        <li class=\"cc-category\">\n          <button class=\"cc-btn\" tabindex=\"2\"><input type=\"checkbox\" name=\"essential\" checked disabled/><span class=\"cc-btn-checkbox\"></span>Essential</button>\n          <button class=\"cc-btn cc-info\" aria-label=\"Essential Definition Button\" tabindex=\"3\">^</button>\n          <div class=\"cc-tooltip\">\n            <p>This is the category for essential application or website opperation cookies.</p>\n          </div>\n        </li>\n        <li class=\"cc-category\">\n          <button class=\"cc-btn\" tabindex=\"4\"><input type=\"checkbox\" name=\"personalization\"/><span class=\"cc-btn-checkbox\"></span>Personalization</button>\n          <button class=\"cc-btn cc-info\" aria-label=\"Personalization Definition Button\" tabindex=\"5\">^</button>\n          <div class=\"cc-tooltip\">\n            <p>This is the category for cookies used to help peronalize the application to a specific user.</p>\n          </div>\n        </li>\n        <li class=\"cc-category\">\n          <button class=\"cc-btn\" tabindex=\"6\"><input type=\"checkbox\" name=\"analytics\"/><span class=\"cc-btn-checkbox\"></span>Analytics</button>\n          <button class=\"cc-btn cc-info\" aria-label=\"Analytics Definition Button\" tabindex=\"7\">^</button>\n          <div class=\"cc-tooltip\">\n            <p>This is the category for cookies used to help analyize data.</p>\n          </div>\n        </li>\n        <li class=\"cc-category\">\n          <button class=\"cc-btn\" tabindex=\"8\"><input type=\"checkbox\" name=\"marketing\"/><span class=\"cc-btn-checkbox\"></span>Marketing</button>\n          <button class=\"cc-btn cc-info\" aria-label=\"Marketing Definition Button\" tabindex=\"9\">^</button>\n          <div class=\"cc-tooltip\">\n            <p>This is the category for cookies used to help peronalize your internet shopping & advertisement experiences.</p>\n          </div>\n        </li>\n      </ul>\n    ",
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


var getScript = function getScript(url, callback, timeout) {
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
};
var makeAsyncRequest = function makeAsyncRequest(url, onComplete, timeout, postData, requestHeader) {
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


var getCookie = function getCookie(name) {
  var value = ' ' + document.cookie;
  var parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
var setCookie = function setCookie(name, value, expiryDays, domain, path, secure) {
  var exdate = new Date();
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
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");




var traverseDOMPath = function traverseDOMPath(elem, className) {
  return !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
};
var addCustomStylesheet = function addCustomStylesheet(hashStr, palette, prefix) {
  var colorStyles = {};
  var popup = palette.popup,
      button = palette.button,
      highlight = palette.highlight,
      saveButton = palette.saveButton; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_1__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_1__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_1__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles["".concat(prefix, " .cc-btn.cc-save")] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  var style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(function (_ref, index) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        prop = _ref2[0],
        value = _ref2[1];

    return style.sheet.insertRule("".concat(prop, "{").concat(value.join(';'), "}"), index);
  });
  return style;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, interpolateString, throttle, hash, normaliseHex, getContrast, getLuminance, getHoverColor, traverseDOMPath, addCustomStylesheet, isValidStatus, isPlainObject, isMobile, getScript, makeAsyncRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normaliseHex", function() { return normaliseHex; });
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
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");



var getCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"];
var setCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"];
var interpolateString = function interpolateString(str, callback) {
  return str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (matches, replaced) {
    return callback(replaced) || '';
  });
}; // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

var throttle = function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(void 0, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

var hash = function hash(str) {
  var hashNum = 0,
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

var normaliseHex = _style__WEBPACK_IMPORTED_MODULE_1__["normaliseHex"];
var getContrast = _style__WEBPACK_IMPORTED_MODULE_1__["getContrast"];
var getLuminance = _style__WEBPACK_IMPORTED_MODULE_1__["getLuminance"];
var getHoverColor = _style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"];

var traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"];
var addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"];

var isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"];
var isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"];
var isMobile = _validation__WEBPACK_IMPORTED_MODULE_3__["isMobile"];

var getScript = _async__WEBPACK_IMPORTED_MODULE_4__["getScript"];
var makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_4__["makeAsyncRequest"];

/***/ }),

/***/ "./src/utils/style.js":
/*!****************************!*\
  !*** ./src/utils/style.js ***!
  \****************************/
/*! exports provided: normaliseHex, getContrast, getLuminance, getHoverColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normaliseHex", function() { return normaliseHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });


var normaliseHex = function normaliseHex(hex) {
  return hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex;
}; // used to get text colors if not set

var getContrast = function getContrast(hex) {
  hex = normaliseHex(hex);
  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

var getLuminance = function getLuminance(hex) {
  var num = parseInt(normaliseHex(hex), 16),
      amt = 38,
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00ff) + amt,
      G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
var getHoverColor = function getHoverColor(hex) {
  hex = normaliseHex(hex); // for black buttons

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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");




/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

var isValidStatus = function isValidStatus(status) {
  return _constants__WEBPACK_IMPORTED_MODULE_1__["statuses"].indexOf(status) >= 0;
};
var isMobile = function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}; // The code "typeof obj === 'object' && obj !== null" allows Array objects

var isPlainObject = function isPlainObject(obj) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) === 'object' && obj !== null && obj.constructor == Object;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZWNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9CYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xlZ2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2E0M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2FzeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy92YWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbInN0YXR1c2VzIiwic3RhdHVzRGVueSIsInN0YXR1c0FsbG93Iiwic3RhdHVzRGlzbWlzcyIsImNhdGVnb3JpZXMiLCJDb29raWVDb25zZW50Iiwib3B0aW9ucyIsImFuc3dlcnMiLCJtYXAiLCJjYXRlZ29yeSIsImFuc3dlciIsImdldENvb2tpZSIsImlzVmFsaWRTdGF0dXMiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImVtaXQiLCJsZWdhbCIsImNvdW50cnlDb2RlIiwiaW5pdGlhbGl6YXRpb25Db21wbGV0ZSIsImNvZGUiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwibG9jYXRlIiwiaW5pdGlhbGl6YXRpb25FcnJvciIsInJlc3VsdCIsIkxlZ2FsIiwiYXBwbHlMYXciLCJQb3B1cCIsImVycm9yIiwiQmFzZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJ3aW5kb3ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwibG9vcFByb3BlcnRpZXMiLCJvdmVyd3JpdGVzIiwia2V5IiwidmFsdWUiLCJBcnJheSIsImVudHJpZXMiLCJyZWR1Y2UiLCJkZWFmdWx0T3B0aW9ucyIsIm1lcmdlT3B0aW9ucyIsIm9uIiwiYmluZCIsImRlZmF1bHRzIiwiZGVmYXVsdE9wdGlvbnMiLCJoYXNMYXciLCJpbmRleE9mIiwicmV2b2thYmxlIiwiZXhwbGljaXRBY3Rpb24iLCJjb3VudHJ5IiwiZ2V0IiwiZW5hYmxlZCIsInJlZ2lvbmFsTGF3IiwiZGlzbWlzc09uU2Nyb2xsIiwiZGlzbWlzc09uVGltZW91dCIsImN1cnJlbnRTZXJ2aWNlSW5kZXgiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4Iiwic2VydmljZXMiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJuYW1lIiwiYXNzaWduIiwic2VydmljZURlZmluaXRpb25zIiwiaXNQbGFpbk9iamVjdCIsImNvbXBsZXRlIiwiZ2V0TmV4dFNlcnZpY2UiLCJFcnJvciIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNlcnZpY2VPcHRzIiwiZ2V0Q3VycmVudFNlcnZpY2VPcHRzIiwidXJsIiwicmVwbGFjZSIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwiRGF0ZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlcnBvbGF0ZVVybCIsImNhbGxiYWNrIiwicmVxdWVzdEZ1bmN0aW9uIiwiaXNTY3JpcHQiLCJnZXRTY3JpcHQiLCJtYWtlQXN5bmNSZXF1ZXN0Iiwic2V0dXBVcmwiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJjYWxsIiwidGltZW91dCIsImRhdGEiLCJoZWFkZXJzIiwic2VydmljZVJlc3VsdEhhbmRsZXIiLCJhc3luY1Jlc3VsdCIsIm9uU2VydmljZVJlc3VsdCIsImVyciIsImxvZ0Vycm9yIiwibmV4dFNlcnZpY2UiLCJjb21wbGV0ZVNlcnZpY2UiLCJ2YWwiLCJmbiIsImNvbnNvbGUiLCJ3YXJuIiwidXNlckNhdGVnb3JpZXMiLCJVTkNBVEVHT1JJWkVEIiwiRVNTRU5USUFMIiwiUEVSU09OQUxJWkFUSU9OIiwiQU5BTFlUSUNTIiwiTUFSS0VUSU5HIiwiY3VzdG9tU3R5bGVzIiwiaGFzVHJhbnNpdGlvbiIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnMiLCJ0IiwiT1QiLCJtc1QiLCJNb3pUIiwiV2Via2l0VCIsInByZWZpeCIsImhhc093blByb3BlcnR5Iiwic3R5bGUiLCJjYW5Vc2VDb29raWVzIiwiYmxhY2tsaXN0UGFnZSIsImluY2x1ZGVzIiwicGF0aG5hbWUiLCJ3aGl0ZWxpc3RQYWdlIiwiY29va2llUG9wdXAiLCJnZXRQb3B1cENsYXNzZXMiLCJqb2luIiwiZ2V0UG9wdXBJbm5lck1hcmt1cCIsImN1c3RvbUhUTUwiLCJvdmVycmlkZUhUTUwiLCJ3cmFwcGVyIiwiYXBwZW5kTWFya3VwIiwiZGlzcGxheSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwbHlBdXRvRGlzbWlzcyIsImFwcGx5UmV2b2tlQnV0dG9uIiwiYXV0b09wZW4iLCJpc09wZW4iLCJmYWRlSW4iLCJ0b2dnbGVSZXZva2VCdXR0b24iLCJzaG93UmV2b2tlIiwiZmFkZU91dCIsImFmdGVyVHJhbnNpdGlvbiIsImFmdGVyRmFkZU91dCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsIm1heEhlaWdodCIsImNsaWVudEhlaWdodCIsImZhZGVJblRpbWVvdXQiLCJvcGVuaW5nVGltZW91dCIsImFmdGVyRmFkZUluIiwicmVtb3ZlIiwiY2xlYXJUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRyYW5zaXRpb25FbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvdyIsInJldm9rZUJ0biIsInByZXZlbnRPcGVuIiwiY2xlYXJTdGF0dXNlcyIsImdldFN0YXR1c2VzIiwic29tZSIsInN0YXR1cyIsImhhc0Fuc3dlcmVkIiwib3BlbiIsImNvb2tpZSIsImV4cGlyeURheXMiLCJkb21haW4iLCJwYXRoIiwic2VjdXJlIiwidXBkYXRlQ2F0ZWdvcnlTdGF0dXMiLCJjYXRlZ29yeU5hbWUiLCJjb29raWVOYW1lIiwiY2hvc2VuQmVmb3JlIiwibG9nIiwic2V0Q29va2llIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImNhdGVnb3J5U3RhdHVzIiwiaW5kZXgiLCJuYXZpZ2F0b3IiLCJjb29raWVFbmFibGVkIiwiQ29va2llc09LIiwic3RhdHVzZXNWYWx1ZXMiLCJtYXRjaGVzIiwiaGFzTWF0Y2hlcyIsIm1hdGNoIiwicG9zaXRpb24iLCJzcGxpdCIsInBvcyIsIm9wdHMiLCJwb3NpdGlvblN0eWxlIiwiaXNNb2JpbGUiLCJtb2JpbGVGb3JjZUZsb2F0IiwiY2xhc3NlcyIsInR5cGUiLCJ0aGVtZSIsInB1c2giLCJhcHBseSIsImdldFBvc2l0aW9uQ2xhc3NlcyIsImF0dGFjaEN1c3RvbVBhbGV0dGUiLCJwYWxldHRlIiwiY3VzdG9tU3R5bGVTZWxlY3RvciIsImludGVycG9sYXRlZCIsInNob3dMaW5rIiwiZWxlbWVudHMiLCJsaW5rIiwibWVzc2FnZWxpbmsiLCJtZXNzYWdlIiwicHJvcCIsImludGVycG9sYXRlU3RyaW5nIiwic3RyIiwiY29udGVudCIsImNvbXBsaWFuY2VUeXBlIiwiY29tcGxpYW5jZSIsImluZm8iLCJsYXlvdXQiLCJsYXlvdXRzIiwiYmFzaWMiLCJtYXJrdXAiLCJkaXYiLCJjb250IiwiY29udGFpbmVyIiwibm9kZVR5cGUiLCJib2R5IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJldmVudCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrYm94IiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic2V0U3RhdHVzZXMiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhdXRvQXR0YWNoIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJidG4iLCJ0cmF2ZXJzZURPTVBhdGgiLCJ0YXJnZXQiLCJjbG9zZSIsImNsYXNzTmFtZSIsIlJlZ0V4cCIsInRvTG93ZXJDYXNlIiwicmV2b2tlQ2hvaWNlIiwiaGFzaFN0ciIsImhhc2giLCJzZWxlY3RvciIsImlzVmFsaWQiLCJhZGRDdXN0b21TdHlsZXNoZWV0IiwiY29tcG9zZWRQYXRoIiwiYXJyIiwiZGVsYXkiLCJzY3JvbGxSYW5nZSIsImRpc21pc3NPbkxpbmtDbGljayIsImRpc21pc3NPbldpbmRvd0NsaWNrIiwiZGlzbWlzc09uS2V5UHJlc3MiLCJkaXNtaXNzVGltZW91dCIsIk1hdGgiLCJmbG9vciIsIm9uV2luZG93U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXNzaXZlIiwib25XaW5kb3dDbGljayIsImV2dCIsImdldEV2ZW50UGF0aCIsImlnbm9yZUNsaWNrc0Zyb20iLCJpZ25vcmVkQ2xpY2siLCJvbkxpbmtDbGljayIsImVsZW0iLCJ0YWdOYW1lIiwib25LZXlQcmVzcyIsImtleUNvZGUiLCJhbmltYXRlUmV2b2thYmxlIiwicG9saWN5Iiwib25Nb3VzZU1vdmUiLCJ0aHJvdHRsZSIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwiaXBpbmZvIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwidG9FcnJvciIsImlwaW5mb2RiIiwic3RhdHVzQ29kZSIsInN0YXR1c01lc3NhZ2UiLCJtYXhtaW5kIiwiZ2VvaXAyIiwiaXNvX2NvZGUiLCJoZWFkZXIiLCJkaXNtaXNzIiwiYWxsb3ciLCJkZW55IiwiaHJlZiIsInNhdmUiLCJtb2RhbCIsInRpbWVvdXRJZHgiLCJzIiwic3JjIiwiYXN5bmMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJzdGF0ZSIsInJlYWR5U3RhdGUiLCJ0ZXN0Iiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlciIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsInNldFJlcXVlc3RIZWFkZXIiLCJpc0FycmF5IiwicmVxdWVzdEhlYWRlcnMiLCJpIiwibCIsInNlbmQiLCJwYXJ0cyIsInBvcCIsInNoaWZ0IiwiZXhkYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwiY29sb3JTdHlsZXMiLCJwb3B1cCIsImJ1dHRvbiIsImhpZ2hsaWdodCIsInNhdmVCdXR0b24iLCJ0ZXh0IiwiZ2V0Q29udHJhc3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvciIsImlkIiwiaGVhZCIsInNoZWV0IiwiaW5zZXJ0UnVsZSIsInJlcGxhY2VkIiwibGltaXQiLCJ3YWl0IiwiaGFzaE51bSIsImNociIsImxlbiIsImNoYXJDb2RlQXQiLCJub3JtYWxpc2VIZXgiLCJnZXRMdW1pbmFuY2UiLCJkb20iLCJ2YWxpZGF0aW9uIiwiYXN5bmNGbnMiLCJoZXgiLCJzdWJzdHIiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsInlpcSIsIm51bSIsImFtdCIsIlIiLCJCIiwiRyIsInRvU3RyaW5nIiwic2xpY2UiLCJ1c2VyQWdlbnQiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUEvQztBQUNELENBSk0sQzs7Ozs7Ozs7Ozs7O0FDakNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUVBO0FBRUE7Ozs7OztBQUtPLElBQU1wWCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUE2SyxNQUFNO0FBQUEsU0FBSXpMLG1EQUFRLENBQUNzRCxPQUFULENBQWlCbUksTUFBakIsS0FBNEIsQ0FBaEM7QUFBQSxDQUE1QjtBQUVBLElBQU04QixRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFNBQ3RCLGlFQUFpRTBILElBQWpFLENBQXVFdEksU0FBUyxDQUFDbU0sU0FBakYsQ0FEc0I7QUFBQSxDQUFqQixDLENBR1A7O0FBQ08sSUFBTXJVLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQTFELEdBQUc7QUFBQSxTQUFJLHFFQUFPQSxHQUFQLE1BQWUsUUFBZixJQUEyQkEsR0FBRyxLQUFLLElBQW5DLElBQTJDQSxHQUFHLENBQUNnWSxXQUFKLElBQW1CL1gsTUFBbEU7QUFBQSxDQUF6QixDIiwiZmlsZSI6ImNvb2tpZWNvbnNlbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29va2llY29uc2VudC5qc1wiKTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5TGltaXQ7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7IH1cXG5cXG4uY2Mtd2luZG93LmNjLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLyogb25seSBhbmltYXRlIGlmaGFzIGNsYXNzICdjYy1hbmltYXRlJyAqL1xcbi5jYy1hbmltYXRlLmNjLXJldm9rZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1ncm93ZXIge1xcbiAgLyogSW5pdGlhbGx5IHdlIGRvbid0IHdhbnQgYW55IGhlaWdodCwgYW5kIHdlIHdhbnQgdGhlIGNvbnRlbnRzIHRvIGJlIGhpZGRlbiAqL1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBTZXQgb3VyIHRyYW5zaXRpb25zIHVwLiAqL1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxczsgfVxcblxcbi8qIHRoZSBwb3B1cCB3aW5kb3cgKi9cXG4uY2Mtd2luZG93LFxcbi5jYy1yZXZva2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBleGNsdWRlIHBhZGRpbmcgd2hlbiBkZWFsaW5nIHdpdGggd2lkdGggKi9cXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIENhbGlicmksIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLyogYnkgc2V0dGluZyB0aGUgYmFzZSBmb250IGhlcmUsIHdlIGNhbiBzaXplIHRoZSByZXN0IG9mIHRoZSBwb3B1cCB1c2luZyBDU1MgYGVtYCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgLyogdGhlIGZvbGxvd2luZyBhcmUgcmFuZG9tIHVuanVzdGlmaWVkIHN0eWxlcyAtIGp1c3QgYmVjYXVzZSAtIHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkICovXFxuICB6LWluZGV4OiA5OTk5OyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1zdGF0aWMge1xcbiAgcG9zaXRpb246IHN0YXRpYzsgfVxcblxcbi8qIDIgYmFzaWMgdHlwZXMgb2Ygd2luZG93IC0gZmxvYXRpbmcgLyBiYW5uZXIgKi9cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC13aWR0aDogMjRlbTtcXG4gIC8qIDFlbSA9PSAxNnB4IHRoZXJlZm9yZSAyNGVtID09IDM4NHB4ICovXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgcGFkZGluZzogMWVtIDEuOGVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuLmNjLXJldm9rZSB7XFxuICBwYWRkaW5nOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyogY2xpY2thYmxlIHRoaW5ncyAqL1xcbi5jYy1idG4sXFxuLmNjLWxpbmssXFxuLmNjLWNsb3NlLFxcbi5jYy1yZXZva2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNjLWxpbmsge1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1saW5rOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uY2MtbGluazphY3RpdmUsXFxuLmNjLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5pdGlhbDsgfVxcblxcbi5jYy1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAwLjRlbSAwLjhlbTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmhvdmVyLFxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVlbTtcXG4gIHJpZ2h0OiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS42ZW07XFxuICBvcGFjaXR5OiAwLjk7XFxuICAvKiBzZWVpbmcgYXMgdGhpcyBjb250YWlucyB0ZXh0IGFuZCBub3QgYW4gaW1hZ2UsIHRoZSBlbGVtZW50IHRhbGxlciB0aGFuIGl0IGlzIHdpZGUgKGJlY2F1c2UgaXQgaXMgdGV4dCkgKi9cXG4gIC8qICAtIHdlIHdhbnQgaXQgdG8gYmUgYSBzcXVhcmUsIGJlY2F1c2UgaXQncyBhY3RpbmcgYXMgYW4gaWNvbiAqL1xcbiAgLyogIC0gc2V0dGluZyB0aGUgbGluZSBoZWlnaHQgbm9ybWFsaXNlcyB0aGUgaGVpZ2h0ICovXFxuICBsaW5lLWhlaWdodDogMC43NTsgfVxcblxcbi5jYy1jbG9zZTpob3ZlcixcXG4uY2MtY2xvc2U6Zm9jdXMge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi8qIFRoaXMgZmlsZSBzaG91bGQgY29udGFpbiBzdHlsZXMgdGhhdCBtb2RpZmllcyB0aGUgcG9wdXAgbGF5b3V0LiAqL1xcbi8qIEJ5IGxheW91dCwgd2UgbWVhbiB0aGUgcGh5c2ljYWwgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRzIG9uIHRoZSBwb3B1cCB3aW5kb3csIGFuZCB0aGUgbWFyZ2luIC8gcGFkZGluZyBhcm91bmQgdGhvc2UgZWxlbWVudHMuICovXFxuLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41ZW07IH1cXG5cXG4uY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtbGVmdCB7XFxuICBsZWZ0OiAzZW07XFxuICByaWdodDogdW5zZXQ7IH1cXG5cXG4uY2MtcmV2b2tlLmNjLXJpZ2h0IHtcXG4gIHJpZ2h0OiAzZW07XFxuICBsZWZ0OiB1bnNldDsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZMT0FUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogdGhlc2UgY2xhc3NlcyBwb3NpdGlvbiB0aGUgZmxvYXRpbmcgZWxlbWVudCAqL1xcbi5jYy10b3Age1xcbiAgdG9wOiAxZW07IH1cXG5cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07IH1cXG5cXG4uY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDFlbTsgfVxcblxcbi5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAxZW07IH1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLWZsb2F0aW5nIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLmNjLXdpbmRvdy5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSB7XFxuICBmbGV4OiAxIDAgYXV0bzsgfVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRvcCB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7IH1cXG5cXG4uY2MtYmFubmVyLmNjLWJvdHRvbSB7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTsgfVxcblxcbi8qIENPTVBMSUFOQ0UgQk9YICovXFxuLmNjLWNvbXBsaWFuY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2UgPiAuY2MtYnRuIHtcXG4gIGZsZXg6IDE7IH1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07IH1cXG5cXG4vKiBDYXRlZ29yaWVzIExheW91dCAqL1xcbi5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMCAycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0biB7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyMnB4KTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm8ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciwgLmNjLXdpbmRvdy5jYy1mbG9hdGluZywgLmNjLXdpbmRvdy5jYy1yaWdodCwgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1jb21wbGlhbmNlIHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICBtYXJnaW46IDhweCAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4OyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCJ7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbX2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIihcIi5jb25jYXQoaXRlbVsyXSwgXCIpIGFuZCAoXCIpLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIilcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCkuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9ICRnZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBSZWZsZWN0QXBwbHkodGhpcy5saXN0ZW5lciwgdGhpcy50YXJnZXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3Qgc3RhdHVzZXMgPSBbIFwiREVOWVwiLCBcIkFMTE9XXCIsIFwiRElTTUlTU1wiIF1cbmV4cG9ydCBjb25zdCBzdGF0dXNEZW55ID0gXCJERU5ZXCJcbmV4cG9ydCBjb25zdCBzdGF0dXNBbGxvdyA9IFwiQUxMT1dcIlxuZXhwb3J0IGNvbnN0IHN0YXR1c0Rpc21pc3MgPSBcIkRJU01JU1NcIlxuXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllcyA9IFsgXCJVTkNBVEVHT1JJWkVEXCIsIFwiRVNTRU5USUFMXCIsIFwiUEVSU09OQUxJWkFUSU9OXCIsIFwiQU5BTFlUSUNTXCIsIFwiTUFSS0VUSU5HXCIgXSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL21vZGVscy9CYXNlXCJcbmltcG9ydCBMZWdhbCBmcm9tIFwiLi9tb2RlbHMvTGVnYWxcIlxuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL21vZGVscy9Mb2NhdGlvblwiXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vbW9kZWxzL1BvcHVwXCJcblxuaW1wb3J0IHsgY2F0ZWdvcmllcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzVmFsaWRTdGF0dXMgfSBmcm9tIFwiLi91dGlsc1wiXG5cbi8vIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIGFwcCBieSBjb21iaW5pbmcgdGhlIHVzZSBvZiB0aGUgUG9wdXAsIExvY2F0b3IgYW5kIExhdyBtb2R1bGVzXG4vLyBZb3UgY2FuIHN0cmluZyB0b2dldGhlciB0aGVzZSB0aHJlZSBtb2R1bGVzIHlvdXJzZWxmIGhvd2V2ZXIgeW91IHdhbnQsIGJ5IHdyaXRpbmcgYSBuZXcgZnVuY3Rpb24uXG5cbmNsYXNzIENvb2tpZUNvbnNlbnQgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKXtcbiAgICBzdXBlciggb3B0aW9ucyApXG5cbiAgICBjb25zdCBhbnN3ZXJzID0gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5ID0+IHtcbiAgICAgIGNvbnN0IGFuc3dlciA9IGdldENvb2tpZSgnY29va2llY29uc2VudF9zdGF0dXNfJytjYXRlZ29yeSlcbiAgICAgIHJldHVybiBpc1ZhbGlkU3RhdHVzKGFuc3dlcikgPyB7IFtjYXRlZ29yeV06IGFuc3dlciB9IDogdW5kZWZpbmVkXG4gICAgfSkuZmlsdGVyKG9iaiA9PiBvYmogPyBvYmpbT2JqZWN0LmtleXMob2JqKVswXV0gOiBmYWxzZSlcblxuICAgIC8vIGlmIHRoZXkgaGF2ZSBhbHJlYWR5IGFuc3dlcmVkXG4gICAgaWYgKGFuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJpbml0aWFsaXplZFwiLCBhbnN3ZXJzICkgKVxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sZWdhbCAmJiB0aGlzLm9wdGlvbnMubGVnYWwuY291bnRyeUNvZGUgKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKCB7IGNvZGU6IHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSB9IClcbiAgICB9IGVsc2UgaWYgKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKSB7XG4gICAgICByZXR1cm4gbmV3IExvY2F0aW9uKCB0aGlzLm9wdGlvbnMubG9jYXRpb24gKS5sb2NhdGUoIHRoaXMuaW5pdGlhbGl6YXRpb25Db21wbGV0ZSwgdGhpcy5pbml0aWFsaXphdGlvbkVycm9yIClcbiAgICB9XG4gICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKHt9KVxuICB9XG4gIGluaXRpYWxpemF0aW9uQ29tcGxldGUoIHJlc3VsdCApe1xuICAgIGlmIChyZXN1bHQuY29kZSkge1xuICAgICAgdGhpcy5vcHRpb25zID0gbmV3IExlZ2FsKHRoaXMub3B0aW9ucy5sZWdhbCkuYXBwbHlMYXcoIHRoaXMub3B0aW9ucywgcmVzdWx0LmNvZGUgKVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoXCJpbml0aWFsaXplZFwiLCBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApICksIDAgKVxuICB9XG4gIGluaXRpYWxpemF0aW9uRXJyb3IoIGVycm9yICkge1xuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJlcnJvclwiLCBlcnJvciwgbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMgKSApLCAwIClcbiAgfVxufVxuXG5pZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gQ29va2llQ29uc2VudFxufSBlbHNlIHtcbiAgd2luZG93LkNvb2tpZUNvbnNlbnQgPSBDb29raWVDb25zZW50XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCJcblxuY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG5jb25zdCBsb29wUHJvcGVydGllcyA9IG92ZXJ3cml0ZXMgPT4gKG9iaiwgW2tleSwgdmFsdWVdKSA9PiB7XG4gIGlmIChvdmVyd3JpdGVzIGluc3RhbmNlb2YgT2JqZWN0ICYmIG92ZXJ3cml0ZXNba2V5XSApIHtcbiAgICBvYmpba2V5XSA9IFxuICAgICAgdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgIXZhbHVlIGluc3RhbmNlb2YgQXJyYXlcbiAgICAgID8gT2JqZWN0LmVudHJpZXModmFsdWUpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzW2tleV0pLCB7fSlcbiAgICAgIDogb3ZlcndyaXRlc1trZXldIGluc3RhbmNlb2YgT2JqZWN0ICYmICFvdmVyd3JpdGVzW2tleV0gaW5zdGFuY2VvZiBBcnJheVxuICAgICAgPyB2YWx1ZVxuICAgICAgOiBvdmVyd3JpdGVzW2tleV1cbiAgfSBlbHNlIHtcbiAgICAgIG9ialtrZXldID0gdmFsdWVcbiAgfVxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuICBjb25zdHJ1Y3RvciggZGVhZnVsdE9wdGlvbnMsIG9wdGlvbnMgPSB7fSApe1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMubWVyZ2VPcHRpb25zKCBkZWFmdWx0T3B0aW9ucywgb3B0aW9ucyApXG4gICAgdGhpcy5vbiA9IGVtaXR0ZXIub24uYmluZCggZW1pdHRlciApXG4gICAgdGhpcy5lbWl0ID0gZW1pdHRlci5lbWl0LmJpbmQoIGVtaXR0ZXIgKVxuICB9XG4gIG1lcmdlT3B0aW9ucyggZGVmYXVsdHMsIG92ZXJ3cml0ZXMgKXtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLnJlZHVjZShsb29wUHJvcGVydGllcyhvdmVyd3JpdGVzKSwge30pXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sZWdhbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FsIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKSB7XG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgfVxuICBnZXQoIGNvdW50cnlDb2RlICl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0xhdzogdGhpcy5vcHRpb25zLmhhc0xhdy5pbmRleE9mKGNvdW50cnlDb2RlKSA+PSAwLFxuICAgICAgcmV2b2thYmxlOiB0aGlzLm9wdGlvbnMucmV2b2thYmxlLmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICBleHBsaWNpdEFjdGlvbjogdGhpcy5vcHRpb25zLmV4cGxpY2l0QWN0aW9uLmluZGV4T2YoY291bnRyeUNvZGUpID49IDBcbiAgICB9XG4gIH1cbiAgYXBwbHlMYXcoIG9wdGlvbnMsIGNvdW50cnlDb2RlICl7XG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKVxuXG4gICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgLy8gVGhlIGNvdW50cnkgaGFzIG5vIGNvb2tpZSBsYXdcbiAgICAgIG9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoIFwibm9Db29raWVMYXdcIiwgY291bnRyeUNvZGUsIGNvdW50cnkgKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcbiAgICAgIGlmIChjb3VudHJ5LnJldm9rYWJsZSkge1xuICAgICAgICAvLyBXZSBtdXN0IHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJldm9rZSBjb25zZW50IGF0IGEgbGF0ZXIgdGltZVxuICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50cnkuZXhwbGljaXRBY3Rpb24pIHtcbiAgICAgICAgLy8gVGhlIHVzZXIgbXVzdCBleHBsaWNpdGx5IGNsaWNrIHRoZSBjb25zZW50IGJ1dHRvblxuICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sb2NhdGlvblwiXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBnZXRTY3JpcHQsIG1ha2VBc3luY1JlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHNcIlxuXG4vLyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHdlIGhhdmUgYWxyZWFkeSBzZXQgdXAuXG4vLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcbi8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbi8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxuLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxuLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbiBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xIC8vIHRoZSBpbmRleCAoaW4gb3B0aW9ucykgb2YgdGhlIHNlcnZpY2Ugd2UncmUgY3VycmVudGx5IHVzaW5nXG4gIH1cblxuICBnZXROZXh0U2VydmljZSgpIHtcbiAgICBsZXQgc2VydmljZVxuICAgIGRvIHtcbiAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleClcbiAgICB9IHdoaWxlIChcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcbiAgICAgICFzZXJ2aWNlXG4gICAgKVxuXG4gICAgcmV0dXJuIHNlcnZpY2VcbiAgfVxuXG4gIGdldFNlcnZpY2VCeUlkeChpZHgpIHtcbiAgICAvLyBUaGlzIGNhbiBlaXRoZXIgYmUgdGhlIG5hbWUgb2YgYSBkZWZhdWx0IGxvY2F0aW9uU2VydmljZSwgb3IgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF1cblxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZHluYW1pY09wdHMgPSBzZXJ2aWNlT3B0aW9uKClcbiAgICAgIHJldHVybiBkeW5hbWljT3B0cy5uYW1lID8gXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgZHluYW1pY09wdHMsXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXG4gICAgICAgICkgOiBkeW5hbWljT3B0c1xuICAgIH1cblxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKClcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgYXNzdW1lIHtuYW1lOiAnaXBpbmZvJywgLi4ub3RoZXJPcHRpb25zfVxuICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxuICAgIGlmIChpc1BsYWluT2JqZWN0KHNlcnZpY2VPcHRpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxuICAgICAgICBzZXJ2aWNlT3B0aW9uXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cbiAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcbiAgbG9jYXRlKGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcblxuICAgIGlmICghc2VydmljZSkge1xuICAgICAgZXJyb3IobmV3IEVycm9yKCdObyBzZXJ2aWNlcyB0byBydW4nKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgdGhpcy5jYWxsYmFja0Vycm9yID0gZXJyb3JcblxuICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cbiAgc2V0dXBVcmwoc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VPcHRzID0gdGhpcy5nZXRDdXJyZW50U2VydmljZU9wdHMoKVxuICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xuICAgICAgaWYgKHBhcmFtID09PSAnY2FsbGJhY2snKSB7XG4gICAgICAgIGNvbnN0IHRlbXBOYW1lID0gJ2NhbGxiYWNrJyArIERhdGUubm93KClcbiAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wTmFtZVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtIGluIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXG4gIHJ1blNlcnZpY2Uoc2VydmljZSwgY29tcGxldGUpIHtcbiAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgaWYgKCFzZXJ2aWNlIHx8ICFzZXJ2aWNlLnVybCB8fCAhc2VydmljZS5jYWxsYmFjaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxuICAgIGNvbnN0IHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0XG5cbiAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxuICAgIHJlcXVlc3RGdW5jdGlvbihcbiAgICAgIHRoaXMuc2V0dXBVcmwoc2VydmljZSksXG4gICAgICB4aHIgPT4ge1xuICAgICAgICAvLyBpZiBgIXhocmAsIHRoZW4gYGdldFNjcmlwdGAgZnVuY3Rpb24gd2FzIHVzZWQsIHNvIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHRleHRcbiAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IHhociA/IHhoci5yZXNwb25zZVRleHQgOiAnJ1xuXG4gICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cbiAgICAgICAgLy8gaWYgdGhlIHNjcmlwdCBpcyBKU09OUCwgdGhlbiBhIHRpbWUgZGVmaW5lZCBmdW5jdGlvbiBgY2FsbGJhY2tfe0RhdGUubm93fWAgaGFzIGFscmVhZHlcbiAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XG4gICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xuICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHNlcnZpY2UuX19KU09OUF9EQVRBXG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXG4gICAgICAgIHRoaXMucnVuU2VydmljZUNhbGxiYWNrLmNhbGwodGhpcywgY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dClcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcbiAgICAgIHNlcnZpY2UuZGF0YSxcbiAgICAgIHNlcnZpY2UuaGVhZGVyc1xuICAgIClcblxuICAgIC8vIGBzZXJ2aWNlLmRhdGFgIGFuZCBgc2VydmljZS5oZWFkZXJzYCBhcmUgb3B0aW9uYWwgKHRoZXkgb25seSBjb3VudCBpZiBgIXNlcnZpY2UuaXNTY3JpcHRgIGFueXdheSlcbiAgfVxuXG4gIC8vIFRoZSBzZXJ2aWNlIHJlcXVlc3QgaGFzIHJ1biAoYW5kIHBvc3NpYmx5IGhhcyBhIGByZXNwb25zZVRleHRgKSBbbm8gYHJlc3BvbnNlVGV4dGAgaWYgYGlzU2NyaXB0YF1cbiAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XG4gIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICBydW5TZXJ2aWNlQ2FsbGJhY2soIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQgKSB7XG4gICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXG4gICAgY29uc3Qgc2VydmljZVJlc3VsdEhhbmRsZXIgPSBhc3luY1Jlc3VsdCA9PiB7XG4gICAgICAvLyBpZiBgcmVzdWx0YCBpcyBhIHZhbGlkIHZhbHVlLCB0aGVuIHRoaXMgZnVuY3Rpb24gc2hvdWxkbid0IHJlYWxseSBydW5cbiAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCBhc3luY1Jlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcbiAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XG4gICAgY29uc3QgcmVzdWx0ID0gc2VydmljZS5jYWxsYmFjayhzZXJ2aWNlUmVzdWx0SGFuZGxlciwgcmVzcG9uc2VUZXh0KVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCByZXN1bHQgKVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cbiAgLy8gYHJlc3VsdGAgd2lsbCBiZSB3aGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYC4gQSBzZXJ2aWNlIGNhbGxiYWNrIHNob3VsZCBwcm92aWRlIGFuIG9iamVjdCB3aXRoIGRhdGFcbiAgb25TZXJ2aWNlUmVzdWx0KGNvbXBsZXRlLCByZXN1bHQpIHtcbiAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpKSB7XG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIHJlc3VsdCwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgLy8gaWYgYGVycmAgaXMgc2V0LCB0aGUgbmV4dCBzZXJ2aWNlIGhhbmRsZXIgaXMgY2FsbGVkXG4gIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcbiAgcnVuTmV4dFNlcnZpY2VPbkVycm9yKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRoaXMubG9nRXJyb3IoZXJyKVxuXG4gICAgICBjb25zdCBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKVxuXG4gICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlKG5leHRTZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcbiAgICAgICAgICBuZXcgRXJyb3IoJ0FsbCBzZXJ2aWNlcyBmYWlsZWQnKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwodGhpcywgdGhpcy5jYWxsYmFja0NvbXBsZXRlLCBkYXRhKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRTZXJ2aWNlT3B0cygpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7bmFtZTogdmFsfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdmFsKClcbiAgICB9ZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgYWZ0ZXIgcmVzZXR0aW5nIHRoZSBgY3VycmVudFNlcnZpY2VJbmRleGBcbiAgY29tcGxldGVTZXJ2aWNlKGZuLCBkYXRhKSB7XG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTFcblxuICAgIGZuICYmIGZuKGRhdGEpXG4gIH1cblxuICBsb2dFcnJvcihlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgVGhlIHNlcnZpY2VbJHt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXh9XSAoJHt0aGlzLmdldFNlcnZpY2VCeUlkeChpZHgpLnVybH0pIHJlc3BvbmRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3JgLFxuICAgICAgIGVyclxuICAgIClcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL3BvcHVwXCJcbmltcG9ydCB7XG4gIGNhdGVnb3JpZXMsXG4gIHN0YXR1c2VzLFxuICBzdGF0dXNEaXNtaXNzLFxuICBzdGF0dXNBbGxvd1xufSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcbmltcG9ydCB7XG4gIGFkZEN1c3RvbVN0eWxlc2hlZXQsXG4gIGdldENvb2tpZSxcbiAgaGFzaCxcbiAgaW50ZXJwb2xhdGVTdHJpbmcsXG4gIGlzTW9iaWxlLFxuICBpc1BsYWluT2JqZWN0LFxuICBpc1ZhbGlkU3RhdHVzLFxuICBzZXRDb29raWUsXG4gIHRocm90dGxlLFxuICB0cmF2ZXJzZURPTVBhdGgsXG59IGZyb20gXCIuLi91dGlsc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zICkge1xuICAgIHN1cGVyKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXG4gICAgdGhpcy51c2VyQ2F0ZWdvcmllcyA9IHtcbiAgICAgIFVOQ0FURUdPUklaRUQgIDogJ0RJU01JU1MnLFxuICAgICAgRVNTRU5USUFMICAgICAgOiAnQUxMT1cnLFxuICAgICAgUEVSU09OQUxJWkFUSU9OOiAnRElTTUlTUycsXG4gICAgICBBTkFMWVRJQ1MgICAgICA6ICdESVNNSVNTJyxcbiAgICAgIE1BUktFVElORyAgICAgIDogJ0RJU01JU1MnXG4gICAgfVxuICAgIHRoaXMuY3VzdG9tU3R5bGVzID0ge31cbiAgICB0aGlzLmhhc1RyYW5zaXRpb24gPSAhIShmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGNvbnN0IHRyYW5zID0ge1xuICAgICAgICB0OiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgIE9UOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICAgICBtc1Q6ICdNU1RyYW5zaXRpb25FbmQnLFxuICAgICAgICBNb3pUOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgICAgIFdlYmtpdFQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICAgICAgfVxuICBcbiAgICAgIGZvciAobGV0IHByZWZpeCBpbiB0cmFucykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHJhbnMuaGFzT3duUHJvcGVydHkocHJlZml4KSAmJlxuICAgICAgICAgIHR5cGVvZiBlbC5zdHlsZVtwcmVmaXggKyAncmFuc2l0aW9uJ10gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cmFuc1twcmVmaXhdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnJ1xuICAgIH0pKClcblxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxuICAgIGlmICh0aGlzLmNhblVzZUNvb2tpZXMoKSkge1xuICAgICAgLy8gdXNlciBoYXMgYWxyZWFkeSBhbnN3ZXJlZFxuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBhcHBseSBibGFja2xpc3QgLyB3aGl0ZWxpc3RcbiAgICBpZiAodGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMud2hpdGVsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHRoZSBmdWxsIG1hcmt1cCBlaXRoZXIgY29udGFpbnMgdGhlIHdyYXBwZXIgb3IgaXQgZG9lcyBub3QgKGZvciBtdWx0aXBsZSBpbnN0YW5jZXMpXG4gICAgbGV0IGNvb2tpZVBvcHVwID0gdGhpcy5vcHRpb25zLndpbmRvd1xuICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgdGhpcy5nZXRQb3B1cENsYXNzZXMoKS5qb2luKCcgJykpXG4gICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgdGhpcy5nZXRQb3B1cElubmVyTWFya3VwKCkpXG5cbiAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxuICAgIGNvbnN0IGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MXG4gICAgaWYgKHR5cGVvZiBjdXN0b21IVE1MID09ICdzdHJpbmcnICYmIGN1c3RvbUhUTUwubGVuZ3RoICkge1xuICAgICAgY29va2llUG9wdXAgPSBjdXN0b21IVE1MXG4gICAgfVxuXG4gICAgLy8gaWYgc3RhdGljLCB3ZSBuZWVkIHRvIGdyb3cgdGhlIGVsZW1lbnQgZnJvbSAwIGhlaWdodCBzbyBpdCBkb2Vzbid0IGp1bXAgdGhlIHBhZ2VcbiAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcbiAgICBcbiAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgLy8gYGdyb3dlcmAgaXMgYSB3cmFwcGVyIGRpdiB3aXRoIGEgaGlkZGVuIG92ZXJmbG93IHdob3NlIGhlaWdodCBpcyBhbmltYXRlZFxuICAgICAgY29uc3Qgd3JhcHBlciA9IHRoaXMuYXBwZW5kTWFya3VwKGA8ZGl2IGNsYXNzPVwiY2MtZ3Jvd2VyXCI+JHtjb29raWVQb3B1cH08L2Rpdj5gKVxuXG4gICAgICB3cmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnJyAvLyBzZXQgaXQgdG8gdmlzaWJsZSAoYmVjYXVzZSBhcHBlbmRNYXJrdXAgaGlkZXMgaXQpXG4gICAgICB0aGlzLmVsZW1lbnQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQgLy8gZ2V0IHRoZSBgZWxlbWVudGAgcmVmZXJlbmNlIGZyb20gdGhlIHdyYXBwZXJcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5hcHBlbmRNYXJrdXAoY29va2llUG9wdXApXG4gICAgfVxuXG4gICAgdGhpcy5hcHBseUF1dG9EaXNtaXNzKClcbiAgICB0aGlzLmFwcGx5UmV2b2tlQnV0dG9uKClcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b09wZW4pIHtcbiAgICAgIHRoaXMuYXV0b09wZW4oKVxuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxuXG4gICAgaWYgKCF0aGlzLmlzT3BlbigpKSB7XG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuZmFkZUluKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJydcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24oKVxuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCBcInBvcHVwT3BlbmVkXCIgKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBjbG9zZShzaG93UmV2b2tlKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHJldHVyblxuXG4gICAgaWYgKHRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5mYWRlT3V0KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93UmV2b2tlICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSlcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cENsb3NlZFwiIClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZmFkZUluKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbGVtZW50XG5cbiAgICBpZiAoIXRoaXMuaGFzVHJhbnNpdGlvbiB8fCAhZWwpIHJldHVyblxuXG4gICAgLy8gVGhpcyBzaG91bGQgYWx3YXlzIGJlIGNhbGxlZCBBRlRFUiBmYWRlT3V0ICh3aGljaCBpcyBnb3Zlcm5lZCBieSB0aGUgJ3RyYW5zaXRpb25lbmQnIGV2ZW50KS5cbiAgICAvLyAndHJhbnNpdGlvbmVuZCcgaXNuJ3QgYWxsIHRoYXQgcmVsaWFibGUsIHNvLCBpZiB3ZSB0cnkgYW5kIGZhZGVJbiBiZWZvcmUgJ3RyYW5zaXRpb25lbmQnIGhhc1xuICAgIC8vIGhhcyBhIGNoYW5jZSB0byBydW4sIHRoZW4gd2UgcnVuIGl0IG91cnNlbHZlc1xuICAgIGlmICh0aGlzLmFmdGVyVHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5hZnRlckZhZGVPdXQoZWwpXG4gICAgfVxuXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcbiAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnJ1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4J1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmYWRlSW5UaW1lb3V0ID0gMjAgLy8gKG1zKSBETyBOT1QgTUFLRSBUSElTIFZBTFVFIFNNQUxMRVIuIFNlZSBiZWxvd1xuXG4gICAgICAvLyBBbHRob3VnaCBtb3N0IGJyb3dzZXJzIGNhbiBoYW5kbGUgdmFsdWVzIGxlc3MgdGhhbiAyMG1zLCBpdCBzaG91bGQgcmVtYWluIGFib3ZlIHRoaXMgdmFsdWUuXG4gICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugd2UgYXJlIHdhaXRpbmcgZm9yIGEgXCJicm93c2VyIHJlZHJhd1wiIGJlZm9yZSB3ZSByZW1vdmUgdGhlICdjYy1pbnZpc2libGUnIGNsYXNzLlxuICAgICAgLy8gSWYgdGhlIGNsYXNzIGlzIHJlbXZvZWQgYmVmb3JlIGEgcmVkcmF3IGNvdWxkIGhhcHBlbiwgdGhlbiB0aGUgZmFkZUluIGVmZmVjdCBXSUxMIE5PVCB3b3JrLCBhbmRcbiAgICAgIC8vIHRoZSBwb3B1cCB3aWxsIGFwcGVhciBmcm9tIG5vdGhpbmcuIFRoZXJlZm9yZSB3ZSBNVVNUIGFsbG93IGVub3VnaCB0aW1lIGZvciB0aGUgYnJvd3NlciB0byBkb1xuICAgICAgLy8gaXRzIHRoaW5nLiBUaGUgYWN0dWFsbHkgZGlmZmVyZW5jZSBiZXR3ZWVuIHVzaW5nIDAgYW5kIDIwIGluIGEgc2V0IHRpbWVvdXQgaXMgbmVnbGVnaWJsZSBhbnl3YXlcbiAgICAgIHRoaXMub3BlbmluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB0aGlzLmFmdGVyRmFkZUluKGVsKSxcbiAgICAgICAgZmFkZUluVGltZW91dFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBhZnRlciAnZmFkZUluJy4gVGhpcyBpcyB0aGUgY29kZSB0aGF0IGFjdHVhbGx5IGNhdXNlcyB0aGUgZmFkZUluIHRvIHdvcmtcbiAgICogVGhlcmUgaXMgYSBnb29kIHJlYXNvbiB3aHkgaXQncyBjYWxsZWQgaW4gYSB0aW1lb3V0LiBSZWFkICdmYWRlSW4nXG4gICAqL1xuICBhZnRlckZhZGVJbiggZWxlbWVudCApIHtcbiAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gbnVsbFxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2MtaW52aXNpYmxlJylcbiAgfVxuICBcbiAgZmFkZU91dCgpIHtcbiAgICBpZiAoIXRoaXMuaGFzVHJhbnNpdGlvbiB8fCAhdGhpcy5lbGVtZW50KSByZXR1cm5cblxuICAgIGlmICh0aGlzLm9wZW5pbmdUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuaW5nVGltZW91dClcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlSW4odGhpcy5lbGVtZW50KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlLm1heEhlaWdodCA9ICcnXG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gKCkgPT4gdGhpcy5hZnRlckZhZGVPdXQodGhpcy5lbGVtZW50KVxuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcblxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgfVxuICB9XG4gIFxuICBhZnRlckZhZGVPdXQoZWwpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIGFmdGVyIGNsb3NlIGFuZCBiZWZvcmUgb3BlbiwgdGhlIGRpc3BsYXkgc2hvdWxkIGJlIG5vbmVcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXG4gICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSBudWxsXG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJycgJiZcbiAgICAgICh0aGlzLmhhc1RyYW5zaXRpb24gPyAhdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2MtaW52aXNpYmxlJykgOiB0cnVlKVxuICAgIClcbiAgfVxuXG4gIHRvZ2dsZVJldm9rZUJ1dHRvbihzaG93KSB7XG4gICAgaWYgKHRoaXMucmV2b2tlQnRuKSB0aGlzLnJldm9rZUJ0bi5zdHlsZS5kaXNwbGF5ID0gc2hvdyA/ICcnIDogJ25vbmUnXG4gIH1cblxuICByZXZva2VDaG9pY2UocHJldmVudE9wZW4pIHtcbiAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKVxuXG4gICAgdGhpcy5lbWl0KCBcInJldm9rZUNob2ljZVwiIClcblxuICAgIGlmICghcHJldmVudE9wZW4pIHtcbiAgICAgIHRoaXMuYXV0b09wZW4oKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYXMgdGhlIHVzZXIgcmVzcG9uZGVkIHRvIHRoZSBiYW5uZXJcbiAgICogQHJldHVybiB7IGJvb2xlYW4gfSAtIHRydWUgaWYgYW55IGNvb2tpZXMgaGF2ZSBiZWVuIHNldFxuICAgKi9cbiAgaGFzQW5zd2VyZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5zb21lKCBzdGF0dXMgPT4gISFzdGF0dXMgKVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB0aGUgdXNlciBoYXMgZ2l2ZW4gY29uc2VudCB0byBhbGwgb2YgdGhlIGNhdGVnb3JpZXNcbiAgICogQHJldHVybiB7IGFycmF5PGJvb2xlYW4+IH0gLSB0cnVlIGlmIGNvbnNlbnQgaGFzIGJlZW4gZ2l2ZW5cbiAgICovXG4gIGhhc0NvbnNlbnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTdGF0dXNlcygpLm1hcCggc3RhdHVzID0+IHN0YXR1cyA9PT0gc3RhdHVzQWxsb3cgfHwgc3RhdHVzID09PSBzdGF0dXNEaXNtaXNzIClcbiAgfVxuXG4gIC8vIG9wZW5zIHRoZSBwb3B1cCBpZiBubyBhbnN3ZXIgaGFzIGJlZW4gZ2l2ZW5cbiAgYXV0b09wZW4oIG9wdGlvbnMgKSB7XG4gICAgY29uc3QgaGFzQW5zd2VyZWQgPSB0aGlzLmhhc0Fuc3dlcmVkKClcbiAgICBpZiAoIWhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5lbmFibGVkKSB7XG4gICAgICB0aGlzLm9wZW4oKVxuICAgIH0gZWxzZSBpZiAoaGFzQW5zd2VyZWQgJiYgdGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVSZXZva2VCdXR0b24odHJ1ZSlcbiAgICB9XG4gIH1cblxuICAvKiogXG4gICAqIFNldCdzIGNvb2tpZSBzdGF0dXNlc1xuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFsbE9yVW5kZWYgICAgICAtIElmIHRoaXMgaXMgdGhlIG9ubHkgcGFyYW0sIHNldCBBTEwgaWYgbm90LCBzZXQgVW5jYXRlZ29yaXplZCBjb29raWVzIHN0YXR1c2VzIHNldCB0byB2YWx1ZS5cbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gcGVyc29uYWxpemF0aW9uIC0gUHJlZmVyZW5jZXMgLyBGdW5jdGlvbmFsaXR5IHNldCB0byB2YWx1ZVxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFuYWx5dGljcyAgICAgICAtIEFuYWx5dGlzIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICogQHJldHVybiB7IHVuZGVmaW5lZCB9XG4gICovXG4gIHNldFN0YXR1c2VzKCkge1xuICAgIGNvbnN0IHtuYW1lLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZX0gPSB0aGlzLm9wdGlvbnMuY29va2llXG5cbiAgICAvLyBpZiBgc3RhdHVzYCBpcyB2YWxpZFxuICAgIGNvbnN0IHVwZGF0ZUNhdGVnb3J5U3RhdHVzID0gKCBjYXRlZ29yeU5hbWUsIHN0YXR1cyApID0+IHtcbiAgICAgIGlmIChpc1ZhbGlkU3RhdHVzKHN0YXR1cykpIHtcbiAgICAgICAgY29uc3QgY29va2llTmFtZSA9IG5hbWUrJ18nK2NhdGVnb3J5TmFtZVxuICAgICAgICBjb25zdCBjaG9zZW5CZWZvcmUgPSBzdGF0dXNlcy5pbmRleE9mKCBnZXRDb29raWUoY29va2llTmFtZSkgKSA+PSAwXG4gICAgICAgIGNvbnNvbGUubG9nKCBjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlIClcbiAgICAgICAgc2V0Q29va2llKGNvb2tpZU5hbWUsIHN0YXR1cywgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUpXG4gICAgICAgIHRoaXMuZW1pdCggXCJzdGF0dXNDaGFuZ2VkXCIsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yeSBdICkgKVxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgYXJndW1lbnRzWyAwIF0gKSApXG4gICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYXRlZ29yaWVzXG4gICAqL1xuICBnZXRTdGF0dXNlcygpIHtcbiAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5TmFtZSA9PiBnZXRDb29raWUodGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lKydfJytjYXRlZ29yeU5hbWUpIClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgKi9cbiAgY2xlYXJTdGF0dXNlcygpIHtcbiAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgIHNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKVxuICAgIH0pXG4gIH1cblxuICAvLyBUaGlzIGlzIGNhbGxlZCBvbiAndHJhbnNpdGlvbmVuZCcgKG9ubHkgb24gdGhlIHRyYW5zaXRpb24gb2YgdGhlIGZhZGVPdXQpLiBUaGF0J3MgYmVjYXVzZSBhZnRlciB3ZSd2ZSBmYWRlZCBvdXQsIHdlIG5lZWQgdG9cbiAgLy8gc2V0IHRoZSBkaXNwbGF5IHRvICdub25lJyAoc28gdGhlcmUgYXJlbid0IGFubm95aW5nIGludmlzaWJsZSBwb3B1cHMgYWxsIG92ZXIgdGhlIHBhZ2UpLiBJZiBmb3Igd2hlbmV2ZXIgcmVhc29uIHRoaXMgZnVuY3Rpb25cbiAgLy8gaXMgbm90IGNhbGxlZCAobGFjayBvZiBzdXBwb3J0KSwgdGhlIG9wZW4vY2xvc2UgbWVjaGFuaXNtIHdpbGwgc3RpbGwgd29yay5cbiAgYWZ0ZXJGYWRlT3V0KGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBhZnRlciBjbG9zZSBhbmQgYmVmb3JlIG9wZW4sIHRoZSBkaXNwbGF5IHNob3VsZCBiZSBub25lXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgY2FuVXNlQ29va2llcygpIHtcbiAgICBpZiAoIXdpbmRvdy5uYXZpZ2F0b3IuY29va2llRW5hYmxlZCB8fCB3aW5kb3cuQ29va2llc09LIHx8IHdpbmRvdy5uYXZpZ2F0b3IuQ29va2llc09LICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0dXNlc1ZhbHVlcyA9IHRoaXMuZ2V0U3RhdHVzZXMoKVxuICAgIGNvbnN0IG1hdGNoZXMgPSBzdGF0dXNlc1ZhbHVlcy5tYXAoICggc3RhdHVzLCBpbmRleCApID0+ICggeyBbY2F0ZWdvcmllc1tpbmRleF1dOiBpc1ZhbGlkU3RhdHVzKCBzdGF0dXMgKSB9ICkgKVxuICAgIGNvbnN0IGhhc01hdGNoZXMgPSBtYXRjaGVzLmZpbHRlciggbWF0Y2ggPT4gbWF0Y2hbT2JqZWN0LmtleXMobWF0Y2gpWzBdXSApLmxlbmd0aCA+IDBcbiAgICBzdGF0dXNlc1ZhbHVlcy5mb3JFYWNoKCAoIHN0YXR1cywgaW5kZXggKSA9PlxuICAgICAgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcmllc1sgaW5kZXggXSBdID09PSBzdGF0dXNcbiAgICAgICAgPyBzdGF0dXMgOiB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gKVxuXG4gICAgcmV0dXJuIGhhc01hdGNoZXNcbiAgfVxuXG4gIC8vIHRvcCwgYm90dG9tLCBsZWZ0LCByaWdodFxuICBnZXRQb3NpdGlvbkNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wb3NpdGlvbi5zcGxpdCggJy0nICkubWFwKCBwb3MgPT4gJ2NjLScrcG9zKVxuICB9XG5cbiAgZ2V0UG9wdXBDbGFzc2VzKCkge1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcbiAgICBsZXQgcG9zaXRpb25TdHlsZSA9XG4gICAgICBvcHRzLnBvc2l0aW9uID09ICd0b3AnIHx8IG9wdHMucG9zaXRpb24gPT0gJ2JvdHRvbSdcbiAgICAgICAgPyAnYmFubmVyJ1xuICAgICAgICA6ICdmbG9hdGluZydcblxuICAgIGlmIChpc01vYmlsZSgpICYmIG9wdHMubW9iaWxlRm9yY2VGbG9hdCkge1xuICAgICAgcG9zaXRpb25TdHlsZSA9ICdmbG9hdGluZydcbiAgICB9XG5cbiAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgJ2NjLScgKyBwb3NpdGlvblN0eWxlLCAvLyBmbG9hdGluZyBvciBiYW5uZXJcbiAgICAgICdjYy10eXBlLScgKyBvcHRzLnR5cGUsIC8vIGFkZCB0aGUgY29tcGxpYW5jZSB0eXBlXG4gICAgICAnY2MtdGhlbWUtJyArIG9wdHMudGhlbWUsIC8vIGFkZCB0aGUgdGhlbWVcbiAgICBdXG5cbiAgICBpZiAob3B0cy5zdGF0aWMpIHtcbiAgICAgIGNsYXNzZXMucHVzaCgnY2Mtc3RhdGljJylcbiAgICB9XG5cbiAgICBjbGFzc2VzLnB1c2guYXBwbHkoY2xhc3NlcywgdGhpcy5nZXRQb3NpdGlvbkNsYXNzZXMoKSlcblxuICAgIC8vIHdlIG9ubHkgYWRkIGV4dHJhIHN0eWxlcyBpZiBgcGFsZXR0ZWAgaGFzIGJlZW4gc2V0IHRvIGEgdmFsaWQgdmFsdWVcbiAgICB0aGlzLmF0dGFjaEN1c3RvbVBhbGV0dGUodGhpcy5vcHRpb25zLnBhbGV0dGUpXG5cbiAgICAvLyBpZiB3ZSBvdmVycmlkZSB0aGUgcGFsZXR0ZSwgYWRkIHRoZSBjbGFzcyB0aGF0IGVuYWJsZXMgdGhpc1xuICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgIGNsYXNzZXMucHVzaCh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsYXNzZXNcbiAgfVxuXG4gIGdldFBvcHVwSW5uZXJNYXJrdXAoKSB7XG4gICAgY29uc3QgaW50ZXJwb2xhdGVkID0ge31cbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXG5cbiAgICAvLyByZW1vdmVzIGxpbmsgaWYgc2hvd0xpbmsgaXMgZmFsc2VcbiAgICBpZiAoIW9wdHMuc2hvd0xpbmspIHtcbiAgICAgIG9wdHMuZWxlbWVudHMubGluayA9ICcnIFxuICAgICAgb3B0cy5lbGVtZW50cy5tZXNzYWdlbGluayA9IG9wdHMuZWxlbWVudHMubWVzc2FnZVxuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKG9wdHMuZWxlbWVudHMpLmZvckVhY2goIHByb3AgPT4ge1xuICAgICAgaW50ZXJwb2xhdGVkW3Byb3BdID0gaW50ZXJwb2xhdGVTdHJpbmcoXG4gICAgICAgIG9wdHMuZWxlbWVudHNbcHJvcF0sXG4gICAgICAgIG5hbWUgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ciA9IG9wdHMuY29udGVudFtuYW1lXVxuICAgICAgICAgIHJldHVybiBuYW1lICYmIHR5cGVvZiBzdHIgPT0gJ3N0cmluZycgJiYgc3RyLmxlbmd0aCA/IHN0ciA6ICcnXG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9KVxuXG4gICAgLy8gY2hlY2tzIGlmIHRoZSB0eXBlIGlzIHZhbGlkIGFuZCBkZWZhdWx0cyB0byBpbmZvIGlmIGl0J3Mgbm90XG4gICAgbGV0IGNvbXBsaWFuY2VUeXBlID0gb3B0cy5jb21wbGlhbmNlW29wdHMudHlwZV1cbiAgICBpZiAoIWNvbXBsaWFuY2VUeXBlKSB7XG4gICAgICBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZS5pbmZvXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgdGhlIGNvbXBsaWFuY2UgdHlwZXMgZnJvbSB0aGUgYWxyZWFkeSBpbnRlcnBvbGF0ZWQgYGVsZW1lbnRzYFxuICAgIGludGVycG9sYXRlZC5jb21wbGlhbmNlID0gaW50ZXJwb2xhdGVTdHJpbmcoIGNvbXBsaWFuY2VUeXBlLCBuYW1lID0+IGludGVycG9sYXRlZFtuYW1lXSApXG5cbiAgICAvLyBjaGVja3MgaWYgdGhlIGxheW91dCBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gYmFzaWMgaWYgaXQncyBub3RcbiAgICBsZXQgbGF5b3V0ID0gb3B0cy5sYXlvdXRzW29wdHMubGF5b3V0XVxuICAgIGlmICghbGF5b3V0KSB7XG4gICAgICBsYXlvdXQgPSBvcHRzLmxheW91dHMuYmFzaWNcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGludGVycG9sYXRlU3RyaW5nKGxheW91dCwgbWF0Y2ggPT5pbnRlcnBvbGF0ZWRbbWF0Y2hdIClcbiAgfVxuXG4gIGFwcGVuZE1hcmt1cChtYXJrdXApIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb250ID1cbiAgICAgIG9wdHMuY29udGFpbmVyICYmIG9wdHMuY29udGFpbmVyLm5vZGVUeXBlID09PSAxXG4gICAgICAgID8gb3B0cy5jb250YWluZXJcbiAgICAgICAgOiBkb2N1bWVudC5ib2R5XG5cbiAgICBkaXYuaW5uZXJIVE1MID0gbWFya3VwXG5cbiAgICBjb25zdCBlbCA9IGRpdi5jaGlsZHJlblswXVxuXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2Mtd2luZG93JykgJiYgdGhpcy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH1cblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5oYW5kbGVCdXR0b25DbGljayggZXZlbnQgKSApXG4gICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjaGVja2JveC5uYW1lLnRvVXBwZXJDYXNlKCkgXSA9IGNoZWNrYm94LmNoZWNrZWQgPyAnQUxMT1cnIDogJ0RFTlknXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoKVxuICAgICAgfSlcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgIH0pXG4gICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1pbmZvXCIpLmZvckVhY2goIHNob3dJbmZvID0+IHtcbiAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XG4gICAgICAgICAgdGhpcy5ibHVyKClcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm8gY29udGFpbmVyIHRvIGF0dGFjaCB0b28uIE1ha2Ugc3VyZSB0aGUgRE9NIGhhcyBsb2FkZWQuIElzIHlvdXIgc2NyaXB0IGxvYWRlZCBqdXN0IGJlZm9yZSB0aGUgYDwvYm9keT5gIHRhZz9cIiApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xuICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxuICAgIGNvbnN0IGJ0biA9IHRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXRcbiAgICBcbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJ0bicgKSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2Mtc2F2ZScgKSl7XG4gICAgICB0aGlzLnNldFN0YXR1c2VzKClcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSBidG4uY2xhc3NOYW1lLm1hdGNoKFxuICAgICAgICBuZXcgUmVnRXhwKCdcXFxcYmNjLSgnICsgc3RhdHVzZXMubWFwKCBzdHIgPT4gc3RyLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csICdcXFxcJCYnKSApLmpvaW4oJ3wnKSArICcpXFxcXGInKVxuICAgICAgKVxuICAgICAgY29uc3QgbWF0Y2ggPSAobWF0Y2hlcyAmJiBtYXRjaGVzWzFdKSB8fCBmYWxzZVxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdHVzZXMobWF0Y2gpXG4gICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1jbG9zZScgKSkge1xuICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgIH1cbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXJldm9rZScgKSkge1xuICAgICAgdGhpcy5yZXZva2VDaG9pY2UoKVxuICAgIH1cbiAgfVxuXG4gIGF0dGFjaEN1c3RvbVBhbGV0dGUocGFsZXR0ZSkge1xuICAgIGNvbnN0IGhhc2hTdHIgPSBoYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKVxuICAgIGNvbnN0IHNlbGVjdG9yID0gJ2NjLWNvbG9yLW92ZXJyaWRlLScgKyBoYXNoU3RyXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzUGxhaW5PYmplY3QocGFsZXR0ZSlcblxuICAgIHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvciA9IGlzVmFsaWQgPyBzZWxlY3RvciA6IG51bGxcblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBhZGRDdXN0b21TdHlsZXNoZWV0KGhhc2hTdHIsIHBhbGV0dGUsICcuJyArIHNlbGVjdG9yKVxuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZFxuICB9XG5cblxuICBnZXRFdmVudFBhdGgoIGV2ZW50ICkge1xuICAgIGNvbnN0IHBhdGggPSBldmVudC5jb21wb3NlZFBhdGggPyBldmVudC5jb21wb3NlZFBhdGgoKSA6IChmdW5jdGlvbiAoIGFyciwgZWxlbWVudCApIHtcbiAgICAgIHdoaWxlICggZWxlbWVudCApIHtcbiAgICAgICAgYXJyLnB1c2goIGVsZW1lbnQgKVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlXG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyXG4gICAgfSkoW10sZXZlbnQudGFyZ2V0IClcbiAgICBpZiAoICFwYXRoICkge1xuICAgICAgY29uc29sZS53YXJuKCBcIicucGF0aCcgJiAnLmNvbXBvc2VkUGF0aCcgZmFpbGVkIHRvIGdlbmVyYXRlIGFuIGV2ZW50IHBhdGguXCIgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJldHVybiBwYXRoXG4gIH1cblxuICBhcHBseUF1dG9EaXNtaXNzKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVuYWJsZWQsXG4gICAgICBkaXNtaXNzT25UaW1lb3V0ICA6IGRlbGF5LFxuICAgICAgZGlzbWlzc09uU2Nyb2xsICAgOnNjcm9sbFJhbmdlLFxuICAgICAgZGlzbWlzc09uTGlua0NsaWNrLFxuICAgICAgZGlzbWlzc09uV2luZG93Q2xpY2ssXG4gICAgICBkaXNtaXNzT25LZXlQcmVzc1xuICAgIH0gPSB0aGlzLm9wdGlvbnNcblxuICAgIGlmICggZW5hYmxlZCApIHtcbiAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT0gJ251bWJlcicgJiYgZGVsYXkgPj0gMCkge1xuICAgICAgICB0aGlzLmRpc21pc3NUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoICgpPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICAgIH0sIE1hdGguZmxvb3IoZGVsYXkpKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2Nyb2xsUmFuZ2UgPT0gJ251bWJlcicgJiYgc2Nyb2xsUmFuZ2UgPj0gMCkge1xuICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBNYXRoLmZsb29yKHNjcm9sbFJhbmdlKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vbldpbmRvd1Njcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbldpbmRvd0NsaWNrKSB7XG4gICAgICAgIHRoaXMub25XaW5kb3dDbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKCAhZ2V0RXZlbnRQYXRoKCBldnQgKS5zb21lKCBlbGVtZW50ID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaWdub3JlQ2xpY2tzRnJvbS5zb21lKCBpZ25vcmVkQ2xpY2sgPT5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoIGlnbm9yZWRDbGljayApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhzdGF0dXNEaXNtaXNzKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgICB9IGVsc2UgaWYgKGRpc21pc3NPbkxpbmtDbGljaykge1xuICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoIGdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbSA9PiB0eXBlb2YgZWxlbS50YWdOYW1lICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtLnRhZ05hbWUgPT09ICdBJyApICkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzRGlzbWlzcyApXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXG4gICAgICAgICAgICB0aGlzLm9uTGlua0NsaWNrID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgfSBlbHNlIGlmICggZGlzbWlzc09uS2V5UHJlc3MgKSB7XG4gICAgICAgICAgdGhpcy5vbktleVByZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudFxuICAgICAgICAgICAgaWYgKCBrZXlDb2RlID09PSAxMyApIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyggc3RhdHVzQWxsb3cgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIGtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxuICAgICAgICAgICAgICB0aGlzLmNsb3NlKCB0cnVlIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVJldm9rZUJ1dHRvbigpIHtcbiAgICAvLyByZXZva2FibGUgaXMgdHJ1ZSBpZiBhZHZhbmNlZCBjb21wbGlhbmNlIGlzIHNlbGVjdGVkXG4gICAgaWYgKHRoaXMub3B0aW9ucy50eXBlICE9ICdpbmZvJykgdGhpcy5vcHRpb25zLnJldm9rYWJsZSA9IHRydWVcbiAgICAvLyBhbmltYXRlUmV2b2thYmxlIGZhbHNlIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgIGlmIChpc01vYmlsZSgpKSB0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSA9IGZhbHNlXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKClcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYW5pbWF0ZVJldm9rYWJsZSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLWFuaW1hdGUnKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xuICAgICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ2NjLXRoZW1lLScrdGhpcy5vcHRpb25zLnRoZW1lKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXZva2VCdG4gPSB0aGlzLm9wdGlvbnMucmV2b2tlQnRuXG4gICAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIGNsYXNzZXMuam9pbignICcpKVxuICAgICAgICAucmVwbGFjZSgne3twb2xpY3l9fScsIHRoaXMub3B0aW9ucy5jb250ZW50LnBvbGljeSlcblxuICAgICAgdGhpcy5yZXZva2VCdG4gPSB0aGlzLmFwcGVuZE1hcmt1cChyZXZva2VCdG4pXG5cbiAgICAgIGNvbnN0IGJ0biA9IHRoaXMucmV2b2tlQnRuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgY29uc3Qgb25Nb3VzZU1vdmUgPSB0aHJvdHRsZShmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICBjb25zdCBtaW5ZID0gMjBcbiAgICAgICAgICBjb25zdCBtYXhZID0gd2luZG93LmlubmVySGVpZ2h0IC0gMjBcblxuICAgICAgICAgIGlmICggKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtdG9wJyApICYmIGV2dC5jbGllbnRZIDwgbWluWSApIHx8XG4gICAgICAgICAgICAgICAgKCBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYm90dG9tJyApICYmIGV2dC5jbGllbnRZID4gbWF4WSApICkge1xuICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhY3RpdmUgJiYgIWJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1hY3RpdmUnICkgKSB7XG4gICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCAnY2MtYWN0aXZlJyApXG4gICAgICAgICAgfSBlbHNlIGlmICggIWFjdGl2ZSAmJiBidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMjAwKVxuXG4gICAgICAgIHRoaXMub25Nb3VzZU1vdmUgPSBvbk1vdXNlTW92ZVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpXG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBNYWtlIHRoaXMgZmFsc2UgaWYgeW91IHdhbnQgdG8gZGlzYWJsZSBhbGwgcmVnaW9uYWwgb3ZlcnJpZGVzIGZvciBzZXR0aW5ncy5cbiAgLy8gSWYgdHJ1ZSwgb3B0aW9ucyBjYW4gZGlmZmVyIGJ5IGNvdW50cnksIGRlcGVuZGluZyBvbiB0aGVpciBjb29raWUgbGF3LlxuICAvLyBJdCBkb2VzIG5vdCBhZmZlY3QgaGlkaW5nIHRoZSBwb3B1cCBmb3IgY291bnRyaWVzIHRoYXQgZG8gbm90IGhhdmUgY29va2llIGxhdy5cbiAgcmVnaW9uYWxMYXc6IHRydWUsXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgZW5mb3JjZSBzb21lIHZlcnNpb24gb2YgYSBjb29raWUgbGF3XG4gIGhhc0xhdzogW1xuICAgICdBVCcsXG4gICAgJ0JFJyxcbiAgICAnQkcnLFxuICAgICdIUicsXG4gICAgJ0NaJyxcbiAgICAnQ1knLFxuICAgICdESycsXG4gICAgJ0VFJyxcbiAgICAnRkknLFxuICAgICdGUicsXG4gICAgJ0RFJyxcbiAgICAnRUwnLFxuICAgICdIVScsXG4gICAgJ0lFJyxcbiAgICAnSVQnLFxuICAgICdMVicsXG4gICAgJ0xUJyxcbiAgICAnTFUnLFxuICAgICdNVCcsXG4gICAgJ05MJyxcbiAgICAnTk8nLFxuICAgICdQTCcsXG4gICAgJ1BUJyxcbiAgICAnU0snLFxuICAgICdFUycsXG4gICAgJ1NFJyxcbiAgICAnR0InLFxuICAgICdVSycsXG4gICAgJ0dSJyxcbiAgICAnRVUnLFxuICAgICdSTydcbiAgXSxcblxuICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gIHJldm9rYWJsZTogW1xuICAgICdIUicsXG4gICAgJ0NZJyxcbiAgICAnREsnLFxuICAgICdFRScsXG4gICAgJ0ZSJyxcbiAgICAnREUnLFxuICAgICdMVicsXG4gICAgJ0xUJyxcbiAgICAnTkwnLFxuICAgICdOTycsXG4gICAgJ1BUJyxcbiAgICAnRVMnXG4gIF0sXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXG4gIGV4cGxpY2l0QWN0aW9uOiBbJ0hSJywgJ0lUJywgJ0VTJywgJ05PJ11cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIFRoZSBkZWZhdWx0IHRpbWVvdXQgaXMgNSBzZWNvbmRzLiBUaGlzIGlzIG1haW5seSBuZWVkZWQgdG8gY2F0Y2ggSlNPTlAgcmVxdWVzdHMgdGhhdCBlcnJvci5cbiAgLy8gT3RoZXJ3aXNlIHRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGNhdGNoIEpTT05QIGVycm9ycy4gVGhhdCBtZWFucyB0aGF0IGlmIGEgSlNPTlAgZmFpbHMsIHRoZVxuICAvLyBhcHAgd2lsbCB0YWtlIGB0aW1lb3V0YCBtaWxsaXNlY29uZHMgdG8gcmVhY3QgdG8gYSBKU09OUCBuZXR3b3JrIGVycm9yLlxuICB0aW1lb3V0OiA1MDAwLFxuXG4gIC8vIHRoZSBvcmRlciB0aGF0IHNlcnZpY2VzIHdpbGwgYmUgYXR0ZW1wdGVkIGluXG4gIHNlcnZpY2VzOiBbXG4gICAgJ2lwaW5mbydcblxuICAgIC8qXG5cbiAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxuICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcblxuICAgIHtcbiAgICAgIG5hbWU6ICdpcGluZm9kYicsXG4gICAgICBpbnRlcnBvbGF0ZVVybDoge1xuICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICBhcGlfa2V5OiAndk9nSTM3NDhkbkl5dElyc0pjeFM3cXNEZjZrYkprRTlsTjR5RURyWEFxWGNLVU52ampaUG94M2VrWHFtTU1sZCdcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcblxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ31cbiAgICB9LFxuXG4gICAgKi9cbiAgXSxcblxuICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcbiAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDogJy8vaXBpbmZvLmlvJyxcbiAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKGpzb24pXG4gICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDpcbiAgICAgICAgICAnLy9hcGkuaXBpbmZvZGIuY29tL3YzL2lwLWNvdW50cnkvP2tleT17YXBpX2tleX0mZm9ybWF0PWpzb24mY2FsbGJhY2s9e2NhbGxiYWNrfScsXG4gICAgICAgIGlzU2NyaXB0OiB0cnVlLCAvLyB0aGlzIGlzIEpTT05QLCB0aGVyZWZvcmUgd2UgbXVzdCBzZXQgaXQgdG8gcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiBqc29uLnN0YXR1c0NvZGUgPT0gJ0VSUk9SJ1xuICAgICAgICAgICAgICA/IHRvRXJyb3Ioe2Vycm9yOiBqc29uLnN0YXR1c01lc3NhZ2V9KVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeUNvZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9FcnJvcih7ZXJyb3I6ICdJbnZhbGlkIHJlc3BvbnNlICgnICsgZXJyICsgJyknfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWF4bWluZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBhIEphdmFTY3JpcHQgZmlsZSB3aGljaCBkZWZpbmVzIGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS4gT25jZSBsb2FkZWQsIHdlIG11c3RcbiAgICAgICAgLy8gbWFrZSBhbiBhZGRpdGlvbmFsIEFKQVggY2FsbC4gVGhlcmVmb3JlIHdlIHByb3ZpZGUgYSBgZG9uZWAgY2FsbGJhY2sgdGhhdCBjYW4gYmUgY2FsbGVkIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIHVybDogJy8vanMubWF4bWluZC5jb20vanMvYXBpcy9nZW9pcDIvdjIuMS9nZW9pcDIuanMnLFxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUsIHNvIGl0IG11c3QgYmUgcnVuIGFzIGEgc2NyaXB0XG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lKSB7XG4gICAgICAgICAgLy8gaWYgZXZlcnl0aGluZyB3ZW50IG9rYXkgdGhlbiBgZ2VvaXAyYCBXSUxMIGJlIGRlZmluZWRcbiAgICAgICAgICBpZiAoIXdpbmRvdy5nZW9pcDIpIHtcbiAgICAgICAgICAgIGRvbmUoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnVW5leHBlY3RlZCByZXNwb25zZSBmb3JtYXQuIFRoZSBkb3dubG9hZGVkIHNjcmlwdCBzaG91bGQgaGF2ZSBleHBvcnRlZCBgZ2VvaXAyYCB0byB0aGUgZ2xvYmFsIHNjb3BlJ1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnZW9pcDIuY291bnRyeShcbiAgICAgICAgICAgIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBsb2NhdGlvbi5jb3VudHJ5Lmlzb19jb2RlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgZG9uZSh0b0Vycm9yKGVycikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuXG4gICAgICAgICAgLy8gV2UgY2FuJ3QgcmV0dXJuIGFueXRoaW5nLCBiZWNhdXNlIHdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIHNlY29uZCBBSkFYIGNhbGwgdG8gcmV0dXJuLlxuICAgICAgICAgIC8vIFRoZW4gd2UgY2FuICdjb21wbGV0ZScgdGhlIHNlcnZpY2UgYnkgcGFzc2luZyBkYXRhIG9yIGFuIGVycm9yIHRvIHRoZSBgZG9uZWAgY2FsbGJhY2suXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIGlmIGZhbHNlLCB0aGlzIHByZXZlbnRzIHRoZSBwb3B1cCBmcm9tIHNob3dpbmcgKHVzZWZ1bCBmb3IgZ2l2aW5nIHRvIGNvbnRyb2wgdG8gYW5vdGhlciBwaWVjZSBvZiBjb2RlKVxuICBlbmFibGVkOiB0cnVlLFxuXG4gIC8vIG9wdGlvbmFsIChleHBlY3RpbmcgYSBIVE1MIGVsZW1lbnQpIGlmIHBhc3NlZCwgdGhlIHBvcHVwIGlzIGFwcGVuZGVkIHRvIHRoaXMgZWxlbWVudC4gZGVmYXVsdCBpcyBgZG9jdW1lbnQuYm9keWBcbiAgY29udGFpbmVyOiBudWxsLFxuXG4gIC8vIGRlZmF1bHRzIGNvb2tpZSBvcHRpb25zIC0gaXQgaXMgUkVDT01NRU5ERUQgdG8gc2V0IHRoZXNlIHZhbHVlcyB0byBjb3JyZXNwb25kIHdpdGggeW91ciBzZXJ2ZXJcbiAgY29va2llOiB7XG4gICAgLy8gVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGlzIGNvb2tpZSAtIHlvdSBjYW4gaWdub3JlIHRoaXNcbiAgICBuYW1lOiAnY29va2llY29uc2VudF9zdGF0dXMnLFxuICAgIC8vIFRoaXMgaXMgdGhlIHVybCBwYXRoIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIGF0IHRoaXMgbG9jYXRpb25cbiAgICBwYXRoOiAnLycsXG4gICAgLy8gVGhpcyBpcyB0aGUgZG9tYWluIHRoYXQgdGhlIGNvb2tpZSAnbmFtZScgYmVsb25ncyB0by4gVGhlIGNvb2tpZSBjYW4gb25seSBiZSByZWFkIG9uIHRoaXMgZG9tYWluLlxuICAgIC8vICAtIEd1aWRlIHRvIGNvb2tpZSBkb21haW5zIC0gaHR0cHM6Ly93d3cubXhzYXNoYS5ldS9ibG9nLzIwMTQvMDMvMDQvZGVmaW5pdGl2ZS1ndWlkZS10by1jb29raWUtZG9tYWlucy9cbiAgICBkb21haW46ICcnLFxuICAgIC8vIFRoZSBjb29raWVzIGV4cGlyZSBkYXRlLCBzcGVjaWZpZWQgaW4gZGF5cyAoc3BlY2lmeSAtMSBmb3Igbm8gZXhwaXJ5KVxuICAgIGV4cGlyeURheXM6IDM2NSxcbiAgICAvLyBJZiB0cnVlIHRoZSBjb29raWUgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHNlY3VyZSBmbGFnLiBTZWN1cmUgY29va2llcyB3aWxsIG9ubHkgYmUgdHJhbnNtaXR0ZWQgdmlhIEhUVFBTLlxuICAgIHNlY3VyZTogZmFsc2VcbiAgfSxcblxuICAvLyBlYWNoIGl0ZW0gZGVmaW5lcyB0aGUgaW5uZXIgdGV4dCBmb3IgdGhlIGVsZW1lbnQgdGhhdCBpdCByZWZlcmVuY2VzXG4gIGNvbnRlbnQ6IHtcbiAgICBoZWFkZXIgOiAnQ29va2llcyB1c2VkIG9uIHRoZSB3ZWJzaXRlIScsXG4gICAgbWVzc2FnZTogJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZW5zdXJlIHlvdSBnZXQgdGhlIGJlc3QgZXhwZXJpZW5jZSBvbiBvdXIgd2Vic2l0ZS4nLFxuICAgIGRpc21pc3M6ICdHb3QgaXQhJyxcbiAgICBhbGxvdyAgOiAnQWxsb3cgY29va2llcycsXG4gICAgZGVueSAgIDogJ0RlY2xpbmUnLFxuICAgIGxpbmsgICA6ICdMZWFybiBtb3JlJyxcbiAgICBocmVmICAgOiAnaHR0cHM6Ly93d3cuY29va2llc2FuZHlvdS5jb20nLFxuICAgIGNsb3NlICA6ICcmI3gyNzRjJyxcbiAgICB0YXJnZXQgOiAnX2JsYW5rJyxcbiAgICBwb2xpY3kgOiAnQ29va2llIFBvbGljeSdcbiAgfSxcblxuICAvLyBUaGlzIGlzIHRoZSBIVE1MIGZvciB0aGUgZWxlbWVudHMgYWJvdmUuIFRoZSBzdHJpbmcge3toZWFkZXJ9fSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggdGhlIGVxdWl2YWxlbnQgdGV4dCBiZWxvdy5cbiAgLy8gWW91IGNhbiByZW1vdmUgXCJ7e2hlYWRlcn19XCIgYW5kIHdyaXRlIHRoZSBjb250ZW50IGRpcmVjdGx5IGluc2lkZSB0aGUgSFRNTCBpZiB5b3Ugd2FudC5cbiAgLy9cbiAgLy8gIC0gQVJJQSBydWxlcyBzdWdnZXN0IHRvIGVuc3VyZSBjb250cm9scyBhcmUgdGFiYmFibGUgKHNvIHRoZSBicm93c2VyIGNhbiBmaW5kIHRoZSBmaXJzdCBjb250cm9sKSxcbiAgLy8gICAgYW5kIHRvIHNldCB0aGUgZm9jdXMgdG8gdGhlIGZpcnN0IGludGVyYWN0aXZlIGNvbnRyb2wgKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby91c2luZy1hcmlhLylcbiAgZWxlbWVudHM6IHtcbiAgICBoZWFkZXI6ICc8c3BhbiBjbGFzcz1cImNjLWhlYWRlclwiPnt7aGVhZGVyfX08L3NwYW4+Jm5ic3AnLFxuICAgIG1lc3NhZ2U6XG4gICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fTwvc3Bhbj4nLFxuICAgIG1lc3NhZ2VsaW5rOlxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX0gPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+PC9zcGFuPicsXG4gICAgZGlzbWlzczpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRpc21pc3NcIj57e2Rpc21pc3N9fTwvYT4nLFxuICAgIGFsbG93OlxuICAgICAgJzxhIGFyaWEtbGFiZWw9XCJhbGxvdyBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgIGNsYXNzPVwiY2MtYnRuIGNjLWFsbG93XCI+e3thbGxvd319PC9hPicsXG4gICAgZGVueTpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwiZGVueSBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtZGVueVwiPnt7ZGVueX19PC9hPicsXG4gICAgbGluazpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT4nLFxuICAgIGNsb3NlOlxuICAgICAgJzxzcGFuIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1jbG9zZVwiPnt7Y2xvc2V9fTwvc3Bhbj4nLFxuICAgIGNhdGVnb3JpZXM6IGAgXG4gICAgICA8dWwgY2xhc3M9XCJjYy1jYXRlZ29yaWVzXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidW5jYXRlZ29yaXplZFwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5VbmNhdGVnb3JpemVkPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIlVuY2F0ZWdvcml6ZWQgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjFcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHRoYXQgZG9uJ3QgZml0IGFueSBvdGhlciBjYXRlZ29yeS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiMlwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiZXNzZW50aWFsXCIgY2hlY2tlZCBkaXNhYmxlZC8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+RXNzZW50aWFsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkVzc2VudGlhbCBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiM1wiPl48L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGVzc2VudGlhbCBhcHBsaWNhdGlvbiBvciB3ZWJzaXRlIG9wcGVyYXRpb24gY29va2llcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiNFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGVyc29uYWxpemF0aW9uXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPlBlcnNvbmFsaXphdGlvbjwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJQZXJzb25hbGl6YXRpb24gRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjVcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHRoZSBhcHBsaWNhdGlvbiB0byBhIHNwZWNpZmljIHVzZXIuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjZcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImFuYWx5dGljc1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5BbmFseXRpY3M8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiQW5hbHl0aWNzIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI3XCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgYW5hbHlpemUgZGF0YS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImNjLWNhdGVnb3J5XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0blwiIHRhYmluZGV4PVwiOFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibWFya2V0aW5nXCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPk1hcmtldGluZzwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJNYXJrZXRpbmcgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjlcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBjb29raWVzIHVzZWQgdG8gaGVscCBwZXJvbmFsaXplIHlvdXIgaW50ZXJuZXQgc2hvcHBpbmcgJiBhZHZlcnRpc2VtZW50IGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgYCxcbiAgICBzYXZlOiBgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1zYXZlXCI+U2F2ZTwvYnV0dG9uPmBcbiAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xuICB9LFxuXG4gIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XG4gIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcbiAgLy8gIC0ge3tjaGlsZHJlbn19IGlzIHdoZXJlIHRoZSBIVE1MIGNoaWxkcmVuIGFyZSBwbGFjZWRcbiAgd2luZG93OlxuICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcbiAgXG4gIG1vZGFsOiAnJyxcblxuICAvLyBUaGlzIGlzIHRoZSBodG1sIGZvciB0aGUgcmV2b2tlIGJ1dHRvbi4gVGhpcyBvbmx5IHNob3dzIHVwIGFmdGVyIHRoZSB1c2VyIGhhcyBzZWxlY3RlZCB0aGVpciBsZXZlbCBvZiBjb25zZW50XG4gIC8vIEl0IGNhbiBiZSBlbmFibGVkIG9mIGRpc2FibGVkIHVzaW5nIHRoZSBgcmV2b2thYmxlYCBvcHRpb25cbiAgcmV2b2tlQnRuOiAnPGRpdiBjbGFzcz1cImNjLXJldm9rZSB7e2NsYXNzZXN9fVwiPnt7cG9saWN5fX08L2Rpdj4nLFxuXG4gIC8vIGRlZmluZSB0eXBlcyBvZiAnY29tcGxpYW5jZScgaGVyZS4gJ3t7dmFsdWV9fScgc3RyaW5ncyBpbiBoZXJlIGFyZSBsaW5rZWQgdG8gYGVsZW1lbnRzYFxuICBjb21wbGlhbmNlOiB7XG4gICAgaW5mbzogJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlXCI+e3tkaXNtaXNzfX08L2Rpdj4nLFxuICAgICdvcHQtaW4nOlxuICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3thbGxvd319e3tjdXN0b21pemV9fTwvZGl2PicsXG4gICAgJ29wdC1vdXQnOlxuICAgICAgJzxkaXYgY2xhc3M9XCJjYy1jb21wbGlhbmNlIGNjLWhpZ2hsaWdodFwiPnt7ZGlzbWlzc319e3tkZW55fX08L2Rpdj4nLFxuICAgIGNhdGVnb3JpZXM6ICc8ZGl2IGNsYXNzPVwiZm9ybVwiPnt7Y2F0ZWdvcmllc319e3tzYXZlfX08L2Rpdj4nXG4gIH0sXG5cbiAgLy8gc2VsZWN0IHlvdXIgdHlwZSBvZiBwb3B1cCBoZXJlXG4gIHR5cGU6ICdpbmZvJywgLy8gcmVmZXJzIHRvIGBjb21wbGlhbmNlYCAoaW4gb3RoZXIgd29yZHMsIHRoZSBidXR0b25zIHRoYXQgYXJlIGRpc3BsYXllZClcblxuICAvLyBkZWZpbmUgbGF5b3V0IGxheW91dHMgaGVyZVxuICBsYXlvdXRzOiB7XG4gICAgLy8gdGhlICdibG9jaycgbGF5b3V0IHRlbmQgdG8gYmUgZm9yIHNxdWFyZSBmbG9hdGluZyBwb3B1cHNcbiAgICBiYXNpYyAgICAgICAgIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19JyxcbiAgICAnYmFzaWMtY2xvc2UnIDogJ3t7bWVzc2FnZWxpbmt9fXt7Y29tcGxpYW5jZX19e3tjbG9zZX19JyxcbiAgICAnYmFzaWMtaGVhZGVyJzogJ3t7aGVhZGVyfX17e21lc3NhZ2V9fXt7bGlua319e3tjb21wbGlhbmNlfX0nXG4gICAgLy8gYWRkIGEgY3VzdG9tIGxheW91dCBoZXJlLCB0aGVuIGFkZCBzb21lIG5ldyBjc3Mgd2l0aCB0aGUgY2xhc3MgJy5jYy1sYXlvdXQtbXktY29vbC1sYXlvdXQnXG4gICAgLy8nbXktY29vbC1sYXlvdXQnOiAnPGRpdiBjbGFzcz1cIm15LXNwZWNpYWwtbGF5b3V0XCI+e3ttZXNzYWdlfX17e2NvbXBsaWFuY2V9fTwvZGl2Pnt7Y2xvc2V9fScsXG4gIH0sXG5cbiAgLy8gZGVmYXVsdCBsYXlvdXQgKHNlZSBhYm92ZSlcbiAgbGF5b3V0OiAnYmFzaWMnLFxuXG4gIC8vIHRoaXMgcmVmZXJzIHRvIHRoZSBwb3B1cCB3aW5kb3dzIHBvc2l0aW9uLiB3ZSBjdXJyZW50bHkgc3VwcG9ydDpcbiAgLy8gIC0gYmFubmVyIHBvc2l0aW9uczogdG9wLCBib3R0b21cbiAgLy8gIC0gZmxvYXRpbmcgcG9zaXRpb25zOiB0b3AtbGVmdCwgdG9wLXJpZ2h0LCBib3R0b20tbGVmdCwgYm90dG9tLXJpZ2h0XG4gIC8vXG4gIC8vIGFkZHMgYSBjbGFzcyBgY2MtZmxvYXRpbmdgIG9yIGBjYy1iYW5uZXJgIHdoaWNoIGhlbHBzIHdoZW4gc3R5bGluZ1xuICBwb3NpdGlvbjogJ2JvdHRvbScsIC8vIGRlZmF1bHQgcG9zaXRpb24gaXMgJ2JvdHRvbSdcblxuICAvLyBBdmFpbGFibGUgc3R5bGVzXG4gIC8vICAgIC1ibG9jayAoZGVmYXVsdCwgbm8gZXh0cmEgY2xhc3NlcylcbiAgLy8gICAgLWVkZ2VsZXNzXG4gIC8vICAgIC1jbGFzc2ljXG4gIC8vIHVzZSB5b3VyIG93biBzdHlsZSBuYW1lIGFuZCB1c2UgYC5jYy10aGVtZS1TVFlMRU5BTUVgIGNsYXNzIGluIENTUyB0byBlZGl0LlxuICAvLyBOb3RlOiBzdHlsZSBcIndpcmVcIiBpcyB1c2VkIGZvciB0aGUgY29uZmlndXJhdG9yLCBidXQgaGFzIG5vIENTUyBzdHlsZXMgb2YgaXRzIG93biwgb25seSBwYWxldHRlIGlzIHVzZWQuXG4gIHRoZW1lOiAnYmxvY2snLFxuXG4gIC8vIFRoZSBwb3B1cCBpcyBgZml4ZWRgIGJ5IGRlZmF1bHQsIGJ1dCBpZiB5b3Ugd2FudCBpdCB0byBiZSBzdGF0aWMgKGlubGluZSB3aXRoIHRoZSBwYWdlIGNvbnRlbnQpLCBzZXQgdGhpcyB0byBmYWxzZVxuICAvLyBOb3RlOiBieSBkZWZhdWx0LCB3ZSBhbmltYXRlIHRoZSBoZWlnaHQgb2YgdGhlIHBvcHVwIGZyb20gMCB0byBmdWxsIHNpemVcbiAgc3RhdGljOiBmYWxzZSxcblxuICAvLyBpZiB5b3Ugd2FudCBjdXN0b20gY29sb3VycywgcGFzcyB0aGVtIGluIGhlcmUuIHRoaXMgb2JqZWN0IHNob3VsZCBsb29rIGxpa2UgdGhpcy5cbiAgLy8gaWRlYWxseSwgYW55IGN1c3RvbSBjb2xvdXJzL3RoZW1lcyBzaG91bGQgYmUgY3JlYXRlZCBpbiBhIHNlcGFyYXRlIHN0eWxlIHNoZWV0LCBhcyB0aGlzIGlzIG1vcmUgZWZmaWNpZW50LlxuICAvLyAgIHtcbiAgLy8gICAgIHBvcHVwOiB7YmFja2dyb3VuZDogJyMwMDAwMDAnLCB0ZXh0OiAnI2ZmZicsIGxpbms6ICcjZmZmJ30sXG4gIC8vICAgICBidXR0b246IHtiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLCBib3JkZXI6ICcjZjhlNzFjJywgdGV4dDogJyNmOGU3MWMnfSxcbiAgLy8gICAgIGhpZ2hsaWdodDoge2JhY2tncm91bmQ6ICcjZjhlNzFjJywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjMDAwMDAwJ30sXG4gIC8vICAgfVxuICAvLyBgaGlnaGxpZ2h0YCBpcyBvcHRpb25hbCBhbmQgZXh0ZW5kcyBgYnV0dG9uYC4gaWYgaXQgZXhpc3RzLCBpdCB3aWxsIGFwcGx5IHRvIHRoZSBmaXJzdCBidXR0b25cbiAgLy8gb25seSBiYWNrZ3JvdW5kIG5lZWRzIHRvIGJlIGRlZmluZWQgZm9yIGV2ZXJ5IGVsZW1lbnQuIGlmIG5vdCBzZXQsIG90aGVyIGNvbG9ycyBjYW4gYmUgY2FsY3VsYXRlZCBmcm9tIGl0XG4gIHBhbGV0dGU6IG51bGwsXG5cbiAgLy8gU29tZSBjb3VudHJpZXMgUkVRVUlSRSB0aGF0IGEgdXNlciBjYW4gY2hhbmdlIHRoZWlyIG1pbmQuIFlvdSBjYW4gY29uZmlndXJlIHRoaXMgeW91cnNlbGYuXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUgdGhpcyBzaG91bGQgYmUgZmFsc2UsIGJ1dCB0aGUgYGNvb2tpZWNvbnNlbnQubGVnYWxgIGNhbiBjaGFuZ2UgdGhpcyB0byBgdHJ1ZWAgaWYgaXQgZGV0ZWN0cyB0aGF0IGl0IHNob3VsZFxuICByZXZva2FibGU6IGZhbHNlLFxuXG4gIC8vIGlmIHRydWUsIHRoZSByZXZva2FibGUgYnV0dG9uIHdpbGwgdHJhbmxhdGUgaW4gYW5kIG91dFxuICBhbmltYXRlUmV2b2thYmxlOiB0cnVlLFxuXG4gIC8vIHVzZWQgdG8gZGlzYWJsZSBsaW5rIG9uIGV4aXN0aW5nIGxheW91dHNcbiAgLy8gcmVwbGFjZXMgZWxlbWVudCBtZXNzYWdlbGluayB3aXRoIG1lc3NhZ2UgYW5kIHJlbW92ZXMgY29udGVudCBvZiBsaW5rXG4gIHNob3dMaW5rOiB0cnVlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBzY3JvbGwgcmFuZ2UgdG8gZW5hYmxlXG4gIGRpc21pc3NPblNjcm9sbDogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIGF1dG9kaXNtaXNzIGFmdGVyIHNldCB0aW1lXG4gIGRpc21pc3NPblRpbWVvdXQ6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgZGlzbWlzc09uV2luZG93Q2xpY2s6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyBjbGljayBhbnl0aGluZyBvbiB0aGUgcGFnZSwgZXhjbHVkaW5nIHRoZSBgaWdub3JlQ2xpY2tzRnJvbWAgYmVsb3cgKGlmIHdlIGNsaWNrIG9uIHRoZSByZXZva2UgYnV0dG9uIGV0YylcbiAgZGlzbWlzc09uTGlua0NsaWNrOiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMga2V5cyBhcmUgcHJlc3NlZCwgKCBhbGxvd0tleUNvZGUgPSAxMywgZGVueUtleUNvZGUgPSAyNyApXG4gIGRpc21pc3NPbktleVByZXNzOiBmYWxzZSxcblxuICAvLyBJZiBgZGlzbWlzc09uV2luZG93Q2xpY2tgIGlzIHRydWUsIHdlIGNhbiBjbGljayBvbiAncmV2b2tlJyBhbmQgd2UnbGwgc3RpbGwgZGlzbWlzcyB0aGUgYmFubmVyLCBzbyB3ZSBuZWVkIGV4Y2VwdGlvbnMuXG4gIC8vIHNob3VsZCBiZSBhbiBhcnJheSBvZiBjbGFzcyBuYW1lcyAobm90IENTUyBzZWxlY3RvcnMpXG4gIGlnbm9yZUNsaWNrc0Zyb206IFsnY2MtcmV2b2tlJywgJ2NjLWJ0bicsICdjYy1saW5rJ10sIC8vIGFscmVhZHkgaW5jbHVkZXMgdGhlIHJldm9rZSBidXR0b24gYW5kIHRoZSBiYW5uZXIgaXRzZWxmXG5cbiAgLy8gVGhlIGFwcGxpY2F0aW9uIGF1dG9tYXRpY2FsbHkgZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHVwIHNob3VsZCBvcGVuLlxuICAvLyBTZXQgdGhpcyB0byBmYWxzZSB0byBwcmV2ZW50IHRoaXMgZnJvbSBoYXBwZW5pbmcgYW5kIHRvIGFsbG93IHlvdSB0byBjb250cm9sIHRoZSBiZWhhdmlvdXIgeW91cnNlbGZcbiAgYXV0b09wZW46IHRydWUsXG5cbiAgLy8gQnkgZGVmYXVsdCB0aGUgY3JlYXRlZCBIVE1MIGlzIGF1dG9tYXRpY2FsbHkgYXBwZW5kZWQgdG8gdGhlIGNvbnRhaW5lciAod2hpY2ggZGVmYXVsdHMgdG8gPGJvZHk+KS4gWW91IGNhbiBwcmV2ZW50IHRoaXMgYmVoYXZpb3VyXG4gIC8vIGJ5IHNldHRpbmcgdGhpcyB0byBmYWxzZSwgYnV0IGlmIHlvdSBkbywgeW91IG11c3QgYXR0YWNoIHRoZSBgZWxlbWVudGAgeW91cnNlbGYsIHdoaWNoIGlzIGEgcHVibGljIHByb3BlcnR5IG9mIHRoZSBwb3B1cCBpbnN0YW5jZTpcbiAgLy9cbiAgLy8gICAgIGNvbnN0IGluc3RhbmNlID0gY29va2llY29uc2VudC5mYWN0b3J5KG9wdGlvbnMpXG4gIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluc3RhbmNlLmVsZW1lbnQpXG4gIC8vXG4gIGF1dG9BdHRhY2g6IHRydWUsXG5cbiAgLy8gc2V0IHZhbHVlIGlmIGZsb2F0aW5nIGxheW91dCBzaG91bGQgYmUgZm9yY2VkIGZvciBtb2JpbGUgZGV2aWNlc1xuICBtb2JpbGVGb3JjZUZsb2F0OiB0cnVlLFxuXG4gIC8vIHNpbXBsZSB3aGl0ZWxpc3QvYmxhY2tsaXN0IGZvciBwYWdlcy4gc3BlY2lmeSBwYWdlIGJ5OlxuICAvLyAgIC0gdXNpbmcgYSBzdHJpbmcgOiAnL2luZGV4Lmh0bWwnICAgICAgICAgICAobWF0Y2hlcyAnL2luZGV4Lmh0bWwnIGV4YWN0bHkpIE9SXG4gIC8vICAgLSB1c2luZyBSZWdFeHAgICA6IC9cXC9wYWdlX1tcXGRdK1xcLmh0bWwvICAgIChtYXRjaGVkICcvcGFnZV8xLmh0bWwnIGFuZCAnL3BhZ2VfMi5odG1sJyBldGMpXG4gIHdoaXRlbGlzdFBhZ2U6IFtdLFxuICBibGFja2xpc3RQYWdlOiBbXSxcblxuICAvLyBJZiB0aGlzIGlzIGRlZmluZWQsIHRoZW4gaXQgaXMgdXNlZCBhcyB0aGUgaW5uZXIgaHRtbCBpbnN0ZWFkIG9mIGxheW91dC4gVGhpcyBhbGxvd3MgZm9yIHVsdGltYXRlIGN1c3RvbWlzYXRpb24uXG4gIC8vIEJlIHN1cmUgdG8gdXNlIHRoZSBjbGFzc2VzIGBjYy1idG5gIGFuZCBgY2MtYWxsb3dgLCBgY2MtZGVueWAgb3IgYGNjLWRpc21pc3NgLiBUaGV5IGVuYWJsZSB0aGUgYXBwIHRvIHJlZ2lzdGVyIGNsaWNrXG4gIC8vIGhhbmRsZXJzLiBZb3UgY2FuIHVzZSBvdGhlciBwcmUtZXhpc3RpbmcgY2xhc3NlcyB0b28uIFNlZSBgc3JjL3N0eWxlc2AgZm9sZGVyLlxuICBvdmVycmlkZUhUTUw6IG51bGxcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gKCB1cmwsIGNhbGxiYWNrLCB0aW1lb3V0ICkgPT4ge1xuICBsZXQgdGltZW91dElkeFxuICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBzLnR5cGUgPSAndGV4dC8nICsgKHVybC50eXBlIHx8ICdqYXZhc2NyaXB0JylcbiAgcy5zcmMgPSB1cmwuc3JjIHx8IHVybFxuICBzLmFzeW5jID0gZmFsc2VcblxuICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgIGNvbnN0IHN0YXRlID0gcy5yZWFkeVN0YXRlXG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkeClcblxuICAgIGlmICghY2FsbGJhY2suZG9uZSAmJiAoIXN0YXRlIHx8IC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc3RhdGUpKSkge1xuICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWVcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKVxuXG4gIC8vIFlvdSBjYW4ndCBjYXRjaCBKU09OUCBFcnJvcnMsIGJlY2F1c2UgaXQncyBoYW5kbGVkIGJ5IHRoZSBzY3JpcHQgdGFnXG4gIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjYWxsYmFjay5kb25lID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbFxuICB9LCB0aW1lb3V0KVxufVxuXG5leHBvcnQgY29uc3QgbWFrZUFzeW5jUmVxdWVzdCA9ICggdXJsLCBvbkNvbXBsZXRlLCB0aW1lb3V0LCBwb3N0RGF0YSwgcmVxdWVzdEhlYWRlciApID0+IHtcbiAgY29uc3QgeGhyID0gbmV3ICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QgfHwgd2luZG93LkFjdGl2ZVhPYmplY3QpKFxuICAgICdNU1hNTDIuWE1MSFRUUC4zLjAnXG4gIClcblxuICB4aHIub3Blbihwb3N0RGF0YSA/ICdQT1NUJyA6ICdHRVQnLCB1cmwsIDEpXG5cbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXF1ZXN0SGVhZGVycykpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJlcXVlc3RIZWFkZXJzLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgICAgY29uc3Qgc3BsaXQgPSByZXF1ZXN0SGVhZGVyc1tpXS5zcGxpdCgnOicsIDIpXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcbiAgICAgICAgc3BsaXRbMF0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpLFxuICAgICAgICBzcGxpdFsxXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG9uQ29tcGxldGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA+IDMpIHtcbiAgICAgICAgb25Db21wbGV0ZSh4aHIpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgeGhyLnNlbmQocG9zdERhdGEpXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICcgJyArIGRvY3VtZW50LmNvb2tpZVxuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyArIG5hbWUgKyAnPScpXG4gIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHBhcnRzXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAuc3BsaXQoJzsnKVxuICAgICAgICAuc2hpZnQoKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKCBuYW1lLCB2YWx1ZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgKSA9PiB7XG4gIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcbiAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICc7ZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgKCBzZWN1cmUgPyAnO3NlY3VyZScgOiAnJyApXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgZ2V0Q29udHJhc3QsIGdldEhvdmVyQ29sb3IgfSBmcm9tICcuL3N0eWxlJ1xuXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gKCBlbGVtLCBjbGFzc05hbWUgKSA9PlxuICAhZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlXG4gID8gbnVsbCA6IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgPyBlbGVtIDogdHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKVxuXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IChoYXNoU3RyLCBwYWxldHRlLCBwcmVmaXgpID0+IHtcbiAgY29uc3QgY29sb3JTdHlsZXMgPSB7fVxuICBjb25zdCB7IHBvcHVwLCBidXR0b24sIGhpZ2hsaWdodCwgc2F2ZUJ1dHRvbiB9ID0gcGFsZXR0ZVxuXG4gIC8vIG5lZWRzIGJhY2tncm91bmQgY29sb3VyLCB0ZXh0IGFuZCBsaW5rIHdpbGwgYmUgc2V0IHRvIGJsYWNrL3doaXRlIGlmIG5vdCBzcGVjaWZpZWRcbiAgaWYgKHBvcHVwKSB7XG4gICAgICAvLyBhc3N1bWVzIHBvcHVwLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dCA/IHBvcHVwLnRleHQgOiBnZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKVxuICAgICAgcG9wdXAubGluayA9IHBvcHVwLmxpbmsgPyBwb3B1cC5saW5rIDogcG9wdXAudGV4dFxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtdG9vbHRpcCwgJyArIHByZWZpeCArICcgLmNjLXRvb2x0aXA6YWZ0ZXInXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcbiAgICAgIF1cbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2Mtd2luZG93J10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXG4gICAgICBdXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXJldm9rZSddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxuICAgICAgXVxuICAgICAgY29sb3JTdHlsZXNbXG4gICAgICAgICAgcHJlZml4ICsgJyAuY2MtbGluaywnICsgcHJlZml4ICsgJyAuY2MtbGluazphY3RpdmUsJyArIHByZWZpeCArICcgLmNjLWxpbms6dmlzaXRlZCdcbiAgICAgIF0gPSBbJ2NvbG9yOiAnICsgcG9wdXAubGlua11cblxuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgIC8vIGFzc3VtZXMgYnV0dG9uLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgYnV0dG9uLnRleHQgPSBidXR0b24udGV4dCA/IGJ1dHRvbi50ZXh0IDogZ2V0Q29udHJhc3QoYnV0dG9uLmJhY2tncm91bmQpO1xuICAgICAgICAgIGJ1dHRvbi5ib3JkZXIgPSBidXR0b24uYm9yZGVyID8gYnV0dG9uLmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10gPSBbXG4gICAgICAgICAgICAgICdjb2xvcjogJyArIGJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBidXR0b24uYmFja2dyb3VuZCxcbiAgICAgICAgICBdXG5cbiAgICAgICAgICBpZiAoYnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuJ10ucHVzaCgncGFkZGluZzogJyArIGJ1dHRvbi5wYWRkaW5nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYnV0dG9uLmJhY2tncm91bmQgIT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG46aG92ZXIsICcgKyBwcmVmaXggKyAnIC5jYy1idG46Zm9jdXMnXSA9IFtcbiAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgKGJ1dHRvbi5ob3ZlciB8fCBnZXRIb3ZlckNvbG9yKGJ1dHRvbi5iYWNrZ3JvdW5kKSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0LnRleHQgPSBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICAgICAgPyBoaWdobGlnaHQudGV4dFxuICAgICAgICAgICAgICAgICAgOiBnZXRDb250cmFzdChoaWdobGlnaHQuYmFja2dyb3VuZCk7XG4gICAgICAgICAgICAgIGhpZ2hsaWdodC5ib3JkZXIgPSBoaWdobGlnaHQuYm9yZGVyID8gaGlnaGxpZ2h0LmJvcmRlciA6ICd0cmFuc3BhcmVudCc7XG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcbiAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBoaWdobGlnaHQuYm9yZGVyLFxuICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZCxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHNldHMgaGlnaGxpZ2h0IHRleHQgY29sb3IgdG8gcG9wdXAgdGV4dC4gYmFja2dyb3VuZCBhbmQgYm9yZGVyIGFyZSB0cmFuc3BhcmVudCBieSBkZWZhdWx0LlxuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHNhdmVCdXR0b24pIHtcbiAgICAgICAgICBjb2xvclN0eWxlc1tgJHtwcmVmaXh9IC5jYy1idG4uY2Mtc2F2ZWBdID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBzYXZlQnV0dG9uLnRleHQsXG4gICAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJhY2tncm91bmQsXG4gICAgICAgICAgXVxuICAgICAgfVxuICB9XG5cbiAgLy8gdGhpcyB3aWxsIGJlIGludGVycHJldHRlZCBhcyBDU1MuIHRoZSBrZXkgaXMgdGhlIHNlbGVjdG9yLCBhbmQgZWFjaCBhcnJheSBlbGVtZW50IGlzIGEgcnVsZVxuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGUuaWQgPSBpZFxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzdHlsZSApXG4gIE9iamVjdC5lbnRyaWVzKCBjb2xvclN0eWxlcyApLmZvckVhY2goICggWyBwcm9wLCB2YWx1ZSBdLCBpbmRleCApID0+XG4gICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZSggYCR7cHJvcH17JHt2YWx1ZS5qb2luKCc7Jyl9fWAsIGluZGV4IClcbiAgKVxuICByZXR1cm4gc3R5bGVcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgKiBhcyBjb29raWUgZnJvbSBcIi4vY29va2llXCJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSBjb29raWUuZ2V0Q29va2llXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gY29va2llLnNldENvb2tpZVxuXG5cbmV4cG9ydCBjb25zdCBpbnRlcnBvbGF0ZVN0cmluZyA9ICggc3RyLCBjYWxsYmFjayApID0+XG4gIHN0ci5yZXBsYWNlKCAve3soW2Etel1bYS16MC05XFwtX10qKX19L2dpICwgKCBtYXRjaGVzLCByZXBsYWNlZCApID0+IGNhbGxiYWNrKCByZXBsYWNlZCApIHx8ICcnKVxuXG4vLyBvbmx5IHVzZWQgZm9yIHRocm90dGxpbmcgdGhlICdtb3VzZW1vdmUnIGV2ZW50ICh1c2VkIGZvciBhbmltYXRpbmcgdGhlIHJldm9rZSBidXR0b24gd2hlbiBgYW5pbWF0ZVJldm9rYWJsZWAgaXMgdHJ1ZSlcbmV4cG9ydCBjb25zdCB0aHJvdHRsZSA9IChjYWxsYmFjaywgbGltaXQpID0+IHtcbiAgbGV0IHdhaXQgPSBmYWxzZVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF3YWl0KSB7XG4gICAgICBjYWxsYmFjayguLi5hcmd1bWVudHMpXG4gICAgICB3YWl0ID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgd2FpdCA9IGZhbHNlXG4gICAgICB9LCBsaW1pdClcbiAgICB9XG4gIH1cbn1cblxuLy8gb25seSB1c2VkIGZvciBoYXNoaW5nIGpzb24gb2JqZWN0cyAodXNlZCBmb3IgaGFzaCBtYXBwaW5nIHBhbGV0dGUgb2JqZWN0cywgdXNlZCB3aGVuIGN1c3RvbSBjb2xvdXJzIGFyZSBwYXNzZWQgdGhyb3VnaCBKYXZhU2NyaXB0KVxuZXhwb3J0IGNvbnN0IGhhc2ggPSBzdHIgPT4ge1xuICBsZXQgaGFzaE51bSA9IDAsXG4gICAgaSA9IDAsXG4gICAgY2hyLFxuICAgIGxlbiA9IHN0ci5sZW5ndGhcbiAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiBoYXNoTnVtXG4gIGZvciAoIGk7IGkgPCBsZW47ICsraSApIHtcbiAgICBjaHIgPSBzdHIuY2hhckNvZGVBdCggaSApXG4gICAgaGFzaE51bSA9ICggaGFzaE51bSA8PCA1ICkgLSBoYXNoTnVtICsgY2hyXG4gICAgaGFzaE51bSB8PSAwXG4gIH1cbiAgcmV0dXJuIGhhc2hOdW1cbn1cbmltcG9ydCAqIGFzIHN0eWxlIGZyb20gXCIuL3N0eWxlXCJcbmV4cG9ydCBjb25zdCBub3JtYWxpc2VIZXggPSBzdHlsZS5ub3JtYWxpc2VIZXhcbmV4cG9ydCBjb25zdCBnZXRDb250cmFzdCA9IHN0eWxlLmdldENvbnRyYXN0XG5leHBvcnQgY29uc3QgZ2V0THVtaW5hbmNlID0gc3R5bGUuZ2V0THVtaW5hbmNlXG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9c3R5bGUuZ2V0SG92ZXJDb2xvclxuXG5pbXBvcnQgKiBhcyBkb20gZnJvbSBcIi4vZG9tXCJcbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSBkb20udHJhdmVyc2VET01QYXRoXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IGRvbS5hZGRDdXN0b21TdHlsZXNoZWV0XG5cbmltcG9ydCAqIGFzIHZhbGlkYXRpb24gZnJvbSBcIi4vdmFsaWRhdGlvblwiXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHZhbGlkYXRpb24uaXNWYWxpZFN0YXR1c1xuZXhwb3J0IGNvbnN0IGlzUGxhaW5PYmplY3QgPSB2YWxpZGF0aW9uLmlzUGxhaW5PYmplY3RcbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9IHZhbGlkYXRpb24uaXNNb2JpbGVcblxuaW1wb3J0ICogYXMgYXN5bmNGbnMgZnJvbSBcIi4vYXN5bmNcIlxuZXhwb3J0IGNvbnN0IGdldFNjcmlwdCA9IGFzeW5jRm5zLmdldFNjcmlwdFxuZXhwb3J0IGNvbnN0IG1ha2VBc3luY1JlcXVlc3QgPSBhc3luY0Zucy5tYWtlQXN5bmNSZXF1ZXN0IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGlzZUhleCA9IGhleCA9PlxuICBoZXhbMF0gPT0gJyMnXG4gICAgPyBoZXguc3Vic3RyKDEpIDogaGV4Lmxlbmd0aCA9PSAzXG4gICAgPyBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl0gOiBoZXhcblxuLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gaGV4ID0+IHtcbiAgaGV4ID0gbm9ybWFsaXNlSGV4KGhleClcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMCwgMiksIDE2KVxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNilcbiAgY29uc3QgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwXG4gIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnXG59XG5cbi8vIHVzZWQgdG8gY2hhbmdlIGNvbG9yIG9uIGhpZ2hsaWdodFxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IGhleCA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KG5vcm1hbGlzZUhleChoZXgpLCAxNiksXG4gICAgYW10ID0gMzgsXG4gICAgUiA9IChudW0gPj4gMTYpICsgYW10LFxuICAgIEIgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQsXG4gICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXRcbiAgICByZXR1cm4gJyMnICsgKFxuICAgIDB4MTAwMDAwMCArXG4gICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXG4gICAgKEIgPCAyNTUgPyAoQiA8IDEgPyAwIDogQikgOiAyNTUpICogMHgxMDAgK1xuICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxuICApXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5zbGljZSgxKVxufVxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPSBoZXggPT4ge1xuICBoZXggPSBub3JtYWxpc2VIZXgoIGhleCApXG4gIC8vIGZvciBibGFjayBidXR0b25zXG4gIHJldHVybiBoZXggPT09ICcwMDAwMDAnID8gJyMyMjInIDogZ2V0THVtaW5hbmNlKCBoZXggKVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IHN0YXR1c2VzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhdHVzIGlzIGluIHRoZSBjb25zdGFudHMgbGlzdFxuICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHN0YXR1cyA9PiBzdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPj0gMFxuXG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSAoKSA9PlxuICAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKVxuXG4vLyBUaGUgY29kZSBcInR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbFwiIGFsbG93cyBBcnJheSBvYmplY3RzXG5leHBvcnQgY29uc3QgaXNQbGFpbk9iamVjdCA9IG9iaiA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yID09IE9iamVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==