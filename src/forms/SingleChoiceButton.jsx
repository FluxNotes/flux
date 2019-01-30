import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ChoiceButton from '../elements/ChoiceButton';

import "./SingleChoiceButton.css"

class SingleChoiceButton extends Component {
    render() {
        let className = "single-choice-button "
        className += (this.props.className) ? `${this.props.className} ` : "";
        className += (this.props.isSelected) ? "selected " : "";

        return (
            <ChoiceButton 
                variant="raised"
                key={this.props.buttonKey}
                label={this.props.buttonText}
                onClick={this.props.onClick}
                className={className}
                style={{
                    marginBottom: this.props.marginSize,
                    marginLeft: this.props.marginSize,
                }}
            >
                {this.props.buttonText}
            </ChoiceButton>
        );
    }
}

SingleChoiceButton.proptypes = {
    buttonKey: PropTypes.isRequired,
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    marginSize: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}

export default SingleChoiceButton;
