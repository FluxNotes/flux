import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import TargetedDataPanel from '../panels/TargetedDataPanel';
import NotesPanel from '../panels/NotesPanel';
import './PostEncounterView.css';

class PostEncounterView extends Component { 
    render () { 
        return (
            <Row center="xs" id="post-encounter-view-content">
                <Col sm={4} className="right-border-box">
                    <div className="fitted-panel panel-content dashboard-panel">
                        <TargetedDataPanel
                            isWide={false}
                            {...this.props}
                        />
                    </div>
                </Col>
                <Col sm={8}>
                    <NotesPanel
                        isNoteViewerVisible={true}
                        isNoteViewerEditable={true}
                        handleSelectionChange={this.props.handleSelectionChange}
                        newCurrentShortcut={this.props.newCurrentShortcut}
                        itemInserted={this.props.itemInserted}
                        summaryItemToBeInserted={this.props.appState.SummaryItemToInsert}
                        patient={this.props.appState.patient}
                        contextManager={this.props.contextManager}
                        shortcutManager={this.props.shortcutManager}
                        updateErrors={this.props.updateErrors}
                        errors={this.props.appState.errors}
                        handleSummaryItemSelected={this.props.handleSummaryItemSelected}
                    />
                </Col>
            </Row>
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