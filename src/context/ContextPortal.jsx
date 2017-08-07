import React from 'react'
import Portal from 'react-portal'
import ContextItem from './ContextItem'
import Lang from 'lodash'

// Styling
import './ContextPortal.css';

const UP_ARROW_KEY = 38
const DOWN_ARROW_KEY = 40
//const ENTER_KEY = 13
//const RESULT_SIZE = 5

class ContextPortal extends React.Component {
  componentDidMount = () => {
    this.adjustPosition()
  }

  componentDidUpdate = () => {
    this.adjustPosition()
  }
  
  componentWillReceiveProps = (props) => {
	if (props.contexts !== this.state.contexts) {
		this.setState({
			contexts: props.contexts
		});
		//this.selectedIndex = 0;
	}
  }

  constructor(props) {
    super()
	
	props.callback.onKeyDown = this.onKeyDown
    props.callback.onSelected = props.onSelected
    props.callback.closePortal = this.closePortal
    props.callback.readOnly = false
	this.state = {
		contexts: props.contexts
	}
  }

  onOpen = (portal) => {
    this.setState({ menu: portal.firstChild })
  }

  setCallbackContext = () => {
    if (this.state.contexts.length) {
      this.props.callback.context = this.state.contexts[this.selectedIndex]
    } else {
      this.props.callback.context = undefined
    }
  }

  onKeyDown = (keyCode) => {
    //console.log("ContextPortal.onKeyDown");
    if (keyCode === DOWN_ARROW_KEY) {
      if (this.selectedIndex + 1 === this.state.contexts.length) {
        this.selectedIndex = -1
      }
      this.selectedIndex += 1
      this.setCallbackSuggestion()
      this.forceUpdate()
    } else if (keyCode === UP_ARROW_KEY) {
      if (this.selectedIndex === 0) {
        this.selectedIndex = this.state.contexts.length
      }
      this.selectedIndex -= 1
      this.setCallbackSuggestion()
      this.forceUpdate()
    }
  }

  adjustPosition = () => {
    const { menu } = this.state
    if (!menu) return
	//console.log("!!!!!!!!!!!!!!!!!!!! in adjustPosition/state.menu set");
	//console.log(menu);

	menu.style.position = 'absolute'
	menu.style.width = 300
	menu.style.border = '1px solid gray'
	menu.style.background = '#fff'
	menu.style.margin = 10
	menu.style.padding = 10
	menu.style.display = 'block'
	menu.style.opacity = 1
	menu.style.top = `${this.props.top}px`;
	menu.style.left = `${this.props.left}px`;
  }

  closePortal = () => {
    const { menu } = this.state
    if (!menu) return

	//console.log("closePortal: remove style attribute.");
	menu.removeAttribute('style')
	return
  }

  setSelectedIndex = (selectedIndex) => {
    this.selectedIndex = selectedIndex
    this.forceUpdate()
  }

  render = () => {
    const { contexts } = this.state

	if (Lang.isNull(contexts)) return null; 
	
    return (
      <Portal isOpened={this.props.isOpened} onOpen={this.onOpen}>
        <div className="context-portal">
          <ul>
            {contexts.map((context, index) => {
			  //console.log(context);

              return <ContextItem
                key={context.key}
                index={index}
                context={context}
                selectedIndex={this.selectedIndex}
                setSelectedIndex={this.setSelectedIndex}
                onSelected={this.props.onSelected}
				onChange={this.props.onChange}
                closePortal={this.closePortal}
				state={this.props.state}
              />
			  }
            )}
          </ul>
        </div>
      </Portal>
    )
  }
}

export default ContextPortal