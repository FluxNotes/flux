// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// Flexbox
import { Grid, Row } from 'react-flexbox-grid';
// Styling
import './Templates.css';

class Templates extends Component {
  constructor(props) {
      super(props);

      this.state = {
        templates: ['op note', 'follow-up', 'consult note'],
      };
  }

  render() {
    return (
      //<Paper className="templates">
        <Grid fluid>
          {this.state.templates.map((t, i) => {
            return (
      				<div key={i}>
      				  <Row>
      					<RaisedButton
      						className="btn_template"
      						label={t}
      						onClick={(e) => this._insertTemplate(e, i)}
      					/>
      				</Row>
      			  </div>);
      		  })}
        </Grid>
      //</Paper>
    );
  }

  _handleInsertTemplate(e, i) {
    e.preventDefault();
    //this.setState({t: i});
  }

}
export default Templates;