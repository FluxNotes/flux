import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.AnatomicalLocation.
 */
class AnatomicalLocation {

  /**
   * Get the choice value; one of: shr.core.AnatomicalLocationPrecoordinated, shr.core.AnatomicalLocationStructured.
   * @returns {(AnatomicalLocationPrecoordinated|AnatomicalLocationStructured)} The choice value; one of: shr.core.AnatomicalLocationPrecoordinated, shr.core.AnatomicalLocationStructured
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.AnatomicalLocationPrecoordinated, shr.core.AnatomicalLocationStructured.
   * @param {(AnatomicalLocationPrecoordinated|AnatomicalLocationStructured)} value - The choice value; one of: shr.core.AnatomicalLocationPrecoordinated, shr.core.AnatomicalLocationStructured
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.AnatomicalLocationPrecoordinated, shr.core.AnatomicalLocationStructured and return 'this' for chaining.
   * @param {(AnatomicalLocationPrecoordinated|AnatomicalLocationStructured)} value - The choice value; one of: shr.core.AnatomicalLocationPrecoordinated, shr.core.AnatomicalLocationStructured
   * @returns {AnatomicalLocation} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AnatomicalLocation class.
   * The JSON must be valid against the AnatomicalLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AnatomicalLocation} An instance of AnatomicalLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AnatomicalLocation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AnatomicalLocation class to a JSON object.
   * The JSON is expected to be valid against the AnatomicalLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/AnatomicalLocation' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AnatomicalLocation class.
   * The FHIR must be valid against the AnatomicalLocation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AnatomicalLocation} An instance of AnatomicalLocation populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AnatomicalLocation();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-AnatomicalLocationPrecoordinated-extension');
      if (match_1 != null) {
        inst.anatomicalLocationPrecoordinated = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationPrecoordinated', match_1, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-AnatomicalLocationStructured-extension');
      if (match_2 != null) {
        inst.anatomicalLocationStructured = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', match_2, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR(null, fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default AnatomicalLocation;
