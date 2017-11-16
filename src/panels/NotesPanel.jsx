import React, {Component} from 'react';
import { Row, Col } from 'react-flexbox-grid';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import ContextTray from '../context/ContextTray';

import './NotesPanel.css';

class NotesPanel extends Component {
    render () {
        return (
            <div>
                <Row center="xs">
                <Col sm={7} >
                    <div className="fitted-panel panel-content dashboard-panel">
                        <FluxNotesEditor
                            onSelectionChange={this.props.handleSelectionChange}
                            newCurrentShortcut={this.props.newCurrentShortcut}
                            itemInserted={this.props.itemInserted}
                            itemToBeInserted={this.props.summaryItemToBeInserted}
                            patient={this.props.patient}
                            contextManager={this.props.contextManager}
                            shortcutManager={this.props.shortcutManager}
                            updateErrors={this.props.updateErrors}
                            errors={this.props.errors}
                        />
                    </div>
                </Col>

                <Col sm={5}>
                    <div className="fitted-panel panel-content dashboard-panel">
                        <ContextTray
                            ref={(comp) => { this.contextTray = comp; }}
                            patient={this.props.patient}
                            contextManager={this.props.contextManager}
                            shortcutManager={this.props.shortcutManager}
                            onShortcutClicked={this.props.handleSummaryItemSelected}
                        />
                    </div>
                </Col>
                    </Row>
            </div>
        );
    }
}

export default NotesPanel;