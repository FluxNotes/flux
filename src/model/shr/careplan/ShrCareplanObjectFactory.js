import { getNamespaceAndName } from '../../json-helper';
import CareTeam from './CareTeam';
import Goal from './Goal';
import PlannedActivities from './PlannedActivities';
import ActualActivities from './ActualActivities';
import Objective from './Objective';
import ResultTargeted from './ResultTargeted';
import ResultAchieved from './ResultAchieved';
import CarePlan from './CarePlan';

/**
 * Generated object factory for the shr.careplan namespace.
 */
export default class ShrCareplanObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.careplan') {
      throw new Error(`Unsupported type in ShrCareplanObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'CareTeam': return CareTeam.fromJSON(json);
      case 'Goal': return Goal.fromJSON(json);
      case 'PlannedActivities': return PlannedActivities.fromJSON(json);
      case 'ActualActivities': return ActualActivities.fromJSON(json);
      case 'Objective': return Objective.fromJSON(json);
      case 'ResultTargeted': return ResultTargeted.fromJSON(json);
      case 'ResultAchieved': return ResultAchieved.fromJSON(json);
      case 'CarePlan': return CarePlan.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrCareplanObjectFactory: ${type}`);
    }
  }
}
