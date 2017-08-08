// React imports
import React, { Component } from 'react';
// material-ui
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
// Libraries

import staging from '../lib/staging';
import stagingLookup from '../lib/staging_lookup';
// Styling
import './StagingForm.css';

class StagingForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        tumorValues: stagingLookup.getTsForEdition(7),
        nodeValues: stagingLookup.getNsForEdition(7),
        metastasisValues: stagingLookup.getMsForEdition(7)
      };
  }

  _currentlySelected(item, i) {
    return (item === i ? true : false);
  }

  _handleTumorSizeClick = (e, i) => {
    e.preventDefault();
    let newValue = this.state.tumorValues[i].name
    console.log("StagingForm._handleTumorSizeClick new value=" + newValue);
    this.props.updateValue("T", newValue);
  }

  _handleNodeClick = (e, i) => {
    e.preventDefault();
    let newValue = this.state.nodeValues[i].name;
    console.log("StagingForm._handleNodeClick new value=" + newValue);
    this.props.updateValue("N", newValue);
  }

  _handleMetastasisClick = (e, i) => {
    e.preventDefault();
    let newValue = this.state.metastasisValues[i].name;
    console.log("StagingForm._handleMetastasisClick new value=" + newValue);
    this.props.updateValue("M", newValue);
  }

  render() {
    // console.log("in render. of Staging form")
    return (
       <div>
            <h1>Current Staging</h1>
            <Divider className="divider" />

            <h4>Tumor Size</h4> 
            {this.state.tumorValues.map((t, i) => {
                const buttonClass = (t.description.length > 100) ? "tooltiptext large" : "tooltiptext";
                return (
                  <div key={t.name} className="tooltip">
                     <span id={t.name} className={buttonClass}>{t.description}</span>
                      <RaisedButton
                          className="btn tumor-size"
                          key={i}
                          label={titlecase(t.name)}
                          onClick={(e) => this._handleTumorSizeClick(e, i)}
                          disabled={this._currentlySelected(this.props.staging.tStage.coding.displayText, this.state.tumorValues[i].name)}
                      />
                  </div>
                );
            })}

            <h4>Node</h4>
            {this.state.nodeValues.map((n, i) => {
                const buttonClass = (n.description.length > 100) ? "tooltiptext large" : "tooltiptext";
                return (
                  <div key={n.name} className="tooltip">
                     <span id={n.name} className={buttonClass}>{n.description}</span>
                      <RaisedButton
                          className="btn node"
                          key={i}
                          label={titlecase(n.name)}
                          onClick={(e) => this._handleNodeClick(e, i)}
                          disabled={this._currentlySelected(this.props.staging.nStage.coding.displayText, this.state.nodeValues[i].name)}
                      />
                  </div>
                );
            })}

            <h4>Metastasis</h4>
            {this.state.metastasisValues.map((m, i) => {
                const buttonClass = (m.description.length > 100) ? "tooltiptext large" : "tooltiptext";
                return (
                  <div key={m.name} className="tooltip">
                   <span id={m.name} className={buttonClass}>{m.description}</span>
                    <RaisedButton
                        className="btn metastasis"
                        key={i}
                        label={titlecase(m.name)}
                        onClick={(e) => this._handleMetastasisClick(e, i)}
                        disabled={this._currentlySelected(this.props.staging.mStage.coding.displayText, this.state.metastasisValues[i].name)}
                    />
                  </div>
                );
            })}

            <h4>Prognostic Stage</h4>
            <div className="stage">{staging.breastCancerPrognosticStage(this.props.staging.tStage.coding.displayText, this.props.staging.nStage.coding.displayText, this.props.staging.mStage.coding.displayText) || 'Undefined'}</div>
        </div>
    );
  }
}

export default StagingForm;


function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
