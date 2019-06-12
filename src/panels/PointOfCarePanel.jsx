import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PointOfCare from '../notes/PointOfCare';
import StructuredFieldMapManager from '../shortcuts/StructuredFieldMapManager';
import ShortcutManager from '../shortcuts/ShortcutManager';

export default class PointOfCarePanel extends Component {

    setUpFakeClinicialNote() {
        this.structuredFieldMapManager = new StructuredFieldMapManager();
        this.shortcutManager = new ShortcutManager();
        const patient = this.props.appState.patient;
        this.contextManager = this.props.contextManager;
        console.log('contextManager ', this.contextManager);
        let noteContent = '@Condition[[{"text":"Gastrointestinal stromal tumor","entryId":"8"}]]';
        const entryId = patient.addClinicalNote('', '', '', '', '', noteContent, false);
        const updatedEditorNote = patient.getEntryById(entryId);
        console.log(updatedEditorNote);
        const def =  { "type": "InsertValue",
            "id": "ConditionInserter",
            "getData": {"object": "patient", "method": "getConditions", "itemKey": "entryInfo.entryId", "itemContext": "type", "dateLabel": "diagnosisDate"},
            "isContext": true,
            "isGlobalContext": true,
            "stringTriggers": [{"name": "@condition", "description": "Select a condition of the patient to insert and support capturing further information about.", "picker": true }],
            "knownParentContexts": "Patient"
        };
        let shortcut = this.shortcutManager.createShortcut(def, '@condition', patient, {"text": "Gastrointestinal stromal tumor", "entryId": "8"}, true);
        shortcut.setText("Gastrointestinal stromal tumor");
        console.log(shortcut);


        const errors = shortcut.validateInCurrentContext(this.contextManager);
        if (errors.length > 0) {
            errors.forEach((error) => {
                console.error(error);
            });
            shortcut = null;
        } else {
            shortcut.initialize(this.contextManager,'@condition', true, {"text": "Gastrointestinal stromal tumor", "entryId": "8"});
        }
        shortcut.isInContext = true;
        //this.contextManager.contextUpdated();
        this.contextManager.addShortcutToContext(shortcut);



        const placeholder = this.shortcutManager.createPlaceholder('#disease status', '<disease status>', undefined, this.contextManager, patient, updatedEditorNote, false);
        this.structuredFieldMapManager.addPlaceholder(placeholder);
    }

    render() {
        //adding fake note so POC shows up
        /* const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();
        const contextManager = this.props.contextManager;
        const patient = this.props.appState.patient;
        let noteContent = '@condition[[{"text":"Gastrointestinal stromal tumor","entryId":"8"}]] <disease status>';
        const entryId = patient.addClinicalNote('', '', '', '', '', noteContent, false);
        const updatedEditorNote = patient.getEntryById(entryId);
        const def =  { "type": "InsertValue",
        "id": "ConditionInserter",
        "getData": {"object": "patient", "method": "getConditions", "itemKey": "entryInfo.entryId", "itemContext":"type", "dateLabel": "diagnosisDate"},
        "isContext": true,
        "isGlobalContext": true,
        "stringTriggers": [{"name":"@condition", "description": "Select a condition of the patient to insert and support capturing further information about.", "picker": true }],
        "knownParentContexts": "Patient"
        }
        const shortcut = shortcutManager.createShortcut(def, '@condition', patient, {"text":"Gastrointestinal stromal tumor", "entryId":"8"}, true);
        shortcut.setText("Gastrointestinal stromal tumor")
        console.log(shortcut)
        shortcut.initialize(contextManager, '@condition', true, {"text":"Gastrointestinal stromal tumor", "entryId":"8"})
        contextManager.addShortcutToContext(shortcut);

        shortcut.isInContext = true;
        console.log(contextManager)
        const placeholder = shortcutManager.createPlaceholder('#disease status', '<disease status>', undefined, contextManager, patient, updatedEditorNote, false);
        structuredFieldMapManager.addPlaceholder(placeholder); */
        this.setUpFakeClinicialNote();

        return (
            <div id="point-of-care-dashboard-content" style={{display: "flex"}}>
                <PointOfCare
                    structuredFieldMapManager={this.structuredFieldMapManager}
                    isAppBlurred={this.props.isAppBlurred}
                />
            </div>
        );
    }
}

PointOfCarePanel.propTypes = {
    appState: PropTypes.object.isRequired,
    structuredFieldMapManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired
};