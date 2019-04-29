import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RemoveRedEye from 'material-ui-icons/RemoveRedEye';
import "./TemplateOptionPreviewButton.css"

export default class TemplateOptionPreviewButton extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return ( 
            <div className="template-preview-button">
                <RemoveRedEye/>
            </div>
        );
    }
}

TemplateOptionPreviewButton.propTypes = {
    
}