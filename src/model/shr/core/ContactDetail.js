import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.ContactDetail.
 */
class ContactDetail {

  /**
   * Get the HumanName.
   * @returns {HumanName} The shr.core.HumanName
   */
  get humanName() {
    return this._humanName;
  }

  /**
   * Set the HumanName.
   * @param {HumanName} humanName - The shr.core.HumanName
   */
  set humanName(humanName) {
    this._humanName = humanName;
  }

  /**
   * Get the ContactPoint array.
   * @returns {Array<ContactPoint>} The shr.core.ContactPoint array
   */
  get contactPoint() {
    return this._contactPoint;
  }

  /**
   * Set the ContactPoint array.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Deserializes JSON data to an instance of the ContactDetail class.
   * The JSON must be valid against the ContactDetail JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ContactDetail} An instance of ContactDetail populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ContactDetail();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ContactDetail;
