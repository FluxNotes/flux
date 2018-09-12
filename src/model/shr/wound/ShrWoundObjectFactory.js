import { getNamespaceAndName } from '../../json-helper';
import WoundTopic from './WoundTopic';
import WoundNumber from './WoundNumber';
import InjuryCause from './InjuryCause';
import EpisodeOfWound from './EpisodeOfWound';
import WoundPresenceContext from './WoundPresenceContext';
import PressureUlcerStageNPUAP from './PressureUlcerStageNPUAP';
import WoundPresenceStatement from './WoundPresenceStatement';
import WoundEvaluationResultTopic from './WoundEvaluationResultTopic';
import WoundEvaluationSummaryPanel from './WoundEvaluationSummaryPanel';
import WoundObservationContext from './WoundObservationContext';
import WoundAssessmentInterpretation from './WoundAssessmentInterpretation';
import WoundTrend from './WoundTrend';
import PeriwoundDescription from './PeriwoundDescription';
import VisibleInternalStructure from './VisibleInternalStructure';
import PresenceOfWoundTunneling from './PresenceOfWoundTunneling';
import PresenceOfWoundUndermining from './PresenceOfWoundUndermining';
import PresenceOfWoundExudate from './PresenceOfWoundExudate';
import WoundBedAppearanceObservation from './WoundBedAppearanceObservation';
import WoundBedAppearance from './WoundBedAppearance';
import WoundBedAppearancePercentage from './WoundBedAppearancePercentage';
import WoundBedColorObservation from './WoundBedColorObservation';
import WoundBedColor from './WoundBedColor';
import WoundBedColorAreaPercentage from './WoundBedColorAreaPercentage';
import WoundEdgeObservation from './WoundEdgeObservation';
import WoundEdgeDescription from './WoundEdgeDescription';
import WoundEdgeColor from './WoundEdgeColor';
import WoundTunnelingObservation from './WoundTunnelingObservation';
import WoundTunnelLength from './WoundTunnelLength';
import WoundTunnelClockDirection from './WoundTunnelClockDirection';
import WoundUnderminingObservation from './WoundUnderminingObservation';
import WoundUnderminingLength from './WoundUnderminingLength';
import WoundUnderminingClockDirection from './WoundUnderminingClockDirection';
import WoundExudateObservation from './WoundExudateObservation';
import ExudateDrainageAmount from './ExudateDrainageAmount';
import ExudateOdor from './ExudateOdor';
import ExudateColor from './ExudateColor';
import ExudateAppearance from './ExudateAppearance';
import WoundSizeObservation from './WoundSizeObservation';
import WoundLength from './WoundLength';
import WoundWidth from './WoundWidth';
import WoundDepth from './WoundDepth';
import WoundArea from './WoundArea';

/**
 * Generated object factory for the shr.wound namespace.
 */
export default class ShrWoundObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.wound') {
      throw new Error(`Unsupported type in ShrWoundObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'WoundTopic': return WoundTopic.fromJSON(json);
      case 'WoundNumber': return WoundNumber.fromJSON(json);
      case 'InjuryCause': return InjuryCause.fromJSON(json);
      case 'EpisodeOfWound': return EpisodeOfWound.fromJSON(json);
      case 'WoundPresenceContext': return WoundPresenceContext.fromJSON(json);
      case 'PressureUlcerStageNPUAP': return PressureUlcerStageNPUAP.fromJSON(json);
      case 'WoundPresenceStatement': return WoundPresenceStatement.fromJSON(json);
      case 'WoundEvaluationResultTopic': return WoundEvaluationResultTopic.fromJSON(json);
      case 'WoundEvaluationSummaryPanel': return WoundEvaluationSummaryPanel.fromJSON(json);
      case 'WoundObservationContext': return WoundObservationContext.fromJSON(json);
      case 'WoundAssessmentInterpretation': return WoundAssessmentInterpretation.fromJSON(json);
      case 'WoundTrend': return WoundTrend.fromJSON(json);
      case 'PeriwoundDescription': return PeriwoundDescription.fromJSON(json);
      case 'VisibleInternalStructure': return VisibleInternalStructure.fromJSON(json);
      case 'PresenceOfWoundTunneling': return PresenceOfWoundTunneling.fromJSON(json);
      case 'PresenceOfWoundUndermining': return PresenceOfWoundUndermining.fromJSON(json);
      case 'PresenceOfWoundExudate': return PresenceOfWoundExudate.fromJSON(json);
      case 'WoundBedAppearanceObservation': return WoundBedAppearanceObservation.fromJSON(json);
      case 'WoundBedAppearance': return WoundBedAppearance.fromJSON(json);
      case 'WoundBedAppearancePercentage': return WoundBedAppearancePercentage.fromJSON(json);
      case 'WoundBedColorObservation': return WoundBedColorObservation.fromJSON(json);
      case 'WoundBedColor': return WoundBedColor.fromJSON(json);
      case 'WoundBedColorAreaPercentage': return WoundBedColorAreaPercentage.fromJSON(json);
      case 'WoundEdgeObservation': return WoundEdgeObservation.fromJSON(json);
      case 'WoundEdgeDescription': return WoundEdgeDescription.fromJSON(json);
      case 'WoundEdgeColor': return WoundEdgeColor.fromJSON(json);
      case 'WoundTunnelingObservation': return WoundTunnelingObservation.fromJSON(json);
      case 'WoundTunnelLength': return WoundTunnelLength.fromJSON(json);
      case 'WoundTunnelClockDirection': return WoundTunnelClockDirection.fromJSON(json);
      case 'WoundUnderminingObservation': return WoundUnderminingObservation.fromJSON(json);
      case 'WoundUnderminingLength': return WoundUnderminingLength.fromJSON(json);
      case 'WoundUnderminingClockDirection': return WoundUnderminingClockDirection.fromJSON(json);
      case 'WoundExudateObservation': return WoundExudateObservation.fromJSON(json);
      case 'ExudateDrainageAmount': return ExudateDrainageAmount.fromJSON(json);
      case 'ExudateOdor': return ExudateOdor.fromJSON(json);
      case 'ExudateColor': return ExudateColor.fromJSON(json);
      case 'ExudateAppearance': return ExudateAppearance.fromJSON(json);
      case 'WoundSizeObservation': return WoundSizeObservation.fromJSON(json);
      case 'WoundLength': return WoundLength.fromJSON(json);
      case 'WoundWidth': return WoundWidth.fromJSON(json);
      case 'WoundDepth': return WoundDepth.fromJSON(json);
      case 'WoundArea': return WoundArea.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrWoundObjectFactory: ${type}`);
    }
  }
}
