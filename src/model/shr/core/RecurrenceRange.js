import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.RecurrenceRange.
 */
class RecurrenceRange {

  /**
   * Get the choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats.
   * @returns {(TimePeriod|NumberOfRepeats)} The choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats.
   * This field/value is required.
   * @param {(TimePeriod|NumberOfRepeats)} value - The choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats and return 'this' for chaining.
   * This field/value is required.
   * @param {(TimePeriod|NumberOfRepeats)} value - The choice value; one of: shr.core.TimePeriod, shr.core.NumberOfRepeats
   * @returns {RecurrenceRange} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RecurrenceRange class.
   * The JSON must be valid against the RecurrenceRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RecurrenceRange} An instance of RecurrenceRange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RecurrenceRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RecurrenceRange class to a JSON object.
   * The JSON is expected to be valid against the RecurrenceRange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/RecurrenceRange' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RecurrenceRange class.
   * The FHIR must be valid against the RecurrenceRange FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RecurrenceRange} An instance of RecurrenceRange populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new RecurrenceRange();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-TimePeriod-extension');
      if (match_1 != null) {
        inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', match_1, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-NumberOfRepeats-extension');
      if (match_2 != null) {
        inst.numberOfRepeats = FHIRHelper.createInstanceFromFHIR('shr.core.NumberOfRepeats', match_2, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR(null, fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default RecurrenceRange;
