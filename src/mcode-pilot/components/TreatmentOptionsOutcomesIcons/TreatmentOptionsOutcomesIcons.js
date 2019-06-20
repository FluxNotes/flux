import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import IconsChart from '../../visualizations/IconsChart/IconsChart';

import './TreatmentOptionsOutcomesIcons.css';

export default class TreatmentOptionsOutcomesIcons extends Component {
    constructor(props) {
        super(props);

        this.state = { selectedTreatment: props.similarPatientTreatmentsData[0] };
    }

    selectIconsTreatment = treatmentName => {
        const { similarPatientTreatmentsData } = this.props;
        const treatment = similarPatientTreatmentsData.filter(treatmentData => treatmentData.displayName === treatmentName)[0];
        this.setState({ selectedTreatment: treatment });
    }

    render() {
        const { similarPatientTreatmentsData, timescaleToggle } = this.props;
        const { selectedTreatment } = this.state;
        const survivalMap = { 1: 'oneYrSurvival', 3: 'threeYrSurvival', 5: 'fiveYrSurvival' };
        const timescale = survivalMap[timescaleToggle];
        const similarPatientTreatmentNames = _.map(similarPatientTreatmentsData, 'displayName');
        const numSurvive = Math.floor(selectedTreatment[timescale] / selectedTreatment.totalPatients * 100);

        return (
            <div className="treatment-options-outcomes-icons">
                <div className="icons-interaction">
                    {similarPatientTreatmentNames.map((treatmentName, i) =>
                        <div
                            className={`interaction-selection interaction-combined ${selectedTreatment.displayName === treatmentName ? 'active' : ''}`}
                            key={i}>
                            <div
                                className="treatment-name-group"
                                onClick={() => this.selectIconsTreatment(treatmentName)}>
                                {selectedTreatment === treatmentName && <FontAwesome className="selected-icon" name="caret-right" />}
                                <span className={`treatment-name ${selectedTreatment === treatmentName ? 'selected' : ''}`}>
                                    {treatmentName}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                <IconsChart
                    numSurvive={numSurvive}
                    treatment={selectedTreatment.displayName}
                    yearsSurvival={timescaleToggle}
                />
            </div>
        );
    }
}

TreatmentOptionsOutcomesIcons.propTypes = {
    similarPatientTreatmentsData: PropTypes.array.isRequired,
    timescaleToggle: PropTypes.number.isRequired
};
