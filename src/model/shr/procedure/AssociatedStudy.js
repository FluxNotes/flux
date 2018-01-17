import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.AssociatedStudy.
 */
class AssociatedStudy {

  /**
   * Get the value (aliases study).
   * @returns {Reference} The shr.research.Study reference
   */
  get value() {
    return this._study;
  }

  /**
   * Set the value (aliases study).
   * @param {Reference} value - The shr.research.Study reference
   */
  set value(value) {
    this._study = value;
  }

  /**
   * Get the shr.research.Study reference.
   * @returns {Reference} The shr.research.Study reference
   */
  get study() {
    return this._study;
  }

  /**
   * Set the shr.research.Study reference.
   * @param {Reference} study - The shr.research.Study reference
   */
  set study(study) {
    this._study = study;
  }

  /**
   * Deserializes JSON data to an instance of the AssociatedStudy class.
   * The JSON must be valid against the AssociatedStudy JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AssociatedStudy} An instance of AssociatedStudy populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AssociatedStudy();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AssociatedStudy;
