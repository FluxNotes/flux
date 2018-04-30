import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.LastUpdated.
 */
class LastUpdated {

  /**
   * Get the value (aliases instant).
   * @returns {instant} The instant
   */
  get value() {
    return this._instant;
  }

  /**
   * Set the value (aliases instant).
   * This field/value is required.
   * @param {instant} value - The instant
   */
  set value(value) {
    this._instant = value;
  }

  /**
   * Set the value (aliases instant) and return 'this' for chaining.
   * This field/value is required.
   * @param {instant} value - The instant
   * @returns {LastUpdated} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the instant.
   * @returns {instant} The instant
   */
  get instant() {
    return this._instant;
  }

  /**
   * Set the instant.
   * This field/value is required.
   * @param {instant} instant - The instant
   */
  set instant(instant) {
    this._instant = instant;
  }

  /**
   * Set the instant and return 'this' for chaining.
   * This field/value is required.
   * @param {instant} instant - The instant
   * @returns {LastUpdated} this.
   */
  withInstant(instant) {
    this.instant = instant; return this;
  }

  /**
   * Deserializes JSON data to an instance of the LastUpdated class.
   * The JSON must be valid against the LastUpdated JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LastUpdated} An instance of LastUpdated populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LastUpdated();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the LastUpdated class to a JSON object.
   * The JSON is expected to be valid against the LastUpdated JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/LastUpdated' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
}
export default LastUpdated;
