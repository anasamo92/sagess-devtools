'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _devToolsSettingsActions = require('../actions/dev-tools-settings-actions');

var _reactDock = require('react-dock');

var _reactDock2 = _interopRequireDefault(_reactDock);

var _parseKey = require('parse-key');

var _parseKey2 = _interopRequireDefault(_parseKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FocusDevDock = (_temp = _class = function (_Component) {
    _inherits(FocusDevDock, _Component);

    function FocusDevDock(props) {
        _classCallCheck(this, FocusDevDock);

        var _this = _possibleConstructorReturn(this, (FocusDevDock.__proto__ || Object.getPrototypeOf(FocusDevDock)).call(this, props));

        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.toggleVisibility = _this.toggleVisibility.bind(_this);

        return _this;
    }

    _createClass(FocusDevDock, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('keydown', this.handleKeyDown);
        }
    }, {
        key: 'matchesKey',
        value: function matchesKey(key, event) {
            if (!key) {
                return false;
            }

            var charCode = event.keyCode || event.which;
            var char = String.fromCharCode(charCode);
            return key.name.toUpperCase() === char.toUpperCase() && key.alt === event.altKey && key.ctrl === event.ctrlKey && key.meta === event.metaKey && key.shift === event.shiftKey;
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(e) {
            // Ignore regular keys when focused on a field
            // and no modifiers are active.
            if (!e.ctrlKey && !e.metaKey && !e.altKey && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
                return;
            }

            var visibilityKey = (0, _parseKey2.default)(this.props.toggleVisibilityKey);

            if (this.matchesKey(visibilityKey, e)) {
                e.preventDefault();
                this.toggleVisibility();
            }
        }
    }, {
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.props.dispatch((0, _devToolsSettingsActions.toggleVisibility)());
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                fluid = _props.fluid,
                isVisible = _props.isVisible,
                rest = _objectWithoutProperties(_props, ['children', 'fluid', 'isVisible']);

            return _react2.default.createElement(
                _reactDock2.default,
                { position: 'right',
                    isVisible: isVisible,
                    fluid: fluid,
                    dimMode: 'none'
                },
                children
            );
        }
    }]);

    return FocusDevDock;
}(_react.Component), _class.propTypes = {
    defaultIsVisible: _react.PropTypes.bool.isRequired,
    defaultSize: _react.PropTypes.number.isRequired,
    toggleVisibilityKey: _react.PropTypes.string.isRequired,
    fluid: _react.PropTypes.bool
}, _class.defaultProps = {
    defaultIsVisible: true,
    defaultPosition: 'right',
    defaultSize: 0.3,
    fluid: true
}, _temp);


var StateConnectedFocusDevDock = (0, _reactRedux.connect)(function (data) {
    return { isVisible: data.settings.isVisible };
})(FocusDevDock);

exports.default = StateConnectedFocusDevDock;
module.exports = exports['default'];