'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _devToolsSettingsReducer = require('./dev-tools-settings-reducer');

var _devToolsSettingsReducer2 = _interopRequireDefault(_devToolsSettingsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devToolsReducer = (0, _redux.combineReducers)({
    settings: _devToolsSettingsReducer2.default
});

exports.default = devToolsReducer;
module.exports = exports['default'];