import {
    expect
} from 'chai';
import _ from 'lodash'
import CLQOutcomesService from '../../../../mcode-pilot/services/outcomes/CLQOutcomesService'
import BreastMainTreatmentDiabetesHypertensionJaneV05 from '../../../../dataaccess/BreastMainTreatmentDiabetesHypertensionJaneV05.json';
import PatientRecord from '../../../../patient/PatientRecord.jsx';
import getProps from '../../../../mcode-pilot/utils/recordToProps'
import '../../../../model/init.js';
import expectedFilter from './filter.json'
import response from './response.json'
import rows from './rows.json'
import processed from './processed.json';
const nock = require('nock');


describe("CLQOutcomesService", () => {

    let clqService = new CLQOutcomesService({
        serviceUrl: "http://localhost/outcomes"
    });

    let patient = new PatientRecord(BreastMainTreatmentDiabetesHypertensionJaneV05);
   
    
    let similarPatientProps = getProps(patient, patient.getActiveConditions()[0])
    console.log(similarPatientProps);
    
    // select everything in the options 
    _.forIn(similarPatientProps.demographic.options, function (value, key) {
        value.selected = true
    });
    _.forIn(similarPatientProps.pathology.options, function (value, key) {
        value.selected = true
    });

    beforeEach(() => {
        nock.disableNetConnect();
    })

    afterEach(() => {
        nock.cleanAll();
        nock.enableNetConnect(); // just to be sure this doesn't break any other tests anywhere else
    });

    it("Should be able to create demographics filter", () => {
        let clqFilter = clqService.buildDemographicsFilter(similarPatientProps);
        console.log(clqFilter);
        expect(_.isEqual(clqFilter, expectedFilter.demographics)).to.be.true
    });

    it("Should be able to create tumormarker filter filter", () => {
        let clqFilter = clqService.buildTumorMakersFilter(similarPatientProps);
        expect(_.isEqual(clqFilter, expectedFilter.tumorMarkers)).to.be.true
    });

    it("Should be able to create diagnosis filter", () => {
        let clqFilter = clqService.buildDiagnosisFilter(similarPatientProps);
        expect(_.isEqual(clqFilter, expectedFilter.diagnosis)).to.be.true

    });

    it("Should be able to translate results to rows", () => {
        let clqResults = clqService.generateOutcomeData(response.outcomes.survival.data)
        expect(_.isEqual(clqResults, rows)).to.be.true
    });

    it("Should be able to process results", () => {
        let clqResults = clqService.processResults(response, [{
            "code": "A",
            "displayName": "A",
            "codeSystem": "2.16.840.1.113883.6.88",
            "codeSystemName": "RXNORM"
        }], [{
                "code": "A",
                "displayName": "A",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RXNORM"
            },
            {
                "code": "B",
                "displayName": "B",
                "codeSystem": "2.16.840.1.113883.6.88",
                "codeSystemName": "RXNORM"
            }
        ])
        console.log(clqResults);
        
        expect(_.isEqual(clqResults, processed)).to.be.true
    });

    it("Should be able to take a request and return results", (done) => {

        const scope = nock('http://localhost/')
            .post('/outcomes')
            .reply(200, response)

        clqService.processSimilarPatientOutcomes(similarPatientProps).then((clqResults) => {
            expect(_.isEqual(clqResults, processed)).to.be.true
            scope.done();
            done();
        }).catch((err) => {
            console.log(err);
            scope.done();
            done();
        })


    });
});