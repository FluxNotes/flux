// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the classes are generated.

import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from './json-helper';
import BrcaObjectFactory from './brca/BrcaObjectFactory';
import OncoCoreObjectFactory from './onco/core/OncoCoreObjectFactory';
import ShrBaseObjectFactory from './shr/base/ShrBaseObjectFactory';
import ShrCoreObjectFactory from './shr/core/ShrCoreObjectFactory';
import ShrFhxObjectFactory from './shr/fhx/ShrFhxObjectFactory';
import ShrFinancialObjectFactory from './shr/financial/ShrFinancialObjectFactory';
import ShrLabObjectFactory from './shr/lab/ShrLabObjectFactory';
import ShrSdohObjectFactory from './shr/sdoh/ShrSdohObjectFactory';

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
    case 'brca': return BrcaObjectFactory.createInstance(json, type);
    case 'onco.core': return OncoCoreObjectFactory.createInstance(json, type);
    case 'shr.base': return ShrBaseObjectFactory.createInstance(json, type);
    case 'shr.core': return ShrCoreObjectFactory.createInstance(json, type);
    case 'shr.fhx': return ShrFhxObjectFactory.createInstance(json, type);
    case 'shr.financial': return ShrFinancialObjectFactory.createInstance(json, type);
    case 'shr.lab': return ShrLabObjectFactory.createInstance(json, type);
    case 'shr.sdoh': return ShrSdohObjectFactory.createInstance(json, type);
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
    case 'brca': return BrcaObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'onco.core': return OncoCoreObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.base': return ShrBaseObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.core': return ShrCoreObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.fhx': return ShrFhxObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.financial': return ShrFinancialObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.lab': return ShrLabObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'shr.sdoh': return ShrSdohObjectFactory.createInstanceFromFHIR(shrType, fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'primitive': return fhir;
    default: throw new Error(`Unsupported namespace: ${namespace}`);
    }
  }
}
