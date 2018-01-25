import { getNamespaceAndName } from '../json-helper';
import ShrProcedureObjectFactory from '../shr/procedure/ShrProcedureObjectFactory';
import FluxProcedurePerformed from './FluxProcedurePerformed';

export default class FluxProcedureObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.procedure') {
            throw new Error(`Unsupported type in ShrProcedureObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrProcedureObjectFactory
        switch (elementName) {
            case 'ProcedurePerformed': return new FluxProcedurePerformed(json);
            default: return ShrProcedureObjectFactory.createInstance(json, type);
        }
    }
}