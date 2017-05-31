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
  	  StructuredField: null,
    };
    this.changeKeyStatus = this.changeKeyStatus.bind(this);
    this.handleSummaryUpdate = this.handleSummaryUpdate.bind(this);
  }

  changeKeyStatus(key, newStatus) { 
    if (newStatus !== "")  { 
      let newVal = {};
      newVal[key] = newStatus;
      this.setState(newVal);
    }
  }

  componentDidUpdate(a, b) {
    console.log('did update')
    console.log(a)
    console.log(b)
    console.log(this)
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
          <AppTopWithDrawer onStructuredFieldEntered={this.handleStructuredFieldEntered} onStructuredFieldExited={this.handleStructuredFieldExited} />
          <Grid className="App-content" fluid>
            <Row>
              <Col xs={12}>
                <DemographicSummary />
              </Col>
            </Row>
            <Row center="xs">
              <Col sm={3}>
                <DataSummary
                  onKeyStatusChange={this.changeKeyStatus}
                  HER2Status={this.state.HER2Status}
                  ERStatus={this.state.ERStatus}
                  PRStatus={this.state.PRStatus}
                  onSummaryItemSelected={this.handleSummaryUpdate}
                />
              </Col>
              <Col sm={6}>
                <ClinicalNotes
                  onKeyStatusChange={this.changeKeyStatus}
                  HER2Status={this.state.HER2Status}
                  ERStatus={this.state.ERStatus}
                  PRStatus={this.state.PRStatus}
                  itemToBeEntered = {this.state.SummaryKeyData}
                />
              </Col>
              <Col sm={3}>
        				<RightPanel 
        					StructuredField={this.state.StructuredField} 
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
