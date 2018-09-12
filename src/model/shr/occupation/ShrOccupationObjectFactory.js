import { getNamespaceAndName } from '../../json-helper';
import OccupationalDataComposition from './OccupationalDataComposition';
import OccupationalDataSection from './OccupationalDataSection';
import SocialHistoryObservation from './SocialHistoryObservation';
import CodedSocialHistoryObservation from './CodedSocialHistoryObservation';
import HistoryOfEmploymentStatus from './HistoryOfEmploymentStatus';
import DateOfRetirement from './DateOfRetirement';
import CombatZonePeriod from './CombatZonePeriod';
import UsualOccupation from './UsualOccupation';
import UsualIndustry from './UsualIndustry';
import UsualOccupationDuration from './UsualOccupationDuration';
import PastOrPresentOccupation from './PastOrPresentOccupation';
import Employer from './Employer';
import PastOrPresentIndustry from './PastOrPresentIndustry';
import WorkClassification from './WorkClassification';
import SupervisoryLevel from './SupervisoryLevel';
import JobDuty from './JobDuty';
import OccupationalHazard from './OccupationalHazard';
import WorkSchedule from './WorkSchedule';
import WeeklyWorkDays from './WeeklyWorkDays';
import DailyWorkHours from './DailyWorkHours';

/**
 * Generated object factory for the shr.occupation namespace.
 */
export default class ShrOccupationObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.occupation') {
      throw new Error(`Unsupported type in ShrOccupationObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'OccupationalDataComposition': return OccupationalDataComposition.fromJSON(json);
      case 'OccupationalDataSection': return OccupationalDataSection.fromJSON(json);
      case 'SocialHistoryObservation': return SocialHistoryObservation.fromJSON(json);
      case 'CodedSocialHistoryObservation': return CodedSocialHistoryObservation.fromJSON(json);
      case 'HistoryOfEmploymentStatus': return HistoryOfEmploymentStatus.fromJSON(json);
      case 'DateOfRetirement': return DateOfRetirement.fromJSON(json);
      case 'CombatZonePeriod': return CombatZonePeriod.fromJSON(json);
      case 'UsualOccupation': return UsualOccupation.fromJSON(json);
      case 'UsualIndustry': return UsualIndustry.fromJSON(json);
      case 'UsualOccupationDuration': return UsualOccupationDuration.fromJSON(json);
      case 'PastOrPresentOccupation': return PastOrPresentOccupation.fromJSON(json);
      case 'Employer': return Employer.fromJSON(json);
      case 'PastOrPresentIndustry': return PastOrPresentIndustry.fromJSON(json);
      case 'WorkClassification': return WorkClassification.fromJSON(json);
      case 'SupervisoryLevel': return SupervisoryLevel.fromJSON(json);
      case 'JobDuty': return JobDuty.fromJSON(json);
      case 'OccupationalHazard': return OccupationalHazard.fromJSON(json);
      case 'WorkSchedule': return WorkSchedule.fromJSON(json);
      case 'WeeklyWorkDays': return WeeklyWorkDays.fromJSON(json);
      case 'DailyWorkHours': return DailyWorkHours.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrOccupationObjectFactory: ${type}`);
    }
  }
}
