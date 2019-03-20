import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './TemplateForm.css';

export default class TemplateForm extends Component {
    handleClick = (e, index) => {
        e.preventDefault();
        this.props.handleClick(index);
    }

    render() {
        return (
           <div>
                <h1>{this.props.heading}</h1>

                {this.props.templates.map((template, index) => {
                    return (
                        <div
                            className="template"
                            label={template}
                            key={index}
                            onClick={(e) => this.handleClick(e, index)}
                        >
                            {template}
                        </div>
                    );
                })}
            </div>
        );
    }
}

TemplateForm.propTypes = {
    handleClick: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired,
    patient: PropTypes.object.isRequired,
    templates: PropTypes.array.isRequired,
}
