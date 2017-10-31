import React, {Component} from 'react';

import { Row, Col } from 'react-flexbox-grid';

import FluxNotesEditor from '../notes/FluxNotesEditor';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import ContextTray from '../context/ContextTray';
import TimelinePanel from '../timeline/TimelinePanel';

class PostEncounterView extends Component { 
    render () { 
        return (
            <div className="pre-encounter-view-content">
                <Row center="xs">
                    <Col sm={4}>
                        <DataSummaryPanel
                            patient={this.props.appState.patient}
                            condition={this.props.appState.condition}
                            summaryMetadata={this.props.appState.summaryMetadata}
                            onItemClicked={this.props.handleSummaryItemSelected}
                            allowItemClick={true}
                        />
                    </Col>

                    <Col sm={5}>
                        <FluxNotesEditor
                            onSelectionChange={this.props.handleSelectionChange}
                            newCurrentShortcut={this.props.newCurrentShortcut}
                            itemInserted={this.props.itemInserted}
                            itemToBeInserted={this.props.appState.SummaryItemToInsert}
                            patient={this.props.appState.patient}
                            contextManager={this.props.contextManager}
                            shortcutManager={this.props.shortcutManager}
                            updateErrors={this.props.updateErrors}
                            errors={this.props.appState.errors}
                        />
                    </Col>

                    <Col sm={3}>
                        <ContextTray
                            ref={(comp) => { this.contextTray = comp; }}
                            patient={this.props.appState.patient}
                            contextManager={this.props.contextManager}
                            shortcutManager={this.props.shortcutManager}
                            onShortcutClicked={this.props.handleSummaryItemSelected}
                        />
                    </Col>
                </Row>

                <Row center="xs">
                    <Col sm={12}>
                        <TimelinePanel
                            patient={this.props.appState.patient} 
                            condition={this.props.appState.condition}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PostEncounterView;