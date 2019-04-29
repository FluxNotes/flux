import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import IconsChart from '../../visualizations/IconsChart/IconsChart';

import './TreatmentOptionsOutcomesIcons.css';

export default class TreatmentOptionsOutcomesIcons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTreatmentType: 'alone',
            selectedTreatment: null
        };
    }

    selectIconsTreatment = (type, treatment) => {
        this.setState({
            selectedTreatmentType: type,
            selectedTreatment: treatment
        });
    }

    getNumSurvive = (treatment, timescale) => {
        const { includedTreatmentData, comparedTreatmentData } = this.props;

        let totalNumSurvive;
        let totalPatients;
        let index = -1;
        if (!treatment || treatment === includedTreatmentData[0].displayName) {
            totalNumSurvive = includedTreatmentData[0][timescale];
            totalPatients = includedTreatmentData[0].totalPatients;
        } else {
            index = comparedTreatmentData.findIndex(el => el.displayName === treatment);
            totalNumSurvive = comparedTreatmentData[index][timescale];
            totalPatients = comparedTreatmentData[index].totalPatients;
        }

        const numSurvive = Math.floor(totalNumSurvive / totalPatients * 100);
        return { numSurvive, index };
    }

    render() {
        const { includedTreatmentData, comparedTreatmentData, timescaleToggle } = this.props;
        const { selectedTreatmentType, selectedTreatment } = this.state;

        if (includedTreatmentData.length === 0) {
            return <div className="treatment-options-outcomes-icons note">No included treatment chosen.</div>;
        }

        const survivalMap = { 1: 'oneYrSurvival', 3: 'threeYrSurvival', 5: 'fiveYrSurvival' };
        const includedTreatmentName = includedTreatmentData[0].displayName;
        const treatment = selectedTreatment ? selectedTreatment : includedTreatmentName;
        const combinedTreatmentNames = _.map(comparedTreatmentData, 'displayName');
        const { numSurvive: includedNumSurvive } = this.getNumSurvive(includedTreatmentName, survivalMap[timescaleToggle]);
        const { numSurvive: selectedNumSurvive, index: selectedIndex } = this.getNumSurvive(treatment, survivalMap[timescaleToggle]);
        const additionalNumSurvive = selectedNumSurvive - includedNumSurvive;

        let normalizedNumSideEffects = 0;
        let normalizedSideEffects = [];
        if (selectedIndex >= 0) {
            const totalReporting = comparedTreatmentData[selectedIndex].sideEffects.totalReporting;
            const totalPatients = comparedTreatmentData[selectedIndex].totalPatients;
            normalizedNumSideEffects = Math.round(totalReporting / totalPatients * 100);

            const effects = comparedTreatmentData[selectedIndex].sideEffects.effects;
            Object.keys(effects).forEach(key => {
                normalizedSideEffects.push({
                    name: key,
                    numEffects: Math.round(effects[key] / totalPatients * 100)
                });
            });
            normalizedSideEffects.sort((a, b) => b.numEffects - a.numEffects);
        }

        return (
            <div className="treatment-options-outcomes-icons">
                <IconsChart
                    type={selectedTreatmentType}
                    numSurvive={selectedNumSurvive}
                    additionalNumSurvive={additionalNumSurvive}
                    selectedIndex={selectedIndex + 1}
                    treatment={treatment}
                />

                <div className="icons-interaction">
                    <div className="interaction-selection interaction-included">
                        <div
                            className="treatment-name-group"
                            onClick={() => this.selectIconsTreatment('alone', includedTreatmentName)}>
                            {treatment === includedTreatmentName && <FontAwesome className="selected-icon" name="caret-right" />}
                            <span className={`treatment-name ${treatment === includedTreatmentName ? 'selected' : ''}`}>
                                {includedTreatmentName} alone
                            </span>
                        </div>
                    </div>

                    {combinedTreatmentNames.map((treatmentName, i) =>
                        <div className="interaction-selection interaction-combined" key={i}>
                            <div
                                className={`treatment-name-group index-color-${i + 1}`}
                                onClick={() => this.selectIconsTreatment('additional', treatmentName)}>
                                {treatment === treatmentName && <FontAwesome className="selected-icon" name="caret-right" />}
                                <span className={`treatment-name ${treatment === treatmentName ? 'selected' : ''}`}>
                                    + {treatmentName}
                                </span>
                            </div>

                            {treatment === treatmentName &&
                                <div className={`interaction-display index-color-${i + 1}`}>
                                    <div className="additional-survive-group">
                                        <span className={`additional-survive index-color-${i + 1}`}>
                                            {Math.abs(additionalNumSurvive)}
                                        </span>
                                        additional patient
                                        {Math.abs(additionalNumSurvive) !== 1 ? 's ' : ' '}
                                        {additionalNumSurvive >= 0 ? 'survive' : 'die'}
                                        {Math.abs(additionalNumSurvive) === 1 ? 's' : ''}
                                    </div>

                                    <div className="side-effects-group">
                                        <div className="side-effects">
                                            {normalizedNumSideEffects} of 100 patients suffer side effects
                                        </div>

                                        <div className="side-effects-list">
                                            {normalizedSideEffects.map((effect, j) =>
                                                <div className={`list-item index-color-${i + 1}`} key={j}>
                                                    <div className="item-name">{effect.name}</div>
                                                    <div className="item-effect">{effect.numEffects}</div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

TreatmentOptionsOutcomesIcons.propTypes = {
    includedTreatmentData: PropTypes.array.isRequired,
    comparedTreatmentData: PropTypes.array.isRequired,
    timescaleToggle: PropTypes.number.isRequired
};
