import FluxMedicationPrescription from './medication/FluxMedicationPrescription';
import Lang from 'lodash';

export default class ShrMedicationObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames =   { 
                                            "MedicationPrescription": FluxMedicationPrescription
                                        };
        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
}