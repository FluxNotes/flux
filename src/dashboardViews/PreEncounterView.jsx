import React, {Component} from 'react';
import { Row, Col } from 'react-flexbox-grid';
import SummaryPanel from '../panels/SummaryPanel'
import './PreEncounterView.css';

class PreEncounterView extends Component { 
    render () { 
        return (
            <div id="pre-encounter-view-content">
                <Row center="xs">
                    <Col sm={12} className="full-panel">
                        <SummaryPanel
                            isSingleColumn={false}
                            isWide={true} 
                            {...this.props}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PreEncounterView;