import React from 'react'
import Portal from 'react-portal'
import position from './caret-position'
import SuggestionItem from './suggestion-item'
import getCurrentWord from './current-word'
import {
  UP_ARROW_KEY,
  DOWN_ARROW_KEY,
  ENTER_KEY,
  RESULT_SIZE,
} from './constants'

class SuggestionPortal extends React.Component {

  componentDidMount = () => {
    this.adjustPosition()
  }

  componentDidUpdate = () => {
    this.adjustPosition()
  }

  constructor(props) {
    super()
    props.callback.onKeyDown = this.onKeyDown
    props.callback.onEnter = props.onEnter
    props.callback.closePortal = this.closePortal
    props.callback.readOnly = false

    this.state = {
      selectedIndex: 0,
    }

    if (typeof props.suggestions === 'function') {
      props.callback.suggestion = undefined
    } else {
      const filteredSuggestions = props.suggestions.slice(0, props.resultSize ? props.resultSize : RESULT_SIZE)
      props.callback.suggestion = filteredSuggestions[this.state.selectedIndex]
    }
  }

  onOpen = (portal) => {
    this.setState({
      menu: portal.firstChild 
    });
  }

  setCallbackSuggestion = (filteredSuggestions, selectedIndex=0) => {
    if (filteredSuggestions.length) {
      this.props.callback.suggestion = filteredSuggestions[selectedIndex]
    } else {
      this.props.callback.suggestion = undefined
    }
  }

  onKeyDown = (keyCode, data) => {
    if (keyCode === DOWN_ARROW_KEY || keyCode === UP_ARROW_KEY) {
        const height = this.refs.suggestionPortal.offsetHeight;
        const numberOfElementsVisible = Math.floor(height/32);
        const filteredSuggestions  = this.getFilteredSuggestions();
        const positionChange = (keyCode === DOWN_ARROW_KEY) ? +1 : -1; 
        const newIndex = this.getMenuPostion(positionChange);
        this.changeMenuPosition(positionChange)
        this.setCallbackSuggestion(filteredSuggestions, newIndex);
        // newIndex - (numberOfElementsVisible - 1) forces the scrolling to happen once your reach the bottom of the list in view.
        // 32 is the height of each suggestion in the list, 10 allows for the margin
        this.refs.suggestionPortal.scrollTop = (newIndex - (numberOfElementsVisible - 1)) * 32 + 10;
    } else {
      const filteredSuggestions  = this.getFilteredSuggestions(data);
      this.setSelectedIndex(0)
      if (typeof filteredSuggestions.then === 'function') {
        filteredSuggestions.then(filteredSuggestions => {
          this.setCallbackSuggestion(filteredSuggestions, 0)
        }).catch(() => {
          this.setCallbackSuggestion([], 0)
        })
      } else {
        this.setCallbackSuggestion(filteredSuggestions, 0)
      }
    }
  }

  getMenuPostion = (change) => { 
    // this will allow wrap around to the end of the list
    const filteredSuggestions  = this.getFilteredSuggestions();
    if(filteredSuggestions.length === 0) { 
      return 0;
    } else { 
      const changePlusOriginalLength = change + filteredSuggestions.length;
      const changeAfterWrapping = (this.state.selectedIndex + changePlusOriginalLength) % filteredSuggestions.length;      
      return changeAfterWrapping;
    }
  }

  changeMenuPosition = (change) => { 
    const changeAfterWrapping = this.getMenuPostion(change);
    this.setState({ 
        selectedIndex: changeAfterWrapping
    })
  }

  matchTrigger = () => {
    const { state, trigger, startOfParagraph } = this.props

    const stateCondition = state.isFocused && !state.isExpanded

    if (!state.selection.anchorKey) return false

    const { anchorText, anchorOffset } = state

    if (startOfParagraph) {
      return stateCondition && anchorText.text === trigger
    }

    const lastChar = anchorText.text[anchorOffset - 1]

    return stateCondition && lastChar && lastChar === trigger
  }

  matchCapture = () => {
    const { state, capture } = this.props

    if (!state.selection.anchorKey) return ''

    const { anchorText, anchorOffset } = state

    const currentWord = getCurrentWord(anchorText.text, anchorOffset - 1, anchorOffset - 1)

    const text = this.getMatchText(currentWord, capture)

    return text
  }

