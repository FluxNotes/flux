import { setPropertiesFromJSON } from '../../json-helper';

import Content from '../base/Content';

/**
 * Generated class for shr.finding.Finding.
 * @extends Content
 */
class Finding extends Content {

  /**
   * Get the Subject.
   * @returns {Subject} The shr.base.Subject
   */
  get subject() {
    return this._subject;
  }

  /**
   * Set the Subject.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
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
   * Get the FindingMethod.
   * @returns {FindingMethod} The shr.finding.FindingMethod
   */
  get findingMethod() {
    return this._findingMethod;
  }

  /**
   * Set the FindingMethod.
   * @param {FindingMethod} findingMethod - The shr.finding.FindingMethod
   */
  set findingMethod(findingMethod) {
    this._findingMethod = findingMethod;
  }

  /**
   * Get the FindingStatus.
   * @returns {FindingStatus} The shr.finding.FindingStatus
   */
  get findingStatus() {
    return this._findingStatus;
  }

  /**
   * Set the FindingStatus.
   * @param {FindingStatus} findingStatus - The shr.finding.FindingStatus
   */
  set findingStatus(findingStatus) {
    this._findingStatus = findingStatus;
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
   * Deserializes JSON data to an instance of the Finding class.
   * The JSON must be valid against the Finding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Finding} An instance of Finding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Finding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Finding;
