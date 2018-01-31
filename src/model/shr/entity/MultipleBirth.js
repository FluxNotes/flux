import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MultipleBirth.
 */
class MultipleBirth {

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
   * Get the MultipleBirthOrder.
   * @returns {MultipleBirthOrder} The shr.entity.MultipleBirthOrder
   */
  get multipleBirthOrder() {
    return this._multipleBirthOrder;
  }

  /**
   * Set the MultipleBirthOrder.
   * @param {MultipleBirthOrder} multipleBirthOrder - The shr.entity.MultipleBirthOrder
   */
  set multipleBirthOrder(multipleBirthOrder) {
    this._multipleBirthOrder = multipleBirthOrder;
  }

  /**
   * Deserializes JSON data to an instance of the MultipleBirth class.
   * The JSON must be valid against the MultipleBirth JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MultipleBirth} An instance of MultipleBirth populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MultipleBirth();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default MultipleBirth;
