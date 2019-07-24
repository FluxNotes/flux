// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import SituationStatement from './SituationStatement';

/**
 * Generated class for shr.core.AllergyIntolerance.
 * @extends SituationStatement
 */
class AllergyIntolerance extends SituationStatement {

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
   * @returns {AllergyIntolerance} this.
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
   * @returns {AllergyIntolerance} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * @returns {AllergyIntolerance} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
  }

  /**
   * Get the PersonInformationSource.
   * @returns {PersonInformationSource} The shr.core.PersonInformationSource
   */
  get personInformationSource() {
    return this._personInformationSource;
  }

  /**
   * Set the PersonInformationSource.
   * @param {PersonInformationSource} personInformationSource - The shr.core.PersonInformationSource
   */
  set personInformationSource(personInformationSource) {
    this._personInformationSource = personInformationSource;
  }

  /**
   * Set the PersonInformationSource and return 'this' for chaining.
   * @param {PersonInformationSource} personInformationSource - The shr.core.PersonInformationSource
   * @returns {AllergyIntolerance} this.
   */
  withPersonInformationSource(personInformationSource) {
    this.personInformationSource = personInformationSource; return this;
  }

  /**
   * Get the AllergyRecorder.
   * @returns {AllergyRecorder} The shr.core.AllergyRecorder
   */
  get allergyRecorder() {
    return this._allergyRecorder;
  }

  /**
   * Set the AllergyRecorder.
   * @param {AllergyRecorder} allergyRecorder - The shr.core.AllergyRecorder
   */
  set allergyRecorder(allergyRecorder) {
    this._allergyRecorder = allergyRecorder;
  }

  /**
   * Set the AllergyRecorder and return 'this' for chaining.
   * @param {AllergyRecorder} allergyRecorder - The shr.core.AllergyRecorder
   * @returns {AllergyIntolerance} this.
   */
  withAllergyRecorder(allergyRecorder) {
    this.allergyRecorder = allergyRecorder; return this;
  }

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The shr.core.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * @param {ClinicalStatus} clinicalStatus - The shr.core.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * @param {ClinicalStatus} clinicalStatus - The shr.core.ClinicalStatus
   * @returns {AllergyIntolerance} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the SubstanceCategory.
   * @returns {SubstanceCategory} The shr.core.SubstanceCategory
   */
  get substanceCategory() {
    return this._substanceCategory;
  }

  /**
   * Set the SubstanceCategory.
   * @param {SubstanceCategory} substanceCategory - The shr.core.SubstanceCategory
   */
  set substanceCategory(substanceCategory) {
    this._substanceCategory = substanceCategory;
  }

  /**
   * Set the SubstanceCategory and return 'this' for chaining.
   * @param {SubstanceCategory} substanceCategory - The shr.core.SubstanceCategory
   * @returns {AllergyIntolerance} this.
   */
  withSubstanceCategory(substanceCategory) {
    this.substanceCategory = substanceCategory; return this;
  }

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
   * @returns {AllergyIntolerance} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
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
   * @returns {AllergyIntolerance} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Criticality.
   * @returns {Criticality} The shr.core.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Set the Criticality.
   * @param {Criticality} criticality - The shr.core.Criticality
   */
  set criticality(criticality) {
    this._criticality = criticality;
  }

  /**
   * Set the Criticality and return 'this' for chaining.
   * @param {Criticality} criticality - The shr.core.Criticality
   * @returns {AllergyIntolerance} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
  }

  /**
   * Get the MostRecentOccurrenceTime.
   * @returns {MostRecentOccurrenceTime} The shr.core.MostRecentOccurrenceTime
   */
  get mostRecentOccurrenceTime() {
    return this._mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The shr.core.MostRecentOccurrenceTime
   */
  set mostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this._mostRecentOccurrenceTime = mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime and return 'this' for chaining.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The shr.core.MostRecentOccurrenceTime
   * @returns {AllergyIntolerance} this.
   */
  withMostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this.mostRecentOccurrenceTime = mostRecentOccurrenceTime; return this;
  }

  /**
   * Get the AllergyIntoleranceReaction array.
   * @returns {Array<AllergyIntoleranceReaction>} The shr.core.AllergyIntoleranceReaction array
   */
  get allergyIntoleranceReaction() {
    return this._allergyIntoleranceReaction;
  }

  /**
   * Set the AllergyIntoleranceReaction array.
   * @param {Array<AllergyIntoleranceReaction>} allergyIntoleranceReaction - The shr.core.AllergyIntoleranceReaction array
   */
  set allergyIntoleranceReaction(allergyIntoleranceReaction) {
    this._allergyIntoleranceReaction = allergyIntoleranceReaction;
  }

  /**
   * Set the AllergyIntoleranceReaction array and return 'this' for chaining.
   * @param {Array<AllergyIntoleranceReaction>} allergyIntoleranceReaction - The shr.core.AllergyIntoleranceReaction array
   * @returns {AllergyIntolerance} this.
   */
  withAllergyIntoleranceReaction(allergyIntoleranceReaction) {
    this.allergyIntoleranceReaction = allergyIntoleranceReaction; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AllergyIntolerance class.
   * The JSON must be valid against the AllergyIntolerance JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AllergyIntolerance} An instance of AllergyIntolerance populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'AllergyIntolerance');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AllergyIntolerance class to a JSON object.
   * The JSON is expected to be valid against the AllergyIntolerance JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/AllergyIntolerance' };
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
    if (this.code != null) {
      inst['Code'] = typeof this.code.toJSON === 'function' ? this.code.toJSON() : this.code;
    }
    if (this.personInformationSource != null) {
      inst['PersonInformationSource'] = typeof this.personInformationSource.toJSON === 'function' ? this.personInformationSource.toJSON() : this.personInformationSource;
    }
    if (this.allergyRecorder != null) {
      inst['AllergyRecorder'] = typeof this.allergyRecorder.toJSON === 'function' ? this.allergyRecorder.toJSON() : this.allergyRecorder;
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.substanceCategory != null) {
      inst['SubstanceCategory'] = typeof this.substanceCategory.toJSON === 'function' ? this.substanceCategory.toJSON() : this.substanceCategory;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.mostRecentOccurrenceTime != null) {
      inst['MostRecentOccurrenceTime'] = typeof this.mostRecentOccurrenceTime.toJSON === 'function' ? this.mostRecentOccurrenceTime.toJSON() : this.mostRecentOccurrenceTime;
    }
    if (this.allergyIntoleranceReaction != null) {
      inst['AllergyIntoleranceReaction'] = this.allergyIntoleranceReaction.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AllergyIntolerance class.
   * The FHIR must be valid against the AllergyIntolerance FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AllergyIntolerance} An instance of AllergyIntolerance populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'AllergyIntolerance');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/AllergyIntolerance', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CareContext-extension') {
        inst.careContext = FHIRHelper.createInstanceFromFHIR('shr.core.CareContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ClinicalStatus-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ClinicalStatus-extension') {
        inst.clinicalStatus = FHIRHelper.createInstanceFromFHIR('shr.core.ClinicalStatus', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.clinicalStatus.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['onset'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', fhir['onset'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['recordedDate'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir['recordedDate'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['recorder'] != null) {
      const entryId = fhir['recorder']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.allergyRecorder = mappedResources[entryId];
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
    if (fhir['reporter'] != null) {
      const entryId = fhir['reporter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.personInformationSource = mappedResources[entryId];
    }
    if (fhir['substance'] != null) {
      inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['substance'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['criticality'] != null) {
      inst.criticality = FHIRHelper.createInstanceFromFHIR('shr.core.Criticality', fhir['criticality'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.substanceCategory = FHIRHelper.createInstanceFromFHIR('shr.core.SubstanceCategory', fhir['category'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['lastOccurence'] != null) {
      inst.mostRecentOccurrenceTime = FHIRHelper.createInstanceFromFHIR('shr.core.MostRecentOccurrenceTime', fhir['lastOccurence'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['reaction'] != null && fhir['reaction'][0] != null) {
      if (fhir['reaction'][0]['substance'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.core.AllergyIntoleranceReaction', {}, null, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.substanceCode = FHIRHelper.createInstanceFromFHIR('shr.core.SubstanceCode', fhir['reaction'][0]['substance'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_reaction_0_manifestation of fhir['reaction'][0]['manifestation'] || []) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.core.AllergyIntoleranceReaction', {}, null, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.manifestation = inst_allergyIntoleranceReaction.manifestation || [];
        const inst_allergyIntoleranceReaction_manifestation = FHIRHelper.createInstanceFromFHIR('shr.core.Manifestation', fhir_reaction_0_manifestation, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        inst_allergyIntoleranceReaction.manifestation.push(inst_allergyIntoleranceReaction_manifestation);
      }
      if (fhir['reaction'][0]['description'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.core.AllergyIntoleranceReaction', {}, null, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['reaction'][0]['description'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['reaction'][0]['onset'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.core.AllergyIntoleranceReaction', {}, null, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.beginDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.BeginDateTime', fhir['reaction'][0]['onset'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['reaction'][0]['severity'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.core.AllergyIntoleranceReaction', {}, null, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.severity = FHIRHelper.createInstanceFromFHIR('shr.core.Severity', fhir['reaction'][0]['severity'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['reaction'][0]['exposureRoute'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.core.AllergyIntoleranceReaction', {}, null, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.routeIntoBody = FHIRHelper.createInstanceFromFHIR('shr.core.RouteIntoBody', fhir['reaction'][0]['exposureRoute'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default AllergyIntolerance;
