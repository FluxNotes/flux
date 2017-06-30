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
import moment from 'moment';

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
            ],
            // NOTE: moment.js time objects are used for all timeline items because
            // native Date() objects cause a strange issue where timeline items do not
            // disappear from the left side of the timeline as you scroll.
            medications: [
                {
                    name: "Adriamycin",
                    dosage: "6 cycles of 60mg/m2",
                    startDate: moment('2012-02-10'),
                    endDate: moment('2012-08-20')
                },
                {
                    name: "Cytoxin",
                    dosage: "6 cycles of 10mg/kg",
                    startDate: moment('2012-02-10'),
                    endDate: moment('2012-08-20')
                },
                {
                    name: "Tamoxifen",
                    dosage: "20mg once daily",
                    startDate: moment('2013-11-01'),
                    endDate: moment('2016-08-13')
                },
                {
                    name: "Letrozole",
                    dosage: "2.5mg once daily",
                    startDate: moment('2015-01-10'),
                    endDate: moment('2016-01-10')
                },
                {
                    name: "Coumadin",
                    dosage: "2mg once daily",
                    startDate: moment('2015-09-05'),
                    endDate: moment('2017-06-01')
                },
                {
                    name: "Aromaysin",
                    dosage: "25mg once daily",
                    startDate: moment('2017-06-05'),
                    endDate: moment('2018-01-01')
                }
            ],
            procedures: [
                {
                    name: 'Mammogram',
                    startDate: moment('2012-01-13')
                },
                {
                    name: 'Radiation',
                    startDate: moment('2012-07-12'),
                    endDate: moment('2012-08-16')
                },
                {
                    name: 'Surgery',
                    startDate: moment('2012-09-20'),
                    display: "Lumpectomy / sentinel / lymph node biopsy"
                },
                {
                    name: 'Mammogram',
                    startDate: moment('2013-10-04')
                }
            ],
            keyDates: [
                {
                    name: 'Diagnosis',
                    startDate: moment('2012-01-13')
                },
                {
                    name: 'Recurrence',
                    startDate: moment('2013-10-12')
                }
            ],
            progression: [
                {
                    name: 'Responding Disease',
                    startDate: moment('2012-06-13'),
                    reason: ["Pathology", "Imaging", "Symptoms", "Physical Exam", "Bio Marker"]
                },
                {
                    name: 'Disease Free',
                    startDate: moment('2012-11-01')
                },
                {
                    name: 'Progressing Disease',
                    startDate: moment('2014-04-17')
                },
                {
                    name: 'Responding Disease',
                    startDate: moment('2014-07-03')
                },
                {
                    name: 'Stable',
                    startDate: moment('2015-06-14')
                },
                {
                    name: 'Stable',
                    startDate: moment('2016-08-11')
                },
                {
                    name: 'Progressing Disease',
                    startDate: moment('2017-05-15')
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

    handleSummaryItemSelected(itemText) {
        if (itemText) {
            this.setState({SummaryItemToInsert: itemText});
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

        // Timeline events are a mix of key dates and progression
        const timelineEvents = this.state.keyDates.concat(this.state.progression).sort(this._timeSorter);

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
                                    procedures={this.state.procedures}
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
                                <TimelinePanel
                                    medications={this.state.medications}
                                    procedures={this.state.procedures}
                                    events={timelineEvents}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }

    _timeSorter(a, b) {
        if (a.startDate < b.startDate) {
            return -1;
        }
        if (a.startDate > b.startDate) {
            return 1;
        }
        return 0;
    }
}

export default App;

function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
