import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import lightBlue from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';

import NavBar from '../nav/NavBar';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import PatientSummaryPanel from '../summary/PatientSummaryPanel';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import ContextTray from '../context/ContextTray';
import TimelinePanel from '../timeline/TimelinePanel';
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';
//import Patient from '../patient/Patient';
import DataAccess from '../dataaccess/DataAccess';
import SummaryMetadata from '../summary/SummaryMetadata';
import Lang from 'lodash';
import './FullApp.css';

const theme = createMuiTheme({
    palette: {
        primary: { ...lightBlue, A700: '#1384b5' },
        secondary: { ...green, A400: '#00e677' },
        error: red
    }
});

class FullApp extends Component {
    constructor(props) {
        super(props);

        this.shortcuts = [ "#disease status", "#staging", "#toxicity", "@name",
        "@condition", "@age", "@dateofbirth", "@gender", "@patient", "@stage" ];
        this.clinicalSettings = ["pre-encounter", "encounter", "post-encounter"];

        if (Lang.isUndefined(this.props.dataSource)) {
            this.dataAccess = new DataAccess("HardCodedReadOnlyDataSource");
        } else {
            this.dataAccess = new DataAccess(this.props.dataSource);
        }

        //let patient = new Patient();
        let patient = this.dataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
        this.summaryMetadata = new SummaryMetadata();
        this.shortcutManager = new ShortcutManager(this.shortcuts);
        this.contextManager = new ContextManager(patient, this.onContextUpdate);

        this.state = {
            patient: patient,
            condition: null,
            event: null,
            errors: null,
            SummaryItemToInsert: '',
            selectedText: null,
            summaryMetadata: this.summaryMetadata.getMetadata(),
            contextManager: this.contextManager
        };
    }

    // pass this function to children to set full app global state
    setFullAppState = (state, value) => {
        this.setState({ [state]: value });
    }

    updateErrors = (errors) => {
        this.setState({ errors });
    }

    onContextUpdate = () => {
        this.setState({ contextManager: this.contextManager });
    }

    itemInserted = () => {
        this.setState({ SummaryItemToInsert: '' });
    }

    newCurrentShortcut = (shortcutC, shortcutType, obj) => {
        let newShortcut = this.shortcutManager.createShortcut(shortcutC, shortcutType, this.handleShortcutUpdate, obj);
        const errors = newShortcut.validateInCurrentContext(this.contextManager);
        if (errors.length > 0) {
            errors.forEach((error) => {
                console.error(error);
            });
            newShortcut = null;
        } else {
            newShortcut.initialize(this.contextManager, shortcutType);
        }
        this.setFullAppState('errors', errors);
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

    handleSummaryItemSelected = (item) =>{
        if (item) {
            if (item.shortcut) {
                this.setState({SummaryItemToInsert: `${item.shortcut}[[${item.value}]]`});
            } else if (item.value) {
                this.setState({SummaryItemToInsert: item.value});
            } else {
                this.setState({SummaryItemToInsert: item});
            }
        }
    }

    handleNewNote() {
        console.log("new note");
    }

    menuItems = [
        {label: "New Note", action: this.handleNewNote.bind(this)}
    ];

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="FullApp">
                    <NavBar title={this.props.display} supportLogin={true} menuItems={this.menuItems} />

                    <Grid className="FullApp-content" fluid>
                        <Row center="xs">
                            <Col sm={12}>
                                <PatientSummaryPanel
                                    patient={this.state.patient}
                                    clinicalSettings={this.clinicalSettings}
                                    setFullAppState={this.setFullAppState} />
                            </Col>
                        </Row>

                        <Row center="xs">
                            <Col sm={4}>
                                <DataSummaryPanel
                                    patient={this.state.patient}
                                    condition={this.state.condition}
                                    summaryMetadata={this.state.summaryMetadata}
                                    onItemClicked={this.handleSummaryItemSelected}
                                    allowItemClick={true}
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
                                    ref={(comp) => { this.contextTray = comp; }}
                                    patient={this.state.patient}
                                    contextManager={this.contextManager}
                                    onShortcutClicked={this.handleSummaryItemSelected}
                                />
                            </Col>
                        </Row>

                        <Row center="xs">
                            <Col sm={12}>
                                <TimelinePanel
                                    patient={this.state.patient} 
                                    condition={this.state.condition}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default FullApp;
