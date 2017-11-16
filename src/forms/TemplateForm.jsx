import React, { Component } from 'react';
import Button from '../elements/Button';
import Divider from 'material-ui/Divider';
import './TemplateForm.css';

class TemplateForm extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        return (
           <div>
                <h1>{this.props.heading}</h1>
                <Divider className="divider"/>
                {this.props.templates.map((t, i) => {
                    return (
                        <Button raised className="btn_template"
                            label={t}
                            key={i}
                            onClick={(e) => this._handleClick(e, i)}
                        >
                        {t}</Button>
                    ); //this._insertTemplate(e, i)
                })}
            </div>
        );
    }

    _handleClick(e, i) {
        e.preventDefault();
        this.props.handleClick(i);
    }
}

TemplateForm.proptypes = { 
    patient: PropTypes.object.isRequired, 
    heading: PropTypes.string.isRequired, 
    templates: PropTypes.array.isRequired, 
    handleClick: PropTypes.func.isRequired, 
}

export default TemplateForm;
