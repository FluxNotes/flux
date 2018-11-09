import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.ExpectedMethod.
 */
class ExpectedMethod {

  /**
   * Get the value (aliases method).
   * @returns {Reference} The shr.base.Method reference
   */
  get value() {
    return this._method;
  }

  /**
   * Set the value (aliases method).
   * This field/value is required.
   * @param {Reference} value - The shr.base.Method reference
   */
  set value(value) {
    this._method = value;
  }

  /**
   * Set the value (aliases method) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.Method reference
   * @returns {ExpectedMethod} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.Method reference.
   * @returns {Reference} The shr.base.Method reference
   */
  get method() {
    return this._method;
  }

  /**
   * Set the shr.base.Method reference.
   * This field/value is required.
   * @param {Reference} method - The shr.base.Method reference
   */
  set method(method) {
    this._method = method;
  }

  /**
   * Set the shr.base.Method reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} method - The shr.base.Method reference
   * @returns {ExpectedMethod} this.
   */
  withMethod(method) {
    this.method = method; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExpectedMethod class.
   * The JSON must be valid against the ExpectedMethod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpectedMethod} An instance of ExpectedMethod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExpectedMethod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ExpectedMethod class to a JSON object.
   * The JSON is expected to be valid against the ExpectedMethod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ExpectedMethod' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ExpectedMethod class to a FHIR object.
   * The FHIR is expected to be valid against the ExpectedMethod FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.method != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.method.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedMethod-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ExpectedMethod class.
   * The FHIR must be valid against the ExpectedMethod FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ExpectedMethod} An instance of ExpectedMethod populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ExpectedMethod();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Method-extension');
      if (match_1 != null) {
        inst.method = createInstanceFromFHIR('shr.base.Method', match_1, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.base.Method', fhir);
    }
    return inst;
  }

}
export default ExpectedMethod;
