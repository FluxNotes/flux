import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import FluxNotesEditor from '../notes/FluxNotesEditor';
import ContextTray from '../context/ContextTray';
import SummaryPanel from '../panels/SummaryPanel';
import './PostEncounterView.css';

class PostEncounterView extends Component { 
    render () { 
        return (
            <div id="post-encounter-view-content">
                <Row center="xs">
                    <Col sm={4} className="right-border-box">
                        <div className="fitted-panel panel-content dashboard-panel">
                            <SummaryPanel
                                isWide={false}
                                {...this.props}
                            />
                        </div>
                    </Col>

                    <Col sm={5} >
                        <div className="fitted-panel panel-content dashboard-panel">
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
                        </div>
                    </Col>

                    <Col sm={3}>
                        <div className="fitted-panel panel-content dashboard-panel">
                            <ContextTray
                                ref={(comp) => { this.contextTray = comp; }}
                                patient={this.props.appState.patient}
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

PostEncounterView.proptypes = { 
    possibleClinicalEvents: PropTypes.array.isRequired,
    dataAccess: PropTypes.object.isRequired,
    summaryMetadata: PropTypes.object.isRequired,
    shortcutManager: PropTypes.object.isRequired,
    contextManager: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    setFullAppState: PropTypes.func.isRequired,
    updateErrors: PropTypes.func.isRequired,
    onContextUpdate: PropTypes.func.isRequired,
    itemInserted: PropTypes.func.isRequired,
    newCurrentShortcut: PropTypes.func.isRequired,
    handleShortcutUpdate: PropTypes.func.isRequired,
    handleStructuredFieldEntered: PropTypes.func.isRequired,
    handleStructuredFieldExited: PropTypes.func.isRequired,
    handleSelectionChange: PropTypes.func.isRequired,
    handleSummaryItemSelected: PropTypes.func.isRequired
};

export default PostEncounterView;