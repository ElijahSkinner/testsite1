/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'popperjs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'google-map'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'magnific-popup'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'shuffle'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'slick'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lozad */ \"./node_modules/lozad/dist/lozad.min.js\");\n/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_1__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'js/pricing/boosting.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'tourneyTitle.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'placements.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'coaching.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* Lozad.js https://github.com/ApoorvSaxena/lozad.js */\r\n// JS Plugins\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Pricing Scripts\r\n\r\n\r\n\r\n\r\n/* ========================================================================= */\r\n/*\tPage Preloader\r\n/* ========================================================================= */\r\n\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(window).on('load', function () {\r\n\tObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('.preloader').fadeOut(100);\r\n});\r\n\r\njQuery(function ($) {\r\n\t\"use strict\";\r\n\r\n\r\n\t/* ========================================================================= */\r\n\t/*\tAuto close Navbar when click on link\r\n\t/* ========================================================================= */\r\n\r\n\t$('.navbar-collapse a').click(function () {\r\n\t\t$(\".navbar-collapse\").collapse('hide');\r\n\t});\r\n\r\n\t/* ========================================================================= */\r\n\t/*\tjQuery load initialize\r\n\t/* ========================================================================= */\r\n\twindow.$ = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'jquery'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n\t__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './main.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\r\n\r\n\t/* ========================================================================= */\r\n\t/*\tlazy load initialize\r\n\t/* ========================================================================= */\r\n\r\n\tconst observer = lozad__WEBPACK_IMPORTED_MODULE_1___default()(); // lazy loads elements with default selector as \".lozad\"\r\n\tobserver.observe();\r\n\r\n\t/* ========================================================================= */\r\n\t/*\tMagnific popup\r\n\t/* =========================================================================  */\r\n\t$('.image-popup').magnificPopup({\r\n\t\ttype: 'image',\r\n\t\tremovalDelay: 160, //delay removal by X to allow out-animation\r\n\t\tcallbacks: {\r\n\t\t\tbeforeOpen: function () {\r\n\t\t\t\t// just a hack that adds mfp-anim class to markup\r\n\t\t\t\tthis.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');\r\n\t\t\t\tthis.st.mainClass = this.st.el.attr('data-effect');\r\n\t\t\t}\r\n\t\t},\r\n\t\tcloseOnContentClick: true,\r\n\t\tmidClick: true,\r\n\t\tfixedContentPos: false,\r\n\t\tfixedBgPos: true\r\n\t});\r\n\r\n\t/* ========================================================================= */\r\n\t/*\tPortfolio Filtering Hook\r\n\t/* =========================================================================  */\r\n\r\n\tvar containerEl = document.querySelector('.shuffle-wrapper');\r\n\tif (containerEl) {\r\n\t\tvar Shuffle = window.Shuffle;\r\n\t\tvar myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {\r\n\t\t\titemSelector: '.shuffle-item',\r\n\t\t\tbuffer: 1\r\n\t\t});\r\n\r\n\t\tjQuery('input[name=\"shuffle-filter\"]').on('change', function (evt) {\r\n\t\t\tvar input = evt.currentTarget;\r\n\t\t\tif (input.checked) {\r\n\t\t\t\tmyShuffle.filter(input.value);\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\t/* ========================================================================= */\r\n\t/*\tTestimonial Carousel\r\n\t/* =========================================================================  */\r\n\r\n\t$(\"#testimonials\").slick({\r\n\t\tinfinite: true,\r\n\t\tarrows: false,\r\n\t\tautoplay: true,\r\n\t\tautoplaySpeed: 4000\r\n\t});\r\n\r\n\t/* ========================================================================= */\r\n\t/*\tanimation scroll js\r\n\t/* ========================================================================= */\r\n\r\n\tvar html_body = $('html, body');\r\n\t$('nav a, .page-scroll').on('click', function () { //use page-scroll class in any HTML tag for scrolling\r\n\t\tif (location.pathname.replace(/^\\//, '') === this.pathname.replace(/^\\//, '') && location.hostname === this.hostname) {\r\n\t\t\tvar target = $(this.hash);\r\n\t\t\ttarget = target.length ? target : $('[name=' + this.hash.slice(1) + ']');\r\n\t\t\tif (target.length) {\r\n\t\t\t\thtml_body.animate({\r\n\t\t\t\t\tscrollTop: target.offset().top - 50\r\n\t\t\t\t}, 1500, 'easeInOutExpo');\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t}\r\n\t});\r\n\r\n\t// easeInOutExpo Declaration\r\n\tjQuery.extend(jQuery.easing, {\r\n\t\teaseInOutExpo: function (x, t, b, c, d) {\r\n\t\t\tif (t === 0) {\r\n\t\t\t\treturn b;\r\n\t\t\t}\r\n\t\t\tif (t === d) {\r\n\t\t\t\treturn b + c;\r\n\t\t\t}\r\n\t\t\tif ((t /= d / 2) < 1) {\r\n\t\t\t\treturn c / 2 * Math.pow(2, 10 * (t - 1)) + b;\r\n\t\t\t}\r\n\t\t\treturn c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;\r\n\t\t}\r\n\t});\r\n\r\n\t/* ========================================================================= */\r\n\r\n\t/*\tcounter up\r\n\t/* ========================================================================= */\r\n\tfunction counter() {\r\n\t\tvar oTop;\r\n\t\tif ($('.count').length !== 0) {\r\n\t\t\toTop = $('.count').offset().top - window.innerHeight;\r\n\t\t}\r\n\t\tif ($(window).scrollTop() > oTop) {\r\n\t\t\t$('.count').each(function () {\r\n\t\t\t\tvar $this = $(this),\r\n\t\t\t\t\tcountTo = $this.attr('data-count');\r\n\t\t\t\t$({\r\n\t\t\t\t\tcountNum: $this.text()\r\n\t\t\t\t}).animate({\r\n\t\t\t\t\tcountNum: countTo\r\n\t\t\t\t}, {\r\n\t\t\t\t\tduration: 1000,\r\n\t\t\t\t\teasing: 'swing',\r\n\t\t\t\t\tstep: function () {\r\n\t\t\t\t\t\t$this.text(Math.floor(this.countNum));\r\n\t\t\t\t\t},\r\n\t\t\t\t\tcomplete: function () {\r\n\t\t\t\t\t\t$this.text(this.countNum);\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\r\n\t$(window).on('scroll', function () {\r\n\t\tcounter();\r\n\t});\r\n\r\n});\n\n//# sourceURL=webpack://replayrlb/./assets/js/script.js?");

