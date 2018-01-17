import { setPropertiesFromJSON } from '../../json-helper';

import Quantity from './Quantity';

/**
 * Generated class for shr.core.Qount.
 * @extends Quantity
 */
class Qount extends Quantity {

  /**
   * Get the Units.
   * @returns {Units} The shr.core.Units
   */
  get units() {
    return this._units;
  }

  /**
   * Set the Units.
   * @param {Units} units - The shr.core.Units
   */
  set units(units) {
    this._units = units;
  }

  /**
   * Deserializes JSON data to an instance of the Qount class.
   * The JSON must be valid against the Qount JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Qount} An instance of Qount populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Qount();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Qount;
