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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/helpers */ \"@turf/helpers\");\n/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_genereateRandomLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/genereateRandomLocation */ \"./helpers/genereateRandomLocation.js\");\n/* harmony import */ var random_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! random-location */ \"random-location\");\n/* harmony import */ var random_location__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(random_location__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/isakfagerlund/Projects/breathtaker/components/Map.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst mapBoxToken = \"pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ\";\nmapbox_gl__WEBPACK_IMPORTED_MODULE_5___default.a.accessToken = mapBoxToken; // Create an empty GeoJSON feature collection for drop-off locations\n\nconst dropoffs = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"featureCollection\"])([]);\nconst nothing = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"featureCollection\"])([]);\nlet map;\n\nconst Map = ({\n  userLocation,\n  setUserLocation\n}) => {\n  const {\n    0: routeDetails,\n    1: setRouteDetails\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const {\n    0: hasRoute,\n    1: setHasRoute\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const mapContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  const getNavigation = coords => {\n    const stopOne = Object(random_location__WEBPACK_IMPORTED_MODULE_3__[\"randomCircumferencePoint\"])({\n      latitude: userLocation[0],\n      longitude: userLocation[1]\n    }, 500);\n    const stopOneArray = [stopOne.latitude, stopOne.longitude];\n    const stopTwo = Object(random_location__WEBPACK_IMPORTED_MODULE_3__[\"randomCircumferencePoint\"])({\n      latitude: userLocation[0],\n      longitude: userLocation[1]\n    }, 500);\n    const stopTwoArray = [stopTwo.latitude, stopTwo.longitude];\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${userLocation};${stopOneArray};${stopTwoArray};${userLocation}?&annotations=duration&continue_straight=true&overview=full&steps=true&geometries=geojson&access_token=${mapBoxToken}`).then(({\n      data\n    }) => {\n      console.log(data); // Create a GeoJSON feature collection\n\n      const route = data.routes[0];\n      const {\n        distance,\n        duration\n      } = route;\n      var routeGeoJSON = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"featureCollection\"])([Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"feature\"])(route.geometry)]);\n      map.getSource('route').setData(routeGeoJSON);\n      setHasRoute(true);\n    }).catch(error => console.log(error));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (userLocation.length > 0) {\n      map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_5___default.a.Map({\n        container: mapContainer.current,\n        style: 'mapbox://styles/mapbox/light-v10',\n        center: userLocation,\n        zoom: 11\n      }); // Add geolocate control to the map.\n\n      const geoLocate = new mapbox_gl__WEBPACK_IMPORTED_MODULE_5___default.a.GeolocateControl({\n        positionOptions: {\n          enableHighAccuracy: true\n        },\n        showAccuracyCircle: false,\n        trackUserLocation: true\n      });\n      map.addControl(geoLocate);\n      geoLocate.on('geolocate', () => {\n        map.setZoom(15);\n      });\n      map.on('load', () => {\n        geoLocate.trigger();\n        map.addSource('route', {\n          type: 'geojson',\n          data: nothing\n        });\n        map.addLayer({\n          id: 'routeline-active',\n          type: 'line',\n          source: 'route',\n          layout: {\n            'line-join': 'round',\n            'line-cap': 'round'\n          },\n          paint: {\n            'line-color': '#3887be',\n            'line-width': [\"interpolate\", [\"linear\"], [\"zoom\"], 12, 3, 22, 12]\n          }\n        }, 'waterway-label');\n        map.addLayer({\n          id: 'routearrows',\n          type: 'symbol',\n          source: 'route',\n          layout: {\n            'symbol-placement': 'line',\n            'text-field': '▶',\n            'text-size': [\"interpolate\", [\"linear\"], [\"zoom\"], 12, 24, 22, 60],\n            'symbol-spacing': [\"interpolate\", [\"linear\"], [\"zoom\"], 12, 30, 22, 160],\n            'text-keep-upright': false\n          },\n          paint: {\n            'text-color': '#3887be',\n            'text-halo-color': 'hsl(55, 11%, 96%)',\n            'text-halo-width': 3\n          }\n        }, 'waterway-label');\n      });\n    }\n  }, [userLocation]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    ref: el => mapContainer.current = el,\n    className: \"mapContainer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"top\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 9\n    }\n  }, hasRoute && __jsx(\"button\", {\n    onClick: () => getNavigation(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 24\n    }\n  }, \"\\u267B\")), __jsx(\"div\", {\n    className: \"bottom\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 9\n    }\n  }, !hasRoute && __jsx(\"button\", {\n    onClick: () => getNavigation(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 25\n    }\n  }, \"Get route\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcz82NzQ1Il0sIm5hbWVzIjpbIm1hcEJveFRva2VuIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsImRyb3BvZmZzIiwiZmVhdHVyZUNvbGxlY3Rpb24iLCJub3RoaW5nIiwibWFwIiwiTWFwIiwidXNlckxvY2F0aW9uIiwic2V0VXNlckxvY2F0aW9uIiwicm91dGVEZXRhaWxzIiwic2V0Um91dGVEZXRhaWxzIiwidXNlU3RhdGUiLCJoYXNSb3V0ZSIsInNldEhhc1JvdXRlIiwibWFwQ29udGFpbmVyIiwidXNlUmVmIiwiZ2V0TmF2aWdhdGlvbiIsImNvb3JkcyIsInN0b3BPbmUiLCJyYW5kb21DaXJjdW1mZXJlbmNlUG9pbnQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInN0b3BPbmVBcnJheSIsInN0b3BUd28iLCJzdG9wVHdvQXJyYXkiLCJheGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJvdXRlIiwicm91dGVzIiwiZGlzdGFuY2UiLCJkdXJhdGlvbiIsInJvdXRlR2VvSlNPTiIsImZlYXR1cmUiLCJnZW9tZXRyeSIsImdldFNvdXJjZSIsInNldERhdGEiLCJjYXRjaCIsImVycm9yIiwidXNlRWZmZWN0IiwibGVuZ3RoIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsImdlb0xvY2F0ZSIsIkdlb2xvY2F0ZUNvbnRyb2wiLCJwb3NpdGlvbk9wdGlvbnMiLCJlbmFibGVIaWdoQWNjdXJhY3kiLCJzaG93QWNjdXJhY3lDaXJjbGUiLCJ0cmFja1VzZXJMb2NhdGlvbiIsImFkZENvbnRyb2wiLCJvbiIsInNldFpvb20iLCJ0cmlnZ2VyIiwiYWRkU291cmNlIiwidHlwZSIsImFkZExheWVyIiwiaWQiLCJzb3VyY2UiLCJsYXlvdXQiLCJwYWludCIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBRyxtR0FBcEI7QUFDQUMsZ0RBQVEsQ0FBQ0MsV0FBVCxHQUF1QkYsV0FBdkIsQyxDQUVBOztBQUNBLE1BQU1HLFFBQVEsR0FBR0MsdUVBQWlCLENBQUMsRUFBRCxDQUFsQztBQUNBLE1BQU1DLE9BQU8sR0FBR0QsdUVBQWlCLENBQUMsRUFBRCxDQUFqQztBQUNBLElBQUlFLEdBQUo7O0FBRUEsTUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBRUMsY0FBRjtBQUFnQkM7QUFBaEIsQ0FBRCxLQUF1QztBQUNqRCxRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkYsc0RBQVEsQ0FBQyxLQUFELENBQXhDO0FBQ0EsUUFBTUcsWUFBWSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBM0I7O0FBRUEsUUFBTUMsYUFBYSxHQUFHQyxNQUFNLElBQUk7QUFDOUIsVUFBTUMsT0FBTyxHQUFHQyxnRkFBd0IsQ0FBQztBQUFFQyxjQUFRLEVBQUViLFlBQVksQ0FBQyxDQUFELENBQXhCO0FBQTZCYyxlQUFTLEVBQUVkLFlBQVksQ0FBQyxDQUFEO0FBQXBELEtBQUQsRUFBNEQsR0FBNUQsQ0FBeEM7QUFDQSxVQUFNZSxZQUFZLEdBQUcsQ0FBQ0osT0FBTyxDQUFDRSxRQUFULEVBQW1CRixPQUFPLENBQUNHLFNBQTNCLENBQXJCO0FBQ0EsVUFBTUUsT0FBTyxHQUFHSixnRkFBd0IsQ0FBQztBQUFFQyxjQUFRLEVBQUViLFlBQVksQ0FBQyxDQUFELENBQXhCO0FBQTZCYyxlQUFTLEVBQUVkLFlBQVksQ0FBQyxDQUFEO0FBQXBELEtBQUQsRUFBNEQsR0FBNUQsQ0FBeEM7QUFDQSxVQUFNaUIsWUFBWSxHQUFHLENBQUNELE9BQU8sQ0FBQ0gsUUFBVCxFQUFtQkcsT0FBTyxDQUFDRixTQUEzQixDQUFyQjtBQUVBSSxnREFBSyxDQUFDQyxHQUFOLENBQVcsdURBQXNEbkIsWUFBYSxJQUFHZSxZQUFhLElBQUdFLFlBQWEsSUFBR2pCLFlBQWEsMEdBQXlHUixXQUFZLEVBQW5QLEVBQ0c0QixJQURILENBQ1EsQ0FBQztBQUFDQztBQUFELEtBQUQsS0FBWTtBQUNoQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFEZ0IsQ0FFaEI7O0FBQ0EsWUFBTUcsS0FBSyxHQUFHSCxJQUFJLENBQUNJLE1BQUwsQ0FBWSxDQUFaLENBQWQ7QUFDQSxZQUFNO0FBQUVDLGdCQUFGO0FBQVlDO0FBQVosVUFBeUJILEtBQS9CO0FBQ0EsVUFBSUksWUFBWSxHQUFHaEMsdUVBQWlCLENBQUMsQ0FBQ2lDLDZEQUFPLENBQUNMLEtBQUssQ0FBQ00sUUFBUCxDQUFSLENBQUQsQ0FBcEM7QUFFQWhDLFNBQUcsQ0FBQ2lDLFNBQUosQ0FBYyxPQUFkLEVBQ0dDLE9BREgsQ0FDV0osWUFEWDtBQUdBdEIsaUJBQVcsQ0FBQyxJQUFELENBQVg7QUFFRCxLQWJILEVBY0cyQixLQWRILENBY1NDLEtBQUssSUFBSVosT0FBTyxDQUFDQyxHQUFSLENBQVlXLEtBQVosQ0FkbEI7QUFlRCxHQXJCRDs7QUF1QkFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUduQyxZQUFZLENBQUNvQyxNQUFiLEdBQXNCLENBQXpCLEVBQTRCO0FBQzFCdEMsU0FBRyxHQUFHLElBQUlMLGdEQUFRLENBQUNNLEdBQWIsQ0FBaUI7QUFDckJzQyxpQkFBUyxFQUFFOUIsWUFBWSxDQUFDK0IsT0FESDtBQUVyQkMsYUFBSyxFQUFFLGtDQUZjO0FBR3JCQyxjQUFNLEVBQUV4QyxZQUhhO0FBSXJCeUMsWUFBSSxFQUFFO0FBSmUsT0FBakIsQ0FBTixDQUQwQixDQVExQjs7QUFDQSxZQUFNQyxTQUFTLEdBQUcsSUFBSWpELGdEQUFRLENBQUNrRCxnQkFBYixDQUE4QjtBQUM5Q0MsdUJBQWUsRUFBRTtBQUNmQyw0QkFBa0IsRUFBRTtBQURMLFNBRDZCO0FBSTlDQywwQkFBa0IsRUFBRSxLQUowQjtBQUs5Q0MseUJBQWlCLEVBQUU7QUFMMkIsT0FBOUIsQ0FBbEI7QUFRQWpELFNBQUcsQ0FBQ2tELFVBQUosQ0FBZU4sU0FBZjtBQUVBQSxlQUFTLENBQUNPLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLE1BQU07QUFDOUJuRCxXQUFHLENBQUNvRCxPQUFKLENBQVksRUFBWjtBQUNELE9BRkQ7QUFJQXBELFNBQUcsQ0FBQ21ELEVBQUosQ0FBTyxNQUFQLEVBQWUsTUFBTTtBQUNuQlAsaUJBQVMsQ0FBQ1MsT0FBVjtBQUNBckQsV0FBRyxDQUFDc0QsU0FBSixDQUFjLE9BQWQsRUFBdUI7QUFDckJDLGNBQUksRUFBRSxTQURlO0FBRXJCaEMsY0FBSSxFQUFFeEI7QUFGZSxTQUF2QjtBQUtBQyxXQUFHLENBQUN3RCxRQUFKLENBQWE7QUFDWEMsWUFBRSxFQUFFLGtCQURPO0FBRVhGLGNBQUksRUFBRSxNQUZLO0FBR1hHLGdCQUFNLEVBQUUsT0FIRztBQUlYQyxnQkFBTSxFQUFFO0FBQ04seUJBQWEsT0FEUDtBQUVOLHdCQUFZO0FBRk4sV0FKRztBQVFYQyxlQUFLLEVBQUU7QUFDTCwwQkFBYyxTQURUO0FBRUwsMEJBQWMsQ0FDWixhQURZLEVBRVosQ0FBQyxRQUFELENBRlksRUFHWixDQUFDLE1BQUQsQ0FIWSxFQUlaLEVBSlksRUFJUixDQUpRLEVBS1osRUFMWSxFQUtSLEVBTFE7QUFGVDtBQVJJLFNBQWIsRUFrQkcsZ0JBbEJIO0FBb0JBNUQsV0FBRyxDQUFDd0QsUUFBSixDQUFhO0FBQ1hDLFlBQUUsRUFBRSxhQURPO0FBRVhGLGNBQUksRUFBRSxRQUZLO0FBR1hHLGdCQUFNLEVBQUUsT0FIRztBQUlYQyxnQkFBTSxFQUFFO0FBQ04sZ0NBQW9CLE1BRGQ7QUFFTiwwQkFBYyxHQUZSO0FBR04seUJBQWEsQ0FDWCxhQURXLEVBRVgsQ0FBQyxRQUFELENBRlcsRUFHWCxDQUFDLE1BQUQsQ0FIVyxFQUlYLEVBSlcsRUFJUCxFQUpPLEVBS1gsRUFMVyxFQUtQLEVBTE8sQ0FIUDtBQVVOLDhCQUFrQixDQUNoQixhQURnQixFQUVoQixDQUFDLFFBQUQsQ0FGZ0IsRUFHaEIsQ0FBQyxNQUFELENBSGdCLEVBSWhCLEVBSmdCLEVBSVosRUFKWSxFQUtoQixFQUxnQixFQUtaLEdBTFksQ0FWWjtBQWlCTixpQ0FBcUI7QUFqQmYsV0FKRztBQXVCWEMsZUFBSyxFQUFFO0FBQ0wsMEJBQWMsU0FEVDtBQUVMLCtCQUFtQixtQkFGZDtBQUdMLCtCQUFtQjtBQUhkO0FBdkJJLFNBQWIsRUE0QkcsZ0JBNUJIO0FBNkJELE9BeEREO0FBeUREO0FBQ0YsR0FsRlEsRUFrRk4sQ0FBQzFELFlBQUQsQ0FsRk0sQ0FBVDtBQW9GQSxTQUNFLG1FQUNFO0FBQUssT0FBRyxFQUFFMkQsRUFBRSxJQUFLcEQsWUFBWSxDQUFDK0IsT0FBYixHQUF1QnFCLEVBQXhDO0FBQTZDLGFBQVMsRUFBQyxjQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d0RCxRQUFRLElBQUk7QUFBUSxXQUFPLEVBQUUsTUFBTUksYUFBYSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRGYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNKLFFBQUQsSUFBYTtBQUFRLFdBQU8sRUFBRSxNQUFNSSxhQUFhLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGhCLENBSkYsQ0FERixDQURGO0FBWUQsQ0E1SEQ7O0FBOEhlVixrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZlYXR1cmVDb2xsZWN0aW9uLCBwb2ludCwgZmVhdHVyZSB9IGZyb20gJ0B0dXJmL2hlbHBlcnMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVMb2NhdGlvbiB9IGZyb20gJy4uL2hlbHBlcnMvZ2VuZXJlYXRlUmFuZG9tTG9jYXRpb24nO1xuaW1wb3J0IHsgcmFuZG9tQ2lyY3VtZmVyZW5jZVBvaW50IH0gZnJvbSAncmFuZG9tLWxvY2F0aW9uJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuXG5jb25zdCBtYXBCb3hUb2tlbiA9IFwicGsuZXlKMUlqb2lhWE5oYTJaaFoyVnliSFZ1WkNJc0ltRWlPaUpqYXprME4zRm1iMkl3TnpFM00yWnVlVzV4TVRseU5IWjBJbjAuQzZvckxsLWJmMkRlR1pQMVQyZk1XUVwiO1xubWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBtYXBCb3hUb2tlbjtcblxuLy8gQ3JlYXRlIGFuIGVtcHR5IEdlb0pTT04gZmVhdHVyZSBjb2xsZWN0aW9uIGZvciBkcm9wLW9mZiBsb2NhdGlvbnNcbmNvbnN0IGRyb3BvZmZzID0gZmVhdHVyZUNvbGxlY3Rpb24oW10pO1xuY29uc3Qgbm90aGluZyA9IGZlYXR1cmVDb2xsZWN0aW9uKFtdKTtcbmxldCBtYXA7XG5cbmNvbnN0IE1hcCA9ICh7IHVzZXJMb2NhdGlvbiwgc2V0VXNlckxvY2F0aW9uIH0pID0+IHtcbiAgY29uc3QgW3JvdXRlRGV0YWlscywgc2V0Um91dGVEZXRhaWxzXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBbaGFzUm91dGUsIHNldEhhc1JvdXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWFwQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGdldE5hdmlnYXRpb24gPSBjb29yZHMgPT4ge1xuICAgIGNvbnN0IHN0b3BPbmUgPSByYW5kb21DaXJjdW1mZXJlbmNlUG9pbnQoeyBsYXRpdHVkZTogdXNlckxvY2F0aW9uWzBdLCBsb25naXR1ZGU6IHVzZXJMb2NhdGlvblsxXSB9LCA1MDApXG4gICAgY29uc3Qgc3RvcE9uZUFycmF5ID0gW3N0b3BPbmUubGF0aXR1ZGUsIHN0b3BPbmUubG9uZ2l0dWRlXVxuICAgIGNvbnN0IHN0b3BUd28gPSByYW5kb21DaXJjdW1mZXJlbmNlUG9pbnQoeyBsYXRpdHVkZTogdXNlckxvY2F0aW9uWzBdLCBsb25naXR1ZGU6IHVzZXJMb2NhdGlvblsxXSB9LCA1MDApO1xuICAgIGNvbnN0IHN0b3BUd29BcnJheSA9IFtzdG9wVHdvLmxhdGl0dWRlLCBzdG9wVHdvLmxvbmdpdHVkZV1cblxuICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9kaXJlY3Rpb25zL3Y1L21hcGJveC93YWxraW5nLyR7dXNlckxvY2F0aW9ufTske3N0b3BPbmVBcnJheX07JHtzdG9wVHdvQXJyYXl9OyR7dXNlckxvY2F0aW9ufT8mYW5ub3RhdGlvbnM9ZHVyYXRpb24mY29udGludWVfc3RyYWlnaHQ9dHJ1ZSZvdmVydmlldz1mdWxsJnN0ZXBzPXRydWUmZ2VvbWV0cmllcz1nZW9qc29uJmFjY2Vzc190b2tlbj0ke21hcEJveFRva2VufWApXG4gICAgICAudGhlbigoe2RhdGF9KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIC8vIENyZWF0ZSBhIEdlb0pTT04gZmVhdHVyZSBjb2xsZWN0aW9uXG4gICAgICAgIGNvbnN0IHJvdXRlID0gZGF0YS5yb3V0ZXNbMF07XG4gICAgICAgIGNvbnN0IHsgZGlzdGFuY2UsIGR1cmF0aW9uIH0gPSByb3V0ZTtcbiAgICAgICAgdmFyIHJvdXRlR2VvSlNPTiA9IGZlYXR1cmVDb2xsZWN0aW9uKFtmZWF0dXJlKHJvdXRlLmdlb21ldHJ5KV0pO1xuXG4gICAgICAgIG1hcC5nZXRTb3VyY2UoJ3JvdXRlJylcbiAgICAgICAgICAuc2V0RGF0YShyb3V0ZUdlb0pTT04pO1xuXG4gICAgICAgIHNldEhhc1JvdXRlKHRydWUpXG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHVzZXJMb2NhdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgICAgY29udGFpbmVyOiBtYXBDb250YWluZXIuY3VycmVudCxcbiAgICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2xpZ2h0LXYxMCcsXG4gICAgICAgIGNlbnRlcjogdXNlckxvY2F0aW9uLFxuICAgICAgICB6b29tOiAxMVxuICAgICAgfSk7XG4gIFxuICAgICAgLy8gQWRkIGdlb2xvY2F0ZSBjb250cm9sIHRvIHRoZSBtYXAuXG4gICAgICBjb25zdCBnZW9Mb2NhdGUgPSBuZXcgbWFwYm94Z2wuR2VvbG9jYXRlQ29udHJvbCh7XG4gICAgICAgIHBvc2l0aW9uT3B0aW9uczoge1xuICAgICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0FjY3VyYWN5Q2lyY2xlOiBmYWxzZSxcbiAgICAgICAgdHJhY2tVc2VyTG9jYXRpb246IHRydWVcbiAgICAgIH0pXG4gIFxuICAgICAgbWFwLmFkZENvbnRyb2woZ2VvTG9jYXRlKTtcblxuICAgICAgZ2VvTG9jYXRlLm9uKCdnZW9sb2NhdGUnLCAoKSA9PiB7XG4gICAgICAgIG1hcC5zZXRab29tKDE1KTtcbiAgICAgIH0pO1xuICBcbiAgICAgIG1hcC5vbignbG9hZCcsICgpID0+IHtcbiAgICAgICAgZ2VvTG9jYXRlLnRyaWdnZXIoKTtcbiAgICAgICAgbWFwLmFkZFNvdXJjZSgncm91dGUnLCB7XG4gICAgICAgICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgICAgIGRhdGE6IG5vdGhpbmdcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICAgIGlkOiAncm91dGVsaW5lLWFjdGl2ZScsXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgIHNvdXJjZTogJ3JvdXRlJyxcbiAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICdsaW5lLWpvaW4nOiAncm91bmQnLFxuICAgICAgICAgICAgJ2xpbmUtY2FwJzogJ3JvdW5kJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcGFpbnQ6IHtcbiAgICAgICAgICAgICdsaW5lLWNvbG9yJzogJyMzODg3YmUnLFxuICAgICAgICAgICAgJ2xpbmUtd2lkdGgnOiBbXG4gICAgICAgICAgICAgIFwiaW50ZXJwb2xhdGVcIixcbiAgICAgICAgICAgICAgW1wibGluZWFyXCJdLFxuICAgICAgICAgICAgICBbXCJ6b29tXCJdLFxuICAgICAgICAgICAgICAxMiwgMyxcbiAgICAgICAgICAgICAgMjIsIDEyXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LCAnd2F0ZXJ3YXktbGFiZWwnKTtcbiAgXG4gICAgICAgIG1hcC5hZGRMYXllcih7XG4gICAgICAgICAgaWQ6ICdyb3V0ZWFycm93cycsXG4gICAgICAgICAgdHlwZTogJ3N5bWJvbCcsXG4gICAgICAgICAgc291cmNlOiAncm91dGUnLFxuICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgJ3N5bWJvbC1wbGFjZW1lbnQnOiAnbGluZScsXG4gICAgICAgICAgICAndGV4dC1maWVsZCc6ICfilrYnLFxuICAgICAgICAgICAgJ3RleHQtc2l6ZSc6IFtcbiAgICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiLFxuICAgICAgICAgICAgICBbXCJsaW5lYXJcIl0sXG4gICAgICAgICAgICAgIFtcInpvb21cIl0sXG4gICAgICAgICAgICAgIDEyLCAyNCxcbiAgICAgICAgICAgICAgMjIsIDYwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ3N5bWJvbC1zcGFjaW5nJzogW1xuICAgICAgICAgICAgICBcImludGVycG9sYXRlXCIsXG4gICAgICAgICAgICAgIFtcImxpbmVhclwiXSxcbiAgICAgICAgICAgICAgW1wiem9vbVwiXSxcbiAgICAgICAgICAgICAgMTIsIDMwLFxuICAgICAgICAgICAgICAyMiwgMTYwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgJ3RleHQta2VlcC11cHJpZ2h0JzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgICAndGV4dC1jb2xvcic6ICcjMzg4N2JlJyxcbiAgICAgICAgICAgICd0ZXh0LWhhbG8tY29sb3InOiAnaHNsKDU1LCAxMSUsIDk2JSknLFxuICAgICAgICAgICAgJ3RleHQtaGFsby13aWR0aCc6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH0sICd3YXRlcndheS1sYWJlbCcpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbdXNlckxvY2F0aW9uXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHJlZj17ZWwgPT4gKG1hcENvbnRhaW5lci5jdXJyZW50ID0gZWwpfSBjbGFzc05hbWU9XCJtYXBDb250YWluZXJcIiA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAge2hhc1JvdXRlICYmIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0TmF2aWdhdGlvbigpfT7imbs8L2J1dHRvbj59XG4gICAgICAgIDwvZGl2PiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICAgICAgeyFoYXNSb3V0ZSAmJiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE5hdmlnYXRpb24oKX0+R2V0IHJvdXRlPC9idXR0b24+fVxuICAgICAgICA8L2Rpdj4gIFxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Map.js\n");

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

