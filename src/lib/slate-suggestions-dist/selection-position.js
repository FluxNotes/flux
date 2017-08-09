'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * cross-browser selected text bounding-client-rect.
 *
 * @return {Object}
 */

function position(callback) {
  if (window.getSelection) {
    var selection = window.getSelection();
    if (!selection.rangeCount) return;

    var range = selection.getRangeAt(0);

    if (!range.collapsed) {
      return range.getBoundingClientRect();
    }

    // if we only have a cursor, then we need to insert
    // a dummy element and see what's what.
    var dummy = document.createElement('span');
    range.insertNode(dummy);
    var pos = dummy.getBoundingClientRect();
    dummy.parentNode.removeChild(dummy);
    setTimeout(function () {
      callback();
    }, 1);
    return pos;
  }

  if (document.selection) {
    return document.selection.createRange().getBoundingClientRect();
  }
};

exports.default = position;