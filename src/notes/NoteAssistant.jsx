import React, {Component} from 'react';
import ContextTray from '../context/ContextTray';

import './NoteAssistant.css';


class NoteAssistant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noteAssistantMode: "context-tray"
        };
    }

    toggleView() {
        console.log("clicked button");

        if (this.state.noteAssistantMode === "context-tray" ) {
            this.setState(
                {
                    noteAssistantMode: "clinical-notes"
                }
            );
        } else if (this.state.noteAssistantMode === "clinical-notes") {
            this.setState(
                {
                    noteAssistantMode: "context-tray"
                }
            )
        }

    }

    renderNoteAssistantContent(noteAssistantMode) {

        switch (noteAssistantMode) {
            case "context-tray":
                return (
                    <div>
                        <span className="button-hover" onClick={() => {
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
                        <span className="button-hover" onClick={() => {
                            this.toggleView()
                        }}><i className="fa fa-arrow-left"></i>Context Tray</span>
                        <p>not a context tray</p>
                    </div>
                );

            default:
                console.error(`note assistant mode ${noteAssistantMode} is not a valid mode`);
                return "";
        }
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