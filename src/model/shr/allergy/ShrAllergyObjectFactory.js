import { getNamespaceAndName } from '../../json-helper';
import SubstanceCategory from './SubstanceCategory';
import VerificationStatus from './VerificationStatus';
import AllergyIntolerance from './AllergyIntolerance';
import MostRecentOccurrenceTime from './MostRecentOccurrenceTime';
import AdverseReaction from './AdverseReaction';
import AllergenIrritant from './AllergenIrritant';
import Manifestation from './Manifestation';
import NoAllergyToSubstance from './NoAllergyToSubstance';
import NoKnownAllergy from './NoKnownAllergy';

/**
 * Generated object factory for the shr.allergy namespace.
 */
export default class ShrAllergyObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.allergy') {
      throw new Error(`Unsupported type in ShrAllergyObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'SubstanceCategory': return SubstanceCategory.fromJSON(json);
    case 'VerificationStatus': return VerificationStatus.fromJSON(json);
    case 'AllergyIntolerance': return AllergyIntolerance.fromJSON(json);
    case 'MostRecentOccurrenceTime': return MostRecentOccurrenceTime.fromJSON(json);
    case 'AdverseReaction': return AdverseReaction.fromJSON(json);
    case 'AllergenIrritant': return AllergenIrritant.fromJSON(json);
    case 'Manifestation': return Manifestation.fromJSON(json);
    case 'NoAllergyToSubstance': return NoAllergyToSubstance.fromJSON(json);
    case 'NoKnownAllergy': return NoKnownAllergy.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrAllergyObjectFactory: ${type}`);
    }
  }
}
