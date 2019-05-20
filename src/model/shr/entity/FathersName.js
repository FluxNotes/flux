import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.entity.FathersName.
 */
class FathersName {

  /**
   * Get the value (aliases humanName).
   * @returns {HumanName} The shr.core.HumanName
   */
  get value() {
    return this._humanName;
  }

  /**
   * Set the value (aliases humanName).
   * This field/value is required.
   * @param {HumanName} value - The shr.core.HumanName
   */
  set value(value) {
    this._humanName = value;
  }

  /**
   * Set the value (aliases humanName) and return 'this' for chaining.
   * This field/value is required.
   * @param {HumanName} value - The shr.core.HumanName
   * @returns {FathersName} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the HumanName.
   * @returns {HumanName} The shr.core.HumanName
   */
  get humanName() {
    return this._humanName;
  }

  /**
   * Set the HumanName.
   * This field/value is required.
   * @param {HumanName} humanName - The shr.core.HumanName
   */
  set humanName(humanName) {
    this._humanName = humanName;
  }

  /**
   * Set the HumanName and return 'this' for chaining.
   * This field/value is required.
   * @param {HumanName} humanName - The shr.core.HumanName
   * @returns {FathersName} this.
   */
  withHumanName(humanName) {
    this.humanName = humanName; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FathersName class.
   * The JSON must be valid against the FathersName JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FathersName} An instance of FathersName populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FathersName();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the FathersName class to a JSON object.
   * The JSON is expected to be valid against the FathersName JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/FathersName' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the FathersName class.
   * The FHIR must be valid against the FathersName FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {FathersName} An instance of FathersName populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new FathersName();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.HumanName', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default FathersName;
