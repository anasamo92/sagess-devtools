'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fluxStore = require('./flux-store');

var _fluxStore2 = _interopRequireDefault(_fluxStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FluxStoresList = function FluxStoresList(_ref) {
    var stores = _ref.stores,
        title = _ref.title,
        contentWidth = _ref.contentWidth,
        titlePadding = _ref.titlePadding;

    var storeList = stores ? Object.keys(stores).reduce(function (res, current) {
        var name = stores[current].name || stores[current].constructor.name;
        var getValue = stores[current].getValue;
        res.push({ name: name, getValue: getValue });
        return res;
    }, []) : [];
    return _react2.default.createElement(
        'div',
        { style: { width: contentWidth } },
        _react2.default.createElement(
            'ul',
            { className: 'mdl-list' },
            storeList.length > 0 ? storeList.map(function (store) {
                return _react2.default.createElement(_fluxStore2.default, Object.assign({ key: store.name }, store));
            }) : _react2.default.createElement(
                'li',
                { className: 'mdl-list__item' },
                'No stores'
            )
        )
    );
};

FluxStoresList.displayName = 'FluxStoresList';
FluxStoresList.propTypes = {
    title: _propTypes2.default.string.isRequired,
    stores: _propTypes2.default.object.isRequired
};
FluxStoresList.defaultProps = {
    title: 'Stores'
};

exports.default = FluxStoresList;
module.exports = exports['default'];