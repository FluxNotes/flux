import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.CodeSystem.
 */
class CodeSystem {

  /**
   * Get the value (aliases uri).
   * @returns {uri} The uri
   */
  get value() {
    return this._uri;
  }

  /**
   * Set the value (aliases uri).
   * @param {uri} value - The uri
   */
  set value(value) {
    this._uri = value;
  }

  /**
   * Get the uri.
   * @returns {uri} The uri
   */
  get uri() {
    return this._uri;
  }

  /**
   * Set the uri.
   * @param {uri} uri - The uri
   */
  set uri(uri) {
    this._uri = uri;
  }

  /**
   * Deserializes JSON data to an instance of the CodeSystem class.
   * The JSON must be valid against the CodeSystem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeSystem} An instance of CodeSystem populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CodeSystem();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default CodeSystem;
