import { getNamespaceAndName } from '../json-helper';
import FluxStudy from './FluxStudy';
import ShrResearchObjectFactory from '../shr/research/ShrResearchObjectFactory';

export default class FluxResearchObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.research') {
            throw new Error(`Unsupported type in FluxResearchObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use FluxResearchObjectFactory
        switch (elementName) {
            case 'Study': return new FluxStudy(json);
            default: return ShrResearchObjectFactory.createInstance(json, type);
        }
    }
}