import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.Outcome.
 */
class Outcome {

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
   * Get the shr.finding.Finding reference array.
   * @returns {Array<Reference>} The shr.finding.Finding reference array
   */
  get finding() {
    return this._finding;
  }

  /**
   * Set the shr.finding.Finding reference array.
   * @param {Array<Reference>} finding - The shr.finding.Finding reference array
   */
  set finding(finding) {
    this._finding = finding;
  }

  /**
   * Deserializes JSON data to an instance of the Outcome class.
   * The JSON must be valid against the Outcome JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Outcome} An instance of Outcome populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Outcome();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Outcome;
