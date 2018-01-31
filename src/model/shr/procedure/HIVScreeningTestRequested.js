import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryProcedureRequested from './LaboratoryProcedureRequested';

/**
 * Generated class for shr.procedure.HIVScreeningTestRequested.
 * @extends LaboratoryProcedureRequested
 */
class HIVScreeningTestRequested extends LaboratoryProcedureRequested {

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
   * Deserializes JSON data to an instance of the HIVScreeningTestRequested class.
   * The JSON must be valid against the HIVScreeningTestRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HIVScreeningTestRequested} An instance of HIVScreeningTestRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new HIVScreeningTestRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default HIVScreeningTestRequested;
