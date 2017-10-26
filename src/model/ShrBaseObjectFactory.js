import Entry from './shr/base/Entry';
import PatientIdentifier from './shr/base/PatientIdentifier';
import Study from './shr/base/Study';

const _elementsToClassNames = { "Study": Study, 
                                "Entry": Entry,
                                "PatientIdentifier": PatientIdentifier
                              };

export default class ShrBaseObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}