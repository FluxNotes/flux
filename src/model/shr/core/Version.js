import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Version.
 */
class Version {

  /**
   * Get the value (aliases id).
   * @returns {id} The id
   */
  get value() {
    return this._id;
  }

  /**
   * Set the value (aliases id).
   * @param {id} value - The id
   */
  set value(value) {
    this._id = value;
  }

  /**
   * Get the id.
   * @returns {id} The id
   */
  get id() {
    return this._id;
  }

  /**
   * Set the id.
   * @param {id} id - The id
   */
  set id(id) {
    this._id = id;
  }

  /**
   * Deserializes JSON data to an instance of the Version class.
   * The JSON must be valid against the Version JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Version} An instance of Version populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Version();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Version;
