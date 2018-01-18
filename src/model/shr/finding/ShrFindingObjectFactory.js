import { getNamespaceAndName } from '../../json-helper';
import Finding from './Finding';
import Observation from './Observation';
import ObservationCode from './ObservationCode';
import Assertion from './Assertion';
import SpecializedFinding from './SpecializedFinding';
import Members from './Members';
import QuestionAnswer from './QuestionAnswer';
import ObservationComponent from './ObservationComponent';
import FindingMethod from './FindingMethod';
import FocalSubject from './FocalSubject';
import FocalSubjectReference from './FocalSubjectReference';
import Evidence from './Evidence';
import FindingStatus from './FindingStatus';
import ValueAbsentReason from './ValueAbsentReason';
import ClinicallyRelevantTime from './ClinicallyRelevantTime';
import ChangeFlag from './ChangeFlag';
import Interpretation from './Interpretation';
import ObservationQualifier from './ObservationQualifier';
import ReferenceRange from './ReferenceRange';
import ApplicableSubpopulation from './ApplicableSubpopulation';
import ApplicableAgeRange from './ApplicableAgeRange';
import NegationFlag from './NegationFlag';
import RelatedFinding from './RelatedFinding';
import BodyStructurePresent from './BodyStructurePresent';
import Morphology from './Morphology';
import BodyStructureAbsent from './BodyStructureAbsent';

/**
 * Generated object factory for the shr.finding namespace.
 */
export default class ShrFindingObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.finding') {
      throw new Error(`Unsupported type in ShrFindingObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Finding': return Finding.fromJSON(json);
    case 'Observation': return Observation.fromJSON(json);
    case 'ObservationCode': return ObservationCode.fromJSON(json);
    case 'Assertion': return Assertion.fromJSON(json);
    case 'SpecializedFinding': return SpecializedFinding.fromJSON(json);
    case 'Members': return Members.fromJSON(json);
    case 'QuestionAnswer': return QuestionAnswer.fromJSON(json);
    case 'ObservationComponent': return ObservationComponent.fromJSON(json);
    case 'FindingMethod': return FindingMethod.fromJSON(json);
    case 'FocalSubject': return FocalSubject.fromJSON(json);
    case 'FocalSubjectReference': return FocalSubjectReference.fromJSON(json);
    case 'Evidence': return Evidence.fromJSON(json);
    case 'FindingStatus': return FindingStatus.fromJSON(json);
    case 'ValueAbsentReason': return ValueAbsentReason.fromJSON(json);
    case 'ClinicallyRelevantTime': return ClinicallyRelevantTime.fromJSON(json);
    case 'ChangeFlag': return ChangeFlag.fromJSON(json);
    case 'Interpretation': return Interpretation.fromJSON(json);
    case 'ObservationQualifier': return ObservationQualifier.fromJSON(json);
    case 'ReferenceRange': return ReferenceRange.fromJSON(json);
    case 'ApplicableSubpopulation': return ApplicableSubpopulation.fromJSON(json);
    case 'ApplicableAgeRange': return ApplicableAgeRange.fromJSON(json);
    case 'NegationFlag': return NegationFlag.fromJSON(json);
    case 'RelatedFinding': return RelatedFinding.fromJSON(json);
    case 'BodyStructurePresent': return BodyStructurePresent.fromJSON(json);
    case 'Morphology': return Morphology.fromJSON(json);
    case 'BodyStructureAbsent': return BodyStructureAbsent.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrFindingObjectFactory: ${type}`);
    }
  }
}
