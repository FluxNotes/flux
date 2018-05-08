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
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {StagingSystem} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {StagingSystem} this.
   */
  withString(string) {
    this.string = string; return this;
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
   * Set the Version and return 'this' for chaining.
   * @param {Version} version - The shr.core.Version
   * @returns {StagingSystem} this.
   */
  withVersion(version) {
    this.version = version; return this;
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
  /**
   * Serializes an instance of the StagingSystem class to a JSON object.
   * The JSON is expected to be valid against the StagingSystem JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/StagingSystem' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.version != null) {
      inst['Version'] = typeof this.version.toJSON === 'function' ? this.version.toJSON() : this.version;
    }
    return inst;
  }
}
export default StagingSystem;
