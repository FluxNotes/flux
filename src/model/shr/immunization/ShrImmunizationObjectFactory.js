import { getNamespaceAndName } from '../../json-helper';
import Vaccine from './Vaccine';
import ImmunizationAction from './ImmunizationAction';
import ImmunizationGiven from './ImmunizationGiven';
import ImmunizationNotGiven from './ImmunizationNotGiven';
import ImmunizationRequested from './ImmunizationRequested';
import ImmunizationRequestedAgainst from './ImmunizationRequestedAgainst';

/**
 * Generated object factory for the shr.immunization namespace.
 */
export default class ShrImmunizationObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.immunization') {
      throw new Error(`Unsupported type in ShrImmunizationObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Vaccine': return Vaccine.fromJSON(json);
    case 'ImmunizationAction': return ImmunizationAction.fromJSON(json);
    case 'ImmunizationGiven': return ImmunizationGiven.fromJSON(json);
    case 'ImmunizationNotGiven': return ImmunizationNotGiven.fromJSON(json);
    case 'ImmunizationRequested': return ImmunizationRequested.fromJSON(json);
    case 'ImmunizationRequestedAgainst': return ImmunizationRequestedAgainst.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrImmunizationObjectFactory: ${type}`);
    }
  }
}
