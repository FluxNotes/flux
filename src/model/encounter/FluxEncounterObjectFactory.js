import { getNamespaceAndName } from '../json-helper';
import ShrEncounterObjectFactory from '../shr/encounter/ShrEncounterObjectFactory';
import FluxEncounterRequested from './FluxEncounterRequested';

export default class FluxEncounterObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.encounter') {
            throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrEncounterObjectFactory
        switch (elementName) {
            case 'EncounterRequested': return new FluxEncounterRequested(json);
            default: return ShrEncounterObjectFactory.createInstance(json, type);
        }
    }
}