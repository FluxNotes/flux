import { getNamespaceAndName } from '../../json-helper';
import NoAdverseEvent from './NoAdverseEvent';
import AdverseEvent from './AdverseEvent';
import SeriousAdverseEvent from './SeriousAdverseEvent';
import AdverseEventGrade from './AdverseEventGrade';
import CauseCategory from './CauseCategory';
import AdverseEventAttribution from './AdverseEventAttribution';
import ActionTaken from './ActionTaken';
import ToxicReaction from './ToxicReaction';

/**
 * Generated object factory for the shr.adverse namespace.
 */
export default class ShrAdverseObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.adverse') {
      throw new Error(`Unsupported type in ShrAdverseObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'NoAdverseEvent': return NoAdverseEvent.fromJSON(json);
      case 'AdverseEvent': return AdverseEvent.fromJSON(json);
      case 'SeriousAdverseEvent': return SeriousAdverseEvent.fromJSON(json);
      case 'AdverseEventGrade': return AdverseEventGrade.fromJSON(json);
      case 'CauseCategory': return CauseCategory.fromJSON(json);
      case 'AdverseEventAttribution': return AdverseEventAttribution.fromJSON(json);
      case 'ActionTaken': return ActionTaken.fromJSON(json);
      case 'ToxicReaction': return ToxicReaction.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrAdverseObjectFactory: ${type}`);
    }
  }
}
