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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switcher = function Switcher(_ref) {
    var onFluxStoreClick = _ref.onFluxStoreClick,
        onRoutesClick = _ref.onRoutesClick,
        targetId = _ref.targetId;

    return _react2.default.createElement(
        'ul',
        { className: 'mdl-menu mdl-menu--bottom-right mdl-js-menu', htmlFor: targetId },
        _react2.default.createElement(Switch, { onClick: onFluxStoreClick, name: 'Flux stores mode', text: 'Selct flux stores mode' }),
        _react2.default.createElement(Switch, { onClick: onRoutesClick, name: 'Routes mode', text: 'Selct routes mode' })
    );
};

var Switch = function Switch(_ref2) {
    var name = _ref2.name,
        _onClick = _ref2.onClick;
    return _react2.default.createElement(
        'li',
        { className: 'mdl-menu__item', onClick: function onClick() {
                return _onClick();
            } },
        name
    );
};

Switcher.displayName = 'Switcher';

exports.default = Switcher;
module.exports = exports['default'];