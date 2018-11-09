import { getNamespaceAndName } from '../../json-helper';
import ShrEntityObjectFactory from '../../shr/entity/ShrEntityObjectFactory';
import FluxDeceased from './FluxDeceased';
import FluxPatient from './FluxPatient';
import FluxPerson from './FluxPerson';

export default class FluxEntityObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.entity') {
            throw new Error(`Unsupported type in ShrEntityObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrEntityObjectFactory
        switch (elementName) {
            case 'Deceased': return new FluxDeceased(json);
            case 'Patient': return new FluxPatient(json);
            case 'Person': return new FluxPerson(json);
            default: return ShrEntityObjectFactory.createInstance(json, type);
        }
    }
}