import { getNamespaceAndName } from '../json-helper';
import ShrEntityObjectFactory from '../shr/entity/ShrEntityObjectFactory';
import FluxDeathInformation from './FluxDeathInformation';
import FluxPatient from './FluxPatient';
import FluxPerson from './FluxPerson';

export default class FluxEntityObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.entity') {
            throw new Error(`Unsupported type in ShrEntityObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrEntityObjectFactory
        switch (elementName) {
            case 'DeathInformation': return new FluxDeathInformation(json, type, patientRecord);
            case 'Patient': return new FluxPatient(json, type, patientRecord);
            case 'Person': return new FluxPerson(json, type, patientRecord);
            default: return ShrEntityObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}