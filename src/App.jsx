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

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasStagingData: false,
            prognosticState: 0,
            tumorSize: 0,
            nodeSize: 0,
            metastasis: 0,
            HER2Status: '+',
            ERStatus: '+',
            PRStatus: '+',
            SummaryKeyData: '',
            withinStructuredField: null,
        };
        this.changeHER2Status = this.changeHER2Status.bind(this);
        this.changeERStatus = this.changeERStatus.bind(this);
        this.changePRStatus = this.changePRStatus.bind(this);
        this.handleStagingTUpdate = this.handleStagingTUpdate.bind(this);
        this.handleStagingNUpdate = this.handleStagingNUpdate.bind(this);
        this.handleStagingMUpdate = this.handleStagingMUpdate.bind(this);
        this.handleStageUpdate = this.handleStageUpdate.bind(this);
        this.handleSummaryUpdate = this.handleSummaryUpdate.bind(this);
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

    handleSummaryUpdate(itemString, subItemString) {
        (itemString !== "") && (subItemString !== "") && this.setState({
            SummaryKeyData: itemString + ", " + subItemString
        });
        (itemString !== "") && (subItemString === "") && this.setState({
            SummaryKeyData: itemString
        });
    }

	handleStagingTUpdate(t, stage) {
		console.log("App.handleStagingTUpdate. t=" + t + " stage=" + stage);
        (t !== "") && this.setState({
            hasStagingData: true,
            tumorSize: t,
            prognosticState: stage,
        })
	}
	handleStagingNUpdate(n, stage) {
		console.log("App.handleStagingNUpdate. n=" + n + " stage=" + stage);
        (n !== "") && this.setState({
            hasStagingData: true,
            nodeSize: n,
            prognosticState: stage,
        })
	}
	handleStagingMUpdate(m, stage) {
		console.log("App.handleStagingMUpdate. m=" + m + " stage=" + stage);
        (m !== "") && this.setState({
            hasStagingData: true,
            metastasis: m,
            prognosticState: stage,
        })
	}

    calculateStage(t, n, m) { 
        let stage;
        // Metastisized cancer is always Stage IV
        if (m === 1) {
            stage = 'IV';
        } else { 
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

            stage = lookup[t][n];
        }
        return stage;
    }

    handleStageUpdate(stage) {
        console.log("App.handleStageUpdate. stage=" + stage);
        (stage !== "") && this.setState({
            hasStagingData: true,
            prognosticState: stage,
        })
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
                                    onSummaryItemSelected={this.handleSummaryUpdate}
                                    // Helper functions
                                    hasStagingData={this.state.hasStagingData}
                                    // Properties
                                    stage={this.state.prognosticState}
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
                                    onStageUpdate={this.handleStageUpdate}
                                    onHER2StatusChange={this.changeHER2Status}
                                    onERStatusChange={this.changeERStatus}
                                    onPRStatusChange={this.changePRStatus}
                                    onStructuredFieldEntered={this.handleStructuredFieldEntered}
                                    onStructuredFieldExited={this.handleStructuredFieldExited}
                                    // Helper functions
                                    calculateStage={this.calculateStage}
                                    // Properties
                                    stage={this.state.prognosticState}
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
                                    HER2Status={this.state.HER2Status}
                                    ERStatus={this.state.ERStatus}
                                    PRStatus={this.state.PRStatus}
                                    itemToBeEntered={this.state.SummaryKeyData}
                                />
                            </Col>
                            <Col sm={3}>
                                <RightPanel
                                    className="dashboard-panel" 
                                    // Update functions
                                    onStagingTUpdate={this.handleStagingTUpdate}
                                    onStagingNUpdate={this.handleStagingNUpdate}
                                    onStagingMUpdate={this.handleStagingMUpdate}
                                    onStageUpdate={this.handleStageUpdate}
                                    // Helper functions
                                    calculateStage={this.calculateStage}
                                    // Properties
                                    stage={this.state.prognosticState}
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
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
