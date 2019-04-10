import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import MaterialButton from 'material-ui/Button';
import Lang from 'lodash';
import FontAwesome from 'react-fontawesome';
import ContextTray from '../context/ContextTray';
import PickListOptionsPanel from '../panels/PickListOptionsPanel';
import Button from '../elements/Button';
import NotesIndexer from '../patientControl/NotesIndexer';
import moment from 'moment';
import './NoteAssistant.css';

export default class NoteAssistant extends Component {
    constructor(props) {
        super(props);
        // TODO: uncomment this when renderMoreNotesButton is reactivated
        // this.maxNotesToDisplay = 100;
        this.state = {
            sortIndex: 0,
            // insertingTemplate indicates whether a shortcut or template is being inserted
            // false indicates a shortcut is being inserted
            // true indicates a template is being inserted
            insertingTemplate: false,
            searchResultNoteId: null,
            highlightedNoteIds: []
        };
        // On creating of NoteAssistant, check if the note viewer is editable
        if (this.props.isNoteViewerEditable) {
            // Check if the clinical notes view mode is active and if it is, set the notes button to selected, otherwise select the context button
            if (this.props.noteAssistantMode === "clinical-notes") {
                this.onNotesToggleButtonClicked();
            } else if (this.props.noteAssistantMode === "poc") {
                this.onPointOfCareButtonClicked();
            } else {
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
        } else if (nextProps.noteAssistantMode === "poc") {
            this.onPointOfCareButtonClicked();
        } else {
            this.onNotesToggleButtonClicked();
        }

        if (nextProps.noteAssistantMode === "pick-list-options-panel") {
            this.disableAllButtons();
        } else if (!nextProps.isNoteViewerEditable) {
            this.disableContextToggleButton();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchSelectedItem) {
            const newNote = nextProps.searchSelectedItem;
            this.openNote(!newNote.signed, newNote)
            this.props.setSearchSelectedItem(null);
        }
        if (nextProps.updatedEditorNote && this.refs[nextProps.updatedEditorNote.entryInfo.entryId]) {
            const isVisible = this.isScrolledIntoView(this.refs[nextProps.updatedEditorNote.entryInfo.entryId]);
            if (!isVisible) {
                this.refs[nextProps.updatedEditorNote.entryInfo.entryId].scrollIntoView();
            }
        }

        const previousNoteAssistantSuggestions = this.props.searchSuggestions.filter(s => s.section === 'Clinical Notes' && s.valueTitle !== 'Subsection' && s.valueTitle !== 'Section');
        const nextNoteAssistantSuggestions = nextProps.searchSuggestions.filter(s => s.section === 'Clinical Notes' && s.valueTitle !== 'Subsection' && s.valueTitle !== 'Section');

        if (!Lang.isEqual(previousNoteAssistantSuggestions, nextNoteAssistantSuggestions)) {
            const highlightedNoteIds = nextNoteAssistantSuggestions.map(s => s.note.entryInfo.entryId);
            this.setState({ highlightedNoteIds });
        }
    }

    isScrolledIntoView(elem){
        let el = elem;
        var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height;
        el = el.parentNode;
        let bottom = top + height;
      do {
        rect = el.getBoundingClientRect();
        if ((top > rect.bottom || top < rect.top)) return false;
        // Check if the element is out of view due to a container scrolling
        if (bottom < rect.top || bottom > rect.bottom) return false
        el = el.parentNode;
      } while (el !== document.body);
      // Check its within the document viewport
      return top <= document.documentElement.clientHeight;
    }


    // Sorts the notes in chronological order with the most recent first (so that it shows up first in the clinical notes list)
    notesTimeSorter(a, b) {
        let a_date;
        let b_date;

        if (Lang.isUndefined(a.signedOn) || Lang.isNull(a.signedOn)) {
            a_date = a.entryInfo.creationTime.value;
        } else {
            a_date = a.signedOn;
        }

        if (Lang.isUndefined(b.signedOn) || Lang.isNull(b.signedOn)) {
            b_date = b.entryInfo.creationTime.value;
        } else {
            b_date = b.signedOn;
        }

        const a_startTime = new moment(a_date, "D MMM YYYY");
        const b_startTime = new moment(b_date, "D MMM YYYY");
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

    setInsertingTemplate = (insertingTemplate) => {
        this.setState({ insertingTemplate });
        this.props.updateShowTemplateView(false);
    }

    onPointOfCareButtonClicked() {
        this.notes_btn_classname = "toggle-button";
        this.notes_stroke = "#AAAAAA";
        this.notes_disabled = false;
        this.context_btn_classname = "toggle-button";
        this.context_fill = "#AAAAAA";
        this.context_disabled = false;
        this.poc_btn_classname = 'toggle-button-selected';
        this.poc_stroke = "#FFFFFF";
        this.poc_fill = "#FFFFFF"
        this.poc_disabled = false;
    }

    onNotesToggleButtonClicked() {
        this.notes_btn_classname = "toggle-button-selected";
        this.notes_stroke = "#FFFFFF";
        this.notes_disabled = false;
        this.context_btn_classname = "toggle-button";
        this.context_fill = "#AAAAAA";
        this.context_disabled = false;
        this.poc_btn_classname = 'toggle-button';
        this.poc_stroke = "#AAAAAA";
        this.poc_fill = "#AAAAAA"
        this.poc_disabled = false;
    }

    onContextToggleButtonClicked() {
        this.notes_btn_classname = "toggle-button";
        this.notes_stroke = "#AAAAAA";
        this.notes_disabled = false;
        this.context_btn_classname = "toggle-button-selected"
        this.context_fill = "#FFFFFF";
        this.context_disabled = false;
        this.poc_btn_classname = 'toggle-button';
        this.poc_stroke = "#AAAAAA";
        this.poc_fill = "#AAAAAA"
        this.poc_disabled = false;
    }

    disableContextToggleButton() {
        this.notes_btn_classname = "toggle-button-selected";
        this.notes_stroke = "#FFFFFF";
        this.notes_disabled = false;
        this.context_btn_classname = "toggle-button-disabled";
        this.context_disabled = true;
        this.context_fill = "#FFFFFF";
        this.poc_btn_classname = 'toggle-button-disabled';
        this.poc_stroke = "#FFFFFF";
        this.poc_fill = "#FFFFFF"
        this.poc_disabled = true;
    }

    disableAllButtons() {
        this.notes_btn_classname = "toggle-button-disabled";
        this.notes_stroke = "#FFFFFF";
        this.notes_disabled = true;
        this.context_btn_classname = "toggle-button-disabled";
        this.context_disabled = true;
        this.context_fill = "#FFFFFF";
        this.poc_btn_classname = 'toggle-button-disabled';
        this.poc_stroke = "#FFFFFF";
        this.poc_fill = "#FFFFFF"
        this.poc_disabled = true;
    }

    // Update the selected index for the sort drop down
    selectSort(sortIndex) {
        this.setState({ sortIndex });
    }

    // Gets called when clicking on the "new note" button
    handleOnNewNoteButtonClick = () => {
        this.props.openNewNote();
        this.toggleView("context-tray");

    }

    // Gets called when clicking on one of the notes in the clinical notes view
    openNote = (isInProgressNote, note) => {
        this.props.openExistingNote(isInProgressNote, note);

        // If the note selected is an In-Progress note, switch to the context tray else use the clinical-notes view
        if (isInProgressNote) {
            this.toggleView("context-tray");
        } else {
            this.toggleView("clinical-notes");
        }
    }

    deleteSelectedNote = () => {
        this.props.searchIndex.removeDataBySection('Open Note');
        this.props.deleteSelectedNote();
    }

    onSearchSuggestionHighlighted = (suggestion, shouldReset=false) => {
        this.toggleView('clinical-notes');
        if(shouldReset) {
            this.setState({
                searchResultNoteId: null
            });
        } else {
            this.setState({
                searchResultNoteId: suggestion.note.entryInfo.entryId
            }, () => {
                const domNodeRef = this.refs[suggestion.note.entryInfo.entryId];
                if (domNodeRef && domNodeRef.scrollIntoView) {
                    domNodeRef.scrollIntoView();
                }
            });
        }
    }

    onSearchSuggestionClicked = (suggestion) => {
        this.openNote(!suggestion.note.signed, suggestion.note);
    }

    // Render the content for the Note Assistant panel
    renderNoteAssistantContent(noteAssistantMode) {
        const allNotes = this.props.patient.getNotes();
        const numberOfPreviousSignedNotes = Lang.filter(allNotes, o => o.signed).length;
        const notesIndexer = new NotesIndexer();
         // Temporarily disabling opening source note on click
        notesIndexer.indexData('Clinical Notes', '', allNotes, this.props.searchIndex, this.onSearchSuggestionHighlighted, null); //this.onSearchSuggestionClicked
        switch (noteAssistantMode) {
            case "poc":
                return (
                    <div>
                    </div>
                )
            // Render the context tray
            case "context-tray":
                return (
                    <div>
                        <ContextTray
                            contextManager={this.props.contextManager}
                            onShortcutClicked={this.props.updateContextTrayItemToInsert}
                            patient={this.props.patient}
                            setInsertingTemplate={this.setInsertingTemplate}
                            shortcutManager={this.props.shortcutManager}
                            showTemplateView={this.props.showTemplateView}
                            updateShowTemplateView={this.props.updateShowTemplateView}
                        />
                        {this.props.isNoteViewerEditable ? this.renderDeleteNoteButton() : null}
                    </div>
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

            // Render the pick list options panel which allows users to select options for the pick lists
            case "pick-list-options-panel": {
                return this.renderPickListOptions();
            }
            default:
                console.error(`note assistant mode ${noteAssistantMode} is not a valid mode`);
                return "";
        }
    }

    renderPickListOptions() {
        return (
            <PickListOptionsPanel
                arrayOfPickLists={this.props.arrayOfPickLists}
                contextManager={this.props.contextManager}
                insertingTemplate={this.state.insertingTemplate}
                setInsertingTemplate={this.setInsertingTemplate}
                updateContextTrayItemToInsert={this.props.updateContextTrayItemToInsert}
                updateSelectedPickListOptions={this.props.updateSelectedPickListOptions}
                updateNoteAssistantMode={this.props.updateNoteAssistantMode}
                setUndoTemplateInsertion={this.props.setUndoTemplateInsertion}
                changeShortcutType={this.props.changeShortcutType}
            />
        );
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
        const inProgressNotes = Lang.filter(this.props.patient.getNotes(), o => !o.signed);

        return inProgressNotes.map((note, i) => this.renderInProgressNote(note, i));
    }

    renderInProgressNote(note, i) {
        let selected = Lang.isEqual(this.props.selectedNote, note);
        let searchedFor = note.entryInfo.entryId === this.state.searchResultNoteId;
        // if we have closed the note, selected = false
        if (Lang.isEqual(this.props.noteClosed, true)) {
            selected = false;
        }

        return (
            <div ref={note.entryInfo.entryId} className={`note in-progress-note${selected ? " selected" : ""}${searchedFor ? " search-result" : ""}`} key={i} onClick={() => {
                this.openNote(true, note)
            }}>
                <div className="in-progress-text">In progress note</div>
                <div className="in-progress-note-date">{note.entryInfo.creationTime.value}</div>
                <div className="in-progress-note-subject">{note.subject}</div>
                <div className="in-progress-note-author">{note.createdBy}</div>
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
                <Button variant="flat" id="delete-note-button" onClick={this.deleteSelectedNote}>
                    <FontAwesome name="trash" id="trash-icon" />
                    <span>Delete Note</span>
                </Button>
            </div>

        );
    }

    // For each clinical note, render the note image with the text
    renderClinicalNote(item, i) {

        // If the note is selected and open, we want to use the selected className
        const selectedClassName = (Lang.isEqual(this.props.selectedNote, item) && Lang.isEqual(this.props.noteClosed, false)) ? "selected" : "";
        // If the note is in our array of search suggestions, we want to use the search-result className
        const searchedForClassName = Lang.includes(this.state.highlightedNoteIds, item.entryInfo.entryId) ? "search-result" : "";
        // If the note is currently highlighted in our searchSuggestions, we want to use the highlighted-result className
        const highlighedSearchSuggestionClassName = (!Lang.isEmpty(this.props.highlightedSearchSuggestion)
            && this.props.highlightedSearchSuggestion.section === "Clinical Notes"
            && this.props.highlightedSearchSuggestion.valueTitle !== "Section"
            && this.props.highlightedSearchSuggestion.valueTitle !== "Subsection"
            && Lang.isEqual(this.props.highlightedSearchSuggestion.note.entryInfo.entryId, item.entryInfo.entryId)
            && Lang.includes(this.state.highlightedNoteIds, item.entryInfo.entryId)) ? "highlighted-result" : "";

        return (

            <div
                ref={item.entryInfo.entryId}
                className={`note existing-note ${selectedClassName} ${searchedForClassName} ${highlighedSearchSuggestionClassName}`}
                key={i}
                onClick={() => {
                    this.openNote(false, item)
                }}
            >
                <div className="existing-note-date">{item.signedOn}</div>
                <div className="existing-note-subject">{item.subject}</div>
                <div className="existing-note-author">{item.createdBy}</div>

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
                <Button variant="raised" className="more-notes-btn">
                    View {numberofMissingNotes} more clinical note{numberofMissingNotes > 1 ? 's' : ''}
                </Button>
            );
        }
    }

    renderToggleButtons() {
        return (
            <div className="toggle-buttons-container">
                <MaterialButton
                    variant="raised"
                    id="notes-btn"
                    className={"toggle-button first-button " + this.notes_btn_classname}
                    disabled={this.notes_disabled}
                    onClick={() => {
                        this.toggleView("clinical-notes")
                    }}>
                    <svg viewBox="0 0 19 19">
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Group-Copy" transform="translate(0, 2)" stroke={this.notes_stroke}
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
                    variant="raised"
                    id="context-btn"
                    className={"toggle-button inside-button " + this.context_btn_classname}
                    disabled={this.context_disabled}
                    onClick={() => {
                        this.toggleView("context-tray")
                    }}>
                    <svg viewBox="0 0 32 32" fill="none">
                        <g id="tray - shortcuts selected" transform="translate(0, 2)" fill={this.context_fill}>
                            <path id="@ copy 7" fill-rule="evenodd" clip-rule="evenodd" d="M30.1787 12.8908C30.1787 14.5666 29.915 16.0988 29.3877 17.4875C28.8603 18.8762 28.1191 19.9572 27.1641 20.7307C26.209 21.5041 25.1045 21.8908 23.8506 21.8908C22.9248 21.8908 22.1221 21.6447 21.4424 21.1526C20.7627 20.6604 20.3057 19.9924 20.0713 19.1487H19.8604C19.2861 20.0627 18.5772 20.7483 17.7334 21.2053C16.8896 21.6623 15.9404 21.8908 14.8857 21.8908C12.9756 21.8908 11.4727 21.2756 10.377 20.0451C9.28124 18.8147 8.7334 17.1506 8.7334 15.0529C8.7334 12.6389 9.45995 10.6789 10.9131 9.17307C12.3662 7.6672 14.3174 6.91428 16.7666 6.91428C17.6572 6.91428 18.6445 6.99338 19.7285 7.15158C20.8125 7.30978 21.7764 7.52951 22.6201 7.81076L22.2334 15.9846V16.4065C22.2334 18.2815 22.8428 19.219 24.0615 19.219C24.9873 19.219 25.7227 18.6213 26.2676 17.426C26.8125 16.2307 27.085 14.7073 27.085 12.8557C27.085 10.8518 26.6748 9.09104 25.8545 7.57346C25.0342 6.05587 23.8682 4.88694 22.3564 4.06662C20.8447 3.2463 19.1104 2.83615 17.1533 2.83615C14.6572 2.83615 12.4863 3.35177 10.6406 4.38303C8.79491 5.41428 7.38575 6.8879 6.41309 8.80392C5.44042 10.7199 4.9541 12.9436 4.9541 15.4748C4.9541 18.8733 5.8623 21.4865 7.67871 23.3147C9.49513 25.1428 12.1025 26.0569 15.501 26.0569C18.0908 26.0569 20.792 25.5295 23.6045 24.4748V27.3576C21.1435 28.3655 18.4658 28.8694 15.5713 28.8694C11.2353 28.8694 7.8545 27.7004 5.42871 25.3625C3.00292 23.0246 1.79004 19.7639 1.79004 15.5803C1.79004 12.5217 2.44628 9.80003 3.75879 7.41525C5.0713 5.03048 6.89061 3.2053 9.2168 1.93967C11.543 0.674035 14.1767 0.0412292 17.1182 0.0412292C19.6611 0.0412292 21.9258 0.568568 23.9121 1.62326C25.8984 2.67795 27.4394 4.18087 28.5352 6.13205C29.6309 8.08323 30.1787 10.3361 30.1787 12.8908ZM12.1084 15.1233C12.1084 17.8537 13.1807 19.219 15.3252 19.219C17.5869 19.219 18.8232 17.5022 19.0342 14.0686L19.2451 9.8674C18.5068 9.66818 17.7158 9.56857 16.8721 9.56857C15.3721 9.56857 14.2031 10.0666 13.3652 11.0627C12.5273 12.0588 12.1084 13.4123 12.1084 15.1233Z"/>
                        </g>
                    </svg>
                </MaterialButton>
                <MaterialButton
                    variant="raised"
                    id="poc-btn"
                    className={"toggle-button last-button " + this.poc_btn_classname}
                    disabled={this.poc_disabled}
                    onClick={() => {
                        this.toggleView("poc")
                    }}>
                    <svg viewBox="0 -2 19 19">
                        <g id="icon-export" stroke={this.poc_stroke} strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="Artboard" stroke={this.poc_stroke}>
                                <g id="tray---POC-selected" transform="translate(0, 1)">
                                    <g id="Group">
                                        <rect id="Rectangle-Copy" fillRule="nonzero" x="10.5" y="0.5" width="8" height="3.28571429"></rect>
                                        <rect id="Rectangle-Copy-2" fill={this.poc_stroke} fillRule="nonzero" x="0.5" y="0.5" width="8" height="3.28571429"></rect>
                                        <rect id="Rectangle-Copy-4" fill={this.poc_stroke} fillRule="nonzero" x="10.5" y="5.85714286" width="8" height="3.28571429"></rect>
                                        <rect id="Rectangle-Copy-3" fillRule="nonzero" x="0.5" y="5.85714286" width="8" height="3.28571429"></rect>
                                        <rect id="Rectangle-Copy-6" fillRule="nonzero" x="10.5" y="11.2142857" width="8" height="3.28571429"></rect>
                                        <rect id="Rectangle-Copy-5" fillRule="nonzero" x="0.5" y="11.2142857" width="8" height="3.28571429"></rect>
                                    </g>
                                </g>
                            </g>
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
        // If the editor is read only because we need to select picklists, then we need the note assistant mode to open the portal
        let noteAssistantMode = "clinical-notes";
        if (this.props.isNoteViewerEditable || this.props.noteAssistantMode === 'pick-list-options-panel') {
            noteAssistantMode = this.props.noteAssistantMode;
        }
        const noteAssistantDisabledClass = this.props.isAppBlurred ? 'content-disabled' : '';
        return (
            <div className={`note-assistant-wrapper ${noteAssistantDisabledClass}`}>
                {this.renderToggleButtons()}
                <div className="note-assistant-content-wrapper">
                    {this.renderNoteAssistantContent(noteAssistantMode)}
                </div>
            </div>
        );
    }
}

NoteAssistant.propTypes = {
    arrayOfPickLists: PropTypes.array.isRequired,
    changeShortcutType: PropTypes.func.isRequired,
    closeNote: PropTypes.func.isRequired,
    currentlyEditingEntryId: PropTypes.number.isRequired,
    contextManager: PropTypes.object.isRequired,
    contextTrayItemToInsert: PropTypes.string,
    deleteSelectedNote: PropTypes.func.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired,
    handleUpdateArrayOfPickLists: PropTypes.func.isRequired,
    handleUpdateEditorWithNote: PropTypes.func.isRequired,
    isAppBlurred: PropTypes.bool,
    isNoteViewerEditable: PropTypes.bool.isRequired,
    loadNote: PropTypes.func.isRequired,
    loginUsername: PropTypes.string.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    noteAssistantMode: PropTypes.string.isRequired,
    noteClosed: PropTypes.bool.isRequired,
    patient: PropTypes.object.isRequired,
    searchIndex: PropTypes.object.isRequired,
    searchSelectedItem: PropTypes.object,
    searchSuggestions: PropTypes.array,
    selectedNote: PropTypes.object,
    setLayout: PropTypes.func.isRequired,
    setNoteClosed: PropTypes.func.isRequired,
    setNoteViewerEditable: PropTypes.func.isRequired,
    setNoteViewerVisible: PropTypes.func.isRequired,
    setOpenClinicalNote: PropTypes.func.isRequired,
    setSearcbSelectedItem: PropTypes.func,
    setUndoTemplateInsertion: PropTypes.func.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    shouldEditorContentUpdate: PropTypes.bool.isRequired,
    showTemplateView: PropTypes.bool.isRequired,
    structuredFieldMapManager: PropTypes.object.isRequired,
    updateNoteAssistantMode: PropTypes.func.isRequired,
    updateSelectedNote: PropTypes.func.isRequired,
    updateContextTrayItemToInsert: PropTypes.func.isRequired,
    updateSelectedPickListOptions: PropTypes.func.isRequired,
    updatedEditorNote: PropTypes.object,
    updateErrors: PropTypes.func.isRequired,
    updateShowTemplateView: PropTypes.func.isRequired
};
