// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import ActionRequested from './ActionRequested';

/**
 * Generated class for shr.core.MedicationRequest.
 * @extends ActionRequested
 */
class MedicationRequest extends ActionRequested {

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
   * @returns {MedicationRequest} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {MedicationRequest} this.
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
   * @returns {MedicationRequest} this.
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
   * @returns {MedicationRequest} this.
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
   * @returns {MedicationRequest} this.
   */
  withReasonReference(reasonReference) {
    this.reasonReference = reasonReference; return this;
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
   * @returns {MedicationRequest} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the RequestIntent.
   * @returns {RequestIntent} The shr.core.RequestIntent
   */
  get requestIntent() {
    return this._requestIntent;
  }

  /**
   * Set the RequestIntent.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.core.RequestIntent
   */
  set requestIntent(requestIntent) {
    this._requestIntent = requestIntent;
  }

  /**
   * Set the RequestIntent and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.core.RequestIntent
   * @returns {MedicationRequest} this.
   */
  withRequestIntent(requestIntent) {
    this.requestIntent = requestIntent; return this;
  }

  /**
   * Get the ExpectedPerformanceTime.
   * @returns {ExpectedPerformanceTime} The shr.core.ExpectedPerformanceTime
   */
  get expectedPerformanceTime() {
    return this._expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.core.ExpectedPerformanceTime
   */
  set expectedPerformanceTime(expectedPerformanceTime) {
    this._expectedPerformanceTime = expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime and return 'this' for chaining.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.core.ExpectedPerformanceTime
   * @returns {MedicationRequest} this.
   */
  withExpectedPerformanceTime(expectedPerformanceTime) {
    this.expectedPerformanceTime = expectedPerformanceTime; return this;
  }

  /**
   * Get the ExpectedPerformerType.
   * @returns {ExpectedPerformerType} The shr.core.ExpectedPerformerType
   */
  get expectedPerformerType() {
    return this._expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.core.ExpectedPerformerType
   */
  set expectedPerformerType(expectedPerformerType) {
    this._expectedPerformerType = expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType and return 'this' for chaining.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.core.ExpectedPerformerType
   * @returns {MedicationRequest} this.
   */
  withExpectedPerformerType(expectedPerformerType) {
    this.expectedPerformerType = expectedPerformerType; return this;
  }

  /**
   * Get the Recipient.
   * @returns {Recipient} The shr.core.Recipient
   */
  get recipient() {
    return this._recipient;
  }

  /**
   * Set the Recipient.
   * @param {Recipient} recipient - The shr.core.Recipient
   */
  set recipient(recipient) {
    this._recipient = recipient;
  }

  /**
   * Set the Recipient and return 'this' for chaining.
   * @param {Recipient} recipient - The shr.core.Recipient
   * @returns {MedicationRequest} this.
   */
  withRecipient(recipient) {
    this.recipient = recipient; return this;
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
   * @returns {MedicationRequest} this.
   */
  withPriorityCode(priorityCode) {
    this.priorityCode = priorityCode; return this;
  }

  /**
   * Get the Annotation array.
   * @returns {Array<Annotation>} The shr.core.Annotation array
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Set the Annotation array.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   */
  set annotation(annotation) {
    this._annotation = annotation;
  }

  /**
   * Set the Annotation array and return 'this' for chaining.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   * @returns {MedicationRequest} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Get the CommunicationMethod.
   * @returns {CommunicationMethod} The shr.core.CommunicationMethod
   */
  get communicationMethod() {
    return this._communicationMethod;
  }

  /**
   * Set the CommunicationMethod.
   * @param {CommunicationMethod} communicationMethod - The shr.core.CommunicationMethod
   */
  set communicationMethod(communicationMethod) {
    this._communicationMethod = communicationMethod;
  }

  /**
   * Set the CommunicationMethod and return 'this' for chaining.
   * @param {CommunicationMethod} communicationMethod - The shr.core.CommunicationMethod
   * @returns {MedicationRequest} this.
   */
  withCommunicationMethod(communicationMethod) {
    this.communicationMethod = communicationMethod; return this;
  }

  /**
   * Get the MedicationCodeOrReference.
   * @returns {MedicationCodeOrReference} The shr.core.MedicationCodeOrReference
   */
  get medicationCodeOrReference() {
    return this._medicationCodeOrReference;
  }

  /**
   * Set the MedicationCodeOrReference.
   * This field/value is required.
   * @param {MedicationCodeOrReference} medicationCodeOrReference - The shr.core.MedicationCodeOrReference
   */
  set medicationCodeOrReference(medicationCodeOrReference) {
    this._medicationCodeOrReference = medicationCodeOrReference;
  }

  /**
   * Set the MedicationCodeOrReference and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicationCodeOrReference} medicationCodeOrReference - The shr.core.MedicationCodeOrReference
   * @returns {MedicationRequest} this.
   */
  withMedicationCodeOrReference(medicationCodeOrReference) {
    this.medicationCodeOrReference = medicationCodeOrReference; return this;
  }

  /**
   * Get the Dosage.
   * @returns {Dosage} The shr.core.Dosage
   */
  get dosage() {
    return this._dosage;
  }

  /**
   * Set the Dosage.
   * @param {Dosage} dosage - The shr.core.Dosage
   */
  set dosage(dosage) {
    this._dosage = dosage;
  }

  /**
   * Set the Dosage and return 'this' for chaining.
   * @param {Dosage} dosage - The shr.core.Dosage
   * @returns {MedicationRequest} this.
   */
  withDosage(dosage) {
    this.dosage = dosage; return this;
  }

  /**
   * Get the MedicationRequester.
   * @returns {MedicationRequester} The shr.core.MedicationRequester
   */
  get medicationRequester() {
    return this._medicationRequester;
  }

  /**
   * Set the MedicationRequester.
   * This field/value is required.
   * @param {MedicationRequester} medicationRequester - The shr.core.MedicationRequester
   */
  set medicationRequester(medicationRequester) {
    this._medicationRequester = medicationRequester;
  }

  /**
   * Set the MedicationRequester and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicationRequester} medicationRequester - The shr.core.MedicationRequester
   * @returns {MedicationRequest} this.
   */
  withMedicationRequester(medicationRequester) {
    this.medicationRequester = medicationRequester; return this;
  }

  /**
   * Get the NumberOfRefillsAllowed.
   * @returns {NumberOfRefillsAllowed} The shr.core.NumberOfRefillsAllowed
   */
  get numberOfRefillsAllowed() {
    return this._numberOfRefillsAllowed;
  }

  /**
   * Set the NumberOfRefillsAllowed.
   * @param {NumberOfRefillsAllowed} numberOfRefillsAllowed - The shr.core.NumberOfRefillsAllowed
   */
  set numberOfRefillsAllowed(numberOfRefillsAllowed) {
    this._numberOfRefillsAllowed = numberOfRefillsAllowed;
  }

  /**
   * Set the NumberOfRefillsAllowed and return 'this' for chaining.
   * @param {NumberOfRefillsAllowed} numberOfRefillsAllowed - The shr.core.NumberOfRefillsAllowed
   * @returns {MedicationRequest} this.
   */
  withNumberOfRefillsAllowed(numberOfRefillsAllowed) {
    this.numberOfRefillsAllowed = numberOfRefillsAllowed; return this;
  }

  /**
   * Get the QuantityPerDispense.
   * @returns {QuantityPerDispense} The shr.core.QuantityPerDispense
   */
  get quantityPerDispense() {
    return this._quantityPerDispense;
  }

  /**
   * Set the QuantityPerDispense.
   * @param {QuantityPerDispense} quantityPerDispense - The shr.core.QuantityPerDispense
   */
  set quantityPerDispense(quantityPerDispense) {
    this._quantityPerDispense = quantityPerDispense;
  }

  /**
   * Set the QuantityPerDispense and return 'this' for chaining.
   * @param {QuantityPerDispense} quantityPerDispense - The shr.core.QuantityPerDispense
   * @returns {MedicationRequest} this.
   */
  withQuantityPerDispense(quantityPerDispense) {
    this.quantityPerDispense = quantityPerDispense; return this;
  }

  /**
   * Get the SupplyDuration.
   * @returns {SupplyDuration} The shr.core.SupplyDuration
   */
  get supplyDuration() {
    return this._supplyDuration;
  }

  /**
   * Set the SupplyDuration.
   * @param {SupplyDuration} supplyDuration - The shr.core.SupplyDuration
   */
  set supplyDuration(supplyDuration) {
    this._supplyDuration = supplyDuration;
  }

  /**
   * Set the SupplyDuration and return 'this' for chaining.
   * @param {SupplyDuration} supplyDuration - The shr.core.SupplyDuration
   * @returns {MedicationRequest} this.
   */
  withSupplyDuration(supplyDuration) {
    this.supplyDuration = supplyDuration; return this;
  }

  /**
   * Get the SubstitutionAllowed.
   * @returns {SubstitutionAllowed} The shr.core.SubstitutionAllowed
   */
  get substitutionAllowed() {
    return this._substitutionAllowed;
  }

  /**
   * Set the SubstitutionAllowed.
   * @param {SubstitutionAllowed} substitutionAllowed - The shr.core.SubstitutionAllowed
   */
  set substitutionAllowed(substitutionAllowed) {
    this._substitutionAllowed = substitutionAllowed;
  }

  /**
   * Set the SubstitutionAllowed and return 'this' for chaining.
   * @param {SubstitutionAllowed} substitutionAllowed - The shr.core.SubstitutionAllowed
   * @returns {MedicationRequest} this.
   */
  withSubstitutionAllowed(substitutionAllowed) {
    this.substitutionAllowed = substitutionAllowed; return this;
  }

  /**
   * Get the SubstitutionReason.
   * @returns {SubstitutionReason} The shr.core.SubstitutionReason
   */
  get substitutionReason() {
    return this._substitutionReason;
  }

  /**
   * Set the SubstitutionReason.
   * @param {SubstitutionReason} substitutionReason - The shr.core.SubstitutionReason
   */
  set substitutionReason(substitutionReason) {
    this._substitutionReason = substitutionReason;
  }

  /**
   * Set the SubstitutionReason and return 'this' for chaining.
   * @param {SubstitutionReason} substitutionReason - The shr.core.SubstitutionReason
   * @returns {MedicationRequest} this.
   */
  withSubstitutionReason(substitutionReason) {
    this.substitutionReason = substitutionReason; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationRequest class.
   * The JSON must be valid against the MedicationRequest JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationRequest} An instance of MedicationRequest populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'MedicationRequest');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationRequest class to a JSON object.
   * The JSON is expected to be valid against the MedicationRequest JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/MedicationRequest' };
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
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.requestIntent != null) {
      inst['RequestIntent'] = typeof this.requestIntent.toJSON === 'function' ? this.requestIntent.toJSON() : this.requestIntent;
    }
    if (this.expectedPerformanceTime != null) {
      inst['ExpectedPerformanceTime'] = typeof this.expectedPerformanceTime.toJSON === 'function' ? this.expectedPerformanceTime.toJSON() : this.expectedPerformanceTime;
    }
    if (this.expectedPerformerType != null) {
      inst['ExpectedPerformerType'] = typeof this.expectedPerformerType.toJSON === 'function' ? this.expectedPerformerType.toJSON() : this.expectedPerformerType;
    }
    if (this.recipient != null) {
      inst['Recipient'] = typeof this.recipient.toJSON === 'function' ? this.recipient.toJSON() : this.recipient;
    }
    if (this.priorityCode != null) {
      inst['PriorityCode'] = typeof this.priorityCode.toJSON === 'function' ? this.priorityCode.toJSON() : this.priorityCode;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.communicationMethod != null) {
      inst['CommunicationMethod'] = typeof this.communicationMethod.toJSON === 'function' ? this.communicationMethod.toJSON() : this.communicationMethod;
    }
    if (this.medicationCodeOrReference != null) {
      inst['MedicationCodeOrReference'] = typeof this.medicationCodeOrReference.toJSON === 'function' ? this.medicationCodeOrReference.toJSON() : this.medicationCodeOrReference;
    }
    if (this.dosage != null) {
      inst['Dosage'] = typeof this.dosage.toJSON === 'function' ? this.dosage.toJSON() : this.dosage;
    }
    if (this.medicationRequester != null) {
      inst['MedicationRequester'] = typeof this.medicationRequester.toJSON === 'function' ? this.medicationRequester.toJSON() : this.medicationRequester;
    }
    if (this.numberOfRefillsAllowed != null) {
      inst['NumberOfRefillsAllowed'] = typeof this.numberOfRefillsAllowed.toJSON === 'function' ? this.numberOfRefillsAllowed.toJSON() : this.numberOfRefillsAllowed;
    }
    if (this.quantityPerDispense != null) {
      inst['QuantityPerDispense'] = typeof this.quantityPerDispense.toJSON === 'function' ? this.quantityPerDispense.toJSON() : this.quantityPerDispense;
    }
    if (this.supplyDuration != null) {
      inst['SupplyDuration'] = typeof this.supplyDuration.toJSON === 'function' ? this.supplyDuration.toJSON() : this.supplyDuration;
    }
    if (this.substitutionAllowed != null) {
      inst['SubstitutionAllowed'] = typeof this.substitutionAllowed.toJSON === 'function' ? this.substitutionAllowed.toJSON() : this.substitutionAllowed;
    }
    if (this.substitutionReason != null) {
      inst['SubstitutionReason'] = typeof this.substitutionReason.toJSON === 'function' ? this.substitutionReason.toJSON() : this.substitutionReason;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationRequest class.
   * The FHIR must be valid against the MedicationRequest FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationRequest} An instance of MedicationRequest populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'MedicationRequest');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/MedicationRequest', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RequestIntent-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RequestIntent-extension') {
        inst.requestIntent = FHIRHelper.createInstanceFromFHIR('shr.core.RequestIntent', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.requestIntent.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension') {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.type.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Recipient-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Recipient-extension') {
        inst.recipient = FHIRHelper.createInstanceFromFHIR('shr.core.Recipient', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PriorityCode-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PriorityCode-extension') {
        inst.priorityCode = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.priorityCode.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['dateWritten'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir['dateWritten'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
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
    if (fhir['prescriber'] != null) {
      const entryId = fhir['prescriber']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.medicationRequester = mappedResources[entryId];
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
    if (fhir['reasonCodeableConcept'] != null) {
      inst.reasonCode = inst.reasonCode || [];
      const inst_reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir['reasonCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.reasonCode.push(inst_reasonCode);
    }
    if (fhir['note'] != null) {
      inst.annotation = inst.annotation || [];
      const inst_annotation = FHIRHelper.createInstanceFromFHIR('shr.core.Annotation', {}, null, shrId);
      inst.annotation.push(inst_annotation);
      inst_annotation.text = FHIRHelper.createInstanceFromFHIR('shr.core.Text', fhir['note'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['medicationCodeableConcept'] != null) {
      inst.medicationCodeOrReference = FHIRHelper.createInstanceFromFHIR('shr.core.MedicationCodeOrReference', fhir['medicationCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir['medicationCodeableConcept'] != null) {
      }
    }
    if (fhir['dosageInstruction'] != null && fhir['dosageInstruction'][0] != null) {
      if (fhir['dosageInstruction'][0]['text'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.dosageInstructionsText = FHIRHelper.createInstanceFromFHIR('shr.core.DosageInstructionsText', fhir['dosageInstruction'][0]['text'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosageInstruction'][0]['timing'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.timingOfDoses = FHIRHelper.createInstanceFromFHIR('shr.core.TimingOfDoses', fhir['dosageInstruction'][0]['timing'], 'Timing', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosageInstruction'][0]['asNeededBoolean'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.asNeededIndicator = FHIRHelper.createInstanceFromFHIR('shr.core.AsNeededIndicator', fhir['dosageInstruction'][0]['asNeededBoolean'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosageInstruction'][0]['asNeededCodeableConcept'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.asNeededIndicator = FHIRHelper.createInstanceFromFHIR('shr.core.AsNeededIndicator', fhir['dosageInstruction'][0]['asNeededCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        if (fhir['dosageInstruction'][0]['asNeededCodeableConcept'] != null) {
        }
      }
      if (fhir['dosageInstruction'][0]['siteCodeableConcept'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.dosageBodyLocation = FHIRHelper.createInstanceFromFHIR('shr.core.DosageBodyLocation', fhir['dosageInstruction'][0]['siteCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosageInstruction'][0]['route'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.routeIntoBody = FHIRHelper.createInstanceFromFHIR('shr.core.RouteIntoBody', fhir['dosageInstruction'][0]['route'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosageInstruction'][0]['method'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.dosageMethod = FHIRHelper.createInstanceFromFHIR('shr.core.DosageMethod', fhir['dosageInstruction'][0]['method'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosageInstruction'][0]['doseRange'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.doseAmount = FHIRHelper.createInstanceFromFHIR('shr.core.DoseAmount', fhir['dosageInstruction'][0]['doseRange'], 'Range', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosageInstruction'][0]['maxDosePerPeriod'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.core.Dosage', {}, null, shrId);
        inst.dosage.maximumDosePerTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.MaximumDosePerTimePeriod', fhir['dosageInstruction'][0]['maxDosePerPeriod'], 'Ratio', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['dispenseRequest'] != null) {
      if (fhir['dispenseRequest']['validityPeriod'] != null) {
        inst.expectedPerformanceTime = FHIRHelper.createInstanceFromFHIR('shr.core.ExpectedPerformanceTime', fhir['dispenseRequest']['validityPeriod'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dispenseRequest']['numberOfRepeatsAllowed'] != null) {
        inst.numberOfRefillsAllowed = FHIRHelper.createInstanceFromFHIR('shr.core.NumberOfRefillsAllowed', fhir['dispenseRequest']['numberOfRepeatsAllowed'], 'positiveInt', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dispenseRequest']['quantity'] != null) {
        inst.quantityPerDispense = FHIRHelper.createInstanceFromFHIR('shr.core.QuantityPerDispense', fhir['dispenseRequest']['quantity'], 'Quantity', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dispenseRequest']['expectedSupplyDuration'] != null) {
        inst.supplyDuration = FHIRHelper.createInstanceFromFHIR('shr.core.SupplyDuration', fhir['dispenseRequest']['expectedSupplyDuration'], 'Quantity', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['substitution'] != null) {
      for (const fhir_substitution_extension of fhir['substitution']['extension'] || []) {
        if (fhir_substitution_extension['url'] != null && fhir_substitution_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SubstitutionAllowed-extension') {
          inst.substitutionAllowed = FHIRHelper.createInstanceFromFHIR('shr.core.SubstitutionAllowed', fhir_substitution_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        }
      }
      if (fhir['substitution']['reason'] != null) {
        inst.substitutionReason = FHIRHelper.createInstanceFromFHIR('shr.core.SubstitutionReason', fhir['substitution']['reason'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default MedicationRequest;
