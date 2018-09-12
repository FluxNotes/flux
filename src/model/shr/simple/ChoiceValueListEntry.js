import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.simple.ChoiceValueListEntry.
 */
class ChoiceValueListEntry {

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
   * @returns {ChoiceValueListEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the choice value; one of: string, shr.simple.StringValue array.
   * @returns {Array<(string|StringValue)>} The choice value; one of: string, shr.simple.StringValue array
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: string, shr.simple.StringValue array.
   * @param {Array<(string|StringValue)>} value - The choice value; one of: string, shr.simple.StringValue array
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: string, shr.simple.StringValue array and return 'this' for chaining.
   * @param {Array<(string|StringValue)>} value - The choice value; one of: string, shr.simple.StringValue array
   * @returns {ChoiceValueListEntry} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ChoiceValueListEntry class.
   * The JSON must be valid against the ChoiceValueListEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ChoiceValueListEntry} An instance of ChoiceValueListEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ChoiceValueListEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ChoiceValueListEntry class to a JSON object.
   * The JSON is expected to be valid against the ChoiceValueListEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/ChoiceValueListEntry' };
    if (this.value != null) {
      inst['Value'] = this.value.map(f => typeof f.toJSON === 'function' ? f.toJSON() : f);
    }
    return inst;
  }
  /**
   * Serializes an instance of the ChoiceValueListEntry class to a FHIR object.
   * The FHIR is expected to be valid against the ChoiceValueListEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default ChoiceValueListEntry;
