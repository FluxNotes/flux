import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../elements/Button';
import Lang from 'lodash';

import './ClinicalEventSelection.css';

class ClinicalEventSelection extends Component {

    componentWillMount() {
        if (Lang.isNull(this.props.clinicalEvent) || Lang.isUndefined(this.props.clinicalEvent)) {
            this.selectClinicalEvent(this.props.possibleClinicalEvents[0]);
        }
    }

    selectClinicalEvent(clinicalEvent) {
        this.props.setFullAppState('clinicalEvent', clinicalEvent);
    }

    buttonClass(buttonType) {
        let clinicalEvent = this.props.clinicalEvent;
        let klass = `button ${buttonType}`;

        if (clinicalEvent === buttonType) {
            klass += " active";
        }

        return klass;
    }

    renderClinicalEventList() {
        return (
            <Row start="xs" className="clinical-event-buttons">
                {this.props.possibleClinicalEvents.map((setting, index) => {
                    return (
                        <Col xs className={this.buttonClass(setting)} key={`clinical-event-${setting}`} id={`${setting}-button`}>
                            <Button raised onClick={() => {this.selectClinicalEvent(setting)}}>
                                {titlecase(setting)}
                            </Button>
                        </Col>
                    )
                })}
            </Row>
        )
    }

    render() {
        return  (
            <div id="clinical-event-selection">
                <h3>Event</h3>
                {this.renderClinicalEventList()}
            </div>
        );
    }

}

function titlecase(label) {
  return label.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}


ClinicalEventSelection.propTypes = {
    possibleClinicalEvents: PropTypes.arrayOf(PropTypes.string).isRequired,
    clinicalEvent: PropTypes.string.isRequired,
    setFullAppState: PropTypes.func.isRequired
};

export default ClinicalEventSelection;