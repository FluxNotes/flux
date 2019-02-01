import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ActionPerformed from '../base/ActionPerformed';

/**
 * Generated class for shr.medication.MedicationChange.
 * @extends ActionPerformed
 */
class MedicationChange extends ActionPerformed {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {MedicationChange} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.base.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Set the Reason array and return 'this' for chaining.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   * @returns {MedicationChange} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Get the MedicationBeforeChange array.
   * @returns {Array<MedicationBeforeChange>} The shr.medication.MedicationBeforeChange array
   */
  get medicationBeforeChange() {
    return this._medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The shr.medication.MedicationBeforeChange array
   */
  set medicationBeforeChange(medicationBeforeChange) {
    this._medicationBeforeChange = medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array and return 'this' for chaining.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The shr.medication.MedicationBeforeChange array
   * @returns {MedicationChange} this.
   */
  withMedicationBeforeChange(medicationBeforeChange) {
    this.medicationBeforeChange = medicationBeforeChange; return this;
  }

  /**
   * Get the MedicationAfterChange array.
   * @returns {Array<MedicationAfterChange>} The shr.medication.MedicationAfterChange array
   */
  get medicationAfterChange() {
    return this._medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The shr.medication.MedicationAfterChange array
   */
  set medicationAfterChange(medicationAfterChange) {
    this._medicationAfterChange = medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array and return 'this' for chaining.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The shr.medication.MedicationAfterChange array
   * @returns {MedicationChange} this.
   */
  withMedicationAfterChange(medicationAfterChange) {
    this.medicationAfterChange = medicationAfterChange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationChange class.
   * The JSON must be valid against the MedicationChange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationChange} An instance of MedicationChange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationChange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationChange class to a JSON object.
   * The JSON is expected to be valid against the MedicationChange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationChange' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.medicationBeforeChange != null) {
      inst['MedicationBeforeChange'] = this.medicationBeforeChange.map(f => f.toJSON());
    }
    if (this.medicationAfterChange != null) {
      inst['MedicationAfterChange'] = this.medicationAfterChange.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationChange class.
   * The FHIR must be valid against the MedicationChange FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationChange} An instance of MedicationChange populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new MedicationChange();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/medication/MedicationChange');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Category-extension') {
        inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension') {
        inst.patient = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension') {
        inst.encounter = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Reason-extension') {
        inst.reason = inst.reason || [];
        const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.base.Reason', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.reason.push(inst_reason);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-OccurrenceTimeOrPeriod-extension') {
        inst.occurrenceTimeOrPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Participation-extension') {
        inst.participation = inst.participation || [];
        const inst_participation = FHIRHelper.createInstanceFromFHIR('shr.base.Participation', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.participation.push(inst_participation);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Method-extension') {
        inst.method = FHIRHelper.createInstanceFromFHIR('shr.base.Method', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-RelatedRequest-extension') {
        inst.relatedRequest = FHIRHelper.createInstanceFromFHIR('shr.base.RelatedRequest', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Facility-extension') {
        inst.facility = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Facility', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Outcome-extension') {
        inst.outcome = FHIRHelper.createInstanceFromFHIR('shr.base.Outcome', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-medication-MedicationBeforeChange-extension') {
        inst.medicationBeforeChange = inst.medicationBeforeChange || [];
        const inst_medicationBeforeChange = FHIRHelper.createInstanceFromFHIR('shr.medication.MedicationBeforeChange', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.medicationBeforeChange.push(inst_medicationBeforeChange);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-medication-MedicationAfterChange-extension') {
        inst.medicationAfterChange = inst.medicationAfterChange || [];
        const inst_medicationAfterChange = FHIRHelper.createInstanceFromFHIR('shr.medication.MedicationAfterChange', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.medicationAfterChange.push(inst_medicationAfterChange);
      }
    }
    return inst;
  }

}
export default MedicationChange;
