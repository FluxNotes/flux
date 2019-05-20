import { getNamespaceAndName } from '../../json-helper';
import SystolicPressure from './SystolicPressure';
import DiastolicPressure from './DiastolicPressure';

/**
 * Generated object factory for the shr.vital namespace.
 */
export default class ShrVitalObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.vital') {
      throw new Error(`Unsupported type in ShrVitalObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'SystolicPressure': return SystolicPressure.fromJSON(json);
      case 'DiastolicPressure': return DiastolicPressure.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrVitalObjectFactory: ${type}`);
    }
  }
}
