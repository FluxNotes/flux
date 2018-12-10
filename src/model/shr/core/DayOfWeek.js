import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.DayOfWeek.
 */
class DayOfWeek {

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
   * @returns {DayOfWeek} this.
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
   * @returns {DayOfWeek} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DayOfWeek class.
   * The JSON must be valid against the DayOfWeek JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DayOfWeek} An instance of DayOfWeek populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new DayOfWeek();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DayOfWeek class to a JSON object.
   * The JSON is expected to be valid against the DayOfWeek JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/DayOfWeek' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the DayOfWeek class to a FHIR object.
   * The FHIR is expected to be valid against the DayOfWeek FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
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

  /**
   * Deserializes FHIR JSON data to an instance of the DayOfWeek class.
   * The FHIR must be valid against the DayOfWeek FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DayOfWeek} An instance of DayOfWeek populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new DayOfWeek();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default DayOfWeek;
