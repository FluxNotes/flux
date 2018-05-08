import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import MaterialButton from 'material-ui/Button';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import ContextTray from '../context/ContextTray';
import PickListOptionsPanel from '../panels/PickListOptionsPanel';
import Button from '../elements/Button';
import moment from 'moment';
import './NoteAssistant.css';

export default class NoteAssistant extends Component {
    constructor(props) {
        super(props);
        // TODO: uncomment this when renderMoreNotesButton is reactivated
        // this.maxNotesToDisplay = 100;
        this.state = {
            sortIndex: 0,
        };
        // On creating of NoteAssistant, check if the note viewer is editable
        if (this.props.isNoteViewerEditable) {
            // Check if the clinical notes view mode is active and if it is, set the notes button to selected, otherwise select the context button
            if (this.props.noteAssistantMode === "clinical-notes") {
                this.onNotesToggleButtonClicked();
            }
            else {
                this.onContextToggleButtonClicked();
            }
        }
        // If the note editor is note editable, set the notes button to selected and disable the context button
        else {
            this.disableContextToggleButton();
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.noteAssistantMode === "context-tray") {
            this.onContextToggleButtonClicked();
        } else {
            this.onNotesToggleButtonClicked();
        }

        if (!nextProps.isNoteViewerEditable) {
            this.disableContextToggleButton();
        }
    }

    componentDidMount() {
        // set callback so the editor can signal a change and this class can save the note
        this.props.saveNote(this.saveNoteOnKeypress);
        this.props.closeNote(this.closeNote);
    }

    componentWillReceiveProps(nextProps) { 
        if (nextProps.searchSelectedItem) { 
            const newNote = nextProps.searchSelectedItem;
            this.openNote(newNote.signed, newNote)
            this.props.setFullAppState("searchSelectedItem", null);
        }
    }

    // Sorts the lab results in chronological order with the most recent first (so that it shows up first in the clinical notes list)
    notesTimeSorter(a, b) {
        const a_startTime = new moment(a.date, "D MMM YYYY");
        const b_startTime = new moment(b.date, "D MMM YYYY");
        if (a_startTime > b_startTime) {
            return -1;
        }
        if (a_startTime < b_startTime) {
            return 1;
        }

        return 0;
    }

    // Switch view (i.e clinical notes view or context tray)
    toggleView(mode) {
        this.props.updateNoteAssistantMode(mode);
    }

    onNotesToggleButtonClicked() {
        this.notes_btn_classname = "toggle-button-selected";
        this.notes_stroke = "#FFFFFF";
        this.notes_disabled = false;
        this.context_btn_classname = "toggle-button";
        this.context_fill = "#666666";
        this.context_disabled = false;
    }

    onContextToggleButtonClicked() {
        this.notes_btn_classname = "toggle-button";
        this.notes_stroke = "#666666";
        this.notes_disabled = false;
        this.context_btn_classname = "toggle-button-selected"
        this.context_fill = "#FFFFFF";
        this.context_disabled = false;
    }

    disableContextToggleButton() {
        this.notes_btn_classname = "toggle-button-selected";
        this.notes_stroke = "#FFFFFF";
        this.notes_disabled = false;
        this.context_btn_classname = "toggle-button-disabled";
        this.context_disabled = true;
        this.context_fill = "#FFFFFF";
    }


    // Update the selected index for the sort drop down
    selectSort(sortIndex) {
        this.setState({sortIndex: sortIndex});
    }

    // Gets called when clicking on the "new note" button
    handleOnNewNoteButtonClick = () => {
        this.updateExistingNote();
        this.createBlankNewNote();
    }

    updateExistingNote = () => {
        this.updateNote(this.props.currentlyEditingEntryId);
    }

