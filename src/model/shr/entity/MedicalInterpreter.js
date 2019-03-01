import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.entity.MedicalInterpreter.
 */
class MedicalInterpreter {

  /**
   * Get the MedicalInterpreterNeeded.
   * @returns {MedicalInterpreterNeeded} The shr.entity.MedicalInterpreterNeeded
   */
  get medicalInterpreterNeeded() {
    return this._medicalInterpreterNeeded;
  }

  /**
   * Set the MedicalInterpreterNeeded.
   * This field/value is required.
   * @param {MedicalInterpreterNeeded} medicalInterpreterNeeded - The shr.entity.MedicalInterpreterNeeded
   */
  set medicalInterpreterNeeded(medicalInterpreterNeeded) {
    this._medicalInterpreterNeeded = medicalInterpreterNeeded;
  }

  /**
   * Set the MedicalInterpreterNeeded and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicalInterpreterNeeded} medicalInterpreterNeeded - The shr.entity.MedicalInterpreterNeeded
   * @returns {MedicalInterpreter} this.
   */
  withMedicalInterpreterNeeded(medicalInterpreterNeeded) {
    this.medicalInterpreterNeeded = medicalInterpreterNeeded; return this;
  }

  /**
   * Get the Language.
   * @returns {Language} The shr.core.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * This field/value is required.
   * @param {Language} language - The shr.core.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Set the Language and return 'this' for chaining.
   * This field/value is required.
   * @param {Language} language - The shr.core.Language
   * @returns {MedicalInterpreter} this.
   */
  withLanguage(language) {
    this.language = language; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicalInterpreter class.
   * The JSON must be valid against the MedicalInterpreter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicalInterpreter} An instance of MedicalInterpreter populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicalInterpreter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicalInterpreter class to a JSON object.
   * The JSON is expected to be valid against the MedicalInterpreter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/MedicalInterpreter' } };
    if (this.medicalInterpreterNeeded != null) {
      inst['MedicalInterpreterNeeded'] = typeof this.medicalInterpreterNeeded.toJSON === 'function' ? this.medicalInterpreterNeeded.toJSON() : this.medicalInterpreterNeeded;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicalInterpreter class.
   * The FHIR must be valid against the MedicalInterpreter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicalInterpreter} An instance of MedicalInterpreter populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new MedicalInterpreter();
    return inst;
  }

}
export default MedicalInterpreter;
