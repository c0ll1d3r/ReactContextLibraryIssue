"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myLib"] = factory();
	else
		root["myLib"] = factory();
})(global, function() {
return (() => {
var exports = {};
exports.id = "contexts";
exports.ids = ["contexts"];
exports.modules = {

/***/ "./src/contexts/index.js":
/*!*******************************!*\
  !*** ./src/contexts/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myContext": () => (/* reexport safe */ _myContext__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _myContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myContext */ "./src/contexts/myContext.js");



/***/ }),

/***/ "./src/contexts/myContext.js":
/*!***********************************!*\
  !*** ./src/contexts/myContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var initialValue = {
  random: 'NOT SET',
  doSomething: function doSomething() {
    console.log('MyLib/contexts :: myContext :: doSomething', 'I\m the initial function');
  }
};
var myContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialValue);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myContext);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["shared"], () => (__webpack_exec__("./src/contexts/index.js")));

})();
});
//# sourceMappingURL=contexts.js.map