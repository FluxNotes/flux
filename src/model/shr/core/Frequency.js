import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Ratio from './Ratio';

/**
 * Generated class for shr.core.Frequency.
 * @extends Ratio
 */
class Frequency extends Ratio {

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
   * @returns {Frequency} this.
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
   * @returns {Frequency} this.
   */
  withDenominator(denominator) {
    this.denominator = denominator; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Frequency class.
   * The JSON must be valid against the Frequency JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Frequency} An instance of Frequency populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Frequency();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Frequency class to a JSON object.
   * The JSON is expected to be valid against the Frequency JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Frequency' } };
    if (this.numerator != null) {
      inst['Numerator'] = typeof this.numerator.toJSON === 'function' ? this.numerator.toJSON() : this.numerator;
    }
    if (this.denominator != null) {
      inst['Denominator'] = typeof this.denominator.toJSON === 'function' ? this.denominator.toJSON() : this.denominator;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Frequency class.
   * The FHIR must be valid against the Frequency FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Frequency} An instance of Frequency populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Frequency();
    if (fhir['numerator'] != null) {
      inst.numerator = FHIRHelper.createInstanceFromFHIR('shr.core.Numerator', fhir['numerator'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['denominator'] != null) {
      inst.denominator = FHIRHelper.createInstanceFromFHIR('shr.core.Denominator', fhir['denominator'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default Frequency;
