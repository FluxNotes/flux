import React, {Component} from 'react';
import {Row, Col} from 'react-flexbox-grid';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import NoteAssistant from '../notes/NoteAssistant';

import './NotesPanel.css';

class NotesPanel extends Component {

    renderNotesPanelContent() {

        // If isNoteViewerVisible is tru, render the flux notes editor and the note assistant
        if (this.props.isNoteViewerVisible) {
            return (
                <Row center="xs">
                    <Col sm={7}>
                        {this.renderFluxNotesEditor()}
                    </Col>
                    <Col sm={5}>
                        {this.renderNoteAssistant()}
                    </Col>
                </Row>
            );

            // Else just render the note assistant
        } else {
            return (
                <Row center="xs">
                    <Col sm={12}>
                        {this.renderNoteAssistant()}
                    </Col>
                </Row>
            );
        }
    }

    renderFluxNotesEditor(){
        return (
            <div className="fitted-panel panel-content dashboard-panel">
                <FluxNotesEditor
                    onSelectionChange={this.props.handleSelectionChange}
                    newCurrentShortcut={this.props.newCurrentShortcut}
                    itemInserted={this.props.itemInserted}
                    itemToBeInserted={this.props.summaryItemToBeInserted}
                    patient={this.props.patient}
                    contextManager={this.props.contextManager}
                    shortcutManager={this.props.shortcutManager}
                    updateErrors={this.props.updateErrors}
                    errors={this.props.errors}
                />
            </div>
        );
    }

    renderNoteAssistant() {
        return (
            <div className="fitted-panel panel-content dashboard-panel">
                <NoteAssistant
                    isNoteViewerEditable={this.props.isNoteViewerEditable}
                    patient={this.props.patient}
                    contextManager={this.props.contextManager}
                    shortcutManager={this.props.shortcutManager}
                    handleSummaryItemSelected={this.props.handleSummaryItemSelected}
                />
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderNotesPanelContent()}
            </div>
        );
    }
}

export default NotesPanel;