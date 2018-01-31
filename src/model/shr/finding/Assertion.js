import { setPropertiesFromJSON } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for shr.finding.Assertion.
 * @extends Observation
 */
class Assertion extends Observation {

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
   * Get the ValueAbsentReason.
   * @returns {ValueAbsentReason} The shr.finding.ValueAbsentReason
   */
  get valueAbsentReason() {
    return this._valueAbsentReason;
  }

  /**
   * Set the ValueAbsentReason.
   * @param {ValueAbsentReason} valueAbsentReason - The shr.finding.ValueAbsentReason
   */
  set valueAbsentReason(valueAbsentReason) {
    this._valueAbsentReason = valueAbsentReason;
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
   * Get the NegationFlag.
   * @returns {NegationFlag} The shr.finding.NegationFlag
   */
  get negationFlag() {
    return this._negationFlag;
  }

  /**
   * Set the NegationFlag.
   * @param {NegationFlag} negationFlag - The shr.finding.NegationFlag
   */
  set negationFlag(negationFlag) {
    this._negationFlag = negationFlag;
  }

  /**
   * Deserializes JSON data to an instance of the Assertion class.
   * The JSON must be valid against the Assertion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Assertion} An instance of Assertion populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Assertion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Assertion;
