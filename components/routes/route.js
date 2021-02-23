'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouteDX = function RouteDX(_ref) {
    var name = _ref.name,
        _onClick = _ref.onClick,
        className = _ref.className,
        iconName = _ref.iconName;

    return _react2.default.createElement(
        'li',
        { className: className, onClick: function onClick() {
                return _onClick(name);
            } },
        _react2.default.createElement(
            'span',
            { className: 'mdl-list__item-primary-content' },
            name
        ),
        _react2.default.createElement(
            'span',
            { className: 'mdl-list__item-secondary-content' },
            _react2.default.createElement(
                'a',
                { className: 'mdl-list__item-secondary-action', onClick: function onClick(e) {
                        e.preventDefault();_onClick(name);
                    } },
                _react2.default.createElement(
                    _icon2.default,
                    null,
                    iconName
                )
            )
        )
    );
};

RouteDX.displayName = 'RouteDx';
RouteDX.defaultProps = {
    className: 'mdl-list__item',
    iconName: 'touch_app'
};
RouteDX.propTypes = {
    name: _react.PropTypes.string.isRequired,
    onClick: _react.PropTypes.func.isRequired,
    className: _react.PropTypes.string,
    iconName: _react.PropTypes.string
};

exports.default = RouteDX;
module.exports = exports['default'];