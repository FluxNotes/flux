import { getNamespaceAndName } from '../../json-helper';
import PregnancyIntention from './PregnancyIntention';
import SexualIdentity from './SexualIdentity';
import GenderIdentity from './GenderIdentity';
import SexualOrientation from './SexualOrientation';
import SexualBehavior from './SexualBehavior';
import SexualActivity from './SexualActivity';
import NumberOfSexualPartnersPastYear from './NumberOfSexualPartnersPastYear';
import IntercourseDifficulty from './IntercourseDifficulty';
import ContraceptivesUsed from './ContraceptivesUsed';
import ContraceptiveMethodUsed from './ContraceptiveMethodUsed';
import ContraceptiveMethodFrequency from './ContraceptiveMethodFrequency';
import ContraceptiveMethodReason from './ContraceptiveMethodReason';
import ContraceptiveNotUsedReason from './ContraceptiveNotUsedReason';
import ContraceptiveAction from './ContraceptiveAction';
import ContraceptiveMethodRequested from './ContraceptiveMethodRequested';
import ContraceptiveMethodRequestedAgainst from './ContraceptiveMethodRequestedAgainst';
import PregnancyHistory from './PregnancyHistory';
import CurrentPregnancyStatus from './CurrentPregnancyStatus';
import NumberOfPreviousPregnancies from './NumberOfPreviousPregnancies';
import NumberOfLivingChildren from './NumberOfLivingChildren';

/**
 * Generated object factory for the shr.sex namespace.
 */
export default class ShrSexObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.sex') {
      throw new Error(`Unsupported type in ShrSexObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'PregnancyIntention': return PregnancyIntention.fromJSON(json);
    case 'SexualIdentity': return SexualIdentity.fromJSON(json);
    case 'GenderIdentity': return GenderIdentity.fromJSON(json);
    case 'SexualOrientation': return SexualOrientation.fromJSON(json);
    case 'SexualBehavior': return SexualBehavior.fromJSON(json);
    case 'SexualActivity': return SexualActivity.fromJSON(json);
    case 'NumberOfSexualPartnersPastYear': return NumberOfSexualPartnersPastYear.fromJSON(json);
    case 'IntercourseDifficulty': return IntercourseDifficulty.fromJSON(json);
    case 'ContraceptivesUsed': return ContraceptivesUsed.fromJSON(json);
    case 'ContraceptiveMethodUsed': return ContraceptiveMethodUsed.fromJSON(json);
    case 'ContraceptiveMethodFrequency': return ContraceptiveMethodFrequency.fromJSON(json);
    case 'ContraceptiveMethodReason': return ContraceptiveMethodReason.fromJSON(json);
    case 'ContraceptiveNotUsedReason': return ContraceptiveNotUsedReason.fromJSON(json);
    case 'ContraceptiveAction': return ContraceptiveAction.fromJSON(json);
    case 'ContraceptiveMethodRequested': return ContraceptiveMethodRequested.fromJSON(json);
    case 'ContraceptiveMethodRequestedAgainst': return ContraceptiveMethodRequestedAgainst.fromJSON(json);
    case 'PregnancyHistory': return PregnancyHistory.fromJSON(json);
    case 'CurrentPregnancyStatus': return CurrentPregnancyStatus.fromJSON(json);
    case 'NumberOfPreviousPregnancies': return NumberOfPreviousPregnancies.fromJSON(json);
    case 'NumberOfLivingChildren': return NumberOfLivingChildren.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrSexObjectFactory: ${type}`);
    }
  }
}
