import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GestationalTemporalContext.
 */
class GestationalTemporalContext {

  /**
   * Get the choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod.
   * @returns {(GestationalAge|GestationalTimePeriod)} The choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod.
   * This field/value is required.
   * @param {(GestationalAge|GestationalTimePeriod)} value - The choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {(GestationalAge|GestationalTimePeriod)} value - The choice value; one of: shr.core.GestationalAge, shr.core.GestationalTimePeriod
   * @returns {GestationalTemporalContext} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GestationalTemporalContext class.
   * The JSON must be valid against the GestationalTemporalContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GestationalTemporalContext} An instance of GestationalTemporalContext populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new GestationalTemporalContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GestationalTemporalContext class to a JSON object.
   * The JSON is expected to be valid against the GestationalTemporalContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/GestationalTemporalContext' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the GestationalTemporalContext class to a FHIR object.
   * The FHIR is expected to be valid against the GestationalTemporalContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.gestationalAge.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.gestationalTimePeriod.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-GestationalTemporalContext-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default GestationalTemporalContext;
