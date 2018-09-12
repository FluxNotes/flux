import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.SourceClinicalNote.
 */
class SourceClinicalNote {

  /**
   * Get the value (Reference).
   * @returns {Reference}
   */
  get value() {
    return this._reference;
  }

  /**
   * Set the value (Reference).
   * @param {Reference} value
   */
  set value(value) {
    this._reference = value;
  }

  /**
   * Deserializes JSON data to an instance of the SourceClinicalNote class.
   * The JSON must be valid against the SourceClinicalNote JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SourceClinicalNote} An instance of SourceClinicalNote populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SourceClinicalNote();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SourceClinicalNote;