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
        console.log('rect: ', rect);
        const tempStyle = {};
        if (!rect) {
            tempStyle.display = 'none'
        } else {
            tempStyle.position = 'absolute';
            tempStyle.width = 320;
            tempStyle.background = '#fff';
            tempStyle.display = 'block';
            tempStyle.opacity = 1;
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
       // this will allow wrap around to the end of the list.
        const changePlusOriginalLength = change + this.props.contexts.length;
        const changeAfterWrapping = (this.state.selectedIndex + changePlusOriginalLength) % this.props.contexts.length;
        this.setState({ 
            selectedIndex: changeAfterWrapping
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
            // newIndex - (numberOfElementsVisible - 1) forces the scrolling to happen once your reach the bottom of the list in view.
            // 32 is the height of each suggestion in the list, 10 allows for the margin
            this.refs.contextPortal.scrollTop = (this.state.selectedIndex - (numberOfElementsVisible - 1)) * 32 + 10;
        } else if (keyCode === ENTER_KEY && this.state.selectedIndex !== -1) {
            e.preventDefault()
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