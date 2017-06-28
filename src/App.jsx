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
                },
                previousNotes: [
                    {
                        date: "02.AUG.2015",
                        subject: "Clinical follow-up",
                        hospital: "Dana Farber Cancer Institute",
                        clinician: "Dr. Smith"
                    },
                    {
                        date: "12.JUL.2012",
                        subject: "Consult",
                        hospital: "Dana Farber Cancer Institute",
                        clinician: "Dr. Zheng"
                    },
                    {
                        date: "20.JUN.2012",
                        subject: "Clinical post-op",
                        hospital: "Brigham and Women's Hospital",
                        clinician: "Dr. Smith"
                    },
                    {
                        date: "16.MAY.2012",
                        subject: "Clinical follow-up",
                        hospital: "Dana Farber Cancer Institute",
                        clinician: "Dr. Strauss"
                    }
                ]
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
            keyDates: [
              {
                  name: "Diagnosis Date",
                  display: "01/13/2012"
              },
              {
                  name: "Radiation Date",
                  display: "07/12/2012 - 08/16/2012"
              },
              {
                  name: "Recurrence Date",
                  display: "10/28/2013"
              }
            ],
            surgery: [
                {
                    name: "Surgery Date",
                    display: "09/20/2012"
                },
                {
                    name: "Surgery",
                    display: "Lumpectomy / sentinel / lymph node biopsy"
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
            this.setState({SummaryItemToInsert: item.display});
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
            diagnosis[1].display = `${titlecase(t)} | ${titlecase(n)} | ${titlecase(m)} / Stage ${ps}`;
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
                                    keyDates={this.state.keyDates}
                                    surgery={this.state.surgery}
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
                                    // Properties
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

function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
