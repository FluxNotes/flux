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
import SummaryMetadata from '../summary/SummaryMetadata';
// Lodash component
import Lang from 'lodash'

//import staging from '../../lib/staging';
import moment from 'moment';

import './TestApp.css';

class TestApp extends Component {
    constructor(props) {
        super(props);
		
		this.getItemListForProcedures = this.getItemListForProcedures.bind(this);
		this.summaryMetadata = new SummaryMetadata();
		
	    this.state = {
            SummaryItemToInsert: '',
            withinStructuredField: null,
            selectedText: null,
            // Current shortcutting: 
            currentShortcut: null,
			currentConditionEntry: null,
			summaryMetadata: this.summaryMetadata.getMetadata(),
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