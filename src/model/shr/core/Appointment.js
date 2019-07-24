// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import DomainResource from './DomainResource';

/**
 * Generated class for shr.core.Appointment.
 * @extends DomainResource
 */
class Appointment extends DomainResource {

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
   * @returns {Appointment} this.
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
   * @returns {Appointment} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the ServiceCategory.
   * @returns {ServiceCategory} The shr.core.ServiceCategory
   */
  get serviceCategory() {
    return this._serviceCategory;
  }

  /**
   * Set the ServiceCategory.
   * @param {ServiceCategory} serviceCategory - The shr.core.ServiceCategory
   */
  set serviceCategory(serviceCategory) {
    this._serviceCategory = serviceCategory;
  }

  /**
   * Set the ServiceCategory and return 'this' for chaining.
   * @param {ServiceCategory} serviceCategory - The shr.core.ServiceCategory
   * @returns {Appointment} this.
   */
  withServiceCategory(serviceCategory) {
    this.serviceCategory = serviceCategory; return this;
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
   * @returns {Appointment} this.
   */
  withServiceType(serviceType) {
    this.serviceType = serviceType; return this;
  }

  /**
   * Get the Specialty array.
   * @returns {Array<Specialty>} The shr.core.Specialty array
   */
  get specialty() {
    return this._specialty;
  }

  /**
   * Set the Specialty array.
   * @param {Array<Specialty>} specialty - The shr.core.Specialty array
   */
  set specialty(specialty) {
    this._specialty = specialty;
  }

  /**
   * Set the Specialty array and return 'this' for chaining.
   * @param {Array<Specialty>} specialty - The shr.core.Specialty array
   * @returns {Appointment} this.
   */
  withSpecialty(specialty) {
    this.specialty = specialty; return this;
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
   * @returns {Appointment} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the ReasonCode.
   * @returns {ReasonCode} The shr.core.ReasonCode
   */
  get reasonCode() {
    return this._reasonCode;
  }

  /**
   * Set the ReasonCode.
   * @param {ReasonCode} reasonCode - The shr.core.ReasonCode
   */
  set reasonCode(reasonCode) {
    this._reasonCode = reasonCode;
  }

  /**
   * Set the ReasonCode and return 'this' for chaining.
   * @param {ReasonCode} reasonCode - The shr.core.ReasonCode
   * @returns {Appointment} this.
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
   * @returns {Appointment} this.
   */
  withReasonReference(reasonReference) {
    this.reasonReference = reasonReference; return this;
  }

  /**
   * Get the Indication array.
   * @returns {Array<Indication>} The shr.core.Indication array
   */
  get indication() {
    return this._indication;
  }

  /**
   * Set the Indication array.
   * @param {Array<Indication>} indication - The shr.core.Indication array
   */
  set indication(indication) {
    this._indication = indication;
  }

  /**
   * Set the Indication array and return 'this' for chaining.
   * @param {Array<Indication>} indication - The shr.core.Indication array
   * @returns {Appointment} this.
   */
  withIndication(indication) {
    this.indication = indication; return this;
  }

  /**
   * Get the PriorityRankUnsignedInt.
   * @returns {PriorityRankUnsignedInt} The shr.core.PriorityRankUnsignedInt
   */
  get priorityRankUnsignedInt() {
    return this._priorityRankUnsignedInt;
  }

  /**
   * Set the PriorityRankUnsignedInt.
   * @param {PriorityRankUnsignedInt} priorityRankUnsignedInt - The shr.core.PriorityRankUnsignedInt
   */
  set priorityRankUnsignedInt(priorityRankUnsignedInt) {
    this._priorityRankUnsignedInt = priorityRankUnsignedInt;
  }

  /**
   * Set the PriorityRankUnsignedInt and return 'this' for chaining.
   * @param {PriorityRankUnsignedInt} priorityRankUnsignedInt - The shr.core.PriorityRankUnsignedInt
   * @returns {Appointment} this.
   */
  withPriorityRankUnsignedInt(priorityRankUnsignedInt) {
    this.priorityRankUnsignedInt = priorityRankUnsignedInt; return this;
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
   * @returns {Appointment} this.
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
   * @returns {Appointment} this.
   */
  withRelatedInformation(relatedInformation) {
    this.relatedInformation = relatedInformation; return this;
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
   * @returns {Appointment} this.
   */
  withReferralRequest(referralRequest) {
    this.referralRequest = referralRequest; return this;
  }

  /**
   * Get the AppointmentParticipation array.
   * @returns {Array<AppointmentParticipation>} The shr.core.AppointmentParticipation array
   */
  get appointmentParticipation() {
    return this._appointmentParticipation;
  }

  /**
   * Set the AppointmentParticipation array.
   * This field/value is required.
   * @param {Array<AppointmentParticipation>} appointmentParticipation - The shr.core.AppointmentParticipation array
   */
  set appointmentParticipation(appointmentParticipation) {
    this._appointmentParticipation = appointmentParticipation;
  }

  /**
   * Set the AppointmentParticipation array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<AppointmentParticipation>} appointmentParticipation - The shr.core.AppointmentParticipation array
   * @returns {Appointment} this.
   */
  withAppointmentParticipation(appointmentParticipation) {
    this.appointmentParticipation = appointmentParticipation; return this;
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
   * @returns {Appointment} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Get the ExpectedPerformanceTime array.
   * @returns {Array<ExpectedPerformanceTime>} The shr.core.ExpectedPerformanceTime array
   */
  get expectedPerformanceTime() {
    return this._expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime array.
   * @param {Array<ExpectedPerformanceTime>} expectedPerformanceTime - The shr.core.ExpectedPerformanceTime array
   */
  set expectedPerformanceTime(expectedPerformanceTime) {
    this._expectedPerformanceTime = expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime array and return 'this' for chaining.
   * @param {Array<ExpectedPerformanceTime>} expectedPerformanceTime - The shr.core.ExpectedPerformanceTime array
   * @returns {Appointment} this.
   */
  withExpectedPerformanceTime(expectedPerformanceTime) {
    this.expectedPerformanceTime = expectedPerformanceTime; return this;
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
   * @param {StatementDateTime} statementDateTime - The shr.core.StatementDateTime
   */
  set statementDateTime(statementDateTime) {
    this._statementDateTime = statementDateTime;
  }

  /**
   * Set the StatementDateTime and return 'this' for chaining.
   * @param {StatementDateTime} statementDateTime - The shr.core.StatementDateTime
   * @returns {Appointment} this.
   */
  withStatementDateTime(statementDateTime) {
    this.statementDateTime = statementDateTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Appointment class.
   * The JSON must be valid against the Appointment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Appointment} An instance of Appointment populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Appointment');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Appointment class to a JSON object.
   * The JSON is expected to be valid against the Appointment JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Appointment' };
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
    if (this.serviceCategory != null) {
      inst['ServiceCategory'] = typeof this.serviceCategory.toJSON === 'function' ? this.serviceCategory.toJSON() : this.serviceCategory;
    }
    if (this.serviceType != null) {
      inst['ServiceType'] = this.serviceType.map(f => f.toJSON());
    }
    if (this.specialty != null) {
      inst['Specialty'] = this.specialty.map(f => f.toJSON());
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.reasonCode != null) {
      inst['ReasonCode'] = typeof this.reasonCode.toJSON === 'function' ? this.reasonCode.toJSON() : this.reasonCode;
    }
    if (this.reasonReference != null) {
      inst['ReasonReference'] = this.reasonReference.map(f => f.toJSON());
    }
    if (this.indication != null) {
      inst['Indication'] = this.indication.map(f => f.toJSON());
    }
    if (this.priorityRankUnsignedInt != null) {
      inst['PriorityRankUnsignedInt'] = typeof this.priorityRankUnsignedInt.toJSON === 'function' ? this.priorityRankUnsignedInt.toJSON() : this.priorityRankUnsignedInt;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.relatedInformation != null) {
      inst['RelatedInformation'] = this.relatedInformation.map(f => f.toJSON());
    }
    if (this.referralRequest != null) {
      inst['ReferralRequest'] = this.referralRequest.map(f => f.toJSON());
    }
    if (this.appointmentParticipation != null) {
      inst['AppointmentParticipation'] = this.appointmentParticipation.map(f => f.toJSON());
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    if (this.expectedPerformanceTime != null) {
      inst['ExpectedPerformanceTime'] = this.expectedPerformanceTime.map(f => f.toJSON());
    }
    if (this.statementDateTime != null) {
      inst['StatementDateTime'] = typeof this.statementDateTime.toJSON === 'function' ? this.statementDateTime.toJSON() : this.statementDateTime;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Appointment class.
   * The FHIR must be valid against the Appointment FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Appointment} An instance of Appointment populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Appointment');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Appointment', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Specialty-extension') {
        inst.specialty = inst.specialty || [];
        const inst_specialty = FHIRHelper.createInstanceFromFHIR('shr.core.Specialty', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.specialty.push(inst_specialty);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonReference-extension') {
        inst.reasonReference = inst.reasonReference || [];
        const inst_reasonReference = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonReference', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonReference.push(inst_reasonReference);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension') {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.type.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ServiceType-extension') {
        inst.serviceType = inst.serviceType || [];
        const inst_serviceType = FHIRHelper.createInstanceFromFHIR('shr.core.ServiceType', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.serviceType.push(inst_serviceType);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ServiceCategory-extension') {
        inst.serviceCategory = FHIRHelper.createInstanceFromFHIR('shr.core.ServiceCategory', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Indication-extension') {
        inst.indication = inst.indication || [];
        const inst_indication = FHIRHelper.createInstanceFromFHIR('shr.core.Indication', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.indication.push(inst_indication);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelatedInformation-extension') {
        inst.relatedInformation = inst.relatedInformation || [];
        const inst_relatedInformation = FHIRHelper.createInstanceFromFHIR('shr.core.RelatedInformation', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.relatedInformation.push(inst_relatedInformation);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatementDateTime-extension') {
        inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReferralRequest-extension') {
        inst.referralRequest = inst.referralRequest || [];
        const inst_referralRequest = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.ReferralRequest', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
        inst.referralRequest.push(inst_referralRequest);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExpectedPerformanceTime-extension') {
        inst.expectedPerformanceTime = inst.expectedPerformanceTime || [];
        const inst_expectedPerformanceTime = FHIRHelper.createInstanceFromFHIR('shr.core.ExpectedPerformanceTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.expectedPerformanceTime.push(inst_expectedPerformanceTime);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['reason'] != null) {
      inst.reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir['reason'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['priority'] != null) {
      inst.priorityRankUnsignedInt = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityRankUnsignedInt', fhir['priority'], 'unsignedInt', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['description'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['description'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['start'] != null) {
      inst.timePeriod = inst.timePeriod || FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', {}, null, shrId);
      inst.timePeriod.beginDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.BeginDateTime', fhir['start'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['end'] != null) {
      inst.timePeriod = inst.timePeriod || FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', {}, null, shrId);
      inst.timePeriod.endDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.EndDateTime', fhir['end'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_participant of fhir['participant'] || []) {
      inst.appointmentParticipation = inst.appointmentParticipation || [];
      const inst_appointmentParticipation = FHIRHelper.createInstanceFromFHIR('shr.core.AppointmentParticipation', fhir_participant, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      inst.appointmentParticipation.push(inst_appointmentParticipation);
      for (const fhir_participant_type of fhir_participant['type'] || []) {
        inst_appointmentParticipation.participationType = inst_appointmentParticipation.participationType || [];
        const inst_appointmentParticipation_participationType = FHIRHelper.createInstanceFromFHIR('shr.core.ParticipationType', fhir_participant_type, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        inst_appointmentParticipation.participationType.push(inst_appointmentParticipation_participationType);
      }
      if (fhir_participant['actor'] != null) {
        const entryId = fhir_participant['actor']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst_appointmentParticipation.participant = mappedResources[entryId];
      }
      if (fhir_participant['required'] != null) {
        inst_appointmentParticipation.need = FHIRHelper.createInstanceFromFHIR('shr.core.Need', fhir_participant['required'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_participant['status'] != null) {
        inst_appointmentParticipation.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_participant['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default Appointment;
