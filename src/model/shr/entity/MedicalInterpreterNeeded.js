import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MedicalInterpreterNeeded.
 */
class MedicalInterpreterNeeded {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {MedicalInterpreterNeeded} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {MedicalInterpreterNeeded} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the Language.
   * @returns {Language} The shr.base.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * This field/value is required.
   * @param {Language} language - The shr.base.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Set the Language and return 'this' for chaining.
   * This field/value is required.
   * @param {Language} language - The shr.base.Language
   * @returns {MedicalInterpreterNeeded} this.
   */
  withLanguage(language) {
    this.language = language; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicalInterpreterNeeded class.
   * The JSON must be valid against the MedicalInterpreterNeeded JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicalInterpreterNeeded} An instance of MedicalInterpreterNeeded populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicalInterpreterNeeded();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicalInterpreterNeeded class to a JSON object.
   * The JSON is expected to be valid against the MedicalInterpreterNeeded JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/MedicalInterpreterNeeded' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    return inst;
  }
}
export default MedicalInterpreterNeeded;
