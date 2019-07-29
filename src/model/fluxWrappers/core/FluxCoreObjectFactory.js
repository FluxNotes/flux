import { getNamespaceAndName } from '../json-helper';
import ShrCoreObjectFactory from '../shr/core/ShrCoreObjectFactory';
import FluxClinicalNote from './FluxClinicalNote';
import FluxKarnofskyPerformanceStatus from './FluxKarnofskyPerformanceStatus';

export default class FluxCoreObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.core') {
            throw new Error(`Unsupported type in ShrCoreObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrCoreObjectFactory
        switch (elementName) {
            case 'ClinicalNote': return new FluxClinicalNote(json);
            case 'KarnofskyPerformanceStatus': return new FluxKarnofskyPerformanceStatus(json);
            default: return ShrCoreObjectFactory.createInstance(json, type);
        }
    }
}