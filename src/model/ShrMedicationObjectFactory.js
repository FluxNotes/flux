import MedicationPrescription from './shr/medication/MedicationPrescription';
import Lang from 'lodash';

export default class ShrMedicationObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames =   { 
                                            "MedicationPrescription": MedicationPrescription
                                        };
        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
}