import { setPropertiesFromJSON } from '../../json-helper';

import SpecializedFinding from '../finding/SpecializedFinding';

/**
 * Generated class for shr.condition.Condition.
 * @extends SpecializedFinding
 */
class Condition extends SpecializedFinding {

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
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The shr.condition.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * @param {ClinicalStatus} clinicalStatus - The shr.condition.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Get the BodySiteOrCode array.
   * @returns {Array<BodySiteOrCode>} The shr.entity.BodySiteOrCode array
   */
  get bodySiteOrCode() {
    return this._bodySiteOrCode;
  }

  /**
   * Set the BodySiteOrCode array.
   * @param {Array<BodySiteOrCode>} bodySiteOrCode - The shr.entity.BodySiteOrCode array
   */
  set bodySiteOrCode(bodySiteOrCode) {
    this._bodySiteOrCode = bodySiteOrCode;
  }

  /**
   * Get the Onset.
   * @returns {Onset} The shr.condition.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Set the Onset.
   * @param {Onset} onset - The shr.condition.Onset
   */
  set onset(onset) {
    this._onset = onset;
  }

  /**
   * Get the Abatement.
   * @returns {Abatement} The shr.condition.Abatement
   */
  get abatement() {
    return this._abatement;
  }

  /**
   * Set the Abatement.
   * @param {Abatement} abatement - The shr.condition.Abatement
   */
  set abatement(abatement) {
    this._abatement = abatement;
  }

  /**
   * Get the WhenClinicallyRecognized.
   * @returns {WhenClinicallyRecognized} The shr.condition.WhenClinicallyRecognized
   */
  get whenClinicallyRecognized() {
    return this._whenClinicallyRecognized;
  }

  /**
   * Set the WhenClinicallyRecognized.
   * @param {WhenClinicallyRecognized} whenClinicallyRecognized - The shr.condition.WhenClinicallyRecognized
   */
  set whenClinicallyRecognized(whenClinicallyRecognized) {
    this._whenClinicallyRecognized = whenClinicallyRecognized;
  }

  /**
   * Get the Preexisting.
   * @returns {Preexisting} The shr.condition.Preexisting
   */
  get preexisting() {
    return this._preexisting;
  }

  /**
   * Set the Preexisting.
   * @param {Preexisting} preexisting - The shr.condition.Preexisting
   */
  set preexisting(preexisting) {
    this._preexisting = preexisting;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.condition.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.condition.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Get the Criticality.
   * @returns {Criticality} The shr.condition.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Set the Criticality.
   * @param {Criticality} criticality - The shr.condition.Criticality
   */
  set criticality(criticality) {
    this._criticality = criticality;
  }

  /**
   * Get the Stage.
   * @returns {Stage} The shr.condition.Stage
   */
  get stage() {
    return this._stage;
  }

  /**
   * Set the Stage.
   * @param {Stage} stage - The shr.condition.Stage
   */
  set stage(stage) {
    this._stage = stage;
  }

  /**
   * Deserializes JSON data to an instance of the Condition class.
   * The JSON must be valid against the Condition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Condition} An instance of Condition populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Condition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Condition;
