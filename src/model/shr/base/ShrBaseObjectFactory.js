import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../../json-helper';
import InformationItem from './InformationItem';
import Entry from './Entry';
import ShrId from './ShrId';
import EntryId from './EntryId';
import EntryType from './EntryType';
import LastUpdated from './LastUpdated';
import RecordStatus from './RecordStatus';
import Narrative from './Narrative';
import NarrativeQualifier from './NarrativeQualifier';
import SecurityLabel from './SecurityLabel';
import Tag from './Tag';
import DerivedFrom from './DerivedFrom';
import RecordedBy from './RecordedBy';
import SignedBy from './SignedBy';
import CosignedBy from './CosignedBy';
import VerifiedBy from './VerifiedBy';
import Attribution from './Attribution';
import RecordedOn from './RecordedOn';
import ActionStatement from './ActionStatement';
import TopicCode from './TopicCode';
import Reason from './Reason';
import ActionPerformed from './ActionPerformed';
import Participant from './Participant';
import ParticipationType from './ParticipationType';
import ParticipationPeriod from './ParticipationPeriod';
import Method from './Method';
import RelatedRequest from './RelatedRequest';
import Outcome from './Outcome';
import ActionRequested from './ActionRequested';
import RequestIntent from './RequestIntent';
import ExpectedPerformanceTime from './ExpectedPerformanceTime';
import ExpectedPerformerType from './ExpectedPerformerType';
import ExpectedPerformer from './ExpectedPerformer';
import ExpectedMethod from './ExpectedMethod';
import PerformerInstructions from './PerformerInstructions';
import PatientInstructions from './PatientInstructions';
import CommunicationMethod from './CommunicationMethod';
import ActionNotPerformed from './ActionNotPerformed';
import ActionRequestedAgainst from './ActionRequestedAgainst';
import NonIndependentFinding from './NonIndependentFinding';
import FindingTopicCode from './FindingTopicCode';
import ExceptionValue from './ExceptionValue';
import ReferenceRange from './ReferenceRange';
import ApplicableSubpopulation from './ApplicableSubpopulation';
import ApplicableAgeRange from './ApplicableAgeRange';
import Finding from './Finding';
import SpecificFocusOfFinding from './SpecificFocusOfFinding';
import RelevantTime from './RelevantTime';
import FindingMethod from './FindingMethod';
import FindingStatus from './FindingStatus';
import Observation from './Observation';
import Observer from './Observer';
import RelationshipToPersonOfRecord from './RelationshipToPersonOfRecord';
import AdditionalText from './AdditionalText';
import Interpretation from './Interpretation';
import PanelMembers from './PanelMembers';
import Precondition from './Precondition';
import DeltaFlag from './DeltaFlag';
import NonLaboratoryObservation from './NonLaboratoryObservation';
import SimpleNonLaboratoryObservation from './SimpleNonLaboratoryObservation';
import CodedNonLaboratoryObservation from './CodedNonLaboratoryObservation';
import SimpleCodedNonLaboratoryObservation from './SimpleCodedNonLaboratoryObservation';
import ComponentOnlyNonLaboratoryObservation from './ComponentOnlyNonLaboratoryObservation';
import LaboratoryObservation from './LaboratoryObservation';
import DiagnosticService from './DiagnosticService';
import CodedLaboratoryObservation from './CodedLaboratoryObservation';
import SimpleLaboratoryObservation from './SimpleLaboratoryObservation';
import SimpleCodedLaboratoryObservation from './SimpleCodedLaboratoryObservation';
import ExistenceAssertion from './ExistenceAssertion';
import ObjectIdentifier from './ObjectIdentifier';
import Certainty from './Certainty';
import PresenceAssertion from './PresenceAssertion';
import AbsenceAssertion from './AbsenceAssertion';
import ConditionPresentAssertion from './ConditionPresentAssertion';
import ConditionCause from './ConditionCause';
import ClinicalStatus from './ClinicalStatus';
import WhenClinicallyRecognized from './WhenClinicallyRecognized';
import PresentOnAdmission from './PresentOnAdmission';
import Severity from './Severity';
import Criticality from './Criticality';
import Stage from './Stage';
import StageDetail from './StageDetail';
import AlleviatingFactor from './AlleviatingFactor';
import ExacerbatingFactor from './ExacerbatingFactor';
import Onset from './Onset';
import Abatement from './Abatement';
import ConditionAbsentAssertion from './ConditionAbsentAssertion';
import ClinicalNote from './ClinicalNote';
import RelationshipExistenceAssertion from './RelationshipExistenceAssertion';

