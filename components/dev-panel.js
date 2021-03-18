'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Component
var DevPanel = function DevPanel(_ref) {
    var children = _ref.children,
        project = _ref.project,
        user = _ref.user;
    return _react2.default.createElement(
        'div',
        { 'data-project': project, 'data-user': user },
        children
    );
};

DevPanel.displayName = 'DevPanel';

DevPanel.propTypes = {
    project: _react.PropTypes.string.isRequired,
    user: _react.PropTypes.string.isRequired
};
exports.default = DevPanel;
module.exports = exports['default'];