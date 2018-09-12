import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.TimeOfDay.
 */
class TimeOfDay {

  /**
   * Get the value (aliases time).
   * @returns {time} The time
   */
  get value() {
    return this._time;
  }

  /**
   * Set the value (aliases time).
   * This field/value is required.
   * @param {time} value - The time
   */
  set value(value) {
    this._time = value;
  }

  /**
   * Set the value (aliases time) and return 'this' for chaining.
   * This field/value is required.
   * @param {time} value - The time
   * @returns {TimeOfDay} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the time.
   * @returns {time} The time
   */
  get time() {
    return this._time;
  }

  /**
   * Set the time.
   * This field/value is required.
   * @param {time} time - The time
   */
  set time(time) {
    this._time = time;
  }

  /**
   * Set the time and return 'this' for chaining.
   * This field/value is required.
   * @param {time} time - The time
   * @returns {TimeOfDay} this.
   */
  withTime(time) {
    this.time = time; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TimeOfDay class.
   * The JSON must be valid against the TimeOfDay JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TimeOfDay} An instance of TimeOfDay populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new TimeOfDay();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the TimeOfDay class to a JSON object.
   * The JSON is expected to be valid against the TimeOfDay JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/TimeOfDay' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the TimeOfDay class to a FHIR object.
   * The FHIR is expected to be valid against the TimeOfDay FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default TimeOfDay;
