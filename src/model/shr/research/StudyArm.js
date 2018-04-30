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
   * This field/value is required.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Set the Title and return 'this' for chaining.
   * This field/value is required.
   * @param {Title} title - The shr.core.Title
   * @returns {StudyArm} this.
   */
  withTitle(title) {
    this.title = title; return this;
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
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.entity.Type
   * @returns {StudyArm} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {StudyArm} this.
   */
  withDetails(details) {
    this.details = details; return this;
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
  /**
   * Serializes an instance of the StudyArm class to a JSON object.
   * The JSON is expected to be valid against the StudyArm JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/research/StudyArm' } };
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    return inst;
  }
}
export default StudyArm;
