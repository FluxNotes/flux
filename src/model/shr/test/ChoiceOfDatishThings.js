import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.ChoiceOfDatishThings.
 */
class ChoiceOfDatishThings {

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
   * @returns {ChoiceOfDatishThings} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the choice value; one of: date, dateTime, shr.test.StringishDateTime.
   * @returns {(date|dateTime|StringishDateTime)} The choice value; one of: date, dateTime, shr.test.StringishDateTime
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: date, dateTime, shr.test.StringishDateTime.
   * This field/value is required.
   * @param {(date|dateTime|StringishDateTime)} value - The choice value; one of: date, dateTime, shr.test.StringishDateTime
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: date, dateTime, shr.test.StringishDateTime and return 'this' for chaining.
   * This field/value is required.
   * @param {(date|dateTime|StringishDateTime)} value - The choice value; one of: date, dateTime, shr.test.StringishDateTime
   * @returns {ChoiceOfDatishThings} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ChoiceOfDatishThings class.
   * The JSON must be valid against the ChoiceOfDatishThings JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ChoiceOfDatishThings} An instance of ChoiceOfDatishThings populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ChoiceOfDatishThings();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ChoiceOfDatishThings class to a JSON object.
   * The JSON is expected to be valid against the ChoiceOfDatishThings JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/ChoiceOfDatishThings' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ChoiceOfDatishThings class to a FHIR object.
   * The FHIR is expected to be valid against the ChoiceOfDatishThings FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-test-ChoiceOfDatishThings-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default ChoiceOfDatishThings;
