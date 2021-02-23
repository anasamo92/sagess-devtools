'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _switchActivator = require('./settings/switch-activator');

var _switchActivator2 = _interopRequireDefault(_switchActivator);

var _code = require('./code');

var _code2 = _interopRequireDefault(_code);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _fluxStores = require('./flux-stores');

var _fluxStores2 = _interopRequireDefault(_fluxStores);

var _devToolsSettingsActions = require('../actions/dev-tools-settings-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // react and redux utils

// get internal components


var _processStores = function _processStores(stores) {
    return stores.reduce(function (res, current) {
        var name = current.name || current.constructor.name;
        res[name] = { name: name, getValue: function getValue() {
                return current.getValue();
            } };
        return res;
    }, {});
};

var DevTool = function DevTool(_ref) {
    var grade = _ref.grade,
        onSetGrade = _ref.onSetGrade,
        onSendGrade = _ref.onSendGrade,
        styleProps = _ref.styleProps,
        mode = _ref.mode,
        getStores = _ref.getStores,
        routes = _ref.routes,
        processStores = _ref.processStores;

    switch (mode) {
        case 'flux':
            return _react2.default.createElement(_fluxStores2.default, Object.assign({ stores: processStores(getStores()) }, styleProps));
        case 'routes':
            return _react2.default.createElement(_routes2.default, Object.assign({ data: routes }, styleProps));
        default:
            return _react2.default.createElement(
                'div',
                null,
                'Empty'
            );
    }
};
DevTool.displayName = 'DevTool';
DevTool.PropTypes = {
    grade: _react.PropTypes.number,
    onSetGrade: _react.PropTypes.func.isRequired,
    onSendGrade: _react.PropTypes.func.isRequired,
    styleProps: _react.PropTypes.object,
    mode: _react.PropTypes.string.isRequired,
    getStores: _react.PropTypes.func.isRequired,
    routes: _react.PropTypes.array.isRequired,
    processStores: _react.PropTypes.func.isRequired
};
DevTool.defaultProps = {
    processStores: _processStores
};

var FocusDevTools = function (_Component) {
    _inherits(FocusDevTools, _Component);

    function FocusDevTools(props) {
        _classCallCheck(this, FocusDevTools);

        var _this = _possibleConstructorReturn(this, (FocusDevTools.__proto__ || Object.getPrototypeOf(FocusDevTools)).call(this, props));

        _this.state = { grade: _this.props.grade };
        _this.setGrade.bind(_this);
        _this.setAnswer.bind(_this);
        return _this;
    }
    // componentWillMount() {
    //     this.props.dispatch(this.props.initQuestion())
    // }


    _createClass(FocusDevTools, [{
        key: 'setGrade',
        value: function setGrade(value) {
            this.setState({ grade: value });
        }
    }, {
        key: 'setAnswer',
        value: function setAnswer(value) {}
        //console.log('answser', value);

        // onSend() {
        //     //console.log('onSend', this.state.grade);
        //     this.props.dispatch(this.props.sendGrade(this.state.grade));
        // }

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                dispatch = _props.dispatch,
                isQuestionVisible = _props.isQuestionVisible,
                isRoutesVisible = _props.isRoutesVisible,
                isFluxStoresVisible = _props.isFluxStoresVisible,
                contentWidth = _props.contentWidth,
                titlePadding = _props.titlePadding,
                isDebugDevTools = _props.isDebugDevTools,
                isSwitchMode = _props.isSwitchMode,
                getStores = _props.getStores,
                routes = _props.routes;

            var codeProps = { state: this.state, props: this.props };
            var styleProps = { contentWidth: contentWidth, titlePadding: titlePadding };
            var mode = isRoutesVisible ? 'routes' : isFluxStoresVisible ? 'flux' : null;
            return _react2.default.createElement(
                'div',
                { style: { paddingTop: this.props.paddingTop } },
                _react2.default.createElement(_switchActivator2.default, {
                    title: 'Focus Dev tools',
                    mode: mode,
                    onFluxStoreClick: function onFluxStoreClick() {
                        return dispatch((0, _devToolsSettingsActions.setFluxStoreMode)());
                    },
                    onRoutesClick: function onRoutesClick() {
                        return dispatch((0, _devToolsSettingsActions.setRouteMode)());
                    }
                }),
                _react2.default.createElement(DevTool, {
                    grade: this.state.grade,
                    mode: mode,
                    onSendGrade: function onSendGrade() {
                        return _this2.onSend();
                    },
                    onSetGrade: function onSetGrade(value) {
                        return _this2.setGrade(value);
                    },
                    routes: routes,
                    getStores: getStores,
                    styleProps: styleProps
                }),
                isDebugDevTools && _react2.default.createElement(_code2.default, codeProps)
            );
        }
    }]);

    return FocusDevTools;
}(_react.Component);

FocusDevTools.defaultProps = {
    grade: 3,
    isQuestionVisible: false,
    isRoutesVisible: true,
    isFluxStoresVisible: false,
    isSwitchMode: true
};

FocusDevTools.propTypes = {
    grade: _react.PropTypes.number,
    sendGrade: _react.PropTypes.func.isRequired,
    isQuestionVisible: _react.PropTypes.bool.isRequired,
    isRoutesVisible: _react.PropTypes.bool.isRequired,
    isFluxStoresVisible: _react.PropTypes.bool.isRequired,
    isSwitchMode: _react.PropTypes.bool.isRequired,
    routes: _react.PropTypes.array.isRequired,
    getStores: _react.PropTypes.func.isRequired
};
FocusDevTools.displayName = 'FocusDevTools';

var StateConnectedFocusDevTools = (0, _reactRedux.connect)(function (data) {
    return { storeData: data, isRoutesVisible: data.settings.isRoutesVisible, isFluxStoresVisible: data.settings.isFluxStoresVisible };
})(FocusDevTools);

exports.default = StateConnectedFocusDevTools;
module.exports = exports['default'];