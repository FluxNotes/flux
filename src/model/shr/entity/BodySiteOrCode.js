import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.BodySiteOrCode.
 */
class BodySiteOrCode {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite.
   * @returns {(CodeableConcept|BodySite)} The choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite.
   * This field/value is required.
   * @param {(CodeableConcept|BodySite)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|BodySite)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite
   * @returns {BodySiteOrCode} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BodySiteOrCode class.
   * The JSON must be valid against the BodySiteOrCode JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodySiteOrCode} An instance of BodySiteOrCode populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BodySiteOrCode();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BodySiteOrCode class to a JSON object.
   * The JSON is expected to be valid against the BodySiteOrCode JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/BodySiteOrCode' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BodySiteOrCode class to a FHIR object.
   * The FHIR is expected to be valid against the BodySiteOrCode FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default BodySiteOrCode;
