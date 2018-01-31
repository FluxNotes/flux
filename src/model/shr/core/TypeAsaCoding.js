import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.TypeAsaCoding.
 */
class TypeAsaCoding {

  /**
   * Get the value (aliases coding).
   * @returns {Coding} The shr.core.Coding
   */
  get value() {
    return this._coding;
  }

  /**
   * Set the value (aliases coding).
   * @param {Coding} value - The shr.core.Coding
   */
  set value(value) {
    this._coding = value;
  }

  /**
   * Get the Coding.
   * @returns {Coding} The shr.core.Coding
   */
  get coding() {
    return this._coding;
  }

  /**
   * Set the Coding.
   * @param {Coding} coding - The shr.core.Coding
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Deserializes JSON data to an instance of the TypeAsaCoding class.
   * The JSON must be valid against the TypeAsaCoding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TypeAsaCoding} An instance of TypeAsaCoding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TypeAsaCoding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default TypeAsaCoding;
