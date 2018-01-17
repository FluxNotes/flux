import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ExpectedMethod.
 */
class ExpectedMethod {

  /**
   * Get the value (aliases method).
   * @returns {Reference} The shr.action.Method reference
   */
  get value() {
    return this._method;
  }

  /**
   * Set the value (aliases method).
   * @param {Reference} value - The shr.action.Method reference
   */
  set value(value) {
    this._method = value;
  }

  /**
   * Get the shr.action.Method reference.
   * @returns {Reference} The shr.action.Method reference
   */
  get method() {
    return this._method;
  }

  /**
   * Set the shr.action.Method reference.
   * @param {Reference} method - The shr.action.Method reference
   */
  set method(method) {
    this._method = method;
  }

  /**
   * Deserializes JSON data to an instance of the ExpectedMethod class.
   * The JSON must be valid against the ExpectedMethod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpectedMethod} An instance of ExpectedMethod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExpectedMethod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ExpectedMethod;
