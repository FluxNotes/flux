import { getNamespaceAndName } from '../../json-helper';
import BehavioralFinding from './BehavioralFinding';
import ReasonForBehavior from './ReasonForBehavior';
import ReadinessToChange from './ReadinessToChange';
import SubstanceUse from './SubstanceUse';
import FrequencyOfUse from './FrequencyOfUse';
import IntravenousDrugUse from './IntravenousDrugUse';
import NicotineUse from './NicotineUse';
import ONCSmokingStatus from './ONCSmokingStatus';
import AlcoholUse from './AlcoholUse';
import AlcoholBingeFrequency from './AlcoholBingeFrequency';
import SubstanceAbuseTreatment from './SubstanceAbuseTreatment';
import Religion from './Religion';
import ReligiousPracticeStatus from './ReligiousPracticeStatus';
import ReligiousRestriction from './ReligiousRestriction';
import ReligiousCongregation from './ReligiousCongregation';
import DietFollowed from './DietFollowed';
import HasSufficientFood from './HasSufficientFood';
import DietNutritionConcern from './DietNutritionConcern';
import SleepQualityPanel from './SleepQualityPanel';
import SleepQualityCause from './SleepQualityCause';
import TroubleFallingAsleep from './TroubleFallingAsleep';
import TroubleStayingAsleep from './TroubleStayingAsleep';
import WakeFeelingRested from './WakeFeelingRested';
import HoursSleepPerNight from './HoursSleepPerNight';
import PhysicalActivityPanel from './PhysicalActivityPanel';
import PhysicalActivityLevel from './PhysicalActivityLevel';
import ExerciseHoursPerWeek from './ExerciseHoursPerWeek';
import PhysicalActivityLimitation from './PhysicalActivityLimitation';
import ViolentRiskToOthers from './ViolentRiskToOthers';
import ViolentRiskToSelf from './ViolentRiskToSelf';

/**
 * Generated object factory for the shr.behavior namespace.
 */
export default class ShrBehaviorObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.behavior') {
      throw new Error(`Unsupported type in ShrBehaviorObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'BehavioralFinding': return BehavioralFinding.fromJSON(json);
    case 'ReasonForBehavior': return ReasonForBehavior.fromJSON(json);
    case 'ReadinessToChange': return ReadinessToChange.fromJSON(json);
    case 'SubstanceUse': return SubstanceUse.fromJSON(json);
    case 'FrequencyOfUse': return FrequencyOfUse.fromJSON(json);
    case 'IntravenousDrugUse': return IntravenousDrugUse.fromJSON(json);
    case 'NicotineUse': return NicotineUse.fromJSON(json);
    case 'ONCSmokingStatus': return ONCSmokingStatus.fromJSON(json);
    case 'AlcoholUse': return AlcoholUse.fromJSON(json);
    case 'AlcoholBingeFrequency': return AlcoholBingeFrequency.fromJSON(json);
    case 'SubstanceAbuseTreatment': return SubstanceAbuseTreatment.fromJSON(json);
    case 'Religion': return Religion.fromJSON(json);
    case 'ReligiousPracticeStatus': return ReligiousPracticeStatus.fromJSON(json);
    case 'ReligiousRestriction': return ReligiousRestriction.fromJSON(json);
    case 'ReligiousCongregation': return ReligiousCongregation.fromJSON(json);
    case 'DietFollowed': return DietFollowed.fromJSON(json);
    case 'HasSufficientFood': return HasSufficientFood.fromJSON(json);
    case 'DietNutritionConcern': return DietNutritionConcern.fromJSON(json);
    case 'SleepQualityPanel': return SleepQualityPanel.fromJSON(json);
    case 'SleepQualityCause': return SleepQualityCause.fromJSON(json);
    case 'TroubleFallingAsleep': return TroubleFallingAsleep.fromJSON(json);
    case 'TroubleStayingAsleep': return TroubleStayingAsleep.fromJSON(json);
    case 'WakeFeelingRested': return WakeFeelingRested.fromJSON(json);
    case 'HoursSleepPerNight': return HoursSleepPerNight.fromJSON(json);
    case 'PhysicalActivityPanel': return PhysicalActivityPanel.fromJSON(json);
    case 'PhysicalActivityLevel': return PhysicalActivityLevel.fromJSON(json);
    case 'ExerciseHoursPerWeek': return ExerciseHoursPerWeek.fromJSON(json);
    case 'PhysicalActivityLimitation': return PhysicalActivityLimitation.fromJSON(json);
    case 'ViolentRiskToOthers': return ViolentRiskToOthers.fromJSON(json);
    case 'ViolentRiskToSelf': return ViolentRiskToSelf.fromJSON(json);
    }
    throw new Error(`Unsupported type in ShrBehaviorObjectFactory: ${type}`);
  }
}
