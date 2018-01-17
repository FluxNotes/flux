import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryProcedurePerformed from './LaboratoryProcedurePerformed';

/**
 * Generated class for shr.procedure.HIVScreeningTestPerformed.
 * @extends LaboratoryProcedurePerformed
 */
class HIVScreeningTestPerformed extends LaboratoryProcedurePerformed {

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
   * Deserializes JSON data to an instance of the HIVScreeningTestPerformed class.
   * The JSON must be valid against the HIVScreeningTestPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HIVScreeningTestPerformed} An instance of HIVScreeningTestPerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new HIVScreeningTestPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default HIVScreeningTestPerformed;
