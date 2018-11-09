import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.SignedBy.
 */
class SignedBy {

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
   * @returns {SignedBy} this.
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
   * @returns {SignedBy} this.
   */
  withAttribution(attribution) {
    this.attribution = attribution; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SignedBy class.
   * The JSON must be valid against the SignedBy JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SignedBy} An instance of SignedBy populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SignedBy();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SignedBy class to a JSON object.
   * The JSON is expected to be valid against the SignedBy JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/SignedBy' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the SignedBy class to a FHIR object.
   * The FHIR is expected to be valid against the SignedBy FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.attribution != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.attribution.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-SignedBy-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SignedBy class.
   * The FHIR must be valid against the SignedBy FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {SignedBy} An instance of SignedBy populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new SignedBy();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Attribution-extension');
      if (match_1 != null) {
        inst.attribution = createInstanceFromFHIR('shr.base.Attribution', match_1, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.base.Attribution', fhir);
    }
    return inst;
  }

}
export default SignedBy;
