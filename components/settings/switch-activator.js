'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _switcher = require('./switcher');

var _switcher2 = _interopRequireDefault(_switcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COLOR = '#3F51B5';
var switchStyle = {
    boxSizing: 'border-box',
    background: COLOR,
    color: 'white',
    width: '100%',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
};

var SwitchActivator = function SwitchActivator(_ref) {
    var title = _ref.title,
        mode = _ref.mode,
        iconName = _ref.iconName,
        onFluxStoreClick = _ref.onFluxStoreClick,
        onRoutesClick = _ref.onRoutesClick;

    var text = mode === 'question' ? 'vous et focus?' : mode;
    return _react2.default.createElement(
        'div',
        { style: switchStyle },
        _react2.default.createElement(
            'h4',
            { style: { margin: 10 } },
            title
        ),
        _react2.default.createElement(
            'h4',
            { style: { margin: 10, color: COLOR, background: 'white', padding: '0 10px 0 10px' } },
            text
        ),
        _react2.default.createElement(
            'button',
            { id: 'dx-switch-activator', className: 'mdl-button mdl-button--icon' },
            _react2.default.createElement(
                _icon2.default,
                null,
                iconName
            )
        ),
        _react2.default.createElement(_switcher2.default, { targetId: 'dx-switch-activator', onFluxStoreClick: onFluxStoreClick, onRoutesClick: onRoutesClick })
    );
};

SwitchActivator.displayName = 'SwitchActivator';
SwitchActivator.defaultProps = {
    iconName: 'more_vert'
};

exports.default = SwitchActivator;
module.exports = exports['default'];