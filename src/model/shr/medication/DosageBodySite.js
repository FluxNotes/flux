import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.medication.DosageBodySite.
 */
class DosageBodySite {

  /**
   * Get the value (aliases anatomicalLocationPrecoordinated).
   * @returns {AnatomicalLocationPrecoordinated} The shr.core.AnatomicalLocationPrecoordinated
   */
  get value() {
    return this._anatomicalLocationPrecoordinated;
  }

  /**
   * Set the value (aliases anatomicalLocationPrecoordinated).
   * This field/value is required.
   * @param {AnatomicalLocationPrecoordinated} value - The shr.core.AnatomicalLocationPrecoordinated
   */
  set value(value) {
    this._anatomicalLocationPrecoordinated = value;
  }

  /**
   * Set the value (aliases anatomicalLocationPrecoordinated) and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocationPrecoordinated} value - The shr.core.AnatomicalLocationPrecoordinated
   * @returns {DosageBodySite} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the AnatomicalLocationPrecoordinated.
   * @returns {AnatomicalLocationPrecoordinated} The shr.core.AnatomicalLocationPrecoordinated
   */
  get anatomicalLocationPrecoordinated() {
    return this._anatomicalLocationPrecoordinated;
  }

  /**
   * Set the AnatomicalLocationPrecoordinated.
   * This field/value is required.
   * @param {AnatomicalLocationPrecoordinated} anatomicalLocationPrecoordinated - The shr.core.AnatomicalLocationPrecoordinated
   */
  set anatomicalLocationPrecoordinated(anatomicalLocationPrecoordinated) {
    this._anatomicalLocationPrecoordinated = anatomicalLocationPrecoordinated;
  }

  /**
   * Set the AnatomicalLocationPrecoordinated and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocationPrecoordinated} anatomicalLocationPrecoordinated - The shr.core.AnatomicalLocationPrecoordinated
   * @returns {DosageBodySite} this.
   */
  withAnatomicalLocationPrecoordinated(anatomicalLocationPrecoordinated) {
    this.anatomicalLocationPrecoordinated = anatomicalLocationPrecoordinated; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DosageBodySite class.
   * The JSON must be valid against the DosageBodySite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DosageBodySite} An instance of DosageBodySite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DosageBodySite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DosageBodySite class to a JSON object.
   * The JSON is expected to be valid against the DosageBodySite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/DosageBodySite' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DosageBodySite class.
   * The FHIR must be valid against the DosageBodySite FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DosageBodySite} An instance of DosageBodySite populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new DosageBodySite();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationPrecoordinated', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default DosageBodySite;
