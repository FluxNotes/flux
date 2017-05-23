// React imports
import React, { Component } from 'react';
// Material UI component imports
import Paper from 'material-ui/Paper';
// Application component imports
import { Grid, Row, Col } from 'react-flexbox-grid';

// Styling
import './DemographicSummary.css';

class DemographicSummary extends Component {
  patient = {
	photo: "./DebraHernandez672.jpg",
	name: "Debra Hernandez672",
	dateOfBirth: "05 APR 1966",
	administrativeGender: "Female",
	city: "Boston",
	state: "MA"}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="demographic-summary">
        <Paper zDepth={1}>
    		<Grid>
          <Row middle="sm">
            <Col><img src={this.patient.photo} alt={this.patient.name} /></Col>
      		  <Col xs={11} sm={4} md={5} lg={5}><h1>{this.patient.name}</h1></Col>
      		  <Col xs={11} sm={2} md={2} lg={2}>Date of Birth (Age):<br />{this.patient.dateOfBirth} ({calculateAge(this.patient.dateOfBirth)})</Col>
      		  <Col xs={11} sm={3} md={3} lg={3}>Administrative Gender:<br />{this.patient.administrativeGender}</Col>
      		  <Col xs={11} sm={2} md={1} lg={1}>From:<br />{this.patient.city}, {this.patient.state}</Col>
    		  </Row>
    		</Grid>
        </Paper>
      </div>
    );
  }
}

function calculateAge(dateOfBirth) {
	var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default DemographicSummary;