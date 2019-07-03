import ObjectFactory from '../../model/ObjectFactory';
import PatientRecord from "../../patient/PatientRecord";

export default function(responses, patientId, resourceMapper = null) {
    const entries = [];
    responses.forEach(response => {
        // response is a Bundle of type searchset
        // TODO: error handling?
        if (response && response.entry) {
            let bundle = response;
            // If we need to use a mapper to add profiles to the fhir, update the resources accordingly
            if (resourceMapper) {
                bundle = resourceMapper.execute(response);
            }
            entries.push(...bundle.entry);
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
        const resource = entry.resource;
        // if there's no profile on this resource we can't determine what class to convert it into
        // so rather than error out just ignore it
        if (!resource || !resource.meta || !resource.meta.profile || !resource.meta.profile[0]) return null;

        try {
            const result = ObjectFactory.createInstanceFromFHIR(null, resource, resource.resourceType, patientId, entries, mappedResources, referencesOut);

            // shortId here is the standard "resourceType/resourceID" ID format
            const shortId = `${resource.resourceType}/${resource.id}`;

            // this format and the entry fullURL are 2 formats that are used for references
            // so add this object to the map with both keys, so either one could be used for lookups
            // TODO: are there other formats?
            mappedResources[entry.fullUrl] = mappedResources[shortId] = result;
            return result;
        } catch (e) {
            // just log the error, don't stop processing other potentially good objects
            console.error(e);
            return null;
        }
    });

    allObjects.push(...referencesOut);
    const uniqueObjects = Array.from(new Set(allObjects)); // there may be some duplicates between the referencesOut and allObjects
    const json = uniqueObjects.filter(o => o).map(o => o.toJSON());
    return new PatientRecord(json);
}