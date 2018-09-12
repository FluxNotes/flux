import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ParticipationPeriod.
 */
class ParticipationPeriod {

  /**
   * Get the value (aliases timePeriod).
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get value() {
    return this._timePeriod;
  }

  /**
   * Set the value (aliases timePeriod).
   * This field/value is required.
   * @param {TimePeriod} value - The shr.core.TimePeriod
   */
  set value(value) {
    this._timePeriod = value;
  }

  /**
   * Set the value (aliases timePeriod) and return 'this' for chaining.
   * This field/value is required.
   * @param {TimePeriod} value - The shr.core.TimePeriod
   * @returns {ParticipationPeriod} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * This field/value is required.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {ParticipationPeriod} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ParticipationPeriod class.
   * The JSON must be valid against the ParticipationPeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ParticipationPeriod} An instance of ParticipationPeriod populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ParticipationPeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ParticipationPeriod class to a JSON object.
   * The JSON is expected to be valid against the ParticipationPeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/action/ParticipationPeriod' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ParticipationPeriod class to a FHIR object.
   * The FHIR is expected to be valid against the ParticipationPeriod FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-action-ParticipationPeriod-extension';
      inst['valuePeriod'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default ParticipationPeriod;
