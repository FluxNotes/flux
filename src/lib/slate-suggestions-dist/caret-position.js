'use strict'; // eslint-disable-line


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Acquire from http://jsfiddle.net/gliheng/vbucs/12/
function position($node, offsetx, offsety) {
  offsetx = offsetx || 0;
  offsety = offsety || 0;
  var nodeLeft = 0;
  var nodeTop = 0;
  if ($node) {
    nodeLeft = $node.offsetLeft;
    nodeTop = $node.offsetTop;
  }

  var pos = { left: 0, top: 0 };

  if (document.selection) {
    var range = document.selection.createRange();
    pos.left = range.offsetLeft + offsetx - nodeLeft;
    pos.top = range.offsetTop + offsety - nodeTop;
  } else if (window.getSelection) {
    var sel = window.getSelection();
    if (sel.rangeCount === 0)  { 
      console.log('for whatever reason the range count is zero')
      return {};
    }
    var _range = sel.getRangeAt(0).cloneRange();

    try {
      _range.setStart(_range.startContainer, _range.startOffset - 1);
    } catch (e) {console.log("error in setting range start")}

    var rect = _range.getBoundingClientRect();
    if (_range.endOffset === 0 || _range.toString() === '') {
      // first char of line
      if (_range.startContainer === $node) {
        // empty div
        if (_range.endOffset === 0) {
          pos.top = 0;
          pos.left = 0;
        } else {
          // firefox need this
          var range2 = _range.cloneRange();
          range2.setStart(range2.startContainer, 0);
          var rect2 = range2.getBoundingClientRect();
          pos.left = rect2.left + offsetx - nodeLeft;
          pos.top = rect2.top + rect2.height + offsety - nodeTop;
        }
      } else {
        pos.top = _range.startContainer.offsetTop;
        pos.left = _range.startContainer.offsetLeft;
      }
    } else {
      pos.left = rect.left + rect.width + offsetx - nodeLeft;
      pos.top = rect.top + offsety - nodeTop;
    }
  } else { 
    console.log("neither document.selection nor window.getselection exists as a truthy value");
  }
  return pos;
};

exports.default = position;