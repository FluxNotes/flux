import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.MaximumDosePerTimePeriod.
 */
class MaximumDosePerTimePeriod {

  /**
   * Get the value (aliases ratio).
   * @returns {Ratio} The shr.core.Ratio
   */
  get value() {
    return this._ratio;
  }

  /**
   * Set the value (aliases ratio).
   * @param {Ratio} value - The shr.core.Ratio
   */
  set value(value) {
    this._ratio = value;
  }

  /**
   * Get the Ratio.
   * @returns {Ratio} The shr.core.Ratio
   */
  get ratio() {
    return this._ratio;
  }

  /**
   * Set the Ratio.
   * @param {Ratio} ratio - The shr.core.Ratio
   */
  set ratio(ratio) {
    this._ratio = ratio;
  }

  /**
   * Deserializes JSON data to an instance of the MaximumDosePerTimePeriod class.
   * The JSON must be valid against the MaximumDosePerTimePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MaximumDosePerTimePeriod} An instance of MaximumDosePerTimePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MaximumDosePerTimePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MaximumDosePerTimePeriod;
