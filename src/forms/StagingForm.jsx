import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Button from '../elements/Button';
import staging from '../lib/staging';
import stagingLookup from '../lib/tnmstage_lookup';
import './StagingForm.css';

function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

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

  _handleTumorSizeClick(e, i) {
    e.preventDefault();
    let newValue = this.state.tumorValues[i].name
    this.props.updateValue("T", newValue);
  }

  _handleNodeClick(e, i) {
    e.preventDefault();
    let newValue = this.state.nodeValues[i].name;
    this.props.updateValue("N", newValue);
  }

  _handleMetastasisClick(e, i) {
    e.preventDefault();
    let newValue = this.state.metastasisValues[i].name;
    this.props.updateValue("M", newValue);
  }
  
  render() {
    return (
       <div>
            <h1>TNM Staging</h1>
            <p id="data-element-description">
              {stagingLookup.getDescription("TNMStage")}
            </p>
            <Divider className="divider" />

            <h4>Tumor Size</h4>
            <p id="data-element-description">
              {stagingLookup.getDescription("tumorSize")}
            </p>
            {this.state.tumorValues.map((t, i) => {
                const buttonClass = (t.description.length > 100) ? "tooltiptext large" : "tooltiptext";
                return (
                  <div key={t.name} className="tooltip-staging-form">
                     <span id={t.name} className={buttonClass}>{t.description}</span>
                      <Button raised
                          className="btn tumor-size"
                          key={i}
                          label={titlecase(t.name)}
                          onClick={(e) => this._handleTumorSizeClick(e, i)}
                          style={{
                            margin: 0.5,
                            height: "50px",
                            width: "180px",
                            padding: "20px 0 20px 0",
                          }}
                          disabled={this._currentlySelected(this.props.object.tStage, this.state.tumorValues[i].name)}
                      >{titlecase(t.name)}</Button>
                  </div>
                );
            })}

            <h4>Node</h4>
            <p id="data-element-description">
              {stagingLookup.getDescription("nodeSize")}
            </p>
            {this.state.nodeValues.map((n, i) => {
                const buttonClass = (n.description.length > 100) ? "tooltiptext large" : "tooltiptext";
                return (
                  <div key={n.name} className="tooltip-staging-form">
                     <span id={n.name} className={buttonClass}>{n.description}</span>
                      <Button raised
                          className="btn node"
                          key={i}
                          label={titlecase(n.name)}
                          onClick={(e) => this._handleNodeClick(e, i)}
                          style={{
                            margin: 0.5,
                            height: "50px",
                            width: "180px",
                            padding: "20px 0 20px 0",
                          }}
                          disabled={this._currentlySelected(this.props.object.nStage, this.state.nodeValues[i].name)}
                      >{titlecase(n.name)}</Button>
                  </div>
                );
            })}

            <h4>Metastasis</h4>
            <p id="data-element-description">
              {stagingLookup.getDescription("metastasis")}
            </p>
            {this.state.metastasisValues.map((m, i) => {
                const buttonClass = (m.description.length > 100) ? "tooltiptext large" : "tooltiptext";
                return (
                  <div key={m.name} className="tooltip-staging-form">
                   <span id={m.name} className={buttonClass}>{m.description}</span>
                    <Button raised
                        className="btn metastasis"
                        key={i}
                        label={titlecase(m.name)}
                        onClick={(e) => this._handleMetastasisClick(e, i)}
                          style={{
                            margin: 0.5,
                            height: "50px",
                            width: "180px",
                            padding: "20px 0 20px 0",
                          }}
                        disabled={this._currentlySelected(this.props.object.mStage, this.state.metastasisValues[i].name)}
                    >{titlecase(m.name)}</Button>
                  </div>
                );
            })}

            <h4>Prognostic Stage</h4>
            <p id="data-element-description">
              {stagingLookup.getDescription("prognosticStage")}
            </p>
            <div className="stage">{staging.breastCancerPrognosticStage(this.props.object.tStage, this.props.object.nStage, this.props.object.mStage) || 'Undefined'}</div>
        </div>
    );
  }
}


StagingForm.proptypes = { 
    updateValue: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired
}

export default StagingForm;
