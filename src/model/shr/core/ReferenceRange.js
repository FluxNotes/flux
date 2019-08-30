// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.ReferenceRange.
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
   * @returns {ApplicableSubpopulation} The shr.core.ApplicableSubpopulation
   */
  get applicableSubpopulation() {
    return this._applicableSubpopulation;
  }

  /**
   * Set the ApplicableSubpopulation.
   * @param {ApplicableSubpopulation} applicableSubpopulation - The shr.core.ApplicableSubpopulation
   */
  set applicableSubpopulation(applicableSubpopulation) {
    this._applicableSubpopulation = applicableSubpopulation;
  }

  /**
   * Set the ApplicableSubpopulation and return 'this' for chaining.
   * @param {ApplicableSubpopulation} applicableSubpopulation - The shr.core.ApplicableSubpopulation
   * @returns {ReferenceRange} this.
   */
  withApplicableSubpopulation(applicableSubpopulation) {
    this.applicableSubpopulation = applicableSubpopulation; return this;
  }

  /**
   * Get the ApplicableAgeRange.
   * @returns {ApplicableAgeRange} The shr.core.ApplicableAgeRange
   */
  get applicableAgeRange() {
    return this._applicableAgeRange;
  }

  /**
   * Set the ApplicableAgeRange.
   * @param {ApplicableAgeRange} applicableAgeRange - The shr.core.ApplicableAgeRange
   */
  set applicableAgeRange(applicableAgeRange) {
    this._applicableAgeRange = applicableAgeRange;
  }

  /**
   * Set the ApplicableAgeRange and return 'this' for chaining.
   * @param {ApplicableAgeRange} applicableAgeRange - The shr.core.ApplicableAgeRange
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
    const klass = ClassRegistry.get('shr.core', 'ReferenceRange');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ReferenceRange class to a JSON object.
   * The JSON is expected to be valid against the ReferenceRange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ReferenceRange' } };
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
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ReferenceRange} An instance of ReferenceRange populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ReferenceRange');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Range-extension');
      if (match_3 != null) {
        inst.range = FHIRHelper.createInstanceFromFHIR('shr.core.Range', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension');
      if (match_4 != null) {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_9 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ApplicableSubpopulation-extension');
      if (match_9 != null) {
        inst.applicableSubpopulation = FHIRHelper.createInstanceFromFHIR('shr.core.ApplicableSubpopulation', match_9, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_10 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ApplicableAgeRange-extension');
      if (match_10 != null) {
        inst.applicableAgeRange = FHIRHelper.createInstanceFromFHIR('shr.core.ApplicableAgeRange', match_10, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ReferenceRange;
