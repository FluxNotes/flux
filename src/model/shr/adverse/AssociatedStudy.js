import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.adverse.AssociatedStudy.
 */
class AssociatedStudy {

  /**
   * Get the value (aliases study).
   * @returns {Reference} The shr.research.Study reference
   */
  get value() {
    return this._study;
  }

  /**
   * Set the value (aliases study).
   * This field/value is required.
   * @param {Reference} value - The shr.research.Study reference
   */
  set value(value) {
    this._study = value;
  }

  /**
   * Set the value (aliases study) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.research.Study reference
   * @returns {AssociatedStudy} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.research.Study reference.
   * @returns {Reference} The shr.research.Study reference
   */
  get study() {
    return this._study;
  }

  /**
   * Set the shr.research.Study reference.
   * This field/value is required.
   * @param {Reference} study - The shr.research.Study reference
   */
  set study(study) {
    this._study = study;
  }

  /**
   * Set the shr.research.Study reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} study - The shr.research.Study reference
   * @returns {AssociatedStudy} this.
   */
  withStudy(study) {
    this.study = study; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AssociatedStudy class.
   * The JSON must be valid against the AssociatedStudy JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AssociatedStudy} An instance of AssociatedStudy populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AssociatedStudy();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AssociatedStudy class to a JSON object.
   * The JSON is expected to be valid against the AssociatedStudy JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/adverse/AssociatedStudy' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AssociatedStudy class.
   * The FHIR must be valid against the AssociatedStudy FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AssociatedStudy} An instance of AssociatedStudy populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AssociatedStudy();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.research.Study', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default AssociatedStudy;
