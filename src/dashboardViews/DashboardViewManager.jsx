import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PatientSummaryPanel from '../summary/PatientSummaryPanel';
import PreEncounterView from './PreEncounterView';
// import EncounterView from './EncounterView';
import PostEncounterView from './PostEncounterView';
const EncounterView = PostEncounterView;


class DashboardViewManager extends Component { 
    // Based on the current clinical event, return a React Component to render
    renderCurrentView = (currentClinicalEvent) => { 
        switch(currentClinicalEvent){ 
        case "pre-encounter":
            return <PreEncounterView {...this.props} />
        case "encounter":
            return <EncounterView {...this.props} />
        case "post-encounter":
            return <PostEncounterView {...this.props} />
        default: 
            console.error(`current clinical event ${currentClinicalEvent} is not a valid event`);  
            return "";
        }
    }

    render() { 
        return (
            <Grid className="FullApp-content" fluid>
                <Row center="xs">
                    <Col sm={12}>
                        <PatientSummaryPanel
                            patient={this.props.appState.patient}
                            possibleClinicalEvents={this.props.possibleClinicalEvents}
                            clinicalEvent={this.props.appState.clinicalEvent}
                            setFullAppState={this.props.setFullAppState} />
                    </Col>
                </Row>
                {this.renderCurrentView(this.props.appState.clinicalEvent)}
            </Grid>
        );
    }
}

export default DashboardViewManager;