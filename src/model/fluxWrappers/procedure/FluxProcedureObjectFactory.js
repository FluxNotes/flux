import { getNamespaceAndName } from '../json-helper';
import ShrProcedureObjectFactory from '../shr/procedure/ShrProcedureObjectFactory';
import FluxImagingProcedurePerformed from './FluxImagingProcedurePerformed';

export default class FluxProcedureObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.procedure') {
            throw new Error(`Unsupported type in ShrProcedureObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrProcedureObjectFactory
        switch (elementName) {
            case 'ImagingProcedurePerformed': return new FluxImagingProcedurePerformed(json);
            default: return ShrProcedureObjectFactory.createInstance(json, type);
        }
    }
}