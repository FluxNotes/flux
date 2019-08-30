// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import ClinicalStatement from './ClinicalStatement';

/**
 * Generated class for shr.core.ActionStatement.
 * @extends ClinicalStatement
 */
class ActionStatement extends ClinicalStatement {

  /**
   * Get the SubjectOfRecord.
   * @returns {SubjectOfRecord} The shr.core.SubjectOfRecord
   */
  get subjectOfRecord() {
    return this._subjectOfRecord;
  }

  /**
   * Set the SubjectOfRecord.
   * This field/value is required.
   * @param {SubjectOfRecord} subjectOfRecord - The shr.core.SubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the SubjectOfRecord and return 'this' for chaining.
   * This field/value is required.
   * @param {SubjectOfRecord} subjectOfRecord - The shr.core.SubjectOfRecord
   * @returns {ActionStatement} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
  }

  /**
   * Get the ReasonCode array.
   * @returns {Array<ReasonCode>} The shr.core.ReasonCode array
   */
  get reasonCode() {
    return this._reasonCode;
  }

  /**
   * Set the ReasonCode array.
   * @param {Array<ReasonCode>} reasonCode - The shr.core.ReasonCode array
   */
  set reasonCode(reasonCode) {
    this._reasonCode = reasonCode;
  }

  /**
   * Set the ReasonCode array and return 'this' for chaining.
   * @param {Array<ReasonCode>} reasonCode - The shr.core.ReasonCode array
   * @returns {ActionStatement} this.
   */
  withReasonCode(reasonCode) {
    this.reasonCode = reasonCode; return this;
  }

  /**
   * Get the ReasonReference array.
   * @returns {Array<ReasonReference>} The shr.core.ReasonReference array
   */
  get reasonReference() {
    return this._reasonReference;
  }

  /**
   * Set the ReasonReference array.
   * @param {Array<ReasonReference>} reasonReference - The shr.core.ReasonReference array
   */
  set reasonReference(reasonReference) {
    this._reasonReference = reasonReference;
  }

  /**
   * Set the ReasonReference array and return 'this' for chaining.
   * @param {Array<ReasonReference>} reasonReference - The shr.core.ReasonReference array
   * @returns {ActionStatement} this.
   */
  withReasonReference(reasonReference) {
    this.reasonReference = reasonReference; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionStatement class.
   * The JSON must be valid against the ActionStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionStatement} An instance of ActionStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ActionStatement');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionStatement class to a JSON object.
   * The JSON is expected to be valid against the ActionStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ActionStatement' } };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.subjectOfRecord != null) {
      inst['SubjectOfRecord'] = typeof this.subjectOfRecord.toJSON === 'function' ? this.subjectOfRecord.toJSON() : this.subjectOfRecord;
    }
    if (this.careContext != null) {
      inst['CareContext'] = typeof this.careContext.toJSON === 'function' ? this.careContext.toJSON() : this.careContext;
    }
    if (this.statementDateTime != null) {
      inst['StatementDateTime'] = typeof this.statementDateTime.toJSON === 'function' ? this.statementDateTime.toJSON() : this.statementDateTime;
    }
    if (this.reasonCode != null) {
      inst['ReasonCode'] = this.reasonCode.map(f => f.toJSON());
    }
    if (this.reasonReference != null) {
      inst['ReasonReference'] = this.reasonReference.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ActionStatement class.
   * The FHIR must be valid against the ActionStatement FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ActionStatement} An instance of ActionStatement populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ActionStatement');
    const inst = new klass();
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = inst.identifier || [];
        const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.identifier.push(inst_identifier);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SubjectOfRecord-extension') {
        inst.subjectOfRecord = FHIRHelper.createInstanceFromFHIR('shr.core.SubjectOfRecord', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CareContext-extension') {
        inst.careContext = FHIRHelper.createInstanceFromFHIR('shr.core.CareContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatementDateTime-extension') {
        inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonCode-extension') {
        inst.reasonCode = inst.reasonCode || [];
        const inst_reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonCode.push(inst_reasonCode);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonReference-extension') {
        inst.reasonReference = inst.reasonReference || [];
        const inst_reasonReference = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonReference', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonReference.push(inst_reasonReference);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default ActionStatement;
