'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var children = _ref.children,
        type = _ref.type,
        onClick = _ref.onClick,
        isColored = _ref.isColored;

    return _react2.default.createElement(
        'button',
        { onClick: onClick, className: 'mdl-button mdl-button--' + type + ' ' + (isColored ? 'mdl-button--colored' : '') },
        children
    );
};
Button.displayName = 'Button';

Button.defaultProps = {
    isColored: false,
    type: 'fab'
};

Button.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    iconName: _propTypes2.default.string,
    type: _propTypes2.default.string,
    isColored: _propTypes2.default.bool
};

exports.default = Button;
module.exports = exports['default'];