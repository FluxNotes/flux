import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.ResourceSize.
 */
class ResourceSize {

  /**
   * Get the value (aliases unsignedInt).
   * @returns {unsignedInt} The unsignedInt
   */
  get value() {
    return this._unsignedInt;
  }

  /**
   * Set the value (aliases unsignedInt).
   * @param {unsignedInt} value - The unsignedInt
   */
  set value(value) {
    this._unsignedInt = value;
  }

  /**
   * Get the unsignedInt.
   * @returns {unsignedInt} The unsignedInt
   */
  get unsignedInt() {
    return this._unsignedInt;
  }

  /**
   * Set the unsignedInt.
   * @param {unsignedInt} unsignedInt - The unsignedInt
   */
  set unsignedInt(unsignedInt) {
    this._unsignedInt = unsignedInt;
  }

  /**
   * Deserializes JSON data to an instance of the ResourceSize class.
   * The JSON must be valid against the ResourceSize JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResourceSize} An instance of ResourceSize populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ResourceSize();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ResourceSize;
