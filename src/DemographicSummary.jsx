// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material UI component imports
import Paper from 'material-ui/Paper';
// Application component imports

// Styling
import './DemographicSummary.css';


class DemographicSummary extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="demographic-summary">
        <Paper zDepth={1}>
          DemographicSummary panel
        </Paper>
      </div>
    );
  }
}

export default DemographicSummary;