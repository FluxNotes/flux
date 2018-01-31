import { setPropertiesFromJSON } from '../../json-helper';

import SpecializedFinding from '../finding/SpecializedFinding';

/**
 * Generated class for shr.allergy.AllergyIntolerance.
 * @extends SpecializedFinding
 */
class AllergyIntolerance extends SpecializedFinding {

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
   * Get the SubstanceCategory array.
   * @returns {Array<SubstanceCategory>} The shr.allergy.SubstanceCategory array
   */
  get substanceCategory() {
    return this._substanceCategory;
  }

  /**
   * Set the SubstanceCategory array.
   * @param {Array<SubstanceCategory>} substanceCategory - The shr.allergy.SubstanceCategory array
   */
  set substanceCategory(substanceCategory) {
    this._substanceCategory = substanceCategory;
  }

  /**
   * Get the VerificationStatus.
   * @returns {VerificationStatus} The shr.allergy.VerificationStatus
   */
  get verificationStatus() {
    return this._verificationStatus;
  }

  /**
   * Set the VerificationStatus.
   * @param {VerificationStatus} verificationStatus - The shr.allergy.VerificationStatus
   */
  set verificationStatus(verificationStatus) {
    this._verificationStatus = verificationStatus;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
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
   * Get the AdverseReaction array.
   * @returns {Array<AdverseReaction>} The shr.allergy.AdverseReaction array
   */
  get adverseReaction() {
    return this._adverseReaction;
  }

  /**
   * Set the AdverseReaction array.
   * @param {Array<AdverseReaction>} adverseReaction - The shr.allergy.AdverseReaction array
   */
  set adverseReaction(adverseReaction) {
    this._adverseReaction = adverseReaction;
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
   * Get the MostRecentOccurrenceTime.
   * @returns {MostRecentOccurrenceTime} The shr.allergy.MostRecentOccurrenceTime
   */
  get mostRecentOccurrenceTime() {
    return this._mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The shr.allergy.MostRecentOccurrenceTime
   */
  set mostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this._mostRecentOccurrenceTime = mostRecentOccurrenceTime;
  }

  /**
   * Deserializes JSON data to an instance of the AllergyIntolerance class.
   * The JSON must be valid against the AllergyIntolerance JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AllergyIntolerance} An instance of AllergyIntolerance populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AllergyIntolerance();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AllergyIntolerance;
