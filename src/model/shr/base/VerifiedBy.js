import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.VerifiedBy.
 */
class VerifiedBy {

  /**
   * Get the value (aliases attribution).
   * @returns {Attribution} The shr.base.Attribution
   */
  get value() {
    return this._attribution;
  }

  /**
   * Set the value (aliases attribution).
   * This field/value is required.
   * @param {Attribution} value - The shr.base.Attribution
   */
  set value(value) {
    this._attribution = value;
  }

  /**
   * Set the value (aliases attribution) and return 'this' for chaining.
   * This field/value is required.
   * @param {Attribution} value - The shr.base.Attribution
   * @returns {VerifiedBy} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Attribution.
   * @returns {Attribution} The shr.base.Attribution
   */
  get attribution() {
    return this._attribution;
  }

  /**
   * Set the Attribution.
   * This field/value is required.
   * @param {Attribution} attribution - The shr.base.Attribution
   */
  set attribution(attribution) {
    this._attribution = attribution;
  }

  /**
   * Set the Attribution and return 'this' for chaining.
   * This field/value is required.
   * @param {Attribution} attribution - The shr.base.Attribution
   * @returns {VerifiedBy} this.
   */
  withAttribution(attribution) {
    this.attribution = attribution; return this;
  }

  /**
   * Deserializes JSON data to an instance of the VerifiedBy class.
   * The JSON must be valid against the VerifiedBy JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {VerifiedBy} An instance of VerifiedBy populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new VerifiedBy();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the VerifiedBy class to a JSON object.
   * The JSON is expected to be valid against the VerifiedBy JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/VerifiedBy' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the VerifiedBy class to a FHIR object.
   * The FHIR is expected to be valid against the VerifiedBy FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the VerifiedBy class.
   * The FHIR must be valid against the VerifiedBy FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {VerifiedBy} An instance of VerifiedBy populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new VerifiedBy();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.base.Attribution', fhir);
    }
    return inst;
  }

}
export default VerifiedBy;
