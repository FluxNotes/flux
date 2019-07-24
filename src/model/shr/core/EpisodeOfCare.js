// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import EncounterOrEpisode from './EncounterOrEpisode';

/**
 * Generated class for shr.core.EpisodeOfCare.
 * @extends EncounterOrEpisode
 */
class EpisodeOfCare extends EncounterOrEpisode {

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
   * @returns {EpisodeOfCare} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   * @returns {EpisodeOfCare} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the StatusHistory array.
   * @returns {Array<StatusHistory>} The shr.core.StatusHistory array
   */
  get statusHistory() {
    return this._statusHistory;
  }

  /**
   * Set the StatusHistory array.
   * @param {Array<StatusHistory>} statusHistory - The shr.core.StatusHistory array
   */
  set statusHistory(statusHistory) {
    this._statusHistory = statusHistory;
  }

  /**
   * Set the StatusHistory array and return 'this' for chaining.
   * @param {Array<StatusHistory>} statusHistory - The shr.core.StatusHistory array
   * @returns {EpisodeOfCare} this.
   */
  withStatusHistory(statusHistory) {
    this.statusHistory = statusHistory; return this;
  }

  /**
   * Get the Type array.
   * @returns {Array<Type>} The shr.core.Type array
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type array.
   * @param {Array<Type>} type - The shr.core.Type array
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type array and return 'this' for chaining.
   * @param {Array<Type>} type - The shr.core.Type array
   * @returns {EpisodeOfCare} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the CareManager.
   * @returns {CareManager} The shr.core.CareManager
   */
  get careManager() {
    return this._careManager;
  }

  /**
   * Set the CareManager.
   * @param {CareManager} careManager - The shr.core.CareManager
   */
  set careManager(careManager) {
    this._careManager = careManager;
  }

  /**
   * Set the CareManager and return 'this' for chaining.
   * @param {CareManager} careManager - The shr.core.CareManager
   * @returns {EpisodeOfCare} this.
   */
  withCareManager(careManager) {
    this.careManager = careManager; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EpisodeOfCare class.
   * The JSON must be valid against the EpisodeOfCare JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EpisodeOfCare} An instance of EpisodeOfCare populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'EpisodeOfCare');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EpisodeOfCare class to a JSON object.
   * The JSON is expected to be valid against the EpisodeOfCare JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/EpisodeOfCare' };
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
    if (this.statusHistory != null) {
      inst['StatusHistory'] = this.statusHistory.map(f => f.toJSON());
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    if (this.encounterDiagnosis != null) {
      inst['EncounterDiagnosis'] = this.encounterDiagnosis.map(f => f.toJSON());
    }
    if (this.subjectOfRecord != null) {
      inst['SubjectOfRecord'] = typeof this.subjectOfRecord.toJSON === 'function' ? this.subjectOfRecord.toJSON() : this.subjectOfRecord;
    }
    if (this.type != null) {
      inst['Type'] = this.type.map(f => f.toJSON());
    }
    if (this.organization != null) {
      inst['Organization'] = typeof this.organization.toJSON === 'function' ? this.organization.toJSON() : this.organization;
    }
    if (this.referralRequest != null) {
      inst['ReferralRequest'] = this.referralRequest.map(f => f.toJSON());
    }
    if (this.careManager != null) {
      inst['CareManager'] = typeof this.careManager.toJSON === 'function' ? this.careManager.toJSON() : this.careManager;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EpisodeOfCare class.
   * The FHIR must be valid against the EpisodeOfCare FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EpisodeOfCare} An instance of EpisodeOfCare populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'EpisodeOfCare');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/EpisodeOfCare', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DiagnosisCode-extension') {
        inst.encounterDiagnosis = inst.encounterDiagnosis || [];
        const inst_encounterDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterDiagnosis', {}, null, shrId);
        inst.encounterDiagnosis.push(inst_encounterDiagnosis);
        inst_encounterDiagnosis.diagnosisCode = FHIRHelper.createInstanceFromFHIR('shr.core.DiagnosisCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension') {
        inst.encounterDiagnosis = inst.encounterDiagnosis || [];
        const inst_encounterDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterDiagnosis', {}, null, shrId);
        inst.encounterDiagnosis.push(inst_encounterDiagnosis);
        inst_encounterDiagnosis.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.type = inst.type || [];
          const inst_type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', {}, null, shrId);
          inst.type.push(inst_type);
          inst_type.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PriorityRank-extension') {
        inst.encounterDiagnosis = inst.encounterDiagnosis || [];
        const inst_encounterDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterDiagnosis', {}, null, shrId);
        inst.encounterDiagnosis.push(inst_encounterDiagnosis);
        inst_encounterDiagnosis.priorityRank = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityRank', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
      for (const fhir_statusHistory of fhir['statusHistory'] || []) {
        inst.statusHistory = inst.statusHistory || [];
        const inst_statusHistory = FHIRHelper.createInstanceFromFHIR('shr.core.StatusHistory', fhir_statusHistory, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
        inst.statusHistory.push(inst_statusHistory);
        if (fhir_statusHistory['status'] != null) {
          inst_statusHistory.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_statusHistory['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
        }
        if (fhir_statusHistory['period'] != null) {
          inst_statusHistory.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir_statusHistory['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    for (const fhir_type of fhir['type'] || []) {
      inst.type = inst.type || [];
      const inst_type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_type, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.type.push(inst_type);
    }
    for (const fhir_condition of fhir['condition'] || []) {
      inst.encounterDiagnosis = inst.encounterDiagnosis || [];
      const inst_encounterDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterDiagnosis', {}, null, shrId);
      inst.encounterDiagnosis.push(inst_encounterDiagnosis);
      const entryId = fhir_condition['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Condition', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst_encounterDiagnosis.condition = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Condition';
        inst_encounterDiagnosis.condition = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (fhir['patient'] != null) {
      const entryId = fhir['patient']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.subjectOfRecord = mappedResources[entryId];
    }
    if (fhir['managingOrganization'] != null) {
      const entryId = fhir['managingOrganization']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Organization', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.organization = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Organization';
        inst.organization = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (fhir['period'] != null) {
      inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_referralRequest of fhir['referralRequest'] || []) {
      inst.referralRequest = inst.referralRequest || [];
      const entryId = fhir_referralRequest['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.ReferralRequest', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      let inst_referralRequest;
      if (mappedResources[entryId]) {
        inst_referralRequest = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/ReferralRequest';
        inst_referralRequest = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
      inst.referralRequest.push(inst_referralRequest);
    }
    if (fhir['careManager'] != null) {
      const entryId = fhir['careManager']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.careManager = mappedResources[entryId];
    }
    return inst;
  }

}
export default EpisodeOfCare;
