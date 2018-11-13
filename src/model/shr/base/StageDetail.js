import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.StageDetail.
 */
class StageDetail {

  /**
   * Get the value (aliases observation).
   * @returns {Reference} The shr.base.Observation reference
   */
  get value() {
    return this._observation;
  }

  /**
   * Set the value (aliases observation).
   * This field/value is required.
   * @param {Reference} value - The shr.base.Observation reference
   */
  set value(value) {
    this._observation = value;
  }

  /**
   * Set the value (aliases observation) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.Observation reference
   * @returns {StageDetail} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.Observation reference.
   * @returns {Reference} The shr.base.Observation reference
   */
  get observation() {
    return this._observation;
  }

  /**
   * Set the shr.base.Observation reference.
   * This field/value is required.
   * @param {Reference} observation - The shr.base.Observation reference
   */
  set observation(observation) {
    this._observation = observation;
  }

  /**
   * Set the shr.base.Observation reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} observation - The shr.base.Observation reference
   * @returns {StageDetail} this.
   */
  withObservation(observation) {
    this.observation = observation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the StageDetail class.
   * The JSON must be valid against the StageDetail JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StageDetail} An instance of StageDetail populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StageDetail();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the StageDetail class to a JSON object.
   * The JSON is expected to be valid against the StageDetail JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/StageDetail' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the StageDetail class to a FHIR object.
   * The FHIR is expected to be valid against the StageDetail FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the StageDetail class.
   * The FHIR must be valid against the StageDetail FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {StageDetail} An instance of StageDetail populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new StageDetail();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.base.Observation', fhir);
    }
    return inst;
  }

}
export default StageDetail;
