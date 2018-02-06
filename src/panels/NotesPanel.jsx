import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import Button from '../elements/Button';
import Lang from 'lodash';
import NoteAssistant from '../notes/NoteAssistant';
import './NotesPanel.css';

export default class NotesPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // updatedEditorNote is the note to be loaded in the editor
            updatedEditorNote: null,
            noteAssistantMode: "context-tray",
            // selectedNote is the note that is selected in the clinical notes view in the NoteAssistant
            selectedNote: null,
            currentlyEditingEntryId: -1
        };

        this.handleUpdateEditorWithNote = this.handleUpdateEditorWithNote.bind(this);
        this.updateNoteAssistantMode = this.updateNoteAssistantMode.bind(this);
        this.updateSelectedNote = this.updateSelectedNote.bind(this);
        this.saveNoteUponKeypress = this.saveNoteUponKeypress.bind(this);
        this.handleUpdateCurrentlyEditingEntryId = this.handleUpdateCurrentlyEditingEntryId.bind(this);
    }

    updateNoteAssistantMode(mode) {
        this.setState({noteAssistantMode: mode});
    }

    updateSelectedNote(note) {
        this.setState({selectedNote: note});
    }

    // Handle when the editor needs to be updated with a note. The note can be a new blank note or a pre existing note
    handleUpdateEditorWithNote(note) {
        if (!Lang.isNull(note)) {
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
                    if (!note) {
                        this.setState({currentlyEditingEntryId: -1});
                    } else {
                        this.setState({currentlyEditingEntryId: note.entryInfo.entryId});
                    }
                }
            });
        }

        // This gets called in other modes besides pre-encounter mode. Check that the editor exists and then update the
        // state so that updatedEditorNote has the note to update the editor with
        if (this.props.isNoteViewerVisible) {
            this.setState({updatedEditorNote: note});
        }
    }

    handleUpdateCurrentlyEditingEntryId(id) {
        this.setState({currentlyEditingEntryId: id});
    }

    // Save the note after every keypress. This function invokes the note saving logic in NoteAssistant
    saveNoteUponKeypress() {
        this.saveNoteChild();
    }

    handleSignButtonClick() {
        console.log("clicked sign button");
    }

    renderSignButton() {
        return (
            <div id="finish-sign-component">
                <Button raised className="btn_finish" onClick={() => {
                    this.handleSignButtonClick();
                }}>
                    Sign note
                </Button>
            </div>
        );
    }

    renderNotesPanelContent() {
        // If isNoteViewerVisible is true, render the flux notes editor and the note assistant
        if (this.props.isNoteViewerVisible) {

            // If not viewer is editable, render the sign note button, else don't render sign note button
            if(this.props.isNoteViewerEditable) {
                return (
                    <div>
                        <Row center="xs">
                            <Col sm={7} md={8} lg={9}>
                                {this.renderFluxNotesEditor()}
                                {this.renderSignButton()}
                            </Col>
                            <Col sm={5} md={4} lg={3}>
                                {this.renderNoteAssistant()}
                            </Col>
                        </Row>
                    </div>
                );
            } else {
                return (
                    <div>
                        <Row center="xs">
                            <Col sm={7} md={8} lg={9}>
                                {this.renderFluxNotesEditor()}
                            </Col>
                            <Col sm={5} md={4} lg={3}>
                                {this.renderNoteAssistant()}
                            </Col>
                        </Row>
                    </div>
                );
            }

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
            <div className="fitted-panel panel-content dashboard-panel editor-panel">
                <FluxNotesEditor
                    onSelectionChange={this.props.handleSelectionChange}
                    newCurrentShortcut={this.props.newCurrentShortcut}
                    itemInserted={this.props.itemInserted}
                    summaryItemToInsert={this.props.summaryItemToInsert}
                    patient={this.props.patient}
                    contextManager={this.props.contextManager}
                    shortcutManager={this.props.shortcutManager}
                    updateErrors={this.props.updateErrors}
                    errors={this.props.errors}
                    setFullAppState={this.props.setFullAppState}
                    setFullAppStateWithCallback={this.props.setFullAppStateWithCallback}
                    saveNoteUponKeypress={this.saveNoteUponKeypress}
                    documentText={this.props.documentText}
                    isNoteViewerEditable={this.props.isNoteViewerEditable}

                    // Pass in note that the editor is to be updated with
                    updatedEditorNote={this.state.updatedEditorNote}
                    selectedNote={this.state.selectedNote}
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
                    setFullAppState={this.props.setFullAppState}
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
                    updateCurrentlyEditingEntryId={this.handleUpdateCurrentlyEditingEntryId}
                    currentlyEditingEntryId={this.state.currentlyEditingEntryId}
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
    handleSelectionChange: PropTypes.func,
    setFullAppState: PropTypes.func,
    summaryItemToInsert: PropTypes.string,
};
