import { getNamespaceAndName } from '../json-helper';
import ShrFindingObjectFactory from '../shr/finding/ShrFindingObjectFactory';
import FluxObservation from './FluxObservation';
import FluxQuestionAnswer from './FluxQuestionAnswer';
import FluxPathologyReport from './FluxPathologyReport';

export default class FluxFindingObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.finding') {
            throw new Error(`Unsupported type in ShrFindingObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrFindingObjectFactory
        switch (elementName) {
            case 'Observation': return new FluxObservation(json);
            case 'QuestionAnswer': return new FluxQuestionAnswer(json);
            case 'PathologyReport': return new FluxPathologyReport(json);
            default: return ShrFindingObjectFactory.createInstance(json, type);
        }
    }
}