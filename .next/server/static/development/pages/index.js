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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/helpers */ \"@turf/helpers\");\n/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl */ \"mapbox-gl\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/isakfagerlund/Documents/Projects/breathtaker/components/Map.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nmapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.accessToken = \"pk.eyJ1IjoiaXNha2ZhZ2VybHVuZCIsImEiOiJjazk0N3Fmb2IwNzE3M2ZueW5xMTlyNHZ0In0.C6orLl-bf2DeGZP1T2fMWQ\";\nconst truckLocation = [-83.093, 42.376];\nconst warehouseLocation = [-83.083, 42.363];\nconst lastQueryTime = 0;\nconst lastAtRestaurant = 0;\nlet keepTrack = [];\nlet restaurantIndex = \"\";\nconst currentSchedule = [];\nconst currentRoute = null;\nconst pointHopper = {};\nconst pause = true;\nconst speedFactor = 50;\nconst warehouse = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"featureCollection\"])([Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"point\"])(warehouseLocation)]); // Create an empty GeoJSON feature collection for drop-off locations\n\nconst dropoffs = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"featureCollection\"])([]);\nconst nothing = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"featureCollection\"])([]);\nconst initialMapState = {\n  lng: 5,\n  lat: 34,\n  zoom: 2\n}; // Here you'll specify all the parameters necessary for requesting a response from the Optimization API\n\nconst assembleQueryURL = () => {\n  // Store the location of the truck in a variable called coordinates\n  const coordinates = [truckLocation];\n  const distributions = [];\n  keepTrack = [truckLocation]; // Create an array of GeoJSON feature collections for each point\n\n  const restJobs = objectToArray(pointHopper); // If there are any orders from this restaurant\n\n  if (restJobs.length > 0) {\n    // Check to see if the request was made after visiting the restaurant\n    const needToPickUp = restJobs.filter(function (d, i) {\n      return d.properties.orderTime > lastAtRestaurant;\n    }).length > 0; // If the request was made after picking up from the restaurant,\n    // Add the restaurant as an additional stop\n\n    if (needToPickUp) {\n      restaurantIndex = coordinates.length; // Add the restaurant as a coordinate\n\n      coordinates.push(warehouseLocation); // push the restaurant itself into the array\n\n      keepTrack.push(pointHopper.warehouse);\n    }\n\n    restJobs.forEach(function (d, i) {\n      // Add dropoff to list\n      keepTrack.push(d);\n      coordinates.push(d.geometry.coordinates); // if order not yet picked up, add a reroute\n\n      if (needToPickUp && d.properties.orderTime > lastAtRestaurant) {\n        distributions.push(restaurantIndex + ',' + (coordinates.length - 1));\n      }\n    });\n  } // Set the profile to `driving`\n  // Coordinates will include the current location of the truck,\n\n\n  return 'https://api.mapbox.com/optimized-trips/v1/mapbox/driving/' + coordinates.join(';') + '?distributions=' + distributions.join(';') + '&overview=full&steps=true&geometries=geojson&source=first&access_token=' + mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.accessToken;\n};\n\nconst objectToArray = obj => {\n  const keys = Object.keys(obj);\n  const routeGeoJSON = keys.map(key => obj[key]);\n  return routeGeoJSON;\n};\n\nconst Map = () => {\n  const {\n    0: mapState,\n    1: setMapState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(initialMapState);\n  const mapContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.Map({\n      container: mapContainer.current,\n      style: 'mapbox://styles/mapbox/light-v10',\n      center: truckLocation,\n      zoom: 12\n    });\n\n    const newDropoff = coords => {\n      // Store the clicked point as a new GeoJSON feature with\n      // two properties: `orderTime` and `key`\n      const pt = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"point\"])([coords.lng, coords.lat], {\n        orderTime: Date.now(),\n        key: Math.random()\n      });\n      dropoffs.features.push(pt);\n      pointHopper[pt.properties.key] = pt;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(assembleQueryURL()).then(({\n        data\n      }) => {\n        // Create a GeoJSON feature collection\n        var routeGeoJSON = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"featureCollection\"])([Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_1__[\"feature\"])(data.trips[0].geometry)]); // If there is no route provided, reset\n\n        if (!data.trips[0]) {\n          routeGeoJSON = nothing;\n        } else {\n          // Update the `route` source by getting the route source\n          // and setting the data equal to routeGeoJSON\n          map.getSource('route').setData(routeGeoJSON);\n        }\n\n        if (data.waypoints.length === 12) {\n          window.alert('Maximum number of points reached. Read more at docs.mapbox.com/api/navigation/#optimization.');\n        }\n      }).catch(error => console.log(error));\n    };\n\n    const updateDropoffs = geojson => {\n      map.getSource('dropoffs-symbol').setData(geojson);\n    };\n\n    map.on('load', () => {\n      map.on('click', e => {\n        // When the map is clicked, add a new drop-off point\n        // and update the `dropoffs-symbol` layer\n        newDropoff(map.unproject(e.point));\n        updateDropoffs(dropoffs);\n      });\n      const marker = document.createElement('div');\n      marker.classList = 'truck'; // Create a new marker\n\n      const truckMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_3___default.a.Marker(marker).setLngLat(truckLocation).addTo(map); // Create a circle layer\n\n      map.addLayer({\n        id: 'warehouse',\n        type: 'circle',\n        source: {\n          data: warehouse,\n          type: 'geojson'\n        },\n        paint: {\n          'circle-radius': 20,\n          'circle-color': 'white',\n          'circle-stroke-color': '#3887be',\n          'circle-stroke-width': 3\n        }\n      }); // Create a symbol layer on top of circle layer\n\n      map.addLayer({\n        id: 'warehouse-symbol',\n        type: 'symbol',\n        source: {\n          data: warehouse,\n          type: 'geojson'\n        },\n        layout: {\n          'icon-image': 'grocery-15',\n          'icon-size': 1\n        },\n        paint: {\n          'text-color': '#3887be'\n        }\n      });\n      map.addLayer({\n        id: 'dropoffs-symbol',\n        type: 'symbol',\n        source: {\n          data: dropoffs,\n          type: 'geojson'\n        },\n        layout: {\n          'icon-allow-overlap': true,\n          'icon-ignore-placement': true,\n          'icon-image': 'marker-15'\n        }\n      });\n      map.addSource('route', {\n        type: 'geojson',\n        data: nothing\n      });\n      map.addLayer({\n        id: 'routeline-active',\n        type: 'line',\n        source: 'route',\n        layout: {\n          'line-join': 'round',\n          'line-cap': 'round'\n        },\n        paint: {\n          'line-color': '#3887be',\n          'line-width': [\"interpolate\", [\"linear\"], [\"zoom\"], 12, 3, 22, 12]\n        }\n      }, 'waterway-label');\n      map.addLayer({\n        id: 'routearrows',\n        type: 'symbol',\n        source: 'route',\n        layout: {\n          'symbol-placement': 'line',\n          'text-field': '▶',\n          'text-size': [\"interpolate\", [\"linear\"], [\"zoom\"], 12, 24, 22, 60],\n          'symbol-spacing': [\"interpolate\", [\"linear\"], [\"zoom\"], 12, 30, 22, 160],\n          'text-keep-upright': false\n        },\n        paint: {\n          'text-color': '#3887be',\n          'text-halo-color': 'hsl(55, 11%, 96%)',\n          'text-halo-width': 3\n        }\n      }, 'waterway-label');\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    ref: el => mapContainer.current = el,\n    className: \"mapContainer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 256,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcC5qcz82NzQ1Il0sIm5hbWVzIjpbIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJ0cnVja0xvY2F0aW9uIiwid2FyZWhvdXNlTG9jYXRpb24iLCJsYXN0UXVlcnlUaW1lIiwibGFzdEF0UmVzdGF1cmFudCIsImtlZXBUcmFjayIsInJlc3RhdXJhbnRJbmRleCIsImN1cnJlbnRTY2hlZHVsZSIsImN1cnJlbnRSb3V0ZSIsInBvaW50SG9wcGVyIiwicGF1c2UiLCJzcGVlZEZhY3RvciIsIndhcmVob3VzZSIsImZlYXR1cmVDb2xsZWN0aW9uIiwicG9pbnQiLCJkcm9wb2ZmcyIsIm5vdGhpbmciLCJpbml0aWFsTWFwU3RhdGUiLCJsbmciLCJsYXQiLCJ6b29tIiwiYXNzZW1ibGVRdWVyeVVSTCIsImNvb3JkaW5hdGVzIiwiZGlzdHJpYnV0aW9ucyIsInJlc3RKb2JzIiwib2JqZWN0VG9BcnJheSIsImxlbmd0aCIsIm5lZWRUb1BpY2tVcCIsImZpbHRlciIsImQiLCJpIiwicHJvcGVydGllcyIsIm9yZGVyVGltZSIsInB1c2giLCJmb3JFYWNoIiwiZ2VvbWV0cnkiLCJqb2luIiwib2JqIiwia2V5cyIsIk9iamVjdCIsInJvdXRlR2VvSlNPTiIsIm1hcCIsImtleSIsIk1hcCIsIm1hcFN0YXRlIiwic2V0TWFwU3RhdGUiLCJ1c2VTdGF0ZSIsIm1hcENvbnRhaW5lciIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzdHlsZSIsImNlbnRlciIsIm5ld0Ryb3BvZmYiLCJjb29yZHMiLCJwdCIsIkRhdGUiLCJub3ciLCJNYXRoIiwicmFuZG9tIiwiZmVhdHVyZXMiLCJheGlvcyIsImdldCIsInRoZW4iLCJkYXRhIiwiZmVhdHVyZSIsInRyaXBzIiwiZ2V0U291cmNlIiwic2V0RGF0YSIsIndheXBvaW50cyIsIndpbmRvdyIsImFsZXJ0IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVEcm9wb2ZmcyIsImdlb2pzb24iLCJvbiIsImUiLCJ1bnByb2plY3QiLCJtYXJrZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0cnVja01hcmtlciIsIk1hcmtlciIsInNldExuZ0xhdCIsImFkZFRvIiwiYWRkTGF5ZXIiLCJpZCIsInR5cGUiLCJzb3VyY2UiLCJwYWludCIsImxheW91dCIsImFkZFNvdXJjZSIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdEQUFRLENBQUNDLFdBQVQsR0FBdUIsbUdBQXZCO0FBRUEsTUFBTUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFGLEVBQVUsTUFBVixDQUF0QjtBQUNBLE1BQU1DLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxNQUFGLEVBQVUsTUFBVixDQUExQjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxDQUF0QjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHLENBQXpCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsZUFBZSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHLEVBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLElBQXJCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQWQ7QUFDQSxNQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHVFQUFpQixDQUFDLENBQUNDLDJEQUFLLENBQUNaLGlCQUFELENBQU4sQ0FBRCxDQUFuQyxDLENBQ0E7O0FBQ0EsTUFBTWEsUUFBUSxHQUFHRix1RUFBaUIsQ0FBQyxFQUFELENBQWxDO0FBQ0EsTUFBTUcsT0FBTyxHQUFHSCx1RUFBaUIsQ0FBQyxFQUFELENBQWpDO0FBRUEsTUFBTUksZUFBZSxHQUFHO0FBQ3RCQyxLQUFHLEVBQUUsQ0FEaUI7QUFFdEJDLEtBQUcsRUFBRSxFQUZpQjtBQUd0QkMsTUFBSSxFQUFFO0FBSGdC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LENBSFA7QUFVTiw0QkFBa0IsQ0FDaEIsYUFEZ0IsRUFFaEIsQ0FBQyxRQUFELENBRmdCLEVBR2hCLENBQUMsTUFBRCxDQUhnQixFQUloQixFQUpnQixFQUlaLEVBSlksRUFLaEIsRUFMZ0IsRUFLWixHQUxZLENBVlo7QUFpQk4sK0JBQXFCO0FBakJmLFNBSkc7QUF1QlhELGFBQUssRUFBRTtBQUNMLHdCQUFjLFNBRFQ7QUFFTCw2QkFBbUIsbUJBRmQ7QUFHTCw2QkFBbUI7QUFIZDtBQXZCSSxPQUFiLEVBNEJHLGdCQTVCSDtBQTZCRCxLQXJIRDtBQXVIRCxHQXZLUSxFQXVLTixFQXZLTSxDQUFUO0FBeUtBLFNBQ0UsbUVBQ0U7QUFBSyxPQUFHLEVBQUVHLEVBQUUsSUFBS2xELFlBQVksQ0FBQ0ksT0FBYixHQUF1QjhDLEVBQXhDO0FBQTZDLGFBQVMsRUFBQyxjQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQUtELENBbExEOztBQW9MZXRELGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NYXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmVhdHVyZUNvbGxlY3Rpb24sIHBvaW50LCBmZWF0dXJlIH0gZnJvbSAnQHR1cmYvaGVscGVycyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XG5cbm1hcGJveGdsLmFjY2Vzc1Rva2VuID0gXCJway5leUoxSWpvaWFYTmhhMlpoWjJWeWJIVnVaQ0lzSW1FaU9pSmphemswTjNGbWIySXdOekUzTTJadWVXNXhNVGx5TkhaMEluMC5DNm9yTGwtYmYyRGVHWlAxVDJmTVdRXCJcblxuY29uc3QgdHJ1Y2tMb2NhdGlvbiA9IFstODMuMDkzLCA0Mi4zNzZdO1xuY29uc3Qgd2FyZWhvdXNlTG9jYXRpb24gPSBbLTgzLjA4MywgNDIuMzYzXTtcbmNvbnN0IGxhc3RRdWVyeVRpbWUgPSAwO1xuY29uc3QgbGFzdEF0UmVzdGF1cmFudCA9IDA7XG5sZXQga2VlcFRyYWNrID0gW107XG5sZXQgcmVzdGF1cmFudEluZGV4ID0gXCJcIjtcbmNvbnN0IGN1cnJlbnRTY2hlZHVsZSA9IFtdO1xuY29uc3QgY3VycmVudFJvdXRlID0gbnVsbDtcbmNvbnN0IHBvaW50SG9wcGVyID0ge307XG5jb25zdCBwYXVzZSA9IHRydWU7XG5jb25zdCBzcGVlZEZhY3RvciA9IDUwO1xuY29uc3Qgd2FyZWhvdXNlID0gZmVhdHVyZUNvbGxlY3Rpb24oW3BvaW50KHdhcmVob3VzZUxvY2F0aW9uKV0pO1xuLy8gQ3JlYXRlIGFuIGVtcHR5IEdlb0pTT04gZmVhdHVyZSBjb2xsZWN0aW9uIGZvciBkcm9wLW9mZiBsb2NhdGlvbnNcbmNvbnN0IGRyb3BvZmZzID0gZmVhdHVyZUNvbGxlY3Rpb24oW10pO1xuY29uc3Qgbm90aGluZyA9IGZlYXR1cmVDb2xsZWN0aW9uKFtdKTtcblxuY29uc3QgaW5pdGlhbE1hcFN0YXRlID0ge1xuICBsbmc6IDUsXG4gIGxhdDogMzQsXG4gIHpvb206IDJcbn07XG5cbi8vIEhlcmUgeW91J2xsIHNwZWNpZnkgYWxsIHRoZSBwYXJhbWV0ZXJzIG5lY2Vzc2FyeSBmb3IgcmVxdWVzdGluZyBhIHJlc3BvbnNlIGZyb20gdGhlIE9wdGltaXphdGlvbiBBUElcbmNvbnN0IGFzc2VtYmxlUXVlcnlVUkwgPSAoKSA9PiB7XG5cbiAgLy8gU3RvcmUgdGhlIGxvY2F0aW9uIG9mIHRoZSB0cnVjayBpbiBhIHZhcmlhYmxlIGNhbGxlZCBjb29yZGluYXRlc1xuICBjb25zdCBjb29yZGluYXRlcyA9IFt0cnVja0xvY2F0aW9uXTtcbiAgY29uc3QgZGlzdHJpYnV0aW9ucyA9IFtdO1xuICBrZWVwVHJhY2sgPSBbdHJ1Y2tMb2NhdGlvbl07XG5cbiAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIEdlb0pTT04gZmVhdHVyZSBjb2xsZWN0aW9ucyBmb3IgZWFjaCBwb2ludFxuICBjb25zdCByZXN0Sm9icyA9IG9iamVjdFRvQXJyYXkocG9pbnRIb3BwZXIpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBhbnkgb3JkZXJzIGZyb20gdGhpcyByZXN0YXVyYW50XG4gIGlmIChyZXN0Sm9icy5sZW5ndGggPiAwKSB7XG5cbiAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYWZ0ZXIgdmlzaXRpbmcgdGhlIHJlc3RhdXJhbnRcbiAgICBjb25zdCBuZWVkVG9QaWNrVXAgPSByZXN0Sm9icy5maWx0ZXIoZnVuY3Rpb24oZCwgaSkge1xuICAgICAgcmV0dXJuIGQucHJvcGVydGllcy5vcmRlclRpbWUgPiBsYXN0QXRSZXN0YXVyYW50O1xuICAgIH0pLmxlbmd0aCA+IDA7XG5cbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhZnRlciBwaWNraW5nIHVwIGZyb20gdGhlIHJlc3RhdXJhbnQsXG4gICAgLy8gQWRkIHRoZSByZXN0YXVyYW50IGFzIGFuIGFkZGl0aW9uYWwgc3RvcFxuICAgIGlmIChuZWVkVG9QaWNrVXApIHtcbiAgICAgIHJlc3RhdXJhbnRJbmRleCA9IGNvb3JkaW5hdGVzLmxlbmd0aDtcbiAgICAgIC8vIEFkZCB0aGUgcmVzdGF1cmFudCBhcyBhIGNvb3JkaW5hdGVcbiAgICAgIGNvb3JkaW5hdGVzLnB1c2god2FyZWhvdXNlTG9jYXRpb24pO1xuICAgICAgLy8gcHVzaCB0aGUgcmVzdGF1cmFudCBpdHNlbGYgaW50byB0aGUgYXJyYXlcbiAgICAgIGtlZXBUcmFjay5wdXNoKHBvaW50SG9wcGVyLndhcmVob3VzZSk7XG4gICAgfVxuXG4gICAgcmVzdEpvYnMuZm9yRWFjaChmdW5jdGlvbihkLCBpKSB7XG4gICAgICAvLyBBZGQgZHJvcG9mZiB0byBsaXN0XG4gICAgICBrZWVwVHJhY2sucHVzaChkKTtcbiAgICAgIGNvb3JkaW5hdGVzLnB1c2goZC5nZW9tZXRyeS5jb29yZGluYXRlcyk7XG4gICAgICAvLyBpZiBvcmRlciBub3QgeWV0IHBpY2tlZCB1cCwgYWRkIGEgcmVyb3V0ZVxuICAgICAgaWYgKG5lZWRUb1BpY2tVcCAmJiBkLnByb3BlcnRpZXMub3JkZXJUaW1lID4gbGFzdEF0UmVzdGF1cmFudCkge1xuICAgICAgICBkaXN0cmlidXRpb25zLnB1c2gocmVzdGF1cmFudEluZGV4ICsgJywnICsgKGNvb3JkaW5hdGVzLmxlbmd0aCAtIDEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNldCB0aGUgcHJvZmlsZSB0byBgZHJpdmluZ2BcbiAgLy8gQ29vcmRpbmF0ZXMgd2lsbCBpbmNsdWRlIHRoZSBjdXJyZW50IGxvY2F0aW9uIG9mIHRoZSB0cnVjayxcbiAgcmV0dXJuICdodHRwczovL2FwaS5tYXBib3guY29tL29wdGltaXplZC10cmlwcy92MS9tYXBib3gvZHJpdmluZy8nICsgY29vcmRpbmF0ZXMuam9pbignOycpICsgJz9kaXN0cmlidXRpb25zPScgKyBkaXN0cmlidXRpb25zLmpvaW4oJzsnKSArICcmb3ZlcnZpZXc9ZnVsbCZzdGVwcz10cnVlJmdlb21ldHJpZXM9Z2VvanNvbiZzb3VyY2U9Zmlyc3QmYWNjZXNzX3Rva2VuPScgKyBtYXBib3hnbC5hY2Nlc3NUb2tlbjtcbn1cblxuY29uc3Qgb2JqZWN0VG9BcnJheSA9IG9iaiA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBjb25zdCByb3V0ZUdlb0pTT04gPSBrZXlzLm1hcChrZXkgPT4gb2JqW2tleV0pO1xuICByZXR1cm4gcm91dGVHZW9KU09OO1xufVxuXG5jb25zdCBNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IFttYXBTdGF0ZSwgc2V0TWFwU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbE1hcFN0YXRlKTtcbiAgY29uc3QgbWFwQ29udGFpbmVyID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IG1hcENvbnRhaW5lci5jdXJyZW50LFxuICAgICAgc3R5bGU6ICdtYXBib3g6Ly9zdHlsZXMvbWFwYm94L2xpZ2h0LXYxMCcsXG4gICAgICBjZW50ZXI6IHRydWNrTG9jYXRpb24sXG4gICAgICB6b29tOiAxMlxuICAgIH0pO1xuXG4gICAgY29uc3QgbmV3RHJvcG9mZiA9IGNvb3JkcyA9PiB7XG4gICAgICAvLyBTdG9yZSB0aGUgY2xpY2tlZCBwb2ludCBhcyBhIG5ldyBHZW9KU09OIGZlYXR1cmUgd2l0aFxuICAgICAgLy8gdHdvIHByb3BlcnRpZXM6IGBvcmRlclRpbWVgIGFuZCBga2V5YFxuICAgICAgY29uc3QgcHQgPSBwb2ludChcbiAgICAgICAgW2Nvb3Jkcy5sbmcsIGNvb3Jkcy5sYXRdLFxuICAgICAgICB7XG4gICAgICAgICAgb3JkZXJUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgIGtleTogTWF0aC5yYW5kb20oKVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgZHJvcG9mZnMuZmVhdHVyZXMucHVzaChwdCk7XG4gICAgICBwb2ludEhvcHBlcltwdC5wcm9wZXJ0aWVzLmtleV0gPSBwdDtcbiAgICBcbiAgICAgIGF4aW9zLmdldChhc3NlbWJsZVF1ZXJ5VVJMKCkpXG4gICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHtcbiAgICAgICAgICAvLyBDcmVhdGUgYSBHZW9KU09OIGZlYXR1cmUgY29sbGVjdGlvblxuICAgICAgICAgIHZhciByb3V0ZUdlb0pTT04gPSBmZWF0dXJlQ29sbGVjdGlvbihbZmVhdHVyZShkYXRhLnRyaXBzWzBdLmdlb21ldHJ5KV0pO1xuICAgIFxuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIG5vIHJvdXRlIHByb3ZpZGVkLCByZXNldFxuICAgICAgICAgIGlmICghZGF0YS50cmlwc1swXSkge1xuICAgICAgICAgICAgcm91dGVHZW9KU09OID0gbm90aGluZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBgcm91dGVgIHNvdXJjZSBieSBnZXR0aW5nIHRoZSByb3V0ZSBzb3VyY2VcbiAgICAgICAgICAgIC8vIGFuZCBzZXR0aW5nIHRoZSBkYXRhIGVxdWFsIHRvIHJvdXRlR2VvSlNPTlxuICAgICAgICAgICAgbWFwLmdldFNvdXJjZSgncm91dGUnKVxuICAgICAgICAgICAgICAuc2V0RGF0YShyb3V0ZUdlb0pTT04pO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICBpZiAoZGF0YS53YXlwb2ludHMubGVuZ3RoID09PSAxMikge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdNYXhpbXVtIG51bWJlciBvZiBwb2ludHMgcmVhY2hlZC4gUmVhZCBtb3JlIGF0IGRvY3MubWFwYm94LmNvbS9hcGkvbmF2aWdhdGlvbi8jb3B0aW1pemF0aW9uLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVEcm9wb2ZmcyA9IGdlb2pzb24gPT4ge1xuICAgICAgbWFwLmdldFNvdXJjZSgnZHJvcG9mZnMtc3ltYm9sJylcbiAgICAgICAgLnNldERhdGEoZ2VvanNvbik7XG4gICAgfVxuXG4gICAgbWFwLm9uKCdsb2FkJywgKCkgPT4ge1xuICAgICAgbWFwLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAvLyBXaGVuIHRoZSBtYXAgaXMgY2xpY2tlZCwgYWRkIGEgbmV3IGRyb3Atb2ZmIHBvaW50XG4gICAgICAgIC8vIGFuZCB1cGRhdGUgdGhlIGBkcm9wb2Zmcy1zeW1ib2xgIGxheWVyXG4gICAgICAgIG5ld0Ryb3BvZmYobWFwLnVucHJvamVjdChlLnBvaW50KSk7XG4gICAgICAgIHVwZGF0ZURyb3BvZmZzKGRyb3BvZmZzKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG1hcmtlci5jbGFzc0xpc3QgPSAndHJ1Y2snO1xuICAgIFxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IG1hcmtlclxuICAgICAgY29uc3QgdHJ1Y2tNYXJrZXIgPSBuZXcgbWFwYm94Z2wuTWFya2VyKG1hcmtlcilcbiAgICAgICAgLnNldExuZ0xhdCh0cnVja0xvY2F0aW9uKVxuICAgICAgICAuYWRkVG8obWFwKTtcblxuICAgICAgLy8gQ3JlYXRlIGEgY2lyY2xlIGxheWVyXG4gICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICBpZDogJ3dhcmVob3VzZScsXG4gICAgICAgIHR5cGU6ICdjaXJjbGUnLFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICBkYXRhOiB3YXJlaG91c2UsXG4gICAgICAgICAgdHlwZTogJ2dlb2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgJ2NpcmNsZS1yYWRpdXMnOiAyMCxcbiAgICAgICAgICAnY2lyY2xlLWNvbG9yJzogJ3doaXRlJyxcbiAgICAgICAgICAnY2lyY2xlLXN0cm9rZS1jb2xvcic6ICcjMzg4N2JlJyxcbiAgICAgICAgICAnY2lyY2xlLXN0cm9rZS13aWR0aCc6IDNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSBhIHN5bWJvbCBsYXllciBvbiB0b3Agb2YgY2lyY2xlIGxheWVyXG4gICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICBpZDogJ3dhcmVob3VzZS1zeW1ib2wnLFxuICAgICAgICB0eXBlOiAnc3ltYm9sJyxcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgZGF0YTogd2FyZWhvdXNlLFxuICAgICAgICAgIHR5cGU6ICdnZW9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAnaWNvbi1pbWFnZSc6ICdncm9jZXJ5LTE1JyxcbiAgICAgICAgICAnaWNvbi1zaXplJzogMVxuICAgICAgICB9LFxuICAgICAgICBwYWludDoge1xuICAgICAgICAgICd0ZXh0LWNvbG9yJzogJyMzODg3YmUnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICBpZDogJ2Ryb3BvZmZzLXN5bWJvbCcsXG4gICAgICAgIHR5cGU6ICdzeW1ib2wnLFxuICAgICAgICBzb3VyY2U6IHtcbiAgICAgICAgICBkYXRhOiBkcm9wb2ZmcyxcbiAgICAgICAgICB0eXBlOiAnZ2VvanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgJ2ljb24tYWxsb3ctb3ZlcmxhcCc6IHRydWUsXG4gICAgICAgICAgJ2ljb24taWdub3JlLXBsYWNlbWVudCc6IHRydWUsXG4gICAgICAgICAgJ2ljb24taW1hZ2UnOiAnbWFya2VyLTE1JyxcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1hcC5hZGRTb3VyY2UoJ3JvdXRlJywge1xuICAgICAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICAgIGRhdGE6IG5vdGhpbmdcbiAgICAgIH0pO1xuICAgICAgXG4gICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICBpZDogJ3JvdXRlbGluZS1hY3RpdmUnLFxuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIHNvdXJjZTogJ3JvdXRlJyxcbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgJ2xpbmUtam9pbic6ICdyb3VuZCcsXG4gICAgICAgICAgJ2xpbmUtY2FwJzogJ3JvdW5kJ1xuICAgICAgICB9LFxuICAgICAgICBwYWludDoge1xuICAgICAgICAgICdsaW5lLWNvbG9yJzogJyMzODg3YmUnLFxuICAgICAgICAgICdsaW5lLXdpZHRoJzogW1xuICAgICAgICAgICAgXCJpbnRlcnBvbGF0ZVwiLFxuICAgICAgICAgICAgW1wibGluZWFyXCJdLFxuICAgICAgICAgICAgW1wiem9vbVwiXSxcbiAgICAgICAgICAgIDEyLCAzLFxuICAgICAgICAgICAgMjIsIDEyXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LCAnd2F0ZXJ3YXktbGFiZWwnKTtcblxuICAgICAgbWFwLmFkZExheWVyKHtcbiAgICAgICAgaWQ6ICdyb3V0ZWFycm93cycsXG4gICAgICAgIHR5cGU6ICdzeW1ib2wnLFxuICAgICAgICBzb3VyY2U6ICdyb3V0ZScsXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgICdzeW1ib2wtcGxhY2VtZW50JzogJ2xpbmUnLFxuICAgICAgICAgICd0ZXh0LWZpZWxkJzogJ+KWticsXG4gICAgICAgICAgJ3RleHQtc2l6ZSc6IFtcbiAgICAgICAgICAgIFwiaW50ZXJwb2xhdGVcIixcbiAgICAgICAgICAgIFtcImxpbmVhclwiXSxcbiAgICAgICAgICAgIFtcInpvb21cIl0sXG4gICAgICAgICAgICAxMiwgMjQsXG4gICAgICAgICAgICAyMiwgNjBcbiAgICAgICAgICBdLFxuICAgICAgICAgICdzeW1ib2wtc3BhY2luZyc6IFtcbiAgICAgICAgICAgIFwiaW50ZXJwb2xhdGVcIixcbiAgICAgICAgICAgIFtcImxpbmVhclwiXSxcbiAgICAgICAgICAgIFtcInpvb21cIl0sXG4gICAgICAgICAgICAxMiwgMzAsXG4gICAgICAgICAgICAyMiwgMTYwXG4gICAgICAgICAgXSxcbiAgICAgICAgICAndGV4dC1rZWVwLXVwcmlnaHQnOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBwYWludDoge1xuICAgICAgICAgICd0ZXh0LWNvbG9yJzogJyMzODg3YmUnLFxuICAgICAgICAgICd0ZXh0LWhhbG8tY29sb3InOiAnaHNsKDU1LCAxMSUsIDk2JSknLFxuICAgICAgICAgICd0ZXh0LWhhbG8td2lkdGgnOiAzXG4gICAgICAgIH1cbiAgICAgIH0sICd3YXRlcndheS1sYWJlbCcpO1xuICAgIH0pO1xuXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgcmVmPXtlbCA9PiAobWFwQ29udGFpbmVyLmN1cnJlbnQgPSBlbCl9IGNsYXNzTmFtZT1cIm1hcENvbnRhaW5lclwiIC8+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Map.js\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });