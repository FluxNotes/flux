// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import EncounterOrEpisode from './EncounterOrEpisode';

/**
 * Generated class for shr.core.Encounter.
 * @extends EncounterOrEpisode
 */
class Encounter extends EncounterOrEpisode {

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
   * @returns {Encounter} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {Encounter} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the EncounterClass.
   * @returns {EncounterClass} The shr.core.EncounterClass
   */
  get encounterClass() {
    return this._encounterClass;
  }

  /**
   * Set the EncounterClass.
   * @param {EncounterClass} encounterClass - The shr.core.EncounterClass
   */
  set encounterClass(encounterClass) {
    this._encounterClass = encounterClass;
  }

  /**
   * Set the EncounterClass and return 'this' for chaining.
   * @param {EncounterClass} encounterClass - The shr.core.EncounterClass
   * @returns {Encounter} this.
   */
  withEncounterClass(encounterClass) {
    this.encounterClass = encounterClass; return this;
  }

  /**
   * Get the ClassHistory array.
   * @returns {Array<ClassHistory>} The shr.core.ClassHistory array
   */
  get classHistory() {
    return this._classHistory;
  }

  /**
   * Set the ClassHistory array.
   * @param {Array<ClassHistory>} classHistory - The shr.core.ClassHistory array
   */
  set classHistory(classHistory) {
    this._classHistory = classHistory;
  }

  /**
   * Set the ClassHistory array and return 'this' for chaining.
   * @param {Array<ClassHistory>} classHistory - The shr.core.ClassHistory array
   * @returns {Encounter} this.
   */
  withClassHistory(classHistory) {
    this.classHistory = classHistory; return this;
  }

  /**
   * Get the PriorityCode.
   * @returns {PriorityCode} The shr.core.PriorityCode
   */
  get priorityCode() {
    return this._priorityCode;
  }

  /**
   * Set the PriorityCode.
   * @param {PriorityCode} priorityCode - The shr.core.PriorityCode
   */
  set priorityCode(priorityCode) {
    this._priorityCode = priorityCode;
  }

  /**
   * Set the PriorityCode and return 'this' for chaining.
   * @param {PriorityCode} priorityCode - The shr.core.PriorityCode
   * @returns {Encounter} this.
   */
  withPriorityCode(priorityCode) {
    this.priorityCode = priorityCode; return this;
  }

  /**
   * Get the shr.core.EpisodeOfCare reference array.
   * @returns {Array<Reference>} The shr.core.EpisodeOfCare reference array
   */
  get episodeOfCare() {
    return this._episodeOfCare;
  }

  /**
   * Set the shr.core.EpisodeOfCare reference array.
   * @param {Array<Reference>} episodeOfCare - The shr.core.EpisodeOfCare reference array
   */
  set episodeOfCare(episodeOfCare) {
    this._episodeOfCare = episodeOfCare;
  }

  /**
   * Set the shr.core.EpisodeOfCare reference array and return 'this' for chaining.
   * @param {Array<Reference>} episodeOfCare - The shr.core.EpisodeOfCare reference array
   * @returns {Encounter} this.
   */
  withEpisodeOfCare(episodeOfCare) {
    this.episodeOfCare = episodeOfCare; return this;
  }

  /**
   * Get the Participation array.
   * @returns {Array<Participation>} The shr.core.Participation array
   */
  get participation() {
    return this._participation;
  }

  /**
   * Set the Participation array.
   * @param {Array<Participation>} participation - The shr.core.Participation array
   */
  set participation(participation) {
    this._participation = participation;
  }

  /**
   * Set the Participation array and return 'this' for chaining.
   * @param {Array<Participation>} participation - The shr.core.Participation array
   * @returns {Encounter} this.
   */
  withParticipation(participation) {
    this.participation = participation; return this;
  }

  /**
   * Get the shr.core.Appointment reference.
   * @returns {Reference} The shr.core.Appointment reference
   */
  get appointment() {
    return this._appointment;
  }

