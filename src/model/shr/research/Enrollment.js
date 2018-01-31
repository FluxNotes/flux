import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.research.Enrollment.
 */
class Enrollment {

  /**
   * Get the value (aliases group).
   * @returns {Reference} The shr.entity.Group reference
   */
  get value() {
    return this._group;
  }

  /**
   * Set the value (aliases group).
   * @param {Reference} value - The shr.entity.Group reference
   */
  set value(value) {
    this._group = value;
  }

  /**
   * Get the shr.entity.Group reference.
   * @returns {Reference} The shr.entity.Group reference
   */
  get group() {
    return this._group;
  }

  /**
   * Set the shr.entity.Group reference.
   * @param {Reference} group - The shr.entity.Group reference
   */
  set group(group) {
    this._group = group;
  }

  /**
   * Deserializes JSON data to an instance of the Enrollment class.
   * The JSON must be valid against the Enrollment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Enrollment} An instance of Enrollment populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Enrollment();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Enrollment;
