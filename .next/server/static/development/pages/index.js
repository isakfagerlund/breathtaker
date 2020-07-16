module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/isakfagerlund/Documents/Projects/breathtaker/components/Map.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nmapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.accessToken = \"pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ\";\nconst initialMapState = {\n  lng: 5,\n  lat: 34,\n  zoom: 2\n};\n\nconst Map = () => {\n  const {\n    0: mapState,\n    1: setMapState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialMapState);\n  const mapContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default.a.Map({\n      container: mapContainer.current,\n      style: 'mapbox://styles/mapbox/streets-v11',\n      center: [mapState.lng, mapState.lat],\n      zoom: mapState.zoom\n    });\n    map.on('move', () => {\n      setMapState({\n        lng: map.getCenter().lng.toFixed(4),\n        lat: map.getCenter().lat.toFixed(4),\n        zoom: map.getZoom().toFixed(2)\n      });\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"sidebarStyle\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"Longitude: \", mapState.lng, \" | Latitude: \", mapState.lat, \" | Zoom: \", mapState.zoom)), __jsx(\"div\", {\n    ref: el => mapContainer.current = el,\n    className: \"mapContainer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcz82NzQ1Il0sIm5hbWVzIjpbIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJpbml0aWFsTWFwU3RhdGUiLCJsbmciLCJsYXQiLCJ6b29tIiwiTWFwIiwibWFwU3RhdGUiLCJzZXRNYXBTdGF0ZSIsInVzZVN0YXRlIiwibWFwQ29udGFpbmVyIiwidXNlUmVmIiwidXNlRWZmZWN0IiwibWFwIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0eWxlIiwiY2VudGVyIiwib24iLCJnZXRDZW50ZXIiLCJ0b0ZpeGVkIiwiZ2V0Wm9vbSIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBQSxnREFBUSxDQUFDQyxXQUFULEdBQXVCLG1HQUF2QjtBQUVBLE1BQU1DLGVBQWUsR0FBRztBQUN0QkMsS0FBRyxFQUFFLENBRGlCO0FBRXRCQyxLQUFHLEVBQUUsRUFGaUI7QUFHdEJDLE1BQUksRUFBRTtBQUhnQixDQUF4Qjs7QUFNQSxNQUFNQyxHQUFHLEdBQUcsTUFBTTtBQUNoQixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUNQLGVBQUQsQ0FBeEM7QUFDQSxRQUFNUSxZQUFZLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUEzQjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxHQUFHLEdBQUcsSUFBSWIsZ0RBQVEsQ0FBQ00sR0FBYixDQUFpQjtBQUMzQlEsZUFBUyxFQUFFSixZQUFZLENBQUNLLE9BREc7QUFFM0JDLFdBQUssRUFBRSxvQ0FGb0I7QUFHM0JDLFlBQU0sRUFBRSxDQUFDVixRQUFRLENBQUNKLEdBQVYsRUFBZUksUUFBUSxDQUFDSCxHQUF4QixDQUhtQjtBQUkzQkMsVUFBSSxFQUFFRSxRQUFRLENBQUNGO0FBSlksS0FBakIsQ0FBWjtBQU9BUSxPQUFHLENBQUNLLEVBQUosQ0FBTyxNQUFQLEVBQWUsTUFBTTtBQUNuQlYsaUJBQVcsQ0FBQztBQUNWTCxXQUFHLEVBQUVVLEdBQUcsQ0FBQ00sU0FBSixHQUFnQmhCLEdBQWhCLENBQW9CaUIsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FESztBQUVWaEIsV0FBRyxFQUFFUyxHQUFHLENBQUNNLFNBQUosR0FBZ0JmLEdBQWhCLENBQW9CZ0IsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FGSztBQUdWZixZQUFJLEVBQUVRLEdBQUcsQ0FBQ1EsT0FBSixHQUFjRCxPQUFkLENBQXNCLENBQXRCO0FBSEksT0FBRCxDQUFYO0FBS0QsS0FORDtBQU9ELEdBZlEsRUFlTixFQWZNLENBQVQ7QUFpQkEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFpQmIsUUFBUSxDQUFDSixHQUExQixtQkFBNENJLFFBQVEsQ0FBQ0gsR0FBckQsZUFBbUVHLFFBQVEsQ0FBQ0YsSUFBNUUsQ0FERixDQURGLEVBSUU7QUFBSyxPQUFHLEVBQUVpQixFQUFFLElBQUtaLFlBQVksQ0FBQ0ssT0FBYixHQUF1Qk8sRUFBeEM7QUFBNkMsYUFBUyxFQUFDLGNBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBUUQsQ0E3QkQ7O0FBK0JlaEIsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFwYm94Z2wgZnJvbSAnbWFwYm94LWdsJztcblxubWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBcInBrLmV5SjFJam9pYVhOaGEyWmhaMlZ5YkhWdVpDSXNJbUVpT2lKamF6azBOM0ZtYjJJd056RTNNMlp1ZVc1eE1UbHlOSFowSW4wLkM2b3JMbC1iZjJEZUdaUDFUMmZNV1FcIlxuXG5jb25zdCBpbml0aWFsTWFwU3RhdGUgPSB7XG4gIGxuZzogNSxcbiAgbGF0OiAzNCxcbiAgem9vbTogMlxufTtcblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICBjb25zdCBbbWFwU3RhdGUsIHNldE1hcFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxNYXBTdGF0ZSk7XG4gIGNvbnN0IG1hcENvbnRhaW5lciA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBtYXBDb250YWluZXIuY3VycmVudCxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICBjZW50ZXI6IFttYXBTdGF0ZS5sbmcsIG1hcFN0YXRlLmxhdF0sXG4gICAgICB6b29tOiBtYXBTdGF0ZS56b29tXG4gICAgfSk7XG5cbiAgICBtYXAub24oJ21vdmUnLCAoKSA9PiB7XG4gICAgICBzZXRNYXBTdGF0ZSh7XG4gICAgICAgIGxuZzogbWFwLmdldENlbnRlcigpLmxuZy50b0ZpeGVkKDQpLFxuICAgICAgICBsYXQ6IG1hcC5nZXRDZW50ZXIoKS5sYXQudG9GaXhlZCg0KSxcbiAgICAgICAgem9vbTogbWFwLmdldFpvb20oKS50b0ZpeGVkKDIpXG4gICAgICB9KSBcbiAgICB9KTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyU3R5bGVcIj5cbiAgICAgICAgPGRpdj5Mb25naXR1ZGU6IHttYXBTdGF0ZS5sbmd9IHwgTGF0aXR1ZGU6IHttYXBTdGF0ZS5sYXR9IHwgWm9vbToge21hcFN0YXRlLnpvb219PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcmVmPXtlbCA9PiAobWFwQ29udGFpbmVyLmN1cnJlbnQgPSBlbCl9IGNsYXNzTmFtZT1cIm1hcENvbnRhaW5lclwiIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Map */ \"./components/Map.js\");\nvar _jsxFileName = \"/Users/isakfagerlund/Documents/Projects/breathtaker/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction HomePage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"Breathtaker\"), __jsx(\"link\", {\n    href: \"https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLDBEQUFYO0FBQXNFLE9BQUcsRUFBQyxZQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREY7QUFTRDs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CcmVhdGh0YWtlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YxLjguMS9tYXBib3gtZ2wuY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFwIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isakfagerlund/Documents/Projects/breathtaker/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "mapbox-gl":
/*!****************************!*\
  !*** external "mapbox-gl" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mapbox-gl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXBib3gtZ2xcIj8wNjE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcGJveC1nbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcGJveC1nbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mapbox-gl\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });