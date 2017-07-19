// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import NavBar from '../nav/NavBar';
import ClinicalNotes from '../notes/ClinicalNotes';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import FormTray from '../forms/FormTray';
import TimelinePanel from '../timeline/TimelinePanel';
// Shortcut Classes
import ProgressionShortcut from '../shortcuts/ProgressionShortcut';
import ToxicityShortcut from '../shortcuts/ToxicityShortcut';
// Lodash component
import Lang from 'lodash'

import staging from '../../lib/staging';
import moment from 'moment';

import './FullApp.css';

class FullApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /* staging */
            tumorSize: '',
            nodeSize: '',
            metastasis: '',
            SummaryItemToInsert: '',
            withinStructuredField: null,
            selectedText: null,
            // Current shortcutting: 
            progressionShortcut: new ProgressionShortcut(this.handleProgressionShortcutUpdate, {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Progressing Disease',
                    reason: [
                        "Pathology",
                        "Imaging",
                        "Symptoms"
                    ],
                    startDate: moment('2017-05-15')
                }),
            // Patient data
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
                    display: "02/10/2012 - 08/20/2012",
                    startDate: moment('2012-02-10'),
                    endDate: moment('2012-08-20')
                },
                {
                    name: "Cytoxin",
                    dosage: "6 cycles of 10mg/kg",
                    display: "02/10/2012 - 08/20/2012",
                    startDate: moment('2012-02-10'),
                    endDate: moment('2012-08-20')
                },
                {
                    name: "Tamoxifen",
                    dosage: "20mg once daily",
                    display: "11/01/2013 - 08/13/2016",
                    startDate: moment('2013-11-01'),
                    endDate: moment('2016-08-13')
                },
                {
                    name: "Letrozole",
                    dosage: "2.5mg once daily",
                    display: "01/10/2015 - 01/10/2016",
                    startDate: moment('2015-01-10'),
                    endDate: moment('2016-01-10')
                },
                {
                    name: "Coumadin",
                    dosage: "2mg once daily",
                    display: "09/05/2015 - 06/01/2017",
                    startDate: moment('2015-09-05'),
                    endDate: moment('2017-06-01')
                },
                {
                    name: "Aromasin",
                    dosage: "25mg once daily",
                    display: "06/05/2017 - 01/01/2018",
                    startDate: moment('2017-06-05'),
                    endDate: moment('2018-01-01')
                }
            ],
            procedures: [
                {
                    name: 'Mammogram',
                    startDate: moment('2012-01-13'),
                    display: "01/13/2012"
                },
                {
                    name: 'Radiation',
                    startDate: moment('2012-07-12'),
                    endDate: moment('2012-08-16'),
                    display: "07/12/2012 - 08/16/2012"
                },
                {
                    name: 'Surgery',
                    startDate: moment('2012-09-20'),
                    display: "09/20/2012: Lumpectomy / sentinel / lymph node biopsy"
                },
                {
                    name: 'Mammogram',
                    startDate: moment('2013-10-04'),
                    display: "10/04/2013"
                }
            ],
            keyDates: [
                {
                    name: 'Diagnosis',
                    startDate: moment('2012-01-13'),
                    display: "01/13/2012"
                },
                {
                    name: 'Recurrence',
                    startDate: moment('2013-10-12'),
                    display: "10/12/2013"
                }
            ],
            progression: [
                {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Responding Disease',
                    reason: [
                        "physical exam"
                    ],
                    startDate: moment('2012-06-13')

                },
                {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Disease Free',
                    reason: [
                        "imaging",
                        "physical exam"],
                    startDate: moment('2012-11-01'),
                },
                {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Progressing Disease',
                    reason: [
                        "imaging"
                    ],
                    startDate: moment('2014-04-17'),
                },
                {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Responding Disease',
                    reason: [
                        "pathology"
                    ],
                    startDate: moment('2014-07-03'),
                },
                {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Stable',
                    reason: [
                        "pathology",
                        "symptoms"
                    ],
                    startDate: moment('2015-06-14'),
                },
                {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Stable',
                    reason: [
                        "physical exam",
                        "symptoms"
                    ],
                    startDate: moment('2016-08-11'),
                },
                {
                    id: Math.floor(Math.random() * Date.now()),
                    status: 'Progressing Disease',
                    reason: [
                        "pathology",
                        "imaging",
                        "symptoms"
                    ],
                    startDate: moment('2017-05-15')
                }
            ]
        };
    }

    /* 
     * Change the current shortcut to be the new type of shortcut  
     */
    changeProgressionShortcut = (shortcutType) => {
        if (Lang.isNull(shortcutType)) {   
            this.setState({
                progressionShortcut: null
            });
        } else { 
            switch (shortcutType.toLowerCase()) { 
                case "progression": 
                    this.setState({
                        progressionShortcut: new ProgressionShortcut(this.handleProgressionShortcutUpdate)
                    });
                    break;

                case "toxicity": 
                    this.setState({
                        progressionShortcut: new ToxicityShortcut(this.handleProgressionShortcutUpdate)
                    });
                    break;

                default: 
                    console.error(`Error: Trying to change shortcut to ${shortcutType.toLowerCase()}, which is an invalid shortcut type`);
            }
        }
    }

    /* 
     * Change the current shortcut to be the new type of shortcut  
     */
    handleProgressionShortcutUpdate = (s) =>{
        console.log(`Updated: ${s}`);
        (s !== "") && this.setState({progressionShortcut: s});
    }

    /* 
     * Add a progression event to the current array of progression events
     */ 
    addProgressionEvent = (progressionEvent) => { 
        // Make sure this event doesn't already exist in the app
        if (! this.state.progression.some((event) => event.id === progressionEvent.id)) { 
            console.log(`in addProgressionEvent; this is a new event; adding to array`);
            const newProgression = this.state.progression;
            newProgression.push(progressionEvent);
            newProgression.sort(this._timeSorter);
            this.setState({
                progression: newProgression
            });
        } 
        // else do nothing
    }

    /* 
     * update a progression event if it's in the current array of progression events
     */ 
    updateProgressionEvent = (id, progressionEvent) => { 
        // If we can find an event that shares the current id, update it
        const oldEventIndex = this.state.progression.findIndex((event) => event.id === id)
        if (oldEventIndex !== -1) {
            console.log('in updateProgressionEvent; we found an equiv event; updating');
            let newProgression = [...this.state.progression];
            newProgression[oldEventIndex] = progressionEvent;
            this.setState({
                progression: newProgression
            });
        }
    }

    handleStructuredFieldEntered = (field) => {
        // console.log("structured field entered: " + field);
        this.setState({
            withinStructuredField: field
        })
    }

    handleStructuredFieldExited = (field) => {
        // console.log("structured field exited: " + field);
        this.setState({
            withinStructuredField: null
        })
    }
    
    handleSelectionChange = (selectedText) => {
        //console.log("FullApp. selectedText: " + selectedText);
        this.setState({
            selectedText: selectedText
        })
    }

    componentDidUpdate = (a, b) => {
        // Nothing right now
    }

    handleSummaryItemSelected = (itemText) =>{
        if (itemText) {
            this.setState({SummaryItemToInsert: itemText});
        }
    }

    handleStagingTUpdate = (t) => {
        console.log(`Updated: ${t}`);
        (t !== "") && this.setState({tumorSize: t});
    }

    handleStagingNUpdate = (n) => {
        console.log(`Updated: ${n}`);
        (n !== "") && this.setState({nodeSize: n});
    }

    handleStagingMUpdate = (m) => {
        console.log(`Updated: ${m}`);
        (m !== "") && this.setState({metastasis: m});
    }


    handleProgressionUpdate = (p) => { 
        console.log(`Updated progression:`);
        console.log(p);
        if (p !== "" && this.state.progression.some(existingProgression => existingProgression.id === p.id)) {
            console.log("this is an updated event");
            this.updateProgressionEvent(p.id, p);
        } else if (p !== "") { 
            console.log("this is a new progression event");
            this.addProgressionEvent(p)
        }
        // else do nothing
    }

    handleNewProgression = (p) => { 
        console.log(`This is a new progression`);
        if (p !== "") {
            this.addProgressionEvent(p)

        }
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

        // Grab most recent entry for progression
        const currentProgression = [this._getMostRecentProgression(this.state.progression)];

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="FullApp">
                    <NavBar
                        onStructuredFieldEntered={this.handleStructuredFieldEntered}
                        onStructuredFieldExited={this.handleStructuredFieldExited}
                    />
                    <Grid className="FullApp-content" fluid>
                        <Row center="xs">
                            <Col sm={4}>
                                <DataSummaryPanel
                                    // Handle updates
                                    onItemClicked={this.handleSummaryItemSelected}
                                    onProgressionShortcutUpdate={this.handleProgressionShortcutUpdate}
                                    changeProgressionShortcut={this.changeProgressionShortcut}
                                    // Properties
                                    progressionShortcut={this.state.progressionShortcut}
                                    patient={this.state.patient}
                                    conditions={this.state.conditions}
                                    diagnosis={diagnosis}
                                    keyDates={this.state.keyDates}
                                    procedures={this.state.procedures}
                                    pathology={this.state.pathology}
                                    genetics={this.state.genetics}
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
                                    onSelectionChange={this.handleSelectionChange}
                                    // Old Prog
                                    onProgressionUpdate={this.handleProgressionUpdate}
                                    onNewProgression={this.handleNewProgression}
                                    // 
                                    // New Prog
                                    changeProgressionShortcut={this.changeProgressionShortcut}
                                    // Properties
                                    progression={currentProgression[0]}
                                    progressionShortcut={this.state.progressionShortcut}
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
                                    HER2Status={this.state.HER2Status}
                                    ERStatus={this.state.ERStatus}
                                    PRStatus={this.state.PRStatus}
                                    itemToBeInserted={this.state.SummaryItemToInsert}
                                    patient={this.state.patient}
                                />
                            </Col>
                            <Col sm={3}>
                                <FormTray
                                    // Update functions
                                    onStagingTUpdate={this.handleStagingTUpdate}
                                    onStagingNUpdate={this.handleStagingNUpdate}
                                    onStagingMUpdate={this.handleStagingMUpdate}
                                    changeProgressionShortcut={this.changeProgressionShortcut}
                                    // Properties
                                    progressionShortcut={this.state.progressionShortcut}
                                    tumorSize={this.state.tumorSize}
                                    nodeSize={this.state.nodeSize}
                                    metastasis={this.state.metastasis}
                                    withinStructuredField={this.state.withinStructuredField}
                                    selectedText={this.state.selectedText}
                                    patient={this.state.patient}
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
    _getMostRecentProgression(progressionList) {
        const sortedProgressionList = progressionList.sort(this._timeSorter);
        const length = sortedProgressionList.length;
        return(sortedProgressionList[length - 1]);
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

export default FullApp;

function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
