import { setPropertiesFromJSON } from '../../json-helper';

import ProcedurePerformed from '../procedure/ProcedurePerformed';

/**
 * Generated class for shr.entity.SpecimenTreatment.
 * @extends ProcedurePerformed
 */
class SpecimenTreatment extends ProcedurePerformed {

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
   * Get the Additive array.
   * @returns {Array<Additive>} The shr.entity.Additive array
   */
  get additive() {
    return this._additive;
  }

  /**
   * Set the Additive array.
   * @param {Array<Additive>} additive - The shr.entity.Additive array
   */
  set additive(additive) {
    this._additive = additive;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenTreatment class.
   * The JSON must be valid against the SpecimenTreatment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenTreatment} An instance of SpecimenTreatment populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenTreatment();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SpecimenTreatment;
