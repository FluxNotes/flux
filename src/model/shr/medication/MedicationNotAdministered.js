/* eslint-disable */
import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ActionNotPerformed from '../base/ActionNotPerformed';

/**
 * Generated class for shr.medication.MedicationNotAdministered.
 * @extends ActionNotPerformed
 */
class MedicationNotAdministered extends ActionNotPerformed {

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
   * @returns {MedicationNotAdministered} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Category.
   * @returns {Category} The shr.core.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category.
   * @param {Category} category - The shr.core.Category
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category and return 'this' for chaining.
   * @param {Category} category - The shr.core.Category
   * @returns {MedicationNotAdministered} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * @returns {MedicationNotAdministered} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Get the Medication.
   * @returns {Medication} The shr.entity.Medication
   */
  get medication() {
    return this._medication;
  }

  /**
   * Set the Medication.
   * This field/value is required.
   * @param {Medication} medication - The shr.entity.Medication
   */
  set medication(medication) {
    this._medication = medication;
  }

  /**
   * Set the Medication and return 'this' for chaining.
   * This field/value is required.
   * @param {Medication} medication - The shr.entity.Medication
   * @returns {MedicationNotAdministered} this.
   */
  withMedication(medication) {
    this.medication = medication; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationNotAdministered class.
   * The JSON must be valid against the MedicationNotAdministered JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationNotAdministered} An instance of MedicationNotAdministered populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationNotAdministered();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationNotAdministered class to a JSON object.
   * The JSON is expected to be valid against the MedicationNotAdministered JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationNotAdministered' };
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
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['NonOccurrenceTimeOrPeriod'] = typeof this.nonOccurrenceTimeOrPeriod.toJSON === 'function' ? this.nonOccurrenceTimeOrPeriod.toJSON() : this.nonOccurrenceTimeOrPeriod;
    }
    if (this.medication != null) {
      inst['Medication'] = typeof this.medication.toJSON === 'function' ? this.medication.toJSON() : this.medication;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationNotAdministered class.
   * The FHIR must be valid against the MedicationNotAdministered FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationNotAdministered} An instance of MedicationNotAdministered populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new MedicationNotAdministered();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/medication/MedicationNotAdministered');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-RelatedRequest-extension') {
        inst.relatedRequest = FHIRHelper.createInstanceFromFHIR('shr.base.RelatedRequest', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_reasonNotGiven of fhir['reasonNotGiven'] || []) {
      inst.reason = inst.reason || [];
      const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.base.Reason', fhir_reasonNotGiven, shrId, allEntries, mappedResources, referencesOut, false);
      inst.reason.push(inst_reason);
    }
    if (fhir['medicationReference'] != null) {
      const entryId = fhir['medicationReference']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Medication', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.medication = mappedResources[entryId];
    }
    return inst;
  }

}
export default MedicationNotAdministered;
