import Coding from './shr/core/Coding';
import CodeSystem from './shr/core/CodeSystem';
import CodeSystemVersion from './shr/core/CodeSystemVersion';
import CodeableConcept from './shr/core/CodeableConcept';

class ShrCoreObjectFactory {
    createInstance(elementName) {
        return new _elementsToClassNames[elementName]();
    }
    
    _elementsToClassNames = { "Coding": Coding, "CodeSystem":CodeSystem, "CodeSystemVersion": CodeSystemVersion,
            "CodeableConcept": CodeableConcept };
}