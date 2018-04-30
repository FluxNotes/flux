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
   * This field/value is required.
   * @param {Range} value - The shr.core.Range
   */
  set value(value) {
    this._range = value;
  }

  /**
   * Set the value (aliases range) and return 'this' for chaining.
   * This field/value is required.
   * @param {Range} value - The shr.core.Range
   * @returns {ApplicableAgeRange} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Range} range - The shr.core.Range
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Set the Range and return 'this' for chaining.
   * This field/value is required.
   * @param {Range} range - The shr.core.Range
   * @returns {ApplicableAgeRange} this.
   */
  withRange(range) {
    this.range = range; return this;
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
  /**
   * Serializes an instance of the ApplicableAgeRange class to a JSON object.
   * The JSON is expected to be valid against the ApplicableAgeRange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/ApplicableAgeRange' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default ApplicableAgeRange;
