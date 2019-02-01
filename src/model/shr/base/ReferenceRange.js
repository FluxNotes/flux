import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.ReferenceRange.
 */
class ReferenceRange {

  /**
   * Get the Range.
   * @returns {Range} The shr.core.Range
   */
  get range() {
    return this._range;
  }

  /**
   * Set the Range.
   * @param {Range} range - The shr.core.Range
   */
  set range(range) {
    this._range = range;
  }

  /**
   * Set the Range and return 'this' for chaining.
   * @param {Range} range - The shr.core.Range
   * @returns {ReferenceRange} this.
   */
  withRange(range) {
    this.range = range; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {ReferenceRange} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the ApplicableSubpopulation.
   * @returns {ApplicableSubpopulation} The shr.base.ApplicableSubpopulation
   */
  get applicableSubpopulation() {
    return this._applicableSubpopulation;
  }

  /**
   * Set the ApplicableSubpopulation.
   * @param {ApplicableSubpopulation} applicableSubpopulation - The shr.base.ApplicableSubpopulation
   */
  set applicableSubpopulation(applicableSubpopulation) {
    this._applicableSubpopulation = applicableSubpopulation;
  }

  /**
   * Set the ApplicableSubpopulation and return 'this' for chaining.
   * @param {ApplicableSubpopulation} applicableSubpopulation - The shr.base.ApplicableSubpopulation
   * @returns {ReferenceRange} this.
   */
  withApplicableSubpopulation(applicableSubpopulation) {
    this.applicableSubpopulation = applicableSubpopulation; return this;
  }

  /**
   * Get the ApplicableAgeRange.
   * @returns {ApplicableAgeRange} The shr.base.ApplicableAgeRange
   */
  get applicableAgeRange() {
    return this._applicableAgeRange;
  }

  /**
   * Set the ApplicableAgeRange.
   * @param {ApplicableAgeRange} applicableAgeRange - The shr.base.ApplicableAgeRange
   */
  set applicableAgeRange(applicableAgeRange) {
    this._applicableAgeRange = applicableAgeRange;
  }

  /**
   * Set the ApplicableAgeRange and return 'this' for chaining.
   * @param {ApplicableAgeRange} applicableAgeRange - The shr.base.ApplicableAgeRange
   * @returns {ReferenceRange} this.
   */
  withApplicableAgeRange(applicableAgeRange) {
    this.applicableAgeRange = applicableAgeRange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ReferenceRange class.
   * The JSON must be valid against the ReferenceRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReferenceRange} An instance of ReferenceRange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ReferenceRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ReferenceRange class to a JSON object.
   * The JSON is expected to be valid against the ReferenceRange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ReferenceRange' } };
    if (this.range != null) {
      inst['Range'] = typeof this.range.toJSON === 'function' ? this.range.toJSON() : this.range;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.applicableSubpopulation != null) {
      inst['ApplicableSubpopulation'] = typeof this.applicableSubpopulation.toJSON === 'function' ? this.applicableSubpopulation.toJSON() : this.applicableSubpopulation;
    }
    if (this.applicableAgeRange != null) {
      inst['ApplicableAgeRange'] = typeof this.applicableAgeRange.toJSON === 'function' ? this.applicableAgeRange.toJSON() : this.applicableAgeRange;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ReferenceRange class.
   * The FHIR must be valid against the ReferenceRange FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ReferenceRange} An instance of ReferenceRange populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ReferenceRange();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Range-extension');
      if (match_1 != null) {
        inst.range = FHIRHelper.createInstanceFromFHIR('shr.core.Range', match_1, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Type-extension');
      if (match_2 != null) {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', match_2, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ApplicableSubpopulation-extension');
      if (match_4 != null) {
        inst.applicableSubpopulation = FHIRHelper.createInstanceFromFHIR('shr.base.ApplicableSubpopulation', match_4, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ApplicableAgeRange-extension');
      if (match_5 != null) {
        inst.applicableAgeRange = FHIRHelper.createInstanceFromFHIR('shr.base.ApplicableAgeRange', match_5, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ReferenceRange;
