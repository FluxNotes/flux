import React from 'react'
import PropTypes from 'prop-types';
import Portal from 'react-portal'
import Calendar from 'rc-calendar';
import ContextItem from './ContextItem'
import Lang from 'lodash'
import './ContextPortal.css';
import 'rc-calendar/assets/index.css';

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
        // console.log("keycode");
        // console.log(keyCode);
        if (keyCode === DOWN_ARROW_KEY || keyCode === UP_ARROW_KEY) {
            const height = this.refs.contextPortal.offsetHeight;
            const numberOfElementsVisible = Math.floor(height/32);
            const positionChange = (keyCode === DOWN_ARROW_KEY) ? 1 : -1; 
            this.changeMenuPosition(positionChange)
            // newIndex - (numberOfElementsVisible - 1) forces the scrolling to happen once your reach the bottom of the list in view.
            // 32 is the height of each suggestion in the list, 10 allows for the margin
            this.refs.contextPortal.scrollTop = (this.state.selectedIndex - (numberOfElementsVisible - 1)) * 32 + 10;
        } else if (keyCode === ENTER_KEY) {

            // console.log("ENTER key pressed");
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
        const rect = this.props.getPosition();

        if (!rect) {
            // TODO: No positioning to use. Removing style may not be correct.
            menu.removeAttribute('style');
            menu.style.display = 'none'
        } else {
            menu.style.position = 'absolute';
            menu.style.width = 300;
            menu.style.background = '#fff';
            menu.style.padding = 10;
            menu.style.display = 'block';
            menu.style.opacity = 1;
            if (window.innerHeight - rect.top < 230) {
                menu.style.bottom = `${window.innerHeight - rect.top - window.pageYOffset}px`;
                menu.style.left = `${rect.left + window.pageXOffset + 10}px`;
            } else {
                menu.style.top = `${rect.top + window.pageYOffset}px`;
                menu.style.left = `${rect.left + window.pageXOffset}px`;
            }
        }
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
    
    handleCalendarSelect = (date) => {
        this.closePortal();
        const context = { key: 'set-date-id', context: `${date.format("MM/DD/YYYY")}`, object: date };
        const state = this.props.onSelected(this.props.state, context);
        this.props.onChange(state);
    }
    
    renderListOptions = () => {
        const { contexts } = this.props;
        return (
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
        );
    }
    
    renderCalendar = () => {
        // NOTE: If setTimeout doesn't seem to be setting the focus correctly, try creating a separate component 
        // that extends Calendar and has componentDidMount to set focus
        return (
            <Calendar
                showDateInput={false}
                onSelect={this.handleCalendarSelect}
                ref={input => input && setTimeout(() => {input.focus()}, 100)}
            />
        );
    }
    
    /*
     * View of the current menu
     */
    render = () => {
        const TYPE_LIST = 0;
        const TYPE_CALENDAR = 1;
        const { contexts } = this.props;
        let type;
        let className = "context-portal";
        if (Lang.isNull(contexts)) return null;
        
        if (Lang.isArray(contexts)) {
            type = TYPE_LIST;
            className += " scrollable";
        } else if (contexts === "date-id") {
            type = TYPE_CALENDAR;
        } else {
            console.error("unknown picker type: " + contexts);
        }
    
        return (
            <Portal 
                closeOnEsc 
                closeOnOutsideClick 
                isOpened={this.props.isOpened} 
                onOpen={this.onOpen} 
                onClose={this.onClose}
            >
                <div className={className} ref="contextPortal">
                    {type === TYPE_CALENDAR ? this.renderCalendar() : this.renderListOptions()}
                </div>
            </Portal>
        )
    }
}

ContextPortal.proptypes = { 
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    state: PropTypes.object,
    callback: PropTypes.object,
    onSelected: PropTypes.func.isRequired,
    contexts: PropTypes.object,
    capture: PropTypes.object.isRequired,
    trigger: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isOpened: PropTypes.bool.isRequired,
    contextManager: PropTypes.object.isRequired
}

export default ContextPortal