'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

var _reactJsonTree = require('react-json-tree');

var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultProcessRoute = function _defaultProcessRoute(r) {
    return { name: r.route.toString().split('(')[0].split('/^')[1], callback: r.callback };
};

var RoutesDX = function RoutesDX(_ref) {
    var className = _ref.className,
        data = _ref.data,
        process = _ref.process,
        title = _ref.title,
        contentWidth = _ref.contentWidth,
        titlePadding = _ref.titlePadding;

    return _react2.default.createElement(
        'div',
        { 'data-focus': 'routes-dx', style: { width: contentWidth } },
        _react2.default.createElement(
            'ul',
            { className: className, 'data-focus': 'routes' },
            data ? data.map(process).map(function (_ref2) {
                var name = _ref2.name,
                    onRouteClick = _ref2.callback;
                return _react2.default.createElement(_route2.default, { key: name, name: name, onClick: onRouteClick });
            }) : _react2.default.createElement(
                'li',
                { className: 'mdl-list__item' },
                'No routes'
            )
        )
    );
};

RoutesDX.displayName = 'RoutesDX';
RoutesDX.defaultProps = {
    process: _defaultProcessRoute,
    className: 'mdl-list',
    title: 'Routes'
};
RoutesDX.propTypes = {
    data: _propTypes2.default.array.isRequired,
    process: _propTypes2.default.func.isRequired,
    className: _propTypes2.default.string,
    title: _propTypes2.default.string
};

exports.default = RoutesDX;
module.exports = exports['default'];