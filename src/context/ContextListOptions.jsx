import React from 'react';
import PropTypes from 'prop-types';
import ContextItem from './ContextItem';
import './ContextListOptions.css'

const UP_ARROW_KEY = 38
const DOWN_ARROW_KEY = 40
const ENTER_KEY = 13
const RESULT_SIZE = 5

class ContextListOptions extends React.Component {
    constructor(props) { 
        super(props);
        this.state = {
            selectedIndex: -1,
            style: {}
        };
    }

    componentWillUnmount() { 
        this.props.closePortal()
    }

    setSelectedIndex = (selectedIndex) => {
        this.setState({
            selectedIndex
        });
    }

    /*
    * Change the menu position based on the amount of places to move
    */
   changeMenuPosition = (change) => {
       console.log('----------------------------changeMenuPosition')
       // this will allow wrap around to the end of the list.
        const changePlusOriginalLength = change + this.props.contexts.length;
        const indexAfterWrapping = (this.state.selectedIndex + changePlusOriginalLength) % this.props.contexts.length;
        
        const list = this.refs.contextListOptions;
        // Relevant values for the list
        const listHeight = list.offsetHeight;
        const listScrollTop = list.scrollTop;
        // Relevant values for the new active element
        const activeElement = list.childNodes[indexAfterWrapping];
        const activeElementTop = activeElement.offsetTop;
        const activeElementBottom = activeElement.offsetTop + activeElement.offsetHeight;
        
        // Need to ensure that the current element is within the scroll bounds 
        if (activeElementBottom > (listHeight + listScrollTop)) { 
            // Scroll isabove the activeElement; We want scrollTop + listHeight === activeElementBottom; algebra 
            list.scrollTop = activeElementBottom - listHeight;
        } else if (activeElementTop < listScrollTop) { 
            // Scroll is below the activeElement; We want scrollTop === activeElementTop
            list.scrollTop = activeElementTop;
        }
        this.setState({ 
            selectedIndex: indexAfterWrapping
        });
    }
    
    /*
     * Navigate and interact with menu based on button presses
     */
    onKeyDown = (e, data, state, editor) => {
        const keyCode = e.which;
        if (keyCode === DOWN_ARROW_KEY || keyCode === UP_ARROW_KEY) {
            e.preventDefault()
            e.stopPropagation();
            const positionChange = (keyCode === DOWN_ARROW_KEY) ? 1 : -1; 
            this.changeMenuPosition(positionChange)
        } else if (keyCode === ENTER_KEY && this.state.selectedIndex !== -1) {
            e.preventDefault();
            e.stopPropagation();
            this.props.closePortal();
            this.props.onSelected(this.props.state, this.props.contexts[this.state.selectedIndex]);
        }
    }

    render() {
        const { contexts, state } = this.props;
        return (
            <ul className="context-list-options" ref="contextListOptions">
                {contexts.map((context, index) => {
                    return <ContextItem
                        key={context.key}
                        index={index}
                        context={context}
                        selectedIndex={this.state.selectedIndex}
                        setSelectedIndex={this.setSelectedIndex}
                        onSelected={this.props.onSelected}
                        closePortal={this.props.closePortal}
                        state={state}
                    />
                })}
            </ul>
        );
    }
}

ContextListOptions.propTypes = {
    closePortal: PropTypes.func,
    contexts: PropTypes.array.isRequired,
    onSelected: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
}

export default ContextListOptions;