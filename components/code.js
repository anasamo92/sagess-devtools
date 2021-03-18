'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Code(props) {
    return _react2.default.createElement(
        'pre',
        null,
        _react2.default.createElement(
            'h4',
            null,
            'Your props'
        ),
        _react2.default.createElement(
            'code',
            null,
            JSON.stringify(props, null, 2)
        )
    );
}

Code.displayName = 'Code';
exports.default = Code;
module.exports = exports['default'];