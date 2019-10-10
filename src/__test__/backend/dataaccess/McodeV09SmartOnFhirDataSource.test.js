import '../../../model/init';

import McodeV09SmartOnFhirDataSource from '../../../dataaccess/McodeV09SmartOnFhirDataSource';
import GenericSmartOnFhirDstu2DataSource from '../../../dataaccess/GenericSmartOnFhirDstu2DataSource';
import {expect, assert} from 'chai';
import hardCodedFHIRPatient from '../../../dataaccess/HardCodedFHIRPatient.json';
import 'fhirclient';

const nock = require('nock');

const fhirClient = FHIR.client({
    // note that mocking out the endpoint is made much easier
    // if there is no proxy between here and the endpoint
    // (either no proxy at all, or the no_proxy environment variable is set)
    serviceUrl: 'http://localhost/fhir',
    patientId: '1078857'
});

const dummyConformanceStatement = {
    fhirVersion: '1.0.2',
    rest: [{
        resource: [{
            type: 'Patient'
        }]
    }]
}

const samplePatientSearchData = {
    resourceType: 'Bundle',
    type: 'searchset',
    entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === 'Patient')
};

const sampleObservationSearchData = {
    resourceType: 'Bundle',
    type: 'searchset',
    entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === 'Observation')
};

const sampleReferenceResult = {
    resourceType: 'Bundle',
    entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === 'Condition')
}


describe('SMART on FHIR data source', function() {
    const originalWindowFHIR = window.FHIR;

    beforeEach(() => {
        // ensure that any destinations not mocked will not reach out to the net
        nock.disableNetConnect();

        // 2 options here are:
        // 1) mock out the smart sequence so that the real smart client is configured appropriately
        // 2) put a pre-configured client in the expected location
        // TODO: get this working with the original smart client
        window.FHIR = {
            oauth2: {
                ready: function(callback) {
                    callback(fhirClient);
                }
            }
        }
    });

    it('should connect out to the FHIR server', function (done) {
        const scope = nock('http://localhost/')
          .get('/fhir/metadata')
          .reply(200, dummyConformanceStatement)
          .get('/fhir/Patient?_id=1078857')
          .reply(200, samplePatientSearchData);

        const dataSource = new McodeV09SmartOnFhirDataSource();

        dataSource.getPatient('1078857', (record, error) => {
            if (record) {
                scope.done(); // assert that all specified calls on the scope were performed
                done();
            }
            if (error) {
                 fail(JSON.stringify(error));
            }
        });
    });

    it('should fetch resource types defined in data source props', function (done) {
        const scope = nock('http://localhost/')
          .get('/fhir/Patient?_id=1078857')
          .reply(200, samplePatientSearchData)
          .get('/fhir/Observation?patient=1078857')
          .reply(200, sampleObservationSearchData)
          .get('/fhir/Encounter/6a8bc97e-3ba1-4fb5-a478-4b5bd888c793') // reference retrieval
          .reply(200, sampleReferenceResult);
          // in this case it doesn't need to fetch the metadata since the resourceTypes are manually specified

        const dataSource = new McodeV09SmartOnFhirDataSource({ resourceTypes: ['Patient', 'Observation'] });

        dataSource.getPatient('1078857', (record, error) => {
            if (record) {
                scope.done(); // assert that all specified calls on the scope were performed
                done();
            }
            if (error) {
                 fail(JSON.stringify(error));
            }
        });
    });

    it('should correctly map non-profiled FHIR resources to MCODE V09', function(done) {
        const patientSearchBundle = {
            resourceType: 'Bundle',
            type: 'searchset',
            entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === 'Patient')
        };

        patientSearchBundle.entry.forEach(e => delete e.resource.meta ); // ensure there is no profile there already

        const scope = nock('http://localhost/')
          .get('/fhir/metadata')
          .reply(200, dummyConformanceStatement)
          .get('/fhir/Patient?_id=1078857')
          .reply(200, patientSearchBundle);

        const dataSource = new GenericSmartOnFhirDstu2DataSource({ mapper: "SyntheaToV09" });
        dataSource.getPatient('1078857', (record, error) => {
            if (record) {
                scope.done();
                done();
            }
            if (error) {
                fail(JSON.stringify(error));
            }
        });
    });

    afterEach(() => {
        nock.cleanAll();
        nock.enableNetConnect(); // just to be sure this doesn't break any other tests anywhere else

        window.FHIR = originalWindowFHIR;
    });
});