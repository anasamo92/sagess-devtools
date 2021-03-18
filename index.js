'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _focusDevTools = require('./components/focus-dev-tools');

var _focusDevTools2 = _interopRequireDefault(_focusDevTools);

var _devPanel = require('./components/dev-panel');

var _devPanel2 = _interopRequireDefault(_devPanel);

var _focusDevDock = require('./components/focus-dev-dock');

var _focusDevDock2 = _interopRequireDefault(_focusDevDock);

var _dispatchLogger = require('./logger/dispatch-logger');

var _dispatchLogger2 = _interopRequireDefault(_dispatchLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var FocusDevToolsPanel = function FocusDevToolsPanel(props) {
    var toggleVisibilityKey = props.toggleVisibilityKey,
        otherProps = _objectWithoutProperties(props, ['toggleVisibilityKey']);

    return _react2.default.createElement(
        _focusDevDock2.default,
        { toggleVisibilityKey: toggleVisibilityKey },
        _react2.default.createElement(_focusDevTools2.default, otherProps)
    );
};
FocusDevToolsPanel.displayName = 'FocusDevToolsPanel';

var FocusDevTools = function FocusDevTools(props) {
    var DevTools = props.isPanel ? FocusDevToolsPanel : _focusDevTools2.default;
    return _react2.default.createElement(
        _devPanel2.default,
        { project: props.project, user: props.user },
        _react2.default.createElement(
            _reactRedux.Provider,
            { store: _store2.default },
            _react2.default.createElement(DevTools, {
                getStores: props.getStores,
                routes: props.routes,
                titlePadding: '20px',
                contentWidth: props.isPanel ? '100%' : '400px',
                toggleVisibilityKey: props.toggleVisibilityKey,
                isDebugDevTools: props.isDebugDevTools,
                paddingTop: props.paddingTop !== undefined ? props.paddingTop : 0
            })
        )
    );
};

FocusDevTools.propTypes = {
    getStores: _react.PropTypes.func.isRequired,
    routes: _react.PropTypes.array.isRequired,
    isPanel: _react.PropTypes.bool.isRequired,
    toggleVisibilityKey: _react.PropTypes.string.isRequired,
    project: _react.PropTypes.string.isRequired,
    user: _react.PropTypes.string.isRequired,
    paddingTop: _react.PropTypes.string,
    isDebugDevTools: _react.PropTypes.bool
};

FocusDevTools.defaultProps = {
    isPanel: true,
    toggleVisibilityKey: 'ctrl-m',
    isDebugDevTools: false
};
FocusDevTools.displayName = 'FocusDevTools';
FocusDevTools.logger = _dispatchLogger2.default;

exports.default = FocusDevTools;
module.exports = exports['default'];