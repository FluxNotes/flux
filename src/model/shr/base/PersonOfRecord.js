import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.base.PersonOfRecord.
 */
class PersonOfRecord {

  /**
   * Get the value (aliases patient).
   * @returns {Reference} The shr.entity.Patient reference
   */
  get value() {
    return this._patient;
  }

  /**
   * Set the value (aliases patient).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Patient reference
   */
  set value(value) {
    this._patient = value;
  }

  /**
   * Set the value (aliases patient) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Patient reference
   * @returns {PersonOfRecord} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.Patient reference.
   * @returns {Reference} The shr.entity.Patient reference
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the shr.entity.Patient reference.
   * This field/value is required.
   * @param {Reference} patient - The shr.entity.Patient reference
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the shr.entity.Patient reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} patient - The shr.entity.Patient reference
   * @returns {PersonOfRecord} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PersonOfRecord class.
   * The JSON must be valid against the PersonOfRecord JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PersonOfRecord} An instance of PersonOfRecord populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PersonOfRecord();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PersonOfRecord class to a JSON object.
   * The JSON is expected to be valid against the PersonOfRecord JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/base/PersonOfRecord' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PersonOfRecord class to a FHIR object.
   * The FHIR is expected to be valid against the PersonOfRecord FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-base-PersonOfRecord-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default PersonOfRecord;
