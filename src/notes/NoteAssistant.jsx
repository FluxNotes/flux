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
                        <Paper className="note-new" onClick={() => {
                            this.test()
                        }}>
                            {this.renderNoteSVG()}
                            <span><i className="fa fa-plus" aria-hidden="true"></i>New note</span>
                        </Paper>

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

                {this.renderNoteSVG()}

                <table className="notes-table">
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
            </Paper>
        );
    }

    renderNoteSVG() {
        return (
            <svg width="160" height="17">
                <defs>
                    <filter id="f1" x="0" y="0" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20"/>
                        <feBlend in="SourceGraphic" in2="offOut" mode="normal"/>
                    </filter>
                </defs>
                <rect x="144" y="0" rx="2" ry="2" width="17" height="17"
                      fill="white" stroke="#999" strokeWidth="1" opacity="0.5" filter="url(#f1)"/>
                <line x1="145" y1="0" x2="200" y2="52" stroke="#999" strokeWidth="1" filter="url(#f1)"/>
            </svg>
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