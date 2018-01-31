import { setPropertiesFromJSON } from '../../json-helper';

import ConditionAbsent from '../condition/ConditionAbsent';

/**
 * Generated class for shr.familyhistory.FamilyMemberConditionAbsent.
 * @extends ConditionAbsent
 */
class FamilyMemberConditionAbsent extends ConditionAbsent {

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
   * Deserializes JSON data to an instance of the FamilyMemberConditionAbsent class.
   * The JSON must be valid against the FamilyMemberConditionAbsent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FamilyMemberConditionAbsent} An instance of FamilyMemberConditionAbsent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FamilyMemberConditionAbsent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default FamilyMemberConditionAbsent;
