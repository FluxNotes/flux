import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../json-helper';
import WoundPresenceAssertion from './WoundPresenceAssertion';
import WoundIdentifier from './WoundIdentifier';
import WoundTypeEtiology from './WoundTypeEtiology';
import WoundAnatomicalLocation from './WoundAnatomicalLocation';
import WoundAbsenceAssertion from './WoundAbsenceAssertion';
import WoundAssessmentPanel from './WoundAssessmentPanel';
import WoundEpisode from './WoundEpisode';
import WoundPeriwoundDescription from './WoundPeriwoundDescription';
import WoundVisibleInternalStructure from './WoundVisibleInternalStructure';
import WoundPressureUlcerAssociation from './WoundPressureUlcerAssociation';
import WoundTunnelingPresentOrAbsent from './WoundTunnelingPresentOrAbsent';
import WoundUnderminingPresentOrAbsent from './WoundUnderminingPresentOrAbsent';
import WoundExudatePresentOrAbsent from './WoundExudatePresentOrAbsent';
import WoundAssessmentInterpretation from './WoundAssessmentInterpretation';
import WoundTrend from './WoundTrend';
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
import WoundExudateAmount from './WoundExudateAmount';
import WoundExudateVolume from './WoundExudateVolume';
import WoundExudateAppearance from './WoundExudateAppearance';
import WoundExudateColor from './WoundExudateColor';
import WoundExudateOdor from './WoundExudateOdor';
import WoundSizeObservation from './WoundSizeObservation';
import WoundLength from './WoundLength';
import WoundWidth from './WoundWidth';
import WoundDepth from './WoundDepth';
import WoundArea from './WoundArea';

/**
 * Generated object factory for the sw namespace.
 */
