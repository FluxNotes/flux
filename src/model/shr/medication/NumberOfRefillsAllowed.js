import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.NumberOfRefillsAllowed.
 */
class NumberOfRefillsAllowed {

  /**
   * Get the value (aliases positiveInt).
   * @returns {positiveInt} The positiveInt
   */
  get value() {
    return this._positiveInt;
  }

  /**
   * Set the value (aliases positiveInt).
   * This field/value is required.
   * @param {positiveInt} value - The positiveInt
   */
  set value(value) {
    this._positiveInt = value;
  }

  /**
   * Set the value (aliases positiveInt) and return 'this' for chaining.
   * This field/value is required.
   * @param {positiveInt} value - The positiveInt
   * @returns {NumberOfRefillsAllowed} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the positiveInt.
   * @returns {positiveInt} The positiveInt
   */
  get positiveInt() {
    return this._positiveInt;
  }

  /**
   * Set the positiveInt.
   * This field/value is required.
   * @param {positiveInt} positiveInt - The positiveInt
   */
  set positiveInt(positiveInt) {
    this._positiveInt = positiveInt;
  }

  /**
   * Set the positiveInt and return 'this' for chaining.
   * This field/value is required.
   * @param {positiveInt} positiveInt - The positiveInt
   * @returns {NumberOfRefillsAllowed} this.
   */
  withPositiveInt(positiveInt) {
    this.positiveInt = positiveInt; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NumberOfRefillsAllowed class.
   * The JSON must be valid against the NumberOfRefillsAllowed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NumberOfRefillsAllowed} An instance of NumberOfRefillsAllowed populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new NumberOfRefillsAllowed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the NumberOfRefillsAllowed class to a JSON object.
   * The JSON is expected to be valid against the NumberOfRefillsAllowed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/medication/NumberOfRefillsAllowed' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the NumberOfRefillsAllowed class to a FHIR object.
   * The FHIR is expected to be valid against the NumberOfRefillsAllowed FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the NumberOfRefillsAllowed class.
   * The FHIR must be valid against the NumberOfRefillsAllowed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {NumberOfRefillsAllowed} An instance of NumberOfRefillsAllowed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new NumberOfRefillsAllowed();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default NumberOfRefillsAllowed;
