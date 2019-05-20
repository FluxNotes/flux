import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.Origin.
 */
class Origin {

  /**
   * Get the value (aliases simpleQuantity).
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get value() {
    return this._simpleQuantity;
  }

  /**
   * Set the value (aliases simpleQuantity).
   * This field/value is required.
   * @param {SimpleQuantity} value - The shr.core.SimpleQuantity
   */
  set value(value) {
    this._simpleQuantity = value;
  }

  /**
   * Set the value (aliases simpleQuantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleQuantity} value - The shr.core.SimpleQuantity
   * @returns {Origin} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the SimpleQuantity.
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get simpleQuantity() {
    return this._simpleQuantity;
  }

  /**
   * Set the SimpleQuantity.
   * This field/value is required.
   * @param {SimpleQuantity} simpleQuantity - The shr.core.SimpleQuantity
   */
  set simpleQuantity(simpleQuantity) {
    this._simpleQuantity = simpleQuantity;
  }

  /**
   * Set the SimpleQuantity and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleQuantity} simpleQuantity - The shr.core.SimpleQuantity
   * @returns {Origin} this.
   */
  withSimpleQuantity(simpleQuantity) {
    this.simpleQuantity = simpleQuantity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Origin class.
   * The JSON must be valid against the Origin JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Origin} An instance of Origin populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Origin();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Origin class to a JSON object.
   * The JSON is expected to be valid against the Origin JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Origin' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Origin class.
   * The FHIR must be valid against the Origin FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Origin} An instance of Origin populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Origin();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.SimpleQuantity', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default Origin;
