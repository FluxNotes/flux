import React, {Component} from 'react';
import ContextTray from '../context/ContextTray';
import Button from '../elements/Button';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';

import './NoteAssistant.css';

class NoteAssistant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteAssistantMode: "context-tray",
            sortIndex: null,
            maxNotesToDisplay: 3,
            notesNotDisplayed: null,
            notesToDisplay: []
        };
    }

    componentWillMount() {

        // Set default value for sort selection
        this.selectSort(0);

        // Generate notesToDisplay array which will be used to render the notes in clinical notes view
        let allNotes = this.props.patient.getNotes();
        for (let i = 0; i < this.state.maxNotesToDisplay; i++) {
            this.state.notesToDisplay.push(allNotes[i]);
        }

        // Set the number of notes that are not being displayed
        let missingNotes = allNotes.length - this.state.maxNotesToDisplay;

        this.setState({notesNotDisplayed: missingNotes});
    }

    // Switch view. Currently only switching from context tray to clinical notes is available
    // Cannot currently switch from clinical notes view back to current note view
    toggleView() {
        this.setState({noteAssistantMode: "clinical-notes"});
    }

    selectSort(sortIndex) {
        this.setState({sortIndex: sortIndex});
    }

    test() {
        console.log("clicked on new note");
    }

    // Render the content for the Note Assistant panel
    renderNoteAssistantContent(noteAssistantMode) {

        const numberOfPreviousNotes = this.props.patient.getNotes().length;

        switch (noteAssistantMode) {
            case "context-tray":

                // Render the context tray
                return (
                    <div>
                        <span className="button-hover clinical-notes-btn" onClick={() => {
                            this.toggleView()
                        }}><i className="fa fa-arrow-left"></i>Clinical Notes</span>
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

                        {this.renderNewNoteSVG()}

                        <Button raised
                                className="resume-note-btn"
                        >Resume in-progress note</Button>

                        <span className="previous-notes-label">{numberOfPreviousNotes} previous notes</span>

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

    renderSortSelection() {
        return (
            <div className="sort-selection">
                <span className="sort-label">Sort by </span>
                <Select
                    className="sort-select"
                    value={this.state.sortIndex}
                    onChange={(event) => this.selectSort(event.target.value)}
                >
                    <MenuItem className="sort-item" value={0}>Date</MenuItem>
                    <MenuItem className="sort-item" value={1}>Subject</MenuItem>
                    <MenuItem className="sort-item" value={2}>Hospital</MenuItem>
                </Select>
            </div>
        );
    }

    renderNotes() {

        return this.state.notesToDisplay.map((item, i) =>
            this.renderClinicalNoteSVG(item, i)
        );
    }

    renderMoreNotesButton() {
        if (this.state.notesNotDisplayed > 0) {
            return (
                <Button raised
                        className="more-notes-btn"
                >View {this.state.notesNotDisplayed} more clinical note(s)</Button>
            );
        }
    }

    renderClinicalNoteSVG(item, i) {

        return (
            <svg key={i} className="note" width="160px" height="102px" viewBox="0 0 149 102" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path
                        d="M136.405173,0.069612193 L3.37475586,0.069612193 L3.37475586,0.069612193 C1.71790161,0.069612193 0.374755859,1.41275794 0.374755859,3.06961219 L0.374755859,3.06961219 L0.374755859,98.5117187 C0.374755859,100.168573 1.71790161,101.511719 3.37475586,101.511719 L3.37475586,101.511719 L145.882537,101.511719 C147.539392,101.511719 148.882537,100.168573 148.882537,98.5117187 L148.882537,98.5117187 L148.882537,12.5469764 L136.405173,0.069612193 Z"
                        id="path-1"></path>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-23">
                        <g id="Combined-Shape">
                            <use fill="#FFFFFF" fillRule="evenodd"></use>
                            <path stroke="#B3B3B3" strokeWidth="0.5"
                                  d="M136.30162,0.319612193 L3.37475586,0.319612193 C1.8559728,0.319612193 0.624755859,1.55082913 0.624755859,3.06961219 L0.624755859,98.5117187 C0.624755859,100.030502 1.8559728,101.261719 3.37475586,101.261719 L145.882537,101.261719 C147.401321,101.261719 148.632537,100.030502 148.632537,98.5117187 L148.632537,12.6505298 L136.30162,0.319612193 Z"></path>
                        </g>
                        <polyline id="Path-14" stroke="#B3B3B3" strokeWidth="0.5" fill="#FFFFFF"
                                  points="135.968149 0.370008208 135.968149 13.0028388 148.642348 13.0028388"></polyline>
                    </g>
                </g>
                <text className="existing-note-date" x="20" y="20">{item.date}</text>
                <text x="20" y="40" className="existing-note-subject">{item.subject}</text>

                <line x1="10" y1="50" x2="140" y2="50" stroke="#999" strokeWidth="1"/>

                {this.renderMetaDataText(item)}

            </svg>
        );
    }

    renderMetaDataText(item) {

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
            let numberInFirstHalf = Math.ceil(hospitalWordsArray.length/2);

            for (let i=0; i < Math.ceil(hospitalWordsArray.length/2); i++) {
                hospitalFirstArray.push(hospitalWordsArray[i]);
                hospitalFirstArray.push(" ");
            }

            for (let j=numberInFirstHalf; j < hospitalWordsArray.length; j++) {
                hospitalSecondArray.push(hospitalWordsArray[j]);
                hospitalSecondArray.push(" ");
            }

            for (let i=0; i < hospitalFirstArray.length; i++) {
                hospitalFirstString = hospitalFirstString.concat(hospitalFirstArray[i]);
            }

            for (let j=0; j < hospitalSecondArray.length; j++) {
                hospitalSecondString = hospitalSecondString.concat(hospitalSecondArray[j]);
            }

            return (
                <text x="20" y="70" className="existing-note-metadata">
                    <tspan x="20" y="70">{hospitalFirstString}</tspan>
                    <tspan x="20" y="85">{hospitalSecondString}</tspan>
                </text>
            );

        } else {
            hospitalFirstString = item.hospital;

            return (
                <text x="20" y="70" className="existing-note-metadata">
                    <tspan x="20" y="70">{hospitalFirstString}</tspan>
                </text>
            );
        }
    }

    renderNewNoteSVG() {
        return (
            <svg className="note-new" width="160px" height="102px" viewBox="0 0 149 102" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <path
                        d="M136.405173,0.069612193 L3.37475586,0.069612193 L3.37475586,0.069612193 C1.71790161,0.069612193 0.374755859,1.41275794 0.374755859,3.06961219 L0.374755859,3.06961219 L0.374755859,98.5117187 C0.374755859,100.168573 1.71790161,101.511719 3.37475586,101.511719 L3.37475586,101.511719 L145.882537,101.511719 C147.539392,101.511719 148.882537,100.168573 148.882537,98.5117187 L148.882537,98.5117187 L148.882537,12.5469764 L136.405173,0.069612193 Z"
                        id="path-1"></path>
                </defs>
                <svg x="25" y="15" width="11px" height="11px" viewBox="0 0 11 11" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
                        <g id="Group-Copy-3" transform="translate(0.660429, 0.452719)" stroke="#16253E"
                           strokeWidth="1.5552">
                            <path d="M0.465836188,4.96173944 L8.70583619,4.96173944" id="Line"></path>
                            <path d="M4.59517238,1.04666266 L4.59517238,9.28624923" id="Line-Copy"></path>
                        </g>
                    </g>
                </svg>

                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Group-23">
                        <g id="Combined-Shape">
                            <use fill="#FFFFFF" fillRule="evenodd"></use>
                            <path stroke="#B3B3B3" strokeWidth="0.5"
                                  d="M136.30162,0.319612193 L3.37475586,0.319612193 C1.8559728,0.319612193 0.624755859,1.55082913 0.624755859,3.06961219 L0.624755859,98.5117187 C0.624755859,100.030502 1.8559728,101.261719 3.37475586,101.261719 L145.882537,101.261719 C147.401321,101.261719 148.632537,100.030502 148.632537,98.5117187 L148.632537,12.6505298 L136.30162,0.319612193 Z"></path>
                        </g>
                        <polyline id="Path-14" stroke="#B3B3B3" strokeWidth="0.5" fill="#FFFFFF"
                                  points="135.968149 0.370008208 135.968149 13.0028388 148.642348 13.0028388"></polyline>
                    </g>
                </g>
                <text x="40" y="25">New note</text>

            </svg>
        );
    }

    render() {

        // If the note viewer is editable then we want to be able to edit notes and view the context tray
        if (this.props.isNoteViewerEditable) {
            return (
                <div>
                    {this.renderNoteAssistantContent(this.state.noteAssistantMode)}
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

export default NoteAssistant;