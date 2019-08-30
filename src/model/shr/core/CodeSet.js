// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.CodeSet.
 */
class CodeSet {

  /**
   * Get the CodeSystem.
   * @returns {CodeSystem} The shr.core.CodeSystem
   */
  get codeSystem() {
    return this._codeSystem;
  }

  /**
   * Set the CodeSystem.
   * @param {CodeSystem} codeSystem - The shr.core.CodeSystem
   */
  set codeSystem(codeSystem) {
    this._codeSystem = codeSystem;
  }

  /**
   * Set the CodeSystem and return 'this' for chaining.
   * @param {CodeSystem} codeSystem - The shr.core.CodeSystem
   * @returns {CodeSet} this.
   */
  withCodeSystem(codeSystem) {
    this.codeSystem = codeSystem; return this;
  }

  /**
   * Get the CodeSystemVersion.
   * @returns {CodeSystemVersion} The shr.core.CodeSystemVersion
   */
  get codeSystemVersion() {
    return this._codeSystemVersion;
  }

  /**
   * Set the CodeSystemVersion.
   * @param {CodeSystemVersion} codeSystemVersion - The shr.core.CodeSystemVersion
   */
  set codeSystemVersion(codeSystemVersion) {
    this._codeSystemVersion = codeSystemVersion;
  }

  /**
   * Set the CodeSystemVersion and return 'this' for chaining.
   * @param {CodeSystemVersion} codeSystemVersion - The shr.core.CodeSystemVersion
   * @returns {CodeSet} this.
   */
  withCodeSystemVersion(codeSystemVersion) {
    this.codeSystemVersion = codeSystemVersion; return this;
  }

  /**
   * Get the CodeSetConcept array.
   * @returns {Array<CodeSetConcept>} The shr.core.CodeSetConcept array
   */
  get codeSetConcept() {
    return this._codeSetConcept;
  }

  /**
   * Set the CodeSetConcept array.
   * @param {Array<CodeSetConcept>} codeSetConcept - The shr.core.CodeSetConcept array
   */
  set codeSetConcept(codeSetConcept) {
    this._codeSetConcept = codeSetConcept;
  }

  /**
   * Set the CodeSetConcept array and return 'this' for chaining.
   * @param {Array<CodeSetConcept>} codeSetConcept - The shr.core.CodeSetConcept array
   * @returns {CodeSet} this.
   */
  withCodeSetConcept(codeSetConcept) {
    this.codeSetConcept = codeSetConcept; return this;
  }

  /**
   * Get the CodeSetFilter array.
   * @returns {Array<CodeSetFilter>} The shr.core.CodeSetFilter array
   */
  get codeSetFilter() {
    return this._codeSetFilter;
  }

  /**
   * Set the CodeSetFilter array.
   * @param {Array<CodeSetFilter>} codeSetFilter - The shr.core.CodeSetFilter array
   */
  set codeSetFilter(codeSetFilter) {
    this._codeSetFilter = codeSetFilter;
  }

  /**
   * Set the CodeSetFilter array and return 'this' for chaining.
   * @param {Array<CodeSetFilter>} codeSetFilter - The shr.core.CodeSetFilter array
   * @returns {CodeSet} this.
   */
  withCodeSetFilter(codeSetFilter) {
    this.codeSetFilter = codeSetFilter; return this;
  }

  /**
   * Get the ValueSetUri array.
   * @returns {Array<ValueSetUri>} The shr.core.ValueSetUri array
   */
  get valueSetUri() {
    return this._valueSetUri;
  }

  /**
   * Set the ValueSetUri array.
   * @param {Array<ValueSetUri>} valueSetUri - The shr.core.ValueSetUri array
   */
  set valueSetUri(valueSetUri) {
    this._valueSetUri = valueSetUri;
  }

  /**
   * Set the ValueSetUri array and return 'this' for chaining.
   * @param {Array<ValueSetUri>} valueSetUri - The shr.core.ValueSetUri array
   * @returns {CodeSet} this.
   */
  withValueSetUri(valueSetUri) {
    this.valueSetUri = valueSetUri; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodeSet class.
   * The JSON must be valid against the CodeSet JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeSet} An instance of CodeSet populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'CodeSet');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CodeSet class to a JSON object.
   * The JSON is expected to be valid against the CodeSet JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/CodeSet' } };
    if (this.codeSystem != null) {
      inst['CodeSystem'] = typeof this.codeSystem.toJSON === 'function' ? this.codeSystem.toJSON() : this.codeSystem;
    }
    if (this.codeSystemVersion != null) {
      inst['CodeSystemVersion'] = typeof this.codeSystemVersion.toJSON === 'function' ? this.codeSystemVersion.toJSON() : this.codeSystemVersion;
    }
    if (this.codeSetConcept != null) {
      inst['CodeSetConcept'] = this.codeSetConcept.map(f => f.toJSON());
    }
    if (this.codeSetFilter != null) {
      inst['CodeSetFilter'] = this.codeSetFilter.map(f => f.toJSON());
    }
    if (this.valueSetUri != null) {
      inst['ValueSetUri'] = this.valueSetUri.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CodeSet class.
   * The FHIR must be valid against the CodeSet FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CodeSet} An instance of CodeSet populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'CodeSet');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CodeSystem-extension');
      if (match_3 != null) {
        inst.codeSystem = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystem', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CodeSystemVersion-extension');
      if (match_4 != null) {
        inst.codeSystemVersion = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystemVersion', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CodeSetConcept-extension');
      if (match_5 != null) {
        inst.codeSetConcept = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSetConcept', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CodeSetFilter-extension');
      if (match_6 != null) {
        inst.codeSetFilter = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSetFilter', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_7 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ValueSetUri-extension');
      if (match_7 != null) {
        inst.valueSetUri = FHIRHelper.createInstanceFromFHIR('shr.core.ValueSetUri', match_7, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default CodeSet;
