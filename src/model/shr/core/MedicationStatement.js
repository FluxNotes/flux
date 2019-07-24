// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import MedicationExposure from './MedicationExposure';

/**
 * Generated class for shr.core.MedicationStatement.
 * @extends MedicationExposure
 */
class MedicationStatement extends MedicationExposure {

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
   * @returns {MedicationStatement} this.
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
   * @returns {MedicationStatement} this.
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
   * @returns {MedicationStatement} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
  }

  /**
   * Get the StatementDateTime.
   * @returns {StatementDateTime} The shr.core.StatementDateTime
   */
  get statementDateTime() {
    return this._statementDateTime;
  }

  /**
   * Set the StatementDateTime.
   * This field/value is required.
   * @param {StatementDateTime} statementDateTime - The shr.core.StatementDateTime
   */
  set statementDateTime(statementDateTime) {
    this._statementDateTime = statementDateTime;
  }

  /**
   * Set the StatementDateTime and return 'this' for chaining.
   * This field/value is required.
   * @param {StatementDateTime} statementDateTime - The shr.core.StatementDateTime
   * @returns {MedicationStatement} this.
   */
  withStatementDateTime(statementDateTime) {
    this.statementDateTime = statementDateTime; return this;
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
   * @returns {MedicationStatement} this.
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
   * @returns {MedicationStatement} this.
   */
  withReasonReference(reasonReference) {
    this.reasonReference = reasonReference; return this;
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
   * @returns {MedicationStatement} this.
   */
  withParticipation(participation) {
    this.participation = participation; return this;
  }

  /**
   * Get the MedicationStatementRelatedRequest.
   * @returns {MedicationStatementRelatedRequest} The shr.core.MedicationStatementRelatedRequest
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the MedicationStatementRelatedRequest.
   * @param {MedicationStatementRelatedRequest} relatedRequest - The shr.core.MedicationStatementRelatedRequest
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the MedicationStatementRelatedRequest and return 'this' for chaining.
   * @param {MedicationStatementRelatedRequest} relatedRequest - The shr.core.MedicationStatementRelatedRequest
   * @returns {MedicationStatement} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the MedicationStatementInformationSource.
   * @returns {MedicationStatementInformationSource} The shr.core.MedicationStatementInformationSource
   */
  get medicationStatementInformationSource() {
    return this._medicationStatementInformationSource;
  }

  /**
   * Set the MedicationStatementInformationSource.
   * @param {MedicationStatementInformationSource} medicationStatementInformationSource - The shr.core.MedicationStatementInformationSource
   */
  set medicationStatementInformationSource(medicationStatementInformationSource) {
    this._medicationStatementInformationSource = medicationStatementInformationSource;
  }

  /**
   * Set the MedicationStatementInformationSource and return 'this' for chaining.
   * @param {MedicationStatementInformationSource} medicationStatementInformationSource - The shr.core.MedicationStatementInformationSource
   * @returns {MedicationStatement} this.
   */
  withMedicationStatementInformationSource(medicationStatementInformationSource) {
    this.medicationStatementInformationSource = medicationStatementInformationSource; return this;
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
   * @returns {MedicationStatement} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the TreatmentIntent.
   * @returns {TreatmentIntent} The shr.core.TreatmentIntent
   */
  get treatmentIntent() {
    return this._treatmentIntent;
  }

  /**
   * Set the TreatmentIntent.
   * @param {TreatmentIntent} treatmentIntent - The shr.core.TreatmentIntent
   */
  set treatmentIntent(treatmentIntent) {
    this._treatmentIntent = treatmentIntent;
  }

  /**
   * Set the TreatmentIntent and return 'this' for chaining.
   * @param {TreatmentIntent} treatmentIntent - The shr.core.TreatmentIntent
   * @returns {MedicationStatement} this.
   */
  withTreatmentIntent(treatmentIntent) {
    this.treatmentIntent = treatmentIntent; return this;
  }

  /**
   * Get the TerminationReason array.
   * @returns {Array<TerminationReason>} The shr.core.TerminationReason array
   */
  get terminationReason() {
    return this._terminationReason;
  }

  /**
   * Set the TerminationReason array.
   * @param {Array<TerminationReason>} terminationReason - The shr.core.TerminationReason array
   */
  set terminationReason(terminationReason) {
    this._terminationReason = terminationReason;
  }

  /**
   * Set the TerminationReason array and return 'this' for chaining.
   * @param {Array<TerminationReason>} terminationReason - The shr.core.TerminationReason array
   * @returns {MedicationStatement} this.
   */
  withTerminationReason(terminationReason) {
    this.terminationReason = terminationReason; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationStatement class.
   * The JSON must be valid against the MedicationStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationStatement} An instance of MedicationStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'MedicationStatement');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationStatement class to a JSON object.
   * The JSON is expected to be valid against the MedicationStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/MedicationStatement' };
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
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.medicationCodeOrReference != null) {
      inst['MedicationCodeOrReference'] = typeof this.medicationCodeOrReference.toJSON === 'function' ? this.medicationCodeOrReference.toJSON() : this.medicationCodeOrReference;
    }
    if (this.dosage != null) {
      inst['Dosage'] = typeof this.dosage.toJSON === 'function' ? this.dosage.toJSON() : this.dosage;
    }
    if (this.medicationStatementInformationSource != null) {
      inst['MedicationStatementInformationSource'] = typeof this.medicationStatementInformationSource.toJSON === 'function' ? this.medicationStatementInformationSource.toJSON() : this.medicationStatementInformationSource;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.treatmentIntent != null) {
      inst['TreatmentIntent'] = typeof this.treatmentIntent.toJSON === 'function' ? this.treatmentIntent.toJSON() : this.treatmentIntent;
    }
    if (this.terminationReason != null) {
      inst['TerminationReason'] = this.terminationReason.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationStatement class.
   * The FHIR must be valid against the MedicationStatement FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationStatement} An instance of MedicationStatement populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'MedicationStatement');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/MedicationStatement', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MedicationStatementRelatedRequest-extension') {
        inst.relatedRequest = FHIRHelper.createInstanceFromFHIR('shr.core.MedicationStatementRelatedRequest', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Category-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Category-extension') {
        inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.category.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TreatmentIntent-extension') {
        inst.treatmentIntent = FHIRHelper.createInstanceFromFHIR('shr.core.TreatmentIntent', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TerminationReason-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TerminationReason-extension') {
        inst.terminationReason = inst.terminationReason || [];
        const inst_terminationReason = FHIRHelper.createInstanceFromFHIR('shr.core.TerminationReason', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.terminationReason.push(inst_terminationReason);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst_terminationReason.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
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
    if (fhir['informationSource'] != null) {
      const entryId = fhir['informationSource']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.medicationStatementInformationSource = mappedResources[entryId];
    }
    if (fhir['dateAsserted'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir['dateAsserted'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.occurrenceTimeOrPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['effectiveDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['medicationCodeableConcept'] != null) {
      inst.medicationCodeOrReference = FHIRHelper.createInstanceFromFHIR('shr.core.MedicationCodeOrReference', fhir['medicationCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir['medicationCodeableConcept'] != null) {
      }
    }
    if (fhir['dosage'] != null && fhir['dosage'][0] != null) {
      if (fhir['dosage'][0]['text'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.dosageInstructionsText = FHIRHelper.createInstanceFromFHIR('shr.core.DosageInstructionsText', fhir['dosage'][0]['text'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage'][0]['timing'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.timingOfDoses = FHIRHelper.createInstanceFromFHIR('shr.core.TimingOfDoses', fhir['dosage'][0]['timing'], 'Timing', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage'][0]['asNeededBoolean'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.asNeededIndicator = FHIRHelper.createInstanceFromFHIR('shr.core.AsNeededIndicator', fhir['dosage'][0]['asNeededBoolean'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage'][0]['asNeededCodeableConcept'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.asNeededIndicator = FHIRHelper.createInstanceFromFHIR('shr.core.AsNeededIndicator', fhir['dosage'][0]['asNeededCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        if (fhir['dosage'][0]['asNeededCodeableConcept'] != null) {
        }
      }
      if (fhir['dosage'][0]['siteCodeableConcept'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.dosageBodyLocation = FHIRHelper.createInstanceFromFHIR('shr.core.DosageBodyLocation', fhir['dosage'][0]['siteCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage'][0]['route'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.routeIntoBody = FHIRHelper.createInstanceFromFHIR('shr.core.RouteIntoBody', fhir['dosage'][0]['route'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage'][0]['method'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.dosageMethod = FHIRHelper.createInstanceFromFHIR('shr.core.DosageMethod', fhir['dosage'][0]['method'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage'][0]['quantityRange'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.doseAmount = FHIRHelper.createInstanceFromFHIR('shr.core.DoseAmount', fhir['dosage'][0]['quantityRange'], 'Range', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage'][0]['maxDosePerPeriod'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.maximumDosePerTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.MaximumDosePerTimePeriod', fhir['dosage'][0]['maxDosePerPeriod'], 'Ratio', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default MedicationStatement;
