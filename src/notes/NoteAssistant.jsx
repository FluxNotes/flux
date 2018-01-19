import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';

import ContextTray from '../context/ContextTray';
import Button from '../elements/Button';
import iconArrowLeft from '../../public/icons/icon_arrow_left.svg';
import moment from 'moment';
import './NoteAssistant.css';

export default class NoteAssistant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortIndex: null,
            maxNotesToDisplay: 3,
            currentlyEditingEntryId: -1
        };
    }

    notesNotDisplayed = null;
    notesToDisplay = [];
    inProgressNotes = [];

    componentWillUpdate(nextProps, nextState) {
        this.getNotesFromPatient(nextProps);
    }

    componentWillMount() {
        // Set default value for sort selection
        this.selectSort(0);
        this.getNotesFromPatient(this.props);
    }
    
    componentDidMount() {
        // set callback so the editor can signal a change and this class can save the note
        this.props.saveNote(this.saveNoteOnKeypress);
    }

    getNotesFromPatient(props) {
        // Generate notesToDisplay array which will be used to render the notes in clinical notes view
        let allNotes = props.patient.getNotes();
        let signedNotes = Lang.filter(allNotes, o => o.signed);
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

    // Update the selected index for the sort drop down
    selectSort(sortIndex) {
        this.setState({ sortIndex: sortIndex });
    }

    // Gets called when clicking on the "new note" button
    handleOnNewNoteButtonClick  = () => {
        this.updateExistingNote();
        this.createBlankNewNote();
    }

    updateExistingNote = () => {
        var entryId = this.state.currentlyEditingEntryId;
        // Only update if there is a note in progress
        if(!Lang.isEqual(entryId, -1)){
            // List the notes to verify that they are being updated each invocation of this function:
            // console.log(this.props.patient.getNotes());
            var found = this.props.patient.getNotes().find(function(element){
                return Lang.isEqual(element.entryInfo.entryId, entryId);
            });
            if(!Lang.isNull(found) && !Lang.isUndefined(found)){
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
        let hospital = "Dana Farber Cancer Institute";
        let clinician = "Dr. X123";
        let signed = false;
        
        // Add new unsigned note to patient record
        var currentlyEditingEntryId = this.props.patient.addClinicalNote(date, subject, hospital, clinician, this.props.documentText, signed);
        this.setState({currentlyEditingEntryId: currentlyEditingEntryId});
    }

    // creates blank new note and puts it on the screen
    createBlankNewNote = () => {
        let emptyNote = "";
        this.toggleView("context-tray");
        this.props.loadNote(emptyNote);

        // Create info to be set for new note
        let date = new moment().format("D MMM YYYY");
        let subject = "New Note";
        let hospital = "Dana Farber Cancer Institute";
        let clinician = "Dr. X123";
        let content = emptyNote;
        let signed = false;

        // Add new unsigned note to patient record
        var currentlyEditingEntryId = this.props.patient.addClinicalNote(date, subject, hospital, clinician, content, signed);
        this.setState({currentlyEditingEntryId: currentlyEditingEntryId});
        
        // Deselect note in the clinical notes view
        this.props.updateSelectedNote(null);
    }

    // save the note after every keypress. Invoked by FluxNotesEditor.
    saveNoteOnKeypress = () => {
        // Don't start saving until there is content in the editor
        if(!Lang.isNull(this.props.documentText) && !Lang.isUndefined(this.props.documentText)){
            if(Lang.isEqual(this.state.currentlyEditingEntryId, -1)){
                this.saveEditorContentsToNewNote();    
            } else {
                this.updateExistingNote();
            }
        }
    }

    // Gets called when clicking on one of the notes in the clinical notes view
    openNote = (isInProgressNote, note) => {
        // Don't start saving until there is content in the editor
        if(!Lang.isNull(this.props.documentText) && !Lang.isUndefined(this.props.documentText)  && this.props.documentText.length > 0){
            if(Lang.isEqual(this.state.currentlyEditingEntryId, -1)){
                this.saveEditorContentsToNewNote();    
            } else {
                this.updateExistingNote();
            }
        }
        this.setState({currentlyEditingEntryId: note.entryInfo.entryId});
        // the lines below are duplicative
        this.props.updateSelectedNote(note);
        this.props.loadNote(note);

        // If the note selected is an In-Progress note, switch to the context tray e;se use the clinical-notes view
        if (isInProgressNote) {
            this.toggleView("context-tray");
        } else {
            this.toggleView("clinical-notes");
        }
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
                        <span
                            className="button-hover clinical-notes-btn"
                            onClick={() => { this.toggleView("clinical-notes") }}
                        >
                            Clinical notes
                            <img className="icon-arrow-left" alt="left arrow" src={iconArrowLeft} />
                        </span>

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

                        {this.renderSortSelection()}
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
                    <FontAwesome name="plus" />
                    <span>New note</span>
                </div>
            </div>
        );
    }

    renderInProgressNotes() {
        return this.inProgressNotes.map((note, i) => this.renderInProgressNote(note, i));
    }

    renderInProgressNote(note, i) {
        const selected = this.props.selectedNote === note;
      /*  console.log("in renderInProgressNoteSVG");
        console.log(note);
        console.log(selected);*/

        return (
            <div className={`note in-progress-note${selected ? " selected" : ""}`} key={i} onClick={() => { this.openNote(true, note) }}>
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
                <div className="sort-label">Sort by </div>

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
        const selected = this.props.selectedNote === item;

        return (
            <div className={`note existing-note${selected ? " selected" : ""}`} key={i} onClick={() => { this.openNote(false, item) }}>
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

    // Main render method
    render() {
        // If the note viewer is editable then we want to be able to edit notes and view the context tray
        if (this.props.isNoteViewerEditable) {
            return (
                <div>
                    {this.renderNoteAssistantContent(this.props.noteAssistantMode)}
                </div>
            );

            // If the note viewer is read only the we want to be able to view the clinical notes
        } else {
            return (
                <div>
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
    handleSummaryItemSelected: PropTypes.func
};
