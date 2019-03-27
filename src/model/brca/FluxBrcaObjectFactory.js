import { getNamespaceAndName } from '../json-helper';
import BrcaObjectFactory from './BrcaObjectFactory';

// there are currently no Flux wrapper classes in the brca namespace
// this factory is left for future convenience in case any are added in the future

export default class FluxBrcaObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'brca') {
            throw new Error(`Unsupported type in BrcaObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use BrcaObjectFactory
        switch (elementName) {
            default: return BrcaObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}