import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.Members.
 */
class Members {

  /**
   * Get the value (aliases observation) array.
   * @returns {Array<Reference>} The shr.finding.Observation reference array
   */
  get value() {
    return this._observation;
  }

  /**
   * Set the value (aliases observation) array.
   * @param {Array<Reference>} value - The shr.finding.Observation reference array
   */
  set value(value) {
    this._observation = value;
  }

  /**
   * Set the value (aliases observation) array and return 'this' for chaining.
   * @param {Array<Reference>} value - The shr.finding.Observation reference array
   * @returns {Members} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.finding.Observation reference array.
   * @returns {Array<Reference>} The shr.finding.Observation reference array
   */
  get observation() {
    return this._observation;
  }

  /**
   * Set the shr.finding.Observation reference array.
   * @param {Array<Reference>} observation - The shr.finding.Observation reference array
   */
  set observation(observation) {
    this._observation = observation;
  }

  /**
   * Set the shr.finding.Observation reference array and return 'this' for chaining.
   * @param {Array<Reference>} observation - The shr.finding.Observation reference array
   * @returns {Members} this.
   */
  withObservation(observation) {
    this.observation = observation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Members class.
   * The JSON must be valid against the Members JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Members} An instance of Members populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Members();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Members class to a JSON object.
   * The JSON is expected to be valid against the Members JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/finding/Members' } };
    if (this.value != null) {
      inst['Value'] = this.value.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Members class to a FHIR object.
   * The FHIR is expected to be valid against the Members FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = this.value.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
      }
    }
    return inst;
  }
}
export default Members;
