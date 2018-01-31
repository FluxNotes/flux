import { getNamespaceAndName } from '../../json-helper';
import Encounter from './Encounter';
import ReferralDate from './ReferralDate';
import ReferralSourceType from './ReferralSourceType';
import ServiceProvider from './ServiceProvider';
import ServiceGiven from './ServiceGiven';
import TreatmentCooperation from './TreatmentCooperation';
import PaymentSource from './PaymentSource';
import EncounterRequested from './EncounterRequested';
import EncounterPerformed from './EncounterPerformed';
import EncounterNotPerformed from './EncounterNotPerformed';

/**
 * Generated object factory for the shr.encounter namespace.
 */
export default class ShrEncounterObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.encounter') {
      throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Encounter': return Encounter.fromJSON(json);
    case 'ReferralDate': return ReferralDate.fromJSON(json);
    case 'ReferralSourceType': return ReferralSourceType.fromJSON(json);
    case 'ServiceProvider': return ServiceProvider.fromJSON(json);
    case 'ServiceGiven': return ServiceGiven.fromJSON(json);
    case 'TreatmentCooperation': return TreatmentCooperation.fromJSON(json);
    case 'PaymentSource': return PaymentSource.fromJSON(json);
    case 'EncounterRequested': return EncounterRequested.fromJSON(json);
    case 'EncounterPerformed': return EncounterPerformed.fromJSON(json);
    case 'EncounterNotPerformed': return EncounterNotPerformed.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
    }
  }
}