  getMatchText = (text, trigger) => {
    const matchArr = text.match(trigger)

    if (matchArr) {
      return matchArr[1].toLowerCase()
    }

    return undefined
  }

  getFilteredSuggestions = (incomingData) => {
    const { suggestions, state, capture, resultSize } = this.props

    if (!state.selection.anchorKey) return []

    const { anchorText, anchorOffset } = state

    let nextChar = "";
    // If there is incoming data from a keydown, include that as next char
    if (incomingData !== undefined) { 
      nextChar = this.convertSlateDataObjectToCharacter(incomingData);
      if (nextChar == null) return [];
    }
    const currentWord = getCurrentWord(anchorText.text + nextChar, anchorOffset - 1, anchorOffset - 1);//GQ added +nextChar

    const text = this.getMatchText(currentWord, capture)

    if (typeof suggestions === 'function') {
      return suggestions(text)
    } else {
      return suggestions
        .filter(suggestion => suggestion.key.toLowerCase().indexOf(text) !== -1)
        .slice(0, resultSize ? resultSize : RESULT_SIZE)
    }
  }

  convertSlateDataObjectToCharacter = (data) => {
    const code = data.code;
    const isShift = data.isShift;
    if (code < 48) return null;
    if (code < 58) { // number keys
        if (isShift) {
            if (code === 48) return ")";
            if (code === 49) return "!";
            if (code === 50) return "@";
            if (code === 51) return "#";
            if (code === 52) return "$";
            if (code === 53) return "%";
            if (code === 54) return "^";
            if (code === 55) return "&";
            if (code === 56) return "*";
            if (code === 57) return "(";
        }
        return String.fromCharCode(code);
    }
    if (code >= 65 && code <= 90) { // A-Z, a-z
        if (isShift) return String.fromCharCode(code);
        return String.fromCharCode(code + 32);
    }
    if (code >= 96 && code <= 105) return String.fromCharCode(code - 48); // numpad 0-9
    if (code === 187 && !isShift) return "=";
    if (code === 188 && !isShift) return ",";
    if (code === 189 && !isShift) return '-';
    if (code === 190 && !isShift) return ".";
    if (code === 191 && !isShift) return "/";
    if (code === 187 && isShift) return "+";
    if (code === 188 && isShift) return "<";
    if (code === 189 && isShift) return '_';
    if (code === 190 && isShift) return ">";
    if (code === 191 && isShift) return "?";
    return null;
  }

  adjustPosition = () => {
    const { menu } = this.state
    if (!menu) return

    const match = this.matchCapture();
    if (match === undefined) {
      menu.removeAttribute('style')
      return
    }

    const parentNode = this.props.state.document.getParent(this.props.state.selection.startKey);
    const el = Slate.findDOMNode(parentNode);

    if (this.matchTrigger() || match) {
      const rect = position(el)
      menu.style.display = 'block'
      menu.style.opacity = 1
      if (window.innerHeight - rect.top < 230) {
        menu.style.bottom = `${window.innerHeight - rect.top - window.pageYOffset}px` // eslint-disable-line no-mixed-operators
        menu.style.left = `${rect.left + window.pageXOffset + 10}px` // eslint-disable-line no-mixed-operators
      } else {
        menu.style.top = `${rect.top + window.pageYOffset}px` // eslint-disable-line no-mixed-operators
        menu.style.left = `${rect.left + window.pageXOffset}px` // eslint-disable-line no-mixed-operators
      }
    }
  }

  closePortal = () => {
    const { menu } = this.state
    if (!menu) return

    menu.removeAttribute('style')
    return
  }

  setSelectedIndex = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex
    })
  }

  render = () => {
    const filteredSuggestions  = this.getFilteredSuggestions();

    return (
      <Portal isOpened onOpen={this.onOpen}>
        <div className="suggestion-portal" ref="suggestionPortal">
          <ul>
            {filteredSuggestions.map((suggestion, index) =>
              <SuggestionItem
                key={suggestion.key}
                index={index}
                suggestion={suggestion}
                selectedIndex={this.state.selectedIndex}
                setSelectedIndex={this.setSelectedIndex}
                appendSuggestion={this.props.callback.onEnter}
                closePortal={this.closePortal}
                editor={this.props.callback.editor}
              />
            )}
          </ul>
        </div>
      </Portal>
    )
  }
}

export default SuggestionPortal
