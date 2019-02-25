import IDataSource from './IDataSource';
import PatientRecord from '../patient/PatientRecord';
import ObjectFactory from '../model/ObjectFactory';

import 'fhirclient';

class SMARTonFHIRDataSource extends IDataSource {
    constructor(options) {
        super();
        this._client = this._buildClient(options);
        this._options = options;
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

    _buildClient(options) {
        let client = options.smartClient;
        const shimServerOverrides = options['shimServerOverrides'];

        if (!shimServerOverrides){
            return client;
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

        return client;
    }

    getPatient(id, callback) {
        // the FHIR client library does not seem to support calling Patient$everything, so we fake it by manually fetching all the resource types we care about.
        // further, the library only supports async querying
        const queries = [];
        for (const resourceType of this._options['supportedResourceTypes']) {
            const result = this._client.patient.api.search({ type: resourceType, query: {} });
            queries.push(result);
        }

        return Promise.all(queries).then(responses => {
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
                    if (this._options.addProfiles) {
                        // unless a shim is in place or the resources are otherwise profiled, we need to manually apply certain profiles so that fromFHIR knows what to turn these resources into
                        this.applyMinimalProfiles(entry);
                    }
                    const result = ObjectFactory.createInstanceFromFHIR(entry.resource, null, this._client.patient.id, entries, mappedResources, referencesOut);
                    mappedResources[entry.fullUrl] = result;
                    return result;
                } catch (e) {
                    // TODO: just log the error for the moment, don't stop processing
                    console.error(e);
                    return null;
                }
            });

            allObjects.push(...referencesOut);
            const json = allObjects.filter(o => o).map(o => o.toJSON());
            return new PatientRecord(json);
        }).catch(error => callback(null, error))
        .then(record => callback(record))
        ;
    }

    getListOfPatients() {
        console.error("listing of patients is not implemented in SMARTonFHIRDataSource.");
    }

    newPatient() {
        console.error("creating a new patient is not implemented in SMARTonFHIRDataSource.");
    }

    savePatient(patient) {
        // TODO. presumably we want to use
        // this._client.patient.api.update, or some combination of update/create. update uses PUT, create uses POST. for now assume PUT works everywhere
        // TODO: is there the possibility of deletes?
        // note that this also depends on toFHIR
        const successCallback = (entry) => {};
        const errorCallback = (error) => {};
        const fhirResources = patient.entries.map(e => e.toFHIR());
        for (const resource of fhirResources) {
            this._client.patient.api.update({ resource }, successCallback, errorCallback);
        }
    }

    applyProfile(e, p) {
        e.resource.meta = e.resource.meta || {};
        e.resource.meta.profile = e.resource.meta.profile || [];
        e.resource.meta.profile.unshift(p); // ensure this profile is first in the list
    }

    applyMinimalProfiles(e) {
        const profile = this._options['defaultSHRProfiles'][e.resource.resourceType];
        if (profile) {
            this.applyProfile(e, profile);
        }
    }
}

export default SMARTonFHIRDataSource;