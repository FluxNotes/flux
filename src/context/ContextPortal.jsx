import React from 'react'
import Portal from 'react-portal'
import ContextItem from './ContextItem'
import Lang from 'lodash'
import './ContextPortal.css';

const UP_ARROW_KEY = 38
const DOWN_ARROW_KEY = 40
const ENTER_KEY = 13
//const RESULT_SIZE = 5

class ContextPortal extends React.Component {
    /*
     * Adds a keydown listener when the component initally gets mounted
     */
    componentDidMount = () => {
         document.addEventListener('keydown', this.handleKeydownCP);
         this.adjustPosition()
    }
    /*
     * Removes a keydown listener when the component initally gets unmounted
     */
    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleKeydownCP);
    }
    /*
     * Adjust the portal position anytime the portal updates
     */
    componentDidUpdate = () => {
        this.adjustPosition();
    }
    /*
     * Updates state when context updates 
     */
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.contexts !== this.props.contexts) {
            this.setState({
                selectedIndex: 0
            });
        }
    }
    /*
     * Sets state to record current contexts and portal activity
     */
    constructor(props) {
        super()
        props.callback.onSelected = props.onSelected;
        props.callback.closePortal = this.closePortal;
        props.callback.readOnly = false;
        this.state = {
            selectedIndex: -1,
            active: false,
            justActive: false
        }
    }
    /*
     * When the portal opens, set flags appropriately and a decay timer for justActive
     */
    onOpen = (portal) => {
        this.setState({ menu: portal.firstChild, active: true, justActive: true })
        setTimeout(function(){ this.setState({ justActive: false }) }.bind(this), 100);
    }
    /* Called when user hits esc or clicks outside of portal
     * Call onSelected with null context to indicate nothing selected and just clean up state
     */
    onClose = () => {
        if (this.props.isOpened) {
            this.props.onChange(this.props.onSelected(this.props.state, null));
        }
        this.setState({ active: false, justActive: false }); // TEST: menu: null, 
    }
    /*
     * Only trigger keydown if the portal wasn't just activated
     */
    handleKeydownCP = (e) => {
        if (this.state.active) {
            e.preventDefault();
            e.stopPropagation();
            if (this.state.justActive) { // eat key that made us become active
                this.setState({ justActive: false });
                return;
            }
            this.onKeyDown(e.which);
        }
    }
    /*
     * Navigate and interact with menu based on button presses
     */
    onKeyDown(keyCode) {
        if (keyCode === DOWN_ARROW_KEY || keyCode === UP_ARROW_KEY) {
            const positionChange = (keyCode === DOWN_ARROW_KEY) ? -1 : +1; 
            this.changeMenuPosition(positionChange)
        } else if (keyCode === ENTER_KEY) {
            this.setState({ active: false, justActive: false });
            this.props.onChange(this.props.onSelected(this.props.state, this.props.contexts[this.state.selectedIndex]));
        }
    }
    /*
     * Change the menu position based on the amount of places to move
     */
    changeMenuPosition = (change) => { 
        // this will allow wrap around to the end of the list.
        const changePlusOriginalLength = change + this.props.contexts.length;
        const changeAfterWrapping = (this.state.selectedIndex + changePlusOriginalLength) % this.props.contexts.length;
        this.setState({ 
            selectedIndex: changeAfterWrapping
        })
    }
    /*
     * Adjust the rendering position of the menu
     */
    adjustPosition = () => {
        const { menu } = this.state
        if (!menu || !menu.style) return;

        menu.style.position = 'absolute';
        menu.style.width = 300;
        menu.style.background = '#fff';
        menu.style.padding = 10;
        menu.style.display = 'block';
        menu.style.opacity = 1;
        menu.style.top = `${this.props.top + window.pageYOffset}px`;
        menu.style.left = `${this.props.left + window.pageXOffset}px`;
    }
    /*
     * Close the menu portal if rendering
     */
    closePortal = () => {
        const { menu } = this.state
        if (Lang.isEmpty(menu)) return;
        menu.removeAttribute('style');
        return;
    }
    /*
     * Update the selected index
     */
    setSelectedIndex = (selectedIndex) => {
        this.setState({
            selectedIndex: selectedIndex
        });
    }
    /*
     * View of the current menu
     */
    render = () => {
        const { contexts } = this.props;
  
        if (Lang.isNull(contexts)) return null; 
    
        return (
            <Portal 
                closeOnEsc 
                closeOnOutsideClick 
                isOpened={this.props.isOpened} 
                onOpen={this.onOpen} 
                onClose={this.onClose}
            >
                <div className="context-portal">
                    <ul>
                        {contexts.map((context, index) => {
                            return <ContextItem
                                key={context.key}
                                index={index}
                                context={context}
                                selectedIndex={this.state.selectedIndex}
                                setSelectedIndex={this.setSelectedIndex}
                                onSelected={this.props.onSelected}
                                onChange={this.props.onChange}
                                closePortal={this.closePortal}
                                state={this.props.state}
                            />
                        })}
                    </ul>
                </div>
            </Portal>
        )
    }
}

export default ContextPortal