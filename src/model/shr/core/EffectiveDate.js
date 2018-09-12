import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.EffectiveDate.
 */
class EffectiveDate {

  /**
   * Get the value (aliases date).
   * @returns {date} The date
   */
  get value() {
    return this._date;
  }

  /**
   * Set the value (aliases date).
   * This field/value is required.
   * @param {date} value - The date
   */
  set value(value) {
    this._date = value;
  }

  /**
   * Set the value (aliases date) and return 'this' for chaining.
   * This field/value is required.
   * @param {date} value - The date
   * @returns {EffectiveDate} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the date.
   * @returns {date} The date
   */
  get date() {
    return this._date;
  }

  /**
   * Set the date.
   * This field/value is required.
   * @param {date} date - The date
   */
  set date(date) {
    this._date = date;
  }

  /**
   * Set the date and return 'this' for chaining.
   * This field/value is required.
   * @param {date} date - The date
   * @returns {EffectiveDate} this.
   */
  withDate(date) {
    this.date = date; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EffectiveDate class.
   * The JSON must be valid against the EffectiveDate JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EffectiveDate} An instance of EffectiveDate populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new EffectiveDate();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EffectiveDate class to a JSON object.
   * The JSON is expected to be valid against the EffectiveDate JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/EffectiveDate' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the EffectiveDate class to a FHIR object.
   * The FHIR is expected to be valid against the EffectiveDate FHIR profile, but no validation checks are performed.
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
export default EffectiveDate;
