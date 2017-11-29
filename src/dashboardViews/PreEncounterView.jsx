import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import SummaryPanel from '../panels/SummaryPanel'
import NotesPanel from '../panels/NotesPanel';
import './PreEncounterView.css';

class PreEncounterView extends Component {

    render () { 
        return (
            <div id="pre-encounter-view-content">
                <Row center="xs">
                    <Col sm={8} className="full-panel">
                        <SummaryPanel
                            isWide={true} 
                            {...this.props}
                        />
                    </Col>
                    <Col sm={4}>
                        <NotesPanel
                            isNoteViewerVisible={false}
                            isNoteViewerEditable={false}
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
            </div>
        );
    }
}

PreEncounterView.proptypes = { 
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
    handleSummaryItemSelected: PropTypes.func.isRequired,
};

export default PreEncounterView;