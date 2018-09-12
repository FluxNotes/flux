import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.ChoiceValueEntry.
 */
class ChoiceValueEntry {

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
   * @returns {ChoiceValueEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the choice value; one of: string, decimal.
   * @returns {(string|decimal)} The choice value; one of: string, decimal
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: string, decimal.
   * This field/value is required.
   * @param {(string|decimal)} value - The choice value; one of: string, decimal
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: string, decimal and return 'this' for chaining.
   * This field/value is required.
   * @param {(string|decimal)} value - The choice value; one of: string, decimal
   * @returns {ChoiceValueEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ChoiceValueEntry class.
   * The JSON must be valid against the ChoiceValueEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ChoiceValueEntry} An instance of ChoiceValueEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ChoiceValueEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ChoiceValueEntry class to a JSON object.
   * The JSON is expected to be valid against the ChoiceValueEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/ChoiceValueEntry' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ChoiceValueEntry class to a FHIR object.
   * The FHIR is expected to be valid against the ChoiceValueEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default ChoiceValueEntry;
