'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'i',
    { className: 'material-icons' },
    children
  );
}; // material icon class.
exports.default = Icon;
module.exports = exports['default'];