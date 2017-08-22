'use strict'; // eslint-disable-line

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _suggestionPortal = require('./suggestion-portal');

var _suggestionPortal2 = _interopRequireDefault(_suggestionPortal);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function matchTrigger(state, trigger) {
  var currentNode = state.blocks.first();

  return state.isFocused && trigger.test(currentNode.text);
}

function SuggestionsPlugin(opts) {
  var capture = opts.capture;
  var callback = {};

  function onKeyDown(e, data, state, editor) {
    var keyCode = e.keyCode;
    callback.editor = editor;

    if (matchTrigger(state, capture)) {
      // Prevent default up and down arrow key press when portal is open
      if (keyCode === _constants.UP_ARROW_KEY || keyCode === _constants.DOWN_ARROW_KEY) {
        e.preventDefault();
      }

      // Prevent default return/enter key press when portal is open
      if (keyCode === _constants.ENTER_KEY) {
        e.preventDefault();

        // Close portal
        if (callback.closePortal) {
          callback.closePortal();
        }

        // Handle enter
        if (callback.onEnter && callback.suggestion !== undefined) {
          return callback.onEnter(callback.suggestion);
        }
      } else {
        if (callback.onKeyDown) {
          callback.onKeyDown(keyCode, data);
        }
      }
    }
  }

  return {
    onKeyDown: onKeyDown,
    SuggestionPortal: function SuggestionPortal(props) {
      return _react2.default.createElement(_suggestionPortal2.default, _extends({}, props, opts, {
        callback: callback
      }));
    }
  };
}

exports.default = SuggestionsPlugin;