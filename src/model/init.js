import {setObjectFactory} from './json-helper';
import ObjectFactory from './ObjectFactory';
import ClassRegistry from './ClassRegistry';

import CodingFix from './fluxExtensions/CodingFix';
import CodeableConceptFix from './fluxExtensions/CodeableConceptFix';
import BloodPressureFix from './fluxExtensions/BloodPressureFix';
import DataValueFix from './fluxExtensions/DataValueFix';
import MedicationCodeOrReferenceFix from './fluxExtensions/MedicationCodeOrReferenceFix';
import TumorMarkerTestDataValueFix from './fluxExtensions/TumorMarkerTestDataValueFix';

/**
 * The init function initializes the ES helper functions with the necessary dependencies for creating
 * instances of classes using factories.  The helper functions originally imported their own dependencies,
 * but this caused circular import issues.  This init approach is essentially a form of dependency injection,
 * avoiding any circular import issues.  Users of the ES6 classes must import this file once before using
 * any of the classes.
 */
function init() {
  setObjectFactory(ObjectFactory);

  ClassRegistry.initialize();

  ClassRegistry.set('shr.core', 'Coding', CodingFix);
  ClassRegistry.set('shr.core', 'CodeableConcept', CodeableConceptFix);
  ClassRegistry.set('shr.core', 'BloodPressure', BloodPressureFix);
  ClassRegistry.set('shr.core', 'DataValue', DataValueFix);
  ClassRegistry.set('shr.core', 'MedicationCodeOrReference', MedicationCodeOrReferenceFix);

  ClassRegistry.set('onco.core', 'TumorMarkerTestDataValue', TumorMarkerTestDataValueFix)
}

init();
