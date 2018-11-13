import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../json-helper';
import FamilyMember from './FamilyMember';
import FamilyMemberhealthlHistory from './FamilyMemberhealthlHistory';
import FamilyMemberConditionPresentAssertion from './FamilyMemberConditionPresentAssertion';
import ConditionOutcome from './ConditionOutcome';

/**
 * Generated object factory for the fhx namespace.
 */
export default class FhxObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'fhx') {
      throw new Error(`Unsupported type in FhxObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'FamilyMember': return FamilyMember.fromJSON(json);
    case 'FamilyMemberhealthlHistory': return FamilyMemberhealthlHistory.fromJSON(json);
    case 'FamilyMemberConditionPresentAssertion': return FamilyMemberConditionPresentAssertion.fromJSON(json);
    case 'ConditionOutcome': return ConditionOutcome.fromJSON(json);
    default: throw new Error(`Unsupported type in FhxObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'fhx') {
      throw new Error(`Unsupported type in FhxObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'FamilyMember': return FamilyMember.fromFHIR(fhir, asExtension);
    case 'FamilyMemberhealthlHistory': return FamilyMemberhealthlHistory.fromFHIR(fhir, asExtension);
    case 'FamilyMemberConditionPresentAssertion': return FamilyMemberConditionPresentAssertion.fromFHIR(fhir, asExtension);
    case 'ConditionOutcome': return ConditionOutcome.fromFHIR(fhir, asExtension);
    default: throw new Error(`Unsupported type in FhxObjectFactory: ${type}`);
    }
  }
}
