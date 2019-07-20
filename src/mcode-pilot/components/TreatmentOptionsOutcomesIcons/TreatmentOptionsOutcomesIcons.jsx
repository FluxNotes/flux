import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import IconsChart from '../../visualizations/IconsChart/IconsChart';
import CompareUnselectedIcon from '../TreatmentOptionsOutcomesTable/CompareUnselectedIcon';
import CompareSelectedIcon from '../TreatmentOptionsOutcomesTable/CompareSelectedIcon';
import PersonIcon from '../TreatmentOptionsOutcomesTable/PersonIcon';

import './TreatmentOptionsOutcomesIcons.css';

export default class TreatmentOptionsOutcomesIcons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedTreatment: props.selectedTreatment || props.similarPatientTreatmentsData[0]
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.similarPatientTreatmentsData !== this.props.similarPatientTreatmentsData) {
            const selected = nextProps.selectedTreatment;
            const displayed = this.state.displayedTreatment;

            // if selected treatment no longer in data, set selected treatment to null
            const selectedTreatmentInData =
                selected != null &&
                nextProps.similarPatientTreatmentsData.findIndex(el => el.displayName === selected.displayName) !== -1;
            if (!selectedTreatmentInData) nextProps.setSelectedTreatment(null);

            // if displayed treatment no longer in data, set displayed treatment to first treatment in sorted data
            const displayedTreatmentInData =
                displayed != null &&
                nextProps.similarPatientTreatmentsData.findIndex(el => el.displayName === displayed.displayName) !== -1;
            if (!displayedTreatmentInData) this.setState({ displayedTreatment: nextProps.similarPatientTreatmentsData[0] });
        }
    }

    getNumSurvive = (treatment, timescale) => {
        const { similarPatientTreatmentsData } = this.props;
        const index = this.getTreatmentIndex(treatment);
        const totalPatients = similarPatientTreatmentsData[index] ? similarPatientTreatmentsData[index].totalPatients : 0;
        const totalNumSurvive = similarPatientTreatmentsData[index].survivorsPerYear[timescale] || 0;
        return Math.floor(totalNumSurvive / totalPatients * 100);
    }

    getTreatmentIndex = treatment => {
        const { similarPatientTreatmentsData } = this.props;
        if (!similarPatientTreatmentsData || similarPatientTreatmentsData.length === 0 ||!treatment) return -1;
        return similarPatientTreatmentsData.findIndex(el => el.displayName === treatment.displayName);
    }

    handleSelectTreatment = (event, treatment) => {
        event.stopPropagation();
        const { setSelectedTreatment } = this.props;
        const { displayedTreatment } = this.state;

        if (treatment && (!displayedTreatment || displayedTreatment.displayName !== treatment.displayName)) {
            this.handleDisplayTreatment(treatment);
        }
        setSelectedTreatment(treatment);
    }

    handleDisplayTreatment = treatment => {
        const { displayedTreatment } = this.state;
        if (displayedTreatment && displayedTreatment.id === treatment.id) {
            this.setState({ displayedTreatment: null });
        } else {
            this.setState({ displayedTreatment: treatment });
        }
    }

    renderInteractionHeader = () => {
        const { selectedTreatment } = this.props;
        return (
            <div className="icons-interaction__header">
                <div className="flex-3 flex-padding compare-header">
                    {selectedTreatment ? 'comparing against' : 'compare'}
                </div>

                <div className="flex-1 flex-padding user-icon"><PersonIcon /></div>
                <div className="flex-1 flex-padding overall-survival">Overall survival</div>
            </div>
        );
    }

    renderInteractionRow = (treatment, isSelectedTreatment = false) => {
        if (!treatment) return null;
        const { selectedTreatment, similarPatientTreatmentsData, timescaleToggle } = this.props;
        const { displayedTreatment } = this.state;
        const selectedTreatmentInData = selectedTreatment && this.getTreatmentIndex(selectedTreatment) !== -1;

        const totalPatientsAllTreatments =
            _.reduce(similarPatientTreatmentsData, (sum, treatment) => sum + treatment.totalPatients, 0);
        const normalizedTotalPatients = Math.floor(treatment.totalPatients / totalPatientsAllTreatments * 100);
        const numSurvive = this.getNumSurvive(treatment, timescaleToggle);
        const isDisplayedTreatment = displayedTreatment && displayedTreatment.displayName === treatment.displayName;
        const rowClass = `icons-interaction__row flex ${isSelectedTreatment ? 'selected-treatment' : ''} ${isDisplayedTreatment ? 'displayed-treatment' : ''}`;

        let selectedNumSurvive;
        let numSurviveDiff;
        let numSurviveDiffClass;
        if (selectedTreatmentInData) {
            selectedNumSurvive = this.getNumSurvive(selectedTreatment, timescaleToggle);
            numSurviveDiff = selectedNumSurvive - numSurvive;
            numSurviveDiffClass =
                `diff-num-selected ${numSurviveDiff < 0 ? 'positive' : ''} ${numSurviveDiff > 0 ? 'negative' : ''}`;
        }

        return (
            <div className={rowClass} key={treatment.id} onClick={() => this.handleDisplayTreatment(treatment)}>
                <div className="flex flex-3 flex-padding treatment-name">
                    <div className="select-icon">
                        {isSelectedTreatment
                            ? <CompareSelectedIcon onClick={event => this.handleSelectTreatment(event, null)} />
                            : <CompareUnselectedIcon onClick={event => this.handleSelectTreatment(event, treatment)} />
                        }
                    </div>

                    <div className="display-name">{treatment.displayName}</div>
                </div>

                <div className="flex-1 flex-padding total-patients">({normalizedTotalPatients})</div>
                <div className="flex-1 flex-padding overall-survival">
                    {isSelectedTreatment || !selectedTreatment
                        ? <div className="selected-num-survive">{numSurvive}/100</div>
                        : <div className={numSurviveDiffClass}>
                            {numSurviveDiff < 0 ? '+' : ''}
                            {numSurviveDiff > 0 ? '-' : ''}
                            {Math.abs(numSurviveDiff)}
                        </div>
                    }
                </div>
            </div>
        );
    }

    render() {
        const { selectedTreatment, similarPatientTreatmentsData, timescaleToggle } = this.props;
        const { displayedTreatment } = this.state;
        const selectedTreatmentInData = selectedTreatment && this.getTreatmentIndex(selectedTreatment) !== -1;
        const displayedTreatmentInData = displayedTreatment && this.getTreatmentIndex(displayedTreatment) !== -1;
        const selectedIsDisplayed = selectedTreatment && displayedTreatment && selectedTreatment.displayName === displayedTreatment.displayName;

        if (similarPatientTreatmentsData.length === 0) {
            return <div className="helper-text">No data. Choose a different selection or similar patients criteria.</div>;
        }

        let displayedNumSurvive = 0;
        let treatmentToDisplayChart;
        if (displayedTreatmentInData) {
            displayedNumSurvive = this.getNumSurvive(displayedTreatment, timescaleToggle);
            treatmentToDisplayChart = displayedTreatment.displayName;
        }

        let numSurviveDiff;
        if (selectedTreatmentInData && displayedTreatmentInData) {
            const displayedNumSurvive = this.getNumSurvive(displayedTreatment, timescaleToggle);
            const selectedNumSurvive = this.getNumSurvive(selectedTreatment, timescaleToggle);
            numSurviveDiff = selectedNumSurvive - displayedNumSurvive;
        }

        return (
            <div className="treatment-options-outcomes-icons">
                <div className="icons-interaction">
                    {this.renderInteractionHeader()}
                    {selectedTreatmentInData && this.renderInteractionRow(selectedTreatment, true)}
                    {similarPatientTreatmentsData.map(treatmentData => {
                        if (!selectedTreatment || treatmentData.displayName !== selectedTreatment.displayName) {
                            return this.renderInteractionRow(treatmentData);
                        }
                        return null;
                    })}
                </div>

                <IconsChart
                    numSurvive={displayedNumSurvive}
                    numMoreSurvive={!selectedIsDisplayed && numSurviveDiff <= 0 ? Math.abs(numSurviveDiff) : null}
                    numLessSurvive={!selectedIsDisplayed && numSurviveDiff > 0 ? Math.abs(numSurviveDiff) : null}
                    treatment={treatmentToDisplayChart}
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
