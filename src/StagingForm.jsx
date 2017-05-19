// React imports
import React, { Component } from 'react';
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
        nodes: ['N0', 'N1mi', 'N1', 'N2', 'N3'],
        metastases: ['M0', 'M1'],
        t: this.props.t,
        n: this.props.n,
        m: this.props.m
      };
  }

  render() {
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
                  disabled={this._currentlySelected(this.state.t, i)}
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
                  disabled={this._currentlySelected(this.state.n, i)}
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
                  disabled={this._currentlySelected(this.state.m, i)}
                />);
            })}
          </Row>
          <Row>
            <h4>Prognostic Stage</h4>
          </Row>
          <Row>
            <div className="stage">{this._prognosticStage()}</div>
          </Row>
        </Grid>
      </Paper>
    );
  }

  _currentlySelected(item, i) {
    return (item === i ? true : false);
  }

  _handleTumorSizeClick(e, i) {
    e.preventDefault();
    this.setState({t: i});
  }

  _handleNodeClick(e, i) {
    e.preventDefault();
    this.setState({n: i});
  }

  _handleMetastasisClick(e, i) {
    e.preventDefault();
    this.setState({m: i});
  }

  _prognosticStage() {
    // Metastisized cancer is always Stage IV
    if (this.state.m === 1) {
      return 'IV';
    }

    // Lookup the rest based on T and N:
    const lookup = [
      ['0', 'IB', 'IIA', 'IIIA', 'IIIC'], // T0
      ['IA', 'IB', 'IIA', 'IIIA', 'IIIC'], // T1
      ['IIA', 'IIB', 'IIB', 'IIIA', 'IIIC'], // T2
      ['IIB', 'IIIA', 'IIIA', 'IIIA', 'IIIC'], // T3
      ['IIIB', 'IIIB', 'IIIB', 'IIIB', 'IIIC'] // T4
    ];

    return lookup[this.state.t][this.state.n];
  }
}
export default StagingForm;
