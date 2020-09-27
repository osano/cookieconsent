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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cc-window {\n  opacity: 1;\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease; }\n\n.cc-window.cc-invisible {\n  opacity: 0; }\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease; }\n\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em); }\n\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em); }\n\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0); }\n\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0); }\n\n.cc-revoke:hover {\n  transform: translateY(0); }\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s; }\n\n/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box;\n  /* exclude padding when dealing with width */\n  /* System font stack */\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;\n  font-size: 16px;\n  /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n  display: flex;\n  flex-wrap: nowrap;\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998; }\n\n.cc-revoke {\n  z-index: 9999; }\n\n.cc-window.cc-static {\n  position: static; }\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em;\n  /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column; }\n\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row; }\n\n.cc-revoke {\n  padding: 0.5em; }\n\n.cc-revoke:hover {\n  text-decoration: underline; }\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold; }\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer; }\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline; }\n\n.cc-link:hover {\n  opacity: 1; }\n\n.cc-link:active,\n.cc-link:visited {\n  color: initial; }\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap; }\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent; }\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline; }\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75; }\n\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1; }\n\n/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em; }\n\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em; }\n\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset; }\n\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset; }\n\n/**************************************** FLOATING ****************************************/\n/* these classes position the floating element */\n.cc-top {\n  top: 1em; }\n\n.cc-left {\n  left: 1em; }\n\n.cc-right {\n  right: 1em; }\n\n.cc-bottom {\n  bottom: 1em; }\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em; }\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em; }\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto; }\n\n/**************************************** BANNER ****************************************/\n.cc-window.cc-banner {\n  align-items: center; }\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0; }\n\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em; }\n\n/* COMPLIANCE BOX */\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between; }\n\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1; }\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em; }\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display: inline-flex;\n  flex-direction: column;\n  overflow: visible; }\n  .cc-window.cc-type-categories .form {\n    text-align: right; }\n  .cc-window.cc-type-categories .cc-btn {\n    margin: 0; }\n    .cc-window.cc-type-categories .cc-btn.cc-save {\n      margin: 0;\n      display: inline-block; }\n\n.cc-categories {\n  display: inline-flex; }\n  .cc-categories .cc-category {\n    display: flex;\n    max-width: 100%;\n    margin: 0 2px;\n    position: relative; }\n  .cc-categories .cc-btn {\n    border-right: none;\n    outline: none;\n    text-transform: capitalize; }\n    .cc-categories .cc-btn input[type=checkbox] {\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px);\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer; }\n    .cc-categories .cc-btn:not(.cc-info):not(.cc-save) {\n      padding-left: 26px; }\n  .cc-categories .cc-info {\n    border-left: none;\n    border-right: 2px solid lightgrey;\n    padding: 4px;\n    font-variant: all-small-caps; }\n    .cc-categories .cc-info:focus + .cc-tooltip {\n      display: block; }\n  .cc-categories .cc-tooltip {\n    display: none;\n    position: absolute;\n    z-index: 3;\n    width: 190px;\n    bottom: 46px;\n    padding: 8px;\n    border: thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba(150, 150, 150, 0.7); }\n    .cc-categories .cc-tooltip:after {\n      content: \"\";\n      width: 10px;\n      height: 10px;\n      transform: rotate(45deg);\n      position: absolute;\n      bottom: -7px;\n      left: 10px;\n      box-shadow: 2px 1px 1px rgba(200, 200, 200, 0.5); }\n    .cc-categories .cc-tooltip p {\n      margin: 0; }\n\n@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none; } }\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal; } }\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait), screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window.cc-top {\n    top: 0; }\n  .cc-window.cc-bottom {\n    bottom: 0; }\n  .cc-window.cc-banner, .cc-window.cc-floating, .cc-window.cc-right, .cc-window.cc-left {\n    left: 0;\n    right: 0; }\n  .cc-window.cc-banner {\n    flex-direction: column;\n    align-items: unset; }\n    .cc-window.cc-banner .cc-compliance {\n      flex: 1 1 auto; }\n    .cc-window.cc-banner .cc-message {\n      margin-right: 0;\n      margin-bottom: 1em; }\n  .cc-window.cc-floating {\n    max-width: none; }\n  .cc-window.cc-type-categories {\n    flex-direction: column; }\n  .cc-window .cc-message {\n    margin-bottom: 1em; }\n  .cc-window .cc-categories {\n    flex-direction: column;\n    width: 100%;\n    margin-right: 8px; }\n  .cc-window .cc-category {\n    margin: 4px 0; }\n    .cc-window .cc-category .cc-btn:not(.cc-info) {\n      width: calc( 100% - 16px);\n      min-width: 140px; } }\n\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0; } }\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories {\n    display: flex;\n    flex-direction: column; }\n  .cc-categories .cc-category {\n    margin: 4px 0; }\n  .form {\n    width: 100%;\n    max-width: 350px; }\n  .cc-btn:not(.cc-info):not(.cc-save) {\n    width: calc( 100% - 16px); } }\n\n/* Classic */\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-compliance {\n  text-align: center;\n  display: inline;\n  flex: none; }\n\n.cc-theme-classic {\n  overflow: visible;\n  justify-content: space-between; }\n  .cc-theme-classic .cc-btn {\n    position: relative;\n    border-radius: 5px;\n    outline: none; }\n    .cc-theme-classic .cc-btn:last-child {\n      min-width: 140px; }\n  .cc-theme-classic .cc-category .cc-btn {\n    border-radius: 5px 0 0 5px;\n    padding-right: 2px;\n    padding-left: 28px;\n    font-weight: normal;\n    border-right: none;\n    box-sizing: border-box; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox] {\n      position: absolute;\n      left: 0;\n      top: -1px;\n      width: 100%;\n      height: 26px;\n      opacity: 0;\n      cursor: pointer;\n      z-index: 1; }\n      .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox {\n        display: block;\n        font-size: 2rem;\n        position: absolute;\n        top: 2px;\n        left: 6px;\n        z-index: 0;\n        outline: none; }\n        .cc-theme-classic .cc-category .cc-btn input[type=checkbox] + .cc-btn-checkbox:before {\n          content: \"\\1F5F5\"; }\n    .cc-theme-classic .cc-category .cc-btn input[type=checkbox]:checked + .cc-btn-checkbox:after {\n      content: \"\\2713\";\n      position: absolute;\n      top: -4px;\n      left: 0;\n      font-size: 2.3rem;\n      text-shadow: 0 1px 3px rgba(150, 150, 150, 0.5); }\n    .cc-theme-classic .cc-category .cc-btn.cc-info {\n      margin: 0;\n      padding: 0 4px;\n      border-radius: 0 5px 5px 0; }\n    .cc-theme-classic .cc-category .cc-btn:last-child {\n      min-width: 0; }\n  .cc-theme-classic .cc-category .cc-tooltip {\n    border-radius: 5px; }\n    .cc-theme-classic .cc-category .cc-tooltip:after {\n      border-bottom: thin solid lightgrey;\n      border-right: thin solid lightgrey; }\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block; }\n\n/* Edgeless */\n.cc-theme-edgeless.cc-window {\n  padding: 0; }\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em; }\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%; }\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em; }\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn {\n  padding: 0.4em 0.8em;\n  padding-left: 26px; }\n  .cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-btn.cc-info {\n    padding: 0.4em 4px; }\n\n.cc-window.cc-theme-edgeless.cc-type-categories .cc-categories .cc-tooltip {\n  border: none; }\n", "",{"version":3,"sources":["webpack://src/styles/animation.scss","webpack://src/styles/base.scss","webpack://src/styles/layout.scss","webpack://src/styles/media.scss","webpack://src/styles/themes/classic.scss","webpack://src/styles/themes/edgeless.scss"],"names":[],"mappings":"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","sourcesContent":[".cc-window {\n  opacity: 1;\n\n  -webkit-transition: opacity 1s ease;\n  -moz-transition: opacity 1s ease;\n  -ms-transition: opacity 1s ease;\n  -o-transition: opacity 1s ease;\n  transition: opacity 1s ease;\n}\n\n.cc-window.cc-invisible {\n  opacity: 0;\n}\n\n/* only animate ifhas class 'cc-animate' */\n.cc-animate.cc-revoke {\n  -webkit-transition: transform 1s ease;\n  -moz-transition: transform 1s ease;\n  -ms-transition: transform 1s ease;\n  -o-transition: transform 1s ease;\n  transition: transform 1s ease;\n}\n.cc-animate.cc-revoke.cc-top {\n  transform: translateY(-2em);\n}\n.cc-animate.cc-revoke.cc-bottom {\n  transform: translateY(2em);\n}\n.cc-animate.cc-revoke.cc-active.cc-top {\n  transform: translateY(0);\n}\n.cc-animate.cc-revoke.cc-active.cc-bottom {\n  transform: translateY(0);\n}\n.cc-revoke:hover {\n  transform: translateY(0);\n}\n\n.cc-grower {\n  /* Initially we don't want any height, and we want the contents to be hidden */\n  max-height: 0;\n  overflow: hidden;\n\n  /* Set our transitions up. */\n  -webkit-transition: max-height 1s;\n  -moz-transition: max-height 1s;\n  -ms-transition: max-height 1s;\n  -o-transition: max-height 1s;\n  transition: max-height 1s;\n}\n","/* the popup window */\n.cc-window,\n.cc-revoke {\n  position: fixed;\n  overflow: hidden;\n  box-sizing: border-box; /* exclude padding when dealing with width */\n\n  /* System font stack */\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;;\n  font-size: 16px; /* by setting the base font here, we can size the rest of the popup using CSS `em` */\n  line-height: 1.5em;\n\n  display: flex;\n  flex-wrap: nowrap;\n\n  /* the following are random unjustified styles - just because - should probably be removed */\n  z-index: 9998;\n}\n\n.cc-revoke {\n  z-index: 9999;\n}\n\n.cc-window.cc-static {\n  position: static;\n}\n\n/* 2 basic types of window - floating / banner */\n.cc-window.cc-floating {\n  padding: 2em;\n  max-width: 24em; /* 1em == 16px therefore 24em == 384px */\n  flex-direction: column;\n}\n.cc-window.cc-banner {\n  padding: 1em 1.8em;\n  width: 100%;\n  flex-direction: row;\n}\n\n.cc-revoke {\n  padding: 0.5em;\n}\n.cc-revoke:hover {\n  text-decoration: underline;\n}\n\n.cc-header {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n/* clickable things */\n.cc-btn,\n.cc-link,\n.cc-close,\n.cc-revoke {\n  cursor: pointer;\n}\n\n.cc-link {\n  opacity: 0.8;\n  display: inline-block;\n  padding: 0.2em;\n  text-decoration: underline;\n}\n.cc-link:hover {\n  opacity: 1;\n}\n.cc-link:active,\n.cc-link:visited {\n  color: initial;\n}\n\n.cc-btn {\n  display: block;\n  padding: 0.4em 0.8em;\n  font-size: 0.9em;\n  font-weight: bold;\n  border-width: 2px;\n  border-style: solid;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.cc-highlight .cc-btn:first-child {\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.cc-highlight .cc-btn:first-child:hover,\n.cc-highlight .cc-btn:first-child:focus {\n  background-color: transparent;\n  text-decoration: underline;\n}\n\n.cc-close {\n  display: block;\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 1.6em;\n  opacity: 0.9;\n\n  /* seeing as this contains text and not an image, the element taller than it is wide (because it is text) */\n  /*  - we want it to be a square, because it's acting as an icon */\n  /*  - setting the line height normalizes the height */\n  line-height: 0.75;\n}\n.cc-close:hover,\n.cc-close:focus {\n  opacity: 1;\n}\n","/* This file should contain styles that modifies the popup layout. */\n/* By layout, we mean the physical position of the elements on the popup window, and the margin / padding around those elements. */\n\n.cc-revoke.cc-top {\n  top: 0;\n  left: 3em;\n  border-bottom-left-radius: 0.5em;\n  border-bottom-right-radius: 0.5em;\n}\n.cc-revoke.cc-bottom {\n  bottom: 0;\n  left: 3em;\n  border-top-left-radius: 0.5em;\n  border-top-right-radius: 0.5em;\n}\n.cc-revoke.cc-left {\n  left: 3em;\n  right: unset;\n}\n.cc-revoke.cc-right {\n  right: 3em;\n  left: unset;\n}\n\n/**************************************** FLOATING ****************************************/\n\n/* these classes position the floating element */\n.cc-top {\n  top: 1em;\n}\n.cc-left {\n  left: 1em;\n}\n.cc-right {\n  right: 1em;\n}\n.cc-bottom {\n  bottom: 1em;\n}\n\n/* links that are direct decendants should be displayed as block */\n.cc-floating > .cc-link {\n  margin-bottom: 1em;\n}\n\n.cc-floating .cc-message {\n  display: block;\n  margin-bottom: 1em;\n}\n\n.cc-window.cc-floating .cc-compliance {\n  flex: 1 0 auto;\n}\n\n/**************************************** BANNER ****************************************/\n\n.cc-window.cc-banner {\n  align-items: center;\n}\n\n.cc-banner.cc-top {\n  left: 0;\n  right: 0;\n  top: 0;\n}\n.cc-banner.cc-bottom {\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.cc-banner .cc-message {\n  display: block;\n  flex: 1 1 auto;\n  max-width: 100%;\n  margin-right: 1em;\n}\n\n/* COMPLIANCE BOX */\n\n.cc-compliance {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cc-floating .cc-compliance > .cc-btn {\n  flex: 1;\n}\n\n.cc-btn + .cc-btn {\n  margin-left: 0.5em;\n}\n\n/* Categories Layout */\n.cc-window.cc-type-categories {\n  display       : inline-flex;\n  flex-direction: column;\n  overflow      : visible;\n  .form{\n    text-align: right;\n  }\n  .cc-btn {\n    margin: 0;\n    &.cc-save {\n      margin        : 0;\n      display       : inline-block;\n    }\n  }\n}\n.cc-categories {\n  display: inline-flex;\n  .cc-category{\n    display  : flex;\n    max-width: 100%;\n    margin   : 0 2px;\n    position : relative;\n  }\n  .cc-btn {\n    border-right: none;\n    outline     : none;\n    text-transform: capitalize;\n    input[type=checkbox]{\n      float: left;\n      height: 26px;\n      width: calc( 100% - 22px );\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 2px;\n      cursor: pointer;\n    }\n    &:not(.cc-info):not(.cc-save){\n      padding-left: 26px;\n    }\n  }\n  .cc-info {\n    border-left : none;\n    border-right: 2px solid lightgrey;\n    padding     : 4px;\n    font-variant: all-small-caps;\n    &:focus + .cc-tooltip{\n      display: block;\n    }\n  }\n  .cc-tooltip{\n    display      : none;\n    position     : absolute;\n    z-index      : 3;\n    width        : 190px;\n    bottom       : 46px;\n    padding      : 8px;\n    border       : thin solid lightgrey;\n    box-shadow: 1px 1px 4px rgba( 150, 150, 150, .7 );\n    &:after{\n      content   : \"\";\n      width     : 10px;\n      height    : 10px;\n      transform : rotate(45deg);\n      position  : absolute;\n      bottom    : -7px;\n      left      : 10px;\n      box-shadow: 2px 1px 1px rgba( 200, 200, 200, .5 );\n    }\n    p {\n      margin: 0;\n    }\n  }\n}","@media print {\n  .cc-window,\n  .cc-revoke {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .cc-btn {\n    white-space: normal;\n  }\n}\n\n/* dimensions for 'iPhone6 Plus' and lower */\n@media screen and (max-width: 414px) and (orientation: portrait),\n  screen and (max-width: 736px) and (orientation: landscape) {\n  .cc-window {\n    &.cc-top {\n      top: 0;\n    }\n    &.cc-bottom {\n      bottom: 0;\n    }\n    &.cc-banner,\n    &.cc-floating,\n    &.cc-right,\n    &.cc-left {\n      left: 0;\n      right: 0;\n    }\n    \n    &.cc-banner {\n      flex-direction: column;\n      align-items: unset;\n      .cc-compliance {\n        flex: 1 1 auto;\n      }\n      .cc-message {\n        margin-right: 0;\n        margin-bottom: 1em;\n      }\n    }\n    &.cc-floating {\n      max-width: none;\n    }\n    &.cc-type-categories {\n      flex-direction: column;\n    }\n    .cc-message {\n      margin-bottom: 1em;\n    }\n    .cc-categories{\n      flex-direction: column;\n      width: 100%;\n      margin-right: 8px;\n    }\n    .cc-category {\n      margin: 4px 0;\n      .cc-btn:not(.cc-info){\n        width: calc( 100% - 16px);\n        min-width: 140px;\n      }\n    }\n  } \n}\n@media screen and (max-width: 854px) {\n  .cc-window.cc-type-categories .cc-btn.cc-save {\n    margin: 8px 0;\n  }\n}\n\n@media screen and (max-width: 790px) {\n  .cc-window.cc-type-categories .cc-categories{\n    display: flex;\n    flex-direction: column;\n  }\n  .cc-categories .cc-category{\n    margin: 4px 0;\n  }\n  .form {\n    width    : 100%;\n    max-width: 350px;\n  }\n  .cc-btn:not(.cc-info):not(.cc-save){\n    width: calc( 100% - 16px);\n  }\n}\n","/* Classic */\n\n.cc-floating.cc-theme-classic {\n  padding: 1.2em;\n  border-radius: 5px;\n}\n\n.cc-floating.cc-type-info.cc-theme-classic {\n  .cc-compliance {\n    text-align: center;\n    display   : inline;\n    flex      : none;\n  }\n}\n\n.cc-theme-classic{\n  overflow: visible;\n  justify-content: space-between;\n  .cc-btn {\n    position     : relative;\n    border-radius: 5px;\n    outline      : none;\n    &:last-child {\n      min-width: 140px;\n    }\n  }\n  .cc-category {\n    .cc-btn {\n      border-radius: 5px 0 0 5px;\n      padding-right: 2px;\n      padding-left : 28px;\n      font-weight  : normal;\n      border-right : none;\n      box-sizing   : border-box;\n      input[type=checkbox]{\n        position: absolute;\n        left    : 0;\n        top     : -1px;\n        width   : 100%;\n        height  : 26px;\n        opacity : 0;\n        cursor  : pointer;\n        z-index : 1;\n        & + .cc-btn-checkbox {\n          display  : block;\n          font-size: 2rem;\n          position : absolute;\n          top      : 2px;\n          left     : 6px;\n          z-index  : 0;\n          outline  : none;\n          &:before{\n            content: \"\\1F5F5\";\n          }\n        }\n      }\n      input[type=checkbox]:checked + .cc-btn-checkbox{\n        &:after{\n          content    : \"\\2713\";\n          position   : absolute;\n          top        :-4px;\n          left       : 0;\n          font-size  : 2.3rem;\n          text-shadow: 0 1px 3px rgba( 150, 150, 150, .5);\n        }\n      }\n      &.cc-info {\n        margin       : 0;\n        padding      : 0 4px;\n        border-radius: 0 5px 5px 0;\n      }\n      &:last-child{\n        min-width: 0;\n      }\n    }\n    .cc-tooltip{\n      border-radius: 5px;\n      &:after{\n        border-bottom  : thin solid lightgrey;\n        border-right: thin solid lightgrey;\n      }\n    }\n  }\n}\n\n.cc-floating.cc-type-info.cc-theme-classic .cc-btn {\n  display: inline-block;\n}\n","/* Edgeless */\n\n.cc-theme-edgeless.cc-window {\n  padding: 0;\n}\n\n.cc-floating.cc-theme-edgeless .cc-message {\n  margin: 2em;\n  margin-bottom: 1.5em;\n}\n\n.cc-banner.cc-theme-edgeless .cc-btn {\n  margin: 0;\n  padding: 0.8em 1.8em;\n  height: 100%;\n}\n\n.cc-banner.cc-theme-edgeless .cc-message {\n  margin-left: 1em;\n}\n\n.cc-floating.cc-theme-edgeless .cc-btn + .cc-btn {\n  margin-left: 0;\n}\n\n.cc-window.cc-theme-edgeless.cc-type-categories{\n  .cc-categories {\n    .cc-btn{\n      padding: 0.4em 0.8em;\n      padding-left: 26px;\n      &.cc-info{\n        padding: 0.4em 4px;\n      }\n    }\n    .cc-tooltip{\n      border: none;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


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
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
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
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

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

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
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

  checkListener(listener);

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
    m = _getMaxListeners(target);
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
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
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
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

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

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
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


const statuses = ["DENY", "ALLOW", "DISMISS"];
const statusDeny = "DENY";
const statusAllow = "ALLOW";
const statusDismiss = "DISMISS";
const categories = ["UNCATEGORIZED", "ESSENTIAL", "PERSONALIZATION", "ANALYTICS", "MARKETING"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/CookieConsent */ "./src/models/CookieConsent.js");





if (typeof exports !== 'undefined') {
  module.exports = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
} else {
  window.CookieConsent = _models_CookieConsent__WEBPACK_IMPORTED_MODULE_1__["default"];
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);




const emitter = new events__WEBPACK_IMPORTED_MODULE_1___default.a();
class Base {
  constructor(defaultOptions = {}, options = {}) {
    this.options = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"])(defaultOptions, options);
    this.on = emitter.on.bind(emitter);
    this.emit = emitter.emit.bind(emitter);
  }

}

/***/ }),

/***/ "./src/models/CookieConsent.js":
/*!*************************************!*\
  !*** ./src/models/CookieConsent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieConsent; });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _Legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legal */ "./src/models/Legal.js");
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ "./src/models/Location.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popup */ "./src/models/Popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");







 // This function initializes the app by combining the use of the Popup, Locator and Law modules
// You can string together these three modules yourself however you want, by writing a new function.

class CookieConsent extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(options);
    const answers = _constants__WEBPACK_IMPORTED_MODULE_4__["categories"].map(category => {
      const cookieName = this.options.cookie && this.options.cookie.name ? this.options.cookie.name : 'cookieconsent_status_';
      const answer = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getCookie"])(cookieName + category);
      return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["isValidStatus"])(answer) ? {
        [category]: answer
      } : undefined;
    }).filter(obj => obj ? obj[Object.keys(obj)[0]] : false); // if they have already answered

    if (answers.length > 0) {
      setTimeout(() => this.emit("initialized", answers));
    } else if (this.options.legal && this.options.legal.countryCode) {
      this.initializationComplete({
        code: this.options.legal.countryCode
      });
    } else if (this.options.location) {
      new _Location__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.location).locate(this.initializationComplete.bind(this), this.initializationError.bind(this));
    } else {
      this.initializationComplete({});
    }
  }

  initializationComplete(result) {
    if (result.code) {
      this.options = new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).applyLaw(this.options, result.code);
    }

    this.popup = new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
    setTimeout(() => this.emit("initialized", this.popup), 0);
  }

  initializationError(error) {
    setTimeout(() => this.emit("error", error, new _Popup__WEBPACK_IMPORTED_MODULE_3__["default"](this.options)), 0);
  }

  getCountryLaws(countryCode) {
    return new _Legal__WEBPACK_IMPORTED_MODULE_1__["default"](this.options.legal).get(countryCode);
  }

  isOpen() {
    return this.popup.isOpen();
  }

  close() {
    return this.popup.close(), this;
  }

  revokeChoice() {
    return this.popup.revokeChoice(), this;
  }

  open() {
    return this.popup.open(), this;
  }

  toggleRevokeButton(bool) {
    return this.popup.toggleRevokeButton(bool), this;
  }

  setStatuses(status) {
    return this.popup.setStatuses(status), this;
  }

  clearStatuses() {
    return this.popup.clearStatuses(), this;
  }

  destroy() {
    return this.popup.destroy(), this;
  }

}
_constants__WEBPACK_IMPORTED_MODULE_4__["statuses"].reduce((obj, status) => (Object.defineProperty(CookieConsent, status, {
  get: function () {
    return status;
  },
  set: function () {},
  enumerable: false,
  writeable: false,
  configurable: false
}), obj), CookieConsent);

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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/legal */ "./src/options/legal.js");




class Legal extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options = {}) {
    super(_options_legal__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  get(countryCode) {
    return {
      hasLaw: this.options.hasLaw.includes(countryCode),
      revokable: this.options.revokable.includes(countryCode),
      explicitAction: this.options.explicitAction.includes(countryCode)
    };
  }

  applyLaw(options, countryCode) {
    const country = this.get(countryCode);

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

}

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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/location */ "./src/options/location.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




 // An object containing all the location services we have already set up.
// When using a service, it could either return a data structure in plain text (like a JSON object) or an executable script
// When the response needs to be executed by the browser, then `isScript` must be set to true, otherwise it won't work.
// When the service uses a script, the chances are that you'll have to use the script to make additional requests. In these
// cases, the services `callback` property is called with a `done` function. When performing async operations, this must be called
// with the data (or Error), and `cookieconsent.locate` will take care of the rest

class Location extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_location__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.currentServiceIndex = -1; // the index (in options) of the service we're currently using
  }

  getNextService() {
    let service;

    do {
      service = this.getServiceByIdx(++this.currentServiceIndex);
    } while (this.currentServiceIndex < this.options.services.length && !service);

    return service;
  }

  getServiceByIdx(idx) {
    // This can either be the name of a default locationService, or a function.
    const serviceOption = this.options.services[idx]; // If it's a string, use one of the location services.

    if (typeof serviceOption === 'function') {
      const dynamicOpts = serviceOption();
      return dynamicOpts.name ? Object.assign({}, dynamicOpts, this.options.serviceDefinitions[dynamicOpts.name](dynamicOpts)) : dynamicOpts;
    } // If it's a string, use one of the location services.


    if (typeof serviceOption === 'string') {
      return this.options.serviceDefinitions[serviceOption]();
    } // If it's an object, assume {name: 'ipinfo', ...otherOptions}
    // Allows user to pass in API keys etc.


    if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(serviceOption)) {
      return this.options.serviceDefinitions[serviceOption.name](serviceOption);
    }

    return null;
  } // This runs the service located at index `currentServiceIndex`.
  // If the service fails, `runNextServiceOnError` will continue trying each service until all fail, or one completes successfully


  locate(complete, error) {
    const service = this.getNextService();

    if (!service) {
      error(new Error('No services to run'));
      return;
    }

    this.callbackComplete = complete;
    this.callbackError = error;
    this.runService(service, this.runNextServiceOnError.bind(this));
  } // Potentially adds a callback to a url for jsonp.


  setupUrl(service) {
    const serviceOpts = this.getCurrentServiceOpts();
    return service.url.replace(/\{(.*?)\}/g, function (_, param) {
      if (param === 'callback') {
        const tempName = 'callback' + Date.now();

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


  runService(service, complete) {
    // basic check to ensure it resembles a `service`
    if (!service || !service.url || !service.callback) {
      return;
    } // we call either `getScript` or `makeAsyncRequest` depending on the type of resource


    const requestFunction = service.isScript ? _utils__WEBPACK_IMPORTED_MODULE_2__["getScript"] : _utils__WEBPACK_IMPORTED_MODULE_2__["makeAsyncRequest"]; // both functions have similar signatures so we can pass the same arguments to both

    requestFunction(this.setupUrl(service), xhr => {
      // if `!xhr`, then `getScript` function was used, so there is no response text
      let responseText = xhr ? xhr.responseText : ''; // if the resource is a script, then this function is called after the script has been run.
      // if the script is JSONP, then a time defined function `callback_{Date.now}` has already
      // been called (as the JSONP callback). This callback sets the __JSONP_DATA property

      if (service.__JSONP_DATA) {
        responseText = service.__JSONP_DATA;
        delete service.__JSONP_DATA;
      } // call the service callback with the response text (so it can parse the response)


      this.runServiceCallback.call(this, complete, service, responseText);
    }, this.options.timeout, service.data, service.headers); // `service.data` and `service.headers` are optional (they only count if `!service.isScript` anyway)
  } // The service request has run (and possibly has a `responseText`) [no `responseText` if `isScript`]
  // We need to run its callback which determines if its successful or not
  // `complete` is called on success or failure


  runServiceCallback(complete, service, responseText) {
    // this is the function that is called if the service uses the async callback in its handler method
    const serviceResultHandler = asyncResult => {
      // if `result` is a valid value, then this function shouldn't really run
      // even if it is called by `service.callback`
      if (!result) {
        this.onServiceResult(complete, asyncResult);
      }
    }; // the function `service.callback` will either extract a country code from `responseText` and return it (in `result`)
    // or (if it has to make additional requests) it will call a `done` callback with the country code when it is ready


    const result = service.callback(serviceResultHandler, responseText);

    if (result) {
      this.onServiceResult(complete, result);
    }
  } // This is called with the `result` from `service.callback` regardless of how it provided that result (sync or async).
  // `result` will be whatever is returned from `service.callback`. A service callback should provide an object with data


  onServiceResult(complete, result) {
    // convert result to nodejs style async callback
    if (result instanceof Error || result && result.error) {
      complete.call(this, result, null);
    } else {
      complete.call(this, null, result);
    }
  } // if `err` is set, the next service handler is called
  // if `err` is null, the `onComplete` handler is called with `data`


  runNextServiceOnError(err, data) {
    if (err) {
      this.logError(err);
      const nextService = this.getNextService();

      if (nextService) {
        this.runService(nextService, this.runNextServiceOnError.bind(this));
      } else {
        this.completeService.call(this, this.callbackError, new Error('All services failed'));
      }
    } else {
      this.completeService.call(this, this.callbackComplete, data);
    }
  }

  getCurrentServiceOpts() {
    const val = this.options.services[this.currentServiceIndex];

    if (typeof val == 'string') {
      return {
        name: val
      };
    } else if (typeof val == 'function') {
      return val();
    } else if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPlainObject"])(val)) {
      return val;
    } else {
      return {};
    }
  } // calls the `onComplete` callback after resetting the `currentServiceIndex`


  completeService(fn, data) {
    this.currentServiceIndex = -1;
    fn && fn(data);
  }

  logError(err) {
    console.warn(`The service[${this.currentServiceIndex}] (${this.getServiceByIdx(this.currentServiceIndex).url}) responded with the following error`, err);
  }

}

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
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ "./src/models/Base.js");
/* harmony import */ var _options_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../options/popup */ "./src/options/popup.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");






class Popup extends _Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(options) {
    super(_options_popup__WEBPACK_IMPORTED_MODULE_1__["default"], options);
    this.userCategories = {
      UNCATEGORIZED: 'DISMISS',
      ESSENTIAL: 'ALLOW',
      PERSONALIZATION: 'DISMISS',
      ANALYTICS: 'DISMISS',
      MARKETING: 'DISMISS'
    };
    this.customStyles = {};
    this.hasTransition = !!function () {
      const el = document.createElement('div');
      const trans = {
        t: 'transitionend',
        OT: 'oTransitionEnd',
        msT: 'MSTransitionEnd',
        MozT: 'transitionend',
        WebkitT: 'webkitTransitionEnd'
      };

      for (let prefix in trans) {
        if (trans.hasOwnProperty(prefix) && typeof el.style[prefix + 'ransition'] !== 'undefined') {
          return trans[prefix];
        }
      }

      return '';
    }(); // returns true if `onComplete` was called

    if (this.canUseCookies()) {
      // user has already answered
      this.options.enabled = false;
    } // apply blacklist / whitelist


