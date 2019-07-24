// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.ContentLogicalDefinition.
 */
class ContentLogicalDefinition {

  /**
   * Get the LockedDate.
   * @returns {LockedDate} The shr.core.LockedDate
   */
  get lockedDate() {
    return this._lockedDate;
  }

  /**
   * Set the LockedDate.
   * @param {LockedDate} lockedDate - The shr.core.LockedDate
   */
  set lockedDate(lockedDate) {
    this._lockedDate = lockedDate;
  }

  /**
   * Set the LockedDate and return 'this' for chaining.
   * @param {LockedDate} lockedDate - The shr.core.LockedDate
   * @returns {ContentLogicalDefinition} this.
   */
  withLockedDate(lockedDate) {
    this.lockedDate = lockedDate; return this;
  }

  /**
   * Get the IncludeInactiveCodes.
   * @returns {IncludeInactiveCodes} The shr.core.IncludeInactiveCodes
   */
  get includeInactiveCodes() {
    return this._includeInactiveCodes;
  }

  /**
   * Set the IncludeInactiveCodes.
   * @param {IncludeInactiveCodes} includeInactiveCodes - The shr.core.IncludeInactiveCodes
   */
  set includeInactiveCodes(includeInactiveCodes) {
    this._includeInactiveCodes = includeInactiveCodes;
  }

  /**
   * Set the IncludeInactiveCodes and return 'this' for chaining.
   * @param {IncludeInactiveCodes} includeInactiveCodes - The shr.core.IncludeInactiveCodes
   * @returns {ContentLogicalDefinition} this.
   */
  withIncludeInactiveCodes(includeInactiveCodes) {
    this.includeInactiveCodes = includeInactiveCodes; return this;
  }

  /**
   * Get the IncludeCodes array.
   * @returns {Array<IncludeCodes>} The shr.core.IncludeCodes array
   */
  get includeCodes() {
    return this._includeCodes;
  }

  /**
   * Set the IncludeCodes array.
   * This field/value is required.
   * @param {Array<IncludeCodes>} includeCodes - The shr.core.IncludeCodes array
   */
  set includeCodes(includeCodes) {
    this._includeCodes = includeCodes;
  }

  /**
   * Set the IncludeCodes array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<IncludeCodes>} includeCodes - The shr.core.IncludeCodes array
   * @returns {ContentLogicalDefinition} this.
   */
  withIncludeCodes(includeCodes) {
    this.includeCodes = includeCodes; return this;
  }

  /**
   * Get the ExcludeCodes array.
   * @returns {Array<ExcludeCodes>} The shr.core.ExcludeCodes array
   */
  get excludeCodes() {
    return this._excludeCodes;
  }

  /**
   * Set the ExcludeCodes array.
   * @param {Array<ExcludeCodes>} excludeCodes - The shr.core.ExcludeCodes array
   */
  set excludeCodes(excludeCodes) {
    this._excludeCodes = excludeCodes;
  }

  /**
   * Set the ExcludeCodes array and return 'this' for chaining.
   * @param {Array<ExcludeCodes>} excludeCodes - The shr.core.ExcludeCodes array
   * @returns {ContentLogicalDefinition} this.
   */
  withExcludeCodes(excludeCodes) {
    this.excludeCodes = excludeCodes; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ContentLogicalDefinition class.
   * The JSON must be valid against the ContentLogicalDefinition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ContentLogicalDefinition} An instance of ContentLogicalDefinition populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ContentLogicalDefinition');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ContentLogicalDefinition class to a JSON object.
   * The JSON is expected to be valid against the ContentLogicalDefinition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ContentLogicalDefinition' } };
    if (this.lockedDate != null) {
      inst['LockedDate'] = typeof this.lockedDate.toJSON === 'function' ? this.lockedDate.toJSON() : this.lockedDate;
    }
    if (this.includeInactiveCodes != null) {
      inst['IncludeInactiveCodes'] = typeof this.includeInactiveCodes.toJSON === 'function' ? this.includeInactiveCodes.toJSON() : this.includeInactiveCodes;
    }
    if (this.includeCodes != null) {
      inst['IncludeCodes'] = this.includeCodes.map(f => f.toJSON());
    }
    if (this.excludeCodes != null) {
      inst['ExcludeCodes'] = this.excludeCodes.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ContentLogicalDefinition class.
   * The FHIR must be valid against the ContentLogicalDefinition FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ContentLogicalDefinition} An instance of ContentLogicalDefinition populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ContentLogicalDefinition');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LockedDate-extension');
      if (match_3 != null) {
        inst.lockedDate = FHIRHelper.createInstanceFromFHIR('shr.core.LockedDate', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-IncludeInactiveCodes-extension');
      if (match_4 != null) {
        inst.includeInactiveCodes = FHIRHelper.createInstanceFromFHIR('shr.core.IncludeInactiveCodes', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-IncludeCodes-extension');
      if (match_5 != null) {
        inst.includeCodes = FHIRHelper.createInstanceFromFHIR('shr.core.IncludeCodes', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExcludeCodes-extension');
      if (match_6 != null) {
        inst.excludeCodes = FHIRHelper.createInstanceFromFHIR('shr.core.ExcludeCodes', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ContentLogicalDefinition;
