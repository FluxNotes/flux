import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.RequestIntent.
 */
class RequestIntent {

  /**
   * Get the value (aliases code).
   * @returns {code} The code
   */
  get value() {
    return this._code;
  }

  /**
   * Set the value (aliases code).
   * @param {code} value - The code
   */
  set value(value) {
    this._code = value;
  }

  /**
   * Get the code.
   * @returns {code} The code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the code.
   * @param {code} code - The code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Deserializes JSON data to an instance of the RequestIntent class.
   * The JSON must be valid against the RequestIntent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RequestIntent} An instance of RequestIntent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RequestIntent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RequestIntent;
