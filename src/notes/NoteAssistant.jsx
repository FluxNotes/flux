import React, {Component} from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
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

    test() {
        console.log("clicked on paper");
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
                    <div className="clinical-notes-panel">
                        <Button raised
                                className="resume-note-btn"
                        >Resume in-progress note</Button>
                        {this.renderedNotes()}
                    </div>
                );

            default:
                console.error(`note assistant mode ${noteAssistantMode} is not a valid mode`);
                return "";
        }
    }

    renderedNotes() {
        return this.props.patient.getNotes().map((item, i) =>
            <Paper key={i} className="note" onClick={() => {
                this.test()
            }}>
                <table >
                    <tbody>
                    <tr>
                        <td className="existing-note-date" width="15%">{item.date}</td>
                    </tr>
                    <tr>
                        <td className="existing-note-date" id="existing-note-subject">{item.subject}</td>
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
                {/*<svg width="100" height="100">*/}
                    {/*<circle cx="50" cy="50" r="40" stroke="green"  fill="yellow" />*/}
                {/*</svg>*/}
            </Paper>
        );
    }

    render() {

        if (this.props.isNoteViewerEditable) {
            return (
                <div>
                    {this.renderNoteAssistantContent(this.state.noteAssistantMode)}
                </div>
            );
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