import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TreatmentOptionsVisualizer extends Component {
    render() {
        const { totalPatients, condition } = this.props;
        console.debug('props', this.props);

        return (
            <div className="treatment-options-visualizer">
                <div>
                    Outcomes and criteria for {totalPatients} with {condition.type} were collected with
                    Cancer Linq <a href="#">...more</a>
                </div>

                <p>&gt; Similar Patients</p>
                <p>&gt; Filter</p>
                <p>&gt; Features</p>
            </div>
        );
    }
}

TreatmentOptionsVisualizer.propTypes = {
    totalPatients: PropTypes.number,
    condition: PropTypes.object
}

TreatmentOptionsVisualizer.defaultProps = {
    totalPatients: 156765
}
