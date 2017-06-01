// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material UI component imports
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// Flexbox
import { Grid, Row, Col } from 'react-flexbox-grid';
// Styling
import './RightPanel.css';
// Our components
import StagingForm from './StagingForm';
import Templates from './Templates';

class RightPanel extends Component {
  constructor(props) {
    super(props);

	  // this.handleStagingUpdateFromStagingForm = this.handleStagingUpdateFromStagingForm.bind(this);
  }

  /*
	handleStagingUpdateFromStagingForm(t, n, m, stage) {

		console.log("in right panel: ");
		console.log(t);
		console.log(n);
		console.log(m);
		console.log(stage);

		this.props.onStagingUpdateFromRightPanelInput(t, n, m, stage);
	}*/

  showingStaging = ( <div id="forms-panel">
			<h1>Select Staging</h1>
			<Paper zDepth={1}>
			  <Grid fluid>
				<Row className='form-row'>
				  <Col sm={12}>
					<StagingForm 
						t={this.props.t} n={this.props.n} m={this.props.m} stage={this.props.stage}
						onStagingTUpdate={this.props.onStagingTUpdate}
						onStagingNUpdate={this.props.onStagingNUpdate}
						onStagingMUpdate={this.props.onStagingMUpdate}
						/>
				    </Col>
				</Row>
			  </Grid>
			</Paper>
		  </div> );
  
  /*
					  <StagingForm onStagingUpdateFromStagingForm={(t,n,m,stage) => this.handleStagingUpdateFromStagingForm(t,n,m,stage)} />
	need to listen for enterStructuredField and exitStructuredField events. when get an enter, set the showing state
	to the correct entry form for the structured field. on exit, set to null.
  */

  render() {
    console.log(this.props);
	if (this.props.withinStructuredField == null) {
		return (
		  <div id="forms-panel">
			<h1>Templates</h1>
			<Paper zDepth={1}>
			  <Grid fluid>
				<Row className='form-row'>
				  <Col sm={12}>
					<Templates />
				  </Col>
				</Row>
			  </Grid>
			</Paper>
		  </div>
		);
	} else {
		//return this.showingStaging;
		return ( <div id="forms-panel">
			<h1>Select Staging</h1>
			<Paper zDepth={1}>
			  <Grid fluid>
				<Row className='form-row'>
				  <Col sm={12}>
					<StagingForm 
						t={this.props.t} n={this.props.n} m={this.props.m} stage={this.props.stage}
						onStagingTUpdate={this.props.onStagingTUpdate}
						onStagingNUpdate={this.props.onStagingNUpdate}
						onStagingMUpdate={this.props.onStagingMUpdate}
						/>
				    </Col>
				</Row>
			  </Grid>
			</Paper>
		  </div> );
	}
  }
}

/*
RightPanel.propTypes = {
	onStagingUpdateFromRightPanelInput: PropTypes.func.isRequired
}*/

export default RightPanel;
