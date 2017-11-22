import React, {Component} from 'react';
import ContextTray from '../../context/ContextTray';

import './NoteAssistant.css';

class NoteAssistant extends Component {
    render() {

        return (
            <div>
                <span className="button-hover"><i className="fa fa-arrow-left"></i></span> Note Assistant Component Here
                <ContextTray
                    patient={this.props.patient}
                    contextManager={this.props.contextManager}
                    shortcutManager={this.props.shortcutManager}
                    onShortcutClicked={this.props.handleSummaryItemSelected}
                />
            </div>
        );
    }
}

export default NoteAssistant;