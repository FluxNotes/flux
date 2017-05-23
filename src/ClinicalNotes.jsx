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

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleHER2StatusChange = this.handleHER2StatusChange.bind(this);
    this.handleERStatusChange = this.handleERStatusChange.bind(this);
    this.handlePRStatusChange = this.handlePRStatusChange.bind(this);
  }

  handleTextChange(e, val) { 
    if(val.includes("HER2+")) { 
      this.handleHER2StatusChange("+")
    } else if(val.includes("HER2-")) { 
      this.handleHER2StatusChange("-")
    } else { 
      this.handleHER2StatusChange("")
    } 

    if(val.includes("ER+")) { 
      this.handleERStatusChange("+")
    } else if(val.includes("ER-")) { 
      this.handleERStatusChange("-")
    } else { 
      this.handleERStatusChange("")
    }

    if(val.includes("PR+")) { 
      this.handlePRStatusChange("+")
    } else if(val.includes("PR-")) { 
      this.handlePRStatusChange("-")
    } else { 
      this.handlePRStatusChange("")
    }
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
          <MyEditor />
        </div>
        <div>
          {message}
        </div>
      </div>
    );
  }
}

ClinicalNotes.propTypes = { 
    HER2Status:          PropTypes.string,
    ERStatus:            PropTypes.string,
    PRStatus:            PropTypes.string,
    onHER2StatusChange:  PropTypes.func.isRequired,
    onERStatusChange:    PropTypes.func.isRequired,
    onPRStatusChange:    PropTypes.func.isRequired,
    itemToBeEntered:     PropTypes.string,
}

export default ClinicalNotes;