/***/ "./helpers/genereateRandomLocation.js":
/*!********************************************!*\
  !*** ./helpers/genereateRandomLocation.js ***!
  \********************************************/
/*! exports provided: generateLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateLocation\", function() { return generateLocation; });\n// This was stolen from https://gis.stackexchange.com/questions/334297/generate-coordinates-with-minimum-maximum-distance-from-given-coordinates\nfunction generateLocation(latitude, longitude, max, min = 0) {\n  if (min > max) {\n    throw new Error(`min(${min}) cannot be greater than max(${max})`);\n  } // earth radius in km\n\n\n  const EARTH_RADIUS = 6371; // 1° latitude in meters\n\n  const DEGREE = EARTH_RADIUS * 2 * Math.PI / 360 * 1000; // random distance within [min-max] in km in a non-uniform way\n\n  const maxKm = max * 1000;\n  const minKm = min * 1000;\n  const r = (maxKm - minKm + 1) * Math.random() ** 0.5 + minKm; // random angle\n\n  const theta = Math.random() * 2 * Math.PI;\n  const dy = r * Math.sin(theta);\n  const dx = r * Math.cos(theta);\n  let newLatitude = latitude + dy / DEGREE;\n  let newLongitude = longitude + dx / (DEGREE * Math.cos(deg2rad(latitude)));\n  const distance = getDistanceFromLatLonInKm(latitude, longitude, newLatitude, newLongitude);\n  return [newLatitude, newLongitude];\n} // See https://stackoverflow.com/a/27943/10975709\n\nfunction getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {\n  var R = 6371; // Radius of the earth in km\n\n  var dLat = deg2rad(lat2 - lat1); // deg2rad below\n\n  var dLon = deg2rad(lon2 - lon1);\n  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);\n  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));\n  var d = R * c; // Distance in km\n\n  return d;\n}\n\nfunction deg2rad(deg) {\n  return deg * (Math.PI / 180);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2dlbmVyZWF0ZVJhbmRvbUxvY2F0aW9uLmpzP2E2YzUiXSwibmFtZXMiOlsiZ2VuZXJhdGVMb2NhdGlvbiIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWF4IiwibWluIiwiRXJyb3IiLCJFQVJUSF9SQURJVVMiLCJERUdSRUUiLCJNYXRoIiwiUEkiLCJtYXhLbSIsIm1pbkttIiwiciIsInJhbmRvbSIsInRoZXRhIiwiZHkiLCJzaW4iLCJkeCIsImNvcyIsIm5ld0xhdGl0dWRlIiwibmV3TG9uZ2l0dWRlIiwiZGVnMnJhZCIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2VGcm9tTGF0TG9uSW5LbSIsImxhdDEiLCJsb24xIiwibGF0MiIsImxvbjIiLCJSIiwiZExhdCIsImRMb24iLCJhIiwiYyIsImF0YW4yIiwic3FydCIsImQiLCJkZWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNPLFNBQVNBLGdCQUFULENBQTBCQyxRQUExQixFQUFvQ0MsU0FBcEMsRUFBK0NDLEdBQS9DLEVBQW9EQyxHQUFHLEdBQUcsQ0FBMUQsRUFBNkQ7QUFDbEUsTUFBSUEsR0FBRyxHQUFHRCxHQUFWLEVBQWU7QUFDYixVQUFNLElBQUlFLEtBQUosQ0FBVyxPQUFNRCxHQUFJLGdDQUErQkQsR0FBSSxHQUF4RCxDQUFOO0FBQ0QsR0FIaUUsQ0FLbEU7OztBQUNBLFFBQU1HLFlBQVksR0FBRyxJQUFyQixDQU5rRSxDQVFsRTs7QUFDQSxRQUFNQyxNQUFNLEdBQUtELFlBQVksR0FBRyxDQUFmLEdBQW1CRSxJQUFJLENBQUNDLEVBQXpCLEdBQStCLEdBQWhDLEdBQXVDLElBQXRELENBVGtFLENBV2xFOztBQUNBLFFBQU1DLEtBQUssR0FBR1AsR0FBRyxHQUFHLElBQXBCO0FBQ0EsUUFBTVEsS0FBSyxHQUFHUCxHQUFHLEdBQUcsSUFBcEI7QUFDQSxRQUFNUSxDQUFDLEdBQUcsQ0FBQ0YsS0FBSyxHQUFHQyxLQUFSLEdBQWdCLENBQWpCLElBQXNCSCxJQUFJLENBQUNLLE1BQUwsTUFBaUIsR0FBdkMsR0FBNkNGLEtBQXZELENBZGtFLENBZ0JsRTs7QUFDQSxRQUFNRyxLQUFLLEdBQUdOLElBQUksQ0FBQ0ssTUFBTCxLQUFnQixDQUFoQixHQUFvQkwsSUFBSSxDQUFDQyxFQUF2QztBQUVBLFFBQU1NLEVBQUUsR0FBR0gsQ0FBQyxHQUFHSixJQUFJLENBQUNRLEdBQUwsQ0FBU0YsS0FBVCxDQUFmO0FBQ0EsUUFBTUcsRUFBRSxHQUFHTCxDQUFDLEdBQUdKLElBQUksQ0FBQ1UsR0FBTCxDQUFTSixLQUFULENBQWY7QUFFQSxNQUFJSyxXQUFXLEdBQUdsQixRQUFRLEdBQUdjLEVBQUUsR0FBR1IsTUFBbEM7QUFDQSxNQUFJYSxZQUFZLEdBQUdsQixTQUFTLEdBQUdlLEVBQUUsSUFBSVYsTUFBTSxHQUFHQyxJQUFJLENBQUNVLEdBQUwsQ0FBU0csT0FBTyxDQUFDcEIsUUFBRCxDQUFoQixDQUFiLENBQWpDO0FBRUEsUUFBTXFCLFFBQVEsR0FBR0MseUJBQXlCLENBQ3hDdEIsUUFEd0MsRUFFeENDLFNBRndDLEVBR3hDaUIsV0FId0MsRUFJeENDLFlBSndDLENBQTFDO0FBT0EsU0FBTyxDQUFFRCxXQUFGLEVBQWVDLFlBQWYsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDQSxTQUFTRyx5QkFBVCxDQUFtQ0MsSUFBbkMsRUFBeUNDLElBQXpDLEVBQStDQyxJQUEvQyxFQUFxREMsSUFBckQsRUFBMkQ7QUFDekQsTUFBSUMsQ0FBQyxHQUFHLElBQVIsQ0FEeUQsQ0FDM0M7O0FBQ2QsTUFBSUMsSUFBSSxHQUFHUixPQUFPLENBQUNLLElBQUksR0FBR0YsSUFBUixDQUFsQixDQUZ5RCxDQUV4Qjs7QUFDakMsTUFBSU0sSUFBSSxHQUFHVCxPQUFPLENBQUNNLElBQUksR0FBR0YsSUFBUixDQUFsQjtBQUNBLE1BQUlNLENBQUMsR0FDSHZCLElBQUksQ0FBQ1EsR0FBTCxDQUFTYSxJQUFJLEdBQUcsQ0FBaEIsSUFBcUJyQixJQUFJLENBQUNRLEdBQUwsQ0FBU2EsSUFBSSxHQUFHLENBQWhCLENBQXJCLEdBQ0FyQixJQUFJLENBQUNVLEdBQUwsQ0FBU0csT0FBTyxDQUFDRyxJQUFELENBQWhCLElBQ0VoQixJQUFJLENBQUNVLEdBQUwsQ0FBU0csT0FBTyxDQUFDSyxJQUFELENBQWhCLENBREYsR0FFRWxCLElBQUksQ0FBQ1EsR0FBTCxDQUFTYyxJQUFJLEdBQUcsQ0FBaEIsQ0FGRixHQUdFdEIsSUFBSSxDQUFDUSxHQUFMLENBQVNjLElBQUksR0FBRyxDQUFoQixDQUxKO0FBTUEsTUFBSUUsQ0FBQyxHQUFHLElBQUl4QixJQUFJLENBQUN5QixLQUFMLENBQVd6QixJQUFJLENBQUMwQixJQUFMLENBQVVILENBQVYsQ0FBWCxFQUF5QnZCLElBQUksQ0FBQzBCLElBQUwsQ0FBVSxJQUFJSCxDQUFkLENBQXpCLENBQVo7QUFDQSxNQUFJSSxDQUFDLEdBQUdQLENBQUMsR0FBR0ksQ0FBWixDQVh5RCxDQVcxQzs7QUFFZixTQUFPRyxDQUFQO0FBQ0Q7O0FBRUQsU0FBU2QsT0FBVCxDQUFpQmUsR0FBakIsRUFBc0I7QUFDcEIsU0FBT0EsR0FBRyxJQUFJNUIsSUFBSSxDQUFDQyxFQUFMLEdBQVUsR0FBZCxDQUFWO0FBQ0QiLCJmaWxlIjoiLi9oZWxwZXJzL2dlbmVyZWF0ZVJhbmRvbUxvY2F0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyB3YXMgc3RvbGVuIGZyb20gaHR0cHM6Ly9naXMuc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzMzNDI5Ny9nZW5lcmF0ZS1jb29yZGluYXRlcy13aXRoLW1pbmltdW0tbWF4aW11bS1kaXN0YW5jZS1mcm9tLWdpdmVuLWNvb3JkaW5hdGVzXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVMb2NhdGlvbihsYXRpdHVkZSwgbG9uZ2l0dWRlLCBtYXgsIG1pbiA9IDApIHtcbiAgaWYgKG1pbiA+IG1heCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgbWluKCR7bWlufSkgY2Fubm90IGJlIGdyZWF0ZXIgdGhhbiBtYXgoJHttYXh9KWApO1xuICB9XG5cbiAgLy8gZWFydGggcmFkaXVzIGluIGttXG4gIGNvbnN0IEVBUlRIX1JBRElVUyA9IDYzNzE7XG5cbiAgLy8gMcKwIGxhdGl0dWRlIGluIG1ldGVyc1xuICBjb25zdCBERUdSRUUgPSAoKEVBUlRIX1JBRElVUyAqIDIgKiBNYXRoLlBJKSAvIDM2MCkgKiAxMDAwO1xuXG4gIC8vIHJhbmRvbSBkaXN0YW5jZSB3aXRoaW4gW21pbi1tYXhdIGluIGttIGluIGEgbm9uLXVuaWZvcm0gd2F5XG4gIGNvbnN0IG1heEttID0gbWF4ICogMTAwMDtcbiAgY29uc3QgbWluS20gPSBtaW4gKiAxMDAwO1xuICBjb25zdCByID0gKG1heEttIC0gbWluS20gKyAxKSAqIE1hdGgucmFuZG9tKCkgKiogMC41ICsgbWluS207XG5cbiAgLy8gcmFuZG9tIGFuZ2xlXG4gIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIDIgKiBNYXRoLlBJO1xuXG4gIGNvbnN0IGR5ID0gciAqIE1hdGguc2luKHRoZXRhKTtcbiAgY29uc3QgZHggPSByICogTWF0aC5jb3ModGhldGEpO1xuXG4gIGxldCBuZXdMYXRpdHVkZSA9IGxhdGl0dWRlICsgZHkgLyBERUdSRUU7XG4gIGxldCBuZXdMb25naXR1ZGUgPSBsb25naXR1ZGUgKyBkeCAvIChERUdSRUUgKiBNYXRoLmNvcyhkZWcycmFkKGxhdGl0dWRlKSkpO1xuXG4gIGNvbnN0IGRpc3RhbmNlID0gZ2V0RGlzdGFuY2VGcm9tTGF0TG9uSW5LbShcbiAgICBsYXRpdHVkZSxcbiAgICBsb25naXR1ZGUsXG4gICAgbmV3TGF0aXR1ZGUsXG4gICAgbmV3TG9uZ2l0dWRlXG4gICk7XG5cbiAgcmV0dXJuIFsgbmV3TGF0aXR1ZGUsIG5ld0xvbmdpdHVkZSBdO1xufVxuXG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI3OTQzLzEwOTc1NzA5XG5mdW5jdGlvbiBnZXREaXN0YW5jZUZyb21MYXRMb25JbkttKGxhdDEsIGxvbjEsIGxhdDIsIGxvbjIpIHtcbiAgdmFyIFIgPSA2MzcxOyAvLyBSYWRpdXMgb2YgdGhlIGVhcnRoIGluIGttXG4gIHZhciBkTGF0ID0gZGVnMnJhZChsYXQyIC0gbGF0MSk7IC8vIGRlZzJyYWQgYmVsb3dcbiAgdmFyIGRMb24gPSBkZWcycmFkKGxvbjIgLSBsb24xKTtcbiAgdmFyIGEgPVxuICAgIE1hdGguc2luKGRMYXQgLyAyKSAqIE1hdGguc2luKGRMYXQgLyAyKSArXG4gICAgTWF0aC5jb3MoZGVnMnJhZChsYXQxKSkgKlxuICAgICAgTWF0aC5jb3MoZGVnMnJhZChsYXQyKSkgKlxuICAgICAgTWF0aC5zaW4oZExvbiAvIDIpICpcbiAgICAgIE1hdGguc2luKGRMb24gLyAyKTtcbiAgdmFyIGMgPSAyICogTWF0aC5hdGFuMihNYXRoLnNxcnQoYSksIE1hdGguc3FydCgxIC0gYSkpO1xuICB2YXIgZCA9IFIgKiBjOyAvLyBEaXN0YW5jZSBpbiBrbVxuXG4gIHJldHVybiBkO1xufVxuXG5mdW5jdGlvbiBkZWcycmFkKGRlZykge1xuICByZXR1cm4gZGVnICogKE1hdGguUEkgLyAxODApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/genereateRandomLocation.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Map */ \"./components/Map.js\");\n/* harmony import */ var _helpers_getLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/getLocation */ \"./helpers/getLocation.ts\");\nvar _jsxFileName = \"/Users/isakfagerlund/Projects/breathtaker/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction HomePage() {\n  const {\n    0: userLocation,\n    1: setUserLocation\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    Object(_helpers_getLocation__WEBPACK_IMPORTED_MODULE_3__[\"getLocation\"])(response => {\n      const {\n        latitude,\n        longitude\n      } = response === null || response === void 0 ? void 0 : response.coords;\n      setUserLocation([longitude, latitude]);\n    }, err => console.log(err));\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Breathtaker\"), __jsx(\"link\", {\n    href: \"https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  })), __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    userLocation: userLocation,\n    setUserLocation: setUserLocation,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInVzZXJMb2NhdGlvbiIsInNldFVzZXJMb2NhdGlvbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0TG9jYXRpb24iLCJyZXNwb25zZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsNEVBQVcsQ0FBQ0MsUUFBUSxJQUFJO0FBQ3RCLFlBQU07QUFBRUMsZ0JBQUY7QUFBWUM7QUFBWixVQUEwQkYsUUFBMUIsYUFBMEJBLFFBQTFCLHVCQUEwQkEsUUFBUSxDQUFFRyxNQUExQztBQUNBUCxxQkFBZSxDQUFDLENBQUVNLFNBQUYsRUFBYUQsUUFBYixDQUFELENBQWY7QUFDRCxLQUhVLEVBR1JHLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FIQyxDQUFYO0FBSUQsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQU0sUUFBSSxFQUFDLDBEQUFYO0FBQXNFLE9BQUcsRUFBQyxZQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsdURBQUQ7QUFBSyxnQkFBWSxFQUFFVCxZQUFuQjtBQUFpQyxtQkFBZSxFQUFFQyxlQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERjtBQVNEOztBQUVjRix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJ1xuaW1wb3J0IHsgZ2V0TG9jYXRpb24gfSBmcm9tICcuLi9oZWxwZXJzL2dldExvY2F0aW9uJztcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFt1c2VyTG9jYXRpb24sIHNldFVzZXJMb2NhdGlvbl0gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldExvY2F0aW9uKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcmVzcG9uc2U/LmNvb3JkcztcbiAgICAgIHNldFVzZXJMb2NhdGlvbihbIGxvbmdpdHVkZSwgbGF0aXR1ZGUgXSlcbiAgICB9LCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5CcmVhdGh0YWtlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vYXBpLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3YxLjguMS9tYXBib3gtZ2wuY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TWFwIHVzZXJMb2NhdGlvbj17dXNlckxvY2F0aW9ufSBzZXRVc2VyTG9jYXRpb249e3NldFVzZXJMb2NhdGlvbn0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

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

/***/ "random-location":
/*!**********************************!*\
  !*** external "random-location" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"random-location\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYW5kb20tbG9jYXRpb25cIj81NDc1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJhbmRvbS1sb2NhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJhbmRvbS1sb2NhdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///random-location\n");

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