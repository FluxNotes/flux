// React Imports:
import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
// Material UI components:
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// Application components:
import NavBar from '../nav/NavBar';
import FluxNotesEditor from '../test/notes/FluxNotesEditor';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import ContextTray from '../test/context/ContextTray';
import TimelinePanel from '../timeline/TimelinePanel';
// Shortcuts
import ShortcutManager from '../test/shortcuts/ShortcutManager';
// Data model
import ContextManager from '../test/context/ContextManager';
import Patient from '../patient/Patient';
import SummaryMetadata from '../summary/SummaryMetadata';
// Lodash component
import Lang from 'lodash'

import './FullApp.css';

class TestFullApp extends Component {
    constructor(props) {
        super(props);

		this.shortcuts = [ 	"#progression", "#staging", "#toxicity", "@name", "@condition", "@age", "@dateofbirth", "@gender", "@patient", "@stage" ];

		let patient = new Patient();
		this.summaryMetadata = new SummaryMetadata();
		this.shortcutManager = new ShortcutManager(this.shortcuts);
		this.contextManager = new ContextManager(patient);		

	    this.state = {
            SummaryItemToInsert: '',
            selectedText: null,
			summaryMetadata: this.summaryMetadata.getMetadata(),
            patient: patient,
			contextManager: this.contextManager			
        };
    }
		
    /* 
     * Change the current shortcut to be the new type of shortcut  
     */
    newCurrentShortcut = (shortcutType, obj) => {
		let newShortcut = this.shortcutManager.createShortcut(shortcutType, this.handleShortcutUpdate, obj);
		const errors = newShortcut.validateInCurrentContext(this.contextManager);
		if (errors.length > 0) {
			errors.forEach((error) => {
				console.log(error);
			});
			newShortcut = null;
		} else {
			newShortcut.initialize(this.contextManager);
			if (newShortcut.isContext()) {
				console.log("created new context: " + newShortcut.getShortcutType());
			}
		}
        this.setState({errors: errors});
		return newShortcut;
    }
	
    handleShortcutUpdate = (s) =>{
        //console.log(`Updated shortcut`);
		let p = this.state.patient;
		s.updatePatient(p, this.contextManager);
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
                <div className="FullApp">
                    <NavBar title="Flux Notes"/>
                    <Grid className="FullApp-content" fluid>
                        <Row center="xs">
                            <Col sm={4}>
                                <DataSummaryPanel
                                    // Handle updates
                                    onItemClicked={this.handleSummaryItemSelected}
                                    // Properties
                                    allowItemClick={true}
									summaryMetadata={this.state.summaryMetadata}
                                    patient={this.state.patient}
                                />
                            </Col>
                            <Col sm={5}>
                                <FluxNotesEditor
                                    // Update functions
                                    onSelectionChange={this.handleSelectionChange}
									newCurrentShortcut={this.newCurrentShortcut}
                                    // Properties
                                    itemToBeInserted={this.state.SummaryItemToInsert}
                                    patient={this.state.patient}
									contextManager={this.contextManager}
									shortcutManager={this.shortcutManager}
									errors={this.state.errors}
                                />
                            </Col>
                            <Col sm={3}>
                                <ContextTray
                                    // Update functions
                                    // Properties
                                    patient={this.state.patient}
									contextManager={this.state.contextManager}
                                />
                            </Col>
                        </Row>
                        <Row center="xs">
                            <Col sm={12}>
                                <TimelinePanel
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

export default TestFullApp;