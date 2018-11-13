import { getNamespaceAndName } from '../json-helper';
import ShrEncounterObjectFactory from '../shr/encounter/ShrEncounterObjectFactory';
import FluxEncounter from './FluxEncounter';

export default class FluxEncounterObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.encounter') {
            throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrEncounterObjectFactory
        switch (elementName) {
            case 'Encounter': return new FluxEncounter(json);
            default: return ShrEncounterObjectFactory.createInstance(json, type);
        }
    }
}