// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.EncounterDiagnosis.
 */
class EncounterDiagnosis {

  /**
   * Get the DiagnosisCode.
   * @returns {DiagnosisCode} The shr.core.DiagnosisCode
   */
  get diagnosisCode() {
    return this._diagnosisCode;
  }

  /**
   * Set the DiagnosisCode.
   * @param {DiagnosisCode} diagnosisCode - The shr.core.DiagnosisCode
   */
  set diagnosisCode(diagnosisCode) {
    this._diagnosisCode = diagnosisCode;
  }

  /**
   * Set the DiagnosisCode and return 'this' for chaining.
   * @param {DiagnosisCode} diagnosisCode - The shr.core.DiagnosisCode
   * @returns {EncounterDiagnosis} this.
   */
  withDiagnosisCode(diagnosisCode) {
    this.diagnosisCode = diagnosisCode; return this;
  }

  /**
   * Get the shr.core.Condition reference.
   * @returns {Reference} The shr.core.Condition reference
   */
  get condition() {
    return this._condition;
  }

  /**
   * Set the shr.core.Condition reference.
   * This field/value is required.
   * @param {Reference} condition - The shr.core.Condition reference
   */
  set condition(condition) {
    this._condition = condition;
  }

  /**
   * Set the shr.core.Condition reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} condition - The shr.core.Condition reference
   * @returns {EncounterDiagnosis} this.
   */
  withCondition(condition) {
    this.condition = condition; return this;
  }

  /**
   * Get the PriorityRank.
   * @returns {PriorityRank} The shr.core.PriorityRank
   */
  get priorityRank() {
    return this._priorityRank;
  }

  /**
   * Set the PriorityRank.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   */
  set priorityRank(priorityRank) {
    this._priorityRank = priorityRank;
  }

  /**
   * Set the PriorityRank and return 'this' for chaining.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   * @returns {EncounterDiagnosis} this.
   */
  withPriorityRank(priorityRank) {
    this.priorityRank = priorityRank; return this;
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
   * @returns {EncounterDiagnosis} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EncounterDiagnosis class.
   * The JSON must be valid against the EncounterDiagnosis JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EncounterDiagnosis} An instance of EncounterDiagnosis populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'EncounterDiagnosis');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EncounterDiagnosis class to a JSON object.
   * The JSON is expected to be valid against the EncounterDiagnosis JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/EncounterDiagnosis' } };
    if (this.diagnosisCode != null) {
      inst['DiagnosisCode'] = typeof this.diagnosisCode.toJSON === 'function' ? this.diagnosisCode.toJSON() : this.diagnosisCode;
    }
    if (this.condition != null) {
      inst['Condition'] = typeof this.condition.toJSON === 'function' ? this.condition.toJSON() : this.condition;
    }
    if (this.priorityRank != null) {
      inst['PriorityRank'] = typeof this.priorityRank.toJSON === 'function' ? this.priorityRank.toJSON() : this.priorityRank;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EncounterDiagnosis class.
   * The FHIR must be valid against the EncounterDiagnosis FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EncounterDiagnosis} An instance of EncounterDiagnosis populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'EncounterDiagnosis');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DiagnosisCode-extension');
      if (match_3 != null) {
        inst.diagnosisCode = FHIRHelper.createInstanceFromFHIR('shr.core.DiagnosisCode', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Condition-extension');
      if (match_4 != null) {
        inst.condition = FHIRHelper.createInstanceFromFHIR('shr.core.Condition', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PriorityRank-extension');
      if (match_5 != null) {
        inst.priorityRank = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityRank', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension');
      if (match_6 != null) {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default EncounterDiagnosis;
