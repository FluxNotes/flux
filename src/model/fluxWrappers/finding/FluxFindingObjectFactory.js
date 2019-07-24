import { getNamespaceAndName } from '../json-helper';
import FluxPathologyReport from './FluxPathologyReport';

export default class FluxFindingObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.finding') {
            throw new Error(`Unsupported type in ShrFindingObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrFindingObjectFactory
        switch (elementName) {
            case 'PathologyReport': return new FluxPathologyReport(json);
            default: console.error("Unsupport element type " + elementName);
        }
    }
}