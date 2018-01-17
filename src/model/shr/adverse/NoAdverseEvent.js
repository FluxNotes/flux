import { setPropertiesFromJSON } from '../../json-helper';

import Assertion from '../finding/Assertion';

/**
 * Generated class for shr.adverse.NoAdverseEvent.
 * @extends Assertion
 */
class NoAdverseEvent extends Assertion {

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
   * Deserializes JSON data to an instance of the NoAdverseEvent class.
   * The JSON must be valid against the NoAdverseEvent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NoAdverseEvent} An instance of NoAdverseEvent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NoAdverseEvent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NoAdverseEvent;
