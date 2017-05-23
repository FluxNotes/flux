// React imports
import React, { Component } from 'react';
// Material UI component imports
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// Flexbox
import { Grid, Row, Col } from 'react-flexbox-grid';
// Styling
import './FormsPanel.css';
// Our components
import StagingForm from './StagingForm';

class FormsPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="forms-panel">
        <h1>Forms</h1>
        <Paper zDepth={1}>
          <Grid fluid>
            <Row className='form-row'>
              <Col sm={12}>
                <StagingForm t={0} n={0} m={0} />
              </Col>
            </Row>
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default FormsPanel;
