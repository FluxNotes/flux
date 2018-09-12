import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.research.Enrollment.
 */
class Enrollment {

  /**
   * Get the value (aliases group).
   * @returns {Reference} The shr.entity.Group reference
   */
  get value() {
    return this._group;
  }

  /**
   * Set the value (aliases group).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Group reference
   */
  set value(value) {
    this._group = value;
  }

  /**
   * Set the value (aliases group) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Group reference
   * @returns {Enrollment} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.Group reference.
   * @returns {Reference} The shr.entity.Group reference
   */
  get group() {
    return this._group;
  }

  /**
   * Set the shr.entity.Group reference.
   * This field/value is required.
   * @param {Reference} group - The shr.entity.Group reference
   */
  set group(group) {
    this._group = group;
  }

  /**
   * Set the shr.entity.Group reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} group - The shr.entity.Group reference
   * @returns {Enrollment} this.
   */
  withGroup(group) {
    this.group = group; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Enrollment class.
   * The JSON must be valid against the Enrollment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Enrollment} An instance of Enrollment populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Enrollment();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Enrollment class to a JSON object.
   * The JSON is expected to be valid against the Enrollment JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/research/Enrollment' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Enrollment class to a FHIR object.
   * The FHIR is expected to be valid against the Enrollment FHIR profile, but no validation checks are performed.
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
export default Enrollment;
