import { getNamespaceAndName } from '../json-helper';
import FluxBreastCancerDisorderPresent from './FluxBreastCancerDisorderPresent';
import BrcaObjectFactory from './BrcaObjectFactory';

export default class FluxBrcaObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'brca') {
            throw new Error(`Unsupported type in BrcaObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use BrcaObjectFactory
        switch (elementName) {
            case 'BreastCancerDisorderPresent': return new FluxBreastCancerDisorderPresent(json, patientRecord);
            default: return BrcaObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}