import { getNamespaceAndName } from '../json-helper';
import FluxBreastCancerDisorderPresent from './FluxBreastCancerDisorderPresent';
import BrcaObjectFactory from './BrcaObjectFactory';
import FluxEstrogenReceptorStatus from './FluxEstrogenReceptorStatus';
import FluxProgesteroneReceptorStatus from './FluxProgesteroneReceptorStatus';
import FluxHER2ReceptorStatus from './FluxHER2ReceptorStatus';

export default class FluxBrcaObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'brca') {
            throw new Error(`Unsupported type in BrcaObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use BrcaObjectFactory
        switch (elementName) {
            case 'BreastCancerDisorderPresent': return new FluxBreastCancerDisorderPresent(json, patientRecord);
            case 'EstrogenReceptorStatus': return new FluxEstrogenReceptorStatus(json);
            case 'ProgesteroneReceptorStatus': return new FluxProgesteroneReceptorStatus(json);
            case 'HER2ReceptorStatus': return new FluxHER2ReceptorStatus(json);
            default: return BrcaObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}