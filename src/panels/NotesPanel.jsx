import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';

import FluxNotesEditor from '../notes/FluxNotesEditor';
import Lang from 'lodash';
import NoteAssistant from '../notes/NoteAssistant';
import './NotesPanel.css';

export default class NotesPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedEditorNote: null,
            noteAssistantMode: "context-tray",
            selectedNote: null
        };

        this.handleUpdateEditorWithNote = this.handleUpdateEditorWithNote.bind(this);
        this.updateNoteAssistantMode = this.updateNoteAssistantMode.bind(this);
        this.updateSelectedNote = this.updateSelectedNote.bind(this);
        this.saveNoteUponKeypress = this.saveNoteUponKeypress.bind(this);
    }

    updateNoteAssistantMode(mode) {
        this.setState({noteAssistantMode: mode});
    }

    updateSelectedNote(note) {
        this.setState({selectedNote: note});
    }

    // Handle when the editor needs to be updated with a note. The note can be a new blank note or a pre existing note
    handleUpdateEditorWithNote(note) {
        if(!Lang.isNull(note)){
            this.props.setFullAppState("documentText", note.content);
        }
        // If in pre-encounter mode and the note editor doesn't exist, update the layout and add the editor
        // Set the note to be inserted into the editor and the selected note
        if (this.props.currentViewMode === 'pre-encounter' && !this.props.isNoteViewerVisible) {

            // *Note: setFullAppStateWithCallback is used instead of setFullAppState because the editor needs to be created
            // before editor related states can be set
            this.props.setFullAppStateWithCallback({
                layout: 'split',
                isNoteViewerVisible: true,
                isNoteViewerEditable: true
            }, () => {
                if (this.props.isNoteViewerVisible) {
                    this.setState({updatedEditorNote: note});
                    this.setState({selectedNote: note});
                }
            });
        }

        // This gets called in other modes besides pre-encounter mode. Check that the editor exists and then update the
        // state so that updatedEditorNote has the note to update the editor with
        if (this.props.isNoteViewerVisible) {
            this.setState({updatedEditorNote: note});
        }
    }

    // Save the note after every keypress. This function invokes the note saving logic in NoteAssistant
    saveNoteUponKeypress(){
        this.saveNoteChild();
    }

    renderNotesPanelContent() {
        // If isNoteViewerVisible is true, render the flux notes editor and the note assistant
        if (this.props.isNoteViewerVisible) {
            return (
                <Row center="xs">
                    <Col sm={7} md={8} lg={9}>
                        {this.renderFluxNotesEditor()}
                    </Col>

                    <Col sm={5} md={4} lg={3}>
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

    renderFluxNotesEditor() {
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
                    setFullAppState={this.props.setFullAppState}
                    setFullAppStateWithCallback={this.props.setFullAppStateWithCallback}
                    saveNoteUponKeypress={this.saveNoteUponKeypress}

                    // Pass in note that the editor is to be updated with
                    updatedEditorNote={this.state.updatedEditorNote}
                    handleUpdateEditorWithNote={this.handleUpdateEditorWithNote}

                    currentViewMode={this.props.currentViewMode}
                    updateSelectedNote={this.updateSelectedNote}
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
                    loadNote={this.handleUpdateEditorWithNote}
                    noteAssistantMode={this.state.noteAssistantMode}
                    updateNoteAssistantMode={this.updateNoteAssistantMode}
                    selectedNote={this.state.selectedNote}
                    updateSelectedNote={this.updateSelectedNote}
                    documentText={this.props.documentText}
                    saveNote={click => this.saveNoteChild = click}
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

NotesPanel.propTypes = {
    patient: PropTypes.object,
    contextManager: PropTypes.object,
    shortcutManager: PropTypes.object,
    summaryItemToBeInserted: PropTypes.string,
    documentText: PropTypes.string,
    saveNote: PropTypes.func,
    errors: PropTypes.array,
    isNoteViewerEditable: PropTypes.bool,
    newCurrentShortcut: PropTypes.func,
    itemInserted: PropTypes.func,
    updateErrors: PropTypes.func,
    handleSummaryItemSelected: PropTypes.func,
    handleSelectionChange: PropTypes.func
};
