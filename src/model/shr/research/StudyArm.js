import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.research.StudyArm.
 */
class StudyArm {

  /**
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Deserializes JSON data to an instance of the StudyArm class.
   * The JSON must be valid against the StudyArm JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StudyArm} An instance of StudyArm populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StudyArm();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default StudyArm;
