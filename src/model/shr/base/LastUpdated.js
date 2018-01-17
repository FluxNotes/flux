import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.LastUpdated.
 */
class LastUpdated {

  /**
   * Get the value (aliases instant).
   * @returns {instant} The instant
   */
  get value() {
    return this._instant;
  }

  /**
   * Set the value (aliases instant).
   * @param {instant} value - The instant
   */
  set value(value) {
    this._instant = value;
  }

  /**
   * Get the instant.
   * @returns {instant} The instant
   */
  get instant() {
    return this._instant;
  }

  /**
   * Set the instant.
   * @param {instant} instant - The instant
   */
  set instant(instant) {
    this._instant = instant;
  }

  /**
   * Deserializes JSON data to an instance of the LastUpdated class.
   * The JSON must be valid against the LastUpdated JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {LastUpdated} An instance of LastUpdated populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new LastUpdated();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default LastUpdated;
