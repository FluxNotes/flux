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
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {StudyArm} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {StudyArm} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Deserializes JSON data to an instance of the StudyArm class.
   * The JSON must be valid against the StudyArm JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StudyArm} An instance of StudyArm populated with the JSON data
   */
  static fromJSON(json = {}) {
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
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/research/StudyArm' } };
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    return inst;
  }

  /**
   * Serializes an instance of the StudyArm class to a FHIR object.
   * The FHIR is expected to be valid against the StudyArm FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the StudyArm class.
   * The FHIR must be valid against the StudyArm FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {StudyArm} An instance of StudyArm populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new StudyArm();
    return inst;
  }

}
export default StudyArm;
