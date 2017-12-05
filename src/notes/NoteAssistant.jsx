import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
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
            maxNotesToDisplay: 4,
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

        this.setState({ notesNotDisplayed: missingNotes });
    }

    // Switch view. Currently only switching from context tray to clinical notes is available
    // Cannot currently switch from clinical notes view back to current note view
    toggleView() {
        this.setState({ noteAssistantMode: "clinical-notes" });
    }

    selectSort(sortIndex) {
        this.setState({ sortIndex: sortIndex });
    }

    test() {
        console.log("clicked on new note button");
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
                        <Paper className="note-new" onClick={() => {
                            this.test()
                        }}>
                            <span><i className="fa fa-plus" aria-hidden="true"></i> New note</span>
                            {/*{this.renderNewNoteSVG()}*/}
                        </Paper>
                        <Button raised
                                className="resume-note-btn"
                        >Resume in-progress note</Button>

                        <span className="previous-notes-label">{numberOfPreviousNotes} previous notes</span>

                        {this.renderSortSelection()}

                        {this.renderNotes()}

                        {this.renderMoreNotesButton()}

                        {/*<span*/}
                            {/*className="view-more-notes-label">Notes not displayed: {this.state.notesNotDisplayed}</span>*/}

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
            <Paper key={i} className="note">

                {/*{this.renderClinicalNoteSVG()}*/}

                <table className="notes-table">
                    <tbody>
                    <tr>
                        <td className="existing-note-date" width="15%">{item.date}</td>
                    </tr>
                    <tr>
                        <td className="existing-note-subject" id="existing-note-subject">{item.subject}</td>
                    </tr>
                    <Divider />
                    <tr>
                        <td className="existing-note-metadata" width="55%">
                            <span>{item.hospital}</span> <br/>
                            {/*<span>{item.clinician}</span>*/}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Paper>
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

    renderClinicalNoteSVG() {
        return (
            <svg width="160" height="160">

                <rect x="143" y="0" rx="2" ry="2" width="17" height="17"
                      fill="white" stroke="#999" strokeWidth="1" opacity="0.5"/>
                <line x1="143" y1="0" x2="200" y2="52" stroke="#999" strokeWidth="1"/>

                <text x="20" y="20" fontFamily="sans-serif" fontSize="20px" fill="red">Date</text>
                <text x="20" y="40" fontFamily="sans-serif" fontSize="20px" fill="red">note subject</text>

                <line x1="10" y1="50" x2="150" y2="50" stroke="#999" strokeWidth="1"/>
                <text x="20" y="60" fontFamily="sans-serif" fontSize="20px" fill="red">hospital</text>
            </svg>
        );
    }

    renderNewNoteSVG() {
        return (
            <svg width="11px" height="11px" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="square">
                    <g id="Group-Copy-3" transform="translate(0.660429, 0.452719)" stroke="#16253E"
                       strokeWidth="1.5552">
                        <path d="M0.465836188,4.96173944 L8.70583619,4.96173944" id="Line"></path>
                        <path d="M4.59517238,1.04666266 L4.59517238,9.28624923" id="Line-Copy"></path>
                    </g>
                </g>
                <text x="0" y="0" fontFamily="sans-serif" fontSize="20px" fill="red">New note</text>
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