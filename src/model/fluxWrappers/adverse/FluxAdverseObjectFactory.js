import { getNamespaceAndName } from '../json-helper';
import ShrAdverseObjectFactory from '../shr/adverse/ShrAdverseObjectFactory';
import FluxToxicAdverseDrugReaction from './FluxToxicAdverseDrugReaction';

export default class FluxAdverseObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.adverse') {
            throw new Error(`Unsupported type in ShrAdverseObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrAdverseObjectFactory
        switch (elementName) {
            case 'ToxicAdverseDrugReaction': return new FluxToxicAdverseDrugReaction(json, patientRecord);
            default: return ShrAdverseObjectFactory.createInstance(json, type);
        }
    }
}