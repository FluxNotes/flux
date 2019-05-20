import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../../json-helper';
import Coverage from './Coverage';
import InsuranceMemberId from './InsuranceMemberId';
import PolicyHolder from './PolicyHolder';

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
    switch (elementName) {
    case 'Coverage': return Coverage.fromJSON(json);
    case 'InsuranceMemberId': return InsuranceMemberId.fromJSON(json);
    case 'PolicyHolder': return PolicyHolder.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'shr.financial') {
      throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Coverage': return Coverage.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'InsuranceMemberId': return InsuranceMemberId.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'PolicyHolder': return PolicyHolder.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${type}`);
    }
  }
}
