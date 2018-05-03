import { getNamespaceAndName } from '../json-helper';
import ShrMedicationObjectFactory from '../shr/medication/ShrMedicationObjectFactory';
import FluxMedicationRequested from './FluxMedicationRequested';
import FluxMedicationChange from './FluxMedicationChange';
import FluxMedicationAfterChange from './FluxMedicationAfterChange';
import FluxMedicationBeforeChange from './FluxMedicationBeforeChange';

export default class FluxMedicationObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.medication') {
            throw new Error(`Unsupported type in ShrMedicationObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrMedicationObjectFactory
        switch (elementName) {
            case 'MedicationRequested': return new FluxMedicationRequested(json);
            case 'MedicationChange': return new FluxMedicationChange(json);
            case 'MedicationAfterChange': return new FluxMedicationAfterChange(json);
            case 'MedicationBeforeChange': return new FluxMedicationBeforeChange(json);
            
            default: return ShrMedicationObjectFactory.createInstance(json, type);
        }
    }
}