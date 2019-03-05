import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import { expect } from 'chai'

import LaunchPage from '../../../src/components/LaunchPage';

// mocks out sessionStorage which the smart on fhir client uses
import 'mock-local-storage';

Enzyme.configure({ adapter: new Adapter() });

const nock = require('nock');

const dummyConformanceStatement = {
    fhirVersion: '1.0.2',
    rest: [{
        resource: [{
            type: 'Patient'
        }]
    }]
};

describe('LaunchPage', function () {

    const originalJasmineTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    beforeEach(() => {
        // ensure that any destinations not mocked will not reach out to the net
        nock.disableNetConnect();

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
        // the launch page should always be hit via a SMART launcher
        // which will produce a URL like this:
        // http://localhost:3000/launch?launch=eyJhIjoiMSJ9&iss=http%3A%2F%2Flocalhost%3A4001%2Fv%2Fr2%2Ffhir
        // so for this test make the current URL something like that
        const iss = encodeURIComponent('http://localhost:4001/1_0_2/');
        window.history.pushState({}, 'Test Title', `http://localhost/fakeLaunch?launch=eyJhIjoiMSJ9&iss=${iss}`);
    });

    it('should connect to the iss parameter if no server override is given', function (done) {
        const scope = nock('http://localhost:4001/')
          .get('/1_0_2/metadata')
          .reply(200, dummyConformanceStatement);

        const launchContext = {
            client: {
                client_id: '6c12dff4-24e7-4475-a742-b08972c4ea27',
                scope:  'patient/*.read user/*.* openid profile',
                redirect_uri: 'http://localhost/smart'
            }
        };

        const wrapper = mount(<LaunchPage launchContext={launchContext} />);

        // this is not ideal but the actual call to get conformance
        //  is done with promises and async deep within the fhir client
        setTimeout(function () {
            scope.done();
            done();
        }, 5000);

        // expect(wrapper.state('errors'))
        //     .to.equal(newErrors);
    });

    it('should connect to the override url if a server override is given', function (done) {
        const scope = nock('http://localhost:8080/')
          .get('/shimServer/metadata')
          .reply(200, dummyConformanceStatement);

        const launchContext = {
            client: {
                client_id: '6c12dff4-24e7-4475-a742-b08972c4ea27',
                scope:  'patient/*.read user/*.* openid profile',
                redirect_uri: 'http://localhost/smart'
            },
            server: "http://localhost:8080/shimServer/"
        };

        const wrapper = mount(<LaunchPage launchContext={launchContext} />);

        // this is not ideal but the actual call to get conformance
        //  is done with promises and async deep within the fhir client
        setTimeout(function () {
            scope.done();
            done();
        }, 5000);
    });

    afterEach(() => {
        nock.cleanAll();
        nock.enableNetConnect(); // just to be sure this doesn't break any other tests anywhere else

        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalJasmineTimeout;
    });
});