// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// material-ui
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
// Flexbox
import { Grid, Row } from 'react-flexbox-grid';
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

  componentDidMount() {
    console.log("in componentDidMount");
    console.log("t: " + this.props.t);
    console.log("m: " + this.props.m);
    console.log("n: " + this.props.n);
    console.log("stage: " + this.props.stage);
    // this._prognosticStage(this.props.t, this.props.n, this.props.m);
  }

  render() {
    console.log("in render. t: " + this.props.t);
    return (
      <Paper className="staging-form">
        <Grid fluid>
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
                  disabled={this._currentlySelected(this.props.t, i)}
                />);
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
                  disabled={this._currentlySelected(this.props.n, i)}
                />);
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
                  disabled={this._currentlySelected(this.props.m, i)}
                />);
            })}
          </Row>
          <Row>
            <h4>Prognostic Stage</h4>
          </Row>
          <Row>
            <div className="stage">{this.props.stage}</div>
          </Row>
        </Grid>
      </Paper>
    );
  }

  _currentlySelected(item, i) {

    //Todo: find the item in the lookup table, and use the returned index
    // to figure out which item is currently selected
    return (item === i ? true : false);
  }

  _handleTumorSizeClick = (e, i) => {
    e.preventDefault();
    console.log("i: " + i);
    this._prognosticStage(i, this.props.n, this.props.m,);
  }

  _handleNodeClick = (e, i) => {
    e.preventDefault();
    this._prognosticStage(this.props.t, i, this.props.m);
  }

  _handleMetastasisClick = (e, i) => {
    e.preventDefault();
    this._prognosticStage(this.props.t, this.props.n, i);
  }

  _prognosticStage= (t, n, m) =>  {
    // Metastisized cancer is always Stage IV
    if (m === 1) {
      var stage = 'IV';
      this.props.onStagingUpdateFromStagingForm(t,n,m, stage);
      return 'IV';
    }

    // Lookup the rest based on T and N:
    const lookup = [
      ['0', 'IIA', 'IIIA', 'IIIC'], // T0
      ['IA', 'IIA', 'IIIA', 'IIIC'], // T1
      ['IIA', 'IIB', 'IIIA', 'IIIC'], // T2
      ['IIB', 'IIIA', 'IIIA', 'IIIC'], // T3
      ['IIIB', 'IIIB', 'IIIB', 'IIIC'] // T4
    ];

    // With N1M1 Values
    // const lookup = [
    //   ['0', 'IB', 'IIA', 'IIIA', 'IIIC'], // T0
    //   ['IA', 'IB', 'IIA', 'IIIA', 'IIIC'], // T1
    //   ['IIA', 'IIB', 'IIB', 'IIIA', 'IIIC'], // T2
    //   ['IIB', 'IIIA', 'IIIA', 'IIIA', 'IIIC'], // T3
    //   ['IIIB', 'IIIB', 'IIIB', 'IIIB', 'IIIC'] // T4
    // ];

    var stage = lookup[t][n];
    this.props.onStagingUpdateFromStagingForm(t,n,m, stage);
    return stage;
  }
}

StagingForm.propTypes = {
  onStagingUpdateFromStagingForm: PropTypes.func.isRequired
}
export default StagingForm;
