import { setPropertiesFromJSON } from '../../json-helper';

import AdverseEvent from './AdverseEvent';

/**
 * Generated class for shr.adverse.ToxicReaction.
 * @extends AdverseEvent
 */
class ToxicReaction extends AdverseEvent {

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

  // Ommitting getter/setter for TBD: PatternOfEvent

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
   * Deserializes JSON data to an instance of the ToxicReaction class.
   * The JSON must be valid against the ToxicReaction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ToxicReaction} An instance of ToxicReaction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ToxicReaction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ToxicReaction;
