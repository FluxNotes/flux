// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the classes are generated.

import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../../json-helper';
import ClassRegistry from '../../ClassRegistry';

/**
 * Generated object factory for the shr.financial namespace.
 */
export default class ShrFinancialObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.financial') {
      throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${type}`);
    }
    const klass = ClassRegistry.get('shr.financial', elementName);
    if (!klass) {
      throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${type}`);
    }
    return klass.fromJSON(json);
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {string} shrType - The type of the element (e.g., 'shr.core.CodeableConcept').  This is only used if the type cannot be extracted from the JSON.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `shrType` for a blank instance)
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(shrType, fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, shrType);
    if (namespace !== 'shr.financial') {
      throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${shrType}`);
    }
    const klass = ClassRegistry.get('shr.financial', elementName);
    if (!klass) {
      throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${shrType}`);
    }
    return klass.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
  }
}
