'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEV_TOOLS_TOGGLE_VISIBILITY = exports.DEV_TOOLS_TOGGLE_VISIBILITY = 'DEV_TOOLS_TOGGLE_VISIBILITY';
var DEV_TOOLS_SET_ROUTE_MODE = exports.DEV_TOOLS_SET_ROUTE_MODE = 'DEV_TOOLS_SET_ROUTE_MODE';
var DEV_TOOLS_SET_FLUX_STORE_MODE = exports.DEV_TOOLS_SET_FLUX_STORE_MODE = 'DEV_TOOLS_SET_FLUX_STORE_MODE';
var toggleVisibility = exports.toggleVisibility = function toggleVisibility() {
  return { type: DEV_TOOLS_TOGGLE_VISIBILITY };
};

var setRouteMode = exports.setRouteMode = function setRouteMode() {
  return { type: DEV_TOOLS_SET_ROUTE_MODE };
};
var setFluxStoreMode = exports.setFluxStoreMode = function setFluxStoreMode() {
  return { type: DEV_TOOLS_SET_FLUX_STORE_MODE };
};