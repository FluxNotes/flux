import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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

  /**
   * Serializes an instance of the ContactDetail class to a FHIR object.
   * The FHIR is expected to be valid against the ContactDetail FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.humanName != null && this.humanName.nameAsText != null) {
      inst['name'] = typeof this.humanName.nameAsText.toFHIR === 'function' ? this.humanName.nameAsText.toFHIR() : this.humanName.nameAsText;
    }
    if (this.contactPoint != null) {
      inst['telecom'] = inst ['telecom'] || [];
      inst['telecom'] = inst['telecom'].concat(this.contactPoint.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ContactDetail class.
   * The FHIR must be valid against the ContactDetail FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ContactDetail} An instance of ContactDetail populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ContactDetail();
    if (fhir['name'] != null) {
      if(inst.humanName == null) {
        inst.humanName = createInstanceFromFHIR('shr.core.HumanName', {});
      }
      inst.humanName.nameAsText = createInstanceFromFHIR('shr.core.NameAsText', fhir['name']);
    }
    if (fhir['telecom'] != null) {
      inst.contactPoint = inst.contactPoint || [];
      inst.contactPoint = inst.contactPoint.concat(fhir['telecom'].map(f => createInstanceFromFHIR('shr.core.ContactPoint', f)));
    }
    return inst;
  }

}
export default ContactDetail;
