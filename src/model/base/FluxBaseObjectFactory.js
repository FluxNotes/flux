import { getNamespaceAndName } from '../json-helper';
import FluxPatientIdentifier from './FluxPatientIdentifier';
import ShrBaseObjectFactory from '../shr/base/ShrBaseObjectFactory';
import FluxConditionPresentAssertion from './FluxConditionPresentAssertion';
import FluxObservation from './FluxObservation';

export default class FluxBaseObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.base') {
            throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrBaseObjectFactory
        switch (elementName) {
            case 'Observation': return new FluxObservation(json);
            case 'ConditionPresentAssertion': return new FluxConditionPresentAssertion(json, type);
            case 'PatientIdentifier': return new FluxPatientIdentifier(json, type);
            default: return ShrBaseObjectFactory.createInstance(json, type);
        }
    }
}