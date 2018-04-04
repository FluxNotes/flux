import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import MaterialButton from 'material-ui/Button';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import ContextTray from '../context/ContextTray';
import Button from '../elements/Button';
import moment from 'moment';
import './NoteAssistant.css';

export default class NoteAssistant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortIndex: null,
            maxNotesToDisplay: 3,
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
            this.onNotesToggleButtonClicked();
            this.disableContextToggleButton();
        }
    }

    notesNotDisplayed = null;
    notesToDisplay = [];
    inProgressNotes = [];

    componentWillUpdate(nextProps, nextState) {
        this.getNotesFromPatient(nextProps);

        if (nextProps.noteAssistantMode === "context-tray") {
            this.onContextToggleButtonClicked();
        } else {
            this.onNotesToggleButtonClicked();
        }

        if (!nextProps.isNoteViewerEditable) {
            this.disableContextToggleButton();
        }
    }

    componentWillMount() {
        // Set default value for sort selection
        this.selectSort(0);
        this.getNotesFromPatient(this.props);
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

    getNotesFromPatient(props) {
        // Generate notesToDisplay array which will be used to render the notes in clinical notes view
        let allNotes = props.patient.getNotes();
        let signedNotes = Lang.filter(allNotes, o => o.signed);
        signedNotes.sort(this.notesTimeSorter);
        let unsignedNotes = Lang.filter(allNotes, o => !o.signed);
        const maxNotes = Math.min(this.state.maxNotesToDisplay, signedNotes.length);
        this.notesToDisplay = [];

        for (let i = 0; i < maxNotes; i++) {
            this.notesToDisplay.push(signedNotes[i]);
        }

        // Set the number of notes that are not being displayed
        let missingNotes = signedNotes.length - this.state.maxNotesToDisplay;
        this.notesNotDisplayed = missingNotes;
        this.inProgressNotes = unsignedNotes;
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
        var entryId = this.props.currentlyEditingEntryId;
        // Only update if there is a note in progress
        if (!Lang.isEqual(entryId, -1)) {
            // List the notes to verify that they are being updated each invocation of this function:
            // console.log(this.props.patient.getNotes());
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
        // this.setState({currentlyEditingEntryId: currentlyEditingEntryId});
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
            if (Lang.isEqual(this.props.currentlyEditingEntryId, -1)) {
                this.saveEditorContentsToNewNote();
            } else {
                this.updateExistingNote();
            }
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
                            patient={this.props.patient}
                            contextManager={this.props.contextManager}
                            shortcutManager={this.props.shortcutManager}
                            onShortcutClicked={this.props.handleSummaryItemSelected}
                        />
                    </div>
                );

            // Render the clinical notes view which includes new note button, resume note button,
            // number of previous notes label, sort selection, and preview of previous notes
            case "clinical-notes":
                return (
                    <div className="clinical-notes-panel">
                        {this.renderNewNote()}
                        {this.renderInProgressNotes()}

                        <div className="previous-notes-label">{numberOfPreviousSignedNotes} previous notes</div>
                        {/*Sort selection is currently disabled*/}
                        {/*this.renderSortSelection()*/}
                        {this.renderNotes()}
                        {this.renderMoreNotesButton()}
                    </div>
                );

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
        return this.inProgressNotes.map((note, i) => this.renderInProgressNote(note, i));
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
        return this.notesToDisplay.map((item, i) => // item is a signed note
            this.renderClinicalNote(item, i)
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
        if (this.notesNotDisplayed > 0) {
            return (
                <Button raised className="more-notes-btn">
                    View {this.notesNotDisplayed} more clinical note{this.notesNotDisplayed > 1 ? 's' : ''}
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
                    className={this.notes_btn_classname}
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
                    className={this.context_btn_classname}
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
        if (this.props.isNoteViewerEditable) {
            return (
                <div>
                    {this.renderToggleButtons()}
                    {this.renderNoteAssistantContent(this.props.noteAssistantMode)}
                </div>
            );

            // If the note viewer is read only the we want to be able to view the clinical notes
        } else {
            return (
                <div>
                    {this.renderToggleButtons()}
                    {this.renderNoteAssistantContent("clinical-notes")}
                </div>
            );
        }
    }
}

NoteAssistant.propTypes = {
    patient: PropTypes.object,
    contextManager: PropTypes.object,
    shortcutManager: PropTypes.object,
    isNoteViewerEditable: PropTypes.bool,
    saveNote: PropTypes.func,
    closeNote: PropTypes.func,
    handleSummaryItemSelected: PropTypes.func,
    updateCurrentlyEditingEntryId: PropTypes.func,
    searchSelectedItem: PropTypes.object,
};
