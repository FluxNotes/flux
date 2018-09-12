import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.fhir.PatientDirectMapEntry.
 */
class PatientDirectMapEntry {

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
   * @returns {PatientDirectMapEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the BooleanValue.
   * @returns {BooleanValue} The shr.simple.BooleanValue
   */
  get booleanValue() {
    return this._booleanValue;
  }

  /**
   * Set the BooleanValue.
   * @param {BooleanValue} booleanValue - The shr.simple.BooleanValue
   */
  set booleanValue(booleanValue) {
    this._booleanValue = booleanValue;
  }

  /**
   * Set the BooleanValue and return 'this' for chaining.
   * @param {BooleanValue} booleanValue - The shr.simple.BooleanValue
   * @returns {PatientDirectMapEntry} this.
   */
  withBooleanValue(booleanValue) {
    this.booleanValue = booleanValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PatientDirectMapEntry class.
   * The JSON must be valid against the PatientDirectMapEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PatientDirectMapEntry} An instance of PatientDirectMapEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PatientDirectMapEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PatientDirectMapEntry class to a JSON object.
   * The JSON is expected to be valid against the PatientDirectMapEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/fhir/PatientDirectMapEntry' };
    if (this.booleanValue != null) {
      inst['BooleanValue'] = typeof this.booleanValue.toJSON === 'function' ? this.booleanValue.toJSON() : this.booleanValue;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PatientDirectMapEntry class to a FHIR object.
   * The FHIR is expected to be valid against the PatientDirectMapEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Patient';
    if (this.booleanValue != null) {
      inst['active'] = typeof this.booleanValue.toFHIR === 'function' ? this.booleanValue.toFHIR() : this.booleanValue;
    }
    return inst;
  }
}
export default PatientDirectMapEntry;
