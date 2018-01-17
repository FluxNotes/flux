import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.allergy.SubstanceCategory.
 */
class SubstanceCategory {

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
   * Deserializes JSON data to an instance of the SubstanceCategory class.
   * The JSON must be valid against the SubstanceCategory JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SubstanceCategory} An instance of SubstanceCategory populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SubstanceCategory();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SubstanceCategory;