/***/ }),

/***/ "./node_modules/lozad/dist/lozad.min.js":
/*!**********************************************!*\
  !*** ./node_modules/lozad/dist/lozad.min.js ***!
  \**********************************************/
/***/ (function(module) {

eval("/*! lozad.js - v1.16.0 - 2020-09-06\n* https://github.com/ApoorvSaxena/lozad.js\n* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */\n!function(t,e){ true?module.exports=e():0}(this,function(){\"use strict\";\n/**\n   * Detect IE browser\n   * @const {boolean}\n   * @private\n   */var g=\"undefined\"!=typeof document&&document.documentMode,f={rootMargin:\"0px\",threshold:0,load:function(t){if(\"picture\"===t.nodeName.toLowerCase()){var e=t.querySelector(\"img\"),r=!1;null===e&&(e=document.createElement(\"img\"),r=!0),g&&t.getAttribute(\"data-iesrc\")&&(e.src=t.getAttribute(\"data-iesrc\")),t.getAttribute(\"data-alt\")&&(e.alt=t.getAttribute(\"data-alt\")),r&&t.append(e)}if(\"video\"===t.nodeName.toLowerCase()&&!t.getAttribute(\"data-src\")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute(\"data-src\"))&&(a[i].src=o);t.load()}t.getAttribute(\"data-poster\")&&(t.poster=t.getAttribute(\"data-poster\")),t.getAttribute(\"data-src\")&&(t.src=t.getAttribute(\"data-src\")),t.getAttribute(\"data-srcset\")&&t.setAttribute(\"srcset\",t.getAttribute(\"data-srcset\"));var n=\",\";if(t.getAttribute(\"data-background-delimiter\")&&(n=t.getAttribute(\"data-background-delimiter\")),t.getAttribute(\"data-background-image\"))t.style.backgroundImage=\"url('\"+t.getAttribute(\"data-background-image\").split(n).join(\"'),url('\")+\"')\";else if(t.getAttribute(\"data-background-image-set\")){var d=t.getAttribute(\"data-background-image-set\").split(n),u=d[0].substr(0,d[0].indexOf(\" \"))||d[0];// Substring before ... 1x\nu=-1===u.indexOf(\"url(\")?\"url(\"+u+\")\":u,1===d.length?t.style.backgroundImage=u:t.setAttribute(\"style\",(t.getAttribute(\"style\")||\"\")+\"background-image: \"+u+\"; background-image: -webkit-image-set(\"+d+\"); background-image: image-set(\"+d+\")\")}t.getAttribute(\"data-toggle-class\")&&t.classList.toggle(t.getAttribute(\"data-toggle-class\"))},loaded:function(){}};function A(t){t.setAttribute(\"data-loaded\",!0)}var m=function(t){return\"true\"===t.getAttribute(\"data-loaded\")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:\".lozad\",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;\"undefined\"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute(\"data-placeholder-background\")&&(c.style.background=c.getAttribute(\"data-placeholder-background\"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});\n\n\n//# sourceURL=webpack://replayrlb/./node_modules/lozad/dist/lozad.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;