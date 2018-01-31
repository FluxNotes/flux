import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.SupplyDuration.
 */
class SupplyDuration {

  /**
   * Get the value (aliases duration).
   * @returns {Duration} The shr.core.Duration
   */
  get value() {
    return this._duration;
  }

  /**
   * Set the value (aliases duration).
   * @param {Duration} value - The shr.core.Duration
   */
  set value(value) {
    this._duration = value;
  }

  /**
   * Get the Duration.
   * @returns {Duration} The shr.core.Duration
   */
  get duration() {
    return this._duration;
  }

  /**
   * Set the Duration.
   * @param {Duration} duration - The shr.core.Duration
   */
  set duration(duration) {
    this._duration = duration;
  }

  /**
   * Deserializes JSON data to an instance of the SupplyDuration class.
   * The JSON must be valid against the SupplyDuration JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SupplyDuration} An instance of SupplyDuration populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SupplyDuration();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SupplyDuration;
