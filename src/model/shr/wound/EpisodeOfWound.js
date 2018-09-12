import { setPropertiesFromJSON } from '../../json-helper';

import ClinicalStatus from '../../cimi/context/ClinicalStatus';

/**
 * Generated class for shr.wound.EpisodeOfWound.
 * @extends ClinicalStatus
 */
class EpisodeOfWound extends ClinicalStatus {

  /**
   * Get the value (aliases code).
   * @returns {code} The code
   */
  get value() {
    return this._code;
  }

  /**
   * Set the value (aliases code).
   * This field/value is required.
   * @param {code} value - The code
   */
  set value(value) {
    this._code = value;
  }

  /**
   * Set the value (aliases code) and return 'this' for chaining.
   * This field/value is required.
   * @param {code} value - The code
   * @returns {EpisodeOfWound} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the code.
   * @returns {code} The code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code.
   * This field/value is required.
   * @param {code} code - The code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the code and return 'this' for chaining.
   * This field/value is required.
   * @param {code} code - The code
   * @returns {EpisodeOfWound} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EpisodeOfWound class.
   * The JSON must be valid against the EpisodeOfWound JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EpisodeOfWound} An instance of EpisodeOfWound populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new EpisodeOfWound();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EpisodeOfWound class to a JSON object.
   * The JSON is expected to be valid against the EpisodeOfWound JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/EpisodeOfWound' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default EpisodeOfWound;
