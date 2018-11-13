import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.CodeSystem.
 */
class CodeSystem {

  /**
   * Get the value (aliases uri).
   * @returns {uri} The uri
   */
  get value() {
    return this._uri;
  }

  /**
   * Set the value (aliases uri).
   * This field/value is required.
   * @param {uri} value - The uri
   */
  set value(value) {
    this._uri = value;
  }

  /**
   * Set the value (aliases uri) and return 'this' for chaining.
   * This field/value is required.
   * @param {uri} value - The uri
   * @returns {CodeSystem} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the uri.
   * @returns {uri} The uri
   */
  get uri() {
    return this._uri;
  }

  /**
   * Set the uri.
   * This field/value is required.
   * @param {uri} uri - The uri
   */
  set uri(uri) {
    this._uri = uri;
  }

  /**
   * Set the uri and return 'this' for chaining.
   * This field/value is required.
   * @param {uri} uri - The uri
   * @returns {CodeSystem} this.
   */
  withUri(uri) {
    this.uri = uri; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodeSystem class.
   * The JSON must be valid against the CodeSystem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeSystem} An instance of CodeSystem populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CodeSystem();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CodeSystem class to a JSON object.
   * The JSON is expected to be valid against the CodeSystem JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/CodeSystem' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the CodeSystem class to a FHIR object.
   * The FHIR is expected to be valid against the CodeSystem FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the CodeSystem class.
   * The FHIR must be valid against the CodeSystem FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CodeSystem} An instance of CodeSystem populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new CodeSystem();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default CodeSystem;
