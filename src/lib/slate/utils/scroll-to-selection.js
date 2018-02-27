
import getWindow from 'get-window'
import isBackward from 'selection-is-backward'
import ReactDOM from 'react-dom'
import Lang from 'lodash'

/**
 * Scroll the current selection's focus point into view if needed.
 *
 * @param {Selection} selection
 */

function scrollToSelection(selection) {
          console.log("scrollToSelection " + (!selection.anchorNode) + " --> if true no scrolling");
          console.log(selection);
  if (!selection.anchorNode) return

  const myElement = ReactDOM.findDOMNode(selection.anchorNode)
  let el = myElement;
  while (el !== null) {
      el = el.parentElement;
      //console.log(el);
      if (el !== null && el.className && el.className.includes("panel-content")) break;
  }
  if (Lang.isNull(el)) return;
  
  el.scrollTop = el.scrollHeight - el.clientHeight;
  return;
  const window = getWindow(selection.anchorNode)
  const backward = isBackward(selection)
  const range = selection.getRangeAt(0)
  const rect = range.getBoundingClientRect()
  const { innerWidth, innerHeight, pageYOffset, pageXOffset } = window
  const top = (backward ? rect.top : rect.bottom) + pageYOffset
  const left = (backward ? rect.left : rect.right) + pageXOffset

  const x = left < pageXOffset || innerWidth + pageXOffset < left
    ? left - innerWidth / 2
    : pageXOffset

  const y = top < pageYOffset || innerHeight + pageYOffset < top
    ? top - innerHeight / 2
    : pageYOffset
  window.scrollTo(x, y)
}

/**
 * Export.
 *
 * @type {Function}
 */

export default scrollToSelection
