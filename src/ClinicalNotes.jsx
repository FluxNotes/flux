// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Application Components:
import RichEditor from './RichEditor';

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
    console.log(this);
    console.log(newStatus)
    this.props.onERStatusChange(newStatus);
  }

  handlePRStatusChange (newStatus) { 
    this.props.onPRStatusChange(newStatus);
  }

  render() {
    return (
      <div id="clinical-notes">
        <h1>Clinical Notes</h1>
        <div className="editor">
          <RichEditor />
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
    onERStatusChange:  PropTypes.func.isRequired,
    onPRStatusChange:  PropTypes.func.isRequired,

}

export default ClinicalNotes;