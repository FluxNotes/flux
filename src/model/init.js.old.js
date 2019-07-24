import {setObjectFactory} from './json-helper';
import FluxObjectFactory from './FluxObjectFactory';
import ClassRegistry from './ClassRegistry';

import EntryFix from './fluxExtensions/EntryFix';
import EncounterFix from './fluxExtensions/EncounterFix';
import CodingFix from './fluxExtensions/CodingFix';
import CodeableConceptFix from './fluxExtensions/CodeableConceptFix';
import ReasonFix from './fluxExtensions/ReasonFix';
import MedicationRequestedFix from './fluxExtensions/MedicationRequestedFix';
import FindingResultFix from './fluxExtensions/FindingResultFix';

/**
 * The init function initializes the ES helper functions with the necessary dependencies for creating
 * instances of classes using factories.  The helper functions originally imported their own dependencies,
 * but this caused circular import issues.  This init approach is essentially a form of dependency injection,
 * avoiding any circular import issues.  Users of the ES6 classes must import this file once before using
 * any of the classes.
 */
function init() {
  setObjectFactory(FluxObjectFactory);

  ClassRegistry.initialize();
  ClassRegistry.set('shr.base', 'Entry', EntryFix);
  ClassRegistry.set('shr.encounter', 'Encounter', EncounterFix);
  ClassRegistry.set('shr.core', 'Coding', CodingFix);
  ClassRegistry.set('shr.core', 'CodeableConcept', CodeableConceptFix);
  ClassRegistry.set('shr.base', 'Reason', ReasonFix);
  ClassRegistry.set('shr.medication', 'MedicationRequested', MedicationRequestedFix);
  ClassRegistry.set('shr.base', 'FindingResult', FindingResultFix);
}

init();