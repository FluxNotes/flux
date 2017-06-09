// React imports
import React, { Component } from 'react';
// material-ui
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
// Flexbox
import {Row, Col } from 'react-flexbox-grid';
// Styling
import './StagingForm.css';

class StagingForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        tumorSizes: ['T0', 'T1', 'T2', 'T3', 'T4'],
        nodes: ['N0', 'N1', 'N2', 'N3'],
        // nodes: ['N0', 'N1MI', 'N1', 'N2', 'N3'],
        metastases: ['M0', 'M1'],
      };
  }

  _currentlySelected(item, i) {
    return (item === i ? true : false);
  }

  _handleTumorSizeClick = (e, i) => {
    e.preventDefault();
    console.log("StagingForm._handleTumorSizeClick T=" + i);
    var stage = this.props.calculateStage(i, this.props.nodeSize, this.props.metastasis);
    this.props.onStagingTUpdate(i);
    this.props.onStageUpdate(stage);
  }

  _handleNodeClick = (e, i) => {
    e.preventDefault();
    console.log("StagingForm._handleNodeClick N=" + i);
    var stage = this.props.calculateStage(this.props.tumorSize, i, this.props.metastasis);
    this.props.onStagingNUpdate(i);
    this.props.onStageUpdate(stage);
  }
  
  _handleMetastasisClick = (e, i) => {
    e.preventDefault();
    console.log("StagingForm._handleMetastasisClick M=" + i);
    var stage = this.props.calculateStage(this.props.tumorSize, this.props.nodeSize, i);
    this.props.onStagingMUpdate(i);
    this.props.onStageUpdate(stage);
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
                                <RaisedButton
                                    className="btn tumor-size"
                                    key={i}
                                    label={t}
                                    onClick={(e) => this._handleTumorSizeClick(e, i)}
                                    disabled={this._currentlySelected(this.props.tumorSize, i)}
                                />
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
                                    disabled={this._currentlySelected(this.props.nodeSize, i)}
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
                                    disabled={this._currentlySelected(this.props.metastasis, i)}
                                />);
                        })}
                    </Row>
                    <Row>
                        <h4>Prognostic Stage</h4>
                    </Row>
                    <Row>
                        <div className="stage">{this.props.stage}</div>
                    </Row>
                </div>
            </Paper>
        </div>
    );
  }
}

export default StagingForm;
