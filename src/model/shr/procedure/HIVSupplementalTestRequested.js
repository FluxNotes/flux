import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryProcedureRequested from './LaboratoryProcedureRequested';

/**
 * Generated class for shr.procedure.HIVSupplementalTestRequested.
 * @extends LaboratoryProcedureRequested
 */
class HIVSupplementalTestRequested extends LaboratoryProcedureRequested {

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
   * Deserializes JSON data to an instance of the HIVSupplementalTestRequested class.
   * The JSON must be valid against the HIVSupplementalTestRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {HIVSupplementalTestRequested} An instance of HIVSupplementalTestRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new HIVSupplementalTestRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default HIVSupplementalTestRequested;
