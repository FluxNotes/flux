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
   * Set the HumanName and return 'this' for chaining.
   * @param {HumanName} humanName - The shr.core.HumanName
   * @returns {ContactDetail} this.
   */
  withHumanName(humanName) {
    this.humanName = humanName; return this;
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
   * Set the ContactPoint array and return 'this' for chaining.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   * @returns {ContactDetail} this.
   */
  withContactPoint(contactPoint) {
    this.contactPoint = contactPoint; return this;
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
  /**
   * Serializes an instance of the ContactDetail class to a JSON object.
   * The JSON is expected to be valid against the ContactDetail JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ContactDetail' } };
    if (this.humanName != null) {
      inst['HumanName'] = typeof this.humanName.toJSON === 'function' ? this.humanName.toJSON() : this.humanName;
    }
    if (this.contactPoint != null) {
      inst['ContactPoint'] = this.contactPoint.map(f => f.toJSON());
    }
    return inst;
  }
}
export default ContactDetail;
