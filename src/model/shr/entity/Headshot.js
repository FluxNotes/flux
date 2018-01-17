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
   * @param {Attachment} value - The shr.core.Attachment
   */
  set value(value) {
    this._attachment = value;
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
   * @param {Attachment} attachment - The shr.core.Attachment
   */
  set attachment(attachment) {
    this._attachment = attachment;
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
}
export default Headshot;
