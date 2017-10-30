import React, {Component} from 'react';

import { Row, Col } from 'react-flexbox-grid';

import DataSummaryPanel from '../summary/DataSummaryPanel';
import TimelinePanel from '../timeline/TimelinePanel';

class PreEncounterView extends Component { 
    render () { 
        return (
            <div className="pre-encounter-view-content">
                <Row center="xs">
                    <Col sm={12}>
                        <DataSummaryPanel
                            patient={this.props.appState.patient}
                            condition={this.props.appState.condition}
                            summaryMetadata={this.props.appState.summaryMetadata}
                            onItemClicked={this.props.handleSummaryItemSelected}
                            allowItemClick={true}
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

export default PreEncounterView;