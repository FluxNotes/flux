// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
// Flexbox
import {Row, Col } from 'react-flexbox-grid';
// Libraries
import staging from '../lib/staging';
import lookup from '../lib/staging_lookup';
// Styling
import './StagingForm.css';

class StagingForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        tumorSizes: lookup.getTsForEdition(7),
        nodes: lookup.getNsForEdition(7),
        metastases: ['M0', 'M1']
      };
  }

  _currentlySelected(item, i) {
    return (item === i ? true : false);
  }

  _handleTumorSizeClick = (e, i) => {
    e.preventDefault();
    // console.log("StagingForm._handleTumorSizeClick T=" + i);
    this.props.onStagingTUpdate(this.state.tumorSizes[i]);
  }

  _handleNodeClick = (e, i) => {
    e.preventDefault();
    // console.log("StagingForm._handleNodeClick N=" + i);
    this.props.onStagingNUpdate(this.state.nodes[i]);
  }

  _handleMetastasisClick = (e, i) => {
    e.preventDefault();
    // console.log("StagingForm._handleMetastasisClick M=" + i);
    this.props.onStagingMUpdate(this.state.metastases[i]);
  }

  render() {
    // console.log("in render. t: " + this.props.t);
    return (
      <div id="forms-panel">
            <Paper zDepth={1}  className={this.props.className}>
                <div id="staging-form-heading">
                    <h1>Current Stage</h1>
                </div>
                <Row center="xs">
                    <Col xs={11}>
                        <Divider />
                    </Col>
                </Row>
                <div id="staging-form-contents">
                    <Row>
                        <h4>Tumor Size</h4>
                    </Row>
                    <Row>
                        {this.state.tumorSizes.map((t, i) => {
                            return (
                                <div key={t} className="tooltip">
                                    <span className="tooltiptext">some text</span>
                                <RaisedButton
                                    className="btn tumor-size"
                                    key={i}
                                    label={t}
                                    onClick={(e) => this._handleTumorSizeClick(e, i)}
                                    disabled={this._currentlySelected(this.props.tumorSize, this.state.tumorSizes[i])}
                                />
                                </div>

                            );
                        })}
                    </Row>
                    <Row>
                        <h4>Node</h4>
                    </Row>
                    <Row>
                        {this.state.nodes.map((n, i) => {
                            return (
                                <RaisedButton
                                    className="btn node"
                                    key={i}
                                    label={n}
                                    onClick={(e) => this._handleNodeClick(e, i)}
                                    disabled={this._currentlySelected(this.props.nodeSize, this.state.nodes[i])}
                                />
                            );
                        })}
                    </Row>
                    <Row>
                        <h4>Metastasis</h4>
                    </Row>
                    <Row>
                        {this.state.metastases.map((m, i) => {
                            return (
                                <RaisedButton
                                    className="btn metastasis"
                                    key={i}
                                    label={m}
                                    onClick={(e) => this._handleMetastasisClick(e, i)}
                                    disabled={this._currentlySelected(this.props.metastasis, this.state.metastases[i])}
                                />);
                        })}
                    </Row>
                    <Row>
                        <h4>Prognostic Stage</h4>
                    </Row>
                    <Row>
                        <div className="stage">{staging.breastCancerPrognosticStage(this.props.tumorSize, this.props.nodeSize, this.props.metastasis) || 'Undefined'}</div>
                    </Row>
                </div>
            </Paper>
        </div>
    );
  }
}

export default StagingForm;
