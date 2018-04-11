import React from 'react'
import Portal from 'react-portal'
import Calendar from 'rc-calendar';
import ContextItem from './ContextItem'
import Lang from 'lodash'
import './ContextPortal.css';
import position from '../lib/slate-suggestions-dist/caret-position'
import getCurrentWord from '../lib/slate-suggestions-dist/current-word'
import {
    UP_ARROW_KEY,
    DOWN_ARROW_KEY,
    ENTER_KEY,
    RESULT_SIZE,
} from '../lib/slate-suggestions-dist/constants'

class ContextPortal extends React.Component {
    // Adjust position on initial mount
    componentDidMount = () => {
        this.adjustPosition()
    }

    // Adjust position on each update
    componentDidUpdate = () => {
        this.adjustPosition()
    }

    constructor(props) {
        super()
        // Set callback values so we can pass functions up
        props.callback.onKeyDown = this.onKeyDown
        props.callback.onEnter = props.onEnter
        props.callback.isPortalOpen = this.isPortalOpen
        props.callback.closePortal = this.closePortal
        props.callback.readOnly = false

        // Storing selected index in state b/c updates should trigger a re-render
        this.state = {
            selectedIndex: 0,
        }

        // // Set first suggestion
        // if (typeof props.suggestions === 'function') {
        //     const filteredSuggestions = props.suggestions('');
        //     props.callback.suggestion = filteredSuggestions[this.state.selectedIndex]
        // } else {
        //     const filteredSuggestions = props.suggestions.slice(0, props.resultSize ? props.resultSize : RESULT_SIZE)
        //     props.callback.suggestion = filteredSuggestions[this.state.selectedIndex]
        // }
    }

    // Given # positions changed, update selectedIndex with new position
    setSelectedIndex = (newIndex) => {
        this.setState({
            selectedIndex: newIndex
        });
    }



    // Given # positions changed, return new index, wrapping if overflow
    getNewMenuPostion = (change) => {

            // this will allow wrap around to the end of the list
            const changePlusOriginalLength = change + this.props.contexts.length;
            const changeAfterWrapping = (this.state.selectedIndex + changePlusOriginalLength) % this.props.contexts.length;
            return changeAfterWrapping;


    }

    // Use new key-presses to update the current suggestion
    onKeyDown = (keyCode, data) => {



        if (keyCode === DOWN_ARROW_KEY || keyCode === UP_ARROW_KEY) {
            console.log("got in key down");
            console.log("key: " + keyCode);

            const height = this.refs.suggestionPortal.offsetHeight;
            const numberOfElementsVisible = Math.floor(height/32);
            // If up/down, change position in list

            const positionChange = (keyCode === DOWN_ARROW_KEY) ? +1 : -1;
            const newIndex = this.getNewMenuPostion(positionChange);
            this.setSelectedIndex(newIndex)

            // newIndex - (numberOfElementsVisible - 1) forces the scrolling to happen once your reach the bottom of the list in view.
            // 32 is the height of each suggestion in the list, 10 allows for the margin
            this.refs.ContextPortal.scrollTop = (newIndex - (numberOfElementsVisible - 1)) * 32 + 10;
        }
    }




    // Adjust menu styling and position when needed
    adjustPosition = () => {
        const { menu } = this.state;
        // If there is no menu, return
        if (!menu || !menu.style) return;
        //
        // // Prevent portal from opening when Context Portal is open
        // if (this.props.contextPortalOpen) {
        //     this.closePortal();
        //     return;
        // }

        // const match = this.matchCapture();
        // if (match === undefined) {
        //     // No match: remove menu styling
        //     menu.removeAttribute('style');
        //     return;
        // }

        // if (this.matchTrigger() || match) {
            const rect = this.props.getPosition();
            if (!rect) {
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
                    menu.style.bottom = `${window.innerHeight - rect.top - window.pageYOffset}px` // eslint-disable-line no-mixed-operators
                    menu.style.left = `${rect.left + window.pageXOffset + 10}px` // eslint-disable-line no-mixed-operators
                } else {
                    menu.style.top = `${rect.top + window.pageYOffset}px` // eslint-disable-line no-mixed-operators
                    menu.style.left = `${rect.left + window.pageXOffset}px` // eslint-disable-line no-mixed-operators
                }
            }
        // }
    }

    isPortalOpen = () => {
        const { menu } = this.state;
        return menu && menu.style && menu.style.display !== 'none';
    }

    // Assigns a value to menu when the portal opens
    openPortal = (portal) => {
        this.setState({
            menu: portal.firstChild
        });

    }

    // Closes portal
    closePortal = () => {
        const { menu } = this.state;
        // No menu to close: return
        if (!menu) return;

        // Remove menu styling
        menu.removeAttribute('style');
        menu.style.display = 'none';

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
                onOpen={this.openPortal}
                onClose={this.onClose}
            >
                <div className={className} ref="contextPortal">
                    {type === TYPE_CALENDAR ? this.renderCalendar() : this.renderListOptions()}
                </div>
            </Portal>
        )
    }
}

export default ContextPortal
