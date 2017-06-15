// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import AppTopWithDrawer from './AppTopWithDrawer';
import ClinicalNotes from './ClinicalNotes';
import DataSummary from './DataSummary';
import RightPanel from './RightPanel';
import TimelinePanel from './TimelinePanel';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tumorSize: '',
            nodeSize: '',
            metastasis: '',
            HER2Status: '+',
            ERStatus: '+',
            PRStatus: '+',
            SummaryItemToInsert: '',
            withinStructuredField: null,
        };
        this.changeHER2Status = this.changeHER2Status.bind(this);
        this.changeERStatus = this.changeERStatus.bind(this);
        this.changePRStatus = this.changePRStatus.bind(this);
        this.handleStagingTUpdate = this.handleStagingTUpdate.bind(this);
        this.handleStagingNUpdate = this.handleStagingNUpdate.bind(this);
        this.handleStagingMUpdate = this.handleStagingMUpdate.bind(this);
        this.handleSummaryItemSelected = this.handleSummaryItemSelected.bind(this);
        this.handleStructuredFieldEntered = this.handleStructuredFieldEntered.bind(this);
        this.handleStructuredFieldExited = this.handleStructuredFieldExited.bind(this);
    }

    handleStructuredFieldEntered(field) {
        // console.log("structured field entered: " + field);
        this.setState({
            withinStructuredField: field
        })
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

    componentDidUpdate(a, b) {
        // Nothing right now
    }

    handleSummaryItemSelected(itemString, subItemString) {
        (itemString !== "") && (subItemString !== "") && this.setState({
            SummaryItemToInsert: itemString + ", " + subItemString
        });
        (itemString !== "") && (subItemString === "") && this.setState({
            SummaryItemToInsert: itemString
        });
    }

  	handleStagingTUpdate(t) {
  		console.log("App.handleStagingTUpdate. t=" + t);
          (t !== "") && this.setState({tumorSize: t});
  	}

  	handleStagingNUpdate(n) {
  		console.log("App.handleStagingNUpdate. n=" + n);
          (n !== "") && this.setState({nodeSize: n});
  	}

  	handleStagingMUpdate(m, stage) {
  		console.log("App.handleStagingMUpdate. m=" + m);
          (m !== "") && this.setState({metastasis: m});
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
                        <Row center="xs">
                            <Col sm={3}>
                                <DataSummary
                                    className="dashboard-panel"
                                    // Update functions
                                    onHER2StatusChange={this.changeHER2Status}
                                    onERStatusChange={this.changeERStatus}
                                    onPRStatusChange={this.changePRStatus}
                                    onSummaryItemSelected={this.handleSummaryItemSelected}
                                    // Properties
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
                                    HER2Status={this.state.HER2Status}
                                    ERStatus={this.state.ERStatus}
                                    PRStatus={this.state.PRStatus}
                                />
                            </Col>
                            <Col sm={5}>
                                <ClinicalNotes
                                    className="dashboard-panel"
                                    // Update functions
                                    onStagingTUpdate={this.handleStagingTUpdate}
                                    onStagingNUpdate={this.handleStagingNUpdate}
                                    onStagingMUpdate={this.handleStagingMUpdate}
                                    onHER2StatusChange={this.changeHER2Status}
                                    onERStatusChange={this.changeERStatus}
                                    onPRStatusChange={this.changePRStatus}
                                    onStructuredFieldEntered={this.handleStructuredFieldEntered}
                                    onStructuredFieldExited={this.handleStructuredFieldExited}
                                    // Propertiess
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
                                    HER2Status={this.state.HER2Status}
                                    ERStatus={this.state.ERStatus}
                                    PRStatus={this.state.PRStatus}
                                    itemToBeInserted={this.state.SummaryItemToInsert}
                                />
                            </Col>
                            <Col sm={3}>
                                <RightPanel
                                    className="dashboard-panel"
                                    // Update functions
                                    onStagingTUpdate={this.handleStagingTUpdate}
                                    onStagingNUpdate={this.handleStagingNUpdate}
                                    onStagingMUpdate={this.handleStagingMUpdate}
                                    // Properties
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
                                    withinStructuredField={this.state.withinStructuredField}
                                />
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col sm={11}>
                                <TimelinePanel />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
