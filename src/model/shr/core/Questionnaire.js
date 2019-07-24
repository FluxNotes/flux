// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import DomainResource from './DomainResource';

/**
 * Generated class for shr.core.Questionnaire.
 * @extends DomainResource
 */
class Questionnaire extends DomainResource {

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
   * @returns {Questionnaire} this.
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
   * @returns {Questionnaire} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the Url.
   * @returns {Url} The shr.core.Url
   */
  get url() {
    return this._url;
  }

  /**
   * Set the Url.
   * @param {Url} url - The shr.core.Url
   */
  set url(url) {
    this._url = url;
  }

  /**
   * Set the Url and return 'this' for chaining.
   * @param {Url} url - The shr.core.Url
   * @returns {Questionnaire} this.
   */
  withUrl(url) {
    this.url = url; return this;
  }

  /**
   * Get the VersionString.
   * @returns {VersionString} The shr.core.VersionString
   */
  get versionString() {
    return this._versionString;
  }

  /**
   * Set the VersionString.
   * @param {VersionString} versionString - The shr.core.VersionString
   */
  set versionString(versionString) {
    this._versionString = versionString;
  }

  /**
   * Set the VersionString and return 'this' for chaining.
   * @param {VersionString} versionString - The shr.core.VersionString
   * @returns {Questionnaire} this.
   */
  withVersionString(versionString) {
    this.versionString = versionString; return this;
  }

  /**
   * Get the NameAsText.
   * @returns {NameAsText} The shr.core.NameAsText
   */
  get nameAsText() {
    return this._nameAsText;
  }

  /**
   * Set the NameAsText.
   * @param {NameAsText} nameAsText - The shr.core.NameAsText
   */
  set nameAsText(nameAsText) {
    this._nameAsText = nameAsText;
  }

  /**
   * Set the NameAsText and return 'this' for chaining.
   * @param {NameAsText} nameAsText - The shr.core.NameAsText
   * @returns {Questionnaire} this.
   */
  withNameAsText(nameAsText) {
    this.nameAsText = nameAsText; return this;
  }

  /**
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Set the Title and return 'this' for chaining.
   * @param {Title} title - The shr.core.Title
   * @returns {Questionnaire} this.
   */
  withTitle(title) {
    this.title = title; return this;
  }

  /**
   * Get the IsExperimental.
   * @returns {IsExperimental} The shr.core.IsExperimental
   */
  get isExperimental() {
    return this._isExperimental;
  }

  /**
   * Set the IsExperimental.
   * @param {IsExperimental} isExperimental - The shr.core.IsExperimental
   */
  set isExperimental(isExperimental) {
    this._isExperimental = isExperimental;
  }

  /**
   * Set the IsExperimental and return 'this' for chaining.
   * @param {IsExperimental} isExperimental - The shr.core.IsExperimental
   * @returns {Questionnaire} this.
   */
  withIsExperimental(isExperimental) {
    this.isExperimental = isExperimental; return this;
  }

  /**
   * Get the SubjectType array.
   * @returns {Array<SubjectType>} The shr.core.SubjectType array
   */
  get subjectType() {
    return this._subjectType;
  }

  /**
   * Set the SubjectType array.
   * @param {Array<SubjectType>} subjectType - The shr.core.SubjectType array
   */
  set subjectType(subjectType) {
    this._subjectType = subjectType;
  }

  /**
   * Set the SubjectType array and return 'this' for chaining.
   * @param {Array<SubjectType>} subjectType - The shr.core.SubjectType array
   * @returns {Questionnaire} this.
   */
  withSubjectType(subjectType) {
    this.subjectType = subjectType; return this;
  }

  /**
   * Get the LastUpdated.
   * @returns {LastUpdated} The shr.core.LastUpdated
   */
  get lastUpdated() {
    return this._lastUpdated;
  }

  /**
   * Set the LastUpdated.
   * @param {LastUpdated} lastUpdated - The shr.core.LastUpdated
   */
  set lastUpdated(lastUpdated) {
    this._lastUpdated = lastUpdated;
  }

  /**
   * Set the LastUpdated and return 'this' for chaining.
   * @param {LastUpdated} lastUpdated - The shr.core.LastUpdated
   * @returns {Questionnaire} this.
   */
  withLastUpdated(lastUpdated) {
    this.lastUpdated = lastUpdated; return this;
  }

  /**
   * Get the PublisherName.
   * @returns {PublisherName} The shr.core.PublisherName
   */
  get publisherName() {
    return this._publisherName;
  }

