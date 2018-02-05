import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../elements/Button';

import "./SingleChoiceButton.css"

class SingleChoiceButton extends Component {  
    render() {
        let className = "single-choice-button "
        className += (this.props.className) ? `${this.props.className} ` : "";
        className += (this.props.isSelected) ? "selected " : "";

        return ( 
            <Button raised
                    key={this.props.buttonKey}
                    label={this.props.buttonText}
                    onClick={this.props.onClick}
                    className={className}
                    style={{
                        marginBottom: this.props.marginSize,
                        marginLeft: this.props.marginSize,
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

SingleChoiceButton.proptypes = { 
    buttonKey: PropTypes.isRequired,
    buttonText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    marginSize: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
}

export default SingleChoiceButton;