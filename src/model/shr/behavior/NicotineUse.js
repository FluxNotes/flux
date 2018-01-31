import { setPropertiesFromJSON } from '../../json-helper';

import SubstanceUse from './SubstanceUse';

/**
 * Generated class for shr.behavior.NicotineUse.
 * @extends SubstanceUse
 */
class NicotineUse extends SubstanceUse {

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
   * Deserializes JSON data to an instance of the NicotineUse class.
   * The JSON must be valid against the NicotineUse JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NicotineUse} An instance of NicotineUse populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NicotineUse();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NicotineUse;
