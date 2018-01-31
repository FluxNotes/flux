import { setPropertiesFromJSON } from '../../json-helper';

import BehavioralFinding from '../behavior/BehavioralFinding';

/**
 * Generated class for shr.medication.Adherence.
 * @extends BehavioralFinding
 */
class Adherence extends BehavioralFinding {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

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
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Get the ReasonForBehavior array.
   * @returns {Array<ReasonForBehavior>} The shr.behavior.ReasonForBehavior array
   */
  get reasonForBehavior() {
    return this._reasonForBehavior;
  }

  /**
   * Set the ReasonForBehavior array.
   * @param {Array<ReasonForBehavior>} reasonForBehavior - The shr.behavior.ReasonForBehavior array
   */
  set reasonForBehavior(reasonForBehavior) {
    this._reasonForBehavior = reasonForBehavior;
  }

  /**
   * Deserializes JSON data to an instance of the Adherence class.
   * The JSON must be valid against the Adherence JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Adherence} An instance of Adherence populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Adherence();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Adherence;
