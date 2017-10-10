import DataAccess from '../../../src/dataaccess/DataAccess';
import Patient from '../../../src/patient/Patient';
import referenceHardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
import Moment from 'moment';
import {expect} from 'chai';

// Data Access with hard coded read only data source
const hardCodedReadOnlyDataAccess = new DataAccess("HardCodedReadOnlyDataSource");
// The patient shr object
const hardCodedPatient = hardCodedReadOnlyDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
// The patient record entry -- should be an shr object
const hardCodedPatientPersonOfRecord = hardCodedPatient.getPersonOfRecord();

// reference person of record
const referencePersonOfRecord = Patient.getEntriesOfTypeFromList(referenceHardCodedPatient, "http://standardhealthrecord.org/demographics/PersonOfRecord")[0];

// new data access with new patient only data source
const newPatientOnlyDataAccess = new DataAccess("NewPatientOnlyDataSource");
// new patient result on data access
const newPatient = newPatientOnlyDataAccess.newPatient();
// The empty Patient.jsx obj
const emptyPatientObj = new Patient(null);


describe('create hard coded read only data source', function() { 

    it('should return the hard coded patient', function () { 
        expect(hardCodedPatientPersonOfRecord)
            .to.equal(referencePersonOfRecord);
    });
});

describe('create new patient only data source', function() { 

    it('should return new empty patient', function () { 
        expect(hardCodedPatientPersonOfRecord)
            .to.equal(referencePersonOfRecord);
    });
});