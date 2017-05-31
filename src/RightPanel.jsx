// React imports
import React, { Component } from 'react';
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
  }
    
  showingStaging = ( <div id="forms-panel">
			<h1>Select Staging</h1>
			<Paper zDepth={1}>
			  <Grid fluid>
				<Row className='form-row'>
				  <Col sm={12}>
					<StagingForm t={0} n={0} m={0} />
				  </Col>
				</Row>
			  </Grid>
			</Paper>
		  </div> );
  
  /*
	need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
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
		return this.showingStaging;
	}
  }
}

export default RightPanel;