export default class SwObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'sw') {
      throw new Error(`Unsupported type in SwObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'WoundPresenceAssertion': return WoundPresenceAssertion.fromJSON(json);
    case 'WoundIdentifier': return WoundIdentifier.fromJSON(json);
    case 'WoundTypeEtiology': return WoundTypeEtiology.fromJSON(json);
    case 'WoundAnatomicalLocation': return WoundAnatomicalLocation.fromJSON(json);
    case 'WoundAbsenceAssertion': return WoundAbsenceAssertion.fromJSON(json);
    case 'WoundAssessmentPanel': return WoundAssessmentPanel.fromJSON(json);
    case 'WoundEpisode': return WoundEpisode.fromJSON(json);
    case 'WoundPeriwoundDescription': return WoundPeriwoundDescription.fromJSON(json);
    case 'WoundVisibleInternalStructure': return WoundVisibleInternalStructure.fromJSON(json);
    case 'WoundPressureUlcerAssociation': return WoundPressureUlcerAssociation.fromJSON(json);
    case 'WoundTunnelingPresentOrAbsent': return WoundTunnelingPresentOrAbsent.fromJSON(json);
    case 'WoundUnderminingPresentOrAbsent': return WoundUnderminingPresentOrAbsent.fromJSON(json);
    case 'WoundExudatePresentOrAbsent': return WoundExudatePresentOrAbsent.fromJSON(json);
    case 'WoundAssessmentInterpretation': return WoundAssessmentInterpretation.fromJSON(json);
    case 'WoundTrend': return WoundTrend.fromJSON(json);
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
    case 'WoundExudateAmount': return WoundExudateAmount.fromJSON(json);
    case 'WoundExudateVolume': return WoundExudateVolume.fromJSON(json);
    case 'WoundExudateAppearance': return WoundExudateAppearance.fromJSON(json);
    case 'WoundExudateColor': return WoundExudateColor.fromJSON(json);
    case 'WoundExudateOdor': return WoundExudateOdor.fromJSON(json);
    case 'WoundSizeObservation': return WoundSizeObservation.fromJSON(json);
    case 'WoundLength': return WoundLength.fromJSON(json);
    case 'WoundWidth': return WoundWidth.fromJSON(json);
    case 'WoundDepth': return WoundDepth.fromJSON(json);
    case 'WoundArea': return WoundArea.fromJSON(json);
    default: throw new Error(`Unsupported type in SwObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'sw') {
      throw new Error(`Unsupported type in SwObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'WoundPresenceAssertion': return WoundPresenceAssertion.fromFHIR(fhir, asExtension);
    case 'WoundIdentifier': return WoundIdentifier.fromFHIR(fhir, asExtension);
    case 'WoundTypeEtiology': return WoundTypeEtiology.fromFHIR(fhir, asExtension);
    case 'WoundAnatomicalLocation': return WoundAnatomicalLocation.fromFHIR(fhir, asExtension);
    case 'WoundAbsenceAssertion': return WoundAbsenceAssertion.fromFHIR(fhir, asExtension);
    case 'WoundAssessmentPanel': return WoundAssessmentPanel.fromFHIR(fhir, asExtension);
    case 'WoundEpisode': return WoundEpisode.fromFHIR(fhir, asExtension);
    case 'WoundPeriwoundDescription': return WoundPeriwoundDescription.fromFHIR(fhir, asExtension);
    case 'WoundVisibleInternalStructure': return WoundVisibleInternalStructure.fromFHIR(fhir, asExtension);
    case 'WoundPressureUlcerAssociation': return WoundPressureUlcerAssociation.fromFHIR(fhir, asExtension);
    case 'WoundTunnelingPresentOrAbsent': return WoundTunnelingPresentOrAbsent.fromFHIR(fhir, asExtension);
    case 'WoundUnderminingPresentOrAbsent': return WoundUnderminingPresentOrAbsent.fromFHIR(fhir, asExtension);
    case 'WoundExudatePresentOrAbsent': return WoundExudatePresentOrAbsent.fromFHIR(fhir, asExtension);
    case 'WoundAssessmentInterpretation': return WoundAssessmentInterpretation.fromFHIR(fhir, asExtension);
    case 'WoundTrend': return WoundTrend.fromFHIR(fhir, asExtension);
    case 'WoundBedAppearanceObservation': return WoundBedAppearanceObservation.fromFHIR(fhir, asExtension);
    case 'WoundBedAppearance': return WoundBedAppearance.fromFHIR(fhir, asExtension);
    case 'WoundBedAppearancePercentage': return WoundBedAppearancePercentage.fromFHIR(fhir, asExtension);
    case 'WoundBedColorObservation': return WoundBedColorObservation.fromFHIR(fhir, asExtension);
    case 'WoundBedColor': return WoundBedColor.fromFHIR(fhir, asExtension);
    case 'WoundBedColorAreaPercentage': return WoundBedColorAreaPercentage.fromFHIR(fhir, asExtension);
    case 'WoundEdgeObservation': return WoundEdgeObservation.fromFHIR(fhir, asExtension);
    case 'WoundEdgeDescription': return WoundEdgeDescription.fromFHIR(fhir, asExtension);
    case 'WoundEdgeColor': return WoundEdgeColor.fromFHIR(fhir, asExtension);
    case 'WoundTunnelingObservation': return WoundTunnelingObservation.fromFHIR(fhir, asExtension);
    case 'WoundTunnelLength': return WoundTunnelLength.fromFHIR(fhir, asExtension);
    case 'WoundTunnelClockDirection': return WoundTunnelClockDirection.fromFHIR(fhir, asExtension);
    case 'WoundUnderminingObservation': return WoundUnderminingObservation.fromFHIR(fhir, asExtension);
    case 'WoundUnderminingLength': return WoundUnderminingLength.fromFHIR(fhir, asExtension);
    case 'WoundUnderminingClockDirection': return WoundUnderminingClockDirection.fromFHIR(fhir, asExtension);
    case 'WoundExudateObservation': return WoundExudateObservation.fromFHIR(fhir, asExtension);
    case 'WoundExudateAmount': return WoundExudateAmount.fromFHIR(fhir, asExtension);
    case 'WoundExudateVolume': return WoundExudateVolume.fromFHIR(fhir, asExtension);
    case 'WoundExudateAppearance': return WoundExudateAppearance.fromFHIR(fhir, asExtension);
    case 'WoundExudateColor': return WoundExudateColor.fromFHIR(fhir, asExtension);
    case 'WoundExudateOdor': return WoundExudateOdor.fromFHIR(fhir, asExtension);
    case 'WoundSizeObservation': return WoundSizeObservation.fromFHIR(fhir, asExtension);
    case 'WoundLength': return WoundLength.fromFHIR(fhir, asExtension);
    case 'WoundWidth': return WoundWidth.fromFHIR(fhir, asExtension);
    case 'WoundDepth': return WoundDepth.fromFHIR(fhir, asExtension);
    case 'WoundArea': return WoundArea.fromFHIR(fhir, asExtension);
    default: throw new Error(`Unsupported type in SwObjectFactory: ${type}`);
    }
  }
}
