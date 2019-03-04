import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';
import ObjectFactory from '../model/ObjectFactory';

import 'fhirclient';

class SMARTonFHIRDataSource extends IDataSource {
    constructor() {
        super();
        this._gestalt = {
            create: {
                async: false,
                sync: false
            },
            read: {
                async: true,
                sync: false
            },
            update: {
                async: false,
                sync: false
            },
            delete: {
                async: false,
                sync: false
            }
        };
    }
    getGestalt() {
        return this._gestalt;
    }

    _getClientAsync() {
        // if the client is already loaded, just use it
        // wrap it in a promise for consistency
        if (this._client) return Promise.resolve(this._client);

        const getConfig = fetch('/ServerConfig.json')
            .then(res => res.json())
            .then(config => config.fhir);


        const getRawClient = new Promise((resolve, _reject) => {
            // this is admittedly clunky, but the FHIR client function uses callbacks
            // so this converts it to a Promise
            window.FHIR.oauth2.ready((smart) => {
                resolve(smart);
            });
        });

        return Promise.all([getConfig, getRawClient]).then((responses) => {
            this._options = responses[0];
            let client = responses[1];

            const shimServerOverrides = this._options['shimServerOverrides'];

            if (!shimServerOverrides){
                this._client = client;
                return this._client;
            }

            for (const baseURL in shimServerOverrides) {
                if (client.server.serviceUrl.startsWith(baseURL)) { // TODO: smart URL recognition/replacement? http vs https?
                    // just rewriting the URL isn't enough to get all actions pointing at the shim, so we have to create a whole new client object
                    const newServiceUrl = client.server.serviceUrl.replace(baseURL, shimServerOverrides[baseURL]);
                    client = window.FHIR.client({
                      serviceUrl: newServiceUrl,
                      patientId: client.patient.id,
                      auth: client.server.auth
                    });
                }
            }

            this._client = client;
            return this._client;
        });
    }

    getPatient(id, callback) {
        this._getClientAsync().then(() => {
            // the FHIR client library does not seem to support calling Patient$everything, so we fake it by manually fetching all the resource types we care about.
            // further, the library only supports async querying
            const queries = [];
            for (const resourceType of this._options['supportedResourceTypes']) {
                // note that we use a configurable list of resource types here because it's faster and easier than getting the conformance statement
                // if we want to do that, get the list like this:
                // this._client..patient.api.conformance({}).then(metadata => metadata.data.rest[0].resource.map(res => res.type));
                const result = this._client.patient.api.search({ type: resourceType, query: {} });
                queries.push(result);
            }

            return Promise.all(queries);
        }).then(responses => {
            const entries = [];
            responses.forEach(response => {
                // response.data is a Bundle of type searchset
                // TODO: error handling?
                if (response && response.data && response.data.entry) {
                    entries.push(...response.data.entry);
                }
            });

            // rather than update PatientRecord and all the Flux wrapper classes to take in FHIR,
            // the approach here is:
            // 1. load them as FHIR as regular SHR objects,
            // 2. convert those regular SHR objects into SHR json
            // 3. instantiate the PatientRecord with the SHR JSON so that it hydrates the Flux wrapper classes correctly
            // this approach will likely result in slower performance than supporting FHIR --> Flux wrappers directly, but with massive development time savings

            const mappedResources = {};
            const referencesOut = [];
            const allObjects = entries.map(entry => {
                try {
                    const result = ObjectFactory.createInstanceFromFHIR(entry.resource, null, this._client.patient.id, entries, mappedResources, referencesOut);
                    mappedResources[entry.fullUrl] = result;
                    return result;
                } catch (e) {
                    // just log the error, don't stop processing other potentially good objects
                    console.error(e);
                    return null;
                }
            });

            allObjects.push(...referencesOut);
            const json = allObjects.filter(o => o).map(o => o.toJSON());
            return new PatientRecord(json);
        })
        .then(record => callback(record), error => callback(null, error));
    }

    getListOfPatients() {
        console.error("listing of patients is not implemented in SMARTonFHIRDataSource.");
    }

    newPatient() {
        console.error("creating a new patient is not implemented in SMARTonFHIRDataSource.");
    }

    savePatient(patient) {
        console.error("saving a patient is not implemented in SMARTonFHIRDataSource.");
        // TODO. presumably we want to use
        // this._client.patient.api.update, or some combination of update/create. update uses PUT, create uses POST. for now assume PUT works everywhere
        // TODO: is there the possibility of deletes?
        // note that this also depends on toFHIR, which is not currently available
        // const successCallback = (entry) => {};
        // const errorCallback = (error) => {};
        // const fhirResources = patient.entries.map(e => e.toFHIR());
        // for (const resource of fhirResources) {
        //     this._client.patient.api.update({ resource }, successCallback, errorCallback);
        // }
    }
}

export default SMARTonFHIRDataSource;