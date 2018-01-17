import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Coding.
 */
class Coding {

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
   * Get the CodeSystem.
   * @returns {CodeSystem} The shr.core.CodeSystem
   */
  get codeSystem() {
    return this._codeSystem;
  }

  /**
   * Set the CodeSystem.
   * @param {CodeSystem} codeSystem - The shr.core.CodeSystem
   */
  set codeSystem(codeSystem) {
    this._codeSystem = codeSystem;
  }

  /**
   * Get the CodeSystemVersion.
   * @returns {CodeSystemVersion} The shr.core.CodeSystemVersion
   */
  get codeSystemVersion() {
    return this._codeSystemVersion;
  }

  /**
   * Set the CodeSystemVersion.
   * @param {CodeSystemVersion} codeSystemVersion - The shr.core.CodeSystemVersion
   */
  set codeSystemVersion(codeSystemVersion) {
    this._codeSystemVersion = codeSystemVersion;
  }

  /**
   * Get the DisplayText.
   * @returns {DisplayText} The shr.core.DisplayText
   */
  get displayText() {
    return this._displayText;
  }

  /**
   * Set the DisplayText.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   */
  set displayText(displayText) {
    this._displayText = displayText;
  }

  /**
   * Deserializes JSON data to an instance of the Coding class.
   * The JSON must be valid against the Coding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Coding} An instance of Coding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Coding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Coding;
