import React from 'react';
import PropTypes from 'prop-types';
import './ContextGetHelp.css';
import NoteParser from '../noteparser/NoteParser';


const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;
const ENTER_KEY = 13;

class ContextGetHelp extends React.Component {
    constructor(props) {
        super(props);
        this.noteParser = new NoteParser();

        // eventually we can set this up to have custom options as a prop
        const defaultOptions = [
            {
                text: 'expand',
                onSelect: this.expand
            }
        ];

        this.state = {
            selectedIndex: -1,
            getHelpOptions: defaultOptions
        };
    }

    componentWillUnmount() {
        this.props.closePortal();
    }

    expand = () => {
        this.props.closePortal();
        const transform = this.replaceCurrentShortcut(this.props.shortcut.metadata.expandedText);
        return this.props.onSelected(transform.apply(), null);
    }

    replaceCurrentShortcut = (selection) => {
        let transform;
        transform = this.props.state.transform();
        const triggers = this.noteParser.getListOfTriggersFromText(selection)[0];
        triggers.forEach((trigger, idx) => {
            if (idx !== 0) {
                transform = this.props.insertShortcut(trigger.definition, trigger.trigger, trigger.selectedValue, transform, 'typed');
            }
            if (idx < triggers.length-1) {
                transform = transform.insertText(selection.substring(trigger.endIndex, triggers[idx+1].startIndex));
            }
            else if (trigger.endIndex < selection.length) {
                transform = transform.insertText(selection.substring(trigger.endIndex));
            }
        });
        return transform;
    }

    setSelectedIndex = (selectedIndex) => {
        this.setState({ selectedIndex });
    }

    /*
     * Change the menu position based on the amount of places to move
     */
    changeMenuPosition = (change) => {
        const optionsCount = this.state.getHelpOptions.length;
        let newSelectedIndex = this.state.selectedIndex;
        if ((change === -1 && this.state.selectedIndex > -1) || (change === 1 && this.state.selectedIndex < optionsCount)) {
            newSelectedIndex = this.state.selectedIndex + change;
        }
        // wrap back to top on down arrow of last option
        if (change === 1 && this.state.selectedIndex === optionsCount) {
            newSelectedIndex = 0;
        }
        this.setSelectedIndex(newSelectedIndex);
    }

    /*
     * Navigate and interact with menu based on button presses
     */
    onKeyDown = (e) => {
        const keyCode = e.which;
        if (keyCode === DOWN_ARROW_KEY || keyCode === UP_ARROW_KEY) {
            e.preventDefault();
            e.stopPropagation();
            const positionChange = (keyCode === DOWN_ARROW_KEY) ? 1 : -1;
            this.changeMenuPosition(positionChange);
        } else if (keyCode === ENTER_KEY) {
            // NOTE: This operations might not work on SyntheticEvents which are populat in react

            // close portal if enter key is pressed but no dropdown option is in focus
            if (this.state.selectedIndex === -1) {
                e.preventDefault();
                e.stopPropagation();
                this.props.closePortal();
            }

            // one of the get help options is selected via enter key
            else if (this.state.selectedIndex > 0) {
                e.preventDefault();
                e.stopPropagation();

                // the parent 'get help' option is not included in the getHelpOptions array
                // but it is included as a selectedIndex, so there is an off by one that needs
                // to be calculated, hence the -1
                return this.state.getHelpOptions[this.state.selectedIndex-1].onSelect();
            }
        }
    }

    renderOptionsWithGetHelp = () => {
        // Get name of the shortcut for the getHelp text
        const initiatingTrigger = this.props.shortcut.getDisplayText();

        // Determine if we should display anything other than the getHelp option
        const isGetHelpClosed = this.state.selectedIndex === -1;
        // For any informational flags, define them here and chain them together into a single variable
        // This variable will determine if we display a horizontal bar, separating information from actions
        const isMissingParent = this.props.shortcut.isMissingParent;
        const isInformationAvailable = isMissingParent || false;

        // Create our icon class to signal the expanding/collapsing getHelp option, based on open/closedness
        let iconClass = 'fa fa-angle-';
        isGetHelpClosed ? iconClass += 'down' : iconClass += 'up';

        return (
            <span>
                <li
                    className="context-get-help-li"
                    data-active={this.state.selectedIndex === 0}
                    onMouseEnter={() => { this.setSelectedIndex(0); }}
                    onClick={() => { this.setSelectedIndex(-1); }}
                >
                    <span className="context-get-help-text">
                        get help with {initiatingTrigger}
                        <span className={iconClass}></span>
                    </span>
                </li>

                <span className="context-get-help-options">
                    {!isGetHelpClosed && this.state.getHelpOptions.map((option, index) => {
                        // the parent 'get help' option is not included in the getHelpOptions array
                        // but it is included as a selectedIndex, so there is an off by one that needs
                        // to be calculated, hence the updatedIndex + 1 from the index of the getHelpOptions
                        const updatedIndex = index + 1;
                        return (
                            <li key={updatedIndex}
                                data-active={this.state.selectedIndex === updatedIndex}
                                onClick={option.onSelect}
                                onMouseEnter={() => { this.setSelectedIndex(updatedIndex); }}
                            >
                                {option.text}
                            </li>
                        );
                    })}
                </span>
                {(!isGetHelpClosed && isInformationAvailable) && this.renderHorizontalLine()}
                {(!isGetHelpClosed && isMissingParent) && this.renderIsMissingParent()}
            </span>
        );
    }

    renderIsCompleteMessage() {
        const initiatingTrigger = this.props.shortcut.getDisplayText();
        const infoIconiconClass = "fa fa-info-circle";
        return (
            <li className="context-get-help-li" >
                <span className="context-information-text">
                    <span className={infoIconiconClass}></span>
                    <i>{initiatingTrigger} is already complete</i>
                </span>
            </li>
        );
    }

    renderIsMissingParent() {
        const shortcut = this.props.shortcut;
        const initiatingTrigger = shortcut.getDisplayText();
        const potentialParentText = shortcut.potentialParents.map(parentID => this.props.shortcutManager.getShortcutLabel(parentID)).join(", or");
        const infoIconiconClass = "fa fa-info-circle";
        return (
            <li className="context-get-help-li">
                <span className="context-information-text">
                    <span className={infoIconiconClass}></span>
                    <i>{initiatingTrigger} needs more context, try mentioning {potentialParentText} beforehand</i>
                </span>
            </li>
        );
    }

    renderHorizontalLine() {
        return (
            <hr/>
        );
    }

    render() {
        // Decide the list content and render whatever it is in the UL element
        let listContent = null;
        if (this.props.shortcut.isMissingParent && this.props.shortcut.hasChildren()) {
            // If the shortcut we're responsible for is missing a parent but is already expanded, display a message to the user to avoid confusion
            listContent = this.renderIsMissingParent();
        } else if (this.props.shortcut.isComplete) {
            // Else, if the shortcut we're responsible for is complete, display a message to the user to avoid confusion
            listContent = this.renderIsCompleteMessage();
        } else {
            // Else we should display all our getHelp message
            listContent = this.renderOptionsWithGetHelp();
        }

        return (
            <ul className="context-get-help" ref="contextGetHelp">
                {listContent}
            </ul>
        );
    }
}

ContextGetHelp.propTypes = {
    closePortal: PropTypes.func.isRequired,
    shortcut: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
};

export default ContextGetHelp;