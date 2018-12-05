import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TreatmentOptionsSelector from '../TreatmentOptionsSelector/TreatmentOptionsSelector';
import './TreatmentOptionsVisualizer.css';

export default class TreatmentOptionsVisualizer extends Component {
    render() {
        const { totalPatients, condition } = this.props;

        return (
            <div className="treatment-options-visualizer">
                <div className="treatment-options-visualizer__info">
                    Outcomes and criteria for {totalPatients} with {condition.type} were collected with
                    Cancer Linq <a href="#">...more</a>
                </div>

                <TreatmentOptionsSelector
                    title="Similar Patients">
                    Similar Patients placeholder
                </TreatmentOptionsSelector>

                <TreatmentOptionsSelector
                    title="Filter">
                    Filter placeholder
                </TreatmentOptionsSelector>

                <TreatmentOptionsSelector
                    title="Features">
                    Features placeholder
                </TreatmentOptionsSelector>
            </div>
        );
    }
}

TreatmentOptionsVisualizer.propTypes = {
    totalPatients: PropTypes.number,
    condition: PropTypes.object
}

TreatmentOptionsVisualizer.defaultProps = {
    totalPatients: 156765 // TODO: hook up
}
