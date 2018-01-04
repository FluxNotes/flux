import DataAccess from '../../../src/dataaccess/DataAccess';
import hardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
import hardCodedFHIRPatient from '../../../src/dataaccess/HardCodedFHIRPatient.json';
import PatientRecord from '../../../src/patient/PatientRecord';
//import referenceHardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
import Moment from 'moment';
import {expect} from 'chai';

// reference hard coded Patient
const referenceHardCodedPatient = new PatientRecord(hardCodedPatient);

// Data Access with hard coded read only data source
const hardCodedReadOnlyDataAccess = new DataAccess("HardCodedReadOnlyDataSource");
// The patient shr object
const hardCodedPatientObj = hardCodedReadOnlyDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
// The patient record entry -- should be an shr object
const hardCodedPatientPersonOfRecord = hardCodedPatientObj.getPersonOfRecord();

// reference person of record
const referencePersonOfRecord = referenceHardCodedPatient.getPersonOfRecord();

// new data access with new patient only data source
const newPatientOnlyDataAccess = new DataAccess("NewPatientOnlyDataSource");
// new patient result on data access
const newPatient = newPatientOnlyDataAccess.newPatient();
const newPatientEntries = newPatient.entries;

// Data Access with REST API
const restApiDataAccess = new DataAccess("RestApiDataSource");
const newPatientRest = restApiDataAccess.newPatient();

// Data Access with FHIR
const fhirApiDataAccess = new DataAccess("FHIRApiDataSource");
const newPatientFHIR = fhirApiDataAccess.newPatient();
const referenceHardCodedFHIRPatient = new PatientRecord();
referenceHardCodedFHIRPatient.fromFHIR(hardCodedFHIRPatient);
const fhirReferencePersonOfRecord = referenceHardCodedFHIRPatient.getPersonOfRecord();


describe('create hard coded read only data source', function() {
    it('get demo patient should return the hard coded patient', function () { 
        expect(hardCodedPatientPersonOfRecord)
            .eql(referencePersonOfRecord);
    });
    it('get list of patients should return the hard coded patient', function () { 
        expect(hardCodedReadOnlyDataAccess.getListOfPatients())
            .to.be.an('array')
            .to.deep.include(referenceHardCodedPatient);
    });
    it('new patient should return undefined', function () {
        expect(hardCodedReadOnlyDataAccess.newPatient())
            .to.be.undefined;
    });
    it('savePatient should return undefined', function () {
        expect(newPatientOnlyDataAccess.savePatient(hardCodedPatientObj))
            .to.be.undefined;
    });
});

describe('create new patient only data source', function() {
    it('new patient should return new empty patient', function () {
        expect(newPatientEntries)
            .to.be.an('array')
            .that.is.empty;
    });
    it('getPatient should return undefined', function () {
        expect(newPatientOnlyDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID))
            .to.be.undefined
    });
    it('getListOfPatients should return undefined', function () {
        expect(newPatientOnlyDataAccess.getListOfPatients())
            .to.be.undefined
    });
    it('savePatient should return undefined', function () {
        expect(newPatientOnlyDataAccess.savePatient(newPatient))
            .to.be.undefined
    });
});

describe('use rest api as data source', function() {
    // TODO: This test is commented out because the XMLHttpRequest that we are using to make the synchronous api call
    // does not run in the Node environment. When that is fixed, this test should work again.
    // it('getPatient should return the hard coded patient', function() {
    //     const hardCodedPatientObjectRest = restApiDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
    //     const hardCodedPatientPersonOfRecordRest = hardCodedPatientObjectRest.getPersonOfRecord();
    //     expect(hardCodedPatientPersonOfRecordRest)
    //         .eql(referencePersonOfRecord);
    // });
    it('getListOfPatients should return undefined', function() {
        expect(restApiDataAccess.getListOfPatients())
            .to.be.undefined;
    });
    it('new patient should return undefined', function() {
        expect(newPatientRest)
            .to.be.undefined;
    });
    it('savePatient should return undefined', function() {
        expect(restApiDataAccess.savePatient(newPatientRest))
            .to.be.undefined;
    })
});

describe('use fhir api as data source', function() {
    it('getPatient should return the hard coded fhir patient', function() {
        const hardCodedPatientObjectFHIR = fhirApiDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
        const hardCodedPatientPersonOfRecordFHIR = hardCodedPatientObjectFHIR.getPersonOfRecord();
        expect(hardCodedPatientPersonOfRecordFHIR)
            .eql(fhirReferencePersonOfRecord);
    });
    it('getListOfPatients should return undefined', function() {
        expect(fhirApiDataAccess.getListOfPatients())
            .to.be.undefined;
    });
    it('new patient should return undefined', function() {
        expect(newPatientFHIR)
            .to.be.undefined;
    });
    it('savePatient should return undefined', function() {
        expect(fhirApiDataAccess.savePatient(newPatientFHIR))
            .to.be.undefined;
    })
});