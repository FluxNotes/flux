import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.fhir.PractitionerEntry.
 */
class PractitionerEntry {

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
   * @returns {PractitionerEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the DoubleNestedBooleanValue.
   * @returns {DoubleNestedBooleanValue} The shr.simple.DoubleNestedBooleanValue
   */
  get doubleNestedBooleanValue() {
    return this._doubleNestedBooleanValue;
  }

  /**
   * Set the DoubleNestedBooleanValue.
   * This field/value is required.
   * @param {DoubleNestedBooleanValue} doubleNestedBooleanValue - The shr.simple.DoubleNestedBooleanValue
   */
  set doubleNestedBooleanValue(doubleNestedBooleanValue) {
    this._doubleNestedBooleanValue = doubleNestedBooleanValue;
  }

  /**
   * Set the DoubleNestedBooleanValue and return 'this' for chaining.
   * This field/value is required.
   * @param {DoubleNestedBooleanValue} doubleNestedBooleanValue - The shr.simple.DoubleNestedBooleanValue
   * @returns {PractitionerEntry} this.
   */
  withDoubleNestedBooleanValue(doubleNestedBooleanValue) {
    this.doubleNestedBooleanValue = doubleNestedBooleanValue; return this;
  }

  /**
   * Get the NestedStringValue.
   * @returns {NestedStringValue} The shr.simple.NestedStringValue
   */
  get nestedStringValue() {
    return this._nestedStringValue;
  }

  /**
   * Set the NestedStringValue.
   * This field/value is required.
   * @param {NestedStringValue} nestedStringValue - The shr.simple.NestedStringValue
   */
  set nestedStringValue(nestedStringValue) {
    this._nestedStringValue = nestedStringValue;
  }

  /**
   * Set the NestedStringValue and return 'this' for chaining.
   * This field/value is required.
   * @param {NestedStringValue} nestedStringValue - The shr.simple.NestedStringValue
   * @returns {PractitionerEntry} this.
   */
  withNestedStringValue(nestedStringValue) {
    this.nestedStringValue = nestedStringValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PractitionerEntry class.
   * The JSON must be valid against the PractitionerEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PractitionerEntry} An instance of PractitionerEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PractitionerEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PractitionerEntry class to a JSON object.
   * The JSON is expected to be valid against the PractitionerEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/fhir/PractitionerEntry' };
    if (this.doubleNestedBooleanValue != null) {
      inst['DoubleNestedBooleanValue'] = typeof this.doubleNestedBooleanValue.toJSON === 'function' ? this.doubleNestedBooleanValue.toJSON() : this.doubleNestedBooleanValue;
    }
    if (this.nestedStringValue != null) {
      inst['NestedStringValue'] = typeof this.nestedStringValue.toJSON === 'function' ? this.nestedStringValue.toJSON() : this.nestedStringValue;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PractitionerEntry class to a FHIR object.
   * The FHIR is expected to be valid against the PractitionerEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Practitioner';
    if (this.doubleNestedBooleanValue != null && this.doubleNestedBooleanValue.nestedBooleanValue != null && this.doubleNestedBooleanValue.nestedBooleanValue.booleanValue != null) {
      inst['active'] = typeof this.doubleNestedBooleanValue.nestedBooleanValue.booleanValue.toFHIR === 'function' ? this.doubleNestedBooleanValue.nestedBooleanValue.booleanValue.toFHIR() : this.doubleNestedBooleanValue.nestedBooleanValue.booleanValue;
    }
    if (this.nestedStringValue != null) {
      if (inst['name'] === undefined) {
        inst['name'] = {};
      }
      inst['name']['text'] = typeof this.nestedStringValue.toFHIR === 'function' ? this.nestedStringValue.toFHIR() : this.nestedStringValue;
    }
    return inst;
  }
}
export default PractitionerEntry;
