import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import Button from '../elements/Button';
import Lang from 'lodash';
import NoteAssistant from '../notes/NoteAssistant';
import NoteParser from '../noteparser/NoteParser';
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
            currentlyEditingEntryId: -1,
            arrayOfPickLists: [],
            contextTrayItemToInsert: null,
        };

        this.noteParser = new NoteParser(this.props.shortcutManager, this.props.contextManager);
    }

    componentWillReceiveProps = (nextProps) => {
        // Logic to handle switching notes
        if (!Lang.isNull(nextProps.openClinicalNote) && this.props.openClinicalNote !== nextProps.openClinicalNote) {
            this.handleUpdateEditorWithNote(nextProps.openClinicalNote);
        }
    }

    updateNoteAssistantMode = (mode) => {
        this.setState({noteAssistantMode: mode});
    }

    updateSelectedNote = (note) => {
        this.setState({selectedNote: note});
    }

    updateContextTrayItemToInsert = (contextTrayItem) => {
        this.setState({ contextTrayItemToInsert: contextTrayItem });
    }

    updateContextTrayItemWithSelectedPickListOptions = (selectedPickListOptions) => {
        let contextTrayItemToInsert = this.state.contextTrayItemToInsert;
        
        // Clear old selections
        while (contextTrayItemToInsert.indexOf('[[') >= 0) {
            let indexStart = contextTrayItemToInsert.indexOf('[[');
            let indexEnd = contextTrayItemToInsert.indexOf(']]');
            contextTrayItemToInsert = contextTrayItemToInsert.slice(0, indexStart) + contextTrayItemToInsert.slice(indexEnd + 2);
        }

        if (!Lang.isNull(this.state.contextTrayItemToInsert) && selectedPickListOptions.length > 0) {
            // Loop through selectedPickListOptions and replace in contextTrayItem
            let searchIndex = 0;
            selectedPickListOptions.forEach((option) => {
                const triggerLength = option.trigger.length;
                // Skip selections that have not been made yet
                if (option.selectedOption === undefined) {
                    // update searchIndex to start searching the string after the trigger we are skipping over
                    searchIndex = contextTrayItemToInsert.indexOf(option.trigger, searchIndex) + triggerLength;
                    return;
                }

                let index = contextTrayItemToInsert.indexOf(option.trigger, searchIndex) + triggerLength;
                // Search for next instance of trigger if bracketed notation is already provided
                while (contextTrayItemToInsert.substring(index).startsWith("[[")) {
                    index = contextTrayItemToInsert.indexOf(option.trigger, searchIndex + index + 1) + triggerLength;
                }
                // Replace instance of shortcut with bracketed notation
                contextTrayItemToInsert = contextTrayItemToInsert.slice(0, index) + `[[${option.selectedOption}]]` + contextTrayItemToInsert.slice(index);
            });
        }

        this.setState({contextTrayItemToInsert: contextTrayItemToInsert});
    }

    // Handle when the editor needs to be updated with a note. The note can be a new blank note or a pre existing note
    handleUpdateEditorWithNote = (note) => {
        // If in pre-encounter mode and the note editor doesn't exist, update the layout and add the editor
        if (!Lang.isNull(note)) {
            // *Note: setFullAppStateWithCallback is used instead of setFullAppState because the editor needs to be created
            // before editor related states can be set
            this.props.setFullAppStateWithCallback({
                layout: 'split',
                isNoteViewerVisible: true,
                isNoteViewerEditable: !note.signed,
                noteClosed: false
            }, () => {
                const mode = note.signed ? "clinical-notes" : "context-tray";
                this.setState({
                    selectedNote: note,
                    updatedEditorNote: note,
                    noteAssistantMode: mode,
                    currentlyEditingEntryId: parseInt(note.entryInfo.entryId, 10)
                });
                this.props.setDocumentText(note.content);
                this.props.setOpenClinicalNote(note);
            });
        }
    }

    handleUpdateCurrentlyEditingEntryId = (id) => {
        this.setState({currentlyEditingEntryId: parseInt(id, 10)});
    }

    handleUpdateArrayOfPickLists = (array) => {
        this.setState({arrayOfPickLists: array})
    }

    // Save the note after every editor change. This function invokes the note saving logic in NoteAssistant
    saveNoteOnChange = () => {
        this.saveNoteChild();
    }

    // invokes closing logic in NoteAssistant
    closeNote = () => {
        this.closeNoteChild();
        this.props.setDocumentText("");
        this.props.setOpenClinicalNote(null);
        this.setState({
            updatedEditorNote: null,
            noteAssistantMode: "context-tray",
            // selectedNote is the note that is selected in the clinical notes view in the NoteAssistant
            selectedNote: null,
            currentlyEditingEntryId: -1
        });
    }

    // Removes a note from patient object if the note is unsigned 
    deleteSelectedNote = () => {
        if (this.state.selectedNote && !this.state.selectedNote.signed) {
            // Find the shortcuts in the current note.
            const recognizedShortcutsObjects = this.noteParser.getListOfTriggersFromText(this.state.selectedNote.content)[0].reverse();
            for (const index in recognizedShortcutsObjects) {
                // Get the actual shortcut obj from structuredFieldMapManager lookup -- need id of shortcut to retrieve
                const currentShortcutTrigger = recognizedShortcutsObjects[index].trigger.toLowerCase();
                const mappedShortcutMetadata = this.props.shortcutManager.shortcutMap[currentShortcutTrigger]
                const currentShortcutId = (mappedShortcutMetadata) ? mappedShortcutMetadata.id : null;
                const currentShortcut = this.props.structuredFieldMapManager.idToShortcutMap.get(currentShortcutId);
                if (currentShortcut && currentShortcut.onBeforeDeleted) {
                    currentShortcut.onBeforeDeleted();
                }
            }
            // Clear all shortcuts from the current mapManager
            this.props.structuredFieldMapManager.clearStructuredFieldMap();
            this.props.patient.removeClinicalNote(this.state.selectedNote);

        } else {
            console.error('Tried to remove a note that is signed')
        }
    }

    handleSignButtonClick = () => {
        // Set signed attribute on the selected note to be true

        const tempNote = this.state.selectedNote;
        tempNote.signed = true;
        this.setState({selectedNote: tempNote});
        let inProg = this.props.patient.getInProgressNotes();
        inProg.forEach((a) => {
            this.props.patient.removeClinicalNote(a)
        });
        this.props.dataAccess.savePatient(this.props.patient);
        inProg.forEach((b) => {
            this.props.patient.reAddEntryToPatient(b);
        });

        // Close the current note
        this.closeNote();
    }

    renderSignButton = () => {
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

            // If note viewer is editable and a note is selected, render the sign note button
            if (this.props.isNoteViewerEditable && this.state.selectedNote) {
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
                // Else don't render sign note button
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
            <div className="panel-content dashboard-panel">
                <FluxNotesEditor
                    closeNote={this.closeNote}
                    contextManager={this.props.contextManager}
                    currentViewMode={this.props.currentViewMode}
                    documentText={this.props.documentText}
                    errors={this.props.errors}
                    handleUpdateEditorWithNote={this.handleUpdateEditorWithNote}
                    isNoteViewerEditable={this.props.isNoteViewerEditable}
                    inModal={false}
                    itemInserted={this.props.itemInserted}
                    newCurrentShortcut={this.props.newCurrentShortcut}
                    noteAssistantMode={this.state.noteAssistantMode}
                    patient={this.props.patient}
                    saveNoteOnChange={this.saveNoteOnChange}
                    selectedNote={this.state.selectedNote}
                    setDocumentTextWithCallback={this.props.setDocumentTextWithCallback}
                    setFullAppStateWithCallback={this.props.setFullAppStateWithCallback}
                    setNoteViewerEditable={this.props.setNoteViewerEditable}
                    setLayout={this.setLayout}
                    shortcutManager={this.props.shortcutManager}
                    shouldEditorContentUpdate={this.state.noteAssistantMode !== 'pick-list-options-panel'}
                    structuredFieldMapManager={this.props.structuredFieldMapManager}
                    summaryItemToInsert={this.props.summaryItemToInsert}
                    contextTrayItemToInsert={this.state.contextTrayItemToInsert}
                    // Pass in note that the editor is to be updated with
                    updatedEditorNote={this.state.updatedEditorNote}
                    updateErrors={this.props.updateErrors}
                    updateSelectedNote={this.updateSelectedNote}
                    updateNoteAssistantMode={this.updateNoteAssistantMode}
                    arrayOfPickLists={this.arrayOfPickLists}
                    handleUpdateArrayOfPickLists={this.handleUpdateArrayOfPickLists}
                    updateContextTrayItemToInsert={this.updateContextTrayItemToInsert}
                />
            </div>
        );
    }

    renderNoteAssistant() {
        return (
            <div className="fitted-panel panel-content dashboard-panel">
                <NoteAssistant
                    closeNote={click => this.closeNoteChild = click}
                    currentlyEditingEntryId={this.state.currentlyEditingEntryId}
                    contextManager={this.props.contextManager}
                    contextTrayItemToInsert={this.state.contextTrayItemToInsert}
                    deleteSelectedNote={this.deleteSelectedNote}
                    documentText={this.props.documentText}
                    handleSummaryItemSelected={this.props.handleSummaryItemSelected}
                    handleUpdateArrayOfPickLists={this.handleUpdateArrayOfPickLists}
                    handleUpdateEditorWithNote={this.handleUpdateEditorWithNote}
                    isNoteViewerEditable={this.props.isNoteViewerEditable}
                    loadNote={this.handleUpdateEditorWithNote}
                    loginUser={this.props.loginUser}
                    newCurrentShortcut={this.props.newCurrentShortcut}
                    noteAssistantMode={this.state.noteAssistantMode}
                    noteClosed={this.props.noteClosed}
                    patient={this.props.patient}
                    saveNote={click => this.saveNoteChild = click}
                    saveNoteOnChange={this.saveNoteOnChange}
                    searchSelectedItem={this.props.searchSelectedItem}
                    selectedNote={this.state.selectedNote}
                    setFullAppStateWithCallback={this.props.setFullAppStateWithCallback}
                    setLayout={this.props.setLayout} 
                    setNoteClosed={this.props.setNoteClosed}
                    setNoteViewerEditable={this.props.setNoteViewerEditable}
                    setNoteViewerVisible={this.props.setNoteViewerVisible}
                    setOpenClinicalNote={this.props.setOpenClinicalNote}
                    setSearchSelectedItem={this.props.setSearchSelectedItem}
                    shortcutManager={this.props.shortcutManager}
                    shouldEditorContentUpdate={this.state.noteAssistantMode === 'pick-list-options-panel'}
                    structuredFieldMapManager={this.props.structuredFieldMapManager}
                    updateCurrentlyEditingEntryId={this.handleUpdateCurrentlyEditingEntryId}
                    updateNoteAssistantMode={this.updateNoteAssistantMode}
                    updateSelectedNote={this.updateSelectedNote}
                    arrayOfPickLists={this.state.arrayOfPickLists}
                    updateContextTrayItemToInsert={this.updateContextTrayItemToInsert}
                    updateContextTrayItemWithSelectedPickListOptions={this.updateContextTrayItemWithSelectedPickListOptions}
                    updatedEditorNote={this.state.updatedEditorNote}
                    updateErrors={this.props.updateErrors}
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
    contextManager: PropTypes.object,
    currentViewMode: PropTypes.string.isRequired,
    dataAccess: PropTypes.object.isRequired,
    documentText: PropTypes.string.isRequired,
    errors: PropTypes.array.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired,
    isNoteViewerVisible: PropTypes.bool.isRequired,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    itemInserted: PropTypes.func.isRequired,
    loginUser: PropTypes.string.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    noteClosed: PropTypes.bool.isRequired,
    openClinicalNote: PropTypes.object,
    patient: PropTypes.object.isRequired,
    searchSelectedItem: PropTypes.object,
    setDocumentText: PropTypes.func.isRequired,
    setDocumentTextWithCallback: PropTypes.func.isRequired,
    setNoteClosed: PropTypes.func.isRequired,
    setNoteViewerEditable: PropTypes.func.isRequired,
    setFullAppStateWithCallback: PropTypes.func.isRequired,
    setNoteViewerVisible: PropTypes.func.isRequired,
    setLayout: PropTypes.func.isRequired,
    setOpenClinicalNote: PropTypes.func.isRequired,
    setSearchSelectedItem: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    structuredFieldMapManager: PropTypes.object.isRequired,
    summaryItemToInsert: PropTypes.string.isRequired,
    updateErrors: PropTypes.func.isRequired,
};