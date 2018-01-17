import { setPropertiesFromJSON } from '../../json-helper';

import SubstanceUse from './SubstanceUse';

/**
 * Generated class for shr.behavior.AlcoholUse.
 * @extends SubstanceUse
 */
class AlcoholUse extends SubstanceUse {

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
   * Get the Members.
   * @returns {Members} The shr.finding.Members
   */
  get members() {
    return this._members;
  }

  /**
   * Set the Members.
   * @param {Members} members - The shr.finding.Members
   */
  set members(members) {
    this._members = members;
  }

  /**
   * Deserializes JSON data to an instance of the AlcoholUse class.
   * The JSON must be valid against the AlcoholUse JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AlcoholUse} An instance of AlcoholUse populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AlcoholUse();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AlcoholUse;
