// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
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
            prognosticState: 0,
            tumorSize: 1,
            nodeSize: 0,
            metastasis: 0,
            HER2Status: '+',
            ERStatus: '+',
            PRStatus: '+',
            SummaryKeyData: '',
            WithinStructuredField: null,
        };
        this.changeHER2Status = this.changeHER2Status.bind(this);
        this.changeERStatus = this.changeERStatus.bind(this);
        this.changePRStatus = this.changePRStatus.bind(this);
        this.handleSummaryUpdate = this.handleSummaryUpdate.bind(this);
        this.handleStructuredFieldEntered = this.handleStructuredFieldEntered.bind(this);
        this.handleStructuredFieldExited = this.handleStructuredFieldExited.bind(this);
		this.handleStagingTUpdate = this.handleStagingTUpdate.bind(this);
		this.handleStagingNUpdate = this.handleStagingNUpdate.bind(this);		
		this.handleStagingMUpdate = this.handleStagingMUpdate.bind(this);
        // this.handleStagingUpdateFromRightPanelInput = this.handleStagingUpdateFromRightPanelInput.bind(this);
    }

    handleStructuredFieldEntered(field) {
        console.log("structured field entered: " + field);
        this.setState({
            WithinStructuredField: field
        })
    }

    handleStructuredFieldExited(field) {
        console.log("structured field exited: " + field);
        this.setState({
            WithinStructuredField: null
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

	handleStagingTUpdate(t, stage) {
		console.log("App.handleStagingTUpdate. t=" + t + " stage=" + stage);
        this.setState({
            tumorSize: t,
            prognosticState: stage,
        })
	}
	handleStagingNUpdate(n, stage) {
		console.log("App.handleStagingNUpdate. n=" + n + " stage=" + stage);
        this.setState({
            nodeSize: n,
            prognosticState: stage,
        })
	}
	handleStagingMUpdate(m, stage) {
		console.log("App.handleStagingMUpdate. m=" + m + " stage=" + stage);
	    this.setState({
            metastasis: m,
            prognosticState: stage,
        })
	}
	
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="App">
                    <AppTopWithDrawer onStructuredFieldEntered={this.handleStructuredFieldEntered}
                                      onStructuredFieldExited={this.handleStructuredFieldExited}/>
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
                                    HER2Status={this.state.HER2Status}
                                    ERStatus={this.state.ERStatus}
                                    PRStatus={this.state.PRStatus}
                                    onSummaryItemSelected={this.handleSummaryUpdate}
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
                                    itemToBeEntered={this.state.SummaryKeyData}
                                />
                            </Col>
                            <Col sm={3}>
                                <RightPanel
                                    stage={this.state.prognosticState}
                                    t={this.state.tumorSize}
                                    n={this.state.nodeSize}
                                    m={this.state.metastasis}
                                    withinStructuredField={this.state.WithinStructuredField}
									onStagingTUpdate={this.handleStagingTUpdate}
									onStagingNUpdate={this.handleStagingNUpdate}
									onStagingMUpdate={this.handleStagingMUpdate}
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
