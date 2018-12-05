import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.SubstitutionAllowed.
 */
class SubstitutionAllowed {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * This field/value is required.
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Set the value (aliases boolean) and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} value - The boolean
   * @returns {SubstitutionAllowed} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Set the boolean and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   * @returns {SubstitutionAllowed} this.
   */
  withBoolean(boolean) {
    this.boolean = boolean; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SubstitutionAllowed class.
   * The JSON must be valid against the SubstitutionAllowed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SubstitutionAllowed} An instance of SubstitutionAllowed populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SubstitutionAllowed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SubstitutionAllowed class to a JSON object.
   * The JSON is expected to be valid against the SubstitutionAllowed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/medication/SubstitutionAllowed' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the SubstitutionAllowed class to a FHIR object.
   * The FHIR is expected to be valid against the SubstitutionAllowed FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-medication-SubstitutionAllowed-extension';
      inst['valueBoolean'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SubstitutionAllowed class.
   * The FHIR must be valid against the SubstitutionAllowed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SubstitutionAllowed} An instance of SubstitutionAllowed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new SubstitutionAllowed();
    if (asExtension) {
      inst.value = fhir['valueBoolean'];
    }
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default SubstitutionAllowed;
