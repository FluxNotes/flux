// eslint-disable-next-line
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _reactPortal2 = _interopRequireDefault(_reactPortal);

var _caretPosition = require('./caret-position');

var _caretPosition2 = _interopRequireDefault(_caretPosition);

var _suggestionItem = require('./suggestion-item');

var _suggestionItem2 = _interopRequireDefault(_suggestionItem);

var _currentWord = require('./current-word');

var _currentWord2 = _interopRequireDefault(_currentWord);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuggestionPortal = function (_React$Component) {
  _inherits(SuggestionPortal, _React$Component);

  function SuggestionPortal(props) {
    _classCallCheck(this, SuggestionPortal);

    var _this = _possibleConstructorReturn(this, (SuggestionPortal.__proto__ || Object.getPrototypeOf(SuggestionPortal)).call(this));

    _this.state = {
      filteredSuggestions: []
    };

    _this.componentDidMount = function () {
      _this.adjustPosition();
    };

    _this.componentDidUpdate = function () {
      _this.adjustPosition();
    };

    _this.onOpen = function (portal) {
      _this.setState({ menu: portal.firstChild });
    };

    _this.setCallbackSuggestion = function () {
      if (_this.state.filteredSuggestions.length) {
        _this.props.callback.suggestion = _this.state.filteredSuggestions[_this.selectedIndex];
      } else {
        _this.props.callback.suggestion = undefined;
      }
    };

    _this.setFilteredSuggestions = function (filteredSuggestions) {
      _this.setState({
        filteredSuggestions: filteredSuggestions
      });
      _this.setCallbackSuggestion();
    };

    _this.onKeyDown = function (keyCode) {
      var filteredSuggestions = _this.state.filteredSuggestions;


      if (keyCode === _constants.DOWN_ARROW_KEY) {
        if (_this.selectedIndex + 1 === filteredSuggestions.length) {
          _this.selectedIndex = -1;
        }
        _this.selectedIndex += 1;
        _this.setCallbackSuggestion();
        _this.forceUpdate();
      } else if (keyCode === _constants.UP_ARROW_KEY) {
        if (_this.selectedIndex === 0) {
          _this.selectedIndex = filteredSuggestions.length;
        }
        _this.selectedIndex -= 1;
        _this.setCallbackSuggestion();
        _this.forceUpdate();
      } else {
        _this.selectedIndex = 0;
        var newFilteredSuggestions = _this.getFilteredSuggestions();
        if (typeof newFilteredSuggestions.then === 'function') {
          newFilteredSuggestions.then(function (newFilteredSuggestions) {
            _this.setFilteredSuggestions(newFilteredSuggestions);
          }).catch(function () {
            _this.setFilteredSuggestions([]);
          });
        } else {
          _this.setFilteredSuggestions(newFilteredSuggestions);
        }
      }
    };

    _this.matchTrigger = function () {
      var _this$props = _this.props,
          state = _this$props.state,
          trigger = _this$props.trigger,
          startOfParagraph = _this$props.startOfParagraph;


      var stateCondition = state.isFocused && !state.isExpanded;

      if (!state.selection.anchorKey) return false;

      var anchorText = state.anchorText,
          anchorOffset = state.anchorOffset;


      if (startOfParagraph) {
        return stateCondition && anchorText.text === trigger;
      }

      var lastChar = anchorText.text[anchorOffset - 1];

      return stateCondition && lastChar && lastChar === trigger;
    };

    _this.matchCapture = function () {
      var _this$props2 = _this.props,
          state = _this$props2.state,
          capture = _this$props2.capture;


      if (!state.selection.anchorKey) return '';

      var anchorText = state.anchorText,
          anchorOffset = state.anchorOffset;


      var currentWord = (0, _currentWord2.default)(anchorText.text, anchorOffset - 1, anchorOffset - 1);

      var text = _this.getMatchText(currentWord, capture);

      return text;
    };

    _this.getMatchText = function (text, trigger) {
      var matchArr = text.match(trigger);

      if (matchArr) {
        return matchArr[1].toLowerCase();
      }

      return undefined;
    };

    _this.getFilteredSuggestions = function () {
      var _this$props3 = _this.props,
          suggestions = _this$props3.suggestions,
          state = _this$props3.state,
          capture = _this$props3.capture,
          resultSize = _this$props3.resultSize;


      if (!state.selection.anchorKey) return [];

      var anchorText = state.anchorText,
          anchorOffset = state.anchorOffset;


      var currentWord = (0, _currentWord2.default)(anchorText.text, anchorOffset - 1, anchorOffset - 1);

      var text = _this.getMatchText(currentWord, capture);

      if (typeof suggestions === 'function') {
        return suggestions(text);
      } else {
        return suggestions.filter(function (suggestion) {
          return suggestion.key.toLowerCase().indexOf(text) !== -1;
        }).slice(0, resultSize ? resultSize : _constants.RESULT_SIZE);
      }
    };

    _this.adjustPosition = function () {
      var menu = _this.state.menu;

      if (!menu) return;

      var match = _this.matchCapture();
      if (match === undefined) {
        menu.removeAttribute('style');
        return;
      }

      if (_this.matchTrigger() || match) {
        var rect = (0, _caretPosition2.default)();
        menu.style.display = 'block';
        menu.style.opacity = 1;
        menu.style.top = (rect.top + window.pageYOffset).toString() + 'px'; // eslint-disable-line no-mixed-operators
        menu.style.left = (rect.left + window.pageXOffset).toString() + 'px'; // eslint-disable-line no-mixed-operators
      }
    };

    _this.closePortal = function () {
      var menu = _this.state.menu;

      if (!menu) return;

      if (!_this.matchTrigger()) {
        menu.removeAttribute('style');
        return;
      }
    };

    _this.setSelectedIndex = function (selectedIndex) {
      _this.selectedIndex = selectedIndex;
      _this.forceUpdate();
    };

    _this.render = function () {
      var filteredSuggestions = _this.state.filteredSuggestions;


      return _react2.default.createElement(
        _reactPortal2.default,
        { isOpened: true, onOpen: _this.onOpen },
        _react2.default.createElement(
          'div',
          { className: 'suggestion-portal' },
          _react2.default.createElement(
            'ul',
            null,
            filteredSuggestions.map(function (suggestion, index) {
              return _react2.default.createElement(_suggestionItem2.default, {
                key: suggestion.key,
                index: index,
                suggestion: suggestion,
                selectedIndex: _this.selectedIndex,
                setSelectedIndex: _this.setSelectedIndex,
                appendSuggestion: _this.props.callback.onEnter,
                closePortal: _this.closePortal,
                editor: _this.props.callback.editor
              });
            })
          )
        )
      );
    };

    props.callback.onKeyDown = _this.onKeyDown;
    props.callback.onEnter = props.onEnter;
    props.callback.closePortal = _this.closePortal;
    props.callback.readOnly = false;

    _this.selectedIndex = 0;
    if (typeof props.suggestions === 'function') {
      props.callback.suggestion = undefined;
    } else {
      _this.state.filteredSuggestions = props.suggestions.slice(0, props.resultSize ? props.resultSize : _constants.RESULT_SIZE);
      props.callback.suggestion = _this.state.filteredSuggestions[_this.selectedIndex];
    }
    return _this;
  }

  return SuggestionPortal;
}(_react2.default.Component);

exports.default = SuggestionPortal;