import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.CountPerInterval.
 */
class CountPerInterval {

  /**
   * Get the MinCount.
   * @returns {MinCount} The shr.core.MinCount
   */
  get minCount() {
    return this._minCount;
  }

  /**
   * Set the MinCount.
   * @param {MinCount} minCount - The shr.core.MinCount
   */
  set minCount(minCount) {
    this._minCount = minCount;
  }

  /**
   * Get the MaxCount.
   * @returns {MaxCount} The shr.core.MaxCount
   */
  get maxCount() {
    return this._maxCount;
  }

  /**
   * Set the MaxCount.
   * @param {MaxCount} maxCount - The shr.core.MaxCount
   */
  set maxCount(maxCount) {
    this._maxCount = maxCount;
  }

  /**
   * Deserializes JSON data to an instance of the CountPerInterval class.
   * The JSON must be valid against the CountPerInterval JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CountPerInterval} An instance of CountPerInterval populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CountPerInterval();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default CountPerInterval;
