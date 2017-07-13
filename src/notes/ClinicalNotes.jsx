// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
// Flexbox
import { Row, Col } from 'react-flexbox-grid';
// Application Components:
import MyEditor from './MyEditor';


// Styling
import './ClinicalNotes.css';

class ClinicalNotes extends Component {

  // constructor(props) {
  //   super(props);
  // }

  handleHER2StatusChange = (newStatus) => {
    this.props.onHER2StatusChange(newStatus);
  }

  handleERStatusChange = (newStatus) => {
    this.props.onERStatusChange(newStatus);
  }

  handlePRStatusChange = (newStatus) => {
    this.props.onPRStatusChange(newStatus);
  }

  handleStagingTUpdate = (newVal) => {
    this.props.onStagingTUpdate(newVal);
  }

  handleStagingNUpdate = (newVal) => {
    this.props.onStagingNUpdate(newVal);
  }

  handleStagingMUpdate = (newVal) => {
    this.props.onStagingMUpdate(newVal);
  }

  handleStageUpdate = (newVal) => {
    this.props.onStageUpdate(newVal)
  }

  handleSummaryUpdate = (newVal) => {
      this.props.onSummaryUpdate(newVal)
  }

  handleStructuredFieldEntered = (currentFocus) => {
    this.props.onStructuredFieldEntered(currentFocus);
  }

  handleStructuredFieldExited = (currentFocus) => {
    this.props.onStructuredFieldExited(currentFocus);
  }
  
  handleSelectionChange = (selectedText) => {
    if (this.props.onSelectionChange != null) {
		//console.log("ClinicalNotes selectedText=" + selectedText);
		this.props.onSelectionChange(selectedText);
	}
  }

  handleProgressionUpdate = (newProgression) => {
    this.props.onProgressionUpdate(newProgression);
  }

  handleNewProgression = (newProgression) => {
    this.props.onNewProgression(newProgression);
  }

  render() {
  
  
    let noteDescriptionContent = null;
    if (this.props.patient == null) {
        noteDescriptionContent = "";
    } else {
        noteDescriptionContent = (
          <div id="note-description">
            <Row>
              <Col xs={5}>
                <h1 id="note-title">Pathology Assessment</h1>
              </Col>
              <Col xs={2}>
                <p className="note-description-detail-name">Date</p>
                <p className="note-description-detail-value">20 June 2017</p>
              </Col>
              <Col xs={2}>
                <p className="note-description-detail-name">Source</p>
                <p className="note-description-detail-value">Pathology Report</p>
              </Col>
              <Col xs={3}>
                <p className="note-description-detail-name">Signed By</p>
                <p className="note-description-detail-value">Dr. Brenda Zeiweger</p>
              </Col>
            </Row>
  
			<Divider className="divider" />
          </div>
        );
    }
    return (
      <div id="clinical-notes" className="dashboard-panel">
        <Paper className="panel-content trio">
		  {noteDescriptionContent}

          <MyEditor
            // Update functions
            onStructuredFieldEntered={this.handleStructuredFieldEntered}
            onStructuredFieldExited={this.handleStructuredFieldExited}
      			onSelectionChange={this.handleSelectionChange}
            onStagingTUpdate={this.handleStagingTUpdate}
            onStagingNUpdate={this.handleStagingNUpdate}
            onStagingMUpdate={this.handleStagingMUpdate}
            onStageUpdate={this.handleStageUpdate}
            onSummaryUpdate={this.handleSummaryUpdate}
            onProgressionUpdate={this.handleProgressionUpdate}
            onNewProgression={this.handleNewProgression}

            // Helper functions
            calculateStage={this.props.calculateStage}
            // Properties
            progression={this.props.progression}
            tumorSize={this.props.tumorSize}
            nodeSize={this.props.nodeSize}
            metastasis={this.props.metastasis}
            data={{patient: {name: 'Debra Hernandez672', age: '51 years old', gender: 'female'}}}
            itemToBeInserted={this.props.itemToBeInserted}
            patient={this.props.patient}

          />
        </Paper>
      </div>
    );
  }
}

ClinicalNotes.propTypes = {
    HER2Status:               PropTypes.string,
    ERStatus:                 PropTypes.string,
    PRStatus:                 PropTypes.string,
    onStructuredFieldExited:  PropTypes.func.isRequired,
    onStructuredFieldEntered: PropTypes.func.isRequired,
    onStagingTUpdate:           PropTypes.func.isRequired,
    onStagingNUpdate:           PropTypes.func.isRequired,
    onStagingMUpdate:           PropTypes.func.isRequired
}

export default ClinicalNotes;
