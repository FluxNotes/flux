// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import DomainResource from './DomainResource';

/**
 * Generated class for shr.core.EncounterOrEpisode.
 * @extends DomainResource
 */
class EncounterOrEpisode extends DomainResource {

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
   * @returns {EncounterOrEpisode} this.
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
   * @returns {EncounterOrEpisode} this.
   */
  withStatusHistory(statusHistory) {
    this.statusHistory = statusHistory; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {EncounterOrEpisode} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Get the EncounterDiagnosis array.
   * @returns {Array<EncounterDiagnosis>} The shr.core.EncounterDiagnosis array
   */
  get encounterDiagnosis() {
    return this._encounterDiagnosis;
  }

  /**
   * Set the EncounterDiagnosis array.
   * @param {Array<EncounterDiagnosis>} encounterDiagnosis - The shr.core.EncounterDiagnosis array
   */
  set encounterDiagnosis(encounterDiagnosis) {
    this._encounterDiagnosis = encounterDiagnosis;
  }

  /**
   * Set the EncounterDiagnosis array and return 'this' for chaining.
   * @param {Array<EncounterDiagnosis>} encounterDiagnosis - The shr.core.EncounterDiagnosis array
   * @returns {EncounterOrEpisode} this.
   */
  withEncounterDiagnosis(encounterDiagnosis) {
    this.encounterDiagnosis = encounterDiagnosis; return this;
  }

  /**
   * Get the PatientSubjectOfRecord.
   * @returns {PatientSubjectOfRecord} The shr.core.PatientSubjectOfRecord
   */
  get subjectOfRecord() {
    return this._subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord.
   * This field/value is required.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord and return 'this' for chaining.
   * This field/value is required.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   * @returns {EncounterOrEpisode} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
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
   * @returns {EncounterOrEpisode} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the shr.core.Organization reference.
   * @returns {Reference} The shr.core.Organization reference
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the shr.core.Organization reference.
   * @param {Reference} organization - The shr.core.Organization reference
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Set the shr.core.Organization reference and return 'this' for chaining.
   * @param {Reference} organization - The shr.core.Organization reference
   * @returns {EncounterOrEpisode} this.
   */
  withOrganization(organization) {
    this.organization = organization; return this;
  }

  /**
   * Get the shr.core.ReferralRequest reference array.
   * @returns {Array<Reference>} The shr.core.ReferralRequest reference array
   */
  get referralRequest() {
    return this._referralRequest;
  }

  /**
   * Set the shr.core.ReferralRequest reference array.
   * @param {Array<Reference>} referralRequest - The shr.core.ReferralRequest reference array
   */
  set referralRequest(referralRequest) {
    this._referralRequest = referralRequest;
  }

  /**
   * Set the shr.core.ReferralRequest reference array and return 'this' for chaining.
   * @param {Array<Reference>} referralRequest - The shr.core.ReferralRequest reference array
   * @returns {EncounterOrEpisode} this.
   */
  withReferralRequest(referralRequest) {
    this.referralRequest = referralRequest; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EncounterOrEpisode class.
   * The JSON must be valid against the EncounterOrEpisode JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EncounterOrEpisode} An instance of EncounterOrEpisode populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'EncounterOrEpisode');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EncounterOrEpisode class to a JSON object.
   * The JSON is expected to be valid against the EncounterOrEpisode JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/EncounterOrEpisode' } };
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
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EncounterOrEpisode class.
   * The FHIR must be valid against the EncounterOrEpisode FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EncounterOrEpisode} An instance of EncounterOrEpisode populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'EncounterOrEpisode');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatusHistory-extension') {
        inst.statusHistory = inst.statusHistory || [];
        const inst_statusHistory = FHIRHelper.createInstanceFromFHIR('shr.core.StatusHistory', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.statusHistory.push(inst_statusHistory);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TimePeriod-extension') {
        inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-EncounterDiagnosis-extension') {
        inst.encounterDiagnosis = inst.encounterDiagnosis || [];
        const inst_encounterDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterDiagnosis', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.encounterDiagnosis.push(inst_encounterDiagnosis);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PatientSubjectOfRecord-extension') {
        inst.subjectOfRecord = FHIRHelper.createInstanceFromFHIR('shr.core.PatientSubjectOfRecord', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension') {
        inst.type = inst.type || [];
        const inst_type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.type.push(inst_type);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Organization-extension') {
        inst.organization = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.Organization', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReferralRequest-extension') {
        inst.referralRequest = inst.referralRequest || [];
        const inst_referralRequest = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.ReferralRequest', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
        inst.referralRequest.push(inst_referralRequest);
      }
    }
    return inst;
  }

}
export default EncounterOrEpisode;
