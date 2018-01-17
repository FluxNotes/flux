import { setPropertiesFromJSON } from '../../json-helper';

import Condition from '../condition/Condition';

/**
 * Generated class for shr.familyhistory.FamilyMemberCondition.
 * @extends Condition
 */
class FamilyMemberCondition extends Condition {

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
   * Deserializes JSON data to an instance of the FamilyMemberCondition class.
   * The JSON must be valid against the FamilyMemberCondition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FamilyMemberCondition} An instance of FamilyMemberCondition populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FamilyMemberCondition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default FamilyMemberCondition;
