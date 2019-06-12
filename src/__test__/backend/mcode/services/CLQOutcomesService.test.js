
import {expect} from 'chai';
import _ from 'lodash'
import CLQOutcomesService from '../../../../mcode-pilot/services/outcomes/CLQOutcomesService'
import BreastMainTreatmentDiabetesHypertensionJaneV05 from '../../../../dataaccess/BreastMainTreatmentDiabetesHypertensionJaneV05.json';
import PatientRecord from '../../../../patient/PatientRecord.jsx';
import getProps from '../../../../mcode-pilot/utils/recordToProps'
import '../../../../model/init.js';
import expectedFilter from './filter.json'
describe("CLQOutcomesService", () => {
  
    let clqService = new CLQOutcomesService({});
    
    let patient = new PatientRecord(BreastMainTreatmentDiabetesHypertensionJaneV05);
    let similarPatientProps = getProps(patient, patient.getActiveConditions()[0])
    // select everything in the options 
    _.forIn(similarPatientProps.demographic.options, function (value, key) {
        value.selected = true
    });
    _.forIn(similarPatientProps.pathology.options, function (value, key) {
        value.selected = true
    });

    it("Should be able to create demographics filter", () => {
        let clqFilter = clqService.buildDemographicsFilter(similarPatientProps);
        expect(_.isEqual(clqFilter,expectedFilter.demographics) ).to.be.true
    });

    it("Should be able to create tumormarker filter filter", () => {
        let clqFilter = clqService.buildTumorMakersFilter(similarPatientProps);
        expect(_.isEqual(clqFilter,expectedFilter.tumorMarkers) ).to.be.true
    });

    it("Should be able to create diagnosis filter", () => {
        let clqFilter = clqService.buildDiagnosisFilter(similarPatientProps);
        expect(_.isEqual(clqFilter,expectedFilter.diagnosis) ).to.be.true
        
    });

    it("Should be able to translate results to rows", () => {
        let serviceResults = {} 
        let clqResults = clqService.processResults(serviceResults)
        expect(clqResults).to.equal({})
    });
  });
