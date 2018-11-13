import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../json-helper';
import OccupationalDataForHealth from './OccupationalDataForHealth';
import OccupationalDataSection from './OccupationalDataSection';
import SocialHistoryObservation from './SocialHistoryObservation';
import CodedSocialHistoryObservation from './CodedSocialHistoryObservation';
import PersonEmploymentStatus from './PersonEmploymentStatus';
import RetirementDate from './RetirementDate';
import CombatZonePeriod from './CombatZonePeriod';
import UsualWork from './UsualWork';
import UsualIndustry from './UsualIndustry';
import UsualOccupationDuration from './UsualOccupationDuration';
import PastOrPresentJob from './PastOrPresentJob';
import Occupation from './Occupation';
import Employer from './Employer';
import EmployerPerson from './EmployerPerson';
import EmployerOrganization from './EmployerOrganization';
import PastOrPresentIndustry from './PastOrPresentIndustry';
import WorkClassification from './WorkClassification';
import SupervisoryLevel from './SupervisoryLevel';
import JobDuty from './JobDuty';
import OccupationalHazard from './OccupationalHazard';
import WorkSchedule from './WorkSchedule';
import WeeklyWorkDays from './WeeklyWorkDays';
import DailyWorkHours from './DailyWorkHours';
import IsCurrentJob from './IsCurrentJob';
import FocalSubjectModifier from './FocalSubjectModifier';

/**
 * Generated object factory for the odh namespace.
 */
export default class OdhObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'odh') {
      throw new Error(`Unsupported type in OdhObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'OccupationalDataForHealth': return OccupationalDataForHealth.fromJSON(json);
    case 'OccupationalDataSection': return OccupationalDataSection.fromJSON(json);
    case 'SocialHistoryObservation': return SocialHistoryObservation.fromJSON(json);
    case 'CodedSocialHistoryObservation': return CodedSocialHistoryObservation.fromJSON(json);
    case 'PersonEmploymentStatus': return PersonEmploymentStatus.fromJSON(json);
    case 'RetirementDate': return RetirementDate.fromJSON(json);
    case 'CombatZonePeriod': return CombatZonePeriod.fromJSON(json);
    case 'UsualWork': return UsualWork.fromJSON(json);
    case 'UsualIndustry': return UsualIndustry.fromJSON(json);
    case 'UsualOccupationDuration': return UsualOccupationDuration.fromJSON(json);
    case 'PastOrPresentJob': return PastOrPresentJob.fromJSON(json);
    case 'Occupation': return Occupation.fromJSON(json);
    case 'Employer': return Employer.fromJSON(json);
    case 'EmployerPerson': return EmployerPerson.fromJSON(json);
    case 'EmployerOrganization': return EmployerOrganization.fromJSON(json);
    case 'PastOrPresentIndustry': return PastOrPresentIndustry.fromJSON(json);
    case 'WorkClassification': return WorkClassification.fromJSON(json);
    case 'SupervisoryLevel': return SupervisoryLevel.fromJSON(json);
    case 'JobDuty': return JobDuty.fromJSON(json);
    case 'OccupationalHazard': return OccupationalHazard.fromJSON(json);
    case 'WorkSchedule': return WorkSchedule.fromJSON(json);
    case 'WeeklyWorkDays': return WeeklyWorkDays.fromJSON(json);
    case 'DailyWorkHours': return DailyWorkHours.fromJSON(json);
    case 'IsCurrentJob': return IsCurrentJob.fromJSON(json);
    case 'FocalSubjectModifier': return FocalSubjectModifier.fromJSON(json);
    default: throw new Error(`Unsupported type in OdhObjectFactory: ${type}`);
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
    if (namespace !== 'odh') {
      throw new Error(`Unsupported type in OdhObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'OccupationalDataForHealth': return OccupationalDataForHealth.fromFHIR(fhir, asExtension);
    case 'OccupationalDataSection': return OccupationalDataSection.fromFHIR(fhir, asExtension);
    case 'SocialHistoryObservation': return SocialHistoryObservation.fromFHIR(fhir, asExtension);
    case 'CodedSocialHistoryObservation': return CodedSocialHistoryObservation.fromFHIR(fhir, asExtension);
    case 'PersonEmploymentStatus': return PersonEmploymentStatus.fromFHIR(fhir, asExtension);
    case 'RetirementDate': return RetirementDate.fromFHIR(fhir, asExtension);
    case 'CombatZonePeriod': return CombatZonePeriod.fromFHIR(fhir, asExtension);
    case 'UsualWork': return UsualWork.fromFHIR(fhir, asExtension);
    case 'UsualIndustry': return UsualIndustry.fromFHIR(fhir, asExtension);
    case 'UsualOccupationDuration': return UsualOccupationDuration.fromFHIR(fhir, asExtension);
    case 'PastOrPresentJob': return PastOrPresentJob.fromFHIR(fhir, asExtension);
    case 'Occupation': return Occupation.fromFHIR(fhir, asExtension);
    case 'Employer': return Employer.fromFHIR(fhir, asExtension);
    case 'EmployerPerson': return EmployerPerson.fromFHIR(fhir, asExtension);
    case 'EmployerOrganization': return EmployerOrganization.fromFHIR(fhir, asExtension);
    case 'PastOrPresentIndustry': return PastOrPresentIndustry.fromFHIR(fhir, asExtension);
    case 'WorkClassification': return WorkClassification.fromFHIR(fhir, asExtension);
    case 'SupervisoryLevel': return SupervisoryLevel.fromFHIR(fhir, asExtension);
    case 'JobDuty': return JobDuty.fromFHIR(fhir, asExtension);
    case 'OccupationalHazard': return OccupationalHazard.fromFHIR(fhir, asExtension);
    case 'WorkSchedule': return WorkSchedule.fromFHIR(fhir, asExtension);
    case 'WeeklyWorkDays': return WeeklyWorkDays.fromFHIR(fhir, asExtension);
    case 'DailyWorkHours': return DailyWorkHours.fromFHIR(fhir, asExtension);
    case 'IsCurrentJob': return IsCurrentJob.fromFHIR(fhir, asExtension);
    case 'FocalSubjectModifier': return FocalSubjectModifier.fromFHIR(fhir, asExtension);
    default: throw new Error(`Unsupported type in OdhObjectFactory: ${type}`);
    }
  }
}
