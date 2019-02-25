import DataAccess from '../../../src/dataaccess/DataAccess';
import BreastMainTreatmentDebra from '../../../src/dataaccess/BreastMainTreatmentDebra.json';
import hardCodedFHIRPatient from '../../../src/dataaccess/HardCodedFHIRPatient.json';
import hardCodedConvertedFHIRPatient from '../../../src/dataaccess/HardCodedConvertedFHIRPatient.json';
import PatientRecord from '../../../src/patient/PatientRecord';
//import referenceHardCodedPatient from '../../../src/dataaccess/HardCodedPatient.json';
import Moment from 'moment';
import {expect} from 'chai';

import EntryMapper from '../../../src/dataaccess/mcodev0.1-datasource/EntryMapper';
import serverConfig from '../../../public/ServerConfig.json';

const mcodePatientJson = EntryMapper.mapEntries(BreastMainTreatmentDebra);

// reference hard coded Patient
const referenceHardCodedPatient = new PatientRecord(mcodePatientJson);

// Data Access with hard coded read only data source
const hardCodedReadOnlyDataAccess = new DataAccess("HardCodedMcodeV01DataSource");
// The patient shr object
const hardCodedPatientObj = hardCodedReadOnlyDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
// The patient record entry -- should be an shr object
const hardCodedPatientPatient = hardCodedPatientObj.getPatient();

// reference person of record
const referencePatient = referenceHardCodedPatient.getPatient();

// new data access with new patient only data source
const newPatientOnlyDataAccess = new DataAccess("NewPatientOnlyDataSource");
// new patient result on data access
const newPatient = newPatientOnlyDataAccess.newPatient();
const newPatientEntries = newPatient.entries;

// Data Access with REST API
const restApiDataAccess = new DataAccess("RestApiDataSource");
const newPatientRest = restApiDataAccess.newPatient();
import util from 'util';

// Data Access with FHIR
/*const fhirApiDataAccess = new DataAccess("FHIRApiDataSource");
const newPatientFHIR = fhirApiDataAccess.newPatient();
const referenceHardCodedFHIRPatient = new PatientRecord();
referenceHardCodedFHIRPatient.fromFHIR(hardCodedFHIRPatient);
const fhirReferencePatient = referenceHardCodedFHIRPatient.getPatient();
*/

describe('create hard coded read only data source', function() {
    it('get demo patient should return the hard coded patient', function () {
        expect(hardCodedPatientPatient)
            .eql(referencePatient);
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
    //     const hardCodedPatientPatientRest = hardCodedPatientObjectRest.getPatient();
    //     expect(hardCodedPatientPatientRest)
    //         .eql(referencePatient);
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

/*
describe('use fhir api as data source', function() {
    // it('getPatient should return the hard coded fhir patient', function() {
    //     const hardCodedPatientObjectFHIR = fhirApiDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID);
    //     const hardCodedPatientPatientFHIR = hardCodedPatientObjectFHIR.getPatient();
    //     expect(hardCodedPatientPatientFHIR)
    //         .eql(fhirReferencePatient);
    // });
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
});*/


// Data Access with SMART on FHIR
// the SMART client uses jQuery AJAX, and the underlying FHIR library uses Request, one option 1 is to mock out the actual HTTP calls it makes (see separate SMARTonFHIRDataSource.test file)
// option 2 is to mock out the client with a simple object representing the expected API
const mockSmartClient = {
    patient: {
        id: DataAccess.DEMO_PATIENT_ID,
        api: {
            search: function(options) {
                const data = {
                    resourceType: 'Bundle',
                    type: 'searchset',
                    entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === options.type)
                };
                return Promise.resolve({ data });
            }
        }
    }
};


describe('use smart on fhir as data source with simple mock', function() {
    const options = JSON.parse(JSON.stringify(serverConfig.fhir)); // use the serverConfig object as the base structure and only modify fields we care about
    options.smartClient = mockSmartClient;

    delete options.shimServerOverrides; // don't apply any overrides here
    options.addProfiles = false; // don't apply any new profiles
    options.supportedResourceTypes = ['Patient', 'Condition', 'Observation', 'Procedure'];

    const smartOnFhirDataAccess = new DataAccess("SMARTonFHIRDataSource", options);

    it('getPatient should return the hard coded fhir patient', function(done) {
        let i = 1;
        smartOnFhirDataAccess.getPatient(DataAccess.DEMO_PATIENT_ID, (smartPatientResult, _error) => {
            const smartPatientResultJSON = smartPatientResult.entries.map(entry => entry.toJSON());
            // at this point smartPatientResultJSON and hardCodedConvertedFHIRPatient should be equal, except for the Person.entryID which is randomized at creation time

            // hack to get this working, find the Person.entryID, stringify eveything and replace the entryID with the expected one 2835f59d-cf36-4598-9982-0c539ba052e9
            const personEntryID = smartPatientResultJSON[0].Person._EntryId.value;
            const regex = new RegExp(personEntryID, 'g');
            const tweakedJSON = JSON.parse(JSON.stringify(smartPatientResultJSON).replace(regex, '2835f59d-cf36-4598-9982-0c539ba052e9'));
            debugger;
            expect(tweakedJSON).to.deep.equal(hardCodedConvertedFHIRPatient);
            done();
        });
    });
    it('getListOfPatients should return undefined', function() {
        expect(smartOnFhirDataAccess.getListOfPatients())
            .to.be.undefined;
    });
    it('new patient should return undefined', function() {
        expect(smartOnFhirDataAccess.newPatient())
            .to.be.undefined;
    });
    // it('savePatient should return undefined', function() {
    //     expect(fhirApiDataAccess.savePatient(newPatientFHIR))
    //         .to.be.undefined;
    // });
});

