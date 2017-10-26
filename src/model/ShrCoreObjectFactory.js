import Coding from './shr/core/Coding';
import CodeSystem from './shr/core/CodeSystem';
import CodeSystemVersion from './shr/core/CodeSystemVersion';
import CodeableConcept from './shr/core/CodeableConcept';

const _elementsToClassNames = { "Coding": Coding, "CodeSystem":CodeSystem, "CodeSystemVersion": CodeSystemVersion,
        "CodeableConcept": CodeableConcept };

export default class ShrCoreObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}