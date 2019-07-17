import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import _ from 'lodash';

import IconsChart from '../../visualizations/IconsChart/IconsChart';
import CompareUnselectedIcon from '../TreatmentOptionsOutcomesTable/CompareUnselectedIcon';
import CompareSelectedIcon from '../TreatmentOptionsOutcomesTable/CompareSelectedIcon';
import PersonIcon from '../TreatmentOptionsOutcomesTable/PersonIcon';

import './TreatmentOptionsOutcomesIcons.css';

export default class TreatmentOptionsOutcomesIcons extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = { selectedTreatment: props.similarPatientTreatmentsData[0] };
    // }

    // componentDidUpdate(prevProps) {
    //     const { similarPatientTreatmentsData } = this.props;
    //     if (similarPatientTreatmentsData !== prevProps.similarPatientTreatmentsData) {
    //         this.resetSelectedTreatment();
    //     }
    // }

    // resetSelectedTreatment = () => {
    //     const { similarPatientTreatmentsData } = this.props;
    //     const { selectedTreatment } = this.state;
    //     if (similarPatientTreatmentsData.length === 0) return;

    //     let newSelectedTreatment;
    //     if (!selectedTreatment) {
    //         newSelectedTreatment = similarPatientTreatmentsData[0];
    //     } else {
    //         newSelectedTreatment = similarPatientTreatmentsData.filter(treatment =>
    //             treatment.displayName === selectedTreatment.displayName)[0];
    //     }

    //     this.setState({ selectedTreatment: newSelectedTreatment });
    // }

    getNumSurvive = (treatment, timescale) => {
        const { similarPatientTreatmentsData } = this.props;
        let totalNumSurvive;
        let totalPatients;
        let index = -1;
        index = similarPatientTreatmentsData.findIndex(el => el.displayName === treatment.displayName);
        totalPatients = similarPatientTreatmentsData[index].totalPatients;
        totalNumSurvive = similarPatientTreatmentsData[index].survivorsPerYear[timescale];

        const numSurvive = Math.floor(totalNumSurvive / totalPatients * 100);
        return { numSurvive, index };
    }

    // selectIconsTreatment = treatmentName => {
    //     const { similarPatientTreatmentsData } = this.props;
    //     const treatment = similarPatientTreatmentsData.filter(treatmentData => treatmentData.displayName === treatmentName)[0];
    //     this.setState({ selectedTreatment: treatment });
    // }

    renderTreatmentSelector = treatment => {
        const { selectedTreatment } = this.props;
        const treatmentName = treatment.displayName;
        const treatmentClass =
            `interaction-selection interaction-combined ${selectedTreatment.displayName === treatmentName ? 'active' : ''}`;

        return (
            <div className={treatmentClass} key={treatment.id}>
                <div
                    className="treatment-name-group"
                    onClick={() => this.selectIconsTreatment(treatmentName)}>
                    {selectedTreatment === treatmentName && <FontAwesome className="selected-icon" name="caret-right" />}
                    <span className={`treatment-name ${selectedTreatment === treatmentName ? 'selected' : ''}`}>
                        {treatmentName}
                    </span>
                </div>
            </div>
        );
    }

    renderInteractionHeader = () => {
        const { selectedTreatment } = this.props;
        return (
            <div className="icons-interaction__header">
                <div className="flex-3 flex-padding compare-header">
                    {selectedTreatment ? 'comparing against' : 'compare'}
                </div>

                <div className="flex-1 flex-padding user-icon"><PersonIcon /></div>
                <div className="flex-1 flex-padding">Overall survival</div>
            </div>
        );
    }

    renderInteractionRow = (treatment, isSelectedTreatment = false) => {
        const { setSelectedTreatment, similarPatientTreatmentsData } = this.props;
        const totalPatientsAllTreatments =
            _.reduce(similarPatientTreatmentsData, (sum, treatment) => sum + treatment.totalPatients, 0);
        const normalizedTotalPatients = Math.floor(treatment.totalPatients / totalPatientsAllTreatments * 100);

        return (
            <div
                className={`icons-interaction__row flex ${isSelectedTreatment ? 'selected-treatment' : ''}`}
                key={treatment.id}>
                <div className="flex flex-3 flex-padding treatment-name">
                    <div className="select-icon">
                        {isSelectedTreatment
                            ? <CompareSelectedIcon onClick={() => setSelectedTreatment(null)} />
                            : <CompareUnselectedIcon onClick={() => setSelectedTreatment(treatment)} />
                        }
                    </div>

                    <div className="display-name">{treatment.displayName}</div>
                </div>

                <div className="flex-1 flex-padding total-patients">({normalizedTotalPatients})</div>
                <div className="flex-1 flex-padding overall-survival"></div>
            </div>
        );
    }

    render() {
        const { selectedTreatment, similarPatientTreatmentsData, timescaleToggle } = this.props;
        if (similarPatientTreatmentsData.length === 0) {
            return <div className="helper-text">No data. Choose a different selection or similar patients criteria.</div>;
        }

        const { numSurvive: selectedNumSurvive } = selectedTreatment ? this.getNumSurvive(selectedTreatment, timescaleToggle) : 0;

        return (
            <div className="treatment-options-outcomes-icons">
                <div className="icons-interaction">
                    {this.renderInteractionHeader()}
                    {selectedTreatment && this.renderInteractionRow(selectedTreatment, true)}
                    {similarPatientTreatmentsData.map(treatmentData => {
                        if (!selectedTreatment || treatmentData.id !== selectedTreatment.id) {
                            return this.renderInteractionRow(treatmentData);
                        }
                        return null;
                    })}
                </div>

                <IconsChart
                    numSurvive={selectedNumSurvive}
                    treatment={selectedTreatment ? selectedTreatment.displayName : null}
                    yearsSurvival={timescaleToggle}
                />
            </div>
        );
    }
}

TreatmentOptionsOutcomesIcons.propTypes = {
    selectedTreatment: PropTypes.object,
    setSelectedTreatment: PropTypes.func.isRequired,
    similarPatientTreatmentsData: PropTypes.array.isRequired,
    timescale: PropTypes.array.isRequired,
    timescaleToggle: PropTypes.string.isRequired,
};