  /**
   * Set the PublisherName.
   * @param {PublisherName} publisherName - The shr.core.PublisherName
   */
  set publisherName(publisherName) {
    this._publisherName = publisherName;
  }

  /**
   * Set the PublisherName and return 'this' for chaining.
   * @param {PublisherName} publisherName - The shr.core.PublisherName
   * @returns {Questionnaire} this.
   */
  withPublisherName(publisherName) {
    this.publisherName = publisherName; return this;
  }

  /**
   * Get the ContactDetail array.
   * @returns {Array<ContactDetail>} The shr.core.ContactDetail array
   */
  get contactDetail() {
    return this._contactDetail;
  }

  /**
   * Set the ContactDetail array.
   * @param {Array<ContactDetail>} contactDetail - The shr.core.ContactDetail array
   */
  set contactDetail(contactDetail) {
    this._contactDetail = contactDetail;
  }

  /**
   * Set the ContactDetail array and return 'this' for chaining.
   * @param {Array<ContactDetail>} contactDetail - The shr.core.ContactDetail array
   * @returns {Questionnaire} this.
   */
  withContactDetail(contactDetail) {
    this.contactDetail = contactDetail; return this;
  }

  /**
   * Get the DescriptionMarkdown.
   * @returns {DescriptionMarkdown} The shr.core.DescriptionMarkdown
   */
  get descriptionMarkdown() {
    return this._descriptionMarkdown;
  }

  /**
   * Set the DescriptionMarkdown.
   * @param {DescriptionMarkdown} descriptionMarkdown - The shr.core.DescriptionMarkdown
   */
  set descriptionMarkdown(descriptionMarkdown) {
    this._descriptionMarkdown = descriptionMarkdown;
  }

  /**
   * Set the DescriptionMarkdown and return 'this' for chaining.
   * @param {DescriptionMarkdown} descriptionMarkdown - The shr.core.DescriptionMarkdown
   * @returns {Questionnaire} this.
   */
  withDescriptionMarkdown(descriptionMarkdown) {
    this.descriptionMarkdown = descriptionMarkdown; return this;
  }

  /**
   * Get the UseContext array.
   * @returns {Array<UseContext>} The shr.core.UseContext array
   */
  get useContext() {
    return this._useContext;
  }

  /**
   * Set the UseContext array.
   * @param {Array<UseContext>} useContext - The shr.core.UseContext array
   */
  set useContext(useContext) {
    this._useContext = useContext;
  }

  /**
   * Set the UseContext array and return 'this' for chaining.
   * @param {Array<UseContext>} useContext - The shr.core.UseContext array
   * @returns {Questionnaire} this.
   */
  withUseContext(useContext) {
    this.useContext = useContext; return this;
  }

  /**
   * Get the Jurisdiction array.
   * @returns {Array<Jurisdiction>} The shr.core.Jurisdiction array
   */
  get jurisdiction() {
    return this._jurisdiction;
  }

  /**
   * Set the Jurisdiction array.
   * @param {Array<Jurisdiction>} jurisdiction - The shr.core.Jurisdiction array
   */
  set jurisdiction(jurisdiction) {
    this._jurisdiction = jurisdiction;
  }

  /**
   * Set the Jurisdiction array and return 'this' for chaining.
   * @param {Array<Jurisdiction>} jurisdiction - The shr.core.Jurisdiction array
   * @returns {Questionnaire} this.
   */
  withJurisdiction(jurisdiction) {
    this.jurisdiction = jurisdiction; return this;
  }

  /**
   * Get the PurposeMarkdown.
   * @returns {PurposeMarkdown} The shr.core.PurposeMarkdown
   */
  get purposeMarkdown() {
    return this._purposeMarkdown;
  }

  /**
   * Set the PurposeMarkdown.
   * @param {PurposeMarkdown} purposeMarkdown - The shr.core.PurposeMarkdown
   */
  set purposeMarkdown(purposeMarkdown) {
    this._purposeMarkdown = purposeMarkdown;
  }

  /**
   * Set the PurposeMarkdown and return 'this' for chaining.
   * @param {PurposeMarkdown} purposeMarkdown - The shr.core.PurposeMarkdown
   * @returns {Questionnaire} this.
   */
  withPurposeMarkdown(purposeMarkdown) {
    this.purposeMarkdown = purposeMarkdown; return this;
  }

  /**
   * Get the Copyright.
   * @returns {Copyright} The shr.core.Copyright
   */
  get copyright() {
    return this._copyright;
  }

  /**
   * Set the Copyright.
   * @param {Copyright} copyright - The shr.core.Copyright
   */
  set copyright(copyright) {
    this._copyright = copyright;
  }

  /**
   * Set the Copyright and return 'this' for chaining.
   * @param {Copyright} copyright - The shr.core.Copyright
   * @returns {Questionnaire} this.
   */
  withCopyright(copyright) {
    this.copyright = copyright; return this;
  }

  /**
   * Get the LastReviewedDate.
   * @returns {LastReviewedDate} The shr.core.LastReviewedDate
   */
  get lastReviewedDate() {
    return this._lastReviewedDate;
  }

  /**
   * Set the LastReviewedDate.
   * @param {LastReviewedDate} lastReviewedDate - The shr.core.LastReviewedDate
   */
  set lastReviewedDate(lastReviewedDate) {
    this._lastReviewedDate = lastReviewedDate;
  }

  /**
   * Set the LastReviewedDate and return 'this' for chaining.
   * @param {LastReviewedDate} lastReviewedDate - The shr.core.LastReviewedDate
   * @returns {Questionnaire} this.
   */
  withLastReviewedDate(lastReviewedDate) {
    this.lastReviewedDate = lastReviewedDate; return this;
  }

  /**
   * Get the ApprovalDate.
   * @returns {ApprovalDate} The shr.core.ApprovalDate
   */
  get approvalDate() {
    return this._approvalDate;
  }

  /**
   * Set the ApprovalDate.
   * @param {ApprovalDate} approvalDate - The shr.core.ApprovalDate
   */
  set approvalDate(approvalDate) {
    this._approvalDate = approvalDate;
  }

  /**
   * Set the ApprovalDate and return 'this' for chaining.
   * @param {ApprovalDate} approvalDate - The shr.core.ApprovalDate
   * @returns {Questionnaire} this.
   */
  withApprovalDate(approvalDate) {
    this.approvalDate = approvalDate; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {Questionnaire} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Get the Code array.
   * @returns {Array<Code>} The shr.core.Code array
   */
  get code() {
    return this._code;
  }

  /**
   * Set the Code array.
   * @param {Array<Code>} code - The shr.core.Code array
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the Code array and return 'this' for chaining.
   * @param {Array<Code>} code - The shr.core.Code array
   * @returns {Questionnaire} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Get the QuestionnaireItem array.
   * @returns {Array<QuestionnaireItem>} The shr.core.QuestionnaireItem array
   */
  get questionnaireItem() {
    return this._questionnaireItem;
  }

  /**
   * Set the QuestionnaireItem array.
   * @param {Array<QuestionnaireItem>} questionnaireItem - The shr.core.QuestionnaireItem array
   */
  set questionnaireItem(questionnaireItem) {
    this._questionnaireItem = questionnaireItem;
  }

  /**
   * Set the QuestionnaireItem array and return 'this' for chaining.
   * @param {Array<QuestionnaireItem>} questionnaireItem - The shr.core.QuestionnaireItem array
   * @returns {Questionnaire} this.
   */
  withQuestionnaireItem(questionnaireItem) {
    this.questionnaireItem = questionnaireItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Questionnaire class.
   * The JSON must be valid against the Questionnaire JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Questionnaire} An instance of Questionnaire populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Questionnaire');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Questionnaire class to a JSON object.
   * The JSON is expected to be valid against the Questionnaire JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Questionnaire' };
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
    if (this.url != null) {
      inst['Url'] = typeof this.url.toJSON === 'function' ? this.url.toJSON() : this.url;
    }
    if (this.versionString != null) {
      inst['VersionString'] = typeof this.versionString.toJSON === 'function' ? this.versionString.toJSON() : this.versionString;
    }
    if (this.nameAsText != null) {
      inst['NameAsText'] = typeof this.nameAsText.toJSON === 'function' ? this.nameAsText.toJSON() : this.nameAsText;
    }
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.isExperimental != null) {
      inst['IsExperimental'] = typeof this.isExperimental.toJSON === 'function' ? this.isExperimental.toJSON() : this.isExperimental;
    }
    if (this.subjectType != null) {
      inst['SubjectType'] = this.subjectType.map(f => f.toJSON());
    }
    if (this.lastUpdated != null) {
      inst['LastUpdated'] = typeof this.lastUpdated.toJSON === 'function' ? this.lastUpdated.toJSON() : this.lastUpdated;
    }
    if (this.publisherName != null) {
      inst['PublisherName'] = typeof this.publisherName.toJSON === 'function' ? this.publisherName.toJSON() : this.publisherName;
    }
    if (this.contactDetail != null) {
      inst['ContactDetail'] = this.contactDetail.map(f => f.toJSON());
    }
    if (this.descriptionMarkdown != null) {
      inst['DescriptionMarkdown'] = typeof this.descriptionMarkdown.toJSON === 'function' ? this.descriptionMarkdown.toJSON() : this.descriptionMarkdown;
    }
    if (this.useContext != null) {
      inst['UseContext'] = this.useContext.map(f => f.toJSON());
    }
    if (this.jurisdiction != null) {
      inst['Jurisdiction'] = this.jurisdiction.map(f => f.toJSON());
    }
    if (this.purposeMarkdown != null) {
      inst['PurposeMarkdown'] = typeof this.purposeMarkdown.toJSON === 'function' ? this.purposeMarkdown.toJSON() : this.purposeMarkdown;
    }
    if (this.copyright != null) {
      inst['Copyright'] = typeof this.copyright.toJSON === 'function' ? this.copyright.toJSON() : this.copyright;
    }
    if (this.lastReviewedDate != null) {
      inst['LastReviewedDate'] = typeof this.lastReviewedDate.toJSON === 'function' ? this.lastReviewedDate.toJSON() : this.lastReviewedDate;
    }
    if (this.approvalDate != null) {
      inst['ApprovalDate'] = typeof this.approvalDate.toJSON === 'function' ? this.approvalDate.toJSON() : this.approvalDate;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    if (this.code != null) {
      inst['Code'] = this.code.map(f => f.toJSON());
    }
    if (this.questionnaireItem != null) {
      inst['QuestionnaireItem'] = this.questionnaireItem.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Questionnaire class.
   * The FHIR must be valid against the Questionnaire FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Questionnaire} An instance of Questionnaire populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Questionnaire');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Questionnaire', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Url-extension') {
        inst.url = FHIRHelper.createInstanceFromFHIR('shr.core.Url', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-VersionString-extension') {
        inst.versionString = FHIRHelper.createInstanceFromFHIR('shr.core.VersionString', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-NameAsText-extension') {
        inst.nameAsText = FHIRHelper.createInstanceFromFHIR('shr.core.NameAsText', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Title-extension') {
        inst.title = FHIRHelper.createInstanceFromFHIR('shr.core.Title', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-IsExperimental-extension') {
        inst.isExperimental = FHIRHelper.createInstanceFromFHIR('shr.core.IsExperimental', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SubjectType-extension') {
        inst.subjectType = inst.subjectType || [];
        const inst_subjectType = FHIRHelper.createInstanceFromFHIR('shr.core.SubjectType', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.subjectType.push(inst_subjectType);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LastUpdated-extension') {
        inst.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PublisherName-extension') {
        inst.publisherName = FHIRHelper.createInstanceFromFHIR('shr.core.PublisherName', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ContactDetail-extension') {
        inst.contactDetail = inst.contactDetail || [];
        const inst_contactDetail = FHIRHelper.createInstanceFromFHIR('shr.core.ContactDetail', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.contactDetail.push(inst_contactDetail);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DescriptionMarkdown-extension') {
        inst.descriptionMarkdown = FHIRHelper.createInstanceFromFHIR('shr.core.DescriptionMarkdown', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-UseContext-extension') {
        inst.useContext = inst.useContext || [];
        const inst_useContext = FHIRHelper.createInstanceFromFHIR('shr.core.UseContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.useContext.push(inst_useContext);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Jurisdiction-extension') {
        inst.jurisdiction = inst.jurisdiction || [];
        const inst_jurisdiction = FHIRHelper.createInstanceFromFHIR('shr.core.Jurisdiction', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.jurisdiction.push(inst_jurisdiction);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PurposeMarkdown-extension') {
        inst.purposeMarkdown = FHIRHelper.createInstanceFromFHIR('shr.core.PurposeMarkdown', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Copyright-extension') {
        inst.copyright = FHIRHelper.createInstanceFromFHIR('shr.core.Copyright', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LastReviewedDate-extension') {
        inst.lastReviewedDate = FHIRHelper.createInstanceFromFHIR('shr.core.LastReviewedDate', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ApprovalDate-extension') {
        inst.approvalDate = FHIRHelper.createInstanceFromFHIR('shr.core.ApprovalDate', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-EffectiveTimePeriod-extension') {
        inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Code-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Code-extension') {
        inst.code = inst.code || [];
        const inst_code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.code.push(inst_code);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst_code.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-QuestionnaireItem-extension') {
        inst.questionnaireItem = inst.questionnaireItem || [];
        const inst_questionnaireItem = FHIRHelper.createInstanceFromFHIR('shr.core.QuestionnaireItem', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.questionnaireItem.push(inst_questionnaireItem);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Questionnaire;
