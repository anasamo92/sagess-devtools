'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _devToolsSettingsActions = require('../actions/dev-tools-settings-actions');

// default stata
var DEV_TOOLS_SETTINGS_DEFAULT = {
    isVisible: false,
    isRoutesVisible: false,
    isFluxStoresVisible: true
};

function devToolsSettingsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEV_TOOLS_SETTINGS_DEFAULT;
    var action = arguments[1];

    switch (action.type) {
        case _devToolsSettingsActions.DEV_TOOLS_TOGGLE_VISIBILITY:
            return Object.assign({}, state, { isVisible: !state.isVisible });
        case _devToolsSettingsActions.DEV_TOOLS_SET_FLUX_STORE_MODE:
            return Object.assign({}, state, { isRoutesVisible: false, isFluxStoresVisible: true });
        case _devToolsSettingsActions.DEV_TOOLS_SET_ROUTE_MODE:
            return Object.assign({}, state, { isRoutesVisible: true, isFluxStoresVisible: false });
        default:
            return state;
    }
}

exports.default = devToolsSettingsReducer;
module.exports = exports['default'];