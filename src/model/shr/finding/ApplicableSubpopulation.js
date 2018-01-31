import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.ApplicableSubpopulation.
 */
class ApplicableSubpopulation {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
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
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Deserializes JSON data to an instance of the ApplicableSubpopulation class.
   * The JSON must be valid against the ApplicableSubpopulation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ApplicableSubpopulation} An instance of ApplicableSubpopulation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ApplicableSubpopulation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ApplicableSubpopulation;
