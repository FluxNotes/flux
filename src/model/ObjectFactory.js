import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from './json-helper';
import ShrBaseObjectFactory from './shr/base/ShrBaseObjectFactory';
import ShrCompositionObjectFactory from './shr/composition/ShrCompositionObjectFactory';
import ShrCoreObjectFactory from './shr/core/ShrCoreObjectFactory';
import ShrEncounterObjectFactory from './shr/encounter/ShrEncounterObjectFactory';
import ShrEntityObjectFactory from './shr/entity/ShrEntityObjectFactory';
import FhxObjectFactory from './fhx/FhxObjectFactory';
import ShrFinancialObjectFactory from './shr/financial/ShrFinancialObjectFactory';
import McodeObjectFactory from './mcode/McodeObjectFactory';
import ShrMedicationObjectFactory from './shr/medication/ShrMedicationObjectFactory';
import OdhObjectFactory from './odh/OdhObjectFactory';
import OncologyObjectFactory from './oncology/OncologyObjectFactory';
import ShrProcedureObjectFactory from './shr/procedure/ShrProcedureObjectFactory';
import ShrResearchObjectFactory from './shr/research/ShrResearchObjectFactory';
import SwObjectFactory from './sw/SwObjectFactory';

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
    case 'shr.base': return ShrBaseObjectFactory.createInstance(json, type);
    case 'shr.composition': return ShrCompositionObjectFactory.createInstance(json, type);
    case 'shr.core': return ShrCoreObjectFactory.createInstance(json, type);
    case 'shr.encounter': return ShrEncounterObjectFactory.createInstance(json, type);
    case 'shr.entity': return ShrEntityObjectFactory.createInstance(json, type);
    case 'fhx': return FhxObjectFactory.createInstance(json, type);
    case 'shr.financial': return ShrFinancialObjectFactory.createInstance(json, type);
    case 'mcode': return McodeObjectFactory.createInstance(json, type);
    case 'shr.medication': return ShrMedicationObjectFactory.createInstance(json, type);
    case 'odh': return OdhObjectFactory.createInstance(json, type);
    case 'oncology': return OncologyObjectFactory.createInstance(json, type);
    case 'shr.procedure': return ShrProcedureObjectFactory.createInstance(json, type);
    case 'shr.research': return ShrResearchObjectFactory.createInstance(json, type);
    case 'sw': return SwObjectFactory.createInstance(json, type);
    default: throw new Error(`Unsupported namespace: ${namespace}`);
    }
  }

  /**
   * Create an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in FHIR format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, asExtension=false) {
    const { namespace } = getNamespaceAndNameFromFHIR(fhir, type);
    switch (namespace) {
    case 'shr.base': return ShrBaseObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.composition': return ShrCompositionObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.core': return ShrCoreObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.encounter': return ShrEncounterObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.entity': return ShrEntityObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'fhx': return FhxObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.financial': return ShrFinancialObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'mcode': return McodeObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.medication': return ShrMedicationObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'odh': return OdhObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'oncology': return OncologyObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.procedure': return ShrProcedureObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'shr.research': return ShrResearchObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    case 'sw': return SwObjectFactory.createInstanceFromFHIR(fhir, type, asExtension);
    default: throw new Error(`Unsupported namespace: ${namespace}`);
    }
  }
}
