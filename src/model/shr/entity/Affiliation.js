import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.entity.Affiliation.
 */
class Affiliation {

  /**
   * Get the value (aliases organization).
   * @returns {Organization} The shr.entity.Organization
   */
  get value() {
    return this._organization;
  }

  /**
   * Set the value (aliases organization).
   * This field/value is required.
   * @param {Organization} value - The shr.entity.Organization
   */
  set value(value) {
    this._organization = value;
  }

  /**
   * Set the value (aliases organization) and return 'this' for chaining.
   * This field/value is required.
   * @param {Organization} value - The shr.entity.Organization
   * @returns {Affiliation} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Organization.
   * @returns {Organization} The shr.entity.Organization
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the Organization.
   * This field/value is required.
   * @param {Organization} organization - The shr.entity.Organization
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Set the Organization and return 'this' for chaining.
   * This field/value is required.
   * @param {Organization} organization - The shr.entity.Organization
   * @returns {Affiliation} this.
   */
  withOrganization(organization) {
    this.organization = organization; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Affiliation class.
   * The JSON must be valid against the Affiliation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Affiliation} An instance of Affiliation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Affiliation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Affiliation class to a JSON object.
   * The JSON is expected to be valid against the Affiliation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Affiliation' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Affiliation class.
   * The FHIR must be valid against the Affiliation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Affiliation} An instance of Affiliation populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Affiliation();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default Affiliation;
