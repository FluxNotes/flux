// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import NavBar from './nav/NavBar';
import ClinicalNotes from './notes/ClinicalNotes';
import DataSummaryPanel from './summary/DataSummaryPanel';
import FormTray from './forms/FormTray';
import TimelinePanel from './timeline/TimelinePanel';

import staging from '../lib/staging';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /* staging */
            tumorSize: '',
            nodeSize: '',
            metastasis: '',

            SummaryItemToInsert: '',
            withinStructuredField: null,
            patient: {
                photo: "./DebraHernandez672.jpg",
                name: "Debra Hernandez672",
                mrn: "026-DH-678944",
                dateOfBirth: "05 APR 1966",
                administrativeSex: "Female",
                address: {
                    city: "Boston",
                    state: "MA"
                }
            },
            conditions: [
                {
                    name: "Lobular carcinoma of the breast",
                    codes: [
                        {
                            system: "SNOMED-CT",
                            code: "278054005",
                            display: "Infiltrating lobular carcinoma of breast"
                        }
                    ]
                },
                {
                    name: "Hypertension",
                    codes: [
                        {
                            system: "SNOMED-CT",
                            code: "59621000",
                            display: "Essential hypertension"
                        }
                    ]
                }
            ],
            diagnosis: [
                {
                    name: "Name",
                    display: "Lobular carcinoma of the breast"
                },
                {
                    name: "Stage",
                    display: ""
                }
            ],
            pathology: [
                {
                    name: "Color",
                    display: ""
                },
                {
                    name: "Weight",
                    display: ""
                },
                {
                    name: "Size",
                    display: ""
                },
                {
                    name: "Tumor Margins",
                    display: ""
                },
                {
                    name: "Histological Grade",
                    display: "HG2"
                },
                {
                    name: "Receptor Status: ER",
                    display: "+"
                },
                {
                    name: "Receptor Status: PR",
                    display: "+"
                },
                {
                    name: "Receptor Status: HER2",
                    display: ""
                }
            ],
            genetics: [
                {
                    name: "Oncotype DX Recurrence Score",
                    display: ""
                },
                {
                    name: "Genetic testing",
                    display: ""
                }
            ]
        };

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

    componentDidUpdate(a, b) {
        // Nothing right now
    }

    handleSummaryItemSelected(item) {
        if (item.display) {
            this.setState({SummaryItemToInsert: item.name + ': ' + item.display});
        }
    }

  	handleStagingTUpdate(t) {
        console.log(`Updated: ${t}`);
        (t !== "") && this.setState({tumorSize: t});
  	}

  	handleStagingNUpdate(n) {
        console.log(`Updated: ${n}`);
        (n !== "") && this.setState({nodeSize: n});
  	}

  	handleStagingMUpdate(m) {
        console.log(`Updated: ${m}`);
        (m !== "") && this.setState({metastasis: m});
  	}

    render() {
        let diagnosis = this.state.diagnosis;

        /* update staging if captured */
        const t = this.state.tumorSize;
        const n = this.state.nodeSize;
        const m = this.state.metastasis;
        const ps = staging.breastCancerPrognosticStage(t, n, m);

        if (ps) {
            diagnosis[1].display = `${t} | ${n} | ${m}  Stage ${ps}`;
        } else {
            diagnosis[1].display = "";
        }

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="App">
                    <NavBar
                        onStructuredFieldEntered={this.handleStructuredFieldEntered}
                        onStructuredFieldExited={this.handleStructuredFieldExited}
                    />
                    <Grid className="App-content" fluid>
                        <Row center="xs">
                            <Col sm={4}>
                                <DataSummaryPanel
                                    patient={this.state.patient}
                                    conditions={this.state.conditions}
                                    diagnosis={diagnosis}
                                    pathology={this.state.pathology}
                                    genetics={this.state.genetics}
                                    onItemClicked={this.handleSummaryItemSelected}
                                />
                            </Col>
                            <Col sm={5}>
                                <ClinicalNotes
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
                                <FormTray
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
                            <Col sm={12}>
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
