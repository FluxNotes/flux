import Lang from 'lodash';

// map FHIR resourceType to SHR entryType
const mapOptions = {
    "Patient": "http://standardhealthrecord.org/demographics/PersonOfRecord"
}


exports.mapToEntryTypes = (entry) => {
    // TODO: Support returning multiple entry types from a single FHIR entry
    const entryType = mapOptions[entry.resource.resourceType]; 
    return Lang.isUndefined(entryType) ? [null] : [entryType];
};