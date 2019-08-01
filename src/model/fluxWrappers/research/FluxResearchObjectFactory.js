import { getNamespaceAndName } from '../json-helper';
import ShrResearchObjectFactory from '../shr/research/ShrResearchObjectFactory';
import FluxResearchSubject from './FluxResearchSubject';

export default class FluxResearchObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.research') {
            throw new Error(`Unsupported type in ShrResearchObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrResearchObjectFactory
        switch (elementName) {
            case 'ResearchSubject': return new FluxResearchSubject(json, type);
            default: return ShrResearchObjectFactory.createInstance(json, type);
        }
    }
}