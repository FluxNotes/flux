import Entry from './shr/base/Entry';
import PatientIdentifier from './shr/base/PatientIdentifier';
import FluxStudy from './base/FluxStudy';
import Lang from 'lodash';

export default class ShrBaseObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "Study": FluxStudy, 
                                "Entry": Entry,
                                "PatientIdentifier": PatientIdentifier
                              };
        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
}