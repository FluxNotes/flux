import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import numberWithCommas from '../../utils/numberWithCommas';

import TreatmentOptionsSelector from '../../components/TreatmentOptionsSelector/TreatmentOptionsSelector';
import SimilarPatientsSelector from '../../components/SimilarPatientsSelector/SimilarPatientsSelector';
import TreatmentOptionsOutcomes from '../../components/TreatmentOptionsOutcomes/TreatmentOptionsOutcomes';

import {
    initializeSimilarPatientProps,
    selectSimilarPatientOption,
    selectAllCategorySimilarPatientOptions,
    selectAllSimilarPatientOptions,
    processSimilarPatientOutcomes,
    selectTreatments
} from '../../../actions/mcode';

import './TreatmentOptionsVisualizer.css';


export class TreatmentOptionsVisualizer extends Component {
    componentDidMount() {
        const { patient, condition, initializeSimilarPatientProps, processSimilarPatientOutcomes } = this.props;

        initializeSimilarPatientProps(patient, condition);
        processSimilarPatientOutcomes();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.similarPatientProps !== this.props.similarPatientProps ||
            nextProps.includedTreatments !== this.props.includedTreatments ||
            nextProps.comparedTreatments !== this.props.comparedTreatments
          ) {
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
            similarPatientProps,
            totalPatients,
            totalSimilarPatients,
            similarPatientTreatments,
            includedTreatments,
            includedTreatmentData,
            comparedTreatments,
            comparedTreatmentData,
            selectSimilarPatientOption,
            selectAllSimilarPatientOptions,
            selectAllCategorySimilarPatientOptions,
            selectTreatments
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
                        patient={patient}
                        condition={condition}
                        similarPatientProps={similarPatientProps}
                        selectSimilarPatientOption={selectSimilarPatientOption}
                        selectAllCategorySimilarPatientOptions={selectAllCategorySimilarPatientOptions}
                        selectAllSimilarPatientOptions={selectAllSimilarPatientOptions}
                    />
                </TreatmentOptionsSelector>

                <TreatmentOptionsOutcomes
                    similarPatientTreatments={similarPatientTreatments}
                    includedTreatments={includedTreatments}
                    includedTreatmentData={includedTreatmentData}
                    comparedTreatments={comparedTreatments}
                    comparedTreatmentData={comparedTreatmentData}
                    selectTreatments={selectTreatments}
                />
            </div>
        );
    }
}

TreatmentOptionsVisualizer.propTypes = {
    condition: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired,
    similarPatientProps: PropTypes.object.isRequired,
    totalPatients: PropTypes.number.isRequired,
    totalSimilarPatients: PropTypes.number.isRequired,
    similarPatientTreatments: PropTypes.array.isRequired,
    includedTreatments: PropTypes.array.isRequired,
    includedTreatmentData: PropTypes.array.isRequired,
    comparedTreatments: PropTypes.array.isRequired,
    comparedTreatmentData: PropTypes.array.isRequired,
    initializeSimilarPatientProps: PropTypes.func.isRequired,
    selectSimilarPatientOption: PropTypes.func.isRequired,
    selectAllCategorySimilarPatientOptions: PropTypes.func.isRequired,
    selectAllSimilarPatientOptions: PropTypes.func.isRequired,
    processSimilarPatientOutcomes: PropTypes.func.isRequired,
    selectTreatments: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        initializeSimilarPatientProps,
        selectSimilarPatientOption,
        selectAllCategorySimilarPatientOptions,
        selectAllSimilarPatientOptions,
        processSimilarPatientOutcomes,
        selectTreatments
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        similarPatientProps: state.mcode.similarPatientProps,
        totalPatients: state.mcode.totalPatients,
        totalSimilarPatients: state.mcode.totalSimilarPatients,
        similarPatientTreatments: state.mcode.similarPatientTreatments,
        includedTreatments: state.mcode.includedTreatments,
        includedTreatmentData: state.mcode.includedTreatmentData,
        comparedTreatments: state.mcode.comparedTreatments,
        comparedTreatmentData: state.mcode.comparedTreatmentData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentOptionsVisualizer);
