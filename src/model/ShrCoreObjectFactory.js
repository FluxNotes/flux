import ClinicalNote from './shr/core/ClinicalNote';
import Coding from './shr/core/Coding';
import CodeSystem from './shr/core/CodeSystem';
import CodeSystemVersion from './shr/core/CodeSystemVersion';
import CodeableConcept from './shr/core/CodeableConcept';

const _elementsToClassNames = { "ClinicalNote": ClinicalNote,
                                "CodeSystem":CodeSystem, 
                                "CodeSystemVersion": CodeSystemVersion,
                                "CodeableConcept": CodeableConcept,
                                "Coding": Coding,
                              };

export default class ShrCoreObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}