    if (this.options.blacklistPage.includes(location.pathname)) {
      this.options.enabled = false;
    }

    if (this.options.whitelistPage.includes(location.pathname)) {
      this.options.enabled = true;
    } // the full markup either contains the wrapper or it does not (for multiple instances)


    let cookiePopup = this.options.window.replace('{{classes}}', this.getPopupClasses().join(' ')).replace('{{children}}', this.getPopupInnerMarkup()); // if user passes html, use it instead

    const customHTML = this.options.overrideHTML;

    if (typeof customHTML == 'string' && customHTML.length) {
      cookiePopup = customHTML;
    } // if static, we need to grow the element from 0 height so it doesn't jump the page
    // content. we wrap an element around it which will mask the hidden content


    if (this.options.static) {
      // `grower` is a wrapper div with a hidden overflow whose height is animated
      const wrapper = this.appendMarkup(`<div class="cc-grower">${cookiePopup}</div>`);
      wrapper.style.display = ''; // set it to visible (because appendMarkup hides it)

      this.element = wrapper.firstChild; // get the `element` reference from the wrapper

      this.element.style.display = 'none';
      this.element.classList.add('cc-invisible');
    } else {
      this.element = this.appendMarkup(cookiePopup);
    }

    this.applyAutoDismiss();
    this.applyRevokeButton();

    if (this.options.autoOpen) {
      this.autoOpen();
    }
  }

  open() {
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

  close(showRevoke) {
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

  fadeIn() {
    const el = this.element;
    if (!this.hasTransition || !el) return; // This should always be called AFTER fadeOut (which is governed by the 'transitionend' event).
    // 'transitionend' isn't all that reliable, so, if we try and fadeIn before 'transitionend' has
    // has a chance to run, then we run it ourselves

    if (this.afterTransition) {
      this.afterFadeOut(el);
    }

    if (el.classList.contains('cc-invisible')) {
      el.style.display = '';

      if (this.options.static) {
        this.element.parentNode.style.maxHeight = this.element.clientHeight + 'px';
      }

      const fadeInTimeout = 20; // (ms) DO NOT MAKE THIS VALUE SMALLER. See below
      // Although most browsers can handle values less than 20ms, it should remain above this value.
      // This is because we are waiting for a "browser redraw" before we remove the 'cc-invisible' class.
      // If the class is remvoed before a redraw could happen, then the fadeIn effect WILL NOT work, and
      // the popup will appear from nothing. Therefore we MUST allow enough time for the browser to do
      // its thing. The actually difference between using 0 and 20 in a set timeout is neglegible anyway

      this.openingTimeout = setTimeout(() => this.afterFadeIn(el), fadeInTimeout);
    }
  }
  /**
   * This needs to be called after 'fadeIn'. This is the code that actually causes the fadeIn to work
   * There is a good reason why it's called in a timeout. Read 'fadeIn'
   */


  afterFadeIn(element) {
    this.openingTimeout = null;
    element.classList.remove('cc-invisible');
  }

  fadeOut() {
    if (!this.hasTransition || !this.element) return;

    if (this.openingTimeout) {
      clearTimeout(this.openingTimeout);
      this.afterFadeIn(this.element);
    }

    if (!this.element.classList.contains('cc-invisible')) {
      if (this.options.static) {
        this.element.parentNode.style.maxHeight = '';
      }

      this.afterTransition = () => this.afterFadeOut(this.element);

      this.element.addEventListener(this.transitionEnd, this.afterTransition);
      this.element.classList.add('cc-invisible');
    }
  }

  afterFadeOut(el) {
    el.style.display = 'none'; // after close and before open, the display should be none

    el.removeEventListener(this.transitionEnd, this.afterTransition);
    this.afterTransition = null;
  }

  isOpen() {
    return this.element && this.element.style.display === '' && (this.hasTransition ? !this.element.classList.contains('cc-invisible') : true);
  }

  toggleRevokeButton(show) {
    if (this.revokeBtn) this.revokeBtn.style.display = show ? '' : 'none';
  }

  revokeChoice(preventOpen) {
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


  hasAnswered() {
    return this.getStatuses().some(status => !!status);
  }
  /**
   * Indicates if the user has given consent to all of the categories
   * @return { array<boolean> } - true if consent has been given
   */


  hasConsented() {
    return this.getStatuses().map(status => status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"] || status === _constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
  } // opens the popup if no answer has been given


  autoOpen() {
    const hasAnswered = this.hasAnswered();

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


  setStatuses() {
    const {
      name,
      expiryDays,
      domain,
      path,
      secure,
      sameSite
    } = this.options.cookie;

    const updateCategoryStatus = (categoryName, status) => {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)) {
        const cookieName = name + '_' + categoryName;
        const chosenBefore = _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].indexOf(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(cookieName)) >= 0;
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(cookieName, status, expiryDays, domain, path, secure, sameSite);
        this.emit("statusChanged", cookieName, status, chosenBefore);
      } else {
        this.clearStatuses();
      }
    };

    if (arguments.length === 0) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, this.userCategories[category]));
    } else if (arguments.length === 1) {
      _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(category => updateCategoryStatus(category, arguments[0]));
    } else if (arguments.length > 1) {
      arguments.forEach((categoryStatus, index) => {
        updateCategoryStatus(this.userCategories[index], categoryStatus);
      });
    }
  }
  /**
   * Get all cookie categoies statuses
   * @return { array<string> } - cookie categories status in order of categories
   */


  getStatuses() {
    return _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].map(categoryName => Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCookie"])(this.options.cookie.name + '_' + categoryName));
  }
  /**
   * Clear all cookie categoies statuses
   */


  clearStatuses() {
    const {
      name,
      domain,
      path,
      secure,
      sameSite
    } = this.options.cookie;
    _constants__WEBPACK_IMPORTED_MODULE_2__["categories"].forEach(categoryName => {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setCookie"])(name + '_' + categoryName, '', -1, domain, path, secure, sameSite);
    });
  }

  canUseCookies() {
    if (!window.navigator.cookieEnabled || window.CookiesOK || window.navigator.CookiesOK) {
      return true;
    }

    const statusesValues = this.getStatuses();
    const matches = statusesValues.map((status, index) => ({
      [_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"])(status)
    }));
    const hasMatches = matches.filter(match => match[Object.keys(match)[0]]).length > 0;
    statusesValues.forEach((status, index) => this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]] === status ? status : this.userCategories[_constants__WEBPACK_IMPORTED_MODULE_2__["categories"][index]]);
    return hasMatches;
  } // top, bottom, left, right


  getPositionClasses() {
    return this.options.position.split('-').map(pos => 'cc-' + pos);
  }

  getPopupClasses() {
    const opts = this.options;
    let positionStyle = opts.position == 'top' || opts.position == 'bottom' ? 'banner' : 'floating';

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])() && opts.mobileForceFloat) {
      positionStyle = 'floating';
    }

    const classes = ['cc-' + positionStyle, // floating or banner
    'cc-type-' + opts.type, // add the compliance type
    'cc-theme-' + opts.theme // add the theme
    ];

    if (opts.static) {
      classes.push('cc-static');
    }

    classes.push.apply(classes, this.getPositionClasses()); // we only add extra styles if `palette` has been set to a valid value

    this.attachCustomPalette(this.options.palette); // if we override the palette, add the class that enables this

    if (this.customStyleSelector) {
      classes.push(this.customStyleSelector);
    }

    return classes;
  }

  getPopupInnerMarkup() {
    const interpolated = {};
    const opts = this.options; // removes link if showLink is false

    if (!opts.showLink) {
      opts.elements.link = '';
      opts.elements.messagelink = opts.elements.message;
    }

    Object.keys(opts.elements).forEach(prop => {
      interpolated[prop] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(opts.elements[prop], name => {
        const str = opts.content[name];
        return name && typeof str == 'string' && str.length ? str : '';
      });
    }); // checks if the type is valid and defaults to info if it's not

    let complianceType = opts.compliance[opts.type];

    if (!complianceType) {
      complianceType = opts.compliance.info;
    } // build the compliance types from the already interpolated `elements`


    interpolated.compliance = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(complianceType, name => interpolated[name]); // checks if the layout is valid and defaults to basic if it's not

    let layout = opts.layouts[opts.layout];

    if (!layout) {
      layout = opts.layouts.basic;
    }

    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["interpolateString"])(layout, match => interpolated[match]);
  }

  appendMarkup(markup) {
    const opts = this.options;
    const div = document.createElement('div');
    const cont = opts.container && opts.container.nodeType === 1 ? opts.container : document.body;
    div.innerHTML = markup;
    const el = div.children[0];
    el.style.display = 'none';

    if (el.classList.contains('cc-window') && this.hasTransition) {
      el.classList.add('cc-invisible');
    }

    el.addEventListener('click', event => this.handleButtonClick(event));
    el.querySelectorAll('.cc-btn [type="checkbox"]').forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.userCategories[checkbox.name] = checkbox.checked ? 'ALLOW' : 'DENY';
      });
      checkbox.addEventListener('click', event => event.stopPropagation());
    });
    el.querySelectorAll(".cc-info").forEach(showInfo => {
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

  handleButtonClick(event) {
    // returns the parent element with the specified class, or the original element - null if not found
    const btn = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["traverseDOMPath"])(event.target, 'cc-btn') || event.target;

    if (btn.classList.contains('cc-btn') && btn.classList.contains('cc-save')) {
      this.setStatuses();
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-btn')) {
      const matches = btn.className.match(new RegExp('\\bcc-(' + _constants__WEBPACK_IMPORTED_MODULE_2__["statuses"].map(str => str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')).join('|') + ')\\b'));
      const match = matches && matches[1] || false;

      if (match) {
        this.setStatuses(match);
        this.close(true);
      }

      return;
    }

    if (btn.classList.contains('cc-close')) {
      this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
      this.close(true);
      return;
    }

    if (btn.classList.contains('cc-revoke')) {
      this.revokeChoice();
      return;
    }
  }

  attachCustomPalette(palette) {
    const hashStr = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hash"])(JSON.stringify(palette));
    const selector = 'cc-color-override-' + hashStr;
    const isValid = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"])(palette);
    this.customStyleSelector = isValid ? selector : null;

    if (isValid) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_3__["addCustomStylesheet"])(hashStr, palette, '.' + selector);
    }

    return isValid;
  }

  getEventPath(event) {
    const path = event.composedPath ? event.composedPath() : function (arr, element) {
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

  applyAutoDismiss() {
    const {
      enabled,
      dismissOnTimeout: delay,
      dismissOnScroll: scrollRange,
      dismissOnLinkClick,
      dismissOnWindowClick,
      dismissOnKeyPress
    } = this.options;

    if (enabled) {
      if (typeof delay == 'number' && delay >= 0) {
        this.dismissTimeout = setTimeout(() => {
          this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
          this.close(true);
        }, Math.floor(delay));
      } else if (typeof scrollRange == 'number' && scrollRange >= 0) {
        this.onWindowScroll = () => {
          if (window.pageYOffset > Math.floor(scrollRange)) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('scroll', this.onWindowScroll, {
              passive: true
            });
            this.onWindowScroll = null;
          }
        };

        window.addEventListener('scroll', this.onWindowScroll, {
          passive: true
        });
      } else if (dismissOnWindowClick) {
        this.onWindowClick = evt => {
          if (!getEventPath(evt).some(element => this.options.ignoreClicksFrom.some(ignoredClick => element.classList && element.classList.contains(ignoredClick)))) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onWindowClick);
            window.removeEventListener('touchend', this.onWindowClick);
            this.onWindowClick = null;
          }
        };

        window.addEventListener('click', this.onWindowClick);
        window.addEventListener('touchend', this.onWindowClick);
      } else if (dismissOnLinkClick) {
        this.onLinkClick = evt => {
          if (getEventPath(evt).some(elem => typeof elem.tagName !== 'undefined' && elem.tagName === 'A')) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
            window.removeEventListener('click', this.onLinkClick);
            this.onLinkClick = null;
          }
        };

        window.addEventListener('click', this.onLinkClick);
      } else if (dismissOnKeyPress) {
        this.onKeyPress = event => {
          const {
            keyCode
          } = event;

          if (keyCode === 13) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusAllow"]);
            this.close(true);
          } else if (keyCode === 27) {
            this.setStatuses(_constants__WEBPACK_IMPORTED_MODULE_2__["statusDismiss"]);
            this.close(true);
          }
        };

        window.addEventListener('onkeypress', this.onKeyPress);
      }
    }
  }

  applyRevokeButton() {
    // revokable is true if advanced compliance is selected
    if (this.options.type != 'info' && this.options.regionalLaw == true) this.options.revokable = true; // animateRevokable false for mobile devices

    if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isMobile"])()) this.options.animateRevokable = false;

    if (this.options.revokable) {
      const classes = this.getPositionClasses();

      if (this.options.animateRevokable) {
        classes.push('cc-animate');
      }

      if (this.customStyleSelector) {
        classes.push(this.customStyleSelector);
      }

      if (this.options.theme) {
        classes.push('cc-theme-' + this.options.theme);
      }

      console.log(this.options.content.policy);
      const revokeBtn = this.options.revokeBtn.replace('{{classes}}', classes.join(' ')).replace('{{policy}}', this.options.content.policy);
      this.revokeBtn = this.appendMarkup(revokeBtn);
      const btn = this.revokeBtn;

      if (this.options.animateRevokable) {
        const onMouseMove = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["throttle"])(function (evt) {
          let active = false;
          const minY = 20;
          const maxY = window.innerHeight - 20;

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

  destroy() {
    console.warn("Destroying...");

    if (this.element) {
      this.element.remove();
    }

    if (this.revokeBtn) {
      this.revokeBtn.remove();
    }

    if (this.onWindowScroll) {
      window.removeEventListener('scroll', this.onWindowScroll);
    }

    if (this.onWindowClick) {
      window.removeEventListener('click', this.onWindowClick);
      window.removeEventListener('touchend', this.onWindowClick);
    }

    if (this.onLinkClick) {
      window.removeEventListener('click', this.onLinkClick);
    }

    if (this.onKeyPress) {
      window.addEventListener('onkeypress', this.onKeyPress);
    }
  }

}

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
  hasLaw: ['AT', 'AU', 'BE', 'BG', 'BR', 'CL', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL', 'ES', 'EU', 'FI', 'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IN', 'IT', 'JP', 'KR', 'LT', 'LU', 'LV', 'MT', 'NL', 'NO', 'NZ', 'PL', 'PT', 'RO', 'RU', 'SE', 'SK', 'TH', 'UK', 'US'],
  // countries that say that all cookie consent choices must be revokable (a user must be able too change their mind)
  revokable: ['CY', 'DE', 'DK', 'EE', 'ES', 'FR', 'HR', 'LT', 'LV', 'NL', 'NO', 'PT'],
  // countries that say that a person can only "consent" if the explicitly click on "I agree".
  // in these countries, consent cannot be implied via a timeout or by scrolling down the page
  explicitAction: ['ES', 'HR', 'IT', 'NO']
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


const toError = obj => new Error('Error [' + (obj.code || 'UNKNOWN') + ']: ' + obj.error);

/* harmony default export */ __webpack_exports__["default"] = ({
  // The default timeout is 5 seconds. This is mainly needed to catch JSONP requests that error.
  // Otherwise there is no easy way to catch JSONP errors. That means that if a JSONP fails, the
  // app will take `timeout` milliseconds to react to a JSONP network error.
  timeout: 5000,
  // the order that services will be attempted in
  services: ['freegeoip' //'ipinfo'

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
    ipinfo: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: 'https://ipinfo.io',
        headers: ['Accept: application/json'],
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
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
    ipinfodb: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: 'https://api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}',
        isScript: true,
        // this is JSONP, therefore we must set it to run as a script
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
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
    maxmind: function () {
      return {
        // This service responds with a JavaScript file which defines additional functionality. Once loaded, we must
        // make an additional AJAX call. Therefore we provide a `done` callback that can be called asynchronously
        url: 'https://js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js',
        isScript: true,
        // this service responds with a JavaScript file, so it must be run as a script
        callback: function (done) {
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
    },
    freegeoip: function () {
      return {
        // This service responds with JSON, so we simply need to parse it and return the country code
        url: 'https://freegeoip.app/json/',
        headers: ['Accept: application/json'],
        callback: function (done, response) {
          try {
            const json = JSON.parse(response);
            return typeof json === 'object' && json.hasOwnProperty('country_code') ? {
              code: json.country_code
            } : toError({
              error: 'Could not find a country code in the response'
            });
          } catch (err) {
            return toError({
              error: 'Invalid response (' + err + ')'
            });
          }
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
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ "./src/constants/index.js");



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
    domain: 'localhost',
    // The cookies expire date, specified in days (specify -1 for no expiry)
    expiryDays: 365,
    // If true the cookie will be created with the secure flag. Secure cookies will only be transmitted via HTTPS.
    secure: false,
    // Sets the "sameSite" attribute of the `cookieconsent_status` cookie
    // - Allowed attributes are "Lax", "Strict" and "None" ("None" is only allowed with the secure flag)
    sameSite: 'Lax'
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
    dismiss: `<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDismiss"]}">{{dismiss}}</a>`,
    allow: `<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusAllow"]}">{{allow}}</a>`,
    deny: `<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-${_constants_index_js__WEBPACK_IMPORTED_MODULE_0__["statusDeny"]}">{{deny}}</a>`,
    link: '<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',
    close: '<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>',
    categories: '<ul class="cc-categories">' + _constants_index_js__WEBPACK_IMPORTED_MODULE_0__["categories"].map((category, index) => `<li class="cc-category">
          <button class="cc-btn" tabindex="0"><input type="checkbox" name="${category}"/><span class="cc-btn-checkbox"></span>${category}</button>
          <button class="cc-btn cc-info" aria-label="${category} Definition Button" tabindex="${index + 1}">^</button>
          <div class="cc-tooltip">
            <p>This is the category for cookies that don't fit the '${category.toLowerCase()}' category.</p>
          </div>
        </li>`).join("") + '</ul>',
    save: `<button class="cc-btn cc-save">Save</button>` //compliance: compliance is also an element, but it is generated by the application, depending on `type` below

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
  static: false,
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
  // Be sure to use the classes `cc-btn` and `cc-ALLOW`, `cc-DENY` or `cc-DISMISS`. They enable the app to register click
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

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

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


const getScript = (url, callback, timeout) => {
  let timeoutIdx;
  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/' + (url.type || 'javascript');
  scriptTag.src = url.src || url;
  scriptTag.async = false;

  scriptTag.onreadystatechange = s.onload = function () {
    // this code handles two scenarios, whether called by onload or onreadystatechange
    const state = scriptTag.readyState;
    clearTimeout(timeoutIdx);

    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true;
      callback();
      scriptTag.onreadystatechange = scriptTag.onload = null;
    }
  };

  document.body.appendChild(scriptTag); // You can't catch JSONP Errors, because it's handled by the script tag
  // one way is to use a timeout

  timeoutIdx = setTimeout(function () {
    callback.done = true;
    callback();
    scriptTag.onreadystatechange = scriptTag.onload = null;
  }, timeout);
};
const makeAsyncRequest = (url, onComplete, timeout, postData, requestHeaders) => {
  const xhr = new (window.XMLHttpRequest || window.ActiveXObject)('MSXML2.XMLHTTP.3.0');
  xhr.open(postData ? 'POST' : 'GET', url, 1);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  if (Array.isArray(requestHeaders)) {
    for (let i = 0, l = requestHeaders.length; i < l; ++i) {
      const split = requestHeaders[i].split(':', 2);
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


const getCookie = name => {
  const value = ' ' + document.cookie;
  const parts = value.split(' ' + name + '=');
  return parts.length < 2 ? undefined : parts.pop().split(';').shift();
};
const setCookie = function (name, value, expiryDays, domain, path, secure, sameSite) {
  const exdate = new Date();
  exdate.setHours(exdate.getHours() + (typeof expiryDays !== "number" ? 365 : expiryDays) * 24);
  let cookie = name + '=' + value;
  cookie += '; Expires=' + exdate.toUTCString();
  cookie += '; Path=' + (path || '/');

  if (domain) {
    cookie += '; Domain=' + domain;
  }

  if (sameSite) {
    const sameSiteLowerCase = sameSite.toLowerCase();

    if (['lax', 'strict', 'none'].includes(sameSiteLowerCase)) {
      cookie += '; SameSite=' + sameSite;

      if (sameSiteLowerCase === 'none' && !secure) {
        secure = true;
      }
    }
  }

  if (secure) {
    cookie += '; Secure';
  }

  document.cookie = cookie;
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
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");



const traverseDOMPath = (elem, className) => !elem || !elem.parentNode ? null : elem.classList.contains(className) ? elem : traverseDOMPath(elem.parentNode, className);
const addCustomStylesheet = (id, palette, prefix) => {
  const colorStyles = {};
  const {
    popup,
    button,
    highlight,
    saveButton
  } = palette; // needs background colour, text and link will be set to black/white if not specified

  if (popup) {
    // assumes popup.background is set
    popup.text = popup.text ? popup.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(popup.background);
    popup.link = popup.link ? popup.link : popup.text;
    colorStyles[prefix + ' .cc-tooltip, ' + prefix + ' .cc-tooltip:after'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-window'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + '.cc-revoke'] = ['color: ' + popup.text, 'background-color: ' + popup.background];
    colorStyles[prefix + ' .cc-link,' + prefix + ' .cc-link:active,' + prefix + ' .cc-link:visited'] = ['color: ' + popup.link];

    if (button) {
      // assumes button.background is set
      button.text = button.text ? button.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(button.background);
      button.border = button.border ? button.border : 'transparent';
      colorStyles[prefix + ' .cc-btn'] = ['color: ' + button.text, 'border-color: ' + button.border, 'background-color: ' + button.background];

      if (button.padding) {
        colorStyles[prefix + ' .cc-btn'].push('padding: ' + button.padding);
      }

      if (button.background != 'transparent') {
        colorStyles[prefix + ' .cc-btn:hover, ' + prefix + ' .cc-btn:focus'] = ['background-color: ' + (button.hover || Object(_style__WEBPACK_IMPORTED_MODULE_0__["getHoverColor"])(button.background))];
      }

      if (highlight) {
        //assumes highlight.background is set
        highlight.text = highlight.text ? highlight.text : Object(_style__WEBPACK_IMPORTED_MODULE_0__["getContrast"])(highlight.background);
        highlight.border = highlight.border ? highlight.border : 'transparent';
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + highlight.text, 'border-color: ' + highlight.border, 'background-color: ' + highlight.background];
      } else {
        // sets highlight text color to popup text. background and border are transparent by default.
        colorStyles[prefix + ' .cc-highlight .cc-btn:first-child'] = ['color: ' + popup.text];
      }
    }

    if (saveButton) {
      colorStyles[`${prefix} .cc-btn.cc-save`] = ['color: ' + saveButton.text, 'border-color: ' + saveButton.border, 'background-color: ' + saveButton.background];
    }
  } // this will be interpretted as CSS. the key is the selector, and each array element is a rule


  const style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  Object.entries(colorStyles).forEach(([prop, value], index) => style.sheet.insertRule(`${prop}{${value.join(';')}}`, index));
  return style;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: getCookie, setCookie, interpolateString, throttle, hash, normalizeHex, getContrast, getLuminance, getHoverColor, traverseDOMPath, addCustomStylesheet, isValidStatus, isPlainObject, isMobile, getScript, makeAsyncRequest, mergeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return interpolateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony import */ var _cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie */ "./src/utils/cookie.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/utils/style.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ "./src/utils/validation.js");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./async */ "./src/utils/async.js");



const getCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["getCookie"];
const setCookie = _cookie__WEBPACK_IMPORTED_MODULE_0__["setCookie"];
const interpolateString = (str, callback) => str.replace(/{{([a-z][a-z0-9\-_]*)}}/gi, (matches, replaced) => callback(replaced) || ''); // only used for throttling the 'mousemove' event (used for animating the revoke button when `animateRevokable` is true)

const throttle = (callback, limit) => {
  let wait = false;
  return function () {
    if (!wait) {
      callback(...arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}; // only used for hashing json objects (used for hash mapping palette objects, used when custom colours are passed through JavaScript)

const hash = str => {
  let hashNum = 0,
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

const normalizeHex = _style__WEBPACK_IMPORTED_MODULE_1__["normalizeHex"];
const getContrast = _style__WEBPACK_IMPORTED_MODULE_1__["getContrast"];
const getLuminance = _style__WEBPACK_IMPORTED_MODULE_1__["getLuminance"];
const getHoverColor = _style__WEBPACK_IMPORTED_MODULE_1__["getHoverColor"];

const traverseDOMPath = _dom__WEBPACK_IMPORTED_MODULE_2__["traverseDOMPath"];
const addCustomStylesheet = _dom__WEBPACK_IMPORTED_MODULE_2__["addCustomStylesheet"];

const isValidStatus = _validation__WEBPACK_IMPORTED_MODULE_3__["isValidStatus"];
const isPlainObject = _validation__WEBPACK_IMPORTED_MODULE_3__["isPlainObject"];
const isMobile = _validation__WEBPACK_IMPORTED_MODULE_3__["isMobile"];

const getScript = _async__WEBPACK_IMPORTED_MODULE_4__["getScript"];
const makeAsyncRequest = _async__WEBPACK_IMPORTED_MODULE_4__["makeAsyncRequest"];

const loopProperties = overwrites => (obj, [key, value]) => {
  if (value instanceof Object && !(value instanceof Array)) {
    if (overwrites[key] instanceof Object && !(overwrites[key] instanceof Array)) {
      obj[key] = Object.entries(value).reduce(loopProperties(overwrites[key]), {});
    } else {
      obj[key] = value;
    }
  } else {
    if (overwrites.hasOwnProperty(key)) {
      obj[key] = overwrites[key];
    } else {
      obj[key] = value;
    }
  }

  return obj;
};

const mergeOptions = (defaults, overwrites) => Object.entries(defaults).reduce(loopProperties(overwrites), {});

/***/ }),

/***/ "./src/utils/style.js":
/*!****************************!*\
  !*** ./src/utils/style.js ***!
  \****************************/
/*! exports provided: normalizeHex, getContrast, getLuminance, getHoverColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoverColor", function() { return getHoverColor; });


const normalizeHex = hex => hex[0] == '#' ? hex.substr(1) : hex.length == 3 ? hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] : hex; // used to get text colors if not set

const getContrast = hex => {
  hex = normalizeHex(hex);
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
}; // used to change color on highlight

const getLuminance = hex => {
  const num = parseInt(normalizeHex(hex), 16),
        amt = 38,
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00ff) + amt,
        G = (num & 0x0000ff) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
};
const getHoverColor = hex => {
  hex = normalizeHex(hex); // for black buttons

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants/index.js");



/**
 * Checks if a status is in the constants list
 * @param { string } status - Status String to
 * @return { boolean } - if status is valid
 */

const isValidStatus = status => _constants__WEBPACK_IMPORTED_MODULE_0__["statuses"].includes(status);
const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); // The code "typeof obj === 'object' && obj !== null" allows Array objects

const isPlainObject = obj => typeof obj === 'object' && obj !== null && obj.constructor == Object;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvQmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0Nvb2tpZUNvbnNlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9MZWdhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0xvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbGVnYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvbG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/MTRkYyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvYXN5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsic3RhdHVzZXMiLCJzdGF0dXNEZW55Iiwic3RhdHVzQWxsb3ciLCJzdGF0dXNEaXNtaXNzIiwiY2F0ZWdvcmllcyIsImV4cG9ydHMiLCJtb2R1bGUiLCJDb29raWVDb25zZW50Iiwid2luZG93IiwiZW1pdHRlciIsIkV2ZW50RW1pdHRlciIsIkJhc2UiLCJjb25zdHJ1Y3RvciIsImRlZmF1bHRPcHRpb25zIiwib3B0aW9ucyIsIm1lcmdlT3B0aW9ucyIsIm9uIiwiYmluZCIsImVtaXQiLCJhbnN3ZXJzIiwibWFwIiwiY2F0ZWdvcnkiLCJjb29raWVOYW1lIiwiY29va2llIiwibmFtZSIsImFuc3dlciIsImdldENvb2tpZSIsImlzVmFsaWRTdGF0dXMiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJvYmoiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImxlZ2FsIiwiY291bnRyeUNvZGUiLCJpbml0aWFsaXphdGlvbkNvbXBsZXRlIiwiY29kZSIsImxvY2F0aW9uIiwiTG9jYXRpb24iLCJsb2NhdGUiLCJpbml0aWFsaXphdGlvbkVycm9yIiwicmVzdWx0IiwiTGVnYWwiLCJhcHBseUxhdyIsInBvcHVwIiwiUG9wdXAiLCJlcnJvciIsImdldENvdW50cnlMYXdzIiwiZ2V0IiwiaXNPcGVuIiwiY2xvc2UiLCJyZXZva2VDaG9pY2UiLCJvcGVuIiwidG9nZ2xlUmV2b2tlQnV0dG9uIiwiYm9vbCIsInNldFN0YXR1c2VzIiwic3RhdHVzIiwiY2xlYXJTdGF0dXNlcyIsImRlc3Ryb3kiLCJyZWR1Y2UiLCJkZWZpbmVQcm9wZXJ0eSIsInNldCIsImVudW1lcmFibGUiLCJ3cml0ZWFibGUiLCJjb25maWd1cmFibGUiLCJoYXNMYXciLCJpbmNsdWRlcyIsInJldm9rYWJsZSIsImV4cGxpY2l0QWN0aW9uIiwiY291bnRyeSIsImVuYWJsZWQiLCJyZWdpb25hbExhdyIsImRpc21pc3NPblNjcm9sbCIsImRpc21pc3NPblRpbWVvdXQiLCJjdXJyZW50U2VydmljZUluZGV4IiwiZ2V0TmV4dFNlcnZpY2UiLCJzZXJ2aWNlIiwiZ2V0U2VydmljZUJ5SWR4Iiwic2VydmljZXMiLCJpZHgiLCJzZXJ2aWNlT3B0aW9uIiwiZHluYW1pY09wdHMiLCJhc3NpZ24iLCJzZXJ2aWNlRGVmaW5pdGlvbnMiLCJpc1BsYWluT2JqZWN0IiwiY29tcGxldGUiLCJFcnJvciIsImNhbGxiYWNrQ29tcGxldGUiLCJjYWxsYmFja0Vycm9yIiwicnVuU2VydmljZSIsInJ1bk5leHRTZXJ2aWNlT25FcnJvciIsInNldHVwVXJsIiwic2VydmljZU9wdHMiLCJnZXRDdXJyZW50U2VydmljZU9wdHMiLCJ1cmwiLCJyZXBsYWNlIiwiXyIsInBhcmFtIiwidGVtcE5hbWUiLCJEYXRlIiwibm93IiwicmVzIiwiX19KU09OUF9EQVRBIiwiSlNPTiIsInN0cmluZ2lmeSIsImludGVycG9sYXRlVXJsIiwiY2FsbGJhY2siLCJyZXF1ZXN0RnVuY3Rpb24iLCJpc1NjcmlwdCIsImdldFNjcmlwdCIsIm1ha2VBc3luY1JlcXVlc3QiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJydW5TZXJ2aWNlQ2FsbGJhY2siLCJjYWxsIiwidGltZW91dCIsImRhdGEiLCJoZWFkZXJzIiwic2VydmljZVJlc3VsdEhhbmRsZXIiLCJhc3luY1Jlc3VsdCIsIm9uU2VydmljZVJlc3VsdCIsImVyciIsImxvZ0Vycm9yIiwibmV4dFNlcnZpY2UiLCJjb21wbGV0ZVNlcnZpY2UiLCJ2YWwiLCJmbiIsImNvbnNvbGUiLCJ3YXJuIiwidXNlckNhdGVnb3JpZXMiLCJVTkNBVEVHT1JJWkVEIiwiRVNTRU5USUFMIiwiUEVSU09OQUxJWkFUSU9OIiwiQU5BTFlUSUNTIiwiTUFSS0VUSU5HIiwiY3VzdG9tU3R5bGVzIiwiaGFzVHJhbnNpdGlvbiIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnMiLCJ0IiwiT1QiLCJtc1QiLCJNb3pUIiwiV2Via2l0VCIsInByZWZpeCIsImhhc093blByb3BlcnR5Iiwic3R5bGUiLCJjYW5Vc2VDb29raWVzIiwiYmxhY2tsaXN0UGFnZSIsInBhdGhuYW1lIiwid2hpdGVsaXN0UGFnZSIsImNvb2tpZVBvcHVwIiwiZ2V0UG9wdXBDbGFzc2VzIiwiam9pbiIsImdldFBvcHVwSW5uZXJNYXJrdXAiLCJjdXN0b21IVE1MIiwib3ZlcnJpZGVIVE1MIiwic3RhdGljIiwid3JhcHBlciIsImFwcGVuZE1hcmt1cCIsImRpc3BsYXkiLCJlbGVtZW50IiwiZmlyc3RDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGx5QXV0b0Rpc21pc3MiLCJhcHBseVJldm9rZUJ1dHRvbiIsImF1dG9PcGVuIiwiZmFkZUluIiwic2hvd1Jldm9rZSIsImZhZGVPdXQiLCJhZnRlclRyYW5zaXRpb24iLCJhZnRlckZhZGVPdXQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJtYXhIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmYWRlSW5UaW1lb3V0Iiwib3BlbmluZ1RpbWVvdXQiLCJhZnRlckZhZGVJbiIsInJlbW92ZSIsImNsZWFyVGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0cmFuc2l0aW9uRW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3ciLCJyZXZva2VCdG4iLCJwcmV2ZW50T3BlbiIsImhhc0Fuc3dlcmVkIiwiZ2V0U3RhdHVzZXMiLCJzb21lIiwiaGFzQ29uc2VudGVkIiwiZXhwaXJ5RGF5cyIsImRvbWFpbiIsInBhdGgiLCJzZWN1cmUiLCJzYW1lU2l0ZSIsInVwZGF0ZUNhdGVnb3J5U3RhdHVzIiwiY2F0ZWdvcnlOYW1lIiwiY2hvc2VuQmVmb3JlIiwiaW5kZXhPZiIsInNldENvb2tpZSIsImFyZ3VtZW50cyIsImZvckVhY2giLCJjYXRlZ29yeVN0YXR1cyIsImluZGV4IiwibmF2aWdhdG9yIiwiY29va2llRW5hYmxlZCIsIkNvb2tpZXNPSyIsInN0YXR1c2VzVmFsdWVzIiwibWF0Y2hlcyIsImhhc01hdGNoZXMiLCJtYXRjaCIsImdldFBvc2l0aW9uQ2xhc3NlcyIsInBvc2l0aW9uIiwic3BsaXQiLCJwb3MiLCJvcHRzIiwicG9zaXRpb25TdHlsZSIsImlzTW9iaWxlIiwibW9iaWxlRm9yY2VGbG9hdCIsImNsYXNzZXMiLCJ0eXBlIiwidGhlbWUiLCJwdXNoIiwiYXBwbHkiLCJhdHRhY2hDdXN0b21QYWxldHRlIiwicGFsZXR0ZSIsImN1c3RvbVN0eWxlU2VsZWN0b3IiLCJpbnRlcnBvbGF0ZWQiLCJzaG93TGluayIsImVsZW1lbnRzIiwibGluayIsIm1lc3NhZ2VsaW5rIiwibWVzc2FnZSIsInByb3AiLCJpbnRlcnBvbGF0ZVN0cmluZyIsInN0ciIsImNvbnRlbnQiLCJjb21wbGlhbmNlVHlwZSIsImNvbXBsaWFuY2UiLCJpbmZvIiwibGF5b3V0IiwibGF5b3V0cyIsImJhc2ljIiwibWFya3VwIiwiZGl2IiwiY29udCIsImNvbnRhaW5lciIsIm5vZGVUeXBlIiwiYm9keSIsImlubmVySFRNTCIsImNoaWxkcmVuIiwiZXZlbnQiLCJoYW5kbGVCdXR0b25DbGljayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGVja2JveCIsImNoZWNrZWQiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93SW5mbyIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicHJldmVudERlZmF1bHQiLCJhdXRvQXR0YWNoIiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJidG4iLCJ0cmF2ZXJzZURPTVBhdGgiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJSZWdFeHAiLCJoYXNoU3RyIiwiaGFzaCIsInNlbGVjdG9yIiwiaXNWYWxpZCIsImFkZEN1c3RvbVN0eWxlc2hlZXQiLCJnZXRFdmVudFBhdGgiLCJjb21wb3NlZFBhdGgiLCJhcnIiLCJkZWxheSIsInNjcm9sbFJhbmdlIiwiZGlzbWlzc09uTGlua0NsaWNrIiwiZGlzbWlzc09uV2luZG93Q2xpY2siLCJkaXNtaXNzT25LZXlQcmVzcyIsImRpc21pc3NUaW1lb3V0IiwiTWF0aCIsImZsb29yIiwib25XaW5kb3dTY3JvbGwiLCJwYWdlWU9mZnNldCIsInBhc3NpdmUiLCJvbldpbmRvd0NsaWNrIiwiZXZ0IiwiaWdub3JlQ2xpY2tzRnJvbSIsImlnbm9yZWRDbGljayIsIm9uTGlua0NsaWNrIiwiZWxlbSIsInRhZ05hbWUiLCJvbktleVByZXNzIiwia2V5Q29kZSIsImFuaW1hdGVSZXZva2FibGUiLCJsb2ciLCJwb2xpY3kiLCJvbk1vdXNlTW92ZSIsInRocm90dGxlIiwiYWN0aXZlIiwibWluWSIsIm1heFkiLCJpbm5lckhlaWdodCIsImNsaWVudFkiLCJ0b0Vycm9yIiwiaXBpbmZvIiwiZG9uZSIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlIiwiaXBpbmZvZGIiLCJzdGF0dXNDb2RlIiwic3RhdHVzTWVzc2FnZSIsIm1heG1pbmQiLCJnZW9pcDIiLCJpc29fY29kZSIsImZyZWVnZW9pcCIsImNvdW50cnlfY29kZSIsImhlYWRlciIsImRpc21pc3MiLCJhbGxvdyIsImRlbnkiLCJocmVmIiwidG9Mb3dlckNhc2UiLCJzYXZlIiwibW9kYWwiLCJ0aW1lb3V0SWR4Iiwic2NyaXB0VGFnIiwic3JjIiwiYXN5bmMiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzIiwib25sb2FkIiwic3RhdGUiLCJyZWFkeVN0YXRlIiwidGVzdCIsIm9uQ29tcGxldGUiLCJwb3N0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiWE1MSHR0cFJlcXVlc3QiLCJBY3RpdmVYT2JqZWN0Iiwic2V0UmVxdWVzdEhlYWRlciIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsIiwic2VuZCIsInZhbHVlIiwicGFydHMiLCJwb3AiLCJzaGlmdCIsImV4ZGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJ0b1VUQ1N0cmluZyIsInNhbWVTaXRlTG93ZXJDYXNlIiwiaWQiLCJjb2xvclN0eWxlcyIsImJ1dHRvbiIsImhpZ2hsaWdodCIsInNhdmVCdXR0b24iLCJ0ZXh0IiwiZ2V0Q29udHJhc3QiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicGFkZGluZyIsImhvdmVyIiwiZ2V0SG92ZXJDb2xvciIsImhlYWQiLCJlbnRyaWVzIiwic2hlZXQiLCJpbnNlcnRSdWxlIiwicmVwbGFjZWQiLCJsaW1pdCIsIndhaXQiLCJoYXNoTnVtIiwiY2hyIiwibGVuIiwiY2hhckNvZGVBdCIsIm5vcm1hbGl6ZUhleCIsImdldEx1bWluYW5jZSIsImRvbSIsInZhbGlkYXRpb24iLCJhc3luY0ZucyIsImxvb3BQcm9wZXJ0aWVzIiwib3ZlcndyaXRlcyIsImtleSIsImRlZmF1bHRzIiwiaGV4Iiwic3Vic3RyIiwiciIsInBhcnNlSW50IiwiZyIsImIiLCJ5aXEiLCJudW0iLCJhbXQiLCJSIiwiQiIsIkciLCJ0b1N0cmluZyIsInNsaWNlIiwidXNlckFnZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQzRGO0FBQzVGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxlQUFlLGVBQWUs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O0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QztBQUVBLE1BQU1xSyxRQUFRLEdBQUcsTUFDdEIsaUVBQWlFeUgsSUFBakUsQ0FBdUV0SSxTQUFTLENBQUN5TSxTQUFqRixDQURLLEMsQ0FHUDs7QUFDTyxNQUFNclUsYUFBYSxHQUFHeEQsR0FBRyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFmLElBQTJCQSxHQUFHLEtBQUssSUFBbkMsSUFBMkNBLEdBQUcsQ0FBQ2xCLFdBQUosSUFBbUJtQixNQUEzRixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7IH1cXG5cXG4uY2Mtd2luZG93LmNjLWludmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwOyB9XFxuXFxuLyogb25seSBhbmltYXRlIGlmaGFzIGNsYXNzICdjYy1hbmltYXRlJyAqL1xcbi5jYy1hbmltYXRlLmNjLXJldm9rZSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1vLXRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTsgfVxcblxcbi5jYy1hbmltYXRlLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJlbSk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLXRvcCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG5cXG4uY2MtcmV2b2tlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcblxcbi5jYy1ncm93ZXIge1xcbiAgLyogSW5pdGlhbGx5IHdlIGRvbid0IHdhbnQgYW55IGhlaWdodCwgYW5kIHdlIHdhbnQgdGhlIGNvbnRlbnRzIHRvIGJlIGhpZGRlbiAqL1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAvKiBTZXQgb3VyIHRyYW5zaXRpb25zIHVwLiAqL1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1vei10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW1zLXRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxuICAtby10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxczsgfVxcblxcbi8qIHRoZSBwb3B1cCB3aW5kb3cgKi9cXG4uY2Mtd2luZG93LFxcbi5jYy1yZXZva2Uge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBleGNsdWRlIHBhZGRpbmcgd2hlbiBkZWFsaW5nIHdpdGggd2lkdGggKi9cXG4gIC8qIFN5c3RlbSBmb250IHN0YWNrICovXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAvKiBieSBzZXR0aW5nIHRoZSBiYXNlIGZvbnQgaGVyZSwgd2UgY2FuIHNpemUgdGhlIHJlc3Qgb2YgdGhlIHBvcHVwIHVzaW5nIENTUyBgZW1gICovXFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICAvKiB0aGUgZm9sbG93aW5nIGFyZSByYW5kb20gdW5qdXN0aWZpZWQgc3R5bGVzIC0ganVzdCBiZWNhdXNlIC0gc2hvdWxkIHByb2JhYmx5IGJlIHJlbW92ZWQgKi9cXG4gIHotaW5kZXg6IDk5OTg7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXN0YXRpYyB7XFxuICBwb3NpdGlvbjogc3RhdGljOyB9XFxuXFxuLyogMiBiYXNpYyB0eXBlcyBvZiB3aW5kb3cgLSBmbG9hdGluZyAvIGJhbm5lciAqL1xcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWF4LXdpZHRoOiAyNGVtO1xcbiAgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2Mtd2luZG93LmNjLWJhbm5lciB7XFxuICBwYWRkaW5nOiAxZW0gMS44ZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHBhZGRpbmc6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxcblxcbi5jYy1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4vKiBjbGlja2FibGUgdGhpbmdzICovXFxuLmNjLWJ0bixcXG4uY2MtbGluayxcXG4uY2MtY2xvc2UsXFxuLmNjLXJldm9rZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuXFxuLmNjLWxpbms6aG92ZXIge1xcbiAgb3BhY2l0eTogMTsgfVxcblxcbi5jYy1saW5rOmFjdGl2ZSxcXG4uY2MtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiBpbml0aWFsOyB9XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQ6aG92ZXIsXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpemVzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1OyB9XFxuXFxuLmNjLWNsb3NlOmhvdmVyLFxcbi5jYy1jbG9zZTpmb2N1cyB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTsgfVxcblxcbi5jYy1yZXZva2UuY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDNlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNWVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNWVtOyB9XFxuXFxuLmNjLXJldm9rZS5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDNlbTtcXG4gIHJpZ2h0OiB1bnNldDsgfVxcblxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0OyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRkxPQVRJTkcgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiB0aGVzZSBjbGFzc2VzIHBvc2l0aW9uIHRoZSBmbG9hdGluZyBlbGVtZW50ICovXFxuLmNjLXRvcCB7XFxuICB0b3A6IDFlbTsgfVxcblxcbi5jYy1sZWZ0IHtcXG4gIGxlZnQ6IDFlbTsgfVxcblxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtOyB9XFxuXFxuLmNjLWJvdHRvbSB7XFxuICBib3R0b206IDFlbTsgfVxcblxcbi8qIGxpbmtzIHRoYXQgYXJlIGRpcmVjdCBkZWNlbmRhbnRzIHNob3VsZCBiZSBkaXNwbGF5ZWQgYXMgYmxvY2sgKi9cXG4uY2MtZmxvYXRpbmcgPiAuY2MtbGluayB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlIHtcXG4gIGZsZXg6IDEgMCBhdXRvOyB9XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQkFOTkVSICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLmNjLXdpbmRvdy5jYy1iYW5uZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDsgfVxcblxcbi5jYy1iYW5uZXIuY2MtYm90dG9tIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi5jYy1iYW5uZXIgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMWVtOyB9XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYy1mbG9hdGluZyAuY2MtY29tcGxpYW5jZSA+IC5jYy1idG4ge1xcbiAgZmxleDogMTsgfVxcblxcbi5jYy1idG4gKyAuY2MtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTsgfVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1idG4ge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmNjLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yeSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAyMnB4KTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWJ0bjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSkge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjZweDsgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm8ge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtdmFyaWFudDogYWxsLXNtYWxsLWNhcHM7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLWluZm86Zm9jdXMgKyAuY2MtdG9vbHRpcCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5jYy1jYXRlZ29yaWVzIC5jYy10b29sdGlwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGJvdHRvbTogNDZweDtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXI6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNyk7IH1cXG4gICAgLmNjLWNhdGVnb3JpZXMgLmNjLXRvb2x0aXA6YWZ0ZXIge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoOiAxMHB4O1xcbiAgICAgIGhlaWdodDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbTogLTdweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIGJveC1zaGFkb3c6IDJweCAxcHggMXB4IHJnYmEoMjAwLCAyMDAsIDIwMCwgMC41KTsgfVxcbiAgICAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCBwIHtcXG4gICAgICBtYXJnaW46IDA7IH1cXG5cXG5AbWVkaWEgcHJpbnQge1xcbiAgLmNjLXdpbmRvdyxcXG4gIC5jYy1yZXZva2Uge1xcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmNjLWJ0biB7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IH0gfVxcblxcbi8qIGRpbWVuc2lvbnMgZm9yICdpUGhvbmU2IFBsdXMnIGFuZCBsb3dlciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCksIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdy5jYy10b3Age1xcbiAgICB0b3A6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYm90dG9tIHtcXG4gICAgYm90dG9tOiAwOyB9XFxuICAuY2Mtd2luZG93LmNjLWJhbm5lciwgLmNjLXdpbmRvdy5jYy1mbG9hdGluZywgLmNjLXdpbmRvdy5jYy1yaWdodCwgLmNjLXdpbmRvdy5jYy1sZWZ0IHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7IH1cXG4gIC5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHVuc2V0OyB9XFxuICAgIC5jYy13aW5kb3cuY2MtYmFubmVyIC5jYy1jb21wbGlhbmNlIHtcXG4gICAgICBmbGV4OiAxIDEgYXV0bzsgfVxcbiAgICAuY2Mtd2luZG93LmNjLWJhbm5lciAuY2MtbWVzc2FnZSB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcbiAgLmNjLXdpbmRvdy5jYy1mbG9hdGluZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2Mtd2luZG93IC5jYy1tZXNzYWdlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yaWVzIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAuY2Mtd2luZG93IC5jYy1jYXRlZ29yeSB7XFxuICAgIG1hcmdpbjogNHB4IDA7IH1cXG4gICAgLmNjLXdpbmRvdyAuY2MtY2F0ZWdvcnkgLmNjLWJ0bjpub3QoLmNjLWluZm8pIHtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDE2cHgpO1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1NHB4KSB7XFxuICAuY2Mtd2luZG93LmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLXNhdmUge1xcbiAgICBtYXJnaW46IDhweCAwOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTBweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3JpZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAuY2MtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcnkge1xcbiAgICBtYXJnaW46IDRweCAwOyB9XFxuICAuZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4OyB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKSB7XFxuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gMTZweCk7IH0gfVxcblxcbi8qIENsYXNzaWMgKi9cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtY2xhc3NpYyB7XFxuICBwYWRkaW5nOiAxLjJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtY29tcGxpYW5jZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBmbGV4OiBub25lOyB9XFxuXFxuLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMTQwcHg7IH1cXG4gIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHRvcDogLTFweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgei1pbmRleDogMTsgfVxcbiAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveCB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgbGVmdDogNnB4O1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgLmNjLWJ0bi1jaGVja2JveDpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcXDFGNUY1XFxcIjsgfVxcbiAgICAuY2MtdGhlbWUtY2xhc3NpYyAuY2MtY2F0ZWdvcnkgLmNjLWJ0biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgLmNjLWJ0bi1jaGVja2JveDphZnRlciB7XFxuICAgICAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAtNHB4O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgZm9udC1zaXplOiAyLjNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuNSk7IH1cXG4gICAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy1idG4uY2MtaW5mbyB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtYnRuOmxhc3QtY2hpbGQge1xcbiAgICAgIG1pbi13aWR0aDogMDsgfVxcbiAgLmNjLXRoZW1lLWNsYXNzaWMgLmNjLWNhdGVnb3J5IC5jYy10b29sdGlwIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgIC5jYy10aGVtZS1jbGFzc2ljIC5jYy1jYXRlZ29yeSAuY2MtdG9vbHRpcDphZnRlciB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTsgfVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyAuY2MtYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcblxcbi8qIEVkZ2VsZXNzICovXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbjogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1idG4ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMC44ZW0gMS44ZW07XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07IH1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLWJ0biArIC5jYy1idG4ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuIHtcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgcGFkZGluZy1sZWZ0OiAyNnB4OyB9XFxuICAuY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtYnRuLmNjLWluZm8ge1xcbiAgICBwYWRkaW5nOiAwLjRlbSA0cHg7IH1cXG5cXG4uY2Mtd2luZG93LmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXR5cGUtY2F0ZWdvcmllcyAuY2MtY2F0ZWdvcmllcyAuY2MtdG9vbHRpcCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9hbmltYXRpb24uc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvbWVkaWEuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvdGhlbWVzL2NsYXNzaWMuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvdGhlbWVzL2VkZ2VsZXNzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBRVYsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsOEJBQThCO0VBQzlCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLFVBQVUsRUFBQTs7QUFHWiwwQ0FBQTtBQUNBO0VBQ0UscUNBQXFDO0VBQ3JDLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLDJCQUEyQixFQUFBOztBQUU3QjtFQUNFLDBCQUEwQixFQUFBOztBQUU1QjtFQUNFLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLDhFQUFBO0VBQ0EsYUFBYTtFQUNiLGdCQUFnQjtFQUVoQiw0QkFBQTtFQUNBLGlDQUFpQztFQUNqQyw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1Qix5QkFBeUIsRUFBQTs7QUNoRDNCLHFCQUFBO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixz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RUFDWCxvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFHTSxvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUE7RUFKeEI7SUFNUSxrQkFBa0IsRUFBQTs7QUFOMUI7RUFVTSxZQUFZLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNjLXdpbmRvdyB7XFxuICBvcGFjaXR5OiAxO1xcblxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZTtcXG4gIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XFxufVxcblxcbi5jYy13aW5kb3cuY2MtaW52aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi8qIG9ubHkgYW5pbWF0ZSBpZmhhcyBjbGFzcyAnY2MtYW5pbWF0ZScgKi9cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2Uge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIC1tb3otdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtbXMtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2U7XFxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcyBlYXNlO1xcbn1cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtdG9wIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcXG59XFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMmVtKTtcXG59XFxuLmNjLWFuaW1hdGUuY2MtcmV2b2tlLmNjLWFjdGl2ZS5jYy10b3Age1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG4uY2MtYW5pbWF0ZS5jYy1yZXZva2UuY2MtYWN0aXZlLmNjLWJvdHRvbSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcbi5jYy1yZXZva2U6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uY2MtZ3Jvd2VyIHtcXG4gIC8qIEluaXRpYWxseSB3ZSBkb24ndCB3YW50IGFueSBoZWlnaHQsIGFuZCB3ZSB3YW50IHRoZSBjb250ZW50cyB0byBiZSBoaWRkZW4gKi9cXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLyogU2V0IG91ciB0cmFuc2l0aW9ucyB1cC4gKi9cXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tb3otdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIC1tcy10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDFzO1xcbiAgLW8tdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXM7XFxufVxcblwiLFwiLyogdGhlIHBvcHVwIHdpbmRvdyAqL1xcbi5jYy13aW5kb3csXFxuLmNjLXJldm9rZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogZXhjbHVkZSBwYWRkaW5nIHdoZW4gZGVhbGluZyB3aXRoIHdpZHRoICovXFxuXFxuICAvKiBTeXN0ZW0gZm9udCBzdGFjayAqL1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmOztcXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogYnkgc2V0dGluZyB0aGUgYmFzZSBmb250IGhlcmUsIHdlIGNhbiBzaXplIHRoZSByZXN0IG9mIHRoZSBwb3B1cCB1c2luZyBDU1MgYGVtYCAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcblxcbiAgLyogdGhlIGZvbGxvd2luZyBhcmUgcmFuZG9tIHVuanVzdGlmaWVkIHN0eWxlcyAtIGp1c3QgYmVjYXVzZSAtIHNob3VsZCBwcm9iYWJseSBiZSByZW1vdmVkICovXFxuICB6LWluZGV4OiA5OTk4O1xcbn1cXG5cXG4uY2MtcmV2b2tlIHtcXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbi5jYy13aW5kb3cuY2Mtc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcblxcbi8qIDIgYmFzaWMgdHlwZXMgb2Ygd2luZG93IC0gZmxvYXRpbmcgLyBiYW5uZXIgKi9cXG4uY2Mtd2luZG93LmNjLWZsb2F0aW5nIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1heC13aWR0aDogMjRlbTsgLyogMWVtID09IDE2cHggdGhlcmVmb3JlIDI0ZW0gPT0gMzg0cHggKi9cXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIHBhZGRpbmc6IDFlbSAxLjhlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmNjLXJldm9rZSB7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuLmNjLXJldm9rZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmNjLWhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogY2xpY2thYmxlIHRoaW5ncyAqL1xcbi5jYy1idG4sXFxuLmNjLWxpbmssXFxuLmNjLWNsb3NlLFxcbi5jYy1yZXZva2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2MtbGluayB7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uY2MtbGluazpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uY2MtbGluazphY3RpdmUsXFxuLmNjLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogaW5pdGlhbDtcXG59XFxuXFxuLmNjLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDAuNGVtIDAuOGVtO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNjLWhpZ2hsaWdodCAuY2MtYnRuOmZpcnN0LWNoaWxkOmhvdmVyLFxcbi5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uY2MtY2xvc2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNWVtO1xcbiAgcmlnaHQ6IDAuNWVtO1xcbiAgZm9udC1zaXplOiAxLjZlbTtcXG4gIG9wYWNpdHk6IDAuOTtcXG5cXG4gIC8qIHNlZWluZyBhcyB0aGlzIGNvbnRhaW5zIHRleHQgYW5kIG5vdCBhbiBpbWFnZSwgdGhlIGVsZW1lbnQgdGFsbGVyIHRoYW4gaXQgaXMgd2lkZSAoYmVjYXVzZSBpdCBpcyB0ZXh0KSAqL1xcbiAgLyogIC0gd2Ugd2FudCBpdCB0byBiZSBhIHNxdWFyZSwgYmVjYXVzZSBpdCdzIGFjdGluZyBhcyBhbiBpY29uICovXFxuICAvKiAgLSBzZXR0aW5nIHRoZSBsaW5lIGhlaWdodCBub3JtYWxpemVzIHRoZSBoZWlnaHQgKi9cXG4gIGxpbmUtaGVpZ2h0OiAwLjc1O1xcbn1cXG4uY2MtY2xvc2U6aG92ZXIsXFxuLmNjLWNsb3NlOmZvY3VzIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLFwiLyogVGhpcyBmaWxlIHNob3VsZCBjb250YWluIHN0eWxlcyB0aGF0IG1vZGlmaWVzIHRoZSBwb3B1cCBsYXlvdXQuICovXFxuLyogQnkgbGF5b3V0LCB3ZSBtZWFuIHRoZSBwaHlzaWNhbCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudHMgb24gdGhlIHBvcHVwIHdpbmRvdywgYW5kIHRoZSBtYXJnaW4gLyBwYWRkaW5nIGFyb3VuZCB0aG9zZSBlbGVtZW50cy4gKi9cXG5cXG4uY2MtcmV2b2tlLmNjLXRvcCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAzZW07XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVlbTtcXG59XFxuLmNjLXJldm9rZS5jYy1ib3R0b20ge1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogM2VtO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41ZW07XFxufVxcbi5jYy1yZXZva2UuY2MtbGVmdCB7XFxuICBsZWZ0OiAzZW07XFxuICByaWdodDogdW5zZXQ7XFxufVxcbi5jYy1yZXZva2UuY2MtcmlnaHQge1xcbiAgcmlnaHQ6IDNlbTtcXG4gIGxlZnQ6IHVuc2V0O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBGTE9BVElORyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi8qIHRoZXNlIGNsYXNzZXMgcG9zaXRpb24gdGhlIGZsb2F0aW5nIGVsZW1lbnQgKi9cXG4uY2MtdG9wIHtcXG4gIHRvcDogMWVtO1xcbn1cXG4uY2MtbGVmdCB7XFxuICBsZWZ0OiAxZW07XFxufVxcbi5jYy1yaWdodCB7XFxuICByaWdodDogMWVtO1xcbn1cXG4uY2MtYm90dG9tIHtcXG4gIGJvdHRvbTogMWVtO1xcbn1cXG5cXG4vKiBsaW5rcyB0aGF0IGFyZSBkaXJlY3QgZGVjZW5kYW50cyBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGJsb2NrICovXFxuLmNjLWZsb2F0aW5nID4gLmNjLWxpbmsge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uY2MtZmxvYXRpbmcgLmNjLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5jYy13aW5kb3cuY2MtZmxvYXRpbmcgLmNjLWNvbXBsaWFuY2Uge1xcbiAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEJBTk5FUiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbi5jYy13aW5kb3cuY2MtYmFubmVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYy1iYW5uZXIuY2MtdG9wIHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuLmNjLWJhbm5lci5jYy1ib3R0b20ge1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uY2MtYmFubmVyIC5jYy1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuXFxuLyogQ09NUExJQU5DRSBCT1ggKi9cXG5cXG4uY2MtY29tcGxpYW5jZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNjLWZsb2F0aW5nIC5jYy1jb21wbGlhbmNlID4gLmNjLWJ0biB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMC41ZW07XFxufVxcblxcbi8qIENhdGVnb3JpZXMgTGF5b3V0ICovXFxuLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMge1xcbiAgZGlzcGxheSAgICAgICA6IGlubGluZS1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93ICAgICAgOiB2aXNpYmxlO1xcbiAgLmZvcm17XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgfVxcbiAgLmNjLWJ0biB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgJi5jYy1zYXZlIHtcXG4gICAgICBtYXJnaW4gICAgICAgIDogMDtcXG4gICAgICBkaXNwbGF5ICAgICAgIDogaW5saW5lLWJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcbi5jYy1jYXRlZ29yaWVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgLmNjLWNhdGVnb3J5e1xcbiAgICBkaXNwbGF5ICA6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luICAgOiAwIDJweDtcXG4gICAgcG9zaXRpb24gOiByZWxhdGl2ZTtcXG4gIH1cXG4gIC5jYy1idG4ge1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIG91dGxpbmUgICAgIDogbm9uZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGlucHV0W3R5cGU9Y2hlY2tib3hde1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIGhlaWdodDogMjZweDtcXG4gICAgICB3aWR0aDogY2FsYyggMTAwJSAtIDIycHggKTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDJweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgJjpub3QoLmNjLWluZm8pOm5vdCguY2Mtc2F2ZSl7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcbiAgICB9XFxuICB9XFxuICAuY2MtaW5mbyB7XFxuICAgIGJvcmRlci1sZWZ0IDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nICAgICA6IDRweDtcXG4gICAgZm9udC12YXJpYW50OiBhbGwtc21hbGwtY2FwcztcXG4gICAgJjpmb2N1cyArIC5jYy10b29sdGlwe1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxuICAuY2MtdG9vbHRpcHtcXG4gICAgZGlzcGxheSAgICAgIDogbm9uZTtcXG4gICAgcG9zaXRpb24gICAgIDogYWJzb2x1dGU7XFxuICAgIHotaW5kZXggICAgICA6IDM7XFxuICAgIHdpZHRoICAgICAgICA6IDE5MHB4O1xcbiAgICBib3R0b20gICAgICAgOiA0NnB4O1xcbiAgICBwYWRkaW5nICAgICAgOiA4cHg7XFxuICAgIGJvcmRlciAgICAgICA6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCByZ2JhKCAxNTAsIDE1MCwgMTUwLCAuNyApO1xcbiAgICAmOmFmdGVye1xcbiAgICAgIGNvbnRlbnQgICA6IFxcXCJcXFwiO1xcbiAgICAgIHdpZHRoICAgICA6IDEwcHg7XFxuICAgICAgaGVpZ2h0ICAgIDogMTBweDtcXG4gICAgICB0cmFuc2Zvcm0gOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgIHBvc2l0aW9uICA6IGFic29sdXRlO1xcbiAgICAgIGJvdHRvbSAgICA6IC03cHg7XFxuICAgICAgbGVmdCAgICAgIDogMTBweDtcXG4gICAgICBib3gtc2hhZG93OiAycHggMXB4IDFweCByZ2JhKCAyMDAsIDIwMCwgMjAwLCAuNSApO1xcbiAgICB9XFxuICAgIHAge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbiAgfVxcbn1cIixcIkBtZWRpYSBwcmludCB7XFxuICAuY2Mtd2luZG93LFxcbiAgLmNjLXJldm9rZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2MtYnRuIHtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIH1cXG59XFxuXFxuLyogZGltZW5zaW9ucyBmb3IgJ2lQaG9uZTYgUGx1cycgYW5kIGxvd2VyICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSxcXG4gIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcbiAgLmNjLXdpbmRvdyB7XFxuICAgICYuY2MtdG9wIHtcXG4gICAgICB0b3A6IDA7XFxuICAgIH1cXG4gICAgJi5jYy1ib3R0b20ge1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgfVxcbiAgICAmLmNjLWJhbm5lcixcXG4gICAgJi5jYy1mbG9hdGluZyxcXG4gICAgJi5jYy1yaWdodCxcXG4gICAgJi5jYy1sZWZ0IHtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAmLmNjLWJhbm5lciB7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogdW5zZXQ7XFxuICAgICAgLmNjLWNvbXBsaWFuY2Uge1xcbiAgICAgICAgZmxleDogMSAxIGF1dG87XFxuICAgICAgfVxcbiAgICAgIC5jYy1tZXNzYWdlIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgJi5jYy1mbG9hdGluZyB7XFxuICAgICAgbWF4LXdpZHRoOiBub25lO1xcbiAgICB9XFxuICAgICYuY2MtdHlwZS1jYXRlZ29yaWVzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC5jYy1tZXNzYWdlIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIH1cXG4gICAgLmNjLWNhdGVnb3JpZXN7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgfVxcbiAgICAuY2MtY2F0ZWdvcnkge1xcbiAgICAgIG1hcmdpbjogNHB4IDA7XFxuICAgICAgLmNjLWJ0bjpub3QoLmNjLWluZm8pe1xcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gICAgICAgIG1pbi13aWR0aDogMTQwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9IFxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTRweCkge1xcbiAgLmNjLXdpbmRvdy5jYy10eXBlLWNhdGVnb3JpZXMgLmNjLWJ0bi5jYy1zYXZlIHtcXG4gICAgbWFyZ2luOiA4cHggMDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcXG4gIC5jYy13aW5kb3cuY2MtdHlwZS1jYXRlZ29yaWVzIC5jYy1jYXRlZ29yaWVze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmNjLWNhdGVnb3JpZXMgLmNjLWNhdGVnb3J5e1xcbiAgICBtYXJnaW46IDRweCAwO1xcbiAgfVxcbiAgLmZvcm0ge1xcbiAgICB3aWR0aCAgICA6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICB9XFxuICAuY2MtYnRuOm5vdCguY2MtaW5mbyk6bm90KC5jYy1zYXZlKXtcXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAxNnB4KTtcXG4gIH1cXG59XFxuXCIsXCIvKiBDbGFzc2ljICovXFxuXFxuLmNjLWZsb2F0aW5nLmNjLXRoZW1lLWNsYXNzaWMge1xcbiAgcGFkZGluZzogMS4yZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5jYy1mbG9hdGluZy5jYy10eXBlLWluZm8uY2MtdGhlbWUtY2xhc3NpYyB7XFxuICAuY2MtY29tcGxpYW5jZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheSAgIDogaW5saW5lO1xcbiAgICBmbGV4ICAgICAgOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uY2MtdGhlbWUtY2xhc3NpY3tcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgLmNjLWJ0biB7XFxuICAgIHBvc2l0aW9uICAgICA6IHJlbGF0aXZlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmUgICAgICA6IG5vbmU7XFxuICAgICY6bGFzdC1jaGlsZCB7XFxuICAgICAgbWluLXdpZHRoOiAxNDBweDtcXG4gICAgfVxcbiAgfVxcbiAgLmNjLWNhdGVnb3J5IHtcXG4gICAgLmNjLWJ0biB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xcbiAgICAgIHBhZGRpbmctbGVmdCA6IDI4cHg7XFxuICAgICAgZm9udC13ZWlnaHQgIDogbm9ybWFsO1xcbiAgICAgIGJvcmRlci1yaWdodCA6IG5vbmU7XFxuICAgICAgYm94LXNpemluZyAgIDogYm9yZGVyLWJveDtcXG4gICAgICBpbnB1dFt0eXBlPWNoZWNrYm94XXtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQgICAgOiAwO1xcbiAgICAgICAgdG9wICAgICA6IC0xcHg7XFxuICAgICAgICB3aWR0aCAgIDogMTAwJTtcXG4gICAgICAgIGhlaWdodCAgOiAyNnB4O1xcbiAgICAgICAgb3BhY2l0eSA6IDA7XFxuICAgICAgICBjdXJzb3IgIDogcG9pbnRlcjtcXG4gICAgICAgIHotaW5kZXggOiAxO1xcbiAgICAgICAgJiArIC5jYy1idG4tY2hlY2tib3gge1xcbiAgICAgICAgICBkaXNwbGF5ICA6IGJsb2NrO1xcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICAgIHBvc2l0aW9uIDogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcCAgICAgIDogMnB4O1xcbiAgICAgICAgICBsZWZ0ICAgICA6IDZweDtcXG4gICAgICAgICAgei1pbmRleCAgOiAwO1xcbiAgICAgICAgICBvdXRsaW5lICA6IG5vbmU7XFxuICAgICAgICAgICY6YmVmb3Jle1xcbiAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFxcMUY1RjVcXFwiO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyAuY2MtYnRuLWNoZWNrYm94e1xcbiAgICAgICAgJjphZnRlcntcXG4gICAgICAgICAgY29udGVudCAgICA6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICAgICAgICAgIHBvc2l0aW9uICAgOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wICAgICAgICA6LTRweDtcXG4gICAgICAgICAgbGVmdCAgICAgICA6IDA7XFxuICAgICAgICAgIGZvbnQtc2l6ZSAgOiAyLjNyZW07XFxuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSggMTUwLCAxNTAsIDE1MCwgLjUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICAmLmNjLWluZm8ge1xcbiAgICAgICAgbWFyZ2luICAgICAgIDogMDtcXG4gICAgICAgIHBhZGRpbmcgICAgICA6IDAgNHB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XFxuICAgICAgfVxcbiAgICAgICY6bGFzdC1jaGlsZHtcXG4gICAgICAgIG1pbi13aWR0aDogMDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmNjLXRvb2x0aXB7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICY6YWZ0ZXJ7XFxuICAgICAgICBib3JkZXItYm90dG9tICA6IHRoaW4gc29saWQgbGlnaHRncmV5O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiB0aGluIHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLmNjLWZsb2F0aW5nLmNjLXR5cGUtaW5mby5jYy10aGVtZS1jbGFzc2ljIC5jYy1idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cIixcIi8qIEVkZ2VsZXNzICovXFxuXFxuLmNjLXRoZW1lLWVkZ2VsZXNzLmNjLXdpbmRvdyB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uY2MtZmxvYXRpbmcuY2MtdGhlbWUtZWRnZWxlc3MgLmNjLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcXG59XFxuXFxuLmNjLWJhbm5lci5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAuOGVtIDEuOGVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2MtYmFubmVyLmNjLXRoZW1lLWVkZ2VsZXNzIC5jYy1tZXNzYWdlIHtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbi5jYy1mbG9hdGluZy5jYy10aGVtZS1lZGdlbGVzcyAuY2MtYnRuICsgLmNjLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmNjLXdpbmRvdy5jYy10aGVtZS1lZGdlbGVzcy5jYy10eXBlLWNhdGVnb3JpZXN7XFxuICAuY2MtY2F0ZWdvcmllcyB7XFxuICAgIC5jYy1idG57XFxuICAgICAgcGFkZGluZzogMC40ZW0gMC44ZW07XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xcbiAgICAgICYuY2MtaW5mb3tcXG4gICAgICAgIHBhZGRpbmc6IDAuNGVtIDRweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmNjLXRvb2x0aXB7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMub25jZSA9IG9uY2U7XG5cbi8vIEJhY2t3YXJkcy1jb21wYXQgd2l0aCBub2RlIDAuMTAueFxuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzID0gdW5kZWZpbmVkO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fZXZlbnRzQ291bnQgPSAwO1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gdW5kZWZpbmVkO1xuXG4vLyBCeSBkZWZhdWx0IEV2ZW50RW1pdHRlcnMgd2lsbCBwcmludCBhIHdhcm5pbmcgaWYgbW9yZSB0aGFuIDEwIGxpc3RlbmVycyBhcmVcbi8vIGFkZGVkIHRvIGl0LiBUaGlzIGlzIGEgdXNlZnVsIGRlZmF1bHQgd2hpY2ggaGVscHMgZmluZGluZyBtZW1vcnkgbGVha3MuXG52YXIgZGVmYXVsdE1heExpc3RlbmVycyA9IDEwO1xuXG5mdW5jdGlvbiBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRFbWl0dGVyLCAnZGVmYXVsdE1heExpc3RlbmVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1heExpc3RlbmVycztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ251bWJlcicgfHwgYXJnIDwgMCB8fCBOdW1iZXJJc05hTihhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiZGVmYXVsdE1heExpc3RlbmVyc1wiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBhcmcgKyAnLicpO1xuICAgIH1cbiAgICBkZWZhdWx0TWF4TGlzdGVuZXJzID0gYXJnO1xuICB9XG59KTtcblxuRXZlbnRFbWl0dGVyLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICBpZiAodGhpcy5fZXZlbnRzID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHRoaXMuX2V2ZW50cyA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLl9ldmVudHMpIHtcbiAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgfVxuXG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59O1xuXG4vLyBPYnZpb3VzbHkgbm90IGFsbCBFbWl0dGVycyBzaG91bGQgYmUgbGltaXRlZCB0byAxMC4gVGhpcyBmdW5jdGlvbiBhbGxvd3Ncbi8vIHRoYXQgdG8gYmUgaW5jcmVhc2VkLiBTZXQgdG8gemVybyBmb3IgdW5saW1pdGVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMobikge1xuICBpZiAodHlwZW9mIG4gIT09ICdudW1iZXInIHx8IG4gPCAwIHx8IE51bWJlcklzTmFOKG4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcIm5cIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgbiArICcuJyk7XG4gIH1cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBfZ2V0TWF4TGlzdGVuZXJzKHRoYXQpIHtcbiAgaWYgKHRoYXQuX21heExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgcmV0dXJuIHRoYXQuX21heExpc3RlbmVycztcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5nZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBnZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiBfZ2V0TWF4TGlzdGVuZXJzKHRoaXMpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdCh0eXBlKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgdmFyIGRvRXJyb3IgPSAodHlwZSA9PT0gJ2Vycm9yJyk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKVxuICAgIGRvRXJyb3IgPSAoZG9FcnJvciAmJiBldmVudHMuZXJyb3IgPT09IHVuZGVmaW5lZCk7XG4gIGVsc2UgaWYgKCFkb0Vycm9yKVxuICAgIHJldHVybiBmYWxzZTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmIChkb0Vycm9yKSB7XG4gICAgdmFyIGVyO1xuICAgIGlmIChhcmdzLmxlbmd0aCA+IDApXG4gICAgICBlciA9IGFyZ3NbMF07XG4gICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIC8vIE5vdGU6IFRoZSBjb21tZW50cyBvbiB0aGUgYHRocm93YCBsaW5lcyBhcmUgaW50ZW50aW9uYWwsIHRoZXkgc2hvd1xuICAgICAgLy8gdXAgaW4gTm9kZSdzIG91dHB1dCBpZiB0aGlzIHJlc3VsdHMgaW4gYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgIH1cbiAgICAvLyBBdCBsZWFzdCBnaXZlIHNvbWUga2luZCBvZiBjb250ZXh0IHRvIHRoZSB1c2VyXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignVW5oYW5kbGVkIGVycm9yLicgKyAoZXIgPyAnICgnICsgZXIubWVzc2FnZSArICcpJyA6ICcnKSk7XG4gICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICB0aHJvdyBlcnI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IGV2ZW50c1t0eXBlXTtcblxuICBpZiAoaGFuZGxlciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICBSZWZsZWN0QXBwbHkoaGFuZGxlciwgdGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGxlbiA9IGhhbmRsZXIubGVuZ3RoO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBhcnJheUNsb25lKGhhbmRsZXIsIGxlbik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSlcbiAgICAgIFJlZmxlY3RBcHBseShsaXN0ZW5lcnNbaV0sIHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5mdW5jdGlvbiBfYWRkTGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgcHJlcGVuZCkge1xuICB2YXIgbTtcbiAgdmFyIGV2ZW50cztcbiAgdmFyIGV4aXN0aW5nO1xuXG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGFyZ2V0Ll9ldmVudHNDb3VudCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgICAvLyBhZGRpbmcgaXQgdG8gdGhlIGxpc3RlbmVycywgZmlyc3QgZW1pdCBcIm5ld0xpc3RlbmVyXCIuXG4gICAgaWYgKGV2ZW50cy5uZXdMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICAgICAgbGlzdGVuZXIubGlzdGVuZXIgPyBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICAgICAgLy8gUmUtYXNzaWduIGBldmVudHNgIGJlY2F1c2UgYSBuZXdMaXN0ZW5lciBoYW5kbGVyIGNvdWxkIGhhdmUgY2F1c2VkIHRoZVxuICAgICAgLy8gdGhpcy5fZXZlbnRzIHRvIGJlIGFzc2lnbmVkIHRvIGEgbmV3IG9iamVjdFxuICAgICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gICAgfVxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdO1xuICB9XG5cbiAgaWYgKGV4aXN0aW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICAgICsrdGFyZ2V0Ll9ldmVudHNDb3VudDtcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIGV4aXN0aW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID1cbiAgICAgICAgcHJlcGVuZCA/IFtsaXN0ZW5lciwgZXhpc3RpbmddIDogW2V4aXN0aW5nLCBsaXN0ZW5lcl07XG4gICAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgfSBlbHNlIGlmIChwcmVwZW5kKSB7XG4gICAgICBleGlzdGluZy51bnNoaWZ0KGxpc3RlbmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhpc3RpbmcucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgICBtID0gX2dldE1heExpc3RlbmVycyh0YXJnZXQpO1xuICAgIGlmIChtID4gMCAmJiBleGlzdGluZy5sZW5ndGggPiBtICYmICFleGlzdGluZy53YXJuZWQpIHtcbiAgICAgIGV4aXN0aW5nLndhcm5lZCA9IHRydWU7XG4gICAgICAvLyBObyBlcnJvciBjb2RlIGZvciB0aGlzIHNpbmNlIGl0IGlzIGEgV2FybmluZ1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICB2YXIgdyA9IG5ldyBFcnJvcignUG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSBsZWFrIGRldGVjdGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmcubGVuZ3RoICsgJyAnICsgU3RyaW5nKHR5cGUpICsgJyBsaXN0ZW5lcnMgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdpbmNyZWFzZSBsaW1pdCcpO1xuICAgICAgdy5uYW1lID0gJ01heExpc3RlbmVyc0V4Y2VlZGVkV2FybmluZyc7XG4gICAgICB3LmVtaXR0ZXIgPSB0YXJnZXQ7XG4gICAgICB3LnR5cGUgPSB0eXBlO1xuICAgICAgdy5jb3VudCA9IGV4aXN0aW5nLmxlbmd0aDtcbiAgICAgIFByb2Nlc3NFbWl0V2FybmluZyh3KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gYWRkTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZExpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIHRydWUpO1xuICAgIH07XG5cbmZ1bmN0aW9uIG9uY2VXcmFwcGVyKCkge1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmNhbGwodGhpcy50YXJnZXQpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBsaXN0ID0gZXZlbnRzW3R5cGVdO1xuICAgICAgaWYgKGxpc3QgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fCBsaXN0Lmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdC5saXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcG9zaXRpb24gPSAtMTtcblxuICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8IGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBvcmlnaW5hbExpc3RlbmVyID0gbGlzdFtpXS5saXN0ZW5lcjtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSAwKVxuICAgICAgICAgIGxpc3Quc2hpZnQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc3BsaWNlT25lKGxpc3QsIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICBldmVudHNbdHlwZV0gPSBsaXN0WzBdO1xuXG4gICAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgb3JpZ2luYWxMaXN0ZW5lciB8fCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyh0eXBlKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzLCBldmVudHMsIGk7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgICAgIGlmIChldmVudHMucmVtb3ZlTGlzdGVuZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50c1t0eXBlXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhldmVudHMpO1xuICAgICAgICB2YXIga2V5O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgbGlzdGVuZXJzID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgICBpZiAodHlwZW9mIGxpc3RlbmVycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVycyk7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RlbmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIExJRk8gb3JkZXJcbiAgICAgICAgZm9yIChpID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbmZ1bmN0aW9uIF9saXN0ZW5lcnModGFyZ2V0LCB0eXBlLCB1bndyYXApIHtcbiAgdmFyIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG4gIGlmIChldmxpc3RlbmVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJylcbiAgICByZXR1cm4gdW53cmFwID8gW2V2bGlzdGVuZXIubGlzdGVuZXIgfHwgZXZsaXN0ZW5lcl0gOiBbZXZsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHVud3JhcCA/XG4gICAgdW53cmFwTGlzdGVuZXJzKGV2bGlzdGVuZXIpIDogYXJyYXlDbG9uZShldmxpc3RlbmVyLCBldmxpc3RlbmVyLmxlbmd0aCk7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24gbGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgdHJ1ZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJhd0xpc3RlbmVycyA9IGZ1bmN0aW9uIHJhd0xpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIubGlzdGVuZXJDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGxpc3RlbmVyQ291bnQuY2FsbChlbWl0dGVyLCB0eXBlKTtcbiAgfVxufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lckNvdW50ID0gbGlzdGVuZXJDb3VudDtcbmZ1bmN0aW9uIGxpc3RlbmVyQ291bnQodHlwZSkge1xuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuXG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGV2bGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICByZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQgPiAwID8gUmVmbGVjdE93bktleXModGhpcy5fZXZlbnRzKSA6IFtdO1xufTtcblxuZnVuY3Rpb24gYXJyYXlDbG9uZShhcnIsIG4pIHtcbiAgdmFyIGNvcHkgPSBuZXcgQXJyYXkobik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgKytpKVxuICAgIGNvcHlbaV0gPSBhcnJbaV07XG4gIHJldHVybiBjb3B5O1xufVxuXG5mdW5jdGlvbiBzcGxpY2VPbmUobGlzdCwgaW5kZXgpIHtcbiAgZm9yICg7IGluZGV4ICsgMSA8IGxpc3QubGVuZ3RoOyBpbmRleCsrKVxuICAgIGxpc3RbaW5kZXhdID0gbGlzdFtpbmRleCArIDFdO1xuICBsaXN0LnBvcCgpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBMaXN0ZW5lcnMoYXJyKSB7XG4gIHZhciByZXQgPSBuZXcgQXJyYXkoYXJyLmxlbmd0aCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmV0Lmxlbmd0aDsgKytpKSB7XG4gICAgcmV0W2ldID0gYXJyW2ldLmxpc3RlbmVyIHx8IGFycltpXTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBvbmNlKGVtaXR0ZXIsIG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmdW5jdGlvbiBldmVudExpc3RlbmVyKCkge1xuICAgICAgaWYgKGVycm9yTGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIGVycm9yTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIH07XG4gICAgdmFyIGVycm9yTGlzdGVuZXI7XG5cbiAgICAvLyBBZGRpbmcgYW4gZXJyb3IgbGlzdGVuZXIgaXMgbm90IG9wdGlvbmFsIGJlY2F1c2VcbiAgICAvLyBpZiBhbiBlcnJvciBpcyB0aHJvd24gb24gYW4gZXZlbnQgZW1pdHRlciB3ZSBjYW5ub3RcbiAgICAvLyBndWFyYW50ZWUgdGhhdCB0aGUgYWN0dWFsIGV2ZW50IHdlIGFyZSB3YWl0aW5nIHdpbGxcbiAgICAvLyBiZSBmaXJlZC4gVGhlIHJlc3VsdCBjb3VsZCBiZSBhIHNpbGVudCB3YXkgdG8gY3JlYXRlXG4gICAgLy8gbWVtb3J5IG9yIGZpbGUgZGVzY3JpcHRvciBsZWFrcywgd2hpY2ggaXMgc29tZXRoaW5nXG4gICAgLy8gd2Ugc2hvdWxkIGF2b2lkLlxuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBlcnJvckxpc3RlbmVyID0gZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcihuYW1lLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9O1xuXG4gICAgICBlbWl0dGVyLm9uY2UoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZW1pdHRlci5vbmNlKG5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3Qgc3RhdHVzZXMgPSBbIFwiREVOWVwiLCBcIkFMTE9XXCIsIFwiRElTTUlTU1wiIF1cbmV4cG9ydCBjb25zdCBzdGF0dXNEZW55ID0gXCJERU5ZXCJcbmV4cG9ydCBjb25zdCBzdGF0dXNBbGxvdyA9IFwiQUxMT1dcIlxuZXhwb3J0IGNvbnN0IHN0YXR1c0Rpc21pc3MgPSBcIkRJU01JU1NcIlxuXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllcyA9IFsgXCJVTkNBVEVHT1JJWkVEXCIsIFwiRVNTRU5USUFMXCIsIFwiUEVSU09OQUxJWkFUSU9OXCIsIFwiQU5BTFlUSUNTXCIsIFwiTUFSS0VUSU5HXCIgXSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCBcIi4vc3R5bGVzL21haW4uc2Nzc1wiXG5cbmltcG9ydCBDb29raWVDb25zZW50IGZyb20gXCIuL21vZGVscy9Db29raWVDb25zZW50XCJcblxuaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IENvb2tpZUNvbnNlbnRcbn0gZWxzZSB7XG4gIHdpbmRvdy5Db29raWVDb25zZW50ID0gQ29va2llQ29uc2VudFxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IG1lcmdlT3B0aW9ucyB9IGZyb20gXCIuLi91dGlsc1wiXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCJldmVudHNcIlxuXG5jb25zdCBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xuICBjb25zdHJ1Y3RvciggZGVmYXVsdE9wdGlvbnMgPSB7fSwgb3B0aW9ucyA9IHt9ICl7XG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VPcHRpb25zKCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyApXG4gICAgdGhpcy5vbiA9IGVtaXR0ZXIub24uYmluZCggZW1pdHRlciApXG4gICAgdGhpcy5lbWl0ID0gZW1pdHRlci5lbWl0LmJpbmQoIGVtaXR0ZXIgKVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgTGVnYWwgZnJvbSBcIi4vTGVnYWxcIlxuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL0xvY2F0aW9uXCJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiXG5cbmltcG9ydCB7IHN0YXR1c2VzLCBjYXRlZ29yaWVzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5pbXBvcnQgeyBnZXRDb29raWUsIGlzVmFsaWRTdGF0dXMgfSBmcm9tIFwiLi4vdXRpbHNcIlxuXG4vLyBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBhcHAgYnkgY29tYmluaW5nIHRoZSB1c2Ugb2YgdGhlIFBvcHVwLCBMb2NhdG9yIGFuZCBMYXcgbW9kdWxlc1xuLy8gWW91IGNhbiBzdHJpbmcgdG9nZXRoZXIgdGhlc2UgdGhyZWUgbW9kdWxlcyB5b3Vyc2VsZiBob3dldmVyIHlvdSB3YW50LCBieSB3cml0aW5nIGEgbmV3IGZ1bmN0aW9uLlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWVDb25zZW50IGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKXtcbiAgICBzdXBlciggb3B0aW9ucyApXG5cbiAgICBjb25zdCBhbnN3ZXJzID0gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5ID0+IHtcbiAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSB0aGlzLm9wdGlvbnMuY29va2llICYmIHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA/IHRoaXMub3B0aW9ucy5jb29raWUubmFtZSA6ICdjb29raWVjb25zZW50X3N0YXR1c18nXG4gICAgICBjb25zdCBhbnN3ZXIgPSBnZXRDb29raWUoIGNvb2tpZU5hbWUgKyBjYXRlZ29yeSApXG4gICAgICByZXR1cm4gaXNWYWxpZFN0YXR1cyhhbnN3ZXIpID8geyBbY2F0ZWdvcnldOiBhbnN3ZXIgfSA6IHVuZGVmaW5lZFxuICAgIH0pLmZpbHRlcihvYmogPT4gb2JqID8gb2JqW09iamVjdC5rZXlzKG9iailbMF1dIDogZmFsc2UpXG5cbiAgICAvLyBpZiB0aGV5IGhhdmUgYWxyZWFkeSBhbnN3ZXJlZFxuICAgIGlmIChhbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJpbml0aWFsaXplZFwiLCBhbnN3ZXJzICkgKVxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sZWdhbCAmJiB0aGlzLm9wdGlvbnMubGVnYWwuY291bnRyeUNvZGUgKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUoIHsgY29kZTogdGhpcy5vcHRpb25zLmxlZ2FsLmNvdW50cnlDb2RlIH0gKVxuICAgIH0gZWxzZSBpZiAoIHRoaXMub3B0aW9ucy5sb2NhdGlvbiApIHtcbiAgICAgIG5ldyBMb2NhdGlvbiggdGhpcy5vcHRpb25zLmxvY2F0aW9uICkubG9jYXRlKCB0aGlzLmluaXRpYWxpemF0aW9uQ29tcGxldGUuYmluZCggdGhpcyApLCB0aGlzLmluaXRpYWxpemF0aW9uRXJyb3IuYmluZCggdGhpcyApIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0aWFsaXphdGlvbkNvbXBsZXRlKHt9KVxuICAgIH1cbiAgfVxuICBpbml0aWFsaXphdGlvbkNvbXBsZXRlKCByZXN1bHQgKXtcbiAgICBpZiAocmVzdWx0LmNvZGUpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBMZWdhbCh0aGlzLm9wdGlvbnMubGVnYWwpLmFwcGx5TGF3KCB0aGlzLm9wdGlvbnMsIHJlc3VsdC5jb2RlIClcbiAgICB9XG4gICAgdGhpcy5wb3B1cCA9IG5ldyBQb3B1cCggdGhpcy5vcHRpb25zIClcbiAgICBzZXRUaW1lb3V0KCAoKSA9PiB0aGlzLmVtaXQoXCJpbml0aWFsaXplZFwiLCB0aGlzLnBvcHVwICksIDAgKVxuICB9XG4gIGluaXRpYWxpemF0aW9uRXJyb3IoIGVycm9yICkge1xuICAgIHNldFRpbWVvdXQoICgpID0+IHRoaXMuZW1pdCggXCJlcnJvclwiLCBlcnJvciwgbmV3IFBvcHVwKCB0aGlzLm9wdGlvbnMgKSApLCAwIClcbiAgfVxuICBnZXRDb3VudHJ5TGF3cyggY291bnRyeUNvZGUgKXtcbiAgICByZXR1cm4gbmV3IExlZ2FsKHRoaXMub3B0aW9ucy5sZWdhbCkuZ2V0KCBjb3VudHJ5Q29kZSApXG4gIH1cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLnBvcHVwLmlzT3BlbigpXG4gIH1cbiAgY2xvc2UoKXtcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsb3NlKCksIHRoaXMgKVxuICB9XG4gIHJldm9rZUNob2ljZSgpIHtcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnJldm9rZUNob2ljZSgpLCB0aGlzIClcbiAgfVxuICBvcGVuKCl7XG4gICAgcmV0dXJuICggdGhpcy5wb3B1cC5vcGVuKCksIHRoaXMgKVxuICB9XG4gIHRvZ2dsZVJldm9rZUJ1dHRvbiggYm9vbCApIHtcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLnRvZ2dsZVJldm9rZUJ1dHRvbiggYm9vbCApLCB0aGlzIClcbiAgfVxuICBzZXRTdGF0dXNlcyggc3RhdHVzICkge1xuICAgIHJldHVybiAodGhpcy5wb3B1cC5zZXRTdGF0dXNlcyggc3RhdHVzICksIHRoaXMgKVxuICB9XG4gIGNsZWFyU3RhdHVzZXMoKXtcbiAgICByZXR1cm4gKCB0aGlzLnBvcHVwLmNsZWFyU3RhdHVzZXMoKSwgdGhpcyApXG4gIH1cbiAgZGVzdHJveSgpe1xuICAgIHJldHVybiAoIHRoaXMucG9wdXAuZGVzdHJveSgpLCB0aGlzIClcbiAgfVxufVxuXG5zdGF0dXNlcy5yZWR1Y2UoICggb2JqLCBzdGF0dXMgKSA9PlxuKCBPYmplY3QuZGVmaW5lUHJvcGVydHkoIENvb2tpZUNvbnNlbnQsIHN0YXR1cywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXR1cyB9LFxuICBzZXQ6IGZ1bmN0aW9uICgpIHt9LFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgd3JpdGVhYmxlOiBmYWxzZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZVxufSksIG9iaiApLCBDb29raWVDb25zZW50ICkiLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sZWdhbFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlZ2FsIGV4dGVuZHMgQmFzZSB7XG4gIGNvbnN0cnVjdG9yKCBvcHRpb25zID0ge30gKSB7XG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgfVxuICBnZXQoIGNvdW50cnlDb2RlICl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc0xhdzogdGhpcy5vcHRpb25zLmhhc0xhdy5pbmNsdWRlcyhjb3VudHJ5Q29kZSksXG4gICAgICByZXZva2FibGU6IHRoaXMub3B0aW9ucy5yZXZva2FibGUuaW5jbHVkZXMoY291bnRyeUNvZGUpLFxuICAgICAgZXhwbGljaXRBY3Rpb246IHRoaXMub3B0aW9ucy5leHBsaWNpdEFjdGlvbi5pbmNsdWRlcyhjb3VudHJ5Q29kZSlcbiAgICB9XG4gIH1cbiAgYXBwbHlMYXcoIG9wdGlvbnMsIGNvdW50cnlDb2RlICl7XG4gICAgY29uc3QgY291bnRyeSA9IHRoaXMuZ2V0KGNvdW50cnlDb2RlKVxuXG4gICAgaWYgKCFjb3VudHJ5Lmhhc0xhdykge1xuICAgICAgLy8gVGhlIGNvdW50cnkgaGFzIG5vIGNvb2tpZSBsYXdcbiAgICAgIG9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXG4gICAgICB0aGlzLmVtaXQoIFwibm9Db29raWVMYXdcIiwgY291bnRyeUNvZGUsIGNvdW50cnkgKVxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMucmVnaW9uYWxMYXcpIHtcbiAgICAgIGlmIChjb3VudHJ5LnJldm9rYWJsZSkge1xuICAgICAgICAvLyBXZSBtdXN0IHByb3ZpZGUgYW4gb3B0aW9uIHRvIHJldm9rZSBjb25zZW50IGF0IGEgbGF0ZXIgdGltZVxuICAgICAgICBvcHRpb25zLnJldm9rYWJsZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKGNvdW50cnkuZXhwbGljaXRBY3Rpb24pIHtcbiAgICAgICAgLy8gVGhlIHVzZXIgbXVzdCBleHBsaWNpdGx5IGNsaWNrIHRoZSBjb25zZW50IGJ1dHRvblxuICAgICAgICBvcHRpb25zLmRpc21pc3NPblNjcm9sbCA9IGZhbHNlXG4gICAgICAgIG9wdGlvbnMuZGlzbWlzc09uVGltZW91dCA9IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zXG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgQmFzZSBmcm9tIFwiLi9CYXNlXCJcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi4vb3B0aW9ucy9sb2NhdGlvblwiXG5pbXBvcnQgeyBpc1BsYWluT2JqZWN0LCBnZXRTY3JpcHQsIG1ha2VBc3luY1JlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbHNcIlxuXG4vLyBBbiBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGxvY2F0aW9uIHNlcnZpY2VzIHdlIGhhdmUgYWxyZWFkeSBzZXQgdXAuXG4vLyBXaGVuIHVzaW5nIGEgc2VydmljZSwgaXQgY291bGQgZWl0aGVyIHJldHVybiBhIGRhdGEgc3RydWN0dXJlIGluIHBsYWluIHRleHQgKGxpa2UgYSBKU09OIG9iamVjdCkgb3IgYW4gZXhlY3V0YWJsZSBzY3JpcHRcbi8vIFdoZW4gdGhlIHJlc3BvbnNlIG5lZWRzIHRvIGJlIGV4ZWN1dGVkIGJ5IHRoZSBicm93c2VyLCB0aGVuIGBpc1NjcmlwdGAgbXVzdCBiZSBzZXQgdG8gdHJ1ZSwgb3RoZXJ3aXNlIGl0IHdvbid0IHdvcmsuXG5cbi8vIFdoZW4gdGhlIHNlcnZpY2UgdXNlcyBhIHNjcmlwdCwgdGhlIGNoYW5jZXMgYXJlIHRoYXQgeW91J2xsIGhhdmUgdG8gdXNlIHRoZSBzY3JpcHQgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzLiBJbiB0aGVzZVxuLy8gY2FzZXMsIHRoZSBzZXJ2aWNlcyBgY2FsbGJhY2tgIHByb3BlcnR5IGlzIGNhbGxlZCB3aXRoIGEgYGRvbmVgIGZ1bmN0aW9uLiBXaGVuIHBlcmZvcm1pbmcgYXN5bmMgb3BlcmF0aW9ucywgdGhpcyBtdXN0IGJlIGNhbGxlZFxuLy8gd2l0aCB0aGUgZGF0YSAob3IgRXJyb3IpLCBhbmQgYGNvb2tpZWNvbnNlbnQubG9jYXRlYCB3aWxsIHRha2UgY2FyZSBvZiB0aGUgcmVzdFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2NhdGlvbiBleHRlbmRzIEJhc2Uge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICBzdXBlciggZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMgKVxuICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA9IC0xIC8vIHRoZSBpbmRleCAoaW4gb3B0aW9ucykgb2YgdGhlIHNlcnZpY2Ugd2UncmUgY3VycmVudGx5IHVzaW5nXG4gIH1cblxuICBnZXROZXh0U2VydmljZSgpIHtcbiAgICBsZXQgc2VydmljZVxuICAgIGRvIHtcbiAgICAgIHNlcnZpY2UgPSB0aGlzLmdldFNlcnZpY2VCeUlkeCgrK3RoaXMuY3VycmVudFNlcnZpY2VJbmRleClcbiAgICB9IHdoaWxlIChcbiAgICAgIHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCA8IHRoaXMub3B0aW9ucy5zZXJ2aWNlcy5sZW5ndGggJiZcbiAgICAgICFzZXJ2aWNlXG4gICAgKVxuXG4gICAgcmV0dXJuIHNlcnZpY2VcbiAgfVxuXG4gIGdldFNlcnZpY2VCeUlkeChpZHgpIHtcbiAgICAvLyBUaGlzIGNhbiBlaXRoZXIgYmUgdGhlIG5hbWUgb2YgYSBkZWZhdWx0IGxvY2F0aW9uU2VydmljZSwgb3IgYSBmdW5jdGlvbi5cbiAgICBjb25zdCBzZXJ2aWNlT3B0aW9uID0gdGhpcy5vcHRpb25zLnNlcnZpY2VzW2lkeF1cblxuICAgIC8vIElmIGl0J3MgYSBzdHJpbmcsIHVzZSBvbmUgb2YgdGhlIGxvY2F0aW9uIHNlcnZpY2VzLlxuICAgIGlmICh0eXBlb2Ygc2VydmljZU9wdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZHluYW1pY09wdHMgPSBzZXJ2aWNlT3B0aW9uKClcbiAgICAgIHJldHVybiBkeW5hbWljT3B0cy5uYW1lID9cbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBkeW5hbWljT3B0cyxcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zWyBkeW5hbWljT3B0cy5uYW1lIF0oIGR5bmFtaWNPcHRzIClcbiAgICAgICAgKSA6IGR5bmFtaWNPcHRzXG4gICAgfVxuXG4gICAgLy8gSWYgaXQncyBhIHN0cmluZywgdXNlIG9uZSBvZiB0aGUgbG9jYXRpb24gc2VydmljZXMuXG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlT3B0aW9uID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zZXJ2aWNlRGVmaW5pdGlvbnNbc2VydmljZU9wdGlvbl0oKVxuICAgIH1cblxuICAgIC8vIElmIGl0J3MgYW4gb2JqZWN0LCBhc3N1bWUge25hbWU6ICdpcGluZm8nLCAuLi5vdGhlck9wdGlvbnN9XG4gICAgLy8gQWxsb3dzIHVzZXIgdG8gcGFzcyBpbiBBUEkga2V5cyBldGMuXG4gICAgaWYgKGlzUGxhaW5PYmplY3Qoc2VydmljZU9wdGlvbikpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuc2VydmljZURlZmluaXRpb25zW3NlcnZpY2VPcHRpb24ubmFtZV0oXG4gICAgICAgIHNlcnZpY2VPcHRpb25cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gVGhpcyBydW5zIHRoZSBzZXJ2aWNlIGxvY2F0ZWQgYXQgaW5kZXggYGN1cnJlbnRTZXJ2aWNlSW5kZXhgLlxuICAvLyBJZiB0aGUgc2VydmljZSBmYWlscywgYHJ1bk5leHRTZXJ2aWNlT25FcnJvcmAgd2lsbCBjb250aW51ZSB0cnlpbmcgZWFjaCBzZXJ2aWNlIHVudGlsIGFsbCBmYWlsLCBvciBvbmUgY29tcGxldGVzIHN1Y2Nlc3NmdWxseVxuICBsb2NhdGUoY29tcGxldGUsIGVycm9yKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0TmV4dFNlcnZpY2UoKVxuXG4gICAgaWYgKCFzZXJ2aWNlKSB7XG4gICAgICBlcnJvcihuZXcgRXJyb3IoJ05vIHNlcnZpY2VzIHRvIHJ1bicpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jYWxsYmFja0NvbXBsZXRlID0gY29tcGxldGVcbiAgICB0aGlzLmNhbGxiYWNrRXJyb3IgPSBlcnJvclxuXG4gICAgdGhpcy5ydW5TZXJ2aWNlKHNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXG4gIH1cblxuICAvLyBQb3RlbnRpYWxseSBhZGRzIGEgY2FsbGJhY2sgdG8gYSB1cmwgZm9yIGpzb25wLlxuICBzZXR1cFVybChzZXJ2aWNlKSB7XG4gICAgY29uc3Qgc2VydmljZU9wdHMgPSB0aGlzLmdldEN1cnJlbnRTZXJ2aWNlT3B0cygpXG4gICAgcmV0dXJuIHNlcnZpY2UudXJsLnJlcGxhY2UoL1xceyguKj8pXFx9L2csIGZ1bmN0aW9uKF8sIHBhcmFtKSB7XG4gICAgICBpZiAocGFyYW0gPT09ICdjYWxsYmFjaycpIHtcbiAgICAgICAgY29uc3QgdGVtcE5hbWUgPSAnY2FsbGJhY2snICsgRGF0ZS5ub3coKVxuICAgICAgICB3aW5kb3dbdGVtcE5hbWVdID0gZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgc2VydmljZS5fX0pTT05QX0RBVEEgPSBKU09OLnN0cmluZ2lmeShyZXMpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlbXBOYW1lXG4gICAgICB9XG4gICAgICBpZiAocGFyYW0gaW4gc2VydmljZU9wdHMuaW50ZXJwb2xhdGVVcmwpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VPcHRzLmludGVycG9sYXRlVXJsW3BhcmFtXVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyByZXF1aXJlcyBhIGBzZXJ2aWNlYCBvYmplY3QgdGhhdCBkZWZpbmVzIGF0IGxlYXN0IGEgYHVybGAgYW5kIGBjYWxsYmFja2BcbiAgcnVuU2VydmljZShzZXJ2aWNlLCBjb21wbGV0ZSkge1xuICAgIC8vIGJhc2ljIGNoZWNrIHRvIGVuc3VyZSBpdCByZXNlbWJsZXMgYSBgc2VydmljZWBcbiAgICBpZiAoIXNlcnZpY2UgfHwgIXNlcnZpY2UudXJsIHx8ICFzZXJ2aWNlLmNhbGxiYWNrKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB3ZSBjYWxsIGVpdGhlciBgZ2V0U2NyaXB0YCBvciBgbWFrZUFzeW5jUmVxdWVzdGAgZGVwZW5kaW5nIG9uIHRoZSB0eXBlIG9mIHJlc291cmNlXG4gICAgY29uc3QgcmVxdWVzdEZ1bmN0aW9uID0gc2VydmljZS5pc1NjcmlwdCA/IGdldFNjcmlwdCA6IG1ha2VBc3luY1JlcXVlc3RcblxuICAgIC8vIGJvdGggZnVuY3Rpb25zIGhhdmUgc2ltaWxhciBzaWduYXR1cmVzIHNvIHdlIGNhbiBwYXNzIHRoZSBzYW1lIGFyZ3VtZW50cyB0byBib3RoXG4gICAgcmVxdWVzdEZ1bmN0aW9uKFxuICAgICAgdGhpcy5zZXR1cFVybChzZXJ2aWNlKSxcbiAgICAgIHhociA9PiB7XG4gICAgICAgIC8vIGlmIGAheGhyYCwgdGhlbiBgZ2V0U2NyaXB0YCBmdW5jdGlvbiB3YXMgdXNlZCwgc28gdGhlcmUgaXMgbm8gcmVzcG9uc2UgdGV4dFxuICAgICAgICBsZXQgcmVzcG9uc2VUZXh0ID0geGhyID8geGhyLnJlc3BvbnNlVGV4dCA6ICcnXG5cbiAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGEgc2NyaXB0LCB0aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gcnVuLlxuICAgICAgICAvLyBpZiB0aGUgc2NyaXB0IGlzIEpTT05QLCB0aGVuIGEgdGltZSBkZWZpbmVkIGZ1bmN0aW9uIGBjYWxsYmFja197RGF0ZS5ub3d9YCBoYXMgYWxyZWFkeVxuICAgICAgICAvLyBiZWVuIGNhbGxlZCAoYXMgdGhlIEpTT05QIGNhbGxiYWNrKS4gVGhpcyBjYWxsYmFjayBzZXRzIHRoZSBfX0pTT05QX0RBVEEgcHJvcGVydHlcbiAgICAgICAgaWYgKHNlcnZpY2UuX19KU09OUF9EQVRBKSB7XG4gICAgICAgICAgcmVzcG9uc2VUZXh0ID0gc2VydmljZS5fX0pTT05QX0RBVEFcbiAgICAgICAgICBkZWxldGUgc2VydmljZS5fX0pTT05QX0RBVEFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGwgdGhlIHNlcnZpY2UgY2FsbGJhY2sgd2l0aCB0aGUgcmVzcG9uc2UgdGV4dCAoc28gaXQgY2FuIHBhcnNlIHRoZSByZXNwb25zZSlcbiAgICAgICAgdGhpcy5ydW5TZXJ2aWNlQ2FsbGJhY2suY2FsbCh0aGlzLCBjb21wbGV0ZSwgc2VydmljZSwgcmVzcG9uc2VUZXh0KVxuICAgICAgfSxcbiAgICAgIHRoaXMub3B0aW9ucy50aW1lb3V0LFxuICAgICAgc2VydmljZS5kYXRhLFxuICAgICAgc2VydmljZS5oZWFkZXJzXG4gICAgKVxuXG4gICAgLy8gYHNlcnZpY2UuZGF0YWAgYW5kIGBzZXJ2aWNlLmhlYWRlcnNgIGFyZSBvcHRpb25hbCAodGhleSBvbmx5IGNvdW50IGlmIGAhc2VydmljZS5pc1NjcmlwdGAgYW55d2F5KVxuICB9XG5cbiAgLy8gVGhlIHNlcnZpY2UgcmVxdWVzdCBoYXMgcnVuIChhbmQgcG9zc2libHkgaGFzIGEgYHJlc3BvbnNlVGV4dGApIFtubyBgcmVzcG9uc2VUZXh0YCBpZiBgaXNTY3JpcHRgXVxuICAvLyBXZSBuZWVkIHRvIHJ1biBpdHMgY2FsbGJhY2sgd2hpY2ggZGV0ZXJtaW5lcyBpZiBpdHMgc3VjY2Vzc2Z1bCBvciBub3RcbiAgLy8gYGNvbXBsZXRlYCBpcyBjYWxsZWQgb24gc3VjY2VzcyBvciBmYWlsdXJlXG4gIHJ1blNlcnZpY2VDYWxsYmFjayggY29tcGxldGUsIHNlcnZpY2UsIHJlc3BvbnNlVGV4dCApIHtcbiAgICAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBpZiB0aGUgc2VydmljZSB1c2VzIHRoZSBhc3luYyBjYWxsYmFjayBpbiBpdHMgaGFuZGxlciBtZXRob2RcbiAgICBjb25zdCBzZXJ2aWNlUmVzdWx0SGFuZGxlciA9IGFzeW5jUmVzdWx0ID0+IHtcbiAgICAgIC8vIGlmIGByZXN1bHRgIGlzIGEgdmFsaWQgdmFsdWUsIHRoZW4gdGhpcyBmdW5jdGlvbiBzaG91bGRuJ3QgcmVhbGx5IHJ1blxuICAgICAgLy8gZXZlbiBpZiBpdCBpcyBjYWxsZWQgYnkgYHNlcnZpY2UuY2FsbGJhY2tgXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICB0aGlzLm9uU2VydmljZVJlc3VsdCggY29tcGxldGUsIGFzeW5jUmVzdWx0KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBmdW5jdGlvbiBgc2VydmljZS5jYWxsYmFja2Agd2lsbCBlaXRoZXIgZXh0cmFjdCBhIGNvdW50cnkgY29kZSBmcm9tIGByZXNwb25zZVRleHRgIGFuZCByZXR1cm4gaXQgKGluIGByZXN1bHRgKVxuICAgIC8vIG9yIChpZiBpdCBoYXMgdG8gbWFrZSBhZGRpdGlvbmFsIHJlcXVlc3RzKSBpdCB3aWxsIGNhbGwgYSBgZG9uZWAgY2FsbGJhY2sgd2l0aCB0aGUgY291bnRyeSBjb2RlIHdoZW4gaXQgaXMgcmVhZHlcbiAgICBjb25zdCByZXN1bHQgPSBzZXJ2aWNlLmNhbGxiYWNrKHNlcnZpY2VSZXN1bHRIYW5kbGVyLCByZXNwb25zZVRleHQpXG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB0aGlzLm9uU2VydmljZVJlc3VsdCggY29tcGxldGUsIHJlc3VsdCApXG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBpcyBjYWxsZWQgd2l0aCB0aGUgYHJlc3VsdGAgZnJvbSBgc2VydmljZS5jYWxsYmFja2AgcmVnYXJkbGVzcyBvZiBob3cgaXQgcHJvdmlkZWQgdGhhdCByZXN1bHQgKHN5bmMgb3IgYXN5bmMpLlxuICAvLyBgcmVzdWx0YCB3aWxsIGJlIHdoYXRldmVyIGlzIHJldHVybmVkIGZyb20gYHNlcnZpY2UuY2FsbGJhY2tgLiBBIHNlcnZpY2UgY2FsbGJhY2sgc2hvdWxkIHByb3ZpZGUgYW4gb2JqZWN0IHdpdGggZGF0YVxuICBvblNlcnZpY2VSZXN1bHQoY29tcGxldGUsIHJlc3VsdCkge1xuICAgIC8vIGNvbnZlcnQgcmVzdWx0IHRvIG5vZGVqcyBzdHlsZSBhc3luYyBjYWxsYmFja1xuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBFcnJvciB8fCAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikpIHtcbiAgICAgIGNvbXBsZXRlLmNhbGwodGhpcywgcmVzdWx0LCBudWxsKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb21wbGV0ZS5jYWxsKHRoaXMsIG51bGwsIHJlc3VsdClcbiAgICB9XG4gIH1cblxuICAvLyBpZiBgZXJyYCBpcyBzZXQsIHRoZSBuZXh0IHNlcnZpY2UgaGFuZGxlciBpcyBjYWxsZWRcbiAgLy8gaWYgYGVycmAgaXMgbnVsbCwgdGhlIGBvbkNvbXBsZXRlYCBoYW5kbGVyIGlzIGNhbGxlZCB3aXRoIGBkYXRhYFxuICBydW5OZXh0U2VydmljZU9uRXJyb3IoZXJyLCBkYXRhKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgdGhpcy5sb2dFcnJvcihlcnIpXG5cbiAgICAgIGNvbnN0IG5leHRTZXJ2aWNlID0gdGhpcy5nZXROZXh0U2VydmljZSgpXG5cbiAgICAgIGlmIChuZXh0U2VydmljZSkge1xuICAgICAgICB0aGlzLnJ1blNlcnZpY2UobmV4dFNlcnZpY2UsIHRoaXMucnVuTmV4dFNlcnZpY2VPbkVycm9yLmJpbmQodGhpcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlU2VydmljZS5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdGhpcy5jYWxsYmFja0Vycm9yLFxuICAgICAgICAgIG5ldyBFcnJvcignQWxsIHNlcnZpY2VzIGZhaWxlZCcpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZVNlcnZpY2UuY2FsbCh0aGlzLCB0aGlzLmNhbGxiYWNrQ29tcGxldGUsIGRhdGEpXG4gICAgfVxuICB9XG5cbiAgZ2V0Q3VycmVudFNlcnZpY2VPcHRzKCkge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMub3B0aW9ucy5zZXJ2aWNlc1t0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXhdXG5cbiAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB2YWwoKVxuICAgIH1lbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICAgIHJldHVybiB2YWxcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuICB9XG5cbiAgLy8gY2FsbHMgdGhlIGBvbkNvbXBsZXRlYCBjYWxsYmFjayBhZnRlciByZXNldHRpbmcgdGhlIGBjdXJyZW50U2VydmljZUluZGV4YFxuICBjb21wbGV0ZVNlcnZpY2UoZm4sIGRhdGEpIHtcbiAgICB0aGlzLmN1cnJlbnRTZXJ2aWNlSW5kZXggPSAtMVxuXG4gICAgZm4gJiYgZm4oZGF0YSlcbiAgfVxuXG4gIGxvZ0Vycm9yKGVycikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBUaGUgc2VydmljZVske3RoaXMuY3VycmVudFNlcnZpY2VJbmRleH1dICgke3RoaXMuZ2V0U2VydmljZUJ5SWR4KHRoaXMuY3VycmVudFNlcnZpY2VJbmRleCkudXJsfSkgcmVzcG9uZGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcmAsXG4gICAgICAgZXJyXG4gICAgKVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IEJhc2UgZnJvbSBcIi4vQmFzZVwiXG5pbXBvcnQgZGVmYXVsdE9wdGlvbnMgZnJvbSBcIi4uL29wdGlvbnMvcG9wdXBcIlxuaW1wb3J0IHtcbiAgY2F0ZWdvcmllcyxcbiAgc3RhdHVzZXMsXG4gIHN0YXR1c0Rpc21pc3MsXG4gIHN0YXR1c0FsbG93XG59IGZyb20gXCIuLi9jb25zdGFudHNcIlxuaW1wb3J0IHtcbiAgYWRkQ3VzdG9tU3R5bGVzaGVldCxcbiAgZ2V0Q29va2llLFxuICBoYXNoLFxuICBpbnRlcnBvbGF0ZVN0cmluZyxcbiAgaXNNb2JpbGUsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzVmFsaWRTdGF0dXMsXG4gIHNldENvb2tpZSxcbiAgdGhyb3R0bGUsXG4gIHRyYXZlcnNlRE9NUGF0aCxcbn0gZnJvbSBcIi4uL3V0aWxzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBCYXNlIHtcbiAgY29uc3RydWN0b3IoIG9wdGlvbnMgKSB7XG4gICAgc3VwZXIoIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zIClcbiAgICB0aGlzLnVzZXJDYXRlZ29yaWVzID0ge1xuICAgICAgVU5DQVRFR09SSVpFRCAgOiAnRElTTUlTUycsXG4gICAgICBFU1NFTlRJQUwgICAgICA6ICdBTExPVycsXG4gICAgICBQRVJTT05BTElaQVRJT046ICdESVNNSVNTJyxcbiAgICAgIEFOQUxZVElDUyAgICAgIDogJ0RJU01JU1MnLFxuICAgICAgTUFSS0VUSU5HICAgICAgOiAnRElTTUlTUydcbiAgICB9XG4gICAgdGhpcy5jdXN0b21TdHlsZXMgPSB7fVxuICAgIHRoaXMuaGFzVHJhbnNpdGlvbiA9ICEhKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgY29uc3QgdHJhbnMgPSB7XG4gICAgICAgIHQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgT1Q6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgIG1zVDogJ01TVHJhbnNpdGlvbkVuZCcsXG4gICAgICAgIE1velQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgV2Via2l0VDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHByZWZpeCBpbiB0cmFucykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHJhbnMuaGFzT3duUHJvcGVydHkocHJlZml4KSAmJlxuICAgICAgICAgIHR5cGVvZiBlbC5zdHlsZVtwcmVmaXggKyAncmFuc2l0aW9uJ10gIT09ICd1bmRlZmluZWQnXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cmFuc1twcmVmaXhdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAnJ1xuICAgIH0pKClcblxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZiBgb25Db21wbGV0ZWAgd2FzIGNhbGxlZFxuICAgIGlmICh0aGlzLmNhblVzZUNvb2tpZXMoKSkge1xuICAgICAgLy8gdXNlciBoYXMgYWxyZWFkeSBhbnN3ZXJlZFxuICAgICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBhcHBseSBibGFja2xpc3QgLyB3aGl0ZWxpc3RcbiAgICBpZiAodGhpcy5vcHRpb25zLmJsYWNrbGlzdFBhZ2UuaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZW5hYmxlZCA9IGZhbHNlXG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMud2hpdGVsaXN0UGFnZS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5lbmFibGVkID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIHRoZSBmdWxsIG1hcmt1cCBlaXRoZXIgY29udGFpbnMgdGhlIHdyYXBwZXIgb3IgaXQgZG9lcyBub3QgKGZvciBtdWx0aXBsZSBpbnN0YW5jZXMpXG4gICAgbGV0IGNvb2tpZVBvcHVwID0gdGhpcy5vcHRpb25zLndpbmRvd1xuICAgICAgLnJlcGxhY2UoJ3t7Y2xhc3Nlc319JywgdGhpcy5nZXRQb3B1cENsYXNzZXMoKS5qb2luKCcgJykpXG4gICAgICAucmVwbGFjZSgne3tjaGlsZHJlbn19JywgdGhpcy5nZXRQb3B1cElubmVyTWFya3VwKCkpXG5cbiAgICAvLyBpZiB1c2VyIHBhc3NlcyBodG1sLCB1c2UgaXQgaW5zdGVhZFxuICAgIGNvbnN0IGN1c3RvbUhUTUwgPSB0aGlzLm9wdGlvbnMub3ZlcnJpZGVIVE1MXG4gICAgaWYgKHR5cGVvZiBjdXN0b21IVE1MID09ICdzdHJpbmcnICYmIGN1c3RvbUhUTUwubGVuZ3RoICkge1xuICAgICAgY29va2llUG9wdXAgPSBjdXN0b21IVE1MXG4gICAgfVxuXG4gICAgLy8gaWYgc3RhdGljLCB3ZSBuZWVkIHRvIGdyb3cgdGhlIGVsZW1lbnQgZnJvbSAwIGhlaWdodCBzbyBpdCBkb2Vzbid0IGp1bXAgdGhlIHBhZ2VcbiAgICAvLyBjb250ZW50LiB3ZSB3cmFwIGFuIGVsZW1lbnQgYXJvdW5kIGl0IHdoaWNoIHdpbGwgbWFzayB0aGUgaGlkZGVuIGNvbnRlbnRcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc3RhdGljKSB7XG4gICAgICAvLyBgZ3Jvd2VyYCBpcyBhIHdyYXBwZXIgZGl2IHdpdGggYSBoaWRkZW4gb3ZlcmZsb3cgd2hvc2UgaGVpZ2h0IGlzIGFuaW1hdGVkXG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5hcHBlbmRNYXJrdXAoYDxkaXYgY2xhc3M9XCJjYy1ncm93ZXJcIj4ke2Nvb2tpZVBvcHVwfTwvZGl2PmApXG5cbiAgICAgIHdyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICcnIC8vIHNldCBpdCB0byB2aXNpYmxlIChiZWNhdXNlIGFwcGVuZE1hcmt1cCBoaWRlcyBpdClcbiAgICAgIHRoaXMuZWxlbWVudCA9IHdyYXBwZXIuZmlyc3RDaGlsZCAvLyBnZXQgdGhlIGBlbGVtZW50YCByZWZlcmVuY2UgZnJvbSB0aGUgd3JhcHBlclxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmFwcGVuZE1hcmt1cChjb29raWVQb3B1cClcbiAgICB9XG5cbiAgICB0aGlzLmFwcGx5QXV0b0Rpc21pc3MoKVxuICAgIHRoaXMuYXBwbHlSZXZva2VCdXR0b24oKVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvT3Blbikge1xuICAgICAgdGhpcy5hdXRvT3BlbigpXG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgcmV0dXJuXG5cbiAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgIGlmICh0aGlzLmhhc1RyYW5zaXRpb24pIHtcbiAgICAgICAgdGhpcy5mYWRlSW4oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJ1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnJldm9rYWJsZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZVJldm9rZUJ1dHRvbigpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBPcGVuZWRcIiApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGNsb3NlKCBzaG93UmV2b2tlICkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSByZXR1cm5cblxuICAgIGlmICh0aGlzLmlzT3BlbigpKSB7XG4gICAgICBpZiAodGhpcy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuZmFkZU91dCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd1Jldm9rZSAmJiB0aGlzLm9wdGlvbnMucmV2b2thYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXG4gICAgICB9XG4gICAgICB0aGlzLmVtaXQoIFwicG9wdXBDbG9zZWRcIiApXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZhZGVJbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFxuXG4gICAgaWYgKCF0aGlzLmhhc1RyYW5zaXRpb24gfHwgIWVsKSByZXR1cm5cblxuICAgIC8vIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBjYWxsZWQgQUZURVIgZmFkZU91dCAod2hpY2ggaXMgZ292ZXJuZWQgYnkgdGhlICd0cmFuc2l0aW9uZW5kJyBldmVudCkuXG4gICAgLy8gJ3RyYW5zaXRpb25lbmQnIGlzbid0IGFsbCB0aGF0IHJlbGlhYmxlLCBzbywgaWYgd2UgdHJ5IGFuZCBmYWRlSW4gYmVmb3JlICd0cmFuc2l0aW9uZW5kJyBoYXNcbiAgICAvLyBoYXMgYSBjaGFuY2UgdG8gcnVuLCB0aGVuIHdlIHJ1biBpdCBvdXJzZWx2ZXNcbiAgICBpZiAodGhpcy5hZnRlclRyYW5zaXRpb24pIHtcbiAgICAgIHRoaXMuYWZ0ZXJGYWRlT3V0KGVsKVxuICAgIH1cblxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJydcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCArICdweCdcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmFkZUluVGltZW91dCA9IDIwIC8vIChtcykgRE8gTk9UIE1BS0UgVEhJUyBWQUxVRSBTTUFMTEVSLiBTZWUgYmVsb3dcblxuICAgICAgLy8gQWx0aG91Z2ggbW9zdCBicm93c2VycyBjYW4gaGFuZGxlIHZhbHVlcyBsZXNzIHRoYW4gMjBtcywgaXQgc2hvdWxkIHJlbWFpbiBhYm92ZSB0aGlzIHZhbHVlLlxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHdlIGFyZSB3YWl0aW5nIGZvciBhIFwiYnJvd3NlciByZWRyYXdcIiBiZWZvcmUgd2UgcmVtb3ZlIHRoZSAnY2MtaW52aXNpYmxlJyBjbGFzcy5cbiAgICAgIC8vIElmIHRoZSBjbGFzcyBpcyByZW12b2VkIGJlZm9yZSBhIHJlZHJhdyBjb3VsZCBoYXBwZW4sIHRoZW4gdGhlIGZhZGVJbiBlZmZlY3QgV0lMTCBOT1Qgd29yaywgYW5kXG4gICAgICAvLyB0aGUgcG9wdXAgd2lsbCBhcHBlYXIgZnJvbSBub3RoaW5nLiBUaGVyZWZvcmUgd2UgTVVTVCBhbGxvdyBlbm91Z2ggdGltZSBmb3IgdGhlIGJyb3dzZXIgdG8gZG9cbiAgICAgIC8vIGl0cyB0aGluZy4gVGhlIGFjdHVhbGx5IGRpZmZlcmVuY2UgYmV0d2VlbiB1c2luZyAwIGFuZCAyMCBpbiBhIHNldCB0aW1lb3V0IGlzIG5lZ2xlZ2libGUgYW55d2F5XG4gICAgICB0aGlzLm9wZW5pbmdUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4gdGhpcy5hZnRlckZhZGVJbihlbCksXG4gICAgICAgIGZhZGVJblRpbWVvdXRcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBuZWVkcyB0byBiZSBjYWxsZWQgYWZ0ZXIgJ2ZhZGVJbicuIFRoaXMgaXMgdGhlIGNvZGUgdGhhdCBhY3R1YWxseSBjYXVzZXMgdGhlIGZhZGVJbiB0byB3b3JrXG4gICAqIFRoZXJlIGlzIGEgZ29vZCByZWFzb24gd2h5IGl0J3MgY2FsbGVkIGluIGEgdGltZW91dC4gUmVhZCAnZmFkZUluJ1xuICAgKi9cbiAgYWZ0ZXJGYWRlSW4oIGVsZW1lbnQgKSB7XG4gICAgdGhpcy5vcGVuaW5nVGltZW91dCA9IG51bGxcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NjLWludmlzaWJsZScpXG4gIH1cblxuICBmYWRlT3V0KCkge1xuICAgIGlmICghdGhpcy5oYXNUcmFuc2l0aW9uIHx8ICF0aGlzLmVsZW1lbnQpIHJldHVyblxuXG4gICAgaWYgKHRoaXMub3BlbmluZ1RpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLm9wZW5pbmdUaW1lb3V0KVxuICAgICAgdGhpcy5hZnRlckZhZGVJbih0aGlzLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYy1pbnZpc2libGUnKSkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdGF0aWMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuc3R5bGUubWF4SGVpZ2h0ID0gJydcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSAoKSA9PiB0aGlzLmFmdGVyRmFkZU91dCh0aGlzLmVsZW1lbnQpXG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLnRyYW5zaXRpb25FbmQsIHRoaXMuYWZ0ZXJUcmFuc2l0aW9uKVxuXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2MtaW52aXNpYmxlJylcbiAgICB9XG4gIH1cblxuICBhZnRlckZhZGVPdXQoZWwpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIC8vIGFmdGVyIGNsb3NlIGFuZCBiZWZvcmUgb3BlbiwgdGhlIGRpc3BsYXkgc2hvdWxkIGJlIG5vbmVcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMudHJhbnNpdGlvbkVuZCwgdGhpcy5hZnRlclRyYW5zaXRpb24pXG4gICAgdGhpcy5hZnRlclRyYW5zaXRpb24gPSBudWxsXG4gIH1cblxuICBpc09wZW4oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZWxlbWVudCAmJlxuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICcnICYmXG4gICAgICAodGhpcy5oYXNUcmFuc2l0aW9uID8gIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NjLWludmlzaWJsZScpIDogdHJ1ZSlcbiAgICApXG4gIH1cblxuICB0b2dnbGVSZXZva2VCdXR0b24oc2hvdykge1xuICAgIGlmICh0aGlzLnJldm9rZUJ0bikgdGhpcy5yZXZva2VCdG4uc3R5bGUuZGlzcGxheSA9IHNob3cgPyAnJyA6ICdub25lJ1xuICB9XG5cbiAgcmV2b2tlQ2hvaWNlKHByZXZlbnRPcGVuKSB7XG4gICAgdGhpcy5vcHRpb25zLmVuYWJsZWQgPSB0cnVlXG4gICAgdGhpcy5jbGVhclN0YXR1c2VzKClcblxuICAgIHRoaXMuZW1pdCggXCJyZXZva2VDaG9pY2VcIiApXG5cbiAgICBpZiAoIXByZXZlbnRPcGVuKSB7XG4gICAgICB0aGlzLmF1dG9PcGVuKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFzIHRoZSB1c2VyIHJlc3BvbmRlZCB0byB0aGUgYmFubmVyXG4gICAqIEByZXR1cm4geyBib29sZWFuIH0gLSB0cnVlIGlmIGFueSBjb29raWVzIGhhdmUgYmVlbiBzZXRcbiAgICovXG4gIGhhc0Fuc3dlcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0YXR1c2VzKCkuc29tZSggc3RhdHVzID0+ICEhc3RhdHVzIClcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIGNvbnNlbnQgdG8gYWxsIG9mIHRoZSBjYXRlZ29yaWVzXG4gICAqIEByZXR1cm4geyBhcnJheTxib29sZWFuPiB9IC0gdHJ1ZSBpZiBjb25zZW50IGhhcyBiZWVuIGdpdmVuXG4gICAqL1xuICBoYXNDb25zZW50ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHVzZXMoKS5tYXAoIHN0YXR1cyA9PiBzdGF0dXMgPT09IHN0YXR1c0FsbG93IHx8IHN0YXR1cyA9PT0gc3RhdHVzRGlzbWlzcyApXG4gIH1cblxuICAvLyBvcGVucyB0aGUgcG9wdXAgaWYgbm8gYW5zd2VyIGhhcyBiZWVuIGdpdmVuXG4gIGF1dG9PcGVuKCkge1xuICAgIGNvbnN0IGhhc0Fuc3dlcmVkID0gdGhpcy5oYXNBbnN3ZXJlZCgpXG4gICAgaWYgKCFoYXNBbnN3ZXJlZCAmJiB0aGlzLm9wdGlvbnMuZW5hYmxlZCkge1xuICAgICAgdGhpcy5vcGVuKClcbiAgICB9IGVsc2UgaWYgKGhhc0Fuc3dlcmVkICYmIHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlUmV2b2tlQnV0dG9uKHRydWUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCdzIGNvb2tpZSBzdGF0dXNlc1xuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFsbE9yVW5kZWYgICAgICAtIElmIHRoaXMgaXMgdGhlIG9ubHkgcGFyYW0sIHNldCBBTEwgaWYgbm90LCBzZXQgVW5jYXRlZ29yaXplZCBjb29raWVzIHN0YXR1c2VzIHNldCB0byB2YWx1ZS5cbiAgICogQHBhcmFtIHsgc3RyaW5nPHN0YXR1cz4gfSBlc3NlbnRpYWwgICAgICAgLSBFc3NlbnRpYWwgQ29va2llcyBzdGF0dXMgc2V0IHRvIHZhbHVlXG4gICAqIEBwYXJhbSB7IHN0cmluZzxzdGF0dXM+IH0gcGVyc29uYWxpemF0aW9uIC0gUHJlZmVyZW5jZXMgLyBGdW5jdGlvbmFsaXR5IHNldCB0byB2YWx1ZVxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IGFuYWx5dGljcyAgICAgICAtIEFuYWx5dGlzIENvb2tpZXMgc3RhdHVzIHNldCB0byB2YWx1ZVxuICAgKiBAcGFyYW0geyBzdHJpbmc8c3RhdHVzPiB9IG1hcmtldGluZyAgICAgICAtIE1hcmtldGluZyBDb29raWVzIHN0YXR1cyBzZXQgdG8gdmFsdWVcbiAgICogQHJldHVybiB7IHVuZGVmaW5lZCB9XG4gICovXG4gIHNldFN0YXR1c2VzKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgZXhwaXJ5RGF5cywgZG9tYWluLCBwYXRoLCBzZWN1cmUsIHNhbWVTaXRlIH0gPSB0aGlzLm9wdGlvbnMuY29va2llXG5cbiAgICBjb25zdCB1cGRhdGVDYXRlZ29yeVN0YXR1cyA9ICggY2F0ZWdvcnlOYW1lLCBzdGF0dXMgKSA9PiB7XG4gICAgICBpZiAoaXNWYWxpZFN0YXR1cyhzdGF0dXMpKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBuYW1lKydfJytjYXRlZ29yeU5hbWVcbiAgICAgICAgY29uc3QgY2hvc2VuQmVmb3JlID0gc3RhdHVzZXMuaW5kZXhPZiggZ2V0Q29va2llKGNvb2tpZU5hbWUpICkgPj0gMFxuICAgICAgICBzZXRDb29raWUoY29va2llTmFtZSwgc3RhdHVzLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSwgc2FtZVNpdGUpXG4gICAgICAgIHRoaXMuZW1pdCggXCJzdGF0dXNDaGFuZ2VkXCIsIGNvb2tpZU5hbWUsIHN0YXR1cywgY2hvc2VuQmVmb3JlIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXJTdGF0dXNlcygpXG4gICAgICB9XG4gICAgfVxuICAgIGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApIHtcbiAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnkgPT4gdXBkYXRlQ2F0ZWdvcnlTdGF0dXMoIGNhdGVnb3J5LCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yeSBdICkgKVxuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSl7XG4gICAgICBjYXRlZ29yaWVzLmZvckVhY2goIGNhdGVnb3J5ID0+IHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCBjYXRlZ29yeSwgYXJndW1lbnRzWyAwIF0gKSApXG4gICAgfSBlbHNlIGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG4gICAgICBhcmd1bWVudHMuZm9yRWFjaCggKCBjYXRlZ29yeVN0YXR1cywgaW5kZXggKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNhdGVnb3J5U3RhdHVzKCB0aGlzLnVzZXJDYXRlZ29yaWVzWyBpbmRleCBdLCBjYXRlZ29yeVN0YXR1cyApXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNvb2tpZSBjYXRlZ29pZXMgc3RhdHVzZXNcbiAgICogQHJldHVybiB7IGFycmF5PHN0cmluZz4gfSAtIGNvb2tpZSBjYXRlZ29yaWVzIHN0YXR1cyBpbiBvcmRlciBvZiBjYXRlZ29yaWVzXG4gICAqL1xuICBnZXRTdGF0dXNlcygpIHtcbiAgICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoIGNhdGVnb3J5TmFtZSA9PiBnZXRDb29raWUodGhpcy5vcHRpb25zLmNvb2tpZS5uYW1lKydfJytjYXRlZ29yeU5hbWUpIClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgY29va2llIGNhdGVnb2llcyBzdGF0dXNlc1xuICAgKi9cbiAgY2xlYXJTdGF0dXNlcygpIHtcbiAgICBjb25zdCB7IG5hbWUsIGRvbWFpbiwgcGF0aCwgc2VjdXJlLCBzYW1lU2l0ZSB9ID0gdGhpcy5vcHRpb25zLmNvb2tpZVxuICAgIGNhdGVnb3JpZXMuZm9yRWFjaCggY2F0ZWdvcnlOYW1lID0+IHtcbiAgICAgIHNldENvb2tpZShuYW1lKydfJytjYXRlZ29yeU5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoLCBzZWN1cmUsIHNhbWVTaXRlKVxuICAgIH0pXG4gIH1cblxuICBjYW5Vc2VDb29raWVzKCkge1xuICAgIGlmICghd2luZG93Lm5hdmlnYXRvci5jb29raWVFbmFibGVkIHx8IHdpbmRvdy5Db29raWVzT0sgfHwgd2luZG93Lm5hdmlnYXRvci5Db29raWVzT0sgKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHN0YXR1c2VzVmFsdWVzID0gdGhpcy5nZXRTdGF0dXNlcygpXG4gICAgY29uc3QgbWF0Y2hlcyA9IHN0YXR1c2VzVmFsdWVzLm1hcCggKCBzdGF0dXMsIGluZGV4ICkgPT4gKCB7IFtjYXRlZ29yaWVzW2luZGV4XV06IGlzVmFsaWRTdGF0dXMoIHN0YXR1cyApIH0gKSApXG4gICAgY29uc3QgaGFzTWF0Y2hlcyA9IG1hdGNoZXMuZmlsdGVyKCBtYXRjaCA9PiBtYXRjaFtPYmplY3Qua2V5cyhtYXRjaClbMF1dICkubGVuZ3RoID4gMFxuICAgIHN0YXR1c2VzVmFsdWVzLmZvckVhY2goICggc3RhdHVzLCBpbmRleCApID0+XG4gICAgICB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjYXRlZ29yaWVzWyBpbmRleCBdIF0gPT09IHN0YXR1c1xuICAgICAgICA/IHN0YXR1cyA6IHRoaXMudXNlckNhdGVnb3JpZXNbIGNhdGVnb3JpZXNbIGluZGV4IF0gXSApXG5cbiAgICByZXR1cm4gaGFzTWF0Y2hlc1xuICB9XG5cbiAgLy8gdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0XG4gIGdldFBvc2l0aW9uQ2xhc3NlcygpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnBvc2l0aW9uLnNwbGl0KCAnLScgKS5tYXAoIHBvcyA9PiAnY2MtJytwb3MpXG4gIH1cblxuICBnZXRQb3B1cENsYXNzZXMoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9uc1xuICAgIGxldCBwb3NpdGlvblN0eWxlID1cbiAgICAgIG9wdHMucG9zaXRpb24gPT0gJ3RvcCcgfHwgb3B0cy5wb3NpdGlvbiA9PSAnYm90dG9tJ1xuICAgICAgICA/ICdiYW5uZXInXG4gICAgICAgIDogJ2Zsb2F0aW5nJ1xuXG4gICAgaWYgKGlzTW9iaWxlKCkgJiYgb3B0cy5tb2JpbGVGb3JjZUZsb2F0KSB7XG4gICAgICBwb3NpdGlvblN0eWxlID0gJ2Zsb2F0aW5nJ1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAnY2MtJyArIHBvc2l0aW9uU3R5bGUsIC8vIGZsb2F0aW5nIG9yIGJhbm5lclxuICAgICAgJ2NjLXR5cGUtJyArIG9wdHMudHlwZSwgLy8gYWRkIHRoZSBjb21wbGlhbmNlIHR5cGVcbiAgICAgICdjYy10aGVtZS0nICsgb3B0cy50aGVtZSwgLy8gYWRkIHRoZSB0aGVtZVxuICAgIF1cblxuICAgIGlmIChvcHRzLnN0YXRpYykge1xuICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1zdGF0aWMnKVxuICAgIH1cblxuICAgIGNsYXNzZXMucHVzaC5hcHBseShjbGFzc2VzLCB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpKVxuXG4gICAgLy8gd2Ugb25seSBhZGQgZXh0cmEgc3R5bGVzIGlmIGBwYWxldHRlYCBoYXMgYmVlbiBzZXQgdG8gYSB2YWxpZCB2YWx1ZVxuICAgIHRoaXMuYXR0YWNoQ3VzdG9tUGFsZXR0ZSh0aGlzLm9wdGlvbnMucGFsZXR0ZSlcblxuICAgIC8vIGlmIHdlIG92ZXJyaWRlIHRoZSBwYWxldHRlLCBhZGQgdGhlIGNsYXNzIHRoYXQgZW5hYmxlcyB0aGlzXG4gICAgaWYgKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3Rvcikge1xuICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhc3Nlc1xuICB9XG5cbiAgZ2V0UG9wdXBJbm5lck1hcmt1cCgpIHtcbiAgICBjb25zdCBpbnRlcnBvbGF0ZWQgPSB7fVxuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnNcblxuICAgIC8vIHJlbW92ZXMgbGluayBpZiBzaG93TGluayBpcyBmYWxzZVxuICAgIGlmICghb3B0cy5zaG93TGluaykge1xuICAgICAgb3B0cy5lbGVtZW50cy5saW5rID0gJydcbiAgICAgIG9wdHMuZWxlbWVudHMubWVzc2FnZWxpbmsgPSBvcHRzLmVsZW1lbnRzLm1lc3NhZ2VcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhvcHRzLmVsZW1lbnRzKS5mb3JFYWNoKCBwcm9wID0+IHtcbiAgICAgIGludGVycG9sYXRlZFtwcm9wXSA9IGludGVycG9sYXRlU3RyaW5nKFxuICAgICAgICBvcHRzLmVsZW1lbnRzW3Byb3BdLFxuICAgICAgICBuYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBzdHIgPSBvcHRzLmNvbnRlbnRbbmFtZV1cbiAgICAgICAgICByZXR1cm4gbmFtZSAmJiB0eXBlb2Ygc3RyID09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPyBzdHIgOiAnJ1xuICAgICAgICB9XG4gICAgICApXG4gICAgfSlcblxuICAgIC8vIGNoZWNrcyBpZiB0aGUgdHlwZSBpcyB2YWxpZCBhbmQgZGVmYXVsdHMgdG8gaW5mbyBpZiBpdCdzIG5vdFxuICAgIGxldCBjb21wbGlhbmNlVHlwZSA9IG9wdHMuY29tcGxpYW5jZVtvcHRzLnR5cGVdXG4gICAgaWYgKCFjb21wbGlhbmNlVHlwZSkge1xuICAgICAgY29tcGxpYW5jZVR5cGUgPSBvcHRzLmNvbXBsaWFuY2UuaW5mb1xuICAgIH1cblxuICAgIC8vIGJ1aWxkIHRoZSBjb21wbGlhbmNlIHR5cGVzIGZyb20gdGhlIGFscmVhZHkgaW50ZXJwb2xhdGVkIGBlbGVtZW50c2BcbiAgICBpbnRlcnBvbGF0ZWQuY29tcGxpYW5jZSA9IGludGVycG9sYXRlU3RyaW5nKCBjb21wbGlhbmNlVHlwZSwgbmFtZSA9PiBpbnRlcnBvbGF0ZWRbbmFtZV0gKVxuXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBsYXlvdXQgaXMgdmFsaWQgYW5kIGRlZmF1bHRzIHRvIGJhc2ljIGlmIGl0J3Mgbm90XG4gICAgbGV0IGxheW91dCA9IG9wdHMubGF5b3V0c1tvcHRzLmxheW91dF1cbiAgICBpZiAoIWxheW91dCkge1xuICAgICAgbGF5b3V0ID0gb3B0cy5sYXlvdXRzLmJhc2ljXG4gICAgfVxuXG4gICAgcmV0dXJuIGludGVycG9sYXRlU3RyaW5nKGxheW91dCwgbWF0Y2ggPT5pbnRlcnBvbGF0ZWRbbWF0Y2hdIClcbiAgfVxuXG4gIGFwcGVuZE1hcmt1cChtYXJrdXApIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb250ID1cbiAgICAgIG9wdHMuY29udGFpbmVyICYmIG9wdHMuY29udGFpbmVyLm5vZGVUeXBlID09PSAxXG4gICAgICAgID8gb3B0cy5jb250YWluZXJcbiAgICAgICAgOiBkb2N1bWVudC5ib2R5XG5cbiAgICBkaXYuaW5uZXJIVE1MID0gbWFya3VwXG5cbiAgICBjb25zdCBlbCA9IGRpdi5jaGlsZHJlblswXVxuXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuXG4gICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnY2Mtd2luZG93JykgJiYgdGhpcy5oYXNUcmFuc2l0aW9uKSB7XG4gICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjYy1pbnZpc2libGUnKVxuICAgIH1cblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5oYW5kbGVCdXR0b25DbGljayggZXZlbnQgKSApXG4gICAgZWwucXVlcnlTZWxlY3RvckFsbCggJy5jYy1idG4gW3R5cGU9XCJjaGVja2JveFwiXScgKS5mb3JFYWNoKCBjaGVja2JveCA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnVzZXJDYXRlZ29yaWVzWyBjaGVja2JveC5uYW1lIF0gPSBjaGVja2JveC5jaGVja2VkID8gJ0FMTE9XJyA6ICdERU5ZJ1xuICAgICAgfSlcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGV2ZW50ID0+IChldmVudC5zdG9wUHJvcGFnYXRpb24oKSkgKVxuICAgIH0pXG4gICAgZWwucXVlcnlTZWxlY3RvckFsbChcIi5jYy1pbmZvXCIpLmZvckVhY2goIHNob3dJbmZvID0+IHtcbiAgICAgIHNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgIGlmICggdGhpcyA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAgKSB7XG4gICAgICAgICAgdGhpcy5ibHVyKClcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGlmIChvcHRzLmF1dG9BdHRhY2gpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghY29udC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgY29udC5hcHBlbmRDaGlsZChlbClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250Lmluc2VydEJlZm9yZShlbCwgY29udC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIFwiTm8gY29udGFpbmVyIHRvIGF0dGFjaCB0b28uIE1ha2Ugc3VyZSB0aGUgRE9NIGhhcyBsb2FkZWQuIElzIHlvdXIgc2NyaXB0IGxvYWRlZCBqdXN0IGJlZm9yZSB0aGUgYDwvYm9keT5gIHRhZz9cIiApXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsXG4gIH1cblxuICBoYW5kbGVCdXR0b25DbGljayhldmVudCkge1xuICAgIC8vIHJldHVybnMgdGhlIHBhcmVudCBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCBjbGFzcywgb3IgdGhlIG9yaWdpbmFsIGVsZW1lbnQgLSBudWxsIGlmIG5vdCBmb3VuZFxuICAgIGNvbnN0IGJ0biA9IHRyYXZlcnNlRE9NUGF0aChldmVudC50YXJnZXQsICdjYy1idG4nKSB8fCBldmVudC50YXJnZXRcblxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApICYmIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoICdjYy1zYXZlJyApKXtcbiAgICAgIHRoaXMuc2V0U3RhdHVzZXMoKVxuICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYnRuJyApKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gYnRuLmNsYXNzTmFtZS5tYXRjaChcbiAgICAgICAgbmV3IFJlZ0V4cCgnXFxcXGJjYy0oJyArIHN0YXR1c2VzLm1hcCggc3RyID0+IHN0ci5yZXBsYWNlKC9bXFwtXFxbXFxdXFwvXFx7XFx9XFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcXlxcJFxcfF0vZywgJ1xcXFwkJicpICkuam9pbignfCcpICsgJylcXFxcYicpXG4gICAgICApXG4gICAgICBjb25zdCBtYXRjaCA9IChtYXRjaGVzICYmIG1hdGNoZXNbMV0pIHx8IGZhbHNlXG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNlcyhtYXRjaClcbiAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtY2xvc2UnICkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXJldm9rZScgKSkge1xuICAgICAgdGhpcy5yZXZva2VDaG9pY2UoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgYXR0YWNoQ3VzdG9tUGFsZXR0ZShwYWxldHRlKSB7XG4gICAgY29uc3QgaGFzaFN0ciA9IGhhc2goSlNPTi5zdHJpbmdpZnkocGFsZXR0ZSkpXG4gICAgY29uc3Qgc2VsZWN0b3IgPSAnY2MtY29sb3Itb3ZlcnJpZGUtJyArIGhhc2hTdHJcbiAgICBjb25zdCBpc1ZhbGlkID0gaXNQbGFpbk9iamVjdChwYWxldHRlKVxuXG4gICAgdGhpcy5jdXN0b21TdHlsZVNlbGVjdG9yID0gaXNWYWxpZCA/IHNlbGVjdG9yIDogbnVsbFxuXG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIGFkZEN1c3RvbVN0eWxlc2hlZXQoaGFzaFN0ciwgcGFsZXR0ZSwgJy4nICsgc2VsZWN0b3IpXG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkXG4gIH1cblxuXG4gIGdldEV2ZW50UGF0aCggZXZlbnQgKSB7XG4gICAgY29uc3QgcGF0aCA9IGV2ZW50LmNvbXBvc2VkUGF0aCA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpIDogKGZ1bmN0aW9uICggYXJyLCBlbGVtZW50ICkge1xuICAgICAgd2hpbGUgKCBlbGVtZW50ICkge1xuICAgICAgICBhcnIucHVzaCggZWxlbWVudCApXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGVcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnJcbiAgICB9KShbXSxldmVudC50YXJnZXQgKVxuICAgIGlmICggIXBhdGggKSB7XG4gICAgICBjb25zb2xlLndhcm4oIFwiJy5wYXRoJyAmICcuY29tcG9zZWRQYXRoJyBmYWlsZWQgdG8gZ2VuZXJhdGUgYW4gZXZlbnQgcGF0aC5cIiApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgcmV0dXJuIHBhdGhcbiAgfVxuXG4gIGFwcGx5QXV0b0Rpc21pc3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZW5hYmxlZCxcbiAgICAgIGRpc21pc3NPblRpbWVvdXQgIDogZGVsYXksXG4gICAgICBkaXNtaXNzT25TY3JvbGwgICA6c2Nyb2xsUmFuZ2UsXG4gICAgICBkaXNtaXNzT25MaW5rQ2xpY2ssXG4gICAgICBkaXNtaXNzT25XaW5kb3dDbGljayxcbiAgICAgIGRpc21pc3NPbktleVByZXNzXG4gICAgfSA9IHRoaXMub3B0aW9uc1xuXG4gICAgaWYgKCBlbmFibGVkICkge1xuICAgICAgaWYgKHR5cGVvZiBkZWxheSA9PSAnbnVtYmVyJyAmJiBkZWxheSA+PSAwKSB7XG4gICAgICAgIHRoaXMuZGlzbWlzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCAoKT0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKHN0YXR1c0Rpc21pc3MpXG4gICAgICAgICAgdGhpcy5jbG9zZSh0cnVlKVxuICAgICAgICB9LCBNYXRoLmZsb29yKGRlbGF5KSlcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNjcm9sbFJhbmdlID09ICdudW1iZXInICYmIHNjcm9sbFJhbmdlID49IDApIHtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9ICgpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gTWF0aC5mbG9vcihzY3JvbGxSYW5nZSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgICAgICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwsIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25XaW5kb3dDbGljaykge1xuICAgICAgICB0aGlzLm9uV2luZG93Q2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGlmICggIWdldEV2ZW50UGF0aCggZXZ0ICkuc29tZSggZWxlbWVudCA9PlxuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlnbm9yZUNsaWNrc0Zyb20uc29tZSggaWdub3JlZENsaWNrID0+XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCBpZ25vcmVkQ2xpY2sgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoc3RhdHVzRGlzbWlzcylcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodHJ1ZSlcblxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgICAgICAgdGhpcy5vbldpbmRvd0NsaWNrID0gbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljaylcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbldpbmRvd0NsaWNrKVxuICAgICAgfSBlbHNlIGlmIChkaXNtaXNzT25MaW5rQ2xpY2spIHtcbiAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKCBnZXRFdmVudFBhdGgoIGV2dCApLnNvbWUoIGVsZW0gPT4gdHlwZW9mIGVsZW0udGFnTmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbS50YWdOYW1lID09PSAnQScgKSApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0Rpc21pc3MgKVxuICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTGlua0NsaWNrKVxuICAgICAgICAgICAgdGhpcy5vbkxpbmtDbGljayA9IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxpbmtDbGljaylcbiAgICAgIH0gZWxzZSBpZiAoIGRpc21pc3NPbktleVByZXNzICkge1xuICAgICAgICAgIHRoaXMub25LZXlQcmVzcyA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnRcbiAgICAgICAgICAgIGlmICgga2V5Q29kZSA9PT0gMTMgKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzZXMoIHN0YXR1c0FsbG93IClcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCBrZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXR1c2VzKCBzdGF0dXNEaXNtaXNzIClcbiAgICAgICAgICAgICAgdGhpcy5jbG9zZSggdHJ1ZSApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb25rZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHlSZXZva2VCdXR0b24oKSB7XG4gICAgLy8gcmV2b2thYmxlIGlzIHRydWUgaWYgYWR2YW5jZWQgY29tcGxpYW5jZSBpcyBzZWxlY3RlZFxuICAgIGlmICh0aGlzLm9wdGlvbnMudHlwZSAhPSAnaW5mbycgJiYgdGhpcy5vcHRpb25zLnJlZ2lvbmFsTGF3ID09IHRydWUpIHRoaXMub3B0aW9ucy5yZXZva2FibGUgPSB0cnVlXG4gICAgLy8gYW5pbWF0ZVJldm9rYWJsZSBmYWxzZSBmb3IgbW9iaWxlIGRldmljZXNcbiAgICBpZiAoaXNNb2JpbGUoKSkgdGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUgPSBmYWxzZVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yZXZva2FibGUpIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSB0aGlzLmdldFBvc2l0aW9uQ2xhc3NlcygpXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFuaW1hdGVSZXZva2FibGUpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy1hbmltYXRlJylcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmN1c3RvbVN0eWxlU2VsZWN0b3IpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKHRoaXMuY3VzdG9tU3R5bGVTZWxlY3RvcilcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdjYy10aGVtZS0nK3RoaXMub3B0aW9ucy50aGVtZSlcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kgKVxuICAgICAgY29uc3QgcmV2b2tlQnRuID0gdGhpcy5vcHRpb25zLnJldm9rZUJ0blxuICAgICAgICAucmVwbGFjZSgne3tjbGFzc2VzfX0nLCBjbGFzc2VzLmpvaW4oJyAnKSlcbiAgICAgICAgLnJlcGxhY2UoJ3t7cG9saWN5fX0nLCB0aGlzLm9wdGlvbnMuY29udGVudC5wb2xpY3kpXG5cbiAgICAgIHRoaXMucmV2b2tlQnRuID0gdGhpcy5hcHBlbmRNYXJrdXAocmV2b2tlQnRuKVxuXG4gICAgICBjb25zdCBidG4gPSB0aGlzLnJldm9rZUJ0blxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5hbmltYXRlUmV2b2thYmxlKSB7XG4gICAgICAgIGNvbnN0IG9uTW91c2VNb3ZlID0gdGhyb3R0bGUoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgY29uc3QgbWluWSA9IDIwXG4gICAgICAgICAgY29uc3QgbWF4WSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDIwXG5cbiAgICAgICAgICBpZiAoICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLXRvcCcgKSAmJiBldnQuY2xpZW50WSA8IG1pblkgKSB8fFxuICAgICAgICAgICAgICAgICggYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWJvdHRvbScgKSAmJiBldnQuY2xpZW50WSA+IG1heFkgKSApIHtcbiAgICAgICAgICAgIGFjdGl2ZSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWN0aXZlICYmICFidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2MtYWN0aXZlJyApICkge1xuICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCggJ2NjLWFjdGl2ZScgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoICFhY3RpdmUgJiYgYnRuLmNsYXNzTGlzdC5jb250YWlucyggJ2NjLWFjdGl2ZScgKSApIHtcbiAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoICdjYy1hY3RpdmUnIClcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMClcblxuICAgICAgICB0aGlzLm9uTW91c2VNb3ZlID0gb25Nb3VzZU1vdmVcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBkZXN0cm95KCl7XG4gICAgY29uc29sZS53YXJuKCBcIkRlc3Ryb3lpbmcuLi5cIilcbiAgICBpZiAoIHRoaXMuZWxlbWVudCApe1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICggdGhpcy5yZXZva2VCdG4gKXtcbiAgICAgIHRoaXMucmV2b2tlQnRuLnJlbW92ZSgpXG4gICAgfVxuICAgIGlmICggdGhpcy5vbldpbmRvd1Njcm9sbCApe1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25XaW5kb3dTY3JvbGwgKVxuICAgIH1cbiAgICBpZiAoIHRoaXMub25XaW5kb3dDbGljayApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25XaW5kb3dDbGljayApXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uV2luZG93Q2xpY2spXG4gICAgfVxuICAgIGlmICggdGhpcy5vbkxpbmtDbGljayApIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MaW5rQ2xpY2spXG4gICAgfVxuICAgIGlmICggdGhpcy5vbktleVByZXNzICkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvbmtleXByZXNzJywgdGhpcy5vbktleVByZXNzIClcbiAgICB9XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gTWFrZSB0aGlzIGZhbHNlIGlmIHlvdSB3YW50IHRvIGRpc2FibGUgYWxsIHJlZ2lvbmFsIG92ZXJyaWRlcyBmb3Igc2V0dGluZ3MuXG4gIC8vIElmIHRydWUsIG9wdGlvbnMgY2FuIGRpZmZlciBieSBjb3VudHJ5LCBkZXBlbmRpbmcgb24gdGhlaXIgY29va2llIGxhdy5cbiAgLy8gSXQgZG9lcyBub3QgYWZmZWN0IGhpZGluZyB0aGUgcG9wdXAgZm9yIGNvdW50cmllcyB0aGF0IGRvIG5vdCBoYXZlIGNvb2tpZSBsYXcuXG4gIHJlZ2lvbmFsTGF3OiB0cnVlLFxuXG4gIC8vIGNvdW50cmllcyB0aGF0IGVuZm9yY2Ugc29tZSB2ZXJzaW9uIG9mIGEgY29va2llIGxhd1xuICBoYXNMYXc6IFtcbiAgICAnQVQnLFxuICAgICdBVScsXG4gICAgJ0JFJyxcbiAgICAnQkcnLFxuICAgICdCUicsXG4gICAgJ0NMJyxcbiAgICAnQ1knLFxuICAgICdDWicsXG4gICAgJ0RFJyxcbiAgICAnREsnLFxuICAgICdFRScsXG4gICAgJ0VMJyxcbiAgICAnRVMnLFxuICAgICdFVScsXG4gICAgJ0ZJJyxcbiAgICAnRlInLFxuICAgICdHQicsXG4gICAgJ0dSJyxcbiAgICAnSFInLFxuICAgICdIVScsXG4gICAgJ0lFJyxcbiAgICAnSU4nLFxuICAgICdJVCcsXG4gICAgJ0pQJyxcbiAgICAnS1InLFxuICAgICdMVCcsXG4gICAgJ0xVJyxcbiAgICAnTFYnLFxuICAgICdNVCcsXG4gICAgJ05MJyxcbiAgICAnTk8nLFxuICAgICdOWicsXG4gICAgJ1BMJyxcbiAgICAnUFQnLFxuICAgICdSTycsXG4gICAgJ1JVJyxcbiAgICAnU0UnLFxuICAgICdTSycsXG4gICAgJ1RIJyxcbiAgICAnVUsnLFxuICAgICdVUydcbiAgXSxcblxuICAvLyBjb3VudHJpZXMgdGhhdCBzYXkgdGhhdCBhbGwgY29va2llIGNvbnNlbnQgY2hvaWNlcyBtdXN0IGJlIHJldm9rYWJsZSAoYSB1c2VyIG11c3QgYmUgYWJsZSB0b28gY2hhbmdlIHRoZWlyIG1pbmQpXG4gIHJldm9rYWJsZTogW1xuICAgICdDWScsXG4gICAgJ0RFJyxcbiAgICAnREsnLFxuICAgICdFRScsXG4gICAgJ0VTJyxcbiAgICAnRlInLFxuICAgICdIUicsXG4gICAgJ0xUJyxcbiAgICAnTFYnLFxuICAgICdOTCcsXG4gICAgJ05PJyxcbiAgICAnUFQnXG4gIF0sXG5cbiAgLy8gY291bnRyaWVzIHRoYXQgc2F5IHRoYXQgYSBwZXJzb24gY2FuIG9ubHkgXCJjb25zZW50XCIgaWYgdGhlIGV4cGxpY2l0bHkgY2xpY2sgb24gXCJJIGFncmVlXCIuXG4gIC8vIGluIHRoZXNlIGNvdW50cmllcywgY29uc2VudCBjYW5ub3QgYmUgaW1wbGllZCB2aWEgYSB0aW1lb3V0IG9yIGJ5IHNjcm9sbGluZyBkb3duIHRoZSBwYWdlXG4gIGV4cGxpY2l0QWN0aW9uOiBbXG4gICAgJ0VTJyxcbiAgICAnSFInLFxuICAgICdJVCcsXG4gICAgJ05PJ1xuICBdXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuY29uc3QgdG9FcnJvciA9IG9iaiA9PiBuZXcgRXJyb3IoJ0Vycm9yIFsnICsgKG9iai5jb2RlIHx8ICdVTktOT1dOJykgKyAnXTogJyArIG9iai5lcnJvcilcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBUaGUgZGVmYXVsdCB0aW1lb3V0IGlzIDUgc2Vjb25kcy4gVGhpcyBpcyBtYWlubHkgbmVlZGVkIHRvIGNhdGNoIEpTT05QIHJlcXVlc3RzIHRoYXQgZXJyb3IuXG4gIC8vIE90aGVyd2lzZSB0aGVyZSBpcyBubyBlYXN5IHdheSB0byBjYXRjaCBKU09OUCBlcnJvcnMuIFRoYXQgbWVhbnMgdGhhdCBpZiBhIEpTT05QIGZhaWxzLCB0aGVcbiAgLy8gYXBwIHdpbGwgdGFrZSBgdGltZW91dGAgbWlsbGlzZWNvbmRzIHRvIHJlYWN0IHRvIGEgSlNPTlAgbmV0d29yayBlcnJvci5cbiAgdGltZW91dDogNTAwMCxcblxuICAvLyB0aGUgb3JkZXIgdGhhdCBzZXJ2aWNlcyB3aWxsIGJlIGF0dGVtcHRlZCBpblxuICBzZXJ2aWNlczogW1xuICAgICdmcmVlZ2VvaXAnLFxuICAgIC8vJ2lwaW5mbydcblxuICAgIC8qXG5cbiAgICAvLyAnaXBpbmZvZGInIHJlcXVpcmVzIHNvbWUgb3B0aW9ucywgc28gd2UgZGVmaW5lIGl0IHVzaW5nIGFuIG9iamVjdFxuICAgIC8vIHRoaXMgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbiB0aGF0IGRlZmluZXMgdGhlIHNlcnZpY2VcblxuICAgIHtcbiAgICAgIG5hbWU6ICdpcGluZm9kYicsXG4gICAgICBpbnRlcnBvbGF0ZVVybDoge1xuICAgICAgICAvLyBvYnZpb3VzbHksIHRoaXMgaXMgYSBmYWtlIGtleVxuICAgICAgICBhcGlfa2V5OiAndk9nSTM3NDhkbkl5dElyc0pjeFM3cXNEZjZrYkprRTlsTjR5RURyWEFxWGNLVU52ampaUG94M2VrWHFtTU1sZCdcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIGFzIHdlbGwgYXMgZGVmaW5pbmcgYW4gb2JqZWN0LCB5b3UgY2FuIGRlZmluZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3RcblxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7bmFtZTogJ2lwaW5mb2RiJ31cbiAgICB9LFxuXG4gICAgKi9cbiAgXSxcblxuICBzZXJ2aWNlRGVmaW5pdGlvbnM6IHtcbiAgICBpcGluZm86IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDogJ2h0dHBzOi8vaXBpbmZvLmlvJyxcbiAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKVxuICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKGpzb24pXG4gICAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgICAgY29kZToganNvbi5jb3VudHJ5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRoaXMgc2VydmljZSByZXF1aXJlcyBhbiBvcHRpb24gdG8gZGVmaW5lIGBrZXlgLiBPcHRpb25zIGFyZSBwcm9pdmVkIHVzaW5nIG9iamVjdHMgb3IgZnVuY3Rpb25zXG4gICAgaXBpbmZvZGI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggSlNPTiwgc28gd2Ugc2ltcGx5IG5lZWQgdG8gcGFyc2UgaXQgYW5kIHJldHVybiB0aGUgY291bnRyeSBjb2RlXG4gICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmlwaW5mb2RiLmNvbS92My9pcC1jb3VudHJ5Lz9rZXk9e2FwaV9rZXl9JmZvcm1hdD1qc29uJmNhbGxiYWNrPXtjYWxsYmFja30nLFxuICAgICAgICBpc1NjcmlwdDogdHJ1ZSwgLy8gdGhpcyBpcyBKU09OUCwgdGhlcmVmb3JlIHdlIG11c3Qgc2V0IGl0IHRvIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4ganNvbi5zdGF0dXNDb2RlID09ICdFUlJPUidcbiAgICAgICAgICAgICAgPyB0b0Vycm9yKHtlcnJvcjoganNvbi5zdGF0dXNNZXNzYWdlfSlcbiAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlDb2RlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIG1heG1pbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gVGhpcyBzZXJ2aWNlIHJlc3BvbmRzIHdpdGggYSBKYXZhU2NyaXB0IGZpbGUgd2hpY2ggZGVmaW5lcyBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuIE9uY2UgbG9hZGVkLCB3ZSBtdXN0XG4gICAgICAgIC8vIG1ha2UgYW4gYWRkaXRpb25hbCBBSkFYIGNhbGwuIFRoZXJlZm9yZSB3ZSBwcm92aWRlIGEgYGRvbmVgIGNhbGxiYWNrIHRoYXQgY2FuIGJlIGNhbGxlZCBhc3luY2hyb25vdXNseVxuICAgICAgICB1cmw6ICdodHRwczovL2pzLm1heG1pbmQuY29tL2pzL2FwaXMvZ2VvaXAyL3YyLjEvZ2VvaXAyLmpzJyxcbiAgICAgICAgaXNTY3JpcHQ6IHRydWUsIC8vIHRoaXMgc2VydmljZSByZXNwb25kcyB3aXRoIGEgSmF2YVNjcmlwdCBmaWxlLCBzbyBpdCBtdXN0IGJlIHJ1biBhcyBhIHNjcmlwdFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oZG9uZSkge1xuICAgICAgICAgIC8vIGlmIGV2ZXJ5dGhpbmcgd2VudCBva2F5IHRoZW4gYGdlb2lwMmAgV0lMTCBiZSBkZWZpbmVkXG4gICAgICAgICAgaWYgKCF3aW5kb3cuZ2VvaXAyKSB7XG4gICAgICAgICAgICBkb25lKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1VuZXhwZWN0ZWQgcmVzcG9uc2UgZm9ybWF0LiBUaGUgZG93bmxvYWRlZCBzY3JpcHQgc2hvdWxkIGhhdmUgZXhwb3J0ZWQgYGdlb2lwMmAgdG8gdGhlIGdsb2JhbCBzY29wZSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ2VvaXAyLmNvdW50cnkoXG4gICAgICAgICAgICBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGRvbmUoe1xuICAgICAgICAgICAgICAgICAgY29kZTogbG9jYXRpb24uY291bnRyeS5pc29fY29kZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgIGRvbmUodG9FcnJvcihlcnIpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcblxuICAgICAgICAgIC8vIFdlIGNhbid0IHJldHVybiBhbnl0aGluZywgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBzZWNvbmQgQUpBWCBjYWxsIHRvIHJldHVybi5cbiAgICAgICAgICAvLyBUaGVuIHdlIGNhbiAnY29tcGxldGUnIHRoZSBzZXJ2aWNlIGJ5IHBhc3NpbmcgZGF0YSBvciBhbiBlcnJvciB0byB0aGUgYGRvbmVgIGNhbGxiYWNrLlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZyZWVnZW9pcDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBUaGlzIHNlcnZpY2UgcmVzcG9uZHMgd2l0aCBKU09OLCBzbyB3ZSBzaW1wbHkgbmVlZCB0byBwYXJzZSBpdCBhbmQgcmV0dXJuIHRoZSBjb3VudHJ5IGNvZGVcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9mcmVlZ2VvaXAuYXBwL2pzb24vJyxcbiAgICAgICAgaGVhZGVyczogWydBY2NlcHQ6IGFwcGxpY2F0aW9uL2pzb24nXSxcbiAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRvbmUsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YganNvbiA9PT0gJ29iamVjdCcgJiYganNvbi5oYXNPd25Qcm9wZXJ0eSgnY291bnRyeV9jb2RlJylcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBjb2RlOiBqc29uLmNvdW50cnlfY29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiB0b0Vycm9yKHtlcnJvcjogJ0NvdWxkIG5vdCBmaW5kIGEgY291bnRyeSBjb2RlIGluIHRoZSByZXNwb25zZSd9KVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIHRvRXJyb3Ioe2Vycm9yOiAnSW52YWxpZCByZXNwb25zZSAoJyArIGVyciArICcpJ30pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgc3RhdHVzRGVueSwgc3RhdHVzQWxsb3csIHN0YXR1c0Rpc21pc3MsIGNhdGVnb3JpZXMgfSAgZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gaWYgZmFsc2UsIHRoaXMgcHJldmVudHMgdGhlIHBvcHVwIGZyb20gc2hvd2luZyAodXNlZnVsIGZvciBnaXZpbmcgdG8gY29udHJvbCB0byBhbm90aGVyIHBpZWNlIG9mIGNvZGUpXG4gIGVuYWJsZWQ6IHRydWUsXG5cbiAgLy8gb3B0aW9uYWwgKGV4cGVjdGluZyBhIEhUTUwgZWxlbWVudCkgaWYgcGFzc2VkLCB0aGUgcG9wdXAgaXMgYXBwZW5kZWQgdG8gdGhpcyBlbGVtZW50LiBkZWZhdWx0IGlzIGBkb2N1bWVudC5ib2R5YFxuICBjb250YWluZXI6IG51bGwsXG5cbiAgLy8gZGVmYXVsdHMgY29va2llIG9wdGlvbnMgLSBpdCBpcyBSRUNPTU1FTkRFRCB0byBzZXQgdGhlc2UgdmFsdWVzIHRvIGNvcnJlc3BvbmQgd2l0aCB5b3VyIHNlcnZlclxuICBjb29raWU6IHtcbiAgICAvLyBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoaXMgY29va2llIC0geW91IGNhbiBpZ25vcmUgdGhpc1xuICAgIG5hbWU6ICdjb29raWVjb25zZW50X3N0YXR1cycsXG4gICAgLy8gVGhpcyBpcyB0aGUgdXJsIHBhdGggdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgYXQgdGhpcyBsb2NhdGlvblxuICAgIHBhdGg6ICcvJyxcbiAgICAvLyBUaGlzIGlzIHRoZSBkb21haW4gdGhhdCB0aGUgY29va2llICduYW1lJyBiZWxvbmdzIHRvLiBUaGUgY29va2llIGNhbiBvbmx5IGJlIHJlYWQgb24gdGhpcyBkb21haW4uXG4gICAgLy8gIC0gR3VpZGUgdG8gY29va2llIGRvbWFpbnMgLSBodHRwczovL3d3dy5teHNhc2hhLmV1L2Jsb2cvMjAxNC8wMy8wNC9kZWZpbml0aXZlLWd1aWRlLXRvLWNvb2tpZS1kb21haW5zL1xuICAgIGRvbWFpbjogJ2xvY2FsaG9zdCcsXG4gICAgLy8gVGhlIGNvb2tpZXMgZXhwaXJlIGRhdGUsIHNwZWNpZmllZCBpbiBkYXlzIChzcGVjaWZ5IC0xIGZvciBubyBleHBpcnkpXG4gICAgZXhwaXJ5RGF5czogMzY1LFxuICAgIC8vIElmIHRydWUgdGhlIGNvb2tpZSB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgc2VjdXJlIGZsYWcuIFNlY3VyZSBjb29raWVzIHdpbGwgb25seSBiZSB0cmFuc21pdHRlZCB2aWEgSFRUUFMuXG4gICAgc2VjdXJlOiBmYWxzZSxcbiAgICAvLyBTZXRzIHRoZSBcInNhbWVTaXRlXCIgYXR0cmlidXRlIG9mIHRoZSBgY29va2llY29uc2VudF9zdGF0dXNgIGNvb2tpZVxuICAgIC8vIC0gQWxsb3dlZCBhdHRyaWJ1dGVzIGFyZSBcIkxheFwiLCBcIlN0cmljdFwiIGFuZCBcIk5vbmVcIiAoXCJOb25lXCIgaXMgb25seSBhbGxvd2VkIHdpdGggdGhlIHNlY3VyZSBmbGFnKVxuICAgIHNhbWVTaXRlOiAnTGF4J1xuICB9LFxuXG4gIC8vIGVhY2ggaXRlbSBkZWZpbmVzIHRoZSBpbm5lciB0ZXh0IGZvciB0aGUgZWxlbWVudCB0aGF0IGl0IHJlZmVyZW5jZXNcbiAgY29udGVudDoge1xuICAgIGhlYWRlciA6ICdDb29raWVzIHVzZWQgb24gdGhlIHdlYnNpdGUhJyxcbiAgICBtZXNzYWdlOiAnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBlbnN1cmUgeW91IGdldCB0aGUgYmVzdCBleHBlcmllbmNlIG9uIG91ciB3ZWJzaXRlLicsXG4gICAgZGlzbWlzczogJ0dvdCBpdCEnLFxuICAgIGFsbG93ICA6ICdBbGxvdyBjb29raWVzJyxcbiAgICBkZW55ICAgOiAnRGVjbGluZScsXG4gICAgbGluayAgIDogJ0xlYXJuIG1vcmUnLFxuICAgIGhyZWYgICA6ICdodHRwczovL3d3dy5jb29raWVzYW5keW91LmNvbScsXG4gICAgY2xvc2UgIDogJyYjeDI3NGMnLFxuICAgIHRhcmdldCA6ICdfYmxhbmsnLFxuICAgIHBvbGljeSA6ICdDb29raWUgUG9saWN5J1xuICB9LFxuXG4gIC8vIFRoaXMgaXMgdGhlIEhUTUwgZm9yIHRoZSBlbGVtZW50cyBhYm92ZS4gVGhlIHN0cmluZyB7e2hlYWRlcn19IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCB0aGUgZXF1aXZhbGVudCB0ZXh0IGJlbG93LlxuICAvLyBZb3UgY2FuIHJlbW92ZSBcInt7aGVhZGVyfX1cIiBhbmQgd3JpdGUgdGhlIGNvbnRlbnQgZGlyZWN0bHkgaW5zaWRlIHRoZSBIVE1MIGlmIHlvdSB3YW50LlxuICAvL1xuICAvLyAgLSBBUklBIHJ1bGVzIHN1Z2dlc3QgdG8gZW5zdXJlIGNvbnRyb2xzIGFyZSB0YWJiYWJsZSAoc28gdGhlIGJyb3dzZXIgY2FuIGZpbmQgdGhlIGZpcnN0IGNvbnRyb2wpLFxuICAvLyAgICBhbmQgdG8gc2V0IHRoZSBmb2N1cyB0byB0aGUgZmlyc3QgaW50ZXJhY3RpdmUgY29udHJvbCAoaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3VzaW5nLWFyaWEvKVxuICBlbGVtZW50czoge1xuICAgIGhlYWRlcjogJzxzcGFuIGNsYXNzPVwiY2MtaGVhZGVyXCI+e3toZWFkZXJ9fTwvc3Bhbj4mbmJzcCcsXG4gICAgbWVzc2FnZTpcbiAgICAgICc8c3BhbiBpZD1cImNvb2tpZWNvbnNlbnQ6ZGVzY1wiIGNsYXNzPVwiY2MtbWVzc2FnZVwiPnt7bWVzc2FnZX19PC9zcGFuPicsXG4gICAgbWVzc2FnZWxpbms6XG4gICAgICAnPHNwYW4gaWQ9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLW1lc3NhZ2VcIj57e21lc3NhZ2V9fSA8YSBhcmlhLWxhYmVsPVwibGVhcm4gbW9yZSBhYm91dCBjb29raWVzXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1saW5rXCIgaHJlZj1cInt7aHJlZn19XCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlciBub2ZvbGxvd1wiIHRhcmdldD1cInt7dGFyZ2V0fX1cIj57e2xpbmt9fTwvYT48L3NwYW4+JyxcbiAgICBkaXNtaXNzOlxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJkaXNtaXNzIGNvb2tpZSBtZXNzYWdlXCIgcm9sZT1idXR0b24gdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJjYy1idG4gY2MtJHtzdGF0dXNEaXNtaXNzfVwiPnt7ZGlzbWlzc319PC9hPmAsXG4gICAgYWxsb3c6XG4gICAgICBgPGEgYXJpYS1sYWJlbD1cImFsbG93IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiAgY2xhc3M9XCJjYy1idG4gY2MtJHtzdGF0dXNBbGxvd31cIj57e2FsbG93fX08L2E+YCxcbiAgICBkZW55OlxuICAgICAgYDxhIGFyaWEtbGFiZWw9XCJkZW55IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWJ0biBjYy0ke3N0YXR1c0Rlbnl9XCI+e3tkZW55fX08L2E+YCxcbiAgICBsaW5rOlxuICAgICAgJzxhIGFyaWEtbGFiZWw9XCJsZWFybiBtb3JlIGFib3V0IGNvb2tpZXNcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWxpbmtcIiBocmVmPVwie3tocmVmfX1cIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93XCIgdGFyZ2V0PVwie3t0YXJnZXR9fVwiPnt7bGlua319PC9hPicsXG4gICAgY2xvc2U6XG4gICAgICAnPHNwYW4gYXJpYS1sYWJlbD1cImRpc21pc3MgY29va2llIG1lc3NhZ2VcIiByb2xlPWJ1dHRvbiB0YWJpbmRleD1cIjBcIiBjbGFzcz1cImNjLWNsb3NlXCI+e3tjbG9zZX19PC9zcGFuPicsXG4gICAgY2F0ZWdvcmllczogJzx1bCBjbGFzcz1cImNjLWNhdGVnb3JpZXNcIj4nICtcbiAgICAgIGNhdGVnb3JpZXMubWFwKCAoIGNhdGVnb3J5LCBpbmRleCApID0+XG4gICAgICAgIGA8bGkgY2xhc3M9XCJjYy1jYXRlZ29yeVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYy1idG5cIiB0YWJpbmRleD1cIjBcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIiR7Y2F0ZWdvcnl9XCIvPjxzcGFuIGNsYXNzPVwiY2MtYnRuLWNoZWNrYm94XCI+PC9zcGFuPiR7Y2F0ZWdvcnl9PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1pbmZvXCIgYXJpYS1sYWJlbD1cIiR7Y2F0ZWdvcnl9IERlZmluaXRpb24gQnV0dG9uXCIgdGFiaW5kZXg9XCIke2luZGV4KzF9XCI+XjwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYy10b29sdGlwXCI+XG4gICAgICAgICAgICA8cD5UaGlzIGlzIHRoZSBjYXRlZ29yeSBmb3IgY29va2llcyB0aGF0IGRvbid0IGZpdCB0aGUgJyR7Y2F0ZWdvcnkudG9Mb3dlckNhc2UoKX0nIGNhdGVnb3J5LjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5gXG4gICAgICApLmpvaW4oXCJcIilcbiAgICAgICsgJzwvdWw+JyxcbiAgICBzYXZlOiBgPGJ1dHRvbiBjbGFzcz1cImNjLWJ0biBjYy1zYXZlXCI+U2F2ZTwvYnV0dG9uPmBcbiAgICAvL2NvbXBsaWFuY2U6IGNvbXBsaWFuY2UgaXMgYWxzbyBhbiBlbGVtZW50LCBidXQgaXQgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBhcHBsaWNhdGlvbiwgZGVwZW5kaW5nIG9uIGB0eXBlYCBiZWxvd1xuICB9LFxuXG4gIC8vIFRoZSBwbGFjZWhvbGRlcnMge3tjbGFzc2VzfX0gYW5kIHt7Y2hpbGRyZW59fSBib3RoIGdldCByZXBsYWNlZCBkdXJpbmcgaW5pdGlhbGlzYXRpb246XG4gIC8vICAtIHt7Y2xhc3Nlc319IGlzIHdoZXJlIGFkZGl0aW9uYWwgY2xhc3NlcyBnZXQgYWRkZWRcbiAgLy8gIC0ge3tjaGlsZHJlbn19IGlzIHdoZXJlIHRoZSBIVE1MIGNoaWxkcmVuIGFyZSBwbGFjZWRcbiAgd2luZG93OlxuICAgICc8ZGl2IHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIiBhcmlhLWxhYmVsPVwiY29va2llY29uc2VudFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJjb29raWVjb25zZW50OmRlc2NcIiBjbGFzcz1cImNjLXdpbmRvdyB7e2NsYXNzZXN9fVwiPjwhLS1nb29nbGVvZmY6IGFsbC0tPnt7Y2hpbGRyZW59fTwhLS1nb29nbGVvbjogYWxsLS0+PC9kaXY+JyxcblxuICBtb2RhbDogJycsXG5cbiAgLy8gVGhpcyBpcyB0aGUgaHRtbCBmb3IgdGhlIHJldm9rZSBidXR0b24uIFRoaXMgb25seSBzaG93cyB1cCBhZnRlciB0aGUgdXNlciBoYXMgc2VsZWN0ZWQgdGhlaXIgbGV2ZWwgb2YgY29uc2VudFxuICAvLyBJdCBjYW4gYmUgZW5hYmxlZCBvZiBkaXNhYmxlZCB1c2luZyB0aGUgYHJldm9rYWJsZWAgb3B0aW9uXG4gIHJldm9rZUJ0bjogJzxkaXYgY2xhc3M9XCJjYy1yZXZva2Uge3tjbGFzc2VzfX1cIj57e3BvbGljeX19PC9kaXY+JyxcblxuICAvLyBkZWZpbmUgdHlwZXMgb2YgJ2NvbXBsaWFuY2UnIGhlcmUuICd7e3ZhbHVlfX0nIHN0cmluZ3MgaW4gaGVyZSBhcmUgbGlua2VkIHRvIGBlbGVtZW50c2BcbiAgY29tcGxpYW5jZToge1xuICAgIGluZm86ICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZVwiPnt7ZGlzbWlzc319PC9kaXY+JyxcbiAgICAnb3B0LWluJzpcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7YWxsb3d9fXt7Y3VzdG9taXplfX08L2Rpdj4nLFxuICAgICdvcHQtb3V0JzpcbiAgICAgICc8ZGl2IGNsYXNzPVwiY2MtY29tcGxpYW5jZSBjYy1oaWdobGlnaHRcIj57e2Rpc21pc3N9fXt7ZGVueX19PC9kaXY+JyxcbiAgICBjYXRlZ29yaWVzOiAnPGRpdiBjbGFzcz1cImZvcm1cIj57e2NhdGVnb3JpZXN9fXt7c2F2ZX19PC9kaXY+J1xuICB9LFxuXG4gIC8vIHNlbGVjdCB5b3VyIHR5cGUgb2YgcG9wdXAgaGVyZVxuICB0eXBlOiAnaW5mbycsIC8vIHJlZmVycyB0byBgY29tcGxpYW5jZWAgKGluIG90aGVyIHdvcmRzLCB0aGUgYnV0dG9ucyB0aGF0IGFyZSBkaXNwbGF5ZWQpXG5cbiAgLy8gZGVmaW5lIGxheW91dCBsYXlvdXRzIGhlcmVcbiAgbGF5b3V0czoge1xuICAgIC8vIHRoZSAnYmxvY2snIGxheW91dCB0ZW5kIHRvIGJlIGZvciBzcXVhcmUgZmxvYXRpbmcgcG9wdXBzXG4gICAgYmFzaWMgICAgICAgICA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fScsXG4gICAgJ2Jhc2ljLWNsb3NlJyA6ICd7e21lc3NhZ2VsaW5rfX17e2NvbXBsaWFuY2V9fXt7Y2xvc2V9fScsXG4gICAgJ2Jhc2ljLWhlYWRlcic6ICd7e2hlYWRlcn19e3ttZXNzYWdlfX17e2xpbmt9fXt7Y29tcGxpYW5jZX19J1xuICAgIC8vIGFkZCBhIGN1c3RvbSBsYXlvdXQgaGVyZSwgdGhlbiBhZGQgc29tZSBuZXcgY3NzIHdpdGggdGhlIGNsYXNzICcuY2MtbGF5b3V0LW15LWNvb2wtbGF5b3V0J1xuICAgIC8vJ215LWNvb2wtbGF5b3V0JzogJzxkaXYgY2xhc3M9XCJteS1zcGVjaWFsLWxheW91dFwiPnt7bWVzc2FnZX19e3tjb21wbGlhbmNlfX08L2Rpdj57e2Nsb3NlfX0nLFxuICB9LFxuXG4gIC8vIGRlZmF1bHQgbGF5b3V0IChzZWUgYWJvdmUpXG4gIGxheW91dDogJ2Jhc2ljJyxcblxuICAvLyB0aGlzIHJlZmVycyB0byB0aGUgcG9wdXAgd2luZG93cyBwb3NpdGlvbi4gd2UgY3VycmVudGx5IHN1cHBvcnQ6XG4gIC8vICAtIGJhbm5lciBwb3NpdGlvbnM6IHRvcCwgYm90dG9tXG4gIC8vICAtIGZsb2F0aW5nIHBvc2l0aW9uczogdG9wLWxlZnQsIHRvcC1yaWdodCwgYm90dG9tLWxlZnQsIGJvdHRvbS1yaWdodFxuICAvL1xuICAvLyBhZGRzIGEgY2xhc3MgYGNjLWZsb2F0aW5nYCBvciBgY2MtYmFubmVyYCB3aGljaCBoZWxwcyB3aGVuIHN0eWxpbmdcbiAgcG9zaXRpb246ICdib3R0b20nLCAvLyBkZWZhdWx0IHBvc2l0aW9uIGlzICdib3R0b20nXG5cbiAgLy8gQXZhaWxhYmxlIHN0eWxlc1xuICAvLyAgICAtYmxvY2sgKGRlZmF1bHQsIG5vIGV4dHJhIGNsYXNzZXMpXG4gIC8vICAgIC1lZGdlbGVzc1xuICAvLyAgICAtY2xhc3NpY1xuICAvLyB1c2UgeW91ciBvd24gc3R5bGUgbmFtZSBhbmQgdXNlIGAuY2MtdGhlbWUtU1RZTEVOQU1FYCBjbGFzcyBpbiBDU1MgdG8gZWRpdC5cbiAgLy8gTm90ZTogc3R5bGUgXCJ3aXJlXCIgaXMgdXNlZCBmb3IgdGhlIGNvbmZpZ3VyYXRvciwgYnV0IGhhcyBubyBDU1Mgc3R5bGVzIG9mIGl0cyBvd24sIG9ubHkgcGFsZXR0ZSBpcyB1c2VkLlxuICB0aGVtZTogJ2Jsb2NrJyxcblxuICAvLyBUaGUgcG9wdXAgaXMgYGZpeGVkYCBieSBkZWZhdWx0LCBidXQgaWYgeW91IHdhbnQgaXQgdG8gYmUgc3RhdGljIChpbmxpbmUgd2l0aCB0aGUgcGFnZSBjb250ZW50KSwgc2V0IHRoaXMgdG8gZmFsc2VcbiAgLy8gTm90ZTogYnkgZGVmYXVsdCwgd2UgYW5pbWF0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwb3B1cCBmcm9tIDAgdG8gZnVsbCBzaXplXG4gIHN0YXRpYzogZmFsc2UsXG5cbiAgLy8gaWYgeW91IHdhbnQgY3VzdG9tIGNvbG91cnMsIHBhc3MgdGhlbSBpbiBoZXJlLiB0aGlzIG9iamVjdCBzaG91bGQgbG9vayBsaWtlIHRoaXMuXG4gIC8vIGlkZWFsbHksIGFueSBjdXN0b20gY29sb3Vycy90aGVtZXMgc2hvdWxkIGJlIGNyZWF0ZWQgaW4gYSBzZXBhcmF0ZSBzdHlsZSBzaGVldCwgYXMgdGhpcyBpcyBtb3JlIGVmZmljaWVudC5cbiAgLy8gICB7XG4gIC8vICAgICBwb3B1cDoge2JhY2tncm91bmQ6ICcjMDAwMDAwJywgdGV4dDogJyNmZmYnLCBsaW5rOiAnI2ZmZid9LFxuICAvLyAgICAgYnV0dG9uOiB7YmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JywgYm9yZGVyOiAnI2Y4ZTcxYycsIHRleHQ6ICcjZjhlNzFjJ30sXG4gIC8vICAgICBoaWdobGlnaHQ6IHtiYWNrZ3JvdW5kOiAnI2Y4ZTcxYycsIGJvcmRlcjogJyNmOGU3MWMnLCB0ZXh0OiAnIzAwMDAwMCd9LFxuICAvLyAgIH1cbiAgLy8gYGhpZ2hsaWdodGAgaXMgb3B0aW9uYWwgYW5kIGV4dGVuZHMgYGJ1dHRvbmAuIGlmIGl0IGV4aXN0cywgaXQgd2lsbCBhcHBseSB0byB0aGUgZmlyc3QgYnV0dG9uXG4gIC8vIG9ubHkgYmFja2dyb3VuZCBuZWVkcyB0byBiZSBkZWZpbmVkIGZvciBldmVyeSBlbGVtZW50LiBpZiBub3Qgc2V0LCBvdGhlciBjb2xvcnMgY2FuIGJlIGNhbGN1bGF0ZWQgZnJvbSBpdFxuICBwYWxldHRlOiBudWxsLFxuXG4gIC8vIFNvbWUgY291bnRyaWVzIFJFUVVJUkUgdGhhdCBhIHVzZXIgY2FuIGNoYW5nZSB0aGVpciBtaW5kLiBZb3UgY2FuIGNvbmZpZ3VyZSB0aGlzIHlvdXJzZWxmLlxuICAvLyBNb3N0IG9mIHRoZSB0aW1lIHRoaXMgc2hvdWxkIGJlIGZhbHNlLCBidXQgdGhlIGBjb29raWVjb25zZW50LmxlZ2FsYCBjYW4gY2hhbmdlIHRoaXMgdG8gYHRydWVgIGlmIGl0IGRldGVjdHMgdGhhdCBpdCBzaG91bGRcbiAgcmV2b2thYmxlOiBmYWxzZSxcblxuICAvLyBpZiB0cnVlLCB0aGUgcmV2b2thYmxlIGJ1dHRvbiB3aWxsIHRyYW5sYXRlIGluIGFuZCBvdXRcbiAgYW5pbWF0ZVJldm9rYWJsZTogdHJ1ZSxcblxuICAvLyB1c2VkIHRvIGRpc2FibGUgbGluayBvbiBleGlzdGluZyBsYXlvdXRzXG4gIC8vIHJlcGxhY2VzIGVsZW1lbnQgbWVzc2FnZWxpbmsgd2l0aCBtZXNzYWdlIGFuZCByZW1vdmVzIGNvbnRlbnQgb2YgbGlua1xuICBzaG93TGluazogdHJ1ZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgc2Nyb2xsIHJhbmdlIHRvIGVuYWJsZVxuICBkaXNtaXNzT25TY3JvbGw6IGZhbHNlLFxuXG4gIC8vIHNldCB2YWx1ZSBhcyB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBhdXRvZGlzbWlzcyBhZnRlciBzZXQgdGltZVxuICBkaXNtaXNzT25UaW1lb3V0OiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gIGRpc21pc3NPbldpbmRvd0NsaWNrOiBmYWxzZSxcblxuICAvLyBzZXQgdmFsdWUgYXMgY2xpY2sgYW55dGhpbmcgb24gdGhlIHBhZ2UsIGV4Y2x1ZGluZyB0aGUgYGlnbm9yZUNsaWNrc0Zyb21gIGJlbG93IChpZiB3ZSBjbGljayBvbiB0aGUgcmV2b2tlIGJ1dHRvbiBldGMpXG4gIGRpc21pc3NPbkxpbmtDbGljazogZmFsc2UsXG5cbiAgLy8gc2V0IHZhbHVlIGFzIGtleXMgYXJlIHByZXNzZWQsICggYWxsb3dLZXlDb2RlID0gMTMsIGRlbnlLZXlDb2RlID0gMjcgKVxuICBkaXNtaXNzT25LZXlQcmVzczogZmFsc2UsXG5cbiAgLy8gSWYgYGRpc21pc3NPbldpbmRvd0NsaWNrYCBpcyB0cnVlLCB3ZSBjYW4gY2xpY2sgb24gJ3Jldm9rZScgYW5kIHdlJ2xsIHN0aWxsIGRpc21pc3MgdGhlIGJhbm5lciwgc28gd2UgbmVlZCBleGNlcHRpb25zLlxuICAvLyBzaG91bGQgYmUgYW4gYXJyYXkgb2YgY2xhc3MgbmFtZXMgKG5vdCBDU1Mgc2VsZWN0b3JzKVxuICBpZ25vcmVDbGlja3NGcm9tOiBbJ2NjLXJldm9rZScsICdjYy1idG4nLCAnY2MtbGluayddLCAvLyBhbHJlYWR5IGluY2x1ZGVzIHRoZSByZXZva2UgYnV0dG9uIGFuZCB0aGUgYmFubmVyIGl0c2VsZlxuXG4gIC8vIFRoZSBhcHBsaWNhdGlvbiBhdXRvbWF0aWNhbGx5IGRlY2lkZSB3aGV0aGVyIHRoZSBwb3B1cCBzaG91bGQgb3Blbi5cbiAgLy8gU2V0IHRoaXMgdG8gZmFsc2UgdG8gcHJldmVudCB0aGlzIGZyb20gaGFwcGVuaW5nIGFuZCB0byBhbGxvdyB5b3UgdG8gY29udHJvbCB0aGUgYmVoYXZpb3VyIHlvdXJzZWxmXG4gIGF1dG9PcGVuOiB0cnVlLFxuXG4gIC8vIEJ5IGRlZmF1bHQgdGhlIGNyZWF0ZWQgSFRNTCBpcyBhdXRvbWF0aWNhbGx5IGFwcGVuZGVkIHRvIHRoZSBjb250YWluZXIgKHdoaWNoIGRlZmF1bHRzIHRvIDxib2R5PikuIFlvdSBjYW4gcHJldmVudCB0aGlzIGJlaGF2aW91clxuICAvLyBieSBzZXR0aW5nIHRoaXMgdG8gZmFsc2UsIGJ1dCBpZiB5b3UgZG8sIHlvdSBtdXN0IGF0dGFjaCB0aGUgYGVsZW1lbnRgIHlvdXJzZWxmLCB3aGljaCBpcyBhIHB1YmxpYyBwcm9wZXJ0eSBvZiB0aGUgcG9wdXAgaW5zdGFuY2U6XG4gIC8vXG4gIC8vICAgICBjb25zdCBpbnN0YW5jZSA9IGNvb2tpZWNvbnNlbnQuZmFjdG9yeShvcHRpb25zKVxuICAvLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnN0YW5jZS5lbGVtZW50KVxuICAvL1xuICBhdXRvQXR0YWNoOiB0cnVlLFxuXG4gIC8vIHNldCB2YWx1ZSBpZiBmbG9hdGluZyBsYXlvdXQgc2hvdWxkIGJlIGZvcmNlZCBmb3IgbW9iaWxlIGRldmljZXNcbiAgbW9iaWxlRm9yY2VGbG9hdDogdHJ1ZSxcblxuICAvLyBzaW1wbGUgd2hpdGVsaXN0L2JsYWNrbGlzdCBmb3IgcGFnZXMuIHNwZWNpZnkgcGFnZSBieTpcbiAgLy8gICAtIHVzaW5nIGEgc3RyaW5nIDogJy9pbmRleC5odG1sJyAgICAgICAgICAgKG1hdGNoZXMgJy9pbmRleC5odG1sJyBleGFjdGx5KSBPUlxuICAvLyAgIC0gdXNpbmcgUmVnRXhwICAgOiAvXFwvcGFnZV9bXFxkXStcXC5odG1sLyAgICAobWF0Y2hlZCAnL3BhZ2VfMS5odG1sJyBhbmQgJy9wYWdlXzIuaHRtbCcgZXRjKVxuICB3aGl0ZWxpc3RQYWdlOiBbXSxcbiAgYmxhY2tsaXN0UGFnZTogW10sXG5cbiAgLy8gSWYgdGhpcyBpcyBkZWZpbmVkLCB0aGVuIGl0IGlzIHVzZWQgYXMgdGhlIGlubmVyIGh0bWwgaW5zdGVhZCBvZiBsYXlvdXQuIFRoaXMgYWxsb3dzIGZvciB1bHRpbWF0ZSBjdXN0b21pc2F0aW9uLlxuICAvLyBCZSBzdXJlIHRvIHVzZSB0aGUgY2xhc3NlcyBgY2MtYnRuYCBhbmQgYGNjLUFMTE9XYCwgYGNjLURFTllgIG9yIGBjYy1ESVNNSVNTYC4gVGhleSBlbmFibGUgdGhlIGFwcCB0byByZWdpc3RlciBjbGlja1xuICAvLyBoYW5kbGVycy4gWW91IGNhbiB1c2Ugb3RoZXIgcHJlLWV4aXN0aW5nIGNsYXNzZXMgdG9vLiBTZWUgYHNyYy9zdHlsZXNgIGZvbGRlci5cbiAgb3ZlcnJpZGVIVE1MOiBudWxsXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3QgZ2V0U2NyaXB0ID0gKCB1cmwsIGNhbGxiYWNrLCB0aW1lb3V0ICkgPT4ge1xuICBsZXQgdGltZW91dElkeFxuICBjb25zdCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gIHNjcmlwdFRhZy50eXBlID0gJ3RleHQvJyArICh1cmwudHlwZSB8fCAnamF2YXNjcmlwdCcpXG4gIHNjcmlwdFRhZy5zcmMgPSB1cmwuc3JjIHx8IHVybFxuICBzY3JpcHRUYWcuYXN5bmMgPSBmYWxzZVxuXG4gIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHRoaXMgY29kZSBoYW5kbGVzIHR3byBzY2VuYXJpb3MsIHdoZXRoZXIgY2FsbGVkIGJ5IG9ubG9hZCBvciBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICBjb25zdCBzdGF0ZSA9IHNjcmlwdFRhZy5yZWFkeVN0YXRlXG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkeClcblxuICAgIGlmICghY2FsbGJhY2suZG9uZSAmJiAoIXN0YXRlIHx8IC9sb2FkZWR8Y29tcGxldGUvLnRlc3Qoc3RhdGUpKSkge1xuICAgICAgY2FsbGJhY2suZG9uZSA9IHRydWVcbiAgICAgIGNhbGxiYWNrKClcbiAgICAgIHNjcmlwdFRhZy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBzY3JpcHRUYWcub25sb2FkID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKVxuXG4gIC8vIFlvdSBjYW4ndCBjYXRjaCBKU09OUCBFcnJvcnMsIGJlY2F1c2UgaXQncyBoYW5kbGVkIGJ5IHRoZSBzY3JpcHQgdGFnXG4gIC8vIG9uZSB3YXkgaXMgdG8gdXNlIGEgdGltZW91dFxuICB0aW1lb3V0SWR4ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjYWxsYmFjay5kb25lID0gdHJ1ZVxuICAgIGNhbGxiYWNrKClcbiAgICBzY3JpcHRUYWcub25yZWFkeXN0YXRlY2hhbmdlID0gc2NyaXB0VGFnLm9ubG9hZCA9IG51bGxcbiAgfSwgdGltZW91dClcbn1cblxuZXhwb3J0IGNvbnN0IG1ha2VBc3luY1JlcXVlc3QgPSAoIHVybCwgb25Db21wbGV0ZSwgdGltZW91dCwgcG9zdERhdGEsIHJlcXVlc3RIZWFkZXJzICkgPT4ge1xuICBjb25zdCB4aHIgPSBuZXcgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuQWN0aXZlWE9iamVjdCkoXG4gICAgJ01TWE1MMi5YTUxIVFRQLjMuMCdcbiAgKVxuXG4gIHhoci5vcGVuKHBvc3REYXRhID8gJ1BPU1QnIDogJ0dFVCcsIHVybCwgMSlcblxuICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJlcXVlc3RIZWFkZXJzKSkge1xuICAgIGZvciAobGV0IGkgPSAwLCBsID0gcmVxdWVzdEhlYWRlcnMubGVuZ3RoOyBpIDwgbDsgKytpKSB7XG4gICAgICBjb25zdCBzcGxpdCA9IHJlcXVlc3RIZWFkZXJzW2ldLnNwbGl0KCc6JywgMilcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFxuICAgICAgICBzcGxpdFswXS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyksXG4gICAgICAgIHNwbGl0WzFdLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygb25Db21wbGV0ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID4gMykge1xuICAgICAgICBvbkNvbXBsZXRlKHhocilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB4aHIuc2VuZChwb3N0RGF0YSlcbn0iLCJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gbmFtZSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gJyAnICsgZG9jdW1lbnQuY29va2llXG4gIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJyAnICsgbmFtZSArICc9JylcbiAgcmV0dXJuIHBhcnRzLmxlbmd0aCA8IDJcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogcGFydHNcbiAgICAgICAgLnBvcCgpXG4gICAgICAgIC5zcGxpdCgnOycpXG4gICAgICAgIC5zaGlmdCgpXG59XG5cbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSBmdW5jdGlvbiAoIG5hbWUsIHZhbHVlLCBleHBpcnlEYXlzLCBkb21haW4sIHBhdGgsIHNlY3VyZSwgc2FtZVNpdGUgKSB7XG4gIGNvbnN0IGV4ZGF0ZSA9IG5ldyBEYXRlKClcbiAgZXhkYXRlLnNldEhvdXJzKGV4ZGF0ZS5nZXRIb3VycygpICsgKCh0eXBlb2YgZXhwaXJ5RGF5cyAhPT0gXCJudW1iZXJcIiAgPyAzNjUgOiBleHBpcnlEYXlzICkgKiAyNCkpXG5cbiAgbGV0IGNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZVxuICBjb29raWUgKz0gJzsgRXhwaXJlcz0nICsgZXhkYXRlLnRvVVRDU3RyaW5nKClcbiAgY29va2llICs9ICc7IFBhdGg9JyArIChwYXRoIHx8ICcvJylcbiAgaWYgKGRvbWFpbikge1xuICAgIGNvb2tpZSArPSAnOyBEb21haW49JyArIGRvbWFpblxuICB9XG4gIGlmIChzYW1lU2l0ZSkge1xuICAgIGNvbnN0IHNhbWVTaXRlTG93ZXJDYXNlID0gc2FtZVNpdGUudG9Mb3dlckNhc2UoKVxuICAgIGlmIChbJ2xheCcsICdzdHJpY3QnLCAnbm9uZSddLmluY2x1ZGVzKHNhbWVTaXRlTG93ZXJDYXNlKSkge1xuICAgICAgY29va2llICs9ICc7IFNhbWVTaXRlPScgKyBzYW1lU2l0ZVxuICAgICAgaWYgKHNhbWVTaXRlTG93ZXJDYXNlID09PSAnbm9uZScgJiYgIXNlY3VyZSkge1xuICAgICAgICBzZWN1cmUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChzZWN1cmUpIHtcbiAgICBjb29raWUgKz0gJzsgU2VjdXJlJ1xuICB9XG5cbiAgZG9jdW1lbnQuY29va2llID0gY29va2llXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0IHsgZ2V0Q29udHJhc3QsIGdldEhvdmVyQ29sb3IgfSBmcm9tICcuL3N0eWxlJ1xuXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gKCBlbGVtLCBjbGFzc05hbWUgKSA9PlxuICAhZWxlbSB8fCAhZWxlbS5wYXJlbnROb2RlXG4gID8gbnVsbCA6IGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgPyBlbGVtIDogdHJhdmVyc2VET01QYXRoKGVsZW0ucGFyZW50Tm9kZSwgY2xhc3NOYW1lKVxuXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tU3R5bGVzaGVldCA9IChpZCwgcGFsZXR0ZSwgcHJlZml4KSA9PiB7XG4gIGNvbnN0IGNvbG9yU3R5bGVzID0ge31cbiAgY29uc3QgeyBwb3B1cCwgYnV0dG9uLCBoaWdobGlnaHQsIHNhdmVCdXR0b24gfSA9IHBhbGV0dGVcblxuICAvLyBuZWVkcyBiYWNrZ3JvdW5kIGNvbG91ciwgdGV4dCBhbmQgbGluayB3aWxsIGJlIHNldCB0byBibGFjay93aGl0ZSBpZiBub3Qgc3BlY2lmaWVkXG4gIGlmIChwb3B1cCkge1xuICAgICAgLy8gYXNzdW1lcyBwb3B1cC5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgcG9wdXAudGV4dCA9IHBvcHVwLnRleHQgPyBwb3B1cC50ZXh0IDogZ2V0Q29udHJhc3QocG9wdXAuYmFja2dyb3VuZClcbiAgICAgIHBvcHVwLmxpbmsgPSBwb3B1cC5saW5rID8gcG9wdXAubGluayA6IHBvcHVwLnRleHRcbiAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLXRvb2x0aXAsICcgKyBwcmVmaXggKyAnIC5jYy10b29sdGlwOmFmdGVyJ10gPSBbXG4gICAgICAgICAgJ2NvbG9yOiAnICsgcG9wdXAudGV4dCxcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIHBvcHVwLmJhY2tncm91bmQsXG4gICAgICBdXG4gICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnLmNjLXdpbmRvdyddID0gW1xuICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6ICcgKyBwb3B1cC5iYWNrZ3JvdW5kLFxuICAgICAgXVxuICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJy5jYy1yZXZva2UnXSA9IFtcbiAgICAgICAgICAnY29sb3I6ICcgKyBwb3B1cC50ZXh0LFxuICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgcG9wdXAuYmFja2dyb3VuZCxcbiAgICAgIF1cbiAgICAgIGNvbG9yU3R5bGVzW1xuICAgICAgICAgIHByZWZpeCArICcgLmNjLWxpbmssJyArIHByZWZpeCArICcgLmNjLWxpbms6YWN0aXZlLCcgKyBwcmVmaXggKyAnIC5jYy1saW5rOnZpc2l0ZWQnXG4gICAgICBdID0gWydjb2xvcjogJyArIHBvcHVwLmxpbmtdXG5cbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAvLyBhc3N1bWVzIGJ1dHRvbi5iYWNrZ3JvdW5kIGlzIHNldFxuICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gYnV0dG9uLnRleHQgPyBidXR0b24udGV4dCA6IGdldENvbnRyYXN0KGJ1dHRvbi5iYWNrZ3JvdW5kKTtcbiAgICAgICAgICBidXR0b24uYm9yZGVyID0gYnV0dG9uLmJvcmRlciA/IGJ1dHRvbi5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddID0gW1xuICAgICAgICAgICAgICAnY29sb3I6ICcgKyBidXR0b24udGV4dCxcbiAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcjogJyArIGJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYnV0dG9uLmJhY2tncm91bmQsXG4gICAgICAgICAgXVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5wYWRkaW5nKSB7XG4gICAgICAgICAgICAgIGNvbG9yU3R5bGVzW3ByZWZpeCArICcgLmNjLWJ0biddLnB1c2goJ3BhZGRpbmc6ICcgKyBidXR0b24ucGFkZGluZyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGJ1dHRvbi5iYWNrZ3JvdW5kICE9ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtYnRuOmhvdmVyLCAnICsgcHJlZml4ICsgJyAuY2MtYnRuOmZvY3VzJ10gPSBbXG4gICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjogJyArIChidXR0b24uaG92ZXIgfHwgZ2V0SG92ZXJDb2xvcihidXR0b24uYmFja2dyb3VuZCkpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAvL2Fzc3VtZXMgaGlnaGxpZ2h0LmJhY2tncm91bmQgaXMgc2V0XG4gICAgICAgICAgICAgIGhpZ2hsaWdodC50ZXh0ID0gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgICAgID8gaGlnaGxpZ2h0LnRleHRcbiAgICAgICAgICAgICAgICAgIDogZ2V0Q29udHJhc3QoaGlnaGxpZ2h0LmJhY2tncm91bmQpO1xuICAgICAgICAgICAgICBoaWdobGlnaHQuYm9yZGVyID0gaGlnaGxpZ2h0LmJvcmRlciA/IGhpZ2hsaWdodC5ib3JkZXIgOiAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgICAgICBjb2xvclN0eWxlc1twcmVmaXggKyAnIC5jYy1oaWdobGlnaHQgLmNjLWJ0bjpmaXJzdC1jaGlsZCddID0gW1xuICAgICAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgaGlnaGxpZ2h0LnRleHQsXG4gICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJvcmRlcixcbiAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgaGlnaGxpZ2h0LmJhY2tncm91bmQsXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBzZXRzIGhpZ2hsaWdodCB0ZXh0IGNvbG9yIHRvIHBvcHVwIHRleHQuIGJhY2tncm91bmQgYW5kIGJvcmRlciBhcmUgdHJhbnNwYXJlbnQgYnkgZGVmYXVsdC5cbiAgICAgICAgICAgICAgY29sb3JTdHlsZXNbcHJlZml4ICsgJyAuY2MtaGlnaGxpZ2h0IC5jYy1idG46Zmlyc3QtY2hpbGQnXSA9IFtcbiAgICAgICAgICAgICAgICAgICdjb2xvcjogJyArIHBvcHVwLnRleHQsXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzYXZlQnV0dG9uKSB7XG4gICAgICAgICAgY29sb3JTdHlsZXNbYCR7cHJlZml4fSAuY2MtYnRuLmNjLXNhdmVgXSA9IFtcbiAgICAgICAgICAgICAgJ2NvbG9yOiAnICsgc2F2ZUJ1dHRvbi50ZXh0LFxuICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5ib3JkZXIsXG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgc2F2ZUJ1dHRvbi5iYWNrZ3JvdW5kLFxuICAgICAgICAgIF1cbiAgICAgIH1cbiAgfVxuXG4gIC8vIHRoaXMgd2lsbCBiZSBpbnRlcnByZXR0ZWQgYXMgQ1NTLiB0aGUga2V5IGlzIHRoZSBzZWxlY3RvciwgYW5kIGVhY2ggYXJyYXkgZWxlbWVudCBpcyBhIHJ1bGVcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlLmlkID0gaWRcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc3R5bGUgKVxuICBPYmplY3QuZW50cmllcyggY29sb3JTdHlsZXMgKS5mb3JFYWNoKCAoIFsgcHJvcCwgdmFsdWUgXSwgaW5kZXggKSA9PlxuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUoIGAke3Byb3B9eyR7dmFsdWUuam9pbignOycpfX1gLCBpbmRleCApXG4gIClcbiAgcmV0dXJuIHN0eWxlXG59IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0ICogYXMgY29va2llIGZyb20gXCIuL2Nvb2tpZVwiXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gY29va2llLmdldENvb2tpZVxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IGNvb2tpZS5zZXRDb29raWVcblxuXG5leHBvcnQgY29uc3QgaW50ZXJwb2xhdGVTdHJpbmcgPSAoIHN0ciwgY2FsbGJhY2sgKSA9PlxuICBzdHIucmVwbGFjZSggL3t7KFthLXpdW2EtejAtOVxcLV9dKil9fS9naSAsICggbWF0Y2hlcywgcmVwbGFjZWQgKSA9PiBjYWxsYmFjayggcmVwbGFjZWQgKSB8fCAnJylcblxuLy8gb25seSB1c2VkIGZvciB0aHJvdHRsaW5nIHRoZSAnbW91c2Vtb3ZlJyBldmVudCAodXNlZCBmb3IgYW5pbWF0aW5nIHRoZSByZXZva2UgYnV0dG9uIHdoZW4gYGFuaW1hdGVSZXZva2FibGVgIGlzIHRydWUpXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoY2FsbGJhY2ssIGxpbWl0KSA9PiB7XG4gIGxldCB3YWl0ID0gZmFsc2VcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmICghd2FpdCkge1xuICAgICAgY2FsbGJhY2soLi4uYXJndW1lbnRzKVxuICAgICAgd2FpdCA9IHRydWVcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdhaXQgPSBmYWxzZVxuICAgICAgfSwgbGltaXQpXG4gICAgfVxuICB9XG59XG5cbi8vIG9ubHkgdXNlZCBmb3IgaGFzaGluZyBqc29uIG9iamVjdHMgKHVzZWQgZm9yIGhhc2ggbWFwcGluZyBwYWxldHRlIG9iamVjdHMsIHVzZWQgd2hlbiBjdXN0b20gY29sb3VycyBhcmUgcGFzc2VkIHRocm91Z2ggSmF2YVNjcmlwdClcbmV4cG9ydCBjb25zdCBoYXNoID0gc3RyID0+IHtcbiAgbGV0IGhhc2hOdW0gPSAwLFxuICAgIGkgPSAwLFxuICAgIGNocixcbiAgICBsZW4gPSBzdHIubGVuZ3RoXG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gaGFzaE51bVxuICBmb3IgKCBpOyBpIDwgbGVuOyArK2kgKSB7XG4gICAgY2hyID0gc3RyLmNoYXJDb2RlQXQoIGkgKVxuICAgIGhhc2hOdW0gPSAoIGhhc2hOdW0gPDwgNSApIC0gaGFzaE51bSArIGNoclxuICAgIGhhc2hOdW0gfD0gMFxuICB9XG4gIHJldHVybiBoYXNoTnVtXG59XG5pbXBvcnQgKiBhcyBzdHlsZSBmcm9tIFwiLi9zdHlsZVwiXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplSGV4ID0gc3R5bGUubm9ybWFsaXplSGV4XG5leHBvcnQgY29uc3QgZ2V0Q29udHJhc3QgPSBzdHlsZS5nZXRDb250cmFzdFxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IHN0eWxlLmdldEx1bWluYW5jZVxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPXN0eWxlLmdldEhvdmVyQ29sb3JcblxuaW1wb3J0ICogYXMgZG9tIGZyb20gXCIuL2RvbVwiXG5leHBvcnQgY29uc3QgdHJhdmVyc2VET01QYXRoID0gZG9tLnRyYXZlcnNlRE9NUGF0aFxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbVN0eWxlc2hlZXQgPSBkb20uYWRkQ3VzdG9tU3R5bGVzaGVldFxuXG5pbXBvcnQgKiBhcyB2YWxpZGF0aW9uIGZyb20gXCIuL3ZhbGlkYXRpb25cIlxuZXhwb3J0IGNvbnN0IGlzVmFsaWRTdGF0dXMgPSB2YWxpZGF0aW9uLmlzVmFsaWRTdGF0dXNcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gdmFsaWRhdGlvbi5pc1BsYWluT2JqZWN0XG5leHBvcnQgY29uc3QgaXNNb2JpbGUgPSB2YWxpZGF0aW9uLmlzTW9iaWxlXG5cbmltcG9ydCAqIGFzIGFzeW5jRm5zIGZyb20gXCIuL2FzeW5jXCJcbmV4cG9ydCBjb25zdCBnZXRTY3JpcHQgPSBhc3luY0Zucy5nZXRTY3JpcHRcbmV4cG9ydCBjb25zdCBtYWtlQXN5bmNSZXF1ZXN0ID0gYXN5bmNGbnMubWFrZUFzeW5jUmVxdWVzdFxuXG5jb25zdCBsb29wUHJvcGVydGllcyA9IG92ZXJ3cml0ZXMgPT4gKG9iaiwgW2tleSwgdmFsdWVdKSA9PiB7XG4gIGlmICggdmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgISh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSApIHtcbiAgICBpZiAoIG92ZXJ3cml0ZXNbIGtleSBdIGluc3RhbmNlb2YgT2JqZWN0ICYmICEob3ZlcndyaXRlc1sga2V5IF0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIG9ialsga2V5IF0gPSBPYmplY3QuZW50cmllcyh2YWx1ZSkucmVkdWNlKGxvb3BQcm9wZXJ0aWVzKG92ZXJ3cml0ZXNba2V5XSksIHt9KVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmpbIGtleSBdID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKCBvdmVyd3JpdGVzLmhhc093blByb3BlcnR5KCBrZXkgKSApIHtcbiAgICAgIG9ialsga2V5IF0gPSBvdmVyd3JpdGVzWyBrZXkgXVxuICAgIH1lbHNlIHtcbiAgICAgIG9ialsga2V5IF0gPSB2YWx1ZSBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnQgY29uc3QgbWVyZ2VPcHRpb25zID0gKCBkZWZhdWx0cywgb3ZlcndyaXRlcyApID0+XG4gIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5yZWR1Y2UobG9vcFByb3BlcnRpZXMob3ZlcndyaXRlcyksIHt9KVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhleCA9IGhleCA9PlxuICBoZXhbMF0gPT0gJyMnXG4gICAgPyBoZXguc3Vic3RyKDEpIDogaGV4Lmxlbmd0aCA9PSAzXG4gICAgPyBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl0gOiBoZXhcblxuLy8gdXNlZCB0byBnZXQgdGV4dCBjb2xvcnMgaWYgbm90IHNldFxuZXhwb3J0IGNvbnN0IGdldENvbnRyYXN0ID0gaGV4ID0+IHtcbiAgaGV4ID0gbm9ybWFsaXplSGV4KGhleClcbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zdWJzdHIoMCwgMiksIDE2KVxuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnN1YnN0cigyLCAyKSwgMTYpXG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc3Vic3RyKDQsIDIpLCAxNilcbiAgY29uc3QgeWlxID0gKHIgKiAyOTkgKyBnICogNTg3ICsgYiAqIDExNCkgLyAxMDAwXG4gIHJldHVybiB5aXEgPj0gMTI4ID8gJyMwMDAnIDogJyNmZmYnXG59XG5cbi8vIHVzZWQgdG8gY2hhbmdlIGNvbG9yIG9uIGhpZ2hsaWdodFxuZXhwb3J0IGNvbnN0IGdldEx1bWluYW5jZSA9IGhleCA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlSW50KG5vcm1hbGl6ZUhleChoZXgpLCAxNiksXG4gICAgYW10ID0gMzgsXG4gICAgUiA9IChudW0gPj4gMTYpICsgYW10LFxuICAgIEIgPSAoKG51bSA+PiA4KSAmIDB4MDBmZikgKyBhbXQsXG4gICAgRyA9IChudW0gJiAweDAwMDBmZikgKyBhbXRcbiAgICByZXR1cm4gJyMnICsgKFxuICAgIDB4MTAwMDAwMCArXG4gICAgKFIgPCAyNTUgPyAoUiA8IDEgPyAwIDogUikgOiAyNTUpICogMHgxMDAwMCArXG4gICAgKEIgPCAyNTUgPyAoQiA8IDEgPyAwIDogQikgOiAyNTUpICogMHgxMDAgK1xuICAgIChHIDwgMjU1ID8gKEcgPCAxID8gMCA6IEcpIDogMjU1KVxuICApXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5zbGljZSgxKVxufVxuZXhwb3J0IGNvbnN0IGdldEhvdmVyQ29sb3IgPSBoZXggPT4ge1xuICBoZXggPSBub3JtYWxpemVIZXgoIGhleCApXG4gIC8vIGZvciBibGFjayBidXR0b25zXG4gIHJldHVybiBoZXggPT09ICcwMDAwMDAnID8gJyMyMjInIDogZ2V0THVtaW5hbmNlKCBoZXggKVxufSIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCB7IHN0YXR1c2VzIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiXG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhdHVzIGlzIGluIHRoZSBjb25zdGFudHMgbGlzdFxuICogQHBhcmFtIHsgc3RyaW5nIH0gc3RhdHVzIC0gU3RhdHVzIFN0cmluZyB0b1xuICogQHJldHVybiB7IGJvb2xlYW4gfSAtIGlmIHN0YXR1cyBpcyB2YWxpZFxuICovXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0YXR1cyA9IHN0YXR1cyA9PiBzdGF0dXNlcy5pbmNsdWRlcyhzdGF0dXMpXG5cbmV4cG9ydCBjb25zdCBpc01vYmlsZSA9ICgpID0+XG4gIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApXG5cbi8vIFRoZSBjb2RlIFwidHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsXCIgYWxsb3dzIEFycmF5IG9iamVjdHNcbmV4cG9ydCBjb25zdCBpc1BsYWluT2JqZWN0ID0gb2JqID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgPT0gT2JqZWN0XG4iXSwic291cmNlUm9vdCI6IiJ9