import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import numberWithCommas from '../../utils/numberWithCommas';
import ServiceManager from '../../../config/ServiceManager';

import TreatmentOptionsSelector from '../../components/TreatmentOptionsSelector/TreatmentOptionsSelector';
import SimilarPatientsSelector from '../../components/SimilarPatientsSelector/SimilarPatientsSelector';
import TreatmentOptionsOutcomes from '../../components/TreatmentOptionsOutcomes/TreatmentOptionsOutcomes';

import {
    initializeSimilarPatientProps,
    processSimilarPatientOutcomes,
    selectAllCategorySimilarPatientOptions,
    selectAllSimilarPatientOptions,
    selectSimilarPatientOption,
    selectSimilarPatientOptionRange,
    setSelectedTreatment
} from '../../../actions/mcode';

import './TreatmentOptionsVisualizer.css';


export class TreatmentOptionsVisualizer extends Component {
    componentDidMount() {
        const { patient, condition, initializeSimilarPatientProps, processSimilarPatientOutcomes } = this.props;
        const service = new ServiceManager().getService('outcomes');
        initializeSimilarPatientProps(patient, condition, service.filters);
        processSimilarPatientOutcomes();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.similarPatientProps !== this.props.similarPatientProps) {
            this.props.processSimilarPatientOutcomes();
        }
    }

    _renderedSimilarPatientsSubtitle(numPatients) {
        return (
            <div>
                <span className="bold">{numPatients}</span> patients
            </div>
        );
    }

    render() {
        const {
            condition,
            patient,
            selectAllCategorySimilarPatientOptions,
            selectAllSimilarPatientOptions,
            selectedTreatment,
            selectSimilarPatientOption,
            selectSimilarPatientOptionRange,
            setSelectedTreatment,
            showSideEffects,
            similarPatientProps,
            similarPatientTreatments,
            similarPatientTreatmentsData,
            timescale,
            totalPatients,
            totalSimilarPatients
        } = this.props;
        return (
            <div className="treatment-options-visualizer">
                <div className="treatment-options-visualizer__info">
                    Outcomes and criteria for {numberWithCommas(totalPatients)} patients
                    with {condition.type} were collected by CancerLinQ
                </div>

                <TreatmentOptionsSelector
                    title="Similar patients"
                    subTitle={this._renderedSimilarPatientsSubtitle(numberWithCommas(totalSimilarPatients))}>
                    <SimilarPatientsSelector
                        condition={condition}
                        patient={patient}
                        selectAllCategorySimilarPatientOptions={selectAllCategorySimilarPatientOptions}
                        selectAllSimilarPatientOptions={selectAllSimilarPatientOptions}
                        selectSimilarPatientOption={selectSimilarPatientOption}
                        selectSimilarPatientOptionRange={selectSimilarPatientOptionRange}
                        similarPatientProps={similarPatientProps}
                    />
                </TreatmentOptionsSelector>

                <TreatmentOptionsOutcomes
                    selectedTreatment={selectedTreatment}
                    setSelectedTreatment={setSelectedTreatment}
                    showSideEffects={showSideEffects}
                    similarPatientTreatments={similarPatientTreatments}
                    similarPatientTreatmentsData={similarPatientTreatmentsData}
                    timescale={timescale}
                />
            </div>
        );
    }
}

TreatmentOptionsVisualizer.propTypes = {
    condition: PropTypes.object.isRequired,
    initializeSimilarPatientProps: PropTypes.func.isRequired,
    patient: PropTypes.object.isRequired,
    processSimilarPatientOutcomes: PropTypes.func.isRequired,
    selectAllCategorySimilarPatientOptions: PropTypes.func.isRequired,
    selectAllSimilarPatientOptions: PropTypes.func.isRequired,
    selectedTreatment: PropTypes.object,
    selectSimilarPatientOption: PropTypes.func.isRequired,
    selectSimilarPatientOptionRange: PropTypes.func.isRequired,
    setSelectedTreatment: PropTypes.func.isRequired,
    showSideEffects: PropTypes.bool.isRequired,
    similarPatientProps: PropTypes.object.isRequired,
    similarPatientTreatments: PropTypes.array.isRequired,
    similarPatientTreatmentsData: PropTypes.array.isRequired,
    timescale: PropTypes.array.isRequired,
    totalPatients: PropTypes.number.isRequired,
    totalSimilarPatients: PropTypes.number.isRequired
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initializeSimilarPatientProps,
        processSimilarPatientOutcomes,
        selectAllCategorySimilarPatientOptions,
        selectAllSimilarPatientOptions,
        selectSimilarPatientOption,
        selectSimilarPatientOptionRange,
        setSelectedTreatment
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        selectedTreatment: state.mcode.selectedTreatment,
        showSideEffects: state.mcode.showSideEffects,
        similarPatientProps: state.mcode.similarPatientProps,
        similarPatientTreatments: state.mcode.similarPatientTreatments,
        similarPatientTreatmentsData: state.mcode.similarPatientTreatmentsData,
        timescale: state.mcode.timescale,
        totalPatients: state.mcode.totalPatients,
        totalSimilarPatients: state.mcode.totalSimilarPatients
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentOptionsVisualizer);
