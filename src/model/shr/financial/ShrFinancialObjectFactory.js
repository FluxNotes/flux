import { getNamespaceAndName } from '../../json-helper';
import Coverage from './Coverage';
import InsuranceMemberId from './InsuranceMemberId';

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
    }
    throw new Error(`Unsupported type in ShrFinancialObjectFactory: ${type}`);
  }
}
