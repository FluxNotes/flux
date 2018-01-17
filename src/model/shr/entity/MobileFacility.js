import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MobileFacility.
 */
class MobileFacility {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Deserializes JSON data to an instance of the MobileFacility class.
   * The JSON must be valid against the MobileFacility JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MobileFacility} An instance of MobileFacility populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MobileFacility();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MobileFacility;
