import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.Issuer.
 */
class Issuer {

  /**
   * Get the value (aliases organization).
   * @returns {Reference} The shr.entity.Organization reference
   */
  get value() {
    return this._organization;
  }

  /**
   * Set the value (aliases organization).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Organization reference
   */
  set value(value) {
    this._organization = value;
  }

  /**
   * Set the value (aliases organization) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Organization reference
   * @returns {Issuer} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.Organization reference.
   * @returns {Reference} The shr.entity.Organization reference
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the shr.entity.Organization reference.
   * This field/value is required.
   * @param {Reference} organization - The shr.entity.Organization reference
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Set the shr.entity.Organization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} organization - The shr.entity.Organization reference
   * @returns {Issuer} this.
   */
  withOrganization(organization) {
    this.organization = organization; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Issuer class.
   * The JSON must be valid against the Issuer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Issuer} An instance of Issuer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Issuer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Issuer class to a JSON object.
   * The JSON is expected to be valid against the Issuer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Issuer' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Issuer class.
   * The FHIR must be valid against the Issuer FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Issuer} An instance of Issuer populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Issuer();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default Issuer;
