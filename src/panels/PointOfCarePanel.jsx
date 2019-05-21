import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PointOfCare from '../notes/PointOfCare';
import StructuredFieldMapManager from '../shortcuts/StructuredFieldMapManager';
import ShortcutManager from '../shortcuts/ShortcutManager';
import ContextManager from '../context/ContextManager';


export default class PointOfCarePanel extends Component {
    render() {
        //adding fake note so POC shows up
        const structuredFieldMapManager = new StructuredFieldMapManager();
        const shortcutManager = new ShortcutManager();
        const contextManager = new ContextManager();
        const patient = this.props.appState.patient;
        let noteContent = '@condition[[{"text":"Gastrointestinal stromal tumor","entryId":"8"}]] <disease status>';
        const entryId = patient.addClinicalNote('', '', '', '', '', noteContent, false);
        const updatedEditorNote = patient.getEntryById(entryId);
        const placeholder = shortcutManager.createPlaceholder('#disease status', '<disease status>', undefined, contextManager, patient, updatedEditorNote, false);
        structuredFieldMapManager.addPlaceholder(placeholder);

        return (
            <div id="point-of-care-dashboard-content" style={{display: "flex"}}>
                <PointOfCare
                structuredFieldMapManager={structuredFieldMapManager}
                isAppBlurred={this.props.isAppBlurred}
                />
            </div>
        );
    }
}

PointOfCarePanel.propTypes = {
    appState: PropTypes.object.isRequired,
    structuredFieldMapManager: PropTypes.object.isRequired
};