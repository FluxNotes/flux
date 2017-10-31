import React, {Component} from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import DataSummaryPanel from '../summary/DataSummaryPanel';
import ContextTray from '../context/ContextTray';
import TimelinePanel from '../timeline/TimelinePanel';

import './PostEncounterView.css';

class PostEncounterView extends Component { 
    render () { 
        return (
            <div id="post-encounter-view-content">
                <Row center="xs">
                    <Col sm={4}>
                        <Paper className="fitted-panel panel-content dashboard-panel">
                            <DataSummaryPanel
                                patient={this.props.appState.patient}
                                condition={this.props.appState.condition}
                                summaryMetadata={this.props.appState.summaryMetadata}
                                onItemClicked={this.props.handleSummaryItemSelected}
                                allowItemClick={true}
                            />
                        </Paper>
                    </Col>

                    <Col sm={5} >
                        <Paper className="fitted-panel panel-content dashboard-panel">
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
                        </Paper>
                    </Col>

                    <Col sm={3}>
                        <Paper className="fitted-panel panel-content dashboard-panel">
                            <ContextTray
                                ref={(comp) => { this.contextTray = comp; }}
                                patient={this.props.appState.patient}
                                contextManager={this.props.contextManager}
                                onShortcutClicked={this.props.handleSummaryItemSelected}
                            />
                        </Paper>
                    </Col>
                </Row>

                <Row center="xs">
                    <Col sm={12}>
                        <Paper className="panel-content dashboard-panel" style={{marginBottom: "10px"}}>
                            <TimelinePanel
                                patient={this.props.appState.patient} 
                                condition={this.props.appState.condition}
                            />
                        </Paper>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PostEncounterView;