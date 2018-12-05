import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Units.
 */
class Units {

  /**
   * Get the value (aliases coding).
   * @returns {Coding} The shr.core.Coding
   */
  get value() {
    return this._coding;
  }

  /**
   * Set the value (aliases coding).
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   */
  set value(value) {
    this._coding = value;
  }

  /**
   * Set the value (aliases coding) and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   * @returns {Units} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Coding.
   * @returns {Coding} The shr.core.Coding
   */
  get coding() {
    return this._coding;
  }

  /**
   * Set the Coding.
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Set the Coding and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   * @returns {Units} this.
   */
  withCoding(coding) {
    this.coding = coding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Units class.
   * The JSON must be valid against the Units JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Units} An instance of Units populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Units();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Units class to a JSON object.
   * The JSON is expected to be valid against the Units JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Units' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Units class to a FHIR object.
   * The FHIR is expected to be valid against the Units FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-Units-extension';
      inst['valueCoding'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Units class.
   * The FHIR must be valid against the Units FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Units} An instance of Units populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Units();
    if (asExtension) {
      inst.value = fhir['valueCoding'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.Coding', fhir);
    }
    return inst;
  }

}
export default Units;
