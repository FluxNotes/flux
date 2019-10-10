import IDataSource from './IDataSource';
import processFHIRResources from './utils/fhir-entry-processor';

import 'fhirclient';

class McodeV09SmartOnFhirDataSource extends IDataSource {
    constructor(props) {
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

        this.resourceTypes = props && props.resourceTypes;
        this.referencedEntries = new Set();
    }
    getGestalt() {
        return this._gestalt;
    }

    _getClientAsync() {
        // if the client is already loaded, just use it
        // wrap it in a promise for consistency
        if (this._client) return Promise.resolve(this._client);

        return new Promise((resolve, _reject) => {
            // this is admittedly clunky, but the FHIR client function uses callbacks
            // so this converts it to a Promise
            window.FHIR.oauth2.ready((smart) => {
                resolve(smart);
            });
        }).then((client) => {
            this._client = client;
            return this._client;
        });
    }

    _fetchById(resourceType, resourceId) {
        return this._client.patient.api.read({ type: resourceType, id: resourceId })
            .then(response => this._handleResponseEntry(response.data));
    }

    _fetchAll(resourceType) {
        // the FHIR server can return as many or as few results as it would like
        // so we have to follow links to get the "next" set of results.
        // the FHIR client library includes a fetchAll function, but it has 2 limitations:
        // 1. there is a bug where it can hit (current URL)(bundle contents)
        //    for instance http://localhost/smart?{"resourceType":"Bundle",...}
        // 2. it returns a list of resources, not a bundle, so we don't get access to entry.fullUrl

        return this._client.patient.api.search({ type: resourceType, query: {} })
            .then(response => this._handleResponseBundle(response.data));
    }

    _getNext(prevBundle, nextURL) {
        // getNext fetches the next bundle given a URL and merges it into the current one
        // prevBundle may be a synthetic bundle containing all the results fetched so far

        return this._client.patient.api.getBundleByUrl({ url: nextURL })
            .then(response => this._handleResponseBundle(response.data, prevBundle));
    }

    _handleResponseEntry(entry) {
        if (entry.resourceType && entry.resourceType === 'Bundle') return entry;
        return { resourceType: 'Bundle', entry: [ { resource: entry } ] };
    }

    _handleResponseBundle(newBundle, prevBundle=null) {
        if (prevBundle && newBundle && newBundle.entry) {
            // merge the entries from the previous bundle into the new one
            newBundle.entry.unshift(...prevBundle.entry);
            newBundle.total = newBundle.entry.length;
        }

        if (newBundle && newBundle.entry) {
            // Check for any value on an entry that is a reference
            newBundle.entry.forEach(entry => {
                for (const key in entry.resource) {
                    if (typeof entry.resource[key] === 'object' && entry.resource[key].reference) {
                        const referenceValue = entry.resource[key].reference;
                        // Only add new entries. Don't add the patient because we already have that.
                        if (!this.referencedEntries.has(referenceValue) && referenceValue !== `Patient/${this._client.patient.id}`) {
                            this.referencedEntries.add(referenceValue);
                        }
                    }
                }
            });
        }

        const nextURL = newBundle.link && newBundle.link.find(l => l.relation === 'next');
        if (nextURL) {
            // if the bundle includes a link to the next one,
            //  keep going, hold on to the current one and fetch the next one
            return this._getNext(newBundle, nextURL.url);
        } else {
            // otherwise we're done
            return newBundle;
        }
    }

    // Filter out resources that can only support searching based on patient/subject. Also include the Patient resource type.
    resourceTypeFilter = (res) => {
        if (res && res.searchInclude) {
            return res.searchInclude.includes(`${res.type}:patient`) || res.searchInclude.includes(`${res.type}:subject`) || res.type === 'Patient';
        }
        return true;
    }

    fetchResources() {
        let promise = this._getClientAsync(); // have to ensure the client is loaded first

        if (this.resourceTypes) {
            promise = promise.then((_) => this.resourceTypes);
        } else {
            promise = promise
                .then(client => client.patient.api.conformance({}))
                .then(metadata => metadata.data.rest[0].resource.filter(this.resourceTypeFilter).map(res => res.type));
        }

        return promise
            .then(resourceTypes => {
                // the FHIR client library does not seem to support calling Patient$everything,
                // so we fake it by manually fetching all the resource types.
                // further, the library only supports async querying
                const queries = [];
                for (const resourceType of resourceTypes) {
                    const result = this._fetchAll(resourceType);
                    queries.push(result);
                }

                const referenceQueries = [];
                let nonEmptyResources = [];
                return Promise.all(queries)
                    .then((resources) => {
                        // After the first pass of queries are resolved, fetch any additional resources that were
                        // referenced that have not yet been fetched.

                        // Filter out any searchset bundles that don't have any entries
                        nonEmptyResources = nonEmptyResources.concat(resources.filter(res => res.entry));
                        this.referencedEntries.forEach((key) => {
                            const referenceArray = key.split('/');
                            const resourceType = referenceArray[0];
                            const resourceId = referenceArray[1];

                            // Check if we have already fetched the referenced resource. Only fetch ones we don't yet have
                            const alreadyFetched = nonEmptyResources.some(res => res.entry.some(entry => entry.resource.id === resourceId));
                            if (!alreadyFetched) {
                                const refResult = this._fetchById(resourceType, resourceId);
                                referenceQueries.push(refResult);
                            }
                        });
                        return Promise.all(referenceQueries);
                    }).then(refResources => nonEmptyResources.concat(refResources));
            });
    }

    getPatient(id, callback) {
        this.fetchResources()
            .then(resources => callback(processFHIRResources(resources, this._client.patient.id)));
    }

    getListOfPatients() {
        console.error("listing of patients is not implemented in McodeV09SmartOnFhirDataSource.");
    }

    newPatient() {
        console.error("creating a new patient is not implemented in McodeV09SmartOnFhirDataSource.");
    }

    savePatient(patient) {
        console.error("saving a patient is not implemented in McodeV09SmartOnFhirDataSource.");
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

export default McodeV09SmartOnFhirDataSource;