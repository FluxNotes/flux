import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.condition.DiseaseProgression.
 * @extends Observation
 */
class DiseaseProgression extends Observation {

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
   * Get the FocalSubject.
   * @returns {FocalSubject} The shr.finding.FocalSubject
   */
  get focalSubject() {
    return this._focalSubject;
  }

  /**
   * Set the FocalSubject.
   * @param {FocalSubject} focalSubject - The shr.finding.FocalSubject
   */
  set focalSubject(focalSubject) {
    this._focalSubject = focalSubject;
  }

  /**
   * Get the FocalSubjectReference.
   * @returns {FocalSubjectReference} The shr.finding.FocalSubjectReference
   */
  get focalSubjectReference() {
    return this._focalSubjectReference;
  }

  /**
   * Set the FocalSubjectReference.
   * @param {FocalSubjectReference} focalSubjectReference - The shr.finding.FocalSubjectReference
   */
  set focalSubjectReference(focalSubjectReference) {
    this._focalSubjectReference = focalSubjectReference;
  }

  /**
   * Get the Evidence array.
   * @returns {Array<Evidence>} The shr.finding.Evidence array
   */
  get evidence() {
    return this._evidence;
  }

  /**
   * Set the Evidence array.
   * @param {Array<Evidence>} evidence - The shr.finding.Evidence array
   */
  set evidence(evidence) {
    this._evidence = evidence;
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
   * Deserializes JSON data to an instance of the DiseaseProgression class.
   * The JSON must be valid against the DiseaseProgression JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DiseaseProgression} An instance of DiseaseProgression populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DiseaseProgression();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default DiseaseProgression;
