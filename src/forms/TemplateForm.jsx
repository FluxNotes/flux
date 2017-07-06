// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
// Styling
import './TemplateForm.css';

class TemplateForm extends Component {
  constructor(props) {
        super(props);

		if (this.props.patient == null) {
			this.state = {
			  heading : "Data Items",
			  templates: ['progression', 'toxicity'],
			};
		} else {
			this.state = {
			  heading : "Available Templates",
			  templates: ['op note', 'follow-up', 'consult note'],
			};
		}

        this._insertTemplate = this._insertTemplate.bind(this);
  }

  render() {
    return (
       <div>
            <h1>{this.state.heading}</h1>
            <Divider className="divider"/>
            {this.state.templates.map((t, i) => {
                return (
                    <RaisedButton
                        className="btn_template"
                        label={t}
                        key={i}
                        onClick={(e) => this._insertTemplate(e, i)}
                    />
                );
            })}
        </div>
    );
  }

  _insertTemplate(e, i) {
    e.preventDefault();
    console.log(`Inserting template ${this.state.templates[i]}`);
  }

}
export default TemplateForm;
