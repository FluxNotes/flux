// React imports
import React, { Component } from 'react';
// material-ui
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
// Styling
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
                    <RaisedButton
                        className="btn_template"
                        label={t}
                        key={i}
                        onClick={(e) => this._handleClick(e, i)}
                    />
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
export default TemplateForm;