    updateNote = (entryId) => {
        // Only update if there is a note in progress
        if (!Lang.isEqual(entryId, -1)) {
            // List the notes to verify that they are being updated each invocation of this function:
            var found = this.props.patient.getNotes().find(function (element) {
                return Lang.isEqual(element.entryInfo.entryId, entryId);
            });
            if (!Lang.isNull(found) && !Lang.isUndefined(found)) {
                found.content = this.props.documentText;
                this.props.patient.updateExistingEntry(found);
                this.props.updateSelectedNote(found);
            }
        }
    }

    saveEditorContentsToNewNote = () => {
        // Create info to be set for new note
        let date = new moment().format("D MMM YYYY");
        let subject = "New Note";
        let hospital = "Dana Farber";
        let clinician = this.props.loginUser;
        let signed = false;

        // Add new unsigned note to patient record
        var currentlyEditingEntryId = this.props.patient.addClinicalNote(date, subject, hospital, clinician, this.props.documentText, signed);
        this.props.updateCurrentlyEditingEntryId(currentlyEditingEntryId);

        var found = this.props.patient.getNotes().find(function (element) {
            return Lang.isEqual(element.entryInfo.entryId, currentlyEditingEntryId);
        });

        this.props.updateSelectedNote(found);
    }

    // creates blank new note and puts it on the screen
    createBlankNewNote = () => {
        this.props.setFullAppState("noteClosed", false);

        // Create info to be set for new note
        let date = new moment().format("D MMM YYYY");
        let subject = "New Note";
        let hospital = "Dana Farber";
        let clinician = this.props.loginUser;
        let content = "";
        let signed = false;

        // Add new unsigned note to patient record
        var currentlyEditingEntryId = this.props.patient.addClinicalNote(date, subject, hospital, clinician, content, signed);
        this.props.updateCurrentlyEditingEntryId(currentlyEditingEntryId);

        var found = this.props.patient.getNotes().find(function (element) {
            return Lang.isEqual(element.entryInfo.entryId, currentlyEditingEntryId);
        });

        // Select note in the clinical notes view
        this.props.updateSelectedNote(found);
        this.props.loadNote(found);
        this.props.setFullAppState('isNoteViewerEditable', true);
        this.toggleView("context-tray");
    }

    // save the note after every keypress. Invoked by FluxNotesEditor.
    saveNoteOnKeypress = () => {
        // Don't start saving until there is content in the editor
        if (!Lang.isNull(this.props.documentText) && !Lang.isUndefined(this.props.documentText)) {
            if (Lang.isEqual(this.props.currentlyEditingEntryId, -1)) {
                this.saveEditorContentsToNewNote();
            } else {
                this.updateExistingNote();
            }
        }
    }

    // Gets called when clicking on one of the notes in the clinical notes view
    openNote = (isInProgressNote, note) => {
        this.props.setFullAppState("noteClosed", false);
        this.props.setFullAppState('layout', "split");
        this.props.setFullAppState('isNoteViewerVisible', true);

        // Don't start saving until there is content in the editor
        if (!Lang.isNull(this.props.documentText) && !Lang.isUndefined(this.props.documentText) && this.props.documentText.length > 0) {
            this.updateExistingNote();
        }
        this.props.updateCurrentlyEditingEntryId(note.entryInfo.entryId);
        // the lines below are duplicative
        this.props.updateSelectedNote(note);
        this.props.loadNote(note);

        // If the note selected is an In-Progress note, switch to the context tray else use the clinical-notes view
        if (isInProgressNote) {
            this.props.setFullAppState('isNoteViewerEditable', true);
            this.toggleView("context-tray");
        } else {
            this.props.setFullAppState('isNoteViewerEditable', false);
            this.toggleView("clinical-notes");
        }
    }

    // invoked by FluxNotesEditor when the Close Note button is pressed
    // removes the editor, deselects the selected note, expands right panel
    closeNote = () => {
        this.props.setFullAppState("noteClosed", true);
        this.props.setFullAppState('layout', "right-collapsed");
        this.props.setFullAppState('isNoteViewerVisible', false);
        this.props.setFullAppState('isNoteViewerEditable', false);
        this.props.setFullAppState('openClinicalNote', null);
    }

