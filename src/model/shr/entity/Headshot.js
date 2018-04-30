import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Headshot.
 */
class Headshot {

  /**
   * Get the value (aliases attachment).
   * @returns {Attachment} The shr.core.Attachment
   */
  get value() {
    return this._attachment;
  }

  /**
   * Set the value (aliases attachment).
   * This field/value is required.
   * @param {Attachment} value - The shr.core.Attachment
   */
  set value(value) {
    this._attachment = value;
  }

  /**
   * Set the value (aliases attachment) and return 'this' for chaining.
   * This field/value is required.
   * @param {Attachment} value - The shr.core.Attachment
   * @returns {Headshot} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Attachment.
   * @returns {Attachment} The shr.core.Attachment
   */
  get attachment() {
    return this._attachment;
  }

  /**
   * Set the Attachment.
   * This field/value is required.
   * @param {Attachment} attachment - The shr.core.Attachment
   */
  set attachment(attachment) {
    this._attachment = attachment;
  }

  /**
   * Set the Attachment and return 'this' for chaining.
   * This field/value is required.
   * @param {Attachment} attachment - The shr.core.Attachment
   * @returns {Headshot} this.
   */
  withAttachment(attachment) {
    this.attachment = attachment; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Headshot class.
   * The JSON must be valid against the Headshot JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Headshot} An instance of Headshot populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Headshot();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Headshot class to a JSON object.
   * The JSON is expected to be valid against the Headshot JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Headshot' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
}
export default Headshot;
