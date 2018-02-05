import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';

import "./MultiChoiceButton.css"

class MultiChoiceButton extends Component {  
    render() {
        let className = "multi-choice-button ";
        className += (this.props.className) ? `${this.props.className} ` : "";
        className += (this.props.isSelected) ? "selected " : "";

        return ( 
            <Button raised
                    key={this.props.buttonKey}
                    label={this.props.buttonText}
                    onClick={this.props.onClick}
                    className={className}
                    style={{
                        margin: 0.5,
                        height: "60px",
                        width: "150px",
                        backgroundColor: "white",
                        textTransform: "none"
                    }}
            >
                {this.props.buttonText}
            </Button>
        );
    }
}

MultiChoiceButton.proptypes = { 
    buttonKey: PropTypes.isRequired,
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    marginSize: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}

export default MultiChoiceButton;