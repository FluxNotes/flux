import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.entity.CollectionSite.
 */
class CollectionSite {

  /**
   * Get the value (aliases anatomicalLocation).
   * @returns {AnatomicalLocation} The shr.core.AnatomicalLocation
   */
  get value() {
    return this._anatomicalLocation;
  }

  /**
   * Set the value (aliases anatomicalLocation).
   * This field/value is required.
   * @param {AnatomicalLocation} value - The shr.core.AnatomicalLocation
   */
  set value(value) {
    this._anatomicalLocation = value;
  }

  /**
   * Set the value (aliases anatomicalLocation) and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocation} value - The shr.core.AnatomicalLocation
   * @returns {CollectionSite} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The shr.core.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * This field/value is required.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * This field/value is required.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   * @returns {CollectionSite} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CollectionSite class.
   * The JSON must be valid against the CollectionSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CollectionSite} An instance of CollectionSite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CollectionSite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CollectionSite class to a JSON object.
   * The JSON is expected to be valid against the CollectionSite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/CollectionSite' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CollectionSite class.
   * The FHIR must be valid against the CollectionSite FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CollectionSite} An instance of CollectionSite populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new CollectionSite();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-AnatomicalLocation-extension');
      if (match_1 != null) {
        inst.anatomicalLocation = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocation', match_1, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocation', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default CollectionSite;
