import { getNamespaceAndName } from '../json-helper';
import ShrEncounterObjectFactory from '../shr/encounter/ShrEncounterObjectFactory';
import FluxConsultRequested from './FluxConsultRequested';
import FluxEncounter from './FluxEncounter';

export default class FluxEncounterObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.encounter') {
            throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrEncounterObjectFactory
        switch (elementName) {
            case 'ConsultRequested': return new FluxConsultRequested(json);
            case 'Encounter': return new FluxEncounter(json);
            default: return ShrEncounterObjectFactory.createInstance(json, type);
        }
    }
}