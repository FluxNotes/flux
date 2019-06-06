import React from 'react';
import PropTypes from 'prop-types';
import './ContextGetHelp.css';

const UP_ARROW_KEY = 38;
const DOWN_ARROW_KEY = 40;
const ENTER_KEY = 13;

class ContextGetHelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getHelpSelected: false,
        };
    }

    componentWillUnmount() {
        this.props.closePortal();
    }

    getHelpSelected = () => {
        // WHY DOES THIS THROW AN ERROR
        // needed for case when clicked
        // this.setState({ getHelpSelected: true });
        console.log('SELECTED GET HELP: open second portal');
    }

    /*
     * Navigate and interact with menu based on button presses
     */
    onKeyDown = (e) => {
        const keyCode = e.which;
        if (keyCode === DOWN_ARROW_KEY || keyCode === UP_ARROW_KEY) {
            e.preventDefault();
            e.stopPropagation();
            const selected = this.state.getHelpSelected;
            this.setState({ getHelpSelected: !selected });
        } else if (keyCode === ENTER_KEY && !this.state.getHelpSelected) {
            // NOTE: This operations might not work on SyntheticEvents which are populat in react
            e.preventDefault();
            e.stopPropagation();
            this.props.closePortal();
        }
    }

    render() {
        const initiatingTrigger = this.props.shortcut.initiatingTrigger.replace('#','');
        return (
            <ul className="context-get-help" ref="contextGetHelp">
                <li
                    className="context-get-help-option"
                    data-active={this.state.getHelpSelected}
                    onClick={this.getHelpSelected()}
                    onMouseEnter={this.getHelpSelected()}
                >
                    <span className="context-get-help-text">
                        <i>get help with {initiatingTrigger}</i>
                        <span className="fa fa-angle-right"></span>
                    </span>
                </li>
            </ul>
        );
    }
}

ContextGetHelp.propTypes = {
    closePortal: PropTypes.func.isRequired,
    shortcut: PropTypes.object.isRequired
};

export default ContextGetHelp;