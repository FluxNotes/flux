import React, { Component } from 'react';
import RemoveRedEye from 'material-ui-icons/RemoveRedEye';
import "./TemplateOptionPreviewButton.css";

export default class TemplateOptionPreviewButton extends Component {
    render() {
        return (
            <div onClick={() => { this.props.onClick(); }} onMouseOver={() => { this.props.onMouseOver(); }} className="template-preview-button">
                <RemoveRedEye />
            </div>
        );
    }
}