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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./src/utils.js");














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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");











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
} // An object containing all the location services we have already set up.
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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");













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
        if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["isValidStatus"])(status)) {
          var cookieName = name + '_' + categoryName;
          var chosenBefore = _constants__WEBPACK_IMPORTED_MODULE_8__["statuses"].indexOf(Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getCookie"])(cookieName)) >= 0;
          console.log(cookieName, status, expiryDays, domain, path, secure);
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["setCookie"])(cookieName, status, expiryDays, domain, path, secure);

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
        return Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getCookie"])(_this5.options.cookie.name + '_' + categoryName);
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
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["setCookie"])(name + '_' + categoryName, '', -1, domain, path);
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
        return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, _constants__WEBPACK_IMPORTED_MODULE_8__["categories"][index], Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["isValidStatus"])(status));
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

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["isMobile"])() && opts.mobileForceFloat) {
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
        interpolated[prop] = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(opts.elements[prop], function (name) {
          var str = opts.content[name];
          return name && typeof str == 'string' && str.length ? str : '';
        });
      }); // checks if the type is valid and defaults to info if it's not

      var complianceType = opts.compliance[opts.type];

      if (!complianceType) {
        complianceType = opts.compliance.info;
      } // build the compliance types from the already interpolated `elements`


      interpolated.compliance = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(complianceType, function (name) {
        return interpolated[name];
      }); // checks if the layout is valid and defaults to basic if it's not

      var layout = opts.layouts[opts.layout];

      if (!layout) {
        layout = opts.layouts.basic;
      }

      return Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["interpolateString"])(layout, function (match) {
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
      var btn = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

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
      var hashStr = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["hash"])(JSON.stringify(palette));
      var selector = 'cc-color-override-' + hashStr;
      var isValid = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["isPlainObject"])(palette);
      this.customStyleSelector = isValid ? selector : null;

      if (isValid) {
        this.addCustomStyle(hashStr, palette, '.' + selector);
      }

      return isValid;
    }
  }, {
    key: "addCustomStyle",
    value: function addCustomStyle(hashStr, palette, prefix) {
      // only add this if a style like it doesn't exist
      if (this.customStyles[hashStr]) {
        // custom style already exists, so increment the reference count
        ++this.customStyles[hashStr].references;
        return;
      }

      var colorStyles = {};
      var popup = palette.popup,
          button = palette.button,
          highlight = palette.highlight,
          saveButton = palette.saveButton; // needs background colour, text and link will be set to black/white if not specified

      if (popup) {
        // assumes popup.background is set
        popup.text = popup.text ? popup.text : Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getContrast"])(popup.background);
        popup.link = popup.link ? popup.link : popup.text;
        colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
        colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
        colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
        colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

        if (button) {
          // assumes button.background is set
          button.text = button.text ? button.text : Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getContrast"])(button.background);
          button.border = button.border ? button.border : 'transparent';
          colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

          if (button.padding) {
            colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
          }

          if (button.background != 'transparent') {
            colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getHoverColor"])(button.background))];
          }

          if (highlight) {
            //assumes highlight.background is set
            highlight.text = highlight.text ? highlight.text : Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["getContrast"])(highlight.background);
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

      this.customStyles[hashStr] = {
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
  }, {
    key: "removeCustomStyle",
    value: function removeCustomStyle(palette) {
      var hashStr = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["hash"])(JSON.stringify(palette));
      var customStyle = this.customStyles[hashStr];

      if (customStyle && ! --customStyle.references) {
        var styleNode = customStyle.element.ownerNode;

        if (styleNode && styleNode.parentNode) {
          styleNode.parentNode.removeChild(styleNode);
        }

        this.customStyles[hashStr] = null;
      }
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

      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["isMobile"])()) this.options.animateRevokable = false;

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
          var onMouseMove = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__["throttle"])(function (evt) {
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

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: interpolateString, getCookie, setCookie, throttle, hash, normaliseHex, getContrast, getLuminance, getHoverColor, isMobile, isPlainObject, traverseDOMPath, isValidStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normaliseHex", function() { return normaliseHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseDOMPath", function() { return traverseDOMPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidStatus", function() { return isValidStatus; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");




var interpolateString = function interpolateString(str, callback) {
  return str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, function (matches, replaced) {
    return callback(replaced) || '';
  });
};
var getCookie = function getCookie(name) {
  var value = ' ' + document.cookie;
  var parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
var setCookie = function setCookie(name, value, expiryDays, domain, path, secure) {
  var exdate = new Date();
  exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
  document.cookie = name + '=' + value + ';expires=' + exdate.toUTCString() + ';path=' + (path || '/') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
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
var isMobile = function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}; // The code "typeof obj === 'object' && obj !== null" allows Array objects

var isPlainObject = function isPlainObject(obj) {
  return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj) === 'object' && obj !== null && obj.constructor == Object;
};
var traverseDOMPath = function traverseDOMPath(elem, className) {
  return !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
};
/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

var isValidStatus = function isValidStatus(status) {
  return _constants__WEBPACK_IMPORTED_MODULE_1__["statuses"].indexOf(status) >= 0;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZWNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9CYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvTGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xlZ2FsLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL2xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9vcHRpb25zL3BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzP2E0M2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInN0YXR1c2VzIiwic3RhdHVzRGVueSIsInN0YXR1c0FsbG93Iiwic3RhdHVzRGlzbWlzcyIsImNhdGVnb3JpZXMiLCJDb29raWVDb25zZW50Iiwib3B0aW9ucyIsImFuc3dlcnMiLCJtYXAiLCJjYXRlZ29yeSIsImFuc3dlciIsImdldENvb2tpZSIsImlzVmFsaWRTdGF0dXMiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImVtaXQiLCJsZWdhbCIsImNvdW50cnlDb2RlIiwiaW5pdGlhbGl6YXRpb25Db21wbGV0ZSIsImNvZGUiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwibG9jYXRlIiwiaW5pdGlhbGl6YXRpb25FcnJvciIsInJlc3VsdCIsIkxlZ2FsIiwiYXBwbHlMYXciLCJQb3B1cCIsImVycm9yIiwiQmFzZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJ3aW5kb3ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwibG9vcFByb3BlcnRpZXMiLCJvdmVyd3JpdGVzIiwia2V5IiwidmFsdWUiLCJBcnJheSIsImVudHJpZXMiLCJyZWR1Y2UiLCJkZWFmdWx0T3B0aW9ucyIsIm1lcmdlT3B0aW9ucyIsIm9uIiwiYmluZCIsImRlZmF1bHRzIiwiZGVmYXVsdE9wdGlvbnMiLCJoYXNMYXciLCJpbmRleE9mIiwicmV2b2thYmxlIiwiZXhwbGljaXRBY3Rpb24iLCJjb3VudHJ5IiwiZ2V0IiwiZW5hYmxlZCIsInJlZ2lvbmFsTGF3IiwiZGlzbWlzc09uU2Nyb2xsIiwiZGlzbWlzc09uVGltZW91dCIsImdldFNjcmlwdCIsInVybCIsImNhbGxiYWNrIiwidGltZW91dCIsInRpbWVvdXRJZHgiLCJzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInNyYyIsImFzeW5jIiwib25yZWFkeXN0YXRlY2hhbmdlIiwib25sb2FkIiwic3RhdGUiLCJyZWFkeVN0YXRlIiwiY2xlYXJUaW1lb3V0IiwiZG9uZSIsInRlc3QiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJtYWtlQXN5bmNSZXF1ZXN0Iiwib25Db21wbGV0ZSIsInBvc3REYXRhIiwicmVxdWVzdEhlYWRlcnMiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsImlzQXJyYXkiLCJpIiwibCIsInNwbGl0IiwicmVwbGFjZSIsInNlbmQiLCJjdXJyZW50U2VydmljZUluZGV4Iiwic2VydmljZSIsImdldFNlcnZpY2VCeUlkeCIsInNlcnZpY2VzIiwiaWR4Iiwic2VydmljZU9wdGlvbiIsImR5bmFtaWNPcHRzIiwibmFtZSIsImFzc2lnbiIsInNlcnZpY2VEZWZpbml0aW9ucyIsImlzUGxhaW5PYmplY3QiLCJjb21wbGV0ZSIsImdldE5leHRTZXJ2aWNlIiwiRXJyb3IiLCJjYWxsYmFja0NvbXBsZXRlIiwiY2FsbGJhY2tFcnJvciIsInJ1blNlcnZpY2UiLCJydW5OZXh0U2VydmljZU9uRXJyb3IiLCJzZXJ2aWNlT3B0cyIsImdldEN1cnJlbnRTZXJ2aWNlT3B0cyIsIl8iLCJwYXJhbSIsInRlbXBOYW1lIiwiRGF0ZSIsIm5vdyIsInJlcyIsIl9fSlNPTlBfREFUQSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnRlcnBvbGF0ZVVybCIsInJlcXVlc3RGdW5jdGlvbiIsImlzU2NyaXB0Iiwic2V0dXBVcmwiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJjYWxsIiwiZGF0YSIsImhlYWRlcnMiLCJzZXJ2aWNlUmVzdWx0SGFuZGxlciIsImFzeW5jUmVzdWx0Iiwib25TZXJ2aWNlUmVzdWx0IiwiZXJyIiwibG9nRXJyb3IiLCJuZXh0U2VydmljZSIsImNvbXBsZXRlU2VydmljZSIsInZhbCIsImZuIiwiY29uc29sZSIsIndhcm4iLCJ1c2VyQ2F0ZWdvcmllcyIsIlVOQ0FURUdPUklaRUQiLCJFU1NFTlRJQUwiLCJQRVJTT05BTElaQVRJT04iLCJBTkFMWVRJQ1MiLCJNQVJLRVRJTkciLCJjdXN0b21TdHlsZXMiLCJoYXNUcmFuc2l0aW9uIiwiZWwiLCJ0cmFucyIsInQiLCJPVCIsIm1zVCIsIk1velQiLCJXZWJraXRUIiwicHJlZml4IiwiaGFzT3duUHJvcGVydHkiLCJzdHlsZSIsImNhblVzZUNvb2tpZXMiLCJibGFja2xpc3RQYWdlIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsIndoaXRlbGlzdFBhZ2UiLCJjb29raWVQb3B1cCIsImdldFBvcHVwQ2xhc3NlcyIsImpvaW4iLCJnZXRQb3B1cElubmVyTWFya3VwIiwiY3VzdG9tSFRNTCIsIm92ZXJyaWRlSFRNTCIsIndyYXBwZXIiLCJhcHBlbmRNYXJrdXAiLCJkaXNwbGF5IiwiZWxlbWVudCIsImZpcnN0Q2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBseUF1dG9EaXNtaXNzIiwiYXBwbHlSZXZva2VCdXR0b24iLCJhdXRvT3BlbiIsImlzT3BlbiIsImZhZGVJbiIsInRvZ2dsZVJldm9rZUJ1dHRvbiIsInNob3dSZXZva2UiLCJmYWRlT3V0IiwiYWZ0ZXJUcmFuc2l0aW9uIiwiYWZ0ZXJGYWRlT3V0IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwibWF4SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZmFkZUluVGltZW91dCIsIm9wZW5pbmdUaW1lb3V0IiwiYWZ0ZXJGYWRlSW4iLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwidHJhbnNpdGlvbkVuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93IiwicmV2b2tlQnRuIiwicHJldmVudE9wZW4iLCJjbGVhclN0YXR1c2VzIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwic3RhdHVzIiwiaGFzQW5zd2VyZWQiLCJjb29raWUiLCJleHBpcnlEYXlzIiwiZG9tYWluIiwicGF0aCIsInNlY3VyZSIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwiY29va2llTmFtZSIsImNob3NlbkJlZm9yZSIsImxvZyIsInNldENvb2tpZSIsImFyZ3VtZW50cyIsImZvckVhY2giLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJtYXRjaCIsInBvc2l0aW9uIiwicG9zIiwib3B0cyIsInBvc2l0aW9uU3R5bGUiLCJpc01vYmlsZSIsIm1vYmlsZUZvcmNlRmxvYXQiLCJjbGFzc2VzIiwidGhlbWUiLCJwdXNoIiwiYXBwbHkiLCJnZXRQb3NpdGlvbkNsYXNzZXMiLCJhdHRhY2hDdXN0b21QYWxldHRlIiwicGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJzaG93TGluayIsImVsZW1lbnRzIiwibGluayIsIm1lc3NhZ2VsaW5rIiwibWVzc2FnZSIsInByb3AiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNvbnRlbnQiLCJjb21wbGlhbmNlVHlwZSIsImNvbXBsaWFuY2UiLCJpbmZvIiwibGF5b3V0IiwibGF5b3V0cyIsImJhc2ljIiwibWFya3VwIiwiZGl2IiwiY29udCIsImNvbnRhaW5lciIsIm5vZGVUeXBlIiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJldmVudCIsImhhbmRsZUJ1dHRvbkNsaWNrIiwicXVlcnlTZWxlY3RvckFsbCIsImNoZWNrYm94IiwidG9VcHBlckNhc2UiLCJjaGVja2VkIiwic2V0U3RhdHVzZXMiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhdXRvQXR0YWNoIiwiaW5zZXJ0QmVmb3JlIiwiYnRuIiwidHJhdmVyc2VET01QYXRoIiwidGFyZ2V0IiwiY2xvc2UiLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJldm9rZUNob2ljZSIsImhhc2hTdHIiLCJoYXNoIiwic2VsZWN0b3IiLCJpc1ZhbGlkIiwiYWRkQ3VzdG9tU3R5bGUiLCJyZWZlcmVuY2VzIiwiY29sb3JTdHlsZXMiLCJwb3B1cCIsImJ1dHRvbiIsImhpZ2hsaWdodCIsInNhdmVCdXR0b24iLCJ0ZXh0IiwiZ2V0Q29udHJhc3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvciIsImhlYWQiLCJzaGVldCIsInJ1bGVJbmRleCIsImluc2VydFJ1bGUiLCJjdXN0b21TdHlsZSIsInN0eWxlTm9kZSIsIm93bmVyTm9kZSIsInJlbW92ZUNoaWxkIiwiY29tcG9zZWRQYXRoIiwiYXJyIiwiZGVsYXkiLCJzY3JvbGxSYW5nZSIsImRpc21pc3NPbkxpbmtDbGljayIsImRpc21pc3NPbldpbmRvd0NsaWNrIiwiZGlzbWlzc09uS2V5UHJlc3MiLCJkaXNtaXNzVGltZW91dCIsIk1hdGgiLCJmbG9vciIsIm9uV2luZG93U2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJwYXNzaXZlIiwib25XaW5kb3dDbGljayIsImV2dCIsImdldEV2ZW50UGF0aCIsImlnbm9yZUNsaWNrc0Zyb20iLCJpZ25vcmVkQ2xpY2siLCJvbkxpbmtDbGljayIsImVsZW0iLCJ0YWdOYW1lIiwib25LZXlQcmVzcyIsImtleUNvZGUiLCJhbmltYXRlUmV2b2thYmxlIiwicG9saWN5Iiwib25Nb3VzZU1vdmUiLCJ0aHJvdHRsZSIsImFjdGl2ZSIsIm1pblkiLCJtYXhZIiwiaW5uZXJIZWlnaHQiLCJjbGllbnRZIiwiaXBpbmZvIiwicmVzcG9uc2UiLCJqc29uIiwicGFyc2UiLCJ0b0Vycm9yIiwiaXBpbmZvZGIiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJpc29fY29kZSIsImhlYWRlciIsImRpc21pc3MiLCJhbGxvdyIsImRlbnkiLCJocmVmIiwic2F2ZSIsIm1vZGFsIiwicmVwbGFjZWQiLCJwYXJ0cyIsInBvcCIsInNoaWZ0IiwiZXhkYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInRvVVRDU3RyaW5nIiwibGltaXQiLCJ3YWl0IiwiaGFzaE51bSIsImNociIsImxlbiIsImNoYXJDb2RlQXQiLCJub3JtYWxpc2VIZXgiLCJoZXgiLCJzdWJzdHIiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsInlpcSIsImdldEx1bWluYW5jZSIsIm51bSIsImFtdCIsIlIiLCJCIiwiRyIsInRvU3RyaW5nIiwic2xpY2UiLCJ1c2VyQWdlbnQiLCJj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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSx5QkFBeUI7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvYkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFPLENBQUMsdURBQVE7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNB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QixDQUhLO0FBQUEsQ0FBeEI7QUFLUDs7Ozs7O0FBS08sSUFBTXJSLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQXNNLE1BQU07QUFBQSxTQUFJbE4sbURBQVEsQ0FBQ3NELE9BQVQsQ0FBaUI0SixNQUFqQixLQUE0QixDQUFoQztBQUFBLENBQTVCLEMiLCJmaWxlIjoiY29va2llY29uc2VudC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb29raWVjb25zZW50LmpzXCIpO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVSZXN0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIG5vbkl0ZXJhYmxlUmVzdCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlUmVzdFwiKTtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2Mtd2luZG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTsgfVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7IH1cXG5cXG4vKiBvbmx5IGFuaW1hdGUgaWZoYXMgY2xhc3MgJ2NjLWFuaW1hdGUnICovXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yZW0pOyB9XFxuXFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1hY3RpdmUuY2MtYm90dG9tIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxuXFxuLmNjLWdyb3dlciB7XFxuICAvKiBJbml0aWFsbHkgd2UgZG9uJ3Qgd2FudCBhbnkgaGVpZ2h0LCBhbmQgd2Ugd2FudCB0aGUgY29udGVudHMgdG8gYmUgaGlkZGVuICovXFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIC8qIFNldCBvdXIgdHJhbnNpdGlvbnMgdXAuICovXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbW96LXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtbXMtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1vLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzOyB9XFxuXFxuLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGV4Y2x1ZGUgcGFkZGluZyB3aGVuIGRlYWxpbmcgd2l0aCB3aWR0aCAqL1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQ2FsaWJyaSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6aG92ZXIsXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpc2VzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1OyB9XFxuXFxuLmNjLWNsb3NlOmhvdmVyLFxcbi5jYy1jbG9zZTpmb2N1cyB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDNlbTtcXG4gIHJpZ2h0OiB1bnNldDsgfVxcblxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDIycHgpO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMnB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwczsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtaW5mbzpmb2N1cyArIC5jYy10b29sdGlwIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gICAgYm90dG9tOiA0NnB4O1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlcjogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNHB4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC43KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgd2lkdGg6IDEwcHg7XFxuICAgICAgaGVpZ2h0OiAxMHB4O1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgYm90dG9tOiAtN3B4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgYm94LXNoYWRvdzogMnB4IDFweCAxcHggcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjUpOyB9XFxuICAgIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHAge1xcbiAgICAgIG1hcmdpbjogMDsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfSB9XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSwgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MzZweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAuY2Mtd2luZG93LmNjLXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyLCAuY2Mtd2luZG93LmNjLWZsb2F0aW5nLCAuY2Mtd2luZG93LmNjLXJpZ2h0LCAuY2Mtd2luZG93LmNjLWxlZnQge1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDsgfVxcbiAgLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogdW5zZXQ7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy1iYW5uZXIgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICAgIGZsZXg6IDEgMSBhdXRvOyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gICAgbWF4LXdpZHRoOiBub25lOyB9XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy13aW5kb3cgLmNjLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7IH1cXG4gIC5jYy13aW5kb3cgLmNjLWNhdGVnb3J5IHtcXG4gICAgbWFyZ2luOiA0cHggMDsgfVxcbiAgICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSAuY2MtYnRuOm5vdCguY2MtaW5mbykge1xcbiAgICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7XFxuICAgICAgbWluLXdpZHRoOiAxNDBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODU0cHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4uY2Mtc2F2ZSB7XFxuICAgIG1hcmdpbjogOHB4IDA7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc5MHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gIC5mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7IH1cXG4gIC5jYy1idG46bm90KC5jYy1pbmZvKTpub3QoLmNjLXNhdmUpIHtcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTsgfSB9XFxuXFxuLyogQ2xhc3NpYyAqL1xcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1jbGFzc2ljIHtcXG4gIHBhZGRpbmc6IDEuMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1jb21wbGlhbmNlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZsZXg6IG5vbmU7IH1cXG5cXG4uY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWJ0biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG46bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAxNDBweDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgdG9wOiAtMXB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB6LWluZGV4OiAxOyB9XFxuICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICBsZWZ0OiA2cHg7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0gKyAuY2MtYnRuLWNoZWNrYm94OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMUY1RjVcXFwiOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2MtYnRuLWNoZWNrYm94OmFmdGVyIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcXDI3MTNcXFwiO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IC00cHg7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTUwLCAxNTAsIDE1MCwgMC41KTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bi5jYy1pbmZvIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMCA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG46bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAwOyB9XFxuICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLXRvb2x0aXAge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwOmFmdGVyIHtcXG4gICAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItcmlnaHQ6IHRoaW4gc29saWQgbGlnaHRncmV5OyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLyogRWRnZWxlc3MgKi9cXG4uY2MtdGhlbWUtZWRnZWxlc3MuY2Mtd2luZG93IHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwLjhlbSAxLjhlbTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7IH1cXG4gIC5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy1idG4uY2MtaW5mbyB7XFxuICAgIHBhZGRpbmc6IDAuNGVtIDRweDsgfVxcblxcbi5jYy13aW5kb3cuY2MtdGhlbWUtZWRnZWxlc3MuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIntcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tfaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiKFwiLmNvbmNhdChpdGVtWzJdLCBcIikgYW5kIChcIikuY29uY2F0KG1lZGlhUXVlcnksIFwiKVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290KS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiAkZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiAkZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gJGdldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIFJlZmxlY3RBcHBseSh0aGlzLmxpc3RlbmVyLCB0aGlzLnRhcmdldCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBjb25zdCBzdGF0dXNlcyA9IFsgXCJERU5ZXCIsIFwiQUxMT1dcIiwgXCJESVNNSVNTXCIgXVxuZXhwb3J0IGNvbnN0IHN0YXR1c0RlbnkgPSBcIkRFTllcIlxuZXhwb3J0IGNvbnN0IHN0YXR1c0FsbG93ID0gXCJBTExPV1wiXG5leHBvcnQgY29uc3Qgc3RhdHVzRGlzbWlzcyA9IFwiRElTTUlTU1wiXG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0gWyBcIlVOQ0FURUdPUklaRURcIiwgXCJFU1NFTlRJQUxcIiwgXCJQRVJTT05BTElaQVRJT05cIiwgXCJBTkFMWVRJQ1NcIiwgXCJNQVJLRVRJTkdcIiBdIiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vbW9kZWxzL0Jhc2VcIlxuaW1wb3J0IExlZ2FsIGZyb20gXCIuL21vZGVscy9MZWdhbFwiXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vbW9kZWxzL0xvY2F0aW9uXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9tb2RlbHMvUG9wdXBcIlxuXG5pbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSBcIi4vY29uc3RhbnRzXCJcbmltcG9ydCB7IGdldENvb2tpZSwgaXNWYWxpZFN0YXR1cyB9IGZyb20gXCIuL3V0aWxzXCJcblxuLy8gVGhpcyBmdW5jdGlvbiBpbml0aWFsaXplcyB0aGUgYXBwIGJ5IGNvbWJpbmluZyB0aGUgdXNlIG9mIHRoZSBQb3B1cCwgTG9jYXRvciBhbmQgTGF3IG1vZHVsZXNcbi8vIFlvdSBjYW4gc3RyaW5nIHRvZ2V0aGVyIHRoZXNlIHRocmVlIG1vZHVsZXMgeW91cnNlbGYgaG93ZXZlciB5b3Ugd2FudCwgYnkgd3JpdGluZyBhIG5ldyBmdW5jdGlvbi5cblxuY2xhc3MgQ29va2llQ29uc2VudCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApe1xuICAgIHN1cGVyKCBvcHRpb25zIClcblxuICAgIGNvbnN0IGFuc3dlcnMgPSBjYXRlZ29yaWVzLm1hcCggY2F0ZWdvcnkgPT4ge1xuICAgICAgY29uc3QgYW5zd2VyID0gZ2V0Q29va2llKCdjb29raWVjb25zZW50X3N0YXR1c18nK2NhdGVnb3J5KVxuICAgICAgcmV0dXJuIGlzVmFsaWRTdGF0dXMoYW5zd2VyKSA/IHsgW2NhdGVnb3J5XTogYW5zd2VyIH0gOiB1bmRlZmluZWRcbiAgICB9KS5maWx0ZXIob2JqID0+IG9iaiA/IG9ialtPYmplY3Qua2V5cyhvYmopWzBdXSA6IGZhbHNlKVxuXG4gICAgLy8gaWYgdGhleSBoYXZlIGFscmVhZHkgYW5zd2VyZWRcbiAgICBpZiAoYW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCBcImluaXRpYWxpemVkXCIsIGFuc3dlcnMgKSApXG4gICAgfSBlbHNlIGlmICggdGhpcy5vcHRpb25zLmxlZ2FsICYmIHRoaXMub3B0aW9ucy5sZWdhbC5jb3VudHJ5Q29kZSApIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoIHsgY29kZTogdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlIH0gKVxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApIHtcbiAgICAgIHJldHVybiBuZXcgTG9jYXRpb24oIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApLmxvY2F0ZSggdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlLCB0aGlzLmluaXRpYWxpemF0aW9uRXJyb3IgKVxuICAgIH1cbiAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoe30pXG4gIH1cbiAgaW5pdGlhbGl6YXRpb25Db21wbGV0ZSggcmVzdWx0ICl7XG4gICAgaWYgKHJlc3VsdC5jb2RlKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBuZXcgTGVnYWwodGhpcy5vcHRpb25zLmxlZ2FsKS5hcHBseUxhdyggdGhpcy5vcHRpb25zLCByZXN1bHQuY29kZSApXG4gICAgfVxuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdChcImluaXRpYWxpemVkXCIsIG5ldyBQb3B1cCggdGhpcy5vcHRpb25zICkgKSwgMCApXG4gIH1cbiAgaW5pdGlhbGl6YXRpb25FcnJvciggZXJyb3IgKSB7XG4gICAgc2V0VGltZW91dCggKCkgPT4gdGhpcy5lbWl0KCBcImVycm9yXCIsIGVycm9yLCBuZXcgUG9wdXAoIHRoaXMub3B0aW9ucyApICksIDAgKVxuICB9XG59XG5cbmlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBDb29raWVDb25zZW50XG59IGVsc2Uge1xuICB3aW5kb3cuQ29va2llQ29uc2VudCA9IENvb2tpZUNvbnNlbnRcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxuXG5jb25zdCBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbmNvbnN0IGxvb3BQcm9wZXJ0aWVzID0gb3ZlcndyaXRlcyA9PiAob2JqLCBba2V5LCB2YWx1ZV0pID0+IHtcbiAgaWYgKG92ZXJ3cml0ZXMgaW5zdGFuY2VvZiBPYmplY3QgJiYgb3ZlcndyaXRlc1trZXldICkge1xuICAgIG9ialtrZXldID0gXG4gICAgICB2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhdmFsdWUgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgPyBPYmplY3QuZW50cmllcyh2YWx1ZSkucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXNba2V5XSksIHt9KVxuICAgICAgOiBvdmVyd3JpdGVzW2tleV0gaW5zdGFuY2VvZiBPYmplY3QgJiYgIW92ZXJ3cml0ZXNba2V5XSBpbnN0YW5jZW9mIEFycmF5XG4gICAgICA/IHZhbHVlXG4gICAgICA6IG92ZXJ3cml0ZXNba2V5XVxuICB9IGVsc2Uge1xuICAgICAgb2JqW2tleV0gPSB2YWx1ZVxuICB9XG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBkZWFmdWx0T3B0aW9ucywgb3B0aW9ucyA9IHt9ICl7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5tZXJnZU9wdGlvbnMoIGRlYWZ1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgICB0aGlzLm9uID0gZW1pdHRlci5vbi5iaW5kKCBlbWl0dGVyIClcbiAgICB0aGlzLmVtaXQgPSBlbWl0dGVyLmVtaXQuYmluZCggZW1pdHRlciApXG4gIH1cbiAgbWVyZ2VPcHRpb25zKCBkZWZhdWx0cywgb3ZlcndyaXRlcyApe1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhkZWZhdWx0cykucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXMpLCB7fSlcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL2xlZ2FsXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVnYWwgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgPSB7fSApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICB9XG4gIGdldCggY291bnRyeUNvZGUgKXtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzTGF3OiB0aGlzLm9wdGlvbnMuaGFzTGF3LmluZGV4T2YoY291bnRyeUNvZGUpID49IDAsXG4gICAgICByZXZva2FibGU6IHRoaXMub3B0aW9ucy5yZXZva2FibGUuaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMCxcbiAgICAgIGV4cGxpY2l0QWN0aW9uOiB0aGlzLm9wdGlvbnMuZXhwbGljaXRBY3Rpb24uaW5kZXhPZihjb3VudHJ5Q29kZSkgPj0gMFxuICAgIH1cbiAgfVxuICBhcHBseUxhdyggb3B0aW9ucywgY291bnRyeUNvZGUgKXtcbiAgICBjb25zdCBjb3VudHJ5ID0gdGhpcy5nZXQoY291bnRyeUNvZGUpXG5cbiAgICBpZiAoIWNvdW50cnkuaGFzTGF3KSB7XG4gICAgICAvLyBUaGUgY291bnRyeSBoYXMgbm8gY29va2llIGxhd1xuICAgICAgb3B0aW9ucy5lbmFibGVkID0gZmFsc2VcbiAgICAgIHRoaXMuZW1pdCggXCJub0Nvb2tpZUxhd1wiLCBjb3VudHJ5Q29kZSwgY291bnRyeSApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZWdpb25hbExhdykge1xuICAgICAgaWYgKGNvdW50cnkucmV2b2thYmxlKSB7XG4gICAgICAgIC8vIFdlIG11c3QgcHJvdmlkZSBhbiBvcHRpb24gdG8gcmV2b2tlIGNvbnNlbnQgYXQgYSBsYXRlciB0aW1lXG4gICAgICAgIG9wdGlvbnMucmV2b2thYmxlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoY291bnRyeS5leHBsaWNpdEFjdGlvbikge1xuICAgICAgICAvLyBUaGUgdXNlciBtdXN0IGV4cGxpY2l0bHkgY2xpY2sgdGhlIGNvbnNlbnQgYnV0dG9uXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uU2Nyb2xsID0gZmFsc2VcbiAgICAgICAgb3B0aW9ucy5kaXNtaXNzT25UaW1lb3V0ID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnNcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL2xvY2F0aW9uXCJcbmltcG9ydCB7IGlzUGxhaW5PYmplY3QgfSBmcm9tIFwiLi4vdXRpbHNcIlxuXG5mdW5jdGlvbiBnZXRTY3JpcHQodXJsLCBjYWxsYmFjaywgdGltZW91dCkge1xuICBsZXQgdGltZW91dElkeFxuICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICBzLnR5cGUgPSAndGV4dC8nICsgKHVybC50eXBlIHx8ICdqYXZhc2NyaXB0JylcbiAgcy5zcmMgPSB1cmwuc3JjIHx8IHVybFxuICBzLmFzeW5jID0gZmFsc2VcblxuICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdGhpcyBjb2RlIGhhbmRsZXMgdHdvIHNjZW5hcmlvcywgd2hldGhlciBjYWxsZWQgYnkgb25sb2FkIG9yIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAgIGNvbnN0IHN0YXRlID0gcy5yZWFkeVN0YXRlXG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkeClcblxuICAgIGlmICghY2FsbGJhY2suZG9uZSAmJiAoIXN0YXRlIHx8IC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc3RhdGUpKSkge1xuICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWVcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIHMub25yZWFkeXN0YXRlY2hhbmdlID0gcy5vbmxvYWQgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKVxuXG4gIC8vIFlvdSBjYW4ndCBjYXRjaCBKU09OUCBFcnJvcnMsIGJlY2F1c2UgaXQncyBoYW5kbGVkIGJ5IHRoZSBzY3JpcHQgdGFnXG4gIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjYWxsYmFjay5kb25lID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgICBzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHMub25sb2FkID0gbnVsbFxuICB9LCB0aW1lb3V0KVxufVxuXG5mdW5jdGlvbiBtYWtlQXN5bmNSZXF1ZXN0KFxuICB1cmwsXG4gIG9uQ29tcGxldGUsXG4gIHRpbWVvdXQsXG4gIHBvc3REYXRhLFxuICByZXF1ZXN0SGVhZGVyc1xuKSB7XG4gIGNvbnN0IHhociA9IG5ldyAod2luZG93LlhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5BY3RpdmVYT2JqZWN0KShcbiAgICAnTVNYTUwyLlhNTEhUVFAuMy4wJ1xuICApXG5cbiAgeGhyLm9wZW4ocG9zdERhdGEgPyAnUE9TVCcgOiAnR0VUJywgdXJsLCAxKVxuXG4gIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmVxdWVzdEhlYWRlcnMpKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSByZXF1ZXN0SGVhZGVycy5sZW5ndGg7IGkgPCBsOyArK2kpIHtcbiAgICAgIGNvbnN0IHNwbGl0ID0gcmVxdWVzdEhlYWRlcnNbaV0uc3BsaXQoJzonLCAyKVxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgIHNwbGl0WzBdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSxcbiAgICAgICAgc3BsaXRbMV0ucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvbkNvbXBsZXRlID09ICdmdW5jdGlvbicpIHtcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPiAzKSB7XG4gICAgICAgIG9uQ29tcGxldGUoeGhyKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHhoci5zZW5kKHBvc3REYXRhKVxufVxuXG4vLyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHdlIGhhdmUgYWxyZWFkeSBzZXQgdXAuXG4vLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcbi8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbi8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxuLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxuLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbiBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xIC8vIHRoZSBpbmRleCAoaW4gb3B0aW9ucykgb2YgdGhlIHNlcnZpY2Ugd2UncmUgY3VycmVudGx5IHVzaW5nXG4gIH1cblxuICBnZXROZXh0U2VydmljZSgpIHtcbiAgICBsZXQgc2VydmljZVxuICAgIGRvIHtcbiAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleClcbiAgICB9IHdoaWxlIChcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcbiAgICAgICFzZXJ2aWNlXG4gICAgKVxuXG4gICAgcmV0dXJuIHNlcnZpY2VcbiAgfVxuXG4gIGdldFNlcnZpY2VCeUlkeChpZHgpIHtcbiAgICAvLyBUaGlzIGNhbiBlaXRoZXIgYmUgdGhlIG5hbWUgb2YgYSBkZWZhdWx0IGxvY2F0aW9uU2VydmljZSwgb3IgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF1cblxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZHluYW1pY09wdHMgPSBzZXJ2aWNlT3B0aW9uKClcbiAgICAgIHJldHVybiBkeW5hbWljT3B0cy5uYW1lID8gXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgZHluYW1pY09wdHMsXG4gICAgICAgICAgdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1sgZHluYW1pY09wdHMubmFtZSBdKCBkeW5hbWljT3B0cyApXG4gICAgICAgICkgOiBkeW5hbWljT3B0c1xuICAgIH1cblxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb25dKClcbiAgICB9XG5cbiAgICAvLyBJZiBpdCdzIGFuIG9iamVjdCwgYXNzdW1lIHtuYW1lOiAnaXBpbmZvJywgLi4ub3RoZXJPcHRpb25zfVxuICAgIC8vIEFsbG93cyB1c2VyIHRvIHBhc3MgaW4gQVBJIGtleXMgZXRjLlxuICAgIGlmIChpc1BsYWluT2JqZWN0KHNlcnZpY2VPcHRpb24pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNlcnZpY2VEZWZpbml0aW9uc1tzZXJ2aWNlT3B0aW9uLm5hbWVdKFxuICAgICAgICBzZXJ2aWNlT3B0aW9uXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFRoaXMgcnVucyB0aGUgc2VydmljZSBsb2NhdGVkIGF0IGluZGV4IGBjdXJyZW50U2VydmljZUluZGV4YC5cbiAgLy8gSWYgdGhlIHNlcnZpY2UgZmFpbHMsIGBydW5OZXh0U2VydmljZU9uRXJyb3JgIHdpbGwgY29udGludWUgdHJ5aW5nIGVhY2ggc2VydmljZSB1bnRpbCBhbGwgZmFpbCwgb3Igb25lIGNvbXBsZXRlcyBzdWNjZXNzZnVsbHlcbiAgbG9jYXRlKGNvbXBsZXRlLCBlcnJvcikge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldE5leHRTZXJ2aWNlKClcblxuICAgIGlmICghc2VydmljZSkge1xuICAgICAgZXJyb3IobmV3IEVycm9yKCdObyBzZXJ2aWNlcyB0byBydW4nKSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2FsbGJhY2tDb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgdGhpcy5jYWxsYmFja0Vycm9yID0gZXJyb3JcblxuICAgIHRoaXMucnVuU2VydmljZShzZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxuICB9XG5cbiAgLy8gUG90ZW50aWFsbHkgYWRkcyBhIGNhbGxiYWNrIHRvIGEgdXJsIGZvciBqc29ucC5cbiAgc2V0dXBVcmwoc2VydmljZSkge1xuICAgIGNvbnN0IHNlcnZpY2VPcHRzID0gdGhpcy5nZXRDdXJyZW50U2VydmljZU9wdHMoKVxuICAgIHJldHVybiBzZXJ2aWNlLnVybC5yZXBsYWNlKC9cXHsoLio/KVxcfS9nLCBmdW5jdGlvbihfLCBwYXJhbSkge1xuICAgICAgaWYgKHBhcmFtID09PSAnY2FsbGJhY2snKSB7XG4gICAgICAgIGNvbnN0IHRlbXBOYW1lID0gJ2NhbGxiYWNrJyArIERhdGUubm93KClcbiAgICAgICAgd2luZG93W3RlbXBOYW1lXSA9IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlcnZpY2UuX19KU09OUF9EQVRBID0gSlNPTi5zdHJpbmdpZnkocmVzKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZW1wTmFtZVxuICAgICAgfVxuICAgICAgaWYgKHBhcmFtIGluIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlT3B0cy5pbnRlcnBvbGF0ZVVybFtwYXJhbV1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gcmVxdWlyZXMgYSBgc2VydmljZWAgb2JqZWN0IHRoYXQgZGVmaW5lcyBhdCBsZWFzdCBhIGB1cmxgIGFuZCBgY2FsbGJhY2tgXG4gIHJ1blNlcnZpY2Uoc2VydmljZSwgY29tcGxldGUpIHtcbiAgICAvLyBiYXNpYyBjaGVjayB0byBlbnN1cmUgaXQgcmVzZW1ibGVzIGEgYHNlcnZpY2VgXG4gICAgaWYgKCFzZXJ2aWNlIHx8ICFzZXJ2aWNlLnVybCB8fCAhc2VydmljZS5jYWxsYmFjaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gd2UgY2FsbCBlaXRoZXIgYGdldFNjcmlwdGAgb3IgYG1ha2VBc3luY1JlcXVlc3RgIGRlcGVuZGluZyBvbiB0aGUgdHlwZSBvZiByZXNvdXJjZVxuICAgIGNvbnN0IHJlcXVlc3RGdW5jdGlvbiA9IHNlcnZpY2UuaXNTY3JpcHQgPyBnZXRTY3JpcHQgOiBtYWtlQXN5bmNSZXF1ZXN0XG5cbiAgICAvLyBib3RoIGZ1bmN0aW9ucyBoYXZlIHNpbWlsYXIgc2lnbmF0dXJlcyBzbyB3ZSBjYW4gcGFzcyB0aGUgc2FtZSBhcmd1bWVudHMgdG8gYm90aFxuICAgIHJlcXVlc3RGdW5jdGlvbihcbiAgICAgIHRoaXMuc2V0dXBVcmwoc2VydmljZSksXG4gICAgICB4aHIgPT4ge1xuICAgICAgICAvLyBpZiBgIXhocmAsIHRoZW4gYGdldFNjcmlwdGAgZnVuY3Rpb24gd2FzIHVzZWQsIHNvIHRoZXJlIGlzIG5vIHJlc3BvbnNlIHRleHRcbiAgICAgICAgbGV0IHJlc3BvbnNlVGV4dCA9IHhociA/IHhoci5yZXNwb25zZVRleHQgOiAnJ1xuXG4gICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBhIHNjcmlwdCwgdGhlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIHJ1bi5cbiAgICAgICAgLy8gaWYgdGhlIHNjcmlwdCBpcyBKU09OUCwgdGhlbiBhIHRpbWUgZGVmaW5lZCBmdW5jdGlvbiBgY2FsbGJhY2tfe0RhdGUubm93fWAgaGFzIGFscmVhZHlcbiAgICAgICAgLy8gYmVlbiBjYWxsZWQgKGFzIHRoZSBKU09OUCBjYWxsYmFjaykuIFRoaXMgY2FsbGJhY2sgc2V0cyB0aGUgX19KU09OUF9EQVRBIHByb3BlcnR5XG4gICAgICAgIGlmIChzZXJ2aWNlLl9fSlNPTlBfREFUQSkge1xuICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHNlcnZpY2UuX19KU09OUF9EQVRBXG4gICAgICAgICAgZGVsZXRlIHNlcnZpY2UuX19KU09OUF9EQVRBXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjYWxsIHRoZSBzZXJ2aWNlIGNhbGxiYWNrIHdpdGggdGhlIHJlc3BvbnNlIHRleHQgKHNvIGl0IGNhbiBwYXJzZSB0aGUgcmVzcG9uc2UpXG4gICAgICAgIHRoaXMucnVuU2VydmljZUNhbGxiYWNrLmNhbGwodGhpcywgY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dClcbiAgICAgIH0sXG4gICAgICB0aGlzLm9wdGlvbnMudGltZW91dCxcbiAgICAgIHNlcnZpY2UuZGF0YSxcbiAgICAgIHNlcnZpY2UuaGVhZGVyc1xuICAgIClcblxuICAgIC8vIGBzZXJ2aWNlLmRhdGFgIGFuZCBgc2VydmljZS5oZWFkZXJzYCBhcmUgb3B0aW9uYWwgKHRoZXkgb25seSBjb3VudCBpZiBgIXNlcnZpY2UuaXNTY3JpcHRgIGFueXdheSlcbiAgfVxuXG4gIC8vIFRoZSBzZXJ2aWNlIHJlcXVlc3QgaGFzIHJ1biAoYW5kIHBvc3NpYmx5IGhhcyBhIGByZXNwb25zZVRleHRgKSBbbm8gYHJlc3BvbnNlVGV4dGAgaWYgYGlzU2NyaXB0YF1cbiAgLy8gV2UgbmVlZCB0byBydW4gaXRzIGNhbGxiYWNrIHdoaWNoIGRldGVybWluZXMgaWYgaXRzIHN1Y2Nlc3NmdWwgb3Igbm90XG4gIC8vIGBjb21wbGV0ZWAgaXMgY2FsbGVkIG9uIHN1Y2Nlc3Mgb3IgZmFpbHVyZVxuICBydW5TZXJ2aWNlQ2FsbGJhY2soIGNvbXBsZXRlLCBzZXJ2aWNlLCByZXNwb25zZVRleHQgKSB7XG4gICAgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgaWYgdGhlIHNlcnZpY2UgdXNlcyB0aGUgYXN5bmMgY2FsbGJhY2sgaW4gaXRzIGhhbmRsZXIgbWV0aG9kXG4gICAgY29uc3Qgc2VydmljZVJlc3VsdEhhbmRsZXIgPSBhc3luY1Jlc3VsdCA9PiB7XG4gICAgICAvLyBpZiBgcmVzdWx0YCBpcyBhIHZhbGlkIHZhbHVlLCB0aGVuIHRoaXMgZnVuY3Rpb24gc2hvdWxkbid0IHJlYWxseSBydW5cbiAgICAgIC8vIGV2ZW4gaWYgaXQgaXMgY2FsbGVkIGJ5IGBzZXJ2aWNlLmNhbGxiYWNrYFxuICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCBhc3luY1Jlc3VsdClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgZnVuY3Rpb24gYHNlcnZpY2UuY2FsbGJhY2tgIHdpbGwgZWl0aGVyIGV4dHJhY3QgYSBjb3VudHJ5IGNvZGUgZnJvbSBgcmVzcG9uc2VUZXh0YCBhbmQgcmV0dXJuIGl0IChpbiBgcmVzdWx0YClcbiAgICAvLyBvciAoaWYgaXQgaGFzIHRvIG1ha2UgYWRkaXRpb25hbCByZXF1ZXN0cykgaXQgd2lsbCBjYWxsIGEgYGRvbmVgIGNhbGxiYWNrIHdpdGggdGhlIGNvdW50cnkgY29kZSB3aGVuIGl0IGlzIHJlYWR5XG4gICAgY29uc3QgcmVzdWx0ID0gc2VydmljZS5jYWxsYmFjayhzZXJ2aWNlUmVzdWx0SGFuZGxlciwgcmVzcG9uc2VUZXh0KVxuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5vblNlcnZpY2VSZXN1bHQoIGNvbXBsZXRlLCByZXN1bHQgKVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgaXMgY2FsbGVkIHdpdGggdGhlIGByZXN1bHRgIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgIHJlZ2FyZGxlc3Mgb2YgaG93IGl0IHByb3ZpZGVkIHRoYXQgcmVzdWx0IChzeW5jIG9yIGFzeW5jKS5cbiAgLy8gYHJlc3VsdGAgd2lsbCBiZSB3aGF0ZXZlciBpcyByZXR1cm5lZCBmcm9tIGBzZXJ2aWNlLmNhbGxiYWNrYC4gQSBzZXJ2aWNlIGNhbGxiYWNrIHNob3VsZCBwcm92aWRlIGFuIG9iamVjdCB3aXRoIGRhdGFcbiAgb25TZXJ2aWNlUmVzdWx0KGNvbXBsZXRlLCByZXN1bHQpIHtcbiAgICAvLyBjb252ZXJ0IHJlc3VsdCB0byBub2RlanMgc3R5bGUgYXN5bmMgY2FsbGJhY2tcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRXJyb3IgfHwgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3IpKSB7XG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIHJlc3VsdCwgbnVsbClcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcGxldGUuY2FsbCh0aGlzLCBudWxsLCByZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgLy8gaWYgYGVycmAgaXMgc2V0LCB0aGUgbmV4dCBzZXJ2aWNlIGhhbmRsZXIgaXMgY2FsbGVkXG4gIC8vIGlmIGBlcnJgIGlzIG51bGwsIHRoZSBgb25Db21wbGV0ZWAgaGFuZGxlciBpcyBjYWxsZWQgd2l0aCBgZGF0YWBcbiAgcnVuTmV4dFNlcnZpY2VPbkVycm9yKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRoaXMubG9nRXJyb3IoZXJyKVxuXG4gICAgICBjb25zdCBuZXh0U2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKVxuXG4gICAgICBpZiAobmV4dFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlKG5leHRTZXJ2aWNlLCB0aGlzLnJ1bk5leHRTZXJ2aWNlT25FcnJvci5iaW5kKHRoaXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHRoaXMuY2FsbGJhY2tFcnJvcixcbiAgICAgICAgICBuZXcgRXJyb3IoJ0FsbCBzZXJ2aWNlcyBmYWlsZWQnKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGxldGVTZXJ2aWNlLmNhbGwodGhpcywgdGhpcy5jYWxsYmFja0NvbXBsZXRlLCBkYXRhKVxuICAgIH1cbiAgfVxuXG4gIGdldEN1cnJlbnRTZXJ2aWNlT3B0cygpIHtcbiAgICBjb25zdCB2YWwgPSB0aGlzLm9wdGlvbnMuc2VydmljZXNbdGhpcy5jdXJyZW50U2VydmljZUluZGV4XVxuXG4gICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7bmFtZTogdmFsfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdmFsKClcbiAgICB9ZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cbiAgfVxuXG4gIC8vIGNhbGxzIHRoZSBgb25Db21wbGV0ZWAgY2FsbGJhY2sgYWZ0ZXIgcmVzZXR0aW5nIHRoZSBgY3VycmVudFNlcnZpY2VJbmRleGBcbiAgY29tcGxldGVTZXJ2aWNlKGZuLCBkYXRhKSB7XG4gICAgdGhpcy5jdXJyZW50U2VydmljZUluZGV4ID0gLTFcblxuICAgIGZuICYmIGZuKGRhdGEpXG4gIH1cblxuICBsb2dFcnJvcihlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgVGhlIHNlcnZpY2VbJHt0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXh9XSAoJHt0aGlzLmdldFNlcnZpY2VCeUlkeChpZHgpLnVybH0pIHJlc3BvbmRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3JgLFxuICAgICAgIGVyclxuICAgIClcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBCYXNlIGZyb20gXCIuL0Jhc2VcIlxuaW1wb3J0IGRlZmF1bHRPcHRpb25zIGZyb20gXCIuLi9vcHRpb25zL3BvcHVwXCJcbmltcG9ydCB7XG4gIGNhdGVnb3JpZXMsXG4gIHN0YXR1c2VzLFxuICBzdGF0dXNEaXNtaXNzLFxuICBzdGF0dXNBbGxvd1xufSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcbmltcG9ydCB7XG4gIGdldENvbnRyYXN0LFxuICBnZXRDb29raWUsXG4gIGdldEhvdmVyQ29sb3IsXG4gIGhhc2gsXG4gIGludGVycG9sYXRlU3RyaW5nLFxuICBpc01vYmlsZSxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaXNWYWxpZFN0YXR1cyxcbiAgc2V0Q29va2llLFxuICB0aHJvdHRsZSxcbiAgdHJhdmVyc2VET01QYXRoLFxufSBmcm9tIFwiLi4vdXRpbHMuanNcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMudXNlckNhdGVnb3JpZXMgPSB7XG4gICAgICBVTkNBVEVHT1JJWkVEICA6ICdESVNNSVNTJyxcbiAgICAgIEVTU0VOVElBTCAgICAgIDogJ0FMTE9XJyxcbiAgICAgIFBFUlNPTkFMSVpBVElPTjogJ0RJU01JU1MnLFxuICAgICAgQU5BTFlUSUNTICAgICAgOiAnRElTTUlTUycsXG4gICAgICBNQVJLRVRJTkcgICAgICA6ICdESVNNSVNTJ1xuICAgIH1cbiAgICB0aGlzLmN1c3RvbVN0eWxlcyA9IHt9XG4gICAgdGhpcy5oYXNUcmFuc2l0aW9uID0gISEoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBjb25zdCB0cmFucyA9IHtcbiAgICAgICAgdDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBPVDogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgbXNUOiAnTVNUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgTW96VDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgICBXZWJraXRUOiAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICAgIH1cbiAgXG4gICAgICBmb3IgKGxldCBwcmVmaXggaW4gdHJhbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRyYW5zLmhhc093blByb3BlcnR5KHByZWZpeCkgJiZcbiAgICAgICAgICB0eXBlb2YgZWwuc3R5bGVbcHJlZml4ICsgJ3JhbnNpdGlvbiddICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNbcHJlZml4XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJydcbiAgICB9KSgpXG5cbiAgICAvLyByZXR1cm5zIHRydWUgaWYgYG9uQ29tcGxldGVgIHdhcyBjYWxsZWRcbiAgICBpZiAodGhpcy5jYW5Vc2VDb29raWVzKCkpIHtcbiAgICAgIC8vIHVzZXIgaGFzIGFscmVhZHkgYW5zd2VyZWRcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gZmFsc2VcbiAgICB9XG4gICAgLy8gYXBwbHkgYmxhY2tsaXN0IC8gd2hpdGVsaXN0XG4gICAgaWYgKHRoaXMub3B0aW9ucy5ibGFja2xpc3RQYWdlLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLndoaXRlbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyB0aGUgZnVsbCBtYXJrdXAgZWl0aGVyIGNvbnRhaW5zIHRoZSB3cmFwcGVyIG9yIGl0IGRvZXMgbm90IChmb3IgbXVsdGlwbGUgaW5zdGFuY2VzKVxuICAgIGxldCBjb29raWVQb3B1cCA9IHRoaXMub3B0aW9ucy53aW5kb3dcbiAgICAgIC5yZXBsYWNlKCd7e2NsYXNzZXN9fScsIHRoaXMuZ2V0UG9wdXBDbGFzc2VzKCkuam9pbignICcpKVxuICAgICAgLnJlcGxhY2UoJ3t7Y2hpbGRyZW59fScsIHRoaXMuZ2V0UG9wdXBJbm5lck1hcmt1cCgpKVxuXG4gICAgLy8gaWYgdXNlciBwYXNzZXMgaHRtbCwgdXNlIGl0IGluc3RlYWRcbiAgICBjb25zdCBjdXN0b21IVE1MID0gdGhpcy5vcHRpb25zLm92ZXJyaWRlSFRNTFxuICAgIGlmICh0eXBlb2YgY3VzdG9tSFRNTCA9PSAnc3RyaW5nJyAmJiBjdXN0b21IVE1MLmxlbmd0aCApIHtcbiAgICAgIGNvb2tpZVBvcHVwID0gY3VzdG9tSFRNTFxuICAgIH1cblxuICAgIC8vIGlmIHN0YXRpYywgd2UgbmVlZCB0byBncm93IHRoZSBlbGVtZW50IGZyb20gMCBoZWlnaHQgc28gaXQgZG9lc24ndCBqdW1wIHRoZSBwYWdlXG4gICAgLy8gY29udGVudC4gd2Ugd3JhcCBhbiBlbGVtZW50IGFyb3VuZCBpdCB3aGljaCB3aWxsIG1hc2sgdGhlIGhpZGRlbiBjb250ZW50XG4gICAgXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgIC8vIGBncm93ZXJgIGlzIGEgd3JhcHBlciBkaXYgd2l0aCBhIGhpZGRlbiBvdmVyZmxvdyB3aG9zZSBoZWlnaHQgaXMgYW5pbWF0ZWRcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmFwcGVuZE1hcmt1cChgPGRpdiBjbGFzcz1cImNjLWdyb3dlclwiPiR7Y29va2llUG9wdXB9PC9kaXY+YClcblxuICAgICAgd3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gJycgLy8gc2V0IGl0IHRvIHZpc2libGUgKGJlY2F1c2UgYXBwZW5kTWFya3VwIGhpZGVzIGl0KVxuICAgICAgdGhpcy5lbGVtZW50ID0gd3JhcHBlci5maXJzdENoaWxkIC8vIGdldCB0aGUgYGVsZW1lbnRgIHJlZmVyZW5jZSBmcm9tIHRoZSB3cmFwcGVyXG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NjLWludmlzaWJsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuYXBwZW5kTWFya3VwKGNvb2tpZVBvcHVwKVxuICAgIH1cblxuICAgIHRoaXMuYXBwbHlBdXRvRGlzbWlzcygpXG4gICAgdGhpcy5hcHBseVJldm9rZUJ1dHRvbigpXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmF1dG9PcGVuKSB7XG4gICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cblxuICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgaWYgKHRoaXMuaGFzVHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLmZhZGVJbigpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnXG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZW1pdCggXCJwb3B1cE9wZW5lZFwiIClcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgY2xvc2Uoc2hvd1Jldm9rZSkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cblxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuZmFkZU91dCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBDbG9zZWRcIiApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZhZGVJbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxuXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm5cblxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlT3V0KGVsKVxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwIC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcblxuICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXG4gICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5hZnRlckZhZGVJbihlbCksXG4gICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAqIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJ1xuICAgKi9cbiAgYWZ0ZXJGYWRlSW4oIGVsZW1lbnQgKSB7XG4gICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGxcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gIH1cbiAgXG4gIGZhZGVPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIXRoaXMuZWxlbWVudCkgcmV0dXJuXG5cbiAgICBpZiAodGhpcy5vcGVuaW5nVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbmluZ1RpbWVvdXQpXG4gICAgICB0aGlzLmFmdGVyRmFkZUluKHRoaXMuZWxlbWVudClcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXRpYykge1xuICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5zdHlsZS5tYXhIZWlnaHQgPSAnJ1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9ICgpID0+IHRoaXMuYWZ0ZXJGYWRlT3V0KHRoaXMuZWxlbWVudClcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXG5cbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH1cbiAgfVxuICBcbiAgYWZ0ZXJGYWRlT3V0KGVsKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJyAvLyBhZnRlciBjbG9zZSBhbmQgYmVmb3JlIG9wZW4sIHRoZSBkaXNwbGF5IHNob3VsZCBiZSBub25lXG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuICAgIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uID0gbnVsbFxuICB9XG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmVsZW1lbnQgJiZcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICcnICYmXG4gICAgICAodGhpcy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcbiAgICApXG4gIH1cblxuICB0b2dnbGVSZXZva2VCdXR0b24oc2hvdykge1xuICAgIGlmICh0aGlzLnJldm9rZUJ0bikgdGhpcy5yZXZva2VCdG4uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJ1xuICB9XG5cbiAgcmV2b2tlQ2hvaWNlKHByZXZlbnRPcGVuKSB7XG4gICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5jbGVhclN0YXR1c2VzKClcblxuICAgIHRoaXMuZW1pdCggXCJyZXZva2VDaG9pY2VcIiApXG5cbiAgICBpZiAoIXByZXZlbnRPcGVuKSB7XG4gICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXG4gICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcbiAgICovXG4gIGhhc0Fuc3dlcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG8gYWxsIG9mIHRoZSBjYXRlZ29yaWVzXG4gICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXG4gICAqL1xuICBoYXNDb25zZW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IHN0YXR1c0FsbG93IHx8IHN0YXR1cyA9PT0gc3RhdHVzRGlzbWlzcyApXG4gIH1cblxuICAvLyBvcGVucyB0aGUgcG9wdXAgaWYgbm8gYW5zd2VyIGhhcyBiZWVuIGdpdmVuXG4gIGF1dG9PcGVuKCBvcHRpb25zICkge1xuICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXG4gICAgaWYgKCFoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9IGVsc2UgaWYgKGhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXG4gICAgfVxuICB9XG5cbiAgLyoqIFxuICAgKiBTZXQncyBjb29raWUgc3RhdHVzZXNcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBhbGxPclVuZGVmICAgICAgLSBJZiB0aGlzIGlzIHRoZSBvbmx5IHBhcmFtLCBzZXQgQUxMIGlmIG5vdCwgc2V0IFVuY2F0ZWdvcml6ZWQgY29va2llcyBzdGF0dXNlcyBzZXQgdG8gdmFsdWUuXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gZXNzZW50aWFsICAgICAgIC0gRXNzZW50aWFsIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IHBlcnNvbmFsaXphdGlvbiAtIFByZWZlcmVuY2VzIC8gRnVuY3Rpb25hbGl0eSBzZXQgdG8gdmFsdWVcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBhbmFseXRpY3MgICAgICAgLSBBbmFseXRpcyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBtYXJrZXRpbmcgICAgICAgLSBNYXJrZXRpbmcgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAqIEByZXR1cm4geyB1bmRlZmluZWQgfVxuICAqL1xuICBzZXRTdGF0dXNlcygpIHtcbiAgICBjb25zdCB7bmFtZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmV9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuXG4gICAgLy8gaWYgYHN0YXR1c2AgaXMgdmFsaWRcbiAgICBjb25zdCB1cGRhdGVDYXRlZ29yeVN0YXR1cyA9ICggY2F0ZWdvcnlOYW1lLCBzdGF0dXMgKSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZFN0YXR1cyhzdGF0dXMpKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgICAgY29uc3QgY2hvc2VuQmVmb3JlID0gc3RhdHVzZXMuaW5kZXhPZiggZ2V0Q29va2llKGNvb2tpZU5hbWUpICkgPj0gMFxuICAgICAgICBjb25zb2xlLmxvZyggY29va2llTmFtZSwgc3RhdHVzLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSApXG4gICAgICAgIHNldENvb2tpZShjb29raWVOYW1lLCBzdGF0dXMsIGV4cGlyeURheXMsIGRvbWFpbiwgcGF0aCwgc2VjdXJlKVxuICAgICAgICB0aGlzLmVtaXQoIFwic3RhdHVzQ2hhbmdlZFwiLCBjb29raWVOYW1lLCBzdGF0dXMsIGNob3NlbkJlZm9yZSApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyU3RhdHVzZXMoKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKSB7XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcnkgXSApIClcbiAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpe1xuICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKCBjYXRlZ29yeSA9PiB1cGRhdGVDYXRlZ29yeVN0YXR1cyggY2F0ZWdvcnksIGFyZ3VtZW50c1sgMCBdICkgKVxuICAgIH0gZWxzZSBpZiAoIGFyZ3VtZW50cy5sZW5ndGggPiAxICkge1xuICAgICAgYXJndW1lbnRzLmZvckVhY2goICggY2F0ZWdvcnlTdGF0dXMsIGluZGV4ICkgPT4ge1xuICAgICAgICB1cGRhdGVDYXRlZ29yeVN0YXR1cyggdGhpcy51c2VyQ2F0ZWdvcmllc1sgaW5kZXggXSwgY2F0ZWdvcnlTdGF0dXMgKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBjb29raWUgY2F0ZWdvaWVzIHN0YXR1c2VzXG4gICAqIEByZXR1cm4geyBhcnJheTxzdHJpbmc+IH0gLSBjb29raWUgY2F0ZWdvcmllcyBzdGF0dXMgaW4gb3JkZXIgb2YgY2F0ZWdvcmllc1xuICAgKi9cbiAgZ2V0U3RhdHVzZXMoKSB7XG4gICAgcmV0dXJuIGNhdGVnb3JpZXMubWFwKCBjYXRlZ29yeU5hbWUgPT4gZ2V0Q29va2llKHRoaXMub3B0aW9ucy5jb29raWUubmFtZSsnXycrY2F0ZWdvcnlOYW1lKSApXG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICovXG4gIGNsZWFyU3RhdHVzZXMoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBkb21haW4sIHBhdGggfSA9IHRoaXMub3B0aW9ucy5jb29raWVcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5TmFtZSA9PiB7XG4gICAgICBzZXRDb29raWUobmFtZSsnXycrY2F0ZWdvcnlOYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aClcbiAgICB9KVxuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgb24gJ3RyYW5zaXRpb25lbmQnIChvbmx5IG9uIHRoZSB0cmFuc2l0aW9uIG9mIHRoZSBmYWRlT3V0KS4gVGhhdCdzIGJlY2F1c2UgYWZ0ZXIgd2UndmUgZmFkZWQgb3V0LCB3ZSBuZWVkIHRvXG4gIC8vIHNldCB0aGUgZGlzcGxheSB0byAnbm9uZScgKHNvIHRoZXJlIGFyZW4ndCBhbm5veWluZyBpbnZpc2libGUgcG9wdXBzIGFsbCBvdmVyIHRoZSBwYWdlKS4gSWYgZm9yIHdoZW5ldmVyIHJlYXNvbiB0aGlzIGZ1bmN0aW9uXG4gIC8vIGlzIG5vdCBjYWxsZWQgKGxhY2sgb2Ygc3VwcG9ydCksIHRoZSBvcGVuL2Nsb3NlIG1lY2hhbmlzbSB3aWxsIHN0aWxsIHdvcmsuXG4gIGFmdGVyRmFkZU91dChlbCkge1xuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgLy8gYWZ0ZXIgY2xvc2UgYW5kIGJlZm9yZSBvcGVuLCB0aGUgZGlzcGxheSBzaG91bGQgYmUgbm9uZVxuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy50cmFuc2l0aW9uRW5kLCB0aGlzLmFmdGVyVHJhbnNpdGlvbilcbiAgICB0aGlzLmFmdGVyVHJhbnNpdGlvbiA9IG51bGxcbiAgfVxuXG4gIGNhblVzZUNvb2tpZXMoKSB7XG4gICAgaWYgKCF3aW5kb3cubmF2aWdhdG9yLmNvb2tpZUVuYWJsZWQgfHwgd2luZG93LkNvb2tpZXNPSyB8fCB3aW5kb3cubmF2aWdhdG9yLkNvb2tpZXNPSyApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdHVzZXNWYWx1ZXMgPSB0aGlzLmdldFN0YXR1c2VzKClcbiAgICBjb25zdCBtYXRjaGVzID0gc3RhdHVzZXNWYWx1ZXMubWFwKCAoIHN0YXR1cywgaW5kZXggKSA9PiAoIHsgW2NhdGVnb3JpZXNbaW5kZXhdXTogaXNWYWxpZFN0YXR1cyggc3RhdHVzICkgfSApIClcbiAgICBjb25zdCBoYXNNYXRjaGVzID0gbWF0Y2hlcy5maWx0ZXIoIG1hdGNoID0+IG1hdGNoW09iamVjdC5rZXlzKG1hdGNoKVswXV0gKS5sZW5ndGggPiAwXG4gICAgc3RhdHVzZXNWYWx1ZXMuZm9yRWFjaCggKCBzdGF0dXMsIGluZGV4ICkgPT5cbiAgICAgIHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSA9PT0gc3RhdHVzXG4gICAgICAgID8gc3RhdHVzIDogdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2F0ZWdvcmllc1sgaW5kZXggXSBdIClcblxuICAgIHJldHVybiBoYXNNYXRjaGVzXG4gIH1cblxuICAvLyB0b3AsIGJvdHRvbSwgbGVmdCwgcmlnaHRcbiAgZ2V0UG9zaXRpb25DbGFzc2VzKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucG9zaXRpb24uc3BsaXQoICctJyApLm1hcCggcG9zID0+ICdjYy0nK3BvcylcbiAgfVxuXG4gIGdldFBvcHVwQ2xhc3NlcygpIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXG4gICAgbGV0IHBvc2l0aW9uU3R5bGUgPVxuICAgICAgb3B0cy5wb3NpdGlvbiA9PSAndG9wJyB8fCBvcHRzLnBvc2l0aW9uID09ICdib3R0b20nXG4gICAgICAgID8gJ2Jhbm5lcidcbiAgICAgICAgOiAnZmxvYXRpbmcnXG5cbiAgICBpZiAoaXNNb2JpbGUoKSAmJiBvcHRzLm1vYmlsZUZvcmNlRmxvYXQpIHtcbiAgICAgIHBvc2l0aW9uU3R5bGUgPSAnZmxvYXRpbmcnXG4gICAgfVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICdjYy0nICsgcG9zaXRpb25TdHlsZSwgLy8gZmxvYXRpbmcgb3IgYmFubmVyXG4gICAgICAnY2MtdHlwZS0nICsgb3B0cy50eXBlLCAvLyBhZGQgdGhlIGNvbXBsaWFuY2UgdHlwZVxuICAgICAgJ2NjLXRoZW1lLScgKyBvcHRzLnRoZW1lLCAvLyBhZGQgdGhlIHRoZW1lXG4gICAgXVxuXG4gICAgaWYgKG9wdHMuc3RhdGljKSB7XG4gICAgICBjbGFzc2VzLnB1c2goJ2NjLXN0YXRpYycpXG4gICAgfVxuXG4gICAgY2xhc3Nlcy5wdXNoLmFwcGx5KGNsYXNzZXMsIHRoaXMuZ2V0UG9zaXRpb25DbGFzc2VzKCkpXG5cbiAgICAvLyB3ZSBvbmx5IGFkZCBleHRyYSBzdHlsZXMgaWYgYHBhbGV0dGVgIGhhcyBiZWVuIHNldCB0byBhIHZhbGlkIHZhbHVlXG4gICAgdGhpcy5hdHRhY2hDdXN0b21QYWxldHRlKHRoaXMub3B0aW9ucy5wYWxldHRlKVxuXG4gICAgLy8gaWYgd2Ugb3ZlcnJpZGUgdGhlIHBhbGV0dGUsIGFkZCB0aGUgY2xhc3MgdGhhdCBlbmFibGVzIHRoaXNcbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKSB7XG4gICAgICBjbGFzc2VzLnB1c2godGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yKVxuICAgIH1cblxuICAgIHJldHVybiBjbGFzc2VzXG4gIH1cblxuICBnZXRQb3B1cElubmVyTWFya3VwKCkge1xuICAgIGNvbnN0IGludGVycG9sYXRlZCA9IHt9XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuXG4gICAgLy8gcmVtb3ZlcyBsaW5rIGlmIHNob3dMaW5rIGlzIGZhbHNlXG4gICAgaWYgKCFvcHRzLnNob3dMaW5rKSB7XG4gICAgICBvcHRzLmVsZW1lbnRzLmxpbmsgPSAnJyBcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcbiAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IGludGVycG9sYXRlU3RyaW5nKFxuICAgICAgICBvcHRzLmVsZW1lbnRzW3Byb3BdLFxuICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBzdHIgPSBvcHRzLmNvbnRlbnRbbmFtZV1cbiAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJ1xuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcblxuICAgIC8vIGNoZWNrcyBpZiB0aGUgdHlwZSBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gaW5mbyBpZiBpdCdzIG5vdFxuICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdXG4gICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2UuaW5mb1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSBjb21wbGlhbmNlIHR5cGVzIGZyb20gdGhlIGFscmVhZHkgaW50ZXJwb2xhdGVkIGBlbGVtZW50c2BcbiAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IGludGVycG9sYXRlU3RyaW5nKCBjb21wbGlhbmNlVHlwZSwgbmFtZSA9PiBpbnRlcnBvbGF0ZWRbbmFtZV0gKVxuXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBsYXlvdXQgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGJhc2ljIGlmIGl0J3Mgbm90XG4gICAgbGV0IGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF1cbiAgICBpZiAoIWxheW91dCkge1xuICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljXG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnRlcnBvbGF0ZVN0cmluZyhsYXlvdXQsIG1hdGNoID0+aW50ZXJwb2xhdGVkW21hdGNoXSApXG4gIH1cblxuICBhcHBlbmRNYXJrdXAobWFya3VwKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY29udCA9XG4gICAgICBvcHRzLmNvbnRhaW5lciAmJiBvcHRzLmNvbnRhaW5lci5ub2RlVHlwZSA9PT0gMVxuICAgICAgICA/IG9wdHMuY29udGFpbmVyXG4gICAgICAgIDogZG9jdW1lbnQuYm9keVxuXG4gICAgZGl2LmlubmVySFRNTCA9IG1hcmt1cFxuXG4gICAgY29uc3QgZWwgPSBkaXYuY2hpbGRyZW5bMF1cblxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLXdpbmRvdycpICYmIHRoaXMuaGFzVHJhbnNpdGlvbikge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcbiAgICB9XG5cbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMuaGFuZGxlQnV0dG9uQ2xpY2soIGV2ZW50ICkgKVxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2MtYnRuIFt0eXBlPVwiY2hlY2tib3hcIl0nICkuZm9yRWFjaCggY2hlY2tib3ggPT4ge1xuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdGhpcy51c2VyQ2F0ZWdvcmllc1sgY2hlY2tib3gubmFtZS50b1VwcGVyQ2FzZSgpIF0gPSBjaGVja2JveC5jaGVja2VkID8gJ0FMTE9XJyA6ICdERU5ZJ1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKClcbiAgICAgIH0pXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBldmVudCA9PiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkpIClcbiAgICB9KVxuICAgIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2MtaW5mb1wiKS5mb3JFYWNoKCBzaG93SW5mbyA9PiB7XG4gICAgICBzaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICBpZiAoIHRoaXMgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgICkge1xuICAgICAgICAgIHRoaXMuYmx1cigpXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAob3B0cy5hdXRvQXR0YWNoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWNvbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIGNvbnQuYXBwZW5kQ2hpbGQoZWwpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udC5pbnNlcnRCZWZvcmUoZWwsIGNvbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKCBlcnJvciApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCBcIk5vIGNvbnRhaW5lciB0byBhdHRhY2ggdG9vLiBNYWtlIHN1cmUgdGhlIERPTSBoYXMgbG9hZGVkLiBJcyB5b3VyIHNjcmlwdCBsb2FkZWQganVzdCBiZWZvcmUgdGhlIGA8L2JvZHk+YCB0YWc/XCIgKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbFxuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2soZXZlbnQpIHtcbiAgICAvLyByZXR1cm5zIHRoZSBwYXJlbnQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgY2xhc3MsIG9yIHRoZSBvcmlnaW5hbCBlbGVtZW50IC0gbnVsbCBpZiBub3QgZm91bmRcbiAgICBjb25zdCBidG4gPSB0cmF2ZXJzZURPTVBhdGgoZXZlbnQudGFyZ2V0LCAnY2MtYnRuJykgfHwgZXZlbnQudGFyZ2V0XG4gICAgXG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1idG4nICkgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXNhdmUnICkpe1xuICAgICAgdGhpcy5zZXRTdGF0dXNlcygpXG4gICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgfVxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcbiAgICAgICAgbmV3IFJlZ0V4cCgnXFxcXGJjYy0oJyArIHN0YXR1c2VzLm1hcCggc3RyID0+IHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nLCAnXFxcXCQmJykgKS5qb2luKCd8JykgKyAnKVxcXFxiJylcbiAgICAgIClcbiAgICAgIGNvbnN0IG1hdGNoID0gKG1hdGNoZXMgJiYgbWF0Y2hlc1sxXSkgfHwgZmFsc2VcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICB0aGlzLnNldFN0YXR1c2VzKG1hdGNoKVxuICAgICAgICB0aGlzLmNsb3NlKHRydWUpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtY2xvc2UnICkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICB9XG4gICAgaWYgKGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1yZXZva2UnICkpIHtcbiAgICAgIHRoaXMucmV2b2tlQ2hvaWNlKClcbiAgICB9XG4gIH1cblxuICBhdHRhY2hDdXN0b21QYWxldHRlKHBhbGV0dGUpIHtcbiAgICBjb25zdCBoYXNoU3RyID0gaGFzaChKU09OLnN0cmluZ2lmeShwYWxldHRlKSlcbiAgICBjb25zdCBzZWxlY3RvciA9ICdjYy1jb2xvci1vdmVycmlkZS0nICsgaGFzaFN0clxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1BsYWluT2JqZWN0KHBhbGV0dGUpXG5cbiAgICB0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IgPSBpc1ZhbGlkID8gc2VsZWN0b3IgOiBudWxsXG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgdGhpcy5hZGRDdXN0b21TdHlsZShoYXNoU3RyLCBwYWxldHRlLCAnLicgKyBzZWxlY3RvcilcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgfVxuXG4gIGFkZEN1c3RvbVN0eWxlKGhhc2hTdHIsIHBhbGV0dGUsIHByZWZpeCkge1xuICAgIC8vIG9ubHkgYWRkIHRoaXMgaWYgYSBzdHlsZSBsaWtlIGl0IGRvZXNuJ3QgZXhpc3RcbiAgICBpZiAodGhpcy5jdXN0b21TdHlsZXNbaGFzaFN0cl0pIHtcbiAgICAgIC8vIGN1c3RvbSBzdHlsZSBhbHJlYWR5IGV4aXN0cywgc28gaW5jcmVtZW50IHRoZSByZWZlcmVuY2UgY291bnRcbiAgICAgICsrdGhpcy5jdXN0b21TdHlsZXNbaGFzaFN0cl0ucmVmZXJlbmNlc1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY29sb3JTdHlsZXMgPSB7fVxuICAgIGNvbnN0IHsgcG9wdXAsIGJ1dHRvbiwgaGlnaGxpZ2h0LCBzYXZlQnV0dG9uIH0gPSBwYWxldHRlXG5cbiAgICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gICAgaWYgKHBvcHVwKSB7XG4gICAgICAvLyBhc3N1bWVzIHBvcHVwLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICBwb3B1cC50ZXh0ID0gcG9wdXAudGV4dFxuICAgICAgICA/IHBvcHVwLnRleHRcbiAgICAgICAgOiBnZXRDb250cmFzdChwb3B1cC5iYWNrZ3JvdW5kKVxuICAgICAgcG9wdXAubGluayA9IHBvcHVwLmxpbmsgPyBwb3B1cC5saW5rIDogcG9wdXAudGV4dFxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtdG9vbHRpcCwgJyArIHByZWZpeCArICcgLmNjLXRvb2x0aXA6YWZ0ZXInXSA9IFtcbiAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kXG4gICAgICBdXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xuICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmRcbiAgICAgIF1cbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcuY2MtcmV2b2tlJ10gPSBbXG4gICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZFxuICAgICAgXVxuICAgICAgY29sb3JTdHlsZXNbXG4gICAgICAgIHByZWZpeCArXG4gICAgICAgICAgJyAuY2MtbGluaywnICtcbiAgICAgICAgICBwcmVmaXggK1xuICAgICAgICAgICcgLmNjLWxpbms6YWN0aXZlLCcgK1xuICAgICAgICAgIHByZWZpeCArXG4gICAgICAgICAgJyAuY2MtbGluazp2aXNpdGVkJ1xuICAgICAgXSA9IFsnY29sb3I6ICcgKyBwb3B1cC5saW5rXVxuXG4gICAgICBpZiAoYnV0dG9uKSB7XG4gICAgICAgIC8vIGFzc3VtZXMgYnV0dG9uLmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHRcbiAgICAgICAgICA/IGJ1dHRvbi50ZXh0XG4gICAgICAgICAgOiBnZXRDb250cmFzdChidXR0b24uYmFja2dyb3VuZClcbiAgICAgICAgYnV0dG9uLmJvcmRlciA9IGJ1dHRvbi5ib3JkZXIgPyBidXR0b24uYm9yZGVyIDogJ3RyYW5zcGFyZW50J1xuICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgYnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIGJ1dHRvbi5iYWNrZ3JvdW5kXG4gICAgICAgIF1cblxuICAgICAgICBpZiAoYnV0dG9uLnBhZGRpbmcpIHtcbiAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1idG4nXS5wdXNoKCdwYWRkaW5nOiAnICsgYnV0dG9uLnBhZGRpbmcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uLmJhY2tncm91bmQgIT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgICAgcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ1xuICAgICAgICAgIF0gPSBbXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArXG4gICAgICAgICAgICAgIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvcihidXR0b24uYmFja2dyb3VuZCkpXG4gICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgIC8vYXNzdW1lcyBoaWdobGlnaHQuYmFja2dyb3VuZCBpcyBzZXRcbiAgICAgICAgICBoaWdobGlnaHQudGV4dCA9IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICA/IGhpZ2hsaWdodC50ZXh0XG4gICAgICAgICAgICA6IGdldENvbnRyYXN0KGhpZ2hsaWdodC5iYWNrZ3JvdW5kKVxuICAgICAgICAgIGhpZ2hsaWdodC5ib3JkZXIgPSBoaWdobGlnaHQuYm9yZGVyXG4gICAgICAgICAgICA/IGhpZ2hsaWdodC5ib3JkZXJcbiAgICAgICAgICAgIDogJ3RyYW5zcGFyZW50J1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkJ10gPSBbXG4gICAgICAgICAgICAnY29sb3I6ICcgKyBoaWdobGlnaHQudGV4dCxcbiAgICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBoaWdobGlnaHQuYm9yZGVyLFxuICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBoaWdobGlnaHQuYmFja2dyb3VuZFxuICAgICAgICAgIF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZXRzIGhpZ2hsaWdodCB0ZXh0IGNvbG9yIHRvIHBvcHVwIHRleHQuIGJhY2tncm91bmQgYW5kIGJvcmRlciBhcmUgdHJhbnNwYXJlbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dFxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIHNhdmVCdXR0b24gKSB7XG4gICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0bi5jYy1zYXZlJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgc2F2ZUJ1dHRvbi50ZXh0LFxuICAgICAgICAgICdib3JkZXItY29sb3I6ICcgKyBzYXZlQnV0dG9uLmJvcmRlcixcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHNhdmVCdXR0b24uYmFja2dyb3VuZFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMgd2lsbCBiZSBpbnRlcnByZXR0ZWQgYXMgQ1NTLiB0aGUga2V5IGlzIHRoZSBzZWxlY3RvciwgYW5kIGVhY2ggYXJyYXkgZWxlbWVudCBpcyBhIHJ1bGVcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxuXG4gICAgLy8gY3VzdG9tIHN0eWxlIGRvZXNuJ3QgZXhpc3QsIHNvIHdlIGNyZWF0ZSBpdFxuICAgIHRoaXMuY3VzdG9tU3R5bGVzW2hhc2hTdHJdID0ge1xuICAgICAgcmVmZXJlbmNlczogMSxcbiAgICAgIGVsZW1lbnQ6IHN0eWxlLnNoZWV0XG4gICAgfVxuXG4gICAgbGV0IHJ1bGVJbmRleCA9IC0xXG4gICAgZm9yIChsZXQgcHJvcCBpbiBjb2xvclN0eWxlcykge1xuICAgICAgaWYgKGNvbG9yU3R5bGVzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoXG4gICAgICAgICAgcHJvcCArICd7JyArIGNvbG9yU3R5bGVzW3Byb3BdLmpvaW4oJzsnKSArICd9JyxcbiAgICAgICAgICArK3J1bGVJbmRleFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlQ3VzdG9tU3R5bGUocGFsZXR0ZSkge1xuICAgIGNvbnN0IGhhc2hTdHIgPSBoYXNoKEpTT04uc3RyaW5naWZ5KHBhbGV0dGUpKVxuICAgIGNvbnN0IGN1c3RvbVN0eWxlID0gdGhpcy5jdXN0b21TdHlsZXNbaGFzaFN0cl1cbiAgICBpZiAoY3VzdG9tU3R5bGUgJiYgIS0tY3VzdG9tU3R5bGUucmVmZXJlbmNlcykge1xuICAgICAgY29uc3Qgc3R5bGVOb2RlID0gY3VzdG9tU3R5bGUuZWxlbWVudC5vd25lck5vZGVcbiAgICAgIGlmIChzdHlsZU5vZGUgJiYgc3R5bGVOb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgc3R5bGVOb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVOb2RlKVxuICAgICAgfVxuICAgICAgdGhpcy5jdXN0b21TdHlsZXNbaGFzaFN0cl0gPSBudWxsXG4gICAgfVxuICB9XG5cbiAgZ2V0RXZlbnRQYXRoKCBldmVudCApIHtcbiAgICBjb25zdCBwYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoID8gZXZlbnQuY29tcG9zZWRQYXRoKCkgOiAoZnVuY3Rpb24gKCBhcnIsIGVsZW1lbnQgKSB7XG4gICAgICB3aGlsZSAoIGVsZW1lbnQgKSB7XG4gICAgICAgIGFyci5wdXNoKCBlbGVtZW50IClcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFyclxuICAgIH0pKFtdLGV2ZW50LnRhcmdldCApXG4gICAgaWYgKCAhcGF0aCApIHtcbiAgICAgIGNvbnNvbGUud2FybiggXCInLnBhdGgnICYgJy5jb21wb3NlZFBhdGgnIGZhaWxlZCB0byBnZW5lcmF0ZSBhbiBldmVudCBwYXRoLlwiIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXR1cm4gcGF0aFxuICB9XG5cbiAgYXBwbHlBdXRvRGlzbWlzcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmFibGVkLFxuICAgICAgZGlzbWlzc09uVGltZW91dCAgOiBkZWxheSxcbiAgICAgIGRpc21pc3NPblNjcm9sbCAgIDpzY3JvbGxSYW5nZSxcbiAgICAgIGRpc21pc3NPbkxpbmtDbGljayxcbiAgICAgIGRpc21pc3NPbldpbmRvd0NsaWNrLFxuICAgICAgZGlzbWlzc09uS2V5UHJlc3NcbiAgICB9ID0gdGhpcy5vcHRpb25zXG5cbiAgICBpZiAoIGVuYWJsZWQgKSB7XG4gICAgICBpZiAodHlwZW9mIGRlbGF5ID09ICdudW1iZXInICYmIGRlbGF5ID49IDApIHtcbiAgICAgICAgdGhpcy5kaXNtaXNzVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCAoKT0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgICB9LCBNYXRoLmZsb29yKGRlbGF5KSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gTWF0aC5mbG9vcihzY3JvbGxSYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25XaW5kb3dDbGljaykge1xuICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGlmICggIWdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbWVudCA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlnbm9yZUNsaWNrc0Zyb20uc29tZSggaWdub3JlZENsaWNrID0+XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBpZ25vcmVkQ2xpY2sgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljaylcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25MaW5rQ2xpY2spIHtcbiAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKCBnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW0gPT4gdHlwZW9mIGVsZW0udGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbS50YWdOYW1lID09PSAnQScgKSApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcbiAgICAgIH0gZWxzZSBpZiAoIGRpc21pc3NPbktleVByZXNzICkge1xuICAgICAgICAgIHRoaXMub25LZXlQcmVzcyA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmICgga2V5Q29kZSA9PT0gMTMgKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0FsbG93IClcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBrZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNEaXNtaXNzIClcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb25rZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHlSZXZva2VCdXR0b24oKSB7XG4gICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxuICAgIGlmICh0aGlzLm9wdGlvbnMudHlwZSAhPSAnaW5mbycpIHRoaXMub3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXG4gICAgLy8gYW5pbWF0ZVJldm9rYWJsZSBmYWxzZSBmb3IgbW9iaWxlIGRldmljZXNcbiAgICBpZiAoaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1hbmltYXRlJylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy10aGVtZS0nK3RoaXMub3B0aW9ucy50aGVtZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmV2b2tlQnRuID0gdGhpcy5vcHRpb25zLnJldm9rZUJ0blxuICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBjbGFzc2VzLmpvaW4oJyAnKSlcbiAgICAgICAgLnJlcGxhY2UoJ3t7cG9saWN5fX0nLCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kpXG5cbiAgICAgIHRoaXMucmV2b2tlQnRuID0gdGhpcy5hcHBlbmRNYXJrdXAocmV2b2tlQnRuKVxuXG4gICAgICBjb25zdCBidG4gPSB0aGlzLnJldm9rZUJ0blxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gdGhyb3R0bGUoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgY29uc3QgbWluWSA9IDIwXG4gICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwXG5cbiAgICAgICAgICBpZiAoICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXRvcCcgKSAmJiBldnQuY2xpZW50WSA8IG1pblkgKSB8fFxuICAgICAgICAgICAgICAgICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJvdHRvbScgKSAmJiBldnQuY2xpZW50WSA+IG1heFkgKSApIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWN0aXZlICYmICFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoICFhY3RpdmUgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMClcblxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmVcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cbiAgLy8gSXQgZG9lcyBub3QgYWZmZWN0IGhpZGluZyB0aGUgcG9wdXAgZm9yIGNvdW50cmllcyB0aGF0IGRvIG5vdCBoYXZlIGNvb2tpZSBsYXcuXG4gIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xuICBoYXNMYXc6IFtcbiAgICAnQVQnLFxuICAgICdCRScsXG4gICAgJ0JHJyxcbiAgICAnSFInLFxuICAgICdDWicsXG4gICAgJ0NZJyxcbiAgICAnREsnLFxuICAgICdFRScsXG4gICAgJ0ZJJyxcbiAgICAnRlInLFxuICAgICdERScsXG4gICAgJ0VMJyxcbiAgICAnSFUnLFxuICAgICdJRScsXG4gICAgJ0lUJyxcbiAgICAnTFYnLFxuICAgICdMVCcsXG4gICAgJ0xVJyxcbiAgICAnTVQnLFxuICAgICdOTCcsXG4gICAgJ05PJyxcbiAgICAnUEwnLFxuICAgICdQVCcsXG4gICAgJ1NLJyxcbiAgICAnRVMnLFxuICAgICdTRScsXG4gICAgJ0dCJyxcbiAgICAnVUsnLFxuICAgICdHUicsXG4gICAgJ0VVJyxcbiAgICAnUk8nXG4gIF0sXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYWxsIGNvb2tpZSBjb25zZW50IGNob2ljZXMgbXVzdCBiZSByZXZva2FibGUgKGEgdXNlciBtdXN0IGJlIGFibGUgdG9vIGNoYW5nZSB0aGVpciBtaW5kKVxuICByZXZva2FibGU6IFtcbiAgICAnSFInLFxuICAgICdDWScsXG4gICAgJ0RLJyxcbiAgICAnRUUnLFxuICAgICdGUicsXG4gICAgJ0RFJyxcbiAgICAnTFYnLFxuICAgICdMVCcsXG4gICAgJ05MJyxcbiAgICAnTk8nLFxuICAgICdQVCcsXG4gICAgJ0VTJ1xuICBdLFxuXG4gIC8vIGNvdW50cmllcyB0aGF0IHNheSB0aGF0IGEgcGVyc29uIGNhbiBvbmx5IFwiY29uc2VudFwiIGlmIHRoZSBleHBsaWNpdGx5IGNsaWNrIG9uIFwiSSBhZ3JlZVwiLlxuICAvLyBpbiB0aGVzZSBjb3VudHJpZXMsIGNvbnNlbnQgY2Fubm90IGJlIGltcGxpZWQgdmlhIGEgdGltZW91dCBvciBieSBzY3JvbGxpbmcgZG93biB0aGUgcGFnZVxuICBleHBsaWNpdEFjdGlvbjogWydIUicsICdJVCcsICdFUycsICdOTyddXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBUaGUgZGVmYXVsdCB0aW1lb3V0IGlzIDUgc2Vjb25kcy4gVGhpcyBpcyBtYWlubHkgbmVlZGVkIHRvIGNhdGNoIEpTT05QIHJlcXVlc3RzIHRoYXQgZXJyb3IuXG4gIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcbiAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cbiAgdGltZW91dDogNTAwMCxcblxuICAvLyB0aGUgb3JkZXIgdGhhdCBzZXJ2aWNlcyB3aWxsIGJlIGF0dGVtcHRlZCBpblxuICBzZXJ2aWNlczogW1xuICAgICdpcGluZm8nXG5cbiAgICAvKlxuXG4gICAgLy8gJ2lwaW5mb2RiJyByZXF1aXJlcyBzb21lIG9wdGlvbnMsIHNvIHdlIGRlZmluZSBpdCB1c2luZyBhbiBvYmplY3RcbiAgICAvLyB0aGlzIG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIHRoZSBzZXJ2aWNlXG5cbiAgICB7XG4gICAgICBuYW1lOiAnaXBpbmZvZGInLFxuICAgICAgaW50ZXJwb2xhdGVVcmw6IHtcbiAgICAgICAgLy8gb2J2aW91c2x5LCB0aGlzIGlzIGEgZmFrZSBrZXlcbiAgICAgICAgYXBpX2tleTogJ3ZPZ0kzNzQ4ZG5JeXRJcnNKY3hTN3FzRGY2a2JKa0U5bE40eUVEclhBcVhjS1VOdmpqWlBveDNla1hxbU1NbGQnXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBhcyB3ZWxsIGFzIGRlZmluaW5nIGFuIG9iamVjdCwgeW91IGNhbiBkZWZpbmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0XG5cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge25hbWU6ICdpcGluZm9kYid9XG4gICAgfSxcblxuICAgICovXG4gIF0sXG5cbiAgc2VydmljZURlZmluaXRpb25zOiB7XG4gICAgaXBpbmZvOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICB1cmw6ICcvL2lwaW5mby5pbycsXG4gICAgICAgIGhlYWRlcnM6IFsnQWNjZXB0OiBhcHBsaWNhdGlvbi9qc29uJ10sXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbihkb25lLCByZXNwb25zZSkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShyZXNwb25zZSlcbiAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yXG4gICAgICAgICAgICAgID8gdG9FcnJvcihqc29uKVxuICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgIGNvZGU6IGpzb24uY291bnRyeVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0b0Vycm9yKHtlcnJvcjogJ0ludmFsaWQgcmVzcG9uc2UgKCcgKyBlcnIgKyAnKSd9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBUaGlzIHNlcnZpY2UgcmVxdWlyZXMgYW4gb3B0aW9uIHRvIGRlZmluZSBga2V5YC4gT3B0aW9ucyBhcmUgcHJvaXZlZCB1c2luZyBvYmplY3RzIG9yIGZ1bmN0aW9uc1xuICAgIGlwaW5mb2RiOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIFRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIEpTT04sIHNvIHdlIHNpbXBseSBuZWVkIHRvIHBhcnNlIGl0IGFuZCByZXR1cm4gdGhlIGNvdW50cnkgY29kZVxuICAgICAgICB1cmw6XG4gICAgICAgICAgJy8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBpcyBKU09OUCwgdGhlcmVmb3JlIHdlIG11c3Qgc2V0IGl0IHRvIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKHtlcnJvcjoganNvbi5zdGF0dXNNZXNzYWdlfSlcbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1heG1pbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUgd2hpY2ggZGVmaW5lcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuIE9uY2UgbG9hZGVkLCB3ZSBtdXN0XG4gICAgICAgIC8vIG1ha2UgYW4gYWRkaXRpb25hbCBBSkFYIGNhbGwuIFRoZXJlZm9yZSB3ZSBwcm92aWRlIGEgYGRvbmVgIGNhbGxiYWNrIHRoYXQgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICB1cmw6ICcvL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcbiAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlLCBzbyBpdCBtdXN0IGJlIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXG4gICAgICAgICAgaWYgKCF3aW5kb3cuZ2VvaXAyKSB7XG4gICAgICAgICAgICBkb25lKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0LiBUaGUgZG93bmxvYWRlZCBzY3JpcHQgc2hvdWxkIGhhdmUgZXhwb3J0ZWQgYGdlb2lwMmAgdG8gdGhlIGdsb2JhbCBzY29wZSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXG4gICAgICAgICAgICBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRvbmUoe1xuICAgICAgICAgICAgICAgICAgY29kZTogbG9jYXRpb24uY291bnRyeS5pc29fY29kZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cbiAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBpZiBmYWxzZSwgdGhpcyBwcmV2ZW50cyB0aGUgcG9wdXAgZnJvbSBzaG93aW5nICh1c2VmdWwgZm9yIGdpdmluZyB0byBjb250cm9sIHRvIGFub3RoZXIgcGllY2Ugb2YgY29kZSlcbiAgZW5hYmxlZDogdHJ1ZSxcblxuICAvLyBvcHRpb25hbCAoZXhwZWN0aW5nIGEgSFRNTCBlbGVtZW50KSBpZiBwYXNzZWQsIHRoZSBwb3B1cCBpcyBhcHBlbmRlZCB0byB0aGlzIGVsZW1lbnQuIGRlZmF1bHQgaXMgYGRvY3VtZW50LmJvZHlgXG4gIGNvbnRhaW5lcjogbnVsbCxcblxuICAvLyBkZWZhdWx0cyBjb29raWUgb3B0aW9ucyAtIGl0IGlzIFJFQ09NTUVOREVEIHRvIHNldCB0aGVzZSB2YWx1ZXMgdG8gY29ycmVzcG9uZCB3aXRoIHlvdXIgc2VydmVyXG4gIGNvb2tpZToge1xuICAgIC8vIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhpcyBjb29raWUgLSB5b3UgY2FuIGlnbm9yZSB0aGlzXG4gICAgbmFtZTogJ2Nvb2tpZWNvbnNlbnRfc3RhdHVzJyxcbiAgICAvLyBUaGlzIGlzIHRoZSB1cmwgcGF0aCB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBhdCB0aGlzIGxvY2F0aW9uXG4gICAgcGF0aDogJy8nLFxuICAgIC8vIFRoaXMgaXMgdGhlIGRvbWFpbiB0aGF0IHRoZSBjb29raWUgJ25hbWUnIGJlbG9uZ3MgdG8uIFRoZSBjb29raWUgY2FuIG9ubHkgYmUgcmVhZCBvbiB0aGlzIGRvbWFpbi5cbiAgICAvLyAgLSBHdWlkZSB0byBjb29raWUgZG9tYWlucyAtIGh0dHBzOi8vd3d3Lm14c2FzaGEuZXUvYmxvZy8yMDE0LzAzLzA0L2RlZmluaXRpdmUtZ3VpZGUtdG8tY29va2llLWRvbWFpbnMvXG4gICAgZG9tYWluOiAnJyxcbiAgICAvLyBUaGUgY29va2llcyBleHBpcmUgZGF0ZSwgc3BlY2lmaWVkIGluIGRheXMgKHNwZWNpZnkgLTEgZm9yIG5vIGV4cGlyeSlcbiAgICBleHBpcnlEYXlzOiAzNjUsXG4gICAgLy8gSWYgdHJ1ZSB0aGUgY29va2llIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSBzZWN1cmUgZmxhZy4gU2VjdXJlIGNvb2tpZXMgd2lsbCBvbmx5IGJlIHRyYW5zbWl0dGVkIHZpYSBIVFRQUy5cbiAgICBzZWN1cmU6IGZhbHNlXG4gIH0sXG5cbiAgLy8gZWFjaCBpdGVtIGRlZmluZXMgdGhlIGlubmVyIHRleHQgZm9yIHRoZSBlbGVtZW50IHRoYXQgaXQgcmVmZXJlbmNlc1xuICBjb250ZW50OiB7XG4gICAgaGVhZGVyIDogJ0Nvb2tpZXMgdXNlZCBvbiB0aGUgd2Vic2l0ZSEnLFxuICAgIG1lc3NhZ2U6ICdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGVuc3VyZSB5b3UgZ2V0IHRoZSBiZXN0IGV4cGVyaWVuY2Ugb24gb3VyIHdlYnNpdGUuJyxcbiAgICBkaXNtaXNzOiAnR290IGl0IScsXG4gICAgYWxsb3cgIDogJ0FsbG93IGNvb2tpZXMnLFxuICAgIGRlbnkgICA6ICdEZWNsaW5lJyxcbiAgICBsaW5rICAgOiAnTGVhcm4gbW9yZScsXG4gICAgaHJlZiAgIDogJ2h0dHBzOi8vd3d3LmNvb2tpZXNhbmR5b3UuY29tJyxcbiAgICBjbG9zZSAgOiAnJiN4Mjc0YycsXG4gICAgdGFyZ2V0IDogJ19ibGFuaycsXG4gICAgcG9saWN5IDogJ0Nvb2tpZSBQb2xpY3knXG4gIH0sXG5cbiAgLy8gVGhpcyBpcyB0aGUgSFRNTCBmb3IgdGhlIGVsZW1lbnRzIGFib3ZlLiBUaGUgc3RyaW5nIHt7aGVhZGVyfX0gd2lsbCBiZSByZXBsYWNlZCB3aXRoIHRoZSBlcXVpdmFsZW50IHRleHQgYmVsb3cuXG4gIC8vIFlvdSBjYW4gcmVtb3ZlIFwie3toZWFkZXJ9fVwiIGFuZCB3cml0ZSB0aGUgY29udGVudCBkaXJlY3RseSBpbnNpZGUgdGhlIEhUTUwgaWYgeW91IHdhbnQuXG4gIC8vXG4gIC8vICAtIEFSSUEgcnVsZXMgc3VnZ2VzdCB0byBlbnN1cmUgY29udHJvbHMgYXJlIHRhYmJhYmxlIChzbyB0aGUgYnJvd3NlciBjYW4gZmluZCB0aGUgZmlyc3QgY29udHJvbCksXG4gIC8vICAgIGFuZCB0byBzZXQgdGhlIGZvY3VzIHRvIHRoZSBmaXJzdCBpbnRlcmFjdGl2ZSBjb250cm9sIChodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS8pXG4gIGVsZW1lbnRzOiB7XG4gICAgaGVhZGVyOiAnPHNwYW4gY2xhc3M9XCJjYy1oZWFkZXJcIj57e2hlYWRlcn19PC9zcGFuPiZuYnNwJyxcbiAgICBtZXNzYWdlOlxuICAgICAgJzxzcGFuIGlkPVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy1tZXNzYWdlXCI+e3ttZXNzYWdlfX08L3NwYW4+JyxcbiAgICBtZXNzYWdlbGluazpcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19IDxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPjwvc3Bhbj4nLFxuICAgIGRpc21pc3M6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy1kaXNtaXNzXCI+e3tkaXNtaXNzfX08L2E+JyxcbiAgICBhbGxvdzpcbiAgICAgICc8YSBhcmlhLWxhYmVsPVwiYWxsb3cgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiICBjbGFzcz1cImNjLWJ0biBjYy1hbGxvd1wiPnt7YWxsb3d9fTwvYT4nLFxuICAgIGRlbnk6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImRlbnkgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtYnRuIGNjLWRlbnlcIj57e2Rlbnl9fTwvYT4nLFxuICAgIGxpbms6XG4gICAgICAnPGEgYXJpYS1sYWJlbD1cImxlYXJuIG1vcmUgYWJvdXQgY29va2llc1wiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtbGlua1wiIGhyZWY9XCJ7e2hyZWZ9fVwiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXIgbm9mb2xsb3dcIiB0YXJnZXQ9XCJ7e3RhcmdldH19XCI+e3tsaW5rfX08L2E+JyxcbiAgICBjbG9zZTpcbiAgICAgICc8c3BhbiBhcmlhLWxhYmVsPVwiZGlzbWlzcyBjb29raWUgbWVzc2FnZVwiIHJvbGU9YnV0dG9uIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwiY2MtY2xvc2VcIj57e2Nsb3NlfX08L3NwYW4+JyxcbiAgICBjYXRlZ29yaWVzOiBgIFxuICAgICAgPHVsIGNsYXNzPVwiY2MtY2F0ZWdvcmllc1wiPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInVuY2F0ZWdvcml6ZWRcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+VW5jYXRlZ29yaXplZDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJVbmNhdGVnb3JpemVkIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIxXCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCBhbnkgb3RoZXIgY2F0ZWdvcnkuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImVzc2VudGlhbFwiIGNoZWNrZWQgZGlzYWJsZWQvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPkVzc2VudGlhbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2MtaW5mb1wiIGFyaWEtbGFiZWw9XCJFc3NlbnRpYWwgRGVmaW5pdGlvbiBCdXR0b25cIiB0YWJpbmRleD1cIjNcIj5ePC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNjLXRvb2x0aXBcIj5cbiAgICAgICAgICAgIDxwPlRoaXMgaXMgdGhlIGNhdGVnb3J5IGZvciBlc3NlbnRpYWwgYXBwbGljYXRpb24gb3Igd2Vic2l0ZSBvcHBlcmF0aW9uIGNvb2tpZXMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjRcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInBlcnNvbmFsaXphdGlvblwiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5QZXJzb25hbGl6YXRpb248L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiUGVyc29uYWxpemF0aW9uIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI1XCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB0aGUgYXBwbGljYXRpb24gdG8gYSBzcGVjaWZpYyB1c2VyLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiY2MtY2F0ZWdvcnlcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuXCIgdGFiaW5kZXg9XCI2XCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJhbmFseXRpY3NcIi8+PHNwYW4gY2xhc3M9XCJjYy1idG4tY2hlY2tib3hcIj48L3NwYW4+QW5hbHl0aWNzPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIkFuYWx5dGljcyBEZWZpbml0aW9uIEJ1dHRvblwiIHRhYmluZGV4PVwiN1wiPl48L2J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2MtdG9vbHRpcFwiPlxuICAgICAgICAgICAgPHA+VGhpcyBpcyB0aGUgY2F0ZWdvcnkgZm9yIGNvb2tpZXMgdXNlZCB0byBoZWxwIGFuYWx5aXplIGRhdGEuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjhcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIm1hcmtldGluZ1wiLz48c3BhbiBjbGFzcz1cImNjLWJ0bi1jaGVja2JveFwiPjwvc3Bhbj5NYXJrZXRpbmc8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2MtYnRuIGNjLWluZm9cIiBhcmlhLWxhYmVsPVwiTWFya2V0aW5nIERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCI5XCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB1c2VkIHRvIGhlbHAgcGVyb25hbGl6ZSB5b3VyIGludGVybmV0IHNob3BwaW5nICYgYWR2ZXJ0aXNlbWVudCBleHBlcmllbmNlcy48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIGAsXG4gICAgc2F2ZTogYDxidXR0b24gY2xhc3M9XCJjYy1idG4gY2Mtc2F2ZVwiPlNhdmU8L2J1dHRvbj5gXG4gICAgLy9jb21wbGlhbmNlOiBjb21wbGlhbmNlIGlzIGFsc28gYW4gZWxlbWVudCwgYnV0IGl0IGlzIGdlbmVyYXRlZCBieSB0aGUgYXBwbGljYXRpb24sIGRlcGVuZGluZyBvbiBgdHlwZWAgYmVsb3dcbiAgfSxcblxuICAvLyBUaGUgcGxhY2Vob2xkZXJzIHt7Y2xhc3Nlc319IGFuZCB7e2NoaWxkcmVufX0gYm90aCBnZXQgcmVwbGFjZWQgZHVyaW5nIGluaXRpYWxpc2F0aW9uOlxuICAvLyAgLSB7e2NsYXNzZXN9fSBpcyB3aGVyZSBhZGRpdGlvbmFsIGNsYXNzZXMgZ2V0IGFkZGVkXG4gIC8vICAtIHt7Y2hpbGRyZW59fSBpcyB3aGVyZSB0aGUgSFRNTCBjaGlsZHJlbiBhcmUgcGxhY2VkXG4gIHdpbmRvdzpcbiAgICAnPGRpdiByb2xlPVwiZGlhbG9nXCIgYXJpYS1saXZlPVwicG9saXRlXCIgYXJpYS1sYWJlbD1cImNvb2tpZWNvbnNlbnRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiY29va2llY29uc2VudDpkZXNjXCIgY2xhc3M9XCJjYy13aW5kb3cge3tjbGFzc2VzfX1cIj48IS0tZ29vZ2xlb2ZmOiBhbGwtLT57e2NoaWxkcmVufX08IS0tZ29vZ2xlb246IGFsbC0tPjwvZGl2PicsXG4gIFxuICBtb2RhbDogJycsXG5cbiAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxuICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXG4gIHJldm9rZUJ0bjogJzxkaXYgY2xhc3M9XCJjYy1yZXZva2Uge3tjbGFzc2VzfX1cIj57e3BvbGljeX19PC9kaXY+JyxcblxuICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgY29tcGxpYW5jZToge1xuICAgIGluZm86ICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319PC9kaXY+JyxcbiAgICAnb3B0LWluJzpcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICdvcHQtb3V0JzpcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+JyxcbiAgICBjYXRlZ29yaWVzOiAnPGRpdiBjbGFzcz1cImZvcm1cIj57e2NhdGVnb3JpZXN9fXt7c2F2ZX19PC9kaXY+J1xuICB9LFxuXG4gIC8vIHNlbGVjdCB5b3VyIHR5cGUgb2YgcG9wdXAgaGVyZVxuICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgLy8gZGVmaW5lIGxheW91dCBsYXlvdXRzIGhlcmVcbiAgbGF5b3V0czoge1xuICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgYmFzaWMgICAgICAgICA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fScsXG4gICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXG4gICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xuICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xuICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxuICB9LFxuXG4gIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXG4gIGxheW91dDogJ2Jhc2ljJyxcblxuICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXG4gIC8vICAtIGZsb2F0aW5nIHBvc2l0aW9uczogdG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQsIGJvdHRvbS1yaWdodFxuICAvL1xuICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcbiAgcG9zaXRpb246ICdib3R0b20nLCAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzICdib3R0b20nXG5cbiAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXG4gIC8vICAgIC1lZGdlbGVzc1xuICAvLyAgICAtY2xhc3NpY1xuICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cbiAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxuICB0aGVtZTogJ2Jsb2NrJyxcblxuICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcbiAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXG4gIHN0YXRpYzogZmFsc2UsXG5cbiAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXG4gIC8vIGlkZWFsbHksIGFueSBjdXN0b20gY29sb3Vycy90aGVtZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCwgYXMgdGhpcyBpcyBtb3JlIGVmZmljaWVudC5cbiAgLy8gICB7XG4gIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxuICAvLyAgICAgYnV0dG9uOiB7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjZjhlNzFjJ30sXG4gIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAvLyAgIH1cbiAgLy8gYGhpZ2hsaWdodGAgaXMgb3B0aW9uYWwgYW5kIGV4dGVuZHMgYGJ1dHRvbmAuIGlmIGl0IGV4aXN0cywgaXQgd2lsbCBhcHBseSB0byB0aGUgZmlyc3QgYnV0dG9uXG4gIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxuICBwYWxldHRlOiBudWxsLFxuXG4gIC8vIFNvbWUgY291bnRyaWVzIFJFUVVJUkUgdGhhdCBhIHVzZXIgY2FuIGNoYW5nZSB0aGVpciBtaW5kLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHlvdXJzZWxmLlxuICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50LmxlZ2FsYCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcbiAgcmV2b2thYmxlOiBmYWxzZSxcblxuICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcbiAgYW5pbWF0ZVJldm9rYWJsZTogdHJ1ZSxcblxuICAvLyB1c2VkIHRvIGRpc2FibGUgbGluayBvbiBleGlzdGluZyBsYXlvdXRzXG4gIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xuICBzaG93TGluazogdHJ1ZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgc2Nyb2xsIHJhbmdlIHRvIGVuYWJsZVxuICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBhdXRvZGlzbWlzcyBhZnRlciBzZXQgdGltZVxuICBkaXNtaXNzT25UaW1lb3V0OiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gIGRpc21pc3NPbkxpbmtDbGljazogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIGtleXMgYXJlIHByZXNzZWQsICggYWxsb3dLZXlDb2RlID0gMTMsIGRlbnlLZXlDb2RlID0gMjcgKVxuICBkaXNtaXNzT25LZXlQcmVzczogZmFsc2UsXG5cbiAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxuICAvLyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgKG5vdCBDU1Mgc2VsZWN0b3JzKVxuICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nLCAnY2MtbGluayddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxuXG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRlY2lkZSB3aGV0aGVyIHRoZSBwb3B1cCBzaG91bGQgb3Blbi5cbiAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXG4gIGF1dG9PcGVuOiB0cnVlLFxuXG4gIC8vIEJ5IGRlZmF1bHQgdGhlIGNyZWF0ZWQgSFRNTCBpcyBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgKHdoaWNoIGRlZmF1bHRzIHRvIDxib2R5PikuIFlvdSBjYW4gcHJldmVudCB0aGlzIGJlaGF2aW91clxuICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XG4gIC8vXG4gIC8vICAgICBjb25zdCBpbnN0YW5jZSA9IGNvb2tpZWNvbnNlbnQuZmFjdG9yeShvcHRpb25zKVxuICAvLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZS5lbGVtZW50KVxuICAvL1xuICBhdXRvQXR0YWNoOiB0cnVlLFxuXG4gIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcbiAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAvLyBzaW1wbGUgd2hpdGVsaXN0L2JsYWNrbGlzdCBmb3IgcGFnZXMuIHNwZWNpZnkgcGFnZSBieTpcbiAgLy8gICAtIHVzaW5nIGEgc3RyaW5nIDogJy9pbmRleC5odG1sJyAgICAgICAgICAgKG1hdGNoZXMgJy9pbmRleC5odG1sJyBleGFjdGx5KSBPUlxuICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICB3aGl0ZWxpc3RQYWdlOiBbXSxcbiAgYmxhY2tsaXN0UGFnZTogW10sXG5cbiAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAvLyBCZSBzdXJlIHRvIHVzZSB0aGUgY2xhc3NlcyBgY2MtYnRuYCBhbmQgYGNjLWFsbG93YCwgYGNjLWRlbnlgIG9yIGBjYy1kaXNtaXNzYC4gVGhleSBlbmFibGUgdGhlIGFwcCB0byByZWdpc3RlciBjbGlja1xuICAvLyBoYW5kbGVycy4gWW91IGNhbiB1c2Ugb3RoZXIgcHJlLWV4aXN0aW5nIGNsYXNzZXMgdG9vLiBTZWUgYHNyYy9zdHlsZXNgIGZvbGRlci5cbiAgb3ZlcnJpZGVIVE1MOiBudWxsXG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9tYWluLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgc3RhdHVzZXMgfSBmcm9tIFwiLi9jb25zdGFudHNcIlxuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGVTdHJpbmcgPSAoIHN0ciwgY2FsbGJhY2sgKSA9PlxuICBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSAsICggbWF0Y2hlcywgcmVwbGFjZWQgKSA9PiBjYWxsYmFjayggcmVwbGFjZWQgKSB8fCAnJylcblxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IG5hbWUgPT4ge1xuICBjb25zdCB2YWx1ZSA9ICcgJyArIGRvY3VtZW50LmNvb2tpZVxuICBjb25zdCBwYXJ0cyA9IHZhbHVlLnNwbGl0KCcgJyArIG5hbWUgKyAnPScpXG4gIHJldHVybiBwYXJ0cy5sZW5ndGggPCAyXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHBhcnRzXG4gICAgICAgIC5wb3AoKVxuICAgICAgICAuc3BsaXQoJzsnKVxuICAgICAgICAuc2hpZnQoKVxufVxuXG5leHBvcnQgY29uc3Qgc2V0Q29va2llID0gKCBuYW1lLCB2YWx1ZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUgKSA9PiB7XG4gIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcbiAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArXG4gICAgICAgICAgICAgICAgICAgICc7ZXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKCkgK1xuICAgICAgICAgICAgICAgICAgICAnO3BhdGg9JyArIChwYXRoIHx8ICcvJykgK1xuICAgICAgICAgICAgICAgICAgICAoIGRvbWFpbiA/ICc7ZG9tYWluPScgKyBkb21haW4gOiAnJyApICtcbiAgICAgICAgICAgICAgICAgICAgKCBzZWN1cmUgPyAnO3NlY3VyZScgOiAnJyApXG59XG5cbi8vIG9ubHkgdXNlZCBmb3IgdGhyb3R0bGluZyB0aGUgJ21vdXNlbW92ZScgZXZlbnQgKHVzZWQgZm9yIGFuaW1hdGluZyB0aGUgcmV2b2tlIGJ1dHRvbiB3aGVuIGBhbmltYXRlUmV2b2thYmxlYCBpcyB0cnVlKVxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGNhbGxiYWNrLCBsaW1pdCkgPT4ge1xuICBsZXQgd2FpdCA9IGZhbHNlXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXdhaXQpIHtcbiAgICAgIGNhbGxiYWNrKC4uLmFyZ3VtZW50cylcbiAgICAgIHdhaXQgPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB3YWl0ID0gZmFsc2VcbiAgICAgIH0sIGxpbWl0KVxuICAgIH1cbiAgfVxufVxuXG4vLyBvbmx5IHVzZWQgZm9yIGhhc2hpbmcganNvbiBvYmplY3RzICh1c2VkIGZvciBoYXNoIG1hcHBpbmcgcGFsZXR0ZSBvYmplY3RzLCB1c2VkIHdoZW4gY3VzdG9tIGNvbG91cnMgYXJlIHBhc3NlZCB0aHJvdWdoIEphdmFTY3JpcHQpXG5leHBvcnQgY29uc3QgaGFzaCA9IHN0ciA9PiB7XG4gIGxldCBoYXNoTnVtID0gMCxcbiAgICBpID0gMCxcbiAgICBjaHIsXG4gICAgbGVuID0gc3RyLmxlbmd0aFxuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGhhc2hOdW1cbiAgZm9yICggaTsgaSA8IGxlbjsgKytpICkge1xuICAgIGNociA9IHN0ci5jaGFyQ29kZUF0KCBpIClcbiAgICBoYXNoTnVtID0gKCBoYXNoTnVtIDw8IDUgKSAtIGhhc2hOdW0gKyBjaHJcbiAgICBoYXNoTnVtIHw9IDBcbiAgfVxuICByZXR1cm4gaGFzaE51bVxufVxuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXNlSGV4ID0gaGV4ID0+XG4gIGhleFswXSA9PSAnIydcbiAgICA/IGhleC5zdWJzdHIoMSkgOiBoZXgubGVuZ3RoID09IDNcbiAgICA/IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXSA6IGhleFxuXG4vLyB1c2VkIHRvIGdldCB0ZXh0IGNvbG9ycyBpZiBub3Qgc2V0XG5leHBvcnQgY29uc3QgZ2V0Q29udHJhc3QgPSBoZXggPT4ge1xuICBoZXggPSBub3JtYWxpc2VIZXgoaGV4KVxuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnN1YnN0cigwLCAyKSwgMTYpXG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXguc3Vic3RyKDIsIDIpLCAxNilcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zdWJzdHIoNCwgMiksIDE2KVxuICBjb25zdCB5aXEgPSAociAqIDI5OSArIGcgKiA1ODcgKyBiICogMTE0KSAvIDEwMDBcbiAgcmV0dXJuIHlpcSA+PSAxMjggPyAnIzAwMCcgOiAnI2ZmZidcbn1cblxuLy8gdXNlZCB0byBjaGFuZ2UgY29sb3Igb24gaGlnaGxpZ2h0XG5leHBvcnQgY29uc3QgZ2V0THVtaW5hbmNlID0gaGV4ID0+IHtcbiAgY29uc3QgbnVtID0gcGFyc2VJbnQobm9ybWFsaXNlSGV4KGhleCksIDE2KSxcbiAgICBhbXQgPSAzOCxcbiAgICBSID0gKG51bSA+PiAxNikgKyBhbXQsXG4gICAgQiA9ICgobnVtID4+IDgpICYgMHgwMGZmKSArIGFtdCxcbiAgICBHID0gKG51bSAmIDB4MDAwMGZmKSArIGFtdFxuICAgIHJldHVybiAnIycgKyAoXG4gICAgMHgxMDAwMDAwICtcbiAgICAoUiA8IDI1NSA/IChSIDwgMSA/IDAgOiBSKSA6IDI1NSkgKiAweDEwMDAwICtcbiAgICAoQiA8IDI1NSA/IChCIDwgMSA/IDAgOiBCKSA6IDI1NSkgKiAweDEwMCArXG4gICAgKEcgPCAyNTUgPyAoRyA8IDEgPyAwIDogRykgOiAyNTUpXG4gIClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnNsaWNlKDEpXG59XG5leHBvcnQgY29uc3QgZ2V0SG92ZXJDb2xvciA9IGhleCA9PiB7XG4gIGhleCA9IG5vcm1hbGlzZUhleCggaGV4IClcbiAgLy8gZm9yIGJsYWNrIGJ1dHRvbnNcbiAgcmV0dXJuIGhleCA9PT0gJzAwMDAwMCcgPyAnIzIyMicgOiBnZXRMdW1pbmFuY2UoIGhleCApXG59XG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9ICgpID0+XG4gIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApXG5cbi8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0XG5cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZURPTVBhdGggPSAoIGVsZW0sIGNsYXNzTmFtZSApID0+XG4gICFlbGVtIHx8ICFlbGVtLnBhcmVudE5vZGVcbiAgPyBudWxsIDogZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKVxuICA/IGVsZW0gOiB0cmF2ZXJzZURPTVBhdGgoZWxlbS5wYXJlbnROb2RlLCBjbGFzc05hbWUpXG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhdHVzIGlzIGluIHRoZSBjb25zdGFudHMgbGlzdFxuICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHN0YXR1cyA9PiBzdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPj0gMCJdLCJzb3VyY2VSb290IjoiIn0=