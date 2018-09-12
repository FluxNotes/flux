import { setPropertiesFromJSON } from '../../json-helper';

import AnatomicalLocation from '../../cimi/element/AnatomicalLocation';

/**
 * Generated class for shr.oncology.BreastLymphNodeBodySite.
 * @extends AnatomicalLocation
 */
class BreastLymphNodeBodySite extends AnatomicalLocation {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {BreastLymphNodeBodySite} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {BreastLymphNodeBodySite} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {BreastLymphNodeBodySite} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the Laterality.
   * @returns {Laterality} The cimi.element.Laterality
   */
  get laterality() {
    return this._laterality;
  }

  /**
   * Set the Laterality.
   * @param {Laterality} laterality - The cimi.element.Laterality
   */
  set laterality(laterality) {
    this._laterality = laterality;
  }

  /**
   * Set the Laterality and return 'this' for chaining.
   * @param {Laterality} laterality - The cimi.element.Laterality
   * @returns {BreastLymphNodeBodySite} this.
   */
  withLaterality(laterality) {
    this.laterality = laterality; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastLymphNodeBodySite class.
   * The JSON must be valid against the BreastLymphNodeBodySite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastLymphNodeBodySite} An instance of BreastLymphNodeBodySite populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastLymphNodeBodySite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastLymphNodeBodySite class to a JSON object.
   * The JSON is expected to be valid against the BreastLymphNodeBodySite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['shr.base.EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastLymphNodeBodySite' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.laterality != null) {
      inst['cimi.element.Laterality'] = typeof this.laterality.toJSON === 'function' ? this.laterality.toJSON() : this.laterality;
    }
    if (this.anatomicalDirection != null) {
      inst['cimi.element.AnatomicalDirection'] = typeof this.anatomicalDirection.toJSON === 'function' ? this.anatomicalDirection.toJSON() : this.anatomicalDirection;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BreastLymphNodeBodySite class to a FHIR object.
   * The FHIR is expected to be valid against the BreastLymphNodeBodySite FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'BodySite';
    if (this.laterality != null) {
      inst['qualifier'] = typeof this.laterality.toFHIR === 'function' ? this.laterality.toFHIR() : this.laterality;
    }
    if (this.anatomicalDirection != null) {
      inst['qualifier'] = typeof this.anatomicalDirection.toFHIR === 'function' ? this.anatomicalDirection.toFHIR() : this.anatomicalDirection;
    }
    return inst;
  }
}
export default BreastLymphNodeBodySite;
