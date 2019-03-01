import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

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
  static fromJSON(json={}) {
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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/research/Enrollment' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Enrollment class.
   * The FHIR must be valid against the Enrollment FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Enrollment} An instance of Enrollment populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Enrollment();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.Group', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default Enrollment;
