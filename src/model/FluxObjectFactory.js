import { getNamespaceAndName, uuid } from './json-helper';
import ObjectFactory from './ObjectFactory';
import FluxOncocoreObjectFactory from './fluxWrappers/onco/core/FluxOncocoreObjectFactory';
import FluxCoreObjectFactory from './fluxWrappers/core/FluxCoreObjectFactory';

/*
 *  FluxObjectFactory class returns instances of Flux model classes
 *  Default case will return SHR model classes if no Flux wrapper class is found
 */
export default class FluxObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace } = getNamespaceAndName(json, type);
        switch (namespace) {
            case 'shr.core': return FluxCoreObjectFactory.createInstance(json, type, patientRecord);
            case 'onco.core': return FluxOncocoreObjectFactory.createInstance(json, type, patientRecord);
            default: return ObjectFactory.createInstance(json, type, patientRecord);
        }
    }

    static createInstanceFromFHIR(shrType, fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
        return ObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    }
}
