'use strict'; // eslint-disable-line

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuggestionItem = function (_React$Component) {
  _inherits(SuggestionItem, _React$Component);

  function SuggestionItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SuggestionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SuggestionItem.__proto__ || Object.getPrototypeOf(SuggestionItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      _this.props.closePortal();

      var _this$props = _this.props,
          editor = _this$props.editor,
          suggestion = _this$props.suggestion,
          appendSuggestion = _this$props.appendSuggestion;


      var state = appendSuggestion(suggestion);

      editor.onChange(state);
    }, _this.onMouseEnter = function () {
      return _this.props.setSelectedIndex(_this.props.index);
    }, _this.render = function () {
      return _react2.default.createElement(
        'li',
        {
          className: _this.props.index === _this.props.selectedIndex ? 'selected' : undefined,
          onClick: _this.onClick,
          onMouseEnter: _this.onMouseEnter
        },
        _this.props.suggestion.suggestion
      );
    }, _temp), _possibleConstructorReturn(_this, _ret); // eslint-disable-line
  }

  return SuggestionItem;
}(_react2.default.Component);

exports.default = SuggestionItem;