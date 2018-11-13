import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.RequestIntent.
 */
class RequestIntent {

  /**
   * Get the value (aliases code).
   * @returns {code} The code
   */
  get value() {
    return this._code;
  }

  /**
   * Set the value (aliases code).
   * This field/value is required.
   * @param {code} value - The code
   */
  set value(value) {
    this._code = value;
  }

  /**
   * Set the value (aliases code) and return 'this' for chaining.
   * This field/value is required.
   * @param {code} value - The code
   * @returns {RequestIntent} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the code.
   * @returns {code} The code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code.
   * This field/value is required.
   * @param {code} code - The code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the code and return 'this' for chaining.
   * This field/value is required.
   * @param {code} code - The code
   * @returns {RequestIntent} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RequestIntent class.
   * The JSON must be valid against the RequestIntent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RequestIntent} An instance of RequestIntent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RequestIntent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RequestIntent class to a JSON object.
   * The JSON is expected to be valid against the RequestIntent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/RequestIntent' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the RequestIntent class to a FHIR object.
   * The FHIR is expected to be valid against the RequestIntent FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-RequestIntent-extension';
      inst['valueCode'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RequestIntent class.
   * The FHIR must be valid against the RequestIntent FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RequestIntent} An instance of RequestIntent populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new RequestIntent();
    if (asExtension) {
      inst.value = fhir['valueCode'];
    }
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default RequestIntent;