/**
 * Generated object factory for the shr.base namespace.
 */
export default class ShrBaseObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.base') {
      throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'InformationItem': return InformationItem.fromJSON(json);
    case 'Entry': return Entry.fromJSON(json);
    case 'ShrId': return ShrId.fromJSON(json);
    case 'EntryId': return EntryId.fromJSON(json);
    case 'EntryType': return EntryType.fromJSON(json);
    case 'LastUpdated': return LastUpdated.fromJSON(json);
    case 'RecordStatus': return RecordStatus.fromJSON(json);
    case 'Narrative': return Narrative.fromJSON(json);
    case 'NarrativeQualifier': return NarrativeQualifier.fromJSON(json);
    case 'SecurityLabel': return SecurityLabel.fromJSON(json);
    case 'Tag': return Tag.fromJSON(json);
    case 'DerivedFrom': return DerivedFrom.fromJSON(json);
    case 'RecordedBy': return RecordedBy.fromJSON(json);
    case 'SignedBy': return SignedBy.fromJSON(json);
    case 'CosignedBy': return CosignedBy.fromJSON(json);
    case 'VerifiedBy': return VerifiedBy.fromJSON(json);
    case 'Attribution': return Attribution.fromJSON(json);
    case 'RecordedOn': return RecordedOn.fromJSON(json);
    case 'ActionStatement': return ActionStatement.fromJSON(json);
    case 'TopicCode': return TopicCode.fromJSON(json);
    case 'Reason': return Reason.fromJSON(json);
    case 'ActionPerformed': return ActionPerformed.fromJSON(json);
    case 'Participant': return Participant.fromJSON(json);
    case 'ParticipationType': return ParticipationType.fromJSON(json);
    case 'ParticipationPeriod': return ParticipationPeriod.fromJSON(json);
    case 'Method': return Method.fromJSON(json);
    case 'RelatedRequest': return RelatedRequest.fromJSON(json);
    case 'Outcome': return Outcome.fromJSON(json);
    case 'ActionRequested': return ActionRequested.fromJSON(json);
    case 'RequestIntent': return RequestIntent.fromJSON(json);
    case 'ExpectedPerformanceTime': return ExpectedPerformanceTime.fromJSON(json);
    case 'ExpectedPerformerType': return ExpectedPerformerType.fromJSON(json);
    case 'ExpectedPerformer': return ExpectedPerformer.fromJSON(json);
    case 'ExpectedMethod': return ExpectedMethod.fromJSON(json);
    case 'PerformerInstructions': return PerformerInstructions.fromJSON(json);
    case 'PatientInstructions': return PatientInstructions.fromJSON(json);
    case 'CommunicationMethod': return CommunicationMethod.fromJSON(json);
    case 'ActionNotPerformed': return ActionNotPerformed.fromJSON(json);
    case 'ActionRequestedAgainst': return ActionRequestedAgainst.fromJSON(json);
    case 'NonIndependentFinding': return NonIndependentFinding.fromJSON(json);
    case 'FindingTopicCode': return FindingTopicCode.fromJSON(json);
    case 'ExceptionValue': return ExceptionValue.fromJSON(json);
    case 'ReferenceRange': return ReferenceRange.fromJSON(json);
    case 'ApplicableSubpopulation': return ApplicableSubpopulation.fromJSON(json);
    case 'ApplicableAgeRange': return ApplicableAgeRange.fromJSON(json);
    case 'Finding': return Finding.fromJSON(json);
    case 'SpecificFocusOfFinding': return SpecificFocusOfFinding.fromJSON(json);
    case 'RelevantTime': return RelevantTime.fromJSON(json);
    case 'FindingMethod': return FindingMethod.fromJSON(json);
    case 'FindingStatus': return FindingStatus.fromJSON(json);
    case 'Observation': return Observation.fromJSON(json);
    case 'Observer': return Observer.fromJSON(json);
    case 'RelationshipToPersonOfRecord': return RelationshipToPersonOfRecord.fromJSON(json);
    case 'AdditionalText': return AdditionalText.fromJSON(json);
    case 'Interpretation': return Interpretation.fromJSON(json);
    case 'PanelMembers': return PanelMembers.fromJSON(json);
    case 'Precondition': return Precondition.fromJSON(json);
    case 'DeltaFlag': return DeltaFlag.fromJSON(json);
    case 'NonLaboratoryObservation': return NonLaboratoryObservation.fromJSON(json);
    case 'SimpleNonLaboratoryObservation': return SimpleNonLaboratoryObservation.fromJSON(json);
    case 'CodedNonLaboratoryObservation': return CodedNonLaboratoryObservation.fromJSON(json);
    case 'SimpleCodedNonLaboratoryObservation': return SimpleCodedNonLaboratoryObservation.fromJSON(json);
    case 'ComponentOnlyNonLaboratoryObservation': return ComponentOnlyNonLaboratoryObservation.fromJSON(json);
    case 'LaboratoryObservation': return LaboratoryObservation.fromJSON(json);
    case 'DiagnosticService': return DiagnosticService.fromJSON(json);
    case 'CodedLaboratoryObservation': return CodedLaboratoryObservation.fromJSON(json);
    case 'SimpleLaboratoryObservation': return SimpleLaboratoryObservation.fromJSON(json);
    case 'SimpleCodedLaboratoryObservation': return SimpleCodedLaboratoryObservation.fromJSON(json);
    case 'ExistenceAssertion': return ExistenceAssertion.fromJSON(json);
    case 'ObjectIdentifier': return ObjectIdentifier.fromJSON(json);
    case 'Certainty': return Certainty.fromJSON(json);
    case 'PresenceAssertion': return PresenceAssertion.fromJSON(json);
    case 'AbsenceAssertion': return AbsenceAssertion.fromJSON(json);
    case 'ConditionPresentAssertion': return ConditionPresentAssertion.fromJSON(json);
    case 'ConditionCause': return ConditionCause.fromJSON(json);
    case 'ClinicalStatus': return ClinicalStatus.fromJSON(json);
    case 'WhenClinicallyRecognized': return WhenClinicallyRecognized.fromJSON(json);
    case 'PresentOnAdmission': return PresentOnAdmission.fromJSON(json);
    case 'Severity': return Severity.fromJSON(json);
    case 'Criticality': return Criticality.fromJSON(json);
    case 'Stage': return Stage.fromJSON(json);
    case 'StageDetail': return StageDetail.fromJSON(json);
    case 'AlleviatingFactor': return AlleviatingFactor.fromJSON(json);
    case 'ExacerbatingFactor': return ExacerbatingFactor.fromJSON(json);
    case 'Onset': return Onset.fromJSON(json);
    case 'Abatement': return Abatement.fromJSON(json);
    case 'ConditionAbsentAssertion': return ConditionAbsentAssertion.fromJSON(json);
    case 'ClinicalNote': return ClinicalNote.fromJSON(json);
    case 'RelationshipExistenceAssertion': return RelationshipExistenceAssertion.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
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
    if (namespace !== 'shr.base') {
      throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'InformationItem': return InformationItem.fromFHIR(fhir, asExtension);
    case 'Entry': return Entry.fromFHIR(fhir, asExtension);
    case 'ShrId': return ShrId.fromFHIR(fhir, asExtension);
    case 'EntryId': return EntryId.fromFHIR(fhir, asExtension);
    case 'EntryType': return EntryType.fromFHIR(fhir, asExtension);
    case 'LastUpdated': return LastUpdated.fromFHIR(fhir, asExtension);
    case 'RecordStatus': return RecordStatus.fromFHIR(fhir, asExtension);
    case 'Narrative': return Narrative.fromFHIR(fhir, asExtension);
    case 'NarrativeQualifier': return NarrativeQualifier.fromFHIR(fhir, asExtension);
    case 'SecurityLabel': return SecurityLabel.fromFHIR(fhir, asExtension);
    case 'Tag': return Tag.fromFHIR(fhir, asExtension);
    case 'DerivedFrom': return DerivedFrom.fromFHIR(fhir, asExtension);
    case 'RecordedBy': return RecordedBy.fromFHIR(fhir, asExtension);
    case 'SignedBy': return SignedBy.fromFHIR(fhir, asExtension);
    case 'CosignedBy': return CosignedBy.fromFHIR(fhir, asExtension);
    case 'VerifiedBy': return VerifiedBy.fromFHIR(fhir, asExtension);
    case 'Attribution': return Attribution.fromFHIR(fhir, asExtension);
    case 'RecordedOn': return RecordedOn.fromFHIR(fhir, asExtension);
    case 'ActionStatement': return ActionStatement.fromFHIR(fhir, asExtension);
    case 'TopicCode': return TopicCode.fromFHIR(fhir, asExtension);
    case 'Reason': return Reason.fromFHIR(fhir, asExtension);
    case 'ActionPerformed': return ActionPerformed.fromFHIR(fhir, asExtension);
    case 'Participant': return Participant.fromFHIR(fhir, asExtension);
    case 'ParticipationType': return ParticipationType.fromFHIR(fhir, asExtension);
    case 'ParticipationPeriod': return ParticipationPeriod.fromFHIR(fhir, asExtension);
    case 'Method': return Method.fromFHIR(fhir, asExtension);
    case 'RelatedRequest': return RelatedRequest.fromFHIR(fhir, asExtension);
    case 'Outcome': return Outcome.fromFHIR(fhir, asExtension);
    case 'ActionRequested': return ActionRequested.fromFHIR(fhir, asExtension);
    case 'RequestIntent': return RequestIntent.fromFHIR(fhir, asExtension);
    case 'ExpectedPerformanceTime': return ExpectedPerformanceTime.fromFHIR(fhir, asExtension);
    case 'ExpectedPerformerType': return ExpectedPerformerType.fromFHIR(fhir, asExtension);
    case 'ExpectedPerformer': return ExpectedPerformer.fromFHIR(fhir, asExtension);
    case 'ExpectedMethod': return ExpectedMethod.fromFHIR(fhir, asExtension);
    case 'PerformerInstructions': return PerformerInstructions.fromFHIR(fhir, asExtension);
    case 'PatientInstructions': return PatientInstructions.fromFHIR(fhir, asExtension);
    case 'CommunicationMethod': return CommunicationMethod.fromFHIR(fhir, asExtension);
    case 'ActionNotPerformed': return ActionNotPerformed.fromFHIR(fhir, asExtension);
    case 'ActionRequestedAgainst': return ActionRequestedAgainst.fromFHIR(fhir, asExtension);
    case 'NonIndependentFinding': return NonIndependentFinding.fromFHIR(fhir, asExtension);
    case 'FindingTopicCode': return FindingTopicCode.fromFHIR(fhir, asExtension);
    case 'ExceptionValue': return ExceptionValue.fromFHIR(fhir, asExtension);
    case 'ReferenceRange': return ReferenceRange.fromFHIR(fhir, asExtension);
    case 'ApplicableSubpopulation': return ApplicableSubpopulation.fromFHIR(fhir, asExtension);
    case 'ApplicableAgeRange': return ApplicableAgeRange.fromFHIR(fhir, asExtension);
    case 'Finding': return Finding.fromFHIR(fhir, asExtension);
    case 'SpecificFocusOfFinding': return SpecificFocusOfFinding.fromFHIR(fhir, asExtension);
    case 'RelevantTime': return RelevantTime.fromFHIR(fhir, asExtension);
    case 'FindingMethod': return FindingMethod.fromFHIR(fhir, asExtension);
    case 'FindingStatus': return FindingStatus.fromFHIR(fhir, asExtension);
    case 'Observation': return Observation.fromFHIR(fhir, asExtension);
    case 'Observer': return Observer.fromFHIR(fhir, asExtension);
    case 'RelationshipToPersonOfRecord': return RelationshipToPersonOfRecord.fromFHIR(fhir, asExtension);
    case 'AdditionalText': return AdditionalText.fromFHIR(fhir, asExtension);
    case 'Interpretation': return Interpretation.fromFHIR(fhir, asExtension);
    case 'PanelMembers': return PanelMembers.fromFHIR(fhir, asExtension);
    case 'Precondition': return Precondition.fromFHIR(fhir, asExtension);
    case 'DeltaFlag': return DeltaFlag.fromFHIR(fhir, asExtension);
    case 'NonLaboratoryObservation': return NonLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'SimpleNonLaboratoryObservation': return SimpleNonLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'CodedNonLaboratoryObservation': return CodedNonLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'SimpleCodedNonLaboratoryObservation': return SimpleCodedNonLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'ComponentOnlyNonLaboratoryObservation': return ComponentOnlyNonLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'LaboratoryObservation': return LaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'DiagnosticService': return DiagnosticService.fromFHIR(fhir, asExtension);
    case 'CodedLaboratoryObservation': return CodedLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'SimpleLaboratoryObservation': return SimpleLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'SimpleCodedLaboratoryObservation': return SimpleCodedLaboratoryObservation.fromFHIR(fhir, asExtension);
    case 'ExistenceAssertion': return ExistenceAssertion.fromFHIR(fhir, asExtension);
    case 'ObjectIdentifier': return ObjectIdentifier.fromFHIR(fhir, asExtension);
    case 'Certainty': return Certainty.fromFHIR(fhir, asExtension);
    case 'PresenceAssertion': return PresenceAssertion.fromFHIR(fhir, asExtension);
    case 'AbsenceAssertion': return AbsenceAssertion.fromFHIR(fhir, asExtension);
    case 'ConditionPresentAssertion': return ConditionPresentAssertion.fromFHIR(fhir, asExtension);
    case 'ConditionCause': return ConditionCause.fromFHIR(fhir, asExtension);
    case 'ClinicalStatus': return ClinicalStatus.fromFHIR(fhir, asExtension);
    case 'WhenClinicallyRecognized': return WhenClinicallyRecognized.fromFHIR(fhir, asExtension);
    case 'PresentOnAdmission': return PresentOnAdmission.fromFHIR(fhir, asExtension);
    case 'Severity': return Severity.fromFHIR(fhir, asExtension);
    case 'Criticality': return Criticality.fromFHIR(fhir, asExtension);
    case 'Stage': return Stage.fromFHIR(fhir, asExtension);
    case 'StageDetail': return StageDetail.fromFHIR(fhir, asExtension);
    case 'AlleviatingFactor': return AlleviatingFactor.fromFHIR(fhir, asExtension);
    case 'ExacerbatingFactor': return ExacerbatingFactor.fromFHIR(fhir, asExtension);
    case 'Onset': return Onset.fromFHIR(fhir, asExtension);
    case 'Abatement': return Abatement.fromFHIR(fhir, asExtension);
    case 'ConditionAbsentAssertion': return ConditionAbsentAssertion.fromFHIR(fhir, asExtension);
    case 'ClinicalNote': return ClinicalNote.fromFHIR(fhir, asExtension);
    case 'RelationshipExistenceAssertion': return RelationshipExistenceAssertion.fromFHIR(fhir, asExtension);
    default: throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
    }
  }
}
