'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _reactJsonTree = require('react-json-tree');

var _reactJsonTree2 = _interopRequireDefault(_reactJsonTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FluxStore = function (_Component) {
    _inherits(FluxStore, _Component);

    function FluxStore(props) {
        _classCallCheck(this, FluxStore);

        var _this = _possibleConstructorReturn(this, (FluxStore.__proto__ || Object.getPrototypeOf(FluxStore)).call(this, props));

        _this.state = {
            isValueVisible: props.isValueVisible
        };
        _this.toggleShowStoreValue.bind(_this);
        return _this;
    }

    _createClass(FluxStore, [{
        key: 'toggleShowStoreValue',
        value: function toggleShowStoreValue() {
            this.setState({ isValueVisible: !this.state.isValueVisible });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var isValueVisible = this.state.isValueVisible;
            var _props = this.props,
                name = _props.name,
                getValue = _props.getValue;

            var iconName = isValueVisible ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'li',
                    { className: 'mdl-list__item', onClick: function onClick() {
                            return _this2.toggleShowStoreValue();
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
                                    e.preventDefault();_this2.toggleShowStoreValue();
                                } },
                            _react2.default.createElement(
                                _icon2.default,
                                null,
                                iconName
                            )
                        )
                    )
                ),
                isValueVisible && _react2.default.createElement(
                    'li',
                    { className: 'mdl-list__item' },
                    _react2.default.createElement(
                        'span',
                        { className: 'mdl-list__item-primary-content' },
                        _react2.default.createElement(_reactJsonTree2.default, { data: getValue(), invertTheme: false })
                    )
                )
            );
        }
    }]);

    return FluxStore;
}(_react.Component);

FluxStore.propTypes = {
    getValue: _react.PropTypes.func.isRequired,
    name: _react.PropTypes.string.isRequired,
    isValueVisible: _react.PropTypes.bool
};

FluxStore.defaultProps = {
    isValueVisible: false
};
FluxStore.displayName = 'FluxStore';

exports.default = FluxStore;
module.exports = exports['default'];