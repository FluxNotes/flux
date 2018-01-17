import { setPropertiesFromJSON } from '../../json-helper';

import Quantity from './Quantity';

/**
 * Generated class for shr.core.Statistic.
 * @extends Quantity
 */
class Statistic extends Quantity {

  /**
   * Get the StatisticType.
   * @returns {StatisticType} The shr.core.StatisticType
   */
  get statisticType() {
    return this._statisticType;
  }

  /**
   * Set the StatisticType.
   * @param {StatisticType} statisticType - The shr.core.StatisticType
   */
  set statisticType(statisticType) {
    this._statisticType = statisticType;
  }

  /**
   * Deserializes JSON data to an instance of the Statistic class.
   * The JSON must be valid against the Statistic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Statistic} An instance of Statistic populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Statistic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Statistic;
