// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the classes are generated.

import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from './json-helper';
import ShrAdverseObjectFactory from './shr/adverse/ShrAdverseObjectFactory';
import ShrAllergyObjectFactory from './shr/allergy/ShrAllergyObjectFactory';
import ShrBaseObjectFactory from './shr/base/ShrBaseObjectFactory';
import BrcaObjectFactory from './brca/BrcaObjectFactory';
import ShrCoreObjectFactory from './shr/core/ShrCoreObjectFactory';
import ShrEncounterObjectFactory from './shr/encounter/ShrEncounterObjectFactory';
import ShrEntityObjectFactory from './shr/entity/ShrEntityObjectFactory';
import ShrFinancialObjectFactory from './shr/financial/ShrFinancialObjectFactory';
import OncocoreObjectFactory from './oncocore/OncocoreObjectFactory';
import ShrMedicationObjectFactory from './shr/medication/ShrMedicationObjectFactory';
import ShrProcedureObjectFactory from './shr/procedure/ShrProcedureObjectFactory';
import ShrResearchObjectFactory from './shr/research/ShrResearchObjectFactory';
import TumorObjectFactory from './tumor/TumorObjectFactory';

/**
 * Generated top-level object factory for SHR classes.
 */
export default class ObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace } = getNamespaceAndName(json, type);
    switch (namespace) {
    case 'shr.adverse': return ShrAdverseObjectFactory.createInstance(json, type);
    case 'shr.allergy': return ShrAllergyObjectFactory.createInstance(json, type);
    case 'shr.base': return ShrBaseObjectFactory.createInstance(json, type);
    case 'brca': return BrcaObjectFactory.createInstance(json, type);
    case 'shr.core': return ShrCoreObjectFactory.createInstance(json, type);
    case 'shr.encounter': return ShrEncounterObjectFactory.createInstance(json, type);
    case 'shr.entity': return ShrEntityObjectFactory.createInstance(json, type);
    case 'shr.financial': return ShrFinancialObjectFactory.createInstance(json, type);
    case 'oncocore': return OncocoreObjectFactory.createInstance(json, type);
    case 'shr.medication': return ShrMedicationObjectFactory.createInstance(json, type);
    case 'shr.procedure': return ShrProcedureObjectFactory.createInstance(json, type);
    case 'shr.research': return ShrResearchObjectFactory.createInstance(json, type);
    case 'tumor': return TumorObjectFactory.createInstance(json, type);
    default: throw new Error(`Unsupported namespace: ${namespace}`);
    }
  }

  /**
   * Create an instance of a class from its FHIR representation.
   * @param {string} shrType - The type of the element (e.g., 'shr.core.CodeableConcept').  This is only used if the type cannot be extracted from the JSON.
   * @param {Object} fhir - The element data in FHIR format (use `{}` and provide `type` for a blank instance)
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(shrType, fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const { namespace } = getNamespaceAndNameFromFHIR(fhir, shrType);
    switch (namespace) {
    case 'shr.adverse': return ShrAdverseObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.allergy': return ShrAllergyObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.base': return ShrBaseObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'brca': return BrcaObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.core': return ShrCoreObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.encounter': return ShrEncounterObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.entity': return ShrEntityObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.financial': return ShrFinancialObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'oncocore': return OncocoreObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.medication': return ShrMedicationObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.procedure': return ShrProcedureObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.research': return ShrResearchObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'tumor': return TumorObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'primitive': return fhir;
    default: throw new Error(`Unsupported namespace: ${namespace}`);
    }
  }
}