    deleteSelectedNote = () => { 
        this.props.deleteSelectedNote();
        this.closeNote();
    }

    // Render the content for the Note Assistant panel
    renderNoteAssistantContent(noteAssistantMode) {
        const allNotes = this.props.patient.getNotes();
        const numberOfPreviousSignedNotes = Lang.filter(allNotes, o => o.signed).length;

        switch (noteAssistantMode) {
            // Render the context tray
            case "context-tray":
                return (
                    <div>
                        <ContextTray
                            contextManager={this.props.contextManager}
                            onShortcutClicked={this.props.updateTemplateToInsert}
                            patient={this.props.patient}
                            shortcutManager={this.props.shortcutManager}
                        />
                        {this.props.isNoteViewerEditable ? this.renderDeleteNoteButton() : null}
                    </div>
                    // <div>
                    //     <PickListOptionsPanel/>
                    // </div>
                );

            // Render the clinical notes view which includes new note button, resume note button,
            // number of previous notes label, sort selection, and preview of previous notes
            case "clinical-notes":
                return (
                    <div className="clinical-notes-panel">
                        {this.renderNewNote()}
                        <div id="in-progress-note-list">
                            {this.renderInProgressNotes()}
                        </div> 

                        <div className="previous-notes-label">{numberOfPreviousSignedNotes} previous notes</div>
                        <div id="signed-note-list">
                            {/*TODO: Complete and enable sort selection/more-notes button*/}
                            {/*this.renderSortSelection()*/}
                            {this.renderNotes()}
                            {/*this.renderMoreNotesButton()*/}
                        </div> 
                    </div>
                );

            case "pick-list-options-panel":
                return (
                    <div>
                        <PickListOptionsPanel
                            updateNoteAssistantMode={this.props.updateNoteAssistantMode}
                            arrayOfPickLists={this.props.arrayOfPickLists}
                        />
                    </div>
                )

            default:
                console.error(`note assistant mode ${noteAssistantMode} is not a valid mode`);
                return "";
        }
    }

    renderNewNote() {
        return (
            <div className="note note-new" onClick={() => this.handleOnNewNoteButtonClick()}>
                <div className="note-new-text">
                    <FontAwesome name="plus"/>
                    <span>New note</span>
                </div>
            </div>
        );
    }

    renderInProgressNotes() {
        const inProgressNotes = Lang.filter(this.props.patient.getNotes(), o => !o.signed);

        return inProgressNotes.map((note, i) => this.renderInProgressNote(note, i));
    }

    renderInProgressNote(note, i) {
        let selected = Lang.isEqual(this.props.selectedNote, note);
        // if we have closed the note, selected = false
        if (Lang.isEqual(this.props.noteClosed, true)) {
            selected = false;
        }

        return (
            <div className={`note in-progress-note${selected ? " selected" : ""}`} key={i} onClick={() => {
                this.openNote(true, note)
            }}>
                <div className="in-progress-text">In progress note</div>
                <div className="existing-note-date">{note.date}</div>
                <div className="existing-note-subject">{note.subject}</div>
                {this.renderMetaDataText(note, 30)}
            </div>
        );
    }

    // Render the sort drop down
    renderSortSelection() {
        return (
            <div className="sort-selection">
                <div className="sort-label">Sort by</div>

                <Select
                    className="sort-select"
                    value={this.state.sortIndex}
                    onChange={(event) => this.selectSort(event.target.value)}
                >
                    <MenuItem className="sort-item" value={0}>Most recent</MenuItem>
                    <MenuItem className="sort-item" value={1}>Least recent</MenuItem>
                    <MenuItem className="sort-item" value={2}>Author type</MenuItem>
                    <MenuItem className="sort-item" value={3}>Specialty</MenuItem>
                    <MenuItem className="sort-item" value={4}>Encounter</MenuItem>
                    <MenuItem className="sort-item" value={5}>Note</MenuItem>
                </Select>
            </div>
        );
    }

