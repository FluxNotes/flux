import { getNamespaceAndName } from '../../json-helper';
import Package from './Package';
import Class from './Class';
import Enum from './Enum';
import Await from './Await';
import ReservedWordEntry from './ReservedWordEntry';

/**
 * Generated object factory for the shr.reserved namespace.
 */
export default class ShrReservedObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.reserved') {
      throw new Error(`Unsupported type in ShrReservedObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'Package': return Package.fromJSON(json);
      case 'Class': return Class.fromJSON(json);
      case 'Enum': return Enum.fromJSON(json);
      case 'Await': return Await.fromJSON(json);
      case 'ReservedWordEntry': return ReservedWordEntry.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrReservedObjectFactory: ${type}`);
    }
  }
}
