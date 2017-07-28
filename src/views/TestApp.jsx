// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import NavBar from '../nav/NavBar';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import TestDataSummaryPanel from '../summary/TestDataSummaryPanel';
import FormTray from '../forms/FormTray';
import TestTimelinePanel from '../timeline/TestTimelinePanel';
// Shortcut Classes
import ProgressionShortcut from '../shortcuts/ProgressionShortcut';
import ToxicityShortcut from '../shortcuts/ToxicityShortcut';
import StagingShortcut from '../shortcuts/StagingShortcut';
// Data model
import Patient from '../patient/Patient';
// Lodash component
import Lang from 'lodash'

//import staging from '../../lib/staging';
import moment from 'moment';

import './TestApp.css';

class TestApp extends Component {
    constructor(props) {
        super(props);
		
		this.getItemListForProcedures = this.getItemListForProcedures.bind(this);
		
	    this.state = {
            SummaryItemToInsert: '',
            withinStructuredField: null,
            selectedText: null,
            // Current shortcutting: 
            currentShortcut: null,
			currentConditionEntry: null,
			summaryMetadata: 	{ "http://ncimeta.nci.nih.gov/C1334276" :	{ sections: [	{ 	name: "Current Diagnosis",
																							items:	[	{ name: "Name", value: (patient, currentConditionEntry) => { return currentConditionEntry.specificType.coding.displayText; }},
																										{ name: "Stage", value: (patient, currentConditionEntry) => { if (Lang.isUndefined(currentConditionEntry.staging)) { return null; } else { return "T" + currentConditionEntry.staging.tumorSize + "N" + currentConditionEntry.staging.nodeMetastasis + "M" + currentConditionEntry.staging.metastasis } }}
																								    ]},
																						{	name: "Progression",
																							items:	[	{ name: "Current Progression", value: (patient, currentConditionEntry) => { let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months')); if (Lang.isNull(p)) return null; else return p.value.coding.displayText; }},
																										{ name: "Progression Date", value: (patient, currentConditionEntry) => { let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months')); if (Lang.isNull(p)) return null; else return p.clinicallyRelevantTime; }},
																										{ name: "Progression Basis", value: (patient, currentConditionEntry) => { let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months')); if (Lang.isNull(p)) return null; else return p.evidence.map(function(ev){ return ev.coding.displayText; }).join(); }}
																									]},
																						{ 	name: "Key Dates",
																							items:	[	{ name: "Diagnosis", value: (patient, currentConditionEntry) => { return currentConditionEntry.whenClinicallyRecognized }},
																										{ name: "Recurence", value: (patient, currentConditionEntry) => { return null; }}
																									]},
																						{ 	name: "Procedures", itemsFunction: this.getItemListForProcedures },
																						{ 	name: "Pathology Results (Initial Diagnosis)",
																							items:	[	{ name: "Color", value: null },
																										{ name: "Weight", value: null },
																										{ name: "Size", value: (patient, currentConditionEntry) => { let list = patient.getObservationsForCondition(currentConditionEntry, "http://standardhealthrecord.org/oncology/TumorSize"); return list[0].value.value + " " + list[0].value.units.value; }},
																										{ name: "Tumor Margins", value: null },
																										{ name: "Histological Grade", value: (patient, currentConditionEntry) => { return currentConditionEntry.breastCancerHistologicGrade.coding.displayText; }},
																										{ name: "Receptor Status ER", value: (patient, currentConditionEntry) => { let er = patient.getReceptorStatus(currentConditionEntry, "23307004"); if (Lang.isNull(er)) { return null; } else { return er.value.coding.displayText; } }},
																										{ name: "Receptor Status PR", value: (patient, currentConditionEntry) => { let pr = patient.getReceptorStatus(currentConditionEntry, "C0034833"); if (Lang.isNull(pr)) { return null; } else { return pr.value.coding.displayText; } }},
																										{ name: "Receptor Status HER2", value: (patient, currentConditionEntry) => { let her2 = patient.getReceptorStatus(currentConditionEntry, "C0069515"); if (Lang.isNull(her2)) { return null; } else { return her2.value.coding.displayText; } }}
																									]},
																						{ 	name: "Genetics",
																							items:	[	{ name: "Oncotype DX Recurrence Score", value: null},
																										{ name: "Genetic Testing", value: null }
																									]}
																					]},
								  "default":								{ sections: [	{	name: "Current Diagnosis",
																							items:	[	{ name: "Name", value: (patient, currentConditionEntry) => { return currentConditionEntry.specificType.coding.displayText; }}
																									]},
																							{ 	name: "Key Dates",
																							items:	[	{ name: "Diagnosis", value: (patient, currentConditionEntry) => { return currentConditionEntry.whenClinicallyRecognized }}
																									]},
																							{ 	name: "Procedures", itemsFunction: this.getItemListForProcedures },
																						]}
								},
            patient: new Patient()
        };
    }

	getItemListForProcedures = (patient, currentConditionEntry) => {
		let procedures = patient.getProceduresForConditionChronologicalOrder(currentConditionEntry);
		return procedures.map((p, i) => {
			if (Lang.isObject(p.occurrenceTime)) {
				return {name: p.specificType.coding.displayText, value: p.occurrenceTime.timePeriodStart + " to " + p.occurrenceTime.timePeriodEnd};
			} else {
				return {name: p.specificType.coding.displayText, value: p.occurrenceTime };
			}
		});
	}

    /* 
     * Change the current shortcut to be the new type of shortcut  
     */
    changeCurrentShortcut = (shortcutType) => {
        if (Lang.isNull(shortcutType)) {   
            this.setState({
                currentShortcut: null
            });
        } else { 
            switch (shortcutType.toLowerCase()) { 
            case "progression":
                this.setState({
                    currentShortcut: new ProgressionShortcut(this.handleProgressionShortcutUpdate)
                });
                break;
            case "toxicity":
                this.setState({
                    currentShortcut: new ToxicityShortcut(this.handleProgressionShortcutUpdate)
                });
                break;
            case "staging":
                this.setState({
                    currentShortcut: new StagingShortcut(this.handleStagingShortcutUpdate)
                });
                break;
            default:
                console.error(`Error: Trying to change shortcut to ${shortcutType.toLowerCase()}, which is an invalid shortcut type`);
            }
        }
    }

    /* 
     * Update the current Progression Shortcut
     */
    handleProgressionShortcutUpdate = (s) =>{
        console.log(`Updated Progression: ${s}`);
        (s !== "") && this.setState({progressionShortcut: s});
    }
    /* 
     * Update the current Staging Shortcut  
     */
    handleStagingShortcutUpdate = (s) =>{
        console.log(`Updated Staging: ${s}`);
        (s !== "") && this.setState({stagingShortcut: s});
    }

    handleStructuredFieldEntered = (field) => {
        console.log("structured field entered: " + field);
        this.setState({
            withinStructuredField: field
        })
    }

    handleStructuredFieldExited = (field) => {
        console.log("structured field exited: " + field);
        this.setState({
            withinStructuredField: null
        })
    }
    
    handleSelectionChange = (selectedText) => {
        //console.log("TestApp. selectedText: " + selectedText);
        this.setState({
            selectedText: selectedText
        })
    }

    handleSummaryItemSelected = (itemText) =>{
        if (itemText) {
            this.setState({SummaryItemToInsert: itemText});
        }
    }

    render() {
        // Timeline events are a mix of key dates and progression
        //const timelineEvents = this.state.keyDates.concat(this.state.progression).sort(this._timeSorter);
		//const timelineEvents = []; // TODO
		
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <div className="TestApp">
                    <NavBar />
                    <Grid className="TestApp-content" fluid>
                        <Row center="xs">
                            <Col sm={4}>
                                <TestDataSummaryPanel
                                    // Handle updates
                                    onItemClicked={this.handleSummaryItemSelected}
                                    // Properties
                                    allowItemClick={this.state.currentShortcut == null}
									summaryMetadata={this.state.summaryMetadata}
                                    patient={this.state.patient}
                                />
                            </Col>
                            <Col sm={5}>
                                <FluxNotesEditor
                                    // Update functions
                                    onSelectionChange={this.handleSelectionChange}
                                    changeCurrentShortcut={this.changeCurrentShortcut}
                                    // Properties
                                    currentShortcut={this.state.currentShortcut}
                                    itemToBeInserted={this.state.SummaryItemToInsert}
                                    patient={this.state.patient}
                                />
                            </Col>
                            <Col sm={3}>
                                <FormTray
                                    // Update functions
                                    changeShortcut={this.changeCurrentShortcut}
                                    // Properties
                                    currentShortcut={this.state.currentShortcut}
                                    patient={this.state.patient}
                                    selectedText={this.state.selectedText}
                                    withinStructuredField={this.state.withinStructuredField}
                                />
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col sm={12}>
                                <TestTimelinePanel
                                    patient={this.state.patient}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default TestApp;

/*function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}*/