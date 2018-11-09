import { getNamespaceAndName } from '../../json-helper';
import FluxPatientIdentifier from './FluxPatientIdentifier';
import ShrBaseObjectFactory from '../../shr/base/ShrBaseObjectFactory';

export default class FluxBaseObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.base') {
            throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrBaseObjectFactory
        switch (elementName) {
            case 'PatientIdentifier': return new FluxPatientIdentifier(json);
            default: return ShrBaseObjectFactory.createInstance(json, type);
        }
    }
}