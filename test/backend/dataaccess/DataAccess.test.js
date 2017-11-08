import DataAccess from '../../../src/dataaccess/DataAccess';
import hardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
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
const hardCodedPatientObjectRest = restApiDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
const hardCodedPatientPersonOfRecordRest = hardCodedPatientObjectRest.getPersonOfRecord();


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
    it('getPatient should return the hard coded patient', function() {
        expect(hardCodedPatientPersonOfRecordRest)
            .eql(referencePersonOfRecord);
    });
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