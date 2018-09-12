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
  static fromJSON(json = {}) {
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
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Statistic' } };
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
  /**
   * Serializes an instance of the Statistic class to a FHIR object.
   * The FHIR is expected to be valid against the Statistic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.statisticType != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.statisticType.toFHIR(true));
    }
    if (this.value != null) {
      inst['value'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
    }
    if (this.comparator != null) {
      inst['comparator'] = typeof this.comparator.toFHIR === 'function' ? this.comparator.toFHIR() : this.comparator;
    }
    if (this.units != null && this.units.coding != null && this.units.coding.displayText != null) {
      inst['unit'] = typeof this.units.coding.displayText.toFHIR === 'function' ? this.units.coding.displayText.toFHIR() : this.units.coding.displayText;
    }
    if (this.units != null && this.units.coding != null && this.units.coding.codeSystem != null) {
      inst['system'] = typeof this.units.coding.codeSystem.toFHIR === 'function' ? this.units.coding.codeSystem.toFHIR() : this.units.coding.codeSystem;
    }
    return inst;
  }
}
export default Statistic;
