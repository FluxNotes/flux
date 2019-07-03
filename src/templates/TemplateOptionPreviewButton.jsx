import React, {Component} from 'react';
import RemoveRedEye from 'material-ui-icons/RemoveRedEye';
import "./TemplateOptionPreviewButton.css";

export default class TemplateOptionPreviewButton extends Component {
    render() {
        return (
            <div className="template-preview-button">
                <RemoveRedEye/>
            </div>
        );
    }
}