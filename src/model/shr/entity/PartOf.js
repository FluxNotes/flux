import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.PartOf.
 */
class PartOf {

  /**
   * Get the value (aliases content).
   * @returns {Reference} The shr.base.Content reference
   */
  get value() {
    return this._content;
  }

  /**
   * Set the value (aliases content).
   * @param {Reference} value - The shr.base.Content reference
   */
  set value(value) {
    this._content = value;
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
   * @param {Reference} content - The shr.base.Content reference
   */
  set content(content) {
    this._content = content;
  }

  /**
   * Deserializes JSON data to an instance of the PartOf class.
   * The JSON must be valid against the PartOf JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PartOf} An instance of PartOf populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PartOf();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PartOf;
