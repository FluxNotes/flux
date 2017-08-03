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
import Patient from '../patient/Patient';
import SummaryMetadata from '../summary/SummaryMetadata';
// Lodash component
import Lang from 'lodash'

import './TestApp.css';

class TestApp extends Component {
    constructor(props) {
        super(props);

		this.getItemListForProcedures = this.getItemListForProcedures.bind(this);
		this.summaryMetadata = new SummaryMetadata();
		this.shortcutManager = new ShortcutManager(this.shortcuts);

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
	
	shortcuts = [ "progression", "staging", "toxicity" ];
	
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
        this.setState({currentShortcut: newShortcut});
		return newShortcut;
    }
	
	changeCurrentShortcut = (shortcut) => {
		this.setState({currentShortcut: shortcut});
	}

    handleShortcutUpdate = (s) =>{
        console.log(`Updated shortcut`);
        this.setState({currentShortcut: s});
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