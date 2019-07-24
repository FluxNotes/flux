// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import DomainResource from './DomainResource';

/**
 * Generated class for shr.core.DocumentReference.
 * @extends DomainResource
 */
class DocumentReference extends DomainResource {

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
   * @returns {DocumentReference} this.
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
   * @returns {DocumentReference} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the MasterIdentifier.
   * @returns {MasterIdentifier} The shr.core.MasterIdentifier
   */
  get masterIdentifier() {
    return this._masterIdentifier;
  }

  /**
   * Set the MasterIdentifier.
   * @param {MasterIdentifier} masterIdentifier - The shr.core.MasterIdentifier
   */
  set masterIdentifier(masterIdentifier) {
    this._masterIdentifier = masterIdentifier;
  }

  /**
   * Set the MasterIdentifier and return 'this' for chaining.
   * @param {MasterIdentifier} masterIdentifier - The shr.core.MasterIdentifier
   * @returns {DocumentReference} this.
   */
  withMasterIdentifier(masterIdentifier) {
    this.masterIdentifier = masterIdentifier; return this;
  }

  /**
   * Get the DocumentStatus.
   * @returns {DocumentStatus} The shr.core.DocumentStatus
   */
  get documentStatus() {
    return this._documentStatus;
  }

  /**
   * Set the DocumentStatus.
   * @param {DocumentStatus} documentStatus - The shr.core.DocumentStatus
   */
  set documentStatus(documentStatus) {
    this._documentStatus = documentStatus;
  }

  /**
   * Set the DocumentStatus and return 'this' for chaining.
   * @param {DocumentStatus} documentStatus - The shr.core.DocumentStatus
   * @returns {DocumentReference} this.
   */
  withDocumentStatus(documentStatus) {
    this.documentStatus = documentStatus; return this;
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
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {DocumentReference} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * @returns {DocumentReference} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord and return 'this' for chaining.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   * @returns {DocumentReference} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
  }

  /**
   * Get the CreationDateTime.
   * @returns {CreationDateTime} The shr.core.CreationDateTime
   */
  get creationDateTime() {
    return this._creationDateTime;
  }

  /**
   * Set the CreationDateTime.
   * @param {CreationDateTime} creationDateTime - The shr.core.CreationDateTime
   */
  set creationDateTime(creationDateTime) {
    this._creationDateTime = creationDateTime;
  }

  /**
   * Set the CreationDateTime and return 'this' for chaining.
   * @param {CreationDateTime} creationDateTime - The shr.core.CreationDateTime
   * @returns {DocumentReference} this.
   */
  withCreationDateTime(creationDateTime) {
    this.creationDateTime = creationDateTime; return this;
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
   * @returns {DocumentReference} this.
   */
  withStatementDateTime(statementDateTime) {
    this.statementDateTime = statementDateTime; return this;
  }

  /**
   * Get the DocumentAuthor array.
   * @returns {Array<DocumentAuthor>} The shr.core.DocumentAuthor array
   */
  get documentAuthor() {
    return this._documentAuthor;
  }

  /**
   * Set the DocumentAuthor array.
   * @param {Array<DocumentAuthor>} documentAuthor - The shr.core.DocumentAuthor array
   */
  set documentAuthor(documentAuthor) {
    this._documentAuthor = documentAuthor;
  }

  /**
   * Set the DocumentAuthor array and return 'this' for chaining.
   * @param {Array<DocumentAuthor>} documentAuthor - The shr.core.DocumentAuthor array
   * @returns {DocumentReference} this.
   */
  withDocumentAuthor(documentAuthor) {
    this.documentAuthor = documentAuthor; return this;
  }

  /**
   * Get the Authenticator.
   * @returns {Authenticator} The shr.core.Authenticator
   */
  get authenticator() {
    return this._authenticator;
  }

  /**
   * Set the Authenticator.
   * @param {Authenticator} authenticator - The shr.core.Authenticator
   */
  set authenticator(authenticator) {
    this._authenticator = authenticator;
  }

  /**
   * Set the Authenticator and return 'this' for chaining.
   * @param {Authenticator} authenticator - The shr.core.Authenticator
   * @returns {DocumentReference} this.
   */
  withAuthenticator(authenticator) {
    this.authenticator = authenticator; return this;
  }

  /**
   * Get the ManagingOrganization.
   * @returns {ManagingOrganization} The shr.core.ManagingOrganization
   */
  get managingOrganization() {
    return this._managingOrganization;
  }

  /**
   * Set the ManagingOrganization.
   * @param {ManagingOrganization} managingOrganization - The shr.core.ManagingOrganization
   */
  set managingOrganization(managingOrganization) {
    this._managingOrganization = managingOrganization;
  }

  /**
   * Set the ManagingOrganization and return 'this' for chaining.
   * @param {ManagingOrganization} managingOrganization - The shr.core.ManagingOrganization
   * @returns {DocumentReference} this.
   */
  withManagingOrganization(managingOrganization) {
    this.managingOrganization = managingOrganization; return this;
  }

  /**
   * Get the DocumentReferenced array.
   * @returns {Array<DocumentReferenced>} The shr.core.DocumentReferenced array
   */
  get documentReferenced() {
    return this._documentReferenced;
  }

  /**
   * Set the DocumentReferenced array.
   * This field/value is required.
   * @param {Array<DocumentReferenced>} documentReferenced - The shr.core.DocumentReferenced array
   */
  set documentReferenced(documentReferenced) {
    this._documentReferenced = documentReferenced;
  }

  /**
   * Set the DocumentReferenced array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<DocumentReferenced>} documentReferenced - The shr.core.DocumentReferenced array
   * @returns {DocumentReference} this.
   */
  withDocumentReferenced(documentReferenced) {
    this.documentReferenced = documentReferenced; return this;
  }

  /**
   * Get the RelatedDocument array.
   * @returns {Array<RelatedDocument>} The shr.core.RelatedDocument array
   */
  get relatedDocument() {
    return this._relatedDocument;
  }

  /**
   * Set the RelatedDocument array.
   * @param {Array<RelatedDocument>} relatedDocument - The shr.core.RelatedDocument array
   */
  set relatedDocument(relatedDocument) {
    this._relatedDocument = relatedDocument;
  }

  /**
   * Set the RelatedDocument array and return 'this' for chaining.
   * @param {Array<RelatedDocument>} relatedDocument - The shr.core.RelatedDocument array
   * @returns {DocumentReference} this.
   */
  withRelatedDocument(relatedDocument) {
    this.relatedDocument = relatedDocument; return this;
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
   * @returns {DocumentReference} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Get the SecurityLabel array.
   * @returns {Array<SecurityLabel>} The shr.core.SecurityLabel array
   */
  get securityLabel() {
    return this._securityLabel;
  }

  /**
   * Set the SecurityLabel array.
   * @param {Array<SecurityLabel>} securityLabel - The shr.core.SecurityLabel array
   */
  set securityLabel(securityLabel) {
    this._securityLabel = securityLabel;
  }

  /**
   * Set the SecurityLabel array and return 'this' for chaining.
   * @param {Array<SecurityLabel>} securityLabel - The shr.core.SecurityLabel array
   * @returns {DocumentReference} this.
   */
  withSecurityLabel(securityLabel) {
    this.securityLabel = securityLabel; return this;
  }

  /**
   * Get the ClinicalContext.
   * @returns {ClinicalContext} The shr.core.ClinicalContext
   */
  get clinicalContext() {
    return this._clinicalContext;
  }

  /**
   * Set the ClinicalContext.
   * @param {ClinicalContext} clinicalContext - The shr.core.ClinicalContext
   */
  set clinicalContext(clinicalContext) {
    this._clinicalContext = clinicalContext;
  }

  /**
   * Set the ClinicalContext and return 'this' for chaining.
   * @param {ClinicalContext} clinicalContext - The shr.core.ClinicalContext
   * @returns {DocumentReference} this.
   */
  withClinicalContext(clinicalContext) {
    this.clinicalContext = clinicalContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DocumentReference class.
   * The JSON must be valid against the DocumentReference JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DocumentReference} An instance of DocumentReference populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'DocumentReference');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DocumentReference class to a JSON object.
   * The JSON is expected to be valid against the DocumentReference JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/DocumentReference' };
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
    if (this.masterIdentifier != null) {
      inst['MasterIdentifier'] = typeof this.masterIdentifier.toJSON === 'function' ? this.masterIdentifier.toJSON() : this.masterIdentifier;
    }
    if (this.documentStatus != null) {
      inst['DocumentStatus'] = typeof this.documentStatus.toJSON === 'function' ? this.documentStatus.toJSON() : this.documentStatus;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.subjectOfRecord != null) {
      inst['SubjectOfRecord'] = typeof this.subjectOfRecord.toJSON === 'function' ? this.subjectOfRecord.toJSON() : this.subjectOfRecord;
    }
    if (this.creationDateTime != null) {
      inst['CreationDateTime'] = typeof this.creationDateTime.toJSON === 'function' ? this.creationDateTime.toJSON() : this.creationDateTime;
    }
    if (this.statementDateTime != null) {
      inst['StatementDateTime'] = typeof this.statementDateTime.toJSON === 'function' ? this.statementDateTime.toJSON() : this.statementDateTime;
    }
    if (this.documentAuthor != null) {
      inst['DocumentAuthor'] = this.documentAuthor.map(f => f.toJSON());
    }
    if (this.authenticator != null) {
      inst['Authenticator'] = typeof this.authenticator.toJSON === 'function' ? this.authenticator.toJSON() : this.authenticator;
    }
    if (this.managingOrganization != null) {
      inst['ManagingOrganization'] = typeof this.managingOrganization.toJSON === 'function' ? this.managingOrganization.toJSON() : this.managingOrganization;
    }
    if (this.documentReferenced != null) {
      inst['DocumentReferenced'] = this.documentReferenced.map(f => f.toJSON());
    }
    if (this.relatedDocument != null) {
      inst['RelatedDocument'] = this.relatedDocument.map(f => f.toJSON());
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.securityLabel != null) {
      inst['SecurityLabel'] = this.securityLabel.map(f => f.toJSON());
    }
    if (this.clinicalContext != null) {
      inst['ClinicalContext'] = typeof this.clinicalContext.toJSON === 'function' ? this.clinicalContext.toJSON() : this.clinicalContext;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DocumentReference class.
   * The FHIR must be valid against the DocumentReference FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DocumentReference} An instance of DocumentReference populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'DocumentReference');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/DocumentReference', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.status.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = inst.identifier || [];
        const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.identifier.push(inst_identifier);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MasterIdentifier-extension') {
        inst.masterIdentifier = FHIRHelper.createInstanceFromFHIR('shr.core.MasterIdentifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DocumentStatus-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DocumentStatus-extension') {
        inst.documentStatus = FHIRHelper.createInstanceFromFHIR('shr.core.DocumentStatus', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.documentStatus.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension') {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.type.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Category-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Category-extension') {
        inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.category.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PatientSubjectOfRecord-extension') {
        inst.subjectOfRecord = FHIRHelper.createInstanceFromFHIR('shr.core.PatientSubjectOfRecord', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CreationDateTime-extension') {
        inst.creationDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.CreationDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatementDateTime-extension') {
        inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DocumentAuthor-extension') {
        inst.documentAuthor = inst.documentAuthor || [];
        const inst_documentAuthor = FHIRHelper.createInstanceFromFHIR('shr.core.DocumentAuthor', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.documentAuthor.push(inst_documentAuthor);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Authenticator-extension') {
        inst.authenticator = FHIRHelper.createInstanceFromFHIR('shr.core.Authenticator', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ManagingOrganization-extension') {
        inst.managingOrganization = FHIRHelper.createInstanceFromFHIR('shr.core.ManagingOrganization', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DocumentReferenced-extension') {
        inst.documentReferenced = inst.documentReferenced || [];
        const inst_documentReferenced = FHIRHelper.createInstanceFromFHIR('shr.core.DocumentReferenced', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.documentReferenced.push(inst_documentReferenced);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelatedDocument-extension') {
        inst.relatedDocument = inst.relatedDocument || [];
        const inst_relatedDocument = FHIRHelper.createInstanceFromFHIR('shr.core.RelatedDocument', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.relatedDocument.push(inst_relatedDocument);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CommentOrDescription-extension') {
        inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SecurityLabel-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SecurityLabel-extension') {
        inst.securityLabel = inst.securityLabel || [];
        const inst_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.securityLabel.push(inst_securityLabel);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst_securityLabel.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ClinicalContext-extension') {
        inst.clinicalContext = FHIRHelper.createInstanceFromFHIR('shr.core.ClinicalContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default DocumentReference;
