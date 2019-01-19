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
    processSimilarPatientOutcomes
} from '../../../actions/mcode';

import './TreatmentOptionsVisualizer.css';

// example header object
// TODO: decide on format for this
const headers = [
    {
      "header": "select to compare",
      "type":"thin"
    },
    {
      "header":<span className="fa fa-user user-icon"></span>,
      "type":"center"
    },
    {
      "header": "Overall survival rates",
      "subheaders":["1 yr", "2 yr", "3 yr"]
    },
    {
      "header":"Change in ECOG score"
    },
    {
      "header":"Hospitalization due to side effects",
      "subheaders":["all","leading cause"]
    }
]

export class TreatmentOptionsVisualizer extends Component {
    componentDidMount() {
        const { patient, condition, initializeSimilarPatientProps, processSimilarPatientOutcomes } = this.props;
        const patientAge = patient.getAge();
        const patientAgeAtDiagnosis = patient.getAgeAsOf(new Date(condition.diagnosisDate));

        initializeSimilarPatientProps(patientAge, patientAgeAtDiagnosis, patient.patient.race, patient.patient.gender);
        processSimilarPatientOutcomes();
    }

    renderedSimilarPatientsSubtitle(numPatients) {
        return <div><span className="bold">{numPatients}</span> patients</div>;
    }

    render() {
        const {
            condition,
            patient,
            similarPatientProps,
            totalPatients,
            similarPatients,
            selectSimilarPatientOption,
            selectAllSimilarPatientOptions,
            selectAllCategorySimilarPatientOptions,
            processSimilarPatientOutcomes
        } = this.props;

        return (
            <div className="treatment-options-visualizer">
                <div className="treatment-options-visualizer__info">
                    Outcomes and criteria for {numberWithCommas(totalPatients)} patients
                    with {condition.type} were collected by CancerLinQ
                </div>

                <TreatmentOptionsSelector
                    title="Similar patients"
                    subTitle={this.renderedSimilarPatientsSubtitle(numberWithCommas(similarPatients.length))}>
                    <SimilarPatientsSelector
                        patient={patient}
                        condition={condition}
                        similarPatientProps={similarPatientProps}
                        selectSimilarPatientOption={selectSimilarPatientOption}
                        selectAllCategorySimilarPatientOptions={selectAllCategorySimilarPatientOptions}
                        selectAllSimilarPatientOptions={selectAllSimilarPatientOptions}
                    />
                </TreatmentOptionsSelector>

                <TreatmentOptionsSelector
                    title="Outcomes"
                    subTitle="cancer specific survival rate, ECOG score, Hospitalization due to side effects">
                    <TreatmentOptionsOutcomes
                        headers={headers}
                        similarPatientProps={similarPatientProps}
                        processSimilarPatientOutcomes={processSimilarPatientOutcomes}
                    />
                </TreatmentOptionsSelector>

            </div>
        );
    }
}

TreatmentOptionsVisualizer.propTypes = {
    condition: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired,
    similarPatientProps: PropTypes.object.isRequired,
    totalPatients: PropTypes.number.isRequired,
    similarPatients: PropTypes.array.isRequired,
    initializeSimilarPatientProps: PropTypes.func.isRequired,
    selectSimilarPatientOption: PropTypes.func.isRequired,
    selectAllCategorySimilarPatientOptions: PropTypes.func.isRequired,
    selectAllSimilarPatientOptions: PropTypes.func.isRequired,
    processSimilarPatientOutcomes: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initializeSimilarPatientProps,
    selectSimilarPatientOption,
    selectAllCategorySimilarPatientOptions,
    selectAllSimilarPatientOptions,
    processSimilarPatientOutcomes
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    similarPatientProps: state.mcode.similarPatientProps,
    totalPatients: state.mcode.totalPatients,
    similarPatients: state.mcode.similarPatients
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentOptionsVisualizer);
