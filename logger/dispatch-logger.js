'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORE_LOGGER = 'DX_STORE_LOGGER';
var CONSOLE_STYLE = 'color: blue;';

// Creates a logger which listen to all the dispatched information, and uses a store list
// The dispatcher should be a flux/dispatcher
// The getStores function should list the stores to track
var createStoreLogger = function createStoreLogger(dispatcher, getStores) {
    if (!(0, _isObject3.default)(dispatcher) || !(0, _isFunction3.default)(dispatcher.register)) {
        throw new Error(STORE_LOGGER + ' : you should provide a dispatcher');
    }
    if (!(0, _isFunction3.default)(getStores)) {
        throw new Error(STORE_LOGGER + ' : you should provide a getStores function such as () => CoreStore.prototype._instances');
    }

    dispatcher.register(function (transferInfo) {
        var stores = getStores();
        if (!(0, _isArray3.default)(stores)) {
            throw new Error(STORE_LOGGER + ' : you should provide a list of stores to read see focus-core/store/CoreStore.prototype._instances.');
        }
        var _transferInfo$action = transferInfo.action,
            type = _transferInfo$action.type,
            data = _transferInfo$action.data;

        console.groupCollapsed('%c ' + STORE_LOGGER + ' : action ' + type + ' ' + Object.keys(data).join(''), CONSOLE_STYLE);
        console.log('action dispatcher source', transferInfo.source + ' ' + type + ' ' + Object.keys(data).join('') + ' ', data);
        console.groupCollapsed(STORE_LOGGER + ' stores values');
        Object.keys(stores).reduce(function (res, current) {
            var currentStore = stores[current];
            var name = currentStore.constructor.name;

            if (!(0, _isFunction3.default)(currentStore.getValue)) {
                console.warn(STORE_LOGGER + ' :  The store ' + name + ' shoud have a getValue method to be logged');
                return;
            }
            console.log(name, currentStore.getValue());
        }, {});
        console.groupEnd();
        console.groupEnd();
    });
};

exports.default = createStoreLogger;
module.exports = exports['default'];