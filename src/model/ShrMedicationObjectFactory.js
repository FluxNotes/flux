import MedicationPrescription from './shr/medication/MedicationPrescription';

const _elementsToClassNames = { "MedicationPrescription": MedicationPrescription
                              };

export default class ShrMedicationObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}