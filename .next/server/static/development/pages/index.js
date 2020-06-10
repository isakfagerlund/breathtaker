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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-map-gl */ \"react-map-gl\");\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_map_gl__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @turf/helpers */ \"@turf/helpers\");\n/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_turf_helpers__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/isakfagerlund/Projects/breathtaker/components/Map.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst initialViewport = {\n  width: \"100%\",\n  height: 500,\n  latitude: 42.376,\n  longitude: -83.093,\n  zoom: 12\n};\n\nconst Map = ({\n  lat,\n  long\n}) => {\n  const {\n    0: viewport,\n    1: setViewport\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialViewport);\n  const url = \"https://api.mapbox.com/optimized-trips/v1/mapbox/walking/-122.42,37.78;-122.45,37.91;-122.48,37.73?access_token=pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ\";\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setViewport(_objectSpread(_objectSpread({}, initialViewport), {}, {\n      latitude: lat,\n      longitude: long\n    }));\n  }, [lat]);\n  return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, viewport, {\n    mapboxApiAccessToken: \"pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ\",\n    onViewportChange: view => setViewport(view),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n    latitude: lat,\n    longitude: long,\n    offsetLeft: -20,\n    offsetTop: -10,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"marker\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcz82NzQ1Il0sIm5hbWVzIjpbImluaXRpYWxWaWV3cG9ydCIsIndpZHRoIiwiaGVpZ2h0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwiTWFwIiwibGF0IiwibG9uZyIsInZpZXdwb3J0Iiwic2V0Vmlld3BvcnQiLCJ1c2VTdGF0ZSIsInVybCIsInVzZUVmZmVjdCIsInZpZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLGVBQWUsR0FBRztBQUN0QkMsT0FBSyxFQUFFLE1BRGU7QUFFdEJDLFFBQU0sRUFBRSxHQUZjO0FBR3RCQyxVQUFRLEVBQUUsTUFIWTtBQUl0QkMsV0FBUyxFQUFFLENBQUMsTUFKVTtBQUt0QkMsTUFBSSxFQUFFO0FBTGdCLENBQXhCOztBQVFBLE1BQU1DLEdBQUcsR0FBRyxDQUFDO0FBQUVDLEtBQUY7QUFBT0M7QUFBUCxDQUFELEtBQW1CO0FBQzdCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQ1gsZUFBRCxDQUF4QztBQUVBLFFBQU1ZLEdBQUcsR0FBRyxtTkFBWjtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEgsZUFBVyxpQ0FBS1YsZUFBTDtBQUFzQkcsY0FBUSxFQUFFSSxHQUFoQztBQUFxQ0gsZUFBUyxFQUFFSTtBQUFoRCxPQUFYO0FBQ0QsR0FGUSxFQUVOLENBQUNELEdBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRSxNQUFDLG1EQUFELGVBQ01FLFFBRE47QUFFRSx3QkFBb0IsRUFBQyxtR0FGdkI7QUFHRSxvQkFBZ0IsRUFBR0ssSUFBRCxJQUFVSixXQUFXLENBQUNJLElBQUQsQ0FIekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtFLE1BQUMsbURBQUQ7QUFBUSxZQUFRLEVBQUVQLEdBQWxCO0FBQXVCLGFBQVMsRUFBRUMsSUFBbEM7QUFBd0MsY0FBVSxFQUFFLENBQUMsRUFBckQ7QUFBeUQsYUFBUyxFQUFFLENBQUMsRUFBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEYsQ0FERjtBQVdELENBcEJEOztBQXNCZUYsa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hcEdMLCB7IE1hcmtlciwgTGF5ZXIgfSBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHsgZmVhdHVyZUNvbGxlY3Rpb24sIHBvaW50IH0gZnJvbSAnQHR1cmYvaGVscGVycyc7XG5cbmNvbnN0IGluaXRpYWxWaWV3cG9ydCA9IHtcbiAgd2lkdGg6IFwiMTAwJVwiLFxuICBoZWlnaHQ6IDUwMCxcbiAgbGF0aXR1ZGU6IDQyLjM3NixcbiAgbG9uZ2l0dWRlOiAtODMuMDkzLFxuICB6b29tOiAxMlxufVxuXG5jb25zdCBNYXAgPSAoeyBsYXQsIGxvbmcgfSkgPT4ge1xuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKGluaXRpYWxWaWV3cG9ydClcblxuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLm1hcGJveC5jb20vb3B0aW1pemVkLXRyaXBzL3YxL21hcGJveC93YWxraW5nLy0xMjIuNDIsMzcuNzg7LTEyMi40NSwzNy45MTstMTIyLjQ4LDM3LjczP2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFYTmhhMlpoWjJWeWJIVnVaQ0lzSW1FaU9pSmphemswTjNGbWIySXdOekUzTTJadWVXNXhNVGx5TkhaMEluMC5DNm9yTGwtYmYyRGVHWlAxVDJmTVdRXCJcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFZpZXdwb3J0KHsuLi5pbml0aWFsVmlld3BvcnQsIGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG9uZ30pXG4gIH0sIFtsYXRdKVxuXG4gIHJldHVybiAoXG4gICAgPE1hcEdMXG4gICAgICB7Li4udmlld3BvcnR9XG4gICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj1cInBrLmV5SjFJam9pYVhOaGEyWmhaMlZ5YkhWdVpDSXNJbUVpT2lKamF6azBOM0ZtYjJJd056RTNNMlp1ZVc1eE1UbHlOSFowSW4wLkM2b3JMbC1iZjJEZUdaUDFUMmZNV1FcIlxuICAgICAgb25WaWV3cG9ydENoYW5nZT17KHZpZXcpID0+IHNldFZpZXdwb3J0KHZpZXcpfVxuICAgID5cbiAgICAgIDxNYXJrZXIgbGF0aXR1ZGU9e2xhdH0gbG9uZ2l0dWRlPXtsb25nfSBvZmZzZXRMZWZ0PXstMjB9IG9mZnNldFRvcD17LTEwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtlclwiPjwvZGl2PlxuICAgICAgPC9NYXJrZXI+XG4gICAgPC9NYXBHTD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ }),

/***/ "./helpers/checkWindow.ts":
/*!********************************!*\
  !*** ./helpers/checkWindow.ts ***!
  \********************************/
/*! exports provided: checkWindowExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkWindowExists\", function() { return checkWindowExists; });\nconst checkWindowExists = () => false;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2NoZWNrV2luZG93LnRzP2FhOTEiXSwibmFtZXMiOlsiY2hlY2tXaW5kb3dFeGlzdHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxpQkFBaUIsR0FBRyxXQUExQiIsImZpbGUiOiIuL2hlbHBlcnMvY2hlY2tXaW5kb3cudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2hlY2tXaW5kb3dFeGlzdHMgPSAoKSA9PiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/checkWindow.ts\n");

/***/ }),

/***/ "./helpers/getLocation.ts":
/*!********************************!*\
  !*** ./helpers/getLocation.ts ***!
  \********************************/
/*! exports provided: getLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocation\", function() { return getLocation; });\n/* harmony import */ var _checkWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWindow */ \"./helpers/checkWindow.ts\");\n\nconst getLocation = (onSuccess, onFailure) => {\n  if (!_checkWindow__WEBPACK_IMPORTED_MODULE_0__[\"checkWindowExists\"]) return;\n\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);\n  } else {\n    console.log(\"Browser not supporting location\");\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dldExvY2F0aW9uLnRzPzRlMGYiXSwibmFtZXMiOlsiZ2V0TG9jYXRpb24iLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJjaGVja1dpbmRvd0V4aXN0cyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFXTyxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxTQUFaLEtBQW9DO0FBQzdELE1BQUksQ0FBQ0MsOERBQUwsRUFBd0I7O0FBQ3hCLE1BQUlDLFNBQVMsQ0FBQ0MsV0FBZCxFQUEyQjtBQUN2QkQsYUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUNMLFNBQXpDLEVBQW9EQyxTQUFwRDtBQUNILEdBRkQsTUFFTztBQUNMSyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtBQUNEO0FBQ0YsQ0FQTSIsImZpbGUiOiIuL2hlbHBlcnMvZ2V0TG9jYXRpb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGVja1dpbmRvd0V4aXN0cyB9IGZyb20gJy4vY2hlY2tXaW5kb3cnXG5cbmludGVyZmFjZSBMb2NhdGlvbiB7XG4gIGNvb3Jkczoge1xuICAgIGFjY3VyYWN5OiBudW1iZXIsXG4gICAgbG9uZ2l0dWRlOiBudW1iZXIsXG4gICAgbGF0aXR1ZGU6IG51bWJlclxuICB9O1xufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRMb2NhdGlvbiA9IChvblN1Y2Nlc3MsIG9uRmFpbHVyZSk6IExvY2F0aW9uID0+IHtcbiAgaWYgKCFjaGVja1dpbmRvd0V4aXN0cykgcmV0dXJuXG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ob25TdWNjZXNzLCBvbkZhaWx1cmUpXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJCcm93c2VyIG5vdCBzdXBwb3J0aW5nIGxvY2F0aW9uXCIpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/getLocation.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_getLocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/getLocation */ \"./helpers/getLocation.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ \"./components/Map.js\");\nvar _jsxFileName = \"/Users/isakfagerlund/Projects/breathtaker/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction HomePage() {\n  const {\n    0: userLocation,\n    1: setUserLocation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    latitude: 0,\n    longitude: 0,\n    accuracy: 0\n  });\n\n  const onSuccess = data => {\n    setUserLocation(data.coords);\n  };\n\n  const onFailure = err => console.log(err);\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const asyncGetLocation = async () => {\n      Object(_helpers_getLocation__WEBPACK_IMPORTED_MODULE_1__[\"getLocation\"])(onSuccess, onFailure);\n    };\n\n    asyncGetLocation();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Breathtaker\"), __jsx(\"link\", {\n    href: \"https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, \"Welcome to Breathtaker\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Your latitude: \", userLocation.latitude), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Your longitude: \", userLocation.longitude), __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    lat: userLocation.latitude,\n    long: userLocation.longitude,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZXJMb2NhdGlvbiIsInNldFVzZXJMb2NhdGlvbiIsInVzZVN0YXRlIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJhY2N1cmFjeSIsIm9uU3VjY2VzcyIsImRhdGEiLCJjb29yZHMiLCJvbkZhaWx1cmUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYXN5bmNHZXRMb2NhdGlvbiIsImdldExvY2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQVc7QUFBRUMsWUFBUSxFQUFFLENBQVo7QUFBZUMsYUFBUyxFQUFFLENBQTFCO0FBQTZCQyxZQUFRLEVBQUU7QUFBdkMsR0FBWCxDQUFoRDs7QUFFQSxRQUFNQyxTQUFTLEdBQUlDLElBQUQsSUFBVTtBQUMxQk4sbUJBQWUsQ0FBQ00sSUFBSSxDQUFDQyxNQUFOLENBQWY7QUFDRCxHQUZEOztBQUdBLFFBQU1DLFNBQVMsR0FBSUMsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQUEzQjs7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsZ0JBQWdCLEdBQUcsWUFBWTtBQUNuQ0MsOEVBQVcsQ0FBQ1QsU0FBRCxFQUFZRyxTQUFaLENBQVg7QUFDRCxLQUZEOztBQUlBSyxvQkFBZ0I7QUFDakIsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLDBEQUFYO0FBQXNFLE9BQUcsRUFBQyxZQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFtQmQsWUFBWSxDQUFDRyxRQUFoQyxDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFBb0JILFlBQVksQ0FBQ0ksU0FBakMsQ0FQRixFQVFFLE1BQUMsdURBQUQ7QUFBSyxPQUFHLEVBQUVKLFlBQVksQ0FBQ0csUUFBdkI7QUFBaUMsUUFBSSxFQUFFSCxZQUFZLENBQUNJLFNBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGO0FBWUQ7O0FBRWNMLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tICcuLi9oZWxwZXJzL2dldExvY2F0aW9uJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcbmludGVyZmFjZSBMb2NhdGlvbiB7XG4gIGFjY3VyYWN5OiBudW1iZXIsXG4gIGxvbmdpdHVkZTogbnVtYmVyLFxuICBsYXRpdHVkZTogbnVtYmVyXG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbdXNlckxvY2F0aW9uLCBzZXRVc2VyTG9jYXRpb25dID0gdXNlU3RhdGU8TG9jYXRpb24+KHsgbGF0aXR1ZGU6IDAsIGxvbmdpdHVkZTogMCwgYWNjdXJhY3k6IDB9IClcblxuICBjb25zdCBvblN1Y2Nlc3MgPSAoZGF0YSkgPT4ge1xuICAgIHNldFVzZXJMb2NhdGlvbihkYXRhLmNvb3JkcylcbiAgfSBcbiAgY29uc3Qgb25GYWlsdXJlID0gKGVycikgPT4gY29uc29sZS5sb2coZXJyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYXN5bmNHZXRMb2NhdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIGdldExvY2F0aW9uKG9uU3VjY2Vzcywgb25GYWlsdXJlKVxuICAgIH1cbiBcbiAgICBhc3luY0dldExvY2F0aW9uKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CcmVhdGh0YWtlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YxLjguMS9tYXBib3gtZ2wuY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PldlbGNvbWUgdG8gQnJlYXRodGFrZXI8L2Rpdj5cbiAgICAgIDxwPllvdXIgbGF0aXR1ZGU6IHt1c2VyTG9jYXRpb24ubGF0aXR1ZGV9PC9wPlxuICAgICAgPHA+WW91ciBsb25naXR1ZGU6IHt1c2VyTG9jYXRpb24ubG9uZ2l0dWRlfTwvcD5cbiAgICAgIDxNYXAgbGF0PXt1c2VyTG9jYXRpb24ubGF0aXR1ZGV9IGxvbmc9e3VzZXJMb2NhdGlvbi5sb25naXR1ZGV9ICAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/isakfagerlund/Projects/breathtaker/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "@turf/helpers":
/*!********************************!*\
  !*** external "@turf/helpers" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@turf/helpers\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdHVyZi9oZWxwZXJzXCI/OGI5OCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAdHVyZi9oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHR1cmYvaGVscGVyc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@turf/helpers\n");

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

/***/ }),

/***/ "react-map-gl":
/*!*******************************!*\
  !*** external "react-map-gl" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-map-gl\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXAtZ2xcIj81YWIzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LW1hcC1nbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcC1nbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-map-gl\n");

/***/ })

/******/ });