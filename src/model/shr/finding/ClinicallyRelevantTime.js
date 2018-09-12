import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.ClinicallyRelevantTime.
 */
class ClinicallyRelevantTime {

  /**
   * Get the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing.
   * @returns {(dateTime|TimePeriod|Timing)} The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing.
   * This field/value is required.
   * @param {(dateTime|TimePeriod|Timing)} value - The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing and return 'this' for chaining.
   * This field/value is required.
   * @param {(dateTime|TimePeriod|Timing)} value - The choice value; one of: dateTime, shr.core.TimePeriod, shr.core.Timing
   * @returns {ClinicallyRelevantTime} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ClinicallyRelevantTime class.
   * The JSON must be valid against the ClinicallyRelevantTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClinicallyRelevantTime} An instance of ClinicallyRelevantTime populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ClinicallyRelevantTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ClinicallyRelevantTime class to a JSON object.
   * The JSON is expected to be valid against the ClinicallyRelevantTime JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/finding/ClinicallyRelevantTime' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ClinicallyRelevantTime class to a FHIR object.
   * The FHIR is expected to be valid against the ClinicallyRelevantTime FHIR profile, but no validation checks are performed.
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
export default ClinicallyRelevantTime;
