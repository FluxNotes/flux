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
   * This field/value is required.
   * @param {StatisticType} statisticType - The shr.core.StatisticType
   */
  set statisticType(statisticType) {
    this._statisticType = statisticType;
  }

  /**
   * Set the StatisticType and return 'this' for chaining.
   * This field/value is required.
   * @param {StatisticType} statisticType - The shr.core.StatisticType
   * @returns {Statistic} this.
   */
  withStatisticType(statisticType) {
    this.statisticType = statisticType; return this;
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
  /**
   * Serializes an instance of the Statistic class to a JSON object.
   * The JSON is expected to be valid against the Statistic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Statistic' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.comparator != null) {
      inst['Comparator'] = typeof this.comparator.toJSON === 'function' ? this.comparator.toJSON() : this.comparator;
    }
    if (this.units != null) {
      inst['Units'] = typeof this.units.toJSON === 'function' ? this.units.toJSON() : this.units;
    }
    if (this.statisticType != null) {
      inst['StatisticType'] = typeof this.statisticType.toJSON === 'function' ? this.statisticType.toJSON() : this.statisticType;
    }
    return inst;
  }
}
export default Statistic;
