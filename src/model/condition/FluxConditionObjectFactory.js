import { getNamespaceAndName } from '../json-helper';
import FluxCondition from './FluxCondition';
import FluxInjury from './FluxInjury';
import ShrConditionObjectFactory from '../shr/condition/ShrConditionObjectFactory';

export default class FluxConditionObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.condition') {
            throw new Error(`Unsupported type in ShrConditionObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrConditionObjectFactory
        switch (elementName) {
            case 'Condition': return new FluxCondition(json);
            case 'Injury': return new FluxInjury(json);
            default: return ShrConditionObjectFactory.createInstance(json, type);
        }
    }
}