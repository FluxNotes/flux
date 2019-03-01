import { getNamespaceAndName } from '../../json-helper';
import Period from './Period';
import Thing from './Thing';

/**
 * Generated object factory for the other.ns namespace.
 */
export default class OtherNsObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'other.ns') {
      throw new Error(`Unsupported type in OtherNsObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Period': return Period.fromJSON(json);
    case 'Thing': return Thing.fromJSON(json);
    default: throw new Error(`Unsupported type in OtherNsObjectFactory: ${type}`);
    }
  }
}
