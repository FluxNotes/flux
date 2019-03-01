import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.entity.PlaceOfBirth.
 */
class PlaceOfBirth {

  /**
   * Get the value (aliases address).
   * @returns {Address} The shr.core.Address
   */
  get value() {
    return this._address;
  }

  /**
   * Set the value (aliases address).
   * This field/value is required.
   * @param {Address} value - The shr.core.Address
   */
  set value(value) {
    this._address = value;
  }

  /**
   * Set the value (aliases address) and return 'this' for chaining.
   * This field/value is required.
   * @param {Address} value - The shr.core.Address
   * @returns {PlaceOfBirth} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Address.
   * @returns {Address} The shr.core.Address
   */
  get address() {
    return this._address;
  }

  /**
   * Set the Address.
   * This field/value is required.
   * @param {Address} address - The shr.core.Address
   */
  set address(address) {
    this._address = address;
  }

  /**
   * Set the Address and return 'this' for chaining.
   * This field/value is required.
   * @param {Address} address - The shr.core.Address
   * @returns {PlaceOfBirth} this.
   */
  withAddress(address) {
    this.address = address; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PlaceOfBirth class.
   * The JSON must be valid against the PlaceOfBirth JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PlaceOfBirth} An instance of PlaceOfBirth populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PlaceOfBirth();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the PlaceOfBirth class to a JSON object.
   * The JSON is expected to be valid against the PlaceOfBirth JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/PlaceOfBirth' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the PlaceOfBirth class.
   * The FHIR must be valid against the PlaceOfBirth FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {PlaceOfBirth} An instance of PlaceOfBirth populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new PlaceOfBirth();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Address', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default PlaceOfBirth;
