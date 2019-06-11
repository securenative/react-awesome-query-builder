'use strict';

exports.__esModule = true;
exports.default = undefined;

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _col = require('antd/lib/col');

var _col2 = _interopRequireDefault(_col);

var _input = require('antd/lib/input');

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

require('antd/lib/input-number/style/css');

require('antd/lib/col/style/css');

require('antd/lib/input/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('antd/lib/date-picker/style');

var _configUtils = require('../../utils/configUtils');

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IPRange = (_temp2 = _class = function (_Component) {
  _inherits(IPRange, _Component);

  function IPRange() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IPRange);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IPRange.__proto__ || Object.getPrototypeOf(IPRange)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.shouldComponentUpdate = _reactAddonsShallowCompare2.default, _this.handleChange = function (value) {
      _this.props.setValue(value);
    }, _this.handleChangeIpNum = function (ipNum) {
      var value = _this.props.value || [undefined, undefined];
      value = [].concat(_toConsumableArray(value));
      value[0] = ipNum.target.value;

      _this.props.setValue(value);
    }, _this.handleChangeCIDR = function (cidrNum) {
      var value = _this.props.value || [undefined, undefined];
      value = [].concat(_toConsumableArray(value));
      value[1] = cidrNum;

      _this.props.setValue(value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IPRange, [{
    key: 'render',
    value: function render() {
      var fieldDefinition = (0, _configUtils.getFieldConfig)(this.props.field, this.props.config);
      var fieldSettings = fieldDefinition.fieldSettings || {};
      var customProps = this.props.customProps || {};

      var value = this.props.value != undefined ? this.props.value : undefined;

      var _ref2 = value || [null, null],
          _ref3 = _slicedToArray(_ref2, 2),
          ipNum = _ref3[0],
          cidrNum = _ref3[1];

      var _ref4 = this.props.placeholders || this.props.valueLabels || [],
          _ref5 = _slicedToArray(_ref4, 2),
          placeholder1 = _ref5[0],
          placeholder2 = _ref5[1];

      var _ref6 = this.props.defaultValues || [],
          _ref7 = _slicedToArray(_ref6, 2),
          defaultVal1 = _ref7[0],
          defaultVal2 = _ref7[1];

      console.log('ip widget', this.props, this.props.defaultValues);

      // If default value exists & now original value
      // TODO: Need to do the same with IP default value
      if (cidrNum === undefined && defaultVal2 !== undefined) {
        this.handleChangeCIDR(defaultVal2);
      }

      // if (value && (ipNum == undefined || cidrNum == undefined)) {
      //   // happens if we change value source - this leads to incomplete slider value, fix it:
      //   if (ipNum == undefined)
      //     this.handleChangeCIDR(cidrNum);
      //   if (cidrNum == undefined)
      //     this.handleChangeIpNum(ipNum);
      //   return null;
      // }

      var inputStyleOverride = {
        border: 'none',
        height: '100%',
        minWidth: '60px'
      };

      return _react2.default.createElement(
        _col2.default,
        { style: { display: 'inline-flex', alignItems: 'center', border: '1px solid #d9d9d9', borderRadius: '4px' } },
        _react2.default.createElement(
          _col2.default,
          { style: { marginRight: '5px' } },
          _react2.default.createElement(_input2.default, _extends({
            size: this.props.config.settings.renderSize || "small",
            ref: 'ipNum',
            key: 'ipNum',
            value: ipNum || defaultVal1,
            placeholder: placeholder1,
            onChange: this.handleChangeIpNum,
            style: inputStyleOverride
          }, customProps))
        ),
        _react2.default.createElement(
          _col2.default,
          { style: { marginRight: '5px', lineHeight: '20px' } },
          _react2.default.createElement(
            'span',
            null,
            this.props.textSeparator
          )
        ),
        _react2.default.createElement(
          _col2.default,
          { style: { marginRight: '5px' } },
          _react2.default.createElement(_inputNumber2.default, _extends({
            size: this.props.config.settings.renderSize || "small",
            ref: 'cidr',
            key: 'cidr',
            min: 0,
            max: 32,
            step: 1,
            width: 50,
            value: cidrNum || defaultVal2,
            placeholder: placeholder2,
            onChange: this.handleChangeCIDR,
            style: _extends({}, inputStyleOverride, { width: '50px' })
          }, customProps))
        ),
        _react2.default.createElement(_col2.default, { style: { clear: 'both' } })
      );
    }
  }]);

  return IPRange;
}(_react.Component), _class.propTypes = {
  setValue: _propTypes2.default.func.isRequired,
  placeholder: _propTypes2.default.string,
  placeholders: _propTypes2.default.array,
  textSeparator: _propTypes2.default.string,
  config: _propTypes2.default.object.isRequired,
  field: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.array,
  defaultValues: _propTypes2.default.array, // TODO: Support default values
  customProps: _propTypes2.default.object
}, _class.defaultProps = {
  defaultValues: [null, 32]
}, _temp2);
exports.default = IPRange;