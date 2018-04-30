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
   * Set the Subject and return 'this' for chaining.
   * @param {Subject} subject - The shr.base.Subject
   * @returns {Finding} this.
   */
  withSubject(subject) {
    this.subject = subject; return this;
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
   * Set the FocalSubject and return 'this' for chaining.
   * @param {FocalSubject} focalSubject - The shr.finding.FocalSubject
   * @returns {Finding} this.
   */
  withFocalSubject(focalSubject) {
    this.focalSubject = focalSubject; return this;
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
   * Set the FocalSubjectReference and return 'this' for chaining.
   * @param {FocalSubjectReference} focalSubjectReference - The shr.finding.FocalSubjectReference
   * @returns {Finding} this.
   */
  withFocalSubjectReference(focalSubjectReference) {
    this.focalSubjectReference = focalSubjectReference; return this;
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
   * Set the FindingMethod and return 'this' for chaining.
   * @param {FindingMethod} findingMethod - The shr.finding.FindingMethod
   * @returns {Finding} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
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
   * Set the FindingStatus and return 'this' for chaining.
   * @param {FindingStatus} findingStatus - The shr.finding.FindingStatus
   * @returns {Finding} this.
   */
  withFindingStatus(findingStatus) {
    this.findingStatus = findingStatus; return this;
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
   * Set the Evidence array and return 'this' for chaining.
   * @param {Array<Evidence>} evidence - The shr.finding.Evidence array
   * @returns {Finding} this.
   */
  withEvidence(evidence) {
    this.evidence = evidence; return this;
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
  /**
   * Serializes an instance of the Finding class to a JSON object.
   * The JSON is expected to be valid against the Finding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/Finding' } };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    return inst;
  }
}
export default Finding;