  /**
   * Set the shr.core.Appointment reference.
   * @param {Reference} appointment - The shr.core.Appointment reference
   */
  set appointment(appointment) {
    this._appointment = appointment;
  }

  /**
   * Set the shr.core.Appointment reference and return 'this' for chaining.
   * @param {Reference} appointment - The shr.core.Appointment reference
   * @returns {Encounter} this.
   */
  withAppointment(appointment) {
    this.appointment = appointment; return this;
  }

  /**
   * Get the Duration.
   * @returns {Duration} The shr.core.Duration
   */
  get duration() {
    return this._duration;
  }

  /**
   * Set the Duration.
   * @param {Duration} duration - The shr.core.Duration
   */
  set duration(duration) {
    this._duration = duration;
  }

  /**
   * Set the Duration and return 'this' for chaining.
   * @param {Duration} duration - The shr.core.Duration
   * @returns {Encounter} this.
   */
  withDuration(duration) {
    this.duration = duration; return this;
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
   * @returns {Encounter} this.
   */
  withReasonCode(reasonCode) {
    this.reasonCode = reasonCode; return this;
  }

  /**
   * Get the EncounterLocation array.
   * @returns {Array<EncounterLocation>} The shr.core.EncounterLocation array
   */
  get encounterLocation() {
    return this._encounterLocation;
  }

  /**
   * Set the EncounterLocation array.
   * @param {Array<EncounterLocation>} encounterLocation - The shr.core.EncounterLocation array
   */
  set encounterLocation(encounterLocation) {
    this._encounterLocation = encounterLocation;
  }

  /**
   * Set the EncounterLocation array and return 'this' for chaining.
   * @param {Array<EncounterLocation>} encounterLocation - The shr.core.EncounterLocation array
   * @returns {Encounter} this.
   */
  withEncounterLocation(encounterLocation) {
    this.encounterLocation = encounterLocation; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.core.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.core.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.core.PartOf
   * @returns {Encounter} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Encounter class.
   * The JSON must be valid against the Encounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Encounter} An instance of Encounter populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Encounter');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Encounter class to a JSON object.
   * The JSON is expected to be valid against the Encounter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Encounter' };
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
    if (this.encounterClass != null) {
      inst['EncounterClass'] = typeof this.encounterClass.toJSON === 'function' ? this.encounterClass.toJSON() : this.encounterClass;
    }
    if (this.classHistory != null) {
      inst['ClassHistory'] = this.classHistory.map(f => f.toJSON());
    }
    if (this.priorityCode != null) {
      inst['PriorityCode'] = typeof this.priorityCode.toJSON === 'function' ? this.priorityCode.toJSON() : this.priorityCode;
    }
    if (this.episodeOfCare != null) {
      inst['EpisodeOfCare'] = this.episodeOfCare.map(f => f.toJSON());
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.appointment != null) {
      inst['Appointment'] = typeof this.appointment.toJSON === 'function' ? this.appointment.toJSON() : this.appointment;
    }
    if (this.duration != null) {
      inst['Duration'] = typeof this.duration.toJSON === 'function' ? this.duration.toJSON() : this.duration;
    }
    if (this.reasonCode != null) {
      inst['ReasonCode'] = this.reasonCode.map(f => f.toJSON());
    }
    if (this.encounterLocation != null) {
      inst['EncounterLocation'] = this.encounterLocation.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Encounter class.
   * The FHIR must be valid against the Encounter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Encounter} An instance of Encounter populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Encounter');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Encounter', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-EncounterClass-extension') {
        inst.classHistory = inst.classHistory || [];
        const inst_classHistory = FHIRHelper.createInstanceFromFHIR('shr.core.ClassHistory', {}, null, shrId);
        inst.classHistory.push(inst_classHistory);
        inst_classHistory.encounterClass = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterClass', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TimePeriod-extension') {
        inst.classHistory = inst.classHistory || [];
        const inst_classHistory = FHIRHelper.createInstanceFromFHIR('shr.core.ClassHistory', {}, null, shrId);
        inst.classHistory.push(inst_classHistory);
        inst_classHistory.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DiagnosisCode-extension') {
        inst.encounterDiagnosis = inst.encounterDiagnosis || [];
        const inst_encounterDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterDiagnosis', {}, null, shrId);
        inst.encounterDiagnosis.push(inst_encounterDiagnosis);
        inst_encounterDiagnosis.diagnosisCode = FHIRHelper.createInstanceFromFHIR('shr.core.DiagnosisCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Condition-extension') {
        inst.encounterDiagnosis = inst.encounterDiagnosis || [];
        const inst_encounterDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterDiagnosis', {}, null, shrId);
        inst.encounterDiagnosis.push(inst_encounterDiagnosis);
        inst_encounterDiagnosis.condition = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.Condition', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
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
    if (fhir['class'] != null) {
      inst.encounterClass = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterClass', fhir['class'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_type of fhir['type'] || []) {
      inst.type = inst.type || [];
      const inst_type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_type, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.type.push(inst_type);
    }
    if (fhir['priority'] != null) {
      inst.priorityCode = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityCode', fhir['priority'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
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
    for (const fhir_episodeOfCare of fhir['episodeOfCare'] || []) {
      inst.episodeOfCare = inst.episodeOfCare || [];
      const entryId = fhir_episodeOfCare['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.EpisodeOfCare', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      let inst_episodeOfCare;
      if (mappedResources[entryId]) {
        inst_episodeOfCare = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/EpisodeOfCare';
        inst_episodeOfCare = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
      inst.episodeOfCare.push(inst_episodeOfCare);
    }
    for (const fhir_incomingReferral of fhir['incomingReferral'] || []) {
      inst.referralRequest = inst.referralRequest || [];
      const entryId = fhir_incomingReferral['reference'];
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
    for (const fhir_participant of fhir['participant'] || []) {
      inst.participation = inst.participation || [];
      const inst_participation = FHIRHelper.createInstanceFromFHIR('shr.core.Participation', fhir_participant, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      inst.participation.push(inst_participation);
      for (const fhir_participant_type of fhir_participant['type'] || []) {
        inst_participation.participationType = FHIRHelper.createInstanceFromFHIR('shr.core.ParticipationType', fhir_participant_type, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_participant['period'] != null) {
        inst_participation.participationPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.ParticipationPeriod', fhir_participant['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_participant['individual'] != null) {
        const entryId = fhir_participant['individual']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst_participation.participant = mappedResources[entryId];
      }
    }
    if (fhir['appointment'] != null) {
      const entryId = fhir['appointment']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Appointment', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.appointment = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Appointment';
        inst.appointment = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (fhir['period'] != null) {
      inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['length'] != null) {
      inst.duration = FHIRHelper.createInstanceFromFHIR('shr.core.Duration', fhir['length'], 'Quantity', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_reason of fhir['reason'] || []) {
      inst.reasonCode = inst.reasonCode || [];
      const inst_reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir_reason, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.reasonCode.push(inst_reasonCode);
    }
    for (const fhir_location of fhir['location'] || []) {
      inst.encounterLocation = inst.encounterLocation || [];
      const inst_encounterLocation = FHIRHelper.createInstanceFromFHIR('shr.core.EncounterLocation', fhir_location, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      inst.encounterLocation.push(inst_encounterLocation);
      if (fhir_location['location'] != null) {
        const entryId = fhir_location['location']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Location', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        if (mappedResources[entryId]) {
          inst_encounterLocation.location = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
        }
        else {
          const entryType = 'http://standardhealthrecord.org/spec/shr/core/Location';
          inst_encounterLocation.location = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
        }
      }
      if (fhir_location['status'] != null) {
        inst_encounterLocation.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_location['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_location['period'] != null) {
        inst_encounterLocation.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir_location['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['serviceProvider'] != null) {
      const entryId = fhir['serviceProvider']['reference'];
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
    if (fhir['partOf'] != null) {
      const entryId = fhir['partOf']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Encounter', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.partOf = mappedResources[entryId];
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Encounter;
