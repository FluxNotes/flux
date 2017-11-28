import React, {Component} from 'react';
import ContextTray from '../context/ContextTray';
import Button from '../elements/Button';

import './NoteAssistant.css';


class NoteAssistant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteAssistantMode: "context-tray"
        };
    }

    toggleView() {
        this.setState(
            {
                noteAssistantMode: "clinical-notes"
            }
        );
    }

    renderNoteAssistantContent(noteAssistantMode) {

        switch (noteAssistantMode) {
            case "context-tray":
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
            case "clinical-notes":
                return (
                    <div>
                        <Button raised
                                className="resume-note-btn"
                        >Resume in-progress note</Button>
                        <table>
                            <tbody>
                            {this.renderedNotes()}
                            </tbody>
                        </table>
                    </div>
                );

            default:
                console.error(`note assistant mode ${noteAssistantMode} is not a valid mode`);
                return "";
        }
    }

    renderedNotes() {
        return this.props.patient.getNotes().map((item, i) =>

            <tr className="existing-note-entry" key={i}>
                <td className="existing-note-date" width="15%">{item.date}</td>
                <td className="existing-note-metadata" width="55%">
                    <span id="existing-note-subject">{item.subject}</span> <br/>
                    <span>{item.hospital}</span> <br/>
                    <span>{item.clinician}</span>
                </td>
                <td className="existing-note-button" width="30%">
                    <Button raised
                            className="existing-note-btn"
                            key={i}
                    >View Note</Button>
                </td>
            </tr>
        );
    }

    render() {

        return (
            <div>
                {this.renderNoteAssistantContent(this.state.noteAssistantMode)}
            </div>
        );
    }
}

export default NoteAssistant;