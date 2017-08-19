import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import NavBar from '../nav/NavBar';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import ContextTray from '../context/ContextTray';
import TimelinePanel from '../timeline/TimelinePanel';
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
import Patient from '../patient/Patient';
import SummaryMetadata from '../summary/SummaryMetadata';
import './FullApp.css';

class FullApp extends Component {
    constructor(props) {
        super(props);

		this.shortcuts = [ 	"#progression", "#staging", "#toxicity", "@name", "@condition", "@age", "@dateofbirth", "@gender", "@patient", "@stage" ];

        this.updateErrors = this.updateErrors.bind(this);
		this.onContextUpdate = this.onContextUpdate.bind(this);
		
		let patient = new Patient();
		this.summaryMetadata = new SummaryMetadata();
		this.shortcutManager = new ShortcutManager(this.shortcuts);
		this.contextManager = new ContextManager(patient, this.onContextUpdate);		

	    this.state = {
            SummaryItemToInsert: '',
            selectedText: null,
			summaryMetadata: this.summaryMetadata.getMetadata(),
            patient: patient,
			contextManager: this.contextManager			
        };
    }
	
	onContextUpdate = () => {
        this.setState({contextManager: this.contextManager});
	}
    
    updateErrors(errors) {
        this.setState({errors: errors});
    }

    itemInserted = () => {
        this.setState({SummaryItemToInsert: ''});
    }
    
    newCurrentShortcut = (shortcutType, obj) => {
		let newShortcut = this.shortcutManager.createShortcut(shortcutType, this.handleShortcutUpdate, obj);
		const errors = newShortcut.validateInCurrentContext(this.contextManager);
		if (errors.length > 0) {
			errors.forEach((error) => {
				console.error(error);
			});
			newShortcut = null;
		} else {
			newShortcut.initialize(this.contextManager, shortcutType);
		}
        this.updateErrors(errors);
		return newShortcut;
    }
	
    handleShortcutUpdate = (s) =>{
		let p = this.state.patient;
		s.updatePatient(p, this.contextManager);
    }

    handleStructuredFieldEntered = (field) => {
        this.setState({
            withinStructuredField: field
        })
    }

    handleStructuredFieldExited = (field) => {
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
                <div className="FullApp">
                    <NavBar title="Flux Notes" supportLogin={true}/>
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
                                    onSelectionChange={this.handleSelectionChange}
									newCurrentShortcut={this.newCurrentShortcut}
                                    itemInserted={this.itemInserted}
                                    itemToBeInserted={this.state.SummaryItemToInsert}
                                    patient={this.state.patient}
									contextManager={this.contextManager}
									shortcutManager={this.shortcutManager}
                                    updateErrors={this.updateErrors}
									errors={this.state.errors}
                                />
                            </Col>
                            <Col sm={3}>
                                <ContextTray
                                    // Update functions
                                    // Properties
                                    ref={(comp) => { this.contextTray = comp; }}
                                    patient={this.state.patient}
									contextManager={this.state.contextManager}
                                    onShortcutClicked={this.handleSummaryItemSelected}
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
        );
    }
}

export default FullApp;