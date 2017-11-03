import Entry from './shr/base/Entry';
import PatientIdentifier from './shr/base/PatientIdentifier';
import Study from './shr/base/Study';
import Lang from 'lodash';

export default class ShrBaseObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "Study": Study, 
                                "Entry": Entry,
                                "PatientIdentifier": PatientIdentifier
                              };
        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
}