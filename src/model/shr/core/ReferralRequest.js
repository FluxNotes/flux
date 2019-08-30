// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import ActionRequested from './ActionRequested';

/**
 * Generated class for shr.core.ReferralRequest.
 * @extends ActionRequested
 */
class ReferralRequest extends ActionRequested {

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
   * @returns {ReferralRequest} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ReferralSubjectOfRecord.
   * @returns {ReferralSubjectOfRecord} The shr.core.ReferralSubjectOfRecord
   */
  get subjectOfRecord() {
    return this._subjectOfRecord;
  }

  /**
   * Set the ReferralSubjectOfRecord.
   * This field/value is required.
   * @param {ReferralSubjectOfRecord} subjectOfRecord - The shr.core.ReferralSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the ReferralSubjectOfRecord and return 'this' for chaining.
   * This field/value is required.
   * @param {ReferralSubjectOfRecord} subjectOfRecord - The shr.core.ReferralSubjectOfRecord
   * @returns {ReferralRequest} this.
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
   * @returns {ReferralRequest} this.
   */
  withReasonCode(reasonCode) {
    this.reasonCode = reasonCode; return this;
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
   * @returns {ReferralRequest} this.
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
   * @returns {ReferralRequest} this.
   */
  withRequestIntent(requestIntent) {
    this.requestIntent = requestIntent; return this;
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
   * @returns {ReferralRequest} this.
   */
  withPriorityCode(priorityCode) {
    this.priorityCode = priorityCode; return this;
  }

  /**
   * Get the ReferralRequester.
   * @returns {ReferralRequester} The shr.core.ReferralRequester
   */
  get referralRequester() {
    return this._referralRequester;
  }

  /**
   * Set the ReferralRequester.
   * @param {ReferralRequester} referralRequester - The shr.core.ReferralRequester
   */
  set referralRequester(referralRequester) {
    this._referralRequester = referralRequester;
  }

  /**
   * Set the ReferralRequester and return 'this' for chaining.
   * @param {ReferralRequester} referralRequester - The shr.core.ReferralRequester
   * @returns {ReferralRequest} this.
   */
  withReferralRequester(referralRequester) {
    this.referralRequester = referralRequester; return this;
  }

  /**
   * Get the Replaces array.
   * @returns {Array<Replaces>} The shr.core.Replaces array
   */
  get replaces() {
    return this._replaces;
  }

  /**
   * Set the Replaces array.
   * @param {Array<Replaces>} replaces - The shr.core.Replaces array
   */
  set replaces(replaces) {
    this._replaces = replaces;
  }

  /**
   * Set the Replaces array and return 'this' for chaining.
   * @param {Array<Replaces>} replaces - The shr.core.Replaces array
   * @returns {ReferralRequest} this.
   */
  withReplaces(replaces) {
    this.replaces = replaces; return this;
  }

  /**
   * Get the ReferralRecipient array.
   * @returns {Array<ReferralRecipient>} The shr.core.ReferralRecipient array
   */
  get referralRecipient() {
    return this._referralRecipient;
  }

  /**
   * Set the ReferralRecipient array.
   * @param {Array<ReferralRecipient>} referralRecipient - The shr.core.ReferralRecipient array
   */
  set referralRecipient(referralRecipient) {
    this._referralRecipient = referralRecipient;
  }

  /**
   * Set the ReferralRecipient array and return 'this' for chaining.
   * @param {Array<ReferralRecipient>} referralRecipient - The shr.core.ReferralRecipient array
   * @returns {ReferralRequest} this.
   */
  withReferralRecipient(referralRecipient) {
    this.referralRecipient = referralRecipient; return this;
  }

  /**
   * Get the ServiceType array.
   * @returns {Array<ServiceType>} The shr.core.ServiceType array
   */
  get serviceType() {
    return this._serviceType;
  }

  /**
   * Set the ServiceType array.
   * @param {Array<ServiceType>} serviceType - The shr.core.ServiceType array
   */
  set serviceType(serviceType) {
    this._serviceType = serviceType;
  }

  /**
   * Set the ServiceType array and return 'this' for chaining.
   * @param {Array<ServiceType>} serviceType - The shr.core.ServiceType array
   * @returns {ReferralRequest} this.
   */
  withServiceType(serviceType) {
    this.serviceType = serviceType; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {ReferralRequest} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Get the RelatedInformation array.
   * @returns {Array<RelatedInformation>} The shr.core.RelatedInformation array
   */
  get relatedInformation() {
    return this._relatedInformation;
  }

  /**
   * Set the RelatedInformation array.
   * @param {Array<RelatedInformation>} relatedInformation - The shr.core.RelatedInformation array
   */
  set relatedInformation(relatedInformation) {
    this._relatedInformation = relatedInformation;
  }

  /**
   * Set the RelatedInformation array and return 'this' for chaining.
   * @param {Array<RelatedInformation>} relatedInformation - The shr.core.RelatedInformation array
   * @returns {ReferralRequest} this.
   */
  withRelatedInformation(relatedInformation) {
    this.relatedInformation = relatedInformation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ReferralRequest class.
   * The JSON must be valid against the ReferralRequest JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ReferralRequest} An instance of ReferralRequest populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ReferralRequest');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ReferralRequest class to a JSON object.
   * The JSON is expected to be valid against the ReferralRequest JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ReferralRequest' };
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
    if (this.referralRequester != null) {
      inst['ReferralRequester'] = typeof this.referralRequester.toJSON === 'function' ? this.referralRequester.toJSON() : this.referralRequester;
    }
    if (this.replaces != null) {
      inst['Replaces'] = this.replaces.map(f => f.toJSON());
    }
    if (this.referralRecipient != null) {
      inst['ReferralRecipient'] = this.referralRecipient.map(f => f.toJSON());
    }
    if (this.serviceType != null) {
      inst['ServiceType'] = this.serviceType.map(f => f.toJSON());
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.relatedInformation != null) {
      inst['RelatedInformation'] = this.relatedInformation.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ReferralRequest class.
   * The FHIR must be valid against the ReferralRequest FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ReferralRequest} An instance of ReferralRequest populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ReferralRequest');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/ReferralRequest', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Replaces-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Replaces-extension') {
        inst.replaces = inst.replaces || [];
        const inst_replaces = FHIRHelper.createInstanceFromFHIR('shr.core.Replaces', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.replaces.push(inst_replaces);
        if (fhir_extension['valueReference'] != null) {
          const entryId = fhir_extension['valueReference']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.ReferralRequest', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          if (mappedResources[entryId]) {
            inst_replaces.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/core/ReferralRequest';
            inst_replaces.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RequestIntent-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RequestIntent-extension') {
        inst.requestIntent = FHIRHelper.createInstanceFromFHIR('shr.core.RequestIntent', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.requestIntent.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonReference-extension') {
        inst.reasonReference = inst.reasonReference || [];
        const inst_reasonReference = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonReference', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonReference.push(inst_reasonReference);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExpectedPerformerType-extension') {
        inst.expectedPerformerType = FHIRHelper.createInstanceFromFHIR('shr.core.ExpectedPerformerType', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Annotation-extension') {
        inst.annotation = inst.annotation || [];
        const inst_annotation = FHIRHelper.createInstanceFromFHIR('shr.core.Annotation', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.annotation.push(inst_annotation);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CommunicationMethod-extension') {
        inst.communicationMethod = FHIRHelper.createInstanceFromFHIR('shr.core.CommunicationMethod', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReferralRecipient-extension') {
        inst.referralRecipient = inst.referralRecipient || [];
        const inst_referralRecipient = FHIRHelper.createInstanceFromFHIR('shr.core.ReferralRecipient', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.referralRecipient.push(inst_referralRecipient);
      }
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['date'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir['date'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
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
    if (fhir['requester'] != null) {
      const entryId = fhir['requester']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.referralRequester = mappedResources[entryId];
    }
    if (fhir['recipient'] != null && fhir['recipient'][0] != null) {
      const entryId = fhir['recipient'][0]['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.recipient = mappedResources[entryId];
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
    if (fhir['reason'] != null) {
      inst.reasonCode = inst.reasonCode || [];
      const inst_reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir['reason'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.reasonCode.push(inst_reasonCode);
    }
    if (fhir['description'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['description'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_serviceRequested of fhir['serviceRequested'] || []) {
      inst.serviceType = inst.serviceType || [];
      const inst_serviceType = FHIRHelper.createInstanceFromFHIR('shr.core.ServiceType', fhir_serviceRequested, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.serviceType.push(inst_serviceType);
    }
    for (const fhir_supportingInformation of fhir['supportingInformation'] || []) {
      inst.relatedInformation = inst.relatedInformation || [];
      const entryId = fhir_supportingInformation['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.DomainResource', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      const inst_relatedInformation = mappedResources[entryId];
      inst.relatedInformation.push(inst_relatedInformation);
    }
    if (fhir['fulfillmentTime'] != null) {
      inst.expectedPerformanceTime = FHIRHelper.createInstanceFromFHIR('shr.core.ExpectedPerformanceTime', fhir['fulfillmentTime'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default ReferralRequest;
