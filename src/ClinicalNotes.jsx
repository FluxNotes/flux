// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Application Components:
import MyEditor from './MyEditor';


// Styling
import './ClinicalNotes.css';

class ClinicalNotes extends Component {

  constructor(props) {
    super(props);

    this.handleHER2StatusChange = this.handleHER2StatusChange.bind(this);
    this.handleERStatusChange = this.handleERStatusChange.bind(this);
    this.handlePRStatusChange = this.handlePRStatusChange.bind(this);
    this.handleStructuredFieldEntered = this.handleStructuredFieldEntered.bind(this);
    this.handleStructuredFieldExited = this.handleStructuredFieldExited.bind(this);
    this.handleTValueChange = this.handleTValueChange.bind(this);
    this.handleNValueChange = this.handleNValueChange.bind(this);
    this.handleMValueChange = this.handleMValueChange.bind(this);

  }

  handleHER2StatusChange (newStatus) {
    this.props.onHER2StatusChange(newStatus);
  }

  handleERStatusChange (newStatus) {
    this.props.onERStatusChange(newStatus);
  }

  handlePRStatusChange (newStatus) {
    this.props.onPRStatusChange(newStatus);
  }

  handleTValueChange (newVal) {
    this.props.onTValueChange(newVal);
  }

  handleNValueChange (newVal) {
    this.props.onNValueChange(newVal);
  }

  handleMValueChange (newVal) {
    this.props.onMValueChange(newVal);
  }

  handleStructuredFieldEntered (currentFocus) { 
    this.props.onStructuredFieldEntered("staging");
  }

  handleStructuredFieldExited (currentFocus) { 
    this.props.onStructuredFieldExited("staging");
  }

  render() {
    var message;
    if (this.props.itemToBeEntered !== '') {
      message = <p id="notes-message">The following information from the summary panel is inserted into the clinical notes: <span id="data">{this.props.itemToBeEntered}</span></p>
    } else {
      message = <p id="notes-message"></p>
    }
    return (
      <div id="clinical-notes">
        <h1>Clinical Notes</h1>
        <div className="editor">
          <MyEditor 
            onStructuredFieldEntered={this.handleStructuredFieldEntered}
            onStructuredFieldExited={this.handleStructuredFieldExited}

            onTValueChange = {this.handleTValueChange}
            onNValueChange = {this.handleNValueChange}
            onMValueChange = {this.handleMValueChange}

            data={{patient: {name: 'Debra Hernandez672', age: '51', gender: 'female'}}} />
        </div>
        <div>
          {message}
        </div>
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
    itemToBeEntered:          PropTypes.string,
    onTValueChange:           PropTypes.func.isRequired,
    onNValueChange:           PropTypes.func.isRequired,
    onMValueChange:           PropTypes.func.isRequired
}

export default ClinicalNotes;
