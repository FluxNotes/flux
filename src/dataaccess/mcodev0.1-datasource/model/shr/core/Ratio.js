import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Ratio.
 */
class Ratio {

  /**
   * Get the Numerator.
   * @returns {Numerator} The shr.core.Numerator
   */
  get numerator() {
    return this._numerator;
  }

  /**
   * Set the Numerator.
   * @param {Numerator} numerator - The shr.core.Numerator
   */
  set numerator(numerator) {
    this._numerator = numerator;
  }

  /**
   * Set the Numerator and return 'this' for chaining.
   * @param {Numerator} numerator - The shr.core.Numerator
   * @returns {Ratio} this.
   */
  withNumerator(numerator) {
    this.numerator = numerator; return this;
  }

  /**
   * Get the Denominator.
   * @returns {Denominator} The shr.core.Denominator
   */
  get denominator() {
    return this._denominator;
  }

  /**
   * Set the Denominator.
   * @param {Denominator} denominator - The shr.core.Denominator
   */
  set denominator(denominator) {
    this._denominator = denominator;
  }

  /**
   * Set the Denominator and return 'this' for chaining.
   * @param {Denominator} denominator - The shr.core.Denominator
   * @returns {Ratio} this.
   */
  withDenominator(denominator) {
    this.denominator = denominator; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Ratio class.
   * The JSON must be valid against the Ratio JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ratio} An instance of Ratio populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Ratio();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Ratio class to a JSON object.
   * The JSON is expected to be valid against the Ratio JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Ratio' } };
    if (this.numerator != null) {
      inst['Numerator'] = typeof this.numerator.toJSON === 'function' ? this.numerator.toJSON() : this.numerator;
    }
    if (this.denominator != null) {
      inst['Denominator'] = typeof this.denominator.toJSON === 'function' ? this.denominator.toJSON() : this.denominator;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Ratio class to a FHIR object.
   * The FHIR is expected to be valid against the Ratio FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.numerator != null) {
      inst['numerator'] = typeof this.numerator.toFHIR === 'function' ? this.numerator.toFHIR() : this.numerator;
    }
    if (this.denominator != null) {
      inst['denominator'] = typeof this.denominator.toFHIR === 'function' ? this.denominator.toFHIR() : this.denominator;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Ratio class.
   * The FHIR must be valid against the Ratio FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Ratio} An instance of Ratio populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Ratio();
    if (fhir['numerator'] != null) {
      inst.numerator = createInstanceFromFHIR('shr.core.Numerator', fhir['numerator']);
    }
    if (fhir['denominator'] != null) {
      inst.denominator = createInstanceFromFHIR('shr.core.Denominator', fhir['denominator']);
    }
    return inst;
  }

}
export default Ratio;
