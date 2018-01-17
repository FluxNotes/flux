import { setPropertiesFromJSON } from '../../json-helper';

import SpecializedFinding from '../finding/SpecializedFinding';

/**
 * Generated class for shr.adverse.AdverseEvent.
 * @extends SpecializedFinding
 */
class AdverseEvent extends SpecializedFinding {

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
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Get the AdverseEventGrade.
   * @returns {AdverseEventGrade} The shr.adverse.AdverseEventGrade
   */
  get adverseEventGrade() {
    return this._adverseEventGrade;
  }

  /**
   * Set the AdverseEventGrade.
   * @param {AdverseEventGrade} adverseEventGrade - The shr.adverse.AdverseEventGrade
   */
  set adverseEventGrade(adverseEventGrade) {
    this._adverseEventGrade = adverseEventGrade;
  }

  /**
   * Get the SeriousAdverseEvent.
   * @returns {SeriousAdverseEvent} The shr.adverse.SeriousAdverseEvent
   */
  get seriousAdverseEvent() {
    return this._seriousAdverseEvent;
  }

  /**
   * Set the SeriousAdverseEvent.
   * @param {SeriousAdverseEvent} seriousAdverseEvent - The shr.adverse.SeriousAdverseEvent
   */
  set seriousAdverseEvent(seriousAdverseEvent) {
    this._seriousAdverseEvent = seriousAdverseEvent;
  }

  // Ommitting getter/setter for TBD: PatternOfEvent

  /**
   * Get the Outcome.
   * @returns {Outcome} The shr.action.Outcome
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome.
   * @param {Outcome} outcome - The shr.action.Outcome
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Get the shr.procedure.AssociatedStudy reference.
   * @returns {Reference} The shr.procedure.AssociatedStudy reference
   */
  get associatedStudy() {
    return this._associatedStudy;
  }

  /**
   * Set the shr.procedure.AssociatedStudy reference.
   * @param {Reference} associatedStudy - The shr.procedure.AssociatedStudy reference
   */
  set associatedStudy(associatedStudy) {
    this._associatedStudy = associatedStudy;
  }

  /**
   * Get the CauseCategory.
   * @returns {CauseCategory} The shr.adverse.CauseCategory
   */
  get causeCategory() {
    return this._causeCategory;
  }

  /**
   * Set the CauseCategory.
   * @param {CauseCategory} causeCategory - The shr.adverse.CauseCategory
   */
  set causeCategory(causeCategory) {
    this._causeCategory = causeCategory;
  }

  /**
   * Get the AdverseEventAttribution array.
   * @returns {Array<AdverseEventAttribution>} The shr.adverse.AdverseEventAttribution array
   */
  get adverseEventAttribution() {
    return this._adverseEventAttribution;
  }

  /**
   * Set the AdverseEventAttribution array.
   * @param {Array<AdverseEventAttribution>} adverseEventAttribution - The shr.adverse.AdverseEventAttribution array
   */
  set adverseEventAttribution(adverseEventAttribution) {
    this._adverseEventAttribution = adverseEventAttribution;
  }

  /**
   * Get the ActionTaken array.
   * @returns {Array<ActionTaken>} The shr.adverse.ActionTaken array
   */
  get actionTaken() {
    return this._actionTaken;
  }

  /**
   * Set the ActionTaken array.
   * @param {Array<ActionTaken>} actionTaken - The shr.adverse.ActionTaken array
   */
  set actionTaken(actionTaken) {
    this._actionTaken = actionTaken;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseEvent class.
   * The JSON must be valid against the AdverseEvent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseEvent} An instance of AdverseEvent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseEvent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AdverseEvent;
