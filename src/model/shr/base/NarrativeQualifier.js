import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.NarrativeQualifier.
 */
class NarrativeQualifier {

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
   * Deserializes JSON data to an instance of the NarrativeQualifier class.
   * The JSON must be valid against the NarrativeQualifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NarrativeQualifier} An instance of NarrativeQualifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NarrativeQualifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NarrativeQualifier;
