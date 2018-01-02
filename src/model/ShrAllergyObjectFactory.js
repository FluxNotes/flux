import Lang from 'lodash';
import AllergyIntolerance from './shr/allergy/AllergyIntolerance';
import NoKnownDrugAllergy from './shr/allergy/NoKnownDrugAllergy';

export default class ShrAllergyObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "AllergyIntolerance": AllergyIntolerance,
                                "NoKnownDrugAllergy": NoKnownDrugAllergy
                              };

        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
    
}