import '../../../src/model/init';

import SMARTonFHIRDataSource from '../../../src/dataaccess/SMARTonFHIRDataSource';
import {expect, assert} from 'chai';
import hardCodedFHIRPatient from '../../../src/dataaccess/HardCodedFHIRPatient.json';

import serverConfig from '../../../public/ServerConfig.json';
const nock = require('nock');

import 'fhirclient';

const fhirClient = FHIR.client({
    serviceUrl: 'http://localhost/fhir', // note that mocking out the endpoint is made much easier if there is no proxy between here and the endpoint (either no proxy at all, or the no_proxy environment variable is set)
    patientId: '1078857'
});

const samplePatientSearchData = {
    resourceType: 'Bundle',
    type: 'searchset',
    entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === 'Patient')
};

describe('SMART on FHIR data source', function() {
    let options;
    beforeEach(() => {
        options = JSON.parse(JSON.stringify(serverConfig.fhir)); // use the serverConfig object as the base structure and only modify fields we care about
        options.smartClient = fhirClient;

        nock.disableNetConnect(); // ensure that any destinations not mocked will not reach out to the net
    });

    it('should connect out to original FHIR server when no shim override is configured', function (done) {
        delete options.shimServerOverrides; // don't apply any overrides here
        options.addProfiles = false; // don't apply any new profiles
        options.supportedResourceTypes = ['Patient'];

        const scope = nock('http://localhost/')
          .get('/fhir/Patient?_id=1078857')
          .reply(200, samplePatientSearchData);

        const dataSource = new SMARTonFHIRDataSource(options);

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

    it('should connect out to shim server instead of original FHIR server when configured to do so', function (done) {
        options.shimServerOverrides = { 'http://localhost/fhir': 'http://localhost/shim' };
        options.addProfiles = false; // don't apply any new profiles
        options.supportedResourceTypes = ['Patient'];

        const scope = nock('http://localhost/')
          .get('/shim/Patient?_id=1078857')
          .reply(200, samplePatientSearchData);

        const dataSource = new SMARTonFHIRDataSource(options);

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

    it('should not apply profiles to FHIR resources if configured', function(done) {
        delete options.shimServerOverrides; // don't apply any server overrides here
        options.addProfiles = false; // apply any new profiles
        options.supportedResourceTypes = ['Patient'];

        const patientSearchBundle = {
            resourceType: 'Bundle',
            type: 'searchset',
            entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === 'Patient')
        };

        patientSearchBundle.entry.forEach(e => delete e.resource.meta ); // ensure there is no profile there already

        const scope = nock('http://localhost/')
          .get('/fhir/Patient?_id=1078857')
          .reply(200, patientSearchBundle);

        const dataSource = new SMARTonFHIRDataSource(options);
        dataSource.getPatient('1078857', (record, error) => {
            if (record) {
                fail('expected SMARTonFHIRDataSource to error out since there were no profiles on the provided FHIR');
            }
            if (error) {
                scope.done(); // assert that all specified calls on the scope were performed
                done();
            }
        });
    });

    it('should apply profiles to FHIR resources if configured', function(done) {
        delete options.shimServerOverrides; // don't apply any server overrides here
        options.addProfiles = true; // apply any new profiles
        options.supportedResourceTypes = ['Patient'];
        options.defaultSHRProfiles = { "Patient": "http://example.com/fakeFluxProfile/shr-entity-Patient" };

        const patientSearchBundle = {
            resourceType: 'Bundle',
            type: 'searchset',
            entry: hardCodedFHIRPatient.entry.filter(e => e['resource']['resourceType'] === 'Patient')
        };

        patientSearchBundle.entry.forEach(e => delete e.resource.meta ); // ensure there is no profile there already

        const scope = nock('http://localhost/')
          .get('/fhir/Patient?_id=1078857')
          .reply(200, patientSearchBundle);

        const dataSource = new SMARTonFHIRDataSource(options);

        // we expect this to succeed because adding the profiles enables it to convert the FHIR to SHR classes
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

    afterEach(() => {
        nock.cleanAll();
        nock.enableNetConnect(); // just to be sure this doesn't break any other tests anywhere else
    });
});