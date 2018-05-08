import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.FocalSubjectReference.
 */
class FocalSubjectReference {

  /**
   * Get the value (aliases content).
   * @returns {Reference} The shr.base.Content reference
   */
  get value() {
    return this._content;
  }

  /**
   * Set the value (aliases content).
   * This field/value is required.
   * @param {Reference} value - The shr.base.Content reference
   */
  set value(value) {
    this._content = value;
  }

  /**
   * Set the value (aliases content) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.Content reference
   * @returns {FocalSubjectReference} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.Content reference.
   * @returns {Reference} The shr.base.Content reference
   */
  get content() {
    return this._content;
  }

  /**
   * Set the shr.base.Content reference.
   * This field/value is required.
   * @param {Reference} content - The shr.base.Content reference
   */
  set content(content) {
    this._content = content;
  }

  /**
   * Set the shr.base.Content reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} content - The shr.base.Content reference
   * @returns {FocalSubjectReference} this.
   */
  withContent(content) {
    this.content = content; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FocalSubjectReference class.
   * The JSON must be valid against the FocalSubjectReference JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FocalSubjectReference} An instance of FocalSubjectReference populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FocalSubjectReference();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FocalSubjectReference class to a JSON object.
   * The JSON is expected to be valid against the FocalSubjectReference JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/FocalSubjectReference' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default FocalSubjectReference;
