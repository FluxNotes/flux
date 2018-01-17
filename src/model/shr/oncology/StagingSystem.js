import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.oncology.StagingSystem.
 */
class StagingSystem {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Get the Version.
   * @returns {Version} The shr.core.Version
   */
  get version() {
    return this._version;
  }

  /**
   * Set the Version.
   * @param {Version} version - The shr.core.Version
   */
  set version(version) {
    this._version = version;
  }

  /**
   * Deserializes JSON data to an instance of the StagingSystem class.
   * The JSON must be valid against the StagingSystem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StagingSystem} An instance of StagingSystem populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StagingSystem();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default StagingSystem;
