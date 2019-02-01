import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.DistanceFromLandmark.
 */
class DistanceFromLandmark {

  /**
   * Get the value (aliases distance).
   * @returns {Distance} The shr.core.Distance
   */
  get value() {
    return this._distance;
  }

  /**
   * Set the value (aliases distance).
   * This field/value is required.
   * @param {Distance} value - The shr.core.Distance
   */
  set value(value) {
    this._distance = value;
  }

  /**
   * Set the value (aliases distance) and return 'this' for chaining.
   * This field/value is required.
   * @param {Distance} value - The shr.core.Distance
   * @returns {DistanceFromLandmark} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Distance.
   * @returns {Distance} The shr.core.Distance
   */
  get distance() {
    return this._distance;
  }

  /**
   * Set the Distance.
   * This field/value is required.
   * @param {Distance} distance - The shr.core.Distance
   */
  set distance(distance) {
    this._distance = distance;
  }

  /**
   * Set the Distance and return 'this' for chaining.
   * This field/value is required.
   * @param {Distance} distance - The shr.core.Distance
   * @returns {DistanceFromLandmark} this.
   */
  withDistance(distance) {
    this.distance = distance; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DistanceFromLandmark class.
   * The JSON must be valid against the DistanceFromLandmark JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DistanceFromLandmark} An instance of DistanceFromLandmark populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DistanceFromLandmark();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DistanceFromLandmark class to a JSON object.
   * The JSON is expected to be valid against the DistanceFromLandmark JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/DistanceFromLandmark' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DistanceFromLandmark class.
   * The FHIR must be valid against the DistanceFromLandmark FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DistanceFromLandmark} An instance of DistanceFromLandmark populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new DistanceFromLandmark();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Distance', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default DistanceFromLandmark;
