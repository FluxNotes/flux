import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.LaboratoryProcedure.
 * @extends ProcedureAction
 */
class LaboratoryProcedure extends ProcedureAction {

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
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Get the shr.entity.Specimen reference.
   * @returns {Reference} The shr.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the shr.entity.Specimen reference.
   * @param {Reference} specimen - The shr.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Get the shr.device.Device reference.
   * @returns {Reference} The shr.device.Device reference
   */
  get device() {
    return this._device;
  }

  /**
   * Set the shr.device.Device reference.
   * @param {Reference} device - The shr.device.Device reference
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Deserializes JSON data to an instance of the LaboratoryProcedure class.
   * The JSON must be valid against the LaboratoryProcedure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LaboratoryProcedure} An instance of LaboratoryProcedure populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LaboratoryProcedure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default LaboratoryProcedure;
