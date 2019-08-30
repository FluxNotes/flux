// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.fhx.FamilyMemberCondition.
 */
class FamilyMemberCondition {

  /**
   * Get the Onset.
   * @returns {Onset} The shr.core.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Set the Onset.
   * @param {Onset} onset - The shr.core.Onset
   */
  set onset(onset) {
    this._onset = onset;
  }

  /**
   * Set the Onset and return 'this' for chaining.
   * @param {Onset} onset - The shr.core.Onset
   * @returns {FamilyMemberCondition} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the ConditionOutcome.
   * @returns {ConditionOutcome} The shr.fhx.ConditionOutcome
   */
  get conditionOutcome() {
    return this._conditionOutcome;
  }

  /**
   * Set the ConditionOutcome.
   * @param {ConditionOutcome} conditionOutcome - The shr.fhx.ConditionOutcome
   */
  set conditionOutcome(conditionOutcome) {
    this._conditionOutcome = conditionOutcome;
  }

  /**
   * Set the ConditionOutcome and return 'this' for chaining.
   * @param {ConditionOutcome} conditionOutcome - The shr.fhx.ConditionOutcome
   * @returns {FamilyMemberCondition} this.
   */
  withConditionOutcome(conditionOutcome) {
    this.conditionOutcome = conditionOutcome; return this;
  }

  /**
   * Get the Code.
   * @returns {Code} The shr.core.Code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the Code.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the Code and return 'this' for chaining.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   * @returns {FamilyMemberCondition} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FamilyMemberCondition class.
   * The JSON must be valid against the FamilyMemberCondition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FamilyMemberCondition} An instance of FamilyMemberCondition populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.fhx', 'FamilyMemberCondition');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the FamilyMemberCondition class to a JSON object.
   * The JSON is expected to be valid against the FamilyMemberCondition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/fhx/FamilyMemberCondition' } };
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.conditionOutcome != null) {
      inst['ConditionOutcome'] = typeof this.conditionOutcome.toJSON === 'function' ? this.conditionOutcome.toJSON() : this.conditionOutcome;
    }
    if (this.code != null) {
      inst['Code'] = typeof this.code.toJSON === 'function' ? this.code.toJSON() : this.code;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the FamilyMemberCondition class.
   * The FHIR must be valid against the FamilyMemberCondition FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {FamilyMemberCondition} An instance of FamilyMemberCondition populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.fhx', 'FamilyMemberCondition');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Onset-extension');
      if (match_3 != null) {
        inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-fhx-ConditionOutcome-extension');
      if (match_4 != null) {
        inst.conditionOutcome = FHIRHelper.createInstanceFromFHIR('shr.fhx.ConditionOutcome', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Code-extension');
      if (match_5 != null) {
        inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default FamilyMemberCondition;
