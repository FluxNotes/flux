import FluxMedicationPrescription from '../../../../src/model/medication/FluxMedicationPrescription';
import {expect} from 'chai';
import util from 'util';

const medicationJson = {
    "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d",
    "entryId": "9",
    "entryType":    [   "http://standardhealthrecord.org/medication/MedicationPrescription",
                    "http://standardhealthrecord.org/base/Request",
                    "http://standardhealthrecord.org/base/Action" ],
    "focalSubject": {"entryType": "http://standardhealthrecord.org/demographics/PersonOfRecord", "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d", "entryId": "1"},
    "medication": { "value": { "value": {"coding": [{"value": "42512", "displayText": {"value":"Adriamycin"}}]}}},
    "dosage": {     "amountPerDose": {"value": 60, "units": {"coding": [{"value": "mg/m2"}]}},
                "timingOfDoses": {"value": 6, "units": "cycles"},
                "doseAsNeededIndicato": false},
    "status": "completed",
    "requestedPerformanceTime": {   "timePeriodStart": "10 FEB 2012",
                                "timePeriodEnd": "20 AUG 2012"},
    "reason": [ {"entryType": "http://standardhealthrecord.org/condition/Condition", "shrId": "788dcbc3-ed18-470c-89ef-35ff91854c7d", "entryId": "8"} ],
    "originalCreationDate": "01 DEC 2013",
    "lastUpdateDate": "01 DEC 2013"
};

let med = new FluxMedicationPrescription(medicationJson);

describe('getRequestedPerformanceTime()', function() { 
    it('should return an object with timePeriodStart and timePeriodEnd', function() {
        const expectedRequestedPerformanceTime = {
            timePeriodStart: "10 FEB 2012",
            timePeriodEnd: "20 AUG 2012"
        };
        expect(med.requestedPerformanceTime)
            .to.be.a('object')
            .eql(expectedRequestedPerformanceTime);
    });
});

describe('getMedication()', function() {
    it('should return "Adriamycin"', function() {
        expect(med.medication)
            .to.be.an('string')
            .eql('Adriamycin');
    });
});

describe('getAmountPerDose()', function() { 
    it('should return an object with value and units', function() {
        const expectedAmountPerDose = {
            value: 60,
            units: "mg/m2"
        };
        expect(med.amountPerDose)
            .to.be.a('object')
            .eql(expectedAmountPerDose);
    });
});

describe('getTimingOfDoses()', function() { 
    it('should return an object with value and units', function() {
        const expectedTimingOfDoses = {
            value: 6,
            units: "cycles"
        };
        expect(med.timingOfDoses)
            .to.be.a('object')
            .eql(expectedTimingOfDoses);
    });
});