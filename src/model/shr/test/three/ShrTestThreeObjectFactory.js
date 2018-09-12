import { getNamespaceAndName } from '../../../json-helper';
import Foo from './Foo';

/**
 * Generated object factory for the shr.test.three namespace.
 */
export default class ShrTestThreeObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.test.three') {
      throw new Error(`Unsupported type in ShrTestThreeObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'Foo': return Foo.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrTestThreeObjectFactory: ${type}`);
    }
  }
}