    // Render the list of clinical notes
    renderNotes() {
        // Generate notesToDisplay array which will be used to render the notes in clinical notes view
        const signedNotes = Lang.filter(this.props.patient.getNotes(), o => o.signed);
        // TODO: sort notes based on selected sort; use the notesTimeSorter right now.
        signedNotes.sort(this.notesTimeSorter);
        const maxNotes = this.maxNotesToDisplay ? Math.min(this.maxNotesToDisplay, signedNotes.length) : signedNotes.length;
        
        return signedNotes.slice(0, maxNotes).map((item, i) => // item is a signed note
            this.renderClinicalNote(item, i)
        );
    }

    // Renders a button for deleting the current note if appropriate
    renderDeleteNoteButton = () => { 
        return (
            <div id="delete-note-container">
                <Button raised id="delete-note-button" onClick={this.deleteSelectedNote}> 
                    <FontAwesome name="trash" id="trash-icon"/> 
                    <span>Delete Note</span>
                </Button>
            </div> 
            
        );
    }

    // For each clinical note, render the note image with the text
    renderClinicalNote(item, i) {
        let selected = Lang.isEqual(this.props.selectedNote, item);
        // if we have closed the note, selected = false
        if (Lang.isEqual(this.props.noteClosed, true)) {
            selected = false;
        }

        return (
            <div className={`note existing-note${selected ? " selected" : ""}`} key={i} onClick={() => {
                this.openNote(false, item)
            }}>
                <div className="existing-note-date">{item.date}</div>
                <div className="existing-note-subject">{item.subject}</div>

                {this.renderMetaDataText(item)}
            </div>
        );
    }

    // Render the meta data section of the note (currently this data is just the hospital name)
    renderMetaDataText(item, yOffset = 0) {

        // Split hospital name into 2 lines for svg (svg doesn't handle text wrap. Do this manually using tspan tag)
        // Only split the name if it is more than three words long
        let hospitalWordsArray = item.hospital.split(" ");

        // Arrays hold the words in the hospital name
        let hospitalFirstArray = [];
        let hospitalSecondArray = [];

        // Strings hold the string to be displayed in the note
        let hospitalFirstString = "";
        let hospitalSecondString = "";

        // If the hospital name contains more than 3 words, split it into 2 lines to be displayed in the note
        if (hospitalWordsArray.length > 3) {
            let numberInFirstHalf = Math.ceil(hospitalWordsArray.length / 2);

            for (let i = 0; i < Math.ceil(hospitalWordsArray.length / 2); i++) {
                hospitalFirstArray.push(hospitalWordsArray[i]);
                hospitalFirstArray.push(" ");
            }

            for (let j = numberInFirstHalf; j < hospitalWordsArray.length; j++) {
                hospitalSecondArray.push(hospitalWordsArray[j]);
                hospitalSecondArray.push(" ");
            }

            for (let i = 0; i < hospitalFirstArray.length; i++) {
                hospitalFirstString = hospitalFirstString.concat(hospitalFirstArray[i]);
            }

            for (let j = 0; j < hospitalSecondArray.length; j++) {
                hospitalSecondString = hospitalSecondString.concat(hospitalSecondArray[j]);
            }

            return (
                <text x="20" y={70 + yOffset} className="existing-note-metadata" fill="#999">
                    <tspan x="20" y={70 + yOffset}>{hospitalFirstString}</tspan>
                    <tspan x="20" y={85 + yOffset}>{hospitalSecondString}</tspan>
                </text>
            );

        } else {
            hospitalFirstString = item.hospital;

            return (
                <text x="20" y={70 + yOffset} className="existing-note-metadata" fill="#999">
                    <tspan x="20" y={70 + yOffset}>{hospitalFirstString}</tspan>
                </text>
            );
        }
    }

    // Render the button to display more notes that are not currently displayed
    renderMoreNotesButton() {
        const signedNotes = Lang.filter(this.props.patient.getNotes(), o => o.signed);
        // Set the number of notes that are not being displayed
        const numberofMissingNotes = signedNotes.length - this.maxNotesToDisplay;

        if (numberofMissingNotes > 0) {
            return (
                <Button raised className="more-notes-btn">
                    View {numberofMissingNotes} more clinical note{numberofMissingNotes > 1 ? 's' : ''}
                </Button>
            );
        }
    }

    renderToggleButtons() {
        return (
            <div className="toggle-buttons-container">
                <MaterialButton
                    raised
                    id="notes-btn"
                    className={"toggle-button " + this.notes_btn_classname}
                    disabled={this.notes_disabled}
                    onClick={() => {
                        this.toggleView("clinical-notes")
                    }}>
                    <svg width="19px" height="20px" viewBox="0 0 19 17">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Group-Copy" transform="translate(0.003906, 0.007812)" stroke={this.notes_stroke}
                               strokeWidth="1.62">
                                <path
                                    d="M1.1248514,1.1248514 L1.1248514,9.91423446 L6.40096349,15.2473495 L17.6880469,15.2473495 L17.6880469,1.1248514 L1.1248514,1.1248514 Z"
                                    id="Rectangle-12-Copy-4"
                                    transform="translate(9.406449, 8.186100) rotate(-180.000000) translate(-9.406449, -8.186100) "></path>
                                <polyline id="Path-2"
                                          points="12.3745117 0.874511719 12.3745117 6.63727788 17.8869466 6.63727788"></polyline>
                            </g>
                        </g>
                    </svg>
                </MaterialButton>
                <MaterialButton
                    raised
                    id="context-btn"
                    className={"toggle-button " + this.context_btn_classname}
                    disabled={this.context_disabled}
                    onClick={() => {
                        this.toggleView("context-tray")
                    }}>
                    <svg width="15px" height="20px" viewBox="0 0 15 16">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"
                           fontFamily="OpenSans-Semibold, Open Sans" fontSize="19" fontWeight="500"
                           letterSpacing="0.172221214">
                            <text id="@-copy" fill={this.context_fill}>
                                <tspan x="-0.844039108" y="16.2245462">@</tspan>
                            </text>
                        </g>
                    </svg>
                </MaterialButton>

            </div>
        );
    }

    // Main render method
    render() {
        // If the note viewer is editable then we want to be able to edit notes and view the context tray
        // If the note viewer is read only the we want to be able to view the clinical notes
        const noteAssistantMode = (this.props.isNoteViewerEditable ? this.props.noteAssistantMode : "clinical-notes") 
        return (
            <div className="note-assistant-wrapper">
                {this.renderToggleButtons()}
                <div className="note-assistant-content-wrapper">
                    {this.renderNoteAssistantContent(noteAssistantMode)}
                </div>
            </div>
        );
    }
}

NoteAssistant.propTypes = {
    closeNote: PropTypes.func.isRequired,
    currentlyEditingEntryId: PropTypes.number.isRequired,
    contextManager: PropTypes.object.isRequired,
    deleteSelectedNote: PropTypes.func.isRequired,
    documentText: PropTypes.string.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    loadNote: PropTypes.func.isRequired, 
    loginUser: PropTypes.string.isRequired,
    noteAssistantMode: PropTypes.string.isRequired,
    noteClosed: PropTypes.bool.isRequired,
    patient: PropTypes.object.isRequired,
    saveNote: PropTypes.func.isRequired,
    searchSelectedItem: PropTypes.object,
    selectedNote: PropTypes.object,
    setFullAppState: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    updateCurrentlyEditingEntryId: PropTypes.func.isRequired,
    updateNoteAssistantMode: PropTypes.func.isRequired,
    updateSelectedNote: PropTypes.func.isRequired,
    arrayOfPickLists: PropTypes.array.isRequired,
    updateTemplateToInsert: PropTypes.func.isRequired
};
