"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["myLib"] = factory(require("react"));
	else
		root["myLib"] = factory(root["React"]);
})(global, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return (() => {
var exports = {};
exports.id = "components";
exports.ids = ["components"];
exports.modules = {

/***/ "./src/components/MyProvider.jsx":
/*!***************************************!*\
  !*** ./src/components/MyProvider.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts */ "./src/contexts/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");




function MyProvider(_ref) {
  var children = _ref.children;
  var value = (0,_hooks__WEBPACK_IMPORTED_MODULE_2__.useMyContext)();
  console.log('MyLib :: MyProvider :: value', value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_contexts__WEBPACK_IMPORTED_MODULE_1__.myContext.Provider, {
    value: value
  }, children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyProvider);

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProvider": () => (/* reexport safe */ _MyProvider__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _MyProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyProvider */ "./src/components/MyProvider.jsx");



/***/ }),

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

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMyContext": () => (/* reexport safe */ _useMyContext__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _useMyContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMyContext */ "./src/hooks/useMyContext.js");



/***/ }),

/***/ "./src/hooks/useMyContext.js":
/*!***********************************!*\
  !*** ./src/hooks/useMyContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useMyContext() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('INITIAL VALUE'),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var doSomething = function doSomething() {
    setState(Math.random());
  };

  return {
    random: state,
    doSomething: doSomething
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMyContext);

/***/ }),

/***/ "react":
/*!****************************************************************************************************!*\
  !*** external {"commonjs":"react","commonjs2":"react","amd":"react","umd":"react","root":"React"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/components/index.js"));

})();
});
//# sourceMappingURL=components.js.map