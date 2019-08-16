import React, { Component } from 'react';
import RemoveRedEye from 'material-ui-icons/RemoveRedEye';
import "./TemplateOptionPreviewButton.css";

export default class TemplateOptionPreviewButton extends Component {
    handleClick = (e) => {
        // stops note from opening and instead only shows note preview popover
        e.stopPropagation();
        this.props.onClick();
    }

    render() {
        return (
            <div className="template-preview-button" onClick={this.handleClick}>
                <RemoveRedEye />
            </div>
        );
    }
}