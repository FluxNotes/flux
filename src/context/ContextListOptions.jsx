import React from 'react';
import Portal from 'react-portal';
import PropTypes from 'prop-types';
import ContextItem from './ContextItem';

const UP_ARROW_KEY = 38
const DOWN_ARROW_KEY = 40
const ENTER_KEY = 13
const RESULT_SIZE = 5

class ContextListOptions extends React.Component {
    constructor() { 
        super();
        this.state = {
            selectedIndex: -1,
            style: {}
        };
    }
    componentDidMount() {
        this.adjustPosition();
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
     * Adjust the rendering position of the menu
     */
    adjustPosition = () => {
        // const { style } = this.state
        // if (!menu || !menu.style) return;
        const rect = this.props.getPosition();
        const tempStyle = {};
        if (!rect) {
            tempStyle.display = 'none'
        } else {
            tempStyle.position = 'absolute';
            tempStyle.width = 320;
            tempStyle.display = 'block';
            if (window.innerHeight - rect.top < 230) {
                tempStyle.bottom = `${window.innerHeight - rect.top - window.pageYOffset}px`;
                tempStyle.left = `${rect.left + window.pageXOffset + 10}px`;
            } else {
                tempStyle.top = `${rect.top + window.pageYOffset}px`;
                tempStyle.left = `${rect.left + window.pageXOffset}px`;
            }
        }
        this.setState({
            style: tempStyle
        })
    }

    /*
    * Change the menu position based on the amount of places to move
    */
   changeMenuPosition = (change) => {
       console.log('----------------------------changeMenuPosition')
       // this will allow wrap around to the end of the list.
        const changePlusOriginalLength = change + this.props.contexts.length;
        const indexAfterWrapping = (this.state.selectedIndex + changePlusOriginalLength) % this.props.contexts.length;
        
        const portalElement = this.refs.contextPortal;
        const portalList = portalElement.firstChild;
        const activeElement = portalList.childNodes[indexAfterWrapping];
        // console.log('this child? : ', this.refs.contextPortal.firstChild.childNodes[this.state.selectedIndex]);
        // this.refs.contextPortal.scrollTop = this.refs.contextPortal (this.state.selectedIndex - (numberOfElementsVisible - 1)) * 32 + 10;
        const portalHeight = portalElement.offsetHeight;
        const portalScrollTop = portalElement.scrollTop;
        const activeElementTop = activeElement.offsetTop;
        const activeElementBottom = activeElement.offsetTop + activeElement.offsetHeight;
        
        // Need to ensure that the current element is within the scroll bounds 
        if (activeElementBottom > (portalHeight + portalScrollTop)) { 
            // Scroll isabove the activeElement; We want scrollTop + portalHeight === activeElementBottom; algebra 
            portalElement.scrollTop = activeElementBottom - portalHeight;
        } else if (activeElementTop < portalScrollTop) { 
            // Scroll is below the activeElement; We want scrollTop === activeElementTop
            portalElement.scrollTop = activeElementTop;
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
            const height = this.refs.contextPortal.offsetHeight;
            const numberOfElementsVisible = Math.floor(height/32);
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
        const { style } = this.state;
        return (
            <Portal 
                closeOnEsc 
                closeOnOutsideClick 
                isOpened={true} 
                onClose={this.props.closePortal}
            >
                <div style={style} className="context-portal" ref="contextPortal">
                    <ul>
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
                </div>
            </Portal>
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