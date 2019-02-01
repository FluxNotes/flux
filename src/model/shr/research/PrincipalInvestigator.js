import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.research.PrincipalInvestigator.
 */
class PrincipalInvestigator {

  /**
   * Get the value (aliases practitioner).
   * @returns {Reference} The shr.entity.Practitioner reference
   */
  get value() {
    return this._practitioner;
  }

  /**
   * Set the value (aliases practitioner).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Practitioner reference
   */
  set value(value) {
    this._practitioner = value;
  }

  /**
   * Set the value (aliases practitioner) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Practitioner reference
   * @returns {PrincipalInvestigator} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.Practitioner reference.
   * @returns {Reference} The shr.entity.Practitioner reference
   */
  get practitioner() {
    return this._practitioner;
  }

  /**
   * Set the shr.entity.Practitioner reference.
   * This field/value is required.
   * @param {Reference} practitioner - The shr.entity.Practitioner reference
   */
  set practitioner(practitioner) {
    this._practitioner = practitioner;
  }

  /**
   * Set the shr.entity.Practitioner reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} practitioner - The shr.entity.Practitioner reference
   * @returns {PrincipalInvestigator} this.
   */
  withPractitioner(practitioner) {
    this.practitioner = practitioner; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PrincipalInvestigator class.
   * The JSON must be valid against the PrincipalInvestigator JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PrincipalInvestigator} An instance of PrincipalInvestigator populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PrincipalInvestigator();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the PrincipalInvestigator class to a JSON object.
   * The JSON is expected to be valid against the PrincipalInvestigator JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/research/PrincipalInvestigator' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the PrincipalInvestigator class.
   * The FHIR must be valid against the PrincipalInvestigator FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {PrincipalInvestigator} An instance of PrincipalInvestigator populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new PrincipalInvestigator();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.Practitioner', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default PrincipalInvestigator;
