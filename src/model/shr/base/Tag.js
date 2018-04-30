import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.Tag.
 */
class Tag {

  /**
   * Get the value (aliases coding).
   * @returns {Coding} The shr.core.Coding
   */
  get value() {
    return this._coding;
  }

  /**
   * Set the value (aliases coding).
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   */
  set value(value) {
    this._coding = value;
  }

  /**
   * Set the value (aliases coding) and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} value - The shr.core.Coding
   * @returns {Tag} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Set the Coding and return 'this' for chaining.
   * This field/value is required.
   * @param {Coding} coding - The shr.core.Coding
   * @returns {Tag} this.
   */
  withCoding(coding) {
    this.coding = coding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Tag class.
   * The JSON must be valid against the Tag JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Tag} An instance of Tag populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Tag();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Tag class to a JSON object.
   * The JSON is expected to be valid against the Tag JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Tag' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Tag;
