import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.SecurityLabel.
 */
class SecurityLabel {

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
   * Deserializes JSON data to an instance of the SecurityLabel class.
   * The JSON must be valid against the SecurityLabel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SecurityLabel} An instance of SecurityLabel populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SecurityLabel();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SecurityLabel;
