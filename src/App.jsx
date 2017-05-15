import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppTopWithDrawer from './AppTopWithDrawer';
import ClinicalNotes from './ClinicalNotes';
import DataSummary from './DataSummary';
import GridTest from './Gridbox';


// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      HER2Status: '+',
      ERStatus:   '',
      PRStatus:   ''
    };
    this.changeHER2Status = this.changeHER2Status.bind(this);
    this.changeERStatus = this.changeERStatus.bind(this);
    this.changePRStatus = this.changePRStatus.bind(this);

  }

  changeHER2Status(newStatus) { 
    (newStatus !== "") && this.setState({
      HER2Status: newStatus
    })
  }

  changeERStatus(newStatus) { 
    console.log('newStatus ' + newStatus);
    (newStatus !== "") && this.setState({
      ERStatus: newStatus
    })
  }

  componentDidUpdate(a, b) { 
    console.log('did update')
    console.log(a)
    console.log(b)
    console.log(this)
  }

  changePRStatus(newStatus) { 
    (newStatus !== "") && this.setState({
      PRStatus: newStatus
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <AppTopWithDrawer />
          <Grid fluid className="App-content">
            <Row>
              <Col sm={3}>
                <DataSummary 
                  onHER2StatusChange={this.changeHER2Status}
                  onERStatusChange={this.changeERStatus}
                  onPRStatusChange={this.changePRStatus}
                  HER2Status={this.state.HER2Status}
                  ERStatus={this.state.ERStatus}
                  PRStatus={this.state.PRStatus}
                />
              </Col>
              <Col sm={6}>
                <ClinicalNotes 
                  onHER2StatusChange={this.changeHER2Status}
                  onERStatusChange={this.changeERStatus}
                  onPRStatusChange={this.changePRStatus}
                  HER2Status={this.state.HER2Status}
                  ERStatus={this.state.ERStatus}
                  PRStatus={this.state.PRStatus}
                />
              </Col>
              <Col sm={3}>
                <p> Placeholder </p>
              </Col>
            </Row>
          </Grid> 
        </div>  
      </MuiThemeProvider>
    );
  }
}

export default App;
