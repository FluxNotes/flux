import React from 'react'
import Portal from 'react-portal'
import ContextItem from './ContextItem'
import Lang from 'lodash'

// Styling
import './ContextPortal.css';

const UP_ARROW_KEY = 38
const DOWN_ARROW_KEY = 40
const ENTER_KEY = 13
//const RESULT_SIZE = 5

class ContextPortal extends React.Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeydownCP);
	this.adjustPosition()
  }
  componentWillUnmount() {
	document.removeEventListener('keydown', this.handleKeydownCP);
  }
  componentDidUpdate = () => {
    this.adjustPosition()
  }
  
  componentWillReceiveProps = (props) => {
	if (props.contexts !== this.state.contexts) {
		this.setState({
			contexts: props.contexts
		});
		this.selectedIndex = 0;
	}
  }

  constructor(props) {
    super()
	
	//props.callback.onKeyDown = this.onKeyDown
	this.handleKeydownCP = this.handleKeydownCP.bind(this);
    props.callback.onSelected = props.onSelected
    props.callback.closePortal = this.closePortal
    props.callback.readOnly = false
	this.state = {
		contexts: props.contexts,
		active: false,
		justActive: false
	}
  }

  onOpen = (portal) => {
	console.log("onOpen");
    this.setState({ menu: portal.firstChild, active: true, justActive: true })
	setTimeout(function(){ this.setState({ justActive: false }) }.bind(this), 100);
  }
  
  // called when user hits esc or clicks outside of portal
  // call onSelected with null context to indicate nothing selected and just clean up state
  onClose = () => {
	console.log("onClose");
    if (this.props.isOpened) {
		this.props.onChange(this.props.onSelected(this.props.state, null));
	}
	this.setState({ active: false, justActive: false }); // TEST: menu: null, 
  }

  handleKeydownCP(e) {
    console.log("ContextPortal.handleKeyDownCP active=" + this.state.active + " " + e);
    if (this.state.active) {
		e.preventDefault();
		e.stopPropagation();
		if (this.state.justActive) { // eat key that made us become active
			this.setState({ justActive: false });
			return;
		}
		this.onKeyDown(e.keyCode);
	}
  }
  
  onKeyDown(keyCode) {
    console.log("ContextPortal.onKeyDown " + keyCode);
    if (keyCode === DOWN_ARROW_KEY) {
      if (this.selectedIndex + 1 === this.state.contexts.length) {
        this.selectedIndex = -1
      }
      this.selectedIndex += 1
      this.forceUpdate()
    } else if (keyCode === UP_ARROW_KEY) {
      if (this.selectedIndex === 0) {
        this.selectedIndex = this.state.contexts.length
      }
      this.selectedIndex -= 1
      this.forceUpdate()
    } else if (keyCode === ENTER_KEY) {
		console.log("ENTER. selected " + this.state.contexts[this.selectedIndex]);
		this.setState({ active: false, justActive: false });
		this.props.onChange(this.props.onSelected(this.props.state, this.state.contexts[this.selectedIndex]));
	}
  }

  adjustPosition = () => {
    const { menu } = this.state
    if (!menu || !menu.style) return
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

	console.log("closePortal: remove style attribute.");
	//menu.removeAttribute('style')
	
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
      <Portal closeOnEsc closeOnOutsideClick isOpened={this.props.isOpened} onOpen={this.onOpen} onClose={this.onClose}>
        <div className="context-portal">
          <ul>
            {contexts.map((context, index) => {
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