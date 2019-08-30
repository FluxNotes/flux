// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import SituationStatement from './SituationStatement';

/**
 * Generated class for shr.core.Condition.
 * @extends SituationStatement
 */
class Condition extends SituationStatement {

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
   * @returns {Condition} this.
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
   * @returns {Condition} this.
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
   * @returns {Condition} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
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
   * @returns {Condition} this.
   */
  withCode(code) {
    this.code = code; return this;
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
   * @returns {Condition} this.
   */
  withPersonInformationSource(personInformationSource) {
    this.personInformationSource = personInformationSource; return this;
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
   * This field/value is required.
   * @param {Category} category - The shr.core.Category
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category and return 'this' for chaining.
   * This field/value is required.
   * @param {Category} category - The shr.core.Category
   * @returns {Condition} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the BodyLocation array.
   * @returns {Array<BodyLocation>} The shr.core.BodyLocation array
   */
  get bodyLocation() {
    return this._bodyLocation;
  }

  /**
   * Set the BodyLocation array.
   * @param {Array<BodyLocation>} bodyLocation - The shr.core.BodyLocation array
   */
  set bodyLocation(bodyLocation) {
    this._bodyLocation = bodyLocation;
  }

  /**
   * Set the BodyLocation array and return 'this' for chaining.
   * @param {Array<BodyLocation>} bodyLocation - The shr.core.BodyLocation array
   * @returns {Condition} this.
   */
  withBodyLocation(bodyLocation) {
    this.bodyLocation = bodyLocation; return this;
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
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.core.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.core.ClinicalStatus
   * @returns {Condition} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.core.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.core.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The shr.core.Severity
   * @returns {Condition} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
  }

  /**
   * Get the StageInformation.
   * @returns {StageInformation} The shr.core.StageInformation
   */
  get stageInformation() {
    return this._stageInformation;
  }

  /**
   * Set the StageInformation.
   * @param {StageInformation} stageInformation - The shr.core.StageInformation
   */
  set stageInformation(stageInformation) {
    this._stageInformation = stageInformation;
  }

  /**
   * Set the StageInformation and return 'this' for chaining.
   * @param {StageInformation} stageInformation - The shr.core.StageInformation
   * @returns {Condition} this.
   */
  withStageInformation(stageInformation) {
    this.stageInformation = stageInformation; return this;
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
   * @returns {Condition} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the Abatement.
   * @returns {Abatement} The shr.core.Abatement
   */
  get abatement() {
    return this._abatement;
  }

  /**
   * Set the Abatement.
   * @param {Abatement} abatement - The shr.core.Abatement
   */
  set abatement(abatement) {
    this._abatement = abatement;
  }

  /**
   * Set the Abatement and return 'this' for chaining.
   * @param {Abatement} abatement - The shr.core.Abatement
   * @returns {Condition} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
  }

  /**
   * Get the Evidence.
   * @returns {Evidence} The shr.core.Evidence
   */
  get evidence() {
    return this._evidence;
  }

  /**
   * Set the Evidence.
   * @param {Evidence} evidence - The shr.core.Evidence
   */
  set evidence(evidence) {
    this._evidence = evidence;
  }

  /**
   * Set the Evidence and return 'this' for chaining.
   * @param {Evidence} evidence - The shr.core.Evidence
   * @returns {Condition} this.
   */
  withEvidence(evidence) {
    this.evidence = evidence; return this;
  }

  /**
   * Get the DateOfDiagnosis.
   * @returns {DateOfDiagnosis} The shr.core.DateOfDiagnosis
   */
  get dateOfDiagnosis() {
    return this._dateOfDiagnosis;
  }

  /**
   * Set the DateOfDiagnosis.
   * @param {DateOfDiagnosis} dateOfDiagnosis - The shr.core.DateOfDiagnosis
   */
  set dateOfDiagnosis(dateOfDiagnosis) {
    this._dateOfDiagnosis = dateOfDiagnosis;
  }

  /**
   * Set the DateOfDiagnosis and return 'this' for chaining.
   * @param {DateOfDiagnosis} dateOfDiagnosis - The shr.core.DateOfDiagnosis
   * @returns {Condition} this.
   */
  withDateOfDiagnosis(dateOfDiagnosis) {
    this.dateOfDiagnosis = dateOfDiagnosis; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Condition class.
   * The JSON must be valid against the Condition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Condition} An instance of Condition populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Condition');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Condition class to a JSON object.
   * The JSON is expected to be valid against the Condition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Condition' };
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
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.bodyLocation != null) {
      inst['BodyLocation'] = this.bodyLocation.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.stageInformation != null) {
      inst['StageInformation'] = typeof this.stageInformation.toJSON === 'function' ? this.stageInformation.toJSON() : this.stageInformation;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    if (this.evidence != null) {
      inst['Evidence'] = typeof this.evidence.toJSON === 'function' ? this.evidence.toJSON() : this.evidence;
    }
    if (this.dateOfDiagnosis != null) {
      inst['DateOfDiagnosis'] = typeof this.dateOfDiagnosis.toJSON === 'function' ? this.dateOfDiagnosis.toJSON() : this.dateOfDiagnosis;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Condition class.
   * The FHIR must be valid against the Condition FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Condition} An instance of Condition populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Condition');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Condition', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DateOfDiagnosis-extension') {
        inst.dateOfDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.DateOfDiagnosis', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
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
    if (fhir['encounter'] != null) {
      const entryId = fhir['encounter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Encounter', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.careContext = mappedResources[entryId];
    }
    if (fhir['asserter'] != null) {
      const entryId = fhir['asserter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.personInformationSource = mappedResources[entryId];
    }
    if (fhir['dateRecorded'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir['dateRecorded'], 'date', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['clinicalStatus'] != null) {
      inst.clinicalStatus = FHIRHelper.createInstanceFromFHIR('shr.core.ClinicalStatus', fhir['clinicalStatus'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['verificationStatus'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['verificationStatus'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['severity'] != null) {
      inst.severity = FHIRHelper.createInstanceFromFHIR('shr.core.Severity', fhir['severity'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetDateTime'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', fhir['onsetDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetRange'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', fhir['onsetRange'], 'Range', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetString'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', fhir['onsetString'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementDateTime'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementBoolean'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementBoolean'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementRange'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementRange'], 'Range', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementString'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementString'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['stage'] != null) {
      inst.stageInformation = FHIRHelper.createInstanceFromFHIR('shr.core.StageInformation', fhir['stage'], 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir['stage']['summary'] != null) {
        inst.stageInformation.stageSummary = FHIRHelper.createInstanceFromFHIR('shr.core.StageSummary', fhir['stage']['summary'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['stage']['assessment'] != null && fhir['stage']['assessment'][0] != null) {
        const entryId = fhir['stage']['assessment'][0]['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Observation', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst.stageInformation.stageDetail = mappedResources[entryId];
      }
    }
    for (const fhir_evidence of fhir['evidence'] || []) {
      if (fhir_evidence['code'] != null) {
        inst.evidence = inst.evidence || FHIRHelper.createInstanceFromFHIR('shr.core.Evidence', {}, null, shrId);
        inst.evidence.manifestation = inst.evidence.manifestation || [];
        const inst_evidence_manifestation = FHIRHelper.createInstanceFromFHIR('shr.core.Manifestation', fhir_evidence['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        inst.evidence.manifestation.push(inst_evidence_manifestation);
      }
      for (const fhir_evidence_detail of fhir_evidence['detail'] || []) {
        inst.evidence = inst.evidence || FHIRHelper.createInstanceFromFHIR('shr.core.Evidence', {}, null, shrId);
        inst.evidence.domainResource = inst.evidence.domainResource || [];
        const entryId = fhir_evidence_detail['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.DomainResource', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        const inst_evidence_domainResource = mappedResources[entryId];
        inst.evidence.domainResource.push(inst_evidence_domainResource);
      }
    }
    for (const fhir_bodySite of fhir['bodySite'] || []) {
      inst.bodyLocation = inst.bodyLocation || [];
      const inst_bodyLocation = FHIRHelper.createInstanceFromFHIR('shr.core.BodyLocation', {}, null, shrId);
      inst.bodyLocation.push(inst_bodyLocation);
      inst_bodyLocation.locationCode = FHIRHelper.createInstanceFromFHIR('shr.core.LocationCode', fhir_bodySite, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      for (const fhir_bodySite_extension of fhir_bodySite['extension'] || []) {
        if (fhir_bodySite_extension['url'] != null && fhir_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Laterality-extension') {
          inst.bodyLocation.laterality = FHIRHelper.createInstanceFromFHIR('shr.core.Laterality', fhir_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        }
        if (fhir_bodySite_extension['url'] != null && fhir_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Orientation-extension') {
          inst.bodyLocation.orientation = FHIRHelper.createInstanceFromFHIR('shr.core.Orientation', fhir_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        }
        if (fhir_bodySite_extension['url'] != null && fhir_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelationToLandmark-extension') {
          inst.bodyLocation.relationToLandmark = inst.bodyLocation.relationToLandmark || [];
          const inst_bodyLocation_relationToLandmark = FHIRHelper.createInstanceFromFHIR('shr.core.RelationToLandmark', fhir_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
          inst.bodyLocation.relationToLandmark.push(inst_bodyLocation_relationToLandmark);
        }
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Condition;
