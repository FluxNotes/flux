import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.entity.SourceSpecimen.
 */
class SourceSpecimen {

  /**
   * Get the value (aliases specimen).
   * @returns {Reference} The shr.entity.Specimen reference
   */
  get value() {
    return this._specimen;
  }

  /**
   * Set the value (aliases specimen).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Specimen reference
   */
  set value(value) {
    this._specimen = value;
  }

  /**
   * Set the value (aliases specimen) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Specimen reference
   * @returns {SourceSpecimen} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.Specimen reference.
   * @returns {Reference} The shr.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the shr.entity.Specimen reference.
   * This field/value is required.
   * @param {Reference} specimen - The shr.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the shr.entity.Specimen reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} specimen - The shr.entity.Specimen reference
   * @returns {SourceSpecimen} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SourceSpecimen class.
   * The JSON must be valid against the SourceSpecimen JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SourceSpecimen} An instance of SourceSpecimen populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SourceSpecimen();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SourceSpecimen class to a JSON object.
   * The JSON is expected to be valid against the SourceSpecimen JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/SourceSpecimen' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SourceSpecimen class.
   * The FHIR must be valid against the SourceSpecimen FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SourceSpecimen} An instance of SourceSpecimen populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new SourceSpecimen();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.Specimen', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default SourceSpecimen;
