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
// Shortcuts
import ShortcutManager from '../shortcuts/ShortcutManager';
// Data model
import ContextManager from '../context/ContextManager';
import Patient from '../patient/Patient';
import SummaryMetadata from '../summary/SummaryMetadata';
// Lodash component
import Lang from 'lodash'

import './TestApp.css';

class TestApp extends Component {
    constructor(props) {
        super(props);

		this.getItemListForProcedures = this.getItemListForProcedures.bind(this);
		this.stageValueFunc = this.stageValueFunc.bind(this);

		this.shortcuts = [ "progression", "staging", "toxicity" ];
		this.inserters =	[	{trigger: "age", value: (cm) => { return cm.getPatient().getAge(); }},
					{trigger: "name", value: (cm) => { return cm.getPatient().getName(); }},
					{trigger: "gender", value: (cm) => { return cm.getPatient().getGender(); }},
					{trigger: "dateofbirth", value: (cm) => { return cm.getPatient().getDateOfBirth().format("D.MMM.YYYY"); }},
					{trigger: "patient", value: (cm) => { return cm.getPatient().getName() + " is a " + cm.getPatient().getAge() + " year old " + cm.getPatient().getGender(); }},
					{trigger: "condition", value: (cm) => { return cm.getPatient().getConditions(); }},
					{trigger: "stage", value: this.stageValueFunc }
				];

		let patient = new Patient();
		this.summaryMetadata = new SummaryMetadata();
		this.shortcutManager = new ShortcutManager(this.shortcuts);
		this.contextManager = new ContextManager(patient);		

	    this.state = {
            SummaryItemToInsert: '',
            withinStructuredField: null,
            selectedText: null,
            // Current shortcutting: 
            currentShortcut: null,
			currentConditionEntry: null,
			summaryMetadata: this.summaryMetadata.getMetadata(),
            patient: patient
        };
    }
	
	stageValueFunc(contextManager) {
		let cond = contextManager.getContextObjectOfType("http://standardhealthrecord.org/oncology/BreastCancer");
		if (!Lang.isNull(cond)) {
			let patient = contextManager.getPatient();
			let stagingObservation = patient.getMostRecentStagingForCondition(cond);
			this.setState({
				errors: []
			});
			if (Lang.isNull(stagingObservation)) {
				return "unknown";
			}
			return stagingObservation.value.coding.displayText;
		} else {
			let errors = [ "@stage invalid without a breast cancer condition. Use @condition to add the condition to your narrative." ];
			this.setState({
				errors: errors
			});
			return "";
		}
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
    newCurrentShortcut = (shortcutType, obj) => {
		let newShortcut = null;
        if (!Lang.isNull(shortcutType)) {
			newShortcut = this.shortcutManager.createShortcut(shortcutType, this.handleShortcutUpdate, obj);
        }
		const errors = newShortcut.validateInCurrentContext(this.contextManager);
		if (errors.length > 0) {
			errors.forEach((error) => {
				console.log(error);
			});
			newShortcut = null;
		}
        this.setState({currentShortcut: newShortcut, errors: errors});
		return newShortcut;
    }
	
	changeCurrentShortcut = (shortcut) => {
		this.setState({currentShortcut: shortcut});
	}

    handleShortcutUpdate = (s) =>{
        //console.log(`Updated shortcut`);
		let p = this.state.patient;
		s.updatePatient(p, this.contextManager);
        this.setState({currentShortcut: s, patient: p});
    }

    handleStructuredFieldEntered = (field) => {
        //console.log("structured field entered: " + field);
        this.setState({
            withinStructuredField: field
        })
    }

    handleStructuredFieldExited = (field) => {
        //console.log("structured field exited: " + field);
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
									newCurrentShortcut={this.newCurrentShortcut}
                                    // Properties
                                    currentShortcut={this.state.currentShortcut}
                                    itemToBeInserted={this.state.SummaryItemToInsert}
                                    patient={this.state.patient}
									contextManager={this.contextManager}
									shortcutList={this.shortcuts}
									inserters={this.inserters}
									errors={this.state.errors}
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