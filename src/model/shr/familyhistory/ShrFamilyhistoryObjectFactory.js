import { getNamespaceAndName } from '../../json-helper';
import FamilyMemberCondition from './FamilyMemberCondition';
import FamilyMemberConditionAbsent from './FamilyMemberConditionAbsent';

/**
 * Generated object factory for the shr.familyhistory namespace.
 */
export default class ShrFamilyhistoryObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.familyhistory') {
      throw new Error(`Unsupported type in ShrFamilyhistoryObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'FamilyMemberCondition': return FamilyMemberCondition.fromJSON(json);
    case 'FamilyMemberConditionAbsent': return FamilyMemberConditionAbsent.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrFamilyhistoryObjectFactory: ${type}`);
    }
  }
}
