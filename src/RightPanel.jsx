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
  }

  /*
    need to listen for enterwithinStructuredField and exitwithinStructuredField events. when get an enter, set the showing state
    to the correct entry form for the structured field. on exit, set to null.
  */

  render() {
    if (this.props.withinStructuredField == null) {
        return (
            <Templates />
        );  
    } else {
        return ( 
            <StagingForm 
                tumorSize={this.props.tumorSize} nodeSize={this.props.nodeSize} metastasis={this.props.metastasis} stage={this.props.stage}
                onStagingTUpdate={this.props.onStagingTUpdate}
                onStagingNUpdate={this.props.onStagingNUpdate}
                onStagingMUpdate={this.props.onStagingMUpdate}
            />
        );
    }
  }
}

export default RightPanel;
