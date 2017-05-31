// React Imports:
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import AppTopWithDrawer from './AppTopWithDrawer';
import DemographicSummary from './DemographicSummary';
import ClinicalNotes from './ClinicalNotes';
import DataSummary from './DataSummary';
import RightPanel from './RightPanel';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HER2Status: '+',
      ERStatus:   '+',
      PRStatus:   '+',
      t: "",
      n: "",
      m: "",
      SummaryKeyData: '',
  	  withinStructuredField: null,
    };
    this.changeHER2Status = this.changeHER2Status.bind(this);
    this.changeERStatus = this.changeERStatus.bind(this);
    this.changePRStatus = this.changePRStatus.bind(this);
    this.changeTValue = this.changeTValue.bind(this);
    this.changeNValue = this.changeNValue.bind(this);
    this.changeMValue = this.changeMValue.bind(this);
    this.handleSummaryUpdate = this.handleSummaryUpdate.bind(this);
    this.handleStructuredFieldEntered = this.handleStructuredFieldEntered.bind(this);
    this.handleStructuredFieldExited = this.handleStructuredFieldExited.bind(this);
  }
  
  handleStructuredFieldEntered(field) {
    // console.log("structured field entered: " + field);
    this.setState({
      withinStructuredField: field
    });
  }
  
  handleStructuredFieldExited(field) {
    // console.log("structured field exited: " + field);
    this.setState({
      withinStructuredField: null
    })
  }
  
  changeHER2Status(newStatus) {
    (newStatus !== "") && this.setState({
      HER2Status: newStatus
    })
  }

  changeERStatus(newStatus) {
    (newStatus !== "") && this.setState({
      ERStatus: newStatus
    })
  }

  changePRStatus(newStatus) {
    (newStatus !== "") && this.setState({
      PRStatus: newStatus
    })
  }

  changeTValue(newVal) { 
    console.log(`t value updated: ${newVal}`);
    (newVal !== "") && this.setState({
      t: newVal
    })
  }

  changeNValue(newVal) { 
    console.log(`n value updated: ${newVal}`);
    (newVal !== "") && this.setState({
      n: newVal
    })
  }

  changeMValue(newVal) { 
    console.log(`m value updated: ${newVal}`);
    (newVal !== "") && this.setState({
      m: newVal
    })
  }

  componentDidUpdate(a, b) {
    // Nothing right now 
  }
  handleSummaryUpdate(itemString, subItemString) {

    (itemString !== "") && (subItemString !== "") && this.setState({
      SummaryKeyData: itemString + ", " + subItemString
    });

    (itemString !== "") && (subItemString === "") && this.setState({
      SummaryKeyData: itemString
    });

  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <AppTopWithDrawer 
            onStructuredFieldEntered={this.handleStructuredFieldEntered} 
            onStructuredFieldExited={this.handleStructuredFieldExited}
          />
          <Grid className="App-content" fluid>
            <Row>
              <Col xs={12}>
                <DemographicSummary />
              </Col>
            </Row>
            <Row center="xs">
              <Col sm={3}>
                <DataSummary
                  onHER2StatusChange={this.changeHER2Status}
                  onERStatusChange={this.changeERStatus}
                  onPRStatusChange={this.changePRStatus}

                  // t={this.state.t}
                  // n={this.state.n}
                  // m={this.state.m}
                  HER2Status={this.state.HER2Status}
                  ERStatus={this.state.ERStatus}
                  PRStatus={this.state.PRStatus}
                  onSummaryItemSelected={this.handleSummaryUpdate}
                />
              </Col>
              <Col sm={6}>
                <ClinicalNotes
                  onTValueChange={this.changeTValue}
                  onNValueChange={this.changeNValue}
                  onMValueChange={this.changeMValue}
                  onHER2StatusChange={this.changeHER2Status}
                  onERStatusChange={this.changeERStatus}
                  onPRStatusChange={this.changePRStatus}
                  onStructuredFieldEntered={this.handleStructuredFieldEntered} 
                  onStructuredFieldExited={this.handleStructuredFieldExited}

                  t={this.state.t}
                  n={this.state.n}
                  m={this.state.m}
                  HER2Status={this.state.HER2Status}
                  ERStatus={this.state.ERStatus}
                  PRStatus={this.state.PRStatus}
                  itemToBeEntered = {this.state.SummaryKeyData}
                />
              </Col>
              <Col sm={3}>
        				<RightPanel 
        					withinStructuredField={this.state.withinStructuredField}
                />
              </Col>
            </Row>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
