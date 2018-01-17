import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.ApplicableAgeRange.
 */
class ApplicableAgeRange {

  /**
   * Get the value (aliases range).
   * @returns {Range} The shr.core.Range
   */
  get value() {
    return this._range;
  }

  /**
   * Set the value (aliases range).
   * @param {Range} value - The shr.core.Range
   */
  set value(value) {
    this._range = value;
  }

  /**
   * Get the Range.
   * @returns {Range} The shr.core.Range
   */
  get range() {
    return this._range;
  }

  /**
   * Set the Range.
   * @param {Range} range - The shr.core.Range
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Deserializes JSON data to an instance of the ApplicableAgeRange class.
   * The JSON must be valid against the ApplicableAgeRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ApplicableAgeRange} An instance of ApplicableAgeRange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ApplicableAgeRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ApplicableAgeRange